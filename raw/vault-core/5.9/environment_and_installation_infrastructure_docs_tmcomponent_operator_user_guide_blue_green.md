---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green"
title: "Blue-Green mode"
scraped_at: "2026-06-17T04:58:50.683Z"
images: 1
---

# Blue-Green mode

Bank-hosted

From Vault Core 5.3, clients can choose to manage Vault Core in Blue-Green deployment mode.

Blue-Green is a deployment strategy that provides additional control during Vault Core upgrades. This allows for gradual testing and faster rollbacks, both of which reduce deployment risk. In this mode, databases and Kafka are shared between the two Vault Core environments in a single region. The installations can be on the same or different Kubernetes clusters.

This advanced deployment mode allows you to create a second Vault Core environment, in the same region, that you have connected to the same data infrastructure (Kafka and database). In Blue-Green mode, one environment is initially passive - there are no background processes or active Kafka consumers, whilst the synchronous APIs are fully functional. This allows you to validate this environment before switching entirely to it. The asynchronous processing is paused to avoid interfering with the main active environment. You can run the passive environment on the same Kubernetes cluster by using a different namespace or you can use a different Kubernetes cluster.

The mode allows you to test changes to the Vault Core deployment and switch over to the new environment in a controlled way without service disruption. It also provides a faster rollback mechanism to the old environment without service disruption or data loss.

The main use cases for Blue-Green mode include:

-   Moving an existing Vault Core deployment to a new underlying infrastructure, such as a new Kubernetes cluster, with zero downtime
    
-   Moving an existing Vault Core deployment between Kubernetes namespaces in the same cluster
    
-   Testing new minor or patch versions of Vault Core in a Blue-Green way, as an alternative to the default approach to in-place upgrades within a single namespace
    

chat\_bubble

Vault Core microservices get updated in a rolling Blue-Green fashion with readiness gates, regardless if you use the default or this Vault Core Blue-Green deployment mode. Therefore, they are updated in a highly-available way. What the Blue-Green mode adds is the ability to treat the environment *as a whole* in a Blue-Green fashion. This leads to a more controlled and faster way to switch back and forth between the two installations which helps reduce upgrade or configuration update risks.

This mode does not support:

-   Different major versions of Vault Core between the two environments
    
-   Vault Core versions prior to 5.3 for either the passive environments or the active environments
    
-   Moving Vault Core to a different database instance or Kafka cluster
    

This guide goes through the steps to upgrade/reconfigure Vault Core in a Blue-Green fashion, and move Vault Core workloads from one Kubernetes cluster to another.

## [](#using_vault_core_in_blue_green_mode "Copy link to heading")Using Vault Core in Blue-Green mode

You can run Vault Core in a Blue-Green mode that comprises:

-   Your fully-functional live Vault Core environment (active environment)
    
-   An additional environment of Vault Core that runs alongside and uses the same database and Kafka as the active Vault Core environment (passive environment)
    

The active and passive environments do not have to reside in the same cluster. You can move Vault Core between Kubernetes clusters or between Kubernetes namespaces in the same cluster. In both cases, you must ensure that you have connected the two environments of Vault Core to the same database and Kafka.

This guide provides you with the workflow steps that you must follow to if you want to move Vault Core workloads between Kubernetes clusters.

### [](#running_a_vault_core_environment_in_passive_mode "Copy link to heading")Running a Vault Core environment in passive mode

You can run a passive environment of Vault Core on the same or a different Kubernetes cluster.

In passive mode, services that actively poll the database to create events and Kafka consumers are deployed to Kubernetes in a scaled-down state. The synchronous APIs are fully functional, while asynchronous processing is paused to avoid interfering with the main active environment.

This allows you to:

-   Check that the Vault Core pods are running
    
-   Confirm that connectivity to Kafka, the database, and the secret store is working as you expect
    
-   Make read and write synchronous API calls to confirm the health of the passive environment
    

