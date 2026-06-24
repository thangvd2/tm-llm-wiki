---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/feature_block_build"
title: "Feature Block Build"
scraped_at: "2026-06-17T16:03:46.276Z"
images: 0
---

# Feature Block Build

## [](#purpose "Copy link to heading")Purpose

After the requirements gathering phase of the project, the next phase is technical design and build.

Technical design is an essential step of the smart contract build process. The design phase will produce a high-level overview of the implementation of each feature. During the technical design, the testing scenarios that cover individual acceptance criteria will be defined.

Once the design is agreed by the stakeholders, we move to the build phase, which in this case, is the feature block build phase.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Smart Contract Feature Mapping and Analysis](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_mapping)
    
2.  [Smart Contract and Feature Block Technical Design](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_block_technical_design)
    

## [](#guidance "Copy link to heading")Guidance

Once you have a defined set of business requirements, you can then move to the feature block build phase. Typically, an estimate will be created for each feature (dependent upon the feature’s complexity).

The process for feature block builds is as follows:

-   The previous activity Activity: Smart Contract and Feature Block Technical Design results in a technical design based on business requirements.
    
-   Review technical design with business analyst.
    
    -   Ensure that acceptance criteria agree with the business requirements documentation.
        
    -   Technical design should be approved by the business analyst.
        
    
-   Implement the feature.
    
    -   Feature development.
        
    -   Feature unit testing.
        
    

### [](#implementation_approach "Copy link to heading")Implementation approach

A best practice to adopt is to standardise the feature files. For example, each feature file should have the same format of metadata/constants at the top of the file like so:

Other feature building best practices:

chat\_bubble

Examples can be found within the Product Library

-   If the feature requires a schedule, there should be two functions:
    
    -   **event\_types** → returns list\[SmartContractEventType\]
        
        -   Called in smart contract’s event\_types metadata
            
        
    -   **scheduled\_events** → returns dict\[str, ScheduledEvent\]
        
        -   Called in smart contract’s ActivationHook
            
        
    

#### [](#common_pitfalls "Copy link to heading")Common pitfalls

A common pitfall is providing incorrect estimates for feature block development. As experience is gained on projects, estimates become more accurate. Ideally, when first starting a smart contract build, it is suggested to pad the estimates as to not fall behind on the development of the project.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Product Code Release Packaging. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.