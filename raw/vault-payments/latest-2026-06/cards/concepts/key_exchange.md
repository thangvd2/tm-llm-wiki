---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/concepts/key_exchange"
title: "Key Exchange"
scraped_at: "2026-06-17T15:49:45.824Z"
images: 0
---

# Key Exchange

As part of the onboarding process, Vault Payments need to exchange two Elliptic Curve Cryptography P-256 public keys:

-   Client Verification Key - Server Verification Key
    

This allows each party to verify the other’s identity when [sharing and encrypting the sensitive data](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#encrypting_sensitive_data).

## [](#client_verification_key "Copy link to heading")Client Verification Key

The `Client Verification Key` is a public key used by Vault Payments to verify the ephemeral public key received in requests to sensitive endpoints. You share the key with Vault Payments as part of the offline setup process and Vault Payments stores it securely.

### [](#client_signing_key "Copy link to heading")Client Signing Key

The `Client Signing Key` is the corresponding private key of the `Client Verification Key`, used to sign the ephemeral public key included in requests to sensitive endpoints.

error

You must generate and store this private key securely: through this key Vault Payments allows you to retrieve sensitive cardholder details.

## [](#server_verification_key "Copy link to heading")Server Verification Key

The `Server Verification Key` is a public key that allows you to verify the signature on the ephemeral public key returned by Vault Payments in responses from sensitive endpoints. Vault Payments shares this key with you as part of the offline setup process and you should store it securely.