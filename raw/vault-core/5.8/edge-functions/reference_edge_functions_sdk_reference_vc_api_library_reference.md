---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/edge_functions/sdk_reference/vc_api_library_reference"
title: "Library reference: vc_api"
scraped_at: "2026-06-16T15:25:06.979Z"
images: 0
---

# Library reference: vc_api

## [](#coreapiclient "Copy link to heading")CoreAPIClient

*type: Class*

A client for interacting with Core API.

```
This class provides methods to interact with various endpoints of the web API. It requires
a session object that handles the making HTTP requests.
```

```
Interactions with Vault Core are provided as methods on this class. To explore the methods
available please look inside the \_api/ directory.
```

Signature of the constructor for this class:

## [](#base_model_vaultcorebasemodel "Copy link to heading")base\_model.VaultCoreBaseModel

*type: Class*

BaseModel for VC API library models

Signature of the constructor for this class:

## [](#common_fieldmask "Copy link to heading")common.FieldMask

*type: Class*

FieldMask represents a set of symbolic field paths, for example: "paths": \["f.a", "f.b.d"\] Here `f` represents a field in some root message, `a` and `b` fields in the message found in `f`, and `d` a field found in the message in `f.b`. Fields are represented by their JSON field names. "paths": \["f.field1", "f.field\_on\_f.some\_field\_name"\] Field masks are used to specify a subset of fields that should be, or have been, modified by an update operation.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`paths`

 | 

`typing.List[str]`

 | 

The set of field mask paths.

 |

## [](#common_nullablebooleanfilter "Copy link to heading")common.NullableBooleanFilter

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`BOTH`

 |  |
| 

`ONLY_TRUE`

 |  |
| 

`ONLY_FALSE`

 |  |

## [](#common_orderbydirection "Copy link to heading")common.OrderByDirection

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ORDER_BY_DESC`

 |  |
| 

`ORDER_BY_ASC`

 |  |

## [](#common_semver "Copy link to heading")common.SemVer

*type: Class*

Minimal representation of a Semantic Versioning Specification (SemVer) version. For more information go to [http://semver.org](http://semver.org).

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`major`

 | 

`class 'int'`

 | 

The major version number.

 |
| 

`minor`

 | 

`class 'int'`

 | 

The minor version number.

 |
| 

`patch`

 | 

`class 'int'`

 | 

The patch version number.

 |
| 

`label`

 | 

`class 'str'`

 | 

The version label. Example: "-beta".

 |

## [](#core_api_v1_account_attributes_accountattributevalue "Copy link to heading")core\_api.v1.account\_attributes.AccountAttributeValue

*type: Class*

AccountAttributeValue

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`class 'str'`

 | 

The ID of the Account for which this is an Attribute.

 |
| 

`attribute_name`

 | 

`class 'str'`

 | 

The name of the Attribute for which this is a calculated value.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The effective time at which the Attribute value is calculated, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`value`

 | 

`typing.Optional[vc_api.core_api.v1.account_attributes._attribute_value.AttributeValue]`

 | 

The value of the Account Attribute, which must match the Attribute data type defined in the Smart Contract.

 |

## [](#core_api_v1_account_attributes_attributevalue "Copy link to heading")core\_api.v1.account\_attributes.AttributeValue

*type: Class*

AttributeValue

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_value`

 | 

`typing.Optional[vc_api.core_api.v1.account_attributes._string_value.StringValue]`

 | 

The value of a string Attribute.

 |
| 

`decimal_value`

 | 

`typing.Optional[vc_api.core_api.v1.account_attributes._decimal_value.DecimalValue]`

 | 

The value of a decimal Attribute.

 |
| 

`date_time_value`

 | 

`typing.Optional[vc_api.core_api.v1.account_attributes._date_time_value.DateTimeValue]`

 | 

The value of a date-time Attribute, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_account_attributes_datetimevalue "Copy link to heading")core\_api.v1.account\_attributes.DateTimeValue

*type: Class*

DateTimeValue is a wrapper object, allowing for Optional\[DateTime\] declaration of the value, or absense of the value.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`typing.Optional[datetime.datetime]`

 | 

The value of a date-time Attribute, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_account_attributes_decimalvalue "Copy link to heading")core\_api.v1.account\_attributes.DecimalValue

*type: Class*

DecimalValue is a wrapper object, allowing for Optional\[Decimal\] declaration of the primitive value, or absense of the primitive value.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`class 'str'`

 | 

Value of the decimal attribute.

 |

## [](#core_api_v1_account_attributes_listaccountattributevaluesresponse "Copy link to heading")core\_api.v1.account\_attributes.ListAccountAttributeValuesResponse

*type: Class*

ListAccountAttributeValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_attribute_values`

 | 

`typing.List[vc_api.core_api.v1.account_attributes._account_attribute_value.AccountAttributeValue]`

 | 

The Account Attributes and their values matching the specified filtering options. Account Attributes are sorted by ascending `account_id`, `attribute_name`, `effective_timestamp`.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the next page of Account Attributes. If empty, the given page is the last page.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the previous page of Account Attributes. If empty, the given page is the first page.

 |

## [](#core_api_v1_account_attributes_stringvalue "Copy link to heading")core\_api.v1.account\_attributes.StringValue

*type: Class*

StringValue is a wrapper object, allowing for Optional\[String\] declaration of the primitive value, or absense of the primitive value.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`class 'str'`

 | 

Value of the string attribute.

 |

## [](#core_api_v1_account_schedule_tags_accountscheduletag "Copy link to heading")core\_api.v1.account\_schedule\_tags.AccountScheduleTag

*type: Class*

AccountScheduleTag

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the AccountScheduleTag; it is used to tag schedules in a Smart Contract or Supervisor Contract.

 |
| 

`description`

 | 

`class 'str'`

 | 

The description of the AccountScheduleTag.

 |
| 

`sends_scheduled_operation_reports`

 | 

`class 'bool'`

 | 

Indicates if the AccountScheduleTag is set to produce execution notifications.

 |
| 

`schedule_status_override`

 | 

`enum 'AccountScheduleTagScheduleStatusOverride'`

 | 

The status applied to schedules tagged with this AccountScheduleTag.

 |
| 

`schedule_status_override_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to start overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`schedule_status_override_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to stop overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`test_pause_at_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when an account/plan schedule with this tag will pause; the pause will occur when `next_run_timestamp` is greater than `test_pause_at_timestamp`. Only for testing purposes. Formatted as an RFC3339 timestamp.

 |
| 

`processing_group_id`

 | 

`class 'str'`

 | 

The ID of the Processing Group for the AccountScheduleTag. If omitted, it defaults to the default Processing Group. Create only. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v1_account_schedule_tags_accountscheduletagcreatefields "Copy link to heading")core\_api.v1.account\_schedule\_tags.AccountScheduleTagCreateFields

*type: Class*

AccountScheduleTagCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The ID of the AccountScheduleTag; it is used to tag schedules in a Smart Contract or Supervisor Contract.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The description of the AccountScheduleTag.

 |
| 

`sends_scheduled_operation_reports`

 | 

`typing.Optional[bool]`

 | 

Indicates if the AccountScheduleTag is set to produce execution notifications.

 |
| 

`schedule_status_override`

 | 

`typing.Optional[vc_api.core_api.v1.account_schedule_tags._account_schedule_tag_schedule_status_override.AccountScheduleTagScheduleStatusOverride]`

 | 

The status applied to schedules tagged with this AccountScheduleTag.

 |
| 

`schedule_status_override_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to start overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`schedule_status_override_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to stop overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`test_pause_at_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when an account/plan schedule with this tag will pause; the pause will occur when `next_run_timestamp` is greater than `test_pause_at_timestamp`. Only for testing purposes. Formatted as an RFC3339 timestamp.

 |
| 

`processing_group_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Processing Group for the AccountScheduleTag. If omitted, it defaults to the default Processing Group. Create only. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v1_account_schedule_tags_accountscheduletagschedulestatusoverride "Copy link to heading")core\_api.v1.account\_schedule\_tags.AccountScheduleTagScheduleStatusOverride

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_SCHEDULE_TAG_SCHEDULE_STATUS_OVERRIDE_UNKNOWN`

 |  |
| 

`ACCOUNT_SCHEDULE_TAG_SCHEDULE_STATUS_OVERRIDE_NO_OVERRIDE`

 |  |
| 

`ACCOUNT_SCHEDULE_TAG_SCHEDULE_STATUS_OVERRIDE_TO_ENABLED`

 |  |
| 

`ACCOUNT_SCHEDULE_TAG_SCHEDULE_STATUS_OVERRIDE_TO_FAST_FORWARDED`

 |  |
| 

`ACCOUNT_SCHEDULE_TAG_SCHEDULE_STATUS_OVERRIDE_TO_SKIPPED`

 |  |

## [](#core_api_v1_account_schedule_tags_accountscheduletagupdatefields "Copy link to heading")core\_api.v1.account\_schedule\_tags.AccountScheduleTagUpdateFields

*type: Class*

AccountScheduleTagUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The ID of the AccountScheduleTag; it is used to tag schedules in a Smart Contract or Supervisor Contract.

 |
| 

`schedule_status_override`

 | 

`typing.Optional[vc_api.core_api.v1.account_schedule_tags._account_schedule_tag_schedule_status_override.AccountScheduleTagScheduleStatusOverride]`

 | 

The status applied to schedules tagged with this AccountScheduleTag.

 |
| 

`schedule_status_override_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to start overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`schedule_status_override_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when to stop overriding the status on account/plan schedules with this tag. Formatted as an RFC3339 timestamp.

 |
| 

`test_pause_at_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp, in UTC, indicating when an account/plan schedule with this tag will pause; the pause will occur when `next_run_timestamp` is greater than `test_pause_at_timestamp`. Only for testing purposes. Formatted as an RFC3339 timestamp.

 |
| 

`processing_group_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Processing Group for the AccountScheduleTag. If omitted, it defaults to the default Processing Group. Create only. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v1_account_schedule_tags_batchgetaccountscheduletagsresponse "Copy link to heading")core\_api.v1.account\_schedule\_tags.BatchGetAccountScheduleTagsResponse

*type: Class*

BatchGetAccountScheduleTagsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_schedule_tags`

 | 

`typing.Dict[str, vc_api.core_api.v1.account_schedule_tags._account_schedule_tag.AccountScheduleTag]`

 | 

A map of the AccountScheduleTag ID to the AccountScheduleTag.

 |

## [](#core_api_v1_account_schedule_tags_createaccountscheduletagrequest "Copy link to heading")core\_api.v1.account\_schedule\_tags.CreateAccountScheduleTagRequest

*type: Class*

CreateAccountScheduleTagRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`account_schedule_tag`

 | 

`typing.Optional[vc_api.core_api.v1.account_schedule_tags._account_schedule_tag_create_fields.AccountScheduleTagCreateFields]`

 | 

The AccountScheduleTag that is to be created. Required.

 |

## [](#core_api_v1_account_schedule_tags_listaccountscheduletagsresponse "Copy link to heading")core\_api.v1.account\_schedule\_tags.ListAccountScheduleTagsResponse

*type: Class*

ListAccountScheduleTagsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_schedule_tags`

 | 

`typing.List[vc_api.core_api.v1.account_schedule_tags._account_schedule_tag.AccountScheduleTag]`

 | 

A list of matching AccountScheduleTags, ordered by ascending ID.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_account_schedule_tags_updateaccountscheduletagrequest "Copy link to heading")core\_api.v1.account\_schedule\_tags.UpdateAccountScheduleTagRequest

*type: Class*

UpdateAccountScheduleTagRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`account_schedule_tag`

 | 

`typing.Optional[vc_api.core_api.v1.account_schedule_tags._account_schedule_tag_update_fields.AccountScheduleTagUpdateFields]`

 | 

The AccountScheduleTag that is to be updated. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask used to indicate which fields of the resource are to be updated. Required. Valid update mask paths are: - `schedule_status_override` which will update the `schedule_status_override` of an AccountScheduleTag - `schedule_status_override_status_start_timestamp` which will update the `schedule_status_override_status_start_timestamp` of an AccountScheduleTag. A `schedule_status_override` is required when updating this field - `schedule_status_override_status_end_timestamp` which will update the `schedule_status_override_status_end_timestamp` of an AccountScheduleTag. A `schedule_status_override` is required when updating this field - `test_pause_at_timestamp` which will update the `test_pause_at_timestamp` value of an AccountScheduleTag

 |

## [](#core_api_v1_accounting_tside "Copy link to heading")core\_api.v1.accounting.Tside

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`TSIDE_UNKNOWN`

 |  |
| 

`TSIDE_ASSET`

 |  |
| 

`TSIDE_LIABILITY`

 |  |

## [](#core_api_v1_accounts_accountmigration "Copy link to heading")core\_api.v1.accounts.AccountMigration

*type: Class*

Representation of an account migration object. Account migrations are used for the bulk migration of accounts from specified product version IDs to one final specified product version ID.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique identifier for the account migration. Optional.

 |
| 

`status`

 | 

`enum 'AccountMigrationStatus'`

 | 

The status of account migration.

 |
| 

`product_version_migration`

 | 

`typing.Optional[vc_api.core_api.v1.accounts._product_version_migration.ProductVersionMigration]`

 | 

Product version migration details.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the account migration was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`last_status_update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the last update was performed, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_accounts_accountmigrationstatus "Copy link to heading")core\_api.v1.accounts.AccountMigrationStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_MIGRATION_STATUS_UNKNOWN`

 |  |
| 

`ACCOUNT_MIGRATION_STATUS_PENDING_EXECUTION`

 |  |
| 

`ACCOUNT_MIGRATION_STATUS_PAUSED`

 |  |
| 

`ACCOUNT_MIGRATION_STATUS_COMPLETED`

 |  |

## [](#core_api_v1_accounts_accountscheduleassoc "Copy link to heading")core\_api.v1.accounts.AccountScheduleAssoc

*type: Class*

AccountScheduleAssoc

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique identifier for the Account Schedule association.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the account.

 |
| 

`schedule_id`

 | 

`class 'str'`

 | 

The Schedule ID associated with the account.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the Schedule was created, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_accounts_batchgetaccountmigrationsresponse "Copy link to heading")core\_api.v1.accounts.BatchGetAccountMigrationsResponse

*type: Class*

BatchGetAccountMigrationsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_migrations`

 | 

`typing.Dict[str, vc_api.core_api.v1.accounts._account_migration.AccountMigration]`

 | 

Map of account migration IDs to their value.

 |

## [](#core_api_v1_accounts_listaccountmigrationsresponse "Copy link to heading")core\_api.v1.accounts.ListAccountMigrationsResponse

*type: Class*

ListAccountMigrationsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_migrations`

 | 

`typing.List[vc_api.core_api.v1.accounts._account_migration.AccountMigration]`

 | 

A list of matching account migrations, ordered by ascending `create_timestamp`.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_accounts_listaccountscheduleassocsresponse "Copy link to heading")core\_api.v1.accounts.ListAccountScheduleAssocsResponse

*type: Class*

ListAccountScheduleAssocsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_schedule_assocs`

 | 

`typing.List[vc_api.core_api.v1.accounts._account_schedule_assoc.AccountScheduleAssoc]`

 | 

A list of matching Account Schedule associations, ordered by ascending `create_timestamp`. In cases of matching timestamps, ordering is by ascending `id`. Note: Account Schedule Assoc is an Association resource where each Assoc holds a reference to an Account and a Schedule related to that Account. This will include Associations to previous Product Versions and disabled Schedules.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_accounts_productversionmigration "Copy link to heading")core\_api.v1.accounts.ProductVersionMigration

*type: Class*

Holds the information required to execute a product version migration. To be part of a product version migration an account needs to be in one of the following statuses: ACCOUNT\_STATUS\_PENDING, ACCOUNT\_STATUS\_OPEN, ACCOUNT\_STATUS\_PENDING\_CLOSURE

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`from_product_version_ids`

 | 

`typing.List[str]`

 | 

The product version IDs of the accounts that are to be migrated.

 |
| 

`to_product_version_id`

 | 

`class 'str'`

 | 

The product version ID that accounts will be migrated to. For migrations to product versions that make use of contract modules, each named contract module in the target product version must have a corresponding smart contract module versions link. The product behind this product version ID must have the same tside as the products the accounts are to be migrated from.

 |
| 

`schedule_migration_type`

 | 

`enum 'ScheduleMigrationType'`

 | 

Specifies how existing schedules should be migrated.

Note: This field has no effect on migrations to a product version on Contracts Language API version 4. See [Account conversions](/vault-core/5-8/EN/reference/accounts/accounts_version_1#account_conversions).

 |

## [](#core_api_v1_accounts_schedulemigrationtype "Copy link to heading")core\_api.v1.accounts.ScheduleMigrationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`SCHEDULE_MIGRATION_TYPE_RECREATE_ALL_SCHEDULES_AND_GROUPS`

 |  |
| 

`SCHEDULE_MIGRATION_TYPE_PRESERVE_SCHEDULES_IF_NO_GROUP_CHANGES`

 |  |

## [](#core_api_v1_adjustments_adjustment "Copy link to heading")core\_api.v1.adjustments.Adjustment

*type: Class*

Adjustment

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

This is a UUID that uniquely identifies this Adjustment. It is randomly generated by Vault Core and any value provided in a creation request will be ignored.

 |
| 

`schedule_job_id`

 | 

`class 'str'`

 | 

The ID of the Schedule Job which created this Adjustment.

 |
| 

`resource_adjustment_count`

 | 

`class 'int'`

 | 

The number of Adjustments created so far for the Account, regardless of the status of each Adjustment.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the account that is the target of the Adjustment.

 |
| 

`status`

 | 

`enum 'Status'`

 | 

The status reflects the Adjustment’s progress, and whether it has failed due to an error, been discarded as unnecessary, or completed successfully.

 |
| 

`error`

 | 

`typing.Optional[vc_api.errors._error.Error]`

 | 

If the Adjustment is in status ERROR, then this will be populated with the error that caused it.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time at which this Adjustment was created.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp of the most recent status update of this Adjustment.

 |
| 

`previous_watermark_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

An Adjustment checks for backdates that were inserted into Vault Core within a certain time range. This is the inclusive lower bound of that time range. For an Account’s first Adjustment it will be empty.

 |
| 

`timeline_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

An Adjustment operates on a period of time dictated by the value/effective time of a backdate, though limited by when the Account was created on, or converted to, an Adjustments-enabled Smart Contract. This is the lower bound of that time period, and will be equal to either the earliest value/effective time, or the activation/conversion time of the Account. If an Account has multiple conversions in its history from a Smart Contract not enabled for Adjustments to one that is, the most recent such conversion is used for the lower bound.

Returns null if Vault Core evaluates that an Adjustment is not required.

 |
| 

`timeline_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The upper bound of the period of time simulated by the Adjustment.

 |
| 

`correction_posting_instruction_batch_ids`

 | 

`typing.List[str]`

 | 

The IDs of the Posting Instruction Batches that were created as a result of this Adjustment. Their value timestamps will match one of the Adjustment points being corrected over, and booking timestamps will all equal the timeline\_end\_timestamp.

 |

## [](#core_api_v1_adjustments_batchgetadjustmentsresponse "Copy link to heading")core\_api.v1.adjustments.BatchGetAdjustmentsResponse

*type: Class*

BatchGetAdjustmentsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`adjustments`

 | 

`typing.Dict[str, vc_api.core_api.v1.adjustments._adjustment.Adjustment]`

 | 

The retrieved Adjustments. This is a map of Adjustments keyed on ID.

 |

## [](#core_api_v1_adjustments_listadjustmentsresponse "Copy link to heading")core\_api.v1.adjustments.ListAdjustmentsResponse

*type: Class*

ListAdjustmentsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`adjustments`

 | 

`typing.List[vc_api.core_api.v1.adjustments._adjustment.Adjustment]`

 | 

A list of matching Adjustments, sorted by descending update\_timestamp, then by descending account ID.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_adjustments_status "Copy link to heading")core\_api.v1.adjustments.Status

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`STATUS_UNKNOWN`

 |  |
| 

`STATUS_PENDING`

 |  |
| 

`STATUS_RUNNING`

 |  |
| 

`STATUS_COMPLETED`

 |  |
| 

`STATUS_NO_ADJUSTMENT_REQUIRED`

 |  |
| 

`STATUS_ERROR`

 |  |

## [](#core_api_v1_auth_validatetokenresponse "Copy link to heading")core\_api.v1.auth.ValidateTokenResponse

*type: Class*

ValidateTokenResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`is_valid`

 | 

`class 'bool'`

 | 

Indicates if the token attached to the metadata is valid.

 |

## [](#core_api_v1_balances_balance "Copy link to heading")core\_api.v1.balances.Balance

*type: Class*

Balance

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the balance. Output only.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the associated account.

 |
| 

`account_address`

 | 

`class 'str'`

 | 

The account address represents one partition of the total balances held on the account.

 |
| 

`phase`

 | 

`enum 'PostingPhase'`

 | 

The posting phase the balance applies to.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset in which the balance is held.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The denomination in which the balance is held for the given asset.

 |
| 

`posting_instruction_batch_id`

 | 

`class 'str'`

 | 

The ID of the logical posting instruction batch which yielded this balance.

 |
| 

`value_time`

 | 

`typing.Optional[datetime.datetime]`

 | 

The value time corresponding to the balance change, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`amount`

 | 

`class 'str'`

 | 

The amount is the net value of the balance.

 |
| 

`total_debit`

 | 

`class 'str'`

 | 

The total sum of debits.

 |
| 

`total_credit`

 | 

`class 'str'`

 | 

The total sum of credits.

 |

## [](#core_api_v1_balances_listbalancesliveresponse "Copy link to heading")core\_api.v1.balances.ListBalancesLiveResponse

*type: Class*

ListBalancesLiveResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`balances`

 | 

`typing.List[vc_api.core_api.v1.balances._balance.Balance]`

 | 

A list of matching balances.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_balances_listbalancestimerangeresponse "Copy link to heading")core\_api.v1.balances.ListBalancesTimeRangeResponse

*type: Class*

ListBalancesTimeRangeResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`balances`

 | 

`typing.List[vc_api.core_api.v1.balances._balance.Balance]`

 | 

A list of matching balances.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_calendar_batchgetcalendareventsresponse "Copy link to heading")core\_api.v1.calendar.BatchGetCalendarEventsResponse

*type: Class*

BatchGetCalendarEventsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`calendar_events`

 | 

`typing.Dict[str, vc_api.core_api.v1.calendar._calendar_event.CalendarEvent]`

 | 

Maps the Calendar Event IDs to the requested Calendar Events.

 |

## [](#core_api_v1_calendar_bookkeepingdate "Copy link to heading")core\_api.v1.calendar.BookkeepingDate

*type: Class*

BookkeepingDate

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Calendar to which the Bookkeeping Date belongs.

 |
| 

`date`

 | 

`class 'str'`

 | 

Specifies the date for the Bookkeeping Date. Must be in the ISO-8601 extended date format: YYYY-MM-DD, or empty. This date string would be used to annotate the next Calendar Period that will be emitted for the corresponding Calendar.

 |

## [](#core_api_v1_calendar_bookkeepingdateupdatefields "Copy link to heading")core\_api.v1.calendar.BookkeepingDateUpdateFields

*type: Class*

BookkeepingDateUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`date`

 | 

`typing.Optional[str]`

 | 

Specifies the date for the Bookkeeping Date. Must be in the ISO-8601 extended date format: YYYY-MM-DD, or empty. This date string would be used to annotate the next Calendar Period that will be emitted for the corresponding Calendar.

 |

## [](#core_api_v1_calendar_calendar "Copy link to heading")core\_api.v1.calendar.Calendar

*type: Class*

Calendar

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The Calendar ID can be specified by the user when creating the Calendar, otherwise it will be generated by the service. Must be unique.

 |
| 

`calendar_period_descriptor_id`

 | 

`class 'str'`

 | 

ID of the Calendar Period Descriptor associated with the Calendar.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

Defaults to false. Note that when is\_active is set to false, calendar periods (if a Calendar Period Descriptor has been assigned) will not be produced. When is\_active is later set to true, Calendar Period production will resume.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Calendar was created, in UTC. Formatted as an RFC3339 timestamp. Cannot be specified by the user.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

Human-readable name of the calendar. Optional.

 |
| 

`description`

 | 

`class 'str'`

 | 

Description of the calendar. Optional.

 |

## [](#core_api_v1_calendar_calendarcreatefields "Copy link to heading")core\_api.v1.calendar.CalendarCreateFields

*type: Class*

CalendarCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The Calendar ID can be specified by the user when creating the Calendar, otherwise it will be generated by the service. Must be unique.

 |
| 

`calendar_period_descriptor_id`

 | 

`typing.Optional[str]`

 | 

ID of the Calendar Period Descriptor associated with the Calendar.

 |
| 

`is_active`

 | 

`typing.Optional[bool]`

 | 

Defaults to false. Note that when is\_active is set to false, calendar periods (if a Calendar Period Descriptor has been assigned) will not be produced. When is\_active is later set to true, Calendar Period production will resume.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

Human-readable name of the calendar. Optional.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

Description of the calendar. Optional.

 |

## [](#core_api_v1_calendar_calendarevent "Copy link to heading")core\_api.v1.calendar.CalendarEvent

*type: Class*

apilint:disable:next STREAM\_EVENT\_HAS\_CORRECT\_FIELDS STREAM\_EVENT\_HAS\_CORRECT\_TOPIC

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The Calendar Event ID can be specified by the user when creating the Calendar Event, otherwise it will be generated by the service. Must be unique.

 |
| 

`calendar_id`

 | 

`class 'str'`

 | 

The Calendar this resource belongs to. Required for create requests.

 |
| 

`name`

 | 

`class 'str'`

 | 

The name of the Calendar Event displayed on the UI.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

The current effective state of the Calendar Event.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Calendar Event will start from (inclusive), in UTC. Required for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Calendar Event will end (exclusive) in UTC. Required for create requests. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_calendar_calendareventcreatefields "Copy link to heading")core\_api.v1.calendar.CalendarEventCreateFields

*type: Class*

apilint:disable:next STREAM\_EVENT\_HAS\_CORRECT\_FIELDS STREAM\_EVENT\_HAS\_CORRECT\_TOPIC

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The Calendar Event ID can be specified by the user when creating the Calendar Event, otherwise it will be generated by the service. Must be unique.

 |
| 

`calendar_id`

 | 

`typing.Optional[str]`

 | 

The Calendar this resource belongs to. Required for create requests.

 |
| 

`name`

 | 

`typing.Optional[str]`

 | 

The name of the Calendar Event displayed on the UI.

 |
| 

`is_active`

 | 

`typing.Optional[bool]`

 | 

The current effective state of the Calendar Event.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Calendar Event will start from (inclusive), in UTC. Required for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Calendar Event will end (exclusive) in UTC. Required for create requests. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_calendar_calendareventupdatefields "Copy link to heading")core\_api.v1.calendar.CalendarEventUpdateFields

*type: Class*

apilint:disable:next STREAM\_EVENT\_HAS\_CORRECT\_FIELDS STREAM\_EVENT\_HAS\_CORRECT\_TOPIC

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`typing.Optional[str]`

 | 

The name of the Calendar Event displayed on the UI.

 |
| 

`is_active`

 | 

`typing.Optional[bool]`

 | 

The current effective state of the Calendar Event.

 |

## [](#core_api_v1_calendar_calendarperiod "Copy link to heading")core\_api.v1.calendar.CalendarPeriod

*type: Class*

CalendarPeriod

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`expected_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

End of the period, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`actual_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

This timestamp will be updated when holding (pausing of given calendar) or rolling (advancing the period forward), for operational/accounting purposes. Formatted as an RFC3339 timestamp in UTC.

 |
| 

`period`

 | 

`class 'int'`

 | 

A monotonically increasing value derived from the date and start\_period\_epoch timestamp.

 |
| 

`expected_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Start of current period, unmodified by hold/roll changes. Formatted as an RFC3339 timestamp in UTC.

 |
| 

`actual_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Start of current period, affected by hold/roll of previous period. Formatted as an RFC3339 timestamp in UTC.

 |
| 

`calendar_id`

 | 

`class 'str'`

 | 

References the Calendar that the period belongs to.

 |
| 

`calendar_period_descriptor_id`

 | 

`class 'str'`

 | 

References the Calendar Period Descriptor that was used to generate the period.

 |
| 

`bookkeeping_label`

 | 

`class 'str'`

 | 

Bookkeeping label, in the ISO-8601 extended date format YYYY-MM-DD. This field is populated using the date from the most recently associated UpdateBookkeepingDate call.

 |

## [](#core_api_v1_calendar_calendarperioddescriptor "Copy link to heading")core\_api.v1.calendar.CalendarPeriodDescriptor

*type: Class*

CalendarPeriodDescriptor

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The Calendar Period Descriptor ID can be specified by the user when creating the Calendar Period Descriptor, otherwise it will be generated by the service. Must be unique.

 |
| 

`name`

 | 

`class 'str'`

 | 

Name of the period descriptor.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Calendar Period is measured from, in UTC. Defaults to the current time. Formatted as an RFC3339 timestamp.

 |
| 

`resolution`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._period_resolution.PeriodResolution]`

 | 

The Period Resolution determines the size of each period. This is fixed to 1 day. Read only.

 |

## [](#core_api_v1_calendar_calendarperioddescriptorcreatefields "Copy link to heading")core\_api.v1.calendar.CalendarPeriodDescriptorCreateFields

*type: Class*

CalendarPeriodDescriptorCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The Calendar Period Descriptor ID can be specified by the user when creating the Calendar Period Descriptor, otherwise it will be generated by the service. Must be unique.

 |
| 

`name`

 | 

`typing.Optional[str]`

 | 

Name of the period descriptor.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Calendar Period is measured from, in UTC. Defaults to the current time. Formatted as an RFC3339 timestamp.

 |
| 

`resolution`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._period_resolution_create_fields.PeriodResolutionCreateFields]`

 | 

The Period Resolution determines the size of each period. This is fixed to 1 day. Read only.

 |

## [](#core_api_v1_calendar_calendarupdatefields "Copy link to heading")core\_api.v1.calendar.CalendarUpdateFields

*type: Class*

CalendarUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`is_active`

 | 

`typing.Optional[bool]`

 | 

Defaults to false. Note that when is\_active is set to false, calendar periods (if a Calendar Period Descriptor has been assigned) will not be produced. When is\_active is later set to true, Calendar Period production will resume.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

Human-readable name of the calendar. Optional.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

Description of the calendar. Optional.

 |

## [](#core_api_v1_calendar_changecurrentcalendarperiodrequest "Copy link to heading")core\_api.v1.calendar.ChangeCurrentCalendarPeriodRequest

*type: Class*

ChangeCurrentCalendarPeriodRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

Unique ID that is used to identify the request.

 |
| 

`calendar_id`

 | 

`typing.Optional[str]`

 | 

ID of the calendar.

 |
| 

`action`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._change_current_calendar_period_request_action.ChangeCurrentCalendarPeriodRequestAction]`

 | 

Action to perform on the current calendar period.

 |
| 

`action_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When to Roll to/Until when to Hold. Cannot be in the past. Defaults to the current system timestamp in UTC. Must be formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_calendar_changecurrentcalendarperiodrequestaction "Copy link to heading")core\_api.v1.calendar.ChangeCurrentCalendarPeriodRequestAction

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`UNKNOWN`

 |  |
| 

`HOLD`

 |  |
| 

`ROLL`

 |  |

## [](#core_api_v1_calendar_createcalendareventrequest "Copy link to heading")core\_api.v1.calendar.CreateCalendarEventRequest

*type: Class*

A request to create a Calendar Event.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID that is used to identify the request.

 |
| 

`calendar_event`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._calendar_event_create_fields.CalendarEventCreateFields]`

 | 

The new Calendar Event resource that is to be created.

 |

## [](#core_api_v1_calendar_createcalendarperioddescriptorrequest "Copy link to heading")core\_api.v1.calendar.CreateCalendarPeriodDescriptorRequest

*type: Class*

CreateCalendarPeriodDescriptorRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

The ID of the request used for idempotency.

 |
| 

`calendar_period_descriptor`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._calendar_period_descriptor_create_fields.CalendarPeriodDescriptorCreateFields]`

 | 

The Calendar Period Descriptor.

 |

## [](#core_api_v1_calendar_createcalendarrequest "Copy link to heading")core\_api.v1.calendar.CreateCalendarRequest

*type: Class*

A request to create a new Calendar

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID that is used to identify the request.

 |
| 

`calendar`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._calendar_create_fields.CalendarCreateFields]`

 | 

The new Calendar resource that is to be created.

 |

## [](#core_api_v1_calendar_listcalendareventsresponse "Copy link to heading")core\_api.v1.calendar.ListCalendarEventsResponse

*type: Class*

ListCalendarEventsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`calendar_events`

 | 

`typing.List[vc_api.core_api.v1.calendar._calendar_event.CalendarEvent]`

 |  |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_calendar_listcalendarsrequestorderby "Copy link to heading")core\_api.v1.calendar.ListCalendarsRequestOrderBy

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ORDER_BY_CREATE_TIMESTAMP_ASC`

 |  |
| 

`ORDER_BY_CREATE_TIMESTAMP_DESC`

 |  |

## [](#core_api_v1_calendar_listcalendarsresponse "Copy link to heading")core\_api.v1.calendar.ListCalendarsResponse

*type: Class*

ListCalendarsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`calendars`

 | 

`typing.List[vc_api.core_api.v1.calendar._calendar.Calendar]`

 | 

Contains the list of requested Calendars.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_calendar_namepatternmatchmatchtype "Copy link to heading")core\_api.v1.calendar.NamePatternMatchMatchType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`MATCH_TYPE_UNKNOWN`

 |  |
| 

`MATCH_TYPE_TEXT_REGEX`

 |  |
| 

`MATCH_TYPE_TEXT_EXACT_CASE_SENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_EXACT_CASE_INSENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_SUBSTRING_CASE_SENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_SUBSTRING_CASE_INSENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_PREFIX_CASE_SENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_PREFIX_CASE_INSENSITIVE`

 |  |

## [](#core_api_v1_calendar_periodresolution "Copy link to heading")core\_api.v1.calendar.PeriodResolution

*type: Class*

PeriodResolution

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`unit`

 | 

`enum 'TimeUnit'`

 | 

Defines the granularity of a time period.

 |
| 

`value`

 | 

`class 'int'`

 | 

Defines the quantity of the Unit specified in the Unit field.

 |

## [](#core_api_v1_calendar_periodresolutioncreatefields "Copy link to heading")core\_api.v1.calendar.PeriodResolutionCreateFields

*type: Class*

PeriodResolutionCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`unit`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._time_unit.TimeUnit]`

 | 

Defines the granularity of a time period.

 |
| 

`value`

 | 

`typing.Optional[int]`

 | 

Defines the quantity of the Unit specified in the Unit field.

 |

## [](#core_api_v1_calendar_timeunit "Copy link to heading")core\_api.v1.calendar.TimeUnit

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`TIME_UNIT_UNKNOWN`

 |  |
| 

`TIME_UNIT_HOURS`

 |  |
| 

`TIME_UNIT_DAYS`

 |  |
| 

`TIME_UNIT_WEEKS`

 |  |
| 

`TIME_UNIT_MONTHS`

 |  |
| 

`TIME_UNIT_YEARS`

 |  |

## [](#core_api_v1_calendar_updatebookkeepingdaterequest "Copy link to heading")core\_api.v1.calendar.UpdateBookkeepingDateRequest

*type: Class*

UpdateBookkeepingDateRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

The ID of the request, for idempotency.

 |
| 

`id`

 | 

`typing.Optional[str]`

 | 

The ID of the Calendar to be updated.

 |
| 

`bookkeeping_date`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._bookkeeping_date_update_fields.BookkeepingDateUpdateFields]`

 | 

The data to be updated to.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

A mask of fields to be updated. This should only be "date"

 |

## [](#core_api_v1_calendar_updatecalendareventrequest "Copy link to heading")core\_api.v1.calendar.UpdateCalendarEventRequest

*type: Class*

UpdateCalendarEventRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

The ID of the request used for idempotency.

 |
| 

`calendar_event_id`

 | 

`typing.Optional[str]`

 | 

The ID of the calendar event that is to be updated.

 |
| 

`calendar_event`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._calendar_event_update_fields.CalendarEventUpdateFields]`

 | 

The calendar event fields that are to be updated.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

A mask of calendar event fields that are to be updated.

 |

## [](#core_api_v1_calendar_updatecalendarrequest "Copy link to heading")core\_api.v1.calendar.UpdateCalendarRequest

*type: Class*

UpdateCalendarRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

The ID of the request used for idempotency.

 |
| 

`calendar_id`

 | 

`typing.Optional[str]`

 | 

The ID of the calendar that is to be updated.

 |
| 

`calendar`

 | 

`typing.Optional[vc_api.core_api.v1.calendar._calendar_update_fields.CalendarUpdateFields]`

 | 

The calendar fields that are to be updated.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

A mask of calendar fields that are to be updated.

 |

## [](#core_api_v1_common_overriderestrictions "Copy link to heading")core\_api.v1.common.OverrideRestrictions

*type: Class*

OverrideRestrictions lets a caller override some or all restriction checks on a call by setting the relevant field or fields.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`all`

 | 

`class 'bool'`

 | 

The caller can override all restriction checks for a call by setting this field to true.

 |
| 

`restriction_set_ids`

 | 

`typing.List[str]`

 | 

