---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations"
title: "Integrations"
scraped_at: "2026-06-17T15:52:58.050Z"
images: 0
---

# Integrations

Vault Bridge enables Apps and built-in capabilities of Bridge (e.g. Vault Core Product Management) to interact with external systems. The Integrations system is a collection of API resources and capabilities within Bridge that enable these interactions. External systems can be either Vault Core, Vault Payments, or some other system not built by Thought Machine.

Integrations exist because Bridge is independent from other systems it uses for its functionality. Meaning, it is potentially deployed on a different cluster or an entirely different Cloud Service Provider than the systems it is interacting with. By having the integrations configured as API resources, it decouples this configuration from the installation process and allows easy reconfiguration of Bridge without needing to reinstall it.

The Integrations system removes the need for Apps to deal with authentication. They do not have to have knowledge of where the systems they use are deployed, and it removes the need for Apps and the systems they use to allow cross-domain requests.

Key parts of the Integrations system:

-   External Systems, Credentials, and Integration Configs
    
-   Integrations HTTP Proxy
    

## [](#integrations_configuration "Copy link to heading")Integrations configuration

Apps and Bridge’s built-in capabilities use external systems as part of providing their functionality. They achieve this either by making HTTP requests or consuming Kafka messages (only built-in capabilities are able to consume from Kafka). Bridge Integrations facilitate these; however, Bridge has to be configured with the information about the external systems. There are three key resources to achieve this.

 
| Resource | Description |
| --- | --- |
| 
External System

 | 

An External System describes a logical external system (or API) by giving it an ID and some other metadata about it. You can read details about the available fields on the [Bridge API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#externalsystem) pages. This resource is referenced from other Integration resources and can be used by multiple Apps and in-built capabilities. Typically, you would have one External System for Vault Core, one for Vault Payments, and one for any other third-party system that you integrate with.

An External System Version is linked to an External System and provides concrete details about the external system, such as the base URLs and Kafka certificates. An External System without at least one Version cannot be used. If you create new External System Versions for the same External System, then Bridge will use the most recently created version. You can read details about the available fields on the [Bridge API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#externalsystemversion) pages.

 |
| 

Credential

 | 

A Credential specifies the authentication information that will be used when making requests to the external systems. They support a wide range of common authentication mechanisms that have to be configured in a way that matches the external system. These resources are created with sensitive information such as passwords or OAuth client secrets. Bridge stores these in a secure and encrypted way. You can read details about the available fields on the [Bridge API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#credentials) pages.

 |
| 

Integration Config

 | 

The Integration Config resource links together an External System and a Credential. Its ID is a well-known value specified by an App or built-in capability. Any App or built-in capability that interacts with an external system requires a corresponding Integration Configs to exist (and point to correctly configured External Systems and Credentials) and will not function correctly without them. Refer to the documentation of each App or built-in capability to learn which Integration Configs they require. You can read details about the available fields on the [Bridge API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#integration_configs) pages.

 |

These resources can be managed either through the [Bridge API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api) or through the [Console](/additional-product-offerings/latest/EN/vault-bridge/concepts/console).

## [](#how_are_integration_resources_used "Copy link to heading")How are Integration resources used?

Once Integration resources are created and Apps using them are installed, they are used whenever an App or built-in capability makes an HTTP request or consumes from Kafka of an external system.

Apps use the Integrations HTTP Proxy to achieve this. The App invokes the proxy with the Integration Config ID, which is then used by the proxy to determine the downstream system to proxy the request to and how to authenticate the request. More details can be found on the [Integrations HTTP Proxy](/additional-product-offerings/latest/EN/vault-bridge/api/integrations_http_proxy) page.

Built-in capabilities use a similar mechanism where they use the Integration Config ID and use it to make requests (HTTP or Kafka) to the external systems.

## [](#which_integration_configs_are_required "Copy link to heading")Which Integration Configs are required?

Each App or built-in capability defines one or more Integration Config IDs that it uses. These are hard-coded in the logic of each App/built-in capability, where they are used as aliases to a concrete external system. The documentation for every App/built-in capability contains a list of all the Integration Config IDs it requires. And for each, it describes what type of External System it must point to (e.g. Vault Core). This information can then be used to create the necessary resources with the right information in accordance with how your systems are configured.

## [](#connectivity "Copy link to heading")Connectivity

All App requests to external systems go through the Integrations HTTP proxy, which runs within the Bridge instance. Similarly, all requests initiated by built-in capabilities originate from within the Bridge instance. For these requests to be successful, Bridge has to be installed in an environment with network connectivity to all configured external systems. The environment has to be configured (on an infrastructure level) so that the pods running in the Bridge namespace can make HTTP requests and connect to Kafka on the URLs specified in the External System Versions you configure.

chat\_bubble

In bank-hosted environments, it is the responsibility of the bank to ensure network connectivity.

## [](#testing_integration_configs "Copy link to heading")Testing Integration Configs

Integration Configs can be debugged via the Console UI. You can access this by clicking the **Debug** button on an Integration Configuration’s details page in the Bridge Console.

While the Integrations HTTP proxy hides certain error details to avoid divulging sensitive information to regular users, using the debug functionality provides plain-text feedback, network insights, and raw request data so you can pinpoint exactly where a request is failing.

chat\_bubble

The debugging tool requires specific privileges that should be considered as highly elevated. It should only be made available to Bridge’s administrators that will find the information it provides meaningful. The debugging tool will only be accessible if the user has the `bridge.integrations_debugger:debug` scope granted to them.

### [](#running_the_debugging_tool "Copy link to heading")Running the debugging tool

When you click the **Debug** button, you will see a simple setup form. Provide the following details to start your test:

-   **Base URL Field:** Select the specific base URL from your External System that you want to test (for example, `core_api`).
    
-   **Test Path:** Enter a relative endpoint path to execute a live test request against (for example, `/v1/vault-version`).
    

Once you click **Start**, a sequence of three automated health checks are run. If any step fails, the test stops immediately and provides targeted feedback.

chat\_bubble

Ensure your selected credential has the Integrations HTTP proxy explicitly enabled (`HttpProxyEnabled`). If this is not enabled, the credential validation step will fail immediately.

### [](#understanding_the_checks "Copy link to heading")Understanding the Checks

**1\. Base URL Check** Firstly the tool validates the format of your selected base URL and verifies that Vault Bridge can physically reach your external server over the network. **How to use this:** If this step fails immediately without making a request, your base URL is likely empty or malformed. If it fails during the network test, the problem is foundational. The tool will provide information if the host cannot be found (DNS issues), if the connection was actively refused, or if there is an issue with your SSL/TLS certificates.

**2\. Credential Verification** If your configuration uses authentication, a check is completed to ensure your credentials are valid. For OAuth setups, an attempt to fetch the access token is made. **How to use this:** If this step fails, you likely have an issue with your Identity Provider (IdP) settings or client secrets. If it succeeds, the generated JSON Web Token (JWT) will be decoded so you can visually verify its claims, such as scopes and expiration times.

**3\. End-to-End Test Request** Finally, your base URL, credentials, and test path are combined to send a real API request in the same way the Integrations HTTP proxy would. This passes if the external system receives the request and returns a standard success status code (between 200 and 299). **How to use this:** If the first two checks pass but this one fails, your network and identity are fine, but the specific request is being rejected. Check the raw response data provided to see if the external system is returning a permissions error (like a 401 or 403) or a "not found" error (404), which usually indicates a typo in your Test Path.