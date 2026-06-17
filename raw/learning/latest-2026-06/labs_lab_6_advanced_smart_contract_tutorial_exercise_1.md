---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_6_advanced_smart_contract_tutorial/exercise_1"
title: "Exercise 1 - Accrue Interest Daily & Apply Monthly"
scraped_at: "2026-06-17T05:19:39.425Z"
images: 0
---

# Exercise 1 - Accrue Interest Daily & Apply Monthly

In this exercise, the requirement is to accrue interest on a daily basis in a different address, and move this amount to the main address monthly. In order to implement this requirement, there are a few things to consider:

1.  The daily interest needs to be calculated each day at midnight, meaning a schedule needs to be created to do this. Therefore both the `activation_hook` and `scheduled_event_hook` functions need to be updated.
    
2.  The interest accrual event must be executed before the interest application, particularly on the application day itself, to ensure the payout includes the full accrued interest for that day. A Schedule Group must be utilized to enforce this execution order of events.
    
3.  Once the daily interest has been calculated, it would need to be stored in a dedicated address away from the `DEFAULT` address or main balance. Therefore, consider creating a new address to store this amount in such as `ACCRUED_INTEREST_PAYABLE`.
    
4.  The monthly interest schedule, APPLY\_INTEREST, must be updated to reflect the new accrual pattern. This involves reversing (clearing) the accrued interest from the ACCRUED\_INTEREST\_PAYABLE address and subsequently transferring the corresponding funds to the DEFAULT address, replacing the previous direct calculation and application method.
    

If there are any issues in developing this feature, the Product Library CASA product contains similar behaviour, so this can be referenced.

Table 1. Example Money Movement     
| Date | CA/DEFAULT | CA/ACCRUED\_INTEREST\_PAYABLE | PAYABLE\_IA | PAID\_IA |
| --- | --- | --- | --- | --- |
| 
01 Jan

 | 

1000

 | 

1.8

 | 

\-1.8

 | 

0

 |
| 

02 Jan

 | 

1000

 | 

3.6

 | 

\-3.6

 | 

0

 |
| 

03 Jan

 | 

1000

 | 

5.4

 | 

\-5.4

 | 

0

 |
| 

…​

 | 

1000

 | 

…​

 | 

…​

 | 

0

 |
| 

31 Jan

 | 

**1056**

 | 

0

 | 

0

 | 

\-56

 |

Once the changes have been done, create Unit and Simulation tests to verify that the Smart Contract behaves as desired. Some points to test include:

1.  Every function should be Unit tested, including any helper methods.
    
2.  Any Simulation test should verify that the interest is calculated correctly for a few days at least. Followed by checking that the amounts in the `ACCRUED_INTEREST_PAYABLE` address and the `DEFAULT` after the APPLY\_INTEREST event are correct.
    
3.  The Simulation test would also ideally run over a few months to verify that the compounding effect is taking place.
    

There are a couple of additional extensions of this exercise that could be done if desired:

1.  **Configurable Interest Application Day**
    
    The interest application day should be a configurable product level parameter, so the bank can choose which day to pay all its Customers.
    
2.  **Configurable Interest Accrual & Application Hour, Minute & Second**
    
    The time the interest is accrued and applied should be configurable product level parameters, so the bank can choose what time to schedule both these jobs. For example, they may wish to accrual at 01:00:00 and apply at 01:05:00 (i.e. 5 minutes later).