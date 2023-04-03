/// <reference types="Cypress"/>

describe('login/logout test zeroweb', () => {
    beforeEach('should visit zerowebbapp', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
    })
    it("(negative testing) invalid username and password", () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('[name="submit"]').click()
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });
    it("(positive testing) valid username and password", () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            //Login
            cy.login_zeroweb(username, password)
            cy.url().should('include', '/account-summary.html')

            //Logout
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.url().should('include', '/index.html')
        })
    });
})