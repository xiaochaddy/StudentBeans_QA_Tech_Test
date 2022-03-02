const { Given } = require('@cucumber/cucumber')
const Task_5_Chad_Hoang_Objects = require('../pageObjects/simpleSearchPageObject')

const Task_5_Chad_Hoang_Objects = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

And('I open the login screen', function() {
  Task_5_Chad_Hoang_Objects.goToLoginPage()
  Task_5_Chad_Hoang_Objects.verifyLoginPage()
})

When('I enter "test@test.com" in the email text box and "testingstuff" in the password text box', function () {
  Task_5_Chad_Hoang_Objects.typeEmail()
  Task_5_Chad_Hoang_Objects.typePassword()
  Task_5_Chad_Hoang_Objects.clickCaptcha()
  Task_5_Chad_Hoang_Objects.clickLogin()
})

Then('I should see the error message display on screen', function () {
  Task_5_Chad_Hoang_Objects.verifyErrorMessage()
})
