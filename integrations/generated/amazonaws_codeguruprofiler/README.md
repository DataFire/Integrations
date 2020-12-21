# @datafire/amazonaws_codeguruprofiler

Client library for Amazon CodeGuru Profiler

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codeguruprofiler
```
```js
let amazonaws_codeguruprofiler = require('@datafire/amazonaws_codeguruprofiler').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>This section provides documentation for the Amazon CodeGuru Profiler API operations.</p> <pre><code> &lt;p&gt;Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks. &lt;/p&gt; &lt;p&gt;Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization. &lt;/p&gt; &lt;note&gt; &lt;p&gt;Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages.&lt;/p&gt; &lt;/note&gt; &lt;p&gt; For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html&quot;&gt;What is Amazon CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;. &lt;/p&gt; </code></pre>

## Actions

### GetFindingsReportAccountSummary



```js
amazonaws_codeguruprofiler.GetFindingsReportAccountSummary({}, context)
```

#### Input
* input `object`
  * dailyReportsOnly `boolean`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [GetFindingsReportAccountSummaryResponse](#getfindingsreportaccountsummaryresponse)

### SubmitFeedback



```js
amazonaws_codeguruprofiler.SubmitFeedback({
  "anomalyInstanceId": "",
  "profilingGroupName": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * anomalyInstanceId **required** `string`
  * profilingGroupName **required** `string`
  * comment `string`: Optional feedback about this anomaly.
  * type **required** `string` (values: Negative, Positive):  The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>. 

#### Output
*Output schema unknown*

### ListFindingsReports



```js
amazonaws_codeguruprofiler.ListFindingsReports({
  "endTime": "",
  "profilingGroupName": "",
  "startTime": ""
}, context)
```

#### Input
* input `object`
  * dailyReportsOnly `boolean`
  * endTime **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * profilingGroupName **required** `string`
  * startTime **required** `string`

#### Output
* output [ListFindingsReportsResponse](#listfindingsreportsresponse)

### GetRecommendations



```js
amazonaws_codeguruprofiler.GetRecommendations({
  "endTime": "",
  "profilingGroupName": "",
  "startTime": ""
}, context)
```

#### Input
* input `object`
  * endTime **required** `string`
  * locale `string`
  * profilingGroupName **required** `string`
  * startTime **required** `string`

#### Output
* output [GetRecommendationsResponse](#getrecommendationsresponse)

### ListProfilingGroups



```js
amazonaws_codeguruprofiler.ListProfilingGroups({}, context)
```

#### Input
* input `object`
  * includeDescription `boolean`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListProfilingGroupsResponse](#listprofilinggroupsresponse)

### CreateProfilingGroup



```js
amazonaws_codeguruprofiler.CreateProfilingGroup({
  "clientToken": "",
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`
  * tags `object`:  A list of tags to add to the created profiling group. 
  * agentOrchestrationConfig `object`:  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
    * profilingEnabled
  * computePlatform `string` (values: AWSLambda, Default):  The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. 
  * profilingGroupName **required** `string`: The name of the profiling group to create.

#### Output
*Output schema unknown*

### DeleteProfilingGroup



```js
amazonaws_codeguruprofiler.DeleteProfilingGroup({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`

#### Output
*Output schema unknown*

### DescribeProfilingGroup



```js
amazonaws_codeguruprofiler.DescribeProfilingGroup({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`

#### Output
* output [DescribeProfilingGroupResponse](#describeprofilinggroupresponse)

### UpdateProfilingGroup



```js
amazonaws_codeguruprofiler.UpdateProfilingGroup({
  "profilingGroupName": "",
  "agentOrchestrationConfig": {}
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`
  * agentOrchestrationConfig **required** `object`:  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
    * profilingEnabled

#### Output
* output [UpdateProfilingGroupResponse](#updateprofilinggroupresponse)

### PostAgentProfile



```js
amazonaws_codeguruprofiler.PostAgentProfile({
  "Content-Type": "",
  "profilingGroupName": "",
  "agentProfile": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * profileToken `string`
  * profilingGroupName **required** `string`
  * agentProfile **required** `string`:  The submitted profiling data. 

#### Output
*Output schema unknown*

### ConfigureAgent



```js
amazonaws_codeguruprofiler.ConfigureAgent({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`
  * fleetInstanceId `string`:  A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID. 
  * metadata `object`: <p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul>

#### Output
* output [ConfigureAgentResponse](#configureagentresponse)

### BatchGetFrameMetricData



```js
amazonaws_codeguruprofiler.BatchGetFrameMetricData({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * endTime `string`
  * period `string`
  * profilingGroupName **required** `string`
  * startTime `string`
  * targetResolution `string`
  * frameMetrics `array`:  The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.
    * items [FrameMetric](#framemetric)

#### Output
* output [BatchGetFrameMetricDataResponse](#batchgetframemetricdataresponse)

### GetNotificationConfiguration



```js
amazonaws_codeguruprofiler.GetNotificationConfiguration({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`

#### Output
* output [GetNotificationConfigurationResponse](#getnotificationconfigurationresponse)

### AddNotificationChannels



```js
amazonaws_codeguruprofiler.AddNotificationChannels({
  "profilingGroupName": "",
  "channels": []
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`
  * channels **required** `array`: One or 2 channels to report to when anomalies are detected.
    * items [Channel](#channel)

#### Output
* output [AddNotificationChannelsResponse](#addnotificationchannelsresponse)

### RemoveNotificationChannel



```js
amazonaws_codeguruprofiler.RemoveNotificationChannel({
  "channelId": "",
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * channelId **required** `string`
  * profilingGroupName **required** `string`

#### Output
* output [RemoveNotificationChannelResponse](#removenotificationchannelresponse)

### GetPolicy



```js
amazonaws_codeguruprofiler.GetPolicy({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * profilingGroupName **required** `string`

#### Output
* output [GetPolicyResponse](#getpolicyresponse)

### PutPermission



```js
amazonaws_codeguruprofiler.PutPermission({
  "actionGroup": "",
  "profilingGroupName": "",
  "principals": []
}, context)
```

#### Input
* input `object`
  * actionGroup **required** `string`
  * profilingGroupName **required** `string`
  * principals **required** `array`:  A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs. 
    * items [Principal](#principal)
  * revisionId `string`:  A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. 

#### Output
* output [PutPermissionResponse](#putpermissionresponse)

### RemovePermission



```js
amazonaws_codeguruprofiler.RemovePermission({
  "actionGroup": "",
  "profilingGroupName": "",
  "revisionId": ""
}, context)
```

#### Input
* input `object`
  * actionGroup **required** `string`
  * profilingGroupName **required** `string`
  * revisionId **required** `string`

#### Output
* output [RemovePermissionResponse](#removepermissionresponse)

### GetProfile



```js
amazonaws_codeguruprofiler.GetProfile({
  "profilingGroupName": ""
}, context)
```

#### Input
* input `object`
  * Accept `string`
  * endTime `string`
  * maxDepth `integer`
  * period `string`
  * profilingGroupName **required** `string`
  * startTime `string`

#### Output
* output [GetProfileResponse](#getprofileresponse)

### ListProfileTimes



```js
amazonaws_codeguruprofiler.ListProfileTimes({
  "endTime": "",
  "period": "",
  "profilingGroupName": "",
  "startTime": ""
}, context)
```

#### Input
* input `object`
  * endTime **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * orderBy `string`
  * period **required** `string`
  * profilingGroupName **required** `string`
  * startTime **required** `string`

#### Output
* output [ListProfileTimesResponse](#listprofiletimesresponse)

### ListTagsForResource



```js
amazonaws_codeguruprofiler.ListTagsForResource({
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
amazonaws_codeguruprofiler.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`:  The list of tags that are added to the specified resource. 

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_codeguruprofiler.UntagResource({
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

### ActionGroup
* ActionGroup `string` (values: agentPermissions)

### AddNotificationChannelsRequest
* AddNotificationChannelsRequest `object`: The structure representing the AddNotificationChannelsRequest.
  * channels **required**
    * items [Channel](#channel)

### AddNotificationChannelsResponse
* AddNotificationChannelsResponse `object`: The structure representing the AddNotificationChannelsResponse.
  * notificationConfiguration
    * channels
      * items [Channel](#channel)

### AgentConfiguration
* AgentConfiguration `object`:  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data. 
  * agentParameters
  * periodInSeconds **required**
  * shouldProfile **required**

### AgentOrchestrationConfig
* AgentOrchestrationConfig `object`:  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
  * profilingEnabled **required**

### AgentParameterField
* AgentParameterField `string` (values: MaxStackDepth, MemoryUsageLimitPercent, MinimumTimeForReportingInMilliseconds, ReportingIntervalInMilliseconds, SamplingIntervalInMilliseconds)

### AgentParameters
* AgentParameters `object`

### AgentProfile
* AgentProfile `string`

### AggregatedProfile
* AggregatedProfile `string`

### AggregatedProfileTime
* AggregatedProfileTime `object`:  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes). 
  * period
  * start

### AggregationPeriod
* AggregationPeriod `string` (values: P1D, PT1H, PT5M)

### Anomalies
* Anomalies `array`
  * items [Anomaly](#anomaly)

### Anomaly
* Anomaly `object`:  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
  * instances **required**
    * items [AnomalyInstance](#anomalyinstance)
  * metric **required**
    * frameName **required**
    * threadStates **required**
      * items [String](#string)
    * type **required**
  * reason **required**

### AnomalyInstance
* AnomalyInstance `object`: The specific duration in which the metric is flagged as anomalous.
  * endTime
  * id **required**
  * startTime **required**
  * userFeedback
    * type **required**

### AnomalyInstanceId
* AnomalyInstanceId `string`

### AnomalyInstances
* AnomalyInstances `array`
  * items [AnomalyInstance](#anomalyinstance)

### BatchGetFrameMetricDataRequest
* BatchGetFrameMetricDataRequest `object`: The structure representing the BatchGetFrameMetricDataRequest.
  * frameMetrics
    * items [FrameMetric](#framemetric)

### BatchGetFrameMetricDataResponse
* BatchGetFrameMetricDataResponse `object`: The structure representing the BatchGetFrameMetricDataResponse.
  * endTime **required**
  * endTimes **required**
    * items [TimestampStructure](#timestampstructure)
  * frameMetricData **required**
    * items [FrameMetricDatum](#framemetricdatum)
  * resolution **required**
  * startTime **required**
  * unprocessedEndTimes **required**

### Boolean
* Boolean `boolean`

### Channel
* Channel `object`: Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
  * eventPublishers **required**
    * items [EventPublisher](#eventpublisher)
  * id
  * uri **required**

### ChannelId
* ChannelId `string`

### ChannelUri
* ChannelUri `string`: Channel URI uniquely identifies a Notification Channel. TopicArn is the uri for an SNS channel, emailId is uri for an email channel etc. Currently we only support SNS channels and thus required to be an ARN

### Channels
* Channels `array`
  * items [Channel](#channel)

### ClientToken
* ClientToken `string`

### ComputePlatform
* ComputePlatform `string` (values: AWSLambda, Default)

### ConfigureAgentRequest
* ConfigureAgentRequest `object`: The structure representing the configureAgentRequest.
  * fleetInstanceId
  * metadata

### ConfigureAgentResponse
* ConfigureAgentResponse `object`: The structure representing the configureAgentResponse.
  * configuration **required**
    * agentParameters
    * periodInSeconds **required**
    * shouldProfile **required**

### ConflictException


### CreateProfilingGroupRequest
* CreateProfilingGroupRequest `object`: The structure representing the createProfiliingGroupRequest.
  * tags
  * agentOrchestrationConfig
    * profilingEnabled **required**
  * computePlatform
  * profilingGroupName **required**

### CreateProfilingGroupResponse
* CreateProfilingGroupResponse `object`: The structure representing the createProfilingGroupResponse.
  * profilingGroup **required**
    * tags
    * agentOrchestrationConfig
      * profilingEnabled **required**
    * arn
    * computePlatform
    * createdAt
    * name
    * profilingStatus
      * latestAgentOrchestratedAt
      * latestAgentProfileReportedAt
      * latestAggregatedProfile
        * period
        * start
    * updatedAt

### DeleteProfilingGroupRequest
* DeleteProfilingGroupRequest `object`: The structure representing the deleteProfilingGroupRequest.

### DeleteProfilingGroupResponse
* DeleteProfilingGroupResponse `object`: The structure representing the deleteProfilingGroupResponse.

### DescribeProfilingGroupRequest
* DescribeProfilingGroupRequest `object`: The structure representing the describeProfilingGroupRequest.

### DescribeProfilingGroupResponse
* DescribeProfilingGroupResponse `object`: The structure representing the describeProfilingGroupResponse.
  * profilingGroup **required**
    * tags
    * agentOrchestrationConfig
      * profilingEnabled **required**
    * arn
    * computePlatform
    * createdAt
    * name
    * profilingStatus
      * latestAgentOrchestratedAt
      * latestAgentProfileReportedAt
      * latestAggregatedProfile
        * period
        * start
    * updatedAt

### Double
* Double `number`

### EventPublisher
* EventPublisher `string` (values: AnomalyDetection)

### EventPublishers
* EventPublishers `array`
  * items [EventPublisher](#eventpublisher)

### FeedbackType
* FeedbackType `string` (values: Negative, Positive)

### FindingsReportId
* FindingsReportId `string`

### FindingsReportSummaries
* FindingsReportSummaries `array`
  * items [FindingsReportSummary](#findingsreportsummary)

### FindingsReportSummary
* FindingsReportSummary `object`:  Information about potential recommendations that might be created from the analysis of profiling data. 
  * id
  * profileEndTime
  * profileStartTime
  * profilingGroupName
  * totalNumberOfFindings

### FleetInstanceId
* FleetInstanceId `string`

### FrameMetric
* FrameMetric `object`:  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
  * frameName **required**
  * threadStates **required**
    * items [String](#string)
  * type **required**

### FrameMetricData
* FrameMetricData `array`
  * items [FrameMetricDatum](#framemetricdatum)

### FrameMetricDatum
* FrameMetricDatum `object`:  Information about a frame metric and its values. 
  * frameMetric **required** [FrameMetric](#framemetric)
  * values **required**
    * items [Double](#double)

### FrameMetricValues
* FrameMetricValues `array`
  * items [Double](#double)

### FrameMetrics
* FrameMetrics `array`
  * items [FrameMetric](#framemetric)

### GetFindingsReportAccountSummaryRequest
* GetFindingsReportAccountSummaryRequest `object`: The structure representing the GetFindingsReportAccountSummaryRequest.

### GetFindingsReportAccountSummaryResponse
* GetFindingsReportAccountSummaryResponse `object`: The structure representing the GetFindingsReportAccountSummaryResponse.
  * nextToken
  * reportSummaries **required**
    * items [FindingsReportSummary](#findingsreportsummary)

### GetNotificationConfigurationRequest
* GetNotificationConfigurationRequest `object`: The structure representing the GetNotificationConfigurationRequest.

### GetNotificationConfigurationResponse
* GetNotificationConfigurationResponse `object`: The structure representing the GetNotificationConfigurationResponse.
  * notificationConfiguration **required**
    * channels
      * items [Channel](#channel)

### GetPolicyRequest
* GetPolicyRequest `object`:  The structure representing the <code>getPolicyRequest</code>. 

### GetPolicyResponse
* GetPolicyResponse `object`: The structure representing the <code>getPolicyResponse</code>.
  * policy **required**
  * revisionId **required**

### GetProfileRequest
* GetProfileRequest `object`: The structure representing the getProfileRequest.

### GetProfileResponse
* GetProfileResponse `object`: The structure representing the getProfileResponse.
  * profile **required**

### GetRecommendationsRequest
* GetRecommendationsRequest `object`: The structure representing the GetRecommendationsRequest.

### GetRecommendationsResponse
* GetRecommendationsResponse `object`: The structure representing the GetRecommendationsResponse.
  * anomalies **required**
    * items [Anomaly](#anomaly)
  * profileEndTime **required**
  * profileStartTime **required**
  * profilingGroupName **required**
  * recommendations **required**
    * items [Recommendation](#recommendation)

### Integer
* Integer `integer`

### InternalServerException


### ListFindingsReportsRequest
* ListFindingsReportsRequest `object`: The structure representing the ListFindingsReportsRequest.

### ListFindingsReportsResponse
* ListFindingsReportsResponse `object`: The structure representing the ListFindingsReportsResponse.
  * findingsReportSummaries **required**
    * items [FindingsReportSummary](#findingsreportsummary)
  * nextToken

### ListOfTimestamps
* ListOfTimestamps `array`
  * items [TimestampStructure](#timestampstructure)

### ListProfileTimesRequest
* ListProfileTimesRequest `object`: The structure representing the listProfileTimesRequest.

### ListProfileTimesResponse
* ListProfileTimesResponse `object`: The structure representing the listProfileTimesResponse.
  * nextToken
  * profileTimes **required**
    * items [ProfileTime](#profiletime)

### ListProfilingGroupsRequest
* ListProfilingGroupsRequest `object`: The structure representing the listProfilingGroupsRequest.

### ListProfilingGroupsResponse
* ListProfilingGroupsResponse `object`: The structure representing the listProfilingGroupsResponse.
  * nextToken
  * profilingGroupNames **required**
    * items [ProfilingGroupName](#profilinggroupname)
  * profilingGroups
    * items [ProfilingGroupDescription](#profilinggroupdescription)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### Locale
* Locale `string`: BCP47 language code. Supported locales: de-DE, en-GB, en-US, es-ES, fr-FR, it-IT, ja-JP, ko-KR, pt-BR, zh-CN, zh-TW

### Match
* Match `object`: The part of a profile that contains a recommendation found during analysis.
  * frameAddress
  * targetFramesIndex
  * thresholdBreachValue

### Matches
* Matches `array`
  * items [Match](#match)

### MaxDepth
* MaxDepth `integer`

### MaxResults
* MaxResults `integer`

### Metadata
* Metadata `object`

### MetadataField
* MetadataField `string` (values: AgentId, AwsRequestId, ComputePlatform, ExecutionEnvironment, LambdaFunctionArn, LambdaMemoryLimitInMB, LambdaPreviousExecutionTimeInMilliseconds, LambdaRemainingTimeInMilliseconds, LambdaTimeGapBetweenInvokesInMilliseconds)

### Metric
* Metric `object`:  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. 
  * frameName **required**
  * threadStates **required**
    * items [String](#string)
  * type **required**

### MetricType
* MetricType `string` (values: AggregatedRelativeTotalTime)

### NotificationConfiguration
* NotificationConfiguration `object`: The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
  * channels
    * items [Channel](#channel)

### OrderBy
* OrderBy `string` (values: TimestampAscending, TimestampDescending)

### PaginationToken
* PaginationToken `string`

### Pattern
* Pattern `object`:  A set of rules used to make a recommendation during an analysis. 
  * countersToAggregate
    * items [String](#string)
  * description
  * id
  * name
  * resolutionSteps
  * targetFrames
    * items [TargetFrame](#targetframe)
  * thresholdPercent

### Percentage
* Percentage `number`

### Period
* Period `string`

### PostAgentProfileRequest
* PostAgentProfileRequest `object`: The structure representing the postAgentProfileRequest.
  * agentProfile **required**

### PostAgentProfileResponse
* PostAgentProfileResponse `object`: The structure representing the postAgentProfileResponse.

### Principal
* Principal `string`

### Principals
* Principals `array`
  * items [Principal](#principal)

### ProfileTime
* ProfileTime `object`:  Contains the start time of a profile. 
  * start

### ProfileTimes
* ProfileTimes `array`
  * items [ProfileTime](#profiletime)

### ProfilingGroupArn
* ProfilingGroupArn `string`

### ProfilingGroupDescription
* ProfilingGroupDescription `object`:  Contains information about a profiling group. 
  * tags
  * agentOrchestrationConfig
    * profilingEnabled **required**
  * arn
  * computePlatform
  * createdAt
  * name
  * profilingStatus
    * latestAgentOrchestratedAt
    * latestAgentProfileReportedAt
    * latestAggregatedProfile
      * period
      * start
  * updatedAt

### ProfilingGroupDescriptions
* ProfilingGroupDescriptions `array`
  * items [ProfilingGroupDescription](#profilinggroupdescription)

### ProfilingGroupName
* ProfilingGroupName `string`

### ProfilingGroupNames
* ProfilingGroupNames `array`
  * items [ProfilingGroupName](#profilinggroupname)

### ProfilingStatus
* ProfilingStatus `object`:  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. 
  * latestAgentOrchestratedAt
  * latestAgentProfileReportedAt
  * latestAggregatedProfile
    * period
    * start

### PutPermissionRequest
* PutPermissionRequest `object`: The structure representing the <code>putPermissionRequest</code>.
  * principals **required**
    * items [Principal](#principal)
  * revisionId

### PutPermissionResponse
* PutPermissionResponse `object`: The structure representing the <code>putPermissionResponse</code>.
  * policy **required**
  * revisionId **required**

### Recommendation
* Recommendation `object`: A potential improvement that was found from analyzing the profiling data.
  * allMatchesCount **required**
  * allMatchesSum **required**
  * endTime **required**
  * pattern **required**
    * countersToAggregate
      * items [String](#string)
    * description
    * id
    * name
    * resolutionSteps
    * targetFrames
      * items [TargetFrame](#targetframe)
    * thresholdPercent
  * startTime **required**
  * topMatches **required**
    * items [Match](#match)

### Recommendations
* Recommendations `array`
  * items [Recommendation](#recommendation)

### RemoveNotificationChannelRequest
* RemoveNotificationChannelRequest `object`: The structure representing the RemoveNotificationChannelRequest.

### RemoveNotificationChannelResponse
* RemoveNotificationChannelResponse `object`: The structure representing the RemoveNotificationChannelResponse.
  * notificationConfiguration
    * channels
      * items [Channel](#channel)

### RemovePermissionRequest
* RemovePermissionRequest `object`:  <pre><code> The structure representing the &lt;code&gt;removePermissionRequest&lt;/code&gt;.&lt;/p&gt; </code></pre>

### RemovePermissionResponse
* RemovePermissionResponse `object`: The structure representing the <code>removePermissionResponse</code>.
  * policy **required**
  * revisionId **required**

### ResourceNotFoundException


### RevisionId
* RevisionId `string`

### ServiceQuotaExceededException


### String
* String `string`

### Strings
* Strings `array`
  * items [String](#string)

### SubmitFeedbackRequest
* SubmitFeedbackRequest `object`: The structure representing the SubmitFeedbackRequest.
  * comment
  * type **required**

### SubmitFeedbackResponse
* SubmitFeedbackResponse `object`: The structure representing the SubmitFeedbackResponse.

### TagKeys
* TagKeys `array`
  * items [String](#string)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagsMap
* TagsMap `object`

### TargetFrame
* TargetFrame `array`
  * items [String](#string)

### TargetFrames
* TargetFrames `array`
  * items [TargetFrame](#targetframe)

### ThreadStates
* ThreadStates `array`
  * items [String](#string)

### ThrottlingException


### Timestamp
* Timestamp `string`

### TimestampStructure
* TimestampStructure `object`:  A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
  * value **required**

### UnprocessedEndTimeMap
* UnprocessedEndTimeMap `object`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateProfilingGroupRequest
* UpdateProfilingGroupRequest `object`: The structure representing the updateProfilingGroupRequest.
  * agentOrchestrationConfig **required**
    * profilingEnabled **required**

### UpdateProfilingGroupResponse
* UpdateProfilingGroupResponse `object`: The structure representing the updateProfilingGroupResponse.
  * profilingGroup **required**
    * tags
    * agentOrchestrationConfig
      * profilingEnabled **required**
    * arn
    * computePlatform
    * createdAt
    * name
    * profilingStatus
      * latestAgentOrchestratedAt
      * latestAgentProfileReportedAt
      * latestAggregatedProfile
        * period
        * start
    * updatedAt

### UserFeedback
* UserFeedback `object`: Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
  * type **required**

### ValidationException



