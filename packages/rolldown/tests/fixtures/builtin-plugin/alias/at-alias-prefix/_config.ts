import { aliasPlugin } from 'rolldown/experimental'
import { defineTest } from 'rolldown-tests'

export default defineTest({
  config: {
    input: './main.js',
    plugins: [
      aliasPlugin({
        entries: [{ find: '@utils', replacement: './utils' }],
      }),
    ],
  },
  async afterTest() {
    await import('./assert.mjs')
  },
})
