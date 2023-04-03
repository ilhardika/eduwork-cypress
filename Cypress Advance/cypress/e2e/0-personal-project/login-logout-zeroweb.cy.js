/// <reference types="Cypress"/>

const { xorBy } = require("cypress/types/lodash")

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
    });
    it("(positive testing) valid username and password", () => {
        
    });
    it("logout assertion", () => {
        ;
    });
})