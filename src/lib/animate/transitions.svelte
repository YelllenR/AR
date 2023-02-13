<script lang="ts">
	import { slide } from 'svelte/transition';

	// export let key: any;
	export let duration: number = 300;
</script>

<div in:slide={{ duration, delay: duration }} out:slide={{ duration }}>
	<slot />
</div>
