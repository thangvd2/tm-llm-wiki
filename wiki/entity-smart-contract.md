---
tags: [entity, smart-contracts, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/reference/contracts/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Smart Contract

A **Smart Contract** in Vault Core is a piece of Python code that digitally enforces a financial agreement or Terms and Conditions (T&Cs) between the bank and its customers. Every account in Vault is backed by a Smart Contract, which defines its financial behavior and mutates its balances.

Smart Contracts run on the **Contracts Language API** (currently recommended major version 4, or CLv4), which provides a specialized, safe subset of Python for interacting with the Vault System of Record (SoR).

## Contract Structure

The code of a Smart Contract is generally organized into three key areas:

1. **Hooks**: Python functions that Vault invokes during different aspects of the account lifecycle (e.g., `pre_posting_hook` for accepting/rejecting a transaction, `scheduled_event_hook` for applying interest).
2. **Metadata**: Statically defined configuration attributes parsed upon template creation (e.g., defining scheduled `event_types`, `api` version).
3. **Parameters**: A crucial type of metadata that exposes configurable state. Contracts are inherently *stateless*, relying on Vault APIs to fetch their state, which includes parameters configured at the global, template, or instance level.

## Templates vs. Instances

- **Smart Contract Template**: The overarching blueprint (code) uploaded to Vault (e.g., "Savings Account"). Templates are versioned, allowing for logic tweaks, bug fixes, or T&C updates without breaking existing accounts.
- **Smart Contract Instance**: An individual account instantiated from a specific template version. Millions of accounts can share a single template but maintain their own instance-level parameters (e.g., overdraft limit for a specific user).

Only one version of a template is active for a given account at any time.

## Deployment Methods

Smart Contracts can be deployed into Vault via three mechanisms:
1. **Core API**: Using a POST request (creating/updating a `ProductVersion`).
2. **Operations Dashboard**: Via the UI under "Product Management -> Add product".
3. **Configuration Layer Utility (CLU)**: The command-line tool used to group and deploy configuration resources.

## Contract Modules

To promote code reusability across multiple Smart Contract templates, Vault provides **Contract Modules**.
- A Contract Module is a collection of helper functions that can be imported via `from contract_modules import <alias>`.
- They share the same strict Python subset and type restrictions as Smart Contracts.
- Modules must be linked to the Smart Contract Version during execution via the Core API linking endpoint.

## Language Restrictions

Smart Contracts are written in a restricted Python execution environment to guarantee deterministic execution and security. 
- Only a specific subset of standard Python **builtins** are allowed (e.g., `abs`, `dict`, `int`, `list`, `sum`, `zip`).
- Only safe **native objects** from libraries like `datetime`, `decimal`, `json`, `math`, `zoneinfo` and `typing` can be imported.
- File I/O, network requests, and external modules are strictly prohibited.

---

> **See also**: 
> - [[concept-smart-contracts]] for a higher-level product overview.
> - [[concept-sc-hooks]] for the detailed hook lifecycle.
> - [[concept-parameters]] for parameter tiers and scopes.
> - [[entity-supervisor-contract]] for linking multiple contracts together.
