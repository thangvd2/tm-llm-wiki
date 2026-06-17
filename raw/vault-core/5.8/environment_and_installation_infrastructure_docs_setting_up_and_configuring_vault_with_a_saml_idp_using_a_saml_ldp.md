---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/using_a_saml_ldp"
title: "Using a SAML ldP"
scraped_at: "2026-06-17T05:30:19.796Z"
images: 0
---

# Using a SAML ldP

## [](#logging_in_to_vault "Copy link to heading")Logging in to Vault

1.  Access the Operations Dashboard by clicking the Operations Dashboard endpoint link, for example `[http://{vault_ops_dash}](http://{vault_ops_dash})`. Then click the **Log in with SSO** link.
    
2.  When redirected to the SAML IdP:
    
    -   For the dummy saml-idp service, log in using one of the built-in usernames and passwords, as detailed in [Built-in dummy saml-idp users and roles](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/using_a_saml_ldp#builtin_dummy_samlidp_service_users_and_roles)
        
    -   For Okta, log in using the credentials defined for the users allowed to access your application, as defined in Okta. To set up Okta, see [Setting up Okta as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_okta_as_your_saml_ldp#overview).
        
    -   For Google Cloud Identity, log in using the credentials defined for the users allowed to access your application as defined in Google Cloud Identity. To set up Google Cloud Identity, see [Setting up Google Cloud Identity as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_google_cloud_identity_as_your_saml_ldp).
        
    -   For AWS IAM Identity Center, log in using the credentials defined for the users allowed to access your application as defined in AWS IAM Identity Center. To set up AWS IAM Identity Center, see [Setting up AWS IAM Identity Center as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_aws_iam_as_your_saml_idp).
        
    -   For Azure Active Directory, log in using the credentials defined for the users to access your application as defined in Azure Active Directory. To set up Azure Active Directory, see [Setting up Azure Active Directory as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp)
        
    

## [](#built_in_dummy_saml_idp_service_users_and_roles "Copy link to heading")Built-in dummy saml-idp service users and roles

 
| Email | Dummy saml-idp service SAML roles |
| --- | --- |
| 
[superuser@bytegun.com](mailto:superuser@bytegun.com)

 | 

AdminRole, DefaultRole

 |
| 

[customersupportteamleader@bytegun.com](mailto:customersupportteamleader@bytegun.com)

 | 

DefaultRole, CustomerSupportTeamLeader

 |
| 

[csa@bytegun.com](mailto:csa@bytegun.com)

 | 

DefaultRole, CSA

 |
| 

[productmanager@bytegun.com](mailto:productmanager@bytegun.com)

 | 

ProductManager

 |
| 

[paymentagent@bytegun.com](mailto:paymentagent@bytegun.com)

 | 

PaymentAgent

 |
| 

[viewonly@bytegun.com](mailto:viewonly@bytegun.com)

 | 

ViewOnly

 |
| 

[recsagent@bytegun.com](mailto:recsagent@bytegun.com)

 | 

RECsAgent

 |

chat\_bubble

The password for each user is 1234.

A user who has associated the *AdminRole* to login via Operations Dashboard, can then create any other roles for testing purposes and assign permissions to them by using Operations Dashboard or via the Configuration Layer Utility (CLU) tool.

## [](#post_installation_vault_role_configuration "Copy link to heading")Post-installation Vault role configuration

   
| Vault role | Vault role ID | External reference (SAML role ID) | Initial permissions |
| --- | --- | --- | --- |
| 
AdminRole

 | 

admin\_role

 | 

AdminRole

 | 

All

 |
| 

DefaultRole

 | 

ops\_user

 | 

DefaultRole

 | 

None

 |

After installation clients should configure roles and associate permissions as needed by their organisation. AdminRole should be assigned to a user in your chosen SAML IdP, a user through whom you will then be able to configure additional roles and assign permissions to them.