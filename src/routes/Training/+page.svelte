<script lang="ts">
	import { training } from './training';
</script>

<section class="trainingMainContainer">
	<h2 class="titleTraining">FORMATION</h2>

	<div class="trainingCardsContainer">
		{#each training as { entity, field, dates, svgIcon, completionImage }}
			<article class="trainingCard">
				<!-- svelte-ignore a11y-missing-attribute -->

				<div class="trainingCard__entityIcon">
					<img class="iconEntity" src={svgIcon} alt="icon" />
				</div>
				<div class="trainingCard__informations">
					<h3 class="trainingCard__informations-title">{entity}</h3>
					<h4 class="trainingCard__informations-title">{field}</h4>
					<p class="trainingCard__informations-dates">{dates}</p>
					<div class="trainingCard__informations-entityIcon" />
				</div>
				<i class="fas fa-arrow-right" />

				<div class="trainingCard__back">
					<i class="fas fa-expand-arrows-alt" />
					<!-- <img src={completionImage} alt="completion document"> -->
				</div>
			</article>
		{/each}
	</div>
</section>
