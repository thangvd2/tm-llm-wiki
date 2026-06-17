---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/saas/support/vault_saas_faqs"
title: "Vault SaaS Frequently Asked Questions"
scraped_at: "2026-06-17T05:00:29.441Z"
images: 0
---

# Vault SaaS Frequently Asked Questions

Find answers to frequently asked questions about Vault Core SaaS.

## [](#what_is_the_operations_dashboard "Copy link to heading")What is the Operations Dashboard?

Thought Machine’s Operations Dashboard is an application that gives client employees role-based access to Vault Core data or processes. Your corporate Identity Provider (IdP) is used to authenticate and authorise access to the Vault Operations Dashboard.

Thought Machine uses the SAML 2.0 authentication protocol, which is widely supported by IdPs and by Vault Core.

## [](#do_we_need_to_configure_dns_settings_before_attempting_to_connect_to_a_vault_saas_environment "Copy link to heading")Do we need to configure DNS settings before attempting to connect to a Vault SaaS environment?

You must configure your DNS so that you can resolve the addresses of the Vault Core URLs and endpoints to the endpoints in your environment. They are not resolved through public DNS, for example. You should create DNS records for these hostnames in the DNS system.

Ensure that your DNS settings are aligned with the URLs and ports that we confirmed with you upon setting up your environment. For further advice, refer to our guide to [getting started with your client environment details](/vault-core/5-9/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide).

## [](#can_we_use_more_than_one_idp_metadata_endpoint_url_entity_id_and_certificate "Copy link to heading")Can we use more than one IdP metadata endpoint URL (Entity ID) and certificate?

When setting up SAML with your apps, it is possible to have multiple certificates; however, it is not possible to have multiple IdP Entity IDs.

## [](#why_is_there_an_error_when_attempting_single_sign_on_sso_with_the_operations_dashboard "Copy link to heading")Why is there an error when attempting single sign-on (SSO) with the Operations Dashboard?

Usually, this is due to a mismatch between the configuration of the IdP and the Service Provider (SP). The IdP receives information that is different to what it expects, which means that the IdP is unable to authenticate the request.

Thought Machine will configure your environment and access to the Operations Dashboard according to the information that you provide in your [onboarding request form(s)](/vault-core/5-9/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide#completing_the_onboarding_request_forms), and confirm your access settings in your [Client Environment details](/vault-core/5-9/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide). If there is a mismatch, then the first option to consider is whether you can check and align your SAML IdP settings to match the configuration of your environment. If you believe that any URLs or other settings are incorrect and this solution is not viable for you, then contact Thought Machine; we may need to update your `values.yaml` file and redeploy your environment.

The exact error and root cause depends on which setting is misaligned - the following table outlines some examples to help you identify where the issue may lie. You can find SAML requests and responses in the browser console.

  
| Error message or symptom | When | Explanation |
| --- | --- | --- |
| 
A message (or similar to):**404 Not Found****This site cannot be reached**

 | 

On clicking the **Log in with SSO** button in the Operations Dashboard.

 | 

Redirect to IdP error. This is caused by a mismatch of the SSO (Single Sign On) URL.

 |
| 

**HTTP 400 Bad Request**

 | 

When redirected to your SAML IdP.

 | 

IdP request error. We recommend checking your IdP logs.

 |
| 

**HTTP 400 Bad Request** Logs for the vault-admin-website deployment contain: `SAML ACS errors were: Signature validation failed. SAML Response rejected`

 | 

When redirected from your SAML IdP (after entering the correct credentials) back to the Operations Dashboard.

 | 

Certificate mismatch. The value for the SAML IdP certificate in `values.yaml` does not match the one in your IdP. Confirm the value for your IdP certificate to Thought Machine.

 |
| 

**HTTP 400 Bad Request** Logs for the vault-admin-website deployment contain: `SAML ACS errors were: Invalid issuer in the Assertion/Response`

 | 

When redirected from your SAML IdP (after entering the correct credentials) back to the Operations Dashboard.

 | 

Invalid issuer. The value for the SAML IdP Entity ID in `values.yaml` does not match the one in your IdP. Confirm your IdP Entity ID to Thought Machine. The IdP Entity ID is the `/metadata` endpoint URL that points to your SAML configuration for this environment, and includes a unique identifier for it.

 |
| 

A JSON-formatted error with one of the following messages: `Role references must be provided Length of external reference list must be greater than 0 and equal to or less than 1000`

 | 

After logging in to the Operations Dashboard.

 | 

User has no role. One or both of the following may apply:

1.  The configuration for the role claim label is not set correctly. Check the roles attribute label in your IdP and confirm it to Thought Machine.
    
2.  The user does not have a role assigned. Assign the necessary roles to the user logging in.
    





 |
| 

The user is redirected to the `/no-permissions` page in the Operations Dashboard, and receives the error: **You do not have the correct permissions assigned to access this content.**

 | 

After logging in to the Operations Dashboard.

 | 

User has no permissions. Ensure that the roles you’re logging in with exist in Vault Core and check that those roles are associated with the permissions that you need to view the relevant areas of the Operations Dashboard.One or both of the following may apply:

1.  You have created the necessary roles using the Vault Core API, but not associated them with any permissions.
    
2.  You logged in with roles that have not been created in Vault Core.
    





 |

chat\_bubble

You can find detailed information about these errors in the [SAML IdP guide.](/vault-core/5-9/EN/environment_and_installation/saas/introduction_to_vault_saas/docs_hub_links_saml_idp_and_vault_guide#setting_up_and_configuring_vault_with_a_saml_idp) However, most of its troubleshooting advice, such as changing `values.yaml`, applies to client-hosted deployments - this is because Thought Machine manages `values.yaml` for clients with a Vault Core SaaS environment.

## [](#how_long_are_audit_logs_stored_in_vault_saas "Copy link to heading")How long are Audit Logs stored in Vault SaaS?

Audit Logs record all requests and responses made to Vault Core’s APIs. The logs have a limited lifespan in Vault Core, so you can no longer access them after the configured time period. For Vault Core SaaS, this is set to seven days and clients cannot configure this otherwise.

## [](#can_clients_receive_alerts_concerning_a_vault_core_saas_environment "Copy link to heading")Can clients receive alerts concerning a Vault Core SaaS environment?

Thought Machine performs metrics-based monitoring across the SaaS infrastructure stack and Vault Core microservices to observe service health and performance.

Clients do not interact with SaaS alerts directly. The Thought Machine support team triage alerts, investigate and resolve issues transparently to clients whenever possible. If required, the support team will initiate contact with clients through the process documented in the *Service Procedure Manual*.

SaaS clients access Vault Core API endpoints in the Production environment which can be monitored for service availability and request latency using the client’s choice of tooling. To learn more, see [Vault API Monitoring Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/api).

For more information about our client observability offering, see [Observability overview](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/observability_overview).