<!-- <script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function open() {
		dispatch('open', {
			open: false
		});
	}
</script> -->

<div class="grid place-content-center absolute inset-0 bg-black/60 backdrop-blur-lg z-50">
	<div class="w-[512px] max-h-screen h-[500px] bg-black border border-jet px-3">
		<h1>kalaks</h1>
		<slot />
		{#if $$slots.footer}
			<div class="flex">
				<slot name="footer" />
			</div>
		{/if}
	</div>
</div>
