/// <reference types = "cypress" /> 

describe('swag labs testing', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    
    it('Standard user testing', () => {
      cy.fixture("user").then(user =>{
        const standard = user.standard
        const password = user.password
        const namaDepan = user.namaDepan
        const namaBelakang = user.namaBelakang
        const kodePos = user.kodePos
        
        //login
        cy.get('[data-test="username"]').type(standard)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        //inventory url assertions
        cy.url().should('include', '/inventory.html')

        //when button click
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        //button assertions
        cy.get('.pricebar').children('button').should('contain.text', 'Remove')
        //shoping cart asssertions
        cy.get('.shopping_cart_link').children('.shopping_cart_badge').should('be.visible')

        //cart testing
        cy.get('#shopping_cart_container').click()
        //cart url assertions
        cy.url().should('include', '/cart.html')

        //checkout step one testing
        cy.get('#checkout').click()
        //checkout step one url assertions
        cy.url().should('include', '/checkout-step-one.html')

        //fill form
        cy.get('#first-name').type(namaDepan)
        cy.get('#last-name').type(namaBelakang)
        cy.get('#postal-code').type(kodePos)

        //checkout step two testing
        cy.get('#continue').click()
        //checkout step two url assertions
        cy.url().should('include','/checkout-step-two.html')

        //checkout complete testing
        cy.get('#finish').click()
        //checkout complete url assertions
        cy.url().should('include', '/checkout-complete.html')

        //back to product button
        cy.get('#back-to-products').click()
        //back to product assertons
        cy.url().should('include', '/inventory.html')
      });
    });

    it('Logout user testing', () => {
      cy.fixture("user").then(user =>{
        const logout = user.logout
        const password = user.password
        
        //login
        cy.get('[data-test="username"]').type(logout)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        //error message assertions
        cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.')
      });
    });
});