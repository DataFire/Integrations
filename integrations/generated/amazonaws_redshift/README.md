# @datafire/amazonaws_redshift

Client library for Amazon Redshift

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_redshift
```

```js
let datafire = require('datafire');
let amazonaws_redshift = require('@datafire/amazonaws_redshift').actions;
let context = new datafire.Context();

amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="http://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

## Actions
### AuthorizeClusterSecurityGroupIngress



```js
amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({}, context)
```

#### Parameters

### AuthorizeSnapshotAccess



```js
amazonaws_redshift.AuthorizeSnapshotAccess({}, context)
```

#### Parameters

### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({}, context)
```

#### Parameters

### CreateCluster



```js
amazonaws_redshift.CreateCluster({}, context)
```

#### Parameters

### CreateClusterParameterGroup



```js
amazonaws_redshift.CreateClusterParameterGroup({}, context)
```

#### Parameters

### CreateClusterSecurityGroup



```js
amazonaws_redshift.CreateClusterSecurityGroup({}, context)
```

#### Parameters

### CreateClusterSnapshot



```js
amazonaws_redshift.CreateClusterSnapshot({}, context)
```

#### Parameters

### CreateClusterSubnetGroup



```js
amazonaws_redshift.CreateClusterSubnetGroup({}, context)
```

#### Parameters

### CreateEventSubscription



```js
amazonaws_redshift.CreateEventSubscription({}, context)
```

#### Parameters

### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({}, context)
```

#### Parameters

### CreateHsmConfiguration



```js
amazonaws_redshift.CreateHsmConfiguration({}, context)
```

#### Parameters

### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({}, context)
```

#### Parameters

### CreateTags



```js
amazonaws_redshift.CreateTags({}, context)
```

#### Parameters

### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({}, context)
```

#### Parameters

### DeleteClusterParameterGroup



```js
amazonaws_redshift.DeleteClusterParameterGroup({}, context)
```

#### Parameters

### DeleteClusterSecurityGroup



```js
amazonaws_redshift.DeleteClusterSecurityGroup({}, context)
```

#### Parameters

### DeleteClusterSnapshot



```js
amazonaws_redshift.DeleteClusterSnapshot({}, context)
```

#### Parameters

### DeleteClusterSubnetGroup



```js
amazonaws_redshift.DeleteClusterSubnetGroup({}, context)
```

#### Parameters

### DeleteEventSubscription



```js
amazonaws_redshift.DeleteEventSubscription({}, context)
```

#### Parameters

### DeleteHsmClientCertificate



```js
amazonaws_redshift.DeleteHsmClientCertificate({}, context)
```

#### Parameters

### DeleteHsmConfiguration



```js
amazonaws_redshift.DeleteHsmConfiguration({}, context)
```

#### Parameters

### DeleteSnapshotCopyGrant



```js
amazonaws_redshift.DeleteSnapshotCopyGrant({}, context)
```

#### Parameters

### DeleteTags



```js
amazonaws_redshift.DeleteTags({}, context)
```

#### Parameters

### DescribeClusterParameterGroups



```js
amazonaws_redshift.DescribeClusterParameterGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusterParameters



```js
amazonaws_redshift.DescribeClusterParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusterSecurityGroups



```js
amazonaws_redshift.DescribeClusterSecurityGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusterSnapshots



```js
amazonaws_redshift.DescribeClusterSnapshots({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusterSubnetGroups



```js
amazonaws_redshift.DescribeClusterSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusterVersions



```js
amazonaws_redshift.DescribeClusterVersions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeClusters



```js
amazonaws_redshift.DescribeClusters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeDefaultClusterParameters



```js
amazonaws_redshift.DescribeDefaultClusterParameters({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEventCategories



```js
amazonaws_redshift.DescribeEventCategories({}, context)
```

#### Parameters

### DescribeEventSubscriptions



```js
amazonaws_redshift.DescribeEventSubscriptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeEvents



```js
amazonaws_redshift.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeHsmClientCertificates



```js
amazonaws_redshift.DescribeHsmClientCertificates({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeHsmConfigurations



```js
amazonaws_redshift.DescribeHsmConfigurations({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeLoggingStatus



```js
amazonaws_redshift.DescribeLoggingStatus({}, context)
```

#### Parameters

### DescribeOrderableClusterOptions



```js
amazonaws_redshift.DescribeOrderableClusterOptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReservedNodeOfferings



```js
amazonaws_redshift.DescribeReservedNodeOfferings({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeReservedNodes



```js
amazonaws_redshift.DescribeReservedNodes({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)

### DescribeResize



```js
amazonaws_redshift.DescribeResize({}, context)
```

#### Parameters

### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```

#### Parameters

### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```

#### Parameters

### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```

#### Parameters

### DisableLogging



```js
amazonaws_redshift.DisableLogging({}, context)
```

#### Parameters

### DisableSnapshotCopy



```js
amazonaws_redshift.DisableSnapshotCopy({}, context)
```

#### Parameters

### EnableLogging



```js
amazonaws_redshift.EnableLogging({}, context)
```

#### Parameters

### EnableSnapshotCopy



```js
amazonaws_redshift.EnableSnapshotCopy({}, context)
```

#### Parameters

### GetClusterCredentials



```js
amazonaws_redshift.GetClusterCredentials({}, context)
```

#### Parameters

### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({}, context)
```

#### Parameters

### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({}, context)
```

#### Parameters

### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({}, context)
```

#### Parameters

### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({}, context)
```

#### Parameters

### ModifyEventSubscription



```js
amazonaws_redshift.ModifyEventSubscription({}, context)
```

#### Parameters

### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({}, context)
```

#### Parameters

### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({}, context)
```

#### Parameters

### RebootCluster



```js
amazonaws_redshift.RebootCluster({}, context)
```

#### Parameters

### ResetClusterParameterGroup



```js
amazonaws_redshift.ResetClusterParameterGroup({}, context)
```

#### Parameters

### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({}, context)
```

#### Parameters

### RestoreTableFromClusterSnapshot



```js
amazonaws_redshift.RestoreTableFromClusterSnapshot({}, context)
```

#### Parameters

### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({}, context)
```

#### Parameters

### RevokeSnapshotAccess



```js
amazonaws_redshift.RevokeSnapshotAccess({}, context)
```

#### Parameters

### RotateEncryptionKey



```js
amazonaws_redshift.RotateEncryptionKey({}, context)
```

#### Parameters

