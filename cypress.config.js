const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    watchForFileChanges: false
  },
});

//Here we can set things like
//1. Setting timeouts for commands and page loads
//2. Setting environment variables
//3. Setting whether or not you want to save the screenshots on test failures
//4. Setting whether or not you want to save the videos for test failures
//3. Setting whether or not you want to retry failed tests, how many times you want to retry them
