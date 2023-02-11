<script lang="ts">
	import {
		languages,
		framework,
		DevAndTemplateTools,
		DatabaseAndTool,
		AdministrationTools
	} from './stacks';

	// 	import AnimationsOnScroll from '../../lib/animate/animationsOnScroll.svelte';
	//  <AnimationsOnScroll animation={'from-left 1.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
</script>

<section class="stacksMainContainer">
	<h2 class="titleStacks">Langages Framework et outils</h2>

	<div class="programmingLangContainer">
		{#each languages as { langId, name, icon, imageIcon, iconPreprocessor }}
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

	<div class="frameworksContainer">
		{#each framework as { frameworkId, frameworkName, icon, imageIcon }}
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

	<div class="toolsContainer">
		{#each DevAndTemplateTools as { toolId, toolName, icon, imageIcon }}
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

	<div class="databaseContainer">
		{#each DatabaseAndTool as { DataBase, DataBaseTool }}
			<h5 class="nameDatabase">{DataBase}</h5>
			<p class="databaseTool">{DataBaseTool}</p>
		{/each}
	</div>

	<div class="overallToolsContainer">
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
</section>
