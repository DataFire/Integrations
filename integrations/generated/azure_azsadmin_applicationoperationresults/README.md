# @datafire/azure_azsadmin_applicationoperationresults

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_applicationoperationresults
```
```js
let azure_azsadmin_applicationoperationresults = require('@datafire/azure_azsadmin_applicationoperationresults').create({
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

Application operation results.

## Actions

### ApplicationOperationResults_List
Returns a list of all application operation results at a location.


```js
azure_azsadmin_applicationoperationresults.ApplicationOperationResults_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [ApplicationOperationResultList](#applicationoperationresultlist)

### ApplicationOperationResults_Get
Returns the status of an application operation.


```js
azure_azsadmin_applicationoperationresults.ApplicationOperationResults_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "operation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * operation **required** `string`: Operation identifier.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ApplicationOperationResult](#applicationoperationresult)



## Definitions

### ApplicationOperationResult
* ApplicationOperationResult `object`: Application operation result description.
  * properties [ApplicationOperationResultModel](#applicationoperationresultmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### ApplicationOperationResultList
* ApplicationOperationResultList `object`: Pageable list of application operation results.
  * nextLink `string`: URI to the next page.
  * value `array`: List of application operation results.
    * items [ApplicationOperationResult](#applicationoperationresult)

### ApplicationOperationResultModel
* ApplicationOperationResultModel `object`: Application operation result properties.
  * instances `array`: List of operation result instances.
    * items `string`
  * provisioningState `string`: Success or failure of operation.


