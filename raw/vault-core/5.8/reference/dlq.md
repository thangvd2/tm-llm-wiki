---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/dlq"
title: "Dead Letter Queues"
scraped_at: "2026-06-17T15:41:26.283Z"
images: 0
---

# Dead Letter Queues

Handling Dead Letter Queue (DLQ) messages is an important part of operating a Vault Core instance. This section will cover what these messages mean, how to monitor them and the tooling we provide to help you respond.

## [](#what_are_dead_letter_queues "Copy link to heading")What are Dead Letter Queues?

Dead Letter Queues (DLQs) are a standard error handling mechanism for streaming software systems. In certain scenarios, messages that cannot be processed by a production component when read from a queue are instead placed on a separate queue, the DLQ, for manual investigation and recovery. This ensures that subsequent messages on the original queue can continue to be processed, while any messages that cannot be processed are retained in full, that is, there is no data loss.

When a message appears on a DLQ, this indicates that the standard processing of the message was not able to complete, and no further processing of the message will occur automatically. You must take additional steps in order to recover the original operation that was unable to complete. Failure to do so can lead to incomplete Vault Core functionality. See [DLQ Inspector](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector) for more.

### [](#when_are_dlqs_used "Copy link to heading")When are DLQs used?

The errors encountered by a Vault Core component when processing a message consumed from a Kafka topic fall into two broad categories:

-   *Transient Errors* are errors that are likely to resolve when a message is retried automatically without any state change within Vault Core. For example, if the database is temporarily unavailable, this would be a transient error because when the database becomes available, it processes the message successfully.
    
-   *Non-Transient Errors* are errors that are unlikely to resolve when a message is retried automatically without any state change within Vault Core. For example, if a message cannot be deserialised by the consumer, you will not be able to process the message.
    

While most transient errors are handled within Vault Core, DLQs are used as a recovery mechanism for Kafka messages that are unable to be processed due to some non-transient errors.

The Vault Core DLQ process is as follows:

1.  A Vault Core component which is a consumer of a particular Kafka topic consumes a message from the topic and attempts to process it.
    
2.  While processing the message, a non-transient error is encountered, meaning retrying with the system in its current state will not produce a successful outcome.
    
3.  The message is placed on a dedicated DLQ Kafka topic. Processing of subsequent messages from the original topic continues, but processing of the message that has been placed on the DLQ does **not** continue.
    

In some cases when a message generates a transient error, processing of the message may be retried indefinitely. This behaviour may occur if the database is unavailable. You still need to monitor cases like this, as they may still require manual intervention to proceed.

chat\_bubble

DLQs may contain PII (or other sensitive) data. As a result, anyone or any system may be exposed to this data when reading the DLQ. You must therefore make sure that the readers of DLQ messages have appropriate authorisation to process this data.

In Vault Core, a DLQ message payload is an identical copy of the original message payload. Vault Core creates a new set of headers to capture information about the error. Many DLQ messages include the original headers for republishing purposes.

chat\_bubble

In cases where the message size is very large, DLQs produced by Vault Core’s audit system may have some larger fields in the payload removed. Even if DLQ messages are republished successfully, some audit data may be lost.

## [](#monitoring_dead_letter_queues "Copy link to heading")Monitoring Dead Letter Queues

As mentioned above, you *must* actively monitor DLQs for new messages. In many cases, a message being placed on a DLQ represents a critical processing error which requires immediate attention.

Thought Machine provides Prometheus Alerts that track new messages being placed onto DLQ topics. Alert pagers should be built on top of these alerts to inform you of new messages placed on a DLQ.

For more information on how to configure Alert Pagers, as well as the full list of DLQ alerts, see [Using the Observability Stack](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack).

## [](#dlq_inspector "Copy link to heading")DLQ Inspector

Vault Core ships with a support application (DLQ Inspector) to aid in the handling of DLQ messages. You can use DLQ Inspector to debug errors originating from inside Vault Core and, in some cases, directly remediate them.

DLQ Inspector automatically consumes all DLQ messages published by Vault Core and temporarily stores them in a database. Messages are then made available for listing, reading, and republishing.

The DLQ inspector is at `<YOUR CORE APPS URL>/dlq-inspector`. Alternatively, you can reach it by visiting the Operations Dashboard and selecting DLQ Inspector in the App Switcher.

