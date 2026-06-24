---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_parameters_to_an_instruction_flow"
title: "Adding Parameters to an Instruction Flow"
scraped_at: "2026-06-17T15:45:31.510Z"
images: 0
---

# Adding Parameters to an Instruction Flow

This tutorial covers how to make use of Parameters in `Instruction Flows`. Prior reading of the [Concepts](/vault-payments/latest/EN/using_vault_payments/parameters/) section is highly recommended. Similarly, Vault Payments provides a Python [SDK](/vault-payments/latest/EN/api/flows/) to help developing `Instruction Flows`. It is highly recommended to download and install the package before following this tutorial.

This tutorial will make use of the Instruction Flow from the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial.

In this tutorial we will be adding a parameter for changing the allowed currencies of a Flow.

## [](#creating_a_parameter "Copy link to heading")Creating a Parameter

We can customise the allowed currencies in our Flow (or any other Flow or Rule) by creating a `Parameter` resource, this will allow us to change the allowed currencies in the future without having to change Flow code.

We will create a new Parameter `"currency-allow-list"`. Make a call to `POST /api/v1/parameters`. The `Parameter` as shown in the following request:

The response will look like this:

We have now created a String List `Parameter`. We can use this to provide a list of currencies to allow. We have also set the constraint to have a minimum length of 1, to ensure Parameter Values always include at least one allowed currency.

Now, after we have created the `Parameter` we can create a global `ParameterValue` containing the currencies we want to accept. Call `POST /api/v1/parameter-values` with:

-   `parameter_id` set to the ID of the `Parameter` you created above.
    
-   The value set to the Currency Codes we want to allow globally by default, in this example we will use `"GBP"`
    

The response will look like this:

You have now created a `Parameter` with a global `ParameterValue`. We can now make use of this in an Instruction Flow. If we wish to change this in the future we can do so by creating a new `ParameterValue`.

## [](#adding_expected_parameters "Copy link to heading")Adding expected Parameters

To make use of the new Parameter, it must be included as an Expected Parameter within the Flow. This can be done by including the Parameter and its Constraint (which matches that defined in the resource) in the `FlowVersion` constructor.

Now that `"currency-allow-list"` has been included in the Flow Expected Parameters it will be available for use during the Flow.

## [](#using_the_parameter "Copy link to heading")Using the Parameter

The now included Parameter can be used within our Flow. We can replace the `ALLOWED_CURRENCIES` constant in our Flow with a reference to the Parameter. We update the `currency_check_resolve` function to take a 3rd argument, `params`, which is a dictionary containing the parameters.

## [](#complete_flow_version_code "Copy link to heading")Complete Flow Version code

`Instruction Flow Version` source code developed in this tutorial: