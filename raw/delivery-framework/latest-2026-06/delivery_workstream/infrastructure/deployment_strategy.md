---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/deployment_strategy"
title: "Deployment Strategy"
scraped_at: "2026-06-17T16:02:58.068Z"
images: 0
---

# Deployment Strategy

## [](#purpose "Copy link to heading")Purpose

Defining a deployment strategy ensures a structured approach to deploying core banking infrastructure and the services that will run on it. The objective is to streamline the deployment process, minimise downtime, and ensure consistency across deployments. Establish clear guidelines for deploying the solution across various environments, from development through to production.

The outputs from this activity include detailed documentation outlining deployment procedures, environment configurations, version control mechanisms, and rollback strategies. Additionally, consider the use of automated deployment scripts and tooling where appropriate.

Without a defined strategy a number of issues could arise. Deployments may be inconsistent between environments, leading to system instability and downtime. Troubleshooting becomes difficult, and the project’s progress may be impeded by manual errors.

Automation ensures consistency by executing predefined procedures accurately every time. It encourages a \`\`shift left'' mentality, where testing and validation are integrated earlier into the development lifecycle. This helps reduce the likelihood of errors slipping through to production, increasing the quality of the overall delivery.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

[Target Infrastructure Architecture](/delivery-framework/latest/EN/delivery_workstream/infrastructure/target_infrastructure_architecture)

## [](#guidance "Copy link to heading")Guidance

Define the scope of the automation and be pragmatic. Prioritise the tasks that need automating, rather than simply setting out to automate everything. Do not try to design an automation pipeline at the beginning of the delivery, and instead start with a manual deployment methodology. In this way, engineers can learn which parts of the process are more complex and error prone and automated these bottlenecks first will maximise value from the start.

Vault Core supports deployment automation as a first class citizen. Thought Machine provides vaultctl, which is a command-line tool for Vault installation, upgrade, configuration and querying of Vault component statuses. Thought Machine also provide the TMComponent Operator which is used to install and configure Vault Core components, following the pattern of Kubernetes Operators installing native resources. These tools can be used in conjunction with CI/CD pipelines to install, upgrade and configure Vault and query the status of Vault components.

More information about the TMComponent Operator can be found in the Documentation Hub:

-   [TMComponent Operator User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide)
    

A deployment strategy should seek to avoid these common mistakes:

-   *Insufficient Testing Protocols -* Neglecting comprehensive testing, including integration tests, performance tests, and end-to-end tests can lead to deployment failures and degraded application performance. Implement automated testing as part of the deployment pipeline to catch issues early.
    
-   *Reliance on Manual Intervention -* Relying on manual interventions during deployments introduces delays, errors, and inconsistencies. Aim for fully automated deployments with minimal human intervention to ensure reliability and efficiency.
    
-   *Overlooking Security Concerns -* Ignoring security best practices, such as least privilege access, encryption, and vulnerability scanning, can expose deployments to cyber threats and compliance risks. Incorporate security measures into the deployment process from the outset.
    
-   *Lack of Monitoring and Logging -* Failing to implement monitoring and logging for deployed applications and infrastructure hampers visibility into performance, health, and security incidents. Integrate monitoring and logging solutions to proactively detect and address issues.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Deployment Strategy. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.