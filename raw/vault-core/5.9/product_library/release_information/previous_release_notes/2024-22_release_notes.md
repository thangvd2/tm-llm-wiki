---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/release_information/previous_release_notes/2024-22_release_notes"
title: "2024-22 Release Notes"
scraped_at: "2026-06-22T19:20:09.538Z"
images: 0
---

# 2024-22 Release Notes

These release notes describe the features and defect fixes delivered as part of the 2024-22 Product Library Release and provide technical guidance on using it. They are intended for all clients of Thought Machine who consume the Product Library and are interested in taking this release.

The release notes reflect the components included in the Product Library Release 2024-22. Thought Machine has designed and built the included Products to demonstrate configurability of financial products and processes within Vault Core. The Products are intended solely as aids to accelerate understanding and development of Smart Contracts, Workflows and our Platform. Use is at your sole discretion and risk.

Additional releases will reflect enhancements and improvements to the key functionality of each of these Products, and are subject to continuous change and enhancements.

chat\_bubble

This release was patched on 2024-07-19.

## [](#summary "Copy link to heading")Summary

Thought Machine has designed and tested this release against Vault Core 5.3 and Configuration Layer Utility 5.1.0; elements of the library may not work with other versions.

### [](#products "Copy link to heading")Products

The following table lists the core financial products delivered in this release. The content of a Product includes Smart Contract(s) and specific Workflows, Account Schedule Tags, Flag Definitions, and associated test files are within the library folder. You can find the associated documentation on the Vault Portal.

chat\_bubble

Workflows are included for illustrative purposes only.

| Product Name |
| --- |
| 
BNPL (Buy Now Pay Later)

 |
| 

Current Account

 |
| 

Credit Card

 |
| 

Home Loan Redraw

 |
| 

Line of Credit

 |
| 

Loan

 |
| 

Mortgage

 |
| 

Savings Account

 |
| 

Shariah Savings Account

 |
| 

Time Deposit

 |
| 

US Checking & Saving

 |
| 

Wallet

 |

### [](#tests "Copy link to heading")Tests

The Products come with up to three different types of tests (unit, simulation, and end-to-end). These tests are designed for you to run via Python’s unittest module and you must run them from the root of the directory structure.

For example:

Before running the simulation or end-to-end tests, you must add the following information to these configuration files:

`config/environment_config.json`: Vault Core instance information for any environment that you wish to use for testing purposes `config/framework_config.json`: The environment names defined in `config/environment_config.json` for the different test types

The simulator tests override the default Vault Core REST/gRPC API timeout to allow longer tests. This override is set in `Client.simulate_smart_contract`, which is located in `inception_sdk/test_framework/contracts/simulation/vault_caller.py`. You may need to further increase the timeout for longer-running tests.

Further documentation on our test approach and tooling is available in the `documentation/` folder.

chat\_bubble

The Python version required for these tests is 3.10.13. The third-party module requirements are documented in the `requirements.txt` file.

We have switched from accounts service v1 to accounts service v2 for internal accounts while preserving internal account ids for consistency. Based on using this approach, we have not carried out upgrade path testing on this release as it is inherently not directly upgradable from the previous release.

### [](#sdk "Copy link to heading")SDK

This release (2024-22) was built with and ships with the SDK version 1.5.0, which no longer supports Contracts API 3.x. SDK version 1.3.0 is the last version with Contracts API 3.x support and is provided as a standalone release, without the Product Library, to support clients who are still developing on Contracts API 3.x. New SDK features will only be added to subsequent SDK versions (1.4.0+).

chat\_bubble

The `library/` folder is still included in order to provide the `library/features/v3/common/common_imports.py` and `supervisor_imports.py` modules. These help facilitate development-time-only imports with Contracts API 3.x and the renderer tool, as Contracts using Contracts API 3.x rely on 'magic' imports.

## [](#feature_details "Copy link to heading")Feature details

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
INC-10088

 | 

