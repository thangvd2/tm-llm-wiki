---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start"
title: "Before you start"
scraped_at: "2026-06-16T15:23:06.427Z"
images: 0
---

# Before you start

## [](#set_up_the_observability_stack "Copy link to heading")Set up the Observability Stack

Before installing Vault Core or any infrastructure components, you must first install the observability component. See [Setting up the Observability Stack](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack) for instructions.

## [](#configure_all_the_necessary_components "Copy link to heading")Configure all the necessary components

In addition to the Observability Stack, you need to set up the infrastructure required for your Vault Core instance.

Refer to [Requirements](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements) for a list of required and optional infrastructure components, as well as [Configuring cloud infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure) for guidance on setting up individual components.

## [](#istio_manual_installation "Copy link to heading")Istio manual installation

If you are not using the TMComponent-operator (manual installation) for the Istio installation:

-   The sidecarInjectorWebhook *must* rewrite the AppHTTPProbe; set the sidecarInjectorWebhook.rewriteAppHTTPProbe installation option to true
    
-   The use\_remote\_address HTTP connection manager property in Istio-proxy must be enabled; set the `pilot.env.PILOT_SIDECAR_USE_REMOTE_ADDRESS` installation option to true
    
-   Istio *must not* merge Envoy metrics with application metrics and overwrite Prometheus annotations; set the meshConfig.enablePrometheusMerge installation option to false
    
-   You must use a standard Istio injection label, either istio-injection or istio.io/rev
    

## [](#checking_the_istio_settings "Copy link to heading")Checking the Istio settings

  
| *If…* | *Run…* | *To check that the…* |
| --- | --- | --- |
| 
-   You are using the Istio self-signed certificates (which the Vault deployed Istio does by default); and
    
-   The expiration of the root certificate has never been checked or extended (see note below)
    





 | 

`kubectl -n istio-system get secret istio-ca-secret -o json | jq '.data["ca-cert.pem"]' | tr -d '"' | base64 -d | openssl x509 -noout -text | grep "Not After"`

 | 

Root self-signed CA certificate of Istio has not expired, or is not close to expiry. Otherwise, please follow the next section to generate a new certificate.

 |

chat\_bubble

Istio’s self-signed certificates generate a root cert with an expiry date 10 years in the future. An unexpected expiry of the root cert could cause downtime, and therefore checking the validity of the certificate here is a useful step.

## [](#generating_a_new_istio_self_signed_certificate "Copy link to heading")Generating a new Istio self-signed certificate

1.  Delete the existing certificate stored in the Istio namespace (`istio-system` by default).
    
2.  Perform a rollout restart of istiod to generate a new Istio self-signed certificate.
    
3.  After the restart of istiod, check that the new certificate is valid. Refer to [Checking the Istio settings](#checking_the_istio_settings) to perform this check.