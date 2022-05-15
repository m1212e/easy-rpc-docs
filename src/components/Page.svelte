<script lang="ts">
	import { onMount } from 'svelte';
	import { setActiveEntry, setTOCFromPageContent } from '../stores/TableOfContent';

	let child;
	let sectionOffsets = {};
	let scrollDebouncer;
	let currentScrolledSectionId;

	onMount(() => {
		setTOCFromPageContent(child);
		child.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((e) => {
			sectionOffsets[e.id] = e.offsetTop;
		});
	});

	function handleScroll() {
		for (const sectionId in sectionOffsets) {
			if (child.scrollTop >= sectionOffsets[sectionId]) {
				currentScrolledSectionId = sectionId;
				clearTimeout(scrollDebouncer);
				scrollDebouncer = setTimeout(() => {
					setActiveEntry(currentScrolledSectionId);
				}, 100);
			}
		}
	}
</script>

<div bind:this={child} class="text-justify overflow-y-auto h-full" on:scroll={handleScroll}>
	<slot />
</div>

<style>
	.overflow-y-auto::-webkit-scrollbar {
		display: none;
	}
	.overflow-y-auto {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
