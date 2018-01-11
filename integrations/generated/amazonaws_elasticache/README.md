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

#### Input
* input `object`
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

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
  * CacheSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName **required** [String](#string)
  * EC2SecurityGroupOwnerId **required** [String](#string)

#### Output
* output [AuthorizeCacheSecurityGroupIngressResult](#authorizecachesecuritygroupingressresult)

### CopySnapshot



```js
amazonaws_elasticache.CopySnapshot({
  "SourceSnapshotName": "",
  "TargetSnapshotName": ""
}, context)
```

#### Input
* input `object`
  * SourceSnapshotName **required** [String](#string)
  * TargetBucket [String](#string)
  * TargetSnapshotName **required** [String](#string)

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
  * AZMode [AZMode](#azmode)
  * AuthToken [String](#string)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * CacheClusterId **required** [String](#string)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * CacheSubnetGroupName [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NotificationTopicArn [String](#string)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredAvailabilityZone [String](#string)
  * PreferredAvailabilityZones [PreferredAvailabilityZoneList](#preferredavailabilityzonelist)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationGroupId [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotArns [SnapshotArnsList](#snapshotarnslist)
  * SnapshotName [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * Tags [TagList](#taglist)

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
  * CacheParameterGroupFamily **required** [String](#string)
  * CacheParameterGroupName **required** [String](#string)
  * Description **required** [String](#string)

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
  * CacheSecurityGroupName **required** [String](#string)
  * Description **required** [String](#string)

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
  * CacheSubnetGroupDescription **required** [String](#string)
  * CacheSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [CreateCacheSubnetGroupResult](#createcachesubnetgroupresult)

### CreateReplicationGroup



```js
amazonaws_elasticache.CreateReplicationGroup({
  "ReplicationGroupId": "",
  "ReplicationGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * AtRestEncryptionEnabled [BooleanOptional](#booleanoptional)
  * AuthToken [String](#string)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomaticFailoverEnabled [BooleanOptional](#booleanoptional)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * CacheSubnetGroupName [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NodeGroupConfiguration [NodeGroupConfigurationList](#nodegroupconfigurationlist)
  * NotificationTopicArn [String](#string)
  * NumCacheClusters [IntegerOptional](#integeroptional)
  * NumNodeGroups [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredCacheClusterAZs [AvailabilityZonesList](#availabilityzoneslist)
  * PreferredMaintenanceWindow [String](#string)
  * PrimaryClusterId [String](#string)
  * ReplicasPerNodeGroup [IntegerOptional](#integeroptional)
  * ReplicationGroupDescription **required** [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotArns [SnapshotArnsList](#snapshotarnslist)
  * SnapshotName [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * Tags [TagList](#taglist)
  * TransitEncryptionEnabled [BooleanOptional](#booleanoptional)

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
  * CacheClusterId [String](#string)
  * ReplicationGroupId [String](#string)
  * SnapshotName **required** [String](#string)

#### Output
* output [CreateSnapshotResult](#createsnapshotresult)

### DeleteCacheCluster



```js
amazonaws_elasticache.DeleteCacheCluster({
  "CacheClusterId": ""
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** [String](#string)
  * FinalSnapshotIdentifier [String](#string)

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
  * CacheParameterGroupName **required** [String](#string)

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
  * CacheSecurityGroupName **required** [String](#string)

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
  * CacheSubnetGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteReplicationGroup



```js
amazonaws_elasticache.DeleteReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * FinalSnapshotIdentifier [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * RetainPrimaryCluster [BooleanOptional](#booleanoptional)

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
  * SnapshotName **required** [String](#string)

#### Output
* output [DeleteSnapshotResult](#deletesnapshotresult)

### DescribeCacheClusters



```js
amazonaws_elasticache.DescribeCacheClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheClusterId [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ShowCacheClustersNotInReplicationGroups [BooleanOptional](#booleanoptional)
  * ShowCacheNodeInfo [BooleanOptional](#booleanoptional)

#### Output
* output [CacheClusterMessage](#cacheclustermessage)

### DescribeCacheEngineVersions



```js
amazonaws_elasticache.DescribeCacheEngineVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupFamily [String](#string)
  * DefaultOnly [Boolean](#boolean)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [CacheEngineVersionMessage](#cacheengineversionmessage)

### DescribeCacheParameterGroups



```js
amazonaws_elasticache.DescribeCacheParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupName **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

#### Output
* output [CacheParameterGroupDetails](#cacheparametergroupdetails)

### DescribeCacheSecurityGroups



```js
amazonaws_elasticache.DescribeCacheSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheSecurityGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [CacheSecurityGroupMessage](#cachesecuritygroupmessage)

### DescribeCacheSubnetGroups



```js
amazonaws_elasticache.DescribeCacheSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheSubnetGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * MaxRecords `string`
  * Marker `string`
  * CacheParameterGroupFamily **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEvents



```js
amazonaws_elasticache.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeReplicationGroups



```js
amazonaws_elasticache.DescribeReplicationGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationGroupId [String](#string)

#### Output
* output [ReplicationGroupMessage](#replicationgroupmessage)

### DescribeReservedCacheNodes



```js
amazonaws_elasticache.DescribeReservedCacheNodes({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheNodeType [String](#string)
  * Duration [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedCacheNodeId [String](#string)
  * ReservedCacheNodesOfferingId [String](#string)

#### Output
* output [ReservedCacheNodeMessage](#reservedcachenodemessage)

### DescribeReservedCacheNodesOfferings



```js
amazonaws_elasticache.DescribeReservedCacheNodesOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheNodeType [String](#string)
  * Duration [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedCacheNodesOfferingId [String](#string)

#### Output
* output [ReservedCacheNodesOfferingMessage](#reservedcachenodesofferingmessage)

### DescribeSnapshots



```js
amazonaws_elasticache.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CacheClusterId [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationGroupId [String](#string)
  * ShowNodeGroupConfig [BooleanOptional](#booleanoptional)
  * SnapshotName [String](#string)
  * SnapshotSource [String](#string)

#### Output
* output [DescribeSnapshotsListMessage](#describesnapshotslistmessage)

### ListAllowedNodeTypeModifications



```js
amazonaws_elasticache.ListAllowedNodeTypeModifications({}, context)
```

#### Input
* input `object`
  * CacheClusterId [String](#string)
  * ReplicationGroupId [String](#string)

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
  * ResourceName **required** [String](#string)

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
  * AZMode [AZMode](#azmode)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * CacheClusterId **required** [String](#string)
  * CacheNodeIdsToRemove [CacheNodeIdsList](#cachenodeidslist)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * EngineVersion [String](#string)
  * NewAvailabilityZones [PreferredAvailabilityZoneList](#preferredavailabilityzonelist)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)

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
  * CacheParameterGroupName **required** [String](#string)
  * ParameterNameValues **required** [ParameterNameValueList](#parameternamevaluelist)

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
  * CacheSubnetGroupDescription [String](#string)
  * CacheSubnetGroupName **required** [String](#string)
  * SubnetIds [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [ModifyCacheSubnetGroupResult](#modifycachesubnetgroupresult)

### ModifyReplicationGroup



```js
amazonaws_elasticache.ModifyReplicationGroup({
  "ReplicationGroupId": ""
}, context)
```

#### Input
* input `object`
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomaticFailoverEnabled [BooleanOptional](#booleanoptional)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * EngineVersion [String](#string)
  * NodeGroupId [String](#string)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PrimaryClusterId [String](#string)
  * ReplicationGroupDescription [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * SnapshottingClusterId [String](#string)

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
  * ApplyImmediately **required** [Boolean](#boolean)
  * NodeGroupCount **required** [Integer](#integer)
  * NodeGroupsToRemove [NodeGroupsToRemoveList](#nodegroupstoremovelist)
  * ReplicationGroupId **required** [String](#string)
  * ReshardingConfiguration [ReshardingConfigurationList](#reshardingconfigurationlist)

#### Output
* output [ModifyReplicationGroupShardConfigurationResult](#modifyreplicationgroupshardconfigurationresult)

### PurchaseReservedCacheNodesOffering



```js
amazonaws_elasticache.PurchaseReservedCacheNodesOffering({
  "ReservedCacheNodesOfferingId": ""
}, context)
```

#### Input
* input `object`
  * CacheNodeCount [IntegerOptional](#integeroptional)
  * ReservedCacheNodeId [String](#string)
  * ReservedCacheNodesOfferingId **required** [String](#string)

#### Output
* output [PurchaseReservedCacheNodesOfferingResult](#purchasereservedcachenodesofferingresult)

### RebootCacheCluster



```js
amazonaws_elasticache.RebootCacheCluster({
  "CacheClusterId": "",
  "CacheNodeIdsToReboot": []
}, context)
```

#### Input
* input `object`
  * CacheClusterId **required** [String](#string)
  * CacheNodeIdsToReboot **required** [CacheNodeIdsList](#cachenodeidslist)

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
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

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
  * CacheParameterGroupName **required** [String](#string)
  * ParameterNameValues [ParameterNameValueList](#parameternamevaluelist)
  * ResetAllParameters [Boolean](#boolean)

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
  * CacheSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName **required** [String](#string)
  * EC2SecurityGroupOwnerId **required** [String](#string)

#### Output
* output [RevokeCacheSecurityGroupIngressResult](#revokecachesecuritygroupingressresult)

### TestFailover



```js
amazonaws_elasticache.TestFailover({
  "ReplicationGroupId": "",
  "NodeGroupId": ""
}, context)
```

#### Input
* input `object`
  * NodeGroupId **required** [String](#string)
  * ReplicationGroupId **required** [String](#string)

#### Output
* output [TestFailoverResult](#testfailoverresult)



## Definitions

### APICallRateForCustomerExceededFault
* APICallRateForCustomerExceededFault `object`: The customer has exceeded the allowed rate of API calls.

### AZMode
* AZMode `string` (values: single-az, cross-az)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: Represents the input of an AddTagsToResource operation.
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

### AllowedNodeTypeModificationsMessage
* AllowedNodeTypeModificationsMessage `object`: Represents the allowed node types you can use to modify your cluster or replication group.
  * ScaleUpModifications [NodeTypeList](#nodetypelist)

### AuthorizationAlreadyExistsFault
* AuthorizationAlreadyExistsFault `object`: The specified Amazon EC2 security group is already authorized for the specified cache security group.

### AuthorizationNotFoundFault
* AuthorizationNotFoundFault `object`: The specified Amazon EC2 security group is not authorized for the specified cache security group.

### AuthorizeCacheSecurityGroupIngressMessage
* AuthorizeCacheSecurityGroupIngressMessage `object`: Represents the input of an AuthorizeCacheSecurityGroupIngress operation.
  * CacheSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName **required** [String](#string)
  * EC2SecurityGroupOwnerId **required** [String](#string)

### AuthorizeCacheSecurityGroupIngressResult
* AuthorizeCacheSecurityGroupIngressResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### AutomaticFailoverStatus
* AutomaticFailoverStatus `string` (values: enabled, disabled, enabling, disabling)

### AvailabilityZone
* AvailabilityZone `object`: Describes an Availability Zone in which the cluster is launched.
  * Name [String](#string)

### AvailabilityZonesList
* AvailabilityZonesList `array`
  * items [String](#string)

### AwsQueryErrorMessage
* AwsQueryErrorMessage `string`

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### CacheCluster
* CacheCluster `object`: Contains all of the attributes of a specific cluster.
  * AtRestEncryptionEnabled [BooleanOptional](#booleanoptional)
  * AuthTokenEnabled [BooleanOptional](#booleanoptional)
  * AutoMinorVersionUpgrade [Boolean](#boolean)
  * CacheClusterCreateTime [TStamp](#tstamp)
  * CacheClusterId [String](#string)
  * CacheClusterStatus [String](#string)
  * CacheNodeType [String](#string)
  * CacheNodes [CacheNodeList](#cachenodelist)
  * CacheParameterGroup [CacheParameterGroupStatus](#cacheparametergroupstatus)
  * CacheSecurityGroups [CacheSecurityGroupMembershipList](#cachesecuritygroupmembershiplist)
  * CacheSubnetGroupName [String](#string)
  * ClientDownloadLandingPage [String](#string)
  * ConfigurationEndpoint [Endpoint](#endpoint)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NotificationConfiguration [NotificationConfiguration](#notificationconfiguration)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
  * PreferredAvailabilityZone [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationGroupId [String](#string)
  * SecurityGroups [SecurityGroupMembershipList](#securitygroupmembershiplist)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * TransitEncryptionEnabled [BooleanOptional](#booleanoptional)

### CacheClusterAlreadyExistsFault
* CacheClusterAlreadyExistsFault `object`: You already have a cluster with the given identifier.

### CacheClusterList
* CacheClusterList `array`
  * items [CacheCluster](#cachecluster)

### CacheClusterMessage
* CacheClusterMessage `object`: Represents the output of a <code>DescribeCacheClusters</code> operation.
  * CacheClusters [CacheClusterList](#cacheclusterlist)
  * Marker [String](#string)

### CacheClusterNotFoundFault
* CacheClusterNotFoundFault `object`: The requested cluster ID does not refer to an existing cluster.

### CacheEngineVersion
* CacheEngineVersion `object`: Provides all of the details about a particular cache engine version.
  * CacheEngineDescription [String](#string)
  * CacheEngineVersionDescription [String](#string)
  * CacheParameterGroupFamily [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)

### CacheEngineVersionList
* CacheEngineVersionList `array`
  * items [CacheEngineVersion](#cacheengineversion)

### CacheEngineVersionMessage
* CacheEngineVersionMessage `object`: Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
  * CacheEngineVersions [CacheEngineVersionList](#cacheengineversionlist)
  * Marker [String](#string)

### CacheNode
* CacheNode `object`: <p>Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster's protocol-compliant caching software - either Memcached or Redis.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Notes:</b> </p> <ul> <li> <p>All T2 instances are created in an Amazon Virtual Private Cloud (Amazon VPC).</p> </li> <li> <p>Redis (cluster mode disabled): Redis backup/restore is not supported on T1 and T2 instances. </p> </li> <li> <p>Redis (cluster mode enabled): Backup/restore is not supported on T1 instances.</p> </li> <li> <p>Redis Append-only files (AOF) functionality is not supported for T1 or T2 instances.</p> </li> </ul> <p>For a complete listing of node types and specifications, see <a href="http://aws.amazon.com/elasticache/details">Amazon ElastiCache Product Features and Details</a> and either <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/CacheParameterGroups.Memcached.html#ParameterGroups.Memcached.NodeSpecific">Cache Node Type-Specific Parameters for Memcached</a> or <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/CacheParameterGroups.Redis.html#ParameterGroups.Redis.NodeSpecific">Cache Node Type-Specific Parameters for Redis</a>.</p>
  * CacheNodeCreateTime [TStamp](#tstamp)
  * CacheNodeId [String](#string)
  * CacheNodeStatus [String](#string)
  * CustomerAvailabilityZone [String](#string)
  * Endpoint [Endpoint](#endpoint)
  * ParameterGroupStatus [String](#string)
  * SourceCacheNodeId [String](#string)

### CacheNodeIdsList
* CacheNodeIdsList `array`
  * items [String](#string)

### CacheNodeList
* CacheNodeList `array`
  * items [CacheNode](#cachenode)

### CacheNodeTypeSpecificParameter
* CacheNodeTypeSpecificParameter `object`: A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
  * AllowedValues [String](#string)
  * CacheNodeTypeSpecificValues [CacheNodeTypeSpecificValueList](#cachenodetypespecificvaluelist)
  * ChangeType [ChangeType](#changetype)
  * DataType [String](#string)
  * Description [String](#string)
  * IsModifiable [Boolean](#boolean)
  * MinimumEngineVersion [String](#string)
  * ParameterName [String](#string)
  * Source [String](#string)

### CacheNodeTypeSpecificParametersList
* CacheNodeTypeSpecificParametersList `array`
  * items [CacheNodeTypeSpecificParameter](#cachenodetypespecificparameter)

### CacheNodeTypeSpecificValue
* CacheNodeTypeSpecificValue `object`: A value that applies only to a certain cache node type.
  * CacheNodeType [String](#string)
  * Value [String](#string)

### CacheNodeTypeSpecificValueList
* CacheNodeTypeSpecificValueList `array`
  * items [CacheNodeTypeSpecificValue](#cachenodetypespecificvalue)

### CacheParameterGroup
* CacheParameterGroup `object`: Represents the output of a <code>CreateCacheParameterGroup</code> operation.
  * CacheParameterGroupFamily [String](#string)
  * CacheParameterGroupName [String](#string)
  * Description [String](#string)

### CacheParameterGroupAlreadyExistsFault
* CacheParameterGroupAlreadyExistsFault `object`: A cache parameter group with the requested name already exists.

### CacheParameterGroupDetails
* CacheParameterGroupDetails `object`: Represents the output of a <code>DescribeCacheParameters</code> operation.
  * CacheNodeTypeSpecificParameters [CacheNodeTypeSpecificParametersList](#cachenodetypespecificparameterslist)
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### CacheParameterGroupList
* CacheParameterGroupList `array`
  * items [CacheParameterGroup](#cacheparametergroup)

### CacheParameterGroupNameMessage
* CacheParameterGroupNameMessage `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
  * CacheParameterGroupName [String](#string)

### CacheParameterGroupNotFoundFault
* CacheParameterGroupNotFoundFault `object`: The requested cache parameter group name does not refer to an existing cache parameter group.

### CacheParameterGroupQuotaExceededFault
* CacheParameterGroupQuotaExceededFault `object`: The request cannot be processed because it would exceed the maximum number of cache security groups.

### CacheParameterGroupStatus
* CacheParameterGroupStatus `object`: Status of the cache parameter group.
  * CacheNodeIdsToReboot [CacheNodeIdsList](#cachenodeidslist)
  * CacheParameterGroupName [String](#string)
  * ParameterApplyStatus [String](#string)

### CacheParameterGroupsMessage
* CacheParameterGroupsMessage `object`: Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
  * CacheParameterGroups [CacheParameterGroupList](#cacheparametergrouplist)
  * Marker [String](#string)

### CacheSecurityGroup
* CacheSecurityGroup `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
  * CacheSecurityGroupName [String](#string)
  * Description [String](#string)
  * EC2SecurityGroups [EC2SecurityGroupList](#ec2securitygrouplist)
  * OwnerId [String](#string)

### CacheSecurityGroupAlreadyExistsFault
* CacheSecurityGroupAlreadyExistsFault `object`: A cache security group with the specified name already exists.

### CacheSecurityGroupMembership
* CacheSecurityGroupMembership `object`: Represents a cluster's status within a particular cache security group.
  * CacheSecurityGroupName [String](#string)
  * Status [String](#string)

### CacheSecurityGroupMembershipList
* CacheSecurityGroupMembershipList `array`
  * items [CacheSecurityGroupMembership](#cachesecuritygroupmembership)

### CacheSecurityGroupMessage
* CacheSecurityGroupMessage `object`: Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
  * CacheSecurityGroups [CacheSecurityGroups](#cachesecuritygroups)
  * Marker [String](#string)

### CacheSecurityGroupNameList
* CacheSecurityGroupNameList `array`
  * items [String](#string)

### CacheSecurityGroupNotFoundFault
* CacheSecurityGroupNotFoundFault `object`: The requested cache security group name does not refer to an existing cache security group.

### CacheSecurityGroupQuotaExceededFault
* CacheSecurityGroupQuotaExceededFault `object`: The request cannot be processed because it would exceed the allowed number of cache security groups.

### CacheSecurityGroups
* CacheSecurityGroups `array`
  * items [CacheSecurityGroup](#cachesecuritygroup)

### CacheSubnetGroup
* CacheSubnetGroup `object`: <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
  * CacheSubnetGroupDescription [String](#string)
  * CacheSubnetGroupName [String](#string)
  * Subnets [SubnetList](#subnetlist)
  * VpcId [String](#string)

### CacheSubnetGroupAlreadyExistsFault
* CacheSubnetGroupAlreadyExistsFault `object`: The requested cache subnet group name is already in use by an existing cache subnet group.

### CacheSubnetGroupInUse
* CacheSubnetGroupInUse `object`: The requested cache subnet group is currently in use.

### CacheSubnetGroupMessage
* CacheSubnetGroupMessage `object`: Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
  * CacheSubnetGroups [CacheSubnetGroups](#cachesubnetgroups)
  * Marker [String](#string)

### CacheSubnetGroupNotFoundFault
* CacheSubnetGroupNotFoundFault `object`: The requested cache subnet group name does not refer to an existing cache subnet group.

### CacheSubnetGroupQuotaExceededFault
* CacheSubnetGroupQuotaExceededFault `object`: The request cannot be processed because it would exceed the allowed number of cache subnet groups.

### CacheSubnetGroups
* CacheSubnetGroups `array`
  * items [CacheSubnetGroup](#cachesubnetgroup)

### CacheSubnetQuotaExceededFault
* CacheSubnetQuotaExceededFault `object`: The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.

### ChangeType
* ChangeType `string` (values: immediate, requires-reboot)

### ClusterIdList
* ClusterIdList `array`
  * items [String](#string)

### ClusterQuotaForCustomerExceededFault
* ClusterQuotaForCustomerExceededFault `object`: The request cannot be processed because it would exceed the allowed number of clusters per customer.

### CopySnapshotMessage
* CopySnapshotMessage `object`: Represents the input of a <code>CopySnapshotMessage</code> operation.
  * SourceSnapshotName **required** [String](#string)
  * TargetBucket [String](#string)
  * TargetSnapshotName **required** [String](#string)

### CopySnapshotResult
* CopySnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CreateCacheClusterMessage
* CreateCacheClusterMessage `object`: Represents the input of a CreateCacheCluster operation.
  * AZMode [AZMode](#azmode)
  * AuthToken [String](#string)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * CacheClusterId **required** [String](#string)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * CacheSubnetGroupName [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NotificationTopicArn [String](#string)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredAvailabilityZone [String](#string)
  * PreferredAvailabilityZones [PreferredAvailabilityZoneList](#preferredavailabilityzonelist)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationGroupId [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotArns [SnapshotArnsList](#snapshotarnslist)
  * SnapshotName [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * Tags [TagList](#taglist)

### CreateCacheClusterResult
* CreateCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### CreateCacheParameterGroupMessage
* CreateCacheParameterGroupMessage `object`: Represents the input of a <code>CreateCacheParameterGroup</code> operation.
  * CacheParameterGroupFamily **required** [String](#string)
  * CacheParameterGroupName **required** [String](#string)
  * Description **required** [String](#string)

### CreateCacheParameterGroupResult
* CreateCacheParameterGroupResult `object`
  * CacheParameterGroup [CacheParameterGroup](#cacheparametergroup)

### CreateCacheSecurityGroupMessage
* CreateCacheSecurityGroupMessage `object`: Represents the input of a <code>CreateCacheSecurityGroup</code> operation.
  * CacheSecurityGroupName **required** [String](#string)
  * Description **required** [String](#string)

### CreateCacheSecurityGroupResult
* CreateCacheSecurityGroupResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### CreateCacheSubnetGroupMessage
* CreateCacheSubnetGroupMessage `object`: Represents the input of a <code>CreateCacheSubnetGroup</code> operation.
  * CacheSubnetGroupDescription **required** [String](#string)
  * CacheSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

### CreateCacheSubnetGroupResult
* CreateCacheSubnetGroupResult `object`
  * CacheSubnetGroup [CacheSubnetGroup](#cachesubnetgroup)

### CreateReplicationGroupMessage
* CreateReplicationGroupMessage `object`: Represents the input of a <code>CreateReplicationGroup</code> operation.
  * AtRestEncryptionEnabled [BooleanOptional](#booleanoptional)
  * AuthToken [String](#string)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomaticFailoverEnabled [BooleanOptional](#booleanoptional)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * CacheSubnetGroupName [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NodeGroupConfiguration [NodeGroupConfigurationList](#nodegroupconfigurationlist)
  * NotificationTopicArn [String](#string)
  * NumCacheClusters [IntegerOptional](#integeroptional)
  * NumNodeGroups [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredCacheClusterAZs [AvailabilityZonesList](#availabilityzoneslist)
  * PreferredMaintenanceWindow [String](#string)
  * PrimaryClusterId [String](#string)
  * ReplicasPerNodeGroup [IntegerOptional](#integeroptional)
  * ReplicationGroupDescription **required** [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotArns [SnapshotArnsList](#snapshotarnslist)
  * SnapshotName [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * Tags [TagList](#taglist)
  * TransitEncryptionEnabled [BooleanOptional](#booleanoptional)

### CreateReplicationGroupResult
* CreateReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### CreateSnapshotMessage
* CreateSnapshotMessage `object`: Represents the input of a <code>CreateSnapshot</code> operation.
  * CacheClusterId [String](#string)
  * ReplicationGroupId [String](#string)
  * SnapshotName **required** [String](#string)

### CreateSnapshotResult
* CreateSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### DeleteCacheClusterMessage
* DeleteCacheClusterMessage `object`: Represents the input of a <code>DeleteCacheCluster</code> operation.
  * CacheClusterId **required** [String](#string)
  * FinalSnapshotIdentifier [String](#string)

### DeleteCacheClusterResult
* DeleteCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### DeleteCacheParameterGroupMessage
* DeleteCacheParameterGroupMessage `object`: Represents the input of a <code>DeleteCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required** [String](#string)

### DeleteCacheSecurityGroupMessage
* DeleteCacheSecurityGroupMessage `object`: Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.
  * CacheSecurityGroupName **required** [String](#string)

### DeleteCacheSubnetGroupMessage
* DeleteCacheSubnetGroupMessage `object`: Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.
  * CacheSubnetGroupName **required** [String](#string)

### DeleteReplicationGroupMessage
* DeleteReplicationGroupMessage `object`: Represents the input of a <code>DeleteReplicationGroup</code> operation.
  * FinalSnapshotIdentifier [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * RetainPrimaryCluster [BooleanOptional](#booleanoptional)

### DeleteReplicationGroupResult
* DeleteReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### DeleteSnapshotMessage
* DeleteSnapshotMessage `object`: Represents the input of a <code>DeleteSnapshot</code> operation.
  * SnapshotName **required** [String](#string)

### DeleteSnapshotResult
* DeleteSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### DescribeCacheClustersMessage
* DescribeCacheClustersMessage `object`: Represents the input of a <code>DescribeCacheClusters</code> operation.
  * CacheClusterId [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ShowCacheClustersNotInReplicationGroups [BooleanOptional](#booleanoptional)
  * ShowCacheNodeInfo [BooleanOptional](#booleanoptional)

### DescribeCacheEngineVersionsMessage
* DescribeCacheEngineVersionsMessage `object`: Represents the input of a <code>DescribeCacheEngineVersions</code> operation.
  * CacheParameterGroupFamily [String](#string)
  * DefaultOnly [Boolean](#boolean)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeCacheParameterGroupsMessage
* DescribeCacheParameterGroupsMessage `object`: Represents the input of a <code>DescribeCacheParameterGroups</code> operation.
  * CacheParameterGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeCacheParametersMessage
* DescribeCacheParametersMessage `object`: Represents the input of a <code>DescribeCacheParameters</code> operation.
  * CacheParameterGroupName **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

### DescribeCacheSecurityGroupsMessage
* DescribeCacheSecurityGroupsMessage `object`: Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.
  * CacheSecurityGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeCacheSubnetGroupsMessage
* DescribeCacheSubnetGroupsMessage `object`: Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.
  * CacheSubnetGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEngineDefaultParametersMessage
* DescribeEngineDefaultParametersMessage `object`: Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.
  * CacheParameterGroupFamily **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEngineDefaultParametersResult
* DescribeEngineDefaultParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEventsMessage
* DescribeEventsMessage `object`: Represents the input of a <code>DescribeEvents</code> operation.
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

### DescribeReplicationGroupsMessage
* DescribeReplicationGroupsMessage `object`: Represents the input of a <code>DescribeReplicationGroups</code> operation.
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationGroupId [String](#string)

### DescribeReservedCacheNodesMessage
* DescribeReservedCacheNodesMessage `object`: Represents the input of a <code>DescribeReservedCacheNodes</code> operation.
  * CacheNodeType [String](#string)
  * Duration [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedCacheNodeId [String](#string)
  * ReservedCacheNodesOfferingId [String](#string)

### DescribeReservedCacheNodesOfferingsMessage
* DescribeReservedCacheNodesOfferingsMessage `object`: Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.
  * CacheNodeType [String](#string)
  * Duration [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedCacheNodesOfferingId [String](#string)

### DescribeSnapshotsListMessage
* DescribeSnapshotsListMessage `object`: Represents the output of a <code>DescribeSnapshots</code> operation.
  * Marker [String](#string)
  * Snapshots [SnapshotList](#snapshotlist)

### DescribeSnapshotsMessage
* DescribeSnapshotsMessage `object`: Represents the input of a <code>DescribeSnapshotsMessage</code> operation.
  * CacheClusterId [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationGroupId [String](#string)
  * ShowNodeGroupConfig [BooleanOptional](#booleanoptional)
  * SnapshotName [String](#string)
  * SnapshotSource [String](#string)

### Double
* Double `number`

### EC2SecurityGroup
* EC2SecurityGroup `object`: Provides ownership and status information for an Amazon EC2 security group.
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)
  * Status [String](#string)

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items [EC2SecurityGroup](#ec2securitygroup)

### Endpoint
* Endpoint `object`: Represents the information required for client programs to connect to a cache node.
  * Address [String](#string)
  * Port [Integer](#integer)

### EngineDefaults
* EngineDefaults `object`: Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
  * CacheNodeTypeSpecificParameters [CacheNodeTypeSpecificParametersList](#cachenodetypespecificparameterslist)
  * CacheParameterGroupFamily [String](#string)
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### Event
* Event `object`: Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
  * Date [TStamp](#tstamp)
  * Message [String](#string)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)

### EventList
* EventList `array`
  * items [Event](#event)

### EventsMessage
* EventsMessage `object`: Represents the output of a <code>DescribeEvents</code> operation.
  * Events [EventList](#eventlist)
  * Marker [String](#string)

### InsufficientCacheClusterCapacityFault
* InsufficientCacheClusterCapacityFault `object`: The requested cache node type is not available in the specified Availability Zone.

### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidARNFault
* InvalidARNFault `object`: The requested Amazon Resource Name (ARN) does not refer to an existing resource.

### InvalidCacheClusterStateFault
* InvalidCacheClusterStateFault `object`: The requested cluster is not in the <code>available</code> state.

### InvalidCacheParameterGroupStateFault
* InvalidCacheParameterGroupStateFault `object`: The current state of the cache parameter group does not allow the requested operation to occur.

### InvalidCacheSecurityGroupStateFault
* InvalidCacheSecurityGroupStateFault `object`: The current state of the cache security group does not allow deletion.

### InvalidParameterCombinationException
* InvalidParameterCombinationException `object`: Two or more incompatible parameters were specified.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### InvalidParameterValueException
* InvalidParameterValueException `object`: The value for a parameter is invalid.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### InvalidReplicationGroupStateFault
* InvalidReplicationGroupStateFault `object`: The requested replication group is not in the <code>available</code> state.

### InvalidSnapshotStateFault
* InvalidSnapshotStateFault `object`: The current state of the snapshot does not allow the requested operation to occur.

### InvalidSubnet
* InvalidSubnet `object`: An invalid subnet identifier was specified.

### InvalidVPCNetworkStateFault
* InvalidVPCNetworkStateFault `object`: The VPC network is in an invalid state.

### KeyList
* KeyList `array`
  * items [String](#string)

### ListAllowedNodeTypeModificationsMessage
* ListAllowedNodeTypeModificationsMessage `object`: The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.
  * CacheClusterId [String](#string)
  * ReplicationGroupId [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: The input parameters for the <code>ListTagsForResource</code> operation.
  * ResourceName **required** [String](#string)

### ModifyCacheClusterMessage
* ModifyCacheClusterMessage `object`: Represents the input of a <code>ModifyCacheCluster</code> operation.
  * AZMode [AZMode](#azmode)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * CacheClusterId **required** [String](#string)
  * CacheNodeIdsToRemove [CacheNodeIdsList](#cachenodeidslist)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * EngineVersion [String](#string)
  * NewAvailabilityZones [PreferredAvailabilityZoneList](#preferredavailabilityzonelist)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)

### ModifyCacheClusterResult
* ModifyCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### ModifyCacheParameterGroupMessage
* ModifyCacheParameterGroupMessage `object`: Represents the input of a <code>ModifyCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required** [String](#string)
  * ParameterNameValues **required** [ParameterNameValueList](#parameternamevaluelist)

### ModifyCacheSubnetGroupMessage
* ModifyCacheSubnetGroupMessage `object`: Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.
  * CacheSubnetGroupDescription [String](#string)
  * CacheSubnetGroupName **required** [String](#string)
  * SubnetIds [SubnetIdentifierList](#subnetidentifierlist)

### ModifyCacheSubnetGroupResult
* ModifyCacheSubnetGroupResult `object`
  * CacheSubnetGroup [CacheSubnetGroup](#cachesubnetgroup)

### ModifyReplicationGroupMessage
* ModifyReplicationGroupMessage `object`: Represents the input of a <code>ModifyReplicationGroups</code> operation.
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomaticFailoverEnabled [BooleanOptional](#booleanoptional)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSecurityGroupNames [CacheSecurityGroupNameList](#cachesecuritygroupnamelist)
  * EngineVersion [String](#string)
  * NodeGroupId [String](#string)
  * NotificationTopicArn [String](#string)
  * NotificationTopicStatus [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PrimaryClusterId [String](#string)
  * ReplicationGroupDescription [String](#string)
  * ReplicationGroupId **required** [String](#string)
  * SecurityGroupIds [SecurityGroupIdsList](#securitygroupidslist)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * SnapshottingClusterId [String](#string)

### ModifyReplicationGroupResult
* ModifyReplicationGroupResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### ModifyReplicationGroupShardConfigurationMessage
* ModifyReplicationGroupShardConfigurationMessage `object`: Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.
  * ApplyImmediately **required** [Boolean](#boolean)
  * NodeGroupCount **required** [Integer](#integer)
  * NodeGroupsToRemove [NodeGroupsToRemoveList](#nodegroupstoremovelist)
  * ReplicationGroupId **required** [String](#string)
  * ReshardingConfiguration [ReshardingConfigurationList](#reshardingconfigurationlist)

### ModifyReplicationGroupShardConfigurationResult
* ModifyReplicationGroupShardConfigurationResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)

### NodeGroup
* NodeGroup `object`: Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
  * NodeGroupId [String](#string)
  * NodeGroupMembers [NodeGroupMemberList](#nodegroupmemberlist)
  * PrimaryEndpoint [Endpoint](#endpoint)
  * Slots [String](#string)
  * Status [String](#string)

### NodeGroupConfiguration
* NodeGroupConfiguration `object`: Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
  * PrimaryAvailabilityZone [String](#string)
  * ReplicaAvailabilityZones [AvailabilityZonesList](#availabilityzoneslist)
  * ReplicaCount [IntegerOptional](#integeroptional)
  * Slots [String](#string)

### NodeGroupConfigurationList
* NodeGroupConfigurationList `array`
  * items [NodeGroupConfiguration](#nodegroupconfiguration)

### NodeGroupList
* NodeGroupList `array`
  * items [NodeGroup](#nodegroup)

### NodeGroupMember
* NodeGroupMember `object`: Represents a single node within a node group (shard).
  * CacheClusterId [String](#string)
  * CacheNodeId [String](#string)
  * CurrentRole [String](#string)
  * PreferredAvailabilityZone [String](#string)
  * ReadEndpoint [Endpoint](#endpoint)

### NodeGroupMemberList
* NodeGroupMemberList `array`
  * items [NodeGroupMember](#nodegroupmember)

### NodeGroupNotFoundFault
* NodeGroupNotFoundFault `object`: The node group specified by the <code>NodeGroupId</code> parameter could not be found. Please verify that the node group exists and that you spelled the <code>NodeGroupId</code> value correctly.

### NodeGroupsPerReplicationGroupQuotaExceededFault
* NodeGroupsPerReplicationGroupQuotaExceededFault `object`: The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 15

### NodeGroupsToRemoveList
* NodeGroupsToRemoveList `array`
  * items [String](#string)

### NodeQuotaForClusterExceededFault
* NodeQuotaForClusterExceededFault `object`: The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.

### NodeQuotaForCustomerExceededFault
* NodeQuotaForCustomerExceededFault `object`: The request cannot be processed because it would exceed the allowed number of cache nodes per customer.

### NodeSnapshot
* NodeSnapshot `object`: Represents an individual cache node in a snapshot of a cluster.
  * CacheClusterId [String](#string)
  * CacheNodeCreateTime [TStamp](#tstamp)
  * CacheNodeId [String](#string)
  * CacheSize [String](#string)
  * NodeGroupConfiguration [NodeGroupConfiguration](#nodegroupconfiguration)
  * NodeGroupId [String](#string)
  * SnapshotCreateTime [TStamp](#tstamp)

### NodeSnapshotList
* NodeSnapshotList `array`
  * items [NodeSnapshot](#nodesnapshot)

### NodeTypeList
* NodeTypeList `array`
  * items [String](#string)

### NotificationConfiguration
* NotificationConfiguration `object`: Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
  * TopicArn [String](#string)
  * TopicStatus [String](#string)

### Parameter
* Parameter `object`: Describes an individual setting that controls some aspect of ElastiCache behavior.
  * AllowedValues [String](#string)
  * ChangeType [ChangeType](#changetype)
  * DataType [String](#string)
  * Description [String](#string)
  * IsModifiable [Boolean](#boolean)
  * MinimumEngineVersion [String](#string)
  * ParameterName [String](#string)
  * ParameterValue [String](#string)
  * Source [String](#string)

### ParameterNameValue
* ParameterNameValue `object`: Describes a name-value pair that is used to update the value of a parameter.
  * ParameterName [String](#string)
  * ParameterValue [String](#string)

### ParameterNameValueList
* ParameterNameValueList `array`
  * items [ParameterNameValue](#parameternamevalue)

### ParametersList
* ParametersList `array`
  * items [Parameter](#parameter)

### PendingAutomaticFailoverStatus
* PendingAutomaticFailoverStatus `string` (values: enabled, disabled)

### PendingModifiedValues
* PendingModifiedValues `object`: A group of settings that are applied to the cluster in the future, or that are currently being applied.
  * CacheNodeIdsToRemove [CacheNodeIdsList](#cachenodeidslist)
  * CacheNodeType [String](#string)
  * EngineVersion [String](#string)
  * NumCacheNodes [IntegerOptional](#integeroptional)

### PreferredAvailabilityZoneList
* PreferredAvailabilityZoneList `array`
  * items [String](#string)

### PurchaseReservedCacheNodesOfferingMessage
* PurchaseReservedCacheNodesOfferingMessage `object`: Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.
  * CacheNodeCount [IntegerOptional](#integeroptional)
  * ReservedCacheNodeId [String](#string)
  * ReservedCacheNodesOfferingId **required** [String](#string)

### PurchaseReservedCacheNodesOfferingResult
* PurchaseReservedCacheNodesOfferingResult `object`
  * ReservedCacheNode [ReservedCacheNode](#reservedcachenode)

### RebootCacheClusterMessage
* RebootCacheClusterMessage `object`: Represents the input of a <code>RebootCacheCluster</code> operation.
  * CacheClusterId **required** [String](#string)
  * CacheNodeIdsToReboot **required** [CacheNodeIdsList](#cachenodeidslist)

### RebootCacheClusterResult
* RebootCacheClusterResult `object`
  * CacheCluster [CacheCluster](#cachecluster)

### RecurringCharge
* RecurringCharge `object`: Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
  * RecurringChargeAmount [Double](#double)
  * RecurringChargeFrequency [String](#string)

### RecurringChargeList
* RecurringChargeList `array`
  * items [RecurringCharge](#recurringcharge)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: Represents the input of a <code>RemoveTagsFromResource</code> operation.
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

### ReplicationGroup
* ReplicationGroup `object`: Contains all of the attributes of a specific Redis replication group.
  * AtRestEncryptionEnabled [BooleanOptional](#booleanoptional)
  * AuthTokenEnabled [BooleanOptional](#booleanoptional)
  * AutomaticFailover [AutomaticFailoverStatus](#automaticfailoverstatus)
  * CacheNodeType [String](#string)
  * ClusterEnabled [BooleanOptional](#booleanoptional)
  * ConfigurationEndpoint [Endpoint](#endpoint)
  * Description [String](#string)
  * MemberClusters [ClusterIdList](#clusteridlist)
  * NodeGroups [NodeGroupList](#nodegrouplist)
  * PendingModifiedValues [ReplicationGroupPendingModifiedValues](#replicationgrouppendingmodifiedvalues)
  * ReplicationGroupId [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotWindow [String](#string)
  * SnapshottingClusterId [String](#string)
  * Status [String](#string)
  * TransitEncryptionEnabled [BooleanOptional](#booleanoptional)

### ReplicationGroupAlreadyExistsFault
* ReplicationGroupAlreadyExistsFault `object`: The specified replication group already exists.

### ReplicationGroupList
* ReplicationGroupList `array`
  * items [ReplicationGroup](#replicationgroup)

### ReplicationGroupMessage
* ReplicationGroupMessage `object`: Represents the output of a <code>DescribeReplicationGroups</code> operation.
  * Marker [String](#string)
  * ReplicationGroups [ReplicationGroupList](#replicationgrouplist)

### ReplicationGroupNotFoundFault
* ReplicationGroupNotFoundFault `object`: The specified replication group does not exist.

### ReplicationGroupPendingModifiedValues
* ReplicationGroupPendingModifiedValues `object`: The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
  * AutomaticFailoverStatus [PendingAutomaticFailoverStatus](#pendingautomaticfailoverstatus)
  * PrimaryClusterId [String](#string)
  * Resharding [ReshardingStatus](#reshardingstatus)

### ReservedCacheNode
* ReservedCacheNode `object`: Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
  * CacheNodeCount [Integer](#integer)
  * CacheNodeType [String](#string)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedCacheNodeId [String](#string)
  * ReservedCacheNodesOfferingId [String](#string)
  * StartTime [TStamp](#tstamp)
  * State [String](#string)
  * UsagePrice [Double](#double)

### ReservedCacheNodeAlreadyExistsFault
* ReservedCacheNodeAlreadyExistsFault `object`: You already have a reservation with the given identifier.

### ReservedCacheNodeList
* ReservedCacheNodeList `array`
  * items [ReservedCacheNode](#reservedcachenode)

### ReservedCacheNodeMessage
* ReservedCacheNodeMessage `object`: Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
  * Marker [String](#string)
  * ReservedCacheNodes [ReservedCacheNodeList](#reservedcachenodelist)

### ReservedCacheNodeNotFoundFault
* ReservedCacheNodeNotFoundFault `object`: The requested reserved cache node was not found.

### ReservedCacheNodeQuotaExceededFault
* ReservedCacheNodeQuotaExceededFault `object`: The request cannot be processed because it would exceed the user's cache node quota.

### ReservedCacheNodesOffering
* ReservedCacheNodesOffering `object`: Describes all of the attributes of a reserved cache node offering.
  * CacheNodeType [String](#string)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedCacheNodesOfferingId [String](#string)
  * UsagePrice [Double](#double)

### ReservedCacheNodesOfferingList
* ReservedCacheNodesOfferingList `array`
  * items [ReservedCacheNodesOffering](#reservedcachenodesoffering)

### ReservedCacheNodesOfferingMessage
* ReservedCacheNodesOfferingMessage `object`: Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
  * Marker [String](#string)
  * ReservedCacheNodesOfferings [ReservedCacheNodesOfferingList](#reservedcachenodesofferinglist)

### ReservedCacheNodesOfferingNotFoundFault
* ReservedCacheNodesOfferingNotFoundFault `object`: The requested cache node offering does not exist.

### ResetCacheParameterGroupMessage
* ResetCacheParameterGroupMessage `object`: Represents the input of a <code>ResetCacheParameterGroup</code> operation.
  * CacheParameterGroupName **required** [String](#string)
  * ParameterNameValues [ParameterNameValueList](#parameternamevaluelist)
  * ResetAllParameters [Boolean](#boolean)

### ReshardingConfiguration
* ReshardingConfiguration `object`: A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.
  * PreferredAvailabilityZones [AvailabilityZonesList](#availabilityzoneslist)

### ReshardingConfigurationList
* ReshardingConfigurationList `array`
  * items [ReshardingConfiguration](#reshardingconfiguration)

### ReshardingStatus
* ReshardingStatus `object`: The status of an online resharding operation.
  * SlotMigration [SlotMigration](#slotmigration)

### RevokeCacheSecurityGroupIngressMessage
* RevokeCacheSecurityGroupIngressMessage `object`: Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.
  * CacheSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName **required** [String](#string)
  * EC2SecurityGroupOwnerId **required** [String](#string)

### RevokeCacheSecurityGroupIngressResult
* RevokeCacheSecurityGroupIngressResult `object`
  * CacheSecurityGroup [CacheSecurityGroup](#cachesecuritygroup)

### SecurityGroupIdsList
* SecurityGroupIdsList `array`
  * items [String](#string)

### SecurityGroupMembership
* SecurityGroupMembership `object`: Represents a single cache security group and its status.
  * SecurityGroupId [String](#string)
  * Status [String](#string)

### SecurityGroupMembershipList
* SecurityGroupMembershipList `array`
  * items [SecurityGroupMembership](#securitygroupmembership)

### SlotMigration
* SlotMigration `object`: Represents the progress of an online resharding operation.
  * ProgressPercentage [Double](#double)

### Snapshot
* Snapshot `object`: Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
  * AutoMinorVersionUpgrade [Boolean](#boolean)
  * AutomaticFailover [AutomaticFailoverStatus](#automaticfailoverstatus)
  * CacheClusterCreateTime [TStamp](#tstamp)
  * CacheClusterId [String](#string)
  * CacheNodeType [String](#string)
  * CacheParameterGroupName [String](#string)
  * CacheSubnetGroupName [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * NodeSnapshots [NodeSnapshotList](#nodesnapshotlist)
  * NumCacheNodes [IntegerOptional](#integeroptional)
  * NumNodeGroups [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredAvailabilityZone [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationGroupDescription [String](#string)
  * ReplicationGroupId [String](#string)
  * SnapshotName [String](#string)
  * SnapshotRetentionLimit [IntegerOptional](#integeroptional)
  * SnapshotSource [String](#string)
  * SnapshotStatus [String](#string)
  * SnapshotWindow [String](#string)
  * TopicArn [String](#string)
  * VpcId [String](#string)

### SnapshotAlreadyExistsFault
* SnapshotAlreadyExistsFault `object`: You already have a snapshot with the given name.

### SnapshotArnsList
* SnapshotArnsList `array`
  * items [String](#string)

### SnapshotFeatureNotSupportedFault
* SnapshotFeatureNotSupportedFault `object`: <p>You attempted one of the following operations:</p> <ul> <li> <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache node.</p> </li> <li> <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p> </li> </ul> <p>Neither of these are supported by ElastiCache.</p>

### SnapshotList
* SnapshotList `array`
  * items [Snapshot](#snapshot)

### SnapshotNotFoundFault
* SnapshotNotFoundFault `object`: The requested snapshot name does not refer to an existing snapshot.

### SnapshotQuotaExceededFault
* SnapshotQuotaExceededFault `object`: The request cannot be processed because it would exceed the maximum number of snapshots.

### SourceType
* SourceType `string` (values: cache-cluster, cache-parameter-group, cache-security-group, cache-subnet-group, replication-group)

### String
* String `string`

### Subnet
* Subnet `object`: Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
  * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
  * SubnetIdentifier [String](#string)

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetInUse
* SubnetInUse `object`: The requested subnet is being used by another cache subnet group.

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### TStamp
* TStamp `string`

### Tag
* Tag `object`: A cost allocation Tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. A tag with a null Value is permitted.
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagListMessage
* TagListMessage `object`: Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
  * TagList [TagList](#taglist)

### TagNotFoundFault
* TagNotFoundFault `object`: The requested tag was not found on this resource.

### TagQuotaPerResourceExceeded
* TagQuotaPerResourceExceeded `object`: The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.

### TestFailoverMessage
* TestFailoverMessage `object`
  * NodeGroupId **required** [String](#string)
  * ReplicationGroupId **required** [String](#string)

### TestFailoverNotAvailableFault
* TestFailoverNotAvailableFault `object`

### TestFailoverResult
* TestFailoverResult `object`
  * ReplicationGroup [ReplicationGroup](#replicationgroup)


