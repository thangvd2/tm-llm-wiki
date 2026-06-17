---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/troubleshooting"
title: "Troubleshooting"
scraped_at: "2026-06-16T15:23:23.396Z"
images: 0
---

# Troubleshooting

This section details various common issues when configuring a SAML IdP for single sign-on with Vault Core. Usually, this is due to a mismatch between the configuration of the IdP and the Service Provider (SP).

chat\_bubble

If Vault Core is hosted by Thought Machine using SaaS, the values.yaml file used to configure Vault Core is managed by Thought Machine. Because of this, any changes to this file need to be handled by providing Thought Machine with a service change request. For SaaS clients, where the following guidance makes reference to `values.yaml`, instead refer to the configuration provided in correspondence with Thought Machine.

## [](#redirect_to_idp_failures "Copy link to heading")Redirect to IdP failures

This issue appears after first clicking the *Log in with SSO* button within the Operations Dashboard. The browser returns a `404 Not Found` error. Alternatively, the browser may display an error message indicating that the site was not found or cannot be reached.

Check the URL that appears in the browser’s URL bar after clicking the *Log in with SSO* button. If the URL does not match the SSO URL defined by the IdP, then the redirect fails. Check that the value used for the SSO URL in the values.yaml file matches, and amend this value if necessary. When you have updated values.yaml, you need to reinstall Vault Core.

If the URL in the values.yaml file is in agreement with that provided by the IdP, the error is likely to be due to an issue with the IdP’s underlying infrastructure. Liaise with the relevant team or organisation that manages the IdP in order to resolve the problem.

## [](#idp_request_errors "Copy link to heading")IdP request errors

This issue appears after the user is redirected to their IdP to log in. The IdP displays an error message indicating that there is a problem with the request. This could be an HTTP 400 error, or it could be a more user-friendly error message.

To establish the exact cause of this error, examine the logs produced by the IdP. Typically, the error occurs because of a mismatch between the encryption and signature settings of the IdP and SP. For example, if Vault Core as the SP produces a request without a signature where the IdP expects one, the IdP rejects the request. Similarly, if the SP entity ID is incorrectly specified within the IdP, the IdP rejects the SAML request.

When you have identified the root cause, fix the error by updating the IdP configuration in the `.saml_sp` section of the values.yaml to align with the IdP’s expectations.

## [](#certificate_mismatch "Copy link to heading")Certificate mismatch

This issue appears after successfully logging into the SAML IdP. The subsequent request to the `/api/saml/acs` endpoint on the Operations Dashboard returns an `400 Bad Request` error message. The vault-admin-website deployment also produces the following log message:

`SAML ACS errors were: Signature validation failed. SAML Response rejected.`

Fix this issue by making sure that the SAML certificate has been copied correctly from the IdP. Ensure that the entire string has been copied correctly into the `values.yaml` file via the `.saml_idp.certificate` variable. When you have updated `values.yaml`, you need to reinstall Vault Core.

## [](#invalid_issuer "Copy link to heading")Invalid Issuer

This issue appears after successfully logging into the SAML IdP. The subsequent request to the /api/saml/acs endpoint on the Operations Dashboard returns a `400 Bad Request error` message. The `vault-admin-website` deployment also produces the following log message:

The remediation for this issue is to ensure that the SAML IdP entity ID has been correctly set within the `values.yaml` file via the `.saml_idp.entity_id` variable. Ensure that the entire string has been copied correctly either into `values.yaml`. Once you have updated the `values.yaml` file, you must reinstall Vault Core.

## [](#user_has_no_role "Copy link to heading")User has no role

This issue appears after successfully logging into the SAML IdP. The subsequent request to the `/api/saml/acs` endpoint on the Operations Dashboard returns the JSON error message:

The `"message"` value may instead read `"Length of external reference list must be greater than 0 and equal to or less than 1000".`

This error can occur for several reasons:

-   The roles claim is not correctly defined by the `.saml_idp.roles_attribute` variable in the values.yaml file.
    
-   The SAML response provided by the IdP after the user successfully logs in does not contain any roles.
    

Where the roles claim is not correctly defined by the `.saml_idp.roles_attribute` variable, check that the value for the roles attribute has been correctly set in the values.yaml file. This role claim must also be configured and enabled within the IdP; check the IdP configuration to ensure this is the case.

Where the SAML response after the user successfully logs in does not contain any roles, check the SAML response provided by the IdP. The raw response is within the body of the request issued to the `/api/saml/acs` endpoint, and is URL- and base64-encoded. The response first needs to be URL-decoded and then base64-decoded. The role claims should be present within the `AttributeStatement` section of the resulting XML.

## [](#user_has_no_permissions "Copy link to heading")User has no permissions

This issue appears after successfully logging into the SAML IdP. After logging in, the user is redirected to the `/no-permissions` endpoint after successfully logging into their IdP. The following error message is then displayed:

`You do not have the correct permissions assigned to access this content.`

There are two reasons this error might appear:

-   The Role(s) assigned to the user does not have any permissions assigned
    
-   The Role(s) assigned to the user do not exist within Vault Core
    

In both cases, Thought Machine recommends that you decode the SAML response provided to the `/api/saml/acs` endpoint when the user logs in. The SAML response is included in the body of this request as a URL- and base64-encoded string. The role reference is specified within the `AttributeStatement` section of this response.

To verify that the role exists within Vault Core, you can fetch all roles using the `GET /v1/roles` endpoint on the Access Control API. Depending on the number of roles created within Vault Core, you may need multiple requests to retrieve all pages of results.

Locate the Role within the page or pages of results by cross referencing the `external_reference` field for each Role with the role extracted from the SAML response. If the Role does not exist, you need to create it using the Access Control API or the Operations Dashboard, using a different user with the necessary permissions.

If the Role is present within the response, use the `id` field of that Role to make a request to GET /v1/role-vault-permission-assocs on the Access Control API, using the Role ID as an optional `role_id` query parameter to only return associations related to the relevant Role. If no associations are returned, you need to associate the Role with the required Vault Permissions either using the `POST /v1/role-vault-permission-assocs` endpoint on the Access Control API or using the Operations Dashboard. In the latter case, it requires a different user with the required permissions in order to make this modification.