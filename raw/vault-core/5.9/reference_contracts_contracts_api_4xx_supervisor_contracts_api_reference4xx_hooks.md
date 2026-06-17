---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks"
title: "Hooks"
scraped_at: "2026-06-17T05:01:55.212Z"
images: 0
---

# Hooks

## [](#activation_hook "Copy link to heading")activation\_hook

`activation_hook(vault, hook_arguments)`

Carries out actions required when the plan opens. If `event_types` are defined on a Supervisor Contract, then this hook must be defined in order to activate a Plan on that Supervisor Contract.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook.

 |
| 

hook\_arguments

 | 

[SupervisorActivationHookArguments](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisoractivationhookarguments)

 | 

Hook arguments for the Activation hook.

 |

**Return Type:**Optional[\[SupervisorActivationHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisoractivationhookresult)\]

**Allowed API Functions:** [get\_calendar\_events](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_calendar_events), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_name), [get\_plan\_opening\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_plan_opening_datetime)

**Allowed Supervisee API Functions:** [get\_alias](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias)

**Allowed Requirements:** [calendar](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#calendar)

## [](#conversion_hook "Copy link to heading")conversion\_hook

`conversion_hook(vault, hook_arguments)`

Carries out actions after a new contract has been activated on this plan - the contract template is upgraded to a new version.

If `event_types` are defined on a Supervisor Contract, then this hook must be defined in order to convert a Plan to that Supervisor Contract.

**Arguments**

  
| name | type | description |
| --- | --- | --- |
| 
vault

 | 

[Vault](./vault)

 | 

Vault functions for this hook.

 |
| 

hook\_arguments

 | 

[SupervisorConversionHookArguments](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorconversionhookarguments)

 | 

Hook arguments for the Conversion hook.

 |

**Return Type:**Optional[\[SupervisorConversionHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorconversionhookresult)\]

**Allowed API Functions:** [get\_calendar\_events](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_calendar_events), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_name), [get\_plan\_opening\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_plan_opening_datetime)

**Allowed Supervisee API Functions:** [get\_alias](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_parameter\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries)

**Allowed Requirements:** [calendar](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#calendar), [data\_scope](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#data_scope), [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#parameters)

## [](#post_posting_hook "Copy link to heading")post\_posting\_hook

`post_posting_hook(vault, hook_arguments)`

Carries out actions after a supervisee has decided whether to accept a batch of posting instructions in its `pre_posting_hook` hook.

This hook is called after the accepted posting instructions were inserted into the Vault posting ledger.

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

[SupervisorPostPostingHookArguments](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorpostpostinghookarguments)

 | 

Hook arguments for the Post Posting hook.

 |

**Return Type:**Optional[\[SupervisorPostPostingHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorpostpostinghookresult)\]

**Allowed API Functions:** [get\_calendar\_events](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_calendar_events), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_name), [get\_plan\_opening\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_plan_opening_datetime)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_last\_execution\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_parameter\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [balances](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#balances), [calendar](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#calendar), [data\_scope](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#data_scope), [flags](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#parameters), [postings](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#postings), [supervisee\_hook\_directives](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#supervisee_hook_directives)

## [](#pre_posting_hook "Copy link to heading")pre\_posting\_hook

`pre_posting_hook(vault, hook_arguments)`

Determines if one or more proposed posting instructions should be allowed.

If a Supervisor Contract does not explicitly state that this hook is supervised in its metadata, then supervision of this hook will not occur.

The [SupervisionExecutionMode](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#supervisionexecutionmode) specifies the order of execution of supervisor and supervisee hooks.

A typical implementation of this hook might check if the total balance difference caused by the list of `PostingInstructions` can be serviced by the total balance across all supervisee accounts.

If you want the posting instructions to be rejected, the contract must return the [Rejection](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) object via the [SupervisorPrePostingHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorprepostinghookresult). This then exposes the rejection reason and reason code in the `contract_violations` field of the `PostingInstructionBatch` in the Core API.

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

[SupervisorPrePostingHookArguments](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorprepostinghookarguments)

 | 

Hook arguments for the Pre Posting hook.

 |

**Return Type:**Optional[\[SupervisorPrePostingHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorprepostinghookresult)\]

**Allowed API Functions:** [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_name), [get\_plan\_opening\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_plan_opening_datetime)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_observation](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation), [get\_balances\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_parameter\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations)

**Allowed Requirements:** [data\_scope](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#data_scope), [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#parameters)

**Allowed Account Fetcher Requirements:** [balances](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements#balances)

## [](#scheduled_event_hook "Copy link to heading")scheduled\_event\_hook

`scheduled_event_hook(vault, hook_arguments)`

Carries out actions for the scheduled event type.

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

[SupervisorScheduledEventHookArguments](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorscheduledeventhookarguments)

 | 

Hook arguments for the Scheduled hook.

 |

**Return Type:**Optional[\[SupervisorScheduledEventHookResult](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorscheduledeventhookresult)\]

**Allowed API Functions:** [get\_calendar\_events](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_calendar_events), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_name), [get\_plan\_opening\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_plan_opening_datetime)

**Allowed Supervisee API Functions:** [get\_account\_activation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_activation_datetime), [get\_account\_creation\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_account_creation_datetime), [get\_alias](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_alias), [get\_balances\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries), [get\_client\_transactions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions), [get\_flag\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries), [get\_hook\_execution\_id](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_execution_id), [get\_hook\_name](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_name), [get\_hook\_result](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result), [get\_last\_execution\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_last_execution_datetime), [get\_parameter\_timeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries), [get\_permitted\_denominations](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_permitted_denominations), [get\_posting\_instructions](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_posting_instructions)

**Allowed Requirements:** [balances](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#balances), [calendar](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#calendar), [data\_scope](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#data_scope), [flags](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#flags), [last\_execution\_datetime](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#last_execution_datetime), [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#parameters), [postings](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#postings), [supervisee\_hook\_directives](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#supervisee_hook_directives)