---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes"
title: "Advanced deployment modes"
scraped_at: "2026-06-16T15:23:50.691Z"
images: 0
---

# Advanced deployment modes

Advanced deployment modes make it possible to deploy a Vault Core instance across multiple environments in a Blue-Green or Active-Passive fashion - and across regions for Active-Passive. These are in contrast to a standard deployment mode of running Vault Core in a single environment (a single Kubernetes namespace) in a single region.

The two patterns appear similar and their implemention is similar, but they cater for very different use cases and have subtle but important differences that you should consider.

Here, you can get a summary of the available advanced deployment modes and links to their dedicated guides.

## [](#blue_green "Copy link to heading")Blue-Green

Blue-Green is a deployment strategy that provides additional control during Vault Core upgrades. This allows for gradual testing and faster rollbacks, both of which reduce deployment risk. In this mode, databases and Kafka are shared between the two Vault Core environments. This implies a single region. The installations can be on the same or different Kubernetes clusters.

The main use cases that this mode enable are:

-   Testing of a new Minor/Patch version of Vault Core in a Blue-Green style
    
-   Migrating a Vault Core installation from one Kubernetes cluster to another with zero downtime
    

[Read more about Blue-Green mode here](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/blue_green)

## [](#active_passive "Copy link to heading")Active-Passive

Active-Passive is a failover strategy for improving the resiliency of a system in the event of an environment outage. In the context of Vault Core, this is relevant for tolerating regional Cloud Service Provider outages, whereas for zonal outages there are better solutions.

The Active-Passive mode enables running two Vault Core installations with the database in the passive environment being a read-only, standby database replicating from the active environment. In this mode, the Kafka clusters may be standalone or the passive one could replicate from the active one.

The main use cases of Active-Passive are:

-   Multi-region Disaster Recovery: You can perform a failover to another region in the case of a regional outage with a better recovery time objective (RTO) and recovery point objective (RPO) than a snapshot restoration approach
    
-   Serve API read operations from a location closer to some of the Vault Core API clients
    

[Read more about Active-Passive mode here](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive)

## [](#multiple_physical_databases "Copy link to heading")Multiple physical databases

From Vault Core 5.5, clients can choose to distribute the logical databases required by the system across multiple physical database clusters.

Clients should engage with Thought Machine if they wish to consider this advanced deployment mode.

[Read more about using multiple physical databases here](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases)

[

menu\_book Blue-Green mode



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/blue_green)

[

menu\_book Active-Passive mode



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive)

[

menu\_book Multiple physical databases



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases)

[

menu\_book Sharing secrets



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/sharing_secrets)

chat\_bubble

Sharing secrets

Shared secrets access is relevant for both [Blue-Green](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/blue_green) and [Active-Passive](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive) advanced deployment modes.

In order for both the target and source clusters to access the shared/replicated resources they must have access to the same set of secrets. [Read more about sharing secrets here](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/sharing_secrets).