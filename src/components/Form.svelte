<script lang="ts">
	import { updatePreferences } from '../stores/preferences';
	import { Select, Input } from '../lib';

	export let props: any[] = [];
	export let p: 'editor' | 'global' = 'editor';

	function updateData(e: any) {
		let key: string = e.detail.label;
		let value: string = e.detail.value;

		updatePreferences({ key, value, p });
	}
</script>

<div class="flex flex-1 flex-col gap-4 w-full">
	{#each props as { component, ...res }}
		{#if component === 'select'}
			<Select {...res} on:update={updateData} />
		{:else if component === 'input'}
			<Input {...res} />
		{/if}
	{/each}
</div>
