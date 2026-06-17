---
tags: [analysis, testing, clv4, architecture]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Contract Development & Testing Lifecycle

Because Smart Contracts in CLv4 are standard Python 3 files, the development and testing lifecycle closely mirrors traditional software engineering, supported by three distinct testing tiers.

## 1. Unit Testing (Contracts SDK)

The foundation of contract testing is standard Python unit testing using the **Contracts SDK**.

- **`contracts_api` Package**: A provided Python package that implements the exact custom types (classes, decorators, enums) used by the Vault execution environment.
- **Mocking**: The SDK includes strict specification classes to mock the `vault` object. It prevents developers from calling invalid methods or passing incorrect arguments during tests.
- **Workflow**: Developers use standard tools (`pytest`, `unittest`, `mypy` for static typing) and benefit from IDE auto-completion.

## 2. Simulation Testing

Once unit tests pass, contracts are tested via **Contract Simulation**. This is an in-memory, fast approximation of Vault Core.

- **API**: Triggered via the `POST /v1/contracts:simulate` endpoint.
- **Functionality**: It accepts a list of instructions (e.g., create account, instruct posting) and streams back new-line delimited JSON showing exactly what happened (including hook execution outputs and side effects).
- **Existing State**: Simulation can retrieve existing Accounts and Products from a live Vault instance at a specific "simulation start time", allowing you to safely "What if?" test production data without affecting real balances.
- **Caveats**: Simulation cannot trigger Adjustments, future-date parameter changes, or realistically mimic cross-account race conditions.

## 3. Accelerated Testing

For long-running products (like a 30-year mortgage), waiting for time to elapse is impossible, and Simulation might miss complex integration nuances. **Accelerated Testing** runs in a real, live Vault Core test environment.

- **Mechanism**: It utilizes **Account Schedule Tags (AST)** and **Processing Groups**. By setting the `test_pause_at_timestamp` on an AST, Vault will halt schedules. By advancing this timestamp programmatically, developers force Vault to execute years of schedules in minutes.
- **Fidelity**: Because it runs on a real Vault instance, all side effects (Postings to the ledger, Transaction Bridge events) happen exactly as they would in production.
- **Limitations**: You can only accelerate time *forward* from a backdated starting point. You cannot future-date events beyond real-time system clocks. Additionally, backdating parameter values during an accelerated test does not trigger the `post_parameter_change_hook`.

---

> **See also**:
> - [[concept-smart-contracts]] for the general structure of the contract code being tested.
> - [[concept-sc-data-fetching]] for how data is mocked during unit tests.
