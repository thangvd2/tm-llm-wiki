---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_3"
title: "Exercise 3 - Accelerated testing: Smart Contract setup and Account opening"
scraped_at: "2026-06-17T05:20:14.364Z"
images: 0
---

# Exercise 3 - Accelerated testing: Smart Contract setup and Account opening

## [](#goal "Copy link to heading")Goal

The goal of exercise 3, 4 and 5 is to run an Accelerated manual End to End test by calling the Core API endpoints directly to manipulate Schedules of an account. The Accelerated End to End test will run the following simple test scenario:

1.  Open an account on 2024 January 1st 00:00
    
2.  Run the account’s daily interest accrual schedules over three days until 2024 January 3rd
    
3.  Run the account’s monthly interest application schedule on 2024 January 3rd
    
4.  Make a repayment Posting Instruction against the account for 2024 January 3rd
    
5.  Run the account’s daily interest schedule for one more day on 2024 January 4th
    

## [](#exercise "Copy link to heading")Exercise

### [](#sub_exercise_1_smart_contract_setup "Copy link to heading")Sub-exercise 1 - Smart Contract setup

A sample loan Smart Contract with accompanying CLU resource and manifest files are provided in the Lab Starter Pack under the directory `library/simple_loan`.

The Smart Contract defines two events:

1.  A daily interest accrual (**DAILY\_ACCRUE**) schedule
    
2.  A monthly interest application (**MONTHLY\_APPLY**) schedule.
    

These currently have a placeholder `AccountScheduleTag` defined. Update these with a unique ID for your exercise and note this down (hereafter referred to as <PLACEHOLDER\_LOAN\_ACCRUE\_AST\_ID>, and <PLACEHOLDER\_LOAN\_APPLY\_AST\_ID>). These Ids should be unique so that any manipulation on the tag does not unintentionally affect other accounts, and should be unique for each event so you have granular control of what is accelerated.

For simplicity of this lab, the Smart Contract hard codes many aspects of the loan that would ordinarily be parameterised:

-   Term is set to 12 (months)
    
-   Due day is set to 3 (day of month)
    
-   Interest rate is set to 12.5%
    
-   Principal is set to 1,000 (GBP)
    

In the Smart Contract, define a Schedule Group which contains the **DAILY\_ACCRUE** and **MONTHLY\_APPLY** schedules, so that the **DAILY\_ACCRUE** schedule runs before the **MONTHLY\_APPLY** schedule.

### [](#sub_exercise_2_smart_contract_upload "Copy link to heading")Sub-exercise 2 - Smart Contract upload

Once this change has been made, this Smart Contract needs to be uploaded to your Vault environment.

This can be done with the CLU binary and the provided CLU resource and manifest YAML files in Lab starter pack.

Update the placeholder <PLACEHOLDER\_PRODUCT\_ID> in the simple\_loan.resources.yaml to a unique Product ID for this exercise, and update the placeholders <PLACEHOLDER\_LOAN\_ACCRUE\_AST\_ID>, and <PLACEHOLDER\_LOAN\_APPLY\_AST\_ID> to the unique IDs you created in Sub-exercise 1.

Once these updates have been made, run the import command for the CLU binary to upload the modified Smart Contract and accompanying Configuration Layer resources.

chat\_bubble

The CLU binary is available for Mac OS and Linux architectures. Download and use the one that corresponds to the architecture of the system used to run this exercise. The CLU supports both JWT and Service Account Token authentication. Use the corresponding argument (--jwt or --auth-token) to provide the relevant authentication token.

You should get a SUCCESS response from the CLU binary, along with the Smart Contract Version ID generated for the uploaded ProductVersion. Note this SC Version ID down as you will need it later.

### [](#sub_exercise_3_test_setup "Copy link to heading")Sub-exercise 3 - Test setup

One of the configuration layer resources uploaded in Sub-exercise 2 was the Account Schedule Tag. This will be used to manipulate the schedules of the Account by updating its `test_pause_at_timestamp`. However, this field is currently not set on the AccountScheduleTag. This can be checked by querying for the AST via the Core API.

You can find more information in our development & testing guideline for [Setting up accounts for accelerated testing](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/development_and_testing?resultIndex=1&query=test_pause_at_timestamp#1_set_up_accounts_for_accelerated_testing).

Using the PUT method for the /v1/account-schedule-tags endpoint, set the below for both tags:

-   `schedule_status_override` field to **ACCOUNT\_SCHEDULE\_TAG\_SCHEDULE\_STATUS\_OVERRIDE\_TO\_ENABLED**
    
-   `test_pause_at_timestamp` to before the backdated account opening time to be used in the test (before 2024 January 1st 00:00)
    
-   `schedule_status_override_start_timestamp` also to to before the backdated account opening time to be used in the test (before 2024 January 1st 00:00)
    
-   `schedule_status_override_end_timestamp` to a date in the future
    

Confirm the response from the PUT request is a 200 OK and the body shows the values you have set in the request. This will be used in the next exercise.