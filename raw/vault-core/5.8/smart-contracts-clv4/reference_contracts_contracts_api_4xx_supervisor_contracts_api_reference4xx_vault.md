---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault"
title: "Vault Object"
scraped_at: "2026-06-16T16:37:18.687Z"
images: 0
---

# Vault Object

## [](#attributes "Copy link to heading")Attributes

### [](#plan_id "Copy link to heading")plan\_id

`str` The ID of the Plan currently being executed.

### [](#supervisees "Copy link to heading")supervisees

`Dict[str, Vault]` A dictionary which maps the supervised Account IDs to their [Vault](./../smart_contracts_api_reference4xx/vault) objects. These objects can be used to retrieve account data, and to retrieve or commit Hook Directives. The allowed API functions of the Supervisee Vault objects per hook can be found [here](./../smart_contracts_api_reference4xx/hooks).

### [](#events_timezone "Copy link to heading")events\_timezone

`ZoneInfo` The timezone in which this Plan operates. If the plan **belongs to a [Processing Group](/vault-core/5-8/EN/reference/processing_groups)** which has a timezone declared, this will be the timezone used. If there is **no Processing Group timezone set**, the `events_timezone` [metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#events_timezone) in the Contract will be used. If **neither of these is set**, the timezone defaults to UTC.

## [](#methods "Copy link to heading")Methods

### [](#get_hook_execution_id "Copy link to heading")get\_hook\_execution\_id

`get_hook_execution_id()`

Returns a unique-enough string that can be used in generating unique IDs for attaching to Hook Directives objects. The string returned is a combination of `plan_id`, `hook_id`, `event_type` and `effective_datetime`. Note: this string is unique for the Plan hook execution and it should not be used for multiple Supervisee Hook Directives, unless modified.

**Return Value:** `str` The unique-enough ID.

### [](#get_plan_opening_datetime "Copy link to heading")get\_plan\_opening\_datetime

`get_plan_opening_datetime()` Returns the opening date of the Plan currently being executed.

**Return Value:** `datetime` The date the Plan was opened as a timezone-aware UTC datetime.

### [](#get_calendar_events "Copy link to heading")get\_calendar\_events

`get_calendar_events(*, calendar_ids)`

Returns a [CalendarEvents](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevents) object with the chronologically ordered list of [CalendarEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevent) that exist in the Vault calendars with the given `calendar_ids`. These `calendar_ids` have to be requested using the hook '@requires' decorator. For information about the time range of events returned, see [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements#calendar)

  
| name | type | description |
| --- | --- | --- |
| 
calendar\_ids

 | 

`List`\[`str`\]

 | 

List of Calendar Ids

 |

**Return Value:** `CalendarEvents`

The chronologically ordered list of [CalendarEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevent) objects.

**Examples**

The Vault calendar usage example

### [](#get_hook_name "Copy link to heading")get\_hook\_name

`get_hook_name()`

Returns an enum that indicates which hook is currently being executed. See the list of possible values [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#hookname).

**Return Value:** `enum` The HookType enum. **Examples**

Using get\_hook\_name in a contract level utility.