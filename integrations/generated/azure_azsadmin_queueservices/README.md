# @datafire/azure_azsadmin_queueservices

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_queueservices
```
```js
let azure_azsadmin_queueservices = require('@datafire/azure_azsadmin_queueservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Admin Storage Management Client.

## Actions

### QueueServices_Get
Returns the queue service.


```js
azure_azsadmin_queueservices.QueueServices_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "serviceType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * serviceType **required** `string` (values: default): The service type.
  * api-version **required** `string`: REST Api Version.

#### Output
* output [QueueService](#queueservice)

### QueueServices_ListMetricDefinitions
Returns a list of metric definitions for queue service.


```js
azure_azsadmin_queueservices.QueueServices_ListMetricDefinitions({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "serviceType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * serviceType **required** `string` (values: default): The service type.
  * api-version **required** `string`: REST Api Version.

#### Output
* output `object`: Pageable list of metric definitions.
  * nextLink `string`: URI to the next page.
  * value `array`: List of metric definitions.
    * items `object`: Metric definition.
      * metricAvailabilities `array`: Metric availabilities.
        * items `object`: Metric availability.
          * retention `string`: Retention of metric.
          * timeGrain `string`: Time grain.
      * name `object`: Localizable string.
        * localizedValue `string`: Localized value of the string.
        * value `string`: Value of the string.
      * primaryAggregationType `string` (values: None, Average, Total, Minimum, Maximum, Last): Aggregate type.
      * unit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): Metric unit.

### QueueServices_ListMetrics
Returns a list of metrics for the queue service.


```js
azure_azsadmin_queueservices.QueueServices_ListMetrics({
  "subscriptionId": "",
  "resourceGroupName": "",
  "farmId": "",
  "serviceType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id.
  * resourceGroupName **required** `string`: Resource group name.
  * farmId **required** `string`: Farm Id.
  * serviceType **required** `string` (values: default): The service type.
  * api-version **required** `string`: REST Api Version.

#### Output
* output `object`: Pageable list of metrics.
  * nextLink `string`: URI to the next page.
  * value `array`: List of metrics.
    * items `object`: Metric information.
      * endTime `string`: Metric end time.
      * metricUnit `string` (values: Count, Bytes, Seconds, CountPerSecond, BytesPerSecond): Metric unit.
      * metricValues `array`: List of metric values.
        * items `object`: Metric value.
          * average `number`: Average value of metric.
          * count `integer`: Count of metric values.
          * maximum `number`: Maximum value of metric.
          * minimum `number`: Minimum value of metric.
          * properties `string`: Metric value properties.
          * timeStamp `string`: Timestamp of metric value.
          * total `number`: Total value of metric.
      * name `object`: Localizable string.
        * localizedValue `string`: Localized value of the string.
        * value `string`: Value of the string.
      * startTime `string`: Metric start time.
      * timeGrain `string`: Metric time grain.



## Definitions

### QueueService
* QueueService `object`: Queue service.
  * properties [QueueServiceProperties](#queueserviceproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### QueueServiceProperties
* QueueServiceProperties `object`: Queue service properties.
  * settings `object`: Settings of storage services.
    * frontEndHttpListenPort `integer`: The HTTP port of the storage service front end.
    * frontEndHttpsListenPort `integer`: The HTTPs port of the storage service front end.
    * frontEndCallbackThreadsCount `integer`: Front end callback threads count.
    * frontEndCpuBasedKeepAliveThrottlingCpuMonitorIntervalInSeconds `integer`: Interval (in second) of CPU monitor for front end CPU based keep-alive throttling.
    * frontEndCpuBasedKeepAliveThrottlingEnabled `boolean`: Switch of front end CPU based keep-alive throttling.
    * frontEndCpuBasedKeepAliveThrottlingPercentCpuThreshold `number`: Threshold (% percentage) of front end CPU based keep-alive throttling.
    * frontEndCpuBasedKeepAliveThrottlingPercentRequestsToThrottle `number`: Threshold (% percentage) of requests to throttle in front end CPU based keep-alive throttling.
    * frontEndMaxMillisecondsBetweenMemorySamples `integer`: Maximum interval (in millisecond) between memory samples of front end.
    * frontEndMemoryThrottleThresholdSettings `string`: Front end memory throttle threshold settings.
    * frontEndMemoryThrottlingEnabled `boolean`: Switch of front end memory throttling.
    * frontEndMinThreadPoolThreads `integer`: Front end minimum number of threads in thread pool.
    * frontEndThreadPoolBasedKeepAliveIOCompletionThreshold `integer`: Threshold of front end thread pool based keep-alive IO completion.
    * frontEndThreadPoolBasedKeepAliveMonitorIntervalInSeconds `integer`: Monitor interval (in seconds) of front end thread pool based keep-alive monitor.
    * frontEndThreadPoolBasedKeepAlivePercentage `number`: Percentage (%) of front end thread pool based keep-alive.
    * frontEndThreadPoolBasedKeepAliveWorkerThreadThreshold `integer`: Threshold of front end thread pool based keep-alive worker thread.
    * frontEndUseSlaTimeInAvailability `boolean`: Switch of whether front end uses SLA time in availability.
  * healthStatus `string` (values: Unknown, Healthy, Warning, Critical): Current health status.
  * version `string`: Storage service version.


