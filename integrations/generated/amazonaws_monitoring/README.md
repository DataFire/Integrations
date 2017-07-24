# @datafire/amazonaws_monitoring

Client library for Amazon CloudWatch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_monitoring
```

```js
let datafire = require('datafire');
let amazonaws_monitoring = require('@datafire/amazonaws_monitoring').actions;
let context = new datafire.Context();

amazonaws_monitoring.DeleteAlarms({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

## Actions
### DeleteAlarms



```js
amazonaws_monitoring.DeleteAlarms({}, context)
```

#### Parameters

### DescribeAlarmHistory



```js
amazonaws_monitoring.DescribeAlarmHistory({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)

### DescribeAlarms



```js
amazonaws_monitoring.DescribeAlarms({}, context)
```

#### Parameters
* MaxRecords (string)
* NextToken (string)

### DescribeAlarmsForMetric



```js
amazonaws_monitoring.DescribeAlarmsForMetric({}, context)
```

#### Parameters

### DisableAlarmActions



```js
amazonaws_monitoring.DisableAlarmActions({}, context)
```

#### Parameters

### EnableAlarmActions



```js
amazonaws_monitoring.EnableAlarmActions({}, context)
```

#### Parameters

### GetMetricStatistics



```js
amazonaws_monitoring.GetMetricStatistics({}, context)
```

#### Parameters

### ListMetrics



```js
amazonaws_monitoring.ListMetrics({}, context)
```

#### Parameters
* NextToken (string)

### PutMetricAlarm



```js
amazonaws_monitoring.PutMetricAlarm({}, context)
```

#### Parameters

### PutMetricData



```js
amazonaws_monitoring.PutMetricData({}, context)
```

#### Parameters

### SetAlarmState



```js
amazonaws_monitoring.SetAlarmState({}, context)
```

#### Parameters

