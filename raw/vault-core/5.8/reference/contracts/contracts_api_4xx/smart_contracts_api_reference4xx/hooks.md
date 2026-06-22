---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks"
title: "Hooks"
scraped_at: "2026-06-17T15:40:12.259Z"
images: 0
---

# Hooks

## [](#activation_hook "Copy link to heading")activation\_hook

`activation_hook(vault, hook_arguments)`

Carries out any required actions when an account is opened, specifically when account.status is set to `ACCOUNT_STATUS_OPEN` via the [v1/accounts](/vault-core/5-8/EN/api/core_api#accounts) or [v2/accounts](/vault-core/5-8/EN/api/core_api#accounts_v2) endpoint.

When an account is opened, the `effective_datetime` will default to the timestamp when the request was processed. For /v1/accounts, this is set to the `opening_timestamp`. For /v2/accounts, this is set to the `activation_timestamp`. **Note**: If the `effective_datetime` is backdated in the request to open the account, the `opening_timestamp` (in v1) or `activation_timestamp` (in v2) will also backdate to this new timestamp.

If `event_types` are defined on a Smart Contract, this hook must be defined in order to activate an Account on that Smart Contract.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[ActivationHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#activationhookarguments)

 | 

Hook arguments for the Activation hook.

 |

**Return Type:**Optional[\[ActivationHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#activationhookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations)

**Allowed Supervisee API Functions:** [get\_alias](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters)

## [](#attribute_hook "Copy link to heading")attribute\_hook

`attribute_hook(vault, hook_arguments)`

Returns the calculated value for a specific Attribute at an effective time.

This hook runs when `GET /v1/account-attribute-values` is called with one or more matching `account_ids` and `attribute_names`.

Note: Account Data or Hook Requirements can be defined to be fetched for a specific attribute only by setting the `attribute_name` on the [fetch\_account\_data](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) or [requires](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#requires) decorators.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[AttributeHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attributehookarguments)

 | 

Hook arguments for the Attribute hook.

 |

**Return Type:**[AttributeHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#attributehookresult)

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#conversion_hook "Copy link to heading")conversion\_hook

`conversion_hook(vault, hook_arguments)`

Carries out actions after a new Smart Contract has been activated on this account.

This hook runs when an API call requests the converting of a Customer Account to a new Smart Contract version.

If `event_types` are defined on a Smart Contract, then this hook must be defined in order to convert an Account to that Smart Contract.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[ConversionHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#conversionhookarguments)

 | 

Hook arguments for the Conversion hook.

 |

**Return Type:**Optional[\[ConversionHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#conversionhookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Supervisee API Functions:** [get\_alias](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#deactivation_hook "Copy link to heading")deactivation\_hook

`deactivation_hook(vault, hook_arguments)`

Carries out actions when the account closes.

This hook runs after a request to set a Customer Account to `ACCOUNT_STATUS_CLOSED`, either via the v1 or v2 Accounts endpoints.

Note: Ensure all balances are 0 before returning from this hook.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[DeactivationHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#deactivationhookarguments)

 | 

Hook arguments for the Deactivation hook.

 |

**Return Type:**Optional[\[DeactivationHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#deactivationhookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#derived_parameter_hook "Copy link to heading")derived\_parameter\_hook

`derived_parameter_hook(vault, hook_arguments)`

Returns values for all [derived parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#parameters). Deprecated in favour of the [attribute\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook).

Values that are allowed to be returned by parameter shape:

`NumberShape`: Decimal or int, `StringShape`: str, `AccountIdShape`: str, `DenominationShape`: str, `DateShape`: datetime, `OptionalShape`: OptionalValue, `UnionShape`: UnionItemValue with key in the set of valid keys of the UnionShape.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[DerivedParameterHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#derivedparameterhookarguments)

 | 

Hook arguments for the Derived Parameters hook.

 |

**Return Type:**[DerivedParameterHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#derivedparameterhookresult)

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#post_parameter_change_adjustment_hook "Copy link to heading")post\_parameter\_change\_adjustment\_hook

`post_parameter_change_adjustment_hook(adjusted_vault, snapshot_vault, hook_arguments)`

Used to override the Business As Usual (BAU) logic on the [post\_parameter\_change\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_parameter_change_hook) during the [Adjustments](/vault-core/5-8/EN/reference/adjustments) process.

Calculates the delta between snapshot\_vault and adjusted\_vault.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
adjusted\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the hook execution in the Adjustments timeline.

 |
| 

snapshot\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the original hook execution. For more information, see [Data used by snapshot\_vault](/vault-core/5-8/EN/reference/adjustments#data_used_by_snapshot_vault)

 |
| 

hook\_arguments

 | 

[PostParameterChangeAdjustmentHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postparameterchangeadjustmenthookarguments)

 | 

Hook arguments for the Post Parameter Change Adjustment hook.

 |

**Return Type:**[PostParameterChangeAdjustmentHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postparameterchangeadjustmenthookresult)

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

## [](#post_parameter_change_hook "Copy link to heading")post\_parameter\_change\_hook

`post_parameter_change_hook(vault, hook_arguments)`

Carries out any required actions after any `ExpectedParameter` value (or an `INSTANCE` level Parameter value) update has occurred which affects an Account.

lightbulb

Whether or not this hook is triggered depends on whether `triggers_post_parameter_change_hook` is specified, and if so, how it is set. For more information see [Behaviour of the post\_parameter\_change\_hook](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_post_parameter_change_hook).

When set to trigger, this hook will run even if the new Parameter value is equal to the previous one. This hook does not run if any `ExpectedParameter` value is backdated, or when parameter values are specified in an account creation request.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[PostParameterChangeHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postparameterchangehookarguments)

 | 

Hook arguments for the Post Parameter Change hook.

 |

**Return Type:**Optional[\[PostParameterChangeHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postparameterchangehookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#post_posting_adjustment_hook "Copy link to heading")post\_posting\_adjustment\_hook

`post_posting_adjustment_hook(adjusted_vault, snapshot_vault, hook_arguments)`

Used to override the Business As Usual (BAU) logic on the [post\_posting\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_hook) during the [Adjustments](/vault-core/5-8/EN/reference/adjustments) process.

Calculates the delta between snapshot\_vault and adjusted\_vault.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
adjusted\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the hook execution in the Adjustments timeline.

 |
| 

snapshot\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the original hook execution. For more information, see [Data used by snapshot\_vault](/vault-core/5-8/EN/reference/adjustments#data_used_by_snapshot_vault)

 |
| 

hook\_arguments

 | 

[PostPostingAdjustmentHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postpostingadjustmenthookarguments)

 | 

Hook arguments for the Post Posting Adjustment hook.

 |

**Return Type:**[PostPostingAdjustmentHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postpostingadjustmenthookresult)

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

## [](#post_posting_hook "Copy link to heading")post\_posting\_hook

`post_posting_hook(vault, hook_arguments)`

Carries out actions after deciding on whether to accept a Posting Instruction Batch in the `pre_posting_hook`.

This hook runs after the accepted Posting Instructions were inserted into the Postings Ledger.

For a product that wants to rebalance postings (for example, a product with credit lines), rebalancing would be done here.

chat\_bubble

When a `post_posting_hook` execution fails, it is marked as a failure in the database. Subsequent executions for that account or plan require this failure to be handled before they can continue. For more information, see [Behaviour of the post\_posting\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines#behaviour_of_the_post_posting_hook) and [Post Posting Republisher](/vault-core/5-8/EN/api/core_api#post_posting_republisher).

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[PostPostingHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postpostinghookarguments)

 | 

Hook arguments for the Post Posting hook.

 |

**Return Type:**Optional[\[PostPostingHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postpostinghookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#pre_parameter_change_hook "Copy link to heading")pre\_parameter\_change\_hook

`pre_parameter_change_hook(vault, hook_arguments)`

Determines if an Account-based Parameter value change should be permitted. The hook can reject the change by returning a [PreParameterChangeHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#preparameterchangehookresult) object with the rejection attribute populated.

This hook runs when any Account-based API call affects the Account’s resolved `ExpectedParameter` value (including a [future-dated value](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/generic#future_dated_parameter_values)), or the Account’s `INSTANCE` level `Parameter` value. It will run even if the new Parameter value is equal to the previous one.

This hook does not run if any `ExpectedParameter` value is backdated, or if the Account is not yet OPEN.

lightbulb

For more information about the behaviour of this hook, see [Behaviour of the pre\_parameter\_change\_hook](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_pre_parameter_change_hook).

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[PreParameterChangeHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#preparameterchangehookarguments)

 | 

Hook arguments for the Pre Parameter Change hook.

 |

**Return Type:**Optional[\[PreParameterChangeHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#preparameterchangehookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries) (Not available for future-dated changes), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation) (Not available for future-dated changes), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries) (Not available for future-dated changes), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events) (Not available for future-dated changes), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation) (Not available for future-dated changes), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) (Not available for future-dated changes), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries) (Not available for future-dated changes), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation) (Not available for future-dated changes), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries) (Not available for future-dated changes), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime) (Not available for future-dated changes), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation) (Not available for future-dated changes), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries) (Not available for future-dated changes), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation) (Not available for future-dated changes), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions) (Not available for future-dated changes)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#pre_posting_hook "Copy link to heading")pre\_posting\_hook

`pre_posting_hook(vault, hook_arguments)`

Determines if proposed Posting Instructions should be permitted.

This hook runs when a new Posting Instruction Batch is requested and the Smart Contract has the ability to accept or deny the batch.

A typical implementation of this hook might check if the total balance difference caused by the proposed batch can be serviced by the current balance of the Account.

If the Posting Instructions should be rejected, the Smart Contract should return a [Rejection](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) object via the [PrePostingHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookresult). The rejection reason and reason code are then exposed in the `contract_violations` field of the posting instruction in the Core API.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[PrePostingHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookarguments)

 | 

Hook arguments for the Pre Posting hook.

 |

**Return Type:**Optional[\[PrePostingHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)

## [](#scheduled_event_adjustment_hook "Copy link to heading")scheduled\_event\_adjustment\_hook

`scheduled_event_adjustment_hook(adjusted_vault, snapshot_vault, hook_arguments)`

Used to override the Business As Usual (BAU) logic on the [scheduled\_event\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#scheduled_event_hook) during the [Adjustments](/vault-core/5-8/EN/reference/adjustments) process.

Calculates the delta between snapshot\_vault and adjusted\_vault.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
adjusted\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the hook execution in the Adjustments timeline.

 |
| 

snapshot\_vault

 | 

[Vault](./vault)

 | 

Contains the state of Vault Core at the time of the original hook execution. For more information, see [Data used by snapshot\_vault](/vault-core/5-8/EN/reference/adjustments#data_used_by_snapshot_vault)

 |
| 

hook\_arguments

 | 

[ScheduledEventAdjustmentHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledeventadjustmenthookarguments)

 | 

Hook arguments for the Scheduled Event Adjustment hook.

 |

**Return Type:**[ScheduledEventAdjustmentHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledeventadjustmenthookresult)

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

## [](#scheduled_event_hook "Copy link to heading")scheduled\_event\_hook

`scheduled_event_hook(vault, hook_arguments)`

Carries out actions for the scheduled event type.

This hook runs when a schedule job for a schedule on an account is published by the [Scheduler](/vault-core/5-8/EN/reference/scheduler).

This hook supports deterministic posting and balance fetching. For more information, see [Account data fetchers](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#account_data_fetchers).

Note: Account Data or Hook Requirements can be defined to be fetched for a specific event type only by setting the `event_type` on the [fetch\_account\_data](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) or [requires](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#requires) decorators.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook

 |
| 

hook\_arguments

 | 

[ScheduledEventHookArguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledeventhookarguments)

 | 

Hook arguments for the Scheduled Event hook.

 |

**Return Type:**Optional[\[ScheduledEventHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledeventhookresult)\]

**Allowed API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_balances\_discrete\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_discrete_timeseries), [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_calendar\_events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendar_events), [get\_calendars\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_observation), [get\_calendars\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_calendars_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation), [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_last\_scheduled\_event\_datetimes\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_scheduled_event_datetimes_observation), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_parameters\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_client\_transactions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_hook\_execution\_id](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_parameter\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#balances), [calendars](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#calendars), [flags](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#flags), [last\_scheduled\_event\_datetimes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#last_scheduled_event_datetimes), [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#parameters), [postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements#postings)