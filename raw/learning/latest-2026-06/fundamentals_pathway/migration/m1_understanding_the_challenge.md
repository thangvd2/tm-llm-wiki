---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/fundamentals_pathway/migration/m1_understanding_the_challenge"
title: "Module 1: Understanding the challenge"
scraped_at: "2026-06-17T16:00:17.207Z"
images: 2
---

# Module 1: Understanding the challenge

assignment\_turned\_in

Learning objective

Look at examples of old infrastructure, and the resources needed for migration.

Core banking migrations are complex.

*Take a minute to think about potential concerns about migrations you might have considered in general terms, and make a note of 3 of them. Click on the header below when you’re ready to check your answers!*

Collapsible title

Each migration brings its own unique challenges, but the concerns we hear from banks are often very similar and fall into four categories: **cost and time, regulatory and reputational protection, customer and colleague impact** as well as **configuration, capability, cloud level**.

Some of these concerns include:

**Cost and time**

-   More costly and longer than initial estimates.
    
-   Often requiring external expertise.
    
-   Hard deadlines are common.
    

**Regulatory and reputational protection**

-   Requires demonstrable, controlled, and visible migration.
    
-   Regulatory constraints impact strategy.
    
-   High risk of reputational damage if migration fails.
    

**Customer and colleague impact**

-   Migration design causes customer trade-offs (comms, T&Cs changes, downtime, reissues) and business process changes.
    

**Configuration, capability, cloud level**

-   No single, clear definition of banking products or separation of data types.
    
-   Systems have evolved beyond original intent, creating suboptimal, hard-to-manage, and change-resistant architectures.
    
-   Legacy products hold very old product types that are no longer offered and difficult to replicate on new systems.
    
-   Outdated data models don’t align with modern banking practices and are hard to directly migrate.
    
-   Incomplete previous attempts to leverage cloud infrastructure give a false perception that it lacks benefit.
    

## [](#replatforming_at_scale "Copy link to heading")Replatforming at scale

At Thought Machine, the challenges we have considered are mitigated by our migration experience and approaches we recommend.

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Cost and time</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The bank has control of the pace of replatforming, keeping costs manageable, results in bank customers moving to a new platform in 12 to 24 months.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Regulatory and reputational protection</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">We have zero failed deployments. The bank and Thought Machine work together, fixing issues as they are encountered, providing the bank with valuable experience on best practices.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Customer and colleague impact</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Disruption is minimised through iterative, phased implementation - split across both product and account tranches driven by APIs with migrated data streamed in real-time. The bank can replatform gradually, at any pace, starting with any product line it wishes. The migration can be invisible to customers, including complex parallel run migrations.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Configuration, capability and cloud level</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Our best-in-class architecture allows for a phased approach. Coexistence architecture means account-system links can easily be updated and used for routing. Exact recreation of products is possible ensuring no unintended product divergences created during migration - these can be tested through time series testing.</p></td></tr></tbody></table>

## [](#how_vault_core_improves_migration "Copy link to heading")How Vault Core improves migration

Vault Core improves migration by replacing these pain points:

![This infographic compares legacy migration approaches (top row) with modernized](_assets/cards_migration.CoUZHqCH_Z1FEbUD_learning.svg)

Batch-based migrations demand a large overhead. Vault Core replaces this with an **API-based migration**, to significantly simplify both data transfer and maintenance, with real time synchronisation.

Traditional migrations require managing multiple touchpoints, with batch based migration file outputs, which require manual work and make it challenging to know when and if individual records were loaded.

The need for both is eliminated with Vault Core, as **automated API load** is introduced, with **data streaming providing immediate data** for faster reconciliations and to support other business processes.

On legacy platforms, scheduled behaviour is much harder to test - the test frameworks used are complex and the process itself is time-consuming.

With Vault Core, **time-series testing** lets the organisation fast-forward account activities and quickly test if the product works.

Old ways of migrating data also involve big-bang migrations, which are done all at once, so it’s harder to make it less risky, and the consequences of anything going wrong can be expensive and difficult to clean up.

lightbulb

