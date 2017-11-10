# @datafire/amazonaws_monitoring

Client library for Amazon CloudWatch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_monitoring
```

```js
let datafire = require('datafire');
let amazonaws_monitoring = require('@datafire/amazonaws_monitoring').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_monitoring.DeleteAlarms({}).then(data => {
  console.log(data);
})
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

#### Parameters
* AlarmNames (array) **required**

### DeleteDashboards



```js
amazonaws_monitoring.DeleteDashboards({}, context)
```

#### Parameters
* DashboardNames (array)

### DescribeAlarmHistory



```js
amazonaws_monitoring.DescribeAlarmHistory({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)
* AlarmName (string)
* EndDate (string)
* HistoryItemType (string)
* MaxRecords (integer)
* NextToken (string)
* StartDate (string)

### DescribeAlarms



```js
amazonaws_monitoring.DescribeAlarms({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)
* ActionPrefix (string)
* AlarmNamePrefix (string)
* AlarmNames (array)
* MaxRecords (integer)
* NextToken (string)
* StateValue (string)

### DescribeAlarmsForMetric



```js
amazonaws_monitoring.DescribeAlarmsForMetric({
  "MetricName": "",
  "Namespace": ""
}, context)
```

#### Parameters
* Dimensions (array)
* ExtendedStatistic (string)
* MetricName (string) **required**
* Namespace (string) **required**
* Period (integer)
* Statistic (string)
* Unit (string)

### DisableAlarmActions



```js
amazonaws_monitoring.DisableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Parameters
* AlarmNames (array) **required**

### EnableAlarmActions



```js
amazonaws_monitoring.EnableAlarmActions({
  "AlarmNames": []
}, context)
```

#### Parameters
* AlarmNames (array) **required**

### GetDashboard



```js
amazonaws_monitoring.GetDashboard({}, context)
```

#### Parameters
* DashboardName (string)

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

#### Parameters
* Dimensions (array)
* EndTime (string) **required**
* ExtendedStatistics (array)
* MetricName (string) **required**
* Namespace (string) **required**
* Period (integer) **required**
* StartTime (string) **required**
* Statistics (array)
* Unit (string)

### ListDashboards



```js
amazonaws_monitoring.ListDashboards({}, context)
```

#### Parameters
* DashboardNamePrefix (string)
* NextToken (string)

### ListMetrics



```js
amazonaws_monitoring.ListMetrics({}, context)
```

#### Parameters
* NextToken (string)
* Dimensions (array)
* MetricName (string)
* Namespace (string)
* NextToken (string)

### PutDashboard



```js
amazonaws_monitoring.PutDashboard({}, context)
```

#### Parameters
* DashboardBody (string)
* DashboardName (string)

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

#### Parameters
* ActionsEnabled (boolean)
* AlarmActions (array)
* AlarmDescription (string)
* AlarmName (string) **required**
* ComparisonOperator (string) **required**
* Dimensions (array)
* EvaluateLowSampleCountPercentile (string)
* EvaluationPeriods (integer) **required**
* ExtendedStatistic (string)
* InsufficientDataActions (array)
* MetricName (string) **required**
* Namespace (string) **required**
* OKActions (array)
* Period (integer) **required**
* Statistic (string)
* Threshold (number) **required**
* TreatMissingData (string)
* Unit (string)

### PutMetricData



```js
amazonaws_monitoring.PutMetricData({
  "Namespace": "",
  "MetricData": []
}, context)
```

#### Parameters
* MetricData (array) **required**
* Namespace (string) **required**

### SetAlarmState



```js
amazonaws_monitoring.SetAlarmState({
  "AlarmName": "",
  "StateValue": "",
  "StateReason": ""
}, context)
```

#### Parameters
* AlarmName (string) **required**
* StateReason (string) **required**
* StateReasonData (string)
* StateValue (string) **required**

