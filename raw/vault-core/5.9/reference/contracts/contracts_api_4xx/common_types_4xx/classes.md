---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes"
title: "Classes"
scraped_at: "2026-06-22T19:17:20.751Z"
images: 0
---

# Classes

## [](#accountconstraint "Copy link to heading")AccountConstraint

`AccountConstraint`

A Constraint indicating that an expected parameter must be the ID of an existing Account.

Note: This only applies to Core API Parameters. For the Smart Contract Parameters shape equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

The return value of a parameter with this constraint in the Smart Contract ParameterValueTimeseries is of the type str or None.

### [](#constructor "Copy link to heading")Constructor:

`AccountConstraint()`

Constructs a new AccountConstraint object.

## [](#accountidshape "Copy link to heading")AccountIdShape

`AccountIdShape`

A Parameter shape defining an Account id (a string).

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

Parameter value type: `str`.

## [](#accountnotificationdirective "Copy link to heading")AccountNotificationDirective

`AccountNotificationDirective`

### [](#constructor_2 "Copy link to heading")Constructor:

`AccountNotificationDirective(*, notification_type, notification_details)`

A Hook Directive that instructs the publication of a notification. Notification must be defined in the [notification\_types](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#notification_types) list.

  
| name | type | description |
| --- | --- | --- |
| 
notification\_type

 | 

`str`

 | 

The `type` of notification. Used to identify how a notification should be processed.

 |
| 

notification\_details

 | 

`Dict`\[`str`, `str`\]

 | 

The information (key-value pairs of data) to be published with the notification.

 |

### [](#class_attributes "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
notification\_type

 | 

`str`

 | 

The `type` of notification. Used to identify how a notification should be processed.

 |
| 

notification\_details

 | 

`Dict`\[`str`, `str`\]

 | 

The information (key-value pairs of data) to be published with the notification.

 |

## [](#activationhookarguments "Copy link to heading")ActivationHookArguments

`ActivationHookArguments`

The hook arguments of `activation_hook`.

### [](#constructor_3 "Copy link to heading")Constructor:

`ActivationHookArguments(*, effective_datetime)`

Constructs a new ActivationHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

When an account is opened, `effective_datetime` will be set to the `opening_timestamp` for /v1/accounts requests or `activation_timestamp` for /v2/accounts requests. The `effective_datetime` can optionally be backdated by setting these fields to a backdated value on the request to open the Account. If they are not backdated then they default to the date and time that the request is processed.

 |

### [](#class_attributes_2 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

When an account is opened, `effective_datetime` will be set to the `opening_timestamp` for /v1/accounts requests or `activation_timestamp` for /v2/accounts requests. The `effective_datetime` can optionally be backdated by setting these fields to a backdated value on the request to open the Account. If they are not backdated then they default to the date and time that the request is processed.

 |

## [](#activationhookresult "Copy link to heading")ActivationHookResult

`ActivationHookResult`

The hook result of the `activation_hook`.

### [](#constructor_4 "Copy link to heading")Constructor:

`ActivationHookResult(*, account_notification_directives, posting_instructions_directives, scheduled_events_return_value, rejection)`

Constructs a new ActivationHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s by name returned by the hook. For `event_types` returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account will not be opened. **Only available in Vault version 5.0+**.

 |

### [](#class_attributes_3 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s by name returned by the hook. For `event_types` returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account will not be opened. **Only available in Vault version 5.0+**.

 |

## [](#addressdetails "Copy link to heading")AddressDetails

`AddressDetails`

Address details gives a rich description of an address. The tags can be shared between addresses and even different accounts.

### [](#constructor_5 "Copy link to heading")Constructor:

`AddressDetails(*, account_address, description, tags)`

Constructs a new AddressDetails object.

  
| name | type | description |
| --- | --- | --- |
| 
account\_address

 | 

`str`

 | 

The account address the details describe.

 |
| 

description

 | 

`str`

 | 

The human-readable description of the address.

 |
| 

tags

 | 

`List`\[`str`\]

 | 

The list of string tags related to the described address.

 |

### [](#class_attributes_4 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_address

 | 

`str`

 | 

The account address the details describe.

 |
| 

description

 | 

`str`

 | 

The human-readable description of the address.

 |
| 

tags

 | 

`List`\[`str`\]

 | 

The list of string tags related to the described address.

 |

## [](#adjustmentamount "Copy link to heading")AdjustmentAmount

`AdjustmentAmount`

Used in the AuthorisationAdjustment Posting Instructions to adjust an authorised amount of a ClientTransaction.

### [](#constructor_6 "Copy link to heading")Constructor:

`AdjustmentAmount(*, amount, replacement_amount)`

Constructs a new AdjustmentAmount

  
| name | type | description |
| --- | --- | --- |
| 
amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Signed delta amount.

 |
| 

replacement\_amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

A new amount to replace an existing authorised amount.

 |

### [](#class_attributes_5 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Signed delta amount.

 |
| 

replacement\_amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

A new amount to replace an existing authorised amount.

 |

## [](#attribute "Copy link to heading")Attribute

`Attribute`

A property of the Account associated with this Smart Contract whose value is calculated by executing the [attribute\_hook](./../smart_contracts_api_reference4xx/hooks#attribute_hook).

### [](#constructor_7 "Copy link to heading")Constructor:

`Attribute(*, name, data_type)`

Constructs a new Attribute object.

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the attribute. This must be unique across all attributes in the Contract metadata.

 |
| 

data\_type

 | 

`Union`\[`AttributeDecimalType`, `AttributeDateTimeType`, `AttributeStringType`\]

 | 

The expected type of the value that is returned when [attribute\_hook](./../smart_contracts_api_reference4xx/hooks#attribute_hook) is invoked for this attribute.

 |

### [](#class_attributes_6 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the attribute. This must be unique across all attributes in the Contract metadata.

 |
| 

data\_type

 | 

`Union`\[`AttributeDecimalType`, `AttributeDateTimeType`, `AttributeStringType`\]

 | 

The expected type of the value that is returned when [attribute\_hook](./../smart_contracts_api_reference4xx/hooks#attribute_hook) is invoked for this attribute.

 |

## [](#attributedatetimetype "Copy link to heading")AttributeDateTimeType

`AttributeDateTimeType`

An attribute data type indicating that the returned attribute value must be a `datetime` type or None.

### [](#constructor_8 "Copy link to heading")Constructor:

`AttributeDateTimeType()`

Constructs a new AttributeDateTimeType object.

## [](#attributedecimaltype "Copy link to heading")AttributeDecimalType

`AttributeDecimalType`

An attribute data type indicating that the returned attribute value must be a `Decimal` type or None.

### [](#constructor_9 "Copy link to heading")Constructor:

`AttributeDecimalType()`

Constructs a new AttributeDecimalType object.

## [](#attributehookarguments "Copy link to heading")AttributeHookArguments

`AttributeHookArguments`

The hook arguments of `attribute_hook`.

### [](#constructor_10 "Copy link to heading")Constructor:

`AttributeHookArguments(*, effective_datetime, attribute_name)`

Constructs a new AttributeHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This corresponds to the `effective_timestamps` value(s) passed to the [ListAccountAttributeValues](/vault-core/5-9/EN/api/core_api#_core_api_v1_account_attributes_ListAccountAttributeValuesResponse_ListAccountAttributeValues) request that is currently being processed. If there are multiple values in `effective_timestamps`, the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook) will execute once for each value, resulting in different `effective_datetime` values for each hook execution.

 |
| 

attribute\_name

 | 

`str`

 | 

The name of the [Attribute](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attribute) that the hook is being executed for. This corresponds to the `attribute_names` value(s) passed to the [ListAccountAttributeValues](/vault-core/5-9/EN/api/core_api#_core_api_v1_account_attributes_ListAccountAttributeValuesResponse_ListAccountAttributeValues) request that is currently being processed. If there are multiple values in `attribute_names`, the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook) will execute once for each value, resulting in different `attribute_names` values for each hook execution.

 |

### [](#class_attributes_7 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This corresponds to the `effective_timestamps` value(s) passed to the [ListAccountAttributeValues](/vault-core/5-9/EN/api/core_api#_core_api_v1_account_attributes_ListAccountAttributeValuesResponse_ListAccountAttributeValues) request that is currently being processed. If there are multiple values in `effective_timestamps`, the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook) will execute once for each value, resulting in different `effective_datetime` values for each hook execution.

 |
| 

attribute\_name

 | 

`str`

 | 

The name of the [Attribute](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attribute) that the hook is being executed for. This corresponds to the `attribute_names` value(s) passed to the [ListAccountAttributeValues](/vault-core/5-9/EN/api/core_api#_core_api_v1_account_attributes_ListAccountAttributeValuesResponse_ListAccountAttributeValues) request that is currently being processed. If there are multiple values in `attribute_names`, the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook) will execute once for each value, resulting in different `attribute_names` values for each hook execution.

 |

## [](#attributehookresult "Copy link to heading")AttributeHookResult

`AttributeHookResult`

The expected return type of [attribute\_hook](./../smart_contracts_api_reference4xx/hooks#attribute_hook).

### [](#constructor_11 "Copy link to heading")Constructor:

`AttributeHookResult(*, attribute_value)`

  
| name | type | description |
| --- | --- | --- |
| 
attribute\_value

 | 

`Optional`\[`Decimal`, `datetime`, `str`\]

 | 

The returned value of the [Attribute](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attribute). The type of the value must match the corresponding [type](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attributedecimaltype) of the attribute with the associated name as defined in Contract metadata. If the returned value is not of the correct type, a runtime error will occur.

 |

### [](#class_attributes_8 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
attribute\_value

 | 

`Optional`\[`Decimal`, `datetime`, `str`\]

 | 

The returned value of the [Attribute](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attribute). The type of the value must match the corresponding [type](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attributedecimaltype) of the attribute with the associated name as defined in Contract metadata. If the returned value is not of the correct type, a runtime error will occur.

 |

## [](#attributestringtype "Copy link to heading")AttributeStringType

`AttributeStringType`

An attribute data type indicating that the returned attribute value must be a `str` type or None.

### [](#constructor_12 "Copy link to heading")Constructor:

`AttributeStringType()`

Constructs a new AttributeStringType object.

## [](#authorisationadjustment "Copy link to heading")AuthorisationAdjustment

`AuthorisationAdjustment`

[Authorisation adjustment](/vault-core/5-9/EN/reference/postings#authorisation_adjustment_chainable) is a chainable Posting Instruction that can be used to change the amount that is ring-fenced by a [ClientTransaction](#clienttransaction). The Client Transaction being adjusted is identified by the `client_transaction_id` attribute.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_13 "Copy link to heading")Constructor:

`AuthorisationAdjustment(*, instruction_details, transaction_code, override_all_restrictions, client_transaction_id, adjustment_amount, advice)`

Constructs a new AuthorisationAdjustment

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

adjustment\_amount

 | 

`AdjustmentAmount`

 | 

The amount of the AuthorisationAdjustment, which can be specified as a delta (the difference between previous amount and the new amount) or as a new total authorised amount.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |

### [](#class_attributes_9 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

adjustment\_amount

 | 

`AdjustmentAmount`

 | 

The amount of the AuthorisationAdjustment, which can be specified as a delta (the difference between previous amount and the new amount) or as a new total authorised amount.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |
| 

authorised\_amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount authorised for this ClientTransaction after this instruction has been accepted. Note that this is output only information, which is derived by the ledger.

 |
| 

delta\_amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The change that this accepted instruction has made to the amount authorised for this ClientTransaction. Note that this is output only information, which is derived by the ledger.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |

### [](#methods "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#balance "Copy link to heading")Balance

`Balance`

The credit, debit, and net balances (credit - debit) for a given balance phase.

### [](#constructor_14 "Copy link to heading")Constructor:

`Balance(*, credit, debit, net)`

Constructs a new Balance object.

  
| name | type | description |
| --- | --- | --- |
| 
credit

 | 

`Decimal`

 | 

The total credit balance

 |
| 

debit

 | 

`Decimal`

 | 

The total debit balance

 |
| 

net

 | 

`Decimal`

 | 

The total net balance. If the contract specifies Tside.LIABILITY, this will equal (credit - debit). If the contract specifies Tside.ASSET, this will equal (debit - credit).

 |

### [](#class_attributes_10 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
credit

 | 

`Decimal`

 | 

The total credit balance

 |
| 

debit

 | 

`Decimal`

 | 

The total debit balance

 |
| 

net

 | 

`Decimal`

 | 

The total net balance. If the contract specifies Tside.LIABILITY, this will equal (credit - debit). If the contract specifies Tside.ASSET, this will equal (debit - credit).

 |

## [](#balancecoordinate "Copy link to heading")BalanceCoordinate

`BalanceCoordinate`

Unique key for [BalanceDefaultDict](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancedefaultdict) made up of attributes identifying a particular Balance.

### [](#constructor_15 "Copy link to heading")Constructor:

`BalanceCoordinate(*, account_address, asset, denomination, phase)`

Constructs a new BalanceCoordinate object.

  
| name | type | description |
| --- | --- | --- |
| 
account\_address

 | 

`str`

 | 

The account address associated with the Balance.

 |
| 

asset

 | 

`str`

 | 

The underlying asset of the Balance.

 |
| 

denomination

 | 

`str`

 | 

The underlying denomination of the Balance.

 |
| 

phase

 | 

`Phase`

 | 

The current phase of the Balance.

 |

### [](#class_attributes_11 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_address

 | 

`str`

 | 

The account address associated with the Balance.

 |
| 

asset

 | 

`str`

 | 

The underlying asset of the Balance.

 |
| 

denomination

 | 

`str`

 | 

The underlying denomination of the Balance.

 |
| 

phase

 | 

`Phase`

 | 

The current phase of the Balance.

 |

## [](#balancedefaultdict "Copy link to heading")BalanceDefaultDict

`BalanceDefaultDict`

The key is a BalanceCoordinate object which contains the account\_address, asset, denomination and phase. The value is a Balance object which contains the debit, credit and net balance changes. Returns defaultdict object, type - `Dict[BalanceCoordinate, Balance]`. If non-existing key is accessed, value with zero debit, credit and net balance changes returned. BalanceDefaultDict objects support addition operations from 3.6+.

## [](#balancediscretetimeseries "Copy link to heading")BalanceDiscreteTimeseries

`BalanceDiscreteTimeseries`

A discrete timeseries of balances for the Account.

The `get()`, `before()`, `after()`, and `latest()` methods return a [TimeseriesItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#timeseriesitem) object, where the `.value` of each `TimeseriesItem` returns a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object.

The `between()` method returns a subset of the discrete timeseries.

To find the total balance for the Account or a given address inside the Account, sum the relevant `Balance` objects for the appropriate datetime.

### [](#methods_2 "Copy link to heading")Methods:

`get(*, at_datetime)`

Returns the `TimeseriesItem` object at a given datetime in the `BalanceDiscreteTimeseries`. If the given datetime does not have an associated `TimeseriesItem`, returns `None`.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime from which to fetch the `TimeseriesItem` object. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `TimeseriesItem` | `None` The `TimeseriesItem` object at the datetime provided.

`before(*, at_datetime)`

Returns the `TimeseriesItem` object just before a given datetime in the `BalanceDiscreteTimeseries`. If there are no such datapoints, returns `None`.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the `TimeseriesItem` object. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `TimeseriesItem` | `None` The `TimeseriesItem` object at just before the datetime provided.

`after(*, at_datetime)`

Returns the `TimeseriesItem` object just after a given datetime in the `BalanceDiscreteTimeseries`. If there are no such datapoints, returns `None`.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just after which to fetch the `TimeseriesItem` object. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `TimeseriesItem` | `None` The `TimeseriesItem` object at just after the datetime provided.

`latest()` Returns the last `TimeseriesItem` object in the `BalanceDiscreteTimeseries`.

**Return Value:** `TimeseriesItem` The last `TimeseriesItem` object in the timeseries.

`all()`

Returns a list of all available `TimeseriesItem` objects across the discrete interval.

**Return Value:** `List`\[`TimeseriesItem`\] All available `TimeseriesItem` objects.

`between(*, start_datetime, end_datetime)`

Returns a subset of the original `BalanceDiscreteTimeseries` which contains the datapoints between the `start_datetime` and `end_datetime` inclusively. If there are no datapoints between these timestamps, the timeseries will be empty.

  
| name | type | description |
| --- | --- | --- |
| 
start\_datetime

 | 

`datetime`

 | 

The start datetime of the range of the subset. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

end\_datetime

 | 

`datetime`

 | 

The end datetime of the range of the subset. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `BalanceDiscreteTimeseries`

The subset of the `BalanceDiscreteTimeseries` laying between `start_datetime` and `end_datetime` inclusively.

## [](#balancesdiscreteintervalfetcher "Copy link to heading")BalancesDiscreteIntervalFetcher

`BalancesDiscreteIntervalFetcher`

A fetcher for retrieving balances at periodic observation points within a given interval window. The observation points are determined by the `sampling_period`, starting from the start time (inclusive). If end time falls on the observation point, it is included.

### [](#constructor_16 "Copy link to heading")Constructor:

`BalancesDiscreteIntervalFetcher(*, fetcher_id, start, end, sampling_period, filter, datetime_view)`

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

sampling\_period

 | 

`Period`

 | 

The [Period](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#period) that specifies the fixed time between balance observations.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

### [](#class_attributes_12 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

sampling\_period

 | 

`Period`

 | 

The [Period](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#period) that specifies the fixed time between balance observations.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

## [](#balancesfilter "Copy link to heading")BalancesFilter

`BalancesFilter`

A filter for refining the balances data retrieved by a fetcher.

### [](#constructor_17 "Copy link to heading")Constructor:

`BalancesFilter(*, addresses)`

  
| name | type | description |
| --- | --- | --- |
| 
addresses

 | 

`List`\[`str`\]

 | 

A list of balance addresses.

 |

### [](#class_attributes_13 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
addresses

 | 

`List`\[`str`\]

 | 

A list of balance addresses.

 |

## [](#balancesintervalfetcher "Copy link to heading")BalancesIntervalFetcher

`BalancesIntervalFetcher`

A fetcher for retrieving balances data within a given interval window, inclusive of end time.

### [](#constructor_18 "Copy link to heading")Constructor:

`BalancesIntervalFetcher(*, fetcher_id, start, end, filter, datetime_view)`

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned. When the desired interval of the fetcher is a single timestamp (`start` == `end`), it is strongly advised to use a [BalancesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) instead.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

### [](#class_attributes_14 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned. When the desired interval of the fetcher is a single timestamp (`start` == `end`), it is strongly advised to use a [BalancesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) instead.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

## [](#balancesobservation "Copy link to heading")BalancesObservation

`BalancesObservation`

A `BalanceDefaultDict` containing an Account’s balances observed at a fixed point in time.

### [](#constructor_19 "Copy link to heading")Constructor:

`BalancesObservation(*, balances, value_datetime, at_datetime, datetime_view)`

Constructs a new BalancesObservation object.

  
| name | type | description |
| --- | --- | --- |
| 
balances

 | 

`BalanceDefaultDict`

 | 

The balances at the given datetime.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the balances are observed for `DateTimeView.VALUE_DATETIME`. This attribute will be None for a live balances observation, or a balances observation on `DateTimeView.BOOKING_DATETIME`. Note that `value_datetime` is not compatible with `DateTimeView.BOOKING_DATETIME` and `at_datetime` should be used for observations on both `DateTimeView.BOOKING_DATETIME` and `DateTimeView.VALUE_DATETIME`.

 |
| 

at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the balances are observed with respect to the given `DateTimeView`. This attribute will be None for a live balances observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The datetime view on which the balances are observed. This attribute will be `DateTimeview.VALUE_DATETIME` by default, if datetime\_view is not specified on the fetcher.

 |

### [](#class_attributes_15 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
balances

 | 

`BalanceDefaultDict`

 | 

The balances at the given datetime.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the balances are observed for `DateTimeView.VALUE_DATETIME`. This attribute will be None for a live balances observation, or a balances observation on `DateTimeView.BOOKING_DATETIME`. Note that `value_datetime` is not compatible with `DateTimeView.BOOKING_DATETIME` and `at_datetime` should be used for observations on both `DateTimeView.BOOKING_DATETIME` and `DateTimeView.VALUE_DATETIME`.

 |
| 

at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the balances are observed with respect to the given `DateTimeView`. This attribute will be None for a live balances observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The datetime view on which the balances are observed. This attribute will be `DateTimeview.VALUE_DATETIME` by default, if datetime\_view is not specified on the fetcher.

 |

## [](#balancesobservationfetcher "Copy link to heading")BalancesObservationFetcher

`BalancesObservationFetcher`

A fetcher for observing balances at a given moment in time.

### [](#constructor_20 "Copy link to heading")Constructor:

`BalancesObservationFetcher(*, fetcher_id, at, filter, datetime_view)`

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the balances will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

### [](#class_attributes_16 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the balances will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`BalancesFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |
| 

datetime\_view

 | 

`Optional`\[`DateTimeView`\]

 | 

The [DateTimeView](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datetimeview) to fetch balances on, must be one of `DateTimeView.VALUE_DATETIME` or `DateTimeView.BOOKING_DATETIME`. If it is not set, it defaults to `DateTimeView.VALUE_DATETIME`.

 |

## [](#balancetimeseries "Copy link to heading")BalanceTimeseries

`BalanceTimeseries`

A timeseries of balances for the Account.

The 'at', 'before', and 'latest' methods (and the `.value` attribute of each [TimeseriesItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#timeseriesitem) returned via 'all') return a Balance object.

To find the "total" balance for the Account, or a given address inside the Account, you must sum the relevant Balance objects for the appropriate datetime.

### [](#methods_3 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available Balance object as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime from which to fetch the latest Balance object. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Balance` The latest Balance object as of the datetime provided.

`before(*, at_datetime)` Returns the latest available Balance object as of just before the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the latest Balance object. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Balance` The latest Balance object as of just before the datetime provided.

`latest()` Returns the last available Balance in the Timeseries. If the Timeseries is fetched using a `BalancesIntervalFetcher`, the last element in the Timeseries can be before or after the hook `effective_datetime` depending on the Interval `end`. If no Interval `end` is defined, the last known element is returned.

**Return Value:** `Balance` The latest available Balance object.

`all()` Returns a list of all available Balance object values across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available Balance object values and the datetime for each.

## [](#calendarevent "Copy link to heading")CalendarEvent

`CalendarEvent`

A unique event resource defined in the Vault Calendar.

### [](#constructor_21 "Copy link to heading")Constructor:

`CalendarEvent(*, id, calendar_id, start_datetime, end_datetime)`

  
| name | type | description |
| --- | --- | --- |
| 
id

 | 

`str`

 | 

Uniquely identifies the Calendar Event in the Vault Calendar resource.

 |
| 

calendar\_id

 | 

`str`

 | 

The ID of the Calendar that this Calendar Event belongs to.

 |
| 

start\_datetime

 | 

`datetime`

 | 

The logical datetime at which the Calendar Event is effective from (inclusive). Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

end\_datetime

 | 

`datetime`

 | 

The logical datetime at which the Calendar Event is effective to (exclusive). Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_17 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
id

 | 

`str`

 | 

Uniquely identifies the Calendar Event in the Vault Calendar resource.

 |
| 

calendar\_id

 | 

`str`

 | 

The ID of the Calendar that this Calendar Event belongs to.

 |
| 

start\_datetime

 | 

`datetime`

 | 

The logical datetime at which the Calendar Event is effective from (inclusive). Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

end\_datetime

 | 

`datetime`

 | 

The logical datetime at which the Calendar Event is effective to (exclusive). Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#calendarevents "Copy link to heading")CalendarEvents

`CalendarEvents`

A list of CalendarEvent objects.

### [](#constructor_22 "Copy link to heading")Constructor:

`CalendarEvents(*, calendar_events)`

  
| name | type | description |
| --- | --- | --- |
| 
calendar\_events

 | 

`Optional`\[`List`\[`CalendarEvent`\]\]

 | 

A list of CalendarEvent objects.

 |

## [](#calendarsfilter "Copy link to heading")CalendarsFilter

`CalendarsFilter`

A filter for refining the calendars retrieved by a fetcher.

### [](#constructor_23 "Copy link to heading")Constructor:

`CalendarsFilter(*, calendar_ids)`

  
| name | type | description |
| --- | --- | --- |
| 
calendar\_ids

 | 

`List`\[`str`\]

 | 

A list of calendar IDs to get calendar events for.

 |

### [](#class_attributes_18 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
calendar\_ids

 | 

`List`\[`str`\]

 | 

A list of calendar IDs to get calendar events for.

 |

## [](#calendarsintervalfetcher "Copy link to heading")CalendarsIntervalFetcher

`CalendarsIntervalFetcher`

A fetcher for retrieving calendar events over an interval, inclusive of end time.The `filter` attribute must be populated with a `CalendarsFilter` containing the calendar IDs to fetch for.

### [](#constructor_24 "Copy link to heading")Constructor:

`CalendarsIntervalFetcher(*, fetcher_id, filter, start, end)`

Constructs a new CalendarsIntervalFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

filter

 | 

`CalendarsFilter`

 | 

A filter to refine the results returned by the fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |

### [](#class_attributes_19 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

filter

 | 

`CalendarsFilter`

 | 

A filter to refine the results returned by the fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |

## [](#calendarsobservation "Copy link to heading")CalendarsObservation

`CalendarsObservation`

A mapping of calendar IDs to active calendar events at a fixed point in time.

### [](#constructor_25 "Copy link to heading")Constructor:

`CalendarsObservation(*, calendars, value_datetime)`

  
| name | type | description |
| --- | --- | --- |
| 
calendars

 | 

`Dict`\[`str`, `List`\[`CalendarEvent`\]

 | 

Map of calendar ID to list of active calendar events at the given time.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the calendars are observed. This attribute will be None for a live observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_20 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
calendars

 | 

`Dict`\[`str`, `List`\[`CalendarEvent`\]

 | 

Map of calendar ID to list of active calendar events at the given time.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the calendars are observed. This attribute will be None for a live observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#calendarsobservationfetcher "Copy link to heading")CalendarsObservationFetcher

`CalendarsObservationFetcher`

A fetcher for observing calendars at a given moment in time. The `filter` attribute must be populated with a `CalendarsFilter` containing the calendar IDs to fetch for.

### [](#constructor_26 "Copy link to heading")Constructor:

`CalendarsObservationFetcher(*, fetcher_id, filter, at)`

Constructs a new CalendarsObservationFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

filter

 | 

`CalendarsFilter`

 | 

A filter to refine the results returned by the fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the calendar will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |

### [](#class_attributes_21 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

filter

 | 

`CalendarsFilter`

 | 

A filter to refine the results returned by the fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the calendar will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |

## [](#calendartimeseries "Copy link to heading")CalendarTimeseries

`CalendarTimeseries`

A timeseries of active calendar events.

The 'at', 'before', and 'latest' methods (and the `.value` attribute of each [TimeseriesItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#timeseriesitem) returned via 'all') return a list of CalendarEvent objects.

Each timeseries item is a `List[CalendarEvent]` which represents the calendar events which are active between the corresponding timestamp and the timestamp of the next timeseries item. Note that the list of CalendarEvent objects in the timeseries item are ordered by (start\_datetime, end\_datetime, id) ascending.

### [](#methods_4 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available active calendar events as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime at which to fetch the active calendar events for. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `List`\[`CalendarEvent`\] The active calendar events at the datetime provided.

`before(*, at_datetime)` Returns the latest available active calendar events as of immediately before the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The timestamp just before which to fetch the latest active calendar events. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `List`\[`CalendarEvent`\] The active calendar events at the datetime provided.

`latest()` Returns the last available active calendar events in the Timeseries. When the Timeseries is fetched using a `CalendarsIntervalFetcher`, the last element in the Timeseries can be before or after the hook `effective_datetime` depending on the Interval `end`. If no Interval `end` is defined, the last known timeseries element is returned.

**Return Value:** `List`\[`CalendarEvent`\] The latest available active calendar events.

`all()` Returns a list of all active CalendarEvents across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available active calendar events and their datetimes. This function will always return an entry for the start date of the Interval. If there are no active calendar events at the start of the Interval, the value will be set to an empty list.

## [](#clienttransaction "Copy link to heading")ClientTransaction

`ClientTransaction`

A sequence of Posting Instruction objects with the same `client_transaction_id` field.

This object represents the lifecycle of a single transaction. The lifecycle may be as trivial as a single "hard settlement" (immediate movement of funds), or contain any combination of authorisation, reauthorisation, and so on (see [PostingInstructionType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#postinginstructiontype)).

Each Posting Instruction in this sequence represents a change in state in the transaction’s lifecycle.

Although the object schema allows for Posting Instruction objects within the same [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) to have differing `account_id`, `asset`, and `denomination` fields, by convention they should all be the same, in which case the Posting Instruction only represents a change to the net amount and/or [Phase](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#phase) of its parent transaction.

### [](#constructor_27 "Copy link to heading")Constructor:

`ClientTransaction(*, client_transaction_id, account_id, posting_instructions, client_id, tside)`

  
| name | type | description |
| --- | --- | --- |
| 
client\_transaction\_id

 | 

`str`

 | 

The unique ID of this `ClientTransaction`.

 |
| 

account\_id

 | 

`str`

 | 

The ID of the Account which is the target Account for this `ClientTransaction`. Note that for a `ClientTransaction` that consists of Custom Instructions that have different target accounts, each `ClientTransaction` represents the single Account client transaction - therefore consists only of `CustomInstruction` Postings for a single Account ID.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

Ordered list of Posting Instructions with the same `client_transaction_id` for this `ClientTransaction`. Sorted ascending by priority: `value_datetime`, `insertion_datetime`, then `booking_datetime`.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code. If not provided, defaults to an empty string.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The treasury side of the target Account. Determines the Account Balance net sign.

 |

### [](#class_attributes_22 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
client\_transaction\_id

 | 

`str`

 | 

The unique ID of this `ClientTransaction`.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

account\_id

 | 

`str`

 | 

The ID of the Account which is the target Account for this `ClientTransaction`. Note that for a `ClientTransaction` that consists of Custom Instructions that have different target accounts, each `ClientTransaction` represents the single Account client transaction - therefore consists only of `CustomInstruction` Postings for a single Account ID.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the `ClientTransaction` which is determined by the denomination of the first Posting Instruction within the `ClientTransaction`.

 |
| 

is\_custom

 | 

`bool`

 | 

The value will be True if and only if all Posting Instruction objects are of type `PostingInstructionType.CUSTOM_INSTRUCTION`.

 |
| 

start\_datetime

 | 

`datetime`

 | 

This value is the `value_datetime` of the first Posting Instruction within the `ClientTransaction`. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

Ordered list of Posting Instructions with the same `client_transaction_id` for this `ClientTransaction`. Sorted ascending by priority: `value_datetime`, `insertion_datetime`, then `booking_datetime`.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The treasury side of the target Account. Determines the Account Balance net sign.

 |

### [](#methods_5 "Copy link to heading")Methods:

`released(*, effective_datetime)`

This value will be `True` if and only if the `ClientTransaction` has ended with a Posting Instruction of type `RELEASE` at given `effective_datetime`.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`Optional`\[`datetime`\]

 | 

If set, only Posting Instructions that happened before or on the datetime are included in the result. Must be a timezone-aware UTC datetime. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `bool`

This value will be `True` if and only if the `ClientTransaction` has ended with a Posting Instruction of type `RELEASE` at given `effective_datetime`.

`completed(*, effective_datetime)`

This value will be `True` if and only if the `ClientTransaction` has ended with a Posting Instruction of type `SETTLEMENT` and flag final.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`Optional`\[`datetime`\]

 | 

If set, only Posting Instructions that happened before or on the datetime are included in the result. Must be a timezone-aware UTC datetime.

 |

**Return Value:** `bool`

This value will be `True` if and only if the `ClientTransaction` has ended with a Posting Instruction of type `SETTLEMENT` and flag final.

`effects(*, effective_datetime)`

Returns the net "effects" that the `ClientTransaction` has had on the Account. Note: This method is not implemented for Client Transactions with Custom Instructions.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`Optional`\[`datetime`\]

 | 

If set, only Posting Instructions that happened before or on the datetime are included in the result. Must be a timezone-aware UTC datetime.

 |

**Return Value:** `Optional`\[`ClientTransactionEffects`\]

The "effects" that a`ClientTransaction` has had on the balances of an Account, or the "current state" of the `ClientTransaction`. Returns `None` for Client Transactions with Custom Instructions.

`balances(*, effective_datetime, tside)` Returns the net balance changes to the Account caused by this `ClientTransaction`.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`Optional`\[`datetime`\]

 | 

If set, only Posting Instructions that happened before or on the datetime are included in the result. Must be a timezone-aware UTC datetime.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Client Transactions returned via `vault` methods or Client Transactions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in a Supervisor Contract. Only required when creating a Client Transaction object within a Contract, as these might contain instructions for multiple Accounts.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#clienttransactioneffects "Copy link to heading")ClientTransactionEffects

`ClientTransactionEffects`

The "effects" that a ClientTransaction has had on the balances of an Account, or the "current state" of the ClientTransaction. Note: This method is not implemented for ClientTransaction with CustomInstruction type - None will be returned for such ClientTransaction effects instead.

### [](#constructor_28 "Copy link to heading")Constructor:

`ClientTransactionEffects(*, authorised, settled, unsettled)`

Constructs a new ClientTransactionEffects

  
| name | type | description |
| --- | --- | --- |
| 
authorised

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been authorised. Note: value is updated on Adjustment instructions, however, is not updated on Settlement or Release instructions.

 |
| 

settled

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been settled.

 |
| 

unsettled

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been authorised (including adjustments) but is yet to be released or settled.

 |

### [](#class_attributes_23 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
authorised

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been authorised. Note: value is updated on Adjustment instructions, however, is not updated on Settlement or Release instructions.

 |
| 

settled

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been settled.

 |
| 

unsettled

 | 

`Union`\[`Decimal`, `int`\]

 | 

The total amount that has been authorised (including adjustments) but is yet to be released or settled.

 |

## [](#conversionadjustmenthookarguments "Copy link to heading")ConversionAdjustmentHookArguments

`ConversionAdjustmentHookArguments`

The hook arguments of the `conversion_adjustment_hook`.

### [](#constructor_29 "Copy link to heading")Constructor:

`ConversionAdjustmentHookArguments(*, effective_datetime, existing_schedules)`

Constructs a new ConversionAdjustmentHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

**V2 Accounts**  

The `effective_datetime` is set to the time that the hook is executed.  

**V1 Accounts**  

The `effective_datetime` is set to the time that the `AccountUpdate` is created

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

### [](#class_attributes_24 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

**V2 Accounts**  

The `effective_datetime` is set to the time that the hook is executed.  

**V1 Accounts**  

The `effective_datetime` is set to the time that the `AccountUpdate` is created

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

## [](#conversionadjustmenthookresult "Copy link to heading")ConversionAdjustmentHookResult

`ConversionAdjustmentHookResult`

The hook result of the `conversion_adjustment_hook`.

### [](#constructor_30 "Copy link to heading")Constructor:

`ConversionAdjustmentHookResult(*, posting_instructions_directives)`

Constructs a new ConversionAdjustmentHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

### [](#class_attributes_25 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

## [](#conversionhookarguments "Copy link to heading")ConversionHookArguments

`ConversionHookArguments`

The hook arguments of the `conversion_hook`.

### [](#constructor_31 "Copy link to heading")Constructor:

`ConversionHookArguments(*, effective_datetime, existing_schedules)`

Constructs a new ConversionHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

**V2 Accounts**  

The `effective_datetime` is set to the time that the hook is executed.  

**V1 Accounts**  

The `effective_datetime` is set to the time that the `AccountUpdate` is created

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

### [](#class_attributes_26 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

**V2 Accounts**  

The `effective_datetime` is set to the time that the hook is executed.  

**V1 Accounts**  

The `effective_datetime` is set to the time that the `AccountUpdate` is created

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

## [](#conversionhookresult "Copy link to heading")ConversionHookResult

`ConversionHookResult`

The hook result of the `conversion_hook`.

### [](#constructor_32 "Copy link to heading")Constructor:

`ConversionHookResult(*, account_notification_directives, posting_instructions_directives, scheduled_events_return_value, rejection)`

Constructs a new ConversionHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s by name returned by the hook. For any new [event\_types](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) in this Contract returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`. For any `event_types` that exist in the previous Contract and are returned in this mapping, the `ScheduledEvent` `start_datetime` is disregarded and defaults to the last run time of the existing `event_type` schedule. Because of this, the start\_datetime for the existing schedules must be set to None or remain unchanged, as any other values will result in an error. This attribute is only optional if no `event_types` are defined in this Contract. Additionally, all `event_types` in this Contract must be included in the `scheduled_events_return_value`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account will not be converted. **Only available in Vault version 5.0+**.

 |

### [](#class_attributes_27 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s by name returned by the hook. For any new [event\_types](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) in this Contract returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`. For any `event_types` that exist in the previous Contract and are returned in this mapping, the `ScheduledEvent` `start_datetime` is disregarded and defaults to the last run time of the existing `event_type` schedule. Because of this, the start\_datetime for the existing schedules must be set to None or remain unchanged, as any other values will result in an error. This attribute is only optional if no `event_types` are defined in this Contract. Additionally, all `event_types` in this Contract must be included in the `scheduled_events_return_value`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account will not be converted. **Only available in Vault version 5.0+**.

 |

## [](#custominstruction "Copy link to heading")CustomInstruction

`CustomInstruction`

[Custom Instruction](/vault-core/5-9/EN/reference/postings#custom_instruction) is a type of Posting Instruction that specifies a list of credits and debits to be written to the ledger.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_33 "Copy link to heading")Constructor:

`CustomInstruction(*, instruction_details, transaction_code, override_all_restrictions, postings, value_datetime, booking_datetime)`

Constructs a new CustomInstruction.

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

postings

 | 

`List`\[`Posting`\]

 | 

A list of Postings (credits and debits). When instructed via a `PostingInstructionDirective`, each `CustomInstruction` can have up to 64 `Posting`s and must have a zero net sum. The zero net sum means that for each unique (asset, denomination, phase) combination, the sum of `Posting` credits must equal the sum of `Posting` debits.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive.

 |

### [](#class_attributes_28 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

postings

 | 

`List`\[`Posting`\]

 | 

A list of Postings (credits and debits). When instructed via a `PostingInstructionDirective`, each `CustomInstruction` can have up to 64 `Posting`s and must have a zero net sum. The zero net sum means that for each unique (asset, denomination, phase) combination, the sum of `Posting` credits must equal the sum of `Posting` debits.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_6 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#dateshape "Copy link to heading")DateShape

`DateShape`

Specifies that the enclosing [Parameter](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parameter) object refers to a date, whose value is a Python datetime. The datetime assignment takes the form `datetime(YYYY, MM, DD)`, where the datetime value needs to be a valid date. Any value that does not use the date format `%Y-%m-%d` will trigger an `IllegalPython` error.

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

You can optionally set `min_date` and `max_date` to bound acceptable values.

Parameter value type: `datetime`.

### [](#constructor_34 "Copy link to heading")Constructor:

`DateShape(*, min_date, max_date)`

Constructs a new DateShape.

  
| name | type | description |
| --- | --- | --- |
| 
min\_date

 | 

`Optional`\[`datetime`\]

 | 

Metadata describing which the earliest allowed date. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

max\_date

 | 

`Optional`\[`datetime`\]

 | 

Metadata describing which the latest allowed date. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_29 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
min\_date

 | 

`Optional`\[`datetime`\]

 | 

Metadata describing which the earliest allowed date. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

max\_date

 | 

`Optional`\[`datetime`\]

 | 

Metadata describing which the latest allowed date. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#datetimeconstraint "Copy link to heading")DateTimeConstraint

`DateTimeConstraint`

A Constraint indicating that an expected parameter must be in date-time format.

Note: This only applies to Core API Parameters. For the Smart Contract Parameters shape equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

The return value of a parameter with this constraint in the Smart Contract ParameterValueTimeseries is of the type datetime or None.

### [](#constructor_35 "Copy link to heading")Constructor:

`DateTimeConstraint(*, precision, earliest, latest)`

Constructs a new DateTimeConstraint object.

  
| name | type | description |
| --- | --- | --- |
| 
precision

 | 

`Optional`\[`DateTimePrecision`\]

 | 

Shortest time denomination that can be set.

 |
| 

earliest

 | 

`Optional`\[`datetime`\]

 | 

The earliest permitted datetime. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

latest

 | 

`Optional`\[`datetime`\]

 | 

The latest permitted datetime. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_30 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
precision

 | 

`Optional`\[`DateTimePrecision`\]

 | 

Shortest time denomination that can be set.

 |
| 

earliest

 | 

`Optional`\[`datetime`\]

 | 

The earliest permitted datetime. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

latest

 | 

`Optional`\[`datetime`\]

 | 

The latest permitted datetime. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#deactivationhookarguments "Copy link to heading")DeactivationHookArguments

`DeactivationHookArguments`

The hook arguments of `deactivation_hook`.

### [](#constructor_36 "Copy link to heading")Constructor:

`DeactivationHookArguments(*, effective_datetime)`

Constructs a new DeactivationHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

The `effective_datetime` in the deactivation hook is derived from the time that the hook was triggered.

 |

### [](#class_attributes_31 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.  

The `effective_datetime` in the deactivation hook is derived from the time that the hook was triggered.

 |

## [](#deactivationhookresult "Copy link to heading")DeactivationHookResult

`DeactivationHookResult`

The hook result of the `deactivation_hook`.

### [](#constructor_37 "Copy link to heading")Constructor:

`DeactivationHookResult(*, account_notification_directives, posting_instructions_directives, update_account_event_type_directives, rejection)`

Constructs a new DeactivationHookResult object. It allows the population of directives or rejection, but not both.

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account cannot be closed.

 |

### [](#class_attributes_32 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the account cannot be closed.

 |

## [](#decimalconstraint "Copy link to heading")DecimalConstraint

`DecimalConstraint`

A Constraint indicating that an expected parameter must be a Decimal.

Note: This only applies to Core API Parameters. For the Smart Contract Parameters shape equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

The return value of a parameter with this constraint in the Smart Contract ParameterValueTimeseries is of the type Decimal or None.

### [](#constructor_38 "Copy link to heading")Constructor:

`DecimalConstraint(*, min_value, max_value)`

Constructs a new DecimalConstraint object.

  
| name | type | description |
| --- | --- | --- |
| 
min\_value

 | 

`Optional`\[`Decimal`\]

 | 

The minimum value (inclusive) that the number can be.

 |
| 

max\_value

 | 

`Optional`\[`Decimal`\]

 | 

The maximum value (inclusive) that the number can be.

 |

### [](#class_attributes_33 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
min\_value

 | 

`Optional`\[`Decimal`\]

 | 

The minimum value (inclusive) that the number can be.

 |
| 

max\_value

 | 

`Optional`\[`Decimal`\]

 | 

The maximum value (inclusive) that the number can be.

 |

## [](#denominationshape "Copy link to heading")DenominationShape

`DenominationShape`

A Parameter shape defining an denomination (a string).

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

### [](#constructor_39 "Copy link to heading")Constructor:

`DenominationShape(*, permitted_denominations)`

Constructs a new DenominationShape.

Parameter value type: `str`.

  
| name | type | description |
| --- | --- | --- |
| 
permitted\_denominations

 | 

`Optional`\[`List`\[`str`\]\]

 | 

Metadata describing which denominations are permitted.

 |

### [](#class_attributes_34 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
permitted\_denominations

 | 

`Optional`\[`List`\[`str`\]\]

 | 

Metadata describing which denominations are permitted.

 |

## [](#derivedparameterhookarguments "Copy link to heading")DerivedParameterHookArguments

`DerivedParameterHookArguments`

The hook arguments of the `derived_parameter_hook`.

### [](#constructor_40 "Copy link to heading")Constructor:

`DerivedParameterHookArguments(*, effective_datetime)`

Constructs a new DerivedParameterHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_35 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#derivedparameterhookresult "Copy link to heading")DerivedParameterHookResult

`DerivedParameterHookResult`

The hook result of the `derived_parameter_hook`.

### [](#constructor_41 "Copy link to heading")Constructor:

`DerivedParameterHookResult(*, parameters_return_value)`

Constructs a new DerivedParameterHookResult object.

  
| name | type | description |
| --- | --- | --- |
| 
parameters\_return\_value

 | 

`Dict`\[`str`, `Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`\]\]

 | 

A dictionary with values keyed by parameter name for all [derived parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters) defined in the Smart Contract Metadata. An entry in the dictionary needs to exist for all defined derived parameters. Values that are allowed to be returned by Parameter Shape: NumberShape: Decimal or int, StringShape: str, AccountIdShape: str, DenominationShape: str, DateShape: datetime, OptionalShape: OptionalValue, UnionShape: UnionItemValue with key in the set of valid keys of the UnionShape.

 |

### [](#class_attributes_36 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
parameters\_return\_value

 | 

`Dict`\[`str`, `Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`\]\]

 | 

A dictionary with values keyed by parameter name for all [derived parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters) defined in the Smart Contract Metadata. An entry in the dictionary needs to exist for all defined derived parameters. Values that are allowed to be returned by Parameter Shape: NumberShape: Decimal or int, StringShape: str, AccountIdShape: str, DenominationShape: str, DateShape: datetime, OptionalShape: OptionalValue, UnionShape: UnionItemValue with key in the set of valid keys of the UnionShape.

 |

## [](#endofmonthschedule "Copy link to heading")EndOfMonthSchedule

`EndOfMonthSchedule`

### [](#constructor_42 "Copy link to heading")Constructor:

`EndOfMonthSchedule(*, day, hour, minute, second, failover)`

Define a recurring monthly schedule that automatically handles the varying lengths of different months. You must place the definitions within the `schedule_method` attribute for a given event; define this event with a [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent) within [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) or [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook) or within the `schedule_method` attribute of the [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective) or [UpdatePlanEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective) classes, so that the schedule recurs on a monthly basis. This method is available for both Smart and Supervisor Contracts.

Note: You can only use EndOfMonthSchedule with [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) set to its default of UTC.

  
| name | type | description |
| --- | --- | --- |
| 
day

 | 

`int`

 | 

Day of the month (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Hour of the day (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Minute of the hour (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Second of the minute (0-59).

 |
| 

failover

 | 

`Optional`\[`ScheduleFailover`\]

 | 

The failover strategy for this schedule.

 |

### [](#class_attributes_37 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
day

 | 

`int`

 | 

Day of the month (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Hour of the day (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Minute of the hour (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Second of the minute (0-59).

 |
| 

failover

 | 

`Optional`\[`ScheduleFailover`\]

 | 

The failover strategy for this schedule.

 |

## [](#enumerationconstraint "Copy link to heading")EnumerationConstraint

`EnumerationConstraint`

A Constraint indicating that an expected parameter must be one of a set of values.

Note: This only applies to Core API Parameters. For the Smart Contract Parameters shape equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

The return value of a parameter with this constraint in the Smart Contract ParameterValueTimeseries is of the type str or None.

### [](#constructor_43 "Copy link to heading")Constructor:

`EnumerationConstraint(*, permitted_values)`

Constructs a new EnumerationConstraint object.

  
| name | type | description |
| --- | --- | --- |
| 
permitted\_values

 | 

`List`\[`str`\]

 | 

The list of permitted values for the parameter.

 |

### [](#class_attributes_38 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
permitted\_values

 | 

`List`\[`str`\]

 | 

The list of permitted values for the parameter.

 |

## [](#eventtypesfilter "Copy link to heading")EventTypesFilter

`EventTypesFilter`

A filter for refining the event types to fetch last scheduled event datetimes for.

### [](#constructor_44 "Copy link to heading")Constructor:

`EventTypesFilter(*, event_types)`

  
| name | type | description |
| --- | --- | --- |
| 
event\_types

 | 

`List`\[`str`\]

 | 

A list of `event_types` to retrieve last scheduled event datetimes for

 |

### [](#class_attributes_39 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
event\_types

 | 

`List`\[`str`\]

 | 

A list of `event_types` to retrieve last scheduled event datetimes for

 |

## [](#eventtypesgroup "Copy link to heading")EventTypesGroup

`EventTypesGroup`

A [group of event types](/vault-core/5-9/EN/reference/scheduler#schedule_groups) that defines the scheduling order for events in the group. If any EventTypesGroup is defined in a Smart Contract, a list of [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s must also be defined. Every event type from a group must be defined in the event types list. EventTypesGroups are unique for each account. Events associated with different accounts are **NOT** added to the same group even if the EventTypesGroup names match.

Any events within an EventTypesGroup that are supervised with [flexible supervision](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_overview#flexible_supervision) will no longer be considered a part of that EventTypesGroup. This means that:

-   Supervised events are **not** guaranteed to be executed in the order specified by the original EventTypesGroup. However, unsupervised events are guaranteed to be executed in the specified order.
    
-   Vault skips the original event (defined in the Smart Contract) and the Supervisor Contract event runs instead. Since an account is not aware of whether it is being supervised, the original event will report a success and the next event in the EventTypesGroup will be triggered immediately (regardless of whether the Supervisor Contract event has run).
    

### [](#constructor_45 "Copy link to heading")Constructor:

`EventTypesGroup(*, name, event_types_order)`

Constructs a new EventTypesGroup

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the EventTypesGroup. Names have to be unique within a Smart Contract.

 |
| 

event\_types\_order

 | 

`List`\[`str`\]

 | 

A list of string [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) names that belong to a group. A group consists of at least two [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s. A [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) cannot belong to more than one group. This list defines the order of [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s inside a group. Any [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s grouped together are executed based on the order of this list. Note: in a Supervisor Contract, Event Types are of type [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype).

 |

### [](#class_attributes_40 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the EventTypesGroup. Names have to be unique within a Smart Contract.

 |
| 

event\_types\_order

 | 

`List`\[`str`\]

 | 

A list of string [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) names that belong to a group. A group consists of at least two [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s. A [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) cannot belong to more than one group. This list defines the order of [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s inside a group. Any [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s grouped together are executed based on the order of this list. Note: in a Supervisor Contract, Event Types are of type [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype).

 |

## [](#expectedparameter "Copy link to heading")ExpectedParameter

`ExpectedParameter`

Defines a Parameter which is expected to have been created using the Parameters API.

### [](#constructor_46 "Copy link to heading")Constructor:

`ExpectedParameter(*, id, constraint, triggers_pre_parameter_change_hook, optional, triggers_post_parameter_change_hook)`

Constructs a new ExpectedParameter.

  
| name | type | description |
| --- | --- | --- |
| 
id

 | 

`str`

 | 

The ID of the Parameter.

 |
| 

constraint

 | 

`Optional`\[`Union`\[`AccountConstraint`, `DateTimeConstraint`, `DecimalConstraint`, `EnumerationConstraint`, `StringConstraint`\]\]

 | 

The type and any extra validation that applies to this parameter. If provided, must exactly match the constraint provided when creating this parameter.

 |
| 

triggers\_pre\_parameter\_change\_hook

 | 

`Optional`\[`bool`\]

 | 

Determines whether changes to Account-owned parameter values for this parameter will trigger the `pre_parameter_change_hook`. Defaults to `True`. For more information, see [Behaviour of the pre\_parameter\_change\_hook](/vault-core/5-9/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_pre_parameter_change_hook).

 |
| 

optional

 | 

`Optional`\[`bool`\]

 | 

Whether this Parameter should always have a value. If set to True, then the timeseries returned from [get\_parameter\_timeseries()](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries) for this parameter may have entries set to `None`, and entries in the result of [get\_parameters\_observation()](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation) for this parameter may be `None`. If set to `False`, then REST API requests that would leave this parameter without a value will result in an HTTP 400 status response (exceptions apply, see [ParameterValueTimeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametervaluetimeseries) for details). Defaults to `False`.

 |
| 

triggers\_post\_parameter\_change\_hook

 | 

`Optional`\[`bool`\]

 | 

Determines whether changes to this parameter trigger the `post_parameter_change_hook`. Thought Machine recommends setting this to `True` or `False`. For more information, see [Behaviour of the post\_parameter\_change\_hook](/vault-core/5-9/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_post_parameter_change_hook).

 |

### [](#class_attributes_41 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
id

 | 

`str`

 | 

The ID of the Parameter.

 |
| 

constraint

 | 

`Optional`\[`Union`\[`AccountConstraint`, `DateTimeConstraint`, `DecimalConstraint`, `EnumerationConstraint`, `StringConstraint`\]\]

 | 

The type and any extra validation that applies to this parameter. If provided, must exactly match the constraint provided when creating this parameter.

 |
| 

triggers\_pre\_parameter\_change\_hook

 | 

`Optional`\[`bool`\]

 | 

Determines whether changes to Account-owned parameter values for this parameter will trigger the `pre_parameter_change_hook`. Defaults to `True`. For more information, see [Behaviour of the pre\_parameter\_change\_hook](/vault-core/5-9/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_pre_parameter_change_hook).

 |
| 

optional

 | 

`Optional`\[`bool`\]

 | 

Whether this Parameter should always have a value. If set to True, then the timeseries returned from [get\_parameter\_timeseries()](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries) for this parameter may have entries set to `None`, and entries in the result of [get\_parameters\_observation()](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation) for this parameter may be `None`. If set to `False`, then REST API requests that would leave this parameter without a value will result in an HTTP 400 status response (exceptions apply, see [ParameterValueTimeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametervaluetimeseries) for details). Defaults to `False`.

 |
| 

triggers\_post\_parameter\_change\_hook

 | 

`Optional`\[`bool`\]

 | 

Determines whether changes to this parameter trigger the `post_parameter_change_hook`. Thought Machine recommends setting this to `True` or `False`. For more information, see [Behaviour of the post\_parameter\_change\_hook](/vault-core/5-9/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_post_parameter_change_hook).

 |

## [](#flagsfilter "Copy link to heading")FlagsFilter

`FlagsFilter`

A filter for refining the flags retrieved by a fetcher.

### [](#constructor_47 "Copy link to heading")Constructor:

`FlagsFilter(*, flag_definition_ids)`

  
| name | type | description |
| --- | --- | --- |
| 
flag\_definition\_ids

 | 

`List`\[`str`\]

 | 

A list of flag definition ids to get flags for.

 |

### [](#class_attributes_42 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
flag\_definition\_ids

 | 

`List`\[`str`\]

 | 

A list of flag definition ids to get flags for.

 |

## [](#flagsintervalfetcher "Copy link to heading")FlagsIntervalFetcher

`FlagsIntervalFetcher`

A fetcher for retrieving flags over an interval, inclusive of end time.

### [](#constructor_48 "Copy link to heading")Constructor:

`FlagsIntervalFetcher(*, fetcher_id, start, end, filter)`

Constructs a new FlagsIntervalFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

filter

 | 

`Optional`\[`FlagsFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

### [](#class_attributes_43 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

filter

 | 

`Optional`\[`FlagsFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

## [](#flagsobservation "Copy link to heading")FlagsObservation

`FlagsObservation`

A mapping of flag IDs to their values at a fixed point in time.

### [](#constructor_49 "Copy link to heading")Constructor:

`FlagsObservation(*, flags, value_datetime)`

Constructs a new FlagsObservation object.

  
| name | type | description |
| --- | --- | --- |
| 
flags

 | 

`Union`\[`Dict`\[`str`, `bool`\], `defaultdict`\[`str`, `bool`\]\]

 | 

The flags at the given datetime. This value has type defaultdict if the FlagsObservationFetcher did not provide a FlagsFilter. Otherwise, this value has type dict, containing an entry for each of the flag definition ids specified in the FlagsFilter of the interval fetcher.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the flags are observed. This attribute will be None for a live observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_44 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
flags

 | 

`Union`\[`Dict`\[`str`, `bool`\], `defaultdict`\[`str`, `bool`\]\]

 | 

The flags at the given datetime. This value has type defaultdict if the FlagsObservationFetcher did not provide a FlagsFilter. Otherwise, this value has type dict, containing an entry for each of the flag definition ids specified in the FlagsFilter of the interval fetcher.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The time at which the flags are observed. This attribute will be None for a live observation. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#flagsobservationfetcher "Copy link to heading")FlagsObservationFetcher

`FlagsObservationFetcher`

A fetcher for observing flags at a given moment in time.

### [](#constructor_50 "Copy link to heading")Constructor:

`FlagsObservationFetcher(*, fetcher_id, at, filter)`

Constructs a new FlagsObservationFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the flags will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`FlagsFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

### [](#class_attributes_45 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the flags will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`FlagsFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

## [](#flagtimeseries "Copy link to heading")FlagTimeseries

`FlagTimeseries`

A timeseries for the active status for a given flag definition. If the flag definition does not exist, the timeseries will be empty and .at() will always return False.

### [](#methods_7 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available flag as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime from which to fetch the latest flag. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `bool` The latest flag as of the datetime provided.

`before(*, at_datetime)` Returns the latest available flag as of just before the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the latest flag. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `bool` The latest flag as of just before the datetime provided.

`latest()` Returns the last available flag in the Timeseries.

**Return Value:** `bool` The latest available flag.

`all()` Returns a list of all available flag values across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available flag values and their datetimes.

## [](#flagvaluetimeseries "Copy link to heading")FlagValueTimeseries

`FlagValueTimeseries`

A timeseries for the active status for a given flag definition. If the flag definition does not exist, the timeseries will be empty and .at() will always return False.

### [](#methods_8 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available flag as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime from which to fetch the latest flag. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `bool` The latest flag as of the datetime provided.

`before(*, at_datetime)` Returns the latest available flag as of just before the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the latest flag. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `bool` The latest flag as of just before the datetime provided.

`latest()` Returns the last available flag value in the Timeseries. If the Timeseries is fetched using a `FlagsIntervalFetcher`, the last element in the Timeseries can be before or after the hook `effective_datetime` depending on the Interval `end`. If no Interval `end` is defined, the last known element is returned.

**Return Value:** `bool` The latest available flag.

`all()` Returns a list of all available flag values across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available flag values and their datetimes.

## [](#inboundauthorisation "Copy link to heading")InboundAuthorisation

`InboundAuthorisation`

[Inbound authorisation](/vault-core/5-9/EN/reference/postings#inbound_authorisation_chainable) is a chainable Posting Instruction that authorises incoming funds into the target Account.

### [](#constructor_51 "Copy link to heading")Constructor:

`InboundAuthorisation(*, instruction_details, transaction_code, override_all_restrictions, client_transaction_id, amount, denomination, target_account_id, internal_account_id, internal_account_processing_label, target_account_address, asset, advice)`

Constructs a new InboundAuthorisation

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |

### [](#class_attributes_46 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_9 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#inboundhardsettlement "Copy link to heading")InboundHardSettlement

`InboundHardSettlement`

[Inbound hard settlement](/vault-core/5-9/EN/reference/postings#inbound_hard_settlement_standalone) is a non-chainable Posting Instruction that authorises and settles incoming funds into a target Account.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_52 "Copy link to heading")Constructor:

`InboundHardSettlement(*, instruction_details, transaction_code, override_all_restrictions, amount, denomination, target_account_id, internal_account_id, internal_account_processing_label, target_account_address, asset, advice)`

Constructs a new InboundHardSettlement

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |

### [](#class_attributes_47 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_10 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#lastscheduledeventdatetimesobservation "Copy link to heading")LastScheduledEventDateTimesObservation

`LastScheduledEventDateTimesObservation`

A mapping of event types to last scheduled event datetime at a fixed point in time.

info

Existing Customer Accounts cannot be converted to a Smart Contract with [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher) if their current Smart Contract is not already using it, due to data access limitations. Future Vault Core improvements aim to address these limitations.

### [](#constructor_53 "Copy link to heading")Constructor:

`LastScheduledEventDateTimesObservation(*, last_scheduled_event_datetimes, value_datetime)`

  
| name | type | description |
| --- | --- | --- |
| 
last\_scheduled\_event\_datetimes

 | 

`dict`\[`str`, `Optional`\[`datetime`\]\]

 | 

Map of event type to last scheduled event datetime. If the `event_type` has never executed successfully, the mapped value is `None`.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the last scheduled event datetimes are observed. This is a timezone-aware UTC datetime using the ZoneInfo class. This attribute will be None for a live observation.

 |

### [](#class_attributes_48 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
last\_scheduled\_event\_datetimes

 | 

`dict`\[`str`, `Optional`\[`datetime`\]\]

 | 

Map of event type to last scheduled event datetime. If the `event_type` has never executed successfully, the mapped value is `None`.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the last scheduled event datetimes are observed. This is a timezone-aware UTC datetime using the ZoneInfo class. This attribute will be None for a live observation.

 |

## [](#lastscheduledeventdatetimesobservationfetcher "Copy link to heading")LastScheduledEventDateTimesObservationFetcher

`LastScheduledEventDateTimesObservationFetcher`

A fetcher for observing last scheduled event date times at a given moment in time.

info

Existing Customer Accounts cannot be converted to a Smart Contract with [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher) if their current Smart Contract is not already using it, due to data access limitations. Future Vault Core improvements aim to address these limitations.

### [](#constructor_54 "Copy link to heading")Constructor:

`LastScheduledEventDateTimesObservationFetcher(*, fetcher_id, at, filter)`

Constructs a new LastScheduledEventDateTimesObservationFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`DefinedDateTime`

 | 

The time at which the last scheduled event date time will be observed. `DefinedDateTime.INTERVAL_START` is **not** allowed.

 |
| 

filter

 | 

`EventTypesFilter`

 | 

A filter to refine the results returned by the fetcher.

 |

### [](#class_attributes_49 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher.

 |
| 

at

 | 

`DefinedDateTime`

 | 

The time at which the last scheduled event date time will be observed. `DefinedDateTime.INTERVAL_START` is **not** allowed.

 |
| 

filter

 | 

`EventTypesFilter`

 | 

A filter to refine the results returned by the fetcher.

 |

## [](#logger "Copy link to heading")Logger

`Logger`

Logger is a singleton that can be used to add debug logging. The Logger output is exposed in Contract Simulation in the `hook_execution_logs` field of the [SimulateContracts](/vault-core/5-9/EN/api/core_api#Contract) response, and also in unit testing, using the [Contracts SDK](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk).

### [](#methods_11 "Copy link to heading")Methods:

`debug(*, message)` Logs a message at debug level

  
| name | type | description |
| --- | --- | --- |
| 
message

 | 

`str`

 | 

The message to log

 |

**Examples**

A simple example

`instance()` A class method to access the singleton Logger instance.

**Examples**

A simple example

## [](#next "Copy link to heading")Next

`Next`

Alter the datetime by shifting to the next instance of the given parameter. This object must include the `day` parameter, but all others are optional.

### [](#constructor_55 "Copy link to heading")Constructor:

`Next(*, month, day, hour, minute, second)`

  
| name | type | description |
| --- | --- | --- |
| 
month

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given month (1-12).

 |
| 

day

 | 

`int`

 | 

Shift datetime to the next given day (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given hour (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given minute (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given second (0-59).

 |

### [](#class_attributes_50 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
month

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given month (1-12).

 |
| 

day

 | 

`int`

 | 

Shift datetime to the next given day (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given hour (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given minute (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the next given second (0-59).

 |

## [](#numbershape "Copy link to heading")NumberShape

`NumberShape`

A Parameter shape defining a floating-point number.

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

Metadata `max_value`, `min_value` and `step` can be associated with the parameter, but not all metadata is validated by Vault. Only `GLOBAL` and `INSTANCE` level parameter fields `max_value` and `min_value` are validated.

Parameter value type: `Union[Decimal, int]`.

### [](#constructor_56 "Copy link to heading")Constructor:

`NumberShape(*, min_value, max_value, step)`

Constructs a new NumberShape.

  
| name | type | description |
| --- | --- | --- |
| 
min\_value

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the minimum allowed numerical value.

 |
| 

max\_value

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the maximum allowed numerical value.

 |
| 

step

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the step in allowed values.

 |

### [](#class_attributes_51 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
min\_value

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the minimum allowed numerical value.

 |
| 

max\_value

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the maximum allowed numerical value.

 |
| 

step

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

Metadata describing the step in allowed values.

 |

## [](#optionalshape "Copy link to heading")OptionalShape

`OptionalShape`

Specifies that the enclosed Shape is optional.

Note: This only applies to Smart Contract Parameters.

Parameter value type: `OptionalValue`.

### [](#constructor_57 "Copy link to heading")Constructor:

`OptionalShape(*, shape)`

Constructs a new OptionalShape.

  
| name | type | description |
| --- | --- | --- |
| 
shape

 | 

`Union`\[`AccountIdShape`, `DateShape`, `DenominationShape`, `NumberShape`, `StringShape`, `UnionShape`\]

 | 

The optional inner Shape.

 |

### [](#class_attributes_52 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
shape

 | 

`Union`\[`AccountIdShape`, `DateShape`, `DenominationShape`, `NumberShape`, `StringShape`, `UnionShape`\]

 | 

The optional inner Shape.

 |

## [](#optionalvalue "Copy link to heading")OptionalValue

`OptionalValue`

Specifies an optional Parameter value

### [](#constructor_58 "Copy link to heading")Constructor:

`OptionalValue(*, value)`

  
| name | type | description |
| --- | --- | --- |
| 
value

 | 

`Optional`\[`Union`\[`Decimal`, `str`, `datetime`, `UnionItemValue`, `int`\]\]

 | 

The optional parameter value. If using a `datetime` it must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_53 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
value

 | 

`Any`

 | 

The value, if specified.

 |

### [](#methods_12 "Copy link to heading")Methods:

`is_set()` Returns True if the value is set, otherwise False.

**Return Value:** `bool` True if the value is set, otherwise False.

## [](#outboundauthorisation "Copy link to heading")OutboundAuthorisation

`OutboundAuthorisation`

[Outbound authorisation](/vault-core/5-9/EN/reference/postings#outbound_authorisation_chainable) is a chainable Posting Instruction that creates an outgoing funds hold (ring-fence the funds) on the target Account. To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_59 "Copy link to heading")Constructor:

`OutboundAuthorisation(*, instruction_details, transaction_code, override_all_restrictions, client_transaction_id, amount, denomination, target_account_id, internal_account_id, internal_account_processing_label, target_account_address, asset, advice)`

Constructs a new OutboundAuthorisation

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |

### [](#class_attributes_54 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_13 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#outboundhardsettlement "Copy link to heading")OutboundHardSettlement

`OutboundHardSettlement`

[Outbound hard settlement](/vault-core/5-9/EN/reference/postings#outbound_hard_settlement_standalone) is a non-chainable Posting Instruction that authorises and settles outgoing funds from a target Account.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_60 "Copy link to heading")Constructor:

`OutboundHardSettlement(*, instruction_details, transaction_code, override_all_restrictions, amount, denomination, target_account_id, internal_account_id, internal_account_processing_label, target_account_address, asset, advice)`

Constructs a new OutboundHardSettlement

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |

### [](#class_attributes_55 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |
| 

advice

 | 

`Optional`\[`bool`\]

 | 

This indicates that the Contract should skip balance checks for this Posting Instruction. For the advice flag to be set in the Posting Instruction object, it must be supported in the specific type Posting Instruction object in the Core API. This defaults to false if supported by the PostingInstructionType but not supplied.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_14 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#override "Copy link to heading")Override

`Override`

Override any part of a datetime in order to define an observation or interval parameter. This can be used in conjunction with [Shift](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#shift) inside the [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime) object. If any time attributes are overridden then the others will default to 0, otherwise the time will not be modified at all. Be aware that it is not possible to validate a date at parse time, in the event of an invalid date being reached (e.g. overriding day to 31 when the month is 2) an `InvalidSmartContractError` will be raised. Datetime overrides provided here are parsed in UTC.

### [](#constructor_61 "Copy link to heading")Constructor:

`Override(*, year, month, day, hour, minute, second)`

  
| name | type | description |
| --- | --- | --- |
| 
year

 | 

`Optional`\[`int`\]

 | 

Override the year value (4-digit year).

 |
| 

month

 | 

`Optional`\[`int`\]

 | 

Override the month value (1-12).

 |
| 

day

 | 

`Optional`\[`int`\]

 | 

Override the day value (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Override the hour value (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Override the minute value (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Override the second value (0-59).

 |

### [](#class_attributes_56 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
year

 | 

`Optional`\[`int`\]

 | 

Override the year value (4-digit year).

 |
| 

month

 | 

`Optional`\[`int`\]

 | 

Override the month value (1-12).

 |
| 

day

 | 

`Optional`\[`int`\]

 | 

Override the day value (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Override the hour value (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Override the minute value (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Override the second value (0-59).

 |

## [](#parameter "Copy link to heading")Parameter

`Parameter`

A contract parameter.

### [](#constructor_62 "Copy link to heading")Constructor:

`Parameter(*, name, shape, level, derived, display_name, description, default_value, update_permission)`

Constructs a new Parameter.

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Parameter. This is how the Parameter is referred to programmatically by the Smart Contract when it fetches the Parameter value from the ParameterTimeseries.

 |
| 

shape

 | 

`Union`\[`AccountIdShape`, `DateShape`, `DenominationShape`, `NumberShape`, `OptionalShape`, `StringShape`, `UnionShape`\]

 | 

The shape of the parameter.

 |
| 

level

 | 

`ParameterLevel`

 | 

The level of the Parameter.

 |
| 

derived

 | 

`Optional`\[`bool`\]

 | 

Whether this parameter is derived or not. Only applicable to INSTANCE level Parameter objects.

 |
| 

display\_name

 | 

`Optional`\[`str`\]

 | 

The display name of the Parameter. This may be used in a front-end user interface.

 |
| 

description

 | 

`Optional`\[`str`\]

 | 

The description of the Parameter. This may be used in a front-end user interface to show a user the meaning of the Parameter.

 |
| 

default\_value

 | 

`Optional`\[`Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`\]\]

 | 

The default value of the Parameter. This is only applicable to INSTANCE level Parameters, and will only be used if an Account Migration converts an Account to a Product Version that introduces this Parameter. It will not be used as a default if an Account is created on a Product Version which uses this Parameter.

 |
| 

update\_permission

 | 

`Optional`\[`ParameterUpdatePermission`\]

 | 

Whether the user is allowed to update the Parameter or not. Must be provided for INSTANCE level Parameter objects. Is not supported for DERIVED/TEMPLATE level parameters.

 |

### [](#class_attributes_57 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Parameter. This is how the Parameter is referred to programmatically by the Smart Contract when it fetches the Parameter value from the ParameterTimeseries.

 |
| 

shape

 | 

`Union`\[`AccountIdShape`, `DateShape`, `DenominationShape`, `NumberShape`, `OptionalShape`, `StringShape`, `UnionShape`\]

 | 

The shape of the parameter.

 |
| 

level

 | 

`ParameterLevel`

 | 

The level of the Parameter.

 |
| 

derived

 | 

`Optional`\[`bool`\]

 | 

Whether this parameter is derived or not. Only applicable to INSTANCE level Parameter objects.

 |
| 

display\_name

 | 

`Optional`\[`str`\]

 | 

The display name of the Parameter. This may be used in a front-end user interface.

 |
| 

description

 | 

`Optional`\[`str`\]

 | 

The description of the Parameter. This may be used in a front-end user interface to show a user the meaning of the Parameter.

 |
| 

default\_value

 | 

`Optional`\[`Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`\]\]

 | 

The default value of the Parameter. This is only applicable to INSTANCE level Parameters, and will only be used if an Account Migration converts an Account to a Product Version that introduces this Parameter. It will not be used as a default if an Account is created on a Product Version which uses this Parameter.

 |
| 

update\_permission

 | 

`Optional`\[`ParameterUpdatePermission`\]

 | 

Whether the user is allowed to update the Parameter or not. Must be provided for INSTANCE level Parameter objects. Is not supported for DERIVED/TEMPLATE level parameters.

 |

## [](#parametersfilter "Copy link to heading")ParametersFilter

`ParametersFilter`

A filter for refining the parameters retrieved by a fetcher. Each ID here must correspond to the ID of an ExpectedParameter defined in the contract metadata.

### [](#constructor_63 "Copy link to heading")Constructor:

`ParametersFilter(*, parameter_ids)`

  
| name | type | description |
| --- | --- | --- |
| 
parameter\_ids

 | 

`List`\[`str`\]

 | 

A list of parameter IDs to fetch

 |

### [](#class_attributes_58 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
parameter\_ids

 | 

`List`\[`str`\]

 | 

A list of parameter IDs to fetch

 |

## [](#parametersintervalfetcher "Copy link to heading")ParametersIntervalFetcher

`ParametersIntervalFetcher`

Can only be used for `ExpectedParameters`. A fetcher for retrieving parameter values over an interval, inclusive of end time. In the `activation_hook`, if any expected parameter values are provided in the account creation request, these values will also be included in the parameter timeseries of the fetcher with `at_datetime` equal to the hook `effective_datetime`.

### [](#constructor_64 "Copy link to heading")Constructor:

`ParametersIntervalFetcher(*, fetcher_id, start, end, filter)`

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher. The fetcher ID must not start with an underscore.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

filter

 | 

`Optional`\[`ParametersFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

### [](#class_attributes_59 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher. The fetcher ID must not start with an underscore.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: if `start` is equal to `end`, an error will be raised at parse time. In addition, `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |
| 

filter

 | 

`Optional`\[`ParametersFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

## [](#parametersobservation "Copy link to heading")ParametersObservation

`ParametersObservation`

A mapping of parameter IDs to their values at a fixed point in time.

### [](#constructor_65 "Copy link to heading")Constructor:

`ParametersObservation(*, parameters, value_datetime)`

  
| name | type | description |
| --- | --- | --- |
| 
parameters

 | 

`Dict`\[`str`, `Union`\[`datetime`, `Decimal`, `str`, `None`\]\]

 | 

Map of parameter ID to value.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the parameters are observed. This is a timezone-aware UTC datetime using the ZoneInfo class. This attribute will be None for a live observation.

 |

### [](#class_attributes_60 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
parameters

 | 

`Dict`\[`str`, `Union`\[`datetime`, `Decimal`, `str`, `None`\]\]

 | 

Map of parameter ID to value.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime at which the parameters are observed. This is a timezone-aware UTC datetime using the ZoneInfo class. This attribute will be None for a live observation.

 |

## [](#parametersobservationfetcher "Copy link to heading")ParametersObservationFetcher

`ParametersObservationFetcher`

Can only be used for `ExpectedParameters`. A fetcher for observing parameter values at a given moment in time. In the `activation_hook`, if any expected parameter values are provided in the account creation request and if the observation time is equal to or after the hook’s effective time, these values will override any other values in the observation.

### [](#constructor_66 "Copy link to heading")Constructor:

`ParametersObservationFetcher(*, fetcher_id, at, filter)`

Constructs a new ParametersObservationFetcher object.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. The fetcher ID must not start with an underscore.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the parameters will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`ParametersFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

### [](#class_attributes_61 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. The fetcher ID must not start with an underscore.

 |
| 

at

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The time at which the parameters will be observed. If the value is of type `DefinedDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed. If the value is of type `RelativeDateTime`, `DefinedDateTime.INTERVAL_START` is **not** allowed as the `origin`.

 |
| 

filter

 | 

`Optional`\[`ParametersFilter`\]

 | 

An optional filter to refine the results returned by the fetcher.

 |

## [](#parametertimeseries "Copy link to heading")ParameterTimeseries

`ParameterTimeseries`

A timeseries of Parameter objects.

### [](#methods_15 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available Parameter value as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime as of which to fetch the latest Parameter value. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`, `None`\] The latest Parameter value as of the datetime provided.

`before(*, at_datetime)` Returns the latest available Parameter value as of immediately before the datetime provided.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the latest Parameter value. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`, `None`\] The latest Parameter value as of immediately before the datetime provided.

`latest()` Returns the last available Parameter value in the Timeseries.

**Return Value:** `Union`\[`Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`, `None`\] The latest available Parameter value.

`all()` Returns a list of all available Parameter values across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available Balance object values and the datetime for each.

## [](#parametervaluetimeseries "Copy link to heading")ParameterValueTimeseries

`ParameterValueTimeseries`

A timeseries of Parameter values. For optional parameters this may return `None` at any point in time. For non-optional parameters, Vault will prevent changes that would result in `None`, with the following exceptions:

-   Setting the `effective_to_timestamp` of an inherited Parameter Value
    
-   Cancellation of an inherited Parameter Value
    
-   Conversion from a Smart Contract where the parameter was optional, and a future or past time has no value (the change will only be rejected if there is no value at the time the conversion is done)
    

### [](#methods_16 "Copy link to heading")Methods:

`at(*, at_datetime)` Returns the latest available Parameter value as of the given datetime.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime as of which to fetch the latest Parameter value. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Union`\[`datetime`, `Decimal`, `str`, `None`\] The latest Parameter value as of the datetime provided.

`before(*, at_datetime)` Returns the latest available Parameter value as of immediately before the datetime provided.

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime just before which to fetch the latest Parameter value. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

**Return Value:** `Union`\[`datetime`, `Decimal`, `str`, `None`\] The latest Parameter value as of immediately before the datetime provided.

`latest()` Returns the last available Parameter value in the Timeseries. If the Timeseries is fetched using a `ParametersIntervalFetcher`, the last element in the Timeseries can be before or after the hook `effective_datetime` depending on the Interval `end`. If no Interval `end` is defined, the last known element is returned.

**Return Value:** `Union`\[`datetime`, `Decimal`, `str`, `None`\] The latest available Parameter value.

`all()` Returns a list of all available Parameter values across time.

**Return Value:** `List`\[`TimeseriesItem`\] All available Parameter values and their datetimes. This function will always return an entry for the start date of the Interval. If there is no Parameter value defined at the start of the Interval, the value will be set to None.

## [](#period "Copy link to heading")Period

`Period`

The fixed time between balance observations in discrete interval fetchers. Exactly one of `days` or `months` must be specified.

**Examples:**

-   `Period(days=2)` indicates that the observation points are on every other day.
    
-   `Period(months=3, date_failover=DateFailover.FIRST_VALID_DAY_AFTER)` indicates that the observation points are every 3 months on the same calendar day as fetcher `start`. If the next observation point falls outside the particular month, the observation point will be the first valid day after the missing day in the month.
    

### [](#constructor_67 "Copy link to heading")Constructor:

`Period(*, days, months, date_failover)`

  
| name | type | description |
| --- | --- | --- |
| 
days

 | 

`Optional`\[`int`\]

 | 

Exactly one of `days` or `months` should be specified. The unit of the sampling period measured in days, as a positive integer.

 |
| 

months

 | 

`Optional`\[`int`\]

 | 

Exactly one of `days` or `months` should be specified. The unit of the sampling period measured in months, as a positive integer. The discrete interval fetcher will fetch the data on a monthly basis on the same calendar day as the fetcher `start`.

 |
| 

date\_failover

 | 

`Optional`\[`DateFailover`\]

 | 

The [DateFailover](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datefailover) to specify the failover strategy for the monthly sampling period when the calendar day falls outside the particular month. If it is not set, it defaults to `DateFailover.FIRST_VALID_DAY_BEFORE`.

 |

### [](#class_attributes_62 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
days

 | 

`Optional`\[`int`\]

 | 

Exactly one of `days` or `months` should be specified. The unit of the sampling period measured in days, as a positive integer.

 |
| 

months

 | 

`Optional`\[`int`\]

 | 

Exactly one of `days` or `months` should be specified. The unit of the sampling period measured in months, as a positive integer. The discrete interval fetcher will fetch the data on a monthly basis on the same calendar day as the fetcher `start`.

 |
| 

date\_failover

 | 

`Optional`\[`DateFailover`\]

 | 

The [DateFailover](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#datefailover) to specify the failover strategy for the monthly sampling period when the calendar day falls outside the particular month. If it is not set, it defaults to `DateFailover.FIRST_VALID_DAY_BEFORE`.

 |

## [](#plannotificationdirective "Copy link to heading")PlanNotificationDirective

`PlanNotificationDirective`

### [](#constructor_68 "Copy link to heading")Constructor:

`PlanNotificationDirective(*, notification_type, notification_details)`

A Hook Directive that instructs the publication of a plan notification.

  
| name | type | description |
| --- | --- | --- |
| 
notification\_type

 | 

`str`

 | 

The `type` of notification. Used to identify how a notification should be processed.

 |
| 

notification\_details

 | 

`Dict`\[`str`, `str`\]

 | 

The information (key-value pairs of data) to be published with the notification.

 |

### [](#class_attributes_63 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
notification\_type

 | 

`str`

 | 

The `type` of notification. Used to identify how a notification should be processed.

 |
| 

notification\_details

 | 

`Dict`\[`str`, `str`\]

 | 

The information (key-value pairs of data) to be published with the notification.

 |

## [](#posting "Copy link to heading")Posting

`Posting`

Posting ledger entry that represents a financial movement that resulted from each different Posting Instruction type intent.

### [](#constructor_69 "Copy link to heading")Constructor:

`Posting(*, credit, amount, denomination, account_id, internal_account_processing_label, account_address, asset, phase)`

Constructs a new Posting

  
| name | type | description |
| --- | --- | --- |
| 
credit

 | 

`bool`

 | 

Represents the direction of the financial movement.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

Represents the value of the financial movement.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the Posting.

 |
| 

account\_id

 | 

`Optional`\[`str`\]

 | 

The Account ID that is targeted by the financial movement. When creating a `Posting` within a Contract, this should only be populated if `internal_account_processing_label` is not provided.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `account_id` is already resolved by Vault and set on the instruction.

 |
| 

account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the financial movement. It is equivalent to the `target_account_address` in the Posting Instruction types, except for `CustomInstruction` and `Transfer`.

 |
| 

asset

 | 

`str`

 | 

Represents the asset type of the financial movement.

 |
| 

phase

 | 

`Phase`

 | 

Represents the phase of the financial movement.

 |

### [](#class_attributes_64 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
credit

 | 

`bool`

 | 

Represents the direction of the financial movement.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

Represents the value of the financial movement.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the Posting.

 |
| 

account\_id

 | 

`Optional`\[`str`\]

 | 

The Account ID that is targeted by the financial movement. When creating a `Posting` within a Contract, this should only be populated if `internal_account_processing_label` is not provided.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `account_id` is already resolved by Vault and set on the instruction.

 |
| 

account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the financial movement. It is equivalent to the `target_account_address` in the Posting Instruction types, except for `CustomInstruction` and `Transfer`.

 |
| 

asset

 | 

`str`

 | 

Represents the asset type of the financial movement.

 |
| 

phase

 | 

`Phase`

 | 

Represents the phase of the financial movement.

 |

## [](#postinginstructionenrichment "Copy link to heading")PostingInstructionEnrichment

`PostingInstructionEnrichment`

`PostingInstructionEnrichment` objects describe the key/value pairs that make up the enrichment of a Posting Instruction. Posting Instructions that will be accepted may be enriched with up to 1200 bytes of ASCII key/value pairs in pre-posting. The latency for postings with larger amounts of enriched bytes will be higher than ones with smaller enrichments.

### [](#constructor_70 "Copy link to heading")Constructor:

`PostingInstructionEnrichment(*, details)`

Constructs a new `PostingInstructionEnrichment` object

  
| name | type | description |
| --- | --- | --- |
| 
details

 | 

`dict`\[`str`, `str`\]

 | 

A dictionary of key/value pairs that will be used to enrich a Posting Instruction. Up to 1200 bytes of ASCII characters are allowed.

 |

### [](#class_attributes_65 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
details

 | 

`dict`\[`str`, `str`\]

 | 

A dictionary of key/value pairs that will be used to enrich a Posting Instruction. Up to 1200 bytes of ASCII characters are allowed.

 |

## [](#postinginstructionsdirective "Copy link to heading")PostingInstructionsDirective

`PostingInstructionsDirective`

A hook directive that instructs a list of posting instructions. Currently only [CustomInstruction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#custominstruction)s are supported as hook directives.

### [](#constructor_71 "Copy link to heading")Constructor:

`PostingInstructionsDirective(*, posting_instructions, client_batch_id, value_datetime, batch_details, booking_datetime, non_blocking_rejection_reasons)`

Constructs a new PostingInstructionsDirective

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions

 | 

`List`\[`CustomInstruction`\]

 | 

A list of posting instructions that will be atomically accepted or rejected. Each `PostingInstructionsDirective` can have up to 64 `CustomInstruction`s.

 |
| 

client\_batch\_id

 | 

`Optional`\[`str`\]

 | 

An ID that can be used as a correlation ID across different posting instruction batches. If not provided, defaults to a unique auto-generated UUID.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Deprecated as of Vault Core 5.5, and will be removed no earlier than Vault Core 7.0. Specifies the datetime at which all committed postings of all posting instructions in this directive will affect balances. For most cases, this should not be set and will default to the generated `insertion_datetime`. Must be a timezone-aware UTC datetime using the ZoneInfo class. `value_datetime` should either be set on the `CustomInstruction` level (recommended) or on the `PostingInstructionsDirective` level (deprecated). `value_datetime` set on the `PostingInstructionsDirective` level will override any values set on `CustomInstruction` level. When using `CustomInstruction` level `value_datetime`, posting instructions can be backdated or future-dated. When using `PostingInstructionsDirective` level `value_datetime`, posting instructions can only be backdated; they cannot be future-dated. If both `value_datetime` and `booking_datetime` are set, they must be set on the same level.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of posting instructions that get atomically accepted or rejected.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Deprecated as of Vault Core 5.5., and will be removed no earlier than Vault Core 7.0. Specifies the datetime against which all committed postings of all posting instructions in this directive will be booked. `booking_datetime` should either be set on the `CustomInstruction` (recommended) or on the `PostingInstructionsDirective` level (deprecated). `booking_datetime` set on the `PostingInstructionsDirective` level will override any values set on `CustomInstruction` level. If both `booking_datetime` and `value_datetime` are set, they must be set on the same level. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

non\_blocking\_rejection\_reasons

 | 

`Set`\[`PostingInstructionRejectionReason`\]

 | 

If this field is returned with a non-empty value for any hook other than `scheduled_event_hook`, this raises an `InvalidSmartContractError`. If you experience a posting rejection with a reason within this set of `PostingInstructionRejectionReason`s while this `PostingInstructionsDirective` is instructed, it will not cause the associated schedule job to fail, will not block subsequent schedule jobs from being scheduled and other directives returned from this hook will be committed.

 |

### [](#class_attributes_66 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions

 | 

`List`\[`CustomInstruction`\]

 | 

A list of posting instructions that will be atomically accepted or rejected. Each `PostingInstructionsDirective` can have up to 64 `CustomInstruction`s.

 |
| 

client\_batch\_id

 | 

`Optional`\[`str`\]

 | 

An ID that can be used as a correlation ID across different posting instruction batches. If not provided, defaults to a unique auto-generated UUID.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Deprecated as of Vault Core 5.5, and will be removed no earlier than Vault Core 7.0. Specifies the datetime at which all committed postings of all posting instructions in this directive will affect balances. For most cases, this should not be set and will default to the generated `insertion_datetime`. Must be a timezone-aware UTC datetime using the ZoneInfo class. `value_datetime` should either be set on the `CustomInstruction` level (recommended) or on the `PostingInstructionsDirective` level (deprecated). `value_datetime` set on the `PostingInstructionsDirective` level will override any values set on `CustomInstruction` level. When using `CustomInstruction` level `value_datetime`, posting instructions can be backdated or future-dated. When using `PostingInstructionsDirective` level `value_datetime`, posting instructions can only be backdated; they cannot be future-dated. If both `value_datetime` and `booking_datetime` are set, they must be set on the same level.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of posting instructions that get atomically accepted or rejected.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Deprecated as of Vault Core 5.5., and will be removed no earlier than Vault Core 7.0. Specifies the datetime against which all committed postings of all posting instructions in this directive will be booked. `booking_datetime` should either be set on the `CustomInstruction` (recommended) or on the `PostingInstructionsDirective` level (deprecated). `booking_datetime` set on the `PostingInstructionsDirective` level will override any values set on `CustomInstruction` level. If both `booking_datetime` and `value_datetime` are set, they must be set on the same level. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

non\_blocking\_rejection\_reasons

 | 

`Set`\[`PostingInstructionRejectionReason`\]

 | 

If this field is returned with a non-empty value for any hook other than `scheduled_event_hook`, this raises an `InvalidSmartContractError`. If you experience a posting rejection with a reason within this set of `PostingInstructionRejectionReason`s while this `PostingInstructionsDirective` is instructed, it will not cause the associated schedule job to fail, will not block subsequent schedule jobs from being scheduled and other directives returned from this hook will be committed.

 |

## [](#postingsintervalfetcher "Copy link to heading")PostingsIntervalFetcher

`PostingsIntervalFetcher`

A fetcher for retrieving postings data within a given interval window, inclusive of end time. Note that a `PostingIntervalFetcher` does not fetch postings that are not committed yet.

### [](#constructor_72 "Copy link to heading")Constructor:

`PostingsIntervalFetcher(*, fetcher_id, start, end)`

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |

### [](#class_attributes_67 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The ID for this fetcher. This can be used in the [@fetch\_account\_data decorator](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) to request the data window defined in this fetcher.

 |
| 

start

 | 

`Union`\[`DefinedDateTime`, `RelativeDateTime`\]

 | 

The start time of the interval window. This can either be a [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) or a [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime). The values `DefinedDateTime.INTERVAL_START` and `DefinedDateTime.LIVE` are **not** allowed. If the value is of type `RelativeDateTime`, its origin must be set to `DefinedDateTime.EFFECTIVE_DATETIME`.

 |
| 

end

 | 

`Optional`\[`Union`\[`DefinedDateTime`, `RelativeDateTime`\]\]

 | 

The end time of the interval window. Can either be defined relative to the effective time or the interval start time (using [RelativeDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#relativedatetime)), or as a time defined in Vault Core (using [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime)). If no end datetime is set or if it is set to `None`, this will default to [DefinedDateTime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime).`LIVE`, which will fetch data up to the hook’s execution datetime. The value `DefinedDateTime.INTERVAL_START` is **not** allowed. **Note**: `start` and `end` timestamps are evaluated at the execution time using the `effective_datetime` of the hook. If `start` is greater than `end`, an execution error is returned.

 |

## [](#postparameterchangeadjustmenthookarguments "Copy link to heading")PostParameterChangeAdjustmentHookArguments

`PostParameterChangeAdjustmentHookArguments`

The hook arguments of `post_parameter_change_adjustment_hook`.

### [](#constructor_73 "Copy link to heading")Constructor:

`PostParameterChangeAdjustmentHookArguments(*, effective_datetime, old_parameter_values, updated_parameter_values)`

Constructs a new PostParameterChangeAdjustmentHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. This is the time at which the new value(s) became effective. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

old\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]

 | 

The old parameter values prior to the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]

 | 

The updated parameter values after the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |

### [](#class_attributes_68 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. This is the time at which the new value(s) became effective. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

old\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]

 | 

The old parameter values prior to the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]

 | 

The updated parameter values after the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |

## [](#postparameterchangeadjustmenthookresult "Copy link to heading")PostParameterChangeAdjustmentHookResult

`PostParameterChangeAdjustmentHookResult`

The hook result of the `post_parameter_change_adjustment_hook`.

### [](#constructor_74 "Copy link to heading")Constructor:

`PostParameterChangeAdjustmentHookResult(*, posting_instructions_directives)`

Constructs a new PostParameterChangeAdjustmentHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

### [](#class_attributes_69 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

## [](#postparameterchangehookarguments "Copy link to heading")PostParameterChangeHookArguments

`PostParameterChangeHookArguments`

The hook arguments of `post_parameter_change_hook`.

### [](#constructor_75 "Copy link to heading")Constructor:

`PostParameterChangeHookArguments(*, effective_datetime, old_parameter_values, updated_parameter_values)`

Constructs a new PostParameterChangeHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. This is the time at which the new value(s) became effective. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

old\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The old parameter values prior to the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The updated parameter values after the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |

### [](#class_attributes_70 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. This is the time at which the new value(s) became effective. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

old\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The old parameter values prior to the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The updated parameter values after the change. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value and contains only those parameters that have changed. To access the value of any other parameter, you must fetch the Vault data using hook data requirements and use the relevant Vault methods.

 |

## [](#postparameterchangehookresult "Copy link to heading")PostParameterChangeHookResult

`PostParameterChangeHookResult`

The hook result of the `post_parameter_change_hook`.

### [](#constructor_76 "Copy link to heading")Constructor:

`PostParameterChangeHookResult(*, account_notification_directives, posting_instructions_directives, update_account_event_type_directives)`

Constructs a new PostParameterChangeHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

### [](#class_attributes_71 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

## [](#postpostingadjustmenthookarguments "Copy link to heading")PostPostingAdjustmentHookArguments

`PostPostingAdjustmentHookArguments`

The hook arguments of `post_posting_adjustment_hook`.

### [](#constructor_77 "Copy link to heading")Constructor:

`PostPostingAdjustmentHookArguments(*, effective_datetime, posting_instructions, client_transactions)`

Constructs a new PostPostingAdjustmentHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the value timestamp of the posting instruction.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The list of posting instructions that have been atomically committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions that have been committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), because they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

### [](#class_attributes_72 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the value timestamp of the posting instruction.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The list of posting instructions that have been atomically committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions that have been committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), because they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

## [](#postpostingadjustmenthookresult "Copy link to heading")PostPostingAdjustmentHookResult

`PostPostingAdjustmentHookResult`

The hook result of the `post_posting_adjustment_hook`.

### [](#constructor_78 "Copy link to heading")Constructor:

`PostPostingAdjustmentHookResult(*, posting_instructions_directives)`

Constructs a new PostPostingAdjustmentHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

### [](#class_attributes_73 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

## [](#postpostinghookarguments "Copy link to heading")PostPostingHookArguments

`PostPostingHookArguments`

The hook arguments of `post_posting_hook`.

### [](#constructor_79 "Copy link to heading")Constructor:

`PostPostingHookArguments(*, effective_datetime, posting_instructions, client_transactions)`

Constructs a new PostPostingHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the `value_timestamp` of the Posting Instructions, if set at the `posting_instruction_batch` level within the [Postings API](/vault-core/5-9/EN/api/postings_api) request. Otherwise, it is the `insertion_timestamp` of the Posting Instructions.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The list of posting instructions that have just been atomically committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions that have just been committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), because they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

### [](#class_attributes_74 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the `value_timestamp` of the Posting Instructions, if set at the `posting_instruction_batch` level within the [Postings API](/vault-core/5-9/EN/api/postings_api) request. Otherwise, it is the `insertion_timestamp` of the Posting Instructions.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The list of posting instructions that have just been atomically committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions that have just been committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), because they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

## [](#postpostinghookresult "Copy link to heading")PostPostingHookResult

`PostPostingHookResult`

The hook result of the `post_posting_hook`.

### [](#constructor_80 "Copy link to heading")Constructor:

`PostPostingHookResult(*, account_notification_directives, posting_instructions_directives, update_account_event_type_directives)`

Constructs a new PostPostingHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

### [](#class_attributes_75 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

## [](#preparameterchangehookarguments "Copy link to heading")PreParameterChangeHookArguments

`PreParameterChangeHookArguments`

The hook arguments of `pre_parameter_change_hook`.

### [](#constructor_81 "Copy link to heading")Constructor:

`PreParameterChangeHookArguments(*, effective_datetime, updated_parameter_values, effective_in, is_cancellation)`

Constructs a new PreParameterChangeHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. The values' effective time will be within 5 seconds of this, or the same if future-dating. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The proposed parameter value updates. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value, which may be None for an Optional `Expected` parameter. These values are pending and have not yet been committed. When the `is_cancellation` argument is `True`, the map contains the new value that will take effect after the parameter value is cancelled, if the cancellation is not rejected by the hook.

 |
| 

effective\_in

 | 

`Timeline`

 | 

Defines when the parameter value update is effective. For future-dated parameter value updates and cancellations, this argument is set to `Timeline.FUTURE`. When the update is effective in the future, the data requirements and data fetchers are ignored and any calls to the Vault API functions to access Vault data will raise an `InvalidSmartContractError`. Defaults to `Timeline.PRESENT`.

 |
| 

is\_cancellation

 | 

`bool`

 | 

Defines whether the parameter value update is a cancellation of a future-dated value. Defaults to `False`. When true, the `effective_in` argument is always set to `Timeline.FUTURE`.

 |

### [](#class_attributes_76 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. The values' effective time will be within 5 seconds of this, or the same if future-dating. This is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

updated\_parameter\_values

 | 

`Dict`\[`str`, `Optional`\[`Union`\[`datetime`, `Decimal`, `int`, `OptionalValue`, `str`, `UnionItemValue`\]\]\]

 | 

The proposed parameter value updates. This is a mapping of parameter name (for `INSTANCE` parameters) or ID (for `Expected` parameters) to parameter value, which may be None for an Optional `Expected` parameter. These values are pending and have not yet been committed. When the `is_cancellation` argument is `True`, the map contains the new value that will take effect after the parameter value is cancelled, if the cancellation is not rejected by the hook.

 |
| 

effective\_in

 | 

`Timeline`

 | 

Defines when the parameter value update is effective. For future-dated parameter value updates and cancellations, this argument is set to `Timeline.FUTURE`. When the update is effective in the future, the data requirements and data fetchers are ignored and any calls to the Vault API functions to access Vault data will raise an `InvalidSmartContractError`. Defaults to `Timeline.PRESENT`.

 |
| 

is\_cancellation

 | 

`bool`

 | 

Defines whether the parameter value update is a cancellation of a future-dated value. Defaults to `False`. When true, the `effective_in` argument is always set to `Timeline.FUTURE`.

 |

## [](#preparameterchangehookresult "Copy link to heading")PreParameterChangeHookResult

`PreParameterChangeHookResult`

The hook result of the `pre_parameter_change_hook`.

### [](#constructor_82 "Copy link to heading")Constructor:

`PreParameterChangeHookResult(*, rejection)`

Constructs a new PreParameterChangeHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the parameter update is rejected.

 |

### [](#class_attributes_77 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the parameter update is rejected.

 |

## [](#prepostinghookarguments "Copy link to heading")PrePostingHookArguments

`PrePostingHookArguments`

The hook arguments of `pre_posting_hook`.

### [](#constructor_83 "Copy link to heading")Constructor:

`PrePostingHookArguments(*, effective_datetime, posting_instructions, client_transactions)`

Constructs a new PrePostingHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the `value_timestamp` of the Posting Instructions, if set at the `posting_instruction_batch` level within the [Postings API](/vault-core/5-9/EN/api/postings_api) request. Otherwise, it will be equal to processing time of the Posting Instructions, which will be slightly earlier than the `insertion_timestamp`.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The proposed list of posting instructions to be committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions to be committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), as they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

### [](#class_attributes_78 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime that the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class. This datetime is equal to the `value_timestamp` of the Posting Instructions, if set at the `posting_instruction_batch` level within the [Postings API](/vault-core/5-9/EN/api/postings_api) request. Otherwise, it will be equal to processing time of the Posting Instructions, which will be slightly earlier than the `insertion_timestamp`.

 |
| 

posting\_instructions

 | 

`List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

 | 

The proposed list of posting instructions to be committed to the ledger.

 |
| 

client\_transactions

 | 

`Dict`\[`str`, `ClientTransaction`\]

 | 

The `ClientTransaction`s affected by the proposed posting instructions to be committed to the ledger. Note that all the posting instructions from the `hook_arguments.posting_instructions` attribute are also present in the `ClientTransaction` objects in this mapping. However, there may be additional posting instructions within these `ClientTransaction`s (for example, `InboundAuthorisation` for proposed `Settlement`), as they include all posting instructions targeting the same `ClientTransaction`. Returns a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the `ClientTransaction`. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the `ClientTransaction` that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same `ClientTransaction`.

 |

## [](#prepostinghookresult "Copy link to heading")PrePostingHookResult

`PrePostingHookResult`

The hook result of the `pre_posting_hook`

### [](#constructor_84 "Copy link to heading")Constructor:

`PrePostingHookResult(*, rejection, enrichment_details)`

Constructs a new PrePostingHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the proposed Postings will not be committed.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

An optional mapping of Posting Instruction `id` to [PostingInstructionEnrichment](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionenrichment). Each `id` must belong to one of the proposed Posting Instructions. Note: If the Smart Contract rejects a Posting Instruction then Vault Core ignores `enrichment` (if you have set `enrichment` and `rejection`) and does not save any enrichment details.

 |

### [](#class_attributes_79 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the proposed Postings will not be committed.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

An optional mapping of Posting Instruction `id` to [PostingInstructionEnrichment](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionenrichment). Each `id` must belong to one of the proposed Posting Instructions. Note: If the Smart Contract rejects a Posting Instruction then Vault Core ignores `enrichment` (if you have set `enrichment` and `rejection`) and does not save any enrichment details.

 |

## [](#previous "Copy link to heading")Previous

`Previous`

### [](#constructor_85 "Copy link to heading")Constructor:

`Previous(*, month, day, hour, minute, second)`

Alter the datetime by shifting to the previous instance of the given parameter. This object must include the `day` parameter, but all others are optional.

  
| name | type | description |
| --- | --- | --- |
| 
month

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given month (1-12).

 |
| 

day

 | 

`int`

 | 

Shift datetime to the previous given day (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given hour (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given minute (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given second (0-59).

 |

### [](#class_attributes_80 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
month

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given month (1-12).

 |
| 

day

 | 

`int`

 | 

Shift datetime to the previous given day (1-31).

 |
| 

hour

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given hour (0-23).

 |
| 

minute

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given minute (0-59).

 |
| 

second

 | 

`Optional`\[`int`\]

 | 

Shift datetime to the previous given second (0-59).

 |

## [](#rejection "Copy link to heading")Rejection

`Rejection`

A class that can be returned through some hook result classes to reject a hook run. For example, this can be returned to prevent a posting from being committed or to reject a parameter update. When a hook rejection is returned, no other directives or data can be returned from the hook.

### [](#constructor_86 "Copy link to heading")Constructor:

`Rejection(*, message, reason_code)`

Constructs a new `Rejection` object.

  
| name | type | description |
| --- | --- | --- |
| 
message

 | 

`str`

 | 

The message of the rejection.

 |
| 

reason\_code

 | 

`Optional`\[`RejectionReason`\]

 | 

The optional reason code for the rejection; defaults to UNKNOWN\_REASON."

 |

### [](#class_attributes_81 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
message

 | 

`str`

 | 

The message of the rejection.

 |
| 

reason\_code

 | 

`Optional`\[`RejectionReason`\]

 | 

The optional reason code for the rejection; defaults to UNKNOWN\_REASON."

 |

## [](#relativedatetime "Copy link to heading")RelativeDateTime

`RelativeDateTime`

Define a datetime relative to a given origin.

### [](#constructor_87 "Copy link to heading")Constructor:

`RelativeDateTime(*, origin, shift, find)`

  
| name | type | description |
| --- | --- | --- |
| 
origin

 | 

`DefinedDateTime`

 | 

Define the starting point of any shift/find. The value `DefinedDateTime.LIVE` is not allowed.

 |
| 

shift

 | 

`Optional`\[`Shift`\]

 | 

Shift the datetime by some given parameters, relative to the given origin.

 |
| 

find

 | 

`Optional`\[`Union`\[`Next`, `Previous`, `Override`\]\]

 | 

After the initial shift, alter the given values to find the appropriate datetime.

 |

### [](#class_attributes_82 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
origin

 | 

`DefinedDateTime`

 | 

Define the starting point of any shift/find. The value `DefinedDateTime.LIVE` is not allowed.

 |
| 

shift

 | 

`Optional`\[`Shift`\]

 | 

Shift the datetime by some given parameters, relative to the given origin.

 |
| 

find

 | 

`Optional`\[`Union`\[`Next`, `Previous`, `Override`\]\]

 | 

After the initial shift, alter the given values to find the appropriate datetime.

 |

## [](#release "Copy link to heading")Release

`Release`

[Release](/vault-core/5-9/EN/reference/postings#release_chainable) is a chainable Posting Instruction that removes an authorisation hold from a ClientTransaction. The ClientTransaction being released is identified by the client\_transaction\_id attribute.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_88 "Copy link to heading")Constructor:

`Release(*, instruction_details, transaction_code, override_all_restrictions, client_transaction_id)`

Constructs a new Release

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |

### [](#class_attributes_83 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount released. Note that this is output only information, which is calculated by the ledger.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |

### [](#methods_17 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#scheduledevent "Copy link to heading")ScheduledEvent

`ScheduledEvent`

The native representation of a schedule which an event will adhere to.

### [](#constructor_89 "Copy link to heading")Constructor:

`ScheduledEvent(*, start_datetime, end_datetime, expression, schedule_method, skip)`

Constructs a new ScheduledEvent object.

  
| name | type | description |
| --- | --- | --- |
| 
start\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime from which the schedule will be effective. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC. Note that the `start_datetime` is required for any new `ScheduledEvents` returned by `activation_hook` or `conversion_hook`. However, existing schedules will start from their last successful execution time and so the `start_datetime` for existing `ScheduledEvent`s in the `conversion_hook` must be omitted (or set to None, or remain unchanged), as any other value will result in an error. Note that the `start_datetime` cannot be before a hook `effective_datetime` for new `event_types` returned in the account or plan `activation_hook` and `conversion_hook`.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime until which the schedule will be effective. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

The cron expression defining the schedule, represented as a native object. Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

The schedule definition for a recurring monthly event, represented as a native object. Either `expression` or `schedule_method` must be populated.

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

Skip a schedule until a given datetime. If set to `True`, the schedule will be skipped indefinitely until this field is updated.

 |

### [](#class_attributes_84 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
start\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime from which the schedule will be effective. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC. Note that the `start_datetime` is required for any new `ScheduledEvents` returned by `activation_hook` or `conversion_hook`. However, existing schedules will start from their last successful execution time and so the `start_datetime` for existing `ScheduledEvent`s in the `conversion_hook` must be omitted (or set to None, or remain unchanged), as any other value will result in an error. Note that the `start_datetime` cannot be before a hook `effective_datetime` for new `event_types` returned in the account or plan `activation_hook` and `conversion_hook`.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime until which the schedule will be effective. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

The cron expression defining the schedule, represented as a native object. Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

The schedule definition for a recurring monthly event, represented as a native object. Either `expression` or `schedule_method` must be populated.

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

Skip a schedule until a given datetime. If set to `True`, the schedule will be skipped indefinitely until this field is updated.

 |

## [](#scheduledeventadjustmenthookarguments "Copy link to heading")ScheduledEventAdjustmentHookArguments

`ScheduledEventAdjustmentHookArguments`

The hook arguments of `scheduled_event_adjustment_hook`.

### [](#constructor_90 "Copy link to heading")Constructor:

`ScheduledEventAdjustmentHookArguments(*, effective_datetime, event_type, pause_at_datetime)`

Constructs a new ScheduledEventAdjustmentHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the account scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None, if the attribute is not set or the account [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class. Note that if an account hook is triggered via a supervisor, then the supervisee `pause_at_datetime` has the value of `test_pause_at_timestamp` set on the supervisor scheduled event, which overrides the account event.

 |

### [](#class_attributes_85 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the account scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None, if the attribute is not set or the account [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class. Note that if an account hook is triggered via a supervisor, then the supervisee `pause_at_datetime` has the value of `test_pause_at_timestamp` set on the supervisor scheduled event, which overrides the account event.

 |

## [](#scheduledeventadjustmenthookresult "Copy link to heading")ScheduledEventAdjustmentHookResult

`ScheduledEventAdjustmentHookResult`

The hook result of the `scheduled_event_adjustment_hook`.

### [](#constructor_91 "Copy link to heading")Constructor:

`ScheduledEventAdjustmentHookResult(*, posting_instructions_directives)`

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

### [](#class_attributes_86 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |

## [](#scheduledeventhookarguments "Copy link to heading")ScheduledEventHookArguments

`ScheduledEventHookArguments`

The hook arguments of `scheduled_event_hook`.

### [](#constructor_92 "Copy link to heading")Constructor:

`ScheduledEventHookArguments(*, effective_datetime, event_type, pause_at_datetime)`

Constructs a new ScheduledEventHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the account scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None, if the attribute is not set or the account [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class. Note that if an account hook is triggered via a supervisor, then the supervisee `pause_at_datetime` has the value of `test_pause_at_timestamp` set on the supervisor scheduled event, which overrides the account event.

 |

### [](#class_attributes_87 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the account scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None, if the attribute is not set or the account [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class. Note that if an account hook is triggered via a supervisor, then the supervisee `pause_at_datetime` has the value of `test_pause_at_timestamp` set on the supervisor scheduled event, which overrides the account event.

 |

## [](#scheduledeventhookresult "Copy link to heading")ScheduledEventHookResult

`ScheduledEventHookResult`

The hook result of the `scheduled_event_hook`

### [](#constructor_93 "Copy link to heading")Constructor:

`ScheduledEventHookResult(*, account_notification_directives, posting_instructions_directives, update_account_event_type_directives)`

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

### [](#class_attributes_88 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
account\_notification\_directives

 | 

`Optional`\[`List`\[`AccountNotificationDirective`\]\]

 | 

A list of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s to be instructed by the hook.

 |
| 

posting\_instructions\_directives

 | 

`Optional`\[`List`\[`PostingInstructionsDirective`\]\]

 | 

A list of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s to be instructed by the hook.

 |
| 

update\_account\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdateAccountEventTypeDirective`\]\]

 | 

A list of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s to be instructed by the hook.

 |

## [](#scheduleexpression "Copy link to heading")ScheduleExpression

`ScheduleExpression`

The schedule definition associated with an Event Type. All schedule definition attributes must be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) and [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC. Complex expressions under each attribute are supported with the following rules:

 
| Expression | Description |
| --- | --- |
| 
\*

 | 

Fire on every value

 |
| 

\*/a

 | 

Fire on every `a`th value, starting from the minimum.

 |
| 

a-b

 | 

Fire on any value within the `a-b` range (`a` must be smaller than `b`).

 |
| 

a-b/c

 | 

Fire on every `c`th value within the `a-b` range.





 |
| 

x,y,z

 | 

Fire on any matching expression; can combine any number of any of the above expressions.

 |

### [](#constructor_94 "Copy link to heading")Constructor:

`ScheduleExpression(*, second, minute, hour, day, month, day_of_week, year)`

Constructs a new ScheduleExpression. At least one of the optional attributes must be provided. Fields take an order of precedence `second < minute < hour < day_of_week < day < month < year`, where fields after the first explicitly defined field default to `*`, while the fields before that default to their minimum values. `day_of_week` always defaults to `*`. For example, `day=1, minute=20` is equivalent to `second=0, minute=20, hour='*', day=1, month='*', day_of_week='*', year='*'`. The scheduled event will then execute on the first day of every month on every year at the 20th minute of every hour.

  
| name | type | description |
| --- | --- | --- |
| 
second

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Second (0-59).

 |
| 

minute

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Minute (0-59).

 |
| 

hour

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Hour (0-23).

 |
| 

day

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Day of the month (1-31). "last" may be used to denote the last day of the month.

 |
| 

month

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Month (1-12 or jan-dec, case-insensitive).

 |
| 

day\_of\_week

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Day of the week (0-6 or mon-sun, case-insensitive).

 |
| 

year

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Year (4-digit year).

 |

### [](#class_attributes_89 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
second

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Second (0-59).

 |
| 

minute

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Minute (0-59).

 |
| 

hour

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Hour (0-23).

 |
| 

day

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Day of the month (1-31). "last" may be used to denote the last day of the month.

 |
| 

month

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Month (1-12 or jan-dec, case-insensitive).

 |
| 

day\_of\_week

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Day of the week (0-6 or mon-sun, case-insensitive).

 |
| 

year

 | 

`Optional`\[`Union`\[`str`, `int`\]\]

 | 

Year (4-digit year).

 |

## [](#scheduleskip "Copy link to heading")ScheduleSkip

`ScheduleSkip`

Defines the skip period for a Schedule.

### [](#constructor_95 "Copy link to heading")Constructor:

`ScheduleSkip(*, end)`

Constructs a new ScheduleSkip object.

  
| name | type | description |
| --- | --- | --- |
| 
end

 | 

`datetime`

 | 

The local datetime until which the Schedule will be skipped. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |

### [](#class_attributes_90 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
end

 | 

`datetime`

 | 

The local datetime until which the Schedule will be skipped. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart](./../smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](./../supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |

## [](#settlement "Copy link to heading")Settlement

`Settlement`

[Settlement](/vault-core/5-9/EN/reference/postings#settlement_chainable) is a chainable Posting Instruction that clears funds that have been previously authorised in a [ClientTransaction](#clienttransaction). The Client Transaction being cleared is identified by the `client_transaction_id` attribute.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_96 "Copy link to heading")Constructor:

`Settlement(*, instruction_details, transaction_code, override_all_restrictions, client_transaction_id, amount, final)`

Constructs a new Settlement

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

The amount to be cleared for a ClientTransaction. Defaults to the total amount authorised for the ClientTransaction.

 |
| 

final

 | 

`Optional`\[`bool`\]

 | 

If set to true, any remaining amount authorised for the ClientTransaction will be released. No Posting Instructions may mutate the ClientTransaction once a final Settlement has been accepted.

 |

### [](#class_attributes_91 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

client\_transaction\_id

 | 

`str`

 | 

The ID of the ClientTransaction that this Posting Instruction is a part of. A Posting Instruction may be viewed as a change of state to a ClientTransaction.

 |
| 

amount

 | 

`Optional`\[`Union`\[`Decimal`, `int`\]\]

 | 

The amount to be cleared for a ClientTransaction. Defaults to the total amount authorised for the ClientTransaction.

 |
| 

final

 | 

`Optional`\[`bool`\]

 | 

If set to true, any remaining amount authorised for the ClientTransaction will be released. No Posting Instructions may mutate the ClientTransaction once a final Settlement has been accepted.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_id

 | 

`str`

 | 

The Account ID targeted by this Posting Instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_id

 | 

`str`

 | 

The Internal Account ID targeted by this posted instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

internal\_account\_processing\_label

 | 

`Optional`\[`str`\]

 | 

A label for a Posting Instruction to use to reference an Internal Account without a need to identify the Processing Group it belongs to. Use `internal_account_processing_label` in place of the `internal_account_id` in order to instruct Posting Instructions for an Internal Account with a matching processing label belonging to the same Processing Group as the target Account. For fetched Posting Instructions, if `internal_account_processing_label` is set, then `internal_account_id` is already resolved by Vault and set on the instruction. Note that this is output only information, which is derived by the ledger.

 |
| 

target\_account\_address

 | 

`str`

 | 

The address of the Account that is targeted by the Posting Instruction. It is equivalent to the `account_address` in the `Posting` type.

 |
| 

asset

 | 

`str`

 | 

The asset type targeted by the Posting Instruction.

 |

### [](#methods_18 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#shift "Copy link to heading")Shift

`Shift`

Shift a datetime by a specified amount of time. Can be used in conjunction with Override inside the RelativeDateTime object. Note this utilises the [Golang `time` package](https://golang.org/pkg/time/#Date) so will normalise dates (e.g. shifting forward a month from October 31st will result in overflowing to December 1st) and apply all date shift parameters as a single operation. Time shift parameters will be applied in a separate single operation after the date shift has been applied. Note that all fields can be specified by a positive or negative integer, implying forwards and backwards shifts respectively.

### [](#constructor_97 "Copy link to heading")Constructor:

`Shift(*, years, months, days, hours, minutes, seconds)`

  
| name | type | description |
| --- | --- | --- |
| 
years

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of years.

 |
| 

months

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of months.

 |
| 

days

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of days.

 |
| 

hours

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of hours.

 |
| 

minutes

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of minutes.

 |
| 

seconds

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of seconds.

 |

### [](#class_attributes_92 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
years

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of years.

 |
| 

months

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of months.

 |
| 

days

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of days.

 |
| 

hours

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of hours.

 |
| 

minutes

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of minutes.

 |
| 

seconds

 | 

`Optional`\[`int`\]

 | 

Shift by specified number of seconds.

 |

## [](#smartcontractdescriptor "Copy link to heading")SmartContractDescriptor

`SmartContractDescriptor`

Each Supervisor Contract must declare the Smart Contracts that it supervises. Using the Smart Contract Descriptor object, a Product Version Id is declared with an alias that is used throughout the Supervisor Contract to refer to this Smart Contract Product Version. An optional flag can be used to declare that a supervisee will have its post\_posting\_hook supervised. The supervised\_hooks attribute can be populated to declare that a supervisee will have additional hooks supervised, with specific [SupervisionExecutionModes](./enums#supervisionexecutionmode).

### [](#constructor_98 "Copy link to heading")Constructor:

`SmartContractDescriptor(*, alias, smart_contract_version_id, supervise_post_posting_hook, supervised_hooks)`

Constructs a new SmartContractDescriptor

  
| name | type | description |
| --- | --- | --- |
| 
alias

 | 

`str`

 | 

An alias for the Product Version to use throughout the Supervisor Contract.

 |
| 

smart\_contract\_version\_id

 | 

`str`

 | 

A string ID for the Product Version of a Smart Contract that will be supervised by this Supervisor Contract.

 |
| 

supervise\_post\_posting\_hook

 | 

`bool`

 | 

A bool to denote whether this supervisee’s post\_posting\_hook should be supervised.

 |
| 

supervised\_hooks

 | 

`Optional`\[`SupervisedHooks`\]

 | 

This attribute can be populated with a [SupervisedHooks](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisedhooks) value to specify which hooks are supervised, and with which execution mode.

 |

### [](#class_attributes_93 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
alias

 | 

`str`

 | 

An alias for the Product Version to use throughout the Supervisor Contract.

 |
| 

smart\_contract\_version\_id

 | 

`str`

 | 

A string ID for the Product Version of a Smart Contract that will be supervised by this Supervisor Contract.

 |
| 

supervise\_post\_posting\_hook

 | 

`bool`

 | 

A bool to denote whether this supervisee’s post\_posting\_hook should be supervised.

 |
| 

supervised\_hooks

 | 

`Optional`\[`SupervisedHooks`\]

 | 

This attribute can be populated with a [SupervisedHooks](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisedhooks) value to specify which hooks are supervised, and with which execution mode.

 |

## [](#smartcontracteventtype "Copy link to heading")SmartContractEventType

`SmartContractEventType`

Each scheduled event in a Smart Contract has an event type associated with it. Each event type must have a unique name within each Smart Contract and can have optional Scheduler tags. Each Smart Contract must include a list of all [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype)s included in its [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) and [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook).

### [](#constructor_99 "Copy link to heading")Constructor:

`SmartContractEventType(*, name, scheduler_tag_ids, adjustment_point)`

Constructs a new SmartContractEventType

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Event Type. This name will be the same as the name defined in [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) or [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook).

 |
| 

scheduler\_tag\_ids

 | 

`Optional`\[`List`\[`str`\]\]

 | 

An optional list of string ids for the [account schedule tags](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) of an Event Type. The tags must be created in the Scheduler before they are referenced in a Smart Contract. Vault Core environments with the Multiple Processing Groups Extension enforce this on Product Version creation. The tag IDs are global in Vault and must exactly match the tag IDs created in the Scheduler. Event Types in different contracts with the same tag will be linked together. Defaults to no tags if a tag ID is not provided.

 |
| 

adjustment\_point

 | 

`Optional`\[`bool`\]

 | 

If set to `True` then the schedule will be marked as an adjustment point. If the adjustment\_strategy is `AdjustmentStrategy.SCHEDULE_TRIGGERED` then an adjustment process will be run before the scheduled\_event\_hook for that event is executed. An `adjustment_point` can only be set to `True` if the adjustment\_strategy is defined in the metadata of the Smart Contract. If the adjustment\_strategy is `AdjustmentStrategy.SCHEDULE_TRIGGERED`, then at least one SmartContractEventType will need to have `adjustment_point = True`. The default value of `adjustment_point` is `False`.

 |

### [](#class_attributes_94 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Event Type. This name will be the same as the name defined in [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) or [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook).

 |
| 

scheduler\_tag\_ids

 | 

`Optional`\[`List`\[`str`\]\]

 | 

An optional list of string ids for the [account schedule tags](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) of an Event Type. The tags must be created in the Scheduler before they are referenced in a Smart Contract. Vault Core environments with the Multiple Processing Groups Extension enforce this on Product Version creation. The tag IDs are global in Vault and must exactly match the tag IDs created in the Scheduler. Event Types in different contracts with the same tag will be linked together. Defaults to no tags if a tag ID is not provided.

 |
| 

adjustment\_point

 | 

`Optional`\[`bool`\]

 | 

If set to `True` then the schedule will be marked as an adjustment point. If the adjustment\_strategy is `AdjustmentStrategy.SCHEDULE_TRIGGERED` then an adjustment process will be run before the scheduled\_event\_hook for that event is executed. An `adjustment_point` can only be set to `True` if the adjustment\_strategy is defined in the metadata of the Smart Contract. If the adjustment\_strategy is `AdjustmentStrategy.SCHEDULE_TRIGGERED`, then at least one SmartContractEventType will need to have `adjustment_point = True`. The default value of `adjustment_point` is `False`.

 |

## [](#stringconstraint "Copy link to heading")StringConstraint

`StringConstraint`

A Constraint indicating that an expected parameter must be a string.

Note: This only applies to Core API Parameters. For the Smart Contract Parameters shape equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

The return value of a parameter with this constraint in the Smart Contract ParameterValueTimeseries is of the type str or None.

### [](#constructor_100 "Copy link to heading")Constructor:

`StringConstraint(*, min_length, max_length)`

Constructs a new StringConstraint object.

  
| name | type | description |
| --- | --- | --- |
| 
min\_length

 | 

`Optional`\[`int`\]

 | 

The minimum length (inclusive) of the string value.

 |
| 

max\_length

 | 

`Optional`\[`int`\]

 | 

The maximum length (inclusive) of the string value. Can be left unspecified (or set to `None` or 0) to indicate a constraint with no maximum length.

 |

### [](#class_attributes_95 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
min\_length

 | 

`Optional`\[`int`\]

 | 

The minimum length (inclusive) of the string value.

 |
| 

max\_length

 | 

`Optional`\[`int`\]

 | 

The maximum length (inclusive) of the string value. Can be left unspecified (or set to `None` or 0) to indicate a constraint with no maximum length.

 |

## [](#stringshape "Copy link to heading")StringShape

`StringShape`

A Parameter shape defining a string.

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

Parameter value type: `str`.

## [](#supervisedhooks "Copy link to heading")SupervisedHooks

`SupervisedHooks`

Contains information of each hook’s [SupervisionExecutionMode](./enums#supervisionexecutionmode). At least one hook supervision must be specified. Currently only configures pre\_posting\_hook hook supervision.

### [](#constructor_101 "Copy link to heading")Constructor:

`SupervisedHooks(*, pre_posting_hook)`

  
| name | type | description |
| --- | --- | --- |
| 
pre\_posting\_hook

 | 

`SupervisionExecutionMode`

 | 

If specified, defines the [SupervisionExecutionMode](./enums#supervisionexecutionmode). for the supervisee’s pre\_posting\_hook.

 |

### [](#class_attributes_96 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
pre\_posting\_hook

 | 

`SupervisionExecutionMode`

 | 

If specified, defines the [SupervisionExecutionMode](./enums#supervisionexecutionmode). for the supervisee’s pre\_posting\_hook.

 |

## [](#supervisoractivationhookarguments "Copy link to heading")SupervisorActivationHookArguments

`SupervisorActivationHookArguments`

The hook arguments of `activation_hook` for supervisors.

### [](#constructor_102 "Copy link to heading")Constructor:

`SupervisorActivationHookArguments(*, effective_datetime)`

Constructs a new SupervisorActivationHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

### [](#class_attributes_97 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |

## [](#supervisoractivationhookresult "Copy link to heading")SupervisorActivationHookResult

`SupervisorActivationHookResult`

The hook result of the Supervisor `activation_hook`.

### [](#constructor_103 "Copy link to heading")Constructor:

`SupervisorActivationHookResult(*, scheduled_events_return_value, rejection)`

Constructs a new SupervisorActivationHookResult object.

  
| name | type | description |
| --- | --- | --- |
| 
scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s keyed by name returned by the Supervisor hook. For `event_types` returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the plan will not be opened. **Only available in Vault version 5.0+**.

 |

### [](#class_attributes_98 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s keyed by name returned by the Supervisor hook. For `event_types` returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the plan will not be opened. **Only available in Vault version 5.0+**.

 |

## [](#supervisorcontracteventtype "Copy link to heading")SupervisorContractEventType

`SupervisorContractEventType`

Each scheduled event in a Supervisor Contract has an event type associated with it. Each event type must have a unique name within each Supervisor Contract and can have optional Scheduler tags. Each Supervisor Contract must include a list of all [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype)s included in its [activation\_hook](./../supervisor_contracts_api_reference4xx/hooks#activation_hook) and [conversion\_hook](./../supervisor_contracts_api_reference4xx/hooks#conversion_hook).

### [](#constructor_104 "Copy link to heading")Constructor:

`SupervisorContractEventType(*, name, scheduler_tag_ids, overrides_event_types)`

Constructs a new SupervisorContractEventType

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Event Type. This name will be the same as the name defined in [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) or [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook).

 |
| 

scheduler\_tag\_ids

 | 

`Optional`\[`List`\[`str`\]\]

 | 

An optional list of string ids for the [account schedule tags](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) of an Event Type. The tags must be created in the Scheduler before they are referenced in a Smart Contract. Vault Core environments with the Multiple Processing Groups Extension enforce this on Product Version creation. The tag IDs are global in Vault and must exactly match the tag IDs created in the Scheduler. Event Types in different contracts with the same tag will be linked together. Defaults to no tags if a tag ID is not provided.

 |
| 

overrides\_event\_types

 | 

`Optional`\[`List`\[`Tuple`\[`str`, `str`\]\]\]

 | 

A list of (Smart Contract `alias`, `event_type`) tuples specifying which are the overridden Schedules for each [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype). If not provided, this [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype) does not override any of the Supervisee Schedules. The Smart Contract alias is the alias defined in the [SmartContractDescriptor](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor). Note that each SupervisorContractEventType can only override one Schedule per Supervisee. If multiple Supervisee Schedules need to be overridden, this has to be done using multiple Supervisee EventTypes.

 |

### [](#class_attributes_99 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`str`

 | 

The name of the Event Type. This name will be the same as the name defined in [activation\_hook](./../smart_contracts_api_reference4xx/hooks#activation_hook) or [conversion\_hook](./../smart_contracts_api_reference4xx/hooks#conversion_hook).

 |
| 

scheduler\_tag\_ids

 | 

`Optional`\[`List`\[`str`\]\]

 | 

An optional list of string ids for the [account schedule tags](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) of an Event Type. The tags must be created in the Scheduler before they are referenced in a Smart Contract. Vault Core environments with the Multiple Processing Groups Extension enforce this on Product Version creation. The tag IDs are global in Vault and must exactly match the tag IDs created in the Scheduler. Event Types in different contracts with the same tag will be linked together. Defaults to no tags if a tag ID is not provided.

 |
| 

overrides\_event\_types

 | 

`Optional`\[`List`\[`Tuple`\[`str`, `str`\]\]\]

 | 

A list of (Smart Contract `alias`, `event_type`) tuples specifying which are the overridden Schedules for each [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype). If not provided, this [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype) does not override any of the Supervisee Schedules. The Smart Contract alias is the alias defined in the [SmartContractDescriptor](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor). Note that each SupervisorContractEventType can only override one Schedule per Supervisee. If multiple Supervisee Schedules need to be overridden, this has to be done using multiple Supervisee EventTypes.

 |

## [](#supervisorconversionhookarguments "Copy link to heading")SupervisorConversionHookArguments

`SupervisorConversionHookArguments`

The hook arguments of `conversion_hook` for supervisors.

### [](#constructor_105 "Copy link to heading")Constructor:

`SupervisorConversionHookArguments(*, effective_datetime, existing_schedules)`

Constructs a new SupervisorConversionHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

### [](#class_attributes_100 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

existing\_schedules

 | 

`Dict`\[`str`, `ScheduledEvent`\]

 | 

A dictionary of EventType name to ScheduledEvent, containing the existing ScheduledEvents associated with the contract. Does not include disabled schedules.

 |

## [](#supervisorconversionhookresult "Copy link to heading")SupervisorConversionHookResult

`SupervisorConversionHookResult`

The hook result of the Supervisor `conversion_hook`.

### [](#constructor_106 "Copy link to heading")Constructor:

`SupervisorConversionHookResult(*, scheduled_events_return_value, rejection)`

Constructs a new SupervisorConversionHookResult object.

  
| name | type | description |
| --- | --- | --- |
| 
scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s keyed by name returned by the Supervisor hook. For any new [event\_types](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/metadata#event_types) in this Contract returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`. For any `event_types` that exist in the previous Contract and are returned in this mapping, the `ScheduledEvent` `start_datetime` is disregarded and defaults to the last run time of the existing `event_type` schedule. Because of this, the start\_datetime for the existing schedules must be set to None or remain unchanged, as any other values will result in an error. This attribute is only optional if no `event_types` are defined in this Contract. Additionally, all `event_types` in this Contract must be included in the `scheduled_events_return_value`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the plan will not be converted to the new Supervisor Contract version. **Only available in Vault version 5.0+**.

 |

### [](#class_attributes_101 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
scheduled\_events\_return\_value

 | 

`Optional`\[`Dict`\[`str`, `ScheduledEvent`\]\]

 | 

A dictionary containing [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent)s keyed by name returned by the Supervisor hook. For any new [event\_types](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/metadata#event_types) in this Contract returned in this mapping, you cannot set `ScheduledEvent` `start_datetime` to before the hook `effective_datetime`. For any `event_types` that exist in the previous Contract and are returned in this mapping, the `ScheduledEvent` `start_datetime` is disregarded and defaults to the last run time of the existing `event_type` schedule. Because of this, the start\_datetime for the existing schedules must be set to None or remain unchanged, as any other values will result in an error. This attribute is only optional if no `event_types` are defined in this Contract. Additionally, all `event_types` in this Contract must be included in the `scheduled_events_return_value`.

 |
| 

rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the plan will not be converted to the new Supervisor Contract version. **Only available in Vault version 5.0+**.

 |

## [](#supervisorpostpostinghookarguments "Copy link to heading")SupervisorPostPostingHookArguments

`SupervisorPostPostingHookArguments`

The hook arguments of `post_posting_hook`.

### [](#constructor_107 "Copy link to heading")Constructor:

`SupervisorPostPostingHookArguments(*, effective_datetime, supervisee_posting_instructions, supervisee_client_transactions)`

Constructs a new SupervisorPostPostingHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_posting\_instructions

 | 

`Dict`\[`str`, `List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]\]

 | 

Mapping of Supervisee Account ID to committed posting instructions list. The list contains successfully committed posting instructions targetting the supervisee.

 |
| 

supervisee\_client\_transactions

 | 

`Dict`\[`str`, `Dict`\[`str`, `ClientTransaction`\]\]

 | 

Mapping of Supervisee Account ID to the ClientTransactions that are affected by the posting instructions which just have been committed. The ClientTransactions for each Supervisee is itself a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the ClientTransaction. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the ClientTransaction that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same ClientTransaction.

 |

### [](#class_attributes_102 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_posting\_instructions

 | 

`Dict`\[`str`, `List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]\]

 | 

Mapping of Supervisee Account ID to committed posting instructions list. The list contains successfully committed posting instructions targetting the supervisee.

 |
| 

supervisee\_client\_transactions

 | 

`Dict`\[`str`, `Dict`\[`str`, `ClientTransaction`\]\]

 | 

Mapping of Supervisee Account ID to the ClientTransactions that are affected by the posting instructions which just have been committed. The ClientTransactions for each Supervisee is itself a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the ClientTransaction. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the ClientTransaction that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same ClientTransaction.

 |

## [](#supervisorpostpostinghookresult "Copy link to heading")SupervisorPostPostingHookResult

`SupervisorPostPostingHookResult`

The hook result of the Supervisor `post_posting_hook`.

### [](#constructor_108 "Copy link to heading")Constructor:

`SupervisorPostPostingHookResult(*, plan_notification_directives, update_plan_event_type_directives, supervisee_account_notification_directives, supervisee_posting_instructions_directives, supervisee_update_account_event_type_directives)`

Constructs a new SupervisorPostPostingHookResult object.

  
| name | type | description |
| --- | --- | --- |
| 
plan\_notification\_directives

 | 

`Optional`\[`List`\[`PlanNotificationDirective`\]\]

 | 

A list of [PlanNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#plannotificationdirective)s to be instructed by the Supervisor hook.

 |
| 

update\_plan\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdatePlanEventTypeDirective`\]\]

 | 

A list of [UpdatePlanEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective)s to be instructed by the Supervisor hook.

 |
| 

supervisee\_account\_notification\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`AccountNotificationDirective`\]\]\]

 | 

A dictionary containing Lists of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_posting\_instructions\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`PostingInstructionsDirective`\]\]\]

 | 

A dictionary containing Lists of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_update\_account\_event\_type\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`UpdateAccountEventTypeDirective`\]\]\]

 | 

A dictionary containing Lists of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |

### [](#class_attributes_103 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
plan\_notification\_directives

 | 

`Optional`\[`List`\[`PlanNotificationDirective`\]\]

 | 

A list of [PlanNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#plannotificationdirective)s to be instructed by the Supervisor hook.

 |
| 

update\_plan\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdatePlanEventTypeDirective`\]\]

 | 

A list of [UpdatePlanEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective)s to be instructed by the Supervisor hook.

 |
| 

supervisee\_account\_notification\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`AccountNotificationDirective`\]\]\]

 | 

A dictionary containing Lists of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_posting\_instructions\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`PostingInstructionsDirective`\]\]\]

 | 

A dictionary containing Lists of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_update\_account\_event\_type\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`UpdateAccountEventTypeDirective`\]\]\]

 | 

A dictionary containing Lists of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |

## [](#supervisorprepostinghookarguments "Copy link to heading")SupervisorPrePostingHookArguments

`SupervisorPrePostingHookArguments`

The hook arguments of `pre_posting_hook`.

### [](#constructor_109 "Copy link to heading")Constructor:

`SupervisorPrePostingHookArguments(*, effective_datetime, supervisee_posting_instructions, supervisee_client_transactions)`

Constructs a new SupervisorPrePostingHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_posting\_instructions

 | 

`Dict`\[`str`, `List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]\]

 | 

Mapping of Supervisee Account ID to proposed list of posting instructions to be committed to the ledger.

 |
| 

supervisee\_client\_transactions

 | 

`Dict`\[`str`, `Dict`\[`str`, `ClientTransaction`\]\]

 | 

Mapping of Supervisee Account ID to the ClientTransactions that are affected by the proposed posting instructions to be committed to the ledger. The ClientTransactions for each Supervisee is itself a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the ClientTransaction. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the ClientTransaction that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same ClientTransaction.

 |

### [](#class_attributes_104 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_posting\_instructions

 | 

`Dict`\[`str`, `List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]\]

 | 

Mapping of Supervisee Account ID to proposed list of posting instructions to be committed to the ledger.

 |
| 

supervisee\_client\_transactions

 | 

`Dict`\[`str`, `Dict`\[`str`, `ClientTransaction`\]\]

 | 

Mapping of Supervisee Account ID to the ClientTransactions that are affected by the proposed posting instructions to be committed to the ledger. The ClientTransactions for each Supervisee is itself a map of `unique_client_transaction_id` to a [ClientTransaction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) object, where the `unique_client_transaction_id` is the globally unique ID of the ClientTransaction. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, which represents the ClientTransaction that a posting instruction is impacting. However, this value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same ClientTransaction.

 |

## [](#supervisorprepostinghookresult "Copy link to heading")SupervisorPrePostingHookResult

`SupervisorPrePostingHookResult`

The hook result of the Supervisor `pre_posting_hook`.

### [](#constructor_110 "Copy link to heading")Constructor:

`SupervisorPrePostingHookResult(*, rejection, enrichment_details)`

Constructs a new SupervisorPrePostingHookResult object

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the proposed Postings will not be committed.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `dict`\[`str`, `PostingInstructionEnrichment`\]\]\]

 | 

An optional dictionary, mapping the Supervisee Account ID to a dictionary that, in turn, maps proposed Posting Instruction IDs to the required [PostingInstructionEnrichment](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionenrichment). Note: If the Smart Contract rejects a Posting Instruction then Vault Core ignores `enrichment` (if you have set `enrichment` and `rejection`) and does not save any enrichment details.

 |

### [](#class_attributes_105 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
rejection

 | 

`Optional`\[`Rejection`\]

 | 

A Hook [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection). If returned, the proposed Postings will not be committed.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `dict`\[`str`, `PostingInstructionEnrichment`\]\]\]

 | 

An optional dictionary, mapping the Supervisee Account ID to a dictionary that, in turn, maps proposed Posting Instruction IDs to the required [PostingInstructionEnrichment](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionenrichment). Note: If the Smart Contract rejects a Posting Instruction then Vault Core ignores `enrichment` (if you have set `enrichment` and `rejection`) and does not save any enrichment details.

 |

## [](#supervisorscheduledeventhookarguments "Copy link to heading")SupervisorScheduledEventHookArguments

`SupervisorScheduledEventHookArguments`

The hook arguments of `scheduled_event_hook`.

### [](#constructor_111 "Copy link to heading")Constructor:

`SupervisorScheduledEventHookArguments(*, effective_datetime, event_type, pause_at_datetime, supervisee_pause_at_datetime)`

Constructs a new SupervisorScheduledEventHookArguments object.

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the plan scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None if the attribute is not set or the plan [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_pause\_at\_datetime

 | 

`Dict`\[`str`, `Optional`\[`datetime`\]\]

 | 

If the [supervisee\_hook\_directives](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#supervisee_hook_directives) is set to `all`, this mapping has all the Supervisee Account IDs for which `scheduled_event_hook` execution was triggered, and the `pause_at_datetime` values that were used to execute the supervisee `scheduled_event_hooks`. The `pause_at_datetime` values in this Supervisee mapping are the same as the `test_pause_at_timestamp` set on the [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the plan scheduled events. Supervisee datetimes must be timezone-aware and UTC using the ZoneInfo class.

 |

### [](#class_attributes_106 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
effective\_datetime

 | 

`datetime`

 | 

The logical datetime the hook is being run against. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

event\_type

 | 

`str`

 | 

The event type for which the hook is being called. Event types are defined in `activation_hook` and `conversion_hook`.

 |
| 

pause\_at\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The `test_pause_at_timestamp` attribute value set in [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the plan scheduled events. If multiple tags are set with different values for `test_pause_at_timestamp`, the earliest datetime is used. Defaults to None if the attribute is not set or the plan [SupervisorContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) has no `scheduler_tag_ids` applied. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

supervisee\_pause\_at\_datetime

 | 

`Dict`\[`str`, `Optional`\[`datetime`\]\]

 | 

If the [supervisee\_hook\_directives](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#supervisee_hook_directives) is set to `all`, this mapping has all the Supervisee Account IDs for which `scheduled_event_hook` execution was triggered, and the `pause_at_datetime` values that were used to execute the supervisee `scheduled_event_hooks`. The `pause_at_datetime` values in this Supervisee mapping are the same as the `test_pause_at_timestamp` set on the [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#AccountScheduleTag) to pause the plan scheduled events. Supervisee datetimes must be timezone-aware and UTC using the ZoneInfo class.

 |

## [](#supervisorscheduledeventhookresult "Copy link to heading")SupervisorScheduledEventHookResult

`SupervisorScheduledEventHookResult`

The hook result of the Supervisor `scheduled_event_hook`.

### [](#constructor_112 "Copy link to heading")Constructor:

`SupervisorScheduledEventHookResult(*, plan_notification_directives, update_plan_event_type_directives, supervisee_account_notification_directives, supervisee_posting_instructions_directives, supervisee_update_account_event_type_directives)`

Constructs a new SupervisorScheduledEventHookResult object.

  
| name | type | description |
| --- | --- | --- |
| 
plan\_notification\_directives

 | 

`Optional`\[`List`\[`PlanNotificationDirective`\]\]

 | 

A list of [PlanNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#plannotificationdirective)s to be instructed by the Supervisor hook.

 |
| 

update\_plan\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdatePlanEventTypeDirective`\]\]

 | 

A list of [UpdatePlanEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective)s to be instructed by the Supervisor hook.

 |
| 

supervisee\_account\_notification\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`AccountNotificationDirective`\]\]\]

 | 

A dictionary containing Lists of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_posting\_instructions\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`PostingInstructionsDirective`\]\]\]

 | 

A dictionary containing Lists of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_update\_account\_event\_type\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`UpdateAccountEventTypeDirective`\]\]\]

 | 

A dictionary containing Lists of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |

### [](#class_attributes_107 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
plan\_notification\_directives

 | 

`Optional`\[`List`\[`PlanNotificationDirective`\]\]

 | 

A list of [PlanNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#plannotificationdirective)s to be instructed by the Supervisor hook.

 |
| 

update\_plan\_event\_type\_directives

 | 

`Optional`\[`List`\[`UpdatePlanEventTypeDirective`\]\]

 | 

A list of [UpdatePlanEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective)s to be instructed by the Supervisor hook.

 |
| 

supervisee\_account\_notification\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`AccountNotificationDirective`\]\]\]

 | 

A dictionary containing Lists of [AccountNotificationDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_posting\_instructions\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`PostingInstructionsDirective`\]\]\]

 | 

A dictionary containing Lists of [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |
| 

supervisee\_update\_account\_event\_type\_directives

 | 

`Optional`\[`Dict`\[`str`, `List`\[`UpdateAccountEventTypeDirective`\]\]\]

 | 

A dictionary containing Lists of [UpdateAccountEventTypeDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective)s keyed by Supervisee account id, returned by the Supervisor hook.

 |

## [](#timeseriesitem "Copy link to heading")TimeseriesItem

`TimeseriesItem`

Represents a timeseries datapoint, containing a datetime and value.

### [](#class_attributes_108 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
at\_datetime

 | 

`datetime`

 | 

The datetime of the timeseries datapoint. Must be a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value

 | 

`Union`\[`Balance`, `bool`, `Decimal`, `str`, `datetime`, `OptionalValue`, `UnionItemValue`, `int`, `None`\]

 | 

The value of the Timeseries datapoint at 'at\_datetime'. The type of this value will depend on the type of the Timeseries (such as `BalanceTimeseries`, `FlagTimeseries` or `ParameterTimeseries`).

 |

## [](#transactioncode "Copy link to heading")TransactionCode

`TransactionCode`

ISO20022 Bank Transaction Code with information about payment domain, family and subfamily. For further information, see [Posting Instruction](/vault-core/5-9/EN/reference/postings#posting_instruction)..

### [](#constructor_113 "Copy link to heading")Constructor:

`TransactionCode(*, domain, family, subfamily)`

Constructs a new TransactionCode

  
| name | type | description |
| --- | --- | --- |
| 
domain

 | 

`str`

 | 

Business area of the transaction.

 |
| 

family

 | 

`str`

 | 

A family within the domain.

 |
| 

subfamily

 | 

`str`

 | 

Sub-product family within a specific family.

 |

### [](#class_attributes_109 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
domain

 | 

`str`

 | 

Business area of the transaction.

 |
| 

family

 | 

`str`

 | 

A family within the domain.

 |
| 

subfamily

 | 

`str`

 | 

Sub-product family within a specific family.

 |

## [](#transfer "Copy link to heading")Transfer

`Transfer`

[Transfer](/vault-core/5-9/EN/reference/postings#transfer_standalone) is a non-chainable Posting Instruction that moves funds from a debtor to a creditor target Account.

To enable Posting Instruction methods that return indirect or output attributes to work in unit tests, you must set private Posting Instruction attributes when mocking Vault data. You can do this by calling `_set_output_attributes()` method on the Posting Instruction class instance. To see an example, see [Supervisor Contract example unit test](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#supervisor_contract_example_unit_test).

### [](#constructor_114 "Copy link to heading")Constructor:

`Transfer(*, instruction_details, transaction_code, override_all_restrictions, amount, denomination, debtor_target_account_id, creditor_target_account_id)`

Constructs a new Transfer

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

debtor\_target\_account\_id

 | 

`str`

 | 

The ID of the Account being debited.

 |
| 

creditor\_target\_account\_id

 | 

`str`

 | 

The ID Account being credited.

 |

### [](#class_attributes_110 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
instruction\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing instruction-level metadata.

 |
| 

transaction\_code

 | 

`Optional`\[`TransactionCode`\]

 | 

ISO20022 Bank Transaction Code field; a set of properties to identify the underlying transaction.

 |
| 

override\_all\_restrictions

 | 

`bool`

 | 

Specifies whether to ignore all restrictions.

 |
| 

amount

 | 

`Union`\[`Decimal`, `int`\]

 | 

The amount moved by this Posting Instruction.

 |
| 

denomination

 | 

`str`

 | 

The denomination of the amount moved by the Posting Instruction.

 |
| 

debtor\_target\_account\_id

 | 

`str`

 | 

The ID of the Account being debited.

 |
| 

creditor\_target\_account\_id

 | 

`str`

 | 

The ID Account being credited.

 |
| 

type

 | 

`PostingInstructionType`

 | 

The Posting Instruction type, such as CustomInstruction or Transfer.

 |
| 

id

 | 

`Optional`\[`str`\]

 | 

Uniquely identifies the Posting Instruction in Vault.

 |
| 

client\_batch\_id

 | 

`str`

 | 

The ID which allows related Posting Instructions (for example, interest accrual payments) to be associated with each other.

 |
| 

unique\_client\_transaction\_id

 | 

`str`

 | 

The globally unique ID of the ClientTransaction that this Posting Instruction is a part of. This value is not deterministic and therefore is not guaranteed to be consistent between different Contract executions for the same ClientTransaction. A Posting Instruction may be viewed as a change of state to a ClientTransaction. Note: This value will be used as a key in the map returned in the [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) Vault method.

 |
| 

insertion\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The datetime indicating when the Posting Instruction was inserted into the posting ledger (unless migrated into Vault Core from another core banking system, when this represents the time at which this Posting Instruction batch was inserted into the source core banking system). This field has the same value as the `source_insertion_timestamp` of the Posting Instruction batch, and the same value as the `insertion_timestamp` (unless migrated from another core banking system). See [source\_insertion\_timestamp](/vault-core/5-9/EN/api/core_api#PostingInstructionBatch). It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

value\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies the time at which the Posting Instruction will affect balances. Only use for backdated and future-dated instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

batch\_id

 | 

`Optional`\[`str`\]

 | 

The ID of the batch of Posting Instructions that get atomically inserted into the ledger.

 |
| 

batch\_details

 | 

`Optional`\[`Dict`\[`str`, `str`\]\]

 | 

An optional mapping containing batch-level metadata attached to the list of Posting Instructions that get atomically accepted or rejected.

 |
| 

client\_id

 | 

`str`

 | 

Uniquely identifies a client of the Posting API. Used to publish responses to the specified Kafka response topic. Together with the `client_transaction_id`, this forms a `unique_client_transaction_id`, which is used when accessing `ClientTransaction` objects in the Contract code.

 |
| 

booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

An optional datetime that specifies that time at which the Posting Instruction will be booked. Only use for back-booked or future-booked instructions. Set between 1970-01-01T00:00:00Z and the current time + 90 days, inclusive. It is a timezone-aware UTC datetime using the ZoneInfo class.

 |
| 

localised\_booking\_datetime

 | 

`Optional`\[`datetime`\]

 | 

The localised datetime indicating when the Posting Instruction was booked.

 |
| 

enrichment\_details

 | 

`Optional`\[`dict`\[`str`, `PostingInstructionEnrichment`\]\]

 | 

The enrichment added to this instruction in pre-posting, if it was enriched.

 |

### [](#methods_19 "Copy link to heading")Methods:

`balances(*, account_id, tside)`

Returns the net balance changes to the Account caused by this Posting Instruction.

  
| name | type | description |
| --- | --- | --- |
| 
account\_id

 | 

`Optional`\[`str`\]

 | 

The ID of an Account for which the balance changes should be returned. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `account_id` of the Smart Contract or the ID of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. This also applies for PostingInstructionDirectives accessible in a Supervisor Contract via `get_hook_result()` method.

 |
| 

tside

 | 

`Optional`\[`Tside`\]

 | 

The T-side of an Account which is used to calculate net balances. Does not need to be provided for historical Posting Instructions returned via `vault` methods or new Posting Instructions that the hook receives via arguments in `pre_posting_hook` and `post_posting_hook`. In these cases, the argument defaults to the `tside` of the Smart Contract or the `tside` of the supervisee Account in Supervisor Contract. Only required when creating a Posting Instruction within a Contract, as these might contain instructions for multiple accounts. It is not required for PostingInstructionDirectives accessible in a Supervisor Contract via the `get_hook_result()` method and defaults to the `tside` of the supervisee Account.

 |

**Return Value:** `BalanceDefaultDict`

The default balance dictionary where the key is the [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) and the value is a [Balance](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) object which contains the debit, credit and net balance changes for the Account. Accessing a non-existent key will return a `Balance` object with zero debit, credit, and net balance changes.

## [](#unionitem "Copy link to heading")UnionItem

`UnionItem`

Specifies a permissible value inside a [UnionShape](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionshape).

### [](#constructor_115 "Copy link to heading")Constructor:

`UnionItem(*, key, display_name)`

Constructs a new UnionItem.

  
| name | type | description |
| --- | --- | --- |
| 
key

 | 

`str`

 | 

The string value by which this choice is programmatically accessible.

 |
| 

display\_name

 | 

`str`

 | 

The name of the option as could be shown on a front-end user interface.

 |

### [](#class_attributes_111 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
key

 | 

`str`

 | 

The string value by which this choice is programmatically accessible.

 |
| 

display\_name

 | 

`str`

 | 

The name of the option as could be shown on a front-end user interface.

 |

## [](#unionitemvalue "Copy link to heading")UnionItemValue

`UnionItemValue`

A wrapper for the key of a [UnionItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionitem). Used as the value type for [UnionShape](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionshape) parameter (see [ParameterTimeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametertimeseries) and [DerivedParameterHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#derivedparameterhookresult)).

### [](#constructor_116 "Copy link to heading")Constructor:

`UnionItemValue(*, key)`

Constructs a UnionItemValue used to represent a [UnionItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionitem) key.

  
| name | type | description |
| --- | --- | --- |
| 
key

 | 

`str`

 | 

The string value by which this choice is programmatically accessible. This key value should exist as a [UnionItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionitem) key within the [UnionShape](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionshape) items.

 |

### [](#class_attributes_112 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
key

 | 

`str`

 | 

The string value by which this choice is programmatically accessible. This key value should exist as a [UnionItem](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionitem) key within the [UnionShape](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#unionshape) items.

 |

## [](#unionshape "Copy link to heading")UnionShape

`UnionShape`

Specifies a choice of multiple values.

Note: This only applies to Smart Contract Parameters. For the Core API Parameters constraint equivalent, see [Parameter shape to constraint mapping](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_shape_to_constraint_mapping).

Parameter value type: `UnionItemValue`.

### [](#constructor_117 "Copy link to heading")Constructor:

`UnionShape(*, items)`

Constructs a new UnionShape.

  
| name | type | description |
| --- | --- | --- |
| 
items

 | 

`List`\[`UnionItem`\]

 | 

The allowed values.

 |

### [](#class_attributes_113 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
items

 | 

`List`\[`UnionItem`\]

 | 

The allowed values.

 |

## [](#updateaccounteventtypedirective "Copy link to heading")UpdateAccountEventTypeDirective

`UpdateAccountEventTypeDirective`

### [](#constructor_118 "Copy link to heading")Constructor:

`UpdateAccountEventTypeDirective(*, event_type, expression, schedule_method, end_datetime, skip)`

A Hook Directive that instructs updating an Account Event Type.

  
| name | type | description |
| --- | --- | --- |
| 
event\_type

 | 

`str`

 | 

The `event_type` that is to be modified.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

Optional [ScheduleExpression](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduleexpression). Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

Optional [EndOfMonthSchedule](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule). Either `expression` or `schedule_method` must be populated.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Optional datetime that indicates when the schedule should stop executing. An `event_type` can be updated and re-enabled even if the `end_datetime` has been reached. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart Contract metadata](./../smart_contracts_api_reference4xx/metadata#events_timezone). If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC. When reinstructing from a supervisor contract, the plan’s [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) must match the account’s [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone).

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

An optional flag to skip a schedule indefinitely (True), unskip a Schedule (False), or to skip until a specified time (ScheduleSkip).

 |

### [](#class_attributes_114 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
event\_type

 | 

`str`

 | 

The `event_type` that is to be modified.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

Optional [ScheduleExpression](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduleexpression). Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

Optional [EndOfMonthSchedule](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule). Either `expression` or `schedule_method` must be populated.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Optional datetime that indicates when the schedule should stop executing. An `event_type` can be updated and re-enabled even if the `end_datetime` has been reached. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Smart Contract metadata](./../smart_contracts_api_reference4xx/metadata#events_timezone). If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC. When reinstructing from a supervisor contract, the plan’s [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) must match the account’s [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone).

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

An optional flag to skip a schedule indefinitely (True), unskip a Schedule (False), or to skip until a specified time (ScheduleSkip).

 |

## [](#updateplaneventtypedirective "Copy link to heading")UpdatePlanEventTypeDirective

`UpdatePlanEventTypeDirective`

Specifies a directive to update an event type.

### [](#constructor_119 "Copy link to heading")Constructor:

`UpdatePlanEventTypeDirective(*, event_type, expression, schedule_method, end_datetime, skip)`

A Hook Directive that instructs updating a Plan Event Type.

  
| name | type | description |
| --- | --- | --- |
| 
event\_type

 | 

`str`

 | 

The `event_type` that is to be modified.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

Optional [ScheduleExpression](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduleexpression). Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

Optional [EndOfMonthSchedule](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule). Either `expression` or `schedule_method` must be populated.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Optional datetime that indicates when the schedule should stop executing. An `event_type` can be updated and re-enabled even if the `end_datetime` has been reached. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Supervisor Contract metadata](./../supervisor_contracts_api_reference4xx/metadata#events_timezone). If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

An optional flag to skip a schedule indefinitely (True), unskip a Schedule (False), or to skip until a specified time (ScheduleSkip).

 |

### [](#class_attributes_115 "Copy link to heading")Class attributes:

  
| name | type | description |
| --- | --- | --- |
| 
event\_type

 | 

`str`

 | 

The `event_type` that is to be modified.

 |
| 

expression

 | 

`Optional`\[`ScheduleExpression`\]

 | 

Optional [ScheduleExpression](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduleexpression). Either `expression` or `schedule_method` must be populated.

 |
| 

schedule\_method

 | 

`Optional`\[`EndOfMonthSchedule`\]

 | 

Optional [EndOfMonthSchedule](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule). Either `expression` or `schedule_method` must be populated.

 |
| 

end\_datetime

 | 

`Optional`\[`datetime`\]

 | 

Optional datetime that indicates when the schedule should stop executing. An `event_type` can be updated and re-enabled even if the `end_datetime` has been reached. Must be timezone aware using the `ZoneInfo` class and be based on the Account’s operating timezone. The [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-9/EN/reference/processing_groups), if set. Otherwise it can be set as a field defined in the [Supervisor Contract metadata](./../supervisor_contracts_api_reference4xx/metadata#events_timezone). If neither of these is set, [vault.events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.

 |
| 

skip

 | 

`Optional`\[`Union`\[`bool`, `ScheduleSkip`\]\]

 | 

An optional flag to skip a schedule indefinitely (True), unskip a Schedule (False), or to skip until a specified time (ScheduleSkip).

 |