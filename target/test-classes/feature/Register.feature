@sanity
Feature: Register
	As a Course Management System user
	I should be able to register a new user

Background: 
	Given that CMS is loaded
	When a user clicks on Register link

Scenario: Register_01_Verify that user can register a new user
	When a user input Email field with adey.badmus@yahoo.com
	And a user input Password field with Testing
	And a user input ConfirmPassword field with Testing
	And a user clicks on Register button
	Then a new user record Adey.badmus@yahoo.com should be created

Scenario Outline: Register_02_Verify that a user cannot Register an account with incorrect data
	When a user fills Register Page with the following data  <Email>, <Password>, <ConfirmPassword>
	And a user clicks on Register button
	Then registration error message <ExpectedErrorMessage> should be displayed
	Examples:
	| Email                 | Password   | ConfirmPassword | ExpectedErrorMessage                                 |
	|                       | Password1. | Password1.      | The Email field is required.                         |
	| adey.bad              |            | Password1.      | The Password field is required.                      |
	| adey.badmus@yahoo.com |            | Password1.      | The Password field is required.                      |
	| adey.badmus@yahoo.com | Password1. |                 | The password and confirmation password do not match. |