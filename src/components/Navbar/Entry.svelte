<script lang="ts">
	import { dev } from '$app/env';
	import { page } from '$app/stores';
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';
	import { NavEntry } from '../../interfaces/NavEntry';

	export let entry: NavEntry;
	let expanded = true;

	$: selected = $page.path == entry.path;

	function toggle(e: Event) {
		expanded = !expanded;
	}
</script>

<span
	class="flex justify-between items-center font-bold text-xl rounded-md duration-200 py-2 px-3 m-1 {selected
		? 'bg-slate-200 dark:bg-gray-800'
		: 'hover:bg-slate-200 dark:hover:bg-gray-800'}"
>
	{#if entry.children.length == 0}
		<a href="{dev ? '' : '/easy-rpc-docs'}{entry.path}" class="w-full">
			{entry.name}
		</a>
	{:else if entry.indexPage}
		<a href="{dev ? '' : '/easy-rpc-docs'}{entry.path}" class="w-full">
			{entry.name}
		</a>
	{:else}
		{entry.name}
	{/if}
	{#if entry.children.length > 0}
		<button
			class="p-2 rounded-md hover:bg-slate-300 dark:hover:bg-gray-700 duration-200"
			on:click|stopPropagation|capture={toggle}
		>
			<ChevronDownIcon class="{expanded ? '' : '-rotate-90'} duration-200" />
		</button>
	{/if}
</span>
{#if expanded && entry.children.length > 0}
	<div transition:slide class="pl-5">
		{#each entry.children as child}
			<svelte:self entry={child} />
		{/each}
	</div>
{/if}