All

 | 

Library Vault 5 compatibility

 | 

Certified all products against release 5.3, this includes:

-   Updated products to use latest version of the SDK
    
-   Updated products to use accounts version 2 for internal accounts
    
-   Updated products to use schedule groups
    





 |
| 

INC-10240

 | 

SDK

 | 

SDK Vault 5 adoption (up to and inc 5.3)

 | 

Addressed breaking changes from Vault

Core 4 to 5. Started adoption of new features:

-   SDK support for v2 parameters -SDK Support for Flag Improvements
    
-   Improve SDK handling of grouped schedules
    
-   SDK Support for backdating plans (data-loader)
    
-   SDK Support for Schedule Testing via Operational Control + Tags
    
-   SDK Support for Operational Control
    
-   SDK support for v2 internal accounts
    
-   SDK support for v2 customer accounts/lifecycle (no sim support)
    





 |
| 

INC-10507

 | 

All

 | 

Remove the common manifest

 | 

The library no longer includes a common manifest, which was previously used to deploy standalone resources that weren’t used in any product. These resources have since been removed and there is therefore no need for the common manifest.

 |
| 

INC-10497

 | 

SDK

 | 

Framework set schedule tags status override unnecessarily

 | 

The e2e test framework no longer creates schedule tags that override the schedule status, as this is not necessary for manipulating the `test_pause_at_timestamp`

 |
| 

INC-10333

 | 

SDK

 | 

Address impossible coverage of overloaded function definitions

 | 

The library setup has been modified to let `black` collapse implementations of classes and functions consisting solely of `…​` to a single line. This is as per `black` recommendations and avoids uncoverable statements

 |
| 

INC-10298

 | 

SDK

 | 

Mypy Rollout to SDK

 | 

From this release onwards `mypy` is also run on the inception\_sdk/ directory. Note that some `mypy` errors still exist and will be addressed in subsequent releases as part of continuous improvement.

 |
| 

INC-10293

 | 

All

 | 

Remove use of test extensions from library

 | 

The library no longer provides extended Contracts API classes for test purposes. These were used to add `*eq*` dunder methods, which are now natively included in the Contracts API

 |
| 

INC-10496

 | 

Loan Mortgage

 | 

Prevent initial Mortgage / Loan Delinquency schedule skipping

 | 

The Mortgage and Loan Deliquency schedules no longer produce skipped jobs before they are first needed.

 |

## [](#defect_fixes "Copy link to heading")Defect fixes

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
INC-10522

 | 

US Checking Account

 | 

Update the US Checking Account ODP params to be optional

 | 

Updated the Overdraft Protection parameters to be optional rather than mandatory as Overdraft Protection is an optional feature of a US Checking Account.

 |
| 

INC-10491

 | 

Time Deposit

 | 

Duplicate keys in Time Deposit sim tests

 | 

Removes duplicate balance assertions in the Time Deposit simulation test.

 |
| 

INC-10465

 | 

Current Account Savings Account US Savings Account Shariah Savings Account

 | 

Deposit Fee Charged Before Limit is Exceeded

 | 

Ensures the Excess Fee and Payment Type Monthly Limit Fee behave on Vault 5.x as they did on Vault 4.x. A change in posting fetching behaviour in post-posting hook means these fees would otherwise have been charged before the limit was breached.

 |
| 

INC-10306

 | 

SDK

 | 

Balance helper creates wrong debit/credit

 | 

Fixed a bug in the unit testing framework that would result in negative debit or credit values.

 |
| 

INC-10287

 | 

SDK

 | 

Renderer fails to render contracts with just one hook

 | 

Fixed a bug that would cause rendering to fail when using a template with no features and no methods other than the contracts api hooks.

 |
| 

INC-10272

 | 

US Checking Account US Savings Account

 | 

US Manifests Don’t Deploy

 | 

The manifests for the US Checking Account and US Savings Account have been split to allow for all three combinations:

-   Standalone US Checking Account
    
