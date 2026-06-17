---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/credit_card/product_configurability_credit_card"
title: "Product configurability"
scraped_at: "2026-06-17T05:36:16.751Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open. Each parameter can have a default value and some parameters can have a minimum or maximum value which a bank can tailor to the requirements of a specific product.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account.
    
    For example, in the Credit Card, each customer has a different credit limit set for their account so there is an associate instance parameter: `credit_limit`
    
-   Template configuration level parameters are for use across a particular product.
    
    For example, a Credit Card product will share the same denomination between customers so there is an associated template parameter: `denomination`
    

## [](#fee_parameters "Copy link to heading")Fee parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Overlimit Fee

 | 

`overlimit_fee`

 | 

Fee to charge on the SCOD (Statement Cut Off Date) if the outstanding principal exceeds the credit limit.

 | 

Instance

 |
| 

Annual Credit Card Fee

 | 

`annual_fee`

 | 

Fee to charge annually on the account anniversary.

 | 

Instance

 |
| 

Fee Charged If The MAD Is NOt Paid

 | 

`late_repayment_fee`

 | 

Fee to charge if the MAD is not paid.

 | 

Instance

 |
| 

Fees Per Transaction Type

 | 

`transaction_type_fees`

 | 

Map of map of fees per transaction type (map format, JSON-encoded). Allows a bank to specify “over\_deposit\_only\`æ,"\`percentage\_fee” and “flat\_fee” for transactions of the given type. The product calculates the fee amount for each type based on the transaction amount, and selects the highest fee which it charges on the next statement. If a transaction type does not have an entry, a fee does not apply. If “over\_deposit\_only” is set to True, the associated type only charges a fee if the transaction amount exceeds the deposit balance.

 | 

Instance

 |
| 

External Fee Types

 | 

`external_fee_types`

 | 

External fees that can be initiated from outside the contract, but need to be stored in separate addresses. Stored as a JSON-encoded list.

 | 

Template

 |

## [](#transaction_type_parameters "Copy link to heading")Transaction type parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Transaction References

 | 

`transaction_references`

 | 

Map of lists of transaction types and their associated references.

 | 

Instance

 |
| 

Map Of Transaction Types

 | 

`transaction_code_to_type_map`

 | 

Map of transaction codes to transaction types.

 | 

Template

 |
| 

Account-Supported Transaction Types

 | 

`Transaction_types` with `charge_interest_from_transaction_date`

 | 

Map of maps of supported transaction types for the account, which specifies any non-default parameters. All default to False.

 | 

Template

 |
| 

Internal Accounts Used For Credit Card Transaction Fees

 | 

`transaction_type_fees_internal_accounts_map`

 | 

Map of transaction type to internal account ID for transaction type fee purposes (map format - JSON encoded).

 | 

Template

 |
| 

Internal Accounts Per Transaction Type

 | 

`transaction_type_interest_internal_accounts_map`

 | 

Map of transaction type to internal account ID for interest purposes. Contains both Accrued Interest Receivable (AIR) and Interest Income accounts for each transaction type.

 | 

Template

 |

## [](#interest_parameters "Copy link to heading")Interest parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Annual Percentage Rate Per Transaction Ref

 | 

`transaction_annual_percentage_rate`

 | 

Map of maps of Annual Percentage Rate per transaction reference.

 | 

Instance

 |
| 

Per Annum Gross Interest Rate Per Transaction Ref

 | 

`transaction_base_interest_rates`

 | 

Map of maps of per annum gross interest rate per transaction reference.

 | 

Instance

 |
| 

Interest-Free Periods Per Transaction Type

 | 

`interest_free_expiry`

 | 

List of interest-free period expiry times associated with transaction types. This is for transaction types that do not use transaction references.

 | 

Instance

 |
| 

Interest-Free Periods Per Transaction Ref

 | 

`transaction_interest_free_expiry`

 | 

List of interest-free period expiry times associated with transaction references.

 | 

Instance

 |
| 

Accrual Blocking Flags

 | 

`accrual_blocking_flags`

 | 

List of flags applied to a customer or an account that prevent interest accrual.

 | 

Template

 |
| 

Per Annum Gross Interest Rate Per Transaction Type

 | 

`base_interest_rates`

 | 

Per annum gross interest rate per transaction type.

 | 

Template

 |
| 

Accrue Interest On Unpaid Interest

 | 

`accrue_interest_on_unpaid_interest`

 | 

Interest accrual on unpaid interest. If set to "False", the product does not calculate or apply interest on unpaid interest.

 | 

Template

 |
| 

Accrue Interest On Unpaid Fees

 | 

`accrue_interest_on_unpaid_fees`

 | 

Interest accrual on unpaid fees. If set to "False", the product does not accrue interest on unpaid fees.

 | 

Template

 |
| 

Annual Percentage Rate Per Transaction Type

 | 

`annual_percentage_rate`

 | 

Annual Percentage Rate per transaction type for non-reference based transaction types.

 | 

Template

 |
| 

Accrue Interest From Day Of Transaction

 | 

`accrue_interest_from_txn_day`

 | 

Determines the start point for interest accrual on transactions that are charged to an account while it is entering Revolver status. This applies to transactions that are not affected by specific interest behaviours, such as an active interest-free period or transaction types that always charge interest from the transaction date.

 | 

Template

 |

## [](#internal_account_parameters "Copy link to heading")Internal account parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Interest Write-off Internal Account

 | 

`interest_write_off_internal_account`

 | 

Internal account used to write-off any outstanding interest.

 | 

Instance

 |
| 

Principal Write-off Internal Account

 | 

`principal_write_off_internal_account`

 | 

Internal account used to write-off any outstanding fees and transactions. The name follows the accounting definition of Principal.

 | 

Instance

 |
| 

Late Fee Account

 | 

`late_repayment_fee_internal_account`

 | 

Income internal account for the late repayment fee.

 | 

Template

 |
| 

Credit Card Over Limit Fee Account

 | 

`overlimit_fee_internal_account`

 | 

Income internal account for the overlimit fee.

 | 

Template

 |
| 

Credit Card Annual Fee Account

 | 

`annual_fee_internal_account`

 | 

Income internal account for the annual fee.

 | 

Template

 |
| 

Credit Card Dispute Fee Account

 | 

`external_fee_internal_accounts`

 | 

Income internal accounts for each external fee type. Stored as a JSON-encoded map of fee type to account ID.

 | 

Template

 |
| 

Interest On Fees Internal Accounts Per Transaction Type

 | 

`interest_on_fees_internal_account`

 | 

Income internal account for interest on fees.

 | 

Template

 |

## [](#account_closure_write_off_parameters "Copy link to heading")Account closure write-off parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Account Closure Flags

 | 

`account_closure_flags`

 | 

List of flags to apply to a customer or an account when a customer or a bank initiates an account closure.

 | 

Template

 |
| 

Account Write-Off Flags

 | 

`account_write_off_flags`

 | 

List of flags to apply to a customer or an account in order to generate postings to zero out the `FULL_OUTSTANDING_BALANCE` on receiving an account closure request.

 | 

Template

 |
| 

MAD As Full Statement Flags

 | 

`mad_as_statement_flags`

 | 

List of flags to apply to a customer or an account in order to set MAD equal to the statement balance.

 | 

Template

 |

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Payment Due Period

 | 

`payment_due_period`

 | 

Number of days after the SCOD (Statement Cut Off Date) that payment is due by. The customer must pay the minimum amount due (MAD) by the end of the payment due period (PDP) in order to avoid late repayment fees. They must also pay the full outstanding balance by the end of the PDP in order to prevent the account from entering revolver status.

 | 

Instance

 |
| 

Default Denomination For The Contract

 | 

`denomination`

 | 

Default denomination for the product.

 | 

Template

 |
| 

Minimum Amount Due

 | 

`minimum_amount_due`

 | 

The minimum amount due, that the customer must pay, which is the higher value of `minimum_amount_due` or `minimum_percentage_due`.

 | 

Template

 |
| 

Percentage Of Statement Balance Per Transaction Type

 | 

`minimum_percentage_due`

 | 

The minimum amount due based on a calculation of the percentage of the statement balance for each transaction type. The minimum amount that the customer must pay is the higher of the values for `minimum_amount_due` and `minimum_percentage_due`.

 | 

Template

 |

## [](#limit_parameters "Copy link to heading")Limit parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Limits Per Transaction Type

 | 

`transaction_type_limits`

 | 

Map of limits per transaction type (map format, JSON-encoded). A transaction must respect overall limits and transaction type limits. For credit limit checks, sometimes the sum of authorised and outstanding amounts for a given transaction type are subject to an absolute limit. This is using the “flat” key, and/or a relative limit with respect to the credit limit, using the “percentage” key. If both are specified, the contract applies the lowest of the two limits. If either is missing, the contract assumes that it is not to apply a limit. If a transaction type has no entry, no specific limits apply. “allowed\_days\_after\_opening” is a time-based check that permits transactions only in a window after the account is activated.

 | 

Instance

 |
| 

Credit Limit

 | 

`credit_limit`

 | 

Credit limit.

 | 

Instance

 |
| 

Additional Limit On Top Of Credit Limit

 | 

`overlimit`

 | 

An additional limit that is available to spend on top of the credit limit. It might have associated fees.

 | 

Instance

 |
| 

Overlimit Opt-In

 | 

`overlimit_opt_in`

 | 

Indicates whether the customer chose to opt-in to the overlimit facility.If "True" the customer can exceed the credit limit by the overlimit for regular transactions and stand-in/offline transactions. Otherwise, the customer can only exceed the credit limit for stand-in/offline transactions.

 | 

Instance

 |

## [](#event_blocking_flag_parameters "Copy link to heading")Event-blocking flag parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Billed To Unpaid Transfer Blocking Flags

 | 

`BILLED_TO_UNPAID_TRANSFER_BLOCKING_FLAGS`

 | 

A list of flags to apply to a customer or an account that suspends the internal address transfers from billed to unpaid balances on PDD.As a result, the current billed interest/fees are not subject to the same interest accrual that is due if they were not blocked and instead unpaid.

 | 

Template

 |
| 

Overdue Amount Blocking Flags

 | 

`OVERDUE_AMOUNT_BLOCKING_FLAGS`

 | 

A list of flags to apply to a customer or an account that suspends the internal address updates on PDD that age the overdue balance buckets.

 | 

Template

 |
| 

MAD Equal To Zero Flags

 | 

`MAD_EQUAL_TO_ZERO_FLAGS`

 | 

A list of flags to apply to a customer or an account that suspends the internal MAD calculation event on SCOD and PDD, and keeps MAD at zero.As a result, there is no late repayment fee to charge on PDD, even if the customer does not make any repayments during this statement cycle.

 | 

Template

 |

## [](#schedule_timing_parameters "Copy link to heading")Schedule timing parameters

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract:

1.  Interest accrual
    
2.  Annual fee application (so that it will be included in the statement)
    
3.  Payment due
    
4.  Statement cut off
    

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Accrual Schedule Execution Hour

 | 

`accrual_schedule_hour`

 | 

The hour at which the ACCRUE\_INTEREST schedule should execute for all CC accounts.

 | 

Template

 |
| 

Accrual Schedule Execution Minute

 | 

`accrual_schedule_minute`

 | 

The minute at which the ACCRUE\_INTEREST schedule should execute for all CC accounts.

 | 

Template

 |
| 

Accrual Schedule Execution Second

 | 

`accrual_schedule_second`

 | 

The second at which the ACCRUE\_INTEREST schedule should execute for all CC accounts.

 | 

Template

 |
| 

Annual Fee Schedule Execution Hour

 | 

`annual_fee_schedule_hour`

 | 

The hour at which the ANNUAL\_FEE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Annual Fee Schedule Execution Minute

 | 

`annual_fee_schedule_minute`

 | 

The minute at which the ANNUAL\_FEE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Annual Fee Schedule Execution Second

 | 

`annual_fee_schedule_second`

 | 

The second at which the ANNUAL\_FEE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Payment Due Schedule Execution Hour

 | 

`pdd_schedule_hour`

 | 

The hour at which the PAYMENT\_DUE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Payment Due Schedule Execution Minute

 | 

`pdd_schedule_minute`

 | 

The minute at which the PAYMENT\_DUE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Payment Due Schedule Execution Second

 | 

`pdd_schedule_second`

 | 

The second at which the PAYMENT\_DUE schedule should execute for all CC accounts.

 | 

Template

 |
| 

Statement Cutoff Schedule Execution Hour

 | 

`scod_schedule_hour`

 | 

The hour at which the STATEMENT\_CUT\_OFF schedule should execute for all CC accounts.

 | 

Template

 |
| 

Statement Cutoff Schedule Execution Minute

 | 

`scod_schedule_minute`

 | 

The minute at which the STATEMENT\_CUT\_OFF schedule should execute for all CC accounts.

 | 

Template

 |
| 

Statement Cutoff Schedule Execution Second

 | 

`scod_schedule_second`

 | 

The second at which the STATEMENT\_CUT\_OFF schedule should execute for all CC accounts.

 | 

Template

 |