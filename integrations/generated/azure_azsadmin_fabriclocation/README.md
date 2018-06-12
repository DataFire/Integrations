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

azure_azsadmin_fabriclocation.FabricLocations_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Fabric location operation endpoints and objects.

## Actions

### FabricLocations_List
Get a list of all fabric locations.


```js
azure_azsadmin_fabriclocation.FabricLocations_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: OData filter parameter.

#### Output
* output [FabricLocationList](#fabriclocationlist)

### FabricLocations_Get
Get a fabric location.


```js
azure_azsadmin_fabriclocation.FabricLocations_Get({
  "subscriptionId": "",
  "location": "",
  "fabricLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * fabricLocation **required** `string`: Fabric Location.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [FabricLocation](#fabriclocation)



## Definitions

### FabricLocation
* FabricLocation `object`: Place holder for fabric location.
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### FabricLocationList
* FabricLocationList `object`: Pageable list of fabric locations.
  * nextLink `string`: URI to the next page.
  * value `array`: List of fabric locations for this page.
    * items [FabricLocation](#fabriclocation)


