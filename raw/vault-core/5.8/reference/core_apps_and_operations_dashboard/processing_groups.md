---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/processing_groups"
title: "Vault Processing Groups"
scraped_at: "2026-06-17T15:42:11.201Z"
images: 0
---

# Vault Processing Groups

You can use the Vault Processing Groups app to view, create, and manage Processing Groups.

To learn more about Processing Groups, see [Processing Groups](/vault-core/5-8/EN/reference/processing_groups).

## [](#logging_in_and_permissions "Copy link to heading")Logging in and permissions

chat\_bubble

You need to configure your Identity Provider (IdP) with your Vault Core details to support access to both Core Apps and the Operations Dashboard.

### [](#role_permissions "Copy link to heading")Role permissions

 
| Permission resource | Required operations |
| --- | --- |
| 
Processing Group

 | 

View, Create, Edit

 |
| 

Account

 | 

View, Create

 |

### [](#add_ons "Copy link to heading")Add-ons

In order to utilise some functionality in Vault Processing Groups, some features must be enabled for your environment.

-   Multiple Processing Groups (an Extension - contact your Thought Machine representative)
    

## [](#accessing_vault_processing_groups "Copy link to heading")Accessing Vault Processing Groups

You access Vault Processing Groups using your unique client URL. Alternatively, you can select **Processing Groups** from the App Switcher in the navigation menu for each Vault Core app.

The following URLs contain a `$<placeholder>` in place of your unique client details for the purposes of these examples.

### [](#example_url_for_bank_hosted_environments "Copy link to heading")Example URL for bank-hosted environments:

### [](#example_url_for_saas_environments "Copy link to heading")Example URL for SaaS environments:

## [](#what_is_the_vault_processing_groups_app "Copy link to heading")What is the Vault Processing Groups App?

chat\_bubble

Vault Processing Groups assumes familiarity with the Vault Core concept of [Processing Groups](/vault-core/5-8/EN/reference/processing_groups).

### [](#view_processing_groups "Copy link to heading")View Processing Groups

The list page shows all the Processing Groups in the environment and indicates if any of your groups are currently paused.

### [](#details "Copy link to heading")Details

The Processing Group details page displays information associated with a Processing Group, such as metadata like timezone and current time, and lists the Internal Accounts.

You can pause the Processing Group, by pressing **Pause future schedules**, and resume a paused group by pressing **Resume schedules**.

warning

Pause and resume impacts schedules by following [Using a Processing Group for pausing/unpausing](/vault-core/5-8/EN/reference/processing_groups#using_a_processing_group_for_pausingunpausing).

From the **Actions** menu you can also **Add Internal Account**, **View associated Jobs** and **Update description**.

### [](#create_processing_groups "Copy link to heading")Create Processing Groups

You can access the create account form via the **Create Processing Group** button on the homepage, or directly via `/processing-groups/create`

This flow allows you to configure the required information to create a Processing Group.

info

ID and Timezone cannot be changed after the Processing Group is created.