---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/vault_payments_api/permission_scopes"
title: "Permission Scopes"
scraped_at: "2026-06-17T15:45:54.994Z"
images: 0
---

# Permission Scopes

By default, JSON Web Tokens (JWTs) used in API requests are authorised based on the API scopes within the JWT. Scopes can be specified either within the scope `scope` or `scp` claims.

The following tables provide lists of Scopes and the API endpoints they are associated with:

## [](#vault_payments_apis "Copy link to heading")Vault Payments APIs

 
| Scope | Endpoints |
| --- | --- |
| 
payments.3ds\_records:read

 | 

GET /v1/cards/3ds-records:batchGet  
GET /v1/cards/3ds-records

 |
| 

payments.3ds\_records:write

 | 

PUT /v1/cards/3ds-records/\*

 |
| 

payments.account\_links:read

 | 

GET /v1/account-links  
GET /v1/account-links:batchGet  
GET /v1/account-links/\*

 |
| 

payments.account\_links:write

 | 

POST /v1/account-links  
PUT /v1/account-links/\*

 |
| 

payments.account\_ranges:read

 | 

GET /v1/cards/account-ranges:batchGet  
GET /v1/cards/account-ranges  
GET /sandbox/account-ranges:cleartextBatchGet  
GET /sandbox/account-ranges

 |
| 

payments.account\_ranges:write

 | 

POST /v1/cards/account-ranges  
POST /sandbox/account-ranges

 |
| 

payments.aggregations.payments:read

 | 

POST /v1/aggregations/payments

 |
| 

payments.app.dashboard\_versions:read

 | 

GET /v1/app/dashboard-versions/\*  
GET /v1/app/dashboard-versions:batchGet  
GET /v1/app/dashboard-versions

 |
| 

payments.app.dashboard\_versions:write

 | 

POST /v1/app/dashboard-versions

 |
| 

payments.app.dashboards:read

 | 

GET /v1/app/dashboards/\*  
GET /v1/app/dashboards:batchGet  
GET /v1/app/dashboards  
POST /v1/app/dashboard-versions:validate

 |
| 

payments.app.dashboards:write

 | 

POST /v1/apps/dashboards  
PUT /v1/app/dashboards

 |
| 

payments.app.template\_versions:read

 | 

GET /v1/app/template-versions  
GET /v1/app/template-versions:batchGet  
GET /v1/app/template-versions/\*  
POST /v1/app/template-versions:validate

 |
| 

payments.app.template\_versions:write

 | 

POST /v1/app/template-versions

 |
| 

payments.app.templates:read

 | 

GET /v1/app/templates  
GET /v1/app/templates:batchGet  
GET /v1/app/templates/\*

 |
| 

payments.app.templates:write

 | 

POST /v1/app/templates  
PUT /v1/app/templates

 |
| 

payments.calendars:read

 | 

GET /v1/calendars:batchGet  
GET /v1/calendars  
POST /v1/calendars:calculatePeriod  
GET /v1/business-day-definitions:batchGet

 |
| 

payments.calendars:write

 | 

POST /v1/calendars  
POST /v1/business-day-definitions  
POST /v1/business-day-definitions/\*:addDates  
POST /v1/business-day-definitions/\*:removeDates

 |
| 

payments.card\_order\_batches:read

 | 

GET /v1/cards/card-order-batches

 |
| 

payments.card\_orders:read

 | 

GET /v1/cards/card-orders:batchGet  
GET /v1/cards/card-orders

 |
| 

payments.card\_orders:write

 | 

POST /v1/cards/card-orders  
PUT /v1/cards/card-orders/\*

 |
| 

payments.card\_products:read

 | 

GET /v1/cards/card-products:batchGet  
GET /v1/cards/card-products

 |
| 

payments.card\_products:write

 | 

POST /v1/cards/card-products  
PUT /v1/cards/card-products/\*  
POST /v1/cards/card-products/\*:addAccountRanges  
POST /v1/cards/card-products/\*:removeAccountRanges

 |
| 

payments.card\_tokens:read

 | 

GET /v1/cards/card-tokens:batchGet  
GET /v1/cards/card-tokens

 |
| 

