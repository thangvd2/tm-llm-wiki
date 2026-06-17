---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/vault_payments_api"
title: "Vault Payments API"
scraped_at: "2026-06-17T05:07:30.328Z"
images: 0
---

# Vault Payments API

This section describes the key features of the Vault Payments API.

## [](#overview "Copy link to heading")Overview

There are various groups of APIs that provide key parts of Vault Payments functionality. This section describes the general characteristics of these APIs.

### [](#api_types "Copy link to heading")API types

Vault Payments consist of two types of APIs:

-   The *REST APIs* use predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.
    
-   The *Streaming APIs* use Kafka to emit messages to a series of Kafka topics. These messages are events which reflect changes of resources in Vault Payments.
    

chat\_bubble

There are also APIs available in the Vault Payments Sandbox only, these include simulator and cleartext endpoints. These can be identified by the `/sandbox` URL prefix.

### [](#request_methods "Copy link to heading")Request methods

The following table lists the request methods supported by the API:

 
| Method | Description |
| --- | --- |
| 
GET

 | 

Retrieves data from a resource.

 |
| 

POST

 | 

Submits data to a resource. For Vault Payments this is also used to retrieve sensitive resource information.

 |
| 

PUT

 | 

Updates data of an existing resource.

 |
| 

DELETE

 | 

Deletes a resource.

 |

chat\_bubble

All API requests must be made over HTTPS. Requests made over HTTP will fail. Requests without authentication will also fail.

The base path refers to the common path for the API. For example:

### [](#request_parameters "Copy link to heading")Request parameters

You can use a range of request parameters to control what data is returned in an endpoint response.

 
| Parameter type | Description |
| --- | --- |
| 
Header

 | 

Parameters included in the request header, usually related to authorisation

 |
| 

Path

 | 

Parameters within the path of the endpoint, before the query string (`?`). These are usually enclosed in curly braces `{path parameter}`. The path parameter is often a URI for a resource. For example, `{product_id}`. These types of parameters are mainly used in PUT and GET requests.

 |
| 

Query string

 | 

Parameters in the query string of the endpoint, after the (`?`).This parameter can also be used to submit arrays. For example, to pass several `foo_ids` fields, use:

`/v1/endpoint?foo_ids=1&foo_ids=2&foo_ids=3`

These types of parameters are mainly used in GET requests to list endpoints.

 |
| 

Request body

 | 

Parameters included in the request body. Usually submitted in JSON format.

 |

### [](#http_request "Copy link to heading")HTTP request

#### [](#headers "Copy link to heading")Headers

The API uses the following request header:

-   The Authorization header includes the API key and session tokens.
    

These headers won’t change any of the functionality of the underlying API call. Requests will behave identically whether they’re included or not.

#### [](#request_body "Copy link to heading")Request body

The request body for most GET, POST and PUT calls, must be in JSON format unless stated otherwise.

### [](#status_codes "Copy link to heading")Status codes

The API supports a number of different HTTP status codes to help you determine the success or otherwise of your request.

The API uses the following HTTP status codes:

  
| Code | Meaning | Notes |
| --- | --- | --- |
| 
200

 | 

Success

 | 

Successful request and response.

 |
| 

400

 | 

Bad Request

 | 

Invalid arguments in the request. Please review the request arguments and send again.

 |
| 

401

 | 

Unauthorized

 | 

The request could not be authenticated. Example: `No Authentication token provided`. Please provide a valid Authentication token.

 |
| 

403

 | 

Forbidden

 | 

The client does not have permission to perform the request.

 |
| 

404

 | 

Not Found

 | 

The requested resource could not be found.

 |
| 

405

 | 

Method Not Allowed

 | 

The requested resource exists, but was requested with an invalid method.

 |
| 

408

 | 

Request Timeout

 | 

A complete request was not received by the client within the allowed time. You can safely retry.

 |
| 

429

 | 

Too Many Requests

 | 

You are sending too many requests within a time period. Slow down!

 |
| 

500

 | 

Internal Server Error

 | 

We had a problem with our server. Please try again later.

 |
| 

503

 | 

Service Unavailable

 | 

We’re currently unavailable. Please try again later.

 |

### [](#update_masks "Copy link to heading")Update masks

