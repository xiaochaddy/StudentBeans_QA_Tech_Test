const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
}

class Task_5_Chad_Hoang_Object extends ParentPageObject {
  async goToLoginPage () {
    //This will open the login page - using eggplant sensetalk we would verify this by capturing a universal image/text that always appears on the login screen then passing it through an if statement on if this step does this or not
  await browser.url('https://accounts.studentbeans.com/uk/authorisation/log-in?client_id=e55920fd-5410-4534-b926-b1214c85f64a&user_return_to=https%3A%2F%2Fwww.studentbeans.com%2Fuk')
  }
  
  async verifyLoginPage () {
    await this.isElementEqualToExpected($('h2=Log in to your Student Beans account'), 'Log in to your Student Beans account')
}
}

// Again, unsure of whether javasscript cucumber has these capabilities but within eggplant sensetalk using gherkin, I would be able to call these functions into my feature files and execute them.
class Task_5_Chad_Hoang_Object extends ParentPageObject {
  async typeEmail () {
    //This will type the email in the email text box
  }
  async typePassword () {
    // This will type the password in the password text box
  }
  async clickCaptcha () {
    // This will click the captcha verification tick box
  }
  async clickLogin () {
    // This will click the login button
  }
}
  
 class Task_5_Chad_Hoang_Object extends ParentPageObject {
   async verifyErrorMessage () {
     await this.isElementEqualToExpected($('h3=Sorry we couldn't find an account with that email address), 'Sorry we couldn't find an account with that email address')
   }
 }
  

module.exports = SimpleSearchPageObject
