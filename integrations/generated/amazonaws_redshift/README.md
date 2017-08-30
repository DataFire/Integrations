# @datafire/amazonaws_redshift

Client library for Amazon Redshift

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_redshift
```

```js
let datafire = require('datafire');
let amazonaws_redshift = require('@datafire/amazonaws_redshift').create();

amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="http://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

## Actions
### AuthorizeClusterSecurityGroupIngress



```js
amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Parameters
* CIDRIP (string)
* ClusterSecurityGroupName (string) **required**
* EC2SecurityGroupName (string)
* EC2SecurityGroupOwnerId (string)

### AuthorizeSnapshotAccess



```js
amazonaws_redshift.AuthorizeSnapshotAccess({
  "SnapshotIdentifier": "",
  "AccountWithRestoreAccess": ""
}, context)
```

#### Parameters
* AccountWithRestoreAccess (string) **required**
* SnapshotClusterIdentifier (string)
* SnapshotIdentifier (string) **required**

### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({
  "SourceSnapshotIdentifier": "",
  "TargetSnapshotIdentifier": ""
}, context)
```

#### Parameters
* SourceSnapshotClusterIdentifier (string)
* SourceSnapshotIdentifier (string) **required**
* TargetSnapshotIdentifier (string) **required**

### CreateCluster



```js
amazonaws_redshift.CreateCluster({
  "ClusterIdentifier": "",
  "NodeType": "",
  "MasterUsername": "",
  "MasterUserPassword": ""
}, context)
```

#### Parameters
* AdditionalInfo (string)
* AllowVersionUpgrade (boolean)
* AutomatedSnapshotRetentionPeriod (integer)
* AvailabilityZone (string)
* ClusterIdentifier (string) **required**
* ClusterParameterGroupName (string)
* ClusterSecurityGroups (array)
* ClusterSubnetGroupName (string)
* ClusterType (string)
* ClusterVersion (string)
* DBName (string)
* ElasticIp (string)
* Encrypted (boolean)
* EnhancedVpcRouting (boolean)
* HsmClientCertificateIdentifier (string)
* HsmConfigurationIdentifier (string)
* IamRoles (array)
* KmsKeyId (string)
* MasterUserPassword (string) **required**
* MasterUsername (string) **required**
* NodeType (string) **required**
* NumberOfNodes (integer)
* Port (integer)
* PreferredMaintenanceWindow (string)
* PubliclyAccessible (boolean)
* Tags (array)
* VpcSecurityGroupIds (array)

### CreateClusterParameterGroup



