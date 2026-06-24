---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/setup_rule_management_resources"
title: "Managing Rules across Payment Instruments"
scraped_at: "2026-06-17T15:45:35.108Z"
images: 0
---

# Managing Rules across Payment Instruments

The aim of this tutorial is to learn about RuleSets and how they can be used to manage Rule behaviour across many Payment Instruments.

## [](#step_1_adding_a_rule_to_a_rule_set "Copy link to heading")Step 1 - adding a Rule to a Rule Set

chat\_bubble

We provide a specific IDs in the example requests below to make it easier for subsequent tutorials to reference it. Alternatively you can use the Rule created previously.

In this tutorial we will add a `Rule`, which raises a restriction if a specific Merchant Category Code is used, to an existing `RuleSet`. To do this we need to create a new `RuleSetVersion` for the existing `RuleSet`.

We will use the provided RuleSet `tm-card-controls` which contains Rules which control card behaviours. Currently this only includes rules for authorisations, contactless and atm withdrawals, we will add `tm-merchant-restriction` which includes the new behaviour we want.

Make a call to `POST /api/v1/rule-set-versions`:

This will create a new `RuleSetVersion` which includes the new Rule `tm-merchant-restriction`.

All usage of the RuleSet `tm-card-controls` has now been updated so that when this RuleSet is used the new Rule is run. To make use of this new behaviour we will now attach this to a `Payment Instrument` so we can make use of our RuleSet with Merchant Category Code restrictions.

## [](#step_2_applying_rule_sets_to_payment_instruments "Copy link to heading")Step 2 - applying Rule Sets to Payment Instruments

We now have a `RuleSet` that, along with its existing behaviour, includes a `Rule` to block Payments based on the Merchant Category Code.

We can now apply this to one or many `Payment Instruments` and they will inherit all the Rule behaviour of `RuleSet`. To apply this we can update the `Payment Instrument` by calling `PUT /api/v1/payment-instruments/{payment_instrument.id}` and setting the `rule_set_id`:

chat\_bubble

To obtain a valid `Payment Instrument`, you may call the [List Payment Instruments](/vault-payments/latest/EN/api/payments_api#paymentinstrument) endpoint.

Now that the `RuleSet` is associated with a `Payment Instrument`, all the Rules will be evaluated when a Rules Step is run as part of the `Instruction Flow`.

## [](#step_3_changing_parameter_values "Copy link to heading")Step 3 - changing Parameter Values

We can further customise the `Payment Instrument` by creating `ParameterValues` that are used within the RuleSet. By default the global Parameter Values will be used however we can override them on the Payment Instrument for specific behaviours. To apply this we can create a new `ParameterValue` by calling `POST /api/v1/parameter-values` and using our Payment Instrument ID:

This will create a new Value for `tm-merchant-category-code-deny-list` Parameter which is used by the Rule `tm-merchant-restriction` we have added to our RuleSet. Here we have provided a single code 4121 which overrides the global Parameter Value which would be used by other Payment Instruments.

You can verify these changes by simulating an authorisation with the Merchant Category Code we included in the Parameter Value:

chat\_bubble

The PCI DSS scoped details above, such as PAN, may be obtained through a [Get Card Details](/vault-payments/latest/EN/cards/tutorials#step_1_get_card_details_in_clear_text) call in Sandbox environments.

You should receive a decline, indicating that the Authorisation was rejected: