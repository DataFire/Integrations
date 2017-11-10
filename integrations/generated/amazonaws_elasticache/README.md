# @datafire/amazonaws_elasticache

Client library for Amazon ElastiCache

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticache
```

```js
let datafire = require('datafire');
let amazonaws_elasticache = require('@datafire/amazonaws_elasticache').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_elasticache.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>

## Actions
### AddTagsToResource



```js
amazonaws_elasticache.AddTagsToResource({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* Tags (array) **required**

### AuthorizeCacheSecurityGroupIngress



```js
amazonaws_elasticache.AuthorizeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": "",
  "EC2SecurityGroupName": "",
  "EC2SecurityGroupOwnerId": ""
}, context)
```

#### Parameters
* CacheSecurityGroupName (string) **required**
* EC2SecurityGroupName (string) **required**
* EC2SecurityGroupOwnerId (string) **required**

### CopySnapshot



```js
amazonaws_elasticache.CopySnapshot({
  "SourceSnapshotName": "",
  "TargetSnapshotName": ""
}, context)
```

#### Parameters
* SourceSnapshotName (string) **required**
* TargetBucket (string)
* TargetSnapshotName (string) **required**

### CreateCacheCluster



```js
amazonaws_elasticache.CreateCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Parameters
* AZMode (string)
* AuthToken (string)
* AutoMinorVersionUpgrade (boolean)
* CacheClusterId (string) **required**
* CacheNodeType (string)
* CacheParameterGroupName (string)
* CacheSecurityGroupNames (array)
* CacheSubnetGroupName (string)
* Engine (string)
* EngineVersion (string)
* NotificationTopicArn (string)
* NumCacheNodes (integer)
* Port (integer)
* PreferredAvailabilityZone (string)
* PreferredAvailabilityZones (array)
* PreferredMaintenanceWindow (string)
* ReplicationGroupId (string)
* SecurityGroupIds (array)
* SnapshotArns (array)
* SnapshotName (string)
* SnapshotRetentionLimit (integer)
* SnapshotWindow (string)
* Tags (array)

### CreateCacheParameterGroup



