# @datafire/amazonaws_monitoring

Client library for Amazon CloudWatch

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_monitoring
```
```js
let amazonaws_monitoring = require('@datafire/amazonaws_monitoring').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

## Actions

### DeleteAlarms



```js
amazonaws_monitoring.DeleteAlarms({
  "AlarmNames": []
}, context)
```

#### Input
* input `object`
  * AlarmNames **required** `array`

#### Output
*Output schema unknown*

### DeleteAlarms



```js
amazonaws_monitoring.DeleteAlarms({
  "AlarmNames": null
}, context)
```

#### Input
* input `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

#### Output
*Output schema unknown*

### DeleteAnomalyDetector



```js
amazonaws_monitoring.DeleteAnomalyDetector({
  "Namespace": "",
  "MetricName": "",
  "Stat": ""
}, context)
```

#### Input
* input `object`
  * Namespace **required** `string`
  * MetricName **required** `string`
  * Dimensions `array`
  * Stat **required** `string`

#### Output
* output [DeleteAnomalyDetectorOutput](#deleteanomalydetectoroutput)

### DeleteAnomalyDetector



```js
amazonaws_monitoring.DeleteAnomalyDetector({
  "Namespace": null,
  "MetricName": null,
  "Stat": null
}, context)
```

#### Input
* input `object`
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * Namespace **required**
  * Stat **required**

#### Output
* output [DeleteAnomalyDetectorOutput](#deleteanomalydetectoroutput)

### DeleteDashboards



```js
amazonaws_monitoring.DeleteDashboards({
  "DashboardNames": []
}, context)
```

#### Input
* input `object`
  * DashboardNames **required** `array`

#### Output
* output [DeleteDashboardsOutput](#deletedashboardsoutput)

### DeleteDashboards



```js
amazonaws_monitoring.DeleteDashboards({
  "DashboardNames": null
}, context)
```

#### Input
* input `object`
  * DashboardNames **required**
    * items [DashboardName](#dashboardname)

#### Output
* output [DeleteDashboardsOutput](#deletedashboardsoutput)

### DeleteInsightRules



```js
amazonaws_monitoring.DeleteInsightRules({
  "RuleNames": []
}, context)
```

#### Input
* input `object`
  * RuleNames **required** `array`

#### Output
* output [DeleteInsightRulesOutput](#deleteinsightrulesoutput)

### DeleteInsightRules



```js
amazonaws_monitoring.DeleteInsightRules({
  "RuleNames": null
}, context)
```

#### Input
* input `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

