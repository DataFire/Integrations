# @datafire/azure_azsadmin_directorytenant

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_directorytenant
```
```js
let azure_azsadmin_directorytenant = require('@datafire/azure_azsadmin_directorytenant').create({
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

The Admin Subscriptions Management Client.

## Actions

### DirectoryTenants_List
Lists all the directory tenants under the current subscription and given resource group name.


```js
azure_azsadmin_directorytenant.DirectoryTenants_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DirectoryTenantList](#directorytenantlist)

### DirectoryTenants_Delete
Delete a directory tenant under a resource group.


```js
azure_azsadmin_directorytenant.DirectoryTenants_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "tenant": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * tenant **required** `string`: Directory tenant name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DirectoryTenants_Get
Get a directory tenant by name.


```js
azure_azsadmin_directorytenant.DirectoryTenants_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "tenant": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * tenant **required** `string`: Directory tenant name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DirectoryTenant](#directorytenant)

### DirectoryTenants_CreateOrUpdate
Create or updates a directory tenant.


```js
azure_azsadmin_directorytenant.DirectoryTenants_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "tenant": "",
  "api-version": "",
  "newTenant": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * tenant **required** `string`: Directory tenant name.
  * api-version **required** `string`: Client Api Version.
  * newTenant **required** [DirectoryTenant](#directorytenant)

#### Output
* output [DirectoryTenant](#directorytenant)



## Definitions

### DirectoryTenant
* DirectoryTenant `object`: Directory tenant.
  * properties [DirectoryTenantProperties](#directorytenantproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### DirectoryTenantList
* DirectoryTenantList `object`: List of directory tenants.
  * nextLink `string`: Continuation token
  * value `array`: List of directory tenants.
    * items [DirectoryTenant](#directorytenant)

### DirectoryTenantProperties
* DirectoryTenantProperties `object`: Directory tenant.
  * tenantId `string`: Tenant unique identifier.


