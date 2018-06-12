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

amazonaws_dynamodb.BatchGetItem({
  "RequestItems": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the AWS Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an AWS region, providing built-in high availability and data durability. </p>

## Actions

### BatchGetItem



```js
amazonaws_dynamodb.BatchGetItem({
  "RequestItems": []
}, context)
```

#### Input
* input `object`
  * RequestItems `string`
  * RequestItems **required** [BatchGetRequestMap](#batchgetrequestmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)

#### Output
* output [BatchGetItemOutput](#batchgetitemoutput)

### BatchWriteItem



```js
amazonaws_dynamodb.BatchWriteItem({
  "RequestItems": []
}, context)
```

#### Input
* input `object`
  * RequestItems **required** [BatchWriteItemRequestMap](#batchwriteitemrequestmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)

#### Output
* output [BatchWriteItemOutput](#batchwriteitemoutput)

### CreateBackup



```js
amazonaws_dynamodb.CreateBackup({
  "TableName": "",
  "BackupName": ""
}, context)
```

#### Input
* input `object`
  * BackupName **required** [BackupName](#backupname)
  * TableName **required** [TableName](#tablename)

#### Output
* output [CreateBackupOutput](#createbackupoutput)

### CreateGlobalTable



```js
amazonaws_dynamodb.CreateGlobalTable({
  "GlobalTableName": "",
  "ReplicationGroup": []
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required** [TableName](#tablename)
  * ReplicationGroup **required** [ReplicaList](#replicalist)

#### Output
* output [CreateGlobalTableOutput](#createglobaltableoutput)

### CreateTable



```js
amazonaws_dynamodb.CreateTable({
  "AttributeDefinitions": [],
  "TableName": "",
  "KeySchema": [],
  "ProvisionedThroughput": {
    "ReadCapacityUnits": 0,
    "WriteCapacityUnits": 0
  }
}, context)
```

#### Input
* input `object`
  * AttributeDefinitions **required** [AttributeDefinitions](#attributedefinitions)
  * GlobalSecondaryIndexes [GlobalSecondaryIndexList](#globalsecondaryindexlist)
  * KeySchema **required** [KeySchema](#keyschema)
  * LocalSecondaryIndexes [LocalSecondaryIndexList](#localsecondaryindexlist)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)
  * SSESpecification [SSESpecification](#ssespecification)
  * StreamSpecification [StreamSpecification](#streamspecification)
  * TableName **required** [TableName](#tablename)

#### Output
* output [CreateTableOutput](#createtableoutput)

### DeleteBackup



```js
amazonaws_dynamodb.DeleteBackup({
  "BackupArn": ""
}, context)
```

#### Input
* input `object`
  * BackupArn **required** [BackupArn](#backuparn)

#### Output
* output [DeleteBackupOutput](#deletebackupoutput)

### DeleteItem



```js
amazonaws_dynamodb.DeleteItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Key **required** [Key](#key)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)

#### Output
* output [DeleteItemOutput](#deleteitemoutput)

### DeleteTable



```js
amazonaws_dynamodb.DeleteTable({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * TableName **required** [TableName](#tablename)

#### Output
* output [DeleteTableOutput](#deletetableoutput)

### DescribeBackup



```js
amazonaws_dynamodb.DescribeBackup({
  "BackupArn": ""
}, context)
```

#### Input
* input `object`
  * BackupArn **required** [BackupArn](#backuparn)

#### Output
* output [DescribeBackupOutput](#describebackupoutput)

### DescribeContinuousBackups



```js
amazonaws_dynamodb.DescribeContinuousBackups({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * TableName **required** [TableName](#tablename)

#### Output
* output [DescribeContinuousBackupsOutput](#describecontinuousbackupsoutput)

### DescribeGlobalTable



```js
amazonaws_dynamodb.DescribeGlobalTable({
  "GlobalTableName": ""
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required** [TableName](#tablename)

#### Output
* output [DescribeGlobalTableOutput](#describeglobaltableoutput)

### DescribeGlobalTableSettings



```js
amazonaws_dynamodb.DescribeGlobalTableSettings({
  "GlobalTableName": ""
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required** [TableName](#tablename)

#### Output
* output [DescribeGlobalTableSettingsOutput](#describeglobaltablesettingsoutput)

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
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * TableName **required** [TableName](#tablename)

#### Output
* output [DescribeTableOutput](#describetableoutput)

### DescribeTimeToLive



```js
amazonaws_dynamodb.DescribeTimeToLive({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * TableName **required** [TableName](#tablename)

#### Output
* output [DescribeTimeToLiveOutput](#describetimetoliveoutput)

### GetItem



```js
amazonaws_dynamodb.GetItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * Key **required** [Key](#key)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * TableName **required** [TableName](#tablename)

#### Output
* output [GetItemOutput](#getitemoutput)

### ListBackups



```js
amazonaws_dynamodb.ListBackups({}, context)
```

#### Input
* input `object`
  * ExclusiveStartBackupArn [BackupArn](#backuparn)
  * Limit [BackupsInputLimit](#backupsinputlimit)
  * TableName [TableName](#tablename)
  * TimeRangeLowerBound [TimeRangeLowerBound](#timerangelowerbound)
  * TimeRangeUpperBound [TimeRangeUpperBound](#timerangeupperbound)

#### Output
* output [ListBackupsOutput](#listbackupsoutput)

### ListGlobalTables



```js
amazonaws_dynamodb.ListGlobalTables({}, context)
```

#### Input
* input `object`
  * ExclusiveStartGlobalTableName [TableName](#tablename)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * RegionName [RegionName](#regionname)

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
  * ExclusiveStartTableName [TableName](#tablename)
  * Limit [ListTablesInputLimit](#listtablesinputlimit)

#### Output
* output [ListTablesOutput](#listtablesoutput)

### ListTagsOfResource



```js
amazonaws_dynamodb.ListTagsOfResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * NextToken [NextTokenString](#nexttokenstring)
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)

#### Output
* output [ListTagsOfResourceOutput](#listtagsofresourceoutput)

### PutItem



```js
amazonaws_dynamodb.PutItem({
  "TableName": "",
  "Item": []
}, context)
```

#### Input
* input `object`
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Item **required** [PutItemInputAttributeMap](#putiteminputattributemap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)

#### Output
* output [PutItemOutput](#putitemoutput)

### Query



```js
amazonaws_dynamodb.Query({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartKey `string`
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExclusiveStartKey [Key](#key)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * FilterExpression [ConditionExpression](#conditionexpression)
  * IndexName [IndexName](#indexname)
  * KeyConditionExpression [KeyExpression](#keyexpression)
  * KeyConditions [KeyConditions](#keyconditions)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * QueryFilter [FilterConditionMap](#filterconditionmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanIndexForward [BooleanObject](#booleanobject)
  * Select [Select](#select)
  * TableName **required** [TableName](#tablename)

#### Output
* output [QueryOutput](#queryoutput)

### RestoreTableFromBackup



```js
amazonaws_dynamodb.RestoreTableFromBackup({
  "TargetTableName": "",
  "BackupArn": ""
}, context)
```

#### Input
* input `object`
  * BackupArn **required** [BackupArn](#backuparn)
  * TargetTableName **required** [TableName](#tablename)

#### Output
* output [RestoreTableFromBackupOutput](#restoretablefrombackupoutput)

### RestoreTableToPointInTime



```js
amazonaws_dynamodb.RestoreTableToPointInTime({
  "SourceTableName": "",
  "TargetTableName": ""
}, context)
```

#### Input
* input `object`
  * RestoreDateTime [Date](#date)
  * SourceTableName **required** [TableName](#tablename)
  * TargetTableName **required** [TableName](#tablename)
  * UseLatestRestorableTime [BooleanObject](#booleanobject)

#### Output
* output [RestoreTableToPointInTimeOutput](#restoretabletopointintimeoutput)

### Scan



```js
amazonaws_dynamodb.Scan({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * ExclusiveStartKey `string`
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExclusiveStartKey [Key](#key)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * FilterExpression [ConditionExpression](#conditionexpression)
  * IndexName [IndexName](#indexname)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanFilter [FilterConditionMap](#filterconditionmap)
  * Segment [ScanSegment](#scansegment)
  * Select [Select](#select)
  * TableName **required** [TableName](#tablename)
  * TotalSegments [ScanTotalSegments](#scantotalsegments)

#### Output
* output [ScanOutput](#scanoutput)

### TagResource



```js
amazonaws_dynamodb.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_dynamodb.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
*Output schema unknown*

### UpdateContinuousBackups



```js
amazonaws_dynamodb.UpdateContinuousBackups({
  "TableName": "",
  "PointInTimeRecoverySpecification": {
    "PointInTimeRecoveryEnabled": true
  }
}, context)
```

#### Input
* input `object`
  * PointInTimeRecoverySpecification **required** [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
  * TableName **required** [TableName](#tablename)

#### Output
* output [UpdateContinuousBackupsOutput](#updatecontinuousbackupsoutput)

### UpdateGlobalTable



```js
amazonaws_dynamodb.UpdateGlobalTable({
  "GlobalTableName": "",
  "ReplicaUpdates": []
}, context)
```

#### Input
* input `object`
  * GlobalTableName **required** [TableName](#tablename)
  * ReplicaUpdates **required** [ReplicaUpdateList](#replicaupdatelist)

#### Output
* output [UpdateGlobalTableOutput](#updateglobaltableoutput)

### UpdateGlobalTableSettings



```js
amazonaws_dynamodb.UpdateGlobalTableSettings({
  "GlobalTableName": ""
}, context)
```

#### Input
* input `object`
  * GlobalTableGlobalSecondaryIndexSettingsUpdate [GlobalTableGlobalSecondaryIndexSettingsUpdateList](#globaltableglobalsecondaryindexsettingsupdatelist)
  * GlobalTableName **required** [TableName](#tablename)
  * GlobalTableProvisionedWriteCapacityUnits [PositiveLongObject](#positivelongobject)
  * ReplicaSettingsUpdate [ReplicaSettingsUpdateList](#replicasettingsupdatelist)

#### Output
* output [UpdateGlobalTableSettingsOutput](#updateglobaltablesettingsoutput)

### UpdateItem



```js
amazonaws_dynamodb.UpdateItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Input
* input `object`
  * AttributeUpdates [AttributeUpdates](#attributeupdates)
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Key **required** [Key](#key)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)
  * UpdateExpression [UpdateExpression](#updateexpression)

#### Output
* output [UpdateItemOutput](#updateitemoutput)

### UpdateTable



```js
amazonaws_dynamodb.UpdateTable({
  "TableName": ""
}, context)
```

#### Input
* input `object`
  * AttributeDefinitions [AttributeDefinitions](#attributedefinitions)
  * GlobalSecondaryIndexUpdates [GlobalSecondaryIndexUpdateList](#globalsecondaryindexupdatelist)
  * ProvisionedThroughput [ProvisionedThroughput](#provisionedthroughput)
  * StreamSpecification [StreamSpecification](#streamspecification)
  * TableName **required** [TableName](#tablename)

#### Output
* output [UpdateTableOutput](#updatetableoutput)

### UpdateTimeToLive



```js
amazonaws_dynamodb.UpdateTimeToLive({
  "TableName": "",
  "TimeToLiveSpecification": {
    "Enabled": true,
    "AttributeName": ""
  }
}, context)
```

#### Input
* input `object`
  * TableName **required** [TableName](#tablename)
  * TimeToLiveSpecification **required** [TimeToLiveSpecification](#timetolivespecification)

#### Output
* output [UpdateTimeToLiveOutput](#updatetimetoliveoutput)



## Definitions

### AttributeAction
* AttributeAction `string` (values: ADD, PUT, DELETE)

### AttributeDefinition
* AttributeDefinition `object`: Represents an attribute for describing the key schema for the table and indexes.
  * AttributeName **required** [KeySchemaAttributeName](#keyschemaattributename)
  * AttributeType **required** [ScalarAttributeType](#scalarattributetype)

### AttributeDefinitions
* AttributeDefinitions `array`
  * items [AttributeDefinition](#attributedefinition)

### AttributeMap
* AttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### AttributeName
* AttributeName `string`

### AttributeNameList
* AttributeNameList `array`
  * items [AttributeName](#attributename)

### AttributeUpdates
* AttributeUpdates `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValueUpdate](#attributevalueupdate)

### AttributeValue
* AttributeValue `object`: <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * B [BinaryAttributeValue](#binaryattributevalue)
  * BOOL [BooleanAttributeValue](#booleanattributevalue)
  * BS [BinarySetAttributeValue](#binarysetattributevalue)
  * L [ListAttributeValue](#listattributevalue)
  * M [MapAttributeValue](#mapattributevalue)
  * N [NumberAttributeValue](#numberattributevalue)
  * NS [NumberSetAttributeValue](#numbersetattributevalue)
  * NULL [NullAttributeValue](#nullattributevalue)
  * S [StringAttributeValue](#stringattributevalue)
  * SS [StringSetAttributeValue](#stringsetattributevalue)

### AttributeValueList
* AttributeValueList `array`
  * items [AttributeValue](#attributevalue)

### AttributeValueUpdate
* AttributeValueUpdate `object`: <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p>
  * Action [AttributeAction](#attributeaction)
  * Value [AttributeValue](#attributevalue)

### Backfilling
* Backfilling `boolean`

### BackupArn
* BackupArn `string`

### BackupCreationDateTime
* BackupCreationDateTime `string`

### BackupDescription
* BackupDescription `object`: Contains the description of the backup created for the table.
  * BackupDetails [BackupDetails](#backupdetails)
  * SourceTableDetails [SourceTableDetails](#sourcetabledetails)
  * SourceTableFeatureDetails [SourceTableFeatureDetails](#sourcetablefeaturedetails)

### BackupDetails
* BackupDetails `object`: Contains the details of the backup created for the table.
  * BackupArn **required** [BackupArn](#backuparn)
  * BackupCreationDateTime **required** [BackupCreationDateTime](#backupcreationdatetime)
  * BackupName **required** [BackupName](#backupname)
  * BackupSizeBytes [BackupSizeBytes](#backupsizebytes)
  * BackupStatus **required** [BackupStatus](#backupstatus)

### BackupInUseException
* BackupInUseException `object`: There is another ongoing conflicting backup control plane operation on the table. The backups is either being created, deleted or restored to a table.
  * message [ErrorMessage](#errormessage)

### BackupName
* BackupName `string`

### BackupNotFoundException
* BackupNotFoundException `object`: Backup not found for the given BackupARN. 
  * message [ErrorMessage](#errormessage)

### BackupSizeBytes
* BackupSizeBytes `integer`

### BackupStatus
* BackupStatus `string` (values: CREATING, DELETED, AVAILABLE)

### BackupSummaries
* BackupSummaries `array`
  * items [BackupSummary](#backupsummary)

### BackupSummary
* BackupSummary `object`: Contains details for the backup.
  * BackupArn [BackupArn](#backuparn)
  * BackupCreationDateTime [BackupCreationDateTime](#backupcreationdatetime)
  * BackupName [BackupName](#backupname)
  * BackupSizeBytes [BackupSizeBytes](#backupsizebytes)
  * BackupStatus [BackupStatus](#backupstatus)
  * TableArn [TableArn](#tablearn)
  * TableId [TableId](#tableid)
  * TableName [TableName](#tablename)

### BackupsInputLimit
* BackupsInputLimit `integer`

### BatchGetItemInput
* BatchGetItemInput `object`: Represents the input of a <code>BatchGetItem</code> operation.
  * RequestItems **required** [BatchGetRequestMap](#batchgetrequestmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)

### BatchGetItemOutput
* BatchGetItemOutput `object`: Represents the output of a <code>BatchGetItem</code> operation.
  * ConsumedCapacity [ConsumedCapacityMultiple](#consumedcapacitymultiple)
  * Responses [BatchGetResponseMap](#batchgetresponsemap)
  * UnprocessedKeys [BatchGetRequestMap](#batchgetrequestmap)

### BatchGetRequestMap
* BatchGetRequestMap `array`
  * items `object`
    * key [TableName](#tablename)
    * value [KeysAndAttributes](#keysandattributes)

### BatchGetResponseMap
* BatchGetResponseMap `array`
  * items `object`
    * key [TableName](#tablename)
    * value [ItemList](#itemlist)

### BatchWriteItemInput
* BatchWriteItemInput `object`: Represents the input of a <code>BatchWriteItem</code> operation.
  * RequestItems **required** [BatchWriteItemRequestMap](#batchwriteitemrequestmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)

### BatchWriteItemOutput
* BatchWriteItemOutput `object`: Represents the output of a <code>BatchWriteItem</code> operation.
  * ConsumedCapacity [ConsumedCapacityMultiple](#consumedcapacitymultiple)
  * ItemCollectionMetrics [ItemCollectionMetricsPerTable](#itemcollectionmetricspertable)
  * UnprocessedItems [BatchWriteItemRequestMap](#batchwriteitemrequestmap)

### BatchWriteItemRequestMap
* BatchWriteItemRequestMap `array`
  * items `object`
    * key [TableName](#tablename)
    * value [WriteRequests](#writerequests)

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
  * CapacityUnits [ConsumedCapacityUnits](#consumedcapacityunits)

### ComparisonOperator
* ComparisonOperator `string` (values: EQ, NE, IN, LE, LT, GE, GT, BETWEEN, NOT_NULL, NULL, CONTAINS, NOT_CONTAINS, BEGINS_WITH)

### Condition
* Condition `object`: <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>
  * AttributeValueList [AttributeValueList](#attributevaluelist)
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)

### ConditionExpression
* ConditionExpression `string`

### ConditionalCheckFailedException
* ConditionalCheckFailedException `object`: A condition specified in the operation could not be evaluated.
  * message [ErrorMessage](#errormessage)

### ConditionalOperator
* ConditionalOperator `string` (values: AND, OR)

### ConsistentRead
* ConsistentRead `boolean`

### ConsumedCapacity
* ConsumedCapacity `object`: The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
  * CapacityUnits [ConsumedCapacityUnits](#consumedcapacityunits)
  * GlobalSecondaryIndexes [SecondaryIndexesCapacityMap](#secondaryindexescapacitymap)
  * LocalSecondaryIndexes [SecondaryIndexesCapacityMap](#secondaryindexescapacitymap)
  * Table [Capacity](#capacity)
  * TableName [TableName](#tablename)

### ConsumedCapacityMultiple
* ConsumedCapacityMultiple `array`
  * items [ConsumedCapacity](#consumedcapacity)

### ConsumedCapacityUnits
* ConsumedCapacityUnits `number`

### ContinuousBackupsDescription
* ContinuousBackupsDescription `object`: Represents the continuous backups and point in time recovery settings on the table.
  * ContinuousBackupsStatus **required** [ContinuousBackupsStatus](#continuousbackupsstatus)
  * PointInTimeRecoveryDescription [PointInTimeRecoveryDescription](#pointintimerecoverydescription)

### ContinuousBackupsStatus
* ContinuousBackupsStatus `string` (values: ENABLED, DISABLED)

### ContinuousBackupsUnavailableException
* ContinuousBackupsUnavailableException `object`: Backups have not yet been enabled for this table.
  * message [ErrorMessage](#errormessage)

### CreateBackupInput
* CreateBackupInput `object`
  * BackupName **required** [BackupName](#backupname)
  * TableName **required** [TableName](#tablename)

### CreateBackupOutput
* CreateBackupOutput `object`
  * BackupDetails [BackupDetails](#backupdetails)

### CreateGlobalSecondaryIndexAction
* CreateGlobalSecondaryIndexAction `object`: Represents a new global secondary index to be added to an existing table.
  * IndexName **required** [IndexName](#indexname)
  * KeySchema **required** [KeySchema](#keyschema)
  * Projection **required** [Projection](#projection)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)

### CreateGlobalTableInput
* CreateGlobalTableInput `object`
  * GlobalTableName **required** [TableName](#tablename)
  * ReplicationGroup **required** [ReplicaList](#replicalist)

### CreateGlobalTableOutput
* CreateGlobalTableOutput `object`
  * GlobalTableDescription [GlobalTableDescription](#globaltabledescription)

### CreateReplicaAction
* CreateReplicaAction `object`: Represents a replica to be added.
  * RegionName **required** [RegionName](#regionname)

### CreateTableInput
* CreateTableInput `object`: Represents the input of a <code>CreateTable</code> operation.
  * AttributeDefinitions **required** [AttributeDefinitions](#attributedefinitions)
  * GlobalSecondaryIndexes [GlobalSecondaryIndexList](#globalsecondaryindexlist)
  * KeySchema **required** [KeySchema](#keyschema)
  * LocalSecondaryIndexes [LocalSecondaryIndexList](#localsecondaryindexlist)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)
  * SSESpecification [SSESpecification](#ssespecification)
  * StreamSpecification [StreamSpecification](#streamspecification)
  * TableName **required** [TableName](#tablename)

### CreateTableOutput
* CreateTableOutput `object`: Represents the output of a <code>CreateTable</code> operation.
  * TableDescription [TableDescription](#tabledescription)

### Date
* Date `string`

### DeleteBackupInput
* DeleteBackupInput `object`
  * BackupArn **required** [BackupArn](#backuparn)

### DeleteBackupOutput
* DeleteBackupOutput `object`
  * BackupDescription [BackupDescription](#backupdescription)

### DeleteGlobalSecondaryIndexAction
* DeleteGlobalSecondaryIndexAction `object`: Represents a global secondary index to be deleted from an existing table.
  * IndexName **required** [IndexName](#indexname)

### DeleteItemInput
* DeleteItemInput `object`: Represents the input of a <code>DeleteItem</code> operation.
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Key **required** [Key](#key)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)

### DeleteItemOutput
* DeleteItemOutput `object`: Represents the output of a <code>DeleteItem</code> operation.
  * Attributes [AttributeMap](#attributemap)
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * ItemCollectionMetrics [ItemCollectionMetrics](#itemcollectionmetrics)

### DeleteReplicaAction
* DeleteReplicaAction `object`: Represents a replica to be removed.
  * RegionName **required** [RegionName](#regionname)

### DeleteRequest
* DeleteRequest `object`: Represents a request to perform a <code>DeleteItem</code> operation on an item.
  * Key **required** [Key](#key)

### DeleteTableInput
* DeleteTableInput `object`: Represents the input of a <code>DeleteTable</code> operation.
  * TableName **required** [TableName](#tablename)

### DeleteTableOutput
* DeleteTableOutput `object`: Represents the output of a <code>DeleteTable</code> operation.
  * TableDescription [TableDescription](#tabledescription)

### DescribeBackupInput
* DescribeBackupInput `object`
  * BackupArn **required** [BackupArn](#backuparn)

### DescribeBackupOutput
* DescribeBackupOutput `object`
  * BackupDescription [BackupDescription](#backupdescription)

### DescribeContinuousBackupsInput
* DescribeContinuousBackupsInput `object`
  * TableName **required** [TableName](#tablename)

### DescribeContinuousBackupsOutput
* DescribeContinuousBackupsOutput `object`
  * ContinuousBackupsDescription [ContinuousBackupsDescription](#continuousbackupsdescription)

### DescribeGlobalTableInput
* DescribeGlobalTableInput `object`
  * GlobalTableName **required** [TableName](#tablename)

### DescribeGlobalTableOutput
* DescribeGlobalTableOutput `object`
  * GlobalTableDescription [GlobalTableDescription](#globaltabledescription)

### DescribeGlobalTableSettingsInput
* DescribeGlobalTableSettingsInput `object`
  * GlobalTableName **required** [TableName](#tablename)

### DescribeGlobalTableSettingsOutput
* DescribeGlobalTableSettingsOutput `object`
  * GlobalTableName [TableName](#tablename)
  * ReplicaSettings [ReplicaSettingsDescriptionList](#replicasettingsdescriptionlist)

### DescribeLimitsInput
* DescribeLimitsInput `object`: Represents the input of a <code>DescribeLimits</code> operation. Has no content.

### DescribeLimitsOutput
* DescribeLimitsOutput `object`: Represents the output of a <code>DescribeLimits</code> operation.
  * AccountMaxReadCapacityUnits [PositiveLongObject](#positivelongobject)
  * AccountMaxWriteCapacityUnits [PositiveLongObject](#positivelongobject)
  * TableMaxReadCapacityUnits [PositiveLongObject](#positivelongobject)
  * TableMaxWriteCapacityUnits [PositiveLongObject](#positivelongobject)

### DescribeTableInput
* DescribeTableInput `object`: Represents the input of a <code>DescribeTable</code> operation.
  * TableName **required** [TableName](#tablename)

### DescribeTableOutput
* DescribeTableOutput `object`: Represents the output of a <code>DescribeTable</code> operation.
  * Table [TableDescription](#tabledescription)

### DescribeTimeToLiveInput
* DescribeTimeToLiveInput `object`
  * TableName **required** [TableName](#tablename)

### DescribeTimeToLiveOutput
* DescribeTimeToLiveOutput `object`
  * TimeToLiveDescription [TimeToLiveDescription](#timetolivedescription)

### ErrorMessage
* ErrorMessage `string`

### ExpectedAttributeMap
* ExpectedAttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [ExpectedAttributeValue](#expectedattributevalue)

### ExpectedAttributeValue
* ExpectedAttributeValue `object`: <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code> or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>
  * AttributeValueList [AttributeValueList](#attributevaluelist)
  * ComparisonOperator [ComparisonOperator](#comparisonoperator)
  * Exists [BooleanObject](#booleanobject)
  * Value [AttributeValue](#attributevalue)

### ExpressionAttributeNameMap
* ExpressionAttributeNameMap `array`
  * items `object`
    * key [ExpressionAttributeNameVariable](#expressionattributenamevariable)
    * value [AttributeName](#attributename)

### ExpressionAttributeNameVariable
* ExpressionAttributeNameVariable `string`

### ExpressionAttributeValueMap
* ExpressionAttributeValueMap `array`
  * items `object`
    * key [ExpressionAttributeValueVariable](#expressionattributevaluevariable)
    * value [AttributeValue](#attributevalue)

### ExpressionAttributeValueVariable
* ExpressionAttributeValueVariable `string`

### FilterConditionMap
* FilterConditionMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [Condition](#condition)

### GetItemInput
* GetItemInput `object`: Represents the input of a <code>GetItem</code> operation.
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * Key **required** [Key](#key)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * TableName **required** [TableName](#tablename)

### GetItemOutput
* GetItemOutput `object`: Represents the output of a <code>GetItem</code> operation.
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * Item [AttributeMap](#attributemap)

### GlobalSecondaryIndex
* GlobalSecondaryIndex `object`: Represents the properties of a global secondary index.
  * IndexName **required** [IndexName](#indexname)
  * KeySchema **required** [KeySchema](#keyschema)
  * Projection **required** [Projection](#projection)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)

### GlobalSecondaryIndexDescription
* GlobalSecondaryIndexDescription `object`: Represents the properties of a global secondary index.
  * Backfilling [Backfilling](#backfilling)
  * IndexArn [String](#string)
  * IndexName [IndexName](#indexname)
  * IndexSizeBytes [Long](#long)
  * IndexStatus [IndexStatus](#indexstatus)
  * ItemCount [Long](#long)
  * KeySchema [KeySchema](#keyschema)
  * Projection [Projection](#projection)
  * ProvisionedThroughput [ProvisionedThroughputDescription](#provisionedthroughputdescription)

### GlobalSecondaryIndexDescriptionList
* GlobalSecondaryIndexDescriptionList `array`
  * items [GlobalSecondaryIndexDescription](#globalsecondaryindexdescription)

### GlobalSecondaryIndexInfo
* GlobalSecondaryIndexInfo `object`: Represents the properties of a global secondary index for the table when the backup was created.
  * IndexName [IndexName](#indexname)
  * KeySchema [KeySchema](#keyschema)
  * Projection [Projection](#projection)
  * ProvisionedThroughput [ProvisionedThroughput](#provisionedthroughput)

### GlobalSecondaryIndexList
* GlobalSecondaryIndexList `array`
  * items [GlobalSecondaryIndex](#globalsecondaryindex)

### GlobalSecondaryIndexUpdate
* GlobalSecondaryIndexUpdate `object`: <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
  * Create [CreateGlobalSecondaryIndexAction](#createglobalsecondaryindexaction)
  * Delete [DeleteGlobalSecondaryIndexAction](#deleteglobalsecondaryindexaction)
  * Update [UpdateGlobalSecondaryIndexAction](#updateglobalsecondaryindexaction)

### GlobalSecondaryIndexUpdateList
* GlobalSecondaryIndexUpdateList `array`
  * items [GlobalSecondaryIndexUpdate](#globalsecondaryindexupdate)

### GlobalSecondaryIndexes
* GlobalSecondaryIndexes `array`
  * items [GlobalSecondaryIndexInfo](#globalsecondaryindexinfo)

### GlobalTable
* GlobalTable `object`: Represents the properties of a global table.
  * GlobalTableName [TableName](#tablename)
  * ReplicationGroup [ReplicaList](#replicalist)

### GlobalTableAlreadyExistsException
* GlobalTableAlreadyExistsException `object`: The specified global table already exists.
  * message [ErrorMessage](#errormessage)

### GlobalTableArnString
* GlobalTableArnString `string`

### GlobalTableDescription
* GlobalTableDescription `object`: Contains details about the global table.
  * CreationDateTime [Date](#date)
  * GlobalTableArn [GlobalTableArnString](#globaltablearnstring)
  * GlobalTableName [TableName](#tablename)
  * GlobalTableStatus [GlobalTableStatus](#globaltablestatus)
  * ReplicationGroup [ReplicaDescriptionList](#replicadescriptionlist)

### GlobalTableGlobalSecondaryIndexSettingsUpdate
* GlobalTableGlobalSecondaryIndexSettingsUpdate `object`: Represents the settings of a global secondary index for a global table that will be modified.
  * IndexName **required** [IndexName](#indexname)
  * ProvisionedWriteCapacityUnits [PositiveLongObject](#positivelongobject)

### GlobalTableGlobalSecondaryIndexSettingsUpdateList
* GlobalTableGlobalSecondaryIndexSettingsUpdateList `array`
  * items [GlobalTableGlobalSecondaryIndexSettingsUpdate](#globaltableglobalsecondaryindexsettingsupdate)

### GlobalTableList
* GlobalTableList `array`
  * items [GlobalTable](#globaltable)

### GlobalTableNotFoundException
* GlobalTableNotFoundException `object`: The specified global table does not exist.
  * message [ErrorMessage](#errormessage)

### GlobalTableStatus
* GlobalTableStatus `string` (values: CREATING, ACTIVE, DELETING, UPDATING)

### IndexName
* IndexName `string`

### IndexNotFoundException
* IndexNotFoundException `object`: The operation tried to access a nonexistent index.
  * message [ErrorMessage](#errormessage)

### IndexStatus
* IndexStatus `string` (values: CREATING, UPDATING, DELETING, ACTIVE)

### Integer
* Integer `integer`

### InternalServerError
* InternalServerError `object`: An error occurred on the server side.
  * message [ErrorMessage](#errormessage)

### InvalidRestoreTimeException
* InvalidRestoreTimeException `object`: An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.
  * message [ErrorMessage](#errormessage)

### ItemCollectionKeyAttributeMap
* ItemCollectionKeyAttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### ItemCollectionMetrics
* ItemCollectionMetrics `object`: Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
  * ItemCollectionKey [ItemCollectionKeyAttributeMap](#itemcollectionkeyattributemap)
  * SizeEstimateRangeGB [ItemCollectionSizeEstimateRange](#itemcollectionsizeestimaterange)

### ItemCollectionMetricsMultiple
* ItemCollectionMetricsMultiple `array`
  * items [ItemCollectionMetrics](#itemcollectionmetrics)

### ItemCollectionMetricsPerTable
* ItemCollectionMetricsPerTable `array`
  * items `object`
    * key [TableName](#tablename)
    * value [ItemCollectionMetricsMultiple](#itemcollectionmetricsmultiple)

### ItemCollectionSizeEstimateBound
* ItemCollectionSizeEstimateBound `number`

### ItemCollectionSizeEstimateRange
* ItemCollectionSizeEstimateRange `array`
  * items [ItemCollectionSizeEstimateBound](#itemcollectionsizeestimatebound)

### ItemCollectionSizeLimitExceededException
* ItemCollectionSizeLimitExceededException `object`: An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.
  * message [ErrorMessage](#errormessage)

### ItemCount
* ItemCount `integer`

### ItemList
* ItemList `array`
  * items [AttributeMap](#attributemap)

### Key
* Key `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### KeyConditions
* KeyConditions `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [Condition](#condition)

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
  * AttributeName **required** [KeySchemaAttributeName](#keyschemaattributename)
  * KeyType **required** [KeyType](#keytype)

### KeyType
* KeyType `string` (values: HASH, RANGE)

### KeysAndAttributes
* KeysAndAttributes `object`: <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * Keys **required** [KeyList](#keylist)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)

### LimitExceededException
* LimitExceededException `object`: <p>Up to 50 <code>CreateBackup</code> operations are allowed per second, per account. There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 10 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>For tables with secondary indexes, only one of those tables can be in the <code>CREATING</code> state at any point in time. Do not attempt to create more than one such table simultaneously.</p> <p>The total limit of tables in the <code>ACTIVE</code> state is 250.</p>
  * message [ErrorMessage](#errormessage)

### ListAttributeValue
* ListAttributeValue `array`
  * items [AttributeValue](#attributevalue)

### ListBackupsInput
* ListBackupsInput `object`
  * ExclusiveStartBackupArn [BackupArn](#backuparn)
  * Limit [BackupsInputLimit](#backupsinputlimit)
  * TableName [TableName](#tablename)
  * TimeRangeLowerBound [TimeRangeLowerBound](#timerangelowerbound)
  * TimeRangeUpperBound [TimeRangeUpperBound](#timerangeupperbound)

### ListBackupsOutput
* ListBackupsOutput `object`
  * BackupSummaries [BackupSummaries](#backupsummaries)
  * LastEvaluatedBackupArn [BackupArn](#backuparn)

### ListGlobalTablesInput
* ListGlobalTablesInput `object`
  * ExclusiveStartGlobalTableName [TableName](#tablename)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * RegionName [RegionName](#regionname)

### ListGlobalTablesOutput
* ListGlobalTablesOutput `object`
  * GlobalTables [GlobalTableList](#globaltablelist)
  * LastEvaluatedGlobalTableName [TableName](#tablename)

### ListTablesInput
* ListTablesInput `object`: Represents the input of a <code>ListTables</code> operation.
  * ExclusiveStartTableName [TableName](#tablename)
  * Limit [ListTablesInputLimit](#listtablesinputlimit)

### ListTablesInputLimit
* ListTablesInputLimit `integer`

### ListTablesOutput
* ListTablesOutput `object`: Represents the output of a <code>ListTables</code> operation.
  * LastEvaluatedTableName [TableName](#tablename)
  * TableNames [TableNameList](#tablenamelist)

### ListTagsOfResourceInput
* ListTagsOfResourceInput `object`
  * NextToken [NextTokenString](#nexttokenstring)
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)

### ListTagsOfResourceOutput
* ListTagsOfResourceOutput `object`
  * NextToken [NextTokenString](#nexttokenstring)
  * Tags [TagList](#taglist)

### LocalSecondaryIndex
* LocalSecondaryIndex `object`: Represents the properties of a local secondary index.
  * IndexName **required** [IndexName](#indexname)
  * KeySchema **required** [KeySchema](#keyschema)
  * Projection **required** [Projection](#projection)

### LocalSecondaryIndexDescription
* LocalSecondaryIndexDescription `object`: Represents the properties of a local secondary index.
  * IndexArn [String](#string)
  * IndexName [IndexName](#indexname)
  * IndexSizeBytes [Long](#long)
  * ItemCount [Long](#long)
  * KeySchema [KeySchema](#keyschema)
  * Projection [Projection](#projection)

### LocalSecondaryIndexDescriptionList
* LocalSecondaryIndexDescriptionList `array`
  * items [LocalSecondaryIndexDescription](#localsecondaryindexdescription)

### LocalSecondaryIndexInfo
* LocalSecondaryIndexInfo `object`: Represents the properties of a local secondary index for the table when the backup was created.
  * IndexName [IndexName](#indexname)
  * KeySchema [KeySchema](#keyschema)
  * Projection [Projection](#projection)

### LocalSecondaryIndexList
* LocalSecondaryIndexList `array`
  * items [LocalSecondaryIndex](#localsecondaryindex)

### LocalSecondaryIndexes
* LocalSecondaryIndexes `array`
  * items [LocalSecondaryIndexInfo](#localsecondaryindexinfo)

### Long
* Long `integer`

### MapAttributeValue
* MapAttributeValue `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### NextTokenString
* NextTokenString `string`

### NonKeyAttributeName
* NonKeyAttributeName `string`

### NonKeyAttributeNameList
* NonKeyAttributeNameList `array`
  * items [NonKeyAttributeName](#nonkeyattributename)

### NullAttributeValue
* NullAttributeValue `boolean`

### NumberAttributeValue
* NumberAttributeValue `string`

### NumberSetAttributeValue
* NumberSetAttributeValue `array`
  * items [NumberAttributeValue](#numberattributevalue)

### PointInTimeRecoveryDescription
* PointInTimeRecoveryDescription `object`: The description of the point in time settings applied to the table.
  * EarliestRestorableDateTime [Date](#date)
  * LatestRestorableDateTime [Date](#date)
  * PointInTimeRecoveryStatus [PointInTimeRecoveryStatus](#pointintimerecoverystatus)

### PointInTimeRecoverySpecification
* PointInTimeRecoverySpecification `object`: Represents the settings used to enable point in time recovery.
  * PointInTimeRecoveryEnabled **required** [BooleanObject](#booleanobject)

### PointInTimeRecoveryStatus
* PointInTimeRecoveryStatus `string` (values: ENABLED, DISABLED)

### PointInTimeRecoveryUnavailableException
* PointInTimeRecoveryUnavailableException `object`: Point in time recovery has not yet been enabled for this source table.
  * message [ErrorMessage](#errormessage)

### PositiveIntegerObject
* PositiveIntegerObject `integer`

### PositiveLongObject
* PositiveLongObject `integer`

### Projection
* Projection `object`: Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
  * NonKeyAttributes [NonKeyAttributeNameList](#nonkeyattributenamelist)
  * ProjectionType [ProjectionType](#projectiontype)

### ProjectionExpression
* ProjectionExpression `string`

### ProjectionType
* ProjectionType `string` (values: ALL, KEYS_ONLY, INCLUDE)

### ProvisionedThroughput
* ProvisionedThroughput `object`: <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * ReadCapacityUnits **required** [PositiveLongObject](#positivelongobject)
  * WriteCapacityUnits **required** [PositiveLongObject](#positivelongobject)

### ProvisionedThroughputDescription
* ProvisionedThroughputDescription `object`: Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
  * LastDecreaseDateTime [Date](#date)
  * LastIncreaseDateTime [Date](#date)
  * NumberOfDecreasesToday [PositiveLongObject](#positivelongobject)
  * ReadCapacityUnits [PositiveLongObject](#positivelongobject)
  * WriteCapacityUnits [PositiveLongObject](#positivelongobject)

### ProvisionedThroughputExceededException
* ProvisionedThroughputExceededException `object`: Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.
  * message [ErrorMessage](#errormessage)

### PutItemInput
* PutItemInput `object`: Represents the input of a <code>PutItem</code> operation.
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Item **required** [PutItemInputAttributeMap](#putiteminputattributemap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)

### PutItemInputAttributeMap
* PutItemInputAttributeMap `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeValue](#attributevalue)

### PutItemOutput
* PutItemOutput `object`: Represents the output of a <code>PutItem</code> operation.
  * Attributes [AttributeMap](#attributemap)
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * ItemCollectionMetrics [ItemCollectionMetrics](#itemcollectionmetrics)

### PutRequest
* PutRequest `object`: Represents a request to perform a <code>PutItem</code> operation on an item.
  * Item **required** [PutItemInputAttributeMap](#putiteminputattributemap)

### QueryInput
* QueryInput `object`: Represents the input of a <code>Query</code> operation.
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExclusiveStartKey [Key](#key)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * FilterExpression [ConditionExpression](#conditionexpression)
  * IndexName [IndexName](#indexname)
  * KeyConditionExpression [KeyExpression](#keyexpression)
  * KeyConditions [KeyConditions](#keyconditions)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * QueryFilter [FilterConditionMap](#filterconditionmap)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanIndexForward [BooleanObject](#booleanobject)
  * Select [Select](#select)
  * TableName **required** [TableName](#tablename)

### QueryOutput
* QueryOutput `object`: Represents the output of a <code>Query</code> operation.
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * Count [Integer](#integer)
  * Items [ItemList](#itemlist)
  * LastEvaluatedKey [Key](#key)
  * ScannedCount [Integer](#integer)

### RegionName
* RegionName `string`

### Replica
* Replica `object`: Represents the properties of a replica.
  * RegionName [RegionName](#regionname)

### ReplicaAlreadyExistsException
* ReplicaAlreadyExistsException `object`: The specified replica is already part of the global table.
  * message [ErrorMessage](#errormessage)

### ReplicaDescription
* ReplicaDescription `object`: Contains the details of the replica.
  * RegionName [RegionName](#regionname)

### ReplicaDescriptionList
* ReplicaDescriptionList `array`
  * items [ReplicaDescription](#replicadescription)

### ReplicaGlobalSecondaryIndexSettingsDescription
* ReplicaGlobalSecondaryIndexSettingsDescription `object`: Represents the properties of a global secondary index.
  * IndexName **required** [IndexName](#indexname)
  * IndexStatus [IndexStatus](#indexstatus)
  * ProvisionedReadCapacityUnits [PositiveLongObject](#positivelongobject)
  * ProvisionedWriteCapacityUnits [PositiveLongObject](#positivelongobject)

### ReplicaGlobalSecondaryIndexSettingsDescriptionList
* ReplicaGlobalSecondaryIndexSettingsDescriptionList `array`
  * items [ReplicaGlobalSecondaryIndexSettingsDescription](#replicaglobalsecondaryindexsettingsdescription)

### ReplicaGlobalSecondaryIndexSettingsUpdate
* ReplicaGlobalSecondaryIndexSettingsUpdate `object`: Represents the settings of a global secondary index for a global table that will be modified.
  * IndexName **required** [IndexName](#indexname)
  * ProvisionedReadCapacityUnits [PositiveLongObject](#positivelongobject)

### ReplicaGlobalSecondaryIndexSettingsUpdateList
* ReplicaGlobalSecondaryIndexSettingsUpdateList `array`
  * items [ReplicaGlobalSecondaryIndexSettingsUpdate](#replicaglobalsecondaryindexsettingsupdate)

### ReplicaList
* ReplicaList `array`
  * items [Replica](#replica)

### ReplicaNotFoundException
* ReplicaNotFoundException `object`: The specified replica is no longer part of the global table.
  * message [ErrorMessage](#errormessage)

### ReplicaSettingsDescription
* ReplicaSettingsDescription `object`: Represents the properties of a replica.
  * RegionName **required** [RegionName](#regionname)
  * ReplicaGlobalSecondaryIndexSettings [ReplicaGlobalSecondaryIndexSettingsDescriptionList](#replicaglobalsecondaryindexsettingsdescriptionlist)
  * ReplicaProvisionedReadCapacityUnits [PositiveLongObject](#positivelongobject)
  * ReplicaProvisionedWriteCapacityUnits [PositiveLongObject](#positivelongobject)
  * ReplicaStatus [ReplicaStatus](#replicastatus)

### ReplicaSettingsDescriptionList
* ReplicaSettingsDescriptionList `array`
  * items [ReplicaSettingsDescription](#replicasettingsdescription)

### ReplicaSettingsUpdate
* ReplicaSettingsUpdate `object`: Represents the settings for a global table in a region that will be modified.
  * RegionName **required** [RegionName](#regionname)
  * ReplicaGlobalSecondaryIndexSettingsUpdate [ReplicaGlobalSecondaryIndexSettingsUpdateList](#replicaglobalsecondaryindexsettingsupdatelist)
  * ReplicaProvisionedReadCapacityUnits [PositiveLongObject](#positivelongobject)

### ReplicaSettingsUpdateList
* ReplicaSettingsUpdateList `array`
  * items [ReplicaSettingsUpdate](#replicasettingsupdate)

### ReplicaStatus
* ReplicaStatus `string` (values: CREATING, UPDATING, DELETING, ACTIVE)

### ReplicaUpdate
* ReplicaUpdate `object`: <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
  * Create [CreateReplicaAction](#createreplicaaction)
  * Delete [DeleteReplicaAction](#deletereplicaaction)

### ReplicaUpdateList
* ReplicaUpdateList `array`
  * items [ReplicaUpdate](#replicaupdate)

### ResourceArnString
* ResourceArnString `string`

### ResourceInUseException
* ResourceInUseException `object`: The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.
  * message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.
  * message [ErrorMessage](#errormessage)

### RestoreInProgress
* RestoreInProgress `boolean`

### RestoreSummary
* RestoreSummary `object`: Contains details for the restore.
  * RestoreDateTime **required** [Date](#date)
  * RestoreInProgress **required** [RestoreInProgress](#restoreinprogress)
  * SourceBackupArn [BackupArn](#backuparn)
  * SourceTableArn [TableArn](#tablearn)

### RestoreTableFromBackupInput
* RestoreTableFromBackupInput `object`
  * BackupArn **required** [BackupArn](#backuparn)
  * TargetTableName **required** [TableName](#tablename)

### RestoreTableFromBackupOutput
* RestoreTableFromBackupOutput `object`
  * TableDescription [TableDescription](#tabledescription)

### RestoreTableToPointInTimeInput
* RestoreTableToPointInTimeInput `object`
  * RestoreDateTime [Date](#date)
  * SourceTableName **required** [TableName](#tablename)
  * TargetTableName **required** [TableName](#tablename)
  * UseLatestRestorableTime [BooleanObject](#booleanobject)

### RestoreTableToPointInTimeOutput
* RestoreTableToPointInTimeOutput `object`
  * TableDescription [TableDescription](#tabledescription)

### ReturnConsumedCapacity
* ReturnConsumedCapacity `string` (values: INDEXES, TOTAL, NONE): <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>

### ReturnItemCollectionMetrics
* ReturnItemCollectionMetrics `string` (values: SIZE, NONE)

### ReturnValue
* ReturnValue `string` (values: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW)

### SSEDescription
* SSEDescription `object`: The description of the server-side encryption status on the specified table.
  * Status [SSEStatus](#ssestatus)

### SSEEnabled
* SSEEnabled `boolean`

### SSESpecification
* SSESpecification `object`: Represents the settings used to enable server-side encryption.
  * Enabled **required** [SSEEnabled](#sseenabled)

### SSEStatus
* SSEStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED)

### ScalarAttributeType
* ScalarAttributeType `string` (values: S, N, B)

### ScanInput
* ScanInput `object`: Represents the input of a <code>Scan</code> operation.
  * AttributesToGet [AttributeNameList](#attributenamelist)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * ConsistentRead [ConsistentRead](#consistentread)
  * ExclusiveStartKey [Key](#key)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * FilterExpression [ConditionExpression](#conditionexpression)
  * IndexName [IndexName](#indexname)
  * Limit [PositiveIntegerObject](#positiveintegerobject)
  * ProjectionExpression [ProjectionExpression](#projectionexpression)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ScanFilter [FilterConditionMap](#filterconditionmap)
  * Segment [ScanSegment](#scansegment)
  * Select [Select](#select)
  * TableName **required** [TableName](#tablename)
  * TotalSegments [ScanTotalSegments](#scantotalsegments)

### ScanOutput
* ScanOutput `object`: Represents the output of a <code>Scan</code> operation.
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * Count [Integer](#integer)
  * Items [ItemList](#itemlist)
  * LastEvaluatedKey [Key](#key)
  * ScannedCount [Integer](#integer)

### ScanSegment
* ScanSegment `integer`

### ScanTotalSegments
* ScanTotalSegments `integer`

### SecondaryIndexesCapacityMap
* SecondaryIndexesCapacityMap `array`
  * items `object`
    * key [IndexName](#indexname)
    * value [Capacity](#capacity)

### Select
* Select `string` (values: ALL_ATTRIBUTES, ALL_PROJECTED_ATTRIBUTES, SPECIFIC_ATTRIBUTES, COUNT)

### SourceTableDetails
* SourceTableDetails `object`: Contains the details of the table when the backup was created. 
  * ItemCount [ItemCount](#itemcount)
  * KeySchema **required** [KeySchema](#keyschema)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)
  * TableArn [TableArn](#tablearn)
  * TableCreationDateTime **required** [TableCreationDateTime](#tablecreationdatetime)
  * TableId **required** [TableId](#tableid)
  * TableName **required** [TableName](#tablename)
  * TableSizeBytes [Long](#long)

### SourceTableFeatureDetails
* SourceTableFeatureDetails `object`: Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. 
  * GlobalSecondaryIndexes [GlobalSecondaryIndexes](#globalsecondaryindexes)
  * LocalSecondaryIndexes [LocalSecondaryIndexes](#localsecondaryindexes)
  * SSEDescription [SSEDescription](#ssedescription)
  * StreamDescription [StreamSpecification](#streamspecification)
  * TimeToLiveDescription [TimeToLiveDescription](#timetolivedescription)

### StreamArn
* StreamArn `string`

### StreamEnabled
* StreamEnabled `boolean`

### StreamSpecification
* StreamSpecification `object`: Represents the DynamoDB Streams configuration for a table in DynamoDB.
  * StreamEnabled [StreamEnabled](#streamenabled)
  * StreamViewType [StreamViewType](#streamviewtype)

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
* TableAlreadyExistsException `object`: A target table with the specified name already exists. 
  * message [ErrorMessage](#errormessage)

### TableArn
* TableArn `string`

### TableCreationDateTime
* TableCreationDateTime `string`

### TableDescription
* TableDescription `object`: Represents the properties of a table.
  * AttributeDefinitions [AttributeDefinitions](#attributedefinitions)
  * CreationDateTime [Date](#date)
  * GlobalSecondaryIndexes [GlobalSecondaryIndexDescriptionList](#globalsecondaryindexdescriptionlist)
  * ItemCount [Long](#long)
  * KeySchema [KeySchema](#keyschema)
  * LatestStreamArn [StreamArn](#streamarn)
  * LatestStreamLabel [String](#string)
  * LocalSecondaryIndexes [LocalSecondaryIndexDescriptionList](#localsecondaryindexdescriptionlist)
  * ProvisionedThroughput [ProvisionedThroughputDescription](#provisionedthroughputdescription)
  * RestoreSummary [RestoreSummary](#restoresummary)
  * SSEDescription [SSEDescription](#ssedescription)
  * StreamSpecification [StreamSpecification](#streamspecification)
  * TableArn [String](#string)
  * TableId [TableId](#tableid)
  * TableName [TableName](#tablename)
  * TableSizeBytes [Long](#long)
  * TableStatus [TableStatus](#tablestatus)

### TableId
* TableId `string`

### TableInUseException
* TableInUseException `object`: A target table with the specified name is either being created or deleted. 
  * message [ErrorMessage](#errormessage)

### TableName
* TableName `string`

### TableNameList
* TableNameList `array`
  * items [TableName](#tablename)

### TableNotFoundException
* TableNotFoundException `object`: A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.
  * message [ErrorMessage](#errormessage)

### TableStatus
* TableStatus `string` (values: CREATING, UPDATING, DELETING, ACTIVE)

### Tag
* Tag `object`: <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p> AWS-assigned tag names and values are automatically assigned the aws: prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix user: in the Cost Allocation Report. You cannot backdate the application of a tag. </p> <p>For an overview on tagging DynamoDB resources, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
  * Key **required** [TagKeyString](#tagkeystring)
  * Value **required** [TagValueString](#tagvaluestring)

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
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)
  * Tags **required** [TagList](#taglist)

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
  * AttributeName [TimeToLiveAttributeName](#timetoliveattributename)
  * TimeToLiveStatus [TimeToLiveStatus](#timetolivestatus)

### TimeToLiveEnabled
* TimeToLiveEnabled `boolean`

### TimeToLiveSpecification
* TimeToLiveSpecification `object`: Represents the settings used to enable or disable Time to Live for the specified table.
  * AttributeName **required** [TimeToLiveAttributeName](#timetoliveattributename)
  * Enabled **required** [TimeToLiveEnabled](#timetoliveenabled)

### TimeToLiveStatus
* TimeToLiveStatus `string` (values: ENABLING, DISABLING, ENABLED, DISABLED)

### UntagResourceInput
* UntagResourceInput `object`
  * ResourceArn **required** [ResourceArnString](#resourcearnstring)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UpdateContinuousBackupsInput
* UpdateContinuousBackupsInput `object`
  * PointInTimeRecoverySpecification **required** [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
  * TableName **required** [TableName](#tablename)

### UpdateContinuousBackupsOutput
* UpdateContinuousBackupsOutput `object`
  * ContinuousBackupsDescription [ContinuousBackupsDescription](#continuousbackupsdescription)

### UpdateExpression
* UpdateExpression `string`

### UpdateGlobalSecondaryIndexAction
* UpdateGlobalSecondaryIndexAction `object`: Represents the new provisioned throughput settings to be applied to a global secondary index.
  * IndexName **required** [IndexName](#indexname)
  * ProvisionedThroughput **required** [ProvisionedThroughput](#provisionedthroughput)

### UpdateGlobalTableInput
* UpdateGlobalTableInput `object`
  * GlobalTableName **required** [TableName](#tablename)
  * ReplicaUpdates **required** [ReplicaUpdateList](#replicaupdatelist)

### UpdateGlobalTableOutput
* UpdateGlobalTableOutput `object`
  * GlobalTableDescription [GlobalTableDescription](#globaltabledescription)

### UpdateGlobalTableSettingsInput
* UpdateGlobalTableSettingsInput `object`
  * GlobalTableGlobalSecondaryIndexSettingsUpdate [GlobalTableGlobalSecondaryIndexSettingsUpdateList](#globaltableglobalsecondaryindexsettingsupdatelist)
  * GlobalTableName **required** [TableName](#tablename)
  * GlobalTableProvisionedWriteCapacityUnits [PositiveLongObject](#positivelongobject)
  * ReplicaSettingsUpdate [ReplicaSettingsUpdateList](#replicasettingsupdatelist)

### UpdateGlobalTableSettingsOutput
* UpdateGlobalTableSettingsOutput `object`
  * GlobalTableName [TableName](#tablename)
  * ReplicaSettings [ReplicaSettingsDescriptionList](#replicasettingsdescriptionlist)

### UpdateItemInput
* UpdateItemInput `object`: Represents the input of an <code>UpdateItem</code> operation.
  * AttributeUpdates [AttributeUpdates](#attributeupdates)
  * ConditionExpression [ConditionExpression](#conditionexpression)
  * ConditionalOperator [ConditionalOperator](#conditionaloperator)
  * Expected [ExpectedAttributeMap](#expectedattributemap)
  * ExpressionAttributeNames [ExpressionAttributeNameMap](#expressionattributenamemap)
  * ExpressionAttributeValues [ExpressionAttributeValueMap](#expressionattributevaluemap)
  * Key **required** [Key](#key)
  * ReturnConsumedCapacity [ReturnConsumedCapacity](#returnconsumedcapacity)
  * ReturnItemCollectionMetrics [ReturnItemCollectionMetrics](#returnitemcollectionmetrics)
  * ReturnValues [ReturnValue](#returnvalue)
  * TableName **required** [TableName](#tablename)
  * UpdateExpression [UpdateExpression](#updateexpression)

### UpdateItemOutput
* UpdateItemOutput `object`: Represents the output of an <code>UpdateItem</code> operation.
  * Attributes [AttributeMap](#attributemap)
  * ConsumedCapacity [ConsumedCapacity](#consumedcapacity)
  * ItemCollectionMetrics [ItemCollectionMetrics](#itemcollectionmetrics)

### UpdateTableInput
* UpdateTableInput `object`: Represents the input of an <code>UpdateTable</code> operation.
  * AttributeDefinitions [AttributeDefinitions](#attributedefinitions)
  * GlobalSecondaryIndexUpdates [GlobalSecondaryIndexUpdateList](#globalsecondaryindexupdatelist)
  * ProvisionedThroughput [ProvisionedThroughput](#provisionedthroughput)
  * StreamSpecification [StreamSpecification](#streamspecification)
  * TableName **required** [TableName](#tablename)

### UpdateTableOutput
* UpdateTableOutput `object`: Represents the output of an <code>UpdateTable</code> operation.
  * TableDescription [TableDescription](#tabledescription)

### UpdateTimeToLiveInput
* UpdateTimeToLiveInput `object`: Represents the input of an <code>UpdateTimeToLive</code> operation.
  * TableName **required** [TableName](#tablename)
  * TimeToLiveSpecification **required** [TimeToLiveSpecification](#timetolivespecification)

### UpdateTimeToLiveOutput
* UpdateTimeToLiveOutput `object`
  * TimeToLiveSpecification [TimeToLiveSpecification](#timetolivespecification)

### WriteRequest
* WriteRequest `object`: Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you will need to provide two separate <code>WriteRequest</code> objects.
  * DeleteRequest [DeleteRequest](#deleterequest)
  * PutRequest [PutRequest](#putrequest)

### WriteRequests
* WriteRequests `array`
  * items [WriteRequest](#writerequest)


