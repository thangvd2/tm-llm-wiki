---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/appendix"
title: "Appendix"
scraped_at: "2026-06-17T15:58:08.228Z"
images: 0
---

# Appendix

## [](#faq "Copy link to heading")FAQ

## [](#how_to_execute_a_unit_test "Copy link to heading")How to execute a unit test

Within the supplied Lab Starter Pack, the Product library has been set up. To run any of the tests, you would need to run the following command from the directory: `lab-starter-pack/src/smart_contract_tutorials`

### [](#to_run_the_whole_test_file "Copy link to heading")To run the whole test file:

Format:

`python3 -m unittest library/path/to/test_file.py`

Example:

`python3 -m unittest library/basic_deposit/test/unit/test_basic_deposit.py`

Expected result:

chat\_bubble

You would need to run your unit test commands with your current working directory as:

`lab-starter-pack/src/smart_contract_tutorials`

### [](#to_run_a_specific_test "Copy link to heading")To run a specific test

Format:

`python3 -m unittest library/path/to/test_file.py -k test_name`

Example:

`python3 -m unittest library/basic_deposit/test/unit/test_basic_deposit.py -k test_pre_posting_hook_rejects_wrong_denomination`

Expected result:

chat\_bubble

You would need to run your unit test commands with your current working directory as:

`lab-starter-pack/src/smart_contract_tutorials`