---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/how_to_guides/how_to_find_a_product_version_from_account"
title: "How to Find What Version of a Smart Contract an Account is Using"
scraped_at: "2026-06-17T05:20:37.279Z"
images: 0
---

# How to Find What Version of a Smart Contract an Account is Using

## [](#introduction "Copy link to heading")Introduction

A common use case when operating a bank, especially at the branch level, is seeing what product version (or Smart Contract) each account uses. When building customer-facing interfaces, it should be clear if an account ID maps to a mortgage, savings account, etc. Knowing the exact product version is also vital, in case parameters or logic changed over time.

However, this isn’t possible in a single step, and any GUI will require some middleware scripting to have this information appear at a button’s click.

## [](#using_the_core_api_to_find_an_account_product_version "Copy link to heading")Using the Core API to Find an Account Product Version

### [](#step_1_getting_the_account_information "Copy link to heading")Step 1: Getting the Account Information

Assuming you know the Account ID of the Account that you’re interested in, the endpoint to use is [Accounts-v2 BatchGet](/vault-core/latest/EN/api/core_api#Accounts-v2-Account). This returns a map of accounts keyed to their account ID.

Importantly, this `account` object contains the `smart_contract_version_id` field, which is the ID of the Smart Contract Version the account is current on. Keep the `smart_contract_version_id` for the next step.

chat\_bubble

You can also find the `pending_smart_contract_version_id` field this way, which is the ID of the Smart Contract Version the account may be converting to. Please find the full details in the link above.

An example of this request may look like the below:

### [](#step_2_getting_the_smart_contract_version_information "Copy link to heading")Step 2: Getting the Smart Contract Version Information

Now we have the `smart_contract_version_id`, the next Core API endpoint to use is [ProductVersion BatchGet](/vault-core/latest/EN/api/core_api#_core_api_v1_products_BatchGetProductVersionsResponse_BatchGetProductVersions), with the ID as a single value array.

This endpoint returns a map of Product Version objects keyed to their Product Version ID. The Product Version object contains the key information that you’d be looking for, including:

-   Display Name
    
-   Display Version Number
    
-   Description and Summary
    
-   Product Parameters
    

And much more.

An example of this request may look like the below:

## [](#example_python_integration "Copy link to heading")Example Python Integration

If you’re looking for inspiration of what a piece of code looks like that would accomplish the above, here’s an example written in Python:

## [](#further_reading "Copy link to heading")Further Reading

For further information on [Smart Contracts](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/overview#what_is_a_smart_contract)

## [](#feedback "Copy link to heading")Feedback

We value your feedback. If you encounter any issues or have suggestions for improvement please [Contact us](mailto:enablement@thoughtmachine.net).