---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/available_values_configuration"
title: "Available values configuration options"
scraped_at: "2026-06-17T05:30:10.268Z"
images: 0
---

# Available values configuration options

The following table shows the values configuration options available in Vault Core 5.8.

    
| Path | Description | Type | Default | Example |
| --- | --- | --- | --- | --- |
| 
`access_control.db.admin_user`

 | 

Admin user for the access control database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`access_control.db.host`

 | 

Hostname for the access control database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`access_control.db.migrator_user`

 | 

Access Control DB migrator user used for running DB migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"access\_control\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
access\_control\_migrator
```






 | 

```
access\_control\_migrator
```






 |
| 

`access_control.db.name`

 | 

Name of the access control database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
access\_control
```






 | 

```
access\_control
```






 |
| 

`access_control.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`access_control.db.user`

 | 

Username for the access-control database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to match the common name of the \\"access\_control\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
access\_control
```






 | 

```
access\_control
```






 |
| 

`access_control_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Access Control API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "access\_control\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "access\_control\_api\_permissions".

 | 

`string`

 | 

```
package access\_control\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package access\_control\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}

allow {
  # Allow all operations for users with the "admin" rule
  input.jwt\_claims.role == "admin"
}
```






 |
| 

`access_control_api.endpoint`

 | 

The endpoint used for ingress to the access control API

 | 

`string`

 | 

```
access-control-api.{{ common.services.domain }}
```






 | 

```
access-control-api.insert.client.endpoint.here
```






 |
| 

`access_control_api.shared_endpoint`

 | 

The endpoint used for ingress to the access control API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
access-control-api.insert.shared.client.endpoint.here
```






 |
| 

`account.default_denomination`

 | 

Default denomination to be used for an account. This is the default value if no other denomination is given during account creation.

 | 

`string`

 | 

 | 

```
GBP
```






 |
| 

`account.permitted_denominations`

 | 

The permitted denominations for an account. These are the default values if no other denominations list is provided during account creation. Acceptable values are: \["ZMW","CHE","TZS","DOP","DZD","SOS","XUA","SDG","MKD","NIO","UYU","MXN","RUB","UGX","RSD","COP","CDF","BHD","AWG","MOP","SAR","KES","BBD","XPD","BYR", "PEN","EUR","GNF","DKK","BOV","CVE","MVR","KYD","MWK","BTC","NPR","KHR","SGD","XDR","BWP","SRD","CAD","JPY","USS","ALL","MZN","UYI","KZT","MMK","UZS", "ERN","TOP","TTD","BMD","XFU","ETB","SZL","NGN","HRK","XAF","BND","KRW","SLL","PAB","NZD","HTG","GHS","XAG","OMR","SHP","BDT","GIP","IDR","SCR","RWF", "THB","PHP","AFN","LYD","BIF","LKR","XCD","XBD","SBD","STD","XBB","GMD","PYG","RON","MGA","SSP","AMD","PGK","MXV","XSU","XAU","HKD","CHF","CLP","QAR", "AED","XOF","MUR","TWD","MDL","HNL","KPW","TND","BOB","BAM","BTN","TRY","LRD","SEK","IRR","XBC","JOD","BRL","GTQ","TJS","XTS","FKP","PLN","BGN","AZN", "PKR","VEF","TMT","GYD","YER","VUV","CHW","XPF","BZD","INR","ISK","WST","LSL","FJD","XPT","EGP","CUC","XBA","ILS","MAD","USD","UAH","ZAR","CNY","JMD", "ARS","GBP","NOK","MNT","USN","CRC","AUD","DJF","MRO","SYP","LAK","KWD","KGS","IQD","MYR","CZK","COU","AOA","ANG","NAD","HUF","CLF","KMF","LBP","GEL", "VND","CUP"\]

 | 

`string`

 | 

 | 

```
\["GBP","EUR","CHF"\]
```






 |
| 

`async_contract_execution.max_tps`

 | 

The number of async contract executions sent to the point-in-time service per second. This setting should be left at the default value unless advised by Thought Machine.

 | 

`integer`

 | 

```
100000
```






 | 

```
100000
```






 |
| 

`audit.cleanup.batch_delay_seconds`

 | 

Number of seconds to wait before deleting the next batch of audit log entries.

 | 

`string`

 | 

```
0.0
```






 | 

```
0.5
```






 |
| 

`audit.cleanup.batch_initial_size`

 | 

Number of audit log entries to remove per transaction.

Smaller batch sizes are attempted if deletions time out.

 | 

`string`

 | 

```
500
```






 | 

```
500
```






 |
| 

`audit.cleanup.schedule`

 | 

Sets the time interval at which the audit clean up CronJob runs. It is recommended that this is set once per day, unless there are metrics that suggest otherwise. (The format for this cron job only supports digits) ┌───────────── minute (0 - 59) │ ┌───────────── hour (0 - 23) │ │ ┌───────────── day of the month (1 - 31) │ │ │ ┌───────────── month (1 - 12) │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday) │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ \* \* \* \* \*

 | 

`string`

 | 

```
4 0 \* \* \*
```






 | 

```
4 0 \* \* \*
```






 |
| 

`audit.cleanup.stall_timeout_seconds`

 | 

Timeout on query stalling in seconds. This can be increased to allow a deletion batch to continue for longer before retrying or ultimately aborting.

 | 

`string`

 | 

```
20
```






 | 

```
20
```






 |
| 

`audit.cleanup.ttl`

 | 

Length of time to retain audit log entries.

 | 

`string`

 | 

 | 

```
1 DAYS
```






 |
| 

`audit.db.admin_user`

 | 

Admin user for the audit database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`audit.db.host`

 | 

Hostname for the audit database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`audit.db.migrator_user`

 | 

Audit DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"audit\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
audit\_migrator
```






 | 

```
audit\_migrator
```






 |
| 

`audit.db.name`

 | 

Name of the audit database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
audit
```






 | 

```
audit
```






 |
| 

`audit.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`audit.db.user`

 | 

Username to access the audit database

Note: If you are using client certificates, set this value to be equal to the common name of the \\"audit\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
audit
```






 | 

```
audit
```






 |
| 

`audit.endpoint`

 | 

The endpoint used for ingress to the audit API

 | 

`string`

 | 

```
audit-api.{{ common.services.domain }}
```






 | 

```
audit-api.insert.client.endpoint.here
```






 |
| 

`audit.response_payload_size_limits`

 | 

The configuration used to determine whether the response payload for a particular endpoint is too large to be stored in the database and streamed out over the Audit public streaming API. The value provided should be a JSON object with payload size limits in bytes keyed by the public endpoint to which each limit applies. Note that this configuration does not affect how object IDs are extracted from the response payload. For example: { "/core\_api.v1.posting\_instruction\_batches.CoreAPIPostingInstructionBatch/ListPostingInstructionBatches":524288 }

 | 

`string`

 | 

```
{
}
```






 | 

```
{
  "/core\_api.v1.posting\_instruction\_batches.CoreAPIPostingInstructionBatch/ListPostingInstructionBatches":524288
}
```






 |
| 

`audit.shared_endpoint`

 | 

The endpoint used for ingress to the audit API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
audit-api.insert.client.shared\_endpoint.here
```






 |
| 

`audit.vault_object_type_policies`

 | 

The policies that must be satisfied for users to be able to view Audit Logs associated with the specified Vault object types. If multiple policies are listed beneath a `vault_object_type`, then at least one must be satisfied by a user for them to view Audit Logs associated with the Vault object type. This value should be given as a string of valid YAML.

 | 

`string`

 | 

```
default:
  - "default\_audit\_view"
```






 | 

```
default:
  - "default\_audit\_view"
VAULT\_OBJECT\_TYPE\_ACCOUNT:
  - "audit\_account\_policy"
VAULT\_OBJECT\_TYPE\_CUSTOMER:
  - "audit\_customer\_policy"
VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:
  - "audit\_payment\_device\_policy"
VAULT\_OBJECT\_TYPE\_TRANSACTION:
  - "audit\_transaction\_policy"
```






 |
| 

`audit_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Audit API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "audit\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "audit\_api\_permissions".

 | 

`string`

 | 

```
package audit\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package audit\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}

allow {
  # Allow all operations for users with the "admin" rule
  input.jwt\_claims.role == "admin"
}
```






 |
| 

`auth.service_account_cache_size`

 | 

The size of the cache used for storing validated service account tokens. The cryptographic operations used during authentication require a lot of memory and CPU resources to validate service account tokens. The results of cryptographic operations can be cached to provide additional performance. This value corresponds to the number of valid service account tokens stored in the cache.

 | 

`string`

 | 

```
200
```






 | 

```
200
```






 |
| 

`balances.db.admin_user`

 | 

Admin user for the balances database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`balances.db.host`

 | 

Hostname for the balances database. Warning: This section should ONLY be populated if using a separate physical db for balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for balances.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
balances.db.host
```






 |
| 

`balances.db.migrator_user`

 | 

Balances DB migrator user used for running db migrations Warning: This section should ONLY be populated if using a separate physical db for balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for balances. Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_balance\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
{{ vault.db.migrator\_user }}
```






 | 

```
balances\_migrator
```






 |
| 

`balances.db.name`

 | 

Name of the Balances database Warning: This section should ONLY be populated if using a separate physical db for balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for balances. Note: Hyphen characters as part of this value are supported, but recommended to be avoided

 | 

`string`

 | 

```
{{ vault.db.name }}
```






 | 

```
balances
```






 |
| 

`balances.db.port`

 | 

Database port to connect to. Warning: For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for balances.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`balances.db.user`

 | 

Username to access the balances database Warning: This section should ONLY be populated if using a separate physical db for balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for balances. Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_balance\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
{{ vault.db.user }}
```






 | 

```
balances
```






 |
| 

`bearer_auth.default_jwt_audience`

 | 

Optional. If the audience configuration cannot be established based on the issuer of a JWT, this default value will be used to validate the JWT aud (audience) field instead.

 | 

`string`

 | 

```
""
```






 | 

```
vault-server.com
```






 |
| 

`bearer_auth.issuers`

 | 

Configurations used to validate the JWT and identify the issuer. The JWKS URI is the URI needed to fetch the JWKS from. The ISS is the unique identifier of the principal that issued the JWT. Used in preference to bearer\_auth.jwks\_uri. If both issuers and jwks\_uri are used, issuers will be used. The JWT Audience is optional, but if set, it should be a string value (typically a URI) matching the value of the JWT aud (audience) field set by the Identity Provider for that issuer (configured by client). If not set or set to an empty string, the `default_jwt_audience` value is used instead.

For example: \[ { "jwks\_uri":"https://authorization-server.com/oauth2/default/v1/keys", "iss":"https://authorization-server.com/oauth2/default" "jwt\_audience": "vault-server.com" } \]

 | 

`string`

 | 

```
\[
\]
```






 | 

```
\[
\]
```






 |
| 

`bearer_auth.jwks_refresh_period`

 | 

The refresh period for the JWKS cache.

 | 

`string`

 | 

```
168h
```






 | 

```
24h
```






 |
| 

`bearer_auth.jwks_uri`

 | 

Deprecated from version 5.1 onwards. Use bearer\_auth.issuers field instead. The JWKS URI to fetch the JWKS from.

 | 

`string`

 | 

```
""
```






 | 

```
https://api.mybank.com/oauth2/default/keys
```






 |
| 

`bearer_auth.max_token_lifetime`

 | 

Maximum JSON Web Token lifetime.

 | 

`string`

 | 

```
24h
```






 | 

```
24h
```






 |
| 

`bearer_auth.role_based_access_control.cache_ttl`

 | 

Time-to-live (TTL) for the cache used as part of the Roles v2 service. Accepts any valid time.ParseDuration format.

 | 

`string`

 | 

```
60s
```






 | 

```
60s
```






 |
| 

`bearer_auth.role_based_access_control.roles_path`

 | 

Path for roles claim on a JWT when using role-based access control.

You may use an arbitrary nested claim here to suit the format of your JWT. For example, your JWT can have an arbitrary path to its role e.g.

{ "iss": …​, "scp": …​, "x": { "y" : { "z" : "role\_id\_1" } } }

or

{ "iss": …​, "scp": …​, "role" : "role\_id\_1" }

If the configuration is not set or it is set to empty string i.e. to "", Role Based Access Control when using JWT Auth would be disabled

 | 

`string`

 | 

```
""
```






 | 

```
x.y.z
```






 |
| 

`bearer_auth.static_public_keys`

 | 

The configuration used to load public keys from Vault’s secret store. These keys are used for authentication.

 | 

`string`

 | 

```
\[
\]
```






 | 

```
\[
  {
    "kid":"some\_id",
    "fname":"public\_key.pem"
  }
\]
```






 |
| 

`bottomline.instructing_bank_code`

 | 

The 6-digit code of the instructing bank, used by Bottomline for outbound FPS payments

 | 

`string`

 | 

 | 

```
123456
```






 |
| 

`bottomline.instructing_bank_name`

 | 

The name of the instructing bank, used by Bottomline for outbound FPS payments

 | 

`string`

 | 

 | 

```
Test Bank
```






 |
| 

`bulk_operations.db.admin_user`

 | 

Admin user for the bulk operations database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`bulk_operations.db.host`

 | 

Hostname for the bulk operations database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`bulk_operations.db.migrator_user`

 | 

Bulk operation DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"bulk\_operations\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
bulk\_operations\_migrator
```






 | 

```
bulk\_operations\_migrator
```






 |
| 

`bulk_operations.db.name`

 | 

Name of the bulk operations database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
bulk\_operations
```






 | 

```
bulk\_operations
```






 |
| 

`bulk_operations.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`bulk_operations.db.user`

 | 

Username to access the bulk operations database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"bulk\_operations\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
bulk\_operations
```






 | 

```
bulk\_operations
```






 |
| 

`calendar.db.admin_user`

 | 

Admin user for the calendar database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`calendar.db.host`

 | 

Hostname for the calendar database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`calendar.db.migrator_user`

 | 

Calendar DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"calendar\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
calendar\_migrator
```






 | 

```
calendar\_migrator
```






 |
| 

`calendar.db.name`

 | 

Name of the calendar database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
calendar
```






 | 

```
calendar
```






 |
| 

`calendar.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`calendar.db.user`

 | 

Username to access the calendar database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"calendar\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
calendar
```






 | 

```
calendar
```






 |
| 

`calendar_schedules.db.admin_user`

 | 

Admin user for the calendar schedules database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`calendar_schedules.db.host`

 | 

Hostname for the calendar schedules database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`calendar_schedules.db.migrator_user`

 | 

Calendar Schedules DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"calendar\_schedules\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
calendar\_schedules\_migrator
```






 | 

```
calendar\_schedules\_migrator
```






 |
| 

`calendar_schedules.db.name`

 | 

Name of the calendar schedules database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
calendar\_schedules
```






 | 

```
calendar\_schedules
```






 |
| 

`calendar_schedules.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`calendar_schedules.db.user`

 | 

