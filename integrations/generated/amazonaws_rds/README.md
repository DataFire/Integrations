# @datafire/amazonaws_rds

Client library for Amazon Relational Database Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_rds
```

```js
let datafire = require('datafire');
let amazonaws_rds = require('@datafire/amazonaws_rds').actions;
let context = new datafire.Context();

amazonaws_rds.AddRoleToDBCluster({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Relational Database Service</fullname> <p> </p> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your database instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

## Actions
### AddRoleToDBCluster



```js
amazonaws_rds.AddRoleToDBCluster({}, context)
```

#### Parameters

### AddSourceIdentifierToSubscription



```js
amazonaws_rds.AddSourceIdentifierToSubscription({}, context)
```

#### Parameters

### AddTagsToResource



```js
amazonaws_rds.AddTagsToResource({}, context)
```

#### Parameters

### ApplyPendingMaintenanceAction



```js
amazonaws_rds.ApplyPendingMaintenanceAction({}, context)
```

#### Parameters

### AuthorizeDBSecurityGroupIngress



```js
amazonaws_rds.AuthorizeDBSecurityGroupIngress({}, context)
```

#### Parameters

### CopyDBClusterParameterGroup



```js
amazonaws_rds.CopyDBClusterParameterGroup({}, context)
```

#### Parameters

### CopyDBClusterSnapshot



```js
amazonaws_rds.CopyDBClusterSnapshot({}, context)
```

#### Parameters

### CopyDBParameterGroup



```js
amazonaws_rds.CopyDBParameterGroup({}, context)
```

#### Parameters

### CopyDBSnapshot



```js
amazonaws_rds.CopyDBSnapshot({}, context)
```

#### Parameters

### CopyOptionGroup



```js
amazonaws_rds.CopyOptionGroup({}, context)
```

#### Parameters

### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({}, context)
```

#### Parameters

### CreateDBClusterParameterGroup



```js
amazonaws_rds.CreateDBClusterParameterGroup({}, context)
```

#### Parameters

### CreateDBClusterSnapshot



```js
amazonaws_rds.CreateDBClusterSnapshot({}, context)
```

#### Parameters

### CreateDBInstance



```js
amazonaws_rds.CreateDBInstance({}, context)
```

#### Parameters

### CreateDBInstanceReadReplica



```js
amazonaws_rds.CreateDBInstanceReadReplica({}, context)
```

#### Parameters

### CreateDBParameterGroup



```js
amazonaws_rds.CreateDBParameterGroup({}, context)
```

#### Parameters

### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({}, context)
```

#### Parameters

### CreateDBSnapshot



```js
amazonaws_rds.CreateDBSnapshot({}, context)
```

#### Parameters

### CreateDBSubnetGroup



```js
amazonaws_rds.CreateDBSubnetGroup({}, context)
```

#### Parameters

### CreateEventSubscription



```js
amazonaws_rds.CreateEventSubscription({}, context)
```

#### Parameters

### CreateOptionGroup



```js
amazonaws_rds.CreateOptionGroup({}, context)
```

#### Parameters

### DeleteDBCluster



```js
amazonaws_rds.DeleteDBCluster({}, context)
```

#### Parameters

### DeleteDBClusterParameterGroup



```js
amazonaws_rds.DeleteDBClusterParameterGroup({}, context)
```

#### Parameters

### DeleteDBClusterSnapshot



```js
amazonaws_rds.DeleteDBClusterSnapshot({}, context)
```

#### Parameters

### DeleteDBInstance



```js
amazonaws_rds.DeleteDBInstance({}, context)
```

#### Parameters

### DeleteDBParameterGroup



```js
amazonaws_rds.DeleteDBParameterGroup({}, context)
```

#### Parameters

### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({}, context)
```

#### Parameters

### DeleteDBSnapshot



```js
amazonaws_rds.DeleteDBSnapshot({}, context)
```

#### Parameters

### DeleteDBSubnetGroup



```js
amazonaws_rds.DeleteDBSubnetGroup({}, context)
```

#### Parameters

### DeleteEventSubscription



```js
amazonaws_rds.DeleteEventSubscription({}, context)
```

#### Parameters

### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({}, context)
```

#### Parameters

### DescribeAccountAttributes



```js
amazonaws_rds.DescribeAccountAttributes({}, context)
```

#### Parameters

### DescribeCertificates



```js
amazonaws_rds.DescribeCertificates({}, context)
```

#### Parameters

### DescribeDBClusterParameterGroups



```js
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
```

#### Parameters

### DescribeDBClusterParameters



```js
amazonaws_rds.DescribeDBClusterParameters({}, context)
```

#### Parameters

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_rds.DescribeDBClusterSnapshotAttributes({}, context)
```

#### Parameters

### DescribeDBClusterSnapshots



```js
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
```

#### Parameters

### DescribeDBClusters



```js
amazonaws_rds.DescribeDBClusters({}, context)
```

#### Parameters

### DescribeDBEngineVersions



```js
amazonaws_rds.DescribeDBEngineVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBInstances



```js
amazonaws_rds.DescribeDBInstances({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBLogFiles



```js
amazonaws_rds.DescribeDBLogFiles({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBParameterGroups



```js
amazonaws_rds.DescribeDBParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBParameters



```js
amazonaws_rds.DescribeDBParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBSecurityGroups



```js
amazonaws_rds.DescribeDBSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBSnapshotAttributes



```js
amazonaws_rds.DescribeDBSnapshotAttributes({}, context)
```

#### Parameters

### DescribeDBSnapshots



```js
amazonaws_rds.DescribeDBSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDBSubnetGroups



```js
amazonaws_rds.DescribeDBSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_rds.DescribeEngineDefaultClusterParameters({}, context)
```

#### Parameters

### DescribeEngineDefaultParameters



```js
amazonaws_rds.DescribeEngineDefaultParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEventCategories



```js
amazonaws_rds.DescribeEventCategories({}, context)
```

#### Parameters

### DescribeEventSubscriptions



```js
amazonaws_rds.DescribeEventSubscriptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEvents



```js
amazonaws_rds.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeOptionGroupOptions



```js
amazonaws_rds.DescribeOptionGroupOptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeOptionGroups



```js
amazonaws_rds.DescribeOptionGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_rds.DescribeOrderableDBInstanceOptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribePendingMaintenanceActions



```js
amazonaws_rds.DescribePendingMaintenanceActions({}, context)
```

#### Parameters

### DescribeReservedDBInstances



```js
amazonaws_rds.DescribeReservedDBInstances({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReservedDBInstancesOfferings



```js
amazonaws_rds.DescribeReservedDBInstancesOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeSourceRegions



```js
amazonaws_rds.DescribeSourceRegions({}, context)
```

#### Parameters

### DownloadDBLogFilePortion



```js
amazonaws_rds.DownloadDBLogFilePortion({}, context)
```

#### Parameters
* NumberOfLines (string)
* Marker (string)

### FailoverDBCluster



```js
amazonaws_rds.FailoverDBCluster({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_rds.ListTagsForResource({}, context)
```

#### Parameters

### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({}, context)
```

#### Parameters

### ModifyDBClusterParameterGroup



```js
amazonaws_rds.ModifyDBClusterParameterGroup({}, context)
```

#### Parameters

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_rds.ModifyDBClusterSnapshotAttribute({}, context)
```

#### Parameters

### ModifyDBInstance



```js
amazonaws_rds.ModifyDBInstance({}, context)
```

#### Parameters

### ModifyDBParameterGroup



```js
amazonaws_rds.ModifyDBParameterGroup({}, context)
```

#### Parameters

### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({}, context)
```

#### Parameters

### ModifyDBSnapshotAttribute



```js
amazonaws_rds.ModifyDBSnapshotAttribute({}, context)
```

#### Parameters

### ModifyDBSubnetGroup



```js
amazonaws_rds.ModifyDBSubnetGroup({}, context)
```

#### Parameters

### ModifyEventSubscription



```js
amazonaws_rds.ModifyEventSubscription({}, context)
```

#### Parameters

### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({}, context)
```

#### Parameters

### PromoteReadReplica



```js
amazonaws_rds.PromoteReadReplica({}, context)
```

#### Parameters

### PromoteReadReplicaDBCluster



```js
amazonaws_rds.PromoteReadReplicaDBCluster({}, context)
```

#### Parameters

### PurchaseReservedDBInstancesOffering



```js
amazonaws_rds.PurchaseReservedDBInstancesOffering({}, context)
```

#### Parameters

### RebootDBInstance



```js
amazonaws_rds.RebootDBInstance({}, context)
```

#### Parameters

### RemoveRoleFromDBCluster



```js
amazonaws_rds.RemoveRoleFromDBCluster({}, context)
```

#### Parameters

### RemoveSourceIdentifierFromSubscription



```js
amazonaws_rds.RemoveSourceIdentifierFromSubscription({}, context)
```

#### Parameters

### RemoveTagsFromResource



```js
amazonaws_rds.RemoveTagsFromResource({}, context)
```

#### Parameters

### ResetDBClusterParameterGroup



```js
amazonaws_rds.ResetDBClusterParameterGroup({}, context)
```

#### Parameters

### ResetDBParameterGroup



```js
amazonaws_rds.ResetDBParameterGroup({}, context)
```

#### Parameters

### RestoreDBClusterFromS3



```js
amazonaws_rds.RestoreDBClusterFromS3({}, context)
```

#### Parameters

### RestoreDBClusterFromSnapshot



```js
amazonaws_rds.RestoreDBClusterFromSnapshot({}, context)
```

#### Parameters

### RestoreDBClusterToPointInTime



```js
amazonaws_rds.RestoreDBClusterToPointInTime({}, context)
```

#### Parameters

### RestoreDBInstanceFromDBSnapshot



```js
amazonaws_rds.RestoreDBInstanceFromDBSnapshot({}, context)
```

#### Parameters

### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({}, context)
```

#### Parameters

### RevokeDBSecurityGroupIngress



```js
amazonaws_rds.RevokeDBSecurityGroupIngress({}, context)
```

#### Parameters

