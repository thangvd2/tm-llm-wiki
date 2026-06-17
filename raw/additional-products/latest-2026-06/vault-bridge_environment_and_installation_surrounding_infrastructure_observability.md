---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/observability"
title: "Observability"
scraped_at: "2026-06-17T05:15:57.445Z"
images: 0
---

# Observability

Vault Bridge requires the Thought Machine observability component to function properly. This component is currently installed or upgraded using the Vault Core release artifacts. You will have to obtain the Vault Core release file from the [Vault Core release artifacts page](/vault-core/latest/EN/environment_and_installation/vault_release_information#vault_release_artifacts).

Vault Bridge is compatible with all Vault Core 5.x versions. To set up the observability component follow the [Observability stack installation and user guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack). The guide is written with Vault Core in mind, however the steps are applicable for Vault Bridge installations.

If you are installing Vault Bridge on a dedicated cluster then all the steps have to be completed and you have to follow all the guidance for new installations. If, however, you are installing Vault Bridge on a cluster that has already been provisioned for Vault Core, you have to follow the guidance for installing Vault in more than one namespace in a cluster (this is the same when you install multiple Vault Core instances on the same cluster).

info

When installing Vault Bridge on a new cluster use the **latest Vault Core release** available to install the observability stack.

info

When installing Vault Bridge on a cluster that already has the observability component set up, use the same Vault Core release you used during the latest installation or upgrade of the observability component.

chat\_bubble

There are currently no Bridge-specific dashboards included as part of the observability component.