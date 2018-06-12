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

amazonaws_monitoring.DeleteAlarms({
  "AlarmNames": []
}).then(data => {
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
  * AlarmNames **required** [AlarmNames](#alarmnames)

#### Output
*Output schema unknown*

### DeleteDashboards



```js
amazonaws_monitoring.DeleteDashboards({
  "DashboardNames": []
}, context)
```

#### Input
* input `object`
  * DashboardNames **required** [DashboardNames](#dashboardnames)

#### Output
* output [DeleteDashboardsOutput](#deletedashboardsoutput)

### DescribeAlarmHistory



```js
amazonaws_monitoring.DescribeAlarmHistory({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * AlarmName [AlarmName](#alarmname)
  * EndDate [Timestamp](#timestamp)
  * HistoryItemType [HistoryItemType](#historyitemtype)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [NextToken](#nexttoken)
  * StartDate [Timestamp](#timestamp)

#### Output
* output [DescribeAlarmHistoryOutput](#describealarmhistoryoutput)

### DescribeAlarms



```js
amazonaws_monitoring.DescribeAlarms({}, context)
```

#### Input
* input `object`
  * MaxRecords `string`
  * NextToken `string`
  * ActionPrefix [ActionPrefix](#actionprefix)
  * AlarmNamePrefix [AlarmNamePrefix](#alarmnameprefix)
  * AlarmNames [AlarmNames](#alarmnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [NextToken](#nexttoken)
  * StateValue [StateValue](#statevalue)

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
  * Dimensions [Dimensions](#dimensions)
  * ExtendedStatistic [ExtendedStatistic](#extendedstatistic)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * Period [Period](#period)
  * Statistic [Statistic](#statistic)
  * Unit [StandardUnit](#standardunit)

#### Output
* output [DescribeAlarmsForMetricOutput](#describealarmsformetricoutput)

### DisableAlarmActions



```js
amazonaws_monitoring.DisableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Input
* input `object`
  * AlarmNames **required** [AlarmNames](#alarmnames)

#### Output
*Output schema unknown*

### EnableAlarmActions



```js
amazonaws_monitoring.EnableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Input
* input `object`
  * AlarmNames **required** [AlarmNames](#alarmnames)

#### Output
*Output schema unknown*

### GetDashboard



```js
amazonaws_monitoring.GetDashboard({
  "DashboardName": ""
}, context)
```

#### Input
* input `object`
  * DashboardName **required** [DashboardName](#dashboardname)

#### Output
* output [GetDashboardOutput](#getdashboardoutput)

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
  * EndTime **required** [Timestamp](#timestamp)
  * MaxDatapoints [GetMetricDataMaxDatapoints](#getmetricdatamaxdatapoints)
  * MetricDataQueries **required** [MetricDataQueries](#metricdataqueries)
  * NextToken [NextToken](#nexttoken)
  * ScanBy [ScanBy](#scanby)
  * StartTime **required** [Timestamp](#timestamp)

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
  * Dimensions [Dimensions](#dimensions)
  * EndTime **required** [Timestamp](#timestamp)
  * ExtendedStatistics [ExtendedStatistics](#extendedstatistics)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * Period **required** [Period](#period)
  * StartTime **required** [Timestamp](#timestamp)
  * Statistics [Statistics](#statistics)
  * Unit [StandardUnit](#standardunit)

#### Output
* output [GetMetricStatisticsOutput](#getmetricstatisticsoutput)

### ListDashboards



```js
amazonaws_monitoring.ListDashboards({}, context)
```

#### Input
* input `object`
  * DashboardNamePrefix [DashboardNamePrefix](#dashboardnameprefix)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListDashboardsOutput](#listdashboardsoutput)

### ListMetrics



```js
amazonaws_monitoring.ListMetrics({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * Dimensions [DimensionFilters](#dimensionfilters)
  * MetricName [MetricName](#metricname)
  * Namespace [Namespace](#namespace)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListMetricsOutput](#listmetricsoutput)

### PutDashboard



```js
amazonaws_monitoring.PutDashboard({
  "DashboardName": "",
  "DashboardBody": ""
}, context)
```

#### Input
* input `object`
  * DashboardBody **required** [DashboardBody](#dashboardbody)
  * DashboardName **required** [DashboardName](#dashboardname)

#### Output
* output [PutDashboardOutput](#putdashboardoutput)

### PutMetricAlarm



```js
amazonaws_monitoring.PutMetricAlarm({
  "AlarmName": "",
  "MetricName": "",
  "Namespace": "",
  "Period": 0,
  "EvaluationPeriods": 0,
  "Threshold": 0,
  "ComparisonOperator": ""
}, context)
```

#### Input
* input `object`
  * ActionsEnabled [ActionsEnabled](#actionsenabled)
  * AlarmActions [ResourceList](#resourcelist)
  * AlarmDescription [AlarmDescription](#alarmdescription)
  * AlarmName **required** [AlarmName](#alarmname)
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * DatapointsToAlarm [DatapointsToAlarm](#datapointstoalarm)
  * Dimensions [Dimensions](#dimensions)
  * EvaluateLowSampleCountPercentile [EvaluateLowSampleCountPercentile](#evaluatelowsamplecountpercentile)
  * EvaluationPeriods **required** [EvaluationPeriods](#evaluationperiods)
  * ExtendedStatistic [ExtendedStatistic](#extendedstatistic)
  * InsufficientDataActions [ResourceList](#resourcelist)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * OKActions [ResourceList](#resourcelist)
  * Period **required** [Period](#period)
  * Statistic [Statistic](#statistic)
  * Threshold **required** [Threshold](#threshold)
  * TreatMissingData [TreatMissingData](#treatmissingdata)
  * Unit [StandardUnit](#standardunit)

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
  * MetricData **required** [MetricData](#metricdata)
  * Namespace **required** [Namespace](#namespace)

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
  * AlarmName **required** [AlarmName](#alarmname)
  * StateReason **required** [StateReason](#statereason)
  * StateReasonData [StateReasonData](#statereasondata)
  * StateValue **required** [StateValue](#statevalue)

#### Output
*Output schema unknown*



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
  * AlarmName [AlarmName](#alarmname)
  * HistoryData [HistoryData](#historydata)
  * HistoryItemType [HistoryItemType](#historyitemtype)
  * HistorySummary [HistorySummary](#historysummary)
  * Timestamp [Timestamp](#timestamp)

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

### AwsQueryErrorMessage
* AwsQueryErrorMessage `string`

### ComparisonOperator
* ComparisonOperator `string` (values: GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)

### DashboardArn
* DashboardArn `string`

### DashboardBody
* DashboardBody `string`

### DashboardEntries
* DashboardEntries `array`
  * items [DashboardEntry](#dashboardentry)

### DashboardEntry
* DashboardEntry `object`: Represents a specific dashboard.
  * DashboardArn [DashboardArn](#dashboardarn)
  * DashboardName [DashboardName](#dashboardname)
  * LastModified [LastModified](#lastmodified)
  * Size [Size](#size)

### DashboardErrorMessage
* DashboardErrorMessage `string`

### DashboardInvalidInputError
* DashboardInvalidInputError `object`: Some part of the dashboard data is invalid.
  * dashboardValidationMessages [DashboardValidationMessages](#dashboardvalidationmessages)
  * message [DashboardErrorMessage](#dashboarderrormessage)

### DashboardName
* DashboardName `string`

### DashboardNamePrefix
* DashboardNamePrefix `string`

### DashboardNames
* DashboardNames `array`
  * items [DashboardName](#dashboardname)

### DashboardNotFoundError
* DashboardNotFoundError `object`: The specified dashboard does not exist.
  * message [DashboardErrorMessage](#dashboarderrormessage)

### DashboardValidationMessage
* DashboardValidationMessage `object`: An error or warning for the operation.
  * DataPath [DataPath](#datapath)
  * Message [Message](#message)

### DashboardValidationMessages
* DashboardValidationMessages `array`
  * items [DashboardValidationMessage](#dashboardvalidationmessage)

### DataPath
* DataPath `string`

### Datapoint
* Datapoint `object`: Encapsulates the statistical data that CloudWatch computes from metric data.
  * Average [DatapointValue](#datapointvalue)
  * ExtendedStatistics [DatapointValueMap](#datapointvaluemap)
  * Maximum [DatapointValue](#datapointvalue)
  * Minimum [DatapointValue](#datapointvalue)
  * SampleCount [DatapointValue](#datapointvalue)
  * Sum [DatapointValue](#datapointvalue)
  * Timestamp [Timestamp](#timestamp)
  * Unit [StandardUnit](#standardunit)

### DatapointValue
* DatapointValue `number`

### DatapointValueMap
* DatapointValueMap `array`
  * items `object`
    * key [ExtendedStatistic](#extendedstatistic)
    * value [DatapointValue](#datapointvalue)

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
  * AlarmNames **required** [AlarmNames](#alarmnames)

### DeleteDashboardsInput
* DeleteDashboardsInput `object`
  * DashboardNames **required** [DashboardNames](#dashboardnames)

### DeleteDashboardsOutput
* DeleteDashboardsOutput `object`

### DescribeAlarmHistoryInput
* DescribeAlarmHistoryInput `object`
  * AlarmName [AlarmName](#alarmname)
  * EndDate [Timestamp](#timestamp)
  * HistoryItemType [HistoryItemType](#historyitemtype)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [NextToken](#nexttoken)
  * StartDate [Timestamp](#timestamp)

### DescribeAlarmHistoryOutput
* DescribeAlarmHistoryOutput `object`
  * AlarmHistoryItems [AlarmHistoryItems](#alarmhistoryitems)
  * NextToken [NextToken](#nexttoken)

### DescribeAlarmsForMetricInput
* DescribeAlarmsForMetricInput `object`
  * Dimensions [Dimensions](#dimensions)
  * ExtendedStatistic [ExtendedStatistic](#extendedstatistic)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * Period [Period](#period)
  * Statistic [Statistic](#statistic)
  * Unit [StandardUnit](#standardunit)

### DescribeAlarmsForMetricOutput
* DescribeAlarmsForMetricOutput `object`
  * MetricAlarms [MetricAlarms](#metricalarms)

### DescribeAlarmsInput
* DescribeAlarmsInput `object`
  * ActionPrefix [ActionPrefix](#actionprefix)
  * AlarmNamePrefix [AlarmNamePrefix](#alarmnameprefix)
  * AlarmNames [AlarmNames](#alarmnames)
  * MaxRecords [MaxRecords](#maxrecords)
  * NextToken [NextToken](#nexttoken)
  * StateValue [StateValue](#statevalue)

### DescribeAlarmsOutput
* DescribeAlarmsOutput `object`
  * MetricAlarms [MetricAlarms](#metricalarms)
  * NextToken [NextToken](#nexttoken)

### Dimension
* Dimension `object`: Expands the identity of a metric.
  * Name **required** [DimensionName](#dimensionname)
  * Value **required** [DimensionValue](#dimensionvalue)

### DimensionFilter
* DimensionFilter `object`: Represents filters for a dimension.
  * Name **required** [DimensionName](#dimensionname)
  * Value [DimensionValue](#dimensionvalue)

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
  * AlarmNames **required** [AlarmNames](#alarmnames)

### EnableAlarmActionsInput
* EnableAlarmActionsInput `object`
  * AlarmNames **required** [AlarmNames](#alarmnames)

### ErrorMessage
* ErrorMessage `string`

### EvaluateLowSampleCountPercentile
* EvaluateLowSampleCountPercentile `string`

### EvaluationPeriods
* EvaluationPeriods `integer`

### ExtendedStatistic
* ExtendedStatistic `string`

### ExtendedStatistics
* ExtendedStatistics `array`
  * items [ExtendedStatistic](#extendedstatistic)

### FaultDescription
* FaultDescription `string`

### GetDashboardInput
* GetDashboardInput `object`
  * DashboardName **required** [DashboardName](#dashboardname)

### GetDashboardOutput
* GetDashboardOutput `object`
  * DashboardArn [DashboardArn](#dashboardarn)
  * DashboardBody [DashboardBody](#dashboardbody)
  * DashboardName [DashboardName](#dashboardname)

### GetMetricDataInput
* GetMetricDataInput `object`
  * EndTime **required** [Timestamp](#timestamp)
  * MaxDatapoints [GetMetricDataMaxDatapoints](#getmetricdatamaxdatapoints)
  * MetricDataQueries **required** [MetricDataQueries](#metricdataqueries)
  * NextToken [NextToken](#nexttoken)
  * ScanBy [ScanBy](#scanby)
  * StartTime **required** [Timestamp](#timestamp)

### GetMetricDataMaxDatapoints
* GetMetricDataMaxDatapoints `integer`

### GetMetricDataOutput
* GetMetricDataOutput `object`
  * MetricDataResults [MetricDataResults](#metricdataresults)
  * NextToken [NextToken](#nexttoken)

### GetMetricStatisticsInput
* GetMetricStatisticsInput `object`
  * Dimensions [Dimensions](#dimensions)
  * EndTime **required** [Timestamp](#timestamp)
  * ExtendedStatistics [ExtendedStatistics](#extendedstatistics)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * Period **required** [Period](#period)
  * StartTime **required** [Timestamp](#timestamp)
  * Statistics [Statistics](#statistics)
  * Unit [StandardUnit](#standardunit)

### GetMetricStatisticsOutput
* GetMetricStatisticsOutput `object`
  * Datapoints [Datapoints](#datapoints)
  * Label [MetricLabel](#metriclabel)

### HistoryData
* HistoryData `string`

### HistoryItemType
* HistoryItemType `string` (values: ConfigurationUpdate, StateUpdate, Action)

### HistorySummary
* HistorySummary `string`

### InternalServiceFault
* InternalServiceFault `object`: Request processing has failed due to some unknown error, exception, or failure.
  * Message [FaultDescription](#faultdescription)

### InvalidFormatFault
* InvalidFormatFault `object`: Data was not syntactically valid JSON.
  * message [ErrorMessage](#errormessage)

### InvalidNextToken
* InvalidNextToken `object`: The next token specified is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidParameterCombinationException
* InvalidParameterCombinationException `object`: Parameters were used together that cannot be used together.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### InvalidParameterValueException
* InvalidParameterValueException `object`: The value of an input parameter is bad or out-of-range.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### LastModified
* LastModified `string`

### LimitExceededFault
* LimitExceededFault `object`: The quota for alarms for this customer has already been reached.
  * message [ErrorMessage](#errormessage)

### ListDashboardsInput
* ListDashboardsInput `object`
  * DashboardNamePrefix [DashboardNamePrefix](#dashboardnameprefix)
  * NextToken [NextToken](#nexttoken)

### ListDashboardsOutput
* ListDashboardsOutput `object`
  * DashboardEntries [DashboardEntries](#dashboardentries)
  * NextToken [NextToken](#nexttoken)

### ListMetricsInput
* ListMetricsInput `object`
  * Dimensions [DimensionFilters](#dimensionfilters)
  * MetricName [MetricName](#metricname)
  * Namespace [Namespace](#namespace)
  * NextToken [NextToken](#nexttoken)

### ListMetricsOutput
* ListMetricsOutput `object`
  * Metrics [Metrics](#metrics)
  * NextToken [NextToken](#nexttoken)

### MaxRecords
* MaxRecords `integer`

### Message
* Message `string`

### MessageData
* MessageData `object`: A message returned by the <code>GetMetricData</code>API, including a code and a description.
  * Code [MessageDataCode](#messagedatacode)
  * Value [MessageDataValue](#messagedatavalue)

### MessageDataCode
* MessageDataCode `string`

### MessageDataValue
* MessageDataValue `string`

### Metric
* Metric `object`: Represents a specific metric.
  * Dimensions [Dimensions](#dimensions)
  * MetricName [MetricName](#metricname)
  * Namespace [Namespace](#namespace)

### MetricAlarm
* MetricAlarm `object`: Represents an alarm.
  * ActionsEnabled [ActionsEnabled](#actionsenabled)
  * AlarmActions [ResourceList](#resourcelist)
  * AlarmArn [AlarmArn](#alarmarn)
  * AlarmConfigurationUpdatedTimestamp [Timestamp](#timestamp)
  * AlarmDescription [AlarmDescription](#alarmdescription)
  * AlarmName [AlarmName](#alarmname)
  * ComparisonOperator [ComparisonOperator](#comparisonoperator)
  * DatapointsToAlarm [DatapointsToAlarm](#datapointstoalarm)
  * Dimensions [Dimensions](#dimensions)
  * EvaluateLowSampleCountPercentile [EvaluateLowSampleCountPercentile](#evaluatelowsamplecountpercentile)
  * EvaluationPeriods [EvaluationPeriods](#evaluationperiods)
  * ExtendedStatistic [ExtendedStatistic](#extendedstatistic)
  * InsufficientDataActions [ResourceList](#resourcelist)
  * MetricName [MetricName](#metricname)
  * Namespace [Namespace](#namespace)
  * OKActions [ResourceList](#resourcelist)
  * Period [Period](#period)
  * StateReason [StateReason](#statereason)
  * StateReasonData [StateReasonData](#statereasondata)
  * StateUpdatedTimestamp [Timestamp](#timestamp)
  * StateValue [StateValue](#statevalue)
  * Statistic [Statistic](#statistic)
  * Threshold [Threshold](#threshold)
  * TreatMissingData [TreatMissingData](#treatmissingdata)
  * Unit [StandardUnit](#standardunit)

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
* MetricDataQuery `object`: This structure indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data. A single <code>GetMetricData</code> call can include up to 100 <code>MetricDataQuery</code> structures.
  * Expression [MetricExpression](#metricexpression)
  * Id **required** [MetricId](#metricid)
  * Label [MetricLabel](#metriclabel)
  * MetricStat [MetricStat](#metricstat)
  * ReturnData [ReturnData](#returndata)

### MetricDataResult
* MetricDataResult `object`: A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the time stamps of those data points and other identifying information.
  * Id [MetricId](#metricid)
  * Label [MetricLabel](#metriclabel)
  * Messages [MetricDataResultMessages](#metricdataresultmessages)
  * StatusCode [StatusCode](#statuscode)
  * Timestamps [Timestamps](#timestamps)
  * Values [DatapointValues](#datapointvalues)

### MetricDataResultMessages
* MetricDataResultMessages `array`
  * items [MessageData](#messagedata)

### MetricDataResults
* MetricDataResults `array`
  * items [MetricDataResult](#metricdataresult)

### MetricDatum
* MetricDatum `object`: Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.
  * Dimensions [Dimensions](#dimensions)
  * MetricName **required** [MetricName](#metricname)
  * StatisticValues [StatisticSet](#statisticset)
  * StorageResolution [StorageResolution](#storageresolution)
  * Timestamp [Timestamp](#timestamp)
  * Unit [StandardUnit](#standardunit)
  * Value [DatapointValue](#datapointvalue)

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
  * Metric **required** [Metric](#metric)
  * Period **required** [Period](#period)
  * Stat **required** [Stat](#stat)
  * Unit [StandardUnit](#standardunit)

### Metrics
* Metrics `array`
  * items [Metric](#metric)

### MissingRequiredParameterException
* MissingRequiredParameterException `object`: An input parameter that is required is missing.
  * message [AwsQueryErrorMessage](#awsqueryerrormessage)

### Namespace
* Namespace `string`

### NextToken
* NextToken `string`

### Period
* Period `integer`

### PutDashboardInput
* PutDashboardInput `object`
  * DashboardBody **required** [DashboardBody](#dashboardbody)
  * DashboardName **required** [DashboardName](#dashboardname)

### PutDashboardOutput
* PutDashboardOutput `object`
  * DashboardValidationMessages [DashboardValidationMessages](#dashboardvalidationmessages)

### PutMetricAlarmInput
* PutMetricAlarmInput `object`
  * ActionsEnabled [ActionsEnabled](#actionsenabled)
  * AlarmActions [ResourceList](#resourcelist)
  * AlarmDescription [AlarmDescription](#alarmdescription)
  * AlarmName **required** [AlarmName](#alarmname)
  * ComparisonOperator **required** [ComparisonOperator](#comparisonoperator)
  * DatapointsToAlarm [DatapointsToAlarm](#datapointstoalarm)
  * Dimensions [Dimensions](#dimensions)
  * EvaluateLowSampleCountPercentile [EvaluateLowSampleCountPercentile](#evaluatelowsamplecountpercentile)
  * EvaluationPeriods **required** [EvaluationPeriods](#evaluationperiods)
  * ExtendedStatistic [ExtendedStatistic](#extendedstatistic)
  * InsufficientDataActions [ResourceList](#resourcelist)
  * MetricName **required** [MetricName](#metricname)
  * Namespace **required** [Namespace](#namespace)
  * OKActions [ResourceList](#resourcelist)
  * Period **required** [Period](#period)
  * Statistic [Statistic](#statistic)
  * Threshold **required** [Threshold](#threshold)
  * TreatMissingData [TreatMissingData](#treatmissingdata)
  * Unit [StandardUnit](#standardunit)

### PutMetricDataInput
* PutMetricDataInput `object`
  * MetricData **required** [MetricData](#metricdata)
  * Namespace **required** [Namespace](#namespace)

### ResourceList
* ResourceList `array`
  * items [ResourceName](#resourcename)

### ResourceName
* ResourceName `string`

### ResourceNotFound
* ResourceNotFound `object`: The named resource does not exist.
  * message [ErrorMessage](#errormessage)

### ReturnData
* ReturnData `boolean`

### ScanBy
* ScanBy `string` (values: TimestampDescending, TimestampAscending)

### SetAlarmStateInput
* SetAlarmStateInput `object`
  * AlarmName **required** [AlarmName](#alarmname)
  * StateReason **required** [StateReason](#statereason)
  * StateReasonData [StateReasonData](#statereasondata)
  * StateValue **required** [StateValue](#statevalue)

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
  * Maximum **required** [DatapointValue](#datapointvalue)
  * Minimum **required** [DatapointValue](#datapointvalue)
  * SampleCount **required** [DatapointValue](#datapointvalue)
  * Sum **required** [DatapointValue](#datapointvalue)

### Statistics
* Statistics `array`
  * items [Statistic](#statistic)

### StatusCode
* StatusCode `string` (values: Complete, InternalError, PartialData)

### StorageResolution
* StorageResolution `integer`

### Threshold
* Threshold `number`

### Timestamp
* Timestamp `string`

### Timestamps
* Timestamps `array`
  * items [Timestamp](#timestamp)

### TreatMissingData
* TreatMissingData `string`


