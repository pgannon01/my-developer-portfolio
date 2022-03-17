<script>
    import { svg_element } from "svelte/internal";
    import GithubIcon from "./github-icon.svelte";
    import LinkedinIcon from "./linkedin-icon.svelte";

</script>
<footer class="p-10 footer bg-primary text-primary-content footer-center">
    <div class="grid grid-flow-col gap-4">
        <a class="link link-hover" href="/projects">Portfolio</a> 
        <a class="link link-hover" href="/posts">Blog</a> 
        <a class="link link-hover" href="/about">About</a> 
    </div>
    <div>
        <div class="grid grid-flow-col gap-4">
            <a href="https://github.com">
                <GithubIcon />
            </a> 
            <a href="https://linkedin.com">
                <LinkedinIcon />
            </a> 
        </div>
    </div>
    <div>
        <p>
            Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved 
            by Me
        </p>
    </div>
</footer>