#### Output
* output [DeleteInsightRulesOutput](#deleteinsightrulesoutput)

### DescribeAlarmHistory



```js
amazonaws_monitoring.DescribeAlarmHistory({}, context)
```

#### Input
* input `object`
  * AlarmName `string`
  * AlarmTypes `array`
  * HistoryItemType `string`
  * StartDate `string`
  * EndDate `string`
  * MaxRecords `integer`
  * NextToken `string`
  * ScanBy `string`

#### Output
* output [DescribeAlarmHistoryOutput](#describealarmhistoryoutput)

### DescribeAlarmHistory



```js
amazonaws_monitoring.DescribeAlarmHistory({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AlarmName
  * AlarmTypes
    * items [AlarmType](#alarmtype)
  * EndDate
  * HistoryItemType
  * MaxRecords
  * NextToken
  * ScanBy
  * StartDate

#### Output
* output [DescribeAlarmHistoryOutput](#describealarmhistoryoutput)

### DescribeAlarms



```js
amazonaws_monitoring.DescribeAlarms({}, context)
```

#### Input
* input `object`
  * AlarmNames `array`
  * AlarmNamePrefix `string`
  * AlarmTypes `array`
  * ChildrenOfAlarmName `string`
  * ParentsOfAlarmName `string`
  * StateValue `string`
  * ActionPrefix `string`
  * MaxRecords `integer`
  * NextToken `string`

#### Output
* output [DescribeAlarmsOutput](#describealarmsoutput)

### DescribeAlarms



```js
amazonaws_monitoring.DescribeAlarms({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ActionPrefix
  * AlarmNamePrefix
  * AlarmNames
    * items [AlarmName](#alarmname)
  * AlarmTypes
    * items [AlarmType](#alarmtype)
  * ChildrenOfAlarmName
  * MaxRecords
  * NextToken
  * ParentsOfAlarmName
  * StateValue

#### Output
* output [DescribeAlarmsOutput](#describealarmsoutput)

### DescribeAlarmsForMetric



```js
amazonaws_monitoring.DescribeAlarmsForMetric({
  "MetricName": "",
  "Namespace": ""
}, context)
```

#### Input
* input `object`
  * MetricName **required** `string`
  * Namespace **required** `string`
  * Statistic `string`
  * ExtendedStatistic `string`
  * Dimensions `array`
  * Period `integer`
  * Unit `string`

#### Output
* output [DescribeAlarmsForMetricOutput](#describealarmsformetricoutput)

### DescribeAlarmsForMetric



```js
amazonaws_monitoring.DescribeAlarmsForMetric({
  "MetricName": null,
  "Namespace": null
}, context)
```

#### Input
* input `object`
  * Dimensions
    * items [Dimension](#dimension)
  * ExtendedStatistic
  * MetricName **required**
  * Namespace **required**
  * Period
  * Statistic
  * Unit

#### Output
* output [DescribeAlarmsForMetricOutput](#describealarmsformetricoutput)

### DescribeAnomalyDetectors



```js
amazonaws_monitoring.DescribeAnomalyDetectors({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`
  * Namespace `string`
  * MetricName `string`
  * Dimensions `array`

#### Output
* output [DescribeAnomalyDetectorsOutput](#describeanomalydetectorsoutput)

### DescribeAnomalyDetectors



```js
amazonaws_monitoring.DescribeAnomalyDetectors({}, context)
```

#### Input
* input `object`
  * Dimensions
    * items [Dimension](#dimension)
  * MaxResults
  * MetricName
  * Namespace
  * NextToken

#### Output
* output [DescribeAnomalyDetectorsOutput](#describeanomalydetectorsoutput)

### DescribeInsightRules



```js
amazonaws_monitoring.DescribeInsightRules({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeInsightRulesOutput](#describeinsightrulesoutput)

### DescribeInsightRules



```js
amazonaws_monitoring.DescribeInsightRules({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [DescribeInsightRulesOutput](#describeinsightrulesoutput)

### DisableAlarmActions



```js
amazonaws_monitoring.DisableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Input
* input `object`
  * AlarmNames **required** `array`

#### Output
*Output schema unknown*

### DisableAlarmActions



```js
amazonaws_monitoring.DisableAlarmActions({
  "AlarmNames": null
}, context)
```

#### Input
* input `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

#### Output
*Output schema unknown*

### DisableInsightRules



```js
amazonaws_monitoring.DisableInsightRules({
  "RuleNames": []
}, context)
```

#### Input
* input `object`
  * RuleNames **required** `array`

#### Output
* output [DisableInsightRulesOutput](#disableinsightrulesoutput)

### DisableInsightRules



```js
amazonaws_monitoring.DisableInsightRules({
  "RuleNames": null
}, context)
```

#### Input
* input `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

#### Output
* output [DisableInsightRulesOutput](#disableinsightrulesoutput)

### EnableAlarmActions



```js
amazonaws_monitoring.EnableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Input
* input `object`
  * AlarmNames **required** `array`

#### Output
*Output schema unknown*

### EnableAlarmActions



```js
amazonaws_monitoring.EnableAlarmActions({
  "AlarmNames": null
}, context)
```

#### Input
* input `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

#### Output
*Output schema unknown*

### EnableInsightRules



```js
amazonaws_monitoring.EnableInsightRules({
  "RuleNames": []
}, context)
```

#### Input
* input `object`
  * RuleNames **required** `array`

#### Output
* output [EnableInsightRulesOutput](#enableinsightrulesoutput)

### EnableInsightRules



```js
amazonaws_monitoring.EnableInsightRules({
  "RuleNames": null
}, context)
```

#### Input
* input `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

#### Output
* output [EnableInsightRulesOutput](#enableinsightrulesoutput)

### GetDashboard



```js
amazonaws_monitoring.GetDashboard({
  "DashboardName": ""
}, context)
```

#### Input
* input `object`
  * DashboardName **required** `string`

#### Output
* output [GetDashboardOutput](#getdashboardoutput)

### GetDashboard



```js
amazonaws_monitoring.GetDashboard({
  "DashboardName": null
}, context)
```

#### Input
* input `object`
  * DashboardName **required**

#### Output
* output [GetDashboardOutput](#getdashboardoutput)

### GetInsightRuleReport



```js
amazonaws_monitoring.GetInsightRuleReport({
  "RuleName": "",
  "StartTime": "",
  "EndTime": "",
  "Period": 0
}, context)
```

#### Input
* input `object`
  * RuleName **required** `string`
  * StartTime **required** `string`
  * EndTime **required** `string`
  * Period **required** `integer`
  * MaxContributorCount `integer`
  * Metrics `array`
  * OrderBy `string`

#### Output
* output [GetInsightRuleReportOutput](#getinsightrulereportoutput)

### GetInsightRuleReport



```js
amazonaws_monitoring.GetInsightRuleReport({
  "RuleName": null,
  "StartTime": null,
  "EndTime": null,
  "Period": null
}, context)
```

#### Input
* input `object`
  * EndTime **required**
  * MaxContributorCount
  * Metrics
    * items [InsightRuleMetricName](#insightrulemetricname)
  * OrderBy
  * Period **required**
  * RuleName **required**
  * StartTime **required**

#### Output
* output [GetInsightRuleReportOutput](#getinsightrulereportoutput)

### GetMetricData



```js
amazonaws_monitoring.GetMetricData({
  "MetricDataQueries": [],
  "StartTime": "",
  "EndTime": ""
}, context)
```

#### Input
* input `object`
  * MetricDataQueries **required** `array`
  * StartTime **required** `string`
  * EndTime **required** `string`
  * NextToken `string`
  * ScanBy `string`
  * MaxDatapoints `integer`

#### Output
* output [GetMetricDataOutput](#getmetricdataoutput)

### GetMetricData



```js
amazonaws_monitoring.GetMetricData({
  "MetricDataQueries": null,
  "StartTime": null,
  "EndTime": null
}, context)
```

#### Input
* input `object`
  * MaxDatapoints `string`
  * NextToken `string`
  * EndTime **required**
  * MaxDatapoints
  * MetricDataQueries **required**
    * items [MetricDataQuery](#metricdataquery)
  * NextToken
  * ScanBy
  * StartTime **required**

#### Output
* output [GetMetricDataOutput](#getmetricdataoutput)

### GetMetricStatistics



```js
amazonaws_monitoring.GetMetricStatistics({
  "Namespace": "",
  "MetricName": "",
  "StartTime": "",
  "EndTime": "",
  "Period": 0
}, context)
```

#### Input
* input `object`
  * Namespace **required** `string`
  * MetricName **required** `string`
  * Dimensions `array`
  * StartTime **required** `string`
  * EndTime **required** `string`
  * Period **required** `integer`
  * Statistics `array`
  * ExtendedStatistics `array`
  * Unit `string`

#### Output
* output [GetMetricStatisticsOutput](#getmetricstatisticsoutput)

### GetMetricStatistics



```js
amazonaws_monitoring.GetMetricStatistics({
  "Namespace": null,
  "MetricName": null,
  "StartTime": null,
  "EndTime": null,
  "Period": null
}, context)
```

#### Input
* input `object`
  * Dimensions
    * items [Dimension](#dimension)
  * EndTime **required**
  * ExtendedStatistics
    * items [ExtendedStatistic](#extendedstatistic)
  * MetricName **required**
  * Namespace **required**
  * Period **required**
  * StartTime **required**
  * Statistics
    * items [Statistic](#statistic)
  * Unit

#### Output
* output [GetMetricStatisticsOutput](#getmetricstatisticsoutput)

### GetMetricWidgetImage



```js
amazonaws_monitoring.GetMetricWidgetImage({
  "MetricWidget": ""
}, context)
```

#### Input
* input `object`
  * MetricWidget **required** `string`
  * OutputFormat `string`

#### Output
* output [GetMetricWidgetImageOutput](#getmetricwidgetimageoutput)

### GetMetricWidgetImage



```js
amazonaws_monitoring.GetMetricWidgetImage({
  "MetricWidget": null
}, context)
```

#### Input
* input `object`
  * MetricWidget **required**
  * OutputFormat

#### Output
* output [GetMetricWidgetImageOutput](#getmetricwidgetimageoutput)

### ListDashboards



```js
amazonaws_monitoring.ListDashboards({}, context)
```

#### Input
* input `object`
  * DashboardNamePrefix `string`
  * NextToken `string`

#### Output
* output [ListDashboardsOutput](#listdashboardsoutput)

### ListDashboards



```js
amazonaws_monitoring.ListDashboards({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * DashboardNamePrefix
  * NextToken

#### Output
* output [ListDashboardsOutput](#listdashboardsoutput)

### ListMetrics



```js
amazonaws_monitoring.ListMetrics({}, context)
```

#### Input
* input `object`
  * Namespace `string`
  * MetricName `string`
  * Dimensions `array`
  * NextToken `string`
  * RecentlyActive `string`

#### Output
* output [ListMetricsOutput](#listmetricsoutput)

### ListMetrics



```js
amazonaws_monitoring.ListMetrics({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * Dimensions
    * items [DimensionFilter](#dimensionfilter)
  * MetricName
  * Namespace
  * NextToken
  * RecentlyActive

#### Output
* output [ListMetricsOutput](#listmetricsoutput)

### ListTagsForResource



```js
amazonaws_monitoring.ListTagsForResource({
  "ResourceARN": ""
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListTagsForResource



```js
amazonaws_monitoring.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### PutAnomalyDetector



```js
amazonaws_monitoring.PutAnomalyDetector({
  "Namespace": "",
  "MetricName": "",
  "Stat": ""
}, context)
```

#### Input
* input `object`
  * Namespace **required** `string`
  * MetricName **required** `string`
  * Dimensions `array`
  * Stat **required** `string`
  * Configuration `object`

#### Output
* output [PutAnomalyDetectorOutput](#putanomalydetectoroutput)

### PutAnomalyDetector



```js
amazonaws_monitoring.PutAnomalyDetector({
  "Namespace": null,
  "MetricName": null,
  "Stat": null
}, context)
```

#### Input
* input `object`
  * Configuration
    * ExcludedTimeRanges
      * items [Range](#range)
    * MetricTimezone
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * Namespace **required**
  * Stat **required**

#### Output
* output [PutAnomalyDetectorOutput](#putanomalydetectoroutput)

### PutCompositeAlarm



```js
amazonaws_monitoring.PutCompositeAlarm({
  "AlarmName": "",
  "AlarmRule": ""
}, context)
```

#### Input
* input `object`
  * ActionsEnabled `boolean`
  * AlarmActions `array`
  * AlarmDescription `string`
  * AlarmName **required** `string`
  * AlarmRule **required** `string`
  * InsufficientDataActions `array`
  * OKActions `array`
  * Tags `array`

#### Output
*Output schema unknown*

### PutCompositeAlarm



```js
amazonaws_monitoring.PutCompositeAlarm({
  "AlarmName": null,
  "AlarmRule": null
}, context)
```

#### Input
* input `object`
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmDescription
  * AlarmName **required**
  * AlarmRule **required**
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * OKActions
    * items [ResourceName](#resourcename)
  * Tags
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### PutDashboard



```js
amazonaws_monitoring.PutDashboard({
  "DashboardName": "",
  "DashboardBody": ""
}, context)
```

#### Input
* input `object`
  * DashboardName **required** `string`
  * DashboardBody **required** `string`

#### Output
* output [PutDashboardOutput](#putdashboardoutput)

### PutDashboard



```js
amazonaws_monitoring.PutDashboard({
  "DashboardName": null,
  "DashboardBody": null
}, context)
```

#### Input
* input `object`
  * DashboardBody **required**
  * DashboardName **required**

#### Output
* output [PutDashboardOutput](#putdashboardoutput)

### PutInsightRule



```js
amazonaws_monitoring.PutInsightRule({
  "RuleName": "",
  "RuleDefinition": ""
}, context)
```

#### Input
* input `object`
  * RuleName **required** `string`
  * RuleState `string`
  * RuleDefinition **required** `string`
  * Tags `array`

#### Output
* output [PutInsightRuleOutput](#putinsightruleoutput)

### PutInsightRule



```js
amazonaws_monitoring.PutInsightRule({
  "RuleName": null,
  "RuleDefinition": null
}, context)
```

#### Input
* input `object`
  * RuleDefinition **required**
  * RuleName **required**
  * RuleState
  * Tags
    * items [Tag](#tag)

#### Output
* output [PutInsightRuleOutput](#putinsightruleoutput)

### PutMetricAlarm



```js
amazonaws_monitoring.PutMetricAlarm({
  "AlarmName": "",
  "EvaluationPeriods": 0,
  "ComparisonOperator": ""
}, context)
```

#### Input
* input `object`
  * AlarmName **required** `string`
  * AlarmDescription `string`
  * ActionsEnabled `boolean`
  * OKActions `array`
  * AlarmActions `array`
  * InsufficientDataActions `array`
  * MetricName `string`
  * Namespace `string`
  * Statistic `string`
  * ExtendedStatistic `string`
  * Dimensions `array`
  * Period `integer`
  * Unit `string`
  * EvaluationPeriods **required** `integer`
  * DatapointsToAlarm `integer`
  * Threshold `number`
  * ComparisonOperator **required** `string`
  * TreatMissingData `string`
  * EvaluateLowSampleCountPercentile `string`
  * Metrics `array`
  * Tags `array`
  * ThresholdMetricId `string`

#### Output
*Output schema unknown*

### PutMetricAlarm



```js
amazonaws_monitoring.PutMetricAlarm({
  "AlarmName": null,
  "EvaluationPeriods": null,
  "ComparisonOperator": null
}, context)
```

#### Input
* input `object`
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmDescription
  * AlarmName **required**
  * ComparisonOperator **required**
  * DatapointsToAlarm
  * Dimensions
    * items [Dimension](#dimension)
  * EvaluateLowSampleCountPercentile
  * EvaluationPeriods **required**
  * ExtendedStatistic
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * MetricName
  * Metrics
    * items [MetricDataQuery](#metricdataquery)
  * Namespace
  * OKActions
    * items [ResourceName](#resourcename)
  * Period
  * Statistic
  * Tags
    * items [Tag](#tag)
  * Threshold
  * ThresholdMetricId
  * TreatMissingData
  * Unit

#### Output
*Output schema unknown*

### PutMetricData



```js
amazonaws_monitoring.PutMetricData({
  "Namespace": "",
  "MetricData": []
}, context)
```

#### Input
* input `object`
  * Namespace **required** `string`
  * MetricData **required** `array`

#### Output
*Output schema unknown*

### PutMetricData



```js
amazonaws_monitoring.PutMetricData({
  "Namespace": null,
  "MetricData": null
}, context)
```

#### Input
* input `object`
  * MetricData **required**
    * items [MetricDatum](#metricdatum)
  * Namespace **required**

#### Output
*Output schema unknown*

### SetAlarmState



```js
amazonaws_monitoring.SetAlarmState({
  "AlarmName": "",
  "StateValue": "",
  "StateReason": ""
}, context)
```

#### Input
* input `object`
  * AlarmName **required** `string`
  * StateValue **required** `string`
  * StateReason **required** `string`
  * StateReasonData `string`

#### Output
*Output schema unknown*

### SetAlarmState



```js
amazonaws_monitoring.SetAlarmState({
  "AlarmName": null,
  "StateValue": null,
  "StateReason": null
}, context)
```

#### Input
* input `object`
  * AlarmName **required**
  * StateReason **required**
  * StateReasonData
  * StateValue **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_monitoring.TagResource({
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`
  * Tags **required** `array`

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### TagResource



```js
amazonaws_monitoring.TagResource({
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
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_monitoring.UntagResource({
  "ResourceARN": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`
  * TagKeys **required** `array`

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UntagResource



```js
amazonaws_monitoring.UntagResource({
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
* output [UntagResourceOutput](#untagresourceoutput)



## Definitions

### ActionPrefix
* ActionPrefix `string`

### ActionsEnabled
* ActionsEnabled `boolean`

### AlarmArn
* AlarmArn `string`

### AlarmDescription
* AlarmDescription `string`

### AlarmHistoryItem
* AlarmHistoryItem `object`: Represents the history of a specific alarm.
  * AlarmName
  * AlarmType
  * HistoryData
  * HistoryItemType
  * HistorySummary
  * Timestamp

### AlarmHistoryItems
* AlarmHistoryItems `array`
  * items [AlarmHistoryItem](#alarmhistoryitem)

### AlarmName
* AlarmName `string`

### AlarmNamePrefix
* AlarmNamePrefix `string`

### AlarmNames
* AlarmNames `array`
  * items [AlarmName](#alarmname)

### AlarmRule
* AlarmRule `string`

### AlarmType
* AlarmType `string` (values: CompositeAlarm, MetricAlarm)

### AlarmTypes
* AlarmTypes `array`
  * items [AlarmType](#alarmtype)

### AmazonResourceName
* AmazonResourceName `string`

### AnomalyDetector
* AnomalyDetector `object`: An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
  * Configuration
    * ExcludedTimeRanges
      * items [Range](#range)
    * MetricTimezone
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName
  * Namespace
  * Stat
  * StateValue

### AnomalyDetectorConfiguration
* AnomalyDetectorConfiguration `object`: The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
  * ExcludedTimeRanges
    * items [Range](#range)
  * MetricTimezone

### AnomalyDetectorExcludedTimeRanges
* AnomalyDetectorExcludedTimeRanges `array`
  * items [Range](#range)

### AnomalyDetectorMetricStat
* AnomalyDetectorMetricStat `string`

### AnomalyDetectorMetricTimezone
* AnomalyDetectorMetricTimezone `string`

### AnomalyDetectorStateValue
* AnomalyDetectorStateValue `string` (values: PENDING_TRAINING, TRAINED_INSUFFICIENT_DATA, TRAINED)

### AnomalyDetectors
* AnomalyDetectors `array`
  * items [AnomalyDetector](#anomalydetector)

### BatchFailures
* BatchFailures `array`
  * items [PartialFailure](#partialfailure)

### ComparisonOperator
* ComparisonOperator `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold, LessThanLowerOrGreaterThanUpperThreshold, LessThanLowerThreshold, GreaterThanUpperThreshold)

### CompositeAlarm
* CompositeAlarm `object`: The details about a composite alarm.
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmArn
  * AlarmConfigurationUpdatedTimestamp
  * AlarmDescription
  * AlarmName
  * AlarmRule
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * OKActions
    * items [ResourceName](#resourcename)
  * StateReason
  * StateReasonData
  * StateUpdatedTimestamp
  * StateValue

### CompositeAlarms
* CompositeAlarms `array`
  * items [CompositeAlarm](#compositealarm)

### ConcurrentModificationException


### Counts
* Counts `array`
  * items [DatapointValue](#datapointvalue)

### DashboardArn
* DashboardArn `string`

### DashboardBody
* DashboardBody `string`

### DashboardEntries
* DashboardEntries `array`
  * items [DashboardEntry](#dashboardentry)

### DashboardEntry
* DashboardEntry `object`: Represents a specific dashboard.
  * DashboardArn
  * DashboardName
  * LastModified
  * Size

### DashboardInvalidInputError


### DashboardName
* DashboardName `string`

### DashboardNamePrefix
* DashboardNamePrefix `string`

### DashboardNames
* DashboardNames `array`
  * items [DashboardName](#dashboardname)

### DashboardNotFoundError


### DashboardValidationMessage
* DashboardValidationMessage `object`: An error or warning for the operation.
  * DataPath
  * Message

### DashboardValidationMessages
* DashboardValidationMessages `array`
  * items [DashboardValidationMessage](#dashboardvalidationmessage)

### DataPath
* DataPath `string`

### Datapoint
* Datapoint `object`: Encapsulates the statistical data that CloudWatch computes from metric data.
  * Average
  * ExtendedStatistics
  * Maximum
  * Minimum
  * SampleCount
  * Sum
  * Timestamp
  * Unit

### DatapointValue
* DatapointValue `number`

### DatapointValueMap
* DatapointValueMap `object`

### DatapointValues
* DatapointValues `array`
  * items [DatapointValue](#datapointvalue)

### Datapoints
* Datapoints `array`
  * items [Datapoint](#datapoint)

### DatapointsToAlarm
* DatapointsToAlarm `integer`

### DeleteAlarmsInput
* DeleteAlarmsInput `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

### DeleteAnomalyDetectorInput
* DeleteAnomalyDetectorInput `object`
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * Namespace **required**
  * Stat **required**

### DeleteAnomalyDetectorOutput
* DeleteAnomalyDetectorOutput `object`

### DeleteDashboardsInput
* DeleteDashboardsInput `object`
  * DashboardNames **required**
    * items [DashboardName](#dashboardname)

### DeleteDashboardsOutput
* DeleteDashboardsOutput `object`

### DeleteInsightRulesInput
* DeleteInsightRulesInput `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

### DeleteInsightRulesOutput
* DeleteInsightRulesOutput `object`
  * Failures
    * items [PartialFailure](#partialfailure)

### DescribeAlarmHistoryInput
* DescribeAlarmHistoryInput `object`
  * AlarmName
  * AlarmTypes
    * items [AlarmType](#alarmtype)
  * EndDate
  * HistoryItemType
  * MaxRecords
  * NextToken
  * ScanBy
  * StartDate

### DescribeAlarmHistoryOutput
* DescribeAlarmHistoryOutput `object`
  * AlarmHistoryItems
    * items [AlarmHistoryItem](#alarmhistoryitem)
  * NextToken

### DescribeAlarmsForMetricInput
* DescribeAlarmsForMetricInput `object`
  * Dimensions
    * items [Dimension](#dimension)
  * ExtendedStatistic
  * MetricName **required**
  * Namespace **required**
  * Period
  * Statistic
  * Unit

### DescribeAlarmsForMetricOutput
* DescribeAlarmsForMetricOutput `object`
  * MetricAlarms
    * items [MetricAlarm](#metricalarm)

### DescribeAlarmsInput
* DescribeAlarmsInput `object`
  * ActionPrefix
  * AlarmNamePrefix
  * AlarmNames
    * items [AlarmName](#alarmname)
  * AlarmTypes
    * items [AlarmType](#alarmtype)
  * ChildrenOfAlarmName
  * MaxRecords
  * NextToken
  * ParentsOfAlarmName
  * StateValue

### DescribeAlarmsOutput
* DescribeAlarmsOutput `object`
  * CompositeAlarms
    * items [CompositeAlarm](#compositealarm)
  * MetricAlarms
    * items [MetricAlarm](#metricalarm)
  * NextToken

### DescribeAnomalyDetectorsInput
* DescribeAnomalyDetectorsInput `object`
  * Dimensions
    * items [Dimension](#dimension)
  * MaxResults
  * MetricName
  * Namespace
  * NextToken

### DescribeAnomalyDetectorsOutput
* DescribeAnomalyDetectorsOutput `object`
  * AnomalyDetectors
    * items [AnomalyDetector](#anomalydetector)
  * NextToken

### DescribeInsightRulesInput
* DescribeInsightRulesInput `object`
  * MaxResults
  * NextToken

### DescribeInsightRulesOutput
* DescribeInsightRulesOutput `object`
  * InsightRules
    * items [InsightRule](#insightrule)
  * NextToken

### Dimension
* Dimension `object`: A dimension is a name/value pair that is part of the identity of a metric. You can assign up to 10 dimensions to a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. 
  * Name **required**
  * Value **required**

### DimensionFilter
* DimensionFilter `object`: Represents filters for a dimension.
  * Name **required**
  * Value

### DimensionFilters
* DimensionFilters `array`
  * items [DimensionFilter](#dimensionfilter)

### DimensionName
* DimensionName `string`

### DimensionValue
* DimensionValue `string`

### Dimensions
* Dimensions `array`
  * items [Dimension](#dimension)

### DisableAlarmActionsInput
* DisableAlarmActionsInput `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

### DisableInsightRulesInput
* DisableInsightRulesInput `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

### DisableInsightRulesOutput
* DisableInsightRulesOutput `object`
  * Failures
    * items [PartialFailure](#partialfailure)

### EnableAlarmActionsInput
* EnableAlarmActionsInput `object`
  * AlarmNames **required**
    * items [AlarmName](#alarmname)

### EnableInsightRulesInput
* EnableInsightRulesInput `object`
  * RuleNames **required**
    * items [InsightRuleName](#insightrulename)

### EnableInsightRulesOutput
* EnableInsightRulesOutput `object`
  * Failures
    * items [PartialFailure](#partialfailure)

### EvaluateLowSampleCountPercentile
* EvaluateLowSampleCountPercentile `string`

### EvaluationPeriods
* EvaluationPeriods `integer`

### ExceptionType
* ExceptionType `string`

### ExtendedStatistic
* ExtendedStatistic `string`

### ExtendedStatistics
* ExtendedStatistics `array`
  * items [ExtendedStatistic](#extendedstatistic)

### FailureCode
* FailureCode `string`

### FailureDescription
* FailureDescription `string`

### FailureResource
* FailureResource `string`

### GetDashboardInput
* GetDashboardInput `object`
  * DashboardName **required**

### GetDashboardOutput
* GetDashboardOutput `object`
  * DashboardArn
  * DashboardBody
  * DashboardName

### GetInsightRuleReportInput
* GetInsightRuleReportInput `object`
  * EndTime **required**
  * MaxContributorCount
  * Metrics
    * items [InsightRuleMetricName](#insightrulemetricname)
  * OrderBy
  * Period **required**
  * RuleName **required**
  * StartTime **required**

### GetInsightRuleReportOutput
* GetInsightRuleReportOutput `object`
  * AggregateValue
  * AggregationStatistic
  * ApproximateUniqueCount
  * Contributors
    * items [InsightRuleContributor](#insightrulecontributor)
  * KeyLabels
    * items [InsightRuleContributorKeyLabel](#insightrulecontributorkeylabel)
  * MetricDatapoints
    * items [InsightRuleMetricDatapoint](#insightrulemetricdatapoint)

### GetMetricDataInput
* GetMetricDataInput `object`
  * EndTime **required**
  * MaxDatapoints
  * MetricDataQueries **required**
    * items [MetricDataQuery](#metricdataquery)
  * NextToken
  * ScanBy
  * StartTime **required**

### GetMetricDataMaxDatapoints
* GetMetricDataMaxDatapoints `integer`

### GetMetricDataOutput
* GetMetricDataOutput `object`
  * Messages
    * items [MessageData](#messagedata)
  * MetricDataResults
    * items [MetricDataResult](#metricdataresult)
  * NextToken

### GetMetricStatisticsInput
* GetMetricStatisticsInput `object`
  * Dimensions
    * items [Dimension](#dimension)
  * EndTime **required**
  * ExtendedStatistics
    * items [ExtendedStatistic](#extendedstatistic)
  * MetricName **required**
  * Namespace **required**
  * Period **required**
  * StartTime **required**
  * Statistics
    * items [Statistic](#statistic)
  * Unit

### GetMetricStatisticsOutput
* GetMetricStatisticsOutput `object`
  * Datapoints
    * items [Datapoint](#datapoint)
  * Label

### GetMetricWidgetImageInput
* GetMetricWidgetImageInput `object`
  * MetricWidget **required**
  * OutputFormat

### GetMetricWidgetImageOutput
* GetMetricWidgetImageOutput `object`
  * MetricWidgetImage

### HistoryData
* HistoryData `string`

### HistoryItemType
* HistoryItemType `string` (values: ConfigurationUpdate, StateUpdate, Action)

### HistorySummary
* HistorySummary `string`

### InsightRule
* InsightRule `object`: This structure contains the definition for a Contributor Insights rule.
  * Definition **required**
  * Name **required**
  * Schema **required**
  * State **required**

### InsightRuleAggregationStatistic
* InsightRuleAggregationStatistic `string`

### InsightRuleContributor
* InsightRuleContributor `object`: <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
  * ApproximateAggregateValue **required**
  * Datapoints **required**
    * items [InsightRuleContributorDatapoint](#insightrulecontributordatapoint)
  * Keys **required**
    * items [InsightRuleContributorKey](#insightrulecontributorkey)

### InsightRuleContributorDatapoint
* InsightRuleContributorDatapoint `object`: <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
  * ApproximateValue **required**
  * Timestamp **required**

### InsightRuleContributorDatapoints
* InsightRuleContributorDatapoints `array`
  * items [InsightRuleContributorDatapoint](#insightrulecontributordatapoint)

### InsightRuleContributorKey
* InsightRuleContributorKey `string`

### InsightRuleContributorKeyLabel
* InsightRuleContributorKeyLabel `string`

### InsightRuleContributorKeyLabels
* InsightRuleContributorKeyLabels `array`
  * items [InsightRuleContributorKeyLabel](#insightrulecontributorkeylabel)

### InsightRuleContributorKeys
* InsightRuleContributorKeys `array`
  * items [InsightRuleContributorKey](#insightrulecontributorkey)

### InsightRuleContributors
* InsightRuleContributors `array`
  * items [InsightRuleContributor](#insightrulecontributor)

### InsightRuleDefinition
* InsightRuleDefinition `string`

### InsightRuleMaxResults
* InsightRuleMaxResults `integer`

### InsightRuleMetricDatapoint
* InsightRuleMetricDatapoint `object`: <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
  * Average
  * MaxContributorValue
  * Maximum
  * Minimum
  * SampleCount
  * Sum
  * Timestamp **required**
  * UniqueContributors

### InsightRuleMetricDatapoints
* InsightRuleMetricDatapoints `array`
  * items [InsightRuleMetricDatapoint](#insightrulemetricdatapoint)

### InsightRuleMetricList
* InsightRuleMetricList `array`
  * items [InsightRuleMetricName](#insightrulemetricname)

### InsightRuleMetricName
* InsightRuleMetricName `string`

### InsightRuleName
* InsightRuleName `string`

### InsightRuleNames
* InsightRuleNames `array`
  * items [InsightRuleName](#insightrulename)

### InsightRuleOrderBy
* InsightRuleOrderBy `string`

### InsightRuleSchema
* InsightRuleSchema `string`

### InsightRuleState
* InsightRuleState `string`

### InsightRuleUnboundDouble
* InsightRuleUnboundDouble `number`

### InsightRuleUnboundInteger
* InsightRuleUnboundInteger `integer`

### InsightRuleUnboundLong
* InsightRuleUnboundLong `integer`

### InsightRules
* InsightRules `array`
  * items [InsightRule](#insightrule)

### InternalServiceFault


### InvalidFormatFault


### InvalidNextToken


### InvalidParameterCombinationException


### InvalidParameterValueException


### LastModified
* LastModified `string`

### LimitExceededException


### LimitExceededFault


### ListDashboardsInput
* ListDashboardsInput `object`
  * DashboardNamePrefix
  * NextToken

### ListDashboardsOutput
* ListDashboardsOutput `object`
  * DashboardEntries
    * items [DashboardEntry](#dashboardentry)
  * NextToken

### ListMetricsInput
* ListMetricsInput `object`
  * Dimensions
    * items [DimensionFilter](#dimensionfilter)
  * MetricName
  * Namespace
  * NextToken
  * RecentlyActive

### ListMetricsOutput
* ListMetricsOutput `object`
  * Metrics
    * items [Metric](#metric)
  * NextToken

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * ResourceARN **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * Tags
    * items [Tag](#tag)

### MaxRecords
* MaxRecords `integer`

### MaxReturnedResultsCount
* MaxReturnedResultsCount `integer`

### Message
* Message `string`

### MessageData
* MessageData `object`: A message returned by the <code>GetMetricData</code>API, including a code and a description.
  * Code
  * Value

### MessageDataCode
* MessageDataCode `string`

### MessageDataValue
* MessageDataValue `string`

### Metric
* Metric `object`: Represents a specific metric.
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName
  * Namespace

### MetricAlarm
* MetricAlarm `object`: The details about a metric alarm.
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmArn
  * AlarmConfigurationUpdatedTimestamp
  * AlarmDescription
  * AlarmName
  * ComparisonOperator
  * DatapointsToAlarm
  * Dimensions
    * items [Dimension](#dimension)
  * EvaluateLowSampleCountPercentile
  * EvaluationPeriods
  * ExtendedStatistic
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * MetricName
  * Metrics
    * items [MetricDataQuery](#metricdataquery)
  * Namespace
  * OKActions
    * items [ResourceName](#resourcename)
  * Period
  * StateReason
  * StateReasonData
  * StateUpdatedTimestamp
  * StateValue
  * Statistic
  * Threshold
  * ThresholdMetricId
  * TreatMissingData
  * Unit

### MetricAlarms
* MetricAlarms `array`
  * items [MetricAlarm](#metricalarm)

### MetricData
* MetricData `array`
  * items [MetricDatum](#metricdatum)

### MetricDataQueries
* MetricDataQueries `array`
  * items [MetricDataQuery](#metricdataquery)

### MetricDataQuery
* MetricDataQuery `object`: <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>True</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>
  * Expression
  * Id **required**
  * Label
  * MetricStat
    * Metric **required**
      * Dimensions
        * items [Dimension](#dimension)
      * MetricName
      * Namespace
    * Period **required**
    * Stat **required**
    * Unit
  * Period
  * ReturnData

### MetricDataResult
* MetricDataResult `object`: A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
  * Id
  * Label
  * Messages
    * items [MessageData](#messagedata)
  * StatusCode
  * Timestamps
    * items [Timestamp](#timestamp)
  * Values
    * items [DatapointValue](#datapointvalue)

### MetricDataResultMessages
* MetricDataResultMessages `array`
  * items [MessageData](#messagedata)

### MetricDataResults
* MetricDataResults `array`
  * items [MetricDataResult](#metricdataresult)

### MetricDatum
* MetricDatum `object`: Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.
  * Counts
    * items [DatapointValue](#datapointvalue)
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * StatisticValues
    * Maximum **required**
    * Minimum **required**
    * SampleCount **required**
    * Sum **required**
  * StorageResolution
  * Timestamp
  * Unit
  * Value
  * Values
    * items [DatapointValue](#datapointvalue)

### MetricExpression
* MetricExpression `string`

### MetricId
* MetricId `string`

### MetricLabel
* MetricLabel `string`

### MetricName
* MetricName `string`

### MetricStat
* MetricStat `object`: This structure defines the metric to be returned, along with the statistics, period, and units.
  * Metric **required**
    * Dimensions
      * items [Dimension](#dimension)
    * MetricName
    * Namespace
  * Period **required**
  * Stat **required**
  * Unit

### MetricWidget
* MetricWidget `string`

### MetricWidgetImage
* MetricWidgetImage `string`

### Metrics
* Metrics `array`
  * items [Metric](#metric)

### MissingRequiredParameterException


### Namespace
* Namespace `string`

### NextToken
* NextToken `string`

### OutputFormat
* OutputFormat `string`

### PartialFailure
* PartialFailure `object`: This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
  * ExceptionType
  * FailureCode
  * FailureDescription
  * FailureResource

### Period
* Period `integer`

### PutAnomalyDetectorInput
* PutAnomalyDetectorInput `object`
  * Configuration
    * ExcludedTimeRanges
      * items [Range](#range)
    * MetricTimezone
  * Dimensions
    * items [Dimension](#dimension)
  * MetricName **required**
  * Namespace **required**
  * Stat **required**

### PutAnomalyDetectorOutput
* PutAnomalyDetectorOutput `object`

### PutCompositeAlarmInput
* PutCompositeAlarmInput `object`
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmDescription
  * AlarmName **required**
  * AlarmRule **required**
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * OKActions
    * items [ResourceName](#resourcename)
  * Tags
    * items [Tag](#tag)

### PutDashboardInput
* PutDashboardInput `object`
  * DashboardBody **required**
  * DashboardName **required**

### PutDashboardOutput
* PutDashboardOutput `object`
  * DashboardValidationMessages
    * items [DashboardValidationMessage](#dashboardvalidationmessage)

### PutInsightRuleInput
* PutInsightRuleInput `object`
  * RuleDefinition **required**
  * RuleName **required**
  * RuleState
  * Tags
    * items [Tag](#tag)

### PutInsightRuleOutput
* PutInsightRuleOutput `object`

### PutMetricAlarmInput
* PutMetricAlarmInput `object`
  * ActionsEnabled
  * AlarmActions
    * items [ResourceName](#resourcename)
  * AlarmDescription
  * AlarmName **required**
  * ComparisonOperator **required**
  * DatapointsToAlarm
  * Dimensions
    * items [Dimension](#dimension)
  * EvaluateLowSampleCountPercentile
  * EvaluationPeriods **required**
  * ExtendedStatistic
  * InsufficientDataActions
    * items [ResourceName](#resourcename)
  * MetricName
  * Metrics
    * items [MetricDataQuery](#metricdataquery)
  * Namespace
  * OKActions
    * items [ResourceName](#resourcename)
  * Period
  * Statistic
  * Tags
    * items [Tag](#tag)
  * Threshold
  * ThresholdMetricId
  * TreatMissingData
  * Unit

### PutMetricDataInput
* PutMetricDataInput `object`
  * MetricData **required**
    * items [MetricDatum](#metricdatum)
  * Namespace **required**

### Range
* Range `object`: Specifies one range of days or times to exclude from use for training an anomaly detection model.
  * EndTime **required**
  * StartTime **required**

### RecentlyActive
* RecentlyActive `string` (values: PT3H)

### ResourceList
* ResourceList `array`
  * items [ResourceName](#resourcename)

### ResourceName
* ResourceName `string`

### ResourceNotFound


### ResourceNotFoundException


### ReturnData
* ReturnData `boolean`

### ScanBy
* ScanBy `string` (values: TimestampDescending, TimestampAscending)

### SetAlarmStateInput
* SetAlarmStateInput `object`
  * AlarmName **required**
  * StateReason **required**
  * StateReasonData
  * StateValue **required**

### Size
* Size `integer`

### StandardUnit
* StandardUnit `string` (values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None)

### Stat
* Stat `string`

### StateReason
* StateReason `string`

### StateReasonData
* StateReasonData `string`

### StateValue
* StateValue `string` (values: OK, ALARM, INSUFFICIENT_DATA)

### Statistic
* Statistic `string` (values: SampleCount, Average, Sum, Minimum, Maximum)

### StatisticSet
* StatisticSet `object`: Represents a set of statistics that describes a specific metric. 
  * Maximum **required**
  * Minimum **required**
  * SampleCount **required**
  * Sum **required**

### Statistics
* Statistics `array`
  * items [Statistic](#statistic)

### StatusCode
* StatusCode `string` (values: Complete, InternalError, PartialData)

### StorageResolution
* StorageResolution `integer`

### Tag
* Tag `object`: A key-value pair associated with a CloudWatch resource.
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

### TagResourceInput
* TagResourceInput `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### Threshold
* Threshold `number`

### Timestamp
* Timestamp `string`

### Timestamps
* Timestamps `array`
  * items [Timestamp](#timestamp)

### TreatMissingData
* TreatMissingData `string`

### UntagResourceInput
* UntagResourceInput `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### Values
* Values `array`
  * items [DatapointValue](#datapointvalue)


