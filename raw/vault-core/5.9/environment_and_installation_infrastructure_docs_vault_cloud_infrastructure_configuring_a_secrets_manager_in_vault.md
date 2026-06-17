---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault"
title: "Configuring a secrets manager in Vault Core"
scraped_at: "2026-06-17T04:57:52.711Z"
images: 0
---

# Configuring a secrets manager in Vault Core

Bank-hosted

You must use and configure a secrets manager with Vault Core - only one per Vault Core instance - and first address a number of prerequisites before you do.

Vault Core comes with support for HashiCorp Vault (all active Vault Core versions), AWS Secrets Manager (from Vault Core 4.6 onwards), and Microsoft Azure Key Vault (from Vault Core 5.2 onwards).

In scope:

-   The life cycle of secrets for Thought Machine Vault Core.
    

Out of scope:

-   Information about how to deploy and set up HashiCorp Vault. Clients must already have knowledge about the configuration of their secrets manager and its maintenance, and any additional requirements. For example, knowledge of the required Kubernetes Secrets Store CSI drivers for AWS Secrets Manager and Microsoft Azure Key Vault for clients that wish to use one of these secrets managers instead of HashiCorp Vault.
    
-   Guidance on how to create the secret that clients must provide.
    

## [](#how_the_applications_generate_and_manage_secrets_for_vault_core "Copy link to heading")How the applications generate and manage secrets for Vault Core

During the installation of Vault Core, the Thought Machine Vault Installer generates and stores all secrets (except those that clients must provide) in the target secrets manager.

The Vault Installer also creates the roles and policies in either HashiCorp Vault or AWS IAM that Vault Core services need to retrieve their secrets. The Vault Installer leverages the admin role that a client creates in HashiCorp Vault or AWS IAM, and also uses it with release artefacts.

This process occurs during the initial installation and with any future upgrades of Vault Core.

## [](#sharing_hashicorp_vault_secrets_between_multiple_vault_core_deployments_on_separate_kubernetes_clusters "Copy link to heading")Sharing HashiCorp Vault secrets between multiple Vault Core deployments on separate Kubernetes clusters

If you plan to install multiple Vault Core instances on separate Kubernetes clusters, you can use a single HashiCorp Vault deployment to store and share secrets between the instances.

This guidance does not supersede the standard installation guidance for Vault Core, the Observability Stack and the associated components, but instead extends it. You should read it in conjunction with the guidance for setting up HashiCorp Vault within this guide.

Take the following steps:

1.  Configure all Vault Core instances to use the same HashiCorp Vault instance. You do this by setting the same values for the following configuration entries on all instances of Vault Core:
    
    -   `secrets_management.hashicorp_vault.address`
        
    -   `secrets_management.hashicorp_vault.secret_prefix`
        
    

2.  Configure each Vault Core instance to use a different auth backend, by setting different values for `secrets_management.hashicorp_vault.auth_k8s_backend`.
    
3.  On your HashiCorp Vault instance, mount the same number of Kubernetes-type authentication backends as the number of Vault Core instances that you configured in steps 1 and 2. Make sure that you set the `auth_k8s_backend` values to the paths where you have mounted the backends.
    
    For example: `vault auth enable -path=$MY_PATH kubernetes`
    
4.  Make sure that you configure each mounted HashiCorp Vault authentication backend separately. Ensure that each backend has access to the corresponding Kubernetes cluster.
    
5.  As described in the Vault Core installation documentation ([Installing Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide)), a role and policy must exist in HashiCorp Vault that grants sufficient privileges to allow the Vault Core installation process to push secrets, policies and roles. This is true for each pair of Vault Core instances and their corresponding HashiCorp Vault backends.
    

chat\_bubble

The policy references the authentication backend. You must modify the policy for each authentication backend.

## [](#types_of_secrets_and_who_provides_them "Copy link to heading")Types of secrets and who provides them

Clients must provide the following secrets:

-   Database Admin user password
    
    Thought Machine Vault Core database administrator applications use this password to create logical databases as part of the installation process. It derives other users and permissions that Thought Machine Vault Core services use to connect to their appropriate database.
    
-   Kafka Certificate Authority (CA) and key
    
    You only require this type of secret when choosing to set up Kafka mTLS without PKI (Public Key Infrastructure). The Vault Installer requires this secret to sign client certificates for Thought Machine services that use Kafka.
    
