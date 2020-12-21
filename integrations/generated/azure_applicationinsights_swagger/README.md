# @datafire/azure_applicationinsights_swagger

Client library for Application Insights Data Plane

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_swagger
```
```js
let azure_applicationinsights_swagger = require('@datafire/azure_applicationinsights_swagger').create({
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

This API exposes AI metric & event information and associated metadata

## Actions

### Events_GetOdataMetadata
Gets OData EDMX metadata describing the event data model


```js
azure_applicationinsights_swagger.Events_GetOdataMetadata({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * apiVersion **required** `string`: Client API version.

#### Output
* output `object`

### Events_GetByType
Executes an OData query for events


```js
azure_applicationinsights_swagger.Events_GetByType({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "eventType": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * eventType **required** `string` (values: $all, traces, customEvents, pageViews, browserTimings, requests, dependencies, exceptions, availabilityResults, performanceCounters, customMetrics): The type of events to query; either a standard event type (`traces`, `customEvents`, `pageViews`, `requests`, `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query across all event types.
  * timespan `string`: Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression.
  * $filter `string`: An expression used to filter the returned events
  * $search `string`: A free-text search expression to match for whether a particular event should be returned
  * $orderby `string`: A comma-separated list of properties with \"asc\" (the default) or \"desc\" to control the order of returned events
  * $select `string`: Limits the properties to just those requested on each returned event
  * $skip `integer`: The number of items to skip over before returning events
  * $top `integer`: The number of events to return
  * $format `string`: Format for the returned events
  * $count `boolean`: Request a count of matching items included with the returned events
  * $apply `string`: An expression used for aggregation over returned events
  * apiVersion **required** `string`: Client API version.

#### Output
* output [eventsResults](#eventsresults)

### Events_Get
Gets the data for a single event


```js
azure_applicationinsights_swagger.Events_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "eventType": "",
  "eventId": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * eventType **required** `string` (values: $all, traces, customEvents, pageViews, browserTimings, requests, dependencies, exceptions, availabilityResults, performanceCounters, customMetrics): The type of events to query; either a standard event type (`traces`, `customEvents`, `pageViews`, `requests`, `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query across all event types.
  * timespan `string`: Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression.
  * eventId **required** `string`: ID of event.
  * apiVersion **required** `string`: Client API version.

#### Output
* output [eventsResults](#eventsresults)

### Metrics_GetMetadata
Gets metadata describing the available metrics


```js
azure_applicationinsights_swagger.Metrics_GetMetadata({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * apiVersion **required** `string`: Client API version.

#### Output
* output `object`

### Metrics_Get
Gets metric values for a single metric


```js
azure_applicationinsights_swagger.Metrics_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "metricId": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * metricId **required** `string` (values: requests/count, requests/duration, requests/failed, users/count, users/authenticated, pageViews/count, pageViews/duration, client/processingDuration, client/receiveDuration, client/networkDuration, client/sendDuration, client/totalDuration, dependencies/count, dependencies/failed, dependencies/duration, exceptions/count, exceptions/browser, exceptions/server, sessions/count, performanceCounters/requestExecutionTime, performanceCounters/requestsPerSecond, performanceCounters/requestsInQueue, performanceCounters/memoryAvailableBytes, performanceCounters/exceptionsPerSecond, performanceCounters/processCpuPercentage, performanceCounters/processIOBytesPerSecond, performanceCounters/processPrivateBytes, performanceCounters/processorCpuPercentage, availabilityResults/availabilityPercentage, availabilityResults/duration, billing/telemetryCount, customEvents/count): ID of the metric. This is either a standard AI metric, or an application-specific custom metric.
  * timespan `string`: The timespan over which to retrieve metric values. This is an ISO8601 time period value. If timespan is omitted, a default time range of `PT12H` ("last 12 hours") is used. The actual timespan that is queried may be adjusted by the server based. In all cases, the actual time span used for the query is included in the response.
  * interval `string`: The time interval to use when retrieving metric values. This is an ISO8601 duration. If interval is omitted, the metric value is aggregated across the entire timespan. If interval is supplied, the server may adjust the interval to a more appropriate size based on the timespan used for the query. In all cases, the actual interval used for the query is included in the response.
  * aggregation `array`: The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used.
  * segment `array`: The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter.
  * top `integer`: The number of segments to return.  This value is only valid when segment is specified.
  * orderby `string`: The aggregation function and direction to sort the segments by.  This value is only valid when segment is specified.
  * filter `string`: An expression used to filter the results.  This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving.
  * apiVersion **required** `string`: Client API version.

#### Output
* output [metricsResult](#metricsresult)

### Query_Get
Executes an Analytics query for data


```js
azure_applicationinsights_swagger.Query_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "query": "",
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * query **required** `string`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
  * timespan `string`: Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression.
  * apiVersion **required** `string`: Client API version.

#### Output
* output [queryResults](#queryresults)

### Query_Execute
Executes an Analytics query for data. [Here](https://dev.applicationinsights.io/documentation/Using-the-API/Query) is an example for using POST with an Analytics query.


```js
azure_applicationinsights_swagger.Query_Execute({
  "subscriptionId": "",
  "resourceGroupName": "",
  "applicationName": "",
  "body": {
    "query": ""
  },
  "apiVersion": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * applicationName **required** `string`: Name of the Application Insights application.
  * body **required** [queryBody](#querybody)
  * apiVersion **required** `string`: Client API version.

#### Output
* output [queryResults](#queryresults)



## Definitions

### applicationsParam
* applicationsParam `array`: Application IDs to include in cross-application queries.
  * items `string`

### column
* A table column. `object`: A column in a table.
  * name `string`: The name of this column.
  * type `string`: The data type of this column.

### errorDetail
* Error details. `object`
  * additionalProperties `object`
  * code **required** `string`: The error's code.
  * message **required** `string`: A human readable error message.
  * resources `array`: Indicates resources which were responsible for the error.
    * items `string`
  * target `string`: Indicates which property in the request is responsible for the error.
  * value `string`: Indicates which value in 'target' is responsible for the error.

### errorInfo
* The code and message for an error. `object`
  * additionalProperties `object`
  * code **required** `string`: A machine readable error code.
  * details `array`: error details.
    * items [errorDetail](#errordetail)
  * innererror [errorInfo](#errorinfo)
  * message **required** `string`: A human readable error message.

### errorResponse
* Error details. `object`: Contains details when the response code indicates an error.
  * error **required** [errorInfo](#errorinfo)

### eventId
* eventId `string`: ID of event.

### eventType
* eventType `string` (values: $all, traces, customEvents, pageViews, browserTimings, requests, dependencies, exceptions, availabilityResults, performanceCounters, customMetrics): The type of events to query; either a standard event type (`traces`, `customEvents`, `pageViews`, `requests`, `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query across all event types.

### eventsAiInfo
* eventsAiInfo `object`: AI related application info for an event result
  * appId `string`: ID of the application
  * appName `string`: Name of the application
  * iKey `string`: iKey of the app
  * sdkVersion `string`: SDK version of the application

### eventsApplicationInfo
* eventsApplicationInfo `object`: Application info for an event result
  * version `string`: Version of the application

### eventsApply
* eventsApply `string`: An expression used for aggregation over returned events

### eventsAvailabilityResultInfo
* eventsAvailabilityResultInfo `object`: The availability result info
  * duration `integer`: The duration of the availability result
  * id `string`: The ID of the availability result
  * location `string`: The location of the availability result
  * message `string`: The message of the availability result
  * name `string`: The name of the availability result
  * performanceBucket `string`: The performance bucket of the availability result
  * size `string`: The size of the availability result
  * success `string`: Indicates if the availability result was successful

### eventsAvailabilityResultResult
* eventsAvailabilityResultResult: An availability result result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * availabilityResult [eventsAvailabilityResultInfo](#eventsavailabilityresultinfo)

### eventsBrowserTimingInfo
* eventsBrowserTimingInfo `object`: The browser timing information
  * name `string`: The name of the page
  * networkDuration `integer`: The network duration of the load
  * performanceBucket `string`: The performance bucket of the load
  * processingDuration `integer`: The processing duration of the load
  * receiveDuration `integer`: The receive duration of the load
  * sendDuration `integer`: The send duration of the load
  * totalDuration `integer`: The total duration of the load
  * url `string`: The url of the page
  * urlHost `string`: The host of the URL
  * urlPath `string`: The path of the URL

### eventsBrowserTimingResult
* eventsBrowserTimingResult: A browser timing result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * browserTiming [eventsBrowserTimingInfo](#eventsbrowsertiminginfo)
  * clientPerformance [eventsClientPerformanceInfo](#eventsclientperformanceinfo)

### eventsClientInfo
* eventsClientInfo `object`: Client info for an event result
  * browser `string`: Browser of the client
  * city `string`: City of the client
  * countryOrRegion `string`: Country or region of the client
  * ip `string`: IP address of the client
  * model `string`: Model of the client
  * os `string`: Operating system of the client
  * stateOrProvince `string`: State or province of the client
  * type `string`: Type of the client

### eventsClientPerformanceInfo
* eventsClientPerformanceInfo `object`: Client performance information
  * name `string`: The name of the client performance

### eventsCloudInfo
* eventsCloudInfo `object`: Cloud info for an event result
  * roleInstance `string`: Role instance of the cloud
  * roleName `string`: Role name of the cloud

### eventsCount
* eventsCount `boolean`: Request a count of matching items included with the returned events

### eventsCustomEventInfo
* eventsCustomEventInfo `object`: The custom event information
  * name `string`: The name of the custom event

### eventsCustomEventResult
* eventsCustomEventResult: A custom event result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * customEvent [eventsCustomEventInfo](#eventscustomeventinfo)

### eventsCustomMetricInfo
* eventsCustomMetricInfo `object`: The custom metric info
  * name `string`: The name of the custom metric
  * value `number`: The value of the custom metric
  * valueCount `integer`: The count of the custom metric
  * valueMax `number`: The maximum value of the custom metric
  * valueMin `number`: The minimum value of the custom metric
  * valueStdDev `number`: The standard deviation of the custom metric
  * valueSum `number`: The sum of the custom metric

### eventsCustomMetricResult
* eventsCustomMetricResult: A custom metric result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * customMetric [eventsCustomMetricInfo](#eventscustommetricinfo)

### eventsDependencyInfo
* eventsDependencyInfo `object`: The dependency info
  * data `string`: The data of the dependency
  * duration `integer`: The duration of the dependency
  * id `string`: The ID of the dependency
  * name `string`: The name of the dependency
  * performanceBucket `string`: The performance bucket of the dependency
  * resultCode `string`: The result code of the dependency
  * success `string`: Indicates if the dependency was successful
  * target `string`: The target of the dependency
  * type `string`: The type of the dependency

### eventsDependencyResult
* eventsDependencyResult: A dependency result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * dependency [eventsDependencyInfo](#eventsdependencyinfo)

### eventsExceptionDetail
* eventsExceptionDetail `object`: Exception details
  * id `string`: The ID of the exception detail
  * message `string`: The message of the exception detail
  * outerId `string`: The outer ID of the exception detail
  * parsedStack `array`: The parsed stack
    * items [eventsExceptionDetailsParsedStack](#eventsexceptiondetailsparsedstack)
  * severityLevel `string`: The severity level of the exception detail
  * type `string`: The type of the exception detail

### eventsExceptionDetailsParsedStack
* eventsExceptionDetailsParsedStack `object`: A parsed stack entry
  * assembly `string`: The assembly of the stack entry
  * level `integer`: The level of the stack entry
  * line `integer`: The line of the stack entry
  * method `string`: The method of the stack entry

### eventsExceptionInfo
* eventsExceptionInfo `object`: The exception info
  * assembly `string`: The assembly which threw the exception
  * details `array`: The details of the exception
    * items [eventsExceptionDetail](#eventsexceptiondetail)
  * handledAt `string`: Indicates where the exception was handled at
  * innermostAssembly `string`: The inner most assembly of the exception
  * innermostMessage `string`: The inner most message of the exception
  * innermostMethod `string`: The inner most method of the exception
  * innermostType `string`: The inner most type of the exception
  * message `string`: The message of the exception
  * method `string`: The method that threw the exception
  * outerAssembly `string`: The outer assembly of the exception
  * outerMessage `string`: The outer message of the exception
  * outerMethod `string`: The outer method of the exception
  * outerType `string`: The outer type of the exception
  * problemId `string`: The problem ID of the exception
  * severityLevel `integer`: The severity level of the exception
  * type `string`: The type of the exception

### eventsExceptionResult
* eventsExceptionResult: An exception result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * exception [eventsExceptionInfo](#eventsexceptioninfo)

### eventsFilter
* eventsFilter `string`: An expression used to filter the returned events

### eventsFormat
* eventsFormat `string`: Format for the returned events

### eventsOperationInfo
* eventsOperationInfo `object`: Operation info for an event result
  * id `string`: ID of the operation
  * name `string`: Name of the operation
  * parentId `string`: Parent ID of the operation
  * syntheticSource `string`: Synthetic source of the operation

### eventsOrderBy
* eventsOrderBy `string`: A comma-separated list of properties with \"asc\" (the default) or \"desc\" to control the order of returned events

### eventsPageViewInfo
* eventsPageViewInfo `object`: The page view information
  * duration `string`: The duration of the page view
  * name `string`: The name of the page
  * performanceBucket `string`: The performance bucket of the page view
  * url `string`: The URL of the page

### eventsPageViewResult
* eventsPageViewResult: A page view result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * pageView [eventsPageViewInfo](#eventspageviewinfo)

### eventsPerformanceCounterInfo
* eventsPerformanceCounterInfo `object`: The performance counter info
  * category `string`: The category of the performance counter
  * counter `string`: The counter of the performance counter
  * instance `string`: The instance of the performance counter
  * instanceName `string`: The instance name of the performance counter
  * name `string`: The name of the performance counter
  * value `number`: The value of the performance counter

### eventsPerformanceCounterResult
* eventsPerformanceCounterResult: A performance counter result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * performanceCounter [eventsPerformanceCounterInfo](#eventsperformancecounterinfo)

### eventsRequestInfo
* eventsRequestInfo `object`: The request info
  * duration `number`: The duration of the request
  * id `string`: The ID of the request
  * name `string`: The name of the request
  * performanceBucket `string`: The performance bucket of the request
  * resultCode `string`: The result code of the request
  * source `string`: The source of the request
  * success `string`: Indicates if the request was successful
  * url `string`: The URL of the request

### eventsRequestResult
* eventsRequestResult: A request result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * request [eventsRequestInfo](#eventsrequestinfo)

### eventsResult
* eventsResult `object`: An event query result.
  * @ai.messages `array`: OData messages for this response.
    * items [errorInfo](#errorinfo)
  * value [eventsResultData](#eventsresultdata)

### eventsResultData
* eventsResultData `object`: Events query result data.
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)

### eventsResults
* eventsResults `object`: An events query result.
  * @ai.messages `array`: OData messages for this response.
    * items [errorInfo](#errorinfo)
  * @odata.context `string`: OData context metadata endpoint for this response
  * value `array`: Contents of the events query result.
    * items [eventsResultData](#eventsresultdata)

### eventsSearch
* eventsSearch `string`: A free-text search expression to match for whether a particular event should be returned

### eventsSelect
* eventsSelect `string`: Limits the properties to just those requested on each returned event

### eventsSessionInfo
* eventsSessionInfo `object`: Session info for an event result
  * id `string`: ID of the session

### eventsSkip
* eventsSkip `integer`: The number of items to skip over before returning events

### eventsTimespan
* eventsTimespan `string`: Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression.

### eventsTop
* eventsTop `integer`: The number of events to return

### eventsTraceInfo
* eventsTraceInfo `object`: The trace information
  * message `string`: The trace message
  * severityLevel `integer`: The trace severity level

### eventsTraceResult
* eventsTraceResult: A trace result
  * ai [eventsAiInfo](#eventsaiinfo)
  * application [eventsApplicationInfo](#eventsapplicationinfo)
  * client [eventsClientInfo](#eventsclientinfo)
  * cloud [eventsCloudInfo](#eventscloudinfo)
  * count `integer`: Count of the event
  * customDimensions `object`: Custom dimensions of the event
    * additionalProperties `object`
  * customMeasurements `object`: Custom measurements of the event
    * additionalProperties `object`
  * id `string`: The unique ID for this event.
  * operation [eventsOperationInfo](#eventsoperationinfo)
  * session [eventsSessionInfo](#eventssessioninfo)
  * timestamp `string`: Timestamp of the event
  * type [eventType](#eventtype)
  * user [eventsUserInfo](#eventsuserinfo)
  * trace [eventsTraceInfo](#eventstraceinfo)

### eventsUserInfo
* eventsUserInfo `object`: User info for an event result
  * accountId `string`: Account ID of the user
  * authenticatedId `string`: Authenticated ID of the user
  * id `string`: ID of the user

### metricId
* metricId `string` (values: requests/count, requests/duration, requests/failed, users/count, users/authenticated, pageViews/count, pageViews/duration, client/processingDuration, client/receiveDuration, client/networkDuration, client/sendDuration, client/totalDuration, dependencies/count, dependencies/failed, dependencies/duration, exceptions/count, exceptions/browser, exceptions/server, sessions/count, performanceCounters/requestExecutionTime, performanceCounters/requestsPerSecond, performanceCounters/requestsInQueue, performanceCounters/memoryAvailableBytes, performanceCounters/exceptionsPerSecond, performanceCounters/processCpuPercentage, performanceCounters/processIOBytesPerSecond, performanceCounters/processPrivateBytes, performanceCounters/processorCpuPercentage, availabilityResults/availabilityPercentage, availabilityResults/duration, billing/telemetryCount, customEvents/count): ID of the metric. This is either a standard AI metric, or an application-specific custom metric.

### metricsAggregation
* metricsAggregation `array`: The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used.
  * items `string` (values: min, max, avg, sum, count, unique)

### metricsFilter
* metricsFilter `string`: An expression used to filter the results.  This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving.

### metricsInterval
* metricsInterval `string`: The time interval to use when retrieving metric values. This is an ISO8601 duration. If interval is omitted, the metric value is aggregated across the entire timespan. If interval is supplied, the server may adjust the interval to a more appropriate size based on the timespan used for the query. In all cases, the actual interval used for the query is included in the response.

### metricsOrderBy
* metricsOrderBy `string`: The aggregation function and direction to sort the segments by.  This value is only valid when segment is specified.

### metricsPostBody
* metricsPostBody `array`: Metrics request body
  * items [metricsPostBodySchema](#metricspostbodyschema)

### metricsPostBodySchema
* metricsPostBodySchema `object`: A metric request
  * id **required** `string`: An identifier for this query.  Must be unique within the post body of the request.  This identifier will be the 'id' property of the response object representing this query.
  * parameters **required** `object`: The parameters for a single metrics query
    * aggregation [metricsAggregation](#metricsaggregation)
    * filter [metricsFilter](#metricsfilter)
    * interval [metricsInterval](#metricsinterval)
    * metricId **required** [metricId](#metricid)
    * orderby [metricsOrderBy](#metricsorderby)
    * segment [metricsSegment](#metricssegment)
    * timespan [metricsTimespan](#metricstimespan)
    * top [metricsTop](#metricstop)

### metricsResult
* metricsResult `object`: A metric result.
  * value [metricsResultInfo](#metricsresultinfo)

### metricsResultInfo
* metricsResultInfo `object`: A metric result data.
  * end `string`: Start time of the metric.
  * interval `string`: The interval used to segment the metric data.
  * segments `array`: Segmented metric data (if segmented).
    * items [metricsSegmentInfo](#metricssegmentinfo)
  * start `string`: Start time of the metric.

### metricsResults
* metricsResults `array`: A set of metric results.
  * items `object`
    * body **required** [metricsResult](#metricsresult)
    * id **required** `string`: The specified ID for this metric.
    * status **required** `integer`: The HTTP status code of this metric query.

### metricsSegment
* metricsSegment `array`: The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter.
  * items `string` (values: applicationBuild, applicationVersion, authenticatedOrAnonymousTraffic, browser, browserVersion, city, cloudRoleName, cloudServiceName, continent, countryOrRegion, deploymentId, deploymentUnit, deviceType, environment, hostingLocation, instanceName)

### metricsSegmentInfo
* metricsSegmentInfo `object`: A metric segment
  * end `string`: Start time of the metric segment (only when an interval was specified).
  * segments `array`: Segmented metric data (if further segmented).
    * items [metricsSegmentInfo](#metricssegmentinfo)
  * start `string`: Start time of the metric segment (only when an interval was specified).

### metricsTimespan
* metricsTimespan `string`: The timespan over which to retrieve metric values. This is an ISO8601 time period value. If timespan is omitted, a default time range of `PT12H` ("last 12 hours") is used. The actual timespan that is queried may be adjusted by the server based. In all cases, the actual time span used for the query is included in the response.

### metricsTop
* metricsTop `integer`: The number of segments to return.  This value is only valid when segment is specified.

### queryBody
* queryBody `object`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
  * applications [applicationsParam](#applicationsparam)
  * query **required** [queryParam](#queryparam)
  * timespan [queryTimespan](#querytimespan)

### queryParam
* queryParam `string`: The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)

### queryResults
* A query response. `object`: Contains the tables, columns & rows resulting from a query.
  * tables **required** `array`: The list of tables, columns and rows.
    * items [table](#table)

### queryTimespan
* queryTimespan `string`: Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression.

### table
* A query response table. `object`: Contains the columns and rows for one table in a query response.
  * columns **required** `array`: The list of columns in this table.
    * items [column](#column)
  * name **required** `string`: The name of the table.
  * rows **required** `array`: The resulting rows from this query.
    * items `array`
      * items `string`


