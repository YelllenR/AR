<script lang="ts">
    import '../styles/style.css'; 
    import PageTransitions from '$lib/animate/pageTransitions.svelte';
    import type {PageData} from './$types'; 
    import Navigation from '$lib/animate/navigation.svelte';
    export let data: PageData;

    let y:number;
</script>

<Navigation/>
<PageTransitions key= {data.url} duration={600}>
<main id="main-container">
    <slot/>
</main>

<footer id="footer-container">

</footer>

</PageTransitions>




    