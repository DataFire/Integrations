# @datafire/clickmeter
Api dashboard for ClickMeter API

## Operation: account.get
Retrieve current account data

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.User"
}
```
## Operation: account.post
Update current account data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Accounting.User"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.User"
}
```
## Operation: account.domainwhitelist.get
Retrieve list of a domains allowed to redirect in DDU mode

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.DomainWhitelistEntry]"
}
```
## Operation: account.domainwhitelist.post
Create an domain entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Accounting.DomainWhitelistEntry"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.DomainWhitelistEntry"
}
```
## Operation: account.domainwhitelist.whitelistId.delete
Delete an domain entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "whitelistId": {
      "type": "string",
      "description": "The id of the domain to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "whitelistId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.DomainWhitelistEntry"
}
```
## Operation: account.guests.get
Retrieve list of a guest

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: account.guests.post
Create a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Accounting.Guest"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.Guest"
}
```
## Operation: account.guests.count.get
Retrieve count of guests

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: account.guests.guestId.delete
Delete a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: account.guests.guestId.get
Retrieve a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.Guest"
}
```
## Operation: account.guests.guestId.post
Update a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Accounting.Guest"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.Guest"
}
```
## Operation: account.guests.guestId.permissions.get
Retrieve permissions for a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    },
    "entityType": {
      "type": "string",
      "description": "Can be \"datapoint\" or \"group\"",
      "enum": [
        "datapoint",
        "group"
      ]
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "type": {
      "type": "string",
      "description": "Can be \"w\" or \"r\"",
      "enum": [
        "r",
        "w"
      ]
    },
    "entityId": {
      "type": "integer",
      "format": "int64",
      "description": "Optional id of the datapoint/group entity to filter by"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Grants.Grant]"
}
```
## Operation: account.guests.guestId.permissions.count.get
Retrieve count of the permissions for a guest

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    },
    "entityType": {
      "type": "string",
      "description": "Can be \"datapoint\" or \"group\"",
      "enum": [
        "datapoint",
        "group"
      ]
    },
    "type": {
      "type": "string",
      "description": "Can be \"w\" or \"r\"",
      "enum": [
        "r",
        "w"
      ]
    },
    "entityId": {
      "type": "integer",
      "format": "int64",
      "description": "Optional id of the datapoint/group entity to filter by"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: account.guests.guestId.type.permissions.patch.post
Change the permission on a shared object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    },
    "type": {
      "type": "string",
      "description": "Can be \"datapoint\" or \"group\"",
      "enum": [
        "datapoint",
        "group"
      ]
    },
    "body": {
      "$ref": "#/definitions/Api.Core.Requests.PermissionPatchRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId",
    "type",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: account.guests.guestId.type.permissions.patch.put
Change the permission on a shared object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guestId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the guest"
    },
    "type": {
      "type": "string",
      "description": "Can be \"datapoint\" or \"group\"",
      "enum": [
        "datapoint",
        "group"
      ]
    },
    "body": {
      "$ref": "#/definitions/Api.Core.Requests.PermissionPatchRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "guestId",
    "type",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: account.ipblacklist.get
Retrieve list of a ip to exclude from event tracking

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Accounting.IpBlacklistEntry]"
}
```
## Operation: account.ipblacklist.post
Create an ip blacklist entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Accounting.IpBlacklistEntry"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.IpBlacklistEntry"
}
```
## Operation: account.ipblacklist.blacklistId.delete
Delete an ip blacklist entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blacklistId": {
      "type": "string",
      "description": "The id of the ip to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "blacklistId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.IpBlacklistEntry"
}
```
## Operation: account.plan.get
Retrieve current account plan

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.Plan"
}
```
## Operation: aggregated.get
Retrieve statistics about this customer for a timeframe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    },
    "onlyFavorites": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: aggregated.list.get
Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: aggregated.summary.conversions.get
Retrieve statistics about a subset of conversions for a timeframe with conversions data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of conversion (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedSummaryResult"
}
```
## Operation: aggregated.summary.datapoints.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the datapoint marked as favourite"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "groupId": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this group id"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame",
    "type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedSummaryResult"
}
```
## Operation: aggregated.summary.groups.get
Retrieve statistics about a subset of groups for a timeframe with groups data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of group (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the group marked as favourite"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedSummaryResult"
}
```
## Operation: clickstream.get
Retrieve the latest list of events of this account. Limited to last 100.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "group": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this group id (mutually exclusive with \"datapoint\" and \"conversion\")"
    },
    "datapoint": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this datapoint id (mutually exclusive with \"group\" and \"conversion\")"
    },
    "conversion": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this conversion id (mutually exclusive with \"datapoint\" and \"group\")"
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "filter": {
      "type": "string",
      "description": "Filter event type (\"spiders\"/\"uniques\"/\"nonuniques\"/\"conversions\")",
      "enum": [
        "",
        "spiders",
        "uniques",
        "nonuniques",
        "conversions"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.ClickStream.Hit]"
}
```
## Operation: conversions.get
Retrieve a list of conversions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "status": {
      "type": "string",
      "description": "Status of conversion (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude conversions created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude conversions created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: conversions.post
Create a conversion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Conversions.Conversion"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.aggregated.list.get
Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of conversion (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: conversions.count.get
Retrieve a count of conversions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "Status of conversion (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude conversions created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude conversions created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: conversions.conversionId.delete
Delete conversion specified by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.conversionId.get
Retrieve conversion specified by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Conversions.Conversion"
}
```
## Operation: conversions.conversionId.post
Update conversion specified by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Conversions.Conversion"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.conversionId.aggregated.get
Retrieve statistics about this conversion for a timeframe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "tag": {
      "type": "string",
      "description": "Filter by this tag name"
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the datapoint marked as favourite"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: conversions.conversionId.aggregated.list.get
Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: conversions.conversionId.datapoints.get
Retrieve a list of datapoints connected to this conversion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "Filter by this tag name"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: conversions.conversionId.datapoints.batch.patch.put
Modify the association between a conversion and multiple datapoints

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "data": {
      "$ref": "#/definitions/Api.Core.Requests.PatchBodyBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.conversionId.datapoints.count.get
Retrieve a count of datapoints connected to this conversion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")"
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")"
    },
    "tags": {
      "type": "string",
      "description": "Filter by this tag name"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: conversions.conversionId.datapoints.patch.put
Modify the association between a conversion and a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "data": {
      "$ref": "#/definitions/Api.Core.Requests.ConversionPatchBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.conversionId.hits.get
Retrieve the list of events related to this conversion.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "custom"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "offset": {
      "type": "string",
      "description": "Offset where to start from (it's the lastKey field in the response object)"
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "filter": {
      "type": "string",
      "description": "Filter event type (\"spiders\"/\"uniques\"/\"nonuniques\"/\"conversions\")",
      "enum": [
        "spiders",
        "uniques",
        "nonuniques",
        "conversions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.ClickStream.HitListPage"
}
```
## Operation: conversions.conversionId.notes.put
Fast patch the "notes" field of a conversion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "note": {
      "$ref": "#/definitions/Api.Core.Requests.GenericTextPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "note"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: conversions.conversionId.reports.get
Retrieve a top report connected to this conversion

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversionId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the conversion"
    },
    "type": {
      "type": "string",
      "description": "Type of the report.",
      "enum": [
        "datapoints",
        "groups",
        "browsers",
        "browsersfamilies",
        "platforms",
        "cities",
        "countries",
        "keywords",
        "referrers",
        "convparameters",
        "destinations",
        "languages",
        "params"
      ]
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "beginning",
        "custom"
      ]
    },
    "hittype": {
      "type": "string",
      "description": "Type of the event you want to filter this report with. By default no filter is applied.",
      "enum": [
        "clicks",
        "views"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversionId",
    "type",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Tops.Top"
}
```
## Operation: datapoints.get
List of all the datapoints associated to the user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: datapoints.post
Create a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Datapoints.Datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: datapoints.aggregated.get
Retrieve statistics about this customer for a timeframe by groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the datapoint is marked as favourite"
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: datapoints.aggregated.list.get
Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the datapoint is marked as favourite"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: datapoints.batch.delete
Delete multiple datapoints

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch": {
      "$ref": "#/definitions/Api.Core.Requests.DeleteBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]"
}
```
## Operation: datapoints.batch.post
Update multiple datapoints

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch": {
      "$ref": "#/definitions/Api.Core.Requests.DatapointsBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]"
}
```
## Operation: datapoints.batch.put
Create multiple datapoints

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "batch": {
      "$ref": "#/definitions/Api.Core.Requests.DatapointsBatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "batch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.ModifyBatchItemResponce[Api.Core.Dto.Datapoints.Datapoint,System.Int64]"
}
```
## Operation: datapoints.count.get
Count the datapoints associated to the user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: datapoints.id.delete
Delete a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: datapoints.id.get
Get a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Datapoints.Datapoint"
}
```
## Operation: datapoints.id.post
Update a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the datapoint"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Datapoints.Datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: datapoints.id.aggregated.get
Retrieve statistics about this datapoint for a timeframe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: datapoints.id.aggregated.list.get
Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: datapoints.id.favourite.put
Fast switch the "favourite" field of a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: datapoints.id.hits.get
Retrieve the list of events related to this datapoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "custom"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "offset": {
      "type": "string",
      "description": "Offset where to start from (it's the lastKey field in the response object)"
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "filter": {
      "type": "string",
      "description": "Filter event type (\"spiders\"/\"uniques\"/\"nonuniques\"/\"conversions\")",
      "enum": [
        "spiders",
        "uniques",
        "nonuniques",
        "conversions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.ClickStream.HitListPage"
}
```
## Operation: datapoints.id.notes.put
Fast patch the "notes" field of a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    },
    "note": {
      "$ref": "#/definitions/Api.Core.Requests.GenericTextPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: datapoints.id.reports.get
Retrieve a top report connected to this datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the datapoint"
    },
    "type": {
      "type": "string",
      "description": "Type of the report.",
      "enum": [
        "browsers",
        "browsersfamilies",
        "platforms",
        "cities",
        "countries",
        "isps",
        "ips",
        "oss",
        "ossfamilies",
        "keywords",
        "referrers",
        "destinations",
        "languages",
        "params"
      ]
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "type",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Tops.Top"
}
```
## Operation: domains.get
Retrieve a list of domains

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "type": {
      "type": "string",
      "description": "Type of domain (\"system\"/\"go\"/\"personal\"/\"dedicated\"). If not specified default is \"system\"",
      "enum": [
        "system",
        "go",
        "personal",
        "dedicated"
      ]
    },
    "name": {
      "type": "string",
      "description": "Filter domains with this anmen"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: domains.post
Create a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Domains.Domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: domains.count.get
Retrieve count of domains

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of domain (\"system\"/\"go\"/\"personal\"/\"dedicated\"). If not specified default is \"system\"",
      "enum": [
        "system",
        "go",
        "personal",
        "dedicated"
      ]
    },
    "name": {
      "type": "string",
      "description": "Filter domains with this anmen"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: domains.id.delete
Delete a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: domains.id.get
Get a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Domains.Domain"
}
```
## Operation: domains.id.post
Update a domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of domain"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Domains.Domain"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.get
List of all the groups associated to the user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "status": {
      "type": "string",
      "description": "Status of the group",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude groups created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude groups created after this date (YYYYMMDD)"
    },
    "write": {
      "type": "boolean",
      "description": "Write permission"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: groups.post
Create a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Groups.Group"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.aggregated.get
Retrieve statistics about this customer for a timeframe by groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    },
    "status": {
      "type": "string",
      "description": "Status of group (\"deleted\"/\"active\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the group is marked as favourite"
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: groups.aggregated.list.get
Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of group (\"deleted\"/\"active\")"
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the group is marked as favourite"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "deleted",
        "active"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: groups.count.get
Count the groups associated to the user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude groups created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude groups created after this date (YYYYMMDD)"
    },
    "write": {
      "type": "boolean",
      "description": "Write permission"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: groups.id.delete
Delete group specified by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.id.get
Get a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Groups.Group"
}
```
## Operation: groups.id.post
Update a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the group"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Groups.Group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.id.aggregated.get
Retrieve statistics about this group for a timeframe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "hourly": {
      "type": "boolean",
      "description": "If using \"yesterday\" or \"today\" timeframe you can ask for the hourly detail"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedResult"
}
```
## Operation: groups.id.aggregated.list.get
Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "groupBy": {
      "type": "string",
      "description": "The temporal entity you want to group by (\"week\"/\"month\"). If unspecified is \"day\".",
      "enum": [
        "week",
        "month"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Dto.Aggregated.AggregatedResult]"
}
```
## Operation: groups.id.aggregated.summary.get
Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this group id"
    },
    "timeFrame": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "today",
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "last12months",
        "lastyear",
        "currentyear",
        "beginning",
        "custom"
      ]
    },
    "type": {
      "type": "string",
      "description": "Type of datapoint (\"tl\"/\"tp\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "status": {
      "type": "string",
      "description": "Status of datapoint (\"deleted\"/\"active\"/\"paused\"/\"spam\")",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "tag": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "favourite": {
      "type": "boolean",
      "description": "Is the datapoint marked as favourite"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Offset where to start from"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeFrame"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Aggregated.AggregatedSummaryResult"
}
```
## Operation: groups.id.datapoints.get
List of all the datapoints associated to the user in this group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: groups.id.datapoints.post
Create a datapoint in this group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the group"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Datapoints.Datapoint"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.id.datapoints.count.get
Count the datapoints associated to the user in this group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: groups.id.favourite.put
Fast switch the "favourite" field of a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.id.hits.get
Retrieve the list of events related to this group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "custom"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "offset": {
      "type": "string",
      "description": "Offset where to start from (it's the lastKey field in the response object)"
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "filter": {
      "type": "string",
      "description": "Filter event type (\"spiders\"/\"uniques\"/\"nonuniques\"/\"conversions\")",
      "enum": [
        "spiders",
        "uniques",
        "nonuniques",
        "conversions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.ClickStream.HitListPage"
}
```
## Operation: groups.id.notes.put
Fast patch the "notes" field of a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "note": {
      "$ref": "#/definitions/Api.Core.Requests.GenericTextPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: groups.id.reports.get
Retrieve a top report connected to this group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "type": {
      "type": "string",
      "description": "Type of the report.",
      "enum": [
        "browsers",
        "browsersfamilies",
        "platforms",
        "cities",
        "countries",
        "isps",
        "ips",
        "oss",
        "ossfamilies",
        "keywords",
        "referrers",
        "destinations",
        "languages",
        "params"
      ]
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "beginning",
        "custom"
      ]
    },
    "hittype": {
      "type": "string",
      "description": "Type of the event you want to filter this report with. By default no filter is applied.",
      "enum": [
        "clicks",
        "views"
      ]
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "type",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Tops.Top"
}
```
## Operation: hits.get
Retrieve the list of events related to this account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "custom"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to this number"
    },
    "offset": {
      "type": "string",
      "description": "Offset where to start from (it's the lastKey field in the response object)"
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    },
    "filter": {
      "type": "string",
      "description": "Filter event type (\"spiders\"/\"uniques\"/\"nonuniques\"/\"conversions\")",
      "enum": [
        "spiders",
        "uniques",
        "nonuniques",
        "conversions"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.ClickStream.HitListPage"
}
```
## Operation: me.get
Retrieve current account data

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.User"
}
```
## Operation: me.plan.get
Retrieve current account plan

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Accounting.Plan"
}
```
## Operation: reports.get
Retrieve a top report

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of the report.",
      "enum": [
        "browsers",
        "browsersfamilies",
        "platforms",
        "cities",
        "countries",
        "isps",
        "ips",
        "oss",
        "ossfamilies",
        "keywords",
        "referrers",
        "destinations",
        "languages",
        "params"
      ]
    },
    "timeframe": {
      "type": "string",
      "description": "Timeframe of the request. See list at $timeframeList",
      "enum": [
        "yesterday",
        "last7",
        "last30",
        "lastmonth",
        "currentmonth",
        "previousmonth",
        "last90",
        "last120",
        "last180",
        "beginning",
        "custom"
      ]
    },
    "hittype": {
      "type": "string",
      "description": "Type of the event you want to filter this report with. By default no filter is applied."
    },
    "group": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this group id (mutually exclusive with \"datapoint\" and \"conversion\")"
    },
    "datapoint": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this datapoint id (mutually exclusive with \"group\" and \"conversion\")"
    },
    "conversion": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by this conversion id (mutually exclusive with \"datapoint\" and \"group\")"
    },
    "fromDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the starting day (YYYYMMDD)"
    },
    "toDay": {
      "type": "string",
      "description": "If using a \"custom\" timeFrame you can specify the ending day (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "type",
    "timeframe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Tops.Top"
}
```
## Operation: retargeting.get
List of all the retargeting scripts associated to the user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: retargeting.post
Creates a retargeting script

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Retargeting.RetargetingScript"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: retargeting.count.get
Retrieve count of retargeting scripts

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: retargeting.id.delete
Deletes a retargeting script (and remove associations)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the retargeting script"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: retargeting.id.get
Get a retargeting script object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the retargeting script"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Retargeting.RetargetingScript"
}
```
## Operation: retargeting.id.post
Updates a retargeting script

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "The id of the retargeting script"
    },
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Retargeting.RetargetingScript"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: retargeting.id.datapoints.get
List of all the datapoints associated to the retargeting script.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the retargeting script"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "sortBy": {
      "type": "string",
      "description": "Field to sort by"
    },
    "sortDirection": {
      "type": "string",
      "description": "Direction of sort \"asc\" or \"desc\"",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: retargeting.id.datapoints.count.get
Count the datapoints associated to the retargeting script.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the group"
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "tags": {
      "type": "string",
      "description": "A comma separated list of tags you want to filter with."
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "onlyFavorites": {
      "type": "boolean",
      "description": "Filter fields by favourite status"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: tags.get
List of all the groups associated to the user filtered by this tag.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "name": {
      "type": "string",
      "description": "Name of the tag"
    },
    "datapoints": {
      "type": "string",
      "description": "Comma separated list of datapoints id to filter by"
    },
    "groups": {
      "type": "string",
      "description": "Comma separated list of groups id to filter by"
    },
    "type": {
      "type": "string",
      "description": "Type of entity related to the tag",
      "enum": [
        "tp",
        "tl",
        "dp",
        "gr"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: tags.post
Create a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "value": {
      "$ref": "#/definitions/Api.Core.Dto.Tags.Tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: tags.count.get
List of all the groups associated to the user filtered by this tag.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the tag"
    },
    "datapoints": {
      "type": "string",
      "description": "Comma separated list of datapoints id to filter by"
    },
    "groups": {
      "type": "string",
      "description": "Comma separated list of groups id to filter by"
    },
    "type": {
      "type": "string",
      "description": "Type of entity related to the tag",
      "enum": [
        "tp",
        "tl",
        "dp",
        "gr"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: tags.tagId.delete
Delete a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: tags.tagId.get
Retrieve a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Dto.Tags.Tag"
}
```
## Operation: tags.tagId.datapoints.delete
Delete the association of this tag with all datapoints

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: tags.tagId.datapoints.get
List of all the datapoints associated to the user filtered by this tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag."
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: tags.tagId.datapoints.count.get
Count the datapoints associated to the user filtered by this tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag."
    },
    "type": {
      "type": "string",
      "description": "Type of the datapoint (\"tp\"/\"tl\")",
      "enum": [
        "tp",
        "tl"
      ]
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active",
        "paused",
        "spam"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude datapoints created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude datapoints created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: tags.tagId.datapoints.patch.put
Associate/Deassociate a tag with a datapoint

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    },
    "data": {
      "$ref": "#/definitions/Api.Core.Requests.PatchBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: tags.tagId.groups.delete
Delete the association of this tag with all groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: tags.tagId.groups.get
List of all the groups associated to the user filtered by this tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag."
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Where to start when retrieving elements. Default is 0 if not specified."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum elements to retrieve. Default to 20 if not specified."
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude groups created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude groups created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntitiesResponse[Api.Core.Responses.EntityUri[System.Int64]]"
}
```
## Operation: tags.tagId.groups.count.get
Count the groups associated to the user filtered by this tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag."
    },
    "status": {
      "type": "string",
      "description": "Status of the datapoint",
      "enum": [
        "deleted",
        "active"
      ]
    },
    "textSearch": {
      "type": "string",
      "description": "Filter fields by this pattern"
    },
    "createdAfter": {
      "type": "string",
      "description": "Exclude groups created before this date (YYYYMMDD)"
    },
    "createdBefore": {
      "type": "string",
      "description": "Exclude groups created after this date (YYYYMMDD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.CountResponce"
}
```
## Operation: tags.tagId.groups.patch.put
Associate/Deassociate a tag with a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    },
    "data": {
      "$ref": "#/definitions/Api.Core.Requests.PatchBody"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
## Operation: tags.tagId.name.put
Fast patch a tag name

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "integer",
      "format": "int64",
      "description": "Id of the tag"
    },
    "data": {
      "$ref": "#/definitions/Api.Core.Requests.GenericTextPatch"
    }
  },
  "additionalProperties": false,
  "required": [
    "tagId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Api.Core.Responses.EntityUri[System.Int64]"
}
```
