# @datafire/amazonaws_timestream_write

Client library for Amazon Timestream Write

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_timestream_write
```
```js
let amazonaws_timestream_write = require('@datafire/amazonaws_timestream_write').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Timestream is a fast, scalable, fully managed time series database service that makes it easy to store and analyze trillions of time series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. Timestream is built from the ground up to effectively ingest, process, and store time series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.

## Actions

### CreateDatabase



```js
amazonaws_timestream_write.CreateDatabase({
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * KmsKeyId
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateDatabaseResponse](#createdatabaseresponse)

### CreateTable



```js
amazonaws_timestream_write.CreateTable({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * RetentionProperties
    * MagneticStoreRetentionPeriodInDays **required**
    * MemoryStoreRetentionPeriodInHours **required**
  * TableName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateTableResponse](#createtableresponse)

### DeleteDatabase



```js
amazonaws_timestream_write.DeleteDatabase({
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**

#### Output
*Output schema unknown*

### DeleteTable



```js
amazonaws_timestream_write.DeleteTable({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * TableName **required**

#### Output
*Output schema unknown*

### DescribeDatabase



```js
amazonaws_timestream_write.DescribeDatabase({
  "DatabaseName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**

#### Output
* output [DescribeDatabaseResponse](#describedatabaseresponse)

### DescribeEndpoints



```js
amazonaws_timestream_write.DescribeEndpoints({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeEndpointsResponse](#describeendpointsresponse)

### DescribeTable



```js
amazonaws_timestream_write.DescribeTable({
  "DatabaseName": null,
  "TableName": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * TableName **required**

#### Output
* output [DescribeTableResponse](#describetableresponse)

### ListDatabases



```js
amazonaws_timestream_write.ListDatabases({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListDatabasesResponse](#listdatabasesresponse)

### ListTables



```js
amazonaws_timestream_write.ListTables({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DatabaseName
  * MaxResults
  * NextToken

#### Output
* output [ListTablesResponse](#listtablesresponse)

### ListTagsForResource



```js
amazonaws_timestream_write.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_timestream_write.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_timestream_write.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDatabase



```js
amazonaws_timestream_write.UpdateDatabase({
  "DatabaseName": null,
  "KmsKeyId": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * KmsKeyId **required**

#### Output
* output [UpdateDatabaseResponse](#updatedatabaseresponse)

### UpdateTable



```js
amazonaws_timestream_write.UpdateTable({
  "DatabaseName": null,
  "TableName": null,
  "RetentionProperties": null
}, context)
```

#### Input
* input `object`
  * DatabaseName **required**
  * RetentionProperties **required**
    * MagneticStoreRetentionPeriodInDays **required**
    * MemoryStoreRetentionPeriodInHours **required**
  * TableName **required**

#### Output
* output [UpdateTableResponse](#updatetableresponse)

### WriteRecords



```js
amazonaws_timestream_write.WriteRecords({
  "DatabaseName": null,
  "TableName": null,
  "Records": null
}, context)
```

#### Input
* input `object`
  * CommonAttributes
    * Dimensions
      * items [Dimension](#dimension)
    * MeasureName
    * MeasureValue
    * MeasureValueType
    * Time
    * TimeUnit
    * Version
  * DatabaseName **required**
  * Records **required**
    * items [Record](#record)
  * TableName **required**

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedException


### AmazonResourceName
* AmazonResourceName `string`

### ConflictException


### CreateDatabaseRequest
* CreateDatabaseRequest `object`
  * DatabaseName **required**
  * KmsKeyId
  * Tags
    * items [Tag](#tag)

### CreateDatabaseResponse
* CreateDatabaseResponse `object`
  * Database
    * Arn
    * CreationTime
    * DatabaseName
    * KmsKeyId
    * LastUpdatedTime
    * TableCount

### CreateTableRequest
* CreateTableRequest `object`
  * DatabaseName **required**
  * RetentionProperties
    * MagneticStoreRetentionPeriodInDays **required**
    * MemoryStoreRetentionPeriodInHours **required**
  * TableName **required**
  * Tags
    * items [Tag](#tag)

### CreateTableResponse
* CreateTableResponse `object`
  * Table
    * Arn
    * CreationTime
    * DatabaseName
    * LastUpdatedTime
    * RetentionProperties
      * MagneticStoreRetentionPeriodInDays **required**
      * MemoryStoreRetentionPeriodInHours **required**
    * TableName
    * TableStatus

### Database
* Database `object`: A top level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
  * Arn
  * CreationTime
  * DatabaseName
  * KmsKeyId
  * LastUpdatedTime
  * TableCount

### DatabaseList
* DatabaseList `array`
  * items [Database](#database)

### Date
* Date `string`

### DeleteDatabaseRequest
* DeleteDatabaseRequest `object`
  * DatabaseName **required**

### DeleteTableRequest
* DeleteTableRequest `object`
  * DatabaseName **required**
  * TableName **required**

### DescribeDatabaseRequest
* DescribeDatabaseRequest `object`
  * DatabaseName **required**

### DescribeDatabaseResponse
* DescribeDatabaseResponse `object`
  * Database
    * Arn
    * CreationTime
    * DatabaseName
    * KmsKeyId
    * LastUpdatedTime
    * TableCount

### DescribeEndpointsRequest
* DescribeEndpointsRequest `object`

### DescribeEndpointsResponse
* DescribeEndpointsResponse `object`
  * Endpoints **required**
    * items [Endpoint](#endpoint)

### DescribeTableRequest
* DescribeTableRequest `object`
  * DatabaseName **required**
  * TableName **required**

### DescribeTableResponse
* DescribeTableResponse `object`
  * Table
    * Arn
    * CreationTime
    * DatabaseName
    * LastUpdatedTime
    * RetentionProperties
      * MagneticStoreRetentionPeriodInDays **required**
      * MemoryStoreRetentionPeriodInHours **required**
    * TableName
    * TableStatus

### Dimension
* Dimension `object`: Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. 
  * DimensionValueType
  * Name **required**
  * Value **required**

### DimensionValueType
* DimensionValueType `string` (values: VARCHAR)

### Dimensions
* Dimensions `array`
  * items [Dimension](#dimension)

### Endpoint
* Endpoint `object`: Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
  * Address **required**
  * CachePeriodInMinutes **required**

### Endpoints
* Endpoints `array`
  * items [Endpoint](#endpoint)

### InternalServerException


### InvalidEndpointException


### ListDatabasesRequest
* ListDatabasesRequest `object`
  * MaxResults
  * NextToken

### ListDatabasesResponse
* ListDatabasesResponse `object`
  * Databases
    * items [Database](#database)
  * NextToken

### ListTablesRequest
* ListTablesRequest `object`
  * DatabaseName
  * MaxResults
  * NextToken

### ListTablesResponse
* ListTablesResponse `object`
  * NextToken
  * Tables
    * items [Table](#table)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### Long
* Long `integer`

### MagneticStoreRetentionPeriodInDays
* MagneticStoreRetentionPeriodInDays `integer`

### MeasureValueType
* MeasureValueType `string` (values: DOUBLE, BIGINT, VARCHAR, BOOLEAN)

### MemoryStoreRetentionPeriodInHours
* MemoryStoreRetentionPeriodInHours `integer`

### PaginationLimit
* PaginationLimit `integer`

### Record
* Record `object`: Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp. 
  * Dimensions
    * items [Dimension](#dimension)
  * MeasureName
  * MeasureValue
  * MeasureValueType
  * Time
  * TimeUnit
  * Version

### RecordVersion
* RecordVersion `integer`

### Records
* Records `array`
  * items [Record](#record)

### RejectedRecordsException


### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### RetentionProperties
* RetentionProperties `object`: Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store. 
  * MagneticStoreRetentionPeriodInDays **required**
  * MemoryStoreRetentionPeriodInHours **required**

### ServiceQuotaExceededException


### String
* String `string`

### StringValue2048
* StringValue2048 `string`

### StringValue256
* StringValue256 `string`

### Table
* Table `object`: Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table. 
  * Arn
  * CreationTime
  * DatabaseName
  * LastUpdatedTime
  * RetentionProperties
    * MagneticStoreRetentionPeriodInDays **required**
    * MemoryStoreRetentionPeriodInHours **required**
  * TableName
  * TableStatus

### TableList
* TableList `array`
  * items [Table](#table)

### TableStatus
* TableStatus `string` (values: ACTIVE, DELETING)

### Tag
* Tag `object`:  A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment. 
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### TimeUnit
* TimeUnit `string` (values: MILLISECONDS, SECONDS, MICROSECONDS, NANOSECONDS)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDatabaseRequest
* UpdateDatabaseRequest `object`
  * DatabaseName **required**
  * KmsKeyId **required**

### UpdateDatabaseResponse
* UpdateDatabaseResponse `object`
  * Database [Database](#database)

### UpdateTableRequest
* UpdateTableRequest `object`
  * DatabaseName **required**
  * RetentionProperties **required**
    * MagneticStoreRetentionPeriodInDays **required**
    * MemoryStoreRetentionPeriodInHours **required**
  * TableName **required**

### UpdateTableResponse
* UpdateTableResponse `object`
  * Table
    * Arn
    * CreationTime
    * DatabaseName
    * LastUpdatedTime
    * RetentionProperties
      * MagneticStoreRetentionPeriodInDays **required**
      * MemoryStoreRetentionPeriodInHours **required**
    * TableName
    * TableStatus

### ValidationException


### WriteRecordsRequest
* WriteRecordsRequest `object`
  * CommonAttributes
    * Dimensions
      * items [Dimension](#dimension)
    * MeasureName
    * MeasureValue
    * MeasureValueType
    * Time
    * TimeUnit
    * Version
  * DatabaseName **required**
  * Records **required**
    * items [Record](#record)
  * TableName **required**


