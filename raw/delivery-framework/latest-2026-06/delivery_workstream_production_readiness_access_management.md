---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/access_management"
title: "Access Management"
scraped_at: "2026-06-17T05:25:28.952Z"
images: 0
---

# Access Management

## [](#purpose "Copy link to heading")Purpose

It is essential that prior to go live, any stakeholders in the value chain are granted the necessary access to tools, interfaces, data and documentation.

This activity should check and process any access requirements for those involved in the execution of the change event or post event in BAU. Without necessary access, an individual or team may not when required have access to particular data such as logs or customer data, or access to processes and procedures if these are in documents or knowledge bases over which access permissions are applied.

Equally this could apply to downstream applications needing to consume from specific Kafka streams resulting in end-to-end failures that otherwise passed in lower environments where privileges had been granted.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Infrastructure: [Security Design](/delivery-framework/latest/EN/delivery_workstream/infrastructure/security_design)
    

## [](#guidance "Copy link to heading")Guidance

### [](#documentation "Copy link to heading")Documentation

-   Ensure documents are stored in a repository or drive that can be accessed by the team that requires them. Ensure the documents are structured logically and/or indexed so that they can be easily found.
    
    -   Avoid adding permissions to individual documents or saving to local (Cloud) drives and federating permissions making it harder to navigate to the document.
        
    
-   Some documents, for example spreadsheets, that can be accessed simultaneously by multiple users allow users with Edit permissions to filter data in the sheet. Users with read-only permissions cannot always amend the filters applied resulting in not being able to access vital information when required e.g. steps in an incident run book.
    
    -   Ensure write/edit permissions are federated and control global filtering where it might be an issue.
        
    

### [](#operational_systems "Copy link to heading")Operational Systems

-   It is important to ensure that users are able to access operational systems e.g. Customer Service applications or Account Operations dashboards in the Production environment. It is not unusual for access to need to be granted independently for Production systems; access to lower environments for individuals e.g. Dev or UAT, does not automatically translate into access being provisioned in Production environments which need to be more stringently controlled. If this cannot be tested prior to the Production event then backed into the runbook should be some level of smoke test and pre-defined set of actions to be taken if necessary access is not granted.
    
-   Where new features of an application are being released, while access the system itself might not be an issue, if granular level permissions restrict access to specific features then in similar vein, these permissions will need to be applied and tested for those users who need access. Again, in lower environments it is not uncommon for users to be granted access to features they would not have in Production or ‘super admins’ to be set up for testing purposes. As a result, such permission configuration may not be propagated as part of the release and it is important to ensure the correct permissions are applied.
    

### [](#integrations "Copy link to heading")Integrations

-   Similarly, it is critical to ensure that service accounts etc. are created for Production to ensure integrated components and services can communicate.
    

### [](#observability_and_support "Copy link to heading")Observability and Support

-   From a support perspective, not only is it necessary to ensure individuals can access system dashboards to view metrics, it needs to be ensured that selected resources have the ability to access log files and execute backend commands to extract data or execute services. It may also be necessary to export logs and metrics, especially where third parties are involved; in which case it needs to be checked that wider bank security such as firewalls do not interfere with being able to transmit files to their required destination.
    
-   Such actions may not be able to be taken by any one user under BAU conditions; in which case break glass access needs to be tested to ensure when invoked, users with break glass permissions are able to access the data they need, execute commands and potentially update configuration in the environment.
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.