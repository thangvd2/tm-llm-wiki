---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/concepts/card_simulator"
title: "Card Simulator"
scraped_at: "2026-06-17T15:49:50.721Z"
images: 0
---

# Card Simulator

We have built a card [Simulator](/vault-payments/latest/EN/api/payments_api#Simulator_Cards) that provides a simple API to initiate card transactions. It acts as the Card Scheme interface in our Sandbox environment by taking in simplified ISO 20022 requests, converting them to valid ISO 8583 messages, and sending them into the Vault Payments gateway. It then converts the response back to a human readable format.

The purpose of this simulator is to enable you to quickly envisage the creation of card transactions, and see how the changing fields are reflected in the Rule evaluation and Payment Instruction outcomes. Since the API exposes a simplified ISO 20022 format, you have greater control over the resultant message which is processed by Vault Payments, enabling straight-forward Instruction Flow development. For more information about the associated Instruction Flows, see [Card Instruction Flows](/vault-payments/latest/EN/cards/concepts#card_instruction_flows).

## [](#authorisation_initiation "Copy link to heading")Authorisation Initiation

The Simulate Authorisation Initiation [API](/vault-payments/latest/EN/api/payments_api#AuthorisationInitiation) lets you simulate Authorisation Initiation messages in Vault Payments. It takes in a request with the key authorisation fields, creates an ISO 8583 formatted authorisation message and simulates the authorisation being sent via the card scheme. The message is converted to ISO 20022 format and sent to Vault Payments which processes the authorisation based on the associated Authorisation Instruction Flow.

## [](#financial_initiation "Copy link to heading")Financial Initiation

The Simulate Financial Initiation [API](/vault-payments/latest/EN/api/payments_api#FinancialInitiation) lets you simulate financial initiation messages in Vault Payments. It takes in a request with fields which should match a previously generated authorisation, creates an ISO 8583 formatted presentment message within a clearing file and triggers the clearing cycle. The presentment message is obfuscated to hide sensitive details, converted to ISO 20022 format and sent to Vault Payments for further processing based on the associated First Presentment Instruction Flow.

error

When using the Simulate Presentment API, the interchange fees will always be credited at 0.2% of the transaction amount.