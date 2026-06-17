---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/event_execution"
title: "Event Execution"
scraped_at: "2026-06-17T05:25:35.653Z"
images: 0
---

# Event Execution

## [](#purpose "Copy link to heading")Purpose

Dependent on the scope and size of a particular change event it may be necessary to review and validate existing service and support procedures, amend them or define completely new procedures from scratch.

Service Procedures inform stakeholder parties involved in the monitoring, operation and maintenance of a service, system or product, of items such as SLOs and SLAs relating to the service, normal operating parameters and importantly, the necessary steps to be taken and the communication channels to be used if and when exceptional or error events occur.

The Service Procedures Manual (SPM) should be a living and freely available reference guide that can be used by \[internal\] business stakeholders and critically Level 1, 2 and 3 support functions. Arguably, the purpose of an SPM should extend to \[external\] end users providing them with the information as to how to flag and raise issues as they occur.

The goal of this activity is firstly to ensure that the Service Procedures Manual accurately reflects the effect of the change being implemented. These procedures will be tested as part of the Model Office Testing activity.

Moreover, the purpose of the activity and the document should be to describe the operational procedures to be followed in relation to how to monitor the system, what to observe, what to respond to (events, notifications, states or metrics) and how.

Within Logging, Monitoring, Alerting, Observability Assurance it will have been assured that documentation has been produced that describes what healthy and unhealthy operation of the system looks like. Stakeholders (in particular L1 and L2 members of the support organisation) will have been given training into the meaning and interpretation of the observability data as well as other aspects of the change event during Stakeholder Training. In this activity, we ensure that the operational processes that need to be in place to monitor the service are documented and similarly, for when an unhealthy state is observed, documented procedures are in place that describe the steps that should be taken to mitigate/remediate in the event of error.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Production Readiness: Readiness Checks and Go/No Go](/delivery-framework/latest/EN/delivery_workstream/production_readiness/readiness_check_go_no_go)
    

## [](#guidance "Copy link to heading")Guidance

Successful execution of the go live event will be influenced by the completion of the activities that precede it. If all of the required stakeholders have been mobilised, communications have been prepared and a plan as has been documented (which includes unhappy path process e.g. roll-back or roll-forward process) then execution is far more likely to succeed. When there is an issue during the execution, with sufficient planning, recovery from or mitigation of the issue will be more likely to be dealt with in a composed manner.

If and when issues do occur, it is good practice to log these as this will provide insight to future production readiness plans. Holding a \`Retrospective' or \`Lessons Learned' debrief after the event including relevant stakeholders in the value chain is also recommended.

Additionally, it is strongly recommended that a dress rehearsal be performed ahead of a go live event. This should be included as a step in the Production Readiness Plan. The extent of this dress rehearsal may be influenced by the complexity of the event itself and whether the release is seen as a regular standard release or something more extraordinary.

Even where a go live event is seen as a low risk regular occurrence, it is still recommended that what-if scenarios be considered; they may be documented or run through as a paper-based rather than practical exercise, and from time-to-time a more practical exercise should be conducted to simulate an issue with the go live event to test unhappy paths.

Failure to do such an exercise, or complacency in the execution of a go live event can result in issues being exaggerated if and when they occur which may result in bigger impact to end users than was necessary.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Core Service Low level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.