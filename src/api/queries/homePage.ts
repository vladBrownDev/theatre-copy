import { graphql } from "../../gql"

export const GET_HOMEPAGE = graphql(/* GraphQL */`
  query homePage {
    homePage {
      data {
        attributes {
          title
          section_a {
            description
          }
        }
      }
    }
  }
`)
