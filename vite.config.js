import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever plugin you use

export default defineConfig({
  base: '/my-portfolio/',  // 👈 Add this line
  plugins: [react()],
})