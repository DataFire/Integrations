# @datafire/azure_storagecache

Client library for Storage Cache Mgmt Client

## Installation and Usage
```bash
npm install --save @datafire/azure_storagecache
```
```js
let azure_storagecache = require('@datafire/azure_storagecache').create({
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

A Storage Cache provides scalable caching service for NAS clients, serving data from either NFSv3 or Blob at-rest storage (referred to as "Storage Targets"). These operations allow you to manage Caches.

## Actions

### Operations_List
Lists all of the available Resource Provider operations.


```js
azure_storagecache.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [ApiOperationListResult](#apioperationlistresult)

### Caches_List
Returns all Caches the user has access to under a subscription.


```js
azure_storagecache.Caches_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CachesListResult](#cacheslistresult)

### Skus_List
Get the list of StorageCache.Cache SKUs available to this subscription.


```js
azure_storagecache.Skus_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ResourceSkusResult](#resourceskusresult)

### UsageModels_List
Get the list of Cache Usage Models available to this subscription.


```js
azure_storagecache.UsageModels_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UsageModelsResult](#usagemodelsresult)

### Caches_ListByResourceGroup
Returns all Caches the user has access to under a resource group.


```js
azure_storagecache.Caches_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CachesListResult](#cacheslistresult)

### Caches_Delete
Schedules a Cache for deletion.


```js
azure_storagecache.Caches_Delete({
  "resourceGroupName": "",
  "cacheName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * cacheName **required** `string`: Name of Cache.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Caches_Get
Returns a Cache.


```js
azure_storagecache.Caches_Get({
  "resourceGroupName": "",
  "cacheName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * cacheName **required** `string`: Name of Cache.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Cache](#cache)

### Caches_Update
Update a Cache instance.


```js
azure_storagecache.Caches_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.
  * cache [Cache](#cache)

#### Output
* output [Cache](#cache)

### Caches_CreateOrUpdate
Create or update a Cache.


```js
azure_storagecache.Caches_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.
  * cache [Cache](#cache)

#### Output
* output [Cache](#cache)

### Caches_Flush
Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.


```js
azure_storagecache.Caches_Flush({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.

#### Output
*Output schema unknown*

### Caches_Start
Tells a Stopped state Cache to transition to Active state.


```js
azure_storagecache.Caches_Start({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.

#### Output
*Output schema unknown*

### Caches_Stop
Tells an Active Cache to transition to Stopped state.


```js
azure_storagecache.Caches_Stop({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.

#### Output
*Output schema unknown*

### StorageTargets_ListByCache
Returns a list of Storage Targets for the specified Cache.


```js
azure_storagecache.StorageTargets_ListByCache({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.

#### Output
* output [StorageTargetsResult](#storagetargetsresult)

### StorageTargets_Delete
Removes a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted.


```js
azure_storagecache.StorageTargets_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": "",
  "storageTargetName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.
  * storageTargetName **required** `string`: Name of Storage Target.

#### Output
*Output schema unknown*

### StorageTargets_Get
Returns a Storage Target from a Cache.


```js
azure_storagecache.StorageTargets_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": "",
  "storageTargetName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.
  * storageTargetName **required** `string`: Name of the Storage Target.

#### Output
* output [StorageTarget](#storagetarget)

### StorageTargets_CreateOrUpdate
Create or update a Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.


```js
azure_storagecache.StorageTargets_CreateOrUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": "",
  "storageTargetName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.
  * storageTargetName **required** `string`: Name of the Storage Target.
  * storagetarget [StorageTarget](#storagetarget)

#### Output
* output [StorageTarget](#storagetarget)

### Caches_UpgradeFirmware
Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.


```js
azure_storagecache.Caches_UpgradeFirmware({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "cacheName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Target resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * cacheName **required** `string`: Name of Cache.

#### Output
*Output schema unknown*



## Definitions

### ApiOperation
* ApiOperation `object`: REST API operation description: see https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3023-operationsapiimplementation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.StorageCache
    * resource `string`: Resource on which the operation is performed: Cache, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### ApiOperationListResult
* ApiOperationListResult `object`: Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Resource Provider operations supported by the Microsoft.StorageCache resource provider.
    * items [ApiOperation](#apioperation)

### Cache
* Cache `object`: A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
  * id [URLString](#urlstring)
  * location `string`: Region name string.
  * name [ResourceName](#resourcename)
  * properties `object`: Properties of the Cache.
    * cacheSizeGB `integer`: The size of this Cache, in GB.
    * health [CacheHealth](#cachehealth)
    * mountAddresses `array`: Array of IP addresses that can be used by clients mounting this Cache.
      * items `string`
    * provisioningState `string` (values: Succeeded, Failed, Cancelled, Creating, Deleting, Updating): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
    * subnet [URLString](#urlstring)
    * upgradeStatus [CacheUpgradeStatus](#cacheupgradestatus)
  * sku `object`: SKU for the Cache.
    * name `string`: SKU name for this Cache.
  * tags `object`: ARM tags as name/value pairs.
  * type `string`: Type of the Cache; Microsoft.StorageCache/Cache

### CacheHealth
* CacheHealth `object`: An indication of Cache health. Gives more information about health than just that related to provisioning.
  * state `string` (values: Unknown, Healthy, Degraded, Down, Transitioning, Stopping, Stopped, Upgrading, Flushing): List of Cache health states.
  * statusDescription `string`: Describes explanation of state.

### CacheUpgradeStatus
* CacheUpgradeStatus `object`: Properties describing the software upgrade state of the Cache.
  * currentFirmwareVersion `string`: Version string of the firmware currently installed on this Cache.
  * firmwareUpdateDeadline `string`: Time at which the pending firmware update will automatically be installed on the Cache.
  * firmwareUpdateStatus `string` (values: available, unavailable): True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
  * lastFirmwareUpdate `string`: Time of the last successful firmware update.
  * pendingFirmwareVersion `string`: When firmwareUpdateAvailable is true, this field holds the version string for the update.

### CachesListResult
* CachesListResult `object`: Result of the request to list Caches. It contains a list of Caches and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of Cache list results, if there are any.
  * value `array`: List of Caches.
    * items [Cache](#cache)

### ClfsTarget
* ClfsTarget `object`: Storage container for use as a CLFS Storage Target.
  * target [URLString](#urlstring)

### CloudError
* CloudError `object`: An error response.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### NamespaceJunction
* NamespaceJunction `object`: A namespace junction.
  * namespacePath `string`: Namespace path on a Cache for a Storage Target.
  * nfsExport `string`: NFS export where targetPath exists.
  * targetPath `string`: Path in Storage Target to which namespacePath points.

### Nfs3Target
* Nfs3Target `object`: An NFSv3 mount point for use as a Storage Target.
  * target `string`: IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
  * usageModel `string`: Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels

### ResourceName
* ResourceName `string`: Schema for the name of resources served by this provider. Note that objects will contain an odata @id annotation as appropriate. This will contain the complete URL of the object. These names are case-preserving, but not case sensitive.

### ResourceSku
* ResourceSku `object`: A resource SKU.
  * capabilities `array`: A list of capabilities of this SKU, such as throughput or ops/sec.
    * items [ResourceSkuCapabilities](#resourceskucapabilities)
  * locationInfo `array`: The set of locations that the SKU is available.
    * items [ResourceSkuLocationInfo](#resourceskulocationinfo)
  * locations `array`: The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g., West US, East US, Southeast Asia, etc.).
    * items `string`
  * name `string`: The name of this SKU.
  * resourceType `string`: The type of resource the SKU applies to.
  * restrictions `array`: The restrictions preventing this SKU from being used. This is empty if there are no restrictions.
    * items [Restriction](#restriction)

### ResourceSkuCapabilities
* ResourceSkuCapabilities `object`: A resource SKU capability.
  * name `string`: Name of a capability, such as ops/sec.
  * value `string`: Quantity, if the capability is measured by quantity.

### ResourceSkuLocationInfo
* ResourceSkuLocationInfo `object`: Resource SKU location information.
  * location `string`: Location where this SKU is available.
  * zones `array`: Zones if any.
    * items `string`

### ResourceSkusResult
* ResourceSkusResult `object`: The response from the List Cache SKUs operation.
  * nextLink `string`: The URI to fetch the next page of Cache SKUs.
  * value `array`: The list of SKUs available for the subscription.
    * items [ResourceSku](#resourcesku)

### Restriction
* Restriction `object`: The restrictions preventing this SKU from being used.
  * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". "QuotaId" is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. "NotAvailableForSubscription" is related to capacity at the datacenter.
  * type `string`: The type of restrictions. In this version, the only possible value for this is location.
  * values `array`: The value of restrictions. If the restriction type is set to location, then this would be the different locations where the SKU is restricted.
    * items `string`

### StorageTarget
* StorageTarget `object`: A storage system being cached by a Cache.
  * id `string`: Resource ID of the Storage Target.
  * name [ResourceName](#resourcename)
  * properties `object`: Properties of the Storage Target.
    * clfs [ClfsTarget](#clfstarget)
    * junctions `array`: List of Cache namespace junctions to target for namespace associations.
      * items [NamespaceJunction](#namespacejunction)
    * nfs3 [Nfs3Target](#nfs3target)
    * provisioningState `string` (values: Succeeded, Failed, Cancelled, Creating, Deleting, Updating): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
    * targetType `string` (values: nfs3, clfs, unknown): Type of the Storage Target.
    * unknown [UnknownTarget](#unknowntarget)
  * type `string`: Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget

### StorageTargetsResult
* StorageTargetsResult `object`: A list of Storage Targets.
  * nextLink `string`: The URI to fetch the next page of Storage Targets.
  * value `array`: The list of Storage Targets defined for the Cache.
    * items [StorageTarget](#storagetarget)

### URLString
* URLString `string`: A fully qualified URL.

### UnknownProperties
* UnknownProperties `object`: Properties of an unknown type of Storage Target.

### UnknownTarget
* UnknownTarget `object`: Storage container for use as an Unknown Storage Target.
  * unknownMap [UnknownProperties](#unknownproperties)

### UsageModel
* UsageModel `object`: A usage model.
  * display `object`: Localized information describing this usage model.
    * description `string`: String to display for this usage model.
  * modelName `string`: Non-localized keyword name for this usage model.
  * targetType `string`: The type of Storage Target to which this model is applicable (only nfs3 as of this version).

### UsageModelsResult
* UsageModelsResult `object`: A list of Cache usage models.
  * nextLink `string`: The URI to fetch the next page of Cache usage models.
  * value `array`: The list of usage models available for the subscription.
    * items [UsageModel](#usagemodel)


