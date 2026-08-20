import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  // Vite does not read PORT itself, so a launcher-assigned port would be ignored
  // and it would keep trying its default. Dev server only; builds are unaffected.
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
