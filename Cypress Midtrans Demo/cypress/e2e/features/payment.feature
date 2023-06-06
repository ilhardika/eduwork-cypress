Feature: Payment
    As a user
    I want to make payments
    So that I can complete my purchase

    Scenario: Positive Test Payment - Akulaku PayLater
        Given I am on the Midtrans website
        When I click "Buy now"
        And I click "Checkout"
        And I select "Akulaku PayLater" as the payment method
        And I click "Pay now"
# And I enter the phone number "08122222222"
# And I click "Next"
# And I click "Pay"
# Then I should see the text "Transaction is Successful"

# Scenario: Negative Test Payment - Akulaku PayLater
#     Given I am on the Midtrans website
#     When I click "Buy now"
#     And I click "Checkout"
#     And I select "Akulaku PayLater" as the payment method
#     And I click "Pay now"
#     And I enter the phone number "08144444444"
#     And I click "Next"
#     And I click "Pay"
#     Then I should see the text "Transaction is Denied"

# Scenario: Positive Test Payment - Kredivo
#     Given I am on the Midtrans website
#     When I click "Buy now"
#     And I click "Checkout"
#     And I select "Kredivo" as the payment method
#     And I click "Pay now"
#     And I enter the phone number "081123123123"
#     And I enter the verification code "123456"
#     And I select the service duration
#     And I click "Next"
#     And I enter the OTP code "1234"
#     And I click "Next"
#     Then I should see the text "Transaction is Successful"

# Scenario: Negative Test Payment - Kredivo
#     Given I am on the Midtrans website
#     When I click "Buy now"
#     And I click "Checkout"
#     And I select "Kredivo" as the payment method
#     And I click "Pay now"
#     And I enter the phone number "081321321321"
#     And I enter the verification code "123456"
#     And I select the service duration
#     And I click "Next"
#     And I enter the OTP code "1234"
#     And I click "Next"
#     Then I should see the text "Transaction is Denied"

# Scenario: Positive Test Payment - BRI Mobile
#     Given I am on the Midtrans website
#     When I click "Buy now"
#     And I click "Checkout"
#     And I select "BRImo" as the payment method
#     And I click "Pay now"
#     And I enter the name "testuser00"
#     Then I should see the text "Transaksi Sukses"

# Scenario: Negative Test Payment - BRI Mobile
# Given I am on the Midtrans website
# When I click "Buy now"
# And I click "Checkout"
# And I select "BRImo" as the payment method
# And I click "Pay now"
# And I enter any name other than "testuser00"
# Then I should see the text "Transaksi Gagal"