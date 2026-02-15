import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '\\.(svg|png|jpg|jpeg|gif)$': '/src/__mocks__/fileMock.ts',
    },
  },
  // @ts-expect-error -- Vite/Vitest typing bug
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})
