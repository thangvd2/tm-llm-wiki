---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_this_guide"
title: "About this guide"
scraped_at: "2026-06-17T05:30:02.258Z"
images: 0
---

# About this guide

## [](#background "Copy link to heading")Background

In Vault Core 3.0, we introduced an additional tool, TMComponent Operator, in beta release, that you could use in place of the Vault Installer but only with non-production Vault Core instances. In Version 4.0, this earlier beta release of the TMComponent Operator was superseded by a version that was made generally available (GA status) with no non-production restriction.

From Version 4.0, Vault Core ships with an updated version of the TMComponent Operator which should now be used with all production and non-production instances. Do not use the earlier beta release (prior to Version 4.0), as there have been significant changes and bug fixes. The Vault Installer is now deprecated.

vaultctl is a command-line tool to interact with the TMComponent Operator in a streamlined way. You can use it to install, upgrade and configure Vault Core and query the status of Vault Core components. For more details on how TMComponent Operator works with Crown Operator and vaultctl, see [TMComponent Operator structure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#tmcomponent_operator_structure). vaultctl is currently only shipped as a Linux binary.

## [](#purpose "Copy link to heading")Purpose

This document:

-   Must be used in conjunction with the [Vault Cloud Infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure) guidance
    
-   Provides details of TMComponent Operator release artefacts
    
-   Includes specific information on how Vault Core resources can be installed and configured using the TMComponent Operator and vaultctl
    

## [](#scope "Copy link to heading")Scope

This guide explains how to use TMComponent Operator to install and configure Vault Core.

## [](#audience "Copy link to heading")Audience

This document is intended for use by those involved in deploying Vault Core.

## [](#disclaimer "Copy link to heading")Disclaimer

Thought Machine makes no claims, promises or guarantees about the accuracy, completeness or adequacy of this document. All information, content and materials are provided \`as is' and without any representation or warranty of any kind, express or implied, including (but not limited to) the implied warranties of merchantability, fitness for a particular purposes, title, or non-infringement. To the extent permitted by applicable law, Thought Machine does not accept liability for any direct, indirect, special, consequential, exemplary, punitive, or any other losses or damages of any kind, including (but not limited to) any loss of profits, business interruption, loss of data or otherwise, even if expressly advised of the possibility of such damages.