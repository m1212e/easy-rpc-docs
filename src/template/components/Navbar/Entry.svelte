<script lang="ts">
	import { page } from '$app/stores';
	import type { NavEntry } from 'src/template/interfaces/NavEntry';
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	export let entry: NavEntry;
	let expanded = true;

	let name = entry.name.replace(/^[0-9]{1,}/, '');

	$: selected = decodeURI($page.url.pathname.substring(1)) == entry.path;

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
		<a href="{'/easy-rpc-docs/'}{entry.path}" class="w-full">
			{name}
		</a>
	{:else if entry.indexPage}
		<a href="{'/easy-rpc-docs/'}{entry.path}" class="w-full">
			{name}
		</a>
	{:else}
		{name}
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
	<div transition:slide|local class="pl-5">
		{#each entry.children as child}
			<svelte:self entry={child} />
		{/each}
	</div>
{/if}
