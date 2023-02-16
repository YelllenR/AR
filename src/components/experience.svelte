<script lang="ts">
	export const prerender = true;
	import { company } from './experiences';

	let flipCard = false;
	let cardSelected: number | null;

	const toggleDuty = (event: Event) => {
		const target = event.target as HTMLButtonElement;
		if (cardSelected === Number(target.dataset.cardId)) {
			cardSelected = null;
			flipCard = !flipCard;
		} else {
			flipCard = !flipCard;
			cardSelected = Number(target.dataset.cardId);
		}
	};
</script>

<section class="experience-container">
	<h2 class="experience-title">EXPERIENCES</h2>

	<div class="experience-box">
		{#each company as { title, timeline, duty, name }, i}
			<div class="CardBox">
				<div class="experience" class:showBackCard={cardSelected === i}>
					<div class="frontCard">
						<h3 class="job-title">{title}</h3>
						<h4 class="company">{name}</h4>
						<p class="dateYear">{timeline}</p>

						<button class="btn" on:click={toggleDuty} data-card-id={i}>Missions</button>
					</div>

					<div class="backCard">
						{#each duty as duties}
							<li class="dutyLists">{duties}</li>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
