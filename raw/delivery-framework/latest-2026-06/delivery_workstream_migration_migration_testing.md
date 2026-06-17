---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing"
title: "Migration ETL testing"
scraped_at: "2026-06-17T05:25:55.838Z"
images: 0
---

# Migration ETL testing

## [](#purpose "Copy link to heading")Purpose

Migration ETL testing in this context refers to any test activity that is undertaken within the migration workstream.

Testing scope will vary based on the definition of what is or is not included in migration, risk tolerance, nomenclature and the target state architecture, among other factors.

For simplicity, migration testing is broken down here into four distinct categories:

-   [Functional Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#functional_testing): Testing of the ETL pipeline and Vault Core to ensure the migrated product behaviour is as expected.
    
-   [Non-Functional Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#non_functional_testing): Testing of the ETL pipeline and Vault Core to ensure it can meet the non-functional requirements of the migrating products.
    
-   [Migration Integration Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#migration_integration_testing): Testing to ensure that the cascading or upstream/downstream affects of loading data to Vault Core are as expected.
    
-   [Source Suppression And Regression Testing](/delivery-framework/latest/EN/delivery_workstream/migration/migration_testing#source_suppression_and_regression_testing): Ensuring that the suppression of accounts on the legacy core works as intended and that accounts remaining on the legacy core continue to run as expected.
    

If executed well this activity provides your programme with the following outcomes:

-   Confidence going into the production migration that the event that the pipeline works as expected (that data will reconcile, performance meets event timing requirements, etc.).
    

error

*Be realistic about the length of time required to execute migration testing*.

Migrating any back book with a large number of accounts comes with inherent risk that needs mitigating through thorough testing. The testing required and consequently the time it takes are determined as part of the [Test Strategy](/delivery-framework/latest/EN/delivery_workstream/testing/test_strategy) and test planning.

chat\_bubble

Proving cycles and dress rehearsals are covered within the [Migration Event Execution](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution) section of this guidance.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: [Data Mapping](/delivery-framework/latest/EN/delivery_workstream/migration/data_mapping)
    
2.  Migration: [Extract](/delivery-framework/latest/EN/delivery_workstream/migration/extract_transform_and_load_etl_tooling_build)
    
3.  Migration: [Data Profiling](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse)
    

## [](#guidance_types_of_migration_testing "Copy link to heading")Guidance - Types of migration testing

### [](#functional_testing "Copy link to heading")Functional Testing

Functional testing is the first type of testing you will execute in your migration testing journey. You should invest at this stage in your overall migration testing process for the benefit of all future testing to come:

-   **Build repeatable testing pipelines against a dedicated migration environment**: It is not uncommon at the latter stages of migration testing to be re-running the pipeline 3-4 times per week. This is necessary to quickly prove any defect fixes in the ETL or post load product behaviour. Re-deploying code, broader services as well as wiping databases should not require a large amount of migration team effort to execute.
    
-   **Have an independent ability to run the pipeline**: Linked to the preceding point, the testing pipeline should be able to be solely executed by the migration team. Any dependency on teams (for example cloud infrastructure for access rights being granted) should be removed from the start.
    
-   **Embed an incident management process in advance of test commencement**: Before you begin running tests have a clear process for raising and managing incidents. For Vault Core specifically it is important that the people closest to the actual issues (i.e. those responsible for running and reviewing the outputs of migration tests) are set up to directly raise and comment on Vault Core incident tickets - remove the middle-men! Speak to your assigned Thought Machine representative for support getting set up on this shared incident management process.
    
-   **Align adequate SME resources**: Executing on the preceding points can be resource intensive, especially when for each functional defect you need to go from discovery through to fix verification. Source and target product SMEs are critical at this stage of the programme. The target SME resource pool needs to include those that are familiar with the configured Smart Contract. Additionally, business analysts are required to help triage defects and manage the process end to end.
    
-   **Have access to Kafka, REST APIs, and the Database to run queries**: Incident triage will, on occasion, require checking for messages on Kafka event streams, executing ad-hoc REST API calls, or querying the Vault Core database directly. Ensure that the teams running tests and managing defects are set up to do this without requiring permissions to be granted every time or pulling in external resources from other teams. These three types of checking are MVP for triaging migration issues when they occur.
    

More specifically regarding functionally testing the ETL pipeline and the migration product behaviour on target our recommendations are:

-   **Begin with \`manual' migrations if you want to quickly prove data mapping outputs**: If data mapping completes ahead of ETL build then there is value in executing \`manual' migrations (i.e. constructing migrated json messages by hand and putting onto the Kafka request topic yourself). Of course this will not prove the ETL pipeline in any way, but it will smoke test the environment setup (is the migration component deployed correctly), validate some aspects of mapping output, and help familiarise the team with the migration messages and streamed events.
    
-   **Do not underestimate product testing on target to ensure that**: The [Smart Contract changes required to support migration](/delivery-framework/latest/EN/delivery_workstream/migration/smart_contract_migration_build_and_test#guidance_migration_sc_builds) are working as expected and on creating and activating the account it reflects the expected state.
    
-   The go-forward behaviour of the product for migrated accounts replicates what you have likely already proven for \`new to bank' accounts. This is particularly important around key product lifecycle events - for example Statement Cut Off.
    
-   The [Simulation Testing](/vault-core/latest/EN/reference/contracts/contract_simulation#how_does_contract_simulation_work) on target has demonstrated that a migrated account (as opposed to a new account) executes as expected over a period of time.
    
-   The \`post migration testing' or \`testing on target' team have adequate migrated accounts in a particular set of states to complete their testing. Their requirements need to be documented so appropriate test runs into the necessary environment by the migration (ETL) team are completed.
    
-   **Build early confidence in the reconciliations**: It can be valuable to get early feedback on your proposed technical and business reconciliation reporting during the functional testing process. Doing this familiarises senior stakeholders with the documentation they will use to sign-off the migration execution.
    

### [](#non_functional_testing "Copy link to heading")Non-functional testing

Non-functional testing here focuses on the ETL pipeline and the target system running the migrated accounts.

Specifically in the ETL pipeline this means we are predominately focused on performance testing and when looking at the target system it is focused on load testing.

We do not focus on other types of non-functional testing (for example security) because it is assumed that this has been completed earlier in the programme. See the [Testing Workstream](/delivery-framework/latest/EN/delivery_workstream/testing) for more details.

With regard to non-functional testing the ETL pipeline our recommendations are:

-   **Provision the environment appropriately for your migration scope**: Migration performance will be heavily dependant on your environment spec. See [here](/delivery-framework/latest/EN/delivery_workstream/migration/tooling_and_environment_setup) for more details.
    
-   **Keep an eye on database 'fullness'**: Migration performance can degrade as the database gets full after many non-functional migration loads. You should plan in regular environment wipes from the get-go to avoid any issues relating to performance degradation. For more information see the [Migration Environment Setup](/delivery-framework/latest/EN/delivery_workstream/migration/tooling_and_environment_setup) *What are my requirements for environment wiping?* section. For performance tests occurring later in your route-to-live it is also prudent to prepare for the migration tests by restoring the environment to a state that represents the likely state of the production environment as it will be for the prod migration (this could be an empty environment or an environment with a certain number of pre-existing Accounts / Postings).
    
-   **Migrate onto a representative number of Accounts**: It can be tempting in testing to save time by creating a very small number of Accounts, which is unrepresentative of the true number that will be migrated in production, and then migrating a large number of Postings against these. Though this can save time in setting up the test, note that the smaller the number of Accounts being migrated onto the greater the chance of loading many postings for a single Account in quick succession, which can case performance bottlenecks. Instead always create a representative number of Accounts that equals the number you expect to migrate onto in production.
    
-   **Where possible start non-functional testing during mapping**: This may sound counterintuitive but once the mapping of certain fields has been completed, if it is ready you can start to run the ETL pipeline to identify major performance bottlenecks. While performance tuning, often entailing allocating more hardware to the problem, can solve many late stage bottlenecks, if the wrong system has been used - for example an Online Analytical Processing (OLAP) rather than Online Transaction Processing tool (OLTP) for data loading - this is more easily identified earlier in the programme. Environment issues will be the main cause of migration early non-functional migration incidents.
    
-   **Invest in pipeline tracing and monitoring**: Linked to the preceding point, having appropriate tooling in place can help to identify performance bottlenecks, this enables more efficient investigation into changes or tuning required.
    
-   **Avoid running testing during key Vault Core periods**: Unless it is formally agreed as part of your migration strategy or a particular test case, make sure to avoid doing migration loads onto Vault Core during the End of Day (EoD) for accounts already running on the environment. Additionally, while it should have a negligible impact, we would recommend avoiding completing a load when the `data-deletion-scheduler` is running. If you are unfamiliar with this feature please reach out to your Thought Machine contact.
    

### [](#migration_integration_testing "Copy link to heading")Migration integration testing

Integration testing, by its very nature, extends beyond the boundaries of the migration workstream, and is covered in more detail in the [Testing Workstream](/delivery-framework/latest/EN/delivery_workstream/testing). Here we have captured only some additional migration nuances to consider in the context of integration testing.

The scope of migration integration testing can be functional and non-functional in nature, though the focus is generally the former.

Most programmes will focus on ensuring that the cascading effects of migrating data into the core system are known and controlled adequately, however, it is also important to ensure downstream systems can handle non-functional impacts of the migration. For example, can a microservice that consumes Kafka events from Vault Core handle the material increase in events generated by the migration itself and afterwards in business as usual at the now higher load.

With regard to migration integration testing our recommendations are:

-   *Document a clear view of the architecture*: In a microservices loosely coupled architecture it can be easy to quickly lose sight of all places that data is stored or passes through. This is different to many historic core migrations where it was a single source to a single target. With this in mind, it is important that the testing workstream has a clear picture of all systems and services in scope for testing to ensure that cascading impacts are verified. This does not only mean those services directly connected to Vault Core, but also those that can be two or three layers removed and are indirectly fed Vault Core data. This view is available based on the [Transition State](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture) & Target Architecture.
    
-   *Interlock with SMEs to understand the data cascade*: The streamed events from core banking systems end up in a large number of downstream databases - this may be directly based on streamed events or via a data warehouse as an intermediary. These are owned by various business teams each with their own requirements. In our experience it is valuable to align a single bank data SME to coordinate the requirements and feedback from these parties back into the central migration testing team. This is particularly valuable when it is a partner, with inherently less bank knowledge, managing the ETL pipeline.
    
-   *Do not forget the reporting*: It can be easy to focus on the UI or databases when looking at upstream or downstream systems that are impacted by migration. Based on our experience, while the migration can complete successfully, it can often be downstream reporting that does not work the next day as expected.
    

### [](#source_suppression_and_regression_testing "Copy link to heading")Source suppression and regression testing

#### [](#source_suppression "Copy link to heading")Source suppression

Suppression means making changes to the legacy core to reflect that it is no longer the system of record for a set of accounts or products. For example, changes to the customer user interface to account for the migration, such as not allowing account openings of the old product on the old website.

If your legacy core is fully supported internally then this is usually an easier exercise because the behaviour of the product and the database schema are fully understood by your SMEs. However, if you rely on a vendor this activity is normally more difficult to test and it is important to engage the vendor early for their SME support.

There is no single approach to best execute and test suppression, it depends on your requirements. However, below we document common approaches as well as the benefits and considerations of each to then move on to explain the specific testing considerations required:

   
| Type | Description | Pros | Cons |
| --- | --- | --- | --- |
| 
Closing Accounts

 | 

Probably the approach seen most, this closes the account in a similar manner to what is done in a business as usual state.

 | 

\* In most cases utilises proven journeys or flows so is perceived as relatively low risk.

\* May be able to do it independent of legacy vendor(s).

\* Cleanest solution because the account is only present in one system after the migration event.

 | 

\* Need to ensure business as usual integrations do not inadvertently trigger downstream processes from running, for example closing statement letters or texts.

\* The performance of the close mechanism (for example API) may not be quick enough to close all accounts in the event window.

 |
| 

Mark Accounts Dormant Or On Hold

 | 

A more risk averse approach is to mark the accounts dormant as part of the migration event.

 | 

\* Provides the opportunity for the rollback window to extend beyond the main migration event.

\* Likely the simplest and quickest solution during the migration event.

 | 

\* Means the true suppression of the account needs to completed at a later date.

\* Risk of unwanted consequences when marking accounts dormant or on hold, for example it does not block certain types of internal or external transactions.

 |

Specifically on suppression testing the considerations are:

 
| Type | Testing Considerations |
| --- | --- |
| 
Closing Accounts

 | 

\* Ensure performance of suppression is adequate to meet the business requirements.

\* Validate all downstream effects of closing the account are understood - including non-IT supported tooling.

\* If reliant on a vendor they may be less willing to support given you are exiting the platform, this needs appropriate senior support to manage and likely early engagement.

\* Validate that it is possible to close the migrated accounts, accounting for the various states that they were likely in at the point of migration. For example, what are the steps to be taken to \`force close' a delinquent account.

 |
| 

Mark Accounts Dormant Or On Hold

 | 

\* Similar to closing the account, the impacts of changing the status of accounts needs to be understood across the bank.

\* When in a dormant or on hold state any internally or externally triggered changes on the account need to be validated, predominately to ensure that there are no unwanted changes on the account ahead of its closure or deletion.

 |

#### [](#source_regression "Copy link to heading")Source regression

Regression in this context focuses on ensuring the legacy system, which is still supporting a proportion of the accounts and/or products, has not been adversely affected by the migration.

Strictly speaking this is functional and non-functional in nature, however, in most migrations the primary focus is on identifying all functional regressions because the wider assumption is that with fewer accounts or products the platform has less non-functional demands placed on it.

In most cases source regression focuses on:

-   **Upstream/downstream core availability**: Ensuring that the migration has not led to unintended consequences between the core and its integrations. This focuses on key journeys and behaviour - for example being able to query an account’s balance.
    
-   **End of Day/Month/Year Batches**: Does the end of day batch still execute as expected after the migration? An example of a regression here may be the extract or suppression of accounts causing unintended functional consequences for similar or linked products.
    

chat\_bubble

Proving cycles and dress rehearsals are covered within the [Migration Event Execution](/delivery-framework/latest/EN/delivery_workstream/migration/event_execution) section of this guidance.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).