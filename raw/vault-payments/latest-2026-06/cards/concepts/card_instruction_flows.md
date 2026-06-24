---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/concepts/card_instruction_flows"
title: "Card Instruction Flows"
scraped_at: "2026-06-17T15:49:52.491Z"
images: 0
---

# Card Instruction Flows

## [](#general_approach_to_flow_error_handling "Copy link to heading")General approach to flow error handling

The place to look for help in determining what went wrong for an instruction in a flow depends on whether we are allowed to decline that message.

For message types where we are not allowed to decline, advices and financial initiations, for any issues that happen during the flow, we append them to the errors list during the step, and if any errors are present at the end of the step, we route to accept with issues. For more complicated steps such as matching, this makes it possible to know what has gone wrong within the step.

For message types where we are allowed to decline, for any issues that happen during the flow, we select an appropriate outcome reason and response code based on the error, and at the end of the step route to decline.

Routing to the decision as soon as the step ends rather than continuing allows us to respond more quickly. The one situation in which we don’t do this every time, is in financial initiations. In some checks in steps early in the flow, we route to accept with issues, but once we think it is possible to make postings, we will attempt to make hard settlement postings or exception postings, as well as any follow-on postings such as interchange fees.

## [](#instruction_flows_available_in_sandbox "Copy link to heading")Instruction flows available in Sandbox

Pre-configured Instruction Flows for card payment processing are provided in the Sandbox. Currently these cover:

-   Debit Authorisation messages (represented by ISO 20022 cain.001 AuthorisationInitiation messages)
    
-   First Presentment messages (represented by ISO 20022 cain.003 FinancialInitiation messages)
    
-   Card Management messages (represented by ISO 20022 cain.023 CardManagementInitiation messages)
    
-   Reversal messages (represented by ISO 20022 cain.005 ReversalInitiation messages)
    
-   Authorisation expiry release messages (see [Authorisation Expiry](/vault-payments/latest/EN/cards/concepts#authorisation_expiry)) (represented by ISO 20022 caad.008 AdministrativeIniriation messages)
    

These Instruction Flows can be found in the **Configuration** > **View Flows** [area of the Vault Payments app](https://sandbox.payments.tmachine.io/configuration/instructionflows).