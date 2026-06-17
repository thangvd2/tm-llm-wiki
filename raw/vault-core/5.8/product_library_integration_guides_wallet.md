---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/integration_guides/wallet"
title: "Wallet"
scraped_at: "2026-06-17T05:37:45.391Z"
images: 0
---

# Wallet

A multi-currency wallet account that provides a unified and flexible account for storing, sending, and receiving funds in different currencies.

## [](#refund_integration "Copy link to heading")Refund Integration

### [](#story_1_refund_from_banks_internal_account_to_wallet "Copy link to heading")Story 1 - Refund from Bank’s Internal Account to Wallet

A bank may want to integrate a payment system that handles refunds; these must be received by the wallet product as a posting.

Postings can be generated via the API which is helpful for development and testing purposes, however we recommend integrating via Kafka for production.

The following Kafka topic: `vault.core.postings.requests.v1` could be used for example, for the full list of topics please refer to the Core API documentation. For instructions on creating Kafka producers and subscribing to Kafka topics, please consult the relevant Kafka documentation. The posting request via the API looks like this:

## [](#create_auto_top_up_flagdefinition "Copy link to heading")Create Auto Top-Up FlagDefinition

### [](#story_2_setting_the_flagdefinition_to_enable_the_creation_of_auto_top_up_flags "Copy link to heading")Story 2 - Setting the FlagDefinition to enable the creation of auto top-up flags

In order to use the auto top-up functionality, a FlagDefinition needs to be created within the chosen environment. This is automatically created when deploying the wallet or library manifest via CLU, but can also be created manually. This is the Core API request that can be used to create the flag definition:

Flag visibility could also be set to **FLAG\_VISIBILITY\_CONTRACT** if the flag is required to be visible by both operators and contracts. Now the auto top-up switch workflow can be used successfully.

## [](#blockunblock_transactions "Copy link to heading")Block/Unblock Transactions

### [](#story_3_restrict_postings_from_entering_or_leaving_the_wallet "Copy link to heading")Story 3 - Restrict postings from entering or leaving the wallet

Customers should be able to block their wallet from their customer channel without going through the bank. This is a matter of how banks decide to build this integration. From a Vault perspective this translates to applying restrictions on the wallet account.

Banks can apply the restriction by following these steps:

-   Create the restriction set **definition** for the wallet to block all debits/credits.
    
-   Create a restriction set to apply the restriction when the customer chooses to block the wallet.
    

The Core API is used to create the restriction set definition. This is an example using Curl:

chat\_bubble

Restriction set definition should be set during deployment. It is only needed to be defined once per environment. Also note this restriction type is for the prevention of debits, another restriction is available for credits that should be applied to cover both inbound and outbound postings.

This is an example of the Core API call that can be used to set the restriction for an account:

In addition to the specified fields, banks could choose to specify the effective\_timestamp to mark when they would like this restriction to take place. However, by default, that will be set to the time of the API request (which means restriction will be set immediately).