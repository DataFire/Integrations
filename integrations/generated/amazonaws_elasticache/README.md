# @datafire/amazonaws_elasticache

Client library for Amazon ElastiCache

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elasticache
```
```js
let amazonaws_elasticache = require('@datafire/amazonaws_elasticache').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * ResourceName **required** `string`
  * Tags **required** `array`

#### Output
* output [TagListMessage](#taglistmessage)

### AddTagsToResource



```js
amazonaws_elasticache.AddTagsToResource({
  "ResourceName": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

#### Output
* output [TagListMessage](#taglistmessage)

### AuthorizeCacheSecurityGroupIngress



```js
amazonaws_elasticache.AuthorizeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": "",
  "EC2SecurityGroupName": "",
  "EC2SecurityGroupOwnerId": ""
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required** `string`
  * EC2SecurityGroupName **required** `string`
  * EC2SecurityGroupOwnerId **required** `string`

#### Output
* output [AuthorizeCacheSecurityGroupIngressResult](#authorizecachesecuritygroupingressresult)

### AuthorizeCacheSecurityGroupIngress



```js
amazonaws_elasticache.AuthorizeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": null,
  "EC2SecurityGroupName": null,
  "EC2SecurityGroupOwnerId": null
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required**
  * EC2SecurityGroupName **required**
  * EC2SecurityGroupOwnerId **required**

#### Output
* output [AuthorizeCacheSecurityGroupIngressResult](#authorizecachesecuritygroupingressresult)

### BatchApplyUpdateAction



```js
amazonaws_elasticache.BatchApplyUpdateAction({
  "ServiceUpdateName": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupIds `array`
  * CacheClusterIds `array`
  * ServiceUpdateName **required** `string`

#### Output
* output [UpdateActionResultsMessage](#updateactionresultsmessage)

### BatchApplyUpdateAction



```js
amazonaws_elasticache.BatchApplyUpdateAction({
  "ServiceUpdateName": null
}, context)
```

#### Input
* input `object`
  * CacheClusterIds
    * items [String](#string)
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName **required**

#### Output
* output [UpdateActionResultsMessage](#updateactionresultsmessage)

### BatchStopUpdateAction



```js
amazonaws_elasticache.BatchStopUpdateAction({
  "ServiceUpdateName": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupIds `array`
  * CacheClusterIds `array`
  * ServiceUpdateName **required** `string`

#### Output
* output [UpdateActionResultsMessage](#updateactionresultsmessage)

### BatchStopUpdateAction



```js
amazonaws_elasticache.BatchStopUpdateAction({
  "ServiceUpdateName": null
}, context)
```

#### Input
* input `object`
  * CacheClusterIds
    * items [String](#string)
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName **required**

#### Output
* output [UpdateActionResultsMessage](#updateactionresultsmessage)

### CompleteMigration



```js
amazonaws_elasticache.CompleteMigration({
  "ReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * Force `boolean`

#### Output
* output [CompleteMigrationResponse](#completemigrationresponse)

### CompleteMigration



```js
amazonaws_elasticache.CompleteMigration({
  "ReplicationGroupId": null
}, context)
```

#### Input
* input `object`
  * Force
  * ReplicationGroupId **required**

#### Output
* output [CompleteMigrationResponse](#completemigrationresponse)

### CopySnapshot



```js
amazonaws_elasticache.CopySnapshot({
  "SourceSnapshotName": "",
  "TargetSnapshotName": ""
}, context)
```

#### Input
* input `object`
  * SourceSnapshotName **required** `string`
  * TargetSnapshotName **required** `string`
  * TargetBucket `string`
  * KmsKeyId `string`

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CopySnapshot



```js
amazonaws_elasticache.CopySnapshot({
  "SourceSnapshotName": null,
  "TargetSnapshotName": null
}, context)
```

#### Input
* input `object`
  * KmsKeyId
  * SourceSnapshotName **required**
  * TargetBucket
  * TargetSnapshotName **required**

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CreateCacheCluster



```js
amazonaws_elasticache.CreateCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** `string`
  * ReplicationGroupId `string`
  * AZMode `string`
  * PreferredAvailabilityZone `string`
  * PreferredAvailabilityZones `array`
  * NumCacheNodes `integer`
  * CacheNodeType `string`
  * Engine `string`
  * EngineVersion `string`
  * CacheParameterGroupName `string`
  * CacheSubnetGroupName `string`
  * CacheSecurityGroupNames `array`
  * SecurityGroupIds `array`
  * Tags `array`
  * SnapshotArns `array`
  * SnapshotName `string`
  * PreferredMaintenanceWindow `string`
  * Port `integer`
  * NotificationTopicArn `string`
  * AutoMinorVersionUpgrade `boolean`
  * SnapshotRetentionLimit `integer`
  * SnapshotWindow `string`
  * AuthToken `string`
  * OutpostMode `string`
  * PreferredOutpostArn `string`
  * PreferredOutpostArns `array`

#### Output
* output [CreateCacheClusterResult](#createcacheclusterresult)

### CreateCacheCluster



```js
amazonaws_elasticache.CreateCacheCluster({
  "CacheClusterId": null
}, context)
```

#### Input
* input `object`
  * AZMode
  * AuthToken
  * AutoMinorVersionUpgrade
  * CacheClusterId **required**
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * CacheSubnetGroupName
  * Engine
  * EngineVersion
  * NotificationTopicArn
  * NumCacheNodes
  * OutpostMode
  * Port
  * PreferredAvailabilityZone
  * PreferredAvailabilityZones
    * items
  * PreferredMaintenanceWindow
  * PreferredOutpostArn
  * PreferredOutpostArns
    * items
  * ReplicationGroupId
  * SecurityGroupIds
    * items
  * SnapshotArns
    * items
  * SnapshotName
  * SnapshotRetentionLimit
  * SnapshotWindow
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateCacheClusterResult](#createcacheclusterresult)

### CreateCacheParameterGroup



```js
amazonaws_elasticache.CreateCacheParameterGroup({
  "CacheParameterGroupName": "",
  "CacheParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required** `string`
  * CacheParameterGroupFamily **required** `string`
  * Description **required** `string`

#### Output
* output [CreateCacheParameterGroupResult](#createcacheparametergroupresult)

### CreateCacheParameterGroup



```js
amazonaws_elasticache.CreateCacheParameterGroup({
  "CacheParameterGroupName": null,
  "CacheParameterGroupFamily": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupFamily **required**
  * CacheParameterGroupName **required**
  * Description **required**

#### Output
* output [CreateCacheParameterGroupResult](#createcacheparametergroupresult)

### CreateCacheSecurityGroup



```js
amazonaws_elasticache.CreateCacheSecurityGroup({
  "CacheSecurityGroupName": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required** `string`
  * Description **required** `string`

#### Output
* output [CreateCacheSecurityGroupResult](#createcachesecuritygroupresult)

### CreateCacheSecurityGroup



```js
amazonaws_elasticache.CreateCacheSecurityGroup({
  "CacheSecurityGroupName": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required**
  * Description **required**

#### Output
* output [CreateCacheSecurityGroupResult](#createcachesecuritygroupresult)

### CreateCacheSubnetGroup



```js
amazonaws_elasticache.CreateCacheSubnetGroup({
  "CacheSubnetGroupName": "",
  "CacheSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupName **required** `string`
  * CacheSubnetGroupDescription **required** `string`
  * SubnetIds **required** `array`

#### Output
* output [CreateCacheSubnetGroupResult](#createcachesubnetgroupresult)

### CreateCacheSubnetGroup



```js
amazonaws_elasticache.CreateCacheSubnetGroup({
  "CacheSubnetGroupName": null,
  "CacheSubnetGroupDescription": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupDescription **required**
  * CacheSubnetGroupName **required**
  * SubnetIds **required**
    * items

#### Output
* output [CreateCacheSubnetGroupResult](#createcachesubnetgroupresult)

### CreateGlobalReplicationGroup



```js
amazonaws_elasticache.CreateGlobalReplicationGroup({
  "GlobalReplicationGroupIdSuffix": "",
  "PrimaryReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupIdSuffix **required** `string`
  * GlobalReplicationGroupDescription `string`
  * PrimaryReplicationGroupId **required** `string`

#### Output
* output [CreateGlobalReplicationGroupResult](#createglobalreplicationgroupresult)

### CreateGlobalReplicationGroup



```js
amazonaws_elasticache.CreateGlobalReplicationGroup({
  "GlobalReplicationGroupIdSuffix": null,
  "PrimaryReplicationGroupId": null
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupDescription
  * GlobalReplicationGroupIdSuffix **required**
  * PrimaryReplicationGroupId **required**

#### Output
* output [CreateGlobalReplicationGroupResult](#createglobalreplicationgroupresult)

### CreateReplicationGroup



```js
amazonaws_elasticache.CreateReplicationGroup({
  "ReplicationGroupId": "",
  "ReplicationGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * ReplicationGroupDescription **required** `string`
  * GlobalReplicationGroupId `string`
  * PrimaryClusterId `string`
  * AutomaticFailoverEnabled `boolean`
  * MultiAZEnabled `boolean`
  * NumCacheClusters `integer`
  * PreferredCacheClusterAZs `array`
  * NumNodeGroups `integer`
  * ReplicasPerNodeGroup `integer`
  * NodeGroupConfiguration `array`
  * CacheNodeType `string`
  * Engine `string`
  * EngineVersion `string`
  * CacheParameterGroupName `string`
  * CacheSubnetGroupName `string`
  * CacheSecurityGroupNames `array`
  * SecurityGroupIds `array`
  * Tags `array`
  * SnapshotArns `array`
  * SnapshotName `string`
  * PreferredMaintenanceWindow `string`
  * Port `integer`
  * NotificationTopicArn `string`
  * AutoMinorVersionUpgrade `boolean`
  * SnapshotRetentionLimit `integer`
  * SnapshotWindow `string`
  * AuthToken `string`
  * TransitEncryptionEnabled `boolean`
  * AtRestEncryptionEnabled `boolean`
  * KmsKeyId `string`
  * UserGroupIds `array`

#### Output
* output [CreateReplicationGroupResult](#createreplicationgroupresult)

### CreateReplicationGroup



```js
amazonaws_elasticache.CreateReplicationGroup({
  "ReplicationGroupId": null,
  "ReplicationGroupDescription": null
}, context)
```

#### Input
* input `object`
  * AtRestEncryptionEnabled
  * AuthToken
  * AutoMinorVersionUpgrade
  * AutomaticFailoverEnabled
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * CacheSubnetGroupName
  * Engine
  * EngineVersion
  * GlobalReplicationGroupId
  * KmsKeyId
  * MultiAZEnabled
  * NodeGroupConfiguration
    * items
      * NodeGroupId
      * PrimaryAvailabilityZone
      * PrimaryOutpostArn
      * ReplicaAvailabilityZones
        * items
      * ReplicaCount
      * ReplicaOutpostArns
        * items
      * Slots
  * NotificationTopicArn
  * NumCacheClusters
  * NumNodeGroups
  * Port
  * PreferredCacheClusterAZs
    * items
  * PreferredMaintenanceWindow
  * PrimaryClusterId
  * ReplicasPerNodeGroup
  * ReplicationGroupDescription **required**
  * ReplicationGroupId **required**
  * SecurityGroupIds
    * items
  * SnapshotArns
    * items
  * SnapshotName
  * SnapshotRetentionLimit
  * SnapshotWindow
  * Tags
    * items
      * Key
      * Value
  * TransitEncryptionEnabled
  * UserGroupIds
    * items [UserGroupId](#usergroupid)

#### Output
* output [CreateReplicationGroupResult](#createreplicationgroupresult)

### CreateSnapshot



```js
amazonaws_elasticache.CreateSnapshot({
  "SnapshotName": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId `string`
  * CacheClusterId `string`
  * SnapshotName **required** `string`
  * KmsKeyId `string`

#### Output
* output [CreateSnapshotResult](#createsnapshotresult)

### CreateSnapshot



```js
amazonaws_elasticache.CreateSnapshot({
  "SnapshotName": null
}, context)
```

#### Input
* input `object`
  * CacheClusterId
  * KmsKeyId
  * ReplicationGroupId
  * SnapshotName **required**

#### Output
* output [CreateSnapshotResult](#createsnapshotresult)

### CreateUser



```js
amazonaws_elasticache.CreateUser({
  "UserId": "",
  "UserName": "",
  "Engine": "",
  "AccessString": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * UserName **required** `string`
  * Engine **required** `string`
  * Passwords `array`
  * AccessString **required** `string`
  * NoPasswordRequired `boolean`

#### Output
* output [User](#user)

### CreateUser



```js
amazonaws_elasticache.CreateUser({
  "UserId": null,
  "UserName": null,
  "Engine": null,
  "AccessString": null
}, context)
```

#### Input
* input `object`
  * AccessString **required**
  * Engine **required**
  * NoPasswordRequired
  * Passwords
    * items [String](#string)
  * UserId **required**
  * UserName **required**

#### Output
* output [User](#user)

### CreateUserGroup



```js
amazonaws_elasticache.CreateUserGroup({
  "UserGroupId": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * UserGroupId **required** `string`
  * Engine **required** `string`
  * UserIds `array`

#### Output
* output [UserGroup](#usergroup)

### CreateUserGroup



```js
amazonaws_elasticache.CreateUserGroup({
  "UserGroupId": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * Engine **required**
  * UserGroupId **required**
  * UserIds
    * items [UserId](#userid)

#### Output
* output [UserGroup](#usergroup)

### DecreaseNodeGroupsInGlobalReplicationGroup



```js
amazonaws_elasticache.DecreaseNodeGroupsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "NodeGroupCount": 0,
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * NodeGroupCount **required** `integer`
  * GlobalNodeGroupsToRemove `array`
  * GlobalNodeGroupsToRetain `array`
  * ApplyImmediately **required** `boolean`

#### Output
* output [DecreaseNodeGroupsInGlobalReplicationGroupResult](#decreasenodegroupsinglobalreplicationgroupresult)

### DecreaseNodeGroupsInGlobalReplicationGroup



```js
amazonaws_elasticache.DecreaseNodeGroupsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "NodeGroupCount": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * GlobalNodeGroupsToRemove
    * items
  * GlobalNodeGroupsToRetain
    * items
  * GlobalReplicationGroupId **required**
  * NodeGroupCount **required**

#### Output
* output [DecreaseNodeGroupsInGlobalReplicationGroupResult](#decreasenodegroupsinglobalreplicationgroupresult)

### DecreaseReplicaCount



```js
amazonaws_elasticache.DecreaseReplicaCount({
  "ReplicationGroupId": "",
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * NewReplicaCount `integer`
  * ReplicaConfiguration `array`
  * ReplicasToRemove `array`
  * ApplyImmediately **required** `boolean`

#### Output
* output [DecreaseReplicaCountResult](#decreasereplicacountresult)

### DecreaseReplicaCount



```js
amazonaws_elasticache.DecreaseReplicaCount({
  "ReplicationGroupId": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * NewReplicaCount
  * ReplicaConfiguration
    * items
      * NewReplicaCount **required**
      * NodeGroupId **required**
      * PreferredAvailabilityZones
        * items
      * PreferredOutpostArns
        * items
  * ReplicasToRemove
    * items [String](#string)
  * ReplicationGroupId **required**

#### Output
* output [DecreaseReplicaCountResult](#decreasereplicacountresult)

### DeleteCacheCluster



```js
amazonaws_elasticache.DeleteCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** `string`
  * FinalSnapshotIdentifier `string`

#### Output
* output [DeleteCacheClusterResult](#deletecacheclusterresult)

### DeleteCacheCluster



```js
amazonaws_elasticache.DeleteCacheCluster({
  "CacheClusterId": null
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required**
  * FinalSnapshotIdentifier

#### Output
* output [DeleteCacheClusterResult](#deletecacheclusterresult)

### DeleteCacheParameterGroup



```js
amazonaws_elasticache.DeleteCacheParameterGroup({
  "CacheParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteCacheParameterGroup



```js
amazonaws_elasticache.DeleteCacheParameterGroup({
  "CacheParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required**

#### Output
*Output schema unknown*

### DeleteCacheSecurityGroup



```js
amazonaws_elasticache.DeleteCacheSecurityGroup({
  "CacheSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteCacheSecurityGroup



```js
amazonaws_elasticache.DeleteCacheSecurityGroup({
  "CacheSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required**

#### Output
*Output schema unknown*

### DeleteCacheSubnetGroup



```js
amazonaws_elasticache.DeleteCacheSubnetGroup({
  "CacheSubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteCacheSubnetGroup



```js
amazonaws_elasticache.DeleteCacheSubnetGroup({
  "CacheSubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupName **required**

#### Output
*Output schema unknown*

### DeleteGlobalReplicationGroup



```js
amazonaws_elasticache.DeleteGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "RetainPrimaryReplicationGroup": true
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * RetainPrimaryReplicationGroup **required** `boolean`

#### Output
* output [DeleteGlobalReplicationGroupResult](#deleteglobalreplicationgroupresult)

### DeleteGlobalReplicationGroup



```js
amazonaws_elasticache.DeleteGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "RetainPrimaryReplicationGroup": null
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required**
  * RetainPrimaryReplicationGroup **required**

#### Output
* output [DeleteGlobalReplicationGroupResult](#deleteglobalreplicationgroupresult)

### DeleteReplicationGroup



```js
amazonaws_elasticache.DeleteReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * RetainPrimaryCluster `boolean`
  * FinalSnapshotIdentifier `string`

#### Output
* output [DeleteReplicationGroupResult](#deletereplicationgroupresult)

### DeleteReplicationGroup



```js
amazonaws_elasticache.DeleteReplicationGroup({
  "ReplicationGroupId": null
}, context)
```

#### Input
* input `object`
  * FinalSnapshotIdentifier
  * ReplicationGroupId **required**
  * RetainPrimaryCluster

#### Output
* output [DeleteReplicationGroupResult](#deletereplicationgroupresult)

### DeleteSnapshot



```js
amazonaws_elasticache.DeleteSnapshot({
  "SnapshotName": ""
}, context)
```

#### Input
* input `object`
  * SnapshotName **required** `string`

#### Output
* output [DeleteSnapshotResult](#deletesnapshotresult)

### DeleteSnapshot



```js
amazonaws_elasticache.DeleteSnapshot({
  "SnapshotName": null
}, context)
```

#### Input
* input `object`
  * SnapshotName **required**

#### Output
* output [DeleteSnapshotResult](#deletesnapshotresult)

### DeleteUser



```js
amazonaws_elasticache.DeleteUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`

#### Output
* output [User](#user)

### DeleteUser



```js
amazonaws_elasticache.DeleteUser({
  "UserId": null
}, context)
```

#### Input
* input `object`
  * UserId **required**

#### Output
* output [User](#user)

### DeleteUserGroup



```js
amazonaws_elasticache.DeleteUserGroup({
  "UserGroupId": ""
}, context)
```

#### Input
* input `object`
  * UserGroupId **required** `string`

#### Output
* output [UserGroup](#usergroup)

### DeleteUserGroup



```js
amazonaws_elasticache.DeleteUserGroup({
  "UserGroupId": null
}, context)
```

#### Input
* input `object`
  * UserGroupId **required**

#### Output
* output [UserGroup](#usergroup)

### DescribeCacheClusters



```js
amazonaws_elasticache.DescribeCacheClusters({}, context)
```

#### Input
* input `object`
  * CacheClusterId `string`
  * MaxRecords `integer`
  * Marker `string`
  * ShowCacheNodeInfo `boolean`
  * ShowCacheClustersNotInReplicationGroups `boolean`

#### Output
* output [CacheClusterMessage](#cacheclustermessage)

### DescribeCacheClusters



```js
amazonaws_elasticache.DescribeCacheClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheClusterId
  * Marker
  * MaxRecords
  * ShowCacheClustersNotInReplicationGroups
  * ShowCacheNodeInfo

#### Output
* output [CacheClusterMessage](#cacheclustermessage)

### DescribeCacheEngineVersions



```js
amazonaws_elasticache.DescribeCacheEngineVersions({}, context)
```

#### Input
* input `object`
  * Engine `string`
  * EngineVersion `string`
  * CacheParameterGroupFamily `string`
  * MaxRecords `integer`
  * Marker `string`
  * DefaultOnly `boolean`

#### Output
* output [CacheEngineVersionMessage](#cacheengineversionmessage)

### DescribeCacheEngineVersions



```js
amazonaws_elasticache.DescribeCacheEngineVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Marker
  * MaxRecords

#### Output
* output [CacheEngineVersionMessage](#cacheengineversionmessage)

### DescribeCacheParameterGroups



```js
amazonaws_elasticache.DescribeCacheParameterGroups({}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CacheParameterGroupsMessage](#cacheparametergroupsmessage)

### DescribeCacheParameterGroups



```js
amazonaws_elasticache.DescribeCacheParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupName
  * Marker
  * MaxRecords

#### Output
* output [CacheParameterGroupsMessage](#cacheparametergroupsmessage)

### DescribeCacheParameters



```js
amazonaws_elasticache.DescribeCacheParameters({
  "CacheParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required** `string`
  * Source `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CacheParameterGroupDetails](#cacheparametergroupdetails)

### DescribeCacheParameters



```js
amazonaws_elasticache.DescribeCacheParameters({
  "CacheParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupName **required**
  * Marker
  * MaxRecords
  * Source

#### Output
* output [CacheParameterGroupDetails](#cacheparametergroupdetails)

### DescribeCacheSecurityGroups



```js
amazonaws_elasticache.DescribeCacheSecurityGroups({}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CacheSecurityGroupMessage](#cachesecuritygroupmessage)

### DescribeCacheSecurityGroups



```js
amazonaws_elasticache.DescribeCacheSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheSecurityGroupName
  * Marker
  * MaxRecords

#### Output
* output [CacheSecurityGroupMessage](#cachesecuritygroupmessage)

### DescribeCacheSubnetGroups



```js
amazonaws_elasticache.DescribeCacheSubnetGroups({}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupName `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CacheSubnetGroupMessage](#cachesubnetgroupmessage)

### DescribeCacheSubnetGroups



```js
amazonaws_elasticache.DescribeCacheSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheSubnetGroupName
  * Marker
  * MaxRecords

#### Output
* output [CacheSubnetGroupMessage](#cachesubnetgroupmessage)

### DescribeEngineDefaultParameters



```js
amazonaws_elasticache.DescribeEngineDefaultParameters({
  "CacheParameterGroupFamily": ""
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupFamily **required** `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEngineDefaultParameters



```js
amazonaws_elasticache.DescribeEngineDefaultParameters({
  "CacheParameterGroupFamily": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupFamily **required**
  * Marker
  * MaxRecords

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEvents



```js
amazonaws_elasticache.DescribeEvents({}, context)
```

#### Input
* input `object`
  * SourceIdentifier `string`
  * SourceType `string`
  * StartTime `string`
  * EndTime `string`
  * Duration `integer`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeEvents



```js
amazonaws_elasticache.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration
  * EndTime
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeGlobalReplicationGroups



```js
amazonaws_elasticache.DescribeGlobalReplicationGroups({}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId `string`
  * MaxRecords `integer`
  * Marker `string`
  * ShowMemberInfo `boolean`

#### Output
* output [DescribeGlobalReplicationGroupsResult](#describeglobalreplicationgroupsresult)

### DescribeGlobalReplicationGroups



```js
amazonaws_elasticache.DescribeGlobalReplicationGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * GlobalReplicationGroupId
  * Marker
  * MaxRecords
  * ShowMemberInfo

#### Output
* output [DescribeGlobalReplicationGroupsResult](#describeglobalreplicationgroupsresult)

### DescribeReplicationGroups



```js
amazonaws_elasticache.DescribeReplicationGroups({}, context)
```

#### Input
* input `object`
  * ReplicationGroupId `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReplicationGroupMessage](#replicationgroupmessage)

### DescribeReplicationGroups



```js
amazonaws_elasticache.DescribeReplicationGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReplicationGroupId

#### Output
* output [ReplicationGroupMessage](#replicationgroupmessage)

### DescribeReservedCacheNodes



```js
amazonaws_elasticache.DescribeReservedCacheNodes({}, context)
```

#### Input
* input `object`
  * ReservedCacheNodeId `string`
  * ReservedCacheNodesOfferingId `string`
  * CacheNodeType `string`
  * Duration `string`
  * ProductDescription `string`
  * OfferingType `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedCacheNodeMessage](#reservedcachenodemessage)

### DescribeReservedCacheNodes



```js
amazonaws_elasticache.DescribeReservedCacheNodes({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheNodeType
  * Duration
  * Marker
  * MaxRecords
  * OfferingType
  * ProductDescription
  * ReservedCacheNodeId
  * ReservedCacheNodesOfferingId

#### Output
* output [ReservedCacheNodeMessage](#reservedcachenodemessage)

### DescribeReservedCacheNodesOfferings



```js
amazonaws_elasticache.DescribeReservedCacheNodesOfferings({}, context)
```

#### Input
* input `object`
  * ReservedCacheNodesOfferingId `string`
  * CacheNodeType `string`
  * Duration `string`
  * ProductDescription `string`
  * OfferingType `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedCacheNodesOfferingMessage](#reservedcachenodesofferingmessage)

### DescribeReservedCacheNodesOfferings



```js
amazonaws_elasticache.DescribeReservedCacheNodesOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheNodeType
  * Duration
  * Marker
  * MaxRecords
  * OfferingType
  * ProductDescription
  * ReservedCacheNodesOfferingId

#### Output
* output [ReservedCacheNodesOfferingMessage](#reservedcachenodesofferingmessage)

### DescribeServiceUpdates



```js
amazonaws_elasticache.DescribeServiceUpdates({}, context)
```

#### Input
* input `object`
  * ServiceUpdateName `string`
  * ServiceUpdateStatus `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ServiceUpdatesMessage](#serviceupdatesmessage)

### DescribeServiceUpdates



```js
amazonaws_elasticache.DescribeServiceUpdates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ServiceUpdateName
  * ServiceUpdateStatus
    * items [ServiceUpdateStatus](#serviceupdatestatus)

#### Output
* output [ServiceUpdatesMessage](#serviceupdatesmessage)

### DescribeSnapshots



```js
amazonaws_elasticache.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * ReplicationGroupId `string`
  * CacheClusterId `string`
  * SnapshotName `string`
  * SnapshotSource `string`
  * Marker `string`
  * MaxRecords `integer`
  * ShowNodeGroupConfig `boolean`

#### Output
* output [DescribeSnapshotsListMessage](#describesnapshotslistmessage)

### DescribeSnapshots



```js
amazonaws_elasticache.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheClusterId
  * Marker
  * MaxRecords
  * ReplicationGroupId
  * ShowNodeGroupConfig
  * SnapshotName
  * SnapshotSource

#### Output
* output [DescribeSnapshotsListMessage](#describesnapshotslistmessage)

### DescribeUpdateActions



```js
amazonaws_elasticache.DescribeUpdateActions({}, context)
```

#### Input
* input `object`
  * ServiceUpdateName `string`
  * ReplicationGroupIds `array`
  * CacheClusterIds `array`
  * Engine `string`
  * ServiceUpdateStatus `array`
  * ServiceUpdateTimeRange `object`
  * UpdateActionStatus `array`
  * ShowNodeLevelUpdateStatus `boolean`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [UpdateActionsMessage](#updateactionsmessage)

### DescribeUpdateActions



```js
amazonaws_elasticache.DescribeUpdateActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheClusterIds
    * items [String](#string)
  * Engine
  * Marker
  * MaxRecords
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName
  * ServiceUpdateStatus
    * items [ServiceUpdateStatus](#serviceupdatestatus)
  * ServiceUpdateTimeRange
    * EndTime
    * StartTime
  * ShowNodeLevelUpdateStatus
  * UpdateActionStatus
    * items [UpdateActionStatus](#updateactionstatus)

#### Output
* output [UpdateActionsMessage](#updateactionsmessage)

### DescribeUserGroups



```js
amazonaws_elasticache.DescribeUserGroups({}, context)
```

#### Input
* input `object`
  * UserGroupId `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeUserGroupsResult](#describeusergroupsresult)

### DescribeUserGroups



```js
amazonaws_elasticache.DescribeUserGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * UserGroupId

#### Output
* output [DescribeUserGroupsResult](#describeusergroupsresult)

### DescribeUsers



```js
amazonaws_elasticache.DescribeUsers({}, context)
```

#### Input
* input `object`
  * Engine `string`
  * UserId `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeUsersResult](#describeusersresult)

### DescribeUsers



```js
amazonaws_elasticache.DescribeUsers({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Engine
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * UserId

#### Output
* output [DescribeUsersResult](#describeusersresult)

### DisassociateGlobalReplicationGroup



```js
amazonaws_elasticache.DisassociateGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "ReplicationGroupId": "",
  "ReplicationGroupRegion": ""
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * ReplicationGroupId **required** `string`
  * ReplicationGroupRegion **required** `string`

#### Output
* output [DisassociateGlobalReplicationGroupResult](#disassociateglobalreplicationgroupresult)

### DisassociateGlobalReplicationGroup



```js
amazonaws_elasticache.DisassociateGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "ReplicationGroupId": null,
  "ReplicationGroupRegion": null
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required**
  * ReplicationGroupId **required**
  * ReplicationGroupRegion **required**

#### Output
* output [DisassociateGlobalReplicationGroupResult](#disassociateglobalreplicationgroupresult)

### FailoverGlobalReplicationGroup



```js
amazonaws_elasticache.FailoverGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "PrimaryRegion": "",
  "PrimaryReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * PrimaryRegion **required** `string`
  * PrimaryReplicationGroupId **required** `string`

#### Output
* output [FailoverGlobalReplicationGroupResult](#failoverglobalreplicationgroupresult)

### FailoverGlobalReplicationGroup



```js
amazonaws_elasticache.FailoverGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "PrimaryRegion": null,
  "PrimaryReplicationGroupId": null
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required**
  * PrimaryRegion **required**
  * PrimaryReplicationGroupId **required**

#### Output
* output [FailoverGlobalReplicationGroupResult](#failoverglobalreplicationgroupresult)

### IncreaseNodeGroupsInGlobalReplicationGroup



```js
amazonaws_elasticache.IncreaseNodeGroupsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "NodeGroupCount": 0,
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * NodeGroupCount **required** `integer`
  * RegionalConfigurations `array`
  * ApplyImmediately **required** `boolean`

#### Output
* output [IncreaseNodeGroupsInGlobalReplicationGroupResult](#increasenodegroupsinglobalreplicationgroupresult)

### IncreaseNodeGroupsInGlobalReplicationGroup



```js
amazonaws_elasticache.IncreaseNodeGroupsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "NodeGroupCount": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * GlobalReplicationGroupId **required**
  * NodeGroupCount **required**
  * RegionalConfigurations
    * items
      * ReplicationGroupId **required**
      * ReplicationGroupRegion **required**
      * ReshardingConfiguration **required**
        * items
          * NodeGroupId
          * PreferredAvailabilityZones

#### Output
* output [IncreaseNodeGroupsInGlobalReplicationGroupResult](#increasenodegroupsinglobalreplicationgroupresult)

### IncreaseReplicaCount



```js
amazonaws_elasticache.IncreaseReplicaCount({
  "ReplicationGroupId": "",
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * NewReplicaCount `integer`
  * ReplicaConfiguration `array`
  * ApplyImmediately **required** `boolean`

#### Output
* output [IncreaseReplicaCountResult](#increasereplicacountresult)

### IncreaseReplicaCount



```js
amazonaws_elasticache.IncreaseReplicaCount({
  "ReplicationGroupId": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * NewReplicaCount
  * ReplicaConfiguration
    * items
      * NewReplicaCount **required**
      * NodeGroupId **required**
      * PreferredAvailabilityZones
        * items
      * PreferredOutpostArns
        * items
  * ReplicationGroupId **required**

#### Output
* output [IncreaseReplicaCountResult](#increasereplicacountresult)

### ListAllowedNodeTypeModifications



```js
amazonaws_elasticache.ListAllowedNodeTypeModifications({}, context)
```

#### Input
* input `object`
  * CacheClusterId `string`
  * ReplicationGroupId `string`

#### Output
* output [AllowedNodeTypeModificationsMessage](#allowednodetypemodificationsmessage)

### ListAllowedNodeTypeModifications



```js
amazonaws_elasticache.ListAllowedNodeTypeModifications({}, context)
```

#### Input
* input `object`
  * CacheClusterId
  * ReplicationGroupId

#### Output
* output [AllowedNodeTypeModificationsMessage](#allowednodetypemodificationsmessage)

### ListTagsForResource



```js
amazonaws_elasticache.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`

#### Output
* output [TagListMessage](#taglistmessage)

### ListTagsForResource



```js
amazonaws_elasticache.ListTagsForResource({
  "ResourceName": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**

#### Output
* output [TagListMessage](#taglistmessage)

### ModifyCacheCluster



```js
amazonaws_elasticache.ModifyCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** `string`
  * NumCacheNodes `integer`
  * CacheNodeIdsToRemove `array`
  * AZMode `string`
  * NewAvailabilityZones `array`
  * CacheSecurityGroupNames `array`
  * SecurityGroupIds `array`
  * PreferredMaintenanceWindow `string`
  * NotificationTopicArn `string`
  * CacheParameterGroupName `string`
  * NotificationTopicStatus `string`
  * ApplyImmediately `boolean`
  * EngineVersion `string`
  * AutoMinorVersionUpgrade `boolean`
  * SnapshotRetentionLimit `integer`
  * SnapshotWindow `string`
  * CacheNodeType `string`
  * AuthToken `string`
  * AuthTokenUpdateStrategy `string`

#### Output
* output [ModifyCacheClusterResult](#modifycacheclusterresult)

### ModifyCacheCluster



```js
amazonaws_elasticache.ModifyCacheCluster({
  "CacheClusterId": null
}, context)
```

#### Input
* input `object`
  * AZMode
  * ApplyImmediately
  * AuthToken
  * AuthTokenUpdateStrategy
  * AutoMinorVersionUpgrade
  * CacheClusterId **required**
  * CacheNodeIdsToRemove
    * items
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * EngineVersion
  * NewAvailabilityZones
    * items
  * NotificationTopicArn
  * NotificationTopicStatus
  * NumCacheNodes
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items
  * SnapshotRetentionLimit
  * SnapshotWindow

#### Output
* output [ModifyCacheClusterResult](#modifycacheclusterresult)

### ModifyCacheParameterGroup



```js
amazonaws_elasticache.ModifyCacheParameterGroup({
  "CacheParameterGroupName": "",
  "ParameterNameValues": []
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required** `string`
  * ParameterNameValues **required** `array`

#### Output
* output [CacheParameterGroupNameMessage](#cacheparametergroupnamemessage)

### ModifyCacheParameterGroup



```js
amazonaws_elasticache.ModifyCacheParameterGroup({
  "CacheParameterGroupName": null,
  "ParameterNameValues": null
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required**
  * ParameterNameValues **required**
    * items
      * ParameterName
      * ParameterValue

#### Output
* output [CacheParameterGroupNameMessage](#cacheparametergroupnamemessage)

### ModifyCacheSubnetGroup



```js
amazonaws_elasticache.ModifyCacheSubnetGroup({
  "CacheSubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupName **required** `string`
  * CacheSubnetGroupDescription `string`
  * SubnetIds `array`

#### Output
* output [ModifyCacheSubnetGroupResult](#modifycachesubnetgroupresult)

### ModifyCacheSubnetGroup



```js
amazonaws_elasticache.ModifyCacheSubnetGroup({
  "CacheSubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * CacheSubnetGroupDescription
  * CacheSubnetGroupName **required**
  * SubnetIds
    * items

#### Output
* output [ModifyCacheSubnetGroupResult](#modifycachesubnetgroupresult)

### ModifyGlobalReplicationGroup



```js
amazonaws_elasticache.ModifyGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * ApplyImmediately **required** `boolean`
  * CacheNodeType `string`
  * EngineVersion `string`
  * GlobalReplicationGroupDescription `string`
  * AutomaticFailoverEnabled `boolean`

#### Output
* output [ModifyGlobalReplicationGroupResult](#modifyglobalreplicationgroupresult)

### ModifyGlobalReplicationGroup



```js
amazonaws_elasticache.ModifyGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * AutomaticFailoverEnabled
  * CacheNodeType
  * EngineVersion
  * GlobalReplicationGroupDescription
  * GlobalReplicationGroupId **required**

#### Output
* output [ModifyGlobalReplicationGroupResult](#modifyglobalreplicationgroupresult)

### ModifyReplicationGroup



```js
amazonaws_elasticache.ModifyReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * ReplicationGroupDescription `string`
  * PrimaryClusterId `string`
  * SnapshottingClusterId `string`
  * AutomaticFailoverEnabled `boolean`
  * MultiAZEnabled `boolean`
  * NodeGroupId `string`
  * CacheSecurityGroupNames `array`
  * SecurityGroupIds `array`
  * PreferredMaintenanceWindow `string`
  * NotificationTopicArn `string`
  * CacheParameterGroupName `string`
  * NotificationTopicStatus `string`
  * ApplyImmediately `boolean`
  * EngineVersion `string`
  * AutoMinorVersionUpgrade `boolean`
  * SnapshotRetentionLimit `integer`
  * SnapshotWindow `string`
  * CacheNodeType `string`
  * AuthToken `string`
  * AuthTokenUpdateStrategy `string`
  * UserGroupIdsToAdd `array`
  * UserGroupIdsToRemove `array`
  * RemoveUserGroups `boolean`

#### Output
* output [ModifyReplicationGroupResult](#modifyreplicationgroupresult)

### ModifyReplicationGroup



```js
amazonaws_elasticache.ModifyReplicationGroup({
  "ReplicationGroupId": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * AuthToken
  * AuthTokenUpdateStrategy
  * AutoMinorVersionUpgrade
  * AutomaticFailoverEnabled
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * EngineVersion
  * MultiAZEnabled
  * NodeGroupId
  * NotificationTopicArn
  * NotificationTopicStatus
  * PreferredMaintenanceWindow
  * PrimaryClusterId
  * RemoveUserGroups
  * ReplicationGroupDescription
  * ReplicationGroupId **required**
  * SecurityGroupIds
    * items
  * SnapshotRetentionLimit
  * SnapshotWindow
  * SnapshottingClusterId
  * UserGroupIdsToAdd
    * items [UserGroupId](#usergroupid)
  * UserGroupIdsToRemove
    * items [UserGroupId](#usergroupid)

#### Output
* output [ModifyReplicationGroupResult](#modifyreplicationgroupresult)

### ModifyReplicationGroupShardConfiguration



```js
amazonaws_elasticache.ModifyReplicationGroupShardConfiguration({
  "ReplicationGroupId": "",
  "NodeGroupCount": 0,
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * NodeGroupCount **required** `integer`
  * ApplyImmediately **required** `boolean`
  * ReshardingConfiguration `array`
  * NodeGroupsToRemove `array`
  * NodeGroupsToRetain `array`

#### Output
* output [ModifyReplicationGroupShardConfigurationResult](#modifyreplicationgroupshardconfigurationresult)

### ModifyReplicationGroupShardConfiguration



```js
amazonaws_elasticache.ModifyReplicationGroupShardConfiguration({
  "ReplicationGroupId": null,
  "NodeGroupCount": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * NodeGroupCount **required**
  * NodeGroupsToRemove
    * items
  * NodeGroupsToRetain
    * items
  * ReplicationGroupId **required**
  * ReshardingConfiguration
    * items
      * NodeGroupId
      * PreferredAvailabilityZones
        * items

#### Output
* output [ModifyReplicationGroupShardConfigurationResult](#modifyreplicationgroupshardconfigurationresult)

### ModifyUser



```js
amazonaws_elasticache.ModifyUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * AccessString `string`
  * AppendAccessString `string`
  * Passwords `array`
  * NoPasswordRequired `boolean`

#### Output
* output [User](#user)

### ModifyUser



```js
amazonaws_elasticache.ModifyUser({
  "UserId": null
}, context)
```

#### Input
* input `object`
  * AccessString
  * AppendAccessString
  * NoPasswordRequired
  * Passwords
    * items [String](#string)
  * UserId **required**

#### Output
* output [User](#user)

### ModifyUserGroup



```js
amazonaws_elasticache.ModifyUserGroup({
  "UserGroupId": ""
}, context)
```

#### Input
* input `object`
  * UserGroupId **required** `string`
  * UserIdsToAdd `array`
  * UserIdsToRemove `array`

#### Output
* output [UserGroup](#usergroup)

### ModifyUserGroup



```js
amazonaws_elasticache.ModifyUserGroup({
  "UserGroupId": null
}, context)
```

#### Input
* input `object`
  * UserGroupId **required**
  * UserIdsToAdd
    * items [UserId](#userid)
  * UserIdsToRemove
    * items [UserId](#userid)

#### Output
* output [UserGroup](#usergroup)

### PurchaseReservedCacheNodesOffering



```js
amazonaws_elasticache.PurchaseReservedCacheNodesOffering({
  "ReservedCacheNodesOfferingId": ""
}, context)
```

#### Input
* input `object`
  * ReservedCacheNodesOfferingId **required** `string`
  * ReservedCacheNodeId `string`
  * CacheNodeCount `integer`

#### Output
* output [PurchaseReservedCacheNodesOfferingResult](#purchasereservedcachenodesofferingresult)

### PurchaseReservedCacheNodesOffering



```js
amazonaws_elasticache.PurchaseReservedCacheNodesOffering({
  "ReservedCacheNodesOfferingId": null
}, context)
```

#### Input
* input `object`
  * CacheNodeCount
  * ReservedCacheNodeId
  * ReservedCacheNodesOfferingId **required**

#### Output
* output [PurchaseReservedCacheNodesOfferingResult](#purchasereservedcachenodesofferingresult)

### RebalanceSlotsInGlobalReplicationGroup



```js
amazonaws_elasticache.RebalanceSlotsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": "",
  "ApplyImmediately": true
}, context)
```

#### Input
* input `object`
  * GlobalReplicationGroupId **required** `string`
  * ApplyImmediately **required** `boolean`

#### Output
* output [RebalanceSlotsInGlobalReplicationGroupResult](#rebalanceslotsinglobalreplicationgroupresult)

### RebalanceSlotsInGlobalReplicationGroup



```js
amazonaws_elasticache.RebalanceSlotsInGlobalReplicationGroup({
  "GlobalReplicationGroupId": null,
  "ApplyImmediately": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately **required**
  * GlobalReplicationGroupId **required**

#### Output
* output [RebalanceSlotsInGlobalReplicationGroupResult](#rebalanceslotsinglobalreplicationgroupresult)

### RebootCacheCluster



```js
amazonaws_elasticache.RebootCacheCluster({
  "CacheClusterId": "",
  "CacheNodeIdsToReboot": []
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** `string`
  * CacheNodeIdsToReboot **required** `array`

#### Output
* output [RebootCacheClusterResult](#rebootcacheclusterresult)

### RebootCacheCluster



```js
amazonaws_elasticache.RebootCacheCluster({
  "CacheClusterId": null,
  "CacheNodeIdsToReboot": null
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required**
  * CacheNodeIdsToReboot **required**
    * items

#### Output
* output [RebootCacheClusterResult](#rebootcacheclusterresult)

### RemoveTagsFromResource



```js
amazonaws_elasticache.RemoveTagsFromResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`
  * TagKeys **required** `array`

#### Output
* output [TagListMessage](#taglistmessage)

### RemoveTagsFromResource



```js
amazonaws_elasticache.RemoveTagsFromResource({
  "ResourceName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
* output [TagListMessage](#taglistmessage)

### ResetCacheParameterGroup



```js
amazonaws_elasticache.ResetCacheParameterGroup({
  "CacheParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required** `string`
  * ResetAllParameters `boolean`
  * ParameterNameValues `array`

#### Output
* output [CacheParameterGroupNameMessage](#cacheparametergroupnamemessage)

### ResetCacheParameterGroup



```js
amazonaws_elasticache.ResetCacheParameterGroup({
  "CacheParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * CacheParameterGroupName **required**
  * ParameterNameValues
    * items
      * ParameterName
      * ParameterValue
  * ResetAllParameters

#### Output
* output [CacheParameterGroupNameMessage](#cacheparametergroupnamemessage)

### RevokeCacheSecurityGroupIngress



```js
amazonaws_elasticache.RevokeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": "",
  "EC2SecurityGroupName": "",
  "EC2SecurityGroupOwnerId": ""
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required** `string`
  * EC2SecurityGroupName **required** `string`
  * EC2SecurityGroupOwnerId **required** `string`

#### Output
* output [RevokeCacheSecurityGroupIngressResult](#revokecachesecuritygroupingressresult)

### RevokeCacheSecurityGroupIngress



```js
amazonaws_elasticache.RevokeCacheSecurityGroupIngress({
  "CacheSecurityGroupName": null,
  "EC2SecurityGroupName": null,
  "EC2SecurityGroupOwnerId": null
}, context)
```

#### Input
* input `object`
  * CacheSecurityGroupName **required**
  * EC2SecurityGroupName **required**
  * EC2SecurityGroupOwnerId **required**

#### Output
* output [RevokeCacheSecurityGroupIngressResult](#revokecachesecuritygroupingressresult)

### StartMigration



```js
amazonaws_elasticache.StartMigration({
  "ReplicationGroupId": "",
  "CustomerNodeEndpointList": []
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * CustomerNodeEndpointList **required** `array`

#### Output
* output [StartMigrationResponse](#startmigrationresponse)

### StartMigration



```js
amazonaws_elasticache.StartMigration({
  "ReplicationGroupId": null,
  "CustomerNodeEndpointList": null
}, context)
```

#### Input
* input `object`
  * CustomerNodeEndpointList **required**
    * items [CustomerNodeEndpoint](#customernodeendpoint)
  * ReplicationGroupId **required**

#### Output
* output [StartMigrationResponse](#startmigrationresponse)

### TestFailover



```js
amazonaws_elasticache.TestFailover({
  "ReplicationGroupId": "",
  "NodeGroupId": ""
}, context)
```

#### Input
* input `object`
  * ReplicationGroupId **required** `string`
  * NodeGroupId **required** `string`

#### Output
* output [TestFailoverResult](#testfailoverresult)

### TestFailover



```js
amazonaws_elasticache.TestFailover({
  "ReplicationGroupId": null,
  "NodeGroupId": null
}, context)
```

#### Input
* input `object`
  * NodeGroupId **required**
  * ReplicationGroupId **required**

#### Output
* output [TestFailoverResult](#testfailoverresult)



## Definitions

### APICallRateForCustomerExceededFault


### AZMode
* AZMode `string` (values: single-az, cross-az)

### AccessString
* AccessString `string`

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: Represents the input of an AddTagsToResource operation.
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

### AllowedNodeGroupId
* AllowedNodeGroupId `string`

### AllowedNodeTypeModificationsMessage
* AllowedNodeTypeModificationsMessage `object`: Represents the allowed node types you can use to modify your cluster or replication group.
  * ScaleDownModifications
    * items [String](#string)
  * ScaleUpModifications
    * items [String](#string)

### AuthTokenUpdateStatus
* AuthTokenUpdateStatus `string` (values: SETTING, ROTATING)

### AuthTokenUpdateStrategyType
* AuthTokenUpdateStrategyType `string` (values: SET, ROTATE, DELETE)

### Authentication
* Authentication `object`: Indicates whether the user requires a password to authenticate.
  * PasswordCount
  * Type

### AuthenticationType
* AuthenticationType `string` (values: password, no-password)

### AuthorizationAlreadyExistsFault


### AuthorizationNotFoundFault


### AuthorizeCacheSecurityGroupIngressMessage
* AuthorizeCacheSecurityGroupIngressMessage `object`: Represents the input of an AuthorizeCacheSecurityGroupIngress operation.
  * CacheSecurityGroupName **required**
  * EC2SecurityGroupName **required**
  * EC2SecurityGroupOwnerId **required**

### AuthorizeCacheSecurityGroupIngressResult
* AuthorizeCacheSecurityGroupIngressResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### AutomaticFailoverStatus
* AutomaticFailoverStatus `string` (values: enabled, disabled, enabling, disabling)

### AvailabilityZone
* AvailabilityZone `object`: Describes an Availability Zone in which the cluster is launched.
  * Name

### AvailabilityZonesList
* AvailabilityZonesList `array`
  * items

### BatchApplyUpdateActionMessage
* BatchApplyUpdateActionMessage `object`
  * CacheClusterIds
    * items [String](#string)
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName **required**

### BatchStopUpdateActionMessage
* BatchStopUpdateActionMessage `object`
  * CacheClusterIds
    * items [String](#string)
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName **required**

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### CacheCluster
* CacheCluster `object`: Contains all of the attributes of a specific cluster.
  * ARN
  * AtRestEncryptionEnabled
  * AuthTokenEnabled
  * AuthTokenLastModifiedDate
  * AutoMinorVersionUpgrade
  * CacheClusterCreateTime
  * CacheClusterId
  * CacheClusterStatus
  * CacheNodeType
  * CacheNodes
    * items
      * CacheNodeCreateTime
      * CacheNodeId
      * CacheNodeStatus
      * CustomerAvailabilityZone
      * CustomerOutpostArn
      * Endpoint
        * Address
        * Port
      * ParameterGroupStatus
      * SourceCacheNodeId
  * CacheParameterGroup
    * CacheNodeIdsToReboot
      * items
    * CacheParameterGroupName
    * ParameterApplyStatus
  * CacheSecurityGroups
    * items
      * CacheSecurityGroupName
      * Status
  * CacheSubnetGroupName
  * ClientDownloadLandingPage
  * ConfigurationEndpoint
    * Address
    * Port
  * Engine
  * EngineVersion
  * NotificationConfiguration
    * TopicArn
    * TopicStatus
  * NumCacheNodes
  * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
  * PreferredAvailabilityZone
  * PreferredMaintenanceWindow
  * PreferredOutpostArn
  * ReplicationGroupId
  * SecurityGroups
    * items [SecurityGroupMembership](#securitygroupmembership)
  * SnapshotRetentionLimit
  * SnapshotWindow
  * TransitEncryptionEnabled

### CacheClusterAlreadyExistsFault


### CacheClusterIdList
* CacheClusterIdList `array`
  * items [String](#string)

### CacheClusterList
* CacheClusterList `array`
  * items
    * ARN
    * AtRestEncryptionEnabled
    * AuthTokenEnabled
    * AuthTokenLastModifiedDate
    * AutoMinorVersionUpgrade
    * CacheClusterCreateTime
    * CacheClusterId
    * CacheClusterStatus
    * CacheNodeType
    * CacheNodes
      * items
        * CacheNodeCreateTime
        * CacheNodeId
        * CacheNodeStatus
        * CustomerAvailabilityZone
        * CustomerOutpostArn
        * Endpoint
          * Address
          * Port
        * ParameterGroupStatus
        * SourceCacheNodeId
    * CacheParameterGroup
      * CacheNodeIdsToReboot
        * items
      * CacheParameterGroupName
      * ParameterApplyStatus
    * CacheSecurityGroups
      * items
        * CacheSecurityGroupName
        * Status
    * CacheSubnetGroupName
    * ClientDownloadLandingPage
    * ConfigurationEndpoint
      * Address
      * Port
    * Engine
    * EngineVersion
    * NotificationConfiguration
      * TopicArn
      * TopicStatus
    * NumCacheNodes
    * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
    * PreferredAvailabilityZone
    * PreferredMaintenanceWindow
    * PreferredOutpostArn
    * ReplicationGroupId
    * SecurityGroups
      * items [SecurityGroupMembership](#securitygroupmembership)
    * SnapshotRetentionLimit
    * SnapshotWindow
    * TransitEncryptionEnabled

### CacheClusterMessage
* CacheClusterMessage `object`: Represents the output of a <code>DescribeCacheClusters</code> operation.
  * CacheClusters
    * items
      * ARN
      * AtRestEncryptionEnabled
      * AuthTokenEnabled
      * AuthTokenLastModifiedDate
      * AutoMinorVersionUpgrade
      * CacheClusterCreateTime
      * CacheClusterId
      * CacheClusterStatus
      * CacheNodeType
      * CacheNodes
        * items
          * CacheNodeCreateTime
          * CacheNodeId
          * CacheNodeStatus
          * CustomerAvailabilityZone
          * CustomerOutpostArn
          * Endpoint
          * ParameterGroupStatus
          * SourceCacheNodeId
      * CacheParameterGroup
        * CacheNodeIdsToReboot
          * items
        * CacheParameterGroupName
        * ParameterApplyStatus
      * CacheSecurityGroups
        * items
          * CacheSecurityGroupName
          * Status
      * CacheSubnetGroupName
      * ClientDownloadLandingPage
      * ConfigurationEndpoint
        * Address
        * Port
      * Engine
      * EngineVersion
      * NotificationConfiguration
        * TopicArn
        * TopicStatus
      * NumCacheNodes
      * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
      * PreferredAvailabilityZone
      * PreferredMaintenanceWindow
      * PreferredOutpostArn
      * ReplicationGroupId
      * SecurityGroups
        * items [SecurityGroupMembership](#securitygroupmembership)
      * SnapshotRetentionLimit
      * SnapshotWindow
      * TransitEncryptionEnabled
  * Marker

### CacheClusterNotFoundFault


### CacheEngineVersion
* CacheEngineVersion `object`: Provides all of the details about a particular cache engine version.
  * CacheEngineDescription
  * CacheEngineVersionDescription
  * CacheParameterGroupFamily
  * Engine
  * EngineVersion

### CacheEngineVersionList
* CacheEngineVersionList `array`
  * items
    * CacheEngineDescription
    * CacheEngineVersionDescription
    * CacheParameterGroupFamily
    * Engine
    * EngineVersion

### CacheEngineVersionMessage
* CacheEngineVersionMessage `object`: Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
  * CacheEngineVersions
    * items
      * CacheEngineDescription
      * CacheEngineVersionDescription
      * CacheParameterGroupFamily
      * Engine
      * EngineVersion
  * Marker

### CacheNode
* CacheNode `object`: <p>Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster's protocol-compliant caching software - either Memcached or Redis.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>At this time, M6g node types are available in the following regions: us-east-1, us-west-2, us-east-2, eu-central-1, eu-west-1 and ap-northeast-1.</p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>At this time, R6g node types are available in the following regions: us-east-1, us-west-2, us-east-2, eu-central-1, eu-west-1 and ap-northeast-1.</p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
  * CacheNodeCreateTime
  * CacheNodeId
  * CacheNodeStatus
  * CustomerAvailabilityZone
  * CustomerOutpostArn
  * Endpoint
    * Address
    * Port
  * ParameterGroupStatus
  * SourceCacheNodeId

### CacheNodeIdsList
* CacheNodeIdsList `array`
  * items

### CacheNodeList
* CacheNodeList `array`
  * items
    * CacheNodeCreateTime
    * CacheNodeId
    * CacheNodeStatus
    * CustomerAvailabilityZone
    * CustomerOutpostArn
    * Endpoint
      * Address
      * Port
    * ParameterGroupStatus
    * SourceCacheNodeId

### CacheNodeTypeSpecificParameter
* CacheNodeTypeSpecificParameter `object`: A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
  * AllowedValues
  * CacheNodeTypeSpecificValues
    * items
      * CacheNodeType
      * Value
  * ChangeType
  * DataType
  * Description
  * IsModifiable
  * MinimumEngineVersion
  * ParameterName
  * Source

### CacheNodeTypeSpecificParametersList
* CacheNodeTypeSpecificParametersList `array`
  * items
    * AllowedValues
    * CacheNodeTypeSpecificValues
      * items
        * CacheNodeType
        * Value
    * ChangeType
    * DataType
    * Description
    * IsModifiable
    * MinimumEngineVersion
    * ParameterName
    * Source

### CacheNodeTypeSpecificValue
* CacheNodeTypeSpecificValue `object`: A value that applies only to a certain cache node type.
  * CacheNodeType
  * Value

### CacheNodeTypeSpecificValueList
* CacheNodeTypeSpecificValueList `array`
  * items
    * CacheNodeType
    * Value

### CacheNodeUpdateStatus
* CacheNodeUpdateStatus `object`: The status of the service update on the cache node
  * CacheNodeId
  * NodeDeletionDate
  * NodeUpdateEndDate
  * NodeUpdateInitiatedBy
  * NodeUpdateInitiatedDate
  * NodeUpdateStartDate
  * NodeUpdateStatus
  * NodeUpdateStatusModifiedDate

### CacheNodeUpdateStatusList
* CacheNodeUpdateStatusList `array`
  * items
    * CacheNodeId
    * NodeDeletionDate
    * NodeUpdateEndDate
    * NodeUpdateInitiatedBy
    * NodeUpdateInitiatedDate
    * NodeUpdateStartDate
    * NodeUpdateStatus
    * NodeUpdateStatusModifiedDate

### CacheParameterGroup
* CacheParameterGroup `object`: Represents the output of a <code>CreateCacheParameterGroup</code> operation.
  * ARN
  * CacheParameterGroupFamily
  * CacheParameterGroupName
  * Description
  * IsGlobal

### CacheParameterGroupAlreadyExistsFault


### CacheParameterGroupDetails
* CacheParameterGroupDetails `object`: Represents the output of a <code>DescribeCacheParameters</code> operation.
  * CacheNodeTypeSpecificParameters
    * items
      * AllowedValues
      * CacheNodeTypeSpecificValues
        * items
          * CacheNodeType
          * Value
      * ChangeType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * Source
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ChangeType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### CacheParameterGroupList
* CacheParameterGroupList `array`
  * items
    * ARN
    * CacheParameterGroupFamily
    * CacheParameterGroupName
    * Description
    * IsGlobal

### CacheParameterGroupNameMessage
* CacheParameterGroupNameMessage `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
  * CacheParameterGroupName

### CacheParameterGroupNotFoundFault


### CacheParameterGroupQuotaExceededFault


### CacheParameterGroupStatus
* CacheParameterGroupStatus `object`: Status of the cache parameter group.
  * CacheNodeIdsToReboot
    * items
  * CacheParameterGroupName
  * ParameterApplyStatus

### CacheParameterGroupsMessage
* CacheParameterGroupsMessage `object`: Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
  * CacheParameterGroups
    * items
      * ARN
      * CacheParameterGroupFamily
      * CacheParameterGroupName
      * Description
      * IsGlobal
  * Marker

### CacheSecurityGroup
* CacheSecurityGroup `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
  * ARN
  * CacheSecurityGroupName
  * Description
  * EC2SecurityGroups
    * items
      * EC2SecurityGroupName
      * EC2SecurityGroupOwnerId
      * Status
  * OwnerId

### CacheSecurityGroupAlreadyExistsFault


### CacheSecurityGroupMembership
* CacheSecurityGroupMembership `object`: Represents a cluster's status within a particular cache security group.
  * CacheSecurityGroupName
  * Status

### CacheSecurityGroupMembershipList
* CacheSecurityGroupMembershipList `array`
  * items
    * CacheSecurityGroupName
    * Status

### CacheSecurityGroupMessage
* CacheSecurityGroupMessage `object`: Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
  * CacheSecurityGroups
    * items
      * ARN
      * CacheSecurityGroupName
      * Description
      * EC2SecurityGroups
        * items
          * EC2SecurityGroupName
          * EC2SecurityGroupOwnerId
          * Status
      * OwnerId
  * Marker

### CacheSecurityGroupNameList
* CacheSecurityGroupNameList `array`
  * items

### CacheSecurityGroupNotFoundFault


### CacheSecurityGroupQuotaExceededFault


### CacheSecurityGroups
* CacheSecurityGroups `array`
  * items
    * ARN
    * CacheSecurityGroupName
    * Description
    * EC2SecurityGroups
      * items
        * EC2SecurityGroupName
        * EC2SecurityGroupOwnerId
        * Status
    * OwnerId

### CacheSubnetGroup
* CacheSubnetGroup `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
  * ARN
  * CacheSubnetGroupDescription
  * CacheSubnetGroupName
  * Subnets
    * items
      * SubnetAvailabilityZone
        * Name
      * SubnetIdentifier
      * SubnetOutpost
        * SubnetOutpostArn
  * VpcId

### CacheSubnetGroupAlreadyExistsFault


### CacheSubnetGroupInUse


### CacheSubnetGroupMessage
* CacheSubnetGroupMessage `object`: Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
  * CacheSubnetGroups
    * items
      * ARN
      * CacheSubnetGroupDescription
      * CacheSubnetGroupName
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetOutpost
      * VpcId
  * Marker

### CacheSubnetGroupNotFoundFault


### CacheSubnetGroupQuotaExceededFault


### CacheSubnetGroups
* CacheSubnetGroups `array`
  * items
    * ARN
    * CacheSubnetGroupDescription
    * CacheSubnetGroupName
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
        * SubnetIdentifier
        * SubnetOutpost
          * SubnetOutpostArn
    * VpcId

### CacheSubnetQuotaExceededFault


### ChangeType
* ChangeType `string` (values: immediate, requires-reboot)

### ClusterIdList
* ClusterIdList `array`
  * items

### ClusterQuotaForCustomerExceededFault


### CompleteMigrationMessage
* CompleteMigrationMessage `object`
  * Force
  * ReplicationGroupId **required**

### CompleteMigrationResponse
* CompleteMigrationResponse `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### ConfigureShard
* ConfigureShard `object`: Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. 
  * NewReplicaCount **required**
  * NodeGroupId **required**
  * PreferredAvailabilityZones
    * items
  * PreferredOutpostArns
    * items

### CopySnapshotMessage
* CopySnapshotMessage `object`: Represents the input of a <code>CopySnapshotMessage</code> operation.
  * KmsKeyId
  * SourceSnapshotName **required**
  * TargetBucket
  * TargetSnapshotName **required**

### CopySnapshotResult
* CopySnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CreateCacheClusterMessage
* CreateCacheClusterMessage `object`: Represents the input of a CreateCacheCluster operation.
  * AZMode
  * AuthToken
  * AutoMinorVersionUpgrade
  * CacheClusterId **required**
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * CacheSubnetGroupName
  * Engine
  * EngineVersion
  * NotificationTopicArn
  * NumCacheNodes
  * OutpostMode
  * Port
  * PreferredAvailabilityZone
  * PreferredAvailabilityZones
    * items
  * PreferredMaintenanceWindow
  * PreferredOutpostArn
  * PreferredOutpostArns
    * items
  * ReplicationGroupId
  * SecurityGroupIds
    * items
  * SnapshotArns
    * items
  * SnapshotName
  * SnapshotRetentionLimit
  * SnapshotWindow
  * Tags
    * items
      * Key
      * Value

### CreateCacheClusterResult
* CreateCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### CreateCacheParameterGroupMessage
* CreateCacheParameterGroupMessage `object`: Represents the input of a <code>CreateCacheParameterGroup</code> operation.
  * CacheParameterGroupFamily **required**
  * CacheParameterGroupName **required**
  * Description **required**

### CreateCacheParameterGroupResult
* CreateCacheParameterGroupResult `object`
  * CacheParameterGroup [CacheParameterGroup](#cacheparametergroup)

### CreateCacheSecurityGroupMessage
* CreateCacheSecurityGroupMessage `object`: Represents the input of a <code>CreateCacheSecurityGroup</code> operation.
  * CacheSecurityGroupName **required**
  * Description **required**

### CreateCacheSecurityGroupResult
* CreateCacheSecurityGroupResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### CreateCacheSubnetGroupMessage
* CreateCacheSubnetGroupMessage `object`: Represents the input of a <code>CreateCacheSubnetGroup</code> operation.
  * CacheSubnetGroupDescription **required**
  * CacheSubnetGroupName **required**
  * SubnetIds **required**
    * items

### CreateCacheSubnetGroupResult
* CreateCacheSubnetGroupResult `object`
  * CacheSubnetGroup [CacheSubnetGroup](#cachesubnetgroup)

### CreateGlobalReplicationGroupMessage
* CreateGlobalReplicationGroupMessage `object`
  * GlobalReplicationGroupDescription
  * GlobalReplicationGroupIdSuffix **required**
  * PrimaryReplicationGroupId **required**

### CreateGlobalReplicationGroupResult
* CreateGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### CreateReplicationGroupMessage
* CreateReplicationGroupMessage `object`: Represents the input of a <code>CreateReplicationGroup</code> operation.
  * AtRestEncryptionEnabled
  * AuthToken
  * AutoMinorVersionUpgrade
  * AutomaticFailoverEnabled
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * CacheSubnetGroupName
  * Engine
  * EngineVersion
  * GlobalReplicationGroupId
  * KmsKeyId
  * MultiAZEnabled
  * NodeGroupConfiguration
    * items
      * NodeGroupId
      * PrimaryAvailabilityZone
      * PrimaryOutpostArn
      * ReplicaAvailabilityZones
        * items
      * ReplicaCount
      * ReplicaOutpostArns
        * items
      * Slots
  * NotificationTopicArn
  * NumCacheClusters
  * NumNodeGroups
  * Port
  * PreferredCacheClusterAZs
    * items
  * PreferredMaintenanceWindow
  * PrimaryClusterId
  * ReplicasPerNodeGroup
  * ReplicationGroupDescription **required**
  * ReplicationGroupId **required**
  * SecurityGroupIds
    * items
  * SnapshotArns
    * items
  * SnapshotName
  * SnapshotRetentionLimit
  * SnapshotWindow
  * Tags
    * items
      * Key
      * Value
  * TransitEncryptionEnabled
  * UserGroupIds
    * items [UserGroupId](#usergroupid)

### CreateReplicationGroupResult
* CreateReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### CreateSnapshotMessage
* CreateSnapshotMessage `object`: Represents the input of a <code>CreateSnapshot</code> operation.
  * CacheClusterId
  * KmsKeyId
  * ReplicationGroupId
  * SnapshotName **required**

### CreateSnapshotResult
* CreateSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CreateUserGroupMessage
* CreateUserGroupMessage `object`
  * Engine **required**
  * UserGroupId **required**
  * UserIds
    * items [UserId](#userid)

### CreateUserMessage
* CreateUserMessage `object`
  * AccessString **required**
  * Engine **required**
  * NoPasswordRequired
  * Passwords
    * items [String](#string)
  * UserId **required**
  * UserName **required**

### CustomerNodeEndpoint
* CustomerNodeEndpoint `object`: The endpoint from which data should be migrated.
  * Address
  * Port

### CustomerNodeEndpointList
* CustomerNodeEndpointList `array`
  * items [CustomerNodeEndpoint](#customernodeendpoint)

### DecreaseNodeGroupsInGlobalReplicationGroupMessage
* DecreaseNodeGroupsInGlobalReplicationGroupMessage `object`
  * ApplyImmediately **required**
  * GlobalNodeGroupsToRemove
    * items
  * GlobalNodeGroupsToRetain
    * items
  * GlobalReplicationGroupId **required**
  * NodeGroupCount **required**

### DecreaseNodeGroupsInGlobalReplicationGroupResult
* DecreaseNodeGroupsInGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### DecreaseReplicaCountMessage
* DecreaseReplicaCountMessage `object`
  * ApplyImmediately **required**
  * NewReplicaCount
  * ReplicaConfiguration
    * items
      * NewReplicaCount **required**
      * NodeGroupId **required**
      * PreferredAvailabilityZones
        * items
      * PreferredOutpostArns
        * items
  * ReplicasToRemove
    * items [String](#string)
  * ReplicationGroupId **required**

### DecreaseReplicaCountResult
* DecreaseReplicaCountResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### DefaultUserAssociatedToUserGroupFault


### DefaultUserRequired


### DeleteCacheClusterMessage
* DeleteCacheClusterMessage `object`: Represents the input of a <code>DeleteCacheCluster</code> operation.
  * CacheClusterId **required**
  * FinalSnapshotIdentifier

### DeleteCacheClusterResult
* DeleteCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### DeleteCacheParameterGroupMessage
* DeleteCacheParameterGroupMessage `object`: Represents the input of a <code>DeleteCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required**

### DeleteCacheSecurityGroupMessage
* DeleteCacheSecurityGroupMessage `object`: Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.
  * CacheSecurityGroupName **required**

### DeleteCacheSubnetGroupMessage
* DeleteCacheSubnetGroupMessage `object`: Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.
  * CacheSubnetGroupName **required**

### DeleteGlobalReplicationGroupMessage
* DeleteGlobalReplicationGroupMessage `object`
  * GlobalReplicationGroupId **required**
  * RetainPrimaryReplicationGroup **required**

### DeleteGlobalReplicationGroupResult
* DeleteGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### DeleteReplicationGroupMessage
* DeleteReplicationGroupMessage `object`: Represents the input of a <code>DeleteReplicationGroup</code> operation.
  * FinalSnapshotIdentifier
  * ReplicationGroupId **required**
  * RetainPrimaryCluster

### DeleteReplicationGroupResult
* DeleteReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### DeleteSnapshotMessage
* DeleteSnapshotMessage `object`: Represents the input of a <code>DeleteSnapshot</code> operation.
  * SnapshotName **required**

### DeleteSnapshotResult
* DeleteSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### DeleteUserGroupMessage
* DeleteUserGroupMessage `object`
  * UserGroupId **required**

### DeleteUserMessage
* DeleteUserMessage `object`
  * UserId **required**

### DescribeCacheClustersMessage
* DescribeCacheClustersMessage `object`: Represents the input of a <code>DescribeCacheClusters</code> operation.
  * CacheClusterId
  * Marker
  * MaxRecords
  * ShowCacheClustersNotInReplicationGroups
  * ShowCacheNodeInfo

### DescribeCacheEngineVersionsMessage
* DescribeCacheEngineVersionsMessage `object`: Represents the input of a <code>DescribeCacheEngineVersions</code> operation.
  * CacheParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Marker
  * MaxRecords

### DescribeCacheParameterGroupsMessage
* DescribeCacheParameterGroupsMessage `object`: Represents the input of a <code>DescribeCacheParameterGroups</code> operation.
  * CacheParameterGroupName
  * Marker
  * MaxRecords

### DescribeCacheParametersMessage
* DescribeCacheParametersMessage `object`: Represents the input of a <code>DescribeCacheParameters</code> operation.
  * CacheParameterGroupName **required**
  * Marker
  * MaxRecords
  * Source

### DescribeCacheSecurityGroupsMessage
* DescribeCacheSecurityGroupsMessage `object`: Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.
  * CacheSecurityGroupName
  * Marker
  * MaxRecords

### DescribeCacheSubnetGroupsMessage
* DescribeCacheSubnetGroupsMessage `object`: Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.
  * CacheSubnetGroupName
  * Marker
  * MaxRecords

### DescribeEngineDefaultParametersMessage
* DescribeEngineDefaultParametersMessage `object`: Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.
  * CacheParameterGroupFamily **required**
  * Marker
  * MaxRecords

### DescribeEngineDefaultParametersResult
* DescribeEngineDefaultParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEventsMessage
* DescribeEventsMessage `object`: Represents the input of a <code>DescribeEvents</code> operation.
  * Duration
  * EndTime
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

### DescribeGlobalReplicationGroupsMessage
* DescribeGlobalReplicationGroupsMessage `object`
  * GlobalReplicationGroupId
  * Marker
  * MaxRecords
  * ShowMemberInfo

### DescribeGlobalReplicationGroupsResult
* DescribeGlobalReplicationGroupsResult `object`
  * GlobalReplicationGroups
    * items
      * ARN
      * AtRestEncryptionEnabled
      * AuthTokenEnabled
      * CacheNodeType
      * ClusterEnabled
      * Engine
      * EngineVersion
      * GlobalNodeGroups
        * items
          * GlobalNodeGroupId
          * Slots
      * GlobalReplicationGroupDescription
      * GlobalReplicationGroupId
      * Members
        * items
          * AutomaticFailover
          * ReplicationGroupId
          * ReplicationGroupRegion
          * Role
          * Status
      * Status
      * TransitEncryptionEnabled
  * Marker

### DescribeReplicationGroupsMessage
* DescribeReplicationGroupsMessage `object`: Represents the input of a <code>DescribeReplicationGroups</code> operation.
  * Marker
  * MaxRecords
  * ReplicationGroupId

### DescribeReservedCacheNodesMessage
* DescribeReservedCacheNodesMessage `object`: Represents the input of a <code>DescribeReservedCacheNodes</code> operation.
  * CacheNodeType
  * Duration
  * Marker
  * MaxRecords
  * OfferingType
  * ProductDescription
  * ReservedCacheNodeId
  * ReservedCacheNodesOfferingId

### DescribeReservedCacheNodesOfferingsMessage
* DescribeReservedCacheNodesOfferingsMessage `object`: Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.
  * CacheNodeType
  * Duration
  * Marker
  * MaxRecords
  * OfferingType
  * ProductDescription
  * ReservedCacheNodesOfferingId

### DescribeServiceUpdatesMessage
* DescribeServiceUpdatesMessage `object`
  * Marker
  * MaxRecords
  * ServiceUpdateName
  * ServiceUpdateStatus
    * items [ServiceUpdateStatus](#serviceupdatestatus)

### DescribeSnapshotsListMessage
* DescribeSnapshotsListMessage `object`: Represents the output of a <code>DescribeSnapshots</code> operation.
  * Marker
  * Snapshots
    * items
      * ARN
      * AutoMinorVersionUpgrade
      * AutomaticFailover
      * CacheClusterCreateTime
      * CacheClusterId
      * CacheNodeType
      * CacheParameterGroupName
      * CacheSubnetGroupName
      * Engine
      * EngineVersion
      * KmsKeyId
      * NodeSnapshots
        * items
          * CacheClusterId
          * CacheNodeCreateTime
          * CacheNodeId
          * CacheSize
          * NodeGroupConfiguration
          * NodeGroupId
          * SnapshotCreateTime
      * NumCacheNodes
      * NumNodeGroups
      * Port
      * PreferredAvailabilityZone
      * PreferredMaintenanceWindow
      * PreferredOutpostArn
      * ReplicationGroupDescription
      * ReplicationGroupId
      * SnapshotName
      * SnapshotRetentionLimit
      * SnapshotSource
      * SnapshotStatus
      * SnapshotWindow
      * TopicArn
      * VpcId

### DescribeSnapshotsMessage
* DescribeSnapshotsMessage `object`: Represents the input of a <code>DescribeSnapshotsMessage</code> operation.
  * CacheClusterId
  * Marker
  * MaxRecords
  * ReplicationGroupId
  * ShowNodeGroupConfig
  * SnapshotName
  * SnapshotSource

### DescribeUpdateActionsMessage
* DescribeUpdateActionsMessage `object`
  * CacheClusterIds
    * items [String](#string)
  * Engine
  * Marker
  * MaxRecords
  * ReplicationGroupIds
    * items [String](#string)
  * ServiceUpdateName
  * ServiceUpdateStatus
    * items [ServiceUpdateStatus](#serviceupdatestatus)
  * ServiceUpdateTimeRange
    * EndTime
    * StartTime
  * ShowNodeLevelUpdateStatus
  * UpdateActionStatus
    * items [UpdateActionStatus](#updateactionstatus)

### DescribeUserGroupsMessage
* DescribeUserGroupsMessage `object`
  * Marker
  * MaxRecords
  * UserGroupId

### DescribeUserGroupsResult
* DescribeUserGroupsResult `object`
  * Marker
  * UserGroups
    * items [UserGroup](#usergroup)

### DescribeUsersMessage
* DescribeUsersMessage `object`
  * Engine
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * UserId

### DescribeUsersResult
* DescribeUsersResult `object`
  * Marker
  * Users
    * items [User](#user)

### DisassociateGlobalReplicationGroupMessage
* DisassociateGlobalReplicationGroupMessage `object`
  * GlobalReplicationGroupId **required**
  * ReplicationGroupId **required**
  * ReplicationGroupRegion **required**

### DisassociateGlobalReplicationGroupResult
* DisassociateGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### Double
* Double `number`

### DuplicateUserNameFault


### EC2SecurityGroup
* EC2SecurityGroup `object`: Provides ownership and status information for an Amazon EC2 security group.
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId
  * Status

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items
    * EC2SecurityGroupName
    * EC2SecurityGroupOwnerId
    * Status

### Endpoint
* Endpoint `object`: Represents the information required for client programs to connect to a cache node.
  * Address
  * Port

### EngineDefaults
* EngineDefaults `object`: Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
  * CacheNodeTypeSpecificParameters
    * items
      * AllowedValues
      * CacheNodeTypeSpecificValues
        * items
          * CacheNodeType
          * Value
      * ChangeType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * Source
  * CacheParameterGroupFamily
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ChangeType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### EngineType
* EngineType `string`

### Event
* Event `object`: Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
  * Date
  * Message
  * SourceIdentifier
  * SourceType

### EventList
* EventList `array`
  * items
    * Date
    * Message
    * SourceIdentifier
    * SourceType

### EventsMessage
* EventsMessage `object`: Represents the output of a <code>DescribeEvents</code> operation.
  * Events
    * items
      * Date
      * Message
      * SourceIdentifier
      * SourceType
  * Marker

### FailoverGlobalReplicationGroupMessage
* FailoverGlobalReplicationGroupMessage `object`
  * GlobalReplicationGroupId **required**
  * PrimaryRegion **required**
  * PrimaryReplicationGroupId **required**

### FailoverGlobalReplicationGroupResult
* FailoverGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### Filter
* Filter `object`: Used to streamline results of a search based on the property being filtered.
  * Name **required**
  * Values **required**
    * items [FilterValue](#filtervalue)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterName
* FilterName `string`

### FilterValue
* FilterValue `string`

### FilterValueList
* FilterValueList `array`
  * items [FilterValue](#filtervalue)

### GlobalNodeGroup
* GlobalNodeGroup `object`: Indicates the slot configuration and global identifier for a slice group.
  * GlobalNodeGroupId
  * Slots

### GlobalNodeGroupIdList
* GlobalNodeGroupIdList `array`
  * items

### GlobalNodeGroupList
* GlobalNodeGroupList `array`
  * items
    * GlobalNodeGroupId
    * Slots

### GlobalReplicationGroup
* GlobalReplicationGroup `object`: <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
  * ARN
  * AtRestEncryptionEnabled
  * AuthTokenEnabled
  * CacheNodeType
  * ClusterEnabled
  * Engine
  * EngineVersion
  * GlobalNodeGroups
    * items
      * GlobalNodeGroupId
      * Slots
  * GlobalReplicationGroupDescription
  * GlobalReplicationGroupId
  * Members
    * items
      * AutomaticFailover
      * ReplicationGroupId
      * ReplicationGroupRegion
      * Role
      * Status
  * Status
  * TransitEncryptionEnabled

### GlobalReplicationGroupAlreadyExistsFault


### GlobalReplicationGroupInfo
* GlobalReplicationGroupInfo `object`: The name of the Global Datastore and role of this replication group in the Global Datastore.
  * GlobalReplicationGroupId
  * GlobalReplicationGroupMemberRole

### GlobalReplicationGroupList
* GlobalReplicationGroupList `array`
  * items
    * ARN
    * AtRestEncryptionEnabled
    * AuthTokenEnabled
    * CacheNodeType
    * ClusterEnabled
    * Engine
    * EngineVersion
    * GlobalNodeGroups
      * items
        * GlobalNodeGroupId
        * Slots
    * GlobalReplicationGroupDescription
    * GlobalReplicationGroupId
    * Members
      * items
        * AutomaticFailover
        * ReplicationGroupId
        * ReplicationGroupRegion
        * Role
        * Status
    * Status
    * TransitEncryptionEnabled

### GlobalReplicationGroupMember
* GlobalReplicationGroupMember `object`: A member of a Global Datastore. It contains the Replication Group Id, the AWS region and the role of the replication group. 
  * AutomaticFailover
  * ReplicationGroupId
  * ReplicationGroupRegion
  * Role
  * Status

### GlobalReplicationGroupMemberList
* GlobalReplicationGroupMemberList `array`
  * items
    * AutomaticFailover
    * ReplicationGroupId
    * ReplicationGroupRegion
    * Role
    * Status

### GlobalReplicationGroupNotFoundFault


### IncreaseNodeGroupsInGlobalReplicationGroupMessage
* IncreaseNodeGroupsInGlobalReplicationGroupMessage `object`
  * ApplyImmediately **required**
  * GlobalReplicationGroupId **required**
  * NodeGroupCount **required**
  * RegionalConfigurations
    * items
      * ReplicationGroupId **required**
      * ReplicationGroupRegion **required**
      * ReshardingConfiguration **required**
        * items
          * NodeGroupId
          * PreferredAvailabilityZones

### IncreaseNodeGroupsInGlobalReplicationGroupResult
* IncreaseNodeGroupsInGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### IncreaseReplicaCountMessage
* IncreaseReplicaCountMessage `object`
  * ApplyImmediately **required**
  * NewReplicaCount
  * ReplicaConfiguration
    * items
      * NewReplicaCount **required**
      * NodeGroupId **required**
      * PreferredAvailabilityZones
        * items
      * PreferredOutpostArns
        * items
  * ReplicationGroupId **required**

### IncreaseReplicaCountResult
* IncreaseReplicaCountResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### InsufficientCacheClusterCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidARNFault


### InvalidCacheClusterStateFault


### InvalidCacheParameterGroupStateFault


### InvalidCacheSecurityGroupStateFault


### InvalidGlobalReplicationGroupStateFault


### InvalidKMSKeyFault


### InvalidParameterCombinationException


### InvalidParameterValueException


### InvalidReplicationGroupStateFault


### InvalidSnapshotStateFault


### InvalidSubnet


### InvalidUserGroupStateFault


### InvalidUserStateFault


### InvalidVPCNetworkStateFault


### KeyList
* KeyList `array`
  * items [String](#string)

### ListAllowedNodeTypeModificationsMessage
* ListAllowedNodeTypeModificationsMessage `object`: The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.
  * CacheClusterId
  * ReplicationGroupId

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: The input parameters for the <code>ListTagsForResource</code> operation.
  * ResourceName **required**

### ModifyCacheClusterMessage
* ModifyCacheClusterMessage `object`: Represents the input of a <code>ModifyCacheCluster</code> operation.
  * AZMode
  * ApplyImmediately
  * AuthToken
  * AuthTokenUpdateStrategy
  * AutoMinorVersionUpgrade
  * CacheClusterId **required**
  * CacheNodeIdsToRemove
    * items
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * EngineVersion
  * NewAvailabilityZones
    * items
  * NotificationTopicArn
  * NotificationTopicStatus
  * NumCacheNodes
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items
  * SnapshotRetentionLimit
  * SnapshotWindow

### ModifyCacheClusterResult
* ModifyCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### ModifyCacheParameterGroupMessage
* ModifyCacheParameterGroupMessage `object`: Represents the input of a <code>ModifyCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required**
  * ParameterNameValues **required**
    * items
      * ParameterName
      * ParameterValue

### ModifyCacheSubnetGroupMessage
* ModifyCacheSubnetGroupMessage `object`: Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.
  * CacheSubnetGroupDescription
  * CacheSubnetGroupName **required**
  * SubnetIds
    * items

### ModifyCacheSubnetGroupResult
* ModifyCacheSubnetGroupResult `object`
  * CacheSubnetGroup [CacheSubnetGroup](#cachesubnetgroup)

### ModifyGlobalReplicationGroupMessage
* ModifyGlobalReplicationGroupMessage `object`
  * ApplyImmediately **required**
  * AutomaticFailoverEnabled
  * CacheNodeType
  * EngineVersion
  * GlobalReplicationGroupDescription
  * GlobalReplicationGroupId **required**

### ModifyGlobalReplicationGroupResult
* ModifyGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### ModifyReplicationGroupMessage
* ModifyReplicationGroupMessage `object`: Represents the input of a <code>ModifyReplicationGroups</code> operation.
  * ApplyImmediately
  * AuthToken
  * AuthTokenUpdateStrategy
  * AutoMinorVersionUpgrade
  * AutomaticFailoverEnabled
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSecurityGroupNames
    * items
  * EngineVersion
  * MultiAZEnabled
  * NodeGroupId
  * NotificationTopicArn
  * NotificationTopicStatus
  * PreferredMaintenanceWindow
  * PrimaryClusterId
  * RemoveUserGroups
  * ReplicationGroupDescription
  * ReplicationGroupId **required**
  * SecurityGroupIds
    * items
  * SnapshotRetentionLimit
  * SnapshotWindow
  * SnapshottingClusterId
  * UserGroupIdsToAdd
    * items [UserGroupId](#usergroupid)
  * UserGroupIdsToRemove
    * items [UserGroupId](#usergroupid)

### ModifyReplicationGroupResult
* ModifyReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### ModifyReplicationGroupShardConfigurationMessage
* ModifyReplicationGroupShardConfigurationMessage `object`: Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.
  * ApplyImmediately **required**
  * NodeGroupCount **required**
  * NodeGroupsToRemove
    * items
  * NodeGroupsToRetain
    * items
  * ReplicationGroupId **required**
  * ReshardingConfiguration
    * items
      * NodeGroupId
      * PreferredAvailabilityZones
        * items

### ModifyReplicationGroupShardConfigurationResult
* ModifyReplicationGroupShardConfigurationResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### ModifyUserGroupMessage
* ModifyUserGroupMessage `object`
  * UserGroupId **required**
  * UserIdsToAdd
    * items [UserId](#userid)
  * UserIdsToRemove
    * items [UserId](#userid)

### ModifyUserMessage
* ModifyUserMessage `object`
  * AccessString
  * AppendAccessString
  * NoPasswordRequired
  * Passwords
    * items [String](#string)
  * UserId **required**

### MultiAZStatus
* MultiAZStatus `string` (values: enabled, disabled)

### NoOperationFault


### NodeGroup
* NodeGroup `object`: Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
  * NodeGroupId
  * NodeGroupMembers
    * items
      * CacheClusterId
      * CacheNodeId
      * CurrentRole
      * PreferredAvailabilityZone
      * PreferredOutpostArn
      * ReadEndpoint
        * Address
        * Port
  * PrimaryEndpoint
    * Address
    * Port
  * ReaderEndpoint
    * Address
    * Port
  * Slots
  * Status

### NodeGroupConfiguration
* NodeGroupConfiguration `object`: Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
  * NodeGroupId
  * PrimaryAvailabilityZone
  * PrimaryOutpostArn
  * ReplicaAvailabilityZones
    * items
  * ReplicaCount
  * ReplicaOutpostArns
    * items
  * Slots

### NodeGroupConfigurationList
* NodeGroupConfigurationList `array`
  * items
    * NodeGroupId
    * PrimaryAvailabilityZone
    * PrimaryOutpostArn
    * ReplicaAvailabilityZones
      * items
    * ReplicaCount
    * ReplicaOutpostArns
      * items
    * Slots

### NodeGroupList
* NodeGroupList `array`
  * items
    * NodeGroupId
    * NodeGroupMembers
      * items
        * CacheClusterId
        * CacheNodeId
        * CurrentRole
        * PreferredAvailabilityZone
        * PreferredOutpostArn
        * ReadEndpoint
          * Address
          * Port
    * PrimaryEndpoint
      * Address
      * Port
    * ReaderEndpoint
      * Address
      * Port
    * Slots
    * Status

### NodeGroupMember
* NodeGroupMember `object`: Represents a single node within a node group (shard).
  * CacheClusterId
  * CacheNodeId
  * CurrentRole
  * PreferredAvailabilityZone
  * PreferredOutpostArn
  * ReadEndpoint
    * Address
    * Port

### NodeGroupMemberList
* NodeGroupMemberList `array`
  * items
    * CacheClusterId
    * CacheNodeId
    * CurrentRole
    * PreferredAvailabilityZone
    * PreferredOutpostArn
    * ReadEndpoint
      * Address
      * Port

### NodeGroupMemberUpdateStatus
* NodeGroupMemberUpdateStatus `object`: The status of the service update on the node group member 
  * CacheClusterId
  * CacheNodeId
  * NodeDeletionDate
  * NodeUpdateEndDate
  * NodeUpdateInitiatedBy
  * NodeUpdateInitiatedDate
  * NodeUpdateStartDate
  * NodeUpdateStatus
  * NodeUpdateStatusModifiedDate

### NodeGroupMemberUpdateStatusList
* NodeGroupMemberUpdateStatusList `array`
  * items
    * CacheClusterId
    * CacheNodeId
    * NodeDeletionDate
    * NodeUpdateEndDate
    * NodeUpdateInitiatedBy
    * NodeUpdateInitiatedDate
    * NodeUpdateStartDate
    * NodeUpdateStatus
    * NodeUpdateStatusModifiedDate

### NodeGroupNotFoundFault


### NodeGroupUpdateStatus
* NodeGroupUpdateStatus `object`: The status of the service update on the node group 
  * NodeGroupId
  * NodeGroupMemberUpdateStatus
    * items
      * CacheClusterId
      * CacheNodeId
      * NodeDeletionDate
      * NodeUpdateEndDate
      * NodeUpdateInitiatedBy
      * NodeUpdateInitiatedDate
      * NodeUpdateStartDate
      * NodeUpdateStatus
      * NodeUpdateStatusModifiedDate

### NodeGroupUpdateStatusList
* NodeGroupUpdateStatusList `array`
  * items
    * NodeGroupId
    * NodeGroupMemberUpdateStatus
      * items
        * CacheClusterId
        * CacheNodeId
        * NodeDeletionDate
        * NodeUpdateEndDate
        * NodeUpdateInitiatedBy
        * NodeUpdateInitiatedDate
        * NodeUpdateStartDate
        * NodeUpdateStatus
        * NodeUpdateStatusModifiedDate

### NodeGroupsPerReplicationGroupQuotaExceededFault


### NodeGroupsToRemoveList
* NodeGroupsToRemoveList `array`
  * items

### NodeGroupsToRetainList
* NodeGroupsToRetainList `array`
  * items

### NodeQuotaForClusterExceededFault


### NodeQuotaForCustomerExceededFault


### NodeSnapshot
* NodeSnapshot `object`: Represents an individual cache node in a snapshot of a cluster.
  * CacheClusterId
  * CacheNodeCreateTime
  * CacheNodeId
  * CacheSize
  * NodeGroupConfiguration
    * NodeGroupId
    * PrimaryAvailabilityZone
    * PrimaryOutpostArn
    * ReplicaAvailabilityZones
      * items
    * ReplicaCount
    * ReplicaOutpostArns
      * items
    * Slots
  * NodeGroupId
  * SnapshotCreateTime

### NodeSnapshotList
* NodeSnapshotList `array`
  * items
    * CacheClusterId
    * CacheNodeCreateTime
    * CacheNodeId
    * CacheSize
    * NodeGroupConfiguration
      * NodeGroupId
      * PrimaryAvailabilityZone
      * PrimaryOutpostArn
      * ReplicaAvailabilityZones
        * items
      * ReplicaCount
      * ReplicaOutpostArns
        * items
      * Slots
    * NodeGroupId
    * SnapshotCreateTime

### NodeTypeList
* NodeTypeList `array`
  * items [String](#string)

### NodeUpdateInitiatedBy
* NodeUpdateInitiatedBy `string` (values: system, customer)

### NodeUpdateStatus
* NodeUpdateStatus `string` (values: not-applied, waiting-to-start, in-progress, stopping, stopped, complete)

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
  * TopicArn
  * TopicStatus

### OutpostArnsList
* OutpostArnsList `array`
  * items

### OutpostMode
* OutpostMode `string` (values: single-outpost, cross-outpost)

### Parameter
* Parameter `object`: Describes an individual setting that controls some aspect of ElastiCache behavior.
  * AllowedValues
  * ChangeType
  * DataType
  * Description
  * IsModifiable
  * MinimumEngineVersion
  * ParameterName
  * ParameterValue
  * Source

### ParameterNameValue
* ParameterNameValue `object`: Describes a name-value pair that is used to update the value of a parameter.
  * ParameterName
  * ParameterValue

### ParameterNameValueList
* ParameterNameValueList `array`
  * items
    * ParameterName
    * ParameterValue

### ParametersList
* ParametersList `array`
  * items
    * AllowedValues
    * ChangeType
    * DataType
    * Description
    * IsModifiable
    * MinimumEngineVersion
    * ParameterName
    * ParameterValue
    * Source

### PasswordListInput
* PasswordListInput `array`
  * items [String](#string)

### PendingAutomaticFailoverStatus
* PendingAutomaticFailoverStatus `string` (values: enabled, disabled)

### PendingModifiedValues
* PendingModifiedValues `object`: A group of settings that are applied to the cluster in the future, or that are currently being applied.
  * AuthTokenStatus
  * CacheNodeIdsToRemove
    * items
  * CacheNodeType
  * EngineVersion
  * NumCacheNodes

### PreferredAvailabilityZoneList
* PreferredAvailabilityZoneList `array`
  * items

### PreferredOutpostArnList
* PreferredOutpostArnList `array`
  * items

### ProcessedUpdateAction
* ProcessedUpdateAction `object`: Update action that has been processed for the corresponding apply/stop request
  * CacheClusterId
  * ReplicationGroupId
  * ServiceUpdateName
  * UpdateActionStatus

### ProcessedUpdateActionList
* ProcessedUpdateActionList `array`
  * items
    * CacheClusterId
    * ReplicationGroupId
    * ServiceUpdateName
    * UpdateActionStatus

### PurchaseReservedCacheNodesOfferingMessage
* PurchaseReservedCacheNodesOfferingMessage `object`: Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.
  * CacheNodeCount
  * ReservedCacheNodeId
  * ReservedCacheNodesOfferingId **required**

### PurchaseReservedCacheNodesOfferingResult
* PurchaseReservedCacheNodesOfferingResult `object`
  * ReservedCacheNode [ReservedCacheNode](#reservedcachenode)

### RebalanceSlotsInGlobalReplicationGroupMessage
* RebalanceSlotsInGlobalReplicationGroupMessage `object`
  * ApplyImmediately **required**
  * GlobalReplicationGroupId **required**

### RebalanceSlotsInGlobalReplicationGroupResult
* RebalanceSlotsInGlobalReplicationGroupResult `object`
  * GlobalReplicationGroup [GlobalReplicationGroup](#globalreplicationgroup)

### RebootCacheClusterMessage
* RebootCacheClusterMessage `object`: Represents the input of a <code>RebootCacheCluster</code> operation.
  * CacheClusterId **required**
  * CacheNodeIdsToReboot **required**
    * items

### RebootCacheClusterResult
* RebootCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### RecurringCharge
* RecurringCharge `object`: Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
  * RecurringChargeAmount
  * RecurringChargeFrequency

### RecurringChargeList
* RecurringChargeList `array`
  * items
    * RecurringChargeAmount
    * RecurringChargeFrequency

### RegionalConfiguration
* RegionalConfiguration `object`: A list of the replication groups 
  * ReplicationGroupId **required**
  * ReplicationGroupRegion **required**
  * ReshardingConfiguration **required**
    * items
      * NodeGroupId
      * PreferredAvailabilityZones
        * items

### RegionalConfigurationList
* RegionalConfigurationList `array`
  * items
    * ReplicationGroupId **required**
    * ReplicationGroupRegion **required**
    * ReshardingConfiguration **required**
      * items
        * NodeGroupId
        * PreferredAvailabilityZones
          * items

### RemoveReplicasList
* RemoveReplicasList `array`
  * items [String](#string)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: Represents the input of a <code>RemoveTagsFromResource</code> operation.
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

### ReplicaConfigurationList
* ReplicaConfigurationList `array`
  * items
    * NewReplicaCount **required**
    * NodeGroupId **required**
    * PreferredAvailabilityZones
      * items
    * PreferredOutpostArns
      * items

### ReplicationGroup
* ReplicationGroup `object`: Contains all of the attributes of a specific Redis replication group.
  * ARN
  * AtRestEncryptionEnabled
  * AuthTokenEnabled
  * AuthTokenLastModifiedDate
  * AutomaticFailover
  * CacheNodeType
  * ClusterEnabled
  * ConfigurationEndpoint
    * Address
    * Port
  * Description
  * GlobalReplicationGroupInfo
    * GlobalReplicationGroupId
    * GlobalReplicationGroupMemberRole
  * KmsKeyId
  * MemberClusters
    * items
  * MemberClustersOutpostArns
    * items
  * MultiAZ
  * NodeGroups
    * items
      * NodeGroupId
      * NodeGroupMembers
        * items
          * CacheClusterId
          * CacheNodeId
          * CurrentRole
          * PreferredAvailabilityZone
          * PreferredOutpostArn
          * ReadEndpoint
      * PrimaryEndpoint
        * Address
        * Port
      * ReaderEndpoint
        * Address
        * Port
      * Slots
      * Status
  * PendingModifiedValues
    * AuthTokenStatus
    * AutomaticFailoverStatus
    * PrimaryClusterId
    * Resharding
      * SlotMigration
        * ProgressPercentage
    * UserGroups
      * UserGroupIdsToAdd
        * items [UserGroupId](#usergroupid)
      * UserGroupIdsToRemove
        * items [UserGroupId](#usergroupid)
  * ReplicationGroupId
  * SnapshotRetentionLimit
  * SnapshotWindow
  * SnapshottingClusterId
  * Status
  * TransitEncryptionEnabled
  * UserGroupIds
    * items [UserGroupId](#usergroupid)

### ReplicationGroupAlreadyExistsFault


### ReplicationGroupAlreadyUnderMigrationFault


### ReplicationGroupIdList
* ReplicationGroupIdList `array`
  * items [String](#string)

### ReplicationGroupList
* ReplicationGroupList `array`
  * items
    * ARN
    * AtRestEncryptionEnabled
    * AuthTokenEnabled
    * AuthTokenLastModifiedDate
    * AutomaticFailover
    * CacheNodeType
    * ClusterEnabled
    * ConfigurationEndpoint
      * Address
      * Port
    * Description
    * GlobalReplicationGroupInfo
      * GlobalReplicationGroupId
      * GlobalReplicationGroupMemberRole
    * KmsKeyId
    * MemberClusters
      * items
    * MemberClustersOutpostArns
      * items
    * MultiAZ
    * NodeGroups
      * items
        * NodeGroupId
        * NodeGroupMembers
          * items
        * PrimaryEndpoint
          * Address
          * Port
        * ReaderEndpoint
          * Address
          * Port
        * Slots
        * Status
    * PendingModifiedValues
      * AuthTokenStatus
      * AutomaticFailoverStatus
      * PrimaryClusterId
      * Resharding
        * SlotMigration
          * ProgressPercentage
      * UserGroups
        * UserGroupIdsToAdd
          * items [UserGroupId](#usergroupid)
        * UserGroupIdsToRemove
          * items [UserGroupId](#usergroupid)
    * ReplicationGroupId
    * SnapshotRetentionLimit
    * SnapshotWindow
    * SnapshottingClusterId
    * Status
    * TransitEncryptionEnabled
    * UserGroupIds
      * items [UserGroupId](#usergroupid)

### ReplicationGroupMessage
* ReplicationGroupMessage `object`: Represents the output of a <code>DescribeReplicationGroups</code> operation.
  * Marker
  * ReplicationGroups
    * items
      * ARN
      * AtRestEncryptionEnabled
      * AuthTokenEnabled
      * AuthTokenLastModifiedDate
      * AutomaticFailover
      * CacheNodeType
      * ClusterEnabled
      * ConfigurationEndpoint
        * Address
        * Port
      * Description
      * GlobalReplicationGroupInfo
        * GlobalReplicationGroupId
        * GlobalReplicationGroupMemberRole
      * KmsKeyId
      * MemberClusters
        * items
      * MemberClustersOutpostArns
        * items
      * MultiAZ
      * NodeGroups
        * items
          * NodeGroupId
          * NodeGroupMembers
          * PrimaryEndpoint
          * ReaderEndpoint
          * Slots
          * Status
      * PendingModifiedValues
        * AuthTokenStatus
        * AutomaticFailoverStatus
        * PrimaryClusterId
        * Resharding
          * SlotMigration
        * UserGroups
          * UserGroupIdsToAdd
          * UserGroupIdsToRemove
      * ReplicationGroupId
      * SnapshotRetentionLimit
      * SnapshotWindow
      * SnapshottingClusterId
      * Status
      * TransitEncryptionEnabled
      * UserGroupIds
        * items [UserGroupId](#usergroupid)

### ReplicationGroupNotFoundFault


### ReplicationGroupNotUnderMigrationFault


### ReplicationGroupOutpostArnList
* ReplicationGroupOutpostArnList `array`
  * items

### ReplicationGroupPendingModifiedValues
* ReplicationGroupPendingModifiedValues `object`: The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
  * AuthTokenStatus
  * AutomaticFailoverStatus
  * PrimaryClusterId
  * Resharding
    * SlotMigration
      * ProgressPercentage
  * UserGroups
    * UserGroupIdsToAdd
      * items [UserGroupId](#usergroupid)
    * UserGroupIdsToRemove
      * items [UserGroupId](#usergroupid)

### ReservedCacheNode
* ReservedCacheNode `object`: Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
  * CacheNodeCount
  * CacheNodeType
  * Duration
  * FixedPrice
  * OfferingType
  * ProductDescription
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservationARN
  * ReservedCacheNodeId
  * ReservedCacheNodesOfferingId
  * StartTime
  * State
  * UsagePrice

### ReservedCacheNodeAlreadyExistsFault


### ReservedCacheNodeList
* ReservedCacheNodeList `array`
  * items
    * CacheNodeCount
    * CacheNodeType
    * Duration
    * FixedPrice
    * OfferingType
    * ProductDescription
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservationARN
    * ReservedCacheNodeId
    * ReservedCacheNodesOfferingId
    * StartTime
    * State
    * UsagePrice

### ReservedCacheNodeMessage
* ReservedCacheNodeMessage `object`: Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
  * Marker
  * ReservedCacheNodes
    * items
      * CacheNodeCount
      * CacheNodeType
      * Duration
      * FixedPrice
      * OfferingType
      * ProductDescription
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservationARN
      * ReservedCacheNodeId
      * ReservedCacheNodesOfferingId
      * StartTime
      * State
      * UsagePrice

### ReservedCacheNodeNotFoundFault


### ReservedCacheNodeQuotaExceededFault


### ReservedCacheNodesOffering
* ReservedCacheNodesOffering `object`: Describes all of the attributes of a reserved cache node offering.
  * CacheNodeType
  * Duration
  * FixedPrice
  * OfferingType
  * ProductDescription
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservedCacheNodesOfferingId
  * UsagePrice

### ReservedCacheNodesOfferingList
* ReservedCacheNodesOfferingList `array`
  * items
    * CacheNodeType
    * Duration
    * FixedPrice
    * OfferingType
    * ProductDescription
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedCacheNodesOfferingId
    * UsagePrice

### ReservedCacheNodesOfferingMessage
* ReservedCacheNodesOfferingMessage `object`: Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
  * Marker
  * ReservedCacheNodesOfferings
    * items
      * CacheNodeType
      * Duration
      * FixedPrice
      * OfferingType
      * ProductDescription
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedCacheNodesOfferingId
      * UsagePrice

### ReservedCacheNodesOfferingNotFoundFault


### ResetCacheParameterGroupMessage
* ResetCacheParameterGroupMessage `object`: Represents the input of a <code>ResetCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required**
  * ParameterNameValues
    * items
      * ParameterName
      * ParameterValue
  * ResetAllParameters

### ReshardingConfiguration
* ReshardingConfiguration `object`: A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.
  * NodeGroupId
  * PreferredAvailabilityZones
    * items

### ReshardingConfigurationList
* ReshardingConfigurationList `array`
  * items
    * NodeGroupId
    * PreferredAvailabilityZones
      * items

### ReshardingStatus
* ReshardingStatus `object`: The status of an online resharding operation.
  * SlotMigration
    * ProgressPercentage

### RevokeCacheSecurityGroupIngressMessage
* RevokeCacheSecurityGroupIngressMessage `object`: Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.
  * CacheSecurityGroupName **required**
  * EC2SecurityGroupName **required**
  * EC2SecurityGroupOwnerId **required**

### RevokeCacheSecurityGroupIngressResult
* RevokeCacheSecurityGroupIngressResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### SecurityGroupIdsList
* SecurityGroupIdsList `array`
  * items

### SecurityGroupMembership
* SecurityGroupMembership `object`: Represents a single cache security group and its status.
  * SecurityGroupId
  * Status

### SecurityGroupMembershipList
* SecurityGroupMembershipList `array`
  * items [SecurityGroupMembership](#securitygroupmembership)

### ServiceLinkedRoleNotFoundFault


### ServiceUpdate
* ServiceUpdate `object`: An update that you can apply to your Redis clusters.
  * AutoUpdateAfterRecommendedApplyByDate
  * Engine
  * EngineVersion
  * EstimatedUpdateTime
  * ServiceUpdateDescription
  * ServiceUpdateEndDate
  * ServiceUpdateName
  * ServiceUpdateRecommendedApplyByDate
  * ServiceUpdateReleaseDate
  * ServiceUpdateSeverity
  * ServiceUpdateStatus
  * ServiceUpdateType

### ServiceUpdateList
* ServiceUpdateList `array`
  * items
    * AutoUpdateAfterRecommendedApplyByDate
    * Engine
    * EngineVersion
    * EstimatedUpdateTime
    * ServiceUpdateDescription
    * ServiceUpdateEndDate
    * ServiceUpdateName
    * ServiceUpdateRecommendedApplyByDate
    * ServiceUpdateReleaseDate
    * ServiceUpdateSeverity
    * ServiceUpdateStatus
    * ServiceUpdateType

### ServiceUpdateNotFoundFault


### ServiceUpdateSeverity
* ServiceUpdateSeverity `string` (values: critical, important, medium, low)

### ServiceUpdateStatus
* ServiceUpdateStatus `string` (values: available, cancelled, expired)

### ServiceUpdateStatusList
* ServiceUpdateStatusList `array`
  * items [ServiceUpdateStatus](#serviceupdatestatus)

### ServiceUpdateType
* ServiceUpdateType `string` (values: security-update)

### ServiceUpdatesMessage
* ServiceUpdatesMessage `object`
  * Marker
  * ServiceUpdates
    * items
      * AutoUpdateAfterRecommendedApplyByDate
      * Engine
      * EngineVersion
      * EstimatedUpdateTime
      * ServiceUpdateDescription
      * ServiceUpdateEndDate
      * ServiceUpdateName
      * ServiceUpdateRecommendedApplyByDate
      * ServiceUpdateReleaseDate
      * ServiceUpdateSeverity
      * ServiceUpdateStatus
      * ServiceUpdateType

### SlaMet
* SlaMet `string` (values: yes, no, n/a)

### SlotMigration
* SlotMigration `object`: Represents the progress of an online resharding operation.
  * ProgressPercentage

### Snapshot
* Snapshot `object`: Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
  * ARN
  * AutoMinorVersionUpgrade
  * AutomaticFailover
  * CacheClusterCreateTime
  * CacheClusterId
  * CacheNodeType
  * CacheParameterGroupName
  * CacheSubnetGroupName
  * Engine
  * EngineVersion
  * KmsKeyId
  * NodeSnapshots
    * items
      * CacheClusterId
      * CacheNodeCreateTime
      * CacheNodeId
      * CacheSize
      * NodeGroupConfiguration
        * NodeGroupId
        * PrimaryAvailabilityZone
        * PrimaryOutpostArn
        * ReplicaAvailabilityZones
          * items
        * ReplicaCount
        * ReplicaOutpostArns
          * items
        * Slots
      * NodeGroupId
      * SnapshotCreateTime
  * NumCacheNodes
  * NumNodeGroups
  * Port
  * PreferredAvailabilityZone
  * PreferredMaintenanceWindow
  * PreferredOutpostArn
  * ReplicationGroupDescription
  * ReplicationGroupId
  * SnapshotName
  * SnapshotRetentionLimit
  * SnapshotSource
  * SnapshotStatus
  * SnapshotWindow
  * TopicArn
  * VpcId

### SnapshotAlreadyExistsFault


### SnapshotArnsList
* SnapshotArnsList `array`
  * items

### SnapshotFeatureNotSupportedFault


### SnapshotList
* SnapshotList `array`
  * items
    * ARN
    * AutoMinorVersionUpgrade
    * AutomaticFailover
    * CacheClusterCreateTime
    * CacheClusterId
    * CacheNodeType
    * CacheParameterGroupName
    * CacheSubnetGroupName
    * Engine
    * EngineVersion
    * KmsKeyId
    * NodeSnapshots
      * items
        * CacheClusterId
        * CacheNodeCreateTime
        * CacheNodeId
        * CacheSize
        * NodeGroupConfiguration
          * NodeGroupId
          * PrimaryAvailabilityZone
          * PrimaryOutpostArn
          * ReplicaAvailabilityZones
          * ReplicaCount
          * ReplicaOutpostArns
          * Slots
        * NodeGroupId
        * SnapshotCreateTime
    * NumCacheNodes
    * NumNodeGroups
    * Port
    * PreferredAvailabilityZone
    * PreferredMaintenanceWindow
    * PreferredOutpostArn
    * ReplicationGroupDescription
    * ReplicationGroupId
    * SnapshotName
    * SnapshotRetentionLimit
    * SnapshotSource
    * SnapshotStatus
    * SnapshotWindow
    * TopicArn
    * VpcId

### SnapshotNotFoundFault


### SnapshotQuotaExceededFault


### SourceType
* SourceType `string` (values: cache-cluster, cache-parameter-group, cache-security-group, cache-subnet-group, replication-group, user, user-group)

### StartMigrationMessage
* StartMigrationMessage `object`
  * CustomerNodeEndpointList **required**
    * items [CustomerNodeEndpoint](#customernodeendpoint)
  * ReplicationGroupId **required**

### StartMigrationResponse
* StartMigrationResponse `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### String
* String `string`

### Subnet
* Subnet `object`: Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
  * SubnetAvailabilityZone
    * Name
  * SubnetIdentifier
  * SubnetOutpost
    * SubnetOutpostArn

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items

### SubnetInUse


### SubnetList
* SubnetList `array`
  * items
    * SubnetAvailabilityZone
      * Name
    * SubnetIdentifier
    * SubnetOutpost
      * SubnetOutpostArn

### SubnetNotAllowedFault


### SubnetOutpost
* SubnetOutpost `object`: The ID of the outpost subnet.
  * SubnetOutpostArn

### TStamp
* TStamp `string`

### Tag
* Tag `object`: A cost allocation Tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. A tag with a null Value is permitted.
  * Key
  * Value

### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagListMessage
* TagListMessage `object`: Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
  * TagList
    * items
      * Key
      * Value

### TagNotFoundFault


### TagQuotaPerResourceExceeded


### TestFailoverMessage
* TestFailoverMessage `object`
  * NodeGroupId **required**
  * ReplicationGroupId **required**

### TestFailoverNotAvailableFault


### TestFailoverResult
* TestFailoverResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### TimeRangeFilter
* TimeRangeFilter `object`: Filters update actions from the service updates that are in available status during the time range.
  * EndTime
  * StartTime

### UGReplicationGroupIdList
* UGReplicationGroupIdList `array`
  * items [String](#string)

### UnprocessedUpdateAction
* UnprocessedUpdateAction `object`: Update action that has failed to be processed for the corresponding apply/stop request
  * CacheClusterId
  * ErrorMessage
  * ErrorType
  * ReplicationGroupId
  * ServiceUpdateName

### UnprocessedUpdateActionList
* UnprocessedUpdateActionList `array`
  * items
    * CacheClusterId
    * ErrorMessage
    * ErrorType
    * ReplicationGroupId
    * ServiceUpdateName

### UpdateAction
* UpdateAction `object`: The status of the service update for a specific replication group
  * CacheClusterId
  * CacheNodeUpdateStatus
    * items
      * CacheNodeId
      * NodeDeletionDate
      * NodeUpdateEndDate
      * NodeUpdateInitiatedBy
      * NodeUpdateInitiatedDate
      * NodeUpdateStartDate
      * NodeUpdateStatus
      * NodeUpdateStatusModifiedDate
  * Engine
  * EstimatedUpdateTime
  * NodeGroupUpdateStatus
    * items
      * NodeGroupId
      * NodeGroupMemberUpdateStatus
        * items
          * CacheClusterId
          * CacheNodeId
          * NodeDeletionDate
          * NodeUpdateEndDate
          * NodeUpdateInitiatedBy
          * NodeUpdateInitiatedDate
          * NodeUpdateStartDate
          * NodeUpdateStatus
          * NodeUpdateStatusModifiedDate
  * NodesUpdated
  * ReplicationGroupId
  * ServiceUpdateName
  * ServiceUpdateRecommendedApplyByDate
  * ServiceUpdateReleaseDate
  * ServiceUpdateSeverity
  * ServiceUpdateStatus
  * ServiceUpdateType
  * SlaMet
  * UpdateActionAvailableDate
  * UpdateActionStatus
  * UpdateActionStatusModifiedDate

### UpdateActionList
* UpdateActionList `array`
  * items
    * CacheClusterId
    * CacheNodeUpdateStatus
      * items
        * CacheNodeId
        * NodeDeletionDate
        * NodeUpdateEndDate
        * NodeUpdateInitiatedBy
        * NodeUpdateInitiatedDate
        * NodeUpdateStartDate
        * NodeUpdateStatus
        * NodeUpdateStatusModifiedDate
    * Engine
    * EstimatedUpdateTime
    * NodeGroupUpdateStatus
      * items
        * NodeGroupId
        * NodeGroupMemberUpdateStatus
          * items
    * NodesUpdated
    * ReplicationGroupId
    * ServiceUpdateName
    * ServiceUpdateRecommendedApplyByDate
    * ServiceUpdateReleaseDate
    * ServiceUpdateSeverity
    * ServiceUpdateStatus
    * ServiceUpdateType
    * SlaMet
    * UpdateActionAvailableDate
    * UpdateActionStatus
    * UpdateActionStatusModifiedDate

### UpdateActionResultsMessage
* UpdateActionResultsMessage `object`
  * ProcessedUpdateActions
    * items
      * CacheClusterId
      * ReplicationGroupId
      * ServiceUpdateName
      * UpdateActionStatus
  * UnprocessedUpdateActions
    * items
      * CacheClusterId
      * ErrorMessage
      * ErrorType
      * ReplicationGroupId
      * ServiceUpdateName

### UpdateActionStatus
* UpdateActionStatus `string` (values: not-applied, waiting-to-start, in-progress, stopping, stopped, complete, scheduling, scheduled, not-applicable)

### UpdateActionStatusList
* UpdateActionStatusList `array`
  * items [UpdateActionStatus](#updateactionstatus)

### UpdateActionsMessage
* UpdateActionsMessage `object`
  * Marker
  * UpdateActions
    * items
      * CacheClusterId
      * CacheNodeUpdateStatus
        * items
          * CacheNodeId
          * NodeDeletionDate
          * NodeUpdateEndDate
          * NodeUpdateInitiatedBy
          * NodeUpdateInitiatedDate
          * NodeUpdateStartDate
          * NodeUpdateStatus
          * NodeUpdateStatusModifiedDate
      * Engine
      * EstimatedUpdateTime
      * NodeGroupUpdateStatus
        * items
          * NodeGroupId
          * NodeGroupMemberUpdateStatus
      * NodesUpdated
      * ReplicationGroupId
      * ServiceUpdateName
      * ServiceUpdateRecommendedApplyByDate
      * ServiceUpdateReleaseDate
      * ServiceUpdateSeverity
      * ServiceUpdateStatus
      * ServiceUpdateType
      * SlaMet
      * UpdateActionAvailableDate
      * UpdateActionStatus
      * UpdateActionStatusModifiedDate

### User
* User `object`
  * ARN
  * AccessString
  * Authentication
    * PasswordCount
    * Type
  * Engine
  * Status
  * UserGroupIds
    * items [UserGroupId](#usergroupid)
  * UserId
  * UserName

### UserAlreadyExistsFault


### UserGroup
* UserGroup `object`
  * ARN
  * Engine
  * PendingChanges
    * UserIdsToAdd
      * items [UserId](#userid)
    * UserIdsToRemove
      * items [UserId](#userid)
  * ReplicationGroups
    * items [String](#string)
  * Status
  * UserGroupId
  * UserIds
    * items [UserId](#userid)

### UserGroupAlreadyExistsFault


### UserGroupId
* UserGroupId `string`

### UserGroupIdList
* UserGroupIdList `array`
  * items [UserGroupId](#usergroupid)

### UserGroupIdListInput
* UserGroupIdListInput `array`
  * items [UserGroupId](#usergroupid)

### UserGroupList
* UserGroupList `array`
  * items [UserGroup](#usergroup)

### UserGroupNotFoundFault


### UserGroupPendingChanges
* UserGroupPendingChanges `object`: Returns the updates being applied to the user group.
  * UserIdsToAdd
    * items [UserId](#userid)
  * UserIdsToRemove
    * items [UserId](#userid)

### UserGroupQuotaExceededFault


### UserGroupsUpdateStatus
* UserGroupsUpdateStatus `object`: The status of the user group update.
  * UserGroupIdsToAdd
    * items [UserGroupId](#usergroupid)
  * UserGroupIdsToRemove
    * items [UserGroupId](#usergroupid)

### UserId
* UserId `string`

### UserIdList
* UserIdList `array`
  * items [UserId](#userid)

### UserIdListInput
* UserIdListInput `array`
  * items [UserId](#userid)

### UserList
* UserList `array`
  * items [User](#user)

### UserName
* UserName `string`

### UserNotFoundFault


### UserQuotaExceededFault



