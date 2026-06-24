---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/secrets_manager"
title: "Secrets Manager"
scraped_at: "2026-06-17T15:54:35.840Z"
images: 0
---

# Secrets Manager

Vault Bridge requires the installation and configuration of a secrets manager to function properly. Vault Bridge supports the same secrets managers as Vault Core and uses the same setup.

To set up the secrets manager read the following guides:

-   [Configuring a secrets manager in Vault Core](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault)
    
-   [Configuring HashiCorp Vault secrets manager](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager)
    
-   [Configuring Vault Core with AWS Secrets Manager](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager)
    

You can use the same secrets manager for both Vault Core and Vault Bridge. However, we strongly recommend reading the guides above to ensure that instance-specific configurations, like secrets prefixes, are also applied to your new Vault Bridge instance.