# @datafire/google_youtubereporting

Client library for YouTube Reporting

## Installation and Usage
```bash
npm install --save datafire @datafire/google_youtubereporting
```

```js
let datafire = require('datafire');
let google_youtubereporting = require('@datafire/google_youtubereporting').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_youtubereporting.reportTypes.list({}).then(data => {
  console.log(data);
})
```

## Description
Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_youtubereporting.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_youtubereporting.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### jobs.list
Lists jobs.


```js
google_youtubereporting.jobs.list({}, context)
```

#### Parameters
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* pageToken (string) - A token identifying a page of results the server should return. Typically,
* includeSystemManaged (boolean) - If set to true, also system-managed jobs will be returned; otherwise only
* pageSize (integer) - Requested page size. Server may return fewer jobs than requested.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### jobs.create
Creates a job and returns it.


```js
google_youtubereporting.jobs.create({}, context)
```

#### Parameters
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* body (object) - A job creating reports of a specific type.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### jobs.delete
Deletes a job.


```js
google_youtubereporting.jobs.delete({
  "jobId": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to delete.
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### jobs.get
Gets a job.


```js
google_youtubereporting.jobs.get({
  "jobId": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to retrieve.
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### jobs.reports.list
Lists reports created by a specific job.
Returns NOT_FOUND if the job does not exist.


```js
google_youtubereporting.jobs.reports.list({
  "jobId": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* startTimeBefore (string) - If set, only reports whose start time is smaller than the specified
* createdAfter (string) - If set, only reports created after the specified date/time are returned.
* pageToken (string) - A token identifying a page of results the server should return. Typically,
* startTimeAtOrAfter (string) - If set, only reports whose start time is greater than or equal the
* pageSize (integer) - Requested page size. Server may return fewer report types than requested.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### jobs.reports.get
Gets the metadata of a specific report.


```js
google_youtubereporting.jobs.reports.get({
  "jobId": "",
  "reportId": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* reportId (string) **required** - The ID of the report to retrieve.
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### media.download
Method for media download. Download is supported
on the URI `/v1/media/{+name}?alt=media`.


```js
google_youtubereporting.media.download({
  "resourceName": ""
}, context)
```

#### Parameters
* resourceName (string) **required** - Name of the media that is being downloaded.  See
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### reportTypes.list
Lists report types.


```js
google_youtubereporting.reportTypes.list({}, context)
```

#### Parameters
* pageToken (string) - A token identifying a page of results the server should return. Typically,
* includeSystemManaged (boolean) - If set to true, also system-managed report types will be returned;
* pageSize (integer) - Requested page size. Server may return fewer report types than requested.
* onBehalfOfContentOwner (string) - The content owner's external ID on which behalf the user is acting on. If
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

