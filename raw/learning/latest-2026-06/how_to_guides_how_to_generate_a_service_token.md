---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/how_to_guides/how_to_generate_a_service_token"
title: "How can I generate a service token for API requests?"
scraped_at: "2026-06-17T05:20:38.823Z"
images: 0
---

# How can I generate a service token for API requests?

## [](#introduction "Copy link to heading")Introduction

A service token is required for authentication when using vault core API endpoints. This guide will cover creating a service account and generating a service token.

## [](#prerequisites "Copy link to heading")Prerequisites

In order to follow this guide you need access to the operations dashboard of an instance of Vault.

## [](#method_one_using_the_operations_dashboard "Copy link to heading")Method One - Using the Operations Dashboard

### [](#step_1_creating_a_service_account "Copy link to heading")Step 1: Creating a Service Account

To start, you will need to navigate to the Service accounts under Organisation admin > Service accounts. Click "Create a Service Account" to create a new account.

### [](#step_2_setting_up_a_service_account "Copy link to heading")Step 2: Setting up a Service Account

Next, you will need to provide a name for the service account. Permissions for the account are set under the drop down for each set of endpoints. Click "Get token" in order to create the account and generate an access token.

error

Once the token is generated it will not be viewable again - so make sure it is copied to appropriate storage.

## [](#further_reading "Copy link to heading")Further Reading

For information about editing service accounts, refreshing a token and changing the status of a service account see: [Service accounts](/vault-core/latest/EN/reference/ops_dashboard/organisation_admin#service-accounts)

## [](#feedback "Copy link to heading")Feedback

We value your feedback. If you encounter any issues or have suggestions for improvement please [Contact us](mailto:enablement@thoughtmachine.net).