Feature: 6th Discount Option on Top 20 Page

Scenario: As a user I want to be able to open the 6th discount from the Top 20 list
  Given I am on the studentbeans homepage
  And I click on the "Top 20" button
  When I click on the 6th option from the top 20 list
  Then this should open up the offer to provide a discount
