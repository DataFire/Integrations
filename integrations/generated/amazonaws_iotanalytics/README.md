# @datafire/amazonaws_iotanalytics

Client library for AWS IoT Analytics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotanalytics
```
```js
let amazonaws_iotanalytics = require('@datafire/amazonaws_iotanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. AWS IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

## Actions

### ListChannels



```js
amazonaws_iotanalytics.ListChannels({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### CreateChannel



```js
amazonaws_iotanalytics.CreateChannel({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata which can be used to manage the channel.
    * items [Tag](#tag)
  * channelName **required** `string`: The name of the channel.
  * channelStorage `object`: Where channel data is stored. You may choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This cannot be changed after creation of the channel.
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited

#### Output
*Output schema unknown*

### DeleteChannel



```js
amazonaws_iotanalytics.DeleteChannel({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`

#### Output
*Output schema unknown*

### DescribeChannel



```js
amazonaws_iotanalytics.DescribeChannel({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`
  * includeStatistics `boolean`

#### Output
* output [DescribeChannelResponse](#describechannelresponse)

### UpdateChannel



```js
amazonaws_iotanalytics.UpdateChannel({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`
  * channelStorage `object`: Where channel data is stored. You may choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This cannot be changed after creation of the channel.
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited

#### Output
*Output schema unknown*

### SampleChannelData



```js
amazonaws_iotanalytics.SampleChannelData({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`
  * maxMessages `integer`
  * startTime `string`
  * endTime `string`

#### Output
* output [SampleChannelDataResponse](#samplechanneldataresponse)

### ListDatasets



```js
amazonaws_iotanalytics.ListDatasets({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### CreateDataset



```js
amazonaws_iotanalytics.CreateDataset({
  "datasetName": "",
  "actions": []
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata which can be used to manage the data set.
    * items [Tag](#tag)
  * actions **required** `array`: A list of actions that create the data set contents.
    * items [DatasetAction](#datasetaction)
  * contentDeliveryRules `array`: When dataset contents are created, they are delivered to destinations specified here.
    * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
  * datasetName **required** `string`: The name of the data set.
  * lateDataRules `array`: A list of data rules that send notifications to Amazon CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
    * items [LateDataRule](#latedatarule)
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited
  * triggers `array`: A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.
    * items [DatasetTrigger](#datasettrigger)
  * versioningConfiguration `object`: Information about the versioning of dataset contents.
    * maxVersions
    * unlimited

#### Output
*Output schema unknown*

### DeleteDataset



```js
amazonaws_iotanalytics.DeleteDataset({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`

#### Output
*Output schema unknown*

### DescribeDataset



```js
amazonaws_iotanalytics.DescribeDataset({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### UpdateDataset



```js
amazonaws_iotanalytics.UpdateDataset({
  "datasetName": "",
  "actions": []
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`
  * actions **required** `array`: A list of <code>DatasetAction</code> objects.
    * items [DatasetAction](#datasetaction)
  * contentDeliveryRules `array`: When dataset contents are created, they are delivered to destinations specified here.
    * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
  * lateDataRules `array`: A list of data rules that send notifications to Amazon CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
    * items [LateDataRule](#latedatarule)
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited
  * triggers `array`: A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.
    * items [DatasetTrigger](#datasettrigger)
  * versioningConfiguration `object`: Information about the versioning of dataset contents.
    * maxVersions
    * unlimited

#### Output
*Output schema unknown*

### DeleteDatasetContent



```js
amazonaws_iotanalytics.DeleteDatasetContent({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`
  * versionId `string`

#### Output
*Output schema unknown*

### GetDatasetContent



```js
amazonaws_iotanalytics.GetDatasetContent({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`
  * versionId `string`

#### Output
* output [GetDatasetContentResponse](#getdatasetcontentresponse)

### CreateDatasetContent



```js
amazonaws_iotanalytics.CreateDatasetContent({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`
  * versionId `string`: The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.

#### Output
* output [CreateDatasetContentResponse](#createdatasetcontentresponse)

### ListDatasetContents



```js
amazonaws_iotanalytics.ListDatasetContents({
  "datasetName": ""
}, context)
```

#### Input
* input `object`
  * datasetName **required** `string`
  * nextToken `string`
  * maxResults `integer`
  * scheduledOnOrAfter `string`
  * scheduledBefore `string`

#### Output
* output [ListDatasetContentsResponse](#listdatasetcontentsresponse)

### ListDatastores



```js
amazonaws_iotanalytics.ListDatastores({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDatastoresResponse](#listdatastoresresponse)

### CreateDatastore



```js
amazonaws_iotanalytics.CreateDatastore({
  "datastoreName": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata which can be used to manage the data store.
    * items [Tag](#tag)
  * datastoreName **required** `string`: The name of the data store.
  * datastoreStorage `object`: Where data store data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You cannot change this storage option after the data store is created.
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * fileFormatConfiguration `object`: <p>Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
    * jsonConfiguration
    * parquetConfiguration
      * schemaDefinition
        * columns
          * items [Column](#column)
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited

#### Output
*Output schema unknown*

### DeleteDatastore



```js
amazonaws_iotanalytics.DeleteDatastore({
  "datastoreName": ""
}, context)
```

#### Input
* input `object`
  * datastoreName **required** `string`

#### Output
*Output schema unknown*

### DescribeDatastore



```js
amazonaws_iotanalytics.DescribeDatastore({
  "datastoreName": ""
}, context)
```

#### Input
* input `object`
  * datastoreName **required** `string`
  * includeStatistics `boolean`

#### Output
* output [DescribeDatastoreResponse](#describedatastoreresponse)

### UpdateDatastore



```js
amazonaws_iotanalytics.UpdateDatastore({
  "datastoreName": ""
}, context)
```

#### Input
* input `object`
  * datastoreName **required** `string`
  * datastoreStorage `object`: Where data store data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You cannot change this storage option after the data store is created.
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * fileFormatConfiguration `object`: <p>Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
    * jsonConfiguration
    * parquetConfiguration
      * schemaDefinition
        * columns
          * items [Column](#column)
  * retentionPeriod `object`: How long, in days, message data is kept.
    * numberOfDays
    * unlimited

#### Output
*Output schema unknown*

### DescribeLoggingOptions



```js
amazonaws_iotanalytics.DescribeLoggingOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeLoggingOptionsResponse](#describeloggingoptionsresponse)

### PutLoggingOptions



```js
amazonaws_iotanalytics.PutLoggingOptions({
  "loggingOptions": {}
}, context)
```

#### Input
* input `object`
  * loggingOptions **required** `object`: Information about logging options.
    * enabled
    * level
    * roleArn

#### Output
*Output schema unknown*

### BatchPutMessage



```js
amazonaws_iotanalytics.BatchPutMessage({
  "channelName": "",
  "messages": []
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`: The name of the channel where the messages are sent.
  * messages **required** `array`: <p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to AWS IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>
    * items [Message](#message)

#### Output
* output [BatchPutMessageResponse](#batchputmessageresponse)

### RunPipelineActivity



```js
amazonaws_iotanalytics.RunPipelineActivity({
  "pipelineActivity": {},
  "payloads": []
}, context)
```

#### Input
* input `object`
  * payloads **required** `array`: The sample message payloads on which the pipeline activity is run.
    * items [MessagePayload](#messagepayload)
  * pipelineActivity **required** `object`: An activity that performs a transformation on a message.
    * addAttributes
      * attributes **required**
      * name **required**
      * next
    * channel
      * channelName **required**
      * name **required**
      * next
    * datastore
      * datastoreName **required**
      * name **required**
    * deviceRegistryEnrich
      * attribute **required**
      * name **required**
      * next
      * roleArn **required**
      * thingName **required**
    * deviceShadowEnrich
      * attribute **required**
      * name **required**
      * next
      * roleArn **required**
      * thingName **required**
    * filter
      * filter **required**
      * name **required**
      * next
    * lambda
      * batchSize **required**
      * lambdaName **required**
      * name **required**
      * next
    * math
      * attribute **required**
      * math **required**
      * name **required**
      * next
    * removeAttributes
      * attributes **required**
        * items [AttributeName](#attributename)
      * name **required**
      * next
    * selectAttributes
      * attributes **required**
        * items [AttributeName](#attributename)
      * name **required**
      * next

#### Output
* output [RunPipelineActivityResponse](#runpipelineactivityresponse)

### ListPipelines



```js
amazonaws_iotanalytics.ListPipelines({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListPipelinesResponse](#listpipelinesresponse)

### CreatePipeline



```js
amazonaws_iotanalytics.CreatePipeline({
  "pipelineName": "",
  "pipelineActivities": []
}, context)
```

#### Input
* input `object`
  * tags `array`: Metadata which can be used to manage the pipeline.
    * items [Tag](#tag)
  * pipelineActivities **required** `array`: <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
    * items [PipelineActivity](#pipelineactivity)
  * pipelineName **required** `string`: The name of the pipeline.

#### Output
*Output schema unknown*

### DeletePipeline



```js
amazonaws_iotanalytics.DeletePipeline({
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** `string`

#### Output
*Output schema unknown*

### DescribePipeline



```js
amazonaws_iotanalytics.DescribePipeline({
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** `string`

#### Output
* output [DescribePipelineResponse](#describepipelineresponse)

### UpdatePipeline



```js
amazonaws_iotanalytics.UpdatePipeline({
  "pipelineName": "",
  "pipelineActivities": []
}, context)
```

#### Input
* input `object`
  * pipelineName **required** `string`
  * pipelineActivities **required** `array`: <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
    * items [PipelineActivity](#pipelineactivity)

#### Output
*Output schema unknown*

### StartPipelineReprocessing



```js
amazonaws_iotanalytics.StartPipelineReprocessing({
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** `string`
  * channelMessages `object`: Specifies one or more sets of channel messages.
    * s3Paths
      * items [S3PathChannelMessage](#s3pathchannelmessage)
  * endTime `string`: <p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>
  * startTime `string`: <p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>

#### Output
* output [StartPipelineReprocessingResponse](#startpipelinereprocessingresponse)

### CancelPipelineReprocessing



```js
amazonaws_iotanalytics.CancelPipelineReprocessing({
  "pipelineName": "",
  "reprocessingId": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** `string`
  * reprocessingId **required** `string`

#### Output
* output [CancelPipelineReprocessingResponse](#cancelpipelinereprocessingresponse)

### ListTagsForResource



```js
amazonaws_iotanalytics.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_iotanalytics.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `array`: The new or modified tags for the resource.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_iotanalytics.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### ActivityBatchSize
* ActivityBatchSize `integer`

### ActivityName
* ActivityName `string`

### AddAttributesActivity
* AddAttributesActivity `object`: An activity that adds other attributes based on existing attributes in the message.
  * attributes **required**
  * name **required**
  * next

### AttributeName
* AttributeName `string`

### AttributeNameMapping
* AttributeNameMapping `object`

### AttributeNames
* AttributeNames `array`
  * items [AttributeName](#attributename)

### BatchPutMessageErrorEntries
* BatchPutMessageErrorEntries `array`
  * items [BatchPutMessageErrorEntry](#batchputmessageerrorentry)

### BatchPutMessageErrorEntry
* BatchPutMessageErrorEntry `object`: Contains informations about errors.
  * errorCode
  * errorMessage
  * messageId

### BatchPutMessageRequest
* BatchPutMessageRequest `object`
  * channelName **required**
  * messages **required**
    * items [Message](#message)

### BatchPutMessageResponse
* BatchPutMessageResponse `object`
  * batchPutMessageErrorEntries
    * items [BatchPutMessageErrorEntry](#batchputmessageerrorentry)

### BucketKeyExpression
* BucketKeyExpression `string`

### BucketName
* BucketName `string`

### CancelPipelineReprocessingRequest
* CancelPipelineReprocessingRequest `object`

### CancelPipelineReprocessingResponse
* CancelPipelineReprocessingResponse `object`

### Channel
* Channel `object`: A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
  * arn
  * creationTime
  * lastMessageArrivalTime
  * lastUpdateTime
  * name
  * retentionPeriod
    * numberOfDays
    * unlimited
  * status
  * storage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3

### ChannelActivity
* ChannelActivity `object`: The activity that determines the source of the messages to be processed.
  * channelName **required**
  * name **required**
  * next

### ChannelArn
* ChannelArn `string`

### ChannelMessages
* ChannelMessages `object`: Specifies one or more sets of channel messages.
  * s3Paths
    * items [S3PathChannelMessage](#s3pathchannelmessage)

### ChannelName
* ChannelName `string`

### ChannelStatistics
* ChannelStatistics `object`: Statistics information about the channel.
  * size
    * estimatedOn
    * estimatedSizeInBytes

### ChannelStatus
* ChannelStatus `string` (values: CREATING, ACTIVE, DELETING)

### ChannelStorage
* ChannelStorage `object`: Where channel data is stored. You may choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This cannot be changed after creation of the channel.
  * customerManagedS3
    * bucket **required**
    * keyPrefix
    * roleArn **required**
  * serviceManagedS3

### ChannelStorageSummary
* ChannelStorageSummary `object`: Where channel data is stored.
  * customerManagedS3
    * bucket
    * keyPrefix
    * roleArn
  * serviceManagedS3

### ChannelSummaries
* ChannelSummaries `array`
  * items [ChannelSummary](#channelsummary)

### ChannelSummary
* ChannelSummary `object`: A summary of information about a channel.
  * channelName
  * channelStorage
    * customerManagedS3
      * bucket
      * keyPrefix
      * roleArn
    * serviceManagedS3
  * creationTime
  * lastMessageArrivalTime
  * lastUpdateTime
  * status

### Column
* Column `object`: Contains information about a column that stores your data.
  * name **required**
  * type **required**

### ColumnDataType
* ColumnDataType `string`

### ColumnName
* ColumnName `string`

### Columns
* Columns `array`
  * items [Column](#column)

### ComputeType
* ComputeType `string` (values: ACU_1, ACU_2)

### ContainerDatasetAction
* ContainerDatasetAction `object`: Information required to run the <code>containerAction</code> to produce dataset contents.
  * executionRoleArn **required**
  * image **required**
  * resourceConfiguration **required**
    * computeType **required**
    * volumeSizeInGB **required**
  * variables
    * items [Variable](#variable)

### CreateChannelRequest
* CreateChannelRequest `object`
  * tags
    * items [Tag](#tag)
  * channelName **required**
  * channelStorage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * retentionPeriod
    * numberOfDays
    * unlimited

### CreateChannelResponse
* CreateChannelResponse `object`
  * channelArn
  * channelName
  * retentionPeriod
    * numberOfDays
    * unlimited

### CreateDatasetContentRequest
* CreateDatasetContentRequest `object`
  * versionId

### CreateDatasetContentResponse
* CreateDatasetContentResponse `object`
  * versionId

### CreateDatasetRequest
* CreateDatasetRequest `object`
  * tags
    * items [Tag](#tag)
  * actions **required**
    * items [DatasetAction](#datasetaction)
  * contentDeliveryRules
    * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
  * datasetName **required**
  * lateDataRules
    * items [LateDataRule](#latedatarule)
  * retentionPeriod
    * numberOfDays
    * unlimited
  * triggers
    * items [DatasetTrigger](#datasettrigger)
  * versioningConfiguration
    * maxVersions
    * unlimited

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * datasetArn
  * datasetName
  * retentionPeriod
    * numberOfDays
    * unlimited

### CreateDatastoreRequest
* CreateDatastoreRequest `object`
  * tags
    * items [Tag](#tag)
  * datastoreName **required**
  * datastoreStorage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * fileFormatConfiguration
    * jsonConfiguration
    * parquetConfiguration
      * schemaDefinition
        * columns
          * items [Column](#column)
  * retentionPeriod
    * numberOfDays
    * unlimited

### CreateDatastoreResponse
* CreateDatastoreResponse `object`
  * datastoreArn
  * datastoreName
  * retentionPeriod
    * numberOfDays
    * unlimited

### CreatePipelineRequest
* CreatePipelineRequest `object`
  * tags
    * items [Tag](#tag)
  * pipelineActivities **required**
    * items [PipelineActivity](#pipelineactivity)
  * pipelineName **required**

### CreatePipelineResponse
* CreatePipelineResponse `object`
  * pipelineArn
  * pipelineName

### CustomerManagedChannelS3Storage
* CustomerManagedChannelS3Storage `object`: Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You cannot change the choice of service-managed or customer-managed S3 storage after the channel is created.
  * bucket **required**
  * keyPrefix
  * roleArn **required**

### CustomerManagedChannelS3StorageSummary
* CustomerManagedChannelS3StorageSummary `object`: Used to store channel data in an S3 bucket that you manage.
  * bucket
  * keyPrefix
  * roleArn

### CustomerManagedDatastoreS3Storage
* CustomerManagedDatastoreS3Storage `object`: Use this to store data store data in an S3 bucket that you manage. When customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You cannot change the choice of service-managed or customer-managed S3 storage after the data store is created.
  * bucket **required**
  * keyPrefix
  * roleArn **required**

### CustomerManagedDatastoreS3StorageSummary
* CustomerManagedDatastoreS3StorageSummary `object`: Used to store data store data in an S3 bucket that you manage.
  * bucket
  * keyPrefix
  * roleArn

### Dataset
* Dataset `object`: Information about a data set.
  * actions
    * items [DatasetAction](#datasetaction)
  * arn
  * contentDeliveryRules
    * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
  * creationTime
  * lastUpdateTime
  * lateDataRules
    * items [LateDataRule](#latedatarule)
  * name
  * retentionPeriod
    * numberOfDays
    * unlimited
  * status
  * triggers
    * items [DatasetTrigger](#datasettrigger)
  * versioningConfiguration
    * maxVersions
    * unlimited

### DatasetAction
* DatasetAction `object`: A <code>DatasetAction</code> object that specifies how data set contents are automatically created.
  * actionName
  * containerAction
    * executionRoleArn **required**
    * image **required**
    * resourceConfiguration **required**
      * computeType **required**
      * volumeSizeInGB **required**
    * variables
      * items [Variable](#variable)
  * queryAction
    * filters
      * items [QueryFilter](#queryfilter)
    * sqlQuery **required**

### DatasetActionName
* DatasetActionName `string`

### DatasetActionSummaries
* DatasetActionSummaries `array`
  * items [DatasetActionSummary](#datasetactionsummary)

### DatasetActionSummary
* DatasetActionSummary `object`: Information about the action that automatically creates the dataset's contents.
  * actionName
  * actionType

### DatasetActionType
* DatasetActionType `string` (values: QUERY, CONTAINER)

### DatasetActions
* DatasetActions `array`
  * items [DatasetAction](#datasetaction)

### DatasetArn
* DatasetArn `string`

### DatasetContentDeliveryDestination
* DatasetContentDeliveryDestination `object`: The destination to which dataset contents are delivered.
  * iotEventsDestinationConfiguration
    * inputName **required**
    * roleArn **required**
  * s3DestinationConfiguration
    * bucket **required**
    * glueConfiguration
      * databaseName **required**
      * tableName **required**
    * key **required**
    * roleArn **required**

### DatasetContentDeliveryRule
* DatasetContentDeliveryRule `object`: When dataset contents are created, they are delivered to destination specified here.
  * destination **required**
    * iotEventsDestinationConfiguration
      * inputName **required**
      * roleArn **required**
    * s3DestinationConfiguration
      * bucket **required**
      * glueConfiguration
        * databaseName **required**
        * tableName **required**
      * key **required**
      * roleArn **required**
  * entryName

### DatasetContentDeliveryRules
* DatasetContentDeliveryRules `array`
  * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)

### DatasetContentState
* DatasetContentState `string` (values: CREATING, SUCCEEDED, FAILED)

### DatasetContentStatus
* DatasetContentStatus `object`: The state of the data set contents and the reason they are in this state.
  * reason
  * state

### DatasetContentSummaries
* DatasetContentSummaries `array`
  * items [DatasetContentSummary](#datasetcontentsummary)

### DatasetContentSummary
* DatasetContentSummary `object`: Summary information about dataset contents.
  * completionTime
  * creationTime
  * scheduleTime
  * status
    * reason
    * state
  * version

### DatasetContentVersion
* DatasetContentVersion `string`

### DatasetContentVersionValue
* DatasetContentVersionValue `object`: The dataset whose latest contents are used as input to the notebook or application.
  * datasetName **required**

### DatasetEntries
* DatasetEntries `array`
  * items [DatasetEntry](#datasetentry)

### DatasetEntry
* DatasetEntry `object`: The reference to a data set entry.
  * dataURI
  * entryName

### DatasetName
* DatasetName `string`

### DatasetStatus
* DatasetStatus `string` (values: CREATING, ACTIVE, DELETING)

### DatasetSummaries
* DatasetSummaries `array`
  * items [DatasetSummary](#datasetsummary)

### DatasetSummary
* DatasetSummary `object`: A summary of information about a data set.
  * actions
    * items [DatasetActionSummary](#datasetactionsummary)
  * creationTime
  * datasetName
  * lastUpdateTime
  * status
  * triggers
    * items [DatasetTrigger](#datasettrigger)

### DatasetTrigger
* DatasetTrigger `object`: The <code>DatasetTrigger</code> that specifies when the data set is automatically updated.
  * dataset
    * name **required**
  * schedule
    * expression

### DatasetTriggers
* DatasetTriggers `array`
  * items [DatasetTrigger](#datasettrigger)

### Datastore
* Datastore `object`: Information about a data store.
  * arn
  * creationTime
  * fileFormatConfiguration
    * jsonConfiguration
    * parquetConfiguration
      * schemaDefinition
        * columns
          * items [Column](#column)
  * lastMessageArrivalTime
  * lastUpdateTime
  * name
  * retentionPeriod
    * numberOfDays
    * unlimited
  * status
  * storage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3

### DatastoreActivity
* DatastoreActivity `object`: The datastore activity that specifies where to store the processed data.
  * datastoreName **required**
  * name **required**

### DatastoreArn
* DatastoreArn `string`

### DatastoreName
* DatastoreName `string`

### DatastoreStatistics
* DatastoreStatistics `object`: Statistical information about the data store.
  * size
    * estimatedOn
    * estimatedSizeInBytes

### DatastoreStatus
* DatastoreStatus `string` (values: CREATING, ACTIVE, DELETING)

### DatastoreStorage
* DatastoreStorage `object`: Where data store data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You cannot change this storage option after the data store is created.
  * customerManagedS3
    * bucket **required**
    * keyPrefix
    * roleArn **required**
  * serviceManagedS3

### DatastoreStorageSummary
* DatastoreStorageSummary `object`: Where data store data is stored.
  * customerManagedS3
    * bucket
    * keyPrefix
    * roleArn
  * serviceManagedS3

### DatastoreSummaries
* DatastoreSummaries `array`
  * items [DatastoreSummary](#datastoresummary)

### DatastoreSummary
* DatastoreSummary `object`: A summary of information about a data store.
  * creationTime
  * datastoreName
  * datastoreStorage
    * customerManagedS3
      * bucket
      * keyPrefix
      * roleArn
    * serviceManagedS3
  * fileFormatType
  * lastMessageArrivalTime
  * lastUpdateTime
  * status

### DeleteChannelRequest
* DeleteChannelRequest `object`

### DeleteDatasetContentRequest
* DeleteDatasetContentRequest `object`

### DeleteDatasetRequest
* DeleteDatasetRequest `object`

### DeleteDatastoreRequest
* DeleteDatastoreRequest `object`

### DeletePipelineRequest
* DeletePipelineRequest `object`

### DeltaTime
* DeltaTime `object`: Used to limit data to that which has arrived since the last execution of the action.
  * offsetSeconds **required**
  * timeExpression **required**

### DeltaTimeSessionWindowConfiguration
* DeltaTimeSessionWindowConfiguration `object`: <p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>AWS IoT Analytics User Guide</i>.</p>
  * timeoutInMinutes **required**

### DescribeChannelRequest
* DescribeChannelRequest `object`

### DescribeChannelResponse
* DescribeChannelResponse `object`
  * channel
    * arn
    * creationTime
    * lastMessageArrivalTime
    * lastUpdateTime
    * name
    * retentionPeriod
      * numberOfDays
      * unlimited
    * status
    * storage
      * customerManagedS3
        * bucket **required**
        * keyPrefix
        * roleArn **required**
      * serviceManagedS3
  * statistics
    * size
      * estimatedOn
      * estimatedSizeInBytes

### DescribeDatasetRequest
* DescribeDatasetRequest `object`

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * dataset
    * actions
      * items [DatasetAction](#datasetaction)
    * arn
    * contentDeliveryRules
      * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
    * creationTime
    * lastUpdateTime
    * lateDataRules
      * items [LateDataRule](#latedatarule)
    * name
    * retentionPeriod
      * numberOfDays
      * unlimited
    * status
    * triggers
      * items [DatasetTrigger](#datasettrigger)
    * versioningConfiguration
      * maxVersions
      * unlimited

### DescribeDatastoreRequest
* DescribeDatastoreRequest `object`

### DescribeDatastoreResponse
* DescribeDatastoreResponse `object`
  * datastore
    * arn
    * creationTime
    * fileFormatConfiguration
      * jsonConfiguration
      * parquetConfiguration
        * schemaDefinition
          * columns
    * lastMessageArrivalTime
    * lastUpdateTime
    * name
    * retentionPeriod
      * numberOfDays
      * unlimited
    * status
    * storage
      * customerManagedS3
        * bucket **required**
        * keyPrefix
        * roleArn **required**
      * serviceManagedS3
  * statistics
    * size
      * estimatedOn
      * estimatedSizeInBytes

### DescribeLoggingOptionsRequest
* DescribeLoggingOptionsRequest `object`

### DescribeLoggingOptionsResponse
* DescribeLoggingOptionsResponse `object`
  * loggingOptions
    * enabled **required**
    * level **required**
    * roleArn **required**

### DescribePipelineRequest
* DescribePipelineRequest `object`

### DescribePipelineResponse
* DescribePipelineResponse `object`
  * pipeline
    * activities
      * items [PipelineActivity](#pipelineactivity)
    * arn
    * creationTime
    * lastUpdateTime
    * name
    * reprocessingSummaries
      * items [ReprocessingSummary](#reprocessingsummary)

### DeviceRegistryEnrichActivity
* DeviceRegistryEnrichActivity `object`: An activity that adds data from the AWS IoT device registry to your message.
  * attribute **required**
  * name **required**
  * next
  * roleArn **required**
  * thingName **required**

### DeviceShadowEnrichActivity
* DeviceShadowEnrichActivity `object`: An activity that adds information from the AWS IoT Device Shadow service to a message.
  * attribute **required**
  * name **required**
  * next
  * roleArn **required**
  * thingName **required**

### DoubleValue
* DoubleValue `number`

### EndTime
* EndTime `string`

### EntryName
* EntryName `string`

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### EstimatedResourceSize
* EstimatedResourceSize `object`: The estimated size of the resource.
  * estimatedOn
  * estimatedSizeInBytes

### FileFormatConfiguration
* FileFormatConfiguration `object`: <p>Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
  * jsonConfiguration
  * parquetConfiguration
    * schemaDefinition
      * columns
        * items [Column](#column)

### FileFormatType
* FileFormatType `string` (values: JSON, PARQUET)

### FilterActivity
* FilterActivity `object`: An activity that filters a message based on its attributes.
  * filter **required**
  * name **required**
  * next

### FilterExpression
* FilterExpression `string`

### GetDatasetContentRequest
* GetDatasetContentRequest `object`

### GetDatasetContentResponse
* GetDatasetContentResponse `object`
  * entries
    * items [DatasetEntry](#datasetentry)
  * status
    * reason
    * state
  * timestamp

### GlueConfiguration
* GlueConfiguration `object`: Configuration information for coordination with AWS Glue, a fully managed extract, transform and load (ETL) service.
  * databaseName **required**
  * tableName **required**

### GlueDatabaseName
* GlueDatabaseName `string`

### GlueTableName
* GlueTableName `string`

### Image
* Image `string`

### IncludeStatisticsFlag
* IncludeStatisticsFlag `boolean`

### InternalFailureException


### InvalidRequestException


### IotEventsDestinationConfiguration
* IotEventsDestinationConfiguration `object`: Configuration information for delivery of dataset contents to AWS IoT Events.
  * inputName **required**
  * roleArn **required**

### IotEventsInputName
* IotEventsInputName `string`

### JsonConfiguration
* JsonConfiguration `object`: Contains the configuration information of the JSON format.

### LambdaActivity
* LambdaActivity `object`: An activity that runs a Lambda function to modify the message.
  * batchSize **required**
  * lambdaName **required**
  * name **required**
  * next

### LambdaName
* LambdaName `string`

### LateDataRule
* LateDataRule `object`: A structure that contains the name and configuration information of a late data rule.
  * ruleConfiguration **required**
    * deltaTimeSessionWindowConfiguration
      * timeoutInMinutes **required**
  * ruleName

### LateDataRuleConfiguration
* LateDataRuleConfiguration `object`: The information needed to configure a delta time session window.
  * deltaTimeSessionWindowConfiguration
    * timeoutInMinutes **required**

### LateDataRuleName
* LateDataRuleName `string`

### LateDataRules
* LateDataRules `array`
  * items [LateDataRule](#latedatarule)

### LimitExceededException


### ListChannelsRequest
* ListChannelsRequest `object`

### ListChannelsResponse
* ListChannelsResponse `object`
  * channelSummaries
    * items [ChannelSummary](#channelsummary)
  * nextToken

### ListDatasetContentsRequest
* ListDatasetContentsRequest `object`

### ListDatasetContentsResponse
* ListDatasetContentsResponse `object`
  * datasetContentSummaries
    * items [DatasetContentSummary](#datasetcontentsummary)
  * nextToken

### ListDatasetsRequest
* ListDatasetsRequest `object`

### ListDatasetsResponse
* ListDatasetsResponse `object`
  * datasetSummaries
    * items [DatasetSummary](#datasetsummary)
  * nextToken

### ListDatastoresRequest
* ListDatastoresRequest `object`

### ListDatastoresResponse
* ListDatastoresResponse `object`
  * datastoreSummaries
    * items [DatastoreSummary](#datastoresummary)
  * nextToken

### ListPipelinesRequest
* ListPipelinesRequest `object`

### ListPipelinesResponse
* ListPipelinesResponse `object`
  * nextToken
  * pipelineSummaries
    * items [PipelineSummary](#pipelinesummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### LogResult
* LogResult `string`

### LoggingEnabled
* LoggingEnabled `boolean`

### LoggingLevel
* LoggingLevel `string` (values: ERROR)

### LoggingOptions
* LoggingOptions `object`: Information about logging options.
  * enabled **required**
  * level **required**
  * roleArn **required**

### MathActivity
* MathActivity `object`: An activity that computes an arithmetic expression using the message's attributes.
  * attribute **required**
  * math **required**
  * name **required**
  * next

### MathExpression
* MathExpression `string`

### MaxMessages
* MaxMessages `integer`

### MaxResults
* MaxResults `integer`

### MaxVersions
* MaxVersions `integer`

### Message
* Message `object`: Information about a message.
  * messageId **required**
  * payload **required**

### MessageId
* MessageId `string`

### MessagePayload
* MessagePayload `string`

### MessagePayloads
* MessagePayloads `array`
  * items [MessagePayload](#messagepayload)

### Messages
* Messages `array`
  * items [Message](#message)

### NextToken
* NextToken `string`

### OffsetSeconds
* OffsetSeconds `integer`

### OutputFileName
* OutputFileName `string`

### OutputFileUriValue
* OutputFileUriValue `object`: The value of the variable as a structure that specifies an output file URI.
  * fileName **required**

### ParquetConfiguration
* ParquetConfiguration `object`: Contains the configuration information of the Parquet format.
  * schemaDefinition
    * columns
      * items [Column](#column)

### Pipeline
* Pipeline `object`: Contains information about a pipeline.
  * activities
    * items [PipelineActivity](#pipelineactivity)
  * arn
  * creationTime
  * lastUpdateTime
  * name
  * reprocessingSummaries
    * items [ReprocessingSummary](#reprocessingsummary)

### PipelineActivities
* PipelineActivities `array`
  * items [PipelineActivity](#pipelineactivity)

### PipelineActivity
* PipelineActivity `object`: An activity that performs a transformation on a message.
  * addAttributes
    * attributes **required**
    * name **required**
    * next
  * channel
    * channelName **required**
    * name **required**
    * next
  * datastore
    * datastoreName **required**
    * name **required**
  * deviceRegistryEnrich
    * attribute **required**
    * name **required**
    * next
    * roleArn **required**
    * thingName **required**
  * deviceShadowEnrich
    * attribute **required**
    * name **required**
    * next
    * roleArn **required**
    * thingName **required**
  * filter
    * filter **required**
    * name **required**
    * next
  * lambda
    * batchSize **required**
    * lambdaName **required**
    * name **required**
    * next
  * math
    * attribute **required**
    * math **required**
    * name **required**
    * next
  * removeAttributes
    * attributes **required**
      * items [AttributeName](#attributename)
    * name **required**
    * next
  * selectAttributes
    * attributes **required**
      * items [AttributeName](#attributename)
    * name **required**
    * next

### PipelineArn
* PipelineArn `string`

### PipelineName
* PipelineName `string`

### PipelineSummaries
* PipelineSummaries `array`
  * items [PipelineSummary](#pipelinesummary)

### PipelineSummary
* PipelineSummary `object`: A summary of information about a pipeline.
  * creationTime
  * lastUpdateTime
  * pipelineName
  * reprocessingSummaries
    * items [ReprocessingSummary](#reprocessingsummary)

### PresignedURI
* PresignedURI `string`

### PutLoggingOptionsRequest
* PutLoggingOptionsRequest `object`
  * loggingOptions **required**
    * enabled **required**
    * level **required**
    * roleArn **required**

### QueryFilter
* QueryFilter `object`: Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
  * deltaTime
    * offsetSeconds **required**
    * timeExpression **required**

### QueryFilters
* QueryFilters `array`
  * items [QueryFilter](#queryfilter)

### Reason
* Reason `string`

### RemoveAttributesActivity
* RemoveAttributesActivity `object`: An activity that removes attributes from a message.
  * attributes **required**
    * items [AttributeName](#attributename)
  * name **required**
  * next

### ReprocessingId
* ReprocessingId `string`

### ReprocessingStatus
* ReprocessingStatus `string` (values: RUNNING, SUCCEEDED, CANCELLED, FAILED)

### ReprocessingSummaries
* ReprocessingSummaries `array`
  * items [ReprocessingSummary](#reprocessingsummary)

### ReprocessingSummary
* ReprocessingSummary `object`: Information about pipeline reprocessing.
  * creationTime
  * id
  * status

### ResourceAlreadyExistsException


### ResourceArn
* ResourceArn `string`

### ResourceConfiguration
* ResourceConfiguration `object`: The configuration of the resource used to execute the <code>containerAction</code>.
  * computeType **required**
  * volumeSizeInGB **required**

### ResourceNotFoundException


### RetentionPeriod
* RetentionPeriod `object`: How long, in days, message data is kept.
  * numberOfDays
  * unlimited

### RetentionPeriodInDays
* RetentionPeriodInDays `integer`

### RoleArn
* RoleArn `string`

### RunPipelineActivityRequest
* RunPipelineActivityRequest `object`
  * payloads **required**
    * items [MessagePayload](#messagepayload)
  * pipelineActivity **required**
    * addAttributes
      * attributes **required**
      * name **required**
      * next
    * channel
      * channelName **required**
      * name **required**
      * next
    * datastore
      * datastoreName **required**
      * name **required**
    * deviceRegistryEnrich
      * attribute **required**
      * name **required**
      * next
      * roleArn **required**
      * thingName **required**
    * deviceShadowEnrich
      * attribute **required**
      * name **required**
      * next
      * roleArn **required**
      * thingName **required**
    * filter
      * filter **required**
      * name **required**
      * next
    * lambda
      * batchSize **required**
      * lambdaName **required**
      * name **required**
      * next
    * math
      * attribute **required**
      * math **required**
      * name **required**
      * next
    * removeAttributes
      * attributes **required**
        * items [AttributeName](#attributename)
      * name **required**
      * next
    * selectAttributes
      * attributes **required**
        * items [AttributeName](#attributename)
      * name **required**
      * next

### RunPipelineActivityResponse
* RunPipelineActivityResponse `object`
  * logResult
  * payloads
    * items [MessagePayload](#messagepayload)

### S3DestinationConfiguration
* S3DestinationConfiguration `object`: Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
  * bucket **required**
  * glueConfiguration
    * databaseName **required**
    * tableName **required**
  * key **required**
  * roleArn **required**

### S3KeyPrefix
* S3KeyPrefix `string`

### S3PathChannelMessage
* S3PathChannelMessage `string`

### S3PathChannelMessages
* S3PathChannelMessages `array`
  * items [S3PathChannelMessage](#s3pathchannelmessage)

### SampleChannelDataRequest
* SampleChannelDataRequest `object`

### SampleChannelDataResponse
* SampleChannelDataResponse `object`
  * payloads
    * items [MessagePayload](#messagepayload)

### Schedule
* Schedule `object`: The schedule for when to trigger an update.
  * expression

### ScheduleExpression
* ScheduleExpression `string`

### SchemaDefinition
* SchemaDefinition `object`: Information needed to define a schema.
  * columns
    * items [Column](#column)

### SelectAttributesActivity
* SelectAttributesActivity `object`: Creates a new message using only the specified attributes from the original message.
  * attributes **required**
    * items [AttributeName](#attributename)
  * name **required**
  * next

### ServiceManagedChannelS3Storage
* ServiceManagedChannelS3Storage `object`: Use this to store channel data in an S3 bucket managed by AWS IoT Analytics. You cannot change the choice of service-managed or customer-managed S3 storage after the channel is created.

### ServiceManagedChannelS3StorageSummary
* ServiceManagedChannelS3StorageSummary `object`: Used to store channel data in an S3 bucket managed by AWS IoT Analytics.

### ServiceManagedDatastoreS3Storage
* ServiceManagedDatastoreS3Storage `object`: Use this to store data store data in an S3 bucket managed by AWS IoT Analytics. You cannot change the choice of service-managed or customer-managed S3 storage after the data store is created.

### ServiceManagedDatastoreS3StorageSummary
* ServiceManagedDatastoreS3StorageSummary `object`: Used to store data store data in an S3 bucket managed by AWS IoT Analytics.

### ServiceUnavailableException


### SessionTimeoutInMinutes
* SessionTimeoutInMinutes `integer`

### SizeInBytes
* SizeInBytes `number`

### SqlQuery
* SqlQuery `string`

### SqlQueryDatasetAction
* SqlQueryDatasetAction `object`: The SQL query to modify the message.
  * filters
    * items [QueryFilter](#queryfilter)
  * sqlQuery **required**

### StartPipelineReprocessingRequest
* StartPipelineReprocessingRequest `object`
  * channelMessages
    * s3Paths
      * items [S3PathChannelMessage](#s3pathchannelmessage)
  * endTime
  * startTime

### StartPipelineReprocessingResponse
* StartPipelineReprocessingResponse `object`
  * reprocessingId

### StartTime
* StartTime `string`

### StringValue
* StringValue `string`

### Tag
* Tag `object`: A set of key-value pairs that are used to manage the resource.
  * key **required**
  * value **required**

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
  * tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### TimeExpression
* TimeExpression `string`

### Timestamp
* Timestamp `string`

### TriggeringDataset
* TriggeringDataset `object`: Information about the dataset whose content generation triggers the new dataset content generation.
  * name **required**

### UnlimitedRetentionPeriod
* UnlimitedRetentionPeriod `boolean`

### UnlimitedVersioning
* UnlimitedVersioning `boolean`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateChannelRequest
* UpdateChannelRequest `object`
  * channelStorage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * retentionPeriod
    * numberOfDays
    * unlimited

### UpdateDatasetRequest
* UpdateDatasetRequest `object`
  * actions **required**
    * items [DatasetAction](#datasetaction)
  * contentDeliveryRules
    * items [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)
  * lateDataRules
    * items [LateDataRule](#latedatarule)
  * retentionPeriod
    * numberOfDays
    * unlimited
  * triggers
    * items [DatasetTrigger](#datasettrigger)
  * versioningConfiguration
    * maxVersions
    * unlimited

### UpdateDatastoreRequest
* UpdateDatastoreRequest `object`
  * datastoreStorage
    * customerManagedS3
      * bucket **required**
      * keyPrefix
      * roleArn **required**
    * serviceManagedS3
  * fileFormatConfiguration
    * jsonConfiguration
    * parquetConfiguration
      * schemaDefinition
        * columns
          * items [Column](#column)
  * retentionPeriod
    * numberOfDays
    * unlimited

### UpdatePipelineRequest
* UpdatePipelineRequest `object`
  * pipelineActivities **required**
    * items [PipelineActivity](#pipelineactivity)

### Variable
* Variable `object`: An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
  * datasetContentVersionValue
    * datasetName **required**
  * doubleValue
  * name **required**
  * outputFileUriValue
    * fileName **required**
  * stringValue

### VariableName
* VariableName `string`

### Variables
* Variables `array`
  * items [Variable](#variable)

### VersioningConfiguration
* VersioningConfiguration `object`: Information about the versioning of dataset contents.
  * maxVersions
  * unlimited

### VolumeSizeInGB
* VolumeSizeInGB `integer`


