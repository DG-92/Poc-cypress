const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://blog.agibank.com.br", // ✅ tem que ficar aqui, fora do setupNodeEvents
    defaultCommandTimeout: 10000, // tempo padrão de 10s
    baseAPI: "https://dog.ceo/api",
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // Aqui você pode registrar eventos, se precisar
    },
    supportFile: 'cypress/support/e2e.js'
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",     // pasta onde os relatórios serão salvos
    overwrite: false,
    html: true,               // gera relatório HTML
    json: true                // gera arquivo JSON para merge
  }
});