The caller can override restrictions based on restriction sets by passing the restriction set IDs here.

 |
| 

`restriction_set_definition_ids`

 | 

`typing.List[str]`

 | 

The caller can override restrictions based on restriction set definitions by passing the restriction set definition IDs here.

 |
| 

`restriction_set_definition_version_ids`

 | 

`typing.List[str]`

 | 

The caller can override restrictions based on restriction set definition versions by passing the restriction set definition version IDs here.

 |

## [](#core_api_v1_common_overrides "Copy link to heading")core\_api.v1.common.Overrides

*type: Class*

Overrides are used to override certain checks for a request.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`override_restrictions`

 | 

`typing.Optional[vc_api.core_api.v1.common._override_restrictions.OverrideRestrictions]`

 | 

Restrictions to override.

 |

## [](#core_api_v1_contract_modules_batchgetcontractmoduleversionsrequestincludefield "Copy link to heading")core\_api.v1.contract\_modules.BatchGetContractModuleVersionsRequestIncludeField

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INCLUDE_FIELD_CODE`

 |  |
| 

`INCLUDE_FIELD_DETAILS_API_VERSION`

 |  |
| 

`INCLUDE_FIELD_DETAILS_CALLABLE_DETAILS`

 |  |

## [](#core_api_v1_contract_modules_batchgetcontractmoduleversionsresponse "Copy link to heading")core\_api.v1.contract\_modules.BatchGetContractModuleVersionsResponse

*type: Class*

BatchGetContractModuleVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`contract_module_versions`

 | 

`typing.Dict[str, vc_api.core_api.v1.contract_modules._contract_module_version.ContractModuleVersion]`

 | 

Map of ID to Contract Module Version.

 |

## [](#core_api_v1_contract_modules_batchgetcontractmodulesresponse "Copy link to heading")core\_api.v1.contract\_modules.BatchGetContractModulesResponse

*type: Class*

BatchGetContractModulesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`contract_modules`

 | 

`typing.Dict[str, vc_api.core_api.v1.contract_modules._contract_module.ContractModule]`

 | 

Map of ID to Contract Module.

 |

## [](#core_api_v1_contract_modules_batchgetsmartcontractmoduleversionslinksresponse "Copy link to heading")core\_api.v1.contract\_modules.BatchGetSmartContractModuleVersionsLinksResponse

*type: Class*

BatchGetSmartContractModuleVersionsLinksResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`smart_contract_module_versions_links`

 | 

`typing.Dict[str, vc_api.core_api.v1.contract_modules._smart_contract_module_versions_link.SmartContractModuleVersionsLink]`

 | 

Map of ID to Smart Contract Module Versions Link.

 |

## [](#core_api_v1_contract_modules_contractmodule "Copy link to heading")core\_api.v1.contract\_modules.ContractModule

*type: Class*

ContractModule

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The human-readable name. Required for create requests.

 |
| 

`description`

 | 

`class 'str'`

 | 

The human-readable description.

 |

## [](#core_api_v1_contract_modules_contractmodulecodedetails "Copy link to heading")core\_api.v1.contract\_modules.ContractModuleCodeDetails

*type: Class*

ContractModuleCodeDetails

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`api_version`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

The Contracts language library version of the Contract Module.

 |
| 

`shared_function_details`

 | 

`typing.Optional[vc_api.core_api.v1.contract_modules._shared_function_details.SharedFunctionDetails]`

 | 

The shared function details of the Contract Module.

 |

## [](#core_api_v1_contract_modules_contractmodulecreatefields "Copy link to heading")core\_api.v1.contract\_modules.ContractModuleCreateFields

*type: Class*

ContractModuleCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The human-readable name. Required for create requests.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The human-readable description.

 |

## [](#core_api_v1_contract_modules_contractmoduleversion "Copy link to heading")core\_api.v1.contract\_modules.ContractModuleVersion

*type: Class*

ContractModuleVersion

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`contract_module_id`

 | 

`class 'str'`

 | 

The ID of the Contract Module of which this is a version.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The human-readable name. Required for create requests.

 |
| 

`description`

 | 

`class 'str'`

 | 

The human-readable description.

 |
| 

`code`

 | 

`class 'str'`

 | 

The source code.

 |
| 

`contract_module_code_details`

 | 

`typing.Optional[vc_api.core_api.v1.contract_modules._contract_module_code_details.ContractModuleCodeDetails]`

 | 

Additional information about the Contract Module derived from the code.

 |

## [](#core_api_v1_contract_modules_contractmoduleversioncreatefields "Copy link to heading")core\_api.v1.contract\_modules.ContractModuleVersionCreateFields

*type: Class*

ContractModuleVersionCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`contract_module_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Contract Module of which this is a version.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The human-readable name. Required for create requests.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The human-readable description.

 |
| 

`code`

 | 

`typing.Optional[str]`

 | 

The source code.

 |

## [](#core_api_v1_contract_modules_contractmoduleversionlistcontractmoduleversionsresponse "Copy link to heading")core\_api.v1.contract\_modules.ContractModuleVersionListContractModuleVersionsResponse

*type: Class*

ContractModuleVersionListContractModuleVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`contract_module_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Contract Module of which this is a version.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The human-readable name. Required for create requests.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The human-readable description.

 |

## [](#core_api_v1_contract_modules_createcontractmodulerequest "Copy link to heading")core\_api.v1.contract\_modules.CreateContractModuleRequest

*type: Class*

CreateContractModuleRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`contract_module`

 | 

`typing.Optional[vc_api.core_api.v1.contract_modules._contract_module_create_fields.ContractModuleCreateFields]`

 | 

The Contract Module to be created.

 |

## [](#core_api_v1_contract_modules_createcontractmoduleversionrequest "Copy link to heading")core\_api.v1.contract\_modules.CreateContractModuleVersionRequest

*type: Class*

CreateContractModuleVersionRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`contract_module_version`

 | 

`typing.Optional[vc_api.core_api.v1.contract_modules._contract_module_version_create_fields.ContractModuleVersionCreateFields]`

 | 

The Contract Module Version to be created.

 |

## [](#core_api_v1_contract_modules_createsmartcontractmoduleversionslinkrequest "Copy link to heading")core\_api.v1.contract\_modules.CreateSmartContractModuleVersionsLinkRequest

*type: Class*

CreateSmartContractModuleVersionsLinkRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`smart_contract_module_versions_link`

 | 

`typing.Optional[vc_api.core_api.v1.contract_modules._smart_contract_module_versions_link_create_fields.SmartContractModuleVersionsLinkCreateFields]`

 | 

The Smart Contract Module Versions Link to be created.

 |

## [](#core_api_v1_contract_modules_listcontractmoduleversionsresponse "Copy link to heading")core\_api.v1.contract\_modules.ListContractModuleVersionsResponse

*type: Class*

ListContractModuleVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`contract_module_versions`

 | 

`typing.List[vc_api.core_api.v1.contract_modules._contract_module_version_list_contract_module_versions_response.ContractModuleVersionListContractModuleVersionsResponse]`

 | 

A list of Contract Module Versions, ordered by descending creation timestamp.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_contract_modules_listcontractmodulesresponse "Copy link to heading")core\_api.v1.contract\_modules.ListContractModulesResponse

*type: Class*

ListContractModulesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`contract_modules`

 | 

`typing.List[vc_api.core_api.v1.contract_modules._contract_module.ContractModule]`

 | 

A list of Contract Modules, ordered by descending creation timestamp.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_contract_modules_listsmartcontractmoduleversionslinksresponse "Copy link to heading")core\_api.v1.contract\_modules.ListSmartContractModuleVersionsLinksResponse

*type: Class*

ListSmartContractModuleVersionsLinksResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`smart_contract_module_versions_links`

 | 

`typing.List[vc_api.core_api.v1.contract_modules._smart_contract_module_versions_link.SmartContractModuleVersionsLink]`

 | 

A list of Smart Contract Module Versions Links, ordered by descending creation timestamp.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_contract_modules_sharedfunction "Copy link to heading")core\_api.v1.contract\_modules.SharedFunction

*type: Class*

SharedFunction

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`class 'str'`

 | 

The name of the Contract Module function.

 |
| 

`args`

 | 

`typing.List[vc_api.core_api.v1.contract_modules._shared_function_arg.SharedFunctionArg]`

 | 

The arguments of the Contract Module function.

 |
| 

`return_type`

 | 

`class 'str'`

 | 

The return type of the Contract Module function.

 |

## [](#core_api_v1_contract_modules_sharedfunctionarg "Copy link to heading")core\_api.v1.contract\_modules.SharedFunctionArg

*type: Class*

SharedFunctionArg

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`class 'str'`

 | 

The name of the Contract Module function argument.

 |
| 

`type`

 | 

`class 'str'`

 | 

The type of the Contract Module function argument.

 |

## [](#core_api_v1_contract_modules_sharedfunctiondetails "Copy link to heading")core\_api.v1.contract\_modules.SharedFunctionDetails

*type: Class*

SharedFunctionDetails

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`shared_functions`

 | 

`typing.List[vc_api.core_api.v1.contract_modules._shared_function.SharedFunction]`

 | 

The shared functions that are implemented in the Contract Module.

 |

## [](#core_api_v1_contract_modules_smartcontractmoduleversionslink "Copy link to heading")core\_api.v1.contract\_modules.SmartContractModuleVersionsLink

*type: Class*

SmartContractModuleVersionsLink

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`smart_contract_version_id`

 | 

`class 'str'`

 | 

The ID of the Smart Contract Version this link relates to. Required for create requests.

 |
| 

`alias_to_contract_module_version_id`

 | 

`typing.Dict[str, str]`

 | 

Map of alias to ContractModuleVersionID containing all Contract Module Versions that are linked to the Smart Contract Version ID. The alias is defined by the Smart Contract code. A link must provide Contract Module Version IDs for all aliases defined in the Smart Contract. Required for create requests.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_contract_modules_smartcontractmoduleversionslinkcreatefields "Copy link to heading")core\_api.v1.contract\_modules.SmartContractModuleVersionsLinkCreateFields

*type: Class*

SmartContractModuleVersionsLinkCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`smart_contract_version_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Smart Contract Version this link relates to. Required for create requests.

 |
| 

`alias_to_contract_module_version_id`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Map of alias to ContractModuleVersionID containing all Contract Module Versions that are linked to the Smart Contract Version ID. The alias is defined by the Smart Contract code. A link must provide Contract Module Version IDs for all aliases defined in the Smart Contract. Required for create requests.

 |

## [](#core_api_v1_customers_batchgetcustomersresponse "Copy link to heading")core\_api.v1.customers.BatchGetCustomersResponse

*type: Class*

BatchGetCustomersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`customers`

 | 

`typing.Dict[str, vc_api.core_api.v1.customers._customer.Customer]`

 | 

Maps customer ID to customer.

 |

## [](#core_api_v1_customers_createcustomeraddressrequest "Copy link to heading")core\_api.v1.customers.CreateCustomerAddressRequest

*type: Class*

CreateCustomerAddressRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`customer_address`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_address_create_fields.CustomerAddressCreateFields]`

 | 

The address to be created. Required.

 |

## [](#core_api_v1_customers_createcustomerrequest "Copy link to heading")core\_api.v1.customers.CreateCustomerRequest

*type: Class*

CreateCustomerRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`customer`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_create_fields.CustomerCreateFields]`

 | 

The customer to be created. Required.

 |

## [](#core_api_v1_customers_customer "Copy link to heading")core\_api.v1.customers.Customer

*type: Class*

Customer

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The unique ID of the customer. Defaults to a UUID if not provided on creation.

 |
| 

`status`

 | 

`enum 'CustomerStatus'`

 | 

The status of the customer. Optional for creation; can be PROSPECT or ACTIVE. Defaults to ACTIVE for creation.

 |
| 

`identifiers`

 | 

`typing.List[vc_api.core_api.v1.customers._identifier.Identifier]`

 | 

The registered identifiers of the customer. A customer could have multiple identifiers associated with them, for example, a phone number, email address or username.

 |
| 

`customer_details`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_details.CustomerDetails]`

 | 

Current details. Optional for create requests. This field will be replaced by a more general details object in a future release.

 |
| 

`additional_details`

 | 

`typing.Dict[str, str]`

 | 

Key value map of additional, non-structured customer details.

The details must not include: - Any image data, including any KYC collateral such as passport, licence or other images. These must be stored in a separate repository outside of Vault. - Any data that is classified as PII data. The details cannot be utilised by Smart Contracts to drive any type of product behaviour.

Max size: 1MB (but it is strongly recommended to keep below this size).

 |

## [](#core_api_v1_customers_customeraccessibility "Copy link to heading")core\_api.v1.customers.CustomerAccessibility

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_ACCESSIBILITY_UNKNOWN`

 |  |
| 

`CUSTOMER_ACCESSIBILITY_AUDIO`

 |  |
| 

`CUSTOMER_ACCESSIBILITY_LARGE_PRINT`

 |  |
| 

`CUSTOMER_ACCESSIBILITY_BRAILLE`

 |  |
| 

`CUSTOMER_ACCESSIBILITY_DEAF`

 |  |

## [](#core_api_v1_customers_customeraddress "Copy link to heading")core\_api.v1.customers.CustomerAddress

*type: Class*

An address. This address message will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The address ID. Output only.

 |
| 

`house_name`

 | 

`class 'str'`

 | 

The house name. Optional for create requests.

 |
| 

`street_number`

 | 

`class 'str'`

 | 

The street number. Optional for create requests.

 |
| 

`street`

 | 

`class 'str'`

 | 

The street name. Optional for create requests.

 |
| 

`local_municipality`

 | 

`class 'str'`

 | 

The local municipality. Optional for create requests.

 |
| 

`city`

 | 

`class 'str'`

 | 

The city. Optional for create requests.

 |
| 

`postal_area`

 | 

`class 'str'`

 | 

The postcode or zip code. Optional for create requests.

 |
| 

`governing_district`

 | 

`class 'str'`

 | 

The governing district. Optional for create requests.

 |
| 

`country`

 | 

`class 'str'`

 | 

The country. Optional for create requests.

 |
| 

`address_type`

 | 

`enum 'CustomerAddressType'`

 | 

The address type. Optional for create requests.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address was valid from, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address changed, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`customer_id`

 | 

`class 'str'`

 | 

The unique ID of the customer linked to the address.

 |

## [](#core_api_v1_customers_customeraddresscreatefields "Copy link to heading")core\_api.v1.customers.CustomerAddressCreateFields

*type: Class*

An address. This address message will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`house_name`

 | 

`typing.Optional[str]`

 | 

The house name. Optional for create requests.

 |
| 

`street_number`

 | 

`typing.Optional[str]`

 | 

The street number. Optional for create requests.

 |
| 

`street`

 | 

`typing.Optional[str]`

 | 

The street name. Optional for create requests.

 |
| 

`local_municipality`

 | 

`typing.Optional[str]`

 | 

The local municipality. Optional for create requests.

 |
| 

`city`

 | 

`typing.Optional[str]`

 | 

The city. Optional for create requests.

 |
| 

`postal_area`

 | 

`typing.Optional[str]`

 | 

The postcode or zip code. Optional for create requests.

 |
| 

`governing_district`

 | 

`typing.Optional[str]`

 | 

The governing district. Optional for create requests.

 |
| 

`country`

 | 

`typing.Optional[str]`

 | 

The country. Optional for create requests.

 |
| 

`address_type`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_address_type.CustomerAddressType]`

 | 

The address type. Optional for create requests.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address was valid from, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address changed, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

The unique ID of the customer linked to the address.

 |

## [](#core_api_v1_customers_customeraddresstype "Copy link to heading")core\_api.v1.customers.CustomerAddressType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_ADDRESS_TYPE_UNKNOWN`

 |  |
| 

`CUSTOMER_ADDRESS_TYPE_PO_BOX`

 |  |
| 

`CUSTOMER_ADDRESS_TYPE_HOME`

 |  |
| 

`CUSTOMER_ADDRESS_TYPE_OFFICE`

 |  |
| 

`CUSTOMER_ADDRESS_TYPE_OTHER`

 |  |
| 

`CUSTOMER_ADDRESS_TYPE_CORRESPONDENCE`

 |  |

## [](#core_api_v1_customers_customeraddressupdatefields "Copy link to heading")core\_api.v1.customers.CustomerAddressUpdateFields

*type: Class*

An address. This address message will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`house_name`

 | 

`typing.Optional[str]`

 | 

The house name. Optional for create requests.

 |
| 

`street_number`

 | 

`typing.Optional[str]`

 | 

The street number. Optional for create requests.

 |
| 

`street`

 | 

`typing.Optional[str]`

 | 

The street name. Optional for create requests.

 |
| 

`local_municipality`

 | 

`typing.Optional[str]`

 | 

The local municipality. Optional for create requests.

 |
| 

`city`

 | 

`typing.Optional[str]`

 | 

The city. Optional for create requests.

 |
| 

`postal_area`

 | 

`typing.Optional[str]`

 | 

The postcode or zip code. Optional for create requests.

 |
| 

`governing_district`

 | 

`typing.Optional[str]`

 | 

The governing district. Optional for create requests.

 |
| 

`country`

 | 

`typing.Optional[str]`

 | 

The country. Optional for create requests.

 |
| 

`address_type`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_address_type.CustomerAddressType]`

 | 

The address type. Optional for create requests.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address was valid from, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The date the address changed, in UTC. Optional for create requests. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_customers_customercontactmethod "Copy link to heading")core\_api.v1.customers.CustomerContactMethod

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_CONTACT_METHOD_UNKNOWN`

 |  |
| 

`CUSTOMER_CONTACT_METHOD_NONE`

 |  |
| 

`CUSTOMER_CONTACT_METHOD_EMAIL`

 |  |
| 

`CUSTOMER_CONTACT_METHOD_SMS`

 |  |
| 

`CUSTOMER_CONTACT_METHOD_NOTIFICATION`

 |  |

## [](#core_api_v1_customers_customercreatefields "Copy link to heading")core\_api.v1.customers.CustomerCreateFields

*type: Class*

CustomerCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The unique ID of the customer. Defaults to a UUID if not provided on creation.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_status.CustomerStatus]`

 | 

The status of the customer. Optional for creation; can be PROSPECT or ACTIVE. Defaults to ACTIVE for creation.

 |
| 

`identifiers`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.customers._identifier_create_fields.IdentifierCreateFields]]`

 | 

The registered identifiers of the customer. A customer could have multiple identifiers associated with them, for example, a phone number, email address or username.

 |
| 

`customer_details`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_details_create_fields.CustomerDetailsCreateFields]`

 | 

Current details. Optional for create requests. This field will be replaced by a more general details object in a future release.

 |
| 

`additional_details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Key value map of additional, non-structured customer details.

The details must not include: - Any image data, including any KYC collateral such as passport, licence or other images. These must be stored in a separate repository outside of Vault. - Any data that is classified as PII data. The details cannot be utilised by Smart Contracts to drive any type of product behaviour.

Max size: 1MB (but it is strongly recommended to keep below this size).

 |

## [](#core_api_v1_customers_customerdetails "Copy link to heading")core\_api.v1.customers.CustomerDetails

*type: Class*

Customer details. This details object will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`title`

 | 

`enum 'CustomerTitle'`

 | 

The customer’s title. Optional for create requests.

 |
| 

`first_name`

 | 

`class 'str'`

 | 

The customer’s first name. Optional for create requests.

 |
| 

`middle_name`

 | 

`class 'str'`

 | 

The customer’s middle name. Optional for create requests.

 |
| 

`last_name`

 | 

`class 'str'`

 | 

The customer’s last name. Optional for create requests.

 |
| 

`dob`

 | 

`class 'str'`

 | 

The customer’s date of birth. Optional for create requests.

 |
| 

`gender`

 | 

`enum 'CustomerGender'`

 | 

The customer’s gender. Optional for create requests.

 |
| 

`nationality`

 | 

`class 'str'`

 | 

The customer’s nationality. Optional for create requests.

 |
| 

`email_address`

 | 

`class 'str'`

 | 

The customer’s email address. Optional for create requests.

 |
| 

`mobile_phone_number`

 | 

`class 'str'`

 | 

The customer’s mobile phone number. Optional for create requests.

 |
| 

`home_phone_number`

 | 

`class 'str'`

 | 

The customer’s home phone number. Optional for create requests.

 |
| 

`business_phone_number`

 | 

`class 'str'`

 | 

The customer’s business phone number. Optional for create requests.

 |
| 

`contact_method`

 | 

`enum 'CustomerContactMethod'`

 | 

The customer’s preferred method of contact. Optional for create requests.

 |
| 

`country_of_residence`

 | 

`class 'str'`

 | 

The customer’s country of residence. Optional for create requests.

 |
| 

`country_of_taxation`

 | 

`class 'str'`

 | 

The customer’s country of taxation. Optional for create requests.

 |
| 

`accessibility`

 | 

`enum 'CustomerAccessibility'`

 | 

The customer’s accessibility requirements. Optional for create requests.

 |
| 

`external_customer_id`

 | 

`class 'str'`

 | 

An external customer ID. May be used to associate a customer in Vault with an existing customer ID. Vault does not use this for any other purpose. Optional for create requests.

 |

## [](#core_api_v1_customers_customerdetailscreatefields "Copy link to heading")core\_api.v1.customers.CustomerDetailsCreateFields

*type: Class*

Customer details. This details object will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`title`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_title.CustomerTitle]`

 | 

The customer’s title. Optional for create requests.

 |
| 

`first_name`

 | 

`typing.Optional[str]`

 | 

The customer’s first name. Optional for create requests.

 |
| 

`middle_name`

 | 

`typing.Optional[str]`

 | 

The customer’s middle name. Optional for create requests.

 |
| 

`last_name`

 | 

`typing.Optional[str]`

 | 

The customer’s last name. Optional for create requests.

 |
| 

`dob`

 | 

`typing.Optional[str]`

 | 

The customer’s date of birth. Optional for create requests.

 |
| 

`gender`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_gender.CustomerGender]`

 | 

The customer’s gender. Optional for create requests.

 |
| 

`nationality`

 | 

`typing.Optional[str]`

 | 

The customer’s nationality. Optional for create requests.

 |
| 

`email_address`

 | 

`typing.Optional[str]`

 | 

The customer’s email address. Optional for create requests.

 |
| 

`mobile_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s mobile phone number. Optional for create requests.

 |
| 

`home_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s home phone number. Optional for create requests.

 |
| 

`business_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s business phone number. Optional for create requests.

 |
| 

`contact_method`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_contact_method.CustomerContactMethod]`

 | 

The customer’s preferred method of contact. Optional for create requests.

 |
| 

`country_of_residence`

 | 

`typing.Optional[str]`

 | 

The customer’s country of residence. Optional for create requests.

 |
| 

`country_of_taxation`

 | 

`typing.Optional[str]`

 | 

The customer’s country of taxation. Optional for create requests.

 |
| 

`accessibility`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_accessibility.CustomerAccessibility]`

 | 

The customer’s accessibility requirements. Optional for create requests.

 |
| 

`external_customer_id`

 | 

`typing.Optional[str]`

 | 

An external customer ID. May be used to associate a customer in Vault with an existing customer ID. Vault does not use this for any other purpose. Optional for create requests.

 |

## [](#core_api_v1_customers_customerdetailsupdatefields "Copy link to heading")core\_api.v1.customers.CustomerDetailsUpdateFields

*type: Class*

Customer details. This details object will be replaced by a more general object in the future.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`title`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_title.CustomerTitle]`

 | 

The customer’s title. Optional for create requests.

 |
| 

`first_name`

 | 

`typing.Optional[str]`

 | 

The customer’s first name. Optional for create requests.

 |
| 

`middle_name`

 | 

`typing.Optional[str]`

 | 

The customer’s middle name. Optional for create requests.

 |
| 

`last_name`

 | 

`typing.Optional[str]`

 | 

The customer’s last name. Optional for create requests.

 |
| 

`dob`

 | 

`typing.Optional[str]`

 | 

The customer’s date of birth. Optional for create requests.

 |
| 

`gender`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_gender.CustomerGender]`

 | 

The customer’s gender. Optional for create requests.

 |
| 

`nationality`

 | 

`typing.Optional[str]`

 | 

The customer’s nationality. Optional for create requests.

 |
| 

`email_address`

 | 

`typing.Optional[str]`

 | 

The customer’s email address. Optional for create requests.

 |
| 

`mobile_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s mobile phone number. Optional for create requests.

 |
| 

`home_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s home phone number. Optional for create requests.

 |
| 

`business_phone_number`

 | 

`typing.Optional[str]`

 | 

The customer’s business phone number. Optional for create requests.

 |
| 

`contact_method`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_contact_method.CustomerContactMethod]`

 | 

The customer’s preferred method of contact. Optional for create requests.

 |
| 

`country_of_residence`

 | 

`typing.Optional[str]`

 | 

The customer’s country of residence. Optional for create requests.

 |
| 

`country_of_taxation`

 | 

`typing.Optional[str]`

 | 

The customer’s country of taxation. Optional for create requests.

 |
| 

`accessibility`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_accessibility.CustomerAccessibility]`

 | 

The customer’s accessibility requirements. Optional for create requests.

 |
| 

`external_customer_id`

 | 

`typing.Optional[str]`

 | 

An external customer ID. May be used to associate a customer in Vault with an existing customer ID. Vault does not use this for any other purpose. Optional for create requests.

 |

## [](#core_api_v1_customers_customergender "Copy link to heading")core\_api.v1.customers.CustomerGender

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_GENDER_UNKNOWN`

 |  |
| 

`CUSTOMER_GENDER_FEMALE`

 |  |
| 

`CUSTOMER_GENDER_MALE`

 |  |

## [](#core_api_v1_customers_customerstatus "Copy link to heading")core\_api.v1.customers.CustomerStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_STATUS_UNKNOWN`

 |  |
| 

`CUSTOMER_STATUS_ACTIVE`

 |  |
| 

`CUSTOMER_STATUS_FROZEN`

 |  |
| 

`CUSTOMER_STATUS_DECEASED`

 |  |
| 

`CUSTOMER_STATUS_PROSPECT`

 |  |

## [](#core_api_v1_customers_customertitle "Copy link to heading")core\_api.v1.customers.CustomerTitle

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CUSTOMER_TITLE_UNKNOWN`

 |  |
| 

`CUSTOMER_TITLE_MISS`

 |  |
| 

`CUSTOMER_TITLE_MR`

 |  |
| 

`CUSTOMER_TITLE_MRS`

 |  |
| 

`CUSTOMER_TITLE_MS`

 |  |

## [](#core_api_v1_customers_customerupdatefields "Copy link to heading")core\_api.v1.customers.CustomerUpdateFields

*type: Class*

CustomerUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_status.CustomerStatus]`

 | 

The status of the customer. Optional for creation; can be PROSPECT or ACTIVE. Defaults to ACTIVE for creation.

 |
| 

`identifiers`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.customers._identifier_update_fields.IdentifierUpdateFields]]`

 | 

The registered identifiers of the customer. A customer could have multiple identifiers associated with them, for example, a phone number, email address or username.

 |
| 

`customer_details`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_details_update_fields.CustomerDetailsUpdateFields]`

 | 

Current details. Optional for create requests. This field will be replaced by a more general details object in a future release.

 |

## [](#core_api_v1_customers_externalcustomeridpatternmatchmatchtype "Copy link to heading")core\_api.v1.customers.ExternalCustomerIDPatternMatchMatchType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`MATCH_TYPE_UNKNOWN`

 |  |
| 

`MATCH_TYPE_TEXT_EXACT_CASE_SENSITIVE`

 |  |
| 

`MATCH_TYPE_TEXT_EXACT_CASE_INSENSITIVE`

 |  |

## [](#core_api_v1_customers_identifier "Copy link to heading")core\_api.v1.customers.Identifier

*type: Class*

Identifiers associated with a user.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identifier_type`

 | 

`enum 'IdentifierType'`

 | 

The type of identifier.

 |
| 

`identifier`

 | 

`class 'str'`

 | 

The string value of the identifier. Must be unique.

 |

## [](#core_api_v1_customers_identifiercreatefields "Copy link to heading")core\_api.v1.customers.IdentifierCreateFields

*type: Class*

Identifiers associated with a user.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identifier_type`

 | 

`typing.Optional[vc_api.core_api.v1.customers._identifier_type.IdentifierType]`

 | 

The type of identifier.

 |
| 

`identifier`

 | 

`typing.Optional[str]`

 | 

The string value of the identifier. Must be unique.

 |

## [](#core_api_v1_customers_identifiertype "Copy link to heading")core\_api.v1.customers.IdentifierType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`IDENTIFIER_TYPE_UNKNOWN`

 |  |
| 

`IDENTIFIER_TYPE_USERNAME`

 |  |
| 

`IDENTIFIER_TYPE_EMAIL`

 |  |
| 

`IDENTIFIER_TYPE_PHONE`

 |  |

## [](#core_api_v1_customers_identifierupdatefields "Copy link to heading")core\_api.v1.customers.IdentifierUpdateFields

*type: Class*

Identifiers associated with a user.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identifier_type`

 | 

`typing.Optional[vc_api.core_api.v1.customers._identifier_type.IdentifierType]`

 | 

The type of identifier.

 |
| 

`identifier`

 | 

`typing.Optional[str]`

 | 

The string value of the identifier. Must be unique.

 |

## [](#core_api_v1_customers_listcustomeraddressesresponse "Copy link to heading")core\_api.v1.customers.ListCustomerAddressesResponse

*type: Class*

ListCustomerAddressesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer_addresses`

 | 

`typing.List[vc_api.core_api.v1.customers._customer_address.CustomerAddress]`

 | 

A list of customer addresses, ordered by descending creation time.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |

## [](#core_api_v1_customers_listcustomersrequest "Copy link to heading")core\_api.v1.customers.ListCustomersRequest

*type: Class*

ListCustomersRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`statuses`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.customers._customer_status.CustomerStatus]]`

 | 

List of inclusive OR customer status filters. Optional.

 |
| 

`email_identifiers`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of inclusive OR email identifier filters. Must be URL encoded. Optional.

 |
| 

`phone_identifiers`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of inclusive OR phone number identifier filters. Must be URL encoded. Optional.

 |
| 

`username_identifiers`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of inclusive OR username identifier filters. Must be URL encoded. Optional.

 |
| 

`external_customer_id_pattern_match`

 | 

`typing.Optional[vc_api.core_api.v1.customers._list_customers_request_external_customer_id_pattern_match.ListCustomersRequestExternalCustomerIDPatternMatch]`

 | 

Pattern matching filter for the customer\_details.external\_customer\_id field.

 |
| 

`page_size`

 | 

`typing.Optional[int]`

 | 

Number of customers to be listed.

 |
| 

`page_token`

 | 

`typing.Optional[str]`

 | 

Token of the page the results are to retrieved from. If empty, returns the first page of results. Optional.

 |

## [](#core_api_v1_customers_listcustomersrequestexternalcustomeridpatternmatch "Copy link to heading")core\_api.v1.customers.ListCustomersRequestExternalCustomerIDPatternMatch

*type: Class*

ListCustomersRequestExternalCustomerIDPatternMatch

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`pattern`

 | 

`class 'str'`

 | 

The query string to pattern match against.

 |
| 

`match_type`

 | 

`enum 'ExternalCustomerIDPatternMatchMatchType'`

 | 

The type of pattern matching to apply.

 |

## [](#core_api_v1_customers_listcustomersresponse "Copy link to heading")core\_api.v1.customers.ListCustomersResponse

*type: Class*

ListCustomersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`customers`

 | 

`typing.List[vc_api.core_api.v1.customers._customer.Customer]`

 | 

A list of customers. Customers are ordered by ascending ID.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, the response contains the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, the response contains the first page of results.

 |

## [](#core_api_v1_customers_updatecustomeradditionaldetailsrequest "Copy link to heading")core\_api.v1.customers.UpdateCustomerAdditionalDetailsRequest

*type: Class*

UpdateCustomerAdditionalDetailsRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

The unique ID of the customer.

 |
| 

`items_to_add`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Items that are to be added to the customer’s additional details. Required if there are no items to remove.

 |
| 

`items_to_remove`

 | 

`typing.Optional[typing.List[str]]`

 | 

Items that are to be removed from the customer’s additional details. Required if there are no items to add.

 |

## [](#core_api_v1_customers_updatecustomeraddressrequest "Copy link to heading")core\_api.v1.customers.UpdateCustomerAddressRequest

*type: Class*

UpdateCustomerAddressRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`customer_address`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_address_update_fields.CustomerAddressUpdateFields]`

 | 

The address to be updated. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask used to indicate which fields of the customer’s address are to be updated. Required.

 |

## [](#core_api_v1_customers_updatecustomerrequest "Copy link to heading")core\_api.v1.customers.UpdateCustomerRequest

*type: Class*

UpdateCustomerRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`customer`

 | 

`typing.Optional[vc_api.core_api.v1.customers._customer_update_fields.CustomerUpdateFields]`

 | 

The customer to update.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask used to indicate which fields of the customer’s details are to be updated. Required.

 |

## [](#core_api_v1_derived_parameters_getderivedparametervaluesresponse "Copy link to heading")core\_api.v1.derived\_parameters.GetDerivedParameterValuesResponse

*type: Class*

GetDerivedParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_values`

 | 

`typing.Dict[str, str]`

 | 

The derived instance-level parameters for the associated product that have been defined in the account’s Smart Contract code.

 |

## [](#core_api_v1_flags_batchgetflagdefinitionsresponse "Copy link to heading")core\_api.v1.flags.BatchGetFlagDefinitionsResponse

*type: Class*

BatchGetFlagDefinitionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag_definitions`

 | 

`typing.Dict[str, vc_api.core_api.v1.flags._flag_definition.FlagDefinition]`

 | 

Maps requested Flag Definition IDs to their Flag Definitions.

 |

## [](#core_api_v1_flags_batchgetflagsresponse "Copy link to heading")core\_api.v1.flags.BatchGetFlagsResponse

*type: Class*

BatchGetFlagsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flags`

 | 

`typing.Dict[str, vc_api.core_api.v1.flags._flag.Flag]`

 | 

Maps requested Flag IDs to their Flag.

 |

## [](#core_api_v1_flags_createflagdefinitionrequest "Copy link to heading")core\_api.v1.flags.CreateFlagDefinitionRequest

*type: Class*

CreateFlagDefinitionRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag_definition`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_definition_create_fields.FlagDefinitionCreateFields]`

 | 

The Flag Definition that is to be created. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |

## [](#core_api_v1_flags_createflagrequest "Copy link to heading")core\_api.v1.flags.CreateFlagRequest

*type: Class*

CreateFlagRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_create_fields.FlagCreateFields]`

 | 

The Flag that is to be created. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |

## [](#core_api_v1_flags_flag "Copy link to heading")core\_api.v1.flags.Flag

*type: Class*

Flag

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Flag. Output only. From Vault version 5.2 onwards, this defaults to a UUID.

 |
| 

`description`

 | 

`class 'str'`

 | 

The description of the Flag. Optional for create requests.

 |
| 

`flag_definition_id`

 | 

`class 'str'`

 | 

The ID of the Flag Definition. Required for create requests.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

The customer ID the Flag applies to.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The account ID the Flag applies to.

 |
| 

`payment_device_id`

 | 

`typing.Optional[str]`

 | 

The payment device ID the Flag applies to.

 |
| 

`value`

 | 

`enum 'FlagValue'`

 | 

Determines how the Flag will behave when resolving the timeseries. Flags with a Value of `FLAG_VALUE_ON` will be resolved as `True`, and a Value of `FLAG_VALUE_OFF` will be resolved as `False`. Defaults to `FLAG_VALUE_ON`. If there are multiple overlapping Flags, the most recently created one will take precendence. If an Account has multiple Stakeholders with conflicting Flags for the same Flag Definition ID, the `FLAG_VALUE_ON` Flag will take precendence.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Flag becomes effective, in UTC. For create requests, can be either: - left empty (for a flag effective immediately); - set to a time in the future (to schedule a flag taking effect); or - set to a time in the past (if the `is_backdated` field is set to true). Formatted as an RFC3339 timestamp. Truncated to microsecond precision.

 |
| 

`expiry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Flag stops being effective, in UTC. The Flag is considered effective between `effective_timestamp` and `expiry_timestamp`. - If `expiry_timestamp` is specified, it must be after the `effective_timestamp` time. - If `expiry_timestamp` is not specified, the Flag is considered effective from its `effective_timestamp` onwards. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

Indicates if the Flag is active. Update only.

 |
| 

`is_backdated`

 | 

`class 'bool'`

 | 

Indicates whether this Flag was a backdated change, meaning its `effective_timestamp` was set to a time earlier than when it was created. To allow the `effective_timestamp` to be in the past, this must be set to true when creating a Flag. Optional.

 |
| 

`creation_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when the Flag was created, in UTC. Output only. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when the flag was created, in UTC. Output only. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |

## [](#core_api_v1_flags_flagcreatefields "Copy link to heading")core\_api.v1.flags.FlagCreateFields

*type: Class*

FlagCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`description`

 | 

`typing.Optional[str]`

 | 

The description of the Flag. Optional for create requests.

 |
| 

`flag_definition_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Flag Definition. Required for create requests.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

The customer ID the Flag applies to.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The account ID the Flag applies to.

 |
| 

`payment_device_id`

 | 

`typing.Optional[str]`

 | 

The payment device ID the Flag applies to.

 |
| 

`value`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_value.FlagValue]`

 | 

