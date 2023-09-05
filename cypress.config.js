const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      
    },

    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: '**/*.js',

  },
});
