Feature: Admin can log in

	As an Admin
	In order to maintain the website
	I would like to be able to log in

	Given the following user exists
		| email          | password | password_confirmation |
		| hanna@mail.com | password | password              |

	Scenario: Admin can log in successfully
		Given I visit the site
		And I click 'Admin'
		And I fill in the login form
		And I click 'Log in'
		Then I should see 'Signed in successfully.'