<script lang="ts">
    import { page } from '$app/stores';
    import '../styles/style.css'; 
    import PageTransitions from '../components/pageTransitions.svelte';
    import Navigation from '$lib/animate/navigation.svelte';


    let y:number;
</script>

<Navigation/>
<main id="main-container">
    <PageTransitions url={$page.url}>
        <slot/>
    </PageTransitions>
</main>








    