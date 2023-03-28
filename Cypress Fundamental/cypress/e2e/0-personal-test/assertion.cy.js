/// <reference types = "cypress" /> 

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io/')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', '/commands/action')

        cy.get('.action-email')
        .type('ilhardika67@gmail.com')
        .should('have.value', 'ilhardika67@gmail.com')
    });


})