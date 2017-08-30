# @datafire/amazonaws_rds

Client library for Amazon Relational Database Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_rds
```

```js
let datafire = require('datafire');
let amazonaws_rds = require('@datafire/amazonaws_rds').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_rds.AddRoleToDBCluster({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Relational Database Service</fullname> <p> </p> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your database instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

## Actions
### AddRoleToDBCluster



```js
amazonaws_rds.AddRoleToDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**
* RoleArn (string) **required**

### AddSourceIdentifierToSubscription



```js
amazonaws_rds.AddSourceIdentifierToSubscription({
  "SubscriptionName": "",
  "SourceIdentifier": ""
}, context)
```

#### Parameters
* SourceIdentifier (string) **required**
* SubscriptionName (string) **required**

### AddTagsToResource



```js
amazonaws_rds.AddTagsToResource({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* Tags (array) **required** - A list of tags.

### ApplyPendingMaintenanceAction



```js
amazonaws_rds.ApplyPendingMaintenanceAction({
  "ResourceIdentifier": "",
  "ApplyAction": "",
  "OptInType": ""
}, context)
```

#### Parameters
* ApplyAction (string) **required**
* OptInType (string) **required**
* ResourceIdentifier (string) **required**

### AuthorizeDBSecurityGroupIngress



```js
amazonaws_rds.AuthorizeDBSecurityGroupIngress({
  "DBSecurityGroupName": ""
}, context)
```

#### Parameters
* CIDRIP (string)
* DBSecurityGroupName (string) **required**
* EC2SecurityGroupId (string)
* EC2SecurityGroupName (string)
* EC2SecurityGroupOwnerId (string)

### CopyDBClusterParameterGroup



```js
amazonaws_rds.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupDescription": ""
}, context)
```

#### Parameters
* SourceDBClusterParameterGroupIdentifier (string) **required**
* Tags (array) - A list of tags.
* TargetDBClusterParameterGroupDescription (string) **required**
* TargetDBClusterParameterGroupIdentifier (string) **required**

### CopyDBClusterSnapshot



```js
amazonaws_rds.CopyDBClusterSnapshot({
  "SourceDBClusterSnapshotIdentifier": "",
  "TargetDBClusterSnapshotIdentifier": ""
}, context)
```

#### Parameters
* CopyTags (boolean)
* KmsKeyId (string)
* PreSignedUrl (string)
* SourceDBClusterSnapshotIdentifier (string) **required**
* SourceRegion (string)
* Tags (array) - A list of tags.
* TargetDBClusterSnapshotIdentifier (string) **required**

### CopyDBParameterGroup



```js
amazonaws_rds.CopyDBParameterGroup({
  "SourceDBParameterGroupIdentifier": "",
  "TargetDBParameterGroupIdentifier": "",
  "TargetDBParameterGroupDescription": ""
}, context)
```

#### Parameters
* SourceDBParameterGroupIdentifier (string) **required**
* Tags (array) - A list of tags.
* TargetDBParameterGroupDescription (string) **required**
* TargetDBParameterGroupIdentifier (string) **required**

### CopyDBSnapshot



```js
amazonaws_rds.CopyDBSnapshot({
  "SourceDBSnapshotIdentifier": "",
  "TargetDBSnapshotIdentifier": ""
}, context)
```

#### Parameters
* CopyTags (boolean)
* KmsKeyId (string)
* PreSignedUrl (string)
* SourceDBSnapshotIdentifier (string) **required**
* SourceRegion (string)
* Tags (array) - A list of tags.
* TargetDBSnapshotIdentifier (string) **required**

### CopyOptionGroup



```js
amazonaws_rds.CopyOptionGroup({
  "SourceOptionGroupIdentifier": "",
  "TargetOptionGroupIdentifier": "",
  "TargetOptionGroupDescription": ""
}, context)
```

#### Parameters
* SourceOptionGroupIdentifier (string) **required**
* Tags (array) - A list of tags.
* TargetOptionGroupDescription (string) **required**
* TargetOptionGroupIdentifier (string) **required**

### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({
  "DBClusterIdentifier": "",
  "Engine": ""
}, context)
```

#### Parameters
* AvailabilityZones (array)
* BackupRetentionPeriod (integer)
* CharacterSetName (string)
* DBClusterIdentifier (string) **required**
* DBClusterParameterGroupName (string)
* DBSubnetGroupName (string)
* DatabaseName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string) **required**
* EngineVersion (string)
* KmsKeyId (string)
* MasterUserPassword (string)
* MasterUsername (string)
* OptionGroupName (string)
* Port (integer)
* PreSignedUrl (string)
* PreferredBackupWindow (string)
* PreferredMaintenanceWindow (string)
* ReplicationSourceIdentifier (string)
* SourceRegion (string)
* StorageEncrypted (boolean)
* Tags (array) - A list of tags.
* VpcSecurityGroupIds (array)

### CreateDBClusterParameterGroup



```js
amazonaws_rds.CreateDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "DBParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Parameters
* DBClusterParameterGroupName (string) **required**
* DBParameterGroupFamily (string) **required**
* Description (string) **required**
* Tags (array) - A list of tags.

### CreateDBClusterSnapshot



```js
amazonaws_rds.CreateDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": "",
  "DBClusterIdentifier": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**
* DBClusterSnapshotIdentifier (string) **required**
* Tags (array) - A list of tags.

### CreateDBInstance



```js
amazonaws_rds.CreateDBInstance({
  "DBInstanceIdentifier": "",
  "DBInstanceClass": "",
  "Engine": ""
}, context)
```

#### Parameters
* AllocatedStorage (integer)
* AutoMinorVersionUpgrade (boolean)
* AvailabilityZone (string)
* BackupRetentionPeriod (integer)
* CharacterSetName (string)
* CopyTagsToSnapshot (boolean)
* DBClusterIdentifier (string)
* DBInstanceClass (string) **required**
* DBInstanceIdentifier (string) **required**
* DBName (string)
* DBParameterGroupName (string)
* DBSecurityGroups (array)
* DBSubnetGroupName (string)
* Domain (string)
* DomainIAMRoleName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string) **required**
* EngineVersion (string)
* Iops (integer)
* KmsKeyId (string)
* LicenseModel (string)
* MasterUserPassword (string)
* MasterUsername (string)
* MonitoringInterval (integer)
* MonitoringRoleArn (string)
* MultiAZ (boolean)
* OptionGroupName (string)
* Port (integer)
* PreferredBackupWindow (string)
* PreferredMaintenanceWindow (string)
* PromotionTier (integer)
* PubliclyAccessible (boolean)
* StorageEncrypted (boolean)
* StorageType (string)
* Tags (array) - A list of tags.
* TdeCredentialArn (string)
* TdeCredentialPassword (string)
* Timezone (string)
* VpcSecurityGroupIds (array)

### CreateDBInstanceReadReplica



```js
amazonaws_rds.CreateDBInstanceReadReplica({
  "DBInstanceIdentifier": "",
  "SourceDBInstanceIdentifier": ""
}, context)
```

#### Parameters
* AutoMinorVersionUpgrade (boolean)
* AvailabilityZone (string)
* CopyTagsToSnapshot (boolean)
* DBInstanceClass (string)
* DBInstanceIdentifier (string) **required**
* DBSubnetGroupName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Iops (integer)
* KmsKeyId (string)
* MonitoringInterval (integer)
* MonitoringRoleArn (string)
* OptionGroupName (string)
* Port (integer)
* PreSignedUrl (string)
* PubliclyAccessible (boolean)
* SourceDBInstanceIdentifier (string) **required**
* SourceRegion (string)
* StorageType (string)
* Tags (array) - A list of tags.

### CreateDBParameterGroup



```js
amazonaws_rds.CreateDBParameterGroup({
  "DBParameterGroupName": "",
  "DBParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Parameters
* DBParameterGroupFamily (string) **required**
* DBParameterGroupName (string) **required**
* Description (string) **required**
* Tags (array) - A list of tags.

### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({
  "DBSecurityGroupName": "",
  "DBSecurityGroupDescription": ""
}, context)
```

#### Parameters
* DBSecurityGroupDescription (string) **required**
* DBSecurityGroupName (string) **required**
* Tags (array) - A list of tags.

### CreateDBSnapshot



```js
amazonaws_rds.CreateDBSnapshot({
  "DBSnapshotIdentifier": "",
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* DBInstanceIdentifier (string) **required**
* DBSnapshotIdentifier (string) **required**
* Tags (array) - A list of tags.

### CreateDBSubnetGroup



```js
amazonaws_rds.CreateDBSubnetGroup({
  "DBSubnetGroupName": "",
  "DBSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* DBSubnetGroupDescription (string) **required**
* DBSubnetGroupName (string) **required**
* SubnetIds (array) **required**
* Tags (array) - A list of tags.

### CreateEventSubscription



```js
amazonaws_rds.CreateEventSubscription({
  "SubscriptionName": "",
  "SnsTopicArn": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* SnsTopicArn (string) **required**
* SourceIds (array)
* SourceType (string)
* SubscriptionName (string) **required**
* Tags (array) - A list of tags.

### CreateOptionGroup



```js
amazonaws_rds.CreateOptionGroup({
  "OptionGroupName": "",
  "EngineName": "",
  "MajorEngineVersion": "",
  "OptionGroupDescription": ""
}, context)
```

#### Parameters
* EngineName (string) **required**
* MajorEngineVersion (string) **required**
* OptionGroupDescription (string) **required**
* OptionGroupName (string) **required**
* Tags (array) - A list of tags.

### DeleteDBCluster



```js
amazonaws_rds.DeleteDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**
* FinalDBSnapshotIdentifier (string)
* SkipFinalSnapshot (boolean)

### DeleteDBClusterParameterGroup



```js
amazonaws_rds.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Parameters
* DBClusterParameterGroupName (string) **required**

### DeleteDBClusterSnapshot



```js
amazonaws_rds.DeleteDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Parameters
* DBClusterSnapshotIdentifier (string) **required**

### DeleteDBInstance



```js
amazonaws_rds.DeleteDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* DBInstanceIdentifier (string) **required**
* FinalDBSnapshotIdentifier (string)
* SkipFinalSnapshot (boolean)

### DeleteDBParameterGroup



```js
amazonaws_rds.DeleteDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Parameters
* DBParameterGroupName (string) **required**

### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({
  "DBSecurityGroupName": ""
}, context)
```

#### Parameters
* DBSecurityGroupName (string) **required**

### DeleteDBSnapshot



```js
amazonaws_rds.DeleteDBSnapshot({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Parameters
* DBSnapshotIdentifier (string) **required**

### DeleteDBSubnetGroup



```js
amazonaws_rds.DeleteDBSubnetGroup({
  "DBSubnetGroupName": ""
}, context)
```

#### Parameters
* DBSubnetGroupName (string) **required**

### DeleteEventSubscription



```js
amazonaws_rds.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* SubscriptionName (string) **required**

### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Parameters
* OptionGroupName (string) **required**

### DescribeAccountAttributes



```js
amazonaws_rds.DescribeAccountAttributes({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeCertificates



```js
amazonaws_rds.DescribeCertificates({}, context)
```

#### Parameters
* CertificateIdentifier (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBClusterParameterGroups



```js
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
```

#### Parameters
* DBClusterParameterGroupName (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBClusterParameters



```js
amazonaws_rds.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Parameters
* DBClusterParameterGroupName (string) **required**
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* Source (string)

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_rds.DescribeDBClusterSnapshotAttributes({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Parameters
* DBClusterSnapshotIdentifier (string) **required**

### DescribeDBClusterSnapshots



```js
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
```

#### Parameters
* DBClusterIdentifier (string)
* DBClusterSnapshotIdentifier (string)
* Filters (array)
* IncludePublic (boolean)
* IncludeShared (boolean)
* Marker (string)
* MaxRecords (integer)
* SnapshotType (string)

### DescribeDBClusters



```js
amazonaws_rds.DescribeDBClusters({}, context)
```

#### Parameters
* DBClusterIdentifier (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBEngineVersions



```js
amazonaws_rds.DescribeDBEngineVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBParameterGroupFamily (string)
* DefaultOnly (boolean)
* Engine (string)
* EngineVersion (string)
* Filters (array)
* ListSupportedCharacterSets (boolean)
* ListSupportedTimezones (boolean)
* Marker (string)
* MaxRecords (integer)

### DescribeDBInstances



```js
amazonaws_rds.DescribeDBInstances({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceIdentifier (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBLogFiles



```js
amazonaws_rds.DescribeDBLogFiles({
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceIdentifier (string) **required**
* FileLastWritten (integer)
* FileSize (integer)
* FilenameContains (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBParameterGroups



```js
amazonaws_rds.DescribeDBParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBParameterGroupName (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBParameters



```js
amazonaws_rds.DescribeDBParameters({
  "DBParameterGroupName": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBParameterGroupName (string) **required**
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* Source (string)

### DescribeDBSecurityGroups



```js
amazonaws_rds.DescribeDBSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBSecurityGroupName (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeDBSnapshotAttributes



```js
amazonaws_rds.DescribeDBSnapshotAttributes({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Parameters
* DBSnapshotIdentifier (string) **required**

### DescribeDBSnapshots



```js
amazonaws_rds.DescribeDBSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceIdentifier (string)
* DBSnapshotIdentifier (string)
* Filters (array)
* IncludePublic (boolean)
* IncludeShared (boolean)
* Marker (string)
* MaxRecords (integer)
* SnapshotType (string)

### DescribeDBSubnetGroups



```js
amazonaws_rds.DescribeDBSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBSubnetGroupName (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_rds.DescribeEngineDefaultClusterParameters({
  "DBParameterGroupFamily": ""
}, context)
```

#### Parameters
* DBParameterGroupFamily (string) **required**
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEngineDefaultParameters



```js
amazonaws_rds.DescribeEngineDefaultParameters({
  "DBParameterGroupFamily": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBParameterGroupFamily (string) **required**
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEventCategories



```js
amazonaws_rds.DescribeEventCategories({}, context)
```

#### Parameters
* Filters (array)
* SourceType (string)

### DescribeEventSubscriptions



```js
amazonaws_rds.DescribeEventSubscriptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* SubscriptionName (string)

### DescribeEvents



```js
amazonaws_rds.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Duration (integer)
* EndTime (string)
* EventCategories (array)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* SourceIdentifier (string)
* SourceType (string)
* StartTime (string)

### DescribeOptionGroupOptions



```js
amazonaws_rds.DescribeOptionGroupOptions({
  "EngineName": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* EngineName (string) **required**
* Filters (array)
* MajorEngineVersion (string)
* Marker (string)
* MaxRecords (integer)

### DescribeOptionGroups



```js
amazonaws_rds.DescribeOptionGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* EngineName (string)
* Filters (array)
* MajorEngineVersion (string)
* Marker (string)
* MaxRecords (integer)
* OptionGroupName (string)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_rds.DescribeOrderableDBInstanceOptions({
  "Engine": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceClass (string)
* Engine (string) **required**
* EngineVersion (string)
* Filters (array)
* LicenseModel (string)
* Marker (string)
* MaxRecords (integer)
* Vpc (boolean)

### DescribePendingMaintenanceActions



```js
amazonaws_rds.DescribePendingMaintenanceActions({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* ResourceIdentifier (string)

### DescribeReservedDBInstances



```js
amazonaws_rds.DescribeReservedDBInstances({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceClass (string)
* Duration (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* MultiAZ (boolean)
* OfferingType (string)
* ProductDescription (string)
* ReservedDBInstanceId (string)
* ReservedDBInstancesOfferingId (string)

### DescribeReservedDBInstancesOfferings



```js
amazonaws_rds.DescribeReservedDBInstancesOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* DBInstanceClass (string)
* Duration (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* MultiAZ (boolean)
* OfferingType (string)
* ProductDescription (string)
* ReservedDBInstancesOfferingId (string)

### DescribeSourceRegions



```js
amazonaws_rds.DescribeSourceRegions({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* RegionName (string)

### DownloadDBLogFilePortion



```js
amazonaws_rds.DownloadDBLogFilePortion({
  "DBInstanceIdentifier": "",
  "LogFileName": ""
}, context)
```

#### Parameters
* NumberOfLines (string)
* Marker (string)
* DBInstanceIdentifier (string) **required**
* LogFileName (string) **required**
* Marker (string)
* NumberOfLines (integer)

### FailoverDBCluster



```js
amazonaws_rds.FailoverDBCluster({}, context)
```

#### Parameters
* DBClusterIdentifier (string)
* TargetDBInstanceIdentifier (string)

### ListTagsForResource



```js
amazonaws_rds.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Parameters
* Filters (array)
* ResourceName (string) **required**

### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Parameters
* ApplyImmediately (boolean)
* BackupRetentionPeriod (integer)
* DBClusterIdentifier (string) **required**
* DBClusterParameterGroupName (string)
* EnableIAMDatabaseAuthentication (boolean)
* MasterUserPassword (string)
* NewDBClusterIdentifier (string)
* OptionGroupName (string)
* Port (integer)
* PreferredBackupWindow (string)
* PreferredMaintenanceWindow (string)
* VpcSecurityGroupIds (array)

### ModifyDBClusterParameterGroup



```js
amazonaws_rds.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Parameters
* DBClusterParameterGroupName (string) **required**
* Parameters (array) **required**

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_rds.ModifyDBClusterSnapshotAttribute({
  "DBClusterSnapshotIdentifier": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* AttributeName (string) **required**
* DBClusterSnapshotIdentifier (string) **required**
* ValuesToAdd (array)
* ValuesToRemove (array)

### ModifyDBInstance



```js
amazonaws_rds.ModifyDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* AllocatedStorage (integer)
* AllowMajorVersionUpgrade (boolean)
* ApplyImmediately (boolean)
* AutoMinorVersionUpgrade (boolean)
* BackupRetentionPeriod (integer)
* CACertificateIdentifier (string)
* CopyTagsToSnapshot (boolean)
* DBInstanceClass (string)
* DBInstanceIdentifier (string) **required**
* DBParameterGroupName (string)
* DBPortNumber (integer)
* DBSecurityGroups (array)
* DBSubnetGroupName (string)
* Domain (string)
* DomainIAMRoleName (string)
* EnableIAMDatabaseAuthentication (boolean)
* EngineVersion (string)
* Iops (integer)
* LicenseModel (string)
* MasterUserPassword (string)
* MonitoringInterval (integer)
* MonitoringRoleArn (string)
* MultiAZ (boolean)
* NewDBInstanceIdentifier (string)
* OptionGroupName (string)
* PreferredBackupWindow (string)
* PreferredMaintenanceWindow (string)
* PromotionTier (integer)
* PubliclyAccessible (boolean)
* StorageType (string)
* TdeCredentialArn (string)
* TdeCredentialPassword (string)
* VpcSecurityGroupIds (array)

### ModifyDBParameterGroup



```js
amazonaws_rds.ModifyDBParameterGroup({
  "DBParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Parameters
* DBParameterGroupName (string) **required**
* Parameters (array) **required**

### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({
  "DBSnapshotIdentifier": ""
}, context)
```

#### Parameters
* DBSnapshotIdentifier (string) **required**
* EngineVersion (string)

### ModifyDBSnapshotAttribute



```js
amazonaws_rds.ModifyDBSnapshotAttribute({
  "DBSnapshotIdentifier": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* AttributeName (string) **required**
* DBSnapshotIdentifier (string) **required**
* ValuesToAdd (array)
* ValuesToRemove (array)

### ModifyDBSubnetGroup



```js
amazonaws_rds.ModifyDBSubnetGroup({
  "DBSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* DBSubnetGroupDescription (string)
* DBSubnetGroupName (string) **required**
* SubnetIds (array) **required**

### ModifyEventSubscription



```js
amazonaws_rds.ModifyEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* SnsTopicArn (string)
* SourceType (string)
* SubscriptionName (string) **required**

### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({
  "OptionGroupName": ""
}, context)
```

#### Parameters
* ApplyImmediately (boolean)
* OptionGroupName (string) **required**
* OptionsToInclude (array)
* OptionsToRemove (array)

### PromoteReadReplica



```js
amazonaws_rds.PromoteReadReplica({
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* BackupRetentionPeriod (integer)
* DBInstanceIdentifier (string) **required**
* PreferredBackupWindow (string)

### PromoteReadReplicaDBCluster



```js
amazonaws_rds.PromoteReadReplicaDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**

### PurchaseReservedDBInstancesOffering



```js
amazonaws_rds.PurchaseReservedDBInstancesOffering({
  "ReservedDBInstancesOfferingId": ""
}, context)
```

#### Parameters
* DBInstanceCount (integer)
* ReservedDBInstanceId (string)
* ReservedDBInstancesOfferingId (string) **required**
* Tags (array) - A list of tags.

### RebootDBInstance



```js
amazonaws_rds.RebootDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Parameters
* DBInstanceIdentifier (string) **required**
* ForceFailover (boolean)

### RemoveRoleFromDBCluster



```js
amazonaws_rds.RemoveRoleFromDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**
* RoleArn (string) **required**

### RemoveSourceIdentifierFromSubscription



```js
amazonaws_rds.RemoveSourceIdentifierFromSubscription({
  "SubscriptionName": "",
  "SourceIdentifier": ""
}, context)
```

#### Parameters
* SourceIdentifier (string) **required**
* SubscriptionName (string) **required**

### RemoveTagsFromResource



```js
amazonaws_rds.RemoveTagsFromResource({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* TagKeys (array) **required**

### ResetDBClusterParameterGroup



```js
amazonaws_rds.ResetDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Parameters
* DBClusterParameterGroupName (string) **required**
* Parameters (array)
* ResetAllParameters (boolean)

### ResetDBParameterGroup



```js
amazonaws_rds.ResetDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Parameters
* DBParameterGroupName (string) **required**
* Parameters (array)
* ResetAllParameters (boolean)

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

#### Parameters
* AvailabilityZones (array)
* BackupRetentionPeriod (integer)
* CharacterSetName (string)
* DBClusterIdentifier (string) **required**
* DBClusterParameterGroupName (string)
* DBSubnetGroupName (string)
* DatabaseName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string) **required**
* EngineVersion (string)
* KmsKeyId (string)
* MasterUserPassword (string) **required**
* MasterUsername (string) **required**
* OptionGroupName (string)
* Port (integer)
* PreferredBackupWindow (string)
* PreferredMaintenanceWindow (string)
* S3BucketName (string) **required**
* S3IngestionRoleArn (string) **required**
* S3Prefix (string)
* SourceEngine (string) **required**
* SourceEngineVersion (string) **required**
* StorageEncrypted (boolean)
* Tags (array) - A list of tags.
* VpcSecurityGroupIds (array)

### RestoreDBClusterFromSnapshot



```js
amazonaws_rds.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": "",
  "SnapshotIdentifier": "",
  "Engine": ""
}, context)
```

#### Parameters
* AvailabilityZones (array)
* DBClusterIdentifier (string) **required**
* DBSubnetGroupName (string)
* DatabaseName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string) **required**
* EngineVersion (string)
* KmsKeyId (string)
* OptionGroupName (string)
* Port (integer)
* SnapshotIdentifier (string) **required**
* Tags (array) - A list of tags.
* VpcSecurityGroupIds (array)

### RestoreDBClusterToPointInTime



```js
amazonaws_rds.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": "",
  "SourceDBClusterIdentifier": ""
}, context)
```

#### Parameters
* DBClusterIdentifier (string) **required**
* DBSubnetGroupName (string)
* EnableIAMDatabaseAuthentication (boolean)
* KmsKeyId (string)
* OptionGroupName (string)
* Port (integer)
* RestoreToTime (string)
* SourceDBClusterIdentifier (string) **required**
* Tags (array) - A list of tags.
* UseLatestRestorableTime (boolean)
* VpcSecurityGroupIds (array)

### RestoreDBInstanceFromDBSnapshot



```js
amazonaws_rds.RestoreDBInstanceFromDBSnapshot({
  "DBInstanceIdentifier": "",
  "DBSnapshotIdentifier": ""
}, context)
```

#### Parameters
* AutoMinorVersionUpgrade (boolean)
* AvailabilityZone (string)
* CopyTagsToSnapshot (boolean)
* DBInstanceClass (string)
* DBInstanceIdentifier (string) **required**
* DBName (string)
* DBSnapshotIdentifier (string) **required**
* DBSubnetGroupName (string)
* Domain (string)
* DomainIAMRoleName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string)
* Iops (integer)
* LicenseModel (string)
* MultiAZ (boolean)
* OptionGroupName (string)
* Port (integer)
* PubliclyAccessible (boolean)
* StorageType (string)
* Tags (array) - A list of tags.
* TdeCredentialArn (string)
* TdeCredentialPassword (string)

### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({
  "SourceDBInstanceIdentifier": "",
  "TargetDBInstanceIdentifier": ""
}, context)
```

#### Parameters
* AutoMinorVersionUpgrade (boolean)
* AvailabilityZone (string)
* CopyTagsToSnapshot (boolean)
* DBInstanceClass (string)
* DBName (string)
* DBSubnetGroupName (string)
* Domain (string)
* DomainIAMRoleName (string)
* EnableIAMDatabaseAuthentication (boolean)
* Engine (string)
* Iops (integer)
* LicenseModel (string)
* MultiAZ (boolean)
* OptionGroupName (string)
* Port (integer)
* PubliclyAccessible (boolean)
* RestoreTime (string)
* SourceDBInstanceIdentifier (string) **required**
* StorageType (string)
* Tags (array) - A list of tags.
* TargetDBInstanceIdentifier (string) **required**
* TdeCredentialArn (string)
* TdeCredentialPassword (string)
* UseLatestRestorableTime (boolean)

### RevokeDBSecurityGroupIngress



```js
amazonaws_rds.RevokeDBSecurityGroupIngress({
  "DBSecurityGroupName": ""
}, context)
```

#### Parameters
* CIDRIP (string)
* DBSecurityGroupName (string) **required**
* EC2SecurityGroupId (string)
* EC2SecurityGroupName (string)
* EC2SecurityGroupOwnerId (string)

