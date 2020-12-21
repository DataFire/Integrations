# @datafire/azure_azsadmin_updatelocations

Client library for UpdateAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_updatelocations
```
```js
let azure_azsadmin_updatelocations = require('@datafire/azure_azsadmin_updatelocations').create({
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

Update location operation endpoints and objects.

## Actions

### UpdateLocations_List
Get the list of update locations.


```js
azure_azsadmin_updatelocations.UpdateLocations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateLocationList](#updatelocationlist)

### UpdateLocations_Get
Get an update location based on name.


```js
azure_azsadmin_updatelocations.UpdateLocations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "updateLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Resource group name.
  * updateLocation **required** `string`: The name of the update location.
  * api-version **required** `string`: Client API Version.

#### Output
* output [UpdateLocation](#updatelocation)



## Definitions

### RegionUpdateState
* RegionUpdateState `string` (values: Unknown, AppliedSuccessfully, AppliedUpdateAvailableSuccessfully, UpdateInProgress, UpdateFailed): State of the region in regard to update.

### UpdateLocation
* UpdateLocation `object`: Information related to a location's update status.
  * properties [UpdateLocationModel](#updatelocationmodel)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### UpdateLocationList
* UpdateLocationList `object`: The list of update locations.
  * nextLink `string`: The link to get the next page of update locations.
  * value `array`: The list of update locations.
    * items [UpdateLocation](#updatelocation)

### UpdateLocationModel
* UpdateLocationModel `object`: Model which holds information related to update location.
  * currentOemVersion `string`: Current OEM version of your AzureStack deployment.
  * currentVersion `string`: Current version of your AzureStack deployment.
  * lastUpdated `string`: Date of last update.
  * state [RegionUpdateState](#regionupdatestate)


