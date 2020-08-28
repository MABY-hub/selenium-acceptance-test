@sanity
Feature: Account LogIn


  @logIn
  Scenario Outline: log in with a valid username and password
    Given user on login page
    When user enters "<Email>"
    And user enters there "<Password>"
    And user clicks to login
    Then then user account page is displayed





    Examples:
      | Email       | Password |
      | ade@ade.com | Abcd1234 |