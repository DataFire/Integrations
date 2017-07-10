# @datafire/azure_arm_logic
REST API for Azure Logic Apps.

## Operation: ListOperations
Lists all of the available Logic REST API operations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "The API version."
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
## Operation: IntegrationAccounts_ListBySubscription
Gets a list of integration accounts by subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
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
  "$ref": "#/definitions/IntegrationAccountListResult"
}
```
## Operation: Workflows_ListBySubscription
Gets a list of workflows by subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
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
  "$ref": "#/definitions/WorkflowListResult"
}
```
## Operation: IntegrationAccounts_ListByResourceGroup
Gets a list of integration accounts by resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
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
  "$ref": "#/definitions/IntegrationAccountListResult"
}
```
## Operation: IntegrationAccounts_Delete
Deletes an integration account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: IntegrationAccounts_Get
Gets an integration account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccount"
}
```
## Operation: IntegrationAccounts_Update
Updates an integration account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "integrationAccount": {
      "$ref": "#/definitions/IntegrationAccount"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version",
    "integrationAccount"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccount"
}
```
## Operation: IntegrationAccounts_CreateOrUpdate
Creates or updates an integration account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "integrationAccount": {
      "$ref": "#/definitions/IntegrationAccount"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version",
    "integrationAccount"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccount"
}
```
## Operation: Agreements_ListByIntegrationAccounts
Gets a list of integration account agreements.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountAgreementListResult"
}
```
## Operation: Agreements_Delete
Deletes an integration account agreement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "agreementName": {
      "type": "string",
      "description": "The integration account agreement name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "agreementName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Agreements_Get
Gets an integration account agreement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "agreementName": {
      "type": "string",
      "description": "The integration account agreement name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "agreementName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountAgreement"
}
```
## Operation: Agreements_CreateOrUpdate
Creates or updates an integration account agreement.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "agreementName": {
      "type": "string",
      "description": "The integration account agreement name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "agreement": {
      "$ref": "#/definitions/IntegrationAccountAgreement"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "agreementName",
    "api-version",
    "agreement"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountAgreement"
}
```
## Operation: Certificates_ListByIntegrationAccounts
Gets a list of integration account certificates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountCertificateListResult"
}
```
## Operation: Certificates_Delete
Deletes an integration account certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "certificateName": {
      "type": "string",
      "description": "The integration account certificate name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "certificateName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Certificates_Get
Gets an integration account certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "certificateName": {
      "type": "string",
      "description": "The integration account certificate name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "certificateName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountCertificate"
}
```
## Operation: Certificates_CreateOrUpdate
Creates or updates an integration account certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "certificateName": {
      "type": "string",
      "description": "The integration account certificate name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "certificate": {
      "$ref": "#/definitions/IntegrationAccountCertificate"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "certificateName",
    "api-version",
    "certificate"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountCertificate"
}
```
## Operation: IntegrationAccounts_GetCallbackUrl
Gets the integration account callback URL.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "parameters": {
      "$ref": "#/definitions/GetCallbackUrlParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CallbackUrl"
}
```
## Operation: Maps_ListByIntegrationAccounts
Gets a list of integration account maps.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountMapListResult"
}
```
## Operation: Maps_Delete
Deletes an integration account map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "mapName": {
      "type": "string",
      "description": "The integration account map name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "mapName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Maps_Get
Gets an integration account map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "mapName": {
      "type": "string",
      "description": "The integration account map name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "mapName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountMap"
}
```
## Operation: Maps_CreateOrUpdate
Creates or updates an integration account map.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "mapName": {
      "type": "string",
      "description": "The integration account map name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "map": {
      "$ref": "#/definitions/IntegrationAccountMap"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "mapName",
    "api-version",
    "map"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountMap"
}
```
## Operation: Partners_ListByIntegrationAccounts
Gets a list of integration account partners.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountPartnerListResult"
}
```
## Operation: Partners_Delete
Deletes an integration account partner.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "partnerName": {
      "type": "string",
      "description": "The integration account partner name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "partnerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Partners_Get
Gets an integration account partner.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "partnerName": {
      "type": "string",
      "description": "The integration account partner name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "partnerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountPartner"
}
```
## Operation: Partners_CreateOrUpdate
Creates or updates an integration account partner.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "partnerName": {
      "type": "string",
      "description": "The integration account partner name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "partner": {
      "$ref": "#/definitions/IntegrationAccountPartner"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "partnerName",
    "api-version",
    "partner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountPartner"
}
```
## Operation: Schemas_ListByIntegrationAccounts
Gets a list of integration account schemas.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSchemaListResult"
}
```
## Operation: Schemas_Delete
Deletes an integration account schema.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "schemaName": {
      "type": "string",
      "description": "The integration account schema name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "schemaName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Schemas_Get
Gets an integration account schema.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "schemaName": {
      "type": "string",
      "description": "The integration account schema name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "schemaName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSchema"
}
```
## Operation: Schemas_CreateOrUpdate
Creates or updates an integration account schema.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "schemaName": {
      "type": "string",
      "description": "The integration account schema name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "schema": {
      "$ref": "#/definitions/IntegrationAccountSchema"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "schemaName",
    "api-version",
    "schema"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSchema"
}
```
## Operation: Sessions_ListByIntegrationAccounts
Gets a list of integration account sessions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSessionListResult"
}
```
## Operation: Sessions_Delete
Deletes an integration account session.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "sessionName": {
      "type": "string",
      "description": "The integration account session name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "sessionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Sessions_Get
Gets an integration account session.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "sessionName": {
      "type": "string",
      "description": "The integration account session name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "sessionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSession"
}
```
## Operation: Sessions_CreateOrUpdate
Creates or updates an integration account session.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "integrationAccountName": {
      "type": "string",
      "description": "The integration account name."
    },
    "sessionName": {
      "type": "string",
      "description": "The integration account session name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "session": {
      "$ref": "#/definitions/IntegrationAccountSession"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "integrationAccountName",
    "sessionName",
    "api-version",
    "session"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IntegrationAccountSession"
}
```
## Operation: Workflows_Validate
Validates the workflow definition.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "location": {
      "type": "string",
      "description": "The workflow location."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "workflow": {
      "$ref": "#/definitions/Workflow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "location",
    "workflowName",
    "api-version",
    "workflow"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Workflows_ListByResourceGroup
Gets a list of workflows by resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
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
  "$ref": "#/definitions/WorkflowListResult"
}
```
## Operation: Workflows_Delete
Deletes a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Workflows_Get
Gets a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Workflow"
}
```
## Operation: Workflows_Update
Updates a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "workflow": {
      "$ref": "#/definitions/Workflow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version",
    "workflow"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Workflow"
}
```
## Operation: Workflows_CreateOrUpdate
Creates or updates a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "workflow": {
      "$ref": "#/definitions/Workflow"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version",
    "workflow"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Workflow"
}
```
## Operation: Workflows_Disable
Disables a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Workflows_Enable
Enables a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Workflows_GenerateUpgradedDefinition
Generates the upgraded definition for a workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "parameters": {
      "$ref": "#/definitions/GenerateUpgradedDefinitionParameters"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version",
    "parameters"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Workflows_ListSwagger
Gets an OpenAPI definition for the workflow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: Workflows_RegenerateAccessKey
Regenerates the callback URL access key for request triggers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "keyType": {
      "$ref": "#/definitions/RegenerateActionParameter"
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "keyType",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WorkflowRuns_List
Gets a list of workflow runs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowRunListResult"
}
```
## Operation: WorkflowRuns_Get
Gets a workflow run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "runName": {
      "type": "string",
      "description": "The workflow run name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "runName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowRun"
}
```
## Operation: WorkflowRunActions_List
Gets a list of workflow run actions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "runName": {
      "type": "string",
      "description": "The workflow run name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "runName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowRunActionListResult"
}
```
## Operation: WorkflowRunActions_Get
Gets a workflow run action.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "runName": {
      "type": "string",
      "description": "The workflow run name."
    },
    "actionName": {
      "type": "string",
      "description": "The workflow action name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "runName",
    "actionName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowRunAction"
}
```
## Operation: WorkflowRuns_Cancel
Cancels a workflow run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "runName": {
      "type": "string",
      "description": "The workflow run name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "runName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WorkflowTriggers_List
Gets a list of workflow triggers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTriggerListResult"
}
```
## Operation: WorkflowTriggers_Get
Gets a workflow trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTrigger"
}
```
## Operation: WorkflowTriggerHistories_List
Gets a list of workflow trigger histories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTriggerHistoryListResult"
}
```
## Operation: WorkflowTriggerHistories_Get
Gets a workflow trigger history.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "historyName": {
      "type": "string",
      "description": "The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "historyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTriggerHistory"
}
```
## Operation: WorkflowTriggerHistories_Resubmit
Resubmits a workflow run based on the trigger history.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "historyName": {
      "type": "string",
      "description": "The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "historyName",
    "api-version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: WorkflowTriggers_ListCallbackUrl
Gets the callback URL for a workflow trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTriggerCallbackUrl"
}
```
## Operation: WorkflowTriggers_Run
Runs a workflow trigger.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "triggerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Object"
}
```
## Operation: WorkflowVersions_List
Gets a list of workflow versions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    },
    "$top": {
      "type": "integer",
      "format": "int32",
      "description": "The number of items to be included in the result."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowVersionListResult"
}
```
## Operation: WorkflowVersions_Get
Gets a workflow version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "versionId": {
      "type": "string",
      "description": "The workflow versionId."
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "versionId",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowVersion"
}
```
## Operation: WorkflowVersions_ListCallbackUrl
Lists the callback URL for a trigger of a workflow version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string",
      "description": "The subscription id."
    },
    "resourceGroupName": {
      "type": "string",
      "description": "The resource group name."
    },
    "workflowName": {
      "type": "string",
      "description": "The workflow name."
    },
    "versionId": {
      "type": "string",
      "description": "The workflow versionId."
    },
    "triggerName": {
      "type": "string",
      "description": "The workflow trigger name."
    },
    "parameters": {
      "$ref": "#/definitions/GetCallbackUrlParameters"
    },
    "api-version": {
      "type": "string",
      "description": "The API version."
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId",
    "resourceGroupName",
    "workflowName",
    "versionId",
    "triggerName",
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WorkflowTriggerCallbackUrl"
}
```
