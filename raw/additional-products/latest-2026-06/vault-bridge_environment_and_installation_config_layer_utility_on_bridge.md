---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/config_layer_utility_on_bridge"
title: "Configuration Layer Utility on Bridge"
scraped_at: "2026-06-17T05:16:08.171Z"
images: 0
---

# Configuration Layer Utility on Bridge

This guide describes how to use the Configuration Layer Utility (CLU) to import Vault Bridge resources onto a Vault Bridge system.

For a more complete description of CLU, see the [CLU User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide).

## [](#prerequisites "Copy link to heading")Prerequisites

To use the CLU with Vault Bridge, you need:

-   The CLU 5 binary (available for download [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#download_the_configuration_layer_utility))
    
-   A valid JSON Web Token (JWT) with the roles / scopes required for the import (creation / update) of the target resources
    
-   The base URL of your target Vault Bridge API
    

## [](#importing_resources "Copy link to heading")Importing Resources

To import resources onto Vault Bridge, use the `import` command with the following flags:

## [](#resources_supported_for_import "Copy link to heading")Resources supported for import

CLU on Vault Bridge currently supports the import of the following resource types:

   
| Resource Name | Configuration Type | Supported actions | Supported from CLU version |
| --- | --- | --- | --- |
| 
Bridge Edge Function

 | 

BRIDGE\_EDGE\_FUNCTION

 | 

Create

 | 

5.6.3

 |
| 

Bridge Edge Function Trigger

 | 

BRIDGE\_EDGE\_FUNCTION\_TRIGGER

 | 

Create

 | 

5.6.3

 |

## [](#example_workflow "Copy link to heading")Example Workflow

Here we detail how to:

1.  Define a single Bridge Edge Function & Bridge Edge Functions Trigger as `.resource.yaml` files.
    
2.  Define a `manifest.yaml` including the two resources.
    
3.  Import the resources listed within the `manifest.yaml` onto the Vault Bridge system.
    

Step 1: Create a directory to store the manifest and resources:

Step 2: Write the Edge Function source code to a `code.py` file:

Step 3: Define the Bridge Edge Function resource for import as `edge_function.resource.yaml`:

chat\_bubble

This step uses the CLU specific `@{}` syntax to reference the external `code.py` file.

Step 4: Define the Bridge Edge Functions Trigger as `edge_function_trigger.resource.yaml`:

chat\_bubble

This step uses the CLU specific `&{resource_id}` syntax to reference the Edge Function resource defined in Step 3.

Step 5: Define the `manifest.yaml` including the resource IDs of the two previously defined resources:

Your directory should look like:

Step 6: Import the resources onto Vault Bridge: