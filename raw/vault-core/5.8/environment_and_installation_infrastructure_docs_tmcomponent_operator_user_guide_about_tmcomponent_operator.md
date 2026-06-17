---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator"
title: "About TMComponent Operator"
scraped_at: "2026-06-17T05:30:03.823Z"
images: 0
---

# About TMComponent Operator

## [](#overview_relationship_with_kubernetes "Copy link to heading")Overview: relationship with Kubernetes

You use TMComponent Operator to install and configure Vault Core components, following the pattern of Kubernetes Operators installing its native resources.

TMComponent Operator extends Kubernetes resource kinds with custom resource kinds.

The TMComponent Operator requires:

-   A controller which subscribes to events relating to required cluster resources and reconciles the state of resources according to the Custom Resource instance in the cluster
    
-   A custom resource definition (CRD) which defines the field structures and types, acceptable values and special values that define behaviour with the Kubernetes API
    
-   A custom resource (CR) which is an instance of an object defined by the CRD
    

For more information about the Kubernetes Operator, see the [Kubernetes documentation on Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/).

## [](#benefits_of_using_the_operator_pattern "Copy link to heading")Benefits of using the Operator pattern

Having deployment logic in an Operator pattern has the following benefits over an external executable:

-   Better visibility: an Operator will expose the installation controls in a Kubernetes-native way via the CRD and CRs
    
-   Automatic pod recycling on configuration changes
    
-   Reduction of the number of places Vault Core configuration exists since everything relevant should be specified on the CR instance
    
-   Use of built-in Kubernetes garbage collection, where deleting resources automatically triggers deletion of the owned objects
    
-   Optional continuous reconciliation: The Operator can be configured to continuously maintain resources in their baseline state; failures are automatically detected and manual re-deployments are unnecessary
    
-   Active monitoring and aggregation of instance health and status
    

## [](#upgrading_vault_core_to_a_new_version "Copy link to heading")Upgrading Vault Core to a new version

This guidance explains the installation process from the point of view of installing Vault Core for the first time. To upgrade a Vault Core environment, follow the same steps as a first-time installation. For additional support on automatically upgrading the values.yaml configuration file, see [Installing or upgrading Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).

error

When upgrading, you must pay attention to information accompanying the release for any version-specific steps required. Unless Thought Machine tells you otherwise, upgrades from a release to a later release are always possible within a major version line (for example, you can upgrade from 3.1 → 3.2 and from 3.1 → 3.3). To move to a new major release, the last minor release of the current series needs to be installed as a bridge to the new major version. For example, if 1.5 was the last 1.x version, you need to include 1.5 to upgrade from 1.3 → 2.0, making the sequence 1.3 → 1.5 → 2.0.

## [](#rolling_back_vault_core_to_an_earlier_version "Copy link to heading")Rolling back Vault Core to an earlier version

A rollback is a return from a recent installation to the previously-installed version. Thought Machine only recommends rollbacks in the event of a serious incident that requires immediate attention.

