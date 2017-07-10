# @datafire/azure_arm_batch


## Operation: BatchAccount_List
Gets information about the Batch accounts associated with the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/BatchAccountListResult"
}
```
## Operation: Location_GetQuotas
Gets the Batch service quotas for the specified subscription at the given location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "locationName": {
      "type": "string",
      "description": "The desired region for the quotas."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "locationName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchLocationQuota"
}
```
## Operation: BatchAccount_ListByResourceGroup
Gets information about the Batch accounts associated within the specified resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group whose Batch accounts to list.",
      "pattern": "^[-\\w\\._]+$"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
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
  "$ref": "#/definitions/BatchAccountListResult"
}
```
## Operation: BatchAccount_Delete
Deletes the specified Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account to be deleted.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the account to be deleted.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: BatchAccount_Get
Gets information about the specified Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchAccount"
}
```
## Operation: BatchAccount_Update
Updates the properties of an existing Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/BatchAccountUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchAccount"
}
```
## Operation: BatchAccount_Create
Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the new Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/BatchAccountCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchAccount"
}
```
## Operation: Application_List
Lists all of the applications in the specified account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "maxresults": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of items to return in the response."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListApplicationsResult"
}
```
## Operation: Application_Delete
Deletes an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Application_Get
Gets information about the specified application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Application"
}
```
## Operation: Application_Update
Updates settings for the specified application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "parameters": {
      "$ref": "#/definitions/UpdateApplicationParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
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
## Operation: Application_Create
Adds an application to the specified Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "parameters": {
      "$ref": "#/definitions/AddApplicationParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Application"
}
```
## Operation: ApplicationPackage_Delete
Deletes an application package record and its associated binary file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "version": {
      "type": "string",
      "description": "The version of the application to delete."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "version",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ApplicationPackage_Get
Gets information about the specified application package.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "version": {
      "type": "string",
      "description": "The version of the application."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "version",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationPackage"
}
```
## Operation: ApplicationPackage_Create
Creates an application package record.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "version": {
      "type": "string",
      "description": "The version of the application."
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "version",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationPackage"
}
```
## Operation: ApplicationPackage_Activate
Activates the specified application package.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "applicationId": {
      "type": "string",
      "description": "The ID of the application."
    },
    "version": {
      "type": "string",
      "description": "The version of the application to activate."
    },
    "parameters": {
      "$ref": "#/definitions/ActivateApplicationPackageParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "applicationId",
    "version",
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
## Operation: BatchAccount_GetKeys
Gets the account keys for the specified Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchAccountKeys"
}
```
## Operation: BatchAccount_RegenerateKey
Regenerates the specified account key for the Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "parameters": {
      "$ref": "#/definitions/BatchAccountRegenerateKeyParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchAccountKeys"
}
```
## Operation: BatchAccount_SynchronizeAutoStorageKeys
Synchronizes access keys for the auto storage account configured for the specified Batch account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group that contains the Batch account.",
      "pattern": "^[-\\w\\._]+$"
    },
    "accountName": {
      "type": "string",
      "description": "The name of the Batch account.",
      "pattern": "^[-\\w\\._]+$",
      "maxLength": 24,
      "minLength": 3
    },
    "api-version": {
      "type": "string",
      "description": "The API version to be used with the HTTP request."
    },
    "subscriptionId": {
      "type": "string",
      "description": "A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "accountName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
