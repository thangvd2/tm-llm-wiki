---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector"
title: "DLQ Inspector"
scraped_at: "2026-06-17T05:35:09.875Z"
images: 2
---

# DLQ Inspector

## [](#what_is_dlq_inspector "Copy link to heading")What is DLQ inspector?

Vault Core ships with a support application (DLQ Inspector) to aid in the handling of DLQ (Dead Letter Queue) messages. You can use DLQ Inspector to debug errors originating from inside Vault Core and, in some cases, directly remediate them.

DLQ Inspector automatically consumes all DLQ messages published by Vault Core and temporarily stores them in a database. Messages are then made available for listing, reading, and republishing.

To learn more about Dead Letter Queues, refer to the [Dead Letter Queues in Vault Core reference documentation](/vault-core/5-8/EN/reference/dlq).

## [](#logging_in_and_permissions "Copy link to heading")Logging in and permissions

chat\_bubble

You need to configure your Identity Provider (IDP) with your Vault Core details to support access to both Core Apps and Operations Dashboard.

In order to view the DLQ Inspector app, you must apply permissions to the Role used to login via SAML. For information about granting permissions for DLQ Inspector, see [Permissions](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector#permissions).

### [](#accessing_dlq_inspector "Copy link to heading")Accessing DLQ Inspector

You can access DLQ Inspector by using your unique client URL. Alternatively, you can visit Operations Dashboard and select DLQ Inspector from the App Switcher in the navigation menu for each Vault Core app.

The following URLs contain a `$<placeholder>` in place of your unique client details for the purposes of these examples.

#### [](#example_url_for_bank_hosted_environments "Copy link to heading")Example URL for bank-hosted environments:

#### [](#example_url_for_saas_environments "Copy link to heading")Example URL for SaaS environments:

#### [](#app_switcher "Copy link to heading")App Switcher:

![app\_switcher\_icons\_operations\_dashboard\_core\_apps.png](_assets/app_switcher_icons_operations_dashboard__vaultcor.webp)

#### [](#more_information "Copy link to heading")More information:

If you require information about configuring access to Core Apps and Operations Dashboard, see the following setup guides. These guides link to the [Setting up and Configuring Vault with a SAML IDP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/) guide and provide an overview of the overall steps to set up Vault Core.

-   Clients with a bank-hosted Vault Core environment: [Getting Started with Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core)
    
-   Clients with a Vault Core SaaS environment: [Environment details guide → Core Apps and Operations Dashboard](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#core_apps_and_operations_dashboard)
    

## [](#how_to_use_dlq_inspector "Copy link to heading")How to use DLQ Inspector

The DLQ Inspector home page lists all DLQ messages published within its retention period. You can filter this list. See the bottom of the home page for a count of messages matching your query.

DLQ Inspector provides a view on each message to support debugging of the corresponding error. For each message you can view the following fields: - Error message - Message body - Message headers - The DLQ topic it was published to - The original topic it was published to

These fields can contain vital clues to understanding how an error occurred. Here are some examples: - The message content indicates that a Vault Core resource was not in the expected state. - An error message points to an infrastructural issue.

The error message and original topic are not propagated for all messages. You cannot always decode the message. In some cases, DLQ Inspector may only be able to partially decode the message. In such cases, it shows no message body, or a partial message body.

The DLQ Inspector does NOT implement idempotency on DLQ messages it consumes. Some messages will appear more than once. Duplicate messages can be safely republished as Vault Core will handle them idempotently.

chat\_bubble

DLQ topics are internal. Therefore the errors, message types and the topics themselves are not documented.

### [](#responding_to_dlq_messages "Copy link to heading")Responding to DLQ messages

When you have identified a new DLQ message, use the Inspector to understand the business impact of the underlying error. Not all DLQ messages indicate a business error in Vault Core:

-   The DLQ message may only affect internal resources included to improve API performance.
    
-   A single underlying error in Vault Core may create many DLQ messages across one or several topics.
    
-   A component you do not use may produce a DLQ message.
    

To understand the business impact of the underlying error, check that a specific set of resources are in an incorrect state.

When you have confirmed that the resources are in an incorrect state, use Vault Core’s APIs or applications to remediate the issue.

For example:

You get a message indicating that an Account Update has failed. It looks like the error may have arisen from an issue with the state of the account. Firstly, verify the problem with the account using Vault Core’s APIs, then rectify the underlying issue. When you have rectified the issue, try to update the account again. You can do this manually, or you can republish from the DLQ Inspector.

If you are unsure about the impact of a DLQ message or are unable to recover from the error yourself, contact Thought Machine support.

### [](#republishing_dlq_messages "Copy link to heading")Republishing DLQ messages

In many cases, DLQ Inspector allows you to republish DLQ messages. In some cases republishing DLQ messages may be an appropriate way to correct the state of Vault Core.

In the following diagram a Vault Service has just published to a DLQ topic after failing to process a message (A). A DLQ Inspector user with edit permission on the DLQ Topic resource can then choose to republish the message (B). If the issue has been resolved, the message is likely to be processed successfully (C), returning Vault Core to a healthy state. If the error still exists, or another error is uncovered, the message is updated or replaced in the DLQ Inspector.

![DLQ republishing](_assets/dlq_republishing.kHHSB4BU_Z28MaYc_vaultcor.svg)

For our failed Account update example, if the update failed due to a transient error (for example, the database was unavailable for an extended period of time), then republishing the DLQ message is likely to correct the Account status. However, be aware that republishing can produce further issues if used incorrectly. If you are republishing in a novel scenario, contact Thought Machine Support.

Republished messages have the status "Republished". If the republished message returns to the DLQ topic the status reverts to "Unresolved". DLQ Inspector has no "Resolved" status. Instead users are expected to verify that an issue has been resolved independently. The actual republishing of a message is handled asynchronously. There is a short delay between messages entering the "Republished" state and the message appearing on the original topic. The message page shows the republish history of a message.

chat\_bubble

When Vault Core publishes a DLQ message, any ordering guarantees between that message and later messages may be lost. Successfully republishing a message does not guarantee that the associated resource is in the correct final state.

chat\_bubble

If you suffer a cluster/Kafka outage and need to run Vault Core’s Disaster Recovery process, be aware that republished messages could be lost. You can manually republish the messages again once the cluster is healthy.

## [](#permissions "Copy link to heading")Permissions

There are two new resources in Vault Core’s permission model for Operations users. DLQ Inspector requires the first permission. You can grant additional capabilities to high privilege users.

### [](#dlq_topic "Copy link to heading")DLQ Topic

`view` - Grants users basic access to DLQ Inspector. The users are exposed to sensitive data and cannot republish messages. This permission is suitable for all users who may need to respond to errors in Vault Core.

`edit` - Grants users the power to remediate issues by republishing DLQ messages. You can take this action across all DLQ topics affecting any resource in Vault Core. You can only grant this permission to users who are authorised to make changes to Vault Core.

### [](#dlq_message_content "Copy link to heading")DLQ message content

`view` - Grants users visibility on the message content of DLQ messages. These internal messages may contain personally identifiable information (PII) or otherwise sensitive data in Vault Core across all resources. This permission is only suitable for users authorised to access **any** Vault Core data. This permission can be a very useful tool when debugging certain issues.

chat\_bubble

As a support tool, actions and views from DLQ Inspector are not tracked in Vault Core’s audit logs.

## [](#retention_of_dlq_messages "Copy link to heading")Retention of DLQ messages

DLQ messages in Vault Core are not stored indefinitely and are subject to two separate retention periods.

The messages on the DLQ Kafka topics are subject to Kafka’s retention policy. Messages that are retained on the Kafka topic but not in DLQ Inspector are NOT accessible (or actionable) from DLQ Inspector.

DLQ Inspector consumes all DLQ messages and stores them in the `support` database. The retention policy for this data is set in your `values.yaml`. You can set a retention period using `dlq_inspector.endpoint.cleanup.retention_period` and a schedule for the cleanup job to run using `dlq_inspector.cleanup.schedule`.

chat\_bubble

Data outside of the retention period may still be visible to application users but is incomplete.