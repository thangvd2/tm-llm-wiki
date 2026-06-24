---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/vault_core_api_versioning"
title: "Vault Core API versioning"
scraped_at: "2026-06-17T15:54:12.266Z"
images: 0
---

# Vault Core API versioning

When you develop an Edge Function, you must specify which version of the Vault Core API your code is compatible with. This is managed using the `vc_api_version` field within your function’s source code.

## [](#specifying_the_vault_core_api_version "Copy link to heading")Specifying the Vault Core API version

To ensure your function uses the correct `vc_api` library and interfaces, define the `vc_api_version` as a global variable in your Python module. This allows the execution engine to load the specific `vc_api` library version your code expects.

This is similar to how you set the [`edge_api_version`](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function#overview_of_edge_function_source_code).

Specifying a version ensures that your Edge Function remains stable against that set of API definitions even if Vault Bridge is upgraded.

## [](#available_versions "Copy link to heading")Available versions

The version of `vc_api` you specify must match one of the versions supported by your Vault Bridge installation. Vault Bridge typically embeds `vc_api` packages for major minor releases of Vault Core 5.5 and later.

The following versions are supported in this release:

-   `5.9.0`
    
-   `5.8.0`
    
-   `5.7.0`
    
-   `5.6.0`
    
-   `5.5.0`
    

For more information and to download the corresponding libraries for local development, see [VC API Library Download](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/sdk_download/vc_api_library).

chat\_bubble

If you require a version of `vc_api` that is not listed, you may need to upgrade to a newer release of Vault Bridge.