# @datafire/azure_arm_logic

Client library for LogicManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_logic
```

```js
let datafire = require('datafire');
let azure_arm_logic = require('@datafire/azure_arm_logic').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_logic: account,
  }
})

azure_arm_logic.ListOperations({}, context).then(data => {
  console.log(data);
})
```

## Description
REST API for Azure Logic Apps.

## Actions
### ListOperations
Lists all of the available Logic REST API operations.


```js
azure_arm_logic.ListOperations({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version.

### IntegrationAccounts_ListBySubscription
Gets a list of integration accounts by subscription.


```js
azure_arm_logic.IntegrationAccounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.

### Workflows_ListBySubscription
Gets a list of workflows by subscription.


```js
azure_arm_logic.Workflows_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### IntegrationAccounts_ListByResourceGroup
Gets a list of integration accounts by resource group.


```js
azure_arm_logic.IntegrationAccounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.

### IntegrationAccounts_Delete
Deletes an integration account.


```js
azure_arm_logic.IntegrationAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.

### IntegrationAccounts_Get
Gets an integration account.


```js
azure_arm_logic.IntegrationAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.

### IntegrationAccounts_Update
Updates an integration account.


```js
azure_arm_logic.IntegrationAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "integrationAccount": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* integrationAccount (object) **required** - The integration account.

### IntegrationAccounts_CreateOrUpdate
Creates or updates an integration account.


```js
azure_arm_logic.IntegrationAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "integrationAccount": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* integrationAccount (object) **required** - The integration account.

### Agreements_ListByIntegrationAccounts
Gets a list of integration account agreements.


```js
azure_arm_logic.Agreements_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Agreements_Delete
Deletes an integration account agreement.


```js
azure_arm_logic.Agreements_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* agreementName (string) **required** - The integration account agreement name.
* api-version (string) **required** - The API version.

### Agreements_Get
Gets an integration account agreement.


```js
azure_arm_logic.Agreements_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* agreementName (string) **required** - The integration account agreement name.
* api-version (string) **required** - The API version.

### Agreements_CreateOrUpdate
Creates or updates an integration account agreement.


```js
azure_arm_logic.Agreements_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": "",
  "agreement": {
    "properties": {
      "hostPartner": "",
      "guestPartner": "",
      "hostIdentity": {
        "qualifier": "",
        "value": ""
      },
      "guestIdentity": {
        "qualifier": "",
        "value": ""
      },
      "agreementType": "",
      "content": {}
    }
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* agreementName (string) **required** - The integration account agreement name.
* api-version (string) **required** - The API version.
* agreement (object) **required** - The integration account agreement.

### Certificates_ListByIntegrationAccounts
Gets a list of integration account certificates.


```js
azure_arm_logic.Certificates_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.

### Certificates_Delete
Deletes an integration account certificate.


```js
azure_arm_logic.Certificates_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "certificateName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* certificateName (string) **required** - The integration account certificate name.
* api-version (string) **required** - The API version.

### Certificates_Get
Gets an integration account certificate.


```js
azure_arm_logic.Certificates_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "certificateName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* certificateName (string) **required** - The integration account certificate name.
* api-version (string) **required** - The API version.

### Certificates_CreateOrUpdate
Creates or updates an integration account certificate.


```js
azure_arm_logic.Certificates_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "certificateName": "",
  "api-version": "",
  "certificate": {
    "properties": {}
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* certificateName (string) **required** - The integration account certificate name.
* api-version (string) **required** - The API version.
* certificate (object) **required** - The integration account certificate.

### IntegrationAccounts_GetCallbackUrl
Gets the integration account callback URL.


```js
azure_arm_logic.IntegrationAccounts_GetCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* parameters (object) **required** - The callback url parameters.

### Maps_ListByIntegrationAccounts
Gets a list of integration account maps.


```js
azure_arm_logic.Maps_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Maps_Delete
Deletes an integration account map.


```js
azure_arm_logic.Maps_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* mapName (string) **required** - The integration account map name.
* api-version (string) **required** - The API version.

### Maps_Get
Gets an integration account map.


```js
azure_arm_logic.Maps_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* mapName (string) **required** - The integration account map name.
* api-version (string) **required** - The API version.

### Maps_CreateOrUpdate
Creates or updates an integration account map.


```js
azure_arm_logic.Maps_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": "",
  "map": {
    "properties": {
      "mapType": ""
    }
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* mapName (string) **required** - The integration account map name.
* api-version (string) **required** - The API version.
* map (object) **required** - The integration account map.

### Partners_ListByIntegrationAccounts
Gets a list of integration account partners.


```js
azure_arm_logic.Partners_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Partners_Delete
Deletes an integration account partner.


```js
azure_arm_logic.Partners_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* partnerName (string) **required** - The integration account partner name.
* api-version (string) **required** - The API version.

### Partners_Get
Gets an integration account partner.


```js
azure_arm_logic.Partners_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* partnerName (string) **required** - The integration account partner name.
* api-version (string) **required** - The API version.

### Partners_CreateOrUpdate
Creates or updates an integration account partner.


```js
azure_arm_logic.Partners_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": "",
  "partner": {
    "properties": {
      "partnerType": "",
      "content": {}
    }
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* partnerName (string) **required** - The integration account partner name.
* api-version (string) **required** - The API version.
* partner (object) **required** - The integration account partner.

### Schemas_ListByIntegrationAccounts
Gets a list of integration account schemas.


```js
azure_arm_logic.Schemas_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Schemas_Delete
Deletes an integration account schema.


```js
azure_arm_logic.Schemas_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* schemaName (string) **required** - The integration account schema name.
* api-version (string) **required** - The API version.

### Schemas_Get
Gets an integration account schema.


```js
azure_arm_logic.Schemas_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* schemaName (string) **required** - The integration account schema name.
* api-version (string) **required** - The API version.

### Schemas_CreateOrUpdate
Creates or updates an integration account schema.


```js
azure_arm_logic.Schemas_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": "",
  "schema": {
    "properties": {
      "schemaType": ""
    }
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* schemaName (string) **required** - The integration account schema name.
* api-version (string) **required** - The API version.
* schema (object) **required** - The integration account schema.

### Sessions_ListByIntegrationAccounts
Gets a list of integration account sessions.


```js
azure_arm_logic.Sessions_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Sessions_Delete
Deletes an integration account session.


```js
azure_arm_logic.Sessions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "sessionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* sessionName (string) **required** - The integration account session name.
* api-version (string) **required** - The API version.

### Sessions_Get
Gets an integration account session.


```js
azure_arm_logic.Sessions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "sessionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* sessionName (string) **required** - The integration account session name.
* api-version (string) **required** - The API version.

### Sessions_CreateOrUpdate
Creates or updates an integration account session.


```js
azure_arm_logic.Sessions_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "sessionName": "",
  "api-version": "",
  "session": {
    "properties": {}
  }
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* integrationAccountName (string) **required** - The integration account name.
* sessionName (string) **required** - The integration account session name.
* api-version (string) **required** - The API version.
* session (object) **required** - The integration account session.

### Workflows_Validate
Validates the workflow definition.


```js
azure_arm_logic.Workflows_Validate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* location (string) **required** - The workflow location.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* workflow (object) **required** - The workflow type.

### Workflows_ListByResourceGroup
Gets a list of workflows by resource group.


```js
azure_arm_logic.Workflows_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### Workflows_Delete
Deletes a workflow.


```js
azure_arm_logic.Workflows_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.

### Workflows_Get
Gets a workflow.


```js
azure_arm_logic.Workflows_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.

### Workflows_Update
Updates a workflow.


```js
azure_arm_logic.Workflows_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* workflow (object) **required** - The workflow type.

### Workflows_CreateOrUpdate
Creates or updates a workflow.


```js
azure_arm_logic.Workflows_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* workflow (object) **required** - The workflow type.

### Workflows_Disable
Disables a workflow.


```js
azure_arm_logic.Workflows_Disable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.

### Workflows_Enable
Enables a workflow.


```js
azure_arm_logic.Workflows_Enable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.

### Workflows_GenerateUpgradedDefinition
Generates the upgraded definition for a workflow.


```js
azure_arm_logic.Workflows_GenerateUpgradedDefinition({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* parameters (object) **required** - The parameters to generate upgraded definition.

### Workflows_ListSwagger
Gets an OpenAPI definition for the workflow.


```js
azure_arm_logic.Workflows_ListSwagger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.

### Workflows_RegenerateAccessKey
Regenerates the callback URL access key for request triggers.


```js
azure_arm_logic.Workflows_RegenerateAccessKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "keyType": {},
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* keyType (object) **required** - The access key regenerate action content.
* api-version (string) **required** - The API version.

### WorkflowRuns_List
Gets a list of workflow runs.


```js
azure_arm_logic.WorkflowRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### WorkflowRuns_Get
Gets a workflow run.


```js
azure_arm_logic.WorkflowRuns_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* runName (string) **required** - The workflow run name.
* api-version (string) **required** - The API version.

### WorkflowRunActions_List
Gets a list of workflow run actions.


```js
azure_arm_logic.WorkflowRunActions_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* runName (string) **required** - The workflow run name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### WorkflowRunActions_Get
Gets a workflow run action.


```js
azure_arm_logic.WorkflowRunActions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* runName (string) **required** - The workflow run name.
* actionName (string) **required** - The workflow action name.
* api-version (string) **required** - The API version.

### WorkflowRuns_Cancel
Cancels a workflow run.


```js
azure_arm_logic.WorkflowRuns_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* runName (string) **required** - The workflow run name.
* api-version (string) **required** - The API version.

### WorkflowTriggers_List
Gets a list of workflow triggers.


```js
azure_arm_logic.WorkflowTriggers_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### WorkflowTriggers_Get
Gets a workflow trigger.


```js
azure_arm_logic.WorkflowTriggers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* api-version (string) **required** - The API version.

### WorkflowTriggerHistories_List
Gets a list of workflow trigger histories.


```js
azure_arm_logic.WorkflowTriggerHistories_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.
* $filter (string) - The filter to apply on the operation.

### WorkflowTriggerHistories_Get
Gets a workflow trigger history.


```js
azure_arm_logic.WorkflowTriggerHistories_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "historyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* historyName (string) **required** - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
* api-version (string) **required** - The API version.

### WorkflowTriggerHistories_Resubmit
Resubmits a workflow run based on the trigger history.


```js
azure_arm_logic.WorkflowTriggerHistories_Resubmit({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "historyName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* historyName (string) **required** - The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
* api-version (string) **required** - The API version.

### WorkflowTriggers_ListCallbackUrl
Gets the callback URL for a workflow trigger.


```js
azure_arm_logic.WorkflowTriggers_ListCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* api-version (string) **required** - The API version.

### WorkflowTriggers_Run
Runs a workflow trigger.


```js
azure_arm_logic.WorkflowTriggers_Run({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* triggerName (string) **required** - The workflow trigger name.
* api-version (string) **required** - The API version.

### WorkflowVersions_List
Gets a list of workflow versions.


```js
azure_arm_logic.WorkflowVersions_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* api-version (string) **required** - The API version.
* $top (integer) - The number of items to be included in the result.

### WorkflowVersions_Get
Gets a workflow version.


```js
azure_arm_logic.WorkflowVersions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "versionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* versionId (string) **required** - The workflow versionId.
* api-version (string) **required** - The API version.

### WorkflowVersions_ListCallbackUrl
Lists the callback URL for a trigger of a workflow version.


```js
azure_arm_logic.WorkflowVersions_ListCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "versionId": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription id.
* resourceGroupName (string) **required** - The resource group name.
* workflowName (string) **required** - The workflow name.
* versionId (string) **required** - The workflow versionId.
* triggerName (string) **required** - The workflow trigger name.
* parameters (object) - The callback url parameters.
* api-version (string) **required** - The API version.

