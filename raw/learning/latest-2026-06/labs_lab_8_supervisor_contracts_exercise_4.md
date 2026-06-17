---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts/exercise_4"
title: "Exercise 4 - Implement the Supervisor Post-Posting Hook"
scraped_at: "2026-06-17T05:20:05.595Z"
images: 0
---

# Exercise 4 - Implement the Supervisor Post-Posting Hook

In this exercise you will be making further changes to the deposit\_supervisor.py, to override the functionality of the post posting hook for the main\_deposit product.

After receiving funds, the main deposit should redirect the amount to the target account specified in the posting instruction details.

## [](#implementation_steps "Copy link to heading")Implementation Steps

-   Move funds from the main deposit account to the internal account
    
-   Move funds from the internal account to the deposit account
    
-   Publish a notification with the key / value structure:
    
    -   `constants.KEY_NOTIFICATION_MAIN_DEPOSIT` : main\_deposit account\_id
        
    -   `constants.KEY_NOTIFICATION_BASIC_DEPOSIT` : basic\_deposit account\_id
        
    -   `constants.KEY_NOTIFICATION_AMOUNT` : deposit\_amount