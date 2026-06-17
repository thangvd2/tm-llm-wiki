---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/configuring_kubernetes"
title: "Configuring Kubernetes"
scraped_at: "2026-06-17T05:15:50.766Z"
images: 0
---

# Configuring Kubernetes

Vault Bridge requires a Kubernetes cluster to host its microservices. The following managed Kubernetes services are supported:

-   AWS Elastic Kubernetes Service
    
-   Google Kubernetes Engine
    
-   Azure Kubernetes Service
    
-   OpenShift
    

You can also use a self-managed Kubernetes cluster to run your Vault Bridge instance.

After the cluster is deployed, the Crown Operator handles the required base resources.

## [](#kubernetes_metrics_server "Copy link to heading")Kubernetes Metrics Server

[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server) (`metrics-server`) is a prerequisite to using Vault Bridge. The `metrics-server` fetches resource metrics and exposes them in Kubernetes API Server through the Metrics API. This is required in order to ensure that the Kubernetes Horizontal Pod Autoscaling (HPA) works correctly.

However, your provider might not include it by default. Therefore, you must check whether it is installed on your environment.

Run the following command:

If `metrics-server` is not installed, then you must install it on your environment. For information on how to do this, refer to your provider’s documentation.

## [](#highly_available_kubernetes_deployments "Copy link to heading")Highly available Kubernetes deployments

In order for workloads deployed on Kubernetes to be highly available, you must architect your cluster’s worker nodes to span across multiple failure domains. In public cloud offerings, such as AWS and GCP, a typical highly available Kubernetes cluster will have worker nodes in two or more Availability Zones (AZs). For self-managed infrastructure, your failure domains could be physical data centres, with low-latency links between them. Your chosen architecture will depend on your specific circumstances.

### [](#scheduling_for_high_availability "Copy link to heading")Scheduling for high availability

Kubernetes supports scheduling Pods across multiple failure domains, through the use of annotations set on each Node; the scheduler identifies a Node’s failure domain to Pods in two ways.

The first method uses the Node’s hostname – through the annotation “kubernetes.io/hostname” – to spread Pods across all Nodes in the cluster. This annotation is added automatically to Nodes by the Kubernetes control plane, when the Node joins the cluster. The second method uses the topology domain annotation “topology.kubernetes.io/zone”; this annotation is also set automatically, but only when the cluster is deployed on a supported cloud provider. In order to take advantage of this feature of the Kubernetes scheduler with self-managed infrastructure, cluster administrators will need to set the zone annotation themselves, to values that make sense for their topology.

The scheduling behaviour described above is performed on a best-effort basis. The Node hostname and zone are only factors that reduce the likelihood for Pod replicas to be scheduled in the same failure domain; in order to further influence Pod scheduling decisions, we use Topology Spread Constraints on Deployments. Thought Machine recognises the importance of high availability for its workloads, and as such has chosen specific spread constraints for a number of Vault Bridge services. These constraints take into account the latency-sensitive nature of Vault Bridge journeys, and the need to preserve uptime for the services on these journey paths. They also consider the need for the system to react quickly to changes in traffic volume, and ensure that scheduling constraints do not impact the ability for Vault Bridge to scale to meet demand.

### [](#maintaining_balance_across_failure_domains "Copy link to heading")Maintaining balance across failure domains

While Kubernetes offers many ways for scheduling decisions to account for highly available deployments, it is important to understand that scheduling decisions happen only once in a Pod’s lifecycle. When a ReplicaSet is scaled down, perhaps due to changing traffic conditions in the cluster, the terminated Pods are chosen indiscriminately of their failure domains. This means that, for horizontally scaling services like most of the services in Vault Bridge, there is a possibility that replicas fall out of balance across failure domains over time. This can happen regardless of the Topology Spread Constraints set for Pods, and introduces a material risk to the reliability of the system.

In order to mitigate against this behaviour, consider the following strategies:

1.  Use homogenous node pools across failure domains – having the same size and number of nodes between zones will make it less likely for a zone to fall out of balance.
    
2.  Proactively rebalance failure domains using the Descheduler – the Descheduler is an official Kubernetes project for a service that runs in your cluster and evicts Pods that meet some configured criteria. One supported use case is to evict Pods in imbalanced zones, thus forcing the scheduler to reconsider its location in the cluster. An example configuration for this use case can be found in the documentation for the Descheduler service.
    

## [](#configuring_webhook_ports_to_allow_the_kubernetes_api "Copy link to heading")Configuring webhook ports to allow the Kubernetes API

Depending on your setup, a firewall might prevent traffic from the Kubernetes API master reaching webhook pods. If you are using any of the webhooks listed below, make sure that you add ingress rules in your firewall that allow traffic from the control plane to reach the following ports:

 
| Webhook | Port |
| --- | --- |
| 
`ca-injector`

 | 

10000

 |
| 

`istio-annotation-tm-webhook`

 | 

10000

 |
| 

`istio-sidecar-injector` (GKE clusters only)\*

 | 

15017

 |

chat\_bubble

\*GKE clusters only: You should also configure `istio-sidecar-injector` but note that the firewall rule that is automatically created does not open port `15017`. In order to prevent issues with a firewall, you must add an exception/rule for this port because it is required by the Pilot discovery validation webhook. Refer to the [Istio documentation](https://istio.io/latest/docs/setup/platform-setup/gke/) for configuration guidance.

You can test that the API master can connect to the webhooks by asking it to perform a request on your behalf and return the results with the following command:

For example, checking the `healthz` context path for `istio-annotation-tm-webhook` in namespace `tm-vault` returns `ok`: