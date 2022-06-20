const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 15000,
    "pageLoadTimeout": 60000,
    "chromeWebSecurity": false,
    "redirectionLimit": 1000,
    setupNodeEvents(on, config)
     {
      // implement node event listeners here
      
    },
  },
});
