import { request, gql } from 'graphql-request'

  export function ships(path: string): any {
    const query = gql`
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
    const variables = {
        page: 1,
        }
   
    return request( path, query, variables ).then(result => result)
  }

  export function character(path: string): any {
    const query = gql`
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

    const variables = {
            page: 1,
          }
   
   
    return request( path, query, variables ).then(result => result)
  }