Username to access the calendar schedules database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"calendar\_schedules\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
calendar\_schedules
```






 | 

```
calendar\_schedules
```






 |
| 

`clusterstat.run_labels`

 | 

Comma-separated list of labels to run clusterstat tests with. Valid values are: hault, monitoring, namespaced\_monitoring or all.

 | 

`string`

 | 

```
all
```






 | 

```
all
```






 |
| 

`cockroachdb.ca_rotation.schedule`

 | 

Schedule for running the cockroachdb CA rotation job in cron format. Ignored if cockroachdb-ca-rotation-pkg not deployed. WARNING: Make sure not to schedule for the same time as certificate rotation in the cockroachdb-cert-rotation-pkg, this may lead to unexpected behaviour.

 | 

`string`

 | 

```
0 0 15 1 \*
```






 | 

```
0 0 15 1 \*
```






 |
| 

`cockroachdb.cert_rotation.schedule`

 | 

Schedule for running the cockroachdb certificate rotation job in cron format. Ignored if cockroachdb-cert-rotation-pkg not deployed.

 | 

`string`

 | 

```
0 0 1 \* \*
```






 | 

```
0 0 1 \* \*
```






 |
| 

`common.background_tasks.execution_time_window`

 | 

Time range specifying when background tasks (e.g. offline migrations) are permitted to be started within, in the "HH:MM - HH:MM" 24h format. This is a half-open range: the first FROM time is inclusive, and the latter UNTIL time is exclusive. When FROM and UNTIL times are identical, background tasks tasks are permitted to run all-day.

Example: - 00:00 - 00:01: background tasks are permitted from 00:00:00 up to 00:00:59. - 03:33 - 03:33: background tasks are permitted all day. - 23:30 - 00:30: background tasks are permitted from 23:30, and stop being permitted at 00:30.

 | 

`string`

 | 

```
00:00-00:00
```






 | 

```
05:00 - 13:45
```






 |
| 

`common.background_tasks.execution_time_zone`

 | 

The IANA timezone location of the stated time range to be used for calculating whether background tasks should be executed in or not.

Example: - US/Indiana-Starke - Europe/San\_Marino - GMT

 | 

`string`

 | 

```
UTC
```






 | 

```
Europe/London
```






 |
| 

`common.bank.name`

 | 

The identifier for this bank. Must not start with a capital letter or have spaces between characters. Must NOT be changed after installing Vault.

 | 

`string`

 | 

 | 

```
mybank
```






 |
| 

`common.bank.sort_code`

 | 

Sort code for the bank

 | 

`string`

 | 

 | 

```
10-00-00
```






 |
| 

`common.basic_auth.authentication`

 | 

To enable or disable basic authentication. If enabled; user, password and password salted hash values are expected

 | 

`string`

 | 

```
disable
```






 | 

```
enable
```






 |
| 

`common.basic_auth.password_hash`

 | 

Hash for the above password - should be generated using a command similar to the following: openssl passwd -apr1 -salt vault topsecret

 | 

`string`

 | 

 | 

```
$apr1$vault$r8zSo5z8xGRTLnCCcbS83.
```






 |
| 

`common.basic_auth.password`

 | 

Password for basic auth credentials applied to ingress.

Used to restrict access to Vault instances in dev/test environments.

 | 

`string`

 | 

 | 

```
topsecret
```






 |
| 

`common.basic_auth.username`

 | 

Username for basic auth credentials applied to ingress.

Used to restrict access to Vault instances in dev/test environments.

 | 

`string`

 | 

 | 

```
someuser
```






 |
| 

`common.csp_integrations.gcp.workload_identity_federation.pool_id`

 | 

Pool ID (name) of the workload identity federation if used. This is used to authenticate kubernetes workloads against GCP when the kubernetes cluster is not running directly on GKE.

See [https://cloud.google.com/iam/docs/workload-identity-federation](https://cloud.google.com/iam/docs/workload-identity-federation)

 | 

`string`

 | 

```
""
```






 | 

```
vault-pool
```






 |
| 

`common.csp_integrations.gcp.workload_identity_federation.pool_provider_id`

 | 

Pool provider ID (name) of the workload identity federation if used. This is used to authenticate kubernetes workloads against GCP when the kubernetes cluster is not running directly on GKE.

The workload identity pool provider is an entity that describes a trust relationship between Google Cloud and your IdP, including kubernetes clusters.

See [https://cloud.google.com/iam/docs/workload-identity-federation](https://cloud.google.com/iam/docs/workload-identity-federation)

 | 

`string`

 | 

```
""
```






 | 

```
vault-pool-provider
```






 |
| 

`common.csp_integrations.gcp.workload_identity_federation.project_number`

 | 

Project number of the GCP project where workload identity federation is defined. This is used to authenticate kubernetes workloads against GCP when the kubernetes cluster is not running directly on GKE.

See [https://cloud.google.com/iam/docs/workload-identity-federation](https://cloud.google.com/iam/docs/workload-identity-federation)

 | 

`string`

 | 

```
""
```






 | 

```
vault-wif-project
```






 |
| 

`common.db.auth_mechanism`

 | 

Set the authentication mechanism against the database.

 | 

`string`

 | 

```
password
```






 | 

```
password
```






 |
| 

`common.db.aws_iam.csp_account_id`

 | 

CSP Account ID. Required for creating IAM roles and policies, as well as annotating Kubernetes ServiceAccounts.

 | 

`string`

 | 

```
""
```






 | 

```
123456789
```






 |
| 

`common.db.aws_iam.db_resource_id`

 | 

AWS RDS instance resource ID.

 | 

`string`

 | 

```
""
```






 | 

```
db-XRJLWEE3XO35EYF6FPRQA4ZKQY
```






 |
| 

`common.db.aws_iam.oidc_provider`

 | 

OIDC Provider for the EKS Cluster. Required for creating Trust Relationship policies.

 | 

`string`

 | 

```
""
```






 | 

```
https://oidc.eks.eu-west-2.amazonaws.com/id/1111111
```






 |
| 

`common.db.aws_iam.region`

 | 

Region containing the AWS RDS instance.

 | 

`string`

 | 

```
""
```






 | 

```
eu-west-2
```






 |
| 

`common.db.aws_iam.tm_iam_prefix`

 | 

Prefix for all IAM roles and policies that Vault requires to authenticate with the database using IAM. e.g. tm\_prefix

 | 

`string`

 | 

```
tm\_prefix
```






 | 

```
tm\_prefix
```






 |
| 

`common.db.pool.enabled`

 | 

Enable DB connection pooler. Must be set to "true" unless specifically advised otherwise by TM production support. The DB connection pooler is a database connection proxy that sits between Vault Core services and the database. It optimises the number of database connections being used at any one time and improves recovery speed in the event of a database failover.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`common.db.pool.named_prepared_statements`

 | 

Whether to allow prepared statements when querying the database. When set to 'describe', only described prepared statements will be used.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`common.db.ssl_mode`

 | 

The postgres SSL mode to use when connecting to the database, for all services. For more details, see the Postgres documentation: [https://www.postgresql.org/docs/current/libpq-ssl.html](https://www.postgresql.org/docs/current/libpq-ssl.html) Note that 'allow' and 'prefer' are not supported.

 | 

`string`

 | 

```
verify-full
```






 | 

```
verify-full
```






 |
| 

`common.db.ssl`

 | 

Use SSL when connecting to the database.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`common.db.use_username_hostname_format`

 | 

Reformat the db username as 'user@host' when establishing a connection. Azure Psql requires this.

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`common.deployment_size`

 | 

This deployment size parameter is used across Vault to configure a set of parameters to soft tune vault to that specific deployment size. This includes setting min and max replicas of a variety of most deployments, setting a scheduler rate limit and adjusting db pooler max connections. The accepted values follow the Vault Performance framework.

 | 

`string`

 | 

```
medium
```






 | 

```
small
```






 |
| 

`common.mode.enable_kafka_based_derived_db_replication`

 | 

Used in a Multi DB A-P architecture, for populating derived DB(s) (e.g. Warm Storage) in the passive environment.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`common.mode.ignore_messages.end_time`

 | 

Unix timestamp for the end of the window for ignoring Kafka messages. Messages with a timestamp in this window (start\_time ⇐ timestamp < end\_time) will have their offsets committed without processing.

 | 

`integer`

 | 

```
0
```






 | 

```
1728310127
```






 |
| 

`common.mode.ignore_messages.start_time`

 | 

Unix timestamp for the start of the window for ignoring Kafka messages. Messages with a timestamp in this window (start\_time ⇐ timestamp < end\_time) will have their offsets committed without processing.

 | 

`integer`

 | 

```
0
```






 | 

```
1728310127
```






 |
| 

`common.mode.passive`

 | 

Put the cluster into passive mode, this disables Kafka consumers and scales down journal pollers. This is only to be used when performing a Vault workload migration from one cluster to another.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`common.mode.standby_db`

 | 

Used for installing Vault Core against a standby or read-only database as part of an Active-Passive deployment model.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`common.object_store.gcp.project_id`

 | 

Project ID of the GCP project where the GKE cluster is created

 | 

`string`

 | 

```
""
```






 | 

```
vault-gke
```






 |
| 

`common.object_store.keyspace`

 | 

A common prefix under which all data for this logical Vault Instance will be written in. This enables multiple Vault instances (or even third-party applications) to share one bucket.

 | 

`string`

 | 

```
{{ k8s.namespace }}
```






 | 

```
vault-prod
```






 |
| 

`common.object_store.url`

 | 

URL of the bucket used by Vault to store files in Object Storage. Supports AWS S3, GCP GCS and local file.

 | 

`string`

 | 

```
""
```






 | 

```
s3://vault-instance
```






 |
| 

`common.services.domain`

 | 

The exclusive domain or subdomain name which contains all subdomains used for Vault endpoints protected by SAML in an instance. Only Vault Applications protected by SAML should be placed under this domain as cookies set on this domain will be exposed to all subdomains. The protocol and port number must be omitted. For example, if the following websites are to be protected by SAML: ops.example.com, coreapps.example.com then the value must be example.com. For multiple instances on the same domain a unique subdomain must be provided. For example, for ops.dev.example.com and ops.staging.example.com the dev instance must be set to dev.example.com and the staging instance must be staging.example.com

 | 

`string`

 | 

 | 

```
insert.client.endpoint.here
```






 |
| 

`common_stream_api.message_format`

 | 

The format of public topic messages consumed or produced by the Streaming API

 | 

`string`

 | 

```
json
```






 | 

```
json
```






 |
| 

`configuration_layer.importer.use_jwt`

 | 

Resources are applied to the configuration layer during installation by an embedded version of the Configuration Layer Utility. Set this option true if JWTs are being provided for API authentication or false to use a service token for embedded access.

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`contract_db_data_exporter.publish_interval`

 | 

Controls how frequently a check is made for any new data to be published to `vault.api.v1.products.product_version.created` and `vault.api.v1.products.product_version.parameter.updated` topics. The clock for the next check starts running after all new data has been published. The value can be any "duration string" as is understood by [https://golang.org/pkg/time/#ParseDuration](https://golang.org/pkg/time/#ParseDuration). Prior to Vault 5.0, one of the queries results in a sequential scan of a table containing all instance parameter values, so this interval should not be decreased from its default without testing its effects on overall DB performance. From Vault 5.0 the query is still executed, but the table no longer contains instance parameters, only template, which are significantly fewer in number.

 | 

`string`

 | 

```
30m
```






 | 

```
20m30s
```






 |
| 

`contract_events.db.admin_user`

 | 

Admin user for the contract events database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`contract_events.db.host`

 | 

Hostname for the contract events database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`contract_events.db.migrator_user`

 | 

Contract events DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"contract\_events\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
contract\_events\_migrator
```






 | 

```
contract\_events\_migrator
```






 |
| 

`contract_events.db.name`

 | 

Name of the contract events database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
contract\_events
```






 | 

```
contract\_events
```






 |
| 

`contract_events.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`contract_events.db.user`

 | 

Username to access the contract events database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"contract\_events\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
contract\_events
```






 | 

```
contract\_events
```






 |
| 

`contract_executor.size`

 | 

Determines how many replicas are deployed as a minimum. This is to ensure Vault can maintain the SLOs for online journeys. For production environments with high volumes this should be set to "medium", for lower volumes "small" should suffice and if no SLOs need to be honoured "demo".

 | 

`string`

 | 

```
medium
```






 | 

```
medium
```






 |
| 

`core.db.admin_user`

 | 

Admin user for the core database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`core.db.host`

 | 

Hostname for the core database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`core.db.migrator_user`

 | 

User used to execute Vault Core migrations.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"core\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
core\_migrator
```






 | 

```
core\_migrator
```






 |
| 

`core.db.name`

 | 

Name of the core database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
core
```






 | 

```
core
```






 |
| 

`core.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`core.db.user`

 | 

Username for the core database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"core\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
core
```






 | 

```
core
```






 |
| 

`core.endpoint`

 | 

The endpoint used for ingress to the core API

 | 

`string`

 | 

```
core-api.{{ common.services.domain }}
```






 | 

```
core-api.insert.client.endpoint.here
```






 |
| 

`core.product_key`

 | 

Vault Core product key which enables add-on features.

 | 

`string`

 | 

```
""
```






 | 

```
""
```






 |
| 

`core.shared_endpoint`

 | 

The endpoint used for ingress to the core API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
core-api.insert.client.shared\_endpoint.here
```






 |
| 

`core_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Core API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "core\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "core\_api\_permissions".

 | 

`string`

 | 

```
package core\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package core\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}

allow {
  # Allow all requests to read or write policies.
  input.http\_path == "/v1/policies"
}
```






 |
| 

`core_apps.endpoint`

 | 

The endpoint used for ingress to the Core web apps (not including Ops Dashboard which has it’s own endpoint). This must be a subdomain of common.services.domain and not contain a port number. Cookies can only be set on the domain a request is made from. This implies that all SAML protected websites must be part of the same domain. ([https://tools.ietf.org/html/rfc6265#section-4.1.2.3](https://tools.ietf.org/html/rfc6265#section-4.1.2.3))

 | 

`string`

 | 

```
coreapps.{{ common.services.domain }}
```






 | 

```
core.apps.insert.client.endpoint.here
```






 |
| 

`core_apps.shared_endpoint`

 | 

The endpoint used for ingress to the Core web apps (not including Ops Dashboard which has it’s own endpoint) in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint; the same restrictions on the default endpoint apply.

 | 

`string`

 | 

```
""
```






 | 

```
core.apps.insert.client.shared\_endpoint.here
```






 |
| 

`data_loader.db.admin_user`

 | 

Admin user for the data loader database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`data_loader.db.host`

 | 

Hostname for the data loader database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`data_loader.db.migrator_user`

 | 

Data Loader DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"data\_loader\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
data\_loader\_migrator
```






 | 

```
data\_loader\_migrator
```






 |
| 

`data_loader.db.name`

 | 

Name of the data loader database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
data\_loader
```






 | 

```
data\_loader
```






 |
| 

`data_loader.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`data_loader.db.user`

 | 

Username to access the data loader database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"data\_loader\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
data\_loader
```






 | 

```
data\_loader
```






 |
| 

`data_loader_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Data Loader API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "data\_loader\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "data\_loader\_api\_permissions".

 | 

`string`

 | 

```
package data\_loader\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package data\_loader\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}
```






 |
| 

`data_loader_api.endpoint`

 | 

The endpoint used for ingress to the data loader API

 | 

`string`

 | 

```
data-loader-api.{{ common.services.domain }}
```






 | 

```
data-loader-api.insert.client.endpoint.here
```






 |
| 

`data_loader_api.message_format`

 | 

The format of public topic messages consumed or produced by the data loader stream API

 | 

`string`

 | 

```
protobuf
```






 | 

```
protobuf
```






 |
| 

`data_loader_api.shared_endpoint`

 | 