To learn more about the DLQ Inspector, refer to the [DLQ Inspector Guide](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector).

## [](#manually_inspecting_dead_letter_queue_messages "Copy link to heading")Manually inspecting Dead Letter Queue messages

Thought Machine recommends [DLQ Inspector](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector) as the tool for reading and republishing DLQ messages in Vault Core. You can, however, read topics and messages manually instead. If you want to do this, then Thought Machine recommends [Kcat](https://github.com/edenhill/kcat) (formerly Kafkacat). While running Kcat, use the -h option for more information about the available functionality. Remember that wherever you choose to run Kcat, it will need access to your Kafka broker.

If you are using Kcat to consume and read messages from a DLQ, we recommend:

-   Running via [Docker](https://github.com/edenhill/kcat#running-in-docker) to ensure the latest version of Kcat is used. The command should start with `docker run --rm confluentinc/cp-kcat kcat -b <your_kafka_broker> -t <name_of_dlq_topic> -C`.
    
-   Using the `-J` option to ensure the headers are displayed along with the message body for the consumed messages. Alternatively you can specify a format via `-f` which must include the `%h` header token.
    
-   If you want to only see the headers, you can provide a format that only contains the header token, for example `-f 'Headers: <%h>'`. This may be useful if the original message contains data the user is not authorised to see. For a full list of all the format tokens and what data will be displayed, you can run `docker run --rm confluentinc/cp-kcat kcat -h` and consult the ``Format string tokens:' section. Only the data associated with a given token will be displayed when the `-f`` option is used.
    

Kcat will produce output to Stdout by default.

chat\_bubble

If the message body is in protobuf format, it will not be human readable when read from the DLQ. You must still deserialise the message using the provided Vault Core .proto files. If the DLQ in question does not have the message type documented, contact Thought Machine support, following the process in your Service Procedure Manual.

error

Only manually interact with DLQ Kafka topics in error scenarios. When you do so, take care not to use any consumer groups that are used by any production services.

### [](#decoding_protobuf_messages "Copy link to heading")Decoding Protobuf messages

Depending on your environment settings, some DLQ message bodies will be in either Protobuf or JSON format:

-   If the format is JSON, you do not need to follow the remainder of this section and must not use protoc on your message output.
    
-   If the format is Protobuf, you will need to deserialise the message before it is human readable, instructions for which are below.
    

To deserialise an encoded Protobuf message, you must have access to the corresponding .proto file that contains the message definition in question. Many of these .proto files can be found in the \`Downloading the proto files' part of the Streaming API documentation for the relevant API. When you have this file, you can convert the message into human-readable JSON format. If you do not have access to the corresponding .proto file, please contact Thought Machine support, following the process in your Service Procedure Manual.

To determine the correct .proto file for deserialising the body of a DLQ:

-   Go to the documentation for the specific DLQ in question.
    
-   Find the message type under the \`What message has been sent to the DLQ?' section.
    
-   Find the .proto file that contains this message type. There will be a `Message <value>` line in the file, where `<value>` is the message type from the previous step.
    

There are many ways that you can use a .proto file to read a message in Protobuf format. For a lightweight approach , Thought Machine recommends using [Protoc](https://grpc.io/docs/protoc-installation/).

You can run Protoc on any protobuf bytes to convert to JSON as follows: `protoc --decode=<package_name.message_name> <path_proto_file>`

The package name is defined in the .proto file by the line: `package <package_name>;`

For example:

`protoc --decode=test_package.TestMessage path_to_proto/test.proto`

would deserialise protobuf bytes into JSON format for a protobuf message of type `TestMessage` where:

-   The `TestMessage` type is defined in \`test.proto'.
    
-   The ``test.proto' contains a `package test_package;`` line, which defines the package name.
    
-   The ``test.proto' file is located in your `/path_to_proto/`` directory.
    

If you are using protoc in conjunction with Kcat, only read the message body from Kafka before passing it to protoc. For example: `docker run --rm confluentinc/cp-kcat kcat -b <your_kafka_broker> -t <name_of_dlq_topic> -C -D “” | protoc --decode=test_package.TestMessage path_to_proto/test.proto`.