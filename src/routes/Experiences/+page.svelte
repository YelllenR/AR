<script lang="ts">
    import CardsAnimationsOnScroll from "../../lib/animate/cardsAnimationsOnScroll.svelte";
    import { company } from "./experiences";
	

    let flipCard = false;
    let cardSelected: number | null;


    const toggleDuty = (event:Event) => {
        
        const target = event.target as HTMLButtonElement; 
        if( cardSelected === Number(target.dataset.cardId)){ 
            cardSelected = null; 
            flipCard = !flipCard; 
           

        }else{
            flipCard = !flipCard; 
            cardSelected = Number(target.dataset.cardId); 
        }; 
    
    }; 

</script>


<div class="experience-container">
    <h2 class="experience-title">EXPERIENCES</h2>

    <div class="experience-box">
       
        <!-- <CardsAnimationsOnScroll animation={'from-left 1.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
        </CardsAnimationsOnScroll> -->

        {#each company as {name, title, timeline, duty}, i}
        <div class="CardBox">
            <div class="experience" class:showBackCard={cardSelected === i}>
                <div class="frontCard">
                    <h3 class="job-title">{title}</h3>
                    <h4 class="company">{name}</h4>
                    <p class="dateYear">{timeline}</p>
                </div>
                <div class="backCard">
                    {#each duty as duties}
                        <li class="dutyLists">{duties}</li>
                    {/each}
                </div>
            </div>
            <button on:click={toggleDuty} data-card-id={i}>Missions</button>
        </div>
   
        {/each}
    
    </div>
</div>


