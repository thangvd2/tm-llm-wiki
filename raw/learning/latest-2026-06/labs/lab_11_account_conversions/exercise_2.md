---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_11_account_conversions/exercise_2"
title: "Exercise 2 - Advanced Conversion and Simulation Testing"
scraped_at: "2026-06-17T15:59:21.786Z"
images: 0
---

# Exercise 2 - Advanced Conversion and Simulation Testing

In this exercise, we take on a more advanced conversion challenge. Imagine your bank wants to offer a more premium version of the Vanguard Deposit. Some eligible customers will be able to move onto this, which in addition to the previous smart contract, offers the following differentiating features:

-   A higher interest rate
    
-   A high spending cashback rate
    
-   Charges a monthly maintenance fee of 10 GBP
    
    -   This fee gets reduced to 5 GBP if the customer achieves the following:
        
        -   For 10 consecutive days in a calendar month, their balance ends each day with more than £1,000.
            
        
    

chat\_bubble

The 10 consecutive days balance requirement is implemented using 2 balance trackers: `DAYS_ABOVE_1K_TRACKER` : the current count of consecutive days `DAYS_ABOVE_1K_TRACKER_MAX` : the max count achieved so far in the current month

Note: This is not necessarily the recommended implementation. These tracker balances will become important in our conversion exercise, which is representative of a realistic conversion challenge.

## [](#sub_exercise_1_implement_the_vanguard_premium_conversion_hook "Copy link to heading")Sub-exercise 1 - Implement the Vanguard Premium Conversion Hook

Have a read of the code in vanguard\_premium.py and familiarise yourself with its features.

Implement the `conversion_hook` according to these requirements:

-   The conversion is for moving accounts from the Vanguard Deposit to the Vanguard Premium.
    
-   The `APPLY_INTEREST` schedule should be changed to run at midnight every day.
    
-   The `END_OF_MONTH` schedule needs to be created.
    
-   The `DAYS_ABOVE_1K_` tracker balance addresses need to be updated with the correct amounts for the current month, so the customer can take advantage of this feature immediately after conversion. For example:
    
    -   IF the account is converted on the 15th May.
        
    -   AND the customer had 11 consecutive days of balance > 1K prior to that, from 2nd - 12th May.
        
    -   THEN `DAYS_ABOVE_1K_TRACKER` should be set to `0`.
        
    -   AND `DAYS_ABOVE_1K_TRACKER_MAX` should be set to `11`.
        
    

### [](#hints_for_the_conversion_hook "Copy link to heading")Hints for the Conversion Hook

You will need to make a new balances fetcher that gets the balances for the current month:

You can create a helper function called `*calculate_days_above_1k_conversion*` *that is responsible for creating the postings to update the `DAYS_ABOVE_1K`* tracker balances.

Your `ConversionHookResult` will need to include both `scheduled_events_return_value` and `posting_instructions_directives`.

## [](#sub_exercise_2_implement_a_simulation_test_for_the_conversion "Copy link to heading")Sub-exercise 2 - Implement a Simulation Test for the Conversion

The best way to ensure our new conversion hook works as expected is to write a simulation test.

Open up `test/simulation/test_vanguard_deposit.py`, and write a new simulation test called `test_vanguard_deposit_conversion_to_vanguard_premium`.

The test should perform the following:

-   Open a Vanguard Deposit account on 1st January.
    
-   Fund the Vanguard Deposit account with 2,000 GBP on the same day, and assert on these balances.
    
-   After 11 days, make a large `debit card` spend with a hard settlement of 1,500, to reduce balance below 1K.
    
-   A few hours later, convert the account onto the Vanguard Premium product version, and:
    
    -   Assert on the `DAYS_ABOVE_1K_` tracker balances:
        
        -   DAYS\_ABOVE\_1K\_TRACKER = 11
            
        -   DAYS\_ABOVE\_1K\_TRACKER\_MAX = 0
            
        
    -   At the same time, assert on the default balance
        
    
-   The next day at midnight:
    
    -   Assert the `APPLY_INTEREST` schedule ran and updated the default balance with the interest amount
        
    -   Assert on the `DAYS_ABOVE_1K_` tracker balances:
        
        -   DAYS\_ABOVE\_1K\_TRACKER = 0
            
        -   DAYS\_ABOVE\_1K\_TRACKER\_MAX = 11
            
        
    

The simulation test can be run to with:

### [](#hints_for_the_simulation_test "Copy link to heading")Hints for the Simulation Test

To add an account conversion into a simulation test, you will first need to add a new `ContractConfig` into your test.

`convert_to_contract_config` will need adding to your `run_test_scenario` using the `smart_contracts` arg.

To trigger the conversion, use the `v2_update_account_smart_contract_version_id` helper from the Inception SDK.

Naturally, you may find that your test highlights bugs in your conversion hook code that need fixing. Once the sim test is working, this concludes Exercise 2.

## [](#further_considerations "Copy link to heading")Further Considerations

Conversion code and testing is usually specific for moving accounts from Product Version A to B. It therefore has a shelf life and should be removed from production smart contracts when feasible. If a path from A to B is to be maintained longer term, conditions for validating whether certain conversion hook code should run should be established.

Solutions to this exercise are available in `library/vanguard_deposit/solutions`.