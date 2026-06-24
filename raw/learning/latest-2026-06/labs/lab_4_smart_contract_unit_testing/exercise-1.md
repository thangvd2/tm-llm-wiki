---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/exercise-1"
title: "Exercise 1 - Unit Testing Walkthrough"
scraped_at: "2026-06-17T15:58:10.010Z"
images: 0
---

# Exercise 1 - Unit Testing Walkthrough

Open the Lab Starter Pack in your preferred IDE, with `lab-starter-pack` as the root directory.

Before beginning the test writing, it is important to read through the smart contract `basic_deposit.py`, to understand the behaviour of the various hooks that are going to be tested. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

Once you are comfortable with the basic\_deposit code, open `src/smart_contract_tutorials/library/basic_deposit/test/unit/test_basic_deposit.py`. This contains a base version of the unit tests to build on top of for these exercises.

The file `test_basic_deposit.py` has already been set up for you to begin writing individual test cases. We will now walk through this file.

See how the contract we will be testing has been imported:

Default template and expected parameters have been provided, which can be changed for individual test cases:

The `create_mock()` function has been set up to provide a mock vault object within the contract to return expected results such as the fetching of balances and parameter values:

One existing test case has already been written for the `pre_posting_hook()` function:

In this test case, a posting is created and configured for the mock test. Note that the denomination `XYZ`, used in the posting, is not allowed in the contract, and so this posting will be rejected:

A `PrePostingHookArguments` object using the posting with incorrect denomination is created for mocking a pre posting hook execution:

A mock vault object is created to mimic the functionality of the `vault` object, then the pre posting hook is called with our mock vault object and our pre posting hook arguments object:

The response is then compared to an expected response:

Now open a terminal and change your current working directory to the subfolder: `lab-starter-pack/src/smart_contract_tutorials`

Run the test now with: `python3 -m unittest library/basic_deposit/test/unit/test_basic_deposit.py`. This should return an error:

**Take a look at the error message to see the issue and correct the assertion to the string that is used in the smart contract.**

After correcting the expected message and running it again, you should not see any more errors.

You can refer to the Appendix for more information on running tests.

## [](#unit_test_2 "Copy link to heading")Unit Test 2

Now that we have defined a negative test case under `test_pre_posting_hook_rejects_wrong_denomination`, write a positive test case called `test_pre_posting_hook_accepts_posting` which performs and accepts a posting.

Ensure that all tests still pass when you run:

`python -m unittest library/basic_deposit/test/unit/test_basic_deposit.py`