-   Standalone US Savings Account
    
-   Overdraft Protection (US Checking Account + US Savings Account)
    





 |
| 

INC-10537/INC-10539

 | 

All

 | 

Unit Test Failures with 5.3.0 Contracts API

 | 

Addresses a number of unit test failures caused by additional typing validation introduced in the 5.3.0 Contracts API

 |

## [](#technical_notes "Copy link to heading")Technical notes

### [](#supported_versions_of_vault_core "Copy link to heading")Supported versions of Vault Core

Thought Machine has tested Product Library Products and the Test Framework against a single Vault Core version, which is specified in the top-level `metadata.yaml` file. As there are no intentional backwards-incompatible changes between minor Vault Core versions, each release should be compatible with any subsequent minor versions. For example, a release against Vault Core version 3.0.0 should be compatible with any subsequent 3.x.y versions. However, as we frequently make use of new platform features that may not be present on earlier versions, there are no guarantees regarding compatibility with previous minor versions. For example, a release tested against Vault Core versions 3.1.0 may not be fully or at all compatible with 3.0.0.

### [](#deployment "Copy link to heading")Deployment

The release includes a file `library/library_manifest.yaml` that contains references to metadata, configuration and dependencies, which may be used with the Configuration Layer Utility (CLU) to load the Product Library into an environment. If deploying the entire Product Library is not required, the release also includes product specific manifests `library/$PRODUCT_manifest.yaml` that contain the self-contained, deployable metadata, configuration and dependencies, which can be used with the CLU to deploy individual products independently.

The Deployment Utils script wraps around the CLU utility, shipped with Vault Core releases, to provide additional features. While it is possible to directly create all resources via the relevant Vault Core APIs (or via Workflows in some cases), we strongly advise that you only import resources using the CLU tool or Deployment Utils script. More information is available in the `documentation/deploying_configuration_layer_content_to_vault.md` file shipped with this release.

## [](#interfacing_with_vault "Copy link to heading")Interfacing with Vault

Thought Machine has taken steps to make the Product Library Workflows and Smart Contracts generic; however, these include assumptions regarding the configuration of the Vault Core instance. Clients wishing to use them, or parts of them, may need to modify the supplied files to suit their configuration. This section describes the primary places that should be reviewed.

### [](#internal_accounts "Copy link to heading")Internal accounts

Internal Accounts are defined under `library/common/internal_accounts`. These are referenced in the Product Library products.

#### [](#testing "Copy link to heading")Testing

Internal accounts used in e2e tests are now uploaded automatically via the framework with an associated unique e2e ID and all Contract/Workflow references to that account are subsequently replaced with this new ID.

Therefore, for e2e tests, you must define all internal accounts that you will use either as an asset or liability type in each test file via `endtoend.testhandle.TSIDE_TO_INTERNAL_ACCOUNT_ID`. You can find example code in the following file library/current\_account/test/e2e/test\_current\_account.py - endtoend.testhandle.TSIDE\_TO\_INTERNAL\_ACCOUNT\_ID

In addition, you must define internal account parameters that you will use within the test using a dictionary format of `{“internal_account_key”: “INTERNAL_ACCOUNT_NAME”}`. This allows the testing framework to know which parameters of the Smart Contract are internal accounts and should be replaced with the new e2e internal account ID. You can find example code in the following file: `library/current_account/test/e2e/parameters.py` - `default_template`

An internal account `DUMMY_CONTRA` is automatically created for every e2e test. If a posting requires a target internal account but you do not provide one, the default account is set to `DUMMY_CONTRA`.

You can find example code in the following file:

`inception_sdk/test_framework/endtoend/postings.py` - `generate_instruction`

chat\_bubble

This does not apply to the credit card, as it uses slightly different syntax for internal accounts.

Workflows must refer to internal accounts via the `"internal_account_id"` key. You can find examples in the following files: `library/credit_card/workflows/credit_card_balance_transfer.yaml` and `library/line_of_credit/workflows/line_of_credit_create_drawdown.yaml`

