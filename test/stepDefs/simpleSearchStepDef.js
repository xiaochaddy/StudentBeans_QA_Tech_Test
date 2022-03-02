const { Given } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})
And('I open the Search bar', function() {
  simpleSearchPageObject.clickSearchBar()
})
When('I enter Samsung', function() {
  simpleSearchPageObject.verifyText()
})
Then('I should see the 4th Samsung search listing', function() {
  simpleSearchPageObject.verifysearch()
})
