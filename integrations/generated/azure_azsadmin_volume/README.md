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

.then(data => {
  console.log(data);
});
```

## Description

Volume operation endpoints and objects.

## Actions

### Volumes_List
Returns a list of all storage volumes at a location.


```js
azure_azsadmin_volume.Volumes_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "storageSubSystem": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * storageSubSystem **required** `string`: Name of the storage system.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [VolumeList](#volumelist)

### Volumes_Get
Return the requested a storage volume.


```js
azure_azsadmin_volume.Volumes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "storageSubSystem": "",
  "volume": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * scaleUnit **required** `string`: Name of the scale units.
  * storageSubSystem **required** `string`: Name of the storage system.
  * volume **required** `string`: Name of the storage volume.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Volume](#volume)



## Definitions

### Volume
* Volume `object`: Representation of a volume resource.
  * properties [VolumeModel](#volumemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### VolumeList
* VolumeList `object`: Pageable list of storage volumes.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage volumes.
    * items [Volume](#volume)

### VolumeModel
* VolumeModel `object`: Properties of a volume.
  * action `string`: Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
  * description `string`: Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
  * healthStatus `string`: Health status of the volume.
  * operationalStatus `string`: Operational status of the volume.
  * remainingCapacityGB `integer`: Remaining capacity in GB of the volume.
  * repairStatus `string`: Repair status of the volume. Empty if no repair job running, something like 'Running, 90%' when repairing.
  * totalCapacityGB `integer`: Total capacity in GB of the volume.
  * volumeLabel `string`: Volume label.


