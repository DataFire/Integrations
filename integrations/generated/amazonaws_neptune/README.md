# @datafire/amazonaws_neptune

Client library for Amazon Neptune

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_neptune
```
```js
let amazonaws_neptune = require('@datafire/amazonaws_neptune').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Neptune</fullname> <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security.</p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p>

## Actions

### AddRoleToDBCluster



```js
amazonaws_neptune.AddRoleToDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * RoleArn **required** `string`
  * FeatureName `string`

#### Output
*Output schema unknown*

### AddRoleToDBCluster



```js
amazonaws_neptune.AddRoleToDBCluster({
  "DBClusterIdentifier": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

#### Output
*Output schema unknown*

### AddSourceIdentifierToSubscription



```js
amazonaws_neptune.AddSourceIdentifierToSubscription({
  "SubscriptionName": "",
  "SourceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** `string`
  * SourceIdentifier **required** `string`

#### Output
* output [AddSourceIdentifierToSubscriptionResult](#addsourceidentifiertosubscriptionresult)

### AddSourceIdentifierToSubscription



```js
amazonaws_neptune.AddSourceIdentifierToSubscription({
  "SubscriptionName": null,
  "SourceIdentifier": null
}, context)
```

#### Input
* input `object`
  * SourceIdentifier **required**
  * SubscriptionName **required**

#### Output
* output [AddSourceIdentifierToSubscriptionResult](#addsourceidentifiertosubscriptionresult)

### AddTagsToResource



```js
amazonaws_neptune.AddTagsToResource({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`
  * Tags **required** `array`

#### Output
*Output schema unknown*

### AddTagsToResource



```js
amazonaws_neptune.AddTagsToResource({
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
*Output schema unknown*

### ApplyPendingMaintenanceAction



```js
amazonaws_neptune.ApplyPendingMaintenanceAction({
  "ResourceIdentifier": "",
  "ApplyAction": "",
  "OptInType": ""
}, context)
```

#### Input
* input `object`
  * ResourceIdentifier **required** `string`
  * ApplyAction **required** `string`
  * OptInType **required** `string`

#### Output
* output [ApplyPendingMaintenanceActionResult](#applypendingmaintenanceactionresult)

### ApplyPendingMaintenanceAction



```js
amazonaws_neptune.ApplyPendingMaintenanceAction({
  "ResourceIdentifier": null,
  "ApplyAction": null,
  "OptInType": null
}, context)
```

#### Input
* input `object`
  * ApplyAction **required**
  * OptInType **required**
  * ResourceIdentifier **required**

#### Output
* output [ApplyPendingMaintenanceActionResult](#applypendingmaintenanceactionresult)

### CopyDBClusterParameterGroup



```js
amazonaws_neptune.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * SourceDBClusterParameterGroupIdentifier **required** `string`
  * TargetDBClusterParameterGroupIdentifier **required** `string`
  * TargetDBClusterParameterGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CopyDBClusterParameterGroupResult](#copydbclusterparametergroupresult)

### CopyDBClusterParameterGroup



```js
amazonaws_neptune.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

#### Output
* output [CopyDBClusterParameterGroupResult](#copydbclusterparametergroupresult)

### CopyDBClusterSnapshot



```js
amazonaws_neptune.CopyDBClusterSnapshot({
  "SourceDBClusterSnapshotIdentifier": "",
  "TargetDBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceDBClusterSnapshotIdentifier **required** `string`
  * TargetDBClusterSnapshotIdentifier **required** `string`
  * KmsKeyId `string`
  * PreSignedUrl `string`
  * CopyTags `boolean`
  * Tags `array`

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBClusterSnapshot



```js
amazonaws_neptune.CopyDBClusterSnapshot({
  "SourceDBClusterSnapshotIdentifier": null,
  "TargetDBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * CopyTags
  * KmsKeyId
  * PreSignedUrl
  * SourceDBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterSnapshotIdentifier **required**

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBParameterGroup



```js
amazonaws_neptune.CopyDBParameterGroup({
  "SourceDBParameterGroupIdentifier": "",
  "TargetDBParameterGroupIdentifier": "",
  "TargetDBParameterGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * SourceDBParameterGroupIdentifier **required** `string`
  * TargetDBParameterGroupIdentifier **required** `string`
  * TargetDBParameterGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CopyDBParameterGroupResult](#copydbparametergroupresult)

### CopyDBParameterGroup



```js
amazonaws_neptune.CopyDBParameterGroup({
  "SourceDBParameterGroupIdentifier": null,
  "TargetDBParameterGroupIdentifier": null,
  "TargetDBParameterGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceDBParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBParameterGroupDescription **required**
  * TargetDBParameterGroupIdentifier **required**

#### Output
* output [CopyDBParameterGroupResult](#copydbparametergroupresult)

### CreateDBCluster



```js
amazonaws_neptune.CreateDBCluster({
  "DBClusterIdentifier": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZones `array`
  * BackupRetentionPeriod `integer`
  * CharacterSetName `string`
  * DatabaseName `string`
  * DBClusterIdentifier **required** `string`
  * DBClusterParameterGroupName `string`
  * VpcSecurityGroupIds `array`
  * DBSubnetGroupName `string`
  * Engine **required** `string`
  * EngineVersion `string`
  * Port `integer`
  * MasterUsername `string`
  * MasterUserPassword `string`
  * OptionGroupName `string`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * ReplicationSourceIdentifier `string`
  * Tags `array`
  * StorageEncrypted `boolean`
  * KmsKeyId `string`
  * PreSignedUrl `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBCluster



```js
amazonaws_neptune.CreateDBCluster({
  "DBClusterIdentifier": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * CharacterSetName
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword
  * MasterUsername
  * OptionGroupName
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReplicationSourceIdentifier
  * StorageEncrypted
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBClusterEndpoint



```js
amazonaws_neptune.CreateDBClusterEndpoint({
  "DBClusterIdentifier": "",
  "DBClusterEndpointIdentifier": "",
  "EndpointType": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * DBClusterEndpointIdentifier **required** `string`
  * EndpointType **required** `string`
  * StaticMembers `array`
  * ExcludedMembers `array`
  * Tags `array`

#### Output
* output [CreateDBClusterEndpointOutput](#createdbclusterendpointoutput)

### CreateDBClusterEndpoint



```js
amazonaws_neptune.CreateDBClusterEndpoint({
  "DBClusterIdentifier": null,
  "DBClusterEndpointIdentifier": null,
  "EndpointType": null
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required**
  * DBClusterIdentifier **required**
  * EndpointType **required**
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBClusterEndpointOutput](#createdbclusterendpointoutput)

### CreateDBClusterParameterGroup



```js
amazonaws_neptune.CreateDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "DBParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * DBParameterGroupFamily **required** `string`
  * Description **required** `string`
  * Tags `array`

#### Output
* output [CreateDBClusterParameterGroupResult](#createdbclusterparametergroupresult)

### CreateDBClusterParameterGroup



```js
amazonaws_neptune.CreateDBClusterParameterGroup({
  "DBClusterParameterGroupName": null,
  "DBParameterGroupFamily": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * DBParameterGroupFamily **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBClusterParameterGroupResult](#createdbclusterparametergroupresult)

### CreateDBClusterSnapshot



```js
amazonaws_neptune.CreateDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": "",
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`
  * DBClusterIdentifier **required** `string`
  * Tags `array`

#### Output
* output [CreateDBClusterSnapshotResult](#createdbclustersnapshotresult)

### CreateDBClusterSnapshot



```js
amazonaws_neptune.CreateDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": null,
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * DBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBClusterSnapshotResult](#createdbclustersnapshotresult)

### CreateDBInstance



```js
amazonaws_neptune.CreateDBInstance({
  "DBInstanceIdentifier": "",
  "DBInstanceClass": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * DBName `string`
  * DBInstanceIdentifier **required** `string`
  * AllocatedStorage `integer`
  * DBInstanceClass **required** `string`
  * Engine **required** `string`
  * MasterUsername `string`
  * MasterUserPassword `string`
  * DBSecurityGroups `array`
  * VpcSecurityGroupIds `array`
  * AvailabilityZone `string`
  * DBSubnetGroupName `string`
  * PreferredMaintenanceWindow `string`
  * DBParameterGroupName `string`
  * BackupRetentionPeriod `integer`
  * PreferredBackupWindow `string`
  * Port `integer`
  * MultiAZ `boolean`
  * EngineVersion `string`
  * AutoMinorVersionUpgrade `boolean`
  * LicenseModel `string`
  * Iops `integer`
  * OptionGroupName `string`
  * CharacterSetName `string`
  * PubliclyAccessible `boolean`
  * Tags `array`
  * DBClusterIdentifier `string`
  * StorageType `string`
  * TdeCredentialArn `string`
  * TdeCredentialPassword `string`
  * StorageEncrypted `boolean`
  * KmsKeyId `string`
  * Domain `string`
  * CopyTagsToSnapshot `boolean`
  * MonitoringInterval `integer`
  * MonitoringRoleArn `string`
  * DomainIAMRoleName `string`
  * PromotionTier `integer`
  * Timezone `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnablePerformanceInsights `boolean`
  * PerformanceInsightsKMSKeyId `string`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`

#### Output
* output [CreateDBInstanceResult](#createdbinstanceresult)

### CreateDBInstance



```js
amazonaws_neptune.CreateDBInstance({
  "DBInstanceIdentifier": null,
  "DBInstanceClass": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * Engine **required**
  * EngineVersion
  * Iops
  * KmsKeyId
  * LicenseModel
  * MasterUserPassword
  * MasterUsername
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * StorageEncrypted
  * StorageType
  * Tags
    * items
      * Key
      * Value
  * TdeCredentialArn
  * TdeCredentialPassword
  * Timezone
  * VpcSecurityGroupIds
    * items

#### Output
* output [CreateDBInstanceResult](#createdbinstanceresult)

### CreateDBParameterGroup



```js
amazonaws_neptune.CreateDBParameterGroup({
  "DBParameterGroupName": "",
  "DBParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** `string`
  * DBParameterGroupFamily **required** `string`
  * Description **required** `string`
  * Tags `array`

#### Output
* output [CreateDBParameterGroupResult](#createdbparametergroupresult)

### CreateDBParameterGroup



```js
amazonaws_neptune.CreateDBParameterGroup({
  "DBParameterGroupName": null,
  "DBParameterGroupFamily": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required**
  * DBParameterGroupName **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBParameterGroupResult](#createdbparametergroupresult)

### CreateDBSubnetGroup



```js
amazonaws_neptune.CreateDBSubnetGroup({
  "DBSubnetGroupName": "",
  "DBSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`
  * DBSubnetGroupDescription **required** `string`
  * SubnetIds **required** `array`
  * Tags `array`

#### Output
* output [CreateDBSubnetGroupResult](#createdbsubnetgroupresult)

### CreateDBSubnetGroup



```js
amazonaws_neptune.CreateDBSubnetGroup({
  "DBSubnetGroupName": null,
  "DBSubnetGroupDescription": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupDescription **required**
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBSubnetGroupResult](#createdbsubnetgroupresult)

### CreateEventSubscription



```js
amazonaws_neptune.CreateEventSubscription({
  "SubscriptionName": "",
  "SnsTopicArn": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** `string`
  * SnsTopicArn **required** `string`
  * SourceType `string`
  * EventCategories `array`
  * SourceIds `array`
  * Enabled `boolean`
  * Tags `array`

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

### CreateEventSubscription



```js
amazonaws_neptune.CreateEventSubscription({
  "SubscriptionName": null,
  "SnsTopicArn": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn **required**
  * SourceIds
    * items
  * SourceType
  * SubscriptionName **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

### DeleteDBCluster



```js
amazonaws_neptune.DeleteDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * SkipFinalSnapshot `boolean`
  * FinalDBSnapshotIdentifier `string`

#### Output
* output [DeleteDBClusterResult](#deletedbclusterresult)

### DeleteDBCluster



```js
amazonaws_neptune.DeleteDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

#### Output
* output [DeleteDBClusterResult](#deletedbclusterresult)

### DeleteDBClusterEndpoint



```js
amazonaws_neptune.DeleteDBClusterEndpoint({
  "DBClusterEndpointIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required** `string`

#### Output
* output [DeleteDBClusterEndpointOutput](#deletedbclusterendpointoutput)

### DeleteDBClusterEndpoint



```js
amazonaws_neptune.DeleteDBClusterEndpoint({
  "DBClusterEndpointIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required**

#### Output
* output [DeleteDBClusterEndpointOutput](#deletedbclusterendpointoutput)

### DeleteDBClusterParameterGroup



```js
amazonaws_neptune.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBClusterParameterGroup



```js
amazonaws_neptune.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**

#### Output
*Output schema unknown*

### DeleteDBClusterSnapshot



```js
amazonaws_neptune.DeleteDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`

#### Output
* output [DeleteDBClusterSnapshotResult](#deletedbclustersnapshotresult)

### DeleteDBClusterSnapshot



```js
amazonaws_neptune.DeleteDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required**

#### Output
* output [DeleteDBClusterSnapshotResult](#deletedbclustersnapshotresult)

### DeleteDBInstance



```js
amazonaws_neptune.DeleteDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * SkipFinalSnapshot `boolean`
  * FinalDBSnapshotIdentifier `string`

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBInstance



```js
amazonaws_neptune.DeleteDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBParameterGroup



```js
amazonaws_neptune.DeleteDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBParameterGroup



```js
amazonaws_neptune.DeleteDBParameterGroup({
  "DBParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required**

#### Output
*Output schema unknown*

### DeleteDBSubnetGroup



```js
amazonaws_neptune.DeleteDBSubnetGroup({
  "DBSubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBSubnetGroup



```js
amazonaws_neptune.DeleteDBSubnetGroup({
  "DBSubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required**

#### Output
*Output schema unknown*

### DeleteEventSubscription



```js
amazonaws_neptune.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** `string`

#### Output
* output [DeleteEventSubscriptionResult](#deleteeventsubscriptionresult)

### DeleteEventSubscription



```js
amazonaws_neptune.DeleteEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required**

#### Output
* output [DeleteEventSubscriptionResult](#deleteeventsubscriptionresult)

### DescribeDBClusterEndpoints



```js
amazonaws_neptune.DescribeDBClusterEndpoints({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * DBClusterEndpointIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterEndpointMessage](#dbclusterendpointmessage)

### DescribeDBClusterEndpoints



```js
amazonaws_neptune.DescribeDBClusterEndpoints({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterEndpointIdentifier
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterEndpointMessage](#dbclusterendpointmessage)

### DescribeDBClusterParameterGroups



```js
amazonaws_neptune.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterParameterGroupsMessage](#dbclusterparametergroupsmessage)

### DescribeDBClusterParameterGroups



```js
amazonaws_neptune.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterParameterGroupsMessage](#dbclusterparametergroupsmessage)

### DescribeDBClusterParameters



```js
amazonaws_neptune.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * Source `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterParameterGroupDetails](#dbclusterparametergroupdetails)

### DescribeDBClusterParameters



```js
amazonaws_neptune.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

#### Output
* output [DBClusterParameterGroupDetails](#dbclusterparametergroupdetails)

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_neptune.DescribeDBClusterSnapshotAttributes({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`

#### Output
* output [DescribeDBClusterSnapshotAttributesResult](#describedbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_neptune.DescribeDBClusterSnapshotAttributes({
  "DBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required**

#### Output
* output [DescribeDBClusterSnapshotAttributesResult](#describedbclustersnapshotattributesresult)

### DescribeDBClusterSnapshots



```js
amazonaws_neptune.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * DBClusterSnapshotIdentifier `string`
  * SnapshotType `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * IncludeShared `boolean`
  * IncludePublic `boolean`

#### Output
* output [DBClusterSnapshotMessage](#dbclustersnapshotmessage)

### DescribeDBClusterSnapshots



```js
amazonaws_neptune.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier
  * DBClusterSnapshotIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludePublic
  * IncludeShared
  * Marker
  * MaxRecords
  * SnapshotType

#### Output
* output [DBClusterSnapshotMessage](#dbclustersnapshotmessage)

### DescribeDBClusters



```js
amazonaws_neptune.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBClusters



```js
amazonaws_neptune.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBEngineVersions



```js
amazonaws_neptune.DescribeDBEngineVersions({}, context)
```

#### Input
* input `object`
  * Engine `string`
  * EngineVersion `string`
  * DBParameterGroupFamily `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * DefaultOnly `boolean`
  * ListSupportedCharacterSets `boolean`
  * ListSupportedTimezones `boolean`

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBEngineVersions



```js
amazonaws_neptune.DescribeDBEngineVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBInstances



```js
amazonaws_neptune.DescribeDBInstances({}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBInstanceMessage](#dbinstancemessage)

### DescribeDBInstances



```js
amazonaws_neptune.DescribeDBInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBInstanceMessage](#dbinstancemessage)

### DescribeDBParameterGroups



```js
amazonaws_neptune.DescribeDBParameterGroups({}, context)
```

#### Input
* input `object`
  * DBParameterGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBParameterGroupsMessage](#dbparametergroupsmessage)

### DescribeDBParameterGroups



```js
amazonaws_neptune.DescribeDBParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBParameterGroupsMessage](#dbparametergroupsmessage)

### DescribeDBParameters



```js
amazonaws_neptune.DescribeDBParameters({
  "DBParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** `string`
  * Source `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBParameterGroupDetails](#dbparametergroupdetails)

### DescribeDBParameters



```js
amazonaws_neptune.DescribeDBParameters({
  "DBParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

#### Output
* output [DBParameterGroupDetails](#dbparametergroupdetails)

### DescribeDBSubnetGroups



```js
amazonaws_neptune.DescribeDBSubnetGroups({}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBSubnetGroupMessage](#dbsubnetgroupmessage)

### DescribeDBSubnetGroups



```js
amazonaws_neptune.DescribeDBSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBSubnetGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBSubnetGroupMessage](#dbsubnetgroupmessage)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_neptune.DescribeEngineDefaultClusterParameters({
  "DBParameterGroupFamily": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required** `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeEngineDefaultClusterParametersResult](#describeenginedefaultclusterparametersresult)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_neptune.DescribeEngineDefaultClusterParameters({
  "DBParameterGroupFamily": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DescribeEngineDefaultClusterParametersResult](#describeenginedefaultclusterparametersresult)

### DescribeEngineDefaultParameters



```js
amazonaws_neptune.DescribeEngineDefaultParameters({
  "DBParameterGroupFamily": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required** `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEngineDefaultParameters



```js
amazonaws_neptune.DescribeEngineDefaultParameters({
  "DBParameterGroupFamily": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEventCategories



```js
amazonaws_neptune.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType `string`
  * Filters `array`

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventCategories



```js
amazonaws_neptune.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * SourceType

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventSubscriptions



```js
amazonaws_neptune.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * SubscriptionName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEventSubscriptions



```js
amazonaws_neptune.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SubscriptionName

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEvents



```js
amazonaws_neptune.DescribeEvents({}, context)
```

#### Input
* input `object`
  * SourceIdentifier `string`
  * SourceType `string`
  * StartTime `string`
  * EndTime `string`
  * Duration `integer`
  * EventCategories `array`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeEvents



```js
amazonaws_neptune.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration
  * EndTime
  * EventCategories
    * items
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_neptune.DescribeOrderableDBInstanceOptions({
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * Engine **required** `string`
  * EngineVersion `string`
  * DBInstanceClass `string`
  * LicenseModel `string`
  * Vpc `boolean`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_neptune.DescribeOrderableDBInstanceOptions({
  "Engine": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass
  * Engine **required**
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LicenseModel
  * Marker
  * MaxRecords
  * Vpc

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribePendingMaintenanceActions



```js
amazonaws_neptune.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * ResourceIdentifier `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribePendingMaintenanceActions



```js
amazonaws_neptune.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ResourceIdentifier

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribeValidDBInstanceModifications



```js
amazonaws_neptune.DescribeValidDBInstanceModifications({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`

#### Output
* output [DescribeValidDBInstanceModificationsResult](#describevaliddbinstancemodificationsresult)

### DescribeValidDBInstanceModifications



```js
amazonaws_neptune.DescribeValidDBInstanceModifications({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**

#### Output
* output [DescribeValidDBInstanceModificationsResult](#describevaliddbinstancemodificationsresult)

### FailoverDBCluster



```js
amazonaws_neptune.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * TargetDBInstanceIdentifier `string`

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### FailoverDBCluster



```js
amazonaws_neptune.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier
  * TargetDBInstanceIdentifier

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### ListTagsForResource



```js
amazonaws_neptune.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`
  * Filters `array`

#### Output
* output [TagListMessage](#taglistmessage)

### ListTagsForResource



```js
amazonaws_neptune.ListTagsForResource({
  "ResourceName": null
}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ResourceName **required**

#### Output
* output [TagListMessage](#taglistmessage)

### ModifyDBCluster



```js
amazonaws_neptune.ModifyDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * NewDBClusterIdentifier `string`
  * ApplyImmediately `boolean`
  * BackupRetentionPeriod `integer`
  * DBClusterParameterGroupName `string`
  * VpcSecurityGroupIds `array`
  * Port `integer`
  * MasterUserPassword `string`
  * OptionGroupName `string`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * CloudwatchLogsExportConfiguration `object`
  * EngineVersion `string`
  * DeletionProtection `boolean`

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBCluster



```js
amazonaws_neptune.ModifyDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DeletionProtection
  * EnableIAMDatabaseAuthentication
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBClusterEndpoint



```js
amazonaws_neptune.ModifyDBClusterEndpoint({
  "DBClusterEndpointIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required** `string`
  * EndpointType `string`
  * StaticMembers `array`
  * ExcludedMembers `array`

#### Output
* output [ModifyDBClusterEndpointOutput](#modifydbclusterendpointoutput)

### ModifyDBClusterEndpoint



```js
amazonaws_neptune.ModifyDBClusterEndpoint({
  "DBClusterEndpointIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required**
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)

#### Output
* output [ModifyDBClusterEndpointOutput](#modifydbclusterendpointoutput)

### ModifyDBClusterParameterGroup



```js
amazonaws_neptune.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * Parameters **required** `array`

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ModifyDBClusterParameterGroup



```js
amazonaws_neptune.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": null,
  "Parameters": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_neptune.ModifyDBClusterSnapshotAttribute({
  "DBClusterSnapshotIdentifier": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`
  * AttributeName **required** `string`
  * ValuesToAdd `array`
  * ValuesToRemove `array`

#### Output
* output [ModifyDBClusterSnapshotAttributeResult](#modifydbclustersnapshotattributeresult)

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_neptune.ModifyDBClusterSnapshotAttribute({
  "DBClusterSnapshotIdentifier": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * DBClusterSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

#### Output
* output [ModifyDBClusterSnapshotAttributeResult](#modifydbclustersnapshotattributeresult)

### ModifyDBInstance



```js
amazonaws_neptune.ModifyDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * AllocatedStorage `integer`
  * DBInstanceClass `string`
  * DBSubnetGroupName `string`
  * DBSecurityGroups `array`
  * VpcSecurityGroupIds `array`
  * ApplyImmediately `boolean`
  * MasterUserPassword `string`
  * DBParameterGroupName `string`
  * BackupRetentionPeriod `integer`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * MultiAZ `boolean`
  * EngineVersion `string`
  * AllowMajorVersionUpgrade `boolean`
  * AutoMinorVersionUpgrade `boolean`
  * LicenseModel `string`
  * Iops `integer`
  * OptionGroupName `string`
  * NewDBInstanceIdentifier `string`
  * StorageType `string`
  * TdeCredentialArn `string`
  * TdeCredentialPassword `string`
  * CACertificateIdentifier `string`
  * Domain `string`
  * CopyTagsToSnapshot `boolean`
  * MonitoringInterval `integer`
  * DBPortNumber `integer`
  * PubliclyAccessible `boolean`
  * MonitoringRoleArn `string`
  * DomainIAMRoleName `string`
  * PromotionTier `integer`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnablePerformanceInsights `boolean`
  * PerformanceInsightsKMSKeyId `string`
  * CloudwatchLogsExportConfiguration `object`
  * DeletionProtection `boolean`

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBInstance



```js
amazonaws_neptune.ModifyDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * AllocatedStorage
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBParameterGroupName
  * DBPortNumber
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * EngineVersion
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NewDBInstanceIdentifier
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * StorageType
  * TdeCredentialArn
  * TdeCredentialPassword
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBParameterGroup



```js
amazonaws_neptune.ModifyDBParameterGroup({
  "DBParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** `string`
  * Parameters **required** `array`

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### ModifyDBParameterGroup



```js
amazonaws_neptune.ModifyDBParameterGroup({
  "DBParameterGroupName": null,
  "Parameters": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### ModifyDBSubnetGroup



```js
amazonaws_neptune.ModifyDBSubnetGroup({
  "DBSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`
  * DBSubnetGroupDescription `string`
  * SubnetIds **required** `array`

#### Output
* output [ModifyDBSubnetGroupResult](#modifydbsubnetgroupresult)

### ModifyDBSubnetGroup



```js
amazonaws_neptune.ModifyDBSubnetGroup({
  "DBSubnetGroupName": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupDescription
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items

#### Output
* output [ModifyDBSubnetGroupResult](#modifydbsubnetgroupresult)

### ModifyEventSubscription



```js
amazonaws_neptune.ModifyEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** `string`
  * SnsTopicArn `string`
  * SourceType `string`
  * EventCategories `array`
  * Enabled `boolean`

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### ModifyEventSubscription



```js
amazonaws_neptune.ModifyEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn
  * SourceType
  * SubscriptionName **required**

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### PromoteReadReplicaDBCluster



```js
amazonaws_neptune.PromoteReadReplicaDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`

#### Output
* output [PromoteReadReplicaDBClusterResult](#promotereadreplicadbclusterresult)

### PromoteReadReplicaDBCluster



```js
amazonaws_neptune.PromoteReadReplicaDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [PromoteReadReplicaDBClusterResult](#promotereadreplicadbclusterresult)

### RebootDBInstance



```js
amazonaws_neptune.RebootDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * ForceFailover `boolean`

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RebootDBInstance



```js
amazonaws_neptune.RebootDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * ForceFailover

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RemoveRoleFromDBCluster



```js
amazonaws_neptune.RemoveRoleFromDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * RoleArn **required** `string`
  * FeatureName `string`

#### Output
*Output schema unknown*

### RemoveRoleFromDBCluster



```js
amazonaws_neptune.RemoveRoleFromDBCluster({
  "DBClusterIdentifier": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

#### Output
*Output schema unknown*

### RemoveSourceIdentifierFromSubscription



```js
amazonaws_neptune.RemoveSourceIdentifierFromSubscription({
  "SubscriptionName": "",
  "SourceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** `string`
  * SourceIdentifier **required** `string`

#### Output
* output [RemoveSourceIdentifierFromSubscriptionResult](#removesourceidentifierfromsubscriptionresult)

### RemoveSourceIdentifierFromSubscription



```js
amazonaws_neptune.RemoveSourceIdentifierFromSubscription({
  "SubscriptionName": null,
  "SourceIdentifier": null
}, context)
```

#### Input
* input `object`
  * SourceIdentifier **required**
  * SubscriptionName **required**

#### Output
* output [RemoveSourceIdentifierFromSubscriptionResult](#removesourceidentifierfromsubscriptionresult)

### RemoveTagsFromResource



```js
amazonaws_neptune.RemoveTagsFromResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`
  * TagKeys **required** `array`

#### Output
*Output schema unknown*

### RemoveTagsFromResource



```js
amazonaws_neptune.RemoveTagsFromResource({
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
*Output schema unknown*

### ResetDBClusterParameterGroup



```js
amazonaws_neptune.ResetDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * ResetAllParameters `boolean`
  * Parameters `array`

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ResetDBClusterParameterGroup



```js
amazonaws_neptune.ResetDBClusterParameterGroup({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ResetDBParameterGroup



```js
amazonaws_neptune.ResetDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** `string`
  * ResetAllParameters `boolean`
  * Parameters `array`

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### ResetDBParameterGroup



```js
amazonaws_neptune.ResetDBParameterGroup({
  "DBParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### RestoreDBClusterFromSnapshot



```js
amazonaws_neptune.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": "",
  "SnapshotIdentifier": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZones `array`
  * DBClusterIdentifier **required** `string`
  * SnapshotIdentifier **required** `string`
  * Engine **required** `string`
  * EngineVersion `string`
  * Port `integer`
  * DBSubnetGroupName `string`
  * DatabaseName `string`
  * OptionGroupName `string`
  * VpcSecurityGroupIds `array`
  * Tags `array`
  * KmsKeyId `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnableCloudwatchLogsExports `array`
  * DBClusterParameterGroupName `string`
  * DeletionProtection `boolean`

#### Output
* output [RestoreDBClusterFromSnapshotResult](#restoredbclusterfromsnapshotresult)

### RestoreDBClusterFromSnapshot



```js
amazonaws_neptune.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": null,
  "SnapshotIdentifier": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * OptionGroupName
  * Port
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterFromSnapshotResult](#restoredbclusterfromsnapshotresult)

### RestoreDBClusterToPointInTime



```js
amazonaws_neptune.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": "",
  "SourceDBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * RestoreType `string`
  * SourceDBClusterIdentifier **required** `string`
  * RestoreToTime `string`
  * UseLatestRestorableTime `boolean`
  * Port `integer`
  * DBSubnetGroupName `string`
  * OptionGroupName `string`
  * VpcSecurityGroupIds `array`
  * Tags `array`
  * KmsKeyId `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnableCloudwatchLogsExports `array`
  * DBClusterParameterGroupName `string`
  * DeletionProtection `boolean`

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### RestoreDBClusterToPointInTime



```js
amazonaws_neptune.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": null,
  "SourceDBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * KmsKeyId
  * OptionGroupName
  * Port
  * RestoreToTime
  * RestoreType
  * SourceDBClusterIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### StartDBCluster



```js
amazonaws_neptune.StartDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`

#### Output
* output [StartDBClusterResult](#startdbclusterresult)

### StartDBCluster



```js
amazonaws_neptune.StartDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StartDBClusterResult](#startdbclusterresult)

### StopDBCluster



```js
amazonaws_neptune.StopDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`

#### Output
* output [StopDBClusterResult](#stopdbclusterresult)

### StopDBCluster



```js
amazonaws_neptune.StopDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StopDBClusterResult](#stopdbclusterresult)



## Definitions

### AddRoleToDBClusterMessage
* AddRoleToDBClusterMessage `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

### AddSourceIdentifierToSubscriptionMessage
* AddSourceIdentifierToSubscriptionMessage `object`
  * SourceIdentifier **required**
  * SubscriptionName **required**

### AddSourceIdentifierToSubscriptionResult
* AddSourceIdentifierToSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

### ApplyMethod
* ApplyMethod `string` (values: immediate, pending-reboot)

### ApplyPendingMaintenanceActionMessage
* ApplyPendingMaintenanceActionMessage `object`
  * ApplyAction **required**
  * OptInType **required**
  * ResourceIdentifier **required**

### ApplyPendingMaintenanceActionResult
* ApplyPendingMaintenanceActionResult `object`
  * ResourcePendingMaintenanceActions [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### AttributeValueList
* AttributeValueList `array`
  * items

### AuthorizationNotFoundFault


### AvailabilityZone
* AvailabilityZone `object`: Specifies an Availability Zone.
  * Name

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items
    * Name

### AvailabilityZones
* AvailabilityZones `array`
  * items

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### CertificateNotFoundFault


### CharacterSet
* CharacterSet `object`: Specifies a character set.
  * CharacterSetDescription
  * CharacterSetName

### CloudwatchLogsExportConfiguration
* CloudwatchLogsExportConfiguration `object`: <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
  * DisableLogTypes
    * items [String](#string)
  * EnableLogTypes
    * items [String](#string)

### CopyDBClusterParameterGroupMessage
* CopyDBClusterParameterGroupMessage `object`
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

### CopyDBClusterParameterGroupResult
* CopyDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CopyDBClusterSnapshotMessage
* CopyDBClusterSnapshotMessage `object`
  * CopyTags
  * KmsKeyId
  * PreSignedUrl
  * SourceDBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterSnapshotIdentifier **required**

### CopyDBClusterSnapshotResult
* CopyDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CopyDBParameterGroupMessage
* CopyDBParameterGroupMessage `object`
  * SourceDBParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBParameterGroupDescription **required**
  * TargetDBParameterGroupIdentifier **required**

### CopyDBParameterGroupResult
* CopyDBParameterGroupResult `object`
  * DBParameterGroup [DBParameterGroup](#dbparametergroup)

### CreateDBClusterEndpointMessage
* CreateDBClusterEndpointMessage `object`
  * DBClusterEndpointIdentifier **required**
  * DBClusterIdentifier **required**
  * EndpointType **required**
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Tags
    * items
      * Key
      * Value

### CreateDBClusterEndpointOutput
* CreateDBClusterEndpointOutput `object`: <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>
  * CustomEndpointType
  * DBClusterEndpointArn
  * DBClusterEndpointIdentifier
  * DBClusterEndpointResourceIdentifier
  * DBClusterIdentifier
  * Endpoint
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Status

### CreateDBClusterMessage
* CreateDBClusterMessage `object`
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * CharacterSetName
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword
  * MasterUsername
  * OptionGroupName
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReplicationSourceIdentifier
  * StorageEncrypted
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### CreateDBClusterParameterGroupMessage
* CreateDBClusterParameterGroupMessage `object`
  * DBClusterParameterGroupName **required**
  * DBParameterGroupFamily **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBClusterParameterGroupResult
* CreateDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CreateDBClusterResult
* CreateDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### CreateDBClusterSnapshotMessage
* CreateDBClusterSnapshotMessage `object`
  * DBClusterIdentifier **required**
  * DBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBClusterSnapshotResult
* CreateDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CreateDBInstanceMessage
* CreateDBInstanceMessage `object`
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * Engine **required**
  * EngineVersion
  * Iops
  * KmsKeyId
  * LicenseModel
  * MasterUserPassword
  * MasterUsername
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * StorageEncrypted
  * StorageType
  * Tags
    * items
      * Key
      * Value
  * TdeCredentialArn
  * TdeCredentialPassword
  * Timezone
  * VpcSecurityGroupIds
    * items

### CreateDBInstanceResult
* CreateDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBParameterGroupMessage
* CreateDBParameterGroupMessage `object`
  * DBParameterGroupFamily **required**
  * DBParameterGroupName **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBParameterGroupResult
* CreateDBParameterGroupResult `object`
  * DBParameterGroup [DBParameterGroup](#dbparametergroup)

### CreateDBSubnetGroupMessage
* CreateDBSubnetGroupMessage `object`
  * DBSubnetGroupDescription **required**
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

### CreateDBSubnetGroupResult
* CreateDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn **required**
  * SourceIds
    * items
  * SourceType
  * SubscriptionName **required**
  * Tags
    * items
      * Key
      * Value

### CreateEventSubscriptionResult
* CreateEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### DBCluster
* DBCluster `object`: <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
  * AllocatedStorage
  * AssociatedRoles
    * items
      * FeatureName
      * RoleArn
      * Status
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * CharacterSetName
  * CloneGroupId
  * ClusterCreateTime
  * DBClusterArn
  * DBClusterIdentifier
  * DBClusterMembers
    * items
      * DBClusterParameterGroupStatus
      * DBInstanceIdentifier
      * IsClusterWriter
      * PromotionTier
  * DBClusterOptionGroupMemberships
    * items
      * DBClusterOptionGroupName
      * Status
  * DBClusterParameterGroup
  * DBSubnetGroup
  * DatabaseName
  * DbClusterResourceId
  * DeletionProtection
  * EarliestRestorableTime
  * EnabledCloudwatchLogsExports
    * items [String](#string)
  * Endpoint
  * Engine
  * EngineVersion
  * HostedZoneId
  * IAMDatabaseAuthenticationEnabled
  * KmsKeyId
  * LatestRestorableTime
  * MasterUsername
  * MultiAZ
  * PercentProgress
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReadReplicaIdentifiers
    * items
  * ReaderEndpoint
  * ReplicationSourceIdentifier
  * Status
  * StorageEncrypted
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBClusterAlreadyExistsFault


### DBClusterEndpoint
* DBClusterEndpoint `object`: <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>
  * CustomEndpointType
  * DBClusterEndpointArn
  * DBClusterEndpointIdentifier
  * DBClusterEndpointResourceIdentifier
  * DBClusterIdentifier
  * Endpoint
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Status

### DBClusterEndpointAlreadyExistsFault


### DBClusterEndpointList
* DBClusterEndpointList `array`
  * items
    * CustomEndpointType
    * DBClusterEndpointArn
    * DBClusterEndpointIdentifier
    * DBClusterEndpointResourceIdentifier
    * DBClusterIdentifier
    * Endpoint
    * EndpointType
    * ExcludedMembers
      * items [String](#string)
    * StaticMembers
      * items [String](#string)
    * Status

### DBClusterEndpointMessage
* DBClusterEndpointMessage `object`
  * DBClusterEndpoints
    * items
      * CustomEndpointType
      * DBClusterEndpointArn
      * DBClusterEndpointIdentifier
      * DBClusterEndpointResourceIdentifier
      * DBClusterIdentifier
      * Endpoint
      * EndpointType
      * ExcludedMembers
        * items [String](#string)
      * StaticMembers
        * items [String](#string)
      * Status
  * Marker

### DBClusterEndpointNotFoundFault


### DBClusterEndpointQuotaExceededFault


### DBClusterList
* DBClusterList `array`
  * items
    * AllocatedStorage
    * AssociatedRoles
      * items
        * FeatureName
        * RoleArn
        * Status
    * AvailabilityZones
      * items
    * BackupRetentionPeriod
    * CharacterSetName
    * CloneGroupId
    * ClusterCreateTime
    * DBClusterArn
    * DBClusterIdentifier
    * DBClusterMembers
      * items
        * DBClusterParameterGroupStatus
        * DBInstanceIdentifier
        * IsClusterWriter
        * PromotionTier
    * DBClusterOptionGroupMemberships
      * items
        * DBClusterOptionGroupName
        * Status
    * DBClusterParameterGroup
    * DBSubnetGroup
    * DatabaseName
    * DbClusterResourceId
    * DeletionProtection
    * EarliestRestorableTime
    * EnabledCloudwatchLogsExports
      * items [String](#string)
    * Endpoint
    * Engine
    * EngineVersion
    * HostedZoneId
    * IAMDatabaseAuthenticationEnabled
    * KmsKeyId
    * LatestRestorableTime
    * MasterUsername
    * MultiAZ
    * PercentProgress
    * Port
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ReadReplicaIdentifiers
      * items
    * ReaderEndpoint
    * ReplicationSourceIdentifier
    * Status
    * StorageEncrypted
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### DBClusterMember
* DBClusterMember `object`: Contains information about an instance that is part of a DB cluster.
  * DBClusterParameterGroupStatus
  * DBInstanceIdentifier
  * IsClusterWriter
  * PromotionTier

### DBClusterMemberList
* DBClusterMemberList `array`
  * items
    * DBClusterParameterGroupStatus
    * DBInstanceIdentifier
    * IsClusterWriter
    * PromotionTier

### DBClusterMessage
* DBClusterMessage `object`
  * DBClusters
    * items
      * AllocatedStorage
      * AssociatedRoles
        * items
          * FeatureName
          * RoleArn
          * Status
      * AvailabilityZones
        * items
      * BackupRetentionPeriod
      * CharacterSetName
      * CloneGroupId
      * ClusterCreateTime
      * DBClusterArn
      * DBClusterIdentifier
      * DBClusterMembers
        * items
          * DBClusterParameterGroupStatus
          * DBInstanceIdentifier
          * IsClusterWriter
          * PromotionTier
      * DBClusterOptionGroupMemberships
        * items
          * DBClusterOptionGroupName
          * Status
      * DBClusterParameterGroup
      * DBSubnetGroup
      * DatabaseName
      * DbClusterResourceId
      * DeletionProtection
      * EarliestRestorableTime
      * EnabledCloudwatchLogsExports
        * items [String](#string)
      * Endpoint
      * Engine
      * EngineVersion
      * HostedZoneId
      * IAMDatabaseAuthenticationEnabled
      * KmsKeyId
      * LatestRestorableTime
      * MasterUsername
      * MultiAZ
      * PercentProgress
      * Port
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ReadReplicaIdentifiers
        * items
      * ReaderEndpoint
      * ReplicationSourceIdentifier
      * Status
      * StorageEncrypted
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### DBClusterNotFoundFault


### DBClusterOptionGroupMemberships
* DBClusterOptionGroupMemberships `array`
  * items
    * DBClusterOptionGroupName
    * Status

### DBClusterOptionGroupStatus
* DBClusterOptionGroupStatus `object`: Contains status information for a DB cluster option group.
  * DBClusterOptionGroupName
  * Status

### DBClusterParameterGroup
* DBClusterParameterGroup `object`: <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
  * DBClusterParameterGroupArn
  * DBClusterParameterGroupName
  * DBParameterGroupFamily
  * Description

### DBClusterParameterGroupDetails
* DBClusterParameterGroupDetails `object`
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### DBClusterParameterGroupList
* DBClusterParameterGroupList `array`
  * items
    * DBClusterParameterGroupArn
    * DBClusterParameterGroupName
    * DBParameterGroupFamily
    * Description

### DBClusterParameterGroupNameMessage
* DBClusterParameterGroupNameMessage `object`
  * DBClusterParameterGroupName

### DBClusterParameterGroupNotFoundFault


### DBClusterParameterGroupsMessage
* DBClusterParameterGroupsMessage `object`
  * DBClusterParameterGroups
    * items
      * DBClusterParameterGroupArn
      * DBClusterParameterGroupName
      * DBParameterGroupFamily
      * Description
  * Marker

### DBClusterQuotaExceededFault


### DBClusterRole
* DBClusterRole `object`: Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.
  * FeatureName
  * RoleArn
  * Status

### DBClusterRoleAlreadyExistsFault


### DBClusterRoleNotFoundFault


### DBClusterRoleQuotaExceededFault


### DBClusterRoles
* DBClusterRoles `array`
  * items
    * FeatureName
    * RoleArn
    * Status

### DBClusterSnapshot
* DBClusterSnapshot `object`: <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
  * AllocatedStorage
  * AvailabilityZones
    * items
  * ClusterCreateTime
  * DBClusterIdentifier
  * DBClusterSnapshotArn
  * DBClusterSnapshotIdentifier
  * Engine
  * EngineVersion
  * IAMDatabaseAuthenticationEnabled
  * KmsKeyId
  * LicenseModel
  * MasterUsername
  * PercentProgress
  * Port
  * SnapshotCreateTime
  * SnapshotType
  * SourceDBClusterSnapshotArn
  * Status
  * StorageEncrypted
  * VpcId

### DBClusterSnapshotAlreadyExistsFault


### DBClusterSnapshotAttribute
* DBClusterSnapshotAttribute `object`: <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
  * AttributeName
  * AttributeValues
    * items

### DBClusterSnapshotAttributeList
* DBClusterSnapshotAttributeList `array`
  * items
    * AttributeName
    * AttributeValues
      * items

### DBClusterSnapshotAttributesResult
* DBClusterSnapshotAttributesResult `object`: <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
  * DBClusterSnapshotAttributes
    * items
      * AttributeName
      * AttributeValues
        * items
  * DBClusterSnapshotIdentifier

### DBClusterSnapshotList
* DBClusterSnapshotList `array`
  * items
    * AllocatedStorage
    * AvailabilityZones
      * items
    * ClusterCreateTime
    * DBClusterIdentifier
    * DBClusterSnapshotArn
    * DBClusterSnapshotIdentifier
    * Engine
    * EngineVersion
    * IAMDatabaseAuthenticationEnabled
    * KmsKeyId
    * LicenseModel
    * MasterUsername
    * PercentProgress
    * Port
    * SnapshotCreateTime
    * SnapshotType
    * SourceDBClusterSnapshotArn
    * Status
    * StorageEncrypted
    * VpcId

### DBClusterSnapshotMessage
* DBClusterSnapshotMessage `object`
  * DBClusterSnapshots
    * items
      * AllocatedStorage
      * AvailabilityZones
        * items
      * ClusterCreateTime
      * DBClusterIdentifier
      * DBClusterSnapshotArn
      * DBClusterSnapshotIdentifier
      * Engine
      * EngineVersion
      * IAMDatabaseAuthenticationEnabled
      * KmsKeyId
      * LicenseModel
      * MasterUsername
      * PercentProgress
      * Port
      * SnapshotCreateTime
      * SnapshotType
      * SourceDBClusterSnapshotArn
      * Status
      * StorageEncrypted
      * VpcId
  * Marker

### DBClusterSnapshotNotFoundFault


### DBEngineVersion
* DBEngineVersion `object`:  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
  * DBEngineDescription
  * DBEngineVersionDescription
  * DBParameterGroupFamily
  * DefaultCharacterSet
    * CharacterSetDescription
    * CharacterSetName
  * Engine
  * EngineVersion
  * ExportableLogTypes
    * items [String](#string)
  * SupportedCharacterSets
    * items
      * CharacterSetDescription
      * CharacterSetName
  * SupportedTimezones
    * items
      * TimezoneName
  * SupportsLogExportsToCloudwatchLogs
  * SupportsReadReplica
  * ValidUpgradeTarget
    * items
      * AutoUpgrade
      * Description
      * Engine
      * EngineVersion
      * IsMajorVersionUpgrade

### DBEngineVersionList
* DBEngineVersionList `array`
  * items
    * DBEngineDescription
    * DBEngineVersionDescription
    * DBParameterGroupFamily
    * DefaultCharacterSet
      * CharacterSetDescription
      * CharacterSetName
    * Engine
    * EngineVersion
    * ExportableLogTypes
      * items [String](#string)
    * SupportedCharacterSets
      * items
        * CharacterSetDescription
        * CharacterSetName
    * SupportedTimezones
      * items
        * TimezoneName
    * SupportsLogExportsToCloudwatchLogs
    * SupportsReadReplica
    * ValidUpgradeTarget
      * items
        * AutoUpgrade
        * Description
        * Engine
        * EngineVersion
        * IsMajorVersionUpgrade

### DBEngineVersionMessage
* DBEngineVersionMessage `object`
  * DBEngineVersions
    * items
      * DBEngineDescription
      * DBEngineVersionDescription
      * DBParameterGroupFamily
      * DefaultCharacterSet
        * CharacterSetDescription
        * CharacterSetName
      * Engine
      * EngineVersion
      * ExportableLogTypes
        * items [String](#string)
      * SupportedCharacterSets
        * items
          * CharacterSetDescription
          * CharacterSetName
      * SupportedTimezones
        * items
          * TimezoneName
      * SupportsLogExportsToCloudwatchLogs
      * SupportsReadReplica
      * ValidUpgradeTarget
        * items
          * AutoUpgrade
          * Description
          * Engine
          * EngineVersion
          * IsMajorVersionUpgrade
  * Marker

### DBInstance
* DBInstance `object`: <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier
  * DBInstanceArn
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBInstanceStatus
  * DBName
  * DBParameterGroups
    * items
      * DBParameterGroupName
      * ParameterApplyStatus
  * DBSecurityGroups
    * items
      * DBSecurityGroupName
      * Status
  * DBSubnetGroup
    * DBSubnetGroupArn
    * DBSubnetGroupDescription
    * DBSubnetGroupName
    * SubnetGroupStatus
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
        * SubnetIdentifier
        * SubnetStatus
    * VpcId
  * DbInstancePort
  * DbiResourceId
  * DeletionProtection
  * DomainMemberships
    * items
      * Domain
      * FQDN
      * IAMRoleName
      * Status
  * EnabledCloudwatchLogsExports
    * items [String](#string)
  * Endpoint
    * Address
    * HostedZoneId
    * Port
  * Engine
  * EngineVersion
  * EnhancedMonitoringResourceArn
  * IAMDatabaseAuthenticationEnabled
  * InstanceCreateTime
  * Iops
  * KmsKeyId
  * LatestRestorableTime
  * LicenseModel
  * MasterUsername
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupMemberships
    * items
      * OptionGroupName
      * Status
  * PendingModifiedValues
    * AllocatedStorage
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * DBInstanceClass
    * DBInstanceIdentifier
    * DBSubnetGroupName
    * EngineVersion
    * Iops
    * LicenseModel
    * MasterUserPassword
    * MultiAZ
    * PendingCloudwatchLogsExports
      * LogTypesToDisable
        * items [String](#string)
      * LogTypesToEnable
        * items [String](#string)
    * Port
    * StorageType
  * PerformanceInsightsEnabled
  * PerformanceInsightsKMSKeyId
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * ReadReplicaDBClusterIdentifiers
    * items
  * ReadReplicaDBInstanceIdentifiers
    * items
  * ReadReplicaSourceDBInstanceIdentifier
  * SecondaryAvailabilityZone
  * StatusInfos
    * items
      * Message
      * Normal
      * Status
      * StatusType
  * StorageEncrypted
  * StorageType
  * TdeCredentialArn
  * Timezone
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBInstanceAlreadyExistsFault


### DBInstanceList
* DBInstanceList `array`
  * items
    * AllocatedStorage
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * CharacterSetName
    * CopyTagsToSnapshot
    * DBClusterIdentifier
    * DBInstanceArn
    * DBInstanceClass
    * DBInstanceIdentifier
    * DBInstanceStatus
    * DBName
    * DBParameterGroups
      * items
        * DBParameterGroupName
        * ParameterApplyStatus
    * DBSecurityGroups
      * items
        * DBSecurityGroupName
        * Status
    * DBSubnetGroup
      * DBSubnetGroupArn
      * DBSubnetGroupDescription
      * DBSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetStatus
      * VpcId
    * DbInstancePort
    * DbiResourceId
    * DeletionProtection
    * DomainMemberships
      * items
        * Domain
        * FQDN
        * IAMRoleName
        * Status
    * EnabledCloudwatchLogsExports
      * items [String](#string)
    * Endpoint
      * Address
      * HostedZoneId
      * Port
    * Engine
    * EngineVersion
    * EnhancedMonitoringResourceArn
    * IAMDatabaseAuthenticationEnabled
    * InstanceCreateTime
    * Iops
    * KmsKeyId
    * LatestRestorableTime
    * LicenseModel
    * MasterUsername
    * MonitoringInterval
    * MonitoringRoleArn
    * MultiAZ
    * OptionGroupMemberships
      * items
        * OptionGroupName
        * Status
    * PendingModifiedValues
      * AllocatedStorage
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * DBInstanceClass
      * DBInstanceIdentifier
      * DBSubnetGroupName
      * EngineVersion
      * Iops
      * LicenseModel
      * MasterUserPassword
      * MultiAZ
      * PendingCloudwatchLogsExports
        * LogTypesToDisable
          * items [String](#string)
        * LogTypesToEnable
          * items [String](#string)
      * Port
      * StorageType
    * PerformanceInsightsEnabled
    * PerformanceInsightsKMSKeyId
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * PromotionTier
    * PubliclyAccessible
    * ReadReplicaDBClusterIdentifiers
      * items
    * ReadReplicaDBInstanceIdentifiers
      * items
    * ReadReplicaSourceDBInstanceIdentifier
    * SecondaryAvailabilityZone
    * StatusInfos
      * items
        * Message
        * Normal
        * Status
        * StatusType
    * StorageEncrypted
    * StorageType
    * TdeCredentialArn
    * Timezone
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### DBInstanceMessage
* DBInstanceMessage `object`
  * DBInstances
    * items
      * AllocatedStorage
      * AutoMinorVersionUpgrade
      * AvailabilityZone
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * CharacterSetName
      * CopyTagsToSnapshot
      * DBClusterIdentifier
      * DBInstanceArn
      * DBInstanceClass
      * DBInstanceIdentifier
      * DBInstanceStatus
      * DBName
      * DBParameterGroups
        * items
          * DBParameterGroupName
          * ParameterApplyStatus
      * DBSecurityGroups
        * items
          * DBSecurityGroupName
          * Status
      * DBSubnetGroup
        * DBSubnetGroupArn
        * DBSubnetGroupDescription
        * DBSubnetGroupName
        * SubnetGroupStatus
        * Subnets
          * items
        * VpcId
      * DbInstancePort
      * DbiResourceId
      * DeletionProtection
      * DomainMemberships
        * items
          * Domain
          * FQDN
          * IAMRoleName
          * Status
      * EnabledCloudwatchLogsExports
        * items [String](#string)
      * Endpoint
        * Address
        * HostedZoneId
        * Port
      * Engine
      * EngineVersion
      * EnhancedMonitoringResourceArn
      * IAMDatabaseAuthenticationEnabled
      * InstanceCreateTime
      * Iops
      * KmsKeyId
      * LatestRestorableTime
      * LicenseModel
      * MasterUsername
      * MonitoringInterval
      * MonitoringRoleArn
      * MultiAZ
      * OptionGroupMemberships
        * items
          * OptionGroupName
          * Status
      * PendingModifiedValues
        * AllocatedStorage
        * BackupRetentionPeriod
        * CACertificateIdentifier
        * DBInstanceClass
        * DBInstanceIdentifier
        * DBSubnetGroupName
        * EngineVersion
        * Iops
        * LicenseModel
        * MasterUserPassword
        * MultiAZ
        * PendingCloudwatchLogsExports
          * LogTypesToDisable
          * LogTypesToEnable
        * Port
        * StorageType
      * PerformanceInsightsEnabled
      * PerformanceInsightsKMSKeyId
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * PromotionTier
      * PubliclyAccessible
      * ReadReplicaDBClusterIdentifiers
        * items
      * ReadReplicaDBInstanceIdentifiers
        * items
      * ReadReplicaSourceDBInstanceIdentifier
      * SecondaryAvailabilityZone
      * StatusInfos
        * items
          * Message
          * Normal
          * Status
          * StatusType
      * StorageEncrypted
      * StorageType
      * TdeCredentialArn
      * Timezone
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### DBInstanceNotFoundFault


### DBInstanceStatusInfo
* DBInstanceStatusInfo `object`: Provides a list of status information for a DB instance.
  * Message
  * Normal
  * Status
  * StatusType

### DBInstanceStatusInfoList
* DBInstanceStatusInfoList `array`
  * items
    * Message
    * Normal
    * Status
    * StatusType

### DBParameterGroup
* DBParameterGroup `object`: <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
  * DBParameterGroupArn
  * DBParameterGroupFamily
  * DBParameterGroupName
  * Description

### DBParameterGroupAlreadyExistsFault


### DBParameterGroupDetails
* DBParameterGroupDetails `object`
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### DBParameterGroupList
* DBParameterGroupList `array`
  * items
    * DBParameterGroupArn
    * DBParameterGroupFamily
    * DBParameterGroupName
    * Description

### DBParameterGroupNameMessage
* DBParameterGroupNameMessage `object`
  * DBParameterGroupName

### DBParameterGroupNotFoundFault


### DBParameterGroupQuotaExceededFault


### DBParameterGroupStatus
* DBParameterGroupStatus `object`: <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
  * DBParameterGroupName
  * ParameterApplyStatus

### DBParameterGroupStatusList
* DBParameterGroupStatusList `array`
  * items
    * DBParameterGroupName
    * ParameterApplyStatus

### DBParameterGroupsMessage
* DBParameterGroupsMessage `object`
  * DBParameterGroups
    * items
      * DBParameterGroupArn
      * DBParameterGroupFamily
      * DBParameterGroupName
      * Description
  * Marker

### DBSecurityGroupMembership
* DBSecurityGroupMembership `object`: Specifies membership in a designated DB security group.
  * DBSecurityGroupName
  * Status

### DBSecurityGroupMembershipList
* DBSecurityGroupMembershipList `array`
  * items
    * DBSecurityGroupName
    * Status

### DBSecurityGroupNameList
* DBSecurityGroupNameList `array`
  * items

### DBSecurityGroupNotFoundFault


### DBSnapshotAlreadyExistsFault


### DBSnapshotNotFoundFault


### DBSubnetGroup
* DBSubnetGroup `object`: <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
  * DBSubnetGroupArn
  * DBSubnetGroupDescription
  * DBSubnetGroupName
  * SubnetGroupStatus
  * Subnets
    * items
      * SubnetAvailabilityZone
        * Name
      * SubnetIdentifier
      * SubnetStatus
  * VpcId

### DBSubnetGroupAlreadyExistsFault


### DBSubnetGroupDoesNotCoverEnoughAZs


### DBSubnetGroupMessage
* DBSubnetGroupMessage `object`
  * DBSubnetGroups
    * items
      * DBSubnetGroupArn
      * DBSubnetGroupDescription
      * DBSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetStatus
      * VpcId
  * Marker

### DBSubnetGroupNotFoundFault


### DBSubnetGroupQuotaExceededFault


### DBSubnetGroups
* DBSubnetGroups `array`
  * items
    * DBSubnetGroupArn
    * DBSubnetGroupDescription
    * DBSubnetGroupName
    * SubnetGroupStatus
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
        * SubnetIdentifier
        * SubnetStatus
    * VpcId

### DBSubnetQuotaExceededFault


### DBUpgradeDependencyFailureFault


### DeleteDBClusterEndpointMessage
* DeleteDBClusterEndpointMessage `object`
  * DBClusterEndpointIdentifier **required**

### DeleteDBClusterEndpointOutput
* DeleteDBClusterEndpointOutput `object`: <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
  * CustomEndpointType
  * DBClusterEndpointArn
  * DBClusterEndpointIdentifier
  * DBClusterEndpointResourceIdentifier
  * DBClusterIdentifier
  * Endpoint
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Status

### DeleteDBClusterMessage
* DeleteDBClusterMessage `object`
  * DBClusterIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

### DeleteDBClusterParameterGroupMessage
* DeleteDBClusterParameterGroupMessage `object`
  * DBClusterParameterGroupName **required**

### DeleteDBClusterResult
* DeleteDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### DeleteDBClusterSnapshotMessage
* DeleteDBClusterSnapshotMessage `object`
  * DBClusterSnapshotIdentifier **required**

### DeleteDBClusterSnapshotResult
* DeleteDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### DeleteDBInstanceMessage
* DeleteDBInstanceMessage `object`
  * DBInstanceIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

### DeleteDBInstanceResult
* DeleteDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### DeleteDBParameterGroupMessage
* DeleteDBParameterGroupMessage `object`
  * DBParameterGroupName **required**

### DeleteDBSubnetGroupMessage
* DeleteDBSubnetGroupMessage `object`
  * DBSubnetGroupName **required**

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`
  * SubscriptionName **required**

### DeleteEventSubscriptionResult
* DeleteEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### DescribeDBClusterEndpointsMessage
* DescribeDBClusterEndpointsMessage `object`
  * DBClusterEndpointIdentifier
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterParameterGroupsMessage
* DescribeDBClusterParameterGroupsMessage `object`
  * DBClusterParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterParametersMessage
* DescribeDBClusterParametersMessage `object`
  * DBClusterParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

### DescribeDBClusterSnapshotAttributesMessage
* DescribeDBClusterSnapshotAttributesMessage `object`
  * DBClusterSnapshotIdentifier **required**

### DescribeDBClusterSnapshotAttributesResult
* DescribeDBClusterSnapshotAttributesResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotsMessage
* DescribeDBClusterSnapshotsMessage `object`
  * DBClusterIdentifier
  * DBClusterSnapshotIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludePublic
  * IncludeShared
  * Marker
  * MaxRecords
  * SnapshotType

### DescribeDBClustersMessage
* DescribeDBClustersMessage `object`
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBEngineVersionsMessage
* DescribeDBEngineVersionsMessage `object`
  * DBParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

### DescribeDBInstancesMessage
* DescribeDBInstancesMessage `object`
  * DBInstanceIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBParameterGroupsMessage
* DescribeDBParameterGroupsMessage `object`
  * DBParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBParametersMessage
* DescribeDBParametersMessage `object`
  * DBParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

### DescribeDBSubnetGroupsMessage
* DescribeDBSubnetGroupsMessage `object`
  * DBSubnetGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultClusterParametersMessage
* DescribeEngineDefaultClusterParametersMessage `object`
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultClusterParametersResult
* DescribeEngineDefaultClusterParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEngineDefaultParametersMessage
* DescribeEngineDefaultParametersMessage `object`
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultParametersResult
* DescribeEngineDefaultParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * SourceType

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SubscriptionName

### DescribeEventsMessage
* DescribeEventsMessage `object`
  * Duration
  * EndTime
  * EventCategories
    * items
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

### DescribeOrderableDBInstanceOptionsMessage
* DescribeOrderableDBInstanceOptionsMessage `object`
  * DBInstanceClass
  * Engine **required**
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LicenseModel
  * Marker
  * MaxRecords
  * Vpc

### DescribePendingMaintenanceActionsMessage
* DescribePendingMaintenanceActionsMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ResourceIdentifier

### DescribeValidDBInstanceModificationsMessage
* DescribeValidDBInstanceModificationsMessage `object`
  * DBInstanceIdentifier **required**

### DescribeValidDBInstanceModificationsResult
* DescribeValidDBInstanceModificationsResult `object`
  * ValidDBInstanceModificationsMessage [ValidDBInstanceModificationsMessage](#validdbinstancemodificationsmessage)

### DomainMembership
* DomainMembership `object`: An Active Directory Domain membership record associated with a DB instance.
  * Domain
  * FQDN
  * IAMRoleName
  * Status

### DomainMembershipList
* DomainMembershipList `array`
  * items
    * Domain
    * FQDN
    * IAMRoleName
    * Status

### DomainNotFoundFault


### Double
* Double `number`

### DoubleOptional
* DoubleOptional `number`

### DoubleRange
* DoubleRange `object`: A range of double values.
  * From
  * To

### DoubleRangeList
* DoubleRangeList `array`
  * items
    * From
    * To

### Endpoint
* Endpoint `object`: <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
  * Address
  * HostedZoneId
  * Port

### EngineDefaults
* EngineDefaults `object`:  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.
  * DBParameterGroupFamily
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### Event
* Event `object`:  This data type is used as a response element in the <a>DescribeEvents</a> action.
  * Date
  * EventCategories
    * items
  * Message
  * SourceArn
  * SourceIdentifier
  * SourceType

### EventCategoriesList
* EventCategoriesList `array`
  * items

### EventCategoriesMap
* EventCategoriesMap `object`: Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
  * EventCategories
    * items
  * SourceType

### EventCategoriesMapList
* EventCategoriesMapList `array`
  * items
    * EventCategories
      * items
    * SourceType

### EventCategoriesMessage
* EventCategoriesMessage `object`
  * EventCategoriesMapList
    * items
      * EventCategories
        * items
      * SourceType

### EventList
* EventList `array`
  * items
    * Date
    * EventCategories
      * items
    * Message
    * SourceArn
    * SourceIdentifier
    * SourceType

### EventSubscription
* EventSubscription `object`: Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.
  * CustSubscriptionId
  * CustomerAwsId
  * Enabled
  * EventCategoriesList
    * items
  * EventSubscriptionArn
  * SnsTopicArn
  * SourceIdsList
    * items
  * SourceType
  * Status
  * SubscriptionCreationTime

### EventSubscriptionQuotaExceededFault


### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items
    * CustSubscriptionId
    * CustomerAwsId
    * Enabled
    * EventCategoriesList
      * items
    * EventSubscriptionArn
    * SnsTopicArn
    * SourceIdsList
      * items
    * SourceType
    * Status
    * SubscriptionCreationTime

### EventSubscriptionsMessage
* EventSubscriptionsMessage `object`
  * EventSubscriptionsList
    * items
      * CustSubscriptionId
      * CustomerAwsId
      * Enabled
      * EventCategoriesList
        * items
      * EventSubscriptionArn
      * SnsTopicArn
      * SourceIdsList
        * items
      * SourceType
      * Status
      * SubscriptionCreationTime
  * Marker

### EventsMessage
* EventsMessage `object`
  * Events
    * items
      * Date
      * EventCategories
        * items
      * Message
      * SourceArn
      * SourceIdentifier
      * SourceType
  * Marker

### FailoverDBClusterMessage
* FailoverDBClusterMessage `object`
  * DBClusterIdentifier
  * TargetDBInstanceIdentifier

### FailoverDBClusterResult
* FailoverDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### Filter
* Filter `object`: This type is not currently supported.
  * Name **required**
  * Values **required**
    * items

### FilterList
* FilterList `array`
  * items
    * Name **required**
    * Values **required**
      * items

### FilterValueList
* FilterValueList `array`
  * items

### InstanceQuotaExceededFault


### InsufficientDBClusterCapacityFault


### InsufficientDBInstanceCapacityFault


### InsufficientStorageClusterCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidDBClusterEndpointStateFault


### InvalidDBClusterSnapshotStateFault


### InvalidDBClusterStateFault


### InvalidDBInstanceStateFault


### InvalidDBParameterGroupStateFault


### InvalidDBSecurityGroupStateFault


### InvalidDBSnapshotStateFault


### InvalidDBSubnetGroupStateFault


### InvalidDBSubnetStateFault


### InvalidEventSubscriptionStateFault


### InvalidRestoreFault


### InvalidSubnet


### InvalidVPCNetworkStateFault


### KMSKeyNotAccessibleFault


### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ResourceName **required**

### LogTypeList
* LogTypeList `array`
  * items [String](#string)

### ModifyDBClusterEndpointMessage
* ModifyDBClusterEndpointMessage `object`
  * DBClusterEndpointIdentifier **required**
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)

### ModifyDBClusterEndpointOutput
* ModifyDBClusterEndpointOutput `object`: <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
  * CustomEndpointType
  * DBClusterEndpointArn
  * DBClusterEndpointIdentifier
  * DBClusterEndpointResourceIdentifier
  * DBClusterIdentifier
  * Endpoint
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)
  * Status

### ModifyDBClusterMessage
* ModifyDBClusterMessage `object`
  * ApplyImmediately
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DeletionProtection
  * EnableIAMDatabaseAuthentication
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * VpcSecurityGroupIds
    * items

### ModifyDBClusterParameterGroupMessage
* ModifyDBClusterParameterGroupMessage `object`
  * DBClusterParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### ModifyDBClusterResult
* ModifyDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ModifyDBClusterSnapshotAttributeMessage
* ModifyDBClusterSnapshotAttributeMessage `object`
  * AttributeName **required**
  * DBClusterSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

### ModifyDBClusterSnapshotAttributeResult
* ModifyDBClusterSnapshotAttributeResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### ModifyDBInstanceMessage
* ModifyDBInstanceMessage `object`
  * AllocatedStorage
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBParameterGroupName
  * DBPortNumber
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * EngineVersion
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NewDBInstanceIdentifier
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * StorageType
  * TdeCredentialArn
  * TdeCredentialPassword
  * VpcSecurityGroupIds
    * items

### ModifyDBInstanceResult
* ModifyDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ModifyDBParameterGroupMessage
* ModifyDBParameterGroupMessage `object`
  * DBParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### ModifyDBSubnetGroupMessage
* ModifyDBSubnetGroupMessage `object`
  * DBSubnetGroupDescription
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items

### ModifyDBSubnetGroupResult
* ModifyDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn
  * SourceType
  * SubscriptionName **required**

### ModifyEventSubscriptionResult
* ModifyEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### OptionGroupMembership
* OptionGroupMembership `object`: Provides information on the option groups the DB instance is a member of.
  * OptionGroupName
  * Status

### OptionGroupMembershipList
* OptionGroupMembershipList `array`
  * items
    * OptionGroupName
    * Status

### OptionGroupNotFoundFault


### OrderableDBInstanceOption
* OrderableDBInstanceOption `object`: <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
  * AvailabilityZones
    * items
      * Name
  * DBInstanceClass
  * Engine
  * EngineVersion
  * LicenseModel
  * MaxIopsPerDbInstance
  * MaxIopsPerGib
  * MaxStorageSize
  * MinIopsPerDbInstance
  * MinIopsPerGib
  * MinStorageSize
  * MultiAZCapable
  * ReadReplicaCapable
  * StorageType
  * SupportsEnhancedMonitoring
  * SupportsIAMDatabaseAuthentication
  * SupportsIops
  * SupportsPerformanceInsights
  * SupportsStorageEncryption
  * Vpc

### OrderableDBInstanceOptionsList
* OrderableDBInstanceOptionsList `array`
  * items
    * AvailabilityZones
      * items
        * Name
    * DBInstanceClass
    * Engine
    * EngineVersion
    * LicenseModel
    * MaxIopsPerDbInstance
    * MaxIopsPerGib
    * MaxStorageSize
    * MinIopsPerDbInstance
    * MinIopsPerGib
    * MinStorageSize
    * MultiAZCapable
    * ReadReplicaCapable
    * StorageType
    * SupportsEnhancedMonitoring
    * SupportsIAMDatabaseAuthentication
    * SupportsIops
    * SupportsPerformanceInsights
    * SupportsStorageEncryption
    * Vpc

### OrderableDBInstanceOptionsMessage
* OrderableDBInstanceOptionsMessage `object`
  * Marker
  * OrderableDBInstanceOptions
    * items
      * AvailabilityZones
        * items
          * Name
      * DBInstanceClass
      * Engine
      * EngineVersion
      * LicenseModel
      * MaxIopsPerDbInstance
      * MaxIopsPerGib
      * MaxStorageSize
      * MinIopsPerDbInstance
      * MinIopsPerGib
      * MinStorageSize
      * MultiAZCapable
      * ReadReplicaCapable
      * StorageType
      * SupportsEnhancedMonitoring
      * SupportsIAMDatabaseAuthentication
      * SupportsIops
      * SupportsPerformanceInsights
      * SupportsStorageEncryption
      * Vpc

### Parameter
* Parameter `object`: Specifies a parameter.
  * AllowedValues
  * ApplyMethod
  * ApplyType
  * DataType
  * Description
  * IsModifiable
  * MinimumEngineVersion
  * ParameterName
  * ParameterValue
  * Source

### ParametersList
* ParametersList `array`
  * items
    * AllowedValues
    * ApplyMethod
    * ApplyType
    * DataType
    * Description
    * IsModifiable
    * MinimumEngineVersion
    * ParameterName
    * ParameterValue
    * Source

### PendingCloudwatchLogsExports
* PendingCloudwatchLogsExports `object`: A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
  * LogTypesToDisable
    * items [String](#string)
  * LogTypesToEnable
    * items [String](#string)

### PendingMaintenanceAction
* PendingMaintenanceAction `object`: Provides information about a pending maintenance action for a resource.
  * Action
  * AutoAppliedAfterDate
  * CurrentApplyDate
  * Description
  * ForcedApplyDate
  * OptInStatus

### PendingMaintenanceActionDetails
* PendingMaintenanceActionDetails `array`
  * items
    * Action
    * AutoAppliedAfterDate
    * CurrentApplyDate
    * Description
    * ForcedApplyDate
    * OptInStatus

### PendingMaintenanceActions
* PendingMaintenanceActions `array`
  * items
    * PendingMaintenanceActionDetails
      * items
        * Action
        * AutoAppliedAfterDate
        * CurrentApplyDate
        * Description
        * ForcedApplyDate
        * OptInStatus
    * ResourceIdentifier

### PendingMaintenanceActionsMessage
* PendingMaintenanceActionsMessage `object`
  * Marker
  * PendingMaintenanceActions
    * items
      * PendingMaintenanceActionDetails
        * items
          * Action
          * AutoAppliedAfterDate
          * CurrentApplyDate
          * Description
          * ForcedApplyDate
          * OptInStatus
      * ResourceIdentifier

### PendingModifiedValues
* PendingModifiedValues `object`:  This data type is used as a response element in the <a>ModifyDBInstance</a> action.
  * AllocatedStorage
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBSubnetGroupName
  * EngineVersion
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MultiAZ
  * PendingCloudwatchLogsExports
    * LogTypesToDisable
      * items [String](#string)
    * LogTypesToEnable
      * items [String](#string)
  * Port
  * StorageType

### PromoteReadReplicaDBClusterMessage
* PromoteReadReplicaDBClusterMessage `object`
  * DBClusterIdentifier **required**

### PromoteReadReplicaDBClusterResult
* PromoteReadReplicaDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ProvisionedIopsNotAvailableInAZFault


### Range
* Range `object`: A range of integer values.
  * From
  * Step
  * To

### RangeList
* RangeList `array`
  * items
    * From
    * Step
    * To

### ReadReplicaDBClusterIdentifierList
* ReadReplicaDBClusterIdentifierList `array`
  * items

### ReadReplicaDBInstanceIdentifierList
* ReadReplicaDBInstanceIdentifierList `array`
  * items

### ReadReplicaIdentifierList
* ReadReplicaIdentifierList `array`
  * items

### RebootDBInstanceMessage
* RebootDBInstanceMessage `object`
  * DBInstanceIdentifier **required**
  * ForceFailover

### RebootDBInstanceResult
* RebootDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RemoveRoleFromDBClusterMessage
* RemoveRoleFromDBClusterMessage `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

### RemoveSourceIdentifierFromSubscriptionMessage
* RemoveSourceIdentifierFromSubscriptionMessage `object`
  * SourceIdentifier **required**
  * SubscriptionName **required**

### RemoveSourceIdentifierFromSubscriptionResult
* RemoveSourceIdentifierFromSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

### ResetDBClusterParameterGroupMessage
* ResetDBClusterParameterGroupMessage `object`
  * DBClusterParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

### ResetDBParameterGroupMessage
* ResetDBParameterGroupMessage `object`
  * DBParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

### ResourceNotFoundFault


### ResourcePendingMaintenanceActions
* ResourcePendingMaintenanceActions `object`: Describes the pending maintenance actions for a resource.
  * PendingMaintenanceActionDetails
    * items
      * Action
      * AutoAppliedAfterDate
      * CurrentApplyDate
      * Description
      * ForcedApplyDate
      * OptInStatus
  * ResourceIdentifier

### RestoreDBClusterFromSnapshotMessage
* RestoreDBClusterFromSnapshotMessage `object`
  * AvailabilityZones
    * items
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * OptionGroupName
  * Port
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterFromSnapshotResult
* RestoreDBClusterFromSnapshotResult `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBClusterToPointInTimeMessage
* RestoreDBClusterToPointInTimeMessage `object`
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * KmsKeyId
  * OptionGroupName
  * Port
  * RestoreToTime
  * RestoreType
  * SourceDBClusterIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterToPointInTimeResult
* RestoreDBClusterToPointInTimeResult `object`
  * DBCluster [DBCluster](#dbcluster)

### SNSInvalidTopicFault


### SNSNoAuthorizationFault


### SNSTopicArnNotFoundFault


### SharedSnapshotQuotaExceededFault


### SnapshotQuotaExceededFault


### SourceIdsList
* SourceIdsList `array`
  * items

### SourceNotFoundFault


### SourceType
* SourceType `string` (values: db-instance, db-parameter-group, db-security-group, db-snapshot, db-cluster, db-cluster-snapshot)

### StartDBClusterMessage
* StartDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StartDBClusterResult
* StartDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StopDBClusterMessage
* StopDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StopDBClusterResult
* StopDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StorageQuotaExceededFault


### StorageTypeNotSupportedFault


### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Subnet
* Subnet `object`: <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
  * SubnetAvailabilityZone
    * Name
  * SubnetIdentifier
  * SubnetStatus

### SubnetAlreadyInUse


### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items

### SubnetList
* SubnetList `array`
  * items
    * SubnetAvailabilityZone
      * Name
    * SubnetIdentifier
    * SubnetStatus

### SubscriptionAlreadyExistFault


### SubscriptionCategoryNotFoundFault


### SubscriptionNotFoundFault


### SupportedCharacterSetsList
* SupportedCharacterSetsList `array`
  * items
    * CharacterSetDescription
    * CharacterSetName

### SupportedTimezonesList
* SupportedTimezonesList `array`
  * items
    * TimezoneName

### TStamp
* TStamp `string`

### Tag
* Tag `object`: Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.
  * Key
  * Value

### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagListMessage
* TagListMessage `object`
  * TagList
    * items
      * Key
      * Value

### Timezone
* Timezone `object`: A time zone associated with a <a>DBInstance</a>.
  * TimezoneName

### UpgradeTarget
* UpgradeTarget `object`: The version of the database engine that a DB instance can be upgraded to.
  * AutoUpgrade
  * Description
  * Engine
  * EngineVersion
  * IsMajorVersionUpgrade

### ValidDBInstanceModificationsMessage
* ValidDBInstanceModificationsMessage `object`: Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. 
  * Storage
    * items
      * IopsToStorageRatio
        * items
          * From
          * To
      * ProvisionedIops
        * items
          * From
          * Step
          * To
      * StorageSize
        * items
          * From
          * Step
          * To
      * StorageType

### ValidStorageOptions
* ValidStorageOptions `object`: <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
  * IopsToStorageRatio
    * items
      * From
      * To
  * ProvisionedIops
    * items
      * From
      * Step
      * To
  * StorageSize
    * items
      * From
      * Step
      * To
  * StorageType

### ValidStorageOptionsList
* ValidStorageOptionsList `array`
  * items
    * IopsToStorageRatio
      * items
        * From
        * To
    * ProvisionedIops
      * items
        * From
        * Step
        * To
    * StorageSize
      * items
        * From
        * Step
        * To
    * StorageType

### ValidUpgradeTargetList
* ValidUpgradeTargetList `array`
  * items
    * AutoUpgrade
    * Description
    * Engine
    * EngineVersion
    * IsMajorVersionUpgrade

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: This data type is used as a response element for queries on VPC security group membership.
  * Status
  * VpcSecurityGroupId

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items
    * Status
    * VpcSecurityGroupId


