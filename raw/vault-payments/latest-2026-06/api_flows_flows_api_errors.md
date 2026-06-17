---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/errors"
title: "Errors"
scraped_at: "2026-06-17T05:09:10.578Z"
images: 0
---

# Errors

`flows_api.errors` module

Common error handling messages

## [](#Error "Copy link to heading")Error

Error containing message, code and specific error details.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`str`

 | 

A human-readable description of the error. The exact message is subject to change and should  
not be used programmatically.

 |
| 

`code`

 | 

`[flows_api.api_error_code.Code](/vault-payments/latest/EN/api/flows/flows_api/api_error_code#Code)`

 | 

The code of the error.

 |