# @datafire/azure_azsadmin_acquiredplan

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_acquiredplan
```
```js
let azure_azsadmin_acquiredplan = require('@datafire/azure_azsadmin_acquiredplan').create({
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

The Admin Subscriptions Management Client.

## Actions

### AcquiredPlans_List
Get a collection of all acquired plans that subscription has access to.


```js
azure_azsadmin_acquiredplan.AcquiredPlans_List({
  "subscriptionId": "",
  "targetSubscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * targetSubscriptionId **required** `string`: The target subscription ID.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PlanAcquisitionList](#planacquisitionlist)

### AcquiredPlans_Delete
Deletes an acquired plan.


```js
azure_azsadmin_acquiredplan.AcquiredPlans_Delete({
  "subscriptionId": "",
  "targetSubscriptionId": "",
  "planAcquisitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * targetSubscriptionId **required** `string`: The target subscription ID.
  * planAcquisitionId **required** `string`: The plan acquisition Identifier
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### AcquiredPlans_Get
Gets the specified plan acquired by a subscription consuming the offer.


```js
azure_azsadmin_acquiredplan.AcquiredPlans_Get({
  "subscriptionId": "",
  "targetSubscriptionId": "",
  "planAcquisitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * targetSubscriptionId **required** `string`: The target subscription ID.
  * planAcquisitionId **required** `string`: The plan acquisition Identifier
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PlanAcquisition](#planacquisition)

### AcquiredPlans_Create
Creates an acquired plan.


```js
azure_azsadmin_acquiredplan.AcquiredPlans_Create({
  "subscriptionId": "",
  "targetSubscriptionId": "",
  "planAcquisitionId": "",
  "api-version": "",
  "newAcquiredPlan": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * targetSubscriptionId **required** `string`: The target subscription ID.
  * planAcquisitionId **required** `string`: The plan acquisition Identifier
  * api-version **required** `string`: Client Api Version.
  * newAcquiredPlan **required** [PlanAcquisition](#planacquisition)

#### Output
* output [PlanAcquisition](#planacquisition)



## Definitions

### PlanAcquisition
* PlanAcquisition `object`: Represents the acquisition of an add-on plan for a subscription.
  * acquisitionId `string`: Acquisition identifier.
  * acquisitionTime `string`: Acquisition time.
  * externalReferenceId `string`: External reference identifier.
  * id `string`: Identifier in the tenant subscription context.
  * planId `string`: Plan identifier in the tenant subscription context.
  * provisioningState [ProvisioningState](#provisioningstate)

### PlanAcquisitionList
* PlanAcquisitionList `object`: List of acquired plans.
  * nextLink `string`: URI to the next page.
  * value `array`: List of acquired plans.
    * items [PlanAcquisition](#planacquisition)

### ProvisioningState
* ProvisioningState `string` (values: NotSpecified, Accepted, Failed, Succeeded): Provisioning state for subscriptions service resources, for example, resource provider registration.


