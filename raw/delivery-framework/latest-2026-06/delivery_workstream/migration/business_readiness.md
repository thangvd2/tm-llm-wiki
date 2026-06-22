---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/migration/business_readiness"
title: "Migration event business impact analysis"
scraped_at: "2026-06-17T16:04:43.513Z"
images: 0
---

# Migration event business impact analysis

## [](#purpose "Copy link to heading")Purpose

Business readiness is an often used and broad term that refers to an organisation’s readiness from a **process** and **people** perspective to execute a planned go-live event; in our case a data migration.

Put another way, it focuses on the non-technical (or \`business') elements of the migration, particularly:

-   The **process** impacts resulting from the migration event, which we refer to here as *Migration Event Business Impact Analysis*, and is the main focus of the [remainder of this page](/delivery-framework/latest/EN/delivery_workstream/migration/business_readiness#guidance_migration_event_business_impact_analysis).
    
-   The **people** impacts resulting from the migration event, which are covered in more detail in the [Production Readiness](/delivery-framework/latest/EN/delivery_workstream/production_readiness) section of this framework. We have included below just a short list of [migration-specific business readiness concerns](/delivery-framework/latest/EN/delivery_workstream/migration/business_readiness#guidance_migration_business_readiness), which are incremental to the general Production Readiness guidance.
    

If executed well this activity provides your programme with the following outcomes:

-   Understanding and control over the business process impacts resulting from production migration events.
    
-   As a result, reduced likelihood of customer impacting incidents due to poorly handled business processes.
    
-   A broader colleague and customer communications strategy.
    

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: Migration Routine Build (Codify Transform)
    

## [](#guidance_migration_event_business_impact_analysis "Copy link to heading")Guidance - Migration event business impact analysis

In broad terms, migration event business impact analysis is the analysis of how business and support processes will be impacted over a production migration event.

-   For example, how are account closures handled over the migration event? Are customers told that they cannot close their account during this time, or perhaps the request is accepted but not processed until the migration has concluded?
    
-   Additionally, are some processes going to cease forever post-migration? Are there some processes that have never been undertaken before going to begin for the first time?
    

Having control over these impacts is key to managing the customer and colleague impacts resulting from the migration event, so Thought Machine recommends migration event business impact analysis as a structured means of getting to this answer.

To complete migration event business impact analysis you should follow these steps:

1.  **Create a catalogue of impacted business processes**: This can quickly become a very large list, and is ideally retrieved from an existing view of operational processes within the bank. To be clear this should not only be processes involving a bank employee, it can involve Straight Through Processes (STP) that are also impacted or blocked as a result of the migration. Some banks have a central process catalogue that can serve as a good starting point for this analysis and ideally this should be available within the programme from the to-be process design work completed earlier in the lifecycle. This may have been completed as part of the [As-Is / To-Be Process Design](/delivery-framework/latest/EN/delivery_workstream/business/process_requirements) phase of the modernisation programme lifecycle and can be borrowed accordingly.
    
2.  **Understand existing business processes impacting design decisions**: It is common for decisions around bank or process downtime to have been made earlier in the migration or business strategy phase of the programme. It is important to align with leadership early during this exercise so existing and new principles are followed later.
    
    Examples of principles seen in the past that you may wish to adopt are:
    
    -   *Stop opening new loans three days before the migration event* - Having a more stable data set means there is less likelihood of data quality issues being introduced immediately prior to migration. This does not mean new loans are not opened by the business in its entirety. For example, they can be captured and opened by the business up to a certain value but not keyed into the core until post migration. The details of any such principle or agreement would need business agreement well ahead of the event.
        
    -   *Hold XYZ servicing requests in the work queue until after migration* - Similar to the preceding point, changes on the account (for example status changes) are not made until after migration. Again this likely decreases the introduction of data quality issues at the last minute.
        
    -   *Blocking of direct debits* - If target bank accounts for corporate customers paying in via direct debit (for example for employer payroll contributions) are changing as a result of the migration, the change of the target account can often create a blackout period while the central scheme (BACS in the UK) transfers the target account from one account number to another.
        
    
3.  **Analyse and document process impacts**: A knowledgeable programme team, alongside BAU business / operations leadership, undertakes an analysis of each process to understand the impacts of the migration event and any treatment strategy required as a result, and document these in an migration event business impact analysis deliverable. A Thought Machine template and populated example [is available](/delivery-framework/latest/EN/delivery_workstream/migration/business_readiness#deliverables) to support this.
    
    It is helpful to think about this impact through two lenses:
    
    -   Firstly, is the business process as a whole Starting, Stopping, or Continuing on target? (i.e. what is the end-state post-migration?)
        
        -   **Start**: Process is new and will execute for the first time on the target platform.
            
        -   **Continue**: Process is executed today and will continue to execute on target.
            
        -   **Stop**: Process stopping and will no longer execute on target.
            
        
    -   Secondly, how will the business process behave during the migration event? (i.e. what is the transition state during migration?)
        
        -   **Available - Legacy**: The business process is operating in its BAU state on legacy.
            
        -   **Available - Target**: The business process is operating in its BAU state on target.
            
        -   **Interim Business Processes**: An interim business process is implemented for a limited period of time over the migration event. There are a variety of types of IBP:
            
            -   **White Bag and Catch Up (Target Key Only)**: Request captured and held until post-migration and then action taken.
                
            -   **White Bag and Catch Up (Dual Key)**: Request processed on source, captured and keyed on target post-migration (for example a lost/stolen card).
                
            
        -   **Not Available**: Process stopped with no interim business process.
            
        
    
4.  **Agree treatment strategy**: Each business area that owns an impacted business process then needs to agree to the proposed treatment strategy and implement this over the migration event. In practice, this means an interlock with the [migration event communications plan](/delivery-framework/latest/EN/delivery_workstream/migration/event_preparation#event_communications_and_gono_go) to know when to execute the treatment strategy.
    
    -   Experience has shown that treatment strategies at this point often involve non-technical / manual solutions. Often technical teams are under pressure at this point in the programme trying to complete migration testing and so there is reluctance to introduce more technical scope. This messaging needs to be handled correctly by appropriate stakeholders.
        
    

## [](#guidance_migration_business_readiness "Copy link to heading")Guidance - Migration business readiness

For general guidance regarding the business readiness for core banking modernisation programme go-live see the [Production Readiness Workstream](/delivery-framework/latest/EN/delivery_workstream/production_readiness)

In addition to this general guidance, we have included below a short list of additional migration-specific business readiness concerns:

 
| Business Readiness Activity | Description |
| --- | --- |
| 
**Regulatory engagement**

 | 

Although it varies by geography, it is likely that the local regulator will need to be engaged throughout the migration programme. There may be approvals required to proceed at various stages (for example customer comms strategy), and at the very least keeping the regulator regularly informed can reduce the risk of last minute blockers.

 |
| 

**Customer marketing**

 | 

Many migration programmes elect to pause marketing and more broadly product sales efforts around a migration event(s). Doing this minimises the change in the data; for example if you send a mass mailer to customers it may prompt or remind them to update their home address. This is likely not something you want around the event as it could drive additional data quality issues into your customer data or, depending on the migration strategy, a higher amount of double keying into systems around the migration event.

 |
| 

**Customer communications**

 | 

Customer communications will be required at various stages throughout the migration delivery. The drivers for this will be:

\* **Regulatory**: Where product T&Cs are changing, a notice of variation (or similar geographically relevant concept) will likely need to be issued to customers in addition to proactive programme related comms. You will probably have a legal requirement to notify customers of the impact to their products resulting from the migration, and respect the legal T&Cs where this includes more complex migration strategies (for example onboarding/off-boarding).

\* **Relationship**: In order to stop an influx of customer queries on the day of migration it is often necessary to manage proactive messaging to impacted customers in advance of the migration date. This is a balance between only telling customers what they need to know and not accidentally driving the wrong behaviour (for example encouraging all customers to look at their app the day of migration and causing a performance issue), against not informing of changes and causing unnecessary traffic into the bank to resolve. where the migration results in downtime or a more material change to customer experience (new app, new brand, etc.) the proactive comms is a must and you may need to engage your regulator to validate these.

 |
| 

**Colleague communications and training**

 | 

Colleagues will need to be made aware of and trained in any changes resulting from the migration to target. These could be very limited or non-existent (if only the core is changing) but could be significant if the programme is delivering sweeping business processes, front-end, and other such changes. Often a new-to-bank or greenfield go-live predates migration, meaning that the colleague impact is front-loaded and decouples from the migration go-live.

 |
| 

**Colleague event support**

 | 

There is often a requirement for increased colleague support/awareness over and very shortly after the migration go-live event. You should consider the requirement for:

\* Enhanced customer facing support (digital channel Q&A, telephone staff, branch presence, etc.) to handle potentially higher volumes in the period shortly after the migration event.

\* Enhanced customer feedback/comms tracking (such as enhanced reporting/altering on social media sites based on keywords that are likely to relate to the migration - `missing`, `unavailable`, `brand name impacted by programme`, etc.).

\* A requirement to complete planned or unplanned post migration fixes of data that could not happen on source or during the transform stage of the migration.

 |
| 

**Operating model change**

 | 

When undertaking a migration it is common for the migration itself to represent a point at which the operating model significantly changes. This new operating model, along with the related governance, needs signing off in the lead up to the event and be ready to implement.

 |

## [](#templates "Copy link to heading")Templates

Thought Machine can provide templates to support clients in delivery of migration event business impact analysis. Please contact your assigned Thought Machine representative for further information.

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).