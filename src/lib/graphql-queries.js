import { gql } from "graphql-request";

// Refactored these here so we can use them elsewhere

// On our landing page, we're going to want to display some information about the Author and the Projects. This query is for the Author
export const authorsQuery = gql`
    query GetAuthors {
        authors {
            name
            intro
            bio
            slug
            picture {
                url
            }
        }
    }
`

// With the client defined, we can use it to pass a query to the GraphCMS API.
// Using the query we made in GraphCMS, we can add that to a query variable to use with our now defined Client
export const projectsQuery = gql`
    query GetProjects {
        projects {
            name
            slug
            description
            demo
            sourceCode
            image {
                url
            }
        }
    }
`