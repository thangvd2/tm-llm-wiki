---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/app/authentication"
title: "Authentication"
scraped_at: "2026-06-17T15:46:42.649Z"
images: 0
---

# Authentication

Vault Payment Apps (VPA) allows users to login via OpenID Connect (OIDC).

OpenID Connect is an authentication protocol that can be used by an application to authenticate users against a central Identity Provider (IdP), allowing federated applications and organisations to communicate and trust each other’s users. There are two main entities at play:

-   A Relying Party (RP) entity, the application provider. The Vault Payment App acts as a Relying Party.
    
-   An Identity Provider (IdP) / OpenID Provider (OP) entity, allowing authentication and authorisation of the user trying to access the application via the RP.
    

chat\_bubble

Even if you do not intend to use the Vault Payment Apps, it is recommended to set up an IdP for Vault Payments to manage API access. See the section [Authentication](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication) for more information.

VPA is compatible with any OIDC IdP that adheres to the specified requirement outlined in [OIDC in Vault Payments](/vault-payments/latest/EN/app/authentication#oicd_payments).

## [](#openid_connect_oidc_overview "Copy link to heading")OpenID Connect (OIDC) overview

OIDC is a protocol based on the OAuth 2.0 framework (for more information on OAuth 2.0 click [here](https://oauth.net/2/)). Generally, this protocol uses the authorization code, access token, and refresh token as described in the OAuth 2 specifications while defining a new type of token called ID Token (for more information on the OpenID Connect specification click [here](https://openid.net/specs/openid-connect-core-1_0.html)).

The following is a list of RFCs useful to understand our implementation and how to integrate with it:

-   OAuth 2.0 Core ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749))
    
-   PKCE: Proof Key for Code Exchange ([RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636))
    
-   OpenID Connect [Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
    
-   JWT Profile for OAuth Access Tokens ([RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068))
    

In particular, the following RFCs explain about the token format itself whether JWT or opaque:

-   Bearer Token Usage ([RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750))
    
-   JSON Web Token (JWT) format ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519))
    
-   Token Introspection ([RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662))
    

### [](#authentication_parties "Copy link to heading")Authentication parties

  
| Client requirement | Authentication party | Description |
| --- | --- | --- |
| 
✔︎

 | 

Relying Party (RP)

 | 

The application the user is trying to log into. This could be, for example, Vault Payments App.

 |
| 

✔︎

 | 

OpenID Provider (OP)

 | 

A separate service that is trusted by the RP to provide details of the user’s identity. In principle, Vault supports the use of any OpenID provider.

 |

### [](#authentication_flow "Copy link to heading")Authentication flow

The Relying Party (RP) and the OpenID Provider (OP) do not always directly speak to each other during the authentication process. As shown in the diagram below, the user is forwarded from one to the other at the beginning and end of the exchange. Both need to be accessible from the user’s browser. For more information on OpenID Connect click [here](https://openid.net/developers/how-connect-works/).

Vault Payments requires the Authorization Code Flow with Proof Key of Code Exchange (PKCE), the following describes on a high level how VP interacts with the OP to authenticate a user:

1.  The user logs in to the VP App by filling the Enter your organisation field.
    
2.  The App redirects the user to the OP.
    
3.  The user logs in to the OP.
    
4.  The OP verifies the user’s identity.
    
5.  The OP redirects the user back to VP with an access token and an ID token, which must contain the user’s roles.
    
6.  The App makes requests to the RP (Vault Payments' back-end) using the access token.
    

VP requires PKCE on top of the Authorization Code Flow to prevent malicious actions from intercepting an authorization code and using it to get tokens, ensuring that the application that requested an authorization code is the same application that uses the authorization code to obtain a token (for more information about PKCE click [here](https://oauth.net/2/pkce/)).

## [](#oidc_in_vault_payments "Copy link to heading")OIDC in Vault Payments

The following sections describe the requirements for VP to work with an OP, in brief:

-   OP should support the Authorization Code Flow with PKCE, described in further detail in the following section.
    
-   VP supports JWT or opaque tokens, however JWT is the recommended format.
    
-   By default the App uses the access token within requests to the APIs.
    
-   A custom claim to specify roles is required on the token used to call VP APIs.
    

### [](#idp_requirements "Copy link to heading")IdP Requirements

Vault Payments App requires an Identity Provider that fully supports the OpenID Connect protocol. OIDC standard endpoints such as the `.well-known/openid-configuration` endpoint are expected to be reachable by VP.

At the login stage, users are prompted to input their organization’s name, which redirects them to their organisation’s IdP login page. VPA initiates the Authorization Code Flow with PKCE flow and a minimal set of scopes is required:

-   `openid` scope which is mandatory to indicate the use of OIDC and request particular claims about the authenticated user.
    
-   `email` and `profile` scopes to receive information about the user which VP shows under the user’s profile.
    

Upon obtaining the ID and access tokens, by default the access token is used to make requests to Vault Payments APIs. Although we strongly suggest to issue access tokens as JWTs, Vault Payments also supports opaque tokens which require an Introspection endpoint as defined in [RFC 7662](https://datatracker.ietf.org/doc/html/rfc7662). See the section [Authentication](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication) for more information on APIs access.

The token used for the APIs must include a custom claim to represent user’s roles. The name of this claim can be agreed during the onboarding process, otherwise we would default to representing the claims as 'roles', as referenced in the rest of the documentation. This claim can be structured in one of two formats:

-   JSON array, containing string values that represent the user roles, for example:
    

`"roles": ["vp_payments_viewer", "vp_instruction_flows_viewer"]`

-   alternatively, as a space delimited string, for example:
    

`"roles": "vp_payments_viewer vp_instruction_flows_viewer"`

For [User Access Management](/vault-payments/latest/EN/app/user_access_management/) to be utilised effectively, at least one user [Role](/vault-payments/latest/EN/app/user_access_management#roles) must be created. The `roles` claim has the flexibility to include roles that are unrelated to the VPA. However, any such roles are ignored.

### [](#session_renewal "Copy link to heading")Session Renewal

VP uses the Authorization Code Flow with PKCE in conjunction with refresh tokens to renew sessions. During the initial authentication, the IdP returns an access token and a refresh token.

Four minutes before the expiry of the access token, the refresh token is used to request a new access token. If the refresh token has expired, the VP App notifies users that their session expires in 4 minutes and they need to re-authenticate to continue using the app past that time.

chat\_bubble

**Token lifetimes**

For a good user experience, we recommend setting reasonable lifetimes for your access tokens and session tokens:

-   four minutes before its expiry, the access token is automatically renewed using the refresh token; as such, we recommend setting an access token lifetime longer than 5 minutes
    
-   keep in mind that the refresh token lifetime determines how long a user can stay logged into the application before they need to re-authenticate
    

This leverages the `grant_type=refresh_token` parameter on the token renewal requests, which is used to obtain the new token.

error

If Refresh Tokens are not enabled, the Vault Payments App uses Silent Authentication to renew the session.

This leverages the `prompt=none` parameter on the token renewal requests, which is a parameter supported by the OpenID Connect protocol that allows applications to indicate that the authorization server must not display any user interaction (such as authentication) and to obtain a new token.

Silent Authentication relies on Third Party Cookies to be enabled for the browser in use. Therefore, if that feature is not enabled, the user’s session lasts as long as the access token’s expiration period.