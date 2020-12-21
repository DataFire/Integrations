# @datafire/amazonaws_docdb

Client library for Amazon DocumentDB with MongoDB compatibility

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_docdb
```
```js
let amazonaws_docdb = require('@datafire/amazonaws_docdb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon DocumentDB API documentation

## Actions

### AddTagsToResource



```js
amazonaws_docdb.AddTagsToResource({
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

### AddTagsToResource



```js
amazonaws_docdb.AddTagsToResource({
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

### ApplyPendingMaintenanceAction



```js
amazonaws_docdb.ApplyPendingMaintenanceAction({
  "ResourceIdentifier": "",
  "ApplyAction": "",
  "OptInType": ""
}, context)
```

#### Input
* input `object`
  * ResourceIdentifier **required** `string`
  * ApplyAction **required** `string`
  * OptInType **required** `string`

#### Output
* output [ApplyPendingMaintenanceActionResult](#applypendingmaintenanceactionresult)

### ApplyPendingMaintenanceAction



```js
amazonaws_docdb.ApplyPendingMaintenanceAction({
  "ResourceIdentifier": null,
  "ApplyAction": null,
  "OptInType": null
}, context)
```

#### Input
* input `object`
  * ApplyAction **required**
  * OptInType **required**
  * ResourceIdentifier **required**

#### Output
* output [ApplyPendingMaintenanceActionResult](#applypendingmaintenanceactionresult)

### CopyDBClusterParameterGroup



```js
amazonaws_docdb.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupIdentifier": "",
  "TargetDBClusterParameterGroupDescription": ""
}, context)
```

#### Input
* input `object`
  * SourceDBClusterParameterGroupIdentifier **required** `string`
  * TargetDBClusterParameterGroupIdentifier **required** `string`
  * TargetDBClusterParameterGroupDescription **required** `string`
  * Tags `array`

#### Output
* output [CopyDBClusterParameterGroupResult](#copydbclusterparametergroupresult)

### CopyDBClusterParameterGroup



```js
amazonaws_docdb.CopyDBClusterParameterGroup({
  "SourceDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupIdentifier": null,
  "TargetDBClusterParameterGroupDescription": null
}, context)
```

#### Input
* input `object`
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

#### Output
* output [CopyDBClusterParameterGroupResult](#copydbclusterparametergroupresult)

### CopyDBClusterSnapshot



```js
amazonaws_docdb.CopyDBClusterSnapshot({
  "SourceDBClusterSnapshotIdentifier": "",
  "TargetDBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * SourceDBClusterSnapshotIdentifier **required** `string`
  * TargetDBClusterSnapshotIdentifier **required** `string`
  * KmsKeyId `string`
  * PreSignedUrl `string`
  * CopyTags `boolean`
  * Tags `array`

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CopyDBClusterSnapshot



```js
amazonaws_docdb.CopyDBClusterSnapshot({
  "SourceDBClusterSnapshotIdentifier": null,
  "TargetDBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * CopyTags
  * KmsKeyId
  * PreSignedUrl
  * SourceDBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterSnapshotIdentifier **required**

#### Output
* output [CopyDBClusterSnapshotResult](#copydbclustersnapshotresult)

### CreateDBCluster



```js
amazonaws_docdb.CreateDBCluster({
  "DBClusterIdentifier": "",
  "Engine": "",
  "MasterUsername": "",
  "MasterUserPassword": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZones `array`
  * BackupRetentionPeriod `integer`
  * DBClusterIdentifier **required** `string`
  * DBClusterParameterGroupName `string`
  * VpcSecurityGroupIds `array`
  * DBSubnetGroupName `string`
  * Engine **required** `string`
  * EngineVersion `string`
  * Port `integer`
  * MasterUsername **required** `string`
  * MasterUserPassword **required** `string`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * Tags `array`
  * StorageEncrypted `boolean`
  * KmsKeyId `string`
  * PreSignedUrl `string`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBCluster



```js
amazonaws_docdb.CreateDBCluster({
  "DBClusterIdentifier": null,
  "Engine": null,
  "MasterUsername": null,
  "MasterUserPassword": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword **required**
  * MasterUsername **required**
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * StorageEncrypted
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

#### Output
* output [CreateDBClusterResult](#createdbclusterresult)

### CreateDBClusterParameterGroup



```js
amazonaws_docdb.CreateDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "DBParameterGroupFamily": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * DBParameterGroupFamily **required** `string`
  * Description **required** `string`
  * Tags `array`

#### Output
* output [CreateDBClusterParameterGroupResult](#createdbclusterparametergroupresult)

### CreateDBClusterParameterGroup



```js
amazonaws_docdb.CreateDBClusterParameterGroup({
  "DBClusterParameterGroupName": null,
  "DBParameterGroupFamily": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * DBParameterGroupFamily **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBClusterParameterGroupResult](#createdbclusterparametergroupresult)

### CreateDBClusterSnapshot



```js
amazonaws_docdb.CreateDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": "",
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`
  * DBClusterIdentifier **required** `string`
  * Tags `array`

#### Output
* output [CreateDBClusterSnapshotResult](#createdbclustersnapshotresult)

### CreateDBClusterSnapshot



```js
amazonaws_docdb.CreateDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": null,
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * DBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBClusterSnapshotResult](#createdbclustersnapshotresult)

### CreateDBInstance



```js
amazonaws_docdb.CreateDBInstance({
  "DBInstanceIdentifier": "",
  "DBInstanceClass": "",
  "Engine": "",
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * DBInstanceClass **required** `string`
  * Engine **required** `string`
  * AvailabilityZone `string`
  * PreferredMaintenanceWindow `string`
  * AutoMinorVersionUpgrade `boolean`
  * Tags `array`
  * DBClusterIdentifier **required** `string`
  * PromotionTier `integer`

#### Output
* output [CreateDBInstanceResult](#createdbinstanceresult)

### CreateDBInstance



```js
amazonaws_docdb.CreateDBInstance({
  "DBInstanceIdentifier": null,
  "DBInstanceClass": null,
  "Engine": null,
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * DBClusterIdentifier **required**
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * Engine **required**
  * PreferredMaintenanceWindow
  * PromotionTier
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBInstanceResult](#createdbinstanceresult)

### CreateDBSubnetGroup



```js
amazonaws_docdb.CreateDBSubnetGroup({
  "DBSubnetGroupName": "",
  "DBSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`
  * DBSubnetGroupDescription **required** `string`
  * SubnetIds **required** `array`
  * Tags `array`

#### Output
* output [CreateDBSubnetGroupResult](#createdbsubnetgroupresult)

### CreateDBSubnetGroup



```js
amazonaws_docdb.CreateDBSubnetGroup({
  "DBSubnetGroupName": null,
  "DBSubnetGroupDescription": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupDescription **required**
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

#### Output
* output [CreateDBSubnetGroupResult](#createdbsubnetgroupresult)

### DeleteDBCluster



```js
amazonaws_docdb.DeleteDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * SkipFinalSnapshot `boolean`
  * FinalDBSnapshotIdentifier `string`

#### Output
* output [DeleteDBClusterResult](#deletedbclusterresult)

### DeleteDBCluster



```js
amazonaws_docdb.DeleteDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

#### Output
* output [DeleteDBClusterResult](#deletedbclusterresult)

### DeleteDBClusterParameterGroup



```js
amazonaws_docdb.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBClusterParameterGroup



```js
amazonaws_docdb.DeleteDBClusterParameterGroup({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**

#### Output
*Output schema unknown*

### DeleteDBClusterSnapshot



```js
amazonaws_docdb.DeleteDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`

#### Output
* output [DeleteDBClusterSnapshotResult](#deletedbclustersnapshotresult)

### DeleteDBClusterSnapshot



```js
amazonaws_docdb.DeleteDBClusterSnapshot({
  "DBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required**

#### Output
* output [DeleteDBClusterSnapshotResult](#deletedbclustersnapshotresult)

### DeleteDBInstance



```js
amazonaws_docdb.DeleteDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBInstance



```js
amazonaws_docdb.DeleteDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**

#### Output
* output [DeleteDBInstanceResult](#deletedbinstanceresult)

### DeleteDBSubnetGroup



```js
amazonaws_docdb.DeleteDBSubnetGroup({
  "DBSubnetGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`

#### Output
*Output schema unknown*

### DeleteDBSubnetGroup



```js
amazonaws_docdb.DeleteDBSubnetGroup({
  "DBSubnetGroupName": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required**

#### Output
*Output schema unknown*

### DescribeCertificates



```js
amazonaws_docdb.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * CertificateIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [CertificateMessage](#certificatemessage)

### DescribeCertificates



```js
amazonaws_docdb.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * CertificateIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [CertificateMessage](#certificatemessage)

### DescribeDBClusterParameterGroups



```js
amazonaws_docdb.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterParameterGroupsMessage](#dbclusterparametergroupsmessage)

### DescribeDBClusterParameterGroups



```js
amazonaws_docdb.DescribeDBClusterParameterGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterParameterGroupsMessage](#dbclusterparametergroupsmessage)

### DescribeDBClusterParameters



```js
amazonaws_docdb.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * Source `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterParameterGroupDetails](#dbclusterparametergroupdetails)

### DescribeDBClusterParameters



```js
amazonaws_docdb.DescribeDBClusterParameters({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

#### Output
* output [DBClusterParameterGroupDetails](#dbclusterparametergroupdetails)

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_docdb.DescribeDBClusterSnapshotAttributes({
  "DBClusterSnapshotIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`

#### Output
* output [DescribeDBClusterSnapshotAttributesResult](#describedbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotAttributes



```js
amazonaws_docdb.DescribeDBClusterSnapshotAttributes({
  "DBClusterSnapshotIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required**

#### Output
* output [DescribeDBClusterSnapshotAttributesResult](#describedbclustersnapshotattributesresult)

### DescribeDBClusterSnapshots



```js
amazonaws_docdb.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * DBClusterSnapshotIdentifier `string`
  * SnapshotType `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * IncludeShared `boolean`
  * IncludePublic `boolean`

#### Output
* output [DBClusterSnapshotMessage](#dbclustersnapshotmessage)

### DescribeDBClusterSnapshots



```js
amazonaws_docdb.DescribeDBClusterSnapshots({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterIdentifier
  * DBClusterSnapshotIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludePublic
  * IncludeShared
  * Marker
  * MaxRecords
  * SnapshotType

#### Output
* output [DBClusterSnapshotMessage](#dbclustersnapshotmessage)

### DescribeDBClusters



```js
amazonaws_docdb.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBClusters



```js
amazonaws_docdb.DescribeDBClusters({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBClusterMessage](#dbclustermessage)

### DescribeDBEngineVersions



```js
amazonaws_docdb.DescribeDBEngineVersions({}, context)
```

#### Input
* input `object`
  * Engine `string`
  * EngineVersion `string`
  * DBParameterGroupFamily `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`
  * DefaultOnly `boolean`
  * ListSupportedCharacterSets `boolean`
  * ListSupportedTimezones `boolean`

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBEngineVersions



```js
amazonaws_docdb.DescribeDBEngineVersions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

#### Output
* output [DBEngineVersionMessage](#dbengineversionmessage)

### DescribeDBInstances



```js
amazonaws_docdb.DescribeDBInstances({}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBInstanceMessage](#dbinstancemessage)

### DescribeDBInstances



```js
amazonaws_docdb.DescribeDBInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBInstanceMessage](#dbinstancemessage)

### DescribeDBSubnetGroups



```js
amazonaws_docdb.DescribeDBSubnetGroups({}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DBSubnetGroupMessage](#dbsubnetgroupmessage)

### DescribeDBSubnetGroups



```js
amazonaws_docdb.DescribeDBSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBSubnetGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DBSubnetGroupMessage](#dbsubnetgroupmessage)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_docdb.DescribeEngineDefaultClusterParameters({
  "DBParameterGroupFamily": ""
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required** `string`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [DescribeEngineDefaultClusterParametersResult](#describeenginedefaultclusterparametersresult)

### DescribeEngineDefaultClusterParameters



```js
amazonaws_docdb.DescribeEngineDefaultClusterParameters({
  "DBParameterGroupFamily": null
}, context)
```

#### Input
* input `object`
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

#### Output
* output [DescribeEngineDefaultClusterParametersResult](#describeenginedefaultclusterparametersresult)

### DescribeEventCategories



```js
amazonaws_docdb.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * SourceType `string`
  * Filters `array`

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEventCategories



```js
amazonaws_docdb.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * SourceType

#### Output
* output [EventCategoriesMessage](#eventcategoriesmessage)

### DescribeEvents



```js
amazonaws_docdb.DescribeEvents({}, context)
```

#### Input
* input `object`
  * SourceIdentifier `string`
  * SourceType `string`
  * StartTime `string`
  * EndTime `string`
  * Duration `integer`
  * EventCategories `array`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeEvents



```js
amazonaws_docdb.DescribeEvents({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Duration
  * EndTime
  * EventCategories
    * items
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

#### Output
* output [EventsMessage](#eventsmessage)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_docdb.DescribeOrderableDBInstanceOptions({
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * Engine **required** `string`
  * EngineVersion `string`
  * DBInstanceClass `string`
  * LicenseModel `string`
  * Vpc `boolean`
  * Filters `array`
  * MaxRecords `integer`
  * Marker `string`

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribeOrderableDBInstanceOptions



```js
amazonaws_docdb.DescribeOrderableDBInstanceOptions({
  "Engine": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * DBInstanceClass
  * Engine **required**
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LicenseModel
  * Marker
  * MaxRecords
  * Vpc

#### Output
* output [OrderableDBInstanceOptionsMessage](#orderabledbinstanceoptionsmessage)

### DescribePendingMaintenanceActions



```js
amazonaws_docdb.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * ResourceIdentifier `string`
  * Filters `array`
  * Marker `string`
  * MaxRecords `integer`

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### DescribePendingMaintenanceActions



```js
amazonaws_docdb.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ResourceIdentifier

#### Output
* output [PendingMaintenanceActionsMessage](#pendingmaintenanceactionsmessage)

### FailoverDBCluster



```js
amazonaws_docdb.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier `string`
  * TargetDBInstanceIdentifier `string`

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### FailoverDBCluster



```js
amazonaws_docdb.FailoverDBCluster({}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier
  * TargetDBInstanceIdentifier

#### Output
* output [FailoverDBClusterResult](#failoverdbclusterresult)

### ListTagsForResource



```js
amazonaws_docdb.ListTagsForResource({
  "ResourceName": ""
}, context)
```

#### Input
* input `object`
  * ResourceName **required** `string`
  * Filters `array`

#### Output
* output [TagListMessage](#taglistmessage)

### ListTagsForResource



```js
amazonaws_docdb.ListTagsForResource({
  "ResourceName": null
}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ResourceName **required**

#### Output
* output [TagListMessage](#taglistmessage)

### ModifyDBCluster



```js
amazonaws_docdb.ModifyDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * NewDBClusterIdentifier `string`
  * ApplyImmediately `boolean`
  * BackupRetentionPeriod `integer`
  * DBClusterParameterGroupName `string`
  * VpcSecurityGroupIds `array`
  * Port `integer`
  * MasterUserPassword `string`
  * PreferredBackupWindow `string`
  * PreferredMaintenanceWindow `string`
  * CloudwatchLogsExportConfiguration `object`
  * EngineVersion `string`
  * DeletionProtection `boolean`

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBCluster



```js
amazonaws_docdb.ModifyDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DeletionProtection
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * VpcSecurityGroupIds
    * items

#### Output
* output [ModifyDBClusterResult](#modifydbclusterresult)

### ModifyDBClusterParameterGroup



```js
amazonaws_docdb.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": "",
  "Parameters": []
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * Parameters **required** `array`

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ModifyDBClusterParameterGroup



```js
amazonaws_docdb.ModifyDBClusterParameterGroup({
  "DBClusterParameterGroupName": null,
  "Parameters": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_docdb.ModifyDBClusterSnapshotAttribute({
  "DBClusterSnapshotIdentifier": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterSnapshotIdentifier **required** `string`
  * AttributeName **required** `string`
  * ValuesToAdd `array`
  * ValuesToRemove `array`

#### Output
* output [ModifyDBClusterSnapshotAttributeResult](#modifydbclustersnapshotattributeresult)

### ModifyDBClusterSnapshotAttribute



```js
amazonaws_docdb.ModifyDBClusterSnapshotAttribute({
  "DBClusterSnapshotIdentifier": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * DBClusterSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

#### Output
* output [ModifyDBClusterSnapshotAttributeResult](#modifydbclustersnapshotattributeresult)

### ModifyDBInstance



```js
amazonaws_docdb.ModifyDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * DBInstanceClass `string`
  * ApplyImmediately `boolean`
  * PreferredMaintenanceWindow `string`
  * AutoMinorVersionUpgrade `boolean`
  * NewDBInstanceIdentifier `string`
  * CACertificateIdentifier `string`
  * PromotionTier `integer`

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBInstance



```js
amazonaws_docdb.ModifyDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * CACertificateIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * NewDBInstanceIdentifier
  * PreferredMaintenanceWindow
  * PromotionTier

#### Output
* output [ModifyDBInstanceResult](#modifydbinstanceresult)

### ModifyDBSubnetGroup



```js
amazonaws_docdb.ModifyDBSubnetGroup({
  "DBSubnetGroupName": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupName **required** `string`
  * DBSubnetGroupDescription `string`
  * SubnetIds **required** `array`

#### Output
* output [ModifyDBSubnetGroupResult](#modifydbsubnetgroupresult)

### ModifyDBSubnetGroup



```js
amazonaws_docdb.ModifyDBSubnetGroup({
  "DBSubnetGroupName": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * DBSubnetGroupDescription
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items

#### Output
* output [ModifyDBSubnetGroupResult](#modifydbsubnetgroupresult)

### RebootDBInstance



```js
amazonaws_docdb.RebootDBInstance({
  "DBInstanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required** `string`
  * ForceFailover `boolean`

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RebootDBInstance



```js
amazonaws_docdb.RebootDBInstance({
  "DBInstanceIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBInstanceIdentifier **required**
  * ForceFailover

#### Output
* output [RebootDBInstanceResult](#rebootdbinstanceresult)

### RemoveTagsFromResource



```js
amazonaws_docdb.RemoveTagsFromResource({
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

### RemoveTagsFromResource



```js
amazonaws_docdb.RemoveTagsFromResource({
  "ResourceName": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
*Output schema unknown*

### ResetDBClusterParameterGroup



```js
amazonaws_docdb.ResetDBClusterParameterGroup({
  "DBClusterParameterGroupName": ""
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required** `string`
  * ResetAllParameters `boolean`
  * Parameters `array`

#### Output
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### ResetDBClusterParameterGroup



```js
amazonaws_docdb.ResetDBClusterParameterGroup({
  "DBClusterParameterGroupName": null
}, context)
```

#### Input
* input `object`
  * DBClusterParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
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
* output [DBClusterParameterGroupNameMessage](#dbclusterparametergroupnamemessage)

### RestoreDBClusterFromSnapshot



```js
amazonaws_docdb.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": "",
  "SnapshotIdentifier": "",
  "Engine": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZones `array`
  * DBClusterIdentifier **required** `string`
  * SnapshotIdentifier **required** `string`
  * Engine **required** `string`
  * EngineVersion `string`
  * Port `integer`
  * DBSubnetGroupName `string`
  * VpcSecurityGroupIds `array`
  * Tags `array`
  * KmsKeyId `string`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`

#### Output
* output [RestoreDBClusterFromSnapshotResult](#restoredbclusterfromsnapshotresult)

### RestoreDBClusterFromSnapshot



```js
amazonaws_docdb.RestoreDBClusterFromSnapshot({
  "DBClusterIdentifier": null,
  "SnapshotIdentifier": null,
  "Engine": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones
    * items
  * DBClusterIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * Port
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterFromSnapshotResult](#restoredbclusterfromsnapshotresult)

### RestoreDBClusterToPointInTime



```js
amazonaws_docdb.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": "",
  "SourceDBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`
  * SourceDBClusterIdentifier **required** `string`
  * RestoreToTime `string`
  * UseLatestRestorableTime `boolean`
  * Port `integer`
  * DBSubnetGroupName `string`
  * VpcSecurityGroupIds `array`
  * Tags `array`
  * KmsKeyId `string`
  * EnableCloudwatchLogsExports `array`
  * DeletionProtection `boolean`

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### RestoreDBClusterToPointInTime



```js
amazonaws_docdb.RestoreDBClusterToPointInTime({
  "DBClusterIdentifier": null,
  "SourceDBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * KmsKeyId
  * Port
  * RestoreToTime
  * SourceDBClusterIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

#### Output
* output [RestoreDBClusterToPointInTimeResult](#restoredbclustertopointintimeresult)

### StartDBCluster



```js
amazonaws_docdb.StartDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`

#### Output
* output [StartDBClusterResult](#startdbclusterresult)

### StartDBCluster



```js
amazonaws_docdb.StartDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StartDBClusterResult](#startdbclusterresult)

### StopDBCluster



```js
amazonaws_docdb.StopDBCluster({
  "DBClusterIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required** `string`

#### Output
* output [StopDBClusterResult](#stopdbclusterresult)

### StopDBCluster



```js
amazonaws_docdb.StopDBCluster({
  "DBClusterIdentifier": null
}, context)
```

#### Input
* input `object`
  * DBClusterIdentifier **required**

#### Output
* output [StopDBClusterResult](#stopdbclusterresult)



## Definitions

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: Represents the input to <a>AddTagsToResource</a>. 
  * ResourceName **required**
  * Tags **required**
    * items
      * Key
      * Value

### ApplyMethod
* ApplyMethod `string` (values: immediate, pending-reboot)

### ApplyPendingMaintenanceActionMessage
* ApplyPendingMaintenanceActionMessage `object`: Represents the input to <a>ApplyPendingMaintenanceAction</a>. 
  * ApplyAction **required**
  * OptInType **required**
  * ResourceIdentifier **required**

### ApplyPendingMaintenanceActionResult
* ApplyPendingMaintenanceActionResult `object`
  * ResourcePendingMaintenanceActions [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### AttributeValueList
* AttributeValueList `array`
  * items

### AuthorizationNotFoundFault


### AvailabilityZone
* AvailabilityZone `object`: Information about an Availability Zone.
  * Name

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items
    * Name

### AvailabilityZones
* AvailabilityZones `array`
  * items

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### Certificate
* Certificate `object`: A certificate authority (CA) certificate for an AWS account.
  * CertificateArn
  * CertificateIdentifier
  * CertificateType
  * Thumbprint
  * ValidFrom
  * ValidTill

### CertificateList
* CertificateList `array`
  * items
    * CertificateArn
    * CertificateIdentifier
    * CertificateType
    * Thumbprint
    * ValidFrom
    * ValidTill

### CertificateMessage
* CertificateMessage `object`
  * Certificates
    * items
      * CertificateArn
      * CertificateIdentifier
      * CertificateType
      * Thumbprint
      * ValidFrom
      * ValidTill
  * Marker

### CertificateNotFoundFault


### CloudwatchLogsExportConfiguration
* CloudwatchLogsExportConfiguration `object`: <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>
  * DisableLogTypes
    * items [String](#string)
  * EnableLogTypes
    * items [String](#string)

### CopyDBClusterParameterGroupMessage
* CopyDBClusterParameterGroupMessage `object`: Represents the input to <a>CopyDBClusterParameterGroup</a>. 
  * SourceDBClusterParameterGroupIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterParameterGroupDescription **required**
  * TargetDBClusterParameterGroupIdentifier **required**

### CopyDBClusterParameterGroupResult
* CopyDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CopyDBClusterSnapshotMessage
* CopyDBClusterSnapshotMessage `object`: Represents the input to <a>CopyDBClusterSnapshot</a>. 
  * CopyTags
  * KmsKeyId
  * PreSignedUrl
  * SourceDBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * TargetDBClusterSnapshotIdentifier **required**

### CopyDBClusterSnapshotResult
* CopyDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CreateDBClusterMessage
* CreateDBClusterMessage `object`: Represents the input to <a>CreateDBCluster</a>. 
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * MasterUserPassword **required**
  * MasterUsername **required**
  * Port
  * PreSignedUrl
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * StorageEncrypted
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### CreateDBClusterParameterGroupMessage
* CreateDBClusterParameterGroupMessage `object`: Represents the input of <a>CreateDBClusterParameterGroup</a>.
  * DBClusterParameterGroupName **required**
  * DBParameterGroupFamily **required**
  * Description **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBClusterParameterGroupResult
* CreateDBClusterParameterGroupResult `object`
  * DBClusterParameterGroup [DBClusterParameterGroup](#dbclusterparametergroup)

### CreateDBClusterResult
* CreateDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### CreateDBClusterSnapshotMessage
* CreateDBClusterSnapshotMessage `object`: Represents the input of <a>CreateDBClusterSnapshot</a>.
  * DBClusterIdentifier **required**
  * DBClusterSnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value

### CreateDBClusterSnapshotResult
* CreateDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### CreateDBInstanceMessage
* CreateDBInstanceMessage `object`: Represents the input to <a>CreateDBInstance</a>.
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * DBClusterIdentifier **required**
  * DBInstanceClass **required**
  * DBInstanceIdentifier **required**
  * Engine **required**
  * PreferredMaintenanceWindow
  * PromotionTier
  * Tags
    * items
      * Key
      * Value

### CreateDBInstanceResult
* CreateDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### CreateDBSubnetGroupMessage
* CreateDBSubnetGroupMessage `object`: Represents the input to <a>CreateDBSubnetGroup</a>.
  * DBSubnetGroupDescription **required**
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items
  * Tags
    * items
      * Key
      * Value

### CreateDBSubnetGroupResult
* CreateDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### DBCluster
* DBCluster `object`: Detailed information about a cluster. 
  * AssociatedRoles
    * items
      * RoleArn
      * Status
  * AvailabilityZones
    * items
  * BackupRetentionPeriod
  * ClusterCreateTime
  * DBClusterArn
  * DBClusterIdentifier
  * DBClusterMembers
    * items
      * DBClusterParameterGroupStatus
      * DBInstanceIdentifier
      * IsClusterWriter
      * PromotionTier
  * DBClusterParameterGroup
  * DBSubnetGroup
  * DbClusterResourceId
  * DeletionProtection
  * EarliestRestorableTime
  * EnabledCloudwatchLogsExports
    * items [String](#string)
  * Endpoint
  * Engine
  * EngineVersion
  * HostedZoneId
  * KmsKeyId
  * LatestRestorableTime
  * MasterUsername
  * MultiAZ
  * PercentProgress
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * ReaderEndpoint
  * Status
  * StorageEncrypted
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBClusterAlreadyExistsFault


### DBClusterList
* DBClusterList `array`
  * items
    * AssociatedRoles
      * items
        * RoleArn
        * Status
    * AvailabilityZones
      * items
    * BackupRetentionPeriod
    * ClusterCreateTime
    * DBClusterArn
    * DBClusterIdentifier
    * DBClusterMembers
      * items
        * DBClusterParameterGroupStatus
        * DBInstanceIdentifier
        * IsClusterWriter
        * PromotionTier
    * DBClusterParameterGroup
    * DBSubnetGroup
    * DbClusterResourceId
    * DeletionProtection
    * EarliestRestorableTime
    * EnabledCloudwatchLogsExports
      * items [String](#string)
    * Endpoint
    * Engine
    * EngineVersion
    * HostedZoneId
    * KmsKeyId
    * LatestRestorableTime
    * MasterUsername
    * MultiAZ
    * PercentProgress
    * Port
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * ReaderEndpoint
    * Status
    * StorageEncrypted
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### DBClusterMember
* DBClusterMember `object`: Contains information about an instance that is part of a cluster.
  * DBClusterParameterGroupStatus
  * DBInstanceIdentifier
  * IsClusterWriter
  * PromotionTier

### DBClusterMemberList
* DBClusterMemberList `array`
  * items
    * DBClusterParameterGroupStatus
    * DBInstanceIdentifier
    * IsClusterWriter
    * PromotionTier

### DBClusterMessage
* DBClusterMessage `object`: Represents the output of <a>DescribeDBClusters</a>.
  * DBClusters
    * items
      * AssociatedRoles
        * items
          * RoleArn
          * Status
      * AvailabilityZones
        * items
      * BackupRetentionPeriod
      * ClusterCreateTime
      * DBClusterArn
      * DBClusterIdentifier
      * DBClusterMembers
        * items
          * DBClusterParameterGroupStatus
          * DBInstanceIdentifier
          * IsClusterWriter
          * PromotionTier
      * DBClusterParameterGroup
      * DBSubnetGroup
      * DbClusterResourceId
      * DeletionProtection
      * EarliestRestorableTime
      * EnabledCloudwatchLogsExports
        * items [String](#string)
      * Endpoint
      * Engine
      * EngineVersion
      * HostedZoneId
      * KmsKeyId
      * LatestRestorableTime
      * MasterUsername
      * MultiAZ
      * PercentProgress
      * Port
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * ReaderEndpoint
      * Status
      * StorageEncrypted
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### DBClusterNotFoundFault


### DBClusterParameterGroup
* DBClusterParameterGroup `object`: Detailed information about a cluster parameter group. 
  * DBClusterParameterGroupArn
  * DBClusterParameterGroupName
  * DBParameterGroupFamily
  * Description

### DBClusterParameterGroupDetails
* DBClusterParameterGroupDetails `object`: Represents the output of <a>DBClusterParameterGroup</a>.
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### DBClusterParameterGroupList
* DBClusterParameterGroupList `array`
  * items
    * DBClusterParameterGroupArn
    * DBClusterParameterGroupName
    * DBParameterGroupFamily
    * Description

### DBClusterParameterGroupNameMessage
* DBClusterParameterGroupNameMessage `object`: Contains the name of a cluster parameter group.
  * DBClusterParameterGroupName

### DBClusterParameterGroupNotFoundFault


### DBClusterParameterGroupsMessage
* DBClusterParameterGroupsMessage `object`: Represents the output of <a>DBClusterParameterGroups</a>.
  * DBClusterParameterGroups
    * items
      * DBClusterParameterGroupArn
      * DBClusterParameterGroupName
      * DBParameterGroupFamily
      * Description
  * Marker

### DBClusterQuotaExceededFault


### DBClusterRole
* DBClusterRole `object`: Describes an AWS Identity and Access Management (IAM) role that is associated with a cluster.
  * RoleArn
  * Status

### DBClusterRoles
* DBClusterRoles `array`
  * items
    * RoleArn
    * Status

### DBClusterSnapshot
* DBClusterSnapshot `object`: Detailed information about a cluster snapshot. 
  * AvailabilityZones
    * items
  * ClusterCreateTime
  * DBClusterIdentifier
  * DBClusterSnapshotArn
  * DBClusterSnapshotIdentifier
  * Engine
  * EngineVersion
  * KmsKeyId
  * MasterUsername
  * PercentProgress
  * Port
  * SnapshotCreateTime
  * SnapshotType
  * SourceDBClusterSnapshotArn
  * Status
  * StorageEncrypted
  * VpcId

### DBClusterSnapshotAlreadyExistsFault


### DBClusterSnapshotAttribute
* DBClusterSnapshotAttribute `object`: <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other AWS accounts to restore a manual cluster snapshot.</p>
  * AttributeName
  * AttributeValues
    * items

### DBClusterSnapshotAttributeList
* DBClusterSnapshotAttributeList `array`
  * items
    * AttributeName
    * AttributeValues
      * items

### DBClusterSnapshotAttributesResult
* DBClusterSnapshotAttributesResult `object`: Detailed information about the attributes that are associated with a cluster snapshot.
  * DBClusterSnapshotAttributes
    * items
      * AttributeName
      * AttributeValues
        * items
  * DBClusterSnapshotIdentifier

### DBClusterSnapshotList
* DBClusterSnapshotList `array`
  * items
    * AvailabilityZones
      * items
    * ClusterCreateTime
    * DBClusterIdentifier
    * DBClusterSnapshotArn
    * DBClusterSnapshotIdentifier
    * Engine
    * EngineVersion
    * KmsKeyId
    * MasterUsername
    * PercentProgress
    * Port
    * SnapshotCreateTime
    * SnapshotType
    * SourceDBClusterSnapshotArn
    * Status
    * StorageEncrypted
    * VpcId

### DBClusterSnapshotMessage
* DBClusterSnapshotMessage `object`: Represents the output of <a>DescribeDBClusterSnapshots</a>.
  * DBClusterSnapshots
    * items
      * AvailabilityZones
        * items
      * ClusterCreateTime
      * DBClusterIdentifier
      * DBClusterSnapshotArn
      * DBClusterSnapshotIdentifier
      * Engine
      * EngineVersion
      * KmsKeyId
      * MasterUsername
      * PercentProgress
      * Port
      * SnapshotCreateTime
      * SnapshotType
      * SourceDBClusterSnapshotArn
      * Status
      * StorageEncrypted
      * VpcId
  * Marker

### DBClusterSnapshotNotFoundFault


### DBEngineVersion
* DBEngineVersion `object`:  Detailed information about an engine version. 
  * DBEngineDescription
  * DBEngineVersionDescription
  * DBParameterGroupFamily
  * Engine
  * EngineVersion
  * ExportableLogTypes
    * items [String](#string)
  * SupportsLogExportsToCloudwatchLogs
  * ValidUpgradeTarget
    * items
      * AutoUpgrade
      * Description
      * Engine
      * EngineVersion
      * IsMajorVersionUpgrade

### DBEngineVersionList
* DBEngineVersionList `array`
  * items
    * DBEngineDescription
    * DBEngineVersionDescription
    * DBParameterGroupFamily
    * Engine
    * EngineVersion
    * ExportableLogTypes
      * items [String](#string)
    * SupportsLogExportsToCloudwatchLogs
    * ValidUpgradeTarget
      * items
        * AutoUpgrade
        * Description
        * Engine
        * EngineVersion
        * IsMajorVersionUpgrade

### DBEngineVersionMessage
* DBEngineVersionMessage `object`: Represents the output of <a>DescribeDBEngineVersions</a>.
  * DBEngineVersions
    * items
      * DBEngineDescription
      * DBEngineVersionDescription
      * DBParameterGroupFamily
      * Engine
      * EngineVersion
      * ExportableLogTypes
        * items [String](#string)
      * SupportsLogExportsToCloudwatchLogs
      * ValidUpgradeTarget
        * items
          * AutoUpgrade
          * Description
          * Engine
          * EngineVersion
          * IsMajorVersionUpgrade
  * Marker

### DBInstance
* DBInstance `object`: Detailed information about an instance. 
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * DBClusterIdentifier
  * DBInstanceArn
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBInstanceStatus
  * DBSubnetGroup
    * DBSubnetGroupArn
    * DBSubnetGroupDescription
    * DBSubnetGroupName
    * SubnetGroupStatus
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
        * SubnetIdentifier
        * SubnetStatus
    * VpcId
  * DbiResourceId
  * EnabledCloudwatchLogsExports
    * items [String](#string)
  * Endpoint
    * Address
    * HostedZoneId
    * Port
  * Engine
  * EngineVersion
  * InstanceCreateTime
  * KmsKeyId
  * LatestRestorableTime
  * PendingModifiedValues
    * AllocatedStorage
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * DBInstanceClass
    * DBInstanceIdentifier
    * DBSubnetGroupName
    * EngineVersion
    * Iops
    * LicenseModel
    * MasterUserPassword
    * MultiAZ
    * PendingCloudwatchLogsExports
      * LogTypesToDisable
        * items [String](#string)
      * LogTypesToEnable
        * items [String](#string)
    * Port
    * StorageType
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * PromotionTier
  * PubliclyAccessible
  * StatusInfos
    * items
      * Message
      * Normal
      * Status
      * StatusType
  * StorageEncrypted
  * VpcSecurityGroups
    * items
      * Status
      * VpcSecurityGroupId

### DBInstanceAlreadyExistsFault


### DBInstanceList
* DBInstanceList `array`
  * items
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * BackupRetentionPeriod
    * CACertificateIdentifier
    * DBClusterIdentifier
    * DBInstanceArn
    * DBInstanceClass
    * DBInstanceIdentifier
    * DBInstanceStatus
    * DBSubnetGroup
      * DBSubnetGroupArn
      * DBSubnetGroupDescription
      * DBSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetStatus
      * VpcId
    * DbiResourceId
    * EnabledCloudwatchLogsExports
      * items [String](#string)
    * Endpoint
      * Address
      * HostedZoneId
      * Port
    * Engine
    * EngineVersion
    * InstanceCreateTime
    * KmsKeyId
    * LatestRestorableTime
    * PendingModifiedValues
      * AllocatedStorage
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * DBInstanceClass
      * DBInstanceIdentifier
      * DBSubnetGroupName
      * EngineVersion
      * Iops
      * LicenseModel
      * MasterUserPassword
      * MultiAZ
      * PendingCloudwatchLogsExports
        * LogTypesToDisable
          * items [String](#string)
        * LogTypesToEnable
          * items [String](#string)
      * Port
      * StorageType
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * PromotionTier
    * PubliclyAccessible
    * StatusInfos
      * items
        * Message
        * Normal
        * Status
        * StatusType
    * StorageEncrypted
    * VpcSecurityGroups
      * items
        * Status
        * VpcSecurityGroupId

### DBInstanceMessage
* DBInstanceMessage `object`: Represents the output of <a>DescribeDBInstances</a>.
  * DBInstances
    * items
      * AutoMinorVersionUpgrade
      * AvailabilityZone
      * BackupRetentionPeriod
      * CACertificateIdentifier
      * DBClusterIdentifier
      * DBInstanceArn
      * DBInstanceClass
      * DBInstanceIdentifier
      * DBInstanceStatus
      * DBSubnetGroup
        * DBSubnetGroupArn
        * DBSubnetGroupDescription
        * DBSubnetGroupName
        * SubnetGroupStatus
        * Subnets
          * items
        * VpcId
      * DbiResourceId
      * EnabledCloudwatchLogsExports
        * items [String](#string)
      * Endpoint
        * Address
        * HostedZoneId
        * Port
      * Engine
      * EngineVersion
      * InstanceCreateTime
      * KmsKeyId
      * LatestRestorableTime
      * PendingModifiedValues
        * AllocatedStorage
        * BackupRetentionPeriod
        * CACertificateIdentifier
        * DBInstanceClass
        * DBInstanceIdentifier
        * DBSubnetGroupName
        * EngineVersion
        * Iops
        * LicenseModel
        * MasterUserPassword
        * MultiAZ
        * PendingCloudwatchLogsExports
          * LogTypesToDisable
          * LogTypesToEnable
        * Port
        * StorageType
      * PreferredBackupWindow
      * PreferredMaintenanceWindow
      * PromotionTier
      * PubliclyAccessible
      * StatusInfos
        * items
          * Message
          * Normal
          * Status
          * StatusType
      * StorageEncrypted
      * VpcSecurityGroups
        * items
          * Status
          * VpcSecurityGroupId
  * Marker

### DBInstanceNotFoundFault


### DBInstanceStatusInfo
* DBInstanceStatusInfo `object`: Provides a list of status information for an instance.
  * Message
  * Normal
  * Status
  * StatusType

### DBInstanceStatusInfoList
* DBInstanceStatusInfoList `array`
  * items
    * Message
    * Normal
    * Status
    * StatusType

### DBParameterGroupAlreadyExistsFault


### DBParameterGroupNotFoundFault


### DBParameterGroupQuotaExceededFault


### DBSecurityGroupNotFoundFault


### DBSnapshotAlreadyExistsFault


### DBSnapshotNotFoundFault


### DBSubnetGroup
* DBSubnetGroup `object`: Detailed information about a subnet group. 
  * DBSubnetGroupArn
  * DBSubnetGroupDescription
  * DBSubnetGroupName
  * SubnetGroupStatus
  * Subnets
    * items
      * SubnetAvailabilityZone
        * Name
      * SubnetIdentifier
      * SubnetStatus
  * VpcId

### DBSubnetGroupAlreadyExistsFault


### DBSubnetGroupDoesNotCoverEnoughAZs


### DBSubnetGroupMessage
* DBSubnetGroupMessage `object`: Represents the output of <a>DescribeDBSubnetGroups</a>.
  * DBSubnetGroups
    * items
      * DBSubnetGroupArn
      * DBSubnetGroupDescription
      * DBSubnetGroupName
      * SubnetGroupStatus
      * Subnets
        * items
          * SubnetAvailabilityZone
          * SubnetIdentifier
          * SubnetStatus
      * VpcId
  * Marker

### DBSubnetGroupNotFoundFault


### DBSubnetGroupQuotaExceededFault


### DBSubnetGroups
* DBSubnetGroups `array`
  * items
    * DBSubnetGroupArn
    * DBSubnetGroupDescription
    * DBSubnetGroupName
    * SubnetGroupStatus
    * Subnets
      * items
        * SubnetAvailabilityZone
          * Name
        * SubnetIdentifier
        * SubnetStatus
    * VpcId

### DBSubnetQuotaExceededFault


### DBUpgradeDependencyFailureFault


### DeleteDBClusterMessage
* DeleteDBClusterMessage `object`: Represents the input to <a>DeleteDBCluster</a>.
  * DBClusterIdentifier **required**
  * FinalDBSnapshotIdentifier
  * SkipFinalSnapshot

### DeleteDBClusterParameterGroupMessage
* DeleteDBClusterParameterGroupMessage `object`: Represents the input to <a>DeleteDBClusterParameterGroup</a>.
  * DBClusterParameterGroupName **required**

### DeleteDBClusterResult
* DeleteDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### DeleteDBClusterSnapshotMessage
* DeleteDBClusterSnapshotMessage `object`: Represents the input to <a>DeleteDBClusterSnapshot</a>.
  * DBClusterSnapshotIdentifier **required**

### DeleteDBClusterSnapshotResult
* DeleteDBClusterSnapshotResult `object`
  * DBClusterSnapshot [DBClusterSnapshot](#dbclustersnapshot)

### DeleteDBInstanceMessage
* DeleteDBInstanceMessage `object`: Represents the input to <a>DeleteDBInstance</a>.
  * DBInstanceIdentifier **required**

### DeleteDBInstanceResult
* DeleteDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### DeleteDBSubnetGroupMessage
* DeleteDBSubnetGroupMessage `object`: Represents the input to <a>DeleteDBSubnetGroup</a>.
  * DBSubnetGroupName **required**

### DescribeCertificatesMessage
* DescribeCertificatesMessage `object`
  * CertificateIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterParameterGroupsMessage
* DescribeDBClusterParameterGroupsMessage `object`: Represents the input to <a>DescribeDBClusterParameterGroups</a>.
  * DBClusterParameterGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBClusterParametersMessage
* DescribeDBClusterParametersMessage `object`: Represents the input to <a>DescribeDBClusterParameters</a>.
  * DBClusterParameterGroupName **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * Source

### DescribeDBClusterSnapshotAttributesMessage
* DescribeDBClusterSnapshotAttributesMessage `object`: Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.
  * DBClusterSnapshotIdentifier **required**

### DescribeDBClusterSnapshotAttributesResult
* DescribeDBClusterSnapshotAttributesResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### DescribeDBClusterSnapshotsMessage
* DescribeDBClusterSnapshotsMessage `object`: Represents the input to <a>DescribeDBClusterSnapshots</a>.
  * DBClusterIdentifier
  * DBClusterSnapshotIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * IncludePublic
  * IncludeShared
  * Marker
  * MaxRecords
  * SnapshotType

### DescribeDBClustersMessage
* DescribeDBClustersMessage `object`: Represents the input to <a>DescribeDBClusters</a>.
  * DBClusterIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBEngineVersionsMessage
* DescribeDBEngineVersionsMessage `object`: Represents the input to <a>DescribeDBEngineVersions</a>.
  * DBParameterGroupFamily
  * DefaultOnly
  * Engine
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ListSupportedCharacterSets
  * ListSupportedTimezones
  * Marker
  * MaxRecords

### DescribeDBInstancesMessage
* DescribeDBInstancesMessage `object`: Represents the input to <a>DescribeDBInstances</a>.
  * DBInstanceIdentifier
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeDBSubnetGroupsMessage
* DescribeDBSubnetGroupsMessage `object`: Represents the input to <a>DescribeDBSubnetGroups</a>.
  * DBSubnetGroupName
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultClusterParametersMessage
* DescribeEngineDefaultClusterParametersMessage `object`: Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.
  * DBParameterGroupFamily **required**
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords

### DescribeEngineDefaultClusterParametersResult
* DescribeEngineDefaultClusterParametersResult `object`
  * EngineDefaults [EngineDefaults](#enginedefaults)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: Represents the input to <a>DescribeEventCategories</a>.
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * SourceType

### DescribeEventsMessage
* DescribeEventsMessage `object`: Represents the input to <a>DescribeEvents</a>.
  * Duration
  * EndTime
  * EventCategories
    * items
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

### DescribeOrderableDBInstanceOptionsMessage
* DescribeOrderableDBInstanceOptionsMessage `object`: Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.
  * DBInstanceClass
  * Engine **required**
  * EngineVersion
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * LicenseModel
  * Marker
  * MaxRecords
  * Vpc

### DescribePendingMaintenanceActionsMessage
* DescribePendingMaintenanceActionsMessage `object`: Represents the input to <a>DescribePendingMaintenanceActions</a>.
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * Marker
  * MaxRecords
  * ResourceIdentifier

### Endpoint
* Endpoint `object`: Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
  * Address
  * HostedZoneId
  * Port

### EngineDefaults
* EngineDefaults `object`: Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. 
  * DBParameterGroupFamily
  * Marker
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### Event
* Event `object`: Detailed information about an event.
  * Date
  * EventCategories
    * items
  * Message
  * SourceArn
  * SourceIdentifier
  * SourceType

### EventCategoriesList
* EventCategoriesList `array`
  * items

### EventCategoriesMap
* EventCategoriesMap `object`: An event source type, accompanied by one or more event category names.
  * EventCategories
    * items
  * SourceType

### EventCategoriesMapList
* EventCategoriesMapList `array`
  * items
    * EventCategories
      * items
    * SourceType

### EventCategoriesMessage
* EventCategoriesMessage `object`: Represents the output of <a>DescribeEventCategories</a>.
  * EventCategoriesMapList
    * items
      * EventCategories
        * items
      * SourceType

### EventList
* EventList `array`
  * items
    * Date
    * EventCategories
      * items
    * Message
    * SourceArn
    * SourceIdentifier
    * SourceType

### EventsMessage
* EventsMessage `object`: Represents the output of <a>DescribeEvents</a>.
  * Events
    * items
      * Date
      * EventCategories
        * items
      * Message
      * SourceArn
      * SourceIdentifier
      * SourceType
  * Marker

### FailoverDBClusterMessage
* FailoverDBClusterMessage `object`: Represents the input to <a>FailoverDBCluster</a>.
  * DBClusterIdentifier
  * TargetDBInstanceIdentifier

### FailoverDBClusterResult
* FailoverDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### Filter
* Filter `object`: <p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p>
  * Name **required**
  * Values **required**
    * items

### FilterList
* FilterList `array`
  * items
    * Name **required**
    * Values **required**
      * items

### FilterValueList
* FilterValueList `array`
  * items

### InstanceQuotaExceededFault


### InsufficientDBClusterCapacityFault


### InsufficientDBInstanceCapacityFault


### InsufficientStorageClusterCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidDBClusterSnapshotStateFault


### InvalidDBClusterStateFault


### InvalidDBInstanceStateFault


### InvalidDBParameterGroupStateFault


### InvalidDBSecurityGroupStateFault


### InvalidDBSnapshotStateFault


### InvalidDBSubnetGroupStateFault


### InvalidDBSubnetStateFault


### InvalidRestoreFault


### InvalidSubnet


### InvalidVPCNetworkStateFault


### KMSKeyNotAccessibleFault


### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: Represents the input to <a>ListTagsForResource</a>.
  * Filters
    * items
      * Name **required**
      * Values **required**
        * items
  * ResourceName **required**

### LogTypeList
* LogTypeList `array`
  * items [String](#string)

### ModifyDBClusterMessage
* ModifyDBClusterMessage `object`: Represents the input to <a>ModifyDBCluster</a>.
  * ApplyImmediately
  * BackupRetentionPeriod
  * CloudwatchLogsExportConfiguration
    * DisableLogTypes
      * items [String](#string)
    * EnableLogTypes
      * items [String](#string)
  * DBClusterIdentifier **required**
  * DBClusterParameterGroupName
  * DeletionProtection
  * EngineVersion
  * MasterUserPassword
  * NewDBClusterIdentifier
  * Port
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * VpcSecurityGroupIds
    * items

### ModifyDBClusterParameterGroupMessage
* ModifyDBClusterParameterGroupMessage `object`: Represents the input to <a>ModifyDBClusterParameterGroup</a>.
  * DBClusterParameterGroupName **required**
  * Parameters **required**
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source

### ModifyDBClusterResult
* ModifyDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### ModifyDBClusterSnapshotAttributeMessage
* ModifyDBClusterSnapshotAttributeMessage `object`: Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.
  * AttributeName **required**
  * DBClusterSnapshotIdentifier **required**
  * ValuesToAdd
    * items
  * ValuesToRemove
    * items

### ModifyDBClusterSnapshotAttributeResult
* ModifyDBClusterSnapshotAttributeResult `object`
  * DBClusterSnapshotAttributesResult [DBClusterSnapshotAttributesResult](#dbclustersnapshotattributesresult)

### ModifyDBInstanceMessage
* ModifyDBInstanceMessage `object`: Represents the input to <a>ModifyDBInstance</a>.
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * CACertificateIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier **required**
  * NewDBInstanceIdentifier
  * PreferredMaintenanceWindow
  * PromotionTier

### ModifyDBInstanceResult
* ModifyDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### ModifyDBSubnetGroupMessage
* ModifyDBSubnetGroupMessage `object`: Represents the input to <a>ModifyDBSubnetGroup</a>.
  * DBSubnetGroupDescription
  * DBSubnetGroupName **required**
  * SubnetIds **required**
    * items

### ModifyDBSubnetGroupResult
* ModifyDBSubnetGroupResult `object`
  * DBSubnetGroup [DBSubnetGroup](#dbsubnetgroup)

### OrderableDBInstanceOption
* OrderableDBInstanceOption `object`: The options that are available for an instance.
  * AvailabilityZones
    * items
      * Name
  * DBInstanceClass
  * Engine
  * EngineVersion
  * LicenseModel
  * Vpc

### OrderableDBInstanceOptionsList
* OrderableDBInstanceOptionsList `array`
  * items
    * AvailabilityZones
      * items
        * Name
    * DBInstanceClass
    * Engine
    * EngineVersion
    * LicenseModel
    * Vpc

### OrderableDBInstanceOptionsMessage
* OrderableDBInstanceOptionsMessage `object`: Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
  * Marker
  * OrderableDBInstanceOptions
    * items
      * AvailabilityZones
        * items
          * Name
      * DBInstanceClass
      * Engine
      * EngineVersion
      * LicenseModel
      * Vpc

### Parameter
* Parameter `object`: Detailed information about an individual parameter.
  * AllowedValues
  * ApplyMethod
  * ApplyType
  * DataType
  * Description
  * IsModifiable
  * MinimumEngineVersion
  * ParameterName
  * ParameterValue
  * Source

### ParametersList
* ParametersList `array`
  * items
    * AllowedValues
    * ApplyMethod
    * ApplyType
    * DataType
    * Description
    * IsModifiable
    * MinimumEngineVersion
    * ParameterName
    * ParameterValue
    * Source

### PendingCloudwatchLogsExports
* PendingCloudwatchLogsExports `object`: A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
  * LogTypesToDisable
    * items [String](#string)
  * LogTypesToEnable
    * items [String](#string)

### PendingMaintenanceAction
* PendingMaintenanceAction `object`: Provides information about a pending maintenance action for a resource.
  * Action
  * AutoAppliedAfterDate
  * CurrentApplyDate
  * Description
  * ForcedApplyDate
  * OptInStatus

### PendingMaintenanceActionDetails
* PendingMaintenanceActionDetails `array`
  * items
    * Action
    * AutoAppliedAfterDate
    * CurrentApplyDate
    * Description
    * ForcedApplyDate
    * OptInStatus

### PendingMaintenanceActions
* PendingMaintenanceActions `array`
  * items
    * PendingMaintenanceActionDetails
      * items
        * Action
        * AutoAppliedAfterDate
        * CurrentApplyDate
        * Description
        * ForcedApplyDate
        * OptInStatus
    * ResourceIdentifier

### PendingMaintenanceActionsMessage
* PendingMaintenanceActionsMessage `object`: Represents the output of <a>DescribePendingMaintenanceActions</a>.
  * Marker
  * PendingMaintenanceActions
    * items
      * PendingMaintenanceActionDetails
        * items
          * Action
          * AutoAppliedAfterDate
          * CurrentApplyDate
          * Description
          * ForcedApplyDate
          * OptInStatus
      * ResourceIdentifier

### PendingModifiedValues
* PendingModifiedValues `object`:  One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.
  * AllocatedStorage
  * BackupRetentionPeriod
  * CACertificateIdentifier
  * DBInstanceClass
  * DBInstanceIdentifier
  * DBSubnetGroupName
  * EngineVersion
  * Iops
  * LicenseModel
  * MasterUserPassword
  * MultiAZ
  * PendingCloudwatchLogsExports
    * LogTypesToDisable
      * items [String](#string)
    * LogTypesToEnable
      * items [String](#string)
  * Port
  * StorageType

### RebootDBInstanceMessage
* RebootDBInstanceMessage `object`: Represents the input to <a>RebootDBInstance</a>.
  * DBInstanceIdentifier **required**
  * ForceFailover

### RebootDBInstanceResult
* RebootDBInstanceResult `object`
  * DBInstance [DBInstance](#dbinstance)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: Represents the input to <a>RemoveTagsFromResource</a>.
  * ResourceName **required**
  * TagKeys **required**
    * items [String](#string)

### ResetDBClusterParameterGroupMessage
* ResetDBClusterParameterGroupMessage `object`: Represents the input to <a>ResetDBClusterParameterGroup</a>.
  * DBClusterParameterGroupName **required**
  * Parameters
    * items
      * AllowedValues
      * ApplyMethod
      * ApplyType
      * DataType
      * Description
      * IsModifiable
      * MinimumEngineVersion
      * ParameterName
      * ParameterValue
      * Source
  * ResetAllParameters

### ResourceNotFoundFault


### ResourcePendingMaintenanceActions
* ResourcePendingMaintenanceActions `object`: Represents the output of <a>ApplyPendingMaintenanceAction</a>. 
  * PendingMaintenanceActionDetails
    * items
      * Action
      * AutoAppliedAfterDate
      * CurrentApplyDate
      * Description
      * ForcedApplyDate
      * OptInStatus
  * ResourceIdentifier

### RestoreDBClusterFromSnapshotMessage
* RestoreDBClusterFromSnapshotMessage `object`: Represents the input to <a>RestoreDBClusterFromSnapshot</a>.
  * AvailabilityZones
    * items
  * DBClusterIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * Engine **required**
  * EngineVersion
  * KmsKeyId
  * Port
  * SnapshotIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterFromSnapshotResult
* RestoreDBClusterFromSnapshotResult `object`
  * DBCluster [DBCluster](#dbcluster)

### RestoreDBClusterToPointInTimeMessage
* RestoreDBClusterToPointInTimeMessage `object`: Represents the input to <a>RestoreDBClusterToPointInTime</a>.
  * DBClusterIdentifier **required**
  * DBSubnetGroupName
  * DeletionProtection
  * EnableCloudwatchLogsExports
    * items [String](#string)
  * KmsKeyId
  * Port
  * RestoreToTime
  * SourceDBClusterIdentifier **required**
  * Tags
    * items
      * Key
      * Value
  * UseLatestRestorableTime
  * VpcSecurityGroupIds
    * items

### RestoreDBClusterToPointInTimeResult
* RestoreDBClusterToPointInTimeResult `object`
  * DBCluster [DBCluster](#dbcluster)

### SharedSnapshotQuotaExceededFault


### SnapshotQuotaExceededFault


### SourceType
* SourceType `string` (values: db-instance, db-parameter-group, db-security-group, db-snapshot, db-cluster, db-cluster-snapshot)

### StartDBClusterMessage
* StartDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StartDBClusterResult
* StartDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StopDBClusterMessage
* StopDBClusterMessage `object`
  * DBClusterIdentifier **required**

### StopDBClusterResult
* StopDBClusterResult `object`
  * DBCluster [DBCluster](#dbcluster)

### StorageQuotaExceededFault


### StorageTypeNotSupportedFault


### String
* String `string`

### Subnet
* Subnet `object`:  Detailed information about a subnet. 
  * SubnetAvailabilityZone
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
    * SubnetIdentifier
    * SubnetStatus

### TStamp
* TStamp `string`

### Tag
* Tag `object`: Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
  * Key
  * Value

### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagListMessage
* TagListMessage `object`: Represents the output of <a>ListTagsForResource</a>.
  * TagList
    * items
      * Key
      * Value

### UpgradeTarget
* UpgradeTarget `object`: The version of the database engine that an instance can be upgraded to.
  * AutoUpgrade
  * Description
  * Engine
  * EngineVersion
  * IsMajorVersionUpgrade

### ValidUpgradeTargetList
* ValidUpgradeTargetList `array`
  * items
    * AutoUpgrade
    * Description
    * Engine
    * EngineVersion
    * IsMajorVersionUpgrade

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: Used as a response element for queries on virtual private cloud (VPC) security group membership.
  * Status
  * VpcSecurityGroupId

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items
    * Status
    * VpcSecurityGroupId


