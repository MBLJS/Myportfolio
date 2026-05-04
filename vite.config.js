// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

export default {
  base: '/portfolio/',  // 👈 must match your repo name exactly
}