-   Observability secrets
    
    You must set the values required for your observability configuration and secrets manager configuration in `values.yaml`, and add secrets to your secrets manager. This includes your Grafana admin account password (for monitoring metrics and dashboards in Grafana) and optional Slack Incoming Webhook (to send alerts from Alertmanager to Slack). For more information, see [Configuring the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#configuring_the_observability_stack) in the [Setting up the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack). It contains general information, including an example for HashiCorp Vault.
    

chat\_bubble

Vault Core comes with support for HashiCorp Vault (all active Vault Core versions), AWS Secrets Manager (from Vault Core 4.6 onwards), and Microsoft Azure Key Vault (from Vault Core 5.2 onwards).

The Thought Machine Vault Installer generates the following secrets:

-   Thought Machine Vault Core services database password
    
    The Vault Installer generates a password for each user that the Vault Core services need to deploy. The secrets manager stores the passwords in an appropriate location, from which the Vault Core services retrieve the passwords during bootstrapping.
    
-   Kafka client certificates
    
    Thought Machine Vault Core services only use these secrets when you choose to configure Kafka connections to use mTLS (encryption plus authentication).
    

## [](#how_secrets_are_retrieved_for_thought_machine_vault_core_services "Copy link to heading")How secrets are retrieved for Thought Machine Vault Core services

The method that Vault Core uses to retrieve secrets for its services from the secrets manager depends on the secrets manager that a client has configured.

### [](#when_hashicorp_vault_is_the_secrets_manager "Copy link to heading")When HashiCorp Vault is the secrets manager

During their startup process init containers in each Vault Core services Kubernetes pod retrieve their secrets from the configured target HashiCorp Vault. They mount the secrets for use by the main application container which, in turn, starts up after its init container retrieves these secrets.

This means that when all Vault Core services are up and running, there are no connections to HashiCorp Vault. However, if the services restart for any reason, the init containers retrieve the secrets again as part of the new pod creation process. Services only have access to their secret in the client’s HashiCorp Vault and only retrieve secrets on startup.

### [](#when_aws_secrets_manager_or_microsoft_azure_key_vault_is_the_secrets_manager "Copy link to heading")When AWS Secrets Manager or Microsoft Azure Key Vault is the secrets manager

Vault Core leverages the [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/introduction.html). This daemonset is responsible for fetching the required secrets each pod needs and mounting them in the correct place. No pod other than the Vault Installer/TMComponent Operator makes a connection to the AWS Secrets Manager directly.

#### [](#hashicorp_vault_secrets_engines_in_support "Copy link to heading")HashiCorp Vault secrets engines in support

-   *KV*: The Key-Value (KV) secrets engine can store the secrets that a client provides and the secrets that the Thought Machine Vault Installer generates. The [Certified Environments matrix](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) lists the KV versions we support.
    
-   *PKI*: The Public Key Infrastructure (PKI) secrets engine can sign Kafka client services when configuring Kafka in mTLS mode.
    

Vault Core uses HashiCorp Vault 2 by default. However, you can use HashiCorp Version 1 by using the following:

`vault secrets disable secret`

`vault secrets enable -version=1 -path=/secret kv`

##### [](#enabling_the_kv_secrets_engine "Copy link to heading")Enabling the KV secrets engine

Some versions of HashiCorp Vault require you explicitly specify the version of the KV secrets engine when you enable it. For this reason, Thought Machine recommends that you specify the version; otherwise, Vault might default to a different version to the version that you were expecting.

Run the following CLI command to enable the KV secrets engine of HashiCorp Vault:

##### [](#enabling_the_pki_secrets_engine_optional "Copy link to heading")Enabling the PKI secrets engine (optional)

Vault Core can use the PKI to sign certificates without exposing the private key of the Certificate Authority (CA).

chat\_bubble

Enabling the PKI secrets engine is optional. You should only proceed with the following steps if you want to enable it.

Run this command to enable the PKI secrets engine:

Create a role named `vault-installer`. It must allow any name and must not enforce hostnames. Set the time-to-live (TTL) based on how frequently you plan to rotate certificates.

chat\_bubble

If you are using HashiCorp Vault version 1.21 or any version above 1.21, you will need to add the audience field to the vault-installer role and this will need to explicitly be set to `hashicorp-vault`. You will need to be on one of the following Vault Core versions or above: 5.8.7, 5.7.15, 5.6.21, 5.5.30, 5.4.39, 5.3.37, 4.7.51 or 4.6.67. An example of adding the audience field can be seen below.

Configure a CA certificate and private key. HashiCorp Vault can accept an existing key pair or it can generate its own self-signed root certificate. You can find instructions about how to add a CA on the HashiCorp website.