# @datafire/azure_logic

Client library for LogicManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_logic
```
```js
let azure_logic = require('@datafire/azure_logic').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_logic.ListOperations({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

REST API for Azure Logic Apps.

## Actions

### ListOperations
Lists all of the available Logic REST API operations.


```js
azure_logic.ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version.

#### Output
* output [OperationListResult](#operationlistresult)

### IntegrationAccounts_ListBySubscription
Gets a list of integration accounts by subscription.


```js
azure_logic.IntegrationAccounts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.

#### Output
* output [IntegrationAccountListResult](#integrationaccountlistresult)

### Workflows_ListBySubscription
Gets a list of workflows by subscription.


```js
azure_logic.Workflows_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowListResult](#workflowlistresult)

### IntegrationAccounts_ListByResourceGroup
Gets a list of integration accounts by resource group.


```js
azure_logic.IntegrationAccounts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.

#### Output
* output [IntegrationAccountListResult](#integrationaccountlistresult)

### IntegrationAccounts_Delete
Deletes an integration account.


```js
azure_logic.IntegrationAccounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationAccounts_Get
Gets an integration account.


```js
azure_logic.IntegrationAccounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccount](#integrationaccount)

### IntegrationAccounts_Update
Updates an integration account.


```js
azure_logic.IntegrationAccounts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "integrationAccount": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * integrationAccount **required** [IntegrationAccount](#integrationaccount)

#### Output
* output [IntegrationAccount](#integrationaccount)

### IntegrationAccounts_CreateOrUpdate
Creates or updates an integration account.


```js
azure_logic.IntegrationAccounts_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "integrationAccount": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * integrationAccount **required** [IntegrationAccount](#integrationaccount)

#### Output
* output [IntegrationAccount](#integrationaccount)

### Agreements_ListByIntegrationAccounts
Gets a list of integration account agreements.


```js
azure_logic.Agreements_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [IntegrationAccountAgreementListResult](#integrationaccountagreementlistresult)

### Agreements_Delete
Deletes an integration account agreement.


```js
azure_logic.Agreements_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * agreementName **required** `string`: The integration account agreement name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Agreements_Get
Gets an integration account agreement.


```js
azure_logic.Agreements_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * agreementName **required** `string`: The integration account agreement name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountAgreement](#integrationaccountagreement)

### Agreements_CreateOrUpdate
Creates or updates an integration account agreement.


```js
azure_logic.Agreements_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * agreementName **required** `string`: The integration account agreement name.
  * api-version **required** `string`: The API version.
  * agreement **required** [IntegrationAccountAgreement](#integrationaccountagreement)

#### Output
* output [IntegrationAccountAgreement](#integrationaccountagreement)

### Certificates_ListByIntegrationAccounts
Gets a list of integration account certificates.


```js
azure_logic.Certificates_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.

#### Output
* output [IntegrationAccountCertificateListResult](#integrationaccountcertificatelistresult)

### Certificates_Delete
Deletes an integration account certificate.


```js
azure_logic.Certificates_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "certificateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * certificateName **required** `string`: The integration account certificate name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Certificates_Get
Gets an integration account certificate.


```js
azure_logic.Certificates_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "certificateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * certificateName **required** `string`: The integration account certificate name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountCertificate](#integrationaccountcertificate)

### Certificates_CreateOrUpdate
Creates or updates an integration account certificate.


```js
azure_logic.Certificates_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * certificateName **required** `string`: The integration account certificate name.
  * api-version **required** `string`: The API version.
  * certificate **required** [IntegrationAccountCertificate](#integrationaccountcertificate)

#### Output
* output [IntegrationAccountCertificate](#integrationaccountcertificate)

### IntegrationAccounts_GetCallbackUrl
Gets the integration account callback URL.


```js
azure_logic.IntegrationAccounts_GetCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * parameters **required** [GetCallbackUrlParameters](#getcallbackurlparameters)

#### Output
* output [CallbackUrl](#callbackurl)

### Maps_ListByIntegrationAccounts
Gets a list of integration account maps.


```js
azure_logic.Maps_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [IntegrationAccountMapListResult](#integrationaccountmaplistresult)

### Maps_Delete
Deletes an integration account map.


```js
azure_logic.Maps_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * mapName **required** `string`: The integration account map name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Maps_Get
Gets an integration account map.


```js
azure_logic.Maps_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * mapName **required** `string`: The integration account map name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountMap](#integrationaccountmap)

### Maps_CreateOrUpdate
Creates or updates an integration account map.


```js
azure_logic.Maps_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * mapName **required** `string`: The integration account map name.
  * api-version **required** `string`: The API version.
  * map **required** [IntegrationAccountMap](#integrationaccountmap)

#### Output
* output [IntegrationAccountMap](#integrationaccountmap)

### Partners_ListByIntegrationAccounts
Gets a list of integration account partners.


```js
azure_logic.Partners_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [IntegrationAccountPartnerListResult](#integrationaccountpartnerlistresult)

### Partners_Delete
Deletes an integration account partner.


```js
azure_logic.Partners_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * partnerName **required** `string`: The integration account partner name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Partners_Get
Gets an integration account partner.


```js
azure_logic.Partners_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * partnerName **required** `string`: The integration account partner name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountPartner](#integrationaccountpartner)

### Partners_CreateOrUpdate
Creates or updates an integration account partner.


```js
azure_logic.Partners_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * partnerName **required** `string`: The integration account partner name.
  * api-version **required** `string`: The API version.
  * partner **required** [IntegrationAccountPartner](#integrationaccountpartner)

#### Output
* output [IntegrationAccountPartner](#integrationaccountpartner)

### Schemas_ListByIntegrationAccounts
Gets a list of integration account schemas.


```js
azure_logic.Schemas_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [IntegrationAccountSchemaListResult](#integrationaccountschemalistresult)

### Schemas_Delete
Deletes an integration account schema.


```js
azure_logic.Schemas_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * schemaName **required** `string`: The integration account schema name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Schemas_Get
Gets an integration account schema.


```js
azure_logic.Schemas_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * schemaName **required** `string`: The integration account schema name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountSchema](#integrationaccountschema)

### Schemas_CreateOrUpdate
Creates or updates an integration account schema.


```js
azure_logic.Schemas_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * schemaName **required** `string`: The integration account schema name.
  * api-version **required** `string`: The API version.
  * schema **required** [IntegrationAccountSchema](#integrationaccountschema)

#### Output
* output [IntegrationAccountSchema](#integrationaccountschema)

### Sessions_ListByIntegrationAccounts
Gets a list of integration account sessions.


```js
azure_logic.Sessions_ListByIntegrationAccounts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [IntegrationAccountSessionListResult](#integrationaccountsessionlistresult)

### Sessions_Delete
Deletes an integration account session.


```js
azure_logic.Sessions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "sessionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * sessionName **required** `string`: The integration account session name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Sessions_Get
Gets an integration account session.


```js
azure_logic.Sessions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "sessionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * sessionName **required** `string`: The integration account session name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationAccountSession](#integrationaccountsession)

### Sessions_CreateOrUpdate
Creates or updates an integration account session.


```js
azure_logic.Sessions_CreateOrUpdate({
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

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * sessionName **required** `string`: The integration account session name.
  * api-version **required** `string`: The API version.
  * session **required** [IntegrationAccountSession](#integrationaccountsession)

#### Output
* output [IntegrationAccountSession](#integrationaccountsession)

### Workflows_Validate
Validates the workflow definition.


```js
azure_logic.Workflows_Validate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * location **required** `string`: The workflow location.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * workflow **required** [Workflow](#workflow)

#### Output
*Output schema unknown*

### Workflows_ListByResourceGroup
Gets a list of workflows by resource group.


```js
azure_logic.Workflows_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowListResult](#workflowlistresult)

### Workflows_Delete
Deletes a workflow.


```js
azure_logic.Workflows_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Workflows_Get
Gets a workflow.


```js
azure_logic.Workflows_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

#### Output
* output [Workflow](#workflow)

### Workflows_Update
Updates a workflow.


```js
azure_logic.Workflows_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * workflow **required** [Workflow](#workflow)

#### Output
* output [Workflow](#workflow)

### Workflows_CreateOrUpdate
Creates or updates a workflow.


```js
azure_logic.Workflows_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "workflow": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * workflow **required** [Workflow](#workflow)

#### Output
* output [Workflow](#workflow)

### Workflows_Disable
Disables a workflow.


```js
azure_logic.Workflows_Disable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Workflows_Enable
Enables a workflow.


```js
azure_logic.Workflows_Enable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Workflows_GenerateUpgradedDefinition
Generates the upgraded definition for a workflow.


```js
azure_logic.Workflows_GenerateUpgradedDefinition({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * parameters **required** [GenerateUpgradedDefinitionParameters](#generateupgradeddefinitionparameters)

#### Output
* output [Object](#object)

### Workflows_ListSwagger
Gets an OpenAPI definition for the workflow.


```js
azure_logic.Workflows_ListSwagger({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

#### Output
* output [Object](#object)

### Workflows_RegenerateAccessKey
Regenerates the callback URL access key for request triggers.


```js
azure_logic.Workflows_RegenerateAccessKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "keyType": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * keyType **required** [RegenerateActionParameter](#regenerateactionparameter)
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### WorkflowRuns_List
Gets a list of workflow runs.


```js
azure_logic.WorkflowRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowRunListResult](#workflowrunlistresult)

### WorkflowRuns_Get
Gets a workflow run.


```js
azure_logic.WorkflowRuns_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * runName **required** `string`: The workflow run name.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowRun](#workflowrun)

### WorkflowRunActions_List
Gets a list of workflow run actions.


```js
azure_logic.WorkflowRunActions_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * runName **required** `string`: The workflow run name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowRunActionListResult](#workflowrunactionlistresult)

### WorkflowRunActions_Get
Gets a workflow run action.


```js
azure_logic.WorkflowRunActions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * runName **required** `string`: The workflow run name.
  * actionName **required** `string`: The workflow action name.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowRunAction](#workflowrunaction)

### WorkflowRuns_Cancel
Cancels a workflow run.


```js
azure_logic.WorkflowRuns_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * runName **required** `string`: The workflow run name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### WorkflowTriggers_List
Gets a list of workflow triggers.


```js
azure_logic.WorkflowTriggers_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowTriggerListResult](#workflowtriggerlistresult)

### WorkflowTriggers_Get
Gets a workflow trigger.


```js
azure_logic.WorkflowTriggers_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTrigger](#workflowtrigger)

### WorkflowTriggerHistories_List
Gets a list of workflow trigger histories.


```js
azure_logic.WorkflowTriggerHistories_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [WorkflowTriggerHistoryListResult](#workflowtriggerhistorylistresult)

### WorkflowTriggerHistories_Get
Gets a workflow trigger history.


```js
azure_logic.WorkflowTriggerHistories_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "historyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * historyName **required** `string`: The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTriggerHistory](#workflowtriggerhistory)

### WorkflowTriggerHistories_Resubmit
Resubmits a workflow run based on the trigger history.


```js
azure_logic.WorkflowTriggerHistories_Resubmit({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "historyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * historyName **required** `string`: The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### WorkflowTriggers_ListCallbackUrl
Gets the callback URL for a workflow trigger.


```js
azure_logic.WorkflowTriggers_ListCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### WorkflowTriggers_Run
Runs a workflow trigger.


```js
azure_logic.WorkflowTriggers_Run({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * api-version **required** `string`: The API version.

#### Output
* output [Object](#object)

### WorkflowVersions_List
Gets a list of workflow versions.


```js
azure_logic.WorkflowVersions_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.

#### Output
* output [WorkflowVersionListResult](#workflowversionlistresult)

### WorkflowVersions_Get
Gets a workflow version.


```js
azure_logic.WorkflowVersions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "versionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * versionId **required** `string`: The workflow versionId.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowVersion](#workflowversion)

### WorkflowVersions_ListCallbackUrl
Lists the callback URL for a trigger of a workflow version.


```js
azure_logic.WorkflowVersions_ListCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "versionId": "",
  "triggerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * versionId **required** `string`: The workflow versionId.
  * triggerName **required** `string`: The workflow trigger name.
  * parameters [GetCallbackUrlParameters](#getcallbackurlparameters)
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)



## Definitions

### AS2AcknowledgementConnectionSettings
* AS2AcknowledgementConnectionSettings `object`: The AS2 agreement acknowledegment connection settings.
  * ignoreCertificateNameMismatch **required** `boolean`: The value indicating whether to ignore mismatch in certificate name.
  * keepHttpConnectionAlive **required** `boolean`: The value indicating whether to keep the connection alive.
  * supportHttpStatusCodeContinue **required** `boolean`: The value indicating whether to support HTTP status code 'CONTINUE'.
  * unfoldHttpHeaders **required** `boolean`: The value indicating whether to unfold the HTTP headers.

### AS2AgreementContent
* AS2AgreementContent `object`: The integration account AS2 agreement content.
  * receiveAgreement **required** [AS2OneWayAgreement](#as2onewayagreement)
  * sendAgreement **required** [AS2OneWayAgreement](#as2onewayagreement)

### AS2EnvelopeSettings
* AS2EnvelopeSettings `object`: The AS2 agreement envelope settings.
  * autogenerateFileName **required** `boolean`: The value indicating whether to auto generate file name.
  * fileNameTemplate **required** `string`: The template for file name.
  * messageContentType **required** `string`: The message content type.
  * suspendMessageOnFileNameGenerationError **required** `boolean`: The value indicating whether to suspend message on file name generation error.
  * transmitFileNameInMimeHeader **required** `boolean`: The value indicating whether to transmit file name in mime header.

### AS2ErrorSettings
* AS2ErrorSettings `object`: The AS2 agreement error settings.
  * resendIfMdnNotReceived **required** `boolean`: The value indicating whether to resend message If MDN is not received.
  * suspendDuplicateMessage **required** `boolean`: The value indicating whether to suspend duplicate message.

### AS2MdnSettings
* AS2MdnSettings `object`: The AS2 agreement mdn settings.
  * dispositionNotificationTo `string`: The disposition notification to header value.
  * mdnText `string`: The MDN text.
  * micHashingAlgorithm **required** [HashingAlgorithm](#hashingalgorithm)
  * needMdn **required** `boolean`: The value indicating whether to send or request a MDN.
  * receiptDeliveryUrl `string`: The receipt delivery URL.
  * sendInboundMdnToMessageBox **required** `boolean`: The value indicating whether to send inbound MDN to message box.
  * sendMdnAsynchronously **required** `boolean`: The value indicating whether to send the asynchronous MDN.
  * signMdn **required** `boolean`: The value indicating whether the MDN needs to be signed or not.
  * signOutboundMdnIfOptional **required** `boolean`: The value indicating whether to sign the outbound MDN if optional.

### AS2MessageConnectionSettings
* AS2MessageConnectionSettings `object`: The AS2 agreement message connection settings.
  * ignoreCertificateNameMismatch **required** `boolean`: The value indicating whether to ignore mismatch in certificate name.
  * keepHttpConnectionAlive **required** `boolean`: The value indicating whether to keep the connection alive.
  * supportHttpStatusCodeContinue **required** `boolean`: The value indicating whether to support HTTP status code 'CONTINUE'.
  * unfoldHttpHeaders **required** `boolean`: The value indicating whether to unfold the HTTP headers.

### AS2OneWayAgreement
* AS2OneWayAgreement `object`: The integration account AS2 oneway agreement.
  * protocolSettings **required** [AS2ProtocolSettings](#as2protocolsettings)
  * receiverBusinessIdentity **required** [BusinessIdentity](#businessidentity)
  * senderBusinessIdentity **required** [BusinessIdentity](#businessidentity)

### AS2ProtocolSettings
* AS2ProtocolSettings `object`: The AS2 agreement protocol settings.
  * acknowledgementConnectionSettings **required** [AS2AcknowledgementConnectionSettings](#as2acknowledgementconnectionsettings)
  * envelopeSettings **required** [AS2EnvelopeSettings](#as2envelopesettings)
  * errorSettings **required** [AS2ErrorSettings](#as2errorsettings)
  * mdnSettings **required** [AS2MdnSettings](#as2mdnsettings)
  * messageConnectionSettings **required** [AS2MessageConnectionSettings](#as2messageconnectionsettings)
  * securitySettings **required** [AS2SecuritySettings](#as2securitysettings)
  * validationSettings **required** [AS2ValidationSettings](#as2validationsettings)

### AS2SecuritySettings
* AS2SecuritySettings `object`: The AS2 agreement security settings.
  * enableNrrForInboundDecodedMessages **required** `boolean`: The value indicating whether to enable NRR for inbound decoded messages.
  * enableNrrForInboundEncodedMessages **required** `boolean`: The value indicating whether to enable NRR for inbound encoded messages.
  * enableNrrForInboundMdn **required** `boolean`: The value indicating whether to enable NRR for inbound MDN.
  * enableNrrForOutboundDecodedMessages **required** `boolean`: The value indicating whether to enable NRR for outbound decoded messages.
  * enableNrrForOutboundEncodedMessages **required** `boolean`: The value indicating whether to enable NRR for outbound encoded messages.
  * enableNrrForOutboundMdn **required** `boolean`: The value indicating whether to enable NRR for outbound MDN.
  * encryptionCertificateName `string`: The name of the encryption certificate.
  * overrideGroupSigningCertificate **required** `boolean`: The value indicating whether to send or request a MDN.
  * sha2AlgorithmFormat `string`: The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
  * signingCertificateName `string`: The name of the signing certificate.

### AS2ValidationSettings
* AS2ValidationSettings `object`: The AS2 agreement validation settings.
  * checkCertificateRevocationListOnReceive **required** `boolean`: The value indicating whether to check for certificate revocation list on receive.
  * checkCertificateRevocationListOnSend **required** `boolean`: The value indicating whether to check for certificate revocation list on send.
  * checkDuplicateMessage **required** `boolean`: The value indicating whether to check for duplicate message.
  * compressMessage **required** `boolean`: The value indicating whether the message has to be compressed.
  * encryptMessage **required** `boolean`: The value indicating whether the message has to be encrypted.
  * encryptionAlgorithm **required** [EncryptionAlgorithm](#encryptionalgorithm)
  * interchangeDuplicatesValidityDays **required** `integer`: The number of days to look back for duplicate interchange.
  * overrideMessageProperties **required** `boolean`: The value indicating whether to override incoming message properties with those in agreement.
  * signMessage **required** `boolean`: The value indicating whether the message has to be signed.
  * signingAlgorithm [SigningAlgorithm](#signingalgorithm)

### AgreementContent
* AgreementContent `object`: The integration account agreement content.
  * aS2 [AS2AgreementContent](#as2agreementcontent)
  * edifact [EdifactAgreementContent](#edifactagreementcontent)
  * x12 [X12AgreementContent](#x12agreementcontent)

### AgreementType
* AgreementType `string` (values: NotSpecified, AS2, X12, Edifact)

### B2BPartnerContent
* B2BPartnerContent `object`: The B2B partner content.
  * businessIdentities `array`: The list of partner business identities.
    * items [BusinessIdentity](#businessidentity)

### BusinessIdentity
* BusinessIdentity `object`: The integration account partner's business identity.
  * qualifier **required** `string`: The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
  * value **required** `string`: The user defined business identity value.

### CallbackUrl
* CallbackUrl `object`: The callback url.
  * value `string`: The URL value.

### ContentHash
* ContentHash `object`: The content hash.
  * algorithm `string`: The algorithm of the content hash.
  * value `string`: The value of the content hash.

### ContentLink
* ContentLink `object`: The content link.
  * contentHash [ContentHash](#contenthash)
  * contentSize `integer`: The content size.
  * contentVersion `string`: The content version.
  * metadata [Object](#object)
  * uri `string`: The content link URI.

### Correlation
* Correlation `object`: The correlation property.
  * clientTrackingId `string`: The client tracking id.

### DayOfWeek
* DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

### EdifactAcknowledgementSettings
* EdifactAcknowledgementSettings `object`: The Edifact agreement acknowledgement settings.
  * acknowledgementControlNumberLowerBound **required** `integer`: The acknowledgement control number lower bound.
  * acknowledgementControlNumberPrefix `string`: The acknowledgement control number prefix.
  * acknowledgementControlNumberSuffix `string`: The acknowledgement control number suffix.
  * acknowledgementControlNumberUpperBound **required** `integer`: The acknowledgement control number upper bound.
  * batchFunctionalAcknowledgements **required** `boolean`: The value indicating whether to batch functional acknowledgements.
  * batchTechnicalAcknowledgements **required** `boolean`: The value indicating whether to batch the technical acknowledgements.
  * needFunctionalAcknowledgement **required** `boolean`: The value indicating whether functional acknowledgement is needed.
  * needLoopForValidMessages **required** `boolean`: The value indicating whether a loop is needed for valid messages.
  * needTechnicalAcknowledgement **required** `boolean`: The value indicating whether technical acknowledgement is needed.
  * rolloverAcknowledgementControlNumber **required** `boolean`: The value indicating whether to rollover acknowledgement control number.
  * sendSynchronousAcknowledgement **required** `boolean`: The value indicating whether to send synchronous acknowledgement.

### EdifactAgreementContent
* EdifactAgreementContent `object`: The Edifact agreement content.
  * receiveAgreement **required** [EdifactOneWayAgreement](#edifactonewayagreement)
  * sendAgreement **required** [EdifactOneWayAgreement](#edifactonewayagreement)

### EdifactCharacterSet
* EdifactCharacterSet `string` (values: NotSpecified, UNOB, UNOA, UNOC, UNOD, UNOE, UNOF, UNOG, UNOH, UNOI, UNOJ, UNOK, UNOX, UNOY, KECA)

### EdifactDecimalIndicator
* EdifactDecimalIndicator `string` (values: NotSpecified, Comma, Decimal)

### EdifactDelimiterOverride
* EdifactDelimiterOverride `object`: The Edifact delimiter override settings.
  * componentSeparator **required** `integer`: The component separator.
  * dataElementSeparator **required** `integer`: The data element separator.
  * decimalPointIndicator **required** [EdifactDecimalIndicator](#edifactdecimalindicator)
  * messageAssociationAssignedCode `string`: The message association assigned code.
  * messageId `string`: The message id.
  * messageRelease `string`: The message releaseversion.
  * messageVersion `string`: The message version.
  * releaseIndicator **required** `integer`: The release indicator.
  * repetitionSeparator **required** `integer`: The repetition separator.
  * segmentTerminator **required** `integer`: The segment terminator.
  * segmentTerminatorSuffix **required** [SegmentTerminatorSuffix](#segmentterminatorsuffix)
  * targetNamespace `string`: The target namespace on which this delimiter settings has to be applied.

### EdifactEnvelopeOverride
* EdifactEnvelopeOverride `object`: The Edifact enevlope override settings.
  * applicationPassword `string`: The application password.
  * associationAssignedCode `string`: The association assigned code.
  * controllingAgencyCode `string`: The controlling agency code.
  * functionalGroupId `string`: The functional group id.
  * groupHeaderMessageRelease `string`: The group header message release.
  * groupHeaderMessageVersion `string`: The group header message version.
  * messageAssociationAssignedCode `string`: The message association assigned code.
  * messageId `string`: The message id on which this envelope settings has to be applied.
  * messageRelease `string`: The message release version on which this envelope settings has to be applied.
  * messageVersion `string`: The message version on which this envelope settings has to be applied.
  * receiverApplicationId `string`: The receiver application id.
  * receiverApplicationQualifier `string`: The receiver application qualifier.
  * senderApplicationId `string`: The sender application id.
  * senderApplicationQualifier `string`: The sender application qualifier.
  * targetNamespace `string`: The target namespace on which this envelope settings has to be applied.

### EdifactEnvelopeSettings
* EdifactEnvelopeSettings `object`: The Edifact agreement envelope settings.
  * applicationReferenceId `string`: The application reference id.
  * applyDelimiterStringAdvice **required** `boolean`: The value indicating whether to apply delimiter string advice.
  * communicationAgreementId `string`: The communication agreement id.
  * createGroupingSegments **required** `boolean`: The value indicating whether to create grouping segments.
  * enableDefaultGroupHeaders **required** `boolean`: The value indicating whether to enable default group headers.
  * functionalGroupId `string`: The functional group id.
  * groupApplicationPassword `string`: The group application password.
  * groupApplicationReceiverId `string`: The group application receiver id.
  * groupApplicationReceiverQualifier `string`: The group application receiver qualifier.
  * groupApplicationSenderId `string`: The group application sender id.
  * groupApplicationSenderQualifier `string`: The group application sender qualifier.
  * groupAssociationAssignedCode `string`: The group association assigned code.
  * groupControlNumberLowerBound **required** `integer`: The group control number lower bound.
  * groupControlNumberPrefix `string`: The group control number prefix.
  * groupControlNumberSuffix `string`: The group control number suffix.
  * groupControlNumberUpperBound **required** `integer`: The group control number upper bound.
  * groupControllingAgencyCode `string`: The group controlling agency code.
  * groupMessageRelease `string`: The group message release.
  * groupMessageVersion `string`: The group message version.
  * interchangeControlNumberLowerBound **required** `integer`: The interchange control number lower bound.
  * interchangeControlNumberPrefix `string`: The interchange control number prefix.
  * interchangeControlNumberSuffix `string`: The interchange control number suffix.
  * interchangeControlNumberUpperBound **required** `integer`: The interchange control number upper bound.
  * isTestInterchange **required** `boolean`: The value indicating whether the message is a test interchange.
  * overwriteExistingTransactionSetControlNumber **required** `boolean`: The value indicating whether to overwrite existing transaction set control number.
  * processingPriorityCode `string`: The processing priority code.
  * receiverInternalIdentification `string`: The receiver internal identification.
  * receiverInternalSubIdentification `string`: The receiver internal sub identification.
  * receiverReverseRoutingAddress `string`: The receiver reverse routing address.
  * recipientReferencePasswordQualifier `string`: The recipient reference password qualifier.
  * recipientReferencePasswordValue `string`: The recipient reference password value.
  * rolloverGroupControlNumber **required** `boolean`: The value indicating whether to rollover group control number.
  * rolloverInterchangeControlNumber **required** `boolean`: The value indicating whether to rollover interchange control number.
  * rolloverTransactionSetControlNumber **required** `boolean`: The value indicating whether to rollover transaction set control number.
  * senderInternalIdentification `string`: The sender internal identification.
  * senderInternalSubIdentification `string`: The sender internal sub identification.
  * senderReverseRoutingAddress `string`: The sender reverse routing address.
  * transactionSetControlNumberLowerBound **required** `integer`: The transaction set control number lower bound.
  * transactionSetControlNumberPrefix `string`: The transaction set control number prefix.
  * transactionSetControlNumberSuffix `string`: The transaction set control number suffix.
  * transactionSetControlNumberUpperBound **required** `integer`: The transaction set control number upper bound.

### EdifactFramingSettings
* EdifactFramingSettings `object`: The Edifact agreement framing settings.
  * characterEncoding `string`: The character encoding.
  * characterSet **required** [EdifactCharacterSet](#edifactcharacterset)
  * componentSeparator **required** `integer`: The component separator.
  * dataElementSeparator **required** `integer`: The data element separator.
  * decimalPointIndicator **required** [EdifactDecimalIndicator](#edifactdecimalindicator)
  * protocolVersion **required** `integer`: The protocol version.
  * releaseIndicator **required** `integer`: The release indicator.
  * repetitionSeparator **required** `integer`: The repetition separator.
  * segmentTerminator **required** `integer`: The segment terminator.
  * segmentTerminatorSuffix **required** [SegmentTerminatorSuffix](#segmentterminatorsuffix)
  * serviceCodeListDirectoryVersion `string`: The service code list directory version.

### EdifactMessageFilter
* EdifactMessageFilter `object`: The Edifact message filter for odata query.
  * messageFilterType **required** [MessageFilterType](#messagefiltertype)

### EdifactMessageIdentifier
* EdifactMessageIdentifier `object`: The Edifact message identifier.
  * messageId **required** `string`: The message id on which this envelope settings has to be applied.

### EdifactOneWayAgreement
* EdifactOneWayAgreement `object`: The Edifact one way agreement.
  * protocolSettings **required** [EdifactProtocolSettings](#edifactprotocolsettings)
  * receiverBusinessIdentity **required** [BusinessIdentity](#businessidentity)
  * senderBusinessIdentity **required** [BusinessIdentity](#businessidentity)

### EdifactProcessingSettings
* EdifactProcessingSettings `object`: The Edifact agreement protocol settings.
  * createEmptyXmlTagsForTrailingSeparators **required** `boolean`: The value indicating whether to create empty xml tags for trailing separators.
  * maskSecurityInfo **required** `boolean`: The value indicating whether to mask security information.
  * preserveInterchange **required** `boolean`: The value indicating whether to preserve interchange.
  * suspendInterchangeOnError **required** `boolean`: The value indicating whether to suspend interchange on error.
  * useDotAsDecimalSeparator **required** `boolean`: The value indicating whether to use dot as decimal separator.

### EdifactProtocolSettings
* EdifactProtocolSettings `object`: The Edifact agreement protocol settings.
  * acknowledgementSettings **required** [EdifactAcknowledgementSettings](#edifactacknowledgementsettings)
  * edifactDelimiterOverrides `array`: The EDIFACT delimiter override settings.
    * items [EdifactDelimiterOverride](#edifactdelimiteroverride)
  * envelopeOverrides `array`: The EDIFACT envelope override settings.
    * items [EdifactEnvelopeOverride](#edifactenvelopeoverride)
  * envelopeSettings **required** [EdifactEnvelopeSettings](#edifactenvelopesettings)
  * framingSettings **required** [EdifactFramingSettings](#edifactframingsettings)
  * messageFilter **required** [EdifactMessageFilter](#edifactmessagefilter)
  * messageFilterList `array`: The EDIFACT message filter list.
    * items [EdifactMessageIdentifier](#edifactmessageidentifier)
  * processingSettings **required** [EdifactProcessingSettings](#edifactprocessingsettings)
  * schemaReferences **required** `array`: The EDIFACT schema references.
    * items [EdifactSchemaReference](#edifactschemareference)
  * validationOverrides `array`: The EDIFACT validation override settings.
    * items [EdifactValidationOverride](#edifactvalidationoverride)
  * validationSettings **required** [EdifactValidationSettings](#edifactvalidationsettings)

### EdifactSchemaReference
* EdifactSchemaReference `object`: The Edifact schema reference.
  * associationAssignedCode `string`: The association assigned code.
  * messageId **required** `string`: The message id.
  * messageRelease **required** `string`: The message release version.
  * messageVersion **required** `string`: The message version.
  * schemaName **required** `string`: The schema name.
  * senderApplicationId `string`: The sender application id.
  * senderApplicationQualifier `string`: The sender application qualifier.

### EdifactValidationOverride
* EdifactValidationOverride `object`: The Edifact validation override settings.
  * allowLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to allow leading and trailing spaces and zeroes.
  * enforceCharacterSet **required** `boolean`: The value indicating whether to validate character Set.
  * messageId **required** `string`: The message id on which the validation settings has to be applied.
  * trailingSeparatorPolicy **required** [TrailingSeparatorPolicy](#trailingseparatorpolicy)
  * trimLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to trim leading and trailing spaces and zeroes.
  * validateEdiTypes **required** `boolean`: The value indicating whether to validate EDI types.
  * validateXsdTypes **required** `boolean`: The value indicating whether to validate XSD types.

### EdifactValidationSettings
* EdifactValidationSettings `object`: The Edifact agreement validation settings.
  * allowLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to allow leading and trailing spaces and zeroes.
  * checkDuplicateGroupControlNumber **required** `boolean`: The value indicating whether to check for duplicate group control number.
  * checkDuplicateInterchangeControlNumber **required** `boolean`: The value indicating whether to check for duplicate interchange control number.
  * checkDuplicateTransactionSetControlNumber **required** `boolean`: The value indicating whether to check for duplicate transaction set control number.
  * interchangeControlNumberValidityDays **required** `integer`: The validity period of interchange control number.
  * trailingSeparatorPolicy **required** [TrailingSeparatorPolicy](#trailingseparatorpolicy)
  * trimLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to trim leading and trailing spaces and zeroes.
  * validateCharacterSet **required** `boolean`: The value indicating whether to validate character set in the message.
  * validateEdiTypes **required** `boolean`: The value indicating whether to Whether to validate EDI types.
  * validateXsdTypes **required** `boolean`: The value indicating whether to Whether to validate XSD types.

### EncryptionAlgorithm
* EncryptionAlgorithm `string` (values: NotSpecified, None, DES3, RC2, AES128, AES192, AES256)

### ErrorProperties
* ErrorProperties `object`: Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates Logic service is not able to process the incoming request. The error property contains the error details.
  * error [ErrorProperties](#errorproperties)

### GenerateUpgradedDefinitionParameters
* GenerateUpgradedDefinitionParameters `object`: The parameters to generate upgraded definition.
  * targetSchemaVersion `string`: The target schema version.

### GetCallbackUrlParameters
* GetCallbackUrlParameters `object`: The callback url parameters.
  * keyType [KeyType](#keytype)
  * notAfter `string`: The expiry time.

### HashingAlgorithm
* HashingAlgorithm `string` (values: NotSpecified, None, MD5, SHA1, SHA2256, SHA2384, SHA2512)

### IntegrationAccount
* IntegrationAccount `object`: The integration account.
  * properties [IntegrationAccountProperties](#integrationaccountproperties)
  * sku [IntegrationAccountSku](#integrationaccountsku)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountAgreement
* IntegrationAccountAgreement `object`: The integration account agreement.
  * properties **required** [IntegrationAccountAgreementProperties](#integrationaccountagreementproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountAgreementFilter
* IntegrationAccountAgreementFilter `object`: The integration account agreement filter for odata query.
  * agreementType **required** [AgreementType](#agreementtype)

### IntegrationAccountAgreementListResult
* IntegrationAccountAgreementListResult `object`: The list of integration account agreements.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account agreements.
    * items [IntegrationAccountAgreement](#integrationaccountagreement)

### IntegrationAccountAgreementProperties
* IntegrationAccountAgreementProperties `object`: The integration account agreement properties.
  * agreementType **required** [AgreementType](#agreementtype)
  * changedTime `string`: The changed time.
  * content **required** [AgreementContent](#agreementcontent)
  * createdTime `string`: The created time.
  * guestIdentity **required** [BusinessIdentity](#businessidentity)
  * guestPartner **required** `string`: The integration account partner that is set as guest partner for this agreement.
  * hostIdentity **required** [BusinessIdentity](#businessidentity)
  * hostPartner **required** `string`: The integration account partner that is set as host partner for this agreement.
  * metadata `object`: The metadata.

### IntegrationAccountCertificate
* IntegrationAccountCertificate `object`: The integration account certificate.
  * properties **required** [IntegrationAccountCertificateProperties](#integrationaccountcertificateproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountCertificateListResult
* IntegrationAccountCertificateListResult `object`: The list of integration account certificates.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account certificates.
    * items [IntegrationAccountCertificate](#integrationaccountcertificate)

### IntegrationAccountCertificateProperties
* IntegrationAccountCertificateProperties `object`: The integration account certificate properties.
  * changedTime `string`: The changed time.
  * createdTime `string`: The created time.
  * key [KeyVaultKeyReference](#keyvaultkeyreference)
  * metadata `object`: The metadata.
  * publicCertificate `string`: The public certificate.

### IntegrationAccountListResult
* IntegrationAccountListResult `object`: The list of integration accounts.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration accounts.
    * items [IntegrationAccount](#integrationaccount)

### IntegrationAccountMap
* IntegrationAccountMap `object`: The integration account map.
  * properties **required** [IntegrationAccountMapProperties](#integrationaccountmapproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountMapFilter
* IntegrationAccountMapFilter `object`: The integration account map filter for odata query.
  * mapType **required** [MapType](#maptype)

### IntegrationAccountMapListResult
* IntegrationAccountMapListResult `object`: The list of integration account maps.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account maps.
    * items [IntegrationAccountMap](#integrationaccountmap)

### IntegrationAccountMapProperties
* IntegrationAccountMapProperties `object`: The integration account map.
  * changedTime `string`: The changed time.
  * content `string`: The content.
  * contentLink [ContentLink](#contentlink)
  * contentType `string`: The content type.
  * createdTime `string`: The created time.
  * mapType **required** [MapType](#maptype)
  * metadata `object`: The metadata.
  * parametersSchema `object`: The parameters schema of integration account map.
    * ref `string`: The reference name.

### IntegrationAccountPartner
* IntegrationAccountPartner `object`: The integration account partner.
  * properties **required** [IntegrationAccountPartnerProperties](#integrationaccountpartnerproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountPartnerFilter
* IntegrationAccountPartnerFilter `object`: The integration account partner filter for odata query.
  * partnerType **required** [PartnerType](#partnertype)

### IntegrationAccountPartnerListResult
* IntegrationAccountPartnerListResult `object`: The list of integration account partners.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account partners.
    * items [IntegrationAccountPartner](#integrationaccountpartner)

### IntegrationAccountPartnerProperties
* IntegrationAccountPartnerProperties `object`: The integration account partner properties.
  * changedTime `string`: The changed time.
  * content **required** [PartnerContent](#partnercontent)
  * createdTime `string`: The created time.
  * metadata `object`: The metadata.
  * partnerType **required** [PartnerType](#partnertype)

### IntegrationAccountProperties
* IntegrationAccountProperties `object`

### IntegrationAccountSchema
* IntegrationAccountSchema `object`: The integration account schema.
  * properties **required** [IntegrationAccountSchemaProperties](#integrationaccountschemaproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountSchemaFilter
* IntegrationAccountSchemaFilter `object`: The integration account schema filter for odata query.
  * schemaType **required** [SchemaType](#schematype)

### IntegrationAccountSchemaListResult
* IntegrationAccountSchemaListResult `object`: The list of integration account schemas.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account schemas.
    * items [IntegrationAccountSchema](#integrationaccountschema)

### IntegrationAccountSchemaProperties
* IntegrationAccountSchemaProperties `object`: The integration account schema properties.
  * changedTime `string`: The changed time.
  * content `string`: The content.
  * contentLink [ContentLink](#contentlink)
  * contentType `string`: The content type.
  * createdTime `string`: The created time.
  * documentName `string`: The document name.
  * fileName `string`: The file name.
  * metadata `object`: The metadata.
  * schemaType **required** [SchemaType](#schematype)
  * targetNamespace `string`: The target namespace of the schema.

### IntegrationAccountSession
* IntegrationAccountSession `object`: The integration account session.
  * properties **required** [IntegrationAccountSessionProperties](#integrationaccountsessionproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationAccountSessionFilter
* IntegrationAccountSessionFilter `object`: The integration account session filter.
  * changedTime **required** `string`: The changed time of integration account sessions.

### IntegrationAccountSessionListResult
* IntegrationAccountSessionListResult `object`: The list of integration account sessions.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration account sessions.
    * items [IntegrationAccountSession](#integrationaccountsession)

### IntegrationAccountSessionProperties
* IntegrationAccountSessionProperties `object`: The integration account session properties.
  * changedTime `string`: The changed time.
  * content [Object](#object)
  * createdTime `string`: The created time.

### IntegrationAccountSku
* IntegrationAccountSku `object`: The integration account sku.
  * name **required** [IntegrationAccountSkuName](#integrationaccountskuname)

### IntegrationAccountSkuName
* IntegrationAccountSkuName `string` (values: NotSpecified, Free, Standard)

### KeyType
* KeyType `string` (values: NotSpecified, Primary, Secondary)

### KeyVaultKeyReference
* KeyVaultKeyReference `object`: The reference to the key vault key.
  * keyName **required** `string`: The private key name in key vault.
  * keyVault **required** `object`: The key vault reference.
    * id `string`: The resource id.
    * name `string`: The resource name.
    * type `string`: The resource type.
  * keyVersion `string`: The private key version in key vault.

### MapType
* MapType `string` (values: NotSpecified, Xslt)

### MessageFilterType
* MessageFilterType `string` (values: NotSpecified, Include, Exclude)

### Object
* Object `object`

### Operation
* Operation `object`: Logic REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Logic
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Logic operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Logic operations supported by the Logic resource provider.
    * items [Operation](#operation)

### ParameterType
* ParameterType `string` (values: NotSpecified, String, SecureString, Int, Float, Bool, Array, Object, SecureObject)

### PartnerContent
* PartnerContent `object`: The integration account partner content.
  * b2b [B2BPartnerContent](#b2bpartnercontent)

### PartnerType
* PartnerType `string` (values: NotSpecified, B2B)

### RecurrenceFrequency
* RecurrenceFrequency `string` (values: NotSpecified, Second, Minute, Hour, Day, Week, Month, Year)

### RecurrenceSchedule
* RecurrenceSchedule `object`: The recurrence schedule.
  * hours `array`: The hours.
    * items `integer`
  * minutes `array`: The minutes.
    * items `integer`
  * monthDays `array`: The month days.
    * items `integer`
  * monthlyOccurrences `array`: The monthly occurrences.
    * items [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)
  * weekDays `array`: The days of the week.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

### RecurrenceScheduleOccurrence
* RecurrenceScheduleOccurrence `object`: The recurrence schedule occurence.
  * day [DayOfWeek](#dayofweek)
  * occurrence `integer`: The occurrence.

### RegenerateActionParameter
* RegenerateActionParameter `object`: The access key regenerate action content.
  * keyType [KeyType](#keytype)

### Resource
* Resource `object`: The base resource type.
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### ResourceReference
* ResourceReference `object`: The resource reference.
  * id `string`: The resource id.
  * name `string`: Gets the resource name.
  * type `string`: Gets the resource type.

### RetryHistory
* RetryHistory `object`: The retry history.
  * clientRequestId `string`: Gets the client request Id.
  * code `string`: Gets the status code.
  * endTime `string`: Gets the end time.
  * error [ErrorResponse](#errorresponse)
  * serviceRequestId `string`: Gets the service request Id.
  * startTime `string`: Gets the start time.

### SchemaType
* SchemaType `string` (values: NotSpecified, Xml)

### SegmentTerminatorSuffix
* SegmentTerminatorSuffix `string` (values: NotSpecified, None, CR, LF, CRLF)

### SigningAlgorithm
* SigningAlgorithm `string` (values: NotSpecified, Default, SHA1, SHA2256, SHA2384, SHA2512)

### Sku
* Sku `object`: The sku type.
  * name **required** [SkuName](#skuname)
  * plan [ResourceReference](#resourcereference)

### SkuName
* SkuName `string` (values: NotSpecified, Free, Shared, Basic, Standard, Premium): The sku name.

### SubResource
* SubResource `object`: The sub resource type.
  * id `string`: The resource id.

### TrailingSeparatorPolicy
* TrailingSeparatorPolicy `string` (values: NotSpecified, NotAllowed, Optional, Mandatory)

### UsageIndicator
* UsageIndicator `string` (values: NotSpecified, Test, Information, Production)

### Workflow
* Workflow `object`: The workflow type.
  * properties [WorkflowProperties](#workflowproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### WorkflowFilter
* WorkflowFilter `object`: The workflow filter.
  * state [WorkflowState](#workflowstate)

### WorkflowListResult
* WorkflowListResult `object`: The list of workflows.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of workflows.
    * items [Workflow](#workflow)

### WorkflowOutputParameter
* WorkflowOutputParameter `object`: The workflow output parameter.
  * error [Object](#object)
  * description `string`: The description.
  * metadata [Object](#object)
  * type [ParameterType](#parametertype)
  * value [Object](#object)

### WorkflowParameter
* WorkflowParameter `object`: The workflow parameters.
  * description `string`: The description.
  * metadata [Object](#object)
  * type [ParameterType](#parametertype)
  * value [Object](#object)

### WorkflowProperties
* WorkflowProperties `object`: The workflow properties.
  * accessEndpoint `string`: Gets the access endpoint.
  * changedTime `string`: Gets the changed time.
  * createdTime `string`: Gets the created time.
  * definition [Object](#object)
  * integrationAccount [ResourceReference](#resourcereference)
  * parameters `object`: The parameters.
  * provisioningState [WorkflowProvisioningState](#workflowprovisioningstate)
  * sku [Sku](#sku)
  * state [WorkflowState](#workflowstate)
  * version `string`: Gets the version.

### WorkflowProvisioningState
* WorkflowProvisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Moving, Updating, Registering, Registered, Unregistering, Unregistered, Completed)

### WorkflowRun
* WorkflowRun `object`: The workflow run.
  * name `string`: Gets the workflow run name.
  * properties [WorkflowRunProperties](#workflowrunproperties)
  * type `string`: Gets the workflow run type.
  * id `string`: The resource id.

### WorkflowRunAction
* WorkflowRunAction `object`: The workflow run action.
  * name `string`: Gets the workflow run action name.
  * properties [WorkflowRunActionProperties](#workflowrunactionproperties)
  * type `string`: Gets the workflow run action type.
  * id `string`: The resource id.

### WorkflowRunActionFilter
* WorkflowRunActionFilter `object`: The workflow run action filter.
  * status [WorkflowStatus](#workflowstatus)

### WorkflowRunActionListResult
* WorkflowRunActionListResult `object`: The list of workflow run actions.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow run actions.
    * items [WorkflowRunAction](#workflowrunaction)

### WorkflowRunActionProperties
* WorkflowRunActionProperties `object`: The workflow run action properties.
  * code `string`: Gets the code.
  * correlation [Correlation](#correlation)
  * endTime `string`: Gets the end time.
  * error [Object](#object)
  * inputsLink [ContentLink](#contentlink)
  * outputsLink [ContentLink](#contentlink)
  * retryHistory `array`: Gets the retry histories.
    * items [RetryHistory](#retryhistory)
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trackedProperties [Object](#object)
  * trackingId `string`: Gets the tracking id.

### WorkflowRunFilter
* WorkflowRunFilter `object`: The workflow run filter.
  * status [WorkflowStatus](#workflowstatus)

### WorkflowRunListResult
* WorkflowRunListResult `object`: The list of workflow runs.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow runs.
    * items [WorkflowRun](#workflowrun)

### WorkflowRunProperties
* WorkflowRunProperties `object`: The workflow run properties.
  * code `string`: Gets the code.
  * correlation [Correlation](#correlation)
  * correlationId `string`: Gets the correlation id.
  * endTime `string`: Gets the end time.
  * error [Object](#object)
  * outputs `object`: Gets the outputs.
  * response [WorkflowRunTrigger](#workflowruntrigger)
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trigger [WorkflowRunTrigger](#workflowruntrigger)
  * workflow [ResourceReference](#resourcereference)

### WorkflowRunTrigger
* WorkflowRunTrigger `object`: The workflow run trigger.
  * code `string`: Gets the code.
  * correlation [Correlation](#correlation)
  * endTime `string`: Gets the end time.
  * error [Object](#object)
  * inputs [Object](#object)
  * inputsLink [ContentLink](#contentlink)
  * name `string`: Gets the name.
  * outputs [Object](#object)
  * outputsLink [ContentLink](#contentlink)
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trackedProperties [Object](#object)
  * trackingId `string`: Gets the tracking id.

### WorkflowState
* WorkflowState `string` (values: NotSpecified, Completed, Enabled, Disabled, Deleted, Suspended)

### WorkflowStatus
* WorkflowStatus `string` (values: NotSpecified, Paused, Running, Waiting, Succeeded, Skipped, Suspended, Cancelled, Failed, Faulted, TimedOut, Aborted, Ignored)

### WorkflowTrigger
* WorkflowTrigger `object`: The workflow trigger.
  * name `string`: Gets the workflow trigger name.
  * properties [WorkflowTriggerProperties](#workflowtriggerproperties)
  * type `string`: Gets the workflow trigger type.
  * id `string`: The resource id.

### WorkflowTriggerCallbackUrl
* WorkflowTriggerCallbackUrl `object`: The workflow trigger callback URL.
  * basePath `string`: Gets the workflow trigger callback URL base path.
  * method `string`: Gets the workflow trigger callback URL HTTP method.
  * queries [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries)
  * relativePath `string`: Gets the workflow trigger callback URL relative path.
  * relativePathParameters `array`: Gets the workflow trigger callback URL relative path parameters.
    * items `string`
  * value `string`: Gets the workflow trigger callback URL.

### WorkflowTriggerFilter
* WorkflowTriggerFilter `object`: The workflow trigger filter.
  * state [WorkflowState](#workflowstate)

### WorkflowTriggerHistory
* WorkflowTriggerHistory `object`: The workflow trigger history.
  * name `string`: Gets the workflow trigger history name.
  * properties [WorkflowTriggerHistoryProperties](#workflowtriggerhistoryproperties)
  * type `string`: Gets the workflow trigger history type.
  * id `string`: The resource id.

### WorkflowTriggerHistoryFilter
* WorkflowTriggerHistoryFilter `object`: The workflow trigger history filter.
  * status [WorkflowStatus](#workflowstatus)

### WorkflowTriggerHistoryListResult
* WorkflowTriggerHistoryListResult `object`: The list of workflow trigger histories.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow trigger histories.
    * items [WorkflowTriggerHistory](#workflowtriggerhistory)

### WorkflowTriggerHistoryProperties
* WorkflowTriggerHistoryProperties `object`: The workflow trigger history properties.
  * code `string`: Gets the code.
  * correlation [Correlation](#correlation)
  * endTime `string`: Gets the end time.
  * error [Object](#object)
  * fired `boolean`: Gets a value indicating whether trigger was fired.
  * inputsLink [ContentLink](#contentlink)
  * outputsLink [ContentLink](#contentlink)
  * run [ResourceReference](#resourcereference)
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trackingId `string`: Gets the tracking id.

### WorkflowTriggerListCallbackUrlQueries
* WorkflowTriggerListCallbackUrlQueries `object`: Gets the workflow trigger callback URL query parameters.
  * api-version `string`: The api version.
  * sig `string`: The SAS signature.
  * sp `string`: The SAS permissions.
  * sv `string`: The SAS version.

### WorkflowTriggerListResult
* WorkflowTriggerListResult `object`: The list of workflow triggers.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow triggers.
    * items [WorkflowTrigger](#workflowtrigger)

### WorkflowTriggerProperties
* WorkflowTriggerProperties `object`: The workflow trigger properties.
  * changedTime `string`: Gets the changed time.
  * createdTime `string`: Gets the created time.
  * lastExecutionTime `string`: Gets the last execution time.
  * nextExecutionTime `string`: Gets the next execution time.
  * provisioningState [WorkflowTriggerProvisioningState](#workflowtriggerprovisioningstate)
  * recurrence [WorkflowTriggerRecurrence](#workflowtriggerrecurrence)
  * state [WorkflowState](#workflowstate)
  * status [WorkflowStatus](#workflowstatus)
  * workflow [ResourceReference](#resourcereference)

### WorkflowTriggerProvisioningState
* WorkflowTriggerProvisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Moving, Updating, Registering, Registered, Unregistering, Unregistered, Completed)

### WorkflowTriggerRecurrence
* WorkflowTriggerRecurrence `object`: The workflow trigger recurrence.
  * endTime `string`: The end time.
  * frequency [RecurrenceFrequency](#recurrencefrequency)
  * interval `integer`: The interval.
  * schedule [RecurrenceSchedule](#recurrenceschedule)
  * startTime `string`: The start time.
  * timeZone `string`: The time zone.

### WorkflowVersion
* WorkflowVersion `object`: The workflow version.
  * properties [WorkflowVersionProperties](#workflowversionproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### WorkflowVersionListResult
* WorkflowVersionListResult `object`: The list of workflow versions.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow versions.
    * items [WorkflowVersion](#workflowversion)

### WorkflowVersionProperties
* WorkflowVersionProperties `object`: The workflow version properties.
  * accessEndpoint `string`: Gets the access endpoint.
  * changedTime `string`: Gets the changed time.
  * createdTime `string`: Gets the created time.
  * definition [Object](#object)
  * integrationAccount [ResourceReference](#resourcereference)
  * parameters `object`: The parameters.
  * sku [Sku](#sku)
  * state [WorkflowState](#workflowstate)
  * version `string`: Gets the version.

### X12AcknowledgementSettings
* X12AcknowledgementSettings `object`: The X12 agreement acknowledgement settings.
  * acknowledgementControlNumberLowerBound **required** `integer`: The acknowledgement control number lower bound.
  * acknowledgementControlNumberPrefix `string`: The acknowledgement control number prefix.
  * acknowledgementControlNumberSuffix `string`: The acknowledgement control number suffix.
  * acknowledgementControlNumberUpperBound **required** `integer`: The acknowledgement control number upper bound.
  * batchFunctionalAcknowledgements **required** `boolean`: The value indicating whether to batch functional acknowledgements.
  * batchImplementationAcknowledgements **required** `boolean`: The value indicating whether to batch implementation acknowledgements.
  * batchTechnicalAcknowledgements **required** `boolean`: The value indicating whether to batch the technical acknowledgements.
  * functionalAcknowledgementVersion `string`: The functional acknowledgement version.
  * implementationAcknowledgementVersion `string`: The implementation acknowledgement version.
  * needFunctionalAcknowledgement **required** `boolean`: The value indicating whether functional acknowledgement is needed.
  * needImplementationAcknowledgement **required** `boolean`: The value indicating whether implementation acknowledgement is needed.
  * needLoopForValidMessages **required** `boolean`: The value indicating whether a loop is needed for valid messages.
  * needTechnicalAcknowledgement **required** `boolean`: The value indicating whether technical acknowledgement is needed.
  * rolloverAcknowledgementControlNumber **required** `boolean`: The value indicating whether to rollover acknowledgement control number.
  * sendSynchronousAcknowledgement **required** `boolean`: The value indicating whether to send synchronous acknowledgement.

### X12AgreementContent
* X12AgreementContent `object`: The X12 agreement content.
  * receiveAgreement **required** [X12OneWayAgreement](#x12onewayagreement)
  * sendAgreement **required** [X12OneWayAgreement](#x12onewayagreement)

### X12CharacterSet
* X12CharacterSet `string` (values: NotSpecified, Basic, Extended, UTF8)

### X12DateFormat
* X12DateFormat `string` (values: NotSpecified, CCYYMMDD, YYMMDD)

### X12DelimiterOverrides
* X12DelimiterOverrides `object`: The X12 delimiter override settings.
  * componentSeparator **required** `integer`: The component separator.
  * dataElementSeparator **required** `integer`: The data element separator.
  * messageId `string`: The message id.
  * protocolVersion `string`: The protocol version.
  * replaceCharacter **required** `integer`: The replacement character.
  * replaceSeparatorsInPayload **required** `boolean`: The value indicating whether to replace separators in payload.
  * segmentTerminator **required** `integer`: The segment terminator.
  * segmentTerminatorSuffix **required** [SegmentTerminatorSuffix](#segmentterminatorsuffix)
  * targetNamespace `string`: The target namespace on which this delimiter settings has to be applied.

### X12EnvelopeOverride
* X12EnvelopeOverride `object`: The X12 envelope override settings.
  * dateFormat **required** [X12DateFormat](#x12dateformat)
  * functionalIdentifierCode `string`: The functional identifier code.
  * headerVersion **required** `string`: The header version.
  * messageId **required** `string`: The message id on which this envelope settings has to be applied.
  * protocolVersion **required** `string`: The protocol version on which this envelope settings has to be applied.
  * receiverApplicationId **required** `string`: The receiver application id.
  * responsibleAgencyCode **required** `string`: The responsible agency code.
  * senderApplicationId **required** `string`: The sender application id.
  * targetNamespace **required** `string`: The target namespace on which this envelope settings has to be applied.
  * timeFormat **required** [X12TimeFormat](#x12timeformat)

### X12EnvelopeSettings
* X12EnvelopeSettings `object`: The X12 agreement envelope settings.
  * controlStandardsId **required** `integer`: The controls standards id.
  * controlVersionNumber **required** `string`: The control version number.
  * enableDefaultGroupHeaders **required** `boolean`: The value indicating whether to enable default group headers.
  * functionalGroupId `string`: The functional group id.
  * groupControlNumberLowerBound **required** `integer`: The group control number lower bound.
  * groupControlNumberUpperBound **required** `integer`: The group control number upper bound.
  * groupHeaderAgencyCode **required** `string`: The group header agency code.
  * groupHeaderDateFormat **required** [X12DateFormat](#x12dateformat)
  * groupHeaderTimeFormat **required** [X12TimeFormat](#x12timeformat)
  * groupHeaderVersion **required** `string`: The group header version.
  * interchangeControlNumberLowerBound **required** `integer`: The interchange  control number lower bound.
  * interchangeControlNumberUpperBound **required** `integer`: The interchange  control number upper bound.
  * overwriteExistingTransactionSetControlNumber **required** `boolean`: The value indicating whether to overwrite existing transaction set control number.
  * receiverApplicationId **required** `string`: The receiver application id.
  * rolloverGroupControlNumber **required** `boolean`: The value indicating whether to rollover group control number.
  * rolloverInterchangeControlNumber **required** `boolean`: The value indicating whether to rollover interchange control number.
  * rolloverTransactionSetControlNumber **required** `boolean`: The value indicating whether to rollover transaction set control number.
  * senderApplicationId **required** `string`: The sender application id.
  * transactionSetControlNumberLowerBound **required** `integer`: The transaction set control number lower bound.
  * transactionSetControlNumberPrefix `string`: The transaction set control number prefix.
  * transactionSetControlNumberSuffix `string`: The transaction set control number suffix.
  * transactionSetControlNumberUpperBound **required** `integer`: The transaction set control number upper bound.
  * usageIndicator **required** [UsageIndicator](#usageindicator)
  * useControlStandardsIdAsRepetitionCharacter **required** `boolean`: The value indicating whether to use control standards id as repetition character.

### X12FramingSettings
* X12FramingSettings `object`: The X12 agreement framing settings.
  * characterSet **required** [X12CharacterSet](#x12characterset)
  * componentSeparator **required** `integer`: The component separator.
  * dataElementSeparator **required** `integer`: The data element separator.
  * replaceCharacter **required** `integer`: The replacement character.
  * replaceSeparatorsInPayload **required** `boolean`: The value indicating whether to replace separators in payload.
  * segmentTerminator **required** `integer`: The segment terminator.
  * segmentTerminatorSuffix **required** [SegmentTerminatorSuffix](#segmentterminatorsuffix)

### X12MessageFilter
* X12MessageFilter `object`: The X12 message filter for odata query.
  * messageFilterType **required** [MessageFilterType](#messagefiltertype)

### X12MessageIdentifier
* X12MessageIdentifier `object`: The X12 message identifier.
  * messageId **required** `string`: The message id.

### X12OneWayAgreement
* X12OneWayAgreement `object`: The X12 oneway agreement.
  * protocolSettings **required** [X12ProtocolSettings](#x12protocolsettings)
  * receiverBusinessIdentity **required** [BusinessIdentity](#businessidentity)
  * senderBusinessIdentity **required** [BusinessIdentity](#businessidentity)

### X12ProcessingSettings
* X12ProcessingSettings `object`: The X12 processing settings.
  * convertImpliedDecimal **required** `boolean`: The value indicating whether to convert numerical type to implied decimal.
  * createEmptyXmlTagsForTrailingSeparators **required** `boolean`: The value indicating whether to create empty xml tags for trailing separators.
  * maskSecurityInfo **required** `boolean`: The value indicating whether to mask security information.
  * preserveInterchange **required** `boolean`: The value indicating whether to preserve interchange.
  * suspendInterchangeOnError **required** `boolean`: The value indicating whether to suspend interchange on error.
  * useDotAsDecimalSeparator **required** `boolean`: The value indicating whether to use dot as decimal separator.

### X12ProtocolSettings
* X12ProtocolSettings `object`: The X12 agreement protocol settings.
  * acknowledgementSettings **required** [X12AcknowledgementSettings](#x12acknowledgementsettings)
  * envelopeOverrides `array`: The X12 envelope override settings.
    * items [X12EnvelopeOverride](#x12envelopeoverride)
  * envelopeSettings **required** [X12EnvelopeSettings](#x12envelopesettings)
  * framingSettings **required** [X12FramingSettings](#x12framingsettings)
  * messageFilter **required** [X12MessageFilter](#x12messagefilter)
  * messageFilterList `array`: The X12 message filter list.
    * items [X12MessageIdentifier](#x12messageidentifier)
  * processingSettings **required** [X12ProcessingSettings](#x12processingsettings)
  * schemaReferences **required** `array`: The X12 schema references.
    * items [X12SchemaReference](#x12schemareference)
  * securitySettings **required** [X12SecuritySettings](#x12securitysettings)
  * validationOverrides `array`: The X12 validation override settings.
    * items [X12ValidationOverride](#x12validationoverride)
  * validationSettings **required** [X12ValidationSettings](#x12validationsettings)
  * x12DelimiterOverrides `array`: The X12 delimiter override settings.
    * items [X12DelimiterOverrides](#x12delimiteroverrides)

### X12SchemaReference
* X12SchemaReference `object`: The X12 schema reference.
  * messageId **required** `string`: The message id.
  * schemaName **required** `string`: The schema name.
  * schemaVersion **required** `string`: The schema version.
  * senderApplicationId `string`: The sender application id.

### X12SecuritySettings
* X12SecuritySettings `object`: The X12 agreement security settings.
  * authorizationQualifier **required** `string`: The authorization qualifier.
  * authorizationValue `string`: The authorization value.
  * passwordValue `string`: The password value.
  * securityQualifier **required** `string`: The security qualifier.

### X12TimeFormat
* X12TimeFormat `string` (values: NotSpecified, HHMM, HHMMSS, HHMMSSdd, HHMMSSd)

### X12ValidationOverride
* X12ValidationOverride `object`: The X12 validation override settings.
  * allowLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to allow leading and trailing spaces and zeroes.
  * messageId **required** `string`: The message id on which the validation settings has to be applied.
  * trailingSeparatorPolicy **required** [TrailingSeparatorPolicy](#trailingseparatorpolicy)
  * trimLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to trim leading and trailing spaces and zeroes.
  * validateCharacterSet **required** `boolean`: The value indicating whether to validate character Set.
  * validateEdiTypes **required** `boolean`: The value indicating whether to validate EDI types.
  * validateXsdTypes **required** `boolean`: The value indicating whether to validate XSD types.

### X12ValidationSettings
* X12ValidationSettings `object`: The X12 agreement validation settings.
  * allowLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to allow leading and trailing spaces and zeroes.
  * checkDuplicateGroupControlNumber **required** `boolean`: The value indicating whether to check for duplicate group control number.
  * checkDuplicateInterchangeControlNumber **required** `boolean`: The value indicating whether to check for duplicate interchange control number.
  * checkDuplicateTransactionSetControlNumber **required** `boolean`: The value indicating whether to check for duplicate transaction set control number.
  * interchangeControlNumberValidityDays **required** `integer`: The validity period of interchange control number.
  * trailingSeparatorPolicy **required** [TrailingSeparatorPolicy](#trailingseparatorpolicy)
  * trimLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to trim leading and trailing spaces and zeroes.
  * validateCharacterSet **required** `boolean`: The value indicating whether to validate character set in the message.
  * validateEdiTypes **required** `boolean`: The value indicating whether to Whether to validate EDI types.
  * validateXsdTypes **required** `boolean`: The value indicating whether to Whether to validate XSD types.


