# @datafire/azure_network_ddosprotectionplan

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_ddosprotectionplan
```
```js
let azure_network_ddosprotectionplan = require('@datafire/azure_network_ddosprotectionplan').create({
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

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### DdosProtectionPlans_List
Gets all DDoS protection plans in a subscription.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosProtectionPlanListResult](#ddosprotectionplanlistresult)

### DdosProtectionPlans_ListByResourceGroup
Gets all the DDoS protection plans in a resource group.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosProtectionPlanListResult](#ddosprotectionplanlistresult)

### DdosProtectionPlans_Delete
Deletes the specified DDoS protection plan.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_Delete({
  "resourceGroupName": "",
  "ddosProtectionPlanName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosProtectionPlanName **required** `string`: The name of the DDoS protection plan.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DdosProtectionPlans_Get
Gets information about the specified DDoS protection plan.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_Get({
  "resourceGroupName": "",
  "ddosProtectionPlanName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosProtectionPlanName **required** `string`: The name of the DDoS protection plan.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosProtectionPlan](#ddosprotectionplan)

### DdosProtectionPlans_UpdateTags
Update a DDoS protection plan tags.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_UpdateTags({
  "resourceGroupName": "",
  "ddosProtectionPlanName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosProtectionPlanName **required** `string`: The name of the DDoS protection plan.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosProtectionPlan](#ddosprotectionplan)

### DdosProtectionPlans_CreateOrUpdate
Creates or updates a DDoS protection plan.


```js
azure_network_ddosprotectionplan.DdosProtectionPlans_CreateOrUpdate({
  "resourceGroupName": "",
  "ddosProtectionPlanName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosProtectionPlanName **required** `string`: The name of the DDoS protection plan.
  * parameters **required** [DdosProtectionPlan](#ddosprotectionplan)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosProtectionPlan](#ddosprotectionplan)



## Definitions

### DdosProtectionPlan
* DdosProtectionPlan `object`: A DDoS protection plan in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * properties [DdosProtectionPlanPropertiesFormat](#ddosprotectionplanpropertiesformat)
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### DdosProtectionPlanListResult
* DdosProtectionPlanListResult `object`: A list of DDoS protection plans.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of DDoS protection plans.
    * items [DdosProtectionPlan](#ddosprotectionplan)

### DdosProtectionPlanPropertiesFormat
* DdosProtectionPlanPropertiesFormat `object`: DDoS protection plan properties.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
  * virtualNetworks `array`: The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.


