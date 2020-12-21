# @datafire/amazonaws_rds

Client library for Amazon Relational Database Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_rds
```
```js
let amazonaws_rds = require('@datafire/amazonaws_rds').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Relational Database Service</fullname> <p> </p> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

## Actions

### AddRoleToDBCluster



```js
amazonaws_rds.AddRoleToDBCluster({
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
amazonaws_rds.AddRoleToDBCluster({
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

### AddRoleToDBInstance



```js
amazonaws_rds.AddRoleToDBInstance({
  "DBInstanceIdentifier": "",
  "RoleArn": "",
  "FeatureName": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * RoleArn **required** `string`
  * FeatureName **required** `string`

#### Output
*Output schema unknown*

### AddRoleToDBInstance



```js
amazonaws_rds.AddRoleToDBInstance({
  "DBInstanceIdentifier": null,
  "RoleArn": null,
  "FeatureName": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * FeatureName **required**
  * RoleArn **required**

#### Output
*Output schema unknown*

### AddSourceIdentifierToSubscription



```js
amazonaws_rds.AddSourceIdentifierToSubscription({
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
amazonaws_rds.AddSourceIdentifierToSubscription({
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
amazonaws_rds.AddTagsToResource({
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
amazonaws_rds.AddTagsToResource({
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
amazonaws_rds.ApplyPendingMaintenanceAction({
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
amazonaws_rds.ApplyPendingMaintenanceAction({
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

### AuthorizeDBSecurityGroupIngress



```js
amazonaws_rds.AuthorizeDBSecurityGroupIngress({
  "DBSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required** `string`
  * CIDRIP `string`
  * EC2SecurityGroupName `string`
  * EC2SecurityGroupId `string`
  * EC2SecurityGroupOwnerId `string`

#### Output
* output [AuthorizeDBSecurityGroupIngressResult](#authorizedbsecuritygroupingressresult)

### AuthorizeDBSecurityGroupIngress



```js
amazonaws_rds.AuthorizeDBSecurityGroupIngress({
  "DBSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * CIDRIP
  * DBSecurityGroupName **required**
  * EC2SecurityGroupId
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

#### Output
* output [AuthorizeDBSecurityGroupIngressResult](#authorizedbsecuritygroupingressresult)

### BacktrackDBCluster



```js
amazonaws_rds.BacktrackDBCluster({
  "DBClusterIdentifier": "",
  "BacktrackTo": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * BacktrackTo **required** `string`
  * Force `boolean`
  * UseEarliestTimeOnPointInTimeUnavailable `boolean`

#### Output
* output [DBClusterBacktrack](#dbclusterbacktrack)

### BacktrackDBCluster



```js
amazonaws_rds.BacktrackDBCluster({
  "DBClusterIdentifier": null,
  "BacktrackTo": null
}, context)
```

#### Input
* input `object`
  * BacktrackTo **required**
  * DBClusterIdentifier **required**
  * Force
  * UseEarliestTimeOnPointInTimeUnavailable

#### Output
* output [DBClusterBacktrack](#dbclusterbacktrack)

### CancelExportTask



```js
amazonaws_rds.CancelExportTask({
  "ExportTaskIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ExportTaskIdentifier **required** `string`

#### Output
* output [ExportTask](#exporttask)

### CancelExportTask



```js
amazonaws_rds.CancelExportTask({
  "ExportTaskIdentifier": null
}, context)
```

#### Input
* input `object`
  * ExportTaskIdentifier **required**

#### Output
* output [ExportTask](#exporttask)

### CopyDBClusterParameterGroup



```js
amazonaws_rds.CopyDBClusterParameterGroup({
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
amazonaws_rds.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

#### Output
* output [CopyDBClusterParameterGroupResult](#copydbclusterparametergroupresult)

### CopyDBClusterSnapshot



```js
amazonaws_rds.CopyDBClusterSnapshot({
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
  * SourceRegion `string`

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBClusterSnapshot



```js
amazonaws_rds.CopyDBClusterSnapshot({
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
  * SourceRegion
  * Tags [TagList](#taglist)
  * TargetDBClusterSnapshotIdentifier **required**

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBParameterGroup



```js
amazonaws_rds.CopyDBParameterGroup({
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
amazonaws_rds.CopyDBParameterGroup({
  "SourceDBParameterGroupIdentifier": null,
  "TargetDBParameterGroupIdentifier": null,
  "TargetDBParameterGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceDBParameterGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetDBParameterGroupDescription **required**
  * TargetDBParameterGroupIdentifier **required**

#### Output
* output [CopyDBParameterGroupResult](#copydbparametergroupresult)

### CopyDBSnapshot



```js
amazonaws_rds.CopyDBSnapshot({
  "SourceDBSnapshotIdentifier": "",
  "TargetDBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceDBSnapshotIdentifier **required** `string`
  * TargetDBSnapshotIdentifier **required** `string`
  * KmsKeyId `string`
  * Tags `array`
  * CopyTags `boolean`
  * PreSignedUrl `string`
  * OptionGroupName `string`
  * TargetCustomAvailabilityZone `string`
  * SourceRegion `string`

#### Output
* output [CopyDBSnapshotResult](#copydbsnapshotresult)

### CopyDBSnapshot



```js
amazonaws_rds.CopyDBSnapshot({
  "SourceDBSnapshotIdentifier": null,
  "TargetDBSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * CopyTags
  * KmsKeyId
  * OptionGroupName
  * PreSignedUrl
  * SourceDBSnapshotIdentifier **required**
  * SourceRegion
  * Tags [TagList](#taglist)
  * TargetCustomAvailabilityZone
  * TargetDBSnapshotIdentifier **required**

#### Output
* output [CopyDBSnapshotResult](#copydbsnapshotresult)

### CopyOptionGroup



```js
amazonaws_rds.CopyOptionGroup({
  "SourceOptionGroupIdentifier": "",
  "TargetOptionGroupIdentifier": "",
  "TargetOptionGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * SourceOptionGroupIdentifier **required** `string`
  * TargetOptionGroupIdentifier **required** `string`
  * TargetOptionGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CopyOptionGroupResult](#copyoptiongroupresult)

### CopyOptionGroup



```js
amazonaws_rds.CopyOptionGroup({
  "SourceOptionGroupIdentifier": null,
  "TargetOptionGroupIdentifier": null,
  "TargetOptionGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceOptionGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetOptionGroupDescription **required**
  * TargetOptionGroupIdentifier **required**

#### Output
* output [CopyOptionGroupResult](#copyoptiongroupresult)

### CreateCustomAvailabilityZone



```js
amazonaws_rds.CreateCustomAvailabilityZone({
  "CustomAvailabilityZoneName": ""
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneName **required** `string`
  * ExistingVpnId `string`
  * NewVpnTunnelName `string`
  * VpnTunnelOriginatorIP `string`

#### Output
* output [CreateCustomAvailabilityZoneResult](#createcustomavailabilityzoneresult)

### CreateCustomAvailabilityZone



```js
amazonaws_rds.CreateCustomAvailabilityZone({
  "CustomAvailabilityZoneName": null
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneName **required**
  * ExistingVpnId
  * NewVpnTunnelName
  * VpnTunnelOriginatorIP

#### Output
* output [CreateCustomAvailabilityZoneResult](#createcustomavailabilityzoneresult)

### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({
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
  * BacktrackWindow `integer`
  * EnableCloudwatchLogsExports `array`
  * EngineMode `string`
  * ScalingConfiguration `object`
  * DeletionProtection `boolean`
  * GlobalClusterIdentifier `string`
  * EnableHttpEndpoint `boolean`
  * CopyTagsToSnapshot `boolean`
  * Domain `string`
  * DomainIAMRoleName `string`
  * EnableGlobalWriteForwarding `boolean`
  * SourceRegion `string`

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({
  "DBClusterIdentifier": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * BacktrackWindow
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableGlobalWriteForwarding
  * EnableHttpEndpoint
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineMode
  * EngineVersion
  * GlobalClusterIdentifier
  * KmsKeyId
  * MasterUserPassword
  * MasterUsername
  * OptionGroupName
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReplicationSourceIdentifier
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
  * SourceRegion
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
amazonaws_rds.CreateDBClusterEndpoint({
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
* output [DBClusterEndpoint](#dbclusterendpoint)

### CreateDBClusterEndpoint



```js
amazonaws_rds.CreateDBClusterEndpoint({
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
* output [DBClusterEndpoint](#dbclusterendpoint)

### CreateDBClusterParameterGroup



```js
amazonaws_rds.CreateDBClusterParameterGroup({
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
amazonaws_rds.CreateDBClusterParameterGroup({
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
amazonaws_rds.CreateDBClusterSnapshot({
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
amazonaws_rds.CreateDBClusterSnapshot({
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
amazonaws_rds.CreateDBInstance({
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
  * NcharCharacterSetName `string`
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
  * PerformanceInsightsRetentionPeriod `integer`
  * EnableCloudwatchLogsExports `array`
  * ProcessorFeatures `array`
  * DeletionProtection `boolean`
  * MaxAllocatedStorage `integer`

#### Output
* output [CreateDBInstanceResult](#createdbinstanceresult)

### CreateDBInstance



```js
amazonaws_rds.CreateDBInstance({
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NcharCharacterSetName
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
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

### CreateDBInstanceReadReplica



```js
amazonaws_rds.CreateDBInstanceReadReplica({
  "DBInstanceIdentifier": "",
  "SourceDBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * SourceDBInstanceIdentifier **required** `string`
  * DBInstanceClass `string`
  * AvailabilityZone `string`
  * Port `integer`
  * MultiAZ `boolean`
  * AutoMinorVersionUpgrade `boolean`
  * Iops `integer`
  * OptionGroupName `string`
  * DBParameterGroupName `string`
  * PubliclyAccessible `boolean`
  * Tags `array`
  * DBSubnetGroupName `string`
  * VpcSecurityGroupIds `array`
  * StorageType `string`
  * CopyTagsToSnapshot `boolean`
  * MonitoringInterval `integer`
  * MonitoringRoleArn `string`
  * KmsKeyId `string`
  * PreSignedUrl `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnablePerformanceInsights `boolean`
  * PerformanceInsightsKMSKeyId `string`
  * PerformanceInsightsRetentionPeriod `integer`
  * EnableCloudwatchLogsExports `array`
  * ProcessorFeatures `array`
  * UseDefaultProcessorFeatures `boolean`
  * DeletionProtection `boolean`
  * Domain `string`
  * DomainIAMRoleName `string`
  * ReplicaMode `string`
  * MaxAllocatedStorage `integer`
  * SourceRegion `string`

#### Output
* output [CreateDBInstanceReadReplicaResult](#createdbinstancereadreplicaresult)

### CreateDBInstanceReadReplica



```js
amazonaws_rds.CreateDBInstanceReadReplica({
  "DBInstanceIdentifier": null,
  "SourceDBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * Iops
  * KmsKeyId
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreSignedUrl
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * ReplicaMode
  * SourceDBInstanceIdentifier **required**
  * SourceRegion
  * StorageType
  * Tags [TagList](#taglist)
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

#### Output
* output [CreateDBInstanceReadReplicaResult](#createdbinstancereadreplicaresult)

### CreateDBParameterGroup



```js
amazonaws_rds.CreateDBParameterGroup({
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
amazonaws_rds.CreateDBParameterGroup({
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

### CreateDBProxy



```js
amazonaws_rds.CreateDBProxy({
  "DBProxyName": "",
  "EngineFamily": "",
  "Auth": [],
  "RoleArn": "",
  "VpcSubnetIds": []
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * EngineFamily **required** `string`
  * Auth **required** `array`
  * RoleArn **required** `string`
  * VpcSubnetIds **required** `array`
  * VpcSecurityGroupIds `array`
  * RequireTLS `boolean`
  * IdleClientTimeout `integer`
  * DebugLogging `boolean`
  * Tags `array`

#### Output
* output [CreateDBProxyResponse](#createdbproxyresponse)

### CreateDBProxy



```js
amazonaws_rds.CreateDBProxy({
  "DBProxyName": null,
  "EngineFamily": null,
  "Auth": null,
  "RoleArn": null,
  "VpcSubnetIds": null
}, context)
```

#### Input
* input `object`
  * Auth **required**
    * items [UserAuthConfig](#userauthconfig)
  * DBProxyName **required**
  * DebugLogging
  * EngineFamily **required**
  * IdleClientTimeout
  * RequireTLS
  * RoleArn **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items [String](#string)
  * VpcSubnetIds **required**
    * items [String](#string)

#### Output
* output [CreateDBProxyResponse](#createdbproxyresponse)

### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({
  "DBSecurityGroupName": "",
  "DBSecurityGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required** `string`
  * DBSecurityGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CreateDBSecurityGroupResult](#createdbsecuritygroupresult)

### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({
  "DBSecurityGroupName": null,
  "DBSecurityGroupDescription": null
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupDescription **required**
  * DBSecurityGroupName **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBSecurityGroupResult](#createdbsecuritygroupresult)

### CreateDBSnapshot



```js
amazonaws_rds.CreateDBSnapshot({
  "DBSnapshotIdentifier": "",
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** `string`
  * DBInstanceIdentifier **required** `string`
  * Tags `array`

#### Output
* output [CreateDBSnapshotResult](#createdbsnapshotresult)

### CreateDBSnapshot



```js
amazonaws_rds.CreateDBSnapshot({
  "DBSnapshotIdentifier": null,
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * DBSnapshotIdentifier **required**
  * Tags [TagList](#taglist)

#### Output
* output [CreateDBSnapshotResult](#createdbsnapshotresult)

### CreateDBSubnetGroup



```js
amazonaws_rds.CreateDBSubnetGroup({
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
amazonaws_rds.CreateDBSubnetGroup({
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
amazonaws_rds.CreateEventSubscription({
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
amazonaws_rds.CreateEventSubscription({
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
  * Tags [TagList](#taglist)

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

### CreateGlobalCluster



```js
amazonaws_rds.CreateGlobalCluster({}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier `string`
  * SourceDBClusterIdentifier `string`
  * Engine `string`
  * EngineVersion `string`
  * DeletionProtection `boolean`
  * DatabaseName `string`
  * StorageEncrypted `boolean`

#### Output
* output [CreateGlobalClusterResult](#createglobalclusterresult)

### CreateGlobalCluster



```js
amazonaws_rds.CreateGlobalCluster({}, context)
```

#### Input
* input `object`
  * DatabaseName
  * DeletionProtection
  * Engine
  * EngineVersion
  * GlobalClusterIdentifier
  * SourceDBClusterIdentifier
  * StorageEncrypted

#### Output
* output [CreateGlobalClusterResult](#createglobalclusterresult)

### CreateOptionGroup



```js
amazonaws_rds.CreateOptionGroup({
  "OptionGroupName": "",
  "EngineName": "",
  "MajorEngineVersion": "",
  "OptionGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * OptionGroupName **required** `string`
  * EngineName **required** `string`
  * MajorEngineVersion **required** `string`
  * OptionGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CreateOptionGroupResult](#createoptiongroupresult)

### CreateOptionGroup



```js
amazonaws_rds.CreateOptionGroup({
  "OptionGroupName": null,
  "EngineName": null,
  "MajorEngineVersion": null,
  "OptionGroupDescription": null
}, context)
```

#### Input
* input `object`
  * EngineName **required**
  * MajorEngineVersion **required**
  * OptionGroupDescription **required**
  * OptionGroupName **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateOptionGroupResult](#createoptiongroupresult)

### DeleteCustomAvailabilityZone



```js
amazonaws_rds.DeleteCustomAvailabilityZone({
  "CustomAvailabilityZoneId": ""
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneId **required** `string`

#### Output
* output [DeleteCustomAvailabilityZoneResult](#deletecustomavailabilityzoneresult)

### DeleteCustomAvailabilityZone



```js
amazonaws_rds.DeleteCustomAvailabilityZone({
  "CustomAvailabilityZoneId": null
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneId **required**

#### Output
* output [DeleteCustomAvailabilityZoneResult](#deletecustomavailabilityzoneresult)

### DeleteDBCluster



```js
amazonaws_rds.DeleteDBCluster({
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
amazonaws_rds.DeleteDBCluster({
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
amazonaws_rds.DeleteDBClusterEndpoint({
  "DBClusterEndpointIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required** `string`

#### Output
* output [DBClusterEndpoint](#dbclusterendpoint)

### DeleteDBClusterEndpoint



```js
amazonaws_rds.DeleteDBClusterEndpoint({
  "DBClusterEndpointIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterEndpointIdentifier **required**

#### Output
* output [DBClusterEndpoint](#dbclusterendpoint)

### DeleteDBClusterParameterGroup



```js
amazonaws_rds.DeleteDBClusterParameterGroup({
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
amazonaws_rds.DeleteDBClusterParameterGroup({
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
amazonaws_rds.DeleteDBClusterSnapshot({
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
amazonaws_rds.DeleteDBClusterSnapshot({
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
amazonaws_rds.DeleteDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * SkipFinalSnapshot `boolean`
  * FinalDBSnapshotIdentifier `string`
  * DeleteAutomatedBackups `boolean`

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBInstance



```js
amazonaws_rds.DeleteDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * DeleteAutomatedBackups
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBInstanceAutomatedBackup



```js
amazonaws_rds.DeleteDBInstanceAutomatedBackup({}, context)
```

#### Input
* input `object`
  * DbiResourceId `string`
  * DBInstanceAutomatedBackupsArn `string`

#### Output
* output [DeleteDBInstanceAutomatedBackupResult](#deletedbinstanceautomatedbackupresult)

### DeleteDBInstanceAutomatedBackup



```js
amazonaws_rds.DeleteDBInstanceAutomatedBackup({}, context)
```

#### Input
* input `object`
  * DBInstanceAutomatedBackupsArn
  * DbiResourceId

#### Output
* output [DeleteDBInstanceAutomatedBackupResult](#deletedbinstanceautomatedbackupresult)

### DeleteDBParameterGroup



```js
amazonaws_rds.DeleteDBParameterGroup({
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
amazonaws_rds.DeleteDBParameterGroup({
  "DBParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required**

#### Output
*Output schema unknown*

### DeleteDBProxy



```js
amazonaws_rds.DeleteDBProxy({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`

#### Output
* output [DeleteDBProxyResponse](#deletedbproxyresponse)

### DeleteDBProxy



```js
amazonaws_rds.DeleteDBProxy({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * DBProxyName **required**

#### Output
* output [DeleteDBProxyResponse](#deletedbproxyresponse)

### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({
  "DBSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({
  "DBSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required**

#### Output
*Output schema unknown*

### DeleteDBSnapshot



```js
amazonaws_rds.DeleteDBSnapshot({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** `string`

#### Output
* output [DeleteDBSnapshotResult](#deletedbsnapshotresult)

### DeleteDBSnapshot



```js
amazonaws_rds.DeleteDBSnapshot({
  "DBSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required**

#### Output
* output [DeleteDBSnapshotResult](#deletedbsnapshotresult)

### DeleteDBSubnetGroup



```js
amazonaws_rds.DeleteDBSubnetGroup({
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
amazonaws_rds.DeleteDBSubnetGroup({
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
amazonaws_rds.DeleteEventSubscription({
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
amazonaws_rds.DeleteEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required**

#### Output
* output [DeleteEventSubscriptionResult](#deleteeventsubscriptionresult)

### DeleteGlobalCluster



```js
amazonaws_rds.DeleteGlobalCluster({
  "GlobalClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier **required** `string`

#### Output
* output [DeleteGlobalClusterResult](#deleteglobalclusterresult)

### DeleteGlobalCluster



```js
amazonaws_rds.DeleteGlobalCluster({
  "GlobalClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier **required**

#### Output
* output [DeleteGlobalClusterResult](#deleteglobalclusterresult)

### DeleteInstallationMedia



```js
amazonaws_rds.DeleteInstallationMedia({
  "InstallationMediaId": ""
}, context)
```

#### Input
* input `object`
  * InstallationMediaId **required** `string`

#### Output
* output [InstallationMedia](#installationmedia)

### DeleteInstallationMedia



```js
amazonaws_rds.DeleteInstallationMedia({
  "InstallationMediaId": null
}, context)
```

#### Input
* input `object`
  * InstallationMediaId **required**

#### Output
* output [InstallationMedia](#installationmedia)

### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Input
* input `object`
  * OptionGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({
  "OptionGroupName": null
}, context)
```

#### Input
* input `object`
  * OptionGroupName **required**

#### Output
*Output schema unknown*

### DeregisterDBProxyTargets



```js
amazonaws_rds.DeregisterDBProxyTargets({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * TargetGroupName `string`
  * DBInstanceIdentifiers `array`
  * DBClusterIdentifiers `array`

#### Output
* output [DeregisterDBProxyTargetsResponse](#deregisterdbproxytargetsresponse)

### DeregisterDBProxyTargets



```js
amazonaws_rds.DeregisterDBProxyTargets({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifiers
    * items [String](#string)
  * DBInstanceIdentifiers
    * items [String](#string)
  * DBProxyName **required**
  * TargetGroupName

#### Output
* output [DeregisterDBProxyTargetsResponse](#deregisterdbproxytargetsresponse)

### DescribeAccountAttributes



```js
amazonaws_rds.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [AccountAttributesMessage](#accountattributesmessage)

### DescribeAccountAttributes



```js
amazonaws_rds.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [AccountAttributesMessage](#accountattributesmessage)

### DescribeCertificates



```js
amazonaws_rds.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * CertificateIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CertificateMessage](#certificatemessage)

### DescribeCertificates



```js
amazonaws_rds.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CertificateIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [CertificateMessage](#certificatemessage)

### DescribeCustomAvailabilityZones



```js
amazonaws_rds.DescribeCustomAvailabilityZones({}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneId `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CustomAvailabilityZoneMessage](#customavailabilityzonemessage)

### DescribeCustomAvailabilityZones



```js
amazonaws_rds.DescribeCustomAvailabilityZones({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CustomAvailabilityZoneId
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [CustomAvailabilityZoneMessage](#customavailabilityzonemessage)

### DescribeDBClusterBacktracks



```js
amazonaws_rds.DescribeDBClusterBacktracks({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * BacktrackIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterBacktrackMessage](#dbclusterbacktrackmessage)

### DescribeDBClusterBacktracks



```js
amazonaws_rds.DescribeDBClusterBacktracks({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * BacktrackIdentifier
  * DBClusterIdentifier **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterBacktrackMessage](#dbclusterbacktrackmessage)

### DescribeDBClusterEndpoints



```js
amazonaws_rds.DescribeDBClusterEndpoints({}, context)
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
amazonaws_rds.DescribeDBClusterEndpoints({}, context)
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
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
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
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
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
amazonaws_rds.DescribeDBClusterParameters({
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
amazonaws_rds.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
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
amazonaws_rds.DescribeDBClusterSnapshotAttributes({
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
amazonaws_rds.DescribeDBClusterSnapshotAttributes({
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
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
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
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
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
amazonaws_rds.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * IncludeShared `boolean`

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBClusters



```js
amazonaws_rds.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludeShared
  * Marker
  * MaxRecords

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBEngineVersions



```js
amazonaws_rds.DescribeDBEngineVersions({}, context)
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
  * IncludeAll `boolean`

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBEngineVersions



```js
amazonaws_rds.DescribeDBEngineVersions({}, context)
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
  * IncludeAll
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBInstanceAutomatedBackups



```js
amazonaws_rds.DescribeDBInstanceAutomatedBackups({}, context)
```

#### Input
* input `object`
  * DbiResourceId `string`
  * DBInstanceIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * DBInstanceAutomatedBackupsArn `string`

#### Output
* output [DBInstanceAutomatedBackupMessage](#dbinstanceautomatedbackupmessage)

### DescribeDBInstanceAutomatedBackups



```js
amazonaws_rds.DescribeDBInstanceAutomatedBackups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceAutomatedBackupsArn
  * DBInstanceIdentifier
  * DbiResourceId
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBInstanceAutomatedBackupMessage](#dbinstanceautomatedbackupmessage)

### DescribeDBInstances



```js
amazonaws_rds.DescribeDBInstances({}, context)
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
amazonaws_rds.DescribeDBInstances({}, context)
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

### DescribeDBLogFiles



```js
amazonaws_rds.DescribeDBLogFiles({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * FilenameContains `string`
  * FileLastWritten `integer`
  * FileSize `integer`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeDBLogFilesResponse](#describedblogfilesresponse)

### DescribeDBLogFiles



```js
amazonaws_rds.DescribeDBLogFiles({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier **required**
  * FileLastWritten
  * FileSize
  * FilenameContains
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DescribeDBLogFilesResponse](#describedblogfilesresponse)

### DescribeDBParameterGroups



```js
amazonaws_rds.DescribeDBParameterGroups({}, context)
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
amazonaws_rds.DescribeDBParameterGroups({}, context)
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
amazonaws_rds.DescribeDBParameters({
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
amazonaws_rds.DescribeDBParameters({
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

### DescribeDBProxies



```js
amazonaws_rds.DescribeDBProxies({}, context)
```

#### Input
* input `object`
  * DBProxyName `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [DescribeDBProxiesResponse](#describedbproxiesresponse)

### DescribeDBProxies



```js
amazonaws_rds.DescribeDBProxies({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBProxyName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DescribeDBProxiesResponse](#describedbproxiesresponse)

### DescribeDBProxyTargetGroups



```js
amazonaws_rds.DescribeDBProxyTargetGroups({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * TargetGroupName `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [DescribeDBProxyTargetGroupsResponse](#describedbproxytargetgroupsresponse)

### DescribeDBProxyTargetGroups



```js
amazonaws_rds.DescribeDBProxyTargetGroups({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBProxyName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * TargetGroupName

#### Output
* output [DescribeDBProxyTargetGroupsResponse](#describedbproxytargetgroupsresponse)

### DescribeDBProxyTargets



```js
amazonaws_rds.DescribeDBProxyTargets({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * TargetGroupName `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [DescribeDBProxyTargetsResponse](#describedbproxytargetsresponse)

### DescribeDBProxyTargets



```js
amazonaws_rds.DescribeDBProxyTargets({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBProxyName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * TargetGroupName

#### Output
* output [DescribeDBProxyTargetsResponse](#describedbproxytargetsresponse)

### DescribeDBSecurityGroups



```js
amazonaws_rds.DescribeDBSecurityGroups({}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBSecurityGroupMessage](#dbsecuritygroupmessage)

### DescribeDBSecurityGroups



```js
amazonaws_rds.DescribeDBSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBSecurityGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBSecurityGroupMessage](#dbsecuritygroupmessage)

### DescribeDBSnapshotAttributes



```js
amazonaws_rds.DescribeDBSnapshotAttributes({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** `string`

#### Output
* output [DescribeDBSnapshotAttributesResult](#describedbsnapshotattributesresult)

### DescribeDBSnapshotAttributes



```js
amazonaws_rds.DescribeDBSnapshotAttributes({
  "DBSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required**

#### Output
* output [DescribeDBSnapshotAttributesResult](#describedbsnapshotattributesresult)

### DescribeDBSnapshots



```js
amazonaws_rds.DescribeDBSnapshots({}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier `string`
  * DBSnapshotIdentifier `string`
  * SnapshotType `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * IncludeShared `boolean`
  * IncludePublic `boolean`
  * DbiResourceId `string`

#### Output
* output [DBSnapshotMessage](#dbsnapshotmessage)

### DescribeDBSnapshots



```js
amazonaws_rds.DescribeDBSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier
  * DBSnapshotIdentifier
  * DbiResourceId
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
* output [DBSnapshotMessage](#dbsnapshotmessage)

### DescribeDBSubnetGroups



```js
amazonaws_rds.DescribeDBSubnetGroups({}, context)
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
amazonaws_rds.DescribeDBSubnetGroups({}, context)
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
amazonaws_rds.DescribeEngineDefaultClusterParameters({
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
amazonaws_rds.DescribeEngineDefaultClusterParameters({
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
amazonaws_rds.DescribeEngineDefaultParameters({
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
amazonaws_rds.DescribeEngineDefaultParameters({
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
amazonaws_rds.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType `string`
  * Filters `array`

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventCategories



```js
amazonaws_rds.DescribeEventCategories({}, context)
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
amazonaws_rds.DescribeEventSubscriptions({}, context)
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
amazonaws_rds.DescribeEventSubscriptions({}, context)
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
amazonaws_rds.DescribeEvents({}, context)
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
amazonaws_rds.DescribeEvents({}, context)
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

### DescribeExportTasks



```js
amazonaws_rds.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * ExportTaskIdentifier `string`
  * SourceArn `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [ExportTasksMessage](#exporttasksmessage)

### DescribeExportTasks



```js
amazonaws_rds.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ExportTaskIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceArn

#### Output
* output [ExportTasksMessage](#exporttasksmessage)

### DescribeGlobalClusters



```js
amazonaws_rds.DescribeGlobalClusters({}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [GlobalClustersMessage](#globalclustersmessage)

### DescribeGlobalClusters



```js
amazonaws_rds.DescribeGlobalClusters({}, context)
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
  * GlobalClusterIdentifier
  * Marker
  * MaxRecords

#### Output
* output [GlobalClustersMessage](#globalclustersmessage)

### DescribeInstallationMedia



```js
amazonaws_rds.DescribeInstallationMedia({}, context)
```

#### Input
* input `object`
  * InstallationMediaId `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [InstallationMediaMessage](#installationmediamessage)

### DescribeInstallationMedia



```js
amazonaws_rds.DescribeInstallationMedia({}, context)
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
  * InstallationMediaId
  * Marker
  * MaxRecords

#### Output
* output [InstallationMediaMessage](#installationmediamessage)

### DescribeOptionGroupOptions



```js
amazonaws_rds.DescribeOptionGroupOptions({
  "EngineName": ""
}, context)
```

#### Input
* input `object`
  * EngineName **required** `string`
  * MajorEngineVersion `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [OptionGroupOptionsMessage](#optiongroupoptionsmessage)

### DescribeOptionGroupOptions



```js
amazonaws_rds.DescribeOptionGroupOptions({
  "EngineName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EngineName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * MajorEngineVersion
  * Marker
  * MaxRecords

#### Output
* output [OptionGroupOptionsMessage](#optiongroupoptionsmessage)

### DescribeOptionGroups



```js
amazonaws_rds.DescribeOptionGroups({}, context)
```

#### Input
* input `object`
  * OptionGroupName `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`
  * EngineName `string`
  * MajorEngineVersion `string`

#### Output
* output [OptionGroups](#optiongroups)

### DescribeOptionGroups



```js
amazonaws_rds.DescribeOptionGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EngineName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * MajorEngineVersion
  * Marker
  * MaxRecords
  * OptionGroupName

#### Output
* output [OptionGroups](#optiongroups)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_rds.DescribeOrderableDBInstanceOptions({
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * Engine **required** `string`
  * EngineVersion `string`
  * DBInstanceClass `string`
  * LicenseModel `string`
  * AvailabilityZoneGroup `string`
  * Vpc `boolean`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_rds.DescribeOrderableDBInstanceOptions({
  "Engine": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * AvailabilityZoneGroup
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
amazonaws_rds.DescribePendingMaintenanceActions({}, context)
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
amazonaws_rds.DescribePendingMaintenanceActions({}, context)
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
  * ResourceIdentifier

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribeReservedDBInstances



```js
amazonaws_rds.DescribeReservedDBInstances({}, context)
```

#### Input
* input `object`
  * ReservedDBInstanceId `string`
  * ReservedDBInstancesOfferingId `string`
  * DBInstanceClass `string`
  * Duration `string`
  * ProductDescription `string`
  * OfferingType `string`
  * MultiAZ `boolean`
  * LeaseId `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedDBInstanceMessage](#reserveddbinstancemessage)

### DescribeReservedDBInstances



```js
amazonaws_rds.DescribeReservedDBInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass
  * Duration
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LeaseId
  * Marker
  * MaxRecords
  * MultiAZ
  * OfferingType
  * ProductDescription
  * ReservedDBInstanceId
  * ReservedDBInstancesOfferingId

#### Output
* output [ReservedDBInstanceMessage](#reserveddbinstancemessage)

### DescribeReservedDBInstancesOfferings



```js
amazonaws_rds.DescribeReservedDBInstancesOfferings({}, context)
```

#### Input
* input `object`
  * ReservedDBInstancesOfferingId `string`
  * DBInstanceClass `string`
  * Duration `string`
  * ProductDescription `string`
  * OfferingType `string`
  * MultiAZ `boolean`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedDBInstancesOfferingMessage](#reserveddbinstancesofferingmessage)

### DescribeReservedDBInstancesOfferings



```js
amazonaws_rds.DescribeReservedDBInstancesOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass
  * Duration
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * MultiAZ
  * OfferingType
  * ProductDescription
  * ReservedDBInstancesOfferingId

#### Output
* output [ReservedDBInstancesOfferingMessage](#reserveddbinstancesofferingmessage)

### DescribeSourceRegions



```js
amazonaws_rds.DescribeSourceRegions({}, context)
```

#### Input
* input `object`
  * RegionName `string`
  * MaxRecords `integer`
  * Marker `string`
  * Filters `array`

#### Output
* output [SourceRegionMessage](#sourceregionmessage)

### DescribeSourceRegions



```js
amazonaws_rds.DescribeSourceRegions({}, context)
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
  * RegionName

#### Output
* output [SourceRegionMessage](#sourceregionmessage)

### DescribeValidDBInstanceModifications



```js
amazonaws_rds.DescribeValidDBInstanceModifications({
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
amazonaws_rds.DescribeValidDBInstanceModifications({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**

#### Output
* output [DescribeValidDBInstanceModificationsResult](#describevaliddbinstancemodificationsresult)

### DownloadDBLogFilePortion



```js
amazonaws_rds.DownloadDBLogFilePortion({
  "DBInstanceIdentifier": "",
  "LogFileName": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * LogFileName **required** `string`
  * Marker `string`
  * NumberOfLines `integer`

#### Output
* output [DownloadDBLogFilePortionDetails](#downloaddblogfileportiondetails)

### DownloadDBLogFilePortion



```js
amazonaws_rds.DownloadDBLogFilePortion({
  "DBInstanceIdentifier": null,
  "LogFileName": null
}, context)
```

#### Input
* input `object`
  * NumberOfLines `string`
  * Marker `string`
  * DBInstanceIdentifier **required**
  * LogFileName **required**
  * Marker
  * NumberOfLines

#### Output
* output [DownloadDBLogFilePortionDetails](#downloaddblogfileportiondetails)

### FailoverDBCluster



```js
amazonaws_rds.FailoverDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * TargetDBInstanceIdentifier `string`

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### FailoverDBCluster



```js
amazonaws_rds.FailoverDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * TargetDBInstanceIdentifier

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### ImportInstallationMedia



```js
amazonaws_rds.ImportInstallationMedia({
  "CustomAvailabilityZoneId": "",
  "Engine": "",
  "EngineVersion": "",
  "EngineInstallationMediaPath": "",
  "OSInstallationMediaPath": ""
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneId **required** `string`
  * Engine **required** `string`
  * EngineVersion **required** `string`
  * EngineInstallationMediaPath **required** `string`
  * OSInstallationMediaPath **required** `string`

#### Output
* output [InstallationMedia](#installationmedia)

### ImportInstallationMedia



```js
amazonaws_rds.ImportInstallationMedia({
  "CustomAvailabilityZoneId": null,
  "Engine": null,
  "EngineVersion": null,
  "EngineInstallationMediaPath": null,
  "OSInstallationMediaPath": null
}, context)
```

#### Input
* input `object`
  * CustomAvailabilityZoneId **required**
  * Engine **required**
  * EngineInstallationMediaPath **required**
  * EngineVersion **required**
  * OSInstallationMediaPath **required**

#### Output
* output [InstallationMedia](#installationmedia)

### ListTagsForResource



```js
amazonaws_rds.ListTagsForResource({
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
amazonaws_rds.ListTagsForResource({
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

### ModifyCertificates



```js
amazonaws_rds.ModifyCertificates({}, context)
```

#### Input
* input `object`
  * CertificateIdentifier `string`
  * RemoveCustomerOverride `boolean`

#### Output
* output [ModifyCertificatesResult](#modifycertificatesresult)

### ModifyCertificates



```js
amazonaws_rds.ModifyCertificates({}, context)
```

#### Input
* input `object`
  * CertificateIdentifier
  * RemoveCustomerOverride

#### Output
* output [ModifyCertificatesResult](#modifycertificatesresult)

### ModifyCurrentDBClusterCapacity



```js
amazonaws_rds.ModifyCurrentDBClusterCapacity({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * Capacity `integer`
  * SecondsBeforeTimeout `integer`
  * TimeoutAction `string`

#### Output
* output [DBClusterCapacityInfo](#dbclustercapacityinfo)

### ModifyCurrentDBClusterCapacity



```js
amazonaws_rds.ModifyCurrentDBClusterCapacity({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * Capacity
  * DBClusterIdentifier **required**
  * SecondsBeforeTimeout
  * TimeoutAction

#### Output
* output [DBClusterCapacityInfo](#dbclustercapacityinfo)

### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({
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
  * BacktrackWindow `integer`
  * CloudwatchLogsExportConfiguration `object`
  * EngineVersion `string`
  * AllowMajorVersionUpgrade `boolean`
  * DBInstanceParameterGroupName `string`
  * Domain `string`
  * DomainIAMRoleName `string`
  * ScalingConfiguration `object`
  * DeletionProtection `boolean`
  * EnableHttpEndpoint `boolean`
  * CopyTagsToSnapshot `boolean`
  * EnableGlobalWriteForwarding `boolean`

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * BacktrackWindow
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBInstanceParameterGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableGlobalWriteForwarding
  * EnableHttpEndpoint
  * EnableIAMDatabaseAuthentication
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBClusterEndpoint



```js
amazonaws_rds.ModifyDBClusterEndpoint({
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
* output [DBClusterEndpoint](#dbclusterendpoint)

### ModifyDBClusterEndpoint



```js
amazonaws_rds.ModifyDBClusterEndpoint({
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
* output [DBClusterEndpoint](#dbclusterendpoint)

### ModifyDBClusterParameterGroup



```js
amazonaws_rds.ModifyDBClusterParameterGroup({
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
amazonaws_rds.ModifyDBClusterParameterGroup({
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
      * SupportedEngineModes
        * items [String](#string)

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_rds.ModifyDBClusterSnapshotAttribute({
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
amazonaws_rds.ModifyDBClusterSnapshotAttribute({
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
amazonaws_rds.ModifyDBInstance({
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
  * PerformanceInsightsRetentionPeriod `integer`
  * CloudwatchLogsExportConfiguration `object`
  * ProcessorFeatures `array`
  * UseDefaultProcessorFeatures `boolean`
  * DeletionProtection `boolean`
  * MaxAllocatedStorage `integer`
  * CertificateRotationRestart `boolean`
  * ReplicaMode `string`

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBInstance



```js
amazonaws_rds.ModifyDBInstance({
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
  * CertificateRotationRestart
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NewDBInstanceIdentifier
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PromotionTier
  * PubliclyAccessible
  * ReplicaMode
  * StorageType
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBParameterGroup



```js
amazonaws_rds.ModifyDBParameterGroup({
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
amazonaws_rds.ModifyDBParameterGroup({
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
      * SupportedEngineModes
        * items [String](#string)

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### ModifyDBProxy



```js
amazonaws_rds.ModifyDBProxy({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * NewDBProxyName `string`
  * Auth `array`
  * RequireTLS `boolean`
  * IdleClientTimeout `integer`
  * DebugLogging `boolean`
  * RoleArn `string`
  * SecurityGroups `array`

#### Output
* output [ModifyDBProxyResponse](#modifydbproxyresponse)

### ModifyDBProxy



```js
amazonaws_rds.ModifyDBProxy({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * Auth
    * items [UserAuthConfig](#userauthconfig)
  * DBProxyName **required**
  * DebugLogging
  * IdleClientTimeout
  * NewDBProxyName
  * RequireTLS
  * RoleArn
  * SecurityGroups
    * items [String](#string)

#### Output
* output [ModifyDBProxyResponse](#modifydbproxyresponse)

### ModifyDBProxyTargetGroup



```js
amazonaws_rds.ModifyDBProxyTargetGroup({
  "TargetGroupName": "",
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * TargetGroupName **required** `string`
  * DBProxyName **required** `string`
  * ConnectionPoolConfig `object`
  * NewName `string`

#### Output
* output [ModifyDBProxyTargetGroupResponse](#modifydbproxytargetgroupresponse)

### ModifyDBProxyTargetGroup



```js
amazonaws_rds.ModifyDBProxyTargetGroup({
  "TargetGroupName": null,
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * ConnectionPoolConfig
    * ConnectionBorrowTimeout
    * InitQuery
    * MaxConnectionsPercent
    * MaxIdleConnectionsPercent
    * SessionPinningFilters
      * items [String](#string)
  * DBProxyName **required**
  * NewName
  * TargetGroupName **required**

#### Output
* output [ModifyDBProxyTargetGroupResponse](#modifydbproxytargetgroupresponse)

### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** `string`
  * EngineVersion `string`
  * OptionGroupName `string`

#### Output
* output [ModifyDBSnapshotResult](#modifydbsnapshotresult)

### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({
  "DBSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required**
  * EngineVersion
  * OptionGroupName

#### Output
* output [ModifyDBSnapshotResult](#modifydbsnapshotresult)

### ModifyDBSnapshotAttribute



```js
amazonaws_rds.ModifyDBSnapshotAttribute({
  "DBSnapshotIdentifier": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** `string`
  * AttributeName **required** `string`
  * ValuesToAdd `array`
  * ValuesToRemove `array`

#### Output
* output [ModifyDBSnapshotAttributeResult](#modifydbsnapshotattributeresult)

### ModifyDBSnapshotAttribute



```js
amazonaws_rds.ModifyDBSnapshotAttribute({
  "DBSnapshotIdentifier": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * DBSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

#### Output
* output [ModifyDBSnapshotAttributeResult](#modifydbsnapshotattributeresult)

### ModifyDBSubnetGroup



```js
amazonaws_rds.ModifyDBSubnetGroup({
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
amazonaws_rds.ModifyDBSubnetGroup({
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
amazonaws_rds.ModifyEventSubscription({
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
amazonaws_rds.ModifyEventSubscription({
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

### ModifyGlobalCluster



```js
amazonaws_rds.ModifyGlobalCluster({}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier `string`
  * NewGlobalClusterIdentifier `string`
  * DeletionProtection `boolean`

#### Output
* output [ModifyGlobalClusterResult](#modifyglobalclusterresult)

### ModifyGlobalCluster



```js
amazonaws_rds.ModifyGlobalCluster({}, context)
```

#### Input
* input `object`
  * DeletionProtection
  * GlobalClusterIdentifier
  * NewGlobalClusterIdentifier

#### Output
* output [ModifyGlobalClusterResult](#modifyglobalclusterresult)

### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Input
* input `object`
  * OptionGroupName **required** `string`
  * OptionsToInclude `array`
  * OptionsToRemove `array`
  * ApplyImmediately `boolean`

#### Output
* output [ModifyOptionGroupResult](#modifyoptiongroupresult)

### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({
  "OptionGroupName": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * OptionGroupName **required**
  * OptionsToInclude
    * items
      * DBSecurityGroupMemberships
        * items
      * OptionName **required**
      * OptionSettings
        * items
          * AllowedValues
          * ApplyType
          * DataType
          * DefaultValue
          * Description
          * IsCollection
          * IsModifiable
          * Name
          * Value
      * OptionVersion
      * Port
      * VpcSecurityGroupMemberships
        * items
  * OptionsToRemove
    * items [String](#string)

#### Output
* output [ModifyOptionGroupResult](#modifyoptiongroupresult)

### PromoteReadReplica



```js
amazonaws_rds.PromoteReadReplica({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * BackupRetentionPeriod `integer`
  * PreferredBackupWindow `string`

#### Output
* output [PromoteReadReplicaResult](#promotereadreplicaresult)

### PromoteReadReplica



```js
amazonaws_rds.PromoteReadReplica({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * BackupRetentionPeriod
  * DBInstanceIdentifier **required**
  * PreferredBackupWindow

#### Output
* output [PromoteReadReplicaResult](#promotereadreplicaresult)

### PromoteReadReplicaDBCluster



```js
amazonaws_rds.PromoteReadReplicaDBCluster({
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
amazonaws_rds.PromoteReadReplicaDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [PromoteReadReplicaDBClusterResult](#promotereadreplicadbclusterresult)

### PurchaseReservedDBInstancesOffering



```js
amazonaws_rds.PurchaseReservedDBInstancesOffering({
  "ReservedDBInstancesOfferingId": ""
}, context)
```

#### Input
* input `object`
  * ReservedDBInstancesOfferingId **required** `string`
  * ReservedDBInstanceId `string`
  * DBInstanceCount `integer`
  * Tags `array`

#### Output
* output [PurchaseReservedDBInstancesOfferingResult](#purchasereserveddbinstancesofferingresult)

### PurchaseReservedDBInstancesOffering



```js
amazonaws_rds.PurchaseReservedDBInstancesOffering({
  "ReservedDBInstancesOfferingId": null
}, context)
```

#### Input
* input `object`
  * DBInstanceCount
  * ReservedDBInstanceId
  * ReservedDBInstancesOfferingId **required**
  * Tags [TagList](#taglist)

#### Output
* output [PurchaseReservedDBInstancesOfferingResult](#purchasereserveddbinstancesofferingresult)

### RebootDBInstance



```js
amazonaws_rds.RebootDBInstance({
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
amazonaws_rds.RebootDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * ForceFailover

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RegisterDBProxyTargets



```js
amazonaws_rds.RegisterDBProxyTargets({
  "DBProxyName": ""
}, context)
```

#### Input
* input `object`
  * DBProxyName **required** `string`
  * TargetGroupName `string`
  * DBInstanceIdentifiers `array`
  * DBClusterIdentifiers `array`

#### Output
* output [RegisterDBProxyTargetsResponse](#registerdbproxytargetsresponse)

### RegisterDBProxyTargets



```js
amazonaws_rds.RegisterDBProxyTargets({
  "DBProxyName": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifiers
    * items [String](#string)
  * DBInstanceIdentifiers
    * items [String](#string)
  * DBProxyName **required**
  * TargetGroupName

#### Output
* output [RegisterDBProxyTargetsResponse](#registerdbproxytargetsresponse)

### RemoveFromGlobalCluster



```js
amazonaws_rds.RemoveFromGlobalCluster({}, context)
```

#### Input
* input `object`
  * GlobalClusterIdentifier `string`
  * DbClusterIdentifier `string`

#### Output
* output [RemoveFromGlobalClusterResult](#removefromglobalclusterresult)

### RemoveFromGlobalCluster



```js
amazonaws_rds.RemoveFromGlobalCluster({}, context)
```

#### Input
* input `object`
  * DbClusterIdentifier
  * GlobalClusterIdentifier

#### Output
* output [RemoveFromGlobalClusterResult](#removefromglobalclusterresult)

### RemoveRoleFromDBCluster



```js
amazonaws_rds.RemoveRoleFromDBCluster({
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
amazonaws_rds.RemoveRoleFromDBCluster({
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

### RemoveRoleFromDBInstance



```js
amazonaws_rds.RemoveRoleFromDBInstance({
  "DBInstanceIdentifier": "",
  "RoleArn": "",
  "FeatureName": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * RoleArn **required** `string`
  * FeatureName **required** `string`

#### Output
*Output schema unknown*

### RemoveRoleFromDBInstance



```js
amazonaws_rds.RemoveRoleFromDBInstance({
  "DBInstanceIdentifier": null,
  "RoleArn": null,
  "FeatureName": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * FeatureName **required**
  * RoleArn **required**

#### Output
*Output schema unknown*

### RemoveSourceIdentifierFromSubscription



```js
amazonaws_rds.RemoveSourceIdentifierFromSubscription({
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
amazonaws_rds.RemoveSourceIdentifierFromSubscription({
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
amazonaws_rds.RemoveTagsFromResource({
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
amazonaws_rds.RemoveTagsFromResource({
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
amazonaws_rds.ResetDBClusterParameterGroup({
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
amazonaws_rds.ResetDBClusterParameterGroup({
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
      * SupportedEngineModes
        * items [String](#string)
  * ResetAllParameters

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ResetDBParameterGroup



```js
amazonaws_rds.ResetDBParameterGroup({
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
amazonaws_rds.ResetDBParameterGroup({
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
      * SupportedEngineModes
        * items [String](#string)
  * ResetAllParameters

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### RestoreDBClusterFromS3



```js
amazonaws_rds.RestoreDBClusterFromS3({
  "DBClusterIdentifier": "",
  "Engine": "",
  "MasterUsername": "",
  "MasterUserPassword": "",
  "SourceEngine": "",
  "SourceEngineVersion": "",
  "S3BucketName": "",
  "S3IngestionRoleArn": ""
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
  * MasterUsername **required** `string`
  * MasterUserPassword **required** `string`
  * OptionGroupName `string`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * Tags `array`
  * StorageEncrypted `boolean`
  * KmsKeyId `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * SourceEngine **required** `string`
  * SourceEngineVersion **required** `string`
  * S3BucketName **required** `string`
  * S3Prefix `string`
  * S3IngestionRoleArn **required** `string`
  * BacktrackWindow `integer`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`
  * CopyTagsToSnapshot `boolean`
  * Domain `string`
  * DomainIAMRoleName `string`

#### Output
* output [RestoreDBClusterFromS3Result](#restoredbclusterfroms3result)

### RestoreDBClusterFromS3



```js
amazonaws_rds.RestoreDBClusterFromS3({
  "DBClusterIdentifier": null,
  "Engine": null,
  "MasterUsername": null,
  "MasterUserPassword": null,
  "SourceEngine": null,
  "SourceEngineVersion": null,
  "S3BucketName": null,
  "S3IngestionRoleArn": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * BacktrackWindow
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword **required**
  * MasterUsername **required**
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * S3BucketName **required**
  * S3IngestionRoleArn **required**
  * S3Prefix
  * SourceEngine **required**
  * SourceEngineVersion **required**
  * StorageEncrypted
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterFromS3Result](#restoredbclusterfroms3result)

### RestoreDBClusterFromSnapshot



```js
amazonaws_rds.RestoreDBClusterFromSnapshot({
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
  * BacktrackWindow `integer`
  * EnableCloudwatchLogsExports `array`
  * EngineMode `string`
  * ScalingConfiguration `object`
  * DBClusterParameterGroupName `string`
  * DeletionProtection `boolean`
  * CopyTagsToSnapshot `boolean`
  * Domain `string`
  * DomainIAMRoleName `string`

#### Output
* output [RestoreDBClusterFromSnapshotResult](#restoredbclusterfromsnapshotresult)

### RestoreDBClusterFromSnapshot



```js
amazonaws_rds.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": null,
  "SnapshotIdentifier": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * BacktrackWindow
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineMode
  * EngineVersion
  * KmsKeyId
  * OptionGroupName
  * Port
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
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
amazonaws_rds.RestoreDBClusterToPointInTime({
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
  * BacktrackWindow `integer`
  * EnableCloudwatchLogsExports `array`
  * DBClusterParameterGroupName `string`
  * DeletionProtection `boolean`
  * CopyTagsToSnapshot `boolean`
  * Domain `string`
  * DomainIAMRoleName `string`

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### RestoreDBClusterToPointInTime



```js
amazonaws_rds.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": null,
  "SourceDBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * BacktrackWindow
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * KmsKeyId
  * OptionGroupName
  * Port
  * RestoreToTime
  * RestoreType
  * SourceDBClusterIdentifier **required**
  * Tags [TagList](#taglist)
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### RestoreDBInstanceFromDBSnapshot



```js
amazonaws_rds.RestoreDBInstanceFromDBSnapshot({
  "DBInstanceIdentifier": "",
  "DBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * DBSnapshotIdentifier **required** `string`
  * DBInstanceClass `string`
  * Port `integer`
  * AvailabilityZone `string`
  * DBSubnetGroupName `string`
  * MultiAZ `boolean`
  * PubliclyAccessible `boolean`
  * AutoMinorVersionUpgrade `boolean`
  * LicenseModel `string`
  * DBName `string`
  * Engine `string`
  * Iops `integer`
  * OptionGroupName `string`
  * Tags `array`
  * StorageType `string`
  * TdeCredentialArn `string`
  * TdeCredentialPassword `string`
  * VpcSecurityGroupIds `array`
  * Domain `string`
  * CopyTagsToSnapshot `boolean`
  * DomainIAMRoleName `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnableCloudwatchLogsExports `array`
  * ProcessorFeatures `array`
  * UseDefaultProcessorFeatures `boolean`
  * DBParameterGroupName `string`
  * DeletionProtection `boolean`

#### Output
* output [RestoreDBInstanceFromDBSnapshotResult](#restoredbinstancefromdbsnapshotresult)

### RestoreDBInstanceFromDBSnapshot



```js
amazonaws_rds.RestoreDBInstanceFromDBSnapshot({
  "DBInstanceIdentifier": null,
  "DBSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSnapshotIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine
  * Iops
  * LicenseModel
  * MultiAZ
  * OptionGroupName
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * StorageType
  * Tags [TagList](#taglist)
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBInstanceFromDBSnapshotResult](#restoredbinstancefromdbsnapshotresult)

### RestoreDBInstanceFromS3



```js
amazonaws_rds.RestoreDBInstanceFromS3({
  "DBInstanceIdentifier": "",
  "DBInstanceClass": "",
  "Engine": "",
  "SourceEngine": "",
  "SourceEngineVersion": "",
  "S3BucketName": "",
  "S3IngestionRoleArn": ""
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
  * PubliclyAccessible `boolean`
  * Tags `array`
  * StorageType `string`
  * StorageEncrypted `boolean`
  * KmsKeyId `string`
  * CopyTagsToSnapshot `boolean`
  * MonitoringInterval `integer`
  * MonitoringRoleArn `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * SourceEngine **required** `string`
  * SourceEngineVersion **required** `string`
  * S3BucketName **required** `string`
  * S3Prefix `string`
  * S3IngestionRoleArn **required** `string`
  * EnablePerformanceInsights `boolean`
  * PerformanceInsightsKMSKeyId `string`
  * PerformanceInsightsRetentionPeriod `integer`
  * EnableCloudwatchLogsExports `array`
  * ProcessorFeatures `array`
  * UseDefaultProcessorFeatures `boolean`
  * DeletionProtection `boolean`
  * MaxAllocatedStorage `integer`

#### Output
* output [RestoreDBInstanceFromS3Result](#restoredbinstancefroms3result)

### RestoreDBInstanceFromS3



```js
amazonaws_rds.RestoreDBInstanceFromS3({
  "DBInstanceIdentifier": null,
  "DBInstanceClass": null,
  "Engine": null,
  "SourceEngine": null,
  "SourceEngineVersion": null,
  "S3BucketName": null,
  "S3IngestionRoleArn": null
}, context)
```

#### Input
* input `object`
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CopyTagsToSnapshot
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * S3BucketName **required**
  * S3IngestionRoleArn **required**
  * S3Prefix
  * SourceEngine **required**
  * SourceEngineVersion **required**
  * StorageEncrypted
  * StorageType
  * Tags
    * items
      * Key
      * Value
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBInstanceFromS3Result](#restoredbinstancefroms3result)

### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({
  "TargetDBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceDBInstanceIdentifier `string`
  * TargetDBInstanceIdentifier **required** `string`
  * RestoreTime `string`
  * UseLatestRestorableTime `boolean`
  * DBInstanceClass `string`
  * Port `integer`
  * AvailabilityZone `string`
  * DBSubnetGroupName `string`
  * MultiAZ `boolean`
  * PubliclyAccessible `boolean`
  * AutoMinorVersionUpgrade `boolean`
  * LicenseModel `string`
  * DBName `string`
  * Engine `string`
  * Iops `integer`
  * OptionGroupName `string`
  * CopyTagsToSnapshot `boolean`
  * Tags `array`
  * StorageType `string`
  * TdeCredentialArn `string`
  * TdeCredentialPassword `string`
  * VpcSecurityGroupIds `array`
  * Domain `string`
  * DomainIAMRoleName `string`
  * EnableIAMDatabaseAuthentication `boolean`
  * EnableCloudwatchLogsExports `array`
  * ProcessorFeatures `array`
  * UseDefaultProcessorFeatures `boolean`
  * DBParameterGroupName `string`
  * DeletionProtection `boolean`
  * SourceDbiResourceId `string`
  * MaxAllocatedStorage `integer`
  * SourceDBInstanceAutomatedBackupsArn `string`

#### Output
* output [RestoreDBInstanceToPointInTimeResult](#restoredbinstancetopointintimeresult)

### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({
  "TargetDBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBName
  * DBParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine
  * Iops
  * LicenseModel
  * MaxAllocatedStorage
  * MultiAZ
  * OptionGroupName
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * RestoreTime
  * SourceDBInstanceAutomatedBackupsArn
  * SourceDBInstanceIdentifier
  * SourceDbiResourceId
  * StorageType
  * Tags [TagList](#taglist)
  * TargetDBInstanceIdentifier **required**
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBInstanceToPointInTimeResult](#restoredbinstancetopointintimeresult)

### RevokeDBSecurityGroupIngress



```js
amazonaws_rds.RevokeDBSecurityGroupIngress({
  "DBSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required** `string`
  * CIDRIP `string`
  * EC2SecurityGroupName `string`
  * EC2SecurityGroupId `string`
  * EC2SecurityGroupOwnerId `string`

#### Output
* output [RevokeDBSecurityGroupIngressResult](#revokedbsecuritygroupingressresult)

### RevokeDBSecurityGroupIngress



```js
amazonaws_rds.RevokeDBSecurityGroupIngress({
  "DBSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * CIDRIP
  * DBSecurityGroupName **required**
  * EC2SecurityGroupId
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

#### Output
* output [RevokeDBSecurityGroupIngressResult](#revokedbsecuritygroupingressresult)

### StartActivityStream



```js
amazonaws_rds.StartActivityStream({
  "ResourceArn": "",
  "Mode": "",
  "KmsKeyId": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Mode **required** `string`
  * KmsKeyId **required** `string`
  * ApplyImmediately `boolean`

#### Output
* output [StartActivityStreamResponse](#startactivitystreamresponse)

### StartActivityStream



```js
amazonaws_rds.StartActivityStream({
  "ResourceArn": null,
  "Mode": null,
  "KmsKeyId": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * KmsKeyId **required**
  * Mode **required**
  * ResourceArn **required**

#### Output
* output [StartActivityStreamResponse](#startactivitystreamresponse)

### StartDBCluster



```js
amazonaws_rds.StartDBCluster({
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
amazonaws_rds.StartDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StartDBClusterResult](#startdbclusterresult)

### StartDBInstance



```js
amazonaws_rds.StartDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`

#### Output
* output [StartDBInstanceResult](#startdbinstanceresult)

### StartDBInstance



```js
amazonaws_rds.StartDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**

#### Output
* output [StartDBInstanceResult](#startdbinstanceresult)

### StartDBInstanceAutomatedBackupsReplication



```js
amazonaws_rds.StartDBInstanceAutomatedBackupsReplication({
  "SourceDBInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * SourceDBInstanceArn **required** `string`
  * BackupRetentionPeriod `integer`
  * KmsKeyId `string`
  * PreSignedUrl `string`

#### Output
* output [StartDBInstanceAutomatedBackupsReplicationResult](#startdbinstanceautomatedbackupsreplicationresult)

### StartDBInstanceAutomatedBackupsReplication



```js
amazonaws_rds.StartDBInstanceAutomatedBackupsReplication({
  "SourceDBInstanceArn": null
}, context)
```

#### Input
* input `object`
  * BackupRetentionPeriod
  * KmsKeyId
  * PreSignedUrl
  * SourceDBInstanceArn **required**

#### Output
* output [StartDBInstanceAutomatedBackupsReplicationResult](#startdbinstanceautomatedbackupsreplicationresult)

### StartExportTask



```js
amazonaws_rds.StartExportTask({
  "ExportTaskIdentifier": "",
  "SourceArn": "",
  "S3BucketName": "",
  "IamRoleArn": "",
  "KmsKeyId": ""
}, context)
```

#### Input
* input `object`
  * ExportTaskIdentifier **required** `string`
  * SourceArn **required** `string`
  * S3BucketName **required** `string`
  * IamRoleArn **required** `string`
  * KmsKeyId **required** `string`
  * S3Prefix `string`
  * ExportOnly `array`

#### Output
* output [ExportTask](#exporttask)

### StartExportTask



```js
amazonaws_rds.StartExportTask({
  "ExportTaskIdentifier": null,
  "SourceArn": null,
  "S3BucketName": null,
  "IamRoleArn": null,
  "KmsKeyId": null
}, context)
```

#### Input
* input `object`
  * ExportOnly
    * items [String](#string)
  * ExportTaskIdentifier **required**
  * IamRoleArn **required**
  * KmsKeyId **required**
  * S3BucketName **required**
  * S3Prefix
  * SourceArn **required**

#### Output
* output [ExportTask](#exporttask)

### StopActivityStream



```js
amazonaws_rds.StopActivityStream({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * ApplyImmediately `boolean`

#### Output
* output [StopActivityStreamResponse](#stopactivitystreamresponse)

### StopActivityStream



```js
amazonaws_rds.StopActivityStream({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * ResourceArn **required**

#### Output
* output [StopActivityStreamResponse](#stopactivitystreamresponse)

### StopDBCluster



```js
amazonaws_rds.StopDBCluster({
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
amazonaws_rds.StopDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StopDBClusterResult](#stopdbclusterresult)

### StopDBInstance



```js
amazonaws_rds.StopDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * DBSnapshotIdentifier `string`

#### Output
* output [StopDBInstanceResult](#stopdbinstanceresult)

### StopDBInstance



```js
amazonaws_rds.StopDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * DBSnapshotIdentifier

#### Output
* output [StopDBInstanceResult](#stopdbinstanceresult)

### StopDBInstanceAutomatedBackupsReplication



```js
amazonaws_rds.StopDBInstanceAutomatedBackupsReplication({
  "SourceDBInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * SourceDBInstanceArn **required** `string`

#### Output
* output [StopDBInstanceAutomatedBackupsReplicationResult](#stopdbinstanceautomatedbackupsreplicationresult)

### StopDBInstanceAutomatedBackupsReplication



```js
amazonaws_rds.StopDBInstanceAutomatedBackupsReplication({
  "SourceDBInstanceArn": null
}, context)
```

#### Input
* input `object`
  * SourceDBInstanceArn **required**

#### Output
* output [StopDBInstanceAutomatedBackupsReplicationResult](#stopdbinstanceautomatedbackupsreplicationresult)



## Definitions

### AccountAttributesMessage
* AccountAttributesMessage `object`: Data returned by the <b>DescribeAccountAttributes</b> action.
  * AccountQuotas
    * items
      * AccountQuotaName
      * Max
      * Used

### AccountQuota
* AccountQuota `object`: <p>Describes a quota for an AWS account.</p> <p>The following are account quotas:</p> <ul> <li> <p> <code>AllocatedStorage</code> - The total allocated storage per account, in GiB. The used value is the total allocated storage in the account, in GiB.</p> </li> <li> <p> <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group. The used value is the highest number of ingress rules in a DB security group in the account. Other DB security groups in the account might have a lower number of ingress rules.</p> </li> <li> <p> <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster. The used value is the highest number of custom endpoints in a DB clusters in the account. Other DB clusters in the account might have a lower number of custom endpoints.</p> </li> <li> <p> <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB cluster parameter groups in the account.</p> </li> <li> <p> <code>DBClusterRoles</code> - The number of associated AWS Identity and Access Management (IAM) roles per DB cluster. The used value is the highest number of associated IAM roles for a DB cluster in the account. Other DB clusters in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBClusters</code> - The number of DB clusters per account. The used value is the count of DB clusters in the account.</p> </li> <li> <p> <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance. The used value is the highest number of associated IAM roles for a DB instance in the account. Other DB instances in the account might have a lower number of associated IAM roles.</p> </li> <li> <p> <code>DBInstances</code> - The number of DB instances per account. The used value is the count of the DB instances in the account.</p> <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB instances apply to this quota.</p> </li> <li> <p> <code>DBParameterGroups</code> - The number of DB parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB parameter groups in the account.</p> </li> <li> <p> <code>DBSecurityGroups</code> - The number of DB security groups (not VPC security groups) per account, excluding the default security group. The used value is the count of nondefault DB security groups in the account.</p> </li> <li> <p> <code>DBSubnetGroups</code> - The number of DB subnet groups per account. The used value is the count of the DB subnet groups in the account.</p> </li> <li> <p> <code>EventSubscriptions</code> - The number of event subscriptions per account. The used value is the count of the event subscriptions in the account.</p> </li> <li> <p> <code>ManualClusterSnapshots</code> - The number of manual DB cluster snapshots per account. The used value is the count of the manual DB cluster snapshots in the account.</p> </li> <li> <p> <code>ManualSnapshots</code> - The number of manual DB instance snapshots per account. The used value is the count of the manual DB instance snapshots in the account.</p> </li> <li> <p> <code>OptionGroups</code> - The number of DB option groups per account, excluding default option groups. The used value is the count of nondefault DB option groups in the account.</p> </li> <li> <p> <code>ReadReplicasPerMaster</code> - The number of read replicas per DB instance. The used value is the highest number of read replicas for a DB instance in the account. Other DB instances in the account might have a lower number of read replicas.</p> </li> <li> <p> <code>ReservedDBInstances</code> - The number of reserved DB instances per account. The used value is the count of the active reserved DB instances in the account.</p> </li> <li> <p> <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group. The used value is highest number of subnets for a DB subnet group in the account. Other DB subnet groups in the account might have a lower number of subnets.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>.</p>
  * AccountQuotaName
  * Max
  * Used

### AccountQuotaList
* AccountQuotaList `array`
  * items
    * AccountQuotaName
    * Max
    * Used

### ActivityStreamMode
* ActivityStreamMode `string` (values: sync, async)

### ActivityStreamStatus
* ActivityStreamStatus `string` (values: stopped, starting, started, stopping)

### AddRoleToDBClusterMessage
* AddRoleToDBClusterMessage `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

### AddRoleToDBInstanceMessage
* AddRoleToDBInstanceMessage `object`
  * DBInstanceIdentifier **required**
  * FeatureName **required**
  * RoleArn **required**

### AddSourceIdentifierToSubscriptionMessage
* AddSourceIdentifierToSubscriptionMessage `object`: <p/>
  * SourceIdentifier **required**
  * SubscriptionName **required**

### AddSourceIdentifierToSubscriptionResult
* AddSourceIdentifierToSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: <p/>
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

### ApplyMethod
* ApplyMethod `string` (values: immediate, pending-reboot)

### ApplyPendingMaintenanceActionMessage
* ApplyPendingMaintenanceActionMessage `object`: <p/>
  * ApplyAction **required**
  * OptInType **required**
  * ResourceIdentifier **required**

### ApplyPendingMaintenanceActionResult
* ApplyPendingMaintenanceActionResult `object`
  * ResourcePendingMaintenanceActions [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### AttributeValueList
* AttributeValueList `array`
  * items

### AuthScheme
* AuthScheme `string` (values: SECRETS)

### AuthorizationAlreadyExistsFault


### AuthorizationNotFoundFault


### AuthorizationQuotaExceededFault


### AuthorizeDBSecurityGroupIngressMessage
* AuthorizeDBSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP
  * DBSecurityGroupName **required**
  * EC2SecurityGroupId
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

### AuthorizeDBSecurityGroupIngressResult
* AuthorizeDBSecurityGroupIngressResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### AvailabilityZone
* AvailabilityZone `object`: <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
  * Name

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items
    * Name

### AvailabilityZones
* AvailabilityZones `array`
  * items

### AvailableProcessorFeature
* AvailableProcessorFeature `object`: <p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
  * AllowedValues
  * DefaultValue
  * Name

### AvailableProcessorFeatureList
* AvailableProcessorFeatureList `array`
  * items
    * AllowedValues
    * DefaultValue
    * Name

### BacktrackDBClusterMessage
* BacktrackDBClusterMessage `object`: <p/>
  * BacktrackTo **required**
  * DBClusterIdentifier **required**
  * Force
  * UseEarliestTimeOnPointInTimeUnavailable

### BackupPolicyNotFoundFault


### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### CancelExportTaskMessage
* CancelExportTaskMessage `object`
  * ExportTaskIdentifier **required**

### Certificate
* Certificate `object`: A CA certificate for an AWS account.
  * CertificateArn
  * CertificateIdentifier
  * CertificateType
  * CustomerOverride
  * CustomerOverrideValidTill
  * Thumbprint
  * ValidFrom
  * ValidTill

### CertificateList
* CertificateList `array`
  * items
    * CertificateArn
    * CertificateIdentifier
    * CertificateType
    * CustomerOverride
    * CustomerOverrideValidTill
    * Thumbprint
    * ValidFrom
    * ValidTill

### CertificateMessage
* CertificateMessage `object`: Data returned by the <b>DescribeCertificates</b> action.
  * Certificates
    * items
      * CertificateArn
      * CertificateIdentifier
      * CertificateType
      * CustomerOverride
      * CustomerOverrideValidTill
      * Thumbprint
      * ValidFrom
      * ValidTill
  * Marker

### CertificateNotFoundFault


### CharacterSet
* CharacterSet `object`:  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
  * CharacterSetDescription
  * CharacterSetName

### CloudwatchLogsExportConfiguration
* CloudwatchLogsExportConfiguration `object`: <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
  * DisableLogTypes
    * items [String](#string)
  * EnableLogTypes
    * items [String](#string)

### ClusterPendingModifiedValues
* ClusterPendingModifiedValues `object`: This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
  * DBClusterIdentifier
  * EngineVersion
  * IAMDatabaseAuthenticationEnabled
  * MasterUserPassword
  * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)

### ConnectionPoolConfiguration
* ConnectionPoolConfiguration `object`: Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
  * ConnectionBorrowTimeout
  * InitQuery
  * MaxConnectionsPercent
  * MaxIdleConnectionsPercent
  * SessionPinningFilters
    * items [String](#string)

### ConnectionPoolConfigurationInfo
* ConnectionPoolConfigurationInfo `object`: Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
  * ConnectionBorrowTimeout
  * InitQuery
  * MaxConnectionsPercent
  * MaxIdleConnectionsPercent
  * SessionPinningFilters
    * items [String](#string)

### CopyDBClusterParameterGroupMessage
* CopyDBClusterParameterGroupMessage `object`
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

### CopyDBClusterParameterGroupResult
* CopyDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CopyDBClusterSnapshotMessage
* CopyDBClusterSnapshotMessage `object`: <p/>
  * CopyTags
  * KmsKeyId
  * PreSignedUrl
  * SourceDBClusterSnapshotIdentifier **required**
  * SourceRegion
  * Tags [TagList](#taglist)
  * TargetDBClusterSnapshotIdentifier **required**

### CopyDBClusterSnapshotResult
* CopyDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CopyDBParameterGroupMessage
* CopyDBParameterGroupMessage `object`: <p/>
  * SourceDBParameterGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetDBParameterGroupDescription **required**
  * TargetDBParameterGroupIdentifier **required**

### CopyDBParameterGroupResult
* CopyDBParameterGroupResult `object`
  * DBParameterGroup [DBParameterGroup](#dbparametergroup)

### CopyDBSnapshotMessage
* CopyDBSnapshotMessage `object`: <p/>
  * CopyTags
  * KmsKeyId
  * OptionGroupName
  * PreSignedUrl
  * SourceDBSnapshotIdentifier **required**
  * SourceRegion
  * Tags [TagList](#taglist)
  * TargetCustomAvailabilityZone
  * TargetDBSnapshotIdentifier **required**

### CopyDBSnapshotResult
* CopyDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### CopyOptionGroupMessage
* CopyOptionGroupMessage `object`: <p/>
  * SourceOptionGroupIdentifier **required**
  * Tags [TagList](#taglist)
  * TargetOptionGroupDescription **required**
  * TargetOptionGroupIdentifier **required**

### CopyOptionGroupResult
* CopyOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### CreateCustomAvailabilityZoneMessage
* CreateCustomAvailabilityZoneMessage `object`: <p/>
  * CustomAvailabilityZoneName **required**
  * ExistingVpnId
  * NewVpnTunnelName
  * VpnTunnelOriginatorIP

### CreateCustomAvailabilityZoneResult
* CreateCustomAvailabilityZoneResult `object`
  * CustomAvailabilityZone [CustomAvailabilityZone](#customavailabilityzone)

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

### CreateDBClusterMessage
* CreateDBClusterMessage `object`: <p/>
  * AvailabilityZones
    * items
  * BacktrackWindow
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableGlobalWriteForwarding
  * EnableHttpEndpoint
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineMode
  * EngineVersion
  * GlobalClusterIdentifier
  * KmsKeyId
  * MasterUserPassword
  * MasterUsername
  * OptionGroupName
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReplicationSourceIdentifier
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
  * SourceRegion
  * StorageEncrypted
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### CreateDBClusterParameterGroupMessage
* CreateDBClusterParameterGroupMessage `object`: <p/>
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
* CreateDBClusterSnapshotMessage `object`: <p/>
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
* CreateDBInstanceMessage `object`: <p/>
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NcharCharacterSetName
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
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

### CreateDBInstanceReadReplicaMessage
* CreateDBInstanceReadReplicaMessage `object`
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * EnablePerformanceInsights
  * Iops
  * KmsKeyId
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreSignedUrl
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * ReplicaMode
  * SourceDBInstanceIdentifier **required**
  * SourceRegion
  * StorageType
  * Tags [TagList](#taglist)
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

### CreateDBInstanceReadReplicaResult
* CreateDBInstanceReadReplicaResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBInstanceResult
* CreateDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBParameterGroupMessage
* CreateDBParameterGroupMessage `object`: <p/>
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

### CreateDBProxyRequest
* CreateDBProxyRequest `object`
  * Auth **required**
    * items [UserAuthConfig](#userauthconfig)
  * DBProxyName **required**
  * DebugLogging
  * EngineFamily **required**
  * IdleClientTimeout
  * RequireTLS
  * RoleArn **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items [String](#string)
  * VpcSubnetIds **required**
    * items [String](#string)

### CreateDBProxyResponse
* CreateDBProxyResponse `object`
  * DBProxy
    * Auth
      * items [UserAuthConfigInfo](#userauthconfiginfo)
    * CreatedDate
    * DBProxyArn
    * DBProxyName
    * DebugLogging
    * Endpoint
    * EngineFamily
    * IdleClientTimeout
    * RequireTLS
    * RoleArn
    * Status
    * UpdatedDate
    * VpcSecurityGroupIds
      * items [String](#string)
    * VpcSubnetIds
      * items [String](#string)

### CreateDBSecurityGroupMessage
* CreateDBSecurityGroupMessage `object`: <p/>
  * DBSecurityGroupDescription **required**
  * DBSecurityGroupName **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBSecurityGroupResult
* CreateDBSecurityGroupResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### CreateDBSnapshotMessage
* CreateDBSnapshotMessage `object`: <p/>
  * DBInstanceIdentifier **required**
  * DBSnapshotIdentifier **required**
  * Tags [TagList](#taglist)

### CreateDBSnapshotResult
* CreateDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### CreateDBSubnetGroupMessage
* CreateDBSubnetGroupMessage `object`: <p/>
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
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn **required**
  * SourceIds
    * items
  * SourceType
  * SubscriptionName **required**
  * Tags [TagList](#taglist)

### CreateEventSubscriptionResult
* CreateEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### CreateGlobalClusterMessage
* CreateGlobalClusterMessage `object`
  * DatabaseName
  * DeletionProtection
  * Engine
  * EngineVersion
  * GlobalClusterIdentifier
  * SourceDBClusterIdentifier
  * StorageEncrypted

### CreateGlobalClusterResult
* CreateGlobalClusterResult `object`
  * GlobalCluster [GlobalCluster](#globalcluster)

### CreateOptionGroupMessage
* CreateOptionGroupMessage `object`: <p/>
  * EngineName **required**
  * MajorEngineVersion **required**
  * OptionGroupDescription **required**
  * OptionGroupName **required**
  * Tags
    * items
      * Key
      * Value

### CreateOptionGroupResult
* CreateOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### CustomAvailabilityZone
* CustomAvailabilityZone `object`: <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p>
  * CustomAvailabilityZoneId
  * CustomAvailabilityZoneName
  * CustomAvailabilityZoneStatus
  * VpnDetails
    * VpnGatewayIp
    * VpnId
    * VpnName
    * VpnPSK
    * VpnState
    * VpnTunnelOriginatorIP

### CustomAvailabilityZoneAlreadyExistsFault


### CustomAvailabilityZoneList
* CustomAvailabilityZoneList `array`
  * items
    * CustomAvailabilityZoneId
    * CustomAvailabilityZoneName
    * CustomAvailabilityZoneStatus
    * VpnDetails
      * VpnGatewayIp
      * VpnId
      * VpnName
      * VpnPSK
      * VpnState
      * VpnTunnelOriginatorIP

### CustomAvailabilityZoneMessage
* CustomAvailabilityZoneMessage `object`
  * CustomAvailabilityZones
    * items
      * CustomAvailabilityZoneId
      * CustomAvailabilityZoneName
      * CustomAvailabilityZoneStatus
      * VpnDetails
        * VpnGatewayIp
        * VpnId
        * VpnName
        * VpnPSK
        * VpnState
        * VpnTunnelOriginatorIP
  * Marker

### CustomAvailabilityZoneNotFoundFault


### CustomAvailabilityZoneQuotaExceededFault


### DBCluster
* DBCluster `object`: <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
  * ActivityStreamKinesisStreamName
  * ActivityStreamKmsKeyId
  * ActivityStreamMode
  * ActivityStreamStatus
  * AllocatedStorage
  * AssociatedRoles
    * items
      * FeatureName
      * RoleArn
      * Status
  * AvailabilityZones
    * items
  * BacktrackConsumedChangeRecords
  * BacktrackWindow
  * BackupRetentionPeriod
  * Capacity
  * CharacterSetName
  * CloneGroupId
  * ClusterCreateTime
  * CopyTagsToSnapshot
  * CrossAccountClone
  * CustomEndpoints
    * items [String](#string)
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
  * DomainMemberships
    * items
      * Domain
      * FQDN
      * IAMRoleName
      * Status
  * EarliestBacktrackTime
  * EarliestRestorableTime
  * EnabledCloudwatchLogsExports
    * items [String](#string)
  * Endpoint
  * Engine
  * EngineMode
  * EngineVersion
  * GlobalWriteForwardingRequested
  * GlobalWriteForwardingStatus
  * HostedZoneId
  * HttpEndpointEnabled
  * IAMDatabaseAuthenticationEnabled
  * KmsKeyId
  * LatestRestorableTime
  * MasterUsername
  * MultiAZ
  * PendingModifiedValues
    * DBClusterIdentifier
    * EngineVersion
    * IAMDatabaseAuthenticationEnabled
    * MasterUserPassword
    * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
  * PercentProgress
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReadReplicaIdentifiers
    * items
  * ReaderEndpoint
  * ReplicationSourceIdentifier
  * ScalingConfigurationInfo [ScalingConfigurationInfo](#scalingconfigurationinfo)
  * Status
  * StorageEncrypted
  * TagList [TagList](#taglist)
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBClusterAlreadyExistsFault


### DBClusterBacktrack
* DBClusterBacktrack `object`: This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
  * BacktrackIdentifier
  * BacktrackRequestCreationTime
  * BacktrackTo
  * BacktrackedFrom
  * DBClusterIdentifier
  * Status

### DBClusterBacktrackList
* DBClusterBacktrackList `array`
  * items
    * BacktrackIdentifier
    * BacktrackRequestCreationTime
    * BacktrackTo
    * BacktrackedFrom
    * DBClusterIdentifier
    * Status

### DBClusterBacktrackMessage
* DBClusterBacktrackMessage `object`: Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
  * DBClusterBacktracks
    * items
      * BacktrackIdentifier
      * BacktrackRequestCreationTime
      * BacktrackTo
      * BacktrackedFrom
      * DBClusterIdentifier
      * Status
  * Marker

### DBClusterBacktrackNotFoundFault


### DBClusterCapacityInfo
* DBClusterCapacityInfo `object`
  * CurrentCapacity
  * DBClusterIdentifier
  * PendingCapacity
  * SecondsBeforeTimeout
  * TimeoutAction

### DBClusterEndpoint
* DBClusterEndpoint `object`: <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
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
    * ActivityStreamKinesisStreamName
    * ActivityStreamKmsKeyId
    * ActivityStreamMode
    * ActivityStreamStatus
    * AllocatedStorage
    * AssociatedRoles
      * items
        * FeatureName
        * RoleArn
        * Status
    * AvailabilityZones
      * items
    * BacktrackConsumedChangeRecords
    * BacktrackWindow
    * BackupRetentionPeriod
    * Capacity
    * CharacterSetName
    * CloneGroupId
    * ClusterCreateTime
    * CopyTagsToSnapshot
    * CrossAccountClone
    * CustomEndpoints
      * items [String](#string)
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
    * DomainMemberships
      * items
        * Domain
        * FQDN
        * IAMRoleName
        * Status
    * EarliestBacktrackTime
    * EarliestRestorableTime
    * EnabledCloudwatchLogsExports
      * items [String](#string)
    * Endpoint
    * Engine
    * EngineMode
    * EngineVersion
    * GlobalWriteForwardingRequested
    * GlobalWriteForwardingStatus
    * HostedZoneId
    * HttpEndpointEnabled
    * IAMDatabaseAuthenticationEnabled
    * KmsKeyId
    * LatestRestorableTime
    * MasterUsername
    * MultiAZ
    * PendingModifiedValues
      * DBClusterIdentifier
      * EngineVersion
      * IAMDatabaseAuthenticationEnabled
      * MasterUserPassword
      * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
    * PercentProgress
    * Port
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ReadReplicaIdentifiers
      * items
    * ReaderEndpoint
    * ReplicationSourceIdentifier
    * ScalingConfigurationInfo [ScalingConfigurationInfo](#scalingconfigurationinfo)
    * Status
    * StorageEncrypted
    * TagList [TagList](#taglist)
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
* DBClusterMessage `object`: Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
  * DBClusters
    * items
      * ActivityStreamKinesisStreamName
      * ActivityStreamKmsKeyId
      * ActivityStreamMode
      * ActivityStreamStatus
      * AllocatedStorage
      * AssociatedRoles
        * items
          * FeatureName
          * RoleArn
          * Status
      * AvailabilityZones
        * items
      * BacktrackConsumedChangeRecords
      * BacktrackWindow
      * BackupRetentionPeriod
      * Capacity
      * CharacterSetName
      * CloneGroupId
      * ClusterCreateTime
      * CopyTagsToSnapshot
      * CrossAccountClone
      * CustomEndpoints
        * items [String](#string)
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
      * DomainMemberships
        * items
          * Domain
          * FQDN
          * IAMRoleName
          * Status
      * EarliestBacktrackTime
      * EarliestRestorableTime
      * EnabledCloudwatchLogsExports
        * items [String](#string)
      * Endpoint
      * Engine
      * EngineMode
      * EngineVersion
      * GlobalWriteForwardingRequested
      * GlobalWriteForwardingStatus
      * HostedZoneId
      * HttpEndpointEnabled
      * IAMDatabaseAuthenticationEnabled
      * KmsKeyId
      * LatestRestorableTime
      * MasterUsername
      * MultiAZ
      * PendingModifiedValues
        * DBClusterIdentifier
        * EngineVersion
        * IAMDatabaseAuthenticationEnabled
        * MasterUserPassword
        * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
      * PercentProgress
      * Port
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ReadReplicaIdentifiers
        * items
      * ReaderEndpoint
      * ReplicationSourceIdentifier
      * ScalingConfigurationInfo [ScalingConfigurationInfo](#scalingconfigurationinfo)
      * Status
      * StorageEncrypted
      * TagList [TagList](#taglist)
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
* DBClusterParameterGroup `object`: <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
  * DBClusterParameterGroupArn
  * DBClusterParameterGroupName
  * DBParameterGroupFamily
  * Description

### DBClusterParameterGroupDetails
* DBClusterParameterGroupDetails `object`: Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
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
      * SupportedEngineModes
        * items [String](#string)

### DBClusterParameterGroupList
* DBClusterParameterGroupList `array`
  * items
    * DBClusterParameterGroupArn
    * DBClusterParameterGroupName
    * DBParameterGroupFamily
    * Description

### DBClusterParameterGroupNameMessage
* DBClusterParameterGroupNameMessage `object`: <p/>
  * DBClusterParameterGroupName

### DBClusterParameterGroupNotFoundFault


### DBClusterParameterGroupsMessage
* DBClusterParameterGroupsMessage `object`: <p/>
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
* DBClusterSnapshot `object`: <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
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
  * TagList [TagList](#taglist)
  * VpcId

### DBClusterSnapshotAlreadyExistsFault


### DBClusterSnapshotAttribute
* DBClusterSnapshotAttribute `object`: <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
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
* DBClusterSnapshotAttributesResult `object`: <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
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
    * TagList [TagList](#taglist)
    * VpcId

### DBClusterSnapshotMessage
* DBClusterSnapshotMessage `object`:  Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
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
      * TagList [TagList](#taglist)
      * VpcId
  * Marker

### DBClusterSnapshotNotFoundFault


### DBEngineVersion
* DBEngineVersion `object`:  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
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
  * Status
  * SupportedCharacterSets
    * items
      * CharacterSetDescription
      * CharacterSetName
  * SupportedEngineModes
    * items [String](#string)
  * SupportedFeatureNames
    * items [String](#string)
  * SupportedNcharCharacterSets
    * items
      * CharacterSetDescription
      * CharacterSetName
  * SupportedTimezones
    * items
      * TimezoneName
  * SupportsGlobalDatabases
  * SupportsLogExportsToCloudwatchLogs
  * SupportsParallelQuery
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
    * Status
    * SupportedCharacterSets
      * items
        * CharacterSetDescription
        * CharacterSetName
    * SupportedEngineModes
      * items [String](#string)
    * SupportedFeatureNames
      * items [String](#string)
    * SupportedNcharCharacterSets
      * items
        * CharacterSetDescription
        * CharacterSetName
    * SupportedTimezones
      * items
        * TimezoneName
    * SupportsGlobalDatabases
    * SupportsLogExportsToCloudwatchLogs
    * SupportsParallelQuery
    * SupportsReadReplica
    * ValidUpgradeTarget
      * items
        * AutoUpgrade
        * Description
        * Engine
        * EngineVersion
        * IsMajorVersionUpgrade

### DBEngineVersionMessage
* DBEngineVersionMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action. 
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
      * Status
      * SupportedCharacterSets
        * items
          * CharacterSetDescription
          * CharacterSetName
      * SupportedEngineModes
        * items [String](#string)
      * SupportedFeatureNames
        * items [String](#string)
      * SupportedNcharCharacterSets
        * items
          * CharacterSetDescription
          * CharacterSetName
      * SupportedTimezones
        * items
          * TimezoneName
      * SupportsGlobalDatabases
      * SupportsLogExportsToCloudwatchLogs
      * SupportsParallelQuery
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
* DBInstance `object`: <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
  * AllocatedStorage
  * AssociatedRoles
    * items
      * FeatureName
      * RoleArn
      * Status
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier
  * DBInstanceArn
  * DBInstanceAutomatedBackupsReplications
    * items
      * DBInstanceAutomatedBackupsArn
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
        * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
        * SubnetIdentifier
        * SubnetOutpost
          * Arn
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
  * ListenerEndpoint
    * Address
    * HostedZoneId
    * Port
  * MasterUsername
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NcharCharacterSetName
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
    * IAMDatabaseAuthenticationEnabled
    * Iops
    * LicenseModel
    * MasterUserPassword
    * MultiAZ
    * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
    * Port
    * ProcessorFeatures
      * items
        * Name
        * Value
    * StorageType
  * PerformanceInsightsEnabled
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PromotionTier
  * PubliclyAccessible
  * ReadReplicaDBClusterIdentifiers
    * items
  * ReadReplicaDBInstanceIdentifiers
    * items
  * ReadReplicaSourceDBInstanceIdentifier
  * ReplicaMode
  * SecondaryAvailabilityZone
  * StatusInfos
    * items
      * Message
      * Normal
      * Status
      * StatusType
  * StorageEncrypted
  * StorageType
  * TagList [TagList](#taglist)
  * TdeCredentialArn
  * Timezone
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBInstanceAlreadyExistsFault


### DBInstanceAutomatedBackup
* DBInstanceAutomatedBackup `object`: An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
  * AllocatedStorage
  * AvailabilityZone
  * BackupRetentionPeriod
  * DBInstanceArn
  * DBInstanceAutomatedBackupsArn
  * DBInstanceAutomatedBackupsReplications
    * items
      * DBInstanceAutomatedBackupsArn
  * DBInstanceIdentifier
  * DbiResourceId
  * Encrypted
  * Engine
  * EngineVersion
  * IAMDatabaseAuthenticationEnabled
  * InstanceCreateTime
  * Iops
  * KmsKeyId
  * LicenseModel
  * MasterUsername
  * OptionGroupName
  * Port
  * Region
  * RestoreWindow
    * EarliestTime
    * LatestTime
  * Status
  * StorageType
  * TdeCredentialArn
  * Timezone
  * VpcId

### DBInstanceAutomatedBackupList
* DBInstanceAutomatedBackupList `array`
  * items
    * AllocatedStorage
    * AvailabilityZone
    * BackupRetentionPeriod
    * DBInstanceArn
    * DBInstanceAutomatedBackupsArn
    * DBInstanceAutomatedBackupsReplications
      * items
        * DBInstanceAutomatedBackupsArn
    * DBInstanceIdentifier
    * DbiResourceId
    * Encrypted
    * Engine
    * EngineVersion
    * IAMDatabaseAuthenticationEnabled
    * InstanceCreateTime
    * Iops
    * KmsKeyId
    * LicenseModel
    * MasterUsername
    * OptionGroupName
    * Port
    * Region
    * RestoreWindow
      * EarliestTime
      * LatestTime
    * Status
    * StorageType
    * TdeCredentialArn
    * Timezone
    * VpcId

### DBInstanceAutomatedBackupMessage
* DBInstanceAutomatedBackupMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
  * DBInstanceAutomatedBackups
    * items
      * AllocatedStorage
      * AvailabilityZone
      * BackupRetentionPeriod
      * DBInstanceArn
      * DBInstanceAutomatedBackupsArn
      * DBInstanceAutomatedBackupsReplications
        * items
          * DBInstanceAutomatedBackupsArn
      * DBInstanceIdentifier
      * DbiResourceId
      * Encrypted
      * Engine
      * EngineVersion
      * IAMDatabaseAuthenticationEnabled
      * InstanceCreateTime
      * Iops
      * KmsKeyId
      * LicenseModel
      * MasterUsername
      * OptionGroupName
      * Port
      * Region
      * RestoreWindow
        * EarliestTime
        * LatestTime
      * Status
      * StorageType
      * TdeCredentialArn
      * Timezone
      * VpcId
  * Marker

### DBInstanceAutomatedBackupNotFoundFault


### DBInstanceAutomatedBackupQuotaExceededFault


### DBInstanceAutomatedBackupsReplication
* DBInstanceAutomatedBackupsReplication `object`: Automated backups of a DB instance replicated to another AWS Region. They consist of system backups, transaction logs, and database instance properties.
  * DBInstanceAutomatedBackupsArn

### DBInstanceAutomatedBackupsReplicationList
* DBInstanceAutomatedBackupsReplicationList `array`
  * items
    * DBInstanceAutomatedBackupsArn

### DBInstanceList
* DBInstanceList `array`
  * items
    * AllocatedStorage
    * AssociatedRoles
      * items
        * FeatureName
        * RoleArn
        * Status
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * CharacterSetName
    * CopyTagsToSnapshot
    * DBClusterIdentifier
    * DBInstanceArn
    * DBInstanceAutomatedBackupsReplications
      * items
        * DBInstanceAutomatedBackupsArn
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
          * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
          * SubnetIdentifier
          * SubnetOutpost
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
    * ListenerEndpoint
      * Address
      * HostedZoneId
      * Port
    * MasterUsername
    * MaxAllocatedStorage
    * MonitoringInterval
    * MonitoringRoleArn
    * MultiAZ
    * NcharCharacterSetName
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
      * IAMDatabaseAuthenticationEnabled
      * Iops
      * LicenseModel
      * MasterUserPassword
      * MultiAZ
      * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
      * Port
      * ProcessorFeatures
        * items
          * Name
          * Value
      * StorageType
    * PerformanceInsightsEnabled
    * PerformanceInsightsKMSKeyId
    * PerformanceInsightsRetentionPeriod
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ProcessorFeatures
      * items
        * Name
        * Value
    * PromotionTier
    * PubliclyAccessible
    * ReadReplicaDBClusterIdentifiers
      * items
    * ReadReplicaDBInstanceIdentifiers
      * items
    * ReadReplicaSourceDBInstanceIdentifier
    * ReplicaMode
    * SecondaryAvailabilityZone
    * StatusInfos
      * items
        * Message
        * Normal
        * Status
        * StatusType
    * StorageEncrypted
    * StorageType
    * TagList [TagList](#taglist)
    * TdeCredentialArn
    * Timezone
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### DBInstanceMessage
* DBInstanceMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action. 
  * DBInstances
    * items
      * AllocatedStorage
      * AssociatedRoles
        * items
          * FeatureName
          * RoleArn
          * Status
      * AutoMinorVersionUpgrade
      * AvailabilityZone
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * CharacterSetName
      * CopyTagsToSnapshot
      * DBClusterIdentifier
      * DBInstanceArn
      * DBInstanceAutomatedBackupsReplications
        * items
          * DBInstanceAutomatedBackupsArn
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
      * ListenerEndpoint
        * Address
        * HostedZoneId
        * Port
      * MasterUsername
      * MaxAllocatedStorage
      * MonitoringInterval
      * MonitoringRoleArn
      * MultiAZ
      * NcharCharacterSetName
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
        * IAMDatabaseAuthenticationEnabled
        * Iops
        * LicenseModel
        * MasterUserPassword
        * MultiAZ
        * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
        * Port
        * ProcessorFeatures
          * items
        * StorageType
      * PerformanceInsightsEnabled
      * PerformanceInsightsKMSKeyId
      * PerformanceInsightsRetentionPeriod
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ProcessorFeatures
        * items
          * Name
          * Value
      * PromotionTier
      * PubliclyAccessible
      * ReadReplicaDBClusterIdentifiers
        * items
      * ReadReplicaDBInstanceIdentifiers
        * items
      * ReadReplicaSourceDBInstanceIdentifier
      * ReplicaMode
      * SecondaryAvailabilityZone
      * StatusInfos
        * items
          * Message
          * Normal
          * Status
          * StatusType
      * StorageEncrypted
      * StorageType
      * TagList [TagList](#taglist)
      * TdeCredentialArn
      * Timezone
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### DBInstanceNotFoundFault


### DBInstanceRole
* DBInstanceRole `object`: Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance.
  * FeatureName
  * RoleArn
  * Status

### DBInstanceRoleAlreadyExistsFault


### DBInstanceRoleNotFoundFault


### DBInstanceRoleQuotaExceededFault


### DBInstanceRoles
* DBInstanceRoles `array`
  * items
    * FeatureName
    * RoleArn
    * Status

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

### DBLogFileNotFoundFault


### DBParameterGroup
* DBParameterGroup `object`: <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
  * DBParameterGroupArn
  * DBParameterGroupFamily
  * DBParameterGroupName
  * Description

### DBParameterGroupAlreadyExistsFault


### DBParameterGroupDetails
* DBParameterGroupDetails `object`:  Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action. 
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
      * SupportedEngineModes
        * items [String](#string)

### DBParameterGroupList
* DBParameterGroupList `array`
  * items
    * DBParameterGroupArn
    * DBParameterGroupFamily
    * DBParameterGroupName
    * Description

### DBParameterGroupNameMessage
* DBParameterGroupNameMessage `object`:  Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action. 
  * DBParameterGroupName

### DBParameterGroupNotFoundFault


### DBParameterGroupQuotaExceededFault


### DBParameterGroupStatus
* DBParameterGroupStatus `object`: <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>CreateDBInstanceReadReplica</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> </ul>
  * DBParameterGroupName
  * ParameterApplyStatus

### DBParameterGroupStatusList
* DBParameterGroupStatusList `array`
  * items
    * DBParameterGroupName
    * ParameterApplyStatus

### DBParameterGroupsMessage
* DBParameterGroupsMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action. 
  * DBParameterGroups
    * items
      * DBParameterGroupArn
      * DBParameterGroupFamily
      * DBParameterGroupName
      * Description
  * Marker

### DBProxy
* DBProxy `object`: <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
  * Auth
    * items [UserAuthConfigInfo](#userauthconfiginfo)
  * CreatedDate
  * DBProxyArn
  * DBProxyName
  * DebugLogging
  * Endpoint
  * EngineFamily
  * IdleClientTimeout
  * RequireTLS
  * RoleArn
  * Status
  * UpdatedDate
  * VpcSecurityGroupIds
    * items [String](#string)
  * VpcSubnetIds
    * items [String](#string)

### DBProxyAlreadyExistsFault


### DBProxyList
* DBProxyList `array`
  * items [DBProxy](#dbproxy)

### DBProxyNotFoundFault


### DBProxyQuotaExceededFault


### DBProxyStatus
* DBProxyStatus `string` (values: available, modifying, incompatible-network, insufficient-resource-limits, creating, deleting, suspended, suspending, reactivating)

### DBProxyTarget
* DBProxyTarget `object`: <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
  * Endpoint
  * Port
  * RdsResourceId
  * TargetArn
  * TargetHealth
    * Description
    * Reason
    * State
  * TrackedClusterId
  * Type

### DBProxyTargetAlreadyRegisteredFault


### DBProxyTargetGroup
* DBProxyTargetGroup `object`: <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
  * ConnectionPoolConfig
    * ConnectionBorrowTimeout
    * InitQuery
    * MaxConnectionsPercent
    * MaxIdleConnectionsPercent
    * SessionPinningFilters
      * items [String](#string)
  * CreatedDate
  * DBProxyName
  * IsDefault
  * Status
  * TargetGroupArn
  * TargetGroupName
  * UpdatedDate

### DBProxyTargetGroupNotFoundFault


### DBProxyTargetNotFoundFault


### DBSecurityGroup
* DBSecurityGroup `object`: <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
  * DBSecurityGroupArn
  * DBSecurityGroupDescription
  * DBSecurityGroupName
  * EC2SecurityGroups
    * items
      * EC2SecurityGroupId
      * EC2SecurityGroupName
      * EC2SecurityGroupOwnerId
      * Status
  * IPRanges
    * items
      * CIDRIP
      * Status
  * OwnerId
  * VpcId

### DBSecurityGroupAlreadyExistsFault


### DBSecurityGroupMembership
* DBSecurityGroupMembership `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul>
  * DBSecurityGroupName
  * Status

### DBSecurityGroupMembershipList
* DBSecurityGroupMembershipList `array`
  * items
    * DBSecurityGroupName
    * Status

### DBSecurityGroupMessage
* DBSecurityGroupMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
  * DBSecurityGroups
    * items
      * DBSecurityGroupArn
      * DBSecurityGroupDescription
      * DBSecurityGroupName
      * EC2SecurityGroups
        * items
          * EC2SecurityGroupId
          * EC2SecurityGroupName
          * EC2SecurityGroupOwnerId
          * Status
      * IPRanges
        * items
          * CIDRIP
          * Status
      * OwnerId
      * VpcId
  * Marker

### DBSecurityGroupNameList
* DBSecurityGroupNameList `array`
  * items

### DBSecurityGroupNotFoundFault


### DBSecurityGroupNotSupportedFault


### DBSecurityGroupQuotaExceededFault


### DBSecurityGroups
* DBSecurityGroups `array`
  * items
    * DBSecurityGroupArn
    * DBSecurityGroupDescription
    * DBSecurityGroupName
    * EC2SecurityGroups
      * items
        * EC2SecurityGroupId
        * EC2SecurityGroupName
        * EC2SecurityGroupOwnerId
        * Status
    * IPRanges
      * items
        * CIDRIP
        * Status
    * OwnerId
    * VpcId

### DBSnapshot
* DBSnapshot `object`: <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
  * AllocatedStorage
  * AvailabilityZone
  * DBInstanceIdentifier
  * DBSnapshotArn
  * DBSnapshotIdentifier
  * DbiResourceId
  * Encrypted
  * Engine
  * EngineVersion
  * IAMDatabaseAuthenticationEnabled
  * InstanceCreateTime
  * Iops
  * KmsKeyId
  * LicenseModel
  * MasterUsername
  * OptionGroupName
  * PercentProgress
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * SnapshotCreateTime
  * SnapshotType
  * SourceDBSnapshotIdentifier
  * SourceRegion
  * Status
  * StorageType
  * TagList [TagList](#taglist)
  * TdeCredentialArn
  * Timezone
  * VpcId

### DBSnapshotAlreadyExistsFault


### DBSnapshotAttribute
* DBSnapshotAttribute `object`: <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
  * AttributeName
  * AttributeValues
    * items

### DBSnapshotAttributeList
* DBSnapshotAttributeList `array`
  * items
    * AttributeName
    * AttributeValues
      * items

### DBSnapshotAttributesResult
* DBSnapshotAttributesResult `object`: <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
  * DBSnapshotAttributes
    * items
      * AttributeName
      * AttributeValues
        * items
  * DBSnapshotIdentifier

### DBSnapshotList
* DBSnapshotList `array`
  * items
    * AllocatedStorage
    * AvailabilityZone
    * DBInstanceIdentifier
    * DBSnapshotArn
    * DBSnapshotIdentifier
    * DbiResourceId
    * Encrypted
    * Engine
    * EngineVersion
    * IAMDatabaseAuthenticationEnabled
    * InstanceCreateTime
    * Iops
    * KmsKeyId
    * LicenseModel
    * MasterUsername
    * OptionGroupName
    * PercentProgress
    * Port
    * ProcessorFeatures
      * items
        * Name
        * Value
    * SnapshotCreateTime
    * SnapshotType
    * SourceDBSnapshotIdentifier
    * SourceRegion
    * Status
    * StorageType
    * TagList [TagList](#taglist)
    * TdeCredentialArn
    * Timezone
    * VpcId

### DBSnapshotMessage
* DBSnapshotMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
  * DBSnapshots
    * items
      * AllocatedStorage
      * AvailabilityZone
      * DBInstanceIdentifier
      * DBSnapshotArn
      * DBSnapshotIdentifier
      * DbiResourceId
      * Encrypted
      * Engine
      * EngineVersion
      * IAMDatabaseAuthenticationEnabled
      * InstanceCreateTime
      * Iops
      * KmsKeyId
      * LicenseModel
      * MasterUsername
      * OptionGroupName
      * PercentProgress
      * Port
      * ProcessorFeatures
        * items
          * Name
          * Value
      * SnapshotCreateTime
      * SnapshotType
      * SourceDBSnapshotIdentifier
      * SourceRegion
      * Status
      * StorageType
      * TagList [TagList](#taglist)
      * TdeCredentialArn
      * Timezone
      * VpcId
  * Marker

### DBSnapshotNotFoundFault


### DBSubnetGroup
* DBSubnetGroup `object`: <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
  * DBSubnetGroupArn
  * DBSubnetGroupDescription
  * DBSubnetGroupName
  * SubnetGroupStatus
  * Subnets
    * items
      * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
      * SubnetIdentifier
      * SubnetOutpost
        * Arn
      * SubnetStatus
  * VpcId

### DBSubnetGroupAlreadyExistsFault


### DBSubnetGroupDoesNotCoverEnoughAZs


### DBSubnetGroupMessage
* DBSubnetGroupMessage `object`:  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
  * DBSubnetGroups
    * items
      * DBSubnetGroupArn
      * DBSubnetGroupDescription
      * DBSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
          * SubnetIdentifier
          * SubnetOutpost
          * SubnetStatus
      * VpcId
  * Marker

### DBSubnetGroupNotAllowedFault


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
        * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
        * SubnetIdentifier
        * SubnetOutpost
          * Arn
        * SubnetStatus
    * VpcId

### DBSubnetQuotaExceededFault


### DBUpgradeDependencyFailureFault


### DeleteCustomAvailabilityZoneMessage
* DeleteCustomAvailabilityZoneMessage `object`
  * CustomAvailabilityZoneId **required**

### DeleteCustomAvailabilityZoneResult
* DeleteCustomAvailabilityZoneResult `object`
  * CustomAvailabilityZone [CustomAvailabilityZone](#customavailabilityzone)

### DeleteDBClusterEndpointMessage
* DeleteDBClusterEndpointMessage `object`
  * DBClusterEndpointIdentifier **required**

### DeleteDBClusterMessage
* DeleteDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

### DeleteDBClusterParameterGroupMessage
* DeleteDBClusterParameterGroupMessage `object`: <p/>
  * DBClusterParameterGroupName **required**

### DeleteDBClusterResult
* DeleteDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### DeleteDBClusterSnapshotMessage
* DeleteDBClusterSnapshotMessage `object`: <p/>
  * DBClusterSnapshotIdentifier **required**

### DeleteDBClusterSnapshotResult
* DeleteDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### DeleteDBInstanceAutomatedBackupMessage
* DeleteDBInstanceAutomatedBackupMessage `object`: Parameter input for the <code>DeleteDBInstanceAutomatedBackup</code> operation.
  * DBInstanceAutomatedBackupsArn
  * DbiResourceId

### DeleteDBInstanceAutomatedBackupResult
* DeleteDBInstanceAutomatedBackupResult `object`
  * DBInstanceAutomatedBackup [DBInstanceAutomatedBackup](#dbinstanceautomatedbackup)

### DeleteDBInstanceMessage
* DeleteDBInstanceMessage `object`: <p/>
  * DBInstanceIdentifier **required**
  * DeleteAutomatedBackups
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

### DeleteDBInstanceResult
* DeleteDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### DeleteDBParameterGroupMessage
* DeleteDBParameterGroupMessage `object`: <p/>
  * DBParameterGroupName **required**

### DeleteDBProxyRequest
* DeleteDBProxyRequest `object`
  * DBProxyName **required**

### DeleteDBProxyResponse
* DeleteDBProxyResponse `object`
  * DBProxy
    * Auth
      * items [UserAuthConfigInfo](#userauthconfiginfo)
    * CreatedDate
    * DBProxyArn
    * DBProxyName
    * DebugLogging
    * Endpoint
    * EngineFamily
    * IdleClientTimeout
    * RequireTLS
    * RoleArn
    * Status
    * UpdatedDate
    * VpcSecurityGroupIds
      * items [String](#string)
    * VpcSubnetIds
      * items [String](#string)

### DeleteDBSecurityGroupMessage
* DeleteDBSecurityGroupMessage `object`: <p/>
  * DBSecurityGroupName **required**

### DeleteDBSnapshotMessage
* DeleteDBSnapshotMessage `object`: <p/>
  * DBSnapshotIdentifier **required**

### DeleteDBSnapshotResult
* DeleteDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### DeleteDBSubnetGroupMessage
* DeleteDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupName **required**

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required**

### DeleteEventSubscriptionResult
* DeleteEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### DeleteGlobalClusterMessage
* DeleteGlobalClusterMessage `object`
  * GlobalClusterIdentifier **required**

### DeleteGlobalClusterResult
* DeleteGlobalClusterResult `object`
  * GlobalCluster [GlobalCluster](#globalcluster)

### DeleteInstallationMediaMessage
* DeleteInstallationMediaMessage `object`
  * InstallationMediaId **required**

### DeleteOptionGroupMessage
* DeleteOptionGroupMessage `object`: <p/>
  * OptionGroupName **required**

### DeregisterDBProxyTargetsRequest
* DeregisterDBProxyTargetsRequest `object`
  * DBClusterIdentifiers
    * items [String](#string)
  * DBInstanceIdentifiers
    * items [String](#string)
  * DBProxyName **required**
  * TargetGroupName

### DeregisterDBProxyTargetsResponse
* DeregisterDBProxyTargetsResponse `object`

### DescribeAccountAttributesMessage
* DescribeAccountAttributesMessage `object`: <p/>

### DescribeCertificatesMessage
* DescribeCertificatesMessage `object`: <p/>
  * CertificateIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeCustomAvailabilityZonesMessage
* DescribeCustomAvailabilityZonesMessage `object`
  * CustomAvailabilityZoneId
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterBacktracksMessage
* DescribeDBClusterBacktracksMessage `object`: <p/>
  * BacktrackIdentifier
  * DBClusterIdentifier **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

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
* DescribeDBClusterParameterGroupsMessage `object`: <p/>
  * DBClusterParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterParametersMessage
* DescribeDBClusterParametersMessage `object`: <p/>
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
* DescribeDBClusterSnapshotAttributesMessage `object`: <p/>
  * DBClusterSnapshotIdentifier **required**

### DescribeDBClusterSnapshotAttributesResult
* DescribeDBClusterSnapshotAttributesResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotsMessage
* DescribeDBClusterSnapshotsMessage `object`: <p/>
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
* DescribeDBClustersMessage `object`: <p/>
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludeShared
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
  * IncludeAll
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

### DescribeDBInstanceAutomatedBackupsMessage
* DescribeDBInstanceAutomatedBackupsMessage `object`: Parameter input for DescribeDBInstanceAutomatedBackups. 
  * DBInstanceAutomatedBackupsArn
  * DBInstanceIdentifier
  * DbiResourceId
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBInstancesMessage
* DescribeDBInstancesMessage `object`: <p/>
  * DBInstanceIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBLogFilesDetails
* DescribeDBLogFilesDetails `object`: This data type is used as a response element to <code>DescribeDBLogFiles</code>.
  * LastWritten
  * LogFileName
  * Size

### DescribeDBLogFilesList
* DescribeDBLogFilesList `array`
  * items
    * LastWritten
    * LogFileName
    * Size

### DescribeDBLogFilesMessage
* DescribeDBLogFilesMessage `object`: <p/>
  * DBInstanceIdentifier **required**
  * FileLastWritten
  * FileSize
  * FilenameContains
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBLogFilesResponse
* DescribeDBLogFilesResponse `object`:  The response from a call to <code>DescribeDBLogFiles</code>. 
  * DescribeDBLogFiles
    * items
      * LastWritten
      * LogFileName
      * Size
  * Marker

### DescribeDBParameterGroupsMessage
* DescribeDBParameterGroupsMessage `object`: <p/>
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

### DescribeDBProxiesRequest
* DescribeDBProxiesRequest `object`
  * DBProxyName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBProxiesResponse
* DescribeDBProxiesResponse `object`
  * DBProxies
    * items [DBProxy](#dbproxy)
  * Marker

### DescribeDBProxyTargetGroupsRequest
* DescribeDBProxyTargetGroupsRequest `object`
  * DBProxyName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * TargetGroupName

### DescribeDBProxyTargetGroupsResponse
* DescribeDBProxyTargetGroupsResponse `object`
  * Marker
  * TargetGroups
    * items [DBProxyTargetGroup](#dbproxytargetgroup)

### DescribeDBProxyTargetsRequest
* DescribeDBProxyTargetsRequest `object`
  * DBProxyName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * TargetGroupName

### DescribeDBProxyTargetsResponse
* DescribeDBProxyTargetsResponse `object`
  * Marker
  * Targets
    * items [DBProxyTarget](#dbproxytarget)

### DescribeDBSecurityGroupsMessage
* DescribeDBSecurityGroupsMessage `object`: <p/>
  * DBSecurityGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBSnapshotAttributesMessage
* DescribeDBSnapshotAttributesMessage `object`: <p/>
  * DBSnapshotIdentifier **required**

### DescribeDBSnapshotAttributesResult
* DescribeDBSnapshotAttributesResult `object`
  * DBSnapshotAttributesResult [DBSnapshotAttributesResult](#dbsnapshotattributesresult)

### DescribeDBSnapshotsMessage
* DescribeDBSnapshotsMessage `object`: <p/>
  * DBInstanceIdentifier
  * DBSnapshotIdentifier
  * DbiResourceId
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

### DescribeDBSubnetGroupsMessage
* DescribeDBSubnetGroupsMessage `object`: <p/>
  * DBSubnetGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultClusterParametersMessage
* DescribeEngineDefaultClusterParametersMessage `object`: <p/>
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
* DescribeEngineDefaultParametersMessage `object`: <p/>
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
* DescribeEventCategoriesMessage `object`: <p/>
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * SourceType

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SubscriptionName

### DescribeEventsMessage
* DescribeEventsMessage `object`: <p/>
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

### DescribeExportTasksMessage
* DescribeExportTasksMessage `object`
  * ExportTaskIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceArn

### DescribeGlobalClustersMessage
* DescribeGlobalClustersMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * GlobalClusterIdentifier
  * Marker
  * MaxRecords

### DescribeInstallationMediaMessage
* DescribeInstallationMediaMessage `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * InstallationMediaId
  * Marker
  * MaxRecords

### DescribeOptionGroupOptionsMessage
* DescribeOptionGroupOptionsMessage `object`: <p/>
  * EngineName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * MajorEngineVersion
  * Marker
  * MaxRecords

### DescribeOptionGroupsMessage
* DescribeOptionGroupsMessage `object`: <p/>
  * EngineName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * MajorEngineVersion
  * Marker
  * MaxRecords
  * OptionGroupName

### DescribeOrderableDBInstanceOptionsMessage
* DescribeOrderableDBInstanceOptionsMessage `object`: <p/>
  * AvailabilityZoneGroup
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
* DescribePendingMaintenanceActionsMessage `object`: <p/>
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ResourceIdentifier

### DescribeReservedDBInstancesMessage
* DescribeReservedDBInstancesMessage `object`: <p/>
  * DBInstanceClass
  * Duration
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LeaseId
  * Marker
  * MaxRecords
  * MultiAZ
  * OfferingType
  * ProductDescription
  * ReservedDBInstanceId
  * ReservedDBInstancesOfferingId

### DescribeReservedDBInstancesOfferingsMessage
* DescribeReservedDBInstancesOfferingsMessage `object`: <p/>
  * DBInstanceClass
  * Duration
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * MultiAZ
  * OfferingType
  * ProductDescription
  * ReservedDBInstancesOfferingId

### DescribeSourceRegionsMessage
* DescribeSourceRegionsMessage `object`: <p/>
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * RegionName

### DescribeValidDBInstanceModificationsMessage
* DescribeValidDBInstanceModificationsMessage `object`: <p/>
  * DBInstanceIdentifier **required**

### DescribeValidDBInstanceModificationsResult
* DescribeValidDBInstanceModificationsResult `object`
  * ValidDBInstanceModificationsMessage [ValidDBInstanceModificationsMessage](#validdbinstancemodificationsmessage)

### DomainMembership
* DomainMembership `object`: An Active Directory Domain membership record associated with the DB instance or cluster.
  * Domain
  * FQDN
  * IAMRoleName
  * Status

### DomainMembershipList
* DomainMembershipList `array`: List of Active Directory Domain membership records associated with a DB instance or cluster.
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

### DownloadDBLogFilePortionDetails
* DownloadDBLogFilePortionDetails `object`: This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.
  * AdditionalDataPending
  * LogFileData
  * Marker

### DownloadDBLogFilePortionMessage
* DownloadDBLogFilePortionMessage `object`: <p/>
  * DBInstanceIdentifier **required**
  * LogFileName **required**
  * Marker
  * NumberOfLines

### EC2SecurityGroup
* EC2SecurityGroup `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
  * EC2SecurityGroupId
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId
  * Status

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items
    * EC2SecurityGroupId
    * EC2SecurityGroupName
    * EC2SecurityGroupOwnerId
    * Status

### Endpoint
* Endpoint `object`: <p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
  * Address
  * HostedZoneId
  * Port

### EngineDefaults
* EngineDefaults `object`:  Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. 
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
      * SupportedEngineModes
        * items [String](#string)

### EngineFamily
* EngineFamily `string` (values: MYSQL, POSTGRESQL)

### EngineModeList
* EngineModeList `array`
  * items [String](#string)

### Event
* Event `object`:  This data type is used as a response element in the <code>DescribeEvents</code> action. 
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
* EventCategoriesMap `object`: Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.
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
* EventCategoriesMessage `object`: Data returned from the <code>DescribeEventCategories</code> operation.
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
* EventSubscription `object`: Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.
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
* EventSubscriptionsMessage `object`: Data returned by the <b>DescribeEventSubscriptions</b> action.
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
* EventsMessage `object`:  Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
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

### ExportTask
* ExportTask `object`: <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
  * ExportOnly
    * items [String](#string)
  * ExportTaskIdentifier
  * FailureCause
  * IamRoleArn
  * KmsKeyId
  * PercentProgress
  * S3Bucket
  * S3Prefix
  * SnapshotTime
  * SourceArn
  * Status
  * TaskEndTime
  * TaskStartTime
  * TotalExtractedDataInGB
  * WarningMessage

### ExportTaskAlreadyExistsFault


### ExportTaskNotFoundFault


### ExportTasksList
* ExportTasksList `array`
  * items
    * ExportOnly
      * items [String](#string)
    * ExportTaskIdentifier
    * FailureCause
    * IamRoleArn
    * KmsKeyId
    * PercentProgress
    * S3Bucket
    * S3Prefix
    * SnapshotTime
    * SourceArn
    * Status
    * TaskEndTime
    * TaskStartTime
    * TotalExtractedDataInGB
    * WarningMessage

### ExportTasksMessage
* ExportTasksMessage `object`
  * ExportTasks
    * items
      * ExportOnly
        * items [String](#string)
      * ExportTaskIdentifier
      * FailureCause
      * IamRoleArn
      * KmsKeyId
      * PercentProgress
      * S3Bucket
      * S3Prefix
      * SnapshotTime
      * SourceArn
      * Status
      * TaskEndTime
      * TaskStartTime
      * TotalExtractedDataInGB
      * WarningMessage
  * Marker

### FailoverDBClusterMessage
* FailoverDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required**
  * TargetDBInstanceIdentifier

### FailoverDBClusterResult
* FailoverDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### FeatureNameList
* FeatureNameList `array`
  * items [String](#string)

### Filter
* Filter `object`: <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as IDs. The filters supported by a describe operation are documented with the describe operation.</p> <note> <p>Currently, wildcards are not supported in filters.</p> </note> <p>The following actions can be filtered:</p> <ul> <li> <p> <code>DescribeDBClusterBacktracks</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>DescribeDBClusters</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DescribePendingMaintenanceActions</code> </p> </li> </ul>
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

### GlobalCluster
* GlobalCluster `object`: A data type representing an Aurora global database.
  * DatabaseName
  * DeletionProtection
  * Engine
  * EngineVersion
  * GlobalClusterArn
  * GlobalClusterIdentifier
  * GlobalClusterMembers
    * items
      * DBClusterArn
      * GlobalWriteForwardingStatus
      * IsWriter
      * Readers
        * items [String](#string)
  * GlobalClusterResourceId
  * Status
  * StorageEncrypted

### GlobalClusterAlreadyExistsFault


### GlobalClusterList
* GlobalClusterList `array`
  * items
    * DatabaseName
    * DeletionProtection
    * Engine
    * EngineVersion
    * GlobalClusterArn
    * GlobalClusterIdentifier
    * GlobalClusterMembers
      * items
        * DBClusterArn
        * GlobalWriteForwardingStatus
        * IsWriter
        * Readers
          * items [String](#string)
    * GlobalClusterResourceId
    * Status
    * StorageEncrypted

### GlobalClusterMember
* GlobalClusterMember `object`:  A data structure with information about any primary and secondary clusters associated with an Aurora global database. 
  * DBClusterArn
  * GlobalWriteForwardingStatus
  * IsWriter
  * Readers
    * items [String](#string)

### GlobalClusterMemberList
* GlobalClusterMemberList `array`
  * items
    * DBClusterArn
    * GlobalWriteForwardingStatus
    * IsWriter
    * Readers
      * items [String](#string)

### GlobalClusterNotFoundFault


### GlobalClusterQuotaExceededFault


### GlobalClustersMessage
* GlobalClustersMessage `object`
  * GlobalClusters
    * items
      * DatabaseName
      * DeletionProtection
      * Engine
      * EngineVersion
      * GlobalClusterArn
      * GlobalClusterIdentifier
      * GlobalClusterMembers
        * items
          * DBClusterArn
          * GlobalWriteForwardingStatus
          * IsWriter
          * Readers
      * GlobalClusterResourceId
      * Status
      * StorageEncrypted
  * Marker

### IAMAuthMode
* IAMAuthMode `string` (values: DISABLED, REQUIRED)

### IPRange
* IPRange `object`:  This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
  * CIDRIP
  * Status

### IPRangeList
* IPRangeList `array`
  * items
    * CIDRIP
    * Status

### IamRoleMissingPermissionsFault


### IamRoleNotFoundFault


### ImportInstallationMediaMessage
* ImportInstallationMediaMessage `object`
  * CustomAvailabilityZoneId **required**
  * Engine **required**
  * EngineInstallationMediaPath **required**
  * EngineVersion **required**
  * OSInstallationMediaPath **required**

### InstallationMedia
* InstallationMedia `object`: Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
  * CustomAvailabilityZoneId
  * Engine
  * EngineInstallationMediaPath
  * EngineVersion
  * FailureCause
    * Message
  * InstallationMediaId
  * OSInstallationMediaPath
  * Status

### InstallationMediaAlreadyExistsFault


### InstallationMediaFailureCause
* InstallationMediaFailureCause `object`: Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
  * Message

### InstallationMediaList
* InstallationMediaList `array`
  * items
    * CustomAvailabilityZoneId
    * Engine
    * EngineInstallationMediaPath
    * EngineVersion
    * FailureCause
      * Message
    * InstallationMediaId
    * OSInstallationMediaPath
    * Status

### InstallationMediaMessage
* InstallationMediaMessage `object`
  * InstallationMedia
    * items
      * CustomAvailabilityZoneId
      * Engine
      * EngineInstallationMediaPath
      * EngineVersion
      * FailureCause
        * Message
      * InstallationMediaId
      * OSInstallationMediaPath
      * Status
  * Marker

### InstallationMediaNotFoundFault


### InstanceQuotaExceededFault


### InsufficientAvailableIPsInSubnetFault


### InsufficientDBClusterCapacityFault


### InsufficientDBInstanceCapacityFault


### InsufficientStorageClusterCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidDBClusterCapacityFault


### InvalidDBClusterEndpointStateFault


### InvalidDBClusterSnapshotStateFault


### InvalidDBClusterStateFault


### InvalidDBInstanceAutomatedBackupStateFault


### InvalidDBInstanceStateFault


### InvalidDBParameterGroupStateFault


### InvalidDBProxyStateFault


### InvalidDBSecurityGroupStateFault


### InvalidDBSnapshotStateFault


### InvalidDBSubnetGroupFault


### InvalidDBSubnetGroupStateFault


### InvalidDBSubnetStateFault


### InvalidEventSubscriptionStateFault


### InvalidExportOnlyFault


### InvalidExportSourceStateFault


### InvalidExportTaskStateFault


### InvalidGlobalClusterStateFault


### InvalidOptionGroupStateFault


### InvalidRestoreFault


### InvalidS3BucketFault


### InvalidSubnet


### InvalidVPCNetworkStateFault


### KMSKeyNotAccessibleFault


### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: <p/>
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ResourceName **required**

### LogTypeList
* LogTypeList `array`
  * items [String](#string)

### Long
* Long `integer`

### LongOptional
* LongOptional `integer`

### MaxRecords
* MaxRecords `integer`

### MinimumEngineVersionPerAllowedValue
* MinimumEngineVersionPerAllowedValue `object`: The minimum DB engine version required for each corresponding allowed value for an option setting.
  * AllowedValue
  * MinimumEngineVersion

### MinimumEngineVersionPerAllowedValueList
* MinimumEngineVersionPerAllowedValueList `array`
  * items
    * AllowedValue
    * MinimumEngineVersion

### ModifyCertificatesMessage
* ModifyCertificatesMessage `object`
  * CertificateIdentifier
  * RemoveCustomerOverride

### ModifyCertificatesResult
* ModifyCertificatesResult `object`
  * Certificate [Certificate](#certificate)

### ModifyCurrentDBClusterCapacityMessage
* ModifyCurrentDBClusterCapacityMessage `object`
  * Capacity
  * DBClusterIdentifier **required**
  * SecondsBeforeTimeout
  * TimeoutAction

### ModifyDBClusterEndpointMessage
* ModifyDBClusterEndpointMessage `object`
  * DBClusterEndpointIdentifier **required**
  * EndpointType
  * ExcludedMembers
    * items [String](#string)
  * StaticMembers
    * items [String](#string)

### ModifyDBClusterMessage
* ModifyDBClusterMessage `object`: <p/>
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * BacktrackWindow
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBInstanceParameterGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableGlobalWriteForwarding
  * EnableHttpEndpoint
  * EnableIAMDatabaseAuthentication
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
  * VpcSecurityGroupIds
    * items

### ModifyDBClusterParameterGroupMessage
* ModifyDBClusterParameterGroupMessage `object`: <p/>
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
      * SupportedEngineModes
        * items [String](#string)

### ModifyDBClusterResult
* ModifyDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ModifyDBClusterSnapshotAttributeMessage
* ModifyDBClusterSnapshotAttributeMessage `object`: <p/>
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
* ModifyDBInstanceMessage `object`: <p/>
  * AllocatedStorage
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * CertificateRotationRestart
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * NewDBInstanceIdentifier
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PromotionTier
  * PubliclyAccessible
  * ReplicaMode
  * StorageType
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

### ModifyDBInstanceResult
* ModifyDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ModifyDBParameterGroupMessage
* ModifyDBParameterGroupMessage `object`: <p/>
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
      * SupportedEngineModes
        * items [String](#string)

### ModifyDBProxyRequest
* ModifyDBProxyRequest `object`
  * Auth
    * items [UserAuthConfig](#userauthconfig)
  * DBProxyName **required**
  * DebugLogging
  * IdleClientTimeout
  * NewDBProxyName
  * RequireTLS
  * RoleArn
  * SecurityGroups
    * items [String](#string)

### ModifyDBProxyResponse
* ModifyDBProxyResponse `object`
  * DBProxy
    * Auth
      * items [UserAuthConfigInfo](#userauthconfiginfo)
    * CreatedDate
    * DBProxyArn
    * DBProxyName
    * DebugLogging
    * Endpoint
    * EngineFamily
    * IdleClientTimeout
    * RequireTLS
    * RoleArn
    * Status
    * UpdatedDate
    * VpcSecurityGroupIds
      * items [String](#string)
    * VpcSubnetIds
      * items [String](#string)

### ModifyDBProxyTargetGroupRequest
* ModifyDBProxyTargetGroupRequest `object`
  * ConnectionPoolConfig
    * ConnectionBorrowTimeout
    * InitQuery
    * MaxConnectionsPercent
    * MaxIdleConnectionsPercent
    * SessionPinningFilters
      * items [String](#string)
  * DBProxyName **required**
  * NewName
  * TargetGroupName **required**

### ModifyDBProxyTargetGroupResponse
* ModifyDBProxyTargetGroupResponse `object`
  * DBProxyTargetGroup
    * ConnectionPoolConfig
      * ConnectionBorrowTimeout
      * InitQuery
      * MaxConnectionsPercent
      * MaxIdleConnectionsPercent
      * SessionPinningFilters
        * items [String](#string)
    * CreatedDate
    * DBProxyName
    * IsDefault
    * Status
    * TargetGroupArn
    * TargetGroupName
    * UpdatedDate

### ModifyDBSnapshotAttributeMessage
* ModifyDBSnapshotAttributeMessage `object`: <p/>
  * AttributeName **required**
  * DBSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

### ModifyDBSnapshotAttributeResult
* ModifyDBSnapshotAttributeResult `object`
  * DBSnapshotAttributesResult [DBSnapshotAttributesResult](#dbsnapshotattributesresult)

### ModifyDBSnapshotMessage
* ModifyDBSnapshotMessage `object`
  * DBSnapshotIdentifier **required**
  * EngineVersion
  * OptionGroupName

### ModifyDBSnapshotResult
* ModifyDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### ModifyDBSubnetGroupMessage
* ModifyDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupDescription
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items

### ModifyDBSubnetGroupResult
* ModifyDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items
  * SnsTopicArn
  * SourceType
  * SubscriptionName **required**

### ModifyEventSubscriptionResult
* ModifyEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### ModifyGlobalClusterMessage
* ModifyGlobalClusterMessage `object`
  * DeletionProtection
  * GlobalClusterIdentifier
  * NewGlobalClusterIdentifier

### ModifyGlobalClusterResult
* ModifyGlobalClusterResult `object`
  * GlobalCluster [GlobalCluster](#globalcluster)

### ModifyOptionGroupMessage
* ModifyOptionGroupMessage `object`: <p/>
  * ApplyImmediately
  * OptionGroupName **required**
  * OptionsToInclude
    * items
      * DBSecurityGroupMemberships
        * items
      * OptionName **required**
      * OptionSettings
        * items
          * AllowedValues
          * ApplyType
          * DataType
          * DefaultValue
          * Description
          * IsCollection
          * IsModifiable
          * Name
          * Value
      * OptionVersion
      * Port
      * VpcSecurityGroupMemberships
        * items
  * OptionsToRemove
    * items [String](#string)

### ModifyOptionGroupResult
* ModifyOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### Option
* Option `object`: Option details.
  * DBSecurityGroupMemberships
    * items
      * DBSecurityGroupName
      * Status
  * OptionDescription
  * OptionName
  * OptionSettings
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * DefaultValue
      * Description
      * IsCollection
      * IsModifiable
      * Name
      * Value
  * OptionVersion
  * Permanent
  * Persistent
  * Port
  * VpcSecurityGroupMemberships
    * items
      * Status
      * VpcSecurityGroupId

### OptionConfiguration
* OptionConfiguration `object`: A list of all available options
  * DBSecurityGroupMemberships
    * items
  * OptionName **required**
  * OptionSettings
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * DefaultValue
      * Description
      * IsCollection
      * IsModifiable
      * Name
      * Value
  * OptionVersion
  * Port
  * VpcSecurityGroupMemberships
    * items

### OptionConfigurationList
* OptionConfigurationList `array`
  * items
    * DBSecurityGroupMemberships
      * items
    * OptionName **required**
    * OptionSettings
      * items
        * AllowedValues
        * ApplyType
        * DataType
        * DefaultValue
        * Description
        * IsCollection
        * IsModifiable
        * Name
        * Value
    * OptionVersion
    * Port
    * VpcSecurityGroupMemberships
      * items

### OptionGroup
* OptionGroup `object`: <p/>
  * AllowsVpcAndNonVpcInstanceMemberships
  * EngineName
  * MajorEngineVersion
  * OptionGroupArn
  * OptionGroupDescription
  * OptionGroupName
  * Options
    * items
      * DBSecurityGroupMemberships
        * items
          * DBSecurityGroupName
          * Status
      * OptionDescription
      * OptionName
      * OptionSettings
        * items
          * AllowedValues
          * ApplyType
          * DataType
          * DefaultValue
          * Description
          * IsCollection
          * IsModifiable
          * Name
          * Value
      * OptionVersion
      * Permanent
      * Persistent
      * Port
      * VpcSecurityGroupMemberships
        * items
          * Status
          * VpcSecurityGroupId
  * VpcId

### OptionGroupAlreadyExistsFault


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


### OptionGroupOption
* OptionGroupOption `object`: Available option.
  * DefaultPort
  * Description
  * EngineName
  * MajorEngineVersion
  * MinimumRequiredMinorEngineVersion
  * Name
  * OptionGroupOptionSettings
    * items
      * AllowedValues
      * ApplyType
      * DefaultValue
      * IsModifiable
      * IsRequired
      * MinimumEngineVersionPerAllowedValue
        * items
          * AllowedValue
          * MinimumEngineVersion
      * SettingDescription
      * SettingName
  * OptionGroupOptionVersions
    * items
      * IsDefault
      * Version
  * OptionsConflictsWith
    * items
  * OptionsDependedOn
    * items
  * Permanent
  * Persistent
  * PortRequired
  * RequiresAutoMinorEngineVersionUpgrade
  * SupportsOptionVersionDowngrade
  * VpcOnly

### OptionGroupOptionSetting
* OptionGroupOptionSetting `object`: Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
  * AllowedValues
  * ApplyType
  * DefaultValue
  * IsModifiable
  * IsRequired
  * MinimumEngineVersionPerAllowedValue
    * items
      * AllowedValue
      * MinimumEngineVersion
  * SettingDescription
  * SettingName

### OptionGroupOptionSettingsList
* OptionGroupOptionSettingsList `array`
  * items
    * AllowedValues
    * ApplyType
    * DefaultValue
    * IsModifiable
    * IsRequired
    * MinimumEngineVersionPerAllowedValue
      * items
        * AllowedValue
        * MinimumEngineVersion
    * SettingDescription
    * SettingName

### OptionGroupOptionVersionsList
* OptionGroupOptionVersionsList `array`
  * items
    * IsDefault
    * Version

### OptionGroupOptionsList
* OptionGroupOptionsList `array`: List of available option group options.
  * items
    * DefaultPort
    * Description
    * EngineName
    * MajorEngineVersion
    * MinimumRequiredMinorEngineVersion
    * Name
    * OptionGroupOptionSettings
      * items
        * AllowedValues
        * ApplyType
        * DefaultValue
        * IsModifiable
        * IsRequired
        * MinimumEngineVersionPerAllowedValue
          * items
        * SettingDescription
        * SettingName
    * OptionGroupOptionVersions
      * items
        * IsDefault
        * Version
    * OptionsConflictsWith
      * items
    * OptionsDependedOn
      * items
    * Permanent
    * Persistent
    * PortRequired
    * RequiresAutoMinorEngineVersionUpgrade
    * SupportsOptionVersionDowngrade
    * VpcOnly

### OptionGroupOptionsMessage
* OptionGroupOptionsMessage `object`: <p/>
  * Marker
  * OptionGroupOptions [OptionGroupOptionsList](#optiongroupoptionslist)

### OptionGroupQuotaExceededFault


### OptionGroups
* OptionGroups `object`: List of option groups.
  * Marker
  * OptionGroupsList
    * items
      * AllowsVpcAndNonVpcInstanceMemberships
      * EngineName
      * MajorEngineVersion
      * OptionGroupArn
      * OptionGroupDescription
      * OptionGroupName
      * Options
        * items
          * DBSecurityGroupMemberships
          * OptionDescription
          * OptionName
          * OptionSettings
          * OptionVersion
          * Permanent
          * Persistent
          * Port
          * VpcSecurityGroupMemberships
      * VpcId

### OptionGroupsList
* OptionGroupsList `array`
  * items
    * AllowsVpcAndNonVpcInstanceMemberships
    * EngineName
    * MajorEngineVersion
    * OptionGroupArn
    * OptionGroupDescription
    * OptionGroupName
    * Options
      * items
        * DBSecurityGroupMemberships
          * items
        * OptionDescription
        * OptionName
        * OptionSettings
          * items
        * OptionVersion
        * Permanent
        * Persistent
        * Port
        * VpcSecurityGroupMemberships
          * items
    * VpcId

### OptionNamesList
* OptionNamesList `array`
  * items [String](#string)

### OptionSetting
* OptionSetting `object`: Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
  * AllowedValues
  * ApplyType
  * DataType
  * DefaultValue
  * Description
  * IsCollection
  * IsModifiable
  * Name
  * Value

### OptionSettingConfigurationList
* OptionSettingConfigurationList `array`
  * items
    * AllowedValues
    * ApplyType
    * DataType
    * DefaultValue
    * Description
    * IsCollection
    * IsModifiable
    * Name
    * Value

### OptionSettingsList
* OptionSettingsList `array`
  * items
    * AllowedValues
    * ApplyType
    * DataType
    * DefaultValue
    * Description
    * IsCollection
    * IsModifiable
    * Name
    * Value

### OptionVersion
* OptionVersion `object`: The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
  * IsDefault
  * Version

### OptionsConflictsWith
* OptionsConflictsWith `array`
  * items

### OptionsDependedOn
* OptionsDependedOn `array`
  * items

### OptionsList
* OptionsList `array`
  * items
    * DBSecurityGroupMemberships
      * items
        * DBSecurityGroupName
        * Status
    * OptionDescription
    * OptionName
    * OptionSettings
      * items
        * AllowedValues
        * ApplyType
        * DataType
        * DefaultValue
        * Description
        * IsCollection
        * IsModifiable
        * Name
        * Value
    * OptionVersion
    * Permanent
    * Persistent
    * Port
    * VpcSecurityGroupMemberships
      * items
        * Status
        * VpcSecurityGroupId

### OrderableDBInstanceOption
* OrderableDBInstanceOption `object`: <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
  * AvailabilityZoneGroup
  * AvailabilityZones
    * items
      * Name
  * AvailableProcessorFeatures
    * items
      * AllowedValues
      * DefaultValue
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
  * OutpostCapable
  * ReadReplicaCapable
  * StorageType
  * SupportedEngineModes
    * items [String](#string)
  * SupportsEnhancedMonitoring
  * SupportsGlobalDatabases
  * SupportsIAMDatabaseAuthentication
  * SupportsIops
  * SupportsKerberosAuthentication
  * SupportsPerformanceInsights
  * SupportsStorageAutoscaling
  * SupportsStorageEncryption
  * Vpc

### OrderableDBInstanceOptionsList
* OrderableDBInstanceOptionsList `array`
  * items
    * AvailabilityZoneGroup
    * AvailabilityZones
      * items
        * Name
    * AvailableProcessorFeatures
      * items
        * AllowedValues
        * DefaultValue
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
    * OutpostCapable
    * ReadReplicaCapable
    * StorageType
    * SupportedEngineModes
      * items [String](#string)
    * SupportsEnhancedMonitoring
    * SupportsGlobalDatabases
    * SupportsIAMDatabaseAuthentication
    * SupportsIops
    * SupportsKerberosAuthentication
    * SupportsPerformanceInsights
    * SupportsStorageAutoscaling
    * SupportsStorageEncryption
    * Vpc

### OrderableDBInstanceOptionsMessage
* OrderableDBInstanceOptionsMessage `object`:  Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
  * Marker
  * OrderableDBInstanceOptions
    * items
      * AvailabilityZoneGroup
      * AvailabilityZones
        * items
          * Name
      * AvailableProcessorFeatures
        * items
          * AllowedValues
          * DefaultValue
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
      * OutpostCapable
      * ReadReplicaCapable
      * StorageType
      * SupportedEngineModes
        * items [String](#string)
      * SupportsEnhancedMonitoring
      * SupportsGlobalDatabases
      * SupportsIAMDatabaseAuthentication
      * SupportsIops
      * SupportsKerberosAuthentication
      * SupportsPerformanceInsights
      * SupportsStorageAutoscaling
      * SupportsStorageEncryption
      * Vpc

### Outpost
* Outpost `object`: <p>A data type that represents an Outpost.</p> <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on AWS Outposts</a> in the <i>Amazon RDS User Guide.</i> </p>
  * Arn

### Parameter
* Parameter `object`: <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
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
  * SupportedEngineModes
    * items [String](#string)

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
    * SupportedEngineModes
      * items [String](#string)

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
* PendingMaintenanceActionsMessage `object`: Data returned from the <b>DescribePendingMaintenanceActions</b> action.
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
* PendingModifiedValues `object`:  This data type is used as a response element in the <code>ModifyDBInstance</code> action and contains changes that will be applied during the next maintenance window. 
  * AllocatedStorage
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBSubnetGroupName
  * EngineVersion
  * IAMDatabaseAuthenticationEnabled
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MultiAZ
  * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * StorageType

### PointInTimeRestoreNotEnabledFault


### ProcessorFeature
* ProcessorFeature `object`: <p>Contains the processor features of a DB instance class.</p> <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name for the <code>Name</code> parameter. To specify the number of threads per core, use the <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p> <p>You can set the processor features of the DB instance class for a DB instance when you call one of the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromS3</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul> <p>You can view the valid processor values for a particular instance class by calling the <code>DescribeOrderableDBInstanceOptions</code> action and specifying the instance class for the <code>DBInstanceClass</code> parameter.</p> <p>In addition, you can use the following actions for DB instance class processor information:</p> <ul> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DescribeDBSnapshots</code> </p> </li> <li> <p> <code>DescribeValidDBInstanceModifications</code> </p> </li> </ul> <p>If you call <code>DescribeDBInstances</code>, <code>ProcessorFeature</code> returns non-null values only if the following conditions are met:</p> <ul> <li> <p>You are accessing an Oracle DB instance.</p> </li> <li> <p>Your Oracle DB instance class supports configuring the number of CPU cores and threads per core.</p> </li> <li> <p>The current number CPU cores and threads is set to a non-default value.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
  * Name
  * Value

### ProcessorFeatureList
* ProcessorFeatureList `array`
  * items
    * Name
    * Value

### PromoteReadReplicaDBClusterMessage
* PromoteReadReplicaDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required**

### PromoteReadReplicaDBClusterResult
* PromoteReadReplicaDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### PromoteReadReplicaMessage
* PromoteReadReplicaMessage `object`: <p/>
  * BackupRetentionPeriod
  * DBInstanceIdentifier **required**
  * PreferredBackupWindow

### PromoteReadReplicaResult
* PromoteReadReplicaResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ProvisionedIopsNotAvailableInAZFault


### PurchaseReservedDBInstancesOfferingMessage
* PurchaseReservedDBInstancesOfferingMessage `object`: <p/>
  * DBInstanceCount
  * ReservedDBInstanceId
  * ReservedDBInstancesOfferingId **required**
  * Tags [TagList](#taglist)

### PurchaseReservedDBInstancesOfferingResult
* PurchaseReservedDBInstancesOfferingResult `object`
  * ReservedDBInstance [ReservedDBInstance](#reserveddbinstance)

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

### ReadersArnList
* ReadersArnList `array`
  * items [String](#string)

### RebootDBInstanceMessage
* RebootDBInstanceMessage `object`: <p/>
  * DBInstanceIdentifier **required**
  * ForceFailover

### RebootDBInstanceResult
* RebootDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RecurringCharge
* RecurringCharge `object`:  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. 
  * RecurringChargeAmount
  * RecurringChargeFrequency

### RecurringChargeList
* RecurringChargeList `array`
  * items
    * RecurringChargeAmount
    * RecurringChargeFrequency

### RegisterDBProxyTargetsRequest
* RegisterDBProxyTargetsRequest `object`
  * DBClusterIdentifiers
    * items [String](#string)
  * DBInstanceIdentifiers
    * items [String](#string)
  * DBProxyName **required**
  * TargetGroupName

### RegisterDBProxyTargetsResponse
* RegisterDBProxyTargetsResponse `object`
  * DBProxyTargets
    * items [DBProxyTarget](#dbproxytarget)

### RemoveFromGlobalClusterMessage
* RemoveFromGlobalClusterMessage `object`
  * DbClusterIdentifier
  * GlobalClusterIdentifier

### RemoveFromGlobalClusterResult
* RemoveFromGlobalClusterResult `object`
  * GlobalCluster [GlobalCluster](#globalcluster)

### RemoveRoleFromDBClusterMessage
* RemoveRoleFromDBClusterMessage `object`
  * DBClusterIdentifier **required**
  * FeatureName
  * RoleArn **required**

### RemoveRoleFromDBInstanceMessage
* RemoveRoleFromDBInstanceMessage `object`
  * DBInstanceIdentifier **required**
  * FeatureName **required**
  * RoleArn **required**

### RemoveSourceIdentifierFromSubscriptionMessage
* RemoveSourceIdentifierFromSubscriptionMessage `object`: <p/>
  * SourceIdentifier **required**
  * SubscriptionName **required**

### RemoveSourceIdentifierFromSubscriptionResult
* RemoveSourceIdentifierFromSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: <p/>
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

### ReplicaMode
* ReplicaMode `string` (values: open-read-only, mounted)

### ReservedDBInstance
* ReservedDBInstance `object`:  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. 
  * CurrencyCode
  * DBInstanceClass
  * DBInstanceCount
  * Duration
  * FixedPrice
  * LeaseId
  * MultiAZ
  * OfferingType
  * ProductDescription
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservedDBInstanceArn
  * ReservedDBInstanceId
  * ReservedDBInstancesOfferingId
  * StartTime
  * State
  * UsagePrice

### ReservedDBInstanceAlreadyExistsFault


### ReservedDBInstanceList
* ReservedDBInstanceList `array`
  * items
    * CurrencyCode
    * DBInstanceClass
    * DBInstanceCount
    * Duration
    * FixedPrice
    * LeaseId
    * MultiAZ
    * OfferingType
    * ProductDescription
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedDBInstanceArn
    * ReservedDBInstanceId
    * ReservedDBInstancesOfferingId
    * StartTime
    * State
    * UsagePrice

### ReservedDBInstanceMessage
* ReservedDBInstanceMessage `object`:  Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action. 
  * Marker
  * ReservedDBInstances
    * items
      * CurrencyCode
      * DBInstanceClass
      * DBInstanceCount
      * Duration
      * FixedPrice
      * LeaseId
      * MultiAZ
      * OfferingType
      * ProductDescription
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedDBInstanceArn
      * ReservedDBInstanceId
      * ReservedDBInstancesOfferingId
      * StartTime
      * State
      * UsagePrice

### ReservedDBInstanceNotFoundFault


### ReservedDBInstanceQuotaExceededFault


### ReservedDBInstancesOffering
* ReservedDBInstancesOffering `object`:  This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action. 
  * CurrencyCode
  * DBInstanceClass
  * Duration
  * FixedPrice
  * MultiAZ
  * OfferingType
  * ProductDescription
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservedDBInstancesOfferingId
  * UsagePrice

### ReservedDBInstancesOfferingList
* ReservedDBInstancesOfferingList `array`
  * items
    * CurrencyCode
    * DBInstanceClass
    * Duration
    * FixedPrice
    * MultiAZ
    * OfferingType
    * ProductDescription
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedDBInstancesOfferingId
    * UsagePrice

### ReservedDBInstancesOfferingMessage
* ReservedDBInstancesOfferingMessage `object`:  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action. 
  * Marker
  * ReservedDBInstancesOfferings
    * items
      * CurrencyCode
      * DBInstanceClass
      * Duration
      * FixedPrice
      * MultiAZ
      * OfferingType
      * ProductDescription
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedDBInstancesOfferingId
      * UsagePrice

### ReservedDBInstancesOfferingNotFoundFault


### ResetDBClusterParameterGroupMessage
* ResetDBClusterParameterGroupMessage `object`: <p/>
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
      * SupportedEngineModes
        * items [String](#string)
  * ResetAllParameters

### ResetDBParameterGroupMessage
* ResetDBParameterGroupMessage `object`: <p/>
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
      * SupportedEngineModes
        * items [String](#string)
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

### RestoreDBClusterFromS3Message
* RestoreDBClusterFromS3Message `object`
  * AvailabilityZones
    * items
  * BacktrackWindow
  * BackupRetentionPeriod
  * CharacterSetName
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword **required**
  * MasterUsername **required**
  * OptionGroupName
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * S3BucketName **required**
  * S3IngestionRoleArn **required**
  * S3Prefix
  * SourceEngine **required**
  * SourceEngineVersion **required**
  * StorageEncrypted
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterFromS3Result
* RestoreDBClusterFromS3Result `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBClusterFromSnapshotMessage
* RestoreDBClusterFromSnapshotMessage `object`: <p/>
  * AvailabilityZones
    * items
  * BacktrackWindow
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DatabaseName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine **required**
  * EngineMode
  * EngineVersion
  * KmsKeyId
  * OptionGroupName
  * Port
  * ScalingConfiguration
    * AutoPause
    * MaxCapacity
    * MinCapacity
    * SecondsUntilAutoPause
    * TimeoutAction
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
* RestoreDBClusterToPointInTimeMessage `object`: <p/>
  * BacktrackWindow
  * CopyTagsToSnapshot
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * KmsKeyId
  * OptionGroupName
  * Port
  * RestoreToTime
  * RestoreType
  * SourceDBClusterIdentifier **required**
  * Tags [TagList](#taglist)
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterToPointInTimeResult
* RestoreDBClusterToPointInTimeResult `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBInstanceFromDBSnapshotMessage
* RestoreDBInstanceFromDBSnapshotMessage `object`: <p/>
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSnapshotIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine
  * Iops
  * LicenseModel
  * MultiAZ
  * OptionGroupName
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * StorageType
  * Tags [TagList](#taglist)
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

### RestoreDBInstanceFromDBSnapshotResult
* RestoreDBInstanceFromDBSnapshotResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RestoreDBInstanceFromS3Message
* RestoreDBInstanceFromS3Message `object`
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CopyTagsToSnapshot
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * DBName
  * DBParameterGroupName
  * DBSecurityGroups
    * items
  * DBSubnetGroupName
  * DeletionProtection
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
  * MaxAllocatedStorage
  * MonitoringInterval
  * MonitoringRoleArn
  * MultiAZ
  * OptionGroupName
  * PerformanceInsightsKMSKeyId
  * PerformanceInsightsRetentionPeriod
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * S3BucketName **required**
  * S3IngestionRoleArn **required**
  * S3Prefix
  * SourceEngine **required**
  * SourceEngineVersion **required**
  * StorageEncrypted
  * StorageType
  * Tags
    * items
      * Key
      * Value
  * UseDefaultProcessorFeatures
  * VpcSecurityGroupIds
    * items

### RestoreDBInstanceFromS3Result
* RestoreDBInstanceFromS3Result `object`
  * DBInstance [DBInstance](#dbinstance)

### RestoreDBInstanceToPointInTimeMessage
* RestoreDBInstanceToPointInTimeMessage `object`: <p/>
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * CopyTagsToSnapshot
  * DBInstanceClass
  * DBName
  * DBParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * Domain
  * DomainIAMRoleName
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * EnableIAMDatabaseAuthentication
  * Engine
  * Iops
  * LicenseModel
  * MaxAllocatedStorage
  * MultiAZ
  * OptionGroupName
  * Port
  * ProcessorFeatures
    * items
      * Name
      * Value
  * PubliclyAccessible
  * RestoreTime
  * SourceDBInstanceAutomatedBackupsArn
  * SourceDBInstanceIdentifier
  * SourceDbiResourceId
  * StorageType
  * Tags [TagList](#taglist)
  * TargetDBInstanceIdentifier **required**
  * TdeCredentialArn
  * TdeCredentialPassword
  * UseDefaultProcessorFeatures
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

### RestoreDBInstanceToPointInTimeResult
* RestoreDBInstanceToPointInTimeResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RestoreWindow
* RestoreWindow `object`: Earliest and latest time an instance can be restored to:
  * EarliestTime
  * LatestTime

### RevokeDBSecurityGroupIngressMessage
* RevokeDBSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP
  * DBSecurityGroupName **required**
  * EC2SecurityGroupId
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

### RevokeDBSecurityGroupIngressResult
* RevokeDBSecurityGroupIngressResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### SNSInvalidTopicFault


### SNSNoAuthorizationFault


### SNSTopicArnNotFoundFault


### ScalingConfiguration
* ScalingConfiguration `object`: <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
  * AutoPause
  * MaxCapacity
  * MinCapacity
  * SecondsUntilAutoPause
  * TimeoutAction

### ScalingConfigurationInfo
* ScalingConfigurationInfo `object`: <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
  * AutoPause
  * MaxCapacity
  * MinCapacity
  * SecondsUntilAutoPause
  * TimeoutAction

### SharedSnapshotQuotaExceededFault


### SnapshotQuotaExceededFault


### SourceIdsList
* SourceIdsList `array`
  * items

### SourceNotFoundFault


### SourceRegion
* SourceRegion `object`: Contains an AWS Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
  * Endpoint
  * RegionName
  * Status
  * SupportsDBInstanceAutomatedBackupsReplication

### SourceRegionList
* SourceRegionList `array`
  * items
    * Endpoint
    * RegionName
    * Status
    * SupportsDBInstanceAutomatedBackupsReplication

### SourceRegionMessage
* SourceRegionMessage `object`: Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
  * Marker
  * SourceRegions
    * items
      * Endpoint
      * RegionName
      * Status
      * SupportsDBInstanceAutomatedBackupsReplication

### SourceType
* SourceType `string` (values: db-instance, db-parameter-group, db-security-group, db-snapshot, db-cluster, db-cluster-snapshot)

### StartActivityStreamRequest
* StartActivityStreamRequest `object`
  * ApplyImmediately
  * KmsKeyId **required**
  * Mode **required**
  * ResourceArn **required**

### StartActivityStreamResponse
* StartActivityStreamResponse `object`
  * ApplyImmediately
  * KinesisStreamName
  * KmsKeyId
  * Mode
  * Status

### StartDBClusterMessage
* StartDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StartDBClusterResult
* StartDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StartDBInstanceAutomatedBackupsReplicationMessage
* StartDBInstanceAutomatedBackupsReplicationMessage `object`
  * BackupRetentionPeriod
  * KmsKeyId
  * PreSignedUrl
  * SourceDBInstanceArn **required**

### StartDBInstanceAutomatedBackupsReplicationResult
* StartDBInstanceAutomatedBackupsReplicationResult `object`
  * DBInstanceAutomatedBackup [DBInstanceAutomatedBackup](#dbinstanceautomatedbackup)

### StartDBInstanceMessage
* StartDBInstanceMessage `object`
  * DBInstanceIdentifier **required**

### StartDBInstanceResult
* StartDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### StartExportTaskMessage
* StartExportTaskMessage `object`
  * ExportOnly
    * items [String](#string)
  * ExportTaskIdentifier **required**
  * IamRoleArn **required**
  * KmsKeyId **required**
  * S3BucketName **required**
  * S3Prefix
  * SourceArn **required**

### StopActivityStreamRequest
* StopActivityStreamRequest `object`
  * ApplyImmediately
  * ResourceArn **required**

### StopActivityStreamResponse
* StopActivityStreamResponse `object`
  * KinesisStreamName
  * KmsKeyId
  * Status

### StopDBClusterMessage
* StopDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StopDBClusterResult
* StopDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StopDBInstanceAutomatedBackupsReplicationMessage
* StopDBInstanceAutomatedBackupsReplicationMessage `object`
  * SourceDBInstanceArn **required**

### StopDBInstanceAutomatedBackupsReplicationResult
* StopDBInstanceAutomatedBackupsReplicationResult `object`
  * DBInstanceAutomatedBackup [DBInstanceAutomatedBackup](#dbinstanceautomatedbackup)

### StopDBInstanceMessage
* StopDBInstanceMessage `object`
  * DBInstanceIdentifier **required**
  * DBSnapshotIdentifier

### StopDBInstanceResult
* StopDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### StorageQuotaExceededFault


### StorageTypeNotSupportedFault


### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### StringSensitive
* StringSensitive `string`

### Subnet
* Subnet `object`:  This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation. 
  * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
  * SubnetIdentifier
  * SubnetOutpost
    * Arn
  * SubnetStatus

### SubnetAlreadyInUse


### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items

### SubnetList
* SubnetList `array`
  * items
    * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
    * SubnetIdentifier
    * SubnetOutpost
      * Arn
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
* Tag `object`: Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
  * Key
  * Value

### TagList
* TagList `array`: A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> 
  * items
    * Key
    * Value

### TagListMessage
* TagListMessage `object`: <p/>
  * TagList
    * items
      * Key
      * Value

### TargetGroupList
* TargetGroupList `array`
  * items [DBProxyTargetGroup](#dbproxytargetgroup)

### TargetHealth
* TargetHealth `object`: Information about the connection health of an RDS Proxy target.
  * Description
  * Reason
  * State

### TargetHealthReason
* TargetHealthReason `string` (values: UNREACHABLE, CONNECTION_FAILED, AUTH_FAILURE, PENDING_PROXY_CAPACITY)

### TargetList
* TargetList `array`
  * items [DBProxyTarget](#dbproxytarget)

### TargetState
* TargetState `string` (values: REGISTERING, AVAILABLE, UNAVAILABLE)

### TargetType
* TargetType `string` (values: RDS_INSTANCE, RDS_SERVERLESS_ENDPOINT, TRACKED_CLUSTER)

### Timezone
* Timezone `object`: A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions. 
  * TimezoneName

### UpgradeTarget
* UpgradeTarget `object`: The version of the database engine that a DB instance can be upgraded to.
  * AutoUpgrade
  * Description
  * Engine
  * EngineVersion
  * IsMajorVersionUpgrade

### UserAuthConfig
* UserAuthConfig `object`: Specifies the details of authentication used by a proxy to log in as a specific database user.
  * AuthScheme
  * Description
  * IAMAuth
  * SecretArn
  * UserName

### UserAuthConfigInfo
* UserAuthConfigInfo `object`: Returns the details of authentication used by a proxy to log in as a specific database user.
  * AuthScheme
  * Description
  * IAMAuth
  * SecretArn
  * UserName

### UserAuthConfigInfoList
* UserAuthConfigInfoList `array`
  * items [UserAuthConfigInfo](#userauthconfiginfo)

### UserAuthConfigList
* UserAuthConfigList `array`
  * items [UserAuthConfig](#userauthconfig)

### ValidDBInstanceModificationsMessage
* ValidDBInstanceModificationsMessage `object`: Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. 
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
      * SupportsStorageAutoscaling
  * ValidProcessorFeatures
    * items
      * AllowedValues
      * DefaultValue
      * Name

### ValidStorageOptions
* ValidStorageOptions `object`: Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. 
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
  * SupportsStorageAutoscaling

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
    * SupportsStorageAutoscaling

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

### VpnDetails
* VpnDetails `object`: <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the AWS website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> <i>RDS on VMware User Guide.</i> </a> </p>
  * VpnGatewayIp
  * VpnId
  * VpnName
  * VpnPSK
  * VpnState
  * VpnTunnelOriginatorIP

### WriteForwardingStatus
* WriteForwardingStatus `string` (values: enabled, disabled, enabling, disabling, unknown)


