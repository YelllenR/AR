<script lang="ts">
	import {
		languages,
		framework,
		DevAndTemplateTools,
		DatabaseAndTool,
		AdministrationTools
	} from './stacks';

	let iconInLang;

	for (const langIcon in languages) {
		let Lang = languages[langIcon];
		iconInLang = `${Lang.icon}`;
		console.log(iconInLang);
	}
</script>

<section class="stacksMainContainer">
	<h2 class="titleStacks">Langages Framework et outils</h2>

	<div class="programmingLangContainer">
		{#each languages as { langId, name, langSvg, preprocessor }}
			<h5 class="lang">{name}</h5>

			<div class="iconStacks" />

			{#if preprocessor}
				<div class="cssPreprocess">
					{preprocessor}
				</div>
			{/if}
		{/each}
	</div>

	<div class="frameworksContainer">
		{#each framework as { frameworkId, frameworkName, icon }}
			<h5 class="name">{frameworkName}</h5>
		{/each}
	</div>

	<div class="toolsContainer">
		{#each DevAndTemplateTools as { toolId, toolName, icon }}
			<h5 class="name">{toolName}</h5>
		{/each}
	</div>

	<div class="databaseContainer">
		{#each DatabaseAndTool as { DataBase, DataBaseTool }}
			<h5 class="name">{DataBase}</h5>
			<p class="databaseTool">{DataBaseTool}</p>
		{/each}
	</div>

	<div class="overallToolsContainer">
		{#each AdministrationTools as { administrationToolName, icon }}
			<h5 class="na">{administrationToolName}</h5>
		{/each}
	</div>
</section>
