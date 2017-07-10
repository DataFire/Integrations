# @datafire/azure_arm_billing
Billing client provides access to billing resources for Azure Web-Direct subscriptions. Other subscription types which were not purchased directly through the Azure web portal are not supported through this preview API.

## Operation: Operations_List
Lists all of the available billing REST API operations.

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
## Operation: Invoices_List
Lists the available invoices for a subscription in reverse chronological order beginning with the most recent invoice. In preview, invoices are available via this API only for invoice periods which end December 1, 2016 or later

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "$expand": {
      "type": "string",
      "description": "May be used to expand the downloadUrl property within a list of invoices. This enables download links to be generated for multiple invoices at once. By default, downloadURLs are not included when listing invoices."
    },
    "$filter": {
      "type": "string",
      "description": "May be used to filter invoices by invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'"
    },
    "$skiptoken": {
      "type": "string",
      "description": "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls."
    },
    "$top": {
      "type": "integer",
      "description": "May be used to limit the number of results to the most recent N invoices.",
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
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InvoicesListResult"
}
```
## Operation: Invoices_GetLatest
Gets the most recent invoice. When getting a single invoice, the downloadUrl property is expanded automatically.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2017-02-27-preview."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: Invoices_Get
Gets a named invoice resource. When getting a single invoice, the downloadUrl property is expanded automatically.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Azure Subscription ID."
    },
    "invoiceName": {
      "type": "string",
      "description": "The name of an invoice resource."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request. The current version is 2017-02-27-preview."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "invoiceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
