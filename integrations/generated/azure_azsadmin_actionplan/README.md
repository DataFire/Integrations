# @datafire/azure_azsadmin_actionplan

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_actionplan
```
```js
let azure_azsadmin_actionplan = require('@datafire/azure_azsadmin_actionplan').create({
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

Deployment Admin Client.

## Actions

### ActionPlans_List
Gets the list of action plans


```js
azure_azsadmin_actionplan.ActionPlans_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ActionPlanList](#actionplanlist)

### ActionPlans_Get
Gets the specified action plan


```js
azure_azsadmin_actionplan.ActionPlans_Get({
  "subscriptionId": "",
  "planId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * planId **required** `string`: Identifier of the action plan.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ActionPlanResourceEntity](#actionplanresourceentity)



## Definitions

### ActionPlanAdminProperties
* ActionPlanAdminProperties `object`: Action Plan Properties
  * actionPlanInstanceId `string`: Action plan instance identifier
  * actionPlanUri `string`: Action plan uri
  * blobContainerName `string`: Blob container name storing the deployment data
  * endTime `string`: The deployment end time
  * error `object`: Error information
    * code `string`: Error Code
    * details [ExtendedErrorInfo](#extendederrorinfo)
    * message `string`: Error Message
  * parameters `object`: Error information
    * value `string`: Parameters as JToken string
  * provisioningState `string`: The provisioning state
  * resourceGroupName `string`: The target resource group name
  * startTime `string`: The deployment start time
  * subscriptionId `string`: The target subscription identifier

### ActionPlanList
* ActionPlanList `object`: List of action plans
  * nextLink `string`: Continuation token
  * value `array`: Array of action plans.
    * items [ActionPlanResourceEntity](#actionplanresourceentity)

### ActionPlanResourceEntity
* ActionPlanResourceEntity `object`: Action Plan Resource Entity
  * eTag `string`: Entity tag of the resource
  * properties [ActionPlanAdminProperties](#actionplanadminproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ExtendedErrorInfo



