<script lang="ts">
	import { Sidebar } from '../../components';
	import '../styles.css';
</script>

<main class="flex">
	<Sidebar />
	<div class="max-w-screen max-h-screen overflow-x-hiddenflex flex-1">
		<slot />
	</div>
</main>

<!-- <ModalPackages /> -->
