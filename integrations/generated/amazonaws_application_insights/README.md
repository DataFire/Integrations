# @datafire/amazonaws_application_insights

Client library for Amazon CloudWatch Application Insights

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_application_insights
```
```js
let amazonaws_application_insights = require('@datafire/amazonaws_application_insights').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

## Actions

### CreateApplication



```js
amazonaws_application_insights.CreateApplication({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * CWEMonitorEnabled
  * OpsCenterEnabled
  * OpsItemSNSTopicArn
  * ResourceGroupName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateApplicationResponse](#createapplicationresponse)

### CreateComponent



```js
amazonaws_application_insights.CreateComponent({
  "ResourceGroupName": null,
  "ComponentName": null,
  "ResourceList": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * ResourceGroupName **required**
  * ResourceList **required**
    * items [ResourceARN](#resourcearn)

#### Output
* output [CreateComponentResponse](#createcomponentresponse)

### CreateLogPattern



```js
amazonaws_application_insights.CreateLogPattern({
  "ResourceGroupName": null,
  "PatternSetName": null,
  "PatternName": null,
  "Pattern": null,
  "Rank": null
}, context)
```

#### Input
* input `object`
  * Pattern **required**
  * PatternName **required**
  * PatternSetName **required**
  * Rank **required**
  * ResourceGroupName **required**

#### Output
* output [CreateLogPatternResponse](#createlogpatternresponse)

### DeleteApplication



```js
amazonaws_application_insights.DeleteApplication({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * ResourceGroupName **required**

#### Output
* output [DeleteApplicationResponse](#deleteapplicationresponse)

### DeleteComponent



```js
amazonaws_application_insights.DeleteComponent({
  "ResourceGroupName": null,
  "ComponentName": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * ResourceGroupName **required**

#### Output
* output [DeleteComponentResponse](#deletecomponentresponse)

### DeleteLogPattern



```js
amazonaws_application_insights.DeleteLogPattern({
  "ResourceGroupName": null,
  "PatternSetName": null,
  "PatternName": null
}, context)
```

#### Input
* input `object`
  * PatternName **required**
  * PatternSetName **required**
  * ResourceGroupName **required**

#### Output
* output [DeleteLogPatternResponse](#deletelogpatternresponse)

### DescribeApplication



```js
amazonaws_application_insights.DescribeApplication({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * ResourceGroupName **required**

#### Output
* output [DescribeApplicationResponse](#describeapplicationresponse)

### DescribeComponent



```js
amazonaws_application_insights.DescribeComponent({
  "ResourceGroupName": null,
  "ComponentName": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * ResourceGroupName **required**

#### Output
* output [DescribeComponentResponse](#describecomponentresponse)

### DescribeComponentConfiguration



```js
amazonaws_application_insights.DescribeComponentConfiguration({
  "ResourceGroupName": null,
  "ComponentName": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * ResourceGroupName **required**

#### Output
* output [DescribeComponentConfigurationResponse](#describecomponentconfigurationresponse)

### DescribeComponentConfigurationRecommendation



```js
amazonaws_application_insights.DescribeComponentConfigurationRecommendation({
  "ResourceGroupName": null,
  "ComponentName": null,
  "Tier": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * ResourceGroupName **required**
  * Tier **required**

#### Output
* output [DescribeComponentConfigurationRecommendationResponse](#describecomponentconfigurationrecommendationresponse)

### DescribeLogPattern



```js
amazonaws_application_insights.DescribeLogPattern({
  "ResourceGroupName": null,
  "PatternSetName": null,
  "PatternName": null
}, context)
```

#### Input
* input `object`
  * PatternName **required**
  * PatternSetName **required**
  * ResourceGroupName **required**

#### Output
* output [DescribeLogPatternResponse](#describelogpatternresponse)

### DescribeObservation



```js
amazonaws_application_insights.DescribeObservation({
  "ObservationId": null
}, context)
```

#### Input
* input `object`
  * ObservationId **required**

#### Output
* output [DescribeObservationResponse](#describeobservationresponse)

### DescribeProblem



```js
amazonaws_application_insights.DescribeProblem({
  "ProblemId": null
}, context)
```

#### Input
* input `object`
  * ProblemId **required**

#### Output
* output [DescribeProblemResponse](#describeproblemresponse)

### DescribeProblemObservations



```js
amazonaws_application_insights.DescribeProblemObservations({
  "ProblemId": null
}, context)
```

#### Input
* input `object`
  * ProblemId **required**

#### Output
* output [DescribeProblemObservationsResponse](#describeproblemobservationsresponse)

### ListApplications



```js
amazonaws_application_insights.ListApplications({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListApplicationsResponse](#listapplicationsresponse)

### ListComponents



```js
amazonaws_application_insights.ListComponents({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceGroupName **required**

#### Output
* output [ListComponentsResponse](#listcomponentsresponse)

### ListConfigurationHistory



```js
amazonaws_application_insights.ListConfigurationHistory({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EndTime
  * EventStatus
  * MaxResults
  * NextToken
  * ResourceGroupName
  * StartTime

#### Output
* output [ListConfigurationHistoryResponse](#listconfigurationhistoryresponse)

### ListLogPatternSets



```js
amazonaws_application_insights.ListLogPatternSets({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceGroupName **required**

#### Output
* output [ListLogPatternSetsResponse](#listlogpatternsetsresponse)

### ListLogPatterns



```js
amazonaws_application_insights.ListLogPatterns({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * PatternSetName
  * ResourceGroupName **required**

#### Output
* output [ListLogPatternsResponse](#listlogpatternsresponse)

### ListProblems



```js
amazonaws_application_insights.ListProblems({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EndTime
  * MaxResults
  * NextToken
  * ResourceGroupName
  * StartTime

#### Output
* output [ListProblemsResponse](#listproblemsresponse)

### ListTagsForResource



```js
amazonaws_application_insights.ListTagsForResource({
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
amazonaws_application_insights.TagResource({
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
amazonaws_application_insights.UntagResource({
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

### UpdateApplication



```js
amazonaws_application_insights.UpdateApplication({
  "ResourceGroupName": null
}, context)
```

#### Input
* input `object`
  * CWEMonitorEnabled
  * OpsCenterEnabled
  * OpsItemSNSTopicArn
  * RemoveSNSTopic
  * ResourceGroupName **required**

#### Output
* output [UpdateApplicationResponse](#updateapplicationresponse)

### UpdateComponent



```js
amazonaws_application_insights.UpdateComponent({
  "ResourceGroupName": null,
  "ComponentName": null
}, context)
```

#### Input
* input `object`
  * ComponentName **required**
  * NewComponentName
  * ResourceGroupName **required**
  * ResourceList
    * items [ResourceARN](#resourcearn)

#### Output
* output [UpdateComponentResponse](#updatecomponentresponse)

### UpdateComponentConfiguration



```js
amazonaws_application_insights.UpdateComponentConfiguration({
  "ResourceGroupName": null,
  "ComponentName": null
}, context)
```

#### Input
* input `object`
  * ComponentConfiguration
  * ComponentName **required**
  * Monitor
  * ResourceGroupName **required**
  * Tier

#### Output
* output [UpdateComponentConfigurationResponse](#updatecomponentconfigurationresponse)

### UpdateLogPattern



```js
amazonaws_application_insights.UpdateLogPattern({
  "ResourceGroupName": null,
  "PatternSetName": null,
  "PatternName": null
}, context)
```

#### Input
* input `object`
  * Pattern
  * PatternName **required**
  * PatternSetName **required**
  * Rank
  * ResourceGroupName **required**

#### Output
* output [UpdateLogPatternResponse](#updatelogpatternresponse)



## Definitions

### AccessDeniedException


### AffectedResource
* AffectedResource `string`

### AmazonResourceName
* AmazonResourceName `string`

### ApplicationComponent
* ApplicationComponent `object`: Describes a standalone resource or similarly grouped resources that the application is made up of.
  * ComponentName
  * ComponentRemarks
  * DetectedWorkload
  * Monitor
  * OsType
  * ResourceType
  * Tier

### ApplicationComponentList
* ApplicationComponentList `array`
  * items [ApplicationComponent](#applicationcomponent)

### ApplicationInfo
* ApplicationInfo `object`: Describes the status of the application.
  * CWEMonitorEnabled
  * LifeCycle
  * OpsCenterEnabled
  * OpsItemSNSTopicArn
  * Remarks
  * ResourceGroupName

### ApplicationInfoList
* ApplicationInfoList `array`
  * items [ApplicationInfo](#applicationinfo)

### BadRequestException


### CWEMonitorEnabled
* CWEMonitorEnabled `boolean`

### CloudWatchEventDetailType
* CloudWatchEventDetailType `string`

### CloudWatchEventId
* CloudWatchEventId `string`

### CloudWatchEventSource
* CloudWatchEventSource `string` (values: EC2, CODE_DEPLOY, HEALTH, RDS)

### CodeDeployApplication
* CodeDeployApplication `string`

### CodeDeployDeploymentGroup
* CodeDeployDeploymentGroup `string`

### CodeDeployDeploymentId
* CodeDeployDeploymentId `string`

### CodeDeployInstanceGroupId
* CodeDeployInstanceGroupId `string`

### CodeDeployState
* CodeDeployState `string`

### ComponentConfiguration
* ComponentConfiguration `string`

### ComponentName
* ComponentName `string`

### ConfigurationEvent
* ConfigurationEvent `object`:  The event information. 
  * EventDetail
  * EventResourceName
  * EventResourceType
  * EventStatus
  * EventTime
  * MonitoredResourceARN

### ConfigurationEventDetail
* ConfigurationEventDetail `string`

### ConfigurationEventList
* ConfigurationEventList `array`
  * items [ConfigurationEvent](#configurationevent)

### ConfigurationEventMonitoredResourceARN
* ConfigurationEventMonitoredResourceARN `string`

### ConfigurationEventResourceName
* ConfigurationEventResourceName `string`

### ConfigurationEventResourceType
* ConfigurationEventResourceType `string` (values: CLOUDWATCH_ALARM, CLOUDWATCH_LOG, CLOUDFORMATION, SSM_ASSOCIATION)

### ConfigurationEventStatus
* ConfigurationEventStatus `string` (values: INFO, WARN, ERROR)

### ConfigurationEventTime
* ConfigurationEventTime `string`

### CreateApplicationRequest
* CreateApplicationRequest `object`
  * CWEMonitorEnabled
  * OpsCenterEnabled
  * OpsItemSNSTopicArn
  * ResourceGroupName **required**
  * Tags
    * items [Tag](#tag)

### CreateApplicationResponse
* CreateApplicationResponse `object`
  * ApplicationInfo
    * CWEMonitorEnabled
    * LifeCycle
    * OpsCenterEnabled
    * OpsItemSNSTopicArn
    * Remarks
    * ResourceGroupName

### CreateComponentRequest
* CreateComponentRequest `object`
  * ComponentName **required**
  * ResourceGroupName **required**
  * ResourceList **required**
    * items [ResourceARN](#resourcearn)

### CreateComponentResponse
* CreateComponentResponse `object`

### CreateLogPatternRequest
* CreateLogPatternRequest `object`
  * Pattern **required**
  * PatternName **required**
  * PatternSetName **required**
  * Rank **required**
  * ResourceGroupName **required**

### CreateLogPatternResponse
* CreateLogPatternResponse `object`
  * LogPattern
    * Pattern
    * PatternName
    * PatternSetName
    * Rank
  * ResourceGroupName

### CustomComponentName
* CustomComponentName `string`

### DeleteApplicationRequest
* DeleteApplicationRequest `object`
  * ResourceGroupName **required**

### DeleteApplicationResponse
* DeleteApplicationResponse `object`

### DeleteComponentRequest
* DeleteComponentRequest `object`
  * ComponentName **required**
  * ResourceGroupName **required**

### DeleteComponentResponse
* DeleteComponentResponse `object`

### DeleteLogPatternRequest
* DeleteLogPatternRequest `object`
  * PatternName **required**
  * PatternSetName **required**
  * ResourceGroupName **required**

### DeleteLogPatternResponse
* DeleteLogPatternResponse `object`

### DescribeApplicationRequest
* DescribeApplicationRequest `object`
  * ResourceGroupName **required**

### DescribeApplicationResponse
* DescribeApplicationResponse `object`
  * ApplicationInfo
    * CWEMonitorEnabled
    * LifeCycle
    * OpsCenterEnabled
    * OpsItemSNSTopicArn
    * Remarks
    * ResourceGroupName

### DescribeComponentConfigurationRecommendationRequest
* DescribeComponentConfigurationRecommendationRequest `object`
  * ComponentName **required**
  * ResourceGroupName **required**
  * Tier **required**

### DescribeComponentConfigurationRecommendationResponse
* DescribeComponentConfigurationRecommendationResponse `object`
  * ComponentConfiguration

### DescribeComponentConfigurationRequest
* DescribeComponentConfigurationRequest `object`
  * ComponentName **required**
  * ResourceGroupName **required**

### DescribeComponentConfigurationResponse
* DescribeComponentConfigurationResponse `object`
  * ComponentConfiguration
  * Monitor
  * Tier

### DescribeComponentRequest
* DescribeComponentRequest `object`
  * ComponentName **required**
  * ResourceGroupName **required**

### DescribeComponentResponse
* DescribeComponentResponse `object`
  * ApplicationComponent [ApplicationComponent](#applicationcomponent)
  * ResourceList
    * items [ResourceARN](#resourcearn)

### DescribeLogPatternRequest
* DescribeLogPatternRequest `object`
  * PatternName **required**
  * PatternSetName **required**
  * ResourceGroupName **required**

### DescribeLogPatternResponse
* DescribeLogPatternResponse `object`
  * LogPattern
    * Pattern
    * PatternName
    * PatternSetName
    * Rank
  * ResourceGroupName

### DescribeObservationRequest
* DescribeObservationRequest `object`
  * ObservationId **required**

### DescribeObservationResponse
* DescribeObservationResponse `object`
  * Observation
    * CloudWatchEventDetailType
    * CloudWatchEventId
    * CloudWatchEventSource
    * CodeDeployApplication
    * CodeDeployDeploymentGroup
    * CodeDeployDeploymentId
    * CodeDeployInstanceGroupId
    * CodeDeployState
    * EbsCause
    * EbsEvent
    * EbsRequestId
    * EbsResult
    * Ec2State
    * EndTime
    * HealthEventArn
    * HealthEventDescription
    * HealthEventTypeCategory
    * HealthEventTypeCode
    * HealthService
    * Id
    * LineTime
    * LogFilter
    * LogGroup
    * LogText
    * MetricName
    * MetricNamespace
    * RdsEventCategories
    * RdsEventMessage
    * S3EventName
    * SourceARN
    * SourceType
    * StartTime
    * StatesArn
    * StatesExecutionArn
    * StatesInput
    * StatesStatus
    * Unit
    * Value
    * XRayErrorPercent
    * XRayFaultPercent
    * XRayNodeName
    * XRayNodeType
    * XRayRequestAverageLatency
    * XRayRequestCount
    * XRayThrottlePercent

### DescribeProblemObservationsRequest
* DescribeProblemObservationsRequest `object`
  * ProblemId **required**

### DescribeProblemObservationsResponse
* DescribeProblemObservationsResponse `object`
  * RelatedObservations
    * ObservationList
      * items [Observation](#observation)

### DescribeProblemRequest
* DescribeProblemRequest `object`
  * ProblemId **required**

### DescribeProblemResponse
* DescribeProblemResponse `object`
  * Problem
    * AffectedResource
    * EndTime
    * Feedback
    * Id
    * Insights
    * ResourceGroupName
    * SeverityLevel
    * StartTime
    * Status
    * Title

### DetectedWorkload
* DetectedWorkload `object`

### EbsCause
* EbsCause `string`

### EbsEvent
* EbsEvent `string`

### EbsRequestId
* EbsRequestId `string`

### EbsResult
* EbsResult `string`

### Ec2State
* Ec2State `string`

### EndTime
* EndTime `string`

### Feedback
* Feedback `object`

### FeedbackKey
* FeedbackKey `string` (values: INSIGHTS_FEEDBACK)

### FeedbackValue
* FeedbackValue `string` (values: NOT_SPECIFIED, USEFUL, NOT_USEFUL)

### HealthEventArn
* HealthEventArn `string`

### HealthEventDescription
* HealthEventDescription `string`

### HealthEventTypeCategory
* HealthEventTypeCategory `string`

### HealthEventTypeCode
* HealthEventTypeCode `string`

### HealthService
* HealthService `string`

### Insights
* Insights `string`

### InternalServerException


### LifeCycle
* LifeCycle `string`

### LineTime
* LineTime `string`

### ListApplicationsRequest
* ListApplicationsRequest `object`
  * MaxResults
  * NextToken

### ListApplicationsResponse
* ListApplicationsResponse `object`
  * ApplicationInfoList
    * items [ApplicationInfo](#applicationinfo)
  * NextToken

### ListComponentsRequest
* ListComponentsRequest `object`
  * MaxResults
  * NextToken
  * ResourceGroupName **required**

### ListComponentsResponse
* ListComponentsResponse `object`
  * ApplicationComponentList
    * items [ApplicationComponent](#applicationcomponent)
  * NextToken

### ListConfigurationHistoryRequest
* ListConfigurationHistoryRequest `object`
  * EndTime
  * EventStatus
  * MaxResults
  * NextToken
  * ResourceGroupName
  * StartTime

### ListConfigurationHistoryResponse
* ListConfigurationHistoryResponse `object`
  * EventList
    * items [ConfigurationEvent](#configurationevent)
  * NextToken

### ListLogPatternSetsRequest
* ListLogPatternSetsRequest `object`
  * MaxResults
  * NextToken
  * ResourceGroupName **required**

### ListLogPatternSetsResponse
* ListLogPatternSetsResponse `object`
  * LogPatternSets
    * items [LogPatternSetName](#logpatternsetname)
  * NextToken
  * ResourceGroupName

### ListLogPatternsRequest
* ListLogPatternsRequest `object`
  * MaxResults
  * NextToken
  * PatternSetName
  * ResourceGroupName **required**

### ListLogPatternsResponse
* ListLogPatternsResponse `object`
  * LogPatterns
    * items [LogPattern](#logpattern)
  * NextToken
  * ResourceGroupName

### ListProblemsRequest
* ListProblemsRequest `object`
  * EndTime
  * MaxResults
  * NextToken
  * ResourceGroupName
  * StartTime

### ListProblemsResponse
* ListProblemsResponse `object`
  * NextToken
  * ProblemList
    * items [Problem](#problem)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### LogFilter
* LogFilter `string` (values: ERROR, WARN, INFO)

### LogGroup
* LogGroup `string`

### LogPattern
* LogPattern `object`: An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
  * Pattern
  * PatternName
  * PatternSetName
  * Rank

### LogPatternList
* LogPatternList `array`
  * items [LogPattern](#logpattern)

### LogPatternName
* LogPatternName `string`

### LogPatternRank
* LogPatternRank `integer`

### LogPatternRegex
* LogPatternRegex `string`

### LogPatternSetList
* LogPatternSetList `array`
  * items [LogPatternSetName](#logpatternsetname)

### LogPatternSetName
* LogPatternSetName `string`

### LogText
* LogText `string`

### MaxEntities
* MaxEntities `integer`

### MetaDataKey
* MetaDataKey `string`

### MetaDataValue
* MetaDataValue `string`

### MetricName
* MetricName `string`

### MetricNamespace
* MetricNamespace `string`

### Monitor
* Monitor `boolean`

### Observation
* Observation `object`: Describes an anomaly or error with the application.
  * CloudWatchEventDetailType
  * CloudWatchEventId
  * CloudWatchEventSource
  * CodeDeployApplication
  * CodeDeployDeploymentGroup
  * CodeDeployDeploymentId
  * CodeDeployInstanceGroupId
  * CodeDeployState
  * EbsCause
  * EbsEvent
  * EbsRequestId
  * EbsResult
  * Ec2State
  * EndTime
  * HealthEventArn
  * HealthEventDescription
  * HealthEventTypeCategory
  * HealthEventTypeCode
  * HealthService
  * Id
  * LineTime
  * LogFilter
  * LogGroup
  * LogText
  * MetricName
  * MetricNamespace
  * RdsEventCategories
  * RdsEventMessage
  * S3EventName
  * SourceARN
  * SourceType
  * StartTime
  * StatesArn
  * StatesExecutionArn
  * StatesInput
  * StatesStatus
  * Unit
  * Value
  * XRayErrorPercent
  * XRayFaultPercent
  * XRayNodeName
  * XRayNodeType
  * XRayRequestAverageLatency
  * XRayRequestCount
  * XRayThrottlePercent

### ObservationId
* ObservationId `string`

### ObservationList
* ObservationList `array`
  * items [Observation](#observation)

### OpsCenterEnabled
* OpsCenterEnabled `boolean`

### OpsItemSNSTopicArn
* OpsItemSNSTopicArn `string`

### OsType
* OsType `string` (values: WINDOWS, LINUX)

### PaginationToken
* PaginationToken `string`

### Problem
* Problem `object`: Describes a problem that is detected by correlating observations.
  * AffectedResource
  * EndTime
  * Feedback
  * Id
  * Insights
  * ResourceGroupName
  * SeverityLevel
  * StartTime
  * Status
  * Title

### ProblemId
* ProblemId `string`

### ProblemList
* ProblemList `array`
  * items [Problem](#problem)

### RdsEventCategories
* RdsEventCategories `string`

### RdsEventMessage
* RdsEventMessage `string`

### RelatedObservations
* RelatedObservations `object`: Describes observations related to the problem.
  * ObservationList
    * items [Observation](#observation)

### Remarks
* Remarks `string`

### RemoveSNSTopic
* RemoveSNSTopic `boolean`

### ResourceARN
* ResourceARN `string`

### ResourceGroupName
* ResourceGroupName `string`

### ResourceInUseException


### ResourceList
* ResourceList `array`
  * items [ResourceARN](#resourcearn)

### ResourceNotFoundException


### ResourceType
* ResourceType `string`

### S3EventName
* S3EventName `string`

### SeverityLevel
* SeverityLevel `string` (values: Low, Medium, High)

### SourceARN
* SourceARN `string`

### SourceType
* SourceType `string`

### StartTime
* StartTime `string`

### StatesArn
* StatesArn `string`

### StatesExecutionArn
* StatesExecutionArn `string`

### StatesInput
* StatesInput `string`

### StatesStatus
* StatesStatus `string`

### Status
* Status `string` (values: IGNORE, RESOLVED, PENDING)

### Tag
* Tag `object`: <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul>
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

### TagsAlreadyExistException


### Tier
* Tier `string` (values: CUSTOM, DEFAULT, DOT_NET_CORE, DOT_NET_WORKER, DOT_NET_WEB_TIER, DOT_NET_WEB, SQL_SERVER, SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP, MYSQL, POSTGRESQL, JAVA_JMX, ORACLE)

### Title
* Title `string`

### TooManyTagsException


### Unit
* Unit `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateApplicationRequest
* UpdateApplicationRequest `object`
  * CWEMonitorEnabled
  * OpsCenterEnabled
  * OpsItemSNSTopicArn
  * RemoveSNSTopic
  * ResourceGroupName **required**

### UpdateApplicationResponse
* UpdateApplicationResponse `object`
  * ApplicationInfo
    * CWEMonitorEnabled
    * LifeCycle
    * OpsCenterEnabled
    * OpsItemSNSTopicArn
    * Remarks
    * ResourceGroupName

### UpdateComponentConfigurationRequest
* UpdateComponentConfigurationRequest `object`
  * ComponentConfiguration
  * ComponentName **required**
  * Monitor
  * ResourceGroupName **required**
  * Tier

### UpdateComponentConfigurationResponse
* UpdateComponentConfigurationResponse `object`

### UpdateComponentRequest
* UpdateComponentRequest `object`
  * ComponentName **required**
  * NewComponentName
  * ResourceGroupName **required**
  * ResourceList
    * items [ResourceARN](#resourcearn)

### UpdateComponentResponse
* UpdateComponentResponse `object`

### UpdateLogPatternRequest
* UpdateLogPatternRequest `object`
  * Pattern
  * PatternName **required**
  * PatternSetName **required**
  * Rank
  * ResourceGroupName **required**

### UpdateLogPatternResponse
* UpdateLogPatternResponse `object`
  * LogPattern
    * Pattern
    * PatternName
    * PatternSetName
    * Rank
  * ResourceGroupName

### ValidationException


### Value
* Value `number`

### WorkloadMetaData
* WorkloadMetaData `object`

### XRayErrorPercent
* XRayErrorPercent `integer`

### XRayFaultPercent
* XRayFaultPercent `integer`

### XRayNodeName
* XRayNodeName `string`

### XRayNodeType
* XRayNodeType `string`

### XRayRequestAverageLatency
* XRayRequestAverageLatency `integer`

### XRayRequestCount
* XRayRequestCount `integer`

### XRayThrottlePercent
* XRayThrottlePercent `integer`


