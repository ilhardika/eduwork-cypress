Feature: Searchbox

    As a User
    I want search something in website

    Scenario: Searchbox
        Given I open the website
        When I search something on the searchbox with the text input
        Then I should see something that i search