payments.card\_tokens:write

 | 

PUT /v1/cards/card-tokens/\*

 |
| 

payments.cardholders:read

 | 

GET /v1/cards/cardholders:batchGet  
GET /v1/cards/cardholders

 |
| 

payments.cardholders:write

 | 

POST /v1/cards/cardholders  
PUT /v1/cards/cardholders/\*  
DELETE /v1/cards/cardholders/\*

 |
| 

payments.core\_versions:read

 | 

GET /v1/core-versions  
GET /v1/core-versions:batchGet  
GET /v1/core-versions/\*

 |
| 

payments.core\_versions:write

 | 

POST /v1/core-versions

 |
| 

payments.cores:read

 | 

GET /v1/cores  
GET /v1/cores:batchGet  
GET /v1/cores/\*

 |
| 

payments.cores:write

 | 

POST /v1/cores  
PUT /v1/cores/\*

 |
| 

payments.files:read

 | 

GET /v1/files/\*  
GET /v1/files

 |
| 

payments.files:write

 | 

POST /v1/files

 |
| 

payments.instruction\_batches:read

 | 

GET /v1/instruction-batches/\*  
GET /v1beta/instruction-batches/\*  
GET /v1/instruction-batches:batchGet  
GET /v1beta/instruction-batches:batchGet  
GET /v1/instruction-batches  
GET /v1beta/instruction-batches

 |
| 

payments.instruction\_file\_specification\_versions:read

 | 

POST /v1/instruction-file-specification-versions:validate  
POST /v1beta/instruction-file-specification-versions:validate  
GET /v1/instruction-file-specification-versions  
GET /v1beta/instruction-file-specification-versions  
GET /v1/instruction-file-specification-versions:batchGet  
GET /v1beta/instruction-file-specification-versions:batchGet  
GET /v1/instruction-file-specification-versions/\*  
GET /v1beta/instruction-file-specification-versions/\*

 |
| 

payments.instruction\_file\_specification\_versions:write

 | 

POST /v1/instruction-file-specification-versions  
POST /v1beta/instruction-file-specification-versions

 |
| 

payments.instruction\_file\_specifications:read

 | 

GET /v1/instruction-file-specifications  
GET /v1beta/instruction-file-specifications  
GET /v1/instruction-file-specifications:batchGet  
GET /v1beta/instruction-file-specifications:batchGet  
GET /v1/instruction-file-specifications/\*  
GET /v1beta/instruction-file-specifications/\*

 |
| 

payments.instruction\_file\_specifications:write

 | 

POST /v1/instruction-file-specifications  
POST /v1beta/instruction-file-specifications  
PUT /v1/instruction-file-specifications/\*  
PUT /v1beta/instruction-file-specifications/\*

 |
| 

payments.instruction\_files:read

 | 

GET /v1/instruction-files/\*  
GET /v1beta/instruction-files/\*  
GET /v1/instruction-files:batchGet  
GET /v1beta/instruction-files:batchGet  
GET /v1/instruction-files  
GET /v1beta/instruction-files

 |
| 

payments.instruction\_files:write

 | 

POST /v1/instruction-files:initiate  
POST /v1beta/instruction-files:initiate  
PUT /v1/instruction-files/\*  
PUT /v1beta/instruction-files/\*

 |
| 

payments.instruction\_flow\_versions:read

 | 

GET /v1/instruction-flow-versions  
GET /v1/instruction-flow-versions:batchGet  
GET /v1/instruction-flow-versions/\*  
POST /v1/instruction-flow-versions:validate

 |
| 

payments.instruction\_flow\_versions:write

 | 

POST /v1/instruction-flow-versions

 |
| 

payments.instruction\_flows:read

 | 

GET /v1/instruction-flows  
GET /v1/instruction-flows:batchGet  
GET /v1/instruction-flows/\*

 |
| 

payments.instruction\_flows:write

 | 

POST /v1/instruction-flows  
PUT /v1/instruction-flows/\*

 |
| 

payments.instructions:initiate

 | 

POST /v1/instructions:initiate

 |
| 

payments.instructions:process

 | 

POST /v1/instructions:process

 |
| 

payments.instructions:read

 | 

