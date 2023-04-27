const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor' )
const { default: searchPage } = require('./search.page')

Given('I open the website', () => {
    searchPage.visit()
})

When('I search something on the searchbox with the text input', () => {
    searchPage.searchType('bank')
})

Then('I should see something that i search', () => {
    cy.get('li').children('a').contains('bank', {matchCase:false})
})