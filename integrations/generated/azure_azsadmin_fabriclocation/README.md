# @datafire/azure_azsadmin_fabriclocation

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_fabriclocation
```
```js
let azure_azsadmin_fabriclocation = require('@datafire/azure_azsadmin_fabriclocation').create({
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

Fabric location operation endpoints and objects.

## Actions

### FabricLocations_List
Returns a list of all fabric locations.


```js
azure_azsadmin_fabriclocation.FabricLocations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [FabricLocationList](#fabriclocationlist)

### FabricLocations_Get
Returns the requested fabric location.


```js
azure_azsadmin_fabriclocation.FabricLocations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "fabricLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * fabricLocation **required** `string`: Fabric location.
  * api-version **required** `string`: Client API Version.

#### Output
* output [FabricLocation](#fabriclocation)



## Definitions

### FabricLocation
* FabricLocation `object`: Fabric Location resource.
  * properties [FabricLocationModel](#fabriclocationmodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### FabricLocationList
* FabricLocationList `object`: Pageable list of fabric locations.
  * nextLink `string`: URI to the next page.
  * value `array`: List of fabric locations.
    * items [FabricLocation](#fabriclocation)

### FabricLocationModel
* FabricLocationModel `object`: All properties of a fabric location resource.
  * exclusiveAdminOperationName `string`: Name of the running exclusive admin operation.
  * exclusiveAdminOperationRunning `boolean`: Value for whether an exclusive admin operation is running.
  * externalDNSIPAddress01 `string`: First external IP address of the DNS server.
  * externalDNSIPAddress02 `string`: Second external IP Address of the DNS server.
  * pepIpAddresses `array`: The IP addresses of the privileged endpoints.
    * items `string`
  * shutDownActionPlanEndTime `string`: Last known stamp stop time for the shut down action plan.
  * shutDownActionPlanStartTime `string`: Last known stamp start time for the shut down action plan
  * stampInformationId `string`: The deployment id of the stamp.
  * startUpActionPlanEndTime `string`: Last known stamp stop time for the start up action plan.
  * startUpActionPlanStartTime `string`: Last known stamp start time for the start up action plan.
  * timeServer `string`: The IP address of the time server.


