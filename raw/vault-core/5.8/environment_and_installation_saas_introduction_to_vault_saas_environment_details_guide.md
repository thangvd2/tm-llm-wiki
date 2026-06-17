---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide"
title: "Environment details guide"
scraped_at: "2026-06-17T05:31:32.769Z"
images: 1
---

# Environment details guide

SaaS

How to use your client details to connect to your Vault Core SaaS environment.

## [](#overview "Copy link to heading")Overview

You will receive the unique details that you need to use to connect to your environment once Thought Machine has received the relevant [onboarding request forms](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide#completing_the_onboarding_request_forms) and provisioned your environment.

Here, we provide an overview of how to use your details to connect to your Vault Core SaaS environment. You should use it in conjunction with the [Onboarding Handbook](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide) as it includes guidance on:

-   [Steps to connect to Vault Core SaaS](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide#connect_to_vault_core_saas) - guidance to help you:
    
    1.  Configure SAML IdP for integrating with Vault Core Operations Dashboard and Core Apps
        
    2.  Create subnets in each availability zone for your VPC (Virtual Private Cloud) endpoints - AWS uses AWS PrivateLink, and GCP uses PSC (Private Service Connect)
        
    3.  Create VPC endpoints (AWS)/PSC endpoints (GCP)
        
    4.  Configure DNS (Domain Name System)
        
    5.  Set up network connectivity
        
    6.  Test connectivity
        
    
-   [Post-onboarding steps for your environments](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide#post_onboarding_steps_for_your_environments)
    

You have one service name for the Vault Core REST APIs and one service name for the Streaming API for both AWS (on Vault Core 5.0+) and GCP. For AWS on Vault Core versions before 5.0 (4.7 and under), you have four service names for the Streaming API.

You must also configure the DNS entries in order to access the Vault Core URLs and endpoints.

error

Configuring DNS: You must configure your DNS so that you can resolve the addresses of these services to the endpoints in your environment (VPC Endpoint Service for AWS/Private Service Connect for GCP, as appropriate to your chosen hosting option). They do not resolve through public DNS, for example. You should create DNS records for these hostnames in the DNS system. For example, each DNS entry for the Vault Core API endpoints must alias the VPC endpoint URL.

chat\_bubble

This guidance contains `<placeholders>` which you must replace with your unique client environment details.

-   `<client_codename>` - replace with your client codename in the URL
    
-   `<environment>` - replace with the appropriate environment name in the URL
    
-   `<endpoint>` - replace with the unique name of the VPC endpoint (AWS)/PSC endpoint (GCP) for the given service
    

## [](#kafka_oauth_configuration_for_vault_core_saas_on_aws "Copy link to heading")Kafka OAuth configuration for Vault Core SaaS on AWS

For AWS, Vault Core SaaS supports Kafka OAuth. This configuration is optional - if you want to enable Kafka OAuth, you must fill out the relevant fields in the Vault Core Environment Configuration Request and Kafka Authentication Request forms.

If you choose to enable Kafka OAuth, you must also supply and configure the OAuth 2.0/OIDC (OpenID Connect) Authorisation Server or Identity Provider (IdP) to use the Client Credentials authorisation flow.

Kafka OAuth enables external client authentication (currently disabled by default) through the use of SASL/OAUTHBEARER when accessing public Vault Core Kafka topics via the Streaming API. The Authorisation Server or IdP must serve signed JSON Web Tokens (JWTs) for use as access tokens for Kafka clients to authenticate to the Streaming API. It must also provide a JWKS (JSON Web Key Set) endpoint for the Streaming API to use to validate access tokens.

For more information, see: [Kafka OAuth overview](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_auth_technical_overview).

If you are onboarding to Vault Payments and/or Vault Bridge in addition to Vault Core, you are required to configure OAuth authentication across all environments. You must therefore complete the fields required for OAuth authentication in the relevant onboarding forms.

chat\_bubble

You must configure Kafka OAuth before you configure the Kafka Endpoint services. Thought Machine recommends configuring Kafka Auth after configuring your SAML IdP in these guides.

## [](#kafka_oauth_configuration_for_vault_core_saas_on_gcp "Copy link to heading")Kafka OAuth configuration for Vault Core SaaS on GCP

For GCP, Vault Core SaaS supports Kafka OAuth. This configuration is optional - if you want to enable Kafka OAuth, you must fill out the relevant fields in the Vault Core Environment Configuration Request and Kafka Authentication Request forms.

If you choose to enable it, you must supply and configure the OAuth 2.0/OIDC (OpenID Connect) Authorisation Server or Identity Provider (IdP) to use the Client Credentials authorisation flow.

Kafka OAuth enables external client authentication (currently disabled by default) through the use of SASL/OAUTHBEARER when accessing public Vault Core Kafka topics via the Streaming API. The Authorisation Server or IdP must serve signed JSON Web Tokens (JWTs) for use as access tokens for Kafka clients to authenticate to the Streaming API. It must also provide a JWKS (JSON Web Key Set) endpoint for the Streaming API to use to validate access tokens.

For more information, see: [Kafka OAuth overview](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_auth_technical_overview).

If you are onboarding to Vault Payments and/or Vault Bridge in addition to Vault Core, you are required to configure OAuth authentication across all environments. You must therefore complete the fields required for OAuth authentication in the relevant onboarding forms.

chat\_bubble

You must configure Kafka OAuth before you configure the Kafka Endpoint services. Thought Machine recommends configuring Kafka Auth after configuring your SAML IdP in these guides.

## [](#availability_zonesregions "Copy link to heading")Availability Zones/Regions

Thought Machine provides you with the details of your zones/regions as part of your onboarding process.

You must create an endpoint in your VPC (Virtual Private Cloud) network for each of the service names.

-   Vault Core REST APIs - one service name for GCP or AWS (any version of Vault Core)
    
-   Streaming API:
    
    -   GCP: one service name (any version of Vault Core)
        
    -   AWS on Vault Core 4.0-4.7: four service names
        
    -   AWS on Vault Core 5.0+: one service name
        
    

Each endpoint states the zone IDs. For most regions, these zones are the same, as most only have three zones. However, some regions have more than three and the IDs are different for different endpoints and do not always follow an incremental naming convention. Create the endpoints using the subnets in these zones.

chat\_bubble

You agree a host region with Thought Machine during the contract agreement process.

### [](#aws_availability_zones "Copy link to heading")AWS Availability Zones

For clients using AWS with Vault Core SaaS, you must create the following:

-   a subnet for the VPC [according to the AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) for each availability zone within the region
    
-   VPC endpoints in the subnets within the availability zones (AZs)
    

The subnets are for the VPC endpoints to ensure that they can connect to the VPC Endpoint services in the Thought Machine AWS account. Thought Machine confirms the AZs with you as part of the onboarding and environment provisioning process.

### [](#gcp_private_service_connect_region "Copy link to heading")GCP Private Service Connect region

For clients using GCP with Vault Core SaaS, you must create the following:

-   a subnet for the VPC (Virtual Private Cloud) network for each zone in each region and enable Private Google Access
    
-   Private Service Connect endpoints in the same region as where the Vault Core SaaS cluster resides
    

These subnets are for the Private Service Connect endpoints to ensure that they can connect to the endpoint services in the Thought Machine GCP Project. For a guide, see the [GCP documentation](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). Thought Machine provides you with the details of your zones/regions as part of your onboarding and environment provisioning process.

Cluster region example: `europe-west2`

## [](#kafka_endpoint_services "Copy link to heading")Kafka Endpoint services

Reminder - here, you need to:

1.  Create the service name for the endpoint.
    
2.  Create a DNS record for the endpoint.
    
3.  Assign the specified associated port to the endpoint.
    
4.  Ensure that your network security, such as firewall rules, proxies or gateways, allow the port.
    
5.  Test the connection.
    

Use the following information to configure Kafka Endpoint services for your environment:

-   [Kafka VPC Endpoint services for AWS - Vault Core versions 4.0-4.7](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_endpoint_services-kafka_vpc_endpoint_services_for_aws)
    
-   [Kafka VPC Endpoint services for Vault Core 5.0+ for AWS](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_endpoint_services-kafka_vpc_endpoint_services_for_vault_5_for_aws)
    
-   [Kafka Private Service Connect endpoint services for GCP](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_endpoint_services-kafka_private_service_connect_endpoint_services_for_gcp)
    

### [](#kafka_vpc_endpoint_services_for_vault_core_4_x_for_aws "Copy link to heading")Kafka VPC Endpoint services for Vault Core 4.X for AWS

chat\_bubble

These details are for Vault Core SaaS clients using AWS on Vault Core 4.X only - the details are different for [AWS on Vault Core 5.0+](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_endpoint_services-kafka_vpc_endpoint_services_for_vault_5_for_aws).

For AWS with Vault Core 4.0-4.7, you receive four service names for the Kafka endpoints. You must create four DNS records in total - a DNS record for each service endpoint - and use the service name for the endpoint to do so.

Your service names are unique and Thought Machine provides these to you separately with your environment details. Refer to your details for your unique service names.

#### [](#kafka_bootstrap_address "Copy link to heading")Kafka Bootstrap address

**Service name**

```
<endpoint>
```

**Endpoint**

```
kafka.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`9092`

#### [](#kafka_0_broker "Copy link to heading")Kafka-0 Broker

**Service name**

```
<endpoint>
```

**Endpoint**

```
kafka-0.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`9096`

#### [](#kafka_1_broker "Copy link to heading")Kafka-1 Broker

**Service name**

```
<endpoint>
```

**Endpoint**

```
kafka-1.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`9096`

#### [](#kafka_2_broker "Copy link to heading")Kafka-2 Broker

**Service name**

```
<endpoint>
```

**Endpoint**

```
kafka-2.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`9096`

#### [](#testing_the_connection "Copy link to heading")Testing the connection

Here is an example string that you can use to test the connection. Remember to replace the `$<client_codename>` and `$<environment>` placeholders with the correct details for your client code name and environment - for example, Pre-prod or Production.

We recommend that you test all four endpoints.

##### [](#example_strings "Copy link to heading")Example strings

**Kafka Bootstrap:**

```
kafka.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io:9092
```

**Kafka-0 Broker:**

```
kafka-0.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io:9096
```

**Kafka-1 Broker:**

```
kafka-1.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io:9096
```

**Kafka-2 Broker:**

```
kafka-2.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io:9096
```

### [](#kafka_vpc_endpoint_services_for_vault_core_5_0_for_aws "Copy link to heading")Kafka VPC Endpoint services for Vault Core 5.0+ for AWS

chat\_bubble

These details are for Vault Core SaaS clients using AWS on Vault Core 5.0+ only - the details are different for [AWS on Vault Core 4.X](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_endpoint_services-kafka_vpc_endpoint_services_for_aws).

For AWS with Vault Core 5.0+, you receive only one service name for all Kafka endpoints. You can use this to create one single CNAME wildcard DNS record for the single service endpoint.

Your service names are unique and Thought Machine provides these to you separately with your environment details. Refer to your details for your unique service names.

#### [](#kafka_broker_address_service_name "Copy link to heading")Kafka Broker address (service name)

**Service name to use for the VPC endpoint**

```
<endpoint>
```

##### [](#wildcard_dns_record "Copy link to heading")Wildcard DNS record

You must create a single CNAME wildcard DNS record for the single service endpoint. This wildcard must point to `<endpoint>`.

**Example wildcard DNS record name:**

```
\*.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

#### [](#endpoints_using_kafka_auth_if_enabled "Copy link to heading")Endpoints (using Kafka Auth - if enabled)

chat\_bubble

For Kafka Auth, the bootstrap address and broker address must contain `oauth`. See the examples.

##### [](#kafka_bootstrap_address_2 "Copy link to heading")Kafka Bootstrap address

```
bootstrap.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`443`

##### [](#kafka_broker_address "Copy link to heading")Kafka Broker address

After your Kafka Clients connect via the bootstrap address, it redirects them to one or many Kafka brokers. These brokers have their own addresses which use the following format - you must not directly use these addresses and must use the bootstrap address instead.

The number of brokers that you have depends on your onboarding stage (Pre-prod versus Production) and environment size.

In the following example, you must replace the `$<broker-id>` placeholder with the appropriate ID for that broker. For example, `1` for `broker-1`, `2` for `broker-2` if you have a second broker, and incrementally for each broker according to the number of brokers that you have. The port number for each broker is `443`.

```
broker-$<broker-id>.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

**Port**

`443`

#### [](#endpoints_without_kafka_auth_enabled "Copy link to heading")Endpoints (without Kafka Auth enabled)

chat\_bubble

While this guidance provides an example of three Kafka brokers, the number for your unique configuration may differ. You can account for this by creating a wildcard DNS record.

##### [](#kafka_bootstrap_address_3 "Copy link to heading")Kafka Bootstrap address

```
bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`443`

##### [](#kafka_broker_address_2 "Copy link to heading")Kafka Broker address

After your Kafka Clients connect via the bootstrap address, it redirects them to one or many Kafka brokers. These brokers have their own addresses which use the following format - you must not directly use these addresses and must use the bootstrap address instead.

The number of brokers that you have depends on your onboarding stage (Pre-prod versus Production) and environment size.

In the following example, you must replace the `$<broker-id>` placeholder with the appropriate ID for that broker. For example, `1` for `broker-1`, `2` for `broker-2` if you have a second broker, and incrementally for each broker according to the number of brokers that you have. The port number for each broker is `443`.

```
broker-$<broker-id>.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

**Port**

`443`

#### [](#testing_the_bootstrap_connection "Copy link to heading")Testing the bootstrap connection

Here is an example string that you can use to test the connection. Remember to replace the `$<client_codename>` and `$<environment>` placeholders with the correct details for your client code name and environment - for example, Pre-prod or Production.

**Example string (if you have enabled Kafka OAuth)**

```
bootstrap.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

chat\_bubble

Enabling Kafka OAuth is optional - for more information, see [Kafka OAuth configuration for AWS](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_oauth_configuration_for_aws).

**Example string (if not using Kafka OAuth)**

```
bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

### [](#kafka_private_service_connect_endpoint_services_for_gcp "Copy link to heading")Kafka Private Service Connect endpoint services for GCP

chat\_bubble

These details are for Vault Core SaaS clients using GCP only - the details are different for AWS. Your service names are unique and Thought Machine provides these to you separately with your environment details. Refer to your details for your unique service names.

For GCP, you receive only one service name for all Kafka endpoints. You can use this to create one single CNAME Wildcard DNS record for the single PSC endpoint.

#### [](#kafka_broker_address_service_name_2 "Copy link to heading")Kafka Broker address (service name)

**Service name to use for the PSC endpoint**

```
<endpoint>
```

**Example service name for the PSC endpoint (service address):**

```
<projects/<PROJECT-NAME>/regions/<REGION>/serviceAttachments/nginx-ingress-kafka-psc>
```

##### [](#wildcard_dns_record_2 "Copy link to heading")Wildcard DNS record

You must create a single CNAME wildcard DNS record for the single service endpoint. This wildcard must point to `<endpoint>`.

**Example wildcard DNS record name:**

```
\*.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

#### [](#endpoints_using_kafka_auth_if_enabled_2 "Copy link to heading")Endpoints (using Kafka Auth - if enabled)

chat\_bubble

For Kafka Auth, the bootstrap address and broker address must contain `oauth`. See the examples.

**Kafka Bootstrap address**

```
bootstrap.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`443`

##### [](#kafka_broker_address_3 "Copy link to heading")Kafka Broker address

After your Kafka Clients connect via the bootstrap address, it redirects them to one or many Kafka brokers. These brokers have their own addresses which use the following format - you must not directly use these addresses and must use the bootstrap address instead.

The number of brokers that you have depends on your onboarding stage (Pre-prod versus Production) and environment size.

In the following example, you must replace the `$<broker-id>` placeholder with the appropriate ID for that broker. For example, `1` for `broker-1`, `2` for `broker-2` if you have a second broker, and incrementally for each broker according to the number of brokers that you have. The port number for each broker is `443`.

```
broker-$<broker-id>.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

**Port**

`443`

#### [](#endpoints_without_kafka_auth_enabled_2 "Copy link to heading")Endpoints (without Kafka Auth enabled)

**Kafka Bootstrap address**

```
bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

**Port**

`443`

##### [](#kafka_broker_address_4 "Copy link to heading")Kafka Broker address

After your Kafka Clients connect via the bootstrap address, it redirects them to one or many Kafka brokers. These brokers have their own addresses which use the following format - you must not directly use these addresses and must use the bootstrap address instead.

The number of brokers that you have depends on your onboarding stage (Pre-prod versus Production) and environment size.

In the following example, you must replace the `$<broker-id>` placeholder with the appropriate ID for that broker. For example, `1` for `broker-1`, `2` for `broker-2` if you have a second broker, and incrementally for each broker according to the number of brokers that you have. The port number for each broker is `443`.

```
broker-$<broker-id>.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

**Port**

`443`

#### [](#testing_the_bootstrap_connection_2 "Copy link to heading")Testing the bootstrap connection

Here is an example string that you can use to test the bootstrap connection. Remember to replace the `$<client_codename>` and `$<environment>` placeholders with the correct details for your client code name and environment - for example, Pre-prod or Production.

**Example string (if you have enabled Kafka OAuth)**

```
bootstrap.oauth.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

chat\_bubble

Enabling Kafka OAuth is optional - for more information, see [Kafka OAuth configuration for GCP](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#kafka_oauth_configuration_for_gcp).

**Example string (if not using Kafka OAuth)**

```
bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

## [](#vault_rest_api "Copy link to heading")Vault REST API

Reminder - here, you need to:

1.  Configure the service name to use for an endpoint.
    
2.  Create a DNS record for the given endpoint.
    
3.  Assign and configure the associated port.
    
4.  Ensure that your firewall rules, proxies, or any other gateway security provision allow the port.
    
5.  Test the connection.
    

### [](#testing_the_connection_2 "Copy link to heading")Testing the connection

Here is an example string that you can use to test the connection. Remember to replace the `$<endpoint>`, `$<client_codename>`, `$<environment>`, and `$<port>` placeholders with the correct details for the endpoint and its specified associated port, and your client name and environment - for example, Pre-prod or Production.

```
https://$<endpoint>.$<client\_codename>.$<environment>.saas.tmachine.io:$<port>
```

#### [](#example_string_for_the_operations_dashboard_endpoint "Copy link to heading")Example string for the Operations Dashboard endpoint

```
https://ops.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

### [](#vault_rest_api_for_aws "Copy link to heading")Vault REST API for AWS

Replace the `<vpc_endpoint>` placeholder with the VPC endpoint service name for the REST API. You must use this information to create an endpoint connection; it is responsible for forwarding requests to the API endpoints using the endpoint service and DNS.

#### [](#service_name "Copy link to heading")Service name

```
<endpoint>
```

#### [](#port "Copy link to heading")Port

`443`

### [](#vault_rest_api_for_gcp "Copy link to heading")Vault REST API for GCP

Replace the `<endpoint>` placeholder with the endpoint service name for the REST API. You must use this information to create an endpoint connection; it is responsible for forwarding requests to the API endpoints using the endpoint service and DNS.

#### [](#service_name_2 "Copy link to heading")Service name

```
<endpoint>
```

##### [](#example_service_name_psc_service_address "Copy link to heading")Example service name (`psc-service-address`)

```
<projects/<PROJECT-NAME>/regions/<REGION>/serviceAttachments/nginx-ingress-public-psc>
```

#### [](#port_2 "Copy link to heading")Port

`443`

### [](#rest_api_endpoints "Copy link to heading")REST API Endpoints

The following endpoints are valid for most SaaS clients. This list might not apply to every client SaaS environment. Thought Machine supplies you with your unique client codename, environment details and confirm the list of endpoints during the onboarding process.

You need to configure the DNS entries in order to access the Vault Core REST API services. This also applies if you have any additional endpoints, such as the Data Loader API.

error

Configuring DNS: You must configure your DNS so that you can resolve the addresses of these services to your endpoint (VPC endpoint service for AWS/Private Service Connect endpoint for GCP, as appropriate to your chosen hosting option). They do not resolve through public DNS, for example. You should create DNS records for these hostnames in the DNS system. For example, each DNS entry for the Vault Core API endpoints must alias the endpoint URL.

 
| REST API service | REST API endpoint |
| --- | --- |
| 
Access Control API

 | 

```
https://access-control-api.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Audit API

 | 

```
https://audit-api.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Core API

 | 

```
https://core-api.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Documentation

 | 

```
https://documentation.$<client\_codename>.$<environment>.saas.tmachine.io
```

Note: the Documentation endpoint is available up to and including Vault Core 5.4. From Vault Core 5.5 onwards, our documentation is only accessible via our portal.





 |
| 

Documents

 | 

```
https://documents.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Operations Dashboard

 | 

```
https://ops.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Workflow Simulator

 | 

```
https://workflow-simulator.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |
| 

Workflows API

 | 

```
https://workflows-api.$<client\_codename>.$<environment>.saas.tmachine.io
```






 |

chat\_bubble

For information about Vault Core REST APIs, refer to the [APIs](/vault-core/5-8/EN/api/) section.

## [](#core_apps_and_operations_dashboard "Copy link to heading")Core Apps and Operations Dashboard

### [](#how_vault_core_serves_applications "Copy link to heading")How Vault Core serves applications

You can access your Vault Core applications and Operations Dashboard by using your unique client URL. Alternatively, you can discover all applications from the App Switcher in the navigation menu of Operations Dashboard and each Core App.

App Switcher icons:

![app switcher icons operations dashboard core apps](_assets/app_switcher_icons_operations_dashboard__vaultcor.webp)

chat\_bubble

You need to configure your Identity Provider (IdP) with your Vault Core details to support access to both Core Apps and Operations Dashboard. For more information, refer to the [Onboarding Guide](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide) and [Set up Vault Core with a SAML IDP](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/docs_hub_links_saml_idp_and_vault_guide).

#### [](#core_apps "Copy link to heading")Core Apps

You can access Core Apps at:

```
https://coreapps.$<client\_codename>.$<environment>.saas.tmachine.io/$<app>
```

chat\_bubble

If you do not supply an application name, Vault Core directs you to Vault Jobs. For more information about an application, refer to the [Apps](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard) documentation.

#### [](#operations_dashboard "Copy link to heading")Operations Dashboard

You can access Operations Dashboard at:

```
https://ops.$<client\_codename>.$<environment>.saas.tmachine.io
```

### [](#configuring_your_saml_idp "Copy link to heading")Configuring your SAML IdP

Configure your Identity Provider with the following Vault Core details to support access to both Core Apps and Operations Dashboard.

#### [](#operations_dashboard_entity_id "Copy link to heading")Operations Dashboard Entity ID

```
https://ops.$<client\_codename>.$<environment>.saas.tmachine.io/api/saml/metadata
```

#### [](#acs_url "Copy link to heading")ACS URL

```
https://ops.$<client\_codename>.$<environment>.saas.tmachine.io/api/saml/acs
```

chat\_bubble

The Entity ID URLs are only for supplying values to your SAML Identity provider. Do not navigate to the URLs using a browser. For more information about Operations Dashboard, refer to the [Operations Dashboard](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/ops_dashboard) documentation.

## [](#vault_metrics_endpoint "Copy link to heading")Vault Metrics endpoint

error

The Pre-prod and Production environments have different endpoint URLs.

Reminder - here, you need to:

1.  Configure the service name to use for an endpoint.
    
2.  Create a DNS record for the given endpoint.
    
3.  Assign and configure the associated port.
    
4.  Ensure that your firewall rules, proxies, or any other gateway security provision allow the port.
    
5.  Test the connection.
    

### [](#endpoint_for_pre_production_environment "Copy link to heading")Endpoint for Pre-production environment

```
https://vault-metrics.$<client\_codename>.preprod.saas.tmachine.io
```

### [](#endpoint_for_the_production_live_environment "Copy link to heading")Endpoint for the Production (live) environment

```
https://vault-metrics.$<client\_codename>.prod.saas.tmachine.io
```

### [](#port_3 "Copy link to heading")Port

`443`

chat\_bubble

The Endpoint service (for Vault Core REST API) is the same for the Vault Metrics endpoint. For more information about using this endpoint, refer to the [Metrics and Tracing Guide](/vault-core/5-8/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide).

### [](#testing_the_connection_3 "Copy link to heading")Testing the connection

Here is an example string that you can use to test the connection. Remember to replace the `$<client_codename>` and `$<environment>` placeholders with the correct details for your client name and environment - for example, Pre-prod or Production.

```
https://vault-metrics.$<client\_codename>.$<environment>.saas.tmachine.io:443
```