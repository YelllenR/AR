import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */

const config = {

	preprocess: preprocess({
		scss: true
	}),
	kit: {

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: '/AR'
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		},
	}
};
export default config;
