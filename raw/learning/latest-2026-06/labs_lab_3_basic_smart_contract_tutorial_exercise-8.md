---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-8"
title: "Exercise 8 - Creating Postings"
scraped_at: "2026-06-17T05:19:09.032Z"
images: 0
---

# Exercise 8 - Creating Postings

## [](#making_postings_in_smart_contracts "Copy link to heading")Making Postings in Smart Contracts

Now that we’ve got our Post-Posting Hook working, we can continue to add functionality to our contract.

We’ll start to form this contract into a deposit account with a generous interest rate, with the downside that each withdrawal will incur a fee. In order to do this, we will need to use the ability to create [Postings](/vault-core/latest/EN/reference/postings_api#what_are_postings), which can originate from the Smart Contract itself.

Said postings will be sent from the customer account to a pre-defined Internal Account, which the bank has ownership over.

### [](#how_to_make_postings "Copy link to heading")How to make Postings

As described in the documentation of the `post_posting_hook` one of the fields in `PostPostingHookResult` is `posting_instructions_directives`, which is an optional list of [PostingInstructionsDirective](https://vault-portal.thoughtmachine.net/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s.

Any `PostingInstructionDirectives` that are returned by the hook will be inserted into the Postings Ledger. We can take advantage of this to charge the required fee.

Currently only Posting Instructions of type [CustomInstruction](https://vault-portal.thoughtmachine.net/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#custominstruction)s are supported as hook directives.

### [](#custominstruction "Copy link to heading")CustomInstruction

The `CustomInstruction` object contains all the fields we need to create our fee and direct it into an Internal Account. The only non-optional field is `postings`, which as the name implies, is a list of [Posting](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#posting) objects.

Each `Posting` represents a financial movement, denoting the amount, the target account ID, the target account address, denomination, asset type, [Phase](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/enums#phase), and whether the posting is a credit or a debit.

Note that the total balance of all postings in the `CustomInstruction` must add up to 0. In other words, the total amount of debits must equal the total amount of credits, so that the overall ledger remains balanced.

## [](#exercise "Copy link to heading")Exercise

### [](#charging_a_fee_on_withdrawals "Copy link to heading")Charging a Fee on Withdrawals

We can now use the `post_posting_hook` to charge a withdrawal fee. This fee can configured as a template parameter, and the fee (made in GBP) will be sent to an internal account with the ID `'Internal Account'`.

In the code, do the following:

-   Define a new parameter with the name `'withdrawal_fee'`. This parameter will be a `TEMPLATE` level parameter with the form of `NumberShape`. There is no need to define the `min_value`, `max_value` or `step`.
    
-   In the `post_posting_hook`, check whether any of the `posting_instructions` in the `PostPostingHookArguments` are of the type `OutboundHardSettlement`. This represents making a withdrawal from the account.
    
-   If it is a withdrawal, charge a fee by creating a posting instruction of the amount denoted by the `withdrawal_fee`, targeting the internal account with ID `'Internal Account'`, returning it in a `PostingInstructionDirective` in the `PostPostingHookResult`.
    

We’ve added a utility function to help determine whether a `PostingInstruction` is a withdrawal - `get_committed_and_pending_out_debit_balance_sum`. This function takes in the results of the `balances()` function on the posting instruction, and returns the sum of debits in the `COMMITTED` and `PENDING_OUT` posting phases as a `Decimal` object. As a withdrawal is debiting the customer account, if the result of this function is greater than 0, we can ensure this posting instruction is a withdrawal.

This contract will be tested by creating accounts with a starting balance of £1000.

-   The first test makes a deposit of £100, and checks that the total balance is £1100, i.e. no fee is charged.
    
-   The second test makes a withdrawal of £100, then a withdrawal of £10. It then checks that the resulting balance is £897, meaning £110 were withdrawn, and a withdrawal fee of £3 has been applied.
    

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_8/test.py`