---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/test"
title: "Test"
scraped_at: "2026-06-17T05:11:02.261Z"
images: 0
---

# Test

`flows_api.test` module

The test module provides test helpers that can be used to facilitate local testing.

N.B. This module is *not* available in a production Vault Payments instance, it is only available when the SDK is installed for local development.

## [](#AccountLink "Copy link to heading")AccountLink

Representation of the AccountLink resource for testing purposes.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

Resource ID.

 |
| 

`core_id`

 | 

`str`

 | 

The identifier of the Core Banking system which stores the associated account.

 |
| 

`core_account_id`

 | 

`str`

 | 

The identifier that the Core Banking system uses for the associated account.

 |
| 

`status`

 | 

`[AccountLinkStatus](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLinkStatus)`

 | 

The status of the AccountLink.

 |

## [](#AccountLinkSelection "Copy link to heading")AccountLinkSelection

Representation of the Account Link Selection available to a PaymentInstrument for testing purposes.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_link_id`

 | 

`str`

 | 

The ID of the Account Link.

 |
| 

`alias`

 | 

`str`

 | 

Optional alias for this Account Link.

 |
| 

`rule_id`

 | 

`str`

 | 

Optional ID of an Account Link Selection Rule.

 |

## [](#DeadlineExceeded "Copy link to heading")DeadlineExceeded

Sentinel value used in tests that is returned from a manual decision to signal the deadline is to be exceeded.

## [](#FlowSimulation "Copy link to heading")FlowSimulation

Simulates an instruction flow while maintaining its state.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The Instruction that the flow will operate on.

 |
| 

`matched_instrs`

 | 

`list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]`

 | 

Optional set of instructions that have been matched to it.

 |
| 

`payment_instrument`

 | 

`Optional[[PaymentInstrument](/vault-payments/latest/EN/api/flows/flows_api/test#PaymentInstrument)]`

 | 

Optional PaymentInstrument which will be used in a RuleEvaluationStep.  
In the actual Vault Payments implementation PaymentInstrument is matched to Instruction automatically based on the routing\_information field.

 |
| 

`account_links`

 | 

`list[[AccountLink](/vault-payments/latest/EN/api/flows/flows_api/test#AccountLink)]`

 | 

Optional list of AccountLinks which may be referenced by PaymentInstrument.

 |
| 

`rule_versions`

 | 

`list[[RuleVersion](/vault-payments/latest/EN/api/flows/flows_api/test#RuleVersion)]`

 | 

Optional list of RuleVersions which may be called in a RuleEvaluationStep if referenced in PaymentInstrument.

 |
| 

`postings`

 | 

`Optional[Callable[[list[[PostingInstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstruction)]], [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch)]]`

 | 

Optional function that will be called for any postings steps. It is given the posting instructions to create and returns either the response as Vault Core would or an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`http`

 | 

`Optional[Callable[[[HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)], Union[[HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse), [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError)]]]`

 | 

Optional function that will be called for any HTTP steps. It is given the instruction and returns either the response as the integration would make or an error indicating that the flow should proceed down an on\_error path if it can.  
:param http\_async: Optional function that will be called for any HTTP Async steps. It is given the instruction and returns either the response as the integration would make, an error indicating that the flow should proceed down an on\_error path if it can or DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without a DecisionResult.

 |
| 

`http_async`

 | 

`Optional[Callable[[[HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)], Union[[HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse), [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError), [DeadlineExceeded](/vault-payments/latest/EN/api/flows/flows_api/test#DeadlineExceeded)]]]`

 |  |
| 

`initiate_instr`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], [InitiateInstructionStepResult](/vault-payments/latest/EN/api/flows/flows_api/instruction#InitiateInstructionStepResult)]]`

 | 

Optional function that will be called for Initiate Instruction steps. It is given the Instruction that a flow writer returned and returns an InitiateInstructionStepResult as Vault Payments would.

 |
| 

`manual_decision`

 | 

`Optional[Callable[[Union[list[[Decision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision)], [ManualDecision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#ManualDecision)]], Union[[DecisionResult](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionResult), [DeadlineExceeded](/vault-payments/latest/EN/api/flows/flows_api/test#DeadlineExceeded)]]]`

 | 

Optional function that will be called for Manual Decision steps. It is given a list of Decision objects and returns the DecisionResult as Vault Payments would or DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without a DecisionResult.

 |
| 

`period_calculation`

 | 

`Optional[Callable[[[CalculateCalendarPeriodRequest](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalculateCalendarPeriodRequest)], [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod)]]`

 | 

Optional function that will be called for Period Calculation steps. It is given a CalculateCalendarPeriodRequest object and returns the CalendarPeriod as Vault Payments would.

 |
| 

`scheme_submission`

 | 

`Optional[Callable[[], [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError)]]`

 | 

Optional function that will be called for any Scheme Submission steps. It can return an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`membership_directory`

 | 

`Optional[Callable[[[MembershipDirectoryQuery](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryQuery)], dict[str, list[[MembershipDirectoryRecord](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryRecord)]]]]`

 | 

Optional function that will be called for Membership Directory Steps. It is given a MembershipDirectoryQuery object and returns a map of MembershipDirectoryRecords as Vault Payments would.

 |
| 

`create_mandate`

 | 

`Optional[Callable[[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)], [Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]]`

 | 

Optional function that will be called for Create Mandate Steps. It is given a Mandate object and returns a Mandate.

 |
| 

`match_mandates`

 | 

`Optional[Callable[[[MatchMandatesQuery](/vault-payments/latest/EN/api/flows/flows_api/mandates#MatchMandatesQuery)], list[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]]]`

 | 

Optional function that will be called for Manage Mandate Steps. It is given a MatchMandatesQuery and returns a list of Mandates.

 |
| 

`update_mandates`

 | 

`Optional[Callable[[list[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]], [ManageMandatesResult](/vault-payments/latest/EN/api/flows/flows_api/mandates#ManageMandatesResult)]]`

 | 

Optional function that will be called for Manage Mandate Steps, if an update\_func has been supplied. It is given a list of Mandates and returns a ManageMandatesResult.

 |
| 

`match_payment_instrument`

 | 

`Optional[Callable[[[MatchPaymentInstrumentQuery](/vault-payments/latest/EN/api/flows/flows_api/routing#MatchPaymentInstrumentQuery)], [PaymentInstrument](/vault-payments/latest/EN/api/flows/flows_api/test#PaymentInstrument)]]`

 | 

Optional function that will be called for Match Payment Instrument Steps. It is given a MatchPaymentInstrumentQuery object and returns a PaymentInstrument.

 |
| 

`instruction_file`

 | 

`Optional[Callable]`

 | 

Optional function that will be called for Instruction File Steps. It takes the instruction batch group name and instruction file group name and returns the InstructionFileStepResult as Vault Payments would, DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without an InstructionFileStepResult or an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`sequence`

 | 

`Optional[Callable[[[IncrementSequence](/vault-payments/latest/EN/api/flows/flows_api/sequences#IncrementSequence)], [SequenceResult](/vault-payments/latest/EN/api/flows/flows_api/sequences#SequenceResult)]]`

 | 

Optional function that will be called for Sequence Steps.

 |
| 

`parameter_values`

 | 

`list[[ParameterValue](/vault-payments/latest/EN/api/flows/flows_api/test#ParameterValue)]`

 | 

Optional list of Parameter Values available during the flow simulation.

 |

## [](#InstructionEncoder "Copy link to heading")InstructionEncoder

Defines JSON decoding for instruction objects.

This class is suitable for passing to the `cls` argument of `json.dumps`. It is the counterpart to `instruction_object_hook` and knows how to serialise the various types.

Example usage: json.dumps(self.instr, cls=InstructionEncoder, indent=2, sort\_keys=True)

## [](#IntegrationError "Copy link to heading")IntegrationError

Represents an error returned by an Integration

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`str`

 | 

Optional error message

 |
| 

`response`

 | 

`Optional[[HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)]`

 | 

Optional HTTPResponse

 |

## [](#InvalidFlowError "Copy link to heading")InvalidFlowError

Raised when validate\_flow fails.

## [](#ParameterValue "Copy link to heading")ParameterValue

Representation of the ParameterValue resource for the testing purposes.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_id`

 | 

`str`

 | 

Parameter ID.

 |
| 

`global_`

 | 

`bool`

 | 

Indicates whether this value is global.

 |
| 

`payment_instrument_id`

 | 

`str`

 | 

The ID of the PaymentInstrument that owns this value. Must be empty if "global" is True.

 |
| 

`value`

 | 

`Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]`

 | 

The value of the Parameter.

 |

## [](#PaymentInstrument "Copy link to heading")PaymentInstrument

Representation of the PaymentInstrument resource for testing purposes.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

Resource ID.

 |
| 

`rule_ids`

 | 

`list[str]`

 | 

Optional list of Basic Rule IDs to be evaluated during a RuleEvaluation step.  
Please note that in the actual Vault Payments implementation IDs of Rules are used (not RuleVersions).

 |
| 

`account_link_selection`

 | 

`list[tuple[str, str]]`

 | 

Optional list of tuples: rule id, account link id. Account Link Selection Rule versions will be evaluated in a RuleEvaluation step. AccountLink for which the rule version evaluated to True will be used to populate the values on the Instruction’s target\_account field.  
Please note that in the actual Vault Payments implementation IDs of Rules are used (not RuleVersions).  
  
This is deprecated in favour of account\_links.

 |
| 

`account_links`

 | 

`list[[AccountLinkSelection](/vault-payments/latest/EN/api/flows/flows_api/test#AccountLinkSelection)]`

 | 

Optional list of AccountLinkSelections. These are used in the AccountLink step to determine which Account Link Selection Rule versions to be evaluated, and the order of the AccountLinkResult.

 |
| 

`default_account_link_id`

 | 

`str`

 | 

Optional ID of the AccountLink which is to be used as the default AccountLink in a RuleEvaluation step when no Account Link Selection rule version evaluated to True.

 |

## [](#ProcessingError "Copy link to heading")ProcessingError

Raised during simulate\_flow if processing of the flow fails.

The processed\_steps member can be inspected to see what steps were reached during processing.

## [](#RuleType "Copy link to heading")RuleType

Representation of the RuleVersion type for testing purposes.

Enum values  
| Name | Description |
| --- | --- |
| 
`RULE_TYPE_BASIC`

 | 

Rule to raise restrictions or update the Instruction resource during Instruction processing.  
RuleVersion of this type can be added to rule\_ids on PaymentInstruments.

 |
| 

`RULE_TYPE_ACCOUNT_LINK_SELECTION`

 | 

Rule to select Account Link. RuleVersion of this type can be added to account\_link\_selection on PaymentInstruments.

 |

## [](#RuleVersion "Copy link to heading")RuleVersion

Representation of the RuleVersion resource for testing purposes. Please note that in the actual Vault Payments implementation RuleVersion resources always exist in the context of Rule resources.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`rule_id`

 | 

`str`

 | 

Rule ID.

 |
| 

`type`

 | 

`[RuleType](/vault-payments/latest/EN/api/flows/flows_api/test#RuleType)`

 | 

Type of the RuleVersion.

 |
| 

`func`

 | 

`Union[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], dict], Union[str, list[str]]], Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction), list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]], bool]]`

 | 

Function representing RuleVersion implementation.

 |
| 

`expected_parameters`

 | 

`Optional[list[[ExpectedParameter](/vault-payments/latest/EN/api/flows/flows_api#ExpectedParameter)]]`

 | 

Parameters expected by RuleVersion.

 |

## [](#instruction_object_hook "Copy link to heading")instruction\_object\_hook

Defines json decoding for instruction objects.

This function is suitable for passing to the `object_hook` argument of `json.loads`. It understands some nuances of JSON formatting for specific field types.

We suggest looking into the dataclass\_wizard PIP package if decoding of instructions from JSON is desired, specifically the `fromdict` function which can understand dataclass type annotations and deserialise the class hierarchy correctly, e.g. fromdict(Instruction, json.loads(data, object\_hook=instruction\_object\_hook))

**Returns**: `dict` A modified dictionary with altered values where appropriate.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`obj`

 | 

`dict`

 | 

The JSON object to decode, as a Python dictionary.

 |

## [](#simulate_flow "Copy link to heading")simulate\_flow

Simulate instruction flow for the given instruction. Raises a ProcessingError if any unexpected errors occur during the flow.

**Returns**: `list[str]` A list of the executed steps.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`flow`

 | 

`[FlowVersion](/vault-payments/latest/EN/api/flows/flows_api#FlowVersion)`

 | 

The instruction flow under test.

 |
| 

`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The Instruction that the flow will operate on.

 |
| 

`matched_instrs`

 | 

`Optional[list[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]]`

 | 

Optional set of instructions that have been matched to it.

 |
| 

`payment_instrument`

 | 

`Optional[[PaymentInstrument](/vault-payments/latest/EN/api/flows/flows_api/test#PaymentInstrument)]`

 | 

Optional PaymentInstrument which will be used in a RuleEvaluationStep.  
In the actual Vault Payments implementation PaymentInstrument is matched to Instruction automatically based on the routing\_information field.

 |
| 

`account_links`

 | 

`Optional[list[[AccountLink](/vault-payments/latest/EN/api/flows/flows_api/test#AccountLink)]]`

 | 

Optional list of AccountLinks which may be referenced by PaymentInstrument.

 |
| 

`rule_versions`

 | 

`Optional[list[[RuleVersion](/vault-payments/latest/EN/api/flows/flows_api/test#RuleVersion)]]`

 | 

Optional list of RuleVersions which may be called in a RuleEvaluationStep if referenced in PaymentInstrument.

 |
| 

`postings`

 | 

`Optional[Callable[[Union[[PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch), list[[PostingInstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstruction)]]], Union[[PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch), [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError)]]]`

 | 

Optional function that will be called for any postings steps. It is given the posting instructions to create and returns either the response as Vault Core would or an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`http`

 | 

`Optional[Callable[[[HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)], Union[[HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse), [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError)]]]`

 | 

Optional function that will be called for any HTTP steps. It is given the instruction and returns either the response as the integration would make or an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`http_async`

 | 

`Optional[Callable[[[HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest)], Union[[HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse), [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError), [DeadlineExceeded](/vault-payments/latest/EN/api/flows/flows_api/test#DeadlineExceeded)]]]`

 | 

Optional function that will be called for any HTTP Async steps. It is given the instruction and returns either the response as the integration would make, an error indicating that the flow should proceed down an on\_error path if it can or DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without a DecisionResult.

 |
| 

`initiate_instr`

 | 

`Optional[Callable[[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)], [InitiateInstructionStepResult](/vault-payments/latest/EN/api/flows/flows_api/instruction#InitiateInstructionStepResult)]]`

 | 

Optional function that will be called for Initiate Instruction steps. It is given the Instruction that a flow writer returned and returns an InitiateInstructionStepResult as Vault Payments would.

 |
| 

`manual_decision`

 | 

`Optional[Callable[[list[[Decision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision)]], Union[[DecisionResult](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionResult), [DeadlineExceeded](/vault-payments/latest/EN/api/flows/flows_api/test#DeadlineExceeded)]]]`

 | 

Optional function that will be called for Manual Decision steps. It is given a list of Decision objects and returns the DecisionResult as Vault Payments would or DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without a DecisionResult.

 |
| 

`period_calculation`

 | 

`Optional[Callable[[[CalculateCalendarPeriodRequest](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalculateCalendarPeriodRequest)], [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod)]]`

 | 

Optional function that will be called for Period Calculation steps. It is given a CalculateCalendarPeriodRequest object and returns the CalendarPeriod as Vault Payments would.

 |
| 

`scheme_submission`

 | 

`Optional[Callable[[], [IntegrationError](/vault-payments/latest/EN/api/flows/flows_api/test#IntegrationError)]]`

 | 

Optional function that will be called for any Scheme Submission steps. It can return an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`membership_directory`

 | 

`Optional[Callable[[[MembershipDirectoryQuery](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryQuery)], dict[str, list[[MembershipDirectoryRecord](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryRecord)]]]]`

 | 

Optional function that will be called for Membership Directory Steps. It is given a MembershipDirectoryQuery object and returns a map of MembershipDirectoryRecords as Vault Payments would.

 |
| 

`create_mandate`

 | 

`Optional[Callable[[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)], [Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]]`

 | 

Optional function that will be called for Create Mandate Steps. It is given a Mandate object and returns a Mandate.  
:ivar match\_mandates: Optional function that will be called for Manage Mandates Steps. It is given a MatchMandatesQuery and returns a list of Mandates.  
:ivar update\_mandates: Optional function that will be called for Manage Mandates Steps, if an update\_func has been supplied. It is given a list of Mandates and returns a ManageMandatesResult.

 |
| 

`match_mandates`

 | 

`Optional[Callable[[[MatchMandatesQuery](/vault-payments/latest/EN/api/flows/flows_api/mandates#MatchMandatesQuery)], list[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]]]`

 |  |
| 

`update_mandates`

 | 

`Optional[Callable[[list[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]], [ManageMandatesResult](/vault-payments/latest/EN/api/flows/flows_api/mandates#ManageMandatesResult)]]`

 |  |
| 

`match_payment_instrument`

 | 

`Optional[Callable[[[MatchPaymentInstrumentQuery](/vault-payments/latest/EN/api/flows/flows_api/routing#MatchPaymentInstrumentQuery)], [PaymentInstrument](/vault-payments/latest/EN/api/flows/flows_api/test#PaymentInstrument)]]`

 | 

Optional function that will be called for Match Payment Instrument Steps. It is given a MatchPaymentInstrumentQuery object and returns a PaymentInstrument.

 |
| 

`instruction_file`

 | 

`Optional[Callable]`

 | 

Optional function that will be called for Instruction File Steps. It takes the instruction batch group name and instruction file group name and returns the InstructionFileStepResult as Vault Payments would, DeadlineExceeded sentinel that indicates if it should call the deadline exceeded func to simulate the deadline being exceeded without an InstructionFileStepResult or an error indicating that the flow should proceed down an on\_error path if it can.

 |
| 

`sequence`

 | 

`Optional[Callable[[[IncrementSequence](/vault-payments/latest/EN/api/flows/flows_api/sequences#IncrementSequence)], [SequenceResult](/vault-payments/latest/EN/api/flows/flows_api/sequences#SequenceResult)]]`

 | 

Optional function that will be called for Sequence Steps.

 |
| 

`parameter_values`

 | 

`Optional[list[[ParameterValue](/vault-payments/latest/EN/api/flows/flows_api/test#ParameterValue)]]`

 | 

Optional list of Parameter Values available during the flow simulation.

 |

## [](#validate_flow "Copy link to heading")validate\_flow

Performs some basic validation on an instruction flow. Any test on a flow should typically have one test fixture that calls this. Raises an `InvalidFlowError` if errors are detected.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`flow`

 | 

`[FlowVersion](/vault-payments/latest/EN/api/flows/flows_api#FlowVersion)`

 | 

The instruction flow to validate.

 |