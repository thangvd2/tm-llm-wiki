---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/vault_lookup"
title: "Vault Lookup"
scraped_at: "2026-06-17T05:35:17.572Z"
images: 2
---

# Vault Lookup

Welcome to the Vault Lookup application documentation.

## [](#logging_in_and_permissions "Copy link to heading")Logging in and permissions

chat\_bubble

You need to configure your Identity Provider (IDP) with your Vault Core details to support access to both Core Apps and Operations Dashboard.

### [](#role_permissions "Copy link to heading")Role permissions

 
| Permission resource | Required operations |
| --- | --- |
| 
Account

 | 

View

 |
| 

Account schedule tag

 | 

View

 |
| 

Account Migration

 | 

View

 |
| 

Account schedule association

 | 

View

 |
| 

Account update batch

 | 

View

 |
| 

Account update

 | 

View

 |
| 

Account attribute

 | 

View

 |
| 

Balances live

 | 

View

 |
| 

Balances time range

 | 

View

 |
| 

Bookkeeping date

 | 

View

 |
| 

Contract module version

 | 

View

 |
| 

Contract module

 | 

View

 |
| 

Smart Contract Module Versions Link

 | 

View

 |
| 

Customer address

 | 

View

 |
| 

Journal event

 | 

View

 |
| 

Journal events checksum

 | 

View

 |
| 

Global parameter value

 | 

View

 |
| 

Parameter Value Hierarchy Node

 | 

View

 |
| 

Parameter Value

 | 

View

 |
| 

Parameter

 | 

View

 |
| 

Payment device link

 | 

View

 |
| 

Account-plan association

 | 

View

 |
| 

Plan migration

 | 

View

 |
| 

Plan schedule

 | 

View

 |
| 

Plan update

 | 

View

 |
| 

Plan

 | 

View

 |
| 

Post posting failure

 | 

View

 |
| 

Ascync operation

 | 

View

 |
| 

Postings API client

 | 

View

 |
| 

Processing Group

 | 

View

 |
| 

Product version parameters timeseries

 | 

View

 |
| 

Restriction

 | 

View

 |
| 

Job

 | 

View

 |
| 

Supervisor contract version

 | 

View

 |
| 

Supervisor contract

 | 

View

 |
| 

Posting instruction batch

 | 

View

 |

### [](#accessing_vault_lookup "Copy link to heading")Accessing Vault Lookup

You can access Vault Lookup by using your unique client URL. Alternatively, you can visit Operations Dashboard and select Vault Lookup from the App Switcher in the navigation menu for each Vault Core app.

The following URLs contain a `$<placeholder>` in place of your unique client details for the purposes of these examples.

#### [](#example_url_for_bank_hosted_environments "Copy link to heading")Example URL for bank-hosted environments:

#### [](#example_url_for_saas_environments "Copy link to heading")Example URL for SaaS environments:

#### [](#app_switcher "Copy link to heading")App Switcher:

![app\_switcher\_icons\_operations\_dashboard\_core\_apps.png](_assets/app_switcher_icons_operations_dashboard__vaultcor.webp)

## [](#what_is_vault_lookup "Copy link to heading")What is Vault Lookup?

### [](#definition "Copy link to heading")Definition

Vault Lookup is a Web Application that enables you to conduct read-only queries to retrieve resources from Vault Core’s Core API endpoints:

![vault\_lookup.png](_assets/vault_lookup.BvmyfWEE_14o9Ik_vaultcor.webp)