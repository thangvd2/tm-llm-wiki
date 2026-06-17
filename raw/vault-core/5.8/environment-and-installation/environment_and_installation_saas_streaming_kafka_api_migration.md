---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_api_migration"
title: "Kafka API migration for AWS environments"
scraped_at: "2026-06-16T15:24:30.708Z"
images: 0
---

# Kafka API migration for AWS environments

SaaS

Learn about the migration to the new Kafka API for AWS environments.

## [](#about_the_kafka_api_migration_for_aws "Copy link to heading")About the Kafka API migration for AWS

### [](#what_is_the_kafka_api_migration "Copy link to heading")What is the Kafka API migration?

The Kafka API migration is the migration from the legacy Kafka API to the new Kafka API.

### [](#what_are_the_benefits_of_using_the_new_kafka_api "Copy link to heading")What are the benefits of using the new Kafka API?

There are several benefits to using the new Kafka API, including:

-   Requiring fewer cloud resources - the new Kafka API requires one VPC endpoint in contrast to the four VPC endpoints that the legacy Kafka API requires
    
-   Reliability improvements
    
-   If requested, Thought Machine can configure the new Kafka API with authentication and authorisation - see [Kafka Auth overview](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_auth_technical_overview)
    

### [](#how_do_i_know_if_i_need_to_migrate_to_the_new_kafka_api "Copy link to heading")How do I know if I need to migrate to the new Kafka API?

You will need to migrate your Vault Core SaaS instance if all of the following points are true:

-   You are using AWS
    
-   You onboarded to Vault Core SaaS before November 2023
    
-   You have four endpoints for connecting to the Kafka API - for example (note the `<placeholders>`): `kafka.kafka-v2.$<client_codename>.$<environment>.saas.tmachine.io` `kafka-0.kafka-v2.$<client_codename>.$<environment>.saas.tmachine.io` `kafka-1.kafka-v2.$<client_codename>.$<environment>.saas.tmachine.io` `kafka-2.kafka-v2.$<client_codename>.$<environment>.saas.tmachine.io`
    

### [](#what_do_i_need_to_do_to_prepare_for_the_migration "Copy link to heading")What do I need to do to prepare for the migration?

