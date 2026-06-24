---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/logging"
title: "Logging"
scraped_at: "2026-06-17T15:47:44.327Z"
images: 0
---

# Logging

`flows_api.logging` module

The logging module provides flow writers with the ability to add human readable logs with explanations for decisions made within a specific step, or to provide additional context for the processing. These can be added within each step by calling `log("Example message")`.

## [](#log "Copy link to heading")log

Logs a message. When run in a Vault Payments environment the message will be added to the step history and visible in the Vault Payments App.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`msg`

 | 

`str`

 | 

A message to log.

 |