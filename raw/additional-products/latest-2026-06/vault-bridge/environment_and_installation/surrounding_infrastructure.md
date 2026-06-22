---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure"
title: "Surrounding Infrastructure"
scraped_at: "2026-06-17T15:54:27.854Z"
images: 0
---

# Surrounding Infrastructure

Vault Bridge requires several infrastructure pieces to be provisioned and configured to run successfully. The following table gives a high-level overview of each.

info

Vault Bridge has mostly the same requirements and prerequisites as Vault Core. This means that the steps described in this guide are the same as the ones described in [Vault Core Infrastructure documentation](/vault-core/latest/EN/environment_and_installation/infrastructure_docs).

It also means that if you are installing Vault Bridge on a cluster that has already been set up for Vault Core you can skip most of the steps from this guide. But we strongly encourage you read through this guide regardless to ensure all prerequisites are met before continuing with Vault Bridge installation.

 
| Required component | Description |
| --- | --- |
| 
Private network

 | 

Isolates the Vault Bridge instance for security and auditability purposes.

 |
| 

[Kubernetes](https://kubernetes.io/) cluster

 | 

Runs the services that make up Vault Bridge.

 |
| 

[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)

 | 

The `metrics-server` fetches resource metrics and exposes them in Kubernetes API Server through the Metrics API. It is required in order to ensure that the Kubernetes Horizontal Pod Autoscaling (HPA) works correctly. For more information, see [Configuring Kubernetes in Vault Bridge](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/configuring_kubernetes/).

 |
| 

Firewall rules

 | 

Expose specific endpoints for ingress.

 |
| 

[Ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)

 | 

Required to enable external users to access the Vault Bridge RESTful APIs and Console UI.

 |
| 

[PostgreSQL](https://www.postgresql.org/)

 | 

Vault Bridge services use this to store data. As part of the standard Vault Bridge installation process, a database initialisation job ensures that the various databases and users required by Vault Bridge have been created and have the required permissions. This process requires access to a user on the PostgreSQL instance who has permission to perform these operations.

 |
| 

A supported secrets manager

 | 

Provides components of Vault Bridge with access to the secrets that they require in order to operate. You must store all the secrets specific to an instance of Vault Bridge underneath a single path within the secrets manager, and specify the path and configure it when installing Vault Bridge. For more information, see [Configuring a secrets manager in Vault Bridge](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/configuring_secrets_manager/).

 |
| 

[Istio](https://istio.io/)

 | 

A service mesh that you can deploy to Kubernetes. When operating distributed systems such as Vault Bridge, this provides management of the communication between the various services, offering features such as traffic management, improved reliability and performance, policy enforcement and telemetry. You can install it using `vaultctl`.

 |
| 

Webhook Operator

 | 

An operator that manages the creation and deletion of Mutating and Validating Webhook Configurations. It also handles certificate rotations required for secure communication between Kubernetes control plane and backend webhook services. You can install it using `vaultctl`.

 |
| 

Kubernetes namespaces

 | 

Kubernetes namespaces to contain the Vault Bridge pods and Istio pods.

 |