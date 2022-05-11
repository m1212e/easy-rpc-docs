import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
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
};

export default config;
