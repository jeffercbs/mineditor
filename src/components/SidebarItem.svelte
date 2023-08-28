<script lang="ts">
	export let href = '#';
	export let label = 'Link';
	export let icon: any = null;
</script>

<span class="group opacity-70 hover:opacity-100 transition-opacity duration-200 ease-linear">
	<a {href} aria-label={label} class="mx-2">
		<svelte:component this={icon} />
	</a>
</span>
