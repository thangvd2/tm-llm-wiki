---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/tutorials/postingsapi"
title: "Postings API"
scraped_at: "2026-06-17T05:04:15.288Z"
images: 0
---

# Postings API

## [](#working_with_the_postings_api "Copy link to heading")Working with the Postings API

This section includes practice exercises. While these exercises aren’t intended to explore all aspects of Postings API functionality, they should give you some basic knowledge you need to get started with the Postings API.

### [](#exercise_1_modelling_an_internal_vault_core_transfer "Copy link to heading")Exercise 1 - Modelling an internal Vault Core transfer

#### [](#about_this_tutorial "Copy link to heading")About this tutorial

You work for a financial institution that uses Vault Core and want to develop a customer-facing app that lets your customers transfer funds to other customers of yours. You have:

-   Created a Postings API integration called the Internal Transfer Service
    
-   Registered the Internal Transfer Service integration with the Postings API by creating a [Postings API client](/vault-core/5-9/EN/api/postings_api#creating_postings_api_clients) via the Core API
    

In this tutorial, we explore the request/response pattern of the Internal Transfer Service integration with the synchronous Postings API. The `Transfer` PostingInstruction type models a transfer between two Vault Core accounts; it debits an account and credits a second account within the `committed` posting phase.

The scenario described in this tutorial is:

-   Johan Staden wants to transfer 15 GBP to Marco Marsh
    
-   Johan’s account ID is \`johan-account-id'
    
-   Marco’s account ID is \`marco-account-id'
    

#### [](#postings_api_client "Copy link to heading")Postings API Client

The Internal Transfer Service has registered a Postings API Client via the Core API.

#### [](#request "Copy link to heading")Request

The Internal Transfer Service calls `POST /v1/posting-instruction-batches` on the [synchronous Postings API](/vault-core/5-9/EN/api/core_api#_posting_api_v1_CreatePostingInstructionBatchResponse_CreatePostingInstructionBatch)'s request topic.

#### [](#response "Copy link to heading")Response

The synchrounous response contains a single instruction of type `Transfer` which commits two postings:

-   Johan’s account has been debited 15 GBP
    
-   Marco’s account has been credited 15 GBP
    

In this case the debit and credit both affect the `DEFAULT` address in the `COMMITTED` posting phase, and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

The two committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings APIs, as the financial integrity of the financial institution is always maintained.

### [](#exercise_2_modelling_an_inbound_payment "Copy link to heading")Exercise 2 - Modelling an inbound payment

#### [](#about_this_tutorial_2 "Copy link to heading")About this tutorial

You work for a financial institution that uses Vault Core and want to allow your customers to receive funds from another financial institution. You have:

-   Created a Postings API integration called the Inbound Payments Service
    
-   Registered the Inbound Payments Service integration with the Postings API by creating a [Postings API client](/vault-core/5-9/EN/api/postings_api#creating_postings_api_clients) via the Core API
    
-   Created an Internal account via the Core API to represent the aggregate transfers to and from another financial institution or payment scheme.
    

In this tutorial, we explore the request/response pattern of the Inbound Payments Service integration with the asynchronous Postings API. This is a simple implementation that assumes that the funds will always be accepted. An `InboundHardSettlement` is used to credit an account in Vault Core. As Vault Core follows double-entry accounting, an internal account must be supplied for an equal and opposite debit to be applied; it credits a customer account and debits an internal account within the `committed` posting phase.

The scenario described in this tutorial is:

-   José Pay receives 50 EUR from a customer of Other Bank PLC via payment scheme Speedier Payments
    
-   José’s account ID is \`jose-account-id'
    
-   Speedier Payment’s internal account ID is \`speedier-payments'
    

#### [](#postings_api_client_2 "Copy link to heading")Postings API Client

The Inbound Payments Service has registered a Postings API Client via the Core API.

#### [](#request_2 "Copy link to heading")Request

The Inbound Payments Service publishes a `pb.CreatePostingInstructionBatchRequest` to the [Postings API](/vault-core/5-9/EN/api/core_api#createpostinginstructionbatchrequest)'s request topic.

#### [](#response_2 "Copy link to heading")Response

The Inbound Payments Service listens to the response topic defined in its Postings API Client resource; this is `integration.inbound_payments.responses`. It receives a message containing a newly-created `pb.PostingInstructionBatch` resource. The `pb.PostingInstructionBatch` contains a single instruction of type `InboundHardSettlement` which commits two postings:

-   José’s account has been credited 50 EUR
    
-   Speedier Payment’s internal account has been debited 50 EUR
    

In this case the debit and credit both affect the `DEFAULT` address in the `COMMITTED` posting phase, and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

The two committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings API, as the financial integrity of the financial institution is always maintained.

### [](#exercise_3_modelling_an_outbound_payment "Copy link to heading")Exercise 3 - Modelling an outbound payment

#### [](#about_this_tutorial_3 "Copy link to heading")About this tutorial

You work for a financial institution that uses Vault Core and want to allow your customers to send funds to another financial institution. You have:

-   Created a Postings API integration called the Outbound Payments Service
    
-   Registered the Outbound Payments Service integration with the Postings API by creating a [Postings API client](/vault-core/5-9/EN/api/core_api#postings_api_clients) via the Core API
    
-   Created an Internal account via the Core API to represent the aggregate transfers to and from another bank or payment scheme.
    

In this tutorial, we explore the request/response pattern of the Outbound Payments Service integration with the asynchronous Postings API. This is a simple implementation that assumes that the funds will always be available. The `OutboundHardSettlement` PostingInstruction type models a transfer between a Vault Core internal account and a Vault Core customer account; it debits a customer account and credits an internal account within the `committed` posting phase.

The scenario described in this tutorial is:

-   José Pay sends 24 EUR from a customer of Other Bank PLC via payment scheme Speedier Payments
    
-   José’s account ID is \`jose-account-id'
    
-   Speedier Payment’s internal account ID is \`speedier-payments'
    

#### [](#postings_api_client_3 "Copy link to heading")Postings API Client

The Outbound Payments Service has registered a Postings API Client via the Core API.

#### [](#request_3 "Copy link to heading")Request

The Outbound Payments Service publishes a `pb.CreatePostingInstructionBatchRequest` to the [Postings API](/vault-core/5-9/EN/api/core_api#createpostinginstructionbatchrequest)'s request topic.

#### [](#response_3 "Copy link to heading")Response

The Outbound Payments Service listens to the response topic defined in its Postings API Client resource; this is `integration.outbound_payments.responses`. It receives a message containing a newly-created `pb.PostingInstructionBatch` resource. The `pb.PostingInstructionBatch` contains a single instruction of type `OutboundHardSettlement` which commits two postings:

-   José’s account has been debited 24 EUR
    
-   Speedier Payment’s internal account has been credited 24 EUR
    

In this case the debit and credit both affect the `DEFAULT` address in the `COMMITTED` posting phase, and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

The two committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings API, as the financial integrity of the bank is always maintained.

### [](#exercise_4_modelling_an_on_us_vault_transfer "Copy link to heading")Exercise 4 - Modelling an "on us" Vault transfer

#### [](#about_this_tutorial_4 "Copy link to heading")About this tutorial

You work for a financial institution that uses Vault Core and want to develop a customer-facing app that lets your customers transfer funds to other customers of your institution. In addition, to [Exercise 1](/vault-core/5-9/EN/tutorials/postingsapi#exercise_1__modelling_an_internal_vault_transfer) , you want to transfer funds through a wash account for accounting purposes. You have:

-   Created a Postings API integration called the Internal Transfer Service
    
-   Registered the Internal Transfer Service integration with the Postings API by creating a [Postings API client](/vault-core/5-9/EN/api/core_api#postings_api_clients) via the Core API
    
-   Created an Internal account via the Core API to represent the aggregate transfers within the financial institution.
    

In this tutorial, we explore the request/response pattern of the Internal Transfer Service integration with the asynchronous Postings API. The `OutboundHardSettlement` and `InboundHardSettlement` PostingInstruction types are used together in a single PostingInstructionBatch to model a transfer between two Vault Core accounts via an internal account; it debits a customer account, credits the internal account, then debits the internal account and credits a second customer account transactionally, all within the `committed` posting phase.

The scenario described in this tutorial is:

-   Johan Staden wants to transfer 15 GBP to Marco Marsh
    
-   Johan’s account ID is \`johan-account-id'
    
-   Marco’s account ID is \`marco-account-id'
    
-   The internal wash account ID is \`on-us-payments'
    

#### [](#postings_api_client_4 "Copy link to heading")Postings API Client

The Internal Transfer Service has registered a Postings API Client via the Core API.

#### [](#request_4 "Copy link to heading")Request

The Internal Transfer Service publishes a `pb.CreatePostingInstructionBatchRequest` to the [Postings API](/vault-core/5-9/EN/api/core_api#createpostinginstructionbatchrequest)'s request topic.

#### [](#response_4 "Copy link to heading")Response

The Internal Transfer Service listens to the response topic defined in its Postings API Client resource; this is `integration.internal_transfers.responses`. It receives a message containing a newly-created `pb.PostingInstructionBatch` resource. The `pb.PostingInstructionBatch` contains two instructions of type `OutboundHardSettlement` and `InboundHardSettlement` which each commit two postings transactionally:

-   Johan’s account has been debited 15 GBP
    
-   The internal account has been credited 15 GBP
    
-   The internal account has been debited 15 GBP
    
-   Marco’s account has been credited 15 GBP
    

In this case the debit and credits all affect the `DEFAULT` address in the `COMMITTED` posting phase, and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

The four committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings API, as the financial integrity of the financial institution is always maintained.

### [](#exercise_5_modelling_a_payment_authorisation_in_vault_core "Copy link to heading")Exercise 5 - Modelling a payment authorisation in Vault Core

#### [](#about_this_tutorial_5 "Copy link to heading")About this tutorial

You work for a financial institution that uses Vault Core and want to allow your customers to pay for goods and services via a card provider. You have:

-   Created a Postings API integration called the Payment Service
    
-   Registered the Payment Service integration with the Postings API by creating a [Postings API client](/vault-core/5-9/EN/api/core_api#postings_api_clients) via the Core API
    
-   Created an Internal account via the Core API to represent the aggregate transfers to and from the card scheme.
    

In this tutorial, we explore the request/response pattern of the Payment Service integration with the asynchronous Postings API. The `OutboundAuthorisation` PostingInstruction type is used to first ringfence funds and the `Settlement` PostingInstruction is used to finalise the transaction and move the funds.

-   The `OutboundAuthorisation` debits a customer account on the `PENDING_OUTGOING` phase and credits an internal account on the same `PENDING_OUTGOING` phase.
    
-   The `Settlement` reverses the postings created by the `OutboundAuthorisation` and replays them on the `COMMITTED` phase of both accounts.
    

chat\_bubble

A single PostingInstructionBatch cannot contain multiple PostingInstructions referencing the same `client_transaction_id`. Further, the API may batch PostingInstructionBatches together, so it is important to wait for the response of the `OutboundAuthorisation` PostingInstruction before sending the `Settlement` PostingInstruction.

The scenario described in this tutorial is:

-   Chris Stone wants to pay a merchant 15 GBP
    
-   Chris’s account ID is \`chris-account-id'
    
-   The transfers internal account ID is \`card-provider'
    

#### [](#postings_api_client_5 "Copy link to heading")Postings API Client

The Payment Service has registered a Postings API Client via the Core API.

#### [](#authorisation_request "Copy link to heading")Authorisation Request

The Payment Service integration publishes a `pb.CreatePostingInstructionBatchRequest` to the [Postings API](/vault-core/5-9/EN/api/core_api#createpostinginstructionbatchrequest)'s request topic.

#### [](#authorisation_response "Copy link to heading")Authorisation Response

The Payment Service integration listens to the response topic defined in its Postings API Client resource; this is `integration.payment_service.responses`. The `pb.PostingInstructionBatch` contains a single instruction of type `OutboundAuthorisation` which, if it contains no errors or rejections, commits two postings:

-   Chris’s account has been debited 15 GBP on the `PENDING_OUTGOING` phase
    
-   The internal account has been credited 15 GBP on the `PENDING_OUTGOING` phase
    

In this case the debit and credit both affect the `DEFAULT` address and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

If the authorisation errors or is rejected, the details will be present in the response.

The two committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings API, as the financial integrity of the financial institution is always maintained.

#### [](#settlement_request "Copy link to heading")Settlement Request

After receiving a successful result from the `OutboundAuthorisation`, the Payment Service integration can later then publish another `pb.CreatePostingInstructionBatchRequest` to the [Postings API](/vault-core/5-9/EN/api/core_api#createpostinginstructionbatchrequest)'s request topic.

#### [](#settlement_response "Copy link to heading")Settlement Response

The Payment Service integration listens to the response topic defined in its Postings API Client resource; this is `integration.payment_service.responses`. The `pb.PostingInstructionBatch` contains a single instruction of type `Settlement` which commits four postings:

-   Chris’s account has been credited 15 GBP on the `PENDING_OUTGOING` phase
    
-   The internal account has been debited 15 GBP on the `PENDING_OUTGOING` phase
    
-   Chris’s account has been debited 15 GBP on the `COMMITTED` phase
    
-   The internal account has been credited 15 GBP on the `COMMITTED` phase
    

In this case the debits and credits all affect the `DEFAULT` address and use the `COMMERCIAL_BANK_MONEY` asset class.

chat\_bubble

Posting Instructions can be created to target any other address or asset class.

The four committed postings are balanced across the amount, denomination, asset and phase dimensions; this will always be true for any postings committed via the Postings API, as the financial integrity of the financial institution is always maintained.