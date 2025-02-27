const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.vinted.co.uk/',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', 
    failOnStatusCode: false, 
  },
});