GET /v1/instructions/\*  
GET /v1/instructions:batchGet  
GET /v1/instructions

 |
| 

payments.instructions:repair

 | 

POST /v1/instructions/\*:repair

 |
| 

payments.instructions:retry

 | 

POST /v1/instructions/\*:retry

 |
| 

payments.instructions:update

 | 

PUT /v1/instructions/\*

 |
| 

payments.instructions:write

 | 

POST /v1/instructions:initiate  
POST /v1/instructions:process  
POST /v1/instructions/\*:retry  
POST /v1/instructions:bulkRetry  
PUT /v1/instructions/\*  
POST /v1/instructions/\*:repair

 |
| 

payments.integration\_versions:read

 | 

GET /v1/integration-versions  
GET /v1/integration-versions:batchGet  
GET /v1/integration-versions/\*

 |
| 

payments.integration\_versions:retry

 | 

POST /v1/integration-versions/\*:retry

 |
| 

payments.integration\_versions:write

 | 

POST /v1/integration-versions  
POST /v1/integration-versions/\*:retry

 |
| 

payments.integrations:read

 | 

GET /v1/integrations  
GET /v1/integrations:batchGet  
GET /v1/integrations/\*

 |
| 

payments.integrations:write

 | 

POST /v1/integrations  
PUT /v1/integrations/\*  
POST /v1/integrations:callback/\*

 |
| 

payments.issuance:read

 | 

GET /v1/cards/issuance:batchGet  
GET /v1/cards/issuance/\*  
POST /v1/cards/issuance/\*:getDetails  
POST /v1/cards/issuance/\*:getPIN  
GET /v1/cards/issuance  
GET /sandbox/cards/\*:cleartextCardDetails  
GET /sandbox/cards/\*:cleartextPIN

 |
| 

payments.issuance:write

 | 

POST /v1/cards/issuance:issue  
PUT /v1/cards/issuance/\*  
POST /v1/cards/sessions:initiate  
POST /v1/cards/issuance/\*:updatePIN  
POST /v1/cards/issuance/\*:resetPINAttempts  
POST /v1/cards/issuance/\*:resetLVT  
POST /v1/cards/issuance/\*:replace  
POST /sandbox/cards/\*:updateCleartextPIN

 |
| 

payments.mandates:read

 | 

GET /v1beta/mandates/\*  
GET /v1/mandates/\*  
GET /v1/mandates:batchGet  
GET /v1beta/mandates  
GET /v1/mandates

 |
| 

payments.manual\_decisions:read

 | 

GET /v1/manual-decisions/\*  
GET /v1/manual-decisions:batchGet  
GET /v1/manual-decisions

 |
| 

payments.manual\_decisions:write

 | 

POST /v1/manual-decisions/\*:submit

 |
| 

payments.membership\_directories:read

 | 

GET /v1/membership-directories  
GET /v1/membership-directories:batchGet  
GET /v1/membership-directories/\*

 |
| 

payments.membership\_directories:write

 | 

POST /v1/membership-directories  
PUT /v1/membership-directories/\*

 |
| 

payments.membership\_directory\_records:read

 | 

POST /v1/membership-directory-records:search

 |
| 

payments.membership\_directory\_versions:read

 | 

GET /v1/membership-directory-versions  
GET /v1/membership-directory-versions:batchGet  
GET /v1/membership-directory-versions/\*

 |
| 

payments.membership\_directory\_versions:write

 | 

POST /v1/membership-directory-versions

 |
| 

payments.openmetrics:read

 | 

GET /v1/openmetrics/metrics  
GET /v1/openmetrics/federate

 |
| 

payments.parameter\_values:read

 | 

GET /v1/parameter-values  
GET /v1/parameter-values:batchGet  
GET /v1/parameter-values/\*

 |
| 

payments.parameter\_values:write

 | 

POST /v1/parameter-values  
PUT /v1/parameter-values/\*

 |
| 

payments.parameters:read

 | 

GET /v1/parameters  
GET /v1/parameters:batchGet  
GET /v1/parameters/\*

 |
| 

payments.parameters:write

 | 

POST /v1/parameters  
PUT /v1/parameters/\*

 |
| 

payments.payees:read

 | 

