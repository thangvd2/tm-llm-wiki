---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kubernetes_in_vault"
title: "Configuring Kubernetes in Vault Core"
scraped_at: "2026-06-17T04:57:45.145Z"
images: 0
---

# Configuring Kubernetes in Vault Core

Bank-hosted

Vault Core requires a Kubernetes cluster to host its microservices. The following managed Kubernetes services are supported:

-   AWS Elastic Kubernetes Service (EKS)
    
-   Google Kubernetes Engine (GKE)
    
-   Azure Kubernetes Service (AKS)
    
-   OpenShift Container Platform (OCP)
    

You can also use a self-managed Kubernetes cluster to run your Vault Core instance.

After the cluster is deployed, the [Crown Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#crown_operator) handles the required base resources.

## [](#kubernetes_metrics_server "Copy link to heading")Kubernetes Metrics Server

[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server) (`metrics-server`) is a prerequisite to using Vault Core. The `metrics-server` fetches resource metrics and exposes them in Kubernetes API Server through the Metrics API. This is required to ensure that the Kubernetes Horizontal Pod Autoscaling works correctly.

However, your provider might not include it by default. Therefore, you must check whether it is installed on your environment - run the following command to check:

If `metrics-server` is not installed, then you must install it on your environment. For information on how to do this, refer to your provider’s documentation.

## [](#highly_available_kubernetes_deployments "Copy link to heading")Highly available Kubernetes deployments

To ensure workloads deployed on Kubernetes are highly available, you must set up your cluster’s worker nodes to span across multiple failure domains.

Your chosen architecture will depend on your specific setup and requirements:

-   In public cloud offerings, such as AWS and GCP, a typical highly available Kubernetes cluster will have worker nodes in two or more availability zones.
    
-   For self-managed infrastructure, your failure domains could be physical data centres, with low-latency connections between them.
    

### [](#scheduling_for_high_availability "Copy link to heading")Scheduling for high availability

Kubernetes supports scheduling pods across multiple failure domains, through the use of annotations set on each node. To spread pods across all nodes in the cluster, the [Kubernetes scheduler](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/) does this in two ways:

1.  Using the node’s hostname via the annotation `kubernetes.io/hostname`: this annotation is added automatically to nodes by the Kubernetes control plane when the node joins the cluster.
    
2.  Using the topology domain annotation `topology.kubernetes.io/zone`: this annotation is also set automatically, but only when the cluster is deployed on a supported cloud provider. To use this method with self-managed infrastructure, cluster administrators will need to manually set the zone annotation to values that make sense for their topology.
    

The scheduling behaviour described above is performed on a best-effort basis. The node hostname and zone are not the only factors that reduce the likelihood for pod replicas to be scheduled in the same failure domain; to further influence pod scheduling decisions, we use [topology spread constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) on Vault Core deployments.

Because high availability is particularly important for Vault Core workloads, we have chosen specific spread constraints for a number of Vault Core services. These constraints consider:

-   The latency-sensitive nature of Vault Core journeys and the need to preserve uptime for the services on these journey paths.
    
-   The need for the system to react quickly to changes in traffic volume, ensuring that scheduling constraints do not impact the ability for Vault Core to scale to meet demand.
    

### [](#maintaining_balance_across_failure_domains "Copy link to heading")Maintaining balance across failure domains

While Kubernetes offers many ways for scheduling decisions to account for highly available deployments, it is important to understand that scheduling decisions happen only once in a pod’s lifecycle.

When a [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) is scaled down, perhaps due to changing traffic conditions in the cluster, the terminated pods are chosen indiscriminately of their failure domains. This means that, for horizontally scaling services like most of the services in Vault Core, there is a possibility that the balance of replicas across failure domains decreases over time. This can happen regardless of the topology spread constraints set for pods, and introduces a material risk to the reliability of the system.

To mitigate this behaviour, consider the following methods:

-   Using homogenous node pools across failure domains: having the same size and number of nodes between availability zones will make it less likely for a zone to fall out of balance.
    
-   Proactively rebalancing failure domains using the Descheduler: the Descheduler is an official Kubernetes project for a service that runs in your cluster and evicts pods that meet some configured criteria. One supported use case is to evict pods in imbalanced zones, thus forcing the scheduler to reconsider their location in the cluster. Refer to the [Descheduler documentation](https://github.com/kubernetes-sigs/descheduler) for an example configuration for this use case.
    

## [](#kubernetes_persistent_storage "Copy link to heading")Kubernetes persistent storage

Vault Core utilises stateful components, which require [Persistent Volumes (PVs)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/). Enabling dynamic provisioning of PVs is specific to the Kubernetes runtime provider being used.

-   **EKS**: PV dynamic provisioning is not enabled by default. You must install the [AWS Container Storage Interface (CSI) driver for EBS](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) to enable dynamic provisioning.
    
-   **GKE**: PV dynamic provisioning is enabled by default on Autopilot clusters. In Standard clusters, you must enable the [Compute Engine persistent disk CSI driver](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver).
    
-   **AKS**: PV dynamic provisioning is not enabled by default. To enable it, you must include [disk driver parameter](https://learn.microsoft.com/en-us/azure/aks/csi-storage-drivers#enable-csi-storage-drivers-on-an-existing-cluster) when creating or updating the cluster, which installs an [Azure Disk and Azure File Container Storage Interface (CSI) driver](https://learn.microsoft.com/en-us/azure/aks/azure-disk-csi).
    
-   **OCP**: PV dynamic provisioning is automatically enabled through the default installation of the necessary CSI drivers when running OCP on cloud service providers such as AWS, GCP, or Azure. The preinstalled drivers for these environments meet the requirements for Vault Core. For more detailed information, check the version-specific OCP documentation. If you are hosting OCP in an on-premise data center, contact your Thought Machine representative for specific guidance.