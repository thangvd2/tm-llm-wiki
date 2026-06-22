---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts/exercise_3"
title: "Exercise 3 - Implement the Supervisor Pre-Posting Hook"
scraped_at: "2026-06-17T15:58:53.137Z"
images: 0
---

# Exercise 3 - Implement the Supervisor Pre-Posting Hook

In this exercise you will be making further changes to the deposit\_supervisor.py, to override the functionality of the pre posting hook.

## [](#implementation_steps "Copy link to heading")Implementation Steps

-   Ensure that there is at least one main deposit account present, and reject the posting if there is not.
    
-   Check the posting instructions to ensure there’s exactly one posting instruction to the main\_deposit account only.
    
-   Within the instruction details of the posting, the hook should expect a key matching a constant variable `KEY_TARGET_BASIC_DEPOSIT_ACCOUNT_ID`. This target account ID must be of a basic\_deposit account associated with the supervisor.