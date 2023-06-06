require('cypress-iframe')

const URL = 'https://demo.midtrans.com/'
const btn_buyNow = '.btn.buy'
const btn_checkout = '.cart-checkout'
const btn_payNow = '.button-down > button'
const payment_akulaku = '[href="#/akulaku"]'
// const btn_linkPayment = '.link-nav'

class paymentPage {
    static open() {
        cy.visit(URL)
    }
    
    static clickBuyNow() {
        cy.get(btn_buyNow).click();
    }

    static clickCheckout() {
        cy.get(btn_checkout).click();
    }

    static clickAkulakuPayment() {
        cy.frameLoaded('#snap-midtrans')
        cy.iframe().find(payment_akulaku).click()
    }

    static clickPaynow() {
        cy.iframe().find(btn_payNow).click()
        cy.wait(3000)
    }
    // cy.url().should('include', 'https://simulator.sandbox.midtrans.com/akulaku/ui/login?appId=82728746&refNo=7b73dede-fda6-489a-9bc2-7a3d72d6bd39&sign=081xzXcZJ1tqQXLySjJzJYnn-eWFZKyjrvqj6PPTGLXjZpuP1f7W9aIiQZ0Y-pSYmYXYfbNwsT4KRe9x6PzwVQ&lang=id')
    // cy.url().should('include', 'https://api.sandbox.midtrans.com/v2/akulaku/redirect/c72e2b1d-226c-4da5-a61e-bcb863a595d5')
    // cy.get(btn_linkPayment).click()
    
    // static inputNumber() {  

    // }
}
    

export default paymentPage