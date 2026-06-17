---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/integration_guides/line_of_credit"
title: "Line of Credit"
scraped_at: "2026-06-17T05:06:21.023Z"
images: 0
---

# Line of Credit

The Line of Credit product is a type of loan that a bank provides to a customer as a single amount of pre-agreed available credit.

## [](#orchestration_overview "Copy link to heading")Orchestration Overview

The Line of Credit product is supported by a Supervisor, where if a Line of Credit account is opened the following sequence of calls are required to be made by an orchestration service:

1.  Create a Plan using the Line of Credit Supervisor Contract
    
2.  Create a Line of Credit Account
    
3.  Associating the Plan (1) to the Line of Credit Account (2)
    

When a Line of Credit account is opened, a one or more drawdowns can be created against the Line of Credit, where the following sequence of calls are required to be made for each drawdown:

1.  Create a Posting for the drawdown amount against the Line of Credit Account
    
2.  If the Posting is rejected, then do not continue. Otherwise, continue if the Posting is accepted
    
    chat\_bubble
    
    Note that this step is used for validation purposes to ensure that the new drawdown amount does not exceed the total line of credit limit.
    
3.  Create a Loan Account
    
4.  Associate the Plan to the newly created Loan Account
    

The following sections provide more detailed information on the orchestration process.

## [](#opening_the_line_of_credit "Copy link to heading")Opening the Line of Credit

### [](#user_story_1_creating_the_line_of_credit_account_and_the_plan "Copy link to heading")User story 1 - Creating the Line of Credit Account and the Plan

When a customer opens a Line of Credit product, the Bank will need to open a Line of Credit account for the customer and create a plan to associate the Line of Credit to a Supervisor.

Example request - creating a Plan:

Example request - opening a line of credit account:

When the Line of Credit account has been successfully created and the activation update has completed, the account will need to be associated to the plan.

Example request - associating the line of credit account to a Plan:

## [](#opening_a_loan "Copy link to heading")Opening a Loan

### [](#user_story_2_creating_a_drawdown_against_the_line_of_credit "Copy link to heading")User story 2 - Creating a Drawdown against the Line of Credit

A customer should be able to open a new loan against their line of credit given the drawdown is accepted under the credit limit and minimum/maximum loan amounts. There is an example workflow for creating a drawdown called `LINE_OF_CREDIT_CREATE_DRAWDOWN` supplied, this however is only for illustrative purposes. The following steps should be taken in order to create a drawdown against the Line of Credit.

Example request - creating an Outbound Hard Settlement posting against the Line of Credit account:

If this posting is accepted against the line of credit drawdown criteria, then a call to the Core API Accounts service can be made to open a new loan account.

Example request - creating a loan account:

Once this account has been created successfully and the corresponding `activation_update` is completed, the new loan must be associated with the Supervisor plan. The following call to the Core API can achieve this.

Example request - associating a loan to a Plan:

## [](#closing_a_loan "Copy link to heading")Closing a Loan

### [](#user_story_3_closing_the_loans_under_a_line_of_credit_account "Copy link to heading")User story 3 - Closing the loans under a Line of Credit account

When the customer has fully paid back a single or multiple loans, a `LOC_LOANS_PAID_OFF` notification will be emitted detailing which loan account id’s have been paid off. The bank can then process this notification and trigger a loan closure process that will call the following Core APIs.

Example response - showing the `LOC_LOANS_PAID_OFF` that is streamed out:

First, for a single loan update the status to pending closure.

Example request - changing the account status to pending closure:

Once the closure update has been completed, update the same loan’s status to closed.

Example request - changing the account status to closed:

Finally disassociate the loan from the plan.

Example request - dissasociating the account from the Plan:

All 3 steps prior to this should be completed **per loan** before moving onto the next loan.

Create an Inbound Hard Settlement posting for the equivalent original principal amounts.

chat\_bubble

`force_override` must be defined in the `instruction_details`.

Example request - creating an Inbound Hard Settlement posting for the equivalent original principal amounts:

## [](#closing_the_line_of_credit "Copy link to heading")Closing the Line of Credit

### [](#user_story_4_closing_the_line_of_credit_and_dissociating_it_from_the_plan "Copy link to heading")User story 4 - Closing the Line of Credit and dissociating it from the plan

Once a customer has repaid all loans and is ready to close their Line of Credit, first the line of credit account must be closed.

Example request - changing the account status to pending closure:

Example request - changing the account status to closed:

After the account has been successfully closed, the bank can dissociate this account from the plan.

Example request - dissasociating an account from a Plan:

Example request - closing a Plan: