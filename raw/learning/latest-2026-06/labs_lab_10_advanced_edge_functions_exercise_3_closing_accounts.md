---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_10_advanced_edge_functions/exercise_3_closing_accounts"
title: "Lab 10, Exercise 3 - Closing Accounts"
scraped_at: "2026-06-17T05:20:26.560Z"
images: 0
---

# Lab 10, Exercise 3 - Closing Accounts

In this exercise, we will create an Edge Function that closes both a Savings account and a Loan account for a customer. The Edge Function will take the account IDs as inputs, and an internal account ID to which any net credit balance on either account can be transferred before closing the accounts. Note that the loan account does not handle any excess repayment funds once the entire principal has been repaid, so the Edge Function should handle any such funds. The Edge Function does not need to handle loan write-off scenarios, but should handle any rejections by the loan account and fail gracefully, for example, if it has not been completely repaid.

A basic Edge Function Python file, `edge_functions_tutorials/library/edge_functions/close_accounts.py`, is provided for you to complete this exercise.

## [](#clu_import "Copy link to heading")CLU Import

When the code is ready, define the CLU resource for the Edge Function like this:

Add it to the manifest:

Run the CLU import command to upload the Edge Function to Vault:

Test all three of the Edge Functions. Call the Edge Function to create accounts (see Exercise 1), remembering to set the schedules to run in two minutes' time. Check the balances of the accounts (see Exercise 2) after the schedules have run to ensure that there has been a transfer from the savings account to the loan account. To enable the loan account to be closed, send an Inbound Hard Settlement from an internal account to pay off the remaining principal, then call the Edge Function to close the accounts (see Exercise 3). An example request is given below.

## [](#lab_clean_up "Copy link to heading")Lab Clean Up

At the end of the lab, it is advisable to perform resource clean up to keep the environment tidy. If the loan is still outstanding, pay off the remaining principal and re-run the Edge Function to close the accounts.