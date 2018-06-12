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

azure_azsadmin_infrarole.InfraRoles_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

InfraRole operation endpoints and objects.

## Actions

### InfraRoles_List
Get a list of all infra roles at a location.


```js
azure_azsadmin_infrarole.InfraRoles_List({
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
* output [InfraRoleList](#infrarolelist)

### InfraRoles_Get
Get an infra role description.


```js
azure_azsadmin_infrarole.InfraRoles_Get({
  "subscriptionId": "",
  "location": "",
  "infraRole": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * infraRole **required** `string`: Infra role name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [InfraRole](#infrarole)



## Definitions

### InfraRole
* InfraRole `object`: Get an infra role description.
  * properties [InfraRoleModel](#infrarolemodel)
  * id `string`: URI of the resource.
  * location `string`: Region Location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### InfraRoleList
* InfraRoleList `object`: Pageable list of infra roles.
  * nextLink `string`: URI to the next page.
  * value `array`: List of infra roles for this page.
    * items [InfraRole](#infrarole)

### InfraRoleModel
* InfraRoleModel `object`: Infra role properties.
  * instances `array`: List of infra role instances.
    * items `string`


