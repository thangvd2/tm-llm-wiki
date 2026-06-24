---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/activate_a_card"
title: "Activate a card"
scraped_at: "2026-06-17T15:50:04.785Z"
images: 0
---

# Activate a card

To activate a `Card`, you need the ID of an existing `Card` that was created with `CARD_STATUS_INACTIVE`.

Activate it with a call to `PUT /api/v1/cards/issuance/{card.id}`:

The following response indicates that the `Card` is now `ACTIVE`:

To manage the \`Card’s lifecycle further, see [Freeze and unfreeze a card](/vault-payments/latest/EN/cards/tutorials#freeze_and_unfreeze_a_card).