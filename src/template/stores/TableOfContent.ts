import { writable } from 'svelte/store';

interface TableOfContentEntry {
	text: string;
	type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
	id: string;
	selected: boolean;
}

export const tableOfContent = writable<TableOfContentEntry[]>([]);

export function setTOCFromPageContent(element: HTMLElement) {
	const entries: TableOfContentEntry[] = [];

	element.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((e) => {
		const entry: TableOfContentEntry = {
			type: e.tagName as any,
			text: e.textContent as string,
			id: e.getAttribute('id') as string,
			selected: false
		};
		entries.push(entry);
	});

	tableOfContent.set(entries);
}

let previouslySelected: TableOfContentEntry;
export function setActiveEntry(id: string) {
	tableOfContent.update((p) => {
		{
			// deselect old
			const found = p.find((e) => e == previouslySelected);
			if (found) {
				found.selected = false;
			}
		}
		{
			const found = p.find((e) => e.id == id);
			if (found) {
				found.selected = true;
				previouslySelected = found;
			}
		}
		return p;
	});
}
