<script lang="ts">
	import { onMount } from 'svelte';

	let animation = false;
	let fade = false;

	onMount(() => {
		animation = true;
	});

</script>

{#if animation}
	<slot></slot>
{/if}



