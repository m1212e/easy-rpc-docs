import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex'
import {resolve} from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import {
	createShikiHighlighter,
	renderCodeToHTML,
} from "shiki-twoslash";

const dev = process.env.NODE_ENV === 'development';

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
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib')
				}
			}
		},
		trailingSlash: "always",
		adapter: adapter({
			pages: "docs"
		}),
		paths: {
			base: dev ? '' : '/easy-rpc-docs',
		}
	},
	extensions: ['.svelte', '.md'],
};

export default config;
