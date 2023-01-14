<script lang="ts">
	import { linear } from "svelte/easing";
    import { slide, type FadeParams, type TransitionConfig } from "svelte/transition";
    export let key: string; 
    export let duration: number = 350; 



</script>

{#key key}
    <div 
        in:slide={{duration, delay: duration}}
        out:slide={{duration}}>
        <slot/>
    </div>
{/key}

<style>
    div{
        position: absolute;
        inset: 0;
    }
</style>