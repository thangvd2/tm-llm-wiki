---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_and_configuring_the_supported_saml_ldp"
title: "Setting up and configuring the supported SAML ldP"
scraped_at: "2026-06-22T19:14:52.729Z"
images: 0
---

# Setting up and configuring the supported SAML ldP

Bank-hostedSaaS

You need to set up the supported SAML IdP before configuring it with Vault Core.

Vault Core supports the use of any SAML 2.0-based IdP in principle, including Azure Active Directory, Google Cloud Identity, Okta, AWS IAM Identity Center and OneLogin. Currently, we document the setup of Okta, Google Cloud Identity, AWS IAM Identity Center and Azure Active Directory. We plan to add support for other IdPs in the future.

For details of setting up your chosen supported IdP, see:

-   [Setting up Okta as your SAML IdP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_okta_as_your_saml_ldp#overview)
    
-   [Setting up Google Cloud Identity as your SAML IdP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_google_cloud_identity_as_your_saml_ldp)
    
-   [Setting up AWS IAM Identity Center as your SAML IdP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_aws_iam_as_your_saml_idp)
    
-   [Setting up Azure Active Directory as your SAML IdP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp).
    

## [](#supported_saml_functionality "Copy link to heading")Supported SAML functionality

Support within Vault Core for the encryption and signing of requests, responses and assertions is currently limited. Thought Machine plans to support such functionality in forthcoming releases of Vault Core. If you require support for the encryption and signing of requests, responses and assertions, contact Thought Machine.