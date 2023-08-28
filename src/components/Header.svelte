<script lang="ts">
	import { writable } from 'svelte/store';
	import { Vertical, Horizontal, Grid, Menu, Share } from '../icons';
	import { updateSettingsGlobal, GlobalPreferences as preferences } from '../stores/preferences';

	let isEdit = writable(false);
	let nameProject = $preferences.nameProject;

	function updateLayout(layout: string) {
		updateSettingsGlobal({ key: 'layout', value: layout });
	}

	enum L {
		vertical = 'vertical',
		horizontal = 'horizontal',
		grid = 'grid'
	}

	const editName = () => isEdit.set(true);
	const saveName = () => isEdit.set(false);
</script>

<header class="w-full fixed inset-x-0 top-0 z-50 bg-night">
	<div class="flex gap-6">
		<button type="button">
			<Menu />
		</button>
		<a href="/"> Minieditor </a>
	</div>
	<div class="min-w-[200px] border border-jet rounded-md">
		{#if $isEdit}
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="text"
				class="bg-transparent outline-none w-full text-center"
				autofocus
				bind:value={nameProject}
				on:blur={saveName}
				on:keydown={(e) => e.key === 'Enter' && saveName()}
			/>
		{:else}
			<button class="w-full text-center opacity-80" type="button" on:click={editName}>
				{nameProject}
			</button>
		{/if}
	</div>
	<div class="flex gap-6">
		<button class="btn bg-lime-200 text-black"><Share />Share</button>
		<div class="flex gap-1">
			<button type="button" on:click={() => updateLayout(L.vertical)}><Vertical /></button>
			<button type="button" on:click={() => updateLayout(L.horizontal)}><Horizontal /></button>
			<button type="button" on:click={() => updateLayout(L.grid)}><Grid /></button>
		</div>
	</div>
</header>

<style>
	header {
		@apply h-12 flex justify-between items-center px-4 border-b border-jet;
	}
	.btn {
		@apply flex gap-1 font-semibold rounded shadow-md px-2 py-1;
	}
</style>
