---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/migrating_to_vault"
title: "Migrating data to Vault"
scraped_at: "2026-06-17T04:59:44.576Z"
images: 0
---

# Migrating data to Vault

error

Do not use the Posting Migration API unless specifically directed by a Thought Machine representative. It is known to be unreliable under specific usage patterns.

warning

The guidance within this section of the Vault Portal explains the functional behaviour of Vault Core’s migration APIs (inc. message lifecycle, events and topics, error handling, etc.).

Other content is available in the wider Vault Portal covering other migration-related topics, which you should read in conjunction with the content here.

API specifications (inc. example messages / requests):

-   [Data Loader API specifications](/vault-core/5-9/EN/api/data_loader_api)
    
-   [BAU Posting API specifications](/vault-core/5-9/EN/api/postings_api#asynchronous_postings_api)
    
-   [Posting Migration API specifications](/vault-core/5-9/EN/api/postings_api#posting_migration_api)
    

How to deliver a successful migration programme (part of the Vault Core Delivery Framework), including migration strategies.

-   [Vault Core Delivery Framework - Migration Workstream](/delivery-framework/latest/EN/delivery_workstream/migration)
    

This is the landing page for Vault Core migration APIs and should be the starting point for anyone looking to understand how to execute migrations from legacy cores to Vault Core.

Its child pages (see navigation pane on the left) are the master of the functional behaviour of the two Vault Core migration APIs - the Data Loader API, the BAU Posting API, and the Posting Migration API. We recommend reading all sections, top to bottom, for a full understanding of the APIs.

As mentioned in the callout above, this guide is not the master of information about how using the migration APIs in active delivery (including migration strategies), instead it is mastered within the [Vault Core Delivery Framework - Migration Workstream](/delivery-framework/latest/EN/delivery_workstream/migration), or available to discuss with our migration SMEs.

## [](#key_changes_to_migration_apis_documentation_in_vault_core_version_5_8 "Copy link to heading")Key changes to 'Migration APIs' documentation in Vault Core version 5.8

No changes to migration documentation directly in response to product improvements in v5.8. The [downloadable information](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault#downloadable_information) below (the Vault Core Migrations Data Dictionary and Tech Deck) have both been updated to support v5.8.

## [](#downloadable_information "Copy link to heading")Downloadable information

download

**Vault Core Migrations - Data Dictionary**

Spreadsheet containing field-level detail for the migration APIs, necessary to support migration data mapping, including but not limited to; field descriptions, formats, validation rules, and differences to Business as Usual (BAU) APIs.

You can download a copy of the Vault Core Migrations - Data Dictionary for this release here:

Download download

download

**Vault Core Migrations - Tech Deck**

Presentation containing summary slides introducing key migration concepts across APIs, strategies, and delivery support approaches. Consider these easily digestible introductions to these topics which are expanded upon further within the content nested under this migration landing page, which may have been presented by Thought Machine during migration workshops.

You can download a copy of the Vault Core Migrations - Tech Deck for this release here:

Download download

## [](#migrating_data_to_vault_core "Copy link to heading")Migrating data to Vault Core

[

flag Migration API overview

Introduction to, installation of, and key 'gotchas' for the migration APIs



](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault/intro)

[

description Migrating using the Data Loader API

Detailed guidance for how to use the Data Loader API



](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault/migrating_using_the_data_loader_api)

[

request\_quote Migrating using the Posting APIs

Detailed guidance for how to use the BAU & Migration Posting APIs



](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault/migrating_using_the_postings_migration_api)