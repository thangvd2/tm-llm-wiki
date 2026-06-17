---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core"
title: "Upgrading Vault Core"
scraped_at: "2026-06-17T04:58:47.085Z"
images: 0
---

# Upgrading Vault Core

Bank-hosted

The upgrade process involves moving an existing Vault Core deployment to a newer version. While the upgrade itself follows the same steps as installing Vault Core for the first time, there are some extra considerations and instructions to follow.

This page goes through what to consider before upgrading, and specific guidance based on the Vault Core release you are upgrading from.

## [](#about_vault_core_upgrades "Copy link to heading")About Vault Core upgrades

-   **Major upgrade**: an upgrade from the existing version of the software. It typically introduces significant product changes and improvements in functionality, which may include backwards-incompatible changes.
    
-   **Minor upgrade**: an update to the existing version of the software, typically to improve and enhance existing features. Does not include backwards-incompatible changes.
    
-   **Patch upgrade**: a minor modification to the existing software, typically to fix critical bugs or vulnerabilities.
    

info

When upgrading, you must pay attention to information accompanying the release for any version-specific steps required. Unless Thought Machine tells you otherwise, upgrades from a release to a later release are always possible within a major version line (for example, you can upgrade from 3.1 → 3.2 and from 3.1 → 3.3).

To upgrade to a new major release, you should first install the latest minor and patch release of the current series as a bridge to the new major version. For example, if you are currently on 1.3 and 1.5.10 was the last 1.x.x version, you need to first upgrade to 1.5.10 in order to upgrade from 1.3 → 2.0, making the sequence 1.3 → 1.5.10 → 2.0.

## [](#prerequisites "Copy link to heading")Prerequisites

Before upgrading to a newer version of Vault Core, you should:

-   Review the [release notes](/vault-core/5-9/EN/vault_release_information) for version-specific instructions and whether you need to add new features or components before installing the new version (use the version picker in the top-right corner to select the relevant release notes).
    
-   See [Installation/upgrade and version compatibility](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility) to download the release package and check the compatibility of infrastructure components with the Vault Core version you are upgrading to.
    
-   Make sure you are on a patch release version that supports safe rollbacks. See [Rolling back Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core) for more information.
    
