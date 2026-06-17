---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault"
title: "Configuring Istio service mesh with Vault"
scraped_at: "2026-06-17T04:57:46.996Z"
images: 0
---

# Configuring Istio service mesh with Vault

Bank-hosted

In a distributed system like Vault Core, a service mesh is crucial to help manage interservice communication, as well as incoming and outgoing traffic to and from the cluster.

Vault Core supports *Istio* as its compatible service mesh solution. You can install Istio using one of the following options:

-   Using the [Thought Machine Istio release](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#thought_machine_istio_release) to install an on-cluster Istio component that leverages the Istio container network interface (CNI) - this is our recommended option.
    
-   Using a [client-provided Istio](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#client_provided_istio) component that uses either the `istio-init` container or Istio CNI for traffic interception - in this case, the [Istio CNI](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#modifications_required_for_using_the_istio_cni) is strongly recommended.
    

info

While we support using a client-provided Istio service mesh, we strongly recommend that you use the [Thought Machine Istio release](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#download_istio_releases), which is specifically built for use with Vault Core releases for easier maintenance and management.

From Vault Core 5.5 onwards, Thought Machine Istio is available as either a standalone release or bundled with the Vault Core release. For Vault Core 5.4 and earlier, Istio is only available bundled with the Vault Core release.

error

Although Vault Core can run without Istio being installed, Thought Machine does **not** support a Vault Core installation setup without the Istio service mesh and does **not** support using Vault Core with a different service mesh. We only support the use of Vault Core with Istio service mesh, and optionally the Istio CNI for added security.

## [](#download_istio_releases "Copy link to heading")Download Istio releases

The table lists the versions of the Thought Machine-released Istio that we currently support, each corresponding to a version from the open-source release. Unless indicated otherwise, all versions listed here are compatible with supported versions of Vault Core.

If using your own Istio component, see the [Certified Environment Matrix](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#istio) to check the compatibility of the open-source Istio release with Vault Core.

  
| TM Istio version | Open-source Istio version | Download link |
| --- | --- | --- |
| 
tm-istio-1.5.2

 | 

1.28.5

 | 

Download tm-istio-1.5.2 download

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

## [](#how_vault_core_uses_istio "Copy link to heading")How Vault Core uses Istio

By having Vault Core workloads in the Istio service mesh, your Vault Core deployment receives the following Istio features by default:

-   *Mutual transport layer security (mTLS) interservice communications*: Vault Core services inside the service mesh are configured with strict mTLS enabled by default, which secures the communication between services.
    
-   *HTTP, HTTP/2, and gRPC load balancing*: Vault Core services make use of Google Remote Procedure Call (gRPC) communications internally. It is possible to offload the load balancing of these to the high-performing Istio Envoy using simple name settings in Kubernetes service of workloads.
    

The following features are customised for service traffic management in Vault Core:

-   *Fine-grained timeouts and retries*: Leveraging the Istio Virtual Services, each Vault Core service is configured with an appropriate request timeout and retry amount for each remote procedure call (RPC). This configuration does not require code changes to how clients communicate with a given Vault Core service.
    
-   *Traffic policy*: Using the Istio Destination Rules, the default traffic policy for Vault Core services ensures that incoming requests must be with Istio mTLS enabled.
    

For all of the above, Vault Core microservices benefit greatly from these features not being handled in code; instead, the responsibilities are delegated to a fully transparent sidecar. This also ensures consistent behaviour across the different programming languages in use.

## [](#thought_machine_istio_release "Copy link to heading")Thought Machine Istio release

Thought Machine’s Istio package is shipped in two ways:

-   Bundled with every release of Vault Core
    
-   As a standalone release (from Vault Core 5.5 onwards)
    

For Vault Core 5.5 and above, you can use either the bundled or standalone Istio release.

### [](#using_the_vault_core_release "Copy link to heading")Using the Vault Core release

Istio is shipped with every release of Vault Core. This bundled release of Istio uses a container network interface (CNI) plugin which avoids the escalated privileges that the Istio init container `istio-init` requires.

When installing Istio with the TMComponent Operator, the configuration interface of the bundled Istio is intentionally limited to certain features that are related to Vault Core services for simplicity of setup, such as authentication policy and proxy inclusion/exclusion CIDR/port settings.

As part of the installation process, you must assign Istio labels to target namespaces to bring them into the service mesh. Then, you must deploy the `webhook-operator` component as a prerequisite component of Vault Core, which ensures pods in the service mesh are created with the configured inclusion/exclusion CIDR/port settings with regards to the outgoing traffic from the pod.

The `webhook-operator` is also used for annotating Vault-internal Kubernetes services to be exported to other namespaces (only if required). In future, this webhook may perform additional similar dynamic configuration changes.

info

When Istio is installed using the Vault Core release, it installs the Istio Ingress Gateway by default which creates a Kubernetes service of type `LoadBalancer`. This version of the Istio Ingress Gateway only exists for backwards compatibility; it is no longer supported and will be removed in a future Vault Core release. For security reasons, we recommend disabling this deployment by setting `istio.ingress.enabled: "false"` in the `values.yaml` file when installing the `istio` component.

The Istio Ingress Gateway cannot be installed with the standalone Istio release.

### [](#using_the_standalone_release "Copy link to heading")Using the standalone release

From Vault Core 5.5 onwards, Istio is also offered as a separate release, independent of Vault Core. This standalone release is built specifically for use with Vault Core, and enables us to more rapidly deliver features and security updates for Istio. It is guaranteed to be compatible with Vault Core services for all supported versions.

The standalone Istio release is provided as a [bundled release file to download](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#download_istio_releases). It is the same format as the Vault Core release, and is similarly installed using the TMComponent Operator.

chat\_bubble

If you are migrating from the Istio release bundled with Vault Core to the standalone release, you can use the same `values.yaml` file as before, with one difference: in the standalone Istio release, the Istio ingress gateway deployment is disabled by default.

## [](#client_provided_istio "Copy link to heading")Client-provided Istio

If you are using your own Istio component, you will need to manually install it. Before installing, check that you have met the following prerequisites:

-   The sidecarInjectorWebhook **must** rewrite the AppHTTPProbe. Set the `sidecarInjectorWebhook.rewriteAppHTTPProbe` installation option to `true`.
    
-   The use\_remote\_address HTTP connection manager property in Istio-proxy **must** be enabled. Set the `pilot.env.PILOT_SIDECAR_USE_REMOTE_ADDRESS` installation option to `true`.
    
-   Istio **must not** merge Envoy metrics with application metrics and overwrite Prometheus annotations. Set the `meshConfig.enablePrometheusMerge` installation option to `false`.
    
-   You must use a standard Istio injection label, either `istio-injection` or `istio.io/rev`.
    

Use the [Certified Environment matrix](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault#istio) to check the compatibility of your Istio release with Vault Core.

## [](#installing_istio "Copy link to heading")Installing Istio

warning

Istio stores a self-signed root CA cert in a Kubernetes secret. To ensure security, make sure you have [etcd encryption enabled](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements#further_considerations).

error

If you are installing Vault Core for use with the Istio CNI, you **must** exclude the secrets manager from the service mesh. See [Modifications required for using the Istio CNI](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#modifications_required_for_using_the_istio_cni) for instructions on how to do this. If this is not configured correctly, the secrets manager will be unreachable from Vault Core services and pods will be unable to start up.

The following instructions go through how to install either Thought Machine Istio or client-provided Istio for use with Vault Core. See also the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) for general information about installing components.

chat\_bubble

In the example commands below, `<vault_namespace>` denotes Vault Core’s namespace. You should replace this with the Kubernetes namespace in which you are deploying your Vault Core instance.

Thought Machine Istio Client-provided Istio

To install Thought Machine’s Istio release (either bundled or standalone), use the TMComponent Operator provided in the Vault Core release package.

1.  Run `./vaultctl init-operators` to deploy the role-based access control (RBAC) required for an Istio installation. Check that the `install-istio` `ServiceAccount`, `ClusterRole` and `ClusterRoleBinding` resources have been deployed. The names of these resources will match the flags given to `init-operators`, or the defaults if not given.
    
2.  Run `vaultctl install` to install the Thought Machine Istio component. The CNI is always reinstalled and reconfigured in-place, regardless of the currently installed version of the CNI. However, the control plane depends on the version of the control plane currently installed:
    
    -   If a control plane with the same major and minor version is already installed, then it will be reinstalled and reconfigured in-place.
        
    -   If a control plane with a different major or minor version is already installed, then a new control plane version will be installed, leaving the existing one as is.
        
    
3.  To ensure that new configuration is applied to the Istio control plane, restart all pods within the `istio-system` namespace:
    
    lightbulb
    
    We recommend that you install the Istio component each time you deploy a new Vault Core version, to ensure that any updates to Istio are deployed.
    
4.  Once the Istio installation has completed, we recommend that you delete the `ClusterRole` and `ClusterRoleBinding` resources.
    
5.  Label the Vault Core namespace to use `istio-annotation-tm-webhook`:
    
6.  Remove any previous labels for Istio injection, as these may be invalid:
    
7.  Label the Vault Core namespace with the appropriate Istio version for injection. The Istio version shipped with Vault Core makes use of the Istio CNI by default and should be enabled with the `istio.io/rev=canary-<version>` label.
    
    The following example uses the `istio.io/rev=canary-v1-17` label for injection:
    
    chat\_bubble
    
    When installing Vault Core, the existence of an injection label is used to determine whether Istio-specific configuration of Vault Core, such as `DestinationRule` and `VirtualService` resources, should be installed.
    
8.  If deploying Istio for the first time against a Vault Core instance, upgrading Istio for an existing Vault Core instance, or applying configuration changes to an existing Istio deployment, you must restart all pods within the service mesh that are required to use that version of Istio.
    
    Restarting the pods ensures proper injection of the Istio proxy with the required configuration:
    

chat\_bubble

Thought Machine’s Istio supports deployment to a namespace other than the `istio-system` namespace. To configure this in the values.yaml file, set the value `istio.namespace` to the namespace of your choice. Use this configuration with care, and only if there is not a running Istio deployment in any other namespace on the cluster.

If Istio is already deployed and running on the cluster, the namespace **must** be the same for all running versions of Istio. If Istio is already running in a different namespace (for example, `istio-system`) and you use this value to deploy a new Istio version to a custom namespace, there will be downtime. Therefore, this setup is **not** supported. If set, the value affects the [Observability and monitoring](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring) stack - to mitigate this, ensure the following requirements are met:

-   A service must exist in the `istio.namespace` namespace and must expose Istio metrics on a port named `http-monitoring`.
    
-   Pods running in the service mesh must expose a container port named `http-envoy-prom` that exposes Envoy metrics.
    

This configuration is generally not required for configuring Vault Core where the default namespace of `istio-system` is sufficient.

Once you have completed the [prerequisite settings](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#client_provided_istio), you can proceed with manually installing your own Istio component:

1.  We recommend running `vaultctl init-operators --exclude-rbac=istio` to prevent the provisioning of RBAC resources for Thought Machine’s Istio, because these are not required when using your own Istio:
    
2.  Label the Vault Core namespace to use `istio-annotation-tm-webhook`:
    
3.  Remove any previous labels for Istio injection, as these may be invalid:
    
4.  Label the Vault Core namespace with one of the standard Istio injection labels - `istio.io/rev` or `istio-injection` - to match the version of Istio installed.
    
    In the example below, replace `<version>` with the version of Istio you are installing:
    
    chat\_bubble
    
    When installing Vault Core, the existence of an injection label is used to determine whether Istio-specific configuration of Vault Core, such as `DestinationRule` and `VirtualService` resources, should be installed.
    
5.  If deploying Istio for the first time against a Vault Core instance, upgrading Istio for an existing Vault Core instance, or applying configuration changes to an existing Istio deployment, you must restart all pods within the service mesh that are required to use that version of Istio.
    
    Restarting the pods ensures proper injection of the Istio proxy with the required configuration:
    

info

For both Thought Machine’s Istio and your own Istio component, you need to exclude your database port when configuring the `vault-core` component. To do so, configure the `istio.proxy.exclude_outbound_ports` setting in the `values.yaml` file for `vault-core`.

This is because Vault Core services use Istio’s Sidecar custom resource definition to list the discoverable upstream resources within the service mesh and restrict traffic to resources outside of the mesh. The port on which Vault Core services will access the Vault Core database must be excluded from the service mesh. If this is not configured correctly, the database server will not be reachable from Vault Core services and functionality of Vault Core will be impaired.

## [](#disable_istio_strict_mtls "Copy link to heading")Disable Istio strict mTLS

By default, Vault Core is configured to use Istio’s `STRICT` mutual transport layer security (mTLS) mode.

If using `STRICT` mode, you must include the ingress controller (if used) within the service mesh as a prerequisite to installing Vault Core, so it can communicate with Vault Core services. If not done, the ingress controller will not be able to connect to the Vault Core services, resulting in an outage. For more information, see [Case Study: Using the Istio Ingress Gateway with Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure//case_study_using_the_istio_ingress_gateway_with_vault_core).

If this is not desirable, you have the option to install Vault Core **without** enabling strict mTLS. To do so, configure the `istio.auth_policy.mtls_mode` value in the `values.yaml` file to set the mTLS mode as `PERMISSIVE`.

Then run the following command to verify that the default mTLS mode in the Vault Core namespace is set to `PERMISSIVE`:

## [](#modifications_required_for_using_the_istio_cni "Copy link to heading")Modifications required for using the Istio CNI

info

When using Istio with a CNI plugin, we support only the Istio CNI plugin released by Istio for a given version of Istio.

If you are installing Istio with the CNI (the default for the Thought Machine Istio package), you must exclude the HashiCorp Vault IP addresses from the service mesh to ensure that the Istio proxy does not intercept communication to HashiCorp Vault.

To exclude the IP addresses, use the `istio.proxy.exclude_cidr` setting in the `values.yaml` file.

lightbulb

Do not exclude the IP addresses of other Kubernetes services from the service mesh. Instead, consider configuring a distinct subnet for HashiCorp Vault. This lets you exclude the subnet CIDR ranges with confidence that it will exclude only HashiCorp Vault from the service mesh.

When draining the Kubernetes nodes in a cluster where a Vault Core instance using Istio with the CNI is installed, the `istio-annotation-tm-webhook` deployment is scaled down. However, subsequent requests from the Kubernetes API to create new pods will fail.

To avoid this, you must carry out the following steps to successfully scale the deployments back up:

-   Remove the `istio-annotation-tm-webhook` label from the Vault Core namespace.
    
-   Scale back up the `istio-annotation-tm-webhook` deployment and wait for it to become ready.
    
-   Add the `istio-annotation-tm-webhook` label to the Vault Core namespace.
    
-   Scale all other deployments back up.
    

## [](#generating_new_self_signed_certificates_for_istio "Copy link to heading")Generating new self-signed certificates for Istio

If you are using the Istio self-signed certificates (which Thought Machine’s Istio release does by default), and have never checked or extended the expiration of the root certificate (see the following note), you may need to generate a new self-signed certificate.

chat\_bubble

Istio’s self-signed certificates generate a root cert with an expiry date 10 years in the future. An unexpected expiry of the root cert could cause downtime - therefore, you must check the validity of the certificate here.

Run the following command to check that the root self-signed CA certificate of Istio has not expired, or is not close to expiry:

If it has expired or is close to expiry, follow the instructions to create a new Istio self-signed certificate:

1.  Delete the existing certificate stored in the Istio namespace (`istio-system` by default):
    
2.  Perform a rollout restart of `istiod` to generate a new Istio self-signed certificate:
    
3.  After the restart of `istiod`, check that the new certificate is valid by [running the previous command](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#generating_new_self_signed_certificates_for_istio) to check its expiration.
    

## [](#using_custom_ca_certificates_with_istio "Copy link to heading")Using custom CA certificates with Istio

warning

This configuration for setting up Istio is optional. It requires some knowledge of Certificate Authority (CA) signing, and will cause some downtime (around 10-15 minutes) if enabled on a previously existing Vault Core instance.

info

This information only applies to Thought Machine’s standalone Istio version 1.1 and greater. If you are using the bundled TM Istio, or standalone Istio version 1.0 or earlier, this feature is not available. If you are using your own Istio, you are responsible for configuring custom certificates.

By default, Istio uses an automatically generated self-signed certificate to sign mTLS communication between pods. While this works, the [Istio documentation](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/#plug-in-certificates-and-key-into-the-cluster) also allows using custom certificates.

### [](#prerequisites "Copy link to heading")Prerequisites

To set up custom certificates for Istio mTLS, you need a certificate that is able to sign other certificates. The [Istio documentation](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/) recommends using an intermediate certificate to help keep the root certificate secure. The certificate bundle required by Istio to use this feature consists of the following files:

-   `ca-cert.pem`: the intermediate certificate public key
    
-   `ca-key.pem`: the intermediate certificate private key
    
-   `root-cert.pem`: the root certificate private key
    
-   `cert-chain.pem`: the chain of keys (intermediate and root)
    

### [](#installation "Copy link to heading")Installation

1.  Create a generic Kubernetes secret in the `tm-system` namespace, containing the [required keys mentioned above](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#prerequisites). You can name the secret as you like, but the keys must match the files exactly.
    
    Use `kubectl` to run the following command to create a generic Kubernetes secret:
    
2.  Update the values.yaml file for your Vault Core instance to add the key `istio.custom_ca.secret_name` with the value of the secret you just created.
    
3.  [Install Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#install) as you would usually. The certificate will be copied to the namespace you are deploying Istio to (the default is `istio-system`) as a secret named `cacerts`.
    
    For a fresh installation of Vault Core, the `istiod` pods will pick up this certificate when they are deployed, and the cert will be used for mTLS. No further manual steps should be necessary.
    

### [](#migration_plan_for_existing_vault_core_installations "Copy link to heading")Migration plan for existing Vault Core installations

error

Redeploying Vault Core pods will induce downtime (10-15 minutes on our test environment, although this may scale up with instance size).

If you are already running an instance of Vault Core, changing the certificates will involve some disruption:

 
| Problem | Solution |
| --- | --- |
| 
Although the `cacerts` secret will be created in the Istio namespace, the `istiod` pods may not pick up the new certs and start signing with them.

 | 

Run `vaultctl restart --namespace=<istio_namespace>` to forcibly roll the `istiod` pods, causing them to pick up the new certs.

 |
| 

Once the `istiod` pods pick up the new certs, existing Vault Core pods will begin emitting mTLS errors. This is because they will still be using the old certificate, which will fail to authenticate with the new `istiod` pods.

 | 

Run `vaultctl restart --namespace=<vault_namespace>` to forcibly redeploy all Vault Core pods. This will cause some downtime as all the pods roll, but once Vault Core has successfully redeployed, its pods will be using the new custom CA certificate.

 |

## [](#removing_istio_control_planes "Copy link to heading")Removing Istio control planes

chat\_bubble

This section applies only for clients using Thought Machine-shipped Istio.

You should remove older Istio control plane versions if they are no longer active.

### [](#check_if_a_control_plane_version_is_active "Copy link to heading")Check if a control plane version is active

To check if the control plane version you want to remove is no longer active, run:

In the example command, replace `<revision>` with the name of the control plane version. This is the suffix that follows `istiod-` in the name of the control plane deployment (for example, `canary-v1-23`).

If there are any results returned for a query, you cannot remove this Istio version until you have manually migrated the matched namespaces to a newer version of Istio.

### [](#remove_an_old_istio_control_plane_version "Copy link to heading")Remove an old Istio control plane version

To thoroughly remove all resources corresponding to old versions of the Istio control plane, use the Istio command line utility [istioctl](https://istio.io/latest/docs/reference/commands/istioctl/).

chat\_bubble

You should use the same minor version of `istioctl` as the version you are removing. For example, if you are removing the revision `canary-v1-23`, you should use `istioctl` version `1.23.X`, where `X` is the latest patch available.

1.  Perform a dry-run of the uninstall to confirm the resources to be deleted.
    
2.  Confirm that the resources listed in the output matches the Istio control plane version you expect. If there are running proxies connected to the control plane to be removed, `istioctl` will show a warning.
    
3.  Execute the removal by running the command:
    
4.  Check that the removal process is complete by either starting a new pod on the cluster, or deleting an existing pod somewhere and ensuring it can come back as required.