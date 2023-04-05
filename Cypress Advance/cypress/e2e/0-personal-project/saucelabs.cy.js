/// <reference types = "cypress" /> 

describe('swag labs testing', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    
    it('Standard user testing', () => {
      cy.fixture("user_saucelabs").then(user_saucelabs =>{
        const standard = user_saucelabs.standard
        const password = user_saucelabs.password
        const namaDepan = user_saucelabs.namaDepan
        const namaBelakang = user_saucelabs.namaBelakang
        const kodePos = user_saucelabs.kodePos
        
        //login
        cy.get('[data-test="username"]').type(standard)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        //inventory url assertions
        cy.url().should('include', '/inventory.html')

        //when add to cart button click
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        //remove button assertions
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
      cy.fixture("user_saucelabs").then(user_saucelabs =>{
        const logout = user_saucelabs.logout
        const password = user_saucelabs.password
        
        //login
        cy.get('[data-test="username"]').type(logout)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        //error message assertions
        cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.')
      });
    });

    it("Problem user testing", () => {
      cy.fixture("user_saucelabs").then(user_saucelabs => {
        const problem = user_saucelabs.problem
        const password = user_saucelabs.password
        const namaDepan = user_saucelabs.namaDepan
        const namaBelakang = user_saucelabs.namaBelakang
        const kodePos = user_saucelabs.kodePos

        //login
        cy.get('[data-test="username"]').type(problem)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()

        //when add to cart button click
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        //when add to cart button click again
        cy.get('#remove-sauce-labs-backpack').click()
        //remove button assertions
        cy.get('#remove-sauce-labs-backpack').should('contain.text', 'Remove').and('not.contain.text', 'Add to cart')

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
        cy.get('#continue').click()

        //cannot fill last name form, error assertions
        cy.get('[data-test="error"]').should('contain.text', 'Error: Last Name is required')
      })
    });

    it('Glitch user testing', () => {
      cy.fixture('user_saucelabs').then(user_saucelabs => {
        const glitch = user_saucelabs.glitch
        const password = user_saucelabs.password
        const namaDepan = user_saucelabs.namaDepan
        const namaBelakang = user_saucelabs.namaBelakang
        const kodePos = user_saucelabs.kodePos

        //login
        cy.get('[data-test="username"]').type(glitch)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        //inventory url assertions
        cy.url().should('include', '/inventory.html')

        //when add to cart button click
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        //remove button assertions
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
      })
    })
});