Feature: Github login

   Scenario: verify github login
   Given I open the site "https://github.com/login"
   Then I verify if the page title contains "Sign in to GitHub · GitHub"