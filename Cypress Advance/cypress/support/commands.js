// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_zeroweb', (username, password) => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('[name="submit"]').click()
})

Cypress.Commands.add('loginViaAPI', (
        email = Cypress.env('userEmail'),
        password = Cypress.env('userPassword'),
    ) => {
        cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
        username: email,
        password,
    }).then((response) => {
        expect(response.status).to.eq(200) // pastikan status respons adalah 200 OK
        cy.log(`Session ID: ${response.body.sessionId}`)
        expect(response.body.sessionId).to.be.undefined // pastikan sessionId tidak undefined
        // cy.setCookie('sessionId', response.body.sessionId)
        // cy.setCookie('userId', response.body.userId)
        // cy.setCookie('userName', response.body.userName)
        cy.visit('/#!/main')
    })
})