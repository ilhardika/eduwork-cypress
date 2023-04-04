/// <reference types = "Cypress" />

describe('Nav Links Zero Webb App', () => {
    beforeEach("visit the zero webb app", () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible').and('contain.text', 'Online Banking')
    });
    it('should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', '/feedback.html')
        cy.get('h3').should('be.visible').and('contain.text', 'Feedback')
    });
    it('should display home banking content', () => {
        cy.contains('Home').click()
        cy.url().should('include', '/index.html')
        cy.get('#homeMenu').should('have.class', 'active')
    });
})