import { defineConfig } from 'astro/config';

// Static output, zero client JavaScript, every stylesheet as a file (so the CSP
// can stay at style-src 'self'), directory URLs with trailing slashes.
export default defineConfig({
  site: 'https://cpp.anacay.org',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never', assets: '_astro' },
  compressHTML: true,
  devToolbar: { enabled: false },
  prefetch: false,
});