Vault Core leaves space for **a variety of migration designs** enabled by event-based architecture - this means more thorough testing, space for gradual migrations, and approaches that wouldn’t be possible without the flexibility Vault Core provides.

## [](#migration_tooling "Copy link to heading")Migration tooling

Our Postings and Migration APIs automate the migration process by utilising data streaming whilst providing visibility into the load process, as well as the ability to send the data to Vault Core in any order.

Our tooling makes it simpler to load historical data, and eliminates the complications from redundant behaviour without any requirement for configuration changes.

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Streamlined data migration</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Two dedicated migration APIs are available for automated data loading, from submission to event streaming.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Real-time Progress Monitoring</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Immediate insights into load progress through streamed events, eliminating the need to wait for completion. Dashboards are available to monitor the process through observability tools (such as Grafana).</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Easier Modernisation</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Historic data supported via bespoke field-level behaviour, and redundant behaviour is suppressed without configuration changes.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Flexible Load Orchestration and Accelerated Performance</strong></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">You can send data to Vault Core in any order through configurable dependencies - Vault Core handles the loading process. Up to 5x faster compared to standard REST APIs.</p></td></tr></tbody></table>

## [](#migratable_resources "Copy link to heading")Migratable resources

Vault Core supports multiple data types for data migration, which we can divide into three main groups: minimum resources, additional resources, and advanced resources.

They will be migrated through Data Loader API and the Posting API (BAU or Posting Migration API).

As a minimum, **Customer, Account and Postings are required in a migration**. The bank is likely to use additional resources as needed, which include **Flags, Restrictions, and Parameter Values**.

The most common flow of Account Resource relationships is showcased with the solid line on the diagram. Any alternative resource relationships for the Customer resource are shown with a dotted line on the diagram.

Advanced resources are also available. These are **Payment Device Links** and **Account Plan Associations**, as well as **Payment Devices and Plans**, with corresponding resource relationships marked with a dashed line.

Let’s take a look at the migration resources next.

![This diagram categorizes migratable system resources into three priority levels: Minimum resources: Highlights the core requirements](_assets/migratable_resources.BXHnJswB_1RoBHa_learning.svg)

### [](#minimum_resources_required "Copy link to heading")Minimum resources (Required):

1.  **Customers**: External customer core identifier, as Vault Core is not intended to operate as the customer master (CRM) or to hold Personally Identifiable Information (PII).
    
2.  **Accounts**: Links to a Smart Contract and represents an instance of a Product for a customer.
    
3.  **Postings**: Financial movements (debits and credits) that determine the financial position (balance) of the account.
    

### [](#additional_resources_likely_used "Copy link to heading")Additional resources (Likely used):

1.  **Flags**: Boolean (true/false) flag that does not inherently drive behaviour but can be used by Smart Contracts to trigger treatment (events).
    
2.  **Restrictions**: Prevents an action or behaviour within Vault Core (for example, prevent Postings).
    
3.  **Parameter values**: An instance of a Parameter that has a start and end in a timeseries (for example, interest rate = "4") .
    

### [](#advanced_resources_may_be_used "Copy link to heading")Advanced resources (May be used):

1.  **Payment device links**: A dedicated resource to link a Payment Device to an Account.
    
2.  **Account plan associations**: A dedicated resource to link Accounts and Plans (for example, savings current account 123 and mortgage 456 belong to plan XYZ).
    
3.  **Payment devices**: Represents instruments than can receive and initiate Postings (for example, Debit Card or Cheque) to abstract away from Account Resource and associated IDs.
    
4.  **Plans**: Equivalent of the Account Resource but for Supervisor Contracts to orchestrate linked or cross product behaviour on Vault Core (for example, an offset mortgage).
    

## [](#vault_core_migration_tools "Copy link to heading")Vault Core migration tools

To prepare for your migration, the following resources are available:

-   Proven migration strategies beyond traditional big bang approaches.
    
-   Expert migration SMEs providing best practice advice to clients.
    
-   Comprehensive suite of migration delivery processes and documentation.
    
-   Pre-integrated partner SMEs and tooling to enhance Vault Core’s load capabilities.
    

*That completes this module.*

Next module