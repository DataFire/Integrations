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

.then(data => {
  console.log(data);
});
```

## Description

REST API for Azure Logic Apps.

## Actions

### Operations_List
Lists all of the available Logic REST API operations.


```js
azure_logic.Operations_List({
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

### IntegrationServiceEnvironments_ListBySubscription
Gets a list of integration service environments by subscription.


```js
azure_logic.IntegrationServiceEnvironments_ListBySubscription({
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
* output [IntegrationServiceEnvironmentListResult](#integrationserviceenvironmentlistresult)

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
  * $filter `string`: The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.

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

### IntegrationAccountAgreements_List
Gets a list of integration account agreements.


```js
azure_logic.IntegrationAccountAgreements_List({
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
  * $filter `string`: The filter to apply on the operation. Options for filters include: AgreementType.

#### Output
* output [IntegrationAccountAgreementListResult](#integrationaccountagreementlistresult)

### IntegrationAccountAgreements_Delete
Deletes an integration account agreement.


```js
azure_logic.IntegrationAccountAgreements_Delete({
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

### IntegrationAccountAgreements_Get
Gets an integration account agreement.


```js
azure_logic.IntegrationAccountAgreements_Get({
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

### IntegrationAccountAgreements_CreateOrUpdate
Creates or updates an integration account agreement.


```js
azure_logic.IntegrationAccountAgreements_CreateOrUpdate({
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

### IntegrationAccountAgreements_ListContentCallbackUrl
Get the content callback url.


```js
azure_logic.IntegrationAccountAgreements_ListContentCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "agreementName": "",
  "api-version": "",
  "listContentCallbackUrl": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * agreementName **required** `string`: The integration account agreement name.
  * api-version **required** `string`: The API version.
  * listContentCallbackUrl **required** [GetCallbackUrlParameters](#getcallbackurlparameters)

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### IntegrationAccountAssemblies_List
List the assemblies for an integration account.


```js
azure_logic.IntegrationAccountAssemblies_List({
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
* output [AssemblyCollection](#assemblycollection)

### IntegrationAccountAssemblies_Delete
Delete an assembly for an integration account.


```js
azure_logic.IntegrationAccountAssemblies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "assemblyArtifactName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * assemblyArtifactName **required** `string`: The assembly artifact name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationAccountAssemblies_Get
Get an assembly for an integration account.


```js
azure_logic.IntegrationAccountAssemblies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "assemblyArtifactName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * assemblyArtifactName **required** `string`: The assembly artifact name.
  * api-version **required** `string`: The API version.

#### Output
* output [AssemblyDefinition](#assemblydefinition)

### IntegrationAccountAssemblies_CreateOrUpdate
Create or update an assembly for an integration account.


```js
azure_logic.IntegrationAccountAssemblies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "assemblyArtifactName": "",
  "assemblyArtifact": {
    "properties": {
      "assemblyName": ""
    }
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * assemblyArtifactName **required** `string`: The assembly artifact name.
  * assemblyArtifact **required** [AssemblyDefinition](#assemblydefinition)
  * api-version **required** `string`: The API version.

#### Output
* output [AssemblyDefinition](#assemblydefinition)

### IntegrationAccountAssemblies_ListContentCallbackUrl
Get the content callback url for an integration account assembly.


```js
azure_logic.IntegrationAccountAssemblies_ListContentCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "assemblyArtifactName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * assemblyArtifactName **required** `string`: The assembly artifact name.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### IntegrationAccountBatchConfigurations_List
List the batch configurations for an integration account.


```js
azure_logic.IntegrationAccountBatchConfigurations_List({
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
* output [BatchConfigurationCollection](#batchconfigurationcollection)

### IntegrationAccountBatchConfigurations_Delete
Delete a batch configuration for an integration account.


```js
azure_logic.IntegrationAccountBatchConfigurations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "batchConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * batchConfigurationName **required** `string`: The batch configuration name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationAccountBatchConfigurations_Get
Get a batch configuration for an integration account.


```js
azure_logic.IntegrationAccountBatchConfigurations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "batchConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * batchConfigurationName **required** `string`: The batch configuration name.
  * api-version **required** `string`: The API version.

#### Output
* output [BatchConfiguration](#batchconfiguration)

### IntegrationAccountBatchConfigurations_CreateOrUpdate
Create or update a batch configuration for an integration account.


```js
azure_logic.IntegrationAccountBatchConfigurations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "batchConfigurationName": "",
  "batchConfiguration": {
    "properties": {
      "batchGroupName": "",
      "releaseCriteria": {}
    }
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * batchConfigurationName **required** `string`: The batch configuration name.
  * batchConfiguration **required** [BatchConfiguration](#batchconfiguration)
  * api-version **required** `string`: The API version.

#### Output
* output [BatchConfiguration](#batchconfiguration)

### IntegrationAccountCertificates_List
Gets a list of integration account certificates.


```js
azure_logic.IntegrationAccountCertificates_List({
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

### IntegrationAccountCertificates_Delete
Deletes an integration account certificate.


```js
azure_logic.IntegrationAccountCertificates_Delete({
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

### IntegrationAccountCertificates_Get
Gets an integration account certificate.


```js
azure_logic.IntegrationAccountCertificates_Get({
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

### IntegrationAccountCertificates_CreateOrUpdate
Creates or updates an integration account certificate.


```js
azure_logic.IntegrationAccountCertificates_CreateOrUpdate({
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

### IntegrationAccounts_ListCallbackUrl
Gets the integration account callback URL.


```js
azure_logic.IntegrationAccounts_ListCallbackUrl({
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

### IntegrationAccounts_ListKeyVaultKeys
Gets the integration account's Key Vault keys.


```js
azure_logic.IntegrationAccounts_ListKeyVaultKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "listKeyVaultKeys": {
    "keyVault": {}
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * listKeyVaultKeys **required** [ListKeyVaultKeysDefinition](#listkeyvaultkeysdefinition)

#### Output
* output [KeyVaultKeyCollection](#keyvaultkeycollection)

### IntegrationAccounts_LogTrackingEvents
Logs the integration account's tracking events.


```js
azure_logic.IntegrationAccounts_LogTrackingEvents({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "logTrackingEvents": {
    "sourceType": "",
    "events": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * logTrackingEvents **required** [TrackingEventsDefinition](#trackingeventsdefinition)

#### Output
*Output schema unknown*

### IntegrationAccountMaps_List
Gets a list of integration account maps.


```js
azure_logic.IntegrationAccountMaps_List({
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
  * $filter `string`: The filter to apply on the operation. Options for filters include: MapType.

#### Output
* output [IntegrationAccountMapListResult](#integrationaccountmaplistresult)

### IntegrationAccountMaps_Delete
Deletes an integration account map.


```js
azure_logic.IntegrationAccountMaps_Delete({
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

### IntegrationAccountMaps_Get
Gets an integration account map.


```js
azure_logic.IntegrationAccountMaps_Get({
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

### IntegrationAccountMaps_CreateOrUpdate
Creates or updates an integration account map.


```js
azure_logic.IntegrationAccountMaps_CreateOrUpdate({
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

### IntegrationAccountMaps_ListContentCallbackUrl
Get the content callback url.


```js
azure_logic.IntegrationAccountMaps_ListContentCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "mapName": "",
  "api-version": "",
  "listContentCallbackUrl": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * mapName **required** `string`: The integration account map name.
  * api-version **required** `string`: The API version.
  * listContentCallbackUrl **required** [GetCallbackUrlParameters](#getcallbackurlparameters)

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### IntegrationAccountPartners_List
Gets a list of integration account partners.


```js
azure_logic.IntegrationAccountPartners_List({
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
  * $filter `string`: The filter to apply on the operation. Options for filters include: PartnerType.

#### Output
* output [IntegrationAccountPartnerListResult](#integrationaccountpartnerlistresult)

### IntegrationAccountPartners_Delete
Deletes an integration account partner.


```js
azure_logic.IntegrationAccountPartners_Delete({
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

### IntegrationAccountPartners_Get
Gets an integration account partner.


```js
azure_logic.IntegrationAccountPartners_Get({
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

### IntegrationAccountPartners_CreateOrUpdate
Creates or updates an integration account partner.


```js
azure_logic.IntegrationAccountPartners_CreateOrUpdate({
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

### IntegrationAccountPartners_ListContentCallbackUrl
Get the content callback url.


```js
azure_logic.IntegrationAccountPartners_ListContentCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "partnerName": "",
  "api-version": "",
  "listContentCallbackUrl": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * partnerName **required** `string`: The integration account partner name.
  * api-version **required** `string`: The API version.
  * listContentCallbackUrl **required** [GetCallbackUrlParameters](#getcallbackurlparameters)

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### IntegrationAccounts_RegenerateAccessKey
Regenerates the integration account access key.


```js
azure_logic.IntegrationAccounts_RegenerateAccessKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "api-version": "",
  "regenerateAccessKey": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * api-version **required** `string`: The API version.
  * regenerateAccessKey **required** [RegenerateActionParameter](#regenerateactionparameter)

#### Output
* output [IntegrationAccount](#integrationaccount)

### IntegrationAccountSchemas_List
Gets a list of integration account schemas.


```js
azure_logic.IntegrationAccountSchemas_List({
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
  * $filter `string`: The filter to apply on the operation. Options for filters include: SchemaType.

#### Output
* output [IntegrationAccountSchemaListResult](#integrationaccountschemalistresult)

### IntegrationAccountSchemas_Delete
Deletes an integration account schema.


```js
azure_logic.IntegrationAccountSchemas_Delete({
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

### IntegrationAccountSchemas_Get
Gets an integration account schema.


```js
azure_logic.IntegrationAccountSchemas_Get({
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

### IntegrationAccountSchemas_CreateOrUpdate
Creates or updates an integration account schema.


```js
azure_logic.IntegrationAccountSchemas_CreateOrUpdate({
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

### IntegrationAccountSchemas_ListContentCallbackUrl
Get the content callback url.


```js
azure_logic.IntegrationAccountSchemas_ListContentCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "integrationAccountName": "",
  "schemaName": "",
  "api-version": "",
  "listContentCallbackUrl": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * integrationAccountName **required** `string`: The integration account name.
  * schemaName **required** `string`: The integration account schema name.
  * api-version **required** `string`: The API version.
  * listContentCallbackUrl **required** [GetCallbackUrlParameters](#getcallbackurlparameters)

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

### IntegrationAccountSessions_List
Gets a list of integration account sessions.


```js
azure_logic.IntegrationAccountSessions_List({
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
  * $filter `string`: The filter to apply on the operation. Options for filters include: ChangedTime.

#### Output
* output [IntegrationAccountSessionListResult](#integrationaccountsessionlistresult)

### IntegrationAccountSessions_Delete
Deletes an integration account session.


```js
azure_logic.IntegrationAccountSessions_Delete({
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

### IntegrationAccountSessions_Get
Gets an integration account session.


```js
azure_logic.IntegrationAccountSessions_Get({
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

### IntegrationAccountSessions_CreateOrUpdate
Creates or updates an integration account session.


```js
azure_logic.IntegrationAccountSessions_CreateOrUpdate({
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

### Workflows_ValidateByLocation
Validates the workflow definition.


```js
azure_logic.Workflows_ValidateByLocation({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "workflowName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * location **required** `string`: The workflow location.
  * workflowName **required** `string`: The workflow name.
  * api-version **required** `string`: The API version.

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
  * $filter `string`: The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.

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

### Workflows_ListCallbackUrl
Get the workflow callback Url.


```js
azure_logic.Workflows_ListCallbackUrl({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "listCallbackUrl": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * listCallbackUrl **required** [GetCallbackUrlParameters](#getcallbackurlparameters)
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

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

### Workflows_Move
Moves an existing workflow.


```js
azure_logic.Workflows_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "move": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * move **required** [Workflow](#workflow)
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

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
  * $filter `string`: The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.

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
  * $filter `string`: The filter to apply on the operation. Options for filters include: Status.

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

### WorkflowRunActions_ListExpressionTraces
Lists a workflow run expression trace.


```js
azure_logic.WorkflowRunActions_ListExpressionTraces({
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
* output [ExpressionTraces](#expressiontraces)

### WorkflowRunActionRepetitions_List
Get all of a workflow run action repetitions.


```js
azure_logic.WorkflowRunActionRepetitions_List({
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
* output [WorkflowRunActionRepetitionDefinitionCollection](#workflowrunactionrepetitiondefinitioncollection)

### WorkflowRunActionRepetitions_Get
Get a workflow run action repetition.


```js
azure_logic.WorkflowRunActionRepetitions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "repetitionName": "",
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
  * repetitionName **required** `string`: The workflow repetition.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowRunActionRepetitionDefinition](#workflowrunactionrepetitiondefinition)

### WorkflowRunActionRepetitions_ListExpressionTraces
Lists a workflow run expression trace.


```js
azure_logic.WorkflowRunActionRepetitions_ListExpressionTraces({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "repetitionName": "",
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
  * repetitionName **required** `string`: The workflow repetition.
  * api-version **required** `string`: The API version.

#### Output
* output [ExpressionTraces](#expressiontraces)

### WorkflowRunActionRepetitionsRequestHistories_List
List a workflow run repetition request history.


```js
azure_logic.WorkflowRunActionRepetitionsRequestHistories_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "repetitionName": "",
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
  * repetitionName **required** `string`: The workflow repetition.
  * api-version **required** `string`: The API version.

#### Output
* output [RequestHistoryListResult](#requesthistorylistresult)

### WorkflowRunActionRepetitionsRequestHistories_Get
Gets a workflow run repetition request history.


```js
azure_logic.WorkflowRunActionRepetitionsRequestHistories_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "repetitionName": "",
  "requestHistoryName": "",
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
  * repetitionName **required** `string`: The workflow repetition.
  * requestHistoryName **required** `string`: The request history name.
  * api-version **required** `string`: The API version.

#### Output
* output [RequestHistory](#requesthistory)

### WorkflowRunActionRequestHistories_List
List a workflow run request history.


```js
azure_logic.WorkflowRunActionRequestHistories_List({
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
* output [RequestHistoryListResult](#requesthistorylistresult)

### WorkflowRunActionRequestHistories_Get
Gets a workflow run request history.


```js
azure_logic.WorkflowRunActionRequestHistories_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "requestHistoryName": "",
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
  * requestHistoryName **required** `string`: The request history name.
  * api-version **required** `string`: The API version.

#### Output
* output [RequestHistory](#requesthistory)

### WorkflowRunActionScopeRepetitions_List
List the workflow run action scoped repetitions.


```js
azure_logic.WorkflowRunActionScopeRepetitions_List({
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
* output [WorkflowRunActionRepetitionDefinitionCollection](#workflowrunactionrepetitiondefinitioncollection)

### WorkflowRunActionScopeRepetitions_Get
Get a workflow run action scoped repetition.


```js
azure_logic.WorkflowRunActionScopeRepetitions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "actionName": "",
  "repetitionName": "",
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
  * repetitionName **required** `string`: The workflow repetition.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowRunActionRepetitionDefinition](#workflowrunactionrepetitiondefinition)

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

### WorkflowRunOperations_Get
Gets an operation for a run.


```js
azure_logic.WorkflowRunOperations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "runName": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * runName **required** `string`: The workflow run name.
  * operationId **required** `string`: The workflow operation id.
  * api-version **required** `string`: The API version.

#### Output
* output [WorkflowRun](#workflowrun)

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
  * $filter `string`: The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.

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
Get the callback URL for a workflow trigger.


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

### WorkflowTriggers_Reset
Resets a workflow trigger.


```js
azure_logic.WorkflowTriggers_Reset({
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
*Output schema unknown*

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

### WorkflowTriggers_GetSchemaJson
Get the trigger schema as JSON.


```js
azure_logic.WorkflowTriggers_GetSchemaJson({
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
* output [JsonSchema](#jsonschema)

### WorkflowTriggers_SetState
Sets the state of a workflow trigger.


```js
azure_logic.WorkflowTriggers_SetState({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "triggerName": "",
  "setState": {
    "source": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * triggerName **required** `string`: The workflow trigger name.
  * setState **required** [SetTriggerStateActionDefinition](#settriggerstateactiondefinition)
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Workflows_ValidateByResourceGroup
Validates the workflow.


```js
azure_logic.Workflows_ValidateByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workflowName": "",
  "validate": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * workflowName **required** `string`: The workflow name.
  * validate **required** [Workflow](#workflow)
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

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

### WorkflowVersionTriggers_ListCallbackUrl
Get the callback url for a trigger of a workflow version.


```js
azure_logic.WorkflowVersionTriggers_ListCallbackUrl({
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

### IntegrationServiceEnvironments_ListByResourceGroup
Gets a list of integration service environments by resource group.


```js
azure_logic.IntegrationServiceEnvironments_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroup": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of items to be included in the result.

#### Output
* output [IntegrationServiceEnvironmentListResult](#integrationserviceenvironmentlistresult)

### IntegrationServiceEnvironments_Delete
Deletes an integration service environment.


```js
azure_logic.IntegrationServiceEnvironments_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationServiceEnvironments_Get
Gets an integration service environment.


```js
azure_logic.IntegrationServiceEnvironments_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationServiceEnvironment](#integrationserviceenvironment)

### IntegrationServiceEnvironments_Update
Updates an integration service environment.


```js
azure_logic.IntegrationServiceEnvironments_Update({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": "",
  "integrationServiceEnvironment": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.
  * integrationServiceEnvironment **required** [IntegrationServiceEnvironment](#integrationserviceenvironment)

#### Output
* output [IntegrationServiceEnvironment](#integrationserviceenvironment)

### IntegrationServiceEnvironments_CreateOrUpdate
Creates or updates an integration service environment.


```js
azure_logic.IntegrationServiceEnvironments_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": "",
  "integrationServiceEnvironment": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.
  * integrationServiceEnvironment **required** [IntegrationServiceEnvironment](#integrationserviceenvironment)

#### Output
* output [IntegrationServiceEnvironment](#integrationserviceenvironment)

### IntegrationServiceEnvironmentNetworkHealth_Get
Gets the integration service environment network health.


```js
azure_logic.IntegrationServiceEnvironmentNetworkHealth_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationServiceEnvironmentNetworkHealth](#integrationserviceenvironmentnetworkhealth)

### IntegrationServiceEnvironmentManagedApis_List
Gets the integration service environment managed Apis.


```js
azure_logic.IntegrationServiceEnvironmentManagedApis_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
* output [ManagedApiListResult](#managedapilistresult)

### IntegrationServiceEnvironmentManagedApis_Delete
Deletes the integration service environment managed Api.


```js
azure_logic.IntegrationServiceEnvironmentManagedApis_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * apiName **required** `string`: The api name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationServiceEnvironmentManagedApis_Get
Gets the integration service environment managed Api.


```js
azure_logic.IntegrationServiceEnvironmentManagedApis_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group name.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * apiName **required** `string`: The api name.
  * api-version **required** `string`: The API version.

#### Output
* output [ManagedApi](#managedapi)

### IntegrationServiceEnvironmentManagedApis_Put
Puts the integration service environment managed Api.


```js
azure_logic.IntegrationServiceEnvironmentManagedApis_Put({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group name.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * apiName **required** `string`: The api name.
  * api-version **required** `string`: The API version.

#### Output
* output [ManagedApi](#managedapi)

### IntegrationServiceEnvironmentManagedApiOperations_List
Gets the managed Api operations.


```js
azure_logic.IntegrationServiceEnvironmentManagedApiOperations_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "apiName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * apiName **required** `string`: The api name.
  * api-version **required** `string`: The API version.

#### Output
* output [ApiOperationListResult](#apioperationlistresult)

### IntegrationServiceEnvironments_Restart
Restarts an integration service environment.


```js
azure_logic.IntegrationServiceEnvironments_Restart({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### IntegrationServiceEnvironmentSkus_List
Gets a list of integration service environment Skus.


```js
azure_logic.IntegrationServiceEnvironmentSkus_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "integrationServiceEnvironmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroup **required** `string`: The resource group.
  * integrationServiceEnvironmentName **required** `string`: The integration service environment name.
  * api-version **required** `string`: The API version.

#### Output
* output [IntegrationServiceEnvironmentSkuList](#integrationserviceenvironmentskulist)



## Definitions

### AS2AcknowledgementConnectionSettings
* AS2AcknowledgementConnectionSettings `object`: The AS2 agreement acknowledgement connection settings.
  * ignoreCertificateNameMismatch **required** `boolean`: Indicates whether to ignore mismatch in certificate name.
  * keepHttpConnectionAlive **required** `boolean`: Indicates whether to keep the connection alive.
  * supportHttpStatusCodeContinue **required** `boolean`: Indicates whether to support HTTP status code 'CONTINUE'.
  * unfoldHttpHeaders **required** `boolean`: Indicates whether to unfold the HTTP headers.

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
  * resendIfMDNNotReceived **required** `boolean`: The value indicating whether to resend message If MDN is not received.
  * suspendDuplicateMessage **required** `boolean`: The value indicating whether to suspend duplicate message.

### AS2MdnSettings
* AS2MdnSettings `object`: The AS2 agreement mdn settings.
  * dispositionNotificationTo `string`: The disposition notification to header value.
  * mdnText `string`: The MDN text.
  * micHashingAlgorithm **required** [HashingAlgorithm](#hashingalgorithm)
  * needMDN **required** `boolean`: The value indicating whether to send or request a MDN.
  * receiptDeliveryUrl `string`: The receipt delivery URL.
  * sendInboundMDNToMessageBox **required** `boolean`: The value indicating whether to send inbound MDN to message box.
  * sendMDNAsynchronously **required** `boolean`: The value indicating whether to send the asynchronous MDN.
  * signMDN **required** `boolean`: The value indicating whether the MDN needs to be signed or not.
  * signOutboundMDNIfOptional **required** `boolean`: The value indicating whether to sign the outbound MDN if optional.

### AS2MessageConnectionSettings
* AS2MessageConnectionSettings `object`: The AS2 agreement message connection settings.
  * ignoreCertificateNameMismatch **required** `boolean`: The value indicating whether to ignore mismatch in certificate name.
  * keepHttpConnectionAlive **required** `boolean`: The value indicating whether to keep the connection alive.
  * supportHttpStatusCodeContinue **required** `boolean`: The value indicating whether to support HTTP status code 'CONTINUE'.
  * unfoldHttpHeaders **required** `boolean`: The value indicating whether to unfold the HTTP headers.

### AS2OneWayAgreement
* AS2OneWayAgreement `object`: The integration account AS2 one-way agreement.
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
  * enableNRRForInboundDecodedMessages **required** `boolean`: The value indicating whether to enable NRR for inbound decoded messages.
  * enableNRRForInboundEncodedMessages **required** `boolean`: The value indicating whether to enable NRR for inbound encoded messages.
  * enableNRRForInboundMDN **required** `boolean`: The value indicating whether to enable NRR for inbound MDN.
  * enableNRRForOutboundDecodedMessages **required** `boolean`: The value indicating whether to enable NRR for outbound decoded messages.
  * enableNRRForOutboundEncodedMessages **required** `boolean`: The value indicating whether to enable NRR for outbound encoded messages.
  * enableNRRForOutboundMDN **required** `boolean`: The value indicating whether to enable NRR for outbound MDN.
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
* AgreementType `string` (values: NotSpecified, AS2, X12, Edifact): The agreement type.

### ApiDeploymentParameterMetadata
* ApiDeploymentParameterMetadata `object`: The API deployment parameter metadata.
  * description `string`: The description.
  * displayName `string`: The display name.
  * isRequired `boolean`: Indicates whether its required.
  * type `string`: The type.
  * visibility [ApiDeploymentParameterVisibility](#apideploymentparametervisibility)

### ApiDeploymentParameterMetadataSet
* ApiDeploymentParameterMetadataSet `object`: The API deployment parameters metadata.
  * packageContentLink [ApiDeploymentParameterMetadata](#apideploymentparametermetadata)
  * redisCacheConnectionString [ApiDeploymentParameterMetadata](#apideploymentparametermetadata)

### ApiDeploymentParameterVisibility
* ApiDeploymentParameterVisibility `string` (values: NotSpecified, Default, Internal): The Api deployment parameter visibility.

### ApiOperation
* ApiOperation `object`: The api operation.
  * properties [ApiOperationPropertiesDefinition](#apioperationpropertiesdefinition)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### ApiOperationAnnotation
* ApiOperationAnnotation `object`: The Api Operation Annotation.
  * family `string`: The family.
  * revision `integer`: The revision.
  * status [StatusAnnotation](#statusannotation)

### ApiOperationListResult
* ApiOperationListResult `object`: The list of managed API operations.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The api operation definitions for an API.
    * items [ApiOperation](#apioperation)

### ApiOperationPropertiesDefinition
* ApiOperationPropertiesDefinition `object`: The api operations properties
  * annotation [ApiOperationAnnotation](#apioperationannotation)
  * api [ApiReference](#apireference)
  * description `string`: The description of the api operation.
  * inputsDefinition [SwaggerSchema](#swaggerschema)
  * isNotification `boolean`: Indicates whether the API operation is notification or not.
  * isWebhook `boolean`: Indicates whether the API operation is webhook or not.
  * pageable `boolean`: Indicates whether the api operation is pageable.
  * responsesDefinition `object`: The operation responses definition schemas.
  * summary `string`: The summary of the api operation.
  * trigger `string`: The trigger type of api operation.
  * triggerHint `string`: The trigger hint for the api operation.
  * visibility `string`: The visibility of the api operation.

### ApiReference
* ApiReference `object`: The Api reference.
  * brandColor `string`: The brand color of the api.
  * category [ApiTier](#apitier)
  * description `string`: The description of the api.
  * displayName `string`: The display name of the api.
  * iconUri `string`: The icon uri of the api.
  * integrationServiceEnvironment [ResourceReference](#resourcereference)
  * swagger [Object](#object)
  * id `string`: The resource id.
  * name `string`: Gets the resource name.
  * type `string`: Gets the resource type.

### ApiResourceBackendService
* ApiResourceBackendService `object`: The API backend service.
  * serviceUrl `string`: The service URL.

### ApiResourceDefinitions
* ApiResourceDefinitions `object`: The Api resource definition.
  * modifiedSwaggerUrl `string`: The modified swagger url.
  * originalSwaggerUrl `string`: The original swagger url.

### ApiResourceGeneralInformation
* ApiResourceGeneralInformation `object`: The API general information.
  * description `string`: The description.
  * displayName `string`: The display name.
  * iconUrl `string`: The icon url.
  * releaseTag `string`: The release tag.
  * termsOfUseUrl `string`: The terms of use url.
  * tier [ApiTier](#apitier)

### ApiResourceMetadata
* ApiResourceMetadata `object`: The api resource metadata.
  * ApiType [ApiType](#apitype)
  * brandColor `string`: The brand color.
  * connectionType `string`: The connection type.
  * deploymentParameters [ApiDeploymentParameterMetadataSet](#apideploymentparametermetadataset)
  * hideKey `string`: The hide key.
  * provisioningState [WorkflowProvisioningState](#workflowprovisioningstate)
  * source `string`: The source.
  * tags `object`: The tags.
  * wsdlImportMethod [WsdlImportMethod](#wsdlimportmethod)
  * wsdlService [WsdlService](#wsdlservice)

### ApiResourcePolicies
* ApiResourcePolicies `object`: The API resource policies.
  * content `string`: The API level only policies XML as embedded content.
  * contentLink `string`: The content link to the policies.

### ApiResourceProperties
* ApiResourceProperties `object`: The API resource properties.
  * apiDefinitionUrl `string`: The API definition.
  * apiDefinitions [ApiResourceDefinitions](#apiresourcedefinitions)
  * backendService [ApiResourceBackendService](#apiresourcebackendservice)
  * capabilities `array`: The capabilities.
    * items `string`
  * category [ApiTier](#apitier)
  * connectionParameters `object`: The connection parameters.
  * generalInformation [ApiResourceGeneralInformation](#apiresourcegeneralinformation)
  * integrationServiceEnvironment [ResourceReference](#resourcereference)
  * metadata [ApiResourceMetadata](#apiresourcemetadata)
  * name `string`: The name
  * policies [ApiResourcePolicies](#apiresourcepolicies)
  * provisioningState [WorkflowProvisioningState](#workflowprovisioningstate)
  * runtimeUrls `array`: The runtime urls.
    * items `string`

### ApiTier
* ApiTier `string` (values: NotSpecified, Enterprise, Standard, Premium): The Api tier.

### ApiType
* ApiType `string` (values: NotSpecified, Rest, Soap)

### ArtifactContentPropertiesDefinition
* ArtifactContentPropertiesDefinition `object`: The artifact content properties definition.
  * contentLink [ContentLink](#contentlink)
  * contentType `string`: The content type.
  * changedTime `string`: The artifact changed time.
  * createdTime `string`: The artifact creation time.

### ArtifactProperties
* ArtifactProperties `object`: The artifact properties definition.
  * changedTime `string`: The artifact changed time.
  * createdTime `string`: The artifact creation time.

### AssemblyCollection
* AssemblyCollection `object`: A collection of assembly definitions.
  * value `array`
    * items [AssemblyDefinition](#assemblydefinition)

### AssemblyDefinition
* AssemblyDefinition `object`: The assembly definition.
  * properties **required** [AssemblyProperties](#assemblyproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### AssemblyProperties
* AssemblyProperties `object`: The assembly properties definition.
  * assemblyCulture `string`: The assembly culture.
  * assemblyName **required** `string`: The assembly name.
  * assemblyPublicKeyToken `string`: The assembly public key token.
  * assemblyVersion `string`: The assembly version.
  * contentLink [ContentLink](#contentlink)
  * contentType `string`: The content type.
  * changedTime `string`: The artifact changed time.
  * createdTime `string`: The artifact creation time.

### AzureAsyncOperationState
* AzureAsyncOperationState `string` (values: Failed, Succeeded, Pending, Canceled): The Azure async operation state.

### AzureResourceErrorInfo
* AzureResourceErrorInfo `object`: The azure resource error info.
  * details `array`: The error details.
    * items [AzureResourceErrorInfo](#azureresourceerrorinfo)
  * message **required** `string`: The error message.
  * code **required** `string`: The error code.

### B2BPartnerContent
* B2BPartnerContent `object`: The B2B partner content.
  * businessIdentities `array`: The list of partner business identities.
    * items [BusinessIdentity](#businessidentity)

### BatchConfiguration
* BatchConfiguration `object`: The batch configuration resource definition.
  * properties **required** [BatchConfigurationProperties](#batchconfigurationproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### BatchConfigurationCollection
* BatchConfigurationCollection `object`: A collection of batch configurations.
  * value `array`
    * items [BatchConfiguration](#batchconfiguration)

### BatchConfigurationProperties
* BatchConfigurationProperties `object`: The batch configuration properties definition.
  * batchGroupName **required** `string`: The name of the batch group.
  * changedTime `string`: The changed time.
  * createdTime `string`: The created time.
  * releaseCriteria **required** [BatchReleaseCriteria](#batchreleasecriteria)
  * changedTime `string`: The artifact changed time.
  * createdTime `string`: The artifact creation time.

### BatchReleaseCriteria
* BatchReleaseCriteria `object`: The batch release criteria.
  * batchSize `integer`: The batch size in bytes.
  * messageCount `integer`: The message count.
  * recurrence [WorkflowTriggerRecurrence](#workflowtriggerrecurrence)

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
* DayOfWeek `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday): The day of the week.

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
* EdifactCharacterSet `string` (values: NotSpecified, UNOB, UNOA, UNOC, UNOD, UNOE, UNOF, UNOG, UNOH, UNOI, UNOJ, UNOK, UNOX, UNOY, KECA): The edifact character set.

### EdifactDecimalIndicator
* EdifactDecimalIndicator `string` (values: NotSpecified, Comma, Decimal): The edifact decimal indicator.

### EdifactDelimiterOverride
* EdifactDelimiterOverride `object`: The Edifact delimiter override settings.
  * componentSeparator **required** `integer`: The component separator.
  * dataElementSeparator **required** `integer`: The data element separator.
  * decimalPointIndicator **required** [EdifactDecimalIndicator](#edifactdecimalindicator)
  * messageAssociationAssignedCode `string`: The message association assigned code.
  * messageId `string`: The message id.
  * messageRelease `string`: The message release.
  * messageVersion `string`: The message version.
  * releaseIndicator **required** `integer`: The release indicator.
  * repetitionSeparator **required** `integer`: The repetition separator.
  * segmentTerminator **required** `integer`: The segment terminator.
  * segmentTerminatorSuffix **required** [SegmentTerminatorSuffix](#segmentterminatorsuffix)
  * targetNamespace `string`: The target namespace on which this delimiter settings has to be applied.

### EdifactEnvelopeOverride
* EdifactEnvelopeOverride `object`: The Edifact envelope override settings.
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
  * validateEDITypes **required** `boolean`: The value indicating whether to validate EDI types.
  * validateXSDTypes **required** `boolean`: The value indicating whether to validate XSD types.

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
  * validateEDITypes **required** `boolean`: The value indicating whether to Whether to validate EDI types.
  * validateXSDTypes **required** `boolean`: The value indicating whether to Whether to validate XSD types.

### EncryptionAlgorithm
* EncryptionAlgorithm `string` (values: NotSpecified, None, DES3, RC2, AES128, AES192, AES256): The encryption algorithm.

### ErrorInfo
* ErrorInfo `object`: The error info.
  * code **required** `string`: The error code.

### ErrorProperties
* ErrorProperties `object`: Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### ErrorResponse
* ErrorResponse `object`: Error response indicates Logic service is not able to process the incoming request. The error property contains the error details.
  * error [ErrorProperties](#errorproperties)

### ErrorResponseCode
* ErrorResponseCode `string` (values: NotSpecified, IntegrationServiceEnvironmentNotFound, InternalServerError, InvalidOperationId): The error response code.

### EventLevel
* EventLevel `string` (values: LogAlways, Critical, Error, Warning, Informational, Verbose): The event level.

### Expression
* Expression `object`: The expression.
  * error [AzureResourceErrorInfo](#azureresourceerrorinfo)
  * subexpressions `array`: The sub expressions.
    * items [Expression](#expression)
  * text `string`: The text.

### ExpressionRoot
* ExpressionRoot `object`: The expression root.
  * path `string`: The path.
  * error [AzureResourceErrorInfo](#azureresourceerrorinfo)
  * subexpressions `array`: The sub expressions.
    * items [Expression](#expression)
  * text `string`: The text.

### ExpressionTraces
* ExpressionTraces `object`: The expression traces.
  * inputs `array`
    * items [ExpressionRoot](#expressionroot)

### ExtendedErrorInfo
* ExtendedErrorInfo `object`: The extended error info.
  * code **required** [ErrorResponseCode](#errorresponsecode)
  * details `array`: The error message details.
    * items [ExtendedErrorInfo](#extendederrorinfo)
  * innerError [Object](#object)
  * message **required** `string`: The error message.

### FlowEndpoints
* FlowEndpoints `object`: The flow endpoints configuration.
  * accessEndpointIpAddresses `array`: The access endpoint ip address.
    * items [IpAddress](#ipaddress)
  * outgoingIpAddresses `array`: The outgoing ip address.
    * items [IpAddress](#ipaddress)

### FlowEndpointsConfiguration
* FlowEndpointsConfiguration `object`: The endpoints configuration.
  * connector [FlowEndpoints](#flowendpoints)
  * workflow [FlowEndpoints](#flowendpoints)

### GenerateUpgradedDefinitionParameters
* GenerateUpgradedDefinitionParameters `object`: The parameters to generate upgraded definition.
  * targetSchemaVersion `string`: The target schema version.

### GetCallbackUrlParameters
* GetCallbackUrlParameters `object`: The callback url parameters.
  * keyType [KeyType](#keytype)
  * notAfter `string`: The expiry time.

### HashingAlgorithm
* HashingAlgorithm `string` (values: NotSpecified, None, MD5, SHA1, SHA2256, SHA2384, SHA2512): The signing or hashing algorithm.

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
* IntegrationAccountProperties `object`: The integration account properties.
  * integrationServiceEnvironment [IntegrationServiceEnvironment](#integrationserviceenvironment)
  * state [WorkflowState](#workflowstate)

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
* IntegrationAccountSkuName `string` (values: NotSpecified, Free, Basic, Standard): The integration account sku name.

### IntegrationServiceEnvironment
* IntegrationServiceEnvironment `object`: The integration service environment.
  * properties [IntegrationServiceEnvironmentProperties](#integrationserviceenvironmentproperties)
  * sku [IntegrationServiceEnvironmentSku](#integrationserviceenvironmentsku)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### IntegrationServiceEnvironmentAccessEndpoint
* IntegrationServiceEnvironmentAccessEndpoint `object`: The integration service environment access endpoint.
  * type [IntegrationServiceEnvironmentAccessEndpointType](#integrationserviceenvironmentaccessendpointtype)

### IntegrationServiceEnvironmentAccessEndpointType
* IntegrationServiceEnvironmentAccessEndpointType `string` (values: NotSpecified, External, Internal): The integration service environment access endpoint type.

### IntegrationServiceEnvironmentListResult
* IntegrationServiceEnvironmentListResult `object`: The list of integration service environments.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`
    * items [IntegrationServiceEnvironment](#integrationserviceenvironment)

### IntegrationServiceEnvironmentNetworkDependency
* IntegrationServiceEnvironmentNetworkDependency `object`: The azure async operation resource.
  * category [IntegrationServiceEnvironmentNetworkDependencyCategoryType](#integrationserviceenvironmentnetworkdependencycategorytype)
  * displayName `string`: The display name.
  * endpoints `array`: The endpoints.
    * items [IntegrationServiceEnvironmentNetworkEndpoint](#integrationserviceenvironmentnetworkendpoint)

### IntegrationServiceEnvironmentNetworkDependencyCategoryType
* IntegrationServiceEnvironmentNetworkDependencyCategoryType `string` (values: NotSpecified, AzureStorage, AzureManagement, AzureActiveDirectory, SSLCertificateVerification, DiagnosticLogsAndMetrics, IntegrationServiceEnvironmentConnectors, RedisCache, AccessEndpoints, RecoveryService, SQL, RegionalService): The integration service environment network dependency category type.

### IntegrationServiceEnvironmentNetworkDependencyHealth
* IntegrationServiceEnvironmentNetworkDependencyHealth `object`: The integration service environment subnet network health.
  * error [ExtendedErrorInfo](#extendederrorinfo)
  * state [IntegrationServiceEnvironmentNetworkDependencyHealthState](#integrationserviceenvironmentnetworkdependencyhealthstate)

### IntegrationServiceEnvironmentNetworkDependencyHealthState
* IntegrationServiceEnvironmentNetworkDependencyHealthState `string` (values: NotSpecified, Healthy, Unhealthy, Unknown): The integration service environment network dependency health state.

### IntegrationServiceEnvironmentNetworkEndPointAccessibilityState
* IntegrationServiceEnvironmentNetworkEndPointAccessibilityState `string` (values: NotSpecified, Unknown, Available, NotAvailable): The integration service environment network endpoint accessibility state.

### IntegrationServiceEnvironmentNetworkEndpoint
* IntegrationServiceEnvironmentNetworkEndpoint `object`: The network endpoint.
  * accessibility [IntegrationServiceEnvironmentNetworkEndPointAccessibilityState](#integrationserviceenvironmentnetworkendpointaccessibilitystate)
  * domainName `string`: The domain name.
  * ports `array`: The ports.
    * items `string`

### IntegrationServiceEnvironmentNetworkHealth
* IntegrationServiceEnvironmentNetworkHealth `object`: The integration service environment network health of all the subnets.

### IntegrationServiceEnvironmentProperties
* IntegrationServiceEnvironmentProperties `object`: The integration service environment properties.
  * endpointsConfiguration [FlowEndpointsConfiguration](#flowendpointsconfiguration)
  * integrationServiceEnvironmentId `string`: Gets the tracking id.
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * provisioningState [WorkflowProvisioningState](#workflowprovisioningstate)
  * state [WorkflowState](#workflowstate)

### IntegrationServiceEnvironmentSku
* IntegrationServiceEnvironmentSku `object`: The integration service environment sku.
  * capacity `integer`: The sku capacity.
  * name [IntegrationServiceEnvironmentSkuName](#integrationserviceenvironmentskuname)

### IntegrationServiceEnvironmentSkuCapacity
* IntegrationServiceEnvironmentSkuCapacity `object`: The integration service environment sku capacity.
  * default `integer`: The default capacity.
  * maximum `integer`: The maximum capacity.
  * minimum `integer`: The minimum capacity.
  * scaleType [IntegrationServiceEnvironmentSkuScaleType](#integrationserviceenvironmentskuscaletype)

### IntegrationServiceEnvironmentSkuDefinition
* IntegrationServiceEnvironmentSkuDefinition `object`: The integration service environment sku definition.
  * capacity [IntegrationServiceEnvironmentSkuCapacity](#integrationserviceenvironmentskucapacity)
  * resourceType `string`: The resource type.
  * sku `object`: The sku.
    * name [IntegrationServiceEnvironmentSkuName](#integrationserviceenvironmentskuname)
    * tier `string`: The sku tier.

### IntegrationServiceEnvironmentSkuList
* IntegrationServiceEnvironmentSkuList `object`: The list of integration service environment skus.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The list of integration service environment skus.
    * items [IntegrationServiceEnvironmentSkuDefinition](#integrationserviceenvironmentskudefinition)

### IntegrationServiceEnvironmentSkuName
* IntegrationServiceEnvironmentSkuName `string` (values: NotSpecified, Premium, Developer): The integration service environment sku name.

### IntegrationServiceEnvironmentSkuScaleType
* IntegrationServiceEnvironmentSkuScaleType `string` (values: Manual, Automatic, None): The integration service environment sku scale type.

### IntegrationServiceEnvironmentSubnetNetworkHealth
* IntegrationServiceEnvironmentSubnetNetworkHealth `object`: The integration service environment subnet network health.
  * networkDependencyHealthState **required** [IntegrationServiceEnvironmentNetworkEndPointAccessibilityState](#integrationserviceenvironmentnetworkendpointaccessibilitystate)
  * outboundNetworkDependencies `array`: The outbound network dependencies.
    * items [IntegrationServiceEnvironmentNetworkDependency](#integrationserviceenvironmentnetworkdependency)
  * outboundNetworkHealth [IntegrationServiceEnvironmentNetworkDependencyHealth](#integrationserviceenvironmentnetworkdependencyhealth)

### IpAddress
* IpAddress `object`: The ip address.
  * address `string`: The address.

### JsonSchema
* JsonSchema `object`: The JSON schema.
  * content `string`: The JSON content.
  * title `string`: The JSON title.

### KeyType
* KeyType `string` (values: NotSpecified, Primary, Secondary): The key type.

### KeyVaultKey
* KeyVaultKey `object`: The key vault key.
  * attributes `object`: The key attributes.
    * created `integer`: When the key was created.
    * enabled `boolean`: Whether the key is enabled or not.
    * updated `integer`: When the key was updated.
  * kid `string`: The key id.

### KeyVaultKeyCollection
* KeyVaultKeyCollection `object`: Collection of key vault keys.
  * skipToken `string`: The skip token.
  * value `array`: The key vault keys.
    * items [KeyVaultKey](#keyvaultkey)

### KeyVaultKeyReference
* KeyVaultKeyReference `object`: The reference to the key vault key.
  * keyName **required** `string`: The private key name in key vault.
  * keyVault **required** `object`: The key vault reference.
    * id `string`: The resource id.
    * name `string`: The resource name.
    * type `string`: The resource type.
  * keyVersion `string`: The private key version in key vault.

### KeyVaultReference
* KeyVaultReference `object`: The key vault reference.
  * name `string`: The key vault name.
  * id `string`: The resource id.
  * name `string`: Gets the resource name.
  * type `string`: Gets the resource type.

### ListKeyVaultKeysDefinition
* ListKeyVaultKeysDefinition `object`: The list key vault keys definition.
  * keyVault **required** [KeyVaultReference](#keyvaultreference)
  * skipToken `string`: The skip token.

### ManagedApi
* ManagedApi `object`: The managed api definition.
  * properties [ApiResourceProperties](#apiresourceproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### ManagedApiListResult
* ManagedApiListResult `object`: The list of managed APIs.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The managed APIs.
    * items [ManagedApi](#managedapi)

### MapType
* MapType `string` (values: NotSpecified, Xslt, Xslt20, Xslt30, Liquid): The map type.

### MessageFilterType
* MessageFilterType `string` (values: NotSpecified, Include, Exclude): The message filter type.

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration.
  * accessEndpoint [IntegrationServiceEnvironmentAccessEndpoint](#integrationserviceenvironmentaccessendpoint)
  * subnets `array`: The subnets.
    * items [ResourceReference](#resourcereference)
  * virtualNetworkAddressSpace `string`: Gets the virtual network address space.

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

### OperationResult
* OperationResult `object`: The operation result definition.
  * inputs [Object](#object)
  * inputsLink [ContentLink](#contentlink)
  * iterationCount `integer`
  * outputs [Object](#object)
  * outputsLink [ContentLink](#contentlink)
  * retryHistory `array`: Gets the retry histories.
    * items [RetryHistory](#retryhistory)
  * trackedProperties [Object](#object)
  * trackingId `string`: Gets the tracking id.
  * code `string`: The workflow scope repetition code.
  * correlation [RunActionCorrelation](#runactioncorrelation)
  * endTime `string`: The end time of the workflow scope repetition.
  * startTime `string`: The start time of the workflow scope repetition.
  * status [WorkflowStatus](#workflowstatus)

### OperationResultProperties
* OperationResultProperties `object`: The run operation result properties.
  * code `string`: The workflow scope repetition code.
  * correlation [RunActionCorrelation](#runactioncorrelation)
  * endTime `string`: The end time of the workflow scope repetition.
  * startTime `string`: The start time of the workflow scope repetition.
  * status [WorkflowStatus](#workflowstatus)

### ParameterType
* ParameterType `string` (values: NotSpecified, String, SecureString, Int, Float, Bool, Array, Object, SecureObject): The parameter type.

### PartnerContent
* PartnerContent `object`: The integration account partner content.
  * b2b [B2BPartnerContent](#b2bpartnercontent)

### PartnerType
* PartnerType `string` (values: NotSpecified, B2B): The partner type.

### RecurrenceFrequency
* RecurrenceFrequency `string` (values: NotSpecified, Second, Minute, Hour, Day, Week, Month, Year): The recurrence frequency.

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
* RecurrenceScheduleOccurrence `object`: The recurrence schedule occurrence.
  * day [DayOfWeek](#dayofweek)
  * occurrence `integer`: The occurrence.

### RegenerateActionParameter
* RegenerateActionParameter `object`: The access key regenerate action content.
  * keyType [KeyType](#keytype)

### RepetitionIndex
* RepetitionIndex `object`: The workflow run action repetition index.
  * itemIndex **required** `integer`: The index.
  * scopeName `string`: The scope.

### Request
* Request `object`: A request.
  * headers [Object](#object)
  * method `string`: The HTTP method used for the request.
  * uri `string`: The destination for the request.

### RequestHistory
* RequestHistory `object`: The request history.
  * properties [RequestHistoryProperties](#requesthistoryproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### RequestHistoryListResult
* RequestHistoryListResult `object`: The list of workflow request histories.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of workflow request histories.
    * items [RequestHistory](#requesthistory)

### RequestHistoryProperties
* RequestHistoryProperties `object`: The request history.
  * endTime `string`: The time the request ended.
  * request [Request](#request)
  * response [Response](#response)
  * startTime `string`: The time the request started.

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

### Response
* Response `object`: A response.
  * bodyLink [ContentLink](#contentlink)
  * headers [Object](#object)
  * statusCode `integer`: The status code of the response.

### RetryHistory
* RetryHistory `object`: The retry history.
  * clientRequestId `string`: Gets the client request Id.
  * code `string`: Gets the status code.
  * endTime `string`: Gets the end time.
  * error [ErrorResponse](#errorresponse)
  * serviceRequestId `string`: Gets the service request Id.
  * startTime `string`: Gets the start time.

### RunActionCorrelation
* RunActionCorrelation `object`: The workflow run action correlation properties.
  * actionTrackingId `string`: The action tracking identifier.
  * clientKeywords `array`: The client keywords.
    * items `string`
  * clientTrackingId `string`: The client tracking identifier.

### RunCorrelation
* RunCorrelation `object`: The correlation properties.
  * clientKeywords `array`: The client keywords.
    * items `string`
  * clientTrackingId `string`: The client tracking identifier.

### SchemaType
* SchemaType `string` (values: NotSpecified, Xml): The schema type.

### SegmentTerminatorSuffix
* SegmentTerminatorSuffix `string` (values: NotSpecified, None, CR, LF, CRLF): The segment terminator suffix.

### SetTriggerStateActionDefinition
* SetTriggerStateActionDefinition `object`: The set trigger state action definition.
  * source **required** [WorkflowTrigger](#workflowtrigger)

### SigningAlgorithm
* SigningAlgorithm `string` (values: NotSpecified, Default, SHA1, SHA2256, SHA2384, SHA2512): The signing or hashing algorithm.

### Sku
* Sku `object`: The sku type.
  * name **required** [SkuName](#skuname)
  * plan [ResourceReference](#resourcereference)

### SkuName
* SkuName `string` (values: NotSpecified, Free, Shared, Basic, Standard, Premium): The sku name.

### StatusAnnotation
* StatusAnnotation `string` (values: NotSpecified, Preview, Production): The status annotation.

### SubResource
* SubResource `object`: The sub resource type.
  * id `string`: The resource id.

### SwaggerCustomDynamicList
* SwaggerCustomDynamicList `object`: The swagger custom dynamic list.
  * builtInOperation `string`: The built in operation.
  * itemTitlePath `string`: The path to an item property which defines the display name of the item.
  * itemValuePath `string`: The path to a property which defines the value which should be used.
  * itemsPath `string`: The path to a response property (relative to the response object, not the response body) which contains an array of dynamic value items.
  * operationId `string`: The operation id to fetch dynamic schema.
  * parameters `object`: The parameters.

### SwaggerCustomDynamicProperties
* SwaggerCustomDynamicProperties `object`: The swagger custom dynamic properties.
  * operationId `string`: The operation id to fetch dynamic schema.
  * parameters `object`: The operation parameters.
  * valuePath `string`: Json pointer to the dynamic schema on the response body.

### SwaggerCustomDynamicSchema
* SwaggerCustomDynamicSchema `object`: The swagger custom dynamic schema.
  * operationId `string`: The operation id to fetch dynamic schema.
  * parameters `object`: The operation parameters.
  * valuePath `string`: Json pointer to the dynamic schema on the response body.

### SwaggerCustomDynamicTree
* SwaggerCustomDynamicTree `object`: The swagger custom dynamic tree.
  * browse [SwaggerCustomDynamicTreeCommand](#swaggercustomdynamictreecommand)
  * open [SwaggerCustomDynamicTreeCommand](#swaggercustomdynamictreecommand)
  * settings [SwaggerCustomDynamicTreeSettings](#swaggercustomdynamictreesettings)

### SwaggerCustomDynamicTreeCommand
* SwaggerCustomDynamicTreeCommand `object`: The swagger tree command.
  * itemFullTitlePath `string`: The path to an item property which defines the display name of the item.
  * itemIsParent `string`: The path to an item property which defines the display name of the item.
  * itemTitlePath `string`: The path to an item property which defines the display name of the item.
  * itemValuePath `string`: The path to an item property which defines the display name of the item.
  * itemsPath `string`: The path to an item property which defines the display name of the item.
  * operationId `string`: The path to an item property which defines the display name of the item.
  * parameters `object`
  * selectableFilter `string`: The path to an item property which defines the display name of the item.

### SwaggerCustomDynamicTreeParameter
* SwaggerCustomDynamicTreeParameter `object`: The swagger custom dynamic tree parameter.
  * parameterReference `string`: The parameter reference.
  * required `boolean`: Indicates whether the parameter is required.
  * selectedItemValuePath `string`: Gets or sets a path to a property in the currently selected item to pass as a value to a parameter for the given operation.
  * value [Object](#object)

### SwaggerCustomDynamicTreeSettings
* SwaggerCustomDynamicTreeSettings `object`: The swagger custom dynamic tree settings.
  * CanSelectLeafNodes `boolean`: Indicates whether leaf nodes can be selected.
  * CanSelectParentNodes `boolean`: Indicates whether parent nodes can be selected.

### SwaggerExternalDocumentation
* SwaggerExternalDocumentation `object`: The swagger external documentation
  * description `string`: The document description.
  * extensions `object`: The vendor extensions.
  * uri `string`: The documentation Uri.

### SwaggerSchema
* SwaggerSchema `object`: The swagger schema.
  * additionalProperties [Object](#object)
  * allOf `array`: The schemas which must pass validation when this schema is used.
    * items [SwaggerSchema](#swaggerschema)
  * discriminator `string`: The discriminator.
  * dynamicListNew [SwaggerCustomDynamicList](#swaggercustomdynamiclist)
  * dynamicSchemaNew [SwaggerCustomDynamicProperties](#swaggercustomdynamicproperties)
  * dynamicSchemaOld [SwaggerCustomDynamicSchema](#swaggercustomdynamicschema)
  * dynamicTree [SwaggerCustomDynamicTree](#swaggercustomdynamictree)
  * example [Object](#object)
  * externalDocs [SwaggerExternalDocumentation](#swaggerexternaldocumentation)
  * items [SwaggerSchema](#swaggerschema)
  * maxProperties `integer`: The maximum number of allowed properties.
  * minProperties `integer`: The minimum number of allowed properties.
  * notificationUrlExtension `boolean`: Indicates the notification url extension. If this is set, the property's value should be a callback url for a webhook.
  * properties `object`: The object properties
  * readOnly `boolean`: Indicates whether this property must be present in the a request.
  * ref `string`: The reference.
  * required `array`: The object required properties.
    * items `string`
  * title `string`: The title.
  * type [SwaggerSchemaType](#swaggerschematype)
  * xml [SwaggerXml](#swaggerxml)

### SwaggerSchemaType
* SwaggerSchemaType `string` (values: String, Number, Integer, Boolean, Array, File, Object, Null): The swagger schema type.

### SwaggerXml
* SwaggerXml `object`: The Swagger XML.
  * attribute `boolean`: Indicates whether the property should be an attribute instead of an element.
  * extensions `object`: The vendor extensions.
  * name `string`: The xml element or attribute name.
  * namespace `string`: The xml namespace.
  * prefix `string`: The name prefix.
  * wrapped `boolean`: Indicates whether the array elements are wrapped in a container element.

### TrackEventsOperationOptions
* TrackEventsOperationOptions `string` (values: None, DisableSourceInfoEnrich): The track events operation options.

### TrackingEvent
* TrackingEvent `object`: The tracking event.
  * error [TrackingEventErrorInfo](#trackingeventerrorinfo)
  * eventLevel **required** [EventLevel](#eventlevel)
  * eventTime **required** `string`: The event time.
  * recordType **required** [TrackingRecordType](#trackingrecordtype)

### TrackingEventErrorInfo
* TrackingEventErrorInfo `object`: The tracking event error info.
  * code `string`: The code.
  * message `string`: The message.

### TrackingEventsDefinition
* TrackingEventsDefinition `object`: The tracking events definition.
  * events **required** `array`: The events.
    * items [TrackingEvent](#trackingevent)
  * sourceType **required** `string`: The source type.
  * trackEventsOptions [TrackEventsOperationOptions](#trackeventsoperationoptions)

### TrackingRecordType
* TrackingRecordType `string` (values: NotSpecified, Custom, AS2Message, AS2MDN, X12Interchange, X12FunctionalGroup, X12TransactionSet, X12InterchangeAcknowledgment, X12FunctionalGroupAcknowledgment, X12TransactionSetAcknowledgment, EdifactInterchange, EdifactFunctionalGroup, EdifactTransactionSet, EdifactInterchangeAcknowledgment, EdifactFunctionalGroupAcknowledgment, EdifactTransactionSetAcknowledgment): The tracking record type.

### TrailingSeparatorPolicy
* TrailingSeparatorPolicy `string` (values: NotSpecified, NotAllowed, Optional, Mandatory): The trailing separator policy.

### UsageIndicator
* UsageIndicator `string` (values: NotSpecified, Test, Information, Production): The usage indicator.

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
  * endpointsConfiguration [FlowEndpointsConfiguration](#flowendpointsconfiguration)
  * integrationAccount [ResourceReference](#resourcereference)
  * integrationServiceEnvironment [ResourceReference](#resourcereference)
  * parameters `object`: The parameters.
  * provisioningState [WorkflowProvisioningState](#workflowprovisioningstate)
  * sku [Sku](#sku)
  * state [WorkflowState](#workflowstate)
  * version `string`: Gets the version.

### WorkflowProvisioningState
* WorkflowProvisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Moving, Updating, Registering, Registered, Unregistering, Unregistered, Completed): The workflow provisioning state.

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

### WorkflowRunActionRepetitionDefinition
* WorkflowRunActionRepetitionDefinition `object`: The workflow run action repetition definition.
  * properties **required** [WorkflowRunActionRepetitionProperties](#workflowrunactionrepetitionproperties)
  * id `string`: The resource id.
  * location `string`: The resource location.
  * name `string`: Gets the resource name.
  * tags `object`: The resource tags.
  * type `string`: Gets the resource type.

### WorkflowRunActionRepetitionDefinitionCollection
* WorkflowRunActionRepetitionDefinitionCollection `object`: A collection of workflow run action repetitions.
  * nextLink `string`: The link used to get the next page of recommendations.
  * value `array`
    * items [WorkflowRunActionRepetitionDefinition](#workflowrunactionrepetitiondefinition)

### WorkflowRunActionRepetitionProperties
* WorkflowRunActionRepetitionProperties `object`: The workflow run action repetition properties definition.
  * repetitionIndexes `array`: The repetition indexes.
    * items [RepetitionIndex](#repetitionindex)
  * inputs [Object](#object)
  * inputsLink [ContentLink](#contentlink)
  * iterationCount `integer`
  * outputs [Object](#object)
  * outputsLink [ContentLink](#contentlink)
  * retryHistory `array`: Gets the retry histories.
    * items [RetryHistory](#retryhistory)
  * trackedProperties [Object](#object)
  * trackingId `string`: Gets the tracking id.
  * code `string`: The workflow scope repetition code.
  * correlation [RunActionCorrelation](#runactioncorrelation)
  * endTime `string`: The end time of the workflow scope repetition.
  * startTime `string`: The start time of the workflow scope repetition.
  * status [WorkflowStatus](#workflowstatus)

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
  * waitEndTime `string`: Gets the wait end time.
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
  * scheduledTime `string`: Gets the scheduled time.
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trackedProperties [Object](#object)
  * trackingId `string`: Gets the tracking id.

### WorkflowState
* WorkflowState `string` (values: NotSpecified, Completed, Enabled, Disabled, Deleted, Suspended): The workflow state.

### WorkflowStatus
* WorkflowStatus `string` (values: NotSpecified, Paused, Running, Waiting, Succeeded, Skipped, Suspended, Cancelled, Failed, Faulted, TimedOut, Aborted, Ignored): The workflow status.

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
  * fired `boolean`: The value indicating whether trigger was fired.
  * inputsLink [ContentLink](#contentlink)
  * outputsLink [ContentLink](#contentlink)
  * run [ResourceReference](#resourcereference)
  * startTime `string`: Gets the start time.
  * status [WorkflowStatus](#workflowstatus)
  * trackingId `string`: Gets the tracking id.

### WorkflowTriggerListCallbackUrlQueries
* WorkflowTriggerListCallbackUrlQueries `object`: Gets the workflow trigger callback URL query parameters.
  * api-version `string`: The api version.
  * se `string`: The SAS timestamp.
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
* WorkflowTriggerProvisioningState `string` (values: NotSpecified, Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Moving, Updating, Registering, Registered, Unregistering, Unregistered, Completed): The workflow trigger provisioning state.

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

### WsdlImportMethod
* WsdlImportMethod `string` (values: NotSpecified, SoapToRest, SoapPassThrough): The WSDL import method.

### WsdlService
* WsdlService `object`: The WSDL service.
  * EndpointQualifiedNames `array`: The list of endpoints' qualified names.
    * items `string`
  * qualifiedName `string`: The qualified name.

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
* X12CharacterSet `string` (values: NotSpecified, Basic, Extended, UTF8): The X12 character set.

### X12DateFormat
* X12DateFormat `string` (values: NotSpecified, CCYYMMDD, YYMMDD): The x12 date format.

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
* X12OneWayAgreement `object`: The X12 one-way agreement.
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
* X12TimeFormat `string` (values: NotSpecified, HHMM, HHMMSS, HHMMSSdd, HHMMSSd): The x12 time format.

### X12ValidationOverride
* X12ValidationOverride `object`: The X12 validation override settings.
  * allowLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to allow leading and trailing spaces and zeroes.
  * messageId **required** `string`: The message id on which the validation settings has to be applied.
  * trailingSeparatorPolicy **required** [TrailingSeparatorPolicy](#trailingseparatorpolicy)
  * trimLeadingAndTrailingSpacesAndZeroes **required** `boolean`: The value indicating whether to trim leading and trailing spaces and zeroes.
  * validateCharacterSet **required** `boolean`: The value indicating whether to validate character Set.
  * validateEDITypes **required** `boolean`: The value indicating whether to validate EDI types.
  * validateXSDTypes **required** `boolean`: The value indicating whether to validate XSD types.

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
  * validateEDITypes **required** `boolean`: The value indicating whether to Whether to validate EDI types.
  * validateXSDTypes **required** `boolean`: The value indicating whether to Whether to validate XSD types.


