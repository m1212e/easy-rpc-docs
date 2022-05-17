<script lang="ts">
	import Entry from './Entry.svelte';
	import { NavEntry } from '../../interfaces/NavEntry';

	const paths = [
		...Object.keys(import.meta.glob('../../../routes/**/*.svelte')),
		...Object.keys(import.meta.glob('../../../routes/**/*.md'))
	]
		.map((f) => f.replace('../../../routes/', ''))
		.map((f) => f.split('.').slice(-2)[0].split('/'))
		.filter((f) => {
			return !f.some((e) => e.startsWith('__' || e.includes('[')));
		});

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
