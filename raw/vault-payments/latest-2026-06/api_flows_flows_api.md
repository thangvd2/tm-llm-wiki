---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api"
title: "Flows API"
scraped_at: "2026-06-17T05:08:43.151Z"
images: 0
---

# Flows API

`flows_api.index` module

flows\_api is the Python Instruction Flows API for programming Vault Payments.

This module provides the various Step types used to put together a flow, as well as the FlowVersion type that is used to instantiate the Flow itself.

The submodules contain the various Instruction types that make up the ISO20022 instruction structure, as well as some helper modules to facilitate local testing.

## [](#AccountLinkStep "Copy link to heading")AccountLinkStep

Defines the step responsible for the resolution of Account Links.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [AccountLinkResult](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLinkResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |

## [](#BasicStep "Copy link to heading")BasicStep

A BasicStep executes its resolve function when run.

It doesn’t have any other special behaviours.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |

## [](#CreateMandateStep "Copy link to heading")CreateMandateStep

Defines the step responsible for the creation of the Mandate. Mandates is currently in Beta, and its interface is subject to change.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`request_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]`

 | 

Function which is called to build the Mandate.

 |

## [](#EndFlow "Copy link to heading")EndFlow

Sentinel value that is returned from step resolve functions to signal the end of a flow.

## [](#ExpectedParameter "Copy link to heading")ExpectedParameter

The specification of a parameter that a flow version or rule version expects. When creating a flow version or rule version, Vault Payments will validate that such a parameter does indeed already exist and have a compatible constraint.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The ID of the Expected Parameter.

 |
| 

`description`

 | 

`Optional[str]`

 | 

A user-friendly description to explain what the Expected Parameter is used for.

 |
| 

`constraint`

 | 

`Union[[BooleanConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#BooleanConstraint), [StringConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringConstraint), [DecimalConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DecimalConstraint), [StringListConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringListConstraint), [DateTimeConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DateTimeConstraint), [JSONConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#JSONConstraint)]`

 | 

Constraint on the Expected Parameter type and valid values.

 |

## [](#FlowVersion "Copy link to heading")FlowVersion

Defines a new instruction flow version.

This should be declared exactly once in your flow, and its result assigned to a variable named 'flow' for Vault Payments to run it.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The ID of the flow version

 |
| 

`flow_id`

 | 

`str`

 | 

The ID of the flow

 |
| 

`steps`

 | 

`list[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step)]`

 | 

A list of steps that this flow contains. Must not be empty.

 |
| 

`first_step`

 | 

`Optional[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step)]`

 | 

The step to begin execution at. If not given, the first step will be set to the first step in the 'steps' list.

 |
| 

`version`

 | 

`str`

 | 

A [semantic version](https://semver.org/) for this flow.

 |
| 

`expected_parameters`

 | 

`Optional[list[[ExpectedParameter](/vault-payments/latest/EN/api/flows/flows_api#ExpectedParameter)]]`

 | 

The parameters that will be used by the flow version.

 |
| 

`correlation_id_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], str]]`

 | 

An optional function that may return the [correlation ID](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_matching) to be set on the instruction before processing begins.

 |
| 

`processing_mode`

 | 

`Optional[[ProcessingMode](/vault-payments/latest/EN/api/flows/flows_api#ProcessingMode)]`

 | 

An optional field defining the processing mode for the instruction.

 |

## [](#HTTPAsyncStep "Copy link to heading")HTTPAsyncStep

Defines a step that makes an HTTP request to an external integration and expects an asynchronous response. The request body created in this step (in the `request_func`) should include a callback `token`, which Vault Payments will pass to `request_func` as the fourth argument. The external integration must accept the request and return an HTTP 200 OK response with an empty body. Later, the integration is expected to send a callback requestto the `/v1/integrations/callback/{token}` endpoint where `{token}` should be replaced with the callback token originally passed to the `request_func`.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`integration_id`

 | 

`str`

 | 

The ID of the external integration to call. The integration must be type HTTP.

 |
| 

`request_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], str], [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)]`

 | 

The function called to configure the HTTP request made to the integration. It takes the callback token as the fourth argument. This value should be used in the asynchronous callback to Vault Payments.

 |
| 

`calculate_deadline_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The function called to calculate the deadline of the async step.

 |
| 

`on_error_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

Optional function which will be called upon the Integration returning a non-transient error or if all retries have been exhausted.

 |
| 

`retry_policy`

 | 

`Optional[[RetryPolicy](/vault-payments/latest/EN/api/flows/flows_api/retry#RetryPolicy)]`

 | 

Optional policy to configure the retries of the request to the Integration.  
This takes presidence over the retry policy set in the integration level.

 |
| 

`status_code_policy`

 | 

`Optional[[HTTPStatusCodePolicy](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPStatusCodePolicy)]`

 | 

Optional policy to configure the successful and transient status codes of the response from the Integration. This takes presidence over status code policy set in the integration level.

 |
| 

`deadline_exceeded_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

The function called to define the behaviour if the asynchronous step exceeded its deadline. If not specified, the instruction will error on deadline exceeded.

 |

## [](#HTTPStep "Copy link to heading")HTTPStep

Defines a step that makes an HTTP call to an external integration.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`integration_id`

 | 

`str`

 | 

The ID of the external integration to call. The integration must be type HTTP.

 |
| 

`request_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)]`

 | 

The function called to configure the HTTP request made to the integration.  
  
SDK 1.1: parameters are now passed as a third argument to `request_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`on_error_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

Optional function which will be called upon the Integration returning a non-transient error or if all retries have been exhausted.

 |
| 

`retry_policy`

 | 

`Optional[[RetryPolicy](/vault-payments/latest/EN/api/flows/flows_api/retry#RetryPolicy)]`

 | 

Optional policy to configure the retries of the request to the Integration.  
This takes presidence over the retry policy set in the integration level.

 |
| 

`status_code_policy`

 | 

`Optional[[HTTPStatusCodePolicy](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPStatusCodePolicy)]`

 | 

Optional policy to configure the successful and transient status codes of the response from the Integration. This takes presidence over status code policy set in the integration level.

 |

## [](#InitiateInstructionStep "Copy link to heading")InitiateInstructionStep

Defines a step that initiates a new Instruction that is to be processed.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [InitiateInstructionStepResult](/vault-payments/latest/EN/api/flows/flows_api/instruction#InitiateInstructionStepResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`initiate_instruction_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]`

 | 

The function called to define the Instruction that is to be initiated.  
  
SDK 1.1: parameters are now passed as a third argument to `initiate_instruction_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |

## [](#InstructionFileStep "Copy link to heading")InstructionFileStep

An InstructionFileStep is a step that groups instructions into file and batches and waits for processing outcome.

chat\_bubble

This step is currently in BETA, and its interface is subject to change. Thought Machine may introduce breaking changes before it reaches a stable release.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [InstructionFileStepResult](/vault-payments/latest/EN/api/flows/flows_api/instruction#InstructionFileStepResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`instruction_file_specification_id`

 | 

`str`

 | 

The instruction file specification used to control the batching behaviour.

 |
| 

`instruction_batch_group_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], str]`

 | 

The function called to return the name of instruction batch group this instruction belongs to.

 |
| 

`instruction_file_group_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], str]`

 | 

The function called to return the name of instruction file group this instruction belongs to.

 |
| 

`calculate_deadline_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The function called to calculate the deadline of the async step.

 |
