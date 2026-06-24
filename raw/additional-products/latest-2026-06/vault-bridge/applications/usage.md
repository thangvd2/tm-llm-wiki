---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/applications/usage"
title: "Usage Monitor"
scraped_at: "2026-06-17T15:55:33.914Z"
images: 1
---

# Usage Monitor

## [](#what_is_usage_monitor "Copy link to heading")What is Usage Monitor?

The Usage Monitor is a web application which measures historical usage of Vault Core by counting the total number of *live (customer) accounts* and *live customers* on a monthly *Measurement date*. It also displays the percentage of accounts in use, compared to an agreed number of *committed accounts*:

![Usage Monitor image](_assets/usage_monitor.D40nosb-_ZUlznX_addition.webp)

## [](#the_history_columns_and_how_the_data_is_calculated "Copy link to heading")The History columns and how the data is calculated

 
| Column name | Description |
| --- | --- |
| 
**Measurement date**

 | 

The date at which a total number of live accounts and customers that Usage Monitor has counted. The time is implicitly midnight.

 |
| 

**Live accounts**

 | 

The total number of live customer accounts in Vault Core as of the **Measurement date**.

A live account is any Customer Account that, in the three calendar months preceding the measurement date (inclusive), has had at least one posting or has a non-zero balance (which can be positive or negative). A Customer Account with zero balance is not considered a live account unless it has received a posting in the three months leading up to the measurement date.

For example, if the measurement date is 31 March, and a Customer Account with a zero balance receives one posting on or after 2 March (or 3 March if it’s a leap year), it is considered a live account.

 |
| 

**Live customers**

 | 

The total number of live customers in Vault as of the **Measurement date**.

A *live customer* is any customer that, in the three months preceding the **Measurement date**, has been associated with at least one *live account*.

 |
| 

**Committed accounts (and percentage used)**

 | 

The total number of accounts included in the fixed base price for your Vault Core instance, contractually agreed with Thought Machine. Any additional live accounts on the instance are charged at a Pay-as-You-Go (PaYG) rate.

The percentage of live accounts on Vault Core (as a proportion of the committed Accounts) is displayed in parentheses.

*Note: This column displays "0" if there is no fixed price agreement in place.*

 |

## [](#downloading_the_csv "Copy link to heading")Downloading the CSV

Depending on your contractual agreement, Thought Machine may request a CSV export of your Vault Core usage history, in which case you can use the **Download CSV** button to save the complete usage history for sending to us.