---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/credit_card/appendix"
title: "Appendix"
scraped_at: "2026-06-17T05:04:52.543Z"
images: 0
---

# Appendix

## [](#interest_free_period_additional_use_cases "Copy link to heading")Interest-free period additional use cases

### [](#interest_free_period_is_already_active_or_expires_on_the_account "Copy link to heading")Interest-free period is already active or expires on the account

#### [](#for_transaction_types_that_are_not_reference_based_specific_balance_address_behaviour_before_the_pdd_in_the_statement_cycle "Copy link to heading")For transaction types that are not reference-based, specific balance address behaviour before the PDD in the statement cycle

-   *Given* a bank is offering an interest-free period
    
-   *When* there is an active interest-free period on an account
    
    -   and the account is between SCOD and PDD in the current statement
        
    
-   *Then* on every interest accrual event there is an accrual of interest in a specific balance address: `{TXN_TYPE}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}`
    

#### [](#balance_address_behaviour_after_the_pdd_in_the_statement_cycle "Copy link to heading")Balance address behaviour after the PDD in the statement cycle

-   *Given* a bank is offering an interest-free period
    
-   *When* there is an active interest-free period
    
    -   and it is after PDD in the current statement
        
    -   and the bank has received the MAD payment
        
    
-   *Then* on every interest accrual event, there is no accrual of interest for the transaction type/reference.
    

chat\_bubble

By default, interest accrual events occur at midnight UTC every day.

#### [](#for_transaction_types_that_are_not_reference_based_specific_balance_address_behaviour_after_the_pdd_given_that_the_customer_repaid_the_total_outstanding_balance "Copy link to heading")For transaction types that are not reference-based, specific balance address behaviour after the PDD given that the customer repaid the total outstanding balance

-   *Given* a bank is offering an interest-free period
    
-   *When* the customer pays off the outstanding balance in full before the PDD
    
-   *Then* the uncharged interest address is zeroed out for the current statement cycle
    
    -   and still shows purchases made after the SCOD for types with and without a current interest-free period.
        
    

#### [](#for_transaction_types_that_are_not_reference_based_accrued_interest_is_zeroed_out_on_the_pdd_given_that_the_customer_repaid_the_mad "Copy link to heading")For transaction types that are not reference-based, accrued interest is zeroed out on the PDD given that the customer repaid the MAD

-   *Given* the given transaction type is not reference-based
    
    -   and has an active interest-free period on it
        
    
-   *When* the customer repays the MAD by the PDD
    
-   *Then* all interest accrued in the balance addresses `{TXN_TYPE}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}` is zeroed out.
    

#### [](#for_transaction_types_that_are_reference_based_accrued_interest_is_zeroed_out_on_the_pdd_given_that_the_customer_repaid_the_mad "Copy link to heading")For transaction types that are reference-based, accrued interest is zeroed out on the PDD given that the customer repaid the MAD

-   *Given* the given transaction type is reference-based
    
    -   and there is an active interest-free period on it
        
    
-   *When* the customer repays the MAD by the PDD
    
-   *Then* all interest accrued in the balance addresses `{TXN_TYPE}_{REF}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}` is zeroed out.
    

#### [](#for_transaction_types_that_are_not_reference_based_on_the_pdd_the_customer_did_not_repay_the_mad "Copy link to heading")For transaction types that are not reference-based, on the PDD the customer did not repay the MAD

-   *Given* the given transaction type is not reference-based
    
    -   and it has an active interest-free period on it
        
    
-   *When* the customer does not repay the MAD by the PDD
    
-   *Then* the balance from the `{TXN_TYPE}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}` address goes to `{TXN_TYPE}_INTEREST_CHARGED`
    
    -   and the expiry parameter is set to empty.
        
    

chat\_bubble

The parameter update is handled by the `CREDIT_CARD_EXPIRE_INTEREST_FREE_PERIODS` workflow which is auto-instantiated following the contract emitting a `"EXPIRE_INTEREST_FREE_PERIODS_NOTIFICATION"` notification.

#### [](#account_does_not_receive_the_mad_by_the_pdd_for_transaction_types_that_are_reference_based "Copy link to heading")Account does not receive the MAD by the PDD for transaction types that are reference-based

-   *Given* there is an active interest-free period on the reference-based transaction type
    
-   *When* the customer does not repay the MAD by the PDD
    
-   *Then* the balance from the `{TXN_TYPE}_{REF}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}` address goes to `{TXN_TYPE}_{REF}_INTEREST_CHARGED`
    
    -   and the expiry parameter is set to empty.
        
    

chat\_bubble

