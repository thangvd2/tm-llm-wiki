---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_11_account_conversions/exercise_1"
title: "Exercise 1 - Deploying Smart Contract Changes"
scraped_at: "2026-06-17T15:59:19.917Z"
images: 0
---

# Exercise 1 - Deploying Smart Contract Changes

In previous labs we have explored the various capabilities and syntax of a smart contract in Vault Core, and uploaded to a live environment via Core API and CLU. For this lab, consider a Production environment that has been running a number of accounts on a Deposit smart contract for some time. At some point, a bank will want to introduce new features to this product, or perhaps fix a bug at a particular section of code, converting accounts on product version `1.0.0` to `1.0.1`.

This is where an **Account Conversion** will need to be performed.

The journey of making a conversion like this should entail:

1.  Scope out the requirements and acceptance criteria of the changes that need to be made
    
2.  Make smart contract code changes
    
3.  Ensure comprehensive unit, simulation, and e2e testing is completed
    
4.  Upload the new smart contract code to a Test environment as a new Product Version
    
5.  On the Test env, convert identified accounts from the product version `1.0.0` to `1.0.1`
    
6.  Validate the converted accounts have succeeded and behave as expected
    
7.  Identify a small number of accounts on Production, perform the same conversion and validation
    
8.  Finally, convert the remainder of the target accounts on Production to `1.0.1`
    

Before reading further, it is recommended to review the Vault Portal documentation on account conversions [here](/vault-core/latest/EN/reference/accounts/accounts_version_2#account_conversions).

## [](#sub_exercise_1_upload_vanguard_deposit_version_1_0_0 "Copy link to heading")Sub-exercise 1 - Upload "Vanguard Deposit" Version 1.0.0

Our starting product we will be converting is called the "Vanguard Deposit". This can be found in your lab starter pack here:

smart\_contract\_tutorials/library/vanguard\_deposit/vanguard\_deposit.py

Have a read of the code and familiarise yourself with its features:

-   Denomination check
    
-   Available balance check
    
-   Daily interest application
    
-   Spending cashbacks
    

Firstly, the initial Smart Contract needs to be uploaded to your Vault environment.

This can be done with the CLU binary and the provided CLU resource and manifest YAML files in the Lab starter pack.

Update the placeholder <PLACEHOLDER\_PRODUCT\_ID> in the vanguard\_deposit.resources.yaml to a unique ProductID for this exercise.

chat\_bubble

Use your own name in the IDs for the resources you create e.g "sarah\_smith\_vanguard\_deposit". Doing this will mean:

-   The resources you create in the Vault instance will be unique, avoiding any resource upload conflicts
    
-   We can better track your progress in these exercises by looking at the IDs created on the Vault environment
    

Once this update has been made, run the import command for the CLU binary to upload this product via the manifest `vanguard_deposit.manifest.yaml`.

chat\_bubble

For further guidance on the CLU you can refer back to lab 7.

## [](#sub_exercise_2_create_an_account_and_do_basic_qa "Copy link to heading")Sub-exercise 2 - Create an account and do basic QA

Create a new customer via the Core API, and then create an account on the new product version that was just uploaded. For ease, it is recommended to use the Accounts App.

Make an inbound hard settlement of 1,000 GBP and check this is reflected in the balance.

Now trigger a debit card style payment with this account by making a posting of type outbound hard settlement, of £150, using the following within the instruction details:

chat\_bubble

We are using the same `debit card` transaction type as we have defined for our Spending cashbacks feature. Refer to the parameter value set for `vg_spending_cashback_txn_types` in `vanguard_deposit.resources.yaml`. A qualifying debit card transaction should reward the customer with some cashback, using the same rate as defined in our parameter `vg_spending_cashback_rate`.

Therefore, we should see a cashback posting on the account of £1.50 (1% of the spend amount).

### [](#bug_identified "Copy link to heading")Bug Identified

Oh no! Where is our expected spending cashback? It seems we there’s a bug in our smart contract code. This becomes clear when viewing post postings failures for this account.

chat\_bubble

Use a Core API request like this one to confirm the `KeyError` failure reason:

v1/post-posting-failures?account\_ids=<ACCOUNT\_ID>&page\_size=50

Let’s get this fixed in the next sub-exercise.

## [](#sub_exercise_3_upload_a_fixed_vanguard_deposit_version_1_0_1 "Copy link to heading")Sub-exercise 3 - Upload a Fixed "Vanguard Deposit" Version 1.0.1

A bug was identified in the initial 1.0.0 code of the Vanguard Deposit. Our first conversion journey is to fix the code and move the affected accounts onto the fixed version.

The bug within vanguard\_deposit.py:

This is bad code. Let’s make it safer by changing it to:

Next, find the version line `version = "1.0.0"`.

And increment it like with `version = "1.0.1"`.

chat\_bubble

Consider the concept of [Semantic Versioning](https://semver.org/), and in your general release strategy think about how you will identify and communicate breaking changes, via major, minor and patch version increments.

You will need to add the following basic conversion hook to maintain the existing schedules. Don’t forget to import the new libraries from the contracts\_api.

Run the CLU command again to deploy the fixed code as a new product version.

chat\_bubble

In the terminal, the CLU will include the new product version ID, which will be needed when constructing the conversion request, to replace `<PLACEHOLDER_PRODUCT_VERSION_ID>`.

## [](#sub_exercise_4_convert_the_account_to_the_fixed_product_version "Copy link to heading")Sub-exercise 4 - Convert the Account to the Fixed Product Version

Run the conversion on the Core API. This can be achieved via Postman or a curl request.

chat\_bubble

Take care to replace the following variables:

-   <PLACEHOLDER\_ACCOUNT\_ID> : the account ID that was previously created on version 1.0.0.
    
-   <PLACEHOLDER\_PRODUCT\_VERSION\_ID> : the new product version ID that will have been output from the previous CLU command.
    
-   <PLACEHOLDER\_REQUEST\_ID> : any unique ID for this request
    

View the account in the Accounts App to confirm it’s now been converted to the new version `1.0.1`.

Finally, to complete this exercise, republish the post posting failure on our freshly converted account, and check the spending cashback posting now appears on the account. You can also trigger another `debit card` transaction to double check.

Use a Core API request like this one to republish:

Endpoint: POST /v1/post-posting-failures:republish

This completes Exercise 1.