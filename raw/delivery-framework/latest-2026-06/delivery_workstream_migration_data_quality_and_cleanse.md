---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse"
title: "Data profiling, quality, and cleanse"
scraped_at: "2026-06-17T05:25:52.707Z"
images: 0
---

# Data profiling, quality, and cleanse

## [](#purpose "Copy link to heading")Purpose

Though technically data profiling, quality, and cleanse are separate delivery activities, we nevertheless find it helpful to bundle them together when considering the stages of the migration programme lifecycle:

-   [Data profiling](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_profiling) is the parsing of your source data against a set of rules / checks to provide a rich data set that can be used as an input to data quality analysis.
    
-   [Data quality](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_quality) is the analysis of source data and the outputs of data profiling based on factors such as accuracy, completeness, consistency, reliability etc. to reach a determination of whether and how data quality needs to be improved as part of the migration programme.
    
-   [Data cleanse](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_cleanse) is the action of fixing data quality issues where these have been triaged and agreed as part of the preceding data quality analysis stage.
    

If executed well this activity provides your programme with the following outcomes:

-   Better understanding of the source data, which is a valuable accelerator input into [Data Mapping](/delivery-framework/latest/EN/delivery_workstream/migration/data_mapping).
    
-   Clarity on whether source data is of sufficient quality to meet the overall objectives of the programme post-migration, and a path to improve the quality of that data where it is not.
    

The subsections below will deep-dive into each in turn, though first it is important to consider the following question:

### [](#do_i_need_to_undertake_data_profiling_quality_and_cleanse "Copy link to heading")Do I need to undertake data profiling, quality, and cleanse?

Thought Machine considers data profiling, quality, and cleanse to be optional steps within the migration programme lifecycle, the need for which should be reviewed on a case-by-case basis.

When determining whether these steps should form part of your end-end programme delivery plan, consider the following:

 
| Consideration | Description |
| --- | --- |
| 
*How old is the data / legacy core?*

 | 

Broadly speaking, the older a system / the data it stores the greater the chance that data quality issues may be present.

 |
| 

*Has the legacy core had previous migration events?*

 | 

When moving data from a legacy application to either: (i) an upgraded version of the same application, or (ii) an entirely different application with a new structure (data model), data will be transformed and can get lost or modified in ways that result in inconsistency (both intentionally and unintentionally).

