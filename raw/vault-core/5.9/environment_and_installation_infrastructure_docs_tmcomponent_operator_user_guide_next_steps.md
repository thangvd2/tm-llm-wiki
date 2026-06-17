---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/next_steps"
title: "Next steps"
scraped_at: "2026-06-17T04:58:43.911Z"
images: 0
---

# Next steps

Bank-hosted

Once you have completed a first-time installation of Vault Core, you will need to perform some steps to begin using its functionality and features.

This guide goes through the activities to carry out after installing Vault Core for the first time, as well as any further considerations you may need to make to ensure you can run it in production.

## [](#federated_login_to_operations_dashboard "Copy link to heading")Federated login to Operations Dashboard

chat\_bubble

The Operations Dashboard is intended for development and demonstration purposes and is not recommended for production-scale operations.

The Operations Dashboard allows user login via a client-provided SAML identity provider. See [Setting up and configuring Vault with a SAML IdP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp) for recommended configuration and examples, as well as information about the dummy SAML provider that is intended for demo and development purposes.

Use the `values.yaml` file to localise the Operations Dashboard user interface.

Permissions are assigned to roles via API using Access Control endpoints or interactively via the Operations Dashboard **Organisation Admin** pages.

## [](#api_authentication "Copy link to heading")API authentication

error

Do not delete the default service account token from the secret store, otherwise services such as the Operations Dashboard, Workflows, and the Configuration Layer Utility (CLU) will stop working.

The legacy method to access Vault Core APIs uses a Service Account Token which is provided via a request header. There is a default service account token (available as a secret under the key `vault-auth-default-service-account`) which you can use with API calls to create other tokens, including those with more restricted permissions. You can also configure tokens using the Operations Dashboard **Service accounts** subsection, under **Organisation Admin**.

Vault Core is moving towards a JSON web token (JWT) based authorisation scheme that relies on requests being associated with a JWT created outside Vault Core, via an identity service. This is documented in [API overview](/vault-core/5-9/EN/api/overview#overview). Service Account authentication will be supported at least until the end of the Vault 6.x releases. If you are a new user, consider starting with JWT authentication rather than using Service Account Tokens.

## [](#loading_resources_into_vault_core "Copy link to heading")Loading resources into Vault Core

You can use the Configuration Layer Utility (CLU) to load resources that define organisation and account behaviour in Vault Core, such as Smart Contracts, Flag Definitions, and Global Parameters.

This involves taking taking resource definitions from files and using Vault Core APIs to register new content in Vault Core. See [Configuration Layer Utility User Guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide) for guidance.

## [](#migrating_to_vault_core "Copy link to heading")Migrating to Vault Core

If you are migrating data from a legacy banking system into Vault Core, see [Migrating data to Vault](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault) for information.

In addition, the [Vault Core Migrations - Data Dictionary](/vault-core/5-9/EN/resources/migrations-data-dictionary.zip) describes the validation requirements for all API fields when sent to the [Data Loader API](/vault-core/5-9/EN/api/data_loader_api/) or [Posting Migration API](/vault-core/5-9/EN/api/postings_api#posting_migration_api). You can also use these APIs to bulk-load data for testing purposes.

## [](#planning_for_disaster_recovery "Copy link to heading")Planning for disaster recovery

It is worth planning for disaster recovery to ensure resilience and business continuity in the event of an outage or disruption. See [Vault Disaster Recovery](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery) for guidance on recovering data from a database backup, as well as how to use Thought Machine’s Disaster Recovery Operator.

## [](#other_deployment_modes "Copy link to heading")Other deployment modes

The standard deployment mode involves running Vault Core in a single environment (a single Kubernetes namespace) in a single region. However, you have the option to deploy a Vault Core instance across multiple environments or regions:

### [](#blue_green "Copy link to heading")Blue-Green

[Blue-Green](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green) is a deployment strategy that provides additional control during Vault Core upgrades. This allows for gradual testing and faster rollbacks, both of which reduce deployment risk. In this mode, databases and Kafka are shared between the two Vault Core environments in a single region, and the installations can be on the same or different Kubernetes clusters.

Blue-Green is useful for:

-   Testing an upgrade to a new minor/patch version of Vault Core
    
-   Migrating a Vault Core installation from one Kubernetes cluster to another with zero downtime
    

### [](#active_passive "Copy link to heading")Active-Passive

[Active-Passive](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/active_passive) is a failover strategy for improving the resiliency of a system in the event of an environment outage. It involves running two Vault Core installations, with the database in the passive environment being a read-only, standby database replicating from the active environment. In Active-Passive mode, the Kafka clusters may be standalone or the passive one could replicate from the active one.

Active-Passive is useful for:

-   Multi-region Disaster Recovery: You can perform a failover to another region in the case of a regional outage with a better recovery time objective and recovery point objective than a snapshot restoration approach
    
-   Serving API read operations from a location closer to some of the Vault Core API clients
    

Both deployment modes help mitigate upgrade or regional outage risks but come at the expense of additional hosting cost and complexity.