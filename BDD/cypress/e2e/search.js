const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor' )

Given('I open the website', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

When('I search something on the searchbox with the text input', () => {
    cy.get('#searchTerm').type('bank{enter}')
})

Then('I should see something that i search', () => {
    cy.get('li').children('a').contains('bank', {matchCase:false})
})