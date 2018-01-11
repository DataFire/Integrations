# @datafire/google_cloudtrace

Client library for Stackdriver Trace

## Installation and Usage
```bash
npm install --save @datafire/google_cloudtrace
```
```js
let google_cloudtrace = require('@datafire/google_cloudtrace').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudtrace.projects.traces.list({}).then(data => {
  console.log(data);
})
```

## Description

Sends application trace data to Stackdriver Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudtrace.oauthCallback({
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
google_cloudtrace.oauthRefresh(null, context)
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

### projects.traces.list
Returns of a list of traces that match the specified filter conditions.


```js
google_cloudtrace.projects.traces.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * endTime `string`: End of the time interval (inclusive) during which the trace data was
  * filter `string`: An optional filter against labels for the request.
  * orderBy `string`: Field used to sort the returned traces. Optional.
  * pageSize `integer`: Maximum number of traces to return. If not specified or <= 0, the
  * pageToken `string`: Token identifying the page of results to return. If provided, use the
  * projectId **required** `string`: ID of the Cloud project where the trace data is stored.
  * startTime `string`: Start of the time interval (inclusive) during which the trace data was
  * view `string` (values: VIEW_TYPE_UNSPECIFIED, MINIMAL, ROOTSPAN, COMPLETE): Type of data returned for traces in the list. Optional. Default is
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListTracesResponse](#listtracesresponse)

### projects.patchTraces
Sends new traces to Stackdriver Trace or updates existing traces. If the ID
of a trace that you send matches that of an existing trace, any fields
in the existing trace and its spans are overwritten by the provided values,
and any new fields provided are merged with the existing trace data. If the
ID does not match, a new trace is created.


```js
google_cloudtrace.projects.patchTraces({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: ID of the Cloud project where the trace data is stored.
  * body [Traces](#traces)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Empty](#empty)

### projects.traces.get
Gets a single trace by its ID.


```js
google_cloudtrace.projects.traces.get({
  "projectId": "",
  "traceId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: ID of the Cloud project where the trace data is stored.
  * traceId **required** `string`: ID of the trace to return.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Trace](#trace)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListTracesResponse
* ListTracesResponse `object`: The response message for the `ListTraces` method.
  * nextPageToken `string`: If defined, indicates that there are more traces that match the request
  * traces `array`: List of trace records returned.
    * items [Trace](#trace)

### Trace
* Trace `object`: A trace describes how long it takes for an application to perform an
  * projectId `string`: Project ID of the Cloud project where the trace data is stored.
  * spans `array`: Collection of spans in the trace.
    * items [TraceSpan](#tracespan)
  * traceId `string`: Globally unique identifier for the trace. This identifier is a 128-bit

### TraceSpan
* TraceSpan `object`: A span represents a single timed event within a trace. Spans can be nested
  * endTime `string`: End time of the span in nanoseconds from the UNIX epoch.
  * kind `string` (values: SPAN_KIND_UNSPECIFIED, RPC_SERVER, RPC_CLIENT): Distinguishes between spans generated in a particular context. For example,
  * labels `object`: Collection of labels associated with the span. Label keys must be less than
  * name `string`: Name of the span. Must be less than 128 bytes. The span name is sanitized
  * parentSpanId `string`: ID of the parent span, if any. Optional.
  * spanId `string`: Identifier for the span. Must be a 64-bit integer other than 0 and
  * startTime `string`: Start time of the span in nanoseconds from the UNIX epoch.

### Traces
* Traces `object`: List of new or updated traces.
  * traces `array`: List of traces.
    * items [Trace](#trace)