Determines how the Flag will behave when resolving the timeseries. Flags with a Value of `FLAG_VALUE_ON` will be resolved as `True`, and a Value of `FLAG_VALUE_OFF` will be resolved as `False`. Defaults to `FLAG_VALUE_ON`. If there are multiple overlapping Flags, the most recently created one will take precendence. If an Account has multiple Stakeholders with conflicting Flags for the same Flag Definition ID, the `FLAG_VALUE_ON` Flag will take precendence.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Flag becomes effective, in UTC. For create requests, can be either: - left empty (for a flag effective immediately); - set to a time in the future (to schedule a flag taking effect); or - set to a time in the past (if the `is_backdated` field is set to true). Formatted as an RFC3339 timestamp. Truncated to microsecond precision.

 |
| 

`expiry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Flag stops being effective, in UTC. The Flag is considered effective between `effective_timestamp` and `expiry_timestamp`. - If `expiry_timestamp` is specified, it must be after the `effective_timestamp` time. - If `expiry_timestamp` is not specified, the Flag is considered effective from its `effective_timestamp` onwards. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`is_backdated`

 | 

`typing.Optional[bool]`

 | 

Indicates whether this Flag was a backdated change, meaning its `effective_timestamp` was set to a time earlier than when it was created. To allow the `effective_timestamp` to be in the past, this must be set to true when creating a Flag. Optional.

 |

## [](#core_api_v1_flags_flagdefinition "Copy link to heading")core\_api.v1.flags.FlagDefinition

*type: Class*

FlagDefinition

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Flag Definition. Matches the name field. One of ID or name must be provided for create requests. If both are provided, ID will be used.

 |
| 

`name`

 | 

`class 'str'`

 | 

The name of the Flag Definition. Matches the ID field. One of ID or name must be provided for create requests. If both are provided, ID will be used.

 |
| 

`description`

 | 

`class 'str'`

 | 

The description of the Flag Definition. Optional for create requests.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

Indicates if the Flag Definition is active. Update only.

Note: Once a Flag Definition is set to inactive, it cannot be activated again.

 |
| 

`required_flag_level`

 | 

`enum 'FlagLevel'`

 | 

The level required to create this Flag. Required for create requests.

 |
| 

`flag_visibility`

 | 

`enum 'FlagVisibility'`

 | 

The Flag visibility. Used to hide Flags from users where these are not relevant to them. Used when listing Flags. Required for create requests.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Flag Definition was created, in UTC. Output only. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |

## [](#core_api_v1_flags_flagdefinitioncreatefields "Copy link to heading")core\_api.v1.flags.FlagDefinitionCreateFields

*type: Class*

FlagDefinitionCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The ID of the Flag Definition. Matches the name field. One of ID or name must be provided for create requests. If both are provided, ID will be used.

 |
| 

`name`

 | 

`typing.Optional[str]`

 | 

The name of the Flag Definition. Matches the ID field. One of ID or name must be provided for create requests. If both are provided, ID will be used.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The description of the Flag Definition. Optional for create requests.

 |
| 

`required_flag_level`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_level.FlagLevel]`

 | 

The level required to create this Flag. Required for create requests.

 |
| 

`flag_visibility`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_visibility.FlagVisibility]`

 | 

The Flag visibility. Used to hide Flags from users where these are not relevant to them. Used when listing Flags. Required for create requests.

 |

## [](#core_api_v1_flags_flagdefinitionupdatefields "Copy link to heading")core\_api.v1.flags.FlagDefinitionUpdateFields

*type: Class*

FlagDefinitionUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`is_active`

 | 

`typing.Optional[bool]`

 | 

Indicates if the Flag Definition is active. Update only.

Note: Once a Flag Definition is set to inactive, it cannot be activated again.

 |

## [](#core_api_v1_flags_flaglevel "Copy link to heading")core\_api.v1.flags.FlagLevel

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`FLAG_LEVEL_UNKNOWN`

 |  |
| 

`FLAG_LEVEL_CUSTOMER`

 |  |
| 

`FLAG_LEVEL_ACCOUNT`

 |  |
| 

`FLAG_LEVEL_PAYMENT_DEVICE`

 |  |

## [](#core_api_v1_flags_flagupdatefields "Copy link to heading")core\_api.v1.flags.FlagUpdateFields

*type: Class*

FlagUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`description`

 | 

`typing.Optional[str]`

 | 

The description of the Flag. Optional for create requests.

 |
| 

`is_active`

 | 

`typing.Optional[bool]`

 | 

Indicates if the Flag is active. Update only.

 |

## [](#core_api_v1_flags_flagvalue "Copy link to heading")core\_api.v1.flags.FlagValue

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`FLAG_VALUE_ON`

 |  |
| 

`FLAG_VALUE_OFF`

 |  |

## [](#core_api_v1_flags_flagvisibility "Copy link to heading")core\_api.v1.flags.FlagVisibility

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`FLAG_VISIBILITY_UNKNOWN`

 |  |
| 

`FLAG_VISIBILITY_CONTRACT`

 |  |
| 

`FLAG_VISIBILITY_OPERATOR`

 |  |

## [](#core_api_v1_flags_listflagdefinitionsresponse "Copy link to heading")core\_api.v1.flags.ListFlagDefinitionsResponse

*type: Class*

ListFlagDefinitionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag_definitions`

 | 

`typing.List[vc_api.core_api.v1.flags._flag_definition.FlagDefinition]`

 | 

A list of matching Flag Definitions, sorted by descending `create_timestamp`.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_flags_listflagsresponse "Copy link to heading")core\_api.v1.flags.ListFlagsResponse

*type: Class*

ListFlagsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flags`

 | 

`typing.List[vc_api.core_api.v1.flags._flag.Flag]`

 | 

A list of matching Flags, sorted by descending creation time.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_flags_updateflagdefinitionrequest "Copy link to heading")core\_api.v1.flags.UpdateFlagDefinitionRequest

*type: Class*

UpdateFlagDefinitionRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag_definition`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_definition_update_fields.FlagDefinitionUpdateFields]`

 | 

The Flag Definition that is to be updated. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask used to indicate which fields in the Flag Definition are to be updated. The only valid path in the update\_mask is 'is\_active'. Required.

 |

## [](#core_api_v1_flags_updateflagrequest "Copy link to heading")core\_api.v1.flags.UpdateFlagRequest

*type: Class*

UpdateFlagRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`flag`

 | 

`typing.Optional[vc_api.core_api.v1.flags._flag_update_fields.FlagUpdateFields]`

 | 

The Flag that is to be updated. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask used to indicate which fields in the Flag are to be updated. Valid paths in the update mask are 'description' and 'is\_active'. Required. From Vault version 5.2, using 'is\_active' in the update path is deprecated in favour of creating Flags with Value `FLAG_VALUE_OFF`.

 |

## [](#core_api_v1_global_parameters_batchgetglobalparametersresponse "Copy link to heading")core\_api.v1.global\_parameters.BatchGetGlobalParametersResponse

*type: Class*

BatchGetGlobalParametersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`global_parameters`

 | 

`typing.Dict[str, vc_api.core_api.v1.global_parameters._global_parameter.GlobalParameter]`

 | 

Maps `GlobalParameter` ID to `GlobalParameter`.

 |

## [](#core_api_v1_global_parameters_createglobalparameterrequest "Copy link to heading")core\_api.v1.global\_parameters.CreateGlobalParameterRequest

*type: Class*

CreateGlobalParameterRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used for idempotency.

 |
| 

`global_parameter`

 | 

`typing.Optional[vc_api.core_api.v1.global_parameters._global_parameter_create_fields.GlobalParameterCreateFields]`

 | 

The `GlobalParameter` to be created.

 |
| 

`initial_value`

 | 

`typing.Optional[str]`

 | 

This will be used to create a `GlobalParameterValue` associated with the newly created `GlobalParameter`. Use this value accordingly for each Global Parameter Type; for Dates, it is in the format `YYYY-MM-DD`. The `effective_timestamp` of the created `GlobalParameterValue` will be the Unix epoch.

 |

## [](#core_api_v1_global_parameters_createglobalparametervaluerequest "Copy link to heading")core\_api.v1.global\_parameters.CreateGlobalParameterValueRequest

*type: Class*

CreateGlobalParameterValueRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used for idempotency.

 |
| 

`global_parameter_value`

 | 

`typing.Optional[vc_api.core_api.v1.global_parameters._global_parameter_value_create_fields.GlobalParameterValueCreateFields]`

 | 

The `GlobalParameterValue` to be created.

 |

## [](#core_api_v1_global_parameters_globalparameter "Copy link to heading")core\_api.v1.global\_parameters.GlobalParameter

*type: Class*

A `GlobalParameter` describes the metadata and shape of a parameter.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The `GlobalParameter` ID. Used by Smart Contracts to retrieve values for this parameter.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

A human-readable name.

 |
| 

`description`

 | 

`class 'str'`

 | 

A description of the parameter.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the `GlobalParameter` was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`number`

 | 

`typing.Optional[vc_api.core_api.v1.params._number_field.NumberField]`

 | 

A number shape is used for parameters representing numerical values.

 |
| 

`str`

 | 

`typing.Optional[vc_api.core_api.v1.params._string_field.StringField]`

 | 

A str shape is used for parameters representing string values.

 |
| 

`denomination`

 | 

`typing.Optional[vc_api.core_api.v1.params._denomination_field.DenominationField]`

 | 

A denomination shape is used for parameters representing denominations.

 |
| 

`date`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_field.DateField]`

 | 

A date shape is used for parameters representing date values.

 |

## [](#core_api_v1_global_parameters_globalparametercreatefields "Copy link to heading")core\_api.v1.global\_parameters.GlobalParameterCreateFields

*type: Class*

A `GlobalParameter` describes the metadata and shape of a parameter.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The `GlobalParameter` ID. Used by Smart Contracts to retrieve values for this parameter.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

A human-readable name.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

A description of the parameter.

 |
| 

`number`

 | 

`typing.Optional[vc_api.core_api.v1.params._number_field_create_fields.NumberFieldCreateFields]`

 | 

A number shape is used for parameters representing numerical values.

 |
| 

`str`

 | 

`typing.Optional[vc_api.core_api.v1.params._string_field_create_fields.StringFieldCreateFields]`

 | 

A str shape is used for parameters representing string values.

 |
| 

`denomination`

 | 

`typing.Optional[vc_api.core_api.v1.params._denomination_field_create_fields.DenominationFieldCreateFields]`

 | 

A denomination shape is used for parameters representing denominations.

 |
| 

`date`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_field_create_fields.DateFieldCreateFields]`

 | 

A date shape is used for parameters representing date values.

 |

## [](#core_api_v1_global_parameters_globalparametervalue "Copy link to heading")core\_api.v1.global\_parameters.GlobalParameterValue

*type: Class*

A `GlobalParameterValue` contains the value for a `GlobalParameter` at a specified `effective_timestamp`.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The `GlobalParameterValue` ID.

 |
| 

`global_parameter_id`

 | 

`class 'str'`

 | 

The `GlobalParameter` ID this value belongs to.

 |
| 

`value`

 | 

`class 'str'`

 | 

The actual value. This is stored as a string and is processed together with the information stored in the associated `GlobalParameter`. This will determine how the value is parsed or displayed. For Date Global Parameters, it is in the format `YYYY-MM-DD`.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the `GlobalParameterValue` is effective from, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the `GlobalParameterValue` was created, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_global_parameters_globalparametervaluecreatefields "Copy link to heading")core\_api.v1.global\_parameters.GlobalParameterValueCreateFields

*type: Class*

A `GlobalParameterValue` contains the value for a `GlobalParameter` at a specified `effective_timestamp`.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`global_parameter_id`

 | 

`typing.Optional[str]`

 | 

The `GlobalParameter` ID this value belongs to.

 |
| 

`value`

 | 

`typing.Optional[str]`

 | 

The actual value. This is stored as a string and is processed together with the information stored in the associated `GlobalParameter`. This will determine how the value is parsed or displayed. For Date Global Parameters, it is in the format `YYYY-MM-DD`.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the `GlobalParameterValue` is effective from, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_global_parameters_listglobalparametervaluesresponse "Copy link to heading")core\_api.v1.global\_parameters.ListGlobalParameterValuesResponse

*type: Class*

ListGlobalParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`global_parameter_values`

 | 

`typing.List[vc_api.core_api.v1.global_parameters._global_parameter_value.GlobalParameterValue]`

 | 

A list of \`GlobalParameterValue\`s, ordered by ascending effective time.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_global_parameters_listglobalparametersresponse "Copy link to heading")core\_api.v1.global\_parameters.ListGlobalParametersResponse

*type: Class*

ListGlobalParametersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`global_parameters`

 | 

`typing.List[vc_api.core_api.v1.global_parameters._global_parameter.GlobalParameter]`

 | 

A list of \`GlobalParameter\`s, ordered by descending creation time.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_journal_events_getjournaleventschecksumresponse "Copy link to heading")core\_api.v1.journal\_events.GetJournalEventsChecksumResponse

*type: Class*

GetJournalEventsChecksumResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`window_journal_events_count`

 | 

`class 'int'`

 | 

The number of events that occurred within the time window.

 |
| 

`window_journal_events_checksum`

 | 

`class 'str'`

 | 

The checksum of the Journal Events' IDs. Vault hashes each ID using SHA256, then sequentially XORs each with the previous result, and returns a hash of the final result as a hexadecimal string. So for IDs A, B, C, the result will be sha(XOR(XOR(sha(A), sha(B)), sha©)).

 |

## [](#core_api_v1_journal_events_journalevent "Copy link to heading")core\_api.v1.journal\_events.JournalEvent

*type: Class*

JournalEvent

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

`class 'str'`

 | 

Uniquely identifies the event in Vault.

 |
| 

`resource_id`

 | 

`class 'str'`

 | 

The ID of the resource that is the subject of this event.

 |
| 

`timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time at which the event occurred, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`change_id`

 | 

`class 'str'`

 | 

This ID of the change within the context of the subject resource.

 |
| 

`related_resource`

 | 

`typing.Optional[vc_api.core_api.v1.journal_events._related_resource.RelatedResource]`

 | 

This is the related resource meaningful for this event.

 |
| 

`published`

 | 

`class 'bool'`

 | 

Indicates if Vault has published this event to the Streaming API. This is unlikely to be false, and will generally only be false for very recent events or during disaster recovery.

 |

## [](#core_api_v1_journal_events_journaleventtoreplay "Copy link to heading")core\_api.v1.journal\_events.JournalEventToReplay

*type: Class*

JournalEventToReplay

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`event_identifier`

 | 

`typing.Optional[str]`

 | 

The ID of the Event

 |
| 

`resource_identifier`

 | 

`typing.Optional[vc_api.core_api.v1.journal_events._resource_identifier.ResourceIdentifier]`

 | 

A composite identifier for a specific change to a specific resource.

 |
| 

`related_resource_identifier`

 | 

`typing.Optional[vc_api.core_api.v1.journal_events._related_resource_identifier.RelatedResourceIdentifier]`

 | 

A composite identifier for a specific change to a specific related resource.

 |

## [](#core_api_v1_journal_events_listjournaleventsresponse "Copy link to heading")core\_api.v1.journal\_events.ListJournalEventsResponse

*type: Class*

ListJournalEventsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`journal_events`

 | 

`typing.List[vc_api.core_api.v1.journal_events._journal_event.JournalEvent]`

 | 

A list of Journal Events whose timestamps fall within the time window.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_journal_events_relatedresource "Copy link to heading")core\_api.v1.journal\_events.RelatedResource

*type: Class*

RelatedResource

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`enum 'ResourceType'`

 | 

The type of the resource.

 |
| 

`id`

 | 

`class 'str'`

 | 

The ID of the resource.

 |
| 

`sequence_number`

 | 

`class 'str'`

 | 

The ordinal position of the event in the history of the resource.

 |

## [](#core_api_v1_journal_events_relatedresourceidentifier "Copy link to heading")core\_api.v1.journal\_events.RelatedResourceIdentifier

*type: Class*

RelatedResourceIdentifier

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`related_resource_id`

 | 

`class 'str'`

 | 

The ID of the resource.

 |
| 

`sequence_number`

 | 

`class 'str'`

 | 

The ordinal position of the event in the history of the resource.

 |

## [](#core_api_v1_journal_events_replayjournaleventsrequest "Copy link to heading")core\_api.v1.journal\_events.ReplayJournalEventsRequest

*type: Class*

ReplayJournalEventsRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resource_type`

 | 

`typing.Optional[vc_api.core_api.v1.journal_events._resource_type.ResourceType]`

 | 

The type of the Vault resource.

 |
| 

`journal_events_to_replay`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.journal_events._journal_event_to_replay.JournalEventToReplay]]`

 | 

The list of events to replay. Duplicate identifiers are ignored and the corresponding events will only be replayed once

 |

## [](#core_api_v1_journal_events_replayjournaleventsresponse "Copy link to heading")core\_api.v1.journal\_events.ReplayJournalEventsResponse

*type: Class*

ReplayJournalEventsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`journal_events_batch_id`

 | 

`class 'str'`

 | 

Vault will include this unique ID in the `X-JournalEventsBatch-ID` Kafka header of all messages produced as part of the replay. This ID is ephemeral - if you need to use the ID to correlate which events have been streamed out as a result of this request, you will need to persist it.

 |

## [](#core_api_v1_journal_events_resourceidentifier "Copy link to heading")core\_api.v1.journal\_events.ResourceIdentifier

*type: Class*

ResourceIdentifier

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`resource_id`

 | 

`class 'str'`

 | 

The ID of the resource.

 |
| 

`change_id`

 | 

`class 'str'`

 | 

This ID of the change within the context of the subject resource.

 |

## [](#core_api_v1_journal_events_resourcetype "Copy link to heading")core\_api.v1.journal\_events.ResourceType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESOURCE_TYPE_UNKNOWN`

 |  |
| 

`RESOURCE_TYPE_SCHEDULER_OPERATION`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT_BALANCE`

 |  |
| 

`RESOURCE_TYPE_ENRICHED_POSTING_INSTRUCTION_BATCH`

 |  |
| 

`RESOURCE_TYPE_POSTING_INSTRUCTION_BATCH`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT_UPDATE`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT_UPDATE_BATCH`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT_V2`

 |  |
| 

`RESOURCE_TYPE_RESTRICTION_SET`

 |  |
| 

`RESOURCE_TYPE_FLAG`

 |  |
| 

`RESOURCE_TYPE_PARAMETER`

 |  |
| 

`RESOURCE_TYPE_PARAMETERVALUE`

 |  |
| 

`RESOURCE_TYPE_VAULT_JOB`

 |  |
| 

`RESOURCE_TYPE_PARAMETER_VALUE_HIERARCHY_NODE`

 |  |
| 

`RESOURCE_TYPE_VAULT_JOB_GROUP`

 |  |
| 

`RESOURCE_TYPE_ADJUSTMENT`

 |  |
| 

`RESOURCE_TYPE_BALANCE_EVENT_V2`

 |  |
| 

`RESOURCE_TYPE_CONTRACT_NOTIFICATION`

 |  |

## [](#core_api_v1_ledger_balances_ledgerbalance "Copy link to heading")core\_api.v1.ledger\_balances.LedgerBalance

*type: Class*

LedgerBalance

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Ledger Balance. Output only.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the associated account.

 |
| 

`account_address`

 | 

`class 'str'`

 | 

The account address, which represents one partition of the total balances held on the account.

 |
| 

`phase`

 | 

`enum 'PostingPhase'`

 | 

The posting phase the balance applies to.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset in which the balance is held.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The denomination in which the balance is held for the given asset.

 |
| 

`amount`

 | 

`class 'str'`

 | 

The amount, which is the net value of the balance.

 |
| 

`total_debit`

 | 

`class 'str'`

 | 

The total sum of debits.

 |
| 

`total_credit`

 | 

`class 'str'`

 | 

The total sum of credits.

 |

## [](#core_api_v1_ledger_balances_listledgerbalancesresponse "Copy link to heading")core\_api.v1.ledger\_balances.ListLedgerBalancesResponse

*type: Class*

ListLedgerBalancesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`ledger_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The Postings Ledger timestamp indicating at what time these Ledger Balances were valid, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`ledger_balances`

 | 

`typing.List[vc_api.core_api.v1.ledger_balances._ledger_balance.LedgerBalance]`

 | 

A list of matching Ledger Balances.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_ledger_balances_postingphase "Copy link to heading")core\_api.v1.ledger\_balances.PostingPhase

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_PHASE_UNKNOWN`

 |  |
| 

`POSTING_PHASE_PENDING_INCOMING`

 |  |
| 

`POSTING_PHASE_PENDING_OUTGOING`

 |  |
| 

`POSTING_PHASE_COMMITTED`

 |  |

## [](#core_api_v1_parameters_accountconstraint "Copy link to heading")core\_api.v1.parameters.AccountConstraint

*type: Class*

AccountConstraint

Signature of the constructor for this class:

## [](#core_api_v1_parameters_accountconstraintcreatefields "Copy link to heading")core\_api.v1.parameters.AccountConstraintCreateFields

*type: Class*

AccountConstraintCreateFields

Signature of the constructor for this class:

## [](#core_api_v1_parameters_batchcreateparametervaluesrequest "Copy link to heading")core\_api.v1.parameters.BatchCreateParameterValuesRequest

*type: Class*

BatchCreateParameterValuesRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent. Required.

 |
| 

`parameter_values`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.parameters._parameter_value_create_fields.ParameterValueCreateFields]]`

 | 

The batch of Parameter Values to create.

 |

## [](#core_api_v1_parameters_batchcreateparametervaluesresponse "Copy link to heading")core\_api.v1.parameters.BatchCreateParameterValuesResponse

*type: Class*

BatchCreateParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_values`

 | 

`typing.List[vc_api.core_api.v1.parameters._parameter_value.ParameterValue]`

 | 

The Parameter Values created by this request.

 |

## [](#core_api_v1_parameters_batchgetparametervaluehierarchynodesresponse "Copy link to heading")core\_api.v1.parameters.BatchGetParameterValueHierarchyNodesResponse

*type: Class*

BatchGetParameterValueHierarchyNodesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_value_hierarchy_nodes`

 | 

`typing.Dict[str, vc_api.core_api.v1.parameters._parameter_value_hierarchy_node.ParameterValueHierarchyNode]`

 | 

A map from Parameter Value Hierarchy Node IDs to Parameter Value Hierarchy Node.

 |

## [](#core_api_v1_parameters_batchgetparametervaluesresponse "Copy link to heading")core\_api.v1.parameters.BatchGetParameterValuesResponse

*type: Class*

BatchGetParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_values`

 | 

`typing.Dict[str, vc_api.core_api.v1.parameters._parameter_value.ParameterValue]`

 | 

Parameter Values keyed on ID.

 |

## [](#core_api_v1_parameters_batchgetparametersresponse "Copy link to heading")core\_api.v1.parameters.BatchGetParametersResponse

*type: Class*

BatchGetParametersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameters`

 | 

`typing.Dict[str, vc_api.core_api.v1.parameters._parameter.Parameter]`

 | 

Parameters keyed on ID.

 |

## [](#core_api_v1_parameters_constraint "Copy link to heading")core\_api.v1.parameters.Constraint

*type: Class*

Constraint

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._string_constraint.StringConstraint]`

 | 

Constraints on a string Parameter.

 |
| 

`decimal_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._decimal_constraint.DecimalConstraint]`

 | 

Constraints on an arbitrary precision number Parameter.

 |
| 

`enumeration_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._enumeration_constraint.EnumerationConstraint]`

 | 

Constraints on an enumeration Parameter.

 |
| 

`date_time_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._date_time_constraint.DateTimeConstraint]`

 | 

Constraints on a date-time Parameter.

 |
| 

`account_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._account_constraint.AccountConstraint]`

 | 

Constraints on an account Parameter.

 |

## [](#core_api_v1_parameters_constraintcreatefields "Copy link to heading")core\_api.v1.parameters.ConstraintCreateFields

*type: Class*

ConstraintCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._string_constraint_create_fields.StringConstraintCreateFields]`

 | 

Constraints on a string Parameter.

 |
| 

`decimal_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._decimal_constraint_create_fields.DecimalConstraintCreateFields]`

 | 

Constraints on an arbitrary precision number Parameter.

 |
| 

`enumeration_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._enumeration_constraint_create_fields.EnumerationConstraintCreateFields]`

 | 

Constraints on an enumeration Parameter.

 |
| 

`date_time_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._date_time_constraint_create_fields.DateTimeConstraintCreateFields]`

 | 

Constraints on a date-time Parameter.

 |
| 

`account_constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._account_constraint_create_fields.AccountConstraintCreateFields]`

 | 

Constraints on an account Parameter.

 |

## [](#core_api_v1_parameters_createparameterrequest "Copy link to heading")core\_api.v1.parameters.CreateParameterRequest

*type: Class*

CreateParameterRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent. Required.

 |
| 

`parameter`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_create_fields.ParameterCreateFields]`

 | 

The Parameter to create. Required.

 |

## [](#core_api_v1_parameters_createparametervaluehierarchynoderequest "Copy link to heading")core\_api.v1.parameters.CreateParameterValueHierarchyNodeRequest

*type: Class*

CreateParameterValueHierarchyNodeRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent.

 |
| 

`parameter_value_hierarchy_node`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_hierarchy_node_create_fields.ParameterValueHierarchyNodeCreateFields]`

 | 

The Parameter Value Hierarchy Node to create. Required.

 |

## [](#core_api_v1_parameters_createparametervaluerequest "Copy link to heading")core\_api.v1.parameters.CreateParameterValueRequest

*type: Class*

CreateParameterValueRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent. Required.

 |
| 

`parameter_value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_create_fields.ParameterValueCreateFields]`

 | 

The Parameter Value to create. Required.

 |

## [](#core_api_v1_parameters_datetimeconstraint "Copy link to heading")core\_api.v1.parameters.DateTimeConstraint

*type: Class*

DateTimeConstraint

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`precision`

 | 

`enum 'DateTimeConstraintPrecision'`

 | 

Least significant component that can be set.

 |
| 

`earliest`

 | 

`typing.Optional[datetime.datetime]`

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

`latest`

 | 

`typing.Optional[datetime.datetime]`

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_parameters_datetimeconstraintcreatefields "Copy link to heading")core\_api.v1.parameters.DateTimeConstraintCreateFields

*type: Class*

DateTimeConstraintCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`precision`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._date_time_constraint_precision.DateTimeConstraintPrecision]`

 | 

Least significant component that can be set.

 |
| 

`earliest`

 | 

`typing.Optional[datetime.datetime]`

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

`latest`

 | 

`typing.Optional[datetime.datetime]`

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_parameters_datetimeconstraintprecision "Copy link to heading")core\_api.v1.parameters.DateTimeConstraintPrecision

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`MINUTE`

 |  |
| 

`DAY`

 |  |

## [](#core_api_v1_parameters_decimalconstraint "Copy link to heading")core\_api.v1.parameters.DecimalConstraint

*type: Class*

DecimalConstraint

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_value`

 | 

`class 'str'`

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

`max_value`

 | 

`class 'str'`

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |

## [](#core_api_v1_parameters_decimalconstraintcreatefields "Copy link to heading")core\_api.v1.parameters.DecimalConstraintCreateFields

*type: Class*

DecimalConstraintCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_value`

 | 

`typing.Optional[str]`

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

`max_value`

 | 

`typing.Optional[str]`

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |

## [](#core_api_v1_parameters_effectiveparametervalue "Copy link to heading")core\_api.v1.parameters.EffectiveParameterValue

*type: Class*

EffectiveParameterValue

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_id`

 | 

`class 'str'`

 | 

The Parameter ID of the Effective Parameter Value. Will be included even if `parameter_value` is not present due to a gap in the time series of the Parameter that is expected.

 |
| 

`parameter_status`

 | 

`enum 'EffectiveParameterValueParameterStatus'`

 | 

The `parameter_status` of the Parameter indicates the reason for its inclusion in the response at a given time.

 |
| 

`parameter_value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value.ParameterValue]`

 | 

The Parameter Value that is effective for the resource (a Customer Account or a Parameter Value Hierarchy Node). Can appear multiple times in a response with varying `from_timestamp` and `to_timestamp`. Will not be present if no Parameter Value is effective due to a gap in the time series.

 |
| 

`from_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp from the requested time range that this Parameter Value became effective for the resource (a Customer Account or a Parameter Value Hierarchy Node). It is greater than or equal to the `parameter_value.effective_from_timestamp`.

 |
| 

`to_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp from the requested time range that this Parameter Value was effective until for the resource (a Customer Account or a Parameter Value Hierarchy Node). It is lesser than or equal to the `parameter_value.effective_to_timestamp`.

 |

## [](#core_api_v1_parameters_effectiveparametervalueparameterstatus "Copy link to heading")core\_api.v1.parameters.EffectiveParameterValueParameterStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PARAMETER_STATUS_UNKNOWN`

 |  |
| 

`PARAMETER_STATUS_REQUESTED`

 |  |
| 

`PARAMETER_STATUS_EXPECTED`

 |  |
| 

`PARAMETER_STATUS_EXPECTED_AT_EFFECTIVE_TIME`

 |  |
| 

`PARAMETER_STATUS_EXPECTED_OUTSIDE_EFFECTIVE_TIME`

 |  |

## [](#core_api_v1_parameters_enumerationconstraint "Copy link to heading")core\_api.v1.parameters.EnumerationConstraint

*type: Class*

EnumerationConstraint

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`permitted_values`

 | 

`typing.List[str]`

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |

## [](#core_api_v1_parameters_enumerationconstraintcreatefields "Copy link to heading")core\_api.v1.parameters.EnumerationConstraintCreateFields

*type: Class*

EnumerationConstraintCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`permitted_values`

 | 

`typing.Optional[typing.List[str]]`

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |

## [](#core_api_v1_parameters_listparametervaluehierarchynodesrequestorderby "Copy link to heading")core\_api.v1.parameters.ListParameterValueHierarchyNodesRequestOrderBy

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ORDER_BY_DEPTH_ASC`

 |  |

## [](#core_api_v1_parameters_listparametervaluehierarchynodesresponse "Copy link to heading")core\_api.v1.parameters.ListParameterValueHierarchyNodesResponse

*type: Class*

ListParameterValueHierarchyNodesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_value_hierarchy_nodes`

 | 

`typing.List[vc_api.core_api.v1.parameters._parameter_value_hierarchy_node.ParameterValueHierarchyNode]`

 | 

The Parameter Value Hierarchy Nodes matching the specified filtering options.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the next page of Parameter Value Hierarchy Nodes. If empty, the given page is the last page.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the previous page of Parameter Value Hierarchy Nodes. If empty, the given page is the first page.

 |

## [](#core_api_v1_parameters_listparametervaluesresponse "Copy link to heading")core\_api.v1.parameters.ListParameterValuesResponse

*type: Class*

ListParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_values`

 | 

`typing.List[vc_api.core_api.v1.parameters._parameter_value.ParameterValue]`

 | 

The Parameter Values matching the specified filtering options. Parameter Values are sorted by ascending `parameter_id`, `owner`, `effective_from_timestamp`.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the next page of Parameter Values.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the previous page of Parameter Values.

 |

## [](#core_api_v1_parameters_listparametersresponse "Copy link to heading")core\_api.v1.parameters.ListParametersResponse

*type: Class*

ListParametersResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameters`

 | 

`typing.List[vc_api.core_api.v1.parameters._parameter.Parameter]`

 | 

The Parameters matching the specified filtering options.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the next page of Parameters.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the previous page of Parameters.

 |

## [](#core_api_v1_parameters_parameter "Copy link to heading")core\_api.v1.parameters.Parameter

*type: Class*

Parameter

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Unique human-readable identifier for the Parameter. Required.

 |
| 

`constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._constraint.Constraint]`

 | 

Constraint on the Parameter type and valid values. Required.

 |
| 

`metadata`

 | 

`typing.Dict[str, str]`

 | 

Metadata related to the Parameter for use by downstream systems. Optional.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Parameter was created, in UTC. Read-only and set to the current time on creation. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_parameters_parametercreatefields "Copy link to heading")core\_api.v1.parameters.ParameterCreateFields

*type: Class*

ParameterCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Unique human-readable identifier for the Parameter. Required.

 |
| 

