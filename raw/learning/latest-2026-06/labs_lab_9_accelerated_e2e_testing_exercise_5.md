---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_5"
title: "Exercise 5 - Accelerated testing: Interest application, repayment, and interest accrual"
scraped_at: "2026-06-17T05:20:17.876Z"
images: 0
---

# Exercise 5 - Accelerated testing: Interest application, repayment, and interest accrual

## [](#exercises "Copy link to heading")Exercises

### [](#sub_exercise_1_interest_application "Copy link to heading")Sub-exercise 1 - Interest application

Update the <PLACEHOLDER\_LOAN\_APPLY\_AST\_ID> AST’s `test_pause_at_timestamp` to 2024 January 3rd 00:10:00 to execute the account’s **MONTHLY\_APPLY** schedule. This schedule will apply any accrued interest on the account and move the amount to **INTEREST\_DUE** balance address.

Wait for the Job to publish and execute, this can be checked by querying for Jobs associated with the **MONTHLY\_APPLY** schedule.

This can take up to 30 seconds, depending on the Schedule Poller Interval configured for the Vault environment.

Once the Job has successfully executed, check the balances of the account that it has correctly applied the accrued interest. Note that the Job is able to observe the Posting Instruction instructed from the previous **DAILY\_ACCRUE** Job due to its minimum observation timestamp being set to the completion timestamp of the last Job for the previous schedule in it’s Schedule Group.

### [](#sub_exercise_2_repayment_and_following_interest_accrual "Copy link to heading")Sub-exercise 2 - Repayment and following interest accrual

Send an Inbound Hard Settlement to the account for 91.03 GBP. This posting must be backdated using the `value_timestamp` to 2024 January 3rd 13:00:00.

This will repay the **INTEREST\_DUE** amount, with any excess amount used to pay down the **PRINCIPAL**.

In Vault Core the Schedule Hook’s observation timestamp refers to the point in time from which data can be observed during the execution of a scheduled hook. Only postings inserted before the observation timestamp can be seen by the hook execution.

In order for subsequent Schedule Jobs to be able to observe the Inbound Hard Settlement and corresponding Posting Instructions from the Post-Posting hook, the subsequent Schedule Jobs will need their observation timestamp overridden to after the insertion timestamp of those Posting Instructions.

To do this, update the Processing Group with `minimum_observation_timestamp_options.schedules_observe_balances_at_unpause_time` set to true.

chat\_bubble

If you are not using the DEFAULT Processing Group remember to set the correct Processing Group ID in the request.

Note that the update request only needs to update the Processing Group status to PROCESSING\_GROUP\_STATUS\_ACTIVE, regardless of the current status of the Processing Group.

This updates the Processing Group’s `minimum_observation_timestamp` to the wall-clock time when the PUT request is processed. You can check this on the Processing Group object, or in the response from the PUT.

Now update the <PLACEHOLDER\_LOAN\_ACCRUE\_AST\_ID> AST’s `test_pause_at_timestamp` to 2024 January 4th 00:05:00 to trigger the next **DAILY\_ACCRUE** schedule. Wait for the Job to publish and execute.

Once the Job has successfully executed, check the balances of the account that it has correctly accrued interest on the reduced amount as a result of the Inbound Hard Settlement.

Note that the Job is able to observe the Inbound Hard Settlement and Posting Instructions from its Post-Posting hook due to its observation timestamp being overridden by the value set at the Processing Group level.

## [](#clean_up "Copy link to heading")Clean-up

Send a Custom Instruction to zero out the **PRINCIPAL** and **ACCRUED\_INTEREST** balances of the account used in the exercise, and then close the account.