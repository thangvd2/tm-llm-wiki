---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_1_connecting_to_vault_restful_API_calls/exercise-2"
title: "Exercise 2 - Customising Accounts"
scraped_at: "2026-06-17T05:18:36.508Z"
images: 0
---

# Exercise 2 - Customising Accounts

## [](#overview "Copy link to heading")Overview

Welcome to this Lab session covering how we can further customise Accounts by altering contract parameters, adding restrictions, and flagging accounts.

## [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Sandbox for training purposes, feel free to reach out to your Partner Manager, Client Success Manager or Account Director if you’d like access to this resource.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

This lab makes use of a test contract that we will proceed to flag, restrict and alter the parameters for and an Internal Account to make postings from. We expect the below resources to already be available within the sandbox environment, however, if not available run the below requests.

chat\_bubble

If you try to run any of the below setup requests, and the respective resource already exists in the environment, you will get an error explaining this. Do not retry the request if you get this error, instead proceed with the exercises.

**Setup: Create lab posting fee parameter**

Create the posting fee parameter by running the below command:

**Setup: Contract Upload**

Upload the test contract by running the below command:

**Setup: Create Internal Account**

**Setup: Create Flag Definition**

Create a flag definition with the id 'DORMANCY\_FLAG' using the following command:

## [](#smart_contract_parameters "Copy link to heading")Smart Contract Parameters

Parameters are a core concept in Vault. They allow for financial products to be configured on a per product or per account basis. The Contract uploaded as part of the setup of this Lab has some functionality around it that charges a fee every time a posting is made to or from the account (pretty unfair right!). An `ExpectedParameter` named `lab_posting_fee` controls the amount that will be charged.

In the next exercise we will see how we can alter the behaviour of the account using this parameter, but in the meantime let’s set up a customer with an account backed by this smart contract.

Start by creating a Customer and saving the `customer_id`. Feel free to use a customer you have already created.

If you’ve forgotten how to create a customer, then please refer to Lab one: Using the Core API.

### [](#creating_an_account "Copy link to heading")Creating an Account

When creating an account we will need to provide the id of the specific product-version we created when we uploaded the Smart Contract. You can get this id using the Core API. Use the below cURL request to retrieve all the product-versions for the `lab3contract`.

The Smart Contract we are using uses an `ExpectedParameter`. Parameter values for expected parameters can be set at either the global level or the account level. For this exercise we will be setting this at the account level, and so when we create the account we will provide the value of the parameter.

Use the below cURL request to create an account with the `<CUSTOMER-ID>` set to the ID of your customer.

The `parameter_values` field within `create_options` is where we define the values for any parameters in the contract. There is just one in this case - `lab_posting_fee` - which we’ve set to equal ten.

You’ll get something like the following returned. Save the ACCOUNT-ID, you’ll need it later.

### [](#triggering_the_fee "Copy link to heading")Triggering the Fee

The fee is applied during the Post-Posting hook, which is triggered after a posting is committed to the ledger. We can alter the fee amount by altering the parameter value.

### [](#sub_exercise_one "Copy link to heading")Sub-exercise One

This exercise covers changing a parameter, and seeing how it affects the account we opened earlier.

-   Use the below posting to incur a fee on the account.
    

-   Use the Accounts App or Ops Dash to view the posting and the fee that was generated after the posting was accepted
    
-   Update the `lab_posting_fee` parameter using the [ParameterValue Update Endpoint](/vault-core/latest/EN/api/core_api#ParameterValue). Check your account through either the Accounts App, or the Operations Dashboard to see the Parameter Value updated.
    
-   Submit a new posting and check the value of the second fee is charged on the account.
    

Once done you should see four postings, two for 10GBP one for 1GBP and one for whatever amount the parameter was updated to.

## [](#restrictions "Copy link to heading")Restrictions

Another way we can alter the way a contract behaves is by adding restrictions to the account. To start a restriction definition needs to be created. A Restriction set definition version defines the restriction type and level for that restriction. Restrictions can take various forms, including prevention of credits/debits and prevention of closure. A restriction can be applied to a customer, account or payment device.

### [](#creating_a_restriction_definition "Copy link to heading")Creating a Restriction Definition

Use the below cURL to create a account closure restriction definition.

### [](#sub_exercise_two "Copy link to heading")Sub-exercise Two

## [](#flags "Copy link to heading")Flags

Flags are binary markers, used to store information about one or more accounts or customers. Smart Contracts can optionally use Flags to change the logic that is applied to accounts or customers.

In the contract uploaded in the setup of this lab there is a section that blocks any postings to and from the account called `DORMANCY_FLAG`.

### [](#applying_a_flag_to_an_account "Copy link to heading")Applying a Flag to an account

Like restrictions, before applying the flag we first need to set up a flag definition. We have created a flag definition with the id 'DORMANCY\_FLAG' that you will use in the next step. You can find more information on flag definitions and how to create them [here](/vault-core/latest/EN/reference/flags).

### [](#sub_exercise_three "Copy link to heading")Sub-exercise Three

In this exercise we will apply the flag defined above to our account.

-   Use the below request to apply the flag to your account.
    

-   Now try to send a posting to the account as per Exercise 1.
    
-   Check the Accounts app or the Operations Dash, you should see that the posting is rejected.