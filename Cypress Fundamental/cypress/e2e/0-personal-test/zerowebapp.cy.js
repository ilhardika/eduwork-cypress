/// <reference types = "cypress" />

describe("zero webb app pay bills testing", () => {
    it('fill pay bills form with custom command', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.login_zerowebbapp('username', 'password')

        //fill pay bill
        cy.fill_bill('Apple', 'Loan', '110', '2023-04-01', 'example')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_container').should('contain.text', 'The payment was successfully submitted')
    })
})