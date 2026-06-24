---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack"
title: "Setting up the Observability Stack"
scraped_at: "2026-06-22T19:14:05.602Z"
images: 0
---

# Setting up the Observability Stack

Bank-hosted

The Observability Stack is a [required component](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements) of Vault Core. It allows you to view and observe the status of Vault Core using metrics, dashboards, and alerts. Additionally, it is required for autoscaling Vault Core workloads, as well as providing data about your Vault Core environment if you require support from Thought Machine.

You must install the Observability Stack before you install Vault Core or any other component. Similarly, if you are upgrading Vault Core, you need to first upgrade the Observability Stack. Use the [Deployment tools and resources](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools) to ensure that components are installed in the correct order.

This guide goes through:

-   Checking the [resource requirements](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#observability_stack_resource_requirement) and [prerequisites](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#prerequisites) are in place
    
-   [Configuring the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#configuring_the_observability_stack) in your `values.yaml` file
    
-   [Installing the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#installing_the_observability_stack) and [checking your installation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#checking_your_observability_stack_installation)
    

## [](#before_you_start "Copy link to heading")Before you start

### [](#observability_stack_resource_requirements "Copy link to heading")Observability Stack resource requirements

Before installing the Observability Stack, you must have the following available:

-   14 vCPUs
    
-   36 GB of memory
    
-   285 GB of SSD storage (gp2 or pd-ssd)
    
-   Kubernetes nodes provisioned in three separate availability zones
    
-   Kubernetes nodes capable of up to 10Gbps or greater network performance
    

chat\_bubble

These are the requirements when running one replica of each Prometheus instance. Resources will double or triple when [setting the number of replicas](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#observability_cluster_prometheus_replicas) to two or three.

### [](#prerequisites "Copy link to heading")Prerequisites

In addition to meeting the Observability Stack resource requirements, check if any of the following scenarios apply to you. If they do, then you must follow the advice associated with the scenario before you install, upgrade, or configure the Observability Stack component.

 
| Scenario | Required action |
| --- | --- |
| 
Upgrading to Vault Core 4.x to 5.x

 | 

You must have completed the upgrade and installation steps provided separately by Thought Machine. You must upgrade to a supported 5.x version from 4.7. If you are unsure, contact Thought Machine for advice. See: [Upgrading Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core).

 |
| 

Observability Stack is not installed

 | 

See: [Configuring the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#configuring_the_observability_stack).

 |
| 

Installing Vault on OpenShift

 | 

See: [Installing Vault on OpenShift](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#installing_vault_core_on_openshift_and_verifying_compatibility).

 |
| 

Installing Vault Core in more than one namespace in a cluster

 | 

When installing Vault Core in more than one namespace in a cluster (multiple Vault Core installations, such as development and staging) you must install the `observability` component each time you install the `vault-core` component to ensure that the namespaced observability resources are fully configured.

Make sure the `vaultctl` command for installing the `observability` component has the same `-v` (values file) and `-o` (namespace translation) flags as when installing the `vault-core` component.

 |

#### [](#installing_vault_core_on_openshift_and_verifying_compatibility "Copy link to heading")Installing Vault Core on OpenShift and verifying compatibility

If you plan to install Vault Core on OpenShift, you must first verify compatibility between the versions of each of the following that you intend to use:

-   Vault Core
    
-   OpenShift (with Vault Core)
    
-   Prometheus (with OpenShift)
    

1.  Check that your version of OpenShift is compatible with the release of Vault Core you are installing or upgrading to. See [Certified Environment for Vault](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) for version compatibility information.
    
2.  Ensure that the **custom metrics for autoscaling** Technology Preview feature is NOT enabled. For more information, see [Exposing custom application metrics for autoscaling](https://docs.openshift.com/container-platform/4.7/monitoring/exposing-custom-application-metrics-for-autoscaling.html).
    
3.  Check that the version of `prometheus-operator` (Prometheus Operator) in your cluster is compatible with the version of OpenShift you plan to use - see the [OpenShift Support version matrix for monitoring components](https://docs.openshift.com/container-platform/4.15/observability/monitoring/configuring-the-monitoring-stack.html).
    
4.  Once you have verified that your versions of Vault Core, OpenShift, and Prometheus are compatible, you can then [configure](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#configuring_the_observability_stack) and [install the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#installing_the_observability_stack).
    

warning

If the version of `prometheus-operator` in your cluster does not meet the criteria stated here, contact Thought Machine for advice.

#### [](#firewall_rules_for_regional_gke_google_kubernetes_engine_clusters "Copy link to heading")Firewall rules for Regional GKE (Google Kubernetes Engine) clusters

You MUST add a firewall rule that allowlists port TCP 6443 from control plane to nodes and pods. This allows Kubernetes to connect to the Prometheus Adapter and read the custom metrics that are referenced in some Horizontal Pod Autoscalers in Vault Core.

For information about how to add the firewall rule, refer to the following external guides:

-   [Adding firewall rules for specific use cases](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules): how to create a private cluster (official Google Kubernetes Engine documentation).
    
-   [Example implementation of adding a port to an allow list](https://github.com/terraform-aws-modules/terraform-aws-eks/pull/2399): note that this is an example implementation from a third party of adding the `prometheus-adapter` port to the recommended security groups (terraform-aws-eks on GitHub).
    

chat\_bubble

This firewall rule is a requirement of the open source `prometheus-adapter` for the GKE Regional cluster.

## [](#configuring_the_observability_stack "Copy link to heading")Configuring the Observability Stack

### [](#overview "Copy link to heading")Overview

To configure the Observability Stack, complete the following steps:

1.  Set your preferred observability configuration in the `values.yaml` file. See [observability configuration in values.yaml](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#observability_configuration_in_values_yaml) for a list of all the available values.
    

For more general information about the `values.yaml` file and installing Vault Core, see the [TMComponent Operator Guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide).

2.  Set the values required for your secrets manager configuration in `values.yaml` and add secrets to your secrets manager. This step is only required if you are installing Vault Core for the first time. Vault Core supports the following secrets managers:
    
    -   HashiCorp Vault (all active Vault Core versions)
        
    -   Amazon Secrets Manager (from Vault Core 4.6 onwards)
        
    -   Microsoft Azure Key Vault (from Vault Core 5.2 onwards)
        
    

For more information about configuring your secrets manager and adding secrets, refer to the following documentation:

-   [Configuring a secrets manager in Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault) and [Additional considerations for secret storage](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements#additional_considerations_for_secret_storage): Thought Machine documentation that includes information about the values to use for configuring your preferred supported secrets manager.
    
-   The official documentation provided by your secrets manager - see the following external links:
    
    -   [Prometheus Alertmanager configuration](https://prometheus.io/docs/alerting/latest/configuration/): how to configure Alertmanager
        
    -   [Find secrets in AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html): for clients using AWS Secrets Manager
        
    -   [Set and retrieve a secret from Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-cli): for clients using Microsoft Azure Key Vault secrets manager
        
    

Here is an example secrets manager configuration for HashiCorp Vault:

  
| Secret path | Key | Description and example |
| --- | --- | --- |
| 
`{SECRET_PREFIX}/grafana`

 | 

`GF_SECURITY_ADMIN_PASSWORD_env`

 | 

Grafana admin account password. Example: `'pnElsa"i)("DU9#4'`

 |
| 

`{SECRET_PREFIX}/alertmanager`

 | 

`SLACK_API_URL_env`

 | 

The URL for a Slack Incoming Webhook - use this if you want to send alerts from Alertmanager to Slack. If not, set this to an empty string. Example: `[https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX](https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX)` or `""`

 |

### [](#observability_configuration_in_values_yaml "Copy link to heading")Observability configuration in values.yaml

error

You must install the Observability Stack in a different namespace to Vault Core and exclude the namespace where you install monitoring from Istio service mesh. Otherwise, it could cause a clash between resources.

You can set the following values in your `values.yaml` file to configure the Observability Stack. If you are upgrading Vault Core, you should use the same file, including any custom configurations you have set:

#### [](#observability_monitoring_namespace "Copy link to heading")observability.monitoring\_namespace

 
| Description | Example value |
| --- | --- |
| 
Kubernetes namespace to which the Observability Stack is deployed.

 | 

`tm-monitoring`

 |

#### [](#observability_alertmanager_config_yml "Copy link to heading")observability.alertmanager.config\_yml

 
| Description | Example value |
| --- | --- |
| 
Alertmanager configuration. The [schema is available on the Prometheus website](https://prometheus.io/docs/alerting/latest/configuration/). Configure Alertmanager according to your organisation’s incident management process and ensure your configuration has a routing tree with a default receiver.

 | 

See: [Alertmanager example configurations](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#alertmanager_example_configurations)

 |

#### [](#observability_alertmanager_storageclass "Copy link to heading")observability.alertmanager.storageclass

 
| Description | Example value |
| --- | --- |
| 
Kubernetes Storage Class for Alertmanager persistent volumes.

 | 

`general-encrypted`

 |

chat\_bubble

Kubernetes storage classes are immutable objects. Kubernetes does not allow seamless changes to the schema; clients must manage the migration of storage classes.

#### [](#observability_alertmanager_replica_persistent_storage_size "Copy link to heading")observability.alertmanager.replica\_persistent\_storage\_size

 
| Description | Example value |
| --- | --- |
| 
Desired size for the persistent volume attached to each Alertmanager replica, in Gi units. Note that changing this value only updates the StatefulSet. To update volumes that you have already created, refer to the [Kubernetes documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/volume-expansion).

 | 

`1Gi`

 |

#### [](#observability_cluster_name "Copy link to heading")observability.cluster\_name

 
| Description | Example value |
| --- | --- |
| 
Cluster name used in the Prometheus and Alertmanager configuration.

 | 

`cluster_csp_identifier`

 |

#### [](#metrics_exporters_otlp_endpoint "Copy link to heading")metrics.exporters.otlp\_endpoint

 
| Description | Example value |
| --- | --- |
| 
The target endpoint for exporters to send **metrics** via the OpenTelemetry Protocol (OTLP) in gRPC format. Your existing **metrics** collector must support the OTLP standard `otlp-grpc` format. This value implicitly disables **OTLP GRPC metrics export** if unset.

Note: Not all observability platforms support all types of OTLP metrics. Depending on the platform, you may see warning logs of rejected unsupported metrics. Metrics are shipped with delta temporality. See: [opentelemetry.io](https://opentelemetry.io/) and [OpenTelemetry Protocol Exporter information](https://opentelemetry.io/docs/specs/otel/protocol/exporter/) (external links)

 | 

`my-otel-collector-service.my-otel-collector-namespace.svc.cluster.local:4317`

 |

#### [](#metrics_exporters_otlp_http_config "Copy link to heading")metrics.exporters.otlp\_http\_config

 
| Description | Example value |
| --- | --- |
| 
The target endpoint for exporters to send **metrics** via the OpenTelemetry Protocol (OTLP) in HTTP format. Your existing **metrics** collector must support the OTLP standard `otlp-http` format. This value implicitly disables **OTLP HTTP metrics export** if unset. The root key must be `otlphttp/metrics` and the configuration must contain an `endpoint` key.

Note: Not all observability platforms support all types of OTLP metrics. Depending on the platform, you may see warning logs of rejected unsupported metrics. Metrics are shipped with delta temporality. See: [opentelemetry.io](https://opentelemetry.io/) and [OpenTelemetry Protocol Exporter information](https://opentelemetry.io/docs/specs/otel/protocol/exporter/) (external links)

 | 

```
otlphttp/metrics:
    endpoint: "https://{your-activegate-domain}:9999/e/{your-environment-id}/api/v2/otlp"
    headers:
        Authorization: "Api-Token <your-api-token>"
```






 |

#### [](#observability_cluster_prometheus_remote_write "Copy link to heading")observability.cluster\_prometheus.remote\_write

 
| Description | Example value |
| --- | --- |
| 
Allows you to configure Vault to send Thought Machine metrics to an external service, which you manage, that supports the Prometheus `remote_write` [specification](https://prometheus.io/docs/concepts/remote_write_spec/). See also: `observability.namespaced_prometheus.remote_write`

Default: Not enabled by default.

Value:

-   Expected: A list of remoteWrite configurations for cluster-level Prometheus instances. Refer to the Prometheus Operator documentation on RemoteWriteSpec.
    
-   Type: `array`
    





 | 

`- {'url': 'http://localhost:8080/write', 'remoteTimeout': '2m', 'writeRelabelConfigs': [{'action': 'keep', 'sourceLabels': ['*name*'], 'regex': '.+'}]}`

 |

chat\_bubble

For more information, refer to the latest Prometheus release documentation for [RemoteWrite configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) and Prometheus Operator GitHub documentation for the [Prometheus Spec](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) and [RemoteWriteSpec](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#monitoring.coreos.com/v1.RemoteWriteSpec). If you want to retain and have the ability to recover your metrics in case of a disaster recovery (DR) scenario, you could include the RemoteWrite feature as part of your DR process. You will need to establish your own process that takes into consideration your business continuity needs. Alternatively, if you are considering backing up Prometheus instances, the Prometheus website provides some related information that you may find helpful (for example, [Prometheus → 2.45 (LTS) → Storage](https://prometheus.io/docs/prometheus/2.45/storage/)).

#### [](#observability_cluster_prometheus_replicas "Copy link to heading")observability.cluster\_prometheus.replicas

 
| Description | Example value |
| --- | --- |
| 
The number of replicas for Prometheus instances which monitor the Kubernetes cluster. Use `2` or `3` to run Prometheus in High Availability mode.

 | 

`1`, `2`, `3`

 |

#### [](#observability_cluster_prometheus_cardinality_storage_size "Copy link to heading")observability.cluster\_prometheus.cardinality.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Cardinality, in Gi.

 | 

`4Gi`

 |

#### [](#observability_cluster_prometheus_cloud_storage_size "Copy link to heading")observability.cluster\_prometheus.cloud.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Cloud, in Gi.

 | 

`25Gi`

 |

#### [](#observability_cluster_prometheus_istio_storage_size "Copy link to heading")observability.cluster\_prometheus.istio.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Istio, in Gi.

 | 

`25Gi`

 |

#### [](#observability_cluster_prometheus_kubelet_storage_size "Copy link to heading")observability.cluster\_prometheus.kubelet.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for cluster Prometheus Kubelet, in Gi.

 | 

`25Gi`

 |

#### [](#observability_cluster_prometheus_kubernetes_storage_size "Copy link to heading")observability.cluster\_prometheus.kubernetes.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for cluster Prometheus Kubernetes, in Gi.

 | 

`35Gi`

 |

#### [](#observability_cluster_prometheus_retention "Copy link to heading")observability.cluster\_prometheus.retention

 
| Description | Example value |
| --- | --- |
| 
Retention for all cluster Prometheus instances, in days or weeks. Remember to also increase storage sizes when increasing retention.

 | 

`2w`

 |

#### [](#observability_cluster_size "Copy link to heading")observability.cluster\_size

 
| Description | Example value |
| --- | --- |
| 
The size of the cluster that the `observability` TMComponent is monitoring. If there are many Vault Core instances in a cluster or they are large environments, consider using a larger value here. Increasing this value requires more CPU and memory, and increases costs. Thought Machine may advise changing this value in certain cases.

Default value: `medium`, which should match the current resource allocation.

Supported values:

-   `local`
    
-   `small`
    
-   `medium` (default)
    
-   `large`
    
-   `xlarge` (available as of Vault Core 5.3)
    





 | 

`medium`

 |

chat\_bubble

`observability.cluster_size` does not affect observability workloads in the `vault-core` TMComponent. To distribute Vault Core observability workloads across multiple nodes, configure the [common.deployment\_size](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#common_deployment_size) parameter instead.

#### [](#common_deployment_size "Copy link to heading")common.deployment\_size

 
| Description | Example value |
| --- | --- |
| 
Configures the distribution of observability workloads in the `vault-core` TMComponent. The value sets the number of shards provisioned for a Prometheus instance, allowing the appropriate allocation of resources to each shard. Prometheus sharding with `common.deployment_size` is available from Vault Core 5.3+, and only affects `prometheus-db-queries` instances.

Default value: `medium`

Supported values:

-   `medium-large`: 3 shards
    
-   `medium`: 2 shards
    
-   `small-medium`, `small` or `extra-small`: 1 shard
    

For information about its values and how they relate to sizing, refer to the guidance for `common.deployment_size` in your example `values.yaml` file.





 | 

`medium`

 |

chat\_bubble

Previously, this value also defined the number of shards for `prometheus-vault` instances. However, `prometheus-vault` has been replaced by a single unsharded instance of `prometheus-vault-common`, therefore `common.deployment_size` will have no effect on sharding.

error

When scaling down the shards — for example, from `medium-large` to `medium` or from `medium` to `small` — then approximately half of the historical data becomes unavailable. This is because Prometheus terminates the surplus shards. As the default setting for data retention is two weeks, Thought Machine recommends exporting the data in order to retain it. Therefore, you should consider this and take care when configuring `common.deployment_size`, particularly in relation to scaling down the shards.

To retain metrics, you can use either the Prometheus RemoteWrite or the OpenTelemetry Protocol metrics export functionalities. Both allow you to send Thought Machine metrics to a compatible system for long-term storage and management. For more information, see details in this section about [Writing metrics to external storage](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#writing_metrics_to_external_storage).

#### [](#observability_grafana_auth_anonymous_enabled "Copy link to heading")observability.grafana.auth\_anonymous\_enabled

 
| Description | Example value |
| --- | --- |
| 
Defines whether access to Grafana is anonymous.

 | 

`true` (sets access to anonymous), `false` (allows access via the admin account only)

 |

#### [](#observability_grafana_auth_anonymous_org_role "Copy link to heading")observability.grafana.auth\_anonymous\_org\_role

 
| Description | Example value |
| --- | --- |
| 
Role to assign to the organisation in Grafana. Available options: `Viewer` (default) or `Editor` (provides elevated permissions)

 | 

`Viewer`

 |

#### [](#observability_grafana_replica_count "Copy link to heading")observability.grafana.replica\_count

 
| Description | Example value |
| --- | --- |
| 
Set this value if you want to configure replica count for Grafana deployment. Available options:

-   `0`: setting it to `0` will scale down the deployment completely. If you choose this, you MUST ensure that you have set up an external instance of Grafana you will manage yourself
    
-   `1`: this is the default setting
    
-   `2`: setting it to `2` will make the deployment highly available
    

For more information, see [Using Grafana dashboards](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#using_grafana_dashboards) and [Configuring client-managed Grafana for use with Vault dashboards](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#configuring_client_managed_grafana_for_use_with_vault_dashboards).





 | 

`0`, `1` (default), `2`

 |

#### [](#observability_grafana_security_admin_user "Copy link to heading")observability.grafana.security\_admin\_user

 
| Description | Example value |
| --- | --- |
| 
Username of the admin account for Grafana.

 | 

`admin`

 |

#### [](#observability_grafana_config_ini "Copy link to heading")observability.grafana.config\_ini

 
| Description | Example value |
| --- | --- |
| 
Defines a [configuration file](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/enterprise-configuration/) for Grafana. Note that the other Grafana values will override what is in this configuration.

 | 

```
\[enterprise\]
license\_text = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlzIjoiaXMiLCJub3QiOiJhIiwidmFsaWQiOiJsaWNlbnNlIn0.redacted
```

```
\[log\]
mode = console
```

```
\[analytics\]
reporting\_enabled = false
```

```
\[snapshots\]
external\_enabled = false
```






 |

#### [](#observability_ingress_domain "Copy link to heading")observability.ingress.domain

 
| Description | Example value |
| --- | --- |
| 
Domain or subdomain used to template host field in Ingress resources.

 | 

`internal.thoughtmachine.net`

 |

#### [](#observability_ingress_labels "Copy link to heading")observability.ingress.labels

 
| Description | Example value |
| --- | --- |
| 
Kubernetes labels applied to Observability Ingress resources.

 | 

`use-http01-solver: "true"`

 |

#### [](#observability_ingress_monitoring_annotations "Copy link to heading")observability.ingress.monitoring-annotations

 
| Description | Example value |
| --- | --- |
| 
Kubernetes annotations applied to Observability Ingress resources.

 | 

`kubernetes.io/ingress.class: "nginx"`

 |

#### [](#observability_ingress_monitoring_tls_secretname "Copy link to heading")observability.ingress.monitoring\_tls\_secretname

 
| Description | Example value |
| --- | --- |
| 
Allows you to set and use a custom name for the TLS certificate in the monitoring namespace.

 | 

`custom-tls-cert-secretname`

 |

#### [](#observability_namespaced_prometheus_remote_write "Copy link to heading")observability.namespaced\_prometheus.remote\_write

 
| Description | Example value |
| --- | --- |
| 
Allows you to write Thought Machine metrics to an external service, which you manage, that supports the Prometheus `remote_write` [specification](https://prometheus.io/docs/concepts/remote_write_spec/). See also: `observability.cluster_prometheus.remote_write​`

Default value: Defaults to the value of `observability.cluster_prometheus.remote_write`.

Value:

-   Expected: A list of remoteWrite configurations for namespaced Prometheus instances. Refer to the Prometheus Operator documentation on RemoteWriteSpec.
    
-   Type: `array`
    





 | 

`- {'url': 'http://localhost:8080/write', 'remoteTimeout': '2m', 'writeRelabelConfigs': [{'action': 'keep', 'sourceLabels': ['*name*'], 'regex': '.+'}]}`

 |

chat\_bubble

For more information, refer to the latest Prometheus release documentation for [RemoteWrite configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) and Prometheus Operator GitHub documentation for the [Prometheus Spec](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) and [RemoteWriteSpec](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#monitoring.coreos.com/v1.RemoteWriteSpec). If you want to retain and have the ability to recover your metrics in case of a disaster recovery (DR) scenario, you could include the RemoteWrite feature as part of your DR process. You will need to establish your own process that takes into consideration your business continuity needs. Alternatively, if you are considering backing up Prometheus instances, the Prometheus website provides some related information that you may find helpful (for example, [Prometheus → 2.45 (LTS) → Storage](https://prometheus.io/docs/prometheus/2.45/storage/)).

#### [](#observability_namespaced_prometheus_replicas "Copy link to heading")observability.namespaced\_prometheus.replicas

 
| Description | Example value |
| --- | --- |
| 
The number of replicas for Prometheus instances which monitor Vault. Use `2` or `3` to run Prometheus in High Availability mode.

 | 

`1`, `2`, `3`

 |

#### [](#observability_namespaced_prometheus_kafka_storage_size "Copy link to heading")observability.namespaced\_prometheus.kafka.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Kafka, in Gi.

 | 

`20Gi`

 |

#### [](#observability_namespaced_prometheus_kubelet_storage_size "Copy link to heading")observability.namespaced\_prometheus.kubelet.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Namespaced Prometheus Kubelet, in Gi.

 | 

`25Gi`

 |

#### [](#observability_namespaced_prometheus_kubernetes_storage_size "Copy link to heading")observability.namespaced\_prometheus.kubernetes.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Namespaced Prometheus Kubernetes, in Gi.

 | 

`25Gi`

 |

#### [](#observability_namespaced_prometheus_postgres_storage_size "Copy link to heading")observability.namespaced\_prometheus.postgres.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Postgres, in Gi.

 | 

`10Gi`

 |

#### [](#observability_namespaced_prometheus_vault_storage_size "Copy link to heading")observability.namespaced\_prometheus.vault.storage.size

 
| Description | Example value |
| --- | --- |
| 
Persistent storage size allocated for Prometheus Vault, in Gi.

 | 

`45Gi`

 |

#### [](#observability_namespaced_prometheus_retention "Copy link to heading")observability.namespaced\_prometheus.retention

 
| Description | Example value |
| --- | --- |
| 
Retention period for all Namespaced Prometheus instances, in days or weeks.

 | 

`6w`

 |

#### [](#observability_node_exporter_host_network "Copy link to heading")observability.node\_exporter.host\_network

 
| Description | Example value |
| --- | --- |
| 
Node exporter needs access to the host network to be able to write the correct hostname in the nodename label of its metrics. If it will run in an environment where host network access is not acceptable or possible, set this to false. Such access is important to guarantee pod CPU and memory usage per node monitoring is possible.

 | 

`True`

 |

#### [](#observability_prometheus_custom_labels "Copy link to heading")observability.prometheus.custom\_labels

 
| Description | Example value |
| --- | --- |
| 
Map of custom labels that you can apply to alerts generated by Prometheus. Note that this can overwrite existing labels, and it MUST comply with the label restrictions in the [Prometheus Data Model documentation](https://prometheus.io/docs/concepts/data_model/).

 | 

`environment: development`

 |

#### [](#observability_prometheus_storageclass "Copy link to heading")observability.prometheus.storageclass

 
| Description | Example value |
| --- | --- |
| 
Kubernetes Storage Class for Prometheus persistent volumes. Remember to also increase storage sizes for namespaced Prometheus instances when increasing retention.

 | 

`prometheus`

 |

#### [](#observability_provision_vertical_autoscaling_configs "Copy link to heading")observability.provision\_vertical\_autoscaling\_configs

 
| Description | Example value |
| --- | --- |
| 
Include VPA (Vertical Scaling) configuration for observability components which support vertical scaling. You must only enable this component on Kubernetes clusters that support Vertical Scaling. For more information, see [Enabling Vertical Pod Autoscaling for observability workloads](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#enabling_vertical_pod_autoscaling_for_observability_workloads) and [Google Kubernetes VPA documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler).

 | 

`false` (not enabled, default), `true` (enabled)

 |

#### [](#observability_vertical_autoscaling_update_mode "Copy link to heading")observability.vertical\_autoscaling\_update\_mode

 
| Description | Example value |
| --- | --- |
| 
Set Vertical Scaling Update Mode for observability components that support vertical scaling. In order to use this value, you must set `observability.provision_vertical_autoscaling_configs` to `true`. You must only allow VPA configuration provisioning only if the target Kubernetes cluster supports Vertical Autoscaling (VPA). For more information, see **updateMode** in [Google Kubernetes VPA documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler#podupdatepolicy_v1_autoscalingk8sio).

Available values:

-   `Auto`: this evicts pods to apply recommendations
    
-   `Off`: this only provides you with recommendations
    
-   `Initial`: this applies a recommendation on the initial pod start
    

You should also refer to [Enabling Vertical Pod Autoscaling for observability workloads](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#enabling_vertical_pod_autoscaling_for_observability_workloads) and [Google Kubernetes VPA documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler).





 | 

One of:

-   `Auto`
    
-   `Off`
    
-   `Initial`
    





 |

#### [](#tracing_exporter_otlp_endpoint "Copy link to heading")tracing.exporter.otlp\_endpoint

 
| Description | Example value |
| --- | --- |
| 
The target endpoint for exporters to send traces via the OpenTelemetry Protocol (OTLP) in gRPC format. Your existing tracing collector must support the OTLP standards `otlp-grpc` or `otlp-http` formats. This typically has a default port of `4318`. This value implicitly disables tracing if unset. See: [opentelemetry.io](https://opentelemetry.io/) and [OpenTelemetry Protocol Exporter information](https://opentelemetry.io/docs/specs/otel/protocol/exporter/) (external links).

 | 

`4318`

 |

#### [](#tracing_exporter_otlp_http_endpoint "Copy link to heading")tracing.exporter.otlp\_http\_endpoint

 
| Description | Example value |
| --- | --- |
| 
The target endpoint for exporters to send traces via the OpenTelemetry Protocol (OTLP) in HTTP format. Your existing tracing collector must support the OTLP standards `otlp-grpc` or `otlp-http` formats. This typically has a default port of `4317`. This value implicitly disables tracing if unset. See: [opentelemetry.io](https://opentelemetry.io/) and [OpenTelemetry Protocol Exporter information](https://opentelemetry.io/docs/specs/otel/protocol/exporter/) (external links).

 | 

`4317`

 |

chat\_bubble

You should only use one tracing facility and it must support the OpenTelemetry protocol (OTLP). For more information, see [Using Tracing](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#using_tracing).

#### [](#tracing_sampler_type "Copy link to heading")tracing.sampler.type

 
| Description | Example value |
| --- | --- |
| 
OpenTelemetry sampler based on the [OpenTelemetry Tracing SDK and built-in samplers](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/sdk.md#built-in-samplers) (external link).

 | 

Accepted values: `always_off`, `parentbased_traceidratio`

 |

#### [](#tracing_sampler_arg "Copy link to heading")tracing.sampler.arg

 
| Description | Example value |
| --- | --- |
| 
Sampler strategy dependent argument. For `parentbased_traceidratio`, the argument is the sample rate. See the [OpenTelemetry General SDK configuration information](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) (external link).

 | 

`0.01`

 |

## [](#installing_the_observability_stack "Copy link to heading")Installing the Observability Stack

After you have met the [prerequisites](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#prerequisites) and [configured the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack#configuring_the_observability_stack), you can proceed to install the `observability` component. You need to install it before any other component - the TMComponent Operator ensures you install components in the correct order.

To install the observability resources into the cluster, run the following command using the TMComponent Operator and `vaultctl`:

chat\_bubble

The extension for the `<values_file>` is `.yaml` and the extension for the `<release_file>` is `.release`

## [](#checking_your_observability_stack_installation "Copy link to heading")Checking your Observability Stack installation

To check that your Observability Stack is successfully installed and working correctly, you should run both automated and manual tests after every upgrade of Vault Core:

-   Running the automated tests first will quickly identify any failures in the output.
    
-   Running the manual tests will ensure the autoscaler and dashboard functionality work correctly for your specific setup.
    

You can use the following types of tests:

-   Automated [Diagnostics Toolbox](/vault-core/5-9/EN/support_tools/diagnostics_toolbox) (DT) tests
    
-   Automated (clusterstat) tests provided in the Vault Core installation package
    
-   Manual end-to-end tests
    

Before running any tests, make a note of your Vault Core release version.

### [](#using_the_diagnostics_toolbox "Copy link to heading")Using the Diagnostics Toolbox

lightbulb

Thought Machine recommends using the Diagnostics Toolbox instead of the automated clusterstat tests.

Refer to our documentation on the [Diagnostics Toolbox](/vault-core/5-9/EN/support_tools/diagnostics_toolbox) for information on how to run the automated checks on the Observability Stack.

### [](#running_the_automated_clusterstat_tests "Copy link to heading")Running the automated (clusterstat) tests

Run the following command with the TMComponent Operator:

The command should return the expected output:

chat\_bubble

The extension for the `<values_file>` is `.yaml` and the extension for the `<release_file>` is `.release`

#### [](#failure_of_any_automated_tests "Copy link to heading")Failure of any automated tests

If any of the automated tests fail, the TMComponent Operator output will include the names of the resources that are unhealthy. Temporary failures can occur straight after installation as containers may take several minutes to schedule.

If test failures persist, contact Thought Machine with the failing test output.

### [](#manual_end_to_end_tests "Copy link to heading")Manual end-to-end tests

#### [](#step_1_check_the_custom_metrics_api_is_exposed "Copy link to heading")Step 1: Check the Custom Metrics API is exposed

Horizontal Pod Autoscaling uses the Kubernetes Custom Metrics API for Prometheus metrics.

Use the Kubernetes command line tool `kubectl` to run the following command to query the Custom Metrics API:

The command should return a non-empty list of resources:

This example output shows that the Prometheus metric `namespaces/max_service_consumer_group_lag` is available for use in Horizontal Pod Autoscaling.

#### [](#step_2_check_the_data_dashboards_in_grafana "Copy link to heading")Step 2: Check the data dashboards in Grafana

Access the Grafana user interface using the Ingress deployed with the `observability` component and check these dashboards for data:

-   Sync Comms/gRPC Services
    
-   Kafka/Kafka Clients Consumer
    
-   Observability/Alerts Review Tool
    

chat\_bubble

For more information about these dashboards, see [Using Grafana dashboards](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack#using_grafana_dashboards) and [Introduction to Grafana and key dashboards](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/introduction_to_grafana_and_key_dashboards).

If you are unable to access Grafana through the Ingress, run the following command to access the Grafana dashboards via port-forward:

The dashboards show the current state of Vault Core. Therefore, if the dashboards contain data, this means Prometheus, Thanos and Alertmanager have been deployed successfully.

## [](#installing_vault_core "Copy link to heading")Installing Vault Core

After you have configured and installed the Observability Stack and other required components, use the TMComponent Operator provided with Vault Core to either:

-   Perform a fresh installation of Vault Core
    
-   Upgrade Vault Core from a previous version
    

See the [TMComponent Operator Guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide) for instructions on how to correctly install or upgrade Vault Core.