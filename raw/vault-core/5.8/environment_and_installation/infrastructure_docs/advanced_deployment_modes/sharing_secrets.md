---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/sharing_secrets"
title: "Shared secrets access for advanced deployment modes"
scraped_at: "2026-06-17T15:38:07.133Z"
images: 0
---

# Shared secrets access for advanced deployment modes

chat\_bubble

The below instructions are relevant for both Blue-Green and Active-Passive modes

In order for both the target and source clusters to access the shared/replicated resources they must have access to the same set of secrets.

This access is either through a common secrets provider or separate secrets providers where the secrets have been copied between them. Otherwise, if the clusters do not have access to the same resources, the workflow fails.

The `root-db-secrets` uses the database hostname as the key for the secret name. For a single-region shared database mode as is the case for Blue-Green, the database hostname might be the same in which case no changes in this secret are necessary. However, if it differs, as is likely the case for an Active-Passive setup across multiple regions, then the secret needs to be updated - an additional key reflecting the additional database hostname needs to be added to the secret; its value should be the same as the one stored against the original key.

If you are using HashiCorp Vault as your secrets provider then you must take care to correctly configure the `secret_prefix` in the `values.yaml` file.

There are two options when configuring this value, either:

-   Use a common `secret_prefix` value for both clusters. This is the simplest approach if both clusters are accessing a shared instance of HashiCorp Vault or a separate instance where you have copied the secrets to without modification.
    

-   Configure each cluster to use a distinct prefix. This requires that you copy the original secrets to a new or existing instance of HashiCorp Vault under a different prefix, and maintain the accuracy of the copied data.
    

chat\_bubble

Instructions for how to copy secrets is outside of the scope of this guide. Refer to the documentation from your secrets store provider for guidance.