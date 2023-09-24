<script lang="ts">
	import { getContext } from 'svelte';
	import Form from '../../../components/Form.svelte';
	import { GetEditorOptions, GetGlobalOptions } from '../../../constants';
	import { EditorPreferences, GlobalPreferences } from '../../../stores/preferences';

	const EDITOR_OPTIONS = GetEditorOptions($EditorPreferences);
	const GLOBAL_OPTIONS = GetGlobalOptions($GlobalPreferences);

	$: getContext('preferences');
</script>

<svelte:head>
	<title>Preferences</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="mx-auto w-11/12 md:w-4/5 pt-4 relative h-screen px-8 snap-proximity scroll-smooth scroll-p-0 overflow-y-auto"
>
	<div class="border-b-2 border-jet my-12">
		<h1 class="text-3xl font-extrabold mb-4">Preferences</h1>
	</div>

	<div class="flex md:flex-row flex-col">
		<div class="w-full md:w-2/12 py-8">
			<ul class="menu">
				<li class="menu-item">
					<a href="#global">Global preferences</a>
				</li>
				<li class="menu-item">
					<a href="#editor">Editor preferences</a>
				</li>
			</ul>
		</div>

		<div class="preferences md:gap-12">
			<div class="flex md:flex-row flex-col mt-8" id="global">
				<div class="md:w-5/12 md:px-8 md:mb-0 mb-8">
					<h2 class="title">Settings Monaco Editor</h2>
				</div>
				<Form props={GLOBAL_OPTIONS} p="global" />
			</div>

			<hr />

			<div class="flex md:flex-row flex-col mt-8" id="editor">
				<div class="md:w-5/12 md:px-8 md:mb-0 mb-8">
					<h2 class="title">Preferences the Monaco Editor.</h2>
					<p class="desc">
						To enhance your experience in the editor, you have a few settings that you can customize
						to your liking.
					</p>
				</div>
				<Form props={EDITOR_OPTIONS} p="editor" />
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
	.menu-item {
		@apply my-2 text-lg lowercase list-disc underline;
	}
</style>