The endpoint used for ingress to the data loader API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
data-loader-api.insert.client.shared\_endpoint.here
```






 |
| 

`data_retention.deleter.schedule`

 | 

Defines the cron schedule the Data Retention Deleter job operates on in UTC time. It is recommended to set it to a maximum of once per day.

 | 

`string`

 | 

```
0 4 \* \* \*
```






 | 

```
0 4 \* \* \*
```






 |
| 

`demo_suite.endpoint`

 | 

The endpoint used for ingress to the demo suite.

 | 

`string`

 | 

```
demo-suite.{{ common.services.domain }}
```






 | 

```
demo\_suite.insert.client.endpoint.here
```






 |
| 

`demo_suite.tracking_id`

 | 

The google analytics tracking id for the demo suite.

 | 

`string`

 | 

```
G-XXXXXXX
```






 | 

```
G-XXXXXXX
```






 |
| 

`dlq_inspector.cleanup.schedule`

 | 

Sets the time interval at which the dlq\_inspector clean up CronJob runs. It is recommended that this is set once per day, unless there are metrics that suggest otherwise. (The format for this cron job only supports digits) ┌───────────── minute (0 - 59) │ ┌───────────── hour (0 - 23) │ │ ┌───────────── day of the month (1 - 31) │ │ │ ┌───────────── month (1 - 12) │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday) │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ \* \* \* \* \*

 | 

`string`

 | 

```
0 3 \* \* \*
```






 | 

```
0 3 \* \* \*
```






 |
| 

`dlq_inspector.endpoint.cleanup.batch_size`

 | 

The number of entries to remove in one go. Can be increased to make the cleaner more aggresive or tuned down.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`dlq_inspector.endpoint.cleanup.retention_period`

 | 

The age of the oldest dlq message or republish data to be retained. The format can be defined using hours, minutes and seconds. After the retention period, old data might still be displayed, however it can be incomplete.

 | 

`string`

 | 

```
2160h
```






 | 

```
1h2m3s
```






 |
| 

`documentation.endpoint`

 | 

The endpoint used for ingress to the documentation for vault APIs

 | 

`string`

 | 

```
documentation.{{ common.services.domain }}
```






 | 

```
documentation.insert.client.endpoint.here
```






 |
| 

`documents.endpoint`

 | 

The endpoint used for ingress to the documents service

 | 

`string`

 | 

```
documents.{{ common.services.domain }}
```






 | 

```
documents.insert.client.endpoint.here
```






 |
| 

`documents.port`

 | 

Port that the documents service should listen on

 | 

`string`

 | 

```
443
```






 | 

```
443
```






 |
| 

`documents.shared_endpoint`

 | 

The endpoint used for ingress to the documents service in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
documents.insert.client.shared\_endpoint.here
```






 |
| 

`dr_timestamp_collector.db.admin_user`

 | 

Admin user for the dr timestamp collector database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`dr_timestamp_collector.db.host`

 | 

Hostname for the dr timestamp collector database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`dr_timestamp_collector.db.migrator_user`

 | 

dr\_timestamp\_collector DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"dr\_timestamp\_collector\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
dr\_timestamp\_collector\_migrator
```






 | 

```
dr\_timestamp\_collector\_migrator
```






 |
| 

`dr_timestamp_collector.db.name`

 | 

Name of the dr timestamp collector database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
dr\_timestamp\_collector
```






 | 

```
dr\_timestamp\_collector
```






 |
| 

`dr_timestamp_collector.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`dr_timestamp_collector.db.user`

 | 

Username to access the dr\_timestamp\_collector database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"dr\_timestamp\_collector\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
dr\_timestamp\_collector
```






 | 

```
dr\_timestamp\_collector
```






 |
| 

`edge_functions.data_deleter.enable_deletion`

 | 

Boolean which, if true, sets the Edge Functions Data Deleter to delete all of its deletable resources with relevant configrations . If this is false (which by default it is), the Edge Functions Data Deleter will not delete any resources.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`edge_functions.data_deleter.execution_failed_batch_size`

 | 

Defines the maximum number of records deleted in one batch.

 | 

`string`

 | 

```
2000
```






 | 

```
2000
```






 |
| 

`edge_functions.data_deleter.execution_failed_retention_period_days`

 | 

Defines the retention period in days before records are automatically deleted.

 | 

`string`

 | 

```
90
```






 | 

```
90
```






 |
| 

`edge_functions.data_deleter.execution_succeeded_batch_size`

 | 

Defines the maximum number of records deleted in one batch.

 | 

`string`

 | 

```
2000
```






 | 

```
2000
```






 |
| 

`edge_functions.data_deleter.execution_succeeded_retention_period_days`

 | 

Defines the retention period in days before records are automatically deleted.

 | 

`string`

 | 

```
90
```






 | 

```
90
```






 |
| 

`edge_functions.data_deleter.schedule`

 | 

Defines the cron schedule the Edge Functions Data Retention Deleter job operates on in UTC time.

 | 

`string`

 | 

```
0 4 \* \* \*
```






 | 

```
0 4 \* \* \*
```






 |
| 

`edge_functions.data_deleter.trigger_operation_failed_batch_size`

 | 

Defines the maximum number of records deleted in one batch.

 | 

`string`

 | 

```
2000
```






 | 

```
2000
```






 |
| 

`edge_functions.data_deleter.trigger_operation_failed_retention_period_days`

 | 

Defines the retention period in days before records are automatically deleted.

 | 

`string`

 | 

```
90
```






 | 

```
90
```






 |
| 

`edge_functions.data_deleter.trigger_operation_succeeded_batch_size`

 | 

Defines the maximum number of records deleted in one batch.

 | 

`string`

 | 

```
2000
```






 | 

```
2000
```






 |
| 

`edge_functions.data_deleter.trigger_operation_succeeded_retention_period_days`

 | 

Defines the retention period in days before records are automatically deleted.

 | 

`string`

 | 

```
90
```






 | 

```
90
```






 |
| 

`edge_functions.db.admin_user`

 | 

Admin user for the edge functions database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`edge_functions.db.host`

 | 

Hostname for the edge functions database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`edge_functions.db.name`

 | 

Name of the edge functions database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
edge\_functions
```






 | 

```
edge\_functions
```






 |
| 

`edge_functions.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`edge_functions.db.user`

 | 

Username to access the edge functions database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"edge\_functions\\" principal, which can be found in the DB principals artefact.

 | 

`string`

 | 

```
edge\_functions
```






 | 

```
edge\_functions
```






 |
| 

`edge_functions.endpoint`

 | 

The endpoint used for ingress to the Edge Functions API

 | 

`string`

 | 

 | 

```
edge-functions-api.insert.client.endpoint.here
```






 |
| 

`edge_functions.management.erase_tm_124619_edge_functions`

 | 

Set to `"true"` to erase all Edge Function resources associated with Edge Function Versions that use unsafe `match` statements, as described in vulnerability TM-124619 and TM-128266.

The following resources will be deleted: - Edge Functions, - Edge Function Versions, - Edge Function Executions, - Edge Function Triggers, - Edge Function Trigger Operations.

Enabling this option will permanently delete affected resources from the Edge Functions database. Please only enable this option once a database snapshot has been taken and the implications of deleting the affected resources cited by the `edge-functions-match-exploit-detector` Kubernetes Job are fully understood.

 | 

`string`

 | 

```
false
```






 | 

```
true
```






 |
| 

`edge_functions.shared_endpoint`

 | 

The endpoint used for ingress to the Edge Functions API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
edge-functions-api.insert.client.shared\_endpoint.here
```






 |
| 

`edge_functions.triggers.enable_service_account_identity`

 | 

Set to `"true"` to enable use of the EdgeFunctionIdentity "default-service-account" for use in an EdgeFunctionTrigger executing an EdgeFunction with the default service account token.

Note that by default this uses the default service account, which has unrestricted access to **all** Vault Core APIs, such that any EdgeFunctionTrigger that has `vault_core_identity_id = "default-service-account"` can call any Vault Core API endpoint without limitation.

It is possible, **and recommended**, to replace the token stored in the `edge-functions-trigger-processor-secrets/SERVICE_ACCOUNT_TOKEN` secret with the token for a more restrictive service account prior to enabling this option.

 | 

`string`

 | 

```
false
```






 | 

```
true
```






 |
| 

`edge_functions_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Edge Functions API. Warning: Once Vault Core is set up, do NOT directly modify the `edge-edge_functions_api.default_permissions_policy` for updating the Edge Functions API’s authorization policies. This field is intended only for initial configuration. For all updates to the OPA policies, you MUST use the Policy Management Service.

 | 

`string`

 | 

```
package edge\_functions\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package edge\_functions\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}

allow {
  # Allow all operations for users with the "admin" rule
  input.jwt\_claims.role == "admin"
}
```






 |
| 

`eplatform.db.admin_user`

 | 

Admin user for the eplatform database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`eplatform.db.host`

 | 

Hostname for the eplatform database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`eplatform.db.migrator_user`

 | 

Eplatform DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"eplatform\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
eplatform\_migrator
```






 | 

```
eplatform\_migrator
```






 |
| 

`eplatform.db.name`

 | 

Name of the eplatform database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
eplatform
```






 | 

```
eplatform
```






 |
| 

`eplatform.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`eplatform.db.user`

 | 

Username to access the eplatform database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"eplatform\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
eplatform
```






 | 

```
eplatform
```






 |
| 

`experience_layer_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Experience Layer API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "experience\_layer\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "experience\_layer\_api\_permissions".

 | 

`string`

 | 

```
package experience\_layer\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package experience\_layer\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}
```






 |
| 

`feature_flags.add_ons`

 | 

Product key to activate add-on feature flags.

 | 

`string`

 | 

```
disable
```






 | 

```
<product key>
```






 |
| 

`integrations.db.admin_user`

 | 

Admin user for the integrations database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`integrations.db.host`

 | 

Hostname for the integrations database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`integrations.db.migrator_user`

 | 

Integrations DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"integrations\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
integrations\_migrator
```






 | 

```
integrations\_migrator
```






 |
| 

`integrations.db.name`

 | 

Name of the integrations database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
integrations
```






 | 

```
integrations
```






 |
| 

`integrations.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`integrations.db.user`

 | 

Username to access the integrations database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"integrations\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
integrations
```






 | 

```
integrations
```






 |
| 

`interim_postings_filter.endpoint`

 | 

The endpoint used for ingress to the Interim Postings Filter API

 | 

`string`

 | 

 | 

```
interim-postings-filter.insert.client.endpoint.here
```






 |
| 

`istio.auth_policy.mtls_mode`

 | 

Mutual TLS mode to use for istio

 | 

`string`

 | 

```
STRICT
```






 | 

```
PERMISSIVE
```






 |
| 

`istio.ingress.enable`

 | 

Sets whether the Istio ingress gateway is deployed or not. Thought Machine includes the ingress gateway with Vault Core’s Istio component only for backwards compatibility, so it is strongly recommended to set this to false. Note that the ingress gateway is not available in the Standalone Istio (tm-istio) release, which is intended to replace the Vault Core Istio component in the future.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`istio.jwtPolicy`

 | 

Sets whether Istio uses third-party JWT tokens for authentication between mesh proxies and the control plane; third-party-jwt is preferred as it is the more secure option. Using first-party-jwt must only be done if the cluster explicitly does not support third-party-jwt.

 | 

`string`

 | 

```
third-party-jwt
```






 | 

```
third-party-jwt
```






 |
| 

`istio.namespace`

 | 

The namespace where the Istio control-plane is deployed. Once used for one Istio version this option MUST remain the same for all subsequent installations. Istio must NEVER be installed in multiple namespaces on the same cluster.

This value, if set explicitly, will also affect the TM monitoring stack; in this case the following requirements must be satisfied. A service must exist in the istio.namespace namespace and must expose Istiod metrics on a http-monitoring port. Similarly for Envoy generated metrics, pods are expected expose a container port http-envoy-prom exposing Envoy metrics.

 | 

`string`

 | 

```
istio-system
```






 | 

```
istio-system
```






 |
| 

`istio.proxy.exclude_cidr`

 | 

List of comma-separated CIDR ranges to exclude from the istio proxy (empty string for none or "\*" for all ranges). Note: When using the Istio CNI, this must include the CIDR range required to access the secrets manager. Communication to hosts in these IP ranges will not be intercepted and routed via Istio proxy. Care must be taken here to ensure communication is not incorrectly excluded from Istio. For example, the secrets manager must be excluded from Istio but pod subnets must not be.

 | 

`string`

 | 

```
""
```






 | 

```
""
```






 |
| 

`istio.proxy.exclude_outbound_ports`

 | 

List of comma-separated ports to exclude from the service mesh (empty string for none). Outbound communication on listed ports will not be intercepted via the proxy and will be routed directly to the container. Note: This must exclude the database port(s) in use to manage database traffic when the Istio outbound traffic policy is set to REGISTRY\_ONLY. It is set to exclude '5432' by default. This list must not include the broker ports specified in kafka.client.brokers, as they will be excluded automatically.

 | 

`string`

 | 

```
5432
```






 | 

```
1235, 5432
```






 |
| 

`istio.proxy.include_cidr`

 | 

List of comma-separated CIDR ranges to include for the istio proxy (empty string for none or "\*" for all ranges)

 | 

`string`

 | 

```
\*
```






 | 

```
\*
```






 |
| 

`istio.verbosity`

 | 

Log verbosity for the installer job.

 | 

`string`

 | 

```
INFO
```






 | 

```
INFO
```






 |
| 

`journal.cleaner.schedule_overrides`

 | 

Defines the cron expression that overrides the default time when each Journal cleanup job is started (in the same timezone as the cluster). If this value is not defined for any job, the default time will be used.

It is recommended to: - run this daily to avoid impacts to Business as Usual journeys, - run this during periods of low activity, - spread out the cleanup jobs to reduce load on the database.

To get all the Journal cleanup jobs, run: `kubectl get cronjobs -l journal-component=cleaner`

 | 

`object`

 | 

```
access-control-journal-clean-up-job: 25 4 \* \* \*
account-balance-journal-cleaner-v3: 12 5 \* \* \*
accounts-journal-clean-up-job: 12 5 \* \* \*
accounts-journal-cleaner: 12 5 \* \* \*
accounts-plans-journal-clean-up-job: 33 2 \* \* \*
calendar-journal-clean-up-job: 5 4 \* \* \*
contract-executions-journal-cleaner: 22 8 \* \* \*
customers-journal-clean-up-job: 35 4 \* \* \*
flags-journal-clean-up-job: 12 5 \* \* \*
flags-journal-cleaner: 12 5 \* \* \*
ledger-journal-cleaner-v3: 47 3 \* \* \*
restriction-sets-journal-clean-up-job: 12 5 \* \* \*
scheduler-journal-clean-up-job: 20 4 \* \* \*
scheduler-vault-jobs-journal-cleaner: 13 4 \* \* \*
tickets-journal-clean-up-job: 25 4 \* \* \*
vault-jobs-journal-cleaner: 39 4 \* \* \*
xpl-journal-clean-up-job: 3 4 \* \* \*
```






 | 

```
accounts-journal-cleaner: 10 9 \* \* \*
ledger-journal-cleaner-v3: 0 23 \* \* \*
```






 |
| 

`journal.cleaner.schedule`

 | 

The time at which Journal cleanup jobs are scheduled to run. It is recommended to run this daily, during periods of low activity, to avoid impacts to Business as Usual journeys.

For larger deployments, it is also advisable to spread the load by overriding the schedule for each job using `schedule_overrides`

 | 

`string`

 | 

```
10 4 \* \* \*
```






 | 

```
10 4 \* \* \*
```






 |
| 

`k8s.cloud_provider`

 | 

The cloud provider of the kubernetes cluster. Note: This was previously set automatically by the TMComponent operator. This is no longer the case, and now it must be set here.

 | 

`string`

 | 

 | 

```
""
```






 |
| 

`k8s.distribution`

 | 

The distribution of the kubernetes cluster.

 | 

`string`

 | 

```
{{ if eq k8s.cloud\_provider "aws" }}eks{{ else if eq k8s.cloud\_provider "gcp" }}gke{{ else if eq k8s.cloud\_provider "azure" }}aks{{ else }}''{{ end }}
```






 | 

```
openshift
```






 |
| 

`k8s.docker_registry_path`

 | 

Path to the docker registry used for all Docker images. Note: This was previously set automatically by the TMComponent operator. This is no longer the case, and now it must be set here. No trailing '/' is allowed.

 | 

`string`

 | 

 | 

```
0123456789.dkr.ecr.eu-west-1.amazonaws.com
```






 |
| 

`k8s.image_pull_secrets_name`

 | 

Name of the Kubernetes secret that contains the credentials to pull images from a private Docker registry. It is optional and only used for private docker registry.

 | 

`string`

 | 

```
""
```






 | 

```
docker-registry-secret
```






 |
| 

`k8s.ingress.access_control.annotations`

 | 

Annotations to apply only to the access control kubernetes ingress object. The values here are examples for the Nginx ingress controller: annotations: nginx.ingress.kubernetes.io/service-upstream: 'true' nginx.ingress.kubernetes.io/upstream-vhost: access-control-api-gateway.k8s-namespace.svc.cluster.local

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/service-upstream: "true"
nginx.ingress.kubernetes.io/upstream-vhost: access-control-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.access_control.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the access control shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-access-control-ingress-shared-cert
```






 | 

