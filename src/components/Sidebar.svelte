<script lang="ts">
	import { Document, Settings, Packages, Download } from '../icons';
	import SidebarItem from './SidebarItem.svelte';

	let isOpen = true;
	let panel = '';

	const handleToggle = (e: any) => {
		isOpen = true;
		panel = e.detail.label;
	};
</script>

<aside class="sidebar bg-night relative">
	<div class="flex flex-col justify-between items-center w-12 border-r border-jet">
		<div class="flex flex-col items-center gap-2">
			<SidebarItem label="document" icon={Document} on:toggle={handleToggle} />
			<SidebarItem label="packages" icon={Packages} on:toggle={handleToggle} />
			<SidebarItem label="download" icon={Download} on:toggle={handleToggle} />
		</div>
		<a href="/preferences">
			<Settings />
		</a>
	</div>
	{#if isOpen}
		<div class="w-72 relative">
			{#if panel === 'document'}
				<h1>code</h1>
			{:else if panel === 'packages'}
				<h1>Packages</h1>
			{:else if panel === 'download'}
				<h1>Download</h1>
			{/if}

			<button
				class="absolute inset-y-0 -right-4 z-10 my-auto bg-black border border-jet w-8 h-8 p-1 rounded-full text-white flex justify-center items-center"
				on:click={() => (isOpen = false)}>x</button
			>
		</div>
	{/if}
</aside>

<style>
	.sidebar {
		@apply static z-10 flex w-auto pt-2 h-screen border-r border-jet;
	}
</style>
