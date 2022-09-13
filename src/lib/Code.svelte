<script>
	import { CheckIcon, CopyIcon, FileIcon } from 'svelte-feather-icons';
	import { prevent_default } from 'svelte/internal';
	import { scale } from 'svelte/transition';

	export let filename = '';
	let slot;
	let showSuccess = false;
	function copy() {
		navigator.clipboard.writeText(
			Array.from(slot.querySelector('.code-container').querySelectorAll('.line')).reduce(
				(prev, curr) => prev + '\n' + curr.textContent,
				''
			)
		);
		showSuccess = true;
		setTimeout(() => {
			showSuccess = false;
		}, 800);
	}
</script>

<div class="code w-full flex flex-col rounded-lg my-6 text-white relative">
	{#if filename != ''}
		<span class="flex w-full justify-between border-b-2 px-3 py-2">
			<span class="flex items-center">
				<FileIcon class="mr-2" />
				{filename}
			</span>
			<span class="flex relative">
				{#if showSuccess}
					<span class="absolute right-2/4" transition:scale|local>
						<CheckIcon class="text-green-400" />
					</span>
				{:else}
					<button title="Copy this snippet" class="absolute right-2/4" transition:scale|local on:click={copy}>
						<CopyIcon />
					</button>
				{/if}
			</span>
		</span>
	{:else}
		<span class="flex absolute right-2 top-2">
			{#if showSuccess}
				<span class="absolute right-2/4" transition:scale|local>
					<CheckIcon class="text-green-400" />
				</span>
			{:else}
				<button class="absolute right-2/4" transition:scale|local on:click={copy}>
					<CopyIcon />
				</button>
			{/if}
		</span>{/if}
	<code bind:this={slot} class="p-3 overflow-scroll">
		<slot />
	</code>
</div>

<style>
	.code {
		background-color: #282c34;
	}
</style>