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

amazonaws_logs.AssociateKmsKey({
  "logGroupName": "",
  "kmsKeyId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon EC2 instances, AWS CloudTrail, or other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the AWS CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p> <p>You can use CloudWatch Logs to:</p> <ul> <li> <p> <b>Monitor logs from EC2 instances in real-time</b>: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs and send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring; so, no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException") or count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.</p> </li> <li> <p> <b>Monitor AWS CloudTrail logged events</b>: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail and use the notification to perform troubleshooting.</p> </li> <li> <p> <b>Archive log data</b>: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events older than this setting are automatically deleted. The CloudWatch Logs agent makes it easy to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it.</p> </li> </ul>

## Actions

### AssociateKmsKey



```js
amazonaws_logs.AssociateKmsKey({
  "logGroupName": "",
  "kmsKeyId": ""
}, context)
```

#### Input
* input `object`
  * kmsKeyId **required** [KmsKeyId](#kmskeyid)
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
*Output schema unknown*

### CancelExportTask



```js
amazonaws_logs.CancelExportTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** [ExportTaskId](#exporttaskid)

#### Output
*Output schema unknown*

### CreateExportTask



```js
amazonaws_logs.CreateExportTask({
  "logGroupName": "",
  "from": 0,
  "to": 0,
  "destination": ""
}, context)
```

#### Input
* input `object`
  * destination **required** [ExportDestinationBucket](#exportdestinationbucket)
  * destinationPrefix [ExportDestinationPrefix](#exportdestinationprefix)
  * from **required** [Timestamp](#timestamp)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNamePrefix [LogStreamName](#logstreamname)
  * taskName [ExportTaskName](#exporttaskname)
  * to **required** [Timestamp](#timestamp)

#### Output
* output [CreateExportTaskResponse](#createexporttaskresponse)

### CreateLogGroup



```js
amazonaws_logs.CreateLogGroup({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * kmsKeyId [KmsKeyId](#kmskeyid)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags [Tags](#tags)

#### Output
*Output schema unknown*

### CreateLogStream



```js
amazonaws_logs.CreateLogStream({
  "logGroupName": "",
  "logStreamName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)

#### Output
*Output schema unknown*

### DeleteDestination



```js
amazonaws_logs.DeleteDestination({
  "destinationName": ""
}, context)
```

#### Input
* input `object`
  * destinationName **required** [DestinationName](#destinationname)

#### Output
*Output schema unknown*

### DeleteLogGroup



```js
amazonaws_logs.DeleteLogGroup({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
*Output schema unknown*

### DeleteLogStream



```js
amazonaws_logs.DeleteLogStream({
  "logGroupName": "",
  "logStreamName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)

#### Output
*Output schema unknown*

### DeleteMetricFilter



```js
amazonaws_logs.DeleteMetricFilter({
  "logGroupName": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * filterName **required** [FilterName](#filtername)
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
*Output schema unknown*

### DeleteResourcePolicy



```js
amazonaws_logs.DeleteResourcePolicy({}, context)
```

#### Input
* input `object`
  * policyName [PolicyName](#policyname)

#### Output
*Output schema unknown*

### DeleteRetentionPolicy



```js
amazonaws_logs.DeleteRetentionPolicy({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
*Output schema unknown*

### DeleteSubscriptionFilter



```js
amazonaws_logs.DeleteSubscriptionFilter({
  "logGroupName": "",
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * filterName **required** [FilterName](#filtername)
  * logGroupName **required** [LogGroupName](#loggroupname)

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
  * DestinationNamePrefix [DestinationName](#destinationname)
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeDestinationsResponse](#describedestinationsresponse)

### DescribeExportTasks



```js
amazonaws_logs.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)
  * statusCode [ExportTaskStatusCode](#exporttaskstatuscode)
  * taskId [ExportTaskId](#exporttaskid)

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
  * limit [DescribeLimit](#describelimit)
  * logGroupNamePrefix [LogGroupName](#loggroupname)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeLogGroupsResponse](#describeloggroupsresponse)

### DescribeLogStreams



```js
amazonaws_logs.DescribeLogStreams({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * descending [Descending](#descending)
  * limit [DescribeLimit](#describelimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNamePrefix [LogStreamName](#logstreamname)
  * nextToken [NextToken](#nexttoken)
  * orderBy [OrderBy](#orderby)

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
  * filterNamePrefix [FilterName](#filtername)
  * limit [DescribeLimit](#describelimit)
  * logGroupName [LogGroupName](#loggroupname)
  * metricName [MetricName](#metricname)
  * metricNamespace [MetricNamespace](#metricnamespace)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeMetricFiltersResponse](#describemetricfiltersresponse)

### DescribeResourcePolicies



```js
amazonaws_logs.DescribeResourcePolicies({}, context)
```

#### Input
* input `object`
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeResourcePoliciesResponse](#describeresourcepoliciesresponse)

### DescribeSubscriptionFilters



```js
amazonaws_logs.DescribeSubscriptionFilters({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * filterNamePrefix [FilterName](#filtername)
  * limit [DescribeLimit](#describelimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [DescribeSubscriptionFiltersResponse](#describesubscriptionfiltersresponse)

### DisassociateKmsKey



```js
amazonaws_logs.DisassociateKmsKey({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
*Output schema unknown*

### FilterLogEvents



```js
amazonaws_logs.FilterLogEvents({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * endTime [Timestamp](#timestamp)
  * filterPattern [FilterPattern](#filterpattern)
  * interleaved [Interleaved](#interleaved)
  * limit [EventsLimit](#eventslimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNames [InputLogStreamNames](#inputlogstreamnames)
  * nextToken [NextToken](#nexttoken)
  * startTime [Timestamp](#timestamp)

#### Output
* output [FilterLogEventsResponse](#filterlogeventsresponse)

### GetLogEvents



```js
amazonaws_logs.GetLogEvents({
  "logGroupName": "",
  "logStreamName": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * nextToken `string`
  * endTime [Timestamp](#timestamp)
  * limit [EventsLimit](#eventslimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)
  * nextToken [NextToken](#nexttoken)
  * startFromHead [StartFromHead](#startfromhead)
  * startTime [Timestamp](#timestamp)

#### Output
* output [GetLogEventsResponse](#getlogeventsresponse)

### ListTagsLogGroup



```js
amazonaws_logs.ListTagsLogGroup({
  "logGroupName": ""
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

#### Output
* output [ListTagsLogGroupResponse](#listtagsloggroupresponse)

### PutDestination



```js
amazonaws_logs.PutDestination({
  "destinationName": "",
  "targetArn": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * destinationName **required** [DestinationName](#destinationname)
  * roleArn **required** [RoleArn](#rolearn)
  * targetArn **required** [TargetArn](#targetarn)

#### Output
* output [PutDestinationResponse](#putdestinationresponse)

### PutDestinationPolicy



```js
amazonaws_logs.PutDestinationPolicy({
  "destinationName": "",
  "accessPolicy": ""
}, context)
```

#### Input
* input `object`
  * accessPolicy **required** [AccessPolicy](#accesspolicy)
  * destinationName **required** [DestinationName](#destinationname)

#### Output
*Output schema unknown*

### PutLogEvents



```js
amazonaws_logs.PutLogEvents({
  "logGroupName": "",
  "logStreamName": "",
  "logEvents": []
}, context)
```

#### Input
* input `object`
  * logEvents **required** [InputLogEvents](#inputlogevents)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)
  * sequenceToken [SequenceToken](#sequencetoken)

#### Output
* output [PutLogEventsResponse](#putlogeventsresponse)

### PutMetricFilter



```js
amazonaws_logs.PutMetricFilter({
  "logGroupName": "",
  "filterName": "",
  "filterPattern": "",
  "metricTransformations": []
}, context)
```

#### Input
* input `object`
  * filterName **required** [FilterName](#filtername)
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * metricTransformations **required** [MetricTransformations](#metrictransformations)

#### Output
*Output schema unknown*

### PutResourcePolicy



```js
amazonaws_logs.PutResourcePolicy({}, context)
```

#### Input
* input `object`
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### PutRetentionPolicy



```js
amazonaws_logs.PutRetentionPolicy({
  "logGroupName": "",
  "retentionInDays": 0
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * retentionInDays **required** [Days](#days)

#### Output
*Output schema unknown*

### PutSubscriptionFilter



```js
amazonaws_logs.PutSubscriptionFilter({
  "logGroupName": "",
  "filterName": "",
  "filterPattern": "",
  "destinationArn": ""
}, context)
```

#### Input
* input `object`
  * destinationArn **required** [DestinationArn](#destinationarn)
  * distribution [Distribution](#distribution)
  * filterName **required** [FilterName](#filtername)
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * roleArn [RoleArn](#rolearn)

#### Output
*Output schema unknown*

### TagLogGroup



```js
amazonaws_logs.TagLogGroup({
  "logGroupName": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### TestMetricFilter



```js
amazonaws_logs.TestMetricFilter({
  "filterPattern": "",
  "logEventMessages": []
}, context)
```

#### Input
* input `object`
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logEventMessages **required** [TestEventMessages](#testeventmessages)

#### Output
* output [TestMetricFilterResponse](#testmetricfilterresponse)

### UntagLogGroup



```js
amazonaws_logs.UntagLogGroup({
  "logGroupName": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*



## Definitions

### AccessPolicy
* AccessPolicy `string`

### Arn
* Arn `string`

### AssociateKmsKeyRequest
* AssociateKmsKeyRequest `object`
  * kmsKeyId **required** [KmsKeyId](#kmskeyid)
  * logGroupName **required** [LogGroupName](#loggroupname)

### CancelExportTaskRequest
* CancelExportTaskRequest `object`
  * taskId **required** [ExportTaskId](#exporttaskid)

### CreateExportTaskRequest
* CreateExportTaskRequest `object`
  * destination **required** [ExportDestinationBucket](#exportdestinationbucket)
  * destinationPrefix [ExportDestinationPrefix](#exportdestinationprefix)
  * from **required** [Timestamp](#timestamp)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNamePrefix [LogStreamName](#logstreamname)
  * taskName [ExportTaskName](#exporttaskname)
  * to **required** [Timestamp](#timestamp)

### CreateExportTaskResponse
* CreateExportTaskResponse `object`
  * taskId [ExportTaskId](#exporttaskid)

### CreateLogGroupRequest
* CreateLogGroupRequest `object`
  * kmsKeyId [KmsKeyId](#kmskeyid)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags [Tags](#tags)

### CreateLogStreamRequest
* CreateLogStreamRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)

### DataAlreadyAcceptedException
* DataAlreadyAcceptedException `object`: The event was already logged.
  * expectedSequenceToken [SequenceToken](#sequencetoken)

### Days
* Days `integer`: The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.

### DefaultValue
* DefaultValue `number`

### DeleteDestinationRequest
* DeleteDestinationRequest `object`
  * destinationName **required** [DestinationName](#destinationname)

### DeleteLogGroupRequest
* DeleteLogGroupRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

### DeleteLogStreamRequest
* DeleteLogStreamRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)

### DeleteMetricFilterRequest
* DeleteMetricFilterRequest `object`
  * filterName **required** [FilterName](#filtername)
  * logGroupName **required** [LogGroupName](#loggroupname)

### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`
  * policyName [PolicyName](#policyname)

### DeleteRetentionPolicyRequest
* DeleteRetentionPolicyRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

### DeleteSubscriptionFilterRequest
* DeleteSubscriptionFilterRequest `object`
  * filterName **required** [FilterName](#filtername)
  * logGroupName **required** [LogGroupName](#loggroupname)

### Descending
* Descending `boolean`

### DescribeDestinationsRequest
* DescribeDestinationsRequest `object`
  * DestinationNamePrefix [DestinationName](#destinationname)
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)

### DescribeDestinationsResponse
* DescribeDestinationsResponse `object`
  * destinations [Destinations](#destinations)
  * nextToken [NextToken](#nexttoken)

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)
  * statusCode [ExportTaskStatusCode](#exporttaskstatuscode)
  * taskId [ExportTaskId](#exporttaskid)

### DescribeExportTasksResponse
* DescribeExportTasksResponse `object`
  * exportTasks [ExportTasks](#exporttasks)
  * nextToken [NextToken](#nexttoken)

### DescribeLimit
* DescribeLimit `integer`

### DescribeLogGroupsRequest
* DescribeLogGroupsRequest `object`
  * limit [DescribeLimit](#describelimit)
  * logGroupNamePrefix [LogGroupName](#loggroupname)
  * nextToken [NextToken](#nexttoken)

### DescribeLogGroupsResponse
* DescribeLogGroupsResponse `object`
  * logGroups [LogGroups](#loggroups)
  * nextToken [NextToken](#nexttoken)

### DescribeLogStreamsRequest
* DescribeLogStreamsRequest `object`
  * descending [Descending](#descending)
  * limit [DescribeLimit](#describelimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNamePrefix [LogStreamName](#logstreamname)
  * nextToken [NextToken](#nexttoken)
  * orderBy [OrderBy](#orderby)

### DescribeLogStreamsResponse
* DescribeLogStreamsResponse `object`
  * logStreams [LogStreams](#logstreams)
  * nextToken [NextToken](#nexttoken)

### DescribeMetricFiltersRequest
* DescribeMetricFiltersRequest `object`
  * filterNamePrefix [FilterName](#filtername)
  * limit [DescribeLimit](#describelimit)
  * logGroupName [LogGroupName](#loggroupname)
  * metricName [MetricName](#metricname)
  * metricNamespace [MetricNamespace](#metricnamespace)
  * nextToken [NextToken](#nexttoken)

### DescribeMetricFiltersResponse
* DescribeMetricFiltersResponse `object`
  * metricFilters [MetricFilters](#metricfilters)
  * nextToken [NextToken](#nexttoken)

### DescribeResourcePoliciesRequest
* DescribeResourcePoliciesRequest `object`
  * limit [DescribeLimit](#describelimit)
  * nextToken [NextToken](#nexttoken)

### DescribeResourcePoliciesResponse
* DescribeResourcePoliciesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * resourcePolicies [ResourcePolicies](#resourcepolicies)

### DescribeSubscriptionFiltersRequest
* DescribeSubscriptionFiltersRequest `object`
  * filterNamePrefix [FilterName](#filtername)
  * limit [DescribeLimit](#describelimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * nextToken [NextToken](#nexttoken)

### DescribeSubscriptionFiltersResponse
* DescribeSubscriptionFiltersResponse `object`
  * nextToken [NextToken](#nexttoken)
  * subscriptionFilters [SubscriptionFilters](#subscriptionfilters)

### Destination
* Destination `object`: Represents a cross-account destination that receives subscription log events.
  * accessPolicy [AccessPolicy](#accesspolicy)
  * arn [Arn](#arn)
  * creationTime [Timestamp](#timestamp)
  * destinationName [DestinationName](#destinationname)
  * roleArn [RoleArn](#rolearn)
  * targetArn [TargetArn](#targetarn)

### DestinationArn
* DestinationArn `string`

### DestinationName
* DestinationName `string`

### Destinations
* Destinations `array`
  * items [Destination](#destination)

### DisassociateKmsKeyRequest
* DisassociateKmsKeyRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

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
  * destination [ExportDestinationBucket](#exportdestinationbucket)
  * destinationPrefix [ExportDestinationPrefix](#exportdestinationprefix)
  * executionInfo [ExportTaskExecutionInfo](#exporttaskexecutioninfo)
  * from [Timestamp](#timestamp)
  * logGroupName [LogGroupName](#loggroupname)
  * status [ExportTaskStatus](#exporttaskstatus)
  * taskId [ExportTaskId](#exporttaskid)
  * taskName [ExportTaskName](#exporttaskname)
  * to [Timestamp](#timestamp)

### ExportTaskExecutionInfo
* ExportTaskExecutionInfo `object`: Represents the status of an export task.
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)

### ExportTaskId
* ExportTaskId `string`

### ExportTaskName
* ExportTaskName `string`

### ExportTaskStatus
* ExportTaskStatus `object`: Represents the status of an export task.
  * code [ExportTaskStatusCode](#exporttaskstatuscode)
  * message [ExportTaskStatusMessage](#exporttaskstatusmessage)

### ExportTaskStatusCode
* ExportTaskStatusCode `string` (values: CANCELLED, COMPLETED, FAILED, PENDING, PENDING_CANCEL, RUNNING)

### ExportTaskStatusMessage
* ExportTaskStatusMessage `string`

### ExportTasks
* ExportTasks `array`
  * items [ExportTask](#exporttask)

### ExtractedValues
* ExtractedValues `array`
  * items `object`
    * key [Token](#token)
    * value [Value](#value)

### FilterCount
* FilterCount `integer`

### FilterLogEventsRequest
* FilterLogEventsRequest `object`
  * endTime [Timestamp](#timestamp)
  * filterPattern [FilterPattern](#filterpattern)
  * interleaved [Interleaved](#interleaved)
  * limit [EventsLimit](#eventslimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamNames [InputLogStreamNames](#inputlogstreamnames)
  * nextToken [NextToken](#nexttoken)
  * startTime [Timestamp](#timestamp)

### FilterLogEventsResponse
* FilterLogEventsResponse `object`
  * events [FilteredLogEvents](#filteredlogevents)
  * nextToken [NextToken](#nexttoken)
  * searchedLogStreams [SearchedLogStreams](#searchedlogstreams)

### FilterName
* FilterName `string`

### FilterPattern
* FilterPattern `string`: A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain time stamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.

### FilteredLogEvent
* FilteredLogEvent `object`: Represents a matched event.
  * eventId [EventId](#eventid)
  * ingestionTime [Timestamp](#timestamp)
  * logStreamName [LogStreamName](#logstreamname)
  * message [EventMessage](#eventmessage)
  * timestamp [Timestamp](#timestamp)

### FilteredLogEvents
* FilteredLogEvents `array`
  * items [FilteredLogEvent](#filteredlogevent)

### GetLogEventsRequest
* GetLogEventsRequest `object`
  * endTime [Timestamp](#timestamp)
  * limit [EventsLimit](#eventslimit)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)
  * nextToken [NextToken](#nexttoken)
  * startFromHead [StartFromHead](#startfromhead)
  * startTime [Timestamp](#timestamp)

### GetLogEventsResponse
* GetLogEventsResponse `object`
  * events [OutputLogEvents](#outputlogevents)
  * nextBackwardToken [NextToken](#nexttoken)
  * nextForwardToken [NextToken](#nexttoken)

### InputLogEvent
* InputLogEvent `object`: Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
  * message **required** [EventMessage](#eventmessage)
  * timestamp **required** [Timestamp](#timestamp)

### InputLogEvents
* InputLogEvents `array`
  * items [InputLogEvent](#inputlogevent)

### InputLogStreamNames
* InputLogStreamNames `array`
  * items [LogStreamName](#logstreamname)

### Interleaved
* Interleaved `boolean`

### InvalidOperationException
* InvalidOperationException `object`: The operation is not valid on the specified resource.

### InvalidParameterException
* InvalidParameterException `object`: A parameter is specified incorrectly.

### InvalidSequenceTokenException
* InvalidSequenceTokenException `object`: The sequence token is not valid.
  * expectedSequenceToken [SequenceToken](#sequencetoken)

### KmsKeyId
* KmsKeyId `string`

### LimitExceededException
* LimitExceededException `object`: You have reached the maximum number of resources that can be created.

### ListTagsLogGroupRequest
* ListTagsLogGroupRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)

### ListTagsLogGroupResponse
* ListTagsLogGroupResponse `object`
  * tags [Tags](#tags)

### LogEventIndex
* LogEventIndex `integer`

### LogGroup
* LogGroup `object`: Represents a log group.
  * arn [Arn](#arn)
  * creationTime [Timestamp](#timestamp)
  * kmsKeyId [KmsKeyId](#kmskeyid)
  * logGroupName [LogGroupName](#loggroupname)
  * metricFilterCount [FilterCount](#filtercount)
  * retentionInDays [Days](#days)
  * storedBytes [StoredBytes](#storedbytes)

### LogGroupName
* LogGroupName `string`

### LogGroups
* LogGroups `array`
  * items [LogGroup](#loggroup)

### LogStream
* LogStream `object`: Represents a log stream, which is a sequence of log events from a single emitter of logs.
  * arn [Arn](#arn)
  * creationTime [Timestamp](#timestamp)
  * firstEventTimestamp [Timestamp](#timestamp)
  * lastEventTimestamp [Timestamp](#timestamp)
  * lastIngestionTime [Timestamp](#timestamp)
  * logStreamName [LogStreamName](#logstreamname)
  * storedBytes [StoredBytes](#storedbytes)
  * uploadSequenceToken [SequenceToken](#sequencetoken)

### LogStreamName
* LogStreamName `string`

### LogStreamSearchedCompletely
* LogStreamSearchedCompletely `boolean`

### LogStreams
* LogStreams `array`
  * items [LogStream](#logstream)

### MetricFilter
* MetricFilter `object`: Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
  * creationTime [Timestamp](#timestamp)
  * filterName [FilterName](#filtername)
  * filterPattern [FilterPattern](#filterpattern)
  * logGroupName [LogGroupName](#loggroupname)
  * metricTransformations [MetricTransformations](#metrictransformations)

### MetricFilterMatchRecord
* MetricFilterMatchRecord `object`: Represents a matched event.
  * eventMessage [EventMessage](#eventmessage)
  * eventNumber [EventNumber](#eventnumber)
  * extractedValues [ExtractedValues](#extractedvalues)

### MetricFilterMatches
* MetricFilterMatches `array`
  * items [MetricFilterMatchRecord](#metricfiltermatchrecord)

### MetricFilters
* MetricFilters `array`
  * items [MetricFilter](#metricfilter)

### MetricName
* MetricName `string`: The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.

### MetricNamespace
* MetricNamespace `string`

### MetricTransformation
* MetricTransformation `object`: Indicates how to transform ingested log events in to metric data in a CloudWatch metric.
  * defaultValue [DefaultValue](#defaultvalue)
  * metricName **required** [MetricName](#metricname)
  * metricNamespace **required** [MetricNamespace](#metricnamespace)
  * metricValue **required** [MetricValue](#metricvalue)

### MetricTransformations
* MetricTransformations `array`
  * items [MetricTransformation](#metrictransformation)

### MetricValue
* MetricValue `string`: The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like "Error", the value is "1" for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.

### NextToken
* NextToken `string`: The token for the next set of items to return. The token expires after 24 hours.

### OperationAbortedException
* OperationAbortedException `object`: Multiple requests to update the same resource were in conflict.

### OrderBy
* OrderBy `string` (values: LogStreamName, LastEventTime)

### OutputLogEvent
* OutputLogEvent `object`: Represents a log event.
  * ingestionTime [Timestamp](#timestamp)
  * message [EventMessage](#eventmessage)
  * timestamp [Timestamp](#timestamp)

### OutputLogEvents
* OutputLogEvents `array`
  * items [OutputLogEvent](#outputlogevent)

### PolicyDocument
* PolicyDocument `string`

### PolicyName
* PolicyName `string`

### PutDestinationPolicyRequest
* PutDestinationPolicyRequest `object`
  * accessPolicy **required** [AccessPolicy](#accesspolicy)
  * destinationName **required** [DestinationName](#destinationname)

### PutDestinationRequest
* PutDestinationRequest `object`
  * destinationName **required** [DestinationName](#destinationname)
  * roleArn **required** [RoleArn](#rolearn)
  * targetArn **required** [TargetArn](#targetarn)

### PutDestinationResponse
* PutDestinationResponse `object`
  * destination [Destination](#destination)

### PutLogEventsRequest
* PutLogEventsRequest `object`
  * logEvents **required** [InputLogEvents](#inputlogevents)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * logStreamName **required** [LogStreamName](#logstreamname)
  * sequenceToken [SequenceToken](#sequencetoken)

### PutLogEventsResponse
* PutLogEventsResponse `object`
  * nextSequenceToken [SequenceToken](#sequencetoken)
  * rejectedLogEventsInfo [RejectedLogEventsInfo](#rejectedlogeventsinfo)

### PutMetricFilterRequest
* PutMetricFilterRequest `object`
  * filterName **required** [FilterName](#filtername)
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * metricTransformations **required** [MetricTransformations](#metrictransformations)

### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`
  * resourcePolicy [ResourcePolicy](#resourcepolicy)

### PutRetentionPolicyRequest
* PutRetentionPolicyRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * retentionInDays **required** [Days](#days)

### PutSubscriptionFilterRequest
* PutSubscriptionFilterRequest `object`
  * destinationArn **required** [DestinationArn](#destinationarn)
  * distribution [Distribution](#distribution)
  * filterName **required** [FilterName](#filtername)
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logGroupName **required** [LogGroupName](#loggroupname)
  * roleArn [RoleArn](#rolearn)

### RejectedLogEventsInfo
* RejectedLogEventsInfo `object`: Represents the rejected events.
  * expiredLogEventEndIndex [LogEventIndex](#logeventindex)
  * tooNewLogEventStartIndex [LogEventIndex](#logeventindex)
  * tooOldLogEventEndIndex [LogEventIndex](#logeventindex)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The specified resource already exists.

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource does not exist.

### ResourcePolicies
* ResourcePolicies `array`
  * items [ResourcePolicy](#resourcepolicy)

### ResourcePolicy
* ResourcePolicy `object`: A policy enabling one or more entities to put logs to a log group in this account.
  * lastUpdatedTime [Timestamp](#timestamp)
  * policyDocument [PolicyDocument](#policydocument)
  * policyName [PolicyName](#policyname)

### RoleArn
* RoleArn `string`

### SearchedLogStream
* SearchedLogStream `object`: Represents the search status of a log stream.
  * logStreamName [LogStreamName](#logstreamname)
  * searchedCompletely [LogStreamSearchedCompletely](#logstreamsearchedcompletely)

### SearchedLogStreams
* SearchedLogStreams `array`
  * items [SearchedLogStream](#searchedlogstream)

### SequenceToken
* SequenceToken `string`

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service cannot complete the request.

### StartFromHead
* StartFromHead `boolean`

### StoredBytes
* StoredBytes `integer`

### SubscriptionFilter
* SubscriptionFilter `object`: Represents a subscription filter.
  * creationTime [Timestamp](#timestamp)
  * destinationArn [DestinationArn](#destinationarn)
  * distribution [Distribution](#distribution)
  * filterName [FilterName](#filtername)
  * filterPattern [FilterPattern](#filterpattern)
  * logGroupName [LogGroupName](#loggroupname)
  * roleArn [RoleArn](#rolearn)

### SubscriptionFilters
* SubscriptionFilters `array`
  * items [SubscriptionFilter](#subscriptionfilter)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [TagKey](#tagkey)

### TagLogGroupRequest
* TagLogGroupRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags **required** [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TargetArn
* TargetArn `string`

### TestEventMessages
* TestEventMessages `array`
  * items [EventMessage](#eventmessage)

### TestMetricFilterRequest
* TestMetricFilterRequest `object`
  * filterPattern **required** [FilterPattern](#filterpattern)
  * logEventMessages **required** [TestEventMessages](#testeventmessages)

### TestMetricFilterResponse
* TestMetricFilterResponse `object`
  * matches [MetricFilterMatches](#metricfiltermatches)

### Timestamp
* Timestamp `integer`

### Token
* Token `string`

### UntagLogGroupRequest
* UntagLogGroupRequest `object`
  * logGroupName **required** [LogGroupName](#loggroupname)
  * tags **required** [TagList](#taglist)

### Value
* Value `string`


