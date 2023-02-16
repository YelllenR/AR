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

		prerender: ({
			externaliseScriptsAndStyles: true
		}),
		paths: {
			base: '/AR'
		},
		csp: {
			mode: "auto",
			directives: {

				'script-src': [
					'*',
					'data:',
					'unsafe-eval',
					'unsafe-inline'

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
					'self',
					'*',
					'data:',
					'unsafe-eval',
					'unsafe-inline'
				],
			}
		}
	}
};
export default config;