-   Ensure you have a backup and disaster recovery plan in place - consider using [Blue-Green mode](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core#optional_using_blue_green_mode) to ensure a safer upgrade with zero downtime.
    
-   Be on the latest minor and patch version of your current Vault Core series (if you are upgrading to a new major release).
    
-   Complete the [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) for your current Vault Core installation. This is because you cannot upgrade to a new minor or major version if the current version is still in a `FinalisationPending` state.
    

## [](#generate_and_compare_the_values_file "Copy link to heading")Generate and compare the values file

As with a fresh installation of Vault Core, you need to generate a new `values.yaml` file. Additionally, when upgrading, you also need to compare your old values file with the new one.

To upgrade an existing `values.yaml` file, use the example format found in the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#generate_the_values_file). Replace `<existing_values_file>` with the name of your old file in the argument: `[-e <existing_values_file>]`.

Run the command:

The existing overrides will be merged in to create a new values file. In this example, the new values file is called `n.n-values.yaml` - you will use it to configure your upgraded Vault Core instance.

Use a text editor to compare the contents of the old and new values.yaml files in a diff, and see what has changed. Configure anything relevant in the new values file - see the [following sections](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core#upgrading_from_a_previous_release) for version-specific configurations you may need to make.

If you are performing a major upgrade, make sure to remove any deprecated features as outlined by the release notes.

lightbulb

Leave the docstrings in the new values.yaml file - this makes it easier to check what has changed in the next Vault Core release, as you can view the diff of the files and ignore anything that has not changed.

## [](#upgrading_from_a_previous_release "Copy link to heading")Upgrading from a previous release

info

-   Upgrading from Vault Core 4.7 to 5.x involves more considerations. Refer to our specific guidance on [Upgrading to Vault Core 5](/vault-core/4-7/EN/environment_and_installation/upgrading_to_vault_5/) in the Vault Core 4.7 documentation.
    
-   In some circumstances, it is possible to return to the previously-installed version after a recent installation. However, you need to first be on a patch release version that supports safe rollbacks before upgrading to Vault Core 5.7. See: [Rolling back Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core).
    

chat\_bubble

Upgrading to a newer patch release typically only involves running the installation process with the latest release artifacts. In which case, you can go straight to [installing Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).

### [](#before_undertaking_an_upgrade "Copy link to heading")Before undertaking an upgrade

The Vault Core installation process will run a check against each database that it is configured to use before making any changes to the schema which may be required by the new release. If an invalid index, either pre-existing or newly created, is detected, the upgrade process will be stopped. Invalid database indices can result in significant performance degradation for Vault Core and should be addressed before an upgrade is attempted.

You can verify if any of your database indices are invalid by examining the `pg_index_status_indisinvalid` metric within the observability stack. If any index is invalid, follow the process under [Validating Database Indices](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices).

lightbulb

The following guidance assumes that the current running version of Vault Core is 4.5.x or higher.

Thought Machine recommends always upgrading to the latest minor and patch of each Vault Core series, before upgrading to the next series. To upgrade between minor versions of Vault Core 5.x, follow the instructions **for every version up to the one you are upgrading to**.

### [](#5_1_upgrade_instructions "Copy link to heading")5.1 upgrade instructions

chat\_bubble

Vault Core 5.1 is no longer a supported release; however, the following instructions contain upgrade information which is still relevant for clients upgrading to a version beyond 5.1.

#### [](#5_1_values_yaml "Copy link to heading")5.1 values.yaml

`bearer_auth.jwks_uri` is now deprecated in favour of using `bearer_auth.issuers` in future. Clients can continue to use `bearer_auth.jwks_uri` if they wish but from Vault Core 7.0 it will be removed from use.

The `bearer_auth.issuers` field can be used in its place - instructions have been provided in the `values.example.yaml` that will be produced for the next release with examples. Using the `issuers` field with more than one issuer will also require changes to the JWTs themselves, as documented below:

#### [](#update_authentication_to_include_the_bearer_auth_issuers_configuration "Copy link to heading")Update Authentication to Include the bearer\_auth.issuers configuration

If the client just configured one issuer, there is nothing needed extra. However, if more than one issuer is configured, the JWT payload must include "issuer" field to make sure the corresponding public key can be fetched.

#### [](#deletion_of_deprecated_vaultpermission_ids "Copy link to heading")Deletion of deprecated VaultPermission IDs

chat\_bubble

This remediation is necessary when using any of the following Vault Core version ranges (inclusive):

-   4.5.0 to 4.5.58
    
-   4.6.0 to 4.6.62
    
-   4.7.0 to 4.7.46
    
-   5.3.0 to 5.3.32
    
-   5.4.0 to 5.4.34
    
-   5.5.0 to 5.5.25
    
-   5.6.0 to 5.6.16
    
-   5.7.0 to 5.7.10
    
-   5.8.0 to 5.8.2
    

In this release, deprecated `VaultPermission` IDs with a string value of numbers below 1000 have been deleted. This makes any existing `RoleVaultPermissionAssoc` values using these deleted values invalid and will result in "Vault Permission does not exist" error when opening Operations Dashboard or using `BatchGetVaultPermissions` or `ListVaultPermissions` APIs.

This should primarily only affect the default `AdminRole` that is auto generated and added to on Vault installations, and any custom roles created via the Access Control APIs directly. Any Roles created via Operations Dashboard should not be affected as these do not include the deprecated permissions.

For all affected Roles, use the [RoleVaultPermissionAssoc APIs](/vault-core/5-9/EN/api/access_control_api#rolevaultpermissionassoc) to remediate:

1.  Use `List` (`/v1/role-vault-permission-assocs GET`) to paginate through `RoleVaultPermission` values for the `Role` in question
    
2.  Use `Delete` (`/v1/role-vault-permission-assocs DELETE`) to remove any found associations that have a `vault-permission-id` value that is below "1000" (any IDs with values "0" → "999" inclusive)
    

#### [](#original "Copy link to heading")Original

For the JWT to be accepted, the following JWT claims MUST be provided:

-   Issued at timestamp (`iat`) - the number of seconds since the Unix epoch, defining when the JWT was issued.
    
-   Expiry timestamp (`exp`) - the number of seconds since the Unix epoch, defining when the JWT expires.
    
-   Subject identifier (`sub`) - a unique identifier for the actor associated with the JWT.
    

The following claims are optional, but recommended:

-   Not before timestamp (`nbf`) - the number of seconds since the Unix epoch, defining when the JWT becomes valid.
    

#### [](#updated "Copy link to heading")Updated

For the JWT to be accepted, the following JWT claims MUST be provided:

-   Issued at timestamp (`iat`) - the number of seconds since the Unix epoch, defining when the JWT was issued.
    
-   Expiry timestamp (`exp`) - the number of seconds since the Unix epoch, defining when the JWT expires.
    
-   Subject identifier (`sub`) - a unique identifier for the actor associated with the JWT.
    

The following claim MUST be provided if there is more than one issuers configured:

-   Issuer (`iss`) - a string that identifies the principal that issued the JWT.
    

The following claims are optional, but recommended:

-   Not before timestamp (`nbf`) - the number of seconds since the Unix epoch, defining when the JWT becomes valid.
    

#### [](#payments_hub "Copy link to heading")Payments Hub

##### [](#values_yaml_updates "Copy link to heading")values.yaml updates

Users of the Payments Hub should be aware of the following values.yaml modifications in the Vault Core 5.0.0 release:

-   The value of `payments_hub.redirection_account` must be updated to be that of an Account rather than an InternalAccount. Once this change is applied, funds will be redirected to the account specified here during payment exception handling flows.
    
-   The value of `payments_hub.unapplied_funds_account` must be updated to be that of an Account rather than an InternalAccount. Once this change is applied, funds will be posted to the account specified here during payment exception handling flows (such as failed payments received when in stand-in mode).
    
-   As part of the removal of BACS capabilities from the Payments Hub the following values.yaml fields have been removed:
    
    -   bacs\_credit\_transfer\_schedule\_expression
        
    -   bacs\_direct\_debit\_schedule\_expression
        
    -   bacs\_direct\_debit\_unapplied\_account
        
    -   bacs\_direct\_debit\_unapplied\_inbound\_account
        
    -   bacs\_direct\_debit\_unapplied\_outbound\_account
        
    -   bacs\_gcp\_bucket
        
    -   bacs\_internal\_account
        
    -   bacs\_internal\_direct\_debit\_account
        
    -   bacs\_internal\_direct\_debit\_refund\_account
        
    -   bacs\_internal\_direct\_debit\_refund\_wash\_account
        
    -   bacs\_mandate\_schedule\_expression
        
    -   bacs\_unapplied\_funds\_account
        
    
-   As part of the removal of the Form3 gateway connector the following values.yaml fields have been removed:
    
    -   form3.base\_endpoint
        
    -   form3.client\_id
        
    -   form3.org\_id
        
    -   form3.payment\_actions\_topic
        
    -   form3.payment\_event\_topic
        
    -   form3.payment\_hub\_topic
        
    

##### [](#removal_of_components "Copy link to heading")Removal of components

As part of the upgrade to Vault Core 5, users of the Payments Hub must remove the following components if they have been installed previously:

-   payments-hub-bacs
    
-   payments-hub-form3
    

The following command can be used to do this: `vaultctl uninstall --context cluster_name component-**namespace**`. Please see [Installing or upgrading Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) for more information on vaultctl.

#### [](#grafana_dashboards "Copy link to heading")Grafana Dashboards

The various Grafana Dashboards that Thought Machine previously used to observe removed components, such as BACS and Form3, have also been removed in this release. These changes will automatically be applied on upgrading to the latest version of the Observability component.

#### [](#workflows "Copy link to heading")Workflows

##### [](#values_yaml_updates_2 "Copy link to heading")values.yaml updates

-   `workflow_transform_executor.step_limit` was introduced in values.yaml Workflows containing Starlark transforms are now restricted in the number of execution steps they are allowed to execute. After upgrading to Vault Core 5, if Workflows are entering technical error with the error `Starlark computation cancelled: too many steps`, then Clients will be required to remediate the issue by setting `workflow_transform_executor.step_limit` in values.yaml to a value greater than the default 1000, such that the transform is able to run without hitting the configured limit.
    

### [](#5_2_upgrade_instructions "Copy link to heading")5.2 upgrade instructions

chat\_bubble

Vault Core 5.2 is no longer a supported release.

None.

### [](#5_3_upgrade_instructions "Copy link to heading")5.3 upgrade instructions

#### [](#optional_jwt_audience_validation_support_in_values_yaml_configuration "Copy link to heading")Optional JWT Audience validation support in values.yaml configuration

From this version onwards there is **optional** support to validate the `aud` field of a JWT, which is a string value populated by clients' Identity Provider.

If not configured, validation of this field is ignored as is currently happening for versions of Vault Core and Payments before release 5.3.

-   Issuer specific configuration: `"jwt_audience"` key on each issuer object in the `bearer_auth.issuers` JSON array.
    
-   Default configuration: `bearer_auth.default_jwt_audience`
    

If clients wish to use this extra layer of security, they should ensure the configured audience string values in values.yaml match EXACTLY (no pattern matching) the string `aud` field value of the JWT given by their Identity Provider.

If multiple issuers are used to provide JWTs, then the `"jwt_audience"` config value for each matching entry in `bearer_auth.issuers` will need to be set if the Identity Provider populates the JWT `aud` value differently for each issuer.

`.bearer_auth.default_jwt_audience` is used as a fallback if the issuer specific config is not set. This is a convenience if all the JWT issuers set up by the clients Identity Provider are populating the JWT `aud` field with the same value.

#### [](#basic_authentication "Copy link to heading")Basic Authentication

`common.basic_auth`: Basic authentication now defaults to 'disable'. Please ensure you set this to 'enable' if basic authentication is still relied upon.

#### [](#observability "Copy link to heading")Observability

`observability.namespaced_prometheus.envoy`: This field has now been removed, please ensure this is removed from the values.yaml when upgrading.

#### [](#ledger "Copy link to heading")Ledger

`ledger`: This field has now been removed, please ensure this is removed from the values.yaml when upgrading.

### [](#5_4_upgrade_instructions "Copy link to heading")5.4 upgrade instructions

#### [](#new_balance_milestone_indexes "Copy link to heading")New Balance Milestone Indexes

Three new database indexes are introduced in this release to improve performance. The rest of the installation waits until the indexes are created. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production.

#### [](#new_tmcomponent_ledger_index_clean_up "Copy link to heading")New TMComponent `ledger-index-clean-up`

This component optimises database indexes for ledger services. It is a small component containing a one-off job that can be installed any time after the `vault-core` component has completed installation. Once the job has completed you can choose to uninstall the component, but this is optional.

chat\_bubble

After `ledger-index-clean-up` component is installed and the job has completed it is not possible to rollback to an earlier Vault Core version, as these versions depend on the indexes that are removed. Clients should install the component after 5.4 is running satisfactorily.

#### [](#database_index_validity "Copy link to heading")Database Index Validity

There are a number of changes to table indices in this release, some of which may take a long time to complete; if this process is interrupted for some reason, these may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

#### [](#updated_principals_in_release_json "Copy link to heading")Updated principals in release.json

This release contains updates to the services included in Vault Core. Clients who use this data, for example to configure DB access via AWS IAM or to manually configure Kafka ACLs, should make sure they make the corresponding changes.

#### [](#values_yaml_updates_3 "Copy link to heading")values.yaml Updates

`async_contract_execution.max_tps`: Due to a new postings routing architecture in this release the default value for this field has significantly increased, to 100000. Clients who currently set this value explicitly in values.yaml should remove the setting so that Vault Core uses the default, for most efficient operation.

### [](#5_5_upgrade_instructions "Copy link to heading")5.5 upgrade instructions

Rolling back from Vault Core 5.5 to 5.2 is only supported from 5.2.18 onwards. Ensure that you update to one of these patches if you want to take advantage of rollbacks.

Rolling back from Vault Core 5.5 to 5.3 is only supported from 5.3.9 onwards. Ensure that you update to one of these patches if you want to take advantage of rollbacks.

#### [](#long_running_database_migrations "Copy link to heading")Long-running database migrations

There are a number of changes to table indices, and table columns to be populated in this release, all of which are to support new functionality and improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out in the installation.

#### [](#database_index_validity_2 "Copy link to heading")Database index validity

There are a number of changes to table indices in this release, some of which may take a long time to complete, particularly in environments with a large number of postings; if this process is interrupted for any reason, these may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

#### [](#dbpool_named_prepared_statements "Copy link to heading")DBPool named prepared statements

We recommend you enable this feature after you have finished your upgrade and outside of your rollback window. You can find more information about this feature under [Using a relational database](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#support_for_named_prepared_statements).

### [](#5_6_upgrade_instructions "Copy link to heading")5.6 upgrade instructions

Before upgrading, please see [Rolling back Vault Core to an earlier version](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core) for a list of permissible rollback versions.

Rolling back from version 5.6 can cause a small number of posting requests to fail during the rollback process. These requests will succeed on a subsequent retry after the rollback has completed. The failed requests will not be committed to the database and can be resubmitted with the same request ID. Vault Core will not recognise them as duplicate requests and they will be processed as normal without triggering an indempotent response. If you are using the Streaming Posting API, you can monitor posting failures during rollback on the response topic for your Posting API Client. If you are using the Core API to submit postings, your integration will receive error responses synchronously.

#### [](#long_running_database_migrations_2 "Copy link to heading")Long-running database migrations

There are changes to table indices in this release, which are to improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out in the installation.

#### [](#database_index_validity_3 "Copy link to heading")Database index validity

There are changes to table indices in this release. Some of these may take a long time to complete, particularly in environments with a large number of postings in the postings journal table. If this process is interrupted for any reason, the indexes may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

### [](#5_7_upgrade_instructions "Copy link to heading")5.7 upgrade instructions

Before upgrading, please see [Rolling back Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core) for a list of permissible rollback versions.

### [](#5_8_upgrade_instructions "Copy link to heading")5.8 upgrade instructions

#### [](#long_running_database_migrations_3 "Copy link to heading")Long-running database migrations

This release includes changes to table indices to improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete and the TMComponent will reach `ReadinessCheckComplete`. You should monitor the duration of the step in lower environments, and contact Thought Machine for help if you experience problems when creating the indexes during installation in a production environment. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out during installation.

### [](#5_9_upgrade_instructions "Copy link to heading")5.9 upgrade instructions

#### [](#aws_secrets_manager_certificate_rotation "Copy link to heading")AWS Secrets Manager Certificate Rotation

In this release, the certificate rotation AWS role name has changed to conform with the new format for AWS role names. Therefore if you wish to enable certificate rotation on AWS Secrets Manager, you must create the new IAM role described in [Configuring certificate rotation with AWS Secrets Manager](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#configuring_certificate_rotation_with_aws_secrets_manager) to grant the necessary permissions. For more details on the new AWS role name format see: [Vault Installer role and policy](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#vault_installer_role_and_policy).

#### [](#installation_finalisation "Copy link to heading")Installation finalisation

From version 5.9 onwards, you **must** perform [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) to complete the upgrade or installation process. Finalisation affects the ability to roll back to an earlier major or minor version, and so should only be performed after validating the installation.

The time it takes for finalisation to complete depends on the state of the background Scheduler Migrator job - see below.

#### [](#new_scheduler_migrator_job "Copy link to heading")New Scheduler Migrator job

If you are upgrading from a version before 5.9 and therefore running the finalisation step for the first time, check that the Scheduler Migrator job has completed - see the **\[Scheduling\] Scheduler Migrator** [dashboard](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#core) under `/dashboards/scheduler/` in Grafana. This job runs automatically in the background when you install Vault Core, and it transforms existing data into the new optimised database schema for 5.9. If the job has not completed, you can still run finalisation safely, but it may take longer than expected.

The duration of the finalisation step varies depending on the state of the Scheduler Migrator job:

-   If you run finalisation after the scheduler migration has finished, it typically takes 5-10 minutes.
    
-   If you run finalisation immediately after installation, it may take several hours. This is because the finalisation process must wait for the background scheduler migration to complete before it can finish.
    

Running finalisation completes the migration of existing data into the newer, optimised database schema. The [Scheduler](/vault-core/5-9/EN/reference/scheduler) then automatically switches to the optimised data schema as the new source of truth.

#### [](#removed_tmcomponent_ledger_index_clean_up "Copy link to heading")Removed TMComponent `ledger-index-clean-up`

The `ledger-index-clean-up` component no longer exists in the 5.9 release, because it is now part of the finalisation stage of the `vault-core` component. After upgrading to version 5.9 the old `ledger-index-clean-up` component can safely be uninstalled. If you have a pipeline that installs this component automatically, you should update it accordingly.

## [](#performing_the_upgrade "Copy link to heading")Performing the upgrade

To upgrade a Vault Core environment, follow the steps as a first-time installation in the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault). As with first-time installations, you will use the [TMComponent Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#tmcomponent_operator) to carry out the upgrade and apply new configuration and version changes.

For additional support on checking and upgrading the values.yaml configuration file, see [Generate the values file](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#generate_the_values_file).

## [](#checking_the_upgrade "Copy link to heading")Checking the upgrade

After the upgrade, validate the system’s health and monitor for any issues using the Vault Core Operations Dashboard or your [Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#checking_your_observability_stack_installation).

## [](#optional_using_blue_green_mode "Copy link to heading")Optional: Using Blue-Green mode

For a safer, more controlled upgrade process with zero downtime, consider using [Blue-Green mode](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green) when upgrading Vault Core.

This deployment mode involves running an active and passive environment in parallel with each other, connected to the same database and Kafka infrastructure. You upgrade the passive environment while the active environment continues to serve live traffic. Once you have validated the upgraded environment, you can switch over to the new environment.

chat\_bubble

Blue-Green mode is only available from Vault Core 5.3 onwards - you cannot use Blue-Green mode when upgrading from 4.7 to 5.x. Both the active and passive environments must use the same database and Kafka cluster.