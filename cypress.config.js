const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  env: {
    "url1": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    "url2": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    "url3": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },

});





