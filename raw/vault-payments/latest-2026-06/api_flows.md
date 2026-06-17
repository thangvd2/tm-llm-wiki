---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows"
title: "Instruction Flows"
scraped_at: "2026-06-17T05:08:41.396Z"
images: 0
---

# Instruction Flows

Instruction Flows are one of the core concepts in Vault Payments. They define how each payment is processed, offering a rich programming API to allow complex decisioning logic to be expressed in a straightforward way.

Flows are written in a subset of Python, and uploaded to Vault Payments as a Python file that defines all the behaviours of the flow. See the documentation for the [flows\_api](/vault-payments/latest/EN/api/flows/flows_api) Python module for specific information on the available API.

Each Flow contains a number of steps. These form a series of states that it moves between - at each step the Payments engine calls the appropriate step function(s) which can then update the Instruction being processed and select the next step to move to based on any properties of it that they choose.

[

download SDK Download



](/vault-payments/latest/EN/api/flows/sdk_download)

[

API Python Subset



](/vault-payments/latest/EN/api/flows/python_subset)