```
vault-access-control-ingress-shared-cert
```






 |
| 

`k8s.ingress.access_control.tls_secret_name`

 | 

The name of the Kubernetes secret the access control Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-access-control-ingress-cert
```






 | 

```
vault-access-control-ingress-cert
```






 |
| 

`k8s.ingress.annotations`

 | 

Annotations to apply to all of the kubernetes ingress objects - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

 | 

```
cert-manager.io/acme-challenge-type: dns01
cert-manager.io/acme-dns01-provider: instances
cert-manager.io/cluster-issuer: lets-encrypt
kubernetes.io/ingress.class: nginx-internal
nginx.ingress.kubernetes.io/proxy-connect-timeout: 36s
nginx.ingress.kubernetes.io/proxy-read-timeout: 600s
tmachine.io/dns.class: private
```






 |
| 

`k8s.ingress.audit.annotations`

 | 

Annotations to apply only to the audit kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: audit-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.audit.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the audit shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-audit-ingress-shared-cert
```






 | 

```
vault-audit-ingress-shared-cert
```






 |
| 

`k8s.ingress.audit.tls_secret_name`

 | 

The name of the Kubernetes secret the audit Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-audit-ingress-cert
```






 | 

```
vault-audit-ingress-cert
```






 |
| 

`k8s.ingress.bottomline.annotations`

 | 

Annotations to apply only to the bottomline kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: bottomline-simulator-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.bottomline.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the bottomline shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-bottomline-ingress-shared-cert
```






 | 

```
vault-bottomline-ingress-shared-cert
```






 |
| 

`k8s.ingress.bottomline.tls_secret_name`

 | 

The name of the Kubernetes secret the bottomline Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-bottomline-ingress-cert
```






 | 

```
vault-bottomline-ingress-cert
```






 |
| 

`k8s.ingress.core.annotations`

 | 

Annotations to apply only to the core kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: core-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.core.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the core shared endpoint. If not defined, the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-core-ingress-shared-cert
```






 | 

```
vault-core-ingress-shared-cert
```






 |
| 

`k8s.ingress.core.tls_secret_name`

 | 

The name of the Kubernetes secret the core Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-core-ingress-cert
```






 | 

```
vault-core-ingress-cert
```






 |
| 

`k8s.ingress.core_apps.annotations`

 | 

Annotations to apply only to the core-apps kubernetes ingress object. The values here are examples for the Nginx ingress controller: annotations: nginx.ingress.kubernetes.io/service-upstream: 'true' nginx.ingress.kubernetes.io/upstream-vhost: core-apps.k8s-namespace.svc.cluster.local

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/service-upstream: "true"
nginx.ingress.kubernetes.io/upstream-vhost: core-apps.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.core_apps.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the Core Apps shared endpoint. If not defined, the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-core-apps-ingress-shared-cert
```






 | 

```
vault-core-apps-ingress-shared-cert
```






 |
| 

`k8s.ingress.core_apps.tls_secret_name`

 | 

The name of the Kubernetes secret the Core Apps Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-core-apps-ingress-cert
```






 | 

```
vault-core-apps-ingress-cert
```






 |
| 

`k8s.ingress.data_loader.annotations`

 | 

Annotations to apply only to the data loader kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: data-loader-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.data_loader.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the data loader shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-data-loader-ingress-shared-cert
```






 | 

```
vault-data-loader-ingress-shared-cert
```






 |
| 

`k8s.ingress.data_loader.tls_secret_name`

 | 

The name of the Kubernetes secret the data loader Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-data-loader-ingress-cert
```






 | 

```
vault-data-loader-ingress-cert
```






 |
| 

`k8s.ingress.documents.annotations`

 | 

Annotations to apply only to the documents kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: vault-documents-webserver-internal.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.documents.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the documents shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-documents-ingress-shared-cert
```






 | 

```
vault-documents-ingress-shared-cert
```






 |
| 

`k8s.ingress.documents.tls_secret_name`

 | 

The name of the Kubernetes secret the documents Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-documents-ingress-cert
```






 | 

```
vault-documents-ingress-cert
```






 |
| 

`k8s.ingress.edge_functions.annotations`

 | 

Annotations to apply only to the edge functions kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: edge-functions-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.edge_functions.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the edge functions shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-edge-functions-ingress-shared-cert
```






 | 

```
vault-edge-functions-ingress-shared-cert
```






 |
| 

`k8s.ingress.edge_functions.tls_secret_name`

 | 

The name of the Kubernetes secret the edge functions Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-edge-functions-ingress-cert
```






 | 

```
vault-edge-functions-ingress-cert
```






 |
| 

`k8s.ingress.labels`

 | 

Labels to apply to kubernetes ingress objects.

 | 

`object`

 | 

 | 

```
cert-manager.io/provider: instances
```






 |
| 

`k8s.ingress.ops.vault_admin_devtools.annotations`

 | 

Annotations to apply only to the ops vault-admin-devtools kubernetes ingress object. The values here are examples for the Nginx ingress controller: annotations: nginx.ingress.kubernetes.io/service-upstream: 'true' nginx.ingress.kubernetes.io/upstream-vhost: vault-admin-devtools.k8s-namespace.svc.cluster.local

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/service-upstream: "true"
nginx.ingress.kubernetes.io/upstream-vhost: vault-admin-devtools.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.ops.vault_admin_website.annotations`

 | 

Annotations to apply only to the ops vault-admin-website kubernetes ingress object - the values here are examples for the Nginx ingress controller which would be required in the scenario where Istio service mesh is used with strict mTLS peer authentication. annotations: nginx.ingress.kubernetes.io/service-upstream: 'true' nginx.ingress.kubernetes.io/upstream-vhost: vault-admin-website.k8s-namespace.svc.cluster.local

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/service-upstream: "true"
nginx.ingress.kubernetes.io/upstream-vhost: vault-admin-website.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.ops.vault_admin_website.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the ops vault-admin-website shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-ops-vault-admin-website-ingress-shared-cert
```






 | 

```
vault-ops-vault-admin-website-ingress-shared-cert
```






 |
| 

`k8s.ingress.ops.vault_admin_website.tls_secret_name`

 | 

The name of the Kubernetes secret the ops vault-admin-website Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-ops-vault-admin-website-ingress-cert
```






 | 

```
vault-ops-vault-admin-website-ingress-cert
```






 |
| 

`k8s.ingress.payments_hub.annotations`

 | 

Annotations to apply only to the payments hub kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: payment-hub-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.payments_hub.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the payments hub shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-payments-hub-ingress-shared-cert
```






 | 

```
vault-payments-hub-ingress-shared-cert
```






 |
| 

`k8s.ingress.payments_hub.tls_secret_name`

 | 

The name of the Kubernetes secret the payments hub Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-payments-hub-ingress-cert
```






 | 

```
vault-payments-hub-ingress-cert
```






 |
| 

`k8s.ingress.saml_idp.annotations`

 | 

Annotations to apply only to the SAML IdP kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: saml-idp.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.saml_idp.tls_secret_name`

 | 

The name of the Kubernetes secret the SAML IdP Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-saml-idp-ingress-cert
```






 | 

```
vault-saml-idp-ingress-cert
```






 |
| 

`k8s.ingress.workflows.annotations`

 | 

Annotations to apply only to the workflows kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: workflows-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.workflows.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the workflows shared endpoint associated with the active/passive deployment mode. If not defined the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-workflows-ingress-shared-cert
```






 | 

```
vault-workflows-ingress-shared-cert
```






 |
| 

`k8s.ingress.workflows.tls_secret_name`

 | 

The name of the Kubernetes secret the workflows Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-workflows-ingress-cert
```






 | 

```
vault-workflows-ingress-cert
```






 |
| 

`k8s.ingress.xpl.annotations`

 | 

Annotations to apply only to the xpl kubernetes ingress object - the values here are example for the Nginx ingress controller

 | 

`object`

 | 

```
{}
```






 | 

```
nginx.ingress.kubernetes.io/upstream-vhost: xpl-api-gateway.k8s-namespace.svc.cluster.local
```






 |
| 

`k8s.ingress.xpl.shared_tls_secret_name`

 | 

The name of the Kubernetes secret containing the certificate for the xpl shared endpoint. If not defined, the shared endpoint will use `tls_secret_name` instead.

 | 

`string`

 | 

```
vault-xpl-ingress-shared-cert
```






 | 

```
vault-xpl-ingress-shared-cert
```






 |
| 

`k8s.ingress.xpl.tls_secret_name`

 | 

The name of the Kubernetes secret the xpl Ingress uses to secure traffic. This is optional as it has a default.

 | 

`string`

 | 

```
vault-xpl-ingress-cert
```






 | 

```
vault-xpl-ingress-cert
```






 |
| 

`k8s.namespace`

 | 

The kubernetes namespace that this vault instance will be deployed to

 | 

`string`

 | 

 | 

```
client-prod
```






 |
| 

`k8s.pull_image_by_digest`

 | 

IMPORTANT!! Disable this field if using the docker or podman CLI to copy images to your private registry as 'pull+tag+push' will not preserve the original digests. When enabled, reference images by digest instead of semantic tag in kubernetes manifests. This expects the registry used with this workload to honour the original image digests. Tools such as 'skopeo' and 'crane' will preserve digests when copying images but the docker or podman CLI will not.

 | 

`boolean`

 | 

```
true
```






 | 

```
true
```






 |
| 

`kafka.ca_rotation.schedule`

 | 

Schedule for running the kafka CA rotation job in cron format. Ignored if kafka-ca-rotation-pkg not deployed. WARNING: Make sure not to schedule for the same time as certificate rotation in the kafka-cert-rotation-pkg, this may lead to unexpected behaviour.

 | 

`string`

 | 

```
0 0 15 1 \*
```






 | 

```
0 0 15 1 \*
```






 |
| 

`kafka.cert_rotation.schedule`

 | 

Schedule for running the kafka certificate rotation job in cron format. Ignored if kafka-cert-rotation-pkg not deployed.

 | 

`string`

 | 

```
0 0 1 \* \*
```






 | 

```
0 0 1 \* \*
```






 |
| 

`kafka.client.auth_mechanism`

 | 

Set the authentication mechanism for Kafka brokers. If not set to "none", kafka.client.disable\_ssl must be set to false.

 | 

`string`

 | 

```
mtls
```






 | 

```
mtls
```






 |
| 

`kafka.client.brokers`

 | 

Bootstrap Broker Address(es)

 | 

`string`

 | 

 | 

```
kafka:9095
```






 |
| 

`kafka.client.connection_setup_timeout`

 | 

Sets the timeout for broker connection setup, including SSL handshake and SASL handshake.

 | 

`integer`

 | 

```
60000
```






 | 

```
60000
```






 |
| 

`kafka.client.disable_ssl`

 | 

Set to true to disable SSL for Kafka client to broker communications

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.client.oauth.auth_method`

 | 

Set the method for authenticating with the OAuth server. This determines where the client ID and client secret go in access token requests. With 'basic-auth', the client credentials are encoded and sent in the request header as per the HTTP Basic authentication scheme (RFC2617). With 'request-body', the client credentials are sent as the parameters "client\_id" and "client\_secret" in the request body. Optional.

 | 

`string`

 | 

```
basic-auth
```






 | 

```
basic-auth
```






 |
| 

`kafka.client.oauth.auth_server_endpoint`

 | 

Set the OAuth server endpoint for access token retrieval.

 | 

`string`

 | 

```
""
```






 | 

```
https://auth-server.host/token
```






 |
| 

`kafka.client.oauth.extensions`

 | 

Set SASL extensions to be communicated with the Kafka broker during SASL/OAUTHBEARER authentication. This must be a valid JSON string with keys and values following RFC7628 Section 3.1 syntax. Optional.

 | 

`string`

 | 

```
""
```






 | 

```
{"fieldone": "valueone"}
```






 |
| 

`kafka.client.oauth.istio.host_entry`

 | 

Set the OAuth server hostname to be added to the service mesh. Warning: The hostname is templated into a ServiceEntry resource and must be an FQDN. This value must be set if you are using OAuth.

 | 

`string`

 | 

```
""
```






 | 

```
auth-server.host
```






 |
| 

`kafka.client.oauth.istio.host_port_protocol`

 | 

Set the OAuth server port protocol the clients will connect to the server over. Warning: This value must be set if you are using OAuth.

 | 

`string`

 | 

```
HTTPS
```






 | 

```
HTTPS
```






 |
| 

`kafka.client.oauth.istio.host_port`

 | 

Set the OAuth server port to be added into the service mesh. Warning: This value must be set if you are using OAuth.

 | 

`string`

 | 

```
443
```






 | 

```
443
```






 |
| 

`kafka.client.oauth.scopes`

 | 

Set any scopes to be passed to the OAuth server when clients request access tokens. This must be a space separated list. Optional.

 | 

`string`

 | 

```
""
```






 | 

```
kafka-clients
```






 |
| 

`kafka.client.ssl_subject`

 | 

Set the SSL Subject name that will be used when generating Kafka ACLs. The Subject (aka X.500 Distinguished Name) must match the format: 'OU=<organizationUnit>,O=<organizationName>,L=<localityName>,ST=<stateName>,C=<country>', where the Common Name (CN) should be excluded as it will differ between each service. This only needs to be set when mTLS is selected as the auth mechanism and the Vault Installer is not used to generate service certificates.

 | 

`string`

 | 

```
OU=vault,O=Thought Machine Ltd,L=London,ST=Greater London,C=GB
```






 | 

```
OU=vault,O=Thought Machine Ltd,L=London,ST=Greater London,C=GB
```






 |
| 

`kafka.client.use_system_ca`

 | 

Set to true to use the System CA/truststore for Kafka client to broker communications over SSL

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.monitoring.disable_consumer_lag_exporter`

 | 

Disable the consumer lag exporter. Warning: Vault Kafka processors scale based on consumer lag metrics. Disabling the exporter means that the Kafka processors will only scale based on CPU and memory usage. An alternative solution is to pin all Kafka processors to the maximum replicas count.

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.topics.disable_topic_reconciliation`

 | 

Disable ongoing Kafka topics reconciliation and partition count changes in Vault topic manager. Once the topics are created and configured, the topic manager will not maintain the settings. This option may be useful if the privileges required to manage topics are only to be assigned to Vault during installation, or if the number of partitions are manually reduced for cost-saving, for example in development environments.

Note: Disabling Kafka topics reconciliation means changes in partition count in new Vault releases will not be automatically applied. If the partition count is reduced in the standard configuration, this could result in increased costs when reconciliation is disabled.

Warning: This flag must be set if the Kafka brokers do not support ACLs.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.topics.disable_vault_topic_management`

 | 

Disable ALL topic management by Vault. This may be set to "true" if Kafka topics are to be created and configured separately - for example if the Kafka provider doesn’t support Vault’s automatic management. The Vault release package includes details of the topic configuration for use in this scenario.

