---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager"
title: "Configuring HashiCorp Vault secrets manager"
scraped_at: "2026-06-17T05:29:21.603Z"
images: 2
---

# Configuring HashiCorp Vault secrets manager

HashiCorp Vault manages secrets securely; vault-installer needs the ability to create and update HashiCorp Vault policies and roles. The cluster must have the following enabled:

-   A KV version 1 secrets backend: Used to store secrets required by Thought Machine Vault Core services
    
-   Kubernetes auth method: Used by Kubernetes Pods to authenticate with HashiCorp Vault and fetch required secrets
    
-   Optionally, a PKI backend: Used to sign client certificates
    

For information, see [Configuring a secrets manager](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault) and [HashiCorp Vault Kubernetes auth method](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager#hashicorp_vault_kubernetes_auth_method).

chat\_bubble

Thought Machine recommends deploying HashiCorp Vault on a separate node pool from standard workloads or a separate Kubernetes cluster. This is in order to reduce the probability of cyber attacks which could occur on shared worker nodes.

## [](#on_cluster_deployment "Copy link to heading")On-cluster deployment

StatefulSets are used for on-cluster deployments of HashiCorp Vault and deployed in a highly-available configuration across multiple AZs. You must choose a storage backend, depending on the cloud provider.

## [](#hashicorp_vault_kubernetes_auth_method "Copy link to heading")Hashicorp Vault Kubernetes auth method

After setting up the Kubernetes cluster, you can finish configuring the auth method. To do this, follow these steps. For a further explanation, see the [Kubernetes Auth Method guidance](https://www.vaultproject.io/docs/auth/kubernetes.html).

error

For HashiCorp Vault setup on Kubernetes, you must make sure that you are using versions that are compatible with each other and are suitable for the version of Vault Core that you are planning to install or upgrade to. For example, HashiCorp Vault 1.9 and Kubernetes 1.21 require you to ensure that a long-lived token is provided as part of the JWT token reviewer setup. Refer to the [HashiCorp Vault documentation](https://developer.hashicorp.com/vault/docs/auth/kubernetes) for Kubernetes compatibility and other general information. For information about using Thought Machine Vault Core with third party components, refer to the [Certified Environment Matrix](/vault-core/5-8/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault).

You can create a secret using [the relevant Kubernetes instructions](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#manually-create-a-service-account-api-token). Ensure that the HashiCorp Vault service account has the `system:auth-delegator` ClusterRole or a ClusterRole that has token review permissions.

error

You should only consider the following commands as an example - you must NOT run them in a production environment. In production environments, you should set up the Kubernetes backend for HashiCorp Vault according to your organisation’s processes and best practices.

1.  Enable and set up the Kubernetes auth backend. You need the Kubernetes API master host and the Kubernetes CA certificate. If you want to fetch the service account token manually, it is automatically created as a secret in the vault-installer namespace as soon as the service account is created. Run the following commands to set up the Kubernetes backend, or use the UI as follows:
    
    After you have enabled this, a configuration is displayed like the following example (or similar):
    
    ![image8.png](_assets/uuid-0aa73a20-45ea-8ba2-4d24-89993a82ba4_vaultcor.webp)
    
2.  Add a role for vault-installer and the respective policies to associate the role with the Kubernetes service account. Thought Machine ships the example `vault-installer-hashicorp-vault-policy.hcl` with the Vault Core release package.
    
    ![vault-installer.png](_assets/uuid-00210230-e3b9-cbc9-8726-3af093a68f6_vaultcor.webp)
    
3.  Test that the vault-installer service account can authenticate correctly with the HashiCorp Vault instance by running the following command:
    

 
| Key | Value |
| --- | --- |
| 
`token` `token_accessor` `token_renewable` `token_policies` `identity_policies` `policies`

 | 

…… `true` `["default" "vault-installer"]` `[]` `["default" "vault-installer"]`

 |

chat\_bubble

The token policies of the token you get must include the vault-installer policy created in step 2.