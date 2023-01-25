<script lang="ts">
    import { onMount, tick } from 'svelte'
    import { afterNavigate } from '$app/navigation';

    let animation = false

    onMount(() => {
        animation = true 

    }); 

	async function play() {
		animation = false
		await tick()
		animation = true; 
	}



</script>

{#if animation}
    <slot/>
{/if}
