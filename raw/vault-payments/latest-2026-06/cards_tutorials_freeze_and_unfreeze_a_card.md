---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/freeze_and_unfreeze_a_card"
title: "Freeze and unfreeze a card"
scraped_at: "2026-06-17T05:11:46.202Z"
images: 0
---

# Freeze and unfreeze a card

This tutorial requires a `Card` with the status set to `CARD_STATUS_ACTIVE`.

## [](#step_1_update_status_to_suspended "Copy link to heading")Step 1 - Update status to SUSPENDED

To update a ``Card’s status, make a call to `PUT /api/v1/cards/issuance/{card.id}``, for example using the Card ID created from an earlier section:

The response confirms that the `Card` is now in the `SUSPENDED` status:

You can now use the Simulator to [make a card payment](/vault-payments/latest/EN/cards/tutorials#make_a_card_payment) and verify that it will be declined.

## [](#step_2_update_status_back_to_active "Copy link to heading")Step 2 - Update status back to ACTIVE

You can now make another call to `PUT /api/v1/cards/issuance/{card.id}` as per step 1, but use the status of `CARD_STATUS_ACTIVE` to reactivate the `Card`. This is the response:

You can now use the Simulator to [make a card payment](/vault-payments/latest/EN/cards/tutorials#make_a_card_payment) and verify that it will be accepted.