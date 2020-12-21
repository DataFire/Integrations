# @datafire/amazonaws_xray

Client library for AWS X-Ray

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_xray
```
```js
let amazonaws_xray = require('@datafire/amazonaws_xray').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

## Actions

### CreateGroup



```js
amazonaws_xray.CreateGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * FilterExpression `string`: The filter expression defining criteria by which to group traces.
  * GroupName **required** `string`: The case-sensitive name of the new group. Default is a reserved name and names must be unique.
  * InsightsConfiguration `object`: The structure containing configurations related to insights.
    * InsightsEnabled
    * NotificationsEnabled
  * Tags `array`: <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in the <i>AWS General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use.</p> </li> </ul>
    * items [Tag](#tag)

#### Output
* output [CreateGroupResult](#creategroupresult)

### CreateSamplingRule



```js
amazonaws_xray.CreateSamplingRule({
  "SamplingRule": {}
}, context)
```

#### Input
* input `object`
  * SamplingRule **required** `object`: A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
    * Attributes
    * FixedRate
    * HTTPMethod
    * Host
    * Priority
    * ReservoirSize
    * ResourceARN
    * RuleARN
    * RuleName
    * ServiceName
    * ServiceType
    * URLPath
    * Version
  * Tags `array`: <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in the <i>AWS General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use.</p> </li> </ul>
    * items [Tag](#tag)

#### Output
* output [CreateSamplingRuleResult](#createsamplingruleresult)

### DeleteGroup



```js
amazonaws_xray.DeleteGroup({}, context)
```

#### Input
* input `object`
  * GroupARN `string`: The ARN of the group that was generated on creation.
  * GroupName `string`: The case-sensitive name of the group.

#### Output
* output [DeleteGroupResult](#deletegroupresult)

### DeleteSamplingRule



```js
amazonaws_xray.DeleteSamplingRule({}, context)
```

#### Input
* input `object`
  * RuleARN `string`: The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * RuleName `string`: The name of the sampling rule. Specify a rule by either name or ARN, but not both.

#### Output
* output [DeleteSamplingRuleResult](#deletesamplingruleresult)

### GetEncryptionConfig



```js
amazonaws_xray.GetEncryptionConfig({}, context)
```

#### Input
* input `object`

#### Output
* output [GetEncryptionConfigResult](#getencryptionconfigresult)

### GetGroup



```js
amazonaws_xray.GetGroup({}, context)
```

#### Input
* input `object`
  * GroupARN `string`: The ARN of the group that was generated on creation.
  * GroupName `string`: The case-sensitive name of the group.

#### Output
* output [GetGroupResult](#getgroupresult)

### GetSamplingRules



```js
amazonaws_xray.GetSamplingRules({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: Pagination token.

#### Output
* output [GetSamplingRulesResult](#getsamplingrulesresult)

### GetGroups



```js
amazonaws_xray.GetGroups({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: Pagination token.

#### Output
* output [GetGroupsResult](#getgroupsresult)

### GetInsight



```js
amazonaws_xray.GetInsight({
  "InsightId": ""
}, context)
```

#### Input
* input `object`
  * InsightId **required** `string`: The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.

#### Output
* output [GetInsightResult](#getinsightresult)

### GetInsightEvents



```js
amazonaws_xray.GetInsightEvents({
  "InsightId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InsightId **required** `string`: The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
  * MaxResults `integer`: Used to retrieve at most the specified value of events.
  * NextToken `string`: Specify the pagination token returned by a previous request to retrieve the next page of events. 

#### Output
* output [GetInsightEventsResult](#getinsighteventsresult)

### GetInsightImpactGraph



```js
amazonaws_xray.GetInsightImpactGraph({
  "InsightId": "",
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * EndTime **required** `string`: The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours. 
  * InsightId **required** `string`: The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
  * NextToken `string`: Specify the pagination token returned by a previous request to retrieve the next page of results. 
  * StartTime **required** `string`: The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.

#### Output
* output [GetInsightImpactGraphResult](#getinsightimpactgraphresult)

### GetInsightSummaries



```js
amazonaws_xray.GetInsightSummaries({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EndTime **required** `string`: The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
  * GroupARN `string`: The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
  * GroupName `string`: The name of the group. Required if the GroupARN isn't provided.
  * MaxResults `integer`: The maximum number of results to display.
  * NextToken `string`: Pagination token.
  * StartTime **required** `string`: The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
  * States `array`: The list of insight states. 
    * items [InsightState](#insightstate)

#### Output
* output [GetInsightSummariesResult](#getinsightsummariesresult)

### ListTagsForResource



```js
amazonaws_xray.ListTagsForResource({
  "ResourceARN": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`: A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results.
  * ResourceARN **required** `string`: The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutEncryptionConfig



```js
amazonaws_xray.PutEncryptionConfig({
  "Type": ""
}, context)
```

#### Input
* input `object`
  * KeyId `string`: <p>An AWS KMS customer master key (CMK) in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. AWS X-Ray does not support asymmetric CMKs.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
  * Type **required** `string` (values: NONE, KMS): The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.

#### Output
* output [PutEncryptionConfigResult](#putencryptionconfigresult)

### GetSamplingStatisticSummaries



```js
amazonaws_xray.GetSamplingStatisticSummaries({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: Pagination token.

#### Output
* output [GetSamplingStatisticSummariesResult](#getsamplingstatisticsummariesresult)

### GetSamplingTargets



```js
amazonaws_xray.GetSamplingTargets({
  "SamplingStatisticsDocuments": []
}, context)
```

#### Input
* input `object`
  * SamplingStatisticsDocuments **required** `array`: Information about rules that the service is using to sample requests.
    * items [SamplingStatisticsDocument](#samplingstatisticsdocument)

#### Output
* output [GetSamplingTargetsResult](#getsamplingtargetsresult)

### GetServiceGraph



```js
amazonaws_xray.GetServiceGraph({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime **required** `string`: The end of the timeframe for which to generate a graph.
  * GroupARN `string`: The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
  * GroupName `string`: The name of a group based on which you want to generate a graph.
  * NextToken `string`: Pagination token.
  * StartTime **required** `string`: The start of the time frame for which to generate a graph.

#### Output
* output [GetServiceGraphResult](#getservicegraphresult)

### TagResource



```js
amazonaws_xray.TagResource({
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`: The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
  * Tags **required** `array`: <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in the <i>AWS General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use. You cannot edit or delete system tags.</p> </li> </ul>
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### PutTelemetryRecords



```js
amazonaws_xray.PutTelemetryRecords({
  "TelemetryRecords": []
}, context)
```

#### Input
* input `object`
  * EC2InstanceId `string`: <p/>
  * Hostname `string`: <p/>
  * ResourceARN `string`: <p/>
  * TelemetryRecords **required** `array`: <p/>
    * items [TelemetryRecord](#telemetryrecord)

#### Output
* output [PutTelemetryRecordsResult](#puttelemetryrecordsresult)

### GetTimeSeriesServiceStatistics



```js
amazonaws_xray.GetTimeSeriesServiceStatistics({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime **required** `string`: The end of the time frame for which to aggregate statistics.
  * EntitySelectorExpression `string`: A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned. 
  * ForecastStatistics `boolean`: The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.
  * GroupARN `string`: The Amazon Resource Name (ARN) of the group for which to pull statistics from.
  * GroupName `string`: The case-sensitive name of the group for which to pull statistics from.
  * NextToken `string`: Pagination token.
  * Period `integer`: Aggregation period in seconds.
  * StartTime **required** `string`: The start of the time frame for which to aggregate statistics.

#### Output
* output [GetTimeSeriesServiceStatisticsResult](#gettimeseriesservicestatisticsresult)

### GetTraceGraph



```js
amazonaws_xray.GetTraceGraph({
  "TraceIds": []
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: Pagination token.
  * TraceIds **required** `array`: Trace IDs of requests for which to generate a service graph.
    * items [TraceId](#traceid)

#### Output
* output [GetTraceGraphResult](#gettracegraphresult)

### PutTraceSegments



```js
amazonaws_xray.PutTraceSegments({
  "TraceSegmentDocuments": []
}, context)
```

#### Input
* input `object`
  * TraceSegmentDocuments **required** `array`: A string containing a JSON document defining one or more segments or subsegments.
    * items [TraceSegmentDocument](#tracesegmentdocument)

#### Output
* output [PutTraceSegmentsResult](#puttracesegmentsresult)

### GetTraceSummaries



```js
amazonaws_xray.GetTraceSummaries({
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * EndTime **required** `string`: The end of the time frame for which to retrieve traces.
  * FilterExpression `string`: Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.
  * NextToken `string`: Specify the pagination token returned by a previous request to retrieve the next page of results.
  * Sampling `boolean`: Set to <code>true</code> to get summaries for only a subset of available traces.
  * SamplingStrategy `object`: The name and value of a sampling rule to apply to a trace summary.
    * Name
    * Value
  * StartTime **required** `string`: The start of the time frame for which to retrieve traces.
  * TimeRangeType `string` (values: TraceId, Event): A parameter to indicate whether to query trace summaries by TraceId or Event time.

#### Output
* output [GetTraceSummariesResult](#gettracesummariesresult)

### BatchGetTraces



```js
amazonaws_xray.BatchGetTraces({
  "TraceIds": []
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: Pagination token.
  * TraceIds **required** `array`: Specify the trace IDs of requests for which to retrieve segments.
    * items [TraceId](#traceid)

#### Output
* output [BatchGetTracesResult](#batchgettracesresult)

### UntagResource



```js
amazonaws_xray.UntagResource({
  "ResourceARN": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`: The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
  * TagKeys **required** `array`: Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateGroup



```js
amazonaws_xray.UpdateGroup({}, context)
```

#### Input
* input `object`
  * FilterExpression `string`: The updated filter expression defining criteria by which to group traces.
  * GroupARN `string`: The ARN that was generated upon creation.
  * GroupName `string`: The case-sensitive name of the group.
  * InsightsConfiguration `object`: The structure containing configurations related to insights.
    * InsightsEnabled
    * NotificationsEnabled

#### Output
* output [UpdateGroupResult](#updategroupresult)

### UpdateSamplingRule



```js
amazonaws_xray.UpdateSamplingRule({
  "SamplingRuleUpdate": {}
}, context)
```

#### Input
* input `object`
  * SamplingRuleUpdate **required** `object`: A document specifying changes to a sampling rule's configuration.
    * Attributes
    * FixedRate
    * HTTPMethod
    * Host
    * Priority
    * ReservoirSize
    * ResourceARN
    * RuleARN
    * RuleName
    * ServiceName
    * ServiceType
    * URLPath

#### Output
* output [UpdateSamplingRuleResult](#updatesamplingruleresult)



## Definitions

### Alias
* Alias `object`: An alias for an edge.
  * Name
  * Names
    * items [String](#string)
  * Type

### AliasList
* AliasList `array`
  * items [Alias](#alias)

### AliasNames
* AliasNames `array`
  * items [String](#string)

### AmazonResourceName
* AmazonResourceName `string`

### AnnotationKey
* AnnotationKey `string`

### AnnotationValue
* AnnotationValue `object`: Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
  * BooleanValue
  * NumberValue
  * StringValue

### Annotations
* Annotations `object`

### AnomalousService
* AnomalousService `object`: The service within the service graph that has anomalously high fault rates. 
  * ServiceId [ServiceId](#serviceid)

### AnomalousServiceList
* AnomalousServiceList `array`
  * items [AnomalousService](#anomalousservice)

### AttributeKey
* AttributeKey `string`

### AttributeMap
* AttributeMap `object`

### AttributeValue
* AttributeValue `string`

### AvailabilityZoneDetail
* AvailabilityZoneDetail `object`: A list of Availability Zones corresponding to the segments in a trace.
  * Name

### BackendConnectionErrors
* BackendConnectionErrors `object`: <p/>
  * ConnectionRefusedCount
  * HTTPCode4XXCount
  * HTTPCode5XXCount
  * OtherCount
  * TimeoutCount
  * UnknownHostCount

### BatchGetTracesRequest
* BatchGetTracesRequest `object`
  * NextToken
  * TraceIds **required**
    * items [TraceId](#traceid)

### BatchGetTracesResult
* BatchGetTracesResult `object`
  * NextToken
  * Traces
    * items [Trace](#trace)
  * UnprocessedTraceIds
    * items [TraceId](#traceid)

### Boolean
* Boolean `boolean`

### BorrowCount
* BorrowCount `integer`

### ClientID
* ClientID `string`

### CreateGroupRequest
* CreateGroupRequest `object`
  * FilterExpression
  * GroupName **required**
  * InsightsConfiguration
    * InsightsEnabled
    * NotificationsEnabled
  * Tags
    * items [Tag](#tag)

### CreateGroupResult
* CreateGroupResult `object`
  * Group
    * FilterExpression
    * GroupARN
    * GroupName
    * InsightsConfiguration
      * InsightsEnabled
      * NotificationsEnabled

### CreateSamplingRuleRequest
* CreateSamplingRuleRequest `object`
  * SamplingRule **required**
    * Attributes
    * FixedRate **required**
    * HTTPMethod **required**
    * Host **required**
    * Priority **required**
    * ReservoirSize **required**
    * ResourceARN **required**
    * RuleARN
    * RuleName
    * ServiceName **required**
    * ServiceType **required**
    * URLPath **required**
    * Version **required**
  * Tags
    * items [Tag](#tag)

### CreateSamplingRuleResult
* CreateSamplingRuleResult `object`
  * SamplingRuleRecord
    * CreatedAt
    * ModifiedAt
    * SamplingRule
      * Attributes
      * FixedRate **required**
      * HTTPMethod **required**
      * Host **required**
      * Priority **required**
      * ReservoirSize **required**
      * ResourceARN **required**
      * RuleARN
      * RuleName
      * ServiceName **required**
      * ServiceType **required**
      * URLPath **required**
      * Version **required**

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupARN
  * GroupName

### DeleteGroupResult
* DeleteGroupResult `object`

### DeleteSamplingRuleRequest
* DeleteSamplingRuleRequest `object`
  * RuleARN
  * RuleName

### DeleteSamplingRuleResult
* DeleteSamplingRuleResult `object`
  * SamplingRuleRecord
    * CreatedAt
    * ModifiedAt
    * SamplingRule
      * Attributes
      * FixedRate **required**
      * HTTPMethod **required**
      * Host **required**
      * Priority **required**
      * ReservoirSize **required**
      * ResourceARN **required**
      * RuleARN
      * RuleName
      * ServiceName **required**
      * ServiceType **required**
      * URLPath **required**
      * Version **required**

### Double
* Double `number`

### EC2InstanceId
* EC2InstanceId `string`

### Edge
* Edge `object`: Information about a connection between two services.
  * Aliases
    * items [Alias](#alias)
  * EndTime
  * ReferenceId
  * ResponseTimeHistogram
    * items [HistogramEntry](#histogramentry)
  * StartTime
  * SummaryStatistics
    * ErrorStatistics
      * OtherCount
      * ThrottleCount
      * TotalCount
    * FaultStatistics
      * OtherCount
      * TotalCount
    * OkCount
    * TotalCount
    * TotalResponseTime

### EdgeList
* EdgeList `array`
  * items [Edge](#edge)

### EdgeStatistics
* EdgeStatistics `object`: Response statistics for an edge.
  * ErrorStatistics
    * OtherCount
    * ThrottleCount
    * TotalCount
  * FaultStatistics
    * OtherCount
    * TotalCount
  * OkCount
  * TotalCount
  * TotalResponseTime

### EncryptionConfig
* EncryptionConfig `object`: A configuration document that specifies encryption configuration settings.
  * KeyId
  * Status
  * Type

### EncryptionKeyId
* EncryptionKeyId `string`

### EncryptionStatus
* EncryptionStatus `string` (values: UPDATING, ACTIVE)

### EncryptionType
* EncryptionType `string` (values: NONE, KMS)

### EntitySelectorExpression
* EntitySelectorExpression `string`

### ErrorRootCause
* ErrorRootCause `object`: The root cause of a trace summary error.
  * ClientImpacting
  * Services
    * items [ErrorRootCauseService](#errorrootcauseservice)

### ErrorRootCauseEntity
* ErrorRootCauseEntity `object`: A collection of segments and corresponding subsegments associated to a trace summary error.
  * Exceptions
    * items [RootCauseException](#rootcauseexception)
  * Name
  * Remote

### ErrorRootCauseEntityPath
* ErrorRootCauseEntityPath `array`
  * items [ErrorRootCauseEntity](#errorrootcauseentity)

### ErrorRootCauseService
* ErrorRootCauseService `object`: A collection of fields identifying the services in a trace summary error.
  * AccountId
  * EntityPath
    * items [ErrorRootCauseEntity](#errorrootcauseentity)
  * Inferred
  * Name
  * Names
    * items [String](#string)
  * Type

### ErrorRootCauseServices
* ErrorRootCauseServices `array`
  * items [ErrorRootCauseService](#errorrootcauseservice)

### ErrorRootCauses
* ErrorRootCauses `array`
  * items [ErrorRootCause](#errorrootcause)

### ErrorStatistics
* ErrorStatistics `object`: Information about requests that failed with a 4xx Client Error status code.
  * OtherCount
  * ThrottleCount
  * TotalCount

### EventSummaryText
* EventSummaryText `string`

### FaultRootCause
* FaultRootCause `object`: The root cause information for a trace summary fault.
  * ClientImpacting
  * Services
    * items [FaultRootCauseService](#faultrootcauseservice)

### FaultRootCauseEntity
* FaultRootCauseEntity `object`: A collection of segments and corresponding subsegments associated to a trace summary fault error.
  * Exceptions
    * items [RootCauseException](#rootcauseexception)
  * Name
  * Remote

### FaultRootCauseEntityPath
* FaultRootCauseEntityPath `array`
  * items [FaultRootCauseEntity](#faultrootcauseentity)

### FaultRootCauseService
* FaultRootCauseService `object`: A collection of fields identifying the services in a trace summary fault.
  * AccountId
  * EntityPath
    * items [FaultRootCauseEntity](#faultrootcauseentity)
  * Inferred
  * Name
  * Names
    * items [String](#string)
  * Type

### FaultRootCauseServices
* FaultRootCauseServices `array`
  * items [FaultRootCauseService](#faultrootcauseservice)

### FaultRootCauses
* FaultRootCauses `array`
  * items [FaultRootCause](#faultrootcause)

### FaultStatistics
* FaultStatistics `object`: Information about requests that failed with a 5xx Server Error status code.
  * OtherCount
  * TotalCount

### FilterExpression
* FilterExpression `string`

### FixedRate
* FixedRate `number`

### ForecastStatistics
* ForecastStatistics `object`: The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
  * FaultCountHigh
  * FaultCountLow

### GetEncryptionConfigRequest
* GetEncryptionConfigRequest `object`

### GetEncryptionConfigResult
* GetEncryptionConfigResult `object`
  * EncryptionConfig
    * KeyId
    * Status
    * Type

### GetGroupRequest
* GetGroupRequest `object`
  * GroupARN
  * GroupName

### GetGroupResult
* GetGroupResult `object`
  * Group
    * FilterExpression
    * GroupARN
    * GroupName
    * InsightsConfiguration
      * InsightsEnabled
      * NotificationsEnabled

### GetGroupsNextToken
* GetGroupsNextToken `string`

### GetGroupsRequest
* GetGroupsRequest `object`
  * NextToken

### GetGroupsResult
* GetGroupsResult `object`
  * Groups
    * items [GroupSummary](#groupsummary)
  * NextToken

### GetInsightEventsMaxResults
* GetInsightEventsMaxResults `integer`

### GetInsightEventsRequest
* GetInsightEventsRequest `object`
  * InsightId **required**
  * MaxResults
  * NextToken

### GetInsightEventsResult
* GetInsightEventsResult `object`
  * InsightEvents
    * items [InsightEvent](#insightevent)
  * NextToken

### GetInsightImpactGraphRequest
* GetInsightImpactGraphRequest `object`
  * EndTime **required**
  * InsightId **required**
  * NextToken
  * StartTime **required**

### GetInsightImpactGraphResult
* GetInsightImpactGraphResult `object`
  * EndTime
  * InsightId
  * NextToken
  * ServiceGraphEndTime
  * ServiceGraphStartTime
  * Services
    * items [InsightImpactGraphService](#insightimpactgraphservice)
  * StartTime

### GetInsightRequest
* GetInsightRequest `object`
  * InsightId **required**

### GetInsightResult
* GetInsightResult `object`
  * Insight
    * Categories
      * items [InsightCategory](#insightcategory)
    * ClientRequestImpactStatistics
      * FaultCount
      * OkCount
      * TotalCount
    * EndTime
    * GroupARN
    * GroupName
    * InsightId
    * RootCauseServiceId [ServiceId](#serviceid)
    * RootCauseServiceRequestImpactStatistics
      * FaultCount
      * OkCount
      * TotalCount
    * StartTime
    * State
    * Summary
    * TopAnomalousServices
      * items [AnomalousService](#anomalousservice)

### GetInsightSummariesMaxResults
* GetInsightSummariesMaxResults `integer`

### GetInsightSummariesRequest
* GetInsightSummariesRequest `object`
  * EndTime **required**
  * GroupARN
  * GroupName
  * MaxResults
  * NextToken
  * StartTime **required**
  * States
    * items [InsightState](#insightstate)

### GetInsightSummariesResult
* GetInsightSummariesResult `object`
  * InsightSummaries
    * items [InsightSummary](#insightsummary)
  * NextToken

### GetSamplingRulesRequest
* GetSamplingRulesRequest `object`
  * NextToken

### GetSamplingRulesResult
* GetSamplingRulesResult `object`
  * NextToken
  * SamplingRuleRecords
    * items [SamplingRuleRecord](#samplingrulerecord)

### GetSamplingStatisticSummariesRequest
* GetSamplingStatisticSummariesRequest `object`
  * NextToken

### GetSamplingStatisticSummariesResult
* GetSamplingStatisticSummariesResult `object`
  * NextToken
  * SamplingStatisticSummaries
    * items [SamplingStatisticSummary](#samplingstatisticsummary)

### GetSamplingTargetsRequest
* GetSamplingTargetsRequest `object`
  * SamplingStatisticsDocuments **required**
    * items [SamplingStatisticsDocument](#samplingstatisticsdocument)

### GetSamplingTargetsResult
* GetSamplingTargetsResult `object`
  * LastRuleModification
  * SamplingTargetDocuments
    * items [SamplingTargetDocument](#samplingtargetdocument)
  * UnprocessedStatistics
    * items [UnprocessedStatistics](#unprocessedstatistics)

### GetServiceGraphRequest
* GetServiceGraphRequest `object`
  * EndTime **required**
  * GroupARN
  * GroupName
  * NextToken
  * StartTime **required**

### GetServiceGraphResult
* GetServiceGraphResult `object`
  * ContainsOldGroupVersions
  * EndTime
  * NextToken
  * Services
    * items [Service](#service)
  * StartTime

### GetTimeSeriesServiceStatisticsRequest
* GetTimeSeriesServiceStatisticsRequest `object`
  * EndTime **required**
  * EntitySelectorExpression
  * ForecastStatistics
  * GroupARN
  * GroupName
  * NextToken
  * Period
  * StartTime **required**

### GetTimeSeriesServiceStatisticsResult
* GetTimeSeriesServiceStatisticsResult `object`
  * ContainsOldGroupVersions
  * NextToken
  * TimeSeriesServiceStatistics
    * items [TimeSeriesServiceStatistics](#timeseriesservicestatistics)

### GetTraceGraphRequest
* GetTraceGraphRequest `object`
  * NextToken
  * TraceIds **required**
    * items [TraceId](#traceid)

### GetTraceGraphResult
* GetTraceGraphResult `object`
  * NextToken
  * Services
    * items [Service](#service)

### GetTraceSummariesRequest
* GetTraceSummariesRequest `object`
  * EndTime **required**
  * FilterExpression
  * NextToken
  * Sampling
  * SamplingStrategy
    * Name
    * Value
  * StartTime **required**
  * TimeRangeType

### GetTraceSummariesResult
* GetTraceSummariesResult `object`
  * ApproximateTime
  * NextToken
  * TraceSummaries
    * items [TraceSummary](#tracesummary)
  * TracesProcessedCount

### Group
* Group `object`: Details and metadata for a group.
  * FilterExpression
  * GroupARN
  * GroupName
  * InsightsConfiguration
    * InsightsEnabled
    * NotificationsEnabled

### GroupARN
* GroupARN `string`

### GroupName
* GroupName `string`

### GroupSummary
* GroupSummary `object`: Details for a group without metadata.
  * FilterExpression
  * GroupARN
  * GroupName
  * InsightsConfiguration
    * InsightsEnabled
    * NotificationsEnabled

### GroupSummaryList
* GroupSummaryList `array`
  * items [GroupSummary](#groupsummary)

### HTTPMethod
* HTTPMethod `string`

### Histogram
* Histogram `array`
  * items [HistogramEntry](#histogramentry)

### HistogramEntry
* HistogramEntry `object`: An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
  * Count
  * Value

### Host
* Host `string`

### Hostname
* Hostname `string`

### Http
* Http `object`: Information about an HTTP request.
  * ClientIp
  * HttpMethod
  * HttpStatus
  * HttpURL
  * UserAgent

### Insight
* Insight `object`: When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
  * Categories
    * items [InsightCategory](#insightcategory)
  * ClientRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * EndTime
  * GroupARN
  * GroupName
  * InsightId
  * RootCauseServiceId [ServiceId](#serviceid)
  * RootCauseServiceRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * StartTime
  * State
  * Summary
  * TopAnomalousServices
    * items [AnomalousService](#anomalousservice)

### InsightCategory
* InsightCategory `string` (values: FAULT)

### InsightCategoryList
* InsightCategoryList `array`
  * items [InsightCategory](#insightcategory)

### InsightEvent
* InsightEvent `object`: X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
  * ClientRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * EventTime
  * RootCauseServiceRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * Summary
  * TopAnomalousServices
    * items [AnomalousService](#anomalousservice)

### InsightEventList
* InsightEventList `array`
  * items [InsightEvent](#insightevent)

### InsightId
* InsightId `string`

### InsightImpactGraphEdge
* InsightImpactGraphEdge `object`: The connection between two service in an insight impact graph.
  * ReferenceId

### InsightImpactGraphEdgeList
* InsightImpactGraphEdgeList `array`
  * items [InsightImpactGraphEdge](#insightimpactgraphedge)

### InsightImpactGraphService
* InsightImpactGraphService `object`: Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. 
  * AccountId
  * Edges
    * items [InsightImpactGraphEdge](#insightimpactgraphedge)
  * Name
  * Names
    * items [String](#string)
  * ReferenceId
  * Type

### InsightImpactGraphServiceList
* InsightImpactGraphServiceList `array`
  * items [InsightImpactGraphService](#insightimpactgraphservice)

### InsightState
* InsightState `string` (values: ACTIVE, CLOSED)

### InsightStateList
* InsightStateList `array`
  * items [InsightState](#insightstate)

### InsightSummary
* InsightSummary `object`: Information that describes an insight.
  * Categories
    * items [InsightCategory](#insightcategory)
  * ClientRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * EndTime
  * GroupARN
  * GroupName
  * InsightId
  * LastUpdateTime
  * RootCauseServiceId [ServiceId](#serviceid)
  * RootCauseServiceRequestImpactStatistics
    * FaultCount
    * OkCount
    * TotalCount
  * StartTime
  * State
  * Summary
  * TopAnomalousServices
    * items [AnomalousService](#anomalousservice)

### InsightSummaryList
* InsightSummaryList `array`
  * items [InsightSummary](#insightsummary)

### InsightSummaryText
* InsightSummaryText `string`

### InsightsConfiguration
* InsightsConfiguration `object`: The structure containing configurations related to insights.
  * InsightsEnabled
  * NotificationsEnabled

### InstanceIdDetail
* InstanceIdDetail `object`: A list of EC2 instance IDs corresponding to the segments in a trace. 
  * Id

### Integer
* Integer `integer`

### InvalidRequestException


### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * NextToken
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### NullableBoolean
* NullableBoolean `boolean`

### NullableDouble
* NullableDouble `number`

### NullableInteger
* NullableInteger `integer`

### NullableLong
* NullableLong `integer`

### Priority
* Priority `integer`

### PutEncryptionConfigRequest
* PutEncryptionConfigRequest `object`
  * KeyId
  * Type **required**

### PutEncryptionConfigResult
* PutEncryptionConfigResult `object`
  * EncryptionConfig
    * KeyId
    * Status
    * Type

### PutTelemetryRecordsRequest
* PutTelemetryRecordsRequest `object`
  * EC2InstanceId
  * Hostname
  * ResourceARN
  * TelemetryRecords **required**
    * items [TelemetryRecord](#telemetryrecord)

### PutTelemetryRecordsResult
* PutTelemetryRecordsResult `object`

### PutTraceSegmentsRequest
* PutTraceSegmentsRequest `object`
  * TraceSegmentDocuments **required**
    * items [TraceSegmentDocument](#tracesegmentdocument)

### PutTraceSegmentsResult
* PutTraceSegmentsResult `object`
  * UnprocessedTraceSegments
    * items [UnprocessedTraceSegment](#unprocessedtracesegment)

### RequestCount
* RequestCount `integer`

### RequestImpactStatistics
* RequestImpactStatistics `object`: Statistics that describe how the incident has impacted a service.
  * FaultCount
  * OkCount
  * TotalCount

### ReservoirSize
* ReservoirSize `integer`

### ResourceARN
* ResourceARN `string`

### ResourceARNDetail
* ResourceARNDetail `object`: A list of resources ARNs corresponding to the segments in a trace.
  * ARN

### ResourceNotFoundException


### ResponseTimeRootCause
* ResponseTimeRootCause `object`: The root cause information for a response time warning.
  * ClientImpacting
  * Services
    * items [ResponseTimeRootCauseService](#responsetimerootcauseservice)

### ResponseTimeRootCauseEntity
* ResponseTimeRootCauseEntity `object`: A collection of segments and corresponding subsegments associated to a response time warning.
  * Coverage
  * Name
  * Remote

### ResponseTimeRootCauseEntityPath
* ResponseTimeRootCauseEntityPath `array`
  * items [ResponseTimeRootCauseEntity](#responsetimerootcauseentity)

### ResponseTimeRootCauseService
* ResponseTimeRootCauseService `object`: A collection of fields identifying the service in a response time warning.
  * AccountId
  * EntityPath
    * items [ResponseTimeRootCauseEntity](#responsetimerootcauseentity)
  * Inferred
  * Name
  * Names
    * items [String](#string)
  * Type

### ResponseTimeRootCauseServices
* ResponseTimeRootCauseServices `array`
  * items [ResponseTimeRootCauseService](#responsetimerootcauseservice)

### ResponseTimeRootCauses
* ResponseTimeRootCauses `array`
  * items [ResponseTimeRootCause](#responsetimerootcause)

### RootCauseException
* RootCauseException `object`: The exception associated with a root cause.
  * Message
  * Name

### RootCauseExceptions
* RootCauseExceptions `array`
  * items [RootCauseException](#rootcauseexception)

### RuleLimitExceededException


### RuleName
* RuleName `string`

### SampledCount
* SampledCount `integer`

### SamplingRule
* SamplingRule `object`: A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
  * Attributes
  * FixedRate **required**
  * HTTPMethod **required**
  * Host **required**
  * Priority **required**
  * ReservoirSize **required**
  * ResourceARN **required**
  * RuleARN
  * RuleName
  * ServiceName **required**
  * ServiceType **required**
  * URLPath **required**
  * Version **required**

### SamplingRuleRecord
* SamplingRuleRecord `object`: A <a>SamplingRule</a> and its metadata.
  * CreatedAt
  * ModifiedAt
  * SamplingRule
    * Attributes
    * FixedRate **required**
    * HTTPMethod **required**
    * Host **required**
    * Priority **required**
    * ReservoirSize **required**
    * ResourceARN **required**
    * RuleARN
    * RuleName
    * ServiceName **required**
    * ServiceType **required**
    * URLPath **required**
    * Version **required**

### SamplingRuleRecordList
* SamplingRuleRecordList `array`
  * items [SamplingRuleRecord](#samplingrulerecord)

### SamplingRuleUpdate
* SamplingRuleUpdate `object`: A document specifying changes to a sampling rule's configuration.
  * Attributes
  * FixedRate
  * HTTPMethod
  * Host
  * Priority
  * ReservoirSize
  * ResourceARN
  * RuleARN
  * RuleName
  * ServiceName
  * ServiceType
  * URLPath

### SamplingStatisticSummary
* SamplingStatisticSummary `object`: Aggregated request sampling data for a sampling rule across all services for a 10-second window.
  * BorrowCount
  * RequestCount
  * RuleName
  * SampledCount
  * Timestamp

### SamplingStatisticSummaryList
* SamplingStatisticSummaryList `array`
  * items [SamplingStatisticSummary](#samplingstatisticsummary)

### SamplingStatisticsDocument
* SamplingStatisticsDocument `object`: Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a>GetSamplingTargets</a>.
  * BorrowCount
  * ClientID **required**
  * RequestCount **required**
  * RuleName **required**
  * SampledCount **required**
  * Timestamp **required**

### SamplingStatisticsDocumentList
* SamplingStatisticsDocumentList `array`
  * items [SamplingStatisticsDocument](#samplingstatisticsdocument)

### SamplingStrategy
* SamplingStrategy `object`: The name and value of a sampling rule to apply to a trace summary.
  * Name
  * Value

### SamplingStrategyName
* SamplingStrategyName `string` (values: PartialScan, FixedRate)

### SamplingTargetDocument
* SamplingTargetDocument `object`: Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a>GetSamplingTargets</a>.
  * FixedRate
  * Interval
  * ReservoirQuota
  * ReservoirQuotaTTL
  * RuleName

### SamplingTargetDocumentList
* SamplingTargetDocumentList `array`
  * items [SamplingTargetDocument](#samplingtargetdocument)

### Segment
* Segment `object`: <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a>PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
  * Document
  * Id

### SegmentDocument
* SegmentDocument `string`

### SegmentId
* SegmentId `string`

### SegmentList
* SegmentList `array`
  * items [Segment](#segment)

### Service
* Service `object`: Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
  * AccountId
  * DurationHistogram
    * items [HistogramEntry](#histogramentry)
  * Edges
    * items [Edge](#edge)
  * EndTime
  * Name
  * Names
    * items [String](#string)
  * ReferenceId
  * ResponseTimeHistogram
    * items [HistogramEntry](#histogramentry)
  * Root
  * StartTime
  * State
  * SummaryStatistics
    * ErrorStatistics
      * OtherCount
      * ThrottleCount
      * TotalCount
    * FaultStatistics
      * OtherCount
      * TotalCount
    * OkCount
    * TotalCount
    * TotalResponseTime
  * Type

### ServiceId
* ServiceId `object`: <p/>
  * AccountId
  * Name
  * Names
    * items [String](#string)
  * Type

### ServiceIds
* ServiceIds `array`
  * items [ServiceId](#serviceid)

### ServiceList
* ServiceList `array`
  * items [Service](#service)

### ServiceName
* ServiceName `string`

### ServiceNames
* ServiceNames `array`
  * items [String](#string)

### ServiceStatistics
* ServiceStatistics `object`: Response statistics for a service.
  * ErrorStatistics
    * OtherCount
    * ThrottleCount
    * TotalCount
  * FaultStatistics
    * OtherCount
    * TotalCount
  * OkCount
  * TotalCount
  * TotalResponseTime

### ServiceType
* ServiceType `string`

### String
* String `string`

### Tag
* Tag `object`: <p>A map that contains tag keys and tag values to attach to an AWS X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in the <i>AWS General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for AWS use. You cannot edit or delete system tags.</p> </li> </ul>
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

### TelemetryRecord
* TelemetryRecord `object`: <p/>
  * BackendConnectionErrors
    * ConnectionRefusedCount
    * HTTPCode4XXCount
    * HTTPCode5XXCount
    * OtherCount
    * TimeoutCount
    * UnknownHostCount
  * SegmentsReceivedCount
  * SegmentsRejectedCount
  * SegmentsSentCount
  * SegmentsSpilloverCount
  * Timestamp **required**

### TelemetryRecordList
* TelemetryRecordList `array`
  * items [TelemetryRecord](#telemetryrecord)

### ThrottledException


### TimeRangeType
* TimeRangeType `string` (values: TraceId, Event)

### TimeSeriesServiceStatistics
* TimeSeriesServiceStatistics `object`: A list of TimeSeriesStatistic structures.
  * EdgeSummaryStatistics [EdgeStatistics](#edgestatistics)
  * ResponseTimeHistogram
    * items [HistogramEntry](#histogramentry)
  * ServiceForecastStatistics
    * FaultCountHigh
    * FaultCountLow
  * ServiceSummaryStatistics [ServiceStatistics](#servicestatistics)
  * Timestamp

### TimeSeriesServiceStatisticsList
* TimeSeriesServiceStatisticsList `array`
  * items [TimeSeriesServiceStatistics](#timeseriesservicestatistics)

### Timestamp
* Timestamp `string`

### Token
* Token `string`

### TooManyTagsException


### Trace
* Trace `object`: A collection of segment documents with matching trace IDs.
  * Duration
  * Id
  * LimitExceeded
  * Segments
    * items [Segment](#segment)

### TraceAvailabilityZones
* TraceAvailabilityZones `array`
  * items [AvailabilityZoneDetail](#availabilityzonedetail)

### TraceId
* TraceId `string`

### TraceIdList
* TraceIdList `array`
  * items [TraceId](#traceid)

### TraceInstanceIds
* TraceInstanceIds `array`
  * items [InstanceIdDetail](#instanceiddetail)

### TraceList
* TraceList `array`
  * items [Trace](#trace)

### TraceResourceARNs
* TraceResourceARNs `array`
  * items [ResourceARNDetail](#resourcearndetail)

### TraceSegmentDocument
* TraceSegmentDocument `string`

### TraceSegmentDocumentList
* TraceSegmentDocumentList `array`
  * items [TraceSegmentDocument](#tracesegmentdocument)

### TraceSummary
* TraceSummary `object`: Metadata generated from the segment documents in a trace.
  * Annotations
  * AvailabilityZones
    * items [AvailabilityZoneDetail](#availabilityzonedetail)
  * Duration
  * EntryPoint
    * AccountId
    * Name
    * Names
      * items [String](#string)
    * Type
  * ErrorRootCauses
    * items [ErrorRootCause](#errorrootcause)
  * FaultRootCauses
    * items [FaultRootCause](#faultrootcause)
  * HasError
  * HasFault
  * HasThrottle
  * Http
    * ClientIp
    * HttpMethod
    * HttpStatus
    * HttpURL
    * UserAgent
  * Id
  * InstanceIds
    * items [InstanceIdDetail](#instanceiddetail)
  * IsPartial
  * MatchedEventTime
  * ResourceARNs
    * items [ResourceARNDetail](#resourcearndetail)
  * ResponseTime
  * ResponseTimeRootCauses
    * items [ResponseTimeRootCause](#responsetimerootcause)
  * Revision
  * ServiceIds
    * items [ServiceId](#serviceid)
  * Users
    * items [TraceUser](#traceuser)

### TraceSummaryList
* TraceSummaryList `array`
  * items [TraceSummary](#tracesummary)

### TraceUser
* TraceUser `object`: Information about a user recorded in segment documents.
  * ServiceIds
    * items [ServiceId](#serviceid)
  * UserName

### TraceUsers
* TraceUsers `array`
  * items [TraceUser](#traceuser)

### URLPath
* URLPath `string`

### UnprocessedStatistics
* UnprocessedStatistics `object`: Sampling statistics from a call to <a>GetSamplingTargets</a> that X-Ray could not process.
  * ErrorCode
  * Message
  * RuleName

### UnprocessedStatisticsList
* UnprocessedStatisticsList `array`
  * items [UnprocessedStatistics](#unprocessedstatistics)

### UnprocessedTraceIdList
* UnprocessedTraceIdList `array`
  * items [TraceId](#traceid)

### UnprocessedTraceSegment
* UnprocessedTraceSegment `object`: Information about a segment that failed processing.
  * ErrorCode
  * Id
  * Message

### UnprocessedTraceSegmentList
* UnprocessedTraceSegmentList `array`
  * items [UnprocessedTraceSegment](#unprocessedtracesegment)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * FilterExpression
  * GroupARN
  * GroupName
  * InsightsConfiguration
    * InsightsEnabled
    * NotificationsEnabled

### UpdateGroupResult
* UpdateGroupResult `object`
  * Group
    * FilterExpression
    * GroupARN
    * GroupName
    * InsightsConfiguration
      * InsightsEnabled
      * NotificationsEnabled

### UpdateSamplingRuleRequest
* UpdateSamplingRuleRequest `object`
  * SamplingRuleUpdate **required**
    * Attributes
    * FixedRate
    * HTTPMethod
    * Host
    * Priority
    * ReservoirSize
    * ResourceARN
    * RuleARN
    * RuleName
    * ServiceName
    * ServiceType
    * URLPath

### UpdateSamplingRuleResult
* UpdateSamplingRuleResult `object`
  * SamplingRuleRecord
    * CreatedAt
    * ModifiedAt
    * SamplingRule
      * Attributes
      * FixedRate **required**
      * HTTPMethod **required**
      * Host **required**
      * Priority **required**
      * ReservoirSize **required**
      * ResourceARN **required**
      * RuleARN
      * RuleName
      * ServiceName **required**
      * ServiceType **required**
      * URLPath **required**
      * Version **required**

### ValueWithServiceIds
* ValueWithServiceIds `object`: Information about a segment annotation.
  * AnnotationValue
    * BooleanValue
    * NumberValue
    * StringValue
  * ServiceIds
    * items [ServiceId](#serviceid)

### ValuesWithServiceIds
* ValuesWithServiceIds `array`
  * items [ValueWithServiceIds](#valuewithserviceids)

### Version
* Version `integer`


