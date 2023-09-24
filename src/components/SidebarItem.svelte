<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = '';
	export let icon: any = null;

	function handleClick() {
		dispatch('toggle', {
			label
		});
	}
</script>

<button
	on:click={handleClick}
	class="group opacity-70 hover:opacity-100 text-lg"
	aria-label={label}
	role="menu"
>
	<svelte:component this={icon} />
</button>
