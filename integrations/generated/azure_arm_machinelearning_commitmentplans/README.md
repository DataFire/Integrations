# @datafire/azure_arm_machinelearning_commitmentplans

Client library for Azure ML Commitment Plans Management Client

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_machinelearning_commitmentplans
```

```js
let datafire = require('datafire');
let azure_arm_machinelearning_commitmentplans = require('@datafire/azure_arm_machinelearning_commitmentplans').actions;
let context = new datafire.Context();

azure_arm_machinelearning_commitmentplans.CommitmentPlans_List({}, context).then(data => {
  console.log(data);
})
```

## Description
These APIs allow end users to operate on Azure Machine Learning Commitment Plans resources and their child Commitment Association resources. They support CRUD operations for commitment plans, get and list operations for commitment associations, moving commitment associations between commitment plans, and retrieving commitment plan usage history.

## Actions
### CommitmentPlans_List
Retrieve all Azure ML commitment plans in a subscription.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* $skipToken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentPlans_ListInResourceGroup
Retrieve all Azure ML commitment plans in a resource group.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_ListInResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* $skipToken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentPlans_Remove
Remove an existing Azure ML commitment plan.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_Remove({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentPlans_Get
Retrieve an Azure ML commitment plan by its subscription, resource group and name.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentPlans_Patch
Patch an existing Azure ML commitment plan resource.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_Patch({
  "patchPayload": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* patchPayload (object) **required** - The properties of a commitment plan which may be updated via PATCH.
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentPlans_CreateOrUpdate
Create a new Azure ML commitment plan resource or updates an existing one.


```js
azure_arm_machinelearning_commitmentplans.CommitmentPlans_CreateOrUpdate({
  "createOrUpdatePayload": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* createOrUpdatePayload (object) **required** - An Azure ML commitment plan resource.
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentAssociations_List
Get all commitment associations for a parent commitment plan.


```js
azure_arm_machinelearning_commitmentplans.CommitmentAssociations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* $skipToken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentAssociations_Get
Get a commitment association.


```js
azure_arm_machinelearning_commitmentplans.CommitmentAssociations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "commitmentAssociationName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* commitmentAssociationName (string) **required** - The commitment association name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

### CommitmentAssociations_Move
Re-parent a commitment association from one commitment plan to another.


```js
azure_arm_machinelearning_commitmentplans.CommitmentAssociations_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "commitmentAssociationName": "",
  "api-version": "",
  "movePayload": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* commitmentAssociationName (string) **required** - The commitment association name.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.
* movePayload (object) **required** - Specifies the destination Azure ML commitment plan for a move operation.

### UsageHistory_List
Retrieve the usage history for an Azure ML commitment plan.


```js
azure_arm_machinelearning_commitmentplans.UsageHistory_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* resourceGroupName (string) **required** - The resource group name.
* commitmentPlanName (string) **required** - The Azure ML commitment plan name.
* $skipToken (string) - Continuation token for pagination.
* api-version (string) **required** - The version of the Microsoft.MachineLearning resource provider API to use.

