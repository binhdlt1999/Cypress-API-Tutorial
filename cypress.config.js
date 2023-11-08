const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./cypress/api_test_scripts/*",
    baseUrl: "https://jsonplaceholder.typicode.com/",
  },
});
