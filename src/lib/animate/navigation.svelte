<script lang="ts">
    import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import type ScrollIndex from "./animationsOnScroll.svelte";

    const pages = [
        '/', 
        '/Landing', 
        '/Description', 
        '/Projects', 
        '/Skills'
    ]; 

    let index = pages; 
    let current = 0; 

   export function scrollDown(){
        console.log("scrolling" + $page.url)
    }

</script>






