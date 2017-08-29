# @datafire/google_cloudtrace

Client library for Stackdriver Trace

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudtrace
```

```js
let datafire = require('datafire');
let google_cloudtrace = require('@datafire/google_cloudtrace').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_cloudtrace.projects.traces.list({}).then(data => {
  console.log(data);
})
```

## Description
Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudtrace.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudtrace.oauthRefresh(null, context)
```


### projects.traces.list
Returns of a list of traces that match the specified filter conditions.


```js
google_cloudtrace.projects.traces.list({
  "projectId": ""
}, context)
```

#### Parameters
* endTime (string) - End of the time interval (inclusive) during which the trace data was
* filter (string) - An optional filter against labels for the request.
* orderBy (string) - Field used to sort the returned traces. Optional.
* pageSize (integer) - Maximum number of traces to return. If not specified or <= 0, the
* pageToken (string) - Token identifying the page of results to return. If provided, use the
* projectId (string) **required** - ID of the Cloud project where the trace data is stored.
* startTime (string) - Start of the time interval (inclusive) during which the trace data was
* view (string) - Type of data returned for traces in the list. Optional. Default is
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

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

#### Parameters
* projectId (string) **required** - ID of the Cloud project where the trace data is stored.
* body (object) - List of new or updated traces.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

### projects.traces.get
Gets a single trace by its ID.


```js
google_cloudtrace.projects.traces.get({
  "projectId": "",
  "traceId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the Cloud project where the trace data is stored.
* traceId (string) **required** - ID of the trace to return.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

