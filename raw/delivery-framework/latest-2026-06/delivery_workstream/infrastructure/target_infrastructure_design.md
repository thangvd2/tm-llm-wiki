---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/target_infrastructure_design"
title: "Target Infrastructure Design"
scraped_at: "2026-06-17T16:03:01.225Z"
images: 0
---

# Target Infrastructure Design

## [](#purpose "Copy link to heading")Purpose

The outcome of this activity should be a well thought out core banking infrastructure design that meets the cost, performance, security, and scalability requirements gathered during the discovery phase.

The team should reference these requirements in order to justify the various design decisions including why certain hardware and/or services were selected, and patterns adopted. Describe the overall architecture, hardware specifications, network configurations, security measures, and deployment strategies.

Without proper consideration of these topics, there is a risk that problems will be encountered later, and they will be harder and more expensive to solve than they would have been at the beginning.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Target Infrastructure Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/platform_gap_analysis)
    

## [](#guidance "Copy link to heading")Guidance

Thought Machine’s Client Services Team can contribute to this activity by undertaking:

-   *An Infrastructure Review -*
    
-   Recommendations for the environment based on objectives, current environment and goals on growth.
    
-   Configuration tuning for specific services, database, Kafka to ensure performance levels are in-line with expectations.
    
-   Reference documentation for setup and environment configuration that becomes a living document that is shared between client and Thought Machine.
    
-   *A Right-Sizing Environment Review -*
    
-   Ensure environment is right sized for current and future volume projections
    
-   Looking at utilisation to understand if some services could be scaled
    
-   Overview of performance of individual services and if there is some optimisation that could be handled for these batch size, Kafka consumer lag issues and handling of volume based on deployed infrastructure
    

A deployment strategy should seek to avoid these common mistakes:

-   *Reference Architectures -* Leverage established reference architectures and industry best practices tailored to the banking domain to guide the design process. These proven design patterns, guidelines, and principles can accelerate the design process and mitigate risks. However, they may not fully address specific business requirements or constraints, and will require customisation.
    
-   *Iterative Design and Prototyping -* Adopt an iterative approach to design, create prototypes or proof-of-concepts to validate design decisions, gather feedback, and refine the design for the infrastructure incrementally. This enables early validation of design assumptions, identification of potential issues, and incorporation of stakeholder feedback.
    
-   *Avoid -* Designing an overly complex architecture with unnecessary features or components can lead to increased maintenance overhead, performance issues, and scalability challenges. Neglecting non-functional requirements such as security, performance, and compliance can result in design flaws and vulnerabilities that compromise system integrity and reliability. Failing to consider integration requirements with existing systems, third-party services, and external partners can lead to interoperability issues and project delays during implementation. Designing an architecture that fails to anticipate future technology trends, regulatory changes, and business growth can result in costly redesign efforts and hinder long-term scalability and competitiveness.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Target Infrastructure Architecture. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.