<script lang="ts">
	import { emmetCSS, emmetHTML } from 'emmet-monaco-es';
	import * as monaco from 'monaco-editor';
	import { onDestroy, onMount } from 'svelte';
	import { registerAutoCompleteHTMLTag } from '../extensions/autocompleteTag';
	import { dracula, githubDark, gruvbox, sunburst } from '../extensions/themes';
	import { useLivePreview } from '../packages/code-preview';
	import { EditorPreferences as preferences } from '../stores/preferences';

	export let lang: any;
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
			formatOnPaste: true,
			formatOnType: true,
			autoIndent: 'full',
			detectIndentation: true,
			minimap: {
				enabled: $preferences.minimap
			}
		});

		editor.onDidChangeModelContent(() => {
			useLivePreview({ code: editor.getValue(), lang });
		});

		emmetHTML(monaco);
		emmetCSS(monaco);
		registerAutoCompleteHTMLTag(monaco);

		monaco.editor.defineTheme('sunburst', sunburst);
		monaco.editor.defineTheme('github', githubDark);
		monaco.editor.defineTheme('dracula', dracula);
		monaco.editor.defineTheme('grovbox', gruvbox);

		loadEditor(code, lang);
	});

	onDestroy(() => {
		monaco.editor.getModels().forEach((model) => model.dispose());
		editor.dispose();
	});
</script>

<div class="relative w-full h-full group">
	<img
		src={`/${lang}.svg`}
		width="30"
		height="30"
		alt={lang}
		class="absolute right-6 bottom-4 z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-300"
	/>
	<div bind:this={ref} class="h-full w-full" aria-label={lang} />
</div>