`constraint`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._constraint_create_fields.ConstraintCreateFields]`

 | 

Constraint on the Parameter type and valid values. Required.

 |
| 

`metadata`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Metadata related to the Parameter for use by downstream systems. Optional.

 |

## [](#core_api_v1_parameters_parametervalue "Copy link to heading")core\_api.v1.parameters.ParameterValue

*type: Class*

ParameterValue

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Unique UUID identifier for the Parameter Value. Read-only and set to a random UUID on creation when using `POST /v1/parameter-values`. When using `POST /v1/contracts:simulate` it can optionally be specified in the request to allow the Parameter Value to be updated later in the simulation.

 |
| 

`parameter_id`

 | 

`class 'str'`

 | 

The ID of the Parameter for which this is a value. Required.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Customer Account that owns this value.

 |
| 

`global_`

 | 

`typing.Optional[bool]`

 | 

Whether or not this Parameter Value is globally owned. This field should be used instead of account\_config\_group\_id='root'. All Resources will use this value unless it’s overridden by a Parameter Value owned by a hierarchy or the Resource itself.

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node that owns this value. Required for create requests.

 |
| 

`account_config_group_id`

 | 

`class 'str'`

 | 

The ID of the Account Config Group that owns this value. Can only be set to `root`, and is exactly equivalent to setting `global` to `true`. Functionality originally intended for this field has now moved to `parameter_value_hierarchy_node_id`.

 |
| 

`value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._value.Value]`

 | 

The value of the Parameter, which must satisfy the constraints defined in the Parameter. Required. Cannot be changed; instead, a new Parameter Value must be created.

 |
| 

`effective_from_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time from which the Parameter Value is effective (including this time), in UTC. Set to the current time on creation if not specified. Can be set to a time in the past if the `is_backdated` flag is set to true. Can also be set to a time in the future: see \[Future-Dated Parameter Values\](/reference/contracts/contracts\_api\_4xx/common\_examples/generic#future\_dated\_parameter\_values). Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`effective_to_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time until which the Parameter Value remains effective (excluding this time), in UTC. If this field is left empty or omitted, the Parameter Value is effective indefinitely. Vault will automatically update this field if the Parameter Value is superseded by another Parameter Value for the same Parameter and Owner. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`effective_to_timestamp_is_explicit`

 | 

`class 'bool'`

 | 

Indicates whether the `effective_to_timestamp` was set explicitly using an API call or whether it was implicitly determined by Vault as a result of another Parameter Value for the same Owner superseding it. Read-only.

 |
| 

`is_backdated`

 | 

`class 'bool'`

 | 

Indicates whether this Parameter Value was a backdated change, meaning its `effective_from_timestamp` was set to a time earlier than when it was created. To allow the `effective_from_timestamp` to be in the past, this must be set to true when creating Parameter Values. A backdated Parameter Value will not trigger the \[pre\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#pre\_parameter\_change\_hook) or \[post\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#post\_parameter\_change\_hook).

 |
| 

`is_cancelled`

 | 

`class 'bool'`

 | 

Indicates whether this Parameter Value has been cancelled before it became effective. This field can be explicitly set to true via an update, providing that the `effective_from_timestamp` is in the future.

 |
| 

`cancel_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time at which this Parameter Value was cancelled, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Parameter Value was created, in UTC. Read-only and set to the current time on creation. Formatted as an RFC3339 timestamp.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Parameter Value was last updated, in UTC. Empty if the Value was never updated. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_parameters_parametervaluebatchcreateparametervaluesrequest "Copy link to heading")core\_api.v1.parameters.ParameterValueBatchCreateParameterValuesRequest

*type: Class*

ParameterValueBatchCreateParameterValuesRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter for which this is a value. Required.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Customer Account that owns this value.

 |
| 

`global_`

 | 

`typing.Optional[bool]`

 | 

Whether or not this Parameter Value is globally owned. This field should be used instead of account\_config\_group\_id='root'. All Resources will use this value unless it’s overridden by a Parameter Value owned by a hierarchy or the Resource itself.

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node that owns this value. Required for create requests.

 |
| 

`account_config_group_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Account Config Group that owns this value. Can only be set to `root`, and is exactly equivalent to setting `global` to `true`. Functionality originally intended for this field has now moved to `parameter_value_hierarchy_node_id`.

 |
| 

`value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._value_batch_create_parameter_values_request.ValueBatchCreateParameterValuesRequest]`

 | 

The value of the Parameter, which must satisfy the constraints defined in the Parameter. Required. Cannot be changed; instead, a new Parameter Value must be created.

 |
| 

`effective_from_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time from which the Parameter Value is effective (including this time), in UTC. Set to the current time on creation if not specified. Can be set to a time in the past if the `is_backdated` flag is set to true. Can also be set to a time in the future: see \[Future-Dated Parameter Values\](/reference/contracts/contracts\_api\_4xx/common\_examples/generic#future\_dated\_parameter\_values). Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`is_backdated`

 | 

`typing.Optional[bool]`

 | 

Indicates whether this Parameter Value was a backdated change, meaning its `effective_from_timestamp` was set to a time earlier than when it was created. To allow the `effective_from_timestamp` to be in the past, this must be set to true when creating Parameter Values. A backdated Parameter Value will not trigger the \[pre\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#pre\_parameter\_change\_hook) or \[post\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#post\_parameter\_change\_hook).

 |

## [](#core_api_v1_parameters_parametervaluecreatefields "Copy link to heading")core\_api.v1.parameters.ParameterValueCreateFields

*type: Class*

ParameterValueCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter for which this is a value. Required.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Customer Account that owns this value.

 |
| 

`global_`

 | 

`typing.Optional[bool]`

 | 

Whether or not this Parameter Value is globally owned. This field should be used instead of account\_config\_group\_id='root'. All Resources will use this value unless it’s overridden by a Parameter Value owned by a hierarchy or the Resource itself.

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node that owns this value. Required for create requests.

 |
| 

`account_config_group_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Account Config Group that owns this value. Can only be set to `root`, and is exactly equivalent to setting `global` to `true`. Functionality originally intended for this field has now moved to `parameter_value_hierarchy_node_id`.

 |
| 

`value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._value_create_fields.ValueCreateFields]`

 | 

The value of the Parameter, which must satisfy the constraints defined in the Parameter. Required. Cannot be changed; instead, a new Parameter Value must be created.

 |
| 

`effective_from_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time from which the Parameter Value is effective (including this time), in UTC. Set to the current time on creation if not specified. Can be set to a time in the past if the `is_backdated` flag is set to true. Can also be set to a time in the future: see \[Future-Dated Parameter Values\](/reference/contracts/contracts\_api\_4xx/common\_examples/generic#future\_dated\_parameter\_values). Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`is_backdated`

 | 

`typing.Optional[bool]`

 | 

Indicates whether this Parameter Value was a backdated change, meaning its `effective_from_timestamp` was set to a time earlier than when it was created. To allow the `effective_from_timestamp` to be in the past, this must be set to true when creating Parameter Values. A backdated Parameter Value will not trigger the \[pre\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#pre\_parameter\_change\_hook) or \[post\_parameter\_change\_hook\](/reference/contracts/contracts\_api\_4xx/smart\_contracts\_api\_reference4xx/hooks/#post\_parameter\_change\_hook).

 |

## [](#core_api_v1_parameters_parametervalueeffectivetotimestampupdateoptions "Copy link to heading")core\_api.v1.parameters.ParameterValueEffectiveToTimestampUpdateOptions

*type: Class*

These allow controlling the behaviour of an update to the Parameter Value’s effective\_to\_timestamp.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`set_to_now`

 | 

`typing.Optional[bool]`

 | 

This controls the behaviour when a request is sent to update the `effective_to_timestamp` but no value is set in `parameter_value.effective_to_timestamp`. When set to true, Vault immediately unsets the Parameter Value by setting its `effective_to_timestamp` to the time that Vault processes the request. This is an alternative to explicitly setting a near-future `effective_to_timestamp`, which could inadvertently be in the past by the time of processing. When set to false, or if this update option is omitted, the `effective_to_timestamp` will be left unbounded or set to the `effective_from_timestamp` of the next Parameter Value in the timeseries.

 |

## [](#core_api_v1_parameters_parametervaluehierarchynode "Copy link to heading")core\_api.v1.parameters.ParameterValueHierarchyNode

*type: Class*

ParameterValueHierarchyNode

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Unique identifier for the Parameter Value Hierarchy Node. Forms part of the `parent_path` for child nodes. Thought Machine recommends against relating this to the `name` (instead it can a good idea to use the id to indicate this node’s position). It must match the regex `^[A-Za-z0-9][A-Za-z0-9-_.]*$` and its length must not exceed 256 characters. Required for create or update requests.

 |
| 

`name`

 | 

`class 'str'`

 | 

A human readable identifier for this Parameter Value Hierarchy Node. It must match the regex `^[A-Za-z0-9][ A-Za-z0-9-_]*$` and its length must not exceed 256 characters. The `name` needs to be unique among nodes with a common (or no) `parent_id`. Required for create requests.

 |
| 

`parent_id`

 | 

`class 'str'`

 | 

The ID of the Parameter Value Hierarchy Node which is the parent of this Parameter Value Hierarchy Node. This is only empty for a top-level Parameter Value Hierarchy Node.

 |
| 

`parent_path`

 | 

`typing.List[str]`

 | 

A read-only list of all ancestor Parameter Value Hierarchy Node IDs, starting from the top-level node and ending with the node’s parent. Will be empty for a top-level node.

 |
| 

`depth`

 | 

`class 'int'`

 | 

The read-only depth of the Parameter Value Hierarchy Node within the Parameter Value Hierarchy. This will be 1 for the top-level node, and increases by 1 for each descendant layer.

 |
| 

`metadata`

 | 

`typing.Dict[str, str]`

 | 

Key value map of additional, non-structured Parameter Value Hierarchy Node details.

The details must not include: - Any image data, including any KYC collateral such as passport, licence or other images. These must be stored in a separate repository outside of Vault. - Any data that is classified as PII data. The details cannot be utilised by Smart Contracts to drive any type of product behaviour.

Max size: 2kB, Max key length: 128 characters

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Parameter Value Hierarchy Node was created. This field is read-only and set to the current time on creation in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Parameter Value Hierarchy Node was last updated. This field is set to the current time on update in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_parameters_parametervaluehierarchynodecreatefields "Copy link to heading")core\_api.v1.parameters.ParameterValueHierarchyNodeCreateFields

*type: Class*

ParameterValueHierarchyNodeCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Unique identifier for the Parameter Value Hierarchy Node. Forms part of the `parent_path` for child nodes. Thought Machine recommends against relating this to the `name` (instead it can a good idea to use the id to indicate this node’s position). It must match the regex `^[A-Za-z0-9][A-Za-z0-9-_.]*$` and its length must not exceed 256 characters. Required for create or update requests.

 |
| 

`name`

 | 

`typing.Optional[str]`

 | 

A human readable identifier for this Parameter Value Hierarchy Node. It must match the regex `^[A-Za-z0-9][ A-Za-z0-9-_]*$` and its length must not exceed 256 characters. The `name` needs to be unique among nodes with a common (or no) `parent_id`. Required for create requests.

 |
| 

`parent_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node which is the parent of this Parameter Value Hierarchy Node. This is only empty for a top-level Parameter Value Hierarchy Node.

 |
| 

`metadata`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Key value map of additional, non-structured Parameter Value Hierarchy Node details.

The details must not include: - Any image data, including any KYC collateral such as passport, licence or other images. These must be stored in a separate repository outside of Vault. - Any data that is classified as PII data. The details cannot be utilised by Smart Contracts to drive any type of product behaviour.

Max size: 2kB, Max key length: 128 characters

 |

## [](#core_api_v1_parameters_parametervaluehierarchynodeupdatefields "Copy link to heading")core\_api.v1.parameters.ParameterValueHierarchyNodeUpdateFields

*type: Class*

ParameterValueHierarchyNodeUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`typing.Optional[str]`

 | 

A human readable identifier for this Parameter Value Hierarchy Node. It must match the regex `^[A-Za-z0-9][ A-Za-z0-9-_]*$` and its length must not exceed 256 characters. The `name` needs to be unique among nodes with a common (or no) `parent_id`. Required for create requests.

 |
| 

`metadata`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Key value map of additional, non-structured Parameter Value Hierarchy Node details.

The details must not include: - Any image data, including any KYC collateral such as passport, licence or other images. These must be stored in a separate repository outside of Vault. - Any data that is classified as PII data. The details cannot be utilised by Smart Contracts to drive any type of product behaviour.

Max size: 2kB, Max key length: 128 characters

 |

## [](#core_api_v1_parameters_parametervalueiscancelledupdateoptions "Copy link to heading")core\_api.v1.parameters.ParameterValueIsCancelledUpdateOptions

*type: Class*

These allow controlling the behaviour of the update when cancelling the Parameter Value.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`skip_pre_parameter_change_hook`

 | 

`typing.Optional[bool]`

 | 

Do not run the Smart Contract’s pre parameter change hook for this Parameter Value update.

 |

## [](#core_api_v1_parameters_parametervalueupdatefields "Copy link to heading")core\_api.v1.parameters.ParameterValueUpdateFields

*type: Class*

ParameterValueUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Unique UUID identifier for the Parameter Value. Read-only and set to a random UUID on creation when using `POST /v1/parameter-values`. When using `POST /v1/contracts:simulate` it can optionally be specified in the request to allow the Parameter Value to be updated later in the simulation.

 |
| 

`effective_to_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time until which the Parameter Value remains effective (excluding this time), in UTC. If this field is left empty or omitted, the Parameter Value is effective indefinitely. Vault will automatically update this field if the Parameter Value is superseded by another Parameter Value for the same Parameter and Owner. Formatted as an RFC3339 timestamp. Will be truncated to microsecond precision.

 |
| 

`is_cancelled`

 | 

`typing.Optional[bool]`

 | 

Indicates whether this Parameter Value has been cancelled before it became effective. This field can be explicitly set to true via an update, providing that the `effective_from_timestamp` is in the future.

 |

## [](#core_api_v1_parameters_stringconstraint "Copy link to heading")core\_api.v1.parameters.StringConstraint

*type: Class*

StringConstraint

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_length`

 | 

`class 'int'`

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

`max_length`

 | 

`class 'int'`

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |

## [](#core_api_v1_parameters_stringconstraintcreatefields "Copy link to heading")core\_api.v1.parameters.StringConstraintCreateFields

*type: Class*

StringConstraintCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_length`

 | 

`typing.Optional[int]`

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

`max_length`

 | 

`typing.Optional[int]`

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |

## [](#core_api_v1_parameters_updateparametervaluehierarchynoderequest "Copy link to heading")core\_api.v1.parameters.UpdateParameterValueHierarchyNodeRequest

*type: Class*

UpdateParameterValueHierarchyNodeRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent.

 |
| 

`parameter_value_hierarchy_node`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_hierarchy_node_update_fields.ParameterValueHierarchyNodeUpdateFields]`

 | 

The Parameter Value Hierarchy Node to update. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

The paths of the resource to update. Values will be taken from the `parameter_value_hierarchy_node` field. The only allowed fields are `name` and `metadata`. Metadata entries can be removed by specifying a key with an empty value. Keys with values will create new entries or replace existing ones. Any existing entries with keys not in the request will not be modified. Required.

 |

## [](#core_api_v1_parameters_updateparametervaluerequest "Copy link to heading")core\_api.v1.parameters.UpdateParameterValueRequest

*type: Class*

UpdateParameterValueRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID used to ensure this request is idempotent. Required.

 |
| 

`parameter_value`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_update_fields.ParameterValueUpdateFields]`

 | 

The Parameter Value to update. The only supported updates are modifying an `effective_to_timestamp`, or setting a Parameter Value to `is_cancelled` to cancel it before it becomes effective. Parameter Values can only have their `effective_to_timestamp` set to a time in the future. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

The paths of the resource to update. Values will be taken from the `parameter_value` field. The only permitted fields are `effective_to_timestamp` and `is_cancelled`. Required.

 |
| 

`effective_to_timestamp_update_options`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_effective_to_timestamp_update_options.ParameterValueEffectiveToTimestampUpdateOptions]`

 | 

Options to define how Vault should process an update to the `effective_to_timestamp`. Options set will only take effect if `effective_to_timestamp` is included in the `update_mask`.

 |
| 

`is_cancelled_update_options`

 | 

`typing.Optional[vc_api.core_api.v1.parameters._parameter_value_is_cancelled_update_options.ParameterValueIsCancelledUpdateOptions]`

 | 

Options to define how Vault should process the cancellation of the Parameter Value. Options set will only take effect if the request cancels the Parameter Value.

 |

## [](#core_api_v1_parameters_value "Copy link to heading")core\_api.v1.parameters.Value

*type: Class*

Value

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_value`

 | 

`typing.Optional[str]`

 | 

The value of a string Parameter.

 |
| 

`decimal_value`

 | 

`typing.Optional[str]`

 | 

The value of a decimal Parameter.

 |
| 

`enumeration_value`

 | 

`typing.Optional[str]`

 | 

The value of an enumeration Parameter.

 |
| 

`date_time_value`

 | 

`typing.Optional[datetime.datetime]`

 | 

The value of a date-time Parameter, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`account_id_value`

 | 

`typing.Optional[str]`

 | 

The ID of an Account, may be Internal or Customer.

 |

## [](#core_api_v1_parameters_valuebatchcreateparametervaluesrequest "Copy link to heading")core\_api.v1.parameters.ValueBatchCreateParameterValuesRequest

*type: Class*

ValueBatchCreateParameterValuesRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_value`

 | 

`typing.Optional[str]`

 | 

The value of a string Parameter.

 |
| 

`decimal_value`

 | 

`typing.Optional[str]`

 | 

The value of a decimal Parameter.

 |
| 

`enumeration_value`

 | 

`typing.Optional[str]`

 | 

The value of an enumeration Parameter.

 |
| 

`date_time_value`

 | 

`typing.Optional[datetime.datetime]`

 | 

The value of a date-time Parameter, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`account_id_value`

 | 

`typing.Optional[str]`

 | 

The ID of an Account, may be Internal or Customer.

 |

## [](#core_api_v1_parameters_valuecreatefields "Copy link to heading")core\_api.v1.parameters.ValueCreateFields

*type: Class*

ValueCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_value`

 | 

`typing.Optional[str]`

 | 

The value of a string Parameter.

 |
| 

`decimal_value`

 | 

`typing.Optional[str]`

 | 

The value of a decimal Parameter.

 |
| 

`enumeration_value`

 | 

`typing.Optional[str]`

 | 

The value of an enumeration Parameter.

 |
| 

`date_time_value`

 | 

`typing.Optional[datetime.datetime]`

 | 

The value of a date-time Parameter, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`account_id_value`

 | 

`typing.Optional[str]`

 | 

The ID of an Account, may be Internal or Customer.

 |

## [](#core_api_v1_parameters_vieweffectiveparametervaluesresponse "Copy link to heading")core\_api.v1.parameters.ViewEffectiveParameterValuesResponse

*type: Class*

ViewEffectiveParameterValuesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`effective_parameter_values`

 | 

`typing.List[vc_api.core_api.v1.parameters._effective_parameter_value.EffectiveParameterValue]`

 | 

The Effective Parameter Values returned based on the specified options. Effective Parameter Values are sorted by ascending `parameter_id`, `from_timestamp`.

 |
| 

`snapshot_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

All the Parameter Values are returned as they were at `snapshot_timestamp`. Parameter Values that have been mutated after the `snapshot_timestamp` may be incorrectly represented.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the next page of Effective Parameter Values. If empty, the given page is the last page.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The page token which can be used to retrieve the previous page of Effective Parameter Values. If empty, the given page is the first page.

 |

## [](#core_api_v1_params_accountfield "Copy link to heading")core\_api.v1.params.AccountField

*type: Class*

AccountField

Signature of the constructor for this class:

## [](#core_api_v1_params_date "Copy link to heading")core\_api.v1.params.Date

*type: Class*

Date

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`year`

 | 

`class 'int'`

 | 

The year of the specified date.

 |
| 

`month`

 | 

`class 'int'`

 | 

The month of the specified date.

 |
| 

`day`

 | 

`class 'int'`

 | 

The day of the specified date.

 |

## [](#core_api_v1_params_datecreatefields "Copy link to heading")core\_api.v1.params.DateCreateFields

*type: Class*

DateCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`year`

 | 

`typing.Optional[int]`

 | 

The year of the specified date.

 |
| 

`month`

 | 

`typing.Optional[int]`

 | 

The month of the specified date.

 |
| 

`day`

 | 

`typing.Optional[int]`

 | 

The day of the specified date.

 |

## [](#core_api_v1_params_datefield "Copy link to heading")core\_api.v1.params.DateField

*type: Class*

DateField

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`enum 'DateType'`

 | 

The date type of the parameter.

 |
| 

`start`

 | 

`typing.Optional[vc_api.core_api.v1.params._date.Date]`

 | 

The start date of the parameter.

 |
| 

`end`

 | 

`typing.Optional[vc_api.core_api.v1.params._date.Date]`

 | 

The end date of the parameter.

 |

## [](#core_api_v1_params_datefieldcreatefields "Copy link to heading")core\_api.v1.params.DateFieldCreateFields

*type: Class*

DateFieldCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_type.DateType]`

 | 

The date type of the parameter.

 |
| 

`start`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_create_fields.DateCreateFields]`

 | 

The start date of the parameter.

 |
| 

`end`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_create_fields.DateCreateFields]`

 | 

The end date of the parameter.

 |

## [](#core_api_v1_params_datetype "Copy link to heading")core\_api.v1.params.DateType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`DATE_TYPE_UNKNOWN`

 |  |
| 

`DATE_TYPE_RELATIVE`

 |  |
| 

`DATE_TYPE_ABSOLUTE`

 |  |

## [](#core_api_v1_params_denominationfield "Copy link to heading")core\_api.v1.params.DenominationField

*type: Class*

DenominationField

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`permitted_denominations`

 | 

`typing.List[str]`

 | 

ISO 4217 denomination codes - empty means any denomination.

 |

## [](#core_api_v1_params_denominationfieldcreatefields "Copy link to heading")core\_api.v1.params.DenominationFieldCreateFields

*type: Class*

DenominationFieldCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`permitted_denominations`

 | 

`typing.Optional[typing.List[str]]`

 | 

ISO 4217 denomination codes - empty means any denomination.

 |

## [](#core_api_v1_params_level "Copy link to heading")core\_api.v1.params.Level

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`LEVEL_UNKNOWN`

 |  |
| 

`LEVEL_GLOBAL`

 |  |
| 

`LEVEL_PRODUCT`

 |  |
| 

`LEVEL_INSTANCE`

 |  |

## [](#core_api_v1_params_numberfield "Copy link to heading")core\_api.v1.params.NumberField

*type: Class*

NumberField

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value_type`

 | 

`enum 'NumberFieldDisplayStyle'`

 | 

The value type of the number field.

 |
| 

`min_value`

 | 

`class 'str'`

 | 

The minimum value allowed for the number field.

 |
| 

`max_value`

 | 

`class 'str'`

 | 

The maximum value allowed for the number field.

 |
| 

`step`

 | 

`class 'str'`

 | 

The incrementation step for the number field.

 |

## [](#core_api_v1_params_numberfieldcreatefields "Copy link to heading")core\_api.v1.params.NumberFieldCreateFields

*type: Class*

NumberFieldCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value_type`

 | 

`typing.Optional[vc_api.core_api.v1.params._number_field_display_style.NumberFieldDisplayStyle]`

 | 

The value type of the number field.

 |
| 

`min_value`

 | 

`typing.Optional[str]`

 | 

The minimum value allowed for the number field.

 |
| 

`max_value`

 | 

`typing.Optional[str]`

 | 

The maximum value allowed for the number field.

 |
| 

`step`

 | 

`typing.Optional[str]`

 | 

The incrementation step for the number field.

 |

## [](#core_api_v1_params_numberfielddisplaystyle "Copy link to heading")core\_api.v1.params.NumberFieldDisplayStyle

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`NUMBER_FIELD_DISPLAY_STYLE_NOT_SPECIFIED`

 |  |
| 

`NUMBER_FIELD_DISPLAY_STYLE_PLAIN`

 |  |
| 

`NUMBER_FIELD_DISPLAY_STYLE_PERCENTAGE`

 |  |
| 

`NUMBER_FIELD_DISPLAY_STYLE_MONEY`

 |  |
| 

`NUMBER_FIELD_DISPLAY_STYLE_MONTHS`

 |  |

## [](#core_api_v1_params_param "Copy link to heading")core\_api.v1.params.Param

*type: Class*

Param

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`class 'str'`

 | 

The name of the parameter.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The name of the parameter to be displayed in the UI.

 |
| 

`description`

 | 

`class 'str'`

 | 

The description of the parameter.

 |
| 

`value`

 | 

`class 'str'`

 | 

The current value of the parameter, populated only for product level parameters.

 |
| 

`default_value`

 | 

`class 'str'`

 | 

The default value of the parameter. This will only be used if an AccountUpdate or AccountMigration converts an Account to a ProductVersion that introduces this parameter. It will not be used as a default if an Account is created on a ProductVersion which uses this parameter.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp the parameter is effective from in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`level`

 | 

`enum 'Level'`

 | 

The level the parameter is effective at.

 |
| 

`update_permission`

 | 

`enum 'UpdatePermission'`

 | 

The permission level required to update the parameter.

 |
| 

`number`

 | 

`typing.Optional[vc_api.core_api.v1.params._number_field.NumberField]`

 | 

The parameter is a number type.

 |
| 

`account`

 | 

`typing.Optional[vc_api.core_api.v1.params._account_field.AccountField]`

 | 

The parameter is an account type.

 |
| 

`values`

 | 

`typing.Optional[vc_api.core_api.v1.params._value_choice_field.ValueChoiceField]`

 | 

The parameter is a values type.

 |
| 

`denomination`

 | 

`typing.Optional[vc_api.core_api.v1.params._denomination_field.DenominationField]`

 | 

The parameter is a denomination type.

 |
| 

`date`

 | 

`typing.Optional[vc_api.core_api.v1.params._date_field.DateField]`

 | 

The parameter is a date type.

 |
| 

`str`

 | 

`typing.Optional[vc_api.core_api.v1.params._string_field.StringField]`

 | 

The parameter is a string type.

 |
| 

`derived`

 | 

`class 'bool'`

 | 

Indicates whether this parameter is derived or not. Only applicable to instance-level parameters.

 |
| 

`is_optional`

 | 

`class 'bool'`

 | 

Indicates whether this parameter value is optional or not.

 |

## [](#core_api_v1_params_paramcreatefields "Copy link to heading")core\_api.v1.params.ParamCreateFields

*type: Class*

ParamCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`typing.Optional[str]`

 | 

The name of the parameter.

 |
| 

`value`

 | 

`typing.Optional[str]`

 | 

The current value of the parameter, populated only for product level parameters.

 |

## [](#core_api_v1_params_paramupdatefields "Copy link to heading")core\_api.v1.params.ParamUpdateFields

*type: Class*

ParamUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`typing.Optional[str]`

 | 

The name of the parameter.

 |
| 

`value`

 | 

`typing.Optional[str]`

 | 

The current value of the parameter, populated only for product level parameters.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp the parameter is effective from in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_params_stringfield "Copy link to heading")core\_api.v1.params.StringField

*type: Class*

StringField

Signature of the constructor for this class:

## [](#core_api_v1_params_stringfieldcreatefields "Copy link to heading")core\_api.v1.params.StringFieldCreateFields

*type: Class*

StringFieldCreateFields

Signature of the constructor for this class:

## [](#core_api_v1_params_updatepermission "Copy link to heading")core\_api.v1.params.UpdatePermission

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`UPDATE_PERMISSION_UNKNOWN`

 |  |
| 

`UPDATE_PERMISSION_FIXED`

 |  |
| 

`UPDATE_PERMISSION_OPS_EDITABLE`

 |  |
| 

`UPDATE_PERMISSION_CUSTOMER_EDITABLE`

 |  |
| 

`UPDATE_PERMISSION_CUSTOMER_EDITABLE_WITH_OPS_PERMISSION`

 |  |

## [](#core_api_v1_params_valuechoice "Copy link to heading")core\_api.v1.params.ValueChoice

*type: Class*

ValueChoice

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`class 'str'`

 | 

The value of the value choice entry.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The name of the value choice displayed to the bank.

 |

## [](#core_api_v1_params_valuechoicefield "Copy link to heading")core\_api.v1.params.ValueChoiceField

*type: Class*

ValueChoiceField

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`values`

 | 

`typing.List[vc_api.core_api.v1.params._value_choice.ValueChoice]`

 | 

A list of value choices for this parameter.

 |

## [](#core_api_v1_payment_devices_batchgetpaymentdevicelinksresponse "Copy link to heading")core\_api.v1.payment\_devices.BatchGetPaymentDeviceLinksResponse

*type: Class*

BatchGetPaymentDeviceLinksResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_links`

 | 

`typing.Dict[str, vc_api.core_api.v1.payment_devices._payment_device_link.PaymentDeviceLink]`

 | 

Map of requested ids to their payment device links.

 |

## [](#core_api_v1_payment_devices_batchgetpaymentdevicesresponse "Copy link to heading")core\_api.v1.payment\_devices.BatchGetPaymentDevicesResponse

*type: Class*

BatchGetPaymentDevicesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_devices`

 | 

`typing.Dict[str, vc_api.core_api.v1.payment_devices._payment_device.PaymentDevice]`

 | 

Map of requested ids to their payment device.

 |

## [](#core_api_v1_payment_devices_createpaymentdevicelinkrequest "Copy link to heading")core\_api.v1.payment\_devices.CreatePaymentDeviceLinkRequest

*type: Class*

CreatePaymentDeviceLinkRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_link`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_link_create_fields.PaymentDeviceLinkCreateFields]`

 | 

The payment device link to create. The provided account must have status PENDING, OPEN or PENDING\_CLOSURE.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure this request is idempotent. Required.

 |

## [](#core_api_v1_payment_devices_createpaymentdevicerequest "Copy link to heading")core\_api.v1.payment\_devices.CreatePaymentDeviceRequest

*type: Class*

CreatePaymentDeviceRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_create_fields.PaymentDeviceCreateFields]`

 | 

The payment device to create.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure this request is idempotent. Required.

 |

## [](#core_api_v1_payment_devices_listpaymentdevicelinksrequest "Copy link to heading")core\_api.v1.payment\_devices.ListPaymentDeviceLinksRequest

*type: Class*

apilint:disable:next LIST\_REQUEST\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`tokens`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of payment device link tokens.

 |
| 

`payment_device_ids`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of payment device IDs.

 |
| 

`account_ids`

 | 

`typing.Optional[typing.List[str]]`

 | 

List of account IDs.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Maximum start timestamp of listed links. Optional. Defaults to current time. Must be formatted as an RFC3339 timestamp.

 |
| 

`include_inactive`

 | 

`typing.Optional[bool]`

 | 

Indicates whether to include inactive payment device links in the response.

 |

## [](#core_api_v1_payment_devices_listpaymentdevicelinksresponse "Copy link to heading")core\_api.v1.payment\_devices.ListPaymentDeviceLinksResponse

*type: Class*

apilint:disable:next LIST\_RESPONSE\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_links`

 | 

`typing.List[vc_api.core_api.v1.payment_devices._payment_device_link.PaymentDeviceLink]`

 | 

List of matching payment device links. Items are ordered by start\_timestamp in descending order.

 |

## [](#core_api_v1_payment_devices_paymentdevice "Copy link to heading")core\_api.v1.payment\_devices.PaymentDevice

*type: Class*

Generic object to represent an instrument that can originate or/and receive payments Payment devices are immutable except for the status which reflects whether the payment device can be linked to accounts using payment device tokens or not

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Caller injected or Vault auto-generated unique ID for payment device. Optional. When auto-generated, this is a UUID in the canonical 8-4-4-4-12 form.

 |
| 

`routing_info`

 | 

`typing.Dict[str, str]`

 | 

Map for caller to populate with routing information for reference when receiving/originating payment. Optional.

 |
| 

`status`

 | 

`enum 'PaymentDeviceStatus'`

 | 

Incremental payment device status. Required.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Create timestamp. Differs from effective timestamp if created in pending, in UTC. Output only. Formatted as an RFC3339 timestamp.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the payment device became active if the value is historic, or when the payment device will become active if the value is in the future, in UTC. Defaults to current time when creating a payment device in `PAYMENT_DEVICE_STATUS_ACTIVE` status. Required for creating a payment device with status `PAYMENT_DEVICE_STATUS_INACTIVE`, optional for other create requests, and output only otherwise. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the payment device became inactive if the value is historic, or when the payment device will become inactive if the value is in the future. Required for creating a payment device with status `PAYMENT_DEVICE_STATUS_INACTIVE`, optional for other create requests, and output only otherwise. Formatted as an RFC3339 timestamp in UTC.

 |
| 

`tags`

 | 

`typing.List[str]`

 | 

Tags assigned to this payment device. Optional for creation; otherwise this is output only.

 |

## [](#core_api_v1_payment_devices_paymentdevicecreatefields "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceCreateFields

*type: Class*

Generic object to represent an instrument that can originate or/and receive payments Payment devices are immutable except for the status which reflects whether the payment device can be linked to accounts using payment device tokens or not

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Caller injected or Vault auto-generated unique ID for payment device. Optional. When auto-generated, this is a UUID in the canonical 8-4-4-4-12 form.

 |
| 

`routing_info`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Map for caller to populate with routing information for reference when receiving/originating payment. Optional.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_status.PaymentDeviceStatus]`

 | 

Incremental payment device status. Required.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the payment device became active if the value is historic, or when the payment device will become active if the value is in the future, in UTC. Defaults to current time when creating a payment device in `PAYMENT_DEVICE_STATUS_ACTIVE` status. Required for creating a payment device with status `PAYMENT_DEVICE_STATUS_INACTIVE`, optional for other create requests, and output only otherwise. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the payment device became inactive if the value is historic, or when the payment device will become inactive if the value is in the future. Required for creating a payment device with status `PAYMENT_DEVICE_STATUS_INACTIVE`, optional for other create requests, and output only otherwise. Formatted as an RFC3339 timestamp in UTC.

 |
| 

`tags`

 | 

`typing.Optional[typing.List[str]]`

 | 

Tags assigned to this payment device. Optional for creation; otherwise this is output only.

 |

## [](#core_api_v1_payment_devices_paymentdevicelink "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceLink

*type: Class*

Represents a link between a payment device and an account via a token. Both payment devices and accounts can be connected via multiple such links. A payment device token can be associated with a single link at a time and moved across links. Movement can happen once a link has been soft deleted(or detokenised); the link will be made inactive and the token it used to held can be reused to create a new payment device link.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A caller-injected or Vault auto-generated unique ID for the payment device link. When auto-generated, this is a UUID in the canonical 8-4-4-4-12 form.

 |
| 

`token`

 | 

`class 'str'`

 | 

Token to identify this link. It has to be unique across active links. Required for create requests.

 |
| 

`payment_device_id`

 | 

`class 'str'`

 | 

Payment device id this token connects an account to. Required for create requests.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

Account ID this token connects a payment device to. Required for create requests.

 |
| 

`status`

 | 

`enum 'PaymentDeviceLinkStatus'`

 | 

The status of the payment device link. Must have a value of `PAYMENT_DEVICE_LINK_STATUS_ACTIVE` or `PAYMENT_DEVICE_LINK_STATUS_INACTIVE` for create requests. Required for create requests.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the link became active, in UTC. Required for create requests of payment device links with status `PAYMENT_DEVICE_LINK_STATUS_INACTIVE`, output only otherwise. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the link became inactive, in UTC. Required for create requests of payment device links with status `PAYMENT_DEVICE_LINK_STATUS_INACTIVE`, output only otherwise. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_payment_devices_paymentdevicelinkcreatefields "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceLinkCreateFields

*type: Class*

Represents a link between a payment device and an account via a token. Both payment devices and accounts can be connected via multiple such links. A payment device token can be associated with a single link at a time and moved across links. Movement can happen once a link has been soft deleted(or detokenised); the link will be made inactive and the token it used to held can be reused to create a new payment device link.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A caller-injected or Vault auto-generated unique ID for the payment device link. When auto-generated, this is a UUID in the canonical 8-4-4-4-12 form.

 |
| 

`token`

 | 

`typing.Optional[str]`

 | 

Token to identify this link. It has to be unique across active links. Required for create requests.

 |
| 

`payment_device_id`

 | 

`typing.Optional[str]`

 | 

Payment device id this token connects an account to. Required for create requests.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

Account ID this token connects a payment device to. Required for create requests.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_link_status.PaymentDeviceLinkStatus]`

 | 

The status of the payment device link. Must have a value of `PAYMENT_DEVICE_LINK_STATUS_ACTIVE` or `PAYMENT_DEVICE_LINK_STATUS_INACTIVE` for create requests. Required for create requests.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the link became active, in UTC. Required for create requests of payment device links with status `PAYMENT_DEVICE_LINK_STATUS_INACTIVE`, output only otherwise. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the link became inactive, in UTC. Required for create requests of payment device links with status `PAYMENT_DEVICE_LINK_STATUS_INACTIVE`, output only otherwise. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_payment_devices_paymentdevicelinkstatus "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceLinkStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PAYMENT_DEVICE_LINK_STATUS_UNKNOWN`

 |  |
| 

`PAYMENT_DEVICE_LINK_STATUS_ACTIVE`

 |  |
| 

`PAYMENT_DEVICE_LINK_STATUS_INACTIVE`

 |  |

## [](#core_api_v1_payment_devices_paymentdevicelinkupdatefields "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceLinkUpdateFields

*type: Class*

Represents a link between a payment device and an account via a token. Both payment devices and accounts can be connected via multiple such links. A payment device token can be associated with a single link at a time and moved across links. Movement can happen once a link has been soft deleted(or detokenised); the link will be made inactive and the token it used to held can be reused to create a new payment device link.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_link_status.PaymentDeviceLinkStatus]`

 | 

The status of the payment device link. Must have a value of `PAYMENT_DEVICE_LINK_STATUS_ACTIVE` or `PAYMENT_DEVICE_LINK_STATUS_INACTIVE` for create requests. Required for create requests.

 |

## [](#core_api_v1_payment_devices_paymentdevicestatus "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PAYMENT_DEVICE_STATUS_UNKNOWN`

 |  |
| 

`PAYMENT_DEVICE_STATUS_PENDING`

 |  |
| 

`PAYMENT_DEVICE_STATUS_ACTIVE`

 |  |
| 

`PAYMENT_DEVICE_STATUS_INACTIVE`

 |  |

## [](#core_api_v1_payment_devices_paymentdeviceupdatefields "Copy link to heading")core\_api.v1.payment\_devices.PaymentDeviceUpdateFields

*type: Class*

Generic object to represent an instrument that can originate or/and receive payments Payment devices are immutable except for the status which reflects whether the payment device can be linked to accounts using payment device tokens or not

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_status.PaymentDeviceStatus]`

 | 

Incremental payment device status. Required.

 |

## [](#core_api_v1_payment_devices_updatepaymentdevicelinkrequest "Copy link to heading")core\_api.v1.payment\_devices.UpdatePaymentDeviceLinkRequest

*type: Class*

UpdatePaymentDeviceLinkRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_link`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_link_update_fields.PaymentDeviceLinkUpdateFields]`

 | 

Payment device to update. Currently only 'status' is supported.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure this request is idempotent. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask to indicate which fields on the resource to update. Required. Valid update masks are: "status".

 |

## [](#core_api_v1_payment_devices_updatepaymentdevicerequest "Copy link to heading")core\_api.v1.payment\_devices.UpdatePaymentDeviceRequest

*type: Class*

UpdatePaymentDeviceRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device`

 | 

`typing.Optional[vc_api.core_api.v1.payment_devices._payment_device_update_fields.PaymentDeviceUpdateFields]`

 | 

The payment device to update.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure this request is idempotent. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask to indicate which fields on the resource to update. Required. Valid update masks are: "status".

 |
| 

`overrides`

 | 

`typing.Optional[vc_api.core_api.v1.common._overrides.Overrides]`

 | 

This lets the caller override PREVENT\_CLOSURE restrictions on a payment device; no other restriction types can be overridden.

 |

## [](#core_api_v1_plans_accountplanassoc "Copy link to heading")core\_api.v1.plans.AccountPlanAssoc

*type: Class*

AccountPlanAssoc

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID for an Account Plan Association.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The account ID associated with the Plan.

 |
| 

`plan_id`

 | 

`class 'str'`

 | 

The Plan ID associated with the account.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when this Account Plan Association was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when this Account Plan Association became active, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when this Account Plan Association became inactive, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`status`

 | 

`enum 'AccountPlanAssocStatus'`

 | 

The status of the Account Plan Association.

 |

## [](#core_api_v1_plans_accountplanassocstatus "Copy link to heading")core\_api.v1.plans.AccountPlanAssocStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_PLAN_ASSOC_STATUS_UNKNOWN`

 |  |
| 

`ACCOUNT_PLAN_ASSOC_STATUS_ACTIVE`

 |  |
| 

`ACCOUNT_PLAN_ASSOC_STATUS_INACTIVE`

 |  |

## [](#core_api_v1_plans_activationupdate "Copy link to heading")core\_api.v1.plans.ActivationUpdate

*type: Class*

ActivationUpdate

Signature of the constructor for this class:

## [](#core_api_v1_plans_associateaccountupdate "Copy link to heading")core\_api.v1.plans.AssociateAccountUpdate

*type: Class*

AssociateAccountUpdate

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`class 'str'`

 | 

The ID of the account to associate with the Plan.

 |

## [](#core_api_v1_plans_batchgetaccountplanassocsresponse "Copy link to heading")core\_api.v1.plans.BatchGetAccountPlanAssocsResponse

*type: Class*

BatchGetAccountPlanAssocsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_plan_assocs`

 | 

`typing.Dict[str, vc_api.core_api.v1.plans._account_plan_assoc.AccountPlanAssoc]`

 | 

A map of the Account Plan Association ID to the Account Plan Association.

 |

## [](#core_api_v1_plans_batchgetplanupdatesresponse "Copy link to heading")core\_api.v1.plans.BatchGetPlanUpdatesResponse

*type: Class*

BatchGetPlanUpdatesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`plan_updates`

 | 

`typing.Dict[str, vc_api.core_api.v1.plans._plan_update.PlanUpdate]`

 | 

A map of the Plan Update ID to the Plan Update.

 |

## [](#core_api_v1_plans_batchgetplansresponse "Copy link to heading")core\_api.v1.plans.BatchGetPlansResponse

*type: Class*

BatchGetPlansResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`plans`

 | 

`typing.Dict[str, vc_api.core_api.v1.plans._plan.Plan]`

 | 

A map of the plan ID to the Plan.

 |

## [](#core_api_v1_plans_closureupdate "Copy link to heading")core\_api.v1.plans.ClosureUpdate

*type: Class*

ClosureUpdate

Signature of the constructor for this class:

## [](#core_api_v1_plans_disassociateaccountupdate "Copy link to heading")core\_api.v1.plans.DisassociateAccountUpdate

*type: Class*

DisassociateAccountUpdate

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_plan_assoc_id`

 | 

