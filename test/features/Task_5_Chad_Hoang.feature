Feature: Login Error messages

Scenario: As a user and I enter the wrong login credentials then I want to recieve an error message that this is the case
  Given I am on the studentbeans homepage and I have my login credentials
  And I open the login screen
  When I enter "test@test.com" in the email text box and "testingstuff" in the password text box
  Then I should see the error message display on screen
