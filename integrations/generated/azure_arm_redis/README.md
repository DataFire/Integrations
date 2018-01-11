# @datafire/azure_arm_redis

Client library for RedisManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_redis
```
```js
let azure_arm_redis = require('@datafire/azure_arm_redis').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_redis.Redis_List({}).then(data => {
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

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListResult](#redislistresult)

### Redis_ListByResourceGroup
Gets all Redis caches in a resource group.


```js
azure_arm_redis.Redis_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListResult](#redislistresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisResource](#redisresource)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * parameters **required** [RedisCreateOrUpdateParameters](#rediscreateorupdateparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisResourceWithAccessKey](#redisresourcewithaccesskey)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * parameters **required** [RedisRebootParameters](#redisrebootparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListKeysResult](#redislistkeysresult)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * parameters **required** [RedisRegenerateKeyParameters](#redisregeneratekeyparameters)
  * api-version **required** `string`: Client API Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListKeysResult](#redislistkeysresult)



## Definitions

### RedisAccessKeys
* RedisAccessKeys `object`: Redis cache access keys.
  * primaryKey `string`: The current primary key that clients can use to authenticate with Redis cache.
  * secondaryKey `string`: The current secondary key that clients can use to authenticate with Redis cache.

### RedisCreateOrUpdateParameters
* RedisCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate Redis operation.
  * properties **required** [RedisProperties](#redisproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### RedisListKeysResult
* RedisListKeysResult `object`: The response of Redis list keys operation.
  * primaryKey `string`: The current primary key that clients can use to authenticate with Redis cache.
  * secondaryKey `string`: The current secondary key that clients can use to authenticate with Redis cache.

### RedisListResult
* RedisListResult `object`: The response of list Redis operation.
  * nextLink `string`: Link for next set of locations.
  * value `array`: Results of the list operation.
    * items [RedisResource](#redisresource)

### RedisProperties
* RedisProperties `object`: Parameters supplied to CreateOrUpdate Redis operation.
  * enableNonSslPort `boolean`: If the value is true, then the non-SLL Redis server port (6379) will be enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * redisVersion `string`: RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * sku **required** [Sku](#sku)
  * staticIP `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * subnet `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * tenantSettings `object`: tenantSettings
  * virtualNetwork `string`: The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1

### RedisReadableProperties
* RedisReadableProperties `object`: Parameters describing a Redis instance
  * hostName `string`: Redis host name.
  * port `integer`: Redis non-SSL port.
  * provisioningState `string`: Redis instance provisioning status.
  * sslPort `integer`: Redis SSL port.
  * enableNonSslPort `boolean`: If the value is true, then the non-SLL Redis server port (6379) will be enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * redisVersion `string`: RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * sku **required** [Sku](#sku)
  * staticIP `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * subnet `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * tenantSettings `object`: tenantSettings
  * virtualNetwork `string`: The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1

### RedisReadablePropertiesWithAccessKey
* RedisReadablePropertiesWithAccessKey `object`: Properties generated only in response to CreateOrUpdate Redis operation.
  * accessKeys [RedisAccessKeys](#redisaccesskeys)
  * hostName `string`: Redis host name.
  * port `integer`: Redis non-SSL port.
  * provisioningState `string`: Redis instance provisioning status.
  * sslPort `integer`: Redis SSL port.
  * enableNonSslPort `boolean`: If the value is true, then the non-SLL Redis server port (6379) will be enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * redisVersion `string`: RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * sku **required** [Sku](#sku)
  * staticIP `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * subnet `string`: Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * tenantSettings `object`: tenantSettings
  * virtualNetwork `string`: The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1

### RedisRebootParameters
* RedisRebootParameters `object`: Specifies which Redis node(s) to reboot.
  * rebootType **required** `string` (values: PrimaryNode, SecondaryNode, AllNodes): Which Redis node(s) to reboot. Depending on this value data loss is possible.
  * shardId `integer`: If clustering is enabled, the ID of the shared be rebooted.

### RedisRegenerateKeyParameters
* RedisRegenerateKeyParameters `object`: Specifies which Redis access keys to reset.
  * keyType **required** `string` (values: Primary, Secondary): Which Redis access key to reset.

### RedisResource
* RedisResource `object`: A single Redis item in List or Get Operation.
  * properties [RedisReadableProperties](#redisreadableproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### RedisResourceWithAccessKey
* RedisResourceWithAccessKey `object`: A Redis item in CreateOrUpdate Operation response.
  * properties [RedisReadablePropertiesWithAccessKey](#redisreadablepropertieswithaccesskey)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### Resource
* Resource `object`
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### Sku
* Sku `object`: SKU parameters supplied to the create Redis operation.
  * capacity **required** `integer`: What size of Redis cache to deploy. Valid values: for C family (0, 1, 2, 3, 4, 5, 6), for P family (1, 2, 3, 4).
  * family **required** `string` (values: C, P): Which family to use. Valid values: (C, P).
  * name **required** `string` (values: Basic, Standard, Premium): What type of Redis cache to deploy. Valid values: (Basic, Standard, Premium).


