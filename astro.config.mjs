// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

// https://astro.build/config
export default defineConfig({
  base: isGithubPages ? '/antex-web-landing/' : '/',
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
})