`class 'str'`

 | 

The ID of the Account Plan Association to dissasociate.

 |

## [](#core_api_v1_plans_listaccountplanassocsresponse "Copy link to heading")core\_api.v1.plans.ListAccountPlanAssocsResponse

*type: Class*

ListAccountPlanAssocsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_plan_assocs`

 | 

`typing.List[vc_api.core_api.v1.plans._account_plan_assoc.AccountPlanAssoc]`

 | 

A list of matching Plans, ordered by descending `create_timestamp`.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_plans_listplanschedulesresponse "Copy link to heading")core\_api.v1.plans.ListPlanSchedulesResponse

*type: Class*

ListPlanSchedulesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`plan_schedules`

 | 

`typing.List[vc_api.core_api.v1.plans._plan_schedule.PlanSchedule]`

 | 

A list of matching Plan Schedules, ordered by ascending `create_timestamp` then by ascending `id`. Note: By default, only associated Plan Schedules are returned. The set of associated Plan Schedules forms a view of the current state of the Event Types for the Plan. To view plan schedules that are no longer associated, for example, after the contract directive `update_event_type` is executed, set `include_disassociated` to `true` to return disassociated plan schedules.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_plans_listplanupdatesresponse "Copy link to heading")core\_api.v1.plans.ListPlanUpdatesResponse

*type: Class*

ListPlanUpdatesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`plan_updates`

 | 

`typing.List[vc_api.core_api.v1.plans._plan_update.PlanUpdate]`

 | 

A list of matching Plans, ordered by ascending `create_timestamp`.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_plans_plan "Copy link to heading")core\_api.v1.plans.Plan

*type: Class*

Plan

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID for a Plan. Optional for create requests.

 |
| 

`supervisor_contract_version_id`

 | 

`class 'str'`

 | 

The ID of the Supervisor Contract version. Required for create requests.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the Plan was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`status`

 | 

`enum 'PlanStatus'`

 | 

The status of the Plan. Optional when creating the Plan - defaults to `PLAN_STATUS_OPEN`.

 |
| 

`opening_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the Plan status was updated to `PLAN_STATUS_OPEN`, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`activation_completed_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the activation PlanUpdate for the Plan succeeded and its status was updated to `PLAN_UPDATE_STATUS_COMPLETED`, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`closing_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the Plan status was updated to `PLAN_STATUS_CLOSED`, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`closure_completed_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when the closure PlanUpdate for the Plan succeeded and its status was updated to `PLAN_UPDATE_STATUS_COMPLETED`, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`processing_group_id`

 | 

`class 'str'`

 | 

The ID of the Processing Group this plan belongs to. Can only be provided for create requests. If omitted, the Plan will be assigned to the default Processing Group.

 |
| 

`details`

 | 

`typing.Dict[str, str]`

 | 

Map of unstructured fields that hold instance-specific Plan metadata.

 |

## [](#core_api_v1_plans_planschedule "Copy link to heading")core\_api.v1.plans.PlanSchedule

*type: Class*

PlanSchedule

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Plan Schedule.

 |
| 

`plan_id`

 | 

`class 'str'`

 | 

The Plan ID associated with the Plan Schedule.

 |
| 

`name`

 | 

`class 'str'`

 | 

The name of the Plan Schedule.

 |
| 

`group_name`

 | 

`class 'str'`

 | 

The name of the group associated with the Plan Schedule.

 |
| 

`time_expression`

 | 

`class 'str'`

 | 

The expression that defines when Jobs will be run. This can be either a cron expression or a schedule method (e.g. `EndOfMonthSchedule`). The syntax for cron expressions follows [https://github.com/thought-machine/cronexpr](https://github.com/thought-machine/cronexpr) (to be used strictly for interpreting cron syntax). For constructing expressions, please refer to the smart contract documentation.

 |
| 

`schedule_tag_ids`

 | 

`typing.List[str]`

 | 

The schedule tag IDs for a given Plan Schedule.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp of when this Plan Schedule was created, in UTC. Formatted as an RFC3339 timestamp. Note: this is different from the create timestamp of the Schedule with the same ID.

 |
| 

`is_associated`

 | 

`class 'bool'`

 | 

A value used to indicate the operational relevance of the Plan Schedule to the Plan. An associated Plan Schedule (where `is_associated` is true); typically references a non-disabled Schedule (one that is not in `SCHEDULE_STATUS_DISABLED`). A disassociated Plan Schedule typically references a disabled Schedule (one that is in `SCHEDULE_STATUS_DISABLED`). There is one associated Plan Schedule per event type in the Supervisor Contract version.

 |

## [](#core_api_v1_plans_planstatus "Copy link to heading")core\_api.v1.plans.PlanStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PLAN_STATUS_UNKNOWN`

 |  |
| 

`PLAN_STATUS_PENDING`

 |  |
| 

`PLAN_STATUS_OPEN`

 |  |
| 

`PLAN_STATUS_CLOSED`

 |  |

## [](#core_api_v1_plans_planupdate "Copy link to heading")core\_api.v1.plans.PlanUpdate

*type: Class*

PlanUpdate

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID for a Plan. Optional for create requests.

 |
| 

`plan_id`

 | 

`class 'str'`

 | 

The ID of the Plan. Required for create requests.

 |
| 

`job_id`

 | 

`class 'str'`

 | 

The job ID the Plan Update belongs to.

 |
| 

`status`

 | 

`enum 'PlanUpdateStatus'`

 | 

The status of the Plan Update. Optional for create requests.

 |
| 

`associate_account_update`

 | 

`typing.Optional[vc_api.core_api.v1.plans._associate_account_update.AssociateAccountUpdate]`

 |  |
| 

`disassociate_account_update`

 | 

`typing.Optional[vc_api.core_api.v1.plans._disassociate_account_update.DisassociateAccountUpdate]`

 |  |
| 

`activation_update`

 | 

`typing.Optional[vc_api.core_api.v1.plans._activation_update.ActivationUpdate]`

 |  |
| 

`supervisor_contract_version_update`

 | 

`typing.Optional[vc_api.core_api.v1.plans._supervisor_contract_version_update.SupervisorContractVersionUpdate]`

 |  |
| 

`closure_update`

 | 

`typing.Optional[vc_api.core_api.v1.plans._closure_update.ClosureUpdate]`

 |  |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when this Plan Update was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`last_status_update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when the status was last updated, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`failure_reason`

 | 

`class 'str'`

 | 

The reason a Plan Update was not completed successfully. This will only be populated if the Plan Update status is either `PLAN_UPDATE_STATUS_REJECTED` or `PLAN_UPDATE_STATUS_ERRORED`.

 |

## [](#core_api_v1_plans_planupdatestatus "Copy link to heading")core\_api.v1.plans.PlanUpdateStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PLAN_UPDATE_STATUS_UNKNOWN`

 |  |
| 

`PLAN_UPDATE_STATUS_PENDING_EXECUTION`

 |  |
| 

`PLAN_UPDATE_STATUS_COMPLETED`

 |  |
| 

`PLAN_UPDATE_STATUS_REJECTED`

 |  |
| 

`PLAN_UPDATE_STATUS_ERRORED`

 |  |

## [](#core_api_v1_plans_schedulemigrationtype "Copy link to heading")core\_api.v1.plans.ScheduleMigrationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`SCHEDULE_MIGRATION_TYPE_RECREATE_ALL_SCHEDULES_AND_GROUPS`

 |  |
| 

`SCHEDULE_MIGRATION_TYPE_PRESERVE_SCHEDULES_IF_NO_GROUP_CHANGES`

 |  |

## [](#core_api_v1_plans_supervisorcontractversionupdate "Copy link to heading")core\_api.v1.plans.SupervisorContractVersionUpdate

*type: Class*

SupervisorContractVersionUpdate

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`supervisor_contract_version_id`

 | 

`class 'str'`

 | 

The ID of the Supervisor Contract version to update the Plan to.

 |
| 

`schedule_migration_type`

 | 

`enum 'ScheduleMigrationType'`

 | 

Specifies how existing schedules should be migrated.

Note: This field has no effect on migrations to a Supervisor Contract version on Contracts Language API version 4. \[See Plan migrations.\](/reference/plans/#plan\_migrations)

 |

## [](#core_api_v1_policy_management_batchgetpoliciesrequestincludefield "Copy link to heading")core\_api.v1.policy\_management.BatchGetPoliciesRequestIncludeField

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INCLUDE_FIELD_REGO_SOURCE`

 |  |

## [](#core_api_v1_policy_management_batchgetpoliciesresponse "Copy link to heading")core\_api.v1.policy\_management.BatchGetPoliciesResponse

*type: Class*

BatchGetPoliciesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`policies`

 | 

`typing.Dict[str, vc_api.core_api.v1.policy_management._policy.Policy]`

 | 

A map of the Policy ID to their respective Policy.

 |

## [](#core_api_v1_policy_management_listpoliciesrequestincludefield "Copy link to heading")core\_api.v1.policy\_management.ListPoliciesRequestIncludeField

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INCLUDE_FIELD_REGO_SOURCE`

 |  |

## [](#core_api_v1_policy_management_listpoliciesresponse "Copy link to heading")core\_api.v1.policy\_management.ListPoliciesResponse

*type: Class*

ListPoliciesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`policies`

 | 

`typing.List[vc_api.core_api.v1.policy_management._policy.Policy]`

 | 

A list of matching Policies, ordered alphabetically by Policy ID.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_policy_management_policy "Copy link to heading")core\_api.v1.policy\_management.Policy

*type: Class*

Policy

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The unique identifier for the Policy. Required.

 |
| 

`version`

 | 

`class 'str'`

 | 

The Policy version number.

 |
| 

`policy_schema_id`

 | 

`class 'str'`

 | 

The ID of the policy schema this Policy is associated with.

 |
| 

`description`

 | 

`class 'str'`

 | 

The human-readable description of the Policy.

 |
| 

`rego_source`

 | 

`class 'str'`

 | 

The rego policy definition. Rego Package name must be equal to the Policy ID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when the Policy was created in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp indicating when the last change to the Policy occurred in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_post_posting_republisher_batchgetpostpostingfailuresresponse "Copy link to heading")core\_api.v1.post\_posting\_republisher.BatchGetPostPostingFailuresResponse

*type: Class*

BatchGetPostPostingFailuresResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`post_posting_failures`

 | 

`typing.Dict[str, vc_api.core_api.v1.post_posting_republisher._post_posting_failure.PostPostingFailure]`

 | 

A map of Post-Posting Failure ID to Post-Posting Failures.

 |

## [](#core_api_v1_post_posting_republisher_contractexecutionbehaviour "Copy link to heading")core\_api.v1.post\_posting\_republisher.ContractExecutionBehaviour

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CONTRACT_EXECUTION_BEHAVIOUR_UNKNOWN`

 |  |
| 

`CONTRACT_EXECUTION_BEHAVIOUR_NEWEST_CONTEXT`

 |  |
| 

`CONTRACT_EXECUTION_BEHAVIOUR_RECORDED_CONTEXT`

 |  |

## [](#core_api_v1_post_posting_republisher_deletepostpostingfailureresponse "Copy link to heading")core\_api.v1.post\_posting\_republisher.DeletePostPostingFailureResponse

*type: Class*

DeletePostPostingFailureResponse

Signature of the constructor for this class:

## [](#core_api_v1_post_posting_republisher_listpostpostingfailuresresponse "Copy link to heading")core\_api.v1.post\_posting\_republisher.ListPostPostingFailuresResponse

*type: Class*

ListPostPostingFailuresResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`post_posting_failures`

 | 

`typing.List[vc_api.core_api.v1.post_posting_republisher._post_posting_failure.PostPostingFailure]`

 | 

A list of matching Post-Posting Failures, ordered by Update Count.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_post_posting_republisher_postpostingfailure "Copy link to heading")core\_api.v1.post\_posting\_republisher.PostPostingFailure

*type: Class*

PostPostingFailure

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique, service-generated UUID.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the account associated with the failed `post_posting_hook` execution.

 |
| 

`plan_id`

 | 

`typing.Optional[str]`

 | 

The ID of the plan associated with the failed `post_posting_hook` execution.

 |
| 

`posting_instruction_batch_id`

 | 

`class 'str'`

 | 

The ID of the Posting Instruction Batch that triggered the failed `post_posting_hook` execution.

 |
| 

`attempt_number`

 | 

`class 'int'`

 | 

A counter describing the number of times the Post-Posting Failure has been republished by the user. It starts at 0.

 |
| 

`status`

 | 

`enum 'PostPostingFailureStatus'`

 | 

The status of the Post-Posting Failure.

 |
| 

`failure_reason`

 | 

`class 'str'`

 | 

Contains the reason as to why the Post-Posting Failure occurred.

 |
| 

`insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp when the Post-Posting Failure was inserted into the database, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`corresponding_plan_id`

 | 

`class 'str'`

 | 

corresponding\_plan\_id is set only if this account is supervised.

 |

## [](#core_api_v1_post_posting_republisher_postpostingfailurestatus "Copy link to heading")core\_api.v1.post\_posting\_republisher.PostPostingFailureStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POST_POSTING_FAILURE_STATUS_UNKNOWN`

 |  |
| 

`POST_POSTING_FAILURE_STATUS_FAILURE`

 |  |
| 

`POST_POSTING_FAILURE_STATUS_BUFFERED`

 |  |
| 

`POST_POSTING_FAILURE_STATUS_PUBLISHED`

 |  |

## [](#core_api_v1_post_posting_republisher_republishpostpostingfailurerequest "Copy link to heading")core\_api.v1.post\_posting\_republisher.RepublishPostPostingFailureRequest

*type: Class*

RepublishPostPostingFailureRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`typing.Optional[str]`

 | 

The account ID to republish an associated Post-Posting Failure for.

 |
| 

`plan_id`

 | 

`typing.Optional[str]`

 | 

The plan ID to republish an associated Post-Posting Failure for.

 |
| 

`republish_type`

 | 

`typing.Optional[vc_api.core_api.v1.post_posting_republisher._republish_type.RepublishType]`

 | 

Chosen Republish Type. Defaults to `REPUBLISH_TYPE_REPUBLISH_SINGLE_FAILURE`.

 |
| 

`contract_execution_behaviour`

 | 

`typing.Optional[vc_api.core_api.v1.post_posting_republisher._contract_execution_behaviour.ContractExecutionBehaviour]`

 | 

The behaviour of Smart Contract execution for the republished execution.

 |

## [](#core_api_v1_post_posting_republisher_republishtype "Copy link to heading")core\_api.v1.post\_posting\_republisher.RepublishType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`REPUBLISH_TYPE_REPUBLISH_UNKNOWN`

 |  |
| 

`REPUBLISH_TYPE_REPUBLISH_SINGLE_FAILURE`

 |  |
| 

`REPUBLISH_TYPE_REPUBLISH_BLOCKED_FAILURES`

 |  |

## [](#core_api_v1_posting_instruction_batches_accountviolation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.AccountViolation

*type: Class*

-   AccountViolation describes a violation related to an account targeted by a PostingInstruction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`class 'str'`

 | 

The ID of the account affected by the violation.

 |
| 

`payment_device_token`

 | 

`class 'str'`

 | 

The payment device token affected by the violation.

 |
| 

`type`

 | 

`enum 'AccountViolationType'`

 | 

The type of violation.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

The internal account processing label affected by the violation.

 |

## [](#core_api_v1_posting_instruction_batches_accountviolationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.AccountViolationCreateFields

*type: Class*

-   AccountViolation describes a violation related to an account targeted by a PostingInstruction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the account affected by the violation.

 |
| 

`payment_device_token`

 | 

`typing.Optional[str]`

 | 

The payment device token affected by the violation.

 |
| 

`type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._account_violation_type.AccountViolationType]`

 | 

The type of violation.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

The internal account processing label affected by the violation.

 |

## [](#core_api_v1_posting_instruction_batches_accountviolationtype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.AccountViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_VIOLATION_ACCOUNT_NOT_PRESENT`

 |  |
| 

`ACCOUNT_VIOLATION_ACCOUNT_STATUS_INVALID`

 |  |
| 

`ACCOUNT_VIOLATION_UNSUPPORTED_DENOMINATION`

 |  |
| 

`ACCOUNT_VIOLATION_PAYMENT_DEVICE_INVALID`

 |  |
| 

`ACCOUNT_VIOLATION_MULTIPLE_PROCESSING_GROUPS`

 |  |
| 

`ACCOUNT_VIOLATION_INTERNAL_ACCOUNT_PROCESSING_LABEL_NOT_PRESENT`

 |  |

## [](#core_api_v1_posting_instruction_batches_authorisationadjustment "Copy link to heading")core\_api.v1.posting\_instruction\_batches.AuthorisationAdjustment

*type: Class*

-   AuthorisationAdjustment can be used to change the amount that was ring-fenced by either: - A previously accepted OutboundAuthorisation or InboundAuthorisation; or - A previous AuthorisationAdjustment. The authorisation is identified by the PostingInstruction client\_transaction\_id. For this instruction Vault will perform: - idempotency check - Posting logic checks (which verify that a previously accepted OutboundAuthorisation or InboundAuthorisation exists and the client\_transaction has not entered the clearing/release state yet) - contract execution (only for positive ring-fenced amounts) Resulting postings committed (if accepted): Postings for AuthorisationAdjustment of OutboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = amount; amount < 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING -------------------------------------------------------------------------------------- Postings for AuthorisationAdjustment of InboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = amount; amount < 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

A delta amount. The sign of the delta can be given explicitly (`"+3.40"`, `"-20"`) or implicitly if it is positive (e.g "3.40" is the same as "+3.40").

 |
| 

`replacement_amount`

 | 

`typing.Optional[str]`

 | 

A new amount, to replace the existing authorised amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`advice`

 | 

`class 'bool'`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the `target_account` for this `client_transaction`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the `internal_account` for this `client_transaction`. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`authorised_amount`

 | 

`class 'str'`

 | 

The total amount authorised for this client transaction after the accepted instruction was accepted. This field is not returned if the instruction is rejected.

 |
| 

`delta_amount`

 | 

`class 'str'`

 | 

The change the accepted instruction has made to the amount authorised for this client transaction. This field is not returned if the instruction is rejected.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_authorisationadjustmentcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.AuthorisationAdjustmentCreateFields

*type: Class*

-   AuthorisationAdjustment can be used to change the amount that was ring-fenced by either: - A previously accepted OutboundAuthorisation or InboundAuthorisation; or - A previous AuthorisationAdjustment. The authorisation is identified by the PostingInstruction client\_transaction\_id. For this instruction Vault will perform: - idempotency check - Posting logic checks (which verify that a previously accepted OutboundAuthorisation or InboundAuthorisation exists and the client\_transaction has not entered the clearing/release state yet) - contract execution (only for positive ring-fenced amounts) Resulting postings committed (if accepted): Postings for AuthorisationAdjustment of OutboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = amount; amount < 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING -------------------------------------------------------------------------------------- Postings for AuthorisationAdjustment of InboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = amount; amount < 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

A delta amount. The sign of the delta can be given explicitly (`"+3.40"`, `"-20"`) or implicitly if it is positive (e.g "3.40" is the same as "+3.40").

 |
| 

`replacement_amount`

 | 

`typing.Optional[str]`

 | 

A new amount, to replace the existing authorised amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`advice`

 | 

`typing.Optional[bool]`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the `target_account` for this `client_transaction`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the `internal_account` for this `client_transaction`. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`authorised_amount`

 | 

`typing.Optional[str]`

 | 

The total amount authorised for this client transaction after the accepted instruction was accepted. This field is not returned if the instruction is rejected.

 |
| 

`delta_amount`

 | 

`typing.Optional[str]`

 | 

The change the accepted instruction has made to the amount authorised for this client transaction. This field is not returned if the instruction is rejected.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_batchgetpostinginstructionbatchesresponse "Copy link to heading")core\_api.v1.posting\_instruction\_batches.BatchGetPostingInstructionBatchesResponse

*type: Class*

BatchGetPostingInstructionBatchesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`posting_instruction_batches`

 | 

`typing.Dict[str, vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch.PostingInstructionBatch]`

 | 

A map of posting instruction batch ID to posting instruction batches.

 |

## [](#core_api_v1_posting_instruction_batches_contractexecutionviolationtype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ContractExecutionViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CONTRACT_EXECUTION_VIOLATION_UNKNOWN`

 |  |
| 

`CONTRACT_EXECUTION_VIOLATION_BREACH_TERMS_AND_CONDITIONS`

 |  |
| 

`CONTRACT_EXECUTION_VIOLATION_INSUFFICIENT_FUNDS`

 |  |
| 

`CONTRACT_EXECUTION_VIOLATION_WRONG_DENOMINATION`

 |  |
| 

`CONTRACT_EXECUTION_VIOLATION_CLIENT_CUSTOM_REASON`

 |  |

## [](#core_api_v1_posting_instruction_batches_contractviolation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ContractViolation

*type: Class*

-   ContractViolation characterises a violation regarding contracts.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`class 'str'`

 | 

The ID of the account affected by the violation.

 |
| 

`type`

 | 

`enum 'ContractViolationType'`

 | 

The type of contract violation.

 |
| 

`reason`

 | 

`class 'str'`

 | 

The reason for a contract violation.

 |
| 

`violation_type`

 | 

`enum 'ContractExecutionViolationType'`

 | 

The type of contract violation.

 |
| 

`plan_id`

 | 

`class 'str'`

 | 

The ID of the plan affected by the violation.

 |

## [](#core_api_v1_posting_instruction_batches_contractviolationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ContractViolationCreateFields

*type: Class*

-   ContractViolation characterises a violation regarding contracts.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the account affected by the violation.

 |
| 

`type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._contract_violation_type.ContractViolationType]`

 | 

The type of contract violation.

 |
| 

`reason`

 | 

`typing.Optional[str]`

 | 

The reason for a contract violation.

 |
| 

`violation_type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._contract_execution_violation_type.ContractExecutionViolationType]`

 | 

The type of contract violation.

 |
| 

`plan_id`

 | 

`typing.Optional[str]`

 | 

The ID of the plan affected by the violation.

 |

## [](#core_api_v1_posting_instruction_batches_contractviolationtype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ContractViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`CONTRACT_VIOLATION_BREACH_TERMS_AND_CONDITIONS`

 |  |
| 

`CONTRACT_VIOLATION_INSUFFICIENT_FUNDS`

 |  |

## [](#core_api_v1_posting_instruction_batches_createpostinginstructionbatchrequest "Copy link to heading")core\_api.v1.posting\_instruction\_batches.CreatePostingInstructionBatchRequest

*type: Class*

-   CreatePostingInstructionBatchRequest defines request for the Vault Posting API. For each PostingInstructionBatchRequest published in the request topic, a PostingInstructionBatch will be published in the response topic (or DLQ if the request is garbled). The Posting API is idempotent to duplicate PostingInstructionBatchRequest, and will respond idempotently to PostingInstructionBatchRequest messages with the same <client\_id-request\_id>.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID generated by the client (payment processor) that is used for idempotency. The client must ensure a unique `request_id` is passed within their namespace (determined by `client_id`). Multiple requests with the same <\`client\_id\` - `request_id`\> will receive the same response. Required.

 |
| 

`dry_run`

 | 

`typing.Optional[bool]`

 | 

If true, the request will be executed with no side effects: -Synchronous API: A PostingInstructionBatch will be returned -Asynchronous API: A PostingInstructionBatch will be published to the response topic as defined by the Postings API Client ID In either case, no PostingInstructionBatch will be created and no PostingInstructionBatchCreatedEvent will be published to the event topic.

 |
| 

`posting_instruction_batch`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch_create_fields.PostingInstructionBatchCreateFields]`

 | 

A posting instruction batch object. Required.

 |
| 

`time_to_live`

 | 

`typing.Optional[datetime.datetime]`

 | 

\-Synchronous API: Not supported. -Asynchronous API: Specifies a time after which the request generates an error with a POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED error type. Optional.

 |
| 

`shard_key`

 | 

`typing.Optional[str]`

 | 

A key used as a best-effort lock to prevent CreatePostingInstructionBatchRequest with the same shard\_key from racing each other. For example, this can be used for multiple CreatePostingInstructionBatchRequests targeting the same account or plan to prevent retries from occurring, reducing the overall request latency. For a posting instruction batch that targets a single customer account, use the `account_id` or `payment_device_token` id. For a posting instruction batch that targets an account which is supervised, use the `plan_id`.

 |

## [](#core_api_v1_posting_instruction_batches_createpostinginstructionbatchresponse "Copy link to heading")core\_api.v1.posting\_instruction\_batches.CreatePostingInstructionBatchResponse

*type: Class*

-   CreatePostingInstructionBatchResponse defines response for the Vault Posting API.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`posting_instruction_batch`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch.PostingInstructionBatch]`

 | 

The created PostingInstructionBatch

 |
| 

`balances`

 | 

`typing.List[vc_api.core_api.v1.balances._balance.Balance]`

 | 

A list of all live balances for the account.

 |
| 

`live_balances`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._live_balance.LiveBalance]`

 | 

A list of all live value and booking balances for all of the affected customer accounts.

 |

## [](#core_api_v1_posting_instruction_batches_custominstruction "Copy link to heading")core\_api.v1.posting\_instruction\_batches.CustomInstruction

*type: Class*

-   CustomInstruction specifies a list of credits and debits to be written to the ledger. For this instruction Vault will perform the following checks: - There are 128 or fewer postings in the instruction - Net amounts credited and debited are equal - Idempotency - Account status - Account/customer/payment\_device restrictions If they are accepted the resulting postings committed are specified by the postings field.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`postings`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._posting.Posting]`

 | 

A list of postings (credits and debits). The net sum of credit postings must equal the net sum of debit postings per asset/denomination/phase.

 |

## [](#core_api_v1_posting_instruction_batches_custominstructioncreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.CustomInstructionCreateFields

*type: Class*

-   CustomInstruction specifies a list of credits and debits to be written to the ledger. For this instruction Vault will perform the following checks: - There are 128 or fewer postings in the instruction - Net amounts credited and debited are equal - Idempotency - Account status - Account/customer/payment\_device restrictions If they are accepted the resulting postings committed are specified by the postings field.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`postings`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_create_fields.PostingCreateFields]]`

 | 

A list of postings (credits and debits). The net sum of credit postings must equal the net sum of debit postings per asset/denomination/phase.

 |

## [](#core_api_v1_posting_instruction_batches_enrichment "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Enrichment

*type: Class*

-   Instruction enrichment added by the Smart Contract through pre-posting.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`details`

 | 

`typing.Dict[str, str]`

 | 

Metadata from pre-posting hook

 |

## [](#core_api_v1_posting_instruction_batches_enrichmentcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.EnrichmentCreateFields

*type: Class*

-   Instruction enrichment added by the Smart Contract through pre-posting.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Metadata from pre-posting hook

 |

## [](#core_api_v1_posting_instruction_batches_inboundauthorisation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.InboundAuthorisation

*type: Class*

-   InboundAuthorisation authorises incoming funds into the target\_account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_PENDING\_INCOMING - Cr | amount | target\_account\_id | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The authorisation amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`class 'bool'`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_inboundauthorisationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.InboundAuthorisationCreateFields

*type: Class*

-   InboundAuthorisation authorises incoming funds into the target\_account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_PENDING\_INCOMING - Cr | amount | target\_account\_id | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The authorisation amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`typing.Optional[bool]`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_inboundhardsettlement "Copy link to heading")core\_api.v1.posting\_instruction\_batches.InboundHardSettlement

*type: Class*

-   InboundHardSettlement is an instruction that authorises and settles incoming funds into the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_COMMITTED - Cr | amount | target\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The instruction amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`class 'bool'`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_inboundhardsettlementcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.InboundHardSettlementCreateFields

*type: Class*

-   InboundHardSettlement is an instruction that authorises and settles incoming funds into the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_COMMITTED - Cr | amount | target\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The instruction amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`typing.Optional[bool]`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_listpostinginstructionbatchesresponse "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ListPostingInstructionBatchesResponse

*type: Class*

ListPostingInstructionBatchesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`posting_instruction_batches`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch.PostingInstructionBatch]`

 | 

A list of posting instruction batches that match the applied filters. The results are ordered by `value_timestamp` which defaults to descending, unless otherwise specified with `order_by_direction`.

*Note - If a batch contains posting instructions with different value timestamps, only the **earliest** timestamp is considered in the filter.*

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token to retrieve the next page of results. If empty, this is the last page of results.

 |

## [](#core_api_v1_posting_instruction_batches_livebalance "Copy link to heading")core\_api.v1.posting\_instruction\_batches.LiveBalance

*type: Class*

LiveBalance contains all the live value and booking balances of an affected customer account.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`class 'str'`

 | 

The ID of the affected customer account.

 |
| 

`value_balances`

 | 

`typing.List[vc_api.core_api.v2.balances._balance.Balance]`

 | 

A list of all live value balances for the affected customer accounts.

 |
| 

`booking_balances`

 | 

`typing.List[vc_api.core_api.v2.balances._balance.Balance]`

 | 

A list of all live booking balances for the affected customer accounts.

 |

## [](#core_api_v1_posting_instruction_batches_outboundauthorisation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OutboundAuthorisation

*type: Class*

-   OutboundAuthorisation creates a funds hold (ring-fence the funds) on the the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_PENDING\_OUTGOING - Cr | amount | internal\_account\_id | PHASE\_PENDING\_OUTGOING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The authorisation amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`class 'bool'`

 | 

This can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_outboundauthorisationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OutboundAuthorisationCreateFields

*type: Class*

-   OutboundAuthorisation creates a funds hold (ring-fence the funds) on the the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_PENDING\_OUTGOING - Cr | amount | internal\_account\_id | PHASE\_PENDING\_OUTGOING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The authorisation amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`typing.Optional[bool]`

 | 

This can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_outboundhardsettlement "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OutboundHardSettlement

*type: Class*

-   OutboundHardSettlement is an instruction that authorises and settles outgoing funds from the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_COMMITTED - Cr | amount | internal\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The instruction amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`class 'bool'`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_outboundhardsettlementcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OutboundHardSettlementCreateFields

*type: Class*

-   OutboundHardSettlement is an instruction that authorises and settles outgoing funds from the target account. For this instruction Vault will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_COMMITTED - Cr | amount | internal\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The instruction amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The `internal_account_id` must be the ID of an internal account in Vault. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`advice`

 | 

`typing.Optional[bool]`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance checks. To ensure that posting instructions with `advice` set to true are excluded from the contract balance check, the flag `exclude_advice` must also be set to true. See \[Balance check\](/reference/contracts/contracts\_api\_4xx/common\_examples/#generic-balance\_check).

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the instruction’s `target_account`.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction. Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction. Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |

## [](#core_api_v1_posting_instruction_batches_override "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Override

*type: Class*

Override is used to override certain checks for a posting instruction.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restrictions`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._override_restrictions.OverrideRestrictions]`

 | 

OverrideRestrictions is used to override restriction checks for a posting instruction.

 |

## [](#core_api_v1_posting_instruction_batches_overridecreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OverrideCreateFields

*type: Class*

Override is used to override certain checks for a posting instruction.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restrictions`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._override_restrictions_create_fields.OverrideRestrictionsCreateFields]`

 | 

OverrideRestrictions is used to override restriction checks for a posting instruction.

 |

## [](#core_api_v1_posting_instruction_batches_overriderestrictions "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OverrideRestrictions

*type: Class*

OverrideRestrictions allows a caller to skip all or some restrictions from impacting a PostingInstruction. Caller may not set more than one field. As such, either the `all`, or the `restriction_set_ids` field may be set. Note that the restrictions specified here will be overridden for each account targeted by this PostingInstruction.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`all`

 | 

`class 'bool'`

 | 

The caller may choose to override all account restriction checks for a posting instruction by setting this field to true.

 |
| 

`restriction_set_ids`

 | 

`typing.List[str]`

 | 

The caller may choose to override certain account restrictions by passing its restriction set ID here.

 |

## [](#core_api_v1_posting_instruction_batches_overriderestrictionscreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.OverrideRestrictionsCreateFields

*type: Class*

OverrideRestrictions allows a caller to skip all or some restrictions from impacting a PostingInstruction. Caller may not set more than one field. As such, either the `all`, or the `restriction_set_ids` field may be set. Note that the restrictions specified here will be overridden for each account targeted by this PostingInstruction.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`all`

 | 

`typing.Optional[bool]`

 | 

The caller may choose to override all account restriction checks for a posting instruction by setting this field to true.

 |
| 

`restriction_set_ids`

 | 

`typing.Optional[typing.List[str]]`

 | 

The caller may choose to override certain account restrictions by passing its restriction set ID here.

 |

## [](#core_api_v1_posting_instruction_batches_posting "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Posting

*type: Class*

-   Posting represents a Credit/Debit of funds to an account\_id/account\_address.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit`

 | 

`class 'bool'`

 | 

Indicates whether the posting is a credit or debit.

 |
| 

`amount`

 | 

`class 'str'`

 | 

The posting amount.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The posting denomination.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the Vault account being posted to.

 |
| 

`account_address`

 | 

`class 'str'`

 | 

The address of the Vault account being posted to.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset value of the posting.

 |
| 

`phase`

 | 

`enum 'PostingPhase'`

 | 

The posting phase.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

You can use a processing label to specify an Internal Account as part of a Custom Instruction instead of directly referencing an account ID. If you use a processing label in a CustomInstruction, there must be at least one posting in the same instruction that does not use a label, using the account\_id instead. The internal account then resolves using the processing group of the account identified by this account\_id. If a posting of a CustomInstruction using a processing label does not contain an account\_id, this request will fail. You also cannot instruct a CustomInstruction in which labels are used in all its postings.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v1_posting_instruction_batches_postingcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingCreateFields

*type: Class*

-   Posting represents a Credit/Debit of funds to an account\_id/account\_address.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit`

 | 

`typing.Optional[bool]`

 | 

Indicates whether the posting is a credit or debit.

 |
| 

`amount`

 | 

`typing.Optional[str]`

 | 

The posting amount.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The posting denomination.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Vault account being posted to.

 |
| 

`account_address`

 | 

`typing.Optional[str]`

 | 

The address of the Vault account being posted to.

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset value of the posting.

 |
| 

`phase`

 | 

`typing.Optional[vc_api.core_api.v1.posting_phase._posting_phase.PostingPhase]`

 | 

The posting phase.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

You can use a processing label to specify an Internal Account as part of a Custom Instruction instead of directly referencing an account ID. If you use a processing label in a CustomInstruction, there must be at least one posting in the same instruction that does not use a label, using the account\_id instead. The internal account then resolves using the processing group of the account identified by this account\_id. If a posting of a CustomInstruction using a processing label does not contain an account\_id, this request will fail. You also cannot instruct a CustomInstruction in which labels are used in all its postings.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v1_posting_instruction_batches_postinginstruction "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstruction

*type: Class*

-   A PostingInstruction acts against a client transaction. Vault offers a set of predefined PostingInstruction types, which each following a specific set of execution rules. A PostingInstruction may result in a balanced set of committed Postings to the ledger. OutboundAuthorisations and InboundAuthorisations initiate a client transaction, which can then be acted upon, by the AuthorisationAdjustment, Settlement and Release instruction types. CustomInstruction, OutboundHardSettlement, InboundHardSettlement and Transfer instructions initiate and close a client transaction. As such, no other instructions can subsequently act on their client transactions. If accepted, a PostingInstruction is translated into a balanced set of Postings which are persisted atomically to the Posting Ledger.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Created by Vault. This uniquely identifies the posting instruction in Vault.

 |
| 

`posting_instruction_batch_id`

 | 

`class 'str'`

 | 

The ID of the posting instruction batch that created this instruction.

 |
| 

`client_transaction_id`

 | 

`class 'str'`

 | 

Set by the client. This is the ID of the client transaction this posting instruction is creating or mutating. Required.

\-For primary (initiating) posting instructions this must be unique for a given `client_id` -For secondary (subsequent, chained) posting instructions this must refer to a previous `client_transaction_id`

 |
| 

`outbound_authorisation`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._outbound_authorisation.OutboundAuthorisation]`

 | 

Used to authorise outgoing funds.

 |
| 

`inbound_authorisation`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._inbound_authorisation.InboundAuthorisation]`

 | 

Used to authorise incoming funds.

 |
| 

`authorisation_adjustment`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._authorisation_adjustment.AuthorisationAdjustment]`

 | 

Used to adjust an authorisation amount that was previously ring-fenced by an OutboundAuthorisation or InboundAuthorisation.

 |
| 

`settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._settlement.Settlement]`

 | 

Used to clear funds pre-authorised by either an OutboundAuthorisation or an InboundAuthorisation.

 |
| 

`release`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._release.Release]`

 | 

Used to release previously authorised funds.

 |
| 

`inbound_hard_settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._inbound_hard_settlement.InboundHardSettlement]`

 | 

Used to apply funds to an account that have not been previously authorised.

 |
| 

`outbound_hard_settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._outbound_hard_settlement.OutboundHardSettlement]`

 | 

Used to withdraw funds from an account without previously authorising them.

 |
| 

`transfer`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._transfer.Transfer]`

 | 

