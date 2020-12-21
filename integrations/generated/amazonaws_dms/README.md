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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Database Migration Service</fullname> <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about AWS DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is AWS Database Migration Service?</a> in the <i>AWS Database Migration User Guide.</i> </p>

## Actions

### AddTagsToResource



```js
amazonaws_dms.AddTagsToResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsToResourceResponse](#addtagstoresourceresponse)

### ApplyPendingMaintenanceAction



```js
amazonaws_dms.ApplyPendingMaintenanceAction({
  "ReplicationInstanceArn": null,
  "ApplyAction": null,
  "OptInType": null
}, context)
```

#### Input
* input `object`
  * ApplyAction **required**
  * OptInType **required**
  * ReplicationInstanceArn **required**

#### Output
* output [ApplyPendingMaintenanceActionResponse](#applypendingmaintenanceactionresponse)

### CancelReplicationTaskAssessmentRun



```js
amazonaws_dms.CancelReplicationTaskAssessmentRun({
  "ReplicationTaskAssessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskAssessmentRunArn **required**

#### Output
* output [CancelReplicationTaskAssessmentRunResponse](#cancelreplicationtaskassessmentrunresponse)

### CreateEndpoint



```js
amazonaws_dms.CreateEndpoint({
  "EndpointIdentifier": null,
  "EndpointType": null,
  "EngineName": null
}, context)
```

#### Input
* input `object`
  * CertificateArn
  * DatabaseName
  * DmsTransferSettings
    * BucketName
    * ServiceAccessRoleArn
  * DocDbSettings [DocDbSettings](#docdbsettings)
  * DynamoDbSettings
    * ServiceAccessRoleArn **required**
  * ElasticsearchSettings
    * EndpointUri **required**
    * ErrorRetryDuration
    * FullLoadErrorPercentage
    * ServiceAccessRoleArn **required**
  * EndpointIdentifier **required**
  * EndpointType **required**
  * EngineName **required**
  * ExternalTableDefinition
  * ExtraConnectionAttributes
  * IBMDb2Settings
    * CurrentLsn
    * DatabaseName
    * MaxKBytesPerRead
    * Password
    * Port
    * ServerName
    * SetDataCaptureChanges
    * Username
  * KafkaSettings
    * Broker
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * MessageMaxBytes
    * PartitionIncludeSchemaTable
    * Topic
  * KinesisSettings
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * PartitionIncludeSchemaTable
    * ServiceAccessRoleArn
    * StreamArn
  * KmsKeyId
  * MicrosoftSQLServerSettings
    * BcpPacketSize
    * ControlTablesFileGroup
    * DatabaseName
    * Password
    * Port
    * ReadBackupOnly
    * SafeguardPolicy
    * ServerName
    * UseBcpFullLoad
    * Username
  * MongoDbSettings
    * AuthMechanism
    * AuthSource
    * AuthType
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * MySQLSettings
    * AfterConnectScript
    * DatabaseName
    * EventsPollInterval
    * MaxFileSize
    * ParallelLoadThreads
    * Password
    * Port
    * ServerName
    * ServerTimezone
    * TargetDbType
    * Username
  * NeptuneSettings
    * ErrorRetryDuration
    * IamAuthEnabled
    * MaxFileSize
    * MaxRetryCount
    * S3BucketFolder **required**
    * S3BucketName **required**
    * ServiceAccessRoleArn
  * OracleSettings
    * AccessAlternateDirectly
    * AddSupplementalLogging
    * AdditionalArchivedLogDestId
    * AllowSelectNestedTables
    * ArchivedLogDestId
    * ArchivedLogsOnly
    * AsmPassword
    * AsmServer
    * AsmUser
    * CharLengthSemantics
    * DatabaseName
    * DirectPathNoLog
    * DirectPathParallelLoad
    * EnableHomogenousTablespace
    * FailTasksOnLobTruncation
    * NumberDatatypeScale
    * OraclePathPrefix
    * ParallelAsmReadThreads
    * Password
    * Port
    * ReadAheadBlocks
    * ReadTableSpaceName
    * ReplacePathPrefix
    * RetryInterval
    * SecurityDbEncryption
    * SecurityDbEncryptionName
    * ServerName
    * UseAlternateFolderForOnline
    * UsePathPrefix
    * Username
  * Password
  * Port
  * PostgreSQLSettings
    * AfterConnectScript
    * CaptureDdls
    * DatabaseName
    * DdlArtifactsSchema
    * ExecuteTimeout
    * FailTasksOnLobTruncation
    * MaxFileSize
    * Password
    * Port
    * ServerName
    * SlotName
    * Username
  * RedshiftSettings [RedshiftSettings](#redshiftsettings)
  * ResourceIdentifier
  * S3Settings
    * BucketFolder
    * BucketName
    * CdcInsertsAndUpdates
    * CdcInsertsOnly
    * CdcPath
    * CompressionType
    * CsvDelimiter
    * CsvNoSupValue
    * CsvRowDelimiter
    * DataFormat
    * DataPageSize
    * DatePartitionDelimiter
    * DatePartitionEnabled
    * DatePartitionSequence
    * DictPageSizeLimit
    * EnableStatistics
    * EncodingType
    * EncryptionMode
    * ExternalTableDefinition
    * IncludeOpForFullLoad
    * ParquetTimestampInMillisecond
    * ParquetVersion
    * PreserveTransactions
    * RowGroupLength
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimestampColumnName
    * UseCsvNoSupValue
  * ServerName
  * ServiceAccessRoleArn
  * SslMode
  * SybaseSettings
    * DatabaseName
    * Password
    * Port
    * ServerName
    * Username
  * Tags
    * items [Tag](#tag)
  * Username

#### Output
* output [CreateEndpointResponse](#createendpointresponse)

### CreateEventSubscription



```js
amazonaws_dms.CreateEventSubscription({
  "SubscriptionName": null,
  "SnsTopicArn": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items [String](#string)
  * SnsTopicArn **required**
  * SourceIds
    * items [String](#string)
  * SourceType
  * SubscriptionName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateEventSubscriptionResponse](#createeventsubscriptionresponse)

### CreateReplicationInstance



```js
amazonaws_dms.CreateReplicationInstance({
  "ReplicationInstanceIdentifier": null,
  "ReplicationInstanceClass": null
}, context)
```

#### Input
* input `object`
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * DnsNameServers
  * EngineVersion
  * KmsKeyId
  * MultiAZ
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * ReplicationInstanceClass **required**
  * ReplicationInstanceIdentifier **required**
  * ReplicationSubnetGroupIdentifier
  * ResourceIdentifier
  * Tags
    * items [Tag](#tag)
  * VpcSecurityGroupIds
    * items [String](#string)

#### Output
* output [CreateReplicationInstanceResponse](#createreplicationinstanceresponse)

### CreateReplicationSubnetGroup



```js
amazonaws_dms.CreateReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": null,
  "ReplicationSubnetGroupDescription": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupDescription **required**
  * ReplicationSubnetGroupIdentifier **required**
  * SubnetIds **required**
    * items [String](#string)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateReplicationSubnetGroupResponse](#createreplicationsubnetgroupresponse)

### CreateReplicationTask



```js
amazonaws_dms.CreateReplicationTask({
  "ReplicationTaskIdentifier": null,
  "SourceEndpointArn": null,
  "TargetEndpointArn": null,
  "ReplicationInstanceArn": null,
  "MigrationType": null,
  "TableMappings": null
}, context)
```

#### Input
* input `object`
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * MigrationType **required**
  * ReplicationInstanceArn **required**
  * ReplicationTaskIdentifier **required**
  * ReplicationTaskSettings
  * ResourceIdentifier
  * SourceEndpointArn **required**
  * TableMappings **required**
  * Tags
    * items [Tag](#tag)
  * TargetEndpointArn **required**
  * TaskData

#### Output
* output [CreateReplicationTaskResponse](#createreplicationtaskresponse)

### DeleteCertificate



```js
amazonaws_dms.DeleteCertificate({
  "CertificateArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn **required**

#### Output
* output [DeleteCertificateResponse](#deletecertificateresponse)

### DeleteConnection



```js
amazonaws_dms.DeleteConnection({
  "EndpointArn": null,
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

#### Output
* output [DeleteConnectionResponse](#deleteconnectionresponse)

### DeleteEndpoint



```js
amazonaws_dms.DeleteEndpoint({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

#### Output
* output [DeleteEndpointResponse](#deleteendpointresponse)

### DeleteEventSubscription



```js
amazonaws_dms.DeleteEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * SubscriptionName **required**

#### Output
* output [DeleteEventSubscriptionResponse](#deleteeventsubscriptionresponse)

### DeleteReplicationInstance



```js
amazonaws_dms.DeleteReplicationInstance({
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationInstanceArn **required**

#### Output
* output [DeleteReplicationInstanceResponse](#deletereplicationinstanceresponse)

### DeleteReplicationSubnetGroup



```js
amazonaws_dms.DeleteReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": null
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupIdentifier **required**

#### Output
* output [DeleteReplicationSubnetGroupResponse](#deletereplicationsubnetgroupresponse)

### DeleteReplicationTask



```js
amazonaws_dms.DeleteReplicationTask({
  "ReplicationTaskArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required**

#### Output
* output [DeleteReplicationTaskResponse](#deletereplicationtaskresponse)

### DeleteReplicationTaskAssessmentRun



```js
amazonaws_dms.DeleteReplicationTaskAssessmentRun({
  "ReplicationTaskAssessmentRunArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskAssessmentRunArn **required**

#### Output
* output [DeleteReplicationTaskAssessmentRunResponse](#deletereplicationtaskassessmentrunresponse)

### DescribeAccountAttributes



```js
amazonaws_dms.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAttributesResponse](#describeaccountattributesresponse)

### DescribeApplicableIndividualAssessments



```js
amazonaws_dms.DescribeApplicableIndividualAssessments({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * MigrationType
  * ReplicationInstanceArn
  * ReplicationTaskArn
  * SourceEngineName
  * TargetEngineName

#### Output
* output [DescribeApplicableIndividualAssessmentsResponse](#describeapplicableindividualassessmentsresponse)

### DescribeCertificates



```js
amazonaws_dms.DescribeCertificates({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

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
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

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
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

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
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### DescribeEventCategories



```js
amazonaws_dms.DescribeEventCategories({}, context)
```

#### Input
* input `object`
  * Filters
    * items [Filter](#filter)
  * SourceType

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
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * SubscriptionName

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
  * Duration
  * EndTime
  * EventCategories
    * items [String](#string)
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

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
  * Marker
  * MaxRecords

#### Output
* output [DescribeOrderableReplicationInstancesResponse](#describeorderablereplicationinstancesresponse)

### DescribePendingMaintenanceActions



```js
amazonaws_dms.DescribePendingMaintenanceActions({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * ReplicationInstanceArn

#### Output
* output [DescribePendingMaintenanceActionsResponse](#describependingmaintenanceactionsresponse)

### DescribeRefreshSchemasStatus



```js
amazonaws_dms.DescribeRefreshSchemasStatus({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

#### Output
* output [DescribeRefreshSchemasStatusResponse](#describerefreshschemasstatusresponse)

### DescribeReplicationInstanceTaskLogs



```js
amazonaws_dms.DescribeReplicationInstanceTaskLogs({
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReplicationInstanceArn **required**

#### Output
* output [DescribeReplicationInstanceTaskLogsResponse](#describereplicationinstancetasklogsresponse)

### DescribeReplicationInstances



```js
amazonaws_dms.DescribeReplicationInstances({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

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
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

#### Output
* output [DescribeReplicationSubnetGroupsResponse](#describereplicationsubnetgroupsresponse)

### DescribeReplicationTaskAssessmentResults



```js
amazonaws_dms.DescribeReplicationTaskAssessmentResults({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Marker
  * MaxRecords
  * ReplicationTaskArn

#### Output
* output [DescribeReplicationTaskAssessmentResultsResponse](#describereplicationtaskassessmentresultsresponse)

### DescribeReplicationTaskAssessmentRuns



```js
amazonaws_dms.DescribeReplicationTaskAssessmentRuns({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

#### Output
* output [DescribeReplicationTaskAssessmentRunsResponse](#describereplicationtaskassessmentrunsresponse)

### DescribeReplicationTaskIndividualAssessments



```js
amazonaws_dms.DescribeReplicationTaskIndividualAssessments({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

#### Output
* output [DescribeReplicationTaskIndividualAssessmentsResponse](#describereplicationtaskindividualassessmentsresponse)

### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * WithoutSettings

#### Output
* output [DescribeReplicationTasksResponse](#describereplicationtasksresponse)

### DescribeSchemas



```js
amazonaws_dms.DescribeSchemas({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * EndpointArn **required**
  * Marker
  * MaxRecords

#### Output
* output [DescribeSchemasResponse](#describeschemasresponse)

### DescribeTableStatistics



```js
amazonaws_dms.DescribeTableStatistics({
  "ReplicationTaskArn": null
}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * Marker `string`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * ReplicationTaskArn **required**

#### Output
* output [DescribeTableStatisticsResponse](#describetablestatisticsresponse)

### ImportCertificate



```js
amazonaws_dms.ImportCertificate({
  "CertificateIdentifier": null
}, context)
```

#### Input
* input `object`
  * CertificateIdentifier **required**
  * CertificatePem
  * CertificateWallet
  * Tags
    * items [Tag](#tag)

#### Output
* output [ImportCertificateResponse](#importcertificateresponse)

### ListTagsForResource



```js
amazonaws_dms.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ModifyEndpoint



```js
amazonaws_dms.ModifyEndpoint({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * CertificateArn
  * DatabaseName
  * DmsTransferSettings
    * BucketName
    * ServiceAccessRoleArn
  * DocDbSettings
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * DynamoDbSettings
    * ServiceAccessRoleArn **required**
  * ElasticsearchSettings
    * EndpointUri **required**
    * ErrorRetryDuration
    * FullLoadErrorPercentage
    * ServiceAccessRoleArn **required**
  * EndpointArn **required**
  * EndpointIdentifier
  * EndpointType
  * EngineName
  * ExternalTableDefinition
  * ExtraConnectionAttributes
  * IBMDb2Settings
    * CurrentLsn
    * DatabaseName
    * MaxKBytesPerRead
    * Password
    * Port
    * ServerName
    * SetDataCaptureChanges
    * Username
  * KafkaSettings
    * Broker
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * MessageMaxBytes
    * PartitionIncludeSchemaTable
    * Topic
  * KinesisSettings
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * PartitionIncludeSchemaTable
    * ServiceAccessRoleArn
    * StreamArn
  * MicrosoftSQLServerSettings
    * BcpPacketSize
    * ControlTablesFileGroup
    * DatabaseName
    * Password
    * Port
    * ReadBackupOnly
    * SafeguardPolicy
    * ServerName
    * UseBcpFullLoad
    * Username
  * MongoDbSettings
    * AuthMechanism
    * AuthSource
    * AuthType
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * MySQLSettings
    * AfterConnectScript
    * DatabaseName
    * EventsPollInterval
    * MaxFileSize
    * ParallelLoadThreads
    * Password
    * Port
    * ServerName
    * ServerTimezone
    * TargetDbType
    * Username
  * NeptuneSettings
    * ErrorRetryDuration
    * IamAuthEnabled
    * MaxFileSize
    * MaxRetryCount
    * S3BucketFolder **required**
    * S3BucketName **required**
    * ServiceAccessRoleArn
  * OracleSettings
    * AccessAlternateDirectly
    * AddSupplementalLogging
    * AdditionalArchivedLogDestId
    * AllowSelectNestedTables
    * ArchivedLogDestId
    * ArchivedLogsOnly
    * AsmPassword
    * AsmServer
    * AsmUser
    * CharLengthSemantics
    * DatabaseName
    * DirectPathNoLog
    * DirectPathParallelLoad
    * EnableHomogenousTablespace
    * FailTasksOnLobTruncation
    * NumberDatatypeScale
    * OraclePathPrefix
    * ParallelAsmReadThreads
    * Password
    * Port
    * ReadAheadBlocks
    * ReadTableSpaceName
    * ReplacePathPrefix
    * RetryInterval
    * SecurityDbEncryption
    * SecurityDbEncryptionName
    * ServerName
    * UseAlternateFolderForOnline
    * UsePathPrefix
    * Username
  * Password
  * Port
  * PostgreSQLSettings
    * AfterConnectScript
    * CaptureDdls
    * DatabaseName
    * DdlArtifactsSchema
    * ExecuteTimeout
    * FailTasksOnLobTruncation
    * MaxFileSize
    * Password
    * Port
    * ServerName
    * SlotName
    * Username
  * RedshiftSettings [RedshiftSettings](#redshiftsettings)
  * S3Settings
    * BucketFolder
    * BucketName
    * CdcInsertsAndUpdates
    * CdcInsertsOnly
    * CdcPath
    * CompressionType
    * CsvDelimiter
    * CsvNoSupValue
    * CsvRowDelimiter
    * DataFormat
    * DataPageSize
    * DatePartitionDelimiter
    * DatePartitionEnabled
    * DatePartitionSequence
    * DictPageSizeLimit
    * EnableStatistics
    * EncodingType
    * EncryptionMode
    * ExternalTableDefinition
    * IncludeOpForFullLoad
    * ParquetTimestampInMillisecond
    * ParquetVersion
    * PreserveTransactions
    * RowGroupLength
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimestampColumnName
    * UseCsvNoSupValue
  * ServerName
  * ServiceAccessRoleArn
  * SslMode
  * SybaseSettings
    * DatabaseName
    * Password
    * Port
    * ServerName
    * Username
  * Username

#### Output
* output [ModifyEndpointResponse](#modifyendpointresponse)

### ModifyEventSubscription



```js
amazonaws_dms.ModifyEventSubscription({
  "SubscriptionName": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * EventCategories
    * items [String](#string)
  * SnsTopicArn
  * SourceType
  * SubscriptionName **required**

#### Output
* output [ModifyEventSubscriptionResponse](#modifyeventsubscriptionresponse)

### ModifyReplicationInstance



```js
amazonaws_dms.ModifyReplicationInstance({
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * AllocatedStorage
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * EngineVersion
  * MultiAZ
  * PreferredMaintenanceWindow
  * ReplicationInstanceArn **required**
  * ReplicationInstanceClass
  * ReplicationInstanceIdentifier
  * VpcSecurityGroupIds
    * items [String](#string)

#### Output
* output [ModifyReplicationInstanceResponse](#modifyreplicationinstanceresponse)

### ModifyReplicationSubnetGroup



```js
amazonaws_dms.ModifyReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * ReplicationSubnetGroupDescription
  * ReplicationSubnetGroupIdentifier **required**
  * SubnetIds **required**
    * items [String](#string)

#### Output
* output [ModifyReplicationSubnetGroupResponse](#modifyreplicationsubnetgroupresponse)

### ModifyReplicationTask



```js
amazonaws_dms.ModifyReplicationTask({
  "ReplicationTaskArn": null
}, context)
```

#### Input
* input `object`
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * MigrationType
  * ReplicationTaskArn **required**
  * ReplicationTaskIdentifier
  * ReplicationTaskSettings
  * TableMappings
  * TaskData

#### Output
* output [ModifyReplicationTaskResponse](#modifyreplicationtaskresponse)

### MoveReplicationTask



```js
amazonaws_dms.MoveReplicationTask({
  "ReplicationTaskArn": null,
  "TargetReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required**
  * TargetReplicationInstanceArn **required**

#### Output
* output [MoveReplicationTaskResponse](#movereplicationtaskresponse)

### RebootReplicationInstance



```js
amazonaws_dms.RebootReplicationInstance({
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * ForceFailover
  * ReplicationInstanceArn **required**

#### Output
* output [RebootReplicationInstanceResponse](#rebootreplicationinstanceresponse)

### RefreshSchemas



```js
amazonaws_dms.RefreshSchemas({
  "EndpointArn": null,
  "ReplicationInstanceArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

#### Output
* output [RefreshSchemasResponse](#refreshschemasresponse)

### ReloadTables



```js
amazonaws_dms.ReloadTables({
  "ReplicationTaskArn": null,
  "TablesToReload": null
}, context)
```

#### Input
* input `object`
  * ReloadOption
  * ReplicationTaskArn **required**
  * TablesToReload **required**
    * items [TableToReload](#tabletoreload)

#### Output
* output [ReloadTablesResponse](#reloadtablesresponse)

### RemoveTagsFromResource



```js
amazonaws_dms.RemoveTagsFromResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [String](#string)

#### Output
* output [RemoveTagsFromResourceResponse](#removetagsfromresourceresponse)

### StartReplicationTask



```js
amazonaws_dms.StartReplicationTask({
  "ReplicationTaskArn": null,
  "StartReplicationTaskType": null
}, context)
```

#### Input
* input `object`
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * ReplicationTaskArn **required**
  * StartReplicationTaskType **required**

#### Output
* output [StartReplicationTaskResponse](#startreplicationtaskresponse)

### StartReplicationTaskAssessment



```js
amazonaws_dms.StartReplicationTaskAssessment({
  "ReplicationTaskArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required**

#### Output
* output [StartReplicationTaskAssessmentResponse](#startreplicationtaskassessmentresponse)

### StartReplicationTaskAssessmentRun



```js
amazonaws_dms.StartReplicationTaskAssessmentRun({
  "ReplicationTaskArn": null,
  "ServiceAccessRoleArn": null,
  "ResultLocationBucket": null,
  "AssessmentRunName": null
}, context)
```

#### Input
* input `object`
  * AssessmentRunName **required**
  * Exclude
    * items [String](#string)
  * IncludeOnly
    * items [String](#string)
  * ReplicationTaskArn **required**
  * ResultEncryptionMode
  * ResultKmsKeyArn
  * ResultLocationBucket **required**
  * ResultLocationFolder
  * ServiceAccessRoleArn **required**

#### Output
* output [StartReplicationTaskAssessmentRunResponse](#startreplicationtaskassessmentrunresponse)

### StopReplicationTask



```js
amazonaws_dms.StopReplicationTask({
  "ReplicationTaskArn": null
}, context)
```

#### Input
* input `object`
  * ReplicationTaskArn **required**

#### Output
* output [StopReplicationTaskResponse](#stopreplicationtaskresponse)

### TestConnection



```js
amazonaws_dms.TestConnection({
  "ReplicationInstanceArn": null,
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

#### Output
* output [TestConnectionResponse](#testconnectionresponse)



## Definitions

### AccessDeniedFault


### AccountQuota
* AccountQuota `object`: Describes a quota for an AWS account, for example, the number of replication instances allowed.
  * AccountQuotaName
  * Max
  * Used

### AccountQuotaList
* AccountQuotaList `array`
  * items [AccountQuota](#accountquota)

### AddTagsToResourceMessage
* AddTagsToResourceMessage `object`: Associates a set of tags with an AWS DMS resource.
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsToResourceResponse
* AddTagsToResourceResponse `object`: <p/>

### ApplyPendingMaintenanceActionMessage
* ApplyPendingMaintenanceActionMessage `object`: <p/>
  * ApplyAction **required**
  * OptInType **required**
  * ReplicationInstanceArn **required**

### ApplyPendingMaintenanceActionResponse
* ApplyPendingMaintenanceActionResponse `object`: <p/>
  * ResourcePendingMaintenanceActions
    * PendingMaintenanceActionDetails
      * items [PendingMaintenanceAction](#pendingmaintenanceaction)
    * ResourceIdentifier

### AuthMechanismValue
* AuthMechanismValue `string` (values: default, mongodb_cr, scram_sha_1)

### AuthTypeValue
* AuthTypeValue `string` (values: no, password)

### AvailabilityZone
* AvailabilityZone `object`: The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the AWS Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.
  * Name

### AvailabilityZonesList
* AvailabilityZonesList `array`
  * items [String](#string)

### Boolean
* Boolean `boolean`

### BooleanOptional
* BooleanOptional `boolean`

### CancelReplicationTaskAssessmentRunMessage
* CancelReplicationTaskAssessmentRunMessage `object`: <p/>
  * ReplicationTaskAssessmentRunArn **required**

### CancelReplicationTaskAssessmentRunResponse
* CancelReplicationTaskAssessmentRunResponse `object`: <p/>
  * ReplicationTaskAssessmentRun
    * AssessmentProgress
      * IndividualAssessmentCompletedCount
      * IndividualAssessmentCount
    * AssessmentRunName
    * LastFailureMessage
    * ReplicationTaskArn
    * ReplicationTaskAssessmentRunArn
    * ReplicationTaskAssessmentRunCreationDate
    * ResultEncryptionMode
    * ResultKmsKeyArn
    * ResultLocationBucket
    * ResultLocationFolder
    * ServiceAccessRoleArn
    * Status

### Certificate
* Certificate `object`: The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
  * CertificateArn
  * CertificateCreationDate
  * CertificateIdentifier
  * CertificateOwner
  * CertificatePem
  * CertificateWallet
  * KeyLength
  * SigningAlgorithm
  * ValidFromDate
  * ValidToDate

### CertificateList
* CertificateList `array`
  * items [Certificate](#certificate)

### CertificateWallet
* CertificateWallet `string`

### CharLengthSemantics
* CharLengthSemantics `string` (values: default, char, byte)

### CompressionTypeValue
* CompressionTypeValue `string` (values: none, gzip)

### Connection
* Connection `object`: Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
  * EndpointArn
  * EndpointIdentifier
  * LastFailureMessage
  * ReplicationInstanceArn
  * ReplicationInstanceIdentifier
  * Status

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### CreateEndpointMessage
* CreateEndpointMessage `object`: <p/>
  * CertificateArn
  * DatabaseName
  * DmsTransferSettings
    * BucketName
    * ServiceAccessRoleArn
  * DocDbSettings [DocDbSettings](#docdbsettings)
  * DynamoDbSettings
    * ServiceAccessRoleArn **required**
  * ElasticsearchSettings
    * EndpointUri **required**
    * ErrorRetryDuration
    * FullLoadErrorPercentage
    * ServiceAccessRoleArn **required**
  * EndpointIdentifier **required**
  * EndpointType **required**
  * EngineName **required**
  * ExternalTableDefinition
  * ExtraConnectionAttributes
  * IBMDb2Settings
    * CurrentLsn
    * DatabaseName
    * MaxKBytesPerRead
    * Password
    * Port
    * ServerName
    * SetDataCaptureChanges
    * Username
  * KafkaSettings
    * Broker
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * MessageMaxBytes
    * PartitionIncludeSchemaTable
    * Topic
  * KinesisSettings
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * PartitionIncludeSchemaTable
    * ServiceAccessRoleArn
    * StreamArn
  * KmsKeyId
  * MicrosoftSQLServerSettings
    * BcpPacketSize
    * ControlTablesFileGroup
    * DatabaseName
    * Password
    * Port
    * ReadBackupOnly
    * SafeguardPolicy
    * ServerName
    * UseBcpFullLoad
    * Username
  * MongoDbSettings
    * AuthMechanism
    * AuthSource
    * AuthType
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * MySQLSettings
    * AfterConnectScript
    * DatabaseName
    * EventsPollInterval
    * MaxFileSize
    * ParallelLoadThreads
    * Password
    * Port
    * ServerName
    * ServerTimezone
    * TargetDbType
    * Username
  * NeptuneSettings
    * ErrorRetryDuration
    * IamAuthEnabled
    * MaxFileSize
    * MaxRetryCount
    * S3BucketFolder **required**
    * S3BucketName **required**
    * ServiceAccessRoleArn
  * OracleSettings
    * AccessAlternateDirectly
    * AddSupplementalLogging
    * AdditionalArchivedLogDestId
    * AllowSelectNestedTables
    * ArchivedLogDestId
    * ArchivedLogsOnly
    * AsmPassword
    * AsmServer
    * AsmUser
    * CharLengthSemantics
    * DatabaseName
    * DirectPathNoLog
    * DirectPathParallelLoad
    * EnableHomogenousTablespace
    * FailTasksOnLobTruncation
    * NumberDatatypeScale
    * OraclePathPrefix
    * ParallelAsmReadThreads
    * Password
    * Port
    * ReadAheadBlocks
    * ReadTableSpaceName
    * ReplacePathPrefix
    * RetryInterval
    * SecurityDbEncryption
    * SecurityDbEncryptionName
    * ServerName
    * UseAlternateFolderForOnline
    * UsePathPrefix
    * Username
  * Password
  * Port
  * PostgreSQLSettings
    * AfterConnectScript
    * CaptureDdls
    * DatabaseName
    * DdlArtifactsSchema
    * ExecuteTimeout
    * FailTasksOnLobTruncation
    * MaxFileSize
    * Password
    * Port
    * ServerName
    * SlotName
    * Username
  * RedshiftSettings [RedshiftSettings](#redshiftsettings)
  * ResourceIdentifier
  * S3Settings
    * BucketFolder
    * BucketName
    * CdcInsertsAndUpdates
    * CdcInsertsOnly
    * CdcPath
    * CompressionType
    * CsvDelimiter
    * CsvNoSupValue
    * CsvRowDelimiter
    * DataFormat
    * DataPageSize
    * DatePartitionDelimiter
    * DatePartitionEnabled
    * DatePartitionSequence
    * DictPageSizeLimit
    * EnableStatistics
    * EncodingType
    * EncryptionMode
    * ExternalTableDefinition
    * IncludeOpForFullLoad
    * ParquetTimestampInMillisecond
    * ParquetVersion
    * PreserveTransactions
    * RowGroupLength
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimestampColumnName
    * UseCsvNoSupValue
  * ServerName
  * ServiceAccessRoleArn
  * SslMode
  * SybaseSettings
    * DatabaseName
    * Password
    * Port
    * ServerName
    * Username
  * Tags
    * items [Tag](#tag)
  * Username

### CreateEndpointResponse
* CreateEndpointResponse `object`: <p/>
  * Endpoint
    * CertificateArn
    * DatabaseName
    * DmsTransferSettings
      * BucketName
      * ServiceAccessRoleArn
    * DocDbSettings [DocDbSettings](#docdbsettings)
    * DynamoDbSettings
      * ServiceAccessRoleArn **required**
    * ElasticsearchSettings
      * EndpointUri **required**
      * ErrorRetryDuration
      * FullLoadErrorPercentage
      * ServiceAccessRoleArn **required**
    * EndpointArn
    * EndpointIdentifier
    * EndpointType
    * EngineDisplayName
    * EngineName
    * ExternalId
    * ExternalTableDefinition
    * ExtraConnectionAttributes
    * IBMDb2Settings
      * CurrentLsn
      * DatabaseName
      * MaxKBytesPerRead
      * Password
      * Port
      * ServerName
      * SetDataCaptureChanges
      * Username
    * KafkaSettings
      * Broker
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * MessageMaxBytes
      * PartitionIncludeSchemaTable
      * Topic
    * KinesisSettings
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * PartitionIncludeSchemaTable
      * ServiceAccessRoleArn
      * StreamArn
    * KmsKeyId
    * MicrosoftSQLServerSettings
      * BcpPacketSize
      * ControlTablesFileGroup
      * DatabaseName
      * Password
      * Port
      * ReadBackupOnly
      * SafeguardPolicy
      * ServerName
      * UseBcpFullLoad
      * Username
    * MongoDbSettings
      * AuthMechanism
      * AuthSource
      * AuthType
      * DatabaseName
      * DocsToInvestigate
      * ExtractDocId
      * KmsKeyId
      * NestingLevel
      * Password
      * Port
      * ServerName
      * Username
    * MySQLSettings
      * AfterConnectScript
      * DatabaseName
      * EventsPollInterval
      * MaxFileSize
      * ParallelLoadThreads
      * Password
      * Port
      * ServerName
      * ServerTimezone
      * TargetDbType
      * Username
    * NeptuneSettings
      * ErrorRetryDuration
      * IamAuthEnabled
      * MaxFileSize
      * MaxRetryCount
      * S3BucketFolder **required**
      * S3BucketName **required**
      * ServiceAccessRoleArn
    * OracleSettings
      * AccessAlternateDirectly
      * AddSupplementalLogging
      * AdditionalArchivedLogDestId
      * AllowSelectNestedTables
      * ArchivedLogDestId
      * ArchivedLogsOnly
      * AsmPassword
      * AsmServer
      * AsmUser
      * CharLengthSemantics
      * DatabaseName
      * DirectPathNoLog
      * DirectPathParallelLoad
      * EnableHomogenousTablespace
      * FailTasksOnLobTruncation
      * NumberDatatypeScale
      * OraclePathPrefix
      * ParallelAsmReadThreads
      * Password
      * Port
      * ReadAheadBlocks
      * ReadTableSpaceName
      * ReplacePathPrefix
      * RetryInterval
      * SecurityDbEncryption
      * SecurityDbEncryptionName
      * ServerName
      * UseAlternateFolderForOnline
      * UsePathPrefix
      * Username
    * Port
    * PostgreSQLSettings
      * AfterConnectScript
      * CaptureDdls
      * DatabaseName
      * DdlArtifactsSchema
      * ExecuteTimeout
      * FailTasksOnLobTruncation
      * MaxFileSize
      * Password
      * Port
      * ServerName
      * SlotName
      * Username
    * RedshiftSettings
      * AcceptAnyDate
      * AfterConnectScript
      * BucketFolder
      * BucketName
      * CaseSensitiveNames
      * CompUpdate
      * ConnectionTimeout
      * DatabaseName
      * DateFormat
      * EmptyAsNull
      * EncryptionMode
      * ExplicitIds
      * FileTransferUploadStreams
      * LoadTimeout
      * MaxFileSize
      * Password
      * Port
      * RemoveQuotes
      * ReplaceChars
      * ReplaceInvalidChars
      * ServerName
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimeFormat
      * TrimBlanks
      * TruncateColumns
      * Username
      * WriteBufferSize
    * S3Settings
      * BucketFolder
      * BucketName
      * CdcInsertsAndUpdates
      * CdcInsertsOnly
      * CdcPath
      * CompressionType
      * CsvDelimiter
      * CsvNoSupValue
      * CsvRowDelimiter
      * DataFormat
      * DataPageSize
      * DatePartitionDelimiter
      * DatePartitionEnabled
      * DatePartitionSequence
      * DictPageSizeLimit
      * EnableStatistics
      * EncodingType
      * EncryptionMode
      * ExternalTableDefinition
      * IncludeOpForFullLoad
      * ParquetTimestampInMillisecond
      * ParquetVersion
      * PreserveTransactions
      * RowGroupLength
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimestampColumnName
      * UseCsvNoSupValue
    * ServerName
    * ServiceAccessRoleArn
    * SslMode
    * Status
    * SybaseSettings
      * DatabaseName
      * Password
      * Port
      * ServerName
      * Username
    * Username

### CreateEventSubscriptionMessage
* CreateEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items [String](#string)
  * SnsTopicArn **required**
  * SourceIds
    * items [String](#string)
  * SourceType
  * SubscriptionName **required**
  * Tags
    * items [Tag](#tag)

### CreateEventSubscriptionResponse
* CreateEventSubscriptionResponse `object`: <p/>
  * EventSubscription
    * CustSubscriptionId
    * CustomerAwsId
    * Enabled
    * EventCategoriesList
      * items [String](#string)
    * SnsTopicArn
    * SourceIdsList
      * items [String](#string)
    * SourceType
    * Status
    * SubscriptionCreationTime

### CreateReplicationInstanceMessage
* CreateReplicationInstanceMessage `object`: <p/>
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * DnsNameServers
  * EngineVersion
  * KmsKeyId
  * MultiAZ
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * ReplicationInstanceClass **required**
  * ReplicationInstanceIdentifier **required**
  * ReplicationSubnetGroupIdentifier
  * ResourceIdentifier
  * Tags
    * items [Tag](#tag)
  * VpcSecurityGroupIds
    * items [String](#string)

### CreateReplicationInstanceResponse
* CreateReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance
    * AllocatedStorage
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * DnsNameServers
    * EngineVersion
    * FreeUntil
    * InstanceCreateTime
    * KmsKeyId
    * MultiAZ
    * PendingModifiedValues
      * AllocatedStorage
      * EngineVersion
      * MultiAZ
      * ReplicationInstanceClass
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ReplicationInstanceArn
    * ReplicationInstanceClass
    * ReplicationInstanceIdentifier
    * ReplicationInstancePrivateIpAddress
    * ReplicationInstancePrivateIpAddresses
      * items [String](#string)
    * ReplicationInstancePublicIpAddress
    * ReplicationInstancePublicIpAddresses
      * items [String](#string)
    * ReplicationInstanceStatus
    * ReplicationSubnetGroup
      * ReplicationSubnetGroupDescription
      * ReplicationSubnetGroupIdentifier
      * SubnetGroupStatus
      * Subnets
        * items [Subnet](#subnet)
      * VpcId
    * SecondaryAvailabilityZone
    * VpcSecurityGroups
      * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)

### CreateReplicationSubnetGroupMessage
* CreateReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupDescription **required**
  * ReplicationSubnetGroupIdentifier **required**
  * SubnetIds **required**
    * items [String](#string)
  * Tags
    * items [Tag](#tag)

### CreateReplicationSubnetGroupResponse
* CreateReplicationSubnetGroupResponse `object`: <p/>
  * ReplicationSubnetGroup
    * ReplicationSubnetGroupDescription
    * ReplicationSubnetGroupIdentifier
    * SubnetGroupStatus
    * Subnets
      * items [Subnet](#subnet)
    * VpcId

### CreateReplicationTaskMessage
* CreateReplicationTaskMessage `object`: <p/>
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * MigrationType **required**
  * ReplicationInstanceArn **required**
  * ReplicationTaskIdentifier **required**
  * ReplicationTaskSettings
  * ResourceIdentifier
  * SourceEndpointArn **required**
  * TableMappings **required**
  * Tags
    * items [Tag](#tag)
  * TargetEndpointArn **required**
  * TaskData

### CreateReplicationTaskResponse
* CreateReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### DataFormatValue
* DataFormatValue `string` (values: csv, parquet)

### DatePartitionDelimiterValue
* DatePartitionDelimiterValue `string` (values: SLASH, UNDERSCORE, DASH, NONE)

### DatePartitionSequenceValue
* DatePartitionSequenceValue `string` (values: YYYYMMDD, YYYYMMDDHH, YYYYMM, MMYYYYDD, DDMMYYYY)

### DeleteCertificateMessage
* DeleteCertificateMessage `object`
  * CertificateArn **required**

### DeleteCertificateResponse
* DeleteCertificateResponse `object`
  * Certificate
    * CertificateArn
    * CertificateCreationDate
    * CertificateIdentifier
    * CertificateOwner
    * CertificatePem
    * CertificateWallet
    * KeyLength
    * SigningAlgorithm
    * ValidFromDate
    * ValidToDate

### DeleteConnectionMessage
* DeleteConnectionMessage `object`: <p/>
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

### DeleteConnectionResponse
* DeleteConnectionResponse `object`: <p/>
  * Connection
    * EndpointArn
    * EndpointIdentifier
    * LastFailureMessage
    * ReplicationInstanceArn
    * ReplicationInstanceIdentifier
    * Status

### DeleteEndpointMessage
* DeleteEndpointMessage `object`: <p/>
  * EndpointArn **required**

### DeleteEndpointResponse
* DeleteEndpointResponse `object`: <p/>
  * Endpoint
    * CertificateArn
    * DatabaseName
    * DmsTransferSettings
      * BucketName
      * ServiceAccessRoleArn
    * DocDbSettings [DocDbSettings](#docdbsettings)
    * DynamoDbSettings
      * ServiceAccessRoleArn **required**
    * ElasticsearchSettings
      * EndpointUri **required**
      * ErrorRetryDuration
      * FullLoadErrorPercentage
      * ServiceAccessRoleArn **required**
    * EndpointArn
    * EndpointIdentifier
    * EndpointType
    * EngineDisplayName
    * EngineName
    * ExternalId
    * ExternalTableDefinition
    * ExtraConnectionAttributes
    * IBMDb2Settings
      * CurrentLsn
      * DatabaseName
      * MaxKBytesPerRead
      * Password
      * Port
      * ServerName
      * SetDataCaptureChanges
      * Username
    * KafkaSettings
      * Broker
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * MessageMaxBytes
      * PartitionIncludeSchemaTable
      * Topic
    * KinesisSettings
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * PartitionIncludeSchemaTable
      * ServiceAccessRoleArn
      * StreamArn
    * KmsKeyId
    * MicrosoftSQLServerSettings
      * BcpPacketSize
      * ControlTablesFileGroup
      * DatabaseName
      * Password
      * Port
      * ReadBackupOnly
      * SafeguardPolicy
      * ServerName
      * UseBcpFullLoad
      * Username
    * MongoDbSettings
      * AuthMechanism
      * AuthSource
      * AuthType
      * DatabaseName
      * DocsToInvestigate
      * ExtractDocId
      * KmsKeyId
      * NestingLevel
      * Password
      * Port
      * ServerName
      * Username
    * MySQLSettings
      * AfterConnectScript
      * DatabaseName
      * EventsPollInterval
      * MaxFileSize
      * ParallelLoadThreads
      * Password
      * Port
      * ServerName
      * ServerTimezone
      * TargetDbType
      * Username
    * NeptuneSettings
      * ErrorRetryDuration
      * IamAuthEnabled
      * MaxFileSize
      * MaxRetryCount
      * S3BucketFolder **required**
      * S3BucketName **required**
      * ServiceAccessRoleArn
    * OracleSettings
      * AccessAlternateDirectly
      * AddSupplementalLogging
      * AdditionalArchivedLogDestId
      * AllowSelectNestedTables
      * ArchivedLogDestId
      * ArchivedLogsOnly
      * AsmPassword
      * AsmServer
      * AsmUser
      * CharLengthSemantics
      * DatabaseName
      * DirectPathNoLog
      * DirectPathParallelLoad
      * EnableHomogenousTablespace
      * FailTasksOnLobTruncation
      * NumberDatatypeScale
      * OraclePathPrefix
      * ParallelAsmReadThreads
      * Password
      * Port
      * ReadAheadBlocks
      * ReadTableSpaceName
      * ReplacePathPrefix
      * RetryInterval
      * SecurityDbEncryption
      * SecurityDbEncryptionName
      * ServerName
      * UseAlternateFolderForOnline
      * UsePathPrefix
      * Username
    * Port
    * PostgreSQLSettings
      * AfterConnectScript
      * CaptureDdls
      * DatabaseName
      * DdlArtifactsSchema
      * ExecuteTimeout
      * FailTasksOnLobTruncation
      * MaxFileSize
      * Password
      * Port
      * ServerName
      * SlotName
      * Username
    * RedshiftSettings
      * AcceptAnyDate
      * AfterConnectScript
      * BucketFolder
      * BucketName
      * CaseSensitiveNames
      * CompUpdate
      * ConnectionTimeout
      * DatabaseName
      * DateFormat
      * EmptyAsNull
      * EncryptionMode
      * ExplicitIds
      * FileTransferUploadStreams
      * LoadTimeout
      * MaxFileSize
      * Password
      * Port
      * RemoveQuotes
      * ReplaceChars
      * ReplaceInvalidChars
      * ServerName
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimeFormat
      * TrimBlanks
      * TruncateColumns
      * Username
      * WriteBufferSize
    * S3Settings
      * BucketFolder
      * BucketName
      * CdcInsertsAndUpdates
      * CdcInsertsOnly
      * CdcPath
      * CompressionType
      * CsvDelimiter
      * CsvNoSupValue
      * CsvRowDelimiter
      * DataFormat
      * DataPageSize
      * DatePartitionDelimiter
      * DatePartitionEnabled
      * DatePartitionSequence
      * DictPageSizeLimit
      * EnableStatistics
      * EncodingType
      * EncryptionMode
      * ExternalTableDefinition
      * IncludeOpForFullLoad
      * ParquetTimestampInMillisecond
      * ParquetVersion
      * PreserveTransactions
      * RowGroupLength
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimestampColumnName
      * UseCsvNoSupValue
    * ServerName
    * ServiceAccessRoleArn
    * SslMode
    * Status
    * SybaseSettings
      * DatabaseName
      * Password
      * Port
      * ServerName
      * Username
    * Username

### DeleteEventSubscriptionMessage
* DeleteEventSubscriptionMessage `object`: <p/>
  * SubscriptionName **required**

### DeleteEventSubscriptionResponse
* DeleteEventSubscriptionResponse `object`: <p/>
  * EventSubscription
    * CustSubscriptionId
    * CustomerAwsId
    * Enabled
    * EventCategoriesList
      * items [String](#string)
    * SnsTopicArn
    * SourceIdsList
      * items [String](#string)
    * SourceType
    * Status
    * SubscriptionCreationTime

### DeleteReplicationInstanceMessage
* DeleteReplicationInstanceMessage `object`: <p/>
  * ReplicationInstanceArn **required**

### DeleteReplicationInstanceResponse
* DeleteReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance
    * AllocatedStorage
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * DnsNameServers
    * EngineVersion
    * FreeUntil
    * InstanceCreateTime
    * KmsKeyId
    * MultiAZ
    * PendingModifiedValues
      * AllocatedStorage
      * EngineVersion
      * MultiAZ
      * ReplicationInstanceClass
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ReplicationInstanceArn
    * ReplicationInstanceClass
    * ReplicationInstanceIdentifier
    * ReplicationInstancePrivateIpAddress
    * ReplicationInstancePrivateIpAddresses
      * items [String](#string)
    * ReplicationInstancePublicIpAddress
    * ReplicationInstancePublicIpAddresses
      * items [String](#string)
    * ReplicationInstanceStatus
    * ReplicationSubnetGroup
      * ReplicationSubnetGroupDescription
      * ReplicationSubnetGroupIdentifier
      * SubnetGroupStatus
      * Subnets
        * items [Subnet](#subnet)
      * VpcId
    * SecondaryAvailabilityZone
    * VpcSecurityGroups
      * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)

### DeleteReplicationSubnetGroupMessage
* DeleteReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupIdentifier **required**

### DeleteReplicationSubnetGroupResponse
* DeleteReplicationSubnetGroupResponse `object`: <p/>

### DeleteReplicationTaskAssessmentRunMessage
* DeleteReplicationTaskAssessmentRunMessage `object`: <p/>
  * ReplicationTaskAssessmentRunArn **required**

### DeleteReplicationTaskAssessmentRunResponse
* DeleteReplicationTaskAssessmentRunResponse `object`: <p/>
  * ReplicationTaskAssessmentRun
    * AssessmentProgress
      * IndividualAssessmentCompletedCount
      * IndividualAssessmentCount
    * AssessmentRunName
    * LastFailureMessage
    * ReplicationTaskArn
    * ReplicationTaskAssessmentRunArn
    * ReplicationTaskAssessmentRunCreationDate
    * ResultEncryptionMode
    * ResultKmsKeyArn
    * ResultLocationBucket
    * ResultLocationFolder
    * ServiceAccessRoleArn
    * Status

### DeleteReplicationTaskMessage
* DeleteReplicationTaskMessage `object`: <p/>
  * ReplicationTaskArn **required**

### DeleteReplicationTaskResponse
* DeleteReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### DescribeAccountAttributesMessage
* DescribeAccountAttributesMessage `object`: <p/>

### DescribeAccountAttributesResponse
* DescribeAccountAttributesResponse `object`: <p/>
  * AccountQuotas
    * items [AccountQuota](#accountquota)
  * UniqueAccountIdentifier

### DescribeApplicableIndividualAssessmentsMessage
* DescribeApplicableIndividualAssessmentsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * MigrationType
  * ReplicationInstanceArn
  * ReplicationTaskArn
  * SourceEngineName
  * TargetEngineName

### DescribeApplicableIndividualAssessmentsResponse
* DescribeApplicableIndividualAssessmentsResponse `object`: <p/>
  * IndividualAssessmentNames
    * items [String](#string)
  * Marker

### DescribeCertificatesMessage
* DescribeCertificatesMessage `object`
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeCertificatesResponse
* DescribeCertificatesResponse `object`
  * Certificates
    * items [Certificate](#certificate)
  * Marker

### DescribeConnectionsMessage
* DescribeConnectionsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeConnectionsResponse
* DescribeConnectionsResponse `object`: <p/>
  * Connections
    * items [Connection](#connection)
  * Marker

### DescribeEndpointTypesMessage
* DescribeEndpointTypesMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeEndpointTypesResponse
* DescribeEndpointTypesResponse `object`: <p/>
  * Marker
  * SupportedEndpointTypes
    * items [SupportedEndpointType](#supportedendpointtype)

### DescribeEndpointsMessage
* DescribeEndpointsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`: <p/>
  * Endpoints
    * items [Endpoint](#endpoint)
  * Marker

### DescribeEventCategoriesMessage
* DescribeEventCategoriesMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * SourceType

### DescribeEventCategoriesResponse
* DescribeEventCategoriesResponse `object`: <p/>
  * EventCategoryGroupList
    * items [EventCategoryGroup](#eventcategorygroup)

### DescribeEventSubscriptionsMessage
* DescribeEventSubscriptionsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * SubscriptionName

### DescribeEventSubscriptionsResponse
* DescribeEventSubscriptionsResponse `object`: <p/>
  * EventSubscriptionsList
    * items [EventSubscription](#eventsubscription)
  * Marker

### DescribeEventsMessage
* DescribeEventsMessage `object`: <p/>
  * Duration
  * EndTime
  * EventCategories
    * items [String](#string)
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * SourceIdentifier
  * SourceType
  * StartTime

### DescribeEventsResponse
* DescribeEventsResponse `object`: <p/>
  * Events
    * items [Event](#event)
  * Marker

### DescribeOrderableReplicationInstancesMessage
* DescribeOrderableReplicationInstancesMessage `object`: <p/>
  * Marker
  * MaxRecords

### DescribeOrderableReplicationInstancesResponse
* DescribeOrderableReplicationInstancesResponse `object`: <p/>
  * Marker
  * OrderableReplicationInstances
    * items [OrderableReplicationInstance](#orderablereplicationinstance)

### DescribePendingMaintenanceActionsMessage
* DescribePendingMaintenanceActionsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * ReplicationInstanceArn

### DescribePendingMaintenanceActionsResponse
* DescribePendingMaintenanceActionsResponse `object`: <p/>
  * Marker
  * PendingMaintenanceActions
    * items [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### DescribeRefreshSchemasStatusMessage
* DescribeRefreshSchemasStatusMessage `object`: <p/>
  * EndpointArn **required**

### DescribeRefreshSchemasStatusResponse
* DescribeRefreshSchemasStatusResponse `object`: <p/>
  * RefreshSchemasStatus
    * EndpointArn
    * LastFailureMessage
    * LastRefreshDate
    * ReplicationInstanceArn
    * Status

### DescribeReplicationInstanceTaskLogsMessage
* DescribeReplicationInstanceTaskLogsMessage `object`
  * Marker
  * MaxRecords
  * ReplicationInstanceArn **required**

### DescribeReplicationInstanceTaskLogsResponse
* DescribeReplicationInstanceTaskLogsResponse `object`
  * Marker
  * ReplicationInstanceArn
  * ReplicationInstanceTaskLogs
    * items [ReplicationInstanceTaskLog](#replicationinstancetasklog)

### DescribeReplicationInstancesMessage
* DescribeReplicationInstancesMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeReplicationInstancesResponse
* DescribeReplicationInstancesResponse `object`: <p/>
  * Marker
  * ReplicationInstances
    * items [ReplicationInstance](#replicationinstance)

### DescribeReplicationSubnetGroupsMessage
* DescribeReplicationSubnetGroupsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeReplicationSubnetGroupsResponse
* DescribeReplicationSubnetGroupsResponse `object`: <p/>
  * Marker
  * ReplicationSubnetGroups
    * items [ReplicationSubnetGroup](#replicationsubnetgroup)

### DescribeReplicationTaskAssessmentResultsMessage
* DescribeReplicationTaskAssessmentResultsMessage `object`: <p/>
  * Marker
  * MaxRecords
  * ReplicationTaskArn

### DescribeReplicationTaskAssessmentResultsResponse
* DescribeReplicationTaskAssessmentResultsResponse `object`: <p/>
  * BucketName
  * Marker
  * ReplicationTaskAssessmentResults
    * items [ReplicationTaskAssessmentResult](#replicationtaskassessmentresult)

### DescribeReplicationTaskAssessmentRunsMessage
* DescribeReplicationTaskAssessmentRunsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeReplicationTaskAssessmentRunsResponse
* DescribeReplicationTaskAssessmentRunsResponse `object`: <p/>
  * Marker
  * ReplicationTaskAssessmentRuns
    * items [ReplicationTaskAssessmentRun](#replicationtaskassessmentrun)

### DescribeReplicationTaskIndividualAssessmentsMessage
* DescribeReplicationTaskIndividualAssessmentsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords

### DescribeReplicationTaskIndividualAssessmentsResponse
* DescribeReplicationTaskIndividualAssessmentsResponse `object`: <p/>
  * Marker
  * ReplicationTaskIndividualAssessments
    * items [ReplicationTaskIndividualAssessment](#replicationtaskindividualassessment)

### DescribeReplicationTasksMessage
* DescribeReplicationTasksMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * WithoutSettings

### DescribeReplicationTasksResponse
* DescribeReplicationTasksResponse `object`: <p/>
  * Marker
  * ReplicationTasks
    * items [ReplicationTask](#replicationtask)

### DescribeSchemasMessage
* DescribeSchemasMessage `object`: <p/>
  * EndpointArn **required**
  * Marker
  * MaxRecords

### DescribeSchemasResponse
* DescribeSchemasResponse `object`: <p/>
  * Marker
  * Schemas
    * items [String](#string)

### DescribeTableStatisticsMessage
* DescribeTableStatisticsMessage `object`: <p/>
  * Filters
    * items [Filter](#filter)
  * Marker
  * MaxRecords
  * ReplicationTaskArn **required**

### DescribeTableStatisticsResponse
* DescribeTableStatisticsResponse `object`: <p/>
  * Marker
  * ReplicationTaskArn
  * TableStatistics
    * items [TableStatistics](#tablestatistics)

### DmsSslModeValue
* DmsSslModeValue `string` (values: none, require, verify-ca, verify-full)

### DmsTransferSettings
* DmsTransferSettings `object`:  The settings in JSON format for the DMS Transfer type source endpoint. 
  * BucketName
  * ServiceAccessRoleArn

### DocDbSettings
* DocDbSettings `object`: Provides information that defines a DocumentDB endpoint.
  * DatabaseName
  * DocsToInvestigate
  * ExtractDocId
  * KmsKeyId
  * NestingLevel
  * Password
  * Port
  * ServerName
  * Username

### DynamoDbSettings
* DynamoDbSettings `object`: Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.
  * ServiceAccessRoleArn **required**

### ElasticsearchSettings
* ElasticsearchSettings `object`: Provides information that defines an Elasticsearch endpoint.
  * EndpointUri **required**
  * ErrorRetryDuration
  * FullLoadErrorPercentage
  * ServiceAccessRoleArn **required**

### EncodingTypeValue
* EncodingTypeValue `string` (values: plain, plain-dictionary, rle-dictionary)

### EncryptionModeValue
* EncryptionModeValue `string` (values: sse-s3, sse-kms)

### Endpoint
* Endpoint `object`: <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>
  * CertificateArn
  * DatabaseName
  * DmsTransferSettings
    * BucketName
    * ServiceAccessRoleArn
  * DocDbSettings [DocDbSettings](#docdbsettings)
  * DynamoDbSettings
    * ServiceAccessRoleArn **required**
  * ElasticsearchSettings
    * EndpointUri **required**
    * ErrorRetryDuration
    * FullLoadErrorPercentage
    * ServiceAccessRoleArn **required**
  * EndpointArn
  * EndpointIdentifier
  * EndpointType
  * EngineDisplayName
  * EngineName
  * ExternalId
  * ExternalTableDefinition
  * ExtraConnectionAttributes
  * IBMDb2Settings
    * CurrentLsn
    * DatabaseName
    * MaxKBytesPerRead
    * Password
    * Port
    * ServerName
    * SetDataCaptureChanges
    * Username
  * KafkaSettings
    * Broker
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * MessageMaxBytes
    * PartitionIncludeSchemaTable
    * Topic
  * KinesisSettings
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * PartitionIncludeSchemaTable
    * ServiceAccessRoleArn
    * StreamArn
  * KmsKeyId
  * MicrosoftSQLServerSettings
    * BcpPacketSize
    * ControlTablesFileGroup
    * DatabaseName
    * Password
    * Port
    * ReadBackupOnly
    * SafeguardPolicy
    * ServerName
    * UseBcpFullLoad
    * Username
  * MongoDbSettings
    * AuthMechanism
    * AuthSource
    * AuthType
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * MySQLSettings
    * AfterConnectScript
    * DatabaseName
    * EventsPollInterval
    * MaxFileSize
    * ParallelLoadThreads
    * Password
    * Port
    * ServerName
    * ServerTimezone
    * TargetDbType
    * Username
  * NeptuneSettings
    * ErrorRetryDuration
    * IamAuthEnabled
    * MaxFileSize
    * MaxRetryCount
    * S3BucketFolder **required**
    * S3BucketName **required**
    * ServiceAccessRoleArn
  * OracleSettings
    * AccessAlternateDirectly
    * AddSupplementalLogging
    * AdditionalArchivedLogDestId
    * AllowSelectNestedTables
    * ArchivedLogDestId
    * ArchivedLogsOnly
    * AsmPassword
    * AsmServer
    * AsmUser
    * CharLengthSemantics
    * DatabaseName
    * DirectPathNoLog
    * DirectPathParallelLoad
    * EnableHomogenousTablespace
    * FailTasksOnLobTruncation
    * NumberDatatypeScale
    * OraclePathPrefix
    * ParallelAsmReadThreads
    * Password
    * Port
    * ReadAheadBlocks
    * ReadTableSpaceName
    * ReplacePathPrefix
    * RetryInterval
    * SecurityDbEncryption
    * SecurityDbEncryptionName
    * ServerName
    * UseAlternateFolderForOnline
    * UsePathPrefix
    * Username
  * Port
  * PostgreSQLSettings
    * AfterConnectScript
    * CaptureDdls
    * DatabaseName
    * DdlArtifactsSchema
    * ExecuteTimeout
    * FailTasksOnLobTruncation
    * MaxFileSize
    * Password
    * Port
    * ServerName
    * SlotName
    * Username
  * RedshiftSettings
    * AcceptAnyDate
    * AfterConnectScript
    * BucketFolder
    * BucketName
    * CaseSensitiveNames
    * CompUpdate
    * ConnectionTimeout
    * DatabaseName
    * DateFormat
    * EmptyAsNull
    * EncryptionMode
    * ExplicitIds
    * FileTransferUploadStreams
    * LoadTimeout
    * MaxFileSize
    * Password
    * Port
    * RemoveQuotes
    * ReplaceChars
    * ReplaceInvalidChars
    * ServerName
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimeFormat
    * TrimBlanks
    * TruncateColumns
    * Username
    * WriteBufferSize
  * S3Settings
    * BucketFolder
    * BucketName
    * CdcInsertsAndUpdates
    * CdcInsertsOnly
    * CdcPath
    * CompressionType
    * CsvDelimiter
    * CsvNoSupValue
    * CsvRowDelimiter
    * DataFormat
    * DataPageSize
    * DatePartitionDelimiter
    * DatePartitionEnabled
    * DatePartitionSequence
    * DictPageSizeLimit
    * EnableStatistics
    * EncodingType
    * EncryptionMode
    * ExternalTableDefinition
    * IncludeOpForFullLoad
    * ParquetTimestampInMillisecond
    * ParquetVersion
    * PreserveTransactions
    * RowGroupLength
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimestampColumnName
    * UseCsvNoSupValue
  * ServerName
  * ServiceAccessRoleArn
  * SslMode
  * Status
  * SybaseSettings
    * DatabaseName
    * Password
    * Port
    * ServerName
    * Username
  * Username

### EndpointList
* EndpointList `array`
  * items [Endpoint](#endpoint)

### Event
* Event `object`: Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the AWS DMS resource type.
  * Date
  * EventCategories
    * items [String](#string)
  * Message
  * SourceIdentifier
  * SourceType

### EventCategoriesList
* EventCategoriesList `array`
  * items [String](#string)

### EventCategoryGroup
* EventCategoryGroup `object`: Lists categories of events subscribed to, and generated by, the applicable AWS DMS resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html"> <code>DescribeEventCategories</code> </a> action.
  * EventCategories
    * items [String](#string)
  * SourceType

### EventCategoryGroupList
* EventCategoryGroupList `array`
  * items [EventCategoryGroup](#eventcategorygroup)

### EventList
* EventList `array`
  * items [Event](#event)

### EventSubscription
* EventSubscription `object`: Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.
  * CustSubscriptionId
  * CustomerAwsId
  * Enabled
  * EventCategoriesList
    * items [String](#string)
  * SnsTopicArn
  * SourceIdsList
    * items [String](#string)
  * SourceType
  * Status
  * SubscriptionCreationTime

### EventSubscriptionsList
* EventSubscriptionsList `array`
  * items [EventSubscription](#eventsubscription)

### ExcludeTestList
* ExcludeTestList `array`
  * items [String](#string)

### Filter
* Filter `object`: Identifies the name and value of a filter object. This filter is used to limit the number and type of AWS DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter to the following APIs. 
  * Name **required**
  * Values **required**
    * items [String](#string)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterValueList
* FilterValueList `array`
  * items [String](#string)

### IBMDb2Settings
* IBMDb2Settings `object`: Provides information that defines an IBM Db2 LUW endpoint.
  * CurrentLsn
  * DatabaseName
  * MaxKBytesPerRead
  * Password
  * Port
  * ServerName
  * SetDataCaptureChanges
  * Username

### ImportCertificateMessage
* ImportCertificateMessage `object`
  * CertificateIdentifier **required**
  * CertificatePem
  * CertificateWallet
  * Tags
    * items [Tag](#tag)

### ImportCertificateResponse
* ImportCertificateResponse `object`
  * Certificate
    * CertificateArn
    * CertificateCreationDate
    * CertificateIdentifier
    * CertificateOwner
    * CertificatePem
    * CertificateWallet
    * KeyLength
    * SigningAlgorithm
    * ValidFromDate
    * ValidToDate

### IncludeTestList
* IncludeTestList `array`
  * items [String](#string)

### IndividualAssessmentNameList
* IndividualAssessmentNameList `array`
  * items [String](#string)

### InsufficientResourceCapacityFault


### Integer
* Integer `integer`

### IntegerOptional
* IntegerOptional `integer`

### InvalidCertificateFault


### InvalidResourceStateFault


### InvalidSubnet


### KMSAccessDeniedFault


### KMSDisabledFault


### KMSFault


### KMSInvalidStateFault


### KMSKeyNotAccessibleFault


### KMSNotFoundFault


### KMSThrottlingFault


### KafkaSettings
* KafkaSettings `object`: Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
  * Broker
  * IncludeControlDetails
  * IncludeNullAndEmpty
  * IncludePartitionValue
  * IncludeTableAlterOperations
  * IncludeTransactionDetails
  * MessageFormat
  * MessageMaxBytes
  * PartitionIncludeSchemaTable
  * Topic

### KeyList
* KeyList `array`
  * items [String](#string)

### KinesisSettings
* KinesisSettings `object`: Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
  * IncludeControlDetails
  * IncludeNullAndEmpty
  * IncludePartitionValue
  * IncludeTableAlterOperations
  * IncludeTransactionDetails
  * MessageFormat
  * PartitionIncludeSchemaTable
  * ServiceAccessRoleArn
  * StreamArn

### ListTagsForResourceMessage
* ListTagsForResourceMessage `object`: <p/>
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`: <p/>
  * TagList
    * items [Tag](#tag)

### Long
* Long `integer`

### MessageFormatValue
* MessageFormatValue `string` (values: json, json-unformatted)

### MicrosoftSQLServerSettings
* MicrosoftSQLServerSettings `object`: Provides information that defines a Microsoft SQL Server endpoint.
  * BcpPacketSize
  * ControlTablesFileGroup
  * DatabaseName
  * Password
  * Port
  * ReadBackupOnly
  * SafeguardPolicy
  * ServerName
  * UseBcpFullLoad
  * Username

### MigrationTypeValue
* MigrationTypeValue `string` (values: full-load, cdc, full-load-and-cdc)

### ModifyEndpointMessage
* ModifyEndpointMessage `object`: <p/>
  * CertificateArn
  * DatabaseName
  * DmsTransferSettings
    * BucketName
    * ServiceAccessRoleArn
  * DocDbSettings
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * DynamoDbSettings
    * ServiceAccessRoleArn **required**
  * ElasticsearchSettings
    * EndpointUri **required**
    * ErrorRetryDuration
    * FullLoadErrorPercentage
    * ServiceAccessRoleArn **required**
  * EndpointArn **required**
  * EndpointIdentifier
  * EndpointType
  * EngineName
  * ExternalTableDefinition
  * ExtraConnectionAttributes
  * IBMDb2Settings
    * CurrentLsn
    * DatabaseName
    * MaxKBytesPerRead
    * Password
    * Port
    * ServerName
    * SetDataCaptureChanges
    * Username
  * KafkaSettings
    * Broker
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * MessageMaxBytes
    * PartitionIncludeSchemaTable
    * Topic
  * KinesisSettings
    * IncludeControlDetails
    * IncludeNullAndEmpty
    * IncludePartitionValue
    * IncludeTableAlterOperations
    * IncludeTransactionDetails
    * MessageFormat
    * PartitionIncludeSchemaTable
    * ServiceAccessRoleArn
    * StreamArn
  * MicrosoftSQLServerSettings
    * BcpPacketSize
    * ControlTablesFileGroup
    * DatabaseName
    * Password
    * Port
    * ReadBackupOnly
    * SafeguardPolicy
    * ServerName
    * UseBcpFullLoad
    * Username
  * MongoDbSettings
    * AuthMechanism
    * AuthSource
    * AuthType
    * DatabaseName
    * DocsToInvestigate
    * ExtractDocId
    * KmsKeyId
    * NestingLevel
    * Password
    * Port
    * ServerName
    * Username
  * MySQLSettings
    * AfterConnectScript
    * DatabaseName
    * EventsPollInterval
    * MaxFileSize
    * ParallelLoadThreads
    * Password
    * Port
    * ServerName
    * ServerTimezone
    * TargetDbType
    * Username
  * NeptuneSettings
    * ErrorRetryDuration
    * IamAuthEnabled
    * MaxFileSize
    * MaxRetryCount
    * S3BucketFolder **required**
    * S3BucketName **required**
    * ServiceAccessRoleArn
  * OracleSettings
    * AccessAlternateDirectly
    * AddSupplementalLogging
    * AdditionalArchivedLogDestId
    * AllowSelectNestedTables
    * ArchivedLogDestId
    * ArchivedLogsOnly
    * AsmPassword
    * AsmServer
    * AsmUser
    * CharLengthSemantics
    * DatabaseName
    * DirectPathNoLog
    * DirectPathParallelLoad
    * EnableHomogenousTablespace
    * FailTasksOnLobTruncation
    * NumberDatatypeScale
    * OraclePathPrefix
    * ParallelAsmReadThreads
    * Password
    * Port
    * ReadAheadBlocks
    * ReadTableSpaceName
    * ReplacePathPrefix
    * RetryInterval
    * SecurityDbEncryption
    * SecurityDbEncryptionName
    * ServerName
    * UseAlternateFolderForOnline
    * UsePathPrefix
    * Username
  * Password
  * Port
  * PostgreSQLSettings
    * AfterConnectScript
    * CaptureDdls
    * DatabaseName
    * DdlArtifactsSchema
    * ExecuteTimeout
    * FailTasksOnLobTruncation
    * MaxFileSize
    * Password
    * Port
    * ServerName
    * SlotName
    * Username
  * RedshiftSettings [RedshiftSettings](#redshiftsettings)
  * S3Settings
    * BucketFolder
    * BucketName
    * CdcInsertsAndUpdates
    * CdcInsertsOnly
    * CdcPath
    * CompressionType
    * CsvDelimiter
    * CsvNoSupValue
    * CsvRowDelimiter
    * DataFormat
    * DataPageSize
    * DatePartitionDelimiter
    * DatePartitionEnabled
    * DatePartitionSequence
    * DictPageSizeLimit
    * EnableStatistics
    * EncodingType
    * EncryptionMode
    * ExternalTableDefinition
    * IncludeOpForFullLoad
    * ParquetTimestampInMillisecond
    * ParquetVersion
    * PreserveTransactions
    * RowGroupLength
    * ServerSideEncryptionKmsKeyId
    * ServiceAccessRoleArn
    * TimestampColumnName
    * UseCsvNoSupValue
  * ServerName
  * ServiceAccessRoleArn
  * SslMode
  * SybaseSettings
    * DatabaseName
    * Password
    * Port
    * ServerName
    * Username
  * Username

### ModifyEndpointResponse
* ModifyEndpointResponse `object`: <p/>
  * Endpoint
    * CertificateArn
    * DatabaseName
    * DmsTransferSettings
      * BucketName
      * ServiceAccessRoleArn
    * DocDbSettings [DocDbSettings](#docdbsettings)
    * DynamoDbSettings
      * ServiceAccessRoleArn **required**
    * ElasticsearchSettings
      * EndpointUri **required**
      * ErrorRetryDuration
      * FullLoadErrorPercentage
      * ServiceAccessRoleArn **required**
    * EndpointArn
    * EndpointIdentifier
    * EndpointType
    * EngineDisplayName
    * EngineName
    * ExternalId
    * ExternalTableDefinition
    * ExtraConnectionAttributes
    * IBMDb2Settings
      * CurrentLsn
      * DatabaseName
      * MaxKBytesPerRead
      * Password
      * Port
      * ServerName
      * SetDataCaptureChanges
      * Username
    * KafkaSettings
      * Broker
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * MessageMaxBytes
      * PartitionIncludeSchemaTable
      * Topic
    * KinesisSettings
      * IncludeControlDetails
      * IncludeNullAndEmpty
      * IncludePartitionValue
      * IncludeTableAlterOperations
      * IncludeTransactionDetails
      * MessageFormat
      * PartitionIncludeSchemaTable
      * ServiceAccessRoleArn
      * StreamArn
    * KmsKeyId
    * MicrosoftSQLServerSettings
      * BcpPacketSize
      * ControlTablesFileGroup
      * DatabaseName
      * Password
      * Port
      * ReadBackupOnly
      * SafeguardPolicy
      * ServerName
      * UseBcpFullLoad
      * Username
    * MongoDbSettings
      * AuthMechanism
      * AuthSource
      * AuthType
      * DatabaseName
      * DocsToInvestigate
      * ExtractDocId
      * KmsKeyId
      * NestingLevel
      * Password
      * Port
      * ServerName
      * Username
    * MySQLSettings
      * AfterConnectScript
      * DatabaseName
      * EventsPollInterval
      * MaxFileSize
      * ParallelLoadThreads
      * Password
      * Port
      * ServerName
      * ServerTimezone
      * TargetDbType
      * Username
    * NeptuneSettings
      * ErrorRetryDuration
      * IamAuthEnabled
      * MaxFileSize
      * MaxRetryCount
      * S3BucketFolder **required**
      * S3BucketName **required**
      * ServiceAccessRoleArn
    * OracleSettings
      * AccessAlternateDirectly
      * AddSupplementalLogging
      * AdditionalArchivedLogDestId
      * AllowSelectNestedTables
      * ArchivedLogDestId
      * ArchivedLogsOnly
      * AsmPassword
      * AsmServer
      * AsmUser
      * CharLengthSemantics
      * DatabaseName
      * DirectPathNoLog
      * DirectPathParallelLoad
      * EnableHomogenousTablespace
      * FailTasksOnLobTruncation
      * NumberDatatypeScale
      * OraclePathPrefix
      * ParallelAsmReadThreads
      * Password
      * Port
      * ReadAheadBlocks
      * ReadTableSpaceName
      * ReplacePathPrefix
      * RetryInterval
      * SecurityDbEncryption
      * SecurityDbEncryptionName
      * ServerName
      * UseAlternateFolderForOnline
      * UsePathPrefix
      * Username
    * Port
    * PostgreSQLSettings
      * AfterConnectScript
      * CaptureDdls
      * DatabaseName
      * DdlArtifactsSchema
      * ExecuteTimeout
      * FailTasksOnLobTruncation
      * MaxFileSize
      * Password
      * Port
      * ServerName
      * SlotName
      * Username
    * RedshiftSettings
      * AcceptAnyDate
      * AfterConnectScript
      * BucketFolder
      * BucketName
      * CaseSensitiveNames
      * CompUpdate
      * ConnectionTimeout
      * DatabaseName
      * DateFormat
      * EmptyAsNull
      * EncryptionMode
      * ExplicitIds
      * FileTransferUploadStreams
      * LoadTimeout
      * MaxFileSize
      * Password
      * Port
      * RemoveQuotes
      * ReplaceChars
      * ReplaceInvalidChars
      * ServerName
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimeFormat
      * TrimBlanks
      * TruncateColumns
      * Username
      * WriteBufferSize
    * S3Settings
      * BucketFolder
      * BucketName
      * CdcInsertsAndUpdates
      * CdcInsertsOnly
      * CdcPath
      * CompressionType
      * CsvDelimiter
      * CsvNoSupValue
      * CsvRowDelimiter
      * DataFormat
      * DataPageSize
      * DatePartitionDelimiter
      * DatePartitionEnabled
      * DatePartitionSequence
      * DictPageSizeLimit
      * EnableStatistics
      * EncodingType
      * EncryptionMode
      * ExternalTableDefinition
      * IncludeOpForFullLoad
      * ParquetTimestampInMillisecond
      * ParquetVersion
      * PreserveTransactions
      * RowGroupLength
      * ServerSideEncryptionKmsKeyId
      * ServiceAccessRoleArn
      * TimestampColumnName
      * UseCsvNoSupValue
    * ServerName
    * ServiceAccessRoleArn
    * SslMode
    * Status
    * SybaseSettings
      * DatabaseName
      * Password
      * Port
      * ServerName
      * Username
    * Username

### ModifyEventSubscriptionMessage
* ModifyEventSubscriptionMessage `object`: <p/>
  * Enabled
  * EventCategories
    * items [String](#string)
  * SnsTopicArn
  * SourceType
  * SubscriptionName **required**

### ModifyEventSubscriptionResponse
* ModifyEventSubscriptionResponse `object`: <p/>
  * EventSubscription
    * CustSubscriptionId
    * CustomerAwsId
    * Enabled
    * EventCategoriesList
      * items [String](#string)
    * SnsTopicArn
    * SourceIdsList
      * items [String](#string)
    * SourceType
    * Status
    * SubscriptionCreationTime

### ModifyReplicationInstanceMessage
* ModifyReplicationInstanceMessage `object`: <p/>
  * AllocatedStorage
  * AllowMajorVersionUpgrade
  * ApplyImmediately
  * AutoMinorVersionUpgrade
  * EngineVersion
  * MultiAZ
  * PreferredMaintenanceWindow
  * ReplicationInstanceArn **required**
  * ReplicationInstanceClass
  * ReplicationInstanceIdentifier
  * VpcSecurityGroupIds
    * items [String](#string)

### ModifyReplicationInstanceResponse
* ModifyReplicationInstanceResponse `object`: <p/>
  * ReplicationInstance
    * AllocatedStorage
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * DnsNameServers
    * EngineVersion
    * FreeUntil
    * InstanceCreateTime
    * KmsKeyId
    * MultiAZ
    * PendingModifiedValues
      * AllocatedStorage
      * EngineVersion
      * MultiAZ
      * ReplicationInstanceClass
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ReplicationInstanceArn
    * ReplicationInstanceClass
    * ReplicationInstanceIdentifier
    * ReplicationInstancePrivateIpAddress
    * ReplicationInstancePrivateIpAddresses
      * items [String](#string)
    * ReplicationInstancePublicIpAddress
    * ReplicationInstancePublicIpAddresses
      * items [String](#string)
    * ReplicationInstanceStatus
    * ReplicationSubnetGroup
      * ReplicationSubnetGroupDescription
      * ReplicationSubnetGroupIdentifier
      * SubnetGroupStatus
      * Subnets
        * items [Subnet](#subnet)
      * VpcId
    * SecondaryAvailabilityZone
    * VpcSecurityGroups
      * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)

### ModifyReplicationSubnetGroupMessage
* ModifyReplicationSubnetGroupMessage `object`: <p/>
  * ReplicationSubnetGroupDescription
  * ReplicationSubnetGroupIdentifier **required**
  * SubnetIds **required**
    * items [String](#string)

### ModifyReplicationSubnetGroupResponse
* ModifyReplicationSubnetGroupResponse `object`: <p/>
  * ReplicationSubnetGroup
    * ReplicationSubnetGroupDescription
    * ReplicationSubnetGroupIdentifier
    * SubnetGroupStatus
    * Subnets
      * items [Subnet](#subnet)
    * VpcId

### ModifyReplicationTaskMessage
* ModifyReplicationTaskMessage `object`: <p/>
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * MigrationType
  * ReplicationTaskArn **required**
  * ReplicationTaskIdentifier
  * ReplicationTaskSettings
  * TableMappings
  * TaskData

### ModifyReplicationTaskResponse
* ModifyReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### MongoDbSettings
* MongoDbSettings `object`: Provides information that defines a MongoDB endpoint.
  * AuthMechanism
  * AuthSource
  * AuthType
  * DatabaseName
  * DocsToInvestigate
  * ExtractDocId
  * KmsKeyId
  * NestingLevel
  * Password
  * Port
  * ServerName
  * Username

### MoveReplicationTaskMessage
* MoveReplicationTaskMessage `object`: <p/>
  * ReplicationTaskArn **required**
  * TargetReplicationInstanceArn **required**

### MoveReplicationTaskResponse
* MoveReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### MySQLSettings
* MySQLSettings `object`: Provides information that defines a MySQL endpoint.
  * AfterConnectScript
  * DatabaseName
  * EventsPollInterval
  * MaxFileSize
  * ParallelLoadThreads
  * Password
  * Port
  * ServerName
  * ServerTimezone
  * TargetDbType
  * Username

### NeptuneSettings
* NeptuneSettings `object`: Provides information that defines an Amazon Neptune endpoint.
  * ErrorRetryDuration
  * IamAuthEnabled
  * MaxFileSize
  * MaxRetryCount
  * S3BucketFolder **required**
  * S3BucketName **required**
  * ServiceAccessRoleArn

### NestingLevelValue
* NestingLevelValue `string` (values: none, one)

### OracleSettings
* OracleSettings `object`: Provides information that defines an Oracle endpoint.
  * AccessAlternateDirectly
  * AddSupplementalLogging
  * AdditionalArchivedLogDestId
  * AllowSelectNestedTables
  * ArchivedLogDestId
  * ArchivedLogsOnly
  * AsmPassword
  * AsmServer
  * AsmUser
  * CharLengthSemantics
  * DatabaseName
  * DirectPathNoLog
  * DirectPathParallelLoad
  * EnableHomogenousTablespace
  * FailTasksOnLobTruncation
  * NumberDatatypeScale
  * OraclePathPrefix
  * ParallelAsmReadThreads
  * Password
  * Port
  * ReadAheadBlocks
  * ReadTableSpaceName
  * ReplacePathPrefix
  * RetryInterval
  * SecurityDbEncryption
  * SecurityDbEncryptionName
  * ServerName
  * UseAlternateFolderForOnline
  * UsePathPrefix
  * Username

### OrderableReplicationInstance
* OrderableReplicationInstance `object`: In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
  * AvailabilityZones
    * items [String](#string)
  * DefaultAllocatedStorage
  * EngineVersion
  * IncludedAllocatedStorage
  * MaxAllocatedStorage
  * MinAllocatedStorage
  * ReleaseStatus
  * ReplicationInstanceClass
  * StorageType

### OrderableReplicationInstanceList
* OrderableReplicationInstanceList `array`
  * items [OrderableReplicationInstance](#orderablereplicationinstance)

### ParquetVersionValue
* ParquetVersionValue `string` (values: parquet-1-0, parquet-2-0)

### PendingMaintenanceAction
* PendingMaintenanceAction `object`: Describes a maintenance action pending for an AWS DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.
  * Action
  * AutoAppliedAfterDate
  * CurrentApplyDate
  * Description
  * ForcedApplyDate
  * OptInStatus

### PendingMaintenanceActionDetails
* PendingMaintenanceActionDetails `array`
  * items [PendingMaintenanceAction](#pendingmaintenanceaction)

### PendingMaintenanceActions
* PendingMaintenanceActions `array`
  * items [ResourcePendingMaintenanceActions](#resourcependingmaintenanceactions)

### PostgreSQLSettings
* PostgreSQLSettings `object`: Provides information that defines a PostgreSQL endpoint.
  * AfterConnectScript
  * CaptureDdls
  * DatabaseName
  * DdlArtifactsSchema
  * ExecuteTimeout
  * FailTasksOnLobTruncation
  * MaxFileSize
  * Password
  * Port
  * ServerName
  * SlotName
  * Username

### RebootReplicationInstanceMessage
* RebootReplicationInstanceMessage `object`
  * ForceFailover
  * ReplicationInstanceArn **required**

### RebootReplicationInstanceResponse
* RebootReplicationInstanceResponse `object`
  * ReplicationInstance
    * AllocatedStorage
    * AutoMinorVersionUpgrade
    * AvailabilityZone
    * DnsNameServers
    * EngineVersion
    * FreeUntil
    * InstanceCreateTime
    * KmsKeyId
    * MultiAZ
    * PendingModifiedValues
      * AllocatedStorage
      * EngineVersion
      * MultiAZ
      * ReplicationInstanceClass
    * PreferredMaintenanceWindow
    * PubliclyAccessible
    * ReplicationInstanceArn
    * ReplicationInstanceClass
    * ReplicationInstanceIdentifier
    * ReplicationInstancePrivateIpAddress
    * ReplicationInstancePrivateIpAddresses
      * items [String](#string)
    * ReplicationInstancePublicIpAddress
    * ReplicationInstancePublicIpAddresses
      * items [String](#string)
    * ReplicationInstanceStatus
    * ReplicationSubnetGroup
      * ReplicationSubnetGroupDescription
      * ReplicationSubnetGroupIdentifier
      * SubnetGroupStatus
      * Subnets
        * items [Subnet](#subnet)
      * VpcId
    * SecondaryAvailabilityZone
    * VpcSecurityGroups
      * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)

### RedshiftSettings
* RedshiftSettings `object`: Provides information that defines an Amazon Redshift endpoint.
  * AcceptAnyDate
  * AfterConnectScript
  * BucketFolder
  * BucketName
  * CaseSensitiveNames
  * CompUpdate
  * ConnectionTimeout
  * DatabaseName
  * DateFormat
  * EmptyAsNull
  * EncryptionMode
  * ExplicitIds
  * FileTransferUploadStreams
  * LoadTimeout
  * MaxFileSize
  * Password
  * Port
  * RemoveQuotes
  * ReplaceChars
  * ReplaceInvalidChars
  * ServerName
  * ServerSideEncryptionKmsKeyId
  * ServiceAccessRoleArn
  * TimeFormat
  * TrimBlanks
  * TruncateColumns
  * Username
  * WriteBufferSize

### RefreshSchemasMessage
* RefreshSchemasMessage `object`: <p/>
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

### RefreshSchemasResponse
* RefreshSchemasResponse `object`: <p/>
  * RefreshSchemasStatus
    * EndpointArn
    * LastFailureMessage
    * LastRefreshDate
    * ReplicationInstanceArn
    * Status

### RefreshSchemasStatus
* RefreshSchemasStatus `object`: Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
  * EndpointArn
  * LastFailureMessage
  * LastRefreshDate
  * ReplicationInstanceArn
  * Status

### RefreshSchemasStatusTypeValue
* RefreshSchemasStatusTypeValue `string` (values: successful, failed, refreshing)

### ReleaseStatusValues
* ReleaseStatusValues `string` (values: beta)

### ReloadOptionValue
* ReloadOptionValue `string` (values: data-reload, validate-only)

### ReloadTablesMessage
* ReloadTablesMessage `object`
  * ReloadOption
  * ReplicationTaskArn **required**
  * TablesToReload **required**
    * items [TableToReload](#tabletoreload)

### ReloadTablesResponse
* ReloadTablesResponse `object`
  * ReplicationTaskArn

### RemoveTagsFromResourceMessage
* RemoveTagsFromResourceMessage `object`: Removes one or more tags from an AWS DMS resource.
  * ResourceArn **required**
  * TagKeys **required**
    * items [String](#string)

### RemoveTagsFromResourceResponse
* RemoveTagsFromResourceResponse `object`: <p/>

### ReplicationEndpointTypeValue
* ReplicationEndpointTypeValue `string` (values: source, target)

### ReplicationInstance
* ReplicationInstance `object`: Provides information that defines a replication instance.
  * AllocatedStorage
  * AutoMinorVersionUpgrade
  * AvailabilityZone
  * DnsNameServers
  * EngineVersion
  * FreeUntil
  * InstanceCreateTime
  * KmsKeyId
  * MultiAZ
  * PendingModifiedValues
    * AllocatedStorage
    * EngineVersion
    * MultiAZ
    * ReplicationInstanceClass
  * PreferredMaintenanceWindow
  * PubliclyAccessible
  * ReplicationInstanceArn
  * ReplicationInstanceClass
  * ReplicationInstanceIdentifier
  * ReplicationInstancePrivateIpAddress
  * ReplicationInstancePrivateIpAddresses
    * items [String](#string)
  * ReplicationInstancePublicIpAddress
  * ReplicationInstancePublicIpAddresses
    * items [String](#string)
  * ReplicationInstanceStatus
  * ReplicationSubnetGroup
    * ReplicationSubnetGroupDescription
    * ReplicationSubnetGroupIdentifier
    * SubnetGroupStatus
    * Subnets
      * items [Subnet](#subnet)
    * VpcId
  * SecondaryAvailabilityZone
  * VpcSecurityGroups
    * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)

### ReplicationInstanceList
* ReplicationInstanceList `array`
  * items [ReplicationInstance](#replicationinstance)

### ReplicationInstancePrivateIpAddressList
* ReplicationInstancePrivateIpAddressList `array`
  * items [String](#string)

### ReplicationInstancePublicIpAddressList
* ReplicationInstancePublicIpAddressList `array`
  * items [String](#string)

### ReplicationInstanceTaskLog
* ReplicationInstanceTaskLog `object`: Contains metadata for a replication instance task log.
  * ReplicationInstanceTaskLogSize
  * ReplicationTaskArn
  * ReplicationTaskName

### ReplicationInstanceTaskLogsList
* ReplicationInstanceTaskLogsList `array`
  * items [ReplicationInstanceTaskLog](#replicationinstancetasklog)

### ReplicationPendingModifiedValues
* ReplicationPendingModifiedValues `object`: Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type. 
  * AllocatedStorage
  * EngineVersion
  * MultiAZ
  * ReplicationInstanceClass

### ReplicationSubnetGroup
* ReplicationSubnetGroup `object`: Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
  * ReplicationSubnetGroupDescription
  * ReplicationSubnetGroupIdentifier
  * SubnetGroupStatus
  * Subnets
    * items [Subnet](#subnet)
  * VpcId

### ReplicationSubnetGroupDoesNotCoverEnoughAZs


### ReplicationSubnetGroups
* ReplicationSubnetGroups `array`
  * items [ReplicationSubnetGroup](#replicationsubnetgroup)

### ReplicationTask
* ReplicationTask `object`: Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
  * CdcStartPosition
  * CdcStopPosition
  * LastFailureMessage
  * MigrationType
  * RecoveryCheckpoint
  * ReplicationInstanceArn
  * ReplicationTaskArn
  * ReplicationTaskCreationDate
  * ReplicationTaskIdentifier
  * ReplicationTaskSettings
  * ReplicationTaskStartDate
  * ReplicationTaskStats
    * ElapsedTimeMillis
    * FreshStartDate
    * FullLoadFinishDate
    * FullLoadProgressPercent
    * FullLoadStartDate
    * StartDate
    * StopDate
    * TablesErrored
    * TablesLoaded
    * TablesLoading
    * TablesQueued
  * SourceEndpointArn
  * Status
  * StopReason
  * TableMappings
  * TargetEndpointArn
  * TargetReplicationInstanceArn
  * TaskData

### ReplicationTaskAssessmentResult
* ReplicationTaskAssessmentResult `object`:  The task assessment report in JSON format. 
  * AssessmentResults
  * AssessmentResultsFile
  * AssessmentStatus
  * ReplicationTaskArn
  * ReplicationTaskIdentifier
  * ReplicationTaskLastAssessmentDate
  * S3ObjectUrl

### ReplicationTaskAssessmentResultList
* ReplicationTaskAssessmentResultList `array`
  * items [ReplicationTaskAssessmentResult](#replicationtaskassessmentresult)

### ReplicationTaskAssessmentRun
* ReplicationTaskAssessmentRun `object`: <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
  * AssessmentProgress
    * IndividualAssessmentCompletedCount
    * IndividualAssessmentCount
  * AssessmentRunName
  * LastFailureMessage
  * ReplicationTaskArn
  * ReplicationTaskAssessmentRunArn
  * ReplicationTaskAssessmentRunCreationDate
  * ResultEncryptionMode
  * ResultKmsKeyArn
  * ResultLocationBucket
  * ResultLocationFolder
  * ServiceAccessRoleArn
  * Status

### ReplicationTaskAssessmentRunList
* ReplicationTaskAssessmentRunList `array`
  * items [ReplicationTaskAssessmentRun](#replicationtaskassessmentrun)

### ReplicationTaskAssessmentRunProgress
* ReplicationTaskAssessmentRunProgress `object`: The progress values reported by the <code>AssessmentProgress</code> response element.
  * IndividualAssessmentCompletedCount
  * IndividualAssessmentCount

### ReplicationTaskIndividualAssessment
* ReplicationTaskIndividualAssessment `object`: Provides information that describes an individual assessment from a premigration assessment run.
  * IndividualAssessmentName
  * ReplicationTaskAssessmentRunArn
  * ReplicationTaskIndividualAssessmentArn
  * ReplicationTaskIndividualAssessmentStartDate
  * Status

### ReplicationTaskIndividualAssessmentList
* ReplicationTaskIndividualAssessmentList `array`
  * items [ReplicationTaskIndividualAssessment](#replicationtaskindividualassessment)

### ReplicationTaskList
* ReplicationTaskList `array`
  * items [ReplicationTask](#replicationtask)

### ReplicationTaskStats
* ReplicationTaskStats `object`: In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
  * ElapsedTimeMillis
  * FreshStartDate
  * FullLoadFinishDate
  * FullLoadProgressPercent
  * FullLoadStartDate
  * StartDate
  * StopDate
  * TablesErrored
  * TablesLoaded
  * TablesLoading
  * TablesQueued

### ResourceAlreadyExistsFault


### ResourceNotFoundFault


### ResourcePendingMaintenanceActions
* ResourcePendingMaintenanceActions `object`: Identifies an AWS DMS resource and any pending actions for it.
  * PendingMaintenanceActionDetails
    * items [PendingMaintenanceAction](#pendingmaintenanceaction)
  * ResourceIdentifier

### ResourceQuotaExceededFault


### S3AccessDeniedFault


### S3ResourceNotFoundFault


### S3Settings
* S3Settings `object`: Settings for exporting data to Amazon S3. 
  * BucketFolder
  * BucketName
  * CdcInsertsAndUpdates
  * CdcInsertsOnly
  * CdcPath
  * CompressionType
  * CsvDelimiter
  * CsvNoSupValue
  * CsvRowDelimiter
  * DataFormat
  * DataPageSize
  * DatePartitionDelimiter
  * DatePartitionEnabled
  * DatePartitionSequence
  * DictPageSizeLimit
  * EnableStatistics
  * EncodingType
  * EncryptionMode
  * ExternalTableDefinition
  * IncludeOpForFullLoad
  * ParquetTimestampInMillisecond
  * ParquetVersion
  * PreserveTransactions
  * RowGroupLength
  * ServerSideEncryptionKmsKeyId
  * ServiceAccessRoleArn
  * TimestampColumnName
  * UseCsvNoSupValue

### SNSInvalidTopicFault


### SNSNoAuthorizationFault


### SafeguardPolicy
* SafeguardPolicy `string` (values: rely-on-sql-server-replication-agent, exclusive-automatic-truncation, shared-automatic-truncation)

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

### StartReplicationTaskAssessmentMessage
* StartReplicationTaskAssessmentMessage `object`: <p/>
  * ReplicationTaskArn **required**

### StartReplicationTaskAssessmentResponse
* StartReplicationTaskAssessmentResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### StartReplicationTaskAssessmentRunMessage
* StartReplicationTaskAssessmentRunMessage `object`: <p/>
  * AssessmentRunName **required**
  * Exclude
    * items [String](#string)
  * IncludeOnly
    * items [String](#string)
  * ReplicationTaskArn **required**
  * ResultEncryptionMode
  * ResultKmsKeyArn
  * ResultLocationBucket **required**
  * ResultLocationFolder
  * ServiceAccessRoleArn **required**

### StartReplicationTaskAssessmentRunResponse
* StartReplicationTaskAssessmentRunResponse `object`: <p/>
  * ReplicationTaskAssessmentRun
    * AssessmentProgress
      * IndividualAssessmentCompletedCount
      * IndividualAssessmentCount
    * AssessmentRunName
    * LastFailureMessage
    * ReplicationTaskArn
    * ReplicationTaskAssessmentRunArn
    * ReplicationTaskAssessmentRunCreationDate
    * ResultEncryptionMode
    * ResultKmsKeyArn
    * ResultLocationBucket
    * ResultLocationFolder
    * ServiceAccessRoleArn
    * Status

### StartReplicationTaskMessage
* StartReplicationTaskMessage `object`: <p/>
  * CdcStartPosition
  * CdcStartTime
  * CdcStopPosition
  * ReplicationTaskArn **required**
  * StartReplicationTaskType **required**

### StartReplicationTaskResponse
* StartReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### StartReplicationTaskTypeValue
* StartReplicationTaskTypeValue `string` (values: start-replication, resume-processing, reload-target)

### StopReplicationTaskMessage
* StopReplicationTaskMessage `object`: <p/>
  * ReplicationTaskArn **required**

### StopReplicationTaskResponse
* StopReplicationTaskResponse `object`: <p/>
  * ReplicationTask
    * CdcStartPosition
    * CdcStopPosition
    * LastFailureMessage
    * MigrationType
    * RecoveryCheckpoint
    * ReplicationInstanceArn
    * ReplicationTaskArn
    * ReplicationTaskCreationDate
    * ReplicationTaskIdentifier
    * ReplicationTaskSettings
    * ReplicationTaskStartDate
    * ReplicationTaskStats
      * ElapsedTimeMillis
      * FreshStartDate
      * FullLoadFinishDate
      * FullLoadProgressPercent
      * FullLoadStartDate
      * StartDate
      * StopDate
      * TablesErrored
      * TablesLoaded
      * TablesLoading
      * TablesQueued
    * SourceEndpointArn
    * Status
    * StopReason
    * TableMappings
    * TargetEndpointArn
    * TargetReplicationInstanceArn
    * TaskData

### StorageQuotaExceededFault


### String
* String `string`

### Subnet
* Subnet `object`: In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
  * SubnetAvailabilityZone
    * Name
  * SubnetIdentifier
  * SubnetStatus

### SubnetAlreadyInUse


### SubnetIdentifierList
* SubnetIdentifierList `array`
  * items [String](#string)

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SupportedEndpointType
* SupportedEndpointType `object`: Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
  * EndpointType
  * EngineDisplayName
  * EngineName
  * ReplicationInstanceEngineMinimumVersion
  * SupportsCDC

### SupportedEndpointTypeList
* SupportedEndpointTypeList `array`
  * items [SupportedEndpointType](#supportedendpointtype)

### SybaseSettings
* SybaseSettings `object`: Provides information that defines a SAP ASE endpoint.
  * DatabaseName
  * Password
  * Port
  * ServerName
  * Username

### TStamp
* TStamp `string`

### TableListToReload
* TableListToReload `array`
  * items [TableToReload](#tabletoreload)

### TableStatistics
* TableStatistics `object`: Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
  * Ddls
  * Deletes
  * FullLoadCondtnlChkFailedRows
  * FullLoadEndTime
  * FullLoadErrorRows
  * FullLoadReloaded
  * FullLoadRows
  * FullLoadStartTime
  * Inserts
  * LastUpdateTime
  * SchemaName
  * TableName
  * TableState
  * Updates
  * ValidationFailedRecords
  * ValidationPendingRecords
  * ValidationState
  * ValidationStateDetails
  * ValidationSuspendedRecords

### TableStatisticsList
* TableStatisticsList `array`
  * items [TableStatistics](#tablestatistics)

### TableToReload
* TableToReload `object`: Provides the name of the schema and table to be reloaded.
  * SchemaName **required**
  * TableName **required**

### Tag
* Tag `object`: <p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul>
  * Key
  * Value

### TagList
* TagList `array`
  * items [Tag](#tag)

### TargetDbType
* TargetDbType `string` (values: specific-database, multiple-databases)

### TestConnectionMessage
* TestConnectionMessage `object`: <p/>
  * EndpointArn **required**
  * ReplicationInstanceArn **required**

### TestConnectionResponse
* TestConnectionResponse `object`: <p/>
  * Connection
    * EndpointArn
    * EndpointIdentifier
    * LastFailureMessage
    * ReplicationInstanceArn
    * ReplicationInstanceIdentifier
    * Status

### UpgradeDependencyFailureFault


### VpcSecurityGroupIdList
* VpcSecurityGroupIdList `array`
  * items [String](#string)

### VpcSecurityGroupMembership
* VpcSecurityGroupMembership `object`: Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
  * Status
  * VpcSecurityGroupId

### VpcSecurityGroupMembershipList
* VpcSecurityGroupMembershipList `array`
  * items [VpcSecurityGroupMembership](#vpcsecuritygroupmembership)


