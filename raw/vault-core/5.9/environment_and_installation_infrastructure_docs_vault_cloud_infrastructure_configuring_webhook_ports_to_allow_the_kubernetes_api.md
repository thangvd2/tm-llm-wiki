---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_webhook_ports_to_allow_the_kubernetes_api"
title: "Configuring webhook ports to allow the Kubernetes API"
scraped_at: "2026-06-17T04:58:02.765Z"
images: 0
---

# Configuring webhook ports to allow the Kubernetes API

Bank-hosted

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

\*GKE clusters only: You should also configure `istio-sidecar-injector` but note that a firewall rule that is automatically created does not open port `15017`. In order to prevent issues with a firewall, you must add an exception/rule for this port because it is required by the Pilot discovery validation webhook. Refer to the [Istio documentation](https://istio.io/latest/docs/setup/platform-setup/gke/) for configuration guidance.

You can test that the API master can connect to the webhooks by asking it to perform a request on your behalf and return the results with the following command:

For example, checking the `healthz` context path for `istio-annotation-tm-webhook` in namespace `tm-vault` returns `ok`: