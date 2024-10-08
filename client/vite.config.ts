import { defineConfig } from 'vite'
import macrosPlugin from "vite-plugin-babel-macros"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin()
  ],
  server: {
    port: 3000,
    host:true,
  }
})



