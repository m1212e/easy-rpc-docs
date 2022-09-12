<script lang="ts">
	import Entry from './Entry.svelte';
	import type { NavEntry } from '../../interfaces/NavEntry';

	const paths = [
		...Object.keys(import.meta.glob('../../../routes/**/+page.svelte')),
		...Object.keys(import.meta.glob('../../../routes/**/+page.md'))
	]
		.map((f) => f.replace('../../../routes/', '')) //"1💬 What is easy-rpc/1Overview/+page.md"
		.map((f) => f.split('.').slice(-2)[0].split('/')) // [ "1💬 What is easy-rpc", "1Overview", "+page" ]
		.map((f) => f.slice(0, -1)); // [ "1💬 What is easy-rpc", "1Overview"])]

	const navEntries: NavEntry[] = [];

	paths.forEach((p) => {
		let previous: NavEntry = {
			children: navEntries,
			path: ''
		} as NavEntry;
		p.forEach((pathElement) => {
			if (pathElement == 'index') {
				previous.indexPage = true;
				return;
			}
			let found = previous.children.find((e) => e.name == pathElement);
			if (!found) {
				found = {
					path: previous.path + pathElement + '/',
					children: [],
					name: pathElement,
					indexPage: false
				};
				previous.children.push(found);
			}
			previous = found;
		});
	});
</script>

{#each navEntries as entry}
	<Entry {entry} />
{/each}
