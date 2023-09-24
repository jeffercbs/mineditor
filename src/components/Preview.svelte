<script lang="ts">
	let url = window.location.origin + '/preview';
	let ref: HTMLIFrameElement;
</script>

<div class="w-full h-full">
	<div class="w-full h-10 bg-night px-3 py-1 flex gap-1 border-b border-jet">
		<input type="text" bind:value={url} name="preview" disabled class="input" />
		<a href={url} class="bg-jet px-2 py-1">p</a>
	</div>
	<iframe src={url} title="preview" class="w-full h-full" bind:this={ref} />
</div>

<style>
	.input {
		@apply w-full h-full bg-jet border-jet px-2 text-sm opacity-75;
	}
</style>
