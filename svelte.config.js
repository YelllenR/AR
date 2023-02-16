import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	appDir: 'public',
	
	preprocess: preprocess({
		css: true
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
		csp: {
			mode: "hash",
			directives: {
				'script-src': ['self'],
				'img-src': [
					"*",
					'self',
					"data:",
				],
				'font-src': [
					"*",
					'self',
					"data:",
				],
				'style-src': [
					'self'
				],
			}
		}
	}
};
export default config;
