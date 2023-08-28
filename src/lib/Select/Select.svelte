<script lang="ts">
	export let options: string[] = [];
	export let value: string = '';
	export let key: string = '';
</script>

<div class="group flex flex-col select">
	<label for={key}>{key}</label>
	<select name={key} id={key} bind:value aria-label={key}>
		{#each options as option}
			<option value={option}> {option}</option>
		{/each}
	</select>
</div>

<style>
	.select {
		@apply border;
		@apply rounded-md px-4 pt-1 pb-2 my-3 relative;
	}
	.select label {
		@apply text-sm capitalize mb-1 opacity-80 w-full;
	}
	select {
		@apply bg-transparent outline-none border-none text-lg;
	}
	select::-ms-expand {
		@apply hidden;
	}
	select option {
		@apply bg-[#27272a] px-4;
	}
</style>
