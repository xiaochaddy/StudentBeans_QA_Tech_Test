const { Given } = require('@cucumber/cucumber')
const Task_5_Chad_Hoang_Objects = require('../pageObjects/simpleSearchPageObject')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const Task_5_Chad_Hoang_Objects = new Task_5_Chad_Hoang_Object()
const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

And('I open the login screen', function() {
  Task_5_Chad_Hoang_Object.goToLoginPage()
  Task_5_Chad_Hoang_Object.verifyLoginPage()
})

When('I enter "test@test.com" in the email text box and "testingstuff" in the password text box', function () {
  Task_5_Chad_Hoang_Object.typeEmail()
  Task_5_Chad_Hoang_Object.typePassword()
  Task_5_Chad_Hoang_Object.clickCaptcha()
  Task_5_Chad_Hoang_Object.clickLogin()
})

Then('I should see the error message display on screen', function () {
  Task_5_Chad_Hoang_Object.verifyErrorMessage()
})
