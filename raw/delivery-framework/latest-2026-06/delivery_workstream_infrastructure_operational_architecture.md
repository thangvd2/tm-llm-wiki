---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/operational_architecture"
title: "Operational Architecture"
scraped_at: "2026-06-17T05:24:05.142Z"
images: 0
---

# Operational Architecture

## [](#purpose "Copy link to heading")Purpose

IT operations architecture is concerned with the management and execution of activities that support the IT services and infrastructure. It encompasses the organisation, processes, tools, and technologies that ensure the core banking platform runs efficiently and effectively.

Operational architectures are typically informed by governance frameworks like ITIL (IT Infrastructure Library), or described by industry standards such as ISO 20000.

The scope of this activity includes designing and implementing operational processes, workflows, monitoring and management tools, and governance mechanisms. It also covers incident management, change management, capacity planning, disaster recovery, and service management. The goal of which is to maintain operational resilience and continuity in the face of disruption.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

[Programme Enablement](/delivery-framework/latest/EN/delivery_workstream/enablement)

[Policy Impact Assessment](/delivery-framework/latest/EN/delivery_workstream/infrastructure/policy_impact_assesment)

[Volumetrics Analysis](/delivery-framework/latest/EN/delivery_workstream/infrastructure/volumetric_analysis)

[Security Design](/delivery-framework/latest/EN/delivery_workstream/infrastructure/security_design)

[Non-Functional Requirements Definition](/delivery-framework/latest/EN/delivery_workstream/infrastructure/non_functional_requirements_definition)

[IT Process Wiki - The ITIL® Wiki](https://wiki.en.it-processmaps.com/index.php/Main_Page)

## [](#guidance "Copy link to heading")Guidance

Thought Machine’s Client Services Team the following services to clients:

**Production Go-live Review:**

-   Run books in place to ensure troubleshooting of common or known issues
    
-   Observability Stack installed and available
    
-   Documentation accessible to organisation and support functions
    
-   Common error handling well documented and understood in organisation
    
-   Change process and release cadence defined
    

**Observability Review:**

-   Ensure all dashboards in place and reviewed with the team
    
-   Observability and common journeys documented and well understood
    
-   Alerts and Monitoring in place
    
-   Infrastructure observability, ensuring if this is impact from CSP or on-premise service this can be identified
    

**Hosting Cost Analysis:**

-   Ensure component SKU are appropriate for the target environment
    
-   Advise on sizing and resilience configurations of deployed infrastructure across target environments
    
-   Guidance on tooling; For example, the best use of Thought Machine Hibernator tooling to minimise running costs in lower environments
    
-   *ITIL -* The IT Infrastructure Library (ITIL) is an IT service management framework that outlines best practices for delivering IT services. It should be seen as very much an iterative process, and teams should periodically review the structures put in place to make sure they continue to be effective in the face of changing business imperatives, regulatory, threat, and IT landscapes:
    
-   *Supplier management -* Contracts must be well understood to ensure any services provided by a vendor meet your business objectives.
    
-   *Service Levels -* Agreements with internal and external IT support providers and external suppliers must be in place before go-live. These can be in the form of operational-level agreements (OLAs) that define the responsibilities of individual teams) that underpin broader Service Level Agreements (SLAs).
    
-   *Business Continuity -* Define recovery point and recovery time objectives for different types of incidents. This includes designing for high availability as well as planning for (and more importantly, testing) disaster recovery. This is discussed in more detail in the Resilience Design activity.
    
-   *Security management -* Proactively planning what steps should be taken in the event of a security related incident.
    
-   *Problem and Incident management -* An incident represents any situation in which your service is disrupted. To minimise downtime, steps should be put in place to resolve anticipated issues as quickly as possible. This is an iterative process, through analysing previous incidents you can begin actively monitoring for and mitigating against them.
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.