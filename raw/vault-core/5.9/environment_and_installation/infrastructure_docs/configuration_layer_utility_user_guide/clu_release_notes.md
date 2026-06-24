---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide/clu_release_notes"
title: "CLU Release Notes"
scraped_at: "2026-06-22T19:15:25.330Z"
images: 0
---

# CLU Release Notes

This document outlines the changes in each CLU release since 5.0.0.

## [](#clu_release_5_6_3_any_vault_core_5_version "Copy link to heading")CLU release 5.6.3 (any Vault Core 5 version)

-   Fixed vulnerabilities.
    

## [](#clu_release_5_6_2_any_vault_core_5_version "Copy link to heading")CLU release 5.6.2 (any Vault Core 5 version)

-   Fixed an edge case where Smart Contract Version would not skip correctly if the migration strategy was not set.
    
-   Fixed an edge case where Schedule Tags could be imported after Smart Contract Version. This could cause importing a Smart Contract Version to fail.
    

## [](#clu_release_5_6_1_any_vault_core_5_version "Copy link to heading")CLU release 5.6.1 (any Vault Core 5 version)

-   Fixed vulnerabilities.
    

## [](#clu_release_5_6_0_any_vault_core_5_version "Copy link to heading")CLU release 5.6.0 (any Vault Core 5 version)

-   Added support for updating certain Payments resources during CLU import conflicts. You can now specify `on_conflict: UPDATE` in a resource YAML file. For a complete list of supported resources, see the [Vault Payments Resource files documentation](/vault-payments/latest/EN/using_vault_payments/clu#resource_files).
    

## [](#clu_release_5_5_1_any_vault_core_5_version "Copy link to heading")CLU release 5.5.1 (any Vault Core 5 version)

-   Fixed: CLU import errors now show the full HTTP response when importing a Product Version. Previously, when the `/v1/product-versions` endpoint responded with an error code which was not `INVALID_ARGUMENT`, the full HTTP response would not be shown and a log like the following would be output instead: `received error response code 400: invalid request to create Smart Contract Version, attempt to retrieve resource from vault failed: Unexpected field_violations missing from response Body`.
    

## [](#clu_release_5_5_0_any_vault_core_5_version "Copy link to heading")CLU release 5.5.0 (any Vault Core 5 version)

-   Added support for Roles V2.
    

## [](#clu_release_5_4_0_any_vault_core_5_version "Copy link to heading")CLU release 5.4.0 (any Vault Core 5 version)

-   Added support for Edge Function Trigger.
    

## [](#clu_release_5_3_3_any_vault_core_5_version "Copy link to heading")CLU release 5.3.3 (any Vault Core 5 version)

-   Fixed vulnerabilities.
    

## [](#clu_release_5_3_2_any_vault_core_5_version "Copy link to heading")CLU release 5.3.2 (any Vault Core 5 version)

-   Added versioning to CLU resource and resource attributes.
    
-   Added support for Payments.
    
-   Added support for Edge Function.
    

## [](#clu_release_5_2_0_minimum_vault_core_version_5_3 "Copy link to heading")CLU release 5.2.0 (minimum Vault Core version: 5.3)

-   Added support for Processing Groups.
    
-   Added support for Parameter Value Hierarchy Nodes.
    

## [](#clu_release_5_1_0_minimum_vault_core_version_5_0_1 "Copy link to heading")CLU release 5.1.0 (minimum Vault Core version: 5.0.1)

-   Added support for OPA Policies.
    

## [](#clu_release_5_0_2_minimum_vault_core_version_5_0_1 "Copy link to heading")CLU release 5.0.2 (minimum Vault Core version: 5.0.1)

-   API errors are now returned in a structured JSON format when CLU is run with the *\-output="json"* flag.
    
-   Fixed: CLU supports both *\-auth-token* and *\-jwt* command line flags for passing in authentication credentials for CLU. The *\-auth-token* flag is no longer required if the *\-jwt* flag is provided. The exception to this is when the *\-workflows-api* flag is passed (as the Workflows API does not support JWTs).
    

## [](#clu_release_5_0_1_minimum_vault_core_version_5_0_1 "Copy link to heading")CLU release 5.0.1 (minimum Vault Core version: 5.0.1)

-   Fixed: CLU import errors now show the full HTTP response. This means API errors are now surfaced in the CLU command line interface.
    

## [](#clu_release_5_0_0_minimum_vault_core_version_5_0 "Copy link to heading")CLU release 5.0.0 (minimum Vault Core version: 5.0)

-   Added support for Accounts v2.
    
-   Added support for Parameters v2.
    
-   Added support for JSON Web Tokens (JWTs) for API authentication.