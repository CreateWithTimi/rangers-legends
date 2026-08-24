import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const socialImage = {
  path: '/rangers-legends-og.jpg',
  width: '1728',
  height: '910',
  alt: 'Rangers Legends — The Stories Behind the Shirt, Collection 001: Christian Chukwu “Chairman”.',
};

function normalizeOrigin(origin) {
  return origin.replace(/\/+$/, '');
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.VITE_SITE_URL ? normalizeOrigin(env.VITE_SITE_URL) : '';
  const imageUrl = siteUrl ? `${siteUrl}${socialImage.path}` : '';

  return {
    plugins: [
      react(),
      {
        name: 'rangers-legends-social-preview',
        transformIndexHtml() {
          if (!imageUrl) {
            return [];
          }

          return [
            { tag: 'meta', attrs: { property: 'og:image', content: imageUrl } },
            { tag: 'meta', attrs: { property: 'og:image:width', content: socialImage.width } },
            { tag: 'meta', attrs: { property: 'og:image:height', content: socialImage.height } },
            { tag: 'meta', attrs: { property: 'og:image:alt', content: socialImage.alt } },
            { tag: 'meta', attrs: { name: 'twitter:image', content: imageUrl } },
            { tag: 'meta', attrs: { name: 'twitter:image:alt', content: socialImage.alt } },
          ];
        },
      },
    ],
  };
});
