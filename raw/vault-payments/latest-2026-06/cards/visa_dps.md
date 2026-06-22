---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps"
title: "Visa DPS integration"
scraped_at: "2026-06-17T15:50:21.862Z"
images: 0
---

# Visa DPS integration

This section gives an overview of the Vault Payments Visa DPS integration.

## [](#overview "Copy link to heading")Overview

Visa Debit Processing Service (DPS) is an issuer processing platform provided by Visa Inc. It helps financial institutions (Issuers) manage their cardholder accounts and process card payment transactions.

Visa DPS provides a suite of services for cards, including:

### [](#transaction_processing "Copy link to heading")Transaction Processing

Vault Payments receives authorisation and clearing messages from DPS and can approve or reject authorisations (for example due to insufficient funds). All cryptographic checks (PIN or CVV validation) can be done by DPS or by Vault Payments - depending on the programme configuration. In the case when Vault Payments or core system is temporarily unavailable, Visa DPS can go into Stand-in Processing (STIP) mode and handle authorisation/clearing on behalf of the Issuer, sending advice messages later on when the systems are back online - the exact behaviour can be configured per programme.

### [](#card_and_account_management "Copy link to heading")Card and Account Management

Card, Cardholder and Account Link information is kept in sync with Vault Payments and Visa DPS. Any change made to these resources on Vault Payments' side is synchronised with DPS, however changes made in Visa DPS are not synchronised with Vault Payments (except for Card Status).

### [](#ap_balance_files "Copy link to heading")AP Balance Files

AP balance files can be uploaded to Vault Payments' File API. They are then uploaded to Visa DPS on behalf of the client.

### [](#fraud_and_risk_management "Copy link to heading")Fraud and Risk Management

Visa DPS can be configured to perform risk scoring and include the results in the transaction messages. It can also send separate fraud notification messages to Vault Payments.

### [](#digital_tokenisation_services "Copy link to heading")Digital Tokenisation Services

Digital tokenisation for use in mobile wallets (like Apple Pay, Google Pay) is handled by Visa DPS. Vault Payments' CardToken API is not used for Visa DPS.