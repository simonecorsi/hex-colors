import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

if (process.env.NODE_ENV === 'production') {
	config.kit.paths = {
		base: '/hex-colors'
	};
}

export default config;
