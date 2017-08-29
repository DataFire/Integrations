# @datafire/amazonaws_rds

Client library for Amazon Relational Database Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_rds
```

```js
let datafire = require('datafire');
let amazonaws_rds = require('@datafire/amazonaws_rds').create();

amazonaws_rds.AddRoleToDBCluster({}).then(data => {
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


### AddSourceIdentifierToSubscription



```js
amazonaws_rds.AddSourceIdentifierToSubscription({}, context)
```


### AddTagsToResource



```js
amazonaws_rds.AddTagsToResource({}, context)
```


### ApplyPendingMaintenanceAction



```js
amazonaws_rds.ApplyPendingMaintenanceAction({}, context)
```


### AuthorizeDBSecurityGroupIngress



```js
amazonaws_rds.AuthorizeDBSecurityGroupIngress({}, context)
```


### CopyDBClusterParameterGroup



```js
amazonaws_rds.CopyDBClusterParameterGroup({}, context)
```


### CopyDBClusterSnapshot



```js
amazonaws_rds.CopyDBClusterSnapshot({}, context)
```


### CopyDBParameterGroup



```js
amazonaws_rds.CopyDBParameterGroup({}, context)
```


### CopyDBSnapshot



```js
amazonaws_rds.CopyDBSnapshot({}, context)
```


### CopyOptionGroup



```js
amazonaws_rds.CopyOptionGroup({}, context)
```


### CreateDBCluster



```js
amazonaws_rds.CreateDBCluster({}, context)
```


### CreateDBClusterParameterGroup



```js
amazonaws_rds.CreateDBClusterParameterGroup({}, context)
```


### CreateDBClusterSnapshot



```js
amazonaws_rds.CreateDBClusterSnapshot({}, context)
```


### CreateDBInstance



```js
amazonaws_rds.CreateDBInstance({}, context)
```


### CreateDBInstanceReadReplica



```js
amazonaws_rds.CreateDBInstanceReadReplica({}, context)
```


### CreateDBParameterGroup



```js
amazonaws_rds.CreateDBParameterGroup({}, context)
```


### CreateDBSecurityGroup



```js
amazonaws_rds.CreateDBSecurityGroup({}, context)
```


### CreateDBSnapshot



```js
amazonaws_rds.CreateDBSnapshot({}, context)
```


### CreateDBSubnetGroup



```js
amazonaws_rds.CreateDBSubnetGroup({}, context)
```


### CreateEventSubscription



```js
amazonaws_rds.CreateEventSubscription({}, context)
```


### CreateOptionGroup



```js
amazonaws_rds.CreateOptionGroup({}, context)
```


### DeleteDBCluster



```js
amazonaws_rds.DeleteDBCluster({}, context)
```


### DeleteDBClusterParameterGroup



```js
amazonaws_rds.DeleteDBClusterParameterGroup({}, context)
```


### DeleteDBClusterSnapshot



```js
amazonaws_rds.DeleteDBClusterSnapshot({}, context)
```


### DeleteDBInstance



```js
amazonaws_rds.DeleteDBInstance({}, context)
```


### DeleteDBParameterGroup



```js
amazonaws_rds.DeleteDBParameterGroup({}, context)
```


### DeleteDBSecurityGroup



```js
amazonaws_rds.DeleteDBSecurityGroup({}, context)
```


### DeleteDBSnapshot



```js
amazonaws_rds.DeleteDBSnapshot({}, context)
```


### DeleteDBSubnetGroup



```js
amazonaws_rds.DeleteDBSubnetGroup({}, context)
```


### DeleteEventSubscription



```js
amazonaws_rds.DeleteEventSubscription({}, context)
```


### DeleteOptionGroup



```js
amazonaws_rds.DeleteOptionGroup({}, context)
```


### DescribeAccountAttributes



```js
amazonaws_rds.DescribeAccountAttributes({}, context)
```


### DescribeCertificates



```js
amazonaws_rds.DescribeCertificates({}, context)
```


### DescribeDBClusterParameterGroups



```js
amazonaws_rds.DescribeDBClusterParameterGroups({}, context)
```


### DescribeDBClusterParameters



```js
amazonaws_rds.DescribeDBClusterParameters({}, context)
```


### DescribeDBClusterSnapshotAttributes



```js
amazonaws_rds.DescribeDBClusterSnapshotAttributes({}, context)
```


### DescribeDBClusterSnapshots



```js
amazonaws_rds.DescribeDBClusterSnapshots({}, context)
```


### DescribeDBClusters



```js
amazonaws_rds.DescribeDBClusters({}, context)
```


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


### ListTagsForResource



```js
amazonaws_rds.ListTagsForResource({}, context)
```


### ModifyDBCluster



```js
amazonaws_rds.ModifyDBCluster({}, context)
```


### ModifyDBClusterParameterGroup



```js
amazonaws_rds.ModifyDBClusterParameterGroup({}, context)
```


### ModifyDBClusterSnapshotAttribute



```js
amazonaws_rds.ModifyDBClusterSnapshotAttribute({}, context)
```


### ModifyDBInstance



```js
amazonaws_rds.ModifyDBInstance({}, context)
```


### ModifyDBParameterGroup



```js
amazonaws_rds.ModifyDBParameterGroup({}, context)
```


### ModifyDBSnapshot



```js
amazonaws_rds.ModifyDBSnapshot({}, context)
```


### ModifyDBSnapshotAttribute



```js
amazonaws_rds.ModifyDBSnapshotAttribute({}, context)
```


### ModifyDBSubnetGroup



```js
amazonaws_rds.ModifyDBSubnetGroup({}, context)
```


### ModifyEventSubscription



```js
amazonaws_rds.ModifyEventSubscription({}, context)
```


### ModifyOptionGroup



```js
amazonaws_rds.ModifyOptionGroup({}, context)
```


### PromoteReadReplica



```js
amazonaws_rds.PromoteReadReplica({}, context)
```


### PromoteReadReplicaDBCluster



```js
amazonaws_rds.PromoteReadReplicaDBCluster({}, context)
```


### PurchaseReservedDBInstancesOffering



```js
amazonaws_rds.PurchaseReservedDBInstancesOffering({}, context)
```


### RebootDBInstance



```js
amazonaws_rds.RebootDBInstance({}, context)
```


### RemoveRoleFromDBCluster



```js
amazonaws_rds.RemoveRoleFromDBCluster({}, context)
```


### RemoveSourceIdentifierFromSubscription



```js
amazonaws_rds.RemoveSourceIdentifierFromSubscription({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_rds.RemoveTagsFromResource({}, context)
```


### ResetDBClusterParameterGroup



```js
amazonaws_rds.ResetDBClusterParameterGroup({}, context)
```


### ResetDBParameterGroup



```js
amazonaws_rds.ResetDBParameterGroup({}, context)
```


### RestoreDBClusterFromS3



```js
amazonaws_rds.RestoreDBClusterFromS3({}, context)
```


### RestoreDBClusterFromSnapshot



```js
amazonaws_rds.RestoreDBClusterFromSnapshot({}, context)
```


### RestoreDBClusterToPointInTime



```js
amazonaws_rds.RestoreDBClusterToPointInTime({}, context)
```


### RestoreDBInstanceFromDBSnapshot



```js
amazonaws_rds.RestoreDBInstanceFromDBSnapshot({}, context)
```


### RestoreDBInstanceToPointInTime



```js
amazonaws_rds.RestoreDBInstanceToPointInTime({}, context)
```


### RevokeDBSecurityGroupIngress



```js
amazonaws_rds.RevokeDBSecurityGroupIngress({}, context)
```


