<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Check } from '../../icons';

	const dispatch = createEventDispatcher();

	export let value: string = '';
	export let option: string = '';

	function handledSelect() {
		dispatch('select', {
			value: option
		});
	}
</script>

<!-- svelte-ignore a11y-role-supports-aria-props -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
	on:click|preventDefault={handledSelect}
	aria-selected={option === value ? 'true' : 'false'}
	role="option"
	class="option hover:bg-amber-100 hover:text-amber-600"
	class:select-item={option === value}
>
	{#if option === value}
		<span class="check"><Check /></span>
	{/if}
	<span>{option}</span>
</li>

<style>
	.option {
		@apply flex gap-3 w-full py-2 pl-12 pr-4 lowercase text-base;
		@apply relative cursor-default select-none;
	}
	.option .check {
		@apply absolute left-4;
	}
	.select-item {
		@apply font-bold text-amber-600;
	}
</style>
