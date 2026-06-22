---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/scheduling_instructions_with_a_calendar"
title: "Scheduling Instructions with a Calendar"
scraped_at: "2026-06-17T15:45:40.371Z"
images: 0
---

# Scheduling Instructions with a Calendar

This tutorial covers setting up a [Calendar](/vault-payments/latest/EN/using_vault_payments/scheduling/) and using it within an [Instruction Flow](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_flows) to schedule an Instruction to be processed according to a payment scheme’s processing window requirements. Prior reading of the [Concepts](/vault-payments/latest/EN/using_vault_payments/scheduling/) section is highly recommended.

This tutorial will make use of the Instruction Flow from the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial.

In this tutorial we will create a `Calendar` which models the settlement time periods of a fictitious scheme. We will then alter an existing Instruction Flow to make use of this `Calendar` to calculate the target settlement period of an `Instruction`. We will then use the calculated period to pause the `Instruction` until that period begins. Finally, we will use a development-only endpoint to trigger the immediate resumption of the `Instruction`.

## [](#creating_a_calendar "Copy link to heading")Creating a Calendar

For this tutorial we will be using an imaginary scheme TMNext, which mandates the settlement of `INBOUND` `FIToFICustomerCreditTransfer` according to the following scheme rules:

-   Settlement occurs one business day after the [Instruction](/vault-payments/latest/EN/api/payments_api#instruction) is received from the scheme - A business day is Monday to Friday, with the exclusion of New Year’s Day
    
    -   Settlement can occur between 02:00 and 18:00 in the Europe/London time zone, taking into account daylight saving time. The settlement window for every business day is therefore 02:00-18:00 GMT during standard time and 02:00-18:00 BST during daylight saving time.
        
    

### [](#the_tmnext_calendar "Copy link to heading")The TMNext Calendar

First we create a [BusinessDayDefinition](/vault-payments/latest/EN/api/payments_api#businessdaydefinition) resource which models the business days of the TMNext scheme:

Then we create a [Calendar](/vault-payments/latest/EN/api/payments_api#calendar) resource which models the settlement periods of the TMNext scheme:

You have now created a `Calendar` which models the settlement periods of the TMNext scheme. Over time, you can [add or remove](/vault-payments/latest/EN/api/payments_api#businessdaydefinitiondate) included and excluded business dates on the `BusinessDayDefinition`. Any `Calendar` using that `BusinessDayDefinition` will reflect the business dates changes in its period representation.

## [](#using_the_calendar "Copy link to heading")Using the Calendar

You can now use `TMNext_Settlement` Calendar in Flows to schedule Instructions for a target settlement period. To do this, we need to calculate the target settlement period using the information on the `Instruction` via a [PeriodCalculationStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#period_calculation_step). We will then use the returned target period to pause the `Instruction` until the period begins via a [ScheduleInstructionStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#schedule_instruction_step).

### [](#calculating_a_calendarperiod_in_an_instruction_flow "Copy link to heading")Calculating a CalendarPeriod in an Instruction Flow

We will modify the Instruction Flow created as part of the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial to add a new step which will calculate the target settlement period of an `Instruction`. According to the TMNext rules, the target period is the business day after the receipt of the `Instruction`.

We add a [PeriodCalculationStep](/vault-payments/latest/EN/api/flows/flows_api#PeriodCalculationStep) before the existing `core_postings_step` as follows:

First we will have to alter the `account_selection` function to return the new `settlement_period_calculation_step` as the next step instead of `core_postings_step`. The `settlement_period_calculation_step` takes two function arguments.

The `request_func` builds the request to calculate the target settlement period. In this case we use as calculation reference the date from the `Instruction` create timestamp, and we ask to calculate the next period (`offset=1`) using the previously created `TMNext_Settlement` `Calendar`.

The `resolve_func` receives the calculated next settlement `CalendarPeriod`, and stores it on the ``Instruction’s `context`` so that it can be accessed in the subsequent steps.

### [](#calculating_a_calendarperiod_in_an_instruction_flow_2 "Copy link to heading")Calculating a CalendarPeriod in an Instruction Flow

We will now use the calculated target settlement period to pause the `Instruction` until the period begins on the next business day at 02:00 in the Europe/London time zone.

We add a [ScheduleInstructionStep](/vault-payments/latest/EN/api/flows/flows_api#ScheduleInstructionStep) between the newly added `settlement_period_calculation` step and the existing `core_postings` step as follows:

First we will have to alter the `settlement_period_calculation_resolve` function to return the new `schedule_instruction_settlement_step` as the next step instead of `core_postings_step`. The `schedule_instruction_settlement_step` takes four function arguments.

The `schedule_instruction_func` returns a previously calculated period, in this case accessing the settlement period which the `settlement_period_calculation` step stored on the `context`. The `Instruction` will be paused until the settlement period begins.

The `resolve_func` is run when the settlement period begins, progressing the `Instruction` through the rest of the Flow.

Since this step is asynchronous we must provide the relevant deadline functions. This includes the `calculate_deadline_func`, which must return a python datetime representing the date and time at which the `Instruction` will be deadlined; in a `ScheduleInstructionStep` this is generally the `period_range.to` end boundary of the target period. The `deadline_exceeded_func` defines the optional function which will be run if the deadline is hit; in a `ScheduleInstructionStep` it handles the scenarios where the `Instruction` does not resume within the target period. Here we add an [Issue](/vault-payments/latest/EN/api/flows/flows_api/instruction#Issue), update the outcome and end the flow.

## [](#processing_a_scheduled_instruction "Copy link to heading")Processing a scheduled Instruction

Once you have uploaded the new `InstructionFlowVersion` [via our API](/vault-payments/latest/EN/api/payments_api#instructionflowversion) you can process an `Instruction` according to the fictitious TMNext processing time rules.

First we initiate an inbound FI to FI Customer Transfer `pacs.008` `Instruction`:

The response will look like this:

You can search for the Payment in the Vault Payments App and you will be able to see that it is waiting with `processing_status: PROCESSING_STATUS_WAITING`.

### [](#manually_resume_an_instruction "Copy link to heading")Manually resume an Instruction

You can use the development-only [Resume](/vault-payments/latest/EN/api/payments_api#sandbox_instructions) endpoint to immediately resume an `Instruction`, without having to wait for the target period to begin. You will need to include the `Instruction` `id` returned by the previous call:

## [](#complete_flow_version_code "Copy link to heading")Complete Flow Version code

`Instruction Flow Version` source code developed in this tutorial: