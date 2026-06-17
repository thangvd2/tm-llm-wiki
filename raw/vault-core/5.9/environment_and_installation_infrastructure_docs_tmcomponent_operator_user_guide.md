---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide"
title: "Installing Vault Core"
scraped_at: "2026-06-17T04:58:35.824Z"
images: 0
---

# Installing Vault Core

[

build Deployment tools and resources

Guide to the tools and release artifacts used for deploying Vault Core



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools)

[

checklist Before you start

Checklist of pre-installation tasks to complete



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start)

[

developer\_guide Installation guide

Guide to first-time installations and existing upgrades of Vault Core



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault)

[

view\_list Available values configuration options

List of available configurations for the values.yaml file



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/available_values_configuration)

[

home\_repair\_service Next steps

Steps to carry out to ensure you can run Vault Core in production



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/next_steps)

[

construction Troubleshooting

Monitoring the progress and health of your Vault Core deployment



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/troubleshooting)

## [](#upgrades_and_rollbacks "Copy link to heading")Upgrades and rollbacks

If you have an existing Vault Core deployment, you may be planning to upgrade to a newer release. See the following guides for information:

[

upgrade Upgrading Vault Core

How to upgrade to a new Vault Core release



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core)

[

history Rolling back Vault Core

Guide to safely rolling back to an earlier Vault Core version



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core)

## [](#other_deployment_modes "Copy link to heading")Other deployment modes

A standard deployment involves running Vault Core in a single environment (a single Kubernetes namespace) in a single region. However, you also have the option to deploy a Vault Core instance across multiple environments or regions.

If you are performing an upgrade or looking to improve the resilience of your system, consider these alternative deployment options:

[

backup\_table Blue-Green mode

Provides additional control and reduced risk during Vault Core upgrades



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green)

[

backup\_table Active-Passive mode

Enables a failover strategy in the event of a regional outage



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/active_passive)

[

folder\_shared Shared secrets access

Required for both Blue-Green and Active-Passive modes



](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/shared_secrets_access)

chat\_bubble

For information about running Vault Core with multiple databases, see [Configuring multiple databases](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases). Contact your Thought Machine representative if you are considering this deployment mode.