<script>
	import { Document, Settings, Packages } from '../icons';
	import SidebarItem from './SidebarItem.svelte';

	const Items = [
		{
			label: 'editor',
			icon: Document,
			href: '/'
		},
		{
			label: 'preferences',
			icon: Settings,
			href: '/preferences'
		}
	];
</script>

<aside class="sidebar bg-night">
	<ul>
		<li class="sidebar-item">
			<SidebarItem label="editor" icon={Document} href="/" />
		</li>
		<li class="sidebar-item">
			<button>
				<Packages />
			</button>
		</li>
	</ul>
	<div class="sidebar-item">
		<SidebarItem label="preferences" icon={Settings} href="/preferences" />
	</div>
</aside>

<style>
	.sidebar {
		@apply fixed flex flex-col justify-between inset-y-0 bottom-0 pt-12 w-12 h-full border-r border-jet;
	}
	.sidebar-item {
		@apply h-10 flex items-center justify-center;
		@apply my-4 relative;
	}
</style>
