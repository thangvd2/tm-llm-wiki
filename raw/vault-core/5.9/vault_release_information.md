---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/vault_release_information/"
title: "Release information"
scraped_at: "2026-06-22T19:22:20.848Z"
images: 0
---

# Release information

## [](#whats_new_in_this_release "Copy link to heading")What’s new in this release

Vault Core 5.9 introduces a number of enhancements. Some highlights include:

### [](#automation_of_manual_post_installation_steps_to_complete_an_upgrade "Copy link to heading")Automation of manual post-installation steps to complete an upgrade

Vault Core 5.9 introduces finalisation, which is a standardised way of performing essential post-installation cleanup and optimisation steps to complete a system upgrade. Previously, you had to carry out these steps manually, which entailed more risk and effort; from 5.9 onwards, finalisation carries out these steps automatically, ensuring they run in the correct order and only when it is safe to do so.

Finalisation is the last stage in the upgrade process to officially switch your system to a newer version, and it introduces a more stable and controlled path for upgrading to future versions. Additionally, certain improvements and new features only come into effect after finalising. For 5.9, finalisation brings updates to the [Scheduler](/vault-core/5-9/EN/reference/scheduler) to improve the reliability and performance of account opening and conversion journeys, as well as enabling the new [bulk Account conversion v2 endpoint](/vault-core/5-9/EN/api/core_api#accountmigration_2).

To reduce the risk of the system entering an inconsistent state during the upgrade journey, we have added safeguards from 5.9 onwards to prevent upgrades if the current installation has not been properly finalised, as well as prevent rollbacks once you use any newly enabled features.

chat\_bubble

Finalisation is mandatory. To trigger the automated post-installation steps and complete an upgrade to 5.9, run `vaultctl finalise` after running `vaultctl install`.

For more information, see [Finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation).

### [](#improved_performance_of_the_scheduler "Copy link to heading")Improved performance of the Scheduler

The [Scheduler](/vault-core/5-9/EN/reference/scheduler) setup during various high-traffic events such as account opening, product conversions, and scheduled event execution has been optimised.

This is enabled after you [finalise your installation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) of Vault Core 5.9+.

### [](#improved_performance_of_event_reconciliation_api_using_read_replicas "Copy link to heading")Improved performance of Event Reconciliation API using read replicas

Vault Core 5.9 brings improvements to the Event Reconciliation API. Previously, a timeout error could occur during peak loads when using the `GetJournalEventsChecksum` endpoint to calculate checksums. In 5.9, you can now use read replicas to optimise the performance of high-volume events reconciliation, meaning you can successfully retrieve a checksum even during peak demand.

For more information, see [Event reconciliation](/vault-core/5-9/EN/api/core_api#event_reconciliation) and [Configuring read replicas for performance](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_read_replicas_for_performance).

### [](#native_support_for_financial_product_upgrades "Copy link to heading")Native support for financial product upgrades

You can now perform bulk account conversions on v2 Accounts configured with Core API Parameters, High-volume Accounts, or Account Attributes, and more closely monitor their progress.

info

Bulk account conversions via `/v1-account-migrations` and `/v2-account-migrations` use warm storage to select the accounts set to migrate. This means that lag in warm storage can cause accounts to not be included in the set, as their warm storage representation may not be up to date.

[Account Updates](/vault-core/5-9/EN/api/core_api#accountupdate) and [Account Update Batches](/vault-core/5-9/EN/api/core_api#accountupdatebatch) are created asynchronously, and this can lead to a delay between the conversion of an account completing and its corresponding account updates completing.

For more information, see the Account conversions documentation for [Accounts version 1](/vault-core/5-9/EN/reference/accounts/accounts_version_1#account_conversions) or [Accounts version 2](/vault-core/5-9/EN/reference/accounts/accounts_version_2#account_conversions).

### [](#accurate_product_timeline_during_adjustments "Copy link to heading")Accurate product timeline during Adjustments

From Vault Core 5.9, Adjustment computations can use the relevant Product versions which applied during an Adjustment timeline. This improves Adjustment accuracy by accounting for differences in product functionality over time.

For more information, see [Product versioning in Adjustment computations](/vault-core/5-9/EN/reference/adjustments#product_versioning_in_adjustment_computations).

### [](#shared_timestamps_enabled_for_posting_instructions_in_a_client_transaction "Copy link to heading")Shared timestamps enabled for Posting Instructions in a Client Transaction

Posting Instructions within a single Client Transaction can now share identical `value_timestamp` and `booking_timestamp` values, provided they are in separate Posting Instruction Batches.

Removing the restriction requiring unique value timestamps addresses race conditions that previously led to rejected postings, as well as:

-   Eliminating the need to manually increment unique timestamps for instructions created during high-frequency activity.
    
-   Simplifying data retrieval and querying process, as you can now fetch all postings for a transaction using the same timestamp.
    

For more information, see [Multiple posting instructions](/vault-core/5-9/EN/reference/postings#multiple_posting_instructions).

### [](#customisable_naming_for_aws_iam_roles_and_database_usernames "Copy link to heading")Customisable naming for AWS IAM roles and database usernames

Vault Core 5.9 introduces a new, more flexible naming logic for IAM roles and database usernames when using AWS IAM authentication.

Previously, IAM role names followed naming conventions specific to Vault Core, and database usernames contained a hardcoded suffix. In 5.9, you can now configure an IAM role name with a customisable prefix of up to 32 characters, as well as override default database usernames and manually define your own.

This enhanced flexibility ensures resource names are predictable and compliant with AWS naming requirements, while also offering greater customisation and control over naming conventions for IAM and database principals.

For more information, see [Vault Installer role and policy](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#vault_installer_role_and_policy) and [Configuring RBAC based authentication to AWS RDS/Aurora](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_rbac_based_authentication_to_aws_rdsaurora).