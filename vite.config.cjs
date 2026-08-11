const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react').default;

module.exports = defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5174
  }
});
