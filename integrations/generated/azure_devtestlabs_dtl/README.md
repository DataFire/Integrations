# @datafire/azure_devtestlabs_dtl

Client library for DevTestLabsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_devtestlabs_dtl
```
```js
let azure_devtestlabs_dtl = require('@datafire/azure_devtestlabs_dtl').create({
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

The DevTest Labs Client.

## Actions

### ProviderOperations_List
Result of the request to list REST API operations


```js
azure_devtestlabs_dtl.ProviderOperations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [ProviderOperationResult](#provideroperationresult)

### Labs_ListBySubscription
List labs in a subscription.


```js
azure_devtestlabs_dtl.Labs_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabList](#lablist)

### Operations_Get
Get operation.


```js
azure_devtestlabs_dtl.Operations_Get({
  "subscriptionId": "",
  "locationName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * locationName **required** `string`: The name of the location.
  * name **required** `string`: The name of the operation.
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationResult](#operationresult)

### GlobalSchedules_ListBySubscription
List schedules in a subscription.


```js
azure_devtestlabs_dtl.GlobalSchedules_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### Labs_ListByResourceGroup
List labs in a resource group.


```js
azure_devtestlabs_dtl.Labs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabList](#lablist)

### ArtifactSources_List
List artifact sources in a given lab.


```js
azure_devtestlabs_dtl.ArtifactSources_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=displayName)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArtifactSourceList](#artifactsourcelist)

### ArmTemplates_List
List azure resource manager templates in a given artifact source.


```js
azure_devtestlabs_dtl.ArmTemplates_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "artifactSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=displayName)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArmTemplateList](#armtemplatelist)

### ArmTemplates_Get
Get azure resource manager template.


```js
azure_devtestlabs_dtl.ArmTemplates_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "artifactSourceName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * name **required** `string`: The name of the azure resource manager template.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=displayName)'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArmTemplate](#armtemplate)

### Artifacts_List
List artifacts in a given artifact source.


```js
azure_devtestlabs_dtl.Artifacts_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "artifactSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=title)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArtifactList](#artifactlist)

### Artifacts_Get
Get artifact.


```js
azure_devtestlabs_dtl.Artifacts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "artifactSourceName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * name **required** `string`: The name of the artifact.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=title)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Artifact](#artifact)

### Artifacts_GenerateArmTemplate
Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.


```js
azure_devtestlabs_dtl.Artifacts_GenerateArmTemplate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "artifactSourceName": "",
  "name": "",
  "generateArmTemplateRequest": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * artifactSourceName **required** `string`: The name of the artifact source.
  * name **required** `string`: The name of the artifact.
  * generateArmTemplateRequest **required** [GenerateArmTemplateRequest](#generatearmtemplaterequest)
  * api-version **required** `string`: Client API version.

#### Output
* output [ArmTemplateInfo](#armtemplateinfo)

### ArtifactSources_Delete
Delete artifact source.


```js
azure_devtestlabs_dtl.ArtifactSources_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the artifact source.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ArtifactSources_Get
Get artifact source.


```js
azure_devtestlabs_dtl.ArtifactSources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the artifact source.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=displayName)'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArtifactSource](#artifactsource)

### ArtifactSources_Update
Allows modifying tags of artifact sources. All other properties will be ignored.


```js
azure_devtestlabs_dtl.ArtifactSources_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "artifactSource": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the artifact source.
  * artifactSource **required** [ArtifactSourceFragment](#artifactsourcefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [ArtifactSource](#artifactsource)

### ArtifactSources_CreateOrUpdate
Create or replace an existing artifact source.


```js
azure_devtestlabs_dtl.ArtifactSources_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "artifactSource": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the artifact source.
  * artifactSource **required** [ArtifactSource](#artifactsource)
  * api-version **required** `string`: Client API version.

#### Output
* output [ArtifactSource](#artifactsource)

### Costs_Get
Get cost.


```js
azure_devtestlabs_dtl.Costs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the cost.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=labCostDetails)'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabCost](#labcost)

### Costs_CreateOrUpdate
Create or replace an existing cost.


```js
azure_devtestlabs_dtl.Costs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "labCost": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the cost.
  * labCost **required** [LabCost](#labcost)
  * api-version **required** `string`: Client API version.

#### Output
* output [LabCost](#labcost)

### CustomImages_List
List custom images in a given lab.


```js
azure_devtestlabs_dtl.CustomImages_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=vm)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [CustomImageList](#customimagelist)

### CustomImages_Delete
Delete custom image. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.CustomImages_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the custom image.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### CustomImages_Get
Get custom image.


```js
azure_devtestlabs_dtl.CustomImages_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the custom image.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=vm)'
  * api-version **required** `string`: Client API version.

#### Output
* output [CustomImage](#customimage)

### CustomImages_Update
Allows modifying tags of custom images. All other properties will be ignored.


```js
azure_devtestlabs_dtl.CustomImages_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "customImage": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the custom image.
  * customImage **required** [CustomImageFragment](#customimagefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [CustomImage](#customimage)

### CustomImages_CreateOrUpdate
Create or replace an existing custom image. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.CustomImages_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "customImage": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the custom image.
  * customImage **required** [CustomImage](#customimage)
  * api-version **required** `string`: Client API version.

#### Output
* output [CustomImage](#customimage)

### Formulas_List
List formulas in a given lab.


```js
azure_devtestlabs_dtl.Formulas_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=description)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [FormulaList](#formulalist)

### Formulas_Delete
Delete formula.


```js
azure_devtestlabs_dtl.Formulas_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the formula.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Formulas_Get
Get formula.


```js
azure_devtestlabs_dtl.Formulas_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the formula.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=description)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Formula](#formula)

### Formulas_Update
Allows modifying tags of formulas. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Formulas_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "formula": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the formula.
  * formula **required** [FormulaFragment](#formulafragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Formula](#formula)

### Formulas_CreateOrUpdate
Create or replace an existing formula. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Formulas_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "formula": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the formula.
  * formula **required** [Formula](#formula)
  * api-version **required** `string`: Client API version.

#### Output
* output [Formula](#formula)

### GalleryImages_List
List gallery images in a given lab.


```js
azure_devtestlabs_dtl.GalleryImages_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=author)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [GalleryImageList](#galleryimagelist)

### NotificationChannels_List
List notification channels in a given lab.


```js
azure_devtestlabs_dtl.NotificationChannels_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=webHookUrl)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannelList](#notificationchannellist)

### NotificationChannels_Delete
Delete notification channel.


```js
azure_devtestlabs_dtl.NotificationChannels_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the notification channel.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### NotificationChannels_Get
Get notification channel.


```js
azure_devtestlabs_dtl.NotificationChannels_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the notification channel.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=webHookUrl)'
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_Update
Allows modifying tags of notification channels. All other properties will be ignored.


```js
azure_devtestlabs_dtl.NotificationChannels_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "notificationChannel": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the notification channel.
  * notificationChannel **required** [NotificationChannelFragment](#notificationchannelfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_CreateOrUpdate
Create or replace an existing notification channel.


```js
azure_devtestlabs_dtl.NotificationChannels_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "notificationChannel": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the notification channel.
  * notificationChannel **required** [NotificationChannel](#notificationchannel)
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_Notify
Send notification to provided channel.


```js
azure_devtestlabs_dtl.NotificationChannels_Notify({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "notifyParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the notification channel.
  * notifyParameters **required** [NotifyParameters](#notifyparameters)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### PolicySets_EvaluatePolicies
Evaluates lab policy.


```js
azure_devtestlabs_dtl.PolicySets_EvaluatePolicies({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "evaluatePoliciesRequest": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the policy set.
  * evaluatePoliciesRequest **required** [EvaluatePoliciesRequest](#evaluatepoliciesrequest)
  * api-version **required** `string`: Client API version.

#### Output
* output [EvaluatePoliciesResponse](#evaluatepoliciesresponse)

### Policies_List
List policies in a given policy set.


```js
azure_devtestlabs_dtl.Policies_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "policySetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * policySetName **required** `string`: The name of the policy set.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=description)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [PolicyList](#policylist)

### Policies_Delete
Delete policy.


```js
azure_devtestlabs_dtl.Policies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "policySetName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * policySetName **required** `string`: The name of the policy set.
  * name **required** `string`: The name of the policy.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Policies_Get
Get policy.


```js
azure_devtestlabs_dtl.Policies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "policySetName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * policySetName **required** `string`: The name of the policy set.
  * name **required** `string`: The name of the policy.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=description)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Policy](#policy)

### Policies_Update
Allows modifying tags of policies. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Policies_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "policySetName": "",
  "name": "",
  "policy": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * policySetName **required** `string`: The name of the policy set.
  * name **required** `string`: The name of the policy.
  * policy **required** [PolicyFragment](#policyfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Policy](#policy)

### Policies_CreateOrUpdate
Create or replace an existing policy.


```js
azure_devtestlabs_dtl.Policies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "policySetName": "",
  "name": "",
  "policy": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * policySetName **required** `string`: The name of the policy set.
  * name **required** `string`: The name of the policy.
  * policy **required** [Policy](#policy)
  * api-version **required** `string`: Client API version.

#### Output
* output [Policy](#policy)

### Schedules_List
List schedules in a given lab.


```js
azure_devtestlabs_dtl.Schedules_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### Schedules_Delete
Delete schedule.


```js
azure_devtestlabs_dtl.Schedules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Schedules_Get
Get schedule.


```js
azure_devtestlabs_dtl.Schedules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### Schedules_Update
Allows modifying tags of schedules. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Schedules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "schedule": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [ScheduleFragment](#schedulefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### Schedules_CreateOrUpdate
Create or replace an existing schedule.


```js
azure_devtestlabs_dtl.Schedules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "schedule": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [Schedule](#schedule)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### Schedules_Execute
Execute a schedule. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Schedules_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Schedules_ListApplicable
Lists all applicable schedules


```js
azure_devtestlabs_dtl.Schedules_ListApplicable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### ServiceRunners_Delete
Delete service runner.


```js
azure_devtestlabs_dtl.ServiceRunners_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the service runner.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ServiceRunners_Get
Get service runner.


```js
azure_devtestlabs_dtl.ServiceRunners_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the service runner.
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceRunner](#servicerunner)

### ServiceRunners_CreateOrUpdate
Create or replace an existing service runner.


```js
azure_devtestlabs_dtl.ServiceRunners_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "serviceRunner": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the service runner.
  * serviceRunner **required** [ServiceRunner](#servicerunner)
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceRunner](#servicerunner)

### Users_List
List user profiles in a given lab.


```js
azure_devtestlabs_dtl.Users_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=identity)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [UserList](#userlist)

### Users_Delete
Delete user profile. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Users_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the user profile.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Users_Get
Get user profile.


```js
azure_devtestlabs_dtl.Users_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the user profile.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=identity)'
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)

### Users_Update
Allows modifying tags of user profiles. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Users_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "user": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the user profile.
  * user **required** [UserFragment](#userfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)

### Users_CreateOrUpdate
Create or replace an existing user profile. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Users_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "user": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the user profile.
  * user **required** [User](#user)
  * api-version **required** `string`: Client API version.

#### Output
* output [User](#user)

### Disks_List
List disks in a given user profile.


```js
azure_devtestlabs_dtl.Disks_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=diskType)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [DiskList](#disklist)

### Disks_Delete
Delete disk. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Disks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Disks_Get
Get disk.


```js
azure_devtestlabs_dtl.Disks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=diskType)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Disk](#disk)

### Disks_Update
Allows modifying tags of disks. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Disks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "disk": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * disk **required** [DiskFragment](#diskfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Disk](#disk)

### Disks_CreateOrUpdate
Create or replace an existing disk. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Disks_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "disk": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * disk **required** [Disk](#disk)
  * api-version **required** `string`: Client API version.

#### Output
* output [Disk](#disk)

### Disks_Attach
Attach and create the lease of the disk to the virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Disks_Attach({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "attachDiskProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * attachDiskProperties **required** [AttachDiskProperties](#attachdiskproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Disks_Detach
Detach and break the lease of the disk attached to the virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Disks_Detach({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "detachDiskProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the disk.
  * detachDiskProperties **required** [DetachDiskProperties](#detachdiskproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_List
List environments in a given user profile.


```js
azure_devtestlabs_dtl.Environments_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=deploymentProperties)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [DtlEnvironmentList](#dtlenvironmentlist)

### Environments_Delete
Delete environment. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Environments_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the environment.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Environments_Get
Get environment.


```js
azure_devtestlabs_dtl.Environments_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the environment.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=deploymentProperties)'
  * api-version **required** `string`: Client API version.

#### Output
* output [DtlEnvironment](#dtlenvironment)

### Environments_Update
Allows modifying tags of environments. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Environments_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "dtlEnvironment": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the environment.
  * dtlEnvironment **required** [DtlEnvironmentFragment](#dtlenvironmentfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [DtlEnvironment](#dtlenvironment)

### Environments_CreateOrUpdate
Create or replace an existing environment. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Environments_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "dtlEnvironment": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the environment.
  * dtlEnvironment **required** [DtlEnvironment](#dtlenvironment)
  * api-version **required** `string`: Client API version.

#### Output
* output [DtlEnvironment](#dtlenvironment)

### Secrets_List
List secrets in a given user profile.


```js
azure_devtestlabs_dtl.Secrets_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=value)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [SecretList](#secretlist)

### Secrets_Delete
Delete secret.


```js
azure_devtestlabs_dtl.Secrets_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the secret.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Secrets_Get
Get secret.


```js
azure_devtestlabs_dtl.Secrets_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the secret.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=value)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Secret](#secret)

### Secrets_Update
Allows modifying tags of secrets. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Secrets_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "secret": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the secret.
  * secret **required** [SecretFragment](#secretfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Secret](#secret)

### Secrets_CreateOrUpdate
Create or replace an existing secret. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Secrets_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "secret": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the secret.
  * secret **required** [Secret](#secret)
  * api-version **required** `string`: Client API version.

#### Output
* output [Secret](#secret)

### ServiceFabrics_List
List service fabrics in a given user profile.


```js
azure_devtestlabs_dtl.ServiceFabrics_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceFabricList](#servicefabriclist)

### ServiceFabrics_Delete
Delete service fabric. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.ServiceFabrics_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ServiceFabrics_Get
Get service fabric.


```js
azure_devtestlabs_dtl.ServiceFabrics_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceFabric](#servicefabric)

### ServiceFabrics_Update
Allows modifying tags of service fabrics. All other properties will be ignored.


```js
azure_devtestlabs_dtl.ServiceFabrics_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "serviceFabric": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * serviceFabric **required** [ServiceFabricFragment](#servicefabricfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceFabric](#servicefabric)

### ServiceFabrics_CreateOrUpdate
Create or replace an existing service fabric. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.ServiceFabrics_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "serviceFabric": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * serviceFabric **required** [ServiceFabric](#servicefabric)
  * api-version **required** `string`: Client API version.

#### Output
* output [ServiceFabric](#servicefabric)

### ServiceFabrics_ListApplicableSchedules
Lists the applicable start/stop schedules, if any.


```js
azure_devtestlabs_dtl.ServiceFabrics_ListApplicableSchedules({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * api-version **required** `string`: Client API version.

#### Output
* output [ApplicableSchedule](#applicableschedule)

### ServiceFabrics_Start
Start a service fabric. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.ServiceFabrics_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ServiceFabrics_Stop
Stop a service fabric This operation can take a while to complete.


```js
azure_devtestlabs_dtl.ServiceFabrics_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * name **required** `string`: The name of the service fabric.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ServiceFabricSchedules_List
List schedules in a given service fabric.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### ServiceFabricSchedules_Delete
Delete schedule.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### ServiceFabricSchedules_Get
Get schedule.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * name **required** `string`: The name of the schedule.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### ServiceFabricSchedules_Update
Allows modifying tags of schedules. All other properties will be ignored.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "name": "",
  "schedule": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [ScheduleFragment](#schedulefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### ServiceFabricSchedules_CreateOrUpdate
Create or replace an existing schedule.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "name": "",
  "schedule": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [Schedule](#schedule)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### ServiceFabricSchedules_Execute
Execute a schedule. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.ServiceFabricSchedules_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "userName": "",
  "serviceFabricName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * userName **required** `string`: The name of the user profile.
  * serviceFabricName **required** `string`: The name of the service fabric.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_List
List virtual machines in a given lab.


```js
azure_devtestlabs_dtl.VirtualMachines_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabVirtualMachineList](#labvirtualmachinelist)

### VirtualMachines_Delete
Delete virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Get
Get virtual machine.


```js
azure_devtestlabs_dtl.VirtualMachines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
  * api-version **required** `string`: Client API version.

#### Output
* output [LabVirtualMachine](#labvirtualmachine)

### VirtualMachines_Update
Allows modifying tags of virtual machines. All other properties will be ignored.


```js
azure_devtestlabs_dtl.VirtualMachines_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "labVirtualMachine": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * labVirtualMachine **required** [LabVirtualMachineFragment](#labvirtualmachinefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [LabVirtualMachine](#labvirtualmachine)

### VirtualMachines_CreateOrUpdate
Create or replace an existing virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "labVirtualMachine": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * labVirtualMachine **required** [LabVirtualMachine](#labvirtualmachine)
  * api-version **required** `string`: Client API version.

#### Output
* output [LabVirtualMachine](#labvirtualmachine)

### VirtualMachines_AddDataDisk
Attach a new or existing data disk to virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_AddDataDisk({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "dataDiskProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * dataDiskProperties **required** [DataDiskProperties](#datadiskproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_ApplyArtifacts
Apply artifacts to virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_ApplyArtifacts({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "applyArtifactsRequest": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * applyArtifactsRequest **required** [ApplyArtifactsRequest](#applyartifactsrequest)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Claim
Take ownership of an existing virtual machine This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Claim({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_DetachDataDisk
Detach the specified disk from the virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_DetachDataDisk({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "detachDataDiskProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * detachDataDiskProperties **required** [DetachDataDiskProperties](#detachdatadiskproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_GetRdpFileContents
Gets a string that represents the contents of the RDP file for the virtual machine


```js
azure_devtestlabs_dtl.VirtualMachines_GetRdpFileContents({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
* output [RdpConnection](#rdpconnection)

### VirtualMachines_ListApplicableSchedules
Lists the applicable start/stop schedules, if any.


```js
azure_devtestlabs_dtl.VirtualMachines_ListApplicableSchedules({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
* output [ApplicableSchedule](#applicableschedule)

### VirtualMachines_Redeploy
Redeploy a virtual machine This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Redeploy({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Resize
Resize Virtual Machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Resize({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "resizeLabVirtualMachineProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * resizeLabVirtualMachineProperties **required** [ResizeLabVirtualMachineProperties](#resizelabvirtualmachineproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Restart
Restart a virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Restart({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Start
Start a virtual machine. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Stop
Stop a virtual machine This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_TransferDisks
Transfers all data disks attached to the virtual machine to be owned by the current user. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_TransferDisks({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_UnClaim
Release ownership of an existing virtual machine This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachines_UnClaim({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachineSchedules_List
List schedules in a given virtual machine.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### VirtualMachineSchedules_Delete
Delete schedule.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachineSchedules_Get
Get schedule.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * name **required** `string`: The name of the schedule.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### VirtualMachineSchedules_Update
Allows modifying tags of schedules. All other properties will be ignored.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "name": "",
  "schedule": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [ScheduleFragment](#schedulefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### VirtualMachineSchedules_CreateOrUpdate
Create or replace an existing schedule.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "name": "",
  "schedule": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [Schedule](#schedule)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### VirtualMachineSchedules_Execute
Execute a schedule. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualMachineSchedules_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "virtualMachineName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * virtualMachineName **required** `string`: The name of the virtual machine.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualNetworks_List
List virtual networks in a given lab.


```js
azure_devtestlabs_dtl.VirtualNetworks_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=externalSubnets)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualNetworkList](#virtualnetworklist)

### VirtualNetworks_Delete
Delete virtual network. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualNetworks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual network.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualNetworks_Get
Get virtual network.


```js
azure_devtestlabs_dtl.VirtualNetworks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual network.
  * $expand `string`: Specify the $expand query. Example: 'properties($expand=externalSubnets)'
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_Update
Allows modifying tags of virtual networks. All other properties will be ignored.


```js
azure_devtestlabs_dtl.VirtualNetworks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "virtualNetwork": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual network.
  * virtualNetwork **required** [VirtualNetworkFragment](#virtualnetworkfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### VirtualNetworks_CreateOrUpdate
Create or replace an existing virtual network. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.VirtualNetworks_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "virtualNetwork": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * labName **required** `string`: The name of the lab.
  * name **required** `string`: The name of the virtual network.
  * virtualNetwork **required** [VirtualNetwork](#virtualnetwork)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### Labs_Delete
Delete lab. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_Get
Get lab.


```js
azure_devtestlabs_dtl.Labs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_Update
Allows modifying tags of labs. All other properties will be ignored.


```js
azure_devtestlabs_dtl.Labs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "lab": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * lab **required** [LabFragment](#labfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_CreateOrUpdate
Create or replace an existing lab. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "lab": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * lab **required** [Lab](#lab)
  * api-version **required** `string`: Client API version.

#### Output
* output [Lab](#lab)

### Labs_ClaimAnyVm
Claim a random claimable virtual machine in the lab. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_ClaimAnyVm({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_CreateEnvironment
Create virtual machines in a lab. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_CreateEnvironment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "labVirtualMachineCreationParameter": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * labVirtualMachineCreationParameter **required** [LabVirtualMachineCreationParameter](#labvirtualmachinecreationparameter)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_ExportResourceUsage
Exports the lab resource usage into a storage account This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_ExportResourceUsage({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "exportResourceUsageParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * exportResourceUsageParameters **required** [ExportResourceUsageParameters](#exportresourceusageparameters)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_GenerateUploadUri
Generate a URI for uploading custom disk images to a Lab.


```js
azure_devtestlabs_dtl.Labs_GenerateUploadUri({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "generateUploadUriParameter": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * generateUploadUriParameter **required** [GenerateUploadUriParameter](#generateuploaduriparameter)
  * api-version **required** `string`: Client API version.

#### Output
* output [GenerateUploadUriResponse](#generateuploaduriresponse)

### Labs_ImportVirtualMachine
Import a virtual machine into a different lab. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.Labs_ImportVirtualMachine({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "importLabVirtualMachineRequest": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * importLabVirtualMachineRequest **required** [ImportLabVirtualMachineRequest](#importlabvirtualmachinerequest)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Labs_ListVhds
List disk images available for custom image creation.


```js
azure_devtestlabs_dtl.Labs_ListVhds({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the lab.
  * api-version **required** `string`: Client API version.

#### Output
* output [LabVhdList](#labvhdlist)

### GlobalSchedules_ListByResourceGroup
List schedules in a resource group.


```js
azure_devtestlabs_dtl.GlobalSchedules_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation. Example: '$filter=contains(name,'myName')
  * $top `integer`: The maximum number of resources to return from the operation. Example: '$top=10'
  * $orderby `string`: The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
  * api-version **required** `string`: Client API version.

#### Output
* output [ScheduleList](#schedulelist)

### GlobalSchedules_Delete
Delete schedule.


```js
azure_devtestlabs_dtl.GlobalSchedules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GlobalSchedules_Get
Get schedule.


```js
azure_devtestlabs_dtl.GlobalSchedules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### GlobalSchedules_Update
Allows modifying tags of schedules. All other properties will be ignored.


```js
azure_devtestlabs_dtl.GlobalSchedules_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "schedule": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [ScheduleFragment](#schedulefragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### GlobalSchedules_CreateOrUpdate
Create or replace an existing schedule.


```js
azure_devtestlabs_dtl.GlobalSchedules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "schedule": {
    "properties": {}
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * schedule **required** [Schedule](#schedule)
  * api-version **required** `string`: Client API version.

#### Output
* output [Schedule](#schedule)

### GlobalSchedules_Execute
Execute a schedule. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.GlobalSchedules_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### GlobalSchedules_Retarget
Updates a schedule's target resource Id. This operation can take a while to complete.


```js
azure_devtestlabs_dtl.GlobalSchedules_Retarget({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "retargetScheduleProperties": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the schedule.
  * retargetScheduleProperties **required** [RetargetScheduleProperties](#retargetscheduleproperties)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*



## Definitions

### ApplicableSchedule
* ApplicableSchedule `object`: Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
  * properties **required** [ApplicableScheduleProperties](#applicablescheduleproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ApplicableScheduleFragment
* ApplicableScheduleFragment `object`: Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
  * properties [ApplicableSchedulePropertiesFragment](#applicableschedulepropertiesfragment)
  * tags `object`: The tags of the resource.

### ApplicableScheduleProperties
* ApplicableScheduleProperties `object`: Properties of a schedules applicable to a virtual machine.
  * labVmsShutdown [Schedule](#schedule)
  * labVmsStartup [Schedule](#schedule)

### ApplicableSchedulePropertiesFragment
* ApplicableSchedulePropertiesFragment `object`: Properties of a schedules applicable to a virtual machine.
  * labVmsShutdown [ScheduleFragment](#schedulefragment)
  * labVmsStartup [ScheduleFragment](#schedulefragment)

### ApplyArtifactsRequest
* ApplyArtifactsRequest `object`: Request body for applying artifacts to a virtual machine.
  * artifacts `array`: The list of artifacts to apply.
    * items [ArtifactInstallProperties](#artifactinstallproperties)

### ArmTemplate
* ArmTemplate `object`: An Azure Resource Manager template.
  * properties **required** [ArmTemplateProperties](#armtemplateproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ArmTemplateInfo
* ArmTemplateInfo `object`: Information about a generated ARM template.
  * parameters `object`: The parameters of the ARM template.
  * template `object`: The template's contents.

### ArmTemplateList
* ArmTemplateList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ArmTemplate](#armtemplate)

### ArmTemplateParameterProperties
* ArmTemplateParameterProperties `object`: Properties of an Azure Resource Manager template parameter.
  * name `string`: The name of the template parameter.
  * value `string`: The value of the template parameter.

### ArmTemplateParameterPropertiesFragment
* ArmTemplateParameterPropertiesFragment `object`: Properties of an Azure Resource Manager template parameter.
  * name `string`: The name of the template parameter.
  * value `string`: The value of the template parameter.

### ArmTemplateProperties
* ArmTemplateProperties `object`: Properties of an Azure Resource Manager template.
  * contents `object`: The contents of the ARM template.
  * createdDate `string`: The creation date of the armTemplate.
  * description `string`: The description of the ARM template.
  * displayName `string`: The display name of the ARM template.
  * enabled `boolean`: Whether or not ARM template is enabled for use by lab user.
  * icon `string`: The URI to the icon of the ARM template.
  * parametersValueFilesInfo `array`: File name and parameter values information from all azuredeploy.*.parameters.json for the ARM template.
    * items [ParametersValueFileInfo](#parametersvaluefileinfo)
  * publisher `string`: The publisher of the ARM template.

### Artifact
* Artifact `object`: An artifact.
  * properties **required** [ArtifactProperties](#artifactproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ArtifactDeploymentStatusProperties
* ArtifactDeploymentStatusProperties `object`: Properties of an artifact deployment.
  * artifactsApplied `integer`: The total count of the artifacts that were successfully applied.
  * deploymentStatus `string`: The deployment status of the artifact.
  * totalArtifacts `integer`: The total count of the artifacts that were tentatively applied.

### ArtifactDeploymentStatusPropertiesFragment
* ArtifactDeploymentStatusPropertiesFragment `object`: Properties of an artifact deployment.
  * artifactsApplied `integer`: The total count of the artifacts that were successfully applied.
  * deploymentStatus `string`: The deployment status of the artifact.
  * totalArtifacts `integer`: The total count of the artifacts that were tentatively applied.

### ArtifactInstallProperties
* ArtifactInstallProperties `object`: Properties of an artifact.
  * artifactId `string`: The artifact's identifier.
  * artifactTitle `string`: The artifact's title.
  * deploymentStatusMessage `string`: The status message from the deployment.
  * installTime `string`: The time that the artifact starts to install on the virtual machine.
  * parameters `array`: The parameters of the artifact.
    * items [ArtifactParameterProperties](#artifactparameterproperties)
  * status `string`: The status of the artifact.
  * vmExtensionStatusMessage `string`: The status message from the virtual machine extension.

### ArtifactInstallPropertiesFragment
* ArtifactInstallPropertiesFragment `object`: Properties of an artifact.
  * artifactId `string`: The artifact's identifier.
  * artifactTitle `string`: The artifact's title.
  * deploymentStatusMessage `string`: The status message from the deployment.
  * installTime `string`: The time that the artifact starts to install on the virtual machine.
  * parameters `array`: The parameters of the artifact.
    * items [ArtifactParameterPropertiesFragment](#artifactparameterpropertiesfragment)
  * status `string`: The status of the artifact.
  * vmExtensionStatusMessage `string`: The status message from the virtual machine extension.

### ArtifactList
* ArtifactList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Artifact](#artifact)

### ArtifactParameterProperties
* ArtifactParameterProperties `object`: Properties of an artifact parameter.
  * name `string`: The name of the artifact parameter.
  * value `string`: The value of the artifact parameter.

### ArtifactParameterPropertiesFragment
* ArtifactParameterPropertiesFragment `object`: Properties of an artifact parameter.
  * name `string`: The name of the artifact parameter.
  * value `string`: The value of the artifact parameter.

### ArtifactProperties
* ArtifactProperties `object`: Properties of an artifact.
  * createdDate `string`: The artifact's creation date.
  * description `string`: The artifact's description.
  * filePath `string`: The file path to the artifact.
  * icon `string`: The URI to the artifact icon.
  * parameters `object`: The artifact's parameters.
  * publisher `string`: The artifact's publisher.
  * targetOsType `string`: The artifact's target OS.
  * title `string`: The artifact's title.

### ArtifactSource
* ArtifactSource `object`: Properties of an artifact source.
  * properties **required** [ArtifactSourceProperties](#artifactsourceproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ArtifactSourceFragment
* ArtifactSourceFragment `object`: Properties of an artifact source.
  * properties [ArtifactSourcePropertiesFragment](#artifactsourcepropertiesfragment)
  * tags `object`: The tags of the resource.

### ArtifactSourceList
* ArtifactSourceList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ArtifactSource](#artifactsource)

### ArtifactSourceProperties
* ArtifactSourceProperties `object`: Properties of an artifact source.
  * armTemplateFolderPath `string`: The folder containing Azure Resource Manager templates.
  * branchRef `string`: The artifact source's branch reference.
  * createdDate `string`: The artifact source's creation date.
  * displayName `string`: The artifact source's display name.
  * folderPath `string`: The folder containing artifacts.
  * provisioningState `string`: The provisioning status of the resource.
  * securityToken `string`: The security token to authenticate to the artifact source.
  * sourceType `string` (values: VsoGit, GitHub): The artifact source's type.
  * status `string` (values: Enabled, Disabled): Indicates if the artifact source is enabled (values: Enabled, Disabled).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * uri `string`: The artifact source's URI.

### ArtifactSourcePropertiesFragment
* ArtifactSourcePropertiesFragment `object`: Properties of an artifact source.
  * armTemplateFolderPath `string`: The folder containing Azure Resource Manager templates.
  * branchRef `string`: The artifact source's branch reference.
  * displayName `string`: The artifact source's display name.
  * folderPath `string`: The folder containing artifacts.
  * securityToken `string`: The security token to authenticate to the artifact source.
  * sourceType `string` (values: VsoGit, GitHub): The artifact source's type.
  * status `string` (values: Enabled, Disabled): Indicates if the artifact source is enabled (values: Enabled, Disabled).
  * uri `string`: The artifact source's URI.

### AttachDiskProperties
* AttachDiskProperties `object`: Properties of the disk to attach.
  * leasedByLabVmId `string`: The resource ID of the Lab virtual machine to which the disk is attached.

### AttachNewDataDiskOptions
* AttachNewDataDiskOptions `object`: Properties to attach new disk to the Virtual Machine.
  * diskName `string`: The name of the disk to be attached.
  * diskSizeGiB `integer`: Size of the disk to be attached in GibiBytes.
  * diskType `string` (values: Standard, Premium, StandardSSD): The storage type for the disk (i.e. Standard, Premium).

### AttachNewDataDiskOptionsFragment
* AttachNewDataDiskOptionsFragment `object`: Properties to attach new disk to the Virtual Machine.
  * diskName `string`: The name of the disk to be attached.
  * diskSizeGiB `integer`: Size of the disk to be attached in GibiBytes.
  * diskType `string` (values: Standard, Premium, StandardSSD): The storage type for the disk (i.e. Standard, Premium).

### BulkCreationParameters
* BulkCreationParameters `object`: Parameters for creating multiple virtual machines as a single action.
  * instanceCount `integer`: The number of virtual machine instances to create.

### BulkCreationParametersFragment
* BulkCreationParametersFragment `object`: Parameters for creating multiple virtual machines as a single action.
  * instanceCount `integer`: The number of virtual machine instances to create.

### CloudError
* CloudError `object`: Error from a REST request.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Body of an error from a REST request.
  * code `string`: The error code.
  * details `array`: Inner errors.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: The error message.
  * target `string`: The error target.

### ComputeDataDisk
* ComputeDataDisk `object`: A data disks attached to a virtual machine.
  * diskSizeGiB `integer`: Gets data disk size in GiB.
  * diskUri `string`: When backed by a blob, the URI of underlying blob.
  * managedDiskId `string`: When backed by managed disk, this is the ID of the compute disk resource.
  * name `string`: Gets data disk name.

### ComputeDataDiskFragment
* ComputeDataDiskFragment `object`: A data disks attached to a virtual machine.
  * diskSizeGiB `integer`: Gets data disk size in GiB.
  * diskUri `string`: When backed by a blob, the URI of underlying blob.
  * managedDiskId `string`: When backed by managed disk, this is the ID of the compute disk resource.
  * name `string`: Gets data disk name.

### ComputeVmInstanceViewStatus
* ComputeVmInstanceViewStatus `object`: Status information about a virtual machine.
  * code `string`: Gets the status Code.
  * displayStatus `string`: Gets the short localizable label for the status.
  * message `string`: Gets the message associated with the status.

### ComputeVmInstanceViewStatusFragment
* ComputeVmInstanceViewStatusFragment `object`: Status information about a virtual machine.
  * code `string`: Gets the status Code.
  * displayStatus `string`: Gets the short localizable label for the status.
  * message `string`: Gets the message associated with the status.

### ComputeVmProperties
* ComputeVmProperties `object`: Properties of a virtual machine returned by the Microsoft.Compute API.
  * dataDiskIds `array`: Gets data disks blob uri for the virtual machine.
    * items `string`
  * dataDisks `array`: Gets all data disks attached to the virtual machine.
    * items [ComputeDataDisk](#computedatadisk)
  * networkInterfaceId `string`: Gets the network interface ID of the virtual machine.
  * osDiskId `string`: Gets OS disk blob uri for the virtual machine.
  * osType `string`: Gets the OS type of the virtual machine.
  * statuses `array`: Gets the statuses of the virtual machine.
    * items [ComputeVmInstanceViewStatus](#computevminstanceviewstatus)
  * vmSize `string`: Gets the size of the virtual machine.

### ComputeVmPropertiesFragment
* ComputeVmPropertiesFragment `object`: Properties of a virtual machine returned by the Microsoft.Compute API.
  * dataDiskIds `array`: Gets data disks blob uri for the virtual machine.
    * items `string`
  * dataDisks `array`: Gets all data disks attached to the virtual machine.
    * items [ComputeDataDiskFragment](#computedatadiskfragment)
  * networkInterfaceId `string`: Gets the network interface ID of the virtual machine.
  * osDiskId `string`: Gets OS disk blob uri for the virtual machine.
  * osType `string`: Gets the OS type of the virtual machine.
  * statuses `array`: Gets the statuses of the virtual machine.
    * items [ComputeVmInstanceViewStatusFragment](#computevminstanceviewstatusfragment)
  * vmSize `string`: Gets the size of the virtual machine.

### CostThresholdProperties
* CostThresholdProperties `object`: Properties of a cost threshold item.
  * displayOnChart `string` (values: Enabled, Disabled): Indicates whether this threshold will be displayed on cost charts.
  * notificationSent `string`: Indicates the datetime when notifications were last sent for this threshold.
  * percentageThreshold [PercentageCostThresholdProperties](#percentagecostthresholdproperties)
  * sendNotificationWhenExceeded `string` (values: Enabled, Disabled): Indicates whether notifications will be sent when this threshold is exceeded.
  * thresholdId `string`: The ID of the cost threshold item.

### CustomImage
* CustomImage `object`: A custom image.
  * properties **required** [CustomImageProperties](#customimageproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### CustomImageFragment
* CustomImageFragment `object`: A custom image.
  * properties [CustomImagePropertiesFragment](#customimagepropertiesfragment)
  * tags `object`: The tags of the resource.

### CustomImageList
* CustomImageList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [CustomImage](#customimage)

### CustomImageProperties
* CustomImageProperties `object`: Properties of a custom image.
  * author `string`: The author of the custom image.
  * creationDate `string`: The creation date of the custom image.
  * customImagePlan [CustomImagePropertiesFromPlan](#customimagepropertiesfromplan)
  * dataDiskStorageInfo `array`: Storage information about the data disks present in the custom image
    * items [DataDiskStorageTypeInfo](#datadiskstoragetypeinfo)
  * description `string`: The description of the custom image.
  * isPlanAuthorized `boolean`: Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
  * managedImageId `string`: The Managed Image Id backing the custom image.
  * managedSnapshotId `string`: The Managed Snapshot Id backing the custom image.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * vhd [CustomImagePropertiesCustom](#customimagepropertiescustom)
  * vm [CustomImagePropertiesFromVm](#customimagepropertiesfromvm)

### CustomImagePropertiesCustom
* CustomImagePropertiesCustom `object`: Properties for creating a custom image from a VHD.
  * imageName `string`: The image name.
  * osType **required** `string` (values: Windows, Linux, None): The OS type of the custom image (i.e. Windows, Linux)
  * sysPrep `boolean`: Indicates whether sysprep has been run on the VHD.

### CustomImagePropertiesCustomFragment
* CustomImagePropertiesCustomFragment `object`: Properties for creating a custom image from a VHD.
  * imageName `string`: The image name.
  * osType `string` (values: Windows, Linux, None): The OS type of the custom image (i.e. Windows, Linux)
  * sysPrep `boolean`: Indicates whether sysprep has been run on the VHD.

### CustomImagePropertiesFragment
* CustomImagePropertiesFragment `object`: Properties of a custom image.
  * author `string`: The author of the custom image.
  * customImagePlan [CustomImagePropertiesFromPlanFragment](#customimagepropertiesfromplanfragment)
  * dataDiskStorageInfo `array`: Storage information about the data disks present in the custom image
    * items [DataDiskStorageTypeInfoFragment](#datadiskstoragetypeinfofragment)
  * description `string`: The description of the custom image.
  * isPlanAuthorized `boolean`: Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
  * managedImageId `string`: The Managed Image Id backing the custom image.
  * managedSnapshotId `string`: The Managed Snapshot Id backing the custom image.
  * vhd [CustomImagePropertiesCustomFragment](#customimagepropertiescustomfragment)
  * vm [CustomImagePropertiesFromVmFragment](#customimagepropertiesfromvmfragment)

### CustomImagePropertiesFromPlan
* CustomImagePropertiesFromPlan `object`: Properties for plan on a custom image.
  * id `string`: The id of the plan, equivalent to name of the plan
  * offer `string`: The offer for the plan from the marketplace image the custom image is derived from
  * publisher `string`: The publisher for the plan from the marketplace image the custom image is derived from

### CustomImagePropertiesFromPlanFragment
* CustomImagePropertiesFromPlanFragment `object`: Properties for plan on a custom image.
  * id `string`: The id of the plan, equivalent to name of the plan
  * offer `string`: The offer for the plan from the marketplace image the custom image is derived from
  * publisher `string`: The publisher for the plan from the marketplace image the custom image is derived from

### CustomImagePropertiesFromVm
* CustomImagePropertiesFromVm `object`: Properties for creating a custom image from a virtual machine.
  * linuxOsInfo [LinuxOsInfo](#linuxosinfo)
  * sourceVmId `string`: The source vm identifier.
  * windowsOsInfo [WindowsOsInfo](#windowsosinfo)

### CustomImagePropertiesFromVmFragment
* CustomImagePropertiesFromVmFragment `object`: Properties for creating a custom image from a virtual machine.
  * linuxOsInfo [LinuxOsInfoFragment](#linuxosinfofragment)
  * sourceVmId `string`: The source vm identifier.
  * windowsOsInfo [WindowsOsInfoFragment](#windowsosinfofragment)

### DataDiskProperties
* DataDiskProperties `object`: Request body for adding a new or existing data disk to a virtual machine.
  * attachNewDataDiskOptions [AttachNewDataDiskOptions](#attachnewdatadiskoptions)
  * existingLabDiskId `string`: Specifies the existing lab disk id to attach to virtual machine.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).

### DataDiskPropertiesFragment
* DataDiskPropertiesFragment `object`: Request body for adding a new or existing data disk to a virtual machine.
  * attachNewDataDiskOptions [AttachNewDataDiskOptionsFragment](#attachnewdatadiskoptionsfragment)
  * existingLabDiskId `string`: Specifies the existing lab disk id to attach to virtual machine.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).

### DataDiskStorageTypeInfo
* DataDiskStorageTypeInfo `object`: Storage information about the data disks present in the custom image
  * lun `string`: Disk Lun
  * storageType `string` (values: Standard, Premium, StandardSSD): Disk Storage Type

### DataDiskStorageTypeInfoFragment
* DataDiskStorageTypeInfoFragment `object`: Storage information about the data disks present in the custom image
  * lun `string`: Disk Lun
  * storageType `string` (values: Standard, Premium, StandardSSD): Disk Storage Type

### DayDetails
* DayDetails `object`: Properties of a daily schedule.
  * time `string`: The time of day the schedule will occur.

### DayDetailsFragment
* DayDetailsFragment `object`: Properties of a daily schedule.
  * time `string`: The time of day the schedule will occur.

### DetachDataDiskProperties
* DetachDataDiskProperties `object`: Request body for detaching data disk from a virtual machine.
  * existingLabDiskId `string`: Specifies the disk resource ID to detach from virtual machine.

### DetachDiskProperties
* DetachDiskProperties `object`: Properties of the disk to detach.
  * leasedByLabVmId `string`: The resource ID of the Lab VM to which the disk is attached.

### Disk
* Disk `object`: A Disk.
  * properties **required** [DiskProperties](#diskproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### DiskFragment
* DiskFragment `object`: A Disk.
  * properties [DiskPropertiesFragment](#diskpropertiesfragment)
  * tags `object`: The tags of the resource.

### DiskList
* DiskList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Disk](#disk)

### DiskProperties
* DiskProperties `object`: Properties of a disk.
  * createdDate `string`: The creation date of the disk.
  * diskBlobName `string`: When backed by a blob, the name of the VHD blob without extension.
  * diskSizeGiB `integer`: The size of the disk in GibiBytes.
  * diskType `string` (values: Standard, Premium, StandardSSD): The storage type for the disk (i.e. Standard, Premium).
  * diskUri `string`: When backed by a blob, the URI of underlying blob.
  * hostCaching `string`: The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
  * leasedByLabVmId `string`: The resource ID of the VM to which this disk is leased.
  * managedDiskId `string`: When backed by managed disk, this is the ID of the compute disk resource.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### DiskPropertiesFragment
* DiskPropertiesFragment `object`: Properties of a disk.
  * diskBlobName `string`: When backed by a blob, the name of the VHD blob without extension.
  * diskSizeGiB `integer`: The size of the disk in GibiBytes.
  * diskType `string` (values: Standard, Premium, StandardSSD): The storage type for the disk (i.e. Standard, Premium).
  * diskUri `string`: When backed by a blob, the URI of underlying blob.
  * hostCaching `string`: The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
  * leasedByLabVmId `string`: The resource ID of the VM to which this disk is leased.
  * managedDiskId `string`: When backed by managed disk, this is the ID of the compute disk resource.

### DtlEnvironment
* DtlEnvironment `object`: An environment, which is essentially an ARM template deployment.
  * properties **required** [EnvironmentProperties](#environmentproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### DtlEnvironmentFragment
* DtlEnvironmentFragment `object`: An environment, which is essentially an ARM template deployment.
  * properties [EnvironmentPropertiesFragment](#environmentpropertiesfragment)
  * tags `object`: The tags of the resource.

### DtlEnvironmentList
* DtlEnvironmentList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [DtlEnvironment](#dtlenvironment)

### EnvironmentDeploymentProperties
* EnvironmentDeploymentProperties `object`: Properties of an environment deployment.
  * armTemplateId `string`: The Azure Resource Manager template's identifier.
  * parameters `array`: The parameters of the Azure Resource Manager template.
    * items [ArmTemplateParameterProperties](#armtemplateparameterproperties)

### EnvironmentDeploymentPropertiesFragment
* EnvironmentDeploymentPropertiesFragment `object`: Properties of an environment deployment.
  * armTemplateId `string`: The Azure Resource Manager template's identifier.
  * parameters `array`: The parameters of the Azure Resource Manager template.
    * items [ArmTemplateParameterPropertiesFragment](#armtemplateparameterpropertiesfragment)

### EnvironmentProperties
* EnvironmentProperties `object`: Properties of an environment.
  * armTemplateDisplayName `string`: The display name of the Azure Resource Manager template that produced the environment.
  * createdByUser `string`: The creator of the environment.
  * deploymentProperties [EnvironmentDeploymentProperties](#environmentdeploymentproperties)
  * provisioningState `string`: The provisioning status of the resource.
  * resourceGroupId `string`: The identifier of the resource group containing the environment's resources.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EnvironmentPropertiesFragment
* EnvironmentPropertiesFragment `object`: Properties of an environment.
  * armTemplateDisplayName `string`: The display name of the Azure Resource Manager template that produced the environment.
  * deploymentProperties [EnvironmentDeploymentPropertiesFragment](#environmentdeploymentpropertiesfragment)

### EvaluatePoliciesProperties
* EvaluatePoliciesProperties `object`: Properties for evaluating a policy set.
  * factData `string`: The fact data.
  * factName `string`: The fact name.
  * userObjectId `string`: The user for which policies will be evaluated
  * valueOffset `string`: The value offset.

### EvaluatePoliciesRequest
* EvaluatePoliciesRequest `object`: Request body for evaluating a policy set.
  * policies `array`: Policies to evaluate.
    * items [EvaluatePoliciesProperties](#evaluatepoliciesproperties)

### EvaluatePoliciesResponse
* EvaluatePoliciesResponse `object`: Response body for evaluating a policy set.
  * results `array`: Results of evaluating a policy set.
    * items [PolicySetResult](#policysetresult)

### Event
* Event `object`: An event to be notified for.
  * eventName `string` (values: AutoShutdown, Cost): The event type for which this notification is enabled (i.e. AutoShutdown, Cost)

### EventFragment
* EventFragment `object`: An event to be notified for.
  * eventName `string` (values: AutoShutdown, Cost): The event type for which this notification is enabled (i.e. AutoShutdown, Cost)

### ExportResourceUsageParameters
* ExportResourceUsageParameters `object`: The parameters of the export operation.
  * blobStorageAbsoluteSasUri `string`: The blob storage absolute sas uri with write permission to the container which the usage data needs to be uploaded to.
  * usageStartDate `string`: The start time of the usage. If not provided, usage will be reported since the beginning of data collection.

### ExternalSubnet
* ExternalSubnet `object`: Subnet information as returned by the Microsoft.Network API.
  * id `string`: Gets or sets the identifier.
  * name `string`: Gets or sets the name.

### ExternalSubnetFragment
* ExternalSubnetFragment `object`: Subnet information as returned by the Microsoft.Network API.
  * id `string`: Gets or sets the identifier.
  * name `string`: Gets or sets the name.

### Formula
* Formula `object`: A formula for creating a VM, specifying an image base and other parameters
  * properties **required** [FormulaProperties](#formulaproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### FormulaFragment
* FormulaFragment `object`: A formula for creating a VM, specifying an image base and other parameters
  * properties [FormulaPropertiesFragment](#formulapropertiesfragment)
  * tags `object`: The tags of the resource.

### FormulaList
* FormulaList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Formula](#formula)

### FormulaProperties
* FormulaProperties `object`: Properties of a formula.
  * author `string`: The author of the formula.
  * creationDate `string`: The creation date of the formula.
  * description `string`: The description of the formula.
  * formulaContent [LabVirtualMachineCreationParameter](#labvirtualmachinecreationparameter)
  * osType `string`: The OS type of the formula.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * vm [FormulaPropertiesFromVm](#formulapropertiesfromvm)

### FormulaPropertiesFragment
* FormulaPropertiesFragment `object`: Properties of a formula.
  * author `string`: The author of the formula.
  * description `string`: The description of the formula.
  * formulaContent [LabVirtualMachineCreationParameterFragment](#labvirtualmachinecreationparameterfragment)
  * osType `string`: The OS type of the formula.
  * vm [FormulaPropertiesFromVmFragment](#formulapropertiesfromvmfragment)

### FormulaPropertiesFromVm
* FormulaPropertiesFromVm `object`: Information about a VM from which a formula is to be created.
  * labVmId `string`: The identifier of the VM from which a formula is to be created.

### FormulaPropertiesFromVmFragment
* FormulaPropertiesFromVmFragment `object`: Information about a VM from which a formula is to be created.
  * labVmId `string`: The identifier of the VM from which a formula is to be created.

### GalleryImage
* GalleryImage `object`: A gallery image.
  * properties **required** [GalleryImageProperties](#galleryimageproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### GalleryImageList
* GalleryImageList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [GalleryImage](#galleryimage)

### GalleryImageProperties
* GalleryImageProperties `object`: Properties of a gallery image.
  * author `string`: The author of the gallery image.
  * createdDate `string`: The creation date of the gallery image.
  * description `string`: The description of the gallery image.
  * enabled `boolean`: Indicates whether this gallery image is enabled.
  * icon `string`: The icon of the gallery image.
  * imageReference [GalleryImageReference](#galleryimagereference)
  * isPlanAuthorized `boolean`: Indicates if the plan has been authorized for programmatic deployment.
  * planId `string`: The third party plan that applies to this image

### GalleryImageReference
* GalleryImageReference `object`: The reference information for an Azure Marketplace image.
  * offer `string`: The offer of the gallery image.
  * osType `string`: The OS type of the gallery image.
  * publisher `string`: The publisher of the gallery image.
  * sku `string`: The SKU of the gallery image.
  * version `string`: The version of the gallery image.

### GalleryImageReferenceFragment
* GalleryImageReferenceFragment `object`: The reference information for an Azure Marketplace image.
  * offer `string`: The offer of the gallery image.
  * osType `string`: The OS type of the gallery image.
  * publisher `string`: The publisher of the gallery image.
  * sku `string`: The SKU of the gallery image.
  * version `string`: The version of the gallery image.

### GenerateArmTemplateRequest
* GenerateArmTemplateRequest `object`: Parameters for generating an ARM template for deploying artifacts.
  * fileUploadOptions `string` (values: UploadFilesAndGenerateSasTokens, None): Options for uploading the files for the artifact. UploadFilesAndGenerateSasTokens is the default value.
  * location `string`: The location of the virtual machine.
  * parameters `array`: The parameters of the ARM template.
    * items [ParameterInfo](#parameterinfo)
  * virtualMachineName `string`: The resource name of the virtual machine.

### GenerateUploadUriParameter
* GenerateUploadUriParameter `object`: Properties for generating an upload URI.
  * blobName `string`: The blob name of the upload URI.

### GenerateUploadUriResponse
* GenerateUploadUriResponse `object`: Response body for generating an upload URI.
  * uploadUri `string`: The upload URI for the VHD.

### HourDetails
* HourDetails `object`: Properties of an hourly schedule.
  * minute `integer`: Minutes of the hour the schedule will run.

### HourDetailsFragment
* HourDetailsFragment `object`: Properties of an hourly schedule.
  * minute `integer`: Minutes of the hour the schedule will run.

### IdentityProperties
* IdentityProperties `object`: Properties of a managed identity
  * clientSecretUrl `string`: The client secret URL of the identity.
  * principalId `string`: The principal id of resource identity.
  * tenantId `string`: The tenant identifier of resource.
  * type `string`: Managed identity.

### ImportLabVirtualMachineRequest
* ImportLabVirtualMachineRequest `object`: This represents the payload required to import a virtual machine from a different lab into the current one
  * destinationVirtualMachineName `string`: The name of the virtual machine in the destination lab
  * sourceVirtualMachineResourceId `string`: The full resource ID of the virtual machine to be imported.

### InboundNatRule
* InboundNatRule `object`: A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer.
  * backendPort `integer`: The port to which the external traffic will be redirected.
  * frontendPort `integer`: The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
  * transportProtocol `string` (values: Tcp, Udp): The transport protocol for the endpoint.

### InboundNatRuleFragment
* InboundNatRuleFragment `object`: A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer.
  * backendPort `integer`: The port to which the external traffic will be redirected.
  * frontendPort `integer`: The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically.
  * transportProtocol `string` (values: Tcp, Udp): The transport protocol for the endpoint.

### Lab
* Lab `object`: A lab.
  * properties [LabProperties](#labproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabAnnouncementProperties
* LabAnnouncementProperties `object`: Properties of a lab's announcement banner
  * enabled `string` (values: Enabled, Disabled): Is the lab announcement active/enabled at this time?
  * expirationDate `string`: The time at which the announcement expires (null for never)
  * expired `boolean`: Has this announcement expired?
  * markdown `string`: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
  * provisioningState `string`: The provisioning status of the resource.
  * title `string`: The plain text title for the lab announcement
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### LabAnnouncementPropertiesFragment
* LabAnnouncementPropertiesFragment `object`: Properties of a lab's announcement banner
  * enabled `string` (values: Enabled, Disabled): Is the lab announcement active/enabled at this time?
  * expirationDate `string`: The time at which the announcement expires (null for never)
  * expired `boolean`: Has this announcement expired?
  * markdown `string`: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.
  * title `string`: The plain text title for the lab announcement

### LabCost
* LabCost `object`: A cost item.
  * properties **required** [LabCostProperties](#labcostproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabCostDetailsProperties
* LabCostDetailsProperties `object`: The properties of a lab cost item.
  * cost `number`: The cost component of the cost item.
  * costType `string` (values: Unavailable, Reported, Projected): The type of the cost.
  * date `string`: The date of the cost item.

### LabCostProperties
* LabCostProperties `object`: Properties of a cost item.
  * createdDate `string`: The creation date of the cost.
  * currencyCode `string`: The currency code of the cost.
  * endDateTime `string`: The end time of the cost data.
  * labCostDetails `array`: The lab cost details component of the cost data.
    * items [LabCostDetailsProperties](#labcostdetailsproperties)
  * labCostSummary [LabCostSummaryProperties](#labcostsummaryproperties)
  * provisioningState `string`: The provisioning status of the resource.
  * resourceCosts `array`: The resource cost component of the cost data.
    * items [LabResourceCostProperties](#labresourcecostproperties)
  * startDateTime `string`: The start time of the cost data.
  * targetCost [TargetCostProperties](#targetcostproperties)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### LabCostSummaryProperties
* LabCostSummaryProperties `object`: The properties of the cost summary.
  * estimatedLabCost `number`: The cost component of the cost item.

### LabFragment
* LabFragment `object`: A lab.
  * properties [LabPropertiesFragment](#labpropertiesfragment)
  * tags `object`: The tags of the resource.

### LabList
* LabList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Lab](#lab)

### LabProperties
* LabProperties `object`: Properties of a lab.
  * announcement [LabAnnouncementProperties](#labannouncementproperties)
  * artifactsStorageAccount `string`: The lab's artifact storage account.
  * createdDate `string`: The creation date of the lab.
  * defaultPremiumStorageAccount `string`: The lab's default premium storage account.
  * defaultStorageAccount `string`: The lab's default storage account.
  * environmentPermission `string` (values: Reader, Contributor): The access rights to be granted to the user when provisioning an environment
  * extendedProperties `object`: Extended properties of the lab used for experimental features
  * labStorageType `string` (values: Standard, Premium, StandardSSD): Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
  * loadBalancerId `string`: The load balancer used to for lab VMs that use shared IP address.
  * mandatoryArtifactsResourceIdsLinux `array`: The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
    * items `string`
  * mandatoryArtifactsResourceIdsWindows `array`: The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
    * items `string`
  * networkSecurityGroupId `string`: The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
  * premiumDataDiskStorageAccount `string`: The lab's premium data disk storage account.
  * premiumDataDisks `string` (values: Disabled, Enabled): The setting to enable usage of premium data disks.
  * provisioningState `string`: The provisioning status of the resource.
  * publicIpId `string`: The public IP address for the lab's load balancer.
  * support [LabSupportProperties](#labsupportproperties)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * vaultName `string`: The lab's Key vault.
  * vmCreationResourceGroup `string`: The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.

### LabPropertiesFragment
* LabPropertiesFragment `object`: Properties of a lab.
  * announcement [LabAnnouncementPropertiesFragment](#labannouncementpropertiesfragment)
  * environmentPermission `string` (values: Reader, Contributor): The access rights to be granted to the user when provisioning an environment
  * extendedProperties `object`: Extended properties of the lab used for experimental features
  * labStorageType `string` (values: Standard, Premium, StandardSSD): Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
  * mandatoryArtifactsResourceIdsLinux `array`: The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
    * items `string`
  * mandatoryArtifactsResourceIdsWindows `array`: The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
    * items `string`
  * premiumDataDisks `string` (values: Disabled, Enabled): The setting to enable usage of premium data disks.
  * support [LabSupportPropertiesFragment](#labsupportpropertiesfragment)

### LabResourceCostProperties
* LabResourceCostProperties `object`: The properties of a resource cost item.
  * externalResourceId `string`: The ID of the external resource
  * resourceCost `number`: The cost component of the resource cost item.
  * resourceId `string`: The ID of the resource
  * resourceOwner `string`: The owner of the resource (ex. janedoe@microsoft.com)
  * resourcePricingTier `string`: The category of the resource (ex. Premium_LRS, Standard_DS1)
  * resourceStatus `string`: The status of the resource (ex. Active)
  * resourceType `string`: The logical resource type (ex. virtualmachine, storageaccount)
  * resourceUId `string`: The unique identifier of the resource.
  * resourcename `string`: The name of the resource.

### LabSupportProperties
* LabSupportProperties `object`: Properties of a lab's support banner
  * enabled `string` (values: Enabled, Disabled): Is the lab support banner active/enabled at this time?
  * markdown `string`: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.

### LabSupportPropertiesFragment
* LabSupportPropertiesFragment `object`: Properties of a lab's support banner
  * enabled `string` (values: Enabled, Disabled): Is the lab support banner active/enabled at this time?
  * markdown `string`: The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown.

### LabVhd
* LabVhd `object`: Properties of a VHD in the lab.
  * id `string`: The URI to the VHD.

### LabVhdList
* LabVhdList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [LabVhd](#labvhd)

### LabVirtualMachine
* LabVirtualMachine `object`: A virtual machine.
  * properties **required** [LabVirtualMachineProperties](#labvirtualmachineproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabVirtualMachineCreationParameter
* LabVirtualMachineCreationParameter `object`: Properties for creating a virtual machine.
  * location `string`: The location of the new virtual machine or environment
  * name `string`: The name of the virtual machine or environment
  * properties [LabVirtualMachineCreationParameterProperties](#labvirtualmachinecreationparameterproperties)
  * tags `object`: The tags of the resource.

### LabVirtualMachineCreationParameterFragment
* LabVirtualMachineCreationParameterFragment `object`: Properties for creating a virtual machine.
  * location `string`: The location of the new virtual machine or environment
  * name `string`: The name of the virtual machine or environment
  * properties [LabVirtualMachineCreationParameterPropertiesFragment](#labvirtualmachinecreationparameterpropertiesfragment)
  * tags `object`: The tags of the resource.

### LabVirtualMachineCreationParameterProperties
* LabVirtualMachineCreationParameterProperties `object`: Properties for virtual machine creation.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * artifactDeploymentStatus [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallProperties](#artifactinstallproperties)
  * bulkCreationParameters [BulkCreationParameters](#bulkcreationparameters)
  * computeId `string`: The resource identifier (Microsoft.Compute) of the virtual machine.
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * dataDiskParameters `array`: New or existing data disks to attach to the virtual machine after creation
    * items [DataDiskProperties](#datadiskproperties)
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReference](#galleryimagereference)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * networkInterface [NetworkInterfaceProperties](#networkinterfaceproperties)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * planId `string`: The id of the plan associated with the virtual machine image
  * scheduleParameters `array`: Virtual Machine schedules to be created
    * items [ScheduleCreationParameter](#schedulecreationparameter)
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage, FromSharedGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LabVirtualMachineCreationParameterPropertiesFragment
* LabVirtualMachineCreationParameterPropertiesFragment `object`: Properties for virtual machine creation.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * artifactDeploymentStatus [ArtifactDeploymentStatusPropertiesFragment](#artifactdeploymentstatuspropertiesfragment)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallPropertiesFragment](#artifactinstallpropertiesfragment)
  * bulkCreationParameters [BulkCreationParametersFragment](#bulkcreationparametersfragment)
  * computeId `string`: The resource identifier (Microsoft.Compute) of the virtual machine.
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * dataDiskParameters `array`: New or existing data disks to attach to the virtual machine after creation
    * items [DataDiskPropertiesFragment](#datadiskpropertiesfragment)
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReferenceFragment](#galleryimagereferencefragment)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * networkInterface [NetworkInterfacePropertiesFragment](#networkinterfacepropertiesfragment)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * planId `string`: The id of the plan associated with the virtual machine image
  * scheduleParameters `array`: Virtual Machine schedules to be created
    * items [ScheduleCreationParameterFragment](#schedulecreationparameterfragment)
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage, FromSharedGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LabVirtualMachineFragment
* LabVirtualMachineFragment `object`: A virtual machine.
  * properties [LabVirtualMachinePropertiesFragment](#labvirtualmachinepropertiesfragment)
  * tags `object`: The tags of the resource.

### LabVirtualMachineList
* LabVirtualMachineList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [LabVirtualMachine](#labvirtualmachine)

### LabVirtualMachineProperties
* LabVirtualMachineProperties `object`: Properties of a virtual machine.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * applicableSchedule [ApplicableSchedule](#applicableschedule)
  * artifactDeploymentStatus [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallProperties](#artifactinstallproperties)
  * computeId `string`: The resource identifier (Microsoft.Compute) of the virtual machine.
  * computeVm [ComputeVmProperties](#computevmproperties)
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * dataDiskParameters `array`: New or existing data disks to attach to the virtual machine after creation
    * items [DataDiskProperties](#datadiskproperties)
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReference](#galleryimagereference)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * networkInterface [NetworkInterfaceProperties](#networkinterfaceproperties)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * planId `string`: The id of the plan associated with the virtual machine image
  * provisioningState `string`: The provisioning status of the resource.
  * scheduleParameters `array`: Virtual Machine schedules to be created
    * items [ScheduleCreationParameter](#schedulecreationparameter)
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage, FromSharedGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LabVirtualMachinePropertiesFragment
* LabVirtualMachinePropertiesFragment `object`: Properties of a virtual machine.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * artifactDeploymentStatus [ArtifactDeploymentStatusPropertiesFragment](#artifactdeploymentstatuspropertiesfragment)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallPropertiesFragment](#artifactinstallpropertiesfragment)
  * computeId `string`: The resource identifier (Microsoft.Compute) of the virtual machine.
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * dataDiskParameters `array`: New or existing data disks to attach to the virtual machine after creation
    * items [DataDiskPropertiesFragment](#datadiskpropertiesfragment)
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReferenceFragment](#galleryimagereferencefragment)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * lastKnownPowerState `string`: Last known compute power state captured in DTL
  * networkInterface [NetworkInterfacePropertiesFragment](#networkinterfacepropertiesfragment)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * planId `string`: The id of the plan associated with the virtual machine image
  * scheduleParameters `array`: Virtual Machine schedules to be created
    * items [ScheduleCreationParameterFragment](#schedulecreationparameterfragment)
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage, FromSharedGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LinuxOsInfo
* LinuxOsInfo `object`: Information about a Linux OS.
  * linuxOsState `string` (values: NonDeprovisioned, DeprovisionRequested, DeprovisionApplied): The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).

### LinuxOsInfoFragment
* LinuxOsInfoFragment `object`: Information about a Linux OS.
  * linuxOsState `string` (values: NonDeprovisioned, DeprovisionRequested, DeprovisionApplied): The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).

### NetworkInterfaceProperties
* NetworkInterfaceProperties `object`: Properties of a network interface.
  * dnsName `string`: The DNS name.
  * privateIpAddress `string`: The private IP address.
  * publicIpAddress `string`: The public IP address.
  * publicIpAddressId `string`: The resource ID of the public IP address.
  * rdpAuthority `string`: The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
  * sharedPublicIpAddressConfiguration [SharedPublicIpAddressConfiguration](#sharedpublicipaddressconfiguration)
  * sshAuthority `string`: The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
  * subnetId `string`: The resource ID of the sub net.
  * virtualNetworkId `string`: The resource ID of the virtual network.

### NetworkInterfacePropertiesFragment
* NetworkInterfacePropertiesFragment `object`: Properties of a network interface.
  * dnsName `string`: The DNS name.
  * privateIpAddress `string`: The private IP address.
  * publicIpAddress `string`: The public IP address.
  * publicIpAddressId `string`: The resource ID of the public IP address.
  * rdpAuthority `string`: The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
  * sharedPublicIpAddressConfiguration [SharedPublicIpAddressConfigurationFragment](#sharedpublicipaddressconfigurationfragment)
  * sshAuthority `string`: The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
  * subnetId `string`: The resource ID of the sub net.
  * virtualNetworkId `string`: The resource ID of the virtual network.

### NotificationChannel
* NotificationChannel `object`: A notification.
  * properties **required** [NotificationChannelProperties](#notificationchannelproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### NotificationChannelFragment
* NotificationChannelFragment `object`: A notification.
  * properties [NotificationChannelPropertiesFragment](#notificationchannelpropertiesfragment)
  * tags `object`: The tags of the resource.

### NotificationChannelList
* NotificationChannelList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [NotificationChannel](#notificationchannel)

### NotificationChannelProperties
* NotificationChannelProperties `object`: Properties of a schedule.
  * createdDate `string`: The creation date of the notification channel.
  * description `string`: Description of notification.
  * emailRecipient `string`: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
  * events `array`: The list of event for which this notification is enabled.
    * items [Event](#event)
  * notificationLocale `string`: The locale to use when sending a notification (fallback for unsupported languages is EN).
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * webHookUrl `string`: The webhook URL to send notifications to.

### NotificationChannelPropertiesFragment
* NotificationChannelPropertiesFragment `object`: Properties of a schedule.
  * description `string`: Description of notification.
  * emailRecipient `string`: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
  * events `array`: The list of event for which this notification is enabled.
    * items [EventFragment](#eventfragment)
  * notificationLocale `string`: The locale to use when sending a notification (fallback for unsupported languages is EN).
  * webHookUrl `string`: The webhook URL to send notifications to.

### NotificationSettings
* NotificationSettings `object`: Notification settings for a schedule.
  * emailRecipient `string`: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
  * notificationLocale `string`: The locale to use when sending a notification (fallback for unsupported languages is EN).
  * status `string` (values: Enabled, Disabled): If notifications are enabled for this schedule (i.e. Enabled, Disabled).
  * timeInMinutes `integer`: Time in minutes before event at which notification will be sent.
  * webhookUrl `string`: The webhook URL to which the notification will be sent.

### NotificationSettingsFragment
* NotificationSettingsFragment `object`: Notification settings for a schedule.
  * emailRecipient `string`: The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
  * notificationLocale `string`: The locale to use when sending a notification (fallback for unsupported languages is EN).
  * status `string` (values: Enabled, Disabled): If notifications are enabled for this schedule (i.e. Enabled, Disabled).
  * timeInMinutes `integer`: Time in minutes before event at which notification will be sent.
  * webhookUrl `string`: The webhook URL to which the notification will be sent.

### NotifyParameters
* NotifyParameters `object`: Properties for generating a Notification.
  * eventName `string` (values: AutoShutdown, Cost): The type of event (i.e. AutoShutdown, Cost)
  * jsonPayload `string`: Properties for the notification in json format.

### OperationError
* OperationError `object`: Error details for the operation in case of a failure.
  * code `string`: The error code of the operation error.
  * message `string`: The error message of the operation error.

### OperationMetadata
* OperationMetadata `object`: The REST API operation supported by DevTestLab ResourceProvider.
  * display [OperationMetadataDisplay](#operationmetadatadisplay)
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationMetadataDisplay
* OperationMetadataDisplay `object`: The object that describes the operations
  * description `string`: Friendly name of the operation
  * operation `string`: Operation type: read, write, delete, listKeys/action, etc.
  * provider `string`: Friendly name of the resource provider
  * resource `string`: Resource type on which the operation is performed.

### OperationResult
* OperationResult `object`: An Operation Result
  * error [OperationError](#operationerror)
  * status `string`: The operation status.
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, MovedPermanently, Redirect, SeeOther, NotModified, UseProxy, Unused, TemporaryRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported): The status code for the operation.

### ParameterInfo
* ParameterInfo `object`: Information about an artifact's parameter.
  * name `string`: The name of the artifact parameter.
  * value `string`: The value of the artifact parameter.

### ParametersValueFileInfo
* ParametersValueFileInfo `object`: A file containing a set of parameter values for an ARM template.
  * fileName `string`: File name.
  * parametersValueInfo `object`: Contents of the file.

### PercentageCostThresholdProperties
* PercentageCostThresholdProperties `object`: Properties of a percentage cost threshold.
  * thresholdValue `number`: The cost threshold value.

### Policy
* Policy `object`: A Policy.
  * properties **required** [PolicyProperties](#policyproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### PolicyFragment
* PolicyFragment `object`: A Policy.
  * properties [PolicyPropertiesFragment](#policypropertiesfragment)
  * tags `object`: The tags of the resource.

### PolicyList
* PolicyList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Policy](#policy)

### PolicyProperties
* PolicyProperties `object`: Properties of a Policy.
  * createdDate `string`: The creation date of the policy.
  * description `string`: The description of the policy.
  * evaluatorType `string` (values: AllowedValuesPolicy, MaxValuePolicy): The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
  * factData `string`: The fact data of the policy.
  * factName `string` (values: UserOwnedLabVmCount, UserOwnedLabPremiumVmCount, LabVmCount, LabPremiumVmCount, LabVmSize, GalleryImage, UserOwnedLabVmCountInSubnet, LabTargetCost, EnvironmentTemplate, ScheduleEditPermission): The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
  * provisioningState `string`: The provisioning status of the resource.
  * status `string` (values: Enabled, Disabled): The status of the policy.
  * threshold `string`: The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### PolicyPropertiesFragment
* PolicyPropertiesFragment `object`: Properties of a Policy.
  * description `string`: The description of the policy.
  * evaluatorType `string` (values: AllowedValuesPolicy, MaxValuePolicy): The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
  * factData `string`: The fact data of the policy.
  * factName `string` (values: UserOwnedLabVmCount, UserOwnedLabPremiumVmCount, LabVmCount, LabPremiumVmCount, LabVmSize, GalleryImage, UserOwnedLabVmCountInSubnet, LabTargetCost, EnvironmentTemplate, ScheduleEditPermission): The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
  * status `string` (values: Enabled, Disabled): The status of the policy.
  * threshold `string`: The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).

### PolicySetResult
* PolicySetResult `object`: Result of a policy set evaluation.
  * hasError `boolean`: A value indicating whether this policy set evaluation has discovered violations.
  * policyViolations `array`: The list of policy violations.
    * items [PolicyViolation](#policyviolation)

### PolicyViolation
* PolicyViolation `object`: Policy violation.
  * code `string`: The code of the policy violation.
  * message `string`: The message of the policy violation.

### Port
* Port `object`: Properties of a network port.
  * backendPort `integer`: Backend port of the target virtual machine.
  * transportProtocol `string` (values: Tcp, Udp): Protocol type of the port.

### PortFragment
* PortFragment `object`: Properties of a network port.
  * backendPort `integer`: Backend port of the target virtual machine.
  * transportProtocol `string` (values: Tcp, Udp): Protocol type of the port.

### ProviderOperationResult
* ProviderOperationResult `object`: Result of the request to list REST API operations
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the resource provider.
    * items [OperationMetadata](#operationmetadata)

### RdpConnection
* RdpConnection `object`: Represents a .rdp file
  * contents `string`: The contents of the .rdp file

### ResizeLabVirtualMachineProperties
* ResizeLabVirtualMachineProperties `object`: Request body for resizing a virtual machine.
  * size `string`: Specifies the size of the virtual machine.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### RetargetScheduleProperties
* RetargetScheduleProperties `object`: Properties for retargeting a virtual machine schedule.
  * currentResourceId `string`: The resource Id of the virtual machine on which the schedule operates
  * targetResourceId `string`: The resource Id of the virtual machine that the schedule should be retargeted to

### Schedule
* Schedule `object`: A schedule.
  * properties **required** [ScheduleProperties](#scheduleproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ScheduleCreationParameter
* ScheduleCreationParameter `object`: Properties for creating a schedule.
  * location `string`: The location of the new virtual machine or environment
  * name `string`: The name of the virtual machine or environment
  * properties [ScheduleCreationParameterProperties](#schedulecreationparameterproperties)
  * tags `object`: The tags of the resource.

### ScheduleCreationParameterFragment
* ScheduleCreationParameterFragment `object`: Properties for creating a schedule.
  * location `string`: The location of the new virtual machine or environment
  * name `string`: The name of the virtual machine or environment
  * properties [ScheduleCreationParameterPropertiesFragment](#schedulecreationparameterpropertiesfragment)
  * tags `object`: The tags of the resource.

### ScheduleCreationParameterProperties
* ScheduleCreationParameterProperties `object`: Properties for schedule creation.
  * dailyRecurrence [DayDetails](#daydetails)
  * hourlyRecurrence [HourDetails](#hourdetails)
  * notificationSettings [NotificationSettings](#notificationsettings)
  * status `string` (values: Enabled, Disabled): The status of the schedule (i.e. Enabled, Disabled)
  * targetResourceId `string`: The resource ID to which the schedule belongs
  * taskType `string`: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
  * timeZoneId `string`: The time zone ID (e.g. Pacific Standard time).
  * weeklyRecurrence [WeekDetails](#weekdetails)

### ScheduleCreationParameterPropertiesFragment
* ScheduleCreationParameterPropertiesFragment `object`: Properties for schedule creation.
  * dailyRecurrence [DayDetailsFragment](#daydetailsfragment)
  * hourlyRecurrence [HourDetailsFragment](#hourdetailsfragment)
  * notificationSettings [NotificationSettingsFragment](#notificationsettingsfragment)
  * status `string` (values: Enabled, Disabled): The status of the schedule (i.e. Enabled, Disabled)
  * targetResourceId `string`: The resource ID to which the schedule belongs
  * taskType `string`: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
  * timeZoneId `string`: The time zone ID (e.g. Pacific Standard time).
  * weeklyRecurrence [WeekDetailsFragment](#weekdetailsfragment)

### ScheduleFragment
* ScheduleFragment `object`: A schedule.
  * properties [SchedulePropertiesFragment](#schedulepropertiesfragment)
  * tags `object`: The tags of the resource.

### ScheduleList
* ScheduleList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Schedule](#schedule)

### ScheduleProperties
* ScheduleProperties `object`: Properties of a schedule.
  * createdDate `string`: The creation date of the schedule.
  * dailyRecurrence [DayDetails](#daydetails)
  * hourlyRecurrence [HourDetails](#hourdetails)
  * notificationSettings [NotificationSettings](#notificationsettings)
  * provisioningState `string`: The provisioning status of the resource.
  * status `string` (values: Enabled, Disabled): The status of the schedule (i.e. Enabled, Disabled)
  * targetResourceId `string`: The resource ID to which the schedule belongs
  * taskType `string`: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
  * timeZoneId `string`: The time zone ID (e.g. Pacific Standard time).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * weeklyRecurrence [WeekDetails](#weekdetails)

### SchedulePropertiesFragment
* SchedulePropertiesFragment `object`: Properties of a schedule.
  * dailyRecurrence [DayDetailsFragment](#daydetailsfragment)
  * hourlyRecurrence [HourDetailsFragment](#hourdetailsfragment)
  * notificationSettings [NotificationSettingsFragment](#notificationsettingsfragment)
  * status `string` (values: Enabled, Disabled): The status of the schedule (i.e. Enabled, Disabled)
  * targetResourceId `string`: The resource ID to which the schedule belongs
  * taskType `string`: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
  * timeZoneId `string`: The time zone ID (e.g. Pacific Standard time).
  * weeklyRecurrence [WeekDetailsFragment](#weekdetailsfragment)

### Secret
* Secret `object`: A secret.
  * properties **required** [SecretProperties](#secretproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### SecretFragment
* SecretFragment `object`: A secret.
  * properties [SecretPropertiesFragment](#secretpropertiesfragment)
  * tags `object`: The tags of the resource.

### SecretList
* SecretList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Secret](#secret)

### SecretProperties
* SecretProperties `object`: Properties of a secret.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * value `string`: The value of the secret for secret creation.

### SecretPropertiesFragment
* SecretPropertiesFragment `object`: Properties of a secret.
  * value `string`: The value of the secret for secret creation.

### ServiceFabric
* ServiceFabric `object`: A Service Fabric.
  * properties **required** [ServiceFabricProperties](#servicefabricproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ServiceFabricFragment
* ServiceFabricFragment `object`: A Service Fabric.
  * properties [ServiceFabricPropertiesFragment](#servicefabricpropertiesfragment)
  * tags `object`: The tags of the resource.

### ServiceFabricList
* ServiceFabricList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ServiceFabric](#servicefabric)

### ServiceFabricProperties
* ServiceFabricProperties `object`: Properties of a service fabric.
  * applicableSchedule [ApplicableSchedule](#applicableschedule)
  * environmentId `string`: The resource id of the environment under which the service fabric resource is present
  * externalServiceFabricId `string`: The backing service fabric resource's id
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### ServiceFabricPropertiesFragment
* ServiceFabricPropertiesFragment `object`: Properties of a service fabric.
  * environmentId `string`: The resource id of the environment under which the service fabric resource is present
  * externalServiceFabricId `string`: The backing service fabric resource's id

### ServiceRunner
* ServiceRunner `object`: A container for a managed identity to execute DevTest lab services.
  * identity [IdentityProperties](#identityproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### SharedPublicIpAddressConfiguration
* SharedPublicIpAddressConfiguration `object`: Properties of a virtual machine that determine how it is connected to a load balancer.
  * inboundNatRules `array`: The incoming NAT rules
    * items [InboundNatRule](#inboundnatrule)

### SharedPublicIpAddressConfigurationFragment
* SharedPublicIpAddressConfigurationFragment `object`: Properties of a virtual machine that determine how it is connected to a load balancer.
  * inboundNatRules `array`: The incoming NAT rules
    * items [InboundNatRuleFragment](#inboundnatrulefragment)

### ShutdownNotificationContent
* ShutdownNotificationContent `object`: The contents of a shutdown notification. Webhooks can use this type to deserialize the request body when they get notified of an imminent shutdown.
  * delayUrl120 `string`: The URL to delay shutdown by 2 hours.
  * delayUrl60 `string`: The URL to delay shutdown by 60 minutes.
  * eventType `string`: The event for which a notification will be sent.
  * guid `string`: The GUID for the virtual machine to be shut down.
  * labName `string`: The lab for the schedule.
  * minutesUntilShutdown `string`: Minutes remaining until shutdown
  * owner `string`: The owner of the virtual machine.
  * resourceGroupName `string`: The resource group name for the schedule.
  * skipUrl `string`: The URL to skip auto-shutdown.
  * subscriptionId `string`: The subscription ID for the schedule.
  * text `string`: The text for the notification.
  * vmName `string`: The virtual machine to be shut down.
  * vmUrl `string`: The URL of the virtual machine.

### Subnet
* Subnet `object`: Subnet information.
  * allowPublicIp `string` (values: Default, Deny, Allow): The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
  * labSubnetName `string`: The name of the subnet as seen in the lab.
  * resourceId `string`: The resource ID of the subnet.

### SubnetFragment
* SubnetFragment `object`: Subnet information.
  * allowPublicIp `string` (values: Default, Deny, Allow): The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)).
  * labSubnetName `string`: The name of the subnet as seen in the lab.
  * resourceId `string`: The resource ID of the subnet.

### SubnetOverride
* SubnetOverride `object`: Property overrides on a subnet of a virtual network.
  * labSubnetName `string`: The name given to the subnet within the lab.
  * resourceId `string`: The resource ID of the subnet.
  * sharedPublicIpAddressConfiguration [SubnetSharedPublicIpAddressConfiguration](#subnetsharedpublicipaddressconfiguration)
  * useInVmCreationPermission `string` (values: Default, Deny, Allow): Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
  * usePublicIpAddressPermission `string` (values: Default, Deny, Allow): Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
  * virtualNetworkPoolName `string`: The virtual network pool associated with this subnet.

### SubnetOverrideFragment
* SubnetOverrideFragment `object`: Property overrides on a subnet of a virtual network.
  * labSubnetName `string`: The name given to the subnet within the lab.
  * resourceId `string`: The resource ID of the subnet.
  * sharedPublicIpAddressConfiguration [SubnetSharedPublicIpAddressConfigurationFragment](#subnetsharedpublicipaddressconfigurationfragment)
  * useInVmCreationPermission `string` (values: Default, Deny, Allow): Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny).
  * usePublicIpAddressPermission `string` (values: Default, Deny, Allow): Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
  * virtualNetworkPoolName `string`: The virtual network pool associated with this subnet.

### SubnetSharedPublicIpAddressConfiguration
* SubnetSharedPublicIpAddressConfiguration `object`: Configuration for public IP address sharing.
  * allowedPorts `array`: Backend ports that virtual machines on this subnet are allowed to expose
    * items [Port](#port)

### SubnetSharedPublicIpAddressConfigurationFragment
* SubnetSharedPublicIpAddressConfigurationFragment `object`: Configuration for public IP address sharing.
  * allowedPorts `array`: Backend ports that virtual machines on this subnet are allowed to expose
    * items [PortFragment](#portfragment)

### TargetCostProperties
* TargetCostProperties `object`: Properties of a cost target.
  * costThresholds `array`: Cost thresholds.
    * items [CostThresholdProperties](#costthresholdproperties)
  * cycleEndDateTime `string`: Reporting cycle end date.
  * cycleStartDateTime `string`: Reporting cycle start date.
  * cycleType `string` (values: CalendarMonth, Custom): Reporting cycle type.
  * status `string` (values: Enabled, Disabled): Target cost status
  * target `integer`: Lab target cost

### UpdateResource
* UpdateResource `object`: Represents an update resource
  * tags `object`: The tags of the resource.

### User
* User `object`: Profile of a lab user.
  * properties [UserProperties](#userproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### UserFragment
* UserFragment `object`: Profile of a lab user.
  * properties [UserPropertiesFragment](#userpropertiesfragment)
  * tags `object`: The tags of the resource.

### UserIdentity
* UserIdentity `object`: Identity attributes of a lab user.
  * appId `string`: Set to the app Id of the client JWT making the request.
  * objectId `string`: Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
  * principalId `string`: Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
  * principalName `string`: Set to the principal name / UPN of the client JWT making the request.
  * tenantId `string`: Set to the tenant ID of the client JWT making the request.

### UserIdentityFragment
* UserIdentityFragment `object`: Identity attributes of a lab user.
  * appId `string`: Set to the app Id of the client JWT making the request.
  * objectId `string`: Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
  * principalId `string`: Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
  * principalName `string`: Set to the principal name / UPN of the client JWT making the request.
  * tenantId `string`: Set to the tenant ID of the client JWT making the request.

### UserList
* UserList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [User](#user)

### UserProperties
* UserProperties `object`: Properties of a lab user profile.
  * createdDate `string`: The creation date of the user profile.
  * identity [UserIdentity](#useridentity)
  * provisioningState `string`: The provisioning status of the resource.
  * secretStore [UserSecretStore](#usersecretstore)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### UserPropertiesFragment
* UserPropertiesFragment `object`: Properties of a lab user profile.
  * identity [UserIdentityFragment](#useridentityfragment)
  * secretStore [UserSecretStoreFragment](#usersecretstorefragment)

### UserSecretStore
* UserSecretStore `object`: Properties of a user's secret store.
  * keyVaultId `string`: The ID of the user's Key vault.
  * keyVaultUri `string`: The URI of the user's Key vault.

### UserSecretStoreFragment
* UserSecretStoreFragment `object`: Properties of a user's secret store.
  * keyVaultId `string`: The ID of the user's Key vault.
  * keyVaultUri `string`: The URI of the user's Key vault.

### VirtualNetwork
* VirtualNetwork `object`: A virtual network.
  * properties [VirtualNetworkProperties](#virtualnetworkproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### VirtualNetworkFragment
* VirtualNetworkFragment `object`: A virtual network.
  * properties [VirtualNetworkPropertiesFragment](#virtualnetworkpropertiesfragment)
  * tags `object`: The tags of the resource.

### VirtualNetworkList
* VirtualNetworkList `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [VirtualNetwork](#virtualnetwork)

### VirtualNetworkProperties
* VirtualNetworkProperties `object`: Properties of a virtual network.
  * allowedSubnets `array`: The allowed subnets of the virtual network.
    * items [Subnet](#subnet)
  * createdDate `string`: The creation date of the virtual network.
  * description `string`: The description of the virtual network.
  * externalProviderResourceId `string`: The Microsoft.Network resource identifier of the virtual network.
  * externalSubnets `array`: The external subnet properties.
    * items [ExternalSubnet](#externalsubnet)
  * provisioningState `string`: The provisioning status of the resource.
  * subnetOverrides `array`: The subnet overrides of the virtual network.
    * items [SubnetOverride](#subnetoverride)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### VirtualNetworkPropertiesFragment
* VirtualNetworkPropertiesFragment `object`: Properties of a virtual network.
  * allowedSubnets `array`: The allowed subnets of the virtual network.
    * items [SubnetFragment](#subnetfragment)
  * description `string`: The description of the virtual network.
  * externalProviderResourceId `string`: The Microsoft.Network resource identifier of the virtual network.
  * subnetOverrides `array`: The subnet overrides of the virtual network.
    * items [SubnetOverrideFragment](#subnetoverridefragment)

### WeekDetails
* WeekDetails `object`: Properties of a weekly schedule.
  * time `string`: The time of the day the schedule will occur.
  * weekdays `array`: The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
    * items `string`

### WeekDetailsFragment
* WeekDetailsFragment `object`: Properties of a weekly schedule.
  * time `string`: The time of the day the schedule will occur.
  * weekdays `array`: The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
    * items `string`

### WindowsOsInfo
* WindowsOsInfo `object`: Information about a Windows OS.
  * windowsOsState `string` (values: NonSysprepped, SysprepRequested, SysprepApplied): The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).

### WindowsOsInfoFragment
* WindowsOsInfoFragment `object`: Information about a Windows OS.
  * windowsOsState `string` (values: NonSysprepped, SysprepRequested, SysprepApplied): The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).


