<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import Editor from './Editor.svelte';
	import Preview from './Preview.svelte';
	import { Panels } from '../stores/layout';
	import { GlobalPreferences } from '../stores/preferences';

	const { layout } = $GlobalPreferences;
	let horizontal = false;

	$: {
		horizontal = layout === 'horizontal' ? true : false;
		console.log(horizontal);
	}
</script>

<Splitpanes {horizontal}>
	{#each $Panels as { panel, view, content }}
		{#if view}
			<Pane>
				{#if panel === 'preview'}
					<Preview />
				{:else}
					<Editor lang={panel} code={content} />
				{/if}
			</Pane>
		{/if}
	{/each}
</Splitpanes>
