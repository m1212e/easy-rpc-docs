import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex'
import remarkToc  from 'remark-toc'
import rehypeAutolinkHeadings  from 'rehype-autolink-headings'
import rehypeSlug  from 'rehype-slug'

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
			extensions: ['.md'],
			layout: 'src/components/Page.svelte',
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			remarkPlugins: [remarkToc],
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
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