POST /v1/payees:search  
GET /v1/payees/\*  
GET /v1/payees:batchGet

 |
| 

payments.payees:write

 | 

POST /v1/payees  
PUT /v1/payees/\*

 |
| 

payments.payment\_instruments:read

 | 

POST /v1/payment-instruments:search  
GET /v1/payment-instruments  
GET /v1/payment-instruments:batchGet  
GET /v1/payment-instruments/\*

 |
| 

payments.payment\_instruments:write

 | 

POST /v1/payment-instruments  
PUT /v1/payment-instruments/\*

 |
| 

payments.payments:read

 | 

GET /v1/payments/\*  
GET /v1/payments:batchGet  
POST /v1/payments:search

 |
| 

payments.roles:read

 | 

GET /v1/roles  
GET /v1/roles:batchGet

 |
| 

payments.roles:write

 | 

POST /v1/roles  
PUT /v1/roles/\*

 |
| 

payments.rule\_set\_versions:read

 | 

GET /v1/rule-set-versions  
GET /v1/rule-set-versions:batchGet  
GET /v1/rule-set-versions/\*

 |
| 

payments.rule\_set\_versions:write

 | 

POST /v1/rule-set-versions

 |
| 

payments.rule\_sets:read

 | 

GET /v1/rule-sets  
GET /v1/rule-sets:batchGet  
GET /v1/rule-sets/\*

 |
| 

payments.rule\_sets:write

 | 

POST /v1/rule-sets  
PUT /v1/rule-sets/\*

 |
| 

payments.rule\_versions:read

 | 

GET /v1/rule-versions  
GET /v1/rule-versions:batchGet  
GET /v1/rule-versions/\*

 |
| 

payments.rule\_versions:write

 | 

POST /v1/rule-versions

 |
| 

payments.rules:read

 | 

GET /v1/rules  
GET /v1/rules:batchGet  
GET /v1/rules/\*

 |
| 

payments.rules:write

 | 

POST /v1/rules  
PUT /v1/rules/\*

 |
| 

payments.sandbox:read

 | 

GET /sandbox/simulate/fedwire/\*  
GET /sandbox/simulate/swift-agi/\*

 |
| 

payments.sandbox:write

 | 

POST /sandbox/simulate/cards/authorisation-initiations  
POST /sandbox/simulate/cards/card-management-initiations  
POST /sandbox/simulate/cards/inquiry-initiations  
POST /sandbox/simulate/cards/reversal-initiations  
POST /sandbox/simulate/cards/financial-initiations  
POST /sandbox/simulate/fedwire  
POST /sandbox/instructions/\*:resume  
POST /sandbox/simulate/swift-agi

 |
| 

payments:read

 | 