Warning: This flag must NOT be set if it is desired for Vault to automatically create, update and delete Kafka topics.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.topics.exclude_payments_hub_topics`

 | 

Do not create Payments Hub topics or delete any existing ones.

Note: You must not deploy any of the PaymentsHub packages as these will start failing due to the missing topics. Warning: Any existing data for these topics will be deleted. Only enable this flag if Payments Hub is not used within the environment. Disabling topic reconciliation does not disable the functionality behind this flag.

 | 

`boolean`

 | 

```
true
```






 | 

```
true
```






 |
| 

`kafka.topics.exclude_workflows_topics`

 | 

Do not create Workflows topics or delete any existing ones.

Note: This option must be set to "false" if the Workflow services are packaged in the Vault Core component. If packaged in a separate component that is not installed then this flag may be set to "true" to omit the Workflow-related topics. Warning: Any existing data for these topics will be deleted. Only enable this flag if Workflows packages are not used within the environment. Disabling topic reconciliation does not disable the functionality behind this flag.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`kafka.topics.exclude_xpl_topics`

 | 

Do not create XPL topics or delete any existing ones.

Note: You must not deploy any of the XPL packages as these will start failing due to the missing topics. Warning: Any existing data for these topics will be deleted. Only enable this flag if XPL packages are not used within the environment. Disabling topic reconciliation does not disable the functionality behind this flag.

 | 

`boolean`

 | 

```
true
```






 | 

```
true
```






 |
| 

`ledger.backfill_warm_ledger.batch_size`

 | 

The number of DB rows the backfill job will attempt to update in a single batch. Decrease this value if you encounter context deadline exceeded errors.

 | 

`integer`

 | 

```
5000
```






 | 

```
10000
```






 |
| 

`ledger.backfill_warm_ledger.timeout_sec`

 | 

Total timeout for the database statement. Increase this if you encounter context deadline exceeded errors.

 | 

`string`

 | 

```
60s
```






 | 

```
60s
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.base_delay_backoff_duration`

 | 

Base backoff delay when retrying after transient error.

 | 

`string`

 | 

```
100ms
```






 | 

```
100ms
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.inactive_period`

 | 

Defines inactive period range in UTC. It is a period when the job will sleep, for example during EOD.

 | 

`string`

 | 

```
""
```






 | 

```
22:00-04:30
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.initial_delay_backoff_duration`

 | 

Initial backoff delay when retrying after transient error.

 | 

`string`

 | 

```
10ms
```






 | 

```
10ms
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.max_delay_backoff_duration`

 | 

Max backoff delay when retrying after transient error.

 | 

`string`

 | 

```
5s
```






 | 

```
5s
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.max_retries`

 | 

How many times worker will retry if a transient error happens.

 | 

`string`

 | 

```
10
```






 | 

```
10
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.milestone_page_size`

 | 

Number of milestones to fetch in one page.

 | 

`string`

 | 

```
10
```






 | 

```
10
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.parallelism`

 | 

Number of concurrent workers to run.

 | 

`string`

 | 

```
16
```






 | 

```
16
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.posting_max_uc_page_size`

 | 

Number of Update Counts for postings to fetch in one page.

 | 

`string`

 | 

```
50
```






 | 

```
50
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.read_only`

 | 

If on, job doesn’t write to DB. Restarts with saved progress are not supported for that case.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.schedule`

 | 

Defines the cron schedule the Balance Milestone Reconciler job operates on in UTC time.

 | 

`string`

 | 

```
0 10 \* \* \*
```






 | 

```
0 10 \* \* \*
```






 |
| 

`ledger.jobs.balance_milestone_reconciler.sleep_duration`

 | 

Sleep duration each time after a milestone has been verified.

 | 

`string`

 | 

```
0s
```






 | 

```
0s
```






 |
| 

`ledger.target_latency_percentile`

 | 

The percentile for which to collect latencies of online postings. Used for throttling offline postings to maintain acceptable service levels for online posting throughput. Defaults to the 95th percentile, but can be set to any percentile value for finer grained tuning.

 | 

`string`

 | 

```
0.95
```






 | 

```
0.95
```






 |
| 

`ledger.target_latency`

 | 

The target latency for online postings. The system will adjust to ensure the actual latency is at or just below this value. If the Nth percentile of online postings is less than this, the ledger will increase offline posting throughput (EOD and low\_priority). This can be increased if higher offline posting throughput is preferred or if pre-posting code is particularly demanding.

 | 

`string`

 | 

```
350ms
```






 | 

```
200ms
```






 |
| 

`ledger_balances.db.admin_user`

 | 

Admin user for the ledger\_balances database (used for schema initialisation) Warning: For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`ledger_balances.db.host`

 | 

Hostname for the balances database Warning: This section should ONLY be populated if using a separate physical db for ledger\_balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
ledger\_balances.db.host
```






 |
| 

`ledger_balances.db.migrator_user`

 | 

Ledger balances DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided Warning: For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.migrator\_user }}
```






 | 

```
vault\_ledger\_balances\_migrator
```






 |
| 

`ledger_balances.db.name`

 | 

Name of the ledger balances database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided Warning: For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.name }}
```






 | 

```
vault\_ledger\_balances
```






 |
| 

`ledger_balances.db.port`

 | 

Database port to connect to. Warning: For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`ledger_balances.db.user`

 | 

Username to access the ledger balances database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_ledger\_balances\\" principal, which can be found in the release.json file. Warning: For Vault versions instances created <3.0.1 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=3.0.1 the value can be different if using a separate physical db for ledger\_balances.

 | 

`string`

 | 

```
{{ vault.db.user }}
```






 | 

```
vault\_ledger\_balances
```






 |
| 

`metrics.exporters.otlp_endpoint`

 | 

The GRPC endpoint for the otel-collector to send Vault Core metrics using the OpenTelemetry Protocol. If none is set, metrics are not scraped by otel-collector and this feature is disabled. Note: Not all observability platforms support all types of OTLP metrics so depending on the platform you may see warning logs of rejected unsupported metrics. Metrics are shipped with DELTA temporality Note2: If the cluster is running the OpenShift Red Hat build of OpenTelemetry Operator. [https://docs.redhat.com/en/documentation/openshift\_container\_platform/4.18/html/red\_hat\_build\_of\_opentelemetry/install-otel#install-otel](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/red_hat_build_of_opentelemetry/install-otel#install-otel) then OTLP metrics export is not supported by Vault Core.

 | 

`string`

 | 

```
""
```






 | 

```
endpoint.svc.cluster.local:4317
```






 |
| 

`metrics.exporters.otlp_http_config`

 | 

The OTLP HTTP configuration for the otel-collector to send Vault Core metrics using the OpenTelemetry Protocol. The root key must be `otlphttp/metrics` and the configuration must contain an `endpoint` key. If none is set, metrics are not scraped by otel-collector and this feature is disabled. This must be a valid otlphttp configuration [https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/otlphttpexporter/README.md](https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/otlphttpexporter/README.md) Note: Not all observability platforms support all types of OTLP metrics so depending on the platform you may see warning logs of rejected unsupported metrics. Metrics are shipped with DELTA temporality Note2: If the cluster is running the OpenShift Red Hat build of OpenTelemetry Operator. [https://docs.redhat.com/en/documentation/openshift\_container\_platform/4.18/html/red\_hat\_build\_of\_opentelemetry/install-otel#install-otel](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/red_hat_build_of_opentelemetry/install-otel#install-otel) then OTLP metrics export is not supported by Vault Core.

 | 

`object`

 | 

```
{}
```






 | 

```
otlphttp/metrics:
    endpoint: https://{your-activegate-domain}:9999/e/{your-environment-id}/api/v2/otlp
    headers:
        Authorization: Api-Token <your-api-token>
```






 |
| 

`observability.alertmanager.config_yml`

 | 

Alertmanager config file - schema here: [https://prometheus.io/docs/alerting/latest/configuration/](https://prometheus.io/docs/alerting/latest/configuration/) Secrets placed in Hashicorp Vault under secrets/<monitoring\_namespace>/alertmanager can be referenced here. See example below and Observability Stack Installation and User Guide for more details.

 | 

`string`

 | 

```
receivers:
  - name: default-receiver
route:
  receiver: 'default-receiver'
  group\_by: \[alertname, kubernetes\_namespace\]
```






 | 

```
global:
  # ${SLACK\_API\_URL} will be replaced with the SLACK\_API\_URL\_env secret stored in HashiCorp Vault.
  # Other values in Hashicorp vault alertmanager secrets folder and ending with \_env can be used here too
  slack\_api\_url: ${SLACK\_API\_URL}
  # Email recievers only if email alerts are being used.
  # The smarthost and SMTP sender used for mail notifications.
  smtp\_smarthost: 'localhost:25'
  smtp\_from: 'alertmanager@example.org'
  smtp\_auth\_username: 'alertmanager'
  smtp\_auth\_password: 'password'

receivers:
  - name: default-receiver
    slack\_configs:
      - channel: '#test-alerts'
        text: |
          {{ if gt (len .Alerts.Firing) 0 }}
            {{ range .Alerts.Firing -}}
              \*Severity:\* \`{{ .Labels.severity }}\` \*Source:\* \`{{ .Annotations.source }}\`{{ "\\n" -}}
              \*Summary:\* {{ .Annotations.summary }}
            {{- end }}
          {{ else }}
            {{ range .Alerts.Resolved -}}
              \*Severity:\* \`{{ .Labels.severity }}\` \*Source:\* \`{{ .Annotations.source }}\`{{ "\\n" -}}
              \*Summary:\* {{ .Annotations.summary }}
            {{- end }}
          {{ end }}
        title: |
          \[{{ .Status | toUpper -}}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len  }}{{ end }}\]
          {{- .GroupLabels.alertname }}
        send\_resolved: true
    # Email Reciever.
    email\_configs:
      - to: 'team-X+alerts@example.org'
route:
  receiver: 'default-receiver'
  group\_by: \[alertname, kubernetes\_namespace\]
```






 |
| 

`observability.alertmanager.replica_persistent_storage_size`

 | 

Desired size for the persistent volume attached to each Alertmanager replica, in Gi units. Please note that changing this value will only update the StatefulSet. To update volumes already created, check out kubernetes documentation, for example: "https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/volume-expansion"

 | 

`string`

 | 

```
1Gi
```






 | 

```
1Gi
```






 |
| 

`observability.alertmanager.storageclass`

 | 

The Kubernetes StorageClass to be used by Alertmanager volumes. Please note Kubernetes StorageClasses are immutable objects and do not reconcile seamlessly.

 | 

`string`

 | 

```
general-encrypted
```






 | 

```
general-encrypted
```






 |
| 

`observability.cluster_name`

 | 

Cluster name for observability functionality - used by monitoring components. This variable will control the kubernetes\_cluster metrics label, e.g. for the Cluster dropdown in Grafana dashboards. It is recommended to use the cluster’s short name or nickname. Note: No spaces are allowed in this value and it can not be left empty

 | 

`string`

 | 

```
cluster.name.here
```






 | 

```
cluster.name.here
```






 |
| 

`observability.cluster_prometheus.cardinality.storage.size`

 | 

Persistent storage size allocated for Prometheus Cardinality, in Gi.

 | 

`string`

 | 

```
4Gi
```






 | 

```
16Gi
```






 |
| 

`observability.cluster_prometheus.cloud.storage.size`

 | 

Persistent storage size allocated for Prometheus Cloud, in Gi.

 | 

`string`

 | 

```
25Gi
```






 | 

```
10Gi
```






 |
| 

`observability.cluster_prometheus.istio.storage.size`

 | 

Persistent storage size allocated for Prometheus Istio, in Gi.

 | 

`string`

 | 

```
25Gi
```






 | 

```
80Gi
```






 |
| 

`observability.cluster_prometheus.kubelet.storage.size`

 | 

Persistent storage size allocated for Prometheus Kubelet, in Gi.

 | 

`string`

 | 

```
25Gi
```






 | 

```
80Gi
```






 |
| 

`observability.cluster_prometheus.kubernetes.storage.size`

 | 

Persistent storage size allocated for Prometheus Kubernetes, in Gi.

 | 

`string`

 | 

```
35Gi
```






 | 

```
25Gi
```






 |
| 

`observability.cluster_prometheus.meta.storage.size`

 | 

Persistent storage size allocated for Prometheus Meta, in Gi.

 | 

`string`

 | 

```
4Gi
```






 | 

```
4Gi
```






 |
| 

`observability.cluster_prometheus.remote_write`

 | 

Expects a list of remoteWrite configurations for cluster level Prometheus instances. Please check Prometheus Operator documentation on RemoteWriteSpec.

 | 

`array`

 | 

```
\[\]
```






 | 

```
\- remoteTimeout: 2m
  url: http://localhost:8080/write
  writeRelabelConfigs:
    - action: keep
      regex: .+
      sourceLabels:
        - \_\_name\_\_
```






 |
| 

`observability.cluster_prometheus.replicas`

 | 

The number of replicas for Cluster Prometheus instances. Use 2 or 3 for High Availability. This value should be less than or equal to the number of Availability Zones of the cluster.

 | 

`integer`

 | 

```
1
```






 | 

```
1
```






 |
| 

`observability.cluster_prometheus.retention`

 | 

Retention for all cluster prometheus instances, in days or weeks. If you increase the retention, please adjust storage size as well, otherwise Prometheus will start removing old storage blocks to avoid running out of disk space.

 | 

`string`

 | 

```
2w
```






 | 

```
6w
```






 |
| 

`observability.cluster_size`

 | 

The size of the cluster that the cluster-wide observability component is monitoring. If there are many Vault Core environments on a cluster or they are large environments, consider using a larger value here. Increasing this value requires more CPU and memory, and increases costs. Thought Machine Support may advise changing this value in certain cases. Note: This value does not affect observability workloads in the 'vault-core' component. You can configure Vault Core observability workloads using the 'common.deployment\_size' value.

 | 

`string`

 | 

```
medium
```






 | 

```
medium
```






 |
| 

`observability.grafana.auth_anonymous_enabled`

 | 

Enable anonymous access to Grafana. This value will populate `GF_AUTH_ANONYMOUS_ENABLED` env in Grafana.

 | 

`string`

 | 

```
false
```






 | 

```
true
```






 |
| 

`observability.grafana.auth_anonymous_org_name`

 | 

Organisation name to use when setting up Grafana. This value will populate GF\_AUTH\_ANONYMOUS\_ORG\_NAME env in Grafana.

 | 

`string`

 | 

```
Main Org.
```






 | 

```
Main Org.
```






 |
| 

`observability.grafana.auth_anonymous_org_role`

 | 

Role to assign to the organisation in Grafana. Default is Viewer, can also be set to Editor to elevate permissions. This value will populate GF\_AUTH\_ANONYMOUS\_ORG\_ROLE env in Grafana.

 | 

`string`

 | 

```
Viewer
```






 | 

```
Viewer
```






 |
| 

`observability.grafana.caAuth`

 | 

Set this value to true if you want to configure CA authentication for the configured datasource

 | 

`string`

 | 

```
false
```






 | 

```
false
```






 |
| 

`observability.grafana.caCert`

 | 

In case caAuth parameter is set to true, the value of this field will be used as the certificate used for authentication with datasource and not Grafana UI.

ATTENTION: CERTIFICATE HAS TO BE IN A SINGLE LINE

 | 

`string`

 | 

 | 

```
\-----BEGIN CERTIFICATE-----QKEQWKLEQWKELQWKELQWKEL131231ASMD/SAMD/SAMCZXNcMZXNCASDASD434534KASMDAMWQEQWK-----END CERTIFICATE-----
```






 |
| 

`observability.grafana.config_ini`

 | 

Grafana Enterprise config file - schema here: [https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/enterprise-configuration/](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/enterprise-configuration/) Other `observability.grafana` values will override whatever duplicated configuration is in this file. For Grafana Enterprise license token you can either include it in this value or create a secret with key GF\_ENTERPRISE\_LICENSE\_TEXT\_env in the Secret Management engine. See example below and Observability Stack Installation and User Guide for more details.

 | 

`string`

 | 

```
""
```






 | 

```
\[enterprise\]
license\_text = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlzIjoiaXMiLCJub3QiOiJhIiwidmFsaWQiOiJsaWNlbnNlIn0.redacted

\[security\]
admin\_user = vault

\[auth.anonymous\]
enabled = true
org\_name = Main Org.
org\_role = Admin

\[log\]
mode = console

\[analytics\]
reporting\_enabled = false

\[snapshots\]
external\_enabled = false

\[feature\_toggles\]
enable = autoMigrateOldPanels
```






 |
| 

`observability.grafana.replica_count`

 | 

Set this value if you want to configure replica count for Grafana deployment. By default it is set to 1. Setting it to 0 will scale down the deployment completely. For that you need to ensure external Grafana has been set up. Setting it to 2 will make the deployment highly available (HA)

 | 

`integer`

 | 

```
1
```






 | 

```
1
```






 |
| 

