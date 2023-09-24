<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import { L, Panels } from '../stores/layout';
	import { GlobalPreferences as preferences } from '../stores/preferences';
	import Editor from './Editor.svelte';

	let horizontal: boolean | undefined = false;
	$: horizontal = $preferences.layout === L.horizontal ? true : false;
</script>

<Splitpanes {horizontal} theme="my-theme">
	{#each $Panels as { panel, view, content }}
		{#if view}
			<Pane minSize={1}>
				<Editor lang={panel} code={content} />
			</Pane>
		{/if}
	{/each}
</Splitpanes>
