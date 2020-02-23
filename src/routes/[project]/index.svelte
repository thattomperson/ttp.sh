<!-- src/routes/blog/[slug].svelte -->
<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
    const { project } = page.params;
    return { project }
	}
</script>


<script>
export let project
</script>

<a href="/{project}/install">install</a>