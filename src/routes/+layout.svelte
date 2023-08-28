<script>
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';

	import { GlobalPreferences } from '../stores/preferences';
	import { Header, Sidebar } from '../components';
	import './styles.css';

	let { fullscreen } = $GlobalPreferences;
</script>

<div class="app">
	{#if !fullscreen}
		<Header />
	{/if}
	<Sidebar />
	<main class="relative h-[calc(100vh-3rem)] mt-12 ml-12">
		<slot />
	</main>
</div>

<style>
	.fullscreen {
		height: 100vh !important;
		margin-top: 0 !important;
	}
</style>