GET /v1/cards/account-ranges:batchGet  
GET /v1/cards/account-ranges  
GET /v1/cards/card-products:batchGet  
GET /v1/cards/card-products  
GET /v1/parameters  
GET /v1/parameters:batchGet  
GET /v1/parameters/\*  
GET /v1/parameter-values  
GET /v1/parameter-values:batchGet  
GET /v1/parameter-values/\*  
GET /v1/cards/issuance:batchGet  
GET /v1/cards/issuance/\*  
POST /v1/cards/issuance/\*:getDetails  
POST /v1/cards/issuance/\*:getPIN  
GET /v1/cards/issuance  
GET /v1beta/mandates/\*  
GET /v1/mandates/\*  
GET /v1/mandates:batchGet  
GET /v1beta/mandates  
GET /v1/mandates  
POST /v1/payees:search  
GET /v1/payees/\*  
GET /v1/payees:batchGet  
GET /v1/manual-decisions/\*  
GET /v1/manual-decisions:batchGet  
GET /v1/manual-decisions  
GET /v1/membership-directories  
GET /v1/membership-directories:batchGet  
GET /v1/membership-directories/\*  
GET /v1/membership-directory-versions  
GET /v1/membership-directory-versions:batchGet  
GET /v1/membership-directory-versions/\*  
POST /v1/membership-directory-records:search  
GET /v1/rules  
GET /v1/rules:batchGet  
GET /v1/rules/\*  
GET /v1/rule-versions  
GET /v1/rule-versions:batchGet  
GET /v1/rule-versions/\*  
GET /v1/rule-sets  
GET /v1/rule-sets:batchGet  
GET /v1/rule-sets/\*  
GET /v1/rule-set-versions  
GET /v1/rule-set-versions:batchGet  
GET /v1/rule-set-versions/\*  
GET /v1/instruction-batches/\*  
GET /v1beta/instruction-batches/\*  
GET /v1/instruction-batches:batchGet  
GET /v1beta/instruction-batches:batchGet  
GET /v1/instruction-batches  
GET /v1beta/instruction-batches  
GET /v1/instruction-files/\*  
GET /v1beta/instruction-files/\*  
GET /v1/instruction-files:batchGet  
GET /v1beta/instruction-files:batchGet  
GET /v1/instruction-files  
GET /v1beta/instruction-files  
GET /sandbox/simulate/fedwire/\*  
GET /v1/cards/cardholders:batchGet  
GET /v1/cards/cardholders  
POST /v1/aggregations/payments  
GET /v1/payments/\*  
GET /v1/payments:batchGet  
POST /v1/payments:search  
GET /v1/integrations  
GET /v1/integrations:batchGet  
GET /v1/integrations/\*  
GET /v1/integration-versions  
GET /v1/integration-versions:batchGet  
GET /v1/integration-versions/\*  
GET /v1/cores  
GET /v1/cores:batchGet  
GET /v1/cores/\*  
GET /v1/core-versions  
GET /v1/core-versions:batchGet  
GET /v1/core-versions/\*  
GET /v1/instruction-flows  
GET /v1/instruction-flows:batchGet  
GET /v1/instruction-flows/\*  
GET /v1/instruction-flow-versions  
GET /v1/instruction-flow-versions:batchGet  
GET /v1/instruction-flow-versions/\*  
POST /v1/instruction-flow-versions:validate  
GET /v1/app/templates  
GET /v1/app/templates:batchGet  
GET /v1/app/templates/\*  
GET /v1/app/template-versions  
GET /v1/app/template-versions:batchGet  
GET /v1/app/template-versions/\*  
POST /v1/app/template-versions:validate  
GET /v1/instruction-file-specifications  
GET /v1beta/instruction-file-specifications  
GET /v1/instruction-file-specifications:batchGet  
GET /v1beta/instruction-file-specifications:batchGet  
GET /v1/instruction-file-specifications/\*  
GET /v1beta/instruction-file-specifications/\*  
POST /v1/instruction-file-specification-versions:validate  
POST /v1beta/instruction-file-specification-versions:validate  
GET /v1/instruction-file-specification-versions  
GET /v1beta/instruction-file-specification-versions  
GET /v1/instruction-file-specification-versions:batchGet  
GET /v1beta/instruction-file-specification-versions:batchGet  
GET /v1/instruction-file-specification-versions/\*  
GET /v1beta/instruction-file-specification-versions/\*  
GET /v1/cards/3ds-records:batchGet  
GET /v1/cards/3ds-records  
GET /sandbox/cards/\*:cleartextCardDetails  
GET /sandbox/cards/\*:cleartextPIN  
GET /v1/cards/card-tokens:batchGet  
GET /v1/cards/card-tokens  
GET /v1/account-links  
GET /v1/account-links:batchGet  
GET /v1/account-links/\*  
POST /v1/payment-instruments:search  
GET /v1/payment-instruments  
GET /v1/payment-instruments:batchGet  
GET /v1/payment-instruments/\*  
GET /v1/files/\*  
GET /v1/files  
GET /v1/calendars:batchGet  
GET /v1/calendars  
POST /v1/calendars:calculatePeriod  
GET /v1/business-day-definitions:batchGet  
GET /v1/cards/card-orders:batchGet  
GET /v1/cards/card-orders  
GET /v1/cards/card-order-batches  
GET /sandbox/simulate/swift-agi/\*  
GET /v1/app/dashboards/\*  
GET /v1/app/dashboards:batchGet  
GET /v1/app/dashboards  
GET /v1/app/dashboard-versions/\*  
GET /v1/app/dashboard-versions:batchGet  
GET /v1/app/dashboard-versions  
POST /v1/app/dashboard-versions:validate  
GET /sandbox/account-ranges:cleartextBatchGet  
GET /sandbox/account-ranges  
GET /v1/instructions/\*  
GET /v1/instructions:batchGet  
GET /v1/instructions  
GET /v1/openmetrics/metrics  
GET /v1/openmetrics/federate

 |
