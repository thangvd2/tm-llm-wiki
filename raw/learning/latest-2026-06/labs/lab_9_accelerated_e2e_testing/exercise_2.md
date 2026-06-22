---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing/exercise_2"
title: "Exercise 2 - E2E Testing via the inception SDK"
scraped_at: "2026-06-17T15:59:02.082Z"
images: 0
---

# Exercise 2 - E2E Testing via the inception SDK

The inception SDK contains an E2E framework that you can use to automate running E2E tests.

The goal of this exercise is to write similar E2E tests to the steps in Exercise 1, however, this time using the E2E framework to create the necessary resources, and listen to the respective Kafka events in order to validate the contract is working as expected.

We will continue using the same simple savings Smart Contract we used in Exercise 1.

## [](#e2e_environment_configuration "Copy link to heading")E2E Environment Configuration

Ensure you have followed the steps in the lab\_starter\_pack README and have specified the environment you will be using by updating the environment\_config.

## [](#sub_exercise_1_run_an_e2e_test "Copy link to heading")Sub-exercise 1 - Run an E2E test

We have included an example on how you would write an e2e test in the simple\_savings\_account/test/e2e folder.

The test class extends the `End2Endtest` class defined in the framework’s libraries. This class is configured to interact with the Vault Environment you have updated in the environment\_config.

The test also makes use of helper functions defined in the framework to create and check the required Vault resources. This includes a mix of functions that call the Core API, and others that listen to specific Kafka topics to read any emitted events.

Run this test using the following command

## [](#sub_exercise_2_update_the_test "Copy link to heading")Sub-exercise 2 - Update the test

Using the existing code to help you, add the following steps to the test:

-   Instruct a posting with a different denomination
    
-   Check that the posting is rejected
    
-   Check that that the account balance has not changed
    

Run the test after you have made the updates and make sure it passes.