const { defineConfig } = require('cypress');
module.exports = defineConfig({
  projectId: 'ctgx2y',
    reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss,',
    charts: true,
    code: true,
    reportPageTitle: 'alurapic',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