There are infrastructure changes and tests that you must ensure that you complete prior to the migration. The [Pre-migration steps](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_api_migration#pre_migration_steps) and [Post-migration steps](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_api_migration#post_migration_steps) sections of this guidance cover these requirements.

### [](#when_will_the_migration_occur "Copy link to heading")When will the migration occur?

A Thought Machine Client Success Manager (CSM) will contact you to schedule the migration.

### [](#will_there_be_downtime_or_performance_degradation_during_the_migration "Copy link to heading")Will there be downtime or performance degradation during the migration?

Yes, the process requires a small period of downtime followed by a small period of performance degradation during the migration. The downtime lasts up to five minutes, and the performance degradation lasts up to five minutes.

## [](#pre_migration_steps "Copy link to heading")Pre-migration steps

Before you migrate to the Kafka API, you must complete the following actions.

### [](#1_create_a_new_kafka_vpc_endpoint "Copy link to heading")1\. Create a new Kafka VPC endpoint

One of the benefits of the Kafka API migration is that it requires fewer VPC endpoints. The legacy Kafka API requires four VPC endpoints per environment - one for each broker and one for bootstrapping. The new Kafka endpoint only requires one VPC endpoint.

#### [](#vpc_endpoint "Copy link to heading")VPC endpoint

You must create one VPC endpoint using the VPC endpoint service name that is provided to you by your Thought Machine Client Success Manager (CSM). Your Kafka clients will make connections to the Kafka API, through this VPC endpoint, on port `443`.

#### [](#dns_record "Copy link to heading")DNS Record

You must create one wildcard DNS record for the new Kafka API:

```
\*.kafka.$<client\_codename>.$<environment>.saas.tmachine.io
```

This record must resolve to the new VPC endpoint.

### [](#2_verify_the_kafka_client_configuration "Copy link to heading")2\. Verify the Kafka client configuration

Prior to the migration, you must verify that the configuration of your Kafka clients matches the following settings and descriptions.

#### [](#bootstrap_servers "Copy link to heading")Bootstrap servers

You must ensure that this is set to the legacy Kafka bootstrap endpoint:

```
kafka.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

This must NOT contain the addresses of the legacy Kafka brokers. This is because the broker addresses will become unavailable during the migration. This value is `bootstrap.servers` in the [official Apache Kafka client libraries](https://kafka.apache.org/documentation#consumerconfigs_bootstrap.servers).

#### [](#ssl_truststore_location "Copy link to heading")SSL Truststore location

You must ensure that this is set to the location of your CA (Certificate Authority) bundle. You MUST verify that the configured CA bundle trusts the certificates for the new addresses - see step 3. Verify connectivity. This value is `ssl.truststore.location` in the [official Apache Kafka client libraries](https://kafka.apache.org/documentation#connectconfigs_ssl.truststore.location).

#### [](#auto_offset_reset "Copy link to heading")Auto offset reset

For consumers that depend on at-least-once delivery and message ordering, you must ensure that this is set to `earliest`. In the unlikely case that a failure occurs during the migration, resetting the consumer offsets to the earliest message guarantees that no messages are missed. This value is `auto.offset.reset` in the [official Apache Kafka client libraries](https://kafka.apache.org/documentation#consumerconfigs_auto.offset.reset).

### [](#3_verify_connectivity "Copy link to heading")3\. Verify connectivity

error

During the migration, your Kafka clients switch to connecting to the Kafka brokers on port 443. Make sure that your network policies allow egress traffic on this port.

Once you have created the VPC endpoint and the DNS records, you must test the connectivity. This is required in order to ensure that the VPC endpoint and DNS records are correct, to ensure your Kafka clients can successfully connect to the new broker endpoints, and to ensure that your Kafka clients trust the certificates of the new broker endpoints. Once you have finished testing connectivity, contact your Thought Machine CSM with a screenshot of your test output.

The method that you can use to test this connectivity depends on your system architecture.

#### [](#example_connectivity_test "Copy link to heading")Example connectivity test

1.  Download a Kafka Docker image OR binary from the [Apache Kafka downloads page](https://kafka.apache.org/downloads).
    
2.  Deploy the image in a development environment OR if you are using a binary add it to the same base image you use for your services that connect to Vault Core.
    
    error
    
    You MUST make sure that the CA bundle you have in the image is IDENTICAL to the one that you use for your Kafka clients.
    
3.  Create a `config.properties` file in the image/container with the following entries:
    
    ```
    security.protocol=SSL
    ssl.truststore.location=$<path-to-ca-bundle>
    ssl.truststore.type=$<ca-bundle-file-type>
    ```
    
4.  Using the shell of the image, query the broker api versions using the bootstrap address and then one of the broker addresses:
    
    ```
    $ ./bin/kafka-broker-api-versions.sh --bootstrap-server=bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443 --command-config=config.properties
    $ ./bin/kafka-broker-api-versions.sh --bootstrap-server=broker-0.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443 --command-config=config.properties
    ```
    
    Each of these commands should return something similar to this (truncated):
    
    ```
    broker-0.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443 (id: 0 rack: eu-west-2a) -> (
        Produce(0): 0 to 9 \[usable: 9\],
        ...
    )
    broker-1.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443 (id: 1 rack: eu-west-2b) -> (
        Produce(0): 0 to 9 \[usable: 9\],
        ...
    )
    ...
    ```
    
    The output must NOT contain ANY connection or SSL errors.
    
5.  Take a screenshot of the above output and send it to your Thought Machine CSM.
    

## [](#during_the_migration "Copy link to heading")During the migration

chat\_bubble

Thought Machine has designed this migration process so that it does not require manual intervention from you at the time of the API switchover.

### [](#the_migration "Copy link to heading")The migration

The migration involves switching over the connectivity of Kafka clients from the legacy Kafka broker endpoints to the new Kafka broker endpoints that you created in the [Pre-migration steps](/vault-core/5-8/EN/environment_and_installation/saas/streaming/kafka_api_migration#pre_migration_steps) section. This happens automatically and does NOT require manual intervention on the Kafka client side. During the migration you will experience a short period of downtime of up to five minutes, followed by a short period of performance degradation of up to five minutes. If the downtime or performance degradation periods exceed these durations contact Thought Machine support via your Service Desk portal.

### [](#service_impact "Copy link to heading")Service impact

#### [](#rest_apis "Copy link to heading")REST APIs

The migration does not affect REST APIs except the Create (async) endpoint for the Posting Instruction Batch resource. This endpoint will experience the same period of downtime as the Postings API.

#### [](#postings_api "Copy link to heading")Postings API

During the migration, producers and consumers on the Postings API experience the following approximate timeline of events:

error

If any of your Kafka clients are unable to reconnect to the API after the expected downtime period, then restart them. This forces a refresh of their metadata.

##### [](#stage_1_connection_timeouts_and_topic_authorisation_errors "Copy link to heading")Stage 1: Connection timeouts and topic authorisation errors

Your Kafka clients experience connection timeouts and topic authorisation errors. This caused by Thought Machine rejecting connections on your legacy Kafka broker VPC endpoints and applying deny write ACLs on the legacy Kafka broker addresses.

##### [](#stage_2_connections_are_initiated_to_the_new_broker_addresses "Copy link to heading")Stage 2: Connections are initiated to the new broker addresses

Your Kafka clients connect to the new broker addresses, which are being advertised by the legacy bootstrap address.

##### [](#stage_3_topic_and_group_authorisation_errors_on_the_new_broker_addresses "Copy link to heading")Stage 3: Topic and group authorisation errors on the new broker addresses

Your producers and consumers are connected to the new broker addresses, but cannot produce or consume from the new addresses.

##### [](#stage_4_duplicate_messages "Copy link to heading")Stage 4: Duplicate messages

Your consumers are able to read from the new broker addresses, but may experience a short period of duplicate messages.

##### [](#stage_5_rejected_posting_requests "Copy link to heading")Stage 5: Rejected posting requests

It is likely that Vault Core will reject any posting requests that were on the request topic prior to the migration and had not previously been processed. This is due to the TTL (Time to Live) expiring. If there is a large backlog of posting requests after the migration is complete, some subsequent requests may also exceed their TTL.

error

You should not experience any missed messages or receive any messages out of order.

For Stages 1-3, Thought Machine considers this as downtime on the API and expects this to last up to five minutes. For Stages 4 and 5, Thought Machine considers this as performance degradation, and expects this period to last up five minutes after the downtime period.

Contact Thought Machine for support if the downtime period or performance degradation period exceeds these durations.

#### [](#streaming_apis "Copy link to heading")Streaming APIs

The migration has a similar impact on each of the Streaming APIs as on the Postings API. Consumers on these APIs experience this approximate timeline of events:

chat\_bubble

If any of your Kafka clients are unable to reconnect to the API after the expected downtime period, then restart them. This forces a refresh of their metadata.

##### [](#stage_1_connection_timeouts "Copy link to heading")Stage 1: Connection timeouts

Your Kafka clients experience connection timeouts. This caused by Thought Machine rejecting connections on your legacy Kafka broker VPC endpoints.

##### [](#stage_2_connections_are_initiated_to_the_new_broker "Copy link to heading")Stage 2: Connections are initiated to the new broker

addresses Your Kafka clients connect to the new broker addresses, which are being advertised by the legacy bootstrap address.

##### [](#stage_3_topic_and_group_authorisation_errors_on_the_new_broker_addresses_2 "Copy link to heading")Stage 3: Topic and group authorisation errors on the new broker addresses

Your producers and consumers are connected to the new broker addresses, but cannot produce or consume from the new addresses.

##### [](#stage_4_duplicate_messages_2 "Copy link to heading")Stage 4: Duplicate messages

Your consumers are able to read from the new broker addresses, but may experience a short period of duplicate messages.

error

You should not experience any missed messages or receive any messages out of order.

For Stages 1-3, Thought Machine considers this as downtime on the API and expects this to last up to five minutes. For Stages 4 and 5, Thought Machine considers this as performance degradation, and expects this period to last up five minutes after the downtime period.

Contact Thought Machine for support if the downtime period or performance degradation period exceeds these durations.

## [](#post_migration_steps "Copy link to heading")Post-migration steps

Once you have migrated to the new Kafka API, you must complete the following actions and do so within 12 weeks.

### [](#1_update_the_kafka_client_configuration "Copy link to heading")1\. Update the Kafka client configuration

In the post-migration state, Kafka clients are still bootstrapping using the legacy Kafka API bootstrap address:

```
kafka.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io:9092
```

You must update the client configuration to use the new Kafka API bootstrap address:

```
bootstrap.kafka.$<client\_codename>.$<environment>.saas.tmachine.io:443
```

### [](#2_remove_legacy_kafka_vpc_endpoints_and_dns_records "Copy link to heading")2\. Remove legacy Kafka VPC endpoints and DNS records

error

Before deleting the VPC endpoints, verify in AWS CloudWatch that they have no active connections and no live traffic.

Once you have rolled out the configuration for all of the Kafka clients, you can remove the legacy Kafka API cloud resources. This comprises the following DNS records and the VPC endpoints that they resolve to:

```
kafka.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

```
kafka-0.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

```
kafka-1.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```

```
kafka-2.kafka-v2.$<client\_codename>.$<environment>.saas.tmachine.io
```