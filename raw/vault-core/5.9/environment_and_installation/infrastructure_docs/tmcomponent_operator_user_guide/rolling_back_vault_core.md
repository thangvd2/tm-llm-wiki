---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core"
title: "Rolling back Vault Core"
scraped_at: "2026-06-22T19:14:39.467Z"
images: 0
---

# Rolling back Vault Core

Bank-hosted

A rollback is a return from a recent installation to an earlier version of Vault Core that you have previously installed. Thought Machine only recommends rollbacks in the event of a serious incident that requires immediate attention.

Rollbacks must be executed within seven (7) days of installing the upgrade, and are only supported under certain conditions.

error

Unsupported rollbacks can result in data loss or the product entering an unstable state. Review the [Rollbacks policy](/policy/latest/EN/company_policies_and_procedures/vault_core_release_policy#rollbacks) before executing a rollback. Contact your Thought Machine representative for guidance.

## [](#caveats_to_rollbacks "Copy link to heading")Caveats to rollbacks

Rollbacks are not supported in these scenarios:

-   Rollbacks are not supported after major version upgrades (for example, 4.7 to 5.0). It is possible to roll back between minor and patch versions, but not to releases earlier than 4.6.
    
-   You cannot roll back to a earlier major or minor version if you have run the [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) step on your current version. This is regardless of whether the finalisation is still in progress or has completed.
    
-   There is no process to roll back automatically to an earlier version of `values.yaml`. Thought Machine recommends to use the values file that you used prior to the upgrade.
    
-   If you have made use of any new features, you cannot roll back to an earlier Vault Core version:
    
    -   Use of a feature includes, but is not limited to: changes to the `values.yaml` file, integrating with new Vault Core REST and Streaming APIs endpoints or parameters, or incorporating new Contracts API types in your Smart Contracts.
        
    -   A feature is considered new if it is not available in the version of Vault Core you upgraded from, but is available in the version you upgraded to. If the feature is available in both, you can safely use it without preventing rollbacks.
        
    

Reach out to your Thought Machine representative for more guidance.

## [](#supported_versions "Copy link to heading")Supported versions

If you are on Vault Core 5.9 and want to roll back to a previous 5.8 version, you can **only** roll back to the 5.8.20 patch version. For more information, refer to TM-127853 ([release notes](/vault-core/5-8/EN/vault_release_information/patch_release_notes#5_8_20_patch_release_fixes)).

If you are on Vault Core 5.7 or above and want to roll back to a previous version, you can **only** roll back to the following patch versions or above:

-   5.7.5 ([release notes](/vault-core/5-7/EN/vault_release_information/patch_release_notes#5_7_5_patch_release_fixes))
    
-   5.6.8 ([release notes](/vault-core/5-6/EN/environment_and_installation/vault_release_information/patch_release_notes#5_6_8_patch_release_fixes))
    
-   5.5.16 ([release notes](/vault-core/5-5/EN/environment_and_installation/vault_release_information/patch_release_notes#5_5_16_patch_release_fixes))
    
-   5.4.24 ([release notes](/vault-core/5-4/EN/environment_and_installation/vault_release_information/patch_release_notes#5_4_24_patch_release_fixes))
    
-   5.3.23 ([release notes](/vault-core/5-3/EN/environment_and_installation/vault_release_information/patch_release_notes#5_3_23_patch_release_fixes)) - you must first upgrade to 5.7.6 or above in order to roll back to 5.3.23 or above
    

For example, you can roll back from version 5.8 to 5.7.5, but **not** 5.7.4. For more information, refer to TM-112546 ([release notes](/vault-core/5-6/EN/environment_and_installation/vault_release_information/patch_release_notes#5_6_8_patch_release_fixes)).

Therefore, before upgrading from Vault Core 5.x to 5.7 or above, make sure you have first upgraded to a patch version that supports rollbacks.

## [](#unsupported_versions "Copy link to heading")Unsupported versions

Rollbacks to the following versions are **not** supported, due to a patch release fix which removes database indexes:

-   5.3 patch versions before 5.3.9 ([release notes](/vault-core/5-3/EN/environment_and_installation/vault_release_information/patch_release_notes#5_3_9_patch_release_fixes))
    
-   Any 5.0.x version
    
-   4.7 patch versions before 4.7.11 ([release notes](/vault-core/4-7/EN/environment_and_installation/vault_release_information/patch_release_notes#4_7_11_patch_release_fixes))
    
-   Any version before 4.6.26 ([release notes](/vault-core/4-6/EN/environment_and_installation/vault_release_information/patch_release_notes#4_6_26_patch_release_fixes))
    

For example, you **cannot** roll back to 4.6.25, but you **can** roll back to 4.6.26.

For more information, refer to TM-95353 ([release notes](/vault-core/4-6/EN/environment_and_installation/vault_release_information/patch_release_notes#4_6_26_patch_release_fixes)).

## [](#reverting_to_vault_core_4_7_during_an_upgrade_to_5_x "Copy link to heading")Reverting to Vault Core 4.7 during an upgrade to 5.x

If you are upgrading from Vault Core 4.7 to Vault Core 5.x, then you **must** start from Vault Core patch release 4.7.37 or later, in case it is necessary to revert to 4.7 before the upgrade is complete.

For more information, refer to TM-112633 ([release notes](/vault-core/4-7/EN/environment_and_installation/vault_release_information/patch_release_notes#4_7_37_patch_release_fixes)).

chat\_bubble

This scenario is different from rollbacks - as per our Rollbacks policy, you **cannot** roll back after completing a major version upgrade (therefore, you cannot roll back to 4.7 after completing a 5.x upgrade).

However, you **can** back out during the upgrade process and reinstall 4.7, provided that the upgrade has not completed, you have not accepted any new traffic in 5.x, and you were on Vault Core patch release 4.7.37+ prior to upgrading.

## [](#performing_a_rollback "Copy link to heading")Performing a rollback

To roll back a Vault Core environment, follow the same steps as a first-time installation to install the previous Vault Core release you were on - refer to the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).

If you are rolling back to a previous release that is version 5.9 or above, you must also perform [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) to complete the rollback.

## [](#further_considerations "Copy link to heading")Further considerations

When rolling back, you may also need to make further considerations or steps - see the following for more information:

### [](#removing_vault_permission_associations "Copy link to heading")Removing Vault Permission Associations

info

You are strongly recommended to follow remediation steps if you are rolling back from a Vault Core major or minor version to a version within any of the following ranges (inclusive):

-   4.5.0 to 4.5.58
    
-   4.6.0 to 4.6.62
    
-   4.7.0 to 4.7.46
    
-   5.3.0 to 5.3.32
    
-   5.4.0 to 5.4.34
    
-   5.5.0 to 5.5.25
    
-   5.6.0 to 5.6.16
    
-   5.7.0 to 5.7.10
    
-   5.8.0 to 5.8.2
    

Failure to perform these remedial steps may result in users with an admin role (`admin_role`) becoming unable to log in to Vault Core applications.

To perform the remediation steps:

1.  Find the Postgres host and database from the following settings in your `values.yaml`:
    
    -   `vault.db.host`: database hostname
        
    -   `vault.db.name`: name of the database on the host. If unspecified, the default is `vault`
        
    
2.  Connect to this database with a PostgreSQL client, and run one of the following SQL statements based on the version of Vault Core that you have **rolled back to**:
    

Click to display version-specific instructions

-   Vault Core 4.6:
    
    To roll back to Vault Core 4.6.x from a later minor release:
    
-   Vault Core 4.7:
    
    To roll back to Vault Core 4.7.x from a later minor release:
    
-   Vault Core 5.1:
    
    To roll back to Vault Core 5.1.x from a later minor release:
    
-   Vault Core 5.3:
    
    To roll back to Vault Core 5.3.x from a later minor release:
    
-   Vault Core 5.4:
    
    To roll back to Vault Core 5.4.x from a later minor release:
    
-   Vault Core 5.5:
    
    To roll back to Vault Core 5.5.x from a later minor release:
    
-   Vault Core 5.6:
    
    To roll back to Vault Core 5.6.x from a later minor release:
    
-   Vault Core 5.7:
    
    To roll back to Vault Core 5.7.x from a later minor release:
    
-   Vault Core 5.8:
    
    To roll back to Vault Core 5.8.x from a later minor release:
    

### [](#rollbacks_with_named_prepared_statements "Copy link to heading")Rollbacks with named prepared statements

When support for named prepared statements is enabled, rollbacks to versions that do not support it (prior to 5.5) can lead to a brief (<5s) disruption during the rollback process. At this time, a small number of requests may fail, but will succeed on subsequent retry. For more information, see [Support for named prepared statements](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#support_for_named_prepared_statements).

### [](#impact_of_rollbacks_on_postings_api "Copy link to heading")Impact of rollbacks on Postings API

Rolling back from version 5.6 or later to a version prior to 5.6 can cause a brief disruption of the Postings API during the rollback process. At this time a small number of posting requests may fail. These requests will succeed on a subsequent retry after the rollback has completed. The failed requests will not be committed to the database and can be resubmitted with the same request ID. Vault Core will not recognise them as duplicates and they will be processed as normal without triggering an idempotent response.

If you are using the Streaming Posting API, you can monitor posting failures during rollback on the response topic for your Posting API Client. If you are using the Core API to submit postings, your integration will receive error responses synchronously.

### [](#impact_of_rollbacks_on_collecting_tracing_data "Copy link to heading")Impact of rollbacks on collecting tracing data

There is an issue that prevents being able to successfully roll back from Vault Core 5.7 or above to any 5.6 or 5.5 patch release.

This issue was caused by a change in the label selector fields for the OpenTelemetry Collector Kubernetes custom resources, as we started using OpenTelemetry Operator to manage them in place of the Crown Operator. This issue only affects the collection of tracing data during the rollback and does not impact any other product functionality.

When the rollback is executed, the Crown Operator checks that the field selector on these resources has changed, and then attempts to update them. However, field selectors are read-only, which leads to the operation failing.

If you must roll back to an affected 5.6 or 5.5 patch release, then you can manually delete relevant OpenTelemetry Collector resources before retrying. Otherwise the fix is automatically available when you install Vault Core 5.6.15 or 5.5.24 patches respectively.