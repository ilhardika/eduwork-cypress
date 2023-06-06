import paymentPage from '../pageObject/payment.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given ('I am on the Demo Midtrans website', () => {
    paymentPage.open()
})

When ('I select "Credit Card" as the payment method', () => {
    paymentPage.kreditCardPayment()
})

When ('I select "QRIS" as the payment method', () => {
    paymentPage.qrisPayment()
})

When ('I enter a valid credit card number, expiration date, and CVV', () => {
    paymentPage.kreditCardNumber()
    paymentPage.kreditCardExpDate()
    paymentPage.kreditCrdCvv()
})

When ('I click "Pay Now" button', () => {
    paymentPage.clickPayNow()
    cy.wait(10000)
})

When ('I enter an invalid credit card number', () => {
    cy.iframe().find('.card-number-input-container > input').type('1234123412341234')
    paymentPage.kreditCardExpDate()
    paymentPage.kreditCrdCvv()
})

When ('I enter an invalid expiration date', () => {
    paymentPage.kreditCardNumber()
    cy.iframe().find('#card-expiry').type('1234')
    paymentPage.kreditCrdCvv()
})

When ('I enter an invalid CVV', () => {
    paymentPage.kreditCardNumber()
    paymentPage.kreditCardExpDate()
    cy.iframe().find('#card-cvv').type('321')
})

Then ('I should see an invalid credit card number message', () => {
    paymentPage.invalidCreditCardNumber()
})

Then ('I should see an invalid expiration date message', () => {
    paymentPage.invalidCreditCardExpirationDate()
})

Then ('I should see a card declined message', () => {
    paymentPage.invalidCreditCardCVV()
})

Then ('I should see a successful payment message', () => {
    paymentPage.successfulPayment()
})

Then ('I should see a QR code displayed', () => {
    paymentPage.qrisCode()
})