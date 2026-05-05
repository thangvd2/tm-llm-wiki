---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_api_reference4xx"
title: "Contract Modules API metadata"
scraped_at: "2026-04-20T18:20:48.156Z"
images: 0
---

# Contract Modules API metadata

The metadata provides a description of the Contract Modules. For a Contract module to be valid:

-   The `api` metadata field is required.
    
-   The module must conform to the Python syntax [standards](https://docs.python.org/3/reference/).
    

The `api` field specifies the collections of native Contract types avaliable within a Contract Module. These types can be used to define local variables and support function/variable type annotations.

## [](#api "Copy link to heading")api

A [Semantic Version](https://semver.org/) string defining the particular Vault Contracts API version that the product is coded against. Consult the [list of all supported API versions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) for the list of currently-supported versions.

**Required**: True

**Example**