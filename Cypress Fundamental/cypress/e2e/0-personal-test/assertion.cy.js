/// <reference types = "cypress" /> 

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io/')

        cy.pause()

        cy.contains('type').click()

        //assertions url
        cy.url().should('include', '/commands/action')

        //assertions form email
        cy.get('.action-email')
        .type('ilhardika67@gmail.com')
        .should('have.value', 'ilhardika67@gmail.com')

        //assertions form focus
        cy.get('.action-focus').focus()
        .should('have.class', 'focus')
    });
})