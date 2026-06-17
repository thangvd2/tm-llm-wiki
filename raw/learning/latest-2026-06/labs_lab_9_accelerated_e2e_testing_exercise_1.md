---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_1"
title: "Exercise 1 - Manual E2E Testing"
scraped_at: "2026-06-17T05:20:10.875Z"
images: 0
---

# Exercise 1 - Manual E2E Testing

You can use the Core API and streaming topics to carry out manual E2E testing on the Smart Contracts you build.

This lab relies on knowledge obtained from previous labs on the use of our Core APIs.

A sample savings account Smart Contract with accompanying CLU resource and manifest files are provided in the Lab Starter Pack under the directory smart\_contract\_tutorials/library/simple\_savings\_account.

The Smart Contract defines a savings product with these features:

1.  An opening bonus - This is hard coded to 100 (GBP)
    
2.  A denomination check during pre-posting
    

## [](#sub_exercise_1_smart_contract_upload "Copy link to heading")Sub-exercise 1 - Smart Contract upload

This Smart Contract needs to be uploaded to your Vault environment.

This can be done with the CLU binary and the provided CLU resource and manifest YAML files in Lab starter pack.

Update the placeholder <PLACEHOLDER\_PRODUCT\_ID> in the simple\_savings\_account.resources.yaml to a unique ProductID for this exercise.

chat\_bubble

Use your own name in the IDs for the resources you create e.g "sarah\_smith\_savings\_account". Doing this will mean:

-   The resources you create in the Vault instance will be unique, avoiding any resource upload conflicts
    
-   We can better track your progress in these exercises by looking at the IDs created on the Vault environment
    

Once this update has been made, run the import command for the CLU binary to upload the modified Smart Contract and accompanying Configuration Layer resources.

chat\_bubble

The CLU binary is available for Mac OS and Linux architectures. Download and use the one that corresponds to the architecture of the system used to run this exercise. The CLU supports both JWT and Service Account Token authentication. Use the corresponding argument (--jwt or --auth-token) to provide the relevant authentication token.

You should get a SUCCESS response from the CLU binary, along with the Smart Contract Version ID generated for the uploaded ProductVersion similar to the example below. Note this SC Version ID down as you will need it later.

The ID you would need is "57" in this case.

## [](#sub_exercise_2_test_the_account_opening_bonus "Copy link to heading")Sub-exercise 2 - Test the Account opening bonus

Open an account using the Smart Contract you have uploaded and verify that the opening bonus was granted and that a Balance event is generated.

## [](#sub_exercise_3_test_the_denomination_check "Copy link to heading")Sub-exercise 3 - Test the denomination check

Instruct an Inbound Hard Settlement to the account you created in **GBP** and verify the posting was accepted.

Instruct an Inbound Hard Settlement to the account you created in a **different denomination** and verify the posting was rejected.