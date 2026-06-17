---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/make_a_card_payment"
title: "Make a card payment"
scraped_at: "2026-06-17T05:11:44.407Z"
images: 0
---

# Make a card payment

This tutorial requires a `Cardholder` with an active `Card` whose `Payment Instrument` has a default `Account Link`.

## [](#step_1_get_card_details_in_clear_text "Copy link to heading")Step 1 - Get Card Details in clear text

To assume the role of the ``Card’s `Cardholder``, you first need to retrieve sensitive details of the card - its Primary Account Number (PAN), Security Code and Expiry Date. In the sandbox environment, Vault Payments exposes APIs for retrieving these card details in clear text. In Production, Vault Payments will only expose APIs for retrieving card details in encrypted form.

Retrieve the details of a `Card` you created with a call to `GET /api/sandbox/cards/{card_id}:cleartextCardDetails`:

The response should look like this:

chat\_bubble

You can also retrieve these encrypted details by calling the Production PCI-DSS compliant [encrypted endpoint](/vault-payments/latest/EN/api/payments_api#CardDetail). To learn how to decrypt retrieved data, see [Encrypting sensitive data](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#encrypting_sensitive_data).

Save the retrieved card details for use in later steps:

## [](#step_2_simulate_an_authorisation "Copy link to heading")Step 2 - Simulate an Authorisation

Using the `Card` details you retrieved, simulate an authorisation by updating the below example request with your Card’s PAN, Security Code and Expiry Date, then making a call to `POST /api/sandbox/simulate/cards/authorisation-initiations`.

The `amount` field’s format is decimals (e.g. 10.00), and in this example the `merchant_category_code` of "5812" corresponds to \`Eating Places, Restaurants' in the ISO18245 specification for Merchant Category Codes (also known as Card Acceptor Business Codes):

The returned response includes a Response Code of "00", indicating that the Authorisation was successful:

You can also view this Payment in the **Investigation** > **Search** [area of the Vault Payments app,](https://sandbox.payments.tmachine.io/investigation/search) and entering the `instruction_id` returned above into the search bar.

chat\_bubble

We recommend that you avoid simulating Authorisations with very large amounts, since this may rapidly deplete the funds in the simulated core banking account, and cause further Authorisations to be declined.

Save the life cycle trace ID to be used in the next step:

## [](#step_3_simulate_a_presentment "Copy link to heading")Step 3 - Simulate a Presentment

When the Authorisation in [Step 2](/vault-payments/latest/EN/cards/tutorials#step_2__simulate_an_authorisation) is approved, its amount will be deducted from the corresponding account’s available balance in the core banking system. However, the funds will not yet have moved from this account to the internal account for settling with the scheme.

To trigger this transfer of funds, simulate a First Presentment message by making a call to `POST /api/sandbox/simulate/cards/financial-initiations`, providing the same `pan`, `expiry_date`, `amount`, `currency`, and `transaction_type` as before, as well as the same `life_cycle_trace_id` (including all trailing spaces) that was returned when simulating the Authorisation:

This returned response will include the instruction ID, indicating that the Presentment has been successfully submitted to Vault Payments for processing:

As Clearing is a background process, it may take a few seconds for Vault Payments to fully process the Presentment message. As before, you can observe its progress by visiting the **Investigation** > **Search** [area of the Vault Payments app](https://sandbox.payments.tmachine.io/investigation/search), and entering the `instruction_id` returned above into the search bar. The search results should include a corresponding **Financial Initiation** message (the ISO 20022 equivalent of the First Presentment message type).

When Vault Payments has fully processed the message, visit the Vault Core Operations Dashboard at `{vault-core-operations-dashboard-url}/customers/{Customer ID}/accounts/{Account ID}` (where\`{Customer ID}\` and `{Account ID}` correspond to the pre-provisioned Customer and GBP Account in Vault Core) to inspect the posting that was triggered by the Presentment message. This will display a transfer of GBP 11.00 from the account to the internal suspense account used for settling with the scheme.

Additionally, if you click into the internal account, you will see a related posting that transfers the Interchange Fee from that account to the profit & loss internal account. This Interchange Fee percentage is currently hardcoded in the Presentment simulator.