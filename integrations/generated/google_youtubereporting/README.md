# @datafire/google_youtubereporting

Client library for YouTube Reporting

## Installation and Usage
```bash
npm install --save @datafire/google_youtubereporting
```
```js
let google_youtubereporting = require('@datafire/google_youtubereporting').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_youtubereporting.reportTypes.list({}).then(data => {
  console.log(data);
});
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
google_youtubereporting.oauthRefresh(null, context)
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

### jobs.list
Lists jobs.


```js
google_youtubereporting.jobs.list({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * pageToken `string`: A token identifying a page of results the server should return. Typically,
  * includeSystemManaged `boolean`: If set to true, also system-managed jobs will be returned; otherwise only
  * pageSize `integer`: Requested page size. Server may return fewer jobs than requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListJobsResponse](#listjobsresponse)

### jobs.create
Creates a job and returns it.


```js
google_youtubereporting.jobs.create({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * body [Job](#job)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### jobs.delete
Deletes a job.


```js
google_youtubereporting.jobs.delete({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to delete.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### jobs.get
Gets a job.


```js
google_youtubereporting.jobs.get({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to retrieve.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### jobs.reports.list
Lists reports created by a specific job.
Returns NOT_FOUND if the job does not exist.


```js
google_youtubereporting.jobs.reports.list({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * startTimeBefore `string`: If set, only reports whose start time is smaller than the specified
  * createdAfter `string`: If set, only reports created after the specified date/time are returned.
  * pageToken `string`: A token identifying a page of results the server should return. Typically,
  * startTimeAtOrAfter `string`: If set, only reports whose start time is greater than or equal the
  * pageSize `integer`: Requested page size. Server may return fewer report types than requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListReportsResponse](#listreportsresponse)

### jobs.reports.get
Gets the metadata of a specific report.


```js
google_youtubereporting.jobs.reports.get({
  "jobId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * reportId **required** `string`: The ID of the report to retrieve.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Report](#report)

### media.download
Method for media download. Download is supported
on the URI `/v1/media/{+name}?alt=media`.


```js
google_youtubereporting.media.download({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Name of the media that is being downloaded.  See
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Media](#media)

### reportTypes.list
Lists report types.


```js
google_youtubereporting.reportTypes.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: A token identifying a page of results the server should return. Typically,
  * includeSystemManaged `boolean`: If set to true, also system-managed report types will be returned;
  * pageSize `integer`: Requested page size. Server may return fewer report types than requested.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListReportTypesResponse](#listreporttypesresponse)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Job
* Job `object`: A job creating reports of a specific type.
  * createTime `string`: The creation date/time of the job.
  * expireTime `string`: The date/time when this job will expire/expired. After a job expired, no
  * id `string`: The server-generated ID of the job (max. 40 characters).
  * name `string`: The name of the job (max. 100 characters).
  * reportTypeId `string`: The type of reports this job creates. Corresponds to the ID of a
  * systemManaged `boolean`: True if this a system-managed job that cannot be modified by the user;

### ListJobsResponse
* ListJobsResponse `object`: Response message for ReportingService.ListJobs.
  * jobs `array`: The list of jobs.
    * items [Job](#job)
  * nextPageToken `string`: A token to retrieve next page of results.

### ListReportTypesResponse
* ListReportTypesResponse `object`: Response message for ReportingService.ListReportTypes.
  * nextPageToken `string`: A token to retrieve next page of results.
  * reportTypes `array`: The list of report types.
    * items [ReportType](#reporttype)

### ListReportsResponse
* ListReportsResponse `object`: Response message for ReportingService.ListReports.
  * nextPageToken `string`: A token to retrieve next page of results.
  * reports `array`: The list of report types.
    * items [Report](#report)

### Media
* Media `object`: Media resource.
  * resourceName `string`: Name of the media resource.

### Report
* Report `object`: A report's metadata including the URL from which the report itself can be
  * createTime `string`: The date/time when this report was created.
  * downloadUrl `string`: The URL from which the report can be downloaded (max. 1000 characters).
  * endTime `string`: The end of the time period that the report instance covers. The value is
  * id `string`: The server-generated ID of the report.
  * jobExpireTime `string`: The date/time when the job this report belongs to will expire/expired.
  * jobId `string`: The ID of the job that created this report.
  * startTime `string`: The start of the time period that the report instance covers. The value is

### ReportType
* ReportType `object`: A report type.
  * deprecateTime `string`: The date/time when this report type was/will be deprecated.
  * id `string`: The ID of the report type (max. 100 characters).
  * name `string`: The name of the report type (max. 100 characters).
  * systemManaged `boolean`: True if this a system-managed report type; otherwise false. Reporting jobs


