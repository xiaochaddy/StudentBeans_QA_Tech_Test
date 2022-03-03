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

class SimpleSearchPageObject extends ParentPageObject {
  async clickSearchBar () {
    //This will click the search bar on the student beans page after locating the defaulted text within the search bar before clicking it
  await this.isElementEqualToExpected($('h3=Start typing...'), 'Start typing...')
  }
}

class SimpleSearchPageObject extends ParentPageObject {
  async typeText() {
    //This will type Samsung in the search bar
  }
  async verifyText () {
    await this.isElementEqualToExpected($('h4=Samsung'), 'Samsung')
  }
}
  
 class SimpleSearchPageObject extends ParentPageObject {
   async verifySearch () {
     await this.isElementEqualToExpected($('h5=Samsung Free Galaxy Buds + £100 off...'), 'Samsung Free Galaxy Buds + £100 off...')
   }
 }
  

module.exports = SimpleSearchPageObject
