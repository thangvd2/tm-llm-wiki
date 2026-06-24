---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/logging_monitoring"
title: "Logging, Monitoring, Alerting, Observability Assurance"
scraped_at: "2026-06-17T16:04:13.349Z"
images: 0
---

# Logging, Monitoring, Alerting, Observability Assurance

## [](#purpose "Copy link to heading")Purpose

With most change events that result in software changes in Production, new logs will be produced, services will be created that require monitoring for health and notifications and alerts will be produced as a result of processes completing, warnings being identified or errors occurring.

The purpose of this activity is to ensure that the ability to observe the production environment is not compromised and that the result of the change event is incorporated into the Observability of the ecosystem.

Failure to ensure this could result in poor health of a new service going unobserved and resulting in functional or non-functional impact within the environment.

Ensuring that services are being observed systematically is an important step, however it will also then be critical to ensure that stakeholders are trained to interpret and understand the information that is being provided to them.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Production Readiness Plan](/delivery-framework/latest/EN/delivery_workstream/production_readiness/production_readiness_plan)
    
2.  Infrastructure: [Operational Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/operational_architecture)
    

## [](#guidance "Copy link to heading")Guidance

The more comprehensive the documentation, the more likely it is that an issue will be dealt with efficiently with minimal impact, or, that the potential for an issue will be detected and managed before it occurs.

The clients support organisation will likely be responsible for monitoring the health of multiple applications each containing many independent services, all of which have their own unique behaviours. For each service, the support organisation needs to be able to determine what a healthy state looks like, what warning signs exist to preempt that an issue is about to occur, and if and when it does, what the data available to them means in order to diagnose and treat. The support organisation also needs to know how they will be alerted to an issue, preferably in a proactive and systematic way, rather than in response to a customer escalation.

### [](#log_files "Copy link to heading")Log files

A critical part of being able to effectively monitor the health of an application or service and triage issues lays in analysis of the log files. These need to be able to be accessed and understood for each service that generates them. Where log files need to be reviewed by a support organisation it is important that log files are documented, in particular any fatal, error or warning messages that may be contained within the logs.

If there are known or likely scenarios that could result in an issue for the service, then informing the support organisation what to look for can be incredibly important in determining root cause quickly, or indeed ruling out a suspected cause.

### [](#dashboards "Copy link to heading")Dashboards

Dashboards enable a realtime visualisation of the health of a system or set of services. In order for a dashboard to be valuable, the support organisation must understand the purpose of the dashboard, what specifically it is monitoring and for each element within the dashboard, what normal and exceptional operation looks like.

Thought Machine provide by way of example a list of Grafana Dashboards shipped with each release of Vault Core (See Grafana dashboards included in the Observability Stack). The client may compliment this documentation with additional descriptions of what each dashboard is expected to show during normal operation. For example, during a clients scheduled End of Day, it may be expected to see spikes in certain graphs whereas during normal operation such a spike would be seen as a warning sign.

When deploying a new service, the support organisation should be provided with information that includes:

-   The specific dashboard(s) that indicate health of the service (and implicitly which to check if an issue with the service is suspected).
    
-   A description of the dashboard purpose and what it is displaying.
    
-   What each element of the dashboard is expected to show under normal operation (or under expected conditions such as End of Day).
    
    -   It may be normal for a service to show no activity for periods of time and not be indicative that the service is down.
        
    
-   What any spike, increase or decrease in a particular graph or count could indicate.
    
    -   A change from normal operation may not mean there is an issue, however, it is important to be able to instruct the support organisation where to investigate to identify the root cause of the change being observed.
        
    
-   Links to underlying technical information about the service being monitored.
    
    -   If an issue is suspected, traceability to the technical information about the service (or runbooks and service procedure documents) will enable to support organisation to efficiently deal with the incident or escalate to SMEs.
        
    

It is however unlikely that a member of the support organisation will be physically watching a dashboard and monitoring except where prior notice is given to observe it, for example during the execution of a production change event. As such, building alerts and notifications that trigger as a result of this same information is critical. These will then point the support organisation to the dashboards where the health of the service can be observed.

### [](#alerts_and_notifications "Copy link to heading")Alerts and Notifications

Any alert or notification configured must be meaningful and easy to understand. A calculated decision must also be taken for what and when to send alerts and notifications in order that they do not come to be seen as spam and then get ignored. It is important to consider the difference between a notification and an alert and consider the different mechanisms by which they may be communicated.

-   Notifications - primarily for information only for the receiving party that an expected event is occurring were no action is required. Examples may include:
    
    -   A service is scheduled to be shut down and has been shut down as per the schedule.
        
    -   A metric is increasing/decreasing at a particular rate but is currently within an acceptable range.
        
    -   A process has started/completed.
        
    -   A warning message has been generated by a service.
        
    
-   Alerts - where an unexpected event has been identified and requires action to be taken by the receiving party. Examples may include:
    
    -   A service has shut down unexpectedly.
        
    -   A metric has increased/decreased outside of an acceptable range or it changing at an alarming rate.
        
    -   A process has failed to start/complete at a scheduled time.
        
    -   An error message has been generated by a service or a message has been DLQ’d.
        
    

The alert or notification must provide the recipient with sufficient information to understand what service the notification relates to; why the notification has been generated; any action that needs to be taken and what dashboards or logs to be interrogated. Where this information is not in the notification itself, documentation must exist that can be looked up that provides the same details.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Core Service Low level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.