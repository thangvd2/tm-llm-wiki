---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts/exercise_5"
title: "Exercise 5 - Complete the Supervisor Scheduled Event Hook"
scraped_at: "2026-06-17T15:58:56.699Z"
images: 0
---

# Exercise 5 - Complete the Supervisor Scheduled Event Hook

This exercise is to complete the implementation of the supervisor scheduled event hook, for the premium interest rate feature.

Finish the implementation of the scheduled\_event\_hook to override the APPLY\_INTEREST\_EVENT, mainly within the helper function `_handle_apply_interest_schedule()`.

Ensure that:

-   If the account balance is below the minimum threshold, apply only the regular interest.
    
-   If the balance is greater than or equal to the minimum, generate two posting instructions:
    
    -   One for regular interest
        
    -   One for premium interest
        
    

## [](#solutions "Copy link to heading")Solutions

Refer to tests within these folders to determine whether your changes work as expected:

-   `smart_contract_tutorials/library/supervisor_deposit/test/test_supervisee/simulation/…​`
    
-   `smart_contract_tutorials/library/supervisor_deposit/test/test_supervisor/simulation/…​`
    

If you get stuck, you can also refer to the solutions to the smart contracts here:

-   `smart_contract_tutorials/library/supervisor_deposit/test/contract_solutions`