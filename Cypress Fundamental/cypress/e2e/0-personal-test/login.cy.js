/// <reference types="cypress" />

describe('Working with input', () => {
    it('should fill username, password and check keep me signed in', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.url().should('include', 'login.html')

      // fill username
      cy.get('#user_login').clear()
      cy.get('#user_login').type('username')

      //fill password
      cy.get('input[name="user_password"]').clear()
      cy.get('input[name="user_password"]').type('password')

      //check keep me signed in
      cy.get('#user_remember_me').uncheck()
      cy.get('#user_remember_me').check()
    })
});