| 

payments:write

 | 

POST /sandbox/simulate/cards/authorisation-initiations  
POST /sandbox/simulate/cards/card-management-initiations  
POST /sandbox/simulate/cards/inquiry-initiations  
POST /sandbox/simulate/cards/reversal-initiations  
POST /sandbox/simulate/cards/financial-initiations  
POST /v1/cards/account-ranges  
POST /v1/cards/card-products  
PUT /v1/cards/card-products/\*  
POST /v1/cards/card-products/\*:addAccountRanges  
POST /v1/cards/card-products/\*:removeAccountRanges  
POST /v1/parameters  
PUT /v1/parameters/\*  
POST /v1/parameter-values  
PUT /v1/parameter-values/\*  
POST /v1/cards/issuance:issue  
PUT /v1/cards/issuance/\*  
POST /v1/cards/sessions:initiate  
POST /v1/cards/issuance/\*:updatePIN  
POST /v1/cards/issuance/\*:resetPINAttempts  
POST /v1/cards/issuance/\*:resetLVT  
POST /v1/cards/issuance/\*:replace  
POST /v1/payees  
PUT /v1/payees/\*  
POST /v1/manual-decisions/\*:submit  
POST /v1/membership-directories  
PUT /v1/membership-directories/\*  
POST /v1/membership-directory-versions  
POST /v1/rules  
PUT /v1/rules/\*  
POST /v1/rule-versions  
POST /v1/rule-sets  
PUT /v1/rule-sets/\*  
POST /v1/rule-set-versions  
POST /v1/instruction-files:initiate  
POST /v1beta/instruction-files:initiate  
PUT /v1/instruction-files/\*  
PUT /v1beta/instruction-files/\*  
POST /sandbox/simulate/fedwire  
POST /v1/cards/cardholders  
PUT /v1/cards/cardholders/\*  
DELETE /v1/cards/cardholders/\*  
POST /v1/integrations  
PUT /v1/integrations/\*  
POST /v1/integration-versions  
POST /v1/integration-versions/\*:retry  
POST /v1/integrations:callback/\*  
POST /sandbox/instructions/\*:resume  
POST /v1/cores  
PUT /v1/cores/\*  
POST /v1/core-versions  
POST /v1/instruction-flows  
PUT /v1/instruction-flows/\*  
POST /v1/instruction-flow-versions  
POST /v1/app/templates  
PUT /v1/app/templates  
POST /v1/app/template-versions  
POST /v1/instruction-file-specifications  
POST /v1beta/instruction-file-specifications  
PUT /v1/instruction-file-specifications/\*  
PUT /v1beta/instruction-file-specifications/\*  
POST /v1/instruction-file-specification-versions  
POST /v1beta/instruction-file-specification-versions  
PUT /v1/cards/3ds-records/\*  
POST /sandbox/cards/\*:updateCleartextPIN  
PUT /v1/cards/card-tokens/\*  
POST /v1/account-links  
PUT /v1/account-links/\*  
POST /v1/payment-instruments  
PUT /v1/payment-instruments/\*  
POST /v1/calendars  
POST /v1/business-day-definitions  
POST /v1/business-day-definitions/\*:addDates  
POST /v1/business-day-definitions/\*:removeDates  
POST /v1/cards/card-orders  
PUT /v1/cards/card-orders/\*  
POST /sandbox/simulate/swift-agi  
POST /v1/apps/dashboards  
PUT /v1/app/dashboards  
POST /v1/app/dashboard-versions  
POST /sandbox/account-ranges  
POST /v1/instructions:initiate  
POST /v1/instructions:process  
POST /v1/instructions/\*:retry  
POST /v1/instructions:bulkRetry  
PUT /v1/instructions/\*  
POST /v1/instructions/\*:repair  
POST /v1/files

 |