<script lang="ts">
	import { training } from './training';
	import { onMount } from 'svelte';

	let backOfCard = false;
	let cardIndex: number | null;

	const seeBackOfCard = (event: Event) => {
		const target = event.target as HTMLButtonElement;

		if (cardIndex === Number(target.dataset.cardsId)) {
			cardIndex = null;
			backOfCard = !backOfCard;
		} else {
			backOfCard = !backOfCard;
			cardIndex = Number(target.dataset.cardsId);
		}
	};

	let expandCompletionImage = false;
	let trainingImageIndex: number | null;
	let closeModal = false;

	const expandTrainingImage = (expand: Event) => {
		const imageTarget = expand.target as HTMLButtonElement;

		if (trainingImageIndex === Number(imageTarget.dataset.imageId)) {
			trainingImageIndex = null;
			expandCompletionImage = !expandCompletionImage;
			console.log(trainingImageIndex);
		} else {
			expandCompletionImage = !expandCompletionImage;
			trainingImageIndex = Number(imageTarget.dataset.imageId);
			console.log(trainingImageIndex);
		}
	};

	const closeTrainingModal = (closeTrainingImage: Event) => {
		const closeImage = closeTrainingImage.target as HTMLButtonElement;

		if (trainingImageIndex === Number(closeImage.dataset.closeId)) {
			closeModal = !closeModal;
			trainingImageIndex = null;
			console.log(trainingImageIndex);
		} else {
			closeModal = !closeModal;
			trainingImageIndex = Number(closeImage.dataset.closeId);
			console.log(trainingImageIndex);
		}
	};
</script>

<section class="trainingMainContainer">
	<h2 class="titleTraining">FORMATION</h2>

	<div class="trainingCardsContainer">
		{#each training as { entity, field, dates, svgIcon, completionImage }, index}
			<article class="trainingCard">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class:backOfCard={cardIndex === index}>
					<div class="frontTrainingCard">
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
							<i
								class="fas fa-arrow-right turnCard"
								on:click={seeBackOfCard}
								data-cards-id={index}
							/>
						</div>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="trainingDatas" on:click={expandTrainingImage}>
						<!-- <i class="fas fa-expand-arrows-alt expand-arrow" data-image-id={index} /> -->
						<img
							class="trainingDatas__trainingCompleted"
							src={completionImage}
							alt="completion document"
							data-image-id={index}
						/>
					</div>

					{#if expandCompletionImage && (trainingImageIndex === index)}
						<div class="modal">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<i class="far fa-window-close" on:click={closeTrainingModal} data-close-id={index} />
							<span class="openModal">
								<img
									class="expandedImage"
									src={completionImage}
									alt="completion document"
									data-image-id={index}
								/>
							</span>
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
