---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/api/integrations_http_proxy"
title: "Integrations HTTP Proxy"
scraped_at: "2026-06-17T05:15:41.157Z"
images: 0
---

# Integrations HTTP Proxy

Bridge Integrations HTTP Proxy is an API endpoint that Bridge Apps use to make HTTP requests to [External Systems](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#external_systems).

Bridge Apps make all requests that are not for Bridge’s own APIs through this proxy. The proxy first authenticates and authorizes the request made by an App, it then constructs the downstream URL based on your configuration and adds the configured authentication details onto the downstream requests, and finally it returns the response from the downstream External System back to the App. The proxy does not modify the response.

## [](#how_to_use_the_proxy "Copy link to heading")How to use the proxy

The proxy endpoint is available on `<bridge-base-url>/api/proxy/<integration-config-id>/<base-url-field>`. Any other path appended at the end and any query parameters will be used as part of the downstream request. The table below explains the fields used in the URL:

 
| Param | Description |
| --- | --- |
| 
`<bridge-base-url>`

 | 

The URL where your Vault Bridge instance is deployed. E.g. `[https://console.bridge.my-org.com](https://console.bridge.my-org.com)`

 |
| 

`<integration-config-id>`

 | 

The ID of the [Integration Config](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#integration_configs) that will be used to in order to construct the full downstream request. Refer to [Integrations](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations) for details on how Integration Configs, External Systems and Credentials work together.

 |
| 

`<base-url-field>`

 | 

The Base URL field of the [External System Version](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#externalsystemversion) to use as the base URL to which the specified request path and query parameters are appended by the proxy. Note that the field has to match the type of the External System is being used.

 |

### [](#worked_example_for_third_party_api "Copy link to heading")Worked example for third-party API

This example shows how a fictitious third-party API that serves latest FX rates can be used with the Integrations HTTP Proxy.

This API is available on `https://latest-fx-rates.fx` and has an endpoint `/api/fx-rates?base=<currency>`. It requires no authentication.

Below is an example cURL request and response returned by this API.

To use this API with Bridge’s Integrations Proxy you must first configure the Integrations resources.

First create an [External System](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_externalsystems_ExternalSystem_CreateExternalSystem) that has the type `EXTERNAL_SYSTEM_TYPE_THIRD_PARTY` and set the `id` to be "latest-fx-rates".

Then create an [External System Version](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_externalsystems_ExternalSystemVersion_CreateExternalSystemVersion), use "latest-fx-rates" for the `external_system_id` and set the `third_party.base_url` to "https://latest-fx-rates.fx".

Create an [Integration Config](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_integrationconfigs_IntegrationConfig_CreateIntegrationConfig), setting the `id` to "fxapp", `external_system_id` to "latest-fx-rates" and leaving `credential_id` unpopulated.

These resources configure Bridge with everything it needs to be able to make downstream requests on behalf of the App.

The App can then make a HTTP request and display the returned JSON.

Note that the App uses "fxapp" as part of the request URL. This instructs the proxy to use the "fxapp" Integration Config, which then allows it to know what the base URL is. It also uses "base\_url" as part of the URL, which corresponds to the `base_url` field on the External System Version resource.

### [](#base_urls "Copy link to heading")Base URLs

As you can see in the above example, part of the URL is the `base_url`. This instructs the proxy which `base_url` field of the `ExternalSystemVersion` to use.

For third-party external systems, this will always be "base\_url". For Vault Payments this will always be "api". Vault Core, on the other hand, is made out of several APIs that responds on different sub-domains. This is modeled on the [External System Version](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_externalsystems_ExternalSystemVersion_CreateExternalSystemVersion) resource as different `base_url` fields (e.g. `core_api_base_url`, `postings_api_base_url`, etc.). Apps making requests have to specify the correct base url as part of the request URL.

For example, if an App wants to list all postings it would do so as such:

Note that you have to omit the `_base_url` postfix.

## [](#authentication "Copy link to heading")Authentication

One of the main benefits of using the Integrations HTTP Proxy is that it handles authentication of requests so that the App does not have to provide these.

As shown above, the proxy uses the [Integration Config](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#integration_configs) resource to determine whether any authentication is set. If the `credential_id` is set the proxy will attach authentication information onto the downstream request depending on how the [Credential](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#credentials) is configured.

chat\_bubble

Not all authentication mechanisms supported by [Credentials](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#credentials) can be used with the HTTP Proxy. Refer to the Credential documentation for details.

## [](#response_origin "Copy link to heading")Response origin

Integrations HTTP Proxy adds a custom `X-Tm-Response-Origin` header to all responses. The value will be either `proxy` or `upstream`, depending on where the response was generated. This can be used by clients (e.g. Bridge Apps) to handle errors differently depending on whether they originated in Vault Bridge or the external system.

## [](#request_timeout_headers "Copy link to heading")Request timeout headers

The HTTP Proxy enforces a default timeout of 20 seconds; any connection exceeding this limit will result in an error. While this is sufficient for most API requests, clients (e.g. Bridge Apps) can extend this duration for long-running requests — for example calls to Streaming Endpoints — by setting the `Upstream-Request-Timeout-Seconds` header and configuring a longer timeout value.

The value for this header must not exceed `600` seconds (10 minutes).