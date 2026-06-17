---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/case_study_using_the_istio_ingress_gateway_with_vault_core"
title: "Case Study: Using the Istio Ingress Gateway with Vault Core"
scraped_at: "2026-06-17T05:29:29.367Z"
images: 0
---

# Case Study: Using the Istio Ingress Gateway with Vault Core

This case study demonstrates how the [Istio Ingress Gateway](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/) can be integrated with Vault Core using the bundled Ingress resources. While we recommend the Ingress API as the most straightforward way to configure the ingress controller, it is also possible for clients to configure the Gateway API themselves in order to fulfil more sophisticated requirements.

Clients can use this to aid integrating their own ingress controllers into the Istio service mesh. For more details, refer to the [Kubernetes Ingress](https://istio.io/latest/docs/tasks/traffic-management/ingress/kubernetes-ingress/) documentation from Istio.

chat\_bubble

This is only an example and may not be applicable or suitable for all client environments.

In this integration, Thought Machine:

1.  Deployed the Istio Ingress Gateway
    
2.  Updated values.yaml to set `k8s.ingress.annotations` and `observability.ingress.monitoring-annotations` to `kubernetes.io/ingress.class: istio`.
    

## [](#migrating_to_the_istio_ingress_gateway_without_downtime "Copy link to heading")Migrating to the Istio Ingress Gateway without downtime

If you currently use a different ingress controller, such as Ingress NGINX, it is possible to migrate to the Istio Ingress Gateway without incurring downtime.

This can be accomplished in a number of ways, including:

1.  Using Vault Core’s Blue-Green Deployment mode to switch to a cluster with a different ingress controller
    
2.  Reusing the existing Kubernetes Load Balancer Service for the ingress controller that is being replaced, by adding a shared label to target both old and new ingress controllers.
    

If you intend to use either of these approaches, or some other alternative, please contact your Thought Machine representative for further advice on your particular situation.