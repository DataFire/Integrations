# @datafire/amazonaws_elasticache

Client library for Amazon ElastiCache

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticache
```

```js
let datafire = require('datafire');
let amazonaws_elasticache = require('@datafire/amazonaws_elasticache').create();

amazonaws_elasticache.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>

## Actions
### AddTagsToResource



```js
amazonaws_elasticache.AddTagsToResource({}, context)
```


### AuthorizeCacheSecurityGroupIngress



```js
amazonaws_elasticache.AuthorizeCacheSecurityGroupIngress({}, context)
```


### CopySnapshot



```js
amazonaws_elasticache.CopySnapshot({}, context)
```


### CreateCacheCluster



```js
amazonaws_elasticache.CreateCacheCluster({}, context)
```


### CreateCacheParameterGroup



```js
amazonaws_elasticache.CreateCacheParameterGroup({}, context)
```


### CreateCacheSecurityGroup



```js
amazonaws_elasticache.CreateCacheSecurityGroup({}, context)
```


### CreateCacheSubnetGroup



```js
amazonaws_elasticache.CreateCacheSubnetGroup({}, context)
```


### CreateReplicationGroup



```js
amazonaws_elasticache.CreateReplicationGroup({}, context)
```


### CreateSnapshot



```js
amazonaws_elasticache.CreateSnapshot({}, context)
```


### DeleteCacheCluster



```js
amazonaws_elasticache.DeleteCacheCluster({}, context)
```


### DeleteCacheParameterGroup



```js
amazonaws_elasticache.DeleteCacheParameterGroup({}, context)
```


### DeleteCacheSecurityGroup



```js
amazonaws_elasticache.DeleteCacheSecurityGroup({}, context)
```


### DeleteCacheSubnetGroup



```js
amazonaws_elasticache.DeleteCacheSubnetGroup({}, context)
```


### DeleteReplicationGroup



```js
amazonaws_elasticache.DeleteReplicationGroup({}, context)
```


### DeleteSnapshot



```js
amazonaws_elasticache.DeleteSnapshot({}, context)
```


### DescribeCacheClusters



```js
amazonaws_elasticache.DescribeCacheClusters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeCacheEngineVersions



```js
amazonaws_elasticache.DescribeCacheEngineVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeCacheParameterGroups



```js
amazonaws_elasticache.DescribeCacheParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeCacheParameters



```js
amazonaws_elasticache.DescribeCacheParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeCacheSecurityGroups



```js
amazonaws_elasticache.DescribeCacheSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeCacheSubnetGroups



```js
amazonaws_elasticache.DescribeCacheSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEngineDefaultParameters



```js
amazonaws_elasticache.DescribeEngineDefaultParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEvents



```js
amazonaws_elasticache.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReplicationGroups



```js
amazonaws_elasticache.DescribeReplicationGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReservedCacheNodes



```js
amazonaws_elasticache.DescribeReservedCacheNodes({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReservedCacheNodesOfferings



```js
amazonaws_elasticache.DescribeReservedCacheNodesOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeSnapshots



```js
amazonaws_elasticache.DescribeSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### ListAllowedNodeTypeModifications



```js
amazonaws_elasticache.ListAllowedNodeTypeModifications({}, context)
```


### ListTagsForResource



```js
amazonaws_elasticache.ListTagsForResource({}, context)
```


### ModifyCacheCluster



```js
amazonaws_elasticache.ModifyCacheCluster({}, context)
```


### ModifyCacheParameterGroup



```js
amazonaws_elasticache.ModifyCacheParameterGroup({}, context)
```


### ModifyCacheSubnetGroup



```js
amazonaws_elasticache.ModifyCacheSubnetGroup({}, context)
```


### ModifyReplicationGroup



```js
amazonaws_elasticache.ModifyReplicationGroup({}, context)
```


### PurchaseReservedCacheNodesOffering



```js
amazonaws_elasticache.PurchaseReservedCacheNodesOffering({}, context)
```


### RebootCacheCluster



```js
amazonaws_elasticache.RebootCacheCluster({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_elasticache.RemoveTagsFromResource({}, context)
```


### ResetCacheParameterGroup



```js
amazonaws_elasticache.ResetCacheParameterGroup({}, context)
```


### RevokeCacheSecurityGroupIngress



```js
amazonaws_elasticache.RevokeCacheSecurityGroupIngress({}, context)
```


### TestFailover



```js
amazonaws_elasticache.TestFailover({}, context)
```


