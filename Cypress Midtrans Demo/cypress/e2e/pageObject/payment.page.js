require('cypress-iframe')

const URL = 'https://demo.midtrans.com/'
const btn_buyNow = '.btn.buy'
const btn_checkout = '.cart-checkout'
const btn_payNow = '.card-pay-button-part > button'
const img_qris = '.qr-image'
const payment_kreditCard = 'a[href="#/credit-card"]'
const payment_qris = 'a[href="#/other-qris"]'
const message_successfulPayment = '[data-reactid=".0.0.0.2.0.1.0.0:0"]'
const message_invalidCreditCard = '.text-failed'
const message_Decline = '.cancel-modal-title'
// const btn_linkPayment = '.link-nav'

class paymentPage {
    static open(){
        cy.visit(URL)
        cy.get(btn_buyNow).click()
        cy.get(btn_checkout).click()
    }

    static kreditCardPayment(){
        cy.frameLoaded('#snap-midtrans')
		cy.iframe().find(payment_kreditCard).click()
    }

    static qrisPayment(){
        cy.frameLoaded('#snap-midtrans')
		cy.iframe().find(payment_qris).click()
    }

    static qrisCode(){
        cy.iframe().find(img_qris).should('exist')
    }

    static kreditCardNumber(){
        cy.iframe().find('.card-number-input-container > input').type('4556557955726624')
    }
    
    static kreditCardExpDate(){
        cy.iframe().find('#card-expiry').type('1230')
    }
    
    static kreditCardCvv(){
        cy.iframe().find('#card-cvv').type('123')
    }

    static clickPayNow(){
        cy.iframe().find(btn_payNow).click()
    }

    static successfulPayment(){
        cy.get(message_successfulPayment).should('contain.text','Thank you for your purchase.')
    }

    static invalidCreditCardNumber(){
        cy.iframe().find(message_invalidCreditCard).should('contain.text', 'Make sure your card info is correct.')
    }

    static invalidCreditCardExpirationDate(){
        cy.iframe().find(message_invalidCreditCard).should('contain.text', 'Invalid expiry.')
    }

    static invalidCreditCardCVV(){
        cy.iframe().find(btn_payNow).click()
        cy.wait(8000)
        cy.iframe().find(message_Decline).should('contain.text', 'Card declined by bank')
    }
}
    

export default paymentPage