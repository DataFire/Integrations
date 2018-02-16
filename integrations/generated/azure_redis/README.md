# @datafire/azure_redis

Client library for RedisManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_redis
```
```js
let azure_redis = require('@datafire/azure_redis').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_redis.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

REST API for Azure Redis Cache Service.

## Actions

### Operations_List
Lists all of the available REST API operations of the Microsoft.Cache provider.


```js
azure_redis.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Redis_List
Gets all Redis caches in the specified subscription.


```js
azure_redis.Redis_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListResult](#redislistresult)

### Redis_ListByResourceGroup
Lists all Redis caches in a resource group.


```js
azure_redis.Redis_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisListResult](#redislistresult)

### FirewallRules_ListByRedisResource
Gets all firewall rules in the specified redis cache.


```js
azure_redis.FirewallRules_ListByRedisResource({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * cacheName **required** `string`: The name of the Redis cache.

#### Output
* output [RedisFirewallRuleListResult](#redisfirewallrulelistresult)

### FirewallRules_Delete
Deletes a single firewall rule in a specified redis cache.


```js
azure_redis.FirewallRules_Delete({
  "resourceGroupName": "",
  "cacheName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * cacheName **required** `string`: The name of the Redis cache.
  * ruleName **required** `string`: The name of the firewall rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### FirewallRules_Get
Gets a single firewall rule in a specified redis cache.


```js
azure_redis.FirewallRules_Get({
  "resourceGroupName": "",
  "cacheName": "",
  "ruleName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * cacheName **required** `string`: The name of the Redis cache.
  * ruleName **required** `string`: The name of the firewall rule.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisFirewallRule](#redisfirewallrule)

### FirewallRules_CreateOrUpdate
Create or update a redis cache firewall rule


```js
azure_redis.FirewallRules_CreateOrUpdate({
  "resourceGroupName": "",
  "cacheName": "",
  "ruleName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * cacheName **required** `string`: The name of the Redis cache.
  * ruleName **required** `string`: The name of the firewall rule.
  * parameters **required** [RedisFirewallRuleCreateParameters](#redisfirewallrulecreateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisFirewallRule](#redisfirewallrule)

### Redis_Delete
Deletes a Redis cache.


```js
azure_redis.Redis_Delete({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Redis_Get
Gets a Redis cache (resource description).


```js
azure_redis.Redis_Get({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisResource](#redisresource)

### Redis_Update
Update an existing Redis cache.


```js
azure_redis.Redis_Update({
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
  * parameters **required** [RedisUpdateParameters](#redisupdateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisResource](#redisresource)

### Redis_Create
Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.


```js
azure_redis.Redis_Create({
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
  * parameters **required** [RedisCreateParameters](#rediscreateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisResource](#redisresource)

### Redis_ExportData
Export data from the redis cache to blobs in a container.


```js
azure_redis.Redis_ExportData({
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
  * parameters **required** [ExportRDBParameters](#exportrdbparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Redis_ForceReboot
Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.


```js
azure_redis.Redis_ForceReboot({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisForceRebootResponse](#redisforcerebootresponse)

### Redis_ImportData
Import data into Redis cache.


```js
azure_redis.Redis_ImportData({
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
  * parameters **required** [ImportRDBParameters](#importrdbparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LinkedServer_List
Gets the list of linked servers associated with this redis cache (requires Premium SKU).


```js
azure_redis.LinkedServer_List({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the redis cache.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisLinkedServerWithPropertiesList](#redislinkedserverwithpropertieslist)

### LinkedServer_Delete
Deletes the linked server from a redis cache (requires Premium SKU).


```js
azure_redis.LinkedServer_Delete({
  "resourceGroupName": "",
  "name": "",
  "linkedServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the redis cache.
  * linkedServerName **required** `string`: The name of the linked server that is being added to the Redis cache.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### LinkedServer_Get
Gets the detailed information about a linked server of a redis cache (requires Premium SKU).


```js
azure_redis.LinkedServer_Get({
  "resourceGroupName": "",
  "name": "",
  "linkedServerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the redis cache.
  * linkedServerName **required** `string`: The name of the linked server.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisLinkedServerWithProperties](#redislinkedserverwithproperties)

### LinkedServer_Create
Adds a linked server to the Redis cache (requires Premium SKU).


```js
azure_redis.LinkedServer_Create({
  "resourceGroupName": "",
  "name": "",
  "linkedServerName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the Redis cache.
  * linkedServerName **required** `string`: The name of the linked server that is being added to the Redis cache.
  * parameters **required** [RedisLinkedServerCreateParameters](#redislinkedservercreateparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisLinkedServerWithProperties](#redislinkedserverwithproperties)

### Redis_ListKeys
Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.


```js
azure_redis.Redis_ListKeys({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisAccessKeys](#redisaccesskeys)

### PatchSchedules_Delete
Deletes the patching schedule of a redis cache (requires Premium SKU).


```js
azure_redis.PatchSchedules_Delete({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the redis cache.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### PatchSchedules_Get
Gets the patching schedule of a redis cache (requires Premium SKU).


```js
azure_redis.PatchSchedules_Get({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the redis cache.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisPatchSchedule](#redispatchschedule)

### PatchSchedules_CreateOrUpdate
Create or replace the patching schedule for Redis cache (requires Premium SKU).


```js
azure_redis.PatchSchedules_CreateOrUpdate({
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
  * parameters **required** [RedisPatchSchedule](#redispatchschedule)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisPatchSchedule](#redispatchschedule)

### Redis_RegenerateKey
Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.


```js
azure_redis.Redis_RegenerateKey({
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
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RedisAccessKeys](#redisaccesskeys)



## Definitions

### ExportRDBParameters
* ExportRDBParameters `object`: Parameters for Redis export operation.
  * container **required** `string`: Container name to export to.
  * format `string`: File format.
  * prefix **required** `string`: Prefix to use for exported files.

### ImportRDBParameters
* ImportRDBParameters `object`: Parameters for Redis import operation.
  * files **required** `array`: files to import.
    * items `string`
  * format `string`: File format.

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that describes the operation.
    * description `string`: Friendly name of the operation
    * operation `string`: Operation type: read, write, delete, listKeys/action, etc.
    * provider `string`: Friendly name of the resource provider
    * resource `string`: Resource type on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the resource provider.
    * items [Operation](#operation)

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RedisAccessKeys
* RedisAccessKeys `object`: Redis cache access keys.
  * primaryKey `string`: The current primary key that clients can use to authenticate with Redis cache.
  * secondaryKey `string`: The current secondary key that clients can use to authenticate with Redis cache.

### RedisCommonProperties
* RedisCommonProperties `object`: Create/Update/Get common properties of the redis cache.
  * enableNonSslPort `boolean`: Specifies whether the non-ssl Redis server port (6379) is enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * tenantSettings `object`: A dictionary of tenant settings

### RedisCreateParameters
* RedisCreateParameters `object`: Parameters supplied to the Create Redis operation.
  * location **required** `string`: The geo-location where the resource lives
  * properties **required** [RedisCreateProperties](#rediscreateproperties)
  * tags `object`: Resource tags.
  * zones `array`: A list of availability zones denoting where the resource needs to come from.
    * items `string`

### RedisCreateProperties
* RedisCreateProperties `object`: Properties supplied to Create Redis operation.
  * sku **required** [Sku](#sku)
  * staticIP `string`: Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * subnetId `string`: The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
  * enableNonSslPort `boolean`: Specifies whether the non-ssl Redis server port (6379) is enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * tenantSettings `object`: A dictionary of tenant settings

### RedisFirewallRule
* RedisFirewallRule `object`: A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
  * properties **required** [RedisFirewallRuleProperties](#redisfirewallruleproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RedisFirewallRuleCreateParameters
* RedisFirewallRuleCreateParameters `object`: Parameters required for creating a firewall rule on redis cache.
  * properties **required** [RedisFirewallRuleProperties](#redisfirewallruleproperties)

### RedisFirewallRuleListResult
* RedisFirewallRuleListResult `object`: The response of list firewall rules Redis operation.
  * nextLink `string`: Link for next set of locations.
  * value `array`: Results of the list firewall rules operation.
    * items [RedisFirewallRule](#redisfirewallrule)

### RedisFirewallRuleProperties
* RedisFirewallRuleProperties `object`: Specifies a range of IP addresses permitted to connect to the cache
  * endIP **required** `string`: highest IP address included in the range
  * startIP **required** `string`: lowest IP address included in the range

### RedisForceRebootResponse
* RedisForceRebootResponse `object`: Response to force reboot for Redis cache.
  * message `string`: Status message

### RedisLinkedServer
* RedisLinkedServer `object`: Linked server Id
  * id `string`: Linked server Id.

### RedisLinkedServerCreateParameters
* RedisLinkedServerCreateParameters `object`: Parameter required for creating a linked server to redis cache.
  * properties **required** [RedisLinkedServerCreateProperties](#redislinkedservercreateproperties)

### RedisLinkedServerCreateProperties
* RedisLinkedServerCreateProperties `object`: Create properties for a linked server
  * linkedRedisCacheId **required** `string`: Fully qualified resourceId of the linked redis cache.
  * linkedRedisCacheLocation **required** `string`: Location of the linked redis cache.
  * serverRole **required** `string` (values: Primary, Secondary): Role of the linked server.

### RedisLinkedServerProperties
* RedisLinkedServerProperties `object`: Properties of a linked server to be returned in get/put response
  * provisioningState `string`: Terminal state of the link between primary and secondary redis cache.
  * linkedRedisCacheId **required** `string`: Fully qualified resourceId of the linked redis cache.
  * linkedRedisCacheLocation **required** `string`: Location of the linked redis cache.
  * serverRole **required** `string` (values: Primary, Secondary): Role of the linked server.

### RedisLinkedServerWithProperties
* RedisLinkedServerWithProperties `object`: Response to put/get linked server (with properties) for Redis cache.
  * properties [RedisLinkedServerProperties](#redislinkedserverproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RedisLinkedServerWithPropertiesList
* RedisLinkedServerWithPropertiesList `object`: List of linked servers (with properites) of a Redis cache.
  * nextLink `string`: Link for next set.
  * value `array`: List of linked servers (with properites) of a Redis cache.
    * items [RedisLinkedServerWithProperties](#redislinkedserverwithproperties)

### RedisListResult
* RedisListResult `object`: The response of list Redis operation.
  * nextLink `string`: Link for next set of locations.
  * value `array`: List of Redis cache instances.
    * items [RedisResource](#redisresource)

### RedisPatchSchedule
* RedisPatchSchedule `object`: Response to put/get patch schedules for Redis cache.
  * properties **required** [ScheduleEntries](#scheduleentries)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RedisProperties
* RedisProperties `object`: Properties of the redis cache.
  * accessKeys [RedisAccessKeys](#redisaccesskeys)
  * hostName `string`: Redis host name.
  * linkedServers `array`: List of the linked servers associated with the cache
    * items [RedisLinkedServer](#redislinkedserver)
  * port `integer`: Redis non-SSL port.
  * provisioningState `string`: Redis instance provisioning status.
  * redisVersion `string`: Redis version.
  * sslPort `integer`: Redis SSL port.
  * sku **required** [Sku](#sku)
  * staticIP `string`: Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
  * subnetId `string`: The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
  * enableNonSslPort `boolean`: Specifies whether the non-ssl Redis server port (6379) is enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * tenantSettings `object`: A dictionary of tenant settings

### RedisRebootParameters
* RedisRebootParameters `object`: Specifies which Redis node(s) to reboot.
  * rebootType **required** `string` (values: PrimaryNode, SecondaryNode, AllNodes): Which Redis node(s) to reboot. Depending on this value data loss is possible.
  * shardId `integer`: If clustering is enabled, the ID of the shard to be rebooted.

### RedisRegenerateKeyParameters
* RedisRegenerateKeyParameters `object`: Specifies which Redis access keys to reset.
  * keyType **required** `string` (values: Primary, Secondary): The Redis access key to regenerate.

### RedisResource
* RedisResource `object`: A single Redis item in List or Get Operation.
  * properties **required** [RedisProperties](#redisproperties)
  * zones `array`: A list of availability zones denoting where the resource needs to come from.
    * items `string`
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RedisUpdateParameters
* RedisUpdateParameters `object`: Parameters supplied to the Update Redis operation.
  * properties [RedisUpdateProperties](#redisupdateproperties)
  * tags `object`: Resource tags.

### RedisUpdateProperties
* RedisUpdateProperties `object`: Patchable properties of the redis cache.
  * sku [Sku](#sku)
  * enableNonSslPort `boolean`: Specifies whether the non-ssl Redis server port (6379) is enabled.
  * redisConfiguration `object`: All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
  * shardCount `integer`: The number of shards to be created on a Premium Cluster Cache.
  * tenantSettings `object`: A dictionary of tenant settings

### Resource
* Resource `object`: The Resource definition.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ScheduleEntries
* ScheduleEntries `object`: List of patch schedules for a Redis cache.
  * scheduleEntries **required** `array`: List of patch schedules for a Redis cache.
    * items [ScheduleEntry](#scheduleentry)

### ScheduleEntry
* ScheduleEntry `object`: Patch schedule entry for a Premium Redis Cache.
  * dayOfWeek **required** `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Everyday, Weekend): Day of the week when a cache can be patched.
  * maintenanceWindow `string`: ISO8601 timespan specifying how much time cache patching can take. 
  * startHourUtc **required** `integer`: Start hour after which cache patching can start.

### Sku
* Sku `object`: SKU parameters supplied to the create Redis operation.
  * capacity **required** `integer`: The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
  * family **required** `string` (values: C, P): The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
  * name **required** `string` (values: Basic, Standard, Premium): The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