### [](#using_a_passive_environment_of_vault_core_to_prepare_for_upgrades "Copy link to heading")Using a passive environment of Vault Core to prepare for upgrades

Having the ability to run a passive environment of Vault Core in this way also allows you to use this deployment mode to prepare for upgrades.

You can perform upgrades or other updates to Vault Core or underlying infrastructure by using the Blue-Green deployment mode to carry out the change using a variant of the blue/green pattern.

For example, clients can perform operational workflows with zero downtime and reduced risk, such as:

-   Moving Vault Core to a different underlying infrastructure, such as new Kubernetes cluster
    
-   Rebuilding infrastructure or upgrading clusters in an immutable way
    
-   Upgrading Vault Core (minor and patch versions only) in a controlled fashion, as an alternative to the default approach to an in-place upgrade
    

This allows you to prepare the desired state of Vault Core without affecting the live deployment. You can perform checks to confirm its health, and then make the environment active and transition live traffic without downtime.

### [](#using_a_different_namespace "Copy link to heading")Using a different namespace

Choosing to use a different namespace allows you to upgrade certain components in a highly-controlled fashion by creating multiple Vault Core environments as an alternative to the default approach to an in-place upgrade.

### [](#use_cases_for_blue_green_mode "Copy link to heading")Use cases for Blue-Green mode

There are several reasons why a Vault Core operator may want to use Blue-Green.

For example, if you want to complete any of the following activities whilst having more control over when life traffic may be affected:

-   Upgrade or test the version of immutable Kubernetes clusters
    
-   Upgrade or test the minor version or patch version of an immutable Vault Core environment
    
-   Upgrade and test the version of a service mesh or other cluster software
    
-   Perform other cluster maintenance activities or upgrades where an in-place upgrade is not desired
    
-   Roll back any of the activities in this list in a way faster than the steps themselves would take to revert
    

error

-   Thought Machine supports upgrading or changing one component between the two clusters at one time only. For example, if you wanted to upgrade or change the Kubernetes version and minor or patch version of Vault Core, you must complete these activities separately.
    
-   Thought Machine does not support moving between different major versions of Vault Core.
    

## [](#before_you_start "Copy link to heading")Before you start

### [](#prerequisites_for_blue_green "Copy link to heading")Prerequisites for Blue-Green

-   You must be using at least Vault Core 5.3.0
    
-   You must be familiar with Vault Core installation and upgrades using the TMComponent Operator. For more information, see [Installing Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide)
    

### [](#considerations_for_observability_and_retaining_metrics "Copy link to heading")Considerations for observability and retaining metrics

In the case of multiple Kubernetes clusters, this workflow does not migrate your observability metrics - the metrics remain split between the two clusters. This means that you would not retain metrics for the environment that you terminated, unless you implement a way to mitigate this.

In order to retain metrics, you could use the RemoteWrite functionality that is available. This allows you to write (send) Thought Machine metrics to a compatible system that you manage (the receiver), so that you can persist them.

To implement the RemoteWrite functionality, you must enable and configure the associated observability values in `values.yaml` before you install or upgrade Vault Core, as part of your observability component configuration.

The available values are:

-   `observability.cluster_prometheus.remote_write`
    
-   `observability.namespaced_prometheus.remote_write`
    

For more information, see the following guides and sections:

-   [Observability Stack Installation and User Guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack): prerequisite guidance about how to configure and install the Observability Stack
    
