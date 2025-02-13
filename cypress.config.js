const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 60000,
    baseUrl: "https://www.saucedemo.com", 

    env: {
      username: "standard_user",
      password: "secret_sauce",
      invalid_username: "nanabi",
      invalid_password: "1234"
    },

  },
});