```js
amazonaws_redshift.CreateClusterParameterGroup({
  "ParameterGroupName": "",
  "ParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Parameters
* Description (string) **required**
* ParameterGroupFamily (string) **required**
* ParameterGroupName (string) **required**
* Tags (array)

### CreateClusterSecurityGroup



```js
amazonaws_redshift.CreateClusterSecurityGroup({
  "ClusterSecurityGroupName": "",
  "Description": ""
}, context)
```

#### Parameters
* ClusterSecurityGroupName (string) **required**
* Description (string) **required**
* Tags (array)

### CreateClusterSnapshot



```js
amazonaws_redshift.CreateClusterSnapshot({
  "SnapshotIdentifier": "",
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**
* SnapshotIdentifier (string) **required**
* Tags (array)

### CreateClusterSubnetGroup



```js
amazonaws_redshift.CreateClusterSubnetGroup({
  "ClusterSubnetGroupName": "",
  "Description": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* ClusterSubnetGroupName (string) **required**
* Description (string) **required**
* SubnetIds (array) **required**
* Tags (array)

### CreateEventSubscription



```js
amazonaws_redshift.CreateEventSubscription({
  "SubscriptionName": "",
  "SnsTopicArn": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* Severity (string)
* SnsTopicArn (string) **required**
* SourceIds (array)
* SourceType (string)
* SubscriptionName (string) **required**
* Tags (array)

### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({
  "HsmClientCertificateIdentifier": ""
}, context)
```

#### Parameters
* HsmClientCertificateIdentifier (string) **required**
* Tags (array)

### CreateHsmConfiguration



```js
amazonaws_redshift.CreateHsmConfiguration({
  "HsmConfigurationIdentifier": "",
  "Description": "",
  "HsmIpAddress": "",
  "HsmPartitionName": "",
  "HsmPartitionPassword": "",
  "HsmServerPublicCertificate": ""
}, context)
```

#### Parameters
* Description (string) **required**
* HsmConfigurationIdentifier (string) **required**
* HsmIpAddress (string) **required**
* HsmPartitionName (string) **required**
* HsmPartitionPassword (string) **required**
* HsmServerPublicCertificate (string) **required**
* Tags (array)

### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({
  "SnapshotCopyGrantName": ""
}, context)
```

#### Parameters
* KmsKeyId (string)
* SnapshotCopyGrantName (string) **required**
* Tags (array)

### CreateTags



```js
amazonaws_redshift.CreateTags({
  "ResourceName": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* Tags (array) **required**

### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**
* FinalClusterSnapshotIdentifier (string)
* SkipFinalClusterSnapshot (boolean)

### DeleteClusterParameterGroup



```js
amazonaws_redshift.DeleteClusterParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* ParameterGroupName (string) **required**

### DeleteClusterSecurityGroup



```js
amazonaws_redshift.DeleteClusterSecurityGroup({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Parameters
* ClusterSecurityGroupName (string) **required**

### DeleteClusterSnapshot



```js
amazonaws_redshift.DeleteClusterSnapshot({
  "SnapshotIdentifier": ""
}, context)
```

#### Parameters
* SnapshotClusterIdentifier (string)
* SnapshotIdentifier (string) **required**

### DeleteClusterSubnetGroup



```js
amazonaws_redshift.DeleteClusterSubnetGroup({
  "ClusterSubnetGroupName": ""
}, context)
```

#### Parameters
* ClusterSubnetGroupName (string) **required**

### DeleteEventSubscription



```js
amazonaws_redshift.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* SubscriptionName (string) **required**

### DeleteHsmClientCertificate



```js
amazonaws_redshift.DeleteHsmClientCertificate({
  "HsmClientCertificateIdentifier": ""
}, context)
```

#### Parameters
* HsmClientCertificateIdentifier (string) **required**

### DeleteHsmConfiguration



```js
amazonaws_redshift.DeleteHsmConfiguration({
  "HsmConfigurationIdentifier": ""
}, context)
```

#### Parameters
* HsmConfigurationIdentifier (string) **required**

### DeleteSnapshotCopyGrant



```js
amazonaws_redshift.DeleteSnapshotCopyGrant({
  "SnapshotCopyGrantName": ""
}, context)
```

#### Parameters
* SnapshotCopyGrantName (string) **required**

### DeleteTags



```js
amazonaws_redshift.DeleteTags({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceName (string) **required**
* TagKeys (array) **required**

### DescribeClusterParameterGroups



```js
amazonaws_redshift.DescribeClusterParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ParameterGroupName (string)
* TagKeys (array)
* TagValues (array)

### DescribeClusterParameters



```js
amazonaws_redshift.DescribeClusterParameters({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ParameterGroupName (string) **required**
* Source (string)

### DescribeClusterSecurityGroups



```js
amazonaws_redshift.DescribeClusterSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterSecurityGroupName (string)
* Marker (string)
* MaxRecords (integer)
* TagKeys (array)
* TagValues (array)

### DescribeClusterSnapshots



```js
amazonaws_redshift.DescribeClusterSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterIdentifier (string)
* EndTime (string)
* Marker (string)
* MaxRecords (integer)
* OwnerAccount (string)
* SnapshotIdentifier (string)
* SnapshotType (string)
* StartTime (string)
* TagKeys (array)
* TagValues (array)

### DescribeClusterSubnetGroups



```js
amazonaws_redshift.DescribeClusterSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterSubnetGroupName (string)
* Marker (string)
* MaxRecords (integer)
* TagKeys (array)
* TagValues (array)

### DescribeClusterVersions



```js
amazonaws_redshift.DescribeClusterVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterParameterGroupFamily (string)
* ClusterVersion (string)
* Marker (string)
* MaxRecords (integer)

### DescribeClusters



```js
amazonaws_redshift.DescribeClusters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterIdentifier (string)
* Marker (string)
* MaxRecords (integer)
* TagKeys (array)
* TagValues (array)

### DescribeDefaultClusterParameters



```js
amazonaws_redshift.DescribeDefaultClusterParameters({
  "ParameterGroupFamily": ""
}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ParameterGroupFamily (string) **required**

### DescribeEventCategories



```js
amazonaws_redshift.DescribeEventCategories({}, context)
```

#### Parameters
* SourceType (string)

### DescribeEventSubscriptions



```js
amazonaws_redshift.DescribeEventSubscriptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* SubscriptionName (string)

### DescribeEvents



```js
amazonaws_redshift.DescribeEvents({}, context)
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

### DescribeHsmClientCertificates



```js
amazonaws_redshift.DescribeHsmClientCertificates({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* HsmClientCertificateIdentifier (string)
* Marker (string)
* MaxRecords (integer)
* TagKeys (array)
* TagValues (array)

### DescribeHsmConfigurations



```js
amazonaws_redshift.DescribeHsmConfigurations({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* HsmConfigurationIdentifier (string)
* Marker (string)
* MaxRecords (integer)
* TagKeys (array)
* TagValues (array)

### DescribeLoggingStatus



```js
amazonaws_redshift.DescribeLoggingStatus({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

### DescribeOrderableClusterOptions



```js
amazonaws_redshift.DescribeOrderableClusterOptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* ClusterVersion (string)
* Marker (string)
* MaxRecords (integer)
* NodeType (string)

### DescribeReservedNodeOfferings



```js
amazonaws_redshift.DescribeReservedNodeOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ReservedNodeOfferingId (string)

### DescribeReservedNodes



```js
amazonaws_redshift.DescribeReservedNodes({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Marker (string)
* MaxRecords (integer)
* ReservedNodeId (string)

### DescribeResize



```js
amazonaws_redshift.DescribeResize({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```

#### Parameters
* Marker (string)
* MaxRecords (integer)
* SnapshotCopyGrantName (string)
* TagKeys (array)
* TagValues (array)

### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```

#### Parameters
* ClusterIdentifier (string)
* Marker (string)
* MaxRecords (integer)
* TableRestoreRequestId (string)

### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```

#### Parameters
* Marker (string)
* MaxRecords (integer)
* ResourceName (string)
* ResourceType (string)
* TagKeys (array)
* TagValues (array)

### DisableLogging



```js
amazonaws_redshift.DisableLogging({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

### DisableSnapshotCopy



```js
amazonaws_redshift.DisableSnapshotCopy({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

### EnableLogging



```js
amazonaws_redshift.EnableLogging({
  "ClusterIdentifier": "",
  "BucketName": ""
}, context)
```

#### Parameters
* BucketName (string) **required**
* ClusterIdentifier (string) **required**
* S3KeyPrefix (string)

### EnableSnapshotCopy



```js
amazonaws_redshift.EnableSnapshotCopy({
  "ClusterIdentifier": "",
  "DestinationRegion": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**
* DestinationRegion (string) **required**
* RetentionPeriod (integer)
* SnapshotCopyGrantName (string)

### GetClusterCredentials



```js
amazonaws_redshift.GetClusterCredentials({
  "DbUser": "",
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* AutoCreate (boolean)
* ClusterIdentifier (string) **required**
* DbGroups (array)
* DbName (string)
* DbUser (string) **required**
* DurationSeconds (integer)

### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* AllowVersionUpgrade (boolean)
* AutomatedSnapshotRetentionPeriod (integer)
* ClusterIdentifier (string) **required**
* ClusterParameterGroupName (string)
* ClusterSecurityGroups (array)
* ClusterType (string)
* ClusterVersion (string)
* ElasticIp (string)
* EnhancedVpcRouting (boolean)
* HsmClientCertificateIdentifier (string)
* HsmConfigurationIdentifier (string)
* MasterUserPassword (string)
* NewClusterIdentifier (string)
* NodeType (string)
* NumberOfNodes (integer)
* PreferredMaintenanceWindow (string)
* PubliclyAccessible (boolean)
* VpcSecurityGroupIds (array)

### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* AddIamRoles (array)
* ClusterIdentifier (string) **required**
* RemoveIamRoles (array)

### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({
  "ParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Parameters
* ParameterGroupName (string) **required**
* Parameters (array) **required**

### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({
  "ClusterSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* ClusterSubnetGroupName (string) **required**
* Description (string)
* SubnetIds (array) **required**

### ModifyEventSubscription



```js
amazonaws_redshift.ModifyEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* Severity (string)
* SnsTopicArn (string)
* SourceIds (array)
* SourceType (string)
* SubscriptionName (string) **required**

### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({
  "ClusterIdentifier": "",
  "RetentionPeriod": 0
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**
* RetentionPeriod (integer) **required**

### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({
  "ReservedNodeOfferingId": ""
}, context)
```

#### Parameters
* NodeCount (integer)
* ReservedNodeOfferingId (string) **required**

### RebootCluster



```js
amazonaws_redshift.RebootCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

### ResetClusterParameterGroup



```js
amazonaws_redshift.ResetClusterParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Parameters
* ParameterGroupName (string) **required**
* Parameters (array)
* ResetAllParameters (boolean)

### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({
  "ClusterIdentifier": "",
  "SnapshotIdentifier": ""
}, context)
```

#### Parameters
* AdditionalInfo (string)
* AllowVersionUpgrade (boolean)
* AutomatedSnapshotRetentionPeriod (integer)
* AvailabilityZone (string)
* ClusterIdentifier (string) **required**
* ClusterParameterGroupName (string)
* ClusterSecurityGroups (array)
* ClusterSubnetGroupName (string)
* ElasticIp (string)
* EnhancedVpcRouting (boolean)
* HsmClientCertificateIdentifier (string)
* HsmConfigurationIdentifier (string)
* IamRoles (array)
* KmsKeyId (string)
* NodeType (string)
* OwnerAccount (string)
* Port (integer)
* PreferredMaintenanceWindow (string)
* PubliclyAccessible (boolean)
* SnapshotClusterIdentifier (string)
* SnapshotIdentifier (string) **required**
* VpcSecurityGroupIds (array)

### RestoreTableFromClusterSnapshot



```js
amazonaws_redshift.RestoreTableFromClusterSnapshot({
  "ClusterIdentifier": "",
  "SnapshotIdentifier": "",
  "SourceDatabaseName": "",
  "SourceTableName": "",
  "NewTableName": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**
* NewTableName (string) **required**
* SnapshotIdentifier (string) **required**
* SourceDatabaseName (string) **required**
* SourceSchemaName (string)
* SourceTableName (string) **required**
* TargetDatabaseName (string)
* TargetSchemaName (string)

### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Parameters
* CIDRIP (string)
* ClusterSecurityGroupName (string) **required**
* EC2SecurityGroupName (string)
* EC2SecurityGroupOwnerId (string)

### RevokeSnapshotAccess



```js
amazonaws_redshift.RevokeSnapshotAccess({
  "SnapshotIdentifier": "",
  "AccountWithRestoreAccess": ""
}, context)
```

#### Parameters
* AccountWithRestoreAccess (string) **required**
* SnapshotClusterIdentifier (string)
* SnapshotIdentifier (string) **required**

### RotateEncryptionKey



```js
amazonaws_redshift.RotateEncryptionKey({
  "ClusterIdentifier": ""
}, context)
```

#### Parameters
* ClusterIdentifier (string) **required**

