---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_6"
title: "Exercise 6 - Accelerated testing: Using the inception SDK"
scraped_at: "2026-06-17T15:59:09.215Z"
images: 0
---

# Exercise 6 - Accelerated testing: Using the inception SDK

As with standard E2E tests the Inception SDK also supports accelerated tests.

We have included an example on how you would write an accelerated e2e test in the simple\_loan/test/e2e/ folder.

The test class extends the `AcceleratedEnd2EndTest` class which enables the use of helper functions that create the necessary schedule tags, update these tags to the desired time, and update the Processing Group’s `minimum_observation_timestamp`.

We specify the schedules we need to control in the test using the control\_schedules decorator:

### [](#sub_exercise_1_create_a_backdated_account_and_run_the_first_accrual "Copy link to heading")Sub-exercise 1 - Create a backdated account and run the first accrual

The example test contains code that will

1.  Create a customer
    
2.  Open a backdated account
    
3.  Update the DAILY\_ACCRUAL schedule tag (that is created by the framework) to run the first accrual event
    
4.  Assert that the `ACCRUED_INTEREST` Balance has been updated with the correct amount
    

Update the "first\_name" of the customer to be created with your name

Un-comment the `activation_timestamp` field in the create account request and update its value to 2024/01/01 00:00:00. The field expects a datetime object. Now run the test and observe the events that get logged in the console. This test should succeed.

### [](#sub_exercise_2_run_the_next_2_days_of_interest_accrual_events "Copy link to heading")Sub-exercise 2 - Run the next 2 days of interest accrual events

Add a step to the existing test using the `trigger_and_wait_for_schedule_jobs_until` helper function to run the next 2 days of interest accrual (2024/01/03 00:00:02). In addition, check the account balances to make sure the total interest accrued is now 1.02741 GBP.

### [](#sub_exercise_3_run_the_first_interest_application_event "Copy link to heading")Sub-exercise 3 - Run the first interest application event

Add a step to the test to trigger the first interest application event. Check that the ACCRUED\_INTEREST balance is 0, and that the INTEREST\_DUE balance is 1.03 GBP after the event.

When you run these tests, read through the logged events in the console and ensure you understand what’s happening at each step.