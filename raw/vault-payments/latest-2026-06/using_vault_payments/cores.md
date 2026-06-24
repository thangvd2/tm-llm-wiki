---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/cores"
title: "Cores"
scraped_at: "2026-06-17T15:46:14.024Z"
images: 0
---

# Cores

As a payment processing system, Vault Payments will be integrated with one or more core banking systems (CBS), to make postings and retrieve balances for account holders.

Vault Payments represents each connected CBS as a `Core` resource. Together with `Integration` resources, `Core` resources make it possible to centrally manage the networking configuration needed by Vault Payments to make network calls to one or more CBSs.

## [](#cores_integrations_and_account_links "Copy link to heading")Cores, Integrations and Account Links

Each `Core` resource should map 1-1 with a CBS. In other words, if Vault Payments is integrated with two CBSs, then they should be represented using two different `Core` resources.

Each `Core` should have at least one `CoreVersion`. The most recently created `CoreVersion` will always be the active version.

chat\_bubble

List and Get Core endpoints accept a `fields_to_include` property.

The Active Version of a Core resource can be easily retrieved using `?fields_to_include=INCLUDE_FIELD_ACTIVE_VERSION` when retrieving the resource.

Each `CoreVersion` holds a `postings_integration_id` and a `balance_integration_id`, which must correspond to IDs of [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) resources that hold the networking configuration (for example the protocol, URL and credentials) for the respective postings and balance endpoints on the CBS.