Rollbacks must be executed within seven (7) days of the upgrade, and are only supported under certain conditions. Please review the [Rollbacks policy](/policy/latest/EN/company_policies_and_procedures/vault_core_release_policy#rollbacks) before executing a rollback. Unsupported rollbacks can result in data loss or the product entering an unstable state.

warning

Rollbacks to the following versions are **not** supported, due to a patch release fix which removes database indexes:

-   Any version before 4.6.26 ([release notes](/vault-core/4-6/EN/environment_and_installation/vault_release_information/patch_release_notes#4_6_26_patch_release_fixes))
    
-   4.7 patch versions before 4.7.11 ([release notes](/vault-core/4-7/EN/environment_and_installation/vault_release_information/patch_release_notes#4_7_11_patch_release_fixes))
    
-   Any 5.0.x version
    
-   5.3 patch versions before 5.3.9 ([release notes](/vault-core/5-3/EN/environment_and_installation/vault_release_information/patch_release_notes#5_3_9_patch_release_fixes))
    

For example, you **cannot** roll back to 4.6.25, but you **can** roll back to 4.6.26.

For more information, refer to TM-95353 ([release notes](/vault-core/4-6/EN/environment_and_installation/vault_release_information/patch_release_notes#4_6_26_patch_release_fixes))

info

If you are on Vault Core 5.9 and want to roll back to a previous 5.8 version, you can **only** roll back to the 5.8.20 patch version. For more information, refer to TM-127853 ([release notes](/vault-core/5-8/EN/vault_release_information/patch_release_notes#5_8_20_patch_release_fixes)).

If you are on Vault Core 5.7 or above and want to roll back to a previous version, you can **only** roll back to the following patch versions or above:

-   5.7.5 ([release notes](/vault-core/5-7/EN/vault_release_information/patch_release_notes#5_7_5_patch_release_fixes))
    
-   5.6.8 ([release notes](/vault-core/5-6/EN/environment_and_installation/vault_release_information/patch_release_notes#5_6_8_patch_release_fixes))
    
-   5.5.16 ([release notes](/vault-core/5-5/EN/environment_and_installation/vault_release_information/patch_release_notes#5_5_16_patch_release_fixes))
    
-   5.4.24 ([release notes](/vault-core/5-4/EN/environment_and_installation/vault_release_information/patch_release_notes#5_4_24_patch_release_fixes))
    
-   5.3.23 ([release notes](/vault-core/5-3/EN/environment_and_installation/vault_release_information/patch_release_notes#5_3_23_patch_release_fixes)) - you must first upgrade to 5.7.6 or above in order to roll back to 5.3.23 or above
    

For example, you can roll back from version 5.8 to 5.7.5, but **not** 5.7.4.

For more information, refer to TM-112546 ([release notes](/vault-core/5-6/EN/environment_and_installation/vault_release_information/patch_release_notes#5_6_8_patch_release_fixes))

info

If you are upgrading from Vault Core 4.7 to 5.7 or above, then you **must** start from Vault Core patch release 4.7.37 or later, in case it is necessary to revert to 4.7 before the upgrade is complete.

For more information, refer to TM-112633 ([release notes](/vault-core/4-7/EN/environment_and_installation/vault_release_information/patch_release_notes#4_7_37_patch_release_fixes))

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

Click to display the remediation steps.

1.  Find the Postgres host and database from the following settings in your `values.yaml`:
    
    -   `vault.db.host`: database hostname.
        
    -   `vault.db.name`: name of the database on the host. If unspecified, the default is `vault`.
        
    
2.  Connect to this database with a PostgreSQL client, and run one of the following SQL statements based on the version of Vault Core that you have **rolled back to**:
    

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
    

chat\_bubble

When support for named prepared statements is enabled, rollbacks to versions that do not support it (prior to 5.5) can lead to a brief (<5s) disruption during the rollback process. At this time a small number of requests may fail, but will succeed on subsequent retry. For more information, see [Support for named prepared statements](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#support_for_named_prepared_statements).

chat\_bubble

Rolling back from version 5.6 or later to a version prior to 5.6 can cause a brief disruption of the Postings API during the rollback process. At this time a small number of posting requests may fail. These requests will succeed on a subsequent retry after the rollback has completed. The failed requests will not be committed to the database and can be resubmitted with the same request ID. Vault Core will not recognise them as duplicates and they will be processed as normal without triggering an indempotent response.

If you are using the Streaming Posting API, you can monitor posting failures during rollback on the response topic for your Posting API Client. If you are using the Core API to submit postings, your integration will receive error responses synchronously.

chat\_bubble

An issue which prevents being able to successfully roll back from 5.8, 5.7 to any prior 5.6, 5.5 patch release.

This issue was caused by a change in the label selector fields for the otel collector k8s custom resources as we started using Opentelemetry Operator to manage them, in place of the Crown Operator. This issue will only affect the collection of tracing data during the roll back and will not impact any other product functionality.

When the rollback is executed, the Crown Operator checks that the field selector on these resources has changed, and then attempts to update them but field selectors are read-only and then the operation fails.

If you must roll back to an affected 5.6 or 5.5 patch release, then you can manually delete relevant OpenTelemetry Collector resources before retrying. Otherwise the fix is automatically available when you install Vault 5.6.15 or 5.5.24 patches respectively.

To roll back a Vault Core environment, follow the same steps as a first-time installation. See [Installing or upgrading Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).

Note that there are certain caveats to rollbacks:

-   Rollbacks are not supported after major version upgrades (for example, 4.7 to 5.0). It is possible to roll back between minor and patch versions, but not to releases earlier than 4.6.
    
-   There is no process to roll back automatically to an earlier version of values.yaml. Thought Machine recommends to use the values.yaml file that you used prior to the upgrade.
    
-   If you have made use of any new features, you cannot roll back to an earlier Vault Core version:
    
    -   Use of a feature includes, but is not limited to: changes to the values.yaml file, integrating with new Vault Core REST and Streaming APIs endpoints or parameters, or incorporating new Contracts API types in your Smart Contracts. Reach out to your Thought Machine representative for more guidance.
        
    -   A feature is considered new if it is not available in the version of Vault Core you upgraded from, but is available in the version you upgraded to. If the feature is available in both, you can safely use it without preventing rollbacks.