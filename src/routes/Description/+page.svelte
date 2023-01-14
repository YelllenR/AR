<script lang="ts">
    import type {TransitionConfig} from 'svelte/transition'; 
    import Animation from '$lib/animate/animation.svelte';

    type TypewriterParams = {speed?: number}; 

    type Typewriter =( 
        node: Element, 
        params?: TypewriterParams
    ) => TransitionConfig; 

    const typewriter: Typewriter = (
        node, 
        {speed = 1} = {}
    ) => {
        const describe = node.textContent ?? ''; 
        const duration = describe.length / (speed * 0.01); 
        const delay = 600; 
        return{
            duration,
            delay,  
            tick: (t) => {
                const index = Math.trunc(describe.length * t); 
                node.textContent = describe.slice(0, index); 
            }
        }
    }

   let animate = true; 
</script>

<section id="description">
    <div class="descriptionContainer">
     
            <Animation>
                <h2 in:typewriter class="describe">
                    Who am i...
                </h2>


            </Animation>
      
    </div>
</section>