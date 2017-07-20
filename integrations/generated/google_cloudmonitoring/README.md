# @datafire/google_cloudmonitoring

Client library for Cloud Monitoring

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudmonitoring
```

```js
let datafire = require('datafire');
let google_cloudmonitoring = require('@datafire/google_cloudmonitoring').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_cloudmonitoring: account,
  }
})

google_cloudmonitoring.metricDescriptors.list({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudmonitoring.oauthRefresh(null, context)
```


### metricDescriptors.list
List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.metricDescriptors.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project id. The value can be the numeric project ID or string-based project name.
* count (integer) - Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.
* pageToken (string) - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
* query (string) - The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics are returned.
* body (object) - The request of cloudmonitoring.metricDescriptors.list.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metricDescriptors.create
Create a new metric.


```js
google_cloudmonitoring.metricDescriptors.create({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project id. The value can be the numeric project ID or string-based project name.
* body (object) - A metricDescriptor defines the name, label keys, and data type of a particular metric.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metricDescriptors.delete
Delete an existing metric.


```js
google_cloudmonitoring.metricDescriptors.delete({
  "project": "",
  "metric": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID to which the metric belongs.
* metric (string) **required** - Name of the metric.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### timeseries.list
List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.timeseries.list({
  "project": "",
  "metric": "",
  "youngest": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
* metric (string) **required** - Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
* youngest (string) **required** - End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
* aggregator (string) - The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.
* count (integer) - Maximum number of data points per page, which is used for pagination of results.
* labels (array) - A collection of labels for the matching time series, which are represented as:  
* oldest (string) - Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
* pageToken (string) - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
* timespan (string) - Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
* window (string) - The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  
* body (object) - The request of cloudmonitoring.timeseries.list
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### timeseries.write
Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time.


```js
google_cloudmonitoring.timeseries.write({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID. The value can be the numeric project ID or string-based project name.
* body (object) - The request of cloudmonitoring.timeseries.write
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### timeseriesDescriptors.list
List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.


```js
google_cloudmonitoring.timeseriesDescriptors.list({
  "project": "",
  "metric": "",
  "youngest": ""
}, context)
```

#### Parameters
* project (string) **required** - The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
* metric (string) **required** - Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
* youngest (string) **required** - End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
* aggregator (string) - The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.
* count (integer) - Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.
* labels (array) - A collection of labels for the matching time series, which are represented as:  
* oldest (string) - Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
* pageToken (string) - The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
* timespan (string) - Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
* window (string) - The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  
* body (object) - The request of cloudmonitoring.timeseriesDescriptors.list
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

