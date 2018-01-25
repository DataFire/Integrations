# @datafire/azure_arm_devtestlabs

Client library for DevTestLabsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_devtestlabs
```
```js
let azure_arm_devtestlabs = require('@datafire/azure_arm_devtestlabs').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_devtestlabs.Labs_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The DevTest Labs Client.

## Actions

### Labs_ListBySubscription
List labs in a subscription.


```js
azure_arm_devtestlabs.Labs_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Lab]](#responsewithcontinuation[lab])

### GlobalSchedules_ListBySubscription
List schedules in a subscription.


```js
azure_arm_devtestlabs.GlobalSchedules_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=status)'
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Schedule]](#responsewithcontinuation[schedule])

### Labs_ListByResourceGroup
List labs in a resource group.


```js
azure_arm_devtestlabs.Labs_ListByResourceGroup({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Lab]](#responsewithcontinuation[lab])

### ArtifactSources_List
List artifact sources in a given lab.


```js
azure_arm_devtestlabs.ArtifactSources_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[ArtifactSource]](#responsewithcontinuation[artifactsource])

### ArmTemplates_List
List azure resource manager templates in a given artifact source.


```js
azure_arm_devtestlabs.ArmTemplates_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[ArmTemplate]](#responsewithcontinuation[armtemplate])

### ArmTemplates_Get
Get azure resource manager template.


```js
azure_arm_devtestlabs.ArmTemplates_Get({
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
  * name **required** `string`: The name of the azure Resource Manager template.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=displayName)'
  * api-version **required** `string`: Client API version.

#### Output
* output [ArmTemplate](#armtemplate)

### Artifacts_List
List artifacts in a given artifact source.


```js
azure_arm_devtestlabs.Artifacts_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Artifact]](#responsewithcontinuation[artifact])

### Artifacts_Get
Get artifact.


```js
azure_arm_devtestlabs.Artifacts_Get({
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
azure_arm_devtestlabs.Artifacts_GenerateArmTemplate({
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
azure_arm_devtestlabs.ArtifactSources_Delete({
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
azure_arm_devtestlabs.ArtifactSources_Get({
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
Modify properties of artifact sources.


```js
azure_arm_devtestlabs.ArtifactSources_Update({
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
azure_arm_devtestlabs.ArtifactSources_CreateOrUpdate({
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
azure_arm_devtestlabs.Costs_Get({
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
azure_arm_devtestlabs.Costs_CreateOrUpdate({
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
azure_arm_devtestlabs.CustomImages_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[CustomImage]](#responsewithcontinuation[customimage])

### CustomImages_Delete
Delete custom image. This operation can take a while to complete.


```js
azure_arm_devtestlabs.CustomImages_Delete({
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
azure_arm_devtestlabs.CustomImages_Get({
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

### CustomImages_CreateOrUpdate
Create or replace an existing custom image. This operation can take a while to complete.


```js
azure_arm_devtestlabs.CustomImages_CreateOrUpdate({
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
azure_arm_devtestlabs.Formulas_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Formula]](#responsewithcontinuation[formula])

### Formulas_Delete
Delete formula.


```js
azure_arm_devtestlabs.Formulas_Delete({
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
azure_arm_devtestlabs.Formulas_Get({
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

### Formulas_CreateOrUpdate
Create or replace an existing Formula. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Formulas_CreateOrUpdate({
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
azure_arm_devtestlabs.GalleryImages_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[GalleryImage]](#responsewithcontinuation[galleryimage])

### NotificationChannels_List
List notificationchannels in a given lab.


```js
azure_arm_devtestlabs.NotificationChannels_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[NotificationChannel]](#responsewithcontinuation[notificationchannel])

### NotificationChannels_Delete
Delete notificationchannel.


```js
azure_arm_devtestlabs.NotificationChannels_Delete({
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
  * name **required** `string`: The name of the notificationChannel.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### NotificationChannels_Get
Get notificationchannel.


```js
azure_arm_devtestlabs.NotificationChannels_Get({
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
  * name **required** `string`: The name of the notificationChannel.
  * $expand `string`: Specify the $expand query. Example: 'properties($select=webHookUrl)'
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_Update
Modify properties of notificationchannels.


```js
azure_arm_devtestlabs.NotificationChannels_Update({
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
  * name **required** `string`: The name of the notificationChannel.
  * notificationChannel **required** [NotificationChannelFragment](#notificationchannelfragment)
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_CreateOrUpdate
Create or replace an existing notificationChannel.


```js
azure_arm_devtestlabs.NotificationChannels_CreateOrUpdate({
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
  * name **required** `string`: The name of the notificationChannel.
  * notificationChannel **required** [NotificationChannel](#notificationchannel)
  * api-version **required** `string`: Client API version.

#### Output
* output [NotificationChannel](#notificationchannel)

### NotificationChannels_Notify
Send notification to provided channel.


```js
azure_arm_devtestlabs.NotificationChannels_Notify({
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
  * name **required** `string`: The name of the notificationChannel.
  * notifyParameters **required** [NotifyParameters](#notifyparameters)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### PolicySets_EvaluatePolicies
Evaluates lab policy.


```js
azure_arm_devtestlabs.PolicySets_EvaluatePolicies({
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
azure_arm_devtestlabs.Policies_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Policy]](#responsewithcontinuation[policy])

### Policies_Delete
Delete policy.


```js
azure_arm_devtestlabs.Policies_Delete({
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
azure_arm_devtestlabs.Policies_Get({
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
Modify properties of policies.


```js
azure_arm_devtestlabs.Policies_Update({
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
azure_arm_devtestlabs.Policies_CreateOrUpdate({
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
azure_arm_devtestlabs.Schedules_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Schedule]](#responsewithcontinuation[schedule])

### Schedules_Delete
Delete schedule.


```js
azure_arm_devtestlabs.Schedules_Delete({
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
azure_arm_devtestlabs.Schedules_Get({
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
Modify properties of schedules.


```js
azure_arm_devtestlabs.Schedules_Update({
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
azure_arm_devtestlabs.Schedules_CreateOrUpdate({
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
azure_arm_devtestlabs.Schedules_Execute({
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
azure_arm_devtestlabs.Schedules_ListApplicable({
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
* output [ResponseWithContinuation[Schedule]](#responsewithcontinuation[schedule])

### ServiceRunners_List
List service runners in a given lab.


```js
azure_arm_devtestlabs.ServiceRunners_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[ServiceRunner]](#responsewithcontinuation[servicerunner])

### ServiceRunners_Delete
Delete service runner.


```js
azure_arm_devtestlabs.ServiceRunners_Delete({
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
azure_arm_devtestlabs.ServiceRunners_Get({
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
Create or replace an existing Service runner.


```js
azure_arm_devtestlabs.ServiceRunners_CreateOrUpdate({
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
azure_arm_devtestlabs.Users_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[User]](#responsewithcontinuation[user])

### Users_Delete
Delete user profile. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Users_Delete({
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
azure_arm_devtestlabs.Users_Get({
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
Modify properties of user profiles.


```js
azure_arm_devtestlabs.Users_Update({
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
Create or replace an existing user profile.


```js
azure_arm_devtestlabs.Users_CreateOrUpdate({
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
azure_arm_devtestlabs.Disks_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Disk]](#responsewithcontinuation[disk])

### Disks_Delete
Delete disk. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Disks_Delete({
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
azure_arm_devtestlabs.Disks_Get({
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

### Disks_CreateOrUpdate
Create or replace an existing disk. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Disks_CreateOrUpdate({
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
azure_arm_devtestlabs.Disks_Attach({
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
azure_arm_devtestlabs.Disks_Detach({
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
azure_arm_devtestlabs.Environments_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[DtlEnvironment]](#responsewithcontinuation[dtlenvironment])

### Environments_Delete
Delete environment. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Environments_Delete({
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
azure_arm_devtestlabs.Environments_Get({
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

### Environments_CreateOrUpdate
Create or replace an existing environment. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Environments_CreateOrUpdate({
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
azure_arm_devtestlabs.Secrets_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Secret]](#responsewithcontinuation[secret])

### Secrets_Delete
Delete secret.


```js
azure_arm_devtestlabs.Secrets_Delete({
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
azure_arm_devtestlabs.Secrets_Get({
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

### Secrets_CreateOrUpdate
Create or replace an existing secret.


```js
azure_arm_devtestlabs.Secrets_CreateOrUpdate({
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

### VirtualMachines_List
List virtual machines in a given lab.


```js
azure_arm_devtestlabs.VirtualMachines_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[LabVirtualMachine]](#responsewithcontinuation[labvirtualmachine])

### VirtualMachines_Delete
Delete virtual machine. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachines_Delete({
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
azure_arm_devtestlabs.VirtualMachines_Get({
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
Modify properties of virtual machines.


```js
azure_arm_devtestlabs.VirtualMachines_Update({
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
Create or replace an existing Virtual machine. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachines_CreateOrUpdate({
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
azure_arm_devtestlabs.VirtualMachines_AddDataDisk({
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
azure_arm_devtestlabs.VirtualMachines_ApplyArtifacts({
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
azure_arm_devtestlabs.VirtualMachines_Claim({
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
azure_arm_devtestlabs.VirtualMachines_DetachDataDisk({
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

### VirtualMachines_ListApplicableSchedules
Lists all applicable schedules


```js
azure_arm_devtestlabs.VirtualMachines_ListApplicableSchedules({
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

### VirtualMachines_Start
Start a virtual machine. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachines_Start({
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
azure_arm_devtestlabs.VirtualMachines_Stop({
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
azure_arm_devtestlabs.VirtualMachineSchedules_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Schedule]](#responsewithcontinuation[schedule])

### VirtualMachineSchedules_Delete
Delete schedule.


```js
azure_arm_devtestlabs.VirtualMachineSchedules_Delete({
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
azure_arm_devtestlabs.VirtualMachineSchedules_Get({
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
Modify properties of schedules.


```js
azure_arm_devtestlabs.VirtualMachineSchedules_Update({
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
azure_arm_devtestlabs.VirtualMachineSchedules_CreateOrUpdate({
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
azure_arm_devtestlabs.VirtualMachineSchedules_Execute({
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
azure_arm_devtestlabs.VirtualNetworks_List({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[VirtualNetwork]](#responsewithcontinuation[virtualnetwork])

### VirtualNetworks_Delete
Delete virtual network. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualNetworks_Delete({
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
azure_arm_devtestlabs.VirtualNetworks_Get({
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
Modify properties of virtual networks.


```js
azure_arm_devtestlabs.VirtualNetworks_Update({
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
azure_arm_devtestlabs.VirtualNetworks_CreateOrUpdate({
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
azure_arm_devtestlabs.Labs_Delete({
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
azure_arm_devtestlabs.Labs_Get({
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
Modify properties of labs.


```js
azure_arm_devtestlabs.Labs_Update({
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
azure_arm_devtestlabs.Labs_CreateOrUpdate({
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
azure_arm_devtestlabs.Labs_ClaimAnyVm({
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
azure_arm_devtestlabs.Labs_CreateEnvironment({
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
azure_arm_devtestlabs.Labs_ExportResourceUsage({
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
azure_arm_devtestlabs.Labs_GenerateUploadUri({
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

### Labs_ListVhds
List disk images available for custom image creation.


```js
azure_arm_devtestlabs.Labs_ListVhds({
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
* output [ResponseWithContinuation[LabVhd]](#responsewithcontinuation[labvhd])

### GlobalSchedules_ListByResourceGroup
List schedules in a resource group.


```js
azure_arm_devtestlabs.GlobalSchedules_ListByResourceGroup({
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
  * $filter `string`: The filter to apply to the operation.
  * $top `integer`: The maximum number of resources to return from the operation.
  * $orderby `string`: The ordering expression for the results, using OData notation.
  * api-version **required** `string`: Client API version.

#### Output
* output [ResponseWithContinuation[Schedule]](#responsewithcontinuation[schedule])

### GlobalSchedules_Delete
Delete schedule.


```js
azure_arm_devtestlabs.GlobalSchedules_Delete({
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
azure_arm_devtestlabs.GlobalSchedules_Get({
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
Modify properties of schedules.


```js
azure_arm_devtestlabs.GlobalSchedules_Update({
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
azure_arm_devtestlabs.GlobalSchedules_CreateOrUpdate({
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
azure_arm_devtestlabs.GlobalSchedules_Execute({
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
azure_arm_devtestlabs.GlobalSchedules_Retarget({
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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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

### ArmTemplateParameterProperties
* ArmTemplateParameterProperties `object`: Properties of an Azure Resource Manager template parameter.
  * name `string`: The name of the template parameter.
  * value `string`: The value of the template parameter.

### ArmTemplateProperties
* ArmTemplateProperties `object`: Properties of an Azure Resource Manager template.
  * contents `object`: The contents of the ARM template.
  * createdDate `string`: The creation date of the armTemplate.
  * description `string`: The description of the ARM template.
  * displayName `string`: The display name of the ARM template.
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
  * deploymentStatusMessage `string`: The status message from the deployment.
  * installTime `string`: The time that the artifact starts to install on the virtual machine.
  * parameters `array`: The parameters of the artifact.
    * items [ArtifactParameterProperties](#artifactparameterproperties)
  * status `string`: The status of the artifact.
  * vmExtensionStatusMessage `string`: The status message from the virtual machine extension.

### ArtifactInstallPropertiesFragment
* ArtifactInstallPropertiesFragment `object`: Properties of an artifact.
  * artifactId `string`: The artifact's identifier.
  * deploymentStatusMessage `string`: The status message from the deployment.
  * installTime `string`: The time that the artifact starts to install on the virtual machine.
  * parameters `array`: The parameters of the artifact.
    * items [ArtifactParameterPropertiesFragment](#artifactparameterpropertiesfragment)
  * status `string`: The status of the artifact.
  * vmExtensionStatusMessage `string`: The status message from the virtual machine extension.

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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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
  * provisioningState `string`: The provisioning status of the resource.
  * securityToken `string`: The security token to authenticate to the artifact source.
  * sourceType `string` (values: VsoGit, GitHub): The artifact source's type.
  * status `string` (values: Enabled, Disabled): Indicates if the artifact source is enabled (values: Enabled, Disabled).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * uri `string`: The artifact source's URI.

### AttachDiskProperties
* AttachDiskProperties `object`: Properties of the disk to attach.
  * leasedByLabVmId `string`: The resource ID of the Lab virtual machine to which the disk is attached.

### AttachNewDataDiskOptions
* AttachNewDataDiskOptions `object`: Properties to attach new disk to the Virtual Machine.
  * diskName `string`: The name of the disk to be attached.
  * diskSizeGiB `integer`: Size of the disk to be attached in GibiBytes.
  * diskType `string` (values: Standard, Premium): The storage type for the disk (i.e. Standard, Premium).

### BulkCreationParameters
* BulkCreationParameters `object`: Parameters for creating multiple virtual machines as a single action.
  * instanceCount `integer`: The number of virtual machine instances to create.

### CloudError
* CloudError `object`: Error from a REST request.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Body of an error from a REST request.
  * code `string`
  * details `array`: Inner errors.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`
  * target `string`

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
  * NotificationSent `string`: Indicates the datetime when notifications were last sent for this threshold.
  * displayOnChart `string` (values: Enabled, Disabled): Indicates whether this threshold will be displayed on cost charts.
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

### CustomImageProperties
* CustomImageProperties `object`: Properties of a custom image.
  * author `string`: The author of the custom image.
  * creationDate `string`: The creation date of the custom image.
  * description `string`: The description of the custom image.
  * managedImageId `string`: The Managed Image Id backing the custom image.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * vhd [CustomImagePropertiesCustom](#customimagepropertiescustom)
  * vm [CustomImagePropertiesFromVm](#customimagepropertiesfromvm)

### CustomImagePropertiesCustom
* CustomImagePropertiesCustom `object`: Properties for creating a custom image from a VHD.
  * imageName `string`: The image name.
  * osType **required** `string` (values: Windows, Linux, None): The OS type of the custom image (i.e. Windows, Linux)
  * sysPrep `boolean`: Indicates whether sysprep has been run on the VHD.

### CustomImagePropertiesFromVm
* CustomImagePropertiesFromVm `object`: Properties for creating a custom image from a virtual machine.
  * linuxOsInfo [LinuxOsInfo](#linuxosinfo)
  * sourceVmId `string`: The source vm identifier.
  * windowsOsInfo [WindowsOsInfo](#windowsosinfo)

### DataDiskProperties
* DataDiskProperties `object`: Request body for adding a new or existing data disk to a virtual machine.
  * attachNewDataDiskOptions [AttachNewDataDiskOptions](#attachnewdatadiskoptions)
  * existingLabDiskId `string`: Specifies the existing lab disk id to attach to virtual machine.
  * hostCaching `string` (values: None, ReadOnly, ReadWrite): Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).

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

### DiskProperties
* DiskProperties `object`: Properties of a disk.
  * createdDate `string`: The creation date of the disk.
  * diskBlobName `string`: When backed by a blob, the name of the VHD blob without extension.
  * diskSizeGiB `integer`: The size of the disk in GibiBytes.
  * diskType `string` (values: Standard, Premium): The storage type for the disk (i.e. Standard, Premium).
  * diskUri `string`: When backed by a blob, the URI of underlying blob.
  * hostCaching `string`: The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
  * leasedByLabVmId `string`: The resource ID of the VM to which this disk is leased.
  * managedDiskId `string`: When backed by managed disk, this is the ID of the compute disk resource.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### DtlEnvironment
* DtlEnvironment `object`: An environment, which is essentially an ARM template deployment.
  * properties **required** [EnvironmentProperties](#environmentproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### EnvironmentDeploymentProperties
* EnvironmentDeploymentProperties `object`: Properties of an environment deployment.
  * armTemplateId `string`: The Azure Resource Manager template's identifier.
  * parameters `array`: The parameters of the Azure Resource Manager template.
    * items [ArmTemplateParameterProperties](#armtemplateparameterproperties)

### EnvironmentProperties
* EnvironmentProperties `object`: Properties of an environment.
  * armTemplateDisplayName `string`: The display name of the Azure Resource Manager template that produced the environment.
  * createdByUser `string`: The creator of the environment.
  * deploymentProperties [EnvironmentDeploymentProperties](#environmentdeploymentproperties)
  * provisioningState `string`: The provisioning status of the resource.
  * resourceGroupId `string`: The identifier of the resource group containing the environment's resources.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### EvaluatePoliciesProperties
* EvaluatePoliciesProperties `object`: Properties for evaluating a policy set.
  * factData `string`: The fact data.
  * factName `string`: The fact name.
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

### FormulaPropertiesFromVm
* FormulaPropertiesFromVm `object`: Information about a VM from which a formula is to be created.
  * labVmId `string`: The identifier of the VM from which a formula is to be created.

### GalleryImage
* GalleryImage `object`: A gallery image.
  * properties **required** [GalleryImageProperties](#galleryimageproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### GalleryImageProperties
* GalleryImageProperties `object`: Properties of a gallery image.
  * author `string`: The author of the gallery image.
  * createdDate `string`: The creation date of the gallery image.
  * description `string`: The description of the gallery image.
  * enabled `boolean`: Indicates whether this gallery image is enabled.
  * icon `string`: The icon of the gallery image.
  * imageReference [GalleryImageReference](#galleryimagereference)

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
* GenerateUploadUriResponse `object`: Reponse body for generating an upload URI.
  * uploadUri `string`: The upload URI for the VHD.

### HourDetails
* HourDetails `object`: Properties of an hourly schedule.
  * minute `integer`: Minutes of the hour the schedule will run.

### HourDetailsFragment
* HourDetailsFragment `object`: Properties of an hourly schedule.
  * minute `integer`: Minutes of the hour the schedule will run.

### IdentityProperties
* IdentityProperties `object`: IdentityProperties
  * clientSecretUrl `string`: The client secret URL of the identity.
  * principalId `string`: The principal id of resource identity.
  * tenantId `string`: The tenant identifier of resource.
  * type `string`: Managed identity.

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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### LabProperties
* LabProperties `object`: Properties of a lab.
  * artifactsStorageAccount `string`: The lab's artifact storage account.
  * createdDate `string`: The creation date of the lab.
  * defaultPremiumStorageAccount `string`: The lab's default premium storage account.
  * defaultStorageAccount `string`: The lab's default storage account.
  * labStorageType `string` (values: Standard, Premium): Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
  * premiumDataDiskStorageAccount `string`: The lab's premium data disk storage account.
  * premiumDataDisks `string` (values: Disabled, Enabled): The setting to enable usage of premium data disks.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * vaultName `string`: The lab's Key vault.

### LabPropertiesFragment
* LabPropertiesFragment `object`: Properties of a lab.
  * labStorageType `string` (values: Standard, Premium): Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
  * premiumDataDisks `string` (values: Disabled, Enabled): The setting to enable usage of premium data disks.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

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

### LabVhd
* LabVhd `object`: Properties of a VHD in the lab.
  * id `string`: The URI to the VHD.

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

### LabVirtualMachineCreationParameterProperties
* LabVirtualMachineCreationParameterProperties `object`: Properties for virtual machine creation.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * applicableSchedule [ApplicableSchedule](#applicableschedule)
  * artifactDeploymentStatus [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallProperties](#artifactinstallproperties)
  * bulkCreationParameters [BulkCreationParameters](#bulkcreationparameters)
  * computeVm [ComputeVmProperties](#computevmproperties)
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReference](#galleryimagereference)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * networkInterface [NetworkInterfaceProperties](#networkinterfaceproperties)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * provisioningState `string`: The provisioning status of the resource.
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LabVirtualMachineFragment
* LabVirtualMachineFragment `object`: A virtual machine.
  * properties [LabVirtualMachinePropertiesFragment](#labvirtualmachinepropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReference](#galleryimagereference)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * networkInterface [NetworkInterfaceProperties](#networkinterfaceproperties)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * provisioningState `string`: The provisioning status of the resource.
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LabVirtualMachinePropertiesFragment
* LabVirtualMachinePropertiesFragment `object`: Properties of a virtual machine.
  * allowClaim `boolean`: Indicates whether another user can take ownership of the virtual machine
  * applicableSchedule [ApplicableScheduleFragment](#applicableschedulefragment)
  * artifactDeploymentStatus [ArtifactDeploymentStatusPropertiesFragment](#artifactdeploymentstatuspropertiesfragment)
  * artifacts `array`: The artifacts to be installed on the virtual machine.
    * items [ArtifactInstallPropertiesFragment](#artifactinstallpropertiesfragment)
  * computeVm [ComputeVmPropertiesFragment](#computevmpropertiesfragment)
  * createdByUser `string`: The email address of creator of the virtual machine.
  * createdByUserId `string`: The object identifier of the creator of the virtual machine.
  * createdDate `string`: The creation date of the virtual machine.
  * customImageId `string`: The custom image identifier of the virtual machine.
  * disallowPublicIpAddress `boolean`: Indicates whether the virtual machine is to be created without a public IP address.
  * environmentId `string`: The resource ID of the environment that contains this virtual machine, if any.
  * expirationDate `string`: The expiration date for VM.
  * fqdn `string`: The fully-qualified domain name of the virtual machine.
  * galleryImageReference [GalleryImageReferenceFragment](#galleryimagereferencefragment)
  * isAuthenticationWithSshKey `boolean`: Indicates whether this virtual machine uses an SSH key for authentication.
  * labSubnetName `string`: The lab subnet name of the virtual machine.
  * labVirtualNetworkId `string`: The lab virtual network identifier of the virtual machine.
  * networkInterface [NetworkInterfacePropertiesFragment](#networkinterfacepropertiesfragment)
  * notes `string`: The notes of the virtual machine.
  * osType `string`: The OS type of the virtual machine.
  * ownerObjectId `string`: The object identifier of the owner of the virtual machine.
  * ownerUserPrincipalName `string`: The user principal name of the virtual machine owner.
  * password `string`: The password of the virtual machine administrator.
  * provisioningState `string`: The provisioning status of the resource.
  * size `string`: The size of the virtual machine.
  * sshKey `string`: The SSH key of the virtual machine administrator.
  * storageType `string`: Storage type to use for virtual machine (i.e. Standard, Premium).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * userName `string`: The user name of the virtual machine.
  * virtualMachineCreationSource `string` (values: FromCustomImage, FromGalleryImage): Tells source of creation of lab virtual machine. Output property only.

### LinuxOsInfo
* LinuxOsInfo `object`: Information about a Linux OS.
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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### NotificationChannelProperties
* NotificationChannelProperties `object`: Properties of a schedule.
  * createdDate `string`: The creation date of the notification channel.
  * description `string`: Description of notification.
  * events `array`: The list of event for which this notification is enabled.
    * items [Event](#event)
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * webHookUrl `string`: The webhook URL to send notifications to.

### NotificationChannelPropertiesFragment
* NotificationChannelPropertiesFragment `object`: Properties of a schedule.
  * description `string`: Description of notification.
  * events `array`: The list of event for which this notification is enabled.
    * items [EventFragment](#eventfragment)
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * webHookUrl `string`: The webhook URL to send notifications to.

### NotificationSettings
* NotificationSettings `object`: Notification settings for a schedule.
  * status `string` (values: Disabled, Enabled): If notifications are enabled for this schedule (i.e. Enabled, Disabled).
  * timeInMinutes `integer`: Time in minutes before event at which notification will be sent.
  * webhookUrl `string`: The webhook URL to which the notification will be sent.

### NotificationSettingsFragment
* NotificationSettingsFragment `object`: Notification settings for a schedule.
  * status `string` (values: Disabled, Enabled): If notifications are enabled for this schedule (i.e. Enabled, Disabled).
  * timeInMinutes `integer`: Time in minutes before event at which notification will be sent.
  * webhookUrl `string`: The webhook URL to which the notification will be sent.

### NotifyParameters
* NotifyParameters `object`: Properties for generating a Notification.
  * eventName `string` (values: AutoShutdown, Cost): The type of event (i.e. AutoShutdown, Cost)
  * jsonPayload `string`: Properties for the notification in json format.

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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### PolicyProperties
* PolicyProperties `object`: Properties of a Policy.
  * createdDate `string`: The creation date of the policy.
  * description `string`: The description of the policy.
  * evaluatorType `string` (values: AllowedValuesPolicy, MaxValuePolicy): The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
  * factData `string`: The fact data of the policy.
  * factName `string` (values: UserOwnedLabVmCount, UserOwnedLabPremiumVmCount, LabVmCount, LabPremiumVmCount, LabVmSize, GalleryImage, UserOwnedLabVmCountInSubnet, LabTargetCost): The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
  * provisioningState `string`: The provisioning status of the resource.
  * status `string` (values: Enabled, Disabled): The status of the policy.
  * threshold `string`: The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

### PolicyPropertiesFragment
* PolicyPropertiesFragment `object`: Properties of a Policy.
  * description `string`: The description of the policy.
  * evaluatorType `string` (values: AllowedValuesPolicy, MaxValuePolicy): The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
  * factData `string`: The fact data of the policy.
  * factName `string` (values: UserOwnedLabVmCount, UserOwnedLabPremiumVmCount, LabVmCount, LabPremiumVmCount, LabVmSize, GalleryImage, UserOwnedLabVmCountInSubnet, LabTargetCost): The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
  * provisioningState `string`: The provisioning status of the resource.
  * status `string` (values: Enabled, Disabled): The status of the policy.
  * threshold `string`: The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

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

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ResponseWithContinuation[ArmTemplate]
* ResponseWithContinuation[ArmTemplate] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ArmTemplate](#armtemplate)

### ResponseWithContinuation[ArtifactSource]
* ResponseWithContinuation[ArtifactSource] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ArtifactSource](#artifactsource)

### ResponseWithContinuation[Artifact]
* ResponseWithContinuation[Artifact] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Artifact](#artifact)

### ResponseWithContinuation[CustomImage]
* ResponseWithContinuation[CustomImage] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [CustomImage](#customimage)

### ResponseWithContinuation[Disk]
* ResponseWithContinuation[Disk] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Disk](#disk)

### ResponseWithContinuation[DtlEnvironment]
* ResponseWithContinuation[DtlEnvironment] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [DtlEnvironment](#dtlenvironment)

### ResponseWithContinuation[Formula]
* ResponseWithContinuation[Formula] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Formula](#formula)

### ResponseWithContinuation[GalleryImage]
* ResponseWithContinuation[GalleryImage] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [GalleryImage](#galleryimage)

### ResponseWithContinuation[LabVhd]
* ResponseWithContinuation[LabVhd] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [LabVhd](#labvhd)

### ResponseWithContinuation[LabVirtualMachine]
* ResponseWithContinuation[LabVirtualMachine] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [LabVirtualMachine](#labvirtualmachine)

### ResponseWithContinuation[Lab]
* ResponseWithContinuation[Lab] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Lab](#lab)

### ResponseWithContinuation[NotificationChannel]
* ResponseWithContinuation[NotificationChannel] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [NotificationChannel](#notificationchannel)

### ResponseWithContinuation[Policy]
* ResponseWithContinuation[Policy] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Policy](#policy)

### ResponseWithContinuation[Schedule]
* ResponseWithContinuation[Schedule] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Schedule](#schedule)

### ResponseWithContinuation[Secret]
* ResponseWithContinuation[Secret] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Secret](#secret)

### ResponseWithContinuation[ServiceRunner]
* ResponseWithContinuation[ServiceRunner] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [ServiceRunner](#servicerunner)

### ResponseWithContinuation[User]
* ResponseWithContinuation[User] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [User](#user)

### ResponseWithContinuation[VirtualNetwork]
* ResponseWithContinuation[VirtualNetwork] `object`: The response of a list operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [VirtualNetwork](#virtualnetwork)

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

### ScheduleFragment
* ScheduleFragment `object`: A schedule.
  * properties [SchedulePropertiesFragment](#schedulepropertiesfragment)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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
  * provisioningState `string`: The provisioning status of the resource.
  * status `string` (values: Enabled, Disabled): The status of the schedule (i.e. Enabled, Disabled)
  * targetResourceId `string`: The resource ID to which the schedule belongs
  * taskType `string`: The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
  * timeZoneId `string`: The time zone ID (e.g. Pacific Standard time).
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * weeklyRecurrence [WeekDetailsFragment](#weekdetailsfragment)

### Secret
* Secret `object`: A secret.
  * properties **required** [SecretProperties](#secretproperties)
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### SecretProperties
* SecretProperties `object`: Properties of a secret.
  * provisioningState `string`: The provisioning status of the resource.
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).
  * value `string`: The value of the secret for secret creation.

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
  * owner `string`: The owner of the virtual machine.
  * resourceGroupName `string`: The resource group name for the schedule.
  * skipUrl `string`: The URL to skip auto-shutdown.
  * subscriptionId `string`: The subscription ID for the schedule.
  * text `string`: The text for the notification.
  * vmName `string`: The virtual machine to be shut down.

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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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
  * provisioningState `string`: The provisioning status of the resource.
  * secretStore [UserSecretStoreFragment](#usersecretstorefragment)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

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
  * id `string`: The identifier of the resource.
  * location `string`: The location of the resource.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

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
  * externalSubnets `array`: The external subnet properties.
    * items [ExternalSubnetFragment](#externalsubnetfragment)
  * provisioningState `string`: The provisioning status of the resource.
  * subnetOverrides `array`: The subnet overrides of the virtual network.
    * items [SubnetOverrideFragment](#subnetoverridefragment)
  * uniqueIdentifier `string`: The unique immutable identifier of a resource (Guid).

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


