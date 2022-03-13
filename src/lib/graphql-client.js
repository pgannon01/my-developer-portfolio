import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API

// This function will be so we can grab the data from our API before the page mounts
export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
// Exporting this to here, since we'll be using GraphQL for more than one script, so better to keep it seperated