| 

`deadline_exceeded_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

The function called to define the behaviour if the asynchronous step exceeded its deadline. If not specified, the instruction will error on deadline exceeded.

 |
| 

`on_error_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

Optional function which will be called if an error occurred during instruction file processing or submission.

 |

## [](#ManageMandatesStep "Copy link to heading")ManageMandatesStep

Defines the step responsible for managing Mandates.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [ManageMandatesResult](/vault-payments/latest/EN/api/flows/flows_api/mandates#ManageMandatesResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`query_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [MatchMandatesQuery](/vault-payments/latest/EN/api/flows/flows_api/mandates#MatchMandatesQuery)]`

 | 

Function which is called to match the Mandates.

 |
| 

`update_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]], NoneType]]`

 | 

Optional function which is called to update the Mandates.  
This function can mutate the Mandate objects in the list in-place to trigger updates.

 |

## [](#ManualDecisionStep "Copy link to heading")ManualDecisionStep

A ManualDecisionStep is a step that requires manual decision to proceed.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [DecisionResult](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`manual_decision_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[list[[Decision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision)], [ManualDecision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#ManualDecision)]]`

 | 

The function called to resolve the exhaustive list of decisions which can be taken on an instruction.

 |
| 

`calculate_deadline_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The function called to calculate the deadline of the async step.

 |
| 

`deadline_exceeded_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

The function called to define the behaviour if the asynchronous step exceeded its deadline. If not specified, the instruction will error on deadline exceeded.

 |

## [](#MatchPaymentInstrumentStep "Copy link to heading")MatchPaymentInstrumentStep

Defines the step responsible for the matching of the Payment Instrument.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [PaymentInstrument](/vault-payments/latest/EN/api/flows/flows_api/routing#PaymentInstrument)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`query_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [MatchPaymentInstrumentQuery](/vault-payments/latest/EN/api/flows/flows_api/routing#MatchPaymentInstrumentQuery)]`

 | 

Function which is called to build the MatchPaymentInstrumentQuery.

 |

## [](#MembershipDirectoryStep "Copy link to heading")MembershipDirectoryStep

Defines a step that queries the membership directories to gain information about payment scheme members.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], dict[str, list[[MembershipDirectoryRecord](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryRecord)]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`query_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [MembershipDirectoryQuery](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryQuery)]`

 | 

Function which is called to build the MembershipDirectoryQuery.

 |

## [](#PeriodCalculationStep "Copy link to heading")PeriodCalculationStep

Calculates a Calendar Period to be used elsewhere within the Instruction Flow.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`request_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [CalculateCalendarPeriodRequest](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalculateCalendarPeriodRequest)]`

 |  |

## [](#ProcessingMode "Copy link to heading")ProcessingMode

Defines the processing mode for new Instruction.

Enum values  
| Name | Description |
| --- | --- |
| 
`QUEUE`

 | 

Queues the Instruction behind any matched Instructions. Default behaviour.

 |
| 

`INTERRUPT`

 | 

Prioritises processing of the Instruction and temporarily suspends processing of the matched WAITING Instruction.

 |

## [](#RuleEvaluationStep "Copy link to heading")RuleEvaluationStep

Evaluates any rules in the context of the current instruction flow.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |

## [](#RulesStep "Copy link to heading")RulesStep

Defines the step responsible for the evaluation of Rules.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], list[str]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |

## [](#ScheduleInstructionStep "Copy link to heading")ScheduleInstructionStep

Schedule the Instruction within a given Calendar Period.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`schedule_instruction_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod)]`

 | 

The function called to define the schedule the Instruction at a given Calendar Period. The Calendar Period returned must have been previously calculated by a Period Calculation Step.

 |
| 

`calculate_deadline_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The function called to calculate the deadline of the async step.  
In most cases this should return the period\_range.to of the Calendar Period.

 |
| 

`deadline_exceeded_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

The function called to define the behaviour if the Instruction does not resume processing within the deadline. If not specified, the instruction will error on deadline exceeded.

 |

## [](#SchemeSubmissionStep "Copy link to heading")SchemeSubmissionStep

Defines a step that submits a payload to an external integration via a HTTP request. A 2XX HTTP status code from the integration is treated as success, and the response body is discarded.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`integration_id`

 | 

`str`

 | 

The ID of the external integration to call. The integration must be type SCHEME.

 |
| 

`on_error_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

Optional function which will be called upon the Integration returning a non-transient error or if all retries have been exhausted.

 |
| 

`retry_policy`

 | 

`Optional[[RetryPolicy](/vault-payments/latest/EN/api/flows/flows_api/retry#RetryPolicy)]`

 | 

Optional policy to configure the retries of the request to the Integration.

 |

## [](#SequenceStep "Copy link to heading")SequenceStep

Defines the step responsible for the Sequences.

Sequences are always incremented by 1 and start at 0. The first allocated sequence value is 1. Values are allocated sequentially and never reused.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [SequenceResult](/vault-payments/latest/EN/api/flows/flows_api/sequences#SequenceResult)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`sequence_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [IncrementSequence](/vault-payments/latest/EN/api/flows/flows_api/sequences#IncrementSequence)]`

 | 

Function which is called to build a Sequence request.

 |

## [](#Step "Copy link to heading")Step

A Step represents an individual step during an instruction flow execution.

You cannot use this directly, instead use one of the specialised Step sub-types, such as BasicStep or VaultCorePostingsStep.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]], Union[Step, type[EndFlow]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |

## [](#VaultCorePostingsStep "Copy link to heading")VaultCorePostingsStep

A VaultCorePostingsStep is a step that makes a posting to Vault Core.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolve_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]], [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch)], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]`

 | 

The function that’s called during processing of this step.  
It’s called with at least three arguments: the instruction being processed, a list of any other instructions that have been matched with it and a dictionary of parameter ID to parameter value.  
Some derived Step types will also receive the response object from the Step type specific action their step has taken. It returns either the next step to execute or EndFlow to terminate the flow.  
  
SDK 1.1: parameters are now passed as a third argument to `resolve_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.

 |
