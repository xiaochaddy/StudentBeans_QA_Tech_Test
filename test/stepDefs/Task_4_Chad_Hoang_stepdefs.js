const { Given } = require('@cucumber/cucumber')
const Task_4_Chad_Hoang_Object = require('../pageObjects/simpleSearchPageObject')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const Task_4_Chad_Hoang_Object = new Task_4_Chad_Hoang_Object()
const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

And('I click on the top 20 button', function () {
  Task_4_Chad_Hoang_Object.goToTop20List()
  Task_4_Chad_Hoang_Object.verifyTop20List()
})

When('I click on the 6th option from the top 20 list', function() {
  Task_4_Chad_Hoang_Object.verifySixthOption()
})

Then('I should see the error message display on screen', function () {
  Task_4_Chad_Hoang_Object.verifyDiscount()
})
