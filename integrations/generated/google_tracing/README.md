# @datafire/google_tracing

Client library for Stackdriver Trace

## Installation and Usage
```bash
npm install --save datafire @datafire/google_tracing
```

```js
let datafire = require('datafire');
let google_tracing = require('@datafire/google_tracing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_tracing.projects.traces.spans.create({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_tracing.oauthRefresh(null, context)
```


### projects.traces.spans.create
Creates a new Span.


```js
google_tracing.projects.traces.spans.create({
  "name": ""
}, context)
```

#### Parameters
* body (object) - A span represents a single operation within a trace. Spans can be nested
* name (string) **required** - The resource name of Span in the format
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - The request message for the `BatchWriteSpans` method.
* name (string) **required** - Name of the project where the spans belong to. Format is
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.traces.list
Returns of a list of traces that match the specified filter conditions.


```js
google_tracing.projects.traces.list({
  "parent": ""
}, context)
```

#### Parameters
* endTime (string) - End of the time interval (inclusive) during which the trace data was
* filter (string) - An optional filter for the request.
* orderBy (string) - Field used to sort the returned traces. Optional.
* pageSize (integer) - Maximum number of traces to return. If not specified or <= 0, the
* pageToken (string) - Token identifying the page of results to return. If provided, use the
* parent (string) **required** - ID of the Cloud project where the trace data is stored which is
* startTime (string) - Start of the time interval (inclusive) during which the trace data was
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.traces.listSpans
Returns a list of spans within a trace.


```js
google_tracing.projects.traces.listSpans({
  "parent": ""
}, context)
```

#### Parameters
* pageToken (string) - Token identifying the page of results to return. If provided, use the
* parent (string) **required** - ID of the trace for which to list child spans. Format is
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

