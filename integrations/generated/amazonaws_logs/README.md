# @datafire/amazonaws_logs

Client library for Amazon CloudWatch Logs

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_logs
```
```js
let amazonaws_logs = require('@datafire/amazonaws_logs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, AWS CloudTrail, or other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the AWS CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p> <p>You can use CloudWatch Logs to:</p> <ul> <li> <p> <b>Monitor logs from EC2 instances in real-time</b>: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs and send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException") or count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.</p> </li> <li> <p> <b>Monitor AWS CloudTrail logged events</b>: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.</p> </li> <li> <p> <b>Archive log data</b>: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events older than this setting are automatically deleted. The CloudWatch Logs agent makes it easy to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it.</p> </li> </ul>

## Actions

### AssociateKmsKey



```js
amazonaws_logs.AssociateKmsKey({
  "logGroupName": null,
  "kmsKeyId": null
}, context)
```

#### Input
* input `object`
  * kmsKeyId **required**
  * logGroupName **required**

#### Output
*Output schema unknown*

### CancelExportTask



```js
amazonaws_logs.CancelExportTask({
  "taskId": null
}, context)
```

#### Input
* input `object`
  * taskId **required**

#### Output
*Output schema unknown*

### CreateExportTask



```js
amazonaws_logs.CreateExportTask({
  "logGroupName": null,
  "from": null,
  "to": null,
  "destination": null
}, context)
```

#### Input
* input `object`
  * destination **required**
  * destinationPrefix
  * from **required**
  * logGroupName **required**
  * logStreamNamePrefix
  * taskName
  * to **required**

#### Output
* output [CreateExportTaskResponse](#createexporttaskresponse)

### CreateLogGroup



```js
amazonaws_logs.CreateLogGroup({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * tags
  * kmsKeyId
  * logGroupName **required**

#### Output
*Output schema unknown*

### CreateLogStream



```js
amazonaws_logs.CreateLogStream({
  "logGroupName": null,
  "logStreamName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**
  * logStreamName **required**

#### Output
*Output schema unknown*

### DeleteDestination



```js
amazonaws_logs.DeleteDestination({
  "destinationName": null
}, context)
```

#### Input
* input `object`
  * destinationName **required**

#### Output
*Output schema unknown*

### DeleteLogGroup



```js
amazonaws_logs.DeleteLogGroup({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**

#### Output
*Output schema unknown*

### DeleteLogStream



```js
amazonaws_logs.DeleteLogStream({
  "logGroupName": null,
  "logStreamName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**
  * logStreamName **required**

#### Output
*Output schema unknown*

### DeleteMetricFilter



```js
amazonaws_logs.DeleteMetricFilter({
  "logGroupName": null,
  "filterName": null
}, context)
```

#### Input
* input `object`
  * filterName **required**
  * logGroupName **required**

#### Output
*Output schema unknown*

### DeleteQueryDefinition



```js
amazonaws_logs.DeleteQueryDefinition({
  "queryDefinitionId": null
}, context)
```

#### Input
* input `object`
  * queryDefinitionId **required**

#### Output
* output [DeleteQueryDefinitionResponse](#deletequerydefinitionresponse)

### DeleteResourcePolicy



```js
amazonaws_logs.DeleteResourcePolicy({}, context)
```

#### Input
* input `object`
  * policyName

#### Output
*Output schema unknown*

### DeleteRetentionPolicy



```js
amazonaws_logs.DeleteRetentionPolicy({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**

#### Output
*Output schema unknown*

### DeleteSubscriptionFilter



```js
amazonaws_logs.DeleteSubscriptionFilter({
  "logGroupName": null,
  "filterName": null
}, context)
```

#### Input
* input `object`
  * filterName **required**
  * logGroupName **required**

#### Output
*Output schema unknown*

### DescribeDestinations



```js
amazonaws_logs.DescribeDestinations({}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * DestinationNamePrefix
  * limit
  * nextToken

#### Output
* output [DescribeDestinationsResponse](#describedestinationsresponse)

### DescribeExportTasks



```js
amazonaws_logs.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * limit
  * nextToken
  * statusCode
  * taskId

#### Output
* output [DescribeExportTasksResponse](#describeexporttasksresponse)

### DescribeLogGroups



```js
amazonaws_logs.DescribeLogGroups({}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * limit
  * logGroupNamePrefix
  * nextToken

#### Output
* output [DescribeLogGroupsResponse](#describeloggroupsresponse)

### DescribeLogStreams



```js
amazonaws_logs.DescribeLogStreams({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * descending
  * limit
  * logGroupName **required**
  * logStreamNamePrefix
  * nextToken
  * orderBy

#### Output
* output [DescribeLogStreamsResponse](#describelogstreamsresponse)

### DescribeMetricFilters



```js
amazonaws_logs.DescribeMetricFilters({}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * filterNamePrefix
  * limit
  * logGroupName
  * metricName
  * metricNamespace
  * nextToken

#### Output
* output [DescribeMetricFiltersResponse](#describemetricfiltersresponse)

### DescribeQueries



```js
amazonaws_logs.DescribeQueries({}, context)
```

#### Input
* input `object`
  * logGroupName
  * maxResults
  * nextToken [NextToken](#nexttoken)
  * status

#### Output
* output [DescribeQueriesResponse](#describequeriesresponse)

### DescribeQueryDefinitions



```js
amazonaws_logs.DescribeQueryDefinitions({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken [NextToken](#nexttoken)
  * queryDefinitionNamePrefix

#### Output
* output [DescribeQueryDefinitionsResponse](#describequerydefinitionsresponse)

### DescribeResourcePolicies



```js
amazonaws_logs.DescribeResourcePolicies({}, context)
```

#### Input
* input `object`
  * limit
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeResourcePoliciesResponse](#describeresourcepoliciesresponse)

### DescribeSubscriptionFilters



```js
amazonaws_logs.DescribeSubscriptionFilters({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * filterNamePrefix
  * limit
  * logGroupName **required**
  * nextToken

#### Output
* output [DescribeSubscriptionFiltersResponse](#describesubscriptionfiltersresponse)

### DisassociateKmsKey



```js
amazonaws_logs.DisassociateKmsKey({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**

#### Output
*Output schema unknown*

### FilterLogEvents



```js
amazonaws_logs.FilterLogEvents({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * endTime
  * filterPattern
  * interleaved
  * limit
  * logGroupName **required**
  * logStreamNamePrefix
  * logStreamNames
    * items [LogStreamName](#logstreamname)
  * nextToken
  * startTime

#### Output
* output [FilterLogEventsResponse](#filterlogeventsresponse)

### GetLogEvents



```js
amazonaws_logs.GetLogEvents({
  "logGroupName": null,
  "logStreamName": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * endTime
  * limit
  * logGroupName **required**
  * logStreamName **required**
  * nextToken
  * startFromHead
  * startTime

#### Output
* output [GetLogEventsResponse](#getlogeventsresponse)

### GetLogGroupFields



```js
amazonaws_logs.GetLogGroupFields({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**
  * time

#### Output
* output [GetLogGroupFieldsResponse](#getloggroupfieldsresponse)

### GetLogRecord



```js
amazonaws_logs.GetLogRecord({
  "logRecordPointer": null
}, context)
```

#### Input
* input `object`
  * logRecordPointer **required**

#### Output
* output [GetLogRecordResponse](#getlogrecordresponse)

### GetQueryResults



```js
amazonaws_logs.GetQueryResults({
  "queryId": null
}, context)
```

#### Input
* input `object`
  * queryId **required**

#### Output
* output [GetQueryResultsResponse](#getqueryresultsresponse)

### ListTagsLogGroup



```js
amazonaws_logs.ListTagsLogGroup({
  "logGroupName": null
}, context)
```

#### Input
* input `object`
  * logGroupName **required**

#### Output
* output [ListTagsLogGroupResponse](#listtagsloggroupresponse)

### PutDestination



```js
amazonaws_logs.PutDestination({
  "destinationName": null,
  "targetArn": null,
  "roleArn": null
}, context)
```

#### Input
* input `object`
  * destinationName **required**
  * roleArn **required**
  * targetArn **required**

#### Output
* output [PutDestinationResponse](#putdestinationresponse)

### PutDestinationPolicy



```js
amazonaws_logs.PutDestinationPolicy({
  "destinationName": null,
  "accessPolicy": null
}, context)
```

#### Input
* input `object`
  * accessPolicy **required**
  * destinationName **required**

#### Output
*Output schema unknown*

### PutLogEvents



```js
amazonaws_logs.PutLogEvents({
  "logGroupName": null,
  "logStreamName": null,
  "logEvents": null
}, context)
```

#### Input
* input `object`
  * logEvents **required**
    * items [InputLogEvent](#inputlogevent)
  * logGroupName **required**
  * logStreamName **required**
  * sequenceToken

#### Output
* output [PutLogEventsResponse](#putlogeventsresponse)

### PutMetricFilter



```js
amazonaws_logs.PutMetricFilter({
  "logGroupName": null,
  "filterName": null,
  "filterPattern": null,
  "metricTransformations": null
}, context)
```

#### Input
* input `object`
  * filterName **required**
  * filterPattern **required**
  * logGroupName **required**
  * metricTransformations **required**
    * items [MetricTransformation](#metrictransformation)

#### Output
*Output schema unknown*

### PutQueryDefinition



```js
amazonaws_logs.PutQueryDefinition({
  "name": null,
  "queryString": null
}, context)
```

#### Input
* input `object`
  * logGroupNames
    * items [LogGroupName](#loggroupname)
  * name **required**
  * queryDefinitionId
  * queryString **required**

#### Output
* output [PutQueryDefinitionResponse](#putquerydefinitionresponse)

### PutResourcePolicy



```js
amazonaws_logs.PutResourcePolicy({}, context)
```

#### Input
* input `object`
  * policyDocument
  * policyName

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### PutRetentionPolicy



```js
amazonaws_logs.PutRetentionPolicy({
  "logGroupName": null,
  "retentionInDays": 0
}, context)
```

#### Input
* input `object`
  * logGroupName **required**
  * retentionInDays **required** [Days](#days)

#### Output
*Output schema unknown*

### PutSubscriptionFilter



```js
amazonaws_logs.PutSubscriptionFilter({
  "logGroupName": null,
  "filterName": null,
  "filterPattern": null,
  "destinationArn": null
}, context)
```

#### Input
* input `object`
  * destinationArn **required**
  * distribution
  * filterName **required**
  * filterPattern **required**
  * logGroupName **required**
  * roleArn

#### Output
*Output schema unknown*

### StartQuery



```js
amazonaws_logs.StartQuery({
  "startTime": null,
  "endTime": null,
  "queryString": null
}, context)
```

#### Input
* input `object`
  * endTime **required**
  * limit
  * logGroupName
  * logGroupNames
    * items [LogGroupName](#loggroupname)
  * queryString **required**
  * startTime **required**

#### Output
* output [StartQueryResponse](#startqueryresponse)

### StopQuery



```js
amazonaws_logs.StopQuery({
  "queryId": null
}, context)
```

#### Input
* input `object`
  * queryId **required**

#### Output
* output [StopQueryResponse](#stopqueryresponse)

### TagLogGroup



```js
amazonaws_logs.TagLogGroup({
  "logGroupName": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
  * logGroupName **required**

#### Output
*Output schema unknown*

### TestMetricFilter



```js
amazonaws_logs.TestMetricFilter({
  "filterPattern": "",
  "logEventMessages": null
}, context)
```

#### Input
* input `object`
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logEventMessages **required**
    * items [EventMessage](#eventmessage)

#### Output
* output [TestMetricFilterResponse](#testmetricfilterresponse)

### UntagLogGroup



```js
amazonaws_logs.UntagLogGroup({
  "logGroupName": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [TagKey](#tagkey)
  * logGroupName **required**

#### Output
*Output schema unknown*



## Definitions

### AccessPolicy
* AccessPolicy `string`

### Arn
* Arn `string`

### AssociateKmsKeyRequest
* AssociateKmsKeyRequest `object`
  * kmsKeyId **required**
  * logGroupName **required**

### CancelExportTaskRequest
* CancelExportTaskRequest `object`
  * taskId **required**

### CreateExportTaskRequest
* CreateExportTaskRequest `object`
  * destination **required**
  * destinationPrefix
  * from **required**
  * logGroupName **required**
  * logStreamNamePrefix
  * taskName
  * to **required**

### CreateExportTaskResponse
* CreateExportTaskResponse `object`
  * taskId

### CreateLogGroupRequest
* CreateLogGroupRequest `object`
  * tags
  * kmsKeyId
  * logGroupName **required**

### CreateLogStreamRequest
* CreateLogStreamRequest `object`
  * logGroupName **required**
  * logStreamName **required**

### DataAlreadyAcceptedException


### Days
* Days `integer`: <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.</p> <p>If you omit <code>retentionInDays</code> in a <code>PutRetentionPolicy</code> operation, the events in the log group are always retained and never expire.</p>

### DefaultValue
* DefaultValue `number`

### DeleteDestinationRequest
* DeleteDestinationRequest `object`
  * destinationName **required**

### DeleteLogGroupRequest
* DeleteLogGroupRequest `object`
  * logGroupName **required**

### DeleteLogStreamRequest
* DeleteLogStreamRequest `object`
  * logGroupName **required**
  * logStreamName **required**

### DeleteMetricFilterRequest
* DeleteMetricFilterRequest `object`
  * filterName **required**
  * logGroupName **required**

### DeleteQueryDefinitionRequest
* DeleteQueryDefinitionRequest `object`
  * queryDefinitionId **required**

### DeleteQueryDefinitionResponse
* DeleteQueryDefinitionResponse `object`
  * success

### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`
  * policyName

### DeleteRetentionPolicyRequest
* DeleteRetentionPolicyRequest `object`
  * logGroupName **required**

### DeleteSubscriptionFilterRequest
* DeleteSubscriptionFilterRequest `object`
  * filterName **required**
  * logGroupName **required**

### Descending
* Descending `boolean`

### DescribeDestinationsRequest
* DescribeDestinationsRequest `object`
  * DestinationNamePrefix
  * limit
  * nextToken

### DescribeDestinationsResponse
* DescribeDestinationsResponse `object`
  * destinations
    * items [Destination](#destination)
  * nextToken [NextToken](#nexttoken)

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`
  * limit
  * nextToken
  * statusCode
  * taskId

### DescribeExportTasksResponse
* DescribeExportTasksResponse `object`
  * exportTasks
    * items [ExportTask](#exporttask)
  * nextToken [NextToken](#nexttoken)

### DescribeLimit
* DescribeLimit `integer`

### DescribeLogGroupsRequest
* DescribeLogGroupsRequest `object`
  * limit
  * logGroupNamePrefix
  * nextToken

### DescribeLogGroupsResponse
* DescribeLogGroupsResponse `object`
  * logGroups
    * items [LogGroup](#loggroup)
  * nextToken [NextToken](#nexttoken)

### DescribeLogStreamsRequest
* DescribeLogStreamsRequest `object`
  * descending
  * limit
  * logGroupName **required**
  * logStreamNamePrefix
  * nextToken
  * orderBy

### DescribeLogStreamsResponse
* DescribeLogStreamsResponse `object`
  * logStreams
    * items [LogStream](#logstream)
  * nextToken [NextToken](#nexttoken)

### DescribeMetricFiltersRequest
* DescribeMetricFiltersRequest `object`
  * filterNamePrefix
  * limit
  * logGroupName
  * metricName
  * metricNamespace
  * nextToken

### DescribeMetricFiltersResponse
* DescribeMetricFiltersResponse `object`
  * metricFilters
    * items [MetricFilter](#metricfilter)
  * nextToken [NextToken](#nexttoken)

### DescribeQueriesMaxResults
* DescribeQueriesMaxResults `integer`

### DescribeQueriesRequest
* DescribeQueriesRequest `object`
  * logGroupName
  * maxResults
  * nextToken [NextToken](#nexttoken)
  * status

### DescribeQueriesResponse
* DescribeQueriesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * queries
    * items [QueryInfo](#queryinfo)

### DescribeQueryDefinitionsRequest
* DescribeQueryDefinitionsRequest `object`
  * maxResults
  * nextToken [NextToken](#nexttoken)
  * queryDefinitionNamePrefix

### DescribeQueryDefinitionsResponse
* DescribeQueryDefinitionsResponse `object`
  * nextToken [NextToken](#nexttoken)
  * queryDefinitions
    * items [QueryDefinition](#querydefinition)

### DescribeResourcePoliciesRequest
* DescribeResourcePoliciesRequest `object`
  * limit
  * nextToken [NextToken](#nexttoken)

### DescribeResourcePoliciesResponse
* DescribeResourcePoliciesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * resourcePolicies
    * items [ResourcePolicy](#resourcepolicy)

### DescribeSubscriptionFiltersRequest
* DescribeSubscriptionFiltersRequest `object`
  * filterNamePrefix
  * limit
  * logGroupName **required**
  * nextToken

### DescribeSubscriptionFiltersResponse
* DescribeSubscriptionFiltersResponse `object`
  * nextToken [NextToken](#nexttoken)
  * subscriptionFilters
    * items [SubscriptionFilter](#subscriptionfilter)

### Destination
* Destination `object`: Represents a cross-account destination that receives subscription log events.
  * accessPolicy
  * arn
  * creationTime
  * destinationName
  * roleArn
  * targetArn

### DestinationArn
* DestinationArn `string`

### DestinationName
* DestinationName `string`

### Destinations
* Destinations `array`
  * items [Destination](#destination)

### DisassociateKmsKeyRequest
* DisassociateKmsKeyRequest `object`
  * logGroupName **required**

### Distribution
* Distribution `string` (values: Random, ByLogStream): The method used to distribute log data to the destination, which can be either random or grouped by log stream.

### EventId
* EventId `string`

### EventMessage
* EventMessage `string`

### EventNumber
* EventNumber `integer`

### EventsLimit
* EventsLimit `integer`

### ExportDestinationBucket
* ExportDestinationBucket `string`

### ExportDestinationPrefix
* ExportDestinationPrefix `string`

### ExportTask
* ExportTask `object`: Represents an export task.
  * destination
  * destinationPrefix
  * executionInfo
    * completionTime
    * creationTime
  * from
  * logGroupName
  * status
    * code
    * message
  * taskId
  * taskName
  * to

### ExportTaskExecutionInfo
* ExportTaskExecutionInfo `object`: Represents the status of an export task.
  * completionTime
  * creationTime

### ExportTaskId
* ExportTaskId `string`

### ExportTaskName
* ExportTaskName `string`

### ExportTaskStatus
* ExportTaskStatus `object`: Represents the status of an export task.
  * code
  * message

### ExportTaskStatusCode
* ExportTaskStatusCode `string` (values: CANCELLED, COMPLETED, FAILED, PENDING, PENDING_CANCEL, RUNNING)

### ExportTaskStatusMessage
* ExportTaskStatusMessage `string`

### ExportTasks
* ExportTasks `array`
  * items [ExportTask](#exporttask)

### ExtractedValues
* ExtractedValues `object`

### Field
* Field `string`

### FilterCount
* FilterCount `integer`

### FilterLogEventsRequest
* FilterLogEventsRequest `object`
  * endTime
  * filterPattern
  * interleaved
  * limit
  * logGroupName **required**
  * logStreamNamePrefix
  * logStreamNames
    * items [LogStreamName](#logstreamname)
  * nextToken
  * startTime

### FilterLogEventsResponse
* FilterLogEventsResponse `object`
  * events
    * items [FilteredLogEvent](#filteredlogevent)
  * nextToken
  * searchedLogStreams
    * items [SearchedLogStream](#searchedlogstream)

### FilterName
* FilterName `string`

### FilterPattern
* FilterPattern `string`: A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.

### FilteredLogEvent
* FilteredLogEvent `object`: Represents a matched event.
  * eventId
  * ingestionTime
  * logStreamName
  * message
  * timestamp

### FilteredLogEvents
* FilteredLogEvents `array`
  * items [FilteredLogEvent](#filteredlogevent)

### GetLogEventsRequest
* GetLogEventsRequest `object`
  * endTime
  * limit
  * logGroupName **required**
  * logStreamName **required**
  * nextToken
  * startFromHead
  * startTime

### GetLogEventsResponse
* GetLogEventsResponse `object`
  * events
    * items [OutputLogEvent](#outputlogevent)
  * nextBackwardToken
  * nextForwardToken

### GetLogGroupFieldsRequest
* GetLogGroupFieldsRequest `object`
  * logGroupName **required**
  * time

### GetLogGroupFieldsResponse
* GetLogGroupFieldsResponse `object`
  * logGroupFields
    * items [LogGroupField](#loggroupfield)

### GetLogRecordRequest
* GetLogRecordRequest `object`
  * logRecordPointer **required**

### GetLogRecordResponse
* GetLogRecordResponse `object`
  * logRecord

### GetQueryResultsRequest
* GetQueryResultsRequest `object`
  * queryId **required**

### GetQueryResultsResponse
* GetQueryResultsResponse `object`
  * results
    * items [ResultRows](#resultrows)
  * statistics
    * bytesScanned
    * recordsMatched
    * recordsScanned
  * status

### InputLogEvent
* InputLogEvent `object`: Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
  * message **required**
  * timestamp **required**

### InputLogEvents
* InputLogEvents `array`
  * items [InputLogEvent](#inputlogevent)

### InputLogStreamNames
* InputLogStreamNames `array`
  * items [LogStreamName](#logstreamname)

### Interleaved
* Interleaved `boolean`

### InvalidOperationException


### InvalidParameterException


### InvalidSequenceTokenException


### KmsKeyId
* KmsKeyId `string`

### LimitExceededException


### ListTagsLogGroupRequest
* ListTagsLogGroupRequest `object`
  * logGroupName **required**

### ListTagsLogGroupResponse
* ListTagsLogGroupResponse `object`
  * tags

### LogEventIndex
* LogEventIndex `integer`

### LogGroup
* LogGroup `object`: Represents a log group.
  * arn
  * creationTime
  * kmsKeyId
  * logGroupName
  * metricFilterCount
  * retentionInDays [Days](#days)
  * storedBytes

### LogGroupField
* LogGroupField `object`: The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.
  * name
  * percent

### LogGroupFieldList
* LogGroupFieldList `array`
  * items [LogGroupField](#loggroupfield)

### LogGroupName
* LogGroupName `string`

### LogGroupNames
* LogGroupNames `array`
  * items [LogGroupName](#loggroupname)

### LogGroups
* LogGroups `array`
  * items [LogGroup](#loggroup)

### LogRecord
* LogRecord `object`

### LogRecordPointer
* LogRecordPointer `string`

### LogStream
* LogStream `object`: Represents a log stream, which is a sequence of log events from a single emitter of logs.
  * arn
  * creationTime
  * firstEventTimestamp
  * lastEventTimestamp
  * lastIngestionTime
  * logStreamName
  * storedBytes
  * uploadSequenceToken

### LogStreamName
* LogStreamName `string`

### LogStreamSearchedCompletely
* LogStreamSearchedCompletely `boolean`

### LogStreams
* LogStreams `array`
  * items [LogStream](#logstream)

### MalformedQueryException


### MetricFilter
* MetricFilter `object`: Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
  * creationTime
  * filterName
  * filterPattern [FilterPattern](#filterpattern)
  * logGroupName
  * metricTransformations
    * items [MetricTransformation](#metrictransformation)

### MetricFilterMatchRecord
* MetricFilterMatchRecord `object`: Represents a matched event.
  * eventMessage
  * eventNumber
  * extractedValues

### MetricFilterMatches
* MetricFilterMatches `array`
  * items [MetricFilterMatchRecord](#metricfiltermatchrecord)

### MetricFilters
* MetricFilters `array`
  * items [MetricFilter](#metricfilter)

### MetricName
* MetricName `string`: The name of the CloudWatch metric to which the monitored log information should be published. For example, you might publish to a metric named ErrorCount.

### MetricNamespace
* MetricNamespace `string`

### MetricTransformation
* MetricTransformation `object`: Indicates how to transform ingested log events to metric data in a CloudWatch metric.
  * defaultValue
  * metricName **required**
  * metricNamespace **required**
  * metricValue **required**

### MetricTransformations
* MetricTransformations `array`
  * items [MetricTransformation](#metrictransformation)

### MetricValue
* MetricValue `string`: The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like "Error", the value is "1" for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.

### NextToken
* NextToken `string`: The token for the next set of items to return. The token expires after 24 hours.

### OperationAbortedException


### OrderBy
* OrderBy `string` (values: LogStreamName, LastEventTime)

### OutputLogEvent
* OutputLogEvent `object`: Represents a log event.
  * ingestionTime
  * message
  * timestamp

### OutputLogEvents
* OutputLogEvents `array`
  * items [OutputLogEvent](#outputlogevent)

### Percentage
* Percentage `integer`

### PolicyDocument
* PolicyDocument `string`

### PolicyName
* PolicyName `string`

### PutDestinationPolicyRequest
* PutDestinationPolicyRequest `object`
  * accessPolicy **required**
  * destinationName **required**

### PutDestinationRequest
* PutDestinationRequest `object`
  * destinationName **required**
  * roleArn **required**
  * targetArn **required**

### PutDestinationResponse
* PutDestinationResponse `object`
  * destination
    * accessPolicy
    * arn
    * creationTime
    * destinationName
    * roleArn
    * targetArn

### PutLogEventsRequest
* PutLogEventsRequest `object`
  * logEvents **required**
    * items [InputLogEvent](#inputlogevent)
  * logGroupName **required**
  * logStreamName **required**
  * sequenceToken

### PutLogEventsResponse
* PutLogEventsResponse `object`
  * nextSequenceToken
  * rejectedLogEventsInfo
    * expiredLogEventEndIndex
    * tooNewLogEventStartIndex
    * tooOldLogEventEndIndex

### PutMetricFilterRequest
* PutMetricFilterRequest `object`
  * filterName **required**
  * filterPattern **required**
  * logGroupName **required**
  * metricTransformations **required**
    * items [MetricTransformation](#metrictransformation)

### PutQueryDefinitionRequest
* PutQueryDefinitionRequest `object`
  * logGroupNames
    * items [LogGroupName](#loggroupname)
  * name **required**
  * queryDefinitionId
  * queryString **required**

### PutQueryDefinitionResponse
* PutQueryDefinitionResponse `object`
  * queryDefinitionId

### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`
  * policyDocument
  * policyName

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`
  * resourcePolicy
    * lastUpdatedTime
    * policyDocument
    * policyName

### PutRetentionPolicyRequest
* PutRetentionPolicyRequest `object`
  * logGroupName **required**
  * retentionInDays **required** [Days](#days)

### PutSubscriptionFilterRequest
* PutSubscriptionFilterRequest `object`
  * destinationArn **required**
  * distribution
  * filterName **required**
  * filterPattern **required**
  * logGroupName **required**
  * roleArn

### QueryDefinition
* QueryDefinition `object`: This structure contains details about a saved CloudWatch Logs Insights query definition.
  * lastModified
  * logGroupNames
    * items [LogGroupName](#loggroupname)
  * name
  * queryDefinitionId
  * queryString

### QueryDefinitionList
* QueryDefinitionList `array`
  * items [QueryDefinition](#querydefinition)

### QueryDefinitionName
* QueryDefinitionName `string`

### QueryDefinitionString
* QueryDefinitionString `string`

### QueryId
* QueryId `string`

### QueryInfo
* QueryInfo `object`: Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. 
  * createTime
  * logGroupName
  * queryId
  * queryString
  * status

### QueryInfoList
* QueryInfoList `array`
  * items [QueryInfo](#queryinfo)

### QueryListMaxResults
* QueryListMaxResults `integer`

### QueryResults
* QueryResults `array`
  * items [ResultRows](#resultrows)

### QueryStatistics
* QueryStatistics `object`: Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
  * bytesScanned
  * recordsMatched
  * recordsScanned

### QueryStatus
* QueryStatus `string` (values: Scheduled, Running, Complete, Failed, Cancelled)

### QueryString
* QueryString `string`

### RejectedLogEventsInfo
* RejectedLogEventsInfo `object`: Represents the rejected events.
  * expiredLogEventEndIndex
  * tooNewLogEventStartIndex
  * tooOldLogEventEndIndex

### ResourceAlreadyExistsException


### ResourceNotFoundException


### ResourcePolicies
* ResourcePolicies `array`
  * items [ResourcePolicy](#resourcepolicy)

### ResourcePolicy
* ResourcePolicy `object`: A policy enabling one or more entities to put logs to a log group in this account.
  * lastUpdatedTime
  * policyDocument
  * policyName

### ResultField
* ResultField `object`: <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>
  * field
  * value

### ResultRows
* ResultRows `array`
  * items [ResultField](#resultfield)

### RoleArn
* RoleArn `string`

### SearchedLogStream
* SearchedLogStream `object`: Represents the search status of a log stream.
  * logStreamName
  * searchedCompletely

### SearchedLogStreams
* SearchedLogStreams `array`
  * items [SearchedLogStream](#searchedlogstream)

### SequenceToken
* SequenceToken `string`

### ServiceUnavailableException


### StartFromHead
* StartFromHead `boolean`

### StartQueryRequest
* StartQueryRequest `object`
  * endTime **required**
  * limit
  * logGroupName
  * logGroupNames
    * items [LogGroupName](#loggroupname)
  * queryString **required**
  * startTime **required**

### StartQueryResponse
* StartQueryResponse `object`
  * queryId

### StatsValue
* StatsValue `number`

### StopQueryRequest
* StopQueryRequest `object`
  * queryId **required**

### StopQueryResponse
* StopQueryResponse `object`
  * success

### StoredBytes
* StoredBytes `integer`

### SubscriptionFilter
* SubscriptionFilter `object`: Represents a subscription filter.
  * creationTime
  * destinationArn
  * distribution [Distribution](#distribution)
  * filterName
  * filterPattern [FilterPattern](#filterpattern)
  * logGroupName
  * roleArn

### SubscriptionFilters
* SubscriptionFilters `array`
  * items [SubscriptionFilter](#subscriptionfilter)

### Success
* Success `boolean`

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [TagKey](#tagkey)

### TagLogGroupRequest
* TagLogGroupRequest `object`
  * tags **required**
  * logGroupName **required**

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### TargetArn
* TargetArn `string`

### TestEventMessages
* TestEventMessages `array`
  * items [EventMessage](#eventmessage)

### TestMetricFilterRequest
* TestMetricFilterRequest `object`
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logEventMessages **required**
    * items [EventMessage](#eventmessage)

### TestMetricFilterResponse
* TestMetricFilterResponse `object`
  * matches
    * items [MetricFilterMatchRecord](#metricfiltermatchrecord)

### Timestamp
* Timestamp `integer`

### Token
* Token `string`

### UnrecognizedClientException


### UntagLogGroupRequest
* UntagLogGroupRequest `object`
  * tags **required**
    * items [TagKey](#tagkey)
  * logGroupName **required**

### Value
* Value `string`


