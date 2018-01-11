# @datafire/google_clouderrorreporting

Client library for Stackdriver Error Reporting

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

google_clouderrorreporting.projects.groups.get({}).then(data => {
  console.log(data);
})
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

### projects.groups.get
Get the specified group.


```js
google_clouderrorreporting.projects.groups.get({
  "groupName": ""
}, context)
```

#### Input
* input `object`
  * groupName **required** `string`: [Required] The group resource name. Written as
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ErrorGroup](#errorgroup)

### projects.groups.update
Replace the data for the specified group.
Fails if the group does not exist.


```js
google_clouderrorreporting.projects.groups.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The group resource name.
  * body [ErrorGroup](#errorgroup)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ErrorGroup](#errorgroup)

### projects.deleteEvents
Deletes all error events of a given project.


```js
google_clouderrorreporting.projects.deleteEvents({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: [Required] The resource name of the Google Cloud Platform project. Written
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [DeleteEventsResponse](#deleteeventsresponse)

### projects.events.list
Lists the specified events.


```js
google_clouderrorreporting.projects.events.list({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: [Required] The resource name of the Google Cloud Platform project. Written
  * groupId `string`: [Required] The group for which events shall be returned.
  * pageToken `string`: [Optional] A `next_page_token` provided by a previous response.
  * serviceFilter.service `string`: [Optional] The exact value to match against
  * pageSize `integer`: [Optional] The maximum number of results to return per response.
  * serviceFilter.version `string`: [Optional] The exact value to match against
  * serviceFilter.resourceType `string`: [Optional] The exact value to match against
  * timeRange.period `string` (values: PERIOD_UNSPECIFIED, PERIOD_1_HOUR, PERIOD_6_HOURS, PERIOD_1_DAY, PERIOD_1_WEEK, PERIOD_30_DAYS): Restricts the query to the specified time range.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListEventsResponse](#listeventsresponse)

### projects.events.report
Report an individual error event.

This endpoint accepts <strong>either</strong> an OAuth token,
<strong>or</strong> an
<a href="https://support.google.com/cloud/answer/6158862">API key</a>
for authentication. To use an API key, append it to the URL as the value of
a `key` parameter. For example:
<pre>POST https://clouderrorreporting.googleapis.com/v1beta1/projects/example-project/events:report?key=123ABC456</pre>


```js
google_clouderrorreporting.projects.events.report({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: [Required] The resource name of the Google Cloud Platform project. Written
  * body [ReportedErrorEvent](#reportederrorevent)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ReportErrorEventResponse](#reporterroreventresponse)

### projects.groupStats.list
Lists the specified groups.


```js
google_clouderrorreporting.projects.groupStats.list({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** `string`: [Required] The resource name of the Google Cloud Platform project. Written
  * serviceFilter.service `string`: [Optional] The exact value to match against
  * pageSize `integer`: [Optional] The maximum number of results to return per response.
  * serviceFilter.version `string`: [Optional] The exact value to match against
  * order `string` (values: GROUP_ORDER_UNSPECIFIED, COUNT_DESC, LAST_SEEN_DESC, CREATED_DESC, AFFECTED_USERS_DESC): [Optional] The sort order in which the results are returned.
  * serviceFilter.resourceType `string`: [Optional] The exact value to match against
  * alignmentTime `string`: [Optional] Time where the timed counts shall be aligned if rounded
  * timedCountDuration `string`: [Optional] The preferred duration for a single returned `TimedCount`.
  * pageToken `string`: [Optional] A `next_page_token` provided by a previous response. To view
  * timeRange.period `string` (values: PERIOD_UNSPECIFIED, PERIOD_1_HOUR, PERIOD_6_HOURS, PERIOD_1_DAY, PERIOD_1_WEEK, PERIOD_30_DAYS): Restricts the query to the specified time range.
  * alignment `string` (values: ERROR_COUNT_ALIGNMENT_UNSPECIFIED, ALIGNMENT_EQUAL_ROUNDED, ALIGNMENT_EQUAL_AT_END): [Optional] The alignment of the timed counts to be returned.
  * groupId `array`: [Optional] List all <code>ErrorGroupStats</code> with these IDs.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListGroupStatsResponse](#listgroupstatsresponse)



## Definitions

### DeleteEventsResponse
* DeleteEventsResponse `object`: Response message for deleting error events.

### ErrorContext
* ErrorContext `object`: A description of the context in which an error occurred.
  * httpRequest [HttpRequestContext](#httprequestcontext)
  * reportLocation [SourceLocation](#sourcelocation)
  * sourceReferences `array`: Source code that was used to build the executable which has
    * items [SourceReference](#sourcereference)
  * user `string`: The user who caused or was affected by the crash.

### ErrorEvent
* ErrorEvent `object`: An error event which is returned by the Error Reporting system.
  * context [ErrorContext](#errorcontext)
  * eventTime `string`: Time when the event occurred as provided in the error report.
  * message `string`: The stack trace that was reported or logged by the service.
  * serviceContext [ServiceContext](#servicecontext)

### ErrorGroup
* ErrorGroup `object`: Description of a group of similar error events.
  * groupId `string`: Group IDs are unique for a given project. If the same kind of error
  * name `string`: The group resource name.
  * trackingIssues `array`: Associated tracking issues.
    * items [TrackingIssue](#trackingissue)

### ErrorGroupStats
* ErrorGroupStats `object`: Data extracted for a specific group based on certain filter criteria,
  * affectedServices `array`: Service contexts with a non-zero error count for the given filter
    * items [ServiceContext](#servicecontext)
  * affectedUsersCount `string`: Approximate number of affected users in the given group that
  * count `string`: Approximate total number of events in the given group that match
  * firstSeenTime `string`: Approximate first occurrence that was ever seen for this group
  * group [ErrorGroup](#errorgroup)
  * lastSeenTime `string`: Approximate last occurrence that was ever seen for this group and
  * numAffectedServices `integer`: The total number of services with a non-zero error count for the given
  * representative [ErrorEvent](#errorevent)
  * timedCounts `array`: Approximate number of occurrences over time.
    * items [TimedCount](#timedcount)

### HttpRequestContext
* HttpRequestContext `object`: HTTP request data that is related to a reported error.
  * method `string`: The type of HTTP request, such as `GET`, `POST`, etc.
  * referrer `string`: The referrer information that is provided with the request.
  * remoteIp `string`: The IP address from which the request originated.
  * responseStatusCode `integer`: The HTTP response status code for the request.
  * url `string`: The URL of the request.
  * userAgent `string`: The user agent information that is provided with the request.

### ListEventsResponse
* ListEventsResponse `object`: Contains a set of requested error events.
  * errorEvents `array`: The error events which match the given request.
    * items [ErrorEvent](#errorevent)
  * nextPageToken `string`: If non-empty, more results are available.
  * timeRangeBegin `string`: The timestamp specifies the start time to which the request was restricted.

### ListGroupStatsResponse
* ListGroupStatsResponse `object`: Contains a set of requested error group stats.
  * errorGroupStats `array`: The error group stats which match the given request.
    * items [ErrorGroupStats](#errorgroupstats)
  * nextPageToken `string`: If non-empty, more results are available.
  * timeRangeBegin `string`: The timestamp specifies the start time to which the request was restricted.

### ReportErrorEventResponse
* ReportErrorEventResponse `object`: Response for reporting an individual error event.

### ReportedErrorEvent
* ReportedErrorEvent `object`: An error event which is reported to the Error Reporting system.
  * context [ErrorContext](#errorcontext)
  * eventTime `string`: [Optional] Time when the event occurred.
  * message `string`: [Required] The error message.
  * serviceContext [ServiceContext](#servicecontext)

### ServiceContext
* ServiceContext `object`: Describes a running service that sends errors.
  * resourceType `string`: Type of the MonitoredResource. List of possible values:
  * service `string`: An identifier of the service, such as the name of the
  * version `string`: Represents the source code version that the developer provided,

### SourceLocation
* SourceLocation `object`: Indicates a location in the source code of the service for which errors are
  * filePath `string`: The source code filename, which can include a truncated relative
  * functionName `string`: Human-readable name of a function or method.
  * lineNumber `integer`: 1-based. 0 indicates that the line number is unknown.

### SourceReference
* SourceReference `object`: A reference to a particular snapshot of the source tree used to build and
  * repository `string`: Optional. A URI string identifying the repository.
  * revisionId `string`: The canonical and persistent identifier of the deployed revision.

### TimedCount
* TimedCount `object`: The number of errors in a given time period.
  * count `string`: Approximate number of occurrences in the given time period.
  * endTime `string`: End of the time period to which `count` refers (excluded).
  * startTime `string`: Start of the time period to which `count` refers (included).

### TrackingIssue
* TrackingIssue `object`: Information related to tracking the progress on resolving the error.
  * url `string`: A URL pointing to a related entry in an issue tracking system.


