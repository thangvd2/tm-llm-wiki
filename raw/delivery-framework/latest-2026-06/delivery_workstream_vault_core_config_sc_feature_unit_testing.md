---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_unit_testing"
title: "Smart Contract and Feature Unit Testing"
scraped_at: "2026-06-17T05:25:02.321Z"
images: 1
---

# Smart Contract and Feature Unit Testing

## [](#purpose "Copy link to heading")Purpose

Of all the different ways to test smart contracts, unit tests run the fastest and provide the highest level of granularity. Unit testing targets individual functions and uses Python mock objects to act as stubs for Vault Core. As of smart contract language version 4, smart contracts are valid Python modules, and so they can be tested using the standard Python unit testing framework and tools.

![Image alt text](_assets/vc_config_img3.BgAx3yTP_Z1IUj2_delivery.webp)

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Smart Contract Feature Mapping and Analysis](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_mapping)
    
2.  Product Factory Setup
    
3.  [Feature Block Build](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/feature_block_build)
    

## [](#guidance "Copy link to heading")Guidance

Unit testing focuses on each function in the smart contract and its supporting features/modules. Unit tests do not need to target specific acceptance criteria, although there is no harm in annotating tests with their relevant acceptance criteria anyway. Unit tests can most easily be written after the smart contract code covering the JIRA ticket has been written. The Behaviour driven development(BDD) or test driven development(TDD) approach is not well suited to writing unit tests. Test authors should strive to achieve at least 90% and aim for 100% code coverage. Test authors should take a note of boundary conditions within the functions for which they write tests, and aim to test both sides of the boundary, targeting the edge cases. To make unit testing easier, smart contract authors should keep the level of nested if-else statements and loops to a minimum, since every branch requires a test. Pure functions, Python comprehensions, and built-in functions and data structures like map, filter, and set, and other functional programming techniques can help with this.

### [](#feature_unit_testing "Copy link to heading")Feature Unit Testing

From the feature block build activity, we would have the features defined with parameters and necessary helpers. The engineer should write unit tests for every helper function, with required mocks. This ensures that the features can be incorporated easily to the smart contract, as these features don’t have to be retested and mocked in the smart contract unit testing.

### [](#smart_contract_testing "Copy link to heading")Smart Contract Testing

Once the smart contract template is available as part of the smart contract build activity, the engineer should write unit tests for every hook and other helper functions, with mocks for the vault object and every function that gets called in the tested function.

### [](#cicd "Copy link to heading")CI/CD

Unit tests run very fast, so, unlike simulation testing and end to end testing, there is little performance penalty for having a great many tests in each test file. Test files should be split up by functional area for clarity and maintainability.

Thought Machine engineers usually run automated tests with the Thought Machine build system as part of the internal CI/CD pipelines, to make sure there are no regression issues for every commit. Each client should ensure the tests are runnable using the standard Python (version 3.10 or later) unit test commands and are repeatable in the own build system of their choice, to ensure quality and no regression failures.

### [](#implementation_approach "Copy link to heading")Implementation Approach

Examples of unit tests implementation can be found in any folder named unit, in the Product Library test suites. The SDK package also has documentation about how to write unit tests - documentation/inception\_test\_framework\_approach.md and documentation/testing/unit.md. The DocsHub page on testing is here.

Here is a sample unit test for the pre-posting hook of a loan account, to check that postings with certain metadata can bypass pre-posting validation:

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Smart Contract and Feature Unit Testing. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.