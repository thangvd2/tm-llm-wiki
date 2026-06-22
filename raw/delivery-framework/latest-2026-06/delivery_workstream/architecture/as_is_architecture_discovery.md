---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/architecture/as_is_architecture_discovery"
title: "As-Is Architecture Discovery"
scraped_at: "2026-06-17T16:03:17.655Z"
images: 0
---

# As-Is Architecture Discovery

## [](#purpose "Copy link to heading")Purpose

The purpose of the As-is Architecture Discovery activity is to gain a detailed understanding of the existing architectural eco-system in which the existing core banking platform(s) operate. This includes understanding the:

-   Systems participating in the existing eco-system and their integrations.
    
-   Technologies the systems themselves run on.
    
-   Underlying business capabilities, processes and user roles they support.
    

This process is a critical input to the ultimate definition of the To-Be and [Transition State Architecture](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture). Typically the overall objective of the programme will be to replace a legacy core banking system. That core banking system will potentially support numerous financial products and business capabilities and will be integrated with many other bank systems. There is unlikely to be a perfect correspondence between the capabilities supported by the existing core and what Vault Core provides.

In order to complete the as-is architecture discovery it is important to understand:

1.  What existing systems and business processes rely on the existing core either directly or indirectly - this forms the set of systems that will be impacted in some way by the programme. This could include:
    
    -   Complete replacement.
        
    -   Upgrade to integrate with new core / target systems.
        
    -   Regression testing against the new solution when it is in place.
        
    
2.  What technology underpins those systems and what integration methods are available - this will drive the modes of integration and hence overall system architecture of the to-be estate.
    
3.  What the strategic status of those systems is. This will drive whether they are:
    
    -   Candidates for re-use within the to-be architecture.
        
    -   Need to be considered for replacement (by your programme or another).
        
    
4.  What data is either mastered or stored as a golden source by these systems - that will drive scope for data migration in the to-be architecture.
    

The scope of systems to consider in the as-is architecture discovery must be carefully controlled. Due to the interconnected nature of systems within a standard bank’s enterprise architecture, there is a risk that the analysis could potentially expand to cover the entire bank, making it unmanageable. When the main goal of the program is to replace an existing core system, the scope should focus solely on the core system itself (along with related sub-systems) and any systems that are directly or indirectly dependent on the core. This typically includes channel servicing and origination systems (for both customers and employees), back office workflow, customer relationship management (CRM), payment systems, and various reporting functions such as regulatory reporting, finance, treasury, risk management, and business operations.

Good SME knowledge is key and this process works best when completed as a joint exercise between the Client and Thought Machine.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Business: [As-Is Process Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_process_discovery)
    
2.  Business: [As-Is Product Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_product_discovery)
    
3.  Governance: [Delivery And Phasing Plan](/delivery-framework/latest/EN/delivery_workstream/governance/delivery_and_phasing_plan)
    

## [](#guidance "Copy link to heading")Guidance

To analyse the as-is architecture, specific steps will differ among banks based on the complexity of their existing systems, the modernisation programme scope, documentation quality, and SME accessibility. However, at a broad level, the following steps should be followed:

1.  *Establish the scope* - understanding the overarching scope and goals of the modernisation program is critical as it determines the systems earmarked for replacement or modernisation. The systems that directly integrate with these identified systems or depend on the functionalities they offer or data they produce will define the scope of the current system analysis that must be conducted. Generally, the capabilities/domains encompassed in a current architectural analysis for a core banking replacement project will involve:
    
    -   Banking cores themselves
        
    -   Financial Product Management
        
    -   Customer Mastery / CRM
        
    -   Payment Processing (including card schemes)
        
    -   Card Management
        
    -   Scheduled Payments and Mandate Management
        
    -   Financial Crime Prevent (Fraud, AML, Sanctions etc.)
        
    -   Colleague and Customer Servicing Channels (including mobile apps)
        
    -   Origination Systems
        
    -   Back Office Workflow
        
    -   Collections and Recovery
        
    -   Data Warehouses and Business Reporting
        
    -   Finance and Regulatory Reporting
        
    -   General Ledger and Treasury
        
    -   Risk Systems (Credit Risk, Operational Risk)
        
    

chat\_bubble

This list is not exhaustive and may extend considerably further depending upon scope.

2.  *Catalogue the systems* - through analysis of existing enterprise or domain architecture documentation and interviews with SMEs, the systems that form the scope established in step 1 should be analysed and documented. System name, underlying technology, strategic status, hosting and supported integrations should be captured. Please speak to Thought Machine for a System Catalogue template. Data points to consider when cataloguing the systems in the as-is landscape are:
    
    1.  Age - What is the general age of the application estate - is it legacy or built on a modern tech stack?
        
    2.  Architecture - Is it a distributed architecture or monolithic / hub and spoke architecture?
        
    3.  Vendor Support - Is it a \`off the shelf'' application or custom in-house built application?
        
    4.  Hosting - Is it deployed on the bank’s data centres, bank’s public cloud tenant or SaaS?
        
    5.  Integration - What integration patterns does the application support. For example is it entirely batch based or does it support modern RESTful APIs?
        
    6.  Documentation - What is the level of documentation available for the application?
        
    
3.  *Map the overall architecture* - map out pictorially the in scope systems and the integrations between them, also capturing any intermediary components, middleware etc. that facilitate that integration.
    
4.  *Map the systems to the processes they support* - the full set of capabilities that need to be supported in the overall solution will have been defined by the [As-Is Process Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_process_discovery). For each system catalogued above, the capabilities as defined by the as-is process discovery that they provide either partially or fully should be captured.
    
5.  *Map the systems to the products they support* - where more than one financial product is being covered by the scope of the programme, where systems are specific to those products, this should also be captured as part of this overall activity. The [As-Is Product Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_product_discovery) can be a useful input into this exercise.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of As-Is Architecture Discovery. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.