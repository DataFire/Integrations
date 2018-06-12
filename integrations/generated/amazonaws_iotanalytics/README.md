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

amazonaws_iotanalytics.ListChannels({}).then(data => {
  console.log(data);
});
```

## Description

<p>AWS IoT Analytics provides advanced data analysis for AWS IoT. It allows you to collect large amounts of device data, process messages, store them, and then query the data and run sophisticated analytics to make accurate decisions in your IoT applications and machine learning use cases. AWS IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result, the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>AWS IoT Analytics automates each of the steps required to analyze data from IoT devices. AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. AWS IoT Analytics includes models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

## Actions

### ListChannels



```js
amazonaws_iotanalytics.ListChannels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

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
  * channelName **required** [ChannelName](#channelname)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

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
  * retentionPeriod [RetentionPeriod](#retentionperiod)

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

#### Output
* output [SampleChannelDataResponse](#samplechanneldataresponse)

### ListDatasets



```js
amazonaws_iotanalytics.ListDatasets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

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
  * actions **required** [DatasetActions](#datasetactions)
  * datasetName **required** [DatasetName](#datasetname)
  * triggers [DatasetTriggers](#datasettriggers)

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
  * actions **required** [DatasetActions](#datasetactions)
  * triggers [DatasetTriggers](#datasettriggers)

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

#### Output
*Output schema unknown*

### ListDatastores



```js
amazonaws_iotanalytics.ListDatastores({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

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
  * datastoreName **required** [DatastoreName](#datastorename)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

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
  * retentionPeriod [RetentionPeriod](#retentionperiod)

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
  "loggingOptions": {
    "roleArn": "",
    "level": "",
    "enabled": true
  }
}, context)
```

#### Input
* input `object`
  * loggingOptions **required** [LoggingOptions](#loggingoptions)

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
  * channelName **required** [ChannelName](#channelname)
  * messages **required** [Messages](#messages)

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
  * payloads **required** [MessagePayloads](#messagepayloads)
  * pipelineActivity **required** [PipelineActivity](#pipelineactivity)

#### Output
* output [RunPipelineActivityResponse](#runpipelineactivityresponse)

### ListPipelines



```js
amazonaws_iotanalytics.ListPipelines({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

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
  * pipelineActivities **required** [PipelineActivities](#pipelineactivities)
  * pipelineName **required** [PipelineName](#pipelinename)

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
  * pipelineActivities **required** [PipelineActivities](#pipelineactivities)

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
  * endTime [EndTime](#endtime)
  * startTime [StartTime](#starttime)

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



## Definitions

### ActivityBatchSize
* ActivityBatchSize `integer`

### ActivityName
* ActivityName `string`

### AddAttributesActivity
* AddAttributesActivity `object`: An activity that adds other attributes based on existing attributes in the message.
  * attributes **required** [AttributeNameMapping](#attributenamemapping)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### AttributeName
* AttributeName `string`

### AttributeNameMapping
* AttributeNameMapping `array`
  * items `object`
    * key [AttributeName](#attributename)
    * value [AttributeName](#attributename)

### AttributeNames
* AttributeNames `array`
  * items [AttributeName](#attributename)

### BatchPutMessageErrorEntries
* BatchPutMessageErrorEntries `array`
  * items [BatchPutMessageErrorEntry](#batchputmessageerrorentry)

### BatchPutMessageErrorEntry
* BatchPutMessageErrorEntry `object`: Contains informations about errors.
  * errorCode [ErrorCode](#errorcode)
  * errorMessage [ErrorMessage](#errormessage)
  * messageId [MessageId](#messageid)

### BatchPutMessageRequest
* BatchPutMessageRequest `object`
  * channelName **required** [ChannelName](#channelname)
  * messages **required** [Messages](#messages)

### BatchPutMessageResponse
* BatchPutMessageResponse `object`
  * batchPutMessageErrorEntries [BatchPutMessageErrorEntries](#batchputmessageerrorentries)

### CancelPipelineReprocessingRequest
* CancelPipelineReprocessingRequest `object`

### CancelPipelineReprocessingResponse
* CancelPipelineReprocessingResponse `object`

### Channel
* Channel `object`: A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
  * arn [ChannelArn](#channelarn)
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * name [ChannelName](#channelname)
  * retentionPeriod [RetentionPeriod](#retentionperiod)
  * status [ChannelStatus](#channelstatus)

### ChannelActivity
* ChannelActivity `object`: The activity that determines the source of the messages to be processed.
  * channelName **required** [ChannelName](#channelname)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### ChannelArn
* ChannelArn `string`

### ChannelName
* ChannelName `string`

### ChannelStatus
* ChannelStatus `string` (values: CREATING, ACTIVE, DELETING)

### ChannelSummaries
* ChannelSummaries `array`
  * items [ChannelSummary](#channelsummary)

### ChannelSummary
* ChannelSummary `object`: A summary of information about a channel.
  * channelName [ChannelName](#channelname)
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * status [ChannelStatus](#channelstatus)

### CreateChannelRequest
* CreateChannelRequest `object`
  * channelName **required** [ChannelName](#channelname)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### CreateChannelResponse
* CreateChannelResponse `object`
  * channelArn [ChannelArn](#channelarn)
  * channelName [ChannelName](#channelname)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### CreateDatasetContentRequest
* CreateDatasetContentRequest `object`

### CreateDatasetRequest
* CreateDatasetRequest `object`
  * actions **required** [DatasetActions](#datasetactions)
  * datasetName **required** [DatasetName](#datasetname)
  * triggers [DatasetTriggers](#datasettriggers)

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * datasetArn [DatasetArn](#datasetarn)
  * datasetName [DatasetName](#datasetname)

### CreateDatastoreRequest
* CreateDatastoreRequest `object`
  * datastoreName **required** [DatastoreName](#datastorename)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### CreateDatastoreResponse
* CreateDatastoreResponse `object`
  * datastoreArn [DatastoreArn](#datastorearn)
  * datastoreName [DatastoreName](#datastorename)
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### CreatePipelineRequest
* CreatePipelineRequest `object`
  * pipelineActivities **required** [PipelineActivities](#pipelineactivities)
  * pipelineName **required** [PipelineName](#pipelinename)

### CreatePipelineResponse
* CreatePipelineResponse `object`
  * pipelineArn [PipelineArn](#pipelinearn)
  * pipelineName [PipelineName](#pipelinename)

### Dataset
* Dataset `object`: Information about a data set.
  * actions [DatasetActions](#datasetactions)
  * arn [DatasetArn](#datasetarn)
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * name [DatasetName](#datasetname)
  * status [DatasetStatus](#datasetstatus)
  * triggers [DatasetTriggers](#datasettriggers)

### DatasetAction
* DatasetAction `object`: A "DatasetAction" object specifying the query that creates the data set content.
  * actionName [DatasetActionName](#datasetactionname)
  * queryAction [SqlQueryDatasetAction](#sqlquerydatasetaction)

### DatasetActionName
* DatasetActionName `string`

### DatasetActions
* DatasetActions `array`
  * items [DatasetAction](#datasetaction)

### DatasetArn
* DatasetArn `string`

### DatasetContentState
* DatasetContentState `string` (values: CREATING, SUCCEEDED, FAILED)

### DatasetContentStatus
* DatasetContentStatus `object`: The state of the data set and the reason it is in this state.
  * reason [Reason](#reason)
  * state [DatasetContentState](#datasetcontentstate)

### DatasetContentVersion
* DatasetContentVersion `string`

### DatasetEntries
* DatasetEntries `array`
  * items [DatasetEntry](#datasetentry)

### DatasetEntry
* DatasetEntry `object`: The reference to a data set entry.
  * dataURI [PresignedURI](#presigneduri)
  * entryName [EntryName](#entryname)

### DatasetName
* DatasetName `string`

### DatasetStatus
* DatasetStatus `string` (values: CREATING, ACTIVE, DELETING)

### DatasetSummaries
* DatasetSummaries `array`
  * items [DatasetSummary](#datasetsummary)

### DatasetSummary
* DatasetSummary `object`: A summary of information about a data set.
  * creationTime [Timestamp](#timestamp)
  * datasetName [DatasetName](#datasetname)
  * lastUpdateTime [Timestamp](#timestamp)
  * status [DatasetStatus](#datasetstatus)

### DatasetTrigger
* DatasetTrigger `object`: The "DatasetTrigger" that specifies when the data set is automatically updated.
  * schedule [Schedule](#schedule)

### DatasetTriggers
* DatasetTriggers `array`
  * items [DatasetTrigger](#datasettrigger)

### Datastore
* Datastore `object`: Information about a data store.
  * arn [DatastoreArn](#datastorearn)
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * name [DatastoreName](#datastorename)
  * retentionPeriod [RetentionPeriod](#retentionperiod)
  * status [DatastoreStatus](#datastorestatus)

### DatastoreActivity
* DatastoreActivity `object`: The 'datastore' activity that specifies where to store the processed data.
  * datastoreName **required** [DatastoreName](#datastorename)
  * name **required** [ActivityName](#activityname)

### DatastoreArn
* DatastoreArn `string`

### DatastoreName
* DatastoreName `string`

### DatastoreStatus
* DatastoreStatus `string` (values: CREATING, ACTIVE, DELETING)

### DatastoreSummaries
* DatastoreSummaries `array`
  * items [DatastoreSummary](#datastoresummary)

### DatastoreSummary
* DatastoreSummary `object`: A summary of information about a data store.
  * creationTime [Timestamp](#timestamp)
  * datastoreName [DatastoreName](#datastorename)
  * lastUpdateTime [Timestamp](#timestamp)
  * status [DatastoreStatus](#datastorestatus)

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

### DescribeChannelRequest
* DescribeChannelRequest `object`

### DescribeChannelResponse
* DescribeChannelResponse `object`
  * channel [Channel](#channel)

### DescribeDatasetRequest
* DescribeDatasetRequest `object`

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * dataset [Dataset](#dataset)

### DescribeDatastoreRequest
* DescribeDatastoreRequest `object`

### DescribeDatastoreResponse
* DescribeDatastoreResponse `object`
  * datastore [Datastore](#datastore)

### DescribeLoggingOptionsRequest
* DescribeLoggingOptionsRequest `object`

### DescribeLoggingOptionsResponse
* DescribeLoggingOptionsResponse `object`
  * loggingOptions [LoggingOptions](#loggingoptions)

### DescribePipelineRequest
* DescribePipelineRequest `object`

### DescribePipelineResponse
* DescribePipelineResponse `object`
  * pipeline [Pipeline](#pipeline)

### DeviceRegistryEnrichActivity
* DeviceRegistryEnrichActivity `object`: An activity that adds data from the AWS IoT device registry to your message.
  * attribute **required** [AttributeName](#attributename)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)
  * roleArn **required** [RoleArn](#rolearn)
  * thingName **required** [AttributeName](#attributename)

### DeviceShadowEnrichActivity
* DeviceShadowEnrichActivity `object`: An activity that adds information from the AWS IoT Device Shadows service to a message.
  * attribute **required** [AttributeName](#attributename)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)
  * roleArn **required** [RoleArn](#rolearn)
  * thingName **required** [AttributeName](#attributename)

### EndTime
* EndTime `string`

### EntryName
* EntryName `string`

### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### FilterActivity
* FilterActivity `object`: An activity that filters a message based on its attributes.
  * filter **required** [FilterExpression](#filterexpression)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### FilterExpression
* FilterExpression `string`

### GetDatasetContentRequest
* GetDatasetContentRequest `object`

### GetDatasetContentResponse
* GetDatasetContentResponse `object`
  * entries [DatasetEntries](#datasetentries)
  * status [DatasetContentStatus](#datasetcontentstatus)
  * timestamp [Timestamp](#timestamp)

### InternalFailureException
* InternalFailureException `object`: There was an internal failure.
  * message [errorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: The request was not valid.
  * message [errorMessage](#errormessage)

### LambdaActivity
* LambdaActivity `object`: An activity that runs a Lambda function to modify the message.
  * batchSize **required** [ActivityBatchSize](#activitybatchsize)
  * lambdaName **required** [LambdaName](#lambdaname)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### LambdaName
* LambdaName `string`

### LimitExceededException
* LimitExceededException `object`: The command caused an internal limit to be exceeded.
  * message [errorMessage](#errormessage)

### ListChannelsRequest
* ListChannelsRequest `object`

### ListChannelsResponse
* ListChannelsResponse `object`
  * channelSummaries [ChannelSummaries](#channelsummaries)
  * nextToken [NextToken](#nexttoken)

### ListDatasetsRequest
* ListDatasetsRequest `object`

### ListDatasetsResponse
* ListDatasetsResponse `object`
  * datasetSummaries [DatasetSummaries](#datasetsummaries)
  * nextToken [NextToken](#nexttoken)

### ListDatastoresRequest
* ListDatastoresRequest `object`

### ListDatastoresResponse
* ListDatastoresResponse `object`
  * datastoreSummaries [DatastoreSummaries](#datastoresummaries)
  * nextToken [NextToken](#nexttoken)

### ListPipelinesRequest
* ListPipelinesRequest `object`

### ListPipelinesResponse
* ListPipelinesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * pipelineSummaries [PipelineSummaries](#pipelinesummaries)

### LogResult
* LogResult `string`

### LoggingEnabled
* LoggingEnabled `boolean`

### LoggingLevel
* LoggingLevel `string` (values: ERROR)

### LoggingOptions
* LoggingOptions `object`: Information about logging options.
  * enabled **required** [LoggingEnabled](#loggingenabled)
  * level **required** [LoggingLevel](#logginglevel)
  * roleArn **required** [RoleArn](#rolearn)

### MathActivity
* MathActivity `object`: An activity that computes an arithmetic expression using the message's attributes.
  * attribute **required** [AttributeName](#attributename)
  * math **required** [MathExpression](#mathexpression)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### MathExpression
* MathExpression `string`

### MaxMessages
* MaxMessages `integer`

### MaxResults
* MaxResults `integer`

### Message
* Message `object`: Information about a message.
  * messageId **required** [MessageId](#messageid)
  * payload **required** [MessagePayload](#messagepayload)

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

### Pipeline
* Pipeline `object`: Contains information about a pipeline.
  * activities [PipelineActivities](#pipelineactivities)
  * arn [PipelineArn](#pipelinearn)
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * name [PipelineName](#pipelinename)
  * reprocessingSummaries [ReprocessingSummaries](#reprocessingsummaries)

### PipelineActivities
* PipelineActivities `array`
  * items [PipelineActivity](#pipelineactivity)

### PipelineActivity
* PipelineActivity `object`: An activity that performs a transformation on a message.
  * addAttributes [AddAttributesActivity](#addattributesactivity)
  * channel [ChannelActivity](#channelactivity)
  * datastore [DatastoreActivity](#datastoreactivity)
  * deviceRegistryEnrich [DeviceRegistryEnrichActivity](#deviceregistryenrichactivity)
  * deviceShadowEnrich [DeviceShadowEnrichActivity](#deviceshadowenrichactivity)
  * filter [FilterActivity](#filteractivity)
  * lambda [LambdaActivity](#lambdaactivity)
  * math [MathActivity](#mathactivity)
  * removeAttributes [RemoveAttributesActivity](#removeattributesactivity)
  * selectAttributes [SelectAttributesActivity](#selectattributesactivity)

### PipelineArn
* PipelineArn `string`

### PipelineName
* PipelineName `string`

### PipelineSummaries
* PipelineSummaries `array`
  * items [PipelineSummary](#pipelinesummary)

### PipelineSummary
* PipelineSummary `object`: A summary of information about a pipeline.
  * creationTime [Timestamp](#timestamp)
  * lastUpdateTime [Timestamp](#timestamp)
  * pipelineName [PipelineName](#pipelinename)
  * reprocessingSummaries [ReprocessingSummaries](#reprocessingsummaries)

### PresignedURI
* PresignedURI `string`

### PutLoggingOptionsRequest
* PutLoggingOptionsRequest `object`
  * loggingOptions **required** [LoggingOptions](#loggingoptions)

### Reason
* Reason `string`

### RemoveAttributesActivity
* RemoveAttributesActivity `object`: An activity that removes attributes from a message.
  * attributes **required** [AttributeNames](#attributenames)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### ReprocessingId
* ReprocessingId `string`

### ReprocessingStatus
* ReprocessingStatus `string` (values: RUNNING, SUCCEEDED, CANCELLED, FAILED)

### ReprocessingSummaries
* ReprocessingSummaries `array`
  * items [ReprocessingSummary](#reprocessingsummary)

### ReprocessingSummary
* ReprocessingSummary `object`: Information about pipeline reprocessing.
  * creationTime [Timestamp](#timestamp)
  * id [ReprocessingId](#reprocessingid)
  * status [ReprocessingStatus](#reprocessingstatus)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: A resource with the same name already exists.
  * message [errorMessage](#errormessage)
  * resourceArn [resourceArn](#resourcearn)
  * resourceId [resourceId](#resourceid)

### ResourceNotFoundException
* ResourceNotFoundException `object`: A resource with the specified name could not be found.
  * message [errorMessage](#errormessage)

### RetentionPeriod
* RetentionPeriod `object`: How long, in days, message data is kept.
  * numberOfDays [RetentionPeriodInDays](#retentionperiodindays)
  * unlimited [UnlimitedRetentionPeriod](#unlimitedretentionperiod)

### RetentionPeriodInDays
* RetentionPeriodInDays `integer`

### RoleArn
* RoleArn `string`

### RunPipelineActivityRequest
* RunPipelineActivityRequest `object`
  * payloads **required** [MessagePayloads](#messagepayloads)
  * pipelineActivity **required** [PipelineActivity](#pipelineactivity)

### RunPipelineActivityResponse
* RunPipelineActivityResponse `object`
  * logResult [LogResult](#logresult)
  * payloads [MessagePayloads](#messagepayloads)

### SampleChannelDataRequest
* SampleChannelDataRequest `object`

### SampleChannelDataResponse
* SampleChannelDataResponse `object`
  * payloads [MessagePayloads](#messagepayloads)

### Schedule
* Schedule `object`: The schedule for when to trigger an update.
  * expression [ScheduleExpression](#scheduleexpression)

### ScheduleExpression
* ScheduleExpression `string`

### SelectAttributesActivity
* SelectAttributesActivity `object`: Creates a new message using only the specified attributes from the original message.
  * attributes **required** [AttributeNames](#attributenames)
  * name **required** [ActivityName](#activityname)
  * next [ActivityName](#activityname)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is temporarily unavailable.
  * message [errorMessage](#errormessage)

### SqlQuery
* SqlQuery `string`

### SqlQueryDatasetAction
* SqlQueryDatasetAction `object`: The SQL query to modify the message.
  * sqlQuery **required** [SqlQuery](#sqlquery)

### StartPipelineReprocessingRequest
* StartPipelineReprocessingRequest `object`
  * endTime [EndTime](#endtime)
  * startTime [StartTime](#starttime)

### StartPipelineReprocessingResponse
* StartPipelineReprocessingResponse `object`
  * reprocessingId [ReprocessingId](#reprocessingid)

### StartTime
* StartTime `string`

### ThrottlingException
* ThrottlingException `object`: The request was denied due to request throttling.
  * message [errorMessage](#errormessage)

### Timestamp
* Timestamp `string`

### UnlimitedRetentionPeriod
* UnlimitedRetentionPeriod `boolean`

### UpdateChannelRequest
* UpdateChannelRequest `object`
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### UpdateDatasetRequest
* UpdateDatasetRequest `object`
  * actions **required** [DatasetActions](#datasetactions)
  * triggers [DatasetTriggers](#datasettriggers)

### UpdateDatastoreRequest
* UpdateDatastoreRequest `object`
  * retentionPeriod [RetentionPeriod](#retentionperiod)

### UpdatePipelineRequest
* UpdatePipelineRequest `object`
  * pipelineActivities **required** [PipelineActivities](#pipelineactivities)

### errorMessage
* errorMessage `string`

### resourceArn
* resourceArn `string`

### resourceId
* resourceId `string`


