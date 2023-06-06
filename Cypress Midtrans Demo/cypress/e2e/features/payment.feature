Feature: Payment
    As a user
    I want to make payments
    So that I can complete my purchase

    Scenario: Positive test - Pembayaran dengan Kartu Kredit
        Given I am on the Demo Midtrans website
        When I select "Credit Card" as the payment method
        And I enter a valid credit card number, expiration date, and CVV
        And I click "Pay Now" button
        Then I should see a successful payment message

    Scenario: Negative test - Nomor kartu kredit tidak valid
        Given I am on the Demo Midtrans website
        When I select "Credit Card" as the payment method
        And I enter an invalid credit card number
        Then I should see an invalid credit card number message

    Scenario: Negative test - Tanggal kadaluwarsa kartu kredit tidak valid
        Given I am on the Demo Midtrans website
        When I select "Credit Card" as the payment method
        And I enter an invalid expiration date
        Then I should see an invalid expiration date message

    Scenario: Negative test - Kartu ditolak oleh bank
        Given I am on the Demo Midtrans website
        When I select "Credit Card" as the payment method
        And I enter an invalid CVV
        Then I should see a card declined message

    Scenario: Positive test - Menampilkan QR code pada pembayaran QRIS
        Given I am on the Demo Midtrans website
        When I select "QRIS" as the payment method
        Then I should see a QR code displayed