# @datafire/azure_azsadmin_actionplanoperation

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_actionplanoperation
```
```js
let azure_azsadmin_actionplanoperation = require('@datafire/azure_azsadmin_actionplanoperation').create({
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

### ActionPlanOperations_List
Lists the action plan operations


```js
azure_azsadmin_actionplanoperation.ActionPlanOperations_List({
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
* output [ActionPlanOperationsList](#actionplanoperationslist)

### ActionPlanOperations_Get
Gets the specified action plan operation


```js
azure_azsadmin_actionplanoperation.ActionPlanOperations_Get({
  "subscriptionId": "",
  "planId": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * planId **required** `string`: Identifier of the action plan.
  * operationId **required** `string`: Identifier of the action plan operation.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ActionPlanOperationResourceEntity](#actionplanoperationresourceentity)



## Definitions

### ActionPlanOperationAdminProperties
* ActionPlanOperationAdminProperties `object`: Action Plan Operation Properties
  * actionPlanInstanceId `string`: Action plan instance identifier
  * actionPlanOperationId `string`: Action plan operation identifier
  * blobContainerName `string`: Blob container name storing the deployment data
  * description `string`: The operation description
  * endTime `string`: The deployment end time
  * error `object`: Error information
    * code `string`: Error Code
    * details [ExtendedErrorInfo](#extendederrorinfo)
    * message `string`: Error Message
  * outputs `object`: The action plan operation outputs in JToken format
  * parameters `object`: The deployment parameters in JToken format
  * provisioningState `string`: The provisioning state
  * startTime `string`: The deployment start time
  * subscriptionId `string`: The target subscription identifier
  * title `string`: The operation title
  * type [ActionType](#actiontype)

### ActionPlanOperationResourceEntity
* ActionPlanOperationResourceEntity `object`: Action Plan Operation Resource Entity
  * eTag `string`: Entity tag of the resource
  * properties [ActionPlanOperationAdminProperties](#actionplanoperationadminproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ActionPlanOperationsList
* ActionPlanOperationsList `object`: List of action plan operations
  * nextLink `string`: Continuation token
  * value `array`: Array of action plan operations.
    * items [ActionPlanOperationResourceEntity](#actionplanoperationresourceentity)

### ActionType
* ActionType `string`: Action plan operation type

### ExtendedErrorInfo



