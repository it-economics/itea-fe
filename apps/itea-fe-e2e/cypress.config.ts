import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run itea-fe:serve',
        production: 'nx run itea-fe:preview',
      },
      ciWebServerCommand: 'nx run itea-fe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
