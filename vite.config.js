import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'vue2-script-setup-transform/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup()
  ]
})
