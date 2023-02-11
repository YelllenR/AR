<!-- <script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';

  export let animation = "none";
  export let animationCardOut = "none; opacity: 0";
  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let cssObserver = "";
  export let css_animations = "";
 
  const dispatch = createEventDispatcher();
  $: dispatch('update', {'observing': observing});
 
  let observing = true;
  
  const cardContainer = `${Math.random()}`;

  function intersection_verify(card:any) {
   
    const rootMargin = `${-bottom}px 0px ${-top}px 0px`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        observing = entries[0].isIntersecting;
        if (observing && once) {
          observer.unobserve(card);
          console.log(observing)
        }
      },
      {
        rootMargin,
      }
    );
    observer.observe(card);
    return () => observer.unobserve(card);
  }; 

  onMount(() => {
    const card = document.getElementById(cardContainer);
    if (IntersectionObserver) {
      console.log(card)
      return intersection_verify(card);
    } 
  })

</script>

<div id={cardContainer} style={cssObserver}>
  {#if observing}
    <div style="animation: {animation}; {css_animations}">
      <slot />
    </div>
  {:else}
    <div style="animation: {animationCardOut}; {css_animations}">
      <slot />
    </div>
  {/if}
</div> -->