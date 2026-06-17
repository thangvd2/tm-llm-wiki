---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/handling_errored_instructions"
title: "Handling errored Instructions"
scraped_at: "2026-06-17T05:07:40.107Z"
images: 0
---

# Handling errored Instructions

This guide covers why [Instructions](/vault-payments/latest/EN/api/payments_api#instructions) may enter a `PROCESSING_STATUS_ERRORED`, and how such Instructions should be dealt with.

## [](#understanding_processing_status_errored "Copy link to heading")Understanding `PROCESSING_STATUS_ERRORED`

Normally Instructions start out in `PROCESSING_STATUS_IN_PROGRESS` as they are being processed, and swiftly transition to `PROCESSING_STATUS_COMPLETED` as processing wraps up. If, however, an unexpected error occurs during processing that is not handled by the [Instruction Flow](/vault-payments/latest/EN/api/payments_api#instruction_flows), an Instruction may enter `PROCESSING_STATUS_ERRORED` where it will remain until it is dealt with.

Such processing errors typically fall into one of two categories:

-   Bugs in the code of an [Instruction Flow](/vault-payments/latest/EN/api/payments_api#instruction_flows) or executed rule that causes a Python exception to be raised
    
-   An [Integration](/vault-payments/latest/EN/api/payments_api#integrations) used in a flow step remains unreachable until retries are exhausted, and no `on_error` function has been provided
    

Fortunately future occurences of such errors can be prevented by adjusting the configuration, e.g. by making the Instruction Flow handle an edge case more gracefully. Such issues are common during development and testing of new configuration and not of concern in staging environments.

It must be kept in mind, however, that affected Instructions are left in a partially processed state, which means:

-   The Instruction data may be inconsistent or incomplete, and downstream systems and future Instructions cannot rely on it
    
-   Intended side-effects, such as fund movements and other state changes in external systems, may not have happened, or only happened partially
    
-   Since the platform guarantees sequential processing of correlated Instructions, future Instructions with the same `correlation_id` will be put on hold (`PROCESSING_STATUS_QUEUED`) until all prior Instructions have reached a final status (`PROCESSING_STATUS_COMPLETED` or `PROCESSING_STATUS_CANCELLED`)
    

It is therefore essential that such Instructions are dealt with in production environments. Vault Payments provides a set of [Instruction repair endpoints](/vault-payments/latest/EN/api/payments_api#instructions) that allow doing just that.

## [](#types_of_repairs "Copy link to heading")Types of repairs

Errored Instructions can be dealt with in three different ways. Which one is most appropriate depends on the type of error, and preferred processes.

chat\_bubble

The following endpoints can only be used with Instructions in PROCESSING\_STATUS\_ERRORED.

### [](#retrying "Copy link to heading")Retrying

The simplest and safest form of repair is retrying processing using the [Retry endpoint](/vault-payments/latest/EN/api/payments_api#_payments_v1_instructions_RetryInstructionResponse_RetryInstruction). It is appropriate when the cause of error is transient and has been resolved, such as an [Integration](/vault-payments/latest/EN/api/payments_api#integrations) which was temporarily unreachable.

This endpoint will reset the retry policy of the Instruction Flow step which failed originally, and cause processing to resume asynchronously. The Instruction should progress past the failed flow step if the original issue has been resolved, and should eventually reach `PROCESSING_STATUS_COMPLETED` automatically. All retried steps will reuse the same request IDs and other pseudo-randomly generated identifiers as previous attempts, allowing e.g. Integrations to act idempotently if they’ve seen the request before.

Calls to this endpoint will be recorded in the Instruction’s history for visibility:

### [](#cancellation "Copy link to heading")Cancellation

In some situations it may not be necessary or possible to repair an errored Instruction. Perhaps it is easier to create a new Instruction, or it is preferrable to resolve the issue outside of Vault Payments. For such cases `PROCESSING_STATUS_CANCELLED` is provided, which simply serves as an indication that an errored Instruction has been dealt with, without ever completing processing. This status can be set using the [Instruction update endpoint](/vault-payments/latest/EN/api/payments_api#_payments_v1_instruction_Instruction_UpdateInstruction):

Cancelling an Instruction simply updates its status, and unblocks any queued correlated Instructions.

Care must be taken when cancelling Instructions. Note:

-   As discussed, partially-processed Instructions can generally not be safely reasoned about, so correlated Instructions and downstream systems should act as if the cancelled Instruction does not exist.
    
-   Side effects in external systems caused by the Instruction are not automatically undone. It is recommended to either have an automatic or manual process in place to ensure such side effects are appropriately dealt with, and only cancel an Instruction once this has been completed.
    

Calls to this endpoint will be recorded in the Instruction’s history for visibility:

### [](#advanced_repairs "Copy link to heading")Advanced repairs

Some issues require more advanced tools. The [Repair endpoint](/vault-payments/latest/EN/api/payments_api#_payments_v1_instructions_RepairInstructionResponse_RepairInstruction) is intended for these situations. It provides three capabilities:

1.  Rewinding the Instruction to an earlier step in the flow
    
2.  Making arbitrary updates to field values
    
3.  Reprocessing the Instruction
    

#### [](#rewinding_to_an_earlier_step_or_state "Copy link to heading")Rewinding to an earlier step or state

Using the `rewind_to` option, the Instruction can optionally be rewound to any previous state. It expects the unique ID of an event from the Instruction’s history, and will subsequently rewind all fields on the Instruction to the values they had before the event. This also causes reprocessing to resume from the Instruction Flow step that was due to be executed next at the time.

For example, an Instruction may have the following history:

The Instruction failed on the second step. Ordinarily, if the Instruction is reprocessed, it would do so by attempting this step again. We can instead reprocess the Instruction from the very beginning, i.e. from before the first step, by providing the ID of the first step event in the `rewind_to` option:

The `context.example_field` would be reset to its original value, `""`.

lightbulb

It is not only possible to rewind the Instruction to an earlier step, but even to undo a repair itself, by rewinding to before the history event that represents a repair.

The Instruction history will be preserved when an Instruction is rewound.

warning

Any steps that are reprocessed this way will use new idempotency keys and other pseudo-random identifiers, so have the potential to cause new side-effects.

#### [](#updating_instruction_fields "Copy link to heading")Updating Instruction fields

The [Repair endpoint](/vault-payments/latest/EN/api/payments_api#_payments_v1_instructions_RepairInstructionResponse_RepairInstruction) also optionally allows making arbitrary updates to the Instruction payload and context, just as the Instruction Flow itself can. Unlike an Instruction Flow, it further allows updating fields like the `instruction_flow_id` and `instruction_flow_version_id`. The `id`, `correlation_id`, and `payment_id` cannot be updated, on the other hand.

When updating the Instruction Flow, the endpoint automatically ensures both Instruction Flow ID and version ID are consistent. Setting just the `instruction_flow_id` field will automatically select the latest version for the new flow. This is useful when the original issue has been fixed in a new version of the flow, or if an entirely new flow has been created to help finish processing of the Instruction. Note that the new flow must contain a step with the same name as the one that would have been executed next in the old flow. If the old and new flow do not share the same steps, the `rewind_to` option can be used to reprocess from an earlier point in the flow, or from the very beginning. If field updates are combined with rewinding, they are always applied after the Instruction has already been rewound.

#### [](#reprocessing "Copy link to heading")Reprocessing

While the other two options are optional, calling the [Repair endpoint](/vault-payments/latest/EN/api/payments_api#_payments_v1_instructions_RepairInstructionResponse_RepairInstruction) always implies reprocessing of the Instruction from whichever step it failed on, or whichever step is next in the flow if it has been rewound. Reprocessing is done asynchronously, after the endpoint has been called. Any steps that are reprocessed using this endpoint use new idempotency keys and other pseudo-random identifiers, so they are likely to cause new side-effects. This is deliberate and should be expected, since this endpoint is used to fix issues by modifying the Instruction, so it would not make sense to make steps act idempotently, they must instead be rerun using the new data.

warning

Care must be taken when using this endpoint. It is powerful, but requires a detailed understanding of the Instruction Flow and the exact cause of the original issue.

Repairs are recorded in the Instruction’s history for visibility:

It is possible to preview a repair by using the `dry_run` option in the request. This will simply return the Instruction after the repair has been applied, before reprocessing has taken place. The repair will not be persisted and no processing will take place when using the dry-run option.

## [](#caveats_and_when_not_to_use_repair "Copy link to heading")Caveats and when not to use repair

Repairs should be an exception, often used after an incident, and are not intended to be used as part of a routine process. Instructions should never intentionally be caused to go into `PROCESSING_STATUS_ERRORED`. Instruction Flows should be built to anticipate and gracefully deal with edge cases. This may involve fixing a code issue, validating against unset fields and invalid values, setting a more appropriate retry policy, and defining an `on_error` function for steps that reach out to Integrations. Some data issues can be dealt with using [Manual Decisions](/vault-payments/latest/EN/using_vault_payments/manual_decisions) in a well-defined manner.