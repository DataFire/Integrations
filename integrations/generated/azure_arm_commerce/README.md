# @datafire/azure_arm_commerce


## Operation: RateCard_Get
Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. It ONLY supports the 'eq' and 'and' logical operators at this time. All the 4 query parameters 'OfferDurableId',  'Currency', 'Locale', 'Region' are required to be a part of the $filter."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "$filter",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceRateCardInfo"
}
```
## Operation: UsageAggregates_List
Query aggregated Azure subscription consumption data for a date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reportedStartTime": {
      "type": "string",
      "format": "date-time",
      "description": "The start of the time range to retrieve data for."
    },
    "reportedEndTime": {
      "type": "string",
      "format": "date-time",
      "description": "The end of the time range to retrieve data for."
    },
    "showDetails": {
      "type": "boolean",
      "description": "`True` returns usage data in instance-level detail, `false` causes server-side aggregation with fewer details. For example, if you have 3 website instances, by default you will get 3 line items for website consumption. If you specify showDetails = false, the data will be aggregated as a single line item for website consumption within the time period (for the given subscriptionId, meterId, usageStartTime and usageEndTime)."
    },
    "aggregationGranularity": {
      "type": "string",
      "description": "`Daily` (default) returns the data in daily granularity, `Hourly` returns the data in hourly granularity.",
      "enum": [
        "Daily",
        "Hourly"
      ]
    },
    "continuationToken": {
      "type": "string",
      "description": "Used when a continuation token string is provided in the response body of the previous call, enabling paging through a large result set. If not present, the data is retrieved from the beginning of the day/hour (based on the granularity) passed in. "
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "reportedStartTime",
    "reportedEndTime",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageAggregationListResult"
}
```
