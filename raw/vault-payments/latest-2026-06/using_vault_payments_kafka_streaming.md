---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/kafka_streaming"
title: "Kafka event streaming"
scraped_at: "2026-06-17T05:07:54.344Z"
images: 0
---

# Kafka event streaming

Vault Payments' Kafka event streaming API for asynchronous requests

## [](#overview "Copy link to heading")Overview

The Streaming APIs are based on Apache Kafka, with each event type, such as a File event or an Instruction event, streamed from a dedicated topic. Any number of external systems can subscribe to these topics to enable the use of Vault Payments data in systems for use cases such as storage, data analysis, machine learning, reporting and more.

Vault Payments streams two types of data, facts and resource mutations, to represent the full state of the data of each component and published immediately after they are written to the database.

The Streaming API follows at-least-once delivery semantics.

The Kafka retention period is 7 days.

## [](#available_event_types "Copy link to heading")Available event types

Specification of available events can be found [here](/vault-payments/latest/EN/api/streaming_api).

## [](#kafka_auth "Copy link to heading")Kafka auth

In order to access public Vault Payments Kafka topics from an external network, you can authenticate with Kafka brokers using OAuth 2.0.

The OAuth 2.0/OIDC (OpenID Connect) Authorisation Server or Identity Provider (IdP) is required for Kafka external client authentication to the Stream API. It serves signed JSON Web Tokens (JWTs) that Kafka clients use as access tokens to authenticate.

The JWKS (JSON Web Key Set) endpoint of the Authorisation Server or IdP serves the public key set - the server/IdP uses this to sign the tokens. The Stream API Kafka brokers use the JWKS endpoint to periodically fetch the latest key set in order to validate access tokens provided by external Kafka clients.

You (the client) must supply and configure the Authorisation Server or IdP to use the Client Credentials authorisation flow.

The configuration requirements include:

-   registering a client app to request tokens - configuring token claims
    

In order to use Vault Payments with Kafka Auth, you MUST ensure that each JWT is:

-   signed with a cryptographic key
    
-   populated with a principal\_name token claim and value of `EXTERNAL_VP_READ`
    

You can choose a token-signing algorithm that is compliant with the OAuth standard and the configuration of your Authorisation Server or IdP. The Authorisation Server or IdP informs the Kafka brokers which algorithm to use via the JWKS endpoint.

When creating the Kafka consumer programmatically, the consumer group name must be prefixed by the `tenant_id` value associated with your organisation: `${tenant_id}.consumer_group_name`

### [](#client_credentials_authorisation_flow_how_it_works "Copy link to heading")Client credentials authorisation flow - how it works

In order to access the public topics, you will require authorisation from the OAuth 2.0 server and Kafka brokers, using the Client Credentials authorisation flow.

At a high level, this works as follows:

1.  Client (application) requests authorisation - it uses the client ID and secret (provisioned by the OAuth server) to request a token from the OAuth 2.0 server.
    
2.  The OAuth server receives and checks the client credentials to validate the request - if it is successful, the server will sign and issue a JWT to the client in response (authentication stage).
    
3.  The client (application) receives the JWT and passes the token in a request to the Kafka brokers for authentication and for authorisation for specific Kafka resources.
    
4.  The Kafka brokers receive the token and validate the request; if it is successful, they authorise the request (authorisation stage).