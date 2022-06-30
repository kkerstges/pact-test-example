const { pactWith } = require("jest-pact")
const { GraphQLInteraction, Matchers } = require("@pact-foundation/pact")
const { character, ships } = require("./starwarsclient");
const { like, eachLike } = Matchers

pactWith(
    { consumer: "graphql client", provider: "nest adapter", logLevel: "debug" },
    provider => {
      describe("Characters Endpoint", () => {
        describe("fetch characters on /graphql", () => {
            beforeEach(() => {
                const graphqlQuery = new GraphQLInteraction()
                    .uponReceiving("a character request")
                    .withQuery(
                        `
                            query Characters($page: Int = 1){
                                characters(page: $page){
                                    count
                                    results{
                                        name
                                        gender
                                        mass
                                        height
                                    }
                                }
                            }
                        `
                    )
                    .withOperation("Characters")
                    .withRequest({
                        path: "/graphql",
                        method: "POST",
                    })
                    .withVariables({
                        page: 1,
                    })
                    .willRespondWith({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        },
                        body: {
                            data: {
                                characters: {
                                    count: like(82),
                                    results: eachLike({
                                            name: like("Luke Skywalker"),
                                            gender: like("male"),
                                            mass: like("77"),
                                            height: like("172")
                                        })
                                    }
                                },
                            },
                        })

                provider.addInteraction(graphqlQuery)
            });

            it("returns the correct response", async () => {
                return expect(await character(provider.mockService.baseUrl + '/graphql'))
                    .toEqual({
                        "characters": {
                            "count": 82, 
                            "results": [
                                {
                                    "gender": "male", 
                                    "height": "172", 
                                    "mass": "77", 
                                    "name": 
                                    "Luke Skywalker"
                                }
                            ]
                        }
                    });
            })
        })
      })
  
      describe("ships Endpoint", () => {
        describe("fetch ships on /graphql", () => {
            beforeEach(() => {
                const graphqlQuery = new GraphQLInteraction()
                    .uponReceiving("a ships request")
                    .withQuery(
                        `
                            query Ships($page: Int = 1){
                                ships(page: $page){
                                    count
                                    results{
                                        name
                                        length
                                        crew
                                        starship_class
                                    }
                                }
                            }
                        `
                    )
                    .withOperation("Ships")
                    .withRequest({
                        path: "/graphql",
                        method: "POST",
                    })
                    .withVariables({
                        page: 1,
                    })
                    .willRespondWith({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        },
                        body: {
                            data: {
                                ships: {
                                    count: like(36),
                                    results: eachLike({
                                                name: like("CR90 corvette"),
                                                length: like("150"),
                                                crew: like("30-165"),
                                                starship_class: like("corvette")
                                            })
                                }
                            },
                        },
                    })

                provider.addInteraction(graphqlQuery)
            });

            it("returns the correct response", async () => {
                return expect(await ships(provider.mockService.baseUrl + '/graphql'))
                    .toEqual({
                        "ships": {
                            "count": 36, 
                            "results": [
                                {
                                    "starship_class": "corvette", 
                                    "crew": "30-165", 
                                    "length": "150", 
                                    "name": "CR90 corvette"
                                }
                            ]
                        }
                    });
            })
        })
      })
    }
  )
