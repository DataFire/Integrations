# @datafire/google_monitoring

Client library for Stackdriver Monitoring

## Installation and Usage
```bash
npm install --save @datafire/google_monitoring
```
```js
let google_monitoring = require('@datafire/google_monitoring').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_monitoring.uptimeCheckIps.list({}).then(data => {
  console.log(data);
})
```

## Description

Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_monitoring.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_monitoring.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### uptimeCheckIps.list
Returns the list of IPs that checkers run from


```js
google_monitoring.uptimeCheckIps.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListUptimeCheckIpsResponse](#listuptimecheckipsresponse)

### projects.metricDescriptors.delete
Deletes a metric descriptor. Only user-created custom metrics can be deleted.


```js
google_monitoring.projects.metricDescriptors.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example of {metric_id} is: "custom.googleapis.com/my_test_metric".
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.metricDescriptors.get
Gets a single metric descriptor. This method does not require a Stackdriver account.


```js
google_monitoring.projects.metricDescriptors.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example value of {metric_id} is "compute.googleapis.com/instance/disk/read_bytes_count".
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [MetricDescriptor](#metricdescriptor)

### projects.uptimeCheckConfigs.patch
Updates an uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via "updateMask". Returns the updated configuration.


```js
google_monitoring.projects.uptimeCheckConfigs.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UptimeCheckConfig](#uptimecheckconfig)
  * name **required** `string`: A unique resource name for this UptimeCheckConfig. The format is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field should be omitted when creating the uptime check configuration; on create, the resource name is assigned by the server and included in the response.
  * name1 `string`: The uptime check configuration to update. The format isprojects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
  * updateMask `string`: Optional. If present, only the listed fields in the current uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [UptimeCheckConfig](#uptimecheckconfig)

### projects.groups.update
Updates an existing group. You can change any group attributes except name.


```js
google_monitoring.projects.groups.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
  * validateOnly `boolean`: If true, validate this request but do not update the existing group.
  * body [Group](#group)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Group](#group)

### projects.collectdTimeSeries.create
Stackdriver Monitoring Agent only: Creates a new time series.<aside class="caution">This method is only for use by the Stackdriver Monitoring Agent. Use projects.timeSeries.create instead.</aside>


```js
google_monitoring.projects.collectdTimeSeries.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
  * body [CreateCollectdTimeSeriesRequest](#createcollectdtimeseriesrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [CreateCollectdTimeSeriesResponse](#createcollectdtimeseriesresponse)

### projects.groups.list
Lists the existing groups.


```js
google_monitoring.projects.groups.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project whose groups are to be listed. The format is "projects/{project_id_or_number}".
  * childrenOfGroup `string`: A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups whose parentName field contains the group name. If no groups have this parent, the results are empty.
  * descendantsOfGroup `string`: A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns the descendants of the specified group. This is a superset of the results returned by the childrenOfGroup filter, and includes children-of-children, and so forth.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * ancestorsOfGroup `string`: A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### projects.groups.create
Creates a new group.


```js
google_monitoring.projects.groups.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project in which to create the group. The format is "projects/{project_id_or_number}".
  * validateOnly `boolean`: If true, validate this request but do not create the group.
  * body [Group](#group)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Group](#group)

### projects.groups.members.list
Lists the monitored resources that are members of a group.


```js
google_monitoring.projects.groups.members.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * interval.startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * interval.endTime `string`: Required. The end of the time interval.
  * filter `string`: An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter:
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListGroupMembersResponse](#listgroupmembersresponse)

### projects.metricDescriptors.list
Lists metric descriptors that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.metricDescriptors.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project on which to execute the request. The format is "projects/{project_id_or_number}".
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * filter `string`: If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics:
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListMetricDescriptorsResponse](#listmetricdescriptorsresponse)

### projects.metricDescriptors.create
Creates a new metric descriptor. User-created metric descriptors define custom metrics.


```js
google_monitoring.projects.metricDescriptors.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project on which to execute the request. The format is "projects/{project_id_or_number}".
  * body [MetricDescriptor](#metricdescriptor)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [MetricDescriptor](#metricdescriptor)

### projects.monitoredResourceDescriptors.list
Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.monitoredResourceDescriptors.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project on which to execute the request. The format is "projects/{project_id_or_number}".
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * filter `string`: An optional filter describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label:
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListMonitoredResourceDescriptorsResponse](#listmonitoredresourcedescriptorsresponse)

### projects.timeSeries.list
Lists time series that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.timeSeries.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * aggregation.alignmentPeriod `string`: The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
  * aggregation.crossSeriesReducer `string` (values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05): The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
  * aggregation.groupByFields `array`: The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
  * aggregation.perSeriesAligner `string` (values: ALIGN_NONE, ALIGN_DELTA, ALIGN_RATE, ALIGN_INTERPOLATE, ALIGN_NEXT_OLDER, ALIGN_MIN, ALIGN_MAX, ALIGN_MEAN, ALIGN_COUNT, ALIGN_SUM, ALIGN_STDDEV, ALIGN_COUNT_TRUE, ALIGN_FRACTION_TRUE, ALIGN_PERCENTILE_99, ALIGN_PERCENTILE_95, ALIGN_PERCENTILE_50, ALIGN_PERCENTILE_05): The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
  * filter `string`: A monitoring filter that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example:
  * interval.endTime `string`: Required. The end of the time interval.
  * interval.startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
  * name **required** `string`: The project on which to execute the request. The format is "projects/{project_id_or_number}".
  * orderBy `string`: Specifies the order in which the points of the time series should be returned. By default, results are not ordered. Currently, this field must be left blank.
  * pageSize `integer`: A positive number that is the maximum number of results to return. When view field sets to FULL, it limits the number of Points server will return; if view field is HEADERS, it limits the number of TimeSeries server will return.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * view `string` (values: FULL, HEADERS): Specifies which information is returned about the time series.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListTimeSeriesResponse](#listtimeseriesresponse)

### projects.timeSeries.create
Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.


```js
google_monitoring.projects.timeSeries.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project on which to execute the request. The format is "projects/{project_id_or_number}".
  * body [CreateTimeSeriesRequest](#createtimeseriesrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.uptimeCheckConfigs.list
Lists the existing valid uptime check configurations for the project, leaving out any invalid configurations.


```js
google_monitoring.projects.uptimeCheckConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
  * parent **required** `string`: The project whose uptime check configurations are listed. The format isprojects/[PROJECT_ID].
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListUptimeCheckConfigsResponse](#listuptimecheckconfigsresponse)

### projects.uptimeCheckConfigs.create
Creates a new uptime check configuration.


```js
google_monitoring.projects.uptimeCheckConfigs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [UptimeCheckConfig](#uptimecheckconfig)
  * parent **required** `string`: The project in which to create the uptime check. The format is:projects/[PROJECT_ID].
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [UptimeCheckConfig](#uptimecheckconfig)



## Definitions

### BasicAuthentication
* BasicAuthentication `object`: A type of authentication to perform against the specified resource or URL that uses username and password. Currently, only Basic authentication is supported in Uptime Monitoring.
  * password `string`: The password to authenticate.
  * username `string`: The username to authenticate.

### BucketOptions
* BucketOptions `object`: BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
  * explicitBuckets [Explicit](#explicit)
  * exponentialBuckets [Exponential](#exponential)
  * linearBuckets [Linear](#linear)

### CollectdPayload
* CollectdPayload `object`: A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
  * endTime `string`: The end time of the interval.
  * metadata `object`: The measurement metadata. Example: "process_id" -> 12345
  * plugin `string`: The name of the plugin. Example: "disk".
  * pluginInstance `string`: The instance name of the plugin Example: "hdcl".
  * startTime `string`: The start time of the interval.
  * type `string`: The measurement type. Example: "memory".
  * typeInstance `string`: The measurement type instance. Example: "used".
  * values `array`: The measured values during this time interval. Each value must have a different dataSourceName.
    * items [CollectdValue](#collectdvalue)

### CollectdPayloadError
* CollectdPayloadError `object`: Describes the error status for payloads that were not written.
  * error [Status](#status)
  * index `integer`: The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads.
  * valueErrors `array`: Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors.
    * items [CollectdValueError](#collectdvalueerror)

### CollectdValue
* CollectdValue `object`: A single data point from a collectd-based plugin.
  * dataSourceName `string`: The data source for the collectd value. For example there are two data sources for network measurements: "rx" and "tx".
  * dataSourceType `string` (values: UNSPECIFIED_DATA_SOURCE_TYPE, GAUGE, COUNTER, DERIVE, ABSOLUTE): The type of measurement.
  * value [TypedValue](#typedvalue)

### CollectdValueError
* CollectdValueError `object`: Describes the error status for values that were not written.
  * error [Status](#status)
  * index `integer`: The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads.

### ContentMatcher
* ContentMatcher `object`: Used to perform string matching. Currently, this matches on the exact content. In the future, it can be expanded to allow for regular expressions and more complex matching.
  * content `string`: String content to match

### CreateCollectdTimeSeriesRequest
* CreateCollectdTimeSeriesRequest `object`: The CreateCollectdTimeSeries request.
  * collectdPayloads `array`: The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
    * items [CollectdPayload](#collectdpayload)
  * collectdVersion `string`: The version of collectd that collected the data. Example: "5.3.0-192.el6".
  * resource [MonitoredResource](#monitoredresource)

### CreateCollectdTimeSeriesResponse
* CreateCollectdTimeSeriesResponse `object`: The CreateCollectdTimeSeries response.
  * payloadErrors `array`: Records the error status for points that were not written due to an error.Failed requests for which nothing is written will return an error response instead.
    * items [CollectdPayloadError](#collectdpayloaderror)

### CreateTimeSeriesRequest
* CreateTimeSeriesRequest `object`: The CreateTimeSeries request.
  * timeSeries `array`: The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.
    * items [TimeSeries](#timeseries)

### Distribution
* Distribution `object`: Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
  * bucketCounts `array`: Required in the Stackdriver Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero.
    * items `string`
  * bucketOptions [BucketOptions](#bucketoptions)
  * count `string`: The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided.
  * mean `number`: The arithmetic mean of the values in the population. If count is zero then this field must be zero.
  * range [Range](#range)
  * sumOfSquaredDeviation `number`: The sum of squared deviations from the mean of the values in the population. For values x_i this is:

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:

### Explicit
* Explicit `object`: Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi  Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.
  * bounds `array`: The values must be monotonically increasing.
    * items `number`

### Exponential
* Exponential `object`: Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).  Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
  * growthFactor `number`: Must be greater than 1.
  * numFiniteBuckets `integer`: Must be greater than 0.
  * scale `number`: Must be greater than 0.

### Field
* Field `object`: A single field of a message type.
  * cardinality `string` (values: CARDINALITY_UNKNOWN, CARDINALITY_OPTIONAL, CARDINALITY_REQUIRED, CARDINALITY_REPEATED): The field cardinality.
  * defaultValue `string`: The string value of the default value of this field. Proto2 syntax only.
  * jsonName `string`: The field JSON name.
  * kind `string` (values: TYPE_UNKNOWN, TYPE_DOUBLE, TYPE_FLOAT, TYPE_INT64, TYPE_UINT64, TYPE_INT32, TYPE_FIXED64, TYPE_FIXED32, TYPE_BOOL, TYPE_STRING, TYPE_GROUP, TYPE_MESSAGE, TYPE_BYTES, TYPE_UINT32, TYPE_ENUM, TYPE_SFIXED32, TYPE_SFIXED64, TYPE_SINT32, TYPE_SINT64): The field type.
  * name `string`: The field name.
  * number `integer`: The field number.
  * oneofIndex `integer`: The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * packed `boolean`: Whether to use alternative packed wire representation.
  * typeUrl `string`: The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp".

### Group
* Group `object`: The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
  * displayName `string`: A user-assigned name for this group, used only for display purposes.
  * filter `string`: The filter used to determine which monitored resources belong to this group.
  * isCluster `boolean`: If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
  * name `string`: Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
  * parentName `string`: The name of the group's parent, if it has one. The format is "projects/{project_id_or_number}/groups/{group_id}". For groups with no parent, parentName is the empty string, "".

### HttpCheck
* HttpCheck `object`: Information involved in an HTTP/HTTPS uptime check request.
  * authInfo [BasicAuthentication](#basicauthentication)
  * headers `object`: The list of headers to send as part of the uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second.
  * maskHeaders `boolean`: Boolean specifiying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.
  * path `string`: The path to the page to run the check against. Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. Optional (defaults to "/").
  * port `integer`: The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).
  * useSsl `boolean`: If true, use HTTPS instead of HTTP to run the check.

### LabelDescriptor
* LabelDescriptor `object`: A description of a label.
  * description `string`: A human-readable description for the label.
  * key `string`: The label key.
  * valueType `string` (values: STRING, BOOL, INT64): The type of data that can be assigned to the label.

### Linear
* Linear `object`: Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).  Lower bound (1 <= i < N): offset + (width * (i - 1)).
  * numFiniteBuckets `integer`: Must be greater than 0.
  * offset `number`: Lower bound of the first bucket.
  * width `number`: Must be greater than 0.

### ListGroupMembersResponse
* ListGroupMembersResponse `object`: The ListGroupMembers response.
  * members `array`: A set of monitored resources in the group.
    * items [MonitoredResource](#monitoredresource)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
  * totalSize `integer`: The total number of elements matching this request.

### ListGroupsResponse
* ListGroupsResponse `object`: The ListGroups response.
  * group `array`: The groups that match the specified filters.
    * items [Group](#group)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.

### ListMetricDescriptorsResponse
* ListMetricDescriptorsResponse `object`: The ListMetricDescriptors response.
  * metricDescriptors `array`: The metric descriptors that are available to the project and that match the value of filter, if present.
    * items [MetricDescriptor](#metricdescriptor)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.

### ListMonitoredResourceDescriptorsResponse
* ListMonitoredResourceDescriptorsResponse `object`: The ListMonitoredResourceDescriptors response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
  * resourceDescriptors `array`: The monitored resource descriptors that are available to this project and that match filter, if present.
    * items [MonitoredResourceDescriptor](#monitoredresourcedescriptor)

### ListTimeSeriesResponse
* ListTimeSeriesResponse `object`: The ListTimeSeries response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
  * timeSeries `array`: One or more time series that match the filter included in the request.
    * items [TimeSeries](#timeseries)

### ListUptimeCheckConfigsResponse
* ListUptimeCheckConfigsResponse `object`: The protocol for the ListUptimeCheckConfigs response.
  * nextPageToken `string`: This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field).
  * uptimeCheckConfigs `array`: The returned uptime check configurations.
    * items [UptimeCheckConfig](#uptimecheckconfig)

### ListUptimeCheckIpsResponse
* ListUptimeCheckIpsResponse `object`: The protocol for the ListUptimeCheckIps response.
  * nextPageToken `string`: This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented
  * uptimeCheckIps `array`: The returned list of IP addresses (including region and location) that the checkers run from.
    * items [UptimeCheckIp](#uptimecheckip)

### Metric
* Metric `object`: A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
  * labels `object`: The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values.
  * type `string`: An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount.

### MetricDescriptor
* MetricDescriptor `object`: Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
  * description `string`: A detailed description of the metric, which can be used in documentation.
  * displayName `string`: A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * labels `array`: The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
    * items [LabelDescriptor](#labeldescriptor)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
  * name `string`: The resource name of the metric descriptor.
  * type `string`: The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined custom metric types have the DNS name custom.googleapis.com. Metric types should use a natural hierarchical grouping. For example:
  * unit `string`: The unit in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT)
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.

### MonitoredResource
* MonitoredResource `object`: An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone":
  * labels `object`: Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
  * type `string`: Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance.

### MonitoredResourceDescriptor
* MonitoredResourceDescriptor `object`: An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
  * description `string`: Optional. A detailed description of the monitored resource type that might be used in documentation.
  * displayName `string`: Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".
  * labels `array`: Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".
    * items [LabelDescriptor](#labeldescriptor)
  * name `string`: Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}".
  * type `string`: Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.

### Option
* Option `object`: A protocol buffer option, which can be attached to a message, field, enumeration, etc.
  * name `string`: The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http".
  * value `object`: The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.

### Point
* Point `object`: A single data point in a time series.
  * interval [TimeInterval](#timeinterval)
  * value [TypedValue](#typedvalue)

### Range
* Range `object`: The range of the population values.
  * max `number`: The maximum of the population values.
  * min `number`: The minimum of the population values.

### ResourceGroup
* ResourceGroup `object`: The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
  * groupId `string`: The group of resources being monitored. Should be only the group_id, not projects/<project_id>/groups/<group_id>.
  * resourceType `string` (values: RESOURCE_TYPE_UNSPECIFIED, INSTANCE, AWS_ELB_LOAD_BALANCER): The resource type of the group members.

### SourceContext
* SourceContext `object`: SourceContext represents information about the source of a protobuf element, like the file in which it is defined.
  * fileName `string`: The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto".

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TcpCheck
* TcpCheck `object`: Information required for a TCP uptime check request.
  * port `integer`: The port to the page to run the check against. Will be combined with host (specified within the MonitoredResource) to construct the full URL. Required.

### TimeInterval
* TimeInterval `object`: A time interval extending just after a start time through an end time. If the start time is the same as the end time, then the interval represents a single point in time.
  * endTime `string`: Required. The end of the time interval.
  * startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.

### TimeSeries
* TimeSeries `object`: A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
  * metric [Metric](#metric)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.
  * points `array`: The data points of this time series. When listing time series, the order of the points is specified by the list method.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.
    * items [Point](#point)
  * resource [MonitoredResource](#monitoredresource)
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.

### Type
* Type `object`: A protocol buffer message type.
  * fields `array`: The list of fields.
    * items [Field](#field)
  * name `string`: The fully qualified message name.
  * oneofs `array`: The list of types appearing in oneof definitions in this type.
    * items `string`
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * sourceContext [SourceContext](#sourcecontext)
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax.

### TypedValue
* TypedValue `object`: A single strongly-typed value.
  * boolValue `boolean`: A Boolean value: true or false.
  * distributionValue [Distribution](#distribution)
  * doubleValue `number`: A 64-bit double-precision floating-point number. Its magnitude is approximately &plusmn;10<sup>&plusmn;300</sup> and it has 16 significant digits of precision.
  * int64Value `string`: A 64-bit integer. Its range is approximately &plusmn;9.2x10<sup>18</sup>.
  * stringValue `string`: A variable-length string value.

### UptimeCheckConfig
* UptimeCheckConfig `object`: This message configures which resources and services to monitor for availability.
  * contentMatchers `array`: The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and other entries will be ignored. The server will look for an exact match of the string in the page response's content. This field is optional and should only be specified if a content match is required.
    * items [ContentMatcher](#contentmatcher)
  * displayName `string`: A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver Account in order to make it easier to identify; however, uniqueness is not enforced. Required.
  * httpCheck [HttpCheck](#httpcheck)
  * monitoredResource [MonitoredResource](#monitoredresource)
  * name `string`: A unique resource name for this UptimeCheckConfig. The format is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field should be omitted when creating the uptime check configuration; on create, the resource name is assigned by the server and included in the response.
  * period `string`: How often the uptime check is performed. Currently, only 1, 5, 10, and 15 minutes are supported. Required.
  * resourceGroup [ResourceGroup](#resourcegroup)
  * selectedRegions `array`: The list of regions from which the check will be run. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.
    * items `string` (values: REGION_UNSPECIFIED, USA, EUROPE, SOUTH_AMERICA, ASIA_PACIFIC)
  * tcpCheck [TcpCheck](#tcpcheck)
  * timeout `string`: The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.

### UptimeCheckIp
* UptimeCheckIp `object`: Contains the region, location, and list of IP addresses where checkers in the location run from.
  * ipAddress `string`: The IP address from which the uptime check originates. This is a full IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely and should support interpreting this field in either IPv4 or IPv6 format.
  * location `string`: A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category.
  * region `string` (values: REGION_UNSPECIFIED, USA, EUROPE, SOUTH_AMERICA, ASIA_PACIFIC): A broad region category in which the IP address is located.


