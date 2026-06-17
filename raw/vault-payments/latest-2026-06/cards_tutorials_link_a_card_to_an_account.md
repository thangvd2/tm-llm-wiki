---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/link_a_card_to_an_account"
title: "Link a card to an account"
scraped_at: "2026-06-17T05:11:39.979Z"
images: 0
---

# Link a card to an account

Prerequisites:

-   The ID of a `Payment Instrument` associated with an active `Card`
    
-   The ID of an `Account Link`
    

You should now have a `Card` associated with a `Payment Instrument`, but the `Payment Instrument` is not yet linked to any account in a core banking system; you must update it with a default `Account Link` before its `Card` can be used to make any Payments.

Update this with a call to `PUT /api/v1/payment-instruments/{payment_instrument.id}`. The following example request links the `Payment Instrument` that was created in [Set up and issue a virtual card](/vault-payments/latest/EN/cards/tutorials#set_up_and_issue_a_virtual_card) to the [Account Link we supplied](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources) for the GBP current account.

Replace the Payment Instrument ID with the one that was returned in the response to your card issuance request:

The following response indicates that the `Payment Instrument` now has a default `Account Link`: