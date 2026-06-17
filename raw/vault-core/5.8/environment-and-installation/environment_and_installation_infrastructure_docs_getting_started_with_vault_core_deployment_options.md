---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/deployment_options"
title: "Deployment options"
scraped_at: "2026-06-16T15:22:16.122Z"
images: 1
---

# Deployment options

Vault Core is a cloud-native, cloud-agnostic product designed and built to use key cloud functionality in any supported cloud environment.

This information is aimed at engineers (such as SREs or DevOps) who will be installing and maintaining the infrastructure for Vault Core.

## [](#how_vault_core_deployment_works "Copy link to heading")How Vault Core deployment works

The default deployment option for Vault Core is the standard deployment mode: a Vault Core instance and all its components deployed in a single Kubernetes namespace, in a single region.

All Vault Core infrastructure deployments are automated; you cannot make manual changes via cloud consoles or the command-line interface. This ensures that all deployments are fully reproducible and all resources are accounted for.

You must deploy Vault Core infrastructure in an isolated private network, which can then be exposed via load balancers. Additionally, infrastructure components must be spread across multiple availability zones or data centres to ensure high availability and minimal downtime.

Your Vault Core instance comprises required and optional components, each of which can have zero or more dependencies. Thought Machine encourages the use of managed services, such as AWS Elastic Cloud Kubernetes (EKS) or Google Kubernetes Engine (GKE), to reduce operational overhead.

This diagram illustrates how an instance of Vault Core is deployed on a Kubernetes cluster:

![Illustration of Vault Core deployment](_assets/uuid-451222b5-e693-f5f9-1167-cbd698fe6c5_vaultcor.svg)

1.  The Kubernetes cluster is deployed across multiple data centres/availability zones. This prevents any singular server from being overloaded, ensuring high availability and minimising downtime for Vault Core microservices. Here, the Kubernetes control plane and data plane, as well as the actual microservices running on top of them, are deployed across three zones.
    
2.  The Kubernetes control plane is deployed as a managed service outside of the private network. This control plane communicates with the cluster nodes within the private network.
    
3.  Nodes can be added to allow Vault Core to scale horizontally based on demand.
    
4.  REST APIs are exposed through a single ingress load balancer, which provides a point of access for external clients to interact with Vault Core services.
    

### [](#tools_used_in_deployment "Copy link to heading")Tools used in deployment

To deploy Vault Core (both production and non-production instances) you must use automation tools, including:

-   `vaultctl`: a command-line tool to interact with the TMComponent Operator in a streamlined way. You can use it to install, upgrade, and configure Vault Core, as well as query the status of Vault Core components. `vaultctl` is currently only shipped as a Linux binary.
    
-   [TMComponent Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/about_tmcomponent_operator): a Kubernetes Operator that is shipped with Vault Core and uses the [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) to install and configure Vault Core microservices. Use `vaultctl` to deploy the TMComponent Operator.
    
-   `values.yaml` file: use this to define and manage your Vault Core configuration. The file is processed by the TMComponent Operator into Kubernetes configuration maps for each Vault Core service.
    

These tools are provided as part of the Vault Core release, and can be integrated into CI/CD pipelines to support automated installation, upgrades, and configuration of your Vault Core environment. See [Tools and artefacts provided](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/tools_and_artifacts_provided).

## [](#how_to_set_up_vault_core_infrastructure "Copy link to heading")How to set up Vault Core infrastructure

Vault Core relies on surrounding infrastructure including Kubernetes, PostgreSQL, Istio, Kafka, a secrets manager (such as HashiCorp Vault), and an Observability Stack.

Before [installing Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) itself, you need to configure all the components that make up its infrastructure. There are many ways to deploy a bank-hosted Vault Core instance, depending on your bank’s infrastructure and operational requirements. See the [Requirements guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements) for a full list of mandatory and additional components to set up prior to installation.

### [](#choosing_where_to_deploy_vault_core "Copy link to heading")Choosing where to deploy Vault Core

You can deploy Vault Core in either a public or private cloud environment. Thought Machine supports all major public cloud service providers (CSPs):