`observability.grafana.security_admin_user`

 | 

Username for the default admin user for Grafana. This value will populate the GF\_SECURITY\_ADMIN\_USER env in Grafana.

 | 

`string`

 | 

```
vault
```






 | 

```
vault
```






 |
| 

`observability.ingress.domain`

 | 

Subdomain to use for all observability services in ingress. Internally, this should be in the form "clustername.internal.domain"

 | 

`string`

 | 

```
observability.services.endpoint.domain.here
```






 | 

```
observability.services.endpoint.domain.here
```






 |
| 

`observability.ingress.labels`

 | 

Labels to apply to the ingress for observability services

 | 

`object`

 | 

```
cert-manager.io/provider: instances
```






 | 

```
cert-manager.io/provider: instances
```






 |
| 

`observability.ingress.monitoring-annotations`

 | 

Annotations to apply to the ingress for observability services

 | 

`object`

 | 

```
kubernetes.io/ingress.class: nginx-internal
tmachine.io/dns.class: private
```






 | 

```
kubernetes.io/ingress.class: nginx-internal
tmachine.io/dns.class: private
```






 |
| 

`observability.ingress.monitoring_tls_secretname`

 | 

The name of the TLS secret for the monitoring namespace

 | 

`string`

 | 

```
tm-monitoring-ingress-cert
```






 | 

```
custom-secretname-here
```






 |
| 

`observability.monitoring_namespace`

 | 

The kubernetes namespace to install observability monitoring into

 | 

`string`

 | 

```
tm-monitoring
```






 | 

```
tm-monitoring
```






 |
| 

`observability.namespaced_prometheus.envoy.storage.size`

 | 

Persistent storage size allocated for Prometheus Envoy, in Gi.

 | 

`string`

 | 

```
30Gi
```






 | 

```
30Gi
```






 |
| 

`observability.namespaced_prometheus.kafka.storage.size`

 | 

Persistent storage size allocated for Prometheus Kafka, in Gi.

 | 

`string`

 | 

```
20Gi
```






 | 

```
20Gi
```






 |
| 

`observability.namespaced_prometheus.kubelet.storage.size`

 | 

Persistent storage size allocated for Namespaced Prometheus Kubelet, in Gi.

 | 

`string`

 | 

```
25Gi
```






 | 

```
25Gi
```






 |
| 

`observability.namespaced_prometheus.kubernetes.storage.size`

 | 

Persistent storage size allocated for Namespaced Prometheus Kubernetes, in Gi.

 | 

`string`

 | 

```
25Gi
```






 | 

```
25Gi
```






 |
| 

`observability.namespaced_prometheus.postgres.storage.size`

 | 

Persistent storage size allocated for Prometheus Postgres, in Gi.

 | 

`string`

 | 

```
10Gi
```






 | 

```
10Gi
```






 |
| 

`observability.namespaced_prometheus.remote_write`

 | 

Expects a list of remoteWrite configurations for Namespaces Prometheus instances. Please check Prometheus Operator documentation on RemoteWriteSpec.

 | 

`array`

 | 

```
{{ observability.cluster\_prometheus.remote\_write }}
```






 | 

```
\- remoteTimeout: 2m
  url: http://localhost:8080/write
  writeRelabelConfigs:
    - action: keep
      regex: .+
      sourceLabels:
        - \_\_name\_\_
```






 |
| 

`observability.namespaced_prometheus.replicas`

 | 

The number of replicas for Namespaced Prometheus instances. Use 2 or 3 for High Availability. This value should be less than or equal to the number of Availability Zones of the cluster.

 | 

`integer`

 | 

```
1
```






 | 

```
1
```






 |
| 

`observability.namespaced_prometheus.retention`

 | 

Retention period for all Namespaced Prometheus instances. If you increase retention, please adjust storage size as well, otherwise Prometheus will start removing old storage blocks to avoid running out of disk space.

 | 

`string`

 | 

```
6w
```






 | 

```
2w
```






 |
| 

`observability.namespaced_prometheus.vault.storage.size`

 | 

Persistent storage size allocated for Prometheus Vault, in Gi.

 | 

`string`

 | 

```
45Gi
```






 | 

```
45Gi
```






 |
| 

`observability.node_exporter.host_network`

 | 

Node exporter needs access to the host network to be able write the correct hostname in the nodename label of its metrics. If it will run in an environment where host network access isn’t acceptable or possible, set this to false.

 | 

`boolean`

 | 

```
true
```






 | 

```
false
```






 |
| 

`observability.node_exporter.memory_limit`

 | 

The memory request of the node exporter. Must either be between 30M and 999M, 30Mi and 999Mi, 1G and 9G or 1Gi and 9Gi. Must be expressd in M, Mi, G or Gi.

 | 

`string`

 | 

```
256Mi
```






 | 

```
256Mi
```






 |
| 

`observability.node_exporter.memory_request`

 | 

The memory request of the node exporter. Must either be between 30M and 999M, 30Mi and 999Mi, 1G and 9G or 1Gi and 9Gi. Must be expressd in M, Mi, G or Gi.

 | 

`string`

 | 

```
32Mi
```






 | 

```
32Mi
```






 |
| 

`observability.prometheus.custom_labels`

 | 

