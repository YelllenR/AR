<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { A } from 'vitest/dist/types-71ccd11d';

	export let key: any;
	export let duration: number = 300;
</script>

{#key key}
	<div in:slide={{ duration, delay: duration }} 
  out:slide={{ duration }}>
		<slot />
	</div>
{/key}
