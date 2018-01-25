# @datafire/amazonaws_redshift

Client library for Amazon Redshift

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_redshift
```
```js
let amazonaws_redshift = require('@datafire/amazonaws_redshift').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * CIDRIP [String](#string)
  * ClusterSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

#### Output
* output [AuthorizeClusterSecurityGroupIngressResult](#authorizeclustersecuritygroupingressresult)

### AuthorizeSnapshotAccess



```js
amazonaws_redshift.AuthorizeSnapshotAccess({
  "SnapshotIdentifier": "",
  "AccountWithRestoreAccess": ""
}, context)
```

#### Input
* input `object`
  * AccountWithRestoreAccess **required** [String](#string)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

#### Output
* output [AuthorizeSnapshotAccessResult](#authorizesnapshotaccessresult)

### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({
  "SourceSnapshotIdentifier": "",
  "TargetSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceSnapshotClusterIdentifier [String](#string)
  * SourceSnapshotIdentifier **required** [String](#string)
  * TargetSnapshotIdentifier **required** [String](#string)

#### Output
* output [CopyClusterSnapshotResult](#copyclustersnapshotresult)

### CreateCluster



```js
amazonaws_redshift.CreateCluster({
  "ClusterIdentifier": "",
  "NodeType": "",
  "MasterUsername": "",
  "MasterUserPassword": ""
}, context)
```

#### Input
* input `object`
  * AdditionalInfo [String](#string)
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * AvailabilityZone [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterSubnetGroupName [String](#string)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * DBName [String](#string)
  * ElasticIp [String](#string)
  * Encrypted [BooleanOptional](#booleanoptional)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * IamRoles [IamRoleArnList](#iamrolearnlist)
  * KmsKeyId [String](#string)
  * MasterUserPassword **required** [String](#string)
  * MasterUsername **required** [String](#string)
  * NodeType **required** [String](#string)
  * NumberOfNodes [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [CreateClusterResult](#createclusterresult)

### CreateClusterParameterGroup



```js
amazonaws_redshift.CreateClusterParameterGroup({
  "ParameterGroupName": "",
  "ParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * Description **required** [String](#string)
  * ParameterGroupFamily **required** [String](#string)
  * ParameterGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateClusterParameterGroupResult](#createclusterparametergroupresult)

### CreateClusterSecurityGroup



```js
amazonaws_redshift.CreateClusterSecurityGroup({
  "ClusterSecurityGroupName": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateClusterSecurityGroupResult](#createclustersecuritygroupresult)

### CreateClusterSnapshot



```js
amazonaws_redshift.CreateClusterSnapshot({
  "SnapshotIdentifier": "",
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateClusterSnapshotResult](#createclustersnapshotresult)

### CreateClusterSubnetGroup



```js
amazonaws_redshift.CreateClusterSubnetGroup({
  "ClusterSubnetGroupName": "",
  "Description": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

#### Output
* output [CreateClusterSubnetGroupResult](#createclustersubnetgroupresult)

### CreateEventSubscription



```js
amazonaws_redshift.CreateEventSubscription({
  "SubscriptionName": "",
  "SnsTopicArn": ""
}, context)
```

#### Input
* input `object`
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Severity [String](#string)
  * SnsTopicArn **required** [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({
  "HsmClientCertificateIdentifier": ""
}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateHsmClientCertificateResult](#createhsmclientcertificateresult)

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

#### Input
* input `object`
  * Description **required** [String](#string)
  * HsmConfigurationIdentifier **required** [String](#string)
  * HsmIpAddress **required** [String](#string)
  * HsmPartitionName **required** [String](#string)
  * HsmPartitionPassword **required** [String](#string)
  * HsmServerPublicCertificate **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateHsmConfigurationResult](#createhsmconfigurationresult)

### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({
  "SnapshotCopyGrantName": ""
}, context)
```

#### Input
* input `object`
  * KmsKeyId [String](#string)
  * SnapshotCopyGrantName **required** [String](#string)
  * Tags [TagList](#taglist)

#### Output
* output [CreateSnapshotCopyGrantResult](#createsnapshotcopygrantresult)

### CreateTags



```js
amazonaws_redshift.CreateTags({
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

### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)
  * FinalClusterSnapshotIdentifier [String](#string)
  * SkipFinalClusterSnapshot [Boolean](#boolean)

#### Output
* output [DeleteClusterResult](#deleteclusterresult)

### DeleteClusterParameterGroup



```js
amazonaws_redshift.DeleteClusterParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteClusterSecurityGroup



```js
amazonaws_redshift.DeleteClusterSecurityGroup({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteClusterSnapshot



```js
amazonaws_redshift.DeleteClusterSnapshot({
  "SnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

#### Output
* output [DeleteClusterSnapshotResult](#deleteclustersnapshotresult)

### DeleteClusterSubnetGroup



```js
amazonaws_redshift.DeleteClusterSubnetGroup({
  "ClusterSubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteEventSubscription



```js
amazonaws_redshift.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteHsmClientCertificate



```js
amazonaws_redshift.DeleteHsmClientCertificate({
  "HsmClientCertificateIdentifier": ""
}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteHsmConfiguration



```js
amazonaws_redshift.DeleteHsmConfiguration({
  "HsmConfigurationIdentifier": ""
}, context)
```

#### Input
* input `object`
  * HsmConfigurationIdentifier **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteSnapshotCopyGrant



```js
amazonaws_redshift.DeleteSnapshotCopyGrant({
  "SnapshotCopyGrantName": ""
}, context)
```

#### Input
* input `object`
  * SnapshotCopyGrantName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_redshift.DeleteTags({
  "ResourceName": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceName **required** [String](#string)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*

### DescribeClusterParameterGroups



```js
amazonaws_redshift.DescribeClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [ClusterParameterGroupsMessage](#clusterparametergroupsmessage)

### DescribeClusterParameters



```js
amazonaws_redshift.DescribeClusterParameters({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupName **required** [String](#string)
  * Source [String](#string)

#### Output
* output [ClusterParameterGroupDetails](#clusterparametergroupdetails)

### DescribeClusterSecurityGroups



```js
amazonaws_redshift.DescribeClusterSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterSecurityGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [ClusterSecurityGroupMessage](#clustersecuritygroupmessage)

### DescribeClusterSnapshots



```js
amazonaws_redshift.DescribeClusterSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier [String](#string)
  * EndTime [TStamp](#tstamp)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OwnerAccount [String](#string)
  * SnapshotIdentifier [String](#string)
  * SnapshotType [String](#string)
  * StartTime [TStamp](#tstamp)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [SnapshotMessage](#snapshotmessage)

### DescribeClusterSubnetGroups



```js
amazonaws_redshift.DescribeClusterSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterSubnetGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [ClusterSubnetGroupMessage](#clustersubnetgroupmessage)

### DescribeClusterVersions



```js
amazonaws_redshift.DescribeClusterVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterParameterGroupFamily [String](#string)
  * ClusterVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [ClusterVersionsMessage](#clusterversionsmessage)

### DescribeClusters



```js
amazonaws_redshift.DescribeClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [ClustersMessage](#clustersmessage)

### DescribeDefaultClusterParameters



```js
amazonaws_redshift.DescribeDefaultClusterParameters({
  "ParameterGroupFamily": ""
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupFamily **required** [String](#string)

#### Output
* output [DescribeDefaultClusterParametersResult](#describedefaultclusterparametersresult)

### DescribeEventCategories



```js
amazonaws_redshift.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType [String](#string)

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventSubscriptions



```js
amazonaws_redshift.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SubscriptionName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEvents



```js
amazonaws_redshift.DescribeEvents({}, context)
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

### DescribeHsmClientCertificates



```js
amazonaws_redshift.DescribeHsmClientCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * HsmClientCertificateIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [HsmClientCertificateMessage](#hsmclientcertificatemessage)

### DescribeHsmConfigurations



```js
amazonaws_redshift.DescribeHsmConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * HsmConfigurationIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [HsmConfigurationMessage](#hsmconfigurationmessage)

### DescribeLoggingStatus



```js
amazonaws_redshift.DescribeLoggingStatus({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [LoggingStatus](#loggingstatus)

### DescribeOrderableClusterOptions



```js
amazonaws_redshift.DescribeOrderableClusterOptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * NodeType [String](#string)

#### Output
* output [OrderableClusterOptionsMessage](#orderableclusteroptionsmessage)

### DescribeReservedNodeOfferings



```js
amazonaws_redshift.DescribeReservedNodeOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReservedNodeOfferingId [String](#string)

#### Output
* output [ReservedNodeOfferingsMessage](#reservednodeofferingsmessage)

### DescribeReservedNodes



```js
amazonaws_redshift.DescribeReservedNodes({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReservedNodeId [String](#string)

#### Output
* output [ReservedNodesMessage](#reservednodesmessage)

### DescribeResize



```js
amazonaws_redshift.DescribeResize({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [ResizeProgressMessage](#resizeprogressmessage)

### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```

#### Input
* input `object`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotCopyGrantName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [SnapshotCopyGrantMessage](#snapshotcopygrantmessage)

### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TableRestoreRequestId [String](#string)

#### Output
* output [TableRestoreStatusMessage](#tablerestorestatusmessage)

### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```

#### Input
* input `object`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ResourceName [String](#string)
  * ResourceType [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

#### Output
* output [TaggedResourceListMessage](#taggedresourcelistmessage)

### DisableLogging



```js
amazonaws_redshift.DisableLogging({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [LoggingStatus](#loggingstatus)

### DisableSnapshotCopy



```js
amazonaws_redshift.DisableSnapshotCopy({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [DisableSnapshotCopyResult](#disablesnapshotcopyresult)

### EnableLogging



```js
amazonaws_redshift.EnableLogging({
  "ClusterIdentifier": "",
  "BucketName": ""
}, context)
```

#### Input
* input `object`
  * BucketName **required** [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * S3KeyPrefix [String](#string)

#### Output
* output [LoggingStatus](#loggingstatus)

### EnableSnapshotCopy



```js
amazonaws_redshift.EnableSnapshotCopy({
  "ClusterIdentifier": "",
  "DestinationRegion": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)
  * DestinationRegion **required** [String](#string)
  * RetentionPeriod [IntegerOptional](#integeroptional)
  * SnapshotCopyGrantName [String](#string)

#### Output
* output [EnableSnapshotCopyResult](#enablesnapshotcopyresult)

### GetClusterCredentials



```js
amazonaws_redshift.GetClusterCredentials({
  "DbUser": "",
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AutoCreate [BooleanOptional](#booleanoptional)
  * ClusterIdentifier **required** [String](#string)
  * DbGroups [DbGroupList](#dbgrouplist)
  * DbName [String](#string)
  * DbUser **required** [String](#string)
  * DurationSeconds [IntegerOptional](#integeroptional)

#### Output
* output [ClusterCredentials](#clustercredentials)

### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * ElasticIp [String](#string)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * MasterUserPassword [String](#string)
  * NewClusterIdentifier [String](#string)
  * NodeType [String](#string)
  * NumberOfNodes [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [ModifyClusterResult](#modifyclusterresult)

### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AddIamRoles [IamRoleArnList](#iamrolearnlist)
  * ClusterIdentifier **required** [String](#string)
  * RemoveIamRoles [IamRoleArnList](#iamrolearnlist)

#### Output
* output [ModifyClusterIamRolesResult](#modifyclusteriamrolesresult)

### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({
  "ParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

#### Output
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({
  "ClusterSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required** [String](#string)
  * Description [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [ModifyClusterSubnetGroupResult](#modifyclustersubnetgroupresult)

### ModifyEventSubscription



```js
amazonaws_redshift.ModifyEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Severity [String](#string)
  * SnsTopicArn [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({
  "ClusterIdentifier": "",
  "RetentionPeriod": 0
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)
  * RetentionPeriod **required** [Integer](#integer)

#### Output
* output [ModifySnapshotCopyRetentionPeriodResult](#modifysnapshotcopyretentionperiodresult)

### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({
  "ReservedNodeOfferingId": ""
}, context)
```

#### Input
* input `object`
  * NodeCount [IntegerOptional](#integeroptional)
  * ReservedNodeOfferingId **required** [String](#string)

#### Output
* output [PurchaseReservedNodeOfferingResult](#purchasereservednodeofferingresult)

### RebootCluster



```js
amazonaws_redshift.RebootCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [RebootClusterResult](#rebootclusterresult)

### ResetClusterParameterGroup



```js
amazonaws_redshift.ResetClusterParameterGroup({
  "ParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

#### Output
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({
  "ClusterIdentifier": "",
  "SnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * AdditionalInfo [String](#string)
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * AvailabilityZone [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterSubnetGroupName [String](#string)
  * ElasticIp [String](#string)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * IamRoles [IamRoleArnList](#iamrolearnlist)
  * KmsKeyId [String](#string)
  * NodeType [String](#string)
  * OwnerAccount [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [RestoreFromClusterSnapshotResult](#restorefromclustersnapshotresult)

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

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)
  * NewTableName **required** [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * SourceDatabaseName **required** [String](#string)
  * SourceSchemaName [String](#string)
  * SourceTableName **required** [String](#string)
  * TargetDatabaseName [String](#string)
  * TargetSchemaName [String](#string)

#### Output
* output [RestoreTableFromClusterSnapshotResult](#restoretablefromclustersnapshotresult)

### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * CIDRIP [String](#string)
  * ClusterSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

#### Output
* output [RevokeClusterSecurityGroupIngressResult](#revokeclustersecuritygroupingressresult)

### RevokeSnapshotAccess



```js
amazonaws_redshift.RevokeSnapshotAccess({
  "SnapshotIdentifier": "",
  "AccountWithRestoreAccess": ""
}, context)
```

#### Input
* input `object`
  * AccountWithRestoreAccess **required** [String](#string)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

#### Output
* output [RevokeSnapshotAccessResult](#revokesnapshotaccessresult)

### RotateEncryptionKey



```js
amazonaws_redshift.RotateEncryptionKey({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** [String](#string)

#### Output
* output [RotateEncryptionKeyResult](#rotateencryptionkeyresult)



## Definitions

### AccessToSnapshotDeniedFault
* AccessToSnapshotDeniedFault `object`: The owner of the specified snapshot has not authorized your account to access the snapshot.

### AccountWithRestoreAccess
* AccountWithRestoreAccess `object`: Describes an AWS customer account authorized to restore a snapshot.
  * AccountAlias [String](#string)
  * AccountId [String](#string)

### AccountsWithRestoreAccessList
* AccountsWithRestoreAccessList `array`
  * items [AccountWithRestoreAccess](#accountwithrestoreaccess)

### AuthorizationAlreadyExistsFault
* AuthorizationAlreadyExistsFault `object`: The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.

### AuthorizationNotFoundFault
* AuthorizationNotFoundFault `object`: The specified CIDR IP range or EC2 security group is not authorized for the specified cluster security group.

### AuthorizationQuotaExceededFault
* AuthorizationQuotaExceededFault `object`: The authorization quota for the cluster security group has been reached.

### AuthorizeClusterSecurityGroupIngressMessage
* AuthorizeClusterSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP [String](#string)
  * ClusterSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

### AuthorizeClusterSecurityGroupIngressResult
* AuthorizeClusterSecurityGroupIngressResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### AuthorizeSnapshotAccessMessage
* AuthorizeSnapshotAccessMessage `object`: <p/>
  * AccountWithRestoreAccess **required** [String](#string)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

### AuthorizeSnapshotAccessResult
* AuthorizeSnapshotAccessResult `object`
  * Snapshot [Snapshot](#snapshot)

### AvailabilityZone
* AvailabilityZone `object`: Describes an availability zone.
  * Name [String](#string)

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### BucketNotFoundFault
* BucketNotFoundFault `object`: Could not find the specified S3 bucket.

### Cluster
* Cluster `object`: Describes a cluster.
  * AllowVersionUpgrade [Boolean](#boolean)
  * AutomatedSnapshotRetentionPeriod [Integer](#integer)
  * AvailabilityZone [String](#string)
  * ClusterCreateTime [TStamp](#tstamp)
  * ClusterIdentifier [String](#string)
  * ClusterNodes [ClusterNodesList](#clusternodeslist)
  * ClusterParameterGroups [ClusterParameterGroupStatusList](#clusterparametergroupstatuslist)
  * ClusterPublicKey [String](#string)
  * ClusterRevisionNumber [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupMembershipList](#clustersecuritygroupmembershiplist)
  * ClusterSnapshotCopyStatus [ClusterSnapshotCopyStatus](#clustersnapshotcopystatus)
  * ClusterStatus [String](#string)
  * ClusterSubnetGroupName [String](#string)
  * ClusterVersion [String](#string)
  * DBName [String](#string)
  * ElasticIpStatus [ElasticIpStatus](#elasticipstatus)
  * Encrypted [Boolean](#boolean)
  * Endpoint [Endpoint](#endpoint)
  * EnhancedVpcRouting [Boolean](#boolean)
  * HsmStatus [HsmStatus](#hsmstatus)
  * IamRoles [ClusterIamRoleList](#clusteriamrolelist)
  * KmsKeyId [String](#string)
  * MasterUsername [String](#string)
  * ModifyStatus [String](#string)
  * NodeType [String](#string)
  * NumberOfNodes [Integer](#integer)
  * PendingModifiedValues [PendingModifiedValues](#pendingmodifiedvalues)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [Boolean](#boolean)
  * RestoreStatus [RestoreStatus](#restorestatus)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)
  * VpcSecurityGroups [VpcSecurityGroupMembershipList](#vpcsecuritygroupmembershiplist)

### ClusterAlreadyExistsFault
* ClusterAlreadyExistsFault `object`: The account already has a cluster with the given identifier.

### ClusterCredentials
* ClusterCredentials `object`: Temporary credentials with authorization to log on to an Amazon Redshift database. 
  * DbPassword [SensitiveString](#sensitivestring)
  * DbUser [String](#string)
  * Expiration [TStamp](#tstamp)

### ClusterIamRole
* ClusterIamRole `object`: An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services.
  * ApplyStatus [String](#string)
  * IamRoleArn [String](#string)

### ClusterIamRoleList
* ClusterIamRoleList `array`
  * items [ClusterIamRole](#clusteriamrole)

### ClusterList
* ClusterList `array`
  * items [Cluster](#cluster)

### ClusterNode
* ClusterNode `object`: The identifier of a node in a cluster.
  * NodeRole [String](#string)
  * PrivateIPAddress [String](#string)
  * PublicIPAddress [String](#string)

### ClusterNodesList
* ClusterNodesList `array`
  * items [ClusterNode](#clusternode)

### ClusterNotFoundFault
* ClusterNotFoundFault `object`: The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. 

### ClusterParameterGroup
* ClusterParameterGroup `object`: Describes a parameter group.
  * Description [String](#string)
  * ParameterGroupFamily [String](#string)
  * ParameterGroupName [String](#string)
  * Tags [TagList](#taglist)

### ClusterParameterGroupAlreadyExistsFault
* ClusterParameterGroupAlreadyExistsFault `object`: A cluster parameter group with the same name already exists.

### ClusterParameterGroupDetails
* ClusterParameterGroupDetails `object`: Contains the output from the <a>DescribeClusterParameters</a> action. 
  * Marker [String](#string)
  * Parameters [ParametersList](#parameterslist)

### ClusterParameterGroupNameMessage
* ClusterParameterGroupNameMessage `object`: <p/>
  * ParameterGroupName [String](#string)
  * ParameterGroupStatus [String](#string)

### ClusterParameterGroupNotFoundFault
* ClusterParameterGroupNotFoundFault `object`: The parameter group name does not refer to an existing parameter group.

### ClusterParameterGroupQuotaExceededFault
* ClusterParameterGroupQuotaExceededFault `object`: The request would result in the user exceeding the allowed number of cluster parameter groups. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ClusterParameterGroupStatus
* ClusterParameterGroupStatus `object`: Describes the status of a parameter group.
  * ClusterParameterStatusList [ClusterParameterStatusList](#clusterparameterstatuslist)
  * ParameterApplyStatus [String](#string)
  * ParameterGroupName [String](#string)

### ClusterParameterGroupStatusList
* ClusterParameterGroupStatusList `array`
  * items [ClusterParameterGroupStatus](#clusterparametergroupstatus)

### ClusterParameterGroupsMessage
* ClusterParameterGroupsMessage `object`: Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
  * Marker [String](#string)
  * ParameterGroups [ParameterGroupList](#parametergrouplist)

### ClusterParameterStatus
* ClusterParameterStatus `object`: Describes the status of a parameter group.
  * ParameterApplyErrorDescription [String](#string)
  * ParameterApplyStatus [String](#string)
  * ParameterName [String](#string)

### ClusterParameterStatusList
* ClusterParameterStatusList `array`
  * items [ClusterParameterStatus](#clusterparameterstatus)

### ClusterQuotaExceededFault
* ClusterQuotaExceededFault `object`: The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ClusterSecurityGroup
* ClusterSecurityGroup `object`: Describes a security group.
  * ClusterSecurityGroupName [String](#string)
  * Description [String](#string)
  * EC2SecurityGroups [EC2SecurityGroupList](#ec2securitygrouplist)
  * IPRanges [IPRangeList](#iprangelist)
  * Tags [TagList](#taglist)

### ClusterSecurityGroupAlreadyExistsFault
* ClusterSecurityGroupAlreadyExistsFault `object`: A cluster security group with the same name already exists.

### ClusterSecurityGroupMembership
* ClusterSecurityGroupMembership `object`: Describes a cluster security group.
  * ClusterSecurityGroupName [String](#string)
  * Status [String](#string)

### ClusterSecurityGroupMembershipList
* ClusterSecurityGroupMembershipList `array`
  * items [ClusterSecurityGroupMembership](#clustersecuritygroupmembership)

### ClusterSecurityGroupMessage
* ClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroups [ClusterSecurityGroups](#clustersecuritygroups)
  * Marker [String](#string)

### ClusterSecurityGroupNameList
* ClusterSecurityGroupNameList `array`
  * items [String](#string)

### ClusterSecurityGroupNotFoundFault
* ClusterSecurityGroupNotFoundFault `object`: The cluster security group name does not refer to an existing cluster security group.

### ClusterSecurityGroupQuotaExceededFault
* ClusterSecurityGroupQuotaExceededFault `object`: The request would result in the user exceeding the allowed number of cluster security groups. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ClusterSecurityGroups
* ClusterSecurityGroups `array`
  * items [ClusterSecurityGroup](#clustersecuritygroup)

### ClusterSnapshotAlreadyExistsFault
* ClusterSnapshotAlreadyExistsFault `object`: The value specified as a snapshot identifier is already used by an existing snapshot.

### ClusterSnapshotCopyStatus
* ClusterSnapshotCopyStatus `object`: Returns the destination region and retention period that are configured for cross-region snapshot copy.
  * DestinationRegion [String](#string)
  * RetentionPeriod [Long](#long)
  * SnapshotCopyGrantName [String](#string)

### ClusterSnapshotNotFoundFault
* ClusterSnapshotNotFoundFault `object`: The snapshot identifier does not refer to an existing cluster snapshot.

### ClusterSnapshotQuotaExceededFault
* ClusterSnapshotQuotaExceededFault `object`: The request would result in the user exceeding the allowed number of cluster snapshots.

### ClusterSubnetGroup
* ClusterSubnetGroup `object`: Describes a subnet group.
  * ClusterSubnetGroupName [String](#string)
  * Description [String](#string)
  * SubnetGroupStatus [String](#string)
  * Subnets [SubnetList](#subnetlist)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### ClusterSubnetGroupAlreadyExistsFault
* ClusterSubnetGroupAlreadyExistsFault `object`: A <i>ClusterSubnetGroupName</i> is already used by an existing cluster subnet group. 

### ClusterSubnetGroupMessage
* ClusterSubnetGroupMessage `object`: Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
  * ClusterSubnetGroups [ClusterSubnetGroups](#clustersubnetgroups)
  * Marker [String](#string)

### ClusterSubnetGroupNotFoundFault
* ClusterSubnetGroupNotFoundFault `object`: The cluster subnet group name does not refer to an existing cluster subnet group.

### ClusterSubnetGroupQuotaExceededFault
* ClusterSubnetGroupQuotaExceededFault `object`: The request would result in user exceeding the allowed number of cluster subnet groups. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ClusterSubnetGroups
* ClusterSubnetGroups `array`
  * items [ClusterSubnetGroup](#clustersubnetgroup)

### ClusterSubnetQuotaExceededFault
* ClusterSubnetQuotaExceededFault `object`: The request would result in user exceeding the allowed number of subnets in a cluster subnet groups. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ClusterVersion
* ClusterVersion `object`: Describes a cluster version, including the parameter group family and description of the version.
  * ClusterParameterGroupFamily [String](#string)
  * ClusterVersion [String](#string)
  * Description [String](#string)

### ClusterVersionList
* ClusterVersionList `array`
  * items [ClusterVersion](#clusterversion)

### ClusterVersionsMessage
* ClusterVersionsMessage `object`: Contains the output from the <a>DescribeClusterVersions</a> action. 
  * ClusterVersions [ClusterVersionList](#clusterversionlist)
  * Marker [String](#string)

### ClustersMessage
* ClustersMessage `object`: Contains the output from the <a>DescribeClusters</a> action. 
  * Clusters [ClusterList](#clusterlist)
  * Marker [String](#string)

### CopyClusterSnapshotMessage
* CopyClusterSnapshotMessage `object`: <p/>
  * SourceSnapshotClusterIdentifier [String](#string)
  * SourceSnapshotIdentifier **required** [String](#string)
  * TargetSnapshotIdentifier **required** [String](#string)

### CopyClusterSnapshotResult
* CopyClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CopyToRegionDisabledFault
* CopyToRegionDisabledFault `object`: Cross-region snapshot copy was temporarily disabled. Try your request again.

### CreateClusterMessage
* CreateClusterMessage `object`: <p/>
  * AdditionalInfo [String](#string)
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * AvailabilityZone [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterSubnetGroupName [String](#string)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * DBName [String](#string)
  * ElasticIp [String](#string)
  * Encrypted [BooleanOptional](#booleanoptional)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * IamRoles [IamRoleArnList](#iamrolearnlist)
  * KmsKeyId [String](#string)
  * MasterUserPassword **required** [String](#string)
  * MasterUsername **required** [String](#string)
  * NodeType **required** [String](#string)
  * NumberOfNodes [IntegerOptional](#integeroptional)
  * Port [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### CreateClusterParameterGroupMessage
* CreateClusterParameterGroupMessage `object`: <p/>
  * Description **required** [String](#string)
  * ParameterGroupFamily **required** [String](#string)
  * ParameterGroupName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateClusterParameterGroupResult
* CreateClusterParameterGroupResult `object`
  * ClusterParameterGroup [ClusterParameterGroup](#clusterparametergroup)

### CreateClusterResult
* CreateClusterResult `object`
  * Cluster [Cluster](#cluster)

### CreateClusterSecurityGroupMessage
* CreateClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateClusterSecurityGroupResult
* CreateClusterSecurityGroupResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### CreateClusterSnapshotMessage
* CreateClusterSnapshotMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateClusterSnapshotResult
* CreateClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CreateClusterSubnetGroupMessage
* CreateClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required** [String](#string)
  * Description **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

### CreateClusterSubnetGroupResult
* CreateClusterSubnetGroupResult `object`
  * ClusterSubnetGroup [ClusterSubnetGroup](#clustersubnetgroup)

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Severity [String](#string)
  * SnsTopicArn **required** [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateEventSubscriptionResult
* CreateEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### CreateHsmClientCertificateMessage
* CreateHsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificateIdentifier **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateHsmClientCertificateResult
* CreateHsmClientCertificateResult `object`
  * HsmClientCertificate [HsmClientCertificate](#hsmclientcertificate)

### CreateHsmConfigurationMessage
* CreateHsmConfigurationMessage `object`: <p/>
  * Description **required** [String](#string)
  * HsmConfigurationIdentifier **required** [String](#string)
  * HsmIpAddress **required** [String](#string)
  * HsmPartitionName **required** [String](#string)
  * HsmPartitionPassword **required** [String](#string)
  * HsmServerPublicCertificate **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateHsmConfigurationResult
* CreateHsmConfigurationResult `object`
  * HsmConfiguration [HsmConfiguration](#hsmconfiguration)

### CreateSnapshotCopyGrantMessage
* CreateSnapshotCopyGrantMessage `object`: The result of the <code>CreateSnapshotCopyGrant</code> action.
  * KmsKeyId [String](#string)
  * SnapshotCopyGrantName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateSnapshotCopyGrantResult
* CreateSnapshotCopyGrantResult `object`
  * SnapshotCopyGrant [SnapshotCopyGrant](#snapshotcopygrant)

### CreateTagsMessage
* CreateTagsMessage `object`: Contains the output from the <code>CreateTags</code> action. 
  * ResourceName **required** [String](#string)
  * Tags **required** [TagList](#taglist)

### DbGroupList
* DbGroupList `array`
  * items [String](#string)

### DefaultClusterParameters
* DefaultClusterParameters `object`: Describes the default cluster parameters for a parameter group family.
  * Marker [String](#string)
  * ParameterGroupFamily [String](#string)
  * Parameters [ParametersList](#parameterslist)

### DeleteClusterMessage
* DeleteClusterMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)
  * FinalClusterSnapshotIdentifier [String](#string)
  * SkipFinalClusterSnapshot [Boolean](#boolean)

### DeleteClusterParameterGroupMessage
* DeleteClusterParameterGroupMessage `object`: <p/>
  * ParameterGroupName **required** [String](#string)

### DeleteClusterResult
* DeleteClusterResult `object`
  * Cluster [Cluster](#cluster)

### DeleteClusterSecurityGroupMessage
* DeleteClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroupName **required** [String](#string)

### DeleteClusterSnapshotMessage
* DeleteClusterSnapshotMessage `object`: <p/>
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

### DeleteClusterSnapshotResult
* DeleteClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### DeleteClusterSubnetGroupMessage
* DeleteClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required** [String](#string)

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required** [String](#string)

### DeleteHsmClientCertificateMessage
* DeleteHsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificateIdentifier **required** [String](#string)

### DeleteHsmConfigurationMessage
* DeleteHsmConfigurationMessage `object`: <p/>
  * HsmConfigurationIdentifier **required** [String](#string)

### DeleteSnapshotCopyGrantMessage
* DeleteSnapshotCopyGrantMessage `object`: The result of the <code>DeleteSnapshotCopyGrant</code> action.
  * SnapshotCopyGrantName **required** [String](#string)

### DeleteTagsMessage
* DeleteTagsMessage `object`: Contains the output from the <code>DeleteTags</code> action. 
  * ResourceName **required** [String](#string)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### DependentServiceRequestThrottlingFault
* DependentServiceRequestThrottlingFault `object`: The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.

### DependentServiceUnavailableFault
* DependentServiceUnavailableFault `object`: Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.

### DescribeClusterParameterGroupsMessage
* DescribeClusterParameterGroupsMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeClusterParametersMessage
* DescribeClusterParametersMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupName **required** [String](#string)
  * Source [String](#string)

### DescribeClusterSecurityGroupsMessage
* DescribeClusterSecurityGroupsMessage `object`: <p/>
  * ClusterSecurityGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeClusterSnapshotsMessage
* DescribeClusterSnapshotsMessage `object`: <p/>
  * ClusterIdentifier [String](#string)
  * EndTime [TStamp](#tstamp)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * OwnerAccount [String](#string)
  * SnapshotIdentifier [String](#string)
  * SnapshotType [String](#string)
  * StartTime [TStamp](#tstamp)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeClusterSubnetGroupsMessage
* DescribeClusterSubnetGroupsMessage `object`: <p/>
  * ClusterSubnetGroupName [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeClusterVersionsMessage
* DescribeClusterVersionsMessage `object`: <p/>
  * ClusterParameterGroupFamily [String](#string)
  * ClusterVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeClustersMessage
* DescribeClustersMessage `object`: <p/>
  * ClusterIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeDefaultClusterParametersMessage
* DescribeDefaultClusterParametersMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ParameterGroupFamily **required** [String](#string)

### DescribeDefaultClusterParametersResult
* DescribeDefaultClusterParametersResult `object`
  * DefaultClusterParameters [DefaultClusterParameters](#defaultclusterparameters)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: <p/>
  * SourceType [String](#string)

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SubscriptionName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeEventsMessage
* DescribeEventsMessage `object`: <p/>
  * Duration [IntegerOptional](#integeroptional)
  * EndTime [TStamp](#tstamp)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)
  * StartTime [TStamp](#tstamp)

### DescribeHsmClientCertificatesMessage
* DescribeHsmClientCertificatesMessage `object`: <p/>
  * HsmClientCertificateIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeHsmConfigurationsMessage
* DescribeHsmConfigurationsMessage `object`: <p/>
  * HsmConfigurationIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeLoggingStatusMessage
* DescribeLoggingStatusMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### DescribeOrderableClusterOptionsMessage
* DescribeOrderableClusterOptionsMessage `object`: <p/>
  * ClusterVersion [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * NodeType [String](#string)

### DescribeReservedNodeOfferingsMessage
* DescribeReservedNodeOfferingsMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReservedNodeOfferingId [String](#string)

### DescribeReservedNodesMessage
* DescribeReservedNodesMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReservedNodeId [String](#string)

### DescribeResizeMessage
* DescribeResizeMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### DescribeSnapshotCopyGrantsMessage
* DescribeSnapshotCopyGrantsMessage `object`: The result of the <code>DescribeSnapshotCopyGrants</code> action.
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SnapshotCopyGrantName [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DescribeTableRestoreStatusMessage
* DescribeTableRestoreStatusMessage `object`: <p/>
  * ClusterIdentifier [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * TableRestoreRequestId [String](#string)

### DescribeTagsMessage
* DescribeTagsMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ResourceName [String](#string)
  * ResourceType [String](#string)
  * TagKeys [TagKeyList](#tagkeylist)
  * TagValues [TagValueList](#tagvaluelist)

### DisableLoggingMessage
* DisableLoggingMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### DisableSnapshotCopyMessage
* DisableSnapshotCopyMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### DisableSnapshotCopyResult
* DisableSnapshotCopyResult `object`
  * Cluster [Cluster](#cluster)

### Double
* Double `number`

### DoubleOptional
* DoubleOptional `number`

### EC2SecurityGroup
* EC2SecurityGroup `object`: Describes an Amazon EC2 security group.
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)
  * Status [String](#string)
  * Tags [TagList](#taglist)

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items [EC2SecurityGroup](#ec2securitygroup)

### ElasticIpStatus
* ElasticIpStatus `object`: Describes the status of the elastic IP (EIP) address.
  * ElasticIp [String](#string)
  * Status [String](#string)

### EnableLoggingMessage
* EnableLoggingMessage `object`: <p/>
  * BucketName **required** [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * S3KeyPrefix [String](#string)

### EnableSnapshotCopyMessage
* EnableSnapshotCopyMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)
  * DestinationRegion **required** [String](#string)
  * RetentionPeriod [IntegerOptional](#integeroptional)
  * SnapshotCopyGrantName [String](#string)

### EnableSnapshotCopyResult
* EnableSnapshotCopyResult `object`
  * Cluster [Cluster](#cluster)

### Endpoint
* Endpoint `object`: Describes a connection endpoint.
  * Address [String](#string)
  * Port [Integer](#integer)

### Event
* Event `object`: Describes an event.
  * Date [TStamp](#tstamp)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * EventId [String](#string)
  * Message [String](#string)
  * Severity [String](#string)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)

### EventCategoriesList
* EventCategoriesList `array`
  * items [String](#string)

### EventCategoriesMap
* EventCategoriesMap `object`: Describes event categories.
  * Events [EventInfoMapList](#eventinfomaplist)
  * SourceType [String](#string)

### EventCategoriesMapList
* EventCategoriesMapList `array`
  * items [EventCategoriesMap](#eventcategoriesmap)

### EventCategoriesMessage
* EventCategoriesMessage `object`: <p/>
  * EventCategoriesMapList [EventCategoriesMapList](#eventcategoriesmaplist)

### EventInfoMap
* EventInfoMap `object`: Describes event information.
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * EventDescription [String](#string)
  * EventId [String](#string)
  * Severity [String](#string)

### EventInfoMapList
* EventInfoMapList `array`
  * items [EventInfoMap](#eventinfomap)

### EventList
* EventList `array`
  * items [Event](#event)

### EventSubscription
* EventSubscription `object`: Describes event subscriptions.
  * CustSubscriptionId [String](#string)
  * CustomerAwsId [String](#string)
  * Enabled [Boolean](#boolean)
  * EventCategoriesList [EventCategoriesList](#eventcategorieslist)
  * Severity [String](#string)
  * SnsTopicArn [String](#string)
  * SourceIdsList [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * Status [String](#string)
  * SubscriptionCreationTime [TStamp](#tstamp)
  * Tags [TagList](#taglist)

### EventSubscriptionQuotaExceededFault
* EventSubscriptionQuotaExceededFault `object`: The request would exceed the allowed number of event subscriptions for this account. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items [EventSubscription](#eventsubscription)

### EventSubscriptionsMessage
* EventSubscriptionsMessage `object`: <p/>
  * EventSubscriptionsList [EventSubscriptionsList](#eventsubscriptionslist)
  * Marker [String](#string)

### EventsMessage
* EventsMessage `object`: <p/>
  * Events [EventList](#eventlist)
  * Marker [String](#string)

### GetClusterCredentialsMessage
* GetClusterCredentialsMessage `object`: The request parameters to get cluster credentials.
  * AutoCreate [BooleanOptional](#booleanoptional)
  * ClusterIdentifier **required** [String](#string)
  * DbGroups [DbGroupList](#dbgrouplist)
  * DbName [String](#string)
  * DbUser **required** [String](#string)
  * DurationSeconds [IntegerOptional](#integeroptional)

### HsmClientCertificate
* HsmClientCertificate `object`: Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
  * HsmClientCertificateIdentifier [String](#string)
  * HsmClientCertificatePublicKey [String](#string)
  * Tags [TagList](#taglist)

### HsmClientCertificateAlreadyExistsFault
* HsmClientCertificateAlreadyExistsFault `object`: There is already an existing Amazon Redshift HSM client certificate with the specified identifier.

### HsmClientCertificateList
* HsmClientCertificateList `array`
  * items [HsmClientCertificate](#hsmclientcertificate)

### HsmClientCertificateMessage
* HsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificates [HsmClientCertificateList](#hsmclientcertificatelist)
  * Marker [String](#string)

### HsmClientCertificateNotFoundFault
* HsmClientCertificateNotFoundFault `object`: There is no Amazon Redshift HSM client certificate with the specified identifier.

### HsmClientCertificateQuotaExceededFault
* HsmClientCertificateQuotaExceededFault `object`: The quota for HSM client certificates has been reached. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### HsmConfiguration
* HsmConfiguration `object`: Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
  * Description [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * HsmIpAddress [String](#string)
  * HsmPartitionName [String](#string)
  * Tags [TagList](#taglist)

### HsmConfigurationAlreadyExistsFault
* HsmConfigurationAlreadyExistsFault `object`: There is already an existing Amazon Redshift HSM configuration with the specified identifier.

### HsmConfigurationList
* HsmConfigurationList `array`
  * items [HsmConfiguration](#hsmconfiguration)

### HsmConfigurationMessage
* HsmConfigurationMessage `object`: <p/>
  * HsmConfigurations [HsmConfigurationList](#hsmconfigurationlist)
  * Marker [String](#string)

### HsmConfigurationNotFoundFault
* HsmConfigurationNotFoundFault `object`: There is no Amazon Redshift HSM configuration with the specified identifier.

### HsmConfigurationQuotaExceededFault
* HsmConfigurationQuotaExceededFault `object`: The quota for HSM configurations has been reached. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### HsmStatus
* HsmStatus `object`: Describes the status of changes to HSM settings.
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * Status [String](#string)

### IPRange
* IPRange `object`: Describes an IP range used in a security group.
  * CIDRIP [String](#string)
  * Status [String](#string)
  * Tags [TagList](#taglist)

### IPRangeList
* IPRangeList `array`
  * items [IPRange](#iprange)

### IamRoleArnList
* IamRoleArnList `array`
  * items [String](#string)

### ImportTablesCompleted
* ImportTablesCompleted `array`
  * items [String](#string)

### ImportTablesInProgress
* ImportTablesInProgress `array`
  * items [String](#string)

### ImportTablesNotStarted
* ImportTablesNotStarted `array`
  * items [String](#string)

### InProgressTableRestoreQuotaExceededFault
* InProgressTableRestoreQuotaExceededFault `object`: You have exceeded the allowed number of table restore requests. Wait for your current table restore requests to complete before making a new request.

### IncompatibleOrderableOptions
* IncompatibleOrderableOptions `object`: The specified options are incompatible.

### InsufficientClusterCapacityFault
* InsufficientClusterCapacityFault `object`: The number of nodes specified exceeds the allotted capacity of the cluster.

### InsufficientS3BucketPolicyFault
* InsufficientS3BucketPolicyFault `object`: The cluster does not have read bucket or put object permissions on the S3 bucket specified when enabling logging.

### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidClusterParameterGroupStateFault
* InvalidClusterParameterGroupStateFault `object`: The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.

### InvalidClusterSecurityGroupStateFault
* InvalidClusterSecurityGroupStateFault `object`: The state of the cluster security group is not <code>available</code>. 

### InvalidClusterSnapshotStateFault
* InvalidClusterSnapshotStateFault `object`: The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. 

### InvalidClusterStateFault
* InvalidClusterStateFault `object`: The specified cluster is not in the <code>available</code> state. 

### InvalidClusterSubnetGroupStateFault
* InvalidClusterSubnetGroupStateFault `object`: The cluster subnet group cannot be deleted because it is in use.

### InvalidClusterSubnetStateFault
* InvalidClusterSubnetStateFault `object`: The state of the subnet is invalid.

### InvalidElasticIpFault
* InvalidElasticIpFault `object`: The Elastic IP (EIP) is invalid or cannot be found.

### InvalidHsmClientCertificateStateFault
* InvalidHsmClientCertificateStateFault `object`: The specified HSM client certificate is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.

### InvalidHsmConfigurationStateFault
* InvalidHsmConfigurationStateFault `object`: The specified HSM configuration is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.

### InvalidRestoreFault
* InvalidRestoreFault `object`: The restore is invalid.

### InvalidS3BucketNameFault
* InvalidS3BucketNameFault `object`: The S3 bucket name is invalid. For more information about naming rules, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3) Developer Guide.

### InvalidS3KeyPrefixFault
* InvalidS3KeyPrefixFault `object`: The string specified for the logging S3 key prefix does not comply with the documented constraints.

### InvalidSnapshotCopyGrantStateFault
* InvalidSnapshotCopyGrantStateFault `object`: The snapshot copy grant can't be deleted because it is used by one or more clusters.

### InvalidSubnet
* InvalidSubnet `object`: The requested subnet is not valid, or not all of the subnets are in the same VPC.

### InvalidSubscriptionStateFault
* InvalidSubscriptionStateFault `object`: The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.

### InvalidTableRestoreArgumentFault
* InvalidTableRestoreArgumentFault `object`: The value specified for the <code>sourceDatabaseName</code>, <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a combination of these, doesn't exist in the snapshot.

### InvalidTagFault
* InvalidTagFault `object`: The tag is invalid.

### InvalidVPCNetworkStateFault
* InvalidVPCNetworkStateFault `object`: The cluster subnet group does not cover all Availability Zones.

### LimitExceededFault
* LimitExceededFault `object`: The encryption key has exceeded its grant limit in AWS KMS.

### LoggingStatus
* LoggingStatus `object`: Describes the status of logging for a cluster.
  * BucketName [String](#string)
  * LastFailureMessage [String](#string)
  * LastFailureTime [TStamp](#tstamp)
  * LastSuccessfulDeliveryTime [TStamp](#tstamp)
  * LoggingEnabled [Boolean](#boolean)
  * S3KeyPrefix [String](#string)

### Long
* Long `integer`

### LongOptional
* LongOptional `integer`

### ModifyClusterIamRolesMessage
* ModifyClusterIamRolesMessage `object`: <p/>
  * AddIamRoles [IamRoleArnList](#iamrolearnlist)
  * ClusterIdentifier **required** [String](#string)
  * RemoveIamRoles [IamRoleArnList](#iamrolearnlist)

### ModifyClusterIamRolesResult
* ModifyClusterIamRolesResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterMessage
* ModifyClusterMessage `object`: <p/>
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * ElasticIp [String](#string)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * MasterUserPassword [String](#string)
  * NewClusterIdentifier [String](#string)
  * NodeType [String](#string)
  * NumberOfNodes [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### ModifyClusterParameterGroupMessage
* ModifyClusterParameterGroupMessage `object`: <p/>
  * ParameterGroupName **required** [String](#string)
  * Parameters **required** [ParametersList](#parameterslist)

### ModifyClusterResult
* ModifyClusterResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterSubnetGroupMessage
* ModifyClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required** [String](#string)
  * Description [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

### ModifyClusterSubnetGroupResult
* ModifyClusterSubnetGroupResult `object`
  * ClusterSubnetGroup [ClusterSubnetGroup](#clustersubnetgroup)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Severity [String](#string)
  * SnsTopicArn [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)

### ModifyEventSubscriptionResult
* ModifyEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### ModifySnapshotCopyRetentionPeriodMessage
* ModifySnapshotCopyRetentionPeriodMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)
  * RetentionPeriod **required** [Integer](#integer)

### ModifySnapshotCopyRetentionPeriodResult
* ModifySnapshotCopyRetentionPeriodResult `object`
  * Cluster [Cluster](#cluster)

### NumberOfNodesPerClusterLimitExceededFault
* NumberOfNodesPerClusterLimitExceededFault `object`: The operation would exceed the number of nodes allowed for a cluster.

### NumberOfNodesQuotaExceededFault
* NumberOfNodesQuotaExceededFault `object`: The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### OrderableClusterOption
* OrderableClusterOption `object`: Describes an orderable cluster option.
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * NodeType [String](#string)

### OrderableClusterOptionsList
* OrderableClusterOptionsList `array`
  * items [OrderableClusterOption](#orderableclusteroption)

### OrderableClusterOptionsMessage
* OrderableClusterOptionsMessage `object`: Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
  * Marker [String](#string)
  * OrderableClusterOptions [OrderableClusterOptionsList](#orderableclusteroptionslist)

### Parameter
* Parameter `object`: Describes a parameter in a cluster parameter group.
  * AllowedValues [String](#string)
  * ApplyType [ParameterApplyType](#parameterapplytype)
  * DataType [String](#string)
  * Description [String](#string)
  * IsModifiable [Boolean](#boolean)
  * MinimumEngineVersion [String](#string)
  * ParameterName [String](#string)
  * ParameterValue [String](#string)
  * Source [String](#string)

### ParameterApplyType
* ParameterApplyType `string` (values: static, dynamic)

### ParameterGroupList
* ParameterGroupList `array`
  * items [ClusterParameterGroup](#clusterparametergroup)

### ParametersList
* ParametersList `array`
  * items [Parameter](#parameter)

### PendingModifiedValues
* PendingModifiedValues `object`: Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * ClusterIdentifier [String](#string)
  * ClusterType [String](#string)
  * ClusterVersion [String](#string)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * MasterUserPassword [String](#string)
  * NodeType [String](#string)
  * NumberOfNodes [IntegerOptional](#integeroptional)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)

### PurchaseReservedNodeOfferingMessage
* PurchaseReservedNodeOfferingMessage `object`: <p/>
  * NodeCount [IntegerOptional](#integeroptional)
  * ReservedNodeOfferingId **required** [String](#string)

### PurchaseReservedNodeOfferingResult
* PurchaseReservedNodeOfferingResult `object`
  * ReservedNode [ReservedNode](#reservednode)

### RebootClusterMessage
* RebootClusterMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### RebootClusterResult
* RebootClusterResult `object`
  * Cluster [Cluster](#cluster)

### RecurringCharge
* RecurringCharge `object`: Describes a recurring charge.
  * RecurringChargeAmount [Double](#double)
  * RecurringChargeFrequency [String](#string)

### RecurringChargeList
* RecurringChargeList `array`
  * items [RecurringCharge](#recurringcharge)

### ReservedNode
* ReservedNode `object`: Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. 
  * CurrencyCode [String](#string)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * NodeCount [Integer](#integer)
  * NodeType [String](#string)
  * OfferingType [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedNodeId [String](#string)
  * ReservedNodeOfferingId [String](#string)
  * StartTime [TStamp](#tstamp)
  * State [String](#string)
  * UsagePrice [Double](#double)

### ReservedNodeAlreadyExistsFault
* ReservedNodeAlreadyExistsFault `object`: User already has a reservation with the given identifier.

### ReservedNodeList
* ReservedNodeList `array`
  * items [ReservedNode](#reservednode)

### ReservedNodeNotFoundFault
* ReservedNodeNotFoundFault `object`: The specified reserved compute node not found.

### ReservedNodeOffering
* ReservedNodeOffering `object`: Describes a reserved node offering.
  * CurrencyCode [String](#string)
  * Duration [Integer](#integer)
  * FixedPrice [Double](#double)
  * NodeType [String](#string)
  * OfferingType [String](#string)
  * RecurringCharges [RecurringChargeList](#recurringchargelist)
  * ReservedNodeOfferingId [String](#string)
  * UsagePrice [Double](#double)

### ReservedNodeOfferingList
* ReservedNodeOfferingList `array`
  * items [ReservedNodeOffering](#reservednodeoffering)

### ReservedNodeOfferingNotFoundFault
* ReservedNodeOfferingNotFoundFault `object`: Specified offering does not exist.

### ReservedNodeOfferingsMessage
* ReservedNodeOfferingsMessage `object`: <p/>
  * Marker [String](#string)
  * ReservedNodeOfferings [ReservedNodeOfferingList](#reservednodeofferinglist)

### ReservedNodeQuotaExceededFault
* ReservedNodeQuotaExceededFault `object`: Request would exceed the user's compute node quota. For information about increasing your quota, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### ReservedNodesMessage
* ReservedNodesMessage `object`: <p/>
  * Marker [String](#string)
  * ReservedNodes [ReservedNodeList](#reservednodelist)

### ResetClusterParameterGroupMessage
* ResetClusterParameterGroupMessage `object`: <p/>
  * ParameterGroupName **required** [String](#string)
  * Parameters [ParametersList](#parameterslist)
  * ResetAllParameters [Boolean](#boolean)

### ResizeNotFoundFault
* ResizeNotFoundFault `object`: A resize operation for the specified cluster is not found.

### ResizeProgressMessage
* ResizeProgressMessage `object`: Describes the result of a cluster resize operation.
  * AvgResizeRateInMegaBytesPerSecond [DoubleOptional](#doubleoptional)
  * ElapsedTimeInSeconds [LongOptional](#longoptional)
  * EstimatedTimeToCompletionInSeconds [LongOptional](#longoptional)
  * ImportTablesCompleted [ImportTablesCompleted](#importtablescompleted)
  * ImportTablesInProgress [ImportTablesInProgress](#importtablesinprogress)
  * ImportTablesNotStarted [ImportTablesNotStarted](#importtablesnotstarted)
  * ProgressInMegaBytes [LongOptional](#longoptional)
  * Status [String](#string)
  * TargetClusterType [String](#string)
  * TargetNodeType [String](#string)
  * TargetNumberOfNodes [IntegerOptional](#integeroptional)
  * TotalResizeDataInMegaBytes [LongOptional](#longoptional)

### ResourceNotFoundFault
* ResourceNotFoundFault `object`: The resource could not be found.

### RestorableNodeTypeList
* RestorableNodeTypeList `array`
  * items [String](#string)

### RestoreFromClusterSnapshotMessage
* RestoreFromClusterSnapshotMessage `object`: <p/>
  * AdditionalInfo [String](#string)
  * AllowVersionUpgrade [BooleanOptional](#booleanoptional)
  * AutomatedSnapshotRetentionPeriod [IntegerOptional](#integeroptional)
  * AvailabilityZone [String](#string)
  * ClusterIdentifier **required** [String](#string)
  * ClusterParameterGroupName [String](#string)
  * ClusterSecurityGroups [ClusterSecurityGroupNameList](#clustersecuritygroupnamelist)
  * ClusterSubnetGroupName [String](#string)
  * ElasticIp [String](#string)
  * EnhancedVpcRouting [BooleanOptional](#booleanoptional)
  * HsmClientCertificateIdentifier [String](#string)
  * HsmConfigurationIdentifier [String](#string)
  * IamRoles [IamRoleArnList](#iamrolearnlist)
  * KmsKeyId [String](#string)
  * NodeType [String](#string)
  * OwnerAccount [String](#string)
  * Port [IntegerOptional](#integeroptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### RestoreFromClusterSnapshotResult
* RestoreFromClusterSnapshotResult `object`
  * Cluster [Cluster](#cluster)

### RestoreStatus
* RestoreStatus `object`: Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
  * CurrentRestoreRateInMegaBytesPerSecond [Double](#double)
  * ElapsedTimeInSeconds [Long](#long)
  * EstimatedTimeToCompletionInSeconds [Long](#long)
  * ProgressInMegaBytes [Long](#long)
  * SnapshotSizeInMegaBytes [Long](#long)
  * Status [String](#string)

### RestoreTableFromClusterSnapshotMessage
* RestoreTableFromClusterSnapshotMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)
  * NewTableName **required** [String](#string)
  * SnapshotIdentifier **required** [String](#string)
  * SourceDatabaseName **required** [String](#string)
  * SourceSchemaName [String](#string)
  * SourceTableName **required** [String](#string)
  * TargetDatabaseName [String](#string)
  * TargetSchemaName [String](#string)

### RestoreTableFromClusterSnapshotResult
* RestoreTableFromClusterSnapshotResult `object`
  * TableRestoreStatus [TableRestoreStatus](#tablerestorestatus)

### RevokeClusterSecurityGroupIngressMessage
* RevokeClusterSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP [String](#string)
  * ClusterSecurityGroupName **required** [String](#string)
  * EC2SecurityGroupName [String](#string)
  * EC2SecurityGroupOwnerId [String](#string)

### RevokeClusterSecurityGroupIngressResult
* RevokeClusterSecurityGroupIngressResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### RevokeSnapshotAccessMessage
* RevokeSnapshotAccessMessage `object`: <p/>
  * AccountWithRestoreAccess **required** [String](#string)
  * SnapshotClusterIdentifier [String](#string)
  * SnapshotIdentifier **required** [String](#string)

### RevokeSnapshotAccessResult
* RevokeSnapshotAccessResult `object`
  * Snapshot [Snapshot](#snapshot)

### RotateEncryptionKeyMessage
* RotateEncryptionKeyMessage `object`: <p/>
  * ClusterIdentifier **required** [String](#string)

### RotateEncryptionKeyResult
* RotateEncryptionKeyResult `object`
  * Cluster [Cluster](#cluster)

### SNSInvalidTopicFault
* SNSInvalidTopicFault `object`: Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.

### SNSNoAuthorizationFault
* SNSNoAuthorizationFault `object`: You do not have permission to publish to the specified Amazon SNS topic.

### SNSTopicArnNotFoundFault
* SNSTopicArnNotFoundFault `object`: An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.

### SensitiveString
* SensitiveString `string`

### Snapshot
* Snapshot `object`: Describes a snapshot.
  * AccountsWithRestoreAccess [AccountsWithRestoreAccessList](#accountswithrestoreaccesslist)
  * ActualIncrementalBackupSizeInMegaBytes [Double](#double)
  * AvailabilityZone [String](#string)
  * BackupProgressInMegaBytes [Double](#double)
  * ClusterCreateTime [TStamp](#tstamp)
  * ClusterIdentifier [String](#string)
  * ClusterVersion [String](#string)
  * CurrentBackupRateInMegaBytesPerSecond [Double](#double)
  * DBName [String](#string)
  * ElapsedTimeInSeconds [Long](#long)
  * Encrypted [Boolean](#boolean)
  * EncryptedWithHSM [Boolean](#boolean)
  * EnhancedVpcRouting [Boolean](#boolean)
  * EstimatedSecondsToCompletion [Long](#long)
  * KmsKeyId [String](#string)
  * MasterUsername [String](#string)
  * NodeType [String](#string)
  * NumberOfNodes [Integer](#integer)
  * OwnerAccount [String](#string)
  * Port [Integer](#integer)
  * RestorableNodeTypes [RestorableNodeTypeList](#restorablenodetypelist)
  * SnapshotCreateTime [TStamp](#tstamp)
  * SnapshotIdentifier [String](#string)
  * SnapshotType [String](#string)
  * SourceRegion [String](#string)
  * Status [String](#string)
  * Tags [TagList](#taglist)
  * TotalBackupSizeInMegaBytes [Double](#double)
  * VpcId [String](#string)

### SnapshotCopyAlreadyDisabledFault
* SnapshotCopyAlreadyDisabledFault `object`: The cluster already has cross-region snapshot copy disabled.

### SnapshotCopyAlreadyEnabledFault
* SnapshotCopyAlreadyEnabledFault `object`: The cluster already has cross-region snapshot copy enabled.

### SnapshotCopyDisabledFault
* SnapshotCopyDisabledFault `object`: Cross-region snapshot copy was temporarily disabled. Try your request again.

### SnapshotCopyGrant
* SnapshotCopyGrant `object`: <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
  * KmsKeyId [String](#string)
  * SnapshotCopyGrantName [String](#string)
  * Tags [TagList](#taglist)

### SnapshotCopyGrantAlreadyExistsFault
* SnapshotCopyGrantAlreadyExistsFault `object`: The snapshot copy grant can't be created because a grant with the same name already exists.

### SnapshotCopyGrantList
* SnapshotCopyGrantList `array`
  * items [SnapshotCopyGrant](#snapshotcopygrant)

### SnapshotCopyGrantMessage
* SnapshotCopyGrantMessage `object`: <p/>
  * Marker [String](#string)
  * SnapshotCopyGrants [SnapshotCopyGrantList](#snapshotcopygrantlist)

### SnapshotCopyGrantNotFoundFault
* SnapshotCopyGrantNotFoundFault `object`: The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.

### SnapshotCopyGrantQuotaExceededFault
* SnapshotCopyGrantQuotaExceededFault `object`: The AWS account has exceeded the maximum number of snapshot copy grants in this region.

### SnapshotList
* SnapshotList `array`
  * items [Snapshot](#snapshot)

### SnapshotMessage
* SnapshotMessage `object`: Contains the output from the <a>DescribeClusterSnapshots</a> action. 
  * Marker [String](#string)
  * Snapshots [SnapshotList](#snapshotlist)

### SourceIdsList
* SourceIdsList `array`
  * items [String](#string)

### SourceNotFoundFault
* SourceNotFoundFault `object`: The specified Amazon Redshift event source could not be found.

### SourceType
* SourceType `string` (values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot)

### String
* String `string`

### Subnet
* Subnet `object`: Describes a subnet.
  * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
  * SubnetIdentifier [String](#string)
  * SubnetStatus [String](#string)

### SubnetAlreadyInUse
* SubnetAlreadyInUse `object`: A specified subnet is already in use by another cluster.

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SubscriptionAlreadyExistFault
* SubscriptionAlreadyExistFault `object`: There is already an existing event notification subscription with the specified name.

### SubscriptionCategoryNotFoundFault
* SubscriptionCategoryNotFoundFault `object`: The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.

### SubscriptionEventIdNotFoundFault
* SubscriptionEventIdNotFoundFault `object`: An Amazon Redshift event with the specified event ID does not exist.

### SubscriptionNotFoundFault
* SubscriptionNotFoundFault `object`: An Amazon Redshift event notification subscription with the specified name does not exist.

### SubscriptionSeverityNotFoundFault
* SubscriptionSeverityNotFoundFault `object`: The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.

### TStamp
* TStamp `string`

### TableRestoreNotFoundFault
* TableRestoreNotFoundFault `object`: The specified <code>TableRestoreRequestId</code> value was not found.

### TableRestoreStatus
* TableRestoreStatus `object`: Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
  * ClusterIdentifier [String](#string)
  * Message [String](#string)
  * NewTableName [String](#string)
  * ProgressInMegaBytes [LongOptional](#longoptional)
  * RequestTime [TStamp](#tstamp)
  * SnapshotIdentifier [String](#string)
  * SourceDatabaseName [String](#string)
  * SourceSchemaName [String](#string)
  * SourceTableName [String](#string)
  * Status [TableRestoreStatusType](#tablerestorestatustype)
  * TableRestoreRequestId [String](#string)
  * TargetDatabaseName [String](#string)
  * TargetSchemaName [String](#string)
  * TotalDataInMegaBytes [LongOptional](#longoptional)

### TableRestoreStatusList
* TableRestoreStatusList `array`
  * items [TableRestoreStatus](#tablerestorestatus)

### TableRestoreStatusMessage
* TableRestoreStatusMessage `object`: <p/>
  * Marker [String](#string)
  * TableRestoreStatusDetails [TableRestoreStatusList](#tablerestorestatuslist)

### TableRestoreStatusType
* TableRestoreStatusType `string` (values: PENDING, IN_PROGRESS, SUCCEEDED, FAILED, CANCELED)

### Tag
* Tag `object`: A tag consisting of a name/value pair for a resource.
  * Key [String](#string)
  * Value [String](#string)

### TagKeyList
* TagKeyList `array`
  * items [String](#string)

### TagLimitExceededFault
* TagLimitExceededFault `object`: The request exceeds the limit of 10 tags for the resource.

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValueList
* TagValueList `array`
  * items [String](#string)

### TaggedResource
* TaggedResource `object`: A tag and its associated resource.
  * ResourceName [String](#string)
  * ResourceType [String](#string)
  * Tag [Tag](#tag)

### TaggedResourceList
* TaggedResourceList `array`
  * items [TaggedResource](#taggedresource)

### TaggedResourceListMessage
* TaggedResourceListMessage `object`: <p/>
  * Marker [String](#string)
  * TaggedResources [TaggedResourceList](#taggedresourcelist)

### UnauthorizedOperation
* UnauthorizedOperation `object`: Your account is not authorized to perform the requested operation.

### UnknownSnapshotCopyRegionFault
* UnknownSnapshotCopyRegionFault `object`: The specified region is incorrect or does not exist.

### UnsupportedOperationFault
* UnsupportedOperationFault `object`: The requested operation isn't supported.

### UnsupportedOptionFault
* UnsupportedOptionFault `object`: A request option was specified that is not supported.

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items [String](#string)

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: Describes the members of a VPC security group.
  * Status [String](#string)
  * VpcSecurityGroupId [String](#string)

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)


