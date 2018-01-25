# @datafire/google_cloudmonitoring

Client library for Cloud Monitoring

## Installation and Usage
```bash
npm install --save @datafire/google_cloudmonitoring
```
```js
let google_cloudmonitoring = require('@datafire/google_cloudmonitoring').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudmonitoring.metricDescriptors.list({
  "project": ""
}).then(data => {
  console.log(data);
});
```

## Description

Accesses Google Cloud Monitoring data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudmonitoring.oauthCallback({
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
google_cloudmonitoring.oauthRefresh(null, context)
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

### metricDescriptors.list
List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.metricDescriptors.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id. The value can be the numeric project ID or string-based project name.
  * count `integer`: Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.
  * pageToken `string`: The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
  * query `string`: The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics are returned.
  * body [ListMetricDescriptorsRequest](#listmetricdescriptorsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListMetricDescriptorsResponse](#listmetricdescriptorsresponse)

### metricDescriptors.create
Create a new metric.


```js
google_cloudmonitoring.metricDescriptors.create({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project id. The value can be the numeric project ID or string-based project name.
  * body [MetricDescriptor](#metricdescriptor)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MetricDescriptor](#metricdescriptor)

### metricDescriptors.delete
Delete an existing metric.


```js
google_cloudmonitoring.metricDescriptors.delete({
  "project": "",
  "metric": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID to which the metric belongs.
  * metric **required** `string`: Name of the metric.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeleteMetricDescriptorResponse](#deletemetricdescriptorresponse)

### timeseries.list
List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.timeseries.list({
  "project": "",
  "metric": "",
  "youngest": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
  * metric **required** `string`: Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
  * youngest **required** `string`: End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
  * aggregator `string` (values: max, mean, min, sum): The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.
  * count `integer`: Maximum number of data points per page, which is used for pagination of results.
  * labels `array`: A collection of labels for the matching time series, which are represented as:  
  * oldest `string`: Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
  * pageToken `string`: The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
  * timespan `string`: Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
  * window `string`: The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  
  * body [ListTimeseriesRequest](#listtimeseriesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTimeseriesResponse](#listtimeseriesresponse)

### timeseries.write
Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time.


```js
google_cloudmonitoring.timeseries.write({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID. The value can be the numeric project ID or string-based project name.
  * body [WriteTimeseriesRequest](#writetimeseriesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WriteTimeseriesResponse](#writetimeseriesresponse)

### timeseriesDescriptors.list
List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.timeseriesDescriptors.list({
  "project": "",
  "metric": "",
  "youngest": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
  * metric **required** `string`: Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
  * youngest **required** `string`: End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
  * aggregator `string` (values: max, mean, min, sum): The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.
  * count `integer`: Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.
  * labels `array`: A collection of labels for the matching time series, which are represented as:  
  * oldest `string`: Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
  * pageToken `string`: The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
  * timespan `string`: Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
  * window `string`: The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  
  * body [ListTimeseriesDescriptorsRequest](#listtimeseriesdescriptorsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTimeseriesDescriptorsResponse](#listtimeseriesdescriptorsresponse)



## Definitions

### DeleteMetricDescriptorResponse
* DeleteMetricDescriptorResponse `object`: The response of cloudmonitoring.metricDescriptors.delete.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#deleteMetricDescriptorResponse".

### ListMetricDescriptorsRequest
* ListMetricDescriptorsRequest `object`: The request of cloudmonitoring.metricDescriptors.list.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsRequest".

### ListMetricDescriptorsResponse
* ListMetricDescriptorsResponse `object`: The response of cloudmonitoring.metricDescriptors.list.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsResponse".
  * metrics `array`: The returned metric descriptors.
    * items [MetricDescriptor](#metricdescriptor)
  * nextPageToken `string`: Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, pass this value to the pageToken query parameter.

### ListTimeseriesDescriptorsRequest
* ListTimeseriesDescriptorsRequest `object`: The request of cloudmonitoring.timeseriesDescriptors.list
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsRequest".

### ListTimeseriesDescriptorsResponse
* ListTimeseriesDescriptorsResponse `object`: The response of cloudmonitoring.timeseriesDescriptors.list
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsResponse".
  * nextPageToken `string`: Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set this value to the pageToken query parameter.
  * oldest `string`: The oldest timestamp of the interval of this query, as an RFC 3339 string.
  * timeseries `array`: The returned time series descriptors.
    * items [TimeseriesDescriptor](#timeseriesdescriptor)
  * youngest `string`: The youngest timestamp of the interval of this query, as an RFC 3339 string.

### ListTimeseriesRequest
* ListTimeseriesRequest `object`: The request of cloudmonitoring.timeseries.list
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesRequest".

### ListTimeseriesResponse
* ListTimeseriesResponse `object`: The response of cloudmonitoring.timeseries.list
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesResponse".
  * nextPageToken `string`: Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set the pageToken query parameter to this value. All of the points of a time series will be returned before returning any point of the subsequent time series.
  * oldest `string`: The oldest timestamp of the interval of this query as an RFC 3339 string.
  * timeseries `array`: The returned time series.
    * items [Timeseries](#timeseries)
  * youngest `string`: The youngest timestamp of the interval of this query as an RFC 3339 string.

### MetricDescriptor
* MetricDescriptor `object`: A metricDescriptor defines the name, label keys, and data type of a particular metric.
  * description `string`: Description of this metric.
  * labels `array`: Labels defined for this metric.
    * items [MetricDescriptorLabelDescriptor](#metricdescriptorlabeldescriptor)
  * name `string`: The name of this metric.
  * project `string`: The project ID to which the metric belongs.
  * typeDescriptor [MetricDescriptorTypeDescriptor](#metricdescriptortypedescriptor)

### MetricDescriptorLabelDescriptor
* MetricDescriptorLabelDescriptor `object`: A label in a metric is a description of this metric, including the key of this description (what the description is), and the value for this description.
  * description `string`: Label description.
  * key `string`: Label key.

### MetricDescriptorTypeDescriptor
* MetricDescriptorTypeDescriptor `object`: A type in a metric contains information about how the metric is collected and what its data points look like.
  * metricType `string`: The method of collecting data for the metric. See Metric types.
  * valueType `string`: The data type of of individual points in the metric's time series. See Metric value types.

### Point
* Point `object`: Point is a single point in a time series. It consists of a start time, an end time, and a value.
  * boolValue `boolean`: The value of this data point. Either "true" or "false".
  * distributionValue [PointDistribution](#pointdistribution)
  * doubleValue `number`: The value of this data point as a double-precision floating-point number.
  * end `string`: The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be non-empty. Both start and end are RFC 3339 strings.
  * int64Value `string`: The value of this data point as a 64-bit integer.
  * start `string`: The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be non-empty. Both start and end are RFC 3339 strings.
  * stringValue `string`: The value of this data point in string format.

### PointDistribution
* PointDistribution `object`: Distribution data point value type. When writing distribution points, try to be consistent with the boundaries of your buckets. If you must modify the bucket boundaries, then do so by merging, partitioning, or appending rather than skewing them.
  * buckets `array`: The finite buckets.
    * items [PointDistributionBucket](#pointdistributionbucket)
  * overflowBucket [PointDistributionOverflowBucket](#pointdistributionoverflowbucket)
  * underflowBucket [PointDistributionUnderflowBucket](#pointdistributionunderflowbucket)

### PointDistributionBucket
* PointDistributionBucket `object`: The histogram's bucket. Buckets that form the histogram of a distribution value. If the upper bound of a bucket, say U1, does not equal the lower bound of the next bucket, say L2, this means that there is no event in [U1, L2).
  * count `string`: The number of events whose values are in the interval defined by this bucket.
  * lowerBound `number`: The lower bound of the value interval of this bucket (inclusive).
  * upperBound `number`: The upper bound of the value interval of this bucket (exclusive).

### PointDistributionOverflowBucket
* PointDistributionOverflowBucket `object`: The overflow bucket is a special bucket that does not have the upperBound field; it includes all of the events that are no less than its lower bound.
  * count `string`: The number of events whose values are in the interval defined by this bucket.
  * lowerBound `number`: The lower bound of the value interval of this bucket (inclusive).

### PointDistributionUnderflowBucket
* PointDistributionUnderflowBucket `object`: The underflow bucket is a special bucket that does not have the lowerBound field; it includes all of the events that are less than its upper bound.
  * count `string`: The number of events whose values are in the interval defined by this bucket.
  * upperBound `number`: The upper bound of the value interval of this bucket (exclusive).

### Timeseries
* Timeseries `object`: The monitoring data is organized as metrics and stored as data points that are recorded over time. Each data point represents information like the CPU utilization of your virtual machine. A historical record of these data points is called a time series.
  * points `array`: The data points of this time series. The points are listed in order of their end timestamp, from younger to older.
    * items [Point](#point)
  * timeseriesDesc [TimeseriesDescriptor](#timeseriesdescriptor)

### TimeseriesDescriptor
* TimeseriesDescriptor `object`: TimeseriesDescriptor identifies a single time series.
  * labels `object`: The label's name.
  * metric `string`: The name of the metric.
  * project `string`: The Developers Console project number to which this time series belongs.

### TimeseriesDescriptorLabel
* TimeseriesDescriptorLabel `object`
  * key `string`: The label's name.
  * value `string`: The label's value.

### TimeseriesPoint
* TimeseriesPoint `object`: When writing time series, TimeseriesPoint should be used instead of Timeseries, to enforce single point for each time series in the timeseries.write request.
  * point [Point](#point)
  * timeseriesDesc [TimeseriesDescriptor](#timeseriesdescriptor)

### WriteTimeseriesRequest
* WriteTimeseriesRequest `object`: The request of cloudmonitoring.timeseries.write
  * commonLabels `object`: The label's name.
  * timeseries `array`: Provide time series specific labels and the data points for each time series. The labels in timeseries and the common_labels should form a complete list of labels that required by the metric.
    * items [TimeseriesPoint](#timeseriespoint)

### WriteTimeseriesResponse
* WriteTimeseriesResponse `object`: The response of cloudmonitoring.timeseries.write
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#writeTimeseriesResponse".


