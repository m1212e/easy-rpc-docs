<script>
	import { SearchIcon } from 'svelte-feather-icons';
	import { horizontalSlide } from '../../transitions/HorizontalSlide';
	let hasFocus = false;
</script>

<span class="flex border-2 rounded-md px-3 py-1 items-center w-60">
	{#if !hasFocus}
		<span transition:horizontalSlide={{axis: 'x', duration: 200}}>
			<SearchIcon class="mr-2" size="1x" />
		</span>
	{/if}
	<input
		on:focus={() => (hasFocus = true)}
		on:blur={() => (hasFocus = false)}
		class="outline-none bg-transparent"
		type="text"
		placeholder="Search docs..."
	/>
</span>
