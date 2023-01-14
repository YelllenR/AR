<script lang="ts">
import { onMount, tick } from 'svelte'

let animation = false

onMount(() => {
    animation = true
})

async function replay() {
    animation = false
    await tick()
    animation = true
}
    
</script>

{#if animation}
	<slot />
{/if}