# @datafire/azure_machinelearning_commitmentplans

Client library for Azure ML Commitment Plans Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearning_commitmentplans
```
```js
let azure_machinelearning_commitmentplans = require('@datafire/azure_machinelearning_commitmentplans').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_machinelearning_commitmentplans.CommitmentPlans_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

These APIs allow end users to operate on Azure Machine Learning Commitment Plans resources and their child Commitment Association resources. They support CRUD operations for commitment plans, get and list operations for commitment associations, moving commitment associations between commitment plans, and retrieving commitment plan usage history.

## Actions

### CommitmentPlans_List
Retrieve all Azure ML commitment plans in a subscription.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * $skipToken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentPlanListResult](#commitmentplanlistresult)

### Skus_List
Lists the available commitment plan SKUs.


```js
azure_machinelearning_commitmentplans.Skus_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [SkuListResult](#skulistresult)

### CommitmentPlans_ListInResourceGroup
Retrieve all Azure ML commitment plans in a resource group.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_ListInResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * $skipToken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentPlanListResult](#commitmentplanlistresult)

### CommitmentPlans_Remove
Remove an existing Azure ML commitment plan.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_Remove({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
*Output schema unknown*

### CommitmentPlans_Get
Retrieve an Azure ML commitment plan by its subscription, resource group and name.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentPlan](#commitmentplan)

### CommitmentPlans_Patch
Patch an existing Azure ML commitment plan resource.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_Patch({
  "patchPayload": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * patchPayload **required** [CommitmentPlanPatchPayload](#commitmentplanpatchpayload)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentPlan](#commitmentplan)

### CommitmentPlans_CreateOrUpdate
Create a new Azure ML commitment plan resource or updates an existing one.


```js
azure_machinelearning_commitmentplans.CommitmentPlans_CreateOrUpdate({
  "createOrUpdatePayload": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * createOrUpdatePayload **required** [CommitmentPlan](#commitmentplan)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentPlan](#commitmentplan)

### CommitmentAssociations_List
Get all commitment associations for a parent commitment plan.


```js
azure_machinelearning_commitmentplans.CommitmentAssociations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * $skipToken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentAssociationListResult](#commitmentassociationlistresult)

### CommitmentAssociations_Get
Get a commitment association.


```js
azure_machinelearning_commitmentplans.CommitmentAssociations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "commitmentAssociationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * commitmentAssociationName **required** `string`: The commitment association name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [CommitmentAssociation](#commitmentassociation)

### CommitmentAssociations_Move
Re-parent a commitment association from one commitment plan to another.


```js
azure_machinelearning_commitmentplans.CommitmentAssociations_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "commitmentAssociationName": "",
  "api-version": "",
  "movePayload": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * commitmentAssociationName **required** `string`: The commitment association name.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.
  * movePayload **required** [MoveCommitmentAssociationRequest](#movecommitmentassociationrequest)

#### Output
* output [CommitmentAssociation](#commitmentassociation)

### UsageHistory_List
Retrieve the usage history for an Azure ML commitment plan.


```js
azure_machinelearning_commitmentplans.UsageHistory_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "commitmentPlanName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * commitmentPlanName **required** `string`: The Azure ML commitment plan name.
  * $skipToken `string`: Continuation token for pagination.
  * api-version **required** `string`: The version of the Microsoft.MachineLearning resource provider API to use.

#### Output
* output [PlanUsageHistoryListResult](#planusagehistorylistresult)



## Definitions

### CatalogSku
* CatalogSku `object`: Details of a commitment plan SKU.
  * capabilities `array`: The capability information for the specified SKU.
    * items [SkuCapability](#skucapability)
  * capacity [SkuCapacity](#skucapacity)
  * costs `array`: The cost information for the specified SKU.
    * items [SkuCost](#skucost)
  * locations `array`: Regions where the SKU is available.
    * items `string`
  * name `string`: SKU name
  * resourceType `string`: Resource type name
  * restrictions `array`: Restrictions which would prevent a SKU from being used. This is empty if there are no restrictions.
    * items [SkuRestrictions](#skurestrictions)
  * tier `string`: SKU tier

### CommitmentAssociation
* CommitmentAssociation `object`: Represents the association between a commitment plan and some other resource, such as a Machine Learning web service.
  * etag `string`: An entity tag used to enforce optimistic concurrency.
  * properties [CommitmentAssociationProperties](#commitmentassociationproperties)
  * id `string`: Resource Id.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags [Tags](#tags)
  * type `string`: Resource type.

### CommitmentAssociationListResult
* CommitmentAssociationListResult `object`: A page of commitment association resources.
  * nextLink `string`: A URI to retrieve the next page of results.
  * value `array`: The set of results for this page.
    * items [CommitmentAssociation](#commitmentassociation)

### CommitmentAssociationProperties
* CommitmentAssociationProperties `object`: Properties of an Azure ML commitment association.
  * associatedResourceId `string`: The ID of the resource this association points to, such as the ARM ID of an Azure ML web service.
  * commitmentPlanId `string`: The ARM ID of the parent Azure ML commitment plan.
  * creationDate `string`: The date at which this commitment association was created, in ISO 8601 format.

### CommitmentPlan
* CommitmentPlan `object`: An Azure ML commitment plan resource.
  * etag `string`: An entity tag used to enforce optimistic concurrency.
  * properties [CommitmentPlanProperties](#commitmentplanproperties)
  * sku [ResourceSku](#resourcesku)
  * id `string`: Resource Id.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags [Tags](#tags)
  * type `string`: Resource type.

### CommitmentPlanListResult
* CommitmentPlanListResult `object`: A page of commitment plan resources.
  * nextLink `string`: A URI to retrieve the next page of results.
  * value `array`: The set of results for this page.
    * items [CommitmentPlan](#commitmentplan)

### CommitmentPlanPatchPayload
* CommitmentPlanPatchPayload `object`: The properties of a commitment plan which may be updated via PATCH.
  * sku [ResourceSku](#resourcesku)
  * tags [Tags](#tags)

### CommitmentPlanProperties
* CommitmentPlanProperties `object`: Properties of an Azure ML commitment plan.
  * chargeForOverage `boolean`: Indicates whether usage beyond the commitment plan's included quantities will be charged.
  * chargeForPlan `boolean`: Indicates whether the commitment plan will incur a charge.
  * creationDate `string`: The date at which this commitment plan was created, in ISO 8601 format.
  * includedQuantities `object`: The included resource quantities this plan gives you.
  * maxAssociationLimit `integer`: The maximum number of commitment associations that can be children of this commitment plan.
  * maxCapacityLimit `integer`: The maximum scale-out capacity for this commitment plan.
  * minCapacityLimit `integer`: The minimum scale-out capacity for this commitment plan.
  * planMeter `string`: The Azure meter which will be used to charge for this commitment plan.
  * refillFrequencyInDays `integer`: The frequency at which this commitment plan's included quantities are refilled.
  * suspendPlanOnOverage `boolean`: Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities.

### MoveCommitmentAssociationRequest
* MoveCommitmentAssociationRequest `object`: Specifies the destination Azure ML commitment plan for a move operation.
  * destinationPlanId `string`: The ARM ID of the commitment plan to re-parent the commitment association to.

### PlanQuantity
* PlanQuantity `object`: Represents the quantity a commitment plan provides of a metered resource.
  * allowance `number`: The quantity added to the commitment plan at an interval specified by its allowance frequency.
  * amount `number`: The quantity available to the plan the last time usage was calculated.
  * includedQuantityMeter `string`: The Azure meter for usage against included quantities.
  * overageMeter `string`: The Azure meter for usage which exceeds included quantities.

### PlanUsageHistory
* PlanUsageHistory `object`: Represents historical information about usage of the Azure resources associated with a commitment plan.
  * planDeletionOverage `object`: Overage incurred as a result of deleting a commitment plan.
  * planMigrationOverage `object`: Overage incurred as a result of migrating a commitment plan from one SKU to another.
  * planQuantitiesAfterUsage `object`: Included quantities remaining after usage against the commitment plan's associated resources was calculated.
  * planQuantitiesBeforeUsage `object`: Included quantities remaining before usage against the commitment plan's associated resources was calculated.
  * planUsageOverage `object`: Usage against the commitment plan's associated resources which was not covered by included quantities and is therefore overage.
  * usage `object`: Usage against the commitment plan's associated resources.
  * usageDate `string`: The date of usage, in ISO 8601 format.

### PlanUsageHistoryListResult
* PlanUsageHistoryListResult `object`: A page of usage history.
  * nextLink `string`: A URI to retrieve the next page of results.
  * value `array`: The set of results for this page.
    * items [PlanUsageHistory](#planusagehistory)

### Resource
* Resource `object`: Common properties of an ARM resource.
  * id `string`: Resource Id.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags [Tags](#tags)
  * type `string`: Resource type.

### ResourceSku
* ResourceSku `object`: The SKU of a resource.
  * capacity `integer`: The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
  * name `string`: The SKU name. Along with tier, uniquely identifies the SKU.
  * tier `string`: The SKU tier. Along with name, uniquely identifies the SKU.

### SkuCapability
* SkuCapability `object`: Describes The SKU capabilites object.
  * name `string`: The capability name.
  * value `string`: The capability value.

### SkuCapacity
* SkuCapacity `object`: Describes scaling information of a SKU.
  * default `integer`: The default capacity.
  * maximum `integer`: The maximum capacity that can be set.
  * minimum `integer`: The minimum capacity.
  * scaleType `string` (values: Automatic, Manual, None): The scale type applicable to the sku.

### SkuCost
* SkuCost `object`: Describes metadata for SKU cost info.
  * extendedUnit `string`: The overall duration represented by the quantity.
  * meterID `string`: The meter used for this part of a SKU's cost.
  * quantity `integer`: The multiplier for the meter ID.

### SkuListResult
* SkuListResult `object`: The list of commitment plan SKUs.
  * value `array`
    * items [CatalogSku](#catalogsku)

### SkuRestrictions
* SkuRestrictions `object`: Describes restrictions which would prevent a SKU from being used.
  * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason for restriction.
  * type `string` (values: location, zone): The type of restrictions.
  * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
    * items `string`

### Tags
* Tags `object`: Resource tags


