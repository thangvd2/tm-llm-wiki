---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/release_information/technical_details_of_this_release"
title: "2026-26 Release Notes"
scraped_at: "2026-06-22T19:19:59.471Z"
images: 0
---

# 2026-26 Release Notes

These release notes describe the features and defect fixes delivered as part of the 2026-26 Product Library Release and provide technical guidance on using it. They are intended for all clients of Thought Machine who consume the Product Library and are interested in taking this release.

The release notes reflect the components included in the Product Library Release 2026-26. Thought Machine has designed and built the included Products to demonstrate configurability of financial products and processes within Vault Core. The Products are intended solely as aids to accelerate understanding and development of Smart Contracts, Workflows and our Platform. Use is at your sole discretion and risk.

Additional releases will reflect enhancements and improvements to the key functionality of each of these Products, and are subject to continuous change and enhancements.

## [](#summary "Copy link to heading")Summary

Thought Machine has designed and tested this release against Vault Core 5.9.3 and Configuration Layer Utility 5.6.3; elements of the library may not work with other versions.

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

This release (2026-26) was built with and ships with the SDK version 1.9.0, which no longer supports Contracts API 3.x. SDK version 1.3.0 is the last version with Contracts API 3.x support and is provided as a standalone release, without the Product Library, to support clients who are still developing on Contracts API 3.x. New SDK features will only be added to subsequent SDK versions (1.4.0+).

## [](#feature_details "Copy link to heading")Feature details

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
IMP-1729

 | 

SDK

 | 

Inception SDK Support for Attributes

 | 

Adds support to the Inception SDK to build and test Smart Contracts using Attributes.

 |
| 

TM-127134

 | 

SDK

 | 

Inception SDK Support for Adjustments Versioning Policy and Patching

 | 

Adds Inception SDK support for Adjustments Versioning Policy and Patching, which are introduced by IMP-1648. This includes:

-   A new mechanism to manage multiple concurrent versions of a single product within a test lifecycle, which is a prerequisite for testing the new Adjustments features. This also simplifies conversion testing.
    
-   Helpers to fetch and update product versions
    





 |
| 

TM-125820

 | 

SDK

 | 

Enable use of Simulation DPGTZ with Inception SDK

 | 

Adds `default_timezone` argument to the `` SimulationTestScenario` `` to support setting the Default Processing Group in Simulation tests before accounts are created.

 |
| 

TM-122124

 | 

SDK

 | 

Add support to `update_account_v2` e2e helper for Processing Group and Parameter Value Hierarchy fields

 | 

Updates the `update_account_v2` e2e helper to include missing fields that are required to interact with Processing Groups and the Parameter Value Hierarchy.

 |
| 

TM-122123

 | 

SDK

 | 

Update `wait_for_schedule_operation_events` to assert on exact timestamp instead of >=

 | 

Updates the `wait_for_schedule_operation_events` helper to assert against the exact `wait_for_timestamp` value, if specified, instead of a accepting a greater than or equal value.

 |
| 

TM-128153

 | 

SDK

 | 

Improve ability to skip tests based on Vault Instance characteristics

 | 

Improves the ability to skip tests based on the configured Vault Core environment’s Vault Version, including test-class-level skip support. Also adds the ability to skip tests and test classes based on the extensions enabled on the configured Vault Core environment (only available for Vault Core 5.8.0+)

 |
| 

TM-122741

 | 

SDK

 | 

Easily identify Inception SDK Postings

 | 

Updates the Inception SDK to use the uniquely identifiable Postings API Client ID `InceptionSDKPostingsAPIClient` when generating postings, and explicitly identifies E2E teardown postings using the `TEARDOWN_` prefix in the `client_batch_id` field. This simplifies investigations by helping clients identify postings' source.

 |

## [](#defect_fixes "Copy link to heading")Defect fixes

   
| Reference | Product(s) | Title | Summary |
| --- | --- | --- | --- |
| 
TM-127242

 | 

SDK

 | 

`test_raise_when_timeout_is_exceeded` fails when loglevel set to debug

 | 

Improves the endtoend framework unit test `test_raise_when_timeout_is_exceeded` to avoid failing when running with loglevel set to debug.

 |
| 

TM-124557

 | 

SDK

 | 

SDK Balances v2 model is missing a timestamp

 | 

The SDK now includes two models for `/v2/balances`:

-   The `BalanceV2` model, which now includes a timestamp field, is used for `/v2/balances/series`, `/v2/balances/end` responses and `live_balances` included on PIB response events.
    
-   A new `LiveBalanceV2` model, without a timestamp field, is used for `/v2/balances/live` responses.
    





 |
| 

TM-123904

 | 

SDK

 | 

Inception SDK Simulation tests nask the Simulation errors returned in result

 | 

Ensures the Inception SDK simulation framework does not mask errors returned by the simulation endpoint. This improves test writers' ability to diagnose issues with their Smart Contracts or test setup.

 |
| 

TM-122699

 | 

SDK

 | 

Inception SDK vault\_types for `get_account_creation_datetime` has incorrect typehint

 | 

Corrects the Inception SDK type hints for the Smart Contract vault object’s `get_account_creation_datetime` method.

 |
| 

TM-122221

 | 

SDK

 | 

Inception SDK simulation framework does not handle instruction-level value timestamp on PIB

 | 

Updated the simulation `get_inflight_balances` helper function to correctly process `value_timestamp` fields defined at both the Posting Instruction Batch level and Posting Instruction level.

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
| 

TM-99720

 | 

Credit Card

 | 

Credit Card optional overlimit opt in results in exceptions if not set

 | 

Credit Card optional parameters behave as if they are not optional, causing errors if they are not set.

 |
| 

TM-118924

 | 

Line of Credit

 | 

Residual Interest Not Zeroed Out

 | 

The Line of Credit drawdowns can fail to zero out residual accrued interest in early repayment scenarios.

 |
| 

TM-119496

 | 

Line of Credit

 | 

Incorrect Available limit check in line of credit supervisor

 | 

The Line of Credit’s available credit limit is higher than it should be between Due Amount Calculations. The deviation is roughly equal to the amount of outstanding interest accrued on the expected principal (i.e. excluding overpayments).

 |

## [](#appendix "Copy link to heading")Appendix

### [](#workflow_changes "Copy link to heading")Workflow changes

There are no workflow changes in this release.

### [](#parameter_changes "Copy link to heading")Parameter changes

There are no parameter changes in this release.