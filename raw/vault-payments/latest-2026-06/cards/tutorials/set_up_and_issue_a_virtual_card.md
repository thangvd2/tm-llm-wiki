---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/set_up_and_issue_a_virtual_card"
title: "Set up and issue a card"
scraped_at: "2026-06-17T15:50:00.204Z"
images: 1
---

# Set up and issue a card

In Production we will provide full capability to create card programmes including BINs, as shown in the following diagram (A). Vault Payments is also designed to operate with any core banking system (B). For the purpose of the Sandbox we have pre-configured and provisioned a set of resources which are described in [Provided resources](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources).

As the first step of the tutorial, we will guide you through how to create a `Cardholder`.

chat\_bubble

To see how the default resources have been set up, you can call the relevant List or BatchGet endpoints, such as `GET /api/v1/cards/account-ranges:batchGet`. You can test the APIs for creating new `Account Ranges`, `Card Products`, `Cardholders` and `Cards` in the Sandbox by calling the relevant Create endpoints.

![Card\_tutorial.svg](_assets/uuid-189e2afb-889a-dd23-9db0-c9d15d0aae4_vaultpay.svg)

## [](#step_1_create_a_cardholder "Copy link to heading")Step 1 - Create a Cardholder

A `Card` requires a `Cardholder` (C in the above diagram), so create one by calling `POST /api/v1/cards/cardholders`.

The following example request specifies a particular `Cardholder` ID so that subsequent tutorials can reference the same ID. You can also replace this with any other UUID, or omit it and the system will randomly generate one.

chat\_bubble

You can only use the ID specified if a `Cardholder` has not already been created using this ID.

chat\_bubble

You can use the `Cardholder` ID to link a `Cardholder` in Vault Payments with a customer in your CRM system. Alternatively, you can store this association in the \`Cardholder’s metadata field, as shown in the example request.

This response indicates that the `Cardholder` has been created:

## [](#step_2_create_a_card_for_the_cardholder "Copy link to heading")Step 2 - Create a Card for the Cardholder

Call `POST /api/v1/cards/issuance:issue` to issue a `Card` for the `Cardholder` that was created. This example request issues a `Card` on the [supplied Card Product](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources).

The following example request specifies the same `Card` ID used in Step 1, which can be replaced with any other UUID or omitted altogether.

chat\_bubble

You can only use the ID specified if a `Card` has not already been created using this ID.

chat\_bubble

You can issue multiple `Cards` for the same `Cardholder`.

The following response indicates that the `Card` has been issued, and is associated with the `Cardholder`:

Make a note of the `payment_instrument_id` in the response because you will need this in later tutorials.

When creating a `Card`:

-   A Payment Instrument is automatically created and associated with it (as shown in the `payment_instrument_id` field); and
    
-   Its status is governed by its ``CardProduct’s `issuing_plan.issuing_status`` field. If this status is set to `CARD_STATUS_INACTIVE`, then the `Card` will need to be [activated](/vault-payments/latest/EN/cards/tutorials#activate_a_card) separately.
    

If you wish to create a physical card, the `CardProduct` must support it and the card type on the resource creation has to be set to `CARD_TYPE_PHYSICAL`. A `CardOrder` will be automatically created for the physical card. On production, ``CardOrder`s will be batched and sent to a personalisation bureau for processing. Once the physical card is shipped from the personalisation bureau, the `CardOrder`` status will be updated to `SHIPPED`.

chat\_bubble

In the sandbox the supplied [supplied Card Product](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources) only supports virtual card creation.