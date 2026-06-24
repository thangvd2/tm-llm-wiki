---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_1_connecting_to_vault_restful_API_calls/exercise-1"
title: "Exercise 1 - Uploading and using Smart Contracts"
scraped_at: "2026-06-17T15:57:25.449Z"
images: 0
---

# Exercise 1 - Uploading and using Smart Contracts

## [](#overview "Copy link to heading")Overview

Welcome to this Lab session covering a couple of basic user flows; creating a product, opening an account for a customer, and finally sending a posting to an Account.

## [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Sandbox for training purposes, feel free to reach out to your Partner Manager, Client Success Manager or Account Director if you’d like access to this resource.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com). If using postman you can import the Core API [OpenAPI definition](/vault-core/latest/EN/api/core_api) to load a postman collection with all the endpoints.

You also have the option to use the Postman collection available within the [Lab Starter Pack](/learning/latest/EN/labs#setup). This does not provide solutions for the exercises here, but can be used as a starting point.

error

Throughout this lab make sure to update \`$VAULT\_CORE\_ENVIRONMENT\_URL\`to the URL of your Vault instance.

This lab makes use of an internal account to make postings from. If this account doesn’t exist, then the posting will fail. You can create the Internal account using the below cURL request.

chat\_bubble

If you try to run any of the below setup requests, and the respective resource already exists in the environment, you will get an error explaining this. Do not retry the request if you get this error, instead proceed with the exercises.

**Setup: Create Internal Account**

## [](#smart_contracts "Copy link to heading")Smart Contracts

A Smart Contract is a piece of code that digitally enforces a particular financial agreement / Terms and Conditions (T&Cs) between various parties, one of them being the bank. Smart Contracts therefore define the financial behaviour of an account, the protocol by which the balance is mutated.

There are a few methods to upload smart contracts to Vault, the method we will cover today will be utilising the Core API product endpoint.

-   `$JSON_WEB_TOKEN` should be updated to the token generated in exercise 1.
    
-   `request_id`: A unique string ID used to ensure the request is idempotent.
    
-   `product_id`: How we want to refer to the product being uploaded.
    
-   `code`: The contract code, in JSON delimited format, that is to be uploaded.
    
-   `supported_denominations`: The denominations supported by this product version.
    

Aside from those examined above there are many more optional fields on a `product-version` request, which are explained on the Vault Portal [here](/vault-core/latest/EN/api/core_api#_core_api_v1_products_ProductVersion_CreateProductVersion). These fields can be used to provide values for expected parameters, add names and descriptions to the product, or restrict the product to certain currencies.

### [](#sub_exercise_one "Copy link to heading")Sub-exercise One

Use this [How to Guide](/learning/latest/EN/how_to_guides/how_to_upload_smart_contracts), and the request given above, to upload the given *ultra basic smart contract* using the Core API.

*Ultra basic Smart Contract*

## [](#accounts "Copy link to heading")Accounts

In Vault, Customer Accounts are the equivalent of traditional bank accounts. When a Customer Account is created, it must be associated with a product and a Stakeholder. A Product is an instance of an uploaded Smart Contract, while a Stakeholder is the customer associated with the Account.

You can create an account using the below cURL request to the [Accounts V2 endpoint](/vault-core/latest/EN/api/core_api#_core_api_v2_accounts_Account_CreateAccount):

-   `YOUR-AUTH-TOKEN` should be updated to the token generated in the previous step.
    
-   `request_id`: A unique string ID used to ensure the request is idempotent.
    
-   `smart_contract_version_id`: The ID of the smart contract version which will back this account (HINT: id is in the form of an int).
    
-   `type`: Set here to `ACCOUNT_TYPE_CUSTOMER`.The type of the Account.
    
-   `stakeholder-ids`: IDs of the customers linked to this account.
    
-   `status`: Set here to `ACCOUNT_STATUS_OPEN`. The status of the Account. When creating a Customer Account this must be set to either PENDING or OPEN.
    
-   `permitted_denominations`: Set here to `GBP`. The denominations that can be posted to the account.
    

### [](#sub_exercise_two "Copy link to heading")Sub-exercise Two

This exercise strings a couple of concepts together:

-   Create a new customer as per Lab one
    
-   Using the contract uploaded in the last exercise create an Account for this Customer
    
-   Make sure you save the returned `account_id`
    

lightbulb

You’ll need to fetch the `smart_contract_version_id` of the *ultra basic smart contract* we just uploaded, this can be done via the [List Products](/vault-core/latest/EN/api/core_api#_core_api_v1_products_ListProductsResponse_ListProducts) endpoint.

## [](#postings "Copy link to heading")Postings

A [Posting](/vault-core/latest/EN/reference/postings) captures a single entry in an account’s Postings ledger, recording either a credit or a debit to the account. Postings are packaged into Posting Instructions which are in turn grouped into Posting Instruction Batches (PIBs).

[The Postings API reference](/vault-core/latest/EN/reference/postings_api) clearly explains postings in Vault.

For this lab, we’ll be using the synchronous Core API [PIB endpoint](/vault-core/latest/EN/api/core_api#_posting_api_v1_CreatePostingInstructionBatchResponse_CreatePostingInstructionBatch) to make postings.

-   `YOUR-AUTH-TOKEN` should be updated to the token generated in the previous step.
    
-   `request_id`: A unique string ID used to ensure the request is idempotent.
    
-   `client_batch_id`: A unique string ID used for correlation of posting instruction batches.
    
-   `posting_instructions`: The posting instructions in this batch
    

### [](#sub_exercise_three "Copy link to heading")Sub-exercise Three

Now we have an account set up let’s try sending some money to it.

In this exercise you’ll need to:

-   Take the below example posting and update the relevant fields.
    
-   Use the above Core API request to send the posting into Vault.
    
-   Check the balances of the Account have been affected via either the Accounts App or on Ops Dash.
    

If you feel stuck, take a look at the [Postings API Tutorial](/vault-core/latest/EN/tutorials/postingsapi)

*Example Posting*