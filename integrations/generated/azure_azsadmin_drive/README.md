# @datafire/azure_azsadmin_drive

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_drive
```
```js
let azure_azsadmin_drive = require('@datafire/azure_azsadmin_drive').create({
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

Drive operation endpoints and objects.

## Actions

### Drives_List
Returns a list of all storage drives at a location.


```js
azure_azsadmin_drive.Drives_List({
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
* output [DriveList](#drivelist)

### Drives_Get
Return the requested a storage drive.


```js
azure_azsadmin_drive.Drives_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "scaleUnit": "",
  "storageSubSystem": "",
  "drive": "",
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
  * drive **required** `string`: Name of the storage drive.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Drive](#drive)



## Definitions

### Drive
* Drive `object`: Representation of a drive resource.
  * properties [DriveModel](#drivemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### DriveList
* DriveList `object`: Pageable list of storage drives.
  * nextLink `string`: URI to the next page.
  * value `array`: List of storage drives.
    * items [Drive](#drive)

### DriveModel
* DriveModel `object`: Properties of a drive.
  * action `string`: Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
  * capacityGB `integer`: Total capacity in GB of the drive.
  * description `string`: Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok.
  * firmwareVersion `string`: The firmware version of the drive.
  * healthStatus `string`: Health status of the drive.
  * isIndicationEnabled `boolean`: Indicate whether the drive's identification LEDs are active or not.
  * manufacturer `string`: The name of the drive's manufacturer.
  * mediaType `string`: Media type of the drive.
  * model `string`: Model of the drive.
  * operationalStatus `string`: Operational status of the drive.
  * physicalLocation `string`: Indicate where the hardware is located.
  * serialNumber `string`: Serial number of the drive.
  * storageNode `string`: Node that the drive is physically connected.
  * storagePool `string`: The storage pool where the drive is located.
  * usage `string`: Intended usage of the drive.


