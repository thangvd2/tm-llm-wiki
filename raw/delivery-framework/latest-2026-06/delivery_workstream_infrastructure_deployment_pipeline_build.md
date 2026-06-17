---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/deployment_pipeline_build"
title: "Deployment Pipeline Build"
scraped_at: "2026-06-17T05:24:24.682Z"
images: 0
---

# Deployment Pipeline Build

## [](#purpose "Copy link to heading")Purpose

The team may choose to build separate pipelines for different work streams and orchestrate releases; For example, using dedicated solutions to manage infrastructure, deploy and configure the bank core, and also to deploy related integration (and other) components. Conversely, it may make more sense to combine the deliverables from each of your teams into one and manage your deployments using a single platform.

There are a number of common requirements that should be considered irrespective of the approach.

**Version Control Integration:** Ensure seamless integration with version control systems like Git to track changes and trigger pipeline executions automatically upon code commits.

**Artefact Management:** Implement artefact management to store and manage build artifacts and dependencies efficiently. This ensures consistency and reproducibility across deployments.

**Environment Configuration:** Define configuration management practices to manage environment-specific configurations and ensure consistency between development, testing, staging, and production environments.

**Automated Testing:** Integrate automated testing into the pipeline to validate code changes thoroughly before deployment, including unit tests, integration tests, and end-to-end tests.

**Security and Compliance:** Incorporate security measures such as code scanning, vulnerability assessments, and compliance checks to ensure the safety and integrity of deployed applications.

**Monitoring and Logging:** Implement monitoring and logging mechanisms to track pipeline executions, detect failures, and troubleshoot issues quickly.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Deployment Pipeline Design](/delivery-framework/latest/EN/delivery_workstream/infrastructure/deployment_pipeline_design)
    

## [](#guidance "Copy link to heading")Guidance

Thought Machine strongly recommends that IT Teams build iteratively and start to prototype as early as possible. This represents the best way to identify and resolve issues related to the design and the build of the target core banking infrastructure. The intention is to mitigate as far as possible against the risk of late discovery of problems and the corresponding impact on project costs and ability to keep to agreed milestones.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.