# @datafire/amazonaws_dynamodb

Client library for Amazon DynamoDB

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dynamodb
```

```js
let datafire = require('datafire');
let amazonaws_dynamodb = require('@datafire/amazonaws_dynamodb').create();

amazonaws_dynamodb.BatchGetItem({}).then(data => {
  console.log(data);
})
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

#### Parameters
* RequestItems (string)
* RequestItems (array) **required**
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>

### BatchWriteItem



```js
amazonaws_dynamodb.BatchWriteItem({
  "RequestItems": []
}, context)
```

#### Parameters
* RequestItems (array) **required**
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ReturnItemCollectionMetrics (string)

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

#### Parameters
* AttributeDefinitions (array) **required**
* GlobalSecondaryIndexes (array)
* KeySchema (array) **required**
* LocalSecondaryIndexes (array)
* ProvisionedThroughput (object) **required** - <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* StreamSpecification (object) - Represents the DynamoDB Streams configuration for a table in DynamoDB.
* TableName (string) **required**

### DeleteItem



```js
amazonaws_dynamodb.DeleteItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Parameters
* ConditionExpression (string)
* ConditionalOperator (string)
* Expected (array)
* ExpressionAttributeNames (array)
* ExpressionAttributeValues (array)
* Key (array) **required**
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ReturnItemCollectionMetrics (string)
* ReturnValues (string)
* TableName (string) **required**

### DeleteTable



```js
amazonaws_dynamodb.DeleteTable({
  "TableName": ""
}, context)
```

#### Parameters
* TableName (string) **required**

### DescribeLimits



```js
amazonaws_dynamodb.DescribeLimits({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeTable



```js
amazonaws_dynamodb.DescribeTable({
  "TableName": ""
}, context)
```

#### Parameters
* TableName (string) **required**

### DescribeTimeToLive



```js
amazonaws_dynamodb.DescribeTimeToLive({
  "TableName": ""
}, context)
```

#### Parameters
* TableName (string) **required**

### GetItem



```js
amazonaws_dynamodb.GetItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Parameters
* AttributesToGet (array)
* ConsistentRead (boolean)
* ExpressionAttributeNames (array)
* Key (array) **required**
* ProjectionExpression (string)
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* TableName (string) **required**

### ListTables



```js
amazonaws_dynamodb.ListTables({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartTableName (string)
* ExclusiveStartTableName (string)
* Limit (integer)

### ListTagsOfResource



```js
amazonaws_dynamodb.ListTagsOfResource({
  "ResourceArn": ""
}, context)
```

#### Parameters
* NextToken (string)
* ResourceArn (string) **required**

### PutItem



```js
amazonaws_dynamodb.PutItem({
  "TableName": "",
  "Item": []
}, context)
```

#### Parameters
* ConditionExpression (string)
* ConditionalOperator (string)
* Expected (array)
* ExpressionAttributeNames (array)
* ExpressionAttributeValues (array)
* Item (array) **required**
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ReturnItemCollectionMetrics (string)
* ReturnValues (string)
* TableName (string) **required**

### Query



```js
amazonaws_dynamodb.Query({
  "TableName": ""
}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartKey (string)
* AttributesToGet (array)
* ConditionalOperator (string)
* ConsistentRead (boolean)
* ExclusiveStartKey (array)
* ExpressionAttributeNames (array)
* ExpressionAttributeValues (array)
* FilterExpression (string)
* IndexName (string)
* KeyConditionExpression (string)
* KeyConditions (array)
* Limit (integer)
* ProjectionExpression (string)
* QueryFilter (array)
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ScanIndexForward (boolean)
* Select (string)
* TableName (string) **required**

### Scan



```js
amazonaws_dynamodb.Scan({
  "TableName": ""
}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartKey (string)
* AttributesToGet (array)
* ConditionalOperator (string)
* ConsistentRead (boolean)
* ExclusiveStartKey (array)
* ExpressionAttributeNames (array)
* ExpressionAttributeValues (array)
* FilterExpression (string)
* IndexName (string)
* Limit (integer)
* ProjectionExpression (string)
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ScanFilter (array)
* Segment (integer)
* Select (string)
* TableName (string) **required**
* TotalSegments (integer)

### TagResource



```js
amazonaws_dynamodb.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* Tags (array) **required**

### UntagResource



```js
amazonaws_dynamodb.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* TagKeys (array) **required**

### UpdateItem



```js
amazonaws_dynamodb.UpdateItem({
  "TableName": "",
  "Key": []
}, context)
```

#### Parameters
* AttributeUpdates (array)
* ConditionExpression (string)
* ConditionalOperator (string)
* Expected (array)
* ExpressionAttributeNames (array)
* ExpressionAttributeValues (array)
* Key (array) **required**
* ReturnConsumedCapacity (string) - <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
* ReturnItemCollectionMetrics (string)
* ReturnValues (string)
* TableName (string) **required**
* UpdateExpression (string)

### UpdateTable



```js
amazonaws_dynamodb.UpdateTable({
  "TableName": ""
}, context)
```

#### Parameters
* AttributeDefinitions (array)
* GlobalSecondaryIndexUpdates (array)
* ProvisionedThroughput (object) - <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* StreamSpecification (object) - Represents the DynamoDB Streams configuration for a table in DynamoDB.
* TableName (string) **required**

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

#### Parameters
* TableName (string) **required**
* TimeToLiveSpecification (object) **required** - Represents the settings used to enable or disable Time to Live for the specified table.

