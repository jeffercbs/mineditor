<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	export let key: string = '';
	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = '';

	let ref: HTMLInputElement;

	onMount(() => {
		ref.type = type as HTMLInputTypeAttribute;
	});
</script>

<div class="group flex flex-col relative input">
	<label for={key}>{key}</label>
	<input
		bind:this={ref}
		bind:value
		{placeholder}
		class="outline-none bg-transparent"
		aria-label={key}
	/>
</div>

<style>
	.input {
		@apply border;
		@apply rounded-md px-4 pt-1 pb-2 my-3 relative;
	}
	label {
		@apply text-sm capitalize mb-1 opacity-80 w-full;
	}
</style>
