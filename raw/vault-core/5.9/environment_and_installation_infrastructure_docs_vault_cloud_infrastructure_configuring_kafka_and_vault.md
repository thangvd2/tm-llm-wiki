---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault"
title: "Configuring Kafka and Vault"
scraped_at: "2026-06-17T04:57:48.622Z"
images: 0
---

# Configuring Kafka and Vault

Bank-hosted

Microservices running on Kubernetes require access to an [Apache Kafka](https://kafka.apache.org/) cluster for asynchronous message processing.

For a production environment, you must use a dedicated Kafka cluster. You should use a multi-availability zone (AZ) Kafka cluster, and either a managed or bank-hosted Kafka service. Use the [Certified Environment matrix](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) to check that the version of Apache Kafka you want to use is compatible with Vault Core.

This guide goes through the requirements for configuring Kafka to use with Vault Core services, including:

-   Kafka security considerations and supported authentication mechanisms
    
-   Kafka broker essential configurations
    
-   Vault Core configuration parameters in the `values.yaml` file
    
-   Reconfiguring Kafka with existing Vault Core instances - this is in the context of the Kafka secrets that Vault Core services require
    
-   Kafka certificate rotations - only client certificate rotation if using PKI (Public Key Infrastructure)
    

## [](#kafka_security_considerations_for_vault "Copy link to heading")Kafka security considerations for Vault

There are several security considerations for you to address when configuring Kafka and Vault Core:

-   [Certificate authority (CA)](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#certificate_authority): Either owned CA or public CA
    
-   [Client authentication](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authentication): mTLS, SASL-SCRAM or SASL-OAUTHBEARER
    
-   [Client authorisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authorisation): The automatic or manual creation of Kafka access control lists (ACLs)
    

These are important because microservices running on Kubernetes will need access to a Kafka cluster, and both applications and users can access the information that Kafka will be involved with. For example, on a default Kafka installation, any user or application can write messages to topics and read data from topics.

chat\_bubble

Vault Core release 5.2 includes the addition of DENY ACLs for Vault Core principals, primarily to restrict access to Policy topics, as well as a new field, `permission_type` (value: `ALLOW`/`DENY`), in the [kafka\_principals release JSON schema](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_principals_json_schema). If using the Kafka Init/Cleanup components, these new ACLs will be managed automatically. If you are generating ACLs manually, see the recommended approaches in [Client authorisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authorisation) and [Manually create Kafka topics](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#manually_create_kafka_topics).

### [](#certificate_authority "Copy link to heading")Certificate Authority

Before setting up a Kafka cluster, it is very important that you consider what type of Certificate Authority (CA) to use for Transport Layer Security (TLS).

We strongly recommend that you have ownership over the CA that signed the external broker certificates for the Kafka cluster. Using a public CA implies no control over the private key of the CA; in this scenario, it would not be possible to implement mutual TLS authentication (mTLS). This is because when there is no control over the private key of the CA, it is not possible to generate and sign client certificates and Intermediate CAs.

The following table describes TLS Encryption support (minimum recommended level of security)

 
| Client Authority | Description of the supported approach |
| --- | --- |
| 
Owned CA

 | 

Using the CA Injector webhook to inject a provided CA into the system truststore of all containers in Vault Core. Enabling the `kafka.client.use_system_ca` option in the `values.yaml` file will configure Vault Core services communicating with Kafka to use their system truststores, which will contain the injected CA.

 |
| 

Public CA

 | 

Enabling the `kafka.client.use_system_ca` option in the `values.yaml` file. This will configure Vault Core services communicating with Kafka to use their system truststores, which contains many common public CAs.

 |

### [](#client_authentication "Copy link to heading")Client authentication

Vault Core currently only supports client authentication using mutual TLS, SASL-SCRAM or SASL-OAUTHBEARER.

For each Vault Core service that communicates with Kafka, this requires either:

-   mTLS: Client certificates to be signed by a CA with a chain of trust to a CA whose certificate is stored in Kafka’s truststore. Clients may provide Intermediate CA certificates in their certificate list to establish this chain of trust. To learn more, see [Configuring mutual TLS](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_mutual_tls_for_vault).
    
-   SASL-SCRAM: Client credentials, consisting of a username and password. To learn more, see [Configuring SASL-SCRAM](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_saslscram).
    
-   SASL-OAUTHBEARER: Client credentials, consisting of client ID and secret. To learn more, see [Configuring SASL-OAUTHBEARER](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_sasloauthbearer).
    

You must ensure that these client certificates or credentials are placed in a supported secrets manager, in order for Vault Core services to use them. The TMComponent Operator supports the automatic generation of client certificates and credentials from a CA certificate and private key and storing them in a supported secrets manager.

You can use the [Release JSON artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact) to aid with manually generating client certificates, or SCRAM or OAUTHBEARER credentials. It includes the content of [kafka\_principals](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_principals_json_schema), which details the secrets manager paths for storing the certificates or credentials at, along with what keys are expected in the secret at that path.

### [](#client_authorisation "Copy link to heading")Client authorisation

Access control lists (ACLs) grant Vault Core microservices the necessary permissions to access Kafka.

The TMComponent Operator supports the automatic creation of ACLs, as well as the deletion of ACLs that are no longer required. You have the option to create them automatically as part of the `kafka-init` component. These ACLs comprise:

-   Coarse-grained `ALLOW` ACLs applicable to all Vault Core principals, topics and consumer groups to allow access to all Vault Core topics
    
-   `DENY` ACLs for all Vault Core principals other than certain principals to deny access to Policy topics - the `DENY` ACLs are available from Vault Core 5.2
    

chat\_bubble

The `kafka-init` component will create ACLs for Vault Core services users only; you cannot use it for creating custom ACLs for your services.

Thought Machine recommends you to automatically create Kafka ACLs through our components. Otherwise, you have the option to manually create Kafka ACLs - this involves using [kafka\_principals](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_principals_json_schema) in the [release JSON artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact) . You should use these as an audit reference for what the `kafka-init` component will create for the ACLs.

warning

If you create Kafka ACLs manually, there is a burden and risk that comes with every Vault Core upgrade, because new services may be introduced that require new ACL rules and they will not function until that rule is put in place.

If you would prefer to manually create ACLs yourself, refer to the [release JSON artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact). You should also notify your Thought Machine representative about your decision to manually create ACLs - we may be able to offer you advice.

chat\_bubble

If you decide to generate your own [client certificates](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authentication) and choose both mTLS as the authentication method and opt in for automatic ACL creation/deletion when installing Vault Core, then you will need to set `kafka.client.ssl_subject` in the `values.yaml` file. You do not need to set this if you will not create client certificates manually or decide to create ACLs manually.

You need to manually create ACLs for integrations that interact with the Vault Core public Kafka topics (Postings, Data Loader, and Streaming APIs). Thought Machine does not provide automation for this.

See [Creating Kafka ACLs](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#creating_kafka_acls) for more guidance.

## [](#configuring_a_kafka_cluster_for_vault "Copy link to heading")Configuring a Kafka cluster for Vault

error

Refer to the [Certified Environment matrix](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility#certified_environment_matrix_for_vault) to validate that the Apache Kafka version you are intending to use is compatible with Vault Core. It is important to use an Apache Kafka version listed in the compatibility matrix as Thought Machine does NOT support using Vault Core with an out-of-support version of Apache Kafka.

You can use the following configuration options for Kafka clusters.

### [](#essential_configuration_for_kafka "Copy link to heading")Essential configuration for Kafka

chat\_bubble

Kafka cluster and permissions: For further information about the appropriate permissions and access to create and update Kafka topics, check the release artefacts and details mentioned in the [TMComponent Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide) guide.

#### [](#kafka_cluster_requirements "Copy link to heading")Kafka cluster requirements

-   At least 3 Kafka brokers and either 3 ZooKeeper nodes (ZooKeeper mode) or 3 Kafka controller nodes (KRaft mode, supported from Vault Core 5.7.3+), spread across availability zones to ensure high availability and replication of data.
    
    error
    
    You **must** ensure that all topics are replicated across all availability zones of the cluster; otherwise, you risk making Vault Core vulnerable to downtime in the event of an availability zone failure.
    
-   Vault Core requires the appropriate permissions and Admin API access to create, update and delete Kafka topics and, optionally, Kafka ACLs.
    
-   Vault Core requires access to the `__consumer_offsets` topic to monitor the consumer lag of the Kafka processors. The Kubernetes HPA extension will use the consumer lag metric for scaling Vault Kafka processors (this does not impact scaling based on CPU and memory utilisation).
    
    Possible workarounds include:
    
    -   Manually adding a Kubernetes custom metric named `max_service_consumer_group_lag` that the Kubernetes HPA extension will use.
        
    -   Pinning all Vault Core services to the max replicas specified in the Kubernetes Horizontal Pod Autoscaler resources.
        
    -   Scaling based on memory and CPU utilisation only.
        
    
-   All Vault Core services MUST have network connectivity to every broker in the Kafka cluster. In practice, this means all Kubernetes nodes in the cluster that Vault Core is running on must have connectivity to every broker. Proxies, firewalls and network policies can also affect this.
    
-   Kafka brokers and ZooKeeper nodes (or Kafka controllers when running in KRaft mode) that are provisioned with sufficient resources. This includes CPU, RAM, disk size, disk IOPS, number of file descriptors, and network bandwidth (this list is not exhaustive). These settings are tightly correlated with the size of the Vault Core instance and whether the Kafka cluster is dedicated to only Vault Core only. You MUST have the ability to scale the cluster accordingly when the load increases.
    
    The recommended minimal requirements per broker for a Kafka cluster that is dedicated to only Vault Core are:
    
    -   CPU: 8 (prioritise number of vcores/cores over the speed of each)
        
    -   RAM: 16 GB
        
    -   Disk: 1TiB SSD
        
    -   IOPS: 4 IOPS per GB
        
    
-   Vault Core is not distributed with a solution for monitoring Kafka cluster brokers. It is your responsibility to leverage solutions for continuous monitoring of the Kafka cluster and ensure uptime.
    

error

Using Vault Core with multi-region Kafka setups, including 'stretch' and active-active clusters results in performance degradation of Vault Core and writes to Kafka caused by network latency when crossing regions. In addition, it would invalidate any performance certification guaranteed by Thought Machine.

#### [](#broker_side_requirements_set_within_the_server_properties_file "Copy link to heading")Broker-side requirements (set within the server.properties file)

-   `message.max.bytes=4194304` or greater: Vault Core will not produce messages larger than this.
    
-   `replica.fetch.max.bytes=5242880` or greater
    
-   `unclean.leader.election.enable=false`: setting to `true` may lead to Kafka message loss.
    
-   `min.insync.replicas=2`: two for a three broker setup. This is required because Vault Core producers use `acks=all` for durability; increasing further will result in increased message produce request latencies.
    
-   `log.message.timestamp.type=CreateTime`: the timestamp in the message is set to the timestamp at creation time, not at the time when the message is appended to the log).
    

#### [](#topic_level_requirements_set_automatically_when_vault_creates_topics "Copy link to heading")Topic-level requirements (set automatically when Vault creates topics)

-   A replication factor of 3 for all Vault Core topics (not configurable, managed by a Vault Core service). If you are using Vault Core topic management, this is set by the `vault-topic-manager` deployment and you cannot configure it. If Vault Core topic management is disabled, you MUST set the replication factor of 3 as a minimum for all topics; otherwise, you risk Vault Core being vulnerable to loss of availability in the case of a single availability zone failure.
    
-   Between 1-10 partitions for non-DLQ topics and 1 partition per DLQ topic for all Vault Core topics (not configurable, managed by a Vault Core service).
    
-   If using Vault Core topic management, the `vault-topic-manager` deployment will set the retention period when creating all topics. Vault Core topics have a 7-day retention period by default, with some topics set to a shorter period, where appropriate, and DLQ topics set to a 2-week retention period. If you have disabled Vault Core topic management, you MUST use the information from the `kafka_topics.json` artefact to set the required retention period described for each topic.
    
-   You MUST provision the disks of the brokers to a size that can support the amount of data that Vault Core will collect over these periods, with some scope to account for unexpected spikes in load. This is typically in the order of TiBs and will depend on the expected load on the system over a 7-day period.
    
-   The brokers require sufficient resources in order to support the number of partitions that Vault Core uses; this is between approximately 1300 up to 4500 partitions, depending on the optional components installed. Some managed Kafka providers have partition limits per broker, which you can avoid by deploying more brokers and spreading partition replicas across them.
    
-   Spreading topic partition replicas across zones.
    
    -   For clusters with more than three brokers, do not assign partitions to brokers in the same availability zone. This mitigates against a scenario where there is a failure and topics are locked for writes or both reads and writes.
        
    -   Implement mechanisms that will ensure that each topic is evenly replicated across all availability zones, so that Vault Core can fully tolerate the failure of an availability zone.
        
    
-   Consider reassigning partition replicas based on traffic volume. This can help to distribute the load on the cluster across brokers, but this MUST NOT conflict with spreading the partitions replicas across zones.
    

### [](#recommended_additional_configuration_for_kafka "Copy link to heading")Recommended additional configuration for Kafka

chat\_bubble

To set up Kafka brokers for TLS encryption or authentication, see [Confluent’s guide](https://docs.confluent.io/platform/current/kafka/authentication_ssl.html).

 
| Configuration | Recommendation |
| --- | --- |
| 
Broker-side (set within the `server.properties` file)

 | 

`offsets.retention.minutes=20160` (14 days or greater).

 |
| 

Broker-side (set within the `server.properties` file)

 | 

`auto.create.topics.enable=false` (disabled/off) Reason: This setting controls whether or not Kafka automatically creates topics, where `false` disables the setting (off), and `true` enables the setting (on). However, some services within Vault Core itself are responsible for creating and managing topics; therefore, Thought Machine recommends that it is set to `false` (off/disabled). Otherwise, enabling the setting by changing it to `auto.create.topics.enable=true` will lead to some error logs in these services.

 |
| 

Broker-side (configured manually via Apache Kafka script or otherwise)

 | 

Spread partition replicas evenly across availability zones (default if using three brokers) to ensure high availability of partitions. Kafka does not guarantee this when topics are created.

 |

## [](#configuring_vault_to_use_a_kafka_broker "Copy link to heading")Configuring Vault to use a Kafka broker

### [](#required_values_yaml_settings "Copy link to heading")Required values.yaml settings

You must configure Thought Machine Vault Core to use Kafka brokers using the following configuration parameters in the `values.yaml` file.

 
| values.yaml settings | Description |
| --- | --- |
| 
`kafka.client.brokers`

 | 

Kafka bootstrap broker addresses.

 |
| 

`kafka.client.disable_ssl`

 | 

If set to `true`, this disables TLS for communication to the brokers.

 |
| 

`kafka.client.use_system_ca`

 | 

If set to `true`, this sets Kafka clients to use their system truststores for TLS.You must also set the following to `false` (or not set):\`kafka.client.disable\_ssl\`

 |

### [](#security_levels_and_configuration_for_kafka_and_vault_core "Copy link to heading")Security levels and configuration for Kafka and Vault Core

Here, you can view the supported security levels and the associated configuration settings for each level. You must configure the settings as appropriate to the security level that you choose in the Vault Core `values.yaml` file.

Quick links:

-   [Mutual TLS](#mutual_tls)
    
-   [SASL-SCRAM](#sasl-scram)
    
-   [SASL-OAUTHBEARER](#sasl-oauthbearer)
    
-   [TLS encryption with a supported public CA](#tls-with-supported-public-ca)
    
-   [TLS encryption with any CA or unsupported public CAs](#tls-with-unsupported-public-ca)
    
-   [Plaintext](#plaintext)
    

#### [](#mutual_tls "Copy link to heading")Mutual TLS

For more information, see [Configuring mutual TLS](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_mutual_tls_for_vault).

##### [](#values_yaml_settings_for_mutual_tls "Copy link to heading")values.yaml settings for Mutual TLS

#### [](#sasl-scram "Copy link to heading")SASL-SCRAM

Vault Core supports both SCRAM-SHA-512 and SCRAM-SHA-256, but you must provide only one in the `values.yaml` file.

chat\_bubble

Vault Core only supports SASL\_SSL. You must use TLS encryption in conjunction.

For more information, see [Configuring SASL-SCRAM](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_saslscram).

##### [](#values_yaml_settings_for_sasl_scram "Copy link to heading")values.yaml settings for SASL-SCRAM

#### [](#sasl-oauthbearer "Copy link to heading")SASL-OAUTHBEARER

The `values.yaml` examples include example `<placeholders>` and values, such as `'{"fieldone": "valueone"}'` for `kafka.client.oauth.extensions:` and `"scopeOne scopeTwo"` (for `kafka.client.oauth.scopes:`). You must replace these with the correct values. However, the final value does require the given quote marks and curly braces `{}` as part of the value.

chat\_bubble

Vault Core only supports SASL\_SSL. You must use TLS encryption in conjunction.

For more information, see [Configuring SASL-OAUTHBEARER](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#configuring_sasloauthbearer).

##### [](#values_yaml_settings_for_sasl_oauthbearer "Copy link to heading")values.yaml settings for SASL-OAUTHBEARER

#### [](#tls-with-supported-public-ca "Copy link to heading")TLS encryption with a supported public CA

Before you proceed, ensure that Vault Core also supports the public CA that signed the Kafka broker certificates.

Vault Core supports public CAs provided in the Alpine `ca-certificates` package and Amazon Corretto JDK `cacerts` package (for Vault Core Java Docker images).

-   To check whether Vault Core trusts your public CA, refer to the [list of common root CAs from Mozilla](https://wiki.mozilla.org/CA) as [Alpine Linux](https://pkgs.alpinelinux.org/) bases its `ca-certificates` package on this.
    
-   To check the CAs that Amazon Corretto JDK trusts, you can run the command `keytool -list -cacerts` while using the Amazon Corretto JDK to list out the CAs that it trusts or refer to its documentation on the [AWS](https://docs.aws.amazon.com/corretto/) or [GitHub](https://github.com/corretto/) pages.
    

##### [](#values_yaml_settings_for_tls_encryption_with_a_supported_public_ca "Copy link to heading")values.yaml settings for TLS encryption with a supported public CA

#### [](#tls-with-unsupported-public-ca "Copy link to heading")TLS encryption with any CA or unsupported public CAs

To set up the CA Injector webhook and inject a CA into the system truststore, see See [Configuring a custom certificate authority](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start#configuring_a_custom_certificate_authority).

chat\_bubble

If a CA is already being injected for use with the database, you should concatenate the two CA public keys into one file and name it `ca.pem`. Next, create the `ca-injector-certs` ConfigMap. This results in both CAs being injected.

##### [](#values_yaml_settings_for_tls_encryption_with_any_ca_or_unsupported_public_cas "Copy link to heading")values.yaml settings for TLS encryption with any CA or unsupported public CAs

#### [](#plaintext "Copy link to heading")Plaintext

error

Communicating with Kafka over plaintext is not recommended because it offers no security.

##### [](#values_yaml_settings_for_plaintext "Copy link to heading")values.yaml settings for plaintext

### [](#configuring_mutual_tls_for_vault "Copy link to heading")Configuring mutual TLS for Vault

There are several ways that you might configure mutual TLS (mTLS). The following scenarios provide examples that should help you to decide how to configure it to suit your requirements.

-   [Migrate an existing instance, already using mTLS, to the PKI engine](#migrate_an_existing_instance_already_using_mtls_to_the_pki_engine)
    
-   [Migrate an existing instance, not currently using mTLS, to mTLS with the PKI engine](#migrate_an_existing_instance_not_currently_using_mtls_to_mtls_with_the_pki_engine)
    
-   [Migrate an existing instance, not currently using mTLS, to mTLS without the PKI engine](#migrate_an_existing_instance_not_currently_using_mtls_to_mtls_without_the_pki_engine)
    
-   [Create a new instance, using mTLS, and the PKI engine](#create_a_new_instance_using_mtls_and_the_pki_engine)
    
-   [Create a new instance, using mTLS, without the PKI engine](#create_a_new_instance_using_mtls_without_the_pki_engine)
    

#### [](#migrate_an_existing_instance_already_using_mtls_to_the_pki_engine "Copy link to heading")Migrate an existing instance, already using mTLS, to the PKI engine

1.  Configure the PKI engine as detailed in [Configuring a secrets manager in Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault).
    
2.  Configure the Vault `values.yaml` file to use the PKI backend - see the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).
    
3.  Use the `rotate-certs` vaultctl command. Safely migrate the CA by running:
    
4.  When prompted by the `rotate-certs` command, confirm that the new PKI CA is in place.
    
    chat\_bubble
    
    The `rotate-certs` command will remove the old `ca.pem` and `ca.key` from the `kafka-ca` secret automatically at the end of the migration.
    

#### [](#migrate_an_existing_instance_not_currently_using_mtls_to_mtls_with_the_pki_engine "Copy link to heading")Migrate an existing instance, not currently using mTLS, to mTLS with the PKI engine

1.  Configure the PKI engine as detailed in [Configuring a secrets manager in Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault).
    
2.  Configure the Vault `values.yaml` file to enable mTLS and point to the Kafka cluster’s SSL port using the settings detailed in [Security levels and configuration for Kafka and Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#security_levels_and_configuration_for_kafka_and_vault).
    
3.  Configure the Vault `values.yaml` file to use the PKI backend - see the [Installation guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault).
    
4.  Migrate existing certificates by deleting the previous CA at: `secret/<bank-name>/kafka-ca`
    
    chat\_bubble
    
    `kafka-ca` was formerly named `certs-ca`. You must delete both.
    
5.  Run the following command:
    
6.  Reinstall with the Vault Installer to apply the values changes and start using mTLS.
    

#### [](#migrate_an_existing_instance_not_currently_using_mtls_to_mtls_without_the_pki_engine "Copy link to heading")Migrate an existing instance, not currently using mTLS, to mTLS without the PKI engine

error

Having full ownership over the CA, or Intermediate CA, that signed the Kafka broker certificates is required for mutual TLS because the private key must be used to sign the client certificates that Vault Core will use.

If you want to use your own CA:

1.  Overwrite the `kafka-ca` secret at `secret/<bank-name>/kafka-ca` with the desired CA’s certificate and private key. You can delete the base64-encoded DER file if present, as this is no longer used. Optionally, provide the chain of Intermediate/Root CA certificates by appending them to the desired CA’s certificate.
    
    The field names are:
    
    -   `ca.pem`: CA certificate followed by any Intermediate/Root CA certificates. Each certificate must certify the one preceding it, with the exception of Alternate Root CAs which may follow a completed chain of certificates. These must be in PEM format. For more information, see 'certificate\_list' in [RFC 4346](https://tools.ietf.org/html/rfc4346#section-7.4.2).
        
    -   `ca-key.pem`: CA private key in PEM format.
        
    
2.  Configure the Vault values.yaml file to enable mTLS and point to the Kafka cluster’s SSL port using the settings detailed in [Security levels and configuration for Kafka and Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#security_levels_and_configuration_for_kafka_and_vault).
    
3.  If you have added your own CA, replace any existing certificates by running:
    
4.  Reinstall with the Vault installer to apply the values changes and start using mTLS.
    

#### [](#create_a_new_instance_using_mtls_and_the_pki_engine "Copy link to heading")Create a new instance, using mTLS, and the PKI engine

1.  Configure the PKI engine as described in [Configuring a secrets manager in Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_a_secrets_manager_in_vault).
    
2.  Configure the `values.yaml` file to use the PKI backend. See *Vault Installation Tools*.
    
3.  Run the Vault installer.
    

#### [](#create_a_new_instance_using_mtls_without_the_pki_engine "Copy link to heading")Create a new instance, using mTLS, without the PKI engine

error

Having full ownership over the CA, or Intermediate CA, that signed the Kafka broker certificates is required for mutual TLS because the private key must be used to sign client certificates for Vault Core to use.

If you want to use your own CA:

1.  Write `kafka-ca` secret at `secret/<bank-name>/kafka-ca` with the desired CA’s certificate and private key. Optionally, provide the chain of Intermediate/Root CA certificates by appending them to the desired CA’s certificate.
    
    The field names are:
    
    -   `ca.pem`: CA certificate followed by any Intermediate/Root CA certificates. Each certificate must certify the one preceding it, with the exception of Alternate Root CAs which may follow a completed chain of certificates. These must be in PEM format. For more information, see 'certificate\_list' in [RFC 4346, section 7.4.2](https://tools.ietf.org/html/rfc4346#section-7.4.2).
        
    -   `ca-key.pem`: CA private key in PEM format.
        
    
2.  Configure the Vault `values.yaml` file to enable mTLS and point to the Kafka cluster’s SSL port using the settings described in [Security levels and configuration for Kafka and Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#security_levels_and_configuration_for_kafka_and_vault).
    
3.  Run the Vault Installer.
    

### [](#certificate_and_ca_rotation "Copy link to heading")Certificate and CA Rotation

There is a certificate rotation command within vaultctl that deploys a tool to perform the rotation. The tool can also be deployed as packages running CronJobs for better automation.

#### [](#manual_certificate_rotation "Copy link to heading")Manual Certificate Rotation

Run the following command:

This will only rotate client certificates; you must manually rotate broker certificates.

#### [](#automated_certificate_rotation "Copy link to heading")Automated Certificate Rotation

Add the package `kafka-cert-rotation-pkg` to your `packages.txt` file and set the desired rotation schedule in cron format at the following `values.yaml` file path: `kafka.cert_rotation.schedule`

This will only rotate client certificates; you must manually rotate broker certificates.

A benefit of this approach is that it provides warning of the need to rotate a CA. When the desired TTL (Time To Live) on the certificate exceeds the remaining TTL on the CA, the job will fail. It will log this as the error and stop before rotating anything.

#### [](#manual_ca_rotation "Copy link to heading")Manual CA Rotation

If you are rotating an intermediate CA, there is a common root in both the new and the old CA chains and both are/will be provided to Vault Core, you do not need this option. You can manually replace the CA and use the regular `kafka_certs` option on the tool without risking downtime.

However, if you are rotating a root CA or have not/will not include the full chain on an intermediate CA, you should use the `kafka_ca` option as follows:

This may require user action in response to the prompts from the tool. It is designed to prevent downtime during the CA migration. It will prompt you to rotate the broker certificates manually.

### [](#configuring_sasl_scram "Copy link to heading")Configuring SASL-SCRAM

chat\_bubble

Vault Core supports only SASL\_SSL. This means that in addition to selecting either SCRAM-SHA-256 or SCRAM-SHA-512 for authentication, a CA or CA chain must be provided in order to successfully establish the connection between Vault Core services and Kafka over TLS. This can be either a CA certificate/CA chain or a supported Public CA.

1.  (Optional, skip this step if you are using a Public CA) If you are using a non-Public CA, you must add a CA certificate to your secret manager before proceeding to step 2.
    
    -   If you are using HashiCorp Vault, add it at the path `secret/{SECRET_PREFIX};/kafka-ca/ca-certificates.crt`
        
    -   If you are using AWS Secrets Manager, add it at the path `{TM_IAM_PREFIX}/{SECRET_PREFIX}/kafka-ca/ca-certificates.crt`
        
    
2.  If Vault Core has already been installed, replace any existing certificates by running the command:
    
3.  For every service that must authenticate to Kafka using SASL-SCRAM, you must create or update users & secrets in your trusted secret manager (HashiCorp Vault, AWS Secrets Manager, Azure KV) at a recognised path or secret object.
    
    For example, in HashiCorp Vault, check if `"sasl_scram_username"` and `"sasl_scram_password"` fields exist for each service at the path: `"/secret/default/<service-name>/kafka/"`.
    
    lightbulb
    
    You can find a list of Kafka-authenticated services in `release.json` under `.metadata.kafka_principals`.
    
4.  Register the usernames and passwords found in HashiCorp Vault to Kafka. There are multiple ways of doing this, the most common of which is [documented by Confluent](https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_scram.html#sasl-scram-overview).
    
    chat\_bubble
    
    You need to repeat step 3 and step 4 for every Vault Core upgrade, as new services requiring SASL-SCRAM credentials to access Kafka may be introduced.
    
    You may wish to keep a historical record of credentials registered to aid with deregistering credentials from Kafka when they no longer appear in the `kafka_principals_info.json` artefact. It is recommended to only deregister credentials after the Vault Core installation process is complete to avoid downtime.
    
5.  Configure the Vault `values.yaml` file to enable SASL-SCRAM by selecting a SCRAM mechanism, point to the Kafka cluster’s SASL\_SSL port and enable use of the System CA if a Public CA will be used, using the settings described in [Security levels and configuration for Kafka and Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#security_levels_and_configuration_for_kafka_and_vault).
    
6.  Run the Vault installer to apply the changes.
    

### [](#configuring_sasl_oauthbearer "Copy link to heading")Configuring SASL-OAUTHBEARER

chat\_bubble

Vault Core supports only SASL\_SSL. This means that in addition to selecting SASL-OAUTHBEARER for authentication, you must provide a CA or CA chain in order to successfully establish the connection between Vault Core services and Kafka over TLS. This can be either a CA certificate/CA chain or a supported Public CA.

1.  (Optional, skip this step if you are using a Public CA) If you are using a non-Public CA, you must add a CA certificate to your secret manager before proceeding to step 2.
    
    -   If you are using HashiCorp Vault, add it at the path `secret/{SECRET_PREFIX};/kafka-ca/ca-certificates.crt`
        
    -   If you are using AWS Secrets Manager, add it at the path `{TM_IAM_PREFIX}/{SECRET_PREFIX}/kafka-ca/ca-certificates.crt`
        
    
2.  If Vault Core has already been installed, replace any existing certificates by running the command:
    
3.  For every service that must authenticate to Kafka using OAuth, you must create or update users & secrets in your trusted secret manager (HashiCorp Vault, AWS Secrets Manager, Azure KV) at a recognised path or secret object.
    
    For example, in HashiCorp Vault, check if `"oauth_client_id"` and `"oauth_client_secret"` fields exist for each service at the path: `"/secret/default/<service-name>/kafka/"`.
    
    lightbulb
    
    You can find a list of Kafka-authenticated services in `release.json` under `.metadata.kafka_principals`.
    
4.  Register the client IDs and secrets stored in the secrets manager to the OAuth server using the admin endpoint. There are multiple ways of doing this and it depends on the OAuth server that you use.
    
    If this is not supported, then replace the client IDs and secrets in the secret manager with credentials generated by the OAuth server. Please take care with this, as our ACLs assume that the principal of access tokens is the client ID and matches the service name. If your Kafka cluster uses a different part of the access token as a principal, ensure that this matches the service name.
    
    chat\_bubble
    
    You need to repeat step 3 and step 4 for every Vault Core upgrade, as new services requiring SASL-OAUTHBEARER credentials to access Kafka may be introduced.
    
    You may wish to keep a historical record of credentials registered to aid with deregistering credentials from the OAuth server when they no longer appear in the release.json artefact. We recommended that you only de-register credentials after the Vault Core installation process is complete in order to avoid downtime.
    
5.  Configure the Vault `values.yaml` file to enable SASL-OAUTHBEARER by selecting the OAUTH mechanism, point to the Kafka cluster’s SASL\_SSL port ,and enable use of the System CA if you intend to use a Public CA, using the settings described in [Security levels and configuration for Kafka and Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#security_levels_and_configuration_for_kafka_and_vault).
    
6.  Configure the Vault `values.yaml` file to enable connectivity to the OAuth server by specifying the `kafka.client.oauth.auth_server_endpoint` token endpoint and `kafka.client.oauth.auth_method` authentication method supported by the server. Optionally set `kafka.client.oauth.scopes` to specify scopes required by the OAuth server for authorisation and `kafka.client.oauth.extensions` to define the SASL extensions passed on to the Kafka brokers by all Vault Core services.
    
    chat\_bubble
    
    SASL extensions specified in `kafka.client.oauth.extensions` must be formatted as a comma-separated list of key-value pairs with each key matching the regex `[a-z][A-Z]` (starting with a lowercase ASCII letter, followed by zero or more uppercase or lowercase ASCII letters). For example:
    
7.  You must also configure the following settings in order to obtain an autogenerated Istio `ServiceEntry` object so that the host is reachable from inside the service mesh:
    
    1.  Set the `kafka.client.oauth.istio.host_entry` to the full qualified domain name (FQDN) that you are using for retrieving the tokens.
        
    2.  Configure the `kafka.client.oauth.istio.host_port` and `kafka.client.oauth.istio.host_port_protocol` with the correct values that Vault Core will use to access the OAuth server.
        
    
8.  Run the Vault installer to apply the changes.
    

## [](#supported_compression_codecs_for_vault "Copy link to heading")Supported compression codecs for Vault

Vault Core is able to decompress Kafka messages using the following supported codecs.

error

Unsupported codecs will result in consumer errors. You must avoid using them.

 
| Supported codecs | Unsupported codecs |
| --- | --- |
| 
-   Gzip
    
-   Snappy
    
-   LZ4
    





 | 

-   Zstandard
    





 |

## [](#creating_kafka_acls "Copy link to heading")Creating Kafka ACLs

Access control lists (ACLs) provide the necessary [client authorisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authorisation) for Vault Core services to access Kafka resources, such as topics and clusters, and apply specific [operations](https://docs.confluent.io/platform/current/security/authorization/acls/overview.html#operations) to them.

You have two options for creating and managing ACLs in Vault Core:

-   [Automatically](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#automatically_manage_kafka_acls) with the `kafka-init` and `kafka-cleanup` components
    
-   [Manually](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#manually_manage_kafka_acls) with the `release.json` artifact
    

In Vault Core, ACLs are required for setting up [automatic topic management](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#automatically_create_kafka_topics), as well as subsequent automatic ACL management.

Additionally, you need to manually configure supplementary ACLs for the Vault Core public Kafka topics for your services that integrate with them, such as the Postings API, Data Loader API and Stream API topics. These ACLs must be created manually, even if you have chosen to enable automatic ACL management.

The public topics are documented in the [kafka\_topics\_info.json artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_topics_artifact) as topic entries with `"publicAPITopic": true`. You must ensure that your integration services have ACLs set up for the principals they use, with appropriate permissions to access the public topic(s) and consumer groups they interact with.

error

ACLs for integration services MUST only allow access to Vault Core public Kafka topics (`kafka_topics_info.json` entry has `"publicAPITopic": true`). Access to internal topics (`"publicAPITopic": false`) is a security risk and Thought Machine does not support this.

chat\_bubble

Vault Core version 5.2 includes the addition of DENY ACLs for Vault Core principals, primarily to restrict access to Policy topics, as well as a new field, `permission_type` (value: `ALLOW`/`DENY`), in the `release.json` artifact. The Kafka Init/Cleanup components manage these ACLs automatically.

### [](#automatically_manage_kafka_acls "Copy link to heading")Automatically manage Kafka ACLs

Vault Core supports the automatic creation and management of Kafka ACLs via the Kafka Init (`kafka-init`) and Kafka Cleanup (`kafka-cleanup`) components:

-   `kafka-init` generates a list of coarse-grained ACLs as described in the [Release JSON artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact). It sets up the required permissions for all Vault Core services to access Kafka. By using the Init component, you do not need to use the `release.json` to create the ACLs manually.
    
-   `kafka-cleanup` removes ACLs that are no longer valid or required - for example, if a Vault Core service is renamed or removed, or if the required permissions have changed for specific Vault Core services in subsequent releases. By using the Cleanup component, you do not need to keep track of changes to principals in the `release.json` between releases and do not need to apply these changes manually.
    

You need to install `kafka-init` before installing Vault Core, then install `kafka-cleanup` afterwards. This applies to every installation of Vault Core. However, you must first create cluster ACLs with the appropriate permissions for the Kafka Init and Cleanup components to work correctly.

#### [](#create_kafka_cluster_acls_before_installing_kafka_initcleanup_components "Copy link to heading")Create Kafka cluster ACLs before installing Kafka Init/Cleanup components

The Kafka Init and Cleanup components require cluster ACLs (these are ACLs for the cluster resource type) with `DESCRIBE` and `ALTER` permissions. As a preliminary step, you must create the ACLs in the Kafka cluster for the `vault-kafka-init` and `vault-kafka-acl-cleanup` principals before installing the Kafka Init and Cleanup components.

You only need to create these ACLs once (before installing the Init and Cleanup components for the first time), unless you choose to remove the permissions after `kafka-init` and `kafka-cleanup` have run.

You can use the Kafka CLI to create the ACLs, as shown in the following example commands - the principal format will differ depending on the [client authentication](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authentication) method you are using.

Example 1: Command to generate the cluster ACLs if you use SASL-SCRAM for client authentication:

Example 2: Command to generate the cluster ACLs if you use mTLS for client authentication:

lightbulb

If you are using an external tool to generate certificates (not via the [TMComponent Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#tmcomponent_operator)), then you must set the fields `OU`,`O`,`L`,`ST`,`C` to the appropriate values that match the SSL Subject used to generate that certificate.

Regardless of the Kafka installation used, if you are not using the TMComponent Operator to generate the certificates required for Kafka authentication and the client authentication mechanism for Kafka is set to mTLS, you need to set the field `kafka.client.ssl_subject` in the `values.yaml` file to the corresponding SSL Subject, excluding the Common Name (CN), before using the Kafka Init and Cleanup components.

Once you have created the prerequisite ACLs, use `vaultctl install` to install `kafka-init` and `kafka-cleanup` in the correct order. See [Installing Kafka Init/Cleanup components](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start#installing_kafka_initcleanup_components) for more information.

### [](#manually_manage_kafka_acls "Copy link to heading")Manually manage Kafka ACLs

If you are not using the Kafka Init and Cleanup components for automatically managing ACLs, you can use the [release.json artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact) for help with manually generating coarse-grained Kafka ACLs.

You are responsible for making sure your Kafka configuration matches the details specified in the [kafka\_principals](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_principals_json_schema) of the `release.json` for every Vault Core release you install, and making any manual changes accordingly. For example, if a Kafka principal entry was removed, you may want to delete related ACLs, or explicitly deny access for services that no longer exist.

chat\_bubble

If you are using mTLS as your client authentication method, Kafka’s default behaviour is to use the certificate’s Subject name as the principal, of which the Common Name is only a part. This looks like `CN=user,OU=Unknown,O=Unknown,L=Unknown,ST=Unknown,C=Unknown` as per the [Confluent documentation](https://docs.confluent.io/platform/current/kafka/authorization.html#tls-ssl-principal-user-names). You must factor this into your ACL rules or use the [principal mapping rules feature](https://docs.confluent.io/platform/current/kafka/authorization.html#configuration-options-for-customizing-tls-ssl-user-name).

If you opted to use the TMComponent Operator to generate client certificates for mTLS, then when creating ACL rules, the principal will become `CN={common_name},OU=vault,O=Thought Machine Ltd,L=London,ST=Greater London,C=GB`.

#### [](#example_release_json_containing_kafka_principals "Copy link to heading")Example release.json containing Kafka principals

The example below shows one entry in the `release.json` that corresponds to the Burrow consumer lag exporter service.

The example requires both prefix and name-based ACL rules, because it needs access to all Vault Core topics and consumer groups, as well as the `__consumer_offsets` topic using the `burrow-vault` consumer group. Additionally, it is denied access to write to the following topics:

-   `vault.core.policies.policy.event_journal_entry.created`
    
-   `vault.core.policies.policy.events`
    
-   Topics prefixed with `vault.core.policies.policy.events.`
    

**Expand to see an example *release.json* containing Kafka principals**

#### [](#example_expected_results "Copy link to heading")Example expected results

For authorisation, we expect the following ACL rules for the [example release.json](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#example_release_json_containing_kafka_principals) above:

-   `"ALLOW" Principal "burrow" Operations "Read", "Write", "Describe", "DescribeConfigs" On Topics with prefix "vault.", "scheduler.", "ep.", "integration."`
    
-   `"DENY" Principal "burrow" Operations "Write" On Topics with name "vault.core.policies.policy.event_journal_entry.created", "vault.core.policies.policy.events"`
    
-   `"DENY" Principal "burrow" Operations "Write" On Topics with prefix "vault.core.policies.policy.events."`
    
-   `"ALLOW" Principal "burrow" Operations "Read", "Describe", "DescribeConfigs" On Topics with name "__consumer_offsets"`
    
-   `"ALLOW" Principal "burrow" Operations "Read", "Describe" On Groups with prefix "vault", "scheduler", "ep", "switchboard", "watermark-processor", "smart-contracts", "payments.hub", "CreditTransferServiceSchemeEvent"`
    
-   `"ALLOW" Principal "burrow" Operations "Read", "Describe" On Groups with name "burrow-vault”"`
    

chat\_bubble

The principal is a Subject name in the case of mTLS, such as `CN=burrow,OU=vault,O=Thought Machine Ltd,L=London,ST=Greater London,C=GB`.

Depending on the client authentication method, we expect a HashiCorp Vault KV secret at `secret/{path-to-secrets-for-Vault-Core}/burrow/kafka` to contain:

For mTLS For SASL-SCRAM For SASL-OAUTHBEARER

-   `cachain.pem={PEM format CA chain}`
    
-   `client_chain.pem={PEM format client certificate chain with CN burrow}`
    
-   `client_key.pem={PEM format client key}`
    

OR:

-   `client.truststore.p12_b64={base64 encoded PKCS12 truststore}`
    
-   `client.keystore.p12_b64={base64 encoded PKCS12 keystore}`
    

For the PKCS12 stores, a password is needed when creating the bundle. Vault Core services expect the key `test1234` for both the PEM passphrase and the PKCS12 bundle password.

-   `sasl_scram_username=burrow`
    
-   `sasl_scram_password={SASL-SCRAM password}`
    

-   `oauth_client_id=burrow`
    
-   `oauth_client_secret={SASL-OAUTHBEARER client secret}`
    

## [](#creating_kafka_topics_for_vault_core_services "Copy link to heading")Creating Kafka topics for Vault Core services

Vault Core services use Kafka topics for asynchronous message processing and real-time data streaming. These topics are created in two ways:

-   During the installation or upgrade of Vault Core - either the deployed `vault-topic-manager` service creates the topics, or you can manually create them yourself before the installation.
    
-   Integration topics, used to integrate Vault Core with a client’s external services, are created dynamically as part of calls to the Postings API by the deployed `integration-topic-manager` service.
    

You have two options for managing the creation of Kafka topics when installing Vault Core: either [automatically](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#automatically_create_kafka_topics) (using the `vault-topic-manager` deployment) or [manually](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#manually_create_kafka_topics) (using the `kafka_topics_info.json` release artifact).

### [](#automatically_create_kafka_topics "Copy link to heading")Automatically create Kafka topics

lightbulb

Thought Machine recommends enabling Vault Core to automatically manage topics, because this means that the number of topic partitions and retention period is optimised for each release.

Using an optimised number of partitions per topic is highly likely to lead to lower costs for cloud infrastructure, because it will reduce the overall number of topics in the cluster.

The Kafka topic manager `vault-topic-manager` is deployed with every Vault Core installation, and is responsible for the automatic creation and management of Kafka topics.

As well as creating topics with the necessary number of partitions and retention periods, `vault-topic-manager` continuously reconciles the topics in the cluster by:

-   Increasing or decreasing the partitions for any existing Kafka topics depending on the topic configuration for a given Vault Core release. The number of partitions per topic is optimised on each release.
    
-   Automatically deleting any unused or deprecated topics from the cluster.
    
-   Syncing the state of the existing Kafka topics in the cluster with the source of truth, in case any undesirable manual changes have been made to the topics.
    
-   Recreating any required topics that might have been deleted by accident.
    

To carry out automatic topic creation and continuous reconciliation in Vault Core, the `vault-topic-manager` component requires cluster ACLs (these are ACLs for the cluster resource type) with `ALTER` and `DESCRIBE` permissions. Before installing the Vault Core component, you must first create the ACLs in the Kafka cluster for the `vault-topic-manager` principal.

You can use the Kafka CLI to create the cluster ACLs, as shown in the following example commands - the principal format will differ depending on the [client authentication](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#client_authentication) method you are using.

Example 1: Command to generate the cluster ACLs if you use SASL-SCRAM for client authentication:

Example 2: Command to generate the cluster ACLs if you use mTLS for client authentication:

chat\_bubble

If you use an external tool to generate certificates (not via the TMComponent Operator), then you must set the fields `OU,O,L,ST,C` to the appropriate values that match the SSL Subject used for that certificate generation.

If you want to disable reconciliation done by the `vault-topic-manager` and not create the above ACLs, set the `kafka.topics.disable_topic_reconciliation` option in the `values.yaml` configuration to `true`. This means you will need to [Manually create Kafka topics](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_kafka_and_vault#manually_create_kafka_topics).

### [](#manually_create_kafka_topics "Copy link to heading")Manually create Kafka topics

warning

Topics must be set up according to our specifications. You must **not** manually configure or mutate Vault Core Kafka topics in a way that is not specified; for example, by changing the retention period or number of partitions to a value that is not specified in the `kafka_topics_info.json` file.

To keep messages for a longer period than the retention period that is set, you must either relay the Vault Core Kafka topics to your own custom topics that are set with a longer retention period, or load the Vault Core Kafka topics into a data warehouse.

chat\_bubble

If you choose to manually create Kafka topics, you must configure and manage them yourself, based on the information in the `kafka_topics_info.json` file. Additionally, you must do this every time you install a new Vault Core release, before the installation.

Optionally, you can use the [kafka\_topics\_info.json](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_topics_artifact) artifact to aid with manually creating all Kafka topics required by the Vault Core services, in case you do not intend to use the vault-topic-manager deployment or it is incompatible with the managed Kafka service you are using. Use the artifact as input to your own automated Vault Core installation/upgrade pipeline.

Everything must match the artifact for the specific Vault Core version you are using. You are responsible for keeping track of changes in the artifact between Vault Core versions, especially for the following scenarios:

 
| Scenario | What to do |
| --- | --- |
| 
A new topic has been added to the list.

 | 

Ensure the topic is created with the same configuration and details as existing in the artifact.

 |
| 

A topic has been marked for deletion.

 | 

Ensure the topic is safely deleted if it exists in the cluster, or not created at all in case it was already deleted or non-existent.

 |
| 

A topic’s configuration has been updated.

 | 

Ensure the retention period of retaining messages for each topic in the cluster is up to date with the state in the artifact.

 |
| 

A topic’s details have been updated.

 | 

Ensure the number of partitions for each topic entry are up to date with the `numPartitions` value in the artifact. You may need to change the number of partitions:

-   Increasing the number of partitions: Apache Kafka provides APIs that allow for increasing the number of partitions and this is generally a safe operation. However, for topics that rely on strict ordering, you must handle the increasing number of partitions in a safe way, because this results in messages being processed out of order.
    
-   Decreasing the number of partitions: Apache Kafka does not provide APIs for directly decreasing the number of partitions and you must handle this in a safe way.
    





 |

In the `kafka_topics_info.json` artifact, the `repartitioningStrategy` field shows the repartitioning strategy required for a topic if the number of partitions in the Kafka cluster is different from the `numPartitions` value in the artifact:

-   `ALWAYS`: The topic partitions can be increased at all times using the Apache Kafka Admin API or alternative methods.
    
-   `IF_EMPTY`: The topic partitions can be increased or decreased only if the topic is empty - that is, all messages have been processed.
    
-   `DISABLED`: The topic partitions must not be changed.
    

You must update the number of partitions for a topic entry so it matches the `numPartitions` value in the artifact.

See [Kafka topics artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#kafka_topics_artifact) for more details on its JSON schema.

info

If you need to use the `ALWAYS` repartitioning strategy, you **must** follow the instructions outlined below to increase the number of partitions. This is due to a [known issue](https://issues.apache.org/jira/browse/KAFKA-12478) in Kafka that results in messages being skipped, and occurs when increasing the number of partitions of a topic that has consumers configured with the [`auto.offset.reset=latest`](https://kafka.apache.org/41/configuration/consumer-configs/#consumerconfigs_auto.offset.reset/) option.

You must either apply Deny Read ACLs or scale down the consumers to avoid a race between producers producing to the new partitions and consumers identifying that a repartition has occurred. Some consumer services in Vault Core use this configuration option, so you must increase the number of partitions to ensure no messages are skipped.

For instructions on how to increase or decrease the number of topic partitions, follow the relevant steps for the `ALWAYS` and `IF_EMPTY` repartitioning strategies:

ALWAYS IF\_EMPTY

To increase the number of partitions:

1.  Apply a Deny Read ACL to the topic (can use a wildcard user principal `User:*` so you do not need any knowledge of every principal).
    
    1.  Optionally, you can scale down consumers here instead of applying ACLs in this step and in step 3.
        
    
2.  Apply the partition increase to the topic.
    
3.  For every consumer group that consumes from the topic, apply a Deny Read ACL to the group (once again, you can use a wildcard user principal `User:*`).
    
    1.  If you scaled down consumers in step 1, you do not need to apply the ACLs here.
        
    
4.  For each of the consumer groups which consume from the topic, manually set the stored offset of each new partition to 0. Remove each of the Deny Read ACLs you applied to the groups in step 3 or scale the consumers back up if they were scaled down in step 1.
    
5.  Remove the Deny Read ACL you applied to the topic in step 1.
    
    1.  If you scaled down the consumers in step 1, you do not need to do anything here.
        
    

To increase or decrease the number of partitions:

1.  Check if all topic messages have been successfully processed by all consumer groups; that is, there is no topic lag. You can do this by querying the end offsets and the current offset for each consumer group.
    
    1.  If the offsets match, then the messages have been successfully processed.
        
    2.  If there are unprocessed messages on the topic, skip the next steps and proceed to the next topic instead.
        
    
2.  Apply Write Deny ACLs for all consumer groups for the given topic.
    
3.  Repeat the optimistic lock check done from step 1 to avoid any race conditions. If there are unprocessed messages on the topic, then remove the Write Deny ACLs from step 2, skip the next steps and proceed to the next topic instead.
    
4.  Remove the topic from the Kafka cluster.
    
5.  Create a topic with the same name and the updated number of partitions.
    
6.  Remove the Write Deny ACLs from step 2 and proceed to the next topic.