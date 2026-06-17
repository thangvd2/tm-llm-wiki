---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/migration/event_execution"
title: "Migration event execution"
scraped_at: "2026-06-17T05:25:59.199Z"
images: 1
---

# Migration event execution

## [](#purpose "Copy link to heading")Purpose

\`Data migration event' is a term we use to refer to the culmination of a data migration programme.

Where the overall programme is made up of months or even years of work, the \`event' is the final act of actually moving the data from source to target.

-   [Proving Cycles](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#proving_cycles) - Test migration events that cover *most or all* of the end-to-end migration lifecycle but *not* under production-like conditions.
    
-   [Dress Rehearsals](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#dress_rehearsals) - Test migration events that cover all of the end-to-end migration lifecycle under production-like conditions.
    
-   [Production Migration Event](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#guidance_production_event) - Product migration events that result in the actual movement of data from source to target + cutover to make target operationally live.
    

If executed well this activity provides your programme with the following outcomes:

-   A successful migration event, which is what this entire journey has been building up to!
    

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: [Migration Event Command & Control](/delivery-framework/latest/EN/delivery_workstream/migration/event_preparation)
    

## [](#guidance_proving_cycles_and_dress_rehearsals "Copy link to heading")Guidance - Proving cycles and dress rehearsals

### [](#proving_cycles "Copy link to heading")Proving cycles

Proving cycles are the name given to the migration pipeline and target stack testing that is completed ahead of formal dress rehearsals. Within the scope of migration event preparation and in our definition they form the bridge between migration testing and formal [Dress Rehearsals](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#dress_rehearsals).

When it comes to completing proving cycles our non-exhaustive list of recommendations are:

-   Due to the effort involved in their planning and execution, only enter into proving cycles when ready. A good entry criteria for proving cycles could include:
    
    1.  A functionally robust ETL pipeline with only known defects causing reconciliation failures between source and target.
        
    2.  There should be no new defects arising apart from those driven by new data being input into the pipeline, for example a new account with poor quality data being opened.
        
    3.  The fix plan for all open defects should be known and in progress.
        
    4.  Data defects not being fixed should be agreed with the appropriate stakeholders.
        
    5.  Via at least one run in a suitably sized environment have met the non-functional requirements of the migration pipeline.
        
    
-   Within each proving cycle allow room for not only testing the ETL pipeline functionally and non-functionally but also to test Vault Core, and the wider target, running with migrated data. This testing on target may not be fully completed each time but total coverage by the end of the proving cycles is required with risk based decisions being made as to how often testing is repeated.
    
-   Plan for at least three proving cycles, with each building its scope and focus on ironing out issues. It is not uncommon to see clients complete five or more proving cycles.
    
-   Clearly document for each proving cycle what is and is not in scope. For example, suppression of the legacy core may not be in scope for the first proving cycle but should be present by the latter cycles.
    
-   Appropriate working time is required between each cycle to fix defects and other issues. In our experience trying to complete one proving cycle every 1-2 weeks is a good planning assumption.
    
-   Complete early proving cycles with only programme stakeholders. When confidence and repeatability builds start to involve business SMEs.
    
-   If carrying known defects into proving cycles, clearly communicate at each cycle or stage where you expect to see these resolved. It is not realistic to expect all defects to not be present after the first proving cycle and this message needs managing with senior stakeholders appropriately. Again the key point is about building confidence, and not regressing, with each cycle.
    
-   Complete at least one proving cycle during the planned migration event window. This will likely only involve a small number of the programme team but if there are unforeseen impacts of running the migration during the planned window it is valuable to know about them before entering dress rehearsals.
    
-   Ensure all tasks in the Schedule of Events have been completed in at least one proving cycle.
    

Bearing in mind the recommendations above an example schedule from a real Thought Machine client is outlined below. End-to-end the proving cycles took approximately 7 weeks. Please note this was only for a small migration so for a tier 1 bank migration you can expect the scope and length to be larger.

    
| Proving Cycle # | In-Scope | Out Of Scope | Involved Stakeholders | Environment |
| --- | --- | --- | --- | --- |
| 
1

 | 

\* *Product*: Current Account

\* *ETL Pipeline*: All / E2E

\* *Recs*: Operational

 | 

\* *Product*: Loan & Line of Credit

\* *Recs*: Financial

\* *Suppression*: Legacy Core & Peripheral Systems

 | 

Data Migration

 | 

Migration (This environment only supports the ETL pipeline from legacy to Vault Core. Integration limited to those services that made up the legacy and target core banking platforms)

 |
| 

2

 | 

\* *Product*: Current Account & Loan

\* *ETL Pipeline*: All / E2E

\* *Recs*: Operational & Financial

\**Suppression*: Legacy Core

*This was completed during the planned event window*

 | 

\* *Product*: Line of Credit

\* *Suppression*: Peripheral Systems

 | 

Data Migration & Testing

 | 

Migration

 |
| 

3

 | 

\* *Product*: Current Account, Loan & Line of Credit

\* *ETL Pipeline*: All / E2E

\* *Recs*: Operational & Financial

\* *Suppression*: Legacy Core & Peripheral Systems

\* Backout proving was also completed during this cycle

 | 

N/A

 | 

Data Migration & Testing

 | 

Pre-Production (This is an integrated environment with the legacy and Vault Core integrated with a sizeable proportion of the total bank technology estate)

 |
| 

4

 | 

\* *Product*: Current Account, Loan & Line of Credit

\* *ETL Pipeline*: All / E2E

\* *Recs*: Operational & Financial

\* *Suppression*: Legacy Core & Peripheral Systems

 | 

N/A

 | 

Data Migration, Testing & Business SMEs

 | 

Pre-Production

 |

### [](#dress_rehearsals "Copy link to heading")Dress rehearsals

Dress rehearsals is a term borrowed from the theatre to describe the running of a practice event that is as close as possible to the production migration event.

The dress rehearsal should in every way feel like the production event including being:

-   Executed on environments that have the same specification as production.
    
-   Run at the same time, for example 12AM - 5AM, as the production event.
    
-   Migrating exactly the same volume.
    

chat\_bubble

All [Proving Cycles](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution#test-pc) and [Migration Event Command & Control](/delivery-framework/latest/EN/delivery_workstream/migration/event_preparation#command_and_control) activities should be completed prior to entering dress rehearsals.

When it comes to planning and executing dress rehearsals our recommendations include:

-   **There should be at least two dress rehearsals completed**: Even if the first has completed exactly as planned (which is rare) you should complete two so that everyone involved is familiar with the process.
    
-   **At least one dress rehearsal should execute \`perfectly'**: There should be at least one successful (as defined by your migration exit criteria) migration dress rehearsal on the same Vault version, specs, and ETL pipeline that will be used in production before going into production go-live. You should never be doing anything for the first time in a production migration event and everyone involved should know the event sequence and timings well before proceeding with the live event.
    
-   **Entry Criteria**: Document the technical and business entry criteria for going into each dress rehearsal. This ensures adequate focus and buy-in going into the dress rehearsal.
    
-   **Practise everything like the real thing**: Even down to working overnight, getting senior stakeholders to give a go / no go decision should be rehearsed.
    
-   **Consider the value of a back out dress rehearsal**: You need to consider whether there is enough value in running a dedicated back out dress rehearsal as well as the \`normal' dress rehearsals. There is no text book answer here. It will depend on the scope and complexity of the event itself, wider risk appetite of the bank as well as the ability or risk involved with executing the specific back out steps, if required. For example, if major back out steps involve running proven BAU processes on the wider technology estate and Vault Core can simply be wiped (because there are no live accounts running) then it may be less important to add this additional dress rehearsal to the plan.
    

## [](#guidance_production_event "Copy link to heading")Guidance - Production event

### [](#production_load "Copy link to heading")Production load

The \`start' and \`end' of a migration event may be different trigger points from bank to bank, but in general the event formally commences when event preparatory activities begin (smoke tests, DB backups, etc.) and concludes and enters post go-live support a pre-defined period of time after cutover, often following the first successful End of Day.

The programme may culminate in a single production migration event (in case of \`Big bang' migrations) or multiple events taking place over a wider period (such as \`Phased' migrations).

It is normal for a migration event to run over a number of days with teams completing activities day and night throughout the period. The actual load activity often occurs during operationally quiet periods, such as overnight or over weekends where certain BAU working day operations are not taking place.

The key aims of a Migration Event should be:

 
| Aim | Description |
| --- | --- |
| 
**No data loss**

 | 

Move the data from the legacy to the new system without any unplanned data loss or change - the customer should be in the same position on the legacy and the new system.

 |
| 

**Minimise impacts on customers**

 | 

Beyond the customer being in the same financial state, any downtime should be minimised and any actions on the customer (such as using a card or accessing the digital channel) should be minimised as much as possible. The only exception to this is where there are pre-planned customer impacts that are decided as part of the migration strategy.

 |
| 

**Minimise impacts on colleagues**

 | 

Although colleagues should be aware of the migration and the impact to their day-to-day roles (training, communications, and so on), these are minimised as much as possible so that the migration is as \`invisible' to colleagues as it is for the customer.

 |
| 

**Ensure control and well rehearsed**

 | 

Migrations are critical, normally public, events for banks.

All banks want a well-understood and practised approach for handling migrations, and nothing should ever be undertaken for the first time in production (first time using this environment spec, first time on this version of a Smart Contract, first time with this event support process, etc.).

 |
| 

**Willingness to say \`no'**

 | 

With recent failed migrations in mind, banks increasingly embrace the willingness from a technical and business perspective to say \`no' to a migration where there is clear risk, even when late into an event.

 |

#### [](#what_a_typical_migration_event_could_look_like "Copy link to heading")What a typical migration event could look like

The nature of each migration event will change depending on your approach to event preparation, scope, risk appetite, and so on.

For example, some banks will have multiple target systems on top of Vault Core that require complex dependency management, whereas others may be entirely centred around a load to Vault Core.

Within this section only a Vault Core migration has been considered, which broadly speaking will follow an ETL pipeline similar to the following diagram:

![image9.png](_assets/uuid-2c40e2b6-4040-abd5-85c3-47afa9df39e_delivery.svg)

chat\_bubble

The purple areas in the diagram above are part of Vault Core, but will be executed by a client or partner.

At a high level Vault Core migration events will therefore move through the following phases:

 
| Phase | Description |
| --- | --- |
| 
**Preparation**

 | 

The programme should follow the [Event Command and Control](/delivery-framework/latest/EN/delivery_workstream/migration/event_preparation) activiites, ensuring that they are fully prepared for the migration event to take place (such as logistics, communications plans, and incidents management plans).

 |
| 

**Load precursor activities**

 | 

The first activities on the [Schedule of Events](/delivery-framework/latest/EN/delivery_workstream/migration/event_preparation#schedule_of_events) will likely cover smoke testing (proving the pipelines are working as expected), Extract (pulling data from the legacy core), and Transform (changing the source data to meet the target schema), including any necessary data movements as the data travels through the ETL pipeline and any agreed data reconciliation points.

Thought Machine is unlikely to have involvement in these precursor steps, but should be advised of progress and likely load start times.

 |
| 

**Execute load**

 | 

Vault Core’s migration APIs are called and the load commences.

The nature of the load will depend on the migration strategy - it could be a set of Data Loader calls with event listeners that kick-off subsequent Posting calls automatically, or a sequential approach with all Customer and Account resources loaded ahead of the Postings load starting later in the migration event.

The bank should monitor the progress of the load using:

\* Grafana dashboards or other observability tooling, which you should familiarise yourself with ahead of the event- Logging and corresponding alerts (for example if database unavailable)

\* Listening to specific events that deviate from the \`happy path' (for example Dead Letter Queues)In a Software as a Service (SaaS) setup Thought Machine will complete the monitoring as detailed in the bullets above but the bank will need to ensure they are ready to complete corrective steps (for example resubmitting a message).

If issues are identified, the agreed Incident Management process is followed. Thought Machine will broadly follow its standard incident management process when supporting a client migration event but may enhance this with additional Client Services support if this is contractually agreed beforehand.

 |
| 

**Load reconciliations**

 | 

After the Vault Core load has completed the post-load reconciliations will commence. There can be a great deal of variability in the nature of these reconciliations and they will take place according to the programme’s data reconciliation design. Any failed reconciliations need to be inspected and an approach agreed for how to handle each of the records. Any first occurrence validation (FOV) testing or other target system end user testing takes place at this stage and contributes to the overall reconciliations outcome.

 |
| 

**Post-load activities**

 | 

Following the Vault Core load, the programme will continue with the rest of the event, which depending on migration strategy could include:

\* Subsequent migrations into other target systems

\* Scheme cutover

\* Channel cutover

\* Event stand down

The closure of the migration event, which often coincides with the completion of all Schedule of Events (SoE) activities, will normally take place when the first EoD on target has completed and the outputs (for example interest accrual) are as expected.

This transition should be based on pre-agreed conditions prior to the event so that the rota can be planned accordingly, but may change based on what happens during the event. The decision to move to working hours only support may be taken prior to the first EoD as there is often a large gap between the final overnight activities and the first EoD on target.

 |

### [](#cutover "Copy link to heading")Cutover

Cutover during a migration event normally represents the point when the load to Vault Core has concluded, reconciliations completed successfully and the bank has made a decision to move to Vault Core as the system of record (master) going forward. This cutover may be for the whole bank but more likely a specific customer or product set.

Planning for the migration cutover is arguably the most important part of the migration event, some key considerations are:

-   *How late can the migration cutover be moved?*
    
    -   Banks will normally want to move this point to as late as possible in their migration event plan. This enables as many proving activities to be completed as possible. For example, can a level of First Occurrence Validation (FoV) be completed prior to formally cutting over?
        
    
-   *Can you decouple the core system cutover from downstream cutover?*
    
    -   Cutover does not have to represent a single decision where the full bank cuts over. There could be a separation between the core system cutting over and downstream systems not cutting over until the first End of Day (EoD) has completed and events held back from the downstream data lake.
        
    

### [](#post_event_support_and_transition_to_bau "Copy link to heading")Post-event support and transition to BAU

When the full scope of programme migration events have completed successfully, most programmes will move into a previously agreed post-migration event support phase followed by a transition to BAU:

-   **Post Migration Event Support**: A period (weeks or months) after the migration event whereby the programme continues to provide support to programme related incidents of follow-on activities.
    
    -   There may be some offboarding of resources at this stage, but in principle the programme itself is not disbanded.
        
    -   This phase will in almost all cases (unless a rollback happens), only commence when the load has successfully completed and reconciliations prove the data is in the expected state in the target system.
        
    -   There will be exit criteria associated with this phase, and the phase may be extended where these have not been met.
        
    
-   **Transition to BAU**: The dissolution of the migration programme team and handover of the newly migrated accounts to the BAU bank business functions for any future activities relating to them.
    
    -   This is the new run state of the bank.
        
    -   Once the transition to BAU has happened if an issue resulting from the migration is identified it is the job of the BAU team to manage and resolve this.
        
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).