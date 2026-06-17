---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements"
title: "Requirements"
scraped_at: "2026-06-17T05:29:09.973Z"
images: 0
---

# Requirements

This guide goes through the required and optional components you need to configure before installing Vault Core.

## [](#required_components "Copy link to heading")Required components

There are a number of prerequisites for using Vault Core in combination with Kubernetes. These shape the Vault Cloud infrastructure and enable the provisioning of a Vault Core instance on a Kubernetes cluster - therefore, you must set them up before [installing Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).

Components also come with their own set of prerequisites for configuration. Refer to the links in **Further guidance** for step-by-step instructions on how to configure individual components.

You also need to install [TMComponent Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator) and [Crown Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#tmcomponent_operator_structure) before installing or upgrading Vault Core. These are Kubernetes Operators which are shipped with Vault Core and used with all production and non-production instances to manage the installation and configuration of Vault Core components.

A TMComponent custom resource results in the creation/update of Crown custom resources, which in turn results in the creation/update of Kubernetes built-in resources such as [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/).

   
| Required component | Description | Compatibility with Vault Core | Further guidance |
| --- | --- | --- | --- |
| 
Private network (hosted in either a public or private cloud environment)

 | 

Isolates the Vault Core instance for security and auditability purposes. You must deploy Vault Core infrastructure in an isolated private network.

 | 

You can deploy Vault Core on:

-   Google Cloud Platform (GCP)
    
-   Amazon Web Service (AWS)
    
-   Microsoft Azure
    
-   OpenShift
    





 | 

-   [GCP documentation](https://cloud.google.com/docs)
    
-   [AWS documentation](https://docs.aws.amazon.com/)
    
-   [Microsoft Azure documentation](https://learn.microsoft.com/azure/)
    
-   [Red Hat OpenShift documentation](https://www.redhat.com/en/technologies/cloud-computing/openshift)
    





 |
| 

[Kubernetes](https://kubernetes.io/) cluster

 | 

Runs the services that make up Vault Core.

 | 

-   AWS Elastic Kubernetes Service
    
-   Google Kubernetes Engine
    
-   Azure Kubernetes Service
    
-   OpenShift
    
-   Self-managed Kubernetes
    





 | 

[Configuring Kubernetes in Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kubernetes_in_vault)

 |
| 

[Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server)

 | 

The `metrics-server` fetches resource metrics and exposes them in Kubernetes API Server through the Metrics API. It ensures that the Kubernetes Horizontal Pod Autoscaling (HPA) works correctly.

 | 

N/A

 | 

[Installing Kubernetes Metrics Server](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kubernetes_in_vault#kubernetes_metrics_server)

 |
| 

Kubernetes namespaces

 | 

Kubernetes namespaces to contain the Vault Core pods and Istio pods. The typical required namespaces include:

-   `tm-system`: for core operators like the TMComponent Operator
    
-   `tm-monitoring`: for observability components
    
-   `tm-vault`: for Vault Core services
    
-   `istio-system`: for Istio service mesh components
    





 | 

N/A

 | 

N/A

 |
| 

Container registry

 | 

Stores and manages the software required to run Vault Core’s microservices, which are deployed in containers. To install Vault Core, you need to first [copy container images](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#release_json_artefact) from Thought Machine’s registry to your own registry.

 | 

-   Amazon Elastic Container Registry
    
-   Google Artifact Registry
    
-   Azure Container Registry
    
-   Other OCI-compatible registries, such as Docker
    





 | 

-   [Amazon Elastic Container Registry documentation](https://aws.amazon.com/ecr/getting-started/)
    
-   [Google Artifact Registry documentation](https://docs.cloud.google.com/artifact-registry/docs/)
    
-   [Azure Container Registry documentation](https://azure.microsoft.com/en-us/products/container-registry)
    





 |
| 

Firewall rules

 | 

Expose specific endpoints for ingress.

 | 

N/A

 | 

[Configuring webhook ports to allow the Kubernetes API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_webhook_ports_to_allow_the_kubernetes_api)

 |
| 

[Ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)

 | 

An Ingress Load Balancer is required to enable external users to access the Vault Core RESTful APIs.

 | 

-   AWS LoadBalancer Controller
    
-   GKE Ingress Controller
    
-   Istio Ingress Gateway
    





 | 

[Case Study: Using the Istio Ingress Gateway with Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/case_study_using_the_istio_ingress_gateway_with_vault_core)

 |
| 

[PostgreSQL](https://www.postgresql.org/)

 | 

Vault Core uses PostgreSQL databases to store data.

As part of the standard Vault Core installation process, a database initialisation job ensures that the various databases and users required by Vault Core have been created and have the required permissions. This process requires access to a user on the PostgreSQL instance who has permission to perform these operations.

 | 

-   AWS Aurora
    
-   AWS RDS
    
-   Google CloudSQL
    
-   Google AlloyDB
    
-   Azure Postgres Flexible Server
    
-   Bank-hosted open source PostgreSQL
    





 | 

[Configuring Vault with PostgreSQL/CloudSQL](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_vault_with_postgresqlcloudsql)

 |
| 

[Apache Kafka](https://kafka.apache.org/)

 | 

Used for asynchronous message processing and real-time event streaming across Vault Core’s microservices. Clients can consume data from Vault Core via public Kafka topics.

 | 

N/A

 | 

[Configuring Kafka and Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault)

 |
| 

Observability Stack

 | 

Used to populate dashboards showing the performance and health of Vault Core services. Install with `vaultctl`.

 | 

While some components are shipped with Vault Core, you need to integrate extra components for full observability and monitoring functionality. For example:

-   Logging: Fluentd, Kibana, Elasticsearch
    
-   Incident management: Opsgenie, Slack
    
-   Tracing: An OpenTelemetry Protocol compatible collector
    
-   Observability platform: Grafana (if you choose to use your own self-managed Grafana instance)
    





 | 

[Setting up the Observability Stack](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack)

 |
| 

A supported secrets manager

 | 

Provides components of Vault Core with access to the secrets that they require to operate. You need to configure a secrets manager in your `values.yaml` file and provide the necessary permissions for the [Crown Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#tmcomponent_operator_structure) to manage secrets.

Secrets are automatically created during installation. All secrets specific to an instance of Vault Core are stored underneath a single path within the secrets manager.

 | 

-   HashiCorp Vault (supported across all Vault Core versions)
    
-   Azure Key Vault (available from Vault Core 5.2+)
    
-   AWS Secrets Manager (available from Vault Core 4.6+)
    





 | 

-   [Configuring a secrets manager in Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault)
    
-   [Configuring HashiCorp Vault secrets manager](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager)
    
-   [Configuring Vault Core with Microsoft Azure Key Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault)
    
-   [Configuring Vault Core with AWS Secrets Manager](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager)
    





 |
| 

[Istio service mesh](https://istio.io/)

 | 

A service mesh that you can deploy to Kubernetes. When operating distributed systems such as Vault Core, this provides management of the communication between the various services, offering features such as traffic management, improved reliability and performance, policy enforcement and telemetry. You can install it using `vaultctl`.

 | 

-   Thought Machine-shipped Istio
    
-   Your own Istio service mesh
    





 | 

[Configuring Istio service mesh with Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault)

 |
| 

Webhook Operator

 | 

An operator that manages the creation and deletion of Mutating and Validating Webhook Configurations. It also handles certificate rotations required for secure communication between kubernetes control plane and backend webhook services. You can install it using `vaultctl`.

 | 

N/A

 | 

[Configuring webhook ports to allow the Kubernetes API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_webhook_ports_to_allow_the_kubernetes_api)

 |

## [](#optional_components "Copy link to heading")Optional components

The following components are not prerequisites to install Vault Core. Nevertheless, you may still want to install them as an extra part of your Vault Core setup: either as a post-installation step for further use of Vault Core, or as additional configuration to support your bank’s particular requirements.

   
| Optional component | Description | Compatibility with Vault Core | Further guidance |
| --- | --- | --- | --- |
| 
Security Assertion Markup Language Identity Provider (SAML IdP)

 | 

Used to authenticate and authorise users via Single Sign-On (SSO), so they can access Vault Core APIs.

A SAML IdP is not required for the initial installation of Vault Core. However, it is required post-installation for the purpose of accessing the Operations Dashboard and creating the initial service account token.





 | 

-   Okta
    
-   Google Cloud Identity
    
-   AWS SSO
    
-   Azure AD
    





 | 

-   [Setting up Okta as your SAML ldP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_okta_as_your_saml_ldp)
    
-   [Setting up Google Cloud Identity as your SAML ldP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_google_cloud_identity_as_your_saml_ldp)
    
-   [Setting up AWS IAM Identity Center as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_aws_iam_as_your_saml_idp)
    
-   [Setting up Azure Active Directory as your SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/setting_up_azure_active_directory_as_your_saml_idp)
    





 |

## [](#check_compatibility_with_vault_core "Copy link to heading")Check compatibility with Vault Core

Use the [Certified Environment matrix](/vault-core/5-8/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) to check the compatibility of your infrastructure against the environments that we have certified. It lists the different versions of the components we support for use with the different release versions of Vault Core.

Make sure all your infrastructure components are compatible with the Vault Core version you are deploying.

## [](#further_considerations "Copy link to heading")Further considerations

Depending on your chosen setup, you may need to make some additional considerations when setting up your infrastructure.

See also [Before you install](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start) to check any extra steps to take before Vault Core installation.

### [](#additional_prerequisites_for_istio_support "Copy link to heading")Additional prerequisites for Istio support

Vault Core is configured to use Istio’s `STRICT` mTLS mode by default, which means the ingress controller must be included in the service mesh so it can communicate to Vault Core services.

If this is not desirable, you can configure Vault Core in `PERMISSIVE` mode instead by following the instructions in [Disable Istio strict mTLS](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#disable_istio_strict_mtls).

Kubernetes Service Ports listening on 443 within the cluster must not have a name starting with "http" ("https" is allowed):

-   Allowed: `https`, `https-foo`, `foo`, `bar`
    
-   Not allowed: `http`, `http-foo`, `http-bar`
    

### [](#additional_considerations_for_secret_storage "Copy link to heading")Additional considerations for secret storage

Several Vault Core components (notably Istio) store important information in Kubernetes secret resources. By default, Kubernetes secret values are stored **unencrypted** in etcd. We strongly recommend that you ensure secrets are encrypted at rest in etcd.

Google’s [GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets) and Azure’s [AKS](https://learn.microsoft.com/en-us/azure/aks/aksarc/encrypt-secrets) enable secrets encryption in etcd by default, so no further configuration is required in order to ensure secret security. If you use [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/encryption-best-practices/eks.html) or [Openshift](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/security_and_compliance/encrypting-etcd#about-etcd_encrypting-etcd), you will need to follow their documentation to enable etcd encryption.

### [](#additional_considerations_for_jwt_rest_api_authentication "Copy link to heading")Additional considerations for JWT REST API authentication

If you are using JSON Web Tokens (JWTs) as the mechanism for REST API authentication, you need to configure your firewall or network traffic policy to allow outbound requests to the JWKS URI configured in the `values.yaml`.