When you’re updating resources, you must provide update masks for the fields being updated via a string array with snake\_case fields. If a field mask references a property of a nested object, the object must exist on the request but it can be empty.

For example, if an update mask contains the path `details.first_name`, `first_name` can be empty but the `details` object must not be empty.

### [](#omitted_by_default "Copy link to heading")Omitted by default

By default, fields marked as `omitted by default` will not be automatically populated because their content is either large in size or costly to compute. These fields may be populated by passing the query parameter `fields_to_include` with values from `IncludeField`.

## [](#authentication "Copy link to heading")Authentication

Vault Payments APIs access is achieved using Bearer tokens ([RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)). Once a token is generated, it should be attached to an API request using the `Authorization` header with the bearer scheme. That is:

Vault Payments supports either [JWTs](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#json_web_tokens) or [opaque tokens](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#opaque_tokens), see below for more information.

### [](#token_validation "Copy link to heading")Token validation

For both JWT and Opaque tokens, we will refer to the information tied to the token as claims from now on. Claims are viewed as general JSON object containing key/value pairs. See [JWT](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#json_web_tokens) and [opaque token](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#opaque_tokens) section for a breakdown of required/optional claims for each tokens.

For authorisation, either `scp` claim (a JSON array) or `scope` claim (JSON space-separated string) must be provided. Vault Payments uses a Rego policy which requires that at least one of these claims contains an API scope associated with the API endpoint being called. The following is the default Rego policy attached to the API:

Note that if a token has roles defined then those roles are internally translated to `user permissions` which are effectively scopes. It is not recommend to use roles for machine to machine access, see [User Access Management](/vault-payments/latest/EN/app/user_access_management/) for more information about roles.

### [](#json_web_tokens "Copy link to heading")JSON web tokens

This section describes the usage of JWTs. JWTs are defined by [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) which defines the format itself and [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068) which focused more on issuing OAuth 2.0 access tokens as JWT.

Generally, each JWT must be signed with the private key of a public key pair. Vault Payments is then provided with the public key of this key pair, which it uses to verify the signature on the JWT, confirming its authenticity. Once the signature on the JWT has been verified, Vault Payments then authorises the request by validating the claims within the JWT.

For a token to be accepted, the following JWT claims MUST be provided in the JWT body:

-   Issuer (`iss`) - unique identifier of the principal that issued the token.
    
-   Issued at timestamp (`iat`) - the number of seconds since the Unix epoch, defining when the JWT was issued.
    
-   Expiry timestamp (`exp`) - the number of seconds since the Unix epoch, defining when the JWT expires.
    

Additionally the scope claim must be provided as explained [above](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication).

The following claims are optional, but recommended:

-   Subject identifier (`sub`) - a unique identifier for the actor associated with the JWT.
    
-   Not before timestamp (`nbf`) - the number of seconds since the Unix epoch, defining when the JWT becomes valid.
    
-   Audience (`aud`) - unique identifier for the recipients that the token is intended for.
    

A typical example of a decoded JWT header and claims file that conforms to the requirements outlined above, is shown below:

Here are some general recommendations to follow when implementing JWTs to provide a secure system:

-   The private key used to sign the JWTs should be kept separate from the user or system that requires a JWT.
    
-   The JWT procurement process should verify that the user or system requiring a JWT is allowed a JWT with the required claims.
    

Vault Payments supports the following signature algorithms:

-   ECDSA-SHA256 (ES256)
    
-   ECDSA-SHA384 (ES384)
    
-   ECDSA-SHA512 (ES512)
    
-   ED25519 (EdDSA)
    
-   RSA-SHA256 (RS256)
    
-   RSA-SHA384 (RS384)
    
-   RSA-SHA512 (RS512)
    

error

We strongly recommend that the lifetime of issued JWTs be as short as possible to limit the impact, should a token be leaked. Typically, the lifetime value is set to at least 5 minutes, and no more than 24 hours.

Vault Payments does not track the status of user accounts associated with JWTs, nor does it use token introspection to determine whether a JWT has been revoked. If there are concerns that a live JWT has leaked, the most effective way of preventing that JWT from being accepted by Vault Payments is to rotate the public keys used by Vault Payments. Vault Payments automatically fetches the latest JWKS when it encounters a JWT with a key ID that is not known to Vault Payments. In addition, Vault Payments periodically refreshes its JWKS cache, evicting stale keys in the process.

### [](#opaque_tokens "Copy link to heading")Opaque tokens

Vault Payments also supports tokens that are opaque and don’t have a structure to self-contain information. Thought Machine strongly suggest to use JWTs as they do not require an additional network call to validate the token.

Opaque tokens are validated following the Token Introspection specification described in the [RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662), which defines how to query an OAuth2.0/IdP server to determine the active state of the token and its claims.

It is expected that the Introspection endpoint responds with a JSON object in "application/json" format with the following **mandatory claims**:

-   Active (`active`) - boolean indicator of whether or not the presented token is currently active.
    

Additionally the scope claim must be provided as explained [above](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication). See [JWT section](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#json_web_tokens) for additional optional claims.

An additional custom HTTP header is required when authenticating requests using opaque tokens:

Issuer is the unique identifier of the server that issued the token which is verified and agreed during the onboarding process.

**Revocation** for opaque tokens is controlled by the issuer. However as optimisation, Vault Payments caches tokens for 10 minutes which means that invalidating a token could take as long as the caching period to take effect.

Should the Introspection endpoint requires authentication, Vault Payments can store a list of client identifier / client secret pairs related to an endpoint. Those secrets are sent as defined by [the Basic authentication scheme](https://datatracker.ietf.org/doc/html/rfc2617#section-2) within the `Authorization` HTTP header:

## [](#errors "Copy link to heading")Errors

The API uses an Error JSON object to return errors. The format of the JSON object is:

The following table describes the components used in the object:

 
| Component | Description |
| --- | --- |
| 
`message`

 | 

A human-readable message describing the error. (The wording of the messages may change between Vault releases.)

 |
| 

`code`

 | 

The Error Code of the error indicating the type of error that has occurred. See [Error Codes](#error_codes) below.

 |
| 

`details`

 | 

An array of payloads containing specific details of the error that occurred. (See [Error Details](#error_details) below.) The payload varies based on the provided code. See [API method documentation](/vault-payments/latest/EN/api/) for more information.

 |
| 

`tracing_id`

 | 

The Tracing ID of the request in which the error is raised.

 |

For the list of error codes and details any individual method can return, see the error response information in the documentation for that API method.

For API methods that support error details, the following information is provided:

-   All possible returned codes for the method.
    
-   All possible returned details for the method.
    
    -   For code `FAILED_PRECONDITION` , all possible `violation_type`s and `metadata` fields are included.
        
    

### [](#error_codes "Copy link to heading")Error codes

The following table describes the error codes that can be generated.

   
| Code | HTTP Status Code | Possible to Retry | Description |
| --- | --- | --- | --- |
| 
`CANCELLED`

 | 

499

 | 

Yes

 | 

The operation was cancelled (by the caller).

 |
| 

`UNKNOWN`

 | 

500

 | 

No

 | 

An unknown problem has occurred on the server.

 |
| 

`INVALID_ARGUMENT`

 | 

400

 | 

No

 | 

The request contained invalid arguments.

 |
| 

`DEADLINE_EXCEEDED`

 | 

504

 | 

Yes

 | 

The complete request was not received within the allowed time. May be returned even if the operation has completed successfully.

 |
| 

`NOT_FOUND`

 | 

404

 | 

No

 | 

The requested resource was not found.

 |
| 

`ALREADY_EXISTS`

 | 

409

 | 

No

 | 

Returned when an attempt to create a resource failed because a matching resource already exists.

 |
| 

`PERMISSION_DENIED`

 | 

403

 | 

No

 | 

The client does not have permission to perform the request.

 |
| 

`RESOURCE_EXHAUSTED`

 | 

429

 | 

Yes

 | 

Returned when too many requests are sent within a time period.

 |
| 

`FAILED_PRECONDITION`

 | 

400

 | 

No

 | 

The operation was rejected because the system is not in a state required for the operation’s execution.

 |
| 

`ABORTED`

 | 

409

 | 

Yes

 | 

The operation was aborted, typically due to concurrency issues.

 |
| 

`OUT_OF_RANGE`

 | 

400

 | 

No

 | 

The operation was attempted past the valid range.

 |
| 

`UNIMPLEMENTED`

 | 

501

 | 

No

 | 

The operation is not implemented, not supported or not enabled.

 |
| 

`INTERNAL`

 | 

500

 | 

No

 | 

A problem has occurred on the server.

 |
| 

`UNAVAILABLE`

 | 

503

 | 

Yes

 | 

The service is currently unavailable.

 |
| 

`DATA_LOSS`

 | 

500

 | 

No

 | 

The operation has experienced unrecoverable data loss or corruption.

 |
| 

`UNAUTHENTICATED`

 | 

401

 | 

No

 | 

The request could not be authenticated.

 |

### [](#error_details "Copy link to heading")Error details

Errors have a `details` field which may include specific information about the error that occurred.

For more information please see the error response documentation for the relevant API Method.

The following error details are supported in the `details` field, multiple can be returned at the same time:

-   `NOT_FOUND`
    
-   `ALREADY_EXISTS`
    

#### [](#bad_request "Copy link to heading")Bad request

`BadRequest` describes the violations in the client’s request often due to invalid or missing field values.

Commonly used for errors with the following codes:

-   `INVALID_ARGUMENT`
    

Indicated by `@type`

A `BadRequest` includes one or more `field_violations`.

A violation’s `violation_type` indicates the type of validation error is generic across all APIs. These include but are not limited to `INVALID_FORMAT`, `INVALID_VALUE`, `REQUIRED_FIELD`, `DUPLICATE_FORMAT`.

The field that caused the violation is specified using its JSON path name in the `field` field.

In addition each violation includes a `description` field which contains a human-readable message describing the error. Wording of descriptions may change between Vault releases.

#### [](#invalid_code "Copy link to heading")Invalid code

`InvalidCode` describes violations from source code in the client request, due to syntax errors or operations that are disallowed by the execution environment that the code will run within.

Commonly used for errors with the following codes:

-   `INVALID_ARGUMENT`
    

Indicated by `@type`

An `InvalidCode` detail includes one or more `violations`. Each of which can contain:

-   `violation_type` - indicating the broad category of error. It is limited to a discrete set offending values that includes, but is not limited to: `DisallowedError`, `DefinitionError`, `SyntaxError`.
    
-   `code` - a snippet of the offending code which may or may not be present.
    
-   `description` - a human readable description, explaining the nature of the violation.
    
-   `lineno`, `offset`, `end_lineno`, and `end_offset` - zero or more of these may be present to indicate the location within the source code where the violation occurred, if the location is known and applicable.
    

#### [](#precondition_failure "Copy link to heading")Precondition failure

`PreconditionFailure` describes what preconditions have failed; a precondition is defined as:

A condition or predicate that must always be true just prior to the execution of some section of code or before an operation in a formal specification.

Commonly used for errors with the following codes:

-   `FAILED_PRECONDITION`
    

Indicated by `@type`

A `PreconditionFailure` includes one or more `violations`. A violation’s `violation_type` indicates what precondition was violated and is defined for each API Method. In addition each violation can also include `metadata` which may include further information, such as resource state, to help identify the issue.

Please see Method specific documentation for violation types, what causes them and the available metadata.

#### [](#resource_information "Copy link to heading")Resource information

`ResourceInfo` describes what resources produced the error when processing the request.

Commonly used for errors with the following codes:

-   `NOT_FOUND`
    
-   `ALREADY_EXISTS`
    

Indicated by `@type`

A `ResourceInfo` includes an array of `resource_ids`. For example, if multiple resources were not found during a `BatchGet` request the missing Resource IDs would be included in this field.

## [](#idempotency "Copy link to heading")Idempotency

All actions which modify states in Vault’s APIs are *idempotent*. This means they’re safe to retry and will produce exactly the same result despite having been requested before. Idempotency enables solutions to be built which are resilient to network and infrastructure problems, providing a better experience for the user.

Some requests can’t determine whether you meant to make two identical calls or to retry a single call (for example upon making a transfer or payment). You can indicate this using the `request_id` field which is present in all state-modifying requests.

The value of this field must be unique for all distinct calls to the API. For this reason we suggest using something like UUIDv4 to ensure uniqueness.

When you want to:

-   Retry the same request, use the same `request_id`
    
-   Make a similar but distinct request, use a new value for the `request_id`
    

Determining whether or not to retry a request should be based on the HTTP response code. For further information, see the Status codes section in the [Overview](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#overview).

## [](#pagination_guarantees "Copy link to heading")Pagination guarantees

### [](#overview_2 "Copy link to heading")Overview

In Vault, resources retrieved using a List endpoint are displayed using pagination defined by a page token that is included in subsequent API requests. If the resources that are being retrieved change while pagination is in progress, the resources displayed will depend on the data consistency guarantee associated with the List endpoint used.

### [](#data_consistency_guarantee_levels_for_list_endpoints "Copy link to heading")Data consistency guarantee levels for list endpoints

If the resources retrieved change during pagination and the List endpoint offers:

-   Best-effort consistency guarantee, responses may not contain all entries and/or may contain duplicate or inconsistent entries; do not use List endpoints of this level to calculate accurate aggregates via pagination.
    
-   Page-level consistency guarantee, responses may contain entries of varying ages. Pagination is more robust to concurrent data mutation, but it may be temporally inconsistent, as the requests are not pinned against the state of the system at a particular point in time; do not use List endpoints of this level to retrieve snapshots of the system for a given timestamp.
    
-   Snapshot consistency guarantee, responses will contain entries as of a given timestamp. Pagination is robust to concurrent data mutation and is temporally consistent, as the requests are pinned against the state of the system at a particular point in time; do not use List endpoints of this level to retrieve the most up-to-date view.
    

chat\_bubble

See the API documentation for each List endpoint to view its data consistency guarantee type.

### [](#best_effort_consistency "Copy link to heading")Best-effort consistency

#### [](#duplicate_entry_example "Copy link to heading")Duplicate entry example

1.  Retrieve page N; the last resource displayed on page N is resource with ID X.
    
2.  A new resource, matching the List filters, is created.
    
3.  Retrieve page N+1; if the results are ordered by descending create timestamp, resource with ID X will also display on page N+1.
    

#### [](#missing_entry_example "Copy link to heading")Missing entry example

1.  Retrieve page N; the last resource displayed on page N is resource with ID X.
    
    chat\_bubble
    
    If page N+1 is retrieved at this time, the first resource on page N+1 has ID Y.
    
2.  Resource with ID X is updated and no longer matches the List filters.
    
3.  Retrieve page N+1; resource with ID Y will not display on page N+1.
    

### [](#page_level_consistency "Copy link to heading")Page-level consistency

#### [](#no_duplicate_entry_example "Copy link to heading")No duplicate entry example

1.  Retrieve page N; the last resource on page N is resource with ID X.
    
2.  A new resource with ID Y, matching the List filters, is created.
    
3.  Retrieve page N+1; resource with ID X will not display on page N+1.
    

chat\_bubble

If the List endpoint offers best-effort consistency guarantee, resource with ID X may display again on page N+1.

#### [](#no_missing_entry_example "Copy link to heading")No missing entry example

1.  Retrieve page N; the last resource displayed on page N is resource with ID X.
    
    chat\_bubble
    
    If page N+1 is retrieved at this time, the first resource on page N+1 has ID Y.
    
2.  Resource with ID X is updated and no longer matches the List filters.
    
3.  Retrieve page N+1; Resource with ID Y will display on page N+1.
    

chat\_bubble

If the List endpoint offers best-effort consistency guarantee, resource with ID Y may not display on page N+1.

#### [](#no_snapshot_view_example "Copy link to heading")No snapshot view example

1.  Retrieve page N at time t.
    
2.  A new resource with ID X, matching the List filters, is created at time t+1.
    
3.  Resource with ID X may or may not appear on later pages, depending on ordering. For example, if the results are ordered by:
    
    -   Descending create timestamp, resource with ID X would not appear on later pages as it is the most recently-created resource.
        
    -   Ascending create timestamp, resource with ID X appears on the last page.
        
    

chat\_bubble

Changes to the resources do not affect previously retrieved pages, which show the status of the system at time t, while following pages show the status of the system at time t+1.

### [](#snapshot_consistency "Copy link to heading")Snapshot consistency

#### [](#snapshot_view_example "Copy link to heading")Snapshot view example

1.  Retrieve page 1 at time t.
    
2.  A new resource with ID X, matching the List filters, is created at time t+1.
    
3.  Resource with ID X will not appear in later pages, as all pages are retrieved as they were at time t.
    

## [](#encrypting_sensitive_data "Copy link to heading")Encrypting sensitive data

Vault Payments handles information which falls within PCI-DSS scope when issuing cards and setting up card programmes. Vault Payments imports and exports PCI sensitive data in an encrypted format based on Elliptic Curve Diffie-Hellman and [HMAC-based Key Derivation Function](https://datatracker.ietf.org/doc/html/rfc5869).

All endpoints which handle sensitive data take as input an `EncryptionRequest` object and return an `EncryptionResponse` object.

The `EncryptionRequest` contains:

-   `client_public_key`: Your ephemeral public key that Vault Payments will use to derive the shared encryption key. This is a hex-encoded ASN.1 DER format ECC P-256 public key.
    
-   `signature`: Your SHA-256 signature on the client public key
    

The `EncryptionResponse` contains:

-   `server_public_key`: Vault Payments' ephemeral public key that you will use to derive the shared encryption key. This is a hex-encoded ASN.1 DER format ECC P-256 public key.
    
-   `signature`: Vault Payments' SHA-256 signature on the server public key
    
-   `shared_info`: The hex-encoded random information to use in the key derivation function to derive the shared key
    
-   `shared_key_id`: The ID of the shared key returned by the `InitiateEncryptedSession` endpoint
    

### [](#prerequisites "Copy link to heading")Prerequisites

During onboarding, two sets of ECC P-256 public keys (one from you and one from Vault Payments) are exchanged to verify the other party’s identity.

When making requests for sensitive PCI data you will need to sign an Ephemeral Client Public Key with the `Client Verification Key` so Vault Payments can verify the request originates from you. We sign the Ephemeral Server Public Key with the `Server Signing Key`. You can use it to verify our signature on the responses.

For the Sandbox only, your verification key is already imported into Vault Payments. This corresponds to the following signing private key:

This private key should be used when signing the `client_public_key` in an `EncryptionRequest`. Vault Payments' signature in the `EncryptionResponse` can be ignored for the Sandbox.

### [](#steps "Copy link to heading")Steps

1.  Generate an ECC P-256 ephemeral key pair, signing the public key.
    
2.  Send the sensitive request to Vault Payments, setting the `EncryptionRequest`. The endpoint will return an `EncryptionResponse` object.
    
3.  Derive the AES-256 shared key using the generated ephemeral private key and the details in the returned `EncryptionResponse`.
    
4.  Use the shared key to encrypt or decrypt the sensitive details, noting that:
    
    -   Sensitive details are sent and received as hex-encoded bytes.
        
    -   The cleartext is zero-padded to the cipher block length (16 bytes).
        
    -   The block-long initialisation vector used during encryption in CBC mode is prepended to the ciphertext.
        
    

When importing data, a request must be sent to the `InitiateEncryptedSession` endpoint to initiate the key exchange and retrieve the `EncryptionResponse` required to encrypt the sensitive data. The `EncryptionResponse` returned by the `InitiateEncryptedSession` endpoint contains a shared key ID. This is a single-use key ID that must be passed in the subsequent request to import the encrypted data. For example, to set up a new Account Range:

1.  Call `POST /api/v1/cards/sessions:initiate` with an `EncryptionRequest` object, specifying `Type` to be "SESSION\_TYPE\_CREATE\_ACCOUNT\_RANGE". This will return an `EncryptionResponse` object with the `shared_key_id` set.
    
2.  Encrypt the range boundaries and call [POST /api/v1/cards/account-ranges](/vault-payments/latest/EN/api/payments_api#_payments_v1_cards_account_ranges_AccountRange_CreateAccountRange), setting the encrypted `range_from` and `range_to`, and the `shared_key_id` field.
    

A hands on tutorial may be found under [this section](/vault-payments/latest/EN/cards/tutorials/encryption).

## [](#ping_api_endpoint "Copy link to heading")Ping API endpoint

Vault Payments exposes a ping API endpoint at `/api/ping`. A successful request to this endpoint will receive an HTTP 200 OK response.

This endpoint is designed for basic network reachability checks to Vault Payments and should not be used as a full health check mechanism.

chat\_bubble

The ping API endpoint does not require authentication, and callers do not need to include an `Authorization` header in their request.