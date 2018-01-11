# @datafire/amazonaws_dms

Client library for AWS Database Migration Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_dms
```
```js
let amazonaws_dms = require('@datafire/amazonaws_dms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_dms.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Database Migration Service</fullname> <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about AWS DMS, see the AWS DMS user guide at <a href="http://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"> What Is AWS Database Migration Service? </a> </p>

## Actions

### AddTagsToResource



```js
amazonaws_dms.AddTagsToResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsToResourceResponse](#addtagstoresourceresponse)

### CreateEndpoint



```js
amazonaws_dms.CreateEndpoint({
  "EndpointIdentifier": "",
  "EndpointType": "",
  "EngineName": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn [String](#string)
  * DatabaseName [String](#string)
  * DynamoDbSettings [DynamoDbSettings](#dynamodbsettings)
  * EndpointIdentifier **required** [String](#string)
  * EndpointType **required** [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName **required** [String](#string)
  * ExtraConnectionAttributes [String](#string)
  * KmsKeyId [String](#string)
  * MongoDbSettings [MongoDbSettings](#mongodbsettings)
  * Password [SecretString](#secretstring)
  * Port [IntegerOptional](#integeroptional)
  * S3Settings [S3Settings](#s3settings)
  * ServerName [String](#string)
  * SslMode [DmsSslModeValue](#dmssslmodevalue)
  * Tags [TagList](#taglist)
  * Username [String](#string)

#### Output
* output [CreateEndpointResponse](#createendpointresponse)

### CreateEventSubscription



```js
amazonaws_dms.CreateEventSubscription({
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
* output [CreateEventSubscriptionResponse](#createeventsubscriptionresponse)

### CreateReplicationInstance



```js
amazonaws_dms.CreateReplicationInstance({
  "ReplicationInstanceIdentifier": "",
  "ReplicationInstanceClass": ""
}, context)
```

#### Input
* input `object`
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * ReplicationInstanceClass **required** [String](#string)
  * ReplicationInstanceIdentifier **required** [String](#string)
  * ReplicationSubnetGroupIdentifier [String](#string)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [CreateReplicationInstanceResponse](#createreplicationinstanceresponse)

### CreateReplicationSubnetGroup



```js
amazonaws_dms.CreateReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": "",
  "ReplicationSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupDescription **required** [String](#string)
  * ReplicationSubnetGroupIdentifier **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

#### Output
* output [CreateReplicationSubnetGroupResponse](#createreplicationsubnetgroupresponse)

### CreateReplicationTask



```js
amazonaws_dms.CreateReplicationTask({
  "ReplicationTaskIdentifier": "",
  "SourceEndpointArn": "",
  "TargetEndpointArn": "",
  "ReplicationInstanceArn": "",
  "MigrationType": "",
  "TableMappings": ""
}, context)
```

#### Input
* input `object`
  * CdcStartTime [TStamp](#tstamp)
  * MigrationType **required** [MigrationTypeValue](#migrationtypevalue)
  * ReplicationInstanceArn **required** [String](#string)
  * ReplicationTaskIdentifier **required** [String](#string)
  * ReplicationTaskSettings [String](#string)
  * SourceEndpointArn **required** [String](#string)
  * TableMappings **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetEndpointArn **required** [String](#string)

#### Output
* output [CreateReplicationTaskResponse](#createreplicationtaskresponse)

### DeleteCertificate



```js
amazonaws_dms.DeleteCertificate({
  "CertificateArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn **required** [String](#string)

#### Output
* output [DeleteCertificateResponse](#deletecertificateresponse)

### DeleteEndpoint



```js
amazonaws_dms.DeleteEndpoint({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)

#### Output
* output [DeleteEndpointResponse](#deleteendpointresponse)

### DeleteEventSubscription



```js
amazonaws_dms.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required** [String](#string)

#### Output
* output [DeleteEventSubscriptionResponse](#deleteeventsubscriptionresponse)

### DeleteReplicationInstance



```js
amazonaws_dms.DeleteReplicationInstance({
  "ReplicationInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * ReplicationInstanceArn **required** [String](#string)

#### Output
* output [DeleteReplicationInstanceResponse](#deletereplicationinstanceresponse)

### DeleteReplicationSubnetGroup



```js
amazonaws_dms.DeleteReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": ""
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupIdentifier **required** [String](#string)

#### Output
* output [DeleteReplicationSubnetGroupResponse](#deletereplicationsubnetgroupresponse)

### DeleteReplicationTask



```js
amazonaws_dms.DeleteReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required** [String](#string)

#### Output
* output [DeleteReplicationTaskResponse](#deletereplicationtaskresponse)

### DescribeAccountAttributes



```js
amazonaws_dms.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAttributesResponse](#describeaccountattributesresponse)

### DescribeCertificates



```js
amazonaws_dms.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeCertificatesResponse](#describecertificatesresponse)

### DescribeConnections



```js
amazonaws_dms.DescribeConnections({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeConnectionsResponse](#describeconnectionsresponse)

### DescribeEndpointTypes



```js
amazonaws_dms.DescribeEndpointTypes({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeEndpointTypesResponse](#describeendpointtypesresponse)

### DescribeEndpoints



```js
amazonaws_dms.DescribeEndpoints({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### DescribeEventCategories



```js
amazonaws_dms.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * SourceType [String](#string)

#### Output
* output [DescribeEventCategoriesResponse](#describeeventcategoriesresponse)

### DescribeEventSubscriptions



```js
amazonaws_dms.DescribeEventSubscriptions({}, context)
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
* output [DescribeEventSubscriptionsResponse](#describeeventsubscriptionsresponse)

### DescribeEvents



```js
amazonaws_dms.DescribeEvents({}, context)
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
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeOrderableReplicationInstances



```js
amazonaws_dms.DescribeOrderableReplicationInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeOrderableReplicationInstancesResponse](#describeorderablereplicationinstancesresponse)

### DescribeRefreshSchemasStatus



```js
amazonaws_dms.DescribeRefreshSchemasStatus({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)

#### Output
* output [DescribeRefreshSchemasStatusResponse](#describerefreshschemasstatusresponse)

### DescribeReplicationInstances



```js
amazonaws_dms.DescribeReplicationInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeReplicationInstancesResponse](#describereplicationinstancesresponse)

### DescribeReplicationSubnetGroups



```js
amazonaws_dms.DescribeReplicationSubnetGroups({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeReplicationSubnetGroupsResponse](#describereplicationsubnetgroupsresponse)

### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeReplicationTasksResponse](#describereplicationtasksresponse)

### DescribeSchemas



```js
amazonaws_dms.DescribeSchemas({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EndpointArn **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

#### Output
* output [DescribeSchemasResponse](#describeschemasresponse)

### DescribeTableStatistics



```js
amazonaws_dms.DescribeTableStatistics({
  "ReplicationTaskArn": ""
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationTaskArn **required** [String](#string)

#### Output
* output [DescribeTableStatisticsResponse](#describetablestatisticsresponse)

### ImportCertificate



```js
amazonaws_dms.ImportCertificate({
  "CertificateIdentifier": ""
}, context)
```

#### Input
* input `object`
  * CertificateIdentifier **required** [String](#string)
  * CertificatePem [String](#string)
  * CertificateWallet [CertificateWallet](#certificatewallet)
  * Tags [TagList](#taglist)

#### Output
* output [ImportCertificateResponse](#importcertificateresponse)

### ListTagsForResource



```js
amazonaws_dms.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ModifyEndpoint



```js
amazonaws_dms.ModifyEndpoint({
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * CertificateArn [String](#string)
  * DatabaseName [String](#string)
  * DynamoDbSettings [DynamoDbSettings](#dynamodbsettings)
  * EndpointArn **required** [String](#string)
  * EndpointIdentifier [String](#string)
  * EndpointType [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName [String](#string)
  * ExtraConnectionAttributes [String](#string)
  * MongoDbSettings [MongoDbSettings](#mongodbsettings)
  * Password [SecretString](#secretstring)
  * Port [IntegerOptional](#integeroptional)
  * S3Settings [S3Settings](#s3settings)
  * ServerName [String](#string)
  * SslMode [DmsSslModeValue](#dmssslmodevalue)
  * Username [String](#string)

#### Output
* output [ModifyEndpointResponse](#modifyendpointresponse)

### ModifyEventSubscription



```js
amazonaws_dms.ModifyEventSubscription({
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
* output [ModifyEventSubscriptionResponse](#modifyeventsubscriptionresponse)

### ModifyReplicationInstance



```js
amazonaws_dms.ModifyReplicationInstance({
  "ReplicationInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AllowMajorVersionUpgrade [Boolean](#boolean)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * EngineVersion [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationInstanceArn **required** [String](#string)
  * ReplicationInstanceClass [String](#string)
  * ReplicationInstanceIdentifier [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

#### Output
* output [ModifyReplicationInstanceResponse](#modifyreplicationinstanceresponse)

### ModifyReplicationSubnetGroup



```js
amazonaws_dms.ModifyReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupDescription [String](#string)
  * ReplicationSubnetGroupIdentifier **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

#### Output
* output [ModifyReplicationSubnetGroupResponse](#modifyreplicationsubnetgroupresponse)

### ModifyReplicationTask



```js
amazonaws_dms.ModifyReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Input
* input `object`
  * CdcStartTime [TStamp](#tstamp)
  * MigrationType [MigrationTypeValue](#migrationtypevalue)
  * ReplicationTaskArn **required** [String](#string)
  * ReplicationTaskIdentifier [String](#string)
  * ReplicationTaskSettings [String](#string)
  * TableMappings [String](#string)

#### Output
* output [ModifyReplicationTaskResponse](#modifyreplicationtaskresponse)

### RefreshSchemas



```js
amazonaws_dms.RefreshSchemas({
  "EndpointArn": "",
  "ReplicationInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)
  * ReplicationInstanceArn **required** [String](#string)

#### Output
* output [RefreshSchemasResponse](#refreshschemasresponse)

### ReloadTables



```js
amazonaws_dms.ReloadTables({
  "ReplicationTaskArn": "",
  "TablesToReload": []
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required** [String](#string)
  * TablesToReload **required** [TableListToReload](#tablelisttoreload)

#### Output
* output [ReloadTablesResponse](#reloadtablesresponse)

### RemoveTagsFromResource



```js
amazonaws_dms.RemoveTagsFromResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

#### Output
* output [RemoveTagsFromResourceResponse](#removetagsfromresourceresponse)

### StartReplicationTask



```js
amazonaws_dms.StartReplicationTask({
  "ReplicationTaskArn": "",
  "StartReplicationTaskType": ""
}, context)
```

#### Input
* input `object`
  * CdcStartTime [TStamp](#tstamp)
  * ReplicationTaskArn **required** [String](#string)
  * StartReplicationTaskType **required** [StartReplicationTaskTypeValue](#startreplicationtasktypevalue)

#### Output
* output [StartReplicationTaskResponse](#startreplicationtaskresponse)

### StopReplicationTask



```js
amazonaws_dms.StopReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required** [String](#string)

#### Output
* output [StopReplicationTaskResponse](#stopreplicationtaskresponse)

### TestConnection



```js
amazonaws_dms.TestConnection({
  "ReplicationInstanceArn": "",
  "EndpointArn": ""
}, context)
```

#### Input
* input `object`
  * EndpointArn **required** [String](#string)
  * ReplicationInstanceArn **required** [String](#string)

#### Output
* output [TestConnectionResponse](#testconnectionresponse)



## Definitions

### AccessDeniedFault
* AccessDeniedFault `object`: AWS DMS was denied access to the endpoint.
  * message [ExceptionMessage](#exceptionmessage)

### AccountQuota
* AccountQuota `object`: Describes a quota for an AWS account, for example, the number of replication instances allowed.
  * AccountQuotaName [String](#string)
  * Max [Long](#long)
  * Used [Long](#long)

### AccountQuotaList
* AccountQuotaList `array`
  * items [AccountQuota](#accountquota)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: <p/>
  * ResourceArn **required** [String](#string)
  * Tags **required** [TagList](#taglist)

### AddTagsToResourceResponse
* AddTagsToResourceResponse `object`: <p/>

### AuthMechanismValue
* AuthMechanismValue `string` (values: default, mongodb_cr, scram_sha_1)

### AuthTypeValue
* AuthTypeValue `string` (values: no, password)

### AvailabilityZone
* AvailabilityZone `object`: <p/>
  * Name [String](#string)

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### Certificate
* Certificate `object`: The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
  * CertificateArn [String](#string)
  * CertificateCreationDate [TStamp](#tstamp)
  * CertificateIdentifier [String](#string)
  * CertificateOwner [String](#string)
  * CertificatePem [String](#string)
  * CertificateWallet [CertificateWallet](#certificatewallet)
  * KeyLength [IntegerOptional](#integeroptional)
  * SigningAlgorithm [String](#string)
  * ValidFromDate [TStamp](#tstamp)
  * ValidToDate [TStamp](#tstamp)

### CertificateList
* CertificateList `array`
  * items [Certificate](#certificate)

### CertificateWallet
* CertificateWallet `string`

### CompressionTypeValue
* CompressionTypeValue `string` (values: none, gzip)

### Connection
* Connection `object`: <p/>
  * EndpointArn [String](#string)
  * EndpointIdentifier [String](#string)
  * LastFailureMessage [String](#string)
  * ReplicationInstanceArn [String](#string)
  * ReplicationInstanceIdentifier [String](#string)
  * Status [String](#string)

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### CreateEndpointMessage
* CreateEndpointMessage `object`: <p/>
  * CertificateArn [String](#string)
  * DatabaseName [String](#string)
  * DynamoDbSettings [DynamoDbSettings](#dynamodbsettings)
  * EndpointIdentifier **required** [String](#string)
  * EndpointType **required** [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName **required** [String](#string)
  * ExtraConnectionAttributes [String](#string)
  * KmsKeyId [String](#string)
  * MongoDbSettings [MongoDbSettings](#mongodbsettings)
  * Password [SecretString](#secretstring)
  * Port [IntegerOptional](#integeroptional)
  * S3Settings [S3Settings](#s3settings)
  * ServerName [String](#string)
  * SslMode [DmsSslModeValue](#dmssslmodevalue)
  * Tags [TagList](#taglist)
  * Username [String](#string)

### CreateEndpointResponse
* CreateEndpointResponse `object`: <p/>
  * Endpoint [Endpoint](#endpoint)

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn **required** [String](#string)
  * SourceIds [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)
  * Tags [TagList](#taglist)

### CreateEventSubscriptionResponse
* CreateEventSubscriptionResponse `object`: <p/>
  * EventSubscription [EventSubscription](#eventsubscription)

### CreateReplicationInstanceMessage
* CreateReplicationInstanceMessage `object`: <p/>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * AvailabilityZone [String](#string)
  * EngineVersion [String](#string)
  * KmsKeyId [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [BooleanOptional](#booleanoptional)
  * ReplicationInstanceClass **required** [String](#string)
  * ReplicationInstanceIdentifier **required** [String](#string)
  * ReplicationSubnetGroupIdentifier [String](#string)
  * Tags [TagList](#taglist)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### CreateReplicationInstanceResponse
* CreateReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance [ReplicationInstance](#replicationinstance)

### CreateReplicationSubnetGroupMessage
* CreateReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupDescription **required** [String](#string)
  * ReplicationSubnetGroupIdentifier **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)
  * Tags [TagList](#taglist)

### CreateReplicationSubnetGroupResponse
* CreateReplicationSubnetGroupResponse `object`: <p/>
  * ReplicationSubnetGroup [ReplicationSubnetGroup](#replicationsubnetgroup)

### CreateReplicationTaskMessage
* CreateReplicationTaskMessage `object`: <p/>
  * CdcStartTime [TStamp](#tstamp)
  * MigrationType **required** [MigrationTypeValue](#migrationtypevalue)
  * ReplicationInstanceArn **required** [String](#string)
  * ReplicationTaskIdentifier **required** [String](#string)
  * ReplicationTaskSettings [String](#string)
  * SourceEndpointArn **required** [String](#string)
  * TableMappings **required** [String](#string)
  * Tags [TagList](#taglist)
  * TargetEndpointArn **required** [String](#string)

### CreateReplicationTaskResponse
* CreateReplicationTaskResponse `object`: <p/>
  * ReplicationTask [ReplicationTask](#replicationtask)

### DeleteCertificateMessage
* DeleteCertificateMessage `object`
  * CertificateArn **required** [String](#string)

### DeleteCertificateResponse
* DeleteCertificateResponse `object`
  * Certificate [Certificate](#certificate)

### DeleteEndpointMessage
* DeleteEndpointMessage `object`: <p/>
  * EndpointArn **required** [String](#string)

### DeleteEndpointResponse
* DeleteEndpointResponse `object`: <p/>
  * Endpoint [Endpoint](#endpoint)

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required** [String](#string)

### DeleteEventSubscriptionResponse
* DeleteEventSubscriptionResponse `object`: <p/>
  * EventSubscription [EventSubscription](#eventsubscription)

### DeleteReplicationInstanceMessage
* DeleteReplicationInstanceMessage `object`: <p/>
  * ReplicationInstanceArn **required** [String](#string)

### DeleteReplicationInstanceResponse
* DeleteReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance [ReplicationInstance](#replicationinstance)

### DeleteReplicationSubnetGroupMessage
* DeleteReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupIdentifier **required** [String](#string)

### DeleteReplicationSubnetGroupResponse
* DeleteReplicationSubnetGroupResponse `object`: <p/>

### DeleteReplicationTaskMessage
* DeleteReplicationTaskMessage `object`: <p/>
  * ReplicationTaskArn **required** [String](#string)

### DeleteReplicationTaskResponse
* DeleteReplicationTaskResponse `object`: <p/>
  * ReplicationTask [ReplicationTask](#replicationtask)

### DescribeAccountAttributesMessage
* DescribeAccountAttributesMessage `object`: <p/>

### DescribeAccountAttributesResponse
* DescribeAccountAttributesResponse `object`: <p/>
  * AccountQuotas [AccountQuotaList](#accountquotalist)

### DescribeCertificatesMessage
* DescribeCertificatesMessage `object`
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeCertificatesResponse
* DescribeCertificatesResponse `object`
  * Certificates [CertificateList](#certificatelist)
  * Marker [String](#string)

### DescribeConnectionsMessage
* DescribeConnectionsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeConnectionsResponse
* DescribeConnectionsResponse `object`: <p/>
  * Connections [ConnectionList](#connectionlist)
  * Marker [String](#string)

### DescribeEndpointTypesMessage
* DescribeEndpointTypesMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEndpointTypesResponse
* DescribeEndpointTypesResponse `object`: <p/>
  * Marker [String](#string)
  * SupportedEndpointTypes [SupportedEndpointTypeList](#supportedendpointtypelist)

### DescribeEndpointsMessage
* DescribeEndpointsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`: <p/>
  * Endpoints [EndpointList](#endpointlist)
  * Marker [String](#string)

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * SourceType [String](#string)

### DescribeEventCategoriesResponse
* DescribeEventCategoriesResponse `object`: <p/>
  * EventCategoryGroupList [EventCategoryGroupList](#eventcategorygrouplist)

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * SubscriptionName [String](#string)

### DescribeEventSubscriptionsResponse
* DescribeEventSubscriptionsResponse `object`: <p/>
  * EventSubscriptionsList [EventSubscriptionsList](#eventsubscriptionslist)
  * Marker [String](#string)

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

### DescribeEventsResponse
* DescribeEventsResponse `object`: <p/>
  * Events [EventList](#eventlist)
  * Marker [String](#string)

### DescribeOrderableReplicationInstancesMessage
* DescribeOrderableReplicationInstancesMessage `object`: <p/>
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeOrderableReplicationInstancesResponse
* DescribeOrderableReplicationInstancesResponse `object`: <p/>
  * Marker [String](#string)
  * OrderableReplicationInstances [OrderableReplicationInstanceList](#orderablereplicationinstancelist)

### DescribeRefreshSchemasStatusMessage
* DescribeRefreshSchemasStatusMessage `object`: <p/>
  * EndpointArn **required** [String](#string)

### DescribeRefreshSchemasStatusResponse
* DescribeRefreshSchemasStatusResponse `object`: <p/>
  * RefreshSchemasStatus [RefreshSchemasStatus](#refreshschemasstatus)

### DescribeReplicationInstancesMessage
* DescribeReplicationInstancesMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeReplicationInstancesResponse
* DescribeReplicationInstancesResponse `object`: <p/>
  * Marker [String](#string)
  * ReplicationInstances [ReplicationInstanceList](#replicationinstancelist)

### DescribeReplicationSubnetGroupsMessage
* DescribeReplicationSubnetGroupsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeReplicationSubnetGroupsResponse
* DescribeReplicationSubnetGroupsResponse `object`: <p/>
  * Marker [String](#string)
  * ReplicationSubnetGroups [ReplicationSubnetGroups](#replicationsubnetgroups)

### DescribeReplicationTasksMessage
* DescribeReplicationTasksMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeReplicationTasksResponse
* DescribeReplicationTasksResponse `object`: <p/>
  * Marker [String](#string)
  * ReplicationTasks [ReplicationTaskList](#replicationtasklist)

### DescribeSchemasMessage
* DescribeSchemasMessage `object`: <p/>
  * EndpointArn **required** [String](#string)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)

### DescribeSchemasResponse
* DescribeSchemasResponse `object`: <p/>
  * Marker [String](#string)
  * Schemas [SchemaList](#schemalist)

### DescribeTableStatisticsMessage
* DescribeTableStatisticsMessage `object`: <p/>
  * Filters [FilterList](#filterlist)
  * Marker [String](#string)
  * MaxRecords [IntegerOptional](#integeroptional)
  * ReplicationTaskArn **required** [String](#string)

### DescribeTableStatisticsResponse
* DescribeTableStatisticsResponse `object`: <p/>
  * Marker [String](#string)
  * ReplicationTaskArn [String](#string)
  * TableStatistics [TableStatisticsList](#tablestatisticslist)

### DmsSslModeValue
* DmsSslModeValue `string` (values: none, require, verify-ca, verify-full)

### DynamoDbSettings
* DynamoDbSettings `object`: <p/>
  * ServiceAccessRoleArn **required** [String](#string)

### Endpoint
* Endpoint `object`: <p/>
  * CertificateArn [String](#string)
  * DatabaseName [String](#string)
  * DynamoDbSettings [DynamoDbSettings](#dynamodbsettings)
  * EndpointArn [String](#string)
  * EndpointIdentifier [String](#string)
  * EndpointType [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName [String](#string)
  * ExternalId [String](#string)
  * ExtraConnectionAttributes [String](#string)
  * KmsKeyId [String](#string)
  * MongoDbSettings [MongoDbSettings](#mongodbsettings)
  * Port [IntegerOptional](#integeroptional)
  * S3Settings [S3Settings](#s3settings)
  * ServerName [String](#string)
  * SslMode [DmsSslModeValue](#dmssslmodevalue)
  * Status [String](#string)
  * Username [String](#string)

### EndpointList
* EndpointList `array`
  * items [Endpoint](#endpoint)

### Event
* Event `object`: <p/>
  * Date [TStamp](#tstamp)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * Message [String](#string)
  * SourceIdentifier [String](#string)
  * SourceType [SourceType](#sourcetype)

### EventCategoriesList
* EventCategoriesList `array`
  * items [String](#string)

### EventCategoryGroup
* EventCategoryGroup `object`: <p/>
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SourceType [String](#string)

### EventCategoryGroupList
* EventCategoryGroupList `array`
  * items [EventCategoryGroup](#eventcategorygroup)

### EventList
* EventList `array`
  * items [Event](#event)

### EventSubscription
* EventSubscription `object`: <p/>
  * CustSubscriptionId [String](#string)
  * CustomerAwsId [String](#string)
  * Enabled [Boolean](#boolean)
  * EventCategoriesList [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn [String](#string)
  * SourceIdsList [SourceIdsList](#sourceidslist)
  * SourceType [String](#string)
  * Status [String](#string)
  * SubscriptionCreationTime [String](#string)

### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items [EventSubscription](#eventsubscription)

### ExceptionMessage
* ExceptionMessage `string`

### Filter
* Filter `object`: <p/>
  * Name **required** [String](#string)
  * Values **required** [FilterValueList](#filtervaluelist)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterValueList
* FilterValueList `array`
  * items [String](#string)

### ImportCertificateMessage
* ImportCertificateMessage `object`
  * CertificateIdentifier **required** [String](#string)
  * CertificatePem [String](#string)
  * CertificateWallet [CertificateWallet](#certificatewallet)
  * Tags [TagList](#taglist)

### ImportCertificateResponse
* ImportCertificateResponse `object`
  * Certificate [Certificate](#certificate)

### InsufficientResourceCapacityFault
* InsufficientResourceCapacityFault `object`: There are not enough resources allocated to the database migration.
  * message [ExceptionMessage](#exceptionmessage)

### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidCertificateFault
* InvalidCertificateFault `object`: The certificate was not valid.
  * message [ExceptionMessage](#exceptionmessage)

### InvalidResourceStateFault
* InvalidResourceStateFault `object`: The resource is in a state that prevents it from being used for database migration.
  * message [ExceptionMessage](#exceptionmessage)

### InvalidSubnet
* InvalidSubnet `object`: The subnet provided is invalid.
  * message [ExceptionMessage](#exceptionmessage)

### KMSKeyNotAccessibleFault
* KMSKeyNotAccessibleFault `object`: AWS DMS cannot access the KMS key.
  * message [ExceptionMessage](#exceptionmessage)

### KeyList
* KeyList `array`
  * items [String](#string)

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: <p/>
  * ResourceArn **required** [String](#string)

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: <p/>
  * TagList [TagList](#taglist)

### Long
* Long `integer`

### MigrationTypeValue
* MigrationTypeValue `string` (values: full-load, cdc, full-load-and-cdc)

### ModifyEndpointMessage
* ModifyEndpointMessage `object`: <p/>
  * CertificateArn [String](#string)
  * DatabaseName [String](#string)
  * DynamoDbSettings [DynamoDbSettings](#dynamodbsettings)
  * EndpointArn **required** [String](#string)
  * EndpointIdentifier [String](#string)
  * EndpointType [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName [String](#string)
  * ExtraConnectionAttributes [String](#string)
  * MongoDbSettings [MongoDbSettings](#mongodbsettings)
  * Password [SecretString](#secretstring)
  * Port [IntegerOptional](#integeroptional)
  * S3Settings [S3Settings](#s3settings)
  * ServerName [String](#string)
  * SslMode [DmsSslModeValue](#dmssslmodevalue)
  * Username [String](#string)

### ModifyEndpointResponse
* ModifyEndpointResponse `object`: <p/>
  * Endpoint [Endpoint](#endpoint)

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled [BooleanOptional](#booleanoptional)
  * EventCategories [EventCategoriesList](#eventcategorieslist)
  * SnsTopicArn [String](#string)
  * SourceType [String](#string)
  * SubscriptionName **required** [String](#string)

### ModifyEventSubscriptionResponse
* ModifyEventSubscriptionResponse `object`: <p/>
  * EventSubscription [EventSubscription](#eventsubscription)

### ModifyReplicationInstanceMessage
* ModifyReplicationInstanceMessage `object`: <p/>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * AllowMajorVersionUpgrade [Boolean](#boolean)
  * ApplyImmediately [Boolean](#boolean)
  * AutoMinorVersionUpgrade [BooleanOptional](#booleanoptional)
  * EngineVersion [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * PreferredMaintenanceWindow [String](#string)
  * ReplicationInstanceArn **required** [String](#string)
  * ReplicationInstanceClass [String](#string)
  * ReplicationInstanceIdentifier [String](#string)
  * VpcSecurityGroupIds [VpcSecurityGroupIdList](#vpcsecuritygroupidlist)

### ModifyReplicationInstanceResponse
* ModifyReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance [ReplicationInstance](#replicationinstance)

### ModifyReplicationSubnetGroupMessage
* ModifyReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupDescription [String](#string)
  * ReplicationSubnetGroupIdentifier **required** [String](#string)
  * SubnetIds **required** [SubnetIdentifierList](#subnetidentifierlist)

### ModifyReplicationSubnetGroupResponse
* ModifyReplicationSubnetGroupResponse `object`: <p/>
  * ReplicationSubnetGroup [ReplicationSubnetGroup](#replicationsubnetgroup)

### ModifyReplicationTaskMessage
* ModifyReplicationTaskMessage `object`: <p/>
  * CdcStartTime [TStamp](#tstamp)
  * MigrationType [MigrationTypeValue](#migrationtypevalue)
  * ReplicationTaskArn **required** [String](#string)
  * ReplicationTaskIdentifier [String](#string)
  * ReplicationTaskSettings [String](#string)
  * TableMappings [String](#string)

### ModifyReplicationTaskResponse
* ModifyReplicationTaskResponse `object`: <p/>
  * ReplicationTask [ReplicationTask](#replicationtask)

### MongoDbSettings
* MongoDbSettings `object`: <p/>
  * AuthMechanism [AuthMechanismValue](#authmechanismvalue)
  * AuthSource [String](#string)
  * AuthType [AuthTypeValue](#authtypevalue)
  * DatabaseName [String](#string)
  * DocsToInvestigate [String](#string)
  * ExtractDocId [String](#string)
  * NestingLevel [NestingLevelValue](#nestinglevelvalue)
  * Password [SecretString](#secretstring)
  * Port [IntegerOptional](#integeroptional)
  * ServerName [String](#string)
  * Username [String](#string)

### NestingLevelValue
* NestingLevelValue `string` (values: none, one)

### OrderableReplicationInstance
* OrderableReplicationInstance `object`: <p/>
  * DefaultAllocatedStorage [Integer](#integer)
  * EngineVersion [String](#string)
  * IncludedAllocatedStorage [Integer](#integer)
  * MaxAllocatedStorage [Integer](#integer)
  * MinAllocatedStorage [Integer](#integer)
  * ReplicationInstanceClass [String](#string)
  * StorageType [String](#string)

### OrderableReplicationInstanceList
* OrderableReplicationInstanceList `array`
  * items [OrderableReplicationInstance](#orderablereplicationinstance)

### RefreshSchemasMessage
* RefreshSchemasMessage `object`: <p/>
  * EndpointArn **required** [String](#string)
  * ReplicationInstanceArn **required** [String](#string)

### RefreshSchemasResponse
* RefreshSchemasResponse `object`: <p/>
  * RefreshSchemasStatus [RefreshSchemasStatus](#refreshschemasstatus)

### RefreshSchemasStatus
* RefreshSchemasStatus `object`: <p/>
  * EndpointArn [String](#string)
  * LastFailureMessage [String](#string)
  * LastRefreshDate [TStamp](#tstamp)
  * ReplicationInstanceArn [String](#string)
  * Status [RefreshSchemasStatusTypeValue](#refreshschemasstatustypevalue)

### RefreshSchemasStatusTypeValue
* RefreshSchemasStatusTypeValue `string` (values: successful, failed, refreshing)

### ReloadTablesMessage
* ReloadTablesMessage `object`
  * ReplicationTaskArn **required** [String](#string)
  * TablesToReload **required** [TableListToReload](#tablelisttoreload)

### ReloadTablesResponse
* ReloadTablesResponse `object`
  * ReplicationTaskArn [String](#string)

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: <p/>
  * ResourceArn **required** [String](#string)
  * TagKeys **required** [KeyList](#keylist)

### RemoveTagsFromResourceResponse
* RemoveTagsFromResourceResponse `object`: <p/>

### ReplicationEndpointTypeValue
* ReplicationEndpointTypeValue `string` (values: source, target)

### ReplicationInstance
* ReplicationInstance `object`: <p/>
  * AllocatedStorage [Integer](#integer)
  * AutoMinorVersionUpgrade [Boolean](#boolean)
  * AvailabilityZone [String](#string)
  * EngineVersion [String](#string)
  * InstanceCreateTime [TStamp](#tstamp)
  * KmsKeyId [String](#string)
  * MultiAZ [Boolean](#boolean)
  * PendingModifiedValues [ReplicationPendingModifiedValues](#replicationpendingmodifiedvalues)
  * PreferredMaintenanceWindow [String](#string)
  * PubliclyAccessible [Boolean](#boolean)
  * ReplicationInstanceArn [String](#string)
  * ReplicationInstanceClass [String](#string)
  * ReplicationInstanceIdentifier [String](#string)
  * ReplicationInstancePrivateIpAddress [String](#string)
  * ReplicationInstancePrivateIpAddresses [ReplicationInstancePrivateIpAddressList](#replicationinstanceprivateipaddresslist)
  * ReplicationInstancePublicIpAddress [String](#string)
  * ReplicationInstancePublicIpAddresses [ReplicationInstancePublicIpAddressList](#replicationinstancepublicipaddresslist)
  * ReplicationInstanceStatus [String](#string)
  * ReplicationSubnetGroup [ReplicationSubnetGroup](#replicationsubnetgroup)
  * SecondaryAvailabilityZone [String](#string)
  * VpcSecurityGroups [VpcSecurityGroupMembershipList](#vpcsecuritygroupmembershiplist)

### ReplicationInstanceList
* ReplicationInstanceList `array`
  * items [ReplicationInstance](#replicationinstance)

### ReplicationInstancePrivateIpAddressList
* ReplicationInstancePrivateIpAddressList `array`
  * items [String](#string)

### ReplicationInstancePublicIpAddressList
* ReplicationInstancePublicIpAddressList `array`
  * items [String](#string)

### ReplicationPendingModifiedValues
* ReplicationPendingModifiedValues `object`: <p/>
  * AllocatedStorage [IntegerOptional](#integeroptional)
  * EngineVersion [String](#string)
  * MultiAZ [BooleanOptional](#booleanoptional)
  * ReplicationInstanceClass [String](#string)

### ReplicationSubnetGroup
* ReplicationSubnetGroup `object`: <p/>
  * ReplicationSubnetGroupDescription [String](#string)
  * ReplicationSubnetGroupIdentifier [String](#string)
  * SubnetGroupStatus [String](#string)
  * Subnets [SubnetList](#subnetlist)
  * VpcId [String](#string)

### ReplicationSubnetGroupDoesNotCoverEnoughAZs
* ReplicationSubnetGroupDoesNotCoverEnoughAZs `object`: The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.
  * message [ExceptionMessage](#exceptionmessage)

### ReplicationSubnetGroups
* ReplicationSubnetGroups `array`
  * items [ReplicationSubnetGroup](#replicationsubnetgroup)

### ReplicationTask
* ReplicationTask `object`: <p/>
  * LastFailureMessage [String](#string)
  * MigrationType [MigrationTypeValue](#migrationtypevalue)
  * ReplicationInstanceArn [String](#string)
  * ReplicationTaskArn [String](#string)
  * ReplicationTaskCreationDate [TStamp](#tstamp)
  * ReplicationTaskIdentifier [String](#string)
  * ReplicationTaskSettings [String](#string)
  * ReplicationTaskStartDate [TStamp](#tstamp)
  * ReplicationTaskStats [ReplicationTaskStats](#replicationtaskstats)
  * SourceEndpointArn [String](#string)
  * Status [String](#string)
  * StopReason [String](#string)
  * TableMappings [String](#string)
  * TargetEndpointArn [String](#string)

### ReplicationTaskList
* ReplicationTaskList `array`
  * items [ReplicationTask](#replicationtask)

### ReplicationTaskStats
* ReplicationTaskStats `object`: <p/>
  * ElapsedTimeMillis [Long](#long)
  * FullLoadProgressPercent [Integer](#integer)
  * TablesErrored [Integer](#integer)
  * TablesLoaded [Integer](#integer)
  * TablesLoading [Integer](#integer)
  * TablesQueued [Integer](#integer)

### ResourceAlreadyExistsFault
* ResourceAlreadyExistsFault `object`: The resource you are attempting to create already exists.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceNotFoundFault
* ResourceNotFoundFault `object`: The resource could not be found.
  * message [ExceptionMessage](#exceptionmessage)

### ResourceQuotaExceededFault
* ResourceQuotaExceededFault `object`: The quota for this resource quota has been exceeded.
  * message [ExceptionMessage](#exceptionmessage)

### S3Settings
* S3Settings `object`: <p/>
  * BucketFolder [String](#string)
  * BucketName [String](#string)
  * CompressionType [CompressionTypeValue](#compressiontypevalue)
  * CsvDelimiter [String](#string)
  * CsvRowDelimiter [String](#string)
  * ExternalTableDefinition [String](#string)
  * ServiceAccessRoleArn [String](#string)

### SNSInvalidTopicFault
* SNSInvalidTopicFault `object`: The SNS topic is invalid.
  * message [ExceptionMessage](#exceptionmessage)

### SNSNoAuthorizationFault
* SNSNoAuthorizationFault `object`: You are not authorized for the SNS subscription.
  * message [ExceptionMessage](#exceptionmessage)

### SchemaList
* SchemaList `array`
  * items [String](#string)

### SecretString
* SecretString `string`

### SourceIdsList
* SourceIdsList `array`
  * items [String](#string)

### SourceType
* SourceType `string` (values: replication-instance)

### StartReplicationTaskMessage
* StartReplicationTaskMessage `object`: <p/>
  * CdcStartTime [TStamp](#tstamp)
  * ReplicationTaskArn **required** [String](#string)
  * StartReplicationTaskType **required** [StartReplicationTaskTypeValue](#startreplicationtasktypevalue)

### StartReplicationTaskResponse
* StartReplicationTaskResponse `object`: <p/>
  * ReplicationTask [ReplicationTask](#replicationtask)

### StartReplicationTaskTypeValue
* StartReplicationTaskTypeValue `string` (values: start-replication, resume-processing, reload-target)

### StopReplicationTaskMessage
* StopReplicationTaskMessage `object`: <p/>
  * ReplicationTaskArn **required** [String](#string)

### StopReplicationTaskResponse
* StopReplicationTaskResponse `object`: <p/>
  * ReplicationTask [ReplicationTask](#replicationtask)

### StorageQuotaExceededFault
* StorageQuotaExceededFault `object`: The storage quota has been exceeded.
  * message [ExceptionMessage](#exceptionmessage)

### String
* String `string`

### Subnet
* Subnet `object`: <p/>
  * SubnetAvailabilityZone [AvailabilityZone](#availabilityzone)
  * SubnetIdentifier [String](#string)
  * SubnetStatus [String](#string)

### SubnetAlreadyInUse
* SubnetAlreadyInUse `object`: The specified subnet is already in use.
  * message [ExceptionMessage](#exceptionmessage)

### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SupportedEndpointType
* SupportedEndpointType `object`: <p/>
  * EndpointType [ReplicationEndpointTypeValue](#replicationendpointtypevalue)
  * EngineName [String](#string)
  * SupportsCDC [Boolean](#boolean)

### SupportedEndpointTypeList
* SupportedEndpointTypeList `array`
  * items [SupportedEndpointType](#supportedendpointtype)

### TStamp
* TStamp `string`

### TableListToReload
* TableListToReload `array`
  * items [TableToReload](#tabletoreload)

### TableStatistics
* TableStatistics `object`: <p/>
  * Ddls [Long](#long)
  * Deletes [Long](#long)
  * FullLoadCondtnlChkFailedRows [Long](#long)
  * FullLoadErrorRows [Long](#long)
  * FullLoadRows [Long](#long)
  * Inserts [Long](#long)
  * LastUpdateTime [TStamp](#tstamp)
  * SchemaName [String](#string)
  * TableName [String](#string)
  * TableState [String](#string)
  * Updates [Long](#long)

### TableStatisticsList
* TableStatisticsList `array`
  * items [TableStatistics](#tablestatistics)

### TableToReload
* TableToReload `object`: <p/>
  * SchemaName [String](#string)
  * TableName [String](#string)

### Tag
* Tag `object`: <p/>
  * Key [String](#string)
  * Value [String](#string)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TestConnectionMessage
* TestConnectionMessage `object`: <p/>
  * EndpointArn **required** [String](#string)
  * ReplicationInstanceArn **required** [String](#string)

### TestConnectionResponse
* TestConnectionResponse `object`: <p/>
  * Connection [Connection](#connection)

### UpgradeDependencyFailureFault
* UpgradeDependencyFailureFault `object`: An upgrade dependency is preventing the database migration.
  * message [ExceptionMessage](#exceptionmessage)

### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items [String](#string)

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: <p/>
  * Status [String](#string)
  * VpcSecurityGroupId [String](#string)

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)


