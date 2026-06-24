---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure"
title: "Configuring cloud infrastructure"
scraped_at: "2026-06-17T15:35:56.681Z"
images: 0
---

# Configuring cloud infrastructure

These guides describe how to deploy the infrastructure required for a Vault Core release.

To install and configure Vault Core components, you will use the TMComponent Operator shipped with Vault Core - refer to the [TMComponent Operator guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide) for more information.

Before following the instructions to install each component, use the [Certified Environment matrix](/vault-core/5-8/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) to check that Vault Core supports the version of the component you are using.

## [](#required_components "Copy link to heading")Required components

The following components are [requirements](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements) you must set up before installing Vault Core:

[

deployed\_code Configuring Kubernetes in Vault Core

How to deploy a Kubernetes cluster



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kubernetes_in_vault)

[

deployed\_code Configuring Istio service mesh with Vault Core

Installing Istio with the Vault Core release or as a standalone release



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault)

[

deployed\_code Configuring Kafka

Setting up a Kafka cluster and configuring Vault Core to use a Kafka broker



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault)

[

database Configuring a relational database

How to configure settings for PostgreSQL or Cloud SQL



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database)

[

security\_key Configuring a secrets manager

How Vault Core handles the life cycle of secrets



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault)

[

security\_key Configuring Hashicorp Vault secrets manager

Available across all Vault Core versions



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager)

[

security\_key Configuring Vault Core with AWS Secrets Manager

Available from Vault Core 4.6 and above



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager)

[

security\_key Configuring Vault Core with Azure Key Vault

Available from Vault Core 5.2 and above



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault)

lightbulb

For instructions on configuring the Observability Stack, see [Setting up the Observability Stack](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack).

## [](#further_considerations "Copy link to heading")Further considerations

You may need to follow some extra steps during setup - for example, if you need to make further configurations to particular components, or if you are running Vault Core with multiple physical databases:

[

database\_upload Configuring multiple databases

How to run Vault Core with two or more physical databases



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases)

[

webhook Configuring webhook ports to allow the Kubernetes API

How to add ingress rules in your firewall



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_webhook_ports_to_allow_the_kubernetes_api)

[

arrow\_insert Case Study: Using the Istio Ingress Gateway with Vault Core

Example of integrating the Ingress Controller into Istio



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/case_study_using_the_istio_ingress_gateway_with_vault_core)

[

password Configuring PostgreSQL with SCRAM-SHA-256 password hash

Tutorial for the SCRAM-SHA-256 password hashing method for PostgreSQL



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash)

[

remove Removing Istio control planes

Only applicable when using Thought Machine-shipped Istio



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/removing_istio_control_planes)

[

account\_balance Configuring Service Accounts

Only applicable when using the FPS payment scheme via the Payments Hub



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_service_accounts)

[

checkbook Using a large ledger cache

Not available in Vault Core versions 5.7 and above



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_large_ledger_cache)