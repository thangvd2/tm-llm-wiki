---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-2"
title: "Exercise 2 - Minimal Contract With Metadata"
scraped_at: "2026-06-17T15:57:48.824Z"
images: 0
---

# Exercise 2 - Minimal Contract With Metadata

## [](#smart_contract_metadata "Copy link to heading")Smart Contract Metadata

For the file to be a valid Smart Contract, the only requirement is to contain the appropriate metadata.

The metadata provides a description of the Smart Contract. Some of the metadata fields are required in order for a Smart Contract to be valid.

The metadata consists of a [docstring](https://docs.python.org/3/glossary.html#term-docstring) describing the Smart Contract, and a number of fields which define important elements of it.

Required metadata fields are the following:

-   `api`: A [Semantic Version](https://semver.org/) string defining the particular Vault Contracts API version that the product is coded against.
    
-   `version`: The logical Semantic Version of the product; this must be manually incremented before new versions are uploaded into Vault.
    

*Optional* metadata fields include the following. We won’t explain their functionality here, as they will not need to be used yet in the exercise:

-   `tside`
    
-   `expected_parameters`
    
-   `global_parameters`
    
-   `parameters`
    
-   `events_timezone`
    
-   `supported_denominations`
    
-   `event_types`
    
-   `event_types_groups`
    
-   `data_fetchers`
    
-   `notification_types`
    
-   `address_details`
    

## [](#exercise "Copy link to heading")Exercise

### [](#add_the_metadata "Copy link to heading")Add the Metadata

In `smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_2/deposit.py`, we will create two fields (declared like a variable). Create these two fields and set them to the following:

-   `api` equal to `"4.0.0"`
    
-   `version` equal to `"1.0.0"`
    

### [](#check_your_work "Copy link to heading")Check your Work

When ready to check your work, run the associated Python tests using the `unittest` module. For example, when running from the top level of the Lab Starter Pack, you can run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_2/test.py`

Note that this command may need to change depending on your working directory and Python environment.

If you encounter an error, the error message (and/or the returned simulation response) should help you diagnose the issue.

Once all tests have passed, you will be able to move onto the next exercise.