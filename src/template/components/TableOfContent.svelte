<script lang="ts">
	import { tableOfContent, setActiveEntry } from '../stores/TableOfContent';
	//class:selected={item.selected}
</script>

<ul class="list-none">
	{#each $tableOfContent as item}
		<li class={item.type + " py-1"}  on:click={() => setActiveEntry(item.id)}>
			<a href="#{item.id}">
				{item.text}
			</a>
		</li>
	{/each}
</ul>

<style>
	li.H2 {
		@apply pl-2;
	}
	li.H3 {
		@apply pl-4;
	}
	li.H4 {
		@apply pl-6;
	}
	li.H5 {
		@apply pl-8;
	}
	li.H6 {
		@apply pl-10;
	}
	li.selected {
		@apply font-bold;
	}
</style>
