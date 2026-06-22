---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/model_office_testing"
title: "Model Office Testing"
scraped_at: "2026-06-17T16:04:20.475Z"
images: 0
---

# Model Office Testing

## [](#purpose "Copy link to heading")Purpose

Model Office testing, with respect to Production Readiness, should not be focused on testing whether the solution meets the functional or non-functional requirements that were specified. This is not to say that adherence to these requirements would not form part of the readiness checks reviewed as part of the go/no go decision.

While the solution might be tested under production level load so as to simulate the performance expected, it is an assumption that such testing would have been completed as part of the Testing workstream. Further non-functional testing as part of a Model Office Test will be a validation of results already gathered.

The primary purpose of this activity is to ensure that once the go live event has been executed, teams in the end-to-end value stream, and in particular those within the Level 1-N support organisation, are able to respond appropriately to expected and exceptional incidents that might realistically occur. The activity must evaluate whether the operational processes are in place, understood and can be followed such that in the event of an incident all appropriate action will be taken. The tests should also ensure that necessary data (logs, metrics etc.) is available and that access rights are set appropriately, for example enabling stakeholders to access tools to investigate or remediate the issue (read or extract logs, write and commit changes) or to channels to escalate the issue to internal or external teams as defined within the Service Procedures Manual.

Failure to adequately perform Model Bank Testing will greatly increase the risk that when an incident occurs in Production following the event, the lead time to resolution will breach SLAs/SLOs. The likelihood will also increase that the impact/severity of the incident will be inflated as a result of what might have been a simple to resolve, BAU type incident, not being identified as such and steps taken to mitigate not being followed.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Stakeholder Training](/delivery-framework/latest/EN/delivery_workstream/production_readiness/stakeholder_training)
    

## [](#guidance "Copy link to heading")Guidance

In order to perform effective Model Office Tests, consider the following:

-   **Simulate a Stress Situation**
    
    -   In all likelihood, the processes being tested will be invoked in situations where there is significant pressure. Ensure that tests represent as close to possible similar crisis situations to stress-test decision-making, incident response, and business continuity plans under failure conditions.
        
    
-   **Clear Objectives**
    
    -   Define specific goals: functionality validation, risk response, operational readiness, user behaviour, etc.
        
    
-   **Use Realistic Scenarios**
    
    -   Use real-world data flows, customer journeys, and operational events. Include edge cases.
        
    
-   **Cross Functional Teams**
    
    -   Involve operations, IT, compliance, customer support, business units and any other Stakeholders in the value chain. This validates inter-team handoffs.
        
    
-   **End-to-End Coverage**
    
    -   Include upstream/downstream systems, integrations, data flows and reporting impacts where necessary.
        
    
-   **Time Boxing and Scripted Events**
    
    -   Simulate time pressure and decision-making under stress. Use injects (unexpected changes or failures).
        
    
-   **Customer Impact Simulation**
    
    -   Test real customer scenarios (e.g., loan approval, payment processing) under new conditions.
        
    
-   **Predefined Roles and Governance**
    
    -   Assign observers, facilitators, and responders. Establish escalation paths.
        
    
-   **Controlled Environment**
    
    -   Run in a sandbox that mirrors production as closely as possible. Ensure data privacy (anonymise real data if needed).
        
    
-   **Success Criteria and Metrics**
    
    -   Define KPIs: response time, error rate, handoff accuracy, customer outcome, compliance triggers.
        
    

At the conclusion of a Model Office Test consider follow up activities:

-   **Debrief and Lessons Learned**
    
    -   Document gaps, misunderstandings, system failures, or process weaknesses.
        
    
-   **Issue Tracking & Remediation**
    
    -   Feed learnings directly into defect management or change request workflows.
        
    
-   **Stakeholder Buy-In**
    
    -   Use outputs to gain executive sponsorship for readiness and resource alignment.
        
    
-   **Audit Trail**
    
    -   Maintain a full record for compliance reviews and governance.
        
    

Other best practices for implementation of effective Model Office Tests include:

-   Run **at least two rounds**: one early (pre-UAT), one closer to go-live.
    
-   Include **non-technical staff** (e.g., branch managers or call center leads) to validate usability and workflows.
    
-   Test **resilience scenarios**: data corruption, system lag, denial of access, or cyber compromise.
    
-   Document test scripts and **simulate regulatory interventions**, especially for mission-critical platforms.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support our clients in delivery of these activities. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.