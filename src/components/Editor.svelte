<script lang="ts">
	import { emmetCSS, emmetHTML } from 'emmet-monaco-es';
	import * as monaco from 'monaco-editor';
	import { onDestroy, onMount } from 'svelte';
	import { registerAutoCompleteHTMLTag } from '../extensions/autocompleteTag';
	import { codesandbox, dracula, githubDark, sunburst } from '../extensions/themes';
	import { EditorPreferences as preferences } from '../stores/preferences';

	export let lang = 'ts';
	export let code = '';

	let ref: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;
	let model: monaco.editor.ITextModel;

	function loadEditor(code: string, lang: string) {
		model = monaco.editor.createModel(code, lang);
		editor.setModel(model);
	}

	onMount(() => {
		editor = monaco.editor.create(ref, {
			value: code,
			...$preferences,
			minimap: {
				enabled: $preferences.minimap
			}
		});

		editor.onDidChangeModelContent(() => {
			code = editor.getValue();
		});

		emmetHTML(monaco);
		emmetCSS(monaco);
		registerAutoCompleteHTMLTag(monaco);

		monaco.editor.defineTheme('sunburst', sunburst as any);
		monaco.editor.defineTheme('github-dark', githubDark as any);
		monaco.editor.defineTheme('dracula', dracula as any);
		monaco.editor.defineTheme('codesadbox', codesandbox as any);

		loadEditor(code, lang);
	});

	onDestroy(() => {
		monaco.editor.getModels().forEach((model) => model.dispose());
		editor.dispose();
	});
</script>

<div class="relative w-full h-full group">
	<button class="group-hover:opacity-100 opacity-0 closed"> x </button>
	<div bind:this={ref} class="h-full w-full" aria-label={lang} />
</div>

<style>
	.closed {
		@apply transition-opacity ease-in delay-100 absolute right-4 top-1 bg-black rounded-full z-50 px-3 py-1 flex justify-center items-center;
	}
</style>
