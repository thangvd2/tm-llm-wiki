---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/vc_end_to_testing"
title: "Vault Core End to End Testing"
scraped_at: "2026-06-17T05:25:05.514Z"
images: 1
---

# Vault Core End to End Testing

## [](#purpose "Copy link to heading")Purpose

End to end testing is vital. It leverages many Vault Core services and creates real Vault Core resources that get committed to the database. It is the most reliable indicator of the extent to which a smart contract works according to the client’s requirements. End to end testing is used in conjunction with the Vault Core simulation endpoint to extend test coverage. The Inception SDK testing framework supports end to end tests, and prepends certain test IDs with random data to minimise clashes between data generated from automated tests, and data created for other purposes.

![Image alt text](_assets/vc_config_img3.BgAx3yTP_Z1IUj2_delivery.webp)

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Low-Level Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/low_level_req)
    
2.  [Smart Contract and Feature Block Technical Design](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_block_technical_design)
    
3.  [Smart Contract Build/Assembly](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_build)
    
4.  [Simulation Testing](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/simulation_testing)
    

## [](#guidance "Copy link to heading")Guidance

End to end tests should be written as a generic tests for multiple ACs combined. Otherwise, tests should cover the behaviour of Vault Core that could encompass multiple behaviours of the product. For testing schedules, testing is more complex and tests run more slowly, so full product lifecycle tests would likely not be feasible, especially for long duration products such as mortgages. Time cursor or accelerated end to end tests are supported too, however they are slow compared to simulation testing.

### [](#acceptance_criteria_coverage "Copy link to heading")Acceptance criteria coverage

For accountability on delivery projects, the Thought Machine best practice is for tests to be annotated with the user story ticket number, and the IDs of the acceptance criteria of the relevant ticket. Tests should be narrowly focused and demonstrate features in isolation as much as possible, with irrelevant features and parameters deactivated or set to values that have minimal effect. This makes the behaviour of each feature easier to measure and makes smart contracts easier to debug. It makes tests less fragile, by reducing the chance that a change to any smart contract feature will break unrelated tests. Test assertions should check balances before and after posting instructions and scheduled events, to prove that they have the right effects at the right times.

### [](#test_scenarios "Copy link to heading")Test Scenarios

Unlike simulation tests, for end to end tests, it is prohibitively inefficient for a test to run a long sequence of schedules to put an account in a certain state, to test a particular condition that could happen during the lifecycle of the product, for example, during account closure. Such a test would be brittle, since any change in the scheduled events hook could break the test. Using a single custom posting instruction batch to set up the test, to adjust the account balances to the levels they would have been after the desired schedules had run, and test the targeted functionality (the \`\`real'' test) from that point, might be more useful.

### [](#structure_of_test_modules "Copy link to heading")Structure of Test Modules

Short-running end to end tests for a given feature may be grouped into a single Python file. End to end tests tend to be the longest-running form of tests, hence these files should still remain fairly small. Long-running tests should usually be separated into individual files so that the test system can run them in parallel and achieve faster execution of the entire test suite.

Engineers should strive to keep test data separate from test procedures, for better readability of test cases and better reusability of procedural code. Engineers may extract repeated or similar code into functions which serve as generic test cases and can be called with arguments for the variables. Done well, this approach maximises test coverage while keeping the number of lines of test code manageable. Engineers should use their judgement to not overdo this approach to ensure that the test suite does not become too difficult to maintain.

To reduce the lines of code, tests may share test data stored in separate files or as global variables. It is vital that no test ever modifies such shared data, because this makes some test cases depend upon other test cases being run in a certain order, which is an anti-pattern. They should be completely independent. Engineers should nevertheless be vigilant during code review, as occasionally an engineer, especially one who is inexperienced or new to Python, might write test cases that modify shared data.

### [](#implementation_approach "Copy link to heading")Implementation Approach

Examples of end to end tests can be found in any folder named e2e, in the Product Library test suite. The SDK package also has documentation about how to write end to end tests - documentation/inception\_test\_framework\_approach.md and documentation/inception\_test\_framework\_e2e.md. The DocsHub page on testing is here.

Here is an example end to end test for a loan account, taken from the Product Library loan.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Vault Core End to End Testing. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.