---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_10_advanced_edge_functions/exercise_2_responding_to_triggers"
title: "Lab 10, Exercise 2 - Responding to Triggers"
scraped_at: "2026-06-17T05:20:24.817Z"
images: 0
---

# Lab 10, Exercise 2 - Responding to Triggers

In this exercise, you will create an Edge Function that makes a direct debit repayment from a savings account into a loan account, and an Edge Function Trigger that listens for a notification from a loan account and calls the Edge Function. The notification will include the payment details, the account IDs of the debtor and creditor accounts, and the amount to pay. Review the tutorial [How to create an Edge Function Trigger](/vault-core/latest/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger) for guidance on how to define the structure of the `request` object in the entry-point `handle` function of the Edge Function.

The Simple Loan Smart Contract emits a notification, `ENABLEMENT_LAB_10_LOAN_REPAYMENT_DUE`, when it finishes performing interest application on the repayment day. Use this notification to trigger the Edge Function. Review the Smart Contract to understand the structure of the notification details, as you will need to extract the relevant information in the Edge Function. If you are sharing a Vault Core environment with other learners, you may wish to change the notification name in the Smart Contract and in the Edge Function Trigger so that accounts belonging to other learners do not trigger your edge function, and vice versa.

The Edge Function does not need to check the balance of the savings account, called the "collection" account in the notification, before making the payment, but it should handle any errors including rejections by either account, and fail gracefully.

A basic Edge Function Python file, `edge_functions_tutorials/library/edge_functions/direct_debit_repayment.py`, is provided for you to complete this exercise.

## [](#clu_import "Copy link to heading")CLU Import

When the code is ready, define the CLU resource for the Edge Function like this:

Define the CLU resource for the trigger like this:

Add them to the manifest:

Test your work by performing an interest application on the loan account. Using Postman or something equivalent, call the Edge Function from Exercise 1 which creates the Savings and Loan accounts. When the Loan account runs its interest application process, it will emit the notification that triggers the Edge Function to make the repayment. The endpoint is `{{edge_functions_api_base}}/v1/edge-functions/YOUR_NAME_HERE_lab_10_open_accounts:execute`. Here is an example request body:

After the schedules have run and the interest application is complete, check the balances of both accounts to confirm that the repayment has been made successfully. eg