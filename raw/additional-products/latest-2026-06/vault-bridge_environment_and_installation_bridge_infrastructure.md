---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure"
title: "Vault Bridge Infrastructure"
scraped_at: "2026-06-17T05:16:00.377Z"
images: 0
---

# Vault Bridge Infrastructure

Vault Bridge requires some additional infrastructure resources to be created by the client before proceeding with the installation. The client is responsible for creating resources as described in the following guides:

-   [Object Storage guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/object_storage)
    
-   [Sensitive Data guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/sensitive_data)
    

These have to be created for each Vault Bridge instance (e.g. development, prod, etc.).

lightbulb

These guides refer to `values.yaml`. While you will typically create this file as part of the [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation), you can create it now and only fill in the values required for these guides.