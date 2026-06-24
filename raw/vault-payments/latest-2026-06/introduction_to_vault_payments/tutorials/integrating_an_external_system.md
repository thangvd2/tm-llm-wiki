---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_an_external_system"
title: "Integrating with an external system"
scraped_at: "2026-06-17T15:45:36.844Z"
images: 0
---

# Integrating with an external system

This tutorial covers setting up an [Integration](/vault-payments/latest/EN/using_vault_payments/integrations/) for an external system and using it within an [Instruction Flow](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_flows). Prior reading of the [Concepts](/vault-payments/latest/EN/using_vault_payments/integrations/) section is highly recommended.

This tutorial will make use of the Instruction Flow from the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial.

We are going to connect an imaginary fraud system to Vault Payments, which, given an Instruction, will respond with whether it is fraudulent or not. We will then alter an existing Instruction Flow to make use of this Integration and use the information it returns to accept or reject the Instruction. We will then enable authentication for this Integration to improve security, and finally, migrate it to use AWS PrivateLink for connectivity.

## [](#setting_up_the_integration "Copy link to heading")Setting up the Integration

This section assumes you have an JSON/HTTP endpoint which is reachable over the public internet, and the Instruction Flow created as part of the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial.

### [](#the_mock_fraud_service "Copy link to heading")The mock fraud service

For this tutorial we will be using an imaginary fraud service which has a single HTTP endpoint called `/check`. The endpoint accepts an HTTP POST request with a JSON payload containing a request ID and a Vault Payments Instruction:

The endpoint then simply responds with a boolean indicating whether the Instruction is likely fraudulent:

We will assume the endpoint is reachable over the public internet at `[https://mock-fraud.example.com/check](https://mock-fraud.example.com/check)`.

#### [](#creating_the_integration "Copy link to heading")Creating the integration

First we must create an `Integration` resource which will represent our fraud system:

Then we’re ready to add the first version of this Integration’s configuration:

The Integration Version may be created in status `STATUS_PENDING` and take a moment to automatically progress to `STATUS_READY`, at which point it should be ready for use.

#### [](#using_the_integration_in_an_instruction_flow "Copy link to heading")Using the integration in an Instruction Flow

We will modify the Instruction Flow created as part of the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial to add a new step which will make an HTTP request to our new mock fraud service and use its information to accept or reject the Instruction.

We can add this [HTTPStep](/vault-payments/latest/EN/api/flows/flows_api#HTTPStep) in between the existing `account_selection` and `core_postings` steps as follows:

Once this new version of the Instruction Flow has been [uploaded via our API](/vault-payments/latest/EN/api/payments_api#instructionflowversion), all new Instructions using this flow will automatically be fraud checked using the new Integration we’ve added.

#### [](#adding_error_handling "Copy link to heading")Adding error handling

There may be scenarios where your integration is unavailable when processing an Instruction. By default, Vault Payments will mark the associated `step` and `Instruction` as `ERRORED` and halt processing. This is the desired behaviour for most `Integrations`, however there are cases where we may want to handle that error ourselves in the flow. To facilitate this we can add an `on_error_func` to our fraud `HTTPStep`.

## [](#adding_authentication "Copy link to heading")Adding authentication

Currently our fraud check endpoint does not require authentication, but we’d like to protect it to prevent abuse.

Vault Payments supports both static tokens and the [OAuth 2.0 client credentials](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) flow in order to obtain access tokens for Integrations. For this demo we will use OAuth 2.0.

In order to use this authentication mechanism we require an OAuth 2.0 compliant auth server providing a [`/token` endpoint](https://www.rfc-editor.org/rfc/rfc6749#section-3.2), as well as a client ID and client secret. We assume this is already set up. Compliant auth servers are available from a number of providers, e.g. [Okta](https://okta.com).

For the sake of this tutorial we assume the fraud check endpoint has already been updated to expect and verify the `Authorization: Bearer <token>` header we’ll start including in all requests to the endpoint.

To configure Vault Payments to start including access tokens in its requests to this Integration, we can simply create a new version of its configuration:

All we had to do is supply the necessary credentials as part of the `oauth_client_credentials_auth` field, and set a `refresh_after` interval at which Vault Payments will refresh the token. Please consult our [guidance on how to best choose this interval](/vault-payments/latest/EN/using_vault_payments/integrations#integration_authentication).

The Instruction Flow itself does not have to be updated. All the configuration surrounding authentication is managed as part of the Integration Version. Changes are automatically applied to existing Instruction Flows that reference the Integration. Note, however, that it may take a moment for this Integration Version to progress to `STATUS_READY` and for the configuration change to start affecting new instructions being processed.

## [](#connecting_via_aws_privatelink "Copy link to heading")Connecting via AWS PrivateLink

As our fraud check endpoint deals with sensitive information and is used on the hot-path of Instruction processing where latency is crucial we’d feel better if we didn’t have to communicate with it over the public internet.

Vault Payments supports connectivity over AWS PrivateLink, which offers better security, latency and cost for systems which are already deployed on AWS.

All that is required is an [AWS VPC endpoint service](https://docs.aws.amazon.com/vpc/latest/privatelink/configure-endpoint-service.html) which meets the following criteria:

-   Has been created in one of the [supported regions](/vault-payments/latest/EN/using_vault_payments/integrations#integration_connectivity) - Is associated with a [private DNS name](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html) for which ownership has been verified - Allows VPC endpoint connection requests from Thought Machine (please contact us for details)
    

Assuming the above are given, we can simply update the configuration of our Integration for a final time:

Note that we simply replaced `public_internet_connectivity` with `aws_privatelink_connectivity` and provided the hostname of the VPC endpoint service.

Unlike other connectivity types, AWS PrivateLink often requires an additional manual step before the Integration Version can transition to `STATUS_READY`. Once the new Integration Version has been created, Vault Payments will automatically send a VPC endpoint connection request to the specified VPC endpoint service. The configuration change cannot progress until this request has been accepted. The request may be manually accepted via the AWS Console. Alternatively the VPC endpoint service can be configured to automatically accept incoming requests. While Vault Payments is waiting for the request to be accepted, the Integration Version may remain in `STATUS_USER_ACTION_REQUIRED`. Once accepted, the status should automatically progress to `STATUS_READY`. If it instead transitions to `STATUS_ERRORED` please check the provided details and the requirements the VPC endpoint service must meet, and create a new Integration Version in case the details need to be updated.