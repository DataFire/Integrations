# @datafire/azure_arm_devtestlabs

Client library for DevTestLabsClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_devtestlabs
```

```js
let datafire = require('datafire');
let azure_arm_devtestlabs = require('@datafire/azure_arm_devtestlabs').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_devtestlabs.Labs_ListBySubscription({}).then(data => {
  console.log(data);
})
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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* $expand (string) - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### GlobalSchedules_ListBySubscription
List schedules in a subscription.


```js
azure_arm_devtestlabs.GlobalSchedules_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Labs_ListByResourceGroup
List labs in a resource group.


```js
azure_arm_devtestlabs.Labs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* $expand (string) - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=displayName)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* artifactSourceName (string) **required** - The name of the artifact source.
* $expand (string) - Specify the $expand query. Example: 'properties($select=displayName)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* artifactSourceName (string) **required** - The name of the artifact source.
* name (string) **required** - The name of the azure Resource Manager template.
* $expand (string) - Specify the $expand query. Example: 'properties($select=displayName)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* artifactSourceName (string) **required** - The name of the artifact source.
* $expand (string) - Specify the $expand query. Example: 'properties($select=title)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* artifactSourceName (string) **required** - The name of the artifact source.
* name (string) **required** - The name of the artifact.
* $expand (string) - Specify the $expand query. Example: 'properties($select=title)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* artifactSourceName (string) **required** - The name of the artifact source.
* name (string) **required** - The name of the artifact.
* generateArmTemplateRequest (object) **required** - Parameters for generating an ARM template for deploying artifacts.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the artifact source.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the artifact source.
* $expand (string) - Specify the $expand query. Example: 'properties($select=displayName)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the artifact source.
* artifactSource (object) **required** - Properties of an artifact source.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the artifact source.
* artifactSource (object) **required** - Properties of an artifact source.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the cost.
* $expand (string) - Specify the $expand query. Example: 'properties($expand=labCostDetails)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the cost.
* labCost (object) **required** - A cost item.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=vm)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the custom image.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the custom image.
* $expand (string) - Specify the $expand query. Example: 'properties($select=vm)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the custom image.
* customImage (object) **required** - A custom image.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=description)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the formula.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the formula.
* $expand (string) - Specify the $expand query. Example: 'properties($select=description)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the formula.
* formula (object) **required** - A formula for creating a VM, specifying an image base and other parameters
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=author)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=webHookUrl)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the notificationChannel.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the notificationChannel.
* $expand (string) - Specify the $expand query. Example: 'properties($select=webHookUrl)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the notificationChannel.
* notificationChannel (object) **required** - A notification.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the notificationChannel.
* notificationChannel (object) **required** - A notification.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the notificationChannel.
* notifyParameters (object) **required** - Properties for generating a Notification.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the policy set.
* evaluatePoliciesRequest (object) **required** - Request body for evaluating a policy set.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* policySetName (string) **required** - The name of the policy set.
* $expand (string) - Specify the $expand query. Example: 'properties($select=description)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* policySetName (string) **required** - The name of the policy set.
* name (string) **required** - The name of the policy.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* policySetName (string) **required** - The name of the policy set.
* name (string) **required** - The name of the policy.
* $expand (string) - Specify the $expand query. Example: 'properties($select=description)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* policySetName (string) **required** - The name of the policy set.
* name (string) **required** - The name of the policy.
* policy (object) **required** - A Policy.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* policySetName (string) **required** - The name of the policy set.
* name (string) **required** - The name of the policy.
* policy (object) **required** - A Policy.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the service runner.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the service runner.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the service runner.
* serviceRunner (object) **required** - A container for a managed identity to execute DevTest lab services.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=identity)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the user profile.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the user profile.
* $expand (string) - Specify the $expand query. Example: 'properties($select=identity)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the user profile.
* user (object) **required** - Profile of a lab user.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the user profile.
* user (object) **required** - Profile of a lab user.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* $expand (string) - Specify the $expand query. Example: 'properties($select=diskType)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the disk.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the disk.
* $expand (string) - Specify the $expand query. Example: 'properties($select=diskType)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the disk.
* disk (object) **required** - A Disk.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the disk.
* attachDiskProperties (object) **required** - Properties of the disk to attach.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the disk.
* detachDiskProperties (object) **required** - Properties of the disk to detach.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* $expand (string) - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the environment.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the environment.
* $expand (string) - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the environment.
* dtlEnvironment (object) **required** - An environment, which is essentially an ARM template deployment.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* $expand (string) - Specify the $expand query. Example: 'properties($select=value)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the secret.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the secret.
* $expand (string) - Specify the $expand query. Example: 'properties($select=value)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* userName (string) **required** - The name of the user profile.
* name (string) **required** - The name of the secret.
* secret (object) **required** - A secret.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* $expand (string) - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* labVirtualMachine (object) **required** - A virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* labVirtualMachine (object) **required** - A virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* dataDiskProperties (object) **required** - Request body for adding a new or existing data disk to a virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* applyArtifactsRequest (object) **required** - Request body for applying artifacts to a virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* detachDataDiskProperties (object) **required** - Request body for detaching data disk from a virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* name (string) **required** - The name of the schedule.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* virtualMachineName (string) **required** - The name of the virtual machine.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual network.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual network.
* $expand (string) - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual network.
* virtualNetwork (object) **required** - A virtual network.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the virtual network.
* virtualNetwork (object) **required** - A virtual network.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* $expand (string) - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* lab (object) **required** - A lab.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* lab (object) **required** - A lab.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* labVirtualMachineCreationParameter (object) **required** - Properties for creating a virtual machine.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* exportResourceUsageParameters (object) **required** - The parameters of the export operation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* generateUploadUriParameter (object) **required** - Properties for generating an upload URI.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* api-version (string) **required** - Client API version.

### GlobalSchedules_ListByResourceGroup
List schedules in a resource group.


```js
azure_arm_devtestlabs.GlobalSchedules_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* $filter (string) - The filter to apply to the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderby (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* $expand (string) - Specify the $expand query. Example: 'properties($select=status)'
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* schedule (object) **required** - A schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* api-version (string) **required** - Client API version.

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

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the schedule.
* retargetScheduleProperties (object) **required** - Properties for retargeting a virtual machine schedule.
* api-version (string) **required** - Client API version.

