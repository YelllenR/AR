<script lang="ts">
    import { goto } from "$app/navigation";

    const pageNavigations = [
        '/', 
        '/Landing',
        '/Projects', 
    ]; 

    let scrollPosition: number; 
    let actualPage = 0; 

    function ScrollDown(scrollPosition: ScrollIntoViewOptions){
        if(actualPage === pageNavigations.length -1){
            actualPage += 1; 

            const nextPage = actualPage; 
            goto(pageNavigations[nextPage]); 
            
            return; 
        }; 

        if(actualPage <= 0){
            actualPage -= 1; 
            const previousPage = actualPage; 
            goto(pageNavigations[previousPage]); 

            return; 
        }
    }
</script>

<!-- <svelte:window on:scrollY={ScrollDown}/> -->


