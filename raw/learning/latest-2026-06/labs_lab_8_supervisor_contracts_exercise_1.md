---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts/exercise_1"
title: "Exercise 1 - Create the Supervisees for the Product"
scraped_at: "2026-06-17T05:19:59.312Z"
images: 0
---

# Exercise 1 - Create the Supervisees for the Product

## [](#review_the_supervisee_basic_deposit "Copy link to heading")Review the Supervisee Basic Deposit

Within the Lab Starter Pack, start by reviewing the file: `smart_contract_tutorials/library/supervisor_deposit/supervisee_contracts/supervisee_basic_deposit.py`.

This has been based on the file from a previous lab: `smart_contract_tutorials/library/basic_deposit/basic_deposit.py`, with some changes made. Some features used in the basic\_deposit smart contract are not yet supported in Supervisors, in this case expected parameters and account attributes. Therefore we have converted expected parameters to instance parameters, and removed the account attribute.

## [](#create_the_supervisee_main_deposit "Copy link to heading")Create the Supervisee Main Deposit

Next, you will need to make changes to the main deposit smart contract here: `smart_contract_tutorials/library/supervisor_deposit/supervisee_contracts/supervisee_main_deposit.py`. This supervisee contract serves as the main deposit.

You will need to add the collective parameters to this contract, including:

-   Minimum Balance for Higher Rate (Instance)
    
-   Premium Interest Rate (Instance)
    
-   Denomination (Template)
    
-   Internal accounts as needed (Template)
    

Within this contract you will need to add a pre\_posting\_hook to reject all postings. This code will only be used if the supervisee contract is unsupervised, i.e. not associated to a Plan.