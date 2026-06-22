---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/architecture/gap_analysis"
title: "Vault Capability Gap Analysis"
scraped_at: "2026-06-17T16:03:19.369Z"
images: 0
---

# Vault Capability Gap Analysis

## [](#purpose "Copy link to heading")Purpose

This activity analyses the capabilities currently provided by the incumbent core banking platform and compares with those that Vault Core can support. The initial list of capabilities is an output from the [Process](/delivery-framework/latest/EN/delivery_workstream/business/process_requirements) and [Product](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements) requirements gathering activities. Each capability is assessed to determine to what extent it is supported by Vault Core.

Solution analysis will identify the functionality that is required in the end-to-end flows in which Vault Core is integrated directly (Banking and Payments) and also for the flows where Vault Core outputs are used indirectly (Accounting and Liquidity). In scenarios where Vault Core provides data for further processing or depends on data from external systems, the capabilities will be marked as partially supported by Vault Core with the details of dependency explained in the details.

Timely analysis of capabilities may avoid risk of missed timelines due to incorrect assumptions and estimations of Vault Core functionality. This activity also helps in determining the delivery timelines against each capability.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Business: [Process Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/business/process_requirements)
    
2.  Business: [Product Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements)
    
3.  Architecture: [As-Is Architecture Discovery](/delivery-framework/latest/EN/delivery_workstream/architecture/as_is_architecture_discovery)
    

Outputs:

-   Vault Core Capabilities Mapping: The result of which lists all the capabilities that Vault Core can fulfil - which can be added to Vault Core and which have to be developed outside of Vault Core.
    

## [](#guidance "Copy link to heading")Guidance

The Vault Core Capability Gap Analysis is intended to determine which capabilities provided by the core systems in scope for replacement can be met by Vault Core and which will need to be solved for by other means. It is suggested that the following steps be followed in order to undertake the analysis:

1.  Take as an input the analysis of the capabilities that the target solution needs to solve for (those provided by the existing core and related systems in scope for replacement). This should be an output of the high level [Process](/delivery-framework/latest/EN/delivery_workstream/business/process_requirements) and [Product](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements) requirements activities. This will take the form of a list of business capabilities, organised into domains, with an accompanying high level description of what that capability entails and the phase of the programme that will need to deliver it.
    
2.  For each capability assess whether the capability is:
    
    1.  Fully Met by Vault Core - this capability can be fully implemented on Vault Core either as a core platform feature or through Smart Contract configuration, for example Interest Accrual and Application can be fully implemented on Vault Core.
        
    2.  Partially Met by Vault - some aspects of the capability can be met by Vault Core but integration with other components will be required to fully implement the capability, for example Loan Disbursement can be triggered on Vault Core at loan activation but will require integration with a payments system to fulfil.
        
    3.  Not Met by Vault Core - this capability is not supported by Vault Core and will need to be implemented elsewhere, for example Business Reporting which would need to be implemented on a data warehouse or similar that is fed from Vault Core’s event stream.
        
    
3.  For each capability that is either partially or fully met by Vault Core, assess the degree of complexity in implementing this capability. This should be a t-shirt size estimate of complexity applying the following guidance:
    
    1.  None - this means the capability is fully met by Vault Core out of the box with minimal or no specific configuration.
        
    2.  Low - only minimal configuration of the platform is required. For example, Restriction Set Definitions or Processing Groups need to be set up, or a Product Library Smart Contract can be deployed without modification.
        
    3.  Medium - a Product Library Smart Contract will need to be deployed with significant amendments or a simple product implemented from scratch as a Smart Contract.
        
    4.  High - a complex Smart Contract needs to be built from scratch, for example where an existing legacy core product behaviour needs to be replicated exactly on Vault Core.
        
    
4.  For all capabilities, a description of how the capability is being met and any external dependencies on other components needed to meet the end to end capability. This should be a record of the thought processes and high level solution design that was undertaken to arrive at the overall assessment of the capability and will act as a reference for future phases to feed into subsequent designs.
    

The output of this exercise will be used to drive the overall target architecture design and can also be used as input into planning the total cost of the programme. It is also the key input to the Buy / Build / Borrow analysis which will determine how capabilities that are partially or not met by Vault Core will be fully met by the end to end solution.

**Common Pitfalls**

1.  *Definition of inputs needs to be clear* - if the boundaries of a given capability are not clear then it will be hard to make a clear assessment of the degree to which it is met by Vault Core. For example, interest accrual can be an operational process on the core platform but will also feed into finance reporting. The scope of what is meant by that capability within the overall capability model should be clear so nothing is missed.  
    
2.  *The target against which the solution is being evaluated needs to be clear* - a programme may be aiming to migrate an existing core but also launch new products or features, and may need to compromise on an overall strategic vision in order to deliver in the shorter term. It is important to bound the exercise to a defined functional scope.
    
3.  *Getting lost in detail* - the inputs to the exercise will be high level capabilities and pragmatic assumptions should be made around the specific functional requirements which they may encompass in order to determine functional fit.
    
4.  *Utilise each platform based on its core design* - Vault Core and any surrounding platforms should be used in the way intended. Caution should be taken to ensure that Vault Core is not being used to implement the features it was not designed to support.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Vault Core Capability Gap Analysis. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.