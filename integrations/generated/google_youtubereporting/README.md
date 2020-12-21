# @datafire/google_youtubereporting

Client library for YouTube Reporting API

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

.then(data => {
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

### youtubereporting.jobs.list
Lists jobs.


```js
google_youtubereporting.youtubereporting.jobs.list({}, context)
```

#### Input
* input `object`
  * includeSystemManaged `boolean`: If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
  * pageSize `integer`: Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
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
* output [ListJobsResponse](#listjobsresponse)

### youtubereporting.jobs.create
Creates a job and returns it.


```js
google_youtubereporting.youtubereporting.jobs.create({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
  * body [Job](#job)
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
* output [Job](#job)

### youtubereporting.jobs.delete
Deletes a job.


```js
google_youtubereporting.youtubereporting.jobs.delete({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to delete.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
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
* output [Empty](#empty)

### youtubereporting.jobs.get
Gets a job.


```js
google_youtubereporting.youtubereporting.jobs.get({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to retrieve.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
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
* output [Job](#job)

### youtubereporting.jobs.reports.list
Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.


```js
google_youtubereporting.youtubereporting.jobs.reports.list({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * createdAfter `string`: If set, only reports created after the specified date/time are returned.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
  * pageSize `integer`: Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
  * startTimeAtOrAfter `string`: If set, only reports whose start time is greater than or equal the specified date/time are returned.
  * startTimeBefore `string`: If set, only reports whose start time is smaller than the specified date/time are returned.
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
* output [ListReportsResponse](#listreportsresponse)

### youtubereporting.jobs.reports.get
Gets the metadata of a specific report.


```js
google_youtubereporting.youtubereporting.jobs.reports.get({
  "jobId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * reportId **required** `string`: The ID of the report to retrieve.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
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
* output [Report](#report)

### youtubereporting.media.download
Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.


```js
google_youtubereporting.youtubereporting.media.download({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Name of the media that is being downloaded.
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
* output [GdataMedia](#gdatamedia)

### youtubereporting.reportTypes.list
Lists report types.


```js
google_youtubereporting.youtubereporting.reportTypes.list({}, context)
```

#### Input
* input `object`
  * includeSystemManaged `boolean`: If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
  * onBehalfOfContentOwner `string`: The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
  * pageSize `integer`: Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
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
* output [ListReportTypesResponse](#listreporttypesresponse)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GdataBlobstore2Info
* GdataBlobstore2Info `object`: gdata
  * blobGeneration `string`: gdata
  * blobId `string`: gdata
  * downloadReadHandle `string`: gdata
  * readToken `string`: gdata
  * uploadMetadataContainer `string`: gdata

### GdataCompositeMedia
* GdataCompositeMedia `object`: gdata
  * blobRef `string`: gdata
  * blobstore2Info [GdataBlobstore2Info](#gdatablobstore2info)
  * cosmoBinaryReference `string`: gdata
  * crc32cHash `integer`: gdata
  * inline `string`: gdata
  * length `string`: gdata
  * md5Hash `string`: gdata
  * objectId [GdataObjectId](#gdataobjectid)
  * path `string`: gdata
  * referenceType `string` (values: PATH, BLOB_REF, INLINE, BIGSTORE_REF, COSMO_BINARY_REFERENCE): gdata
  * sha1Hash `string`: gdata

### GdataContentTypeInfo
* GdataContentTypeInfo `object`: gdata
  * bestGuess `string`: gdata
  * fromBytes `string`: gdata
  * fromFileName `string`: gdata
  * fromHeader `string`: gdata
  * fromUrlPath `string`: gdata

### GdataDiffChecksumsResponse
* GdataDiffChecksumsResponse `object`: gdata
  * checksumsLocation [GdataCompositeMedia](#gdatacompositemedia)
  * chunkSizeBytes `string`: gdata
  * objectLocation [GdataCompositeMedia](#gdatacompositemedia)
  * objectSizeBytes `string`: gdata
  * objectVersion `string`: gdata

### GdataDiffDownloadResponse
* GdataDiffDownloadResponse `object`: gdata
  * objectLocation [GdataCompositeMedia](#gdatacompositemedia)

### GdataDiffUploadRequest
* GdataDiffUploadRequest `object`: gdata
  * checksumsInfo [GdataCompositeMedia](#gdatacompositemedia)
  * objectInfo [GdataCompositeMedia](#gdatacompositemedia)
  * objectVersion `string`: gdata

### GdataDiffUploadResponse
* GdataDiffUploadResponse `object`: gdata
  * objectVersion `string`: gdata
  * originalObject [GdataCompositeMedia](#gdatacompositemedia)

### GdataDiffVersionResponse
* GdataDiffVersionResponse `object`: gdata
  * objectSizeBytes `string`: gdata
  * objectVersion `string`: gdata

### GdataDownloadParameters
* GdataDownloadParameters `object`: gdata
  * allowGzipCompression `boolean`: gdata
  * ignoreRange `boolean`: gdata

### GdataMedia
* GdataMedia `object`: gdata
  * algorithm `string`: gdata
  * bigstoreObjectRef `string`: gdata
  * blobRef `string`: gdata
  * blobstore2Info [GdataBlobstore2Info](#gdatablobstore2info)
  * compositeMedia `array`: gdata
    * items [GdataCompositeMedia](#gdatacompositemedia)
  * contentType `string`: gdata
  * contentTypeInfo [GdataContentTypeInfo](#gdatacontenttypeinfo)
  * cosmoBinaryReference `string`: gdata
  * crc32cHash `integer`: gdata
  * diffChecksumsResponse [GdataDiffChecksumsResponse](#gdatadiffchecksumsresponse)
  * diffDownloadResponse [GdataDiffDownloadResponse](#gdatadiffdownloadresponse)
  * diffUploadRequest [GdataDiffUploadRequest](#gdatadiffuploadrequest)
  * diffUploadResponse [GdataDiffUploadResponse](#gdatadiffuploadresponse)
  * diffVersionResponse [GdataDiffVersionResponse](#gdatadiffversionresponse)
  * downloadParameters [GdataDownloadParameters](#gdatadownloadparameters)
  * filename `string`: gdata
  * hash `string`: gdata
  * hashVerified `boolean`: gdata
  * inline `string`: gdata
  * isPotentialRetry `boolean`: gdata
  * length `string`: gdata
  * md5Hash `string`: gdata
  * mediaId `string`: gdata
  * objectId [GdataObjectId](#gdataobjectid)
  * path `string`: gdata
  * referenceType `string` (values: PATH, BLOB_REF, INLINE, GET_MEDIA, COMPOSITE_MEDIA, BIGSTORE_REF, DIFF_VERSION_RESPONSE, DIFF_CHECKSUMS_RESPONSE, DIFF_DOWNLOAD_RESPONSE, DIFF_UPLOAD_REQUEST, DIFF_UPLOAD_RESPONSE, COSMO_BINARY_REFERENCE, ARBITRARY_BYTES): gdata
  * sha1Hash `string`: gdata
  * sha256Hash `string`: gdata
  * timestamp `string`: gdata
  * token `string`: gdata

### GdataObjectId
* GdataObjectId `object`: gdata
  * bucketName `string`: gdata
  * generation `string`: gdata
  * objectName `string`: gdata

### Job
* Job `object`: A job creating reports of a specific type.
  * createTime `string`: The creation date/time of the job.
  * expireTime `string`: The date/time when this job will expire/expired. After a job expired, no new reports are generated.
  * id `string`: The server-generated ID of the job (max. 40 characters).
  * name `string`: The name of the job (max. 100 characters).
  * reportTypeId `string`: The type of reports this job creates. Corresponds to the ID of a ReportType.
  * systemManaged `boolean`: True if this a system-managed job that cannot be modified by the user; otherwise false.

### ListJobsResponse
* ListJobsResponse `object`: Response message for ReportingService.ListJobs.
  * jobs `array`: The list of jobs.
    * items [Job](#job)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.

### ListReportTypesResponse
* ListReportTypesResponse `object`: Response message for ReportingService.ListReportTypes.
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.
  * reportTypes `array`: The list of report types.
    * items [ReportType](#reporttype)

### ListReportsResponse
* ListReportsResponse `object`: Response message for ReportingService.ListReports.
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.
  * reports `array`: The list of report types.
    * items [Report](#report)

### Report
* Report `object`: A report's metadata including the URL from which the report itself can be downloaded.
  * createTime `string`: The date/time when this report was created.
  * downloadUrl `string`: The URL from which the report can be downloaded (max. 1000 characters).
  * endTime `string`: The end of the time period that the report instance covers. The value is exclusive.
  * id `string`: The server-generated ID of the report.
  * jobExpireTime `string`: The date/time when the job this report belongs to will expire/expired.
  * jobId `string`: The ID of the job that created this report.
  * startTime `string`: The start of the time period that the report instance covers. The value is inclusive.

### ReportType
* ReportType `object`: A report type.
  * deprecateTime `string`: The date/time when this report type was/will be deprecated.
  * id `string`: The ID of the report type (max. 100 characters).
  * name `string`: The name of the report type (max. 100 characters).
  * systemManaged `boolean`: True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.


