<script lang="ts">
   import { training } from "./training";
   
</script>

<section class="trainingContainer">
    <div class="trainingCover">
        <div class="trainingBook">
            <label for="part-1" class="trainingBook__part trainingBook__part--1">
                <div class="imageCover"></div>
            </label>

            <input type="radio" name="part" id="part-1">

            <input type="radio" name="part" id="part-2">

            
            <label for="part-2" class="trainingBook__part trainingBook__part--4">
                <div class="trainingBook__part-back">
                    {#each training as {entity, fields, dates, projectDescriptions, completionImage} }
                        <div class="contents">
                            <h3 class="entity">{entity}</h3>
                        </div>
                    {/each}
                </div>
            </label>

            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="trainingBook__part trainingBook__part--2">
                <div class="trainingBook__part-front">
                    <div class="part__content">
                        <h2 class="part__content--title">FORMATIONS</h2>
                        <p class="part__content--turn">Tournez les pages pour les découvrir</p>
                    </div>
                </div>
            </label>

        </div>

    </div>
</section>