### [](#streaming_topic_configuration "Copy link to heading")Streaming Topic Configuration

As part of the environment configuration, the `values.yaml` file should list any Kafka topics used for Workflow streaming autotriggers. The following `ASYNC_CALLBACK_TOPICS` topic are used in the Library:

`vault.api.v1.accounts.account.instance_param_vals.updated` `vault.core_api.v1.accounts.account_update.events` `vault.api.v1.postings.posting_instruction_batch.created`

This file should also list any topics used for Workflow auto-instantiation. The following `AUTO_INSTANTIATION_TOPICS` topic is used in the Library:

`vault.core_api.v1.contracts.contract_notification.events`

### [](#data_loader_compatibility "Copy link to heading")Data Loader Compatibility

As an accelerator, the library products are optimised for standard use cases. As a result, the products assume that accounts are created via Core API in `"ACCOUNT_STATUS_OPEN"` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status (e.g. `"ACCOUNT_STATUS_PENDING"`) or wish to use the Data Loader API, you may need to customise the Smart Contracts to achieve the desired behaviours.

### [](#removing_workflows "Copy link to heading")Removing Workflows

As the products included in the library evolve, sometimes Workflows are removed from the distribution. If earlier versions of the library have been loaded then the Workflow Definition Versions will remain in the Vault Core instance. This is not a problem apart from the fact that they will fail if instantiated. The Workflow Definition Versions may be removed using the Workflows API.

Where more than one version is present they should be removed from the oldest to the newest, with the "active" version removed last. The following snippet is a sequence for removing them using the curl command.

chat\_bubble

Make sure that you replace the elements in `<angle brackets>` with the correct data for the environment. You could also optionally use any other method of interacting with the Workflows API, such as the Postman utility.

## [](#known_issues "Copy link to heading")Known issues

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
TM-98485

 | 

Offset Mortgage

 | 

Fully offset mortgage causes error

 | 

When the mortgage balance is fully offset by the current/savings account balances, the contract raises an error.

 |

## [](#appendix "Copy link to heading")Appendix

### [](#workflow_changes "Copy link to heading")Workflow changes

In the course of updating products for 2024-22, some Product Workflows have been removed, as detailed in the following tables. The functionality associated with these Workflows is now part of the Smart Contract behaviour or requires external orchestration by the bank. For further details on configurability, refer to the Product Specification for each product. We have only specified products that have changed in this release. Products that are not listed here remain the same.

#### [](#product_name_credit_card "Copy link to heading")Product name: Credit Card

  
| Change Type | 2024-21 Workflow Name | Comments |
| --- | --- | --- |
| 
Removed

 | 

Credit Card Application

 | 

This was just for demonstration purposes, account opening can be done through API calls.

 |

#### [](#product_name_wallet "Copy link to heading")Product name: Wallet

  
| Change Type | 2024-21 Workflow Name | Comments |
| --- | --- | --- |
| 
Removed

 | 

Wallet Application

 | 

This was just for demonstration purposes, account opening can be done through API calls.

 |
| 

Removed

 | 

Wallet Auto Top Up Switch

 | 

This was just for demonstration purposes and can be done through API calls.

 |
| 

Removed

 | 

Wallet Closure

 | 

This was just for demonstration purposes, account closure can be done through API calls.

 |

### [](#parameter_changes "Copy link to heading")Parameter changes

Below is a list of changes to parameters as a result of release 2022-24.

#### [](#product_name_us_checking_account "Copy link to heading")Product name: US Checking account

   
| Level | Change Type | Parameter Name | Change Details |
| --- | --- | --- | --- |
| 
Product

 | 

Amendment

 | 

`odp_sweep_fee`

 | 

Changed to be optional

 |
| 

Product

 | 

Amendment

 | 

`odp_sweep_fee_income_account`

 | 

Changed to be optional

 |