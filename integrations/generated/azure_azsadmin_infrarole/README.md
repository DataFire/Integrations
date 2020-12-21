# @datafire/azure_azsadmin_infrarole

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_infrarole
```
```js
let azure_azsadmin_infrarole = require('@datafire/azure_azsadmin_infrarole').create({
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

Infrastructure role operation endpoints and objects.

## Actions

### InfraRoles_List
Returns a list of all infrastructure roles at a location.


```js
azure_azsadmin_infrarole.InfraRoles_List({
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
* output [InfraRoleList](#infrarolelist)

### InfraRoles_Get
Returns the requested infrastructure role description.


```js
azure_azsadmin_infrarole.InfraRoles_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRole": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRole **required** `string`: Infrastructure role name.
  * api-version **required** `string`: Client API Version.

#### Output
* output [InfraRole](#infrarole)

### InfraRoles_Restart
Restarts the requested infrastructure role.


```js
azure_azsadmin_infrarole.InfraRoles_Restart({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "infraRole": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * location **required** `string`: Location of the resource.
  * infraRole **required** `string`: Infrastructure role name.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*



## Definitions

### InfraRole
* InfraRole `object`: Infrastructure role description.
  * properties [InfraRoleModel](#infrarolemodel)
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### InfraRoleList
* InfraRoleList `object`: Pageable list of infrastructure roles.
  * nextLink `string`: URI to the next page.
  * value `array`: List of infrastructure roles.
    * items [InfraRole](#infrarole)

### InfraRoleModel
* InfraRoleModel `object`: Infrastructure role properties.
  * displayName `string`: Display name for the infrastructure role.
  * instances `array`: List of infrastructure role instances.
    * items `string`
  * restartable `boolean`: Value indicating whether the infrastructure role can be restarted.


