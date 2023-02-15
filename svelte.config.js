import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: preprocess(),
	kit: {

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),

		paths: {
			base: dev ? '' : '/AR',
		},

		appDir: 'project'
	}

};


export default config;
