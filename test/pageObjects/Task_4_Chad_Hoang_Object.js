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

class Task_4_Chad_Hoang_Object extends ParentPageObject {
  async goToTop20List () {
    //This will open the top 20 discounts page
  await browser.url('https://www.studentbeans.com/student-discount/uk/collections/top-20-student-discounts?source=nav') //unsure if this is a valid JS action
  }
  
  async verifyTop20List () {
    await this.isElementEqualToExpected($('h2=Top 20 student discounts'), 'Top 20 student discounts')
  }
}

// Again, unsure of whether javasscript cucumber has these capabilities but within eggplant sensetalk using gherkin, I would be able to call these functions into my feature files and execute them.
class Task_4_Chad_Hoang_Object extends ParentPageObject {
  async verifySixthOption () {
    await this.isElementEqualToExpected($('h2=Mcdonalds'), 'Mcdonalds')
  }
}
  
 class Task_4_Chad_Hoang_Object extends ParentPageObject {
   async verifyDiscount () {
     await this.isElementEqualToExpected($('h3=Get code and open site'), 'Get code and open site')
   }
 }
  

module.exports = SimpleSearchPageObject
