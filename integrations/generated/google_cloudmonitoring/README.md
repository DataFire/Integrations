# @datafire/google_cloudmonitoring
Accesses Google Cloud Monitoring data.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: metricDescriptors.list
List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project id. The value can be the numeric project ID or string-based project name."
    },
    "count": {
      "type": "integer",
      "description": "Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results."
    },
    "query": {
      "type": "string",
      "description": "The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics are returned."
    },
    "body": {
      "$ref": "#/definitions/ListMetricDescriptorsRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListMetricDescriptorsResponse"
}
```
## Operation: metricDescriptors.create
Create a new metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project id. The value can be the numeric project ID or string-based project name."
    },
    "body": {
      "$ref": "#/definitions/MetricDescriptor"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetricDescriptor"
}
```
## Operation: metricDescriptors.delete
Delete an existing metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project ID to which the metric belongs."
    },
    "metric": {
      "type": "string",
      "description": "Name of the metric."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "metric"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteMetricDescriptorResponse"
}
```
## Operation: timeseries.list
List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name."
    },
    "metric": {
      "type": "string",
      "description": "Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count."
    },
    "youngest": {
      "type": "string",
      "description": "End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp."
    },
    "aggregator": {
      "type": "string",
      "description": "The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.",
      "enum": [
        "max",
        "mean",
        "min",
        "sum"
      ]
    },
    "count": {
      "type": "integer",
      "description": "Maximum number of data points per page, which is used for pagination of results.",
      "maximum": 12000,
      "minimum": 1
    },
    "labels": {
      "type": "array",
      "description": "A collection of labels for the matching time series, which are represented as:  \n- key==value: key equals the value \n- key=~value: key regex matches the value \n- key!=value: key does not equal the value \n- key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify:\nlabel=cloud.googleapis.com%2Flocation=~us-central1.*"
    },
    "oldest": {
      "type": "string",
      "description": "Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]"
    },
    "pageToken": {
      "type": "string",
      "description": "The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results."
    },
    "timespan": {
      "type": "string",
      "description": "Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  \n- s: second \n- m: minute \n- h: hour \n- d: day \n- w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.\n\nIf neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]."
    },
    "window": {
      "type": "string",
      "description": "The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  \n- m: minute \n- h: hour \n- d: day \n- w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead."
    },
    "body": {
      "$ref": "#/definitions/ListTimeseriesRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "metric",
    "youngest"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTimeseriesResponse"
}
```
## Operation: timeseries.write
Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project ID. The value can be the numeric project ID or string-based project name."
    },
    "body": {
      "$ref": "#/definitions/WriteTimeseriesRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WriteTimeseriesResponse"
}
```
## Operation: timeseriesDescriptors.list
List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name."
    },
    "metric": {
      "type": "string",
      "description": "Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count."
    },
    "youngest": {
      "type": "string",
      "description": "End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp."
    },
    "aggregator": {
      "type": "string",
      "description": "The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics with a value type of INT64 or DOUBLE.",
      "enum": [
        "max",
        "mean",
        "min",
        "sum"
      ]
    },
    "count": {
      "type": "integer",
      "description": "Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.",
      "maximum": 1000,
      "minimum": 1
    },
    "labels": {
      "type": "array",
      "description": "A collection of labels for the matching time series, which are represented as:  \n- key==value: key equals the value \n- key=~value: key regex matches the value \n- key!=value: key does not equal the value \n- key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify:\nlabel=cloud.googleapis.com%2Flocation=~us-central1.*"
    },
    "oldest": {
      "type": "string",
      "description": "Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]"
    },
    "pageToken": {
      "type": "string",
      "description": "The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results."
    },
    "timespan": {
      "type": "string",
      "description": "Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  \n- s: second \n- m: minute \n- h: hour \n- d: day \n- w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.\n\nIf neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]."
    },
    "window": {
      "type": "string",
      "description": "The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for non-cumulative metric types. Units:  \n- m: minute \n- h: hour \n- d: day \n- w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead."
    },
    "body": {
      "$ref": "#/definitions/ListTimeseriesDescriptorsRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "metric",
    "youngest"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTimeseriesDescriptorsResponse"
}
```
