import paymentPage from '../pageObject/payment.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the Midtrans website', () => {
    paymentPage.open()
});

When('I click "Buy now"', () => {
    paymentPage.clickBuyNow()
});

When('I click "Checkout"', () => {
    paymentPage.clickCheckout()
});

When ('I select "Akulaku PayLater" as the payment method', () => {
    paymentPage.clickAkulakuPayment()
})

When ('I click "Pay now"', () => {
    paymentPage.clickPaynow()
})

// When ('I enter the phone number "08122222222"', () => {
//     paymentPage.inputNumber()
// })

// When ('I click "Next"', () => {

// })

// When ('I click "Pay"', () => {

// })

// Then ('I should see the text "Transaction is Successful"', () => {

// })