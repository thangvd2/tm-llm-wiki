---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/installationupgrade_and_version_compatibility"
title: "Installation/upgrade and version compatibility"
scraped_at: "2026-06-17T15:35:46.516Z"
images: 0
---

# Installation/upgrade and version compatibility

## [](#vault_release_artifacts "Copy link to heading")Vault Release Artifacts

No releases available. You may not have permissions to download release artifacts.

## [](#installing_this_release_as_your_first_version "Copy link to heading")Installing this release as your first version

If this is your first version of Vault, see the [Getting Started with Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core) section for more information.

## [](#upgrading_from_a_previous_release "Copy link to heading")Upgrading from a previous release

info

-   If you are upgrading to Vault Core 5.X, please see [Upgrading to Vault Core 5](/vault-core/4-7/EN/environment_and_installation/upgrading_to_vault_5/) in the Vault Core 4.7 documentation.
    
-   In some circumstances, it is possible to return to the previously-installed version after a recent installation. However, you need to first be on a patch release version that supports safe rollbacks, before upgrading to Vault Core 5.7. See: [Rolling back Vault Core to an earlier version](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator#rolling_back_vault_core_to_an_earlier_version).
    

### [](#before_undertaking_an_upgrade "Copy link to heading")Before undertaking an upgrade

The Vault Core installation process will run a check against each database that it is configured to use before making any changes to the schema which may be required by the new release. If an invalid index, either pre-existing or newly created, is detected, the upgrade process will be stopped. Invalid database indices can result in significant performance degradation for Vault Core and should be addressed before an upgrade is attempted.

You can verify if any of your database indices are invalid by examining the `pg_index_status_indisinvalid` metric within the observability stack. If any index is invalid, follow the process under [Validating Database Indices](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices).

### [](#starting_vault_core_version "Copy link to heading")Starting Vault Core version

This guidance assumes that the current running version of Vault Core is 4.5.x or higher.

Thought Machine recommends always upgrading to the latest minor and patch of each Vault Core series, before upgrading to the next series.

#### [](#5_1_upgrade_instructions "Copy link to heading")5.1 upgrade instructions

chat\_bubble

Vault Core 5.1 is no longer a supported release; however the following instructions contain upgrade information which is still relevant for clients upgrading to a version beyond 5.1.

##### [](#5_1_values_yaml "Copy link to heading")5.1 values.yaml

`bearer_auth.jwks_uri` is now deprecated in favour of using `bearer_auth.issuers` in future. Clients can continue to use `bearer_auth.jwks_uri` if they wish but from Vault Core 7.0 it will be removed from use.

The `bearer_auth.issuers` field can be used in its place - instructions have been provided in the `values.example.yaml` that will be produced for the next release with examples. Using the `issuers` field with more than one issuer will also require changes to the JWTs themselves, as documented below:

##### [](#update_authentication_to_include_the_bearer_auth_issuers_configuration "Copy link to heading")Update Authentication to Include the bearer\_auth.issuers configuration

If the client just configured one issuer, there is nothing needed extra. However, if more than one issuer is configured, the jwt payload must include "issuer" field to make sure the corresponding public key can be fetched.

##### [](#deletion_of_deprecated_vaultpermission_ids "Copy link to heading")Deletion of deprecated VaultPermission IDs

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

For all affected Roles, use the [RoleVaultPermissionAssoc APIs](/vault-core/5-8/EN/api/access_control_api#rolevaultpermissionassoc) to remediate:

1.  Use `List` (`/v1/role-vault-permission-assocs GET`) to paginate through `RoleVaultPermission` values for the `Role` in question
    
2.  Use `Delete` (`/v1/role-vault-permission-assocs DELETE`) to remove any found associations that have a `vault-permission-id` value that is below "1000" i.e. Any IDs with values "0" → "999" inclusive.
    

##### [](#original "Copy link to heading")Original

For the JWT to be accepted, the following JWT claims MUST be provided:

-   Issued at timestamp (`iat`) - the number of seconds since the Unix epoch, defining when the JWT was issued.
    
-   Expiry timestamp (`exp`) - the number of seconds since the Unix epoch, defining when the JWT expires.
    
-   Subject identifier (`sub`) - a unique identifier for the actor associated with the JWT.
    

The following claims are optional, but recommended:

-   Not before timestamp (`nbf`) - the number of seconds since the Unix epoch, defining when the JWT becomes valid.
    

##### [](#updated "Copy link to heading")Updated

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
    

The following command can be used to do this: `vaultctl uninstall --context cluster_name component-**namespace**`. Please see [Installing or upgrading Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) for more information on vaultctl.

##### [](#grafana_dashboards "Copy link to heading")Grafana Dashboards

The various Grafana Dashboards that Thought Machine previously used to observe removed components, such as BACS and Form3, have also been removed in this release. These changes will automatically be applied on upgrading to the latest version of the Observability component.

#### [](#workflows "Copy link to heading")Workflows

##### [](#values_yaml_updates_2 "Copy link to heading")values.yaml updates

-   `workflow_transform_executor.step_limit` was introduced in values.yaml Workflows containing Starlark transforms are now restricted in the number of execution steps they are allowed to execute. After upgrading to Vault Core 5, if Workflows are entering technical error with the error `Starlark computation cancelled: too many steps`, then Clients will be required to remediate the issue by setting `workflow_transform_executor.step_limit` in values.yaml to a value greater than the default 1000, such that the transform is able to run without hitting the configured limit.
    

#### [](#5_2_upgrade_instructions "Copy link to heading")5.2 upgrade instructions

None.

#### [](#5_3_upgrade_instructions "Copy link to heading")5.3 upgrade instructions

##### [](#optional_jwt_audience_validation_support_in_values_yaml_configuration "Copy link to heading")Optional JWT Audience validation support in values.yaml configuration

From this version onwards there is **optional** support to validate the `aud` field of a JWT, which is a string value populated by clients' Identity Provider.

If not configured, validation of this field is ignored as is currently happening for versions of Vault Core and Payments before release 5.3.

-   Issuer specific configuration: `"jwt_audience"` key on each issuer object in the `bearer_auth.issuers` JSON array.
    
-   Default configuration: `bearer_auth.default_jwt_audience`
    

If clients wish to use this extra layer of security, they should ensure the configured audience string values in values.yaml match EXACTLY (no pattern matching) the string `aud` field value of the JWT given by their Identity Provider.

If multiple issuers are used to provide JWTs, then the `"jwt_audience"` config value for each matching entry in `bearer_auth.issuers` will need to be set if the Identity Provider populates the JWT `aud` value differently for each issuer.

`.bearer_auth.default_jwt_audience` is used as a fallback if the issuer specific config is not set. This is a convenience if all the JWT issuers set up by the clients Identity Provider are populating the JWT `aud` field with the same value.

##### [](#basic_authentication "Copy link to heading")Basic Authentication

`common.basic_auth`: Basic authentication now defaults to 'disable'. Please ensure you set this to 'enable' if basic authentication is still relied upon.

##### [](#observability "Copy link to heading")Observability

`observability.namespaced_prometheus.envoy`: This field has now been removed, please ensure this is removed from the values.yaml when upgrading.

##### [](#ledger "Copy link to heading")Ledger

`ledger`: This field has now been removed, please ensure this is removed from the values.yaml when upgrading.

#### [](#5_4_upgrade_instructions "Copy link to heading")5.4 upgrade instructions

##### [](#new_balance_milestone_indexes "Copy link to heading")New Balance Milestone Indexes

Three new database indexes are introduced in this release to improve performance. The rest of the installation waits until the indexes are created. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production.

##### [](#new_tmcomponent_ledger_index_clean_up "Copy link to heading")New TMComponent `ledger-index-clean-up`

This component optimises database indexes for ledger services. It is a small component containing a one-off job that can be installed any time after the `vault-core` component has completed installation. Once the job has completed you can choose to uninstall the component, but this is optional.

chat\_bubble

After `ledger-index-clean-up` component is installed and the job has completed it is not possible to rollback to an earlier Vault Core version, as these versions depend on the indexes that are removed. Clients should install the component after 5.4 is running satisfactorily.

##### [](#database_index_validity "Copy link to heading")Database Index Validity

There are a number of changes to table indices in this release, some of which may take a long time to complete; if this process is interrupted for some reason, these may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

##### [](#updated_principals_in_release_json "Copy link to heading")Updated principals in release.json

This release contains updates to the services included in Vault Core. Clients who use this data, for example to configure DB access via AWS IAM or to manually configure Kafka ACLs, should make sure they make the corresponding changes.

##### [](#values_yaml_updates_3 "Copy link to heading")values.yaml Updates

`async_contract_execution.max_tps`: Due to a new postings routing architecture in this release the default value for this field has significantly increased, to 100000. Clients who currently set this value explicitly in values.yaml should remove the setting so that Vault Core uses the default, for most efficient operation.

#### [](#5_5_upgrade_instructions "Copy link to heading")5.5 upgrade instructions

Rolling back from Vault Core 5.5 to 5.2 is only supported from 5.2.18 onwards. Ensure that you update to one of these patches if you want to take advantage of rollbacks.

Rolling back from Vault Core 5.5 to 5.3 is only supported from 5.3.9 onwards. Ensure that you update to one of these patches if you want to take advantage of rollbacks.

##### [](#long_running_database_migrations "Copy link to heading")Long-running database migrations

There are a number of changes to table indices, and table columns to be populated in this release, all of which are to support new functionality and improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out in the installation.

##### [](#database_index_validity_2 "Copy link to heading")Database index validity

There are a number of changes to table indices in this release, some of which may take a long time to complete, particularly in environments with a large number of postings; if this process is interrupted for any reason, these may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

#### [](#dbpool_named_prepared_statements "Copy link to heading")DBPool named prepared statements

We recommend you enable this feature after you have finished your upgrade and outside of your rollback window. You can find more information about this feature under [Using a relational database](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#support_for_named_prepared_statements).

#### [](#5_6_upgrade_instructions "Copy link to heading")5.6 upgrade instructions

Before upgrading, please see [Rolling back Vault Core to an earlier version](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator#rolling_back_vault_core_to_an_earlier_version) for a list of permissible rollback versions.

Rolling back from version 5.6 can cause a small number of posting requests to fail during the rollback process. These requests will succeed on a subsequent retry after the rollback has completed. The failed requests will not be committed to the database and can be resubmitted with the same request ID. Vault Core will not recognise them as duplicate requests and they will be processed as normal without triggering an indempotent response. If you are using the Streaming Posting API, you can monitor posting failures during rollback on the response topic for your Posting API Client. If you are using the Core API to submit postings, your integration will receive error responses synchronously.

##### [](#long_running_database_migrations_2 "Copy link to heading")Long-running database migrations

There are changes to table indices in this release, which are to improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete - the TMComponent will reach `ReadinessCheckComplete`. Thought Machine recommends that clients monitor the duration of the step in lower environments and contact Thought Machine for advice if problems are foreseen creating the indexes during installation in Production. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out in the installation.

##### [](#database_index_validity_3 "Copy link to heading")Database index validity

There are changes to table indices in this release. Some of these may take a long time to complete, particularly in environments with a large number of postings in the postings journal table. If this process is interrupted for any reason, the indexes may be left in an invalid state, resulting in performance degradation. On completion of the upgrade process, we recommend that index validity is checked. The procedure for doing so is documented under [Validating Database Indices](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#validating_database_indices) in the documentation.

#### [](#5_7_upgrade_instructions "Copy link to heading")5.7 upgrade instructions

Before upgrading, please see [Rolling back Vault Core to an earlier version](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator#rolling_back_vault_core_to_an_earlier_version) for a list of permissible rollback versions.

#### [](#5_8_upgrade_instructions "Copy link to heading")5.8 upgrade instructions

##### [](#long_running_database_migrations_3 "Copy link to heading")Long-running database migrations

This release includes changes to table indices to improve performance. In environments with a large number of postings this may cause `vaultctl` to time out at the `install vault-core` step, though the installation will still complete and the TMComponent will reach `ReadinessCheckComplete`. You should monitor the duration of the step in lower environments, and contact Thought Machine for help if you experience problems when creating the indexes during installation in a production environment. We also recommend clients use `vaultctl --wait-time` to stop `vaultctl` from timing out during installation.

## [](#certified_environment_matrix_for_vault "Copy link to heading")Certified Environment matrix for Vault

Use the Certified Environment (CE) matrix to check the compatibility of your infrastructure against the environments that we have certified. It lists the different versions of the components we support for use with the different release versions of Vault.

The Vault versions are stated in the column headings.

### [](#hashicorp_vault "Copy link to heading")HashiCorp Vault

warning

Whilst compatible with some Vault Core versions (see table below), HashiCorp Vault Version 1.20 [contains a bug](https://github.com/hashicorp/vault/issues/31125) in some patch versions.

The issue manifests when using a GCS bucket storage backend with High Availability (HA) mode enabled. If you use this configuration, **do not** use HashiCorp Vault 1.20.X unless it contains a fix to this bug.

warning

HashiCorp Vault version 1.21 and any version above 1.21 require an audience field to be added to the vault-installer role.

If you are planning on using any HashiCorp Vault versions above 1.21, you will have to ensure that this field has been added, specifically with the value of "hashicorp-vault".

You will also need to be on one of the following Vault Core patch versions or above: 5.8.7, 5.7.15, 5.6.21, 5.5.30, 5.4.39, 5.3.37, 4.7.51 or 4.6.67.

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.16

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.17

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.18

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.19

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.20

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#istio "Copy link to heading")Istio

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.22

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.23

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

1.24

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.25

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.26

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.27

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.28

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.29

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#kafka "Copy link to heading")Kafka

          
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7.0-2 | 5.7.3+ | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
3.3

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.4

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.5

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.6

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.7

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

3.8

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

3.9

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.0

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.1

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✓

 |

### [](#kubernetes "Copy link to heading")Kubernetes

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.27

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.28

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.29

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.30

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.31

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

1.32

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.33

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.34

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.35

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#openshift "Copy link to heading")Openshift

warning

OpenShift 4.19, when deployed with Istio’s install-cni plugin, has a [known bug](https://access.redhat.com/solutions/7129484) which prevents the successful installation of Vault Core.

To address this bug, a mitigation has been included in the following Vault Core patch releases - as a result, OpenShift 4.19 must **only** be used with these Vault Core versions or above:

-   4.6.58
    
-   4.7.42
    
-   5.3.28
    
-   5.4.30
    
-   5.5.21
    
-   5.6.13
    
-   5.7.6
    
-   5.8.0
    

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
4.16

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

4.17

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

4.18

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

4.19

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.20

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#postgres "Copy link to heading")Postgres

         
| Versions | 4.6.14+ | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
12

 | 

✓

 | 

✓

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

13

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

14

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

15

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

16

 | 

?

 | 

?

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

17

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

18

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

✓

 |

### [](#legend "Copy link to heading")Legend

  
| Icon | Status | Description |
| --- | --- | --- |
| 
✓

 | 

Supported

 | 

Vault has been actively tested and certified against this version

 |
| 

?

 | 

Unknown

 | 

Vault should work but we did not actively test or certify it against this version

 |
| 

✗

 | 

Unsupported

 | 

Vault is not compatible with this version

 |

### [](#minimum_required_container_runtime "Copy link to heading")Minimum required container runtime

From Vault 3.0, all Vault containers use a base image that is upgraded to use Alpine 3.14. Alpine Linux 3.14 has a minimum requirement of one of the following container runtimes:

-   Docker 20.10.0 and libseccomp 2.4.4
    
-   containerd.io 1.4.3-2