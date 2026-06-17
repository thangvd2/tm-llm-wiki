---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/fundamentals_pathway/migration/m2_preparation"
title: "Module 2: Preparation"
scraped_at: "2026-06-17T05:21:32.931Z"
images: 0
---

# Module 2: Preparation

assignment\_turned\_in

Learning objective

Outline the business needs and operational data that needs to be considered before migrating.

## [](#migration_strategy "Copy link to heading")Migration strategy

No two migrations are the same - there are a lot of decisions to be made before the migration is carried out. Let’s consider some of the decisions you will have to make before the migration - we will take both the business needs and operational data into consideration.

### [](#programme_strategy "Copy link to heading")Programme strategy

This is the programme plan defining the scope and phasing.

That will include your product build sequencing and system migration phasing.

### [](#value_drivers "Copy link to heading")Value drivers

Your value drivers - the business and technology reasons for the migration - will be your guidance for decision making and might include important deadlines as an example.

### [](#target_architecture "Copy link to heading")Target architecture

Upstream (integration layer, domain APIs) and downstream (event consumption, data hub) integrations will need to be considered, to plan what the target state of the architecture will look like.

### [](#product_simplification "Copy link to heading")Product simplification

Product simplification will help you to keep target scope manageable by reducing the number of accounts and products that need to be migrated or created.

### [](#product_features "Copy link to heading")Product features

Review your legacy products, you should also map those to the target products and their capabilities - that could include KYC or Credit Risk Scoring; as well as product features (such as interest accrual or early withdrawal).

### [](#resource_scope "Copy link to heading")Resource scope

Finally, resource scope - these are the resources in scope for the product, such as Customer or account.

lightbulb

Contact your Thought Machine representative to discuss the options available to you or talk through any specific considerations regarding your project.

## [](#value_drivers_2 "Copy link to heading")Value drivers

Your business and technology reasons will help you decide which route to take with the migration. Identifying your primary value driver - determining whether you are solving a business or a technology issue - will be a helpful starting point.

### [](#business_value_drivers "Copy link to heading")Business value drivers:

-   Reducing operating costs through technology and operations.
    
-   Streamlining business operations with automation.
    
-   Launching new, innovative product propositions.
    
-   Meeting contractual deadlines with the current core provider.
    
-   Acquiring another bank’s back-book.
    
-   Addressing key business risks or regulatory requirements.
    

### [](#technology_value_drivers "Copy link to heading")Technology value drivers:

-   Outdated architecture hindering from leveraging modern banking architecture.
    
-   No 24/7 operation due to batch processing.
    
-   Not cloud-native.
    
-   Code with limited support.
    
-   Monolithic, inflexible structure.
    
-   The current technology has reached its end of life, posing significant risks.
    

## [](#migration_patterns "Copy link to heading")Migration patterns

*Click on the video below to play it. The transcript is available below.*

  Video transcript

To decide how the migration will happen, we should consider different migration patterns, as they all introduce different architectural setups and maintenance needs.

There are two categories of migrations to Vault Core: Non-ETL and ETL, where ETL stands for Extract, Transform and Load.

Non-ETL migration is used only in niche circumstances - it avoids the need for a migration ETL pipeline.

However each of the patterns in this category - manual, on/offboard and run-off - has significant trade-offs to consider.

ETL migrations are more traditional, but the variance between strategies are really significant.

While the effort that goes into planning and executing is higher, the customer impact is also generally smaller.

The patterns that belong in this group are big bang, phased and parallel run migrations.

First, we have the manual pattern.

Direct user data input bypasses technical build requirements, making it simpler than a technical ETL.

While potentially fast, its practicality is limited to very low volumes.

This method necessitates thorough checking for human error and is reliant on the front-end, which may lead to additional interactions.

The on/off-board migration pattern means accounts are closed in legacy systems and opened as new on the target system.

This is more like a product switch or refinancing.

There’s a high customer impact and potential for customer attrition, but it also relies on business-as-usual processes for the heavy lifting.

Again, no technical build skills are required, and it’s vastly simpler than a technical ETL.

Some history can be maintained, and existing processes can be leveraged. However, it may need to be opt-in depending on existing product terms and conditions, and if more history needs to be retained, a traditional ETL might ultimately be better.

Run-off migration, again, offers no technical build requirement and is much simpler. But it’s only practical short-term and requires maintaining two books and/or architectural co-existence during the run-off period. This approach is best for a small product subset.

The 'big bang' migration pattern means all in-scope data is migrated at once.

There’s no transitory state; the cutover point is a complete switch. This approach has lower architectural complexity but higher overall risk. While it might be familiar to a bank and often offers the simplest and quickest solution, the customer and delivery risk is exceptionally high.

A single go/no-go decision takes the bank beyond the point of no return.

The 'big bang' migration pattern means all in-scope data is migrated at once.

There’s no transitory state; the cutover point is a complete switch.

This approach has lower architectural complexity but higher overall risk.

While it might be familiar to a bank and often offers the simplest and quickest solution, the customer and delivery risk is exceptionally high.

A single go/no-go decision takes the bank beyond the point of no return.

Parallel run decouples load from cutover, syncing real-time data with the legacy core and enabling regular reconciliations.

This approach, while increasing architectural complexity, significantly de-risks the process through extended parallel production.

Cutover is simplified via upstream routing, reducing in-flight scenarios.

However, delivery is challenging due to expanded scope, the cost of running two cores at the same time, and the need for Vault-legacy core connectivity.

Maintaining identical products between source and target systems is crucial, precluding behavioural changes or simplifications before migrating to Vault Core.

*That completes this module.*

Next module