import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	appDir: 'build',

	preprocess: preprocess({
		css: true
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		prerender: {
			externaliseScriptsAndStyles: true
		},
		paths: {
			base: '/AR'
		},
		csp: {
			mode: "auto",
			directives: {
				'default-src': ['*'],
				'script-src': ['strict-dynamic'],

				'script-src': [
					'self',
				],
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
