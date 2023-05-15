const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    // setupNodeEvents(on, config) {
    //
    // },
    "baseUrl": "https://reqres.in/",
    "env": {
      "userEmail": "eve.holt@reqres.in",
      "userPassword": "cityslicka",
      "apiUrl": "https://reqres.in/api"
    }
  },
});
