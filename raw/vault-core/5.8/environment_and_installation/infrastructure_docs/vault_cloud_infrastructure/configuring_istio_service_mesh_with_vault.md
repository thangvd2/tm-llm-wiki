---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault"
title: "Configuring Istio service mesh with Vault"
scraped_at: "2026-06-17T15:35:59.837Z"
images: 0
---

# Configuring Istio service mesh with Vault

In a distributed system like Thought Machine Vault Core, a service mesh can be crucial to help manage interservice communication, and incoming and outgoing traffic to and from the cluster.

Vault Core supports Istio as its compatible service mesh solution. Istio provides several features that a running instance of Vault Core uses and benefits from, and improved synchronous interservice communication.

We support installing an Istio component using one of the following options:

-   Use the Vault installer to install an on-cluster Istio component that leverages the Istio CNI (recommended)
    
-   Using a client-provided Istio component that uses either `istio-init` or Istio CNI for traffic interception (the Istio CNI is strongly recommended in this case)
    

warning

While we support using a client-provided Istio service mesh, we strongly recommend that you use the Thought Machine Istio release, which is specifically built for use with Vault Core releases for easier maintenance and management.

error

-   We only support the use of Vault Core with Istio service mesh and optionally the Istio CNI for added security. While Vault Core can run without Istio being installed, Thought Machine does NOT support a Vault Core installation setup without the Istio service mesh and does NOT support using Vault Core with a different service mesh.
    
-   When using Istio with a CNI plugin, we support only the Istio CNI plugin released by the Istio project for a given version.
    

## [](#why_we_support_istio_with_vault "Copy link to heading")Why we support Istio with Vault

Istio is more complex than other available service meshes; however, its controls make it possible to use a specific subset of features without additional complexity. This allows us to harness a particular feature of Istio to address a specific challenge without needing to enable other features, which makes it a manageable solution.

The tooling for the installation and configuration of Istio is mature and enables smooth upgrades without requiring major changes. Another advantage is the broad range of controls on traffic management which allow for optimisation in distributed systems like Vault Core, which are geared towards scale and handling high traffic.

## [](#about_the_istio_installation_process "Copy link to heading")About the Istio installation process

We ship Istio with every release of Thought Machine Vault Core. This bundled release of Istio uses a Container Network Interface (CNI) plugin which manages the escalated privileges that the Istio init container `istio-init` requires.

info

From Vault Core 5.5 onwards, we ship the Thought Machine Istio package as a separate release, which allows us to provide security and bug fixes more efficiently, and independently of Vault Core.

warning

