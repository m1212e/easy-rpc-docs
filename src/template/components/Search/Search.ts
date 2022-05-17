import { Builder, Index } from 'lunr';

const builder = new Builder();
let buildDebounce: any;
let index: Index;

builder.ref('path');
builder.field('title');
builder.field('text');
builder.field('tags');

interface Doc {
	path: string;
	title: string;
	text: string;
	tags: string[];
}

export function addDoc(doc: Doc) {
	builder.add(doc);
	clearTimeout(buildDebounce);
	buildDebounce = setTimeout(() => {
		index = builder.build();
	}, 100);
}

export function search(input: string) {
	return index.search(
		input
			.split(' ')
			.map((s) => s + '~2') // add fuzzy tolerance to each search word
			.reduce((previous, current) => previous + ' ' + current, '')
	);
}
