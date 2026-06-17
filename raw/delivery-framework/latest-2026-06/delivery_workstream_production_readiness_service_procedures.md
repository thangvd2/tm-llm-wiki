---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/service_procedures"
title: "Service Procedures & Support"
scraped_at: "2026-06-17T05:25:30.626Z"
images: 0
---

# Service Procedures & Support

## [](#purpose "Copy link to heading")Purpose

Dependent on the scope and size of a particular change event it may be necessary to review and validate existing service and support procedures, amend them or define completely new procedures from scratch.

Service Procedures inform stakeholder parties involved in the monitoring, operation and maintenance of a service, system or product, of items such as SLOs and SLAs relating to the service, normal operating parameters and importantly, the necessary steps to be taken and the communication channels to be used if and when exceptional or error events occur.

The Service Procedures Manual (SPM) should be a living and freely available reference guide that can be used by **internal** business stakeholders and critically Level 1, 2 and 3 support functions. Arguably, the purpose of an SPM should extend to **external** end users providing them with the information as to how to flag and raise issues as they occur.

The goal of this activity is firstly to ensure that the Service Procedures Manual accurately reflects the effect of the change being implemented. These procedures will be tested as part of the Model Office Testing activity.

Moreover, the purpose of the activity and the document should be to describe the operational procedures to be followed in relation to how to monitor the system, what to observe, what to respond to (events, notifications, states or metrics) and how.

Within Activity: [Logging](/delivery-framework/latest/EN/delivery_workstream/production_readiness/logging_monitoring) Assurance it will have been assured that documentation has been produced that describes what healthy and unhealthy operation of the system looks like. Stakeholders (in particular L1 and L2 members of the support organisation) will have been given training into the meaning and interpretation of the observability data as well as other aspects of the change event during Activity: \[Stakeholder Training\]. In this activity, we ensure that the operational processes that need to be in place to monitor the service are documented and similarly, for when an unhealthy state is observed, documented procedures are in place that describe the steps that should be taken to mitigate/remediate in the event of error.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Stakeholder Training](/delivery-framework/latest/EN/delivery_workstream/production_readiness/stakeholder_training)
    
2.  Infrastructure: [Operational Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/operational_architecture)
    

## [](#guidance "Copy link to heading")Guidance

While SPM is used generically here, it would be recommended to have multiple documents that cover different levels of operation and may be relevant to different end users. The client should consider the best approach to carve up the content of the document so that when required, individuals or teams can access the information in an efficient manner.

Agreement on the high level governance procedures, service reviews and contractual obligations may not be required to be reviewed often and then only need to be available to a select few individuals.

On the other hand, L1 and L2 teams will need access to information such as support and escalation processes in the event of an error and must be able to access this information promptly. They may also need information pertinent to the classification of an issue (in terms of impact and/or priority) so as to know what support processes to follow.

In a given application ecosystem, teams may be responsible for many different systems each with their own unique procedures for support and it is essential that these procedures are properly categorised and indexed.

Especially where a new service or application is being released as part of the production event, or where a service or application is being put into a Production environment for the first time, it is imperative to ensure that the procedures that may have existed before (for other applications) are fit for purpose and that they are updated wherever necessary. For example, where a new vendor application is being deployed, escalation paths may now require \[access to\] new tools and understanding of new SLOs/SLAs.

At a low level, one that is more applicable to change events that introduce new services (operational or technical) to existing environments, it is important to document for those supporting the service, what a healthy and unhealthy state of the service is. A service that produced no output for an observed window of time could be interpreted as being in a failed state unless this was actually expected behaviour. In this case, the end users should be provided with adequate guidance for what to look for to determine a genuine failure, which might be the observation of a specific log file or receipt of a specific notification.

It should be the responsibility of those introducing the change to ensure that adequate logging, monitoring, alerting and observability is in place and then to inform through such services procedure runbooks how this information should be interpreted and responded to by those conducting the monitoring of the system. At any point in time, the L1 or L2 support person should be able to determine if a service is healthy by referring to the service procedure document and where it is not, there should be clear guidance on what steps to take. These steps may be investigative steps, steps to mitigate/remediate, or steps to escalate (which should include detail about which of the metrics used to observe the issue need to be collected and shared)

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Core Service Low level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.