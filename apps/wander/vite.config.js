import { defineConfig } from 'vite';

// Served by the BytMind static site at {host}/game/wander/.
// `npm run build` writes the deployable bundle to <repo>/game/wander.
export default defineConfig({
  base: '/game/wander/',
  build: {
    outDir: '../../game/wander',
    emptyOutDir: true,
  },
});
