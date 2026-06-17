---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/low_level_req"
title: "Low-Level Requirements Gathering"
scraped_at: "2026-06-17T05:24:53.797Z"
images: 0
---

# Low-Level Requirements Gathering

## [](#purpose "Copy link to heading")Purpose

Moving from the high-level requirements we have gathered, low-level requirements offer detailed guidance on what needs to be built and help reduce ambiguity. They also help to ensure that the final build aligns closely with stakeholders' expectations and business objectives.

The output of this activity would mainly be high-quality user stories, worked samples, accounting models and overall product specifications. Well-written and concise user stories play a crucial role in clearly articulating requirements and ensure that development efforts are focused on delivering value to the customer.

Linking user stories with a unique identifier(ID) to specific business objectives/user journeys or identified gaps provides essential information and assurance for smart contract developers. Traceability of the user story to impact assessments or solution-design documents enhances the confidence of the developers and allow them to build and test various business logic scenarios in alignment with scope.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Transition State Architecture Design](/delivery-framework/latest/EN/delivery_workstream/architecture/transition_state_architecture)  
    
2.  [Product Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements)
    
3.  [Process Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/business/process_requirements)
    
4.  [Vault Capability Gap Analysis](/delivery-framework/latest/EN/delivery_workstream/architecture/gap_analysis)
    

**Outputs**

Vault Capabilities Mapping, the result of which lists all the capabilities that Vault can fulfil - which can be added to Vault and which have to be developed outside of Vault. This can be used as input to the Activity: Buy - Build - Borrow Analysis.

## [](#guidance "Copy link to heading")Guidance

**High-Level Approach**

With the Product Scope document defined as per the Activity: Product Requirements Gathering , we have a backlog of items to perform the low-level requirement gathering.

To that end, the following steps are to be completed for each sprint:

1.  **Prioritise requirements from the Product Scope for build**
    
    1.  Based on the priority agreed in product scoping, plan for the list of items to be included in the sprint.
        
    2.  Identify the dependencies amongst the sprint items, and assign priority to each user story. Start with items that unblock other work or provide the most value.
        
    
2.  **Iterate and refine requirements (refer to the section below on writing a user story)**
    
    1.  Identify impacted stakeholders (e.g. operations, finance, teller etc.) and the downstream systems.
        
    2.  Engage with stakeholders, including product owners and business analysts to gather inputs. Hold refinement discussions to formulate detailed requirements for each user story identified during product scoping.
        
    3.  Develop calculation models that show expected results based on defined business logic. These can be embedded or referenced as artefacts within user stories.
        
    4.  Analyse and determine the impact of new features that are in scope for build on any previously developed features or functionality.
        
    5.  Check if postings are affected. If so, define new postings or update existing postings in the accounting sheet.
        
    
3.  **Create user stories in Jira or another similar tool**
    
    1.  Depending on the project’s agreed workflow, the statuses in Jira can reflect the progress of each story/issue/task.
        
    2.  Ensure accountable stakeholders e.g. business stakeholders, and subject matter experts(SMEs) have been identified and their written sign-off has been secured on stories/requirements.
        
    

chat\_bubble

**Three amigos session** a. Before starting development, a walkthrough session should be conducted to clarify user story details and ensure alignment on acceptance criteria. The goal is to make sure all stakeholders, including business analysts(BAs) and developers/client engineers(CEs), are on the same page.

**Three amigos session plan:**

**Objective:**

-   The primary goal is to clarify user story details.
    
-   Ensure a shared understanding of the acceptance criteria.
    
-   Align business analysts(BAs), developers/CEs, and other stakeholders.
    

**Participants:**

-   Business analysts(BAs): Responsible for ensuring business requirements are clear.
    
-   Technical leads: Offer insights into technical feasibility and constraints.
    
-   Architect: Ensures architectural alignment and consistency with the overall design.
    
-   Development team: Gather insights and raise potential concerns.
    
-   Engineering manager: Oversee the alignment of resources and timelines.
    
-   Product owners(POs): Validate that user stories align with business needs and priorities.
    
