# @datafire/azure_arm_resourcehealth
The Resource Health Client.

## Operation: Operations_List
Lists available operations for the resourcehealth resource provider

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
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
  "$ref": "#/definitions/operationListResult"
}
```
## Operation: AvailabilityStatuses_ListBySubscriptionId
Lists the current availability status for all the resources in the subscription. Use the nextLink property in the response to get the next page of availability statuses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN"
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "$expand": {
      "type": "string",
      "description": "Setting $expand=recommendedactions in url query expands the recommendedactions in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availabilityStatusListResult"
}
```
## Operation: AvailabilityStatuses_ListByResourceGroup
Lists the current availability status for all the resources in the resource group. Use the nextLink property in the response to get the next page of availability statuses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN"
    },
    "$expand": {
      "type": "string",
      "description": "Setting $expand=recommendedactions in url query expands the recommendedactions in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availabilityStatusListResult"
}
```
## Operation: Availabilitystatuses_List
Lists the historical availability statuses for a single resource. Use the nextLink property in the response to get the next page of availability status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN"
    },
    "$expand": {
      "type": "string",
      "description": "Setting $expand=recommendedactions in url query expands the recommendedactions in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availabilityStatusListResult"
}
```
## Operation: AvailabilityStatus_GetByResource
Gets current availability status for a single resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceUri": {
      "type": "string",
      "description": "The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN"
    },
    "$expand": {
      "type": "string",
      "description": "Setting $expand=recommendedactions in url query expands the recommendedactions in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceUri",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/availabilityStatus"
}
```
