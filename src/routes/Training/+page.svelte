<script lang="ts">
    import { training } from "./training";


</script>

<section class="trainingContainer">
    <div class="trainingCover">
        <div class="trainingBook">
            <label for="part-1" class="trainingBook__part trainingBook__part--1">
                <div class="imageCover"></div>
            </label>


           
            <label for="part-2" class="trainingBook__part trainingBook__part--3">
                <div class="trainingBook__part-front">
                    
                        <h3 class="contentSchool-entity">{training.FC1.entity}</h3>
                        <div class="informationsCourse">

                        <p class="informationsCourse-field">{training.FC1.field}</p>
                            <p class="informationsCourse-dates">{training.FC1.dates}</p>
                    </div>
                    
                </div> 
                
                    <div class="trainingBook__part-back">
                    <div class="contentSchool">
                        <h3 class="contentSchool-entity">{training.FC2.entity}21</h3>
                        <div class="informationsCourse">
                            <p class="informationsCourse-field">{training.FC2.field}</p>
                            <p class="informationsCourse-dates">{training.FC2.dates}</p>
                            <!-- <img class="informationsCourse-image" src={training.FC2.completionImage} alt="completion document"> -->
                        </div>
                    </div>
                </div>
            </label>  

       
            <input type="radio" name="part" id="part-1"/>

            <input type="radio" name="part" id="part-2"/> 
            
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="trainingBook__part trainingBook__part--2" >
                <div class="trainingBook__part-front">
                    <div class="part__content">
                        <h2 class="part__content--title">FORMATIONS</h2>
                        <p class="part__content--turn">Tournez les pages pour les découvrir</p>
                    </div>
                </div>

                <div class="trainingBook__part-back">
                    <div class="contentSchool">
                        <h3 class="contentSchool-entity">{training.OC.entity}</h3>
                        <div class="informationsCourse">
                            <p class="informationsCourse-field">{training.OC.field}</p>
                            <p class="informationsCourse-dates">{training.OC.dates}</p>
                            <img class="informationsCourse-image" src={training.OC.completionImage} alt="completion document">
                        </div>
                    </div>
                </div>
            </label>

             
 
    </div>
</section>