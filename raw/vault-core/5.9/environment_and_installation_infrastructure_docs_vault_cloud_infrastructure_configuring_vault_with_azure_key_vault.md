---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault"
title: "Configuring Vault Core with Microsoft Azure Key Vault"
scraped_at: "2026-06-17T04:57:58.387Z"
images: 0
---

# Configuring Vault Core with Microsoft Azure Key Vault

Bank-hosted

It is possible to optionally configure Vault Core to use Microsoft Azure Key Vault (AKV) as the secret store to hold all application secrets that it requires, instead of HashiCorp Vault. This option is available from Vault Core 5.2.

This requires you to use the [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/), which is the component that interacts with AKV via [Azure Key Vault Provider](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/). Vault Core creates secrets in AKV during installation and the relevant Azure resources that allow the pods to retrieve the secrets that they need to function.

## [](#prerequisites "Copy link to heading")Prerequisites

We expect users of this guide to have operational awareness of using Microsoft Azure Key Vault (AKV) and monitoring the CSI driver daemonsets.

Before you proceed to the step to setup the infrastructure, make sure that there is a quota of least 500 Azure role assignments available in the subscription where the installation will take place.

chat\_bubble

At the time of Vault Core release version 5.2, Microsoft states a limit of 4,000 Azure role assignments per Azure subscription applies to Azure role-based access control (Azure RBAC). For the latest information about the Azure requirements, refer to the official [Azure subscription limits and quotas](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits#azure-rbac-limits) documentation.

Thought Machine recommends that you deploy Vault Core to a dedicated Azure subscription.

### [](#infrastructure_setup "Copy link to heading")Infrastructure setup

You must configure the following resources before you run the installation process:

1.  Create a new resource group - this is in accordance with [Microsoft’s guidance for using Azure](https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver#create-an-aks-cluster-with-azure-key-vault-provider-for-secrets-store-csi-driver-support) and allows you to manage related resources as a single unit.
    
2.  Create an AKV instance against the new resource group that you created in step 1.
    
3.  Enable the following add-ons against the AKS cluster that you will install the Vault Core instance on:
    
    -   OIDC issuer add-on
        
    -   Workload Identity add-on (as the installation process uses Microsoft Entra Workload ID)
        
    -   AKV provider add-on - you can see a usage example for the AKV add-on in Microsoft’s [Upgrade an existing AKS cluster with Azure Key Vault provider for Secrets Store CSI Driver support](https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver#upgrade-an-existing-aks-cluster-with-azure-key-vault-provider-for-secrets-store-csi-driver-support) documentation
        
    

4.  Create a Microsoft Entra Application Registration for the Vault installer (TMComponent Operator) and create the following resources against this Application Registration:
    
    -   Federated Identity Credentials - to allow the Thought Machine Vault Installer to assume the identity of the Microsoft Entra Application Registration
        
    -   `Application.ReadWrite.OwnedBy` API permission - this is to create Application Registrations for pods using Microsoft Entra API
        
    

5.  Assign the following Azure RBAC built-in roles to the Application Registration that you created in step 4 and scope these roles on the AKV that you have created for improved security:
    
    -   `Key Vault Secrets Officer` role: Required - enables you to create secrets in AKV
        
    -   `Key Vault Data Access Administrator` role: Required - enables you to create the necessary role assignments for pods to access their secrets
        
    

6.  Change `values.yaml` to ensure that Vault Core can use AKV correctly.
    

Once you have finished setting up the infrastructure, the Vault Installer provides the necessary permissions to create secrets and provision the Azure resources that are required for the Vault Core pods to function correctly.

Specifically, the Vault Installer creates:

-   an Azure Application Registration - a type of Workload Identity for each Vault Core Kubernetes ServiceAccount resource
    
-   a Federated Identity Credential to map each pairing of a Kubernetes ServiceAccount and an Azure Application Registration
    
-   the necessary role assignments to grant read-only access to the secrets required by the pods, using the built-in Azure RBAC `Key Vault Secrets User` Role
    

### [](#installation_process "Copy link to heading")Installation process

You could use the following list of `az` CLI (Command Line Interface) commands to provision the prerequisite infrastructure.

chat\_bubble

Thought Machine provides this list of commands as guidance only.

### [](#additional_cli_arguments_for_vaultctl "Copy link to heading")Additional CLI arguments for vaultctl

You must pass the following additional CLI arguments to the vaultctl tool (for the Vault Installer):

-   `use-azure-workload-identity`: Required - adds the relevant label to the Vault Installer pod to enable usage of workload identity
    
-   `azure-workload-identity-client-id`: Required - the application (client) ID of the application registration, which is used by the Vault Installer pod
    

You must initialise the Vault Installer Kubernetes TMOperators again using these flags. For example:

### [](#values_yaml "Copy link to heading")values.yaml

You need to configure `values.yaml` with the new settings in order to use AKV with Vault Core. These new values are under `secrets_management.azure_key_vault`, as follows:

-   `name`: Required - the name of the AKV instance
    
-   `oidc_provider`: Required - the OIDC Provider for the AKS Cluster
    
-   `resource_group_name`: Required - the name of the resource group that stores the key vault
    
-   `microsoft_entra_tenant_id`: Required - the Microsoft Entra Tenant ID of the current subscription
    
-   `subscription_id`: Required - the ID of the Azure subscription
    

You must omit the `secrets_management.hashicorp_vault` values entirely. The `secrets_management` section should look similar to the following example:

Before you can install Vault Core, you need to:

1.  Add the prerequisite secrets that are detailed in [Before you start](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start), such as the `root-db-secrets`.
    
2.  Add these secrets on the root level of the AKV - this is because, unlike other secrets management solutions, AKV does not use prefixes. If a secret does have the path, for example `mount/secret/vault-account`, then ensure that it moves to AKV as `mount—​secret—​vault-account`. Note how double dashes replace the `/` slash character. This is due to strict AKV secrets naming requirements - for more information, see [Naming rules and restrictions for Azure resources](https://learn.microsoft.com/en-gb/azure/azure-resource-manager/management/resource-name-rules#microsoftkeyvault).
    
3.  Add a secret in a JSON.stringify format. For example, for a secret that you have stored in HashiCorp Vault with Key `"DB_PASSWORD"` and Value `"SECRETPASS123"`, you need to store it as `{"DB_PASSWORD": "SECRETPASS123"}` \[1\] in AKV. It is possible to retrieve secrets from HashiCorp Vault in a similar JSON format using a CLI (Command Line Interface) or Web UI, which should simplify the process.
    

chat\_bubble

\[1\] The key value pairs must use the double quotes, for example this is the valid format:

`'{"DB_PASSWORD": "SECRETPASS123"}'`

this is not:

`"{'DB_PASSWORD': 'PASS'}"`

## [](#vault_installer_operations "Copy link to heading")Vault Installer operations

### [](#creating_resources "Copy link to heading")Creating resources

Once you have completed the infrastructure setup, the Vault Installer has all of the necessary permissions to create secrets and set up permissions required to grant each Kubernetes ServiceAccount (KSA) with read-only access to only the secrets that it needs.

Vault Installer leverages the most secure and recommended access control mode offered by Microsoft - namely, Azure Workload Identity. Workload Identity uses Kubernetes native approach for federating identity by exposing the OIDC issuer of a Kubernetes cluster, allowing Azure to verify the identity of a KSA.

Vault Installer creates an Application Registration (service principal), which is a type of Workload Identity, for each KSA. The one-to-one mapping between the two is achieved by creating a Microsoft Entra Federated Identity Credential.

To achieve a fine-grained access control similar to HashiCorp Vault, Vault Installer assigns a read-only `Key Vault Secrets User` Azure RBAC role to the associated service principal of the KSA. It only scopes a role assignment on one specific secret. Therefore, you require multiple role assignments for pods that require multiple secrets.

Once the installation process is complete, the Vault Core pods read the secrets via an `init` container. This container places the secrets in a volume mount for the main containers to consume. Vault Core reads secrets from AKV via the Azure CSI Driver provider. This works as a daemonset that reaches out to the secret store via gRPC when a pod starts up, fetches the required secrets that are defined in the `SecretProviderClass` custom resource, and mounts them into a volume on the pod.

As part of the installation process, the Vault Installer creates and deploys the `SecretProviderClass` Kubernetes custom resources, which configures the secrets that can be mounted onto a volume. This looks similar to the following example:

Here, the `<ClientId>` is Microsoft Entra application ID and `<TenantId>` is the Azure Tenant ID which is provided via the `values.yaml` file as we refer to earlier in this guide.

The Kubernetes ServiceAccount that Vault Core application pods require is created as:

Here, `<ServiceAccount>` is the name used for "ServiceAccount"; the `<ClientId>` is the associated Microsoft Entra application ID.

### [](#kafka_certificate_rotation "Copy link to heading")Kafka certificate rotation

Vault Core ships with the `cert-rotation-pkg` package that you can use to rotate Kafka certificates with either HashiCorp Vault or Azure Key Vault. This is compatible with both HashiCorp Vault and Azure Key Vault from Vault Core 5.2.

The Thought Machine Vault Installer creates a special application registration with `Key Vault Secrets Officer` Azure RBAC role that allows the `cert-rotation-pkg` package to rotate Kafka broker and client certificates. This role assignment is scoped on the target Azure Key Vault, therefore limiting the privileges of this application.

## [](#migrating_vault_secrets_from_hashicorp_vault_to_azure_key_vault_akv "Copy link to heading")Migrating Vault secrets from HashiCorp Vault to Azure Key Vault (AKV)

chat\_bubble

You must follow the steps in [Prerequisites](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault#prerequisites) before migrating any secrets.

Thought Machine does not provide an automated migration of secret data from HashiCorp Vault to AKV. Clients must be able to migrate secrets from HashiCorp Vault to AKV themselves and keep Vault Core running without downtime.

To achieve this, follow these steps:

1.  Manually copy, or create a script to copy, the secrets from HashiCorp Vault to the AKV store in the root location. Specifically, if a secret in HashiCorp Vault has the path `mount/secret/vault-account`, then ensure that it moves to AKV as `mount—​secret—​vault-account`. This is due to the strict naming requirements of AKV. For more information, see [Naming rules and restrictions for Azure resources](https://learn.microsoft.com/en-gb/azure/azure-resource-manager/management/resource-name-rules#microsoftkeyvault).
    

chat\_bubble

The content of the secret must be in JSON format. For more information about the secret format, see [Prerequisites](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault#prerequisites).

2.  Configure the `values.yaml` file to point towards AKV instead of HashiCorp Vault.
    
3.  Deploy your Vault Core instance - either as an upgrade or re-run the Thought Machine Vault Installer, as both will roll out the Pods.
    
4.  Check that all of the Pods are running and are using AKV; once you have verified this, remove the secrets from HashiCorp Vault.