The parameter update is handled by the `CREDIT_CARD_EXPIRE_INTEREST_FREE_PERIODS\`\\\` workflow which is auto-instantiated following the contract emitting a"\`EXPIRE\_INTEREST\_FREE\_PERIODS\_NOTIFICATION"\` notification.

#### [](#interest_free_period_expires_before_the_pdd_in_the_current_statement_cycle "Copy link to heading")Interest-free period expires before the PDD in the current statement cycle

-   *Given* a bank is offering an interest-free period
    
-   *When* the interest-free period expires during the current statement cycle
    
    -   and the account is not in the revolver mode
        
    
-   *Then* the transactions that have occurred after the expiry timestamp for this month
    
    -   and for transactions with a type that has `"charge_interest_from_transaction_date=False"` the interest is accrued in the `{TXN_TYPE}_{REF}_INTEREST_UNCHARGED` or `{TXN_TYPE}_INTEREST_UNCHARGED` (depending on the transaction type)
        
    -   and when the customer has paid the outstanding balance by the PDD that all 4 `UNCHARGED` addresses are zeroed out (inclusive of `{TXN_TYPE}_{REF}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}` and `{TXN_TYPE}_{INTEREST_FREE_PERIOD_INTEREST_UNCHARGED}`).
        
    

chat\_bubble

The last two addresses refer to MAD. When the customer repays the total outstanding balance it means that the MAD is also paid; therefore, the corresponding uncharged addresses are also zeroed out.

#### [](#interest_free_period_expires_before_the_pdd_in_the_current_statement_cycle_when_the_account_is_in_revolver_mode "Copy link to heading")Interest-free period expires before the PDD in the current statement cycle when the account is in revolver mode

-   *Given* a bank is offering an interest-free period
    
-   *When* the interest-free period expires during the current statement cycle
    
    -   and the account is in the revolver mode
        
    
-   *Then* the interest for transactions that occur in the period after the expiry timestamp is set to accrue in `{TXN_TYPE}_{REF}_INTEREST_CHARGED` or `{TXN_TYPE}_INTEREST_CHARGED` according to the transaction type.
    

### [](#interest_free_period_starts_during_the_current_statement_cycle "Copy link to heading")Interest-free period starts during the current statement cycle

These use cases describe scenarios in which interest-free periods start and end during the month, and cover the different permutations of the situation.

#### [](#accuracy_of_the_interest_free_expiry_timestamp "Copy link to heading")Accuracy of the interest-free expiry timestamp

-   *Given* a bank is offering an interest-free period
    
    -   and the account is not in the revolver mode
        
    -   and transaction type has `charge_interest_from_transaction_date` = `False`
        
    
-   *When* the timestamp is in the format %Y-%m-%d %H:M:S
    
    -   and the time is in the past
        
    
-   *Then* interest accrues to `INTEREST_UNCHARGED` at the `EVENT_ACCRUE` event every night at 00:00 UTC.
    

#### [](#parameter_charge_interest_from_transaction_date_is_set_to_false_and_the_customer_repays_the_mad_by_the_pdd_appropriate_example_purchases "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date is set to False and the customer repays the MAD by the PDD (appropriate example: purchases)

-   *Given* the `charge_interest_from_transaction_date` parameter is set to False
    
-   *When* the customer repays the MAD by the PDD
    
-   *Then* all interest accrued in balance addresses `INTEREST_FREE_PERIOD_INTEREST_UNCHARGED` is zeroed out.
    

#### [](#parameter_charge_interest_from_transaction_date_set_to_false_and_customer_pays_mad_by_pdd_reference_based_transaction_type "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date set to False and customer pays MAD by PDD (reference-based transaction type)

-   *Given* the `charge_interest_from_transaction_date` parameter is set to `False`
    
    -   and the transaction type is reference-based (it uses references)
        
    
-   *When* the customer repays only the MAD by the PDD (not the full outstanding balance)
    
-   *Then* all interest accrued in balance addresses `INTEREST_FREE_PERIOD_INTEREST_UNCHARGED` is zeroed out.
    

chat\_bubble

This is a useful scenario to test because by default, `balance_transfer` has `charge_interest_from_transaction_date=True`. To test this, a credit card product requires deployment with `charge_interest_from_transaction_date` for balance transfers set to `False` at the template level. This also verifies the fix in INC-2842 - prior to this fix, the contract would fail on PDD.

#### [](#parameter_charge_interest_from_transaction_date_set_to_false_and_customer_does_not_repay_mad_by_pdd_example_purchases "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date set to False and customer does not repay MAD by PDD (example: purchases)

-   *Given* the `charge_interest_from_transaction_date` parameter is set to `False`
    
-   *When* the customer does not repay the MAD by the PDD
    
-   *Then* the balance from the `INTEREST_FREE_PERIOD_INTEREST_UNCHARGED` and `INTEREST_UNCHARGED` go to `INTEREST_CHARGED`.
    

#### [](#parameter_charge_interest_from_transaction_date_is_set_to_true_example_cash_advances "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date is set to True (example: cash\_advances)

-   *Given* a bank is offering a credit card product
    
-   *When* the `charge_interest_from_transaction_date` parameter is set to `True`
    
-   *Then* interest on this transaction type accrues straight onto the `INTEREST_CHARGED` address, starting on the purchase day.
    

#### [](#parameter_charge_interest_from_transaction_date_is_set_to_true_with_an_active_interest_free_period_parameter "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date is set to True with an active interest-free period parameter

-   *Given* the bank is offering an interest-free period
    
-   *When* the `charge_interest_from_transaction_date` parameter is set to `True`
    
    -   and a transaction type is subject to ad in an active interest-free period
        
    
-   *Then* interest on the given transaction type accrues on `INTEREST_FREE_PERIOD_INTEREST_UNCHARGED` on each interest accrual event
    
    -   and is zeroed out by PDD when the customer repays the MAD.
        
    

#### [](#parameter_charge_interest_from_transaction_date_is_set_to_true_example_cash_advances_2 "Copy link to heading")Parameter charge\_interest\_from\_transaction\_date is set to True (example: cash\_advances)

-   *Given* the bank is offering an interest-free period
    
-   *When* the account has positive balance in `INTEREST_UNCHARGED` and `INTEREST_FREE_PERIOD_INTEREST_UNCHARGED` addresses
    
    -   and has nothing in `CHARGED`, `BILLED`, or `UNPAID`
        
    
-   *Then* verify that on receiving the account closure request, the account will zero out the uncharged addresses and close.