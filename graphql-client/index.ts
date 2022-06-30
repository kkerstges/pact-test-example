import { character, ships } from "./src/starwarsclient";

(async function() {
    const s = await ships('http://localhost:8080/graphql')
    console.log(s)
    const c = await character('http://localhost:8080/graphql')
    console.log(c)
}());