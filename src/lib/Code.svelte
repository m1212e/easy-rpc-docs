<script>
	import { CheckIcon, CopyIcon, FileIcon } from 'svelte-feather-icons';
	import { prevent_default } from 'svelte/internal';
	import { scale } from 'svelte/transition';

	export let filename = '';
	let slot;
	let showSuccess = false;
	function copy() {
		navigator.clipboard.writeText(
			slot.querySelector(".code-container")?.textContent
		);
		showSuccess = true;
		setTimeout(() => {
			showSuccess = false;
		}, 800);
	}
</script>

<div class="code w-full flex flex-col rounded-lg my-3">
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

<style>
	.code {
		background-color: #282c34;
	}
</style>

