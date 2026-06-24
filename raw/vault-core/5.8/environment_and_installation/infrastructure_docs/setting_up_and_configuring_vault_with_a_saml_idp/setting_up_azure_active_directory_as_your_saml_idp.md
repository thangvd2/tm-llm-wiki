---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp"
title: "Setting up Azure Active Directory as your SAML IdP"
scraped_at: "2026-06-17T15:37:45.245Z"
images: 17
---

# Setting up Azure Active Directory as your SAML IdP

1.  Log in to Azure Active Directory.
    
2.  [Create a new Enterprise application](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp#create_a_new_enterprise_application) for each environment you want to maintain (e.g. preprod, prod).
    
3.  [Assign users](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp#assign_users_to_the_application) to the new application or applications.
    
4.  [Set up your application](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp#set_up_your_application) or applications.
    
5.  [Copy the SAML Service Provider configuration](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp#copy_the_saml_sp_configuration) (provided by the IdP) for each environment you want to maintain (e.g. preproduction, production).
    
    (This configuration provided by the IdP needs to be set on the Service Provider side.)
    
6.  [Create application roles and assign them to users.](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp#create_application_roles_and_assign_them_to_users)
    

## [](#create_a_new_enterprise_application "Copy link to heading")Create a new Enterprise application

1.  From the Azure Portal, at the top of the screen, use the search box to search for *Enterprise applications*.
    
2.  In the Enterprise applications overview, click **Create New application**.
    
3.  Use the search box within the **Browse Azure AD Gallery** page to search for **Azure AD SAML Toolkit**.
    
    ![AZimage6.png](_assets/uuid-1d236860-35fa-4ea5-d55f-af43e060063_vaultcor.webp)
    
    ![AZimage12.png](_assets/uuid-68fda201-1733-0946-36d2-06839dafc02_vaultcor.webp)
    
4.  In the **Name** field, give the new application a suitable name and click **Create**.
    
    ![AZimage10.png](_assets/uuid-8588e5a2-8877-db51-faad-d82e8a5b9f3_vaultcor.webp)
    

## [](#assign_users_to_the_application "Copy link to heading")Assign users to the application

1.  Within the overview page for the new application, click **1\. Assign users and groups**.
    
    ![AZimage1.png](_assets/uuid-3bba6af7-2e20-54c2-2083-083190170e7_vaultcor.webp)
    
2.  In the **Users and groups** list, click **Add user/group**.
    
    ![AZimage2.png](_assets/uuid-4cec9304-108c-8c2d-7035-a87359f08bf_vaultcor.webp)
    
3.  Select the users and roles to be associated with the application, and click **Assign**.
    

## [](#set_up_your_application "Copy link to heading")Set up your application

1.  From the overview page for the new application, select **2\. Set up single sign on.**
    
    ![AZimage1.png](_assets/uuid-3bba6af7-2e20-54c2-2083-083190170e7_vaultcor.webp)
    
2.  Under **Select a single sign-on method**, click **SAML**.
    
    ![AZimage8.png](_assets/uuid-ac7a65b3-dfe5-c20a-05e4-91b71a5783d_vaultcor.webp)
    
3.  In the top right of the **Basic SAML Configuration** box, click **Edit**.
    
    ![AZimage9.png](_assets/uuid-8c3cb5c1-f3d4-d1e9-6e1a-7da2ea75249_vaultcor.webp)
    
4.  In the edit menu that appears on the right of the screen, set the following attributes:
    
    -   *Identifier (Entity ID)* - [https://{ops\_dash\_domain}/api/saml/metadata](https://{ops_dash_domain}/api/saml/metadata)
        
    -   *Reply URL (Assertion Consumer Service URL)* - [https://{ops\_dash\_domain}/api/saml/acs](https://{ops_dash_domain}/api/saml/acs)
        
    -   \_Sign on URL \_- [https://{ops\_dash\_domain}/](https://{ops_dash_domain}/)
        
        ![AZimage11.png](_assets/uuid-ce6b6fb8-5060-35e6-79a8-ee8f92ccf49_vaultcor.webp)
        
    
5.  Click **Save** in the top left of the edit dialog.
    
6.  Within the **SAML-based Sign-on** overview page, click the Edit button within the box labelled **Attributes & Claims**.
    
    ![AZimage15.png](_assets/uuid-4f9ddbfd-9d31-f9ef-8542-c0371019c04_vaultcor.webp)
    
7.  Add a roles claim as shown below, and click **Save**.
    
    ![AZimage4.png](_assets/uuid-680b9284-eb4c-2567-9667-252b9a5aeee_vaultcor.webp)
    

## [](#copy_the_saml_sp_configuration "Copy link to heading")Copy the SAML SP configuration

chat\_bubble

For bank-hosted Vault Core customers, copy this data for use in the *values.yaml* file. For SaaS clients, copy this information to populate the fields in the Client Environment Request form provided by your Client Delivery Manager.

1.  From the **SAML-based Sign-on** page, under **SAML Certificates**, click the Download link next to **Certificate (Base64)**.
    
    For on-premise hosted clients, the contents of this file will be used to populate the .saml\_idp.certificate variable in the values.yaml file.
    
2.  Under **Set up \\{application name}**, copy the **Login URL**, the **Azure AD Identifier** and the **Logout URL**. These correspond to the SSO URL, the entity ID and the SLO URL, respectively, used to configure Vault Core.
    
3.  Populate the saml\_sp section of the values.yaml file with the configuration as previously defined in '**Advanced Settings** of the **Configure SAML** tab in your application.
    

## [](#create_application_roles_and_assign_them_to_users "Copy link to heading")Create application roles and assign them to users

1.  From the menu on the left of the **Overview** page of the SAML Enterprise Application, select **Users and groups**.
    
    ![AZimage1.png](_assets/uuid-3bba6af7-2e20-54c2-2083-083190170e7_vaultcor.webp)
    
2.  Click the **application registration** link above the table of users assigned to the application.
    
    ![AZimage2.png](_assets/uuid-4cec9304-108c-8c2d-7035-a87359f08bf_vaultcor.webp)
    
3.  Click **Create app role**.
    
    ![AZimage3.png](_assets/uuid-d0015114-a72c-728b-2e51-40e0ebbf6d6_vaultcor.webp)
    
4.  In the dialog that appears on the right of the screen, provide values for the **Display Name**, **Value** and **Description** fields. Leave the value of **Allowed member types** set to **Users/Groups** and click **Apply**.
    
    ![AZimage16.png](_assets/uuid-fbac7462-0c9b-a897-1ed5-7555174c333_vaultcor.webp)
    
    Repeat this process for each role to which the SAML application needs access.
    
5.  Return to the **Users and groups** page, select a user or group to which a role should be associated, then click **Edit**.
    
    ![AZimage13.png](_assets/uuid-54386bd2-42c6-8507-9617-86486a34560_vaultcor.webp)
    
6.  Click on **None Selected**, select a role from the dialog that appears on the right, click **Select**, then click **Assign**.
    
    ![AZimage7.png](_assets/uuid-5389c6a6-b567-a717-3da7-d6ea9cbb58f_vaultcor.webp)