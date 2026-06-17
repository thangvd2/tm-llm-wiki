---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/architecture/high_level_architecture_assessment"
title: "High Level Architecture Assessment"
scraped_at: "2026-06-17T05:24:29.771Z"
images: 0
---

# High Level Architecture Assessment

## [](#purpose "Copy link to heading")Purpose

This is the first architectural activity that is generally undertaken in a core banking transformation initiative, often before the programme has kicked off. It forms a key part of the scoping stage, feeding into the overall roadmap planning and high level costing and informing the subsequent planning activities and more detailed architectural reviews and designs.

The intention of the activity is to provide a bird’s eye view of the client’s as-is application landscape and form a preliminary view of the high level target architecture and transition states. As such it is a bringing together of the activities covered in:

-   [As-Is Architecture Discovery](/delivery-framework/latest/EN/delivery_workstream/architecture/as_is_architecture_discovery)
    
-   To-Be Architecture Design
    
-   [Transition State Architecture Design](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture)
    

It should be sufficiently detailed enough to develop a spine of a plan, assess overall programme feasibility and develop a high level view of the likely cost envelope. The outputs from this activity feed into [Program Definition](/delivery-framework/latest/EN/delivery_workstream/governance/programme_definition) and [Delivery & Phasing Plan](/delivery-framework/latest/EN/delivery_workstream/governance/delivery_and_phasing_plan) when the programme mobilises and will form the basis of subsequent more detailed architectural discovery and design activities.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Business: [Product & Transition Roadmap](/delivery-framework/latest/EN/delivery_workstream/business/product_and_transition)
    

Outputs: - High Level Architecture Assessment Report

## [](#guidance "Copy link to heading")Guidance

The High Level Architecture Assessment is a starting point for many other activities. Aim to complete a first iteration that can be shared, reviewed and refined. You should make sure to:

1.  Define a target architecture and key transition states.
    
2.  Make and document necessary assumptions.
    

error

Make sure to not get lost in the detail at this stage. This is a high level assessment that will likely generate a number of questions. Document the assumptions at this stage, knowing that some may not prove true, accepting that not everything can be validated at this stage.

### [](#content_and_focus "Copy link to heading")Content and focus

Identify systems and integrations within the core domain (for example payments, front office channel servicing, finance reporting) based on volume and business criticality. This is not an exhaustive survey of all processes and niche systems that support marginal processes or edge cases. Also, concentrate on applications providing material business capabilities, rather than middleware. Where a logical application is composed of smaller sub-components, the larger logical application should be represented at this stage. Finer detail is important for delivery; but is filled in at a later stage.

### [](#presentation "Copy link to heading")Presentation

The High Level Architecture Assessment is as much a communication tool for key programme stakeholders as it is a piece of analysis and design work to feed subsequent design activities.

1.  Clearly communicate the salient or key aspects of the design for easy consumption.
    
2.  Call out critical constraints and decisions.
    
3.  Highlight any risks or areas of uncertainty that will make a material difference to the shape of the solution, likely costs or timescales.
    

The activities that together form the High Level Architectural Assessment are:

 
| Components | Description |
| --- | --- |
| 
High level As-Is Architecture Survey

 | 

A view of the existing core and the surrounding systems that it supports. Shows key processes and applications providing functional capabilities. Highlights the important interactions between these systems and the business capabilities they support. Provides an early view of and feeds into the Activity: As-Is Architecture Discovery.

 |
| 

Technology Strategy Review

 | 

Reviews the technology strategy for applications immediately adjacent to the core systems. The strategy for the core systems will be driven by the core replacement programme itself. Adjacent systems such as General Ledger or Digital Banking applications will have their own strategic roadmaps - there may be in-flight programmes uplifting these areas. Understand the scope and delivery of these plans so the overall core transformation roadmap is aligned with them, and any interim tactical integrations can be identified and agreed.

 |
| 

Target Architecture Blueprint

 | 

A high level definition of the target state where legacy applications have been fully replaced by strategic alternatives. It reflects a position where the overall business case for the transformation programme has been met and the legacy estate has been fully decommissioned. It should also reflect the outcomes of other strategic initiatives identified in the Technology Strategy Review above. The target state may only be delivered at the end of a multi-year programme during which time many other things could change so by its nature it may be somewhat speculative and act as a \`\`north star'' to guide the strategic direction of the programme rather than a well defined target state to aim at. However, care should still be taken to bound the scope of the extent of the transformation under consideration, for example if the core aim of the programme is to replace the savings and deposits core, that should be the focus of the target state, even if the new core is also being considered as the eventual target for lending.

 |
| 

Architectural Transition State Overview

 | 

This exercise takes the High level As-Is Architecture Survey and Target Architecture Blueprint, in combination with the [Product & Transition Roadmap](/delivery-framework/latest/EN/delivery_workstream/business/product_and_transition), to construct a series of high level architectural transition states. The emphasis is on high level, with a focus on key business processes and applications which support business capabilities rather than middleware. Transition states depicted should normally correspond to the phases in the [Product & Transition Roadmap](/delivery-framework/latest/EN/delivery_workstream/business/product_and_transition). If these states are not meaningfully different in terms of architecture, or if within a phase there are more then one significant architectural states then these can be drawn out within the Architectural Transition State Overview. This overview should also call out the key mechanisms introduced to manage coexistence of legacy and new cores and any functional or operational compromises that the transition states incur or any associated technical or delivery risks. These should be recorded in the Architectural Decision Log. The output of this exercise provides an early view of and feeds into the [Transition State Architecture Design](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture).

 |
| 

Hosting Decisions and Cloud Maturity Assessment

 | 

Defines and documents key decisions or assumptions around hosting of the new applications being introduced into the landscape, in particular Vault Core. Example questions include: - Will Vault Core be run on a SaaS or bank hosted basis? - If bank hosted, will it be public cloud or private? - Which Cloud Service Provider will be used? Consider disaster recovery, specifically will an out of region secondary instance be required to support cross region failover? The same considerations need to be applied to other new applications in the target landscape. An assessment of the bank’s cloud maturity should be made to establish how much foundational work needs to be done to establish a cloud operating model and set of curated cloud services prior to any application build.

 |
| 

Provisional Architectural Decisions

 | 

A list of the key architectural decisions that inform the target state definition should be created, along with an indication of degree of stakeholder buy-in and a statement of whether this is a ratified position or a defender position that will require further consideration in the design stage. This log should form the basis of the programme decision log - see [Design Authority](/delivery-framework/latest/EN/delivery_workstream/governance/design_authority) for further details.

 |

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.