```js
amazonaws_elasticache.CreateCacheParameterGroup({
  "CacheParameterGroupName": "",
  "CacheParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Parameters
* CacheParameterGroupFamily (string) **required**
* CacheParameterGroupName (string) **required**
* Description (string) **required**

### CreateCacheSecurityGroup



```js
amazonaws_elasticache.CreateCacheSecurityGroup({
  "CacheSecurityGroupName": "",
  "Description": ""
}, context)
```

#### Parameters
* CacheSecurityGroupName (string) **required**
* Description (string) **required**

### CreateCacheSubnetGroup



```js
amazonaws_elasticache.CreateCacheSubnetGroup({
  "CacheSubnetGroupName": "",
  "CacheSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* CacheSubnetGroupDescription (string) **required**
* CacheSubnetGroupName (string) **required**
* SubnetIds (array) **required**

### CreateReplicationGroup



```js
amazonaws_elasticache.CreateReplicationGroup({
  "ReplicationGroupId": "",
  "ReplicationGroupDescription": ""
}, context)
```

#### Parameters
* AtRestEncryptionEnabled (boolean)
* AuthToken (string)
* AutoMinorVersionUpgrade (boolean)
* AutomaticFailoverEnabled (boolean)
* CacheNodeType (string)
* CacheParameterGroupName (string)
* CacheSecurityGroupNames (array)
* CacheSubnetGroupName (string)
* Engine (string)
* EngineVersion (string)
* NodeGroupConfiguration (array)
* NotificationTopicArn (string)
* NumCacheClusters (integer)
* NumNodeGroups (integer)
* Port (integer)
* PreferredCacheClusterAZs (array)
* PreferredMaintenanceWindow (string)
* PrimaryClusterId (string)
* ReplicasPerNodeGroup (integer)
* ReplicationGroupDescription (string) **required**
* ReplicationGroupId (string) **required**
* SecurityGroupIds (array)
* SnapshotArns (array)
* SnapshotName (string)
* SnapshotRetentionLimit (integer)
* SnapshotWindow (string)
* Tags (array)
* TransitEncryptionEnabled (boolean)

### CreateSnapshot



```js
amazonaws_elasticache.CreateSnapshot({
  "SnapshotName": ""
}, context)
```

#### Parameters
* CacheClusterId (string)
* ReplicationGroupId (string)
* SnapshotName (string) **required**

### DeleteCacheCluster



```js
amazonaws_elasticache.DeleteCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Parameters
* CacheClusterId (string) **required**
* FinalSnapshotIdentifier (string)

### DeleteCacheParameterGroup



```js
amazonaws_elasticache.DeleteCacheParameterGroup({
  "CacheParameterGroupName": ""
}, context)
```

#### Parameters
* CacheParameterGroupName (string) **required**

### DeleteCacheSecurityGroup



```js
amazonaws_elasticache.DeleteCacheSecurityGroup({
  "CacheSecurityGroupName": ""
}, context)
```

#### Parameters
* CacheSecurityGroupName (string) **required**

### DeleteCacheSubnetGroup



```js
amazonaws_elasticache.DeleteCacheSubnetGroup({
  "CacheSubnetGroupName": ""
}, context)
```

#### Parameters
* CacheSubnetGroupName (string) **required**

### DeleteReplicationGroup



```js
amazonaws_elasticache.DeleteReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Parameters
* FinalSnapshotIdentifier (string)
* ReplicationGroupId (string) **required**
* RetainPrimaryCluster (boolean)

### DeleteSnapshot



```js
amazonaws_elasticache.DeleteSnapshot({
  "SnapshotName": ""
}, context)
```

#### Parameters
* SnapshotName (string) **required**

### DescribeCacheClusters



```js
amazonaws_elasticache.DescribeCacheClusters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheClusterId (string)
* Marker (string)
* MaxRecords (integer)
* ShowCacheClustersNotInReplicationGroups (boolean)
* ShowCacheNodeInfo (boolean)

### DescribeCacheEngineVersions



```js
amazonaws_elasticache.DescribeCacheEngineVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheParameterGroupFamily (string)
* DefaultOnly (boolean)
* Engine (string)
* EngineVersion (string)
* Marker (string)
* MaxRecords (integer)

### DescribeCacheParameterGroups



```js
amazonaws_elasticache.DescribeCacheParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheParameterGroupName (string)
* Marker (string)
* MaxRecords (integer)

### DescribeCacheParameters



```js
amazonaws_elasticache.DescribeCacheParameters({
  "CacheParameterGroupName": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheParameterGroupName (string) **required**
* Marker (string)
* MaxRecords (integer)
* Source (string)

### DescribeCacheSecurityGroups



```js
amazonaws_elasticache.DescribeCacheSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheSecurityGroupName (string)
* Marker (string)
* MaxRecords (integer)

### DescribeCacheSubnetGroups



```js
amazonaws_elasticache.DescribeCacheSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheSubnetGroupName (string)
* Marker (string)
* MaxRecords (integer)

### DescribeEngineDefaultParameters



```js
amazonaws_elasticache.DescribeEngineDefaultParameters({
  "CacheParameterGroupFamily": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheParameterGroupFamily (string) **required**
* Marker (string)
* MaxRecords (integer)

### DescribeEvents



```js
amazonaws_elasticache.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Duration (integer)
* EndTime (string)
* Marker (string)
* MaxRecords (integer)
* SourceIdentifier (string)
* SourceType (string)
* StartTime (string)

### DescribeReplicationGroups



```js
amazonaws_elasticache.DescribeReplicationGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ReplicationGroupId (string)

### DescribeReservedCacheNodes



```js
amazonaws_elasticache.DescribeReservedCacheNodes({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheNodeType (string)
* Duration (string)
* Marker (string)
* MaxRecords (integer)
* OfferingType (string)
* ProductDescription (string)
* ReservedCacheNodeId (string)
* ReservedCacheNodesOfferingId (string)

### DescribeReservedCacheNodesOfferings



```js
amazonaws_elasticache.DescribeReservedCacheNodesOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheNodeType (string)
* Duration (string)
* Marker (string)
* MaxRecords (integer)
* OfferingType (string)
* ProductDescription (string)
* ReservedCacheNodesOfferingId (string)

### DescribeSnapshots



```js
amazonaws_elasticache.DescribeSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* CacheClusterId (string)
* Marker (string)
* MaxRecords (integer)
* ReplicationGroupId (string)
* ShowNodeGroupConfig (boolean)
* SnapshotName (string)
* SnapshotSource (string)

### ListAllowedNodeTypeModifications



```js
amazonaws_elasticache.ListAllowedNodeTypeModifications({}, context)
```

#### Parameters
* CacheClusterId (string)
* ReplicationGroupId (string)

### ListTagsForResource



```js
amazonaws_elasticache.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Parameters
* ResourceName (string) **required**

### ModifyCacheCluster



```js
amazonaws_elasticache.ModifyCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Parameters
* AZMode (string)
* ApplyImmediately (boolean)
* AutoMinorVersionUpgrade (boolean)
* CacheClusterId (string) **required**
* CacheNodeIdsToRemove (array)
* CacheNodeType (string)
* CacheParameterGroupName (string)
* CacheSecurityGroupNames (array)
* EngineVersion (string)
* NewAvailabilityZones (array)
* NotificationTopicArn (string)
* NotificationTopicStatus (string)
* NumCacheNodes (integer)
* PreferredMaintenanceWindow (string)
* SecurityGroupIds (array)
* SnapshotRetentionLimit (integer)
* SnapshotWindow (string)

### ModifyCacheParameterGroup



```js
amazonaws_elasticache.ModifyCacheParameterGroup({
  "CacheParameterGroupName": "",
  "ParameterNameValues": []
}, context)
```

#### Parameters
* CacheParameterGroupName (string) **required**
* ParameterNameValues (array) **required**

### ModifyCacheSubnetGroup



```js
amazonaws_elasticache.ModifyCacheSubnetGroup({
  "CacheSubnetGroupName": ""
}, context)
```

#### Parameters
* CacheSubnetGroupDescription (string)
* CacheSubnetGroupName (string) **required**
* SubnetIds (array)

### ModifyReplicationGroup



```js
amazonaws_elasticache.ModifyReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Parameters
* ApplyImmediately (boolean)
* AutoMinorVersionUpgrade (boolean)
* AutomaticFailoverEnabled (boolean)
* CacheNodeType (string)
* CacheParameterGroupName (string)
* CacheSecurityGroupNames (array)
* EngineVersion (string)
* NodeGroupId (string)
* NotificationTopicArn (string)
* NotificationTopicStatus (string)
* PreferredMaintenanceWindow (string)
* PrimaryClusterId (string)
* ReplicationGroupDescription (string)
* ReplicationGroupId (string) **required**
* SecurityGroupIds (array)
* SnapshotRetentionLimit (integer)
* SnapshotWindow (string)
* SnapshottingClusterId (string)

### ModifyReplicationGroupShardConfiguration



```js
amazonaws_elasticache.ModifyReplicationGroupShardConfiguration({
  "ReplicationGroupId": "",
  "NodeGroupCount": 0,
  "ApplyImmediately": true
}, context)
```

#### Parameters
* ApplyImmediately (boolean) **required**
* NodeGroupCount (integer) **required**
* NodeGroupsToRemove (array)
* ReplicationGroupId (string) **required**
* ReshardingConfiguration (array)

### PurchaseReservedCacheNodesOffering



```js
amazonaws_elasticache.PurchaseReservedCacheNodesOffering({
  "ReservedCacheNodesOfferingId": ""
}, context)
```

#### Parameters
* CacheNodeCount (integer)
* ReservedCacheNodeId (string)
* ReservedCacheNodesOfferingId (string) **required**

### RebootCacheCluster



```js
amazonaws_elasticache.RebootCacheCluster({
  "CacheClusterId": "",
  "CacheNodeIdsToReboot": []
}, context)
```

#### Parameters
* CacheClusterId (string) **required**
* CacheNodeIdsToReboot (array) **required**

### RemoveTagsFromResource



```js
amazonaws_elasticache.RemoveTagsFromResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* TagKeys (array) **required**

### ResetCacheParameterGroup



```js
amazonaws_elasticache.ResetCacheParameterGroup({
  "CacheParameterGroupName": ""
}, context)
```

#### Parameters
* CacheParameterGroupName (string) **required**
* ParameterNameValues (array)
* ResetAllParameters (boolean)

### RevokeCacheSecurityGroupIngress



```js
amazonaws_elasticache.RevokeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": "",
  "EC2SecurityGroupName": "",
  "EC2SecurityGroupOwnerId": ""
}, context)
```

#### Parameters
* CacheSecurityGroupName (string) **required**
* EC2SecurityGroupName (string) **required**
* EC2SecurityGroupOwnerId (string) **required**

### TestFailover



```js
amazonaws_elasticache.TestFailover({
  "ReplicationGroupId": "",
  "NodeGroupId": ""
}, context)
```

#### Parameters
* NodeGroupId (string) **required**
* ReplicationGroupId (string) **required**