-   [Google Cloud Platform (GCP)](https://cloud.google.com/docs)
    
-   [Amazon Web Service (AWS)](https://docs.aws.amazon.com/)
    
-   [Microsoft Azure](https://learn.microsoft.com/azure/)
    

You can also deploy Vault Core on [OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift), which can be run on any CSP.

Setting up the infrastructure to run your bank-hosted Vault Core instance depends on your chosen CSP. For more guidance on setting up GCP, AWS, or Azure, see your CSP’s documentation. Refer to [Expected infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/infrastructure_overview#expected_infrastructure) for example configurations.

### [](#checking_the_list_of_components_available_to_install "Copy link to heading")Checking the list of components available to install

You can return a list of the components that can be installed by running `vaultctl components` on the release file. The output can help you to decide which are relevant for the installation environment. This information is also available in the `components_guide.yaml` file, as well as our [Requirements guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements).

Some packages are optional, such as a [Dummy SAML identity provider](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/sample_configuration_for_the_dummy_samlidp_service), and are included for clients bootstrapping a development environment. However, in real environments you must replace any dummy components with a production-ready service.

### [](#configuring_vault_core_via_the_values_yaml_file "Copy link to heading")Configuring Vault Core via the values.yaml file

Vault Core configuration is set in a `values.yaml` file containing key-value pairs that define settings for components such as infrastructure, observability, secrets management, and more. It is processed by the Operator into configuration maps for each Vault Core service.

You can generate the `values.yaml` file for a subset of components and manage these files separately, if this is useful.

See [Available values configuration options](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/available_values_configuration) for a list of configurable values for the Vault Core version you are installing.

### [](#deployment_size_setting_in_the_values_yaml_file "Copy link to heading")Deployment size setting in the values.yaml file

A key configuration parameter available in `values.yaml` is `common.deployment_size`, which is available in Vault Core version 5 onwards. This configuration is responsible for sizing Vault Core workloads according to the performance framework. The recommended maximum number of customer accounts at each deployment size is as follows:

 
| `common.deployment_size` value | Maximum number of customer accounts |
| --- | --- |
| 
`extra-small`

 | 

100,000 (available from Vault Core 5.3)

 |
| 

`small`

 | 

1,000,000

 |
| 

`small-medium`

 | 

5,000,000

 |
| 

`medium`

 | 

10,000,000

 |
| 

`medium-large`

 | 

30,000,000

 |

For more information, see:

-   Your example `values.yaml` file: it provides information about the values for `common.deployment_size` and how they relate to sizing.
    
-   [Vault Core Release Certification Performance Report](/vault-core/5-8/EN/vault_release_information#performance_report): performance tests and links to the performance reports for Vault Core.
    
-   [Expected infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/infrastructure_overview#expected_infrastructure): guidance about the expected infrastructure for each type of Vault Core deployment.
    

### [](#container_images_and_binary_authorisation "Copy link to heading")Container images and binary authorisation

You need to copy container images for the Vault Core services from the Thought Machine registry. This is described in the [TMComponent Operator User Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide). You can choose to attest the images against a trusted Thought Machine server.

For more guidance, see [Using Binary Authorisation and Docker Images](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/using_binary_authorisation_and_docker_images).

## [](#production_and_non_production_environments "Copy link to heading")Production and non-production environments

You can deploy Vault Core in both production and non-production environments. They serve different purposes:

-   **Production**: used for real-time banking operations and contains live customer data.
    
-   **Non-production**: used for development, functional testing, and verification of changes before you deploy to production. Contains obfuscated test data only.
    

Depending on your requirements, you may want to have several non-production environments, and more than one production environment.

lightbulb

While it is not mandatory to install both environments, we recommend that you have at least one non-production environment for the purpose of testing and validation before deploying to production.

Thought Machine recommends installing the same components in both environments, so you can test the same setup in development before deploying to production. You should also install [Istio](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault) and the [Observability Stack](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack) in non-production environments, so that Thought Machine can provide help if you encounter problems in development.

Otherwise, production and non-production environments can have different configurations. You should design your testing approach carefully and make sure that you have the necessary environments to support the testing you want to carry out.

You must supply your own [SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp) (identity provider) for production; the [dummy SAML IdP](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/sample_configuration_for_the_dummy_samlidp_service) is for development and testing purposes only.

## [](#next_steps "Copy link to heading")Next steps

### [](#first_time_users "Copy link to heading")First-time users

If you are installing Vault Core for the first time, refer to the following guides to get started:

-   [Vault Core infrastructure overview](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/infrastructure_overview)
    
-   [Requirements](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements)
    
-   [Configuring cloud infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure)
    

### [](#existing_users "Copy link to heading")Existing users

If you already have Vault Core installed and are familiar with its infrastructure, refer to the following post-installation guides:

-   [Upgrading Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault)
    
-   [Migrating data to Vault Core](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault)
    
-   [Backups and resilience](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery)