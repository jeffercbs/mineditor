<script lang="ts">
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import jsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
	import './splitpane.css';

	import { onMount } from 'svelte';
	import Layout from '../../components/Layout.svelte';

	onMount(() => {
		self.MonacoEnvironment = {
			getWorker: function (_wrokerId, label) {
				switch (label) {
					case 'html':
						return new htmlWorker();
					case 'css':
						return new cssWorker();
					case 'javascript':
					case 'typescript':
						return new jsWorker();
					default:
						return new htmlWorker();
				}
			}
		};
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Layout />
