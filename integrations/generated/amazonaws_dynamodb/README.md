# @datafire/amazonaws_dynamodb

Client library for Amazon DynamoDB

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_dynamodb
```
```js
let amazonaws_dynamodb = require('@datafire/amazonaws_dynamodb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the AWS Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an AWS region, providing built-in high availability and data durability. </p>

## Actions

### BatchExecuteStatement



```js
amazonaws_dynamodb.BatchExecuteStatement({
  "Statements": null
}, context)
```

#### Input
* input `object`
  * Statements **required**
    * items [BatchStatementRequest](#batchstatementrequest)

#### Output
* output [BatchExecuteStatementOutput](#batchexecutestatementoutput)

### BatchGetItem



```js
amazonaws_dynamodb.BatchGetItem({
  "RequestItems": null
}, context)
```

#### Input
* input `object`
  * RequestItems `string`
  * RequestItems **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)

#### Output
* output [BatchGetItemOutput](#batchgetitemoutput)

### BatchWriteItem



```js
amazonaws_dynamodb.BatchWriteItem({
  "RequestItems": null
}, context)
```

#### Input
* input `object`
  * RequestItems **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics

#### Output
* output [BatchWriteItemOutput](#batchwriteitemoutput)

### CreateBackup



```js
amazonaws_dynamodb.CreateBackup({
  "TableName": null,
  "BackupName": null
}, context)
```

#### Input
* input `object`
  * BackupName **required**
  * TableName **required**

#### Output
* output [CreateBackupOutput](#createbackupoutput)

### CreateGlobalTable



```js
amazonaws_dynamodb.CreateGlobalTable({
  "GlobalTableName": null,
  "ReplicationGroup": null
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required**
  * ReplicationGroup **required**
    * items [Replica](#replica)

#### Output
* output [CreateGlobalTableOutput](#createglobaltableoutput)

### CreateTable



```js
amazonaws_dynamodb.CreateTable({
  "AttributeDefinitions": null,
  "TableName": null,
  "KeySchema": null
}, context)
```

#### Input
* input `object`
  * AttributeDefinitions **required**
    * items [AttributeDefinition](#attributedefinition)
  * BillingMode
  * GlobalSecondaryIndexes
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * LocalSecondaryIndexes
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * SSESpecification
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * StreamSpecification
    * StreamEnabled **required**
    * StreamViewType
  * TableName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateTableOutput](#createtableoutput)

### DeleteBackup



```js
amazonaws_dynamodb.DeleteBackup({
  "BackupArn": null
}, context)
```

#### Input
* input `object`
  * BackupArn **required**

#### Output
* output [DeleteBackupOutput](#deletebackupoutput)

### DeleteItem



```js
amazonaws_dynamodb.DeleteItem({
  "TableName": null,
  "Key": null
}, context)
```

#### Input
* input `object`
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**

#### Output
* output [DeleteItemOutput](#deleteitemoutput)

### DeleteTable



```js
amazonaws_dynamodb.DeleteTable({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DeleteTableOutput](#deletetableoutput)

### DescribeBackup



```js
amazonaws_dynamodb.DescribeBackup({
  "BackupArn": null
}, context)
```

#### Input
* input `object`
  * BackupArn **required**

#### Output
* output [DescribeBackupOutput](#describebackupoutput)

### DescribeContinuousBackups



```js
amazonaws_dynamodb.DescribeContinuousBackups({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DescribeContinuousBackupsOutput](#describecontinuousbackupsoutput)

### DescribeContributorInsights



```js
amazonaws_dynamodb.DescribeContributorInsights({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * IndexName
  * TableName **required**

#### Output
* output [DescribeContributorInsightsOutput](#describecontributorinsightsoutput)

### DescribeEndpoints



```js
amazonaws_dynamodb.DescribeEndpoints({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### DescribeExport



```js
amazonaws_dynamodb.DescribeExport({
  "ExportArn": null
}, context)
```

#### Input
* input `object`
  * ExportArn **required**

#### Output
* output [DescribeExportOutput](#describeexportoutput)

### DescribeGlobalTable



```js
amazonaws_dynamodb.DescribeGlobalTable({
  "GlobalTableName": null
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required**

#### Output
* output [DescribeGlobalTableOutput](#describeglobaltableoutput)

### DescribeGlobalTableSettings



```js
amazonaws_dynamodb.DescribeGlobalTableSettings({
  "GlobalTableName": null
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required**

#### Output
* output [DescribeGlobalTableSettingsOutput](#describeglobaltablesettingsoutput)

### DescribeKinesisStreamingDestination



```js
amazonaws_dynamodb.DescribeKinesisStreamingDestination({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DescribeKinesisStreamingDestinationOutput](#describekinesisstreamingdestinationoutput)

### DescribeLimits



```js
amazonaws_dynamodb.DescribeLimits({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLimitsOutput](#describelimitsoutput)

### DescribeTable



```js
amazonaws_dynamodb.DescribeTable({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DescribeTableOutput](#describetableoutput)

### DescribeTableReplicaAutoScaling



```js
amazonaws_dynamodb.DescribeTableReplicaAutoScaling({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DescribeTableReplicaAutoScalingOutput](#describetablereplicaautoscalingoutput)

### DescribeTimeToLive



```js
amazonaws_dynamodb.DescribeTimeToLive({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * TableName **required**

#### Output
* output [DescribeTimeToLiveOutput](#describetimetoliveoutput)

### DisableKinesisStreamingDestination



```js
amazonaws_dynamodb.DisableKinesisStreamingDestination({
  "TableName": null,
  "StreamArn": null
}, context)
```

#### Input
* input `object`
  * StreamArn **required**
  * TableName **required**

#### Output
* output [KinesisStreamingDestinationOutput](#kinesisstreamingdestinationoutput)

### EnableKinesisStreamingDestination



```js
amazonaws_dynamodb.EnableKinesisStreamingDestination({
  "TableName": null,
  "StreamArn": null
}, context)
```

#### Input
* input `object`
  * StreamArn **required**
  * TableName **required**

#### Output
* output [KinesisStreamingDestinationOutput](#kinesisstreamingdestinationoutput)

### ExecuteStatement



```js
amazonaws_dynamodb.ExecuteStatement({
  "Statement": null
}, context)
```

#### Input
* input `object`
  * ConsistentRead
  * NextToken
  * Parameters
    * items [AttributeValue](#attributevalue)
  * Statement **required**

#### Output
* output [ExecuteStatementOutput](#executestatementoutput)

### ExecuteTransaction



```js
amazonaws_dynamodb.ExecuteTransaction({
  "TransactStatements": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * TransactStatements **required**
    * items [ParameterizedStatement](#parameterizedstatement)

#### Output
* output [ExecuteTransactionOutput](#executetransactionoutput)

### ExportTableToPointInTime



```js
amazonaws_dynamodb.ExportTableToPointInTime({
  "TableArn": null,
  "S3Bucket": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * ExportFormat
  * ExportTime
  * S3Bucket **required**
  * S3BucketOwner
  * S3Prefix
  * S3SseAlgorithm
  * S3SseKmsKeyId
  * TableArn **required**

#### Output
* output [ExportTableToPointInTimeOutput](#exporttabletopointintimeoutput)

### GetItem



```js
amazonaws_dynamodb.GetItem({
  "TableName": null,
  "Key": null
}, context)
```

#### Input
* input `object`
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConsistentRead
  * ExpressionAttributeNames
  * Key **required**
  * ProjectionExpression
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * TableName **required**

#### Output
* output [GetItemOutput](#getitemoutput)

### ListBackups



```js
amazonaws_dynamodb.ListBackups({}, context)
```

#### Input
* input `object`
  * BackupType
  * ExclusiveStartBackupArn
  * Limit
  * TableName
  * TimeRangeLowerBound
  * TimeRangeUpperBound

#### Output
* output [ListBackupsOutput](#listbackupsoutput)

### ListContributorInsights



```js
amazonaws_dynamodb.ListContributorInsights({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * TableName

#### Output
* output [ListContributorInsightsOutput](#listcontributorinsightsoutput)

### ListExports



```js
amazonaws_dynamodb.ListExports({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * TableArn

#### Output
* output [ListExportsOutput](#listexportsoutput)

### ListGlobalTables



```js
amazonaws_dynamodb.ListGlobalTables({}, context)
```

#### Input
* input `object`
  * ExclusiveStartGlobalTableName
  * Limit
  * RegionName

#### Output
* output [ListGlobalTablesOutput](#listglobaltablesoutput)

### ListTables



```js
amazonaws_dynamodb.ListTables({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartTableName `string`
  * ExclusiveStartTableName
  * Limit

#### Output
* output [ListTablesOutput](#listtablesoutput)

### ListTagsOfResource



```js
amazonaws_dynamodb.ListTagsOfResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsOfResourceOutput](#listtagsofresourceoutput)

### PutItem



```js
amazonaws_dynamodb.PutItem({
  "TableName": null,
  "Item": null
}, context)
```

#### Input
* input `object`
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Item **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**

#### Output
* output [PutItemOutput](#putitemoutput)

### Query



```js
amazonaws_dynamodb.Query({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartKey `string`
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConditionalOperator
  * ConsistentRead
  * ExclusiveStartKey
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * FilterExpression
  * IndexName
  * KeyConditionExpression
  * KeyConditions
  * Limit
  * ProjectionExpression
  * QueryFilter
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanIndexForward
  * Select
  * TableName **required**

#### Output
* output [QueryOutput](#queryoutput)

### RestoreTableFromBackup



```js
amazonaws_dynamodb.RestoreTableFromBackup({
  "TargetTableName": null,
  "BackupArn": null
}, context)
```

#### Input
* input `object`
  * BackupArn **required**
  * BillingModeOverride
  * GlobalSecondaryIndexOverride
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * LocalSecondaryIndexOverride
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughputOverride
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * SSESpecificationOverride
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * TargetTableName **required**

#### Output
* output [RestoreTableFromBackupOutput](#restoretablefrombackupoutput)

### RestoreTableToPointInTime



```js
amazonaws_dynamodb.RestoreTableToPointInTime({
  "TargetTableName": null
}, context)
```

#### Input
* input `object`
  * BillingModeOverride
  * GlobalSecondaryIndexOverride
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * LocalSecondaryIndexOverride
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughputOverride
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * RestoreDateTime
  * SSESpecificationOverride
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * SourceTableArn
  * SourceTableName
  * TargetTableName **required**
  * UseLatestRestorableTime

#### Output
* output [RestoreTableToPointInTimeOutput](#restoretabletopointintimeoutput)

### Scan



```js
amazonaws_dynamodb.Scan({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartKey `string`
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConditionalOperator
  * ConsistentRead
  * ExclusiveStartKey
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * FilterExpression
  * IndexName
  * Limit
  * ProjectionExpression
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanFilter
  * Segment
  * Select
  * TableName **required**
  * TotalSegments

#### Output
* output [ScanOutput](#scanoutput)

### TagResource



```js
amazonaws_dynamodb.TagResource({
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
*Output schema unknown*

### TransactGetItems



```js
amazonaws_dynamodb.TransactGetItems({
  "TransactItems": null
}, context)
```

#### Input
* input `object`
  * ReturnConsumedCapacity
  * TransactItems **required**
    * items [TransactGetItem](#transactgetitem)

#### Output
* output [TransactGetItemsOutput](#transactgetitemsoutput)

### TransactWriteItems



```js
amazonaws_dynamodb.TransactWriteItems({
  "TransactItems": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * TransactItems **required**
    * items [TransactWriteItem](#transactwriteitem)

#### Output
* output [TransactWriteItemsOutput](#transactwriteitemsoutput)

### UntagResource



```js
amazonaws_dynamodb.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKeyString](#tagkeystring)

#### Output
*Output schema unknown*

### UpdateContinuousBackups



```js
amazonaws_dynamodb.UpdateContinuousBackups({
  "TableName": null,
  "PointInTimeRecoverySpecification": null
}, context)
```

#### Input
* input `object`
  * PointInTimeRecoverySpecification **required**
    * PointInTimeRecoveryEnabled **required**
  * TableName **required**

#### Output
* output [UpdateContinuousBackupsOutput](#updatecontinuousbackupsoutput)

### UpdateContributorInsights



```js
amazonaws_dynamodb.UpdateContributorInsights({
  "TableName": null,
  "ContributorInsightsAction": null
}, context)
```

#### Input
* input `object`
  * ContributorInsightsAction **required**
  * IndexName
  * TableName **required**

#### Output
* output [UpdateContributorInsightsOutput](#updatecontributorinsightsoutput)

### UpdateGlobalTable



```js
amazonaws_dynamodb.UpdateGlobalTable({
  "GlobalTableName": null,
  "ReplicaUpdates": null
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required**
  * ReplicaUpdates **required**
    * items [ReplicaUpdate](#replicaupdate)

#### Output
* output [UpdateGlobalTableOutput](#updateglobaltableoutput)

### UpdateGlobalTableSettings



```js
amazonaws_dynamodb.UpdateGlobalTableSettings({
  "GlobalTableName": null
}, context)
```

#### Input
* input `object`
  * GlobalTableBillingMode
  * GlobalTableGlobalSecondaryIndexSettingsUpdate
    * items [GlobalTableGlobalSecondaryIndexSettingsUpdate](#globaltableglobalsecondaryindexsettingsupdate)
  * GlobalTableName **required**
  * GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicyUpdate
      * PolicyName
      * TargetTrackingScalingPolicyConfiguration **required**
        * DisableScaleIn
        * ScaleInCooldown
        * ScaleOutCooldown
        * TargetValue **required**
  * GlobalTableProvisionedWriteCapacityUnits
  * ReplicaSettingsUpdate
    * items [ReplicaSettingsUpdate](#replicasettingsupdate)

#### Output
* output [UpdateGlobalTableSettingsOutput](#updateglobaltablesettingsoutput)

### UpdateItem



```js
amazonaws_dynamodb.UpdateItem({
  "TableName": null,
  "Key": null
}, context)
```

#### Input
* input `object`
  * AttributeUpdates
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**
  * UpdateExpression

#### Output
* output [UpdateItemOutput](#updateitemoutput)

### UpdateTable



```js
amazonaws_dynamodb.UpdateTable({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * AttributeDefinitions
    * items [AttributeDefinition](#attributedefinition)
  * BillingMode
  * GlobalSecondaryIndexUpdates
    * items [GlobalSecondaryIndexUpdate](#globalsecondaryindexupdate)
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * ReplicaUpdates
    * items [ReplicationGroupUpdate](#replicationgroupupdate)
  * SSESpecification
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * StreamSpecification
    * StreamEnabled **required**
    * StreamViewType
  * TableName **required**

#### Output
* output [UpdateTableOutput](#updatetableoutput)

### UpdateTableReplicaAutoScaling



```js
amazonaws_dynamodb.UpdateTableReplicaAutoScaling({
  "TableName": null
}, context)
```

#### Input
* input `object`
  * GlobalSecondaryIndexUpdates
    * items [GlobalSecondaryIndexAutoScalingUpdate](#globalsecondaryindexautoscalingupdate)
  * ProvisionedWriteCapacityAutoScalingUpdate [AutoScalingSettingsUpdate](#autoscalingsettingsupdate)
  * ReplicaUpdates
    * items [ReplicaAutoScalingUpdate](#replicaautoscalingupdate)
  * TableName **required**

#### Output
* output [UpdateTableReplicaAutoScalingOutput](#updatetablereplicaautoscalingoutput)

### UpdateTimeToLive



```js
amazonaws_dynamodb.UpdateTimeToLive({
  "TableName": null,
  "TimeToLiveSpecification": null
}, context)
```

#### Input
* input `object`
  * TableName **required**
  * TimeToLiveSpecification **required**
    * AttributeName **required**
    * Enabled **required**

#### Output
* output [UpdateTimeToLiveOutput](#updatetimetoliveoutput)



## Definitions

### ArchivalReason
* ArchivalReason `string`

### ArchivalSummary
* ArchivalSummary `object`: Contains details of a table archival operation.
  * ArchivalBackupArn
  * ArchivalDateTime
  * ArchivalReason

### AttributeAction
* AttributeAction `string` (values: ADD, PUT, DELETE)

### AttributeDefinition
* AttributeDefinition `object`: Represents an attribute for describing the key schema for the table and indexes.
  * AttributeName **required**
  * AttributeType **required**

### AttributeDefinitions
* AttributeDefinitions `array`
  * items [AttributeDefinition](#attributedefinition)

### AttributeMap
* AttributeMap `object`

### AttributeName
* AttributeName `string`

### AttributeNameList
* AttributeNameList `array`
  * items [AttributeName](#attributename)

### AttributeUpdates
* AttributeUpdates `object`

### AttributeValue
* AttributeValue `object`: <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * B
  * BOOL
  * BS
    * items [BinaryAttributeValue](#binaryattributevalue)
  * L
    * items [AttributeValue](#attributevalue)
  * M
  * N
  * NS
    * items [NumberAttributeValue](#numberattributevalue)
  * NULL
  * S
  * SS
    * items [StringAttributeValue](#stringattributevalue)

### AttributeValueList
* AttributeValueList `array`
  * items [AttributeValue](#attributevalue)

### AttributeValueUpdate
* AttributeValueUpdate `object`: <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>
  * Action
  * Value
    * B
    * BOOL
    * BS
      * items [BinaryAttributeValue](#binaryattributevalue)
    * L
      * items [AttributeValue](#attributevalue)
    * M
    * N
    * NS
      * items [NumberAttributeValue](#numberattributevalue)
    * NULL
    * S
    * SS
      * items [StringAttributeValue](#stringattributevalue)

### AutoScalingPolicyDescription
* AutoScalingPolicyDescription `object`: Represents the properties of the scaling policy.
  * PolicyName
  * TargetTrackingScalingPolicyConfiguration
    * DisableScaleIn
    * ScaleInCooldown
    * ScaleOutCooldown
    * TargetValue **required**

### AutoScalingPolicyDescriptionList
* AutoScalingPolicyDescriptionList `array`
  * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)

### AutoScalingPolicyName
* AutoScalingPolicyName `string`

### AutoScalingPolicyUpdate
* AutoScalingPolicyUpdate `object`: Represents the auto scaling policy to be modified.
  * PolicyName
  * TargetTrackingScalingPolicyConfiguration **required**
    * DisableScaleIn
    * ScaleInCooldown
    * ScaleOutCooldown
    * TargetValue **required**

### AutoScalingRoleArn
* AutoScalingRoleArn `string`

### AutoScalingSettingsDescription
* AutoScalingSettingsDescription `object`: Represents the auto scaling settings for a global table or global secondary index.
  * AutoScalingDisabled
  * AutoScalingRoleArn
  * MaximumUnits
  * MinimumUnits
  * ScalingPolicies
    * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)

### AutoScalingSettingsUpdate
* AutoScalingSettingsUpdate `object`: Represents the auto scaling settings to be modified for a global table or global secondary index.
  * AutoScalingDisabled
  * AutoScalingRoleArn
  * MaximumUnits
  * MinimumUnits
  * ScalingPolicyUpdate
    * PolicyName
    * TargetTrackingScalingPolicyConfiguration **required**
      * DisableScaleIn
      * ScaleInCooldown
      * ScaleOutCooldown
      * TargetValue **required**

### AutoScalingTargetTrackingScalingPolicyConfigurationDescription
* AutoScalingTargetTrackingScalingPolicyConfigurationDescription `object`: Represents the properties of a target tracking scaling policy.
  * DisableScaleIn
  * ScaleInCooldown
  * ScaleOutCooldown
  * TargetValue **required**

### AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
* AutoScalingTargetTrackingScalingPolicyConfigurationUpdate `object`: Represents the settings of a target tracking scaling policy that will be modified.
  * DisableScaleIn
  * ScaleInCooldown
  * ScaleOutCooldown
  * TargetValue **required**

### Backfilling
* Backfilling `boolean`

### BackupArn
* BackupArn `string`

### BackupCreationDateTime
* BackupCreationDateTime `string`

### BackupDescription
* BackupDescription `object`: Contains the description of the backup created for the table.
  * BackupDetails
    * BackupArn **required**
    * BackupCreationDateTime **required**
    * BackupExpiryDateTime
    * BackupName **required**
    * BackupSizeBytes
    * BackupStatus **required**
    * BackupType **required**
  * SourceTableDetails
    * BillingMode
    * ItemCount
    * KeySchema **required**
      * items [KeySchemaElement](#keyschemaelement)
    * ProvisionedThroughput **required**
      * ReadCapacityUnits **required**
      * WriteCapacityUnits **required**
    * TableArn
    * TableCreationDateTime **required**
    * TableId **required**
    * TableName **required**
    * TableSizeBytes
  * SourceTableFeatureDetails
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamDescription
      * StreamEnabled **required**
      * StreamViewType
    * TimeToLiveDescription
      * AttributeName
      * TimeToLiveStatus

### BackupDetails
* BackupDetails `object`: Contains the details of the backup created for the table.
  * BackupArn **required**
  * BackupCreationDateTime **required**
  * BackupExpiryDateTime
  * BackupName **required**
  * BackupSizeBytes
  * BackupStatus **required**
  * BackupType **required**

### BackupInUseException


### BackupName
* BackupName `string`

### BackupNotFoundException


### BackupSizeBytes
* BackupSizeBytes `integer`

### BackupStatus
* BackupStatus `string` (values: CREATING, DELETED, AVAILABLE)

### BackupSummaries
* BackupSummaries `array`
  * items [BackupSummary](#backupsummary)

### BackupSummary
* BackupSummary `object`: Contains details for the backup.
  * BackupArn
  * BackupCreationDateTime
  * BackupExpiryDateTime
  * BackupName
  * BackupSizeBytes
  * BackupStatus
  * BackupType
  * TableArn
  * TableId
  * TableName

### BackupType
* BackupType `string` (values: USER, SYSTEM, AWS_BACKUP)

### BackupTypeFilter
* BackupTypeFilter `string` (values: USER, SYSTEM, AWS_BACKUP, ALL)

### BackupsInputLimit
* BackupsInputLimit `integer`

### BatchExecuteStatementInput
* BatchExecuteStatementInput `object`
  * Statements **required**
    * items [BatchStatementRequest](#batchstatementrequest)

### BatchExecuteStatementOutput
* BatchExecuteStatementOutput `object`
  * Responses
    * items [BatchStatementResponse](#batchstatementresponse)

### BatchGetItemInput
* BatchGetItemInput `object`: Represents the input of a <code>BatchGetItem</code> operation.
  * RequestItems **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)

### BatchGetItemOutput
* BatchGetItemOutput `object`: Represents the output of a <code>BatchGetItem</code> operation.
  * ConsumedCapacity
    * items [ConsumedCapacity](#consumedcapacity)
  * Responses
  * UnprocessedKeys

### BatchGetRequestMap
* BatchGetRequestMap `object`

### BatchGetResponseMap
* BatchGetResponseMap `object`

### BatchStatementError
* BatchStatementError `object`:  An error associated with a statement in a PartiQL batch that was run. 
  * Code
  * Message

### BatchStatementErrorCodeEnum
* BatchStatementErrorCodeEnum `string` (values: ConditionalCheckFailed, ItemCollectionSizeLimitExceeded, RequestLimitExceeded, ValidationError, ProvisionedThroughputExceeded, TransactionConflict, ThrottlingError, InternalServerError, ResourceNotFound, AccessDenied, DuplicateItem)

### BatchStatementRequest
* BatchStatementRequest `object`:  A PartiQL batch statement request. 
  * ConsistentRead
  * Parameters
    * items [AttributeValue](#attributevalue)
  * Statement **required**

### BatchStatementResponse
* BatchStatementResponse `object`:  A PartiQL batch statement response.. 
  * Error
    * Code
    * Message
  * Item
  * TableName

### BatchWriteItemInput
* BatchWriteItemInput `object`: Represents the input of a <code>BatchWriteItem</code> operation.
  * RequestItems **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics

### BatchWriteItemOutput
* BatchWriteItemOutput `object`: Represents the output of a <code>BatchWriteItem</code> operation.
  * ConsumedCapacity
    * items [ConsumedCapacity](#consumedcapacity)
  * ItemCollectionMetrics
  * UnprocessedItems

### BatchWriteItemRequestMap
* BatchWriteItemRequestMap `object`

### BilledSizeBytes
* BilledSizeBytes `integer`

### BillingMode
* BillingMode `string` (values: PROVISIONED, PAY_PER_REQUEST)

### BillingModeSummary
* BillingModeSummary `object`: Contains the details for the read/write capacity mode.
  * BillingMode
  * LastUpdateToPayPerRequestDateTime

### BinaryAttributeValue
* BinaryAttributeValue `string`

### BinarySetAttributeValue
* BinarySetAttributeValue `array`
  * items [BinaryAttributeValue](#binaryattributevalue)

### BooleanAttributeValue
* BooleanAttributeValue `boolean`

### BooleanObject
* BooleanObject `boolean`

### Capacity
* Capacity `object`: Represents the amount of provisioned throughput capacity consumed on a table or an index.
  * CapacityUnits
  * ReadCapacityUnits
  * WriteCapacityUnits

### ClientRequestToken
* ClientRequestToken `string`

### ClientToken
* ClientToken `string`

### ComparisonOperator
* ComparisonOperator `string` (values: EQ, NE, IN, LE, LT, GE, GT, BETWEEN, NOT_NULL, NULL, CONTAINS, NOT_CONTAINS, BEGINS_WITH)

### Condition
* Condition `object`: <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>
  * AttributeValueList
    * items [AttributeValue](#attributevalue)
  * ComparisonOperator **required**

### ConditionCheck
* ConditionCheck `object`: Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.
  * ConditionExpression **required**
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnValuesOnConditionCheckFailure
  * TableName **required**

### ConditionExpression
* ConditionExpression `string`

### ConditionalCheckFailedException


### ConditionalOperator
* ConditionalOperator `string` (values: AND, OR)

### ConsistentRead
* ConsistentRead `boolean`

### ConsumedCapacity
* ConsumedCapacity `object`: The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
  * CapacityUnits
  * GlobalSecondaryIndexes
  * LocalSecondaryIndexes
  * ReadCapacityUnits
  * Table
    * CapacityUnits
    * ReadCapacityUnits
    * WriteCapacityUnits
  * TableName
  * WriteCapacityUnits

### ConsumedCapacityMultiple
* ConsumedCapacityMultiple `array`
  * items [ConsumedCapacity](#consumedcapacity)

### ConsumedCapacityUnits
* ConsumedCapacityUnits `number`

### ContinuousBackupsDescription
* ContinuousBackupsDescription `object`: Represents the continuous backups and point in time recovery settings on the table.
  * ContinuousBackupsStatus **required**
  * PointInTimeRecoveryDescription
    * EarliestRestorableDateTime
    * LatestRestorableDateTime
    * PointInTimeRecoveryStatus

### ContinuousBackupsStatus
* ContinuousBackupsStatus `string` (values: ENABLED, DISABLED)

### ContinuousBackupsUnavailableException


### ContributorInsightsAction
* ContributorInsightsAction `string` (values: ENABLE, DISABLE)

### ContributorInsightsRule
* ContributorInsightsRule `string`

### ContributorInsightsRuleList
* ContributorInsightsRuleList `array`
  * items [ContributorInsightsRule](#contributorinsightsrule)

### ContributorInsightsStatus
* ContributorInsightsStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED, FAILED)

### ContributorInsightsSummaries
* ContributorInsightsSummaries `array`
  * items [ContributorInsightsSummary](#contributorinsightssummary)

### ContributorInsightsSummary
* ContributorInsightsSummary `object`: Represents a Contributor Insights summary entry.
  * ContributorInsightsStatus
  * IndexName
  * TableName

### CreateBackupInput
* CreateBackupInput `object`
  * BackupName **required**
  * TableName **required**

### CreateBackupOutput
* CreateBackupOutput `object`
  * BackupDetails
    * BackupArn **required**
    * BackupCreationDateTime **required**
    * BackupExpiryDateTime
    * BackupName **required**
    * BackupSizeBytes
    * BackupStatus **required**
    * BackupType **required**

### CreateGlobalSecondaryIndexAction
* CreateGlobalSecondaryIndexAction `object`: Represents a new global secondary index to be added to an existing table.
  * IndexName **required**
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * Projection **required**
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**

### CreateGlobalTableInput
* CreateGlobalTableInput `object`
  * GlobalTableName **required**
  * ReplicationGroup **required**
    * items [Replica](#replica)

### CreateGlobalTableOutput
* CreateGlobalTableOutput `object`
  * GlobalTableDescription
    * CreationDateTime
    * GlobalTableArn
    * GlobalTableName
    * GlobalTableStatus
    * ReplicationGroup
      * items [ReplicaDescription](#replicadescription)

### CreateReplicaAction
* CreateReplicaAction `object`: Represents a replica to be added.
  * RegionName **required**

### CreateReplicationGroupMemberAction
* CreateReplicationGroupMemberAction `object`: Represents a replica to be created.
  * GlobalSecondaryIndexes
    * items [ReplicaGlobalSecondaryIndex](#replicaglobalsecondaryindex)
  * KMSMasterKeyId
  * ProvisionedThroughputOverride
    * ReadCapacityUnits
  * RegionName **required**

### CreateTableInput
* CreateTableInput `object`: Represents the input of a <code>CreateTable</code> operation.
  * AttributeDefinitions **required**
    * items [AttributeDefinition](#attributedefinition)
  * BillingMode
  * GlobalSecondaryIndexes
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * LocalSecondaryIndexes
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * SSESpecification
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * StreamSpecification
    * StreamEnabled **required**
    * StreamViewType
  * TableName **required**
  * Tags
    * items [Tag](#tag)

### CreateTableOutput
* CreateTableOutput `object`: Represents the output of a <code>CreateTable</code> operation.
  * TableDescription
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### Date
* Date `string`

### Delete
* Delete `object`: Represents a request to perform a <code>DeleteItem</code> operation.
  * ConditionExpression
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnValuesOnConditionCheckFailure
  * TableName **required**

### DeleteBackupInput
* DeleteBackupInput `object`
  * BackupArn **required**

### DeleteBackupOutput
* DeleteBackupOutput `object`
  * BackupDescription
    * BackupDetails
      * BackupArn **required**
      * BackupCreationDateTime **required**
      * BackupExpiryDateTime
      * BackupName **required**
      * BackupSizeBytes
      * BackupStatus **required**
      * BackupType **required**
    * SourceTableDetails
      * BillingMode
      * ItemCount
      * KeySchema **required**
        * items [KeySchemaElement](#keyschemaelement)
      * ProvisionedThroughput **required**
        * ReadCapacityUnits **required**
        * WriteCapacityUnits **required**
      * TableArn
      * TableCreationDateTime **required**
      * TableId **required**
      * TableName **required**
      * TableSizeBytes
    * SourceTableFeatureDetails
      * GlobalSecondaryIndexes
        * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)
      * LocalSecondaryIndexes
        * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)
      * SSEDescription
        * InaccessibleEncryptionDateTime
        * KMSMasterKeyArn
        * SSEType
        * Status
      * StreamDescription
        * StreamEnabled **required**
        * StreamViewType
      * TimeToLiveDescription
        * AttributeName
        * TimeToLiveStatus

### DeleteGlobalSecondaryIndexAction
* DeleteGlobalSecondaryIndexAction `object`: Represents a global secondary index to be deleted from an existing table.
  * IndexName **required**

### DeleteItemInput
* DeleteItemInput `object`: Represents the input of a <code>DeleteItem</code> operation.
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**

### DeleteItemOutput
* DeleteItemOutput `object`: Represents the output of a <code>DeleteItem</code> operation.
  * Attributes
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * ItemCollectionMetrics
    * ItemCollectionKey
    * SizeEstimateRangeGB
      * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### DeleteReplicaAction
* DeleteReplicaAction `object`: Represents a replica to be removed.
  * RegionName **required**

### DeleteReplicationGroupMemberAction
* DeleteReplicationGroupMemberAction `object`: Represents a replica to be deleted.
  * RegionName **required**

### DeleteRequest
* DeleteRequest `object`: Represents a request to perform a <code>DeleteItem</code> operation on an item.
  * Key **required**

### DeleteTableInput
* DeleteTableInput `object`: Represents the input of a <code>DeleteTable</code> operation.
  * TableName **required**

### DeleteTableOutput
* DeleteTableOutput `object`: Represents the output of a <code>DeleteTable</code> operation.
  * TableDescription
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### DescribeBackupInput
* DescribeBackupInput `object`
  * BackupArn **required**

### DescribeBackupOutput
* DescribeBackupOutput `object`
  * BackupDescription
    * BackupDetails
      * BackupArn **required**
      * BackupCreationDateTime **required**
      * BackupExpiryDateTime
      * BackupName **required**
      * BackupSizeBytes
      * BackupStatus **required**
      * BackupType **required**
    * SourceTableDetails
      * BillingMode
      * ItemCount
      * KeySchema **required**
        * items [KeySchemaElement](#keyschemaelement)
      * ProvisionedThroughput **required**
        * ReadCapacityUnits **required**
        * WriteCapacityUnits **required**
      * TableArn
      * TableCreationDateTime **required**
      * TableId **required**
      * TableName **required**
      * TableSizeBytes
    * SourceTableFeatureDetails
      * GlobalSecondaryIndexes
        * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)
      * LocalSecondaryIndexes
        * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)
      * SSEDescription
        * InaccessibleEncryptionDateTime
        * KMSMasterKeyArn
        * SSEType
        * Status
      * StreamDescription
        * StreamEnabled **required**
        * StreamViewType
      * TimeToLiveDescription
        * AttributeName
        * TimeToLiveStatus

### DescribeContinuousBackupsInput
* DescribeContinuousBackupsInput `object`
  * TableName **required**

### DescribeContinuousBackupsOutput
* DescribeContinuousBackupsOutput `object`
  * ContinuousBackupsDescription
    * ContinuousBackupsStatus **required**
    * PointInTimeRecoveryDescription
      * EarliestRestorableDateTime
      * LatestRestorableDateTime
      * PointInTimeRecoveryStatus

### DescribeContributorInsightsInput
* DescribeContributorInsightsInput `object`
  * IndexName
  * TableName **required**

### DescribeContributorInsightsOutput
* DescribeContributorInsightsOutput `object`
  * ContributorInsightsRuleList
    * items [ContributorInsightsRule](#contributorinsightsrule)
  * ContributorInsightsStatus
  * FailureException
    * ExceptionDescription
    * ExceptionName
  * IndexName
  * LastUpdateDateTime
  * TableName

### DescribeEndpointsRequest
* DescribeEndpointsRequest `object`

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`
  * Endpoints **required**
    * items [Endpoint](#endpoint)

### DescribeExportInput
* DescribeExportInput `object`
  * ExportArn **required**

### DescribeExportOutput
* DescribeExportOutput `object`
  * ExportDescription
    * BilledSizeBytes
    * ClientToken
    * EndTime
    * ExportArn
    * ExportFormat
    * ExportManifest
    * ExportStatus
    * ExportTime
    * FailureCode
    * FailureMessage
    * ItemCount
    * S3Bucket
    * S3BucketOwner
    * S3Prefix
    * S3SseAlgorithm
    * S3SseKmsKeyId
    * StartTime
    * TableArn
    * TableId

### DescribeGlobalTableInput
* DescribeGlobalTableInput `object`
  * GlobalTableName **required**

### DescribeGlobalTableOutput
* DescribeGlobalTableOutput `object`
  * GlobalTableDescription
    * CreationDateTime
    * GlobalTableArn
    * GlobalTableName
    * GlobalTableStatus
    * ReplicationGroup
      * items [ReplicaDescription](#replicadescription)

### DescribeGlobalTableSettingsInput
* DescribeGlobalTableSettingsInput `object`
  * GlobalTableName **required**

### DescribeGlobalTableSettingsOutput
* DescribeGlobalTableSettingsOutput `object`
  * GlobalTableName
  * ReplicaSettings
    * items [ReplicaSettingsDescription](#replicasettingsdescription)

### DescribeKinesisStreamingDestinationInput
* DescribeKinesisStreamingDestinationInput `object`
  * TableName **required**

### DescribeKinesisStreamingDestinationOutput
* DescribeKinesisStreamingDestinationOutput `object`
  * KinesisDataStreamDestinations
    * items [KinesisDataStreamDestination](#kinesisdatastreamdestination)
  * TableName

### DescribeLimitsInput
* DescribeLimitsInput `object`: Represents the input of a <code>DescribeLimits</code> operation. Has no content.

### DescribeLimitsOutput
* DescribeLimitsOutput `object`: Represents the output of a <code>DescribeLimits</code> operation.
  * AccountMaxReadCapacityUnits
  * AccountMaxWriteCapacityUnits
  * TableMaxReadCapacityUnits
  * TableMaxWriteCapacityUnits

### DescribeTableInput
* DescribeTableInput `object`: Represents the input of a <code>DescribeTable</code> operation.
  * TableName **required**

### DescribeTableOutput
* DescribeTableOutput `object`: Represents the output of a <code>DescribeTable</code> operation.
  * Table
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### DescribeTableReplicaAutoScalingInput
* DescribeTableReplicaAutoScalingInput `object`
  * TableName **required**

### DescribeTableReplicaAutoScalingOutput
* DescribeTableReplicaAutoScalingOutput `object`
  * TableAutoScalingDescription
    * Replicas
      * items [ReplicaAutoScalingDescription](#replicaautoscalingdescription)
    * TableName
    * TableStatus

### DescribeTimeToLiveInput
* DescribeTimeToLiveInput `object`
  * TableName **required**

### DescribeTimeToLiveOutput
* DescribeTimeToLiveOutput `object`
  * TimeToLiveDescription
    * AttributeName
    * TimeToLiveStatus

### DestinationStatus
* DestinationStatus `string` (values: ENABLING, ACTIVE, DISABLING, DISABLED, ENABLE_FAILED)

### Double
* Double `number`

### DuplicateItemException


### Endpoint
* Endpoint `object`: An endpoint information details.
  * Address **required**
  * CachePeriodInMinutes **required**

### Endpoints
* Endpoints `array`
  * items [Endpoint](#endpoint)

### ExceptionDescription
* ExceptionDescription `string`

### ExceptionName
* ExceptionName `string`

### ExecuteStatementInput
* ExecuteStatementInput `object`
  * ConsistentRead
  * NextToken
  * Parameters
    * items [AttributeValue](#attributevalue)
  * Statement **required**

### ExecuteStatementOutput
* ExecuteStatementOutput `object`
  * Items
    * items [AttributeMap](#attributemap)
  * NextToken

### ExecuteTransactionInput
* ExecuteTransactionInput `object`
  * ClientRequestToken
  * TransactStatements **required**
    * items [ParameterizedStatement](#parameterizedstatement)

### ExecuteTransactionOutput
* ExecuteTransactionOutput `object`
  * Responses
    * items [ItemResponse](#itemresponse)

### ExpectedAttributeMap
* ExpectedAttributeMap `object`

### ExpectedAttributeValue
* ExpectedAttributeValue `object`: <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>
  * AttributeValueList
    * items [AttributeValue](#attributevalue)
  * ComparisonOperator
  * Exists
  * Value
    * B
    * BOOL
    * BS
      * items [BinaryAttributeValue](#binaryattributevalue)
    * L
      * items [AttributeValue](#attributevalue)
    * M
    * N
    * NS
      * items [NumberAttributeValue](#numberattributevalue)
    * NULL
    * S
    * SS
      * items [StringAttributeValue](#stringattributevalue)

### ExportArn
* ExportArn `string`

### ExportConflictException


### ExportDescription
* ExportDescription `object`: Represents the properties of the exported table.
  * BilledSizeBytes
  * ClientToken
  * EndTime
  * ExportArn
  * ExportFormat
  * ExportManifest
  * ExportStatus
  * ExportTime
  * FailureCode
  * FailureMessage
  * ItemCount
  * S3Bucket
  * S3BucketOwner
  * S3Prefix
  * S3SseAlgorithm
  * S3SseKmsKeyId
  * StartTime
  * TableArn
  * TableId

### ExportEndTime
* ExportEndTime `string`

### ExportFormat
* ExportFormat `string` (values: DYNAMODB_JSON, ION)

### ExportManifest
* ExportManifest `string`

### ExportNextToken
* ExportNextToken `string`

### ExportNotFoundException


### ExportStartTime
* ExportStartTime `string`

### ExportStatus
* ExportStatus `string` (values: IN_PROGRESS, COMPLETED, FAILED)

### ExportSummaries
* ExportSummaries `array`
  * items [ExportSummary](#exportsummary)

### ExportSummary
* ExportSummary `object`: Summary information about an export task.
  * ExportArn
  * ExportStatus

### ExportTableToPointInTimeInput
* ExportTableToPointInTimeInput `object`
  * ClientToken
  * ExportFormat
  * ExportTime
  * S3Bucket **required**
  * S3BucketOwner
  * S3Prefix
  * S3SseAlgorithm
  * S3SseKmsKeyId
  * TableArn **required**

### ExportTableToPointInTimeOutput
* ExportTableToPointInTimeOutput `object`
  * ExportDescription
    * BilledSizeBytes
    * ClientToken
    * EndTime
    * ExportArn
    * ExportFormat
    * ExportManifest
    * ExportStatus
    * ExportTime
    * FailureCode
    * FailureMessage
    * ItemCount
    * S3Bucket
    * S3BucketOwner
    * S3Prefix
    * S3SseAlgorithm
    * S3SseKmsKeyId
    * StartTime
    * TableArn
    * TableId

### ExportTime
* ExportTime `string`

### ExpressionAttributeNameMap
* ExpressionAttributeNameMap `object`

### ExpressionAttributeNameVariable
* ExpressionAttributeNameVariable `string`

### ExpressionAttributeValueMap
* ExpressionAttributeValueMap `object`

### ExpressionAttributeValueVariable
* ExpressionAttributeValueVariable `string`

### FailureCode
* FailureCode `string`

### FailureException
* FailureException `object`: Represents a failure a contributor insights operation.
  * ExceptionDescription
  * ExceptionName

### FailureMessage
* FailureMessage `string`

### FilterConditionMap
* FilterConditionMap `object`

### Get
* Get `object`: Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
  * ExpressionAttributeNames
  * Key **required**
  * ProjectionExpression
  * TableName **required**

### GetItemInput
* GetItemInput `object`: Represents the input of a <code>GetItem</code> operation.
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConsistentRead
  * ExpressionAttributeNames
  * Key **required**
  * ProjectionExpression
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * TableName **required**

### GetItemOutput
* GetItemOutput `object`: Represents the output of a <code>GetItem</code> operation.
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * Item

### GlobalSecondaryIndex
* GlobalSecondaryIndex `object`: Represents the properties of a global secondary index.
  * IndexName **required**
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * Projection **required**
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**

### GlobalSecondaryIndexAutoScalingUpdate
* GlobalSecondaryIndexAutoScalingUpdate `object`: Represents the auto scaling settings of a global secondary index for a global table that will be modified.
  * IndexName
  * ProvisionedWriteCapacityAutoScalingUpdate [AutoScalingSettingsUpdate](#autoscalingsettingsupdate)

### GlobalSecondaryIndexAutoScalingUpdateList
* GlobalSecondaryIndexAutoScalingUpdateList `array`
  * items [GlobalSecondaryIndexAutoScalingUpdate](#globalsecondaryindexautoscalingupdate)

### GlobalSecondaryIndexDescription
* GlobalSecondaryIndexDescription `object`: Represents the properties of a global secondary index.
  * Backfilling
  * IndexArn
  * IndexName
  * IndexSizeBytes
  * IndexStatus
  * ItemCount
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * Projection
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType
  * ProvisionedThroughput
    * LastDecreaseDateTime
    * LastIncreaseDateTime
    * NumberOfDecreasesToday
    * ReadCapacityUnits
    * WriteCapacityUnits

### GlobalSecondaryIndexDescriptionList
* GlobalSecondaryIndexDescriptionList `array`
  * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)

### GlobalSecondaryIndexInfo
* GlobalSecondaryIndexInfo `object`: Represents the properties of a global secondary index for the table when the backup was created.
  * IndexName
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * Projection
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**

### GlobalSecondaryIndexList
* GlobalSecondaryIndexList `array`
  * items [GlobalSecondaryIndex](#globalsecondaryindex)

### GlobalSecondaryIndexUpdate
* GlobalSecondaryIndexUpdate `object`: <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
  * Create
    * IndexName **required**
    * KeySchema **required**
      * items [KeySchemaElement](#keyschemaelement)
    * Projection **required**
      * NonKeyAttributes
        * items [NonKeyAttributeName](#nonkeyattributename)
      * ProjectionType
    * ProvisionedThroughput
      * ReadCapacityUnits **required**
      * WriteCapacityUnits **required**
  * Delete
    * IndexName **required**
  * Update
    * IndexName **required**
    * ProvisionedThroughput **required**
      * ReadCapacityUnits **required**
      * WriteCapacityUnits **required**

### GlobalSecondaryIndexUpdateList
* GlobalSecondaryIndexUpdateList `array`
  * items [GlobalSecondaryIndexUpdate](#globalsecondaryindexupdate)

### GlobalSecondaryIndexes
* GlobalSecondaryIndexes `array`
  * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)

### GlobalTable
* GlobalTable `object`: Represents the properties of a global table.
  * GlobalTableName
  * ReplicationGroup
    * items [Replica](#replica)

### GlobalTableAlreadyExistsException


### GlobalTableArnString
* GlobalTableArnString `string`

### GlobalTableDescription
* GlobalTableDescription `object`: Contains details about the global table.
  * CreationDateTime
  * GlobalTableArn
  * GlobalTableName
  * GlobalTableStatus
  * ReplicationGroup
    * items [ReplicaDescription](#replicadescription)

### GlobalTableGlobalSecondaryIndexSettingsUpdate
* GlobalTableGlobalSecondaryIndexSettingsUpdate `object`: Represents the settings of a global secondary index for a global table that will be modified.
  * IndexName **required**
  * ProvisionedWriteCapacityAutoScalingSettingsUpdate
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicyUpdate
      * PolicyName
      * TargetTrackingScalingPolicyConfiguration **required**
        * DisableScaleIn
        * ScaleInCooldown
        * ScaleOutCooldown
        * TargetValue **required**
  * ProvisionedWriteCapacityUnits

### GlobalTableGlobalSecondaryIndexSettingsUpdateList
* GlobalTableGlobalSecondaryIndexSettingsUpdateList `array`
  * items [GlobalTableGlobalSecondaryIndexSettingsUpdate](#globaltableglobalsecondaryindexsettingsupdate)

### GlobalTableList
* GlobalTableList `array`
  * items [GlobalTable](#globaltable)

### GlobalTableNotFoundException


### GlobalTableStatus
* GlobalTableStatus `string` (values: CREATING, ACTIVE, DELETING, UPDATING)

### IdempotentParameterMismatchException


### IndexName
* IndexName `string`

### IndexNotFoundException


### IndexStatus
* IndexStatus `string` (values: CREATING, UPDATING, DELETING, ACTIVE)

### Integer
* Integer `integer`

### IntegerObject
* IntegerObject `integer`

### InternalServerError


### InvalidExportTimeException


### InvalidRestoreTimeException


### ItemCollectionKeyAttributeMap
* ItemCollectionKeyAttributeMap `object`

### ItemCollectionMetrics
* ItemCollectionMetrics `object`: Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
  * ItemCollectionKey
  * SizeEstimateRangeGB
    * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### ItemCollectionMetricsMultiple
* ItemCollectionMetricsMultiple `array`
  * items [ItemCollectionMetrics](#itemcollectionmetrics)

### ItemCollectionMetricsPerTable
* ItemCollectionMetricsPerTable `object`

### ItemCollectionSizeEstimateBound
* ItemCollectionSizeEstimateBound `number`

### ItemCollectionSizeEstimateRange
* ItemCollectionSizeEstimateRange `array`
  * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### ItemCollectionSizeLimitExceededException


### ItemCount
* ItemCount `integer`

### ItemList
* ItemList `array`
  * items [AttributeMap](#attributemap)

### ItemResponse
* ItemResponse `object`: Details for the requested item.
  * Item

### ItemResponseList
* ItemResponseList `array`
  * items [ItemResponse](#itemresponse)

### KMSMasterKeyArn
* KMSMasterKeyArn `string`

### KMSMasterKeyId
* KMSMasterKeyId `string`

### Key
* Key `object`

### KeyConditions
* KeyConditions `object`

### KeyExpression
* KeyExpression `string`

### KeyList
* KeyList `array`
  * items [Key](#key)

### KeySchema
* KeySchema `array`
  * items [KeySchemaElement](#keyschemaelement)

### KeySchemaAttributeName
* KeySchemaAttributeName `string`

### KeySchemaElement
* KeySchemaElement `object`: <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p>
  * AttributeName **required**
  * KeyType **required**

### KeyType
* KeyType `string` (values: HASH, RANGE)

### KeysAndAttributes
* KeysAndAttributes `object`: <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConsistentRead
  * ExpressionAttributeNames
  * Keys **required**
    * items [Key](#key)
  * ProjectionExpression

### KinesisDataStreamDestination
* KinesisDataStreamDestination `object`: Describes a Kinesis data stream destination.
  * DestinationStatus
  * DestinationStatusDescription
  * StreamArn

### KinesisDataStreamDestinations
* KinesisDataStreamDestinations `array`
  * items [KinesisDataStreamDestination](#kinesisdatastreamdestination)

### KinesisStreamingDestinationInput
* KinesisStreamingDestinationInput `object`
  * StreamArn **required**
  * TableName **required**

### KinesisStreamingDestinationOutput
* KinesisStreamingDestinationOutput `object`
  * DestinationStatus
  * StreamArn
  * TableName

### LastUpdateDateTime
* LastUpdateDateTime `string`

### LimitExceededException


### ListAttributeValue
* ListAttributeValue `array`
  * items [AttributeValue](#attributevalue)

### ListBackupsInput
* ListBackupsInput `object`
  * BackupType
  * ExclusiveStartBackupArn
  * Limit
  * TableName
  * TimeRangeLowerBound
  * TimeRangeUpperBound

### ListBackupsOutput
* ListBackupsOutput `object`
  * BackupSummaries
    * items [BackupSummary](#backupsummary)
  * LastEvaluatedBackupArn

### ListContributorInsightsInput
* ListContributorInsightsInput `object`
  * MaxResults
  * NextToken
  * TableName

### ListContributorInsightsLimit
* ListContributorInsightsLimit `integer`

### ListContributorInsightsOutput
* ListContributorInsightsOutput `object`
  * ContributorInsightsSummaries
    * items [ContributorInsightsSummary](#contributorinsightssummary)
  * NextToken

### ListExportsInput
* ListExportsInput `object`
  * MaxResults
  * NextToken
  * TableArn

### ListExportsMaxLimit
* ListExportsMaxLimit `integer`

### ListExportsOutput
* ListExportsOutput `object`
  * ExportSummaries
    * items [ExportSummary](#exportsummary)
  * NextToken

### ListGlobalTablesInput
* ListGlobalTablesInput `object`
  * ExclusiveStartGlobalTableName
  * Limit
  * RegionName

### ListGlobalTablesOutput
* ListGlobalTablesOutput `object`
  * GlobalTables
    * items [GlobalTable](#globaltable)
  * LastEvaluatedGlobalTableName

### ListTablesInput
* ListTablesInput `object`: Represents the input of a <code>ListTables</code> operation.
  * ExclusiveStartTableName
  * Limit

### ListTablesInputLimit
* ListTablesInputLimit `integer`

### ListTablesOutput
* ListTablesOutput `object`: Represents the output of a <code>ListTables</code> operation.
  * LastEvaluatedTableName
  * TableNames
    * items [TableName](#tablename)

### ListTagsOfResourceInput
* ListTagsOfResourceInput `object`
  * NextToken
  * ResourceArn **required**

### ListTagsOfResourceOutput
* ListTagsOfResourceOutput `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### LocalSecondaryIndex
* LocalSecondaryIndex `object`: Represents the properties of a local secondary index.
  * IndexName **required**
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * Projection **required**
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType

### LocalSecondaryIndexDescription
* LocalSecondaryIndexDescription `object`: Represents the properties of a local secondary index.
  * IndexArn
  * IndexName
  * IndexSizeBytes
  * ItemCount
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * Projection
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType

### LocalSecondaryIndexDescriptionList
* LocalSecondaryIndexDescriptionList `array`
  * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)

### LocalSecondaryIndexInfo
* LocalSecondaryIndexInfo `object`: Represents the properties of a local secondary index for the table when the backup was created.
  * IndexName
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * Projection
    * NonKeyAttributes
      * items [NonKeyAttributeName](#nonkeyattributename)
    * ProjectionType

### LocalSecondaryIndexList
* LocalSecondaryIndexList `array`
  * items [LocalSecondaryIndex](#localsecondaryindex)

### LocalSecondaryIndexes
* LocalSecondaryIndexes `array`
  * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)

### Long
* Long `integer`

### MapAttributeValue
* MapAttributeValue `object`

### NextTokenString
* NextTokenString `string`

### NonKeyAttributeName
* NonKeyAttributeName `string`

### NonKeyAttributeNameList
* NonKeyAttributeNameList `array`
  * items [NonKeyAttributeName](#nonkeyattributename)

### NonNegativeLongObject
* NonNegativeLongObject `integer`

### NullAttributeValue
* NullAttributeValue `boolean`

### NumberAttributeValue
* NumberAttributeValue `string`

### NumberSetAttributeValue
* NumberSetAttributeValue `array`
  * items [NumberAttributeValue](#numberattributevalue)

### ParameterizedStatement
* ParameterizedStatement `object`:  Represents a PartiQL statment that uses parameters. 
  * Parameters
    * items [AttributeValue](#attributevalue)
  * Statement **required**

### ParameterizedStatements
* ParameterizedStatements `array`
  * items [ParameterizedStatement](#parameterizedstatement)

### PartiQLBatchRequest
* PartiQLBatchRequest `array`
  * items [BatchStatementRequest](#batchstatementrequest)

### PartiQLBatchResponse
* PartiQLBatchResponse `array`
  * items [BatchStatementResponse](#batchstatementresponse)

### PartiQLNextToken
* PartiQLNextToken `string`

### PartiQLStatement
* PartiQLStatement `string`

### PointInTimeRecoveryDescription
* PointInTimeRecoveryDescription `object`: The description of the point in time settings applied to the table.
  * EarliestRestorableDateTime
  * LatestRestorableDateTime
  * PointInTimeRecoveryStatus

### PointInTimeRecoverySpecification
* PointInTimeRecoverySpecification `object`: Represents the settings used to enable point in time recovery.
  * PointInTimeRecoveryEnabled **required**

### PointInTimeRecoveryStatus
* PointInTimeRecoveryStatus `string` (values: ENABLED, DISABLED)

### PointInTimeRecoveryUnavailableException


### PositiveIntegerObject
* PositiveIntegerObject `integer`

### PositiveLongObject
* PositiveLongObject `integer`

### PreparedStatementParameters
* PreparedStatementParameters `array`
  * items [AttributeValue](#attributevalue)

### Projection
* Projection `object`: Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
  * NonKeyAttributes
    * items [NonKeyAttributeName](#nonkeyattributename)
  * ProjectionType

### ProjectionExpression
* ProjectionExpression `string`

### ProjectionType
* ProjectionType `string` (values: ALL, KEYS_ONLY, INCLUDE)

### ProvisionedThroughput
* ProvisionedThroughput `object`: <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * ReadCapacityUnits **required**
  * WriteCapacityUnits **required**

### ProvisionedThroughputDescription
* ProvisionedThroughputDescription `object`: Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
  * LastDecreaseDateTime
  * LastIncreaseDateTime
  * NumberOfDecreasesToday
  * ReadCapacityUnits
  * WriteCapacityUnits

### ProvisionedThroughputExceededException


### ProvisionedThroughputOverride
* ProvisionedThroughputOverride `object`: Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
  * ReadCapacityUnits

### Put
* Put `object`: Represents a request to perform a <code>PutItem</code> operation.
  * ConditionExpression
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Item **required**
  * ReturnValuesOnConditionCheckFailure
  * TableName **required**

### PutItemInput
* PutItemInput `object`: Represents the input of a <code>PutItem</code> operation.
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Item **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**

### PutItemInputAttributeMap
* PutItemInputAttributeMap `object`

### PutItemOutput
* PutItemOutput `object`: Represents the output of a <code>PutItem</code> operation.
  * Attributes
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * ItemCollectionMetrics
    * ItemCollectionKey
    * SizeEstimateRangeGB
      * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### PutRequest
* PutRequest `object`: Represents a request to perform a <code>PutItem</code> operation on an item.
  * Item **required**

### QueryInput
* QueryInput `object`: Represents the input of a <code>Query</code> operation.
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConditionalOperator
  * ConsistentRead
  * ExclusiveStartKey
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * FilterExpression
  * IndexName
  * KeyConditionExpression
  * KeyConditions
  * Limit
  * ProjectionExpression
  * QueryFilter
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanIndexForward
  * Select
  * TableName **required**

### QueryOutput
* QueryOutput `object`: Represents the output of a <code>Query</code> operation.
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * Count
  * Items
    * items [AttributeMap](#attributemap)
  * LastEvaluatedKey
  * ScannedCount

### RegionName
* RegionName `string`

### Replica
* Replica `object`: Represents the properties of a replica.
  * RegionName

### ReplicaAlreadyExistsException


### ReplicaAutoScalingDescription
* ReplicaAutoScalingDescription `object`: Represents the auto scaling settings of the replica.
  * GlobalSecondaryIndexes
    * items [ReplicaGlobalSecondaryIndexAutoScalingDescription](#replicaglobalsecondaryindexautoscalingdescription)
  * RegionName
  * ReplicaProvisionedReadCapacityAutoScalingSettings [AutoScalingSettingsDescription](#autoscalingsettingsdescription)
  * ReplicaProvisionedWriteCapacityAutoScalingSettings [AutoScalingSettingsDescription](#autoscalingsettingsdescription)
  * ReplicaStatus

### ReplicaAutoScalingDescriptionList
* ReplicaAutoScalingDescriptionList `array`
  * items [ReplicaAutoScalingDescription](#replicaautoscalingdescription)

### ReplicaAutoScalingUpdate
* ReplicaAutoScalingUpdate `object`: Represents the auto scaling settings of a replica that will be modified.
  * RegionName **required**
  * ReplicaGlobalSecondaryIndexUpdates
    * items [ReplicaGlobalSecondaryIndexAutoScalingUpdate](#replicaglobalsecondaryindexautoscalingupdate)
  * ReplicaProvisionedReadCapacityAutoScalingUpdate [AutoScalingSettingsUpdate](#autoscalingsettingsupdate)

### ReplicaAutoScalingUpdateList
* ReplicaAutoScalingUpdateList `array`
  * items [ReplicaAutoScalingUpdate](#replicaautoscalingupdate)

### ReplicaDescription
* ReplicaDescription `object`: Contains the details of the replica.
  * GlobalSecondaryIndexes
    * items [ReplicaGlobalSecondaryIndexDescription](#replicaglobalsecondaryindexdescription)
  * KMSMasterKeyId
  * ProvisionedThroughputOverride
    * ReadCapacityUnits
  * RegionName
  * ReplicaInaccessibleDateTime
  * ReplicaStatus
  * ReplicaStatusDescription
  * ReplicaStatusPercentProgress

### ReplicaDescriptionList
* ReplicaDescriptionList `array`
  * items [ReplicaDescription](#replicadescription)

### ReplicaGlobalSecondaryIndex
* ReplicaGlobalSecondaryIndex `object`: Represents the properties of a replica global secondary index.
  * IndexName **required**
  * ProvisionedThroughputOverride
    * ReadCapacityUnits

### ReplicaGlobalSecondaryIndexAutoScalingDescription
* ReplicaGlobalSecondaryIndexAutoScalingDescription `object`: Represents the auto scaling configuration for a replica global secondary index.
  * IndexName
  * IndexStatus
  * ProvisionedReadCapacityAutoScalingSettings [AutoScalingSettingsDescription](#autoscalingsettingsdescription)
  * ProvisionedWriteCapacityAutoScalingSettings [AutoScalingSettingsDescription](#autoscalingsettingsdescription)

### ReplicaGlobalSecondaryIndexAutoScalingDescriptionList
* ReplicaGlobalSecondaryIndexAutoScalingDescriptionList `array`
  * items [ReplicaGlobalSecondaryIndexAutoScalingDescription](#replicaglobalsecondaryindexautoscalingdescription)

### ReplicaGlobalSecondaryIndexAutoScalingUpdate
* ReplicaGlobalSecondaryIndexAutoScalingUpdate `object`: Represents the auto scaling settings of a global secondary index for a replica that will be modified.
  * IndexName
  * ProvisionedReadCapacityAutoScalingUpdate [AutoScalingSettingsUpdate](#autoscalingsettingsupdate)

### ReplicaGlobalSecondaryIndexAutoScalingUpdateList
* ReplicaGlobalSecondaryIndexAutoScalingUpdateList `array`
  * items [ReplicaGlobalSecondaryIndexAutoScalingUpdate](#replicaglobalsecondaryindexautoscalingupdate)

### ReplicaGlobalSecondaryIndexDescription
* ReplicaGlobalSecondaryIndexDescription `object`: Represents the properties of a replica global secondary index.
  * IndexName
  * ProvisionedThroughputOverride
    * ReadCapacityUnits

### ReplicaGlobalSecondaryIndexDescriptionList
* ReplicaGlobalSecondaryIndexDescriptionList `array`
  * items [ReplicaGlobalSecondaryIndexDescription](#replicaglobalsecondaryindexdescription)

### ReplicaGlobalSecondaryIndexList
* ReplicaGlobalSecondaryIndexList `array`
  * items [ReplicaGlobalSecondaryIndex](#replicaglobalsecondaryindex)

### ReplicaGlobalSecondaryIndexSettingsDescription
* ReplicaGlobalSecondaryIndexSettingsDescription `object`: Represents the properties of a global secondary index.
  * IndexName **required**
  * IndexStatus
  * ProvisionedReadCapacityAutoScalingSettings
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicies
      * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * ProvisionedReadCapacityUnits
  * ProvisionedWriteCapacityAutoScalingSettings
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicies
      * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * ProvisionedWriteCapacityUnits

### ReplicaGlobalSecondaryIndexSettingsDescriptionList
* ReplicaGlobalSecondaryIndexSettingsDescriptionList `array`
  * items [ReplicaGlobalSecondaryIndexSettingsDescription](#replicaglobalsecondaryindexsettingsdescription)

### ReplicaGlobalSecondaryIndexSettingsUpdate
* ReplicaGlobalSecondaryIndexSettingsUpdate `object`: Represents the settings of a global secondary index for a global table that will be modified.
  * IndexName **required**
  * ProvisionedReadCapacityAutoScalingSettingsUpdate
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicyUpdate
      * PolicyName
      * TargetTrackingScalingPolicyConfiguration **required**
        * DisableScaleIn
        * ScaleInCooldown
        * ScaleOutCooldown
        * TargetValue **required**
  * ProvisionedReadCapacityUnits

### ReplicaGlobalSecondaryIndexSettingsUpdateList
* ReplicaGlobalSecondaryIndexSettingsUpdateList `array`
  * items [ReplicaGlobalSecondaryIndexSettingsUpdate](#replicaglobalsecondaryindexsettingsupdate)

### ReplicaList
* ReplicaList `array`
  * items [Replica](#replica)

### ReplicaNotFoundException


### ReplicaSettingsDescription
* ReplicaSettingsDescription `object`: Represents the properties of a replica.
  * RegionName **required**
  * ReplicaBillingModeSummary
    * BillingMode
    * LastUpdateToPayPerRequestDateTime
  * ReplicaGlobalSecondaryIndexSettings
    * items [ReplicaGlobalSecondaryIndexSettingsDescription](#replicaglobalsecondaryindexsettingsdescription)
  * ReplicaProvisionedReadCapacityAutoScalingSettings
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicies
      * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * ReplicaProvisionedReadCapacityUnits
  * ReplicaProvisionedWriteCapacityAutoScalingSettings
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicies
      * items [AutoScalingPolicyDescription](#autoscalingpolicydescription)
  * ReplicaProvisionedWriteCapacityUnits
  * ReplicaStatus

### ReplicaSettingsDescriptionList
* ReplicaSettingsDescriptionList `array`
  * items [ReplicaSettingsDescription](#replicasettingsdescription)

### ReplicaSettingsUpdate
* ReplicaSettingsUpdate `object`: Represents the settings for a global table in a Region that will be modified.
  * RegionName **required**
  * ReplicaGlobalSecondaryIndexSettingsUpdate
    * items [ReplicaGlobalSecondaryIndexSettingsUpdate](#replicaglobalsecondaryindexsettingsupdate)
  * ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicyUpdate
      * PolicyName
      * TargetTrackingScalingPolicyConfiguration **required**
        * DisableScaleIn
        * ScaleInCooldown
        * ScaleOutCooldown
        * TargetValue **required**
  * ReplicaProvisionedReadCapacityUnits

### ReplicaSettingsUpdateList
* ReplicaSettingsUpdateList `array`
  * items [ReplicaSettingsUpdate](#replicasettingsupdate)

### ReplicaStatus
* ReplicaStatus `string` (values: CREATING, CREATION_FAILED, UPDATING, DELETING, ACTIVE, REGION_DISABLED, INACCESSIBLE_ENCRYPTION_CREDENTIALS)

### ReplicaStatusDescription
* ReplicaStatusDescription `string`

### ReplicaStatusPercentProgress
* ReplicaStatusPercentProgress `string`

### ReplicaUpdate
* ReplicaUpdate `object`: <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
  * Create
    * RegionName **required**
  * Delete
    * RegionName **required**

### ReplicaUpdateList
* ReplicaUpdateList `array`
  * items [ReplicaUpdate](#replicaupdate)

### ReplicationGroupUpdate
* ReplicationGroupUpdate `object`: <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul>
  * Create
    * GlobalSecondaryIndexes
      * items [ReplicaGlobalSecondaryIndex](#replicaglobalsecondaryindex)
    * KMSMasterKeyId
    * ProvisionedThroughputOverride
      * ReadCapacityUnits
    * RegionName **required**
  * Delete
    * RegionName **required**
  * Update
    * GlobalSecondaryIndexes
      * items [ReplicaGlobalSecondaryIndex](#replicaglobalsecondaryindex)
    * KMSMasterKeyId
    * ProvisionedThroughputOverride
      * ReadCapacityUnits
    * RegionName **required**

### ReplicationGroupUpdateList
* ReplicationGroupUpdateList `array`
  * items [ReplicationGroupUpdate](#replicationgroupupdate)

### RequestLimitExceeded


### ResourceArnString
* ResourceArnString `string`

### ResourceInUseException


### ResourceNotFoundException


### RestoreInProgress
* RestoreInProgress `boolean`

### RestoreSummary
* RestoreSummary `object`: Contains details for the restore.
  * RestoreDateTime **required**
  * RestoreInProgress **required**
  * SourceBackupArn
  * SourceTableArn

### RestoreTableFromBackupInput
* RestoreTableFromBackupInput `object`
  * BackupArn **required**
  * BillingModeOverride
  * GlobalSecondaryIndexOverride
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * LocalSecondaryIndexOverride
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughputOverride
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * SSESpecificationOverride
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * TargetTableName **required**

### RestoreTableFromBackupOutput
* RestoreTableFromBackupOutput `object`
  * TableDescription
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### RestoreTableToPointInTimeInput
* RestoreTableToPointInTimeInput `object`
  * BillingModeOverride
  * GlobalSecondaryIndexOverride
    * items [GlobalSecondaryIndex](#globalsecondaryindex)
  * LocalSecondaryIndexOverride
    * items [LocalSecondaryIndex](#localsecondaryindex)
  * ProvisionedThroughputOverride
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * RestoreDateTime
  * SSESpecificationOverride
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * SourceTableArn
  * SourceTableName
  * TargetTableName **required**
  * UseLatestRestorableTime

### RestoreTableToPointInTimeOutput
* RestoreTableToPointInTimeOutput `object`
  * TableDescription
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### ReturnConsumedCapacity
* ReturnConsumedCapacity `string` (values: INDEXES, TOTAL, NONE): <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>

### ReturnItemCollectionMetrics
* ReturnItemCollectionMetrics `string` (values: SIZE, NONE)

### ReturnValue
* ReturnValue `string` (values: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW)

### ReturnValuesOnConditionCheckFailure
* ReturnValuesOnConditionCheckFailure `string` (values: ALL_OLD, NONE)

### S3Bucket
* S3Bucket `string`

### S3BucketOwner
* S3BucketOwner `string`

### S3Prefix
* S3Prefix `string`

### S3SseAlgorithm
* S3SseAlgorithm `string` (values: AES256, KMS)

### S3SseKmsKeyId
* S3SseKmsKeyId `string`

### SSEDescription
* SSEDescription `object`: The description of the server-side encryption status on the specified table.
  * InaccessibleEncryptionDateTime
  * KMSMasterKeyArn
  * SSEType
  * Status

### SSEEnabled
* SSEEnabled `boolean`

### SSESpecification
* SSESpecification `object`: Represents the settings used to enable server-side encryption.
  * Enabled
  * KMSMasterKeyId
  * SSEType

### SSEStatus
* SSEStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED, UPDATING)

### SSEType
* SSEType `string` (values: AES256, KMS)

### ScalarAttributeType
* ScalarAttributeType `string` (values: S, N, B)

### ScanInput
* ScanInput `object`: Represents the input of a <code>Scan</code> operation.
  * AttributesToGet
    * items [AttributeName](#attributename)
  * ConditionalOperator
  * ConsistentRead
  * ExclusiveStartKey
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * FilterExpression
  * IndexName
  * Limit
  * ProjectionExpression
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanFilter
  * Segment
  * Select
  * TableName **required**
  * TotalSegments

### ScanOutput
* ScanOutput `object`: Represents the output of a <code>Scan</code> operation.
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * Count
  * Items
    * items [AttributeMap](#attributemap)
  * LastEvaluatedKey
  * ScannedCount

### ScanSegment
* ScanSegment `integer`

### ScanTotalSegments
* ScanTotalSegments `integer`

### SecondaryIndexesCapacityMap
* SecondaryIndexesCapacityMap `object`

### Select
* Select `string` (values: ALL_ATTRIBUTES, ALL_PROJECTED_ATTRIBUTES, SPECIFIC_ATTRIBUTES, COUNT)

### SourceTableDetails
* SourceTableDetails `object`: Contains the details of the table when the backup was created. 
  * BillingMode
  * ItemCount
  * KeySchema **required**
    * items [KeySchemaElement](#keyschemaelement)
  * ProvisionedThroughput **required**
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * TableArn
  * TableCreationDateTime **required**
  * TableId **required**
  * TableName **required**
  * TableSizeBytes

### SourceTableFeatureDetails
* SourceTableFeatureDetails `object`: Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. 
  * GlobalSecondaryIndexes
    * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)
  * LocalSecondaryIndexes
    * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)
  * SSEDescription
    * InaccessibleEncryptionDateTime
    * KMSMasterKeyArn
    * SSEType
    * Status
  * StreamDescription
    * StreamEnabled **required**
    * StreamViewType
  * TimeToLiveDescription
    * AttributeName
    * TimeToLiveStatus

### StreamArn
* StreamArn `string`

### StreamEnabled
* StreamEnabled `boolean`

### StreamSpecification
* StreamSpecification `object`: Represents the DynamoDB Streams configuration for a table in DynamoDB.
  * StreamEnabled **required**
  * StreamViewType

### StreamViewType
* StreamViewType `string` (values: NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES, KEYS_ONLY)

### String
* String `string`

### StringAttributeValue
* StringAttributeValue `string`

### StringSetAttributeValue
* StringSetAttributeValue `array`
  * items [StringAttributeValue](#stringattributevalue)

### TableAlreadyExistsException


### TableArn
* TableArn `string`

### TableAutoScalingDescription
* TableAutoScalingDescription `object`: Represents the auto scaling configuration for a global table.
  * Replicas
    * items [ReplicaAutoScalingDescription](#replicaautoscalingdescription)
  * TableName
  * TableStatus

### TableCreationDateTime
* TableCreationDateTime `string`

### TableDescription
* TableDescription `object`: Represents the properties of a table.
  * ArchivalSummary
    * ArchivalBackupArn
    * ArchivalDateTime
    * ArchivalReason
  * AttributeDefinitions
    * items [AttributeDefinition](#attributedefinition)
  * BillingModeSummary
    * BillingMode
    * LastUpdateToPayPerRequestDateTime
  * CreationDateTime
  * GlobalSecondaryIndexes
    * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
  * GlobalTableVersion
  * ItemCount
  * KeySchema
    * items [KeySchemaElement](#keyschemaelement)
  * LatestStreamArn
  * LatestStreamLabel
  * LocalSecondaryIndexes
    * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
  * ProvisionedThroughput
    * LastDecreaseDateTime
    * LastIncreaseDateTime
    * NumberOfDecreasesToday
    * ReadCapacityUnits
    * WriteCapacityUnits
  * Replicas
    * items [ReplicaDescription](#replicadescription)
  * RestoreSummary
    * RestoreDateTime **required**
    * RestoreInProgress **required**
    * SourceBackupArn
    * SourceTableArn
  * SSEDescription
    * InaccessibleEncryptionDateTime
    * KMSMasterKeyArn
    * SSEType
    * Status
  * StreamSpecification
    * StreamEnabled **required**
    * StreamViewType
  * TableArn
  * TableId
  * TableName
  * TableSizeBytes
  * TableStatus

### TableId
* TableId `string`

### TableInUseException


### TableName
* TableName `string`

### TableNameList
* TableNameList `array`
  * items [TableName](#tablename)

### TableNotFoundException


### TableStatus
* TableStatus `string` (values: CREATING, UPDATING, DELETING, ACTIVE, INACCESSIBLE_ENCRYPTION_CREDENTIALS, ARCHIVING, ARCHIVED)

### Tag
* Tag `object`: <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p> AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * Key **required**
  * Value **required**

### TagKeyList
* TagKeyList `array`
  * items [TagKeyString](#tagkeystring)

### TagKeyString
* TagKeyString `string`

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValueString
* TagValueString `string`

### TimeRangeLowerBound
* TimeRangeLowerBound `string`

### TimeRangeUpperBound
* TimeRangeUpperBound `string`

### TimeToLiveAttributeName
* TimeToLiveAttributeName `string`

### TimeToLiveDescription
* TimeToLiveDescription `object`: The description of the Time to Live (TTL) status on the specified table. 
  * AttributeName
  * TimeToLiveStatus

### TimeToLiveEnabled
* TimeToLiveEnabled `boolean`

### TimeToLiveSpecification
* TimeToLiveSpecification `object`: Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
  * AttributeName **required**
  * Enabled **required**

### TimeToLiveStatus
* TimeToLiveStatus `string` (values: ENABLING, DISABLING, ENABLED, DISABLED)

### TransactGetItem
* TransactGetItem `object`: Specifies an item to be retrieved as part of the transaction.
  * Get **required**
    * ExpressionAttributeNames
    * Key **required**
    * ProjectionExpression
    * TableName **required**

### TransactGetItemList
* TransactGetItemList `array`
  * items [TransactGetItem](#transactgetitem)

### TransactGetItemsInput
* TransactGetItemsInput `object`
  * ReturnConsumedCapacity
  * TransactItems **required**
    * items [TransactGetItem](#transactgetitem)

### TransactGetItemsOutput
* TransactGetItemsOutput `object`
  * ConsumedCapacity
    * items [ConsumedCapacity](#consumedcapacity)
  * Responses
    * items [ItemResponse](#itemresponse)

### TransactWriteItem
* TransactWriteItem `object`: A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
  * ConditionCheck
    * ConditionExpression **required**
    * ExpressionAttributeNames
    * ExpressionAttributeValues
    * Key **required**
    * ReturnValuesOnConditionCheckFailure
    * TableName **required**
  * Delete
    * ConditionExpression
    * ExpressionAttributeNames
    * ExpressionAttributeValues
    * Key **required**
    * ReturnValuesOnConditionCheckFailure
    * TableName **required**
  * Put
    * ConditionExpression
    * ExpressionAttributeNames
    * ExpressionAttributeValues
    * Item **required**
    * ReturnValuesOnConditionCheckFailure
    * TableName **required**
  * Update
    * ConditionExpression
    * ExpressionAttributeNames
    * ExpressionAttributeValues
    * Key **required**
    * ReturnValuesOnConditionCheckFailure
    * TableName **required**
    * UpdateExpression **required**

### TransactWriteItemList
* TransactWriteItemList `array`
  * items [TransactWriteItem](#transactwriteitem)

### TransactWriteItemsInput
* TransactWriteItemsInput `object`
  * ClientRequestToken
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * TransactItems **required**
    * items [TransactWriteItem](#transactwriteitem)

### TransactWriteItemsOutput
* TransactWriteItemsOutput `object`
  * ConsumedCapacity
    * items [ConsumedCapacity](#consumedcapacity)
  * ItemCollectionMetrics

### TransactionCanceledException


### TransactionConflictException


### TransactionInProgressException


### UntagResourceInput
* UntagResourceInput `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKeyString](#tagkeystring)

### Update
* Update `object`: Represents a request to perform an <code>UpdateItem</code> operation.
  * ConditionExpression
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnValuesOnConditionCheckFailure
  * TableName **required**
  * UpdateExpression **required**

### UpdateContinuousBackupsInput
* UpdateContinuousBackupsInput `object`
  * PointInTimeRecoverySpecification **required**
    * PointInTimeRecoveryEnabled **required**
  * TableName **required**

### UpdateContinuousBackupsOutput
* UpdateContinuousBackupsOutput `object`
  * ContinuousBackupsDescription
    * ContinuousBackupsStatus **required**
    * PointInTimeRecoveryDescription
      * EarliestRestorableDateTime
      * LatestRestorableDateTime
      * PointInTimeRecoveryStatus

### UpdateContributorInsightsInput
* UpdateContributorInsightsInput `object`
  * ContributorInsightsAction **required**
  * IndexName
  * TableName **required**

### UpdateContributorInsightsOutput
* UpdateContributorInsightsOutput `object`
  * ContributorInsightsStatus
  * IndexName
  * TableName

### UpdateExpression
* UpdateExpression `string`

### UpdateGlobalSecondaryIndexAction
* UpdateGlobalSecondaryIndexAction `object`: Represents the new provisioned throughput settings to be applied to a global secondary index.
  * IndexName **required**
  * ProvisionedThroughput **required**
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**

### UpdateGlobalTableInput
* UpdateGlobalTableInput `object`
  * GlobalTableName **required**
  * ReplicaUpdates **required**
    * items [ReplicaUpdate](#replicaupdate)

### UpdateGlobalTableOutput
* UpdateGlobalTableOutput `object`
  * GlobalTableDescription
    * CreationDateTime
    * GlobalTableArn
    * GlobalTableName
    * GlobalTableStatus
    * ReplicationGroup
      * items [ReplicaDescription](#replicadescription)

### UpdateGlobalTableSettingsInput
* UpdateGlobalTableSettingsInput `object`
  * GlobalTableBillingMode
  * GlobalTableGlobalSecondaryIndexSettingsUpdate
    * items [GlobalTableGlobalSecondaryIndexSettingsUpdate](#globaltableglobalsecondaryindexsettingsupdate)
  * GlobalTableName **required**
  * GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate
    * AutoScalingDisabled
    * AutoScalingRoleArn
    * MaximumUnits
    * MinimumUnits
    * ScalingPolicyUpdate
      * PolicyName
      * TargetTrackingScalingPolicyConfiguration **required**
        * DisableScaleIn
        * ScaleInCooldown
        * ScaleOutCooldown
        * TargetValue **required**
  * GlobalTableProvisionedWriteCapacityUnits
  * ReplicaSettingsUpdate
    * items [ReplicaSettingsUpdate](#replicasettingsupdate)

### UpdateGlobalTableSettingsOutput
* UpdateGlobalTableSettingsOutput `object`
  * GlobalTableName
  * ReplicaSettings
    * items [ReplicaSettingsDescription](#replicasettingsdescription)

### UpdateItemInput
* UpdateItemInput `object`: Represents the input of an <code>UpdateItem</code> operation.
  * AttributeUpdates
  * ConditionExpression
  * ConditionalOperator
  * Expected
  * ExpressionAttributeNames
  * ExpressionAttributeValues
  * Key **required**
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics
  * ReturnValues
  * TableName **required**
  * UpdateExpression

### UpdateItemOutput
* UpdateItemOutput `object`: Represents the output of an <code>UpdateItem</code> operation.
  * Attributes
  * ConsumedCapacity
    * CapacityUnits
    * GlobalSecondaryIndexes
    * LocalSecondaryIndexes
    * ReadCapacityUnits
    * Table
      * CapacityUnits
      * ReadCapacityUnits
      * WriteCapacityUnits
    * TableName
    * WriteCapacityUnits
  * ItemCollectionMetrics
    * ItemCollectionKey
    * SizeEstimateRangeGB
      * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### UpdateReplicationGroupMemberAction
* UpdateReplicationGroupMemberAction `object`: Represents a replica to be modified.
  * GlobalSecondaryIndexes
    * items [ReplicaGlobalSecondaryIndex](#replicaglobalsecondaryindex)
  * KMSMasterKeyId
  * ProvisionedThroughputOverride
    * ReadCapacityUnits
  * RegionName **required**

### UpdateTableInput
* UpdateTableInput `object`: Represents the input of an <code>UpdateTable</code> operation.
  * AttributeDefinitions
    * items [AttributeDefinition](#attributedefinition)
  * BillingMode
  * GlobalSecondaryIndexUpdates
    * items [GlobalSecondaryIndexUpdate](#globalsecondaryindexupdate)
  * ProvisionedThroughput
    * ReadCapacityUnits **required**
    * WriteCapacityUnits **required**
  * ReplicaUpdates
    * items [ReplicationGroupUpdate](#replicationgroupupdate)
  * SSESpecification
    * Enabled
    * KMSMasterKeyId
    * SSEType
  * StreamSpecification
    * StreamEnabled **required**
    * StreamViewType
  * TableName **required**

### UpdateTableOutput
* UpdateTableOutput `object`: Represents the output of an <code>UpdateTable</code> operation.
  * TableDescription
    * ArchivalSummary
      * ArchivalBackupArn
      * ArchivalDateTime
      * ArchivalReason
    * AttributeDefinitions
      * items [AttributeDefinition](#attributedefinition)
    * BillingModeSummary
      * BillingMode
      * LastUpdateToPayPerRequestDateTime
    * CreationDateTime
    * GlobalSecondaryIndexes
      * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)
    * GlobalTableVersion
    * ItemCount
    * KeySchema
      * items [KeySchemaElement](#keyschemaelement)
    * LatestStreamArn
    * LatestStreamLabel
    * LocalSecondaryIndexes
      * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)
    * ProvisionedThroughput
      * LastDecreaseDateTime
      * LastIncreaseDateTime
      * NumberOfDecreasesToday
      * ReadCapacityUnits
      * WriteCapacityUnits
    * Replicas
      * items [ReplicaDescription](#replicadescription)
    * RestoreSummary
      * RestoreDateTime **required**
      * RestoreInProgress **required**
      * SourceBackupArn
      * SourceTableArn
    * SSEDescription
      * InaccessibleEncryptionDateTime
      * KMSMasterKeyArn
      * SSEType
      * Status
    * StreamSpecification
      * StreamEnabled **required**
      * StreamViewType
    * TableArn
    * TableId
    * TableName
    * TableSizeBytes
    * TableStatus

### UpdateTableReplicaAutoScalingInput
* UpdateTableReplicaAutoScalingInput `object`
  * GlobalSecondaryIndexUpdates
    * items [GlobalSecondaryIndexAutoScalingUpdate](#globalsecondaryindexautoscalingupdate)
  * ProvisionedWriteCapacityAutoScalingUpdate [AutoScalingSettingsUpdate](#autoscalingsettingsupdate)
  * ReplicaUpdates
    * items [ReplicaAutoScalingUpdate](#replicaautoscalingupdate)
  * TableName **required**

### UpdateTableReplicaAutoScalingOutput
* UpdateTableReplicaAutoScalingOutput `object`
  * TableAutoScalingDescription
    * Replicas
      * items [ReplicaAutoScalingDescription](#replicaautoscalingdescription)
    * TableName
    * TableStatus

### UpdateTimeToLiveInput
* UpdateTimeToLiveInput `object`: Represents the input of an <code>UpdateTimeToLive</code> operation.
  * TableName **required**
  * TimeToLiveSpecification **required**
    * AttributeName **required**
    * Enabled **required**

### UpdateTimeToLiveOutput
* UpdateTimeToLiveOutput `object`
  * TimeToLiveSpecification
    * AttributeName **required**
    * Enabled **required**

### WriteRequest
* WriteRequest `object`: Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.
  * DeleteRequest
    * Key **required**
  * PutRequest
    * Item **required**

### WriteRequests
* WriteRequests `array`
  * items [WriteRequest](#writerequest)


