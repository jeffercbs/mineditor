<script lang="ts">
	import Form from '../../components/Form.svelte';
	import { editorOptions, globalOptions } from '../../constants/preferences';
	import {
		EditorPreferences,
		GlobalPreferences,
		updateSettingsEditor,
		updateSettingsGlobal
	} from '../../stores/preferences';

	const EDITOR_OPTIONS = editorOptions($EditorPreferences);
	const GLOBAL_OPTIONS = globalOptions($GlobalPreferences);

	function formGlobalPref(e: any) {
		const key = e.srcElement.ariaLabel;
		const value = e.srcElement.value;

		updateSettingsGlobal({ key, value });
	}

	function formEditorPref(e: any) {
		const key = e.srcElement.ariaLabel;
		const value = e.srcElement.value;

		updateSettingsEditor({ key, value });
	}
</script>

<svelte:head>
	<title>Preferences</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx-auto w-full md:w-4/5 pt-4">
	<div class="border-b-2 border-jet my-12">
		<h1 class="text-3xl font-bold mb-4">Preferences</h1>
	</div>

	<div class="flex">
		<div class="w-1/5 py-8">
			<a href="#editor">Editor preferences</a>
			<a href="#global">Global preferences</a>
		</div>
		<div class="preferences" id="editor">
			<div class="flex mt-8">
				<div class="w-5/12 px-8">
					<h2 class="title">Preferences the Monaco Editor.</h2>
					<p class="desc">
						To enhance your experience in the editor, you have a few settings that you can customize
						to your liking.
					</p>
				</div>
				<Form data={EDITOR_OPTIONS} change={formEditorPref} />
			</div>

			<div class="preferences" id="global">
				<div class="flex mt-8">
					<div class="w-5/12 px-8">
						<h2 class="title">Settings Monaco Editor</h2>
					</div>
					<Form data={GLOBAL_OPTIONS} change={formGlobalPref} />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.preferences {
		@apply flex flex-col flex-1;
	}
	.preferences .title {
		@apply text-xl font-semibold mb-4;
	}
	.preferences .desc {
		@apply opacity-80 text-base;
	}
</style>
