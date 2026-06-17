---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/installation_guide"
title: "Installation guide"
scraped_at: "2026-06-17T05:02:30.776Z"
images: 0
---

# Installation guide

## [](#overview "Copy link to heading")Overview

Here, you can learn how to complete the following prerequisites for getting started with Edge Functions:

-   configuring Vault Core settings in `values.yaml`
    
-   generating tokens to provide Edge Functions with the necessary permissions to make calls to Vault Core
    
-   providing Service Account token permissions to Edge Functions
    
-   downloading and installing the Edge Functions SDK
    

chat\_bubble

Thought Machine recommends that you complete an additional, but optional, configuration step so that you listen to events. For example, event streaming and topics that are related to Edge Functions.

## [](#configuring_values_yaml_for_edge_functions "Copy link to heading")Configuring values.yaml for Edge Functions

To use Edge Functions with Vault Core, you need to make some changes to the `values.yaml` configuration file for Vault Core.

Thought Machine recommends that you use a separate physical database for your Edge Functions installation. To facilitate this, you may need to make a number of changes to the `values.yaml` file.

Set the following values to link the Edge Functions service to your database instance:

-   edge\_functions.db.host
    
-   edge\_functions.db.port
    
-   edge\_functions.db.name
    

For a more comprehensive listing of the options that you can change, see [Installing or Upgrading Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#generate_the_values_file) to create a sample `values.yaml`.

### [](#enabling_triggers_service_account "Copy link to heading")Enabling Triggers Service Account

In the current version of Vault Core, the only credentials that can be used to authenticate an Edge Function Execution are that of a [Vault Core service account](/vault-core/5-9/EN/api/core_api#serviceaccount), which is the [default service account](/vault-core/5-9/EN/api/overview#authentication) by default.

By default the service account token is not installed into the Trigger subsystem, which also prevents the creation of Trigger resources. To enable the use of these credentials, and thus the creation of Triggers, set the following field in the `values.yaml` used to install Vault Core:

error

This configuration option will install the default service account token in the trigger processing subsystem, which grants it and any Edge Functions executed by a Trigger broad access to call any Vault Core API endpoint. This access can be downgraded by:

1.  Creating a new [Vault Core service account](/vault-core/5-9/EN/api/core_api#serviceaccount) with more restrictive privileges.
    
2.  Replacing the `edge-functions-trigger-processor-secrets/SERVICE_ACCOUNT_TOKEN` secret with the restricted service account’s token.
    

## [](#authentication_and_generating_tokens "Copy link to heading")Authentication and generating tokens

In order to use Edge Functions, you need to ensure that you have the correct permissions when you make requests to the API.

### [](#authentication "Copy link to heading")Authentication

The Edge Functions API uses the same API access control mechanism as the rest of Vault Core. It supports using either one of the following authentication methods:

-   JSON Web Tokens (JWTs)
    
-   Service Account Tokens
    

During an execution of an Edge Function, the token provided for the execution request is used for any downstream calls to Vault Core. This means that authentication needs permissions to execute an Edge Function as well as for the interactions with Vault Core that your Edge Function performs.

The default OPA policy for the Edge Functions API is the same as the default policies for other Vault Core APIs. For OPA policies, see [Static Policies](/vault-core/5-9/EN/reference/policies/opa-policies). The policy management service manages any custom policies.

### [](#permissions "Copy link to heading")Permissions

If you are using Edge Functions to make requests to Vault Core, then your token needs the correct permissions for the downstream service that you want to call. For example, if your Edge Function makes a call to create an `Account` or a `Customer` then you will need those permissions in the token as well as the execute permission.

#### [](#permissions_to_create_an_edge_function "Copy link to heading")Permissions to create an Edge Function:

`edge_functions:write`, which provides write access to all resources in Edge Functions

Alternatively, for more restrictive access:

`edge_functions.edge_functions:write`

#### [](#permission_to_execute_an_edge_function_with_downstream_resource_creation "Copy link to heading")Permission to execute an Edge Function with downstream resource creation:

-   `edge_functions:execute`
    
-   `core:write`
    

### [](#giving_service_account_token_permissions_to_edge_functions "Copy link to heading")Giving Service Account token permissions to Edge Functions

You can use the Operations Dashboard to assign Service Account token permissions for Edge Functions.

chat\_bubble

You do not use the Operations Dashboard to assign permissions for JWTs.

### [](#generating_a_jwt "Copy link to heading")Generating a JWT

Thought Machine has specific requirements for JWTs. See [JSON Web Tokens](/vault-core/5-9/EN/api/overview#authentication) for more information, or the [Edge Functions API reference](/vault-core/5-9/EN/api/edge_functions_api) to learn how Edge Functions make use of the tokens.

Similar to Service Account token permissions, calls to downstream Vault Core endpoints require the JWT to have the correct `scp` for the downstream endpoint.

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
    

For more information about downloading the Edge Functions SDK, see [Edge Functions SDK downloads](/vault-core/5-9/EN/reference/edge_functions/sdk_download).

Run the following command to install each library. Replace the placeholder `<edge-functions-file.whl>` with the filename in the following example.

### [](#enabling_the_libraries_in_an_ide "Copy link to heading")Enabling the libraries in an IDE

Make sure that your Python interpreter is pointing towards the same location of the Python binary that you used to install the Edge Functions libraries.

1.  Make sure that your IDE supports using Python and install any extensions to enable language support for it if necessary. Run the following command in the terminal to check where your version of `python3` is pointing to:
    

2.  Within your IDE, configure your Python interpreter to point to the same location as the libraries. Refer to the documentation from your IDE provider for instructions.
    

#### [](#next_steps "Copy link to heading")Next steps

Now that you have installed the libraries, check out the [Quick Start Guide](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/quick_start_guide) to learn:

-   what you need in order to use Edge Functions
    
-   about the code that underpins Edge Functions
    
-   how to execute an Edge Function
    

When you are ready to write some Edge Function source code, refer to [How to write an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function) for a step-by-step tutorial.