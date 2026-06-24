---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/developer_starter_guide"
title: "Developer Starter Guide"
scraped_at: "2026-06-17T15:57:20.095Z"
images: 0
---

# Developer Starter Guide

In this guide, we’ll go through some prerequisites you can do before starting the Labs proper. This is written with the Shared Sandbox in mind - an instance of Vault Core that is useful for learning and testing. If your company already has a developer instance of Vault Core, feel free to use that instead.

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#tools "Copy link to heading")Tools

#### [](#visual_studio_vs_code "Copy link to heading")Visual Studio VS Code

This is the preferred IDE for writing Vault Smart Contracts, due to the lightweight nature and easy access to plugins. Please ensure that a Python interpreter has been installed too. Ideally a latest version that is compatible with our Smart Contract API Version (see the Vault Portal for more details). Do install this JSON Escape extension which would be helpful for `Simulate` API calls.

#### [](#postman "Copy link to heading")Postman

This allows API calls to be made to Vault in a user friendly way. API collections will be provided, which can be easily imported and exported. These will include examples to take actions such as creating customers and accounts.

#### [](#web_browser "Copy link to heading")Web Browser

This will allow interaction with Vault’s Operations Dashboard (aka OpsDash), which is a user-friendly web interface to interact with Vault and lookup customers and accounts. The OpsDash is officially supported on Google Chrome and using any other browsers might result in unexpected behaviour.

#### [](#kcat "Copy link to heading")Kcat

This is a command line tool that allows connection to Kafka, and consumes topics from the Streaming API. This is only required if consumption via this is intended.

### [](#code_of_conduct "Copy link to heading")Code of conduct

#### [](#data_privacy "Copy link to heading")Data privacy

The sandbox is shared between multiple Partners and Clients. As such, any information that is loaded on the platform is “Public”. For this reason, ensure that no identifiable information is loaded. General best practices involve tokenizing any sensitive data and/or using a test framework that does not include sensitive data.

#### [](#load "Copy link to heading")Load

This is a sandbox environment. As such, it is not designed to scale to large bank use cases. When loading test accounts, scope them to a small number of customers, and do not use any existing customers/accounts that you have not created yourself when performing any exercises.

#### [](#performance "Copy link to heading")Performance

Ensure that all SC development best practices are followed, especially with respect to performant Smart Contracts. Contracts that repeatedly fetch large amounts of data, or create extremely frequent schedules/events will be flagged and deleted. Users are asked to be especially careful when running automated tests on the environment as failure to tear test accounts down will result in performance issues.

Any users that repeatedly cause performance issues will be banned from the sandbox until further training has been completed.

#### [](#wipe_schedule "Copy link to heading")Wipe schedule

To ensure the environment is kept in a known, clean state, it will be necessary to periodically wipe the database. This will involve removing all configuration layer content that has been loaded and remove all Service accounts that have been created. The wipe schedule will be once every five weeks. For this reason it is important to maintain your configuration layer content separately from the sandbox. Ideally this configuration should live in a code repository. Best practices and advice are provided on the Vault Portal.

### [](#sandbox_quick_links "Copy link to heading")Sandbox Quick Links

chat\_bubble

Links to `partner-enablement-bootcamp` are only accessible to participants of an active Bootcamp. Other users may need to replace these URLs with their own Vault Core environment.

#### [](#operations_dashboard "Copy link to heading")Operations Dashboard

URL: [https://ops.partner-enablement-bootcamp.dh-production.tmachine.io/](https://ops.partner-enablement-bootcamp.dh-production.tmachine.io/)

#### [](#core_api "Copy link to heading")Core API

core\_api\_url: [https://core-api.partner-enablement-bootcamp.dh-production.tmachine.io](https://core-api.partner-enablement-bootcamp.dh-production.tmachine.io)

#### [](#configuration_layer_utility_clu "Copy link to heading")Configuration Layer Utility (CLU)

Documentation and CLU binary download is available [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#download_the_configuration_layer_utility).

#### [](#kafka "Copy link to heading")Kafka

Kafka Broker: bootstrap.kafka.partner-enablement-bootcamp.dh-production.tmachine.io:443

If you are using the Kafka broker, do supply your Client/Partner Manager with your corporate IP address for whitelisting.

## [](#getting_started "Copy link to heading")Getting Started

### [](#opsdash "Copy link to heading")OpsDash

#### [](#login "Copy link to heading")Login

Access is provided by Authentik. Before accessing the sandbox, reach out to your Thought Machine contact to make sure you have access to the Operations Dashboard, with the link above.

Upon successful login, the OpsDash will be presented with access to all screens and views as the Super User credentials were used.

#### [](#setup_access_token "Copy link to heading")Setup Access Token

Interacting with Vault through APIs requires you to generate either a JSON Web Token (JWT) or a Service Account (SA) to authenticate yourself.

We recommend you use JWTs as SA’s are deprecated as of Vault 4.3.0.

For guidance, please refer to **Generating an access token** under Lab 0.

### [](#apis "Copy link to heading")APIs

Before calling any APIs, if using Postman, please refer to the OpenAPI definition file [that can be found here](/vault-core/latest/EN/api/core_api#downloading_the_openapi_definition_file). This contains a collection of API calls that allows interaction with Vault, which can be imported directly into Postman. Please utilise the Postman Environment Variables which includes commonly used parameters.

Another option is to start with the Postman collection available within the [Lab Starter Pack](/learning/latest/EN/labs#setup), which has a request named "Get a JWT", within the folder "Developer Starter Pack".

Once Postman has been set up, the following API call can be made.

#### [](#query_vault_version "Copy link to heading")Query Vault Version

The [VaultVersion GET](/vault-core/latest/EN/api/core_api#vault_version) endpoint is the simplest RESTful API endpoint that Vault Core has, so it’s useful to test your connection. Using either Postman, or your terminal to make a cURL query, make the following API call. Note we’re setting `Authorization` as a header:

### [](#kafka_2 "Copy link to heading")Kafka

In order to connect to the Kafka broker and consume topics, the following command can be used. This utilises the Kafkacat tool and connects to the broker defined in the Kafka section.

#### [](#list_topics_partitions "Copy link to heading")List Topics & Partitions

`kcat -b <kafka broker> -X security.protocol=ssl -L -v`

#### [](#consume_topic "Copy link to heading")Consume Topic

`kcat -C -b <kafka broker> -t <topic> -X security.protocol=ssl`

### [](#product_library "Copy link to heading")Product Library

This sandbox has been tested and is compatible with `product_library-2025_24` version.