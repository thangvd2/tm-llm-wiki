---
tags: [concept, parameters, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Contract Parameters

Parameters are the primary mechanism for configuring Smart Contract behaviour without altering the underlying code. They allow the same Smart Contract template to support different product configurations (e.g., various interest rates, fee structures, or limits).

## Parameter Tiers

Classic parameters required by an account are divided into three tiers:

1. **GLOBAL**: Bank-wide values (e.g., central bank base rate). They are defined externally in Vault (via CLU or Core API) and only referenced by name in the Smart Contract's `global_parameters` metadata.
2. **TEMPLATE** (or PRODUCT): Values common to all accounts running on a specific Smart Contract (e.g., a product-wide standard interest rate). They must be fully defined within the Contract code and initialized upon template upload.
3. **INSTANCE**: Values specific to a single account (e.g., an individual customer's overdraft limit or preferred interest payment day). They are fully defined in the Contract and initialized upon Account creation.

### Expected Parameters (Recommended)

Introduced in Vault Core 5, **Expected Parameters** are the modern, recommended approach over standard `INSTANCE`/`GLOBAL` parameters. They leverage the Core API Parameters resource, which supports hierarchical value ownership (e.g., overriding a parameter at the customer level vs. the account level).

- Defined in the Contract metadata via `expected_parameters`.
- Values are retrieved using data fetchers (e.g., `ParameterObservationFetcher` or `ParametersIntervalFetcher`).
- *Note*: Supervisor Contracts currently do not support `expected_parameters`.

## Derived Parameters

A **Derived Parameter** does not store its own value; instead, its value is programmatically calculated on-the-fly from other parameters or account state (e.g., calculating an APR or the next monthly repayment amount). 
- Calculated using the `derived_parameter_hook`.
- Values are *not* persisted to the database.
- They are accessed via the `DerivedParameterValue` Core API.

## Account Attributes

**Account Attributes** are similar to Derived Parameters but provide clearer delineation, better performance, and enhanced functionality for exposing account-specific information to downstream systems.

- Defined in the Smart Contract metadata with a specific `data_type`.
- Supported Types: `AttributeDateTimeType`, `AttributeDecimalType`, `AttributeStringType`.
- Values are computed via the `attribute_hook`. 
- To optimize performance, the `attribute_hook` uses `@fetch_account_data` decorators keyed by the `attribute_name`.

---

> **See also**:
> - [[concept-smart-contracts]] for the general contract structure.
> - [[concept-sc-hooks]] for the hooks associated with parameters (`pre_parameter_change_hook`, `derived_parameter_hook`, `attribute_hook`).
> - [[concept-sc-data-fetching]] for retrieving parameter timeseries via data fetchers.