-   Quality Assurance Engineers(QAs): Ensure all edge cases have been considered in the acceptance criteria and user stories.
    

**Agenda:**

-   Overview of the user story presented by BAs or POs.
    
-   Clarification of technical constraints or challenges with input from the architect and technical leads.
    
-   Review of acceptance criteria: Ensure they are specific, measurable, achievable, relevant, and time-bound (SMART).
    
-   Discussion of dependencies and required resources.
    
-   Resolution of any ambiguities and finalisation of understanding.
    
-   Documentation of key takeaways and update of the backlog or sprint board accordingly.
    

**Outcome:**

-   Clear and actionable user stories.
    
-   Agreement on acceptance criteria.
    
-   Shared understanding among all stakeholders, reducing rework and delays during development.
    

5.  Sprint planning session
    
    1.  Sprint planning is held at the start of each sprint.
        
    2.  The product owner/BAs presents prioritised backlog items, where the walkthrough is completed as per the previous steps.
        
    3.  The CEs/developers estimate effort for each task.
        
    4.  The team selects items based on capacity and sprint goals.
        
    5.  Selected tasks are broken into smaller, manageable tasks.
        
    6.  Aligns team on goals, expectations, and deliverables for the sprint.
        
    
6.  Sprint demo and retro
    
    1.  A sprint demo (or sprint review) is a meeting at the end of a sprint where the team showcases the work they’ve completed. It’s an opportunity to demonstrate new functionality, gather feedback, and ensure alignment with stakeholders
        
    2.  A sprint retrospective (retro) is a meeting held at the end of each sprint where the team reflects on what went well, what didn’t, and how they can improve in the next sprint. It’s a key element of Agile methodology, helping teams continuously improve
        
    
7.  Update documentation on an iterative basis
    
    1.  BAs should use standardised templates to baseline the requirements for each sprint. For example, if there are multiple user stories created to deliver a particular feature like monthly/fortnightly/weekly billing, all these should be standardised as a single feature document using the above template. At the end of the build phase, all these standardised feature documents will be merged using utilities available in-house to produce the final product specification.
        
    
8.  Repeat the above steps for subsequent sprints.
    

**Writing a user story**

1.  Use the standard format.
    
    1.  As a \[type of user\], I want \[some goal\] so that \[some reason\]
        
    
2.  Create a details section or process flow.
    
3.  Include acceptance criteria.
    
    1.  Acceptance criteria should be testable and specific.
        
    2.  Consider edge cases.
        
    
4.  Attach samples (calculations using spreadsheets) to illustrate the business logic
    
5.  Check if any form of smart contract notification is required.
    
    1.  Document a list of the metadata required.
        
    2.  Provide any sample values for the metadata fields.
        
    
6.  Follow the template for standardising the low-level requirement gathering.
    

 
| Status | Description |
| --- | --- |
| 
To Do

 | 

The BA creates functional story in Jira.

 |
| 

In Refinement

 | 

Mainly for the BA to track the stories being discussed in refinement sessions.

 |
| 

Ready for Development

 | 

The BA can mark stories to ready for development during/before sprint start.

 |
| 

In Development

 | 

Developers can mark the story as in development once development starts.

 |
| 

Ready for QA

 | 

Once development is completed and deployed in target testing environment, the testing team can be assigned to check functionality. Once completed, assign story to the business team/PO for review.

 |
| 

In Review

 | 

The business team/PO will check and review functionality. Obtain end user sign off.

 |
| 

Done/Completed

 | 

Once sign off is received, the business team can mark story as done.

 |

**Common pitfalls**

1.  Acceptance criteria within the user story and the sample illustrations are not aligned.
    
2.  User stories not addressing the edge cases.
    
    1.  It is important to cover the prioritised and most material edge cases backed by evidence/data, i.e. highest impact / problematic scenarios rather than something that might be immaterial or rarely occurs.
        
    
3.  Not being flexible enough to cater for changing requirements e.g. changes to accounting standards.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Low-Level Requirements Gathering. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.