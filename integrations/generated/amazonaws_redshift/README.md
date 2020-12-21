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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

## Actions

### AcceptReservedNodeExchange



```js
amazonaws_redshift.AcceptReservedNodeExchange({
  "ReservedNodeId": "",
  "TargetReservedNodeOfferingId": ""
}, context)
```

#### Input
* input `object`
  * ReservedNodeId **required** `string`
  * TargetReservedNodeOfferingId **required** `string`

#### Output
* output [AcceptReservedNodeExchangeOutputMessage](#acceptreservednodeexchangeoutputmessage)

### AcceptReservedNodeExchange



```js
amazonaws_redshift.AcceptReservedNodeExchange({
  "ReservedNodeId": null,
  "TargetReservedNodeOfferingId": null
}, context)
```

#### Input
* input `object`
  * ReservedNodeId **required**
  * TargetReservedNodeOfferingId **required**

#### Output
* output [AcceptReservedNodeExchangeOutputMessage](#acceptreservednodeexchangeoutputmessage)

### AuthorizeClusterSecurityGroupIngress



```js
amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required** `string`
  * CIDRIP `string`
  * EC2SecurityGroupName `string`
  * EC2SecurityGroupOwnerId `string`

#### Output
* output [AuthorizeClusterSecurityGroupIngressResult](#authorizeclustersecuritygroupingressresult)

### AuthorizeClusterSecurityGroupIngress



```js
amazonaws_redshift.AuthorizeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * CIDRIP
  * ClusterSecurityGroupName **required**
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

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
  * SnapshotIdentifier **required** `string`
  * SnapshotClusterIdentifier `string`
  * AccountWithRestoreAccess **required** `string`

#### Output
* output [AuthorizeSnapshotAccessResult](#authorizesnapshotaccessresult)

### AuthorizeSnapshotAccess



```js
amazonaws_redshift.AuthorizeSnapshotAccess({
  "SnapshotIdentifier": null,
  "AccountWithRestoreAccess": null
}, context)
```

#### Input
* input `object`
  * AccountWithRestoreAccess **required**
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

#### Output
* output [AuthorizeSnapshotAccessResult](#authorizesnapshotaccessresult)

### BatchDeleteClusterSnapshots



```js
amazonaws_redshift.BatchDeleteClusterSnapshots({
  "Identifiers": []
}, context)
```

#### Input
* input `object`
  * Identifiers **required** `array`

#### Output
* output [BatchDeleteClusterSnapshotsResult](#batchdeleteclustersnapshotsresult)

### BatchDeleteClusterSnapshots



```js
amazonaws_redshift.BatchDeleteClusterSnapshots({
  "Identifiers": null
}, context)
```

#### Input
* input `object`
  * Identifiers **required**
    * items
      * SnapshotClusterIdentifier
      * SnapshotIdentifier **required**

#### Output
* output [BatchDeleteClusterSnapshotsResult](#batchdeleteclustersnapshotsresult)

### BatchModifyClusterSnapshots



```js
amazonaws_redshift.BatchModifyClusterSnapshots({
  "SnapshotIdentifierList": []
}, context)
```

#### Input
* input `object`
  * SnapshotIdentifierList **required** `array`
  * ManualSnapshotRetentionPeriod `integer`
  * Force `boolean`

#### Output
* output [BatchModifyClusterSnapshotsOutputMessage](#batchmodifyclustersnapshotsoutputmessage)

### BatchModifyClusterSnapshots



```js
amazonaws_redshift.BatchModifyClusterSnapshots({
  "SnapshotIdentifierList": null
}, context)
```

#### Input
* input `object`
  * Force
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifierList **required**
    * items

#### Output
* output [BatchModifyClusterSnapshotsOutputMessage](#batchmodifyclustersnapshotsoutputmessage)

### CancelResize



```js
amazonaws_redshift.CancelResize({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`

#### Output
* output [ResizeProgressMessage](#resizeprogressmessage)

### CancelResize



```js
amazonaws_redshift.CancelResize({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [ResizeProgressMessage](#resizeprogressmessage)

### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({
  "SourceSnapshotIdentifier": "",
  "TargetSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceSnapshotIdentifier **required** `string`
  * SourceSnapshotClusterIdentifier `string`
  * TargetSnapshotIdentifier **required** `string`
  * ManualSnapshotRetentionPeriod `integer`

#### Output
* output [CopyClusterSnapshotResult](#copyclustersnapshotresult)

### CopyClusterSnapshot



```js
amazonaws_redshift.CopyClusterSnapshot({
  "SourceSnapshotIdentifier": null,
  "TargetSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * ManualSnapshotRetentionPeriod
  * SourceSnapshotClusterIdentifier
  * SourceSnapshotIdentifier **required**
  * TargetSnapshotIdentifier **required**

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
  * DBName `string`
  * ClusterIdentifier **required** `string`
  * ClusterType `string`
  * NodeType **required** `string`
  * MasterUsername **required** `string`
  * MasterUserPassword **required** `string`
  * ClusterSecurityGroups `array`
  * VpcSecurityGroupIds `array`
  * ClusterSubnetGroupName `string`
  * AvailabilityZone `string`
  * PreferredMaintenanceWindow `string`
  * ClusterParameterGroupName `string`
  * AutomatedSnapshotRetentionPeriod `integer`
  * ManualSnapshotRetentionPeriod `integer`
  * Port `integer`
  * ClusterVersion `string`
  * AllowVersionUpgrade `boolean`
  * NumberOfNodes `integer`
  * PubliclyAccessible `boolean`
  * Encrypted `boolean`
  * HsmClientCertificateIdentifier `string`
  * HsmConfigurationIdentifier `string`
  * ElasticIp `string`
  * Tags `array`
  * KmsKeyId `string`
  * EnhancedVpcRouting `boolean`
  * AdditionalInfo `string`
  * IamRoles `array`
  * MaintenanceTrackName `string`
  * SnapshotScheduleIdentifier `string`
  * AvailabilityZoneRelocation `boolean`

#### Output
* output [CreateClusterResult](#createclusterresult)

### CreateCluster



```js
amazonaws_redshift.CreateCluster({
  "ClusterIdentifier": null,
  "NodeType": null,
  "MasterUsername": null,
  "MasterUserPassword": null
}, context)
```

#### Input
* input `object`
  * AdditionalInfo
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterSubnetGroupName
  * ClusterType
  * ClusterVersion
  * DBName
  * ElasticIp
  * Encrypted
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * IamRoles
    * items
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUserPassword **required**
  * MasterUsername **required**
  * NodeType **required**
  * NumberOfNodes
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * SnapshotScheduleIdentifier
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

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
  * ParameterGroupName **required** `string`
  * ParameterGroupFamily **required** `string`
  * Description **required** `string`
  * Tags `array`

#### Output
* output [CreateClusterParameterGroupResult](#createclusterparametergroupresult)

### CreateClusterParameterGroup



```js
amazonaws_redshift.CreateClusterParameterGroup({
  "ParameterGroupName": null,
  "ParameterGroupFamily": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * ParameterGroupFamily **required**
  * ParameterGroupName **required**
  * Tags
    * items
      * Key
      * Value

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
  * ClusterSecurityGroupName **required** `string`
  * Description **required** `string`
  * Tags `array`

#### Output
* output [CreateClusterSecurityGroupResult](#createclustersecuritygroupresult)

### CreateClusterSecurityGroup



```js
amazonaws_redshift.CreateClusterSecurityGroup({
  "ClusterSecurityGroupName": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

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
  * SnapshotIdentifier **required** `string`
  * ClusterIdentifier **required** `string`
  * ManualSnapshotRetentionPeriod `integer`
  * Tags `array`

#### Output
* output [CreateClusterSnapshotResult](#createclustersnapshotresult)

### CreateClusterSnapshot



```js
amazonaws_redshift.CreateClusterSnapshot({
  "SnapshotIdentifier": null,
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

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
  * ClusterSubnetGroupName **required** `string`
  * Description **required** `string`
  * SubnetIds **required** `array`
  * Tags `array`

#### Output
* output [CreateClusterSubnetGroupResult](#createclustersubnetgroupresult)

### CreateClusterSubnetGroup



```js
amazonaws_redshift.CreateClusterSubnetGroup({
  "ClusterSubnetGroupName": null,
  "Description": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required**
  * Description **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

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
  * SubscriptionName **required** `string`
  * SnsTopicArn **required** `string`
  * SourceType `string`
  * SourceIds `array`
  * EventCategories `array`
  * Severity `string`
  * Enabled `boolean`
  * Tags `array`

#### Output
* output [CreateEventSubscriptionResult](#createeventsubscriptionresult)

### CreateEventSubscription



```js
amazonaws_redshift.CreateEventSubscription({
  "SubscriptionName": null,
  "SnsTopicArn": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items
  * Severity
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

### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({
  "HsmClientCertificateIdentifier": ""
}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier **required** `string`
  * Tags `array`

#### Output
* output [CreateHsmClientCertificateResult](#createhsmclientcertificateresult)

### CreateHsmClientCertificate



```js
amazonaws_redshift.CreateHsmClientCertificate({
  "HsmClientCertificateIdentifier": null
}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier **required**
  * Tags
    * items
      * Key
      * Value

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
  * HsmConfigurationIdentifier **required** `string`
  * Description **required** `string`
  * HsmIpAddress **required** `string`
  * HsmPartitionName **required** `string`
  * HsmPartitionPassword **required** `string`
  * HsmServerPublicCertificate **required** `string`
  * Tags `array`

#### Output
* output [CreateHsmConfigurationResult](#createhsmconfigurationresult)

### CreateHsmConfiguration



```js
amazonaws_redshift.CreateHsmConfiguration({
  "HsmConfigurationIdentifier": null,
  "Description": null,
  "HsmIpAddress": null,
  "HsmPartitionName": null,
  "HsmPartitionPassword": null,
  "HsmServerPublicCertificate": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * HsmConfigurationIdentifier **required**
  * HsmIpAddress **required**
  * HsmPartitionName **required**
  * HsmPartitionPassword **required**
  * HsmServerPublicCertificate **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateHsmConfigurationResult](#createhsmconfigurationresult)

### CreateScheduledAction



```js
amazonaws_redshift.CreateScheduledAction({
  "ScheduledActionName": "",
  "TargetAction": {},
  "Schedule": "",
  "IamRole": ""
}, context)
```

#### Input
* input `object`
  * ScheduledActionName **required** `string`
  * TargetAction **required** `object`
  * Schedule **required** `string`
  * IamRole **required** `string`
  * ScheduledActionDescription `string`
  * StartTime `string`
  * EndTime `string`
  * Enable `boolean`

#### Output
* output [ScheduledAction](#scheduledaction)

### CreateScheduledAction



```js
amazonaws_redshift.CreateScheduledAction({
  "ScheduledActionName": null,
  "TargetAction": null,
  "Schedule": null,
  "IamRole": null
}, context)
```

#### Input
* input `object`
  * Enable
  * EndTime
  * IamRole **required**
  * Schedule **required**
  * ScheduledActionDescription
  * ScheduledActionName **required**
  * StartTime
  * TargetAction **required**
    * PauseCluster
      * ClusterIdentifier **required**
    * ResizeCluster
      * Classic
      * ClusterIdentifier **required**
      * ClusterType
      * NodeType
      * NumberOfNodes
    * ResumeCluster
      * ClusterIdentifier **required**

#### Output
* output [ScheduledAction](#scheduledaction)

### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({
  "SnapshotCopyGrantName": ""
}, context)
```

#### Input
* input `object`
  * SnapshotCopyGrantName **required** `string`
  * KmsKeyId `string`
  * Tags `array`

#### Output
* output [CreateSnapshotCopyGrantResult](#createsnapshotcopygrantresult)

### CreateSnapshotCopyGrant



```js
amazonaws_redshift.CreateSnapshotCopyGrant({
  "SnapshotCopyGrantName": null
}, context)
```

#### Input
* input `object`
  * KmsKeyId
  * SnapshotCopyGrantName **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateSnapshotCopyGrantResult](#createsnapshotcopygrantresult)

### CreateSnapshotSchedule



```js
amazonaws_redshift.CreateSnapshotSchedule({}, context)
```

#### Input
* input `object`
  * ScheduleDefinitions `array`
  * ScheduleIdentifier `string`
  * ScheduleDescription `string`
  * Tags `array`
  * DryRun `boolean`
  * NextInvocations `integer`

#### Output
* output [SnapshotSchedule](#snapshotschedule)

### CreateSnapshotSchedule



```js
amazonaws_redshift.CreateSnapshotSchedule({}, context)
```

#### Input
* input `object`
  * DryRun
  * NextInvocations
  * ScheduleDefinitions
    * items
  * ScheduleDescription
  * ScheduleIdentifier
  * Tags
    * items
      * Key
      * Value

#### Output
* output [SnapshotSchedule](#snapshotschedule)

### CreateTags



```js
amazonaws_redshift.CreateTags({
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

### CreateTags



```js
amazonaws_redshift.CreateTags({
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

### CreateUsageLimit



```js
amazonaws_redshift.CreateUsageLimit({
  "ClusterIdentifier": "",
  "FeatureType": "",
  "LimitType": "",
  "Amount": 0
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * FeatureType **required** `string`
  * LimitType **required** `string`
  * Amount **required** `integer`
  * Period `string`
  * BreachAction `string`
  * Tags `array`

#### Output
* output [UsageLimit](#usagelimit)

### CreateUsageLimit



```js
amazonaws_redshift.CreateUsageLimit({
  "ClusterIdentifier": null,
  "FeatureType": null,
  "LimitType": null,
  "Amount": null
}, context)
```

#### Input
* input `object`
  * Amount **required**
  * BreachAction
  * ClusterIdentifier **required**
  * FeatureType **required**
  * LimitType **required**
  * Period
  * Tags
    * items
      * Key
      * Value

#### Output
* output [UsageLimit](#usagelimit)

### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * SkipFinalClusterSnapshot `boolean`
  * FinalClusterSnapshotIdentifier `string`
  * FinalClusterSnapshotRetentionPeriod `integer`

#### Output
* output [DeleteClusterResult](#deleteclusterresult)

### DeleteCluster



```js
amazonaws_redshift.DeleteCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * FinalClusterSnapshotIdentifier
  * FinalClusterSnapshotRetentionPeriod
  * SkipFinalClusterSnapshot

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
  * ParameterGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteClusterParameterGroup



```js
amazonaws_redshift.DeleteClusterParameterGroup({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required**

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
  * ClusterSecurityGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteClusterSecurityGroup



```js
amazonaws_redshift.DeleteClusterSecurityGroup({
  "ClusterSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required**

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
  * SnapshotIdentifier **required** `string`
  * SnapshotClusterIdentifier `string`

#### Output
* output [DeleteClusterSnapshotResult](#deleteclustersnapshotresult)

### DeleteClusterSnapshot



```js
amazonaws_redshift.DeleteClusterSnapshot({
  "SnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

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
  * ClusterSubnetGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteClusterSubnetGroup



```js
amazonaws_redshift.DeleteClusterSubnetGroup({
  "ClusterSubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required**

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
  * SubscriptionName **required** `string`

#### Output
*Output schema unknown*

### DeleteEventSubscription



```js
amazonaws_redshift.DeleteEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required**

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
  * HsmClientCertificateIdentifier **required** `string`

#### Output
*Output schema unknown*

### DeleteHsmClientCertificate



```js
amazonaws_redshift.DeleteHsmClientCertificate({
  "HsmClientCertificateIdentifier": null
}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier **required**

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
  * HsmConfigurationIdentifier **required** `string`

#### Output
*Output schema unknown*

### DeleteHsmConfiguration



```js
amazonaws_redshift.DeleteHsmConfiguration({
  "HsmConfigurationIdentifier": null
}, context)
```

#### Input
* input `object`
  * HsmConfigurationIdentifier **required**

#### Output
*Output schema unknown*

### DeleteScheduledAction



```js
amazonaws_redshift.DeleteScheduledAction({
  "ScheduledActionName": ""
}, context)
```

#### Input
* input `object`
  * ScheduledActionName **required** `string`

#### Output
*Output schema unknown*

### DeleteScheduledAction



```js
amazonaws_redshift.DeleteScheduledAction({
  "ScheduledActionName": null
}, context)
```

#### Input
* input `object`
  * ScheduledActionName **required**

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
  * SnapshotCopyGrantName **required** `string`

#### Output
*Output schema unknown*

### DeleteSnapshotCopyGrant



```js
amazonaws_redshift.DeleteSnapshotCopyGrant({
  "SnapshotCopyGrantName": null
}, context)
```

#### Input
* input `object`
  * SnapshotCopyGrantName **required**

#### Output
*Output schema unknown*

### DeleteSnapshotSchedule



```js
amazonaws_redshift.DeleteSnapshotSchedule({
  "ScheduleIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ScheduleIdentifier **required** `string`

#### Output
*Output schema unknown*

### DeleteSnapshotSchedule



```js
amazonaws_redshift.DeleteSnapshotSchedule({
  "ScheduleIdentifier": null
}, context)
```

#### Input
* input `object`
  * ScheduleIdentifier **required**

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
  * ResourceName **required** `string`
  * TagKeys **required** `array`

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_redshift.DeleteTags({
  "ResourceName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * TagKeys **required**
    * items

#### Output
*Output schema unknown*

### DeleteUsageLimit



```js
amazonaws_redshift.DeleteUsageLimit({
  "UsageLimitId": ""
}, context)
```

#### Input
* input `object`
  * UsageLimitId **required** `string`

#### Output
*Output schema unknown*

### DeleteUsageLimit



```js
amazonaws_redshift.DeleteUsageLimit({
  "UsageLimitId": null
}, context)
```

#### Input
* input `object`
  * UsageLimitId **required**

#### Output
*Output schema unknown*

### DescribeAccountAttributes



```js
amazonaws_redshift.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`
  * AttributeNames `array`

#### Output
* output [AccountAttributeList](#accountattributelist)

### DescribeAccountAttributes



```js
amazonaws_redshift.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items

#### Output
* output [AccountAttributeList](#accountattributelist)

### DescribeClusterDbRevisions



```js
amazonaws_redshift.DescribeClusterDbRevisions({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ClusterDbRevisionsMessage](#clusterdbrevisionsmessage)

### DescribeClusterDbRevisions



```js
amazonaws_redshift.DescribeClusterDbRevisions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier
  * Marker
  * MaxRecords

#### Output
* output [ClusterDbRevisionsMessage](#clusterdbrevisionsmessage)

### DescribeClusterParameterGroups



```js
amazonaws_redshift.DescribeClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * ParameterGroupName `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [ClusterParameterGroupsMessage](#clusterparametergroupsmessage)

### DescribeClusterParameterGroups



```js
amazonaws_redshift.DescribeClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ParameterGroupName
  * TagKeys
    * items
  * TagValues
    * items

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
  * ParameterGroupName **required** `string`
  * Source `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ClusterParameterGroupDetails](#clusterparametergroupdetails)

### DescribeClusterParameters



```js
amazonaws_redshift.DescribeClusterParameters({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ParameterGroupName **required**
  * Source

#### Output
* output [ClusterParameterGroupDetails](#clusterparametergroupdetails)

### DescribeClusterSecurityGroups



```js
amazonaws_redshift.DescribeClusterSecurityGroups({}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [ClusterSecurityGroupMessage](#clustersecuritygroupmessage)

### DescribeClusterSecurityGroups



```js
amazonaws_redshift.DescribeClusterSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterSecurityGroupName
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [ClusterSecurityGroupMessage](#clustersecuritygroupmessage)

### DescribeClusterSnapshots



```js
amazonaws_redshift.DescribeClusterSnapshots({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier `string`
  * SnapshotIdentifier `string`
  * SnapshotType `string`
  * StartTime `string`
  * EndTime `string`
  * MaxRecords `integer`
  * Marker `string`
  * OwnerAccount `string`
  * TagKeys `array`
  * TagValues `array`
  * ClusterExists `boolean`
  * SortingEntities `array`

#### Output
* output [SnapshotMessage](#snapshotmessage)

### DescribeClusterSnapshots



```js
amazonaws_redshift.DescribeClusterSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterExists
  * ClusterIdentifier
  * EndTime
  * Marker
  * MaxRecords
  * OwnerAccount
  * SnapshotIdentifier
  * SnapshotType
  * SortingEntities
    * items
      * Attribute **required**
      * SortOrder
  * StartTime
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [SnapshotMessage](#snapshotmessage)

### DescribeClusterSubnetGroups



```js
amazonaws_redshift.DescribeClusterSubnetGroups({}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [ClusterSubnetGroupMessage](#clustersubnetgroupmessage)

### DescribeClusterSubnetGroups



```js
amazonaws_redshift.DescribeClusterSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterSubnetGroupName
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [ClusterSubnetGroupMessage](#clustersubnetgroupmessage)

### DescribeClusterTracks



```js
amazonaws_redshift.DescribeClusterTracks({}, context)
```

#### Input
* input `object`
  * MaintenanceTrackName `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [TrackListMessage](#tracklistmessage)

### DescribeClusterTracks



```js
amazonaws_redshift.DescribeClusterTracks({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * MaintenanceTrackName
  * Marker
  * MaxRecords

#### Output
* output [TrackListMessage](#tracklistmessage)

### DescribeClusterVersions



```js
amazonaws_redshift.DescribeClusterVersions({}, context)
```

#### Input
* input `object`
  * ClusterVersion `string`
  * ClusterParameterGroupFamily `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ClusterVersionsMessage](#clusterversionsmessage)

### DescribeClusterVersions



```js
amazonaws_redshift.DescribeClusterVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterParameterGroupFamily
  * ClusterVersion
  * Marker
  * MaxRecords

#### Output
* output [ClusterVersionsMessage](#clusterversionsmessage)

### DescribeClusters



```js
amazonaws_redshift.DescribeClusters({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [ClustersMessage](#clustersmessage)

### DescribeClusters



```js
amazonaws_redshift.DescribeClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

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
  * ParameterGroupFamily **required** `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeDefaultClusterParametersResult](#describedefaultclusterparametersresult)

### DescribeDefaultClusterParameters



```js
amazonaws_redshift.DescribeDefaultClusterParameters({
  "ParameterGroupFamily": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ParameterGroupFamily **required**

#### Output
* output [DescribeDefaultClusterParametersResult](#describedefaultclusterparametersresult)

### DescribeEventCategories



```js
amazonaws_redshift.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType `string`

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventCategories



```js
amazonaws_redshift.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventSubscriptions



```js
amazonaws_redshift.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * SubscriptionName `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEventSubscriptions



```js
amazonaws_redshift.DescribeEventSubscriptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * SubscriptionName
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [EventSubscriptionsMessage](#eventsubscriptionsmessage)

### DescribeEvents



```js
amazonaws_redshift.DescribeEvents({}, context)
```

#### Input
* input `object`
  * SourceIdentifier `string`
  * SourceType `string`
  * StartTime `string`
  * EndTime `string`
  * Duration `integer`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeEvents



```js
amazonaws_redshift.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration
  * EndTime
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeHsmClientCertificates



```js
amazonaws_redshift.DescribeHsmClientCertificates({}, context)
```

#### Input
* input `object`
  * HsmClientCertificateIdentifier `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [HsmClientCertificateMessage](#hsmclientcertificatemessage)

### DescribeHsmClientCertificates



```js
amazonaws_redshift.DescribeHsmClientCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * HsmClientCertificateIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [HsmClientCertificateMessage](#hsmclientcertificatemessage)

### DescribeHsmConfigurations



```js
amazonaws_redshift.DescribeHsmConfigurations({}, context)
```

#### Input
* input `object`
  * HsmConfigurationIdentifier `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [HsmConfigurationMessage](#hsmconfigurationmessage)

### DescribeHsmConfigurations



```js
amazonaws_redshift.DescribeHsmConfigurations({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * HsmConfigurationIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

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
  * ClusterIdentifier **required** `string`

#### Output
* output [LoggingStatus](#loggingstatus)

### DescribeLoggingStatus



```js
amazonaws_redshift.DescribeLoggingStatus({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [LoggingStatus](#loggingstatus)

### DescribeNodeConfigurationOptions



```js
amazonaws_redshift.DescribeNodeConfigurationOptions({
  "ActionType": ""
}, context)
```

#### Input
* input `object`
  * ActionType **required** `string`
  * ClusterIdentifier `string`
  * SnapshotIdentifier `string`
  * OwnerAccount `string`
  * Filter `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [NodeConfigurationOptionsMessage](#nodeconfigurationoptionsmessage)

### DescribeNodeConfigurationOptions



```js
amazonaws_redshift.DescribeNodeConfigurationOptions({
  "ActionType": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ActionType **required**
  * ClusterIdentifier
  * Filters
    * items
      * Name
      * Operator
      * Values
        * items
  * Marker
  * MaxRecords
  * OwnerAccount
  * SnapshotIdentifier

#### Output
* output [NodeConfigurationOptionsMessage](#nodeconfigurationoptionsmessage)

### DescribeOrderableClusterOptions



```js
amazonaws_redshift.DescribeOrderableClusterOptions({}, context)
```

#### Input
* input `object`
  * ClusterVersion `string`
  * NodeType `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [OrderableClusterOptionsMessage](#orderableclusteroptionsmessage)

### DescribeOrderableClusterOptions



```js
amazonaws_redshift.DescribeOrderableClusterOptions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterVersion
  * Marker
  * MaxRecords
  * NodeType

#### Output
* output [OrderableClusterOptionsMessage](#orderableclusteroptionsmessage)

### DescribeReservedNodeOfferings



```js
amazonaws_redshift.DescribeReservedNodeOfferings({}, context)
```

#### Input
* input `object`
  * ReservedNodeOfferingId `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedNodeOfferingsMessage](#reservednodeofferingsmessage)

### DescribeReservedNodeOfferings



```js
amazonaws_redshift.DescribeReservedNodeOfferings({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReservedNodeOfferingId

#### Output
* output [ReservedNodeOfferingsMessage](#reservednodeofferingsmessage)

### DescribeReservedNodes



```js
amazonaws_redshift.DescribeReservedNodes({}, context)
```

#### Input
* input `object`
  * ReservedNodeId `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [ReservedNodesMessage](#reservednodesmessage)

### DescribeReservedNodes



```js
amazonaws_redshift.DescribeReservedNodes({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReservedNodeId

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
  * ClusterIdentifier **required** `string`

#### Output
* output [ResizeProgressMessage](#resizeprogressmessage)

### DescribeResize



```js
amazonaws_redshift.DescribeResize({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [ResizeProgressMessage](#resizeprogressmessage)

### DescribeScheduledActions



```js
amazonaws_redshift.DescribeScheduledActions({}, context)
```

#### Input
* input `object`
  * ScheduledActionName `string`
  * TargetActionType `string`
  * StartTime `string`
  * EndTime `string`
  * Active `boolean`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [ScheduledActionsMessage](#scheduledactionsmessage)

### DescribeScheduledActions



```js
amazonaws_redshift.DescribeScheduledActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Active
  * EndTime
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ScheduledActionName
  * StartTime
  * TargetActionType

#### Output
* output [ScheduledActionsMessage](#scheduledactionsmessage)

### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```

#### Input
* input `object`
  * SnapshotCopyGrantName `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [SnapshotCopyGrantMessage](#snapshotcopygrantmessage)

### DescribeSnapshotCopyGrants



```js
amazonaws_redshift.DescribeSnapshotCopyGrants({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * SnapshotCopyGrantName
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [SnapshotCopyGrantMessage](#snapshotcopygrantmessage)

### DescribeSnapshotSchedules



```js
amazonaws_redshift.DescribeSnapshotSchedules({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier `string`
  * ScheduleIdentifier `string`
  * TagKeys `array`
  * TagValues `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [DescribeSnapshotSchedulesOutputMessage](#describesnapshotschedulesoutputmessage)

### DescribeSnapshotSchedules



```js
amazonaws_redshift.DescribeSnapshotSchedules({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * ScheduleIdentifier
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [DescribeSnapshotSchedulesOutputMessage](#describesnapshotschedulesoutputmessage)

### DescribeStorage



```js
amazonaws_redshift.DescribeStorage({}, context)
```

#### Input
* input `object`

#### Output
* output [CustomerStorageMessage](#customerstoragemessage)

### DescribeStorage



```js
amazonaws_redshift.DescribeStorage({}, context)
```

#### Input
* input `object`

#### Output
* output [CustomerStorageMessage](#customerstoragemessage)

### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```

#### Input
* input `object`
  * ClusterIdentifier `string`
  * TableRestoreRequestId `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [TableRestoreStatusMessage](#tablerestorestatusmessage)

### DescribeTableRestoreStatus



```js
amazonaws_redshift.DescribeTableRestoreStatus({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * TableRestoreRequestId

#### Output
* output [TableRestoreStatusMessage](#tablerestorestatusmessage)

### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```

#### Input
* input `object`
  * ResourceName `string`
  * ResourceType `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [TaggedResourceListMessage](#taggedresourcelistmessage)

### DescribeTags



```js
amazonaws_redshift.DescribeTags({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ResourceName
  * ResourceType
  * TagKeys
    * items
  * TagValues
    * items

#### Output
* output [TaggedResourceListMessage](#taggedresourcelistmessage)

### DescribeUsageLimits



```js
amazonaws_redshift.DescribeUsageLimits({}, context)
```

#### Input
* input `object`
  * UsageLimitId `string`
  * ClusterIdentifier `string`
  * FeatureType `string`
  * MaxRecords `integer`
  * Marker `string`
  * TagKeys `array`
  * TagValues `array`

#### Output
* output [UsageLimitList](#usagelimitlist)

### DescribeUsageLimits



```js
amazonaws_redshift.DescribeUsageLimits({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * ClusterIdentifier
  * FeatureType
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items
  * UsageLimitId

#### Output
* output [UsageLimitList](#usagelimitlist)

### DisableLogging



```js
amazonaws_redshift.DisableLogging({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`

#### Output
* output [LoggingStatus](#loggingstatus)

### DisableLogging



```js
amazonaws_redshift.DisableLogging({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

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
  * ClusterIdentifier **required** `string`

#### Output
* output [DisableSnapshotCopyResult](#disablesnapshotcopyresult)

### DisableSnapshotCopy



```js
amazonaws_redshift.DisableSnapshotCopy({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

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
  * ClusterIdentifier **required** `string`
  * BucketName **required** `string`
  * S3KeyPrefix `string`

#### Output
* output [LoggingStatus](#loggingstatus)

### EnableLogging



```js
amazonaws_redshift.EnableLogging({
  "ClusterIdentifier": null,
  "BucketName": null
}, context)
```

#### Input
* input `object`
  * BucketName **required**
  * ClusterIdentifier **required**
  * S3KeyPrefix

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
  * ClusterIdentifier **required** `string`
  * DestinationRegion **required** `string`
  * RetentionPeriod `integer`
  * SnapshotCopyGrantName `string`
  * ManualSnapshotRetentionPeriod `integer`

#### Output
* output [EnableSnapshotCopyResult](#enablesnapshotcopyresult)

### EnableSnapshotCopy



```js
amazonaws_redshift.EnableSnapshotCopy({
  "ClusterIdentifier": null,
  "DestinationRegion": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * DestinationRegion **required**
  * ManualSnapshotRetentionPeriod
  * RetentionPeriod
  * SnapshotCopyGrantName

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
  * DbUser **required** `string`
  * DbName `string`
  * ClusterIdentifier **required** `string`
  * DurationSeconds `integer`
  * AutoCreate `boolean`
  * DbGroups `array`

#### Output
* output [ClusterCredentials](#clustercredentials)

### GetClusterCredentials



```js
amazonaws_redshift.GetClusterCredentials({
  "DbUser": null,
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * AutoCreate
  * ClusterIdentifier **required**
  * DbGroups
    * items
  * DbName
  * DbUser **required**
  * DurationSeconds

#### Output
* output [ClusterCredentials](#clustercredentials)

### GetReservedNodeExchangeOfferings



```js
amazonaws_redshift.GetReservedNodeExchangeOfferings({
  "ReservedNodeId": ""
}, context)
```

#### Input
* input `object`
  * ReservedNodeId **required** `string`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [GetReservedNodeExchangeOfferingsOutputMessage](#getreservednodeexchangeofferingsoutputmessage)

### GetReservedNodeExchangeOfferings



```js
amazonaws_redshift.GetReservedNodeExchangeOfferings({
  "ReservedNodeId": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReservedNodeId **required**

#### Output
* output [GetReservedNodeExchangeOfferingsOutputMessage](#getreservednodeexchangeofferingsoutputmessage)

### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * ClusterType `string`
  * NodeType `string`
  * NumberOfNodes `integer`
  * ClusterSecurityGroups `array`
  * VpcSecurityGroupIds `array`
  * MasterUserPassword `string`
  * ClusterParameterGroupName `string`
  * AutomatedSnapshotRetentionPeriod `integer`
  * ManualSnapshotRetentionPeriod `integer`
  * PreferredMaintenanceWindow `string`
  * ClusterVersion `string`
  * AllowVersionUpgrade `boolean`
  * HsmClientCertificateIdentifier `string`
  * HsmConfigurationIdentifier `string`
  * NewClusterIdentifier `string`
  * PubliclyAccessible `boolean`
  * ElasticIp `string`
  * EnhancedVpcRouting `boolean`
  * MaintenanceTrackName `string`
  * Encrypted `boolean`
  * KmsKeyId `string`
  * AvailabilityZoneRelocation `boolean`
  * AvailabilityZone `string`
  * Port `integer`

#### Output
* output [ModifyClusterResult](#modifyclusterresult)

### ModifyCluster



```js
amazonaws_redshift.ModifyCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterType
  * ClusterVersion
  * ElasticIp
  * Encrypted
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUserPassword
  * NewClusterIdentifier
  * NodeType
  * NumberOfNodes
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyClusterResult](#modifyclusterresult)

### ModifyClusterDbRevision



```js
amazonaws_redshift.ModifyClusterDbRevision({
  "ClusterIdentifier": "",
  "RevisionTarget": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * RevisionTarget **required** `string`

#### Output
* output [ModifyClusterDbRevisionResult](#modifyclusterdbrevisionresult)

### ModifyClusterDbRevision



```js
amazonaws_redshift.ModifyClusterDbRevision({
  "ClusterIdentifier": null,
  "RevisionTarget": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * RevisionTarget **required**

#### Output
* output [ModifyClusterDbRevisionResult](#modifyclusterdbrevisionresult)

### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * AddIamRoles `array`
  * RemoveIamRoles `array`

#### Output
* output [ModifyClusterIamRolesResult](#modifyclusteriamrolesresult)

### ModifyClusterIamRoles



```js
amazonaws_redshift.ModifyClusterIamRoles({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * AddIamRoles
    * items
  * ClusterIdentifier **required**
  * RemoveIamRoles
    * items

#### Output
* output [ModifyClusterIamRolesResult](#modifyclusteriamrolesresult)

### ModifyClusterMaintenance



```js
amazonaws_redshift.ModifyClusterMaintenance({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * DeferMaintenance `boolean`
  * DeferMaintenanceIdentifier `string`
  * DeferMaintenanceStartTime `string`
  * DeferMaintenanceEndTime `string`
  * DeferMaintenanceDuration `integer`

#### Output
* output [ModifyClusterMaintenanceResult](#modifyclustermaintenanceresult)

### ModifyClusterMaintenance



```js
amazonaws_redshift.ModifyClusterMaintenance({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * DeferMaintenance
  * DeferMaintenanceDuration
  * DeferMaintenanceEndTime
  * DeferMaintenanceIdentifier
  * DeferMaintenanceStartTime

#### Output
* output [ModifyClusterMaintenanceResult](#modifyclustermaintenanceresult)

### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({
  "ParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required** `string`
  * Parameters **required** `array`

#### Output
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### ModifyClusterParameterGroup



```js
amazonaws_redshift.ModifyClusterParameterGroup({
  "ParameterGroupName": null,
  "Parameters": null
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

#### Output
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### ModifyClusterSnapshot



```js
amazonaws_redshift.ModifyClusterSnapshot({
  "SnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SnapshotIdentifier **required** `string`
  * ManualSnapshotRetentionPeriod `integer`
  * Force `boolean`

#### Output
* output [ModifyClusterSnapshotResult](#modifyclustersnapshotresult)

### ModifyClusterSnapshot



```js
amazonaws_redshift.ModifyClusterSnapshot({
  "SnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * Force
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifier **required**

#### Output
* output [ModifyClusterSnapshotResult](#modifyclustersnapshotresult)

### ModifyClusterSnapshotSchedule



```js
amazonaws_redshift.ModifyClusterSnapshotSchedule({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * ScheduleIdentifier `string`
  * DisassociateSchedule `boolean`

#### Output
*Output schema unknown*

### ModifyClusterSnapshotSchedule



```js
amazonaws_redshift.ModifyClusterSnapshotSchedule({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * DisassociateSchedule
  * ScheduleIdentifier

#### Output
*Output schema unknown*

### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({
  "ClusterSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required** `string`
  * Description `string`
  * SubnetIds **required** `array`

#### Output
* output [ModifyClusterSubnetGroupResult](#modifyclustersubnetgroupresult)

### ModifyClusterSubnetGroup



```js
amazonaws_redshift.ModifyClusterSubnetGroup({
  "ClusterSubnetGroupName": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * ClusterSubnetGroupName **required**
  * Description
  * SubnetIds **required**
    * items

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
  * SubscriptionName **required** `string`
  * SnsTopicArn `string`
  * SourceType `string`
  * SourceIds `array`
  * EventCategories `array`
  * Severity `string`
  * Enabled `boolean`

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### ModifyEventSubscription



```js
amazonaws_redshift.ModifyEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items
  * Severity
  * SnsTopicArn
  * SourceIds
    * items
  * SourceType
  * SubscriptionName **required**

#### Output
* output [ModifyEventSubscriptionResult](#modifyeventsubscriptionresult)

### ModifyScheduledAction



```js
amazonaws_redshift.ModifyScheduledAction({
  "ScheduledActionName": ""
}, context)
```

#### Input
* input `object`
  * ScheduledActionName **required** `string`
  * TargetAction `object`
  * Schedule `string`
  * IamRole `string`
  * ScheduledActionDescription `string`
  * StartTime `string`
  * EndTime `string`
  * Enable `boolean`

#### Output
* output [ScheduledAction](#scheduledaction)

### ModifyScheduledAction



```js
amazonaws_redshift.ModifyScheduledAction({
  "ScheduledActionName": null
}, context)
```

#### Input
* input `object`
  * Enable
  * EndTime
  * IamRole
  * Schedule
  * ScheduledActionDescription
  * ScheduledActionName **required**
  * StartTime
  * TargetAction
    * PauseCluster
      * ClusterIdentifier **required**
    * ResizeCluster
      * Classic
      * ClusterIdentifier **required**
      * ClusterType
      * NodeType
      * NumberOfNodes
    * ResumeCluster
      * ClusterIdentifier **required**

#### Output
* output [ScheduledAction](#scheduledaction)

### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({
  "ClusterIdentifier": "",
  "RetentionPeriod": 0
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * RetentionPeriod **required** `integer`
  * Manual `boolean`

#### Output
* output [ModifySnapshotCopyRetentionPeriodResult](#modifysnapshotcopyretentionperiodresult)

### ModifySnapshotCopyRetentionPeriod



```js
amazonaws_redshift.ModifySnapshotCopyRetentionPeriod({
  "ClusterIdentifier": null,
  "RetentionPeriod": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * Manual
  * RetentionPeriod **required**

#### Output
* output [ModifySnapshotCopyRetentionPeriodResult](#modifysnapshotcopyretentionperiodresult)

### ModifySnapshotSchedule



```js
amazonaws_redshift.ModifySnapshotSchedule({
  "ScheduleIdentifier": "",
  "ScheduleDefinitions": []
}, context)
```

#### Input
* input `object`
  * ScheduleIdentifier **required** `string`
  * ScheduleDefinitions **required** `array`

#### Output
* output [SnapshotSchedule](#snapshotschedule)

### ModifySnapshotSchedule



```js
amazonaws_redshift.ModifySnapshotSchedule({
  "ScheduleIdentifier": null,
  "ScheduleDefinitions": null
}, context)
```

#### Input
* input `object`
  * ScheduleDefinitions **required**
    * items
  * ScheduleIdentifier **required**

#### Output
* output [SnapshotSchedule](#snapshotschedule)

### ModifyUsageLimit



```js
amazonaws_redshift.ModifyUsageLimit({
  "UsageLimitId": ""
}, context)
```

#### Input
* input `object`
  * UsageLimitId **required** `string`
  * Amount `integer`
  * BreachAction `string`

#### Output
* output [UsageLimit](#usagelimit)

### ModifyUsageLimit



```js
amazonaws_redshift.ModifyUsageLimit({
  "UsageLimitId": null
}, context)
```

#### Input
* input `object`
  * Amount
  * BreachAction
  * UsageLimitId **required**

#### Output
* output [UsageLimit](#usagelimit)

### PauseCluster



```js
amazonaws_redshift.PauseCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`

#### Output
* output [PauseClusterResult](#pauseclusterresult)

### PauseCluster



```js
amazonaws_redshift.PauseCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [PauseClusterResult](#pauseclusterresult)

### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({
  "ReservedNodeOfferingId": ""
}, context)
```

#### Input
* input `object`
  * ReservedNodeOfferingId **required** `string`
  * NodeCount `integer`

#### Output
* output [PurchaseReservedNodeOfferingResult](#purchasereservednodeofferingresult)

### PurchaseReservedNodeOffering



```js
amazonaws_redshift.PurchaseReservedNodeOffering({
  "ReservedNodeOfferingId": null
}, context)
```

#### Input
* input `object`
  * NodeCount
  * ReservedNodeOfferingId **required**

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
  * ClusterIdentifier **required** `string`

#### Output
* output [RebootClusterResult](#rebootclusterresult)

### RebootCluster



```js
amazonaws_redshift.RebootCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

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
  * ParameterGroupName **required** `string`
  * ResetAllParameters `boolean`
  * Parameters `array`

#### Output
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### ResetClusterParameterGroup



```js
amazonaws_redshift.ResetClusterParameterGroup({
  "ParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * ParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
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
* output [ClusterParameterGroupNameMessage](#clusterparametergroupnamemessage)

### ResizeCluster



```js
amazonaws_redshift.ResizeCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * ClusterType `string`
  * NodeType `string`
  * NumberOfNodes `integer`
  * Classic `boolean`

#### Output
* output [ResizeClusterResult](#resizeclusterresult)

### ResizeCluster



```js
amazonaws_redshift.ResizeCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * Classic
  * ClusterIdentifier **required**
  * ClusterType
  * NodeType
  * NumberOfNodes

#### Output
* output [ResizeClusterResult](#resizeclusterresult)

### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({
  "ClusterIdentifier": "",
  "SnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`
  * SnapshotIdentifier **required** `string`
  * SnapshotClusterIdentifier `string`
  * Port `integer`
  * AvailabilityZone `string`
  * AllowVersionUpgrade `boolean`
  * ClusterSubnetGroupName `string`
  * PubliclyAccessible `boolean`
  * OwnerAccount `string`
  * HsmClientCertificateIdentifier `string`
  * HsmConfigurationIdentifier `string`
  * ElasticIp `string`
  * ClusterParameterGroupName `string`
  * ClusterSecurityGroups `array`
  * VpcSecurityGroupIds `array`
  * PreferredMaintenanceWindow `string`
  * AutomatedSnapshotRetentionPeriod `integer`
  * ManualSnapshotRetentionPeriod `integer`
  * KmsKeyId `string`
  * NodeType `string`
  * EnhancedVpcRouting `boolean`
  * AdditionalInfo `string`
  * IamRoles `array`
  * MaintenanceTrackName `string`
  * SnapshotScheduleIdentifier `string`
  * NumberOfNodes `integer`
  * AvailabilityZoneRelocation `boolean`

#### Output
* output [RestoreFromClusterSnapshotResult](#restorefromclustersnapshotresult)

### RestoreFromClusterSnapshot



```js
amazonaws_redshift.RestoreFromClusterSnapshot({
  "ClusterIdentifier": null,
  "SnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * AdditionalInfo
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterSubnetGroupName
  * ElasticIp
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * IamRoles
    * items
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * NodeType
  * NumberOfNodes
  * OwnerAccount
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**
  * SnapshotScheduleIdentifier
  * VpcSecurityGroupIds
    * items

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
  * ClusterIdentifier **required** `string`
  * SnapshotIdentifier **required** `string`
  * SourceDatabaseName **required** `string`
  * SourceSchemaName `string`
  * SourceTableName **required** `string`
  * TargetDatabaseName `string`
  * TargetSchemaName `string`
  * NewTableName **required** `string`

#### Output
* output [RestoreTableFromClusterSnapshotResult](#restoretablefromclustersnapshotresult)

### RestoreTableFromClusterSnapshot



```js
amazonaws_redshift.RestoreTableFromClusterSnapshot({
  "ClusterIdentifier": null,
  "SnapshotIdentifier": null,
  "SourceDatabaseName": null,
  "SourceTableName": null,
  "NewTableName": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**
  * NewTableName **required**
  * SnapshotIdentifier **required**
  * SourceDatabaseName **required**
  * SourceSchemaName
  * SourceTableName **required**
  * TargetDatabaseName
  * TargetSchemaName

#### Output
* output [RestoreTableFromClusterSnapshotResult](#restoretablefromclustersnapshotresult)

### ResumeCluster



```js
amazonaws_redshift.ResumeCluster({
  "ClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required** `string`

#### Output
* output [ResumeClusterResult](#resumeclusterresult)

### ResumeCluster



```js
amazonaws_redshift.ResumeCluster({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [ResumeClusterResult](#resumeclusterresult)

### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": ""
}, context)
```

#### Input
* input `object`
  * ClusterSecurityGroupName **required** `string`
  * CIDRIP `string`
  * EC2SecurityGroupName `string`
  * EC2SecurityGroupOwnerId `string`

#### Output
* output [RevokeClusterSecurityGroupIngressResult](#revokeclustersecuritygroupingressresult)

### RevokeClusterSecurityGroupIngress



```js
amazonaws_redshift.RevokeClusterSecurityGroupIngress({
  "ClusterSecurityGroupName": null
}, context)
```

#### Input
* input `object`
  * CIDRIP
  * ClusterSecurityGroupName **required**
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

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
  * SnapshotIdentifier **required** `string`
  * SnapshotClusterIdentifier `string`
  * AccountWithRestoreAccess **required** `string`

#### Output
* output [RevokeSnapshotAccessResult](#revokesnapshotaccessresult)

### RevokeSnapshotAccess



```js
amazonaws_redshift.RevokeSnapshotAccess({
  "SnapshotIdentifier": null,
  "AccountWithRestoreAccess": null
}, context)
```

#### Input
* input `object`
  * AccountWithRestoreAccess **required**
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

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
  * ClusterIdentifier **required** `string`

#### Output
* output [RotateEncryptionKeyResult](#rotateencryptionkeyresult)

### RotateEncryptionKey



```js
amazonaws_redshift.RotateEncryptionKey({
  "ClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ClusterIdentifier **required**

#### Output
* output [RotateEncryptionKeyResult](#rotateencryptionkeyresult)



## Definitions

### AcceptReservedNodeExchangeInputMessage
* AcceptReservedNodeExchangeInputMessage `object`
  * ReservedNodeId **required**
  * TargetReservedNodeOfferingId **required**

### AcceptReservedNodeExchangeOutputMessage
* AcceptReservedNodeExchangeOutputMessage `object`
  * ExchangedReservedNode
    * CurrencyCode
    * Duration
    * FixedPrice
    * NodeCount
    * NodeType
    * OfferingType
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedNodeId
    * ReservedNodeOfferingId
    * ReservedNodeOfferingType
    * StartTime
    * State
    * UsagePrice

### AccessToSnapshotDeniedFault


### AccountAttribute
* AccountAttribute `object`: A name value pair that describes an aspect of an account. 
  * AttributeName
  * AttributeValues
    * items
      * AttributeValue

### AccountAttributeList
* AccountAttributeList `object`
  * AccountAttributes
    * items
      * AttributeName
      * AttributeValues
        * items
          * AttributeValue

### AccountWithRestoreAccess
* AccountWithRestoreAccess `object`: Describes an AWS customer account authorized to restore a snapshot.
  * AccountAlias
  * AccountId

### AccountsWithRestoreAccessList
* AccountsWithRestoreAccessList `array`
  * items
    * AccountAlias
    * AccountId

### ActionType
* ActionType `string` (values: restore-cluster, recommend-node-config, resize-cluster)

### AssociatedClusterList
* AssociatedClusterList `array`
  * items
    * ClusterIdentifier
    * ScheduleAssociationState

### AttributeList
* AttributeList `array`
  * items
    * AttributeName
    * AttributeValues
      * items
        * AttributeValue

### AttributeNameList
* AttributeNameList `array`
  * items

### AttributeValueList
* AttributeValueList `array`
  * items
    * AttributeValue

### AttributeValueTarget
* AttributeValueTarget `object`: Describes an attribute value.
  * AttributeValue

### AuthorizationAlreadyExistsFault


### AuthorizationNotFoundFault


### AuthorizationQuotaExceededFault


### AuthorizeClusterSecurityGroupIngressMessage
* AuthorizeClusterSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP
  * ClusterSecurityGroupName **required**
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

### AuthorizeClusterSecurityGroupIngressResult
* AuthorizeClusterSecurityGroupIngressResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### AuthorizeSnapshotAccessMessage
* AuthorizeSnapshotAccessMessage `object`: <p/>
  * AccountWithRestoreAccess **required**
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

### AuthorizeSnapshotAccessResult
* AuthorizeSnapshotAccessResult `object`
  * Snapshot [Snapshot](#snapshot)

### AvailabilityZone
* AvailabilityZone `object`: Describes an availability zone.
  * Name
  * SupportedPlatforms
    * items
      * Name

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items
    * Name
    * SupportedPlatforms
      * items
        * Name

### BatchDeleteClusterSnapshotsRequest
* BatchDeleteClusterSnapshotsRequest `object`
  * Identifiers **required**
    * items
      * SnapshotClusterIdentifier
      * SnapshotIdentifier **required**

### BatchDeleteClusterSnapshotsResult
* BatchDeleteClusterSnapshotsResult `object`
  * Errors
    * items
      * FailureCode
      * FailureReason
      * SnapshotClusterIdentifier
      * SnapshotIdentifier
  * Resources
    * items

### BatchDeleteRequestSizeExceededFault


### BatchModifyClusterSnapshotsLimitExceededFault


### BatchModifyClusterSnapshotsMessage
* BatchModifyClusterSnapshotsMessage `object`
  * Force
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifierList **required**
    * items

### BatchModifyClusterSnapshotsOutputMessage
* BatchModifyClusterSnapshotsOutputMessage `object`
  * Errors
    * items
      * FailureCode
      * FailureReason
      * SnapshotClusterIdentifier
      * SnapshotIdentifier
  * Resources
    * items

### BatchSnapshotOperationErrorList
* BatchSnapshotOperationErrorList `array`
  * items
    * FailureCode
    * FailureReason
    * SnapshotClusterIdentifier
    * SnapshotIdentifier

### BatchSnapshotOperationErrors
* BatchSnapshotOperationErrors `array`
  * items
    * FailureCode
    * FailureReason
    * SnapshotClusterIdentifier
    * SnapshotIdentifier

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### BucketNotFoundFault


### CancelResizeMessage
* CancelResizeMessage `object`
  * ClusterIdentifier **required**

### Cluster
* Cluster `object`: Describes a cluster.
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocationStatus
  * ClusterAvailabilityStatus
  * ClusterCreateTime
  * ClusterIdentifier
  * ClusterNamespaceArn
  * ClusterNodes
    * items [ClusterNode](#clusternode)
  * ClusterParameterGroups
    * items
      * ClusterParameterStatusList
        * items [ClusterParameterStatus](#clusterparameterstatus)
      * ParameterApplyStatus
      * ParameterGroupName
  * ClusterPublicKey
  * ClusterRevisionNumber
  * ClusterSecurityGroups
    * items
      * ClusterSecurityGroupName
      * Status
  * ClusterSnapshotCopyStatus
    * DestinationRegion
    * ManualSnapshotRetentionPeriod
    * RetentionPeriod
    * SnapshotCopyGrantName
  * ClusterStatus
  * ClusterSubnetGroupName
  * ClusterVersion
  * DBName
  * DataTransferProgress
    * CurrentRateInMegaBytesPerSecond
    * DataTransferredInMegaBytes
    * ElapsedTimeInSeconds
    * EstimatedTimeToCompletionInSeconds
    * Status
    * TotalDataInMegaBytes
  * DeferredMaintenanceWindows
    * items
      * DeferMaintenanceEndTime
      * DeferMaintenanceIdentifier
      * DeferMaintenanceStartTime
  * ElasticIpStatus
    * ElasticIp
    * Status
  * ElasticResizeNumberOfNodeOptions
  * Encrypted
  * Endpoint
    * Address
    * Port
    * VpcEndpoints
      * items
        * VpcEndpointId
  * EnhancedVpcRouting
  * ExpectedNextSnapshotScheduleTime
  * ExpectedNextSnapshotScheduleTimeStatus
  * HsmStatus
    * HsmClientCertificateIdentifier
    * HsmConfigurationIdentifier
    * Status
  * IamRoles
    * items
      * ApplyStatus
      * IamRoleArn
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUsername
  * ModifyStatus
  * NextMaintenanceWindowStartTime
  * NodeType
  * NumberOfNodes
  * PendingActions
    * items [String](#string)
  * PendingModifiedValues
    * AutomatedSnapshotRetentionPeriod
    * ClusterIdentifier
    * ClusterType
    * ClusterVersion
    * EncryptionType
    * EnhancedVpcRouting
    * MaintenanceTrackName
    * MasterUserPassword
    * NodeType
    * NumberOfNodes
    * PubliclyAccessible
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * ResizeInfo
    * AllowCancelResize
    * ResizeType
  * RestoreStatus
    * CurrentRestoreRateInMegaBytesPerSecond
    * ElapsedTimeInSeconds
    * EstimatedTimeToCompletionInSeconds
    * ProgressInMegaBytes
    * SnapshotSizeInMegaBytes
    * Status
  * SnapshotScheduleIdentifier
  * SnapshotScheduleState
  * Tags
    * items
      * Key
      * Value
  * VpcId
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### ClusterAlreadyExistsFault


### ClusterAssociatedToSchedule
* ClusterAssociatedToSchedule `object`: <p/>
  * ClusterIdentifier
  * ScheduleAssociationState

### ClusterCredentials
* ClusterCredentials `object`: Temporary credentials with authorization to log on to an Amazon Redshift database. 
  * DbPassword
  * DbUser
  * Expiration

### ClusterDbRevision
* ClusterDbRevision `object`: Describes a <code>ClusterDbRevision</code>.
  * ClusterIdentifier
  * CurrentDatabaseRevision
  * DatabaseRevisionReleaseDate
  * RevisionTargets
    * items
      * DatabaseRevision
      * DatabaseRevisionReleaseDate
      * Description

### ClusterDbRevisionsList
* ClusterDbRevisionsList `array`
  * items
    * ClusterIdentifier
    * CurrentDatabaseRevision
    * DatabaseRevisionReleaseDate
    * RevisionTargets
      * items
        * DatabaseRevision
        * DatabaseRevisionReleaseDate
        * Description

### ClusterDbRevisionsMessage
* ClusterDbRevisionsMessage `object`
  * ClusterDbRevisions
    * items
      * ClusterIdentifier
      * CurrentDatabaseRevision
      * DatabaseRevisionReleaseDate
      * RevisionTargets
        * items
          * DatabaseRevision
          * DatabaseRevisionReleaseDate
          * Description
  * Marker

### ClusterIamRole
* ClusterIamRole `object`: An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services.
  * ApplyStatus
  * IamRoleArn

### ClusterIamRoleList
* ClusterIamRoleList `array`
  * items
    * ApplyStatus
    * IamRoleArn

### ClusterList
* ClusterList `array`
  * items
    * AllowVersionUpgrade
    * AutomatedSnapshotRetentionPeriod
    * AvailabilityZone
    * AvailabilityZoneRelocationStatus
    * ClusterAvailabilityStatus
    * ClusterCreateTime
    * ClusterIdentifier
    * ClusterNamespaceArn
    * ClusterNodes
      * items [ClusterNode](#clusternode)
    * ClusterParameterGroups
      * items
        * ClusterParameterStatusList
          * items [ClusterParameterStatus](#clusterparameterstatus)
        * ParameterApplyStatus
        * ParameterGroupName
    * ClusterPublicKey
    * ClusterRevisionNumber
    * ClusterSecurityGroups
      * items
        * ClusterSecurityGroupName
        * Status
    * ClusterSnapshotCopyStatus
      * DestinationRegion
      * ManualSnapshotRetentionPeriod
      * RetentionPeriod
      * SnapshotCopyGrantName
    * ClusterStatus
    * ClusterSubnetGroupName
    * ClusterVersion
    * DBName
    * DataTransferProgress
      * CurrentRateInMegaBytesPerSecond
      * DataTransferredInMegaBytes
      * ElapsedTimeInSeconds
      * EstimatedTimeToCompletionInSeconds
      * Status
      * TotalDataInMegaBytes
    * DeferredMaintenanceWindows
      * items
        * DeferMaintenanceEndTime
        * DeferMaintenanceIdentifier
        * DeferMaintenanceStartTime
    * ElasticIpStatus
      * ElasticIp
      * Status
    * ElasticResizeNumberOfNodeOptions
    * Encrypted
    * Endpoint
      * Address
      * Port
      * VpcEndpoints
        * items
          * VpcEndpointId
    * EnhancedVpcRouting
    * ExpectedNextSnapshotScheduleTime
    * ExpectedNextSnapshotScheduleTimeStatus
    * HsmStatus
      * HsmClientCertificateIdentifier
      * HsmConfigurationIdentifier
      * Status
    * IamRoles
      * items
        * ApplyStatus
        * IamRoleArn
    * KmsKeyId
    * MaintenanceTrackName
    * ManualSnapshotRetentionPeriod
    * MasterUsername
    * ModifyStatus
    * NextMaintenanceWindowStartTime
    * NodeType
    * NumberOfNodes
    * PendingActions
      * items [String](#string)
    * PendingModifiedValues
      * AutomatedSnapshotRetentionPeriod
      * ClusterIdentifier
      * ClusterType
      * ClusterVersion
      * EncryptionType
      * EnhancedVpcRouting
      * MaintenanceTrackName
      * MasterUserPassword
      * NodeType
      * NumberOfNodes
      * PubliclyAccessible
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ResizeInfo
      * AllowCancelResize
      * ResizeType
    * RestoreStatus
      * CurrentRestoreRateInMegaBytesPerSecond
      * ElapsedTimeInSeconds
      * EstimatedTimeToCompletionInSeconds
      * ProgressInMegaBytes
      * SnapshotSizeInMegaBytes
      * Status
    * SnapshotScheduleIdentifier
    * SnapshotScheduleState
    * Tags
      * items
        * Key
        * Value
    * VpcId
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### ClusterNode
* ClusterNode `object`: The identifier of a node in a cluster.
  * NodeRole
  * PrivateIPAddress
  * PublicIPAddress

### ClusterNodesList
* ClusterNodesList `array`
  * items [ClusterNode](#clusternode)

### ClusterNotFoundFault


### ClusterOnLatestRevisionFault


### ClusterParameterGroup
* ClusterParameterGroup `object`: Describes a parameter group.
  * Description
  * ParameterGroupFamily
  * ParameterGroupName
  * Tags
    * items
      * Key
      * Value

### ClusterParameterGroupAlreadyExistsFault


### ClusterParameterGroupDetails
* ClusterParameterGroupDetails `object`: Contains the output from the <a>DescribeClusterParameters</a> action. 
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### ClusterParameterGroupNameMessage
* ClusterParameterGroupNameMessage `object`: <p/>
  * ParameterGroupName
  * ParameterGroupStatus

### ClusterParameterGroupNotFoundFault


### ClusterParameterGroupQuotaExceededFault


### ClusterParameterGroupStatus
* ClusterParameterGroupStatus `object`: Describes the status of a parameter group.
  * ClusterParameterStatusList
    * items [ClusterParameterStatus](#clusterparameterstatus)
  * ParameterApplyStatus
  * ParameterGroupName

### ClusterParameterGroupStatusList
* ClusterParameterGroupStatusList `array`
  * items
    * ClusterParameterStatusList
      * items [ClusterParameterStatus](#clusterparameterstatus)
    * ParameterApplyStatus
    * ParameterGroupName

### ClusterParameterGroupsMessage
* ClusterParameterGroupsMessage `object`: Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
  * Marker
  * ParameterGroups
    * items
      * Description
      * ParameterGroupFamily
      * ParameterGroupName
      * Tags
        * items
          * Key
          * Value

### ClusterParameterStatus
* ClusterParameterStatus `object`: Describes the status of a parameter group.
  * ParameterApplyErrorDescription
  * ParameterApplyStatus
  * ParameterName

### ClusterParameterStatusList
* ClusterParameterStatusList `array`
  * items [ClusterParameterStatus](#clusterparameterstatus)

### ClusterQuotaExceededFault


### ClusterSecurityGroup
* ClusterSecurityGroup `object`: Describes a security group.
  * ClusterSecurityGroupName
  * Description
  * EC2SecurityGroups
    * items
      * EC2SecurityGroupName
      * EC2SecurityGroupOwnerId
      * Status
      * Tags
        * items
          * Key
          * Value
  * IPRanges
    * items
      * CIDRIP
      * Status
      * Tags
        * items
          * Key
          * Value
  * Tags
    * items
      * Key
      * Value

### ClusterSecurityGroupAlreadyExistsFault


### ClusterSecurityGroupMembership
* ClusterSecurityGroupMembership `object`: Describes a cluster security group.
  * ClusterSecurityGroupName
  * Status

### ClusterSecurityGroupMembershipList
* ClusterSecurityGroupMembershipList `array`
  * items
    * ClusterSecurityGroupName
    * Status

### ClusterSecurityGroupMessage
* ClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroups
    * items
      * ClusterSecurityGroupName
      * Description
      * EC2SecurityGroups
        * items
          * EC2SecurityGroupName
          * EC2SecurityGroupOwnerId
          * Status
          * Tags
      * IPRanges
        * items
          * CIDRIP
          * Status
          * Tags
      * Tags
        * items
          * Key
          * Value
  * Marker

### ClusterSecurityGroupNameList
* ClusterSecurityGroupNameList `array`
  * items

### ClusterSecurityGroupNotFoundFault


### ClusterSecurityGroupQuotaExceededFault


### ClusterSecurityGroups
* ClusterSecurityGroups `array`
  * items
    * ClusterSecurityGroupName
    * Description
    * EC2SecurityGroups
      * items
        * EC2SecurityGroupName
        * EC2SecurityGroupOwnerId
        * Status
        * Tags
          * items
    * IPRanges
      * items
        * CIDRIP
        * Status
        * Tags
          * items
    * Tags
      * items
        * Key
        * Value

### ClusterSnapshotAlreadyExistsFault


### ClusterSnapshotCopyStatus
* ClusterSnapshotCopyStatus `object`: Returns the destination region and retention period that are configured for cross-region snapshot copy.
  * DestinationRegion
  * ManualSnapshotRetentionPeriod
  * RetentionPeriod
  * SnapshotCopyGrantName

### ClusterSnapshotNotFoundFault


### ClusterSnapshotQuotaExceededFault


### ClusterSubnetGroup
* ClusterSubnetGroup `object`: Describes a subnet group.
  * ClusterSubnetGroupName
  * Description
  * SubnetGroupStatus
  * Subnets
    * items
      * SubnetAvailabilityZone
        * Name
        * SupportedPlatforms
          * items
      * SubnetIdentifier
      * SubnetStatus
  * Tags
    * items
      * Key
      * Value
  * VpcId

### ClusterSubnetGroupAlreadyExistsFault


### ClusterSubnetGroupMessage
* ClusterSubnetGroupMessage `object`: Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
  * ClusterSubnetGroups
    * items
      * ClusterSubnetGroupName
      * Description
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetStatus
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * Marker

### ClusterSubnetGroupNotFoundFault


### ClusterSubnetGroupQuotaExceededFault


### ClusterSubnetGroups
* ClusterSubnetGroups `array`
  * items
    * ClusterSubnetGroupName
    * Description
    * SubnetGroupStatus
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
          * SupportedPlatforms
        * SubnetIdentifier
        * SubnetStatus
    * Tags
      * items
        * Key
        * Value
    * VpcId

### ClusterSubnetQuotaExceededFault


### ClusterVersion
* ClusterVersion `object`: Describes a cluster version, including the parameter group family and description of the version.
  * ClusterParameterGroupFamily
  * ClusterVersion
  * Description

### ClusterVersionList
* ClusterVersionList `array`
  * items
    * ClusterParameterGroupFamily
    * ClusterVersion
    * Description

### ClusterVersionsMessage
* ClusterVersionsMessage `object`: Contains the output from the <a>DescribeClusterVersions</a> action. 
  * ClusterVersions
    * items
      * ClusterParameterGroupFamily
      * ClusterVersion
      * Description
  * Marker

### ClustersMessage
* ClustersMessage `object`: Contains the output from the <a>DescribeClusters</a> action. 
  * Clusters
    * items
      * AllowVersionUpgrade
      * AutomatedSnapshotRetentionPeriod
      * AvailabilityZone
      * AvailabilityZoneRelocationStatus
      * ClusterAvailabilityStatus
      * ClusterCreateTime
      * ClusterIdentifier
      * ClusterNamespaceArn
      * ClusterNodes
        * items [ClusterNode](#clusternode)
      * ClusterParameterGroups
        * items
          * ClusterParameterStatusList
          * ParameterApplyStatus
          * ParameterGroupName
      * ClusterPublicKey
      * ClusterRevisionNumber
      * ClusterSecurityGroups
        * items
          * ClusterSecurityGroupName
          * Status
      * ClusterSnapshotCopyStatus
        * DestinationRegion
        * ManualSnapshotRetentionPeriod
        * RetentionPeriod
        * SnapshotCopyGrantName
      * ClusterStatus
      * ClusterSubnetGroupName
      * ClusterVersion
      * DBName
      * DataTransferProgress
        * CurrentRateInMegaBytesPerSecond
        * DataTransferredInMegaBytes
        * ElapsedTimeInSeconds
        * EstimatedTimeToCompletionInSeconds
        * Status
        * TotalDataInMegaBytes
      * DeferredMaintenanceWindows
        * items
          * DeferMaintenanceEndTime
          * DeferMaintenanceIdentifier
          * DeferMaintenanceStartTime
      * ElasticIpStatus
        * ElasticIp
        * Status
      * ElasticResizeNumberOfNodeOptions
      * Encrypted
      * Endpoint
        * Address
        * Port
        * VpcEndpoints
          * items
      * EnhancedVpcRouting
      * ExpectedNextSnapshotScheduleTime
      * ExpectedNextSnapshotScheduleTimeStatus
      * HsmStatus
        * HsmClientCertificateIdentifier
        * HsmConfigurationIdentifier
        * Status
      * IamRoles
        * items
          * ApplyStatus
          * IamRoleArn
      * KmsKeyId
      * MaintenanceTrackName
      * ManualSnapshotRetentionPeriod
      * MasterUsername
      * ModifyStatus
      * NextMaintenanceWindowStartTime
      * NodeType
      * NumberOfNodes
      * PendingActions
        * items [String](#string)
      * PendingModifiedValues
        * AutomatedSnapshotRetentionPeriod
        * ClusterIdentifier
        * ClusterType
        * ClusterVersion
        * EncryptionType
        * EnhancedVpcRouting
        * MaintenanceTrackName
        * MasterUserPassword
        * NodeType
        * NumberOfNodes
        * PubliclyAccessible
      * PreferredMaintenanceWindow
      * PubliclyAccessible
      * ResizeInfo
        * AllowCancelResize
        * ResizeType
      * RestoreStatus
        * CurrentRestoreRateInMegaBytesPerSecond
        * ElapsedTimeInSeconds
        * EstimatedTimeToCompletionInSeconds
        * ProgressInMegaBytes
        * SnapshotSizeInMegaBytes
        * Status
      * SnapshotScheduleIdentifier
      * SnapshotScheduleState
      * Tags
        * items
          * Key
          * Value
      * VpcId
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### CopyClusterSnapshotMessage
* CopyClusterSnapshotMessage `object`: <p/>
  * ManualSnapshotRetentionPeriod
  * SourceSnapshotClusterIdentifier
  * SourceSnapshotIdentifier **required**
  * TargetSnapshotIdentifier **required**

### CopyClusterSnapshotResult
* CopyClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CopyToRegionDisabledFault


### CreateClusterMessage
* CreateClusterMessage `object`: <p/>
  * AdditionalInfo
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterSubnetGroupName
  * ClusterType
  * ClusterVersion
  * DBName
  * ElasticIp
  * Encrypted
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * IamRoles
    * items
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUserPassword **required**
  * MasterUsername **required**
  * NodeType **required**
  * NumberOfNodes
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * SnapshotScheduleIdentifier
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### CreateClusterParameterGroupMessage
* CreateClusterParameterGroupMessage `object`: <p/>
  * Description **required**
  * ParameterGroupFamily **required**
  * ParameterGroupName **required**
  * Tags
    * items
      * Key
      * Value

### CreateClusterParameterGroupResult
* CreateClusterParameterGroupResult `object`
  * ClusterParameterGroup [ClusterParameterGroup](#clusterparametergroup)

### CreateClusterResult
* CreateClusterResult `object`
  * Cluster [Cluster](#cluster)

### CreateClusterSecurityGroupMessage
* CreateClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroupName **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

### CreateClusterSecurityGroupResult
* CreateClusterSecurityGroupResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### CreateClusterSnapshotMessage
* CreateClusterSnapshotMessage `object`: <p/>
  * ClusterIdentifier **required**
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

### CreateClusterSnapshotResult
* CreateClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### CreateClusterSubnetGroupMessage
* CreateClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required**
  * Description **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

### CreateClusterSubnetGroupResult
* CreateClusterSubnetGroupResult `object`
  * ClusterSubnetGroup [ClusterSubnetGroup](#clustersubnetgroup)

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items
  * Severity
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

### CreateHsmClientCertificateMessage
* CreateHsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificateIdentifier **required**
  * Tags
    * items
      * Key
      * Value

### CreateHsmClientCertificateResult
* CreateHsmClientCertificateResult `object`
  * HsmClientCertificate [HsmClientCertificate](#hsmclientcertificate)

### CreateHsmConfigurationMessage
* CreateHsmConfigurationMessage `object`: <p/>
  * Description **required**
  * HsmConfigurationIdentifier **required**
  * HsmIpAddress **required**
  * HsmPartitionName **required**
  * HsmPartitionPassword **required**
  * HsmServerPublicCertificate **required**
  * Tags
    * items
      * Key
      * Value

### CreateHsmConfigurationResult
* CreateHsmConfigurationResult `object`
  * HsmConfiguration [HsmConfiguration](#hsmconfiguration)

### CreateScheduledActionMessage
* CreateScheduledActionMessage `object`
  * Enable
  * EndTime
  * IamRole **required**
  * Schedule **required**
  * ScheduledActionDescription
  * ScheduledActionName **required**
  * StartTime
  * TargetAction **required**
    * PauseCluster
      * ClusterIdentifier **required**
    * ResizeCluster
      * Classic
      * ClusterIdentifier **required**
      * ClusterType
      * NodeType
      * NumberOfNodes
    * ResumeCluster
      * ClusterIdentifier **required**

### CreateSnapshotCopyGrantMessage
* CreateSnapshotCopyGrantMessage `object`: The result of the <code>CreateSnapshotCopyGrant</code> action.
  * KmsKeyId
  * SnapshotCopyGrantName **required**
  * Tags
    * items
      * Key
      * Value

### CreateSnapshotCopyGrantResult
* CreateSnapshotCopyGrantResult `object`
  * SnapshotCopyGrant [SnapshotCopyGrant](#snapshotcopygrant)

### CreateSnapshotScheduleMessage
* CreateSnapshotScheduleMessage `object`
  * DryRun
  * NextInvocations
  * ScheduleDefinitions
    * items
  * ScheduleDescription
  * ScheduleIdentifier
  * Tags
    * items
      * Key
      * Value

### CreateTagsMessage
* CreateTagsMessage `object`: Contains the output from the <code>CreateTags</code> action. 
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

### CreateUsageLimitMessage
* CreateUsageLimitMessage `object`
  * Amount **required**
  * BreachAction
  * ClusterIdentifier **required**
  * FeatureType **required**
  * LimitType **required**
  * Period
  * Tags
    * items
      * Key
      * Value

### CustomerStorageMessage
* CustomerStorageMessage `object`
  * TotalBackupSizeInMegaBytes
  * TotalProvisionedStorageInMegaBytes

### DataTransferProgress
* DataTransferProgress `object`: Describes the status of a cluster while it is in the process of resizing with an incremental resize.
  * CurrentRateInMegaBytesPerSecond
  * DataTransferredInMegaBytes
  * ElapsedTimeInSeconds
  * EstimatedTimeToCompletionInSeconds
  * Status
  * TotalDataInMegaBytes

### DbGroupList
* DbGroupList `array`
  * items

### DefaultClusterParameters
* DefaultClusterParameters `object`: Describes the default cluster parameters for a parameter group family.
  * Marker
  * ParameterGroupFamily
  * Parameters
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### DeferredMaintenanceWindow
* DeferredMaintenanceWindow `object`: Describes a deferred maintenance window
  * DeferMaintenanceEndTime
  * DeferMaintenanceIdentifier
  * DeferMaintenanceStartTime

### DeferredMaintenanceWindowsList
* DeferredMaintenanceWindowsList `array`
  * items
    * DeferMaintenanceEndTime
    * DeferMaintenanceIdentifier
    * DeferMaintenanceStartTime

### DeleteClusterMessage
* DeleteClusterMessage `object`: <p/>
  * ClusterIdentifier **required**
  * FinalClusterSnapshotIdentifier
  * FinalClusterSnapshotRetentionPeriod
  * SkipFinalClusterSnapshot

### DeleteClusterParameterGroupMessage
* DeleteClusterParameterGroupMessage `object`: <p/>
  * ParameterGroupName **required**

### DeleteClusterResult
* DeleteClusterResult `object`
  * Cluster [Cluster](#cluster)

### DeleteClusterSecurityGroupMessage
* DeleteClusterSecurityGroupMessage `object`: <p/>
  * ClusterSecurityGroupName **required**

### DeleteClusterSnapshotMessage
* DeleteClusterSnapshotMessage `object`: <p/>
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

### DeleteClusterSnapshotMessageList
* DeleteClusterSnapshotMessageList `array`
  * items
    * SnapshotClusterIdentifier
    * SnapshotIdentifier **required**

### DeleteClusterSnapshotResult
* DeleteClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### DeleteClusterSubnetGroupMessage
* DeleteClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required**

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required**

### DeleteHsmClientCertificateMessage
* DeleteHsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificateIdentifier **required**

### DeleteHsmConfigurationMessage
* DeleteHsmConfigurationMessage `object`: <p/>
  * HsmConfigurationIdentifier **required**

### DeleteScheduledActionMessage
* DeleteScheduledActionMessage `object`
  * ScheduledActionName **required**

### DeleteSnapshotCopyGrantMessage
* DeleteSnapshotCopyGrantMessage `object`: The result of the <code>DeleteSnapshotCopyGrant</code> action.
  * SnapshotCopyGrantName **required**

### DeleteSnapshotScheduleMessage
* DeleteSnapshotScheduleMessage `object`
  * ScheduleIdentifier **required**

### DeleteTagsMessage
* DeleteTagsMessage `object`: Contains the output from the <code>DeleteTags</code> action. 
  * ResourceName **required**
  * TagKeys **required**
    * items

### DeleteUsageLimitMessage
* DeleteUsageLimitMessage `object`
  * UsageLimitId **required**

### DependentServiceRequestThrottlingFault


### DependentServiceUnavailableFault


### DescribeAccountAttributesMessage
* DescribeAccountAttributesMessage `object`
  * AttributeNames
    * items

### DescribeClusterDbRevisionsMessage
* DescribeClusterDbRevisionsMessage `object`
  * ClusterIdentifier
  * Marker
  * MaxRecords

### DescribeClusterParameterGroupsMessage
* DescribeClusterParameterGroupsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ParameterGroupName
  * TagKeys
    * items
  * TagValues
    * items

### DescribeClusterParametersMessage
* DescribeClusterParametersMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ParameterGroupName **required**
  * Source

### DescribeClusterSecurityGroupsMessage
* DescribeClusterSecurityGroupsMessage `object`: <p/>
  * ClusterSecurityGroupName
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

### DescribeClusterSnapshotsMessage
* DescribeClusterSnapshotsMessage `object`: <p/>
  * ClusterExists
  * ClusterIdentifier
  * EndTime
  * Marker
  * MaxRecords
  * OwnerAccount
  * SnapshotIdentifier
  * SnapshotType
  * SortingEntities
    * items
      * Attribute **required**
      * SortOrder
  * StartTime
  * TagKeys
    * items
  * TagValues
    * items

### DescribeClusterSubnetGroupsMessage
* DescribeClusterSubnetGroupsMessage `object`: <p/>
  * ClusterSubnetGroupName
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

### DescribeClusterTracksMessage
* DescribeClusterTracksMessage `object`
  * MaintenanceTrackName
  * Marker
  * MaxRecords

### DescribeClusterVersionsMessage
* DescribeClusterVersionsMessage `object`: <p/>
  * ClusterParameterGroupFamily
  * ClusterVersion
  * Marker
  * MaxRecords

### DescribeClustersMessage
* DescribeClustersMessage `object`: <p/>
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

### DescribeDefaultClusterParametersMessage
* DescribeDefaultClusterParametersMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ParameterGroupFamily **required**

### DescribeDefaultClusterParametersResult
* DescribeDefaultClusterParametersResult `object`
  * DefaultClusterParameters [DefaultClusterParameters](#defaultclusterparameters)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: <p/>
  * SourceType

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * SubscriptionName
  * TagKeys
    * items
  * TagValues
    * items

### DescribeEventsMessage
* DescribeEventsMessage `object`: <p/>
  * Duration
  * EndTime
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

### DescribeHsmClientCertificatesMessage
* DescribeHsmClientCertificatesMessage `object`: <p/>
  * HsmClientCertificateIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

### DescribeHsmConfigurationsMessage
* DescribeHsmConfigurationsMessage `object`: <p/>
  * HsmConfigurationIdentifier
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items

### DescribeLoggingStatusMessage
* DescribeLoggingStatusMessage `object`: <p/>
  * ClusterIdentifier **required**

### DescribeNodeConfigurationOptionsMessage
* DescribeNodeConfigurationOptionsMessage `object`
  * ActionType **required**
  * ClusterIdentifier
  * Filters
    * items
      * Name
      * Operator
      * Values
        * items
  * Marker
  * MaxRecords
  * OwnerAccount
  * SnapshotIdentifier

### DescribeOrderableClusterOptionsMessage
* DescribeOrderableClusterOptionsMessage `object`: <p/>
  * ClusterVersion
  * Marker
  * MaxRecords
  * NodeType

### DescribeReservedNodeOfferingsMessage
* DescribeReservedNodeOfferingsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ReservedNodeOfferingId

### DescribeReservedNodesMessage
* DescribeReservedNodesMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ReservedNodeId

### DescribeResizeMessage
* DescribeResizeMessage `object`: <p/>
  * ClusterIdentifier **required**

### DescribeScheduledActionsMessage
* DescribeScheduledActionsMessage `object`
  * Active
  * EndTime
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ScheduledActionName
  * StartTime
  * TargetActionType

### DescribeSnapshotCopyGrantsMessage
* DescribeSnapshotCopyGrantsMessage `object`: The result of the <code>DescribeSnapshotCopyGrants</code> action.
  * Marker
  * MaxRecords
  * SnapshotCopyGrantName
  * TagKeys
    * items
  * TagValues
    * items

### DescribeSnapshotSchedulesMessage
* DescribeSnapshotSchedulesMessage `object`
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * ScheduleIdentifier
  * TagKeys
    * items
  * TagValues
    * items

### DescribeSnapshotSchedulesOutputMessage
* DescribeSnapshotSchedulesOutputMessage `object`
  * Marker
  * SnapshotSchedules
    * items
      * AssociatedClusterCount
      * AssociatedClusters
        * items
          * ClusterIdentifier
          * ScheduleAssociationState
      * NextInvocations
        * items
      * ScheduleDefinitions
        * items
      * ScheduleDescription
      * ScheduleIdentifier
      * Tags
        * items
          * Key
          * Value

### DescribeTableRestoreStatusMessage
* DescribeTableRestoreStatusMessage `object`: <p/>
  * ClusterIdentifier
  * Marker
  * MaxRecords
  * TableRestoreRequestId

### DescribeTagsMessage
* DescribeTagsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ResourceName
  * ResourceType
  * TagKeys
    * items
  * TagValues
    * items

### DescribeUsageLimitsMessage
* DescribeUsageLimitsMessage `object`
  * ClusterIdentifier
  * FeatureType
  * Marker
  * MaxRecords
  * TagKeys
    * items
  * TagValues
    * items
  * UsageLimitId

### DisableLoggingMessage
* DisableLoggingMessage `object`: <p/>
  * ClusterIdentifier **required**

### DisableSnapshotCopyMessage
* DisableSnapshotCopyMessage `object`: <p/>
  * ClusterIdentifier **required**

### DisableSnapshotCopyResult
* DisableSnapshotCopyResult `object`
  * Cluster [Cluster](#cluster)

### Double
* Double `number`

### DoubleOptional
* DoubleOptional `number`

### EC2SecurityGroup
* EC2SecurityGroup `object`: Describes an Amazon EC2 security group.
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId
  * Status
  * Tags
    * items
      * Key
      * Value

### EC2SecurityGroupList
* EC2SecurityGroupList `array`
  * items
    * EC2SecurityGroupName
    * EC2SecurityGroupOwnerId
    * Status
    * Tags
      * items
        * Key
        * Value

### ElasticIpStatus
* ElasticIpStatus `object`: Describes the status of the elastic IP (EIP) address.
  * ElasticIp
  * Status

### EligibleTracksToUpdateList
* EligibleTracksToUpdateList `array`
  * items
    * DatabaseVersion
    * MaintenanceTrackName
    * SupportedOperations
      * items
        * OperationName

### EnableLoggingMessage
* EnableLoggingMessage `object`: <p/>
  * BucketName **required**
  * ClusterIdentifier **required**
  * S3KeyPrefix

### EnableSnapshotCopyMessage
* EnableSnapshotCopyMessage `object`: <p/>
  * ClusterIdentifier **required**
  * DestinationRegion **required**
  * ManualSnapshotRetentionPeriod
  * RetentionPeriod
  * SnapshotCopyGrantName

### EnableSnapshotCopyResult
* EnableSnapshotCopyResult `object`
  * Cluster [Cluster](#cluster)

### Endpoint
* Endpoint `object`: Describes a connection endpoint.
  * Address
  * Port
  * VpcEndpoints
    * items
      * VpcEndpointId

### Event
* Event `object`: Describes an event.
  * Date
  * EventCategories
    * items
  * EventId
  * Message
  * Severity
  * SourceIdentifier
  * SourceType

### EventCategoriesList
* EventCategoriesList `array`
  * items

### EventCategoriesMap
* EventCategoriesMap `object`: Describes event categories.
  * Events
    * items
      * EventCategories
        * items
      * EventDescription
      * EventId
      * Severity
  * SourceType

### EventCategoriesMapList
* EventCategoriesMapList `array`
  * items
    * Events
      * items
        * EventCategories
          * items
        * EventDescription
        * EventId
        * Severity
    * SourceType

### EventCategoriesMessage
* EventCategoriesMessage `object`: <p/>
  * EventCategoriesMapList
    * items
      * Events
        * items
          * EventCategories
          * EventDescription
          * EventId
          * Severity
      * SourceType

### EventInfoMap
* EventInfoMap `object`: Describes event information.
  * EventCategories
    * items
  * EventDescription
  * EventId
  * Severity

### EventInfoMapList
* EventInfoMapList `array`
  * items
    * EventCategories
      * items
    * EventDescription
    * EventId
    * Severity

### EventList
* EventList `array`
  * items
    * Date
    * EventCategories
      * items
    * EventId
    * Message
    * Severity
    * SourceIdentifier
    * SourceType

### EventSubscription
* EventSubscription `object`: Describes event subscriptions.
  * CustSubscriptionId
  * CustomerAwsId
  * Enabled
  * EventCategoriesList
    * items
  * Severity
  * SnsTopicArn
  * SourceIdsList
    * items
  * SourceType
  * Status
  * SubscriptionCreationTime
  * Tags
    * items
      * Key
      * Value

### EventSubscriptionQuotaExceededFault


### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items
    * CustSubscriptionId
    * CustomerAwsId
    * Enabled
    * EventCategoriesList
      * items
    * Severity
    * SnsTopicArn
    * SourceIdsList
      * items
    * SourceType
    * Status
    * SubscriptionCreationTime
    * Tags
      * items
        * Key
        * Value

### EventSubscriptionsMessage
* EventSubscriptionsMessage `object`: <p/>
  * EventSubscriptionsList
    * items
      * CustSubscriptionId
      * CustomerAwsId
      * Enabled
      * EventCategoriesList
        * items
      * Severity
      * SnsTopicArn
      * SourceIdsList
        * items
      * SourceType
      * Status
      * SubscriptionCreationTime
      * Tags
        * items
          * Key
          * Value
  * Marker

### EventsMessage
* EventsMessage `object`: <p/>
  * Events
    * items
      * Date
      * EventCategories
        * items
      * EventId
      * Message
      * Severity
      * SourceIdentifier
      * SourceType
  * Marker

### GetClusterCredentialsMessage
* GetClusterCredentialsMessage `object`: The request parameters to get cluster credentials.
  * AutoCreate
  * ClusterIdentifier **required**
  * DbGroups
    * items
  * DbName
  * DbUser **required**
  * DurationSeconds

### GetReservedNodeExchangeOfferingsInputMessage
* GetReservedNodeExchangeOfferingsInputMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ReservedNodeId **required**

### GetReservedNodeExchangeOfferingsOutputMessage
* GetReservedNodeExchangeOfferingsOutputMessage `object`
  * Marker
  * ReservedNodeOfferings
    * items
      * CurrencyCode
      * Duration
      * FixedPrice
      * NodeType
      * OfferingType
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedNodeOfferingId
      * ReservedNodeOfferingType
      * UsagePrice

### HsmClientCertificate
* HsmClientCertificate `object`: Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
  * HsmClientCertificateIdentifier
  * HsmClientCertificatePublicKey
  * Tags
    * items
      * Key
      * Value

### HsmClientCertificateAlreadyExistsFault


### HsmClientCertificateList
* HsmClientCertificateList `array`
  * items
    * HsmClientCertificateIdentifier
    * HsmClientCertificatePublicKey
    * Tags
      * items
        * Key
        * Value

### HsmClientCertificateMessage
* HsmClientCertificateMessage `object`: <p/>
  * HsmClientCertificates
    * items
      * HsmClientCertificateIdentifier
      * HsmClientCertificatePublicKey
      * Tags
        * items
          * Key
          * Value
  * Marker

### HsmClientCertificateNotFoundFault


### HsmClientCertificateQuotaExceededFault


### HsmConfiguration
* HsmConfiguration `object`: Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
  * Description
  * HsmConfigurationIdentifier
  * HsmIpAddress
  * HsmPartitionName
  * Tags
    * items
      * Key
      * Value

### HsmConfigurationAlreadyExistsFault


### HsmConfigurationList
* HsmConfigurationList `array`
  * items
    * Description
    * HsmConfigurationIdentifier
    * HsmIpAddress
    * HsmPartitionName
    * Tags
      * items
        * Key
        * Value

### HsmConfigurationMessage
* HsmConfigurationMessage `object`: <p/>
  * HsmConfigurations
    * items
      * Description
      * HsmConfigurationIdentifier
      * HsmIpAddress
      * HsmPartitionName
      * Tags
        * items
          * Key
          * Value
  * Marker

### HsmConfigurationNotFoundFault


### HsmConfigurationQuotaExceededFault


### HsmStatus
* HsmStatus `object`: Describes the status of changes to HSM settings.
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * Status

### IPRange
* IPRange `object`: Describes an IP range used in a security group.
  * CIDRIP
  * Status
  * Tags
    * items
      * Key
      * Value

### IPRangeList
* IPRangeList `array`
  * items
    * CIDRIP
    * Status
    * Tags
      * items
        * Key
        * Value

### IamRoleArnList
* IamRoleArnList `array`
  * items

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


### IncompatibleOrderableOptions


### InsufficientClusterCapacityFault


### InsufficientS3BucketPolicyFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidClusterParameterGroupStateFault


### InvalidClusterSecurityGroupStateFault


### InvalidClusterSnapshotScheduleStateFault


### InvalidClusterSnapshotStateFault


### InvalidClusterStateFault


### InvalidClusterSubnetGroupStateFault


### InvalidClusterSubnetStateFault


### InvalidClusterTrackFault


### InvalidElasticIpFault


### InvalidHsmClientCertificateStateFault


### InvalidHsmConfigurationStateFault


### InvalidReservedNodeStateFault


### InvalidRestoreFault


### InvalidRetentionPeriodFault


### InvalidS3BucketNameFault


### InvalidS3KeyPrefixFault


### InvalidScheduleFault


### InvalidScheduledActionFault


### InvalidSnapshotCopyGrantStateFault


### InvalidSubnet


### InvalidSubscriptionStateFault


### InvalidTableRestoreArgumentFault


### InvalidTagFault


### InvalidUsageLimitFault


### InvalidVPCNetworkStateFault


### LimitExceededFault


### LoggingStatus
* LoggingStatus `object`: Describes the status of logging for a cluster.
  * BucketName
  * LastFailureMessage
  * LastFailureTime
  * LastSuccessfulDeliveryTime
  * LoggingEnabled
  * S3KeyPrefix

### Long
* Long `integer`

### LongOptional
* LongOptional `integer`

### MaintenanceTrack
* MaintenanceTrack `object`: Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. 
  * DatabaseVersion
  * MaintenanceTrackName
  * UpdateTargets
    * items
      * DatabaseVersion
      * MaintenanceTrackName
      * SupportedOperations
        * items
          * OperationName

### Mode
* Mode `string` (values: standard, high-performance)

### ModifyClusterDbRevisionMessage
* ModifyClusterDbRevisionMessage `object`
  * ClusterIdentifier **required**
  * RevisionTarget **required**

### ModifyClusterDbRevisionResult
* ModifyClusterDbRevisionResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterIamRolesMessage
* ModifyClusterIamRolesMessage `object`: <p/>
  * AddIamRoles
    * items
  * ClusterIdentifier **required**
  * RemoveIamRoles
    * items

### ModifyClusterIamRolesResult
* ModifyClusterIamRolesResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterMaintenanceMessage
* ModifyClusterMaintenanceMessage `object`
  * ClusterIdentifier **required**
  * DeferMaintenance
  * DeferMaintenanceDuration
  * DeferMaintenanceEndTime
  * DeferMaintenanceIdentifier
  * DeferMaintenanceStartTime

### ModifyClusterMaintenanceResult
* ModifyClusterMaintenanceResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterMessage
* ModifyClusterMessage `object`: <p/>
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterType
  * ClusterVersion
  * ElasticIp
  * Encrypted
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * MasterUserPassword
  * NewClusterIdentifier
  * NodeType
  * NumberOfNodes
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * VpcSecurityGroupIds
    * items

### ModifyClusterParameterGroupMessage
* ModifyClusterParameterGroupMessage `object`: Describes a modify cluster parameter group operation. 
  * ParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### ModifyClusterResult
* ModifyClusterResult `object`
  * Cluster [Cluster](#cluster)

### ModifyClusterSnapshotMessage
* ModifyClusterSnapshotMessage `object`
  * Force
  * ManualSnapshotRetentionPeriod
  * SnapshotIdentifier **required**

### ModifyClusterSnapshotResult
* ModifyClusterSnapshotResult `object`
  * Snapshot [Snapshot](#snapshot)

### ModifyClusterSnapshotScheduleMessage
* ModifyClusterSnapshotScheduleMessage `object`
  * ClusterIdentifier **required**
  * DisassociateSchedule
  * ScheduleIdentifier

### ModifyClusterSubnetGroupMessage
* ModifyClusterSubnetGroupMessage `object`: <p/>
  * ClusterSubnetGroupName **required**
  * Description
  * SubnetIds **required**
    * items

### ModifyClusterSubnetGroupResult
* ModifyClusterSubnetGroupResult `object`
  * ClusterSubnetGroup [ClusterSubnetGroup](#clustersubnetgroup)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items
  * Severity
  * SnsTopicArn
  * SourceIds
    * items
  * SourceType
  * SubscriptionName **required**

### ModifyEventSubscriptionResult
* ModifyEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

### ModifyScheduledActionMessage
* ModifyScheduledActionMessage `object`
  * Enable
  * EndTime
  * IamRole
  * Schedule
  * ScheduledActionDescription
  * ScheduledActionName **required**
  * StartTime
  * TargetAction
    * PauseCluster
      * ClusterIdentifier **required**
    * ResizeCluster
      * Classic
      * ClusterIdentifier **required**
      * ClusterType
      * NodeType
      * NumberOfNodes
    * ResumeCluster
      * ClusterIdentifier **required**

### ModifySnapshotCopyRetentionPeriodMessage
* ModifySnapshotCopyRetentionPeriodMessage `object`: <p/>
  * ClusterIdentifier **required**
  * Manual
  * RetentionPeriod **required**

### ModifySnapshotCopyRetentionPeriodResult
* ModifySnapshotCopyRetentionPeriodResult `object`
  * Cluster [Cluster](#cluster)

### ModifySnapshotScheduleMessage
* ModifySnapshotScheduleMessage `object`
  * ScheduleDefinitions **required**
    * items
  * ScheduleIdentifier **required**

### ModifyUsageLimitMessage
* ModifyUsageLimitMessage `object`
  * Amount
  * BreachAction
  * UsageLimitId **required**

### NodeConfigurationOption
* NodeConfigurationOption `object`: A list of node configurations.
  * EstimatedDiskUtilizationPercent
  * Mode
  * NodeType
  * NumberOfNodes

### NodeConfigurationOptionList
* NodeConfigurationOptionList `array`
  * items
    * EstimatedDiskUtilizationPercent
    * Mode
    * NodeType
    * NumberOfNodes

### NodeConfigurationOptionsFilter
* NodeConfigurationOptionsFilter `object`: A set of elements to filter the returned node configurations.
  * Name
  * Operator
  * Values
    * items

### NodeConfigurationOptionsFilterList
* NodeConfigurationOptionsFilterList `array`
  * items
    * Name
    * Operator
    * Values
      * items

### NodeConfigurationOptionsFilterName
* NodeConfigurationOptionsFilterName `string` (values: NodeType, NumberOfNodes, EstimatedDiskUtilizationPercent, Mode)

### NodeConfigurationOptionsMessage
* NodeConfigurationOptionsMessage `object`
  * Marker
  * NodeConfigurationOptionList
    * items
      * EstimatedDiskUtilizationPercent
      * Mode
      * NodeType
      * NumberOfNodes

### NumberOfNodesPerClusterLimitExceededFault


### NumberOfNodesQuotaExceededFault


### OperatorType
* OperatorType `string` (values: eq, lt, gt, le, ge, in, between)

### OrderableClusterOption
* OrderableClusterOption `object`: Describes an orderable cluster option.
  * AvailabilityZones
    * items
      * Name
      * SupportedPlatforms
        * items
          * Name
  * ClusterType
  * ClusterVersion
  * NodeType

### OrderableClusterOptionsList
* OrderableClusterOptionsList `array`
  * items
    * AvailabilityZones
      * items
        * Name
        * SupportedPlatforms
          * items
    * ClusterType
    * ClusterVersion
    * NodeType

### OrderableClusterOptionsMessage
* OrderableClusterOptionsMessage `object`: Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
  * Marker
  * OrderableClusterOptions
    * items
      * AvailabilityZones
        * items
          * Name
          * SupportedPlatforms
      * ClusterType
      * ClusterVersion
      * NodeType

### Parameter
* Parameter `object`: Describes a parameter in a cluster parameter group.
  * AllowedValues
  * ApplyType
  * DataType
  * Description
  * IsModifiable
  * MinimumEngineVersion
  * ParameterName
  * ParameterValue
  * Source

### ParameterApplyType
* ParameterApplyType `string` (values: static, dynamic)

### ParameterGroupList
* ParameterGroupList `array`
  * items
    * Description
    * ParameterGroupFamily
    * ParameterGroupName
    * Tags
      * items
        * Key
        * Value

### ParametersList
* ParametersList `array`
  * items
    * AllowedValues
    * ApplyType
    * DataType
    * Description
    * IsModifiable
    * MinimumEngineVersion
    * ParameterName
    * ParameterValue
    * Source

### PauseClusterMessage
* PauseClusterMessage `object`: Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. 
  * ClusterIdentifier **required**

### PauseClusterResult
* PauseClusterResult `object`
  * Cluster [Cluster](#cluster)

### PendingActionsList
* PendingActionsList `array`
  * items [String](#string)

### PendingModifiedValues
* PendingModifiedValues `object`: Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
  * AutomatedSnapshotRetentionPeriod
  * ClusterIdentifier
  * ClusterType
  * ClusterVersion
  * EncryptionType
  * EnhancedVpcRouting
  * MaintenanceTrackName
  * MasterUserPassword
  * NodeType
  * NumberOfNodes
  * PubliclyAccessible

### PurchaseReservedNodeOfferingMessage
* PurchaseReservedNodeOfferingMessage `object`: <p/>
  * NodeCount
  * ReservedNodeOfferingId **required**

### PurchaseReservedNodeOfferingResult
* PurchaseReservedNodeOfferingResult `object`
  * ReservedNode [ReservedNode](#reservednode)

### RebootClusterMessage
* RebootClusterMessage `object`: <p/>
  * ClusterIdentifier **required**

### RebootClusterResult
* RebootClusterResult `object`
  * Cluster [Cluster](#cluster)

### RecurringCharge
* RecurringCharge `object`: Describes a recurring charge.
  * RecurringChargeAmount
  * RecurringChargeFrequency

### RecurringChargeList
* RecurringChargeList `array`
  * items
    * RecurringChargeAmount
    * RecurringChargeFrequency

### ReservedNode
* ReservedNode `object`: Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. 
  * CurrencyCode
  * Duration
  * FixedPrice
  * NodeCount
  * NodeType
  * OfferingType
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservedNodeId
  * ReservedNodeOfferingId
  * ReservedNodeOfferingType
  * StartTime
  * State
  * UsagePrice

### ReservedNodeAlreadyExistsFault


### ReservedNodeAlreadyMigratedFault


### ReservedNodeList
* ReservedNodeList `array`
  * items
    * CurrencyCode
    * Duration
    * FixedPrice
    * NodeCount
    * NodeType
    * OfferingType
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedNodeId
    * ReservedNodeOfferingId
    * ReservedNodeOfferingType
    * StartTime
    * State
    * UsagePrice

### ReservedNodeNotFoundFault


### ReservedNodeOffering
* ReservedNodeOffering `object`: Describes a reserved node offering.
  * CurrencyCode
  * Duration
  * FixedPrice
  * NodeType
  * OfferingType
  * RecurringCharges
    * items
      * RecurringChargeAmount
      * RecurringChargeFrequency
  * ReservedNodeOfferingId
  * ReservedNodeOfferingType
  * UsagePrice

### ReservedNodeOfferingList
* ReservedNodeOfferingList `array`
  * items
    * CurrencyCode
    * Duration
    * FixedPrice
    * NodeType
    * OfferingType
    * RecurringCharges
      * items
        * RecurringChargeAmount
        * RecurringChargeFrequency
    * ReservedNodeOfferingId
    * ReservedNodeOfferingType
    * UsagePrice

### ReservedNodeOfferingNotFoundFault


### ReservedNodeOfferingType
* ReservedNodeOfferingType `string` (values: Regular, Upgradable)

### ReservedNodeOfferingsMessage
* ReservedNodeOfferingsMessage `object`: <p/>
  * Marker
  * ReservedNodeOfferings
    * items
      * CurrencyCode
      * Duration
      * FixedPrice
      * NodeType
      * OfferingType
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedNodeOfferingId
      * ReservedNodeOfferingType
      * UsagePrice

### ReservedNodeQuotaExceededFault


### ReservedNodesMessage
* ReservedNodesMessage `object`: <p/>
  * Marker
  * ReservedNodes
    * items
      * CurrencyCode
      * Duration
      * FixedPrice
      * NodeCount
      * NodeType
      * OfferingType
      * RecurringCharges
        * items
          * RecurringChargeAmount
          * RecurringChargeFrequency
      * ReservedNodeId
      * ReservedNodeOfferingId
      * ReservedNodeOfferingType
      * StartTime
      * State
      * UsagePrice

### ResetClusterParameterGroupMessage
* ResetClusterParameterGroupMessage `object`: <p/>
  * ParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

### ResizeClusterMessage
* ResizeClusterMessage `object`: Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. 
  * Classic
  * ClusterIdentifier **required**
  * ClusterType
  * NodeType
  * NumberOfNodes

### ResizeClusterResult
* ResizeClusterResult `object`
  * Cluster [Cluster](#cluster)

### ResizeInfo
* ResizeInfo `object`: Describes a resize operation.
  * AllowCancelResize
  * ResizeType

### ResizeNotFoundFault


### ResizeProgressMessage
* ResizeProgressMessage `object`: Describes the result of a cluster resize operation.
  * AvgResizeRateInMegaBytesPerSecond
  * DataTransferProgressPercent
  * ElapsedTimeInSeconds
  * EstimatedTimeToCompletionInSeconds
  * ImportTablesCompleted
    * items [String](#string)
  * ImportTablesInProgress
    * items [String](#string)
  * ImportTablesNotStarted
    * items [String](#string)
  * Message
  * ProgressInMegaBytes
  * ResizeType
  * Status
  * TargetClusterType
  * TargetEncryptionType
  * TargetNodeType
  * TargetNumberOfNodes
  * TotalResizeDataInMegaBytes

### ResourceNotFoundFault


### RestorableNodeTypeList
* RestorableNodeTypeList `array`
  * items

### RestoreFromClusterSnapshotMessage
* RestoreFromClusterSnapshotMessage `object`: <p/>
  * AdditionalInfo
  * AllowVersionUpgrade
  * AutomatedSnapshotRetentionPeriod
  * AvailabilityZone
  * AvailabilityZoneRelocation
  * ClusterIdentifier **required**
  * ClusterParameterGroupName
  * ClusterSecurityGroups
    * items
  * ClusterSubnetGroupName
  * ElasticIp
  * EnhancedVpcRouting
  * HsmClientCertificateIdentifier
  * HsmConfigurationIdentifier
  * IamRoles
    * items
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRetentionPeriod
  * NodeType
  * NumberOfNodes
  * OwnerAccount
  * Port
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**
  * SnapshotScheduleIdentifier
  * VpcSecurityGroupIds
    * items

### RestoreFromClusterSnapshotResult
* RestoreFromClusterSnapshotResult `object`
  * Cluster [Cluster](#cluster)

### RestoreStatus
* RestoreStatus `object`: Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
  * CurrentRestoreRateInMegaBytesPerSecond
  * ElapsedTimeInSeconds
  * EstimatedTimeToCompletionInSeconds
  * ProgressInMegaBytes
  * SnapshotSizeInMegaBytes
  * Status

### RestoreTableFromClusterSnapshotMessage
* RestoreTableFromClusterSnapshotMessage `object`: <p/>
  * ClusterIdentifier **required**
  * NewTableName **required**
  * SnapshotIdentifier **required**
  * SourceDatabaseName **required**
  * SourceSchemaName
  * SourceTableName **required**
  * TargetDatabaseName
  * TargetSchemaName

### RestoreTableFromClusterSnapshotResult
* RestoreTableFromClusterSnapshotResult `object`
  * TableRestoreStatus [TableRestoreStatus](#tablerestorestatus)

### ResumeClusterMessage
* ResumeClusterMessage `object`: Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. 
  * ClusterIdentifier **required**

### ResumeClusterResult
* ResumeClusterResult `object`
  * Cluster [Cluster](#cluster)

### RevisionTarget
* RevisionTarget `object`: Describes a <code>RevisionTarget</code>.
  * DatabaseRevision
  * DatabaseRevisionReleaseDate
  * Description

### RevisionTargetsList
* RevisionTargetsList `array`
  * items
    * DatabaseRevision
    * DatabaseRevisionReleaseDate
    * Description

### RevokeClusterSecurityGroupIngressMessage
* RevokeClusterSecurityGroupIngressMessage `object`: <p/>
  * CIDRIP
  * ClusterSecurityGroupName **required**
  * EC2SecurityGroupName
  * EC2SecurityGroupOwnerId

### RevokeClusterSecurityGroupIngressResult
* RevokeClusterSecurityGroupIngressResult `object`
  * ClusterSecurityGroup [ClusterSecurityGroup](#clustersecuritygroup)

### RevokeSnapshotAccessMessage
* RevokeSnapshotAccessMessage `object`: <p/>
  * AccountWithRestoreAccess **required**
  * SnapshotClusterIdentifier
  * SnapshotIdentifier **required**

### RevokeSnapshotAccessResult
* RevokeSnapshotAccessResult `object`
  * Snapshot [Snapshot](#snapshot)

### RotateEncryptionKeyMessage
* RotateEncryptionKeyMessage `object`: <p/>
  * ClusterIdentifier **required**

### RotateEncryptionKeyResult
* RotateEncryptionKeyResult `object`
  * Cluster [Cluster](#cluster)

### SNSInvalidTopicFault


### SNSNoAuthorizationFault


### SNSTopicArnNotFoundFault


### ScheduleDefinitionList
* ScheduleDefinitionList `array`
  * items

### ScheduleDefinitionTypeUnsupportedFault


### ScheduleState
* ScheduleState `string` (values: MODIFYING, ACTIVE, FAILED)

### ScheduledAction
* ScheduledAction `object`: Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
  * EndTime
  * IamRole
  * NextInvocations
    * items
  * Schedule
  * ScheduledActionDescription
  * ScheduledActionName
  * StartTime
  * State
  * TargetAction
    * PauseCluster
      * ClusterIdentifier **required**
    * ResizeCluster
      * Classic
      * ClusterIdentifier **required**
      * ClusterType
      * NodeType
      * NumberOfNodes
    * ResumeCluster
      * ClusterIdentifier **required**

### ScheduledActionAlreadyExistsFault


### ScheduledActionFilter
* ScheduledActionFilter `object`: A set of elements to filter the returned scheduled actions. 
  * Name **required**
  * Values **required**
    * items

### ScheduledActionFilterList
* ScheduledActionFilterList `array`
  * items
    * Name **required**
    * Values **required**
      * items

### ScheduledActionFilterName
* ScheduledActionFilterName `string` (values: cluster-identifier, iam-role)

### ScheduledActionList
* ScheduledActionList `array`
  * items
    * EndTime
    * IamRole
    * NextInvocations
      * items
    * Schedule
    * ScheduledActionDescription
    * ScheduledActionName
    * StartTime
    * State
    * TargetAction
      * PauseCluster
        * ClusterIdentifier **required**
      * ResizeCluster
        * Classic
        * ClusterIdentifier **required**
        * ClusterType
        * NodeType
        * NumberOfNodes
      * ResumeCluster
        * ClusterIdentifier **required**

### ScheduledActionNotFoundFault


### ScheduledActionQuotaExceededFault


### ScheduledActionState
* ScheduledActionState `string` (values: ACTIVE, DISABLED)

### ScheduledActionTimeList
* ScheduledActionTimeList `array`
  * items

### ScheduledActionType
* ScheduledActionType `object`: The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. 
  * PauseCluster
    * ClusterIdentifier **required**
  * ResizeCluster
    * Classic
    * ClusterIdentifier **required**
    * ClusterType
    * NodeType
    * NumberOfNodes
  * ResumeCluster
    * ClusterIdentifier **required**

### ScheduledActionTypeUnsupportedFault


### ScheduledActionTypeValues
* ScheduledActionTypeValues `string` (values: ResizeCluster, PauseCluster, ResumeCluster)

### ScheduledActionsMessage
* ScheduledActionsMessage `object`
  * Marker
  * ScheduledActions
    * items
      * EndTime
      * IamRole
      * NextInvocations
        * items
      * Schedule
      * ScheduledActionDescription
      * ScheduledActionName
      * StartTime
      * State
      * TargetAction
        * PauseCluster
          * ClusterIdentifier **required**
        * ResizeCluster
          * Classic
          * ClusterIdentifier **required**
          * ClusterType
          * NodeType
          * NumberOfNodes
        * ResumeCluster
          * ClusterIdentifier **required**

### ScheduledSnapshotTimeList
* ScheduledSnapshotTimeList `array`
  * items

### SensitiveString
* SensitiveString `string`

### Snapshot
* Snapshot `object`: Describes a snapshot.
  * AccountsWithRestoreAccess
    * items
      * AccountAlias
      * AccountId
  * ActualIncrementalBackupSizeInMegaBytes
  * AvailabilityZone
  * BackupProgressInMegaBytes
  * ClusterCreateTime
  * ClusterIdentifier
  * ClusterVersion
  * CurrentBackupRateInMegaBytesPerSecond
  * DBName
  * ElapsedTimeInSeconds
  * Encrypted
  * EncryptedWithHSM
  * EngineFullVersion
  * EnhancedVpcRouting
  * EstimatedSecondsToCompletion
  * KmsKeyId
  * MaintenanceTrackName
  * ManualSnapshotRemainingDays
  * ManualSnapshotRetentionPeriod
  * MasterUsername
  * NodeType
  * NumberOfNodes
  * OwnerAccount
  * Port
  * RestorableNodeTypes
    * items
  * SnapshotCreateTime
  * SnapshotIdentifier
  * SnapshotRetentionStartTime
  * SnapshotType
  * SourceRegion
  * Status
  * Tags
    * items
      * Key
      * Value
  * TotalBackupSizeInMegaBytes
  * VpcId

### SnapshotAttributeToSortBy
* SnapshotAttributeToSortBy `string` (values: SOURCE_TYPE, TOTAL_SIZE, CREATE_TIME)

### SnapshotCopyAlreadyDisabledFault


### SnapshotCopyAlreadyEnabledFault


### SnapshotCopyDisabledFault


### SnapshotCopyGrant
* SnapshotCopyGrant `object`: <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
  * KmsKeyId
  * SnapshotCopyGrantName
  * Tags
    * items
      * Key
      * Value

### SnapshotCopyGrantAlreadyExistsFault


### SnapshotCopyGrantList
* SnapshotCopyGrantList `array`
  * items
    * KmsKeyId
    * SnapshotCopyGrantName
    * Tags
      * items
        * Key
        * Value

### SnapshotCopyGrantMessage
* SnapshotCopyGrantMessage `object`: <p/>
  * Marker
  * SnapshotCopyGrants
    * items
      * KmsKeyId
      * SnapshotCopyGrantName
      * Tags
        * items
          * Key
          * Value

### SnapshotCopyGrantNotFoundFault


### SnapshotCopyGrantQuotaExceededFault


### SnapshotErrorMessage
* SnapshotErrorMessage `object`: Describes the errors returned by a snapshot.
  * FailureCode
  * FailureReason
  * SnapshotClusterIdentifier
  * SnapshotIdentifier

### SnapshotIdentifierList
* SnapshotIdentifierList `array`
  * items

### SnapshotList
* SnapshotList `array`
  * items
    * AccountsWithRestoreAccess
      * items
        * AccountAlias
        * AccountId
    * ActualIncrementalBackupSizeInMegaBytes
    * AvailabilityZone
    * BackupProgressInMegaBytes
    * ClusterCreateTime
    * ClusterIdentifier
    * ClusterVersion
    * CurrentBackupRateInMegaBytesPerSecond
    * DBName
    * ElapsedTimeInSeconds
    * Encrypted
    * EncryptedWithHSM
    * EngineFullVersion
    * EnhancedVpcRouting
    * EstimatedSecondsToCompletion
    * KmsKeyId
    * MaintenanceTrackName
    * ManualSnapshotRemainingDays
    * ManualSnapshotRetentionPeriod
    * MasterUsername
    * NodeType
    * NumberOfNodes
    * OwnerAccount
    * Port
    * RestorableNodeTypes
      * items
    * SnapshotCreateTime
    * SnapshotIdentifier
    * SnapshotRetentionStartTime
    * SnapshotType
    * SourceRegion
    * Status
    * Tags
      * items
        * Key
        * Value
    * TotalBackupSizeInMegaBytes
    * VpcId

### SnapshotMessage
* SnapshotMessage `object`: Contains the output from the <a>DescribeClusterSnapshots</a> action. 
  * Marker
  * Snapshots
    * items
      * AccountsWithRestoreAccess
        * items
          * AccountAlias
          * AccountId
      * ActualIncrementalBackupSizeInMegaBytes
      * AvailabilityZone
      * BackupProgressInMegaBytes
      * ClusterCreateTime
      * ClusterIdentifier
      * ClusterVersion
      * CurrentBackupRateInMegaBytesPerSecond
      * DBName
      * ElapsedTimeInSeconds
      * Encrypted
      * EncryptedWithHSM
      * EngineFullVersion
      * EnhancedVpcRouting
      * EstimatedSecondsToCompletion
      * KmsKeyId
      * MaintenanceTrackName
      * ManualSnapshotRemainingDays
      * ManualSnapshotRetentionPeriod
      * MasterUsername
      * NodeType
      * NumberOfNodes
      * OwnerAccount
      * Port
      * RestorableNodeTypes
        * items
      * SnapshotCreateTime
      * SnapshotIdentifier
      * SnapshotRetentionStartTime
      * SnapshotType
      * SourceRegion
      * Status
      * Tags
        * items
          * Key
          * Value
      * TotalBackupSizeInMegaBytes
      * VpcId

### SnapshotSchedule
* SnapshotSchedule `object`: Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
  * AssociatedClusterCount
  * AssociatedClusters
    * items
      * ClusterIdentifier
      * ScheduleAssociationState
  * NextInvocations
    * items
  * ScheduleDefinitions
    * items
  * ScheduleDescription
  * ScheduleIdentifier
  * Tags
    * items
      * Key
      * Value

### SnapshotScheduleAlreadyExistsFault


### SnapshotScheduleList
* SnapshotScheduleList `array`
  * items
    * AssociatedClusterCount
    * AssociatedClusters
      * items
        * ClusterIdentifier
        * ScheduleAssociationState
    * NextInvocations
      * items
    * ScheduleDefinitions
      * items
    * ScheduleDescription
    * ScheduleIdentifier
    * Tags
      * items
        * Key
        * Value

### SnapshotScheduleNotFoundFault


### SnapshotScheduleQuotaExceededFault


### SnapshotScheduleUpdateInProgressFault


### SnapshotSortingEntity
* SnapshotSortingEntity `object`: Describes a sorting entity
  * Attribute **required**
  * SortOrder

### SnapshotSortingEntityList
* SnapshotSortingEntityList `array`
  * items
    * Attribute **required**
    * SortOrder

### SortByOrder
* SortByOrder `string` (values: ASC, DESC)

### SourceIdsList
* SourceIdsList `array`
  * items

### SourceNotFoundFault


### SourceType
* SourceType `string` (values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, scheduled-action)

### SpartaProxyVpcEndpoint
* SpartaProxyVpcEndpoint `object`: The connection endpoint for connecting an Amazon Redshift cluster through the proxy.
  * VpcEndpointId

### SpartaProxyVpcEndpointList
* SpartaProxyVpcEndpointList `array`
  * items
    * VpcEndpointId

### String
* String `string`

### Subnet
* Subnet `object`: Describes a subnet.
  * SubnetAvailabilityZone
    * Name
    * SupportedPlatforms
      * items
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
      * SupportedPlatforms
        * items
          * Name
    * SubnetIdentifier
    * SubnetStatus

### SubscriptionAlreadyExistFault


### SubscriptionCategoryNotFoundFault


### SubscriptionEventIdNotFoundFault


### SubscriptionNotFoundFault


### SubscriptionSeverityNotFoundFault


### SupportedOperation
* SupportedOperation `object`: Describes the operations that are allowed on a maintenance track.
  * OperationName

### SupportedOperationList
* SupportedOperationList `array`
  * items
    * OperationName

### SupportedPlatform
* SupportedPlatform `object`: A list of supported platforms for orderable clusters.
  * Name

### SupportedPlatformsList
* SupportedPlatformsList `array`
  * items
    * Name

### TStamp
* TStamp `string`

### TableLimitExceededFault


### TableRestoreNotFoundFault


### TableRestoreStatus
* TableRestoreStatus `object`: Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
  * ClusterIdentifier
  * Message
  * NewTableName
  * ProgressInMegaBytes
  * RequestTime
  * SnapshotIdentifier
  * SourceDatabaseName
  * SourceSchemaName
  * SourceTableName
  * Status
  * TableRestoreRequestId
  * TargetDatabaseName
  * TargetSchemaName
  * TotalDataInMegaBytes

### TableRestoreStatusList
* TableRestoreStatusList `array`
  * items
    * ClusterIdentifier
    * Message
    * NewTableName
    * ProgressInMegaBytes
    * RequestTime
    * SnapshotIdentifier
    * SourceDatabaseName
    * SourceSchemaName
    * SourceTableName
    * Status
    * TableRestoreRequestId
    * TargetDatabaseName
    * TargetSchemaName
    * TotalDataInMegaBytes

### TableRestoreStatusMessage
* TableRestoreStatusMessage `object`: <p/>
  * Marker
  * TableRestoreStatusDetails
    * items
      * ClusterIdentifier
      * Message
      * NewTableName
      * ProgressInMegaBytes
      * RequestTime
      * SnapshotIdentifier
      * SourceDatabaseName
      * SourceSchemaName
      * SourceTableName
      * Status
      * TableRestoreRequestId
      * TargetDatabaseName
      * TargetSchemaName
      * TotalDataInMegaBytes

### TableRestoreStatusType
* TableRestoreStatusType `string` (values: PENDING, IN_PROGRESS, SUCCEEDED, FAILED, CANCELED)

### Tag
* Tag `object`: A tag consisting of a name/value pair for a resource.
  * Key
  * Value

### TagKeyList
* TagKeyList `array`
  * items

### TagLimitExceededFault


### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagValueList
* TagValueList `array`
  * items

### TaggedResource
* TaggedResource `object`: A tag and its associated resource.
  * ResourceName
  * ResourceType
  * Tag
    * Key
    * Value

### TaggedResourceList
* TaggedResourceList `array`
  * items
    * ResourceName
    * ResourceType
    * Tag
      * Key
      * Value

### TaggedResourceListMessage
* TaggedResourceListMessage `object`: <p/>
  * Marker
  * TaggedResources
    * items
      * ResourceName
      * ResourceType
      * Tag
        * Key
        * Value

### TrackList
* TrackList `array`
  * items
    * DatabaseVersion
    * MaintenanceTrackName
    * UpdateTargets
      * items
        * DatabaseVersion
        * MaintenanceTrackName
        * SupportedOperations
          * items

### TrackListMessage
* TrackListMessage `object`
  * MaintenanceTracks
    * items
      * DatabaseVersion
      * MaintenanceTrackName
      * UpdateTargets
        * items
          * DatabaseVersion
          * MaintenanceTrackName
          * SupportedOperations
  * Marker

### UnauthorizedOperation


### UnknownSnapshotCopyRegionFault


### UnsupportedOperationFault


### UnsupportedOptionFault


### UpdateTarget
* UpdateTarget `object`: A maintenance track that you can switch the current track to.
  * DatabaseVersion
  * MaintenanceTrackName
  * SupportedOperations
    * items
      * OperationName

### UsageLimit
* UsageLimit `object`: Describes a usage limit object for a cluster. 
  * Amount
  * BreachAction
  * ClusterIdentifier
  * FeatureType
  * LimitType
  * Period
  * Tags
    * items
      * Key
      * Value
  * UsageLimitId

### UsageLimitAlreadyExistsFault


### UsageLimitBreachAction
* UsageLimitBreachAction `string` (values: log, emit-metric, disable)

### UsageLimitFeatureType
* UsageLimitFeatureType `string` (values: spectrum, concurrency-scaling)

### UsageLimitLimitType
* UsageLimitLimitType `string` (values: time, data-scanned)

### UsageLimitList
* UsageLimitList `object`
  * Marker
  * UsageLimits
    * items [UsageLimit](#usagelimit)

### UsageLimitNotFoundFault


### UsageLimitPeriod
* UsageLimitPeriod `string` (values: daily, weekly, monthly)

### UsageLimits
* UsageLimits `array`
  * items [UsageLimit](#usagelimit)

### ValueStringList
* ValueStringList `array`
  * items

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: Describes the members of a VPC security group.
  * Status
  * VpcSecurityGroupId

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items
    * Status
    * VpcSecurityGroupId


