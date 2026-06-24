---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/creating_templates"
title: "Creating templates"
scraped_at: "2026-06-17T15:45:48.930Z"
images: 0
---

# Creating templates

The aim of this tutorial is to create a Manual Payment Initiation Template from scratch, validate it, and make it available for bank operators to use.

By the end of this tutorial, you will have:

-   Created a `Template` resource with metadata
    
-   Designed a `base_instruction` with fixed and variable fields
    
-   Defined inputs with validation constraints
    
-   Created a `TemplateVersion` resource
    
-   Learned how to deploy templates with CLU
    

## [](#define_the_template_structure "Copy link to heading")Define the template structure

In this tutorial, we’ll create a SEPA Credit Transfer template that requires minimal operator input. The template will handle a common scenario: a bank operator initiating payments on behalf of their institution to external creditors.

### [](#what_operators_will_provide "Copy link to heading")What operators will provide

-   Creditor name and IBAN
    
-   Payment amount in EUR
    
-   Optional payment reference
    

### [](#what_well_preset "Copy link to heading")What we’ll preset

The following values will be hardcoded so operators don’t need to enter them:

-   Debtor information (the bank’s own details)
    
-   Payment method ("TRF")
    
-   Message identifiers (auto-generated)
    
-   Settlement date (next business day)
    

### [](#create_the_template_resource "Copy link to heading")Create the template resource

First, create the `Template` resource that will contain your versions:

The `id` must be unique and can only contain alphanumeric characters and hyphens. The `status` defaults to `TEMPLATE_STATUS_ACTIVE`.

The response confirms the template was created:

## [](#create_the_base_instruction "Copy link to heading")Create the base Instruction

The `base_instruction` is the ISO 20022 structure that inputs will bind to. Think of it as a template in the traditional sense: a pre-formatted document with blanks to fill in.

Fields in your `base_instruction` can be:

-   **Fixed** - hardcoded values the operator cannot change
    
-   **Pre-filled** - default values the operator can override
    
-   **Empty** - values the operator must provide
    

