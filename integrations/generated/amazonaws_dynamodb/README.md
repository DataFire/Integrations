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
amazonaws_dynamodb.BatchGetItem({}, context)
```

#### Parameters
* RequestItems (string)

### BatchWriteItem



```js
amazonaws_dynamodb.BatchWriteItem({}, context)
```


### CreateTable



```js
amazonaws_dynamodb.CreateTable({}, context)
```


### DeleteItem



```js
amazonaws_dynamodb.DeleteItem({}, context)
```


### DeleteTable



```js
amazonaws_dynamodb.DeleteTable({}, context)
```


### DescribeLimits



```js
amazonaws_dynamodb.DescribeLimits({}, context)
```


### DescribeTable



```js
amazonaws_dynamodb.DescribeTable({}, context)
```


### DescribeTimeToLive



```js
amazonaws_dynamodb.DescribeTimeToLive({}, context)
```


### GetItem



```js
amazonaws_dynamodb.GetItem({}, context)
```


### ListTables



```js
amazonaws_dynamodb.ListTables({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartTableName (string)

### ListTagsOfResource



```js
amazonaws_dynamodb.ListTagsOfResource({}, context)
```


### PutItem



```js
amazonaws_dynamodb.PutItem({}, context)
```


### Query



```js
amazonaws_dynamodb.Query({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartKey (string)

### Scan



```js
amazonaws_dynamodb.Scan({}, context)
```

#### Parameters
* Limit (string)
* ExclusiveStartKey (string)

### TagResource



```js
amazonaws_dynamodb.TagResource({}, context)
```


### UntagResource



```js
amazonaws_dynamodb.UntagResource({}, context)
```


### UpdateItem



```js
amazonaws_dynamodb.UpdateItem({}, context)
```


### UpdateTable



```js
amazonaws_dynamodb.UpdateTable({}, context)
```


### UpdateTimeToLive



```js
amazonaws_dynamodb.UpdateTimeToLive({}, context)
```


