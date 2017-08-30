# @datafire/google_clouderrorreporting

Client library for Stackdriver Error Reporting

## Installation and Usage
```bash
npm install --save datafire @datafire/google_clouderrorreporting
```

```js
let datafire = require('datafire');
let google_clouderrorreporting = require('@datafire/google_clouderrorreporting').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_clouderrorreporting.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.groups.get
Get the specified group.


```js
google_clouderrorreporting.projects.groups.get({
  "groupName": ""
}, context)
```

#### Parameters
* groupName (string) **required** - [Required] The group resource name. Written as
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.groups.update
Replace the data for the specified group.
Fails if the group does not exist.


```js
google_clouderrorreporting.projects.groups.update({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The group resource name.
* body (object) - Description of a group of similar error events.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.deleteEvents
Deletes all error events of a given project.


```js
google_clouderrorreporting.projects.deleteEvents({
  "projectName": ""
}, context)
```

#### Parameters
* projectName (string) **required** - [Required] The resource name of the Google Cloud Platform project. Written
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.events.list
Lists the specified events.


```js
google_clouderrorreporting.projects.events.list({
  "projectName": ""
}, context)
```

#### Parameters
* projectName (string) **required** - [Required] The resource name of the Google Cloud Platform project. Written
* groupId (string) - [Required] The group for which events shall be returned.
* pageToken (string) - [Optional] A `next_page_token` provided by a previous response.
* serviceFilter.service (string) - [Optional] The exact value to match against
* pageSize (integer) - [Optional] The maximum number of results to return per response.
* serviceFilter.version (string) - [Optional] The exact value to match against
* serviceFilter.resourceType (string) - [Optional] The exact value to match against
* timeRange.period (string) - Restricts the query to the specified time range.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* projectName (string) **required** - [Required] The resource name of the Google Cloud Platform project. Written
* body (object) - An error event which is reported to the Error Reporting system.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.groupStats.list
Lists the specified groups.


```js
google_clouderrorreporting.projects.groupStats.list({
  "projectName": ""
}, context)
```

#### Parameters
* projectName (string) **required** - [Required] The resource name of the Google Cloud Platform project. Written
* serviceFilter.service (string) - [Optional] The exact value to match against
* pageSize (integer) - [Optional] The maximum number of results to return per response.
* serviceFilter.version (string) - [Optional] The exact value to match against
* order (string) - [Optional] The sort order in which the results are returned.
* serviceFilter.resourceType (string) - [Optional] The exact value to match against
* alignmentTime (string) - [Optional] Time where the timed counts shall be aligned if rounded
* timedCountDuration (string) - [Optional] The preferred duration for a single returned `TimedCount`.
* pageToken (string) - [Optional] A `next_page_token` provided by a previous response. To view
* timeRange.period (string) - Restricts the query to the specified time range.
* alignment (string) - [Optional] The alignment of the timed counts to be returned.
* groupId (array) - [Optional] List all <code>ErrorGroupStats</code> with these IDs.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

