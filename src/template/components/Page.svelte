<script>
	import { onMount } from 'svelte';
	import { setActiveEntry, setTOCFromPageContent } from '../stores/TableOfContent';

	let child;
	let sectionOffsets = {};
	let scrollDebouncer;
	let currentScrolledSectionId;

	onMount(() => {
		setTOCFromPageContent(child);
		let first = true
		child.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((e) => {
			if(first) {
				setActiveEntry(e.id);
				first = false
			}
			sectionOffsets[e.id] = e.offsetTop;
		});
		
	});

	function handleScroll() {
		for (const sectionId in sectionOffsets) {
			if (child.scrollTop >= sectionOffsets[sectionId]-150) {
				currentScrolledSectionId = sectionId;
				clearTimeout(scrollDebouncer);
				scrollDebouncer = setTimeout(() => {
					setActiveEntry(currentScrolledSectionId);
				}, 50);
			}
		}
	}
</script>

<div bind:this={child} class="text-justify h-full w-full px-6" on:scroll={handleScroll}>
	<slot />
</div>