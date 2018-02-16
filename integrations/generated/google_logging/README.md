# @datafire/google_logging

Client library for Stackdriver Logging

## Installation and Usage
```bash
npm install --save @datafire/google_logging
```
```js
let google_logging = require('@datafire/google_logging').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_logging.monitoredResourceDescriptors.list({}).then(data => {
  console.log(data);
});
```

## Description

Writes log entries and manages your Stackdriver Logging configuration.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_logging.oauthCallback({
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
google_logging.oauthRefresh(null, context)
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

### entries.list
Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.


```js
google_logging.entries.list({}, context)
```

#### Input
* input `object`
  * body [ListLogEntriesRequest](#listlogentriesrequest)
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
* output [ListLogEntriesResponse](#listlogentriesresponse)

### entries.write
Log entry resourcesWrites log entries to Stackdriver Logging. This API method is the only way to send log entries to Stackdriver Logging. This method is used, directly or indirectly, by the Stackdriver Logging agent (fluentd) and all logging libraries configured to use Stackdriver Logging.


```js
google_logging.entries.write({}, context)
```

#### Input
* input `object`
  * body [WriteLogEntriesRequest](#writelogentriesrequest)
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
* output [WriteLogEntriesResponse](#writelogentriesresponse)

### monitoredResourceDescriptors.list
Lists the descriptors for monitored resource types used by Stackdriver Logging.


```js
google_logging.monitoredResourceDescriptors.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListMonitoredResourceDescriptorsResponse](#listmonitoredresourcedescriptorsresponse)

### billingAccounts.logs.delete
Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.


```js
google_logging.billingAccounts.logs.delete({
  "logName": ""
}, context)
```

#### Input
* input `object`
  * logName **required** `string`: Required. The resource name of the log to delete:
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
* output [Empty](#empty)

### projects.metrics.delete
Deletes a logs-based metric.


```js
google_logging.projects.metrics.delete({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`: The resource name of the metric to delete:
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
* output [Empty](#empty)

### projects.metrics.get
Gets a logs-based metric.


```js
google_logging.projects.metrics.get({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`: The resource name of the desired metric:
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
* output [LogMetric](#logmetric)

### projects.metrics.update
Creates or updates a logs-based metric.


```js
google_logging.projects.metrics.update({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * body [LogMetric](#logmetric)
  * metricName **required** `string`: The resource name of the metric to update:
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
* output [LogMetric](#logmetric)

### billingAccounts.exclusions.delete
Deletes an exclusion.


```js
google_logging.billingAccounts.exclusions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of an existing exclusion to delete:
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
* output [Empty](#empty)

### billingAccounts.exclusions.get
Gets the description of an exclusion.


```js
google_logging.billingAccounts.exclusions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of an existing exclusion:
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
* output [LogExclusion](#logexclusion)

### billingAccounts.exclusions.patch
Changes one or more properties of an existing exclusion.


```js
google_logging.billingAccounts.exclusions.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [LogExclusion](#logexclusion)
  * name **required** `string`: Required. The resource name of the exclusion to update:
  * updateMask `string`: Required. A nonempty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
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
* output [LogExclusion](#logexclusion)

### billingAccounts.exclusions.list
Lists all the exclusions in a parent resource.


```js
google_logging.billingAccounts.exclusions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
  * parent **required** `string`: Required. The parent resource whose exclusions are to be listed.
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
* output [ListExclusionsResponse](#listexclusionsresponse)

### billingAccounts.exclusions.create
Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.


```js
google_logging.billingAccounts.exclusions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [LogExclusion](#logexclusion)
  * parent **required** `string`: Required. The parent resource in which to create the exclusion:
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
* output [LogExclusion](#logexclusion)

### billingAccounts.logs.list
Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.


```js
google_logging.billingAccounts.logs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
  * parent **required** `string`: Required. The resource name that owns the logs:
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
* output [ListLogsResponse](#listlogsresponse)

### projects.metrics.list
Lists logs-based metrics.


```js
google_logging.projects.metrics.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
  * parent **required** `string`: Required. The name of the project containing the metrics:
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
* output [ListLogMetricsResponse](#listlogmetricsresponse)

### projects.metrics.create
Creates a logs-based metric.


```js
google_logging.projects.metrics.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [LogMetric](#logmetric)
  * parent **required** `string`: The resource name of the project in which to create the metric:
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
* output [LogMetric](#logmetric)

### billingAccounts.sinks.list
Lists sinks.


```js
google_logging.billingAccounts.sinks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
  * parent **required** `string`: Required. The parent resource whose sinks are to be listed:
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
* output [ListSinksResponse](#listsinksresponse)

### billingAccounts.sinks.create
Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.


```js
google_logging.billingAccounts.sinks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [LogSink](#logsink)
  * parent **required** `string`: Required. The resource in which to create the sink:
  * uniqueWriterIdentity `boolean`: Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
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
* output [LogSink](#logsink)

### billingAccounts.sinks.delete
Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.


```js
google_logging.billingAccounts.sinks.delete({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
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
* output [Empty](#empty)

### billingAccounts.sinks.get
Gets a sink.


```js
google_logging.billingAccounts.sinks.get({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The resource name of the sink:
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
* output [LogSink](#logsink)

### billingAccounts.sinks.patch
Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink might also have a new writer_identity; see the unique_writer_identity field.


```js
google_logging.billingAccounts.sinks.patch({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * body [LogSink](#logsink)
  * sinkName **required** `string`: Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
  * uniqueWriterIdentity `boolean`: Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
  * updateMask `string`: Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample: updateMask=filter.
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
* output [LogSink](#logsink)

### billingAccounts.sinks.update
Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink might also have a new writer_identity; see the unique_writer_identity field.


```js
google_logging.billingAccounts.sinks.update({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * body [LogSink](#logsink)
  * sinkName **required** `string`: Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
  * uniqueWriterIdentity `boolean`: Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
  * updateMask `string`: Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample: updateMask=filter.
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
* output [LogSink](#logsink)



## Definitions

### BucketOptions
* BucketOptions `object`: BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
  * explicitBuckets [Explicit](#explicit)
  * exponentialBuckets [Exponential](#exponential)
  * linearBuckets [Linear](#linear)

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

### HttpRequest
* HttpRequest `object`: A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
  * cacheFillBytes `string`: The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
  * cacheHit `boolean`: Whether or not an entity was served from cache (with or without validation).
  * cacheLookup `boolean`: Whether or not a cache lookup was attempted.
  * cacheValidatedWithOriginServer `boolean`: Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.
  * latency `string`: The request processing latency on the server, from the time the request was received until the response was sent.
  * protocol `string`: Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
  * referer `string`: The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
  * remoteIp `string`: The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: "192.168.1.1", "FE80::0202:B3FF:FE1E:8329".
  * requestMethod `string`: The request method. Examples: "GET", "HEAD", "PUT", "POST".
  * requestSize `string`: The size of the HTTP request message in bytes, including the request headers and the request body.
  * requestUrl `string`: The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red".
  * responseSize `string`: The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
  * serverIp `string`: The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
  * status `integer`: The response code indicating the status of response. Examples: 200, 404.
  * userAgent `string`: The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".

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

### ListExclusionsResponse
* ListExclusionsResponse `object`: Result returned from ListExclusions.
  * exclusions `array`: A list of exclusions.
    * items [LogExclusion](#logexclusion)
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.

### ListLogEntriesRequest
* ListLogEntriesRequest `object`: The parameters to ListLogEntries.
  * filter `string`: Optional. A filter that chooses which log entries to return. See Advanced Logs Filters. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters.
  * orderBy `string`: Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of next_page_token in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.
  * projectIds `array`: Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A". If present, these project identifiers are converted to resource name format and added to the list of resources in resource_names.
    * items `string`
  * resourceNames `array`: Required. Names of one or more parent resources from which to retrieve log entries:
    * items `string`

### ListLogEntriesResponse
* ListLogEntriesResponse `object`: Result returned from ListLogEntries.
  * entries `array`: A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information.
    * items [LogEntry](#logentry)
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.

### ListLogMetricsResponse
* ListLogMetricsResponse `object`: Result returned from ListLogMetrics.
  * metrics `array`: A list of logs-based metrics.
    * items [LogMetric](#logmetric)
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.

### ListLogsResponse
* ListLogsResponse `object`: Result returned from ListLogs.
  * logNames `array`: A list of log names. For example, "projects/my-project/syslog" or "organizations/123/cloudresourcemanager.googleapis.com%2Factivity".
    * items `string`
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.

### ListMonitoredResourceDescriptorsResponse
* ListMonitoredResourceDescriptorsResponse `object`: Result returned from ListMonitoredResourceDescriptors.
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
  * resourceDescriptors `array`: A list of resource descriptors.
    * items [MonitoredResourceDescriptor](#monitoredresourcedescriptor)

### ListSinksResponse
* ListSinksResponse `object`: Result returned from ListSinks.
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
  * sinks `array`: A list of sinks.
    * items [LogSink](#logsink)

### LogEntry
* LogEntry `object`: An individual entry in a log.
  * httpRequest [HttpRequest](#httprequest)
  * insertId `string`: Optional. A unique identifier for the log entry. If you provide a value, then Stackdriver Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which can be removed. If omitted in new log entries, then Stackdriver Logging assigns its own unique identifier. The insert_id is also used to order log entries that have the same timestamp value.
  * jsonPayload `object`: The log entry payload, represented as a structure that is expressed as a JSON object.
  * labels `object`: Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
  * logName `string`: Required. The resource name of the log to which this log entry belongs:
  * operation [LogEntryOperation](#logentryoperation)
  * protoPayload `object`: The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.
  * receiveTimestamp `string`: Output only. The time the log entry was received by Stackdriver Logging.
  * resource [MonitoredResource](#monitoredresource)
  * severity `string` (values: DEFAULT, DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY): Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.
  * sourceLocation [LogEntrySourceLocation](#logentrysourcelocation)
  * spanId `string`: Optional. The span ID within the trace associated with the log entry. For Stackdriver Trace spans, this is the same format that the Stackdriver Trace API v2 uses: a 16-character hexadecimal encoding of an 8-byte array, such as <code>"000000000000004a"</code>.
  * textPayload `string`: The log entry payload, represented as a Unicode string (UTF-8).
  * timestamp `string`: Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Stackdriver Logging assigns it the current time.Incoming log entries should have timestamps that are no more than the logs retention period in the past, and no more than 24 hours in the future. Log entries outside those time boundaries will not be available when calling entries.list, but those log entries can still be exported with LogSinks.
  * trace `string`: Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824

### LogEntryOperation
* LogEntryOperation `object`: Additional information about a potentially long-running operation with which a log entry is associated.
  * first `boolean`: Optional. Set this to True if this is the first log entry in the operation.
  * id `string`: Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
  * last `boolean`: Optional. Set this to True if this is the last log entry in the operation.
  * producer `string`: Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication".

### LogEntrySourceLocation
* LogEntrySourceLocation `object`: Additional information about the source code location that produced the log entry.
  * file `string`: Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
  * function `string`: Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
  * line `string`: Optional. Line within the source file. 1-based; 0 indicates no line number available.

### LogExclusion
* LogExclusion `object`: Specifies a set of log entries that are not to be stored in Stackdriver Logging. If your project receives a large volume of logs, you might be able to use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Audit log entries and log entries from Amazon Web Services are never excluded.
  * description `string`: Optional. A description of this exclusion.
  * disabled `boolean`: Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can use exclusions.patch to change the value of this field.
  * filter `string`: Required. An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries. For example, the following filter matches 99% of low-severity log entries from load balancers:
  * name `string`: Required. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.

### LogLine
* LogLine `object`: Application log line emitted while processing a request.
  * logMessage `string`: App-provided log message.
  * severity `string` (values: DEFAULT, DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY): Severity of this log entry.
  * sourceLocation [SourceLocation](#sourcelocation)
  * time `string`: Approximate time when this log entry was made.

### LogMetric
* LogMetric `object`: Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metric can also be used to extract values from logs and create a a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
  * bucketOptions [BucketOptions](#bucketoptions)
  * description `string`: Optional. A description of this metric, which is used in documentation.
  * filter `string`: Required. An advanced logs filter which is used to match log entries. Example:
  * labelExtractors `object`: Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If the either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.
  * metricDescriptor [MetricDescriptor](#metricdescriptor)
  * name `string`: Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter, then the metric identifier must be URL-encoded. Example: "projects/my-project/metrics/nginx%2Frequests".
  * valueExtractor `string`: Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The argument are:  1. field: The name of the log entry field from which the value is to be  extracted.  2. regex: A regular expression using the Google RE2 syntax  (https://github.com/google/re2/wiki/Syntax) with a single capture  group to extract data from the specified log entry field. The value  of the field is converted to a string before applying the regex.  It is an error to specify a regex that does not include exactly one  capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")
  * version `string` (values: V2, V1): Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.

### LogSink
* LogSink `object`: Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a Cloud Pub/Sub topic. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
  * destination `string`: Required. The export destination:
  * endTime `string`: Deprecated. This field is ignored when creating or updating sinks.
  * filter `string`: Optional. An advanced logs filter. The only exported log entries are those that are in the resource owning the sink and that match the filter. For example:
  * includeChildren `boolean`: Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression. For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent. To only export entries from certain child projects, filter on the project part of the log name:
  * name `string`: Required. The client-assigned sink identifier, unique within the project. Example: "my-syslog-errors-to-pubsub". Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.
  * outputVersionFormat `string` (values: VERSION_FORMAT_UNSPECIFIED, V2, V1): Deprecated. The log entry format to use for this sink's exported log entries. The v2 format is used by default and cannot be changed.
  * startTime `string`: Deprecated. This field is ignored when creating or updating sinks.
  * writerIdentity `string`: Output only. An IAM identity&mdash;a service account or group&mdash;under which Stackdriver Logging writes the exported log entries to the sink's destination. This field is set by sinks.create and sinks.update, based on the setting of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting access for a resource. Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.

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

### RequestLog
* RequestLog `object`: Complete log information about a single HTTP request to an App Engine application.
  * appEngineRelease `string`: App Engine release version.
  * appId `string`: Application that handled this request.
  * cost `number`: An indication of the relative cost of serving this request.
  * endTime `string`: Time when the request finished.
  * finished `boolean`: Whether this request is finished or active.
  * first `boolean`: Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them.
  * host `string`: Internet host and port number of the resource being requested.
  * httpVersion `string`: HTTP version of request. Example: "HTTP/1.1".
  * instanceId `string`: An identifier for the instance that handled the request.
  * instanceIndex `integer`: If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
  * ip `string`: Origin IP address.
  * latency `string`: Latency of the request.
  * line `array`: A list of log lines emitted by the application while serving this request.
    * items [LogLine](#logline)
  * megaCycles `string`: Number of CPU megacycles used to process request.
  * method `string`: Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE".
  * moduleId `string`: Module of the application that handled this request.
  * nickname `string`: The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21.
  * pendingTime `string`: Time this request spent in the pending request queue.
  * referrer `string`: Referrer URL of request.
  * requestId `string`: Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
  * resource `string`: Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included.
  * responseSize `string`: Size in bytes sent back to client by request.
  * sourceReference `array`: Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
    * items [SourceReference](#sourcereference)
  * startTime `string`: Time when the request started.
  * status `integer`: HTTP response status code. Example: 200, 404.
  * taskName `string`: Task name of the request, in the case of an offline request.
  * taskQueueName `string`: Queue name of the request, in the case of an offline request.
  * traceId `string`: Stackdriver Trace identifier for this request.
  * urlMapEntry `string`: File or class that handled the request.
  * userAgent `string`: User agent that made the request.
  * versionId `string`: Version of the application that handled this request.
  * wasLoadingRequest `boolean`: Whether this was a loading request for the instance.

### SourceLocation
* SourceLocation `object`: Specifies a location in a source code file.
  * file `string`: Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
  * functionName `string`: Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
  * line `string`: Line within the source file.

### SourceReference
* SourceReference `object`: A reference to a particular snapshot of the source tree used to build and deploy an application.
  * repository `string`: Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
  * revisionId `string`: The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"

### WriteLogEntriesRequest
* WriteLogEntriesRequest `object`: The parameters to WriteLogEntries.
  * dryRun `boolean`: Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data.
  * entries `array`: Required. The log entries to send to Stackdriver Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks.To improve throughput and to avoid exceeding the quota limit for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry.
    * items [LogEntry](#logentry)
  * labels `object`: Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry.
  * logName `string`: Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name:
  * partialSuccess `boolean`: Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the entries' zero-based index in the entries.write method.
  * resource [MonitoredResource](#monitoredresource)

### WriteLogEntriesResponse
* WriteLogEntriesResponse `object`: Result returned from WriteLogEntries. empty


