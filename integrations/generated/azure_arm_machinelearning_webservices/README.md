# @datafire/azure_arm_machinelearning_webservices
These APIs allow end users to operate on Azure Machine Learning Web Services resources. They support the following operations:<ul><li>Create or update a web service</li><li>Get a web service</li><li>Patch a web service</li><li>Delete a web service</li><li>Get All Web Services in a Resource Group </li><li>Get All Web Services in a Subscription</li><li>Get Web Services Keys</li></ul>

## Operation: WebServices_List
Gets the web services in the specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$skiptoken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
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
  "$ref": "#/definitions/PaginatedWebServicesList"
}
```
## Operation: WebServices_ListByResourceGroup
Gets the web services in the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "$skiptoken": {
      "type": "string",
      "description": "Continuation token for pagination."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
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
  "$ref": "#/definitions/PaginatedWebServicesList"
}
```
## Operation: WebServices_Remove
Deletes the specified web service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "webServiceName": {
      "type": "string",
      "description": "The name of the web service."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "webServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WebServices_Get
Gets the Web Service Definiton as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "webServiceName": {
      "type": "string",
      "description": "The name of the web service."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "webServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebService"
}
```
## Operation: WebServices_Patch
Modifies an existing web service resource. The PATCH API call is an asynchronous operation. To determine whether it has completed successfully, you must perform a Get operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "webServiceName": {
      "type": "string",
      "description": "The name of the web service."
    },
    "patchPayload": {
      "$ref": "#/definitions/WebService"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "webServiceName",
    "patchPayload",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebService"
}
```
## Operation: WebServices_CreateOrUpdate
Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "webServiceName": {
      "type": "string",
      "description": "The name of the web service."
    },
    "createOrUpdatePayload": {
      "$ref": "#/definitions/WebService"
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "webServiceName",
    "createOrUpdatePayload",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebService"
}
```
## Operation: WebServices_ListKeys
Gets the access keys for the specified web service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "Name of the resource group in which the web service is located."
    },
    "webServiceName": {
      "type": "string",
      "description": "The name of the web service."
    },
    "api-version": {
      "type": "string",
      "description": "The version of the Microsoft.MachineLearning resource provider API to use."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The Azure subscription ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "webServiceName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceKeys"
}
```
