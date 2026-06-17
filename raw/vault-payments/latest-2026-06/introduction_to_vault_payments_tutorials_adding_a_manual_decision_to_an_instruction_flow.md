---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_a_manual_decision_to_an_instruction_flow"
title: "Adding a Manual Decision to an Instruction Flow"
scraped_at: "2026-06-17T05:07:15.071Z"
images: 0
---

# Adding a Manual Decision to an Instruction Flow

This tutorial covers how to make use of Manual Decisions in `Instruction Flows`. Prior reading of the [Concepts](/vault-payments/latest/EN/using_vault_payments/manual_decisions/) section is highly recommended. Similarly, Vault Payments provides a Python [SDK](/vault-payments/latest/EN/api/flows/) to help developing `Instruction Flows`. It is highly recommended to download and install the package before following this tutorial.

This tutorial will make use of the Instruction Flow from the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial.

In this tutorial we will be adding a manual decision to allow us to potentially approve payments even if the currency is not in our `allowlist`.

## [](#adding_a_manual_decision_step "Copy link to heading")Adding a Manual Decision step

Currently when we encounter a currency not included in our `allowlist` we set the outcome of the Instruction to `OUTCOME_REJECTED` and end the flow. Instead of immediately rejecting the payment, it would be nicer to let a business user decide if the Payment should be allowed.

chat\_bubble

This example does not mirror actual production use-cases of manual decisioning. It is instead intended to provide users with an easy method to test manual decisioning.

We can modify the flow as follows, adding a `ManualDecisionStep` with two possible decisions.

We first altered the `currency_check_resolve` function to return a new `manual_decision_step` as the next step instead of rejecting the Instruction and ending the flow. This `manual_decision_step` refers to a new `ManualDecisionStep` which takes 4 arguments. We will step through each now.

The `manual_decision_func` is responsible for returning the possible options a user can choose when making a decision. The ManualDecision object, must include a list of `Decision`. In the example the\`create\_decisions\` function returns two simple decisions, `accept` and `reject`. The `Instruction` will be paused after this function is run with the `processing_status` being set to `PROCESSING_STATUS_WAITING`.

The `resolve_func` is run after a manual decision has been made. It has access to the chosen decision via the `DecisionResult` object as its fourth argument. We have provided the `manual_decision_resolve` function here which checks the `decision_id` to know whether to continue processing or not. This `decision_id` will be one of the IDs of the decisions we created in the `create_decisions` function.

Since this step is asynchronous we must provide the relevant deadline functions. This includes the `calculate_deadline_func`, which must return a python `datetime` representing the date and time at which the `Instruction` will be deadlined. We provide the `manual_decision_deadline` function here which deadlines the step an hour after the `Instruction` was created. The `deadline_exceeded_func` defines the function which should be run if the deadline is hit. We provide the `manual_decision_deadline_exceeded` function here which adds an `Issue`, updates the outcome and ends the flow.

Once we have created a new `InstructionFlowVersion` with this updated code we can process an `Instruction` with a currency not in our allowlist. We should observe that the `Instruction` has a `processing_status` of `PROCESSING_STATUS_WAITING`. You will be able to see the Payment is waiting in the `Vault Payments App` and that a Manual Decision object is present with our `accept` and `reject` options ready to be acted upon. We can alternatively view the Manual Decisions via the `Manual Decisions API`. Since you can have multiple Manual Decisions per `Instruction`, we will first list them filtered by our `Instruction` ID.

chat\_bubble

You can alternatively use the Manual Decisions `batchGet` endpoint if you know the ID of your Manual Decision.

The response will look like this:

We can see our Manual Decision resource created with a `status` of `MANUAL_DECISION_STATUS_QUEUED`. We can also see our list of decisions and information about the associated `Instruction`. We can also choose to submit a decision for this `ManualDecision` object via the API instead of through the `Vault Payments App` if we wish.

The response will look like this:

We can see that the `status` of our Manual Decision has moved to `MANUAL_DECISION_STATUS_SUBMITTED`. We can also see our chosen decision in the `decision_result` field. The `user_id` field is empty since we did not provide it in our submission. Alternatively, if you submitted via the `Vault Payments App`, the `user_id` will be automatically populated using the authenticated user’s details.

If we check the status of our `Instruction` we should see that it has moved to `PROCESSING_STATUS_COMPLETED`. This means that the `Instruction` resumed processing, ran our `manual_decision_resolve` function and continued processing since we chose the `accept` decision. We have just dynamically created decisions in an `Instruction Flow`, chosen one of those decisions and then reacted to the chosen decision back in the `Instruction Flow`!

## [](#adding_decision_inputs "Copy link to heading")Adding decision inputs

We currently have a small set of decisions in our `ManualDecisionStep`, `accept` and `reject`. We can extend upon this by allowing the user to supply a reason for rejecting.

We have included a `DecisionInput` in our `reject` decision. Each decision can have a list of `DecisionInputs` which can be supplied when submitting a decision. In this case we have one string input called `reason`. We have also defined a `constraint` on this input. It must fit within some length bounds and match a regex. The `type` and `constraints` of the `DecisionInput` inform the `Vault Payments App` of what to show the user, for example showing a drop down list vs a date picker. These are also validated when submitting the Manual Decision.

We have also modified our `manual_decision_resolve` function to now use the `DecisionResult` `inputs` for setting the `outcome_reason` of the `Instruction`. `inputs` is a dictionary containing any inputs the user made. Since the ID of the `DecisionInput` is `reason` we can access it by using `result.inputs.reason`. We have safety here since Vault Payments will validate the inputs when you submit a decision against the `DecisionInputs` you have defined. If you wish to submit your decision via the `Manual Decisions API` rather than through the `Vault Payments App` you should include an `inputs` field in `decision_result`.

You should observe that the `Instruction` has the outcome `OUTCOME_REJECTED` and the `outcome_reason` is "Currency not supported currently". We have just added an abitrary input onto a manual decision which we can then use in our `Instruction Flow`. There are other types of `DecisionInput` and constraints which are explored [here](/vault-payments/latest/EN/using_vault_payments/manual_decisions/).

## [](#complete_flow_version_code "Copy link to heading")Complete Flow Version code

`Instruction Flow Version` source code developed in this tutorial: