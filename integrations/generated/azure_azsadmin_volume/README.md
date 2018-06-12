# @datafire/azure_azsadmin_volume

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_volume
```
```js
let azure_azsadmin_volume = require('@datafire/azure_azsadmin_volume').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azsadmin_volume.Volumes_List({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "storagePool": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Volume operation endpoints and objects.

## Actions

### Volumes_List
Get a list of all volumes at a location.


```js
azure_azsadmin_volume.Volumes_List({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "storagePool": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * storagePool **required** `string`: Storage pool name.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [VolumeList](#volumelist)

### Volumes_Get
Get a volume.


```js
azure_azsadmin_volume.Volumes_Get({
  "subscriptionId": "",
  "location": "",
  "storageSubSystem": "",
  "storagePool": "",
  "volume": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * storageSubSystem **required** `string`: Name of the storage system.
  * storagePool **required** `string`: Storage pool name.
  * volume **required** `string`: Name of the volume.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Volume](#volume)



## Definitions

### Volume
* Volume `object`: Representation of a volume resource.
  * properties [VolumeModel](#volumemodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### VolumeList
* VolumeList `object`: Pageable list of volumes.
  * nextLink `string`: URI to the next page.
  * value `array`: List of volumes on this page.
    * items [Volume](#volume)

### VolumeModel
* VolumeModel `object`: Properties of a volume.
  * fileSystem `string`: Filesystem type.
  * remainingSizeGB `integer`: Amount of free space in GB.
  * sizeGB `integer`: Total amount of space in GB.
  * volumeLabel `string`: Volume label.


