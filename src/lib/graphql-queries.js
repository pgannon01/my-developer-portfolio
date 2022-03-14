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

// To help avoid code repitition, we can create a GraphQL fragment to re-use some fields on our model
const PROJECT_FRAGMENT = gql`
    fragment ProjectDetails on Project {
        name
        slug
        description
        tags
        demo
        sourceCode
        image {
            url
        }
    }
`

// With the client defined, we can use it to pass a query to the GraphCMS API.
// Using the query we made in GraphCMS, we can add that to a query variable to use with our now defined Client
export const projectsQuery = gql`
    ${PROJECT_FRAGMENT}
    query GetProjects {
        projects {
            ...ProjectDetails
        }
    }
`

// This is for the individual project, not for all projects like the projectsQuery above
export const projectQuery = gql`
    ${PROJECT_FRAGMENT}
    query GetProject($slug: String!) {
        project(where: { slug: $slug }) {
            ...ProjectDetails
        }
    }
`

const POST_FRAGMENT = gql`
    fragment PostDetails on Post {
        title
        slug
        date
        content
        tages
        coverImage {
            url
        }
        authors {
            name
        }
    }
`

export const postsQuery = gql`
    ${POST_FRAGMENT}
    query GetPosts {
        posts {
            ...PostDetails
        }
    }
`

export const postQuery = gql`
    ${POST_FRAGMENT}
    query GetPost($slug: String!) {
        post(where: { slug: $slug }) {
            ...PostDetails
        }
    }
`