<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Selector } from '../../icons';
	import SelectItem from './SelectItem.svelte';

	const dispatch = createEventDispatcher();

	export let name: string = '';
	export let label: string = '';
	export let value: string = '';
	export let desc: string = '';
	export let options: string[] = [];
	export let isOpen = false;

	function handledSelect(e: any) {
		value = e.detail.value;
		isOpen = false;

		dispatch('update', {
			label,
			value
		});
	}
</script>

<div class="relative w-full" aria-label={label}>
	<div class="flex flex-col text-base">
		<strong class="capitalize">{name}</strong>
		<span class="capitalize opacity-70">{desc}</span>
	</div>

	<button
		aria-expanded={isOpen}
		aria-label={label}
		aria-haspopup="listbox"
		class="select"
		on:click={() => (isOpen = !isOpen)}
		{value}
	>
		<span>{value}</span>
		<span class="opacity-70"><Selector /></span>
	</button>

	{#if isOpen}
		<ul class="options">
			{#each options as option}
				<SelectItem {value} {option} on:select={handledSelect} />
			{/each}
		</ul>
	{/if}
</div>

<style>
	.select {
		@apply w-full flex justify-between bg-white border border-jet cursor-default shadow-lg;
		@apply rounded-lg px-4 py-2 my-3 relative text-black text-lg;
	}

	.options {
		@apply w-full absolute z-10 bg-white text-black max-h-48 rounded-lg shadow-lg;
		@apply snap-y overflow-y-auto;
	}
</style>
