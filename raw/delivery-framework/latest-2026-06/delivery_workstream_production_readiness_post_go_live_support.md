---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/post_go_live_support"
title: "Post Go-Live Support and BAU Handover"
scraped_at: "2026-06-17T05:25:37.354Z"
images: 0
---

# Post Go-Live Support and BAU Handover

## [](#purpose "Copy link to heading")Purpose

Formal handover of the deliverable, be it a new application, feature or process, follows on from the go-live event and any period of warranty offered by those responsible for the delivery. The critical dependency is that there is a team or function that can accept the change into the BAU/Run function of the organisation. That team/function may have its own handover checklist which will likely include being provided with documentation, additional access controls and artefacts like the Service Procedures Manual. A typical handover will also likely provide the receiving team with context and knowledge of the change, why it was implemented, it’s business function, why it was designed and built in the way it was.

The assumption should be that the BAU team taking ownership of the deliverable will have been involved in activities such as Model Office Testing and been part of Stakeholder Training.

A successful outcome of the exercise should be that the team who were responsible for the delivery of the change can step away and not be depended on to maintain or run whatever has changed in the future with the receiving team/function being able to operate autonomously of the delivery team. Ideally the BAU team are fully capable of investigating any issue that might arise and be equipped to identify the root cause of a problem, however mitigation may remain the responsibility of the delivery team thereafter, or until the delivery team themselves become part of the run/BAU function of the organisation. This may be dependent on the type of team accepting the change and whether, in the case of a software delivery, they are taking ownership of the underlying code (and maintenance of the code) or simply the operation and monitoring of the software in Production.

It is most likely that the delivery team will retain some, if not all ownership of the underlying code until closure of the phase or programme. In the case of a production event coinciding with the closure of a programme, the handover event may require additional steps relating to code, other source material and even the handover of resources.

There may also be provision within the service procedures manual for escalation back to the delivery team to provide level 2 or likely level 3 support.

Failure to complete handover is likely to have a long term effect on the capacity and velocity of the delivery team as they will maintain responsibility for monitoring and maintaining changes released to production as well as developing new capabilities.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Event Execution](/delivery-framework/latest/EN/delivery_workstream/production_readiness/event_execution)
    

## [](#guidance "Copy link to heading")Guidance

Whilst this is referenced as a standalone activity, handover should not be looked at as a single event; ensuring a successful handover to BAU is a culmination of the completion of all predecessor activities and will be more likely if there has been strong adherence to the activities described in the Production Readiness workstream

However, it is still work considering the following in isolation when planning for handover and to ensure the newly delivered software, process or financial products can be effectively supported into the future.

### [](#summary_of_key_criteria "Copy link to heading")Summary of key criteria

At a high level, the BAU team must ensure the following criteria is met.

-   All critical defects are resolved or mitigated.
    
-   Operational documentation (e.g. SPMs, support guides) is complete.
    
-   Monitoring and alerting systems are live and tested.
    
-   Knowledge transfer to BAU teams is complete.
    
-   Formal sign-off by BAU leadership has been gathered.
    

### [](#formal_documentation "Copy link to heading")Formal Documentation

Ensure there is a formal handover document or group of documents that covers:

-   **System Overview**
    
    -   Architecture, integrations, data flows.
        
    
-   **Support Model**
    
    -   L1/L2/L3 contacts, escalation paths.
        
    
-   **Operational Procedures**
    
    -   Runbooks, Standard Operating Procedures (SOPs), FAQs.
        
    
-   **Known Issues & Workarounds**
    
    -   Tracked and mitigated with owners.
        
    
-   **Monitoring & Alerts**
    
    -   What’s being monitored, thresholds, alert flows.
        
    
-   **Service Levels**
    
    -   Performance expectations and error tolerances.
        
    
-   **Maintenance Schedule**
    
    -   Patches, backups, DR procedures.
        
    
-   **Compliance & Risk Considerations**
    
    -   Logs, controls, data protection steps.
        
    
-   **Access & Permissions**
    
    -   Role matrices, admin credentials, entitlement models.
        
    

### [](#hypercare "Copy link to heading")Hypercare

Post Go-Live consider a period of 'Hypercare' (typically 1-4 weeks)

-   **Key elements of a Hypercare period might consist of:**
    
    -   Daily stand-ups or war rooms for incident tracking.
        
    -   Enhanced monitoring and triage support—often 24/7 during early days.
        
    -   Direct communication channels (e.g., Teams/Slack bridge, hotline).
        
    -   Prioritised defect triage and rollback protocols.
        
    -   Close tracking of business KPIs and SLAs.
        
    
-   **Support Team Composition:**
    
    -   Blend of project team (SMEs, developers) and BAU staff to build knowledge.
        
    -   Presence of business users to validate real-world behaviour.
        
    

### [](#success_criteria "Copy link to heading")Success Criteria

Monitor both technical stability and business impact:

-   **Technical**
    
    -   Example: Error rate, response time, uptime, batch success/failures.
        
    
-   **Business**
    
    -   Example: Customer complaints, transaction volumes, NPS, SLA breaches.
        
    
-   **Operational**
    
    -   Example: Number of support tickets, time to resolve, training completion.
        
    

### [](#knowledge_transfer_completion "Copy link to heading")Knowledge Transfer Completion

Ensure that BAU teams understand, not just receive documentation.

-   **Techniques:**
    
    -   Run knowledge transfer sessions and record them.
        
    -   Use shadowing and reverse-shadowing (BAU leads project activities).
        
    -   Conduct Model Office Tests.
        
    -   Require BAU sign-off for each knowledge area.
        
    

### [](#formal_sign_off "Copy link to heading")Formal Sign Off

Ensure that there is formal sign off to ensure the change event delivers what is intended and the receiving BAU team have what is required to assume support.

-   **Governance & Sign-Off**
    
    -   Hold a **Go-Live Review Board** (Project + Ops + Risk) to evaluate readiness for full handover.
        
    -   Use a formal **handover checklist** signed by BAU leadership and system owners.
        
    -   Retain a record for audit and compliance.
        
    

### [](#embed_operational_governance "Copy link to heading")Embed Operational Governance

Ensure new software is fully integrated into:

-   **Service Desk (ITSM)**
    
    -   Ticketing categories, escalation paths, support SLAs.
        
    
-   **Change Management**
    
    -   Registered in Configuration Management Database (CMDB)/configuration register.
        
    
-   **Incident & Problem Management**
    
    -   Linked to root cause workflows.
        
    
-   **Security Monitoring & Backup Policies**
    
    -   Ensure these are defined and tested.
        
    

### [](#regulatory_considerations "Copy link to heading")Regulatory Considerations

It is also worth considering if the nature of the change warrants any consideration of regulatory requirements.

-   In regulated banking environments, regulators may expect a post-implementation review or lessons learned report, especially for material changes.
    
-   Maintain an audit trail of handover and support artefacts for internal or external review.
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.