<script lang="ts">
	import { dev } from '$app/env';
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	export let title: string;
	export let href: string;
	let expanded = false;
	let hasChildren = true;

	function toggle(e: Event) {
		expanded = !expanded;
	}

	function disableChildren() {
		hasChildren = false;
		return '';
	}
</script>

<span
	class="flex justify-between items-center hover:bg-slate-200 dark:hover:bg-gray-800 font-bold text-xl rounded-md duration-200 py-2 px-3 m-1"
>
	<a href="{dev ? '' : '/easy-rpc-docs'}{href}">
		<div class="">
			{title}
		</div>
	</a>
	{#if hasChildren}
		<button
			class="p-2 rounded-md hover:bg-slate-300 dark:hover:bg-gray-700 duration-200"
			on:click|stopPropagation|capture={toggle}
		>
			<ChevronDownIcon class="{expanded ? '' : '-rotate-90'} duration-200" />
		</button>
	{/if}
</span>
{#if expanded && hasChildren}
	<div transition:slide class="pl-5">
		<slot>{disableChildren()}</slot>
	</div>
{/if}
