<script context="module">
    import ProjectCard from '$lib/components/project-card.svelte';
    import { client } from '$lib/graphql-client';
    import { gql } from 'graphql-request'

    export const load = async() => {

        // With the client defined, we can use it to pass a query to the GraphCMS API.
        // Using the query we made in GraphCMS, we can add that to a query variable to use with our now defined Client
        const query = gql`
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

        // Then we can destructure the projects from the awaited response we get from our client:
        const { projects } = await client.request(query);

        // Now that our Client has the query, we can return the response from our projects and display them as props on the page
        // The data from the GraphQL API can now be passed to the page as props in the return of the load function

        return {
            props: {
                projects, // Now that the data is being returned, we have to just display it on the page
            },
        }
    }
</script>

<script>
    // A few different types of script tags. 
    // The first, our "module" one, is meant to run the SvelteKit's load function before the page loads
    // Then this regular script tag to define any JS needed in the index.svelte file and to also accept the props whis is our projects
    // Here, we're going to accept the projects returned from the load function
    export let projects;
</script>

<h1>Recent Projects I've Worked On!</h1>

<div>
    {#each projects as { name, slug, description, image }}
        <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
</div>