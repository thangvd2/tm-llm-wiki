---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/release_information/previous_release_notes/2024-21_release_notes"
title: "2024-21 Release Notes"
scraped_at: "2026-06-22T19:20:11.316Z"
images: 0
---

# 2024-21 Release Notes

These release notes describe the features and defect fixes delivered as part of the 2024-21 Product Library Release and provide technical guidance on using it. They are intended for all clients of Thought Machine who consume the Product Library and are interested in taking this release.

The release notes reflect the components included in the Product Library Release 2024-21. Thought Machine has designed and built the included Products to demonstrate configurability of financial products and processes within Vault Core. The Products are intended solely as aids to accelerate understanding and development of Smart Contracts, Workflows and our Platform. Use is at your sole discretion and risk.

Additional releases will reflect enhancements and improvements to the key functionality of each of these Products, and are subject to continuous change and enhancements.

## [](#summary "Copy link to heading")Summary

Thought Machine has designed and tested this release against Vault Core 4.6.11 and Configuration Layer Utility 4.1; elements of the library may not work with other versions.

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

### [](#sdk "Copy link to heading")SDK

This release (2024-21) was built with and ships with the SDK version 1.4.0, which no longer supports Contracts API 3.x. SDK version 1.3.0 is the last version with Contracts API 3.x support and is provided as a standalone release, without the Product Library, to support clients who are still developing on Contracts API 3.x. New SDK features will only be added to subsequent SDK versions (1.4.0+).

chat\_bubble

The `library/` folder is still included in order to provide the `library/features/v3/common/common_imports.py` and `supervisor_imports.py` modules. These help facilitate development-time-only imports with Contracts API 3.x and the renderer tool, as Contracts using Contracts API 3.x rely on 'magic' imports.

## [](#feature_details "Copy link to heading")Feature details

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
CPP-1823 CPP-1826 INC-9894 INC-9904

 | 

See Summary

 | 

Upgrade the Contracts for the mentioned products to Contracts Language V4.0

 | 

