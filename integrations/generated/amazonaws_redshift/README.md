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
amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({}, context)
```


### AuthorizeSnapshotAccess



```js
amazonaws_redshift.AuthorizeSnapshotAccess({}, context)
```


### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({}, context)
```


### CreateCluster



```js
amazonaws_redshift.CreateCluster({}, context)
```


### CreateClusterParameterGroup



```js
amazonaws_redshift.CreateClusterParameterGroup({}, context)
```


### CreateClusterSecurityGroup



```js
amazonaws_redshift.CreateClusterSecurityGroup({}, context)
```


### CreateClusterSnapshot



```js
amazonaws_redshift.CreateClusterSnapshot({}, context)
```


### CreateClusterSubnetGroup



```js
amazonaws_redshift.CreateClusterSubnetGroup({}, context)
```


### CreateEventSubscription



```js
amazonaws_redshift.CreateEventSubscription({}, context)
```


### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({}, context)
```


### CreateHsmConfiguration



```js
amazonaws_redshift.CreateHsmConfiguration({}, context)
```


### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({}, context)
```


### CreateTags



```js
amazonaws_redshift.CreateTags({}, context)
```


### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({}, context)
```


### DeleteClusterParameterGroup



```js
amazonaws_redshift.DeleteClusterParameterGroup({}, context)
```


### DeleteClusterSecurityGroup



```js
amazonaws_redshift.DeleteClusterSecurityGroup({}, context)
```


### DeleteClusterSnapshot



```js
amazonaws_redshift.DeleteClusterSnapshot({}, context)
```


### DeleteClusterSubnetGroup



```js
amazonaws_redshift.DeleteClusterSubnetGroup({}, context)
```


### DeleteEventSubscription



```js
amazonaws_redshift.DeleteEventSubscription({}, context)
```


### DeleteHsmClientCertificate



```js
amazonaws_redshift.DeleteHsmClientCertificate({}, context)
```


### DeleteHsmConfiguration



```js
amazonaws_redshift.DeleteHsmConfiguration({}, context)
```


### DeleteSnapshotCopyGrant



```js
amazonaws_redshift.DeleteSnapshotCopyGrant({}, context)
```


### DeleteTags



```js
amazonaws_redshift.DeleteTags({}, context)
```


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


### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```


### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```


### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```


### DisableLogging



```js
amazonaws_redshift.DisableLogging({}, context)
```


### DisableSnapshotCopy



```js
amazonaws_redshift.DisableSnapshotCopy({}, context)
```


### EnableLogging



```js
amazonaws_redshift.EnableLogging({}, context)
```


### EnableSnapshotCopy



```js
amazonaws_redshift.EnableSnapshotCopy({}, context)
```


### GetClusterCredentials



```js
amazonaws_redshift.GetClusterCredentials({}, context)
```


### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({}, context)
```


### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({}, context)
```


### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({}, context)
```


### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({}, context)
```


### ModifyEventSubscription



```js
amazonaws_redshift.ModifyEventSubscription({}, context)
```


### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({}, context)
```


### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({}, context)
```


### RebootCluster



```js
amazonaws_redshift.RebootCluster({}, context)
```


### ResetClusterParameterGroup



```js
amazonaws_redshift.ResetClusterParameterGroup({}, context)
```


### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({}, context)
```


### RestoreTableFromClusterSnapshot



```js
amazonaws_redshift.RestoreTableFromClusterSnapshot({}, context)
```


### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({}, context)
```


### RevokeSnapshotAccess



```js
amazonaws_redshift.RevokeSnapshotAccess({}, context)
```


### RotateEncryptionKey



```js
amazonaws_redshift.RotateEncryptionKey({}, context)
```