Used to transfer funds between two accounts in Vault.

 |
| 

`custom_instruction`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._custom_instruction.CustomInstruction]`

 | 

Used to apply a set of credits and debits.

 |
| 

`pics`

 | 

`typing.List[str]`

 | 

Posting Identification Codes that can be associated to posting instruction, and consumed by downstream processes.

 |
| 

`instruction_details`

 | 

`typing.Dict[str, str]`

 | 

Stores metadata related to the posting instruction. Contract execution will have access to these. If a restriction has exemption conditions and all the exemption conditions are present as key-value pairs, the restriction will not be applied to this posting instruction.

 |
| 

`committed_postings`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._posting.Posting]`

 | 

Contains the list of Postings written to the Posting ledger if the posting instruction was accepted.

 |
| 

`posting_violations`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_violation.PostingViolation]`

 | 

Captures rejection reasons caused by posting logic validity checks. For example: Cannot adjust an authorisation that has already been settled.

 |
| 

`account_violations`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._account_violation.AccountViolation]`

 | 

Captures rejection reasons and details caused by account checks. For example: Account closed.

 |
| 

`restriction_violations`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._restriction_violation.RestrictionViolation]`

 | 

Captures rejection reasons and rejection details caused by restrictions. For example: Restriction with ID 'xyz123' prevented this instruction.

 |
| 

`contract_violations`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._contract_violation.ContractViolation]`

 | 

Captures rejection reasons and rejection details caused by contract execution. For example: Insufficient funds.

 |
| 

`override`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._override.Override]`

 | 

Allows the caller to override certain checks for this PostingInstruction.

 |
| 

`transaction_code`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._transaction_code.TransactionCode]`

 | 

ISO20022 Bank Transaction Code field, a set of properties to identify underlying transaction.

 |
| 

`booking_localised_date_time`

 | 

`class 'str'`

 | 

An RFC 3339 compliant date/time string representing the `booking_timestamp` of the PostingInstructionBatch, localised into the time zone of the processing group associated with accounts referenced in this PostingInstruction. As the processing group may change over time, this field will not be populated for future-booked postings.

 |
| 

`value_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this PostingInstruction will affect balances. For most cases, including real time payments or fund movements, this does not require setting and will default to the generated `insertion_timestamp`. Should only be set for backdated and future-dated instructions and must be between 1970-01-01T00:00:00Z and the current time + 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`booking_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this PostingInstruction will be booked. For most cases, including real time payments or fund movements, this does not require setting and will default to the `insertion_timestamp`. Should only be set for back-booked and future-booked instructions and must be between 1970-01-01T00:00:00Z and the current time + 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time the posting instruction was inserted in Vault.

 |
| 

`source_insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time the posting instruction was inserted in the source core banking engine. Will always have the same value as `insertion_timestamp` unless posting instruction was migrated into Vault via the Posting Migration API.

 |
| 

`enrichments`

 | 

`typing.Dict[str, vc_api.core_api.v1.posting_instruction_batches._enrichment.Enrichment]`

 | 

Shows enrichment data for this Posting Instruction made by a Contract Pre-Posting Hook. Keyed by account ID. Output-only, except for Migration Postings API requests.

 |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatch "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatch

*type: Class*

-   PostingInstructionBatch is an atomic wrapper around PostingInstructions. All PostingInstruction within a PostingInstructionBatch are either all accepted, all rejected or all errored out.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Uniquely identifies a posting instruction batch in Vault.

 |
| 

`create_request_id`

 | 

`class 'str'`

 | 

The `request_id` of the `create-posting-instruction-batch` request.

 |
| 

`client_id`

 | 

`class 'str'`

 | 

Client Transactions must be unique for a given client ID. Required. - Asynchronous API: Uniquely identifies a client of the Postings API. This must refer to an existing Postings API Client resource, which then determines the Kafka topic to which responses are published. - Synchronous API: See the \[Postings documentation\](/api/postings\_api/#sync-using\_the\_api) for information about chaining Posting Instruction Batch requests.

 |
| 

`client_batch_id`

 | 

`class 'str'`

 | 

A correlation ID across different posting instruction batches. This drives no direct behaviour in Vault, but may be used as a filter for listing posting instruction batches. It is also used as the Kafka partition key for responses and events. The suggested use is to set the same `client_batch_id` across batches that contain posting instructions for the same financial transaction. Required.

 |
| 

`posting_instructions`

 | 

`typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_instruction.PostingInstruction]`

 | 

A non-empty list of posting instruction objects to be processed atomically. Required.

 |
| 

`batch_details`

 | 

`typing.Dict[str, str]`

 | 

Stores metadata related to the posting instruction batch resource. These details can also be retrieved in the posting instruction resource. Optional.

 |
| 

`value_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this batch’s posting instructions will affect balances. For most cases, including real time payments or fund movements, this does not require setting and will default to the generated `insertion_timestamp`. Only backdating of posting instruction batches is supported; this means that you cannot set them to be in the future, as determined by the clock of the ledger service. The earliest allowed value is 1970-01-01T00:00:00Z. Optional; defaults to the insertion timestamp in UTC.

 |
| 

`booking_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Optional. Specifies the booking time of all committed postings of this batch’s Posting Instructions. Defaults to `value_timestamp` (which, in turn, defaults to `insertion_timestamp`). Can only be used for back-booked Posting Instruction Batches (PIBs), and can only be set if `value_timestamp` is also passed in the request; in which case `booking_timestamp` must be later than `value_timestamp`.

 |
| 

`status`

 | 

`enum 'PostingInstructionBatchStatus'`

 | 

The status of the processing of the posting instruction batch.

 |
| 

`error`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch_error.PostingInstructionBatchError]`

 | 

Any errors generated while trying to process the posting instruction batch. If any errors are present, the batch errors and nothing is committed to the database.

 |
| 

`insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time this posting instruction batch was inserted in Vault.

 |
| 

`source_insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time this posting instruction batch was inserted in the source core banking engine. Will always have the same value as `insertion_timestamp` unless the posting instruction batch was migrated into Vault via the Posting Migration API.

 |
| 

`dry_run`

 | 

`class 'bool'`

 | 

If true, the `create-posting-instruction-batch` request did not have any side effects and no posting instruction batch resource was created. For more information, see \[Emulating Postings operations\](/api/postings\_api/#postings\_apis-emulating\_postings\_operations).

 |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatchcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatchCreateFields

*type: Class*

-   PostingInstructionBatch is an atomic wrapper around PostingInstructions. All PostingInstruction within a PostingInstructionBatch are either all accepted, all rejected or all errored out.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Uniquely identifies a posting instruction batch in Vault.

 |
| 

`create_request_id`

 | 

`typing.Optional[str]`

 | 

The `request_id` of the `create-posting-instruction-batch` request.

 |
| 

`client_id`

 | 

`typing.Optional[str]`

 | 

Client Transactions must be unique for a given client ID. Required. - Asynchronous API: Uniquely identifies a client of the Postings API. This must refer to an existing Postings API Client resource, which then determines the Kafka topic to which responses are published. - Synchronous API: See the \[Postings documentation\](/api/postings\_api/#sync-using\_the\_api) for information about chaining Posting Instruction Batch requests.

 |
| 

`client_batch_id`

 | 

`typing.Optional[str]`

 | 

A correlation ID across different posting instruction batches. This drives no direct behaviour in Vault, but may be used as a filter for listing posting instruction batches. It is also used as the Kafka partition key for responses and events. The suggested use is to set the same `client_batch_id` across batches that contain posting instructions for the same financial transaction. Required.

 |
| 

`posting_instructions`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_create_fields.PostingInstructionCreateFields]]`

 | 

A non-empty list of posting instruction objects to be processed atomically. Required.

 |
| 

`batch_details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Stores metadata related to the posting instruction batch resource. These details can also be retrieved in the posting instruction resource. Optional.

 |
| 

`value_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this batch’s posting instructions will affect balances. For most cases, including real time payments or fund movements, this does not require setting and will default to the generated `insertion_timestamp`. Only backdating of posting instruction batches is supported; this means that you cannot set them to be in the future, as determined by the clock of the ledger service. The earliest allowed value is 1970-01-01T00:00:00Z. Optional; defaults to the insertion timestamp in UTC.

 |
| 

`booking_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Optional. Specifies the booking time of all committed postings of this batch’s Posting Instructions. Defaults to `value_timestamp` (which, in turn, defaults to `insertion_timestamp`). Can only be used for back-booked Posting Instruction Batches (PIBs), and can only be set if `value_timestamp` is also passed in the request; in which case `booking_timestamp` must be later than `value_timestamp`.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch_status.PostingInstructionBatchStatus]`

 | 

The status of the processing of the posting instruction batch.

 |
| 

`error`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch_error_create_fields.PostingInstructionBatchErrorCreateFields]`

 | 

Any errors generated while trying to process the posting instruction batch. If any errors are present, the batch errors and nothing is committed to the database.

 |
| 

`insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time this posting instruction batch was inserted in Vault.

 |
| 

`source_insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time this posting instruction batch was inserted in the source core banking engine. Will always have the same value as `insertion_timestamp` unless the posting instruction batch was migrated into Vault via the Posting Migration API.

 |
| 

`dry_run`

 | 

`typing.Optional[bool]`

 | 

If true, the `create-posting-instruction-batch` request did not have any side effects and no posting instruction batch resource was created. For more information, see \[Emulating Postings operations\](/api/postings\_api/#postings\_apis-emulating\_postings\_operations).

 |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatcherror "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatchError

*type: Class*

-   An InstructionBatchError holds information about an error encountered while trying to process an CreatePostingInstructionBatchRequest.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`enum 'PostingInstructionBatchErrorType'`

 | 

The type of error returned.

 |
| 

`message`

 | 

`class 'str'`

 | 

Contains human-readable information about the error raised.

 |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatcherrorcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatchErrorCreateFields

*type: Class*

-   An InstructionBatchError holds information about an error encountered while trying to process an CreatePostingInstructionBatchRequest.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch_error_type.PostingInstructionBatchErrorType]`

 | 

The type of error returned.

 |
| 

`message`

 | 

`typing.Optional[str]`

 | 

Contains human-readable information about the error raised.

 |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatcherrortype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatchErrorType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_INSTRUCTION_BATCH_ERROR_TYPE_INVALID_ARGUMENT`

 |  |
| 

`POSTING_INSTRUCTION_BATCH_ERROR_TYPE_INTERNAL`

 |  |
| 

`POSTING_INSTRUCTION_BATCH_ERROR_TYPE_TTL_EXPIRED`

 |  |

## [](#core_api_v1_posting_instruction_batches_postinginstructionbatchstatus "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionBatchStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_INSTRUCTION_BATCH_STATUS_UNKNOWN`

 |  |
| 

`POSTING_INSTRUCTION_BATCH_STATUS_ACCEPTED`

 |  |
| 

`POSTING_INSTRUCTION_BATCH_STATUS_REJECTED`

 |  |

## [](#core_api_v1_posting_instruction_batches_postinginstructioncreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingInstructionCreateFields

*type: Class*

-   A PostingInstruction acts against a client transaction. Vault offers a set of predefined PostingInstruction types, which each following a specific set of execution rules. A PostingInstruction may result in a balanced set of committed Postings to the ledger. OutboundAuthorisations and InboundAuthorisations initiate a client transaction, which can then be acted upon, by the AuthorisationAdjustment, Settlement and Release instruction types. CustomInstruction, OutboundHardSettlement, InboundHardSettlement and Transfer instructions initiate and close a client transaction. As such, no other instructions can subsequently act on their client transactions. If accepted, a PostingInstruction is translated into a balanced set of Postings which are persisted atomically to the Posting Ledger.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

Created by Vault. This uniquely identifies the posting instruction in Vault.

 |
| 

`posting_instruction_batch_id`

 | 

`typing.Optional[str]`

 | 

The ID of the posting instruction batch that created this instruction.

 |
| 

`client_transaction_id`

 | 

`typing.Optional[str]`

 | 

Set by the client. This is the ID of the client transaction this posting instruction is creating or mutating. Required.

\-For primary (initiating) posting instructions this must be unique for a given `client_id` -For secondary (subsequent, chained) posting instructions this must refer to a previous `client_transaction_id`

 |
| 

`outbound_authorisation`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._outbound_authorisation_create_fields.OutboundAuthorisationCreateFields]`

 | 

Used to authorise outgoing funds.

 |
| 

`inbound_authorisation`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._inbound_authorisation_create_fields.InboundAuthorisationCreateFields]`

 | 

Used to authorise incoming funds.

 |
| 

`authorisation_adjustment`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._authorisation_adjustment_create_fields.AuthorisationAdjustmentCreateFields]`

 | 

Used to adjust an authorisation amount that was previously ring-fenced by an OutboundAuthorisation or InboundAuthorisation.

 |
| 

`settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._settlement_create_fields.SettlementCreateFields]`

 | 

Used to clear funds pre-authorised by either an OutboundAuthorisation or an InboundAuthorisation.

 |
| 

`release`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._release_create_fields.ReleaseCreateFields]`

 | 

Used to release previously authorised funds.

 |
| 

`inbound_hard_settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._inbound_hard_settlement_create_fields.InboundHardSettlementCreateFields]`

 | 

Used to apply funds to an account that have not been previously authorised.

 |
| 

`outbound_hard_settlement`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._outbound_hard_settlement_create_fields.OutboundHardSettlementCreateFields]`

 | 

Used to withdraw funds from an account without previously authorising them.

 |
| 

`transfer`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._transfer_create_fields.TransferCreateFields]`

 | 

Used to transfer funds between two accounts in Vault.

 |
| 

`custom_instruction`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._custom_instruction_create_fields.CustomInstructionCreateFields]`

 | 

Used to apply a set of credits and debits.

 |
| 

`pics`

 | 

`typing.Optional[typing.List[str]]`

 | 

Posting Identification Codes that can be associated to posting instruction, and consumed by downstream processes.

 |
| 

`instruction_details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

Stores metadata related to the posting instruction. Contract execution will have access to these. If a restriction has exemption conditions and all the exemption conditions are present as key-value pairs, the restriction will not be applied to this posting instruction.

 |
| 

`committed_postings`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_create_fields.PostingCreateFields]]`

 | 

Contains the list of Postings written to the Posting ledger if the posting instruction was accepted.

 |
| 

`posting_violations`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._posting_violation_create_fields.PostingViolationCreateFields]]`

 | 

Captures rejection reasons caused by posting logic validity checks. For example: Cannot adjust an authorisation that has already been settled.

 |
| 

`account_violations`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._account_violation_create_fields.AccountViolationCreateFields]]`

 | 

Captures rejection reasons and details caused by account checks. For example: Account closed.

 |
| 

`restriction_violations`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._restriction_violation_create_fields.RestrictionViolationCreateFields]]`

 | 

Captures rejection reasons and rejection details caused by restrictions. For example: Restriction with ID 'xyz123' prevented this instruction.

 |
| 

`contract_violations`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.posting_instruction_batches._contract_violation_create_fields.ContractViolationCreateFields]]`

 | 

Captures rejection reasons and rejection details caused by contract execution. For example: Insufficient funds.

 |
| 

`override`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._override_create_fields.OverrideCreateFields]`

 | 

Allows the caller to override certain checks for this PostingInstruction.

 |
| 

`transaction_code`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._transaction_code_create_fields.TransactionCodeCreateFields]`

 | 

ISO20022 Bank Transaction Code field, a set of properties to identify underlying transaction.

 |
| 

`booking_localised_date_time`

 | 

`typing.Optional[str]`

 | 

An RFC 3339 compliant date/time string representing the `booking_timestamp` of the PostingInstructionBatch, localised into the time zone of the processing group associated with accounts referenced in this PostingInstruction. As the processing group may change over time, this field will not be populated for future-booked postings.

 |
| 

`value_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this PostingInstruction will affect balances. For most cases, including real time payments or fund movements, this does not require setting and will default to the generated `insertion_timestamp`. Should only be set for backdated and future-dated instructions and must be between 1970-01-01T00:00:00Z and the current time + 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`booking_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time at which all committed postings of this PostingInstruction will be booked. For most cases, including real time payments or fund movements, this does not require setting and will default to the `insertion_timestamp`. Should only be set for back-booked and future-booked instructions and must be between 1970-01-01T00:00:00Z and the current time + 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time the posting instruction was inserted in Vault.

 |
| 

`source_insertion_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Specifies the time the posting instruction was inserted in the source core banking engine. Will always have the same value as `insertion_timestamp` unless posting instruction was migrated into Vault via the Posting Migration API.

 |
| 

`enrichments`

 | 

`typing.Optional[typing.Dict[str, vc_api.core_api.v1.posting_instruction_batches._enrichment_create_fields.EnrichmentCreateFields]]`

 | 

Shows enrichment data for this Posting Instruction made by a Contract Pre-Posting Hook. Keyed by account ID. Output-only, except for Migration Postings API requests.

 |

## [](#core_api_v1_posting_instruction_batches_postingviolation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingViolation

*type: Class*

-   PostingViolation describes a Posting API violation.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`enum 'PostingViolationType'`

 | 

The type of violation.

 |

## [](#core_api_v1_posting_instruction_batches_postingviolationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingViolationCreateFields

*type: Class*

-   PostingViolation describes a Posting API violation.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_violation_type.PostingViolationType]`

 | 

The type of violation.

 |

## [](#core_api_v1_posting_instruction_batches_postingviolationtype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.PostingViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_VIOLATION_CLIENT_TRANSACTION_ALREADY_EXISTS`

 |  |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_DOES_NOT_EXIST`

 |  |
| 

`POSTING_VIOLATION_ADJUSTMENT_YIELDS_AUTHORISATION_WITH_NEGATIVE_AMOUNT`

 |  |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_CLOSED`

 |  |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_INVALID_OPERATION`

 |  |

## [](#core_api_v1_posting_instruction_batches_release "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Release

*type: Class*

-   Release removes an authorisation hold. The client transaction being released is identified by the client\_transaction\_id in the parent PostingInstruction. Note: No other Posting Instructions will be accepted after the transaction has been released. For this instruction Vault will perform: - idempotency check - Posting logic checks (was there an Inbound or Outbound authorisation for it? was accepted?) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction. Note - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts Resulting postings committed (if accepted): <> Release of OutboundAuthorisation: - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING <> Release of InboundAuthorisation: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The amount released.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction release denomination.

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The instruction `target_account_id`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The instruction `internal_account_id`. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`require_pre_posting_hook_execution`

 | 

`class 'bool'`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if not supplied, the pre-posting hook may be triggered by other instructions within this batch, but this instruction will not be visible to the hook.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_releasecreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ReleaseCreateFields

*type: Class*

-   Release removes an authorisation hold. The client transaction being released is identified by the client\_transaction\_id in the parent PostingInstruction. Note: No other Posting Instructions will be accepted after the transaction has been released. For this instruction Vault will perform: - idempotency check - Posting logic checks (was there an Inbound or Outbound authorisation for it? was accepted?) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction. Note - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts Resulting postings committed (if accepted): <> Release of OutboundAuthorisation: - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING <> Release of InboundAuthorisation: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The amount released.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction release denomination.

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The instruction `target_account_id`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The instruction `internal_account_id`. This is an alternative to `internal_account_processing_label` and cannot be used in conjunction with it but one of these two fields must be specified.

 |
| 

`require_pre_posting_hook_execution`

 | 

`typing.Optional[bool]`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if not supplied, the pre-posting hook may be triggered by other instructions within this batch, but this instruction will not be visible to the hook.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_restrictionviolation "Copy link to heading")core\_api.v1.posting\_instruction\_batches.RestrictionViolation

*type: Class*

-   RestrictionViolation characterises a violation regarding restriction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_id`

 | 

`class 'str'`

 | 

Uniquely identifies this restriction in Vault.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

This is set if this restriction violation is applied at an account level.

 |
| 

`payment_device_id`

 | 

`class 'str'`

 | 

This is set if this restriction violation is applied at a payment device level.

 |
| 

`customer_id`

 | 

`class 'str'`

 | 

This is set if this restriction violation is applied at a customer level.

 |
| 

`requires_review`

 | 

`class 'bool'`

 | 

If true, this restriction requires review. Otherwise it simply prevents it.

 |
| 

`type`

 | 

`enum 'RestrictionViolationType'`

 | 

The type of restriction violation. For instructions instructed prior to Vault version 5.4, this will be returned as `RESTRICTION_VIOLATION_TYPE_UNKNOWN`.

 |

## [](#core_api_v1_posting_instruction_batches_restrictionviolationcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.RestrictionViolationCreateFields

*type: Class*

-   RestrictionViolation characterises a violation regarding restriction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_id`

 | 

`typing.Optional[str]`

 | 

Uniquely identifies this restriction in Vault.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

This is set if this restriction violation is applied at an account level.

 |
| 

`payment_device_id`

 | 

`typing.Optional[str]`

 | 

This is set if this restriction violation is applied at a payment device level.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

This is set if this restriction violation is applied at a customer level.

 |
| 

`requires_review`

 | 

`typing.Optional[bool]`

 | 

If true, this restriction requires review. Otherwise it simply prevents it.

 |
| 

`type`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._restriction_violation_type.RestrictionViolationType]`

 | 

The type of restriction violation. For instructions instructed prior to Vault version 5.4, this will be returned as `RESTRICTION_VIOLATION_TYPE_UNKNOWN`.

 |

## [](#core_api_v1_posting_instruction_batches_restrictionviolationtype "Copy link to heading")core\_api.v1.posting\_instruction\_batches.RestrictionViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESTRICTION_VIOLATION_TYPE_UNKNOWN`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_PREVENT_CREDITS`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_PREVENT_DEBITS`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_REVIEW_CREDITS`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_REVIEW_DEBITS`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_LIMIT_CREDITS`

 |  |
| 

`RESTRICTION_VIOLATION_TYPE_LIMIT_DEBITS`

 |  |

## [](#core_api_v1_posting_instruction_batches_settlement "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Settlement

*type: Class*

-   Settlement clears funds that have previously been authorised. Settlements can only act on client transactions that have not been release or settled with the final flag set. For this instruction Vault will perform: - idempotency check - Posting logic checks (whether or not there was an accepted InboundAuthorisation or OutboundAuthorisation for the same client transaction) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if the amount is specified and it’s different than the authorisation hold, then Vault will create additional postings to reflect the change. Please note that this may bring the account balance negative, as contract execution won’t be performed. - if final is set to true, Vault will release any outstanding balance ring-fenced by the original authorisation. - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction. Note: in the below examples for a given client\_transaction\_id: - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts Resulting postings committed (if accepted): Postings for Settlement of OutboundAuthorisation: <> Settlement of OutboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = true: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED -------------------------------------------------------------------------------------- Postings for Settlement of InboundAuthorisation: <> Settlement of InboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = true: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The amount to be cleared. Optional: if not supplied it will be calculated as amount = total amount authorised for this client transaction - total amount cleared.

 |
| 

`final`

 | 

`class 'bool'`

 | 

If set to true, any remaining amount authorised for this client transaction will be released. No instruction may mutate a client transaction once a final settlement has mutated it.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`target_account_id`

 | 

`class 'str'`

 | 

The instruction `target_account_id`.

 |
| 

`internal_account_id`

 | 

`class 'str'`

 | 

The instruction `internal_account_id`. This is an alternative to `internal_account_processing_label` and cannot be used conjunction, but one of these two fields must be specified.

 |
| 

`require_pre_posting_hook_execution`

 | 

`class 'bool'`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if not supplied, the pre-posting hook may be triggered by other instructions within this batch, but this instruction will not be visible to the hook.

 |
| 

`internal_account_processing_label`

 | 

`class 'str'`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`class 'str'`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_settlementcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.SettlementCreateFields

*type: Class*

-   Settlement clears funds that have previously been authorised. Settlements can only act on client transactions that have not been release or settled with the final flag set. For this instruction Vault will perform: - idempotency check - Posting logic checks (whether or not there was an accepted InboundAuthorisation or OutboundAuthorisation for the same client transaction) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if the amount is specified and it’s different than the authorisation hold, then Vault will create additional postings to reflect the change. Please note that this may bring the account balance negative, as contract execution won’t be performed. - if final is set to true, Vault will release any outstanding balance ring-fenced by the original authorisation. - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction. Note: in the below examples for a given client\_transaction\_id: - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts Resulting postings committed (if accepted): Postings for Settlement of OutboundAuthorisation: <> Settlement of OutboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = true: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED -------------------------------------------------------------------------------------- Postings for Settlement of InboundAuthorisation: <> Settlement of InboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED <> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = true: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The amount to be cleared. Optional: if not supplied it will be calculated as amount = total amount authorised for this client transaction - total amount cleared.

 |
| 

`final`

 | 

`typing.Optional[bool]`

 | 

If set to true, any remaining amount authorised for this client transaction will be released. No instruction may mutate a client transaction once a final settlement has mutated it.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`target_account_id`

 | 

`typing.Optional[str]`

 | 

The instruction `target_account_id`.

 |
| 

`internal_account_id`

 | 

`typing.Optional[str]`

 | 

The instruction `internal_account_id`. This is an alternative to `internal_account_processing_label` and cannot be used conjunction, but one of these two fields must be specified.

 |
| 

`require_pre_posting_hook_execution`

 | 

`typing.Optional[bool]`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if not supplied, the pre-posting hook may be triggered by other instructions within this batch, but this instruction will not be visible to the hook.

 |
| 

`internal_account_processing_label`

 | 

`typing.Optional[str]`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly specifying an Internal Account ID. The Processing Group of the target Account determines which Internal Account this label will resolve to. This is an alternative to `internal_account_id` and cannot be used in conjunction with it but one of these two fields must be specified.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`typing.Optional[str]`

 | 

The target account address of the instruction.

 |
| 

`asset`

 | 

`typing.Optional[str]`

 | 

The asset of the instruction.

 |

## [](#core_api_v1_posting_instruction_batches_targetaccount "Copy link to heading")core\_api.v1.posting\_instruction\_batches.TargetAccount

*type: Class*

-   TargetAccount describes an account being targeted by a Posting instruction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_token`

 | 

`typing.Optional[str]`

 | 

A payment device token that uniquely identifies a payment device link based on the value\_timestamp of the posting instruction. When the target\_account is specified via the token, Vault will resolve the token to a Vault account and the account\_id will be returned in the posting instruction target\_account\_id field.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of an account in Vault.

 |

## [](#core_api_v1_posting_instruction_batches_targetaccountcreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.TargetAccountCreateFields

*type: Class*

-   TargetAccount describes an account being targeted by a Posting instruction.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_token`

 | 

`typing.Optional[str]`

 | 

A payment device token that uniquely identifies a payment device link based on the value\_timestamp of the posting instruction. When the target\_account is specified via the token, Vault will resolve the token to a Vault account and the account\_id will be returned in the posting instruction target\_account\_id field.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of an account in Vault.

 |

## [](#core_api_v1_posting_instruction_batches_transactioncode "Copy link to heading")core\_api.v1.posting\_instruction\_batches.TransactionCode

*type: Class*

ISO20022 Bank Transaction Code.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`domain`

 | 

`class 'str'`

 | 

Business area of the transaction.

 |
| 

`family`

 | 

`class 'str'`

 | 

A family within the domain.

 |
| 

`subfamily`

 | 

`class 'str'`

 | 

Sub-product family within a specific family.

 |

## [](#core_api_v1_posting_instruction_batches_transactioncodecreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.TransactionCodeCreateFields

*type: Class*

ISO20022 Bank Transaction Code.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`domain`

 | 

`typing.Optional[str]`

 | 

Business area of the transaction.

 |
| 

`family`

 | 

`typing.Optional[str]`

 | 

A family within the domain.

 |
| 

`subfamily`

 | 

`typing.Optional[str]`

 | 

Sub-product family within a specific family.

 |

## [](#core_api_v1_posting_instruction_batches_transfer "Copy link to heading")core\_api.v1.posting\_instruction\_batches.Transfer

*type: Class*

-   Transfer is an instruction that moves funds from the debtor to the creditor target account Transfer PostingInstruction models an atomic transaction, no Adjustments, Settlements or other instructions can be passed with the same client\_transaction\_id. For this instruction Vault will perform: - idempotency check - account resolution - account checks on both debitor and creditor’s accounts - account/customer/payment\_device restrictions on both debitor and creditor’s accounts - contract execution on both debitor and creditor’s accounts Resulting postings committed (if accepted): - Dr | amount | debtor\_account\_id | PHASE\_COMMITTED - Cr | amount | creditor\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The amount to transfer.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The instruction denomination.

 |
| 

`debtor_target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The account being debited.

 |
| 

`debtor_target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the debtor.

 |
| 

`creditor_target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account.TargetAccount]`

 | 

The account being credited.

 |
| 

`creditor_target_account_id`

 | 

`class 'str'`

 | 

The `account_id` of the creditor.

 |

## [](#core_api_v1_posting_instruction_batches_transfercreatefields "Copy link to heading")core\_api.v1.posting\_instruction\_batches.TransferCreateFields

*type: Class*

-   Transfer is an instruction that moves funds from the debtor to the creditor target account Transfer PostingInstruction models an atomic transaction, no Adjustments, Settlements or other instructions can be passed with the same client\_transaction\_id. For this instruction Vault will perform: - idempotency check - account resolution - account checks on both debitor and creditor’s accounts - account/customer/payment\_device restrictions on both debitor and creditor’s accounts - contract execution on both debitor and creditor’s accounts Resulting postings committed (if accepted): - Dr | amount | debtor\_account\_id | PHASE\_COMMITTED - Cr | amount | creditor\_account\_id | PHASE\_COMMITTED
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`typing.Optional[str]`

 | 

The amount to transfer.

 |
| 

`denomination`

 | 

`typing.Optional[str]`

 | 

The instruction denomination.

 |
| 

`debtor_target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The account being debited.

 |
| 

`debtor_target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the debtor.

 |
| 

`creditor_target_account`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._target_account_create_fields.TargetAccountCreateFields]`

 | 

The account being credited.

 |
| 

`creditor_target_account_id`

 | 

`typing.Optional[str]`

 | 

The `account_id` of the creditor.

 |

## [](#core_api_v1_posting_instruction_batches_validatecreatepostinginstructionbatchrequestrequest "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ValidateCreatePostingInstructionBatchRequestRequest

*type: Class*

-   ValidateCreatePostingInstructionBatchRequestRequest is used to validate if the request messages for CreatePostingInstructionBatch and CreatePostingInstructionBatchAsync are correct.
    

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID generated by the client (payment processor) that is used for idempotency. The client must ensure a unique `request_id` is passed within their namespace (determined by `client_id`). Multiple requests with the same <\`client\_id\` - `request_id`\> will receive the same response. Required.

 |
| 

`posting_instruction_batch`

 | 

`typing.Optional[vc_api.core_api.v1.posting_instruction_batches._posting_instruction_batch.PostingInstructionBatch]`

 | 

A posting instruction batch object. Required.

 |

## [](#core_api_v1_posting_instruction_batches_validatecreatepostinginstructionbatchrequestresponse "Copy link to heading")core\_api.v1.posting\_instruction\_batches.ValidateCreatePostingInstructionBatchRequestResponse

*type: Class*

ValidateCreatePostingInstructionBatchRequestResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`is_valid`

 | 

`class 'bool'`

 | 

Indicates whether the syntax of the `create-posting-instruction-batch` request is valid.

 |
| 

`failure_reason`

 | 

`class 'str'`

 | 

A string that communicates the reason why the `create-posting-instruction-batch` request failed validation. Optional.

 |

## [](#core_api_v1_posting_phase_postingphase "Copy link to heading")core\_api.v1.posting\_phase.PostingPhase

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_PHASE_UNKNOWN`

 |  |
| 

`POSTING_PHASE_PENDING_INCOMING`

 |  |
| 

`POSTING_PHASE_PENDING_OUTGOING`

 |  |
| 

`POSTING_PHASE_COMMITTED`

 |  |

## [](#core_api_v1_processing_groups_createprocessinggrouprequest "Copy link to heading")core\_api.v1.processing\_groups.CreateProcessingGroupRequest

*type: Class*

CreateProcessingGroupRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`class 'str'`

 | 

The request idempotency identifier.

 |
| 

`processing_group`

 | 

`typing.Optional[vc_api.core_api.v1.processing_groups._processing_group_create_fields.ProcessingGroupCreateFields]`

 | 

The Processing Group object to be created.

 |

## [](#core_api_v1_processing_groups_listprocessinggroupsresponse "Copy link to heading")core\_api.v1.processing\_groups.ListProcessingGroupsResponse

*type: Class*

ListProcessingGroupsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_groups`

 | 

`typing.List[vc_api.core_api.v1.processing_groups._processing_group.ProcessingGroup]`

 | 

The list of Processing Groups in the given page.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_processing_groups_processinggroup "Copy link to heading")core\_api.v1.processing\_groups.ProcessingGroup

*type: Class*

ProcessingGroup

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID for the Processing Group. Optional for create requests. The '/' character is not supported in the ID.

 |
| 

`timezone`

 | 

`class 'str'`

 | 

The time zone of the Processing Group. **Warning: It is critical that you set this correctly because once set, it cannot be changed.** For more information, see \[Processing Groups\](/reference/processing\_groups/).

 |
| 

`status`

 | 

`enum 'ProcessingGroupStatus'`

 | 

The status of the Processing Group. Default: PROCESSING\_GROUP\_STATUS\_ACTIVE. On creation read only.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Processing Group was created, in UTC. Read only. Formatted as an RFC3339 timestamp.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The timestamp at which the Processing Group was last updated, in UTC. Read only. Formatted as an RFC3339 timestamp.

 |
| 

`minimum_observation_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating the minimum observation timestamp of the Processing group.

 |
| 

`description`

 | 

`class 'str'`

 | 

The description of the Processing Group. Optional.

 |

## [](#core_api_v1_processing_groups_processinggroupcreatefields "Copy link to heading")core\_api.v1.processing\_groups.ProcessingGroupCreateFields

*type: Class*

ProcessingGroupCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID for the Processing Group. Optional for create requests. The '/' character is not supported in the ID.

 |
| 

`timezone`

 | 

`typing.Optional[str]`

 | 

The time zone of the Processing Group. **Warning: It is critical that you set this correctly because once set, it cannot be changed.** For more information, see \[Processing Groups\](/reference/processing\_groups/).

 |
| 

`minimum_observation_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating the minimum observation timestamp of the Processing group.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The description of the Processing Group. Optional.

 |

## [](#core_api_v1_processing_groups_processinggroupminimumobservationtimestampupdateoptions "Copy link to heading")core\_api.v1.processing\_groups.ProcessingGroupMinimumObservationTimestampUpdateOptions

*type: Class*

ProcessingGroupMinimumObservationTimestampUpdateOptions

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`schedules_observe_balances_at_unpause_time`

 | 

`typing.Optional[bool]`

 | 

Boolean to be used if requirements fetched for contract execution balance should be observed after a processing group is unpaused. If it is set to true, the minimum\_observation\_timestamp will be updated to the unpause time. If it is false, the minimum\_observation\_timestamp will be set to nil.

 |

## [](#core_api_v1_processing_groups_processinggroupstatus "Copy link to heading")core\_api.v1.processing\_groups.ProcessingGroupStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PROCESSING_GROUP_STATUS_UNKNOWN`

 |  |
| 

`PROCESSING_GROUP_STATUS_ACTIVE`

 |  |
| 

`PROCESSING_GROUP_STATUS_PAUSED`

 |  |

## [](#core_api_v1_processing_groups_processinggroupupdatefields "Copy link to heading")core\_api.v1.processing\_groups.ProcessingGroupUpdateFields

*type: Class*

ProcessingGroupUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID for the Processing Group. Optional for create requests. The '/' character is not supported in the ID.

 |
| 

`timezone`

 | 

`typing.Optional[str]`

 | 

