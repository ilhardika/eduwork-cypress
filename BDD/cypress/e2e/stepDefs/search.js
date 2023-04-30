import searchPage from '../pageObject/search.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open the website', () => {
    searchPage.visit()
})

When('I search something on the searchbox with the text input', () => {
    searchPage.searchType()
})

Then('I should see something that i search', () => {
    cy.get('li').children('a').contains('bank', {matchCase:false})
})
