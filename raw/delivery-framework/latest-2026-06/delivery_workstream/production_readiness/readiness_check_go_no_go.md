---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/readiness_check_go_no_go"
title: "Readiness Checks and Go/No Go"
scraped_at: "2026-06-17T16:04:22.231Z"
images: 0
---

# Readiness Checks and Go/No Go

## [](#purpose "Copy link to heading")Purpose

Purpose This activity represents the final checkpoint prior to the go live event and the last opportunity to delay or pause the event. All key stakeholder groups should be represented and all prerequisite activities and outcomes should be assessed. It may be a case that not all prerequisites have been met and therefore it is important that appropriately empowered individuals are involved in order to make a risk based decision on whether to go or not to go with the production go live event.

Failure to conduct this activity in some fashion could result in the go live event happening while a significant prerequisite for it has not been completed. Naturally, the scope of what this could be will vary dramatically based on the event itself. A check at this stage might expose that all critical test cases have not passed, that downstream systems are not ready or that key personnel are not in place to either execute or monitor the event.

The final output will either be:

-   A go decision whereby the event will proceed as per the plan and any detailed runbook that has been created;
    
-   A no go decision whereby the event is not executed as per the plan.
    
    -   This may be a temporary delay whereby a time is specified to remediate any outstanding prerequisites before a rescheduled go/no go checkpoint;
        
    -   Or an indefinite delay whereby the plan is subject to a review and subsequent rescheduling or abandonment.
        
    

In either case, appropriate communications would be sent in accordance with the communications plan to all affected stakeholders.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Service Procedures & Support](/delivery-framework/latest/EN/delivery_workstream/production_readiness/service_procedures)
    
2.  Production Readiness: [Model Office Testing](/delivery-framework/latest/EN/delivery_workstream/production_readiness/model_office_testing)
    
3.  Testing: Full System Testing
    
4.  Testing: Operational Acceptance Testing
    
5.  Testing: User Acceptance Testing
    
6.  Testing: Non-Functional Testing
    

## [](#guidance "Copy link to heading")Guidance

Depending on the specifics of the go live event, the client may execute the activity as a formal, minuted meeting or they may utilise in-house change management software to log approvals. Whatever the forum, the client should ensure there is transparency around the decision.

For non-standard or exceptional go-live events, it is critical to ensure that the affected stakeholder groups are reviewed. Those that are deemed to be affected should all be included as part of the decision making process. This may include stakeholder groups not commonly engaged in the sign off activity for standard or regular go-live events. Where all stakeholders do not have an equal say in the decision, it is vital that there be a single, accountable individual who is empowered to make a risk based decision to execute the go-live event or not. This may be the programme sponsor or product owner.

Any part of the client organisation may be a participant in the decision making process depending on the specifics of the go-live event. Potentially this group may include third parties such as regulators or software vendors. It is important to make it transparent who the stakeholders are who can have input and what level of say they have e.g. do they hold a veto. Decision-making stakeholder groups may include:

-   Technology:
    
    -   Software Engineering.
        
    -   Cyber Security.
        
    -   Infrastructure.
        
    
-   Support:
    
    -   Level 1, Level 2, Level 3.
        
    -   IT support and networks.
        
    
-   Business:
    
    -   Banking product owners.
        
    -   Risk and Compliance
        
    
-   Operations:
    
    -   Customer Facing.
        
    -   Back and middle office.
        
    
-   Finance
    
-   Legal
    

Inputs to the decision from predecessor activities will include but are not limited to:

-   Evidence that service procedures have been defined or updated and that in the event of an issue, the client’s resources know the actions they need to take e.g. where to escalate and what information to provide.
    
-   Evidence that Model Bank Testing has been completed and the service procedures have been validated.
    
-   Evidence that communications have been sent or prepared in accordance with the communications plan.
    
-   Evidence that stakeholders on whom then successful execution of the go-live event are dependent are mobilised and ready to perform the steps required in the readiness plan.
    
-   Test results from Operational Acceptance Testing (OAT), User Acceptance Testing (UAT) and Non-Functional Testing (NFT) activities.
    
    -   Note, this may not be evidence that every test has passed. Where there are test failures or testing gaps, it is important for the impact and/or likelihood of those items to be presented and evaluated. A bug likely to result in a P1/P2 incident is likely to result in a no-go decision, however a bug that would have minimal impact and be unlikely to occur except for in very specific scenarios will likely be risk accepted and not affect the go decision.
        
    -   Where such risks are accepted, fixes to any such bugs should be added to the relevant teams backlog and as applicable, associated with a date by which a resolution should be achieved.
        
    

Ultimately the goal of the activity is to have a clear and transparent decision made as to whether to proceed with the go-live event or not. This decision must be auditable. It must consider the risks associated with both executing and not executing the event and the potential benefits resulting from a successful go-live event.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.