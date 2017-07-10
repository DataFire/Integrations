# @datafire/azure_arm_search
Client that can be used to manage Azure Search services and API keys.

## Operation: Services_CheckNameAvailability
Checks whether or not the given Search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "checkNameAvailabilityInput": {
      "$ref": "#/definitions/CheckNameAvailabilityInput"
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "checkNameAvailabilityInput",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckNameAvailabilityOutput"
}
```
## Operation: Services_ListByResourceGroup
Gets a list of all Search services in the given resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchServiceListResult"
}
```
## Operation: Services_Delete
Deletes a Search service in the given resource group, along with its associated resources.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Services_Get
Gets the Search service with the given name in the given resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchService"
}
```
## Operation: Services_CreateOrUpdate
Creates or updates a Search service in the given resource group. If the Search service already exists, all properties will be updated with the given values.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created."
    },
    "service": {
      "$ref": "#/definitions/SearchService"
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "service",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchService"
}
```
## Operation: QueryKeys_Create
Generates a new query key for the specified Search service. You can create up to 50 query keys per service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the new query API key."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "name",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QueryKey"
}
```
## Operation: QueryKeys_Delete
Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "key": {
      "type": "string",
      "description": "The query key to be deleted. Query keys are identified by value, not by name."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "key",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: AdminKeys_Get
Gets the primary and secondary admin API keys for the specified Azure Search service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdminKeyResult"
}
```
## Operation: QueryKeys_ListBySearchService
Returns the list of query API keys for the given Azure Search service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListQueryKeysResult"
}
```
## Operation: AdminKeys_Regenerate
Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    },
    "searchServiceName": {
      "type": "string",
      "description": "The name of the Azure Search service associated with the specified resource group."
    },
    "keyKind": {
      "type": "string",
      "description": "Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.",
      "enum": [
        "primary",
        "secondary"
      ]
    },
    "x-ms-client-request-id": {
      "type": "string",
      "format": "uuid",
      "description": "A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to use for each request. The current version is 2015-08-19."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "searchServiceName",
    "keyKind",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AdminKeyResult"
}
```