Istio stores a self-signed root CA cert in a Kubernetes secret. In order to ensure security, please ensure that you have [etcd encryption enabled](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start#additional_considerations_for_secret_storage).

### [](#using_the_vault_core_release_to_install_istio "Copy link to heading")Using the Vault Core release to install Istio

When installing Istio with the Vault Installer, configuration interface of the bundled Istio is intentionally limited to certain features that are related to Vault Core services for simplicity of setup, such as authentication policy and proxy inclusion/exclusion CIDR/port settings.

As part of the installation process, target namespaces are assigned Istio labels to bring them into the service mesh. Then our `webhook-operator` is deployed as a prerequisite component to Vault Core which ensures pods in the service mesh are created with the configured inclusion/exclusion CIDR/port settings with regards to the outgoing traffic from the pod. The webhook is also used for annotating Vault-internal Kubernetes services to be exported to other namespaces only if needed. In future, this webhook may perform additional similar dynamic configuration changes.

See [Installing or upgrading Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) for general information about installing components.

info

When Istio is installed using the Vault Core release, it installs the Istio Ingress Gateway by default which creates a Kubernetes service of type `LoadBalancer`. This version of the Istio Ingress Gateway only exists for backwards compatibility; it is no longer supported and will be removed in a future Vault Core release. For security reasons, we recommend disabling this deployment by setting `istio.ingress.enabled: "false"` in the `values.yaml` file when installing the `istio` component.

The Istio Ingress Gateway cannot be installed with the standalone Istio release.

### [](#using_the_standalone_release_to_install_istio "Copy link to heading")Using the standalone release to install Istio

In order to more rapidly deliver features and security updates for Istio, we offer the Istio component as a separate release, independent of Vault Core. This standalone release is built specifically for the Vault Core use case, and is guaranteed to be compatible with Vault Core services for all supported versions. See [Certified Environment matrix](/vault-core/5-8/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) for details.

The standalone Istio release is provided as a bundled release file, which is the same format to that of the Vault Core release, and is similarly installed using the TMComponent Operator. For more information, see [Installing or upgrading Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) for general information about installing components.

chat\_bubble

If you are migrating from the Istio release bundled with Vault Core to the standalone release, you can use the same `values.yaml` file as before, with one difference: in the standalone Istio release, the Istio ingress gateway deployment is disabled by default.

## [](#modifications_required_for_using_the_istio_cni "Copy link to heading")Modifications required for using the Istio CNI

error

When installing Istio with the CNI (the default for the Thought Machine Istio package), you must exclude the Hashicorp Vault IP addresses from the service mesh so that the Istio proxy does not intercept communication to Hashicorp Vault. If this is not configured correctly, Hashicorp Vault will not be reachable from Vault services and pods will fail to start up. You can exclude the IP addresses using the `istio.proxy.exclude_cidr` setting in the `values.yaml` file.

Do not exclude the IP addresses of other Kubernetes services from the service mesh. You could consider configuring a distinct subnet for Hashicorp Vault so that you can exclude the subnet CIDR ranges with confidence that this will exclude only HashiCorp Vault from the service mesh.

chat\_bubble

When draining the Kubernetes nodes in a cluster on which an instance of Vault Core using Istio with the CNI is installed, you must carry out the following steps in order to successfully scale the deployments back up:

-   Remove the `istio-annotation-tm-webhook` label from the Vault namespace
    
-   Scale back up the `istio-annotation-tm-webhook` deployment and wait for it to become ready
    
-   Add the `istio-annotation-tm-webhook` label to the Vault namespace
    
-   Scale all other deployments back up
    

## [](#how_we_use_istio_features_with_vault "Copy link to heading")How we use Istio features with Vault

### [](#out_of_the_box_features "Copy link to heading")Out-of-the-box features

Istio comes with a number of features. By having Thought Machine Vault Core workloads in the Istio service mesh, we receive those features by default (\`out of the box').

We use the following features \`out of the box':

-   *mutual TLS (mTLS) interservice communications*: Vault Core services inside the service mesh are configured with strict mTLS enabled by default, which secures the communication between services.
    
-   *HTTP, HTTP/2, and gRPC load balancing*: Vault Core services make use of gRPC (Google Remote Procedure Call) communications internally. It is possible to offload the load balancing of these to the high-performing Istio Envoy using simple name settings in Kubernetes service of workloads.
    

### [](#customised_features_for_service_traffic_management "Copy link to heading")Customised features for service traffic management

-   *Fine-grained timeouts and retries*: Leveraging the Istio Virtual Services, each Vault Core service is configured with an appropriate request timeout and retry amount for each RPC (Remote Procedure Call). This configuration does not require code changes to how clients communicate with a given Vault Core service.
    
-   *Traffic policy*: Using the Istio Destination Rule, the default traffic policy is for Vault Core services ensures that incoming requests must be with Istio mutual TLS enabled.
    

For all of the above, Vault Core microservices benefit greatly from these features not being handled in code; instead, the responsibilities are delegated to a fully transparent sidecar. This also ensures consistent behaviour across the different programming languages that we use.

## [](#using_custom_ca_certificates_with_istio "Copy link to heading")Using custom CA certificates with Istio

warning

This configuration for setting up Istio is optional. It requires some knowledge of Certificate Authority signing, and will cause some (10-15 minutes) downtime if enabled on a previously existing Vault Core instance. Proceed with care.

info

This information only applies to Thought Machine’s standalone Istio version 1.1 and greater. If you are using the legacy bundled TM Istio, or standalone Istio version 1.0 or previous, this feature is not available. If you are using your own Istio, the responsibility for configuring custom certificates is with you.

By default, Istio uses an automatically generated self-signed certificate to sign mTLS communication between pods. While this works, the [Istio documentation](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/#plug-in-certificates-and-key-into-the-cluster) also allows using custom certificates.

### [](#prerequisites "Copy link to heading")Prerequisites

To set up custom certificates for Istio mTLS, you will need a certificate that is able to sign other certificates. The Istio documentation recommends using an intermediate certificate to help keep the root certificate secure. The certificate bundle required by Istio to use this feature consists of the following files: - `ca-cert.pem`: the intermediate certificate public key - `ca-key.pem`: the intermediate certificate private key - `root-cert.pem`: the root certificate private key - `cert-chain.pem`: the chain of keys (intermediate and root)

### [](#installation "Copy link to heading")Installation

First, create a generic Kubernetes secret in the `tm-system` namespace, containing the keys mentioned in the previous section. The secret can be named as you choose, but the keys must match the files exactly. Using kubectl, this would be done with the following command: `kubectl -n tm-system create secret generic my-custom-ca --from-file=cert-chain.pem --from-file=ca-cert.pem --from-file=ca-key.pem --from-file=root-cert.pem`

Then, update the `values.yaml` file for Vault, adding the key `istio.custom_ca.secret_name`, with the value of the secret you just created.

Then install Vault as you would usually, and the certificate will be copied to the namespace you are deploying Istio to (the default is `istio-system`) as a secret named `cacerts`. For a fresh installation of Vault, the `istiod` pods will pick up this certificate when they are deployed, and the cert will be used for mTLS. No further manual steps should be necessary.

### [](#migration_plan_for_existing_vault_installs "Copy link to heading")Migration plan for existing Vault installs

error

This will induce downtime (10-15 minutes on our test environment, although this may scale up with instance size).

If you are already running an instance of Vault, changing the certs will involve some disruption.

First, although the `cacerts` secret will be created in the Istio namespace, the `istiod` pods may not pick up the new certs and start signing with them. Running `vaultctl restart --namespace=<istio namespace>` will forcibly roll the `istiod` pods, causing them to pick up the new certs.

Second, once the `istiod` pods pick up the new certs, existing Vault pods will begin emitting mTLS errors, as they will still be using the old certificate, which will fail to authenticate with the new `istiod` pods. To solve this, run `vaultctl restart --namespace=<vault namespace>` to forcibly redeploy all vault pods. This will cause some turbulence (10-15 minutes in our testing environment, but this may scale with instance size) as all the pods roll, but once Vault has successfully redeployed, its pods will be using the new custom CA certificate.

## [](#download_istio_releases "Copy link to heading")Download Istio releases

### [](#supported_releases "Copy link to heading")Supported releases

The following table lists the versions of Istio that we currently support. Each version of Istio we release corresponds to a version from the open-source release. Unless indicated otherwise, all supported versions of Istio are compatible with supported versions of Vault Core.

  
| TM Istio version | Open-source Istio version | Download link |
| --- | --- | --- |
| 
tm-istio-1.5.1

 | 

1.28.3

 | 

Download tm-istio-1.5.1 download

 |
| 

tm-istio-1.4.2

 | 

1.27.5

 | 

Download tm-istio-1.4.2 download

 |
| 

tm-istio-1.3.5

 | 

1.26.8

 | 

Download tm-istio-1.3.5 download

 |
| 

tm-istio-1.2.3

 | 

1.25.5

 | 

Download tm-istio-1.2.3 download

 |