The following contracts have been rewritten to use the latest Contracts Language v4.0. US Savings Account US Checking Account (optional Overdraft Protection has been added) NOTE: US Savings Account and US Checking Account products have been built using the new Financial Product Development Approach ie. Common Business Features implemented by product composition blocks. We have written the business documentation for these products in the Documentation Hub. Please be aware that in the course of rewriting products to Contracts Language v4.0 for 2024-21, some product workflows may have been changed or removed and some parameters changed to improve product usability. Please see [Appendix](/vault-core/5-9/EN/product_library/release_information/previous_release_notes#appendix) for more details.

 |
| 

CPP-2377

 | 

Current Account Savings Account

 | 

Optional blocking of subsequent withdrawals

 | 

Added functionality to optionally block subsequent withdrawals after the customer has reached the maximum number of withdrawals permitted per month.

 |
| 

N/A

 | 

All

 | 

Move documentation to Documentation hub

 | 

We have moved all product documentation to the Documentation Hub. This includes: Product Specifications Financial Product Guides (including all Common Business Features) Integration Guides Process Diagrams Product Library Overview

 |
| 

INC-10038 INC-10039

 | 

All

 | 

Allow tags to be preserved when testing conversions

 | 

Allow schedule tags to be preserved across product versions for the purpose of testing conversion\_hook/product version upgrade scenarios. As a result of this work we have removed conversion hook workarounds for completed schedules.

 |
| 

INC-9987

 | 

N/A

 | 

update datetime.now() guidance

 | 

Updates datetime.now() guidance to reflect unexpected behaviours in end-to-end scenarios.

 |
| 

INC-9986

 | 

SDK All

 | 

Move old metadata from contract to CLU resource

 | 

Moves the metadata fields that were removed from Contracts API 4 from contract code to CLU resources so that they are set in the API request instead.

 |
| 

INC-9985

 | 

SDK

 | 

Improve error message for incorrect import syntax

 | 

Make renderer error message more explicit when `from x import y` syntax is used for imports other than contracts api.

 |
| 

INC-9980

 | 

SDK All

 | 

Python 3.10 Support

 | 

Adds support for Python 3.10 and makes use of new features in SDK and Product Library.

 |
| 

INC-9978

 | 

N/A

 | 

Upgrade third party deps

 | 

Upgrade to the latest available versions of third party dependencies, where possible.

 |
| 

INC-9959

 | 

All (except credit card)

 | 

Adopt Common Params

 | 

Adopts common parameters across all products except for the credit card and uses within features.

 |
| 

INC-9935

 | 

All SDK

 | 

Remove remaining CLv3 code

 | 

Removes support for CLv3 development in the SDK and any CLv3 contract code from the Product Library.

 |
| 

INC-9462

 | 

Credit Card

 | 

Use constants in Credit Card tests

 | 

Re-Use template/feature definitions in Credit Card tests rather than redefining values.

 |
| 

INC-7934

 | 

N/A

 | 

Derived Parameters - Use latest by default

 | 

Updates guidance around derived parameters to ensure REST API parameters are respected.

 |

## [](#defect_fixes "Copy link to heading")Defect fixes

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
INC-10135

 | 

Line of Credit

 | 

Line of Credit Manifest AST does not align with product

 | 

Addresses a mismatch between the CLU manifest and contract code for the Line of Credit’s Account Schedule Tags, which would prevent deployment.

 |
| 

INC-10082

 | 

SDK

 | 

events\_timezone type hint should be ZoneInfo

 | 

Corrects `events_timezone` type hints in test framework and stubs to be `ZoneInfo` instead of `str`.

 |
| 

INC-10046

 | 

Time Deposit

 | 

Capitalise outstanding accrued interest in account maturity schedule for Time Deposit

 | 

Ensures all outstanding accrued interest on a Time Deposit account is capitalised on maturity.

 |
| 

INC-10009

 | 

All

 | 

Unit Tests do not use standard default\_denomination attribute consistently

 | 

Updates all product unit tests to use sentinels instead of denomination, where applicable, and the `default_denomination` otherwise.

 |

## [](#technical_notes "Copy link to heading")Technical notes

### [](#supported_versions_of_vault_core "Copy link to heading")Supported versions of Vault Core

Thought Machine has tested Product Library Products and the Test Framework against a single Vault Core version, which is specified in the top-level `metadata.yaml` file. As there are no intentional backwards-incompatible changes between minor Vault Core versions, each release should be compatible with any subsequent minor versions. For example, a release against Vault Core version 3.0.0 should be compatible with any subsequent 3.x.y versions. However, as we frequently make use of new platform features that may not be present on earlier versions, there are no guarantees regarding compatibility with previous minor versions. For example, a release tested against Vault Core versions 3.1.0 may not be fully or at all compatible with 3.0.0.

### [](#deployment "Copy link to heading")Deployment

The release includes a file `library/library_manifest.yaml` that contains references to metadata, configuration and dependencies, which may be used with the Configuration Layer Utility (CLU) to load the Product Library into an environment. If deploying the entire Product Library is not required, the release also includes product specific manifests `library/$PRODUCT_manifest.yaml` that contain the self-contained, deployable metadata, configuration and dependencies, which can be used with the CLU to deploy individual products independently.

The Deployment Utils script wraps around the CLU utility, shipped with Vault Core releases, to provide additional features. While it is possible to directly create all resources via the relevant Vault Core APIs (or via Workflows in some cases), we strongly advise that you only import resources using the CLU tool or Deployment Utils script. More information is available in the `documentation/deploying_configuration_layer_content_to_vault.md` file shipped with this release.

chat\_bubble

The SHA1 hash of `product_library-2024_22.zip` is: `725539406bb57d93a645f3086a538005858dbd5a`

## [](#interfacing_with_vault "Copy link to heading")Interfacing with Vault

Thought Machine has taken steps to make the Product Library Workflows and Smart Contracts generic; however, these include assumptions regarding the configuration of the Vault Core instance. Clients wishing to use them, or parts of them, may need to modify the supplied files to suit their configuration. This section describes the primary places that should be reviewed.

### [](#internal_accounts "Copy link to heading")Internal accounts

Internal Accounts are defined under `library/common/internal_accounts`. These are referenced in the Product Library products.

Product parameters are set in `<SMART_CONTRACT>.resource.yaml` or when uploading a Contract via API or Operations Dashboard.

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

## [](#appendix "Copy link to heading")Appendix

### [](#workflow_changes "Copy link to heading")Workflow changes

In the course of rewriting Products to use Contracts Language version 4.0 for 2024-21, some Product Workflows have been removed, as detailed in the following tables. The functionality associated with these Workflows is now part of the Smart Contract behaviour or requires external orchestration by the bank. For further details on configurability, refer to the Product Specification for each product. We have only specified products that have changed in this release. Products that are not listed here remain the same.

#### [](#product_name_us_savings_account "Copy link to heading")Product name: US Savings Account

   
| Change Type | 2023-20 Workflow Name | Comments |  |
| --- | --- | --- | --- |
| 
Removed

 | 

US Savings Account Application

 | 

This was just for demonstration purposes, account opening can be done through API calls.

 |  |
| 

Removed

 | 

US Products Closure

 | 

This was just for demonstration purposes, account closure can be done through API calls.

 |  |
| 

Removed

 | 

US Savings Account Interest Application Day Change

 | 

This was just for demonstration purposes and can be done through API calls.

 |  |

#### [](#product_name_us_checking_account_with_optional_overdraft_protection "Copy link to heading")Product name: US Checking Account (with optional Overdraft Protection)

   
| Change Type | 2023-20 Workflow Name | Comments |  |
| --- | --- | --- | --- |
| 
Removed

 | 

US Checking Account Application

 | 

This was just for demonstration purposes, account opening can be done through API calls.

 |  |
| 

Removed

 | 

US Products Closure

 | 

This was just for demonstration purposes, account closure can be done through API calls.

 |  |
| 

Removed

 | 

US Products Manage Overdraft Coverage

 | 

This workflow activated/deactivated the Overdraft Coverage flag. This functionality is now handled via an instance parameter and therefore this workflow is no longer needed. Overdraft Coverage can now be managed through API calls to update the instance parameter value.

 |  |
| 

Removed

 | 

US Supervisor Account Association

 | 

This was just for demonstration purposes and can be done through API calls.

 |  |
| 

Removed

 | 

US Supervisor Checking and Savings Account Association

 | 

This was just for demonstration purposes and can be done through API calls.

 |  |
| 

Removed

 | 

US Supervisor Savings Account Disassociation

 | 

This was just for demonstration purposes and can be done through API calls.

 |  |

### [](#parameter_changes "Copy link to heading")Parameter changes

In the course of rewriting products to Contracts Language v4.0 for 2024-21, some product parameters have been added. For a full list, refer to the following tables. We only have specified parameter changes for products that were already in CLv4. New CLv4 products (US Savings Account) are not included here. More information about the new parameters can be found in the relevant section of the Product Specifications.

#### [](#product_name_savings_account "Copy link to heading")Product name: Savings Account

   
| Level | Change Type | 2023-20 Parameter Name | 2024-21 Parameter Name |
| --- | --- | --- | --- |
| 
Template

 | 

New

 | 

N/A

 | 

`block_excess_withdrawals`

 |

#### [](#product_name_current_account "Copy link to heading")Product name: Current Account

   
| Level | Change Type | 2023-20 Parameter Name | 2024-21 Parameter Name |
| --- | --- | --- | --- |
| 
Template

 | 

New

 | 

N/A

 | 

`block_excess_withdrawals`

 |

#### [](#product_name_us_checking_account "Copy link to heading")Product name: US Checking Account

   
| Level | Change Type | 2023-20 Parameter Name | 2024-21 Parameter Name |
| --- | --- | --- | --- |
| 
Template

 | 

New

 | 

N/A

 | 

`odp_sweep_fee`

 |
| 

Template

 | 

New

 | 

N/A

 | 

`odp_sweep_fee_income_account`

 |