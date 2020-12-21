# @datafire/azure_azsadmin_fileshare

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_fileshare
```
```js
let azure_azsadmin_fileshare = require('@datafire/azure_azsadmin_fileshare').create({
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

File share operation endpoints and objects.

## Actions

### FileShares_List
Returns a list of all fabric file shares at a certain location.


```js
azure_azsadmin_fileshare.FileShares_List({
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
* output [FileShareList](#filesharelist)

### FileShares_Get
Returns the requested fabric file share.


```js
azure_azsadmin_fileshare.FileShares_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "fileShare": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * fileShare **required** `string`: Fabric file share name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [FileShare](#fileshare)



## Definitions

### FileShare
* FileShare `object`: Object that contains properties of the file share resource.
  * properties [FileShareModel](#filesharemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### FileShareList
* FileShareList `object`: Pageable list of fabric file share locations.
  * value `array`: List of fabric file shares.
    * items [FileShare](#fileshare)

### FileShareModel
* FileShareModel `object`: Properties of a file share resource.
  * associatedVolume `string`: Associated volume ID.
  * uncPath `string`: The UNCPath for the fileshare.


