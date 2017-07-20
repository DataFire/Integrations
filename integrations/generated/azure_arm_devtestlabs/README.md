# @datafire/azure_arm_devtestlabs

Client library for DevTestLabsClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_devtestlabs
```

```js
let datafire = require('datafire');
let azure_arm_devtestlabs = require('@datafire/azure_arm_devtestlabs').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_devtestlabs: account,
  }
})


azure_arm_devtestlabs.Lab_ListBySubscription({}, context).then(data => {
  console.log(data);
})
```

## Description
The DevTest Labs Client.

## Actions
### Lab_ListBySubscription
List labs in a subscription.


```js
azure_arm_devtestlabs.Lab_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Lab_ListByResourceGroup
List labs in a resource group.


```js
azure_arm_devtestlabs.Lab_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### ArtifactSource_List
List artifact sources in a given lab.


```js
azure_arm_devtestlabs.ArtifactSource_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Artifact_List
List artifacts in a given artifact source.


```js
azure_arm_devtestlabs.Artifact_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Artifact_GetResource
Get artifact.


```js
azure_arm_devtestlabs.Artifact_GetResource({
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
* api-version (string) **required** - Client API version.

### Artifact_GenerateArmTemplate
Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.


```js
azure_arm_devtestlabs.Artifact_GenerateArmTemplate({
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

### ArtifactSource_DeleteResource
Delete artifact source.


```js
azure_arm_devtestlabs.ArtifactSource_DeleteResource({
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

### ArtifactSource_GetResource
Get artifact source.


```js
azure_arm_devtestlabs.ArtifactSource_GetResource({
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

### ArtifactSource_PatchResource
Modify properties of artifact sources.


```js
azure_arm_devtestlabs.ArtifactSource_PatchResource({
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

### ArtifactSource_CreateOrUpdateResource
Create or replace an existing artifact source.


```js
azure_arm_devtestlabs.ArtifactSource_CreateOrUpdateResource({
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

### Cost_GetResource
Get cost.


```js
azure_arm_devtestlabs.Cost_GetResource({
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
* api-version (string) **required** - Client API version.

### CustomImage_List
List custom images in a given lab.


```js
azure_arm_devtestlabs.CustomImage_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### CustomImage_DeleteResource
Delete custom image. This operation can take a while to complete.


```js
azure_arm_devtestlabs.CustomImage_DeleteResource({
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

### CustomImage_GetResource
Get custom image.


```js
azure_arm_devtestlabs.CustomImage_GetResource({
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

### CustomImage_CreateOrUpdateResource
Create or replace an existing custom image. This operation can take a while to complete.


```js
azure_arm_devtestlabs.CustomImage_CreateOrUpdateResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "customImage": {},
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

### Formula_List
List formulas in a given lab.


```js
azure_arm_devtestlabs.Formula_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Formula_DeleteResource
Delete formula.


```js
azure_arm_devtestlabs.Formula_DeleteResource({
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

### Formula_GetResource
Get formula.


```js
azure_arm_devtestlabs.Formula_GetResource({
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

### Formula_CreateOrUpdateResource
Create or replace an existing Formula. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Formula_CreateOrUpdateResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "labName": "",
  "name": "",
  "formula": {},
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* labName (string) **required** - The name of the lab.
* name (string) **required** - The name of the formula.
* formula (object) **required** - A formula.
* api-version (string) **required** - Client API version.

### GalleryImage_List
List gallery images in a given lab.


```js
azure_arm_devtestlabs.GalleryImage_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### PolicySet_EvaluatePolicies
Evaluates Lab Policy.


```js
azure_arm_devtestlabs.PolicySet_EvaluatePolicies({
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

### Policy_List
List policies in a given policy set.


```js
azure_arm_devtestlabs.Policy_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Policy_DeleteResource
Delete policy.


```js
azure_arm_devtestlabs.Policy_DeleteResource({
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

### Policy_GetResource
Get policy.


```js
azure_arm_devtestlabs.Policy_GetResource({
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

### Policy_PatchResource
Modify properties of policies.


```js
azure_arm_devtestlabs.Policy_PatchResource({
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

### Policy_CreateOrUpdateResource
Create or replace an existing policy.


```js
azure_arm_devtestlabs.Policy_CreateOrUpdateResource({
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

### Schedule_List
List schedules in a given lab.


```js
azure_arm_devtestlabs.Schedule_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### Schedule_DeleteResource
Delete schedule.


```js
azure_arm_devtestlabs.Schedule_DeleteResource({
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

### Schedule_GetResource
Get schedule.


```js
azure_arm_devtestlabs.Schedule_GetResource({
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

### Schedule_PatchResource
Modify properties of schedules.


```js
azure_arm_devtestlabs.Schedule_PatchResource({
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

### Schedule_CreateOrUpdateResource
Create or replace an existing schedule.


```js
azure_arm_devtestlabs.Schedule_CreateOrUpdateResource({
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

### Schedule_Execute
Execute a schedule. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Schedule_Execute({
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

### VirtualMachine_List
List virtual machines in a given lab.


```js
azure_arm_devtestlabs.VirtualMachine_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### VirtualMachine_DeleteResource
Delete virtual machine. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachine_DeleteResource({
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
* name (string) **required** - The name of the virtual Machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_GetResource
Get virtual machine.


```js
azure_arm_devtestlabs.VirtualMachine_GetResource({
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
* name (string) **required** - The name of the virtual Machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_PatchResource
Modify properties of virtual machines.


```js
azure_arm_devtestlabs.VirtualMachine_PatchResource({
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
* name (string) **required** - The name of the virtual Machine.
* labVirtualMachine (object) **required** - A virtual machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_CreateOrUpdateResource
Create or replace an existing Virtual Machine. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachine_CreateOrUpdateResource({
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
* name (string) **required** - The name of the virtual Machine.
* labVirtualMachine (object) **required** - A virtual machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_ApplyArtifacts
Apply artifacts to Lab VM. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachine_ApplyArtifacts({
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
* name (string) **required** - The name of the virtual Machine.
* applyArtifactsRequest (object) **required** - Request body for applying artifacts to a virtual machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_Start
Start a Lab VM. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachine_Start({
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
* name (string) **required** - The name of the virtual Machine.
* api-version (string) **required** - Client API version.

### VirtualMachine_Stop
Stop a Lab VM. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualMachine_Stop({
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
* name (string) **required** - The name of the virtual Machine.
* api-version (string) **required** - Client API version.

### VirtualNetwork_List
List virtual networks in a given lab.


```js
azure_arm_devtestlabs.VirtualNetwork_List({
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
* $filter (string) - The filter to apply on the operation.
* $top (integer) - The maximum number of resources to return from the operation.
* $orderBy (string) - The ordering expression for the results, using OData notation.
* api-version (string) **required** - Client API version.

### VirtualNetwork_DeleteResource
Delete virtual network. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualNetwork_DeleteResource({
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

### VirtualNetwork_GetResource
Get virtual network.


```js
azure_arm_devtestlabs.VirtualNetwork_GetResource({
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

### VirtualNetwork_PatchResource
Modify properties of virtual networks.


```js
azure_arm_devtestlabs.VirtualNetwork_PatchResource({
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

### VirtualNetwork_CreateOrUpdateResource
Create or replace an existing virtual network. This operation can take a while to complete.


```js
azure_arm_devtestlabs.VirtualNetwork_CreateOrUpdateResource({
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

### Lab_DeleteResource
Delete lab. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Lab_DeleteResource({
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

### Lab_GetResource
Get lab.


```js
azure_arm_devtestlabs.Lab_GetResource({
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

### Lab_PatchResource
Modify properties of labs.


```js
azure_arm_devtestlabs.Lab_PatchResource({
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

### Lab_CreateOrUpdateResource
Create or replace an existing Lab. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Lab_CreateOrUpdateResource({
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

### Lab_CreateEnvironment
Create virtual machines in a Lab. This operation can take a while to complete.


```js
azure_arm_devtestlabs.Lab_CreateEnvironment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "labVirtualMachine": {},
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The subscription ID.
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the lab.
* labVirtualMachine (object) **required** - A virtual machine.
* api-version (string) **required** - Client API version.

### Lab_GenerateUploadUri
Generate a URI for uploading custom disk images to a Lab.


```js
azure_arm_devtestlabs.Lab_GenerateUploadUri({
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

### Lab_ListVhds
List disk images available for custom image creation.


```js
azure_arm_devtestlabs.Lab_ListVhds({
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

