---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/integrations_and_http_requests"
title: "Integrations and HTTP requests"
scraped_at: "2026-06-17T15:54:10.139Z"
images: 0
---

# Integrations and HTTP requests

In Vault Bridge, Edge Functions use [Integrations](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations) to communicate with external services and Thought Machine products, such as Vault Core and Vault Payments. This is managed through the `HTTPClient` dependency and the [Integrations HTTP Proxy](/additional-product-offerings/latest/EN/vault-bridge/api/integrations_http_proxy).

## [](#defining_integration_dependencies "Copy link to heading")Defining integration dependencies

You define your integrated services as dependencies in the function’s entry point using the `Annotated` type. Each client must be configured with an `HTTPClientConfig` that specifies an [IntegrationConfig](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations#integrations_configuration) containing the **Integration Config ID** and the **External System Type**.

See [Integrations](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations) for more information on configuring these resources.

info

When you create an **Edge Function Version**, Vault Bridge validates all [IntegrationConfig](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#integration_configs) IDs defined in your code. The operation will fail if:

-   A referenced **Integration Config ID** does not exist in your environment.
    
-   The **External System Type** specified in your code (for example, `ExternalSystemType.CORE`) does not match the type of the external system linked to that integration configuration in Vault Bridge.
    

chat\_bubble

Every entry point must include the `ExecutionContext` and `Request` parameters. You can then add as many `HTTPClient` dependencies as your integration requires.

## [](#making_requests "Copy link to heading")Making requests

The `HTTPClient.request` method provides a flexible interface for interacting with integrated services, supporting various body formats and HTTP methods.

## [](#integration_config_benefits "Copy link to heading")Integration Config benefits

This pattern decouples your Edge Function code from the underlying infrastructure. By using Integration Configs:

-   **Security:** Authentication credentials and destination URLs are managed by the platform, not hardcoded in your function.
    
-   **Versatility:** The same function can interact with multiple instances of the same service (such as multiple Vault Core instances) by defining additional dependencies.
    
-   **Testability:** You can easily provide mock implementations of `HTTPClient` in your unit tests without complex SDK patching.
    

## [](#migrating_from_vault_core "Copy link to heading")Migrating from Vault Core

If you are moving Edge Functions from Vault Core to Vault Bridge, you should transition from the **Vault Core pattern** (using `edge_api.Session`) to the **Vault Bridge pattern** (using `HTTPClient`).

lightbulb

The Vault Bridge pattern is recommended because it provides improved flexibility, allows for communication with multiple integrations, and simplifies unit testing through standard dependency injection.

### [](#migrating_edge_functions_code "Copy link to heading")Migrating Edge Functions Code

See [Support of Vault Core Edge Functions](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/vault_core_ef_support) for details on the steps required to migrate Edge Functions code from Vault Core to Vault Bridge.