<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	export let name: string = '';
	export let label: string = '';
	export let desc: string = '';
	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = '';

	let ref: HTMLInputElement;

	onMount(() => {
		ref.type = type as HTMLInputTypeAttribute;
	});
</script>

<div class="group flex flex-col relative">
	<label for={label}><strong>{name}</strong></label>
	<span class="capitalize opacity-70">{desc}</span>
	<input bind:this={ref} bind:value {placeholder} class="input" aria-label={label} />
</div>

<style>
	.input {
		@apply w-full flex justify-between bg-white border border-jet cursor-default shadow-lg;
		@apply rounded-lg px-4 py-2 my-3 relative text-black text-lg outline-none;
	}
	label {
		@apply text-base capitalize mb-1 w-full;
	}
</style>