Map of custom labels to be applied to metrics and alerts generated by Prometheus. Note that this can overwrite existing labels, and it MUST comply with the metric labels restrictions at [https://prometheus.io/docs/concepts/data\_model/](https://prometheus.io/docs/concepts/data_model/). ALL alerts generated by such Prometheus instance will contain the following labels

 | 

`object`

 | 

```
{}
```






 | 

```
environment: development
region: us-east
```






 |
| 

`observability.prometheus.storageclass`

 | 

The Kubernetes StorageClass to be used by Prometheus volumes.

 | 

`string`

 | 

```
prometheus
```






 | 

```
prometheus
```






 |
| 

`observability.provision_vertical_autoscaling_configs`

 | 

Include VPA (Vertical Scaling) configuration for Observability components which support vertical scaling. Please only enable on kubernetes clusters which support Vertical Scaling. See "https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler" for more information on vertical scaling functionality.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`observability.vertical_autoscaling_update_mode`

 | 

Set the Vertical Scaling Update Mode for those Observability components which support vertical scaling. observability.provision\_vertical\_autoscaling\_configs would have to be set to True Please allow VPA config provisioning ONLY if the target kubernetes cluster has support for Vertical Autoscaling (VPA). For more info, see 'updateMode' 'https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler#podupdatepolicy\_v1\_autoscalingk8sio' 'Initial' will apply recommendation on initial pod start, 'Auto' will also evict pods to apply recommendations.

 | 

`string`

 | 

```
Auto
```






 | 

```
Auto
```






 |
| 

`offline_migrations.cron`

 | 

Cron expression describing when the migrator should be triggered. This works in concert with the common.background\_tasks.time\_window value. The extended BSD cron expressions syntax is accepted - including ranges, and macros such as @hourly. See [https://man.freebsd.org/cgi/man.cgi?crontab%285%29](https://man.freebsd.org/cgi/man.cgi?crontab%285%29)

 | 

`string`

 | 

```
\*/10 \* \* \* \*
```






 | 

```
5,30,45 \*/2 \* \* \*
```






 |
| 

`ops.bank_name`

 | 

Name of the bank, as displayed in the operations dashboard

 | 

`string`

 | 

 | 

```
client
```






 |
| 

`ops.currency_display`

 | 

Determines if the code and/or currency symbol should be displayed for monetary values in the Operations Dashboard, i.e. code: 1,234,567.00 GBP, symbol: £1,234,567.00, code\_and\_symbol: GBP £1,234,567.00

 | 

`string`

 | 

```
code
```






 | 

```
symbol
```






 |
| 

`ops.db.admin_user`

 | 

Admin user for the ops database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`ops.db.host`

 | 

Hostname for the ops database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`ops.db.migrator_user`

 | 

Ops DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"ops\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
ops\_migrator
```






 | 

```
ops\_migrator
```






 |
| 

`ops.db.name`

 | 

Name of the ops database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
ops
```






 | 

```
ops
```






 |
| 

`ops.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`ops.db.user`

 | 

Username to access the operations dashboard database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"ops\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
ops
```






 | 

```
ops
```






 |
| 

`ops.default_locale`

 | 

This locale will be used for formatting values in the Operations Dashboard, including currencies, dates and times. It is used as fallback if no locale can be detected from the user’s browser or if ops.use\_browser\_locale is set to false. As with ops.supported\_locales, the locale format should conform to an ISO 639-1 language code. This locale must also be added to ops.supported\_locales.

 | 

`string`

 | 

```
en-GB
```






 | 

```
en-GB
```






 |
| 

`ops.default_page_title`

 | 

Default title for pages in the operations dashboard

 | 

`string`

 | 

 | 

```
client bank
```






 |
| 

`ops.display_timezone`

 | 

Formats the display dates in the Operations Dashboard to the specified timezone. This value must be an IANA Timezone Database Name e.g. Asia/Singapore. The default value is UTC. For a list of Timezone Database Names see: [https://en.wikipedia.org/wiki/List\_of\_tz\_database\_time\_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

 | 

`string`

 | 

```
UTC
```






 | 

```
Europe/London
```






 |
| 

`ops.pluggable_components.payments_hub`

 | 

Payment hub pluggable component

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`ops.pluggable_components.product_hub`

 | 

Product hub pluggable component

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`ops.pluggable_components.workflows`

 | 

Workflows pluggable component

 | 

`boolean`

 | 

```
true
```






 | 

```
true
```






 |
| 

`ops.pluggable_components.xpl`

 | 

Experience layer pluggable component

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`ops.supported_locales`

 | 

Defines the list of locales that the user can select to translate content within Operations Dashboard. Only the values defined in ops.supported\_locales.example.value can be used As with ops.default\_locale, the locale format should conform to an ISO 639-1 language code.

 | 

`array`

 | 

```
\- en-GB
```






 | 

```
\- en-GB
- de-DE
- es-ES
- es-XL
- fr-FR
- id-ID
- ko-KR
- vi-VN
```






 |
| 

`ops.use_browser_locale`

 | 

Determines whether to take the user’s browser locale into consideration when formatting values (including currencies, dates and times) in the Operations Dashboard. If set to false, the value of ops.default\_locale will be used.

 | 

`boolean`

 | 

```
true
```






 | 

```
false
```






 |
| 

`ops.website.devtools_endpoint`

 | 

The endpoint used for ingress to the operations dashboard devtools.

 | 

`string`

 | 

```
devtools.ops.{{ common.services.domain }}
```






 | 

```
devtools.ops.insert.client.endpoint.here
```






 |
| 

`ops.website.endpoint`

 | 

The endpoint used for ingress to the operations dashboard website. This must be a subdomain of common.services.domain. Cookies can only be set on the domain a request is made from. This implies that all SAML protected websites must be part of the same domain. ([https://tools.ietf.org/html/rfc6265#section-4.1.2.3](https://tools.ietf.org/html/rfc6265#section-4.1.2.3))

 | 

`string`

 | 

```
ops.{{ common.services.domain }}
```






 | 

```
ops.insert.client.endpoint.here
```






 |
| 

`ops.website.shared_endpoint`

 | 

The endpoint used for ingress to the operations dashboard website in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint; the same restrictions on the default endpoint apply.

 | 

`string`

 | 

```
""
```






 | 

```
ops.insert.client.shared.endpoint.here
```






 |
| 

`payment_hub_api.default_permissions_policy`

 | 

The default OPA policy used when authorising requests made to the Payment Hub API.

Warning: this value has no effect once a policy has been created using the Policy Management Service for "payment\_hub\_api\_permissions".

It is recommended to not change this value once Vault has been set up. Instead update the policy via the Policy Management endpoints of the Core API, for which this policy has the policy\_schema\_id "payment\_hub\_api\_permissions".

 | 

`string`

 | 

```
package payment\_hub\_api\_permissions

default allow = false

allow {
  input.valid\_scopes\[\_\] == input.jwt\_claims.scp\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == split(input.jwt\_claims.scope, " ")\[\_\]
}

allow {
  input.valid\_scopes\[\_\] == input.role\_privileges\[\_\]
}
```






 | 

```
package payment\_hub\_api\_permissions

default allow = false

allow {
  # Allow all HTTP GET requests.
  input.http\_method == "GET"
}
```






 |
| 

`payments_hub.endpoint`

 | 

The endpoint used for ingress to the payment hub.

 | 

`string`

 | 

```
""
```






 | 

```
payments-hub-api.insert.client.endpoint.here
```






 |
| 

`payments_hub.exception_handling_cases_json`

 | 

An optional json object defining the exception handling behaviour; Change to {} for no exception handling.

 | 

`string`

 | 

 | 

```
{
  "INBOUND\_AUTH\_REJECTIONS": {
    "RESTRICTION\_REQUIRES\_REVIEW": {
      "REDIRECT\_FUNDS": true
    }
  }
}
```






 |
| 

`payments_hub.fps_internal_account`

 | 

The internal account for FPS.

 | 

`string`

 | 

 | 

```
FPS\_CREDIT\_TRANSFER
```






 |
| 

`payments_hub.fps_txnref_prefix`

 | 

A prefix that is used during the generation of a scheme\_transaction\_id (for FPS payments).

 | 

`string`

 | 

 | 

```
TMFPS
```






 |
| 

`payments_hub.gcp_bucket`

 | 

An optional GCP bucket name that is used by the Vocalink service to store and retrieve payment scheme data. Only applicable if the Payments Hub is deployed.

 | 

`string`

 | 

```
""
```






 | 

```
vocalink\_data\_bucket
```






 |
| 

`payments_hub.local_bics`

 | 

A comma separated list of SWIFT BICs that are considered to be local to the Vault instance. This must be set to enable IBAN creation in the Payments Hub.

 | 

`string`

 | 

```
""
```






 | 

```
BANKGB2L,BANKGB2LABC
```






 |
| 

`payments_hub.local_sort_codes`

 | 

A comma separated list of sort codes that are considered to be local to the Vault instance. The Payments Hub uses these to: - Determine if payments should be routed as OnUs payments (rather than going out to a scheme). - As a validation check during GBDSC account number generation. It is not possible to generate an account number for a sort code that is not listed here. Only applicable if the Payments Hub is deployed.

 | 

`string`

 | 

```
""
```






 | 

```
999999,999998
```






 |
| 

`payments_hub.redirection_account`

 | 

The account to which funds to be redirected in exception handling cases. Applies to FPS payments only. As of Vault version 5.0 this must be an Account rather than an InternalAccount.

 | 

`string`

 | 

 | 

```
FPS\_CREDIT\_TRANSFER\_REDIRECTION
```






 |
| 

`payments_hub.shared_endpoint`

 | 

The endpoint used for ingress to the payment hub in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
payments-hub-api.insert.client.shared\_endpoint.here
```






 |
| 

`payments_hub.unapplied_funds_account`

 | 

The id of the account to which funds are redirected in the case where pre-cleared funds cannot be applied to a customer’s account (for example, in the FPS execution plan "FPS\_CLEARED"). Applies to FPS payments only. As of Vault version 5.0 this must be an Account rather than an InternalAccount.

 | 

`string`

 | 

```
33
```






 | 

```
FPS\_CREDIT\_TRANSFER\_UNAPPLIED\_FUNDS
```






 |
| 

`payments_hub.use_payment_action_execution_plans`

 | 

Switches payment processing from target status execution plans to payment action execution plans.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`policy.cacheRenewalInterval`

 | 

Policy engine cache renewal interval (duration). Accepts any valid time.ParseDuration format.

 | 

`string`

 | 

```
10s
```






 | 

```
10s
```






 |
| 

`postings.api.enriched.calendar.id`

 | 

The ID of the calendar to enrich committed posting instruction batches with calendar period information

 | 

`string`

 | 

```
""
```






 | 

```
my\_calendar\_id
```






 |
| 

`postings.api.enriched.calendar.offset`

 | 

The offset duration the referenced calendar is from UTC. Used for generating the localised fields. Specified as positive or negative hours and minutes

 | 

`string`

 | 

```
""
```






 | 

```
+8h45m
```






 |
| 

`postings.api.format`

 | 

The format of public topic messages consumed or produced by the Streaming API

 | 

`string`

 | 

```
proto
```






 | 

```
proto
```






 |
| 

`postings.db.admin_user`

 | 

Root user for the postings database (used for schema initialisation) Warning: For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings.

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`postings.db.host`

 | 

Hostname for the postings database Warning: This section should ONLY be populated if using a separate physical db for postings. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
postings.db.host
```






 |
| 

`postings.db.migrator_user`

 | 

Postings DB migrator user used for running db migrations Warning: For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings. Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_postings\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
{{ vault.db.migrator\_user }}
```






 | 

```
postings\_migrator
```






 |
| 

`postings.db.name`

 | 

Name of the Postings database Warning: For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings. Note: Hyphen characters as part of this value are supported, but recommended to be avoided

 | 

`string`

 | 

```
{{ vault.db.name }}
```






 | 

```
postings
```






 |
| 

`postings.db.port`

 | 

Database port to connect to. Warning: For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`postings.db.user`

 | 

Username to access the postings database Warning: This section should ONLY be populated if using a separate physical db for balances. The DB host should be different to all the other \*.db.host sections of this file. For Vault versions instances created <2.6 the value must be matching the values of vault db. This can be achieved by not specifying the value to fall back on the default. For new instances created >=2.6 the value can be different if using a separate physical db for postings. Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_postings\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
{{ vault.db.user }}
```






 | 

```
postings
```






 |
| 

`saml_idp.certificate`

 | 

The SAML x509 certificate used by Vault to verify requests, provided by the IDP at setup. Public key in a single line string. The following characters are valid for the body of the certificate: a-z A-Z 0-9 / + =

 | 

`string`

 | 

 | 

```
\-----BEGIN CERTIFICATE-----PemEncodedCertificate-----END CERTIFICATE-----
```






 |
| 

`saml_idp.email_attribute`

 | 

The key of the email SAML attribute sent by the IDP, as configured there

 | 

`string`

 | 

 | 

```
insert.saml.idp.setup.email.attribute.here
```






 |
| 

`saml_idp.endpoint`

 | 

The endpoint of the dummy SAML IDP, if used (ie, when saml\_idp\_pkg is deployed) This is not required if you are not using it.

 | 

`string`

 | 

```
saml.{{ common.services.domain }}
```






 | 

```
saml-dev.mybank.co.uk
```






 |
| 

`saml_idp.entity_id`

 | 

The SAML Entity ID given by the IDP at setup

 | 

`string`

 | 

 | 

```
https://accounts.google.com/o/saml2?idpid=Zaa13vt
```






 |
| 

`saml_idp.name_attribute`

 | 

The key of the name SAML attribute sent by the IDP, as configured there

 | 

`string`

 | 

 | 

```
insert.saml.idp.setup.name.attribute.here
```






 |
| 

`saml_idp.roles_attribute`

 | 

The key of the roles SAML attribute sent by the IDP, as configured there A user can have multiple roles

 | 

`string`

 | 

 | 

```
insert.saml.idp.setup.roles.attribute.here
```






 |
| 

`saml_idp.slo_url`

 | 

The SAML logout URL for the given IDP, usually not provided at setup but easy to find

 | 

`string`

 | 

 | 

```
https://accounts.google.com/Logout
```






 |
| 

`saml_idp.sso_url`

 | 

The SAML Single Sign On (SSO) URL given by the IDP at setup, to which Vault will redirect

 | 

`string`

 | 

 | 

```
https://accounts.google.com/o/saml2/idp?idpid=Zaa13vt
```






 |
| 

`saml_sp.authn_requests_signed`

 | 

Indicates whether the SAML Service Provider will sign `<samlp:AuthnRequest>` with its private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.fail_on_authn_context_mismatch`

 | 

Indicates that the SAML Service Provider will only accept an authn context if it corresponds to the requested authn context.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.name_id_encrypted`

 | 

Specifies whether the NameID contained with `<samlp:logoutRequest>` messages sent by the SAML Service Provider will be encrypted using the Identity Provider’s certificate.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.requested_authn_context`

 | 

Specifies whether the SAML Service Provider will request that the auth context be sent in the authn request.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.sign_metadata`

 | 

Indicates whether the SAML Service Provider will sign its metadata using its private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.signature_algorithm`

 | 

Specifies the one-way hashing algorithm used to generate a digest to be signed by the SAML Service Provider. This digest is used in the process of generating a signed logout request.

 | 

`string`

 | 

```
http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```






 | 

```
http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```






 |
| 

`saml_sp.sls_req_signed`

 | 

Determines whether the SAML Service Provider will sign SAML logout requests using its private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.sls_resp_signed`

 | 

Determines whether the SAML Service Provider will sign `<samlp:logoutResponse>` messages with its private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.strict`

 | 

Setting the SAML Service Provider to strict enables greater protection by performing additional checks on the response from the SAML Identity Provider. Enabling this setting is strongly recommended on all production environments.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_assertions_encrypted`

 | 

Determines whether the SAML Service Provider will require assertions sent by the SAML Identity Provider to be encrypted with the Service Provider’s certificate.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_assertions_signed`

 | 

Determines whether the SAML Service Provider will require assertions sent by the SAML Identity Provider to be signed with the Identity Provider’s private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_attribute_statement`

 | 

Specifies that the SAML Service Provider expects and requires an attribute statement on the `<samlp:Response>` message.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_messages_signed`

 | 

Indicates that the SAML Service Provider expects `<samlp:Response>`, `<samlp:LogoutRequest>` and `<samlp:LogoutResponse>` messages to be signed by the Identity Provider with its private key.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_name_id_encrypted`

 | 

Indicates that the SAML Service Provider expects the NameID sent by the Identity Provider to be encrypted with the Service Provider’s certificate.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`saml_sp.want_name_id`

 | 

Specifies that the SAML Service Provider requires a `NameID` element on the `<samlp:Response>` message.

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`schedule_manager.db.admin_user`

 | 

Admin user for the schedule manager database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`schedule_manager.db.host`

 | 

Hostname for the schedule manager database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`schedule_manager.db.migrator_user`

 | 

schedule-manager DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"schedule-manager\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
schedule\_manager\_migrator
```






 | 

```
schedule\_manager\_migrator
```






 |
| 

`schedule_manager.db.name`

 | 

Name of the schedule manager database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
schedule\_manager
```






 | 

```
schedule\_manager
```






 |
| 

`schedule_manager.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`schedule_manager.db.user`

 | 

Username to access the schedule manager database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"calendar\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
schedule\_manager
```






 | 

```
schedule\_manager
```






 |
| 

`scheduler.db.admin_user`

 | 

Admin user for the scheduler database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`scheduler.db.host`

 | 

Hostname for the scheduler database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`scheduler.db.migrator_user`

 | 

Scheduler DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"scheduler\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
scheduler\_migrator
```






 | 

```
scheduler\_migrator
```






 |
| 

`scheduler.db.name`

 | 

Name of the scheduler database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
scheduler
```






 | 

```
scheduler
```






 |
| 

`scheduler.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`scheduler.db.user`

 | 

Username to access the scheduler database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"scheduler\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
scheduler
```






 | 

```
scheduler
```






 |
| 

`scheduler.max_tps`

 | 

Setting this value to any value other than 0 will limit the of the job polling rate of the job poller to whatever the value is set to. This can be used to rate limit any downstream service of the job poller such as end of day.

 | 

`integer`

 | 

```
{{ async\_contract\_execution.max\_tps }}
```






 | 

```
1000
```






 |
| 

`scheduler.mode.passive`

 | 

Scale down the scheduler job poller to stop scheduled jobs being executed.

 | 

`boolean`

 | 

```
{{ common.mode.passive }}
```






 | 

```
false
```






 |
| 

`scheduler.update_interval_secs`

 | 

Setting this value will change the minimum update cycle for scheduled jobs to be published. This duration affects the minimum execution duration between jobs for a given Schedule or Schedule Group. Decreasing this value below the default may cause additional load and contention on the Scheduler Database. Minimum: 1 second ("1").

 | 

`string`

 | 

```
20
```






 | 

```
20
```






 |
| 

`scheduler.update_inverval_secs`

 | 

This value is deprecated. Use update\_interval\_secs instead.

 | 

`string`

 | 

```
""
```






 | 

```
20
```






 |
| 

`scheduler.use_legacy_tags_query`

 | 

This flag will configure the scheduler to use the legacy query to fetch the next\_runtime\_for\_tags. The legacy query runs more efficiently when there is a small amount of tags, a large amount of schedules and only a single tags per schedule

 | 

`boolean`

 | 

```
false
```






 | 

```
true
```






 |
| 

`secrets_management.aws_secrets_manager`

 | 

Configuration block for AWS Secrets Manager

 | 

`object`

 | 

 | 

 |
| 

`secrets_management.azure_key_vault`

 | 

Configuration block for Azure Key Vault

 | 

`object`

 | 

 | 

 |
| 

`secrets_management.hashicorp_vault`

 | 

Configuration block for Hashicorp Vault

 | 

`object`

 | 

 | 

 |
| 

`support.db.admin_user`

 | 

Admin user for the support database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`support.db.host`

 | 

Hostname for the support database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`support.db.migrator_user`

 | 

support DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"support\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
support\_migrator
```






 | 

```
support\_migrator
```






 |
| 

`support.db.name`

 | 

Name of the support database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
support
```






 | 

```
support
```






 |
| 

`support.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`support.db.user`

 | 

Username to access the support database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"support\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
support
```






 | 

```
support
```






 |
| 

`switchboard.db.admin_user`

 | 

Admin user for the switchboard database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`switchboard.db.host`

 | 

Hostname for the switchboard database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`switchboard.db.migrator_user`

 | 

Switchboard DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"switchboard\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
switchboard\_migrator
```






 | 

```
switchboard\_migrator
```






 |
| 

`switchboard.db.name`

 | 

Name of the switchboard database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
switchboard
```






 | 

```
switchboard
```






 |
| 

`switchboard.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`switchboard.db.user`

 | 

Username to access the switchboard database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"switchboard\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
switchboard
```






 | 

```
switchboard
```






 |
| 

`switchboard.endpoint`

 | 

The endpoint used for ingress to the switchboard API

 | 

`string`

 | 

 | 

```
switchboard.insert.client.endpoint.here
```






 |
| 

`tracing.exporter.debug_logs`

 | 

If true, the collector will print basic debug logs.

 | 

`boolean`

 | 

```
false
```






 | 

```
false
```






 |
| 

`tracing.exporter.jaeger-endpoint`

 | 

'DEPRECATED: please move to otlp format. The endpoint for exporters to send traces via Jaeger protobuf protocol to. Please use tracing.exporter.otlp\_endpoint or tracing.exporter.otlp\_http\_endpoint instead and leave this value empty'

 | 

`string`

 | 

```
""
```






 | 

```
vault-collector.jaeger:14250
```






 |
| 

`tracing.exporter.otlp_endpoint`

 | 

The gRPC endpoint for the Gateway otel-collector to send traces to using the OpenTelemetry Protocol. You can use either gRPC `otlp_endpoint` or HTTP `otlp_http_endpoint` (configure only one). If none is set, tracing is implicitly disabled. See [https://opentelemetry.io/docs/specs/otlp/#otlpgrpc](https://opentelemetry.io/docs/specs/otlp/#otlpgrpc)

 | 

`string`

 | 

```
""
```






 | 

```
vault-collector.jaeger:4317
```






 |
| 

`tracing.exporter.otlp_http_endpoint`

 | 

The HTTP endpoint for the Gateway otel-collector to send traces to using the OpenTelemetry Protocol. You can use either gRPC `otlp_endpoint` or HTTP `otlp_http_endpoint` (configure only one). If none is set, tracing is implicitly disabled. See [https://opentelemetry.io/docs/specs/otlp/#otlphttp](https://opentelemetry.io/docs/specs/otlp/#otlphttp)

 | 

`string`

 | 

```
""
```






 | 

```
vault-collector.jaeger:4318
```






 |
| 

`tracing.sampler.arg`

 | 

Sampler argument for the otel-collector tail based probabilistic sampler policy, which should be in the \[0..1\] range. [https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/tailsamplingprocessor/README.md#tail-sampling-processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/tailsamplingprocessor/README.md#tail-sampling-processor)

 | 

`string`

 | 

```
0
```






 | 

```
0.01
```






 |
| 

`tracing.sampler.type`

 | 

OpenTelemetry sampler based on [https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/sdk.md#built-in-samplers](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/sdk.md#built-in-samplers)

 | 

`string`

 | 

```
parentbased\_traceidratio
```






 | 

```
parentbased\_traceidratio
```






 |
| 

`upgrade_path.downtime.aborter_batch_size`

 | 

The maximum number of account updates to abort in a batch.

 | 

`string`

 | 

```
100
```






 | 

```
100
```






 |
| 

`upgrade_path.downtime.accounts_initialise_batch_size`

 | 

Number of account to operate on in a batch in the initialise phase of a run

 | 

`string`

 | 

```
1000
```






 | 

```
2000
```






 |
| 

`upgrade_path.downtime.accounts_max_batch_size`

 | 

Maximum number of accounts to migrate in a batch

 | 

`string`

 | 

```
1000
```






 | 

```
200
```






 |
| 

`upgrade_path.downtime.accounts_verification_batch_size`

 | 

The batch size for accounts verification.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.downtime.affinity.key`

 | 

Label key for node affinity constraints. Use this value if you do not wish the migrator job to be assigned to specific nodes in your Kubernetes cluster. If you do not wish to add any constraints, you can leave the default value here.

NOTE: If you make use of spot instances, it is likely that the migrator job can be scheduled on such instance repeatedly, which results in the migrator job being killed prematurely and depletes the job’s retry budget. You can use this value and `upgrade_path.downtime.affinity.value` to avoid scheduling the job on spot instances.

WARNING: The affinity rule uses `NotIn` operator, which means the migrator job pod WILL NOT be scheduled on nodes which match the specified value under upgrade\_path.downtime.affinity.value for this key.

 | 

`string`

 | 

```
label-1
```






 | 

```
tmachine.io/aws-instance-lifecycle
```






 |
| 

`upgrade_path.downtime.affinity.value`

 | 

Label value for node affinity constraints. Use this value if you do not wish the migrator job to be assigned to specific nodes in your Kubernetes cluster. If you do not wish to add any constraints, you can leave the default value here.

NOTE: If you make use of spot instances, it is likely that the migrator job can be scheduled on one of these and killed prematurely, which might deplete the job’s retry budget. You can use this value and `upgrade_path.downtime.affinity.key` to avoid scheduling the job on spot instances.

WARNING: The affinity rule uses `NotIn` operator, which means the migrator job pod WILL NOT be scheduled on nodes which match the key specified under upgrade\_path.downtime.affinity.key and the value set here.

 | 

`string`

 | 

```
value
```






 | 

```
spot
```






 |
| 

`upgrade_path.downtime.balance_definitions_max_batch_size`

 | 

Maximum number of balance definitions to migrate in a batch

 | 

`string`

 | 

```
10000
```






 | 

```
20000
```






 |
| 

`upgrade_path.downtime.earliest_start_time`

 | 

The date time specified in RFC 3339 format for the best effort start time for downtime period when upgrading from v4.7. Downtime will not start before this time. It must be in the future when the pre-downtime job runs. This value will have no effect if a migration has already been completed from v4.7 to v5.x.

 | 

`string`

 | 

```
""
```






 | 

```
1996-12-19T16:39:57-08:00
```






 |
| 

`upgrade_path.downtime.global_params_batch_size`

 | 

Number of global params and values to migrate in a batch

 | 

`string`

 | 

```
5000
```






 | 

```
200
```






 |
| 

`upgrade_path.downtime.instance_params_batch_size`

 | 

Number of instance params or params with values to migrate in a batch

 | 

`string`

 | 

```
5000
```






 | 

```
200
```






 |
| 

`upgrade_path.downtime.instance_values_initialise_batch_size`

 | 

Number of parameters to fetch at a time when populating parameter details cache in instance values migrator initialise step.

 | 

`string`

 | 

```
500
```






 | 

```
500
```






 |
| 

`upgrade_path.downtime.params_rename_batch_size`

 | 

The number of rows to update in a batch when renaming parameters.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.downtime.params_verifier_batch_size`

 | 

The number of rows that the verifier will select in each run.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.downtime.post_posting_failures_batch_size`

 | 

The number of post-posting post-posting failure requests to be inserted in a batch.

 | 

`string`

 | 

```
500
```






 | 

```
500
```






 |
| 

`upgrade_path.downtime.post_posting_watermarks_bucket_size`

 | 

The bucket size of resources generated each time for watermark migrator.

 | 

`string`

 | 

```
1024
```






 | 

```
1024
```






 |
| 

`upgrade_path.downtime.postings_internal_accounts_batch_size`

 | 

Page size for fetching internal accounts

 | 

`string`

 | 

```
1000
```






 | 

```
2000
```






 |
| 

`upgrade_path.downtime.postings_max_batch_size`

 | 

Maximum number of postings to migrate in a batch. A higher value for this parameter accelerates the migration process; however, a higher value may adversely affect Business As Usual (BAU) latency or introduce query timeouts. Through testing, it has been determined that a value of 3000 does not introduce latency issues under a constant 10 TPS BAU load. It is safe to reduce this value, at the expense of a longer migration duration.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.downtime.runner_backoff_duration`

 | 

The backoff between runs in the migrator.

 | 

`string`

 | 

```
5ms
```






 | 

```
5ms
```






 |
| 

`upgrade_path.downtime.verifier_backoff_duration`

 | 

The backoff between runs in the verifier.

 | 

`string`

 | 

```
5ms
```






 | 

```
5ms
```






 |
| 

`upgrade_path.inactive_period`

 | 

The UTC time to in which the upgrade path migrator will be inactive.

 | 

`string`

 | 

```
00:00-00:00
```






 | 

```
23:00-23:59
```






 |
| 

`upgrade_path.pre_downtime.accounts_initialise_batch_size`

 | 

Number of account to operate on in a batch in the initialise phase of a run

 | 

`string`

 | 

```
1000
```






 | 

```
2000
```






 |
| 

`upgrade_path.pre_downtime.accounts_max_batch_size`

 | 

Maximum number of accounts to migrate in a batch

 | 

`string`

 | 

```
1000
```






 | 

```
200
```






 |
| 

`upgrade_path.pre_downtime.accounts_verification_batch_size`

 | 

The batch size for accounts verification.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.pre_downtime.affinity.key`

 | 

Label key for node affinity constraints. Use this value if you do not wish the migrator job to be assigned to specific nodes in your Kubernetes cluster. If you do not wish to add any constraints, you can leave the default value here.

NOTE: If you make use of spot instances, it is likely that the migrator job can be scheduled on such instance repeatedly, which results in the migrator job being killed prematurely and depletes the job’s retry budget. You can use this value and `upgrade_path.pre_downtime.affinity.value` to avoid scheduling the job on spot instances.

WARNING: The affinity rule uses `NotIn` operator, which means the migrator job pod WILL NOT be scheduled on nodes which match the specified value under upgrade\_path.pre\_downtime.affinity.value for this key.

 | 

`string`

 | 

```
label-1
```






 | 

```
tmachine.io/aws-instance-lifecycle
```






 |
| 

`upgrade_path.pre_downtime.affinity.value`

 | 

Label value for node affinity constraints. Use this value if you do not wish the migrator job to be assigned to specific nodes in your Kubernetes cluster. If you do not wish to add any constraints, you can leave the default value here.

NOTE: If you make use of spot instances, it is likely that the migrator job can be scheduled on one of these and killed prematurely, which might deplete the job’s retry budget. You can use this value and `upgrade_path.pre_downtime.affinity.key` to avoid scheduling the job on spot instances.

WARNING: The affinity rule uses `NotIn` operator, which means the migrator job pod WILL NOT be scheduled on nodes which match the key specified under upgrade\_path.pre\_downtime.affinity.key and the value set here.

 | 

`string`

 | 

```
value
```






 | 

```
spot
```






 |
| 

`upgrade_path.pre_downtime.balance_definitions_max_batch_size`

 | 

Maximum number of balance definitions to migrate in a batch

 | 

`string`

 | 

```
1000
```






 | 

```
2000
```






 |
| 

`upgrade_path.pre_downtime.catchup_interval`

 | 

The interval between catchups in the migration.

 | 

`string`

 | 

```
5m
```






 | 

```
5m
```






 |
| 

`upgrade_path.pre_downtime.global_params_batch_size`

 | 

Number of global params and values to migrate in a batch

 | 

`string`

 | 

```
1000
```






 | 

```
200
```






 |
| 

`upgrade_path.pre_downtime.instance_params_batch_size`

 | 

Number of instance params or params with values to migrate in a batch

 | 

`string`

 | 

```
1000
```






 | 

```
200
```






 |
| 

`upgrade_path.pre_downtime.instance_values_initialise_batch_size`

 | 

Number of parameters to fetch at a time when populating parameter details cache in instance values migrator initialise step.

 | 

`string`

 | 

```
500
```






 | 

```
500
```






 |
| 

`upgrade_path.pre_downtime.params_rename_batch_size`

 | 

The number of rows to update in a batch when renaming parameters.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.pre_downtime.params_verifier_batch_size`

 | 

The number of rows that the verifier will select in each run.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.pre_downtime.postings_internal_accounts_batch_size`

 | 

Page size for fetching internal accounts

 | 

`string`

 | 

```
500
```






 | 

```
2000
```






 |
| 

`upgrade_path.pre_downtime.postings_max_batch_size`

 | 

Maximum number of postings to migrate in a batch. A higher value for this parameter accelerates the migration process; however, a higher value may adversely affect Business As Usual (BAU) latency or introduce query timeouts. Through testing, it has been determined that a value of 3000 does not introduce latency issues under a constant 10 TPS BAU load. It is safe to reduce this value, at the expense of a longer migration duration.

 | 

`string`

 | 

```
1000
```






 | 

```
1000
```






 |
| 

`upgrade_path.pre_downtime.runner_backoff_duration`

 | 

The backoff between runs in the migrator.

 | 

`string`

 | 

```
1s
```






 | 

```
1s
```






 |
| 

`upgrade_path.pre_downtime.verifier_backoff_duration`

 | 

The backoff between runs in the verifier.

 | 

`string`

 | 

```
1s
```






 | 

```
1s
```






 |
| 

`usage.committer.schedule`

 | 

Cron expression that determines when Vault usage is measured by the Usage Monitor’s Committer job, as part of the legal contract with TM.

It must be set for a day 1-28 of the month (third field) and it is recommended the minute and hour (first two fields) are set at least three hours before the bank End of Day processing.

 | 

`string`

 | 

```
0 0 1 \* \*
```






 | 

```
0 0 28 \* \*
```






 |
| 

`usage.db.admin_user`

 | 

Admin user for the usage database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`usage.db.host`

 | 

Hostname for the usage database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`usage.db.migrator_user`

 | 

usage DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"usage\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
usage\_migrator
```






 | 

```
usage\_migrator
```






 |
| 

`usage.db.name`

 | 

Name of the usage database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
usage
```






 | 

```
usage
```






 |
| 

`usage.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`usage.db.user`

 | 

Username to access the usage database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"usage\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
usage
```






 | 

```
usage
```






 |
| 

`usage.num_committed_accounts`

 | 

For billable environments, this parameter specifies the number of Accounts which are bundled with a Vault Core instance at an agreed fixed price. This fixed price will be specified in the legal contract between Thought Machine and the client. It is used to ensure the information presented in the Usage Monitor is correct.

Setting a new value requires reinstallation (or upgrade) of Vault Core before the value will come into effect.

For development and other non-billable environments it can be left at the default value.

 | 

`string`

 | 

```
0
```






 | 

```
3000000
```






 |
| 

`vault.db.admin_user`

 | 

Admin user for the vault database (used for schema initialisation). Defaults to the deprecated value 'vault.db.root\_user', or "postgres" if 'vault.db.root\_user' is not specified.

 | 

`string`

 | 

```
{{default "postgres" vault.db.root\_user}}
```






 | 

```
postgres
```






 |
| 

`vault.db.host`

 | 

Hostname for the vault database

 | 

`string`

 | 

 | 

```
db.client.endpoint
```






 |
| 

`vault.db.migrator_user`

 | 

Vault DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided

 | 

`string`

 | 

```
vault\_migrator
```






 | 

```
vault\_migrator
```






 |
| 

`vault.db.name`

 | 

Name of the vault database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided

 | 

`string`

 | 

```
vault
```






 | 

```
vault
```






 |
| 

`vault.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
5432
```






 | 

```
5432
```






 |
| 

`vault.db.user`

 | 

Username for the vault database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_core\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
vault
```






 | 

```
vault
```






 |
| 

`vault_jobs.db.admin_user`

 | 

Admin user for the vault jobs database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`vault_jobs.db.host`

 | 

Hostname for the vault jobs database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`vault_jobs.db.migrator_user`

 | 

vault-jobs DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_jobs\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
vault\_jobs\_migrator
```






 | 

```
vault\_jobs\_migrator
```






 |
| 

`vault_jobs.db.name`

 | 

Name of the vault jobs database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
vault\_jobs
```






 | 

```
vault\_jobs
```






 |
| 

`vault_jobs.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`vault_jobs.db.user`

 | 

Username to access the vault jobs database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"vault\_jobs\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
vault\_jobs
```






 | 

```
vault\_jobs
```






 |
| 

`warm_storage.db.admin_user`

 | 

Admin user for the warm storage database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`warm_storage.db.host`

 | 

Hostname for the warm storage database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`warm_storage.db.migrator_user`

 | 

warm-storage DB migrator user used for running db migrations

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"warm\_storage\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
warm\_storage\_migrator
```






 | 

```
warm\_storage\_migrator
```






 |
| 

`warm_storage.db.name`

 | 

Name of the warm storage database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
warm\_storage
```






 | 

```
warm\_storage
```






 |
| 

`warm_storage.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`warm_storage.db.replica.host`

 | 

Hostname for the warm storage database read-only endpoint (if used).

Warning: This value should ONLY be populated if you are using a separate physical Warm Storage database with a read-only replica.

 | 

`string`

 | 

```
""
```






 | 

```
db.client.read\_endpoint
```






 |
| 

`warm_storage.db.user`

 | 

Username to access the warm storage database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"warm\_storage\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
warm\_storage
```






 | 

```
warm\_storage
```






 |
| 

`webhook_operator.namespace`

 | 

The namespace to deploy the webhook operator to

 | 

`string`

 | 

```
webhook-operator
```






 | 

```
webhook-operator
```






 |
| 

`workflow_engine.legacy_schema_versions_enabled`

 | 

Option to enable support for legacy schemas (below 3.0.0) in workflows engine. Starlark-based and Python-based Workflow transforms are supported, and this optional configuration setting disables legacy Workflows schema (i.e. all Workflow schema versions prior to 3.0). There is an identical value for `workflow_simulator`. This configuration option is temporary and will be removed in Vault 4.0, which will only support Starlark-based transformations. Starlark-based Workflows offer enhanced security posture due to their more restricted runtime and sandbox support.

WARNING: When `legacy_schema_versions_enabled` is set to `false`, any Workflows based on schema versions prior to 3.0 will no longer function. The default is `true`, which supports both legacy (Python-based) and current (Starlark-based) Workflow transforms.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`workflow_simulator.endpoint`

 | 

The endpoint used for ingress to the workflow simulator

 | 

`string`

 | 

 | 

```
workflow-simulator.insert.client.endpoint.here
```






 |
| 

`workflow_simulator.legacy_schema_versions_enabled`

 | 

Option to enable support for legacy schemas (below 3.0.0) in workflows simulator. Starlark-based and Python-based Workflow transforms are supported, and this optional configuration setting disables legacy Workflows schema (i.e. all Workflow schema versions prior to 3.0). There is an identical value for `workflow_engine`. This configuration option is temporary and will be removed in Vault 4.0, which will only support Starlark-based transformations. Starlark-based Workflows offer enhanced security posture due to their more restricted runtime and sandbox support.

WARNING: When `legacy_schema_versions_enabled` is set to `false`, any Workflows based on schema versions prior to 3.0 will no longer function. The default is `true`, which supports both legacy (Python-based) and current (Starlark-based) Workflow transforms.

 | 

`string`

 | 

```
true
```






 | 

```
true
```






 |
| 

`workflow_transform_executor.step_limit`

 | 

The upper bound of execution steps each Starlark execution thread can make in the Transform executor. Any Starlark transform that exceeds this step limit will result in the transform executor returning an error.

 | 

`string`

 | 

```
1000000
```






 | 

```
1000000
```






 |
| 

`workflows_api.endpoint`

 | 

The endpoint used for ingress to the switchboard API

 | 

`string`

 | 

```
workflows-api.{{ common.services.domain }}
```






 | 

```
workflows-api.insert.client.endpoint.here
```






 |
| 

`workflows_api.shared_endpoint`

 | 

The endpoint used for ingress to the switchboard API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
workflows-api.insert.client.shared\_endpoint.here
```






 |
| 

`workflows_callback_router.streaming_api_consumer_config`

 | 

Lists of public topics consumed by the callback router

 | 

`string`

 | 

```
ASYNC\_CALLBACK\_TOPICS: \[\]
AUTO\_INSTANTIATION\_TOPICS: \[\]
```






 | 

```
\# Public topics to be consumed by the callback router for auto trigger conditions.
# See {documentation-url}/reference/workflows-tickets/workflow-actions/callback-action/#streaming\_autotrigger
ASYNC\_CALLBACK\_TOPICS: \[\]

# Public topics to be consumed by the callback router for auto instantiation conditions.
# See {documentation-url}/reference/workflows-tickets/workflow-auto-instantiations/#auto-instantiations-overview
AUTO\_INSTANTIATION\_TOPICS: \[\]
```






 |
| 

`xpl.db.admin_user`

 | 

Admin user for the xpl database (used for schema initialisation)

 | 

`string`

 | 

```
{{ vault.db.admin\_user }}
```






 | 

```
postgres
```






 |
| 

`xpl.db.host`

 | 

Hostname for the xpl database.

 | 

`string`

 | 

```
{{ vault.db.host }}
```






 | 

```
db.client.endpoint
```






 |
| 

`xpl.db.migrator_user`

 | 

XPL DB migrator user used for running DB migrations.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"xpl\_migrator\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
xpl\_migrator
```






 | 

```
xpl\_migrator
```






 |
| 

`xpl.db.name`

 | 

Name of the xpl database.

Note: Hyphen characters as part of this value are supported, but recommended to be avoided.

 | 

`string`

 | 

```
xpl
```






 | 

```
xpl
```






 |
| 

`xpl.db.port`

 | 

Database port to connect to.

 | 

`string`

 | 

```
{{ vault.db.port }}
```






 | 

```
5432
```






 |
| 

`xpl.db.user`

 | 

Username to access the experience layer database

Note: Hyphen characters as part of this value are supported, but recommended to be avoided. If you are using client certificates, set this value to be equal to the common name of the \\"xpl\\" principal, which can be found in the release.json file.

 | 

`string`

 | 

```
xpl
```






 | 

```
xpl
```






 |
| 

`xpl.endpoint`

 | 

The endpoint used for ingress to the XPL API

 | 

`string`

 | 

```
xpl.{{ common.services.domain }}
```






 | 

```
xpl.insert.client.endpoint.here
```






 |
| 

`xpl.shared_endpoint`

 | 

The endpoint used for ingress to the XPL API in the active/passive deployment mode. Both the active and passive instance should use the same shared endpoint.

 | 

`string`

 | 

```
""
```






 | 

```
xpl.insert.client.shared\_endpoint.here
```






 |