| 

`id`

 | 

`str`

 | 

The id of this step. If not passed, the name of resolve\_func is used instead.

 |
| 

`display_name`

 | 

`str`

 | 

A human-readable name for this step.  
If not passed, it will be derived from the id.

 |
| 

`postings_func`

 | 

`Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[list[[PostingInstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstruction)], [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch)]]`

 | 

The function called to define the postings that will be made.  
  
SDK 1.1: parameters are now passed as a third argument to `postings_func`.  
This is implemented in a backward compatible way, if the function does not take parameters as the third argument in its signature, they will be omitted when Vault Payments calls the function.  
SDK 1.7: PostingInstructionBatch can now be returned by the function. This is the preferred return value.

 |
| 

`on_error_func`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], Union[[Step](/vault-payments/latest/EN/api/flows/flows_api#Step), type[[EndFlow](/vault-payments/latest/EN/api/flows/flows_api#EndFlow)]]]]`

 | 

Optional function which will be called upon the VaultCorePostings Integration returning a non-transient error or if all retries have been exhausted.

 |
| 

`retry_policy`

 | 

`Optional[[RetryPolicy](/vault-payments/latest/EN/api/flows/flows_api/retry#RetryPolicy)]`

 | 

Optional policy to configure the retries of the request to the Integration.

 |

## [](#validate_account_routing "Copy link to heading")validate\_account\_routing

Raises an exception if the account routing on the instruction is not correct or complete.

Account routing is usually selected via the MatchePaymentInstrumentStep and AccountLinkStep. N.B. If the exception is unhandled it will put the payment into PROCESSING\_STATUS\_ERRORED.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The instruction with the account routing to validate.

 |