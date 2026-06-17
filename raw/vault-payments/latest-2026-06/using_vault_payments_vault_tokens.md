---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/vault_tokens"
title: "Vault tokens"
scraped_at: "2026-06-17T05:07:33.440Z"
images: 0
---

# Vault tokens

Vault Tokens is an OAuth 2.0 Machine to Machine(M2M) Client Credentials authorisation server that follows the standard for Client Credentials Grant defined in [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4). Vault Tokens is available in all sandbox environments.

Vault Tokens allows you to quickly integrate with the Vault Payments API without bringing your own authentication solution that is compliant with our [requirements](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication).

chat\_bubble

Vault Tokens is not deployed in production.

## [](#client_credentials "Copy link to heading")Client credentials

Client Credentials allow you to issue JWTs for accessing the Vault Payments API. Client Credentials can be created in the Vault Payments App. Client Credentials function like a username and password for clients that wish to obtain tokens to access the Vault Payments API. The following fields can be set when creating Client Credentials:

Name

a label that makes different Client Credentials easy to identify

Description

an optional description of the credentials that contains more details

Token Lifespan

defines the time after which a token issued using this set of Client Credentials expires. We recommend 30 minutes to an hour for production environments

Scopes

a list of scopes that can be added to tokens issued using the credentials. Each scope provides access to a different subset of the Vault Payments API

Enable Kafka

additional custom claims that will be added to all tokens issued using the credentials. Right now the only available claim is `kafka:read` which provides read access to Kafka.

error

You are only presented with the client secret once after the Client Credentials are created. This cannot be retrieved again later.

## [](#issuing_a_jwt "Copy link to heading")Issuing a JWT

Once you have obtained a Client Secret and Client ID after creating your Client Credentials in the Vault Payments App you can use the following command to obtain an access token:

Unlike most other Vault Payments APIs we use the `application/x-www-form-urlencoded` content type instead of `application/json`. This is in compliance with [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4.2). The `grant_type` must always be set to `client_credentials`. The `scope` parameter contains a space delimited list of scopes that are a subset of the scopes allowed by the Client Credentials resource used.

The endpoint requires that `Basic` authentication is used as per [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1).

Services that want to integrate with Vault Tokens can use one of the many open source libraries that work with OAuth 2.0 Client Credentials servers to issue tokens. Examples for [Go](https://pkg.go.dev/golang.org/x/oauth2) and [Python](https://authomatic.github.io/authomatic/).