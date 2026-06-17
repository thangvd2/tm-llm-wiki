---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_10_advanced_edge_functions/exercise_1_opening_accounts"
title: "Lab 10, Exercise 1 - Creating Edge Functions"
scraped_at: "2026-06-17T05:20:23.099Z"
images: 0
---

# Lab 10, Exercise 1 - Creating Edge Functions

We could use sequenced calls to the Vault Core API to create a customer record, a Savings account, and a Loan account; however, the account opening process could be streamlined using an Edge Function. Before completing this exercise you are strongly encouraged to familiarise yourself with Edge Functions by reading [this](/vault-core/latest/EN/reference/edge_functions) documentation on Edge Functions and completing [these](/vault-core/latest/EN/tutorials/edge_functions_tutorials) Edge Function tutorials.

## [](#clu_import "Copy link to heading")CLU Import

For the purposes of this exercise a basic Edge Function Python file is started here: `edge_functions_tutorials/library/edge_functions/open_accounts.py`. In this exercise, you will write Edge Function code to open two accounts. A basic outline is given to get you started. Add additional functions and classes as necessary. Classes should extend the `Model` or `ErrorCodeEnum` classes. The `Request` and `Response` classes are allowed to define any number of arbitrary fields, and these fields can be simple Python types or other `Model` objects.

In order to upload the Edge Function to Vault using the CLU, it is necessary to create another resource.yaml file for the Edge Function resource. Create the YAML file `edge_functions_tutorials/library/edge_functions/open_account.resource.yaml` with a CLU resource type of EDGE\_FUNCTION which looks like this:

Next, update the `edge_fns_labs_manifest.yaml` file with the ID of the Edge Function resource `lab_10_open_accounts` value:

### [](#run_clu_command_and_expected_result "Copy link to heading")Run CLU Command and expected result

Run the CLU `import` command to upload all of the resources defined in the manifest file. An example is given below. Modify `your.environment` to match your Vault Core environment. You will need a JWT; see Lab 7 for details on generating a JWT if you do not already have one.

### [](#execute_the_edge_function_using_an_edge_functions_api_request "Copy link to heading")Execute the Edge Function using an Edge Functions API request

Use the /v1/edge-functions endpoint to execute the Edge Function with a request like the one below. If using a shared environment with other learners, modify the customer name to be something unique. If you want to see the schedules run and cause the loan account to accrue interest and charge a repayment due amount, adjust the `eod_hh_mm_ss` parameter to run two minutes after you call the Edge Function, and set the and `repayment_day_of_month` parameter to today’s day of the month. It may take a minute or so for the schedules to run after the specified time.

The Edge Functions API should return a successful 200 response and the new customer and new Basic Deposit account should be visible in the Accounts App. Record from the response the account IDs for the Savings and Loan accounts.