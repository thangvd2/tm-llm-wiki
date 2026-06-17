---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/overview_and_getting_started/installation_guide"
title: "Installation guide"
scraped_at: "2026-06-17T05:14:39.701Z"
images: 0
---

# Installation guide

## [](#overview "Copy link to heading")Overview

Here, you can learn how to complete the following prerequisites for getting started with Edge Functions:

-   configuring Vault Bridge settings in `values.yaml`
    
-   setting up [Integration Configs and Credentials](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations) to provide Edge Functions with the necessary permissions to make calls to other services
    
-   downloading and installing the Edge Functions SDK
    

chat\_bubble

Thought Machine recommends that you complete an additional, but optional, configuration step so that you listen to events. For example, event streaming and topics that are related to Edge Functions.

## [](#configuring_values_yaml_for_edge_functions "Copy link to heading")Configuring values.yaml for Edge Functions

To use Edge Functions with Vault Bridge, you need to make some changes to the `values.yaml` configuration file for the Vault Bridge platform.

Thought Machine recommends that you use a logical database for your Edge Functions installation that is separate from the host platform. This allows for physical database isolation if required by your infrastructure needs.

Set the following values to link the Edge Functions service to your database instance:

-   `edge_functions.db.host`
    
-   `edge_functions.db.port`
    
-   `edge_functions.db.name`
    

For a more comprehensive listing of the options that you can change, see the [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation#generate_the_values_file) documentation to create a sample `values.yaml`.

## [](#authentication_and_generating_tokens "Copy link to heading")Authentication and generating tokens

In order to use Edge Functions, you need to ensure that you have the correct permissions when you make requests to the API.

### [](#authentication "Copy link to heading")Authentication

The Edge Functions API uses the standard Vault Bridge access control mechanisms. It supports authentication via JSON Web Tokens (JWTs).

To execute an Edge Function, the calling system only requires the `bridge.edge_functions:execute` scope.

Authentication for any downstream calls made by the Edge Function (such as to Vault Core or Vault Payments) is handled automatically by the Vault Bridge platform using [Integration Configs and Credentials](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations).

### [](#permissions "Copy link to heading")Permissions

#### [](#edge_functions_downstream_calls "Copy link to heading")Edge Functions downstream calls

Edge Functions use **Integration Configs** and **Credentials** to authenticate downstream requests.

When configuring your environment, you must ensure that the appropriate Integration Configs are created and linked to your Edge Functions. These integrations must have the permissions required for any downstream requests that are executed by the Edge Function.

For more information on setting up these resources, see [Integration Configs and Credentials](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations).

#### [](#permissions_to_manage_edge_functions "Copy link to heading")Permissions to manage Edge Functions:

-   `bridge:write`: Provides write access to all resources in the Vault Bridge platform, including all Edge Functions resources.
    
-   `bridge.edge_functions:write`: Provides write access specifically to Edge Function resources.
    

#### [](#permission_to_execute_an_edge_function "Copy link to heading")Permission to execute an Edge Function:

-   `bridge.edge_functions:execute`
    

Downstream permissions are managed within the **Credentials** associated with the **Integration Config** used by the Edge Function, rather than being required in the caller’s token.

### [](#generating_a_jwt "Copy link to heading")Generating a JWT

Thought Machine has specific requirements for JWTs. See [JSON Web Tokens](/additional-product-offerings/latest/EN/vault-bridge/api/overview#json_web_tokens) for more information. Note that for Edge Functions, the JWT only needs the `scp` for the `execute` endpoint; downstream permissions are handled by the platform.

## [](#downloading_and_installing_the_edge_functions_libraries "Copy link to heading")Downloading and installing the Edge Functions libraries

Developers have access to two client libraries to help ease and speed up the development process:

-   The `edge_api` library is independent from the Vault Core API and provides a way to write and test Edge Functions
    
-   The `vc_api` library is specific to the Vault Core API and provides a way to interface with Vault Core’s public APIs
    

### [](#prerequisites_for_installing_the_edge_functions_sdk "Copy link to heading")Prerequisites for installing the Edge Functions SDK

In order to install the Edge Functions SDK, the following are required on your machine:

-   A supported version of Python - you must use 3.10 or later. Thought Machine provides two Python wheels for the two libraries that comprise the Edge Functions SDK
    
-   IDE (integrated development environment) that is suitable for use with Python 3.10 or later
    

#### [](#confirm_that_you_have_a_supported_version_of_python "Copy link to heading")Confirm that you have a supported version of Python

Run the following command to check if Python is already installed on your machine and the Python version.

For Linux or Mac OS:

If you are running a version of Python lower than 3.10, install a supported version from [python.org](http://python.org).

### [](#download_and_install_the_latest_edge_functions_libraries "Copy link to heading")Download and install the latest Edge Functions libraries

If you are new to installing Python packages or require any assistance, see the [official Python documentation](https://packaging.python.org/en/latest/tutorials/installing-packages/).

#### [](#install_the_edge_functions_sdk "Copy link to heading")Install the Edge Functions SDK

1.  Download the latest Edge API library, `edge_api`
    
2.  Download the latest VC API library, `vc_api`
    
3.  Launch the installers and follow the commands
    

For more information about downloading the Edge Functions SDK, see [Edge Functions SDK downloads](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/sdk_download).

Run the following command to install each library. Replace the placeholder `<edge-functions-file.whl>` with the filename in the following example.

### [](#enabling_the_libraries_in_an_ide "Copy link to heading")Enabling the libraries in an IDE

Make sure that your Python interpreter is pointing towards the same location of the Python binary that you used to install the Edge Functions libraries.

1.  Make sure that your IDE supports using Python and install any extensions to enable language support for it if necessary. Run the following command in the terminal to check where your version of `python3` is pointing to:
    

2.  Within your IDE, configure your Python interpreter to point to the same location as the libraries. Refer to the documentation from your IDE provider for instructions.
    

#### [](#next_steps "Copy link to heading")Next steps

Now that you have installed the libraries, check out the [Quick Start Guide](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/overview_and_getting_started/quick_start_guide) to learn:

-   what you need in order to use Edge Functions
    
-   about the code that underpins Edge Functions
    
-   how to execute an Edge Function
    

When you are ready to write some Edge Function source code, refer to [How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function) for a step-by-step tutorial.