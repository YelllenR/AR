<script lang="ts">
	export const prerender = true;
	import { contactInformations } from './contact';
</script>

<section class="contactMainSection">
	<h2 class="contact">COORDONNEES</h2>
	<div class="containerOverallContactElement">
		<div class="sideOne">
			<div class="img" />
		</div>
		<div class="contactInformations">
			{#each contactInformations as { phone, phoneIcon, email, sendEmail, emailIcon, location, locationIcon, githubLink, githubIcon, linkedInIcon, linkedInLink, cv, downloadIcon }}
				<div class="phone">
					<i class={phoneIcon} />
					<p class="contactData">
						{phone}
					</p>
				</div>

				<div class="location">
					<i class={locationIcon} />
					<p class="contactData">{location}</p>
				</div>

				<div class="email">
					<i class={emailIcon} />
					<a class="contactDataHref" href={sendEmail}>
						<p class="contactData">{email}</p>
					</a>
				</div>

				<div class="github">
					<i class={githubIcon} />
					<a class="contactDataHref" href={githubLink}>
						<p class="contactData">YellenR</p>
					</a>
				</div>
				<div class="linkedin">
					<i class={linkedInIcon} />
					<a class="contactDataHref" href={linkedInLink}>
						<p class="contactData">Aurélie ROSE</p>
					</a>
				</div>

				<div class="cv">
					<i class={downloadIcon} />
					<a class="downloadCV" href={cv} download="Curriculum vitae"> Téléchargez le CV</a>
				</div>
			{/each}
		</div>
	</div>
</section>
