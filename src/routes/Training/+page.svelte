<script lang="ts">
	import { training } from './training';

	let backOfCard = false;
	let cardIndex: number | null;

	const seeBackOfCard = (event: Event) => {
		const target = event.target as HTMLButtonElement;

		if (cardIndex === Number(target.dataset.cardsId)) {
			cardIndex = null;
			backOfCard = !backOfCard;
			console.log('true', target.dataset.cardsId);
		} else {
			backOfCard = !backOfCard;
			cardIndex = Number(target.dataset.cardsId);
			console.log('false', target.dataset.cardsId);
		}
	};
</script>

<section class="trainingMainContainer">
	<h2 class="titleTraining">FORMATION</h2>

	<div class="trainingCardsContainer">
		{#each training as { entity, field, dates, svgIcon, completionImage }, index}
			<article class="trainingCard">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="trainingCard__box" class:backOfCard={cardIndex === index}>
					<div class="trainingCard__entityIcon">
						<img class="iconEntity" src={svgIcon} alt="icon" />
					</div>
					<div class="trainingCard__informations">
						<div class="trainingCard__informations-entity">
							<h3 class="trainingCard__informations-title">{entity}</h3>
						</div>

						<h4 class="trainingCard__informations-field">{field}</h4>
						<p class="trainingCard__informations-dates">{dates}</p>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<i class="fas fa-arrow-right turnCard" on:click={seeBackOfCard} data-cards-id={index} />
					</div>

					<div class="back">
						<p>jhcsqjcnsqj</p>
						<i class="fas fa-expand-arrows-alt" />
						<!-- <img src={completionImage} alt="completion document"> -->
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
