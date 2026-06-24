---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start"
title: "Before you start"
scraped_at: "2026-06-22T19:14:29.879Z"
images: 0
---

# Before you start

Bank-hosted

As well as setting up the external infrastructure required for provisioning your Vault Core instance, check for other considerations you should make before installing Vault Core. Depending on your particular setup, you may need to take some additional steps.

## [](#configure_all_the_necessary_components "Copy link to heading")Configure all the necessary components

You need to set up the external infrastructure required for your Vault Core instance.

Refer to [Requirements](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements) for a list of required and optional infrastructure components, as well as [Configuring cloud infrastructure](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure) for guidance on setting up individual components.

## [](#set_up_container_registry "Copy link to heading")Set up container registry

Before installing Vault Core, you must have a container registry set up for storing and managing the software required to run Vault Core’s microservices. All Vault Core microservices are deployed in Open Container Initiative (OCI)-compliant containers.

You will use your container registry for [copying images](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#copy_images) from the Thought Machine registry to your own registry as part of Vault Core installation.

The following container registries are supported in Vault Core:

-   [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/getting-started/)
    
-   [Google Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs/)
    
-   [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry)
    
-   Other OCI-compatible registries, such as [Docker](https://hub.docker.com/_/registry)
    

Follow your chosen provider’s instructions for guidance on setting up your own private registry.

## [](#set_database_admin_user_password "Copy link to heading")Set database admin user password

chat\_bubble

This step does not apply if you are using [role-based access control (RBAC)](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_rbac_based_authentication_to_aws_rdsaurora) with AWS IAM. This is because RBAC uses AWS IAM credentials for authentication, rather than a password.

To connect Vault Core services to your database, you must provide the [database admin user password](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault#types_of_secrets_and_who_provides_them) to your chosen [secrets manager](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault).

1.  Set the `db.admin_user` username in the `values.yaml` file. Otherwise, the default for Postgres databases is the built-in superuser.
    
2.  Add the password corresponding to the `db.admin_user` to the relevant location in the secrets manager. This location or path differs depending on your secrets manager.
    

For instructions specific to your secrets manager, refer to the guides on [HashiCorp Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_hashicorp_vault_secrets_manager), [AWS Secrets Manager](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager), or [Microsoft Azure Key Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_azure_key_vault). See also [Installing Vault with a Database Admin User](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#installing_vault_with_a_database_admin_user).

## [](#vault_ingress_secrets "Copy link to heading")Vault Ingress secrets

Each Kubernetes Ingress object deployed for Vault Core has a unique secretName. The certificate or certificates used for these Ingress objects must be stored in Kubernetes secrets with the same names that are specified in the Vault Ingress objects.

## [](#installing_kafka_initcleanup_components "Copy link to heading")Installing Kafka Init/Cleanup components

Vault Core supports the [automatic management of Kafka cluster ACLs](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#automatically_manage_kafka_acls) via the Kafka Init (`kafka-init`) and Cleanup (`kafka-cleanup`) components. These components work in tandem with each other to automatically create and delete Kafka ACLs, so the broker configuration matches the required set of permissions for each Vault Core version.

If you want to enable automatic ACL management, you need to install the Init and Cleanup components every time you install Vault Core, and in the correct order (first `kafka-init`, then `vault-core`, then `kafka-cleanup`).

chat\_bubble

Before installing the Kafka Init and Cleanup components for the first time, you must first create the prerequisite access control lists (ACLs) in the cluster. These ACLs give the appropriate permissions for Kafka Init and Cleanup to work correctly. See [Creating Kafka cluster ACLs before installing Kafka Init/Cleanup components](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#create_kafka_cluster_acls_before_installing_kafka_initcleanup_components) for instructions.

Installing `kafka-init` creates a Kubernetes job that then creates the required Kafka ACLs and complete. This means the cluster ACLs required for the job will not be continuously in use. Only install `kafka-cleanup` **after** Vault Core installation has finished, with all pods rolled out and no previous pod versions running.

If you pass the components in the same `vaultctl install` command, vaultctl automatically installs them in the correct order. For example, the following command installs `kafka-init` first, then `vault-core`, then `kafka-cleanup`:

See the [Install step](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#install) in the installation guide for more information on using `vaultctl install`.

## [](#installing_vault_core_with_a_managed_kafka_cluster "Copy link to heading")Installing Vault Core with a managed Kafka cluster

Vault Core needs access to the Apache Kafka Admin API for managing resources in the Kafka cluster (such as ACLs or topics) and access to the `__consumer_offsets` topic for monitoring consumer groups lag. Apache Kafka as a Service provider often disables access to either one or both the Admin API and the `__consumer_offsets` topic. With disabled access, installation of some of the components against such clusters might fail.

In the case of disabled access to the Admin API, you must ensure that:

-   The Kafka Init and Kafka Cleanup components are not installed in the cluster.
    
-   The `kafka.topics.disable_vault_topic_management` option in your values file is set to `true`. Note that having topic management disabled means you will need to use the `kafka_topics_info.json` file to [manually create Kafka topics](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#manually_create_kafka_topics).
    

In the case of disabled access to the `__consumer_offsets` topic, you must ensure that the `kafka.monitoring.disable_consumer_lag_exporter` option in your values file is set to `true`.

## [](#configuring_usage_monitor "Copy link to heading")Configuring Usage Monitor

The [Usage Monitor](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/usage_monitor/) web application measures the historical usage of Vault Core. Setting the configuration is optional - your Vault Core deployment will still work as normal if you do not change the default configuration for the Usage Monitor in your `values.yaml` file.

If you want to configure your own values, Thought Machine recommends setting them at deployment time (which may be at the point at which a contractual agreement comes into effect), before installing Vault Core.

Nevertheless, you can change the configuration later on - you will need to reinstall or upgrade Vault Core if you do so.

info

To ensure that the **Committed accounts** column data is accurate from the beginning, Thought Machine recommends reinstalling (or upgrading) Vault Core on the day that any contractual agreement comes into effect, with `usage.num_committed_accounts` set to the number of agreed Accounts.

  
| Configuration | Description | Recommended value |
| --- | --- | --- |
| 
`usage.committer.schedule`

 | 

[Crontab](https://en.wikipedia.org/wiki/Cron) expression which dictates when the usage should be measured. Defaults to midnight (UTC) on the 1st of every month.

 | 

-   Set a value which avoids the time window in which End of Day (EOD) usually runs; Thought Machine recommends setting the value to at least three hours before EOD begins.
    
-   Set a day between the 1st to the 28th of each month to avoid missed measurements due to the inconsistencies in the Gregorian calendar.
    





 |
| 

`usage.num_committed_accounts`

 | 

Number of Accounts included in the fixed base price for this Vault Core instance, contractually agreed with Thought Machine.

 | 

Set this according to the legal contract between the bank and Thought Machine.

 |

Configuring the Usage Monitor is only relevant for production environments.

## [](#configuring_data_deleter_job "Copy link to heading")Configuring Data Deleter Job

The *Data Deleter Job* deletes unused internal data from Vault Core. The `data_retention.deleter.schedule` value specifies the cron schedule on which the Data Deleter Job runs. If you do not configure this value in your `values.yaml` file, it defaults to 4 AM (UTC) once a day.

Thought Machine recommends setting it to a time after End of Day (EOD) processing in your timezone to avoid slowing down EOD or other time-sensitive processes.

You should ideally set it before installing Vault Core for the first time. Nevertheless, you can change the value later on - you will need to reinstall or upgrade Vault Core if you do so.

  
| Configuration | Description | Recommended value |
| --- | --- | --- |
| 
`data_retention.deleter.schedule`

 | 

[Crontab](https://help.ubuntu.com/community/CronHowto) expression which dictates when the usage should be measured.

 | 

Set a value which avoids the time window in which EOD usually runs; Thought Machine recommends setting the value to at least three hours after EOD ends. If not set, it defaults to 4 AM (UTC) everyday.

 |

By default, the Deleter only deletes Contract Executions. It will delete any Contract Executions older than 62 days.

You can optionally configure the Data Deleter Job to delete further unused internal data from Vault Core. Due to deleting data being a destructive process, contact your Thought Machine representative to discuss your requirements and learn how to enable deletion of these other types of unused internal data:

-   Temporary Internal Ledger Balances Data older than 90 days
    
-   Internal Idempotency Scheduler Data older than 90 days
    
-   Vault Jobs and associated Operations Data older than 90 days
    

## [](#configuring_a_custom_certificate_authority "Copy link to heading")Configuring a custom certificate authority

Vault Core uses client-side verification when interacting with the database and/or Kafka (that is, not mutual TLS); this means the server certificate used by the database and/or Kafka cluster must be trusted by Vault Core. If your database and/or Kafka cluster uses a self-signed certificate, you must provide the certificate authority (CA) that signed the database and/or Kafka server certificate(s), so that Vault Core can add it to its trust chain.

To configure a custom CA:

1.  If you are using a firewall, ensure the firewall between your cluster control plane and worker nodes allows access to the port `10000` of the `ca-injector-webhook`. This is a webhook that adds an [init container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) to the deployments of a namespace. The init container will inject your CA certificates. See [Configuring webhook ports to allow the Kubernetes API](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_webhook_ports_to_allow_the_kubernetes_api) for more information.
    
2.  Before installing Vault Core, label the Vault Core namespace to enable CA injection (see [Create namespaces with the correct annotations](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#create_namespaces_with_the_correct_annotations) for more detail on creating namespaces):
    
    error
    
    This webhook is deployed per namespace, so it is critical to label the namespace resource with the correct `ca-injector` label.
    
3.  Provide the CA certificates to the `ca-injector-webhook`.
    
    (Approach A) Using a file with the suffix `.pem` (for example, `ca.pem`) containing the PEM-formatted CA data, run the following command to create the ConfigMap. `ca.pem` is the name of the `.pem` file you use:
    
    If you are injecting different CAs for the database and Kafka, concatenate both `.pem` files into a single `.pem` file before creating the ConfigMap.
    
    (Approach B) Alternatively, you can provide certificates via values during deployment. In your `values.yaml`, specify `ca_injector.ca_certs` as a single line string containing your PEM encoded certificates. These certificates will be populated into a ConfigMap named `ca-injector-certs-embedded-<namespace>`. If the `ca-injector-certs` ConfigMap is not found in the namespace, the webhook will automatically fallback to search for `ca-injector-certs-embedded-<namespace>`.
    
    Example `values.yaml`:
    
    If you have already used Approach A and want to move to Approach B, ensure the ConfigMap `ca-injector-certs` is removed after deploying ca-injector via value file changes mentioned above.