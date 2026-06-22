---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/app/user_provisioning"
title: "User Provisioning"
scraped_at: "2026-06-17T15:46:46.019Z"
images: 0
---

# User Provisioning

Vault Payments App supports Just-in-Time (JIT) user provisioning, a streamlined method for managing user profiles. This feature automatically stores and updates user information as they log in, ensuring synchronisation with the IdP.

## [](#jit_just_in_time_provisioning "Copy link to heading")JIT (Just In Time) Provisioning

This section references the Users APIs that can be found at [Users API](/vault-payments/latest/EN/api/payments_api#users).

By default, when a user logs into the Vault Payments App via OpenID Connect (OIDC), Vault Payments extracts the user data from the token and stores it as a [User resource](/vault-payments/latest/EN/api/payments_api#users); when user information is changed in the IdP then Vault Payments updates its data on the next user’s login.

A User is uniquely identified by the sub (subject) and iss (issuer) claims from the ID Token. As stated in "[Claim Stability and Uniqueness](https://openid.net/specs/openid-connect-core-1_0.html#ClaimStability)", the sub claim is unique locally to the IdP and never reassigned within the Issuer for a particular user.

chat\_bubble

Vault Payments supports multiple IdPs (Issuers). If you have multiples IdPs configured for human-access and the same user (the same person) is allowed to access Vault Payments via any of those IdPs, then they are stored as different Users (one per IdP) within the system.

Vault Payments maps the following [OIDC Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) to these User API fields:

<table class="tableblock frame-all grid-all center" style="width: 50%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Claims</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Users Resouce Field</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">name</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">name</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">preferred_username</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">username</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">email</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">email</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">picture</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">image_url</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">roles (or custom name)</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">roles</p></td></tr></tbody></table>

The App uses the ID token for any other calls to Vault Payments, and the access token is not used if provided. The App can therefore tie actions to the user that performs it, for example for [Task assignment and approvals](/vault-payments/latest/EN/using_vault_payments/tasks).

#### [](#users_deactivation_and_deletion "Copy link to heading")Users Deactivation and Deletion

JIT provisioning synchronises user data when a user logs in; when a user leaves your organisation and are deactivated or removed from your IdP, their record in Vault Payments has to be updated via the Users API.

The [Update endpoint](/vault-payments/latest/EN/api/payments_api#_services_authentication_users_User_UpdateUser) can be used to update the status of a User to either `INACTIVE` or `DELETED`, while by default the status is `ACTIVE`. Updating a user to `INACTIVE` simply changes the status of the resource. This helps the App to enhance the UI based on the user’s status. We always recommend this option should an employee leave your organization or stop working with Vault Payments. However, should you wish to erase all PII information of a specific user from Vault Payments then the user’s status can be updated to `DELETED`. This not only changes the status but also deletes the following fields: name, username, email and image\_url.

chat\_bubble

We still retain identifiers such as the user ID, iss, and sub values. If a user who was previously deleted logs in to Vault Payments again via the IdP, their related User resource is automatically repopulated. This ensures that the IdP remains the single source of truth for access management.

#### [](#important_considerations_and_requirements "Copy link to heading")Important Considerations and Requirements

-   **IdP Configuration:** Identity Providers (IdPs) can be configured in various ways. For best experience, clients should ensure that the `name`, `email`, `preferred_username`, `picture`, and `roles` claims are populated in the OIDC ID token. Although we do not deny access should the ID token not have required claims (except for the roles claim needed for authorisation), the name claim is a requirement for any Vault Payments functionality that uses Users to function, which currently are:
    
    -   [Tasks](/vault-payments/latest/EN/using_vault_payments/tasks): Users are searched by name in order to assign them as assignee.
        
    
-   **Name for Identification:** The `name` claim is crucial for searching and identifying colleagues within Vault Payments.
    
-   **Inactive Users and Deletion:** Vault Payments retains user data even if a user is marked as inactive, to maintain historical records of actions performed by that user. You can delete a user’s personal information by updating the status to `USER_STATUS_DELETED`. However, access control must be managed by the IdP as Vault Payments does not deny access if, for example, the ID token is valid and authorised but the related User is in status `USER_STATUS_INACTIVE`.