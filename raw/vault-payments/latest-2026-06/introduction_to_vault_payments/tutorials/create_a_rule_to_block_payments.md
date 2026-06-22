---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/create_a_rule_to_block_payments"
title: "Create a Rule to block Payments"
scraped_at: "2026-06-17T15:45:33.366Z"
images: 0
---

# Create a Rule to block Payments

The aim of this tutorial is to learn how to create a customisable Rule and how to enforce it by applying it to a Payment Instrument.

## [](#step_1_create_a_parameter "Copy link to heading")Step 1 - create a Parameter

In this tutorial we will create a `Rule` which can raise a restriction if a specific Merchant Category Code is used. To allow for customising of the Merchant Category Codes we first need to create a `Parameter` resource, this will allow us to change the Merchant Category Codes in the future without having to change Rule code.

Make a call to `POST /api/v1/parameters`. The `Parameter` should have a human-readable id, as shown in the following request:

The response will look like this:

Now, after we have created the `Parameter` we can create a global `ParameterValue` containing the Merchant Category Codes we want to restrict. Call `POST /api/v1/parameter-values` with:

-   `parameter_id` set to the ID of the `Parameter` you created above.
    
-   The value set to the Merchant Category Codes we want to restrict, in this example we will use `"5813,7795"`
    

The response will look like this:

You have now created a `Parameter` with a global `ParameterValue`. We can now make use of this in a `Rule`.

## [](#step_2_create_a_rule "Copy link to heading")Step 2 - create a Rule

Now we can create a `Rule` which will make use of our `Parameter` and raise a restriction if a specific Merchant Category Code is used. First we need to create the `Rule` resource.

Make a call to `POST /api/v1/rules`. The `Rule` should have a clear human-readable id and description, as shown in the following request:

The response will look like this:

Now we have created the parent `Rule` we can create the `Rule Version` which contains the logic used to define the Rule’s behaviour. Call `POST /api/v1/rule-versions` with:

-   `rule_id` set to the ID of the `Rule` you created above.
    
-   `code` set to:
    

This code checks the instruction to see if it’s of type Authorisation Initiation. If this is the case, the Merchant Category Code is compared to the codes provided in the `tutorial-mcc-deny-list` where this is the Parameter we setup earlier. We specify which Parameters we want to use with the `expected_parameters` variable (see [ExpectedParameters](/vault-payments/latest/EN/using_vault_payments/parameters#using_parameters) for more details) If there is a match it will return the restriction `merchant_category_code_restriction`.

We also need to specify the major version of the `flows_api` package we intend to use by declaring the global variable `flows_api_version`.

The response will look like this:

You have now created a `Rule` with an active `Rule Version`. To make use of this `Rule`, we can assign it to a `Payment Instrument` which will be covered in the next section.

## [](#step_3_using_the_rule "Copy link to heading")Step 3 - using the Rule

To make use of this rule, you can apply it to a relevant `Payment Instrument`. For example, to enable the rule for a particular customer’s card, update the `Payment Instrument` representing the card by calling `PUT /api/v1/payment-instruments/{payment_instrument.id}` using the `rule_id` of the `Rule` you created above:

chat\_bubble

To obtain a valid `Payment Instrument`, you may call the [List Payment Instruments](/vault-payments/latest/EN/api/payments_api#paymentinstrument) endpoint. If you are working with `Cards`, a `Payment Instrument` is also returned when you [create a `Card`](/vault-payments/latest/EN/cards/tutorials#step_2_create_a_card_for_the_cardholder).

The response will look like this:

Now that the `Rule` is associated with a `Payment Instrument`, it will be evaluated when a Rules Step is run as part of the `Instruction Flow`. When evaluated, if the merchant category code matches a value set in the global `tutorial-mcc-deny-list`, then the restriction will be raised and this information can be used by the `Instruction Flow`.

chat\_bubble

For this rule to be evaluated, the Payment Instrument must first be matched via the `MatchPaymentInstrumentStep` in the Instruction Flow. The rule can then be evaluated as part of the `RulesStep`.

You can verify this by simulating an authorisation with relevant Merchant Category Code (also known as a Card Acceptor Business Code):

chat\_bubble

The PCI DSS scoped details above, such as PAN, may be obtained through a [Get Card Details](/vault-payments/latest/EN/cards/tutorials#step_1_get_card_details_in_clear_text) call in Sandbox environments.

You should receive a decline, indicating that the Authorisation was rejected:

## [](#step_4_changing_rule_behaviour "Copy link to heading")Step 4 - changing Rule behaviour

We now have a `Rule` that applies a restriction to when the Merchant Category Code is set to the values "5813" or "7795" in our Parameter, and have applied the `Rule` to our Payment Instrument. We can further customise this `Rule` using [Payment Instrument level Parameter Values](/vault-payments/latest/EN/using_vault_payments/parameters#setting_parameter_values). This allows us to apply a different Value to the "tutorial-mcc-deny-list" that will only be used by this Payment Instrument.

Make a call to `POST /api/v1/parameter-values`. The `parameter_id` and `payment_instrument_id` should be populated from the previous resources, as shown in the following request:

The response will look like this:

This value of "4121" will now override the Parameter for this Payment Instrument only, so that now if the Merchant Category Code matches a value set in this Payment Instrument level `tutorial-mcc-deny-list` Parameter, then the restriction will be raised. You can verify this by simulating another authorisation with the Merchant Category Code set to "4121".

If later you no longer want the Payment Instrument to override the global `ParameterValue` for this `tutorial-mcc-deny-list` Parameter, you can [deactivate](/vault-payments/latest/EN/using_vault_payments/parameters#setting_parameter_values) the newly created Payment Instrument level `ParameterValue`.