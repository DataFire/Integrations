# @datafire/azure_arm_consumption
Consumption management client provides access to consumption resources for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

## Operation: Operations_List
Lists all of the available consumption REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2017-02-27-preview."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationListResult"
}
```
## Operation: UsageDetails_List
Lists the usage details for a scope in reverse chronological order by billing period. Usage details are available via this API only for January 1, 2017 or later.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of the usage details. The scope can be '/subscriptions/{subscriptionId}/' for a subscription, or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/invoices/{invoiceName}' for an invoice or '/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}' for a billing perdiod."
    },
    "$expand": {
      "type": "string",
      "description": "May be used to expand the additionalProperties or meterDetails property within a list of usage details. By default, these fields are not included when listing usage details."
    },
    "$filter": {
      "type": "string",
      "description": "May be used to filter usageDetails by usageEnd (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'."
    },
    "$skiptoken": {
      "type": "string",
      "description": "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls."
    },
    "$top": {
      "type": "integer",
      "description": "May be used to limit the number of results to the most recent N usageDetails.",
      "maximum": 100,
      "minimum": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2017-02-27-preview."
    }
  },
  "additionalProperties": false,
  "required": [
    "scope",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsageDetailsListResult"
}
```
