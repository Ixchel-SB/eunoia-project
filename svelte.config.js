import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // This is necessary for client-side routing to work
      precompress: false,
      strict: true
    }),
    files: {
      routes: 'src/routes' // Specify routes directory
    },
    prerender: {
      entries: ['*', '/app/*'] // Prerender all routes
    }
  },
};

export default config;








/*
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} /
const config = {
  kit: {
    adapter: adapter(),
    files: {
      routes: 'src/routes' // Specify routes directory
    },
  },
};

export default config;
*/