-   [Using RemoteWrite to write metrics to external storage](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#writing_metrics_to_external_storage): how to configure RemoteWrite
    
-   [Observability configuration in values.yaml](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#observability_configuration_in_values_yaml): descriptions and guidance for all observability values, including values associated with RemoteWrite
    

### [](#before_you_start_the_workflow "Copy link to heading")Before you start the workflow

Before you start the workflow, make sure that:

1.  The database instance for the source cluster is also available to the target cluster
    
2.  The Kafka instance for the source cluster is also available to the target cluster
    
3.  Secrets are available to both the source and target clusters
    

warning

-   Thought Machine supports upgrading or changing one component between the two clusters at one time only. For example, upgrading or changing the Kubernetes version or a Minor or Patch version of Vault Core.
    
-   Thought Machine does not support moving between different Major versions of Vault Core.
    

### [](#shared_database_access_for_clusters_for_blue_green "Copy link to heading")Shared database access for clusters for Blue-Green

This workflow for Blue-Green or moving Vault Core workloads across clusters requires that both environments are using a common database instance.

Check your `values.yaml` file and ensure that the database hosts setting has the same value for each cluster.

In the following example, the configuration setting for one cluster is `shared-db-instance.my.bank` and the other cluster should also use this value (this is an example value and different for your instance). Thought Machine expects that most clients use the same hostname for both clusters. If this matches your configuration, then you must use the same hostname and value for both clusters in your `values.yaml`.

info

If the hostnames differ between clusters, then you must complete an additional step to create a new secret when setting up secrets management. For more information on how to configure this correctly, see [Shared secrets access](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/shared_secrets_access).

### [](#shared_kafka_instance_for_clusters_for_blue_green "Copy link to heading")Shared Kafka instance for clusters for Blue-Green

Check your `values.yaml` file and ensure that the Kafka hosts setting has the same value for each Vault Core environment.

In the following example, the configuration setting for the Kafka client under `brokers:` contains the values for both clusters (these are example values and are different for your instance):

### [](#secrets_access_for_clusters_for_moving_vault_core_workloads "Copy link to heading")Secrets access for clusters for moving Vault Core workloads

If you are moving Vault Core workloads between Kubernetes clusters, then you need to ensure both environments have access to the same secrets. See [Shared secrets access](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/shared_secrets_access) for more information.

### [](#configuring_the_values_yaml_file_for_blue_green "Copy link to heading")Configuring the values.yaml file for Blue-Green

The process of installing Vault Core on the target cluster (or just a separate namespace) when moving workloads is almost identical to that for any other cluster. The difference is that the installation begins in passive mode. To achieve this, you must set the `common.mode.passive` value to `true` in the `values.yaml` file for the target cluster.

For example:

## [](#blue_green_and_moving_vault_core_workloads "Copy link to heading")Blue-Green and moving Vault Core workloads

Once your target cluster infrastructure is provisioned and validated, you are ready to move the Vault Core workloads. Here is a summary of the steps that you must follow:

1.  Install Vault Core in passive mode on the target cluster (without [finalising](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) the installation)
    
2.  Validate the Vault Core installation on the target cluster
    
3.  Switch Vault Core to active mode on the target cluster
    
4.  Migrate network ingress from the source cluster to the target cluster
    
5.  Switch Vault Core to passive mode on the source cluster
    

chat\_bubble

Thought Machine recommends that you do not keep both environments in Active mode for more than eight hours.

If you have not yet imported or updated your Grafana dashboards, see [Importing Vault dashboards into Grafana](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#importing_vault_dashboards_into_grafana) and [Configuring client-managed Grafana for use with Vault dashboards](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#configuring_client_managed_grafana_for_use_with_vault_dashboards).

You can configure the [Workload Migration dashboard](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#grafana_dashboards_included_in_the_observability_stack) with your source and target clusters to observe the progress of the cut-over.

![workload\_migration\_dashboard.png](_assets/workload_migration_dashboard.BzwpS10e_Zi_vaultcor.webp)

### [](#1_installing_vault_core_in_passive_mode_on_the_target_cluster "Copy link to heading")1\. Installing Vault Core in passive mode on the target cluster

The process of installing Vault Core on the target cluster is the same as with any other cluster, except that:

-   You must set the `common.mode.passive` flag to `true` in the `values.yaml` file.
    
-   You must not perform [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) on your Vault Core deployment.
    

#### [](#example_command "Copy link to heading")Example command:

error

You may have installed Vault Core with additional options. You MUST ensure that you provide the same additional options when you apply the updated `values.yaml` file to ensure that these configuration settings are the same.

### [](#2_validate_the_vault_core_installation_on_the_target_cluster "Copy link to heading")2\. Validate the Vault Core installation on the target cluster

Before you [activate the target cluster](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green#3_switch_vault_core_to_active_mode_on_the_target_cluster), you must validate the cluster installation configuration and functionality by canary testing the API.

An installation that is correctly configured should yield the same results on both the source and target clusters.

#### [](#example_commands "Copy link to heading")Example commands:

##### [](#get_accounts "Copy link to heading")Get Accounts:

##### [](#get_balances "Copy link to heading")Get Balances:

error

Canary testing of write traffic on the target cluster causes side effects on the source cluster.

### [](#3_switch_vault_core_to_active_mode_on_the_target_cluster "Copy link to heading")3\. Switch Vault Core to active mode on the target cluster

You can switch a cluster from passive mode to active mode by setting the `common.mode.passive` flag to `false` in the `values.yaml` file.

In order to apply the updated `values.yaml` file you must complete an in-place re-installation of your Vault Core environment using the same version that is already running.

As the re-installaton is installing the same version of Vault Core over the top of itself, it is not necessary to run the `init-operators` step.

#### [](#example_command_2 "Copy link to heading")Example command:

chat\_bubble

You may have installed Vault Core with additional options. You MUST ensure that you provide the same additional options when you apply the updated `values.yaml` file to ensure that these configuration settings are the same.

### [](#4_migrate_network_ingress_from_the_source_cluster_to_the_target_cluster "Copy link to heading")4\. Migrate network ingress from the source cluster to the target cluster

After you [activate the target cluster](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green#3_switch_vault_core_to_active_mode_on_the_target_cluster), you must migrate network ingress from the source cluster to the target cluster. The correct process that you should use to migrate network ingress is specific to your infrastructure.

### [](#5_switch_vault_core_to_passive_mode_on_the_source_cluster "Copy link to heading")5\. Switch Vault Core to passive mode on the source cluster

Once you have completed the steps to migrate network ingress to the target cluster you must deactivate the source cluster.

You can switch the source cluster from active mode to passive mode by setting the `common.mode.passive` flag to `true` in the `values.yaml` file.

In order to apply the updated `values.yaml` file you must complete an in-place re-installation of your Vault Core environment using the same version that is already running.

As the re-installaton is installing the same version of Vault Core over the top of itself, it is not necessary to run the `init-operators` step.

#### [](#example_command_3 "Copy link to heading")Example command:

chat\_bubble

You may have installed Vault Core with additional options. You MUST ensure that you provide the same additional options when you apply the updated `values.yaml` file to ensure that these configuration settings are the same.

## [](#upgrading_in_blue_green_mode "Copy link to heading")Upgrading in Blue-Green mode

You can use Blue-Green mode to carry out a Vault Core upgrade in a controlled way, without affecting the active environment.

However, you must take care when performing [finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) - in Blue-Green environments where the active and passive environments share a database, finalisation is prohibited in the passive environment. This prevents a passive instance from performing destructive changes that would impact the active (older) environment before it is properly decommissioned.

Before proceeding with the upgrade:

-   The starting state assumes Blue is the active environment, and Green is the newly installed passive environment.
    
-   You must have previously run the finalisation step for the Blue environment, as part of the standard process to install Vault Core. However, you **must not** have run the finalisation step for the Green environment.
    

Follow the steps for upgrading a Blue-Green deployment in the correct order:

1.  Make the Green environment the new active environment, and migrate ingress to this new environment.
    
2.  Verify that the new active environment is working as expected and a rollback is not required. If you need to roll back, you should do so before decommissioning the Blue environment.
    
3.  Decommission the Blue (old) environment.
    
4.  Finalise the Green (new active) environment.
    

error

You **must** decommission the old environment **before** running finalisation in the newer environment. This prevents any destructive changes performed by finalisation from breaking the older environment.