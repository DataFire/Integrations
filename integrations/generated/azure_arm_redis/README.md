# @datafire/azure_arm_redis

Client library for RedisManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_redis
```

```js
let datafire = require('datafire');
let azure_arm_redis = require('@datafire/azure_arm_redis').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_redis: account,
  }
})

azure_arm_redis.Redis_List({}, context).then(data => {
  console.log(data);
})
```

## Description
REST API for Azure Redis Cache Service.

## Actions
### Redis_List
Gets all Redis caches in the specified subscription.


```js
azure_arm_redis.Redis_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_ListByResourceGroup
Gets all Redis caches in a resource group.


```js
azure_arm_redis.Redis_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_Delete
Deletes a Redis cache.


```js
azure_arm_redis.Redis_Delete({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_Get
Gets a Redis cache (resource description).


```js
azure_arm_redis.Redis_Get({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_CreateOrUpdate
Create a Redis cache, or replace (overwrite/recreate, with potential downtime) an existing cache.


```js
azure_arm_redis.Redis_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* parameters (undefined) **required** - Parameters supplied to the CreateOrUpdate Redis operation.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_ForceReboot
Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.


```js
azure_arm_redis.Redis_ForceReboot({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* parameters (undefined) **required** - Specifies which Redis node(s) to reboot.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_ListKeys
Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.


```js
azure_arm_redis.Redis_ListKeys({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redis_RegenerateKey
Regenerate the access keys for a Redis cache. This operation requires write permission to the cache resource.


```js
azure_arm_redis.Redis_RegenerateKey({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the Redis cache.
* parameters (undefined) **required** - Specifies which Redis access keys to reset.
* api-version (string) **required** - Client API Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

