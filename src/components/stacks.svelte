<script lang="ts">
	export const prerender = true;
	import {
		languages,
		framework,
		DevAndTemplateTools,
		DatabaseAndTool,
		AdministrationTools
	} from './stacks';

	import { inview } from 'svelte-inview';
	import { slide } from 'svelte/transition';

	let isInView: boolean;
</script>

<section
	class="stacksMainContainer"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<h2 class="titleStacks">Langages Framework et outils</h2>

		<div class="programmingLangContainer"  in:slide={{ duration: 400, delay: 500 }}>
			{#each languages as { name, icon, imageIcon, iconPreprocessor }}
				<div class="programmingLangContainer__data">
					<h5 class="lang">{name}</h5>

					<div class="iconStacks">
						<i class={icon} />

						{#if iconPreprocessor}
							<i class={iconPreprocessor} />
						{/if}
					</div>

					{#if imageIcon}
						<img class="imgIcon" src={imageIcon} alt="icon" />
					{/if}
				</div>
			{/each}
		</div>

		<div class="frameworksContainer" in:slide={{ duration: 500, delay: 600 }}>
			{#each framework as { frameworkName, icon, imageIcon }}
				<div class="frameworksContainer__data">
					<h5 class="name">{frameworkName}</h5>

					<div class="iconStacks">
						<i class={icon} />
						{#if imageIcon}
							<img class="imgIcon" src={imageIcon} alt="icon" />
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="toolsContainer" in:slide={{ duration: 600, delay: 700 }}>
			{#each DevAndTemplateTools as { toolName, icon, imageIcon }}
				<div class="toolsContainer__data">
					<h5 class="name">{toolName}</h5>

					<div class="iconStacks">
						<i class={icon} />
						{#if imageIcon}
							<img class="imgIcon" src={imageIcon} alt="icon" />
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="databaseContainer" in:slide={{ duration: 700, delay: 800 }}>
			{#each DatabaseAndTool as { DataBase, DataBaseTool }}
				<h5 class="nameDatabase">{DataBase}</h5>
				<p class="databaseTool">{DataBaseTool}</p>
			{/each}
		</div>

		<div class="overallToolsContainer" in:slide={{ duration: 800, delay: 900 }}>
			{#each AdministrationTools as { administrationToolName, imageIcon }}
				<div class="overallToolsContainer__data">
					<h5 class="name">{administrationToolName}</h5>

					<div class="iconStacks">
						{#if imageIcon}
							<img class="imgIcon" src={imageIcon} alt="icon" />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
