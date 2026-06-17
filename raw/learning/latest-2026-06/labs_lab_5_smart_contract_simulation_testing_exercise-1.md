---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_5_smart_contract_simulation_testing/exercise-1"
title: "Exercise 1 - Simulation Testing Walkthrough"
scraped_at: "2026-06-17T05:19:28.746Z"
images: 0
---

# Exercise 1 - Simulation Testing Walkthrough

Open the Lab Starter Pack in your preferred IDE, with `lab-starter-pack` as the root directory.

Before beginning the test writing, it is important to read through the smart contract `basic_deposit.py`, to understand the behaviour of the various hooks that are going to be tested. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

Once you are comfortable with the basic\_deposit code, open `src/smart_contract_tutorials/library/basic_deposit/test/simulation/test_basic_deposit.py`. This contains a base version of the simulation tests to build on top of for these exercises.

The file `test_basic_deposit.py` has already been set up for you to begin writing individual test cases. We will now walk through important aspects of this file.

The contract we will be testing has been specified by relative path.

This internal accounts dictionary defines the internal accounts we want to set up in the call to the simulation API.

Default template and expected parameter values have been provided, but can be changed for individual test cases.

The test class `DepositSimulationTest` inherits from the `SimulationTestCase` base class (from the Inception SDK), which has already implemented most of the functionality we need to build automated test cases that wrap a call to the simulation API. We define an additional helper function `get_simulation_test_scenario()` to help construct a `SimulationTestScenario` object.

The `SimulationTestScenario` object will contain everything we need to make a call to the Simulation API, such as smart contracts, internal accounts, the start/end times, as well as actions to take such as making postings. We will construct this object and then pass it to a function `run_test_scenario()` that is defined on the base class in each individual test case.

One existing test case has already been written for the `pre_posting_hook`: `test_reject_wrong_denomination`. The test defines certain constants such as the start and end date.

Then we define two subtests. The first sends postings in an allowed denomination, and checks that balances have indeed increased, and the feature has not falsely blocked the posting.

The second subtest sends postings in a disallowed denomination, and checks that the balances have not increased. It also checks for a posting rejection that happened at the time that the posting was made, and checks that the rejection reason is accurate.

The subtests are passed to the `get_simulation_test_scenario()` method, which returns a test scenario which `run_test_scenario` runs.

Now open a terminal and change your current working directory to the subfolder, also ensuring you have activated your Python venv: `lab-starter-pack/src/smart_contract_tutorials`

Run the test now with: `python3 -m unittest library/basic_deposit/test/simulation/test_basic_deposit.py`.

Run the following command to observe the an assertion error:

## [](#troubleshooting "Copy link to heading")Troubleshooting

Now let’s take some time to troubleshoot the simulation tests.

1.  First, add the following code snippet after all the python imports and variables that are defined.
    
2.  Adjust the call to `get_simulation_test_scenario()` to add in the argument `debug=True`. This will print out the raw simulation results.
    
3.  Run the test again and you should read logs from `/tmp/log.json`. For example:
    

See if you can find the difference between the expected assertion string and the one shown in the logs. Correct the assertion and run the test again.

You should see no more issues. Clean up the debug argument by reverting to `debug=False`, and we are ready to write more tests for newer features.