# @datafire/amazonaws_devops_guru

Client library for Amazon DevOps Guru

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_devops_guru
```
```js
let amazonaws_devops_guru = require('@datafire/amazonaws_devops_guru').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the AWS resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

## Actions

### DescribeAccountHealth



```js
amazonaws_devops_guru.DescribeAccountHealth({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountHealthResponse](#describeaccounthealthresponse)

### DescribeResourceCollectionHealth



```js
amazonaws_devops_guru.DescribeResourceCollectionHealth({
  "ResourceCollectionType": ""
}, context)
```

#### Input
* input `object`
  * ResourceCollectionType **required** `string`
  * NextToken `string`

#### Output
* output [DescribeResourceCollectionHealthResponse](#describeresourcecollectionhealthresponse)

### DescribeAccountOverview



```js
amazonaws_devops_guru.DescribeAccountOverview({
  "FromTime": ""
}, context)
```

#### Input
* input `object`
  * FromTime **required** `string`:  The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day. 
  * ToTime `string`:  The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. 

#### Output
* output [DescribeAccountOverviewResponse](#describeaccountoverviewresponse)

### ListAnomaliesForInsight



```js
amazonaws_devops_guru.ListAnomaliesForInsight({
  "InsightId": ""
}, context)
```

#### Input
* input `object`
  * InsightId **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
  * StartTimeRange `object`:  A time range used to specify when the behavior of an insight or anomaly started. 
    * FromTime
    * ToTime

#### Output
* output [ListAnomaliesForInsightResponse](#listanomaliesforinsightresponse)

### DescribeAnomaly



```js
amazonaws_devops_guru.DescribeAnomaly({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DescribeAnomalyResponse](#describeanomalyresponse)

### ListNotificationChannels



```js
amazonaws_devops_guru.ListNotificationChannels({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListNotificationChannelsResponse](#listnotificationchannelsresponse)

### AddNotificationChannel



```js
amazonaws_devops_guru.AddNotificationChannel({
  "Config": {}
}, context)
```

#### Input
* input `object`
  * Config **required** `object`:  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
    * Sns
      * TopicArn

#### Output
* output [AddNotificationChannelResponse](#addnotificationchannelresponse)

### RemoveNotificationChannel



```js
amazonaws_devops_guru.RemoveNotificationChannel({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [RemoveNotificationChannelResponse](#removenotificationchannelresponse)

### ListEvents



```js
amazonaws_devops_guru.ListEvents({
  "Filters": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters **required** `object`:  Filters you can use to specify which events are returned when <code>ListEvents</code> is called. 
    * DataSource
    * EventClass
    * EventSource
    * EventTimeRange
      * FromTime **required**
      * ToTime **required**
    * InsightId
    * ResourceCollection [ResourceCollection](#resourcecollection)
  * MaxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListEventsResponse](#listeventsresponse)

### PutFeedback



```js
amazonaws_devops_guru.PutFeedback({}, context)
```

#### Input
* input `object`
  * InsightFeedback `object`:  Information about insight feedback received from a customer. 
    * Feedback
    * Id

#### Output
* output [PutFeedbackResponse](#putfeedbackresponse)

### ListInsights



```js
amazonaws_devops_guru.ListInsights({
  "StatusFilter": {}
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
  * StatusFilter **required** `object`:  A filter used by <code>ListInsights</code> to specify which insights to return. 
    * Any
      * StartTimeRange **required**
        * FromTime
        * ToTime
      * Type **required**
    * Closed
      * EndTimeRange **required**
        * FromTime
        * ToTime
      * Type **required**
    * Ongoing
      * Type **required**

#### Output
* output [ListInsightsResponse](#listinsightsresponse)

### SearchInsights



```js
amazonaws_devops_guru.SearchInsights({
  "StartTimeRange": {},
  "Type": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `object`:  Specifies one or more severity values and one or more status values that are used to search for insights. 
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severities
      * items [InsightSeverity](#insightseverity)
    * Statuses
      * items [InsightStatus](#insightstatus)
  * MaxResults `integer`: The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
  * StartTimeRange **required** `object`:  A time range used to specify when the behavior of an insight or anomaly started. 
    * FromTime
    * ToTime
  * Type **required** `string` (values: REACTIVE, PROACTIVE):  The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>). 

#### Output
* output [SearchInsightsResponse](#searchinsightsresponse)

### DescribeInsight



```js
amazonaws_devops_guru.DescribeInsight({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [DescribeInsightResponse](#describeinsightresponse)

### ListRecommendations



```js
amazonaws_devops_guru.ListRecommendations({
  "InsightId": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * InsightId **required** `string`:  The ID of the requested insight. 
  * NextToken `string`: The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.

#### Output
* output [ListRecommendationsResponse](#listrecommendationsresponse)

### UpdateResourceCollection



```js
amazonaws_devops_guru.UpdateResourceCollection({
  "Action": "",
  "ResourceCollection": {}
}, context)
```

#### Input
* input `object`
  * Action **required** `string` (values: ADD, REMOVE):  Specifies if the resource collection in the request is added or deleted to the resource collection. 
  * ResourceCollection **required** `object`:  Contains information used to update a collection of AWS resources. 
    * CloudFormation
      * StackNames
        * items [StackName](#stackname)

#### Output
* output [UpdateResourceCollectionResponse](#updateresourcecollectionresponse)

### GetResourceCollection



```js
amazonaws_devops_guru.GetResourceCollection({
  "ResourceCollectionType": ""
}, context)
```

#### Input
* input `object`
  * ResourceCollectionType **required** `string`
  * NextToken `string`

#### Output
* output [GetResourceCollectionResponse](#getresourcecollectionresponse)

### DescribeServiceIntegration



```js
amazonaws_devops_guru.DescribeServiceIntegration({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeServiceIntegrationResponse](#describeserviceintegrationresponse)

### UpdateServiceIntegration



```js
amazonaws_devops_guru.UpdateServiceIntegration({
  "ServiceIntegration": {}
}, context)
```

#### Input
* input `object`
  * ServiceIntegration **required** `object`:  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
    * OpsCenter [OpsCenterIntegrationConfig](#opscenterintegrationconfig)

#### Output
* output [UpdateServiceIntegrationResponse](#updateserviceintegrationresponse)



## Definitions

### AccessDeniedException


### AddNotificationChannelRequest
* AddNotificationChannelRequest `object`
  * Config **required**
    * Sns **required**
      * TopicArn

### AddNotificationChannelResponse
* AddNotificationChannelResponse `object`
  * Id **required**

### AnomalyId
* AnomalyId `string`

### AnomalyLimit
* AnomalyLimit `number`

### AnomalySeverity
* AnomalySeverity `string` (values: LOW, MEDIUM, HIGH)

### AnomalySourceDetails
* AnomalySourceDetails `object`:  Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
  * CloudWatchMetrics
    * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)

### AnomalyStatus
* AnomalyStatus `string` (values: ONGOING, CLOSED)

### AnomalyTimeRange
* AnomalyTimeRange `object`:  A time range that specifies when the observed unusual behavior in an anomaly started and ended. 
  * EndTime
  * StartTime **required**

### Channels
* Channels `array`
  * items [NotificationChannel](#notificationchannel)

### CloudFormationCollection
* CloudFormationCollection `object`:  Information about AWS CloudFormation stacks. You can use stacks to specify which AWS resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>. 
  * StackNames
    * items [StackName](#stackname)

### CloudFormationCollectionFilter
* CloudFormationCollectionFilter `object`:  Information about AWS CloudFormation stacks. You can use stacks to specify which AWS resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>. 
  * StackNames
    * items [StackName](#stackname)

### CloudFormationHealth
* CloudFormationHealth `object`:  Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
  * Insight
    * MeanTimeToRecoverInMilliseconds
    * OpenProactiveInsights
    * OpenReactiveInsights
  * StackName

### CloudFormationHealths
* CloudFormationHealths `array`
  * items [CloudFormationHealth](#cloudformationhealth)

### CloudWatchMetricsDetail
* CloudWatchMetricsDetail `object`:  Information about an Amazon CloudWatch metric. 
  * Dimensions
    * items [CloudWatchMetricsDimension](#cloudwatchmetricsdimension)
  * MetricName
  * Namespace
  * Period
  * Stat
  * Unit

### CloudWatchMetricsDetails
* CloudWatchMetricsDetails `array`
  * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)

### CloudWatchMetricsDimension
* CloudWatchMetricsDimension `object`:  The dimension of a Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behaviour. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. 
  * Name
  * Value

### CloudWatchMetricsDimensionName
* CloudWatchMetricsDimensionName `string`

### CloudWatchMetricsDimensionValue
* CloudWatchMetricsDimensionValue `string`

### CloudWatchMetricsDimensions
* CloudWatchMetricsDimensions `array`
  * items [CloudWatchMetricsDimension](#cloudwatchmetricsdimension)

### CloudWatchMetricsMetricName
* CloudWatchMetricsMetricName `string`

### CloudWatchMetricsNamespace
* CloudWatchMetricsNamespace `string`

### CloudWatchMetricsPeriod
* CloudWatchMetricsPeriod `integer`

### CloudWatchMetricsStat
* CloudWatchMetricsStat `string` (values: Sum, Average, SampleCount, Minimum, Maximum, p99, p90, p50)

### CloudWatchMetricsUnit
* CloudWatchMetricsUnit `string`

### ConflictException


### DescribeAccountHealthRequest
* DescribeAccountHealthRequest `object`

### DescribeAccountHealthResponse
* DescribeAccountHealthResponse `object`
  * MetricsAnalyzed **required**
  * OpenProactiveInsights **required**
  * OpenReactiveInsights **required**

### DescribeAccountOverviewRequest
* DescribeAccountOverviewRequest `object`
  * FromTime **required**
  * ToTime

### DescribeAccountOverviewResponse
* DescribeAccountOverviewResponse `object`
  * MeanTimeToRecoverInMilliseconds **required**
  * ProactiveInsights **required**
  * ReactiveInsights **required**

### DescribeAnomalyRequest
* DescribeAnomalyRequest `object`

### DescribeAnomalyResponse
* DescribeAnomalyResponse `object`
  * ProactiveAnomaly
    * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
    * AssociatedInsightId
    * Id
    * Limit
    * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severity
    * SourceDetails
      * CloudWatchMetrics
        * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
    * Status
    * UpdateTime
  * ReactiveAnomaly
    * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
    * AssociatedInsightId
    * Id
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severity
    * SourceDetails
      * CloudWatchMetrics
        * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
    * Status

### DescribeInsightRequest
* DescribeInsightRequest `object`

### DescribeInsightResponse
* DescribeInsightResponse `object`
  * ProactiveInsight
    * Id
    * InsightTimeRange [InsightTimeRange](#insighttimerange)
    * Name
    * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severity
    * SsmOpsItemId
    * Status
  * ReactiveInsight
    * Id
    * InsightTimeRange [InsightTimeRange](#insighttimerange)
    * Name
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severity
    * SsmOpsItemId
    * Status

### DescribeResourceCollectionHealthRequest
* DescribeResourceCollectionHealthRequest `object`

### DescribeResourceCollectionHealthResponse
* DescribeResourceCollectionHealthResponse `object`
  * CloudFormation **required**
    * items [CloudFormationHealth](#cloudformationhealth)
  * NextToken

### DescribeServiceIntegrationRequest
* DescribeServiceIntegrationRequest `object`

### DescribeServiceIntegrationResponse
* DescribeServiceIntegrationResponse `object`
  * ServiceIntegration [ServiceIntegrationConfig](#serviceintegrationconfig)

### EndTimeRange
* EndTimeRange `object`:  A range of time that specifies when anomalous behavior in an anomaly or insight ended. 
  * FromTime
  * ToTime

### Event
* Event `object`:  An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
  * DataSource
  * EventClass
  * EventSource
  * Id
  * Name
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Resources
    * items [EventResource](#eventresource)
  * Time

### EventClass
* EventClass `string` (values: INFRASTRUCTURE, DEPLOYMENT, SECURITY_CHANGE, CONFIG_CHANGE, SCHEMA_CHANGE)

### EventDataSource
* EventDataSource `string` (values: AWS_CLOUD_TRAIL, AWS_CODE_DEPLOY)

### EventId
* EventId `string`

### EventName
* EventName `string`

### EventResource
* EventResource `object`:  The AWS resource that emitted an event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
  * Arn
  * Name
  * Type

### EventResourceArn
* EventResourceArn `string`

### EventResourceName
* EventResourceName `string`

### EventResourceType
* EventResourceType `string`

### EventResources
* EventResources `array`
  * items [EventResource](#eventresource)

### EventSource
* EventSource `string`

### EventTimeRange
* EventTimeRange `object`:  The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
  * FromTime **required**
  * ToTime **required**

### Events
* Events `array`
  * items [Event](#event)

### GetResourceCollectionRequest
* GetResourceCollectionRequest `object`

### GetResourceCollectionResponse
* GetResourceCollectionResponse `object`
  * NextToken
  * ResourceCollection
    * CloudFormation
      * StackNames
        * items [StackName](#stackname)

### InsightFeedback
* InsightFeedback `object`:  Information about insight feedback received from a customer. 
  * Feedback
  * Id

### InsightFeedbackOption
* InsightFeedbackOption `string` (values: VALID_COLLECTION, RECOMMENDATION_USEFUL, ALERT_TOO_SENSITIVE, DATA_NOISY_ANOMALY, DATA_INCORRECT)

### InsightHealth
* InsightHealth `object`:  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. 
  * MeanTimeToRecoverInMilliseconds
  * OpenProactiveInsights
  * OpenReactiveInsights

### InsightId
* InsightId `string`

### InsightName
* InsightName `string`

### InsightSeverities
* InsightSeverities `array`
  * items [InsightSeverity](#insightseverity)

### InsightSeverity
* InsightSeverity `string` (values: LOW, MEDIUM, HIGH)

### InsightStatus
* InsightStatus `string` (values: ONGOING, CLOSED)

### InsightStatuses
* InsightStatuses `array`
  * items [InsightStatus](#insightstatus)

### InsightTimeRange
* InsightTimeRange `object`:  A time ranged that specifies when the observed behavior in an insight started and ended. 
  * EndTime
  * StartTime **required**

### InsightType
* InsightType `string` (values: REACTIVE, PROACTIVE)

### InternalServerException


### ListAnomaliesForInsightMaxResults
* ListAnomaliesForInsightMaxResults `integer`

### ListAnomaliesForInsightRequest
* ListAnomaliesForInsightRequest `object`
  * MaxResults
  * NextToken
  * StartTimeRange
    * FromTime
    * ToTime

### ListAnomaliesForInsightResponse
* ListAnomaliesForInsightResponse `object`
  * NextToken
  * ProactiveAnomalies
    * items [ProactiveAnomalySummary](#proactiveanomalysummary)
  * ReactiveAnomalies
    * items [ReactiveAnomalySummary](#reactiveanomalysummary)

### ListEventsFilters
* ListEventsFilters `object`:  Filters you can use to specify which events are returned when <code>ListEvents</code> is called. 
  * DataSource
  * EventClass
  * EventSource
  * EventTimeRange
    * FromTime **required**
    * ToTime **required**
  * InsightId
  * ResourceCollection [ResourceCollection](#resourcecollection)

### ListEventsMaxResults
* ListEventsMaxResults `integer`

### ListEventsRequest
* ListEventsRequest `object`
  * Filters **required**
    * DataSource
    * EventClass
    * EventSource
    * EventTimeRange
      * FromTime **required**
      * ToTime **required**
    * InsightId
    * ResourceCollection [ResourceCollection](#resourcecollection)
  * MaxResults
  * NextToken

### ListEventsResponse
* ListEventsResponse `object`
  * Events **required**
    * items [Event](#event)
  * NextToken

### ListInsightsAnyStatusFilter
* ListInsightsAnyStatusFilter `object`:  Used to filter for insights that have any status. 
  * StartTimeRange **required**
    * FromTime
    * ToTime
  * Type **required**

### ListInsightsClosedStatusFilter
* ListInsightsClosedStatusFilter `object`:  Used to filter for insights that have the status <code>CLOSED</code>. 
  * EndTimeRange **required**
    * FromTime
    * ToTime
  * Type **required**

### ListInsightsMaxResults
* ListInsightsMaxResults `integer`

### ListInsightsOngoingStatusFilter
* ListInsightsOngoingStatusFilter `object`:  Used to filter for insights that have the status <code>ONGOING</code>. 
  * Type **required**

### ListInsightsRequest
* ListInsightsRequest `object`
  * MaxResults
  * NextToken
  * StatusFilter **required**
    * Any
      * StartTimeRange **required**
        * FromTime
        * ToTime
      * Type **required**
    * Closed
      * EndTimeRange **required**
        * FromTime
        * ToTime
      * Type **required**
    * Ongoing
      * Type **required**

### ListInsightsResponse
* ListInsightsResponse `object`
  * NextToken
  * ProactiveInsights
    * items [ProactiveInsightSummary](#proactiveinsightsummary)
  * ReactiveInsights
    * items [ReactiveInsightSummary](#reactiveinsightsummary)

### ListInsightsStatusFilter
* ListInsightsStatusFilter `object`:  A filter used by <code>ListInsights</code> to specify which insights to return. 
  * Any
    * StartTimeRange **required**
      * FromTime
      * ToTime
    * Type **required**
  * Closed
    * EndTimeRange **required**
      * FromTime
      * ToTime
    * Type **required**
  * Ongoing
    * Type **required**

### ListNotificationChannelsRequest
* ListNotificationChannelsRequest `object`
  * NextToken

### ListNotificationChannelsResponse
* ListNotificationChannelsResponse `object`
  * Channels
    * items [NotificationChannel](#notificationchannel)
  * NextToken

### ListRecommendationsRequest
* ListRecommendationsRequest `object`
  * InsightId **required**
  * NextToken

### ListRecommendationsResponse
* ListRecommendationsResponse `object`
  * NextToken
  * Recommendations
    * items [Recommendation](#recommendation)

### MeanTimeToRecoverInMilliseconds
* MeanTimeToRecoverInMilliseconds `integer`

### NotificationChannel
* NotificationChannel `object`: <p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
  * Config
    * Sns **required**
      * TopicArn
  * Id

### NotificationChannelConfig
* NotificationChannelConfig `object`:  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
  * Sns **required**
    * TopicArn

### NotificationChannelId
* NotificationChannelId `string`

### NumMetricsAnalyzed
* NumMetricsAnalyzed `integer`

### NumOpenProactiveInsights
* NumOpenProactiveInsights `integer`

### NumOpenReactiveInsights
* NumOpenReactiveInsights `integer`

### NumProactiveInsights
* NumProactiveInsights `integer`

### NumReactiveInsights
* NumReactiveInsights `integer`

### OpsCenterIntegration
* OpsCenterIntegration `object`:  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
  * OptInStatus

### OpsCenterIntegrationConfig
* OpsCenterIntegrationConfig `object`:  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
  * OptInStatus

### OptInStatus
* OptInStatus `string` (values: ENABLED, DISABLED):  Specifies if DevOps Guru is enabled to create an AWS Systems Manager OpsItem for each created insight. 

### PredictionTimeRange
* PredictionTimeRange `object`:  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. 
  * EndTime
  * StartTime **required**

### ProactiveAnomalies
* ProactiveAnomalies `array`
  * items [ProactiveAnomalySummary](#proactiveanomalysummary)

### ProactiveAnomaly
* ProactiveAnomaly `object`: Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
  * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
  * AssociatedInsightId
  * Id
  * Limit
  * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SourceDetails
    * CloudWatchMetrics
      * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
  * Status
  * UpdateTime

### ProactiveAnomalySummary
* ProactiveAnomalySummary `object`: Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
  * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
  * AssociatedInsightId
  * Id
  * Limit
  * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SourceDetails
    * CloudWatchMetrics
      * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
  * Status
  * UpdateTime

### ProactiveInsight
* ProactiveInsight `object`: Details about a proactive insight. This object is returned by <code>ListInsights</code>.
  * Id
  * InsightTimeRange [InsightTimeRange](#insighttimerange)
  * Name
  * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SsmOpsItemId
  * Status

### ProactiveInsightSummary
* ProactiveInsightSummary `object`: Details about a proactive insight. This object is returned by <code>DescribeInsight.</code> 
  * Id
  * InsightTimeRange [InsightTimeRange](#insighttimerange)
  * Name
  * PredictionTimeRange [PredictionTimeRange](#predictiontimerange)
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * Status

### ProactiveInsights
* ProactiveInsights `array`
  * items [ProactiveInsightSummary](#proactiveinsightsummary)

### PutFeedbackRequest
* PutFeedbackRequest `object`
  * InsightFeedback
    * Feedback
    * Id

### PutFeedbackResponse
* PutFeedbackResponse `object`

### ReactiveAnomalies
* ReactiveAnomalies `array`
  * items [ReactiveAnomalySummary](#reactiveanomalysummary)

### ReactiveAnomaly
* ReactiveAnomaly `object`: Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.
  * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
  * AssociatedInsightId
  * Id
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SourceDetails
    * CloudWatchMetrics
      * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
  * Status

### ReactiveAnomalySummary
* ReactiveAnomalySummary `object`: Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
  * AnomalyTimeRange [AnomalyTimeRange](#anomalytimerange)
  * AssociatedInsightId
  * Id
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SourceDetails
    * CloudWatchMetrics
      * items [CloudWatchMetricsDetail](#cloudwatchmetricsdetail)
  * Status

### ReactiveInsight
* ReactiveInsight `object`:  Information about a reactive insight. This object is returned by <code>ListInsights</code>. 
  * Id
  * InsightTimeRange [InsightTimeRange](#insighttimerange)
  * Name
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * SsmOpsItemId
  * Status

### ReactiveInsightSummary
* ReactiveInsightSummary `object`:  Information about a reactive insight. This object is returned by <code>DescribeInsight.</code> 
  * Id
  * InsightTimeRange [InsightTimeRange](#insighttimerange)
  * Name
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severity
  * Status

### ReactiveInsights
* ReactiveInsights `array`
  * items [ReactiveInsightSummary](#reactiveinsightsummary)

### Recommendation
* Recommendation `object`:  Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
  * Description
  * Link
  * Name
  * Reason
  * RelatedAnomalies
    * items [RecommendationRelatedAnomaly](#recommendationrelatedanomaly)
  * RelatedEvents
    * items [RecommendationRelatedEvent](#recommendationrelatedevent)

### RecommendationDescription
* RecommendationDescription `string`

### RecommendationLink
* RecommendationLink `string`

### RecommendationName
* RecommendationName `string`

### RecommendationReason
* RecommendationReason `string`

### RecommendationRelatedAnomalies
* RecommendationRelatedAnomalies `array`
  * items [RecommendationRelatedAnomaly](#recommendationrelatedanomaly)

### RecommendationRelatedAnomaly
* RecommendationRelatedAnomaly `object`:  Information about an anomaly that is related to a recommendation. 
  * Resources
    * items [RecommendationRelatedAnomalyResource](#recommendationrelatedanomalyresource)
  * SourceDetails
    * items [RecommendationRelatedAnomalySourceDetail](#recommendationrelatedanomalysourcedetail)

### RecommendationRelatedAnomalyResource
* RecommendationRelatedAnomalyResource `object`:  Information about a resource in which DevOps Guru detected anomalous behavior. 
  * Name
  * Type

### RecommendationRelatedAnomalyResourceName
* RecommendationRelatedAnomalyResourceName `string`

### RecommendationRelatedAnomalyResourceType
* RecommendationRelatedAnomalyResourceType `string`

### RecommendationRelatedAnomalyResources
* RecommendationRelatedAnomalyResources `array`
  * items [RecommendationRelatedAnomalyResource](#recommendationrelatedanomalyresource)

### RecommendationRelatedAnomalySourceDetail
* RecommendationRelatedAnomalySourceDetail `object`:  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
  * CloudWatchMetrics
    * items [RecommendationRelatedCloudWatchMetricsSourceDetail](#recommendationrelatedcloudwatchmetricssourcedetail)

### RecommendationRelatedCloudWatchMetricsSourceDetail
* RecommendationRelatedCloudWatchMetricsSourceDetail `object`:  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. 
  * MetricName
  * Namespace

### RecommendationRelatedCloudWatchMetricsSourceDetails
* RecommendationRelatedCloudWatchMetricsSourceDetails `array`
  * items [RecommendationRelatedCloudWatchMetricsSourceDetail](#recommendationrelatedcloudwatchmetricssourcedetail)

### RecommendationRelatedCloudWatchMetricsSourceMetricName
* RecommendationRelatedCloudWatchMetricsSourceMetricName `string`

### RecommendationRelatedCloudWatchMetricsSourceNamespace
* RecommendationRelatedCloudWatchMetricsSourceNamespace `string`

### RecommendationRelatedEvent
* RecommendationRelatedEvent `object`:  Information about an event that is related to a recommendation. 
  * Name
  * Resources
    * items [RecommendationRelatedEventResource](#recommendationrelatedeventresource)

### RecommendationRelatedEventName
* RecommendationRelatedEventName `string`

### RecommendationRelatedEventResource
* RecommendationRelatedEventResource `object`:  Information about an AWS resource that emitted and event that is related to a recommendation in an insight. 
  * Name
  * Type

### RecommendationRelatedEventResourceName
* RecommendationRelatedEventResourceName `string`

### RecommendationRelatedEventResourceType
* RecommendationRelatedEventResourceType `string`

### RecommendationRelatedEventResources
* RecommendationRelatedEventResources `array`
  * items [RecommendationRelatedEventResource](#recommendationrelatedeventresource)

### RecommendationRelatedEvents
* RecommendationRelatedEvents `array`
  * items [RecommendationRelatedEvent](#recommendationrelatedevent)

### Recommendations
* Recommendations `array`
  * items [Recommendation](#recommendation)

### RelatedAnomalySourceDetails
* RelatedAnomalySourceDetails `array`
  * items [RecommendationRelatedAnomalySourceDetail](#recommendationrelatedanomalysourcedetail)

### RemoveNotificationChannelRequest
* RemoveNotificationChannelRequest `object`

### RemoveNotificationChannelResponse
* RemoveNotificationChannelResponse `object`

### ResourceCollection
* ResourceCollection `object`:  A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. 
  * CloudFormation
    * StackNames
      * items [StackName](#stackname)

### ResourceCollectionFilter
* ResourceCollectionFilter `object`:  Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. 
  * CloudFormation
    * StackNames
      * items [StackName](#stackname)

### ResourceCollectionType
* ResourceCollectionType `string` (values: AWS_CLOUD_FORMATION)

### ResourceNotFoundException


### SearchInsightsFilters
* SearchInsightsFilters `object`:  Specifies one or more severity values and one or more status values that are used to search for insights. 
  * ResourceCollection [ResourceCollection](#resourcecollection)
  * Severities
    * items [InsightSeverity](#insightseverity)
  * Statuses
    * items [InsightStatus](#insightstatus)

### SearchInsightsMaxResults
* SearchInsightsMaxResults `integer`

### SearchInsightsRequest
* SearchInsightsRequest `object`
  * Filters
    * ResourceCollection [ResourceCollection](#resourcecollection)
    * Severities
      * items [InsightSeverity](#insightseverity)
    * Statuses
      * items [InsightStatus](#insightstatus)
  * MaxResults
  * NextToken
  * StartTimeRange **required**
    * FromTime
    * ToTime
  * Type **required**

### SearchInsightsResponse
* SearchInsightsResponse `object`
  * NextToken
  * ProactiveInsights
    * items [ProactiveInsightSummary](#proactiveinsightsummary)
  * ReactiveInsights
    * items [ReactiveInsightSummary](#reactiveinsightsummary)

### ServiceIntegrationConfig
* ServiceIntegrationConfig `object`:  Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager. 
  * OpsCenter
    * OptInStatus

### ServiceQuotaExceededException


### SnsChannelConfig
* SnsChannelConfig `object`: <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
  * TopicArn

### SsmOpsItemId
* SsmOpsItemId `string`

### StackName
* StackName `string`

### StackNames
* StackNames `array`
  * items [StackName](#stackname)

### StartTimeRange
* StartTimeRange `object`:  A time range used to specify when the behavior of an insight or anomaly started. 
  * FromTime
  * ToTime

### ThrottlingException


### Timestamp
* Timestamp `string`

### TopicArn
* TopicArn `string`

### UpdateCloudFormationCollectionFilter
* UpdateCloudFormationCollectionFilter `object`:  Contains the names of AWS CloudFormation stacks used to update a collection of stacks. 
  * StackNames
    * items [StackName](#stackname)

### UpdateResourceCollectionAction
* UpdateResourceCollectionAction `string` (values: ADD, REMOVE)

### UpdateResourceCollectionFilter
* UpdateResourceCollectionFilter `object`:  Contains information used to update a collection of AWS resources. 
  * CloudFormation
    * StackNames
      * items [StackName](#stackname)

### UpdateResourceCollectionRequest
* UpdateResourceCollectionRequest `object`
  * Action **required**
  * ResourceCollection **required** [UpdateResourceCollectionFilter](#updateresourcecollectionfilter)

### UpdateResourceCollectionResponse
* UpdateResourceCollectionResponse `object`

### UpdateServiceIntegrationConfig
* UpdateServiceIntegrationConfig `object`:  Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
  * OpsCenter [OpsCenterIntegrationConfig](#opscenterintegrationconfig)

### UpdateServiceIntegrationRequest
* UpdateServiceIntegrationRequest `object`
  * ServiceIntegration **required**
    * OpsCenter [OpsCenterIntegrationConfig](#opscenterintegrationconfig)

### UpdateServiceIntegrationResponse
* UpdateServiceIntegrationResponse `object`

### UpdateStackNames
* UpdateStackNames `array`
  * items [StackName](#stackname)

### UuidNextToken
* UuidNextToken `string`

### ValidationException



