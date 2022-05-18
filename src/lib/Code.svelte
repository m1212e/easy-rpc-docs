<script>
	import { CheckIcon, CopyIcon, FileIcon } from 'svelte-feather-icons';
	import { scale } from 'svelte/transition';
	import { getHighlighter } from 'shiki';
	import { onMount } from 'svelte';

	export let filename = '';
	let slot;
	let showSuccess = false;
	function copy() {
		navigator.clipboard.writeText(slot.textContent);
		showSuccess = true;
		setTimeout(() => {
			showSuccess = false;
		}, 800);
	}

	onMount(() => {
		codeHighlighting()
	})

	async function codeHighlighting() {
		const hightlighter = await getHighlighter({
			theme: 'nord'
		});
		const output = hightlighter.codeToHtml(slot.textContent, {lang: "cd"})
		slot.innerHTML = output;
	}
</script>

<div class="bg-slate-800 w-full flex flex-col rounded-lg my-3">
	{#if filename != ''}
		<span class="flex w-full justify-between border-b-2 px-3 py-2">
			<span class="flex items-center">
				<FileIcon class="mr-2" />
				{filename}
			</span>
			<span class="flex relative">
				{#if showSuccess}
					<span class="absolute right-2/4" transition:scale>
						<CheckIcon class="text-green-400" />
					</span>
				{:else}
					<button class="absolute right-2/4" transition:scale on:click={copy}>
						<CopyIcon />
					</button>
				{/if}
			</span>
		</span>
	{/if}
	<code bind:this={slot} class="p-3">
		<slot />
	</code>
</div>
