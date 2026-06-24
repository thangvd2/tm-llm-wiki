---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/business/process_requirements"
title: "Process Requirements Gathering"
scraped_at: "2026-06-17T16:02:32.521Z"
images: 0
---

# Process Requirements Gathering

## [](#purpose "Copy link to heading")Purpose

As mentioned previously, a bank is made up of multiple businesses which in turn are made up of various processes. These business processes are key in ensuring the running and success of the bank.

Processes can be automated, manual, application driven, employee driven or even customer driven. They can have many touch points across teams and systems. They all need to work together to ensure that the bank functions as expected. Any changes however, in most circumstances, will have an impact on this bank’s functional flow and therefore need to be considered carefully before being adopted.

A modernisation programme, by nature, will introduce changes to existing processes and introduce new processes that will need to work with existing ones. The outcome of this activity is to ensure that the needs of the new and updated processes are well understood as they are a key aspect in ensuring the overall success of the modernisation programme.

Whilst the As-Is Process Discovery activity details what processes exist today and what they do. This will change from a modernisation exercise perspective and this activity will expose what is actually required to keep the bank running and what changes/additions are required to move over to the transition state. The two use cases need to be considered as a whole in order to fully understand where any potential process overlaps or issues may lie. This is in order to avoid eg. processes becoming orphaned, unknown system integration points, duplication of processes, etc.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Business: [As-Is Process Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_process_discovery)
    
2.  Business: [Product Requirements Gathering](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements)
    

## [](#guidance "Copy link to heading")Guidance

Business processes all differ both in size and function, depending on the business area they serve. A modernisation programme will impact how existing processes work and they will need to welcome or make way for new processes.

It is therefore extremely important to understand the high level future state and to emphasise the existing processes that are essential for the bank to function.

The way the existing process is implemented can also change due to modernisation and therefore it is crucial for the requirements of the process to be documented from both a functional and non-functional perspective and not focus on how it is to be implemented, unless of course that information is absolutely pertinent for that process to function effectively.

Given the enormity of the task, it is important to prioritise the process requirements that are likely to interact and integrate directly with Vault Core.

There is a real threat in this activity of suffering from analysis paralysis. The outcome of the As-Is Process Discovery is a key input into this activity from a modernisation perspective, however it may not always be necessary to wait for this outcome to be complete before starting on the current activity. A balance needs to be struck to avoid falling down a rabbit hole and not proceeding quickly.

This is even more material if the strategic approach is to fail fast and iterate due to competitive dynamics and customer trends. In this case speed and action are key requirements that will need to be prioritised.

### [](#how_to_perform_the_process_requirements_gathering_activity "Copy link to heading")How to perform the Process Requirements Gathering activity

1.  Perform analysis on the As-Is Process Discovery activity output, expose the essential processes that are needed for the bank to function.
    
2.  Detail which new processes will need to be introduced for the bank to function in the target state. Much of this information will come from analysis of the Product Requirements Gathering activity along with the analysis of the As-Is Process Discovery output where it will expose where the gaps lie.
    
3.  From the above analysis, highlight existing processes that are potential candidates for change in the target state. Detail also the teams and applications that could be affected.
    
4.  For the new processes, consider if there is any need for a new application or a new team to manage/maintain the new process.
    
5.  Highlight which processes/tasks within a process are considered to be \`\`on the hot path'' ie. have a key non-functional time element attached and expose the dependencies on either side.
    
6.  For the above ensure the following information is documented:
    
    -   Detailed description of what the process does, what it is for and how it is intended to be used
        
    -   Functional specification of how the process is expected to work, including any business rules
        
    -   Non-functional requirements eg. Service level expectations, performance and resilience needs
        
    -   Stakeholders (affected teams and applications)
        
    -   Process management requirements and expectations including maintenance and internal controls
        
    -   Flow chart showing the start and end points of a process, including what will trigger the process and what determines the process is complete - along with all the steps in-between, the order in which they occur and system/application/process handover and transition options. Swim lanes work best here when it comes to visualising a process that crosses multiple systems and teams. Taking inspiration from BPMN is a good way to achieve this outcome.
        
    -   Length of time the process is expected to take including all known options. Some processes will not have service level expectations however having an understanding of how long a process is likely to take including minimum and maximum spans of time ensures that the design of the process and the post go-live expectations are clear. Some processes may need to be open-ended to await external data ie. fraud checks however others may have a known maximum amount of time that they can take ie. to ensure regulatory compliance. Understanding these are key to ensuring the smooth running of processes in the transition state and allow for automated alerts, if a process is falling close to not meeting its timespan expectation, providing the necessary information for process support management.
        
    -   Success criteria of the process
        
    -   Process output storage requirements, where relevant
        
    -   Geography/location requirements, where relevant
        
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support our clients in delivery of these activities. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.