Each [`AccountLink`](/vault-payments/latest/EN/using_vault_payments/routing#account_links) holds a `core_id`, which must correspond to the ID of a `Core` resource in Vault Payments. `AccountLink` also has a `core_account_id`, which uniquely identifies the ID of an account in the corresponding CBS.

## [](#usage_in_instruction_processing "Copy link to heading")Usage in Instruction processing

When an `InstructionFlow` executes a [Rules Step](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#rules_step), it uses data from the Instruction to resolve a Payment Instrument, and select an Account Link. It then sets the following fields on the Instruction at the `instruction.target_account` field:

-   `payment_instrument_id`
    
-   `account_link_id`
    
-   `core_id` - read from the selected Account Link
    
-   `core_account_id` - read from the selected Account Link
    
-   `restrictions` - the results of evaluating [Rules](/vault-payments/latest/EN/using_vault_payments/rules) on the Payment Instrument
    

If later on, the same `InstructionFlow` executes a [Vault Core Postings Step](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#vault_core_postings_step), the Step will use `instruction.target_account.core_id` to derive the networking configuration needed to call the Vault Core Postings API. It does this by fetching the latest `CoreVersion` for the Core ID, then fetching the latest `IntegrationVersion` for the `CoreVersion`'s `postings_integration_id`, then reading the URL and other values from the `IntegrationVersion`.

## [](#updating_cbs_networking_configuration "Copy link to heading")Updating CBS networking configuration

A key benefit of `Core` resources is the ability to update networking configuration for a large number of `AccountLink`s with just a small number of API calls. The following examples illustrate this.

All examples presume the following resources already exist:

-   `Integration` for a postings endpoint on a CBS
    
-   `IntegrationVersion` containing the postings endpoint’s URL
    
-   `Core` corresponding to the same CBS
    
-   `CoreVersion` with its `postings_integration_id` field pointing to the preceding `Integration`
    

### [](#updating_the_url_of_the_postings_endpoint "Copy link to heading")Updating the URL of the postings endpoint

1.  Create an `IntegrationVersion` with the new URL for the same `Integration` resource. The new URL will immediately start to propagate across the system, and be used for new instructions.
    

### [](#bringing_the_balance_endpoint_online "Copy link to heading")Bringing the balance endpoint online

1.  Create an `Integration` for the balance endpoint.
    
2.  Create an `IntegrationVersion` with the endpoint’s networking configuration.
    
3.  Create a new `CoreVersion` with its `balance_integration_id` set to the ID of the `Integration` from step 1. The balance endpoint will immediately start to propagate across the system and become available for new instructions.
    

### [](#taking_the_postings_endpoint_offline "Copy link to heading")Taking the postings endpoint offline

1.  Create a `CoreVersion` with an empty `postings_integration_id` field for the same `Core` resource. Any instruction that attempts to make postings for this CBS will start to fail.
    

### [](#migrating_accounts_to_a_new_cbs "Copy link to heading")Migrating accounts to a new CBS

This example helps illustrate how the `Core` resource can be used in a migration event, but isn’t meant as an exhaustive migration plan, so it doesn’t consider other important issues such as financial consistency and downtime.

For simplicity, we focus on migrating only the postings endpoint, and not the balance endpoint.

All options assume the following resources in Vault Payments for the old CBS:

-   `Integration` and `IntegrationVersion` for the old CBS’s postings endpoint
    
-   `Core` and `CoreVersion` for the old CBS
    
-   `AccountLink`s associated with accounts to be migrated in the old CBS
    
-   `PaymentInstrument`s that select the preceding \`AccountLink\`s
    

They also assume the following resources in the new CBS:

-   New accounts with the exact same IDs as the old accounts in the old CBS
    

Several options are available, each requiring a different number of API calls.

#### [](#option_1_update_existing_core "Copy link to heading")Option 1 - update existing Core

error

This option illustrates how updates to a `CoreVersion` immediately propagate to a large number of `AccountLink`s, but is not recommended. It’s included to facilitate understanding of subsequent options.

1.  Create an `Integration` for the new CBS’s postings endpoint.
    
2.  Create an `IntegrationVersion` with the new postings endpoint’s URL and other networking configuration.
    
3.  Create a `CoreVersion` for the existing `Core`, with its `postings_integration_id` set to the new `Integration` from step 1. The new CBS’s postings endpoint will immediate start to propagate across the system.
    

This option requires the fewest API calls, but isn’t recommended because it would associate a single `Core` to two different CBSs and associate each `AccountLink` to two accounts on different CBSs, through different points in time. While technically allowed, these representations break the conceptual model of the `Core` and `AccountLink` resources, and make them more difficult to reason about.

It would also instantly switch over a large number of `AccountLink`s to point to the new CBS, which could lead to widespread unavailability in case of any integration issues with the new CBS.

#### [](#option_2_update_account_links_to_point_to_new_core "Copy link to heading")Option 2 - update Account Links to point to new Core

error

This option is also not recommended. It’s included to facilitate understanding of option 3.

Same as in option 1:

1.  Create an `Integration` for the new CBS’s postings endpoint.
    
2.  Create an `IntegrationVersion` with the new postings endpoint’s URL and other networking configuration.
    

Now diverge from option 1 by creating a new `Core` instead of updating the existing one:

3.  Create a `Core` to represent the new CBS.
    
4.  Create a `CoreVersion` for the `Core`, with its `postings_integration_id` set to the new `Integration` from step 1.
    
5.  Update every affected `AccountLink` to point to the new `Core` from step 3.
    

This option requires more API calls (at least one per Account Link), but provides more control over the migration. A small number of Account Links can be migrated first to confirm the soundness of the integration with the new CBS, before more are migrated.

However, this option still breaks the conceptual model of the affected `AccountLink` resources, by associating each one with more than one account in different CBSs over time.

#### [](#option_3_create_new_account_links_for_the_new_core_and_update_every_payment_instrument_to_select_them "Copy link to heading")Option 3 - create new Account Links for the new Core and update every Payment Instrument to select them

Same as in option 1:

1.  Create an `Integration` for the new CBS’s postings endpoint.
    
2.  Create an `IntegrationVersion` with the new postings endpoint’s URL and other networking configuration.
    

Same as in option 2:

3.  Create a `Core` to represent the new CBS.
    
4.  Create a `CoreVersion` for the `Core`, with its `postings_integration_id` set to the new `Integration` from step 1.
    

Diverge from option 2 by creating new `AccountLinks` instead of updating existing ones:

5.  Create a new `AccountLink` for every account to be migrated. Each `AccountLink`'s `core_id` should point to the ID of the new `Core` from step 3.
    
6.  Update every affected `PaymentInstrument` to select the new `AccountLink`s from step 5.
    

This option requires the most number of API calls (at least one per Account Link, and one per Payment Instrument), but provides the most control over the migration. Similar to option 2, Payment Instruments can be updated in small batches to de-risk the migration.

It also preserves the conceptual model of both `AccountLink`s (which should map 1-1 to CBS accounts) and \`Core\`s (which should map 1-1 to CBSs).

## [](#retry_behaviour "Copy link to heading")Retry behaviour

Retrying an instruction always uses the same `CoreVersion` as the original request, but uses the latest `IntegrationVersion`s associated with that `CoreVersion`'s `Integration`s.

More concretely, suppose an Instruction Flow has already set a `target_account.core_id` on an Instruction and found a `CoreVersion` for this `Core` when processing the Instruction for the first time, then the Instruction is later retried with the same request ID. Vault Payments will always use the same `CoreVersion` as in the original request in retries, even if a new `CoreVersion` has since been created for the same `Core`.

However, when Vault Payments fetches `IntegrationVersion`s using the `CoreVersion`'s `postings_integration_id` and `balance_integration_id` fields, it will always use the latest `IntegrationVersion`s for those `Integration` IDs, even if these are now different than the ones used for the original request.

The reasons for these behaviours are as follows:

-   If a new `CoreVersion` has been created for the `Core` between two retries, and it has a different `postings_integration_id`, then this `Integration` likely points to a different endpoint on the CBS altogether, so we don’t want the later retry to use this endpoint at all, for fear of modifying data in the CBS in an unintended way.
    
-   On the other hand, suppose there has been a new `IntegrationVersion` for the same postings `Integration` in between the retries, due to a change in the same postings endpoint’s URL. We would not want the retry to use the older URL because that would now fail, so always using the newest `IntegrationVersion` for the postings `Integration` ensures Vault Payments always uses the most up-to-date networking config for CBS endpoints.
    

Provided that each `Integration` resource associated with a `CoreVersion` always represents the same logical endpoint on the CBS across time, that is, it never gets updated with the networking config for a different endpoint altogether, retries should just work as you would expect them to.