For the complete mental model, see the [Authoring Guide](/vault-payments/latest/EN/using_vault_payments/templates#four_quadrant_mental_model).

### [](#structure_the_customer_credit_transfer "Copy link to heading")Structure the customer credit transfer

For SEPA credit transfers, we need a `customer_credit_transfer_initiation` message:

chat\_bubble

When an input path references a location that doesn’t exist in `base_instruction`, the Vault Payments App creates the necessary structure automatically. You don’t need to include empty creditor objects - the inputs for creditor name and IBAN will construct them.

#### [](#built_in_variables "Copy link to heading")Built-in variables

-   `{{$randomUUID}}` - Generates unique identifiers for message tracking
    
-   `{{$currentDatetime}}` - Sets creation time
    
-   `{{$currentDate + 1d}}` - Schedules execution for next calendar day
    

These resolve at submission time, ensuring each payment has unique, timely identifiers.

## [](#define_inputs "Copy link to heading")Define inputs

Inputs bind operator-entered values to specific paths in the `base_instruction`. Thoughtful input design guides operators towards success whilst preventing errors.

### [](#organising_inputs_into_fieldsets "Copy link to heading")Organising inputs into fieldsets

Fieldsets group related inputs for better user experience. Consider the operator’s mental model: what information belongs together?

For our SEPA credit transfer, two logical groups emerge:

-   **Creditor Details** - Who is receiving the payment?
    
-   **Payment Details** - How much and why?
    

The `id` must be unique within the template. The `display_name` and `description` appear in the Vault Payments App to guide operators.

### [](#creditor_name_input "Copy link to heading")Creditor name input

The creditor name is a required string field:

#### [](#path_explanation "Copy link to heading")Path explanation

The path uses dot notation to navigate the ISO 20022 structure:

-   `customer_credit_transfer_initiation.message_v09` - Message root
    
-   `payment_information.0` - First payment information block (array index 0)
    
-   `credit_transfer_transaction_information.0` - First transaction (array index 0)
    
-   `creditor.name` - The creditor name field
    

chat\_bubble

Array indexing always uses dot notation (e.g., `.0`, `.1`); square brackets are not supported. Each path must resolve to a leaf node of the correct type declared in the input definition. Multi-input paths must all be of the same type, and groups inherit their parent path as a prefix. These rules are critical: misuse of indexing, mismatched types, or paths pointing to non-leaf nodes will cause template validation to fail.

#### [](#constraint_design "Copy link to heading")Constraint design

The `string_constraint` enforces:

-   `min_length: 1` - Makes the field required (empty strings rejected)
    
-   `max_length: 140` - Complies with some ISO 20022 creditor name length limits
    

These constraints prevent common errors before submission.

### [](#creditor_iban_input "Copy link to heading")Creditor IBAN input

The IBAN may require more sophisticated validation:

The `pattern` constraint uses a regular expression to enforce IBAN structure: two letter country code, two check digits, followed by alphanumeric characters. This catches formatting errors immediately.

### [](#payment_amount_input "Copy link to heading")Payment amount input

Decimal inputs require precision specification:

#### [](#precision_enforcement "Copy link to heading")Precision enforcement

The `precision: "2"` constraint is strict: it limits decimal places, not just display formatting. A value like `10.123` would be rejected. This prevents accidentally submitting fractional cents.

#### [](#minimum_value_rationale "Copy link to heading")Minimum value rationale

`min_value: "0.01"` prevents zero or negative amounts. The maximum allows up to 999 million EUR - adjust based on your operational limits.

### [](#optional_payment_reference "Copy link to heading")Optional payment reference

Not all payments require a reference. Mark optional inputs explicitly:

The `optional: true` flag means the field won’t be highlighted if left empty. Note there’s no `min_length` constraint - that would contradict the optional nature.

### [](#design_trade_offs "Copy link to heading")Design trade-offs

#### [](#why_standard_inputs "Copy link to heading")Why standard inputs?

We used `Standard` inputs (single path, single value) throughout. This is appropriate when:

-   Each value goes to exactly one location
    
-   No value needs to be replicated across multiple paths
    

If you needed the creditor name in multiple places (e.g., for reconciliation fields), a `Multi` input would be more appropriate. See [Input Types](/vault-payments/latest/EN/using_vault_payments/templates#input_types) for guidance on when to use each type.

#### [](#constraint_philosophy "Copy link to heading")Constraint philosophy

Constraints should **guide** operators towards success, not frustrate them. Balance validation strictness with operational reality:

-   Too loose - Errors reach the processing engine, causing delays
    
-   Too strict - Operators can’t submit legitimate payments
    

Test your constraints with realistic data before deployment.

## [](#validate_the_template_version "Copy link to heading")Validate the Template Version

Before creating your template version, it’s good practice to validate it to catch structural errors early.

### [](#assemble_the_complete_template_version "Copy link to heading")Assemble the complete Template Version

Combine your `base_instruction`, `variables` (if any), and `fieldsets` into a `TemplateVersion`:

### [](#call_the_validation_endpoint "Copy link to heading")Call the validation endpoint

chat\_bubble

Validation is optional and can be used during development to catch errors. Using the validation is not required; the same validation rules are applied when attempting to create the resource.

### [](#check_the_response "Copy link to heading")Check the response

Success returns:

Failures include field-specific violations:

The validator checks that paths resolve correctly, types match, and constraints are well-formed.

chat\_bubble

The validation endpoint checks structural correctness, not business logic. It verifies that paths resolve and types match, but it won’t catch issues like "this amount exceeds scheme limits" - those are validated during actual instruction processing. Validation will also catch mismatches between the `type` and `payload` present in the `base_instruction`; the latter must align with the declared instruction type.

Fix any violations and revalidate if desired, or proceed directly to creating the template version.

## [](#create_the_template_version "Copy link to heading")Create the Template Version

Once your template version is validated (or if you’re confident in its structure), persist it using the create endpoint.

### [](#call_the_create_endpoint "Copy link to heading")Call the create endpoint

The `request_id` ensures idempotency - if the request fails and is retried, the same `request_id` prevents duplicate creation.

### [](#response "Copy link to heading")Response

A successful creation returns the complete `TemplateVersion` with generated fields:

Notice that `id` and `create_timestamp` are generated automatically.

### [](#make_the_version_active "Copy link to heading")Make the version active

For the template to appear in the Vault Payments App, set it as the active version:

chat\_bubble

The most recently created `TemplateVersion` for a given `Template` automatically becomes the active version. You only need to update the template if you want to change its `status`, `display_name`, or `description`.

Your template is now ready for use. Bank operators can select "Simple SEPA Credit Transfer" in the Vault Payments App and initiate payments using the form you’ve designed.

## [](#deploying_templates_with_clu "Copy link to heading")Deploying templates with CLU

For production deployments or managing templates across environments, use the Configuration Layer Utility (CLU).

### [](#configuration_pack_structure "Copy link to heading")Configuration pack structure

CLU uses configuration packs consisting of YAML files. Create a directory structure:

### [](#manifest_file "Copy link to heading")Manifest file

The manifest lists all resources in the pack:

### [](#resource_definitions "Copy link to heading")Resource definitions

Define your Template and TemplateVersion in `templates.resources.yaml`:

The `payload` field contains YAML that CLU converts to JSON and sends to the Vault Payments API.

### [](#validate_the_configuration_pack "Copy link to heading")Validate the Configuration Pack

Before importing, validate the configuration pack to check for structural errors:

A successful validation outputs:

### [](#import_the_configuration_pack "Copy link to heading")Import the Configuration Pack

Import the validated configuration pack into Vault Payments:

CLU validates and creates resources in dependency order: Templates first, then TemplateVersions. A successful import outputs:

For comprehensive CLU documentation, see: [CLU in Vault Payments](/vault-payments/latest/EN/using_vault_payments/clu) and the [Provisioning using CLU tutorial](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/provisioning_using_clu).