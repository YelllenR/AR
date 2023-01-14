<script lang="ts"> 
    import { fly } from 'svelte/transition';
    import {backOut} from 'svelte/easing'; 
    import Animation from '$lib/animate/animation.svelte';

    const texts = [
        'Aurélie', 
        '',
        'ROSE'
    ]; 

    let animate = true; 
</script>


<section id="landing-page">
 
    <div class="container__background">
        <div class="content">
            <Animation>
                <div class="texts">
                    {#each texts as text, i}
                        <div class="overflow">
                            <span class="text" in:fly={{ y:100, delay: 350 * i, easing: backOut}}>
                            {text}
                            </span>
                        </div>
                    {/each}
                </div>
            </Animation>
        </div>
    </div>

</section>

