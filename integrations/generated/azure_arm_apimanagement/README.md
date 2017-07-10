# @datafire/azure_arm_apimanagement
Use these REST APIs for performing operations on entities like API, Product, and Subscription associated with your Azure API Management deployment.

## Operation: Apis_ListByService
Lists all APIs of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions               |\n|-------------|------------------------|-----------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| serviceUrl  | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| path        | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiCollection"
}
```
## Operation: Apis_Delete
Deletes the specified API of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the API Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Apis_Get
Gets the details of the API specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiContract"
}
```
## Operation: Apis_Update
Updates the specified API of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/PatchParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the API entity. ETag should match the current entity state in the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Apis_CreateOrUpdate
Creates new or updates existing specified API of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/ApiContract"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Api Entity. For Create Api Etag should not be specified. For Update Etag should match the existing Entity or it can be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApiOperations_ListByApi
Lists a collection of the operations for the specified API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions               |\n|-------------|------------------------|-----------------------------------|\n| name        | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| method      | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |\n| urlTemplate | ge, le, eq, ne, gt, lt | substringof, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationCollection"
}
```
## Operation: ApiOperations_Delete
Deletes the specified operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "operationId": {
      "type": "string",
      "description": "Operation identifier within an API. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "operationId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApiOperations_Get
Gets the details of the API Operation specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "operationId": {
      "type": "string",
      "description": "Operation identifier within an API. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "operationId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationContract"
}
```
## Operation: ApiOperations_Update
Updates the details of the operation specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "operationId": {
      "type": "string",
      "description": "Operation identifier within an API. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/PatchParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the API Operation Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "operationId",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApiOperations_CreateOrUpdate
Creates a new API operation or updates an existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "operationId": {
      "type": "string",
      "description": "Operation identifier within an API. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/OperationContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "operationId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApiProducts_ListByApi
Lists all API associated products.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                         |\n|-------|------------------------|---------------------------------------------|\n| name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "apiId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductCollection"
}
```
## Operation: AuthorizationServers_ListByService
Lists a collection of authorization servers defined within a service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                         |\n|-------|------------------------|---------------------------------------------|\n| id    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthorizationServerCollection"
}
```
## Operation: AuthorizationServers_Delete
Deletes specific authorization server instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "authsid": {
      "type": "string",
      "description": "Identifier of the authorization server."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the authentication server to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "authsid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: AuthorizationServers_Get
Gets the details of the authorization server specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "authsid": {
      "type": "string",
      "description": "Identifier of the authorization server.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "authsid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OAuth2AuthorizationServerContract"
}
```
## Operation: AuthorizationServers_Update
Updates the details of the authorization server specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "authsid": {
      "type": "string",
      "description": "Identifier of the authorization server."
    },
    "parameters": {
      "$ref": "#/definitions/OAuth2AuthorizationServerUpdateContract"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the authorization server to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "authsid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: AuthorizationServers_CreateOrUpdate
Creates new authorization server or updates an existing authorization server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "authsid": {
      "type": "string",
      "description": "Identifier of the authorization server.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256
    },
    "parameters": {
      "$ref": "#/definitions/OAuth2AuthorizationServerContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "authsid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Backends_ListByService
Lists a collection of backends in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                         |\n|-------|------------------------|---------------------------------------------|\n| id    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| host  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackendCollection"
}
```
## Operation: Backends_Delete
Deletes the specified backend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "backendid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 255,
      "minLength": 1
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the backend to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "backendid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Backends_Get
Gets the details of the backend specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "backendid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 255,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "backendid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackendResponse"
}
```
## Operation: Backends_Update
Updates an existing backend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "backendid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 255,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/BackendUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the backend to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "backendid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Backends_CreateOrUpdate
Creates or Updates a backend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "backendid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 255,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/BackendContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "backendid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Certificates_ListByService
Lists a collection of all certificates in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field          | Supported operators    | Supported functions                         |\n|----------------|------------------------|---------------------------------------------|\n| id             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| subject        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| thumbprint     | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| expirationDate | ge, le, eq, ne, gt, lt | N/A                                         |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateCollection"
}
```
## Operation: Certificates_Delete
Deletes specific certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "certificateId": {
      "type": "string",
      "description": "Identifier of the certificate."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the certificate to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "certificateId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Certificates_Get
Gets the details of the certificate specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "certificateId": {
      "type": "string",
      "description": "Identifier of the certificate."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "certificateId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CertificateContract"
}
```
## Operation: Certificates_CreateOrUpdate
Creates or updates the certificate being used for authentication with the backend.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "certificateId": {
      "type": "string",
      "description": "Identifier of the certificate entity. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/CertificateCreateOrUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the certificate to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "certificateId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_ListByService
Lists a collection of groups defined within a service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions                         |\n|-------------|------------------------|---------------------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| type        | eq, ne                 | N/A                                         |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupCollection"
}
```
## Operation: Groups_Delete
Deletes specific group of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_Get
Gets the details of the group specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupContract"
}
```
## Operation: Groups_Update
Updates the details of the group specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/GroupUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Group Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_CreateOrUpdate
Creates or Updates a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/GroupCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GroupUsers_ListByGroup
Lists a collection of the members of the group, specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field            | Supported operators    | Supported functions               |\n|------------------|------------------------|-----------------------------------|\n| id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state            | eq                     | N/A                               |\n| registrationDate | ge, le, eq, ne, gt, lt | N/A                               |\n| note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserCollection"
}
```
## Operation: GroupUsers_Remove
Remove existing user from existing group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GroupUsers_Add
Adds a user to the specified group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "groupId",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: IdentityProviders_ListByService
Lists a collection of Identity Provider configured in the specified service instance.

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
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "serviceName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IdentityProviderList"
}
```
## Operation: IdentityProviders_Delete
Deletes the specified identity provider configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "identityProviderName": {
      "type": "string",
      "description": "Identity Provider Type identifier.",
      "enum": [
        "facebook",
        "google",
        "microsoft",
        "twitter",
        "aad"
      ]
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the backend to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "identityProviderName",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: IdentityProviders_Get
Gets the configuration details of the identity Provider configured in specified service instance.

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
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "identityProviderName": {
      "type": "string",
      "description": "Identity Provider Type identifier.",
      "enum": [
        "facebook",
        "google",
        "microsoft",
        "twitter",
        "aad"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "serviceName",
    "identityProviderName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IdentityProviderContract"
}
```
## Operation: IdentityProviders_Update
Updates an existing IdentityProvider configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "identityProviderName": {
      "type": "string",
      "description": "Identity Provider Type identifier.",
      "enum": [
        "facebook",
        "google",
        "microsoft",
        "twitter",
        "aad"
      ]
    },
    "parameters": {
      "$ref": "#/definitions/IdentityProviderUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the identity provider configuration to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "identityProviderName",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: IdentityProviders_CreateOrUpdate
Creates or Updates the IdentityProvider configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "identityProviderName": {
      "type": "string",
      "description": "Identity Provider Type identifier.",
      "enum": [
        "facebook",
        "google",
        "microsoft",
        "twitter",
        "aad"
      ]
    },
    "parameters": {
      "$ref": "#/definitions/IdentityProviderContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "identityProviderName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Loggers_ListByService
Lists a collection of loggers in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                         |\n|-------|------------------------|---------------------------------------------|\n| id    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| type  | eq                     |                                             |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoggerCollection"
}
```
## Operation: Loggers_Delete
Deletes the specified logger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "loggerid": {
      "type": "string",
      "description": "Identifier of the logger."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the logger to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "loggerid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Loggers_Get
Gets the details of the logger specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "loggerid": {
      "type": "string",
      "description": "Identifier of the logger."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "loggerid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoggerResponse"
}
```
## Operation: Loggers_Update
Updates an existing logger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "loggerid": {
      "type": "string",
      "description": "Identifier of the logger."
    },
    "parameters": {
      "$ref": "#/definitions/LoggerUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the logger to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "loggerid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Loggers_CreateOrUpdate
Creates or Updates a logger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "loggerid": {
      "type": "string",
      "description": "Identifier of the logger.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256
    },
    "parameters": {
      "$ref": "#/definitions/LoggerCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "loggerid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: OpenIdConnectProviders_ListByService
Lists all OpenID Connect Providers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                         |\n|-------|------------------------|---------------------------------------------|\n| id    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OpenIdConnectProviderCollection"
}
```
## Operation: OpenIdConnectProviders_Delete
Deletes specific OpenID Connect Provider of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "opid": {
      "type": "string",
      "description": "Identifier of the OpenID Connect Provider."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the OpenID Connect Provider to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "opid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: OpenIdConnectProviders_Get
Gets specific OpenID Connect Provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "opid": {
      "type": "string",
      "description": "Identifier of the OpenID Connect Provider."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "opid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OpenidConnectProviderContract"
}
```
## Operation: OpenIdConnectProviders_Update
Updates the specific OpenID Connect Provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "opid": {
      "type": "string",
      "description": "Identifier of the OpenID Connect Provider."
    },
    "parameters": {
      "$ref": "#/definitions/OpenidConnectProviderUpdateContract"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the OpenID Connect Provider to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "opid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: OpenIdConnectProviders_CreateOrUpdate
Creates or updates the OpenID Connect Provider.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "opid": {
      "type": "string",
      "description": "Identifier of the OpenID Connect Provider.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256
    },
    "parameters": {
      "$ref": "#/definitions/OpenidConnectProviderCreateContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "opid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: PolicySnippets_ListByService
Lists all policy snippets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "scope": {
      "type": "string",
      "description": "Policy scope.",
      "enum": [
        "Tenant",
        "Product",
        "Api",
        "Operation",
        "All"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PolicySnippetContract"
  },
  "type": "array"
}
```
## Operation: Products_ListByService
Lists a collection of products in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions                         |\n|-------------|------------------------|---------------------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| terms       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state       | eq                     |                                             |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "expandGroups": {
      "type": "boolean",
      "description": "When set to true, the response contains an array of groups that have visibility to the product. The default is false."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductCollection"
}
```
## Operation: Products_Delete
Delete product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "deleteSubscriptions": {
      "type": "boolean",
      "description": "Delete existing subscriptions to the product or not."
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Products_Get
Gets the details of the product specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductContract"
}
```
## Operation: Products_Update
Update product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/ProductUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Products_CreateOrUpdate
Creates or Updates a product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/ProductContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProductApis_ListByProduct
Lists a collection of the APIs associated with a product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions                         |\n|-------------|------------------------|---------------------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| serviceUrl  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| path        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiCollection"
}
```
## Operation: ProductApis_Remove
Deletes the specified API from the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "apiId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProductApis_Add
Adds an API to the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "apiId": {
      "type": "string",
      "description": "API identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "apiId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProductGroups_ListByProduct
Lists the collection of developer groups associated with the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions                         |\n|-------------|------------------------|---------------------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| type        | eq, ne                 | N/A                                         |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupCollection"
}
```
## Operation: ProductGroups_Remove
Deletes the association between the specified group and product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "groupId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProductGroups_Add
Adds the association between the specified developer group with the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "groupId": {
      "type": "string",
      "description": "Group identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "groupId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ProductSubscriptions_ListByProduct
Lists the collection of subscriptions to the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "productId": {
      "type": "string",
      "description": "Product identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field        | Supported operators    | Supported functions                         |\n|--------------|------------------------|---------------------------------------------|\n| id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state        | eq                     |                                             |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "productId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionCollection"
}
```
## Operation: Property_ListByService
Lists a collection of properties defined within a service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field | Supported operators    | Supported functions                                   |\n|-------|------------------------|-------------------------------------------------------|\n| tags  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all |\n| name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith           |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PropertyCollection"
}
```
## Operation: Property_Delete
Deletes specific property from the the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "propId": {
      "type": "string",
      "description": "Identifier of the property."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the property to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "propId",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Property_Get
Gets the details of the property specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "propId": {
      "type": "string",
      "description": "Identifier of the property."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "propId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PropertyContract"
}
```
## Operation: Property_Update
Updates the specific property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "propId": {
      "type": "string",
      "description": "Identifier of the property."
    },
    "parameters": {
      "$ref": "#/definitions/PropertyUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the property to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "propId",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Property_CreateOrUpdate
Creates or updates a property.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "propId": {
      "type": "string",
      "description": "Identifier of the property.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256
    },
    "parameters": {
      "$ref": "#/definitions/PropertyCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "propId",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: QuotaByCounterKeys_ListByService
Lists a collection of current quota counter periods associated with the counter-key configured in the policy on the specified service instance. The api does not support paging yet.

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
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "quotaCounterKey": {
      "type": "string",
      "description": "Quota counter key identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "serviceName",
    "quotaCounterKey",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QuotaCounterCollection"
}
```
## Operation: QuotaByCounterKeys_Update
Updates all the quota counter values specified with the existing quota counter key to a value in the specified service instance. This should be used for reset of the quota counter values.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "quotaCounterKey": {
      "type": "string",
      "description": "Quota counter key identifier."
    },
    "parameters": {
      "$ref": "#/definitions/QuotaCounterValueContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "quotaCounterKey",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: QuotaByPeriodKeys_Get
Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.

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
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "quotaCounterKey": {
      "type": "string",
      "description": "Quota counter key identifier."
    },
    "quotaPeriodKey": {
      "type": "string",
      "description": "Quota period key identifier."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "serviceName",
    "quotaCounterKey",
    "quotaPeriodKey",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QuotaCounterContract"
}
```
## Operation: QuotaByPeriodKeys_Update
Updates an existing quota counter value in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "quotaCounterKey": {
      "type": "string",
      "description": "Quota counter key identifier."
    },
    "quotaPeriodKey": {
      "type": "string",
      "description": "Quota period key identifier."
    },
    "parameters": {
      "$ref": "#/definitions/QuotaCounterValueContract"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "quotaCounterKey",
    "quotaPeriodKey",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Regions_ListByService
Lists all azure regions in which the service exists.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegionListResult"
}
```
## Operation: Reports_ListByService
Lists report records.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "aggregation": {
      "type": "string",
      "description": "Report aggregation.",
      "enum": [
        "byApi",
        "byGeo",
        "byOperation",
        "byProduct",
        "bySubscription",
        "byTime",
        "byUser"
      ]
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "interval": {
      "type": "string",
      "description": "By time interval. This value is only applicable to ByTime aggregation. Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, secconds))"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "aggregation",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReportCollection"
}
```
## Operation: Subscriptions_ListByService
Lists all subscriptions of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field        | Supported operators    | Supported functions                         |\n|--------------|------------------------|---------------------------------------------|\n| id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state        | eq                     |                                             |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionCollection"
}
```
## Operation: Subscriptions_Delete
Deletes the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription."
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subscriptions_Get
Gets the specified Subscription entity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionContract"
}
```
## Operation: Subscriptions_Update
Updates the details of a subscription specificied by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription."
    },
    "parameters": {
      "$ref": "#/definitions/SubscriptionUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "ETag of the Subscription Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subscriptions_CreateOrUpdate
Creates or updates the subscription of specified user to the specified product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SubscriptionCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subscriptions_RegeneratePrimaryKey
Regenerates primary key of existing subscription of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Subscriptions_RegenerateSecondaryKey
Regenerates secondary key of existing subscription of the API Management service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "sid": {
      "type": "string",
      "description": "Identifier of the subscription."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "sid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantAccess_Get
Get tenant access information details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessInformationContract"
}
```
## Operation: TenantAccess_Update
Update tenant access information details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/AccessInformationUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the tenant access settings to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantAccessGit_Get
Gets the Git access configuration for the tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessInformationContract"
}
```
## Operation: TenantAccessGit_RegeneratePrimaryKey
Regenerate primary access key for GIT.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantAccessGit_RegenerateSecondaryKey
Regenerate secondary access key for GIT.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantAccess_RegeneratePrimaryKey
Regenerate primary access key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantAccess_RegenerateSecondaryKey
Regenerate secondary access key.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: TenantConfiguration_Deploy
This operation applies changes from the specified Git branch to the configuration database. This is a long running operation and could take several minutes to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/DeployConfigurationParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationResultContract"
}
```
## Operation: TenantConfiguration_Save
This operation creates a commit with the current configuration snapshot to the specified branch in the repository. This is a long running operation and could take several minutes to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/SaveConfigurationParameter"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationResultContract"
}
```
## Operation: TenantConfigurationSyncState_Get
Gets the status of the most recent synchronization between the configuration database and the Git repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TenantConfigurationSyncStateContract"
}
```
## Operation: TenantConfiguration_Validate
This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/DeployConfigurationParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationResultContract"
}
```
## Operation: Users_ListByService
Lists a collection of registered users in the specified service instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field            | Supported operators    | Supported functions               |\n|------------------|------------------------|-----------------------------------|\n| id               | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| firstName        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| lastName         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| email            | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state            | eq                     | N/A                               |\n| registrationDate | ge, le, eq, ne, gt, lt | N/A                               |\n| note             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserCollection"
}
```
## Operation: Users_Delete
Deletes specific user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "deleteSubscriptions": {
      "type": "boolean",
      "description": "Whether to delete user's subscription or not."
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the user to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Users_Get
Gets the details of the user specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContract"
}
```
## Operation: Users_Update
Updates the details of the user specified by its identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/UserUpdateParameters"
    },
    "If-Match": {
      "type": "string",
      "description": "The entity state (Etag) version of the user to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "parameters",
    "If-Match",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Users_CreateOrUpdate
Creates or Updates a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "parameters": {
      "$ref": "#/definitions/UserCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Users_GenerateSsoUrl
Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GenerateSsoUrlResult",
  "x-ms-client-flatten": true
}
```
## Operation: UserGroups_ListByUser
Lists all user groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field       | Supported operators    | Supported functions                         |\n|-------------|------------------------|---------------------------------------------|\n| id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupCollection"
}
```
## Operation: UserIdentities_ListByUser
Lists all user identities.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserIdentityContract"
  },
  "type": "array"
}
```
## Operation: UserSubscriptions_ListByUser
Lists the collection of subscriptions of the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "serviceName": {
      "type": "string",
      "description": "The name of the API Management service.",
      "pattern": "^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
      "maxLength": 50,
      "minLength": 1
    },
    "uid": {
      "type": "string",
      "description": "User identifier. Must be unique in the current API Management service instance.",
      "pattern": "^[^*#&+:<>?]+$",
      "maxLength": 256,
      "minLength": 1
    },
    "$filter": {
      "type": "string",
      "description": "| Field        | Supported operators    | Supported functions                         |\n|--------------|------------------------|---------------------------------------------|\n| id           | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| name         | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| stateComment | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| userId       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| productId    | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |\n| state        | eq                     |                                             |"
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to return.",
      "minimum": 1
    },
    "$skip": {
      "type": "integer",
      "format": "int32",
      "description": "Number of records to skip.",
      "minimum": 0
    },
    "api-version": {
      "type": "string",
      "description": "Version of the API to be used with the client request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "serviceName",
    "uid",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionCollection"
}
```
