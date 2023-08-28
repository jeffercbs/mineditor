<script lang="ts">
	import { Select, Input } from '../lib';

	export let change: (e: any) => void;
	export let data: any[] = [];
</script>

<div class="flex-1 w-full">
	<form on:change|preventDefault={change} class="configurations">
		{#each data as { component, ...res }}
			{#if component === 'select'}
				<Select {...res} />
			{:else if component === 'input'}
				<Input {...res} />
			{/if}
		{/each}
	</form>
</div>

<style>
	.configurations {
		@apply flex flex-1 flex-col gap-4;
	}
</style>
