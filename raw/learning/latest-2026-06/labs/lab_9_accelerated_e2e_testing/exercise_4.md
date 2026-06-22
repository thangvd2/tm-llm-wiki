---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_4"
title: "Exercise 4 - Accelerated testing: Account opening and first interest accrual"
scraped_at: "2026-06-17T15:59:05.658Z"
images: 0
---

# Exercise 4 - Accelerated testing: Account opening and first interest accrual

## [](#exercises "Copy link to heading")Exercises

### [](#sub_exercise_1_account_opening "Copy link to heading")Sub-exercise 1 - Account opening

Open an Account with the simple\_loan Product Version uploaded in Exercise 3, with a backdated opening time to 2024 January 1 00:00:00, using the v2/accounts endpoint. This will backdate the account’s Activation Hook, thus creating Schedules with a start time of 2024 January 1 as well.

**Example Create account request**

As we had set the `test_pause_at_timestamp` to before the backdated account opening time in the previous exercise, these Schedules won’t execute. This can be checked by querying for the Schedules associated with the account. While doing so, note down the `next_run_timestamp` for the **DAILY\_ACCRUE** schedule.

You can also use Vault Jobs to view these schedules:

1.  Go to your environment’s Vault Jobs App
    
    -   URL: [https://coreapps.partner-enablement-bootcamp.dh-production.tmachine.io/jobs](https://coreapps.partner-enablement-bootcamp.dh-production.tmachine.io/jobs)
        
    -   Note: Links to `partner-enablement-bootcamp` are only accessible to participants of an active Bootcamp. Other users may need to replace these URLs with their own Vault Core environment.
        
    
2.  Update filters:
    
    -   Remove "Status: NOT Pending"
        
    -   Add Job type: "Scheduler"
        
    -   with METADATA, Key = smart\_contract\_version\_id, Value = <Product version printed from the CLU upload>
        
    

The sample loan Smart Contract also disburses its principal in the Activation Hook. Query for this Posting Instruction via the Core API and note its backdated value\_timestamp and current insertion\_timestamp. You are also able to see this disbursement by looking up the account on either the Accounts App, Operations Dashboard or Vault Lookup.

### [](#sub_exercise_2_first_interest_accrual "Copy link to heading")Sub-exercise 2 - First interest accrual

Update the AST’s `test_pause_at_timestamp` to be just after the `next_run_timestamp` of the **DAILY\_ACCRUE** schedule from sub-exercise 1. This schedule accrues interest on the amount in the **PRINCIPAL** balance address.

Wait for the Job to publish and execute. You can monitor the jobs progress using Vault jobs, but job status can also be queried via the Core API, by querying for Jobs associated with the **DAILY\_ACCRUE** schedule. This can take up to 30 seconds, depending on the Schedule Poller Interval configured for the Vault environment.

Once the Job has successfully executed, check the balances of the account that it has correctly accrued interest on the principal amount disbursed on account activation.

Remember the observation timestamp for hook execution determines what postings can be seen. For the scheduled event Hook it is calculated as the latest of:

-   Scheduled event effective datetime
    
-   Previous Schedule job real-world execution time
    
-   Previous Schedule group job real-world execution time
    
-   Processing group minimum observation timestamp
    
-   Account activation’s "real world" time
    

In this scenario the observation timestamp is the Account Activation’s "real world" time as this is later than:

-   the scheduled event effective datetime (2024-01-01T00:00:01)
    
-   previous Schedule job real-world execution time (null as this is the first accrual)
    
-   previous Schedule group job real-world execution time (null as this is the first accrual)
    
-   and the Processing Group minimum observation timestamp (null as it has not yet been set)
    

Because of this, the Job is able to observe the Posting Instruction instructed from the activation hook as it was inserted before the observation time (the completion of the activation hook).

Check the Job that just ran and note its `schedule_timestamp` against its `completed_timestamp`. You can also query the **DAILY\_ACCRUE** schedule to see its updated `next_run_timestamp`.

### [](#sub_exercise_3_next_two_interest_accruals "Copy link to heading")Sub-exercise 3 - Next two interest accruals

Now update the AST’s `test_pause_at_timestamp` to 2024 January 3rd 00:05:00 so that the **DAILY\_ACCRUE** schedule runs twice. As it’s the same schedule, the Jobs will run sequentially.

Wait for the Job to publish and execute, this can be checked by querying for Jobs associated with the **DAILY\_ACCRUE** schedule.

Check the balances of the account that it has correctly accrued interest for those two days.