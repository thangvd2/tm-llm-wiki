---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/removing_istio_control_planes"
title: "Removing Istio control planes"
scraped_at: "2026-06-17T05:29:32.808Z"
images: 0
---

# Removing Istio control planes

chat\_bubble

This section applies only for clients using Thought Machine-shipped Istio.

## [](#check_if_a_control_plane_version_is_active "Copy link to heading")Check if a control plane version is active

To ensure the control plane version we want to remove is no longer active, do:

where `revision` is the suffix following `istiod-` in the name of the control plane deployment, for example `canary-v1-23`.

If there are any results returned for a query, then this Istio version cannot be removed until the matched namespaces are migrated to a newer version of Istio manually.

## [](#remove_an_old_istio_control_plane_version "Copy link to heading")Remove an old Istio control plane version

To thoroughly remove all resources corresponding to old versions of the control plane, we will utilise `istioctl`.

chat\_bubble

Please note that you should use the same *minor* version of `istioctl` as the version you are removing. For example if you are looking to remove the revision `canary-v1-23`, you should use `istioctl` version `1.23.X`, where `X` is the latest patch available.

1.  Perform a dry-run of the uninstall to confirm the resources to be deleted.
    
2.  Confirm that the resources listed in the output matches the version that you expect. If there are running proxies connected to the control plane to be removed, `istioctl` will show a warning.
    
3.  Execute the removal by using the command:
    
4.  Check that the removal process is complete by either starting a new pod on the cluster, or delete an existing pod somewhere and ensure it is able to come back as required.