# @datafire/google_tracing

Client library for Stackdriver Trace

## Installation and Usage
```bash
npm install --save @datafire/google_tracing
```
```js
let google_tracing = require('@datafire/google_tracing').create({
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

Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_tracing.oauthCallback({
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
google_tracing.oauthRefresh(null, context)
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

### projects.traces.spans.create
Creates a new Span.


```js
google_tracing.projects.traces.spans.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Span](#span)
  * name **required** `string`: The resource name of the span in the following format:
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
* output [Span](#span)

### projects.traces.batchWrite
Sends new spans to Stackdriver Trace or updates existing traces. If the
name of a trace that you send matches that of an existing trace, new spans
are added to the existing trace. Attempt to update existing spans results
undefined behavior. If the name does not match, a new trace is created
with given set of spans.


```js
google_tracing.projects.traces.batchWrite({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [BatchWriteSpansRequest](#batchwritespansrequest)
  * name **required** `string`: Required. Name of the project where the spans belong. The format is
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

### projects.traces.list
Returns of a list of traces that match the specified filter conditions.


```js
google_tracing.projects.traces.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * endTime `string`: Optional. Do not return traces whose start time is later than this time.
  * filter `string`: Opional. Return only traces that match this
  * orderBy `string`: Optional. A single field used to sort the returned traces.
  * pageSize `integer`: Optional. The maximum number of results to return from this request.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the
  * parent **required** `string`: Required. The project where the trace data is stored. The format
  * startTime `string`: Optional. Do not return traces whose end time is earlier than this time.
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
* output [ListTracesResponse](#listtracesresponse)

### projects.traces.listSpans
Returns a list of spans within a trace.


```js
google_tracing.projects.traces.listSpans({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the
  * parent **required** `string`: Required: The resource name of the trace containing the spans to list.
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
* output [ListSpansResponse](#listspansresponse)



## Definitions

### Annotation
* Annotation `object`: Text annotation with a set of attributes.
  * attributes [Attributes](#attributes)
  * description [TruncatableString](#truncatablestring)

### AttributeValue
* AttributeValue `object`: The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
  * boolValue `boolean`: A Boolean value represented by `true` or `false`.
  * intValue `string`: A 64-bit signed integer.
  * stringValue [TruncatableString](#truncatablestring)

### Attributes
* Attributes `object`: A set of attributes, each in the format `[KEY]:[VALUE]`.
  * attributeMap `object`: The set of attributes. Each attribute's key can be up to 128 bytes
  * droppedAttributesCount `integer`: The number of attributes that were discarded. Attributes can be discarded

### BatchWriteSpansRequest
* BatchWriteSpansRequest `object`: The request message for the `BatchWriteSpans` method.
  * spans `array`: A collection of spans.
    * items [Span](#span)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Link
* Link `object`: A pointer from the current span to another span in the same trace or in a
  * attributes [Attributes](#attributes)
  * spanId `string`: `SPAN_ID` identifies a span within a trace.
  * traceId `string`: `TRACE_ID` identifies a trace within a project.
  * type `string` (values: TYPE_UNSPECIFIED, CHILD_LINKED_SPAN, PARENT_LINKED_SPAN): The relationship of the current span relative to the linked span.

### Links
* Links `object`: A collection of links, which are references from this span to a span
  * droppedLinksCount `integer`: The number of dropped links after the maximum size was enforced. If
  * link `array`: A collection of links.
    * items [Link](#link)

### ListSpansResponse
* ListSpansResponse `object`: The response message for the `ListSpans` method.
  * nextPageToken `string`: If defined, indicates that there might be more spans that match the
  * spans `array`: The requested spans, if there are any in the specified trace.
    * items [Span](#span)

### ListTracesResponse
* ListTracesResponse `object`: The response message for the `ListTraces` method.
  * nextPageToken `string`: If there might be more results than those appearing in this response, then
  * traces `array`: List of trace records returned.
    * items [Trace](#trace)

### Module
* Module `object`: Binary module.
  * buildId [TruncatableString](#truncatablestring)
  * module [TruncatableString](#truncatablestring)

### NetworkEvent
* NetworkEvent `object`: An event describing an RPC message sent or received on the network.
  * messageId `string`: An identifier for the message, which must be unique in this span.
  * messageSize `string`: The number of bytes sent or received.
  * time `string`: For sent messages, this is the time at which the first bit was sent.
  * type `string` (values: TYPE_UNSPECIFIED, SENT, RECV): Type of NetworkEvent. Indicates whether the RPC message was sent or

### Span
* Span `object`: A span represents a single operation within a trace. Spans can be
  * attributes [Attributes](#attributes)
  * childSpanCount `integer`: An optional number of child spans that were generated while this span
  * displayName [TruncatableString](#truncatablestring)
  * endTime `string`: The end time of the span. On the client side, this is the time kept by
  * links [Links](#links)
  * name `string`: The resource name of the span in the following format:
  * parentSpanId `string`: The [SPAN_ID] of this span's parent span. If this is a root span,
  * sameProcessAsParentSpan `boolean`: A highly recommended but not required flag that identifies when a trace
  * spanId `string`: The [SPAN_ID] portion of the span's resource name.
  * stackTrace [StackTrace](#stacktrace)
  * startTime `string`: The start time of the span. On the client side, this is the time kept by
  * status [Status](#status)
  * timeEvents [TimeEvents](#timeevents)

### StackFrame
* StackFrame `object`: Represents a single stack frame in a stack trace.
  * columnNumber `string`: The column number where the function call appears, if available.
  * fileName [TruncatableString](#truncatablestring)
  * functionName [TruncatableString](#truncatablestring)
  * lineNumber `string`: The line number in `file_name` where the function call appears.
  * loadModule [Module](#module)
  * originalFunctionName [TruncatableString](#truncatablestring)
  * sourceVersion [TruncatableString](#truncatablestring)

### StackFrames
* StackFrames `object`: A collection of stack frames, which can be truncated.
  * droppedFramesCount `integer`: The number of stack frames that were dropped because there
  * frame `array`: Stack frames in this call stack.
    * items [StackFrame](#stackframe)

### StackTrace
* StackTrace `object`: A call stack appearing in a trace.
  * stackFrames [StackFrames](#stackframes)
  * stackTraceHashId `string`: The hash ID is used to conserve network bandwidth for duplicate

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There will be a
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TimeEvent
* TimeEvent `object`: A time-stamped annotation or network event in the Span.
  * annotation [Annotation](#annotation)
  * networkEvent [NetworkEvent](#networkevent)
  * time `string`: The timestamp indicating the time the event occurred.

### TimeEvents
* TimeEvents `object`: A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
  * droppedAnnotationsCount `integer`: The number of dropped annotations in all the included time events.
  * droppedNetworkEventsCount `integer`: The number of dropped network events in all the included time events.
  * timeEvent `array`: A collection of `TimeEvent`s.
    * items [TimeEvent](#timeevent)

### Trace
* Trace `object`: A trace describes how long it takes for an application to perform some
  * name `string`: The resource name of the trace in the following format:

### TruncatableString
* TruncatableString `object`: Represents a string that might be shortened to a specified length.
  * truncatedByteCount `integer`: The number of bytes removed from the original string. If this
  * value `string`: The shortened string. For example, if the original string was 500


