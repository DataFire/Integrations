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

amazonaws_rds.AddRoleToDBCluster({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>Amazon Relational Database Service</fullname> <p> </p> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

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
  * DBClusterIdentifier **required** [String](#string)
  * RoleArn **required** [String](#string)

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
  * SourceIdentifier **required** [String](#string)
  * SubscriptionName **required** [String](#string)

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
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

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
  * ApplyAction **required** [String](#string)
  * OptInType **required** [String](#string)
  * ResourceIdentifier **required** [String](#string)

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
  * CIDRIP [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupId [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

#### Output
* output [AuthorizeDBSecurityGroupIngressResult](#authorizedbsecuritygroupingressresult)

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
  * SourceDBClusterParameterGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBClusterParameterGroupDescription **required** [String](#string)
  * TargetDBClusterParameterGroupIdentifier **required** [String](#string)

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
  * CopyTags [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * PreSignedUrl [String](#string)
  * SourceDBClusterSnapshotIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBClusterSnapshotIdentifier **required** [String](#string)

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
  * SourceDBParameterGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBParameterGroupDescription **required** [String](#string)
  * TargetDBParameterGroupIdentifier **required** [String](#string)

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
  * CopyTags [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * PreSignedUrl [String](#string)
  * SourceDBSnapshotIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBSnapshotIdentifier **required** [String](#string)

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
  * SourceOptionGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetOptionGroupDescription **required** [String](#string)
  * TargetOptionGroupIdentifier **required** [String](#string)

#### Output
* output [CopyOptionGroupResult](#copyoptiongroupresult)

### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({
  "DBClusterIdentifier": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MasterUserPassword [String](#string)
  * MasterUsername [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreSignedUrl [String](#string)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationSourceIdentifier [String](#string)
  * SourceRegion [String](#string)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

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
  * DBClusterParameterGroupName **required** [String](#string)
  * DBParameterGroupFamily **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

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
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterSnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

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
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBClusterIdentifier [String](#string)
  * DBInstanceClass **required** [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBName [String](#string)
  * DBParameterGroupName [String](#string)
  * DBSecurityGroups [DBSecurityGroupNameList](#dbsecuritygroupnamelist)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * LicenseModel [String](#string)
  * MasterUserPassword [String](#string)
  * MasterUsername [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PromotionTier [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * Timezone [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

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
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreSignedUrl [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * SourceDBInstanceIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)

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
  * DBParameterGroupFamily **required** [String](#string)
  * DBParameterGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateDBParameterGroupResult](#createdbparametergroupresult)

### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({
  "DBSecurityGroupName": "",
  "DBSecurityGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupDescription **required** [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

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
  * DBInstanceIdentifier **required** [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
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
  * DBSubnetGroupDescription **required** [String](#string)
  * DBSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

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
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn **required** [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

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
  * EngineName **required** [String](#string)
  * MajorEngineVersion **required** [String](#string)
  * OptionGroupDescription **required** [String](#string)
  * OptionGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateOptionGroupResult](#createoptiongroupresult)

### DeleteDBCluster



```js
amazonaws_rds.DeleteDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** [String](#string)
  * FinalDBSnapshotIdentifier [String](#string)
  * SkipFinalSnapshot [Boolean](#boolean)

#### Output
* output [DeleteDBClusterResult](#deletedbclusterresult)

### DeleteDBClusterParameterGroup



```js
amazonaws_rds.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** [String](#string)

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
  * DBClusterSnapshotIdentifier **required** [String](#string)

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
  * DBInstanceIdentifier **required** [String](#string)
  * FinalDBSnapshotIdentifier [String](#string)
  * SkipFinalSnapshot [Boolean](#boolean)

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBParameterGroup



```js
amazonaws_rds.DeleteDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({
  "DBSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSecurityGroupName **required** [String](#string)

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
  * DBSnapshotIdentifier **required** [String](#string)

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
  * DBSubnetGroupName **required** [String](#string)

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
  * SubscriptionName **required** [String](#string)

#### Output
* output [DeleteEventSubscriptionResult](#deleteeventsubscriptionresult)

### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Input
* input `object`
  * OptionGroupName **required** [String](#string)

#### Output
*Output schema unknown*

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
  * CertificateIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [CertificateMessage](#certificatemessage)

### DescribeDBClusterParameterGroups



```js
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * DBClusterParameterGroupName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

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
  * DBClusterSnapshotIdentifier **required** [String](#string)

#### Output
* output [DescribeDBClusterSnapshotAttributesResult](#describedbclustersnapshotattributesresult)

### DescribeDBClusterSnapshots



```js
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier [String](#string)
  * DBClusterSnapshotIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * IncludePublic [Boolean](#boolean)
  * IncludeShared [Boolean](#boolean)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotType [String](#string)

#### Output
* output [DBClusterSnapshotMessage](#dbclustersnapshotmessage)

### DescribeDBClusters



```js
amazonaws_rds.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBEngineVersions



```js
amazonaws_rds.DescribeDBEngineVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupFamily [String](#string)
  * DefaultOnly [Boolean](#boolean)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * Filters [FilterList](#filterlist)
  * ListSupportedCharacterSets [BooleanOptional](#booleanoptional)
  * ListSupportedTimezones [BooleanOptional](#booleanoptional)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBInstances



```js
amazonaws_rds.DescribeDBInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier **required** [String](#string)
  * FileLastWritten [Long](#long)
  * FileSize [Long](#long)
  * FilenameContains [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeDBLogFilesResponse](#describedblogfilesresponse)

### DescribeDBParameterGroups



```js
amazonaws_rds.DescribeDBParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

#### Output
* output [DBParameterGroupDetails](#dbparametergroupdetails)

### DescribeDBSecurityGroups



```js
amazonaws_rds.DescribeDBSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBSecurityGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * DBSnapshotIdentifier **required** [String](#string)

#### Output
* output [DescribeDBSnapshotAttributesResult](#describedbsnapshotattributesresult)

### DescribeDBSnapshots



```js
amazonaws_rds.DescribeDBSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier [String](#string)
  * DBSnapshotIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * IncludePublic [Boolean](#boolean)
  * IncludeShared [Boolean](#boolean)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotType [String](#string)

#### Output
* output [DBSnapshotMessage](#dbsnapshotmessage)

### DescribeDBSubnetGroups



```js
amazonaws_rds.DescribeDBSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBSubnetGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * DBParameterGroupFamily **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

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
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupFamily **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeEngineDefaultParametersResult](#describeenginedefaultparametersresult)

### DescribeEventCategories



```js
amazonaws_rds.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * SourceType [String](#string)

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventSubscriptions



```js
amazonaws_rds.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SubscriptionName [String](#string)

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEvents



```js
amazonaws_rds.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeOptionGroupOptions



```js
amazonaws_rds.DescribeOptionGroupOptions({
  "EngineName": ""
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EngineName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * MajorEngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [OptionGroupOptionsMessage](#optiongroupoptionsmessage)

### DescribeOptionGroups



```js
amazonaws_rds.DescribeOptionGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EngineName [String](#string)
  * Filters [FilterList](#filterlist)
  * MajorEngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OptionGroupName [String](#string)

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
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass [String](#string)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * Filters [FilterList](#filterlist)
  * LicenseModel [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Vpc [BooleanOptional](#booleanoptional)

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribePendingMaintenanceActions



```js
amazonaws_rds.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ResourceIdentifier [String](#string)

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribeReservedDBInstances



```js
amazonaws_rds.DescribeReservedDBInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass [String](#string)
  * Duration [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedDBInstanceId [String](#string)
  * ReservedDBInstancesOfferingId [String](#string)

#### Output
* output [ReservedDBInstanceMessage](#reserveddbinstancemessage)

### DescribeReservedDBInstancesOfferings



```js
amazonaws_rds.DescribeReservedDBInstancesOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass [String](#string)
  * Duration [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedDBInstancesOfferingId [String](#string)

#### Output
* output [ReservedDBInstancesOfferingMessage](#reserveddbinstancesofferingmessage)

### DescribeSourceRegions



```js
amazonaws_rds.DescribeSourceRegions({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * RegionName [String](#string)

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
  * DBInstanceIdentifier **required** [String](#string)

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
  * NumberOfLines `string`
  * Marker `string`
  * DBInstanceIdentifier **required** [String](#string)
  * LogFileName **required** [String](#string)
  * Marker [String](#string)
  * NumberOfLines [Integer](#integer)

#### Output
* output [DownloadDBLogFilePortionDetails](#downloaddblogfileportiondetails)

### FailoverDBCluster



```js
amazonaws_rds.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier [String](#string)
  * TargetDBInstanceIdentifier [String](#string)

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### ListTagsForResource



```js
amazonaws_rds.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * ResourceName **required** [String](#string)

#### Output
* output [TagListMessage](#taglistmessage)

### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ApplyImmediately [Boolean](#boolean)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * MasterUserPassword [String](#string)
  * NewDBClusterIdentifier [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBClusterParameterGroup



```js
amazonaws_rds.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

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
  * AttributeName **required** [String](#string)
  * DBClusterSnapshotIdentifier **required** [String](#string)
  * ValuesToAdd [AttributeValueList](#attributevaluelist)
  * ValuesToRemove [AttributeValueList](#attributevaluelist)

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
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AllowMajorVersionUpgrade [Boolean](#boolean)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CACertificateIdentifier [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBParameterGroupName [String](#string)
  * DBPortNumber [IntegerOptional](#integeroptional)
  * DBSecurityGroups [DBSecurityGroupNameList](#dbsecuritygroupnamelist)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * EngineVersion [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MasterUserPassword [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * NewDBInstanceIdentifier [String](#string)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PromotionTier [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

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
  * DBParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

#### Output
* output [DBParameterGroupNameMessage](#dbparametergroupnamemessage)

### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBSnapshotIdentifier **required** [String](#string)
  * EngineVersion [String](#string)
  * OptionGroupName [String](#string)

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
  * AttributeName **required** [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
  * ValuesToAdd [AttributeValueList](#attributevaluelist)
  * ValuesToRemove [AttributeValueList](#attributevaluelist)

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
  * DBSubnetGroupDescription [String](#string)
  * DBSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

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
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn [String](#string)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Input
* input `object`
  * ApplyImmediately [Boolean](#boolean)
  * OptionGroupName **required** [String](#string)
  * OptionsToInclude [OptionConfigurationList](#optionconfigurationlist)
  * OptionsToRemove [OptionNamesList](#optionnameslist)

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
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * DBInstanceIdentifier **required** [String](#string)
  * PreferredBackupWindow [String](#string)

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
  * DBClusterIdentifier **required** [String](#string)

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
  * DBInstanceCount [IntegerOptional](#integeroptional)
  * ReservedDBInstanceId [String](#string)
  * ReservedDBInstancesOfferingId **required** [String](#string)
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
  * DBInstanceIdentifier **required** [String](#string)
  * ForceFailover [BooleanOptional](#booleanoptional)

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RemoveRoleFromDBCluster



```js
amazonaws_rds.RemoveRoleFromDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** [String](#string)
  * RoleArn **required** [String](#string)

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
  * SourceIdentifier **required** [String](#string)
  * SubscriptionName **required** [String](#string)

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
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

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
  * DBClusterParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

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
  * DBParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

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
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MasterUserPassword **required** [String](#string)
  * MasterUsername **required** [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * S3BucketName **required** [String](#string)
  * S3IngestionRoleArn **required** [String](#string)
  * S3Prefix [String](#string)
  * SourceEngine **required** [String](#string)
  * SourceEngineVersion **required** [String](#string)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

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
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DBClusterIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * SnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

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
  * DBClusterIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * RestoreToTime [TStamp](#tstamp)
  * RestoreType [String](#string)
  * SourceDBClusterIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * UseLatestRestorableTime [Boolean](#boolean)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

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
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBName [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)

#### Output
* output [RestoreDBInstanceFromDBSnapshotResult](#restoredbinstancefromdbsnapshotresult)

### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({
  "SourceDBInstanceIdentifier": "",
  "TargetDBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBName [String](#string)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * RestoreTime [TStamp](#tstamp)
  * SourceDBInstanceIdentifier **required** [String](#string)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBInstanceIdentifier **required** [String](#string)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * UseLatestRestorableTime [Boolean](#boolean)

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
  * CIDRIP [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupId [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

#### Output
* output [RevokeDBSecurityGroupIngressResult](#revokedbsecuritygroupingressresult)

### StartDBInstance



```js
amazonaws_rds.StartDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** [String](#string)

#### Output
* output [StartDBInstanceResult](#startdbinstanceresult)

### StopDBInstance



```js
amazonaws_rds.StopDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** [String](#string)
  * DBSnapshotIdentifier [String](#string)

#### Output
* output [StopDBInstanceResult](#stopdbinstanceresult)



## Definitions

### AccountAttributesMessage
* AccountAttributesMessage `object`: Data returned by the <b>DescribeAccountAttributes</b> action.
  * AccountQuotas [AccountQuotaList](#accountquotalist)

### AccountQuota
* AccountQuota `object`: Describes a quota for an AWS account, for example, the number of DB instances allowed.
  * AccountQuotaName [String](#string)
  * Max [Long](#long)
  * Used [Long](#long)

### AccountQuotaList
* AccountQuotaList `array`
  * items [AccountQuota](#accountquota)

### AddRoleToDBClusterMessage
* AddRoleToDBClusterMessage `object`
  * DBClusterIdentifier **required** [String](#string)
  * RoleArn **required** [String](#string)

### AddSourceIdentifierToSubscriptionMessage
* AddSourceIdentifierToSubscriptionMessage `object`: <p/>
  * SourceIdentifier **required** [String](#string)
  * SubscriptionName **required** [String](#string)

### AddSourceIdentifierToSubscriptionResult
* AddSourceIdentifierToSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: <p/>
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

### ApplyMethod
* ApplyMethod `string` (values: immediate, pending-reboot)

### ApplyPendingMaintenanceActionMessage
* ApplyPendingMaintenanceActionMessage `object`: <p/>
  * ApplyAction **required** [String](#string)
  * OptInType **required** [String](#string)
  * ResourceIdentifier **required** [String](#string)

### ApplyPendingMaintenanceActionResult
* ApplyPendingMaintenanceActionResult `object`
  * ResourcePendingMaintenanceActions [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### AttributeValueList
* AttributeValueList `array`
  * items [String](#string)

### AuthorizationAlreadyExistsFault
* AuthorizationAlreadyExistsFault `object`: The specified CIDRIP or EC2 security group is already authorized for the specified DB security group.

### AuthorizationNotFoundFault
* AuthorizationNotFoundFault `object`: <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>RDS may not also be authorized via IAM to perform necessary actions on your behalf.</p>

### AuthorizationQuotaExceededFault
* AuthorizationQuotaExceededFault `object`: DB security group authorization quota has been reached.

### AuthorizeDBSecurityGroupIngressMessage
* AuthorizeDBSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupId [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

### AuthorizeDBSecurityGroupIngressResult
* AuthorizeDBSecurityGroupIngressResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### AvailabilityZone
* AvailabilityZone `object`: <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the following data type:</p> <ul> <li> <p> <a>OrderableDBInstanceOption</a> </p> </li> </ul>
  * Name [String](#string)

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### AvailabilityZones
* AvailabilityZones `array`
  * items [String](#string)

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### Certificate
* Certificate `object`: A CA certificate for an AWS account.
  * CertificateArn [String](#string)
  * CertificateIdentifier [String](#string)
  * CertificateType [String](#string)
  * Thumbprint [String](#string)
  * ValidFrom [TStamp](#tstamp)
  * ValidTill [TStamp](#tstamp)

### CertificateList
* CertificateList `array`
  * items [Certificate](#certificate)

### CertificateMessage
* CertificateMessage `object`: Data returned by the <b>DescribeCertificates</b> action.
  * Certificates [CertificateList](#certificatelist)
  * Marker [String](#string)

### CertificateNotFoundFault
* CertificateNotFoundFault `object`:  <i>CertificateIdentifier</i> does not refer to an existing certificate. 

### CharacterSet
* CharacterSet `object`:  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. 
  * CharacterSetDescription [String](#string)
  * CharacterSetName [String](#string)

### CopyDBClusterParameterGroupMessage
* CopyDBClusterParameterGroupMessage `object`
  * SourceDBClusterParameterGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBClusterParameterGroupDescription **required** [String](#string)
  * TargetDBClusterParameterGroupIdentifier **required** [String](#string)

### CopyDBClusterParameterGroupResult
* CopyDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CopyDBClusterSnapshotMessage
* CopyDBClusterSnapshotMessage `object`: <p/>
  * CopyTags [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * PreSignedUrl [String](#string)
  * SourceDBClusterSnapshotIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBClusterSnapshotIdentifier **required** [String](#string)

### CopyDBClusterSnapshotResult
* CopyDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CopyDBParameterGroupMessage
* CopyDBParameterGroupMessage `object`: <p/>
  * SourceDBParameterGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBParameterGroupDescription **required** [String](#string)
  * TargetDBParameterGroupIdentifier **required** [String](#string)

### CopyDBParameterGroupResult
* CopyDBParameterGroupResult `object`
  * DBParameterGroup [DBParameterGroup](#dbparametergroup)

### CopyDBSnapshotMessage
* CopyDBSnapshotMessage `object`: <p/>
  * CopyTags [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * PreSignedUrl [String](#string)
  * SourceDBSnapshotIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBSnapshotIdentifier **required** [String](#string)

### CopyDBSnapshotResult
* CopyDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### CopyOptionGroupMessage
* CopyOptionGroupMessage `object`: <p/>
  * SourceOptionGroupIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetOptionGroupDescription **required** [String](#string)
  * TargetOptionGroupIdentifier **required** [String](#string)

### CopyOptionGroupResult
* CopyOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### CreateDBClusterMessage
* CreateDBClusterMessage `object`: <p/>
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MasterUserPassword [String](#string)
  * MasterUsername [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreSignedUrl [String](#string)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationSourceIdentifier [String](#string)
  * SourceRegion [String](#string)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### CreateDBClusterParameterGroupMessage
* CreateDBClusterParameterGroupMessage `object`: <p/>
  * DBClusterParameterGroupName **required** [String](#string)
  * DBParameterGroupFamily **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateDBClusterParameterGroupResult
* CreateDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CreateDBClusterResult
* CreateDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### CreateDBClusterSnapshotMessage
* CreateDBClusterSnapshotMessage `object`: <p/>
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterSnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateDBClusterSnapshotResult
* CreateDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CreateDBInstanceMessage
* CreateDBInstanceMessage `object`: <p/>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBClusterIdentifier [String](#string)
  * DBInstanceClass **required** [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBName [String](#string)
  * DBParameterGroupName [String](#string)
  * DBSecurityGroups [DBSecurityGroupNameList](#dbsecuritygroupnamelist)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * LicenseModel [String](#string)
  * MasterUserPassword [String](#string)
  * MasterUsername [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PromotionTier [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * Timezone [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### CreateDBInstanceReadReplicaMessage
* CreateDBInstanceReadReplicaMessage `object`
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreSignedUrl [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * SourceDBInstanceIdentifier **required** [String](#string)
  * SourceRegion [String](#string)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)

### CreateDBInstanceReadReplicaResult
* CreateDBInstanceReadReplicaResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBInstanceResult
* CreateDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBParameterGroupMessage
* CreateDBParameterGroupMessage `object`: <p/>
  * DBParameterGroupFamily **required** [String](#string)
  * DBParameterGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateDBParameterGroupResult
* CreateDBParameterGroupResult `object`
  * DBParameterGroup [DBParameterGroup](#dbparametergroup)

### CreateDBSecurityGroupMessage
* CreateDBSecurityGroupMessage `object`: <p/>
  * DBSecurityGroupDescription **required** [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateDBSecurityGroupResult
* CreateDBSecurityGroupResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### CreateDBSnapshotMessage
* CreateDBSnapshotMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateDBSnapshotResult
* CreateDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### CreateDBSubnetGroupMessage
* CreateDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupDescription **required** [String](#string)
  * DBSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

### CreateDBSubnetGroupResult
* CreateDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn **required** [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateEventSubscriptionResult
* CreateEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### CreateOptionGroupMessage
* CreateOptionGroupMessage `object`: <p/>
  * EngineName **required** [String](#string)
  * MajorEngineVersion **required** [String](#string)
  * OptionGroupDescription **required** [String](#string)
  * OptionGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateOptionGroupResult
* CreateOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### DBCluster
* DBCluster `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>CreateDBCluster</a> </p> </li> <li> <p> <a>DeleteDBCluster</a> </p> </li> <li> <p> <a>FailoverDBCluster</a> </p> </li> <li> <p> <a>ModifyDBCluster</a> </p> </li> <li> <p> <a>RestoreDBClusterFromSnapshot</a> </p> </li> <li> <p> <a>RestoreDBClusterToPointInTime</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AssociatedRoles [DBClusterRoles](#dbclusterroles)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * CloneGroupId [String](#string)
  * ClusterCreateTime [TStamp](#tstamp)
  * DBClusterArn [String](#string)
  * DBClusterIdentifier [String](#string)
  * DBClusterMembers [DBClusterMemberList](#dbclustermemberlist)
  * DBClusterOptionGroupMemberships [DBClusterOptionGroupMemberships](#dbclusteroptiongroupmemberships)
  * DBClusterParameterGroup [String](#string)
  * DBSubnetGroup [String](#string)
  * DatabaseName [String](#string)
  * DbClusterResourceId [String](#string)
  * EarliestRestorableTime [TStamp](#tstamp)
  * Endpoint [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * HostedZoneId [String](#string)
  * IAMDatabaseAuthenticationEnabled [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * LatestRestorableTime [TStamp](#tstamp)
  * MasterUsername [String](#string)
  * MultiAZ [Boolean](#boolean)
  * PercentProgress [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * ReadReplicaIdentifiers [ReadReplicaIdentifierList](#readreplicaidentifierlist)
  * ReaderEndpoint [String](#string)
  * ReplicationSourceIdentifier [String](#string)
  * Status [String](#string)
  * StorageEncrypted [Boolean](#boolean)
  * VpcSecurityGroups [VpcSecurityGroupMembershipList](#vpcsecuritygroupmembershiplist)

### DBClusterAlreadyExistsFault
* DBClusterAlreadyExistsFault `object`: User already has a DB cluster with the given identifier.

### DBClusterList
* DBClusterList `array`
  * items [DBCluster](#dbcluster)

### DBClusterMember
* DBClusterMember `object`: Contains information about an instance that is part of a DB cluster.
  * DBClusterParameterGroupStatus [String](#string)
  * DBInstanceIdentifier [String](#string)
  * IsClusterWriter [Boolean](#boolean)
  * PromotionTier [IntegerOptional](#integeroptional)

### DBClusterMemberList
* DBClusterMemberList `array`
  * items [DBClusterMember](#dbclustermember)

### DBClusterMessage
* DBClusterMessage `object`: Contains the result of a successful invocation of the <a>DescribeDBClusters</a> action.
  * DBClusters [DBClusterList](#dbclusterlist)
  * Marker [String](#string)

### DBClusterNotFoundFault
* DBClusterNotFoundFault `object`:  <i>DBClusterIdentifier</i> does not refer to an existing DB cluster. 

### DBClusterOptionGroupMemberships
* DBClusterOptionGroupMemberships `array`
  * items [DBClusterOptionGroupStatus](#dbclusteroptiongroupstatus)

### DBClusterOptionGroupStatus
* DBClusterOptionGroupStatus `object`: Contains status information for a DB cluster option group.
  * DBClusterOptionGroupName [String](#string)
  * Status [String](#string)

### DBClusterParameterGroup
* DBClusterParameterGroup `object`: <p>Contains the result of a successful invocation of the <a>CreateDBClusterParameterGroup</a> or <a>CopyDBClusterParameterGroup</a> action. </p> <p>This data type is used as a request parameter in the <a>DeleteDBClusterParameterGroup</a> action, and as a response element in the <a>DescribeDBClusterParameterGroups</a> action. </p>
  * DBClusterParameterGroupArn [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * DBParameterGroupFamily [String](#string)
  * Description [String](#string)

### DBClusterParameterGroupDetails
* DBClusterParameterGroupDetails `object`: Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### DBClusterParameterGroupList
* DBClusterParameterGroupList `array`
  * items [DBClusterParameterGroup](#dbclusterparametergroup)

### DBClusterParameterGroupNameMessage
* DBClusterParameterGroupNameMessage `object`: <p/>
  * DBClusterParameterGroupName [String](#string)

### DBClusterParameterGroupNotFoundFault
* DBClusterParameterGroupNotFoundFault `object`:  <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group. 

### DBClusterParameterGroupsMessage
* DBClusterParameterGroupsMessage `object`: <p/>
  * DBClusterParameterGroups [DBClusterParameterGroupList](#dbclusterparametergrouplist)
  * Marker [String](#string)

### DBClusterQuotaExceededFault
* DBClusterQuotaExceededFault `object`: User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.

### DBClusterRole
* DBClusterRole `object`: Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.
  * RoleArn [String](#string)
  * Status [String](#string)

### DBClusterRoleAlreadyExistsFault
* DBClusterRoleAlreadyExistsFault `object`: The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.

### DBClusterRoleNotFoundFault
* DBClusterRoleNotFoundFault `object`: The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.

### DBClusterRoleQuotaExceededFault
* DBClusterRoleQuotaExceededFault `object`: You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.

### DBClusterRoles
* DBClusterRoles `array`
  * items [DBClusterRole](#dbclusterrole)

### DBClusterSnapshot
* DBClusterSnapshot `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>CreateDBClusterSnapshot</a> </p> </li> <li> <p> <a>DeleteDBClusterSnapshot</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
  * AllocatedStorage [Integer](#integer)
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * ClusterCreateTime [TStamp](#tstamp)
  * DBClusterIdentifier [String](#string)
  * DBClusterSnapshotArn [String](#string)
  * DBClusterSnapshotIdentifier [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * IAMDatabaseAuthenticationEnabled [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * LicenseModel [String](#string)
  * MasterUsername [String](#string)
  * PercentProgress [Integer](#integer)
  * Port [Integer](#integer)
  * SnapshotCreateTime [TStamp](#tstamp)
  * SnapshotType [String](#string)
  * SourceDBClusterSnapshotArn [String](#string)
  * Status [String](#string)
  * StorageEncrypted [Boolean](#boolean)
  * VpcId [String](#string)

### DBClusterSnapshotAlreadyExistsFault
* DBClusterSnapshotAlreadyExistsFault `object`: User already has a DB cluster snapshot with the given identifier.

### DBClusterSnapshotAttribute
* DBClusterSnapshotAttribute `object`: <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
  * AttributeName [String](#string)
  * AttributeValues [AttributeValueList](#attributevaluelist)

### DBClusterSnapshotAttributeList
* DBClusterSnapshotAttributeList `array`
  * items [DBClusterSnapshotAttribute](#dbclustersnapshotattribute)

### DBClusterSnapshotAttributesResult
* DBClusterSnapshotAttributesResult `object`: <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
  * DBClusterSnapshotAttributes [DBClusterSnapshotAttributeList](#dbclustersnapshotattributelist)
  * DBClusterSnapshotIdentifier [String](#string)

### DBClusterSnapshotList
* DBClusterSnapshotList `array`
  * items [DBClusterSnapshot](#dbclustersnapshot)

### DBClusterSnapshotMessage
* DBClusterSnapshotMessage `object`:  Provides a list of DB cluster snapshots for the user as the result of a call to the <a>DescribeDBClusterSnapshots</a> action. 
  * DBClusterSnapshots [DBClusterSnapshotList](#dbclustersnapshotlist)
  * Marker [String](#string)

### DBClusterSnapshotNotFoundFault
* DBClusterSnapshotNotFoundFault `object`:  <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot. 

### DBEngineVersion
* DBEngineVersion `object`:  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. 
  * DBEngineDescription [String](#string)
  * DBEngineVersionDescription [String](#string)
  * DBParameterGroupFamily [String](#string)
  * DefaultCharacterSet [CharacterSet](#characterset)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * SupportedCharacterSets [SupportedCharacterSetsList](#supportedcharactersetslist)
  * SupportedTimezones [SupportedTimezonesList](#supportedtimezoneslist)
  * ValidUpgradeTarget [ValidUpgradeTargetList](#validupgradetargetlist)

### DBEngineVersionList
* DBEngineVersionList `array`
  * items [DBEngineVersion](#dbengineversion)

### DBEngineVersionMessage
* DBEngineVersionMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBEngineVersions</a> action. 
  * DBEngineVersions [DBEngineVersionList](#dbengineversionlist)
  * Marker [String](#string)

### DBInstance
* DBInstance `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>StopDBInstance</a> </p> </li> <li> <p> <a>StartDBInstance</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
  * AllocatedStorage [Integer](#integer)
  * AutoMinorVersionUpgrade [Boolean](#boolean)
  * AvailabilityZone [String](#string)
  * BackupRetentionPeriod [Integer](#integer)
  * CACertificateIdentifier [String](#string)
  * CharacterSetName [String](#string)
  * CopyTagsToSnapshot [Boolean](#boolean)
  * DBClusterIdentifier [String](#string)
  * DBInstanceArn [String](#string)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier [String](#string)
  * DBInstanceStatus [String](#string)
  * DBName [String](#string)
  * DBParameterGroups [DBParameterGroupStatusList](#dbparametergroupstatuslist)
  * DBSecurityGroups [DBSecurityGroupMembershipList](#dbsecuritygroupmembershiplist)
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)
  * DbInstancePort [Integer](#integer)
  * DbiResourceId [String](#string)
  * DomainMemberships [DomainMembershipList](#domainmembershiplist)
  * Endpoint [Endpoint](#endpoint)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * EnhancedMonitoringResourceArn [String](#string)
  * IAMDatabaseAuthenticationEnabled [Boolean](#boolean)
  * InstanceCreateTime [TStamp](#tstamp)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * LatestRestorableTime [TStamp](#tstamp)
  * LicenseModel [String](#string)
  * MasterUsername [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * MultiAZ [Boolean](#boolean)
  * OptionGroupMemberships [OptionGroupMembershipList](#optiongroupmembershiplist)
  * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
  * PerformanceInsightsEnabled [BooleanOptional](#booleanoptional)
  * PerformanceInsightsKMSKeyId [String](#string)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PromotionTier [IntegerOptional](#integeroptional)
  * PubliclyAccessible [Boolean](#boolean)
  * ReadReplicaDBClusterIdentifiers [ReadReplicaDBClusterIdentifierList](#readreplicadbclusteridentifierlist)
  * ReadReplicaDBInstanceIdentifiers [ReadReplicaDBInstanceIdentifierList](#readreplicadbinstanceidentifierlist)
  * ReadReplicaSourceDBInstanceIdentifier [String](#string)
  * SecondaryAvailabilityZone [String](#string)
  * StatusInfos [DBInstanceStatusInfoList](#dbinstancestatusinfolist)
  * StorageEncrypted [Boolean](#boolean)
  * StorageType [String](#string)
  * TdeCredentialArn [String](#string)
  * Timezone [String](#string)
  * VpcSecurityGroups [VpcSecurityGroupMembershipList](#vpcsecuritygroupmembershiplist)

### DBInstanceAlreadyExistsFault
* DBInstanceAlreadyExistsFault `object`: User already has a DB instance with the given identifier.

### DBInstanceList
* DBInstanceList `array`
  * items [DBInstance](#dbinstance)

### DBInstanceMessage
* DBInstanceMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBInstances</a> action. 
  * DBInstances [DBInstanceList](#dbinstancelist)
  * Marker [String](#string)

### DBInstanceNotFoundFault
* DBInstanceNotFoundFault `object`:  <i>DBInstanceIdentifier</i> does not refer to an existing DB instance. 

### DBInstanceStatusInfo
* DBInstanceStatusInfo `object`: Provides a list of status information for a DB instance.
  * Message [String](#string)
  * Normal [Boolean](#boolean)
  * Status [String](#string)
  * StatusType [String](#string)

### DBInstanceStatusInfoList
* DBInstanceStatusInfoList `array`
  * items [DBInstanceStatusInfo](#dbinstancestatusinfo)

### DBLogFileNotFoundFault
* DBLogFileNotFoundFault `object`:  <i>LogFileName</i> does not refer to an existing DB log file.

### DBParameterGroup
* DBParameterGroup `object`: <p>Contains the result of a successful invocation of the <a>CreateDBParameterGroup</a> action. </p> <p>This data type is used as a request parameter in the <a>DeleteDBParameterGroup</a> action, and as a response element in the <a>DescribeDBParameterGroups</a> action. </p>
  * DBParameterGroupArn [String](#string)
  * DBParameterGroupFamily [String](#string)
  * DBParameterGroupName [String](#string)
  * Description [String](#string)

### DBParameterGroupAlreadyExistsFault
* DBParameterGroupAlreadyExistsFault `object`: A DB parameter group with the same name exists.

### DBParameterGroupDetails
* DBParameterGroupDetails `object`:  Contains the result of a successful invocation of the <a>DescribeDBParameters</a> action. 
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### DBParameterGroupList
* DBParameterGroupList `array`
  * items [DBParameterGroup](#dbparametergroup)

### DBParameterGroupNameMessage
* DBParameterGroupNameMessage `object`:  Contains the result of a successful invocation of the <a>ModifyDBParameterGroup</a> or <a>ResetDBParameterGroup</a> action. 
  * DBParameterGroupName [String](#string)

### DBParameterGroupNotFoundFault
* DBParameterGroupNotFoundFault `object`:  <i>DBParameterGroupName</i> does not refer to an existing DB parameter group. 

### DBParameterGroupQuotaExceededFault
* DBParameterGroupQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB parameter groups.

### DBParameterGroupStatus
* DBParameterGroupStatus `object`: <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>CreateDBInstanceReadReplica</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromDBSnapshot</a> </p> </li> </ul>
  * DBParameterGroupName [String](#string)
  * ParameterApplyStatus [String](#string)

### DBParameterGroupStatusList
* DBParameterGroupStatusList `array`
  * items [DBParameterGroupStatus](#dbparametergroupstatus)

### DBParameterGroupsMessage
* DBParameterGroupsMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBParameterGroups</a> action. 
  * DBParameterGroups [DBParameterGroupList](#dbparametergrouplist)
  * Marker [String](#string)

### DBSecurityGroup
* DBSecurityGroup `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>DescribeDBSecurityGroups</a> </p> </li> <li> <p> <a>AuthorizeDBSecurityGroupIngress</a> </p> </li> <li> <p> <a>CreateDBSecurityGroup</a> </p> </li> <li> <p> <a>RevokeDBSecurityGroupIngress</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBSecurityGroups</a> action.</p>
  * DBSecurityGroupArn [String](#string)
  * DBSecurityGroupDescription [String](#string)
  * DBSecurityGroupName [String](#string)
  * EC2SecurityGroups [EC2SecurityGroupList](#ec2securitygrouplist)
  * IPRanges [IPRangeList](#iprangelist)
  * OwnerId [String](#string)
  * VpcId [String](#string)

### DBSecurityGroupAlreadyExistsFault
* DBSecurityGroupAlreadyExistsFault `object`:  A DB security group with the name specified in <i>DBSecurityGroupName</i> already exists. 

### DBSecurityGroupMembership
* DBSecurityGroupMembership `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> <li> <p> <a>RestoreDBInstanceFromDBSnapshot</a> </p> </li> <li> <p> <a>RestoreDBInstanceToPointInTime</a> </p> </li> </ul>
  * DBSecurityGroupName [String](#string)
  * Status [String](#string)

### DBSecurityGroupMembershipList
* DBSecurityGroupMembershipList `array`
  * items [DBSecurityGroupMembership](#dbsecuritygroupmembership)

### DBSecurityGroupMessage
* DBSecurityGroupMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBSecurityGroups</a> action. 
  * DBSecurityGroups [DBSecurityGroups](#dbsecuritygroups)
  * Marker [String](#string)

### DBSecurityGroupNameList
* DBSecurityGroupNameList `array`
  * items [String](#string)

### DBSecurityGroupNotFoundFault
* DBSecurityGroupNotFoundFault `object`:  <i>DBSecurityGroupName</i> does not refer to an existing DB security group. 

### DBSecurityGroupNotSupportedFault
* DBSecurityGroupNotSupportedFault `object`: A DB security group is not allowed for this action.

### DBSecurityGroupQuotaExceededFault
* DBSecurityGroupQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB security groups.

### DBSecurityGroups
* DBSecurityGroups `array`
  * items [DBSecurityGroup](#dbsecuritygroup)

### DBSnapshot
* DBSnapshot `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>CreateDBSnapshot</a> </p> </li> <li> <p> <a>DeleteDBSnapshot</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBSnapshots</a> action.</p>
  * AllocatedStorage [Integer](#integer)
  * AvailabilityZone [String](#string)
  * DBInstanceIdentifier [String](#string)
  * DBSnapshotArn [String](#string)
  * DBSnapshotIdentifier [String](#string)
  * Encrypted [Boolean](#boolean)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * IAMDatabaseAuthenticationEnabled [Boolean](#boolean)
  * InstanceCreateTime [TStamp](#tstamp)
  * Iops [IntegerOptional](#integeroptional)
  * KmsKeyId [String](#string)
  * LicenseModel [String](#string)
  * MasterUsername [String](#string)
  * OptionGroupName [String](#string)
  * PercentProgress [Integer](#integer)
  * Port [Integer](#integer)
  * SnapshotCreateTime [TStamp](#tstamp)
  * SnapshotType [String](#string)
  * SourceDBSnapshotIdentifier [String](#string)
  * SourceRegion [String](#string)
  * Status [String](#string)
  * StorageType [String](#string)
  * TdeCredentialArn [String](#string)
  * Timezone [String](#string)
  * VpcId [String](#string)

### DBSnapshotAlreadyExistsFault
* DBSnapshotAlreadyExistsFault `object`:  <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. 

### DBSnapshotAttribute
* DBSnapshotAttribute `object`: <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to restore a manual DB snapshot. For more information, see the <a>ModifyDBSnapshotAttribute</a> API.</p>
  * AttributeName [String](#string)
  * AttributeValues [AttributeValueList](#attributevaluelist)

### DBSnapshotAttributeList
* DBSnapshotAttributeList `array`
  * items [DBSnapshotAttribute](#dbsnapshotattribute)

### DBSnapshotAttributesResult
* DBSnapshotAttributesResult `object`: <p>Contains the results of a successful call to the <a>DescribeDBSnapshotAttributes</a> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <a>ModifyDBSnapshotAttribute</a> API action.</p>
  * DBSnapshotAttributes [DBSnapshotAttributeList](#dbsnapshotattributelist)
  * DBSnapshotIdentifier [String](#string)

### DBSnapshotList
* DBSnapshotList `array`
  * items [DBSnapshot](#dbsnapshot)

### DBSnapshotMessage
* DBSnapshotMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBSnapshots</a> action. 
  * DBSnapshots [DBSnapshotList](#dbsnapshotlist)
  * Marker [String](#string)

### DBSnapshotNotFoundFault
* DBSnapshotNotFoundFault `object`:  <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot. 

### DBSubnetGroup
* DBSubnetGroup `object`: <p>Contains the result of a successful invocation of the following actions:</p> <ul> <li> <p> <a>CreateDBSubnetGroup</a> </p> </li> <li> <p> <a>ModifyDBSubnetGroup</a> </p> </li> <li> <p> <a>DescribeDBSubnetGroups</a> </p> </li> <li> <p> <a>DeleteDBSubnetGroup</a> </p> </li> </ul> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
  * DBSubnetGroupArn [String](#string)
  * DBSubnetGroupDescription [String](#string)
  * DBSubnetGroupName [String](#string)
  * SubnetGroupStatus [String](#string)
  * Subnets [SubnetList](#subnetlist)
  * VpcId [String](#string)

### DBSubnetGroupAlreadyExistsFault
* DBSubnetGroupAlreadyExistsFault `object`:  <i>DBSubnetGroupName</i> is already used by an existing DB subnet group. 

### DBSubnetGroupDoesNotCoverEnoughAZs
* DBSubnetGroupDoesNotCoverEnoughAZs `object`: Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.

### DBSubnetGroupMessage
* DBSubnetGroupMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBSubnetGroups</a> action. 
  * DBSubnetGroups [DBSubnetGroups](#dbsubnetgroups)
  * Marker [String](#string)

### DBSubnetGroupNotAllowedFault
* DBSubnetGroupNotAllowedFault `object`: Indicates that the DBSubnetGroup should not be specified while creating read replicas that lie in the same region as the source instance.

### DBSubnetGroupNotFoundFault
* DBSubnetGroupNotFoundFault `object`:  <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group. 

### DBSubnetGroupQuotaExceededFault
* DBSubnetGroupQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB subnet groups.

### DBSubnetGroups
* DBSubnetGroups `array`
  * items [DBSubnetGroup](#dbsubnetgroup)

### DBSubnetQuotaExceededFault
* DBSubnetQuotaExceededFault `object`: Request would result in user exceeding the allowed number of subnets in a DB subnet groups.

### DBUpgradeDependencyFailureFault
* DBUpgradeDependencyFailureFault `object`: The DB upgrade failed because a resource the DB depends on could not be modified.

### DeleteDBClusterMessage
* DeleteDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required** [String](#string)
  * FinalDBSnapshotIdentifier [String](#string)
  * SkipFinalSnapshot [Boolean](#boolean)

### DeleteDBClusterParameterGroupMessage
* DeleteDBClusterParameterGroupMessage `object`: <p/>
  * DBClusterParameterGroupName **required** [String](#string)

### DeleteDBClusterResult
* DeleteDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### DeleteDBClusterSnapshotMessage
* DeleteDBClusterSnapshotMessage `object`: <p/>
  * DBClusterSnapshotIdentifier **required** [String](#string)

### DeleteDBClusterSnapshotResult
* DeleteDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### DeleteDBInstanceMessage
* DeleteDBInstanceMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)
  * FinalDBSnapshotIdentifier [String](#string)
  * SkipFinalSnapshot [Boolean](#boolean)

### DeleteDBInstanceResult
* DeleteDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### DeleteDBParameterGroupMessage
* DeleteDBParameterGroupMessage `object`: <p/>
  * DBParameterGroupName **required** [String](#string)

### DeleteDBSecurityGroupMessage
* DeleteDBSecurityGroupMessage `object`: <p/>
  * DBSecurityGroupName **required** [String](#string)

### DeleteDBSnapshotMessage
* DeleteDBSnapshotMessage `object`: <p/>
  * DBSnapshotIdentifier **required** [String](#string)

### DeleteDBSnapshotResult
* DeleteDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### DeleteDBSubnetGroupMessage
* DeleteDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupName **required** [String](#string)

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required** [String](#string)

### DeleteEventSubscriptionResult
* DeleteEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### DeleteOptionGroupMessage
* DeleteOptionGroupMessage `object`: <p/>
  * OptionGroupName **required** [String](#string)

### DescribeAccountAttributesMessage
* DescribeAccountAttributesMessage `object`: <p/>

### DescribeCertificatesMessage
* DescribeCertificatesMessage `object`: <p/>
  * CertificateIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBClusterParameterGroupsMessage
* DescribeDBClusterParameterGroupsMessage `object`: <p/>
  * DBClusterParameterGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBClusterParametersMessage
* DescribeDBClusterParametersMessage `object`: <p/>
  * DBClusterParameterGroupName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

### DescribeDBClusterSnapshotAttributesMessage
* DescribeDBClusterSnapshotAttributesMessage `object`: <p/>
  * DBClusterSnapshotIdentifier **required** [String](#string)

### DescribeDBClusterSnapshotAttributesResult
* DescribeDBClusterSnapshotAttributesResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotsMessage
* DescribeDBClusterSnapshotsMessage `object`: <p/>
  * DBClusterIdentifier [String](#string)
  * DBClusterSnapshotIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * IncludePublic [Boolean](#boolean)
  * IncludeShared [Boolean](#boolean)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotType [String](#string)

### DescribeDBClustersMessage
* DescribeDBClustersMessage `object`: <p/>
  * DBClusterIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBEngineVersionsMessage
* DescribeDBEngineVersionsMessage `object`
  * DBParameterGroupFamily [String](#string)
  * DefaultOnly [Boolean](#boolean)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * Filters [FilterList](#filterlist)
  * ListSupportedCharacterSets [BooleanOptional](#booleanoptional)
  * ListSupportedTimezones [BooleanOptional](#booleanoptional)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBInstancesMessage
* DescribeDBInstancesMessage `object`: <p/>
  * DBInstanceIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBLogFilesDetails
* DescribeDBLogFilesDetails `object`: This data type is used as a response element to <a>DescribeDBLogFiles</a>.
  * LastWritten [Long](#long)
  * LogFileName [String](#string)
  * Size [Long](#long)

### DescribeDBLogFilesList
* DescribeDBLogFilesList `array`
  * items [DescribeDBLogFilesDetails](#describedblogfilesdetails)

### DescribeDBLogFilesMessage
* DescribeDBLogFilesMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)
  * FileLastWritten [Long](#long)
  * FileSize [Long](#long)
  * FilenameContains [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBLogFilesResponse
* DescribeDBLogFilesResponse `object`:  The response from a call to <a>DescribeDBLogFiles</a>. 
  * DescribeDBLogFiles [DescribeDBLogFilesList](#describedblogfileslist)
  * Marker [String](#string)

### DescribeDBParameterGroupsMessage
* DescribeDBParameterGroupsMessage `object`: <p/>
  * DBParameterGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBParametersMessage
* DescribeDBParametersMessage `object`
  * DBParameterGroupName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Source [String](#string)

### DescribeDBSecurityGroupsMessage
* DescribeDBSecurityGroupsMessage `object`: <p/>
  * DBSecurityGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeDBSnapshotAttributesMessage
* DescribeDBSnapshotAttributesMessage `object`: <p/>
  * DBSnapshotIdentifier **required** [String](#string)

### DescribeDBSnapshotAttributesResult
* DescribeDBSnapshotAttributesResult `object`
  * DBSnapshotAttributesResult [DBSnapshotAttributesResult](#dbsnapshotattributesresult)

### DescribeDBSnapshotsMessage
* DescribeDBSnapshotsMessage `object`: <p/>
  * DBInstanceIdentifier [String](#string)
  * DBSnapshotIdentifier [String](#string)
  * Filters [FilterList](#filterlist)
  * IncludePublic [Boolean](#boolean)
  * IncludeShared [Boolean](#boolean)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotType [String](#string)

### DescribeDBSubnetGroupsMessage
* DescribeDBSubnetGroupsMessage `object`: <p/>
  * DBSubnetGroupName [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEngineDefaultClusterParametersMessage
* DescribeEngineDefaultClusterParametersMessage `object`: <p/>
  * DBParameterGroupFamily **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEngineDefaultClusterParametersResult
* DescribeEngineDefaultClusterParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEngineDefaultParametersMessage
* DescribeEngineDefaultParametersMessage `object`: <p/>
  * DBParameterGroupFamily **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEngineDefaultParametersResult
* DescribeEngineDefaultParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * SourceType [String](#string)

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SubscriptionName [String](#string)

### DescribeEventsMessage
* DescribeEventsMessage `object`: <p/>
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

### DescribeOptionGroupOptionsMessage
* DescribeOptionGroupOptionsMessage `object`: <p/>
  * EngineName **required** [String](#string)
  * Filters [FilterList](#filterlist)
  * MajorEngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeOptionGroupsMessage
* DescribeOptionGroupsMessage `object`: <p/>
  * EngineName [String](#string)
  * Filters [FilterList](#filterlist)
  * MajorEngineVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OptionGroupName [String](#string)

### DescribeOrderableDBInstanceOptionsMessage
* DescribeOrderableDBInstanceOptionsMessage `object`: <p/>
  * DBInstanceClass [String](#string)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * Filters [FilterList](#filterlist)
  * LicenseModel [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * Vpc [BooleanOptional](#booleanoptional)

### DescribePendingMaintenanceActionsMessage
* DescribePendingMaintenanceActionsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ResourceIdentifier [String](#string)

### DescribeReservedDBInstancesMessage
* DescribeReservedDBInstancesMessage `object`: <p/>
  * DBInstanceClass [String](#string)
  * Duration [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedDBInstanceId [String](#string)
  * ReservedDBInstancesOfferingId [String](#string)

### DescribeReservedDBInstancesOfferingsMessage
* DescribeReservedDBInstancesOfferingsMessage `object`: <p/>
  * DBInstanceClass [String](#string)
  * Duration [String](#string)
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * ReservedDBInstancesOfferingId [String](#string)

### DescribeSourceRegionsMessage
* DescribeSourceRegionsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * RegionName [String](#string)

### DescribeValidDBInstanceModificationsMessage
* DescribeValidDBInstanceModificationsMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)

### DescribeValidDBInstanceModificationsResult
* DescribeValidDBInstanceModificationsResult `object`
  * ValidDBInstanceModificationsMessage [ValidDBInstanceModificationsMessage](#validdbinstancemodificationsmessage)

### DomainMembership
* DomainMembership `object`: An Active Directory Domain membership record associated with the DB instance.
  * Domain [String](#string)
  * FQDN [String](#string)
  * IAMRoleName [String](#string)
  * Status [String](#string)

### DomainMembershipList
* DomainMembershipList `array`: List of Active Directory Domain membership records associated with a DB instance.
  * items [DomainMembership](#domainmembership)

### DomainNotFoundFault
* DomainNotFoundFault `object`:  <i>Domain</i> does not refer to an existing Active Directory Domain. 

### Double
* Double `number`

### DoubleOptional
* DoubleOptional `number`

### DoubleRange
* DoubleRange `object`: A range of double values.
  * From [Double](#double)
  * To [Double](#double)

### DoubleRangeList
* DoubleRangeList `array`
  * items [DoubleRange](#doublerange)

### DownloadDBLogFilePortionDetails
* DownloadDBLogFilePortionDetails `object`: This data type is used as a response element to <a>DownloadDBLogFilePortion</a>.
  * AdditionalDataPending [Boolean](#boolean)
  * LogFileData [String](#string)
  * Marker [String](#string)

### DownloadDBLogFilePortionMessage
* DownloadDBLogFilePortionMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)
  * LogFileName **required** [String](#string)
  * Marker [String](#string)
  * NumberOfLines [Integer](#integer)

### EC2SecurityGroup
* EC2SecurityGroup `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>AuthorizeDBSecurityGroupIngress</a> </p> </li> <li> <p> <a>DescribeDBSecurityGroups</a> </p> </li> <li> <p> <a>RevokeDBSecurityGroupIngress</a> </p> </li> </ul>
  * EC2SecurityGroupId [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)
  * Status [String](#string)

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items [EC2SecurityGroup](#ec2securitygroup)

### Endpoint
* Endpoint `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DescribeDBInstances</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> </ul>
  * Address [String](#string)
  * HostedZoneId [String](#string)
  * Port [Integer](#integer)

### EngineDefaults
* EngineDefaults `object`:  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. 
  * DBParameterGroupFamily [String](#string)
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### Event
* Event `object`:  This data type is used as a response element in the <a>DescribeEvents</a> action. 
  * Date [TStamp](#tstamp)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Message [String](#string)
  * SourceArn [String](#string)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)

### EventCategoriesList
* EventCategoriesList `array`
  * items [String](#string)

### EventCategoriesMap
* EventCategoriesMap `object`: Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SourceType [String](#string)

### EventCategoriesMapList
* EventCategoriesMapList `array`
  * items [EventCategoriesMap](#eventcategoriesmap)

### EventCategoriesMessage
* EventCategoriesMessage `object`: Data returned from the <b>DescribeEventCategories</b> action.
  * EventCategoriesMapList [EventCategoriesMapList](#eventcategoriesmaplist)

### EventList
* EventList `array`
  * items [Event](#event)

### EventSubscription
* EventSubscription `object`: Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.
  * CustSubscriptionId [String](#string)
  * CustomerAwsId [String](#string)
  * Enabled [Boolean](#boolean)
  * EventCategoriesList [EventCategoriesList](#eventcategorieslist)
  * EventSubscriptionArn [String](#string)
  * SnsTopicArn [String](#string)
  * SourceIdsList [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * Status [String](#string)
  * SubscriptionCreationTime [String](#string)

### EventSubscriptionQuotaExceededFault
* EventSubscriptionQuotaExceededFault `object`: You have reached the maximum number of event subscriptions.

### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items [EventSubscription](#eventsubscription)

### EventSubscriptionsMessage
* EventSubscriptionsMessage `object`: Data returned by the <b>DescribeEventSubscriptions</b> action.
  * EventSubscriptionsList [EventSubscriptionsList](#eventsubscriptionslist)
  * Marker [String](#string)

### EventsMessage
* EventsMessage `object`:  Contains the result of a successful invocation of the <a>DescribeEvents</a> action. 
  * Events [EventList](#eventlist)
  * Marker [String](#string)

### FailoverDBClusterMessage
* FailoverDBClusterMessage `object`: <p/>
  * DBClusterIdentifier [String](#string)
  * TargetDBInstanceIdentifier [String](#string)

### FailoverDBClusterResult
* FailoverDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### Filter
* Filter `object`: This type is not currently supported.
  * Name **required** [String](#string)
  * Values **required** [FilterValueList](#filtervaluelist)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterValueList
* FilterValueList `array`
  * items [String](#string)

### IPRange
* IPRange `object`:  This data type is used as a response element in the <a>DescribeDBSecurityGroups</a> action. 
  * CIDRIP [String](#string)
  * Status [String](#string)

### IPRangeList
* IPRangeList `array`
  * items [IPRange](#iprange)

### InstanceQuotaExceededFault
* InstanceQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB instances.

### InsufficientDBClusterCapacityFault
* InsufficientDBClusterCapacityFault `object`: The DB cluster does not have enough capacity for the current operation.

### InsufficientDBInstanceCapacityFault
* InsufficientDBInstanceCapacityFault `object`: Specified DB instance class is not available in the specified Availability Zone.

### InsufficientStorageClusterCapacityFault
* InsufficientStorageClusterCapacityFault `object`: There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.

### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidDBClusterSnapshotStateFault
* InvalidDBClusterSnapshotStateFault `object`: The supplied value is not a valid DB cluster snapshot state.

### InvalidDBClusterStateFault
* InvalidDBClusterStateFault `object`: The DB cluster is not in a valid state.

### InvalidDBInstanceStateFault
* InvalidDBInstanceStateFault `object`:  The specified DB instance is not in the <i>available</i> state. 

### InvalidDBParameterGroupStateFault
* InvalidDBParameterGroupStateFault `object`: The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.

### InvalidDBSecurityGroupStateFault
* InvalidDBSecurityGroupStateFault `object`: The state of the DB security group does not allow deletion.

### InvalidDBSnapshotStateFault
* InvalidDBSnapshotStateFault `object`: The state of the DB snapshot does not allow deletion.

### InvalidDBSubnetGroupFault
* InvalidDBSubnetGroupFault `object`: Indicates the DBSubnetGroup does not belong to the same VPC as that of an existing cross region read replica of the same source instance.

### InvalidDBSubnetGroupStateFault
* InvalidDBSubnetGroupStateFault `object`: The DB subnet group cannot be deleted because it is in use.

### InvalidDBSubnetStateFault
* InvalidDBSubnetStateFault `object`:  The DB subnet is not in the <i>available</i> state. 

### InvalidEventSubscriptionStateFault
* InvalidEventSubscriptionStateFault `object`: This error can occur if someone else is modifying a subscription. You should retry the action.

### InvalidOptionGroupStateFault
* InvalidOptionGroupStateFault `object`:  The option group is not in the <i>available</i> state. 

### InvalidRestoreFault
* InvalidRestoreFault `object`: Cannot restore from vpc backup to non-vpc DB instance.

### InvalidS3BucketFault
* InvalidS3BucketFault `object`: The specified Amazon S3 bucket name could not be found or Amazon RDS is not authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.

### InvalidSubnet
* InvalidSubnet `object`: The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.

### InvalidVPCNetworkStateFault
* InvalidVPCNetworkStateFault `object`: DB subnet group does not cover all Availability Zones after it is created because users' change.

### KMSKeyNotAccessibleFault
* KMSKeyNotAccessibleFault `object`: Error accessing KMS key.

### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * ResourceName **required** [String](#string)

### Long
* Long `integer`

### ModifyDBClusterMessage
* ModifyDBClusterMessage `object`: <p/>
  * ApplyImmediately [Boolean](#boolean)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * MasterUserPassword [String](#string)
  * NewDBClusterIdentifier [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### ModifyDBClusterParameterGroupMessage
* ModifyDBClusterParameterGroupMessage `object`: <p/>
  * DBClusterParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

### ModifyDBClusterResult
* ModifyDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ModifyDBClusterSnapshotAttributeMessage
* ModifyDBClusterSnapshotAttributeMessage `object`: <p/>
  * AttributeName **required** [String](#string)
  * DBClusterSnapshotIdentifier **required** [String](#string)
  * ValuesToAdd [AttributeValueList](#attributevaluelist)
  * ValuesToRemove [AttributeValueList](#attributevaluelist)

### ModifyDBClusterSnapshotAttributeResult
* ModifyDBClusterSnapshotAttributeResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### ModifyDBInstanceMessage
* ModifyDBInstanceMessage `object`: <p/>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AllowMajorVersionUpgrade [Boolean](#boolean)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CACertificateIdentifier [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBParameterGroupName [String](#string)
  * DBPortNumber [IntegerOptional](#integeroptional)
  * DBSecurityGroups [DBSecurityGroupNameList](#dbsecuritygroupnamelist)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EnablePerformanceInsights [BooleanOptional](#booleanoptional)
  * EngineVersion [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MasterUserPassword [String](#string)
  * MonitoringInterval [IntegerOptional](#integeroptional)
  * MonitoringRoleArn [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * NewDBInstanceIdentifier [String](#string)
  * OptionGroupName [String](#string)
  * PerformanceInsightsKMSKeyId [String](#string)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * PromotionTier [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### ModifyDBInstanceResult
* ModifyDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ModifyDBParameterGroupMessage
* ModifyDBParameterGroupMessage `object`: <p/>
  * DBParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

### ModifyDBSnapshotAttributeMessage
* ModifyDBSnapshotAttributeMessage `object`: <p/>
  * AttributeName **required** [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
  * ValuesToAdd [AttributeValueList](#attributevaluelist)
  * ValuesToRemove [AttributeValueList](#attributevaluelist)

### ModifyDBSnapshotAttributeResult
* ModifyDBSnapshotAttributeResult `object`
  * DBSnapshotAttributesResult [DBSnapshotAttributesResult](#dbsnapshotattributesresult)

### ModifyDBSnapshotMessage
* ModifyDBSnapshotMessage `object`
  * DBSnapshotIdentifier **required** [String](#string)
  * EngineVersion [String](#string)
  * OptionGroupName [String](#string)

### ModifyDBSnapshotResult
* ModifyDBSnapshotResult `object`
  * DBSnapshot [DBSnapshot](#dbsnapshot)

### ModifyDBSubnetGroupMessage
* ModifyDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupDescription [String](#string)
  * DBSubnetGroupName **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

### ModifyDBSubnetGroupResult
* ModifyDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn [String](#string)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)

### ModifyEventSubscriptionResult
* ModifyEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### ModifyOptionGroupMessage
* ModifyOptionGroupMessage `object`: <p/>
  * ApplyImmediately [Boolean](#boolean)
  * OptionGroupName **required** [String](#string)
  * OptionsToInclude [OptionConfigurationList](#optionconfigurationlist)
  * OptionsToRemove [OptionNamesList](#optionnameslist)

### ModifyOptionGroupResult
* ModifyOptionGroupResult `object`
  * OptionGroup [OptionGroup](#optiongroup)

### Option
* Option `object`: Option details.
  * DBSecurityGroupMemberships [DBSecurityGroupMembershipList](#dbsecuritygroupmembershiplist)
  * OptionDescription [String](#string)
  * OptionName [String](#string)
  * OptionSettings [OptionSettingConfigurationList](#optionsettingconfigurationlist)
  * OptionVersion [String](#string)
  * Permanent [Boolean](#boolean)
  * Persistent [Boolean](#boolean)
  * Port [IntegerOptional](#integeroptional)
  * VpcSecurityGroupMemberships [VpcSecurityGroupMembershipList](#vpcsecuritygroupmembershiplist)

### OptionConfiguration
* OptionConfiguration `object`: A list of all available options
  * DBSecurityGroupMemberships [DBSecurityGroupNameList](#dbsecuritygroupnamelist)
  * OptionName **required** [String](#string)
  * OptionSettings [OptionSettingsList](#optionsettingslist)
  * OptionVersion [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * VpcSecurityGroupMemberships [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### OptionConfigurationList
* OptionConfigurationList `array`
  * items [OptionConfiguration](#optionconfiguration)

### OptionGroup
* OptionGroup `object`: <p/>
  * AllowsVpcAndNonVpcInstanceMemberships [Boolean](#boolean)
  * EngineName [String](#string)
  * MajorEngineVersion [String](#string)
  * OptionGroupArn [String](#string)
  * OptionGroupDescription [String](#string)
  * OptionGroupName [String](#string)
  * Options [OptionsList](#optionslist)
  * VpcId [String](#string)

### OptionGroupAlreadyExistsFault
* OptionGroupAlreadyExistsFault `object`: The option group you are trying to create already exists.

### OptionGroupMembership
* OptionGroupMembership `object`: Provides information on the option groups the DB instance is a member of.
  * OptionGroupName [String](#string)
  * Status [String](#string)

### OptionGroupMembershipList
* OptionGroupMembershipList `array`
  * items [OptionGroupMembership](#optiongroupmembership)

### OptionGroupNotFoundFault
* OptionGroupNotFoundFault `object`: The specified option group could not be found.

### OptionGroupOption
* OptionGroupOption `object`: Available option.
  * DefaultPort [IntegerOptional](#integeroptional)
  * Description [String](#string)
  * EngineName [String](#string)
  * MajorEngineVersion [String](#string)
  * MinimumRequiredMinorEngineVersion [String](#string)
  * Name [String](#string)
  * OptionGroupOptionSettings [OptionGroupOptionSettingsList](#optiongroupoptionsettingslist)
  * OptionGroupOptionVersions [OptionGroupOptionVersionsList](#optiongroupoptionversionslist)
  * OptionsConflictsWith [OptionsConflictsWith](#optionsconflictswith)
  * OptionsDependedOn [OptionsDependedOn](#optionsdependedon)
  * Permanent [Boolean](#boolean)
  * Persistent [Boolean](#boolean)
  * PortRequired [Boolean](#boolean)
  * RequiresAutoMinorEngineVersionUpgrade [Boolean](#boolean)
  * SupportsOptionVersionDowngrade [BooleanOptional](#booleanoptional)
  * VpcOnly [Boolean](#boolean)

### OptionGroupOptionSetting
* OptionGroupOptionSetting `object`: Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
  * AllowedValues [String](#string)
  * ApplyType [String](#string)
  * DefaultValue [String](#string)
  * IsModifiable [Boolean](#boolean)
  * SettingDescription [String](#string)
  * SettingName [String](#string)

### OptionGroupOptionSettingsList
* OptionGroupOptionSettingsList `array`
  * items [OptionGroupOptionSetting](#optiongroupoptionsetting)

### OptionGroupOptionVersionsList
* OptionGroupOptionVersionsList `array`
  * items [OptionVersion](#optionversion)

### OptionGroupOptionsList
* OptionGroupOptionsList `array`: List of available option group options.
  * items [OptionGroupOption](#optiongroupoption)

### OptionGroupOptionsMessage
* OptionGroupOptionsMessage `object`: <p/>
  * Marker [String](#string)
  * OptionGroupOptions [OptionGroupOptionsList](#optiongroupoptionslist)

### OptionGroupQuotaExceededFault
* OptionGroupQuotaExceededFault `object`: The quota of 20 option groups was exceeded for this AWS account.

### OptionGroups
* OptionGroups `object`: List of option groups.
  * Marker [String](#string)
  * OptionGroupsList [OptionGroupsList](#optiongroupslist)

### OptionGroupsList
* OptionGroupsList `array`
  * items [OptionGroup](#optiongroup)

### OptionNamesList
* OptionNamesList `array`
  * items [String](#string)

### OptionSetting
* OptionSetting `object`: Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
  * AllowedValues [String](#string)
  * ApplyType [String](#string)
  * DataType [String](#string)
  * DefaultValue [String](#string)
  * Description [String](#string)
  * IsCollection [Boolean](#boolean)
  * IsModifiable [Boolean](#boolean)
  * Name [String](#string)
  * Value [String](#string)

### OptionSettingConfigurationList
* OptionSettingConfigurationList `array`
  * items [OptionSetting](#optionsetting)

### OptionSettingsList
* OptionSettingsList `array`
  * items [OptionSetting](#optionsetting)

### OptionVersion
* OptionVersion `object`: The version for an option. Option group option versions are returned by the <a>DescribeOptionGroupOptions</a> action.
  * IsDefault [Boolean](#boolean)
  * Version [String](#string)

### OptionsConflictsWith
* OptionsConflictsWith `array`
  * items [String](#string)

### OptionsDependedOn
* OptionsDependedOn `array`
  * items [String](#string)

### OptionsList
* OptionsList `array`
  * items [Option](#option)

### OrderableDBInstanceOption
* OrderableDBInstanceOption `object`: <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action. </p>
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * DBInstanceClass [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * LicenseModel [String](#string)
  * MaxIopsPerDbInstance [IntegerOptional](#integeroptional)
  * MaxIopsPerGib [DoubleOptional](#doubleoptional)
  * MaxStorageSize [IntegerOptional](#integeroptional)
  * MinIopsPerDbInstance [IntegerOptional](#integeroptional)
  * MinIopsPerGib [DoubleOptional](#doubleoptional)
  * MinStorageSize [IntegerOptional](#integeroptional)
  * MultiAZCapable [Boolean](#boolean)
  * ReadReplicaCapable [Boolean](#boolean)
  * StorageType [String](#string)
  * SupportsEnhancedMonitoring [Boolean](#boolean)
  * SupportsIAMDatabaseAuthentication [Boolean](#boolean)
  * SupportsIops [Boolean](#boolean)
  * SupportsPerformanceInsights [Boolean](#boolean)
  * SupportsStorageEncryption [Boolean](#boolean)
  * Vpc [Boolean](#boolean)

### OrderableDBInstanceOptionsList
* OrderableDBInstanceOptionsList `array`
  * items [OrderableDBInstanceOption](#orderabledbinstanceoption)

### OrderableDBInstanceOptionsMessage
* OrderableDBInstanceOptionsMessage `object`:  Contains the result of a successful invocation of the <a>DescribeOrderableDBInstanceOptions</a> action. 
  * Marker [String](#string)
  * OrderableDBInstanceOptions [OrderableDBInstanceOptionsList](#orderabledbinstanceoptionslist)

### Parameter
* Parameter `object`: <p> This data type is used as a request parameter in the <a>ModifyDBParameterGroup</a> and <a>ResetDBParameterGroup</a> actions. </p> <p>This data type is used as a response element in the <a>DescribeEngineDefaultParameters</a> and <a>DescribeDBParameters</a> actions.</p>
  * AllowedValues [String](#string)
  * ApplyMethod [ApplyMethod](#applymethod)
  * ApplyType [String](#string)
  * DataType [String](#string)
  * Description [String](#string)
  * IsModifiable [Boolean](#boolean)
  * MinimumEngineVersion [String](#string)
  * ParameterName [String](#string)
  * ParameterValue [String](#string)
  * Source [String](#string)

### ParametersList
* ParametersList `array`
  * items [Parameter](#parameter)

### PendingMaintenanceAction
* PendingMaintenanceAction `object`: Provides information about a pending maintenance action for a resource.
  * Action [String](#string)
  * AutoAppliedAfterDate [TStamp](#tstamp)
  * CurrentApplyDate [TStamp](#tstamp)
  * Description [String](#string)
  * ForcedApplyDate [TStamp](#tstamp)
  * OptInStatus [String](#string)

### PendingMaintenanceActionDetails
* PendingMaintenanceActionDetails `array`
  * items [PendingMaintenanceAction](#pendingmaintenanceaction)

### PendingMaintenanceActions
* PendingMaintenanceActions `array`
  * items [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### PendingMaintenanceActionsMessage
* PendingMaintenanceActionsMessage `object`: Data returned from the <b>DescribePendingMaintenanceActions</b> action.
  * Marker [String](#string)
  * PendingMaintenanceActions [PendingMaintenanceActions](#pendingmaintenanceactions)

### PendingModifiedValues
* PendingModifiedValues `object`:  This data type is used as a response element in the <a>ModifyDBInstance</a> action. 
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CACertificateIdentifier [String](#string)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier [String](#string)
  * DBSubnetGroupName [String](#string)
  * EngineVersion [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MasterUserPassword [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * Port [IntegerOptional](#integeroptional)
  * StorageType [String](#string)

### PointInTimeRestoreNotEnabledFault
* PointInTimeRestoreNotEnabledFault `object`:  <i>SourceDBInstanceIdentifier</i> refers to a DB instance with <i>BackupRetentionPeriod</i> equal to 0. 

### PromoteReadReplicaDBClusterMessage
* PromoteReadReplicaDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required** [String](#string)

### PromoteReadReplicaDBClusterResult
* PromoteReadReplicaDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### PromoteReadReplicaMessage
* PromoteReadReplicaMessage `object`: <p/>
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * DBInstanceIdentifier **required** [String](#string)
  * PreferredBackupWindow [String](#string)

### PromoteReadReplicaResult
* PromoteReadReplicaResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ProvisionedIopsNotAvailableInAZFault
* ProvisionedIopsNotAvailableInAZFault `object`: Provisioned IOPS not available in the specified Availability Zone.

### PurchaseReservedDBInstancesOfferingMessage
* PurchaseReservedDBInstancesOfferingMessage `object`: <p/>
  * DBInstanceCount [IntegerOptional](#integeroptional)
  * ReservedDBInstanceId [String](#string)
  * ReservedDBInstancesOfferingId **required** [String](#string)
  * Tags [TagList](#taglist)

### PurchaseReservedDBInstancesOfferingResult
* PurchaseReservedDBInstancesOfferingResult `object`
  * ReservedDBInstance [ReservedDBInstance](#reserveddbinstance)

### Range
* Range `object`: A range of integer values.
  * From [Integer](#integer)
  * Step [IntegerOptional](#integeroptional)
  * To [Integer](#integer)

### RangeList
* RangeList `array`
  * items [Range](#range)

### ReadReplicaDBClusterIdentifierList
* ReadReplicaDBClusterIdentifierList `array`
  * items [String](#string)

### ReadReplicaDBInstanceIdentifierList
* ReadReplicaDBInstanceIdentifierList `array`
  * items [String](#string)

### ReadReplicaIdentifierList
* ReadReplicaIdentifierList `array`
  * items [String](#string)

### RebootDBInstanceMessage
* RebootDBInstanceMessage `object`: <p/>
  * DBInstanceIdentifier **required** [String](#string)
  * ForceFailover [BooleanOptional](#booleanoptional)

### RebootDBInstanceResult
* RebootDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RecurringCharge
* RecurringCharge `object`:  This data type is used as a response element in the <a>DescribeReservedDBInstances</a> and <a>DescribeReservedDBInstancesOfferings</a> actions. 
  * RecurringChargeAmount [Double](#double)
  * RecurringChargeFrequency [String](#string)

### RecurringChargeList
* RecurringChargeList `array`
  * items [RecurringCharge](#recurringcharge)

### RemoveRoleFromDBClusterMessage
* RemoveRoleFromDBClusterMessage `object`
  * DBClusterIdentifier **required** [String](#string)
  * RoleArn **required** [String](#string)

### RemoveSourceIdentifierFromSubscriptionMessage
* RemoveSourceIdentifierFromSubscriptionMessage `object`: <p/>
  * SourceIdentifier **required** [String](#string)
  * SubscriptionName **required** [String](#string)

### RemoveSourceIdentifierFromSubscriptionResult
* RemoveSourceIdentifierFromSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: <p/>
  * ResourceName **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

### ReservedDBInstance
* ReservedDBInstance `object`:  This data type is used as a response element in the <a>DescribeReservedDBInstances</a> and <a>PurchaseReservedDBInstancesOffering</a> actions. 
  * CurrencyCode [String](#string)
  * DBInstanceClass [String](#string)
  * DBInstanceCount [Integer](#integer)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * MultiAZ [Boolean](#boolean)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedDBInstanceArn [String](#string)
  * ReservedDBInstanceId [String](#string)
  * ReservedDBInstancesOfferingId [String](#string)
  * StartTime [TStamp](#tstamp)
  * State [String](#string)
  * UsagePrice [Double](#double)

### ReservedDBInstanceAlreadyExistsFault
* ReservedDBInstanceAlreadyExistsFault `object`: User already has a reservation with the given identifier.

### ReservedDBInstanceList
* ReservedDBInstanceList `array`
  * items [ReservedDBInstance](#reserveddbinstance)

### ReservedDBInstanceMessage
* ReservedDBInstanceMessage `object`:  Contains the result of a successful invocation of the <a>DescribeReservedDBInstances</a> action. 
  * Marker [String](#string)
  * ReservedDBInstances [ReservedDBInstanceList](#reserveddbinstancelist)

### ReservedDBInstanceNotFoundFault
* ReservedDBInstanceNotFoundFault `object`: The specified reserved DB Instance not found.

### ReservedDBInstanceQuotaExceededFault
* ReservedDBInstanceQuotaExceededFault `object`: Request would exceed the user's DB Instance quota.

### ReservedDBInstancesOffering
* ReservedDBInstancesOffering `object`:  This data type is used as a response element in the <a>DescribeReservedDBInstancesOfferings</a> action. 
  * CurrencyCode [String](#string)
  * DBInstanceClass [String](#string)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * MultiAZ [Boolean](#boolean)
  * OfferingType [String](#string)
  * ProductDescription [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedDBInstancesOfferingId [String](#string)
  * UsagePrice [Double](#double)

### ReservedDBInstancesOfferingList
* ReservedDBInstancesOfferingList `array`
  * items [ReservedDBInstancesOffering](#reserveddbinstancesoffering)

### ReservedDBInstancesOfferingMessage
* ReservedDBInstancesOfferingMessage `object`:  Contains the result of a successful invocation of the <a>DescribeReservedDBInstancesOfferings</a> action. 
  * Marker [String](#string)
  * ReservedDBInstancesOfferings [ReservedDBInstancesOfferingList](#reserveddbinstancesofferinglist)

### ReservedDBInstancesOfferingNotFoundFault
* ReservedDBInstancesOfferingNotFoundFault `object`: Specified offering does not exist.

### ResetDBClusterParameterGroupMessage
* ResetDBClusterParameterGroupMessage `object`: <p/>
  * DBClusterParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

### ResetDBParameterGroupMessage
* ResetDBParameterGroupMessage `object`: <p/>
  * DBParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

### ResourceNotFoundFault
* ResourceNotFoundFault `object`: The specified resource ID was not found.

### ResourcePendingMaintenanceActions
* ResourcePendingMaintenanceActions `object`: Describes the pending maintenance actions for a resource.
  * PendingMaintenanceActionDetails [PendingMaintenanceActionDetails](#pendingmaintenanceactiondetails)
  * ResourceIdentifier [String](#string)

### RestoreDBClusterFromS3Message
* RestoreDBClusterFromS3Message `object`
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * CharacterSetName [String](#string)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MasterUserPassword **required** [String](#string)
  * MasterUsername **required** [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredBackupWindow [String](#string)
  * PreferredMaintenanceWindow [String](#string)
  * S3BucketName **required** [String](#string)
  * S3IngestionRoleArn **required** [String](#string)
  * S3Prefix [String](#string)
  * SourceEngine **required** [String](#string)
  * SourceEngineVersion **required** [String](#string)
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### RestoreDBClusterFromS3Result
* RestoreDBClusterFromS3Result `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBClusterFromSnapshotMessage
* RestoreDBClusterFromSnapshotMessage `object`: <p/>
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * DBClusterIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * DatabaseName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine **required** [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * SnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### RestoreDBClusterFromSnapshotResult
* RestoreDBClusterFromSnapshotResult `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBClusterToPointInTimeMessage
* RestoreDBClusterToPointInTimeMessage `object`: <p/>
  * DBClusterIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * KmsKeyId [String](#string)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * RestoreToTime [TStamp](#tstamp)
  * RestoreType [String](#string)
  * SourceDBClusterIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)
  * UseLatestRestorableTime [Boolean](#boolean)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### RestoreDBClusterToPointInTimeResult
* RestoreDBClusterToPointInTimeResult `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBInstanceFromDBSnapshotMessage
* RestoreDBInstanceFromDBSnapshotMessage `object`: <p/>
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBInstanceIdentifier **required** [String](#string)
  * DBName [String](#string)
  * DBSnapshotIdentifier **required** [String](#string)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)

### RestoreDBInstanceFromDBSnapshotResult
* RestoreDBInstanceFromDBSnapshotResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RestoreDBInstanceToPointInTimeMessage
* RestoreDBInstanceToPointInTimeMessage `object`: <p/>
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * CopyTagsToSnapshot [BooleanOptional](#booleanoptional)
  * DBInstanceClass [String](#string)
  * DBName [String](#string)
  * DBSubnetGroupName [String](#string)
  * Domain [String](#string)
  * DomainIAMRoleName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * Engine [String](#string)
  * Iops [IntegerOptional](#integeroptional)
  * LicenseModel [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * OptionGroupName [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * RestoreTime [TStamp](#tstamp)
  * SourceDBInstanceIdentifier **required** [String](#string)
  * StorageType [String](#string)
  * Tags [TagList](#taglist)
  * TargetDBInstanceIdentifier **required** [String](#string)
  * TdeCredentialArn [String](#string)
  * TdeCredentialPassword [String](#string)
  * UseLatestRestorableTime [Boolean](#boolean)

### RestoreDBInstanceToPointInTimeResult
* RestoreDBInstanceToPointInTimeResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RevokeDBSecurityGroupIngressMessage
* RevokeDBSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP [String](#string)
  * DBSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupId [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

### RevokeDBSecurityGroupIngressResult
* RevokeDBSecurityGroupIngressResult `object`
  * DBSecurityGroup [DBSecurityGroup](#dbsecuritygroup)

### SNSInvalidTopicFault
* SNSInvalidTopicFault `object`: SNS has responded that there is a problem with the SND topic specified.

### SNSNoAuthorizationFault
* SNSNoAuthorizationFault `object`: You do not have permission to publish to the SNS topic ARN.

### SNSTopicArnNotFoundFault
* SNSTopicArnNotFoundFault `object`: The SNS topic ARN does not exist.

### SharedSnapshotQuotaExceededFault
* SharedSnapshotQuotaExceededFault `object`: You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.

### SnapshotQuotaExceededFault
* SnapshotQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB snapshots.

### SourceIdsList
* SourceIdsList `array`
  * items [String](#string)

### SourceNotFoundFault
* SourceNotFoundFault `object`: The requested source could not be found.

### SourceRegion
* SourceRegion `object`: Contains an AWS Region name as the result of a successful call to the <a>DescribeSourceRegions</a> action.
  * Endpoint [String](#string)
  * RegionName [String](#string)
  * Status [String](#string)

### SourceRegionList
* SourceRegionList `array`
  * items [SourceRegion](#sourceregion)

### SourceRegionMessage
* SourceRegionMessage `object`: Contains the result of a successful invocation of the <a>DescribeSourceRegions</a> action.
  * Marker [String](#string)
  * SourceRegions [SourceRegionList](#sourceregionlist)

### SourceType
* SourceType `string` (values: db-instance, db-parameter-group, db-security-group, db-snapshot, db-cluster, db-cluster-snapshot)

### StartDBInstanceMessage
* StartDBInstanceMessage `object`
  * DBInstanceIdentifier **required** [String](#string)

### StartDBInstanceResult
* StartDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### StopDBInstanceMessage
* StopDBInstanceMessage `object`
  * DBInstanceIdentifier **required** [String](#string)
  * DBSnapshotIdentifier [String](#string)

### StopDBInstanceResult
* StopDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### StorageQuotaExceededFault
* StorageQuotaExceededFault `object`: Request would result in user exceeding the allowed amount of storage available across all DB instances.

### StorageTypeNotSupportedFault
* StorageTypeNotSupportedFault `object`:  <i>StorageType</i> specified cannot be associated with the DB Instance. 

### String
* String `string`

### Subnet
* Subnet `object`:  This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action. 
  * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
  * SubnetIdentifier [String](#string)
  * SubnetStatus [String](#string)

### SubnetAlreadyInUse
* SubnetAlreadyInUse `object`: The DB subnet is already in use in the Availability Zone.

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SubscriptionAlreadyExistFault
* SubscriptionAlreadyExistFault `object`: The supplied subscription name already exists.

### SubscriptionCategoryNotFoundFault
* SubscriptionCategoryNotFoundFault `object`: The supplied category does not exist.

### SubscriptionNotFoundFault
* SubscriptionNotFoundFault `object`: The subscription name does not exist.

### SupportedCharacterSetsList
* SupportedCharacterSetsList `array`
  * items [CharacterSet](#characterset)

### SupportedTimezonesList
* SupportedTimezonesList `array`
  * items [Timezone](#timezone)

### TStamp
* TStamp `string`

### Tag
* Tag `object`: Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`: A list of tags.
  * items [Tag](#tag)

### TagListMessage
* TagListMessage `object`: <p/>
  * TagList [TagList](#taglist)

### Timezone
* Timezone `object`: A time zone associated with a <a>DBInstance</a> or a <a>DBSnapshot</a>. This data type is an element in the response to the <a>DescribeDBInstances</a>, the <a>DescribeDBSnapshots</a>, and the <a>DescribeDBEngineVersions</a> actions. 
  * TimezoneName [String](#string)

### UpgradeTarget
* UpgradeTarget `object`: The version of the database engine that a DB instance can be upgraded to.
  * AutoUpgrade [Boolean](#boolean)
  * Description [String](#string)
  * Engine [String](#string)
  * EngineVersion [String](#string)
  * IsMajorVersionUpgrade [Boolean](#boolean)

### ValidDBInstanceModificationsMessage
* ValidDBInstanceModificationsMessage `object`: Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. 
  * Storage [ValidStorageOptionsList](#validstorageoptionslist)

### ValidStorageOptions
* ValidStorageOptions `object`: Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. 
  * IopsToStorageRatio [DoubleRangeList](#doublerangelist)
  * ProvisionedIops [RangeList](#rangelist)
  * StorageSize [RangeList](#rangelist)
  * StorageType [String](#string)

### ValidStorageOptionsList
* ValidStorageOptionsList `array`
  * items [ValidStorageOptions](#validstorageoptions)

### ValidUpgradeTargetList
* ValidUpgradeTargetList `array`
  * items [UpgradeTarget](#upgradetarget)

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items [String](#string)

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: This data type is used as a response element for queries on VPC security group membership.
  * Status [String](#string)
  * VpcSecurityGroupId [String](#string)

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)


