---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/migration/tooling_and_environment_setup"
title: "Migration environment setup"
scraped_at: "2026-06-17T16:04:33.073Z"
images: 0
---

# Migration environment setup

## [](#purpose "Copy link to heading")Purpose

Before you can begin building and testing the migration pipeline, you need to set up the necessary environments to support it.

If you have either too few environments or environments that are not appropriately provisioned you risk adding delay to the programme delivery timelines.

This section will focus only on Vault Core environment requirements and recommendations to support the migration (ETL) pipeline, but a similar exercise should be undertaken across the full suite of systems in scope of the programme and the full suite of tests being undertaken as part of integration testing.

If executed well this activity provides your programme with the following outcomes:

-   Ability to hit the ground running in ETL testing and not be delayed up by low-value infrastructure blockers.
    
-   Access to the necessary type and number of environments to parallelise programme testing, maximising delivery speed and minimising risk of incidents due to different elements of the programme testing \`on top of one another'.
    

chat\_bubble

For instructions about how to install Vault Core’s migration component and configure migration API message formats see the [Migration Deployment](/vault-core/latest/EN/environment_and_installation/migrating_to_vault/intro/migration_deployment) page within the 'using Vault Core’s migration APIs' section of the Vault Portal.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: [Extract](/delivery-framework/latest/EN/delivery_workstream/migration/extract_transform_and_load_etl_tooling_build)
    

## [](#guidance_environment_setup_general "Copy link to heading")Guidance - Environment setup (general)

By having either too few or incorrectly configured environments to support the [Migration ETL Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing) scope, you risk delaying programme delivery.

Consider the following when determining your environment requirements for migration.

### [](#environment_breadth "Copy link to heading")Environment breadth

*Is there a sufficient number of environments provisioned (or planned to be provisioned) to support all phases of my migration and non-migration testing?*

-   Across end-to-end programme delivery, testing will need to take place across a number of workstreams (e.g. Smart Contract, Integrations, Migration, Infrastructure) for a variety of test types (for example functional, non-functional, regression, integration).
    
-   Remember that your ability (or otherwise) to parallelise these tests will likely inform your delivery plan and timelines. Too few environments and you risk needing to build a waterfall plan that elongates overall delivery unnecessarily.
    
-   In addition, where testing in one area is delayed or elongated the number of environments you have at your disposal will also inform the extent to which this impact can either be absorbed or cascade into the rest of your testing / delivery activities.
    
-   You should therefore consider at the outset the number of environments required throughout both the overall programme and the migration workstream specifically, which in the vast majority of cases should include a dedicated environment for migration testing.
    

chat\_bubble

In most cases we recommend the migration workstream has its own environment in which to test the ETL pipeline. Only once the pipeline is stabilised and proven do you move into higher, likely shared, environments.

error

A common issue that we have observed in migration programmes (particularly those of smaller scope) is a reluctance to invest in a dedicated migration environment. Instead migration performance/event testing is forced to occur in the same environment used for Smart Contract development testing. These can then adversely impact one another, delaying testing or causing red-herring incidents that would not have occurred if they took place in their own dedicated environments.

### [](#non_functionals "Copy link to heading")Non-functionals

*Are the environments sufficiently scaled to support my migration volumes?*

-   For [Non-Functional Migration ETL Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#non_functional_testing) or [Proving Cycles / Dress Rehearsals](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#guidance_proving_cycles_and_dress_rehearsals), you should always aim to test within an environment that as closely resembles the production environment as possible, so that the results are as representative of what will occur in the production migration event.
    
-   This includes the environment specifications, which should wherever practically possible be scaled within your test environment to match production specs, including but not limited to:
    
    -   Database vCPU, RAM, storage (TB), database configuration / flags
        
    -   Kafka CPU, RAM, broker numbers
        
    -   Kubernetes vCPU, RAM, type (e.g. n2-standard-8 - Openshift cluster with 21 nodes)
        
    -   Other Vault Core configurations (changes made to .yaml and config files)
        
    
-   Please speak to Thought Machine for support and advice regarding optimum environment sizing for your Vault installation, and see the [Vault release performance report](/vault-core/latest/EN/environment_and_installation/vault_release_information#performance_and_testing-performance_report) (specifically the *GCP* link) for the environment configuration and associated performance metrics for the migration APIs.
    

chat\_bubble

Environment sizing as an activity should take into consideration the migration scope/volumes but should not be based solely on it. You should primarily scope your environments with the BAU state and volumes in mind, overlaying migration volumes as a consideration and uplifting temporarily if required.

### [](#environment_wiping "Copy link to heading")Environment wiping

*What are my requirements for environment wiping?*

-   Vault Core does not have the ability to partially wipe/clean an environment, so you should assume a requirement for periodic environment wipes (and potentially restores) into your testing plan.
    
    -   Be aware that while Vault Core does have a capability for deleting operational data, this is limited to historic Scheduler, Vault Jobs and Ledger Balance resources. This does not delete any Vault Core migratable resource (including Customers, Accounts or Postings) so does not have a material impact on database \`fullness'.
        
    
-   Early small volume functional migration tests that occur in a development environment are unlikely to be impacted by this, however once high-volume non-functional [Migration ETL Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#non_functional_testing) or [Proving Cycles / Dress Rehearsals](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#guidance_proving_cycles_and_dress_rehearsals) begin then environment wiping is likely to be required to:
    
    -   Control the overall amount of data within the database - including making sure that the database is not being expected to run and migrate volumes well beyond what is expected in BAU, which may cause degradation in load speeds.
        
    -   Ensure the tests begin from a \`production-like' baseline, which may be a blank environment or an environment seeded with a specific amount of pre-existing data.
        
    
-   For advice and support in wiping a Vault Core environment please speak to your assigned Thought Machine representative, though at a high level this is likely to include:
    
    -   Finish Kafka processing + reduce retention on topics to zero
        
    -   Remove Kubernetes resources
        
    -   Drop the database and users
        
    -   Re-run vault install
        
    -   Use the CLU to recreate resources
        
    -   Restore Kafka retention
        
    

### [](#guidance_environment_setup_saas "Copy link to heading")Guidance - Environment setup (SaaS)

Thought Machine’s [Vault SaaS](/vault-core/latest/EN/environment_and_installation/saas) offering comes with a [standard set of Vault Core environments](/vault-core/latest/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide).

Additional non-production environments for functional and non-functional testing can be provided subject to commercial agreement. Thought Machine will provide support in deploying the additional environments in line with the terms of the associated MSA and any relevant SoWs.

In our experience, Vault Core SaaS customers that are executing a back-book migration (particularly those with volumes in excess of a few thousand accounts) require and request an additional \`perf' environment to execute high-volume production-like [Proving Cycles / Dress Rehearsals](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#guidance_proving_cycles_and_dress_rehearsals) for the reasons outlined in the section above. Normally this is only requested and provisioned for the duration of performance testing until the production migration completes.

If you are a SaaS customer and would like to discuss provisioning additional environments to support migration or wiping environments as part of migration testing, then please contact your assigned Thought Machine point of contact.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).