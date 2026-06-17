---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/mandates"
title: "Mandates"
scraped_at: "2026-06-17T05:07:57.779Z"
images: 0
---

# Mandates

A Mandate is an authorisation that a customer gives to a service provider or financial institution, allowing it to collect payments directly from their bank account on a recurring or one-time basis.

Vault Payments provides the [`Mandates API`](/vault-payments/latest/EN/api/payments_api#mandates) which allows users to retrieve existing Mandates.

## [](#overview "Copy link to heading")Overview

You can create and match Mandates via the [Flow Steps](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#steps).

You can view Mandates through the `Mandates API`:

The response will look like this:

You can also retrieve the specific Mandate by its `id` through the GET endpoint:

and the response will look like this: