<script>
	export let cols = 2;
</script>

<div class={`grid grid-cols-${cols} w-auto`}>
	<div class="html" />
	<div class="css" />
	<div class="js" />
	<div />
</div>

<style>
	.html {
		@apply h-4 w-4 bg-red-600;
	}
	.css {
		@apply h-4 w-4 bg-blue-600;
	}
	.js {
		@apply h-4 w-4 bg-yellow-600;
	}
</style>
