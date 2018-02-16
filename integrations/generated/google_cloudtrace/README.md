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

google_cloudtrace.projects.traces.spans.createSpan({
  "name": ""
}).then(data => {
  console.log(data);
});
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

### projects.traces.spans.createSpan
Creates a new span.


```js
google_cloudtrace.projects.traces.spans.createSpan({
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
Sends new spans to new or existing traces. You cannot update
existing spans.


```js
google_cloudtrace.projects.traces.batchWrite({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [BatchWriteSpansRequest](#batchwritespansrequest)
  * name **required** `string`: Required. The name of the project where the spans belong. The format is
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
  * spans `array`: A list of new spans. The span names must not match existing
    * items [Span](#span)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Link
* Link `object`: A pointer from the current span to another span in the same trace or in a
  * attributes [Attributes](#attributes)
  * spanId `string`: The [SPAN_ID] for a span within a trace.
  * traceId `string`: The [TRACE_ID] for a trace within a project.
  * type `string` (values: TYPE_UNSPECIFIED, CHILD_LINKED_SPAN, PARENT_LINKED_SPAN): The relationship of the current span relative to the linked span.

### Links
* Links `object`: A collection of links, which are references from this span to a span
  * droppedLinksCount `integer`: The number of dropped links after the maximum size was enforced. If
  * link `array`: A collection of links.
    * items [Link](#link)

### MessageEvent
* MessageEvent `object`: An event describing a message sent/received between Spans.
  * compressedSizeBytes `string`: The number of compressed bytes sent or received. If missing assumed to
  * id `string`: An identifier for the MessageEvent's message that can be used to match
  * type `string` (values: TYPE_UNSPECIFIED, SENT, RECEIVED): Type of MessageEvent. Indicates whether the message was sent or
  * uncompressedSizeBytes `string`: The number of uncompressed bytes sent or received.

### Module
* Module `object`: Binary module.
  * buildId [TruncatableString](#truncatablestring)
  * module [TruncatableString](#truncatablestring)

### Span
* Span `object`: A span represents a single operation within a trace. Spans can be
  * attributes [Attributes](#attributes)
  * childSpanCount `integer`: An optional number of child spans that were generated while this span
  * displayName [TruncatableString](#truncatablestring)
  * endTime `string`: The end time of the span. On the client side, this is the time kept by
  * links [Links](#links)
  * name `string`: The resource name of the span in the following format:
  * parentSpanId `string`: The [SPAN_ID] of this span's parent span. If this is a root span,
  * sameProcessAsParentSpan `boolean`: (Optional) Set this parameter to indicate whether this span is in
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
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TimeEvent
* TimeEvent `object`: A time-stamped annotation or message event in the Span.
  * annotation [Annotation](#annotation)
  * messageEvent [MessageEvent](#messageevent)
  * time `string`: The timestamp indicating the time the event occurred.

### TimeEvents
* TimeEvents `object`: A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
  * droppedAnnotationsCount `integer`: The number of dropped annotations in all the included time events.
  * droppedMessageEventsCount `integer`: The number of dropped message events in all the included time events.
  * timeEvent `array`: A collection of `TimeEvent`s.
    * items [TimeEvent](#timeevent)

### TruncatableString
* TruncatableString `object`: Represents a string that might be shortened to a specified length.
  * truncatedByteCount `integer`: The number of bytes removed from the original string. If this
  * value `string`: The shortened string. For example, if the original string is 500