The time zone of the Processing Group. **Warning: It is critical that you set this correctly because once set, it cannot be changed.** For more information, see \[Processing Groups\](/reference/processing\_groups/).

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v1.processing_groups._processing_group_status.ProcessingGroupStatus]`

 | 

The status of the Processing Group. Default: PROCESSING\_GROUP\_STATUS\_ACTIVE. On creation read only.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The description of the Processing Group. Optional.

 |

## [](#core_api_v1_processing_groups_updateprocessinggrouprequest "Copy link to heading")core\_api.v1.processing\_groups.UpdateProcessingGroupRequest

*type: Class*

UpdateProcessingGroupRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`class 'str'`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`processing_group`

 | 

`typing.Optional[vc_api.core_api.v1.processing_groups._processing_group_update_fields.ProcessingGroupUpdateFields]`

 | 

The processing group to be updated.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

Field mask that indicates which fields of the resource are to be updated. Valid update paths are "status", "timezone" and "description". "status" updates a processing group’s status between PROCESSING\_GROUP\_STATUS\_ACTIVE and PROCESSING\_GROUP\_STATUS\_PAUSED. "timezone" can only be set once for the default processing group.

 |
| 

`minimum_observation_timestamp_update_options`

 | 

`typing.Optional[vc_api.core_api.v1.processing_groups._processing_group_minimum_observation_timestamp_update_options.ProcessingGroupMinimumObservationTimestampUpdateOptions]`

 | 

Determines whether or not the minimum\_observation\_timestamp should be set. Optional. If not provided, no updates will be made to the minimum\_observation\_timestamp.

 |

## [](#core_api_v1_products_addressdetails "Copy link to heading")core\_api.v1.products.AddressDetails

*type: Class*

A detailed description of an account address.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`address_name`

 | 

`class 'str'`

 | 

The account address the details refer to.

 |
| 

`description`

 | 

`class 'str'`

 | 

A human-readable description of the address.

 |
| 

`tags`

 | 

`typing.List[str]`

 | 

A list of tags that describe the address.

 |

## [](#core_api_v1_products_attribute "Copy link to heading")core\_api.v1.products.Attribute

*type: Class*

Attribute describes the name and type of an attribute exposed from this Product, the value of which is a result of the `attribute_hook` execution.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`class 'str'`

 | 

The semantically important name of the attribute.

 |
| 

`data_type`

 | 

`typing.Optional[vc_api.core_api.v1.products._attribute_data_type.AttributeDataType]`

 | 

The type of the attribute. All values of this attribute are guaranteed to be of this type and will fail attribute execution with a meaningful error if a value is returned from the `attribute_hook` that is not of this type.

 |

## [](#core_api_v1_products_attributedatatype "Copy link to heading")core\_api.v1.products.AttributeDataType

*type: Class*

AttributeDataType describes the type that an output of an `attribute_hook` must produce for the given attribute.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`decimal_type`

 | 

`typing.Optional[vc_api.core_api.v1.products._attribute_decimal_type.AttributeDecimalType]`

 | 

Represents any number exactly as a decimal floating point.

 |
| 

`datetime_type`

 | 

`typing.Optional[vc_api.core_api.v1.products._attribute_date_time_type.AttributeDateTimeType]`

 | 

Represents a date-time type, in UTC.

 |
| 

`string_type`

 | 

`typing.Optional[vc_api.core_api.v1.products._attribute_string_type.AttributeStringType]`

 | 

Represents a string type.

 |

## [](#core_api_v1_products_attributedatetimetype "Copy link to heading")core\_api.v1.products.AttributeDateTimeType

*type: Class*

AttributeDateTimeType

Signature of the constructor for this class:

## [](#core_api_v1_products_attributedecimaltype "Copy link to heading")core\_api.v1.products.AttributeDecimalType

*type: Class*

AttributeDecimalType

Signature of the constructor for this class:

## [](#core_api_v1_products_attributestringtype "Copy link to heading")core\_api.v1.products.AttributeStringType

*type: Class*

AttributeStringType

Signature of the constructor for this class:

## [](#core_api_v1_products_batchgetproductversionsresponse "Copy link to heading")core\_api.v1.products.BatchGetProductVersionsResponse

*type: Class*

BatchGetProductVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`product_versions`

 | 

`typing.Dict[str, vc_api.core_api.v1.products._product_version.ProductVersion]`

 | 

Maps the product version ID to the product version.

 |

## [](#core_api_v1_products_batchgetproductsresponse "Copy link to heading")core\_api.v1.products.BatchGetProductsResponse

*type: Class*

BatchGetProductsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`products`

 | 

`typing.Dict[str, vc_api.core_api.v1.products._product.Product]`

 | 

Maps the product ID to the product.

 |

## [](#core_api_v1_products_contractmoduledetails "Copy link to heading")core\_api.v1.products.ContractModuleDetails

*type: Class*

ContractModuleDetails

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`alias_to_shared_function_details`

 | 

`typing.Dict[str, vc_api.core_api.v1.contract_modules._shared_function_details.SharedFunctionDetails]`

 | 

A map of Contract Module aliases to the function details required for the Contract to run.

 |

## [](#core_api_v1_products_createproductversionrequest "Copy link to heading")core\_api.v1.products.CreateProductVersionRequest

*type: Class*

Create a ProductVersion.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`product_version`

 | 

`typing.Optional[vc_api.core_api.v1.products._product_version_create_fields.ProductVersionCreateFields]`

 | 

The product version to be created. Required.

 |
| 

`migration_strategy`

 | 

`typing.Optional[vc_api.core_api.v1.products._product_version_migration_strategy.ProductVersionMigrationStrategy]`

 | 

The migration strategy for applying the new version. Optional.

 |
| 

`is_internal`

 | 

`typing.Optional[bool]`

 | 

When creating a new product, used to indicate if the new product is for internal accounts only and not available to customers.

 |

## [](#core_api_v1_products_expectedparameter "Copy link to heading")core\_api.v1.products.ExpectedParameter

*type: Class*

ExpectedParameter

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_id`

 | 

`class 'str'`

 | 

The ID of the Parameter referenced by this Expected Parameter. Can be retrieved via the `BatchGetParameters` endpoint `/v1/parameters:batchGet?ids=<parameter-id>`.

 |
| 

`is_optional`

 | 

`class 'bool'`

 | 

Whether the parameter is optional. If `false`, attempts to create an Account using this Product Version or convert an Account to this Product Version without a value defined for this parameter will fail.

 |
| 

`triggers_pre_parameter_change_hook`

 | 

`class 'bool'`

 | 

Whether proposed new values for this parameter will be validated by the pre\_parameter\_change\_hook.

 |
| 

`triggers_post_parameter_change_hook`

 | 

`class 'bool'`

 | 

Whether new values for this parameter will cause the post\_parameter\_change\_hook to execute.

 |

## [](#core_api_v1_products_highvolumeeligibility "Copy link to heading")core\_api.v1.products.HighVolumeEligibility

*type: Class*

Represents a product version’s eligibility for high volume processing

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`ledger`

 | 

`class 'bool'`

 | 

If true, the contract template is eligible for high volume processing in the ledger

 |

## [](#core_api_v1_products_highvolumeeligibilitycreatefields "Copy link to heading")core\_api.v1.products.HighVolumeEligibilityCreateFields

*type: Class*

Represents a product version’s eligibility for high volume processing

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`ledger`

 | 

`typing.Optional[bool]`

 | 

If true, the contract template is eligible for high volume processing in the ledger

 |

## [](#core_api_v1_products_listproductversionparameterstimeseriesresponse "Copy link to heading")core\_api.v1.products.ListProductVersionParametersTimeseriesResponse

*type: Class*

apilint:disable:next LIST\_RESPONSE\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`product_version_param_timeseries`

 | 

`typing.List[vc_api.core_api.v1.products._parameter_timeseries.ParameterTimeseries]`

 | 

The product version parameter timeseries that is retrieved for the specified product version ID.

 |

## [](#core_api_v1_products_listproductversionsresponse "Copy link to heading")core\_api.v1.products.ListProductVersionsResponse

*type: Class*

ListProductVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`product_versions`

 | 

`typing.List[vc_api.core_api.v1.products._product_version.ProductVersion]`

 | 

A list of the Product Versions with the specified Product ID, ordered by ascending create\_timestamp.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page If empty, returns the last page of results.

 |

## [](#core_api_v1_products_listproductsrequestinternalityrefiner "Copy link to heading")core\_api.v1.products.ListProductsRequestInternalityRefiner

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INTERNALITY_REFINER_ANY_INTERNALITY`

 |  |
| 

`INTERNALITY_REFINER_INTERNAL`

 |  |
| 

`INTERNALITY_REFINER_EXTERNAL`

 |  |

## [](#core_api_v1_products_listproductsresponse "Copy link to heading")core\_api.v1.products.ListProductsResponse

*type: Class*

ListProductsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`products`

 | 

`typing.List[vc_api.core_api.v1.products._product.Product]`

 | 

A list of matching products. The order of the items is arbitrary and is not guaranteed to remain the same.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, returns the last page of results.

 |

## [](#core_api_v1_products_paramvalue "Copy link to heading")core\_api.v1.products.ParamValue

*type: Class*

ParamValue

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`class 'str'`

 | 

The value of a parameter.

 |
| 

`effective_from_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp that indicates when the parameter value is effective from, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_products_parametertimeseries "Copy link to heading")core\_api.v1.products.ParameterTimeseries

*type: Class*

ParameterTimeseries

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`param_name`

 | 

`class 'str'`

 | 

The parameter the value changes apply to.

 |
| 

`values`

 | 

`typing.List[vc_api.core_api.v1.products._param_value.ParamValue]`

 | 

The value of the parameter and the timestamp that indicates when the parameter value became active.

 |

## [](#core_api_v1_products_product "Copy link to heading")core\_api.v1.products.Product

*type: Class*

A product specifies the behaviours and rules for an account in Vault. Each product will have one or more versions; one of these versions will be the current version. The current version is the version that will be used when customers open an account of the given product type.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A globally-unique ID for the product.

 |
| 

`current_version_id`

 | 

`class 'str'`

 | 

The ID of the current version of the product.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The name of the product displayed to the customer.

 |
| 

`is_internal`

 | 

`class 'bool'`

 | 

Indicates if the product is meant for customers to sign up to (external) or if it used to model internal bank accounts (internal).

 |

## [](#core_api_v1_products_productversion "Copy link to heading")core\_api.v1.products.ProductVersion

*type: Class*

A product version that holds detailed information about a specific version of a product, including the code for a smart contract.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A globally-unique ID for the product version.

 |
| 

`product_id`

 | 

`class 'str'`

 | 

Used as the product\_id when the migration strategy is set to NEW\_PRODUCT; otherwise this will add product\_version to a specified product. Required.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The name of the product displayed to the customer. Optional - if not provided, this is populated with product\_id.

 |
| 

`display_version_number`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

The version number of the product. This is set in the contract code.

 |
| 

`description`

 | 

`class 'str'`

 | 

A description of the product version. If set on creation, this will override any description set in the Smart Contract code. Optional.

 |
| 

`summary`

 | 

`class 'str'`

 | 

A summary of the product version. If set on creation and the major version of the display\_version\_number is < 4, this will override the summary set in the Smart Contract code. Optional.

 |
| 

`tags`

 | 

`typing.List[str]`

 | 

Tags for the product version; these are created by users of Vault and simplify searching. Optional.

 |
| 

`core_tags`

 | 

`typing.List[vc_api.core_api.v1.products._product_version_core_tag.ProductVersionCoreTag]`

 | 

Core tags for the product version; these are created by Vault and could be, for example, savings or loan. Optional.

 |
| 

`is_current`

 | 

`class 'bool'`

 | 

Indicates whether this is the current version of the product.

 |
| 

`code`

 | 

`class 'str'`

 | 

The Smart Contract code for the product version. Required.

 |
| 

`params`

 | 

`typing.List[vc_api.core_api.v1.params._param.Param]`

 | 

The template level parameter values for the product version. Required in a POST product-versions request when the contract has product level parameters (only name and value attributes of parameters need to be provided). Note: Any `default_value` for the template parameter specified in the Smart Contract will not be used.

 |
| 

`address_details`

 | 

`typing.List[vc_api.core_api.v1.products._address_details.AddressDetails]`

 | 

The address details described in this product version.

 |
| 

`attributes`

 | 

`typing.List[vc_api.core_api.v1.products._attribute.Attribute]`

 | 

The attributes defined by the contract. Output only. Determined by the `attributes` metadata field in the contract.

 |
| 

`contracts_language_api_version`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

The Contracts Language API version.

 |
| 

`contract_module_details`

 | 

`typing.Optional[vc_api.core_api.v1.products._contract_module_details.ContractModuleDetails]`

 | 

The Contract Module interfaces required for the execution of this product. This is set in the Contract code.

 |
| 

`expected_parameters`

 | 

`typing.List[vc_api.core_api.v1.products._expected_parameter.ExpectedParameter]`

 | 

The expected parameters defined by the contract. Output only. Determined by the `expected_parameters` metadata field in the contract.

 |
| 

`high_volume_eligibility`

 | 

`typing.Optional[vc_api.core_api.v1.products._high_volume_eligibility.HighVolumeEligibility]`

 | 

Indicates the product version’s eligibility for high volume processing. The smart contract code must be compatible with the desired eligibility. Optional. If not provided, the product version is not eligible for any high volume processing.

 |
| 

`notification_types`

 | 

`typing.List[str]`

 | 

The notification types supported by this product version.

 |
| 

`parameter_id_by_instance_parameter_name`

 | 

`typing.Dict[str, str]`

 | 

A map containing parameter IDs for instance parameters that are now usable as parameters. They are keyed by the name of the parameter defined in the contract that created them.

 |
| 

`supported_denominations`

 | 

`typing.List[str]`

 | 

The denominations supported by this product version. Required for non-internal products.

 |
| 

`tside`

 | 

`enum 'Tside'`

 | 

Tside for any accounts created with this product version. Tside is used by the bank to indicate the side of the balance sheet the accounts are on. This is set in the Smart Contract code or set to LIABILITY by default.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when the product version was created, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_products_productversioncoretag "Copy link to heading")core\_api.v1.products.ProductVersionCoreTag

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PRODUCT_VERSION_CORE_TAG_UNKNOWN`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_DEPOSIT`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_FIXED_TERM_DEPOSIT`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_SAVING`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_LOAN`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_CREDIT`

 |  |
| 

`PRODUCT_VERSION_CORE_TAG_MORTGAGE`

 |  |

## [](#core_api_v1_products_productversioncreatefields "Copy link to heading")core\_api.v1.products.ProductVersionCreateFields

*type: Class*

A product version that holds detailed information about a specific version of a product, including the code for a smart contract.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`product_id`

 | 

`typing.Optional[str]`

 | 

Used as the product\_id when the migration strategy is set to NEW\_PRODUCT; otherwise this will add product\_version to a specified product. Required.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The name of the product displayed to the customer. Optional - if not provided, this is populated with product\_id.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

A description of the product version. If set on creation, this will override any description set in the Smart Contract code. Optional.

 |
| 

`summary`

 | 

`typing.Optional[str]`

 | 

A summary of the product version. If set on creation and the major version of the display\_version\_number is < 4, this will override the summary set in the Smart Contract code. Optional.

 |
| 

`tags`

 | 

`typing.Optional[typing.List[str]]`

 | 

Tags for the product version; these are created by users of Vault and simplify searching. Optional.

 |
| 

`core_tags`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.products._product_version_core_tag.ProductVersionCoreTag]]`

 | 

Core tags for the product version; these are created by Vault and could be, for example, savings or loan. Optional.

 |
| 

`code`

 | 

`typing.Optional[str]`

 | 

The Smart Contract code for the product version. Required.

 |
| 

`params`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.params._param_create_fields.ParamCreateFields]]`

 | 

The template level parameter values for the product version. Required in a POST product-versions request when the contract has product level parameters (only name and value attributes of parameters need to be provided). Note: Any `default_value` for the template parameter specified in the Smart Contract will not be used.

 |
| 

`high_volume_eligibility`

 | 

`typing.Optional[vc_api.core_api.v1.products._high_volume_eligibility_create_fields.HighVolumeEligibilityCreateFields]`

 | 

Indicates the product version’s eligibility for high volume processing. The smart contract code must be compatible with the desired eligibility. Optional. If not provided, the product version is not eligible for any high volume processing.

 |
| 

`supported_denominations`

 | 

`typing.Optional[typing.List[str]]`

 | 

The denominations supported by this product version. Required for non-internal products.

 |

## [](#core_api_v1_products_productversionmigrationstrategy "Copy link to heading")core\_api.v1.products.ProductVersionMigrationStrategy

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PRODUCT_VERSION_MIGRATION_STRATEGY_UNKNOWN`

 |  |
| 

`PRODUCT_VERSION_MIGRATION_STRATEGY_NEW_PRODUCT`

 |  |
| 

`PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION`

 |  |
| 

`PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION_APPLY_NEW_USERS`

 |  |

## [](#core_api_v1_products_productversionview "Copy link to heading")core\_api.v1.products.ProductVersionView

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`PRODUCT_VERSION_VIEW_BASIC`

 |  |
| 

`PRODUCT_VERSION_VIEW_INCLUDE_TAGS`

 |  |
| 

`PRODUCT_VERSION_VIEW_INCLUDE_PARAMETERS`

 |  |
| 

`PRODUCT_VERSION_VIEW_INCLUDE_CODE`

 |  |

## [](#core_api_v1_products_updateproductversionparamsrequest "Copy link to heading")core\_api.v1.products.UpdateProductVersionParamsRequest

*type: Class*

Updates parameter values for a product version at current or future timestamps. This will not add or remove parameters from the product version.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`product_version_id`

 | 

`typing.Optional[str]`

 | 

The ID of the product version to be updated.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID used to ensure the request is idempotent.

 |
| 

`items_to_add`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.params._param_update_fields.ParamUpdateFields]]`

 | 

A list of parameters that are to be added to the product version parameter timeseries. Each parameter in the `items_to_add` field must have its `name` and `value` populated. The `effective_timestamp` is optional and will default to current time. If set, the `effective_timestamp` must be formatted as an RFC3339 timestamp and must not be in the past. When editing the value of one or more parameter(s), each parameter in `items_to_add` must correspond to a parameter in `items_to_remove` with a matching `name` and `effective_timestamp`.

 |
| 

`items_to_remove`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.params._param_update_fields.ParamUpdateFields]]`

 | 

A list of the parameters that are to be removed from the product version parameter timeseries. You must populate the `items_to_remove` field with `name` and `effective_timestamp` for each parameter. The `effective_timestamp` must be an RFC3339 timestamp and must not be in the past. The `value` of the parameter(s) is ignored. If the `items_to_remove` field is populated with a parameter `name` and `effective_timestamp` that do not already exist in the product version parameter, this generates an error. When editing the value of one or more parameter(s), each parameter in `items_to_remove` must correspond to a parameter in `items_to_add` with a matching `name` and `effective_timestamp`.

 |

## [](#core_api_v1_restrictions_batchgetrestrictionsetdefinitionversionsresponse "Copy link to heading")core\_api.v1.restrictions.BatchGetRestrictionSetDefinitionVersionsResponse

*type: Class*

BatchGetRestrictionSetDefinitionVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_definition_versions`

 | 

`typing.Dict[str, vc_api.core_api.v1.restrictions._restriction_set_definition_version.RestrictionSetDefinitionVersion]`

 | 

A map of the restriction set definition version ID to the restriction set definition version.

 |

## [](#core_api_v1_restrictions_batchgetrestrictionsetsresponse "Copy link to heading")core\_api.v1.restrictions.BatchGetRestrictionSetsResponse

*type: Class*

BatchGetRestrictionSetsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_sets`

 | 

`typing.Dict[str, vc_api.core_api.v1.restrictions._restriction_set.RestrictionSet]`

 | 

A map of the restriction set ID to the restriction set.

 |

## [](#core_api_v1_restrictions_createrestrictionsetdefinitionversionrequest "Copy link to heading")core\_api.v1.restrictions.CreateRestrictionSetDefinitionVersionRequest

*type: Class*

CreateRestrictionSetDefinitionVersionRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_definition_version`

 | 

`typing.Optional[vc_api.core_api.v1.restrictions._restriction_set_definition_version_create_fields.RestrictionSetDefinitionVersionCreateFields]`

 | 

The restriction set definition version to create. If the provided restriction set definition ID does not exist in the system, it will be created automatically. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

The unique string ID used to ensure this request is idempotent. Required.

 |

## [](#core_api_v1_restrictions_createrestrictionsetrequest "Copy link to heading")core\_api.v1.restrictions.CreateRestrictionSetRequest

*type: Class*

CreateRestrictionSetRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set`

 | 

`typing.Optional[vc_api.core_api.v1.restrictions._restriction_set_create_fields.RestrictionSetCreateFields]`

 | 

The restriction set to create. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

The unique string ID used to ensure this request is idempotent. Required.

 |

## [](#core_api_v1_restrictions_listrestrictionsetdefinitionversionsresponse "Copy link to heading")core\_api.v1.restrictions.ListRestrictionSetDefinitionVersionsResponse

*type: Class*

apilint:disable:next LIST\_RESPONSE\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_definition_versions`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction_set_definition_version.RestrictionSetDefinitionVersion]`

 | 

A list of matching restriction set definition versions, ordered by ascending `create_timestamp`.

 |

## [](#core_api_v1_restrictions_listrestrictionsetdefinitionsresponse "Copy link to heading")core\_api.v1.restrictions.ListRestrictionSetDefinitionsResponse

*type: Class*

ListRestrictionSetDefinitionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_definitions`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction_set_definition.RestrictionSetDefinition]`

 | 

A list of restriction set definitions, ordered by ascending `name`.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v1_restrictions_listrestrictionsetsresponse "Copy link to heading")core\_api.v1.restrictions.ListRestrictionSetsResponse

*type: Class*

apilint:disable:next LIST\_RESPONSE\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_sets`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction_set.RestrictionSet]`

 | 

A list of matching restriction sets. The order of the items is arbitrary.

 |

## [](#core_api_v1_restrictions_listrestrictionsresponse "Copy link to heading")core\_api.v1.restrictions.ListRestrictionsResponse

*type: Class*

apilint:disable:next LIST\_RESPONSE\_HAS\_PAGINATION

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restrictions`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction.Restriction]`

 | 

A list of matching restrictions.

 |

## [](#core_api_v1_restrictions_restriction "Copy link to heading")core\_api.v1.restrictions.Restriction

*type: Class*

Primitive restriction. This is an output-only object and is always part of a RestrictionSet.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_type`

 | 

`enum 'RestrictionType'`

 | 

Enum value indicating which [restriction type](/vault-core/5-8/EN/api/core_api#restriction_types) this applies to.

 |
| 

`parameters`

 | 

`typing.Dict[str, str]`

 | 

The restriction parameters. Param name (descriptor) → Param value

 |
| 

`customer_id`

 | 

`class 'str'`

 | 

The customer ID this restriction applies to.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The account ID this restriction applies to.

 |
| 

`payment_device_id`

 | 

`class 'str'`

 | 

The payment device ID this restriction applies to.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction applies from, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`expiry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction will expire. If empty, the restriction will not expire automatically, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`id`

 | 

`class 'str'`

 | 

The unique identifier for this restriction.

 |

## [](#core_api_v1_restrictions_restrictiondefinition "Copy link to heading")core\_api.v1.restrictions.RestrictionDefinition

*type: Class*

Definition of a restriction used in describing a restriction set definition.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_type`

 | 

`enum 'RestrictionType'`

 | 

The restriction type of this restriction definition. Required for create requests and must be unique among restriction definitions within a request and not set to unknown.

 |
| 

`required_restriction_levels`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction_level.RestrictionLevel]`

 | 

The restriction levels required when instantiating from the definition. Required for create requests; no duplicates; may not be unknown.

 |

## [](#core_api_v1_restrictions_restrictiondefinitioncreatefields "Copy link to heading")core\_api.v1.restrictions.RestrictionDefinitionCreateFields

*type: Class*

Definition of a restriction used in describing a restriction set definition.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_type`

 | 

`typing.Optional[vc_api.core_api.v1.restrictions._restriction_type.RestrictionType]`

 | 

The restriction type of this restriction definition. Required for create requests and must be unique among restriction definitions within a request and not set to unknown.

 |
| 

`required_restriction_levels`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.restrictions._restriction_level.RestrictionLevel]]`

 | 

The restriction levels required when instantiating from the definition. Required for create requests; no duplicates; may not be unknown.

 |

## [](#core_api_v1_restrictions_restrictionlevel "Copy link to heading")core\_api.v1.restrictions.RestrictionLevel

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESTRICTION_LEVEL_UNKNOWN`

 |  |
| 

`RESTRICTION_LEVEL_CUSTOMER`

 |  |
| 

`RESTRICTION_LEVEL_ACCOUNT`

 |  |
| 

`RESTRICTION_LEVEL_PAYMENT_DEVICE`

 |  |

## [](#core_api_v1_restrictions_restrictionset "Copy link to heading")core\_api.v1.restrictions.RestrictionSet

*type: Class*

An instantiated restriction set definition formed of restrictions that apply to specific `customer_id` or `account_id` or `payment_device_id`.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The unique identifier for this restriction set.

 |
| 

`restriction_set_definition_id`

 | 

`class 'str'`

 | 

The ID of a restriction set definition. Optional for create requests; if not provided for creation, a restriction set definition version ID must be provided.

 |
| 

`restriction_set_definition_version_id`

 | 

`class 'str'`

 | 

The ID of a restriction set definition version. Optional for create requests; if not provided for creation, a restriction set definition ID must be provided.

 |
| 

`name`

 | 

`class 'str'`

 | 

The name of the restriction set. Optional.

 |
| 

`restrictions`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction.Restriction]`

 | 

The restrictions that constitute this restriction set. Output only.

 |
| 

`description`

 | 

`class 'str'`

 | 

A description of the restriction set. Optional.

 |
| 

`restriction_set_parameters`

 | 

`typing.Dict[str, str]`

 | 

The restriction parameters for the parameterised restriction types in the restriction set definition. For example, the restriction type LIMIT\_DEBITS requires `limit_debits_amount` and\`limit\_debits\_currency\` to be included here. Optional unless the restriction set definition version contains restriction types that require parameters.

 |
| 

`customer_id`

 | 

`class 'str'`

 | 

The ID of the customer the CUSTOMER level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level CUSTOMER.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the account the ACCOUNT level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level ACCOUNT.

 |
| 

`payment_device_id`

 | 

`class 'str'`

 | 

The ID of the payment device the PAYMENT\_DEVICE level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level PAYMENT\_DEVICE.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction set should apply from; must be in the future. Optional; default is the current time, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`expiry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction will expire; must be after the effective\_timestamp. Optional; if left empty, the restriction will not expire automatically, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

Indicates if the restriction set is active at the current time or at the time provided when, for example listing restriction sets. Update only.

 |

## [](#core_api_v1_restrictions_restrictionsetcreatefields "Copy link to heading")core\_api.v1.restrictions.RestrictionSetCreateFields

*type: Class*

An instantiated restriction set definition formed of restrictions that apply to specific `customer_id` or `account_id` or `payment_device_id`.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_definition_id`

 | 

`typing.Optional[str]`

 | 

The ID of a restriction set definition. Optional for create requests; if not provided for creation, a restriction set definition version ID must be provided.

 |
| 

`restriction_set_definition_version_id`

 | 

`typing.Optional[str]`

 | 

The ID of a restriction set definition version. Optional for create requests; if not provided for creation, a restriction set definition ID must be provided.

 |
| 

`name`

 | 

`typing.Optional[str]`

 | 

The name of the restriction set. Optional.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

A description of the restriction set. Optional.

 |
| 

`restriction_set_parameters`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

The restriction parameters for the parameterised restriction types in the restriction set definition. For example, the restriction type LIMIT\_DEBITS requires `limit_debits_amount` and\`limit\_debits\_currency\` to be included here. Optional unless the restriction set definition version contains restriction types that require parameters.

 |
| 

`customer_id`

 | 

`typing.Optional[str]`

 | 

The ID of the customer the CUSTOMER level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level CUSTOMER.

 |
| 

`account_id`

 | 

`typing.Optional[str]`

 | 

The ID of the account the ACCOUNT level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level ACCOUNT.

 |
| 

`payment_device_id`

 | 

`typing.Optional[str]`

 | 

The ID of the payment device the PAYMENT\_DEVICE level restrictions are to be applied to. Required for create requests if there is at least one restriction definition with level PAYMENT\_DEVICE.

 |
| 

`effective_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction set should apply from; must be in the future. Optional; default is the current time, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`expiry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the restriction will expire; must be after the effective\_timestamp. Optional; if left empty, the restriction will not expire automatically, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_restrictions_restrictionsetdefinition "Copy link to heading")core\_api.v1.restrictions.RestrictionSetDefinition

*type: Class*

A set of definitions from which restriction sets can be created and applied to customers, accounts and payment devices. It’s an output only object, derived from the versions created.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The unique identifier for this restriction set.

 |
| 

`name`

 | 

`class 'str'`

 | 

The restriction set definition name.

 |
| 

`is_active`

 | 

`class 'bool'`

 | 

Whether the restriction set definition is active. Inactive restriction set definitions may still apply to customers, accounts and payment devices after being made inactive if the entity is still assigned to them.

 |

## [](#core_api_v1_restrictions_restrictionsetdefinitionversion "Copy link to heading")core\_api.v1.restrictions.RestrictionSetDefinitionVersion

*type: Class*

A specific version of a restriction set definition.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

Unique identifier for this restriction set definition version. Output only.

 |
| 

`restriction_definitions`

 | 

`typing.List[vc_api.core_api.v1.restrictions._restriction_definition.RestrictionDefinition]`

 | 

The restriction definitions that constitute this restriction set definition version. Required for create requests.

 |
| 

`restriction_set_definition_id`

 | 

`class 'str'`

 | 

The ID or name of the restriction set definition this version belongs to. Required for create requests.

 |
| 

`description`

 | 

`class 'str'`

 | 

Description of the restriction set definition version. Optional.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp of when the restriction set definition version was created, in UTC. Output only. Formatted as an RFC3339 timestamp.

 |
| 

`is_current`

 | 

`class 'bool'`

 | 

Indicates whether the restriction set definition version is the current version. Output only.

 |

## [](#core_api_v1_restrictions_restrictionsetdefinitionversioncreatefields "Copy link to heading")core\_api.v1.restrictions.RestrictionSetDefinitionVersionCreateFields

*type: Class*

A specific version of a restriction set definition.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_definitions`

 | 

`typing.Optional[typing.List[vc_api.core_api.v1.restrictions._restriction_definition_create_fields.RestrictionDefinitionCreateFields]]`

 | 

The restriction definitions that constitute this restriction set definition version. Required for create requests.

 |
| 

`restriction_set_definition_id`

 | 

`typing.Optional[str]`

 | 

The ID or name of the restriction set definition this version belongs to. Required for create requests.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

Description of the restriction set definition version. Optional.

 |

## [](#core_api_v1_restrictions_restrictionsetupdatefields "Copy link to heading")core\_api.v1.restrictions.RestrictionSetUpdateFields

*type: Class*

An instantiated restriction set definition formed of restrictions that apply to specific `customer_id` or `account_id` or `payment_device_id`.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The unique identifier for this restriction set.

 |
| 

`is_active`

 | 

`typing.Optional[bool]`

 | 

Indicates if the restriction set is active at the current time or at the time provided when, for example listing restriction sets. Update only.

 |

## [](#core_api_v1_restrictions_restrictiontype "Copy link to heading")core\_api.v1.restrictions.RestrictionType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESTRICTION_TYPE_UNKNOWN`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_CREDITS`

 |  |
| 

`RESTRICTION_TYPE_REVIEW_CREDITS`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_DEBITS`

 |  |
| 

`RESTRICTION_TYPE_REVIEW_DEBITS`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_CLOSURE`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_OPENING`

 |  |
| 

`RESTRICTION_TYPE_LIMIT_DEBITS`

 |  |
| 

`RESTRICTION_TYPE_LIMIT_CREDITS`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_UPDATES`

 |  |
| 

`RESTRICTION_TYPE_PREVENT_ACCOUNT_CREATION`

 |  |

## [](#core_api_v1_restrictions_updaterestrictionsetrequest "Copy link to heading")core\_api.v1.restrictions.UpdateRestrictionSetRequest

*type: Class*

UpdateRestrictionSetRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set`

 | 

`typing.Optional[vc_api.core_api.v1.restrictions._restriction_set_update_fields.RestrictionSetUpdateFields]`

 | 

The restriction set to update. Only is\_active can be updated and only from True to False at the current time. Required.

 |
| 

`request_id`

 | 

`typing.Optional[str]`

 | 

The unique string ID used to ensure this request is idempotent. Required.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

The field mask used to indicate which fields in the resource are to be updated. Required. The only valid update path is "is\_active".

 |

## [](#core_api_v1_scheduler_batchgetjobsresponse "Copy link to heading")core\_api.v1.scheduler.BatchGetJobsResponse

*type: Class*

BatchGetJobsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`jobs`

 | 

`typing.Dict[str, vc_api.core_api.v1.scheduler._job.Job]`

 | 

Maps the Job ID to the requested Job.

 |

## [](#core_api_v1_scheduler_batchgetschedulesresponse "Copy link to heading")core\_api.v1.scheduler.BatchGetSchedulesResponse

*type: Class*

BatchGetSchedulesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`schedules`

 | 

`typing.Dict[str, vc_api.core_api.v1.scheduler._schedule.Schedule]`

 | 

Maps the Schedule ID to the requested Schedules.

 |

## [](#core_api_v1_scheduler_job "Copy link to heading")core\_api.v1.scheduler.Job

*type: Class*

Job

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A Unique identifier for a Job.

 |
| 

`status`

 | 

`enum 'JobStatus'`

 | 

The execution status of the Job.

 |
| 

`schedule_id`

 | 

`class 'str'`

 | 

The Schedule ID references the Schedule that the Job belongs to.

 |
| 

`schedule_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the job was scheduled to be triggered, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`publish_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the job was actually published by the Scheduler, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`completed_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Indicates the time that a successful job outcome was received. This timestamp is in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`metadata`

 | 

`typing.Optional[vc_api.core_api.v1.scheduler._job_metadata.JobMetadata]`

 | 

Metadata of the Job.

 |

## [](#core_api_v1_scheduler_jobmetadata "Copy link to heading")core\_api.v1.scheduler.JobMetadata

*type: Class*

JobMetadata is a message that gives more information on the status of the job. Read only.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`service_name`

 | 

`class 'str'`

 | 

service\_name stores the name of the service where the job execution failed.

 |
| 

`error_trace`

 | 

`class 'str'`

 | 

error\_trace is a string containing details of any errors that occurred during processing. The exact content of this string is subject to change. As such, we do not recommend integrating systems to build dependencies on the error trace.

 |
| 

`processed_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

processed\_timestamp is the time that the job outcome was processed by the scheduler.

 |
| 

`retry_count`

 | 

`class 'int'`

 | 

retry\_count is the number of times the job has been automatically retried due to having a retryable error.

 |
| 

`last_retry_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

last\_retry\_timestamp is the time that the job was last retried automatically.

 |

## [](#core_api_v1_scheduler_jobstatus "Copy link to heading")core\_api.v1.scheduler.JobStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`JOB_STATUS_UNKNOWN`

 |  |
| 

`JOB_STATUS_PUBLISHED`

 |  |
| 

`JOB_STATUS_SUCCEEDED`

 |  |
| 

`JOB_STATUS_FAILED`

 |  |
| 

`JOB_STATUS_SKIPPED`

 |  |
| 

`JOB_STATUS_OVERRIDDEN`

 |  |

## [](#core_api_v1_scheduler_listjobsresponse "Copy link to heading")core\_api.v1.scheduler.ListJobsResponse

*type: Class*

ListJobsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`jobs`

 | 

`typing.List[vc_api.core_api.v1.scheduler._job.Job]`

 | 

A list of Jobs that belongs to the specified Schedule ID. Results are not ordered but guaranteed to remain the same.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. Empty token if it is the first page.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. Empty token if it is the last page.

 |

## [](#core_api_v1_scheduler_listschedulesresponse "Copy link to heading")core\_api.v1.scheduler.ListSchedulesResponse

*type: Class*

ListSchedulesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`schedules`

 | 

`typing.List[vc_api.core_api.v1.scheduler._schedule.Schedule]`

 | 

Contains the list of requested Schedules ordered by the time of creation ascending.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. Empty token if it is the first page.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. Empty token if it is the last page.

 |

## [](#core_api_v1_scheduler_resourcetype "Copy link to heading")core\_api.v1.scheduler.ResourceType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESOURCE_TYPE_UNKNOWN`

 |  |
| 

`RESOURCE_TYPE_ACCOUNT`

 |  |
| 

`RESOURCE_TYPE_PLAN`

 |  |

## [](#core_api_v1_scheduler_schedule "Copy link to heading")core\_api.v1.scheduler.Schedule

*type: Class*

This is the response structure when returning Schedules.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The UUID of the Schedule.

 |
| 

`name`

 | 

`class 'str'`

 | 

The name of the Schedule.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The user-friendly display name for the Schedule.

 |
| 

`status`

 | 

`enum 'ScheduleStatus'`

 | 

The Status of the Schedule.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Schedule was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time that the Schedule will first run, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time when the Schedule will stop running, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`next_run_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The next time the Schedule will run, calculated from the Time Expression, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`disabled_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The time the Schedule became disabled, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`time_expression`

 | 

`class 'str'`

 | 

The expression that defines when Jobs will be run. This can be either a cron expression or a schedule method (e.g. `EndOfMonthSchedule`). The syntax for cron expressions follows [https://github.com/thought-machine/cronexpr](https://github.com/thought-machine/cronexpr) (to be used strictly for interpreting cron syntax). For constructing expressions, please refer to the smart contract documentation.

 |
| 

`timezone`

 | 

`class 'str'`

 | 

The timezone the Schedule is in. All timestamps attached to a Schedule are, in UTC. The timezone reflects when the `next_run_timestamp` is calculated according to the time expression.

 |
| 

`tags`

 | 

`typing.List[str]`

 | 

The tags for a given Schedule.

 |
| 

`group`

 | 

`typing.Optional[vc_api.core_api.v1.scheduler._schedule_group_membership.ScheduleGroupMembership]`

 | 

The Group the Schedule belongs to.

 |
| 

`skip_start_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when to start skipping a schedule, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

`skip_end_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp indicating when to resume a skipped schedule, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v1_scheduler_schedulegroupmembership "Copy link to heading")core\_api.v1.scheduler.ScheduleGroupMembership

*type: Class*

