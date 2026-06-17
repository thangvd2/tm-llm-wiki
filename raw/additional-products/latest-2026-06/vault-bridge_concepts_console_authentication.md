---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/console/authentication"
title: "Authentication"
scraped_at: "2026-06-17T05:14:31.127Z"
images: 0
---

# Authentication

The Vault Bridge Console allows users to log in via OpenID Connect (OIDC).

OpenID Connect is an authentication protocol that can be used by an App to authenticate users against a central Identity Provider (IdP), allowing federated Apps and organisations to communicate and trust each other’s users. There are two main entities involved:

-   A Relying Party (RP) entity, the App provider. The Vault Bridge Console acts as a Relying Party.
    
-   An Identity Provider (IdP) / OpenID Provider (OP) entity, allowing authentication and authorisation of the user trying to access the App via the RP.
    

Vault Bridge is compatible with any OIDC IdP that adheres to the specified requirement outlined in [OIDC in Vault Bridge](/additional-product-offerings/latest/EN/vault-bridge/concepts/console/authentication#oicd_in_vault_bridge).

## [](#openid_connect_oidc_overview "Copy link to heading")OpenID Connect (OIDC) overview

OIDC is a protocol based on the OAuth 2.0 framework (for more information on OAuth 2.0 click [here](https://oauth.net/2/)). Generally, this protocol uses the authorization code, access token, and refresh token as described in the OAuth 2 specifications while defining a new type of token called ID Token (for more information on the OpenID Connect specification click [here](https://openid.net/specs/openid-connect-core-1_0.html)).

The following is a list of RFCs to help you understand our implementation and how to integrate with it:

-   OAuth 2.0 Core ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749))
    
-   PKCE: Proof Key for Code Exchange ([RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636))
    
-   OpenID Connect ([Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html))
    
-   JWT Profile for OAuth Access Tokens ([RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068))
    

In particular, the following RFCs explain about the token format itself:

-   Bearer Token Usage ([RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750))
    
-   JSON Web Token (JWT) format ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519))
    

### [](#authentication_parties "Copy link to heading")Authentication parties

  
| Client requirement | Authentication party | Description |
| --- | --- | --- |
| 
✔︎

 | 

Relying Party (RP)

 | 

The App the user is trying to log into. This could be, for example, Vault Bridge Console.

 |
| 

✔︎

 | 

OpenID Provider (OP)

 | 

A separate service that is trusted by the RP to provide details of the user’s identity. In principle, Vault Bridge supports the use of any OpenID provider.

 |

### [](#authentication_flow "Copy link to heading")Authentication flow

The Relying Party (RP) and the OpenID Provider (OP) do not always directly speak to each other during the authentication process. Instead, the user is forwarded from one to the other at the beginning and end of the exchange. Both need to be accessible from the user’s browser. For more information on OpenID Connect click [here](https://openid.net/developers/how-connect-works/).

Vault Bridge (VB) requires the Authorization Code Flow with Proof Key of Code Exchange (PKCE). The following describes at a high level how VB interacts with the OP to authenticate a user:

1.  The user logs in to the VB Console by filling the 'Enter your organisation' field.
    
2.  The Console redirects the user to the OP.
    
3.  The user logs in to the OP.
    
4.  The OP verifies the user’s identity.
    
5.  The OP redirects the user back to VB with an authorization code.
    
6.  The VB Console front end calls the OP to exchange the authorization code with an access token and an ID token, as part of the PKCE flow. The ID token must contain the user’s roles.
    
7.  The VB Console makes requests to the RP (Vault Bridge’s back end) using the access token.
    

VB requires PKCE on top of the Authorization Code Flow to prevent malicious actors from intercepting an authorization code and using it to get tokens, ensuring that the App that requested an authorization code is the same App that uses the authorization code to obtain a token (for more information about PKCE click [here](https://oauth.net/2/pkce/)).

## [](#oidc_in_vault_bridge "Copy link to heading")OIDC in Vault Bridge

The following sections describe the requirements for Vault Bridge (VB) to work with an OP. In brief:

-   OP should support the Authorization Code Flow with PKCE, described in further detail in the following section.
    
-   VB supports JWTs. Opaque tokens are not currently supported.
    
-   By default the VB Console front end sets the access token (not the ID token) on requests to Bridge APIs.
    
-   A custom claim to specify roles is required on the token used to call VB APIs.
    

### [](#idp_requirements "Copy link to heading")IdP Requirements

Vault Bridge requires an Identity Provider that fully supports the OpenID Connect protocol: the OIDC standard endpoints such as the `.well-known/openid-configuration` and `userinfo` endpoints are expected to be reachable by VB.

At the login stage, users are prompted to input their organisation’s name, which redirects them to their organisation’s IdP login page.

chat\_bubble

If a VB instance is configured with only a single tenant, then users will not be asked to enter their organisation name at all. Instead, the VB Console assumes that any user who clicks 'Log in' is attempting to log in as a member of that single tenant’s organisation.

By default, when VB initiates the Authorization Code Flow with PKCE flow, it requests the following minimal set of scopes:

-   `openid`, which is mandatory to indicate the use of OIDC and request particular claims about the authenticated user.
    
-   `email` and `profile`, to receive information about the user which VB shows under the user’s profile.
    
-   `offline_access`, if the OP supports this scope.
    

Upon obtaining the ID and access tokens, by default the Vault Bridge Console uses the access token when making requests to Bridge APIs.

The access token issued by the OP must include a custom claim to represent a user’s roles. The name of this claim can be customised during the onboarding process, otherwise we would default to using `"roles"` as the claim name. This claim can be structured in one of two formats:

-   JSON array, containing string values that represent the user roles, for example:
    
-   Or a space delimited string, for example:
    

Refer to [Roles](/additional-product-offerings/latest/EN/vault-bridge/concepts/console/roles) for the default Vault Bridge roles that can be granted to your organisation’s users in your OP as well as information on configuring custom roles.

If you grant a user any other role that is unknown to VB, it will be ignored by VB. This may be useful if you have configured VB’s integrations proxy to pass through the user’s token to other external systems that require other roles for access control.

### [](#session_renewal "Copy link to heading")Session Renewal

VB uses the Authorization Code Flow with PKCE in conjunction with refresh tokens to renew sessions. During the initial authentication, the IdP returns an access token and a refresh token.

Shortly before the expiry of the access token, VB sends a token renewal request to the OP with the `grant_type=refresh_token` parameter, to obtain a new access token.

chat\_bubble

**Token lifetimes**

For a good user experience, we recommend setting reasonable lifetimes for your access tokens and refresh tokens:

-   The access token is automatically renewed using the refresh token a few minutes before the access token expires. As such, we recommend setting an access token lifetime longer than 5 minutes
    
-   Keep in mind that the refresh token lifetime determines how long a user can stay logged into the App before they need to re-authenticate