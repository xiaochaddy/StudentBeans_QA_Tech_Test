Feature: 6th Discount Option on Top 20 Page

Scenario: As a user I want to be able to open the 6th discount from the Top 20 list
  Given I am on the studentbeans homepage
  When I click on the "Top 20" button
  Then this should take me to the top 20 offers list
  And I can open the 6th option from this list
