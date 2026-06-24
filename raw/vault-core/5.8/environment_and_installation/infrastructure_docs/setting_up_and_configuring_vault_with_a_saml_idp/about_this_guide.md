---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/about_this_guide"
title: "About this guide"
scraped_at: "2026-06-17T15:37:09.252Z"
images: 0
---

# About this guide

## [](#background "Copy link to heading")Background

Vault Core Operations Dashboard allows employees to login via SAML Single Sign-On (SSO).

Security Assertion Markup Language (SAML) is an authentication protocol that can be used by an application to authenticate users against a central Identity Provider (IdP), allowing federated applications and organisations to communicate and trust each other’s users. It is composed of two entities:

-   A Service Provider (SP) entity, the application provider. The Vault Core Operations Dashboard acts as a Service Provider.
    
-   An Identity Provider (IdP) entity, allowing authentication and authorisation of the user trying to access the application via the Service Provider.
    

chat\_bubble

Even if you do not intend to use the Operations Dashboard, you must set up an IdP for Vault Core in order to allow an initial Service Account token to be created.

In principle, Vault Core supports the use of any SAML 2.0-based IdP, including Azure Active Directory, Google Cloud Identity, Okta, AWS IAM Identity Center and OneLogin.

The Vault Core Operations Dashboard acts as a SAML service provider to the IdP. Users that are granted access to the Operations Dashboard in the IdP can use Single Sign On (SSO) to access the application. Once access has been granted, the user groups in the IdP are matched to the Roles set up in the Operations Dashboard. Roles can be added through the Access Control API or through the Operations Dashboard page.

For development and testing purposes only, we provide a dummy saml-idp service with Vault Core. This helps you to simplify integration and testing before you use your chosen third-party SAML IdP in a production environment.

SSO uses SAML as the protocol of choice, allowing the user, with one form of identity verified, (hence with one log-in), to easily and securely move between multiple systems, (without having to log in to each single system).

The user groups/roles defined in the IdP are matched to the Roles set up in the Vault Core Operations Dashboard. Roles can be added through the Vault Core Operations Dashboard page or using the Configuration Layer Utility (CLU) tool.

Please refer to the [Configuration Layer Utility User Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide) for details on how to use the CLU tool.

## [](#purpose "Copy link to heading")Purpose

This document explains how to set up and configure Vault Core with a SAML IdP to allow authorised access to Vault Core’s Operations Dashboard.

## [](#scope "Copy link to heading")Scope

This document covers the configuration of Vault Core for use with:

-   A supported third-party SAML IdP for production and testing, such as Okta, Google Cloud Identity, AWS IAM Identity Center or Azure AD (with plans for support of other SAML IdPs at a later date)
    
-   The Thought Machine dummy saml-idp service for development and testing purposes only
    

## [](#audience "Copy link to heading")Audience

This document is intended for use by client engineers, devOps, and site reliability engineers configuring SAML in their Vault Core environments.

## [](#disclaimer "Copy link to heading")Disclaimer

Thought Machine makes no claims, promises or guarantees about the accuracy, completeness or adequacy of this document. All information, content and materials are provided \`as is' and without any representation or warranty of any kind, express or implied, including (but not limited to) the implied warranties of merchantability, fitness for a particular purposes, title, or non-infringement. To the extent permitted by applicable law, Thought Machine does not accept liability for any direct, indirect, special, consequential, exemplary, punitive, or any other losses or damages of any kind, including (but not limited to) any loss of profits, business interruption, loss of data or otherwise, even if expressly advised of the possibility of such damages.