The ScheduleGroupMembership stores the details of the Group that the Schedule belongs to.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_id`

 | 

`class 'str'`

 | 

The ID of the Group the Schedule belongs to.

 |
| 

`group_order`

 | 

`class 'int'`

 | 

The order of execution of Schedules in the Group.

 |

## [](#core_api_v1_scheduler_schedulestatus "Copy link to heading")core\_api.v1.scheduler.ScheduleStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`SCHEDULE_STATUS_UNKNOWN`

 |  |
| 

`SCHEDULE_STATUS_ENABLED`

 |  |
| 

`SCHEDULE_STATUS_DISABLED`

 |  |
| 

`SCHEDULE_STATUS_COMPLETED`

 |  |
| 

`SCHEDULE_STATUS_FAILED`

 |  |
| 

`SCHEDULE_STATUS_PENDING`

 |  |
| 

`SCHEDULE_STATUS_DELAYED`

 |  |

## [](#core_api_v1_supervisor_contracts_batchgetsupervisorcontractversionsrequestincludefield "Copy link to heading")core\_api.v1.supervisor\_contracts.BatchGetSupervisorContractVersionsRequestIncludeField

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INCLUDE_FIELD_CODE`

 |  |
| 

`INCLUDE_FIELD_DETAILS_API_VERSION`

 |  |
| 

`INCLUDE_FIELD_DETAILS_NOTIFICATION_TYPES`

 |  |

## [](#core_api_v1_supervisor_contracts_batchgetsupervisorcontractversionsresponse "Copy link to heading")core\_api.v1.supervisor\_contracts.BatchGetSupervisorContractVersionsResponse

*type: Class*

BatchGetSupervisorContractVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`supervisor_contract_versions`

 | 

`typing.Dict[str, vc_api.core_api.v1.supervisor_contracts._supervisor_contract_version.SupervisorContractVersion]`

 | 

Map of ID to Supervisor Contract Version.

 |

## [](#core_api_v1_supervisor_contracts_batchgetsupervisorcontractsresponse "Copy link to heading")core\_api.v1.supervisor\_contracts.BatchGetSupervisorContractsResponse

*type: Class*

BatchGetSupervisorContractsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`supervisor_contracts`

 | 

`typing.Dict[str, vc_api.core_api.v1.supervisor_contracts._supervisor_contract.SupervisorContract]`

 | 

Map of ID to Supervisor Contract.

 |

## [](#core_api_v1_supervisor_contracts_createsupervisorcontractrequest "Copy link to heading")core\_api.v1.supervisor\_contracts.CreateSupervisorContractRequest

*type: Class*

CreateSupervisorContractRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`supervisor_contract`

 | 

`typing.Optional[vc_api.core_api.v1.supervisor_contracts._supervisor_contract_create_fields.SupervisorContractCreateFields]`

 | 

The Supervisor Contract to be created.

 |

## [](#core_api_v1_supervisor_contracts_createsupervisorcontractversionrequest "Copy link to heading")core\_api.v1.supervisor\_contracts.CreateSupervisorContractVersionRequest

*type: Class*

CreateSupervisorContractVersionRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique string ID that is used to ensure the request is idempotent.

 |
| 

`supervisor_contract_version`

 | 

`typing.Optional[vc_api.core_api.v1.supervisor_contracts._supervisor_contract_version_create_fields.SupervisorContractVersionCreateFields]`

 | 

The Supervisor Contract Version to be created.

 |

## [](#core_api_v1_supervisor_contracts_listsupervisorcontractversionsrequestincludefield "Copy link to heading")core\_api.v1.supervisor\_contracts.ListSupervisorContractVersionsRequestIncludeField

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`INCLUDE_FIELD_DETAILS_API_VERSION`

 |  |
| 

`INCLUDE_FIELD_DETAILS_NOTIFICATION_TYPES`

 |  |

## [](#core_api_v1_supervisor_contracts_listsupervisorcontractversionsresponse "Copy link to heading")core\_api.v1.supervisor\_contracts.ListSupervisorContractVersionsResponse

*type: Class*

ListSupervisorContractVersionsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`supervisor_contract_versions`

 | 

`typing.List[vc_api.core_api.v1.supervisor_contracts._supervisor_contract_version.SupervisorContractVersion]`

 | 

A list of Supervisor Contract Versions, ordered by descending creation timestamp.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_supervisor_contracts_listsupervisorcontractsresponse "Copy link to heading")core\_api.v1.supervisor\_contracts.ListSupervisorContractsResponse

*type: Class*

ListSupervisorContractsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`supervisor_contracts`

 | 

`typing.List[vc_api.core_api.v1.supervisor_contracts._supervisor_contract.SupervisorContract]`

 | 

A list of Supervisor Contracts, ordered by descending creation timestamp.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the next page. If empty, this returns the last page of results.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

The token used to retrieve the previous page. If empty, this returns the first page of results.

 |

## [](#core_api_v1_supervisor_contracts_supervisorcontract "Copy link to heading")core\_api.v1.supervisor\_contracts.SupervisorContract

*type: Class*

A parent resource for zero or more \`SupervisorContractVersion\`s.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The human-readable name.

 |

## [](#core_api_v1_supervisor_contracts_supervisorcontractcodedetails "Copy link to heading")core\_api.v1.supervisor\_contracts.SupervisorContractCodeDetails

*type: Class*

Holds information derived from Supervisor code.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`api_version`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

Contracts API version used by the Supervisor Contract.

 |
| 

`display_version`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

Human-readable semantic version of the Supervisor Contract Version.

 |
| 

`notification_types`

 | 

`typing.List[str]`

 | 

The notification types supported by this Supervisor Contract.

 |

## [](#core_api_v1_supervisor_contracts_supervisorcontractcreatefields "Copy link to heading")core\_api.v1.supervisor\_contracts.SupervisorContractCreateFields

*type: Class*

A parent resource for zero or more \`SupervisorContractVersion\`s.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The human-readable name.

 |

## [](#core_api_v1_supervisor_contracts_supervisorcontractversion "Copy link to heading")core\_api.v1.supervisor\_contracts.SupervisorContractVersion

*type: Class*

Contains the original source code of the Supervisor Contract and the structured information about it (e.g. version, event types, hooks, etc.). The latter is derived from the source code and may not be directly set.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Timestamp indicating when it was created, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

`supervisor_contract_id`

 | 

`class 'str'`

 | 

The ID of the `SupervisorContract` of which this is a version.

 |
| 

`display_name`

 | 

`class 'str'`

 | 

The human-readable name.

 |
| 

`description`

 | 

`class 'str'`

 | 

The human-readable description.

 |
| 

`code`

 | 

`class 'str'`

 | 

The source code.

 |
| 

`details`

 | 

`typing.Optional[vc_api.core_api.v1.supervisor_contracts._supervisor_contract_code_details.SupervisorContractCodeDetails]`

 | 

Additional information about the Supervisor Contract derived from the code (API version, etc.).

 |

## [](#core_api_v1_supervisor_contracts_supervisorcontractversioncreatefields "Copy link to heading")core\_api.v1.supervisor\_contracts.SupervisorContractVersionCreateFields

*type: Class*

Contains the original source code of the Supervisor Contract and the structured information about it (e.g. version, event types, hooks, etc.). The latter is derived from the source code and may not be directly set.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

A unique ID. Can be provided by the client, otherwise it will be a service-generated UUID.

 |
| 

`supervisor_contract_id`

 | 

`typing.Optional[str]`

 | 

The ID of the `SupervisorContract` of which this is a version.

 |
| 

`display_name`

 | 

`typing.Optional[str]`

 | 

The human-readable name.

 |
| 

`description`

 | 

`typing.Optional[str]`

 | 

The human-readable description.

 |
| 

`code`

 | 

`typing.Optional[str]`

 | 

The source code.

 |

## [](#core_api_v1_vaultversion_vaultcoreextension "Copy link to heading")core\_api.v1.vaultversion.VaultCoreExtension

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`VAULT_CORE_EXTENSION_UNKNOWN`

 |  |
| 

`VAULT_CORE_EXTENSION_MULTIPLE_PROCESSING_GROUPS`

 |  |
| 

`VAULT_CORE_EXTENSION_HIGH_VOLUME_ACCOUNTS`

 |  |
| 

`VAULT_CORE_EXTENSION_SCHEDULED_ADJUSTMENTS`

 |  |

## [](#core_api_v1_vaultversion_vaultversion "Copy link to heading")core\_api.v1.vaultversion.VaultVersion

*type: Class*

VaultVersion

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`version`

 | 

`typing.Optional[vc_api.common._sem_ver.SemVer]`

 | 

The Vault version.

 |
| 

`pre_release`

 | 

`class 'str'`

 | 

The pre-release tag.

 |
| 

`build`

 | 

`class 'str'`

 | 

The build tag.

 |
| 

`extensions`

 | 

`typing.List[vc_api.core_api.v1.vaultversion._vault_core_extension.VaultCoreExtension]`

 | 

List of enabled Vault Core Extensions.

 |

## [](#core_api_v2_accounts_account "Copy link to heading")core\_api.v2.accounts.Account

*type: Class*

Account

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`class 'str'`

 | 

The ID of the Account. When creating a customer Account this field is optional and will default to a UUID if not provided. When creating an internal Account this field is required. Max length: 36 characters.

 |
| 

`type`

 | 

`enum 'AccountType'`

 | 

The type of the Account. Required.

 |
| 

`smart_contract_version_id`

 | 

`class 'str'`

 | 

The ID of the Smart Contract Version the Account is currently on.

*For create requests*: This must be set for Customer Accounts, but must be empty for Internal Accounts.

*For update requests*: This can be directly updated to request the converting of a Customer Account to a new Smart Contract version.

Only the hooks on this Smart Contract Version will be executed (supervisors and propagation delays notwithstanding) with the exception of the conversion hook which would be run for the pending Smart Contract Version.

 |
| 

`pending_smart_contract_version_id`

 | 

`class 'str'`

 | 

The ID of the Smart Contract Version the Account is converting to. A non-empty value indicates that the conversion hook has been successfully executed and that directives are being committed. Vault sets this field automatically while converting the Account to a new Smart Contract Version; if it remains populated for any length of time it may indicate that user intervention is required. Vault will continually attempt to move to this Smart Contract Version asynchronously. Until the Account is successfully moved to this Smart Contract Version, hooks from its current Smart Contract Version will be executed. Immediately following moving to this Smart Contract Version, there may be delay in propagating changes; in some cases the hooks on the previous Smart Contract Version are executed for postings, scheduled events and parameter changes.

 |
| 

`stakeholder_ids`

 | 

`typing.List[str]`

 | 

The list of stakeholders on the Account. Empty for Internal Accounts.

 |
| 

`alias`

 | 

`class 'str'`

 | 

A user-provided alias for the Account. Optional.

 |
| 

`status`

 | 

`enum 'AccountStatus'`

 | 

The status of the Account. When creating an Internal Account this must be set to OPEN. When creating a Customer Account this must be set to either PENDING or OPEN. This can only be updated to OPEN, CLOSED or CANCELLED.

 |
| 

`vault_create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the Account was created in Vault, in UTC. Output only. Formatted as an RFC3339 timestamp.

 |
| 

`source_create_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the Account was created, in UTC. Output only. This value may be backdated for Accounts migrated to Vault via the Data Loader API. Formatted as an RFC3339 timestamp.

 |
| 

`source_open_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the Account finished moving to status OPEN, in UTC. Output only. This value may be earlier than the `vault_create_timestamp` for Accounts migrated to Vault via the Data Loader API. This value is always greater than or equal to `source_create_timestamp`. Formatted as an RFC3339 timestamp.

 |
| 

`source_close_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the Account finished moving to status CLOSED, in UTC. Output only. This value may be earlier than the `vault_create_timestamp` for Accounts migrated to Vault via the Data Loader API. This value is always greater than or equal to `source_open_timestamp`. Formatted as an RFC3339 timestamp.

 |
| 

`update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

When the Account was last updated, in UTC. This field will have the same value as `vault_create_timestamp` for Accounts that have never been updated. Output only. Formatted as an RFC3339 timestamp.

 |
| 

`activation_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The effective time that the Account’s activation hook was run, in UTC. This field can optionally be set to a backdated value when creating an open customer Account. If not provided, it will default to the time of the request. This value will be earlier than the `vault_create_timestamp` for Accounts created in OPEN, because the activation hook is executed before creating the Account. Formatted as an RFC3339 timestamp. The value corresponds to the value of the `effective_datetime` hook argument when the activation hook is run.

 |
| 

`permitted_denominations`

 | 

`typing.List[str]`

 | 

A set of denominations, which is accessible from within the Smart Contract:

\- If the Smart Contract Version specifies supported denominations, then this set must be a subset of those (if none are specified here then the field will be set to the Smart Contract Version’s supported denominations). - If the Smart Contract Version does not specify denominations, then at least one must be specified when creating the Account.

Incoming Postings are not required to specify a denomination contained in this list; if this validation is required then it must be implemented in the Smart Contract. This field cannot be updated, and cannot be populated for Internal Accounts, unless created via the v1/internal-accounts endpoint (deprecated).

 |
| 

`details`

 | 

`typing.Dict[str, str]`

 | 

User-provided key/value Account details. Vault does not use data stored here, it is purely for use by downstream systems. Entries can be removed by specifying a key with an empty value. Keys with values will create new entries or replace existing ones. Any existing entries with keys not in the request will not be modified. Optional.

 |
| 

`t_side`

 | 

`enum 'TSide'`

 | 

The side of the balance sheet where the Account balance is counted. Can be optionally provided when creating Internal Accounts. If it is not provided, it will default to LIABILITY. For Customer Accounts, the t\_side is defined in the Smart Contract. It cannot be provided in this request.

 |
| 

`contract_update_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The most recent time at which the Smart Contract Version was updated on the Account, in UTC. Empty if it has never changed. Formatted as an RFC3339 timestamp. The value corresponds to the `effective_datetime` hook argument when the conversion hook was last run.

 |
| 

`processing_group_id`

 | 

`class 'str'`

 | 

The ID of the Processing Group the Account is in. Can only be provided for create requests. If omitted, the Account will be assigned to the default Processing Group.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`class 'str'`

 | 

The ID of the Parameter Value Hierarchy Node which the Account is associated with. Optional.

 |
| 

`processing_label`

 | 

`class 'str'`

 | 

The processing label, used in Posting Instructions to target a particular Internal Account for the Customer Account’s Processing Group. Only one Internal Account can be assigned a specific label for each Processing Group. Can only be applied to Internal Accounts. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v2_accounts_accountcreatefields "Copy link to heading")core\_api.v2.accounts.AccountCreateFields

*type: Class*

AccountCreateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The ID of the Account. When creating a customer Account this field is optional and will default to a UUID if not provided. When creating an internal Account this field is required. Max length: 36 characters.

 |
| 

`type`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_type.AccountType]`

 | 

The type of the Account. Required.

 |
| 

`smart_contract_version_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Smart Contract Version the Account is currently on.

*For create requests*: This must be set for Customer Accounts, but must be empty for Internal Accounts.

*For update requests*: This can be directly updated to request the converting of a Customer Account to a new Smart Contract version.

Only the hooks on this Smart Contract Version will be executed (supervisors and propagation delays notwithstanding) with the exception of the conversion hook which would be run for the pending Smart Contract Version.

 |
| 

`stakeholder_ids`

 | 

`typing.Optional[typing.List[str]]`

 | 

The list of stakeholders on the Account. Empty for Internal Accounts.

 |
| 

`alias`

 | 

`typing.Optional[str]`

 | 

A user-provided alias for the Account. Optional.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_status.AccountStatus]`

 | 

The status of the Account. When creating an Internal Account this must be set to OPEN. When creating a Customer Account this must be set to either PENDING or OPEN. This can only be updated to OPEN, CLOSED or CANCELLED.

 |
| 

`activation_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

The effective time that the Account’s activation hook was run, in UTC. This field can optionally be set to a backdated value when creating an open customer Account. If not provided, it will default to the time of the request. This value will be earlier than the `vault_create_timestamp` for Accounts created in OPEN, because the activation hook is executed before creating the Account. Formatted as an RFC3339 timestamp. The value corresponds to the value of the `effective_datetime` hook argument when the activation hook is run.

 |
| 

`permitted_denominations`

 | 

`typing.Optional[typing.List[str]]`

 | 

A set of denominations, which is accessible from within the Smart Contract:

\- If the Smart Contract Version specifies supported denominations, then this set must be a subset of those (if none are specified here then the field will be set to the Smart Contract Version’s supported denominations). - If the Smart Contract Version does not specify denominations, then at least one must be specified when creating the Account.

Incoming Postings are not required to specify a denomination contained in this list; if this validation is required then it must be implemented in the Smart Contract. This field cannot be updated, and cannot be populated for Internal Accounts, unless created via the v1/internal-accounts endpoint (deprecated).

 |
| 

`details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

User-provided key/value Account details. Vault does not use data stored here, it is purely for use by downstream systems. Entries can be removed by specifying a key with an empty value. Keys with values will create new entries or replace existing ones. Any existing entries with keys not in the request will not be modified. Optional.

 |
| 

`t_side`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._t_side.TSide]`

 | 

The side of the balance sheet where the Account balance is counted. Can be optionally provided when creating Internal Accounts. If it is not provided, it will default to LIABILITY. For Customer Accounts, the t\_side is defined in the Smart Contract. It cannot be provided in this request.

 |
| 

`processing_group_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Processing Group the Account is in. Can only be provided for create requests. If omitted, the Account will be assigned to the default Processing Group.

**Multiple Processing Groups are only available as an Extension.**

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node which the Account is associated with. Optional.

 |
| 

`processing_label`

 | 

`typing.Optional[str]`

 | 

The processing label, used in Posting Instructions to target a particular Internal Account for the Customer Account’s Processing Group. Only one Internal Account can be assigned a specific label for each Processing Group. Can only be applied to Internal Accounts. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v2_accounts_accountcreateoptions "Copy link to heading")core\_api.v2.accounts.AccountCreateOptions

*type: Class*

These allow for providing values for Account-owned Parameter Values. These can be legacy Instance Parameters, and/or the new Expected Parameters.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`parameter_values`

 | 

`typing.Optional[typing.Dict[str, vc_api.core_api.v1.parameters._value.Value]]`

 | 

Parameter Values for instance parameters and expected parameters. For Expected Parameters, the key is the Parameter’s ID. For Instance Parameters, the key must match the name as defined in the contract. The `effective_from_timestamp` of these parameter values will be set to the account’s `activation_timestamp`. Note: Any `default_value` specified in the Smart Contract will not be used on Account creation requests; it is only used in Account conversions performed via `v1/account-migrations`, and only for Instance Parameters introduced in the new Smart Contract version.

 |

## [](#core_api_v2_accounts_accountstatus "Copy link to heading")core\_api.v2.accounts.AccountStatus

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_STATUS_UNKNOWN`

 |  |
| 

`ACCOUNT_STATUS_PENDING`

 |  |
| 

`ACCOUNT_STATUS_OPENING`

 |  |
| 

`ACCOUNT_STATUS_OPEN`

 |  |
| 

`ACCOUNT_STATUS_CLOSING`

 |  |
| 

`ACCOUNT_STATUS_CLOSED`

 |  |
| 

`ACCOUNT_STATUS_CANCELLED`

 |  |
| 

`ACCOUNT_STATUS_PENDING_OPENING`

 |  |
| 

`ACCOUNT_STATUS_PENDING_CLOSURE`

 |  |

## [](#core_api_v2_accounts_accounttype "Copy link to heading")core\_api.v2.accounts.AccountType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_TYPE_UNKNOWN`

 |  |
| 

`ACCOUNT_TYPE_CUSTOMER`

 |  |
| 

`ACCOUNT_TYPE_INTERNAL`

 |  |

## [](#core_api_v2_accounts_accountupdatefields "Copy link to heading")core\_api.v2.accounts.AccountUpdateFields

*type: Class*

AccountUpdateFields

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`typing.Optional[str]`

 | 

The ID of the Account. When creating a customer Account this field is optional and will default to a UUID if not provided. When creating an internal Account this field is required. Max length: 36 characters.

 |
| 

`smart_contract_version_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Smart Contract Version the Account is currently on.

*For create requests*: This must be set for Customer Accounts, but must be empty for Internal Accounts.

*For update requests*: This can be directly updated to request the converting of a Customer Account to a new Smart Contract version.

Only the hooks on this Smart Contract Version will be executed (supervisors and propagation delays notwithstanding) with the exception of the conversion hook which would be run for the pending Smart Contract Version.

 |
| 

`stakeholder_ids`

 | 

`typing.Optional[typing.List[str]]`

 | 

The list of stakeholders on the Account. Empty for Internal Accounts.

 |
| 

`alias`

 | 

`typing.Optional[str]`

 | 

A user-provided alias for the Account. Optional.

 |
| 

`status`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_status.AccountStatus]`

 | 

The status of the Account. When creating an Internal Account this must be set to OPEN. When creating a Customer Account this must be set to either PENDING or OPEN. This can only be updated to OPEN, CLOSED or CANCELLED.

 |
| 

`details`

 | 

`typing.Optional[typing.Dict[str, str]]`

 | 

User-provided key/value Account details. Vault does not use data stored here, it is purely for use by downstream systems. Entries can be removed by specifying a key with an empty value. Keys with values will create new entries or replace existing ones. Any existing entries with keys not in the request will not be modified. Optional.

 |
| 

`parameter_value_hierarchy_node_id`

 | 

`typing.Optional[str]`

 | 

The ID of the Parameter Value Hierarchy Node which the Account is associated with. Optional.

 |
| 

`processing_label`

 | 

`typing.Optional[str]`

 | 

The processing label, used in Posting Instructions to target a particular Internal Account for the Customer Account’s Processing Group. Only one Internal Account can be assigned a specific label for each Processing Group. Can only be applied to Internal Accounts. Optional.

**Multiple Processing Groups are only available as an Extension.**

 |

## [](#core_api_v2_accounts_batchgetaccountsresponse "Copy link to heading")core\_api.v2.accounts.BatchGetAccountsResponse

*type: Class*

BatchGetAccountsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`accounts`

 | 

`typing.Dict[str, vc_api.core_api.v2.accounts._account.Account]`

 | 

The retrieved Accounts. This is a map Accounts keyed on ID.

 |

## [](#core_api_v2_accounts_createaccountrequest "Copy link to heading")core\_api.v2.accounts.CreateAccountRequest

*type: Class*

CreateAccountRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID for the request. Used for idempotence.

 |
| 

`account`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_create_fields.AccountCreateFields]`

 | 

The Account to create.

 |
| 

`create_options`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_create_options.AccountCreateOptions]`

 | 

The create options. Only applies to Customer Accounts.

 |

## [](#core_api_v2_accounts_listaccountsrequestorderby "Copy link to heading")core\_api.v2.accounts.ListAccountsRequestOrderBy

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`ORDER_BY_ACCOUNT_ID_ASC`

 |  |
| 

`ORDER_BY_ACCOUNT_ID_DESC`

 |  |
| 

`ORDER_BY_SOURCE_CREATE_TIMESTAMP_ASC`

 |  |
| 

`ORDER_BY_SOURCE_CREATE_TIMESTAMP_DESC`

 |  |

## [](#core_api_v2_accounts_listaccountsresponse "Copy link to heading")core\_api.v2.accounts.ListAccountsResponse

*type: Class*

ListAccountsResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`accounts`

 | 

`typing.List[vc_api.core_api.v2.accounts._account.Account]`

 | 

A list of matching Accounts.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#core_api_v2_accounts_tside "Copy link to heading")core\_api.v2.accounts.TSide

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`T_SIDE_UNKNOWN`

 |  |
| 

`T_SIDE_ASSET`

 |  |
| 

`T_SIDE_LIABILITY`

 |  |

## [](#core_api_v2_accounts_updateaccountrequest "Copy link to heading")core\_api.v2.accounts.UpdateAccountRequest

*type: Class*

UpdateAccountRequest

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

`typing.Optional[str]`

 | 

A unique ID for the request. Used for idempotence.

 |
| 

`account`

 | 

`typing.Optional[vc_api.core_api.v2.accounts._account_update_fields.AccountUpdateFields]`

 | 

The Account to update. Only the fields being updated need to be specified.

 |
| 

`update_mask`

 | 

`typing.Optional[vc_api.common._field_mask.FieldMask]`

 | 

The fields to update. The only accepted fields are `stakeholder_ids`, `details`, `status`, `smart_contract_version_id`, `parameter_value_hierarchy_node_id`, `alias` or `processing_label`. Only one field can be updated in a single request. See the documentation for the `details` field to understand how it can be updated.

 |

## [](#core_api_v2_balances_balance "Copy link to heading")core\_api.v2.balances.Balance

*type: Class*

Balance

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The net value of the balance.

 |
| 

`total_debit`

 | 

`class 'str'`

 | 

The total sum of debits.

 |
| 

`total_credit`

 | 

`class 'str'`

 | 

The total sum of credits.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the associated account.

 |
| 

`account_address`

 | 

`class 'str'`

 | 

The account address represents one partition of the total balances held on the account.

 |
| 

`phase`

 | 

`enum 'PostingPhase'`

 | 

The posting phase the balance applies to.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset in which the balance is held.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The denomination in which the balance is held for the given asset.

 |
| 

`timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

A timestamp at which the balance is effective, in UTC. Formatted as an RFC3339 timestamp.

 |

## [](#core_api_v2_balances_balancelistbalancesliveresponse "Copy link to heading")core\_api.v2.balances.BalanceListBalancesLiveResponse

*type: Class*

BalanceListBalancesLiveResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`class 'str'`

 | 

The net value of the balance.

 |
| 

`total_debit`

 | 

`class 'str'`

 | 

The total sum of debits.

 |
| 

`total_credit`

 | 

`class 'str'`

 | 

The total sum of credits.

 |
| 

`account_id`

 | 

`class 'str'`

 | 

The ID of the associated account.

 |
| 

`account_address`

 | 

`class 'str'`

 | 

The account address represents one partition of the total balances held on the account.

 |
| 

`phase`

 | 

`enum 'PostingPhase'`

 | 

The posting phase the balance applies to.

 |
| 

`asset`

 | 

`class 'str'`

 | 

The asset in which the balance is held.

 |
| 

`denomination`

 | 

`class 'str'`

 | 

The denomination in which the balance is held for the given asset.

 |

## [](#core_api_v2_balances_balancetimeview "Copy link to heading")core\_api.v2.balances.BalanceTimeView

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`BALANCE_TIME_VIEW_VALUE`

 |  |
| 

`BALANCE_TIME_VIEW_BOOKING`

 |  |

## [](#core_api_v2_balances_listbalancesendresponse "Copy link to heading")core\_api.v2.balances.ListBalancesEndResponse

*type: Class*

ListBalancesEndResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`balances`

 | 

`typing.List[vc_api.core_api.v2.balances._balance.Balance]`

 | 

A list of end balances for the account.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, the response is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, the response is the last page of results.

 |
| 

`snapshot_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Snapshot timestamp used to query the balances (Vault Core’s balance view based on the balance time view (booking/value) and the insertion\_timestamp).

 |

## [](#core_api_v2_balances_listbalancesliveresponse "Copy link to heading")core\_api.v2.balances.ListBalancesLiveResponse

*type: Class*

ListBalancesLiveResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`balances`

 | 

`typing.List[vc_api.core_api.v2.balances._balance_list_balances_live_response.BalanceListBalancesLiveResponse]`

 | 

A list of matching balances.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, the response is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, the response is the last page of results.

 |

## [](#core_api_v2_balances_listbalancesseriesresponse "Copy link to heading")core\_api.v2.balances.ListBalancesSeriesResponse

*type: Class*

ListBalancesSeriesResponse

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`balances`

 | 

`typing.List[vc_api.core_api.v2.balances._balance.Balance]`

 | 

A list of matching balances.

 |
| 

`previous_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the previous page. If empty, the response is the first page of results.

 |
| 

`next_page_token`

 | 

`class 'str'`

 | 

Token used to retrieve the next page. If empty, the response is the last page of results.

 |
| 

`snapshot_timestamp`

 | 

`typing.Optional[datetime.datetime]`

 | 

Snapshot timestamp used to query the balances (Vault Core’s balance view based on insertion\_timestamps).

 |

## [](#errors_abortederror "Copy link to heading")errors.AbortedError

*type: Class*

The operation was aborted, typically due to a concurrency issue.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_alreadyexistserror "Copy link to heading")errors.AlreadyExistsError

*type: Class*

The resource could not be created because it already exists.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_badrequest "Copy link to heading")errors.BadRequest

*type: Class*

Describes violations in a client request. This error type pertains to problems that can only be fixed by changing the request.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`class 'str'`

 | 

A type name to identify this detail.

 |
| 

`field_violations`

 | 

`typing.List[vc_api.errors._bad_request_field_violation.BadRequestFieldViolation]`

 | 

Describes all violations in a request.

 |

## [](#errors_badrequestfieldviolation "Copy link to heading")errors.BadRequestFieldViolation

*type: Class*

A message type used to describe a single bad request field.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`field`

 | 

`class 'str'`

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

`violation_type`

 | 

`enum 'BadRequestViolationType'`

 | 

Type of violation.

 |
| 

`description`

 | 

`class 'str'`

 | 

A description of why the request field is invalid.

 |

## [](#errors_badrequestviolationtype "Copy link to heading")errors.BadRequestViolationType

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`UNKNOWN`

 |  |
| 

`INVALID_FORMAT`

 |  |
| 

`INVALID_VALUE`

 |  |
| 

`ABOVE_MAX_VALUE`

 |  |
| 

`BELOW_MIN_VALUE`

 |  |
| 

`ABOVE_MAX_LENGTH`

 |  |
| 

`BELOW_MIN_LENGTH`

 |  |
| 

`PATTERN_MISMATCH`

 |  |
| 

`PREFIX_MISMATCH`

 |  |
| 

`SUFFIX_MISMATCH`

 |  |
| 

`REQUIRED_FIELD`

 |  |
| 

`DUPLICATE_VALUE`

 |  |

## [](#errors_cancellederror "Copy link to heading")errors.CancelledError

*type: Class*

The requested operation was cancelled part way through.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_code "Copy link to heading")errors.Code

*type: Enum*

An enumeration.

Enum values  
| Name | Description |
| --- | --- |
| 
`OK`

 |  |
| 

`CANCELLED`

 |  |
| 

`UNKNOWN`

 |  |
| 

`INVALID_ARGUMENT`

 |  |
| 

`DEADLINE_EXCEEDED`

 |  |
| 

`NOT_FOUND`

 |  |
| 

`ALREADY_EXISTS`

 |  |
| 

`PERMISSION_DENIED`

 |  |
| 

`UNAUTHENTICATED`

 |  |
| 

`RESOURCE_EXHAUSTED`

 |  |
| 

`FAILED_PRECONDITION`

 |  |
| 

`ABORTED`

 |  |
| 

`OUT_OF_RANGE`

 |  |
| 

`UNIMPLEMENTED`

 |  |
| 

`INTERNAL`

 |  |
| 

`UNAVAILABLE`

 |  |
| 

`DATA_LOSS`

 |  |

## [](#errors_datalosserror "Copy link to heading")errors.DataLossError

*type: Class*

The operation resulted in unrecoverable data loss or corruption.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_deadlineexceedederror "Copy link to heading")errors.DeadlineExceededError

*type: Class*

The response was not received within the allowed time. It can be safely retried. The operation could have completed successfully.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_error "Copy link to heading")errors.Error

*type: Class*

Error response containing message, code and specific error details.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 | 

Error message, human readable. Exact message is subject to change and should not be used programmatically.

 |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 | 

The code of the error.

 |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 | 

An optional list of messages that carry the error details.

 |

## [](#errors_failedpreconditionerror "Copy link to heading")errors.FailedPreconditionError

*type: Class*

The operation was rejected because the system was not in a state required for the operation’s execution. It could be that a referenced resource did not exist, or was in the wrong state.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_httperror "Copy link to heading")errors.HTTPError

*type: Class*

Error response containing message, code and specific error details.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 | 

Error message, human readable. Exact message is subject to change and should not be used programmatically.

 |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 | 

The code of the error.

 |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 | 

An optional list of messages that carry the error details.

 |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 | 

Tracing ID used to identify a response’s origin.

 |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 | 

This field is deprecated. Use `code` and `details` fields

 |

## [](#errors_internalerror "Copy link to heading")errors.InternalError

*type: Class*

A problem occurred on the server. This is almost certainly due to a fault in the platform.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_invalidargumenterror "Copy link to heading")errors.InvalidArgumentError

*type: Class*

There was a problem with the request. A provided field is invalid and/or a required field is missing. Unlike FAILED\_PRECONDITION, the only remedy is likely to be a change to the request.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_invalidcode "Copy link to heading")errors.InvalidCode

*type: Class*

Details of problems with submitted source code.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`class 'str'`

 | 

A type name to identify this detail.

 |
| 

`violations`

 | 

`typing.List[vc_api.errors._invalid_code_code_violation.InvalidCodeCodeViolation]`

 | 

Individual causes for invalidity of the source code.

 |

## [](#errors_invalidcodecodeviolation "Copy link to heading")errors.InvalidCodeCodeViolation

*type: Class*

CodeViolation represents a violation within provided code.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`violation_type`

 | 

`class 'str'`

 | 

Broad category of CodeViolation. For example, DisallowedError, DefinitionError, SyntaxError (this list is not exhaustive).

 |
| 

`code`

 | 

`class 'str'`

 | 

The offending portion of source code. Empty if unknown or not applicable.

 |
| 

`description`

 | 

`class 'str'`

 | 

A human-readable description of the CodeViolation.

 |
| 

`lineno`

 | 

`class 'int'`

 | 

Starting line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

`offset`

 | 

`class 'int'`

 | 

Starting character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

`end_lineno`

 | 

`class 'int'`

 | 

Ending line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

`end_offset`

 | 

`class 'int'`

 | 

Ending character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |

## [](#errors_notfounderror "Copy link to heading")errors.NotFoundError

*type: Class*

The requested resource could not be found.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_outofrangeerror "Copy link to heading")errors.OutOfRangeError

*type: Class*

The operation was attempted outside the valid range.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_permissiondeniederror "Copy link to heading")errors.PermissionDeniedError

*type: Class*

The client did not have permission to perform the request.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_preconditionfailure "Copy link to heading")errors.PreconditionFailure

*type: Class*

Describes what preconditions have failed, which will require fixing before this request becomes valid.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`class 'str'`

 | 

A type name to identify this detail.

 |
| 

`violations`

 | 

`typing.List[vc_api.errors._precondition_failure_violation.PreconditionFailureViolation]`

 | 

Describes all precondition violations.

 |

## [](#errors_preconditionfailureviolation "Copy link to heading")errors.PreconditionFailureViolation

*type: Class*

A message type used to describe a single precondition failure.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`violation_type`

 | 

`class 'str'`

 | 

Type of violation, specific to the resource or API and can be used to programmatically handle the error. Formatted in upper case, e.g. "RESOURCE\_INACTIVE".

 |
| 

`metadata`

 | 

`typing.Dict[str, str]`

 | 

Additional structured details about this error.

 |

## [](#errors_resourceexhaustederror "Copy link to heading")errors.ResourceExhaustedError

*type: Class*

A resource was exhausted, because either too many requests were sent within a time period or the response was too large.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_resourceinfo "Copy link to heading")errors.ResourceInfo

*type: Class*

Describes the resources being accessed.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`class 'str'`

 | 

A type name to identify this detail.

 |
| 

`resource_ids`

 | 

`typing.List[str]`

 | 

The identifier of the resources being accessed.

 |

## [](#errors_unauthenticatederror "Copy link to heading")errors.UnauthenticatedError

*type: Class*

The request could not be authenticated.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_unavailableerror "Copy link to heading")errors.UnavailableError

*type: Class*

The service was unavailable. It can be safely retried.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_unimplementederror "Copy link to heading")errors.UnimplementedError

*type: Class*

The operation is not implemented.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#errors_unknownerror "Copy link to heading")errors.UnknownError

*type: Class*

An unknown problem occurred on the server.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`typing.Optional[str]`

 |  |
| 

`code`

 | 

`typing.Optional[vc_api.errors._code.Code]`

 |  |
| 

`details`

 | 

`typing.Optional[typing.List[typing.Union[vc_api.errors._bad_request.BadRequest, vc_api.errors._invalid_code.InvalidCode, vc_api.errors._precondition_failure.PreconditionFailure, vc_api.errors._resource_info.ResourceInfo]]]`

 |  |
| 

`tracing_id`

 | 

`typing.Optional[str]`

 |  |
| 

`vault_error_code`

 | 

`typing.Optional[str]`

 |  |

## [](#exceptions_mixinhttperror "Copy link to heading")exceptions.MixinHTTPError

*type: Class*

## [](#exceptions_modelinstantiationerror "Copy link to heading")exceptions.ModelInstantiationError

*type: Class*

Error raised when an invalid combination of positional and keyword arguments is provided.

Signature of the constructor for this class:

## [](#exceptions_responsedeserializationerror "Copy link to heading")exceptions.ResponseDeserializationError

*type: Class*

Error raised when an error occur while trying to deserialize an HTTP response.

Signature of the constructor for this class:

## [](#exceptions_vaultcoreapibaseexception "Copy link to heading")exceptions.VaultCoreAPIBaseException

*type: Class*

An instance of VaultCoreAPIBaseException contains details about an error returned by the VC API library while completing internal operations.

Signature of the constructor for this class:

## [](#exceptions_vaultcorehttperror "Copy link to heading")exceptions.VaultCoreHTTPError

*type: Class*

Error raised when an HTTP connection error occurs.

Signature of the constructor for this class: