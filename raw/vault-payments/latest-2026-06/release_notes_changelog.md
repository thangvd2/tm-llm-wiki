---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/release_notes/changelog"
title: "Changelog"
scraped_at: "2026-06-17T05:13:37.556Z"
images: 0
---

# Changelog

  | When | Where | What changed |
| --- | --- | --- |
| 
2026-06-01

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.17.2, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2026-05-29

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.17.1, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2026-05-29

 | 

Payments API

 | 

Support for BACS and FPS [Membership Directories](/vault-payments/latest/EN/api/payments_api#membership_directories).

 |
| 

2026-05-28

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.17.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2026-05-28

 | 

Payments API

 | 

Full release of [Instruction Batches APIs](/vault-payments/latest/EN/api/payments_api#instruction_batches), [Instruction Files APIs](/vault-payments/latest/EN/api/payments_api#instruction_files), and [Instruction File Specification APIs](/vault-payments/latest/EN/api/payments_api#instruction_file_specification).

 |
| 

2026-05-27

 | 

Vault Payments App

 | 

Added the number of times a step has been retried to the Instruction history section in the Payment Details screen.

 |
| 

2026-05-19

 | 

Vault Payments App

 | 

Updated the Aggregation API to support returning a bucket for resources with an empty value when grouping by a specific field. These can now be viewed in Dashboards as well as when requesting field\_buckets directly via the API.

 |
| 

2026-05-07

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.16.1, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-05-01

 | 

Payments API

 | 

Released the [Audit API](/vault-payments/latest/EN/api/audit_api).

 |
| 

2025-04-28

 | 

Vault Payments App

 | 

Added support for [deleting payment initiation template presets](/vault-payments/latest/EN/app/using_the_app#deleting_template_presets). This can be done by users with the [required permission scopes](/vault-payments/latest/EN/app/user_access_management#payments).

 |
| 

2026-04-23

 | 

Payments API

 | 

BatchGet endpoint for Instructon Flows, Integrations, Rules, RuleSets, Cores and Templates supports 'fields\_to\_include', with an option to include the Active Version of a resource.

 |
| 

2026-04-22

 | 

Payments API

 | 

Added `bank_identifier_type` and `instrument_identifier_type` to [Payment Instrument](/vault-payments/latest/EN/using_vault_payments/routing#routing_information) Routing Information.

 |
| 

2026-04-15

 | 

Vault Payments App

 | 

Released [presets support in Payment Initiation](/vault-payments/latest/EN/app/using_the_app#using_payment_initiation_template_presets). These can be created and used by users with the [required permission scopes](/vault-payments/latest/EN/app/user_access_management#payments).

 |
| 

2026-04-14

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.16.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2026-03-30

 | 

Payments API

 | 

Added instruction metrics to the [OpenMetrics API](/vault-payments/latest/EN/api/openmetrics_api).

 |
| 

2026-03-25

 | 

Payments API & Vault Payments App

 | 

Added nested query syntax to the Search Query Language.

 |
| 

2026-02-17

 | 

Payments API & Vault Payments App

 | 

Added ability to filter by the last four digits of the card PAN and by card ID in the SearchPayments API and in the Vault Payment App search payments screen.

 |
| 

2026-02-17

 | 

Payments API

 | 

Improved support and rendering for reason code inputs in Payment initiation templates.

 |
| 

2026-01-29

 | 

Payments API

 | 

Added inquiry initiation and administration initiation payloads to the Payment resource.

 |
| 

2026-01-26

 | 

Payments API

 | 

Added support for [Fedline Integrations](/vault-payments/latest/EN/api/payments_api#integration).

 |
| 

2026-01-07

 | 

Payments API

 | 

Added integration metrics to the [OpenMetrics API](/vault-payments/latest/EN/api/openmetrics_api).

 |
| 

2026-01-05

 | 

Payments API

 | 

Added new Payment resource types: `PAYMENT_TYPE_CARD`, `PAYMENT_TYPE_WALLET`, `PAYMENT_TYPE_ACCOUNT_TRANSFER` and `PAYMENT_TYPE_ADMIN`. The following types are deprecated and will be removed in a future update: `PAYMENT_TYPE_CARD_*` and `PAYMENT_TYPE_FEE_COLLECTION_REVERSAL`. Also added new Payment resource fields `channel`, `action`, `reason` and `card_payment_data.entry`.

 |
| 

2025-12-19

 | 

Payments API

 | 

Released the [Templates API](/vault-payments/latest/EN/api/payments_api#templates).

 |
| 

2025-12-19

 | 

Vault Payments App

 | 

Introduced support for retrying or cancelling errored instructions from the Payment details screen of the app.

 |
| 

2025-12-09

 | 

Payments API

 | 

Added support for updating certain Payments resources during CLU import conflicts. You can now specify `on_conflict: UPDATE` in the resource YAML file.

 |
| 

2025-12-04

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.15.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-11-11

 | 

Payments API

 | 

Support OAuth Password Grant Type [Authentication](/vault-payments/latest/EN/using_vault_payments/integrations#integration_authentication) for Integrations.

 |
| 

2025-11-04

 | 

Flows API

 | 

Introduce [interruption](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#interruption) capability in Instruction Flows to allow processing correlated Instructions without queueing.

 |
| 

2025-11-04

 | 

Flows API

 | 

Introduce [logging](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/additional_modules#logging) capability in Instruction Flows.

 |
| 

2025-11-04

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.14.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-10-30

 | 

Payments API

 | 

Integration Healthchecks will [now consider `4xx` codes as a failure](/vault-payments/latest/EN/using_vault_payments/integrations#integration_healthchecks).

 |
| 

2025-10-27

 | 

Payments API

 | 

Released the [OpenMetrics API](/vault-payments/latest/EN/api/openmetrics_api).

 |
| 

2025-10-21

 | 

Vault Payments App

 | 

Added User Provisioning.

 |
| 

2025-10-17

 | 

Payments API

 | 

Released the [Aggregations API](/vault-payments/latest/EN/api/aggregations).

 |
| 

2025-10-17

 | 

Vault Payments App

 | 

Released the [Payment Dashboard UI application](/vault-payments/latest/EN/app/using_the_app#dashboards).

 |
| 

2025-10-09

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.13.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-10-08

 | 

Vault Payments App

 | 

Added custom Roles and Attribute Based Access Control (ABAC) to the Payment, Instruction, Manual Decision and Task resources.

 |
| 

2025-10-08

 | 

Payments API

 | 

Initial release of [Tasks and Approvals](/vault-payments/latest/EN/using_vault_payments/tasks).

 |
| 

2025-10-03

 | 

Payments API

 | 

Support for Fedwire and FedACH [Membership Directories](/vault-payments/latest/EN/api/payments_api#membership_directories).

 |
| 

2025-09-18

 | 

Payments API

 | 

Added `replaced_by` field to the [Card](/vault-payments/latest/EN/api/payments_api#card) resource.

 |
| 

2025-09-05

 | 

Flows API

 | 

Fix for resolving Parameter Values when multiple `MatchPaymentInstrument` steps are used in a flow (defaulting to Global values for Parameters which are not defined by the newly matched Payment Instrument).

 |
| 

2025-08-04

 | 

Payments API

 | 

Remove deprecated Payment Instrument field `account_link_selection_rules` in favour of direct replacement `account_links`.

 |
| 

2025-08-04

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.12.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-07-29

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.11.1, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-07-23

 | 

Payments API, Vault Payments App

 | 

Added settlement amount to card payments, as well as including it in the fields displayed in the UI.

 |
| 

2025-07-07

 | 

Payments API

 | 

Updated scopes from `payments:execute` and `payments.calendars:execute` to `payments:read` and `payments.calendars:read` respectively for [CalculateCalendarPeriod](/vault-payments/latest/EN/api/payments_api#_payments_v1_calendars_CalendarPeriod_CalculateCalendarPeriod) endpoint.

 |
| 

2025-06-19

 | 

Payments API

 | 

Added `name` and `business_name` fields to the [Cardholder](/vault-payments/latest/EN/api/payments_api#cardholders) resource.

 |
| 

2025-06-13

 | 

Vault Payments App

 | 

Introduced dark theme in the app. Users can now switch between the light and dark themes of the app through the top-right user menu in the navigation bar.

 |
| 

2025-06-10

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.11.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-06-09

 | 

Payments API

 | 

Added `metadata` field to the [Card](/vault-payments/latest/EN/api/payments_api#card) resource, with support for updating individual keys.

 |
| 

2025-06-05

 | 

Payments API

 | 

Deprecated routing\_information of `/api/v1/payment-instruments:search` in favour of routing\_information\_queries which supports multiple pieces of routing information.

 |
| 

2025-05-14

 | 

Payments API

 | 

Added a new payment status `PAYMENT_STATUS_RECALL_REQUESTED`, used to indicate that a recall request has been initiated and is awaiting a response.

 |
| 

2025-04-22

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.10.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-04-17

 | 

Payments API

 | 

Added support for the synchronous endpoint on Vault Core Postings Integration Versions.

 |
| 

2025-04-17

 | 

Payments API

 | 

Parameter Values now supports `json` value type.

 |
| 

2025-04-13

 | 

Flows API

 | 

Clarified that the validation of remittance information elements is not in scope for the [TIPS validation module](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips).

 |
| 

2025-04-11

 | 

Payments API

 | 

Top-level `Instruction` field `payment_system` is now mandatory, and `scheme` has become optional. In production environments `payment_system` must be an allowed value.

 |
| 

2025-04-10

 | 

Payments API

 | 

Released the beta [Instruction File](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#instruction_file_step) Step.

 |
| 

2025-04-10

 | 

Payments API

 | 

Released the beta [Instruction Batches APIs](/vault-payments/latest/EN/api/payments_api#instruction_batches), [Instruction Files APIs](/vault-payments/latest/EN/api/payments_api#instruction_files), and [Instruction File Specification APIs](/vault-payments/latest/EN/api/payments_api#instruction_file_specification).

 |
| 

2025-04-10

 | 

Engine

 | 

Added beta support for File based payment processing. Documentation [Batch Processing](/vault-payments/latest/EN/using_vault_payments/instruction_batch_processing#http).

 |
| 

2025-03-28

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.9.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-03-28

 | 

Payments API

 | 

Add HTTP Response to `on_error_func` for [HTTP](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_step) and [HTTPAsync](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_async_step) Steps.

 |
| 

2025-03-28

 | 

Payments API

 | 

Add ability to define a `StatusCodePolicy` for [HTTP](/vault-payments/latest/EN/using_vault_payments/integrations#http) and [HTTP Async](/vault-payments/latest/EN/using_vault_payments/integrations#http_async) Integrations.

 |
| 

2025-03-24

 | 

Payments API

 | 

Add ability to define a [RetryPolicy](/vault-payments/latest/EN/using_vault_payments/integrations#integration_retries) at the Integration-level.

 |
| 

2025-02-25

 | 

Payments API

 | 

Added a public [Ping endpoint](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#ping_api_endpoint) for basic network reachability checks.

 |
| 

2025-02-24

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.8.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-02-21

 | 

Flows API

 | 

Support for [HTTPAsync](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_async_step) step has been added which enables integrations with asynchronous systems from within Instruction Flows.

 |
| 

2025-02-13

 | 

Payments API

 | 

List and Get endpoints now have a 'fields\_to\_include' field with the option to include the Active Version for a resource. Supported resources: Instructon Flows, Integrations, Rules, RuleSets, and Cores.

 |
| 

2025-02-11

 | 

Payments API

 | 

Integration healthcheck requests will now attach relevant auth tokens. Consequently, receiving a `401 Unauthorized` response during an [HTTP healthcheck](/vault-payments/latest/EN/using_vault_payments/integrations#integration_healthchecks) will be considered a failure.

 |
| 

2025-01-30

 | 

Payments API

 | 

Added `size` and `is_truncated` fields to the `HTTPResponse` message in the Instruction step history. Vault Payments will now [truncate HTTP responses](/vault-payments/latest/EN/using_vault_payments/integrations#http) over a certain size limit.

 |
| 

2025-01-30

 | 

Vault Payments App

 | 

Removed user access management permission: `payments.investigation_payments:read` since it has been replaced by `payments.payments:read`.

 |
| 

2025-01-23

 | 

Streaming API

 | 

The documentation for the streamed Kafka [events](/vault-payments/latest/EN/api/streaming_api) has been updated and includes the specification for all the Configuration and Routing resources.

 |
| 

2025-01-16

 | 

Flows API

 | 

It is allowed to include a `datetime` object in the `json` field in the [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest). When Vault Payments makes a request the object will be converted into a string representing timestamp in the ISO 8601 format.

 |
| 

2025-01-14

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.7.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2025-01-06

 | 

Vault Payments App

 | 

Added new UI filter for Payment `scheme` and Instruction `payment_system` and refined the existing filters to match the new Payment and Instruction fields.

 |
| 

2025-01-03

 | 

Vault Payments App

 | 

Added the ability to search for Payments using the [Search Query Language](/vault-payments/latest/EN/api/search_query_language) directly in the UI. Vault Payments App users are now able to search for Payments with the same level of granularity as they would be able to via the API.

 |
| 

2024-12-19

 | 

Payments API

 | 

Beta: Added support for MandateAcceptanceReport (pain.012.001) to the Instruction API.

 |
| 

2024-12-05

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.6.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-12-04

 | 

Payments API

 | 

Added `payment_system` field to Instruction and `scheme` field to Payment. Previously `scheme` on Instruction meant payment system and mapped to `payment_system` on Payment. Now each of these fields on the Instruction will map to the field of the same name on the Payment. `payment_status` is deprecated in favour of `__payment_status`, `direction` on Instruction is deprecated, and hardcoded population of payment attributes is deprecated in favour of flow writers setting them via context keys.

 |
| 

2024-11-28

 | 

Payments API

 | 

Released the beta [Mandates APIs](/vault-payments/latest/EN/api/payments_api#Mandates).

 |
| 

2024-11-28

 | 

Payments API

 | 

Finalised [Instruction repair APIs](/vault-payments/latest/EN/api/payments_api#instructions) and added a [guide](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/handling_errored_instructions) on how to deal with Instructions that have entered `PROCESSING_STATUS_ERRORED`.

 |
| 

2024-11-28

 | 

Vault Payments App

 | 

Added support for filtering for Payments awaiting manual decisioning.

 |
| 

2024-11-26

 | 

Payments API

 | 

Added manual\_decision\_display\_name to instruction\_data in the Payments API.

 |
| 

2024-11-25

 | 

Payments API

 | 

Deprecate the `account_link_selection_rules` field, in favour of the `account_links` field in Payment Instruments.

 |
| 

2024-11-20

 | 

Payments API

 | 

Fixed a bug where invalid XML Instructions with multiple values for the same oneof were accepted.

 |
| 

2024-11-12

 | 

Vault Payments App

 | 

Added instruction\_batch\_id to the Payment Details page. Added an instruction\_batch\_id filter to the Payments Search Page.

 |
| 

2024-11-11

 | 

Payments API

 | 

Added support for the BankToCustomerDebitCreditNotification (camt.054.001) to the Instruction API.

 |
| 

2024-11-06

 | 

Payments API

 | 

Added instruction\_batch\_id to instruction\_data in the Payments API.

 |
| 

2024-10-30

 | 

Payments API

 | 

Released Configuration Layer Utility (CLU) with support for Vault Payments resources. Documentation is available [here](/vault-payments/latest/EN/using_vault_payments/clu).

 |
| 

2024-10-29

 | 

Flow API

 | 

Numeric values stored in the Instruction’s `context` field or passed in JSON responses from external integrations are represented by the `float` type (this is fixing a bug where on the read they were represented by a decimal, but on the write as a string).

 |
| 

2024-10-21

 | 

Payments API

 | 

Support both Static Token and OAuth Integration [Authentication](/vault-payments/latest/EN/using_vault_payments/integrations#integration_authentication) being used at the same time.

 |
| 

2024-10-17

 | 

Payments API

 | 

Add support for Integration [Healthchecks](/vault-payments/latest/EN/using_vault_payments/integrations#integration_healthchecks).

 |
| 

2024-10-07

 | 

Vault Payments App, Payments API

 | 

Released the Vault Tokens service in the Vault Payments App.

 |
| 

2024-09-17

 | 

Vault Payments App

 | 

Updated the Vault Payments App to use the new Payments APIs. This introduces new payment types and statuses which [are documented here](/vault-payments/latest/EN/api/payments_api/).

 |
| 

2024-09-16

 | 

Flows API

 | 

Fixed a bug with currency codes by removing currency conversions from PostingStep.

 |
| 

2024-09-16

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.5.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-09-10

 | 

Vault Payments App

 | 

Improved the security of Vault Payments App by reducing the surface area exposed to unauthenticated users.

 |
| 

2024-09-10

 | 

Payments API

 | 

Released the [Membership Directories APIs](/vault-payments/latest/EN/api/payments_api#Membership_Directories).

 |
| 

2024-09-09

 | 

Payments API

 | 

Add support for the [SWIFT AGI Integration type](/vault-payments/latest/EN/using_vault_payments/integrations#integration_type)

 |
| 

2024-08-19

 | 

Vault Payments App

 | 

Released the Integration UI application.

 |
| 

2024-08-13

 | 

Payments API

 | 

Released the [Search Payments API endpoint](/vault-payments/latest/EN/api/payments_api#Payment). It uses a new Search Query Language which is [documented here](/vault-payments/latest/EN/api/search_query_language).

 |
| 

2024-07-26

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.4.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-07-22

 | 

Vault Payments App, Payments API

 | 

Added support for OAuth 2.0 Opaque tokens.

 |
| 

2024-07-22

 | 

Payments API

 | 

The Payments API can now be downloaded as an OpenAPI specification. The download link is available via [Payments API reference documentation](/vault-payments/latest/EN/api/payments_api/).

 |
| 

2024-07-05

 | 

Streaming API

 | 

Added Payment event streaming. See the [Streaming API reference documentation](/vault-payments/latest/EN/api/streaming_api#payment_events) for more details.

 |
| 

2024-06-25

 | 

Vault Payments App

 | 

Enabled refresh token support.

 |
| 

2024-06-12

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.3.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-06-07

 | 

Flows API

 | 

Added a [tutorial](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials#adding_unit_tests) covering unit testing of Instruction Flows in Python.

 |
| 

2024-06-03

 | 

Flows API

 | 

Added information about supported Python [subset](/vault-payments/latest/EN/api/flows/python_subset/).

 |
| 

2024-05-28

 | 

Vault Payments App

 | 

Added support for filtering the Parameters shown in the Parameter Values tab of the Routing app. Improved the overall loading experience of the tab.

 |
| 

2024-05-23

 | 

Vault Payments App

 | 

Added a search box allowing users to filter Parameters in the Parameters app. Improved performance of the Parameters screen.

 |
| 

2024-05-22

 | 

Flows API

 | 

The `relativedelta` class from `dateutil.relativedelta` is now importable in instruction flows.

 |
| 

2024-05-21

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.2.1, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/). This patch release fixes a bug related to default values of `datetime` fields in the SDK and aligns with the actual behaviour of Vault Payments.

 |
| 

2024-05-20

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.2.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-05-20

 | 

Vault Payments App

 | 

Introduced support for Manual Decisioning via the Vault Payments I&R UI.

 |
| 

2024-05-20

 | 

Flows API

 | 

Introduced Manual Decisioning functionality to Instruction Flows via the new [ManualDecisionStep](/vault-payments/latest/EN/api/flows/flows_api#ManualDecisionStep) SDK addition and its corresponding [Manual Decision API](/vault-payments/latest/EN/api/payments_api#ManualDecision).

 |
| 

2024-05-15

 | 

Payments API

 | 

Added new status `PAYMENT_STATUS_RETURNED` to the Payment resource. It is not currently set in any flow.

 |
| 

2024-05-08

 | 

Vault Payments App

 | 

New role `vp_super_admin` introduced, providing access to all VP App pages and VP backend APIs.

 |
| 

2024-05-08

 | 

Payments API

 | 

Inactive Payment Instruments are no longer matched during processing.

 |
| 

2024-05-07

 | 

Vault Payments App

 | 

Released the Parameters UI application. As part of this, introduced the new [`vp_parameters_viewer` and `vp_parameters_editor` roles](/vault-payments/latest/EN/app/user_access_management#roles) and their underlying permissions required to view and edit parameters and parameter values.

 |
| 

2024-05-07

 | 

Vault Payments App

 | 

Released the Routing UI application. As part of this, introduced the new [`vp_routing_viewer` and `vp_rules_viewer`](/vault-payments/latest/EN/app/user_access_management#roles) roles and their underlying permissions required to view Payment Instrument and Rule data.

 |
| 

2024-05-07

 | 

Vault Payments App

 | 

Added support for viewing Parameter Values used in Flows from the Configuration application.

 |
| 

2024-05-07

 | 

Vault Payments App

 | 

Linked from the Instruction details in the I&R Payment Details screen to the Instruction’s Payment Instrument details in the Routing application.

 |
| 

2024-04-26

 | 

Flows API

 | 

Released `Instruction Flows SDK` 1.1.0, available for download [here](/vault-payments/latest/EN/api/flows/sdk_download/).

 |
| 

2024-04-25

 | 

Flows API

 | 

Upgraded Python implementation used for flow execution to Python 3.11.

 |
| 

2024-04-22

 | 

Payments API

 | 

Initial release of [Parameters](/vault-payments/latest/EN/using_vault_payments/parameters/) with Instruction Flow and Rule support.

 |
| 

2024-04-08

 | 

Cards

 | 

Added velocity control for CVC2 failures.

 |
| 

2024-04-08

 | 

Payments API

 | 

Added `payment_id` field to the [Instruction resource](/vault-payments/latest/EN/api/payments_api/) and list filter.

 |
| 

2024-04-08

 | 

Payments API

 | 

Added Get and Batch Get Payment APIs. API reference can be found [here](/vault-payments/latest/EN/api/payments_api#payment).

 |
| 

2024-04-02

 | 

Vault Payments App

 | 

Added support for custom names of the roles claim.

 |
| 

2024-03-22

 | 

Simulator

 | 

Added support for simulating Inquiry Initiations.

 |
| 

2024-03-22

 | 

Cards

 | 

Added support for processing Card Balance Inquiries.

 |
| 

2024-03-12

 | 

Performance

 | 

Database performance improvements for [Cards](/vault-payments/latest/EN/api/payments_api#Card).

 |
| 

2024-03-12

 | 

Performance

 | 

Improve database scanner performance.

 |
| 

2024-02-28

 | 

Payments API

 | 

Add notice for upcoming Parameter changes to existing Rules and Payment Instruments.

 |
| 

2024-02-27

 | 

Flows API

 | 

Released [flows\_api 1.0.0](/vault-payments/latest/EN/resources/instruction_flows/flows_api-1.0.0-py3-none-any.whl) Python wheel package. The SDK facilitates the development and local unit testing of Instruction Flows.

 |
| 

2024-02-27

 | 

Payments API

 | 

Enhance Rules API validation to check the number of arguments is as expected when creating new Rule resources.

 |
| 

2024-02-26

 | 

Payments API

 | 

Added `ListInstructions` and `BatchGetInstructions` endpoints. See the [API reference documentation](/vault-payments/latest/EN/api/payments_api#Instructions) for details.

 |
| 

2024-02-20

 | 

Documentation

 | 

Added a set of "On Us" flows to demonstrate ability to move funds between two accounts in the same bank without going to the scheme. Sample resources to support this have been added to sandbox to facilitate testing.

 |
| 

2024-02-15

 | 

Vault Payments App

 | 

Support viewing administrative initiation Instruction details in the Payment details screen. Display expiry dates in the summary for incomplete card Payments and at the Instruction level for authorisation, reversal and card management initiations.

 |
| 

2024-02-13

 | 

Vault Payments App

 | 

Updated the card and fee collection Payment cleared amount calculation to account for acquirer reversal financial initiation and fee collection messages.

 |
| 

2024-02-13

 | 

Vault Payments App

 | 

Added merchant category codes and message reason filter support for card and fee collection Payments.

 |
| 

2024-02-07

 | 

Vault Payments App

 | 

Updated the card Payment authorised amount calculation to account for automated fuel dispenser authorisation advice messages.

 |
| 

2024-02-07

 | 

Vault Payments App

 | 

Standardised colour choices for representing instruction states in the Payment search results and the Payment details pages.

 |
| 

2024-02-06

 | 

Vault Payments App

 | 

Use local time-zone to display dates and times in I&R. Include tooltip descriptions for all the dates and times shown in the UI that are not localised.

 |
| 

2024-01-18

 | 

Documentation

 | 

Various improvements, improvements to Rule examples.

 |
| 

2024-01-18

 | 

Cards

 | 

Add support for authorisation expiry.

 |
| 

2024-01-11

 | 

Flows API

 | 

Introduce new [HTTPStep](/vault-payments/latest/EN/api/flows/flows_api#HTTPStep) and type [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse), replacing the now deprecated SyncCallStep.

 |
| 

2024-01-11

 | 

Cards

 | 

Enable automatic card expiration and renewal.

 |
| 

2024-01-05

 | 

Vault Payments App

 | 

Improve authorised amount calculations for card Payments containing Reversal Initiations.

 |
| 

2024-01-02

 | 

Payments API

 | 

Remove support for `method` on `HTTP Integration Versions`. All configuration of HTTP requests should be defined via [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest) in `InstructionFlows`.

 |
| 

2023-12-21

 | 

Flows API

 | 

Add support for `InstructionFlow` asynchronous steps with a deadline.

 |
| 

2023-12-20

 | 

Vault Core

 | 

Remove the need for an Okta session cookie to access Vault Core.

 |
| 

2023-12-20

 | 

Vault Payments App

 | 

Rename Payment Details Activity Log to Highlights and include Instruction issue summary in the Payment Highlights.

 |
| 

2023-12-19

 | 

Performance

 | 

Reduce primary DB load & increase performance.

 |
| 

2023-12-18

 | 

Vault Payments App

 | 

Display Instruction issues in the Payment Details page of the I&R application.

 |
| 

2023-12-14

 | 

Flows API

 | 

Add support for HTTP method on [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest) class.

 |
| 

2023-12-14

 | 

Payments API

 | 

Rename `exceptions` field on `Instruction` to `issues`.

 |
| 

2023-12-13

 | 

Payments API

 | 

Remove deprecated filter field from `ListPaymentInstruments`. `SearchPaymentInstruments` should now be used to find Payment Instruments based on Routing Information.

 |
| 

2023-12-13

 | 

Vault Payments App

 | 

Display Flow processing errors in the Payment Details page of the I&R application.

 |
| 

2023-12-13

 | 

Payments API

 | 

Mastercard IPM files are now made available on the [Files API](/vault-payments/latest/EN/api/payments_api#File).

 |
| 

2023-12-12

 | 

Payments API

 | 

Add `SearchPaymentInstruments` POST endpoint for listing and filtering, deprecate filter field on `ListPaymentInstruments`.

 |
| 

2023-11-30

 | 

Simulator

 | 

Fixes to the "Make a card payment" tutorial.

 |
| 

2023-11-30

 | 

Payments API

 | 

[InstructionFlow](/vault-payments/latest/EN/api/payments_api#InstructionFlow) field `id` now required on creation. Now supports Human-readable identifier.

 |
| 

2023-11-29

 | 

Cards

 | 

Database performance improvements for [Card Orders](/vault-payments/latest/EN/api/payments_api#CardOrder) retrieval.

 |
| 

2023-11-29

 | 

Vault Payments App

 | 

Increase the reliability of the search engine when there is a large number of payments.

 |
| 

2023-11-27

 | 

Flows API

 | 

Add support for freeform request payloads in the SyncCallStep through a `request_func` field and new [http package](/vault-payments/latest/EN/api/flows/flows_api/http/).

 |
| 

2023-11-27

 | 

Payments API

 | 

Add documentation and API reference for the [Core resource](/vault-payments/latest/EN/using_vault_payments/cores).

 |
| 

2023-11-23

 | 

Vault Payments App

 | 

Introduce RBAC for Investigation and Repair.

 |
| 

2023-11-21

 | 

Vault Payments App

 | 

Bug fixes around client-side search param and pagination logic.

 |
| 

2023-11-21

 | 

Cards

 | 

Database performance improvements for [Card Products](/vault-payments/latest/EN/api/payments_api#CardProduct) retrieval.

 |
| 

2023-11-20

 | 

Payments API

 | 

Add the ability to retrieve Files using the [Files APIs](/vault-payments/latest/EN/api/payments_api#File).

 |
| 

2023-11-17

 | 

Flows API

 | 

Surface the `header.batch_management_information.message_sequence_number` field on [Financial Initiation Messages](/vault-payments/latest/EN/api/flows/flows_api/card/financial#FinancialInitiationMessage).

 |
| 

2023-11-17

 | 

Vault Payments App

 | 

Improve the reliability of internals.

 |
| 

2023-11-17

 | 

Cards

 | 

Introduce the `name_on_card` field on [Cards](/vault-payments/latest/EN/api/payments_api#Card) and `shipped_date` field on [Card Orders](/vault-payments/latest/EN/api/payments_api#CardOrder).

 |
| 

2023-11-16

 | 

Cards

 | 

Enable resetting Card Low Value Transaction (LVT) counter and accumulator via API.

 |
| 

2023-11-16

 | 

Flows API

 | 

Enable use of the `as` stanza on `import` declarations in the Python sandbox.

 |
| 

2023-11-09

 | 

Vault Payments App

 | 

Improve search performance.

 |
| 

2023-11-02

 | 

Vault Payments App

 | 

Remove misleading zero authorised amount values for rejected card Payments.

 |
| 

2023-10-27

 | 

Vault Payments App

 | 

Use Instruction `issues` field in Payment status calculations.

 |
| 

2023-10-23

 | 

Flows API

 | 

Add the ability to initiate Instructions during flow execution using the [InitiateInstructionStep](/vault-payments/latest/EN/api/flows/flows_api#InitiateInstructionStep).

 |
| 

2023-10-19

 | 

Simulator

 | 

Add support for simulating Card Management Initiations, and Reversal Initiations.

 |