---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/production_readiness/operational_systems_assurance"
title: "Operational Systems Assurance"
scraped_at: "2026-06-17T16:04:11.731Z"
images: 0
---

# Operational Systems Assurance

## [](#purpose "Copy link to heading")Purpose

Depending on the scope of the production event, operations staff on the front line or back office may be required to be able to conduct new or updated operations as a result. It is critical that prior to execution of the event, all of the interfaces that have been created are tested such that operations resources can perform the actions necessary to conduct their roles and support downstream users/customers.

For example, where a new interest bearing product is rolled out, operations users, specifically customer service agents or branch staff will need a mechanism to be able to create an account for a customer or interrogate one to review the financial details behind it, in the event of a customer query. The operational users may also require an interface to be able to make minor corrections or manual overrides to a customer account, such as manually reversing a transaction pending fraud enquiry, removing or applying a fee, or making good will payments.

Such operations may not always occur on the front line, similar operations may occur in the back office too. It may be necessary that interfaces be available that allow ops staff to pause/run/re-run jobs, perform manual corrections or execute reports.

Depending on the change it is essential to assure that the interfaces that are required are available to the operations staff to perform their duties as part of BAU or in response to issues, particularly those duties with material visible impact to customer accounts.

Failure to ensure that such operational system capability is in place can result in ad hoc queries needing to be generated ‘on the fly’ to analyse issues and in the worst case, manual updates needing to be applied to customer accounts or other data records either via API calls or database scripts which may be more costly, higher risk and prone to error. The affect of not being able to respond efficiently to direct customer queries of complaints could also have reputational impact for the client.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Production Readiness: [Production Readiness Plan](/delivery-framework/latest/EN/delivery_workstream/production_readiness/production_readiness_plan)
    
2.  Infrastructure: [Operational Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/operational_architecture)
    

## [](#guidance "Copy link to heading")Guidance

The activity itself should not be concerned with building the operational system interfaces, however it needs to ensure that adequate interfaces are in place in order for operations staff to perform maintenance and analysis activities in an appropriate and controlled manner post the production event. These operations should be possible within the constraints of applicable process and policies, for example a need for 4-eyes checks on custom adjustments. Appropriate logging and audit should be in place (see Production Readiness: Logging, Monitoring, Alerting, Observability Assurance) and permissions and access control should be set up appropriately.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.