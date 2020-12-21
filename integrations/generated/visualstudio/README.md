# @datafire/visualstudio

Client library for VSOnline

## Installation and Usage
```bash
npm install --save @datafire/visualstudio
```
```js
let visualstudio = require('@datafire/visualstudio').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Public APIs for managing VS Online Environments

## Actions

### api.v1.AgentTelemetry.post



```js
visualstudio.api.v1.AgentTelemetry.post({}, context)
```

#### Input
* input `object`
  * body `array`
    * items [TelemetryData](#telemetrydata)

#### Output
*Output schema unknown*

### api.v1.Agents.family.get



```js
visualstudio.api.v1.Agents.family.get({
  "family": ""
}, context)
```

#### Input
* input `object`
  * family **required** `string`

#### Output
* output [AgentResponse](#agentresponse)

### api.v1.Environments.get



```js
visualstudio.api.v1.Environments.get({}, context)
```

#### Input
* input `object`
  * name `string`
  * planId `string`
  * deleted `boolean`

#### Output
* output `array`
  * items [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.post



```js
visualstudio.api.v1.Environments.post({}, context)
```

#### Input
* input `object`
  * body [CreateCloudEnvironmentBody](#createcloudenvironmentbody)

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.delete



```js
visualstudio.api.v1.Environments.environmentId.delete({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
*Output schema unknown*

### api.v1.Environments.environmentId.get



```js
visualstudio.api.v1.Environments.environmentId.get({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`
  * connect `boolean`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.patch



```js
visualstudio.api.v1.Environments.environmentId.patch({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`
  * body [UpdateCloudEnvironmentBody](#updatecloudenvironmentbody)

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId._callback.post



```js
visualstudio.api.v1.Environments.environmentId._callback.post({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`
  * body [EnvironmentRegistrationCallbackBody](#environmentregistrationcallbackbody)

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.export.post



```js
visualstudio.api.v1.Environments.environmentId.export.post({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.folder.patch



```js
visualstudio.api.v1.Environments.environmentId.folder.patch({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`
  * body [CloudEnvironmentFolderBody](#cloudenvironmentfolderbody)

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.heartbeattoken.get



```js
visualstudio.api.v1.Environments.environmentId.heartbeattoken.get({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.restore.patch



```js
visualstudio.api.v1.Environments.environmentId.restore.patch({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
*Output schema unknown*

### api.v1.Environments.environmentId.shutdown.post



```js
visualstudio.api.v1.Environments.environmentId.shutdown.post({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.start.post



```js
visualstudio.api.v1.Environments.environmentId.start.post({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.Environments.environmentId.updates.get



```js
visualstudio.api.v1.Environments.environmentId.updates.get({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** `string`

#### Output
* output [CloudEnvironmentResult](#cloudenvironmentresult)

### api.v1.HeartBeat.post



```js
visualstudio.api.v1.HeartBeat.post({}, context)
```

#### Input
* input `object`
  * body [HeartBeatBody](#heartbeatbody)

#### Output
*Output schema unknown*

### api.v1.Locations.get



```js
visualstudio.api.v1.Locations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [LocationsResult](#locationsresult)

### api.v1.Locations.location.get



```js
visualstudio.api.v1.Locations.location.get({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * planId `string`

#### Output
* output [LocationInfoResult](#locationinforesult)

### api.v1.Plans.get



```js
visualstudio.api.v1.Plans.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlanResult](#planresult)

### api.v1.Plans.subscriptionId.resourceGroupName.resourceName.get



```js
visualstudio.api.v1.Plans.subscriptionId.resourceGroupName.resourceName.get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroupName **required** `string`
  * resourceName **required** `string`

#### Output
* output [PlanResult](#planresult)

### api.v1.Sas.get



```js
visualstudio.api.v1.Sas.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ScopedSecretResultBody](#scopedsecretresultbody)

### api.v1.Secrets.get



```js
visualstudio.api.v1.Secrets.get({}, context)
```

#### Input
* input `object`
  * planId `string`

#### Output
* output `array`
  * items [ScopedSecretResultBody](#scopedsecretresultbody)

### api.v1.Secrets.post



```js
visualstudio.api.v1.Secrets.post({}, context)
```

#### Input
* input `object`
  * planId `string`
  * body [ScopedCreateSecretBody](#scopedcreatesecretbody)

#### Output
* output [ScopedSecretResultBody](#scopedsecretresultbody)

### api.v1.Secrets.secretId.delete



```js
visualstudio.api.v1.Secrets.secretId.delete({
  "secretId": ""
}, context)
```

#### Input
* input `object`
  * planId `string`
  * scope `integer` (values: 1 (Plan), 2 (User))
  * secretId **required** `string`

#### Output
*Output schema unknown*

### api.v1.Secrets.secretId.put



```js
visualstudio.api.v1.Secrets.secretId.put({
  "secretId": ""
}, context)
```

#### Input
* input `object`
  * planId `string`
  * secretId **required** `string`
  * body [ScopedUpdateSecretBody](#scopedupdatesecretbody)

#### Output
* output [ScopedSecretResultBody](#scopedsecretresultbody)

### api.v1.Subscriptions.subscriptionId.providers.providerNamespace.resourceType.SubscriptionLifeCycleNotification.put



```js
visualstudio.api.v1.Subscriptions.subscriptionId.providers.providerNamespace.resourceType.SubscriptionLifeCycleNotification.put({
  "subscriptionId": "",
  "providerNamespace": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * body [RPSubscriptionNotification](#rpsubscriptionnotification)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.providers.providerNamespace.resourceType.resourceReadBegin.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.providers.providerNamespace.resourceType.resourceReadBegin.post({
  "subscriptionId": "",
  "providerNamespace": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * body [PlanResourceList](#planresourcelist)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceReadBegin.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceReadBegin.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * body [PlanResourceList](#planresourcelist)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.put



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.put({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * headers `object`
  * body [PlanResource](#planresource)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteAllCodespaces.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteAllCodespaces.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteAllEnvironments.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteAllEnvironments.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteDelegates.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.deleteDelegates.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readAllCodespaces.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readAllCodespaces.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readAllEnvironments.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readAllEnvironments.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readDelegates.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.readDelegates.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceCreationCompleted.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceCreationCompleted.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceCreationValidate.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceCreationValidate.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * body [PlanResource](#planresource)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceDeletionValidate.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceDeletionValidate.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourcePatchCompleted.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourcePatchCompleted.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * headers `object`
  * body [PlanResourceUpdateBody](#planresourceupdatebody)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourcePatchValidate.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourcePatchValidate.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * body [PlanResourceUpdateBody](#planresourceupdatebody)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceReadBegin.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.resourceReadBegin.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * body [PlanResource](#planresource)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeCodespaces.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeCodespaces.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeDelegates.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeDelegates.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * body [IssueDelegatePlanAccessTokenBody](#issuedelegateplanaccesstokenbody)

#### Output
*Output schema unknown*

### api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeEnvironments.post



```js
visualstudio.api.v1.Subscriptions.subscriptionId.resourceGroups.resourceGroup.providers.providerNamespace.resourceType.resourceName.writeEnvironments.post({
  "subscriptionId": "",
  "resourceGroup": "",
  "providerNamespace": "",
  "resourceType": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * resourceGroup **required** `string`
  * providerNamespace **required** `string`
  * resourceType **required** `string`
  * resourceName **required** `string`
  * expiration `string`

#### Output
*Output schema unknown*

### api.v1.UserSubscriptions.delete



```js
visualstudio.api.v1.UserSubscriptions.delete({}, context)
```

#### Input
* input `object`
  * email `string`

#### Output
*Output schema unknown*

### api.v1.UserSubscriptions.post



```js
visualstudio.api.v1.UserSubscriptions.post({}, context)
```

#### Input
* input `object`
  * email `string`

#### Output
*Output schema unknown*

### health.get



```js
visualstudio.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### warmup.get



```js
visualstudio.warmup.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### AgentResponse
* AgentResponse `object`
  * assetUri `string`
  * family `string`
  * name `string`

### AzureLocation
* AzureLocation `integer` (values: 101 (EastAsia), 102 (SouthEastAsia), 201 (AustraliaCentral), 202 (AustraliaCentral2), 203 (AustraliaEast), 205 (AustraliaSouthEast), 301 (BrazilSouth), 401 (CanadaCentral), 402 (CanadaEast), 501 (NorthEurope), 502 (WestEurope), 601 (FranceCentral), 602 (FranceSouth), 701 (CentralIndia), 702 (SouthIndia), 703 (WestIndia), 801 (JapanEast), 802 (JapanWest), 901 (KoreaCentral), 902 (KoreaSouth), 1001 (SouthAfricaNorth), 1002 (SouthAfricaWest), 1201 (UaeCentral), 1202 (UaeNorth), 1401 (UkSouth), 1402 (UkWest), 1501 (CentralUs), 1502 (EastUs), 1503 (EastUs2), 1504 (NorthCentralUs), 1505 (SouthCentralUs), 1506 (WestCentralUs), 1507 (WestUs), 1508 (WestUs2), 1601 (CentralUsEuap), 1602 (EastUs2Euap), 1701 (SwitzerlandNorth), 1702 (SwitzerlandWest), 1801 (GermanyNorth), 1802 (GermanyWestCentral), 1901 (NorwayWest), 1902 (NorwayEast))

### BillingProperties
* BillingProperties `object`
  * billingType `string`
  * channelType `string`
  * paymentType `string`
  * tier `string`
  * workloadType `string`

### CloudEnvironmentFolderBody
* CloudEnvironmentFolderBody `object`
  * recentFolderPaths `array`
    * items `string`

### CloudEnvironmentResult
* CloudEnvironmentResult `object`
  * active `string`
  * autoShutdownDelayMinutes `integer`
  * connection [ConnectionInfoBody](#connectioninfobody)
  * containerImage `string`
  * created `string`
  * exportedBlobUrl `string`
  * features `object`
  * friendlyName `string`
  * hasUnpushedGitChanges `boolean`
  * id `string`
  * lastStateUpdateReason `string`
  * lastUsed `string`
  * location `string`
  * ownerId `string`
  * planId `string`
  * platform `string`
  * recentFolders `array`
    * items `string`
  * seed [SeedInfoBody](#seedinfobody)
  * skuDisplayName `string`
  * skuName `string`
  * state `string`
  * subscriptionData [SubscriptionData](#subscriptiondata)
  * type `string`
  * updated `string`

### CollectedData
* CollectedData `object`
  * environmentId `string`
  * name `string`
  * timestamp `string`

### ConnectionInfoBody
* ConnectionInfoBody `object`
  * connectionServiceUri `string`
  * connectionSessionId `string`
  * connectionSessionPath `string`
  * hostPublicKeys `array`
    * items `string`
  * relayEndpoint `string`
  * relaySasToken `string`
  * sessionToken `string`

### CreateCloudEnvironmentBody
* CreateCloudEnvironmentBody `object`
  * autoShutdownDelayMinutes `integer`
  * connection [ConnectionInfoBody](#connectioninfobody)
  * containerImage `string`
  * devContainer `string`
  * experimentalFeatures [ExperimentalFeaturesBody](#experimentalfeaturesbody)
  * features `object`
  * friendlyName **required** `string`
  * label `string`
  * location `string`
  * personalization [PersonalizationInfoBody](#personalizationinfobody)
  * planId `string`
  * platform `string`
  * secrets `array`
    * items [SecretDataBody](#secretdatabody)
  * seed [SeedInfoBody](#seedinfobody)
  * skuName `string`
  * type **required** `string`

### DelegateIdentity
* DelegateIdentity `object`
  * displayName `string`
  * id `string`
  * username `string`

### EnvironmentRegistrationCallbackBody
* EnvironmentRegistrationCallbackBody `object`
  * payload [EnvironmentRegistrationCallbackPayloadBody](#environmentregistrationcallbackpayloadbody)
  * type **required** `string`

### EnvironmentRegistrationCallbackPayloadBody
* EnvironmentRegistrationCallbackPayloadBody `object`
  * sessionId `string`
  * sessionPath `string`

### ExperimentalFeaturesBody
* ExperimentalFeaturesBody `object`
  * customContainers `boolean`
  * disableHostNetworkingForDockerCompose `boolean`
  * enableDynamicHttpsDetection `boolean`
  * localCredentialHelper `boolean`
  * newTerminal `boolean`
  * queueResourceAllocation `boolean`
  * shallowClone `boolean`
  * unifiedContainerImplementation `boolean`

### GitConfigOptionsBody
* GitConfigOptionsBody `object`
  * userEmail `string`
  * userName `string`

### HeartBeatBody
* HeartBeatBody `object`
  * agentVersion `string`
  * collectedDataList `array`
    * items [CollectedData](#collecteddata)
  * environmentId `string`
  * resourceId `string`
  * timeStamp `string`

### IssueDelegatePlanAccessTokenBody
* IssueDelegatePlanAccessTokenBody `object`
  * environmentIds `array`
    * items `string`
  * expiration `string`
  * identity [DelegateIdentity](#delegateidentity)
  * scope `string`

### LocationInfoResult
* LocationInfoResult `object`
  * defaultAutoSuspendDelayMinutes `array`
    * items `integer`
  * skus `array`
    * items [SkuInfoResult](#skuinforesult)

### LocationsResult
* LocationsResult `object`
  * available `array`
    * items [AzureLocation](#azurelocation)
  * current [AzureLocation](#azurelocation)
  * hostnames `object`

### MessageCodes
* MessageCodes `integer` (values: 0 (Unknown), 1 (ExceededQuota), 2 (EnvironmentNameAlreadyExists), 3 (EnvironmentDoesNotExist), 4 (ShutdownStaticEnvironment), 5 (StartStaticEnvironment), 6 (EnvironmentNotAvailable), 7 (EnvironmentNotShutdown), 8 (UnableToAllocateResources), 9 (UnableToAllocateResourcesWhileStarting), 10 (RequestedAutoShutdownDelayMinutesIsInvalid), 11 (UnableToUpdateSku), 12 (RequestedSkuIsInvalid), 13 (HeartbeatUnhealthy), 14 (StartEnvironmentGenericError), 15 (RestoringFromArchive), 16 (FilePathIsInvalid), 17 (TooManyRecentFolders), 18 (SubscriptionIsBanned), 19 (EnvironmentArchived), 20 (SubscriptionStateIsNotRegistered), 21 (FeatureDisabled), 22 (SubscriptionCannotPerformAction), 23 (InvalidLocationChange), 24 (PlanDoesNotExist), 25 (UnableToResolveEnvironmentNameConflict), 26 (ExceededSecretsQuota), 27 (InvalidPlanTenant), 28 (ExportStaticEnvironment), 29 (ExportEnvironmentGenericError), 30 (ExceededOrgDevContainerMaxLength), 31 (ActionNotAllowedInThisState), 32 (ExportRunningEnvironmentError), 33 (GitHubProxyError))

### PersonalizationInfoBody
* PersonalizationInfoBody `object`
  * dotfilesInstallCommand `string`
  * dotfilesRepository `string`
  * dotfilesTargetPath `string`

### PlanResource
* PlanResource `object`
  * tags `object`
  * id `string`
  * identity [PlanResourceIdentity](#planresourceidentity)
  * location `string`
  * name `string`
  * properties [PlanResourceProperties](#planresourceproperties)
  * provisioningState `string`
  * type `string`

### PlanResourceEncryptionProperties
* PlanResourceEncryptionProperties `object`
  * keySource `string`
  * keyVaultProperties [PlanResourceKeyVaultProperties](#planresourcekeyvaultproperties)

### PlanResourceHeaders
* PlanResourceHeaders `object`
  * clientTenantId `string`
  * homeTenantId `string`
  * identityPrincipalId `string`
  * identityUrl `string`

### PlanResourceIdentity
* PlanResourceIdentity `object`
  * principalId `string`
  * tenantId `string`
  * type `string`

### PlanResourceKeyVaultProperties
* PlanResourceKeyVaultProperties `object`
  * keyName `string`
  * keyVaultUri `string`
  * keyVersion `string`

### PlanResourceList
* PlanResourceList `object`
  * value `array`
    * items [PlanResource](#planresource)

### PlanResourceProperties
* PlanResourceProperties `object`
  * defaultAutoSuspendDelayMinutes `integer`
  * defaultCodespaceSku `string`
  * defaultEnvironmentSku `string`
  * encryption [PlanResourceEncryptionProperties](#planresourceencryptionproperties)
  * userId `string`
  * vnetProperties [VnetProperties](#vnetproperties)

### PlanResourceUpdateBody
* PlanResourceUpdateBody `object`
  * identity [PlanResourceIdentity](#planresourceidentity)
  * properties [PlanResourceProperties](#planresourceproperties)

### PlanResult
* PlanResult `object`
  * id `string`
  * location [AzureLocation](#azurelocation)
  * name `string`
  * resourceGroup `string`
  * subscription `string`

### ProblemDetails
* ProblemDetails `object`
  * detail `string`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`

### RPSubscriptionNotification
* RPSubscriptionNotification `object`
  * properties [RPSubscriptionProperties](#rpsubscriptionproperties)
  * registrationDate `string`
  * state `string`

### RPSubscriptionProperties
* RPSubscriptionProperties `object`
  * accountOwner [SubscriptionAccountOwner](#subscriptionaccountowner)
  * additionalProperties [SubscriptionAdditionalProperties](#subscriptionadditionalproperties)
  * locationPlacementId `string`
  * managedByTenants `array`
    * items [StringStringKeyValuePair](#stringstringkeyvaluepair)
  * quotaId `string`
  * registeredFeatures `array`
    * items [StringStringKeyValuePair](#stringstringkeyvaluepair)
  * tenantId `string`

### ScopedCreateSecretBody
* ScopedCreateSecretBody `object`
  * filters `array`
    * items [SecretFilterBody](#secretfilterbody)
  * notes `string`
  * scope [SecretScope](#secretscope)
  * secretName `string`
  * type [SecretType](#secrettype)
  * value `string`

### ScopedSecretResultBody
* ScopedSecretResultBody `object`
  * filters `array`
    * items [SecretFilterBody](#secretfilterbody)
  * id `string`
  * lastModified `string`
  * notes `string`
  * scope [SecretScope](#secretscope)
  * secretName `string`
  * type [SecretType](#secrettype)

### ScopedUpdateSecretBody
* ScopedUpdateSecretBody `object`
  * filters `array`
    * items [SecretFilterBody](#secretfilterbody)
  * notes `string`
  * scope [SecretScope](#secretscope)
  * secretName `string`
  * value `string`

### SecretDataBody
* SecretDataBody `object`
  * name `string`
  * type [SecretType](#secrettype)
  * value `string`

### SecretFilterBody
* SecretFilterBody `object`
  * type [SecretFilterType](#secretfiltertype)
  * value `string`

### SecretFilterType
* SecretFilterType `integer` (values: 1 (GitRepo), 2 (CodespaceName))

### SecretScope
* SecretScope `integer` (values: 1 (Plan), 2 (User))

### SecretType
* SecretType `integer` (values: 1 (EnvironmentVariable), 2 (ContainerRegistry))

### SeedInfoBody
* SeedInfoBody `object`
  * gitConfig [GitConfigOptionsBody](#gitconfigoptionsbody)
  * recurseClone `boolean`
  * seedMoniker `string`
  * seedType `string`

### SkuInfoResult
* SkuInfoResult `object`
  * displayName `string`
  * name `string`
  * os `string`

### StringStringKeyValuePair
* StringStringKeyValuePair `object`
  * key `string`
  * value `string`

### SubscriptionAccountOwner
* SubscriptionAccountOwner `object`
  * email `string`
  * puid `string`

### SubscriptionAdditionalProperties
* SubscriptionAdditionalProperties `object`
  * billingProperties [BillingProperties](#billingproperties)
  * resourceProviderProperties `string`

### SubscriptionData
* SubscriptionData `object`
  * computeQuota `integer`
  * computeUsage `integer`
  * subscriptionId `string`
  * subscriptionState `string`

### TelemetryData
* TelemetryData `object`
  * level `string`
  * message `string`
  * optionalValues `object`
  * time `string`

### UpdateCloudEnvironmentBody
* UpdateCloudEnvironmentBody `object`
  * autoShutdownDelayMinutes `integer`
  * friendlyName `string`
  * planAccessToken `string`
  * planId `string`
  * skuName `string`

### VnetProperties
* VnetProperties `object`
  * subnetId `string`


