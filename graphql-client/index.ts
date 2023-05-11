import { character, ships } from "./src/starwarsclient";

(async function() {
    const s = await ships('http://localhost:8080/graphql')
    console.log(s)
    s.ships.results.forEach(ship => console.log(ship.name))

    const c = await character('http://localhost:8080/graphql')
    console.log(c)

    c.characters.results.forEach(char => console.log(char.name))
}());