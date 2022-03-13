<script context="module">
    import ProjectCard from '$lib/components/project-card.svelte';
    import { client } from '$lib/graphql-client';
    import { authorsQuery, projectsQuery } from '$lib/graphql-queries';

    export const load = async() => {
        const [authorReq, projectsReq] = await Promise.all([
            client.request(authorsQuery),
            client.request(projectsQuery),
        ])
        const { authors } = authorReq
        const { projects } = projectsReq

        // Then we can destructure the projects from the awaited response we get from our client:
        // const { projects } = await client.request(projectsQuery); // Commenting out because we changed to a different method above
        // Changed it to help make sure we get all the query requests we need

        // Now that our Client has the query, we can return the response from our projects and display them as props on the page
        // The data from the GraphQL API can now be passed to the page as props in the return of the load function

        return {
            props: {
                projects, // Now that the data is being returned, we have to just display it on the page
                authors,
            },
        }
    }
</script>

<script>
    // A few different types of script tags. 
    // The first, our "module" one, is meant to run the SvelteKit's load function before the page loads
    // Then this regular script tag to define any JS needed in the index.svelte file and to also accept the props whis is our projects
    // Here, we're going to accept the projects returned from the load function
    export let projects
    export let authors
</script>

<svelte:head>
    <title>My Portfolio Project</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">
    Welcome to my Portfolio!
</h1>

{#each authors as { name, intro, picture: { url} }}
    <div class="flex mb-40 items-end">
        <div class="mr-6">
            <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
            <p class="text-xl mb-4">{intro}</p>
        </div>

        <img class="mask mask-squircle h-48" src={url} alt={name}>
    </div>
{/each}

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
    {#each projects as { name, slug, description, image }}
        <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
</div>