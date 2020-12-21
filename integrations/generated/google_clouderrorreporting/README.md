# @datafire/google_clouderrorreporting

Client library for Error Reporting API

## Installation and Usage
```bash
npm install --save @datafire/google_clouderrorreporting
```
```js
let google_clouderrorreporting = require('@datafire/google_clouderrorreporting').create({
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

Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_clouderrorreporting.oauthCallback({
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
google_clouderrorreporting.oauthRefresh(null, context)
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

### clouderrorreporting.projects.groups.get
Get the specified group.


```js
google_clouderrorreporting.clouderrorreporting.projects.groups.get({
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: Required. The group resource name. Written as `projects/{projectID}/groups/{group_name}`. Call [`groupStats.list`](https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.groupStats/list) to return a list of groups belonging to this project. Example: `projects/my-project-123/groups/my-group`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ErrorGroup](#errorgroup)

### clouderrorreporting.projects.groups.update
Replace the data for the specified group. Fails if the group does not exist.


```js
google_clouderrorreporting.clouderrorreporting.projects.groups.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw
  * body [ErrorGroup](#errorgroup)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ErrorGroup](#errorgroup)

### clouderrorreporting.projects.deleteEvents
Deletes all error events of a given project.


```js
google_clouderrorreporting.clouderrorreporting.projects.deleteEvents({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeleteEventsResponse](#deleteeventsresponse)

### clouderrorreporting.projects.events.list
Lists the specified events.


```js
google_clouderrorreporting.clouderrorreporting.projects.events.list({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
  * groupId `string`: Required. The group for which events shall be returned.
  * pageSize `integer`: Optional. The maximum number of results to return per response.
  * pageToken `string`: Optional. A `next_page_token` provided by a previous response.
  * serviceFilter.resourceType `string`: Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
  * serviceFilter.service `string`: Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
  * serviceFilter.version `string`: Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
  * timeRange.period `string` (values: PERIOD_UNSPECIFIED, PERIOD_1_HOUR, PERIOD_6_HOURS, PERIOD_1_DAY, PERIOD_1_WEEK, PERIOD_30_DAYS): Restricts the query to the specified time range.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListEventsResponse](#listeventsresponse)

### clouderrorreporting.projects.events.report
Report an individual error event. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456`


```js
google_clouderrorreporting.clouderrorreporting.projects.events.report({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`.
  * body [ReportedErrorEvent](#reportederrorevent)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ReportErrorEventResponse](#reporterroreventresponse)

### clouderrorreporting.projects.groupStats.list
Lists the specified groups.


```js
google_clouderrorreporting.clouderrorreporting.projects.groupStats.list({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
  * alignment `string` (values: ERROR_COUNT_ALIGNMENT_UNSPECIFIED, ALIGNMENT_EQUAL_ROUNDED, ALIGNMENT_EQUAL_AT_END): Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
  * alignmentTime `string`: Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
  * groupId `array`: Optional. List all ErrorGroupStats with these IDs.
  * order `string` (values: GROUP_ORDER_UNSPECIFIED, COUNT_DESC, LAST_SEEN_DESC, CREATED_DESC, AFFECTED_USERS_DESC): Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.
  * pageSize `integer`: Optional. The maximum number of results to return per response. Default is 20.
  * pageToken `string`: Optional. A `next_page_token` provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
  * serviceFilter.resourceType `string`: Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
  * serviceFilter.service `string`: Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
  * serviceFilter.version `string`: Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
  * timeRange.period `string` (values: PERIOD_UNSPECIFIED, PERIOD_1_HOUR, PERIOD_6_HOURS, PERIOD_1_DAY, PERIOD_1_WEEK, PERIOD_30_DAYS): Restricts the query to the specified time range.
  * timedCountDuration `string`: Optional. The preferred duration for a single returned `TimedCount`. If not set, no timed counts are returned.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListGroupStatsResponse](#listgroupstatsresponse)



## Definitions

### DeleteEventsResponse
* DeleteEventsResponse `object`: Response message for deleting error events.

### ErrorContext
* ErrorContext `object`: A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
  * httpRequest [HttpRequestContext](#httprequestcontext)
  * reportLocation [SourceLocation](#sourcelocation)
  * sourceReferences `array`: Source code that was used to build the executable which has caused the given error message.
    * items [SourceReference](#sourcereference)
  * user `string`: The user who caused or was affected by the crash. This can be a user ID, an email address, or an arbitrary token that uniquely identifies the user. When sending an error report, leave this field empty if the user was not logged in. In this case the Error Reporting system will use other data, such as remote IP address, to distinguish affected users. See `affected_users_count` in `ErrorGroupStats`.

### ErrorEvent
* ErrorEvent `object`: An error event which is returned by the Error Reporting system.
  * context [ErrorContext](#errorcontext)
  * eventTime `string`: Time when the event occurred as provided in the error report. If the report did not contain a timestamp, the time the error was received by the Error Reporting system is used.
  * message `string`: The stack trace that was reported or logged by the service.
  * serviceContext [ServiceContext](#servicecontext)

### ErrorGroup
* ErrorGroup `object`: Description of a group of similar error events.
  * groupId `string`: Group IDs are unique for a given project. If the same kind of error occurs in different service contexts, it will receive the same group ID.
  * name `string`: The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw
  * resolutionStatus `string` (values: RESOLUTION_STATUS_UNSPECIFIED, OPEN, ACKNOWLEDGED, RESOLVED, MUTED): Error group's resolution status. An unspecified resolution status will be interpreted as OPEN
  * trackingIssues `array`: Associated tracking issues.
    * items [TrackingIssue](#trackingissue)

### ErrorGroupStats
* ErrorGroupStats `object`: Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
  * affectedServices `array`: Service contexts with a non-zero error count for the given filter criteria. This list can be truncated if multiple services are affected. Refer to `num_affected_services` for the total count.
    * items [ServiceContext](#servicecontext)
  * affectedUsersCount `string`: Approximate number of affected users in the given group that match the filter criteria. Users are distinguished by data in the `ErrorContext` of the individual error events, such as their login name or their remote IP address in case of HTTP requests. The number of affected users can be zero even if the number of errors is non-zero if no data was provided from which the affected user could be deduced. Users are counted based on data in the request context that was provided in the error report. If more users are implicitly affected, such as due to a crash of the whole service, this is not reflected here.
  * count `string`: Approximate total number of events in the given group that match the filter criteria.
  * firstSeenTime `string`: Approximate first occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.
  * group [ErrorGroup](#errorgroup)
  * lastSeenTime `string`: Approximate last occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.
  * numAffectedServices `integer`: The total number of services with a non-zero error count for the given filter criteria.
  * representative [ErrorEvent](#errorevent)
  * timedCounts `array`: Approximate number of occurrences over time. Timed counts returned by ListGroups are guaranteed to be: - Inside the requested time interval - Non-overlapping, and - Ordered by ascending time.
    * items [TimedCount](#timedcount)

### HttpRequestContext
* HttpRequestContext `object`: HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
  * method `string`: The type of HTTP request, such as `GET`, `POST`, etc.
  * referrer `string`: The referrer information that is provided with the request.
  * remoteIp `string`: The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report.
  * responseStatusCode `integer`: The HTTP response status code for the request.
  * url `string`: The URL of the request.
  * userAgent `string`: The user agent information that is provided with the request.

### ListEventsResponse
* ListEventsResponse `object`: Contains a set of requested error events.
  * errorEvents `array`: The error events which match the given request.
    * items [ErrorEvent](#errorevent)
  * nextPageToken `string`: If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.
  * timeRangeBegin `string`: The timestamp specifies the start time to which the request was restricted.

### ListGroupStatsResponse
* ListGroupStatsResponse `object`: Contains a set of requested error group stats.
  * errorGroupStats `array`: The error group stats which match the given request.
    * items [ErrorGroupStats](#errorgroupstats)
  * nextPageToken `string`: If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.
  * timeRangeBegin `string`: The timestamp specifies the start time to which the request was restricted. The start time is set based on the requested time range. It may be adjusted to a later time if a project has exceeded the storage quota and older data has been deleted.

### ReportErrorEventResponse
* ReportErrorEventResponse `object`: Response for reporting an individual error event. Data may be added to this message in the future.

### ReportedErrorEvent
* ReportedErrorEvent `object`: An error event which is reported to the Error Reporting system.
  * context [ErrorContext](#errorcontext)
  * eventTime `string`: Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system will be used.
  * message `string`: Required. The error message. If no `context.reportLocation` is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are: * **Java**: Must be the return value of [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). * **Python**: Must be the return value of [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc). * **JavaScript**: Must be the value of [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned by V8. * **Ruby**: Must contain frames returned by [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). * **C#**: Must be the return value of [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). * **PHP**: Must start with `PHP (Notice|Parse error|Fatal error|Warning)` and contain the result of [`(string)$exception`](http://php.net/manual/en/exception.tostring.php). * **Go**: Must be the return value of [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).
  * serviceContext [ServiceContext](#servicecontext)

### ServiceContext
* ServiceContext `object`: Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.
  * resourceType `string`: Type of the MonitoredResource. List of possible values: https://cloud.google.com/monitoring/api/resources Value is set automatically for incoming errors and must not be set when reporting errors.
  * service `string`: An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. Contains the service name for error reports extracted from Google App Engine logs or `default` if the App Engine default service is used.
  * version `string`: Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app.

### SourceLocation
* SourceLocation `object`: Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.
  * filePath `string`: The source code filename, which can include a truncated relative path, or a full path from a production machine.
  * functionName `string`: Human-readable name of a function or method. The value can include optional context like the class or package name. For example, `my.package.MyClass.method` in case of Java.
  * lineNumber `integer`: 1-based. 0 indicates that the line number is unknown.

### SourceReference
* SourceReference `object`: A reference to a particular snapshot of the source tree used to build and deploy an application.
  * repository `string`: Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
  * revisionId `string`: The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"

### TimedCount
* TimedCount `object`: The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.
  * count `string`: Approximate number of occurrences in the given time period.
  * endTime `string`: End of the time period to which `count` refers (excluded).
  * startTime `string`: Start of the time period to which `count` refers (included).

### TrackingIssue
* TrackingIssue `object`: Information related to tracking the progress on resolving the error.
  * url `string`: A URL pointing to a related entry in an issue tracking system. Example: `https://github.com/user/project/issues/4`


