---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/integrations/data_system_low_level"
title: "Data System Low Level Requirements Gathering"
scraped_at: "2026-06-17T16:03:31.722Z"
images: 0
---

# Data System Low Level Requirements Gathering

## [](#purpose "Copy link to heading")Purpose

This activity deep dives in the low level requirements gathering from the Data system strategy activity. This activity is undertaken by the business and technology stakeholders.

The low level requirements gathering enables the design of the data system that includes the current state of data(requirements and usage) and future data requirements from the business strategy.

The activity ensures stakeholders' diverse perspectives and requirements are understood and translated into actionable guidelines for designing and implementing an effective data system.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

Refer to the below activities that should have been completed before this step and relevant inputs in the form of documentation should be available for this step.

1.  Architecture: [Transition State Architecture Design](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture)
    
2.  Architecture: Target Data System Mapping
    

## [](#guidance "Copy link to heading")Guidance

The data strategy design establishes guidelines for various data storage systems. This activity aims to document stakeholder data requirements and aid the design of the data systems.

The iterative requirements gathering process should adhere to the following overarching steps:

-   **Review the data strategy document:** Identify key objectives, goals, and principles related to data storage outlined in the strategy.
    
-   **Identify stakeholders:** Determine who the key stakeholders are for the data storage requirements. These may include data owners, system owners, data architects, data engineers, data scientists, business analysts, operations , and end-users who interact with the data.
    
-   **Conduct stakeholder interviews:** Schedule interviews with stakeholders to discuss their needs and expectations regarding data storage. Ask open-ended questions to gather insights into their requirements.
    
-   **Facilitate workshops or focus groups:** Organise workshops or focus groups with relevant stakeholders to brainstorm and discuss data storage requirements collaboratively. Use techniques like brainstorming, affinity diagramming, or requirements prioritisation exercises to elicit and prioritise requirements.
    
-   **Document requirements:** Capture all identified requirements in a structured manner. Use templates or tools such as requirement management systems to document requirements clearly, including their priority, source, and dependencies. See sample templates provided on this page.
    
-   **Validate requirements:** Validate the gathered requirements with stakeholders to ensure they accurately reflect their needs and expectations. Address any discrepancies or conflicting requirements through discussions and negotiations.
    
-   **Iterate and refine:** Iterate through the requirement gathering process to ensure all aspects of data storage are covered comprehensively. Refine requirements based on feedback and additional insights gained during the process.
    
-   **Review with the architect:** Once requirements are gathered and documented, review them with the architect. Ensure alignment with the overall data strategy and seek their feedback and approval.
    
-   **Document and communicate:** Document the finalised data storage requirements clearly and comprehensively. Communicate these requirements to all relevant stakeholders, including the architect, for their awareness and buy-in.
    

Data requirements can be gathered and documented across different categories.

1.  **System data flows**
    
    -   Identify the upstream and downstream systems or data sources that send inputs to or receive outputs from Vault.
        
    -   For each system, document:
        
        -   System name.
            
        -   Data source type (e.g., database, API, file).
            
        -   Frequency of data updates.
            
        -   Data formats and standards.
            
        -   Criticality of data for Vault Core / downstream systems.
            
        
    
2.  **Data requirements for business flows**
    
    -   Identify the key business flows or sequences of activities within the system.
        
    -   For each business flow, specify:
        
        -   Flow name.
            
        -   Description
            
        -   Associated business processes.
            
        -   Required data elements:
            
            -   List the data elements needed to support each step of the business flow.
                
            -   Include both input data (data entered or received during the process) and output data (data generated or required for subsequent steps).
                
            
        -   Data freshness:
            
            -   Define the required freshness of data for each step of the business flow.
                
            -   Specify whether real-time data is needed or if data can be up to a certain age (e.g., 1 day old, 1 hour old).
                
            
        -   Data dependencies:
            
            -   Identify any dependencies between data elements within the same business flow or across different business flows.
                
            
        -   Performance expectations:
            
            -   Specify any performance requirements related to data retrieval, processing, or presentation for each business flow.
                
            
        -   Exception handling:
            
            -   Define how exceptions or errors related to data processing or availability should be handled within each business flow.
                
            
        
    
3.  **Data requirements for external interfaces**
    
    -   Identify any external systems or services that Vault Core needs to integrate with.
        
    -   For each integration point, document:
        
        -   Interface name/description.
            
        -   Protocol (e.g., File, RESTful API, SOAP, Message Queue).
            
        -   Data formats (e.g., JSON, XML).
            
        -   Authentication/authorisation mechanisms.
            
        
    
4.  **Other considerations**
    
    -   Data transformation and mapping:
        
        -   Define the data formats and communication protocols used for data exchange with internal and external systems.
            
        -   Specify any transformations or mappings required to convert data between different formats.
            
        
    -   Security considerations:
        
        -   Address security concerns related to data transmission and integration.
            
        -   Include measures such as encryption, authentication, and data masking to ensure secure communication.
            
        
    -   Other requirements
        
        -   Data update/retrieval performance expectations.
            
        -   Backup and archival requirements.
            
        
    

### [](#common_pitfalls "Copy link to heading")Common pitfalls

Here are some common pitfalls to be aware of:

1.  **Incomplete stakeholder involvement:** Not involving all relevant stakeholders or failing to include end-users can lead to overlooking important requirements or perspectives.
    
2.  **Assuming requirements:** Assuming what stakeholders need without validating or verifying requirements can lead to solutions that do not meet actual needs.
    
3.  **Ambiguous requirements:** Unclear or ambiguous requirements can result in misinterpretation or different interpretations by different team members.
    
4.  **Overlooking non-functional requirements:** Focusing only on functional requirements (e.g. features and capabilities) and neglecting non-functional requirements (e.g. performance, security, scalability) can lead to incomplete solutions.
    
5.  **Insufficient documentation:** Inadequate documentation of requirements can lead to misunderstandings and difficulties in tracking changes and decisions.
    
6.  **Limited validation:** Failing to validate requirements with stakeholders throughout the process can result in solutions that do not meet their needs.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Data System Low Level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.