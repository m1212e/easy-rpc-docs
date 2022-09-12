import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import {
	createShikiHighlighter,
	renderCodeToHTML,
} from "shiki-twoslash";
import {readFileSync} from 'fs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: [".svx", ".md"],
			highlight: {
				highlighter: async (code, lang, meta) => {
					const highlighter = await createShikiHighlighter({
						theme: 'one-dark-pro',
					});

					await highlighter.loadLanguage({
						id: "easy-rpc",
						scopeName: 'source.erpc',
						// @ts-ignore
						grammar: JSON.parse(readFileSync("./src/grammars/erpc.json")),
						aliases: ['erpc', 'easy-rpc'],
					})


					const html = renderCodeToHTML(
						code,
						lang,
						meta || [],
						{},
						highlighter,
						null
					);

					return `{@html \`${html}\` }`;
				},
			},
			layout: 'src/template/components/Page.svelte',
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		}),

	],

	kit: {
		prerender: {
			enabled: true
		},
		trailingSlash: "always",
		adapter: adapter({
			pages: "docs"
		}),
		paths: {
			base: '/easy-rpc-docs',
		}
	},
	extensions: ['.svelte', '.md'],
};

export default config;
