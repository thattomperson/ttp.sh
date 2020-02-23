<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
    });
	}
</script>

<script>
export let projects;
</script>

<div>
{#each projects as project (project)}
  <a href="/{project.title}">{project.title}</a>
{/each}
</div>