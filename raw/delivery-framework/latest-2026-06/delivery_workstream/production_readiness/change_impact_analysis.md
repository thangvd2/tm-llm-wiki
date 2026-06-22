---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/change_impact_analysis"
title: "Change Impact Analysis"
scraped_at: "2026-06-17T16:04:00.284Z"
images: 0
---

# Change Impact Analysis

## [](#purpose "Copy link to heading")Purpose

With any change event affecting the production ecosystem of an organisation it is critical that an impact assessment be made in relation to operations, business and technology, their systems and processes. The intent is to identify who will be affected, how they will be affected and the extent to which they will be affected.

Once the \`blast radius' of the change is understood we are then able to develop an informed plan to ensure that all stakeholders in the value chain are prepared to both perform and then accept the change, both in the immediate aftermath of the event and then into BAU.

The activity gives those preparing for the change event an opportunity to consider happy path and unhappy path scenarios that may occur, formulate the risk and consider necessary mitigation steps in the readiness plan.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Migration: [Migration Event Business Impact Analysis](/delivery-framework/latest/EN/delivery_workstream/migration/business_readiness)
    
2.  Integration: Integration Build & Test
    
3.  Vault Core Config: Smart Contract Build & Test
    
4.  Vault Core Config: Product Code Release Packaging
    
5.  Infrastructure: [Operational Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/operational_architecture)
    

## [](#guidance "Copy link to heading")Guidance

\`Beware the unintended consequence'. Even a small, seemingly insignificant change can result in significant problems for an organisation if not managed well. If we make assumptions that a change is so small as to warrant only minimal due diligence such that we ignore the impact assessment, we may ignore the possibility that, for example, a downstream system is reliant on upstream data at a critical time that may be delayed by the event resulting in business, customer or regulatory issues.

It is possible to also make assumptions along the lines of \`the change will not affect the database' when in fact \`the chance of any negative impact on the database is minimal'. The difference is subtle, but whereas neither may require us to plan to have a DBA on stand-by during the change event window, the latter may mean that in the rare and unexpected occurrence of a database issue our preparation may have meant that the DBA team was informed that the event is happening and an escalation contact point was documented.

### [](#event_lifecycle "Copy link to heading")Event Lifecycle

It is also important to consider the full lifecycle of the change event when considering who might be impacted and how.

1.  Pre-event:
    
    -   The purpose of the activity is not to determine what testing, for example, needs to be performed prior to the event however it should consider who might need to be informed of what is changing and when in order that they can make their own informed decisions about any testing they may need to take to be ready.
        
    -   Prior to the event, affected teams in the value chain may have to make changes of their own to deal with any backwards incompatibility being introduced; users, for example a clients branch staff, may need to be trained before the introduction of a new interface or banking product; customers and regulators may need to be informed if there is some material change to legal terms and conditions.
        
    
2.  Event Execution:
    
    -   During an event we need to consider who needs to be directly involved (users actively engaged in the event or directly affected by it), who needs to be passively involved (downstream users for whom impact is unlikely) and who needs to be on stand-by should some unhappy path scenario play out. Where the event is a Vault Core major upgrade for example, Thought Machine provide an optional Hypercare Service to provide additional support around the event execution period.
        
    -   Change Events may also not be \`point-in-time' such as in the example of a migration. During event execution in this case, customer service agents and branch staff may need to be informed as there could be interim business and operational processes to follow or different processes for different sets of customers.
        
    
3.  Post-event:
    
    -   After execution of the change event, who is required to determine if the change event has been a success? What assurances do they need to provide, how and when do they need to provide the assurance, and on what basis e.g. how they were expected to be impacted?
        
    -   If there were to be any issues, is there a different set of stakeholders who might need to be engaged to manage any recovery of the situation?
        
    -   Once the event is complete, who are the teams who now need to own the change in production in a BAU state, to monitor and maintain it going forward? To what extent does this change event affect their operations?
        
    

### [](#log_and_re_use_historical_change_events_as_guides "Copy link to heading")Log and re-use historical change events as guides

Where possible, it is sensible to use historical events as a guide to your impact assessment based on similarities in this change event to those that have gone before. It is not efficient to be continuously re-inventing the wheel. Do not assume however that what has happened in the past will exactly replicate what will happen in the future. While one change event may notionally be the same as another, could something such as the time of execution introduce new risk that was not applicable during previous executions, for example you now have customers in a different timezone.

In order to be informed by such historical events it is implicit that there is detailed record and that after each event there is a feedback loop to keep this relevant and up-to-date.

### [](#impact_v_likelihood "Copy link to heading")Impact v Likelihood

While the focus of this activity has been impact, it is important to consider likelihood as a factor in each assessment. Without it, even the smallest change might result in the mobilisation of a complete organisation \`just-in-case'. As per the example above, it is still important to identify stakeholders, processes and systems that could be affected however unlikely, in order that conscious decisions can be made about the readiness plan which is less risky than ignoring them completely. If a conscious decision is made that the impact to a given stakeholder is significantly low and unlikely then we are still aware of the possibility that in the worst case these are stakeholders may need to be addressed during or post execution of the change event.

This transparency also makes it easier in the future to challenge that historical decision and decide it’s applicability to future impact assessments.

### [](#timing_and_external_events "Copy link to heading")Timing and External Events

When considering impact consider the timing of the event in relation to regular, extraordinary or external events. Conducting an event over month end may result in different risks than doing this at some other time. The same may apply to a weekend event versus a working day. Whereas during the latter more people will be available with less consideration for contingency planning, business operations may be more affected.

The impact of external events such as Black Friday and the period around these times should also be considered, as should school and public holidays, where end user usage may be higher/lower and stakeholder availability may also be affected.

If an event is planned for any such period then extra precautions should be taken account of in the Production Readiness Plan.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Core Service Low level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.