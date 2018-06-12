# @datafire/azure_azsadmin_operations

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_operations
```
```js
let azure_azsadmin_operations = require('@datafire/azure_azsadmin_operations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_operations.ComputeFabricOperations_Get({
  "subscriptionId": "",
  "location": "",
  "provider": "",
  "computeOperationResult": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Operation status operation endpoints and objects.

## Actions

### ComputeFabricOperations_Get
Get the status of a compute fabric operation.


```js
azure_azsadmin_operations.ComputeFabricOperations_Get({
  "subscriptionId": "",
  "location": "",
  "provider": "",
  "computeOperationResult": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * provider **required** `string`: Name of the provider.
  * computeOperationResult **required** `string`: Id of a compute fabric operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatus](#operationstatus)

### NetworkFabricOperations_Get
Get the status of a network fabric operation.


```js
azure_azsadmin_operations.NetworkFabricOperations_Get({
  "subscriptionId": "",
  "location": "",
  "provider": "",
  "networkOperationResult": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * provider **required** `string`: Name of the provider.
  * networkOperationResult **required** `string`: Id of a network fabric operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatus](#operationstatus)



## Definitions

### OperationStatus
* OperationStatus `object`: Status of the compute operation.
  * properties [ProvisioningStateModel](#provisioningstatemodel)

### ProvisioningStateModel
* ProvisioningStateModel `object`: The state of the operation.
  * provisioningState `string`: The state of the operation.