In practice, this could present as missing data, data defaulted instead of retaining historic values, data being incorrectly overwritten, a change in business meaning for a given field, etc. For example, the original \`account opening' time may have been lost during a past migration and instead set to the date of the migration itself, creating an inconsistency with how this field is set for vs subsequently created BAU accounts.

When this data field is migrated to the target core this inconsistency could potentially limit a future product writer’s ability to use that data field to derive correct product logic, or demand workarounds to reach the desired behaviour.

It can thus be useful to understand the history of the data set to be migrated to identify the likelihood of such issues presenting themselves.

 |
| 

*How strict is legacy in enforcing good data quality?*

 | 

Where legacy systems (both front and back-end) have robust data validations today then this can provide confidence about overall data quality, and where not the opposite.

This must be considered over time - when did the rules come in, was work done to retroactively apply them or was it fix-forwards only, etc.?

 |
| 

*Are there existing data quality reports for legacy and what are they used for?*

 | 

Many banks will already have a reasonable sense of their data quality thanks to existing reporting / evidence. This could be as thorough as a regularly run data quality report, or as loose as a tracker of data quality related incidents that grows as they are identified.

The most thorough of such reporting goes beyond the obvious (missing data values for key fields) and looks out for common \`well-known' patterns used by operational colleagues to avoid field level validation rules or restrictive business processes (e.g. keying all \`0' for phone numbers or using a default email address \`[a@a.com](mailto:a@a.com)'), which are often well known within the business.

It is also important to understand what these reports are used for in legacy today - are they simply there to keep track of known issues or do they drive a remediation pipeline that is constantly cleansing legacy data where poor quality is identified?

 |
| 

*Is data routinely amended at the database level on legacy?*

 | 

Changing the data at the database level risks misspelling entries, using the wrong data format, putting data in the incorrect field, etc.

Because these errors are not systematic, they can be difficult to trace or correct outside of intensive data quality remediation exercises, so it is important to know whether legacy allows this today and to what extent.

 |

Where the questions above result in inconclusive answers or suggest that the overall data quality on the source system might not be good, then it is prudent to at least undertake a more structured and thorough [Data Profiling](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_profiling) activity to investigate further.

As the adage goes - **\`rubbish in, rubbish out'**. Being wilfully ignorant of potential data quality issues, or knowing they exist and accepting them regardless, undermines what is likely a core purpose of your core banking modernisation programme as a whole in moving away from the constraints of legacy and realising the benefits of your target system.

Further, based on our client experience, BAU bank change budgets are rarely prioritised for data quality improvements except where these pose a blocker to a broader change initiative (e.g. implementing 2FA demands higher quality mobile phone number data to be meaningful), so modernisation programmes present one of the few opportunities to (finally!) address data quality issues in a structured manner.

**Consider that missing this opportunity might mean that, even with the best of intentions, these data quality issues persist for many years until the next such programme comes along…**

chat\_bubble

Around half of the programmes we have supported have executed a discrete migration data profiling / quality / cleanse step, primarily tier 1/2 banks with older legacy cores and previously known data quality issues. It is rarer that banks with newer systems and data only going back the last few years have structural issues with the quality of their data that demand programme time or effort to resolve.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: [Migration Strategy](/delivery-framework/latest/EN/delivery_workstream/migration/migration_strategy)
    

## [](#guidance_data_profiling "Copy link to heading")Guidance - Data profiling

If executed well, data profiling provides a rich set of data with which the programme can make informed decisions regarding if and how to improve the migrated data quality.

A data profiling report is created by parsing the legacy system (or an extract of it) to understand the makeup of the data.

First identify the fields that need profiling (this can just be a subset of key data fields, or at the very least only those in scope for migration). Then construct the reports to provide insights into data:

-   Format
    
-   Cardinality
    
-   Minimum/maximum values
    
-   Uniqueness, etc.
    
-   As well as bespoke rules that are known to be an issue on legacy or changes in acceptable field format on target (single letter first names, account opening dates pre-1900, etc.).
    

There is dedicated tooling available on the market to support this exercise, and most large consultancies provide such tooling as part of a complete ETL tool / delivery support service.

Data profiling in and of itself does not result in a decision or outcome, but rather it provides the necessary information (or MI if you prefer) to prepare for investigating and fixing quality issues in subsequent steps of the lifecycle.

There is also benefit in completing this exercise as an input into [Data Mapping](/delivery-framework/latest/EN/delivery_workstream/migration/data_mapping). For example, knowing the number of unique enum values populated on legacy for a field can turn a discussion of \`how do I map these 25 enums' to \`how do I map these 5 enums that are actually used on legacy (ignoring the 20 that are not currently used across any active account)'.

You may not have a formal process for understanding the current extent of data quality and any potential issues. What constitutes \`good' will also differ depending on the context and what is valuable to the overall programme. That said, aside form creation of new automated data profiling reports, other activities that can help to get a sense of source data could include the following:

 
| Type | Description |
| --- | --- |
| 
Existing bank reporting

 | 

Any regular or ad-hoc data quality reporting (perhaps run as part of a past change programme) that can be leveraged for this migration programme.

 |
| 

Existing bank SMEs

 | 

Bank SMEs from legacy core banking systems or within the business / operations functions that interact with it often have a good sense of the scale and nature of data quality issues that exist on legacy today.

Even anecdotal evidence can be useful to inform areas of focus for further profiling / investigation, and such SMEs will also be well placed to advise on any existing reporting as above.

 |
| 

Early migration tests

 | 

One way to identify data issues early on in a migration programme is to attempt to put the source data through the migration process/pipeline (ETL) and see what does or does not get accepted by the target system.

This has the upside of leveraging an existing pipeline and thus reducing any throw-away build / analysis, but the downside of only highlighting data quality issues that break target data validation rules; it is likely that there are some instances where \`bad' quality data nevertheless meets the minimum validation rules.

 |

chat\_bubble

In our experience, most banks will have a known set of data quality rules that define what \`good' data quality looks like for a given data set. Use these where possible rather than investing effort in building new data profiling reporting where possible.

## [](#guidance_data_quality "Copy link to heading")Guidance - Data quality

Just because a data quality issue has been identified through [Data Profiling](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_profiling) does not necessarily mean it will or even should be fixed.

The typical stages that you would then expect each identified data quality issue to go through before any (potential) [Data Cleanse](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_cleanse) occurs are:

 
| Stage | Description |
| --- | --- |
| 
Triage

 | 

The issues should be triaged to understand the data quality issue in more detail.

If not already known, the questions to ask at this stage include: what is the root cause of the issue? What proportion of total accounts are impacted? When did the issue start? Does it still occur for new accounts today? What effect will not fixing have on the target systems?

 |
| 

Prioritisation

 | 

The issues should be prioritised based on a balance of cost (effort to fix, are external parties involved, etc.) and impact (e.g. proportion of accounts impacted, materiality of the impact on target business processes).

It is possible that the programme will identify more data quality issues that it can realistically solve, so such a prioritisation is important. Some issues may be entirely de-scoped at this stage.

 |
| 

Agreement on fix

 | 

Take prioritised issues to the relevant data quality decision-making authority and agree: (i) whether to fix, and (ii) how to fix.

The nature of this decision making authority will depend on how you have approached data quality as a whole, but in our experience it could be as little as a single product owner or as involved as a programme data quality working group.

Regardless, it is important to be clear from the outset regarding how these decisions are made and that there is ability to follow through on them once made.

 |
| 

Ready for cleanse

 | 

This is a stage gate which recognises that the manual or automated solution for data cleanse is known and is now waiting to be undertaken.

See below for further details on options for [Data Cleanse](/delivery-framework/latest/EN/delivery_workstream/migration/data_quality_and_cleanse#guidance_data_cleanse).

 |

chat\_bubble

We have seen data quality analysis run as a side-of-desk activity or as a full programme workstream with its own detailed governance and approval process, analysis templates, etc. Size of bank / migration scope, extent of quality issues, and other such factors will inform this, and ultimately it varies significantly from bank to bank.

## [](#guidance_data_cleanse "Copy link to heading")Guidance - Data cleanse

Once a data quality issue has been agreed to be fixed there are, broadly speaking, two activities that you then need to undertake:

 
| Activity | Description |
| --- | --- |
| 
Fix the root cause

 | 

Identify the root cause of the data quality issue and fix it to prevent ongoing recurrences of poor data quality.

This step is not always needed, and will depend on what caused the poor data quality in the first place (not relevant for issues caused by past migrations for example, as these are by definition one-off and in the past) and also whether or not the root cause has already been fixed at a point in the past on legacy.

Where the root cause is \`live' then the most appropriate fix will probably be an amendment to business processes and / or data validation rules of the related systems.

 |
| 

Fix the data

 | 

Improve the existing data quality by implementing the fixes agreed during the data quality analysis step.

 |

When fixing the data there are, broadly speaking, a further three approaches for how to go about this:

 
| Approach | Description |
| --- | --- |
| 
Fix the data on legacy

 | 

Fix the data quality issue on the legacy system ahead of migration - you can think of this as a sort of \`harmonisation'.

There are a variety of ways to actually execute the fix on legacy, most likely one of either: (i) automated script (fixing a common issue, overriding data with an enriched data set from elsewhere in the bank, etc.), or (ii) contacting customers (in app pop up asking for information, proactive contact by the bank, etc.).

Regardless of the method chosen, this approach is beneficial in that it can occur in parallel with ETL build without complicating it.

 |
| 

Fix the data in migration ETL

 | 

Incorporate the fix of data quality issues into the migration ETL pipeline; for example, a rule engine could be written to update incorrect values for a field with consistent values, which could happen before or as part of broader data transformation resulting from data mapping.

For simpler rules-based fixes we recommend this approach because it minimises manual effort and chance of error, it can be run iteratively on each migration on the data in scope for that event, and is entirely in the control of the migration programme team to implement.

 |
| 

Fix the data on target

 | 

Fix data on target after the migration has completed.

A tempting option (deferring the problem until the migration is \`out of the way') but one that extends the programme scope beyond migration date and carries the risk that the programme will not fix the quality issues and these will persist in BAU.

Further, it is only possible if the target system data validation rules around data updates allows it, which will almost always be more restrictive than what could have been achieved in the ETL process.

 |

Once a data quality issue has been fixed it is prudent to re-run the data quality report that originally flagged it (or run equivalent manual checks) to ensure that it has been resolved in the manner intended.

chat\_bubble

In our experience, the ideal fix is \`on legacy' - migrating bad data to target is inefficient, and executing in ETL adds scope (and therefore risk). Failing that, leverage the existing ETL tooling to improve quality within data transformation, and avoid fixing on target at all costs.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).