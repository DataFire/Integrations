# @datafire/amazonaws_neptune

Client library for Amazon Neptune

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_neptune
```
```js
let amazonaws_neptune = require('@datafire/amazonaws_neptune').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_neptune.AddRoleToDBCluster({
  "DBClusterIdentifier": "",
  "RoleArn": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Neptune</fullname> <p> </p> <p> Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. </p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon Neptune API Reference</b> </p>

## Actions

### AddRoleToDBCluster



```js
amazonaws_neptune.AddRoleToDBCluster({
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
amazonaws_neptune.AddSourceIdentifierToSubscription({
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
amazonaws_neptune.AddTagsToResource({
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
amazonaws_neptune.ApplyPendingMaintenanceAction({
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

### CopyDBClusterParameterGroup



```js
amazonaws_neptune.CopyDBClusterParameterGroup({
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
amazonaws_neptune.CopyDBClusterSnapshot({
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
  * Tags [TagList](#taglist)
  * TargetDBClusterSnapshotIdentifier **required** [String](#string)

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBParameterGroup



```js
amazonaws_neptune.CopyDBParameterGroup({
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

### CreateDBCluster



```js
amazonaws_neptune.CreateDBCluster({
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
  * StorageEncrypted [BooleanOptional](#booleanoptional)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBClusterParameterGroup



```js
amazonaws_neptune.CreateDBClusterParameterGroup({
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
amazonaws_neptune.CreateDBClusterSnapshot({
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
amazonaws_neptune.CreateDBInstance({
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
  * EnableCloudwatchLogsExports [LogTypeList](#logtypelist)
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

### CreateDBParameterGroup



```js
amazonaws_neptune.CreateDBParameterGroup({
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

### CreateDBSubnetGroup



```js
amazonaws_neptune.CreateDBSubnetGroup({
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
amazonaws_neptune.CreateEventSubscription({
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

### DeleteDBCluster



```js
amazonaws_neptune.DeleteDBCluster({
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
amazonaws_neptune.DeleteDBClusterParameterGroup({
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
amazonaws_neptune.DeleteDBClusterSnapshot({
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
amazonaws_neptune.DeleteDBInstance({
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
amazonaws_neptune.DeleteDBParameterGroup({
  "DBParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteDBSubnetGroup



```js
amazonaws_neptune.DeleteDBSubnetGroup({
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
amazonaws_neptune.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** [String](#string)

#### Output
* output [DeleteEventSubscriptionResult](#deleteeventsubscriptionresult)

### DescribeDBClusterParameterGroups



```js
amazonaws_neptune.DescribeDBClusterParameterGroups({}, context)
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
amazonaws_neptune.DescribeDBClusterParameters({
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
amazonaws_neptune.DescribeDBClusterSnapshotAttributes({
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
amazonaws_neptune.DescribeDBClusterSnapshots({}, context)
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
amazonaws_neptune.DescribeDBClusters({}, context)
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
amazonaws_neptune.DescribeDBEngineVersions({}, context)
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
amazonaws_neptune.DescribeDBInstances({}, context)
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

### DescribeDBParameterGroups



```js
amazonaws_neptune.DescribeDBParameterGroups({}, context)
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
amazonaws_neptune.DescribeDBParameters({
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

### DescribeDBSubnetGroups



```js
amazonaws_neptune.DescribeDBSubnetGroups({}, context)
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
amazonaws_neptune.DescribeEngineDefaultClusterParameters({
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
amazonaws_neptune.DescribeEngineDefaultParameters({
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
amazonaws_neptune.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * SourceType [String](#string)

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventSubscriptions



```js
amazonaws_neptune.DescribeEventSubscriptions({}, context)
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
amazonaws_neptune.DescribeEvents({}, context)
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

### DescribeOrderableDBInstanceOptions



```js
amazonaws_neptune.DescribeOrderableDBInstanceOptions({
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
amazonaws_neptune.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ResourceIdentifier [String](#string)

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribeValidDBInstanceModifications



```js
amazonaws_neptune.DescribeValidDBInstanceModifications({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** [String](#string)

#### Output
* output [DescribeValidDBInstanceModificationsResult](#describevaliddbinstancemodificationsresult)

### FailoverDBCluster



```js
amazonaws_neptune.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier [String](#string)
  * TargetDBInstanceIdentifier [String](#string)

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### ListTagsForResource



```js
amazonaws_neptune.ListTagsForResource({
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
amazonaws_neptune.ModifyDBCluster({
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
  * EngineVersion [String](#string)
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
amazonaws_neptune.ModifyDBClusterParameterGroup({
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
amazonaws_neptune.ModifyDBClusterSnapshotAttribute({
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
amazonaws_neptune.ModifyDBInstance({
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
  * CloudwatchLogsExportConfiguration [CloudwatchLogsExportConfiguration](#cloudwatchlogsexportconfiguration)
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
amazonaws_neptune.ModifyDBParameterGroup({
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

### ModifyDBSubnetGroup



```js
amazonaws_neptune.ModifyDBSubnetGroup({
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
amazonaws_neptune.ModifyEventSubscription({
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

### PromoteReadReplicaDBCluster



```js
amazonaws_neptune.PromoteReadReplicaDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** [String](#string)

#### Output
* output [PromoteReadReplicaDBClusterResult](#promotereadreplicadbclusterresult)

### RebootDBInstance



```js
amazonaws_neptune.RebootDBInstance({
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
amazonaws_neptune.RemoveRoleFromDBCluster({
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
amazonaws_neptune.RemoveSourceIdentifierFromSubscription({
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
amazonaws_neptune.RemoveTagsFromResource({
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
amazonaws_neptune.ResetDBClusterParameterGroup({
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
amazonaws_neptune.ResetDBParameterGroup({
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

### RestoreDBClusterFromSnapshot



```js
amazonaws_neptune.RestoreDBClusterFromSnapshot({
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
amazonaws_neptune.RestoreDBClusterToPointInTime({
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



## Definitions

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

### AuthorizationNotFoundFault
* AuthorizationNotFoundFault `object`: <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>

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

### CertificateNotFoundFault
* CertificateNotFoundFault `object`:  <i>CertificateIdentifier</i> does not refer to an existing certificate. 

### CharacterSet
* CharacterSet `object`:  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. 
  * CharacterSetDescription [String](#string)
  * CharacterSetName [String](#string)

### CloudwatchLogsExportConfiguration
* CloudwatchLogsExportConfiguration `object`: The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
  * DisableLogTypes [LogTypeList](#logtypelist)
  * EnableLogTypes [LogTypeList](#logtypelist)

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
  * EnableCloudwatchLogsExports [LogTypeList](#logtypelist)
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

### DBCluster
* DBCluster `object`: <p>Contains the details of an Amazon Neptune DB cluster. </p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action. </p>
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
* DBClusterParameterGroup `object`: <p>Contains the details of an Amazon Neptune DB cluster parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action. </p>
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
* DBClusterSnapshot `object`: <p>Contains the details for an Amazon Neptune DB cluster snapshot </p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action. </p>
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
  * ExportableLogTypes [LogTypeList](#logtypelist)
  * SupportedCharacterSets [SupportedCharacterSetsList](#supportedcharactersetslist)
  * SupportedTimezones [SupportedTimezonesList](#supportedtimezoneslist)
  * SupportsLogExportsToCloudwatchLogs [Boolean](#boolean)
  * SupportsReadReplica [Boolean](#boolean)
  * ValidUpgradeTarget [ValidUpgradeTargetList](#validupgradetargetlist)

### DBEngineVersionList
* DBEngineVersionList `array`
  * items [DBEngineVersion](#dbengineversion)

### DBEngineVersionMessage
* DBEngineVersionMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBEngineVersions</a> action. 
  * DBEngineVersions [DBEngineVersionList](#dbengineversionlist)
  * Marker [String](#string)

### DBInstance
* DBInstance `object`: <p>Contains the details of an Amazon Neptune DB instance. </p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action. </p>
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
  * EnabledCloudwatchLogsExports [LogTypeList](#logtypelist)
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

### DBParameterGroup
* DBParameterGroup `object`: <p>Contains the details of an Amazon Neptune DB parameter group. </p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action. </p>
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
* DBParameterGroupStatus `object`: <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
  * DBParameterGroupName [String](#string)
  * ParameterApplyStatus [String](#string)

### DBParameterGroupStatusList
* DBParameterGroupStatusList `array`
  * items [DBParameterGroupStatus](#dbparametergroupstatus)

### DBParameterGroupsMessage
* DBParameterGroupsMessage `object`:  Contains the result of a successful invocation of the <a>DescribeDBParameterGroups</a> action. 
  * DBParameterGroups [DBParameterGroupList](#dbparametergrouplist)
  * Marker [String](#string)

### DBSecurityGroupMembership
* DBSecurityGroupMembership `object`: <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
  * DBSecurityGroupName [String](#string)
  * Status [String](#string)

### DBSecurityGroupMembershipList
* DBSecurityGroupMembershipList `array`
  * items [DBSecurityGroupMembership](#dbsecuritygroupmembership)

### DBSecurityGroupNameList
* DBSecurityGroupNameList `array`
  * items [String](#string)

### DBSecurityGroupNotFoundFault
* DBSecurityGroupNotFoundFault `object`:  <i>DBSecurityGroupName</i> does not refer to an existing DB security group. 

### DBSnapshotAlreadyExistsFault
* DBSnapshotAlreadyExistsFault `object`:  <i>DBSnapshotIdentifier</i> is already used by an existing snapshot. 

### DBSnapshotNotFoundFault
* DBSnapshotNotFoundFault `object`:  <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot. 

### DBSubnetGroup
* DBSubnetGroup `object`: <p>Contains the details of an Amazon Neptune DB subnet group. </p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action. </p>
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

### DeleteDBSubnetGroupMessage
* DeleteDBSubnetGroupMessage `object`: <p/>
  * DBSubnetGroupName **required** [String](#string)

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required** [String](#string)

### DeleteEventSubscriptionResult
* DeleteEventSubscriptionResult `object`
  * EventSubscription [EventSubscription](#eventsubscription)

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
* EventSubscriptionQuotaExceededFault `object`

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

### InvalidDBSubnetGroupStateFault
* InvalidDBSubnetGroupStateFault `object`: The DB subnet group cannot be deleted because it is in use.

### InvalidDBSubnetStateFault
* InvalidDBSubnetStateFault `object`:  The DB subnet is not in the <i>available</i> state. 

### InvalidEventSubscriptionStateFault
* InvalidEventSubscriptionStateFault `object`

### InvalidRestoreFault
* InvalidRestoreFault `object`: Cannot restore from vpc backup to non-vpc DB instance.

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

### LogTypeList
* LogTypeList `array`
  * items [String](#string)

### ModifyDBClusterMessage
* ModifyDBClusterMessage `object`: <p/>
  * ApplyImmediately [Boolean](#boolean)
  * BackupRetentionPeriod [IntegerOptional](#integeroptional)
  * DBClusterIdentifier **required** [String](#string)
  * DBClusterParameterGroupName [String](#string)
  * EnableIAMDatabaseAuthentication [BooleanOptional](#booleanoptional)
  * EngineVersion [String](#string)
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
  * CloudwatchLogsExportConfiguration [CloudwatchLogsExportConfiguration](#cloudwatchlogsexportconfiguration)
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

### OptionGroupMembership
* OptionGroupMembership `object`: Provides information on the option groups the DB instance is a member of.
  * OptionGroupName [String](#string)
  * Status [String](#string)

### OptionGroupMembershipList
* OptionGroupMembershipList `array`
  * items [OptionGroupMembership](#optiongroupmembership)

### OptionGroupNotFoundFault
* OptionGroupNotFoundFault `object`

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

### PendingCloudwatchLogsExports
* PendingCloudwatchLogsExports `object`: A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
  * LogTypesToDisable [LogTypeList](#logtypelist)
  * LogTypesToEnable [LogTypeList](#logtypelist)

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
  * PendingCloudwatchLogsExports [PendingCloudwatchLogsExports](#pendingcloudwatchlogsexports)
  * Port [IntegerOptional](#integeroptional)
  * StorageType [String](#string)

### PromoteReadReplicaDBClusterMessage
* PromoteReadReplicaDBClusterMessage `object`: <p/>
  * DBClusterIdentifier **required** [String](#string)

### PromoteReadReplicaDBClusterResult
* PromoteReadReplicaDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ProvisionedIopsNotAvailableInAZFault
* ProvisionedIopsNotAvailableInAZFault `object`: Provisioned IOPS not available in the specified Availability Zone.

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

### SNSInvalidTopicFault
* SNSInvalidTopicFault `object`

### SNSNoAuthorizationFault
* SNSNoAuthorizationFault `object`

### SNSTopicArnNotFoundFault
* SNSTopicArnNotFoundFault `object`

### SharedSnapshotQuotaExceededFault
* SharedSnapshotQuotaExceededFault `object`: You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.

### SnapshotQuotaExceededFault
* SnapshotQuotaExceededFault `object`: Request would result in user exceeding the allowed number of DB snapshots.

### SourceIdsList
* SourceIdsList `array`
  * items [String](#string)

### SourceNotFoundFault
* SourceNotFoundFault `object`

### SourceType
* SourceType `string` (values: db-instance, db-parameter-group, db-security-group, db-snapshot, db-cluster, db-cluster-snapshot)

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
* SubscriptionAlreadyExistFault `object`

### SubscriptionCategoryNotFoundFault
* SubscriptionCategoryNotFoundFault `object`

### SubscriptionNotFoundFault
* SubscriptionNotFoundFault `object`

### SupportedCharacterSetsList
* SupportedCharacterSetsList `array`
  * items [CharacterSet](#characterset)

### SupportedTimezonesList
* SupportedTimezonesList `array`
  * items [Timezone](#timezone)

### TStamp
* TStamp `string`

### Tag
* Tag `object`: Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`: A list of tags. For more information, see <a href="http://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html">Tagging Amazon Neptune Resources</a>. 
  * items [Tag](#tag)

### TagListMessage
* TagListMessage `object`: <p/>
  * TagList [TagList](#taglist)

### Timezone
* Timezone `object`: A time zone associated with a <a>DBInstance</a>. This data type is an element in the response to the <a>DescribeDBInstances</a>, and the <a>DescribeDBEngineVersions</a> actions. 
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


