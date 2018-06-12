# @datafire/google_dlp

Client library for Cloud Data Loss Prevention (DLP)

## Installation and Usage
```bash
npm install --save @datafire/google_dlp
```
```js
let google_dlp = require('@datafire/google_dlp').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_dlp.infoTypes.list({}).then(data => {
  console.log(data);
});
```

## Description

Provides methods for detection, risk analysis, and de-identification of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dlp.oauthCallback({
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
google_dlp.oauthRefresh(null, context)
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

### infoTypes.list
Returns sensitive information types DLP supports.


```js
google_dlp.infoTypes.list({}, context)
```

#### Input
* input `object`
  * filter `string`: Optional filter to only return infoTypes supported by certain parts of the
  * languageCode `string`: Optional BCP-47 language code for localized infoType friendly
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
* output [GooglePrivacyDlpV2beta2ListInfoTypesResponse](#googleprivacydlpv2beta2listinfotypesresponse)

### projects.jobTriggers.delete
Deletes a job trigger.


```js
google_dlp.projects.jobTriggers.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the project and the triggeredJob, for example
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### projects.jobTriggers.get
Gets a job trigger.


```js
google_dlp.projects.jobTriggers.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the project and the triggeredJob, for example
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
* output [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)

### projects.jobTriggers.patch
Updates a job trigger.


```js
google_dlp.projects.jobTriggers.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2UpdateJobTriggerRequest](#googleprivacydlpv2beta2updatejobtriggerrequest)
  * name **required** `string`: Resource name of the project and the triggeredJob, for example
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
* output [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)

### projects.dlpJobs.cancel
Starts asynchronous cancellation on a long-running DlpJob.  The server
makes a best effort to cancel the DlpJob, but success is not
guaranteed.


```js
google_dlp.projects.dlpJobs.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2CancelDlpJobRequest](#googleprivacydlpv2beta2canceldlpjobrequest)
  * name **required** `string`: The name of the DlpJob resource to be cancelled.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### projects.content.deidentify
De-identifies potentially sensitive info from a ContentItem.
This method has limits on input size and output size.
[How-to guide](/dlp/docs/deidentify-sensitive-data)


```js
google_dlp.projects.content.deidentify({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2DeidentifyContentRequest](#googleprivacydlpv2beta2deidentifycontentrequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2DeidentifyContentResponse](#googleprivacydlpv2beta2deidentifycontentresponse)

### projects.content.inspect
Finds potentially sensitive info in content.
This method has limits on input size, processing time, and output size.
[How-to guide for text](/dlp/docs/inspecting-text), [How-to guide for
images](/dlp/docs/inspecting-images)


```js
google_dlp.projects.content.inspect({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2InspectContentRequest](#googleprivacydlpv2beta2inspectcontentrequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2InspectContentResponse](#googleprivacydlpv2beta2inspectcontentresponse)

### projects.content.reidentify
Re-identify content that has been de-identified.


```js
google_dlp.projects.content.reidentify({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2ReidentifyContentRequest](#googleprivacydlpv2beta2reidentifycontentrequest)
  * parent **required** `string`: The parent resource name.
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
* output [GooglePrivacyDlpV2beta2ReidentifyContentResponse](#googleprivacydlpv2beta2reidentifycontentresponse)

### projects.dataSource.analyze
Schedules a job to compute risk analysis metrics over content in a Google
Cloud Platform repository. [How-to guide](/dlp/docs/compute-risk-analysis)


```js
google_dlp.projects.dataSource.analyze({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest](#googleprivacydlpv2beta2analyzedatasourceriskrequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2DlpJob](#googleprivacydlpv2beta2dlpjob)

### projects.dataSource.inspect
Schedules a job scanning content in a Google Cloud Platform data
repository. [How-to guide](/dlp/docs/inspecting-storage)


```js
google_dlp.projects.dataSource.inspect({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2InspectDataSourceRequest](#googleprivacydlpv2beta2inspectdatasourcerequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2DlpJob](#googleprivacydlpv2beta2dlpjob)

### projects.deidentifyTemplates.list
Lists inspect templates.


```js
google_dlp.projects.deidentifyTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional size of the page, can be limited by server. If zero server returns
  * pageToken `string`: Optional page token to continue retrieval. Comes from previous call
  * parent **required** `string`: The parent resource name, for example projects/my-project-id or
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
* output [GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse](#googleprivacydlpv2beta2listdeidentifytemplatesresponse)

### projects.deidentifyTemplates.create
Creates an Deidentify template for re-using frequently used configuration
for Deidentifying content, images, and storage.


```js
google_dlp.projects.deidentifyTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest](#googleprivacydlpv2beta2createdeidentifytemplaterequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id or
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
* output [GooglePrivacyDlpV2beta2DeidentifyTemplate](#googleprivacydlpv2beta2deidentifytemplate)

### projects.dlpJobs.list
Lists DlpJobs that match the specified filter in the request.


```js
google_dlp.projects.dlpJobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Allows filtering.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
  * type `string` (values: DLP_JOB_TYPE_UNSPECIFIED, INSPECT_JOB, RISK_ANALYSIS_JOB): The type of job. Defaults to `DlpJobType.INSPECT`
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
* output [GooglePrivacyDlpV2beta2ListDlpJobsResponse](#googleprivacydlpv2beta2listdlpjobsresponse)

### projects.image.redact
Redacts potentially sensitive info from an image.
This method has limits on input size, processing time, and output size.
[How-to guide](/dlp/docs/redacting-sensitive-data-images)


```js
google_dlp.projects.image.redact({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2RedactImageRequest](#googleprivacydlpv2beta2redactimagerequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2RedactImageResponse](#googleprivacydlpv2beta2redactimageresponse)

### projects.inspectTemplates.list
Lists inspect templates.


```js
google_dlp.projects.inspectTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional size of the page, can be limited by server. If zero server returns
  * pageToken `string`: Optional page token to continue retrieval. Comes from previous call
  * parent **required** `string`: The parent resource name, for example projects/my-project-id or
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
* output [GooglePrivacyDlpV2beta2ListInspectTemplatesResponse](#googleprivacydlpv2beta2listinspecttemplatesresponse)

### projects.inspectTemplates.create
Creates an inspect template for re-using frequently used configuration
for inspecting content, images, and storage.


```js
google_dlp.projects.inspectTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2CreateInspectTemplateRequest](#googleprivacydlpv2beta2createinspecttemplaterequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id or
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
* output [GooglePrivacyDlpV2beta2InspectTemplate](#googleprivacydlpv2beta2inspecttemplate)

### projects.jobTriggers.list
Lists job triggers.


```js
google_dlp.projects.jobTriggers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * orderBy `string`: Optional comma separated list of triggeredJob fields to order by,
  * pageSize `integer`: Optional size of the page, can be limited by a server.
  * pageToken `string`: Optional page token to continue retrieval. Comes from previous call
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2ListJobTriggersResponse](#googleprivacydlpv2beta2listjobtriggersresponse)

### projects.jobTriggers.create
Creates a job to run DLP actions such as scanning storage for sensitive
information on a set schedule.


```js
google_dlp.projects.jobTriggers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta2CreateJobTriggerRequest](#googleprivacydlpv2beta2createjobtriggerrequest)
  * parent **required** `string`: The parent resource name, for example projects/my-project-id.
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
* output [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)



## Definitions

### GooglePrivacyDlpV2beta1AuxiliaryTable
* GooglePrivacyDlpV2beta1AuxiliaryTable `object`: An auxiliary table contains statistical information on the relative
  * quasiIds `array`: Quasi-identifier columns. [required]
    * items [GooglePrivacyDlpV2beta1QuasiIdField](#googleprivacydlpv2beta1quasiidfield)
  * relativeFrequency [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * table [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1BigQueryOptions
* GooglePrivacyDlpV2beta1BigQueryOptions `object`: Options defining BigQuery table and row identifiers.
  * identifyingFields `array`: References to fields uniquely identifying rows within the table.
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * tableReference [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1BigQueryTable
* GooglePrivacyDlpV2beta1BigQueryTable `object`: Message defining the location of a BigQuery table. A table is uniquely
  * datasetId `string`: Dataset ID of the table.
  * projectId `string`: The Google Cloud Platform project ID of the project containing the table.
  * tableId `string`: Name of the table.

### GooglePrivacyDlpV2beta1CategoricalStatsConfig
* GooglePrivacyDlpV2beta1CategoricalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket
* GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket `object`: Histogram bucket of value frequencies in the column.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of value frequencies in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1ValueFrequency](#googleprivacydlpv2beta1valuefrequency)
  * valueFrequencyLowerBound `string`: Lower bound on the value frequency of the values in this bucket.
  * valueFrequencyUpperBound `string`: Upper bound on the value frequency of the values in this bucket.

### GooglePrivacyDlpV2beta1CategoricalStatsResult
* GooglePrivacyDlpV2beta1CategoricalStatsResult `object`: Result of the categorical stats computation.
  * valueFrequencyHistogramBuckets `array`: Histogram of value frequencies in the column.
    * items [GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket](#googleprivacydlpv2beta1categoricalstatshistogrambucket)

### GooglePrivacyDlpV2beta1CloudStorageOptions
* GooglePrivacyDlpV2beta1CloudStorageOptions `object`: Options defining a file or a set of files (path ending with *) within
  * fileSet [GooglePrivacyDlpV2beta1FileSet](#googleprivacydlpv2beta1fileset)

### GooglePrivacyDlpV2beta1CloudStoragePath
* GooglePrivacyDlpV2beta1CloudStoragePath `object`: A location in Cloud Storage.
  * path `string`: The url, in the format of `gs://bucket/<path>`.

### GooglePrivacyDlpV2beta1CustomInfoType
* GooglePrivacyDlpV2beta1CustomInfoType `object`: Custom information type provided by the user. Used to find domain-specific
  * dictionary [GooglePrivacyDlpV2beta1Dictionary](#googleprivacydlpv2beta1dictionary)
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * surrogateType [GooglePrivacyDlpV2beta1SurrogateType](#googleprivacydlpv2beta1surrogatetype)

### GooglePrivacyDlpV2beta1DatastoreOptions
* GooglePrivacyDlpV2beta1DatastoreOptions `object`: Options defining a data set within Google Cloud Datastore.
  * kind [GooglePrivacyDlpV2beta1KindExpression](#googleprivacydlpv2beta1kindexpression)
  * partitionId [GooglePrivacyDlpV2beta1PartitionId](#googleprivacydlpv2beta1partitionid)
  * projection `array`: Properties to scan. If none are specified, all properties will be scanned
    * items [GooglePrivacyDlpV2beta1Projection](#googleprivacydlpv2beta1projection)

### GooglePrivacyDlpV2beta1Dictionary
* GooglePrivacyDlpV2beta1Dictionary `object`: Custom information type based on a dictionary of words or phrases. This can
  * wordList [GooglePrivacyDlpV2beta1WordList](#googleprivacydlpv2beta1wordlist)

### GooglePrivacyDlpV2beta1EntityId
* GooglePrivacyDlpV2beta1EntityId `object`: An entity in a dataset is a field or set of fields that correspond to a
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1FieldId
* GooglePrivacyDlpV2beta1FieldId `object`: General identifier of a data field in a storage service.
  * columnName `string`: Name describing the field.

### GooglePrivacyDlpV2beta1FileSet
* GooglePrivacyDlpV2beta1FileSet `object`: Set of files to scan.
  * url `string`: The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the

### GooglePrivacyDlpV2beta1InfoType
* GooglePrivacyDlpV2beta1InfoType `object`: Type of information detected by the API.
  * name `string`: Name of the information type.

### GooglePrivacyDlpV2beta1InfoTypeLimit
* GooglePrivacyDlpV2beta1InfoTypeLimit `object`: Max findings configuration per info type, per content item or long running
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * maxFindings `integer`: Max findings limit for the given infoType.

### GooglePrivacyDlpV2beta1InfoTypeStatistics
* GooglePrivacyDlpV2beta1InfoTypeStatistics `object`: Statistics regarding a specific InfoType.
  * count `string`: Number of findings for this info type.
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)

### GooglePrivacyDlpV2beta1InspectConfig
* GooglePrivacyDlpV2beta1InspectConfig `object`: Configuration description of the scanning process.
  * customInfoTypes `array`: Custom info types provided by the user.
    * items [GooglePrivacyDlpV2beta1CustomInfoType](#googleprivacydlpv2beta1custominfotype)
  * excludeTypes `boolean`: When true, excludes type information of the findings.
  * includeQuote `boolean`: When true, a contextual quote from the data that triggered a finding is
  * infoTypeLimits `array`: Configuration of findings limit given for specified info types.
    * items [GooglePrivacyDlpV2beta1InfoTypeLimit](#googleprivacydlpv2beta1infotypelimit)
  * infoTypes `array`: Restricts what info_types to look for. The values must correspond to
    * items [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * maxFindings `integer`: Limits the number of findings per content item or long running operation.
  * minLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Only returns findings equal or above this threshold.

### GooglePrivacyDlpV2beta1InspectOperationMetadata
* GooglePrivacyDlpV2beta1InspectOperationMetadata `object`: Metadata returned within GetOperation for an inspect request.
  * createTime `string`: The time which this request was started.
  * infoTypeStats `array`
    * items [GooglePrivacyDlpV2beta1InfoTypeStatistics](#googleprivacydlpv2beta1infotypestatistics)
  * processedBytes `string`: Total size in bytes that were processed.
  * requestInspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * requestOutputConfig [GooglePrivacyDlpV2beta1OutputStorageConfig](#googleprivacydlpv2beta1outputstorageconfig)
  * requestStorageConfig [GooglePrivacyDlpV2beta1StorageConfig](#googleprivacydlpv2beta1storageconfig)
  * totalEstimatedBytes `string`: Estimate of the number of bytes to process.

### GooglePrivacyDlpV2beta1InspectOperationResult
* GooglePrivacyDlpV2beta1InspectOperationResult `object`: The operational data.
  * name `string`: The server-assigned name, which is only unique within the same service that

### GooglePrivacyDlpV2beta1KAnonymityConfig
* GooglePrivacyDlpV2beta1KAnonymityConfig `object`: k-anonymity metric, used for analysis of reidentification risk.
  * entityId [GooglePrivacyDlpV2beta1EntityId](#googleprivacydlpv2beta1entityid)
  * quasiIds `array`: Set of fields to compute k-anonymity over. When multiple fields are
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass
* GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass `object`: The set of columns' values that share the same k-anonymity value.
  * equivalenceClassSize `string`: Size of the equivalence class, for example number of rows with the
  * quasiIdsValues `array`: Set of values defining the equivalence class. One value per
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1KAnonymityHistogramBucket
* GooglePrivacyDlpV2beta1KAnonymityHistogramBucket `object`: Histogram bucket of equivalence class sizes in the table.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass](#googleprivacydlpv2beta1kanonymityequivalenceclass)
  * equivalenceClassSizeLowerBound `string`: Lower bound on the size of the equivalence classes in this bucket.
  * equivalenceClassSizeUpperBound `string`: Upper bound on the size of the equivalence classes in this bucket.

### GooglePrivacyDlpV2beta1KAnonymityResult
* GooglePrivacyDlpV2beta1KAnonymityResult `object`: Result of the k-anonymity computation.
  * equivalenceClassHistogramBuckets `array`: Histogram of k-anonymity equivalence classes.
    * items [GooglePrivacyDlpV2beta1KAnonymityHistogramBucket](#googleprivacydlpv2beta1kanonymityhistogrambucket)

### GooglePrivacyDlpV2beta1KMapEstimationConfig
* GooglePrivacyDlpV2beta1KMapEstimationConfig `object`: Reidentifiability metric. This corresponds to a risk model similar to what
  * auxiliaryTables `array`: Several auxiliary tables can be used in the analysis. Each custom_tag
    * items [GooglePrivacyDlpV2beta1AuxiliaryTable](#googleprivacydlpv2beta1auxiliarytable)
  * quasiIds `array`: Fields considered to be quasi-identifiers. No two columns can have the
    * items [GooglePrivacyDlpV2beta1TaggedField](#googleprivacydlpv2beta1taggedfield)
  * regionCode `string`: ISO 3166-1 alpha-2 region code to use in the statistical modeling.

### GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket
* GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket `object`: A KMapEstimationHistogramBucket message with the following values:
  * bucketSize `string`: Number of records within these anonymity bounds.
  * bucketValues `array`: Sample of quasi-identifier tuple values in this bucket. The total
    * items [GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues](#googleprivacydlpv2beta1kmapestimationquasiidvalues)
  * maxAnonymity `string`: Always greater than or equal to min_anonymity.
  * minAnonymity `string`: Always positive.

### GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues
* GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues `object`: A tuple of values for the quasi-identifier columns.
  * estimatedAnonymity `string`: The estimated anonymity for these quasi-identifier values.
  * quasiIdsValues `array`: The quasi-identifier values.
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1KMapEstimationResult
* GooglePrivacyDlpV2beta1KMapEstimationResult `object`: Result of the reidentifiability analysis. Note that these results are an
  * kMapEstimationHistogram `array`: The intervals [min_anonymity, max_anonymity] do not overlap. If a value
    * items [GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket](#googleprivacydlpv2beta1kmapestimationhistogrambucket)

### GooglePrivacyDlpV2beta1KindExpression
* GooglePrivacyDlpV2beta1KindExpression `object`: A representation of a Datastore kind.
  * name `string`: The name of the kind.

### GooglePrivacyDlpV2beta1LDiversityConfig
* GooglePrivacyDlpV2beta1LDiversityConfig `object`: l-diversity metric, used for analysis of reidentification risk.
  * quasiIds `array`: Set of quasi-identifiers indicating how equivalence classes are
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * sensitiveAttribute [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1LDiversityEquivalenceClass
* GooglePrivacyDlpV2beta1LDiversityEquivalenceClass `object`: The set of columns' values that share the same l-diversity value.
  * equivalenceClassSize `string`: Size of the k-anonymity equivalence class.
  * numDistinctSensitiveValues `string`: Number of distinct sensitive values in this equivalence class.
  * quasiIdsValues `array`: Quasi-identifier values defining the k-anonymity equivalence
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * topSensitiveValues `array`: Estimated frequencies of top sensitive values.
    * items [GooglePrivacyDlpV2beta1ValueFrequency](#googleprivacydlpv2beta1valuefrequency)

### GooglePrivacyDlpV2beta1LDiversityHistogramBucket
* GooglePrivacyDlpV2beta1LDiversityHistogramBucket `object`: Histogram bucket of sensitive value frequencies in the table.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1LDiversityEquivalenceClass](#googleprivacydlpv2beta1ldiversityequivalenceclass)
  * sensitiveValueFrequencyLowerBound `string`: Lower bound on the sensitive value frequencies of the equivalence
  * sensitiveValueFrequencyUpperBound `string`: Upper bound on the sensitive value frequencies of the equivalence

### GooglePrivacyDlpV2beta1LDiversityResult
* GooglePrivacyDlpV2beta1LDiversityResult `object`: Result of the l-diversity computation.
  * sensitiveValueFrequencyHistogramBuckets `array`: Histogram of l-diversity equivalence class sensitive value frequencies.
    * items [GooglePrivacyDlpV2beta1LDiversityHistogramBucket](#googleprivacydlpv2beta1ldiversityhistogrambucket)

### GooglePrivacyDlpV2beta1NumericalStatsConfig
* GooglePrivacyDlpV2beta1NumericalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1NumericalStatsResult
* GooglePrivacyDlpV2beta1NumericalStatsResult `object`: Result of the numerical stats computation.
  * maxValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * minValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * quantileValues `array`: List of 99 values that partition the set of field values into 100 equal
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1OutputStorageConfig
* GooglePrivacyDlpV2beta1OutputStorageConfig `object`: Cloud repository for storing output.
  * storagePath [GooglePrivacyDlpV2beta1CloudStoragePath](#googleprivacydlpv2beta1cloudstoragepath)
  * table [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1PartitionId
* GooglePrivacyDlpV2beta1PartitionId `object`: Datastore partition ID.
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### GooglePrivacyDlpV2beta1PrivacyMetric
* GooglePrivacyDlpV2beta1PrivacyMetric `object`: Privacy metric to compute for reidentification risk analysis.
  * categoricalStatsConfig [GooglePrivacyDlpV2beta1CategoricalStatsConfig](#googleprivacydlpv2beta1categoricalstatsconfig)
  * kAnonymityConfig [GooglePrivacyDlpV2beta1KAnonymityConfig](#googleprivacydlpv2beta1kanonymityconfig)
  * kMapEstimationConfig [GooglePrivacyDlpV2beta1KMapEstimationConfig](#googleprivacydlpv2beta1kmapestimationconfig)
  * lDiversityConfig [GooglePrivacyDlpV2beta1LDiversityConfig](#googleprivacydlpv2beta1ldiversityconfig)
  * numericalStatsConfig [GooglePrivacyDlpV2beta1NumericalStatsConfig](#googleprivacydlpv2beta1numericalstatsconfig)

### GooglePrivacyDlpV2beta1Projection
* GooglePrivacyDlpV2beta1Projection `object`: A representation of a Datastore property in a projection.
  * property [GooglePrivacyDlpV2beta1PropertyReference](#googleprivacydlpv2beta1propertyreference)

### GooglePrivacyDlpV2beta1PropertyReference
* GooglePrivacyDlpV2beta1PropertyReference `object`: A reference to a property relative to the Datastore kind expressions.
  * name `string`: The name of the property.

### GooglePrivacyDlpV2beta1QuasiIdField
* GooglePrivacyDlpV2beta1QuasiIdField `object`: A quasi-identifier column has a custom_tag, used to know which column
  * customTag `string`
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata
* GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata `object`: Metadata returned within the
  * createTime `string`: The time which this request was started.
  * requestedPrivacyMetric [GooglePrivacyDlpV2beta1PrivacyMetric](#googleprivacydlpv2beta1privacymetric)
  * requestedSourceTable [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1RiskAnalysisOperationResult
* GooglePrivacyDlpV2beta1RiskAnalysisOperationResult `object`: Result of a risk analysis
  * categoricalStatsResult [GooglePrivacyDlpV2beta1CategoricalStatsResult](#googleprivacydlpv2beta1categoricalstatsresult)
  * kAnonymityResult [GooglePrivacyDlpV2beta1KAnonymityResult](#googleprivacydlpv2beta1kanonymityresult)
  * kMapEstimationResult [GooglePrivacyDlpV2beta1KMapEstimationResult](#googleprivacydlpv2beta1kmapestimationresult)
  * lDiversityResult [GooglePrivacyDlpV2beta1LDiversityResult](#googleprivacydlpv2beta1ldiversityresult)
  * numericalStatsResult [GooglePrivacyDlpV2beta1NumericalStatsResult](#googleprivacydlpv2beta1numericalstatsresult)

### GooglePrivacyDlpV2beta1StorageConfig
* GooglePrivacyDlpV2beta1StorageConfig `object`: Shared message indicating Cloud storage type.
  * bigQueryOptions [GooglePrivacyDlpV2beta1BigQueryOptions](#googleprivacydlpv2beta1bigqueryoptions)
  * cloudStorageOptions [GooglePrivacyDlpV2beta1CloudStorageOptions](#googleprivacydlpv2beta1cloudstorageoptions)
  * datastoreOptions [GooglePrivacyDlpV2beta1DatastoreOptions](#googleprivacydlpv2beta1datastoreoptions)

### GooglePrivacyDlpV2beta1SurrogateType
* GooglePrivacyDlpV2beta1SurrogateType `object`: Message for detecting output from deidentification transformations

### GooglePrivacyDlpV2beta1TaggedField
* GooglePrivacyDlpV2beta1TaggedField `object`: A column with a semantic tag attached.
  * customTag `string`: A column can be tagged with a custom tag. In this case, the user must
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * inferred [GoogleProtobufEmpty](#googleprotobufempty)
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)

### GooglePrivacyDlpV2beta1Value
* GooglePrivacyDlpV2beta1Value `object`: Set of primitive values supported by the system.
  * booleanValue `boolean`
  * dateValue [GoogleTypeDate](#googletypedate)
  * floatValue `number`
  * integerValue `string`
  * stringValue `string`
  * timeValue [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timestampValue `string`

### GooglePrivacyDlpV2beta1ValueFrequency
* GooglePrivacyDlpV2beta1ValueFrequency `object`: A value of a field, including its frequency.
  * count `string`: How many times the value is contained in the field.
  * value [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1WordList
* GooglePrivacyDlpV2beta1WordList `object`: Message defining a list of words or phrases to search for in the data.
  * words `array`: Words or phrases defining the dictionary. The dictionary must contain
    * items `string`

### GooglePrivacyDlpV2beta2Action
* GooglePrivacyDlpV2beta2Action `object`: A task to execute on the completion of a job.
  * pubSub [GooglePrivacyDlpV2beta2PublishToPubSub](#googleprivacydlpv2beta2publishtopubsub)
  * saveFindings [GooglePrivacyDlpV2beta2SaveFindings](#googleprivacydlpv2beta2savefindings)

### GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails
* GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails `object`: Result of a risk analysis operation request.
  * categoricalStatsResult [GooglePrivacyDlpV2beta2CategoricalStatsResult](#googleprivacydlpv2beta2categoricalstatsresult)
  * kAnonymityResult [GooglePrivacyDlpV2beta2KAnonymityResult](#googleprivacydlpv2beta2kanonymityresult)
  * kMapEstimationResult [GooglePrivacyDlpV2beta2KMapEstimationResult](#googleprivacydlpv2beta2kmapestimationresult)
  * lDiversityResult [GooglePrivacyDlpV2beta2LDiversityResult](#googleprivacydlpv2beta2ldiversityresult)
  * numericalStatsResult [GooglePrivacyDlpV2beta2NumericalStatsResult](#googleprivacydlpv2beta2numericalstatsresult)
  * requestedPrivacyMetric [GooglePrivacyDlpV2beta2PrivacyMetric](#googleprivacydlpv2beta2privacymetric)
  * requestedSourceTable [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest
* GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest `object`: Request for creating a risk analysis DlpJob.
  * jobConfig [GooglePrivacyDlpV2beta2RiskAnalysisJobConfig](#googleprivacydlpv2beta2riskanalysisjobconfig)
  * jobId `string`: Optional job ID to use for the created job. If not provided, a job ID will

### GooglePrivacyDlpV2beta2AuxiliaryTable
* GooglePrivacyDlpV2beta2AuxiliaryTable `object`: An auxiliary table contains statistical information on the relative
  * quasiIds `array`: Quasi-identifier columns. [required]
    * items [GooglePrivacyDlpV2beta2QuasiIdField](#googleprivacydlpv2beta2quasiidfield)
  * relativeFrequency [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * table [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2BigQueryKey
* GooglePrivacyDlpV2beta2BigQueryKey `object`: Row key for identifying a record in BigQuery table.
  * rowNumber `string`: Absolute number of the row from the beginning of the table at the time
  * tableReference [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2BigQueryOptions
* GooglePrivacyDlpV2beta2BigQueryOptions `object`: Options defining BigQuery table and row identifiers.
  * identifyingFields `array`: References to fields uniquely identifying rows within the table.
    * items [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * tableReference [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2BigQueryTable
* GooglePrivacyDlpV2beta2BigQueryTable `object`: Message defining the location of a BigQuery table. A table is uniquely
  * datasetId `string`: Dataset ID of the table.
  * projectId `string`: The Google Cloud Platform project ID of the project containing the table.
  * tableId `string`: Name of the table.

### GooglePrivacyDlpV2beta2Bucket
* GooglePrivacyDlpV2beta2Bucket `object`: Bucket is represented as a range, along with replacement values.
  * max [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * min [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * replacementValue [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2BucketingConfig
* GooglePrivacyDlpV2beta2BucketingConfig `object`: Generalization function that buckets values based on ranges. The ranges and
  * buckets `array`: Set of buckets. Ranges must be non-overlapping.
    * items [GooglePrivacyDlpV2beta2Bucket](#googleprivacydlpv2beta2bucket)

### GooglePrivacyDlpV2beta2CancelDlpJobRequest
* GooglePrivacyDlpV2beta2CancelDlpJobRequest `object`: The request message for canceling a DLP job.

### GooglePrivacyDlpV2beta2CategoricalStatsConfig
* GooglePrivacyDlpV2beta2CategoricalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket
* GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket `object`
  * bucketSize `string`: Total number of values in this bucket.
  * bucketValueCount `string`: Total number of distinct values in this bucket.
  * bucketValues `array`: Sample of value frequencies in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta2ValueFrequency](#googleprivacydlpv2beta2valuefrequency)
  * valueFrequencyLowerBound `string`: Lower bound on the value frequency of the values in this bucket.
  * valueFrequencyUpperBound `string`: Upper bound on the value frequency of the values in this bucket.

### GooglePrivacyDlpV2beta2CategoricalStatsResult
* GooglePrivacyDlpV2beta2CategoricalStatsResult `object`: Result of the categorical stats computation.
  * valueFrequencyHistogramBuckets `array`: Histogram of value frequencies in the column.
    * items [GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket](#googleprivacydlpv2beta2categoricalstatshistogrambucket)

### GooglePrivacyDlpV2beta2CharacterMaskConfig
* GooglePrivacyDlpV2beta2CharacterMaskConfig `object`: Partially mask a string by replacing a given number of characters with a
  * charactersToIgnore `array`: When masking a string, items in this list will be skipped when replacing.
    * items [GooglePrivacyDlpV2beta2CharsToIgnore](#googleprivacydlpv2beta2charstoignore)
  * maskingCharacter `string`: Character to mask the sensitive values&mdash;for example, "*" for an
  * numberToMask `integer`: Number of characters to mask. If not set, all matching chars will be
  * reverseOrder `boolean`: Mask characters in reverse order. For example, if `masking_character` is

### GooglePrivacyDlpV2beta2CharsToIgnore
* GooglePrivacyDlpV2beta2CharsToIgnore `object`: Characters to skip when doing deidentification of a value. These will be left
  * charactersToSkip `string`
  * commonCharactersToIgnore `string` (values: COMMON_CHARS_TO_IGNORE_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE)

### GooglePrivacyDlpV2beta2CloudStorageKey
* GooglePrivacyDlpV2beta2CloudStorageKey `object`: Record key for a finding in a Cloud Storage file.
  * filePath `string`: Path to the file.
  * startOffset `string`: Byte offset of the referenced data in the file.

### GooglePrivacyDlpV2beta2CloudStorageOptions
* GooglePrivacyDlpV2beta2CloudStorageOptions `object`: Options defining a file or a set of files (path ending with *) within
  * bytesLimitPerFile `string`: Max number of bytes to scan from a file. If a scanned file's size is bigger
  * fileSet [GooglePrivacyDlpV2beta2FileSet](#googleprivacydlpv2beta2fileset)

### GooglePrivacyDlpV2beta2Color
* GooglePrivacyDlpV2beta2Color `object`: Represents a color in the RGB color space.
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### GooglePrivacyDlpV2beta2Condition
* GooglePrivacyDlpV2beta2Condition `object`: The field type of `value` and `field` do not need to match to be
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * operator `string` (values: RELATIONAL_OPERATOR_UNSPECIFIED, EQUAL_TO, NOT_EQUAL_TO, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN_OR_EQUALS, EXISTS): Operator used to compare the field or infoType to the value. [required]
  * value [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2Conditions
* GooglePrivacyDlpV2beta2Conditions `object`: A collection of conditions.
  * conditions `array`
    * items [GooglePrivacyDlpV2beta2Condition](#googleprivacydlpv2beta2condition)

### GooglePrivacyDlpV2beta2ContentItem
* GooglePrivacyDlpV2beta2ContentItem `object`: Container structure for the content to inspect.
  * data `string`: Content data to inspect or redact.
  * table [GooglePrivacyDlpV2beta2Table](#googleprivacydlpv2beta2table)
  * type `string`: Type of the content, as defined in Content-Type HTTP header.
  * value `string`: String data to inspect or redact.

### GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest
* GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest `object`: Request message for CreateDeidentifyTemplate.
  * deidentifyTemplate [GooglePrivacyDlpV2beta2DeidentifyTemplate](#googleprivacydlpv2beta2deidentifytemplate)
  * templateId `string`: The template id can contain uppercase and lowercase letters,

### GooglePrivacyDlpV2beta2CreateInspectTemplateRequest
* GooglePrivacyDlpV2beta2CreateInspectTemplateRequest `object`: Request message for CreateInspectTemplate.
  * inspectTemplate [GooglePrivacyDlpV2beta2InspectTemplate](#googleprivacydlpv2beta2inspecttemplate)
  * templateId `string`: The template id can contain uppercase and lowercase letters,

### GooglePrivacyDlpV2beta2CreateJobTriggerRequest
* GooglePrivacyDlpV2beta2CreateJobTriggerRequest `object`: Request message for CreateJobTrigger.
  * jobTrigger [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)
  * triggerId `string`: The trigger id can contain uppercase and lowercase letters,

### GooglePrivacyDlpV2beta2CryptoHashConfig
* GooglePrivacyDlpV2beta2CryptoHashConfig `object`: Pseudonymization method that generates surrogates via cryptographic hashing.
  * cryptoKey [GooglePrivacyDlpV2beta2CryptoKey](#googleprivacydlpv2beta2cryptokey)

### GooglePrivacyDlpV2beta2CryptoKey
* GooglePrivacyDlpV2beta2CryptoKey `object`: This is a data encryption key (DEK) (as opposed to
  * kmsWrapped [GooglePrivacyDlpV2beta2KmsWrappedCryptoKey](#googleprivacydlpv2beta2kmswrappedcryptokey)
  * transient [GooglePrivacyDlpV2beta2TransientCryptoKey](#googleprivacydlpv2beta2transientcryptokey)
  * unwrapped [GooglePrivacyDlpV2beta2UnwrappedCryptoKey](#googleprivacydlpv2beta2unwrappedcryptokey)

### GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig
* GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig `object`: Replaces an identifier with a surrogate using FPE with the FFX
  * commonAlphabet `string` (values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC)
  * context [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * cryptoKey [GooglePrivacyDlpV2beta2CryptoKey](#googleprivacydlpv2beta2cryptokey)
  * customAlphabet `string`: This is supported by mapping these to the alphanumeric characters
  * radix `integer`: The native way to select the alphabet. Must be in the range [2, 62].
  * surrogateInfoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)

### GooglePrivacyDlpV2beta2CustomInfoType
* GooglePrivacyDlpV2beta2CustomInfoType `object`: Custom information type provided by the user. Used to find domain-specific
  * detectionRules `array`: Set of detection rules to apply to all findings of this custom info type.
    * items [GooglePrivacyDlpV2beta2DetectionRule](#googleprivacydlpv2beta2detectionrule)
  * dictionary [GooglePrivacyDlpV2beta2Dictionary](#googleprivacydlpv2beta2dictionary)
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * likelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood to return for this custom info type. This base value can be
  * regex [GooglePrivacyDlpV2beta2Regex](#googleprivacydlpv2beta2regex)
  * surrogateType [GooglePrivacyDlpV2beta2SurrogateType](#googleprivacydlpv2beta2surrogatetype)

### GooglePrivacyDlpV2beta2DatastoreKey
* GooglePrivacyDlpV2beta2DatastoreKey `object`: Record key for a finding in Cloud Datastore.
  * entityKey [GooglePrivacyDlpV2beta2Key](#googleprivacydlpv2beta2key)

### GooglePrivacyDlpV2beta2DatastoreOptions
* GooglePrivacyDlpV2beta2DatastoreOptions `object`: Options defining a data set within Google Cloud Datastore.
  * kind [GooglePrivacyDlpV2beta2KindExpression](#googleprivacydlpv2beta2kindexpression)
  * partitionId [GooglePrivacyDlpV2beta2PartitionId](#googleprivacydlpv2beta2partitionid)

### GooglePrivacyDlpV2beta2DateShiftConfig
* GooglePrivacyDlpV2beta2DateShiftConfig `object`: Shifts dates by random number of days, with option to be consistent for the
  * context [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * cryptoKey [GooglePrivacyDlpV2beta2CryptoKey](#googleprivacydlpv2beta2cryptokey)
  * lowerBoundDays `integer`: For example, -5 means shift date to at most 5 days back in the past.
  * upperBoundDays `integer`: Range of shift in days. Actual shift will be selected at random within this

### GooglePrivacyDlpV2beta2DateTime
* GooglePrivacyDlpV2beta2DateTime `object`: Message for a date time object.
  * date [GoogleTypeDate](#googletypedate)
  * dayOfWeek `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)
  * time [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timeZone [GooglePrivacyDlpV2beta2TimeZone](#googleprivacydlpv2beta2timezone)

### GooglePrivacyDlpV2beta2DeidentifyConfig
* GooglePrivacyDlpV2beta2DeidentifyConfig `object`: The configuration that controls how the data will change.
  * infoTypeTransformations [GooglePrivacyDlpV2beta2InfoTypeTransformations](#googleprivacydlpv2beta2infotypetransformations)
  * recordTransformations [GooglePrivacyDlpV2beta2RecordTransformations](#googleprivacydlpv2beta2recordtransformations)

### GooglePrivacyDlpV2beta2DeidentifyContentRequest
* GooglePrivacyDlpV2beta2DeidentifyContentRequest `object`: Request to de-identify a list of items.
  * deidentifyConfig [GooglePrivacyDlpV2beta2DeidentifyConfig](#googleprivacydlpv2beta2deidentifyconfig)
  * deidentifyTemplateName `string`: Optional template to use. Any configuration directly specified in
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)
  * inspectTemplateName `string`: Optional template to use. Any configuration directly specified in
  * item [GooglePrivacyDlpV2beta2ContentItem](#googleprivacydlpv2beta2contentitem)

### GooglePrivacyDlpV2beta2DeidentifyContentResponse
* GooglePrivacyDlpV2beta2DeidentifyContentResponse `object`: Results of de-identifying a ContentItem.
  * item [GooglePrivacyDlpV2beta2ContentItem](#googleprivacydlpv2beta2contentitem)
  * overview [GooglePrivacyDlpV2beta2TransformationOverview](#googleprivacydlpv2beta2transformationoverview)

### GooglePrivacyDlpV2beta2DeidentifyTemplate
* GooglePrivacyDlpV2beta2DeidentifyTemplate `object`: The DeidentifyTemplates contains instructions on how to deidentify content.
  * createTime `string`: The creation timestamp of a inspectTemplate, output only field.
  * deidentifyConfig [GooglePrivacyDlpV2beta2DeidentifyConfig](#googleprivacydlpv2beta2deidentifyconfig)
  * description `string`: Short description (max 256 chars).
  * displayName `string`: Display name (max 256 chars).
  * name `string`: The template name. Output only.
  * updateTime `string`: The last update timestamp of a inspectTemplate, output only field.

### GooglePrivacyDlpV2beta2DetectionRule
* GooglePrivacyDlpV2beta2DetectionRule `object`: Rule for modifying a custom info type to alter behavior under certain
  * hotwordRule [GooglePrivacyDlpV2beta2HotwordRule](#googleprivacydlpv2beta2hotwordrule)

### GooglePrivacyDlpV2beta2Dictionary
* GooglePrivacyDlpV2beta2Dictionary `object`: Custom information type based on a dictionary of words or phrases. This can
  * wordList [GooglePrivacyDlpV2beta2WordList](#googleprivacydlpv2beta2wordlist)

### GooglePrivacyDlpV2beta2DlpJob
* GooglePrivacyDlpV2beta2DlpJob `object`: Combines all of the information about a DLP job.
  * createTime `string`: Time when the job was created.
  * endTime `string`: Time when the job finished.
  * errorResults `array`: A stream of errors encountered running the job.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * inspectDetails [GooglePrivacyDlpV2beta2InspectDataSourceDetails](#googleprivacydlpv2beta2inspectdatasourcedetails)
  * jobTriggerName `string`: If created by a job trigger, the resource name of the trigger that
  * name `string`: The server-assigned name.
  * riskDetails [GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails](#googleprivacydlpv2beta2analyzedatasourceriskdetails)
  * startTime `string`: Time when the job started.
  * state `string` (values: JOB_STATE_UNSPECIFIED, PENDING, RUNNING, DONE, CANCELED, FAILED): State of a job.
  * type `string` (values: DLP_JOB_TYPE_UNSPECIFIED, INSPECT_JOB, RISK_ANALYSIS_JOB): The type of job.

### GooglePrivacyDlpV2beta2EntityId
* GooglePrivacyDlpV2beta2EntityId `object`: An entity in a dataset is a field or set of fields that correspond to a
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2Error
* GooglePrivacyDlpV2beta2Error `object`: The results of an unsuccessful activation of the JobTrigger.
  * details [GoogleRpcStatus](#googlerpcstatus)
  * timestamps `array`: The times the error occurred.
    * items `string`

### GooglePrivacyDlpV2beta2Expressions
* GooglePrivacyDlpV2beta2Expressions `object`: An expression, consisting or an operator and conditions.
  * conditions [GooglePrivacyDlpV2beta2Conditions](#googleprivacydlpv2beta2conditions)
  * logicalOperator `string` (values: LOGICAL_OPERATOR_UNSPECIFIED, AND): The operator to apply to the result of conditions. Default and currently

### GooglePrivacyDlpV2beta2FieldId
* GooglePrivacyDlpV2beta2FieldId `object`: General identifier of a data field in a storage service.
  * name `string`: Name describing the field.

### GooglePrivacyDlpV2beta2FieldTransformation
* GooglePrivacyDlpV2beta2FieldTransformation `object`: The transformation to apply to the field.
  * condition [GooglePrivacyDlpV2beta2RecordCondition](#googleprivacydlpv2beta2recordcondition)
  * fields `array`: Input field(s) to apply the transformation to. [required]
    * items [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * infoTypeTransformations [GooglePrivacyDlpV2beta2InfoTypeTransformations](#googleprivacydlpv2beta2infotypetransformations)
  * primitiveTransformation [GooglePrivacyDlpV2beta2PrimitiveTransformation](#googleprivacydlpv2beta2primitivetransformation)

### GooglePrivacyDlpV2beta2FileSet
* GooglePrivacyDlpV2beta2FileSet `object`: Set of files to scan.
  * url `string`: The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the

### GooglePrivacyDlpV2beta2Finding
* GooglePrivacyDlpV2beta2Finding `object`: Represents a piece of potentially sensitive content.
  * createTime `string`: Timestamp when finding was detected.
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * likelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Estimate of how likely it is that the `info_type` is correct.
  * location [GooglePrivacyDlpV2beta2Location](#googleprivacydlpv2beta2location)
  * quote `string`: The content that was found. Even if the content is not textual, it
  * quoteInfo [GooglePrivacyDlpV2beta2QuoteInfo](#googleprivacydlpv2beta2quoteinfo)

### GooglePrivacyDlpV2beta2FindingLimits
* GooglePrivacyDlpV2beta2FindingLimits `object`
  * maxFindingsPerInfoType `array`: Configuration of findings limit given for specified infoTypes.
    * items [GooglePrivacyDlpV2beta2InfoTypeLimit](#googleprivacydlpv2beta2infotypelimit)
  * maxFindingsPerItem `integer`: Max number of findings that will be returned for each item scanned.
  * maxFindingsPerRequest `integer`: Max number of findings that will be returned per request/job.

### GooglePrivacyDlpV2beta2FixedSizeBucketingConfig
* GooglePrivacyDlpV2beta2FixedSizeBucketingConfig `object`: Buckets values based on fixed size ranges. The
  * bucketSize `number`: Size of each bucket (except for minimum and maximum buckets). So if
  * lowerBound [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * upperBound [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2HotwordRule
* GooglePrivacyDlpV2beta2HotwordRule `object`: Detection rule that adjusts the likelihood of findings within a certain
  * hotwordRegex [GooglePrivacyDlpV2beta2Regex](#googleprivacydlpv2beta2regex)
  * likelihoodAdjustment [GooglePrivacyDlpV2beta2LikelihoodAdjustment](#googleprivacydlpv2beta2likelihoodadjustment)
  * proximity [GooglePrivacyDlpV2beta2Proximity](#googleprivacydlpv2beta2proximity)

### GooglePrivacyDlpV2beta2ImageLocation
* GooglePrivacyDlpV2beta2ImageLocation `object`: Bounding box encompassing detected text within an image.
  * height `integer`: Height of the bounding box in pixels.
  * left `integer`: Left coordinate of the bounding box. (0,0) is upper left.
  * top `integer`: Top coordinate of the bounding box. (0,0) is upper left.
  * width `integer`: Width of the bounding box in pixels.

### GooglePrivacyDlpV2beta2ImageRedactionConfig
* GooglePrivacyDlpV2beta2ImageRedactionConfig `object`: Configuration for determining how redaction of images should occur.
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * redactAllText `boolean`: If true, all text found in the image, regardless whether it matches an
  * redactionColor [GooglePrivacyDlpV2beta2Color](#googleprivacydlpv2beta2color)

### GooglePrivacyDlpV2beta2InfoType
* GooglePrivacyDlpV2beta2InfoType `object`: Type of information detected by the API.
  * name `string`: Name of the information type.

### GooglePrivacyDlpV2beta2InfoTypeDescription
* GooglePrivacyDlpV2beta2InfoTypeDescription `object`: InfoType description.
  * displayName `string`: Human readable form of the infoType name.
  * name `string`: Internal name of the infoType.
  * supportedBy `array`: Which parts of the API supports this InfoType.
    * items `string` (values: ENUM_TYPE_UNSPECIFIED, INSPECT, RISK_ANALYSIS)

### GooglePrivacyDlpV2beta2InfoTypeLimit
* GooglePrivacyDlpV2beta2InfoTypeLimit `object`: Max findings configuration per infoType, per content item or long
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * maxFindings `integer`: Max findings limit for the given infoType.

### GooglePrivacyDlpV2beta2InfoTypeStatistics
* GooglePrivacyDlpV2beta2InfoTypeStatistics `object`: Statistics regarding a specific InfoType.
  * count `string`: Number of findings for this infoType.
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)

### GooglePrivacyDlpV2beta2InfoTypeTransformation
* GooglePrivacyDlpV2beta2InfoTypeTransformation `object`: A transformation to apply to text that is identified as a specific
  * infoTypes `array`: InfoTypes to apply the transformation to. Empty list will match all
    * items [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * primitiveTransformation [GooglePrivacyDlpV2beta2PrimitiveTransformation](#googleprivacydlpv2beta2primitivetransformation)

### GooglePrivacyDlpV2beta2InfoTypeTransformations
* GooglePrivacyDlpV2beta2InfoTypeTransformations `object`: A type of transformation that will scan unstructured text and
  * transformations `array`: Transformation for each infoType. Cannot specify more than one
    * items [GooglePrivacyDlpV2beta2InfoTypeTransformation](#googleprivacydlpv2beta2infotypetransformation)

### GooglePrivacyDlpV2beta2InspectConfig
* GooglePrivacyDlpV2beta2InspectConfig `object`: Configuration description of the scanning process.
  * customInfoTypes `array`: Custom infoTypes provided by the user.
    * items [GooglePrivacyDlpV2beta2CustomInfoType](#googleprivacydlpv2beta2custominfotype)
  * excludeInfoTypes `boolean`: When true, excludes type information of the findings.
  * includeQuote `boolean`: When true, a contextual quote from the data that triggered a finding is
  * infoTypes `array`: Restricts what info_types to look for. The values must correspond to
    * items [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * limits [GooglePrivacyDlpV2beta2FindingLimits](#googleprivacydlpv2beta2findinglimits)
  * minLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Only returns findings equal or above this threshold. The default is

### GooglePrivacyDlpV2beta2InspectContentRequest
* GooglePrivacyDlpV2beta2InspectContentRequest `object`: Request to search for potentially sensitive info in a ContentItem.
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)
  * inspectTemplateName `string`: Optional template to use. Any configuration directly specified in
  * item [GooglePrivacyDlpV2beta2ContentItem](#googleprivacydlpv2beta2contentitem)

### GooglePrivacyDlpV2beta2InspectContentResponse
* GooglePrivacyDlpV2beta2InspectContentResponse `object`: Results of inspecting an item.
  * result [GooglePrivacyDlpV2beta2InspectResult](#googleprivacydlpv2beta2inspectresult)

### GooglePrivacyDlpV2beta2InspectDataSourceDetails
* GooglePrivacyDlpV2beta2InspectDataSourceDetails `object`: The results of an inspect DataSource job.
  * requestedOptions [GooglePrivacyDlpV2beta2RequestedOptions](#googleprivacydlpv2beta2requestedoptions)
  * result [GooglePrivacyDlpV2beta2Result](#googleprivacydlpv2beta2result)

### GooglePrivacyDlpV2beta2InspectDataSourceRequest
* GooglePrivacyDlpV2beta2InspectDataSourceRequest `object`: Request for scheduling a scan of a data subset from a Google Platform data
  * jobConfig [GooglePrivacyDlpV2beta2InspectJobConfig](#googleprivacydlpv2beta2inspectjobconfig)
  * jobId `string`: Optional job ID to use for the created job. If not provided, a job ID will

### GooglePrivacyDlpV2beta2InspectJobConfig
* GooglePrivacyDlpV2beta2InspectJobConfig `object`
  * actions `array`: Actions to execute at the completion of the job. Are executed in the order
    * items [GooglePrivacyDlpV2beta2Action](#googleprivacydlpv2beta2action)
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)
  * inspectTemplateName `string`: If provided, will be used as the default for all values in InspectConfig.
  * outputConfig [GooglePrivacyDlpV2beta2OutputStorageConfig](#googleprivacydlpv2beta2outputstorageconfig)
  * storageConfig [GooglePrivacyDlpV2beta2StorageConfig](#googleprivacydlpv2beta2storageconfig)

### GooglePrivacyDlpV2beta2InspectResult
* GooglePrivacyDlpV2beta2InspectResult `object`: All the findings for a single scanned item.
  * findings `array`: List of findings for an item.
    * items [GooglePrivacyDlpV2beta2Finding](#googleprivacydlpv2beta2finding)
  * findingsTruncated `boolean`: If true, then this item might have more findings than were returned,

### GooglePrivacyDlpV2beta2InspectTemplate
* GooglePrivacyDlpV2beta2InspectTemplate `object`: The inspectTemplate contains a configuration (set of types of sensitive data
  * createTime `string`: The creation timestamp of a inspectTemplate, output only field.
  * description `string`: Short description (max 256 chars).
  * displayName `string`: Display name (max 256 chars).
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)
  * name `string`: The template name. Output only.
  * updateTime `string`: The last update timestamp of a inspectTemplate, output only field.

### GooglePrivacyDlpV2beta2JobTrigger
* GooglePrivacyDlpV2beta2JobTrigger `object`: Contains a configuration to make dlp api calls on a repeating basis.
  * createTime `string`: The creation timestamp of a triggeredJob, output only field.
  * description `string`: User provided description (max 256 chars)
  * displayName `string`: Display name (max 100 chars)
  * errors `array`: A stream of errors encountered when the trigger was activated. Repeated
    * items [GooglePrivacyDlpV2beta2Error](#googleprivacydlpv2beta2error)
  * inspectJob [GooglePrivacyDlpV2beta2InspectJobConfig](#googleprivacydlpv2beta2inspectjobconfig)
  * lastRunTime `string`: The timestamp of the last time this trigger executed.
  * name `string`: Unique resource name for the triggeredJob, assigned by the service when the
  * status `string` (values: STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED): A status for this trigger. [required]
  * triggers `array`: A list of triggers which will be OR'ed together. Only one in the list
    * items [GooglePrivacyDlpV2beta2Trigger](#googleprivacydlpv2beta2trigger)
  * updateTime `string`: The last update timestamp of a triggeredJob, output only field.

### GooglePrivacyDlpV2beta2KAnonymityConfig
* GooglePrivacyDlpV2beta2KAnonymityConfig `object`: k-anonymity metric, used for analysis of reidentification risk.
  * entityId [GooglePrivacyDlpV2beta2EntityId](#googleprivacydlpv2beta2entityid)
  * quasiIds `array`: Set of fields to compute k-anonymity over. When multiple fields are
    * items [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass
* GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass `object`: The set of columns' values that share the same ldiversity value
  * equivalenceClassSize `string`: Size of the equivalence class, for example number of rows with the
  * quasiIdsValues `array`: Set of values defining the equivalence class. One value per
    * items [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2KAnonymityHistogramBucket
* GooglePrivacyDlpV2beta2KAnonymityHistogramBucket `object`
  * bucketSize `string`: Total number of equivalence classes in this bucket.
  * bucketValueCount `string`: Total number of distinct equivalence classes in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass](#googleprivacydlpv2beta2kanonymityequivalenceclass)
  * equivalenceClassSizeLowerBound `string`: Lower bound on the size of the equivalence classes in this bucket.
  * equivalenceClassSizeUpperBound `string`: Upper bound on the size of the equivalence classes in this bucket.

### GooglePrivacyDlpV2beta2KAnonymityResult
* GooglePrivacyDlpV2beta2KAnonymityResult `object`: Result of the k-anonymity computation.
  * equivalenceClassHistogramBuckets `array`: Histogram of k-anonymity equivalence classes.
    * items [GooglePrivacyDlpV2beta2KAnonymityHistogramBucket](#googleprivacydlpv2beta2kanonymityhistogrambucket)

### GooglePrivacyDlpV2beta2KMapEstimationConfig
* GooglePrivacyDlpV2beta2KMapEstimationConfig `object`: Reidentifiability metric. This corresponds to a risk model similar to what
  * auxiliaryTables `array`: Several auxiliary tables can be used in the analysis. Each custom_tag
    * items [GooglePrivacyDlpV2beta2AuxiliaryTable](#googleprivacydlpv2beta2auxiliarytable)
  * quasiIds `array`: Fields considered to be quasi-identifiers. No two columns can have the
    * items [GooglePrivacyDlpV2beta2TaggedField](#googleprivacydlpv2beta2taggedfield)
  * regionCode `string`: ISO 3166-1 alpha-2 region code to use in the statistical modeling.

### GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket
* GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket `object`: A KMapEstimationHistogramBucket message with the following values:
  * bucketSize `string`: Number of records within these anonymity bounds.
  * bucketValueCount `string`: Total number of distinct quasi-identifier tuple values in this bucket.
  * bucketValues `array`: Sample of quasi-identifier tuple values in this bucket. The total
    * items [GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues](#googleprivacydlpv2beta2kmapestimationquasiidvalues)
  * maxAnonymity `string`: Always greater than or equal to min_anonymity.
  * minAnonymity `string`: Always positive.

### GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues
* GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues `object`: A tuple of values for the quasi-identifier columns.
  * estimatedAnonymity `string`: The estimated anonymity for these quasi-identifier values.
  * quasiIdsValues `array`: The quasi-identifier values.
    * items [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2KMapEstimationResult
* GooglePrivacyDlpV2beta2KMapEstimationResult `object`: Result of the reidentifiability analysis. Note that these results are an
  * kMapEstimationHistogram `array`: The intervals [min_anonymity, max_anonymity] do not overlap. If a value
    * items [GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket](#googleprivacydlpv2beta2kmapestimationhistogrambucket)

### GooglePrivacyDlpV2beta2Key
* GooglePrivacyDlpV2beta2Key `object`: A unique identifier for a Datastore entity.
  * partitionId [GooglePrivacyDlpV2beta2PartitionId](#googleprivacydlpv2beta2partitionid)
  * path `array`: The entity path.
    * items [GooglePrivacyDlpV2beta2PathElement](#googleprivacydlpv2beta2pathelement)

### GooglePrivacyDlpV2beta2KindExpression
* GooglePrivacyDlpV2beta2KindExpression `object`: A representation of a Datastore kind.
  * name `string`: The name of the kind.

### GooglePrivacyDlpV2beta2KmsWrappedCryptoKey
* GooglePrivacyDlpV2beta2KmsWrappedCryptoKey `object`: Include to use an existing data crypto key wrapped by KMS.
  * cryptoKeyName `string`: The resource name of the KMS CryptoKey to use for unwrapping. [required]
  * wrappedKey `string`: The wrapped data crypto key. [required]

### GooglePrivacyDlpV2beta2LDiversityConfig
* GooglePrivacyDlpV2beta2LDiversityConfig `object`: l-diversity metric, used for analysis of reidentification risk.
  * quasiIds `array`: Set of quasi-identifiers indicating how equivalence classes are
    * items [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * sensitiveAttribute [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2LDiversityEquivalenceClass
* GooglePrivacyDlpV2beta2LDiversityEquivalenceClass `object`: The set of columns' values that share the same ldiversity value.
  * equivalenceClassSize `string`: Size of the k-anonymity equivalence class.
  * numDistinctSensitiveValues `string`: Number of distinct sensitive values in this equivalence class.
  * quasiIdsValues `array`: Quasi-identifier values defining the k-anonymity equivalence
    * items [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * topSensitiveValues `array`: Estimated frequencies of top sensitive values.
    * items [GooglePrivacyDlpV2beta2ValueFrequency](#googleprivacydlpv2beta2valuefrequency)

### GooglePrivacyDlpV2beta2LDiversityHistogramBucket
* GooglePrivacyDlpV2beta2LDiversityHistogramBucket `object`
  * bucketSize `string`: Total number of equivalence classes in this bucket.
  * bucketValueCount `string`: Total number of distinct equivalence classes in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta2LDiversityEquivalenceClass](#googleprivacydlpv2beta2ldiversityequivalenceclass)
  * sensitiveValueFrequencyLowerBound `string`: Lower bound on the sensitive value frequencies of the equivalence
  * sensitiveValueFrequencyUpperBound `string`: Upper bound on the sensitive value frequencies of the equivalence

### GooglePrivacyDlpV2beta2LDiversityResult
* GooglePrivacyDlpV2beta2LDiversityResult `object`: Result of the l-diversity computation.
  * sensitiveValueFrequencyHistogramBuckets `array`: Histogram of l-diversity equivalence class sensitive value frequencies.
    * items [GooglePrivacyDlpV2beta2LDiversityHistogramBucket](#googleprivacydlpv2beta2ldiversityhistogrambucket)

### GooglePrivacyDlpV2beta2LikelihoodAdjustment
* GooglePrivacyDlpV2beta2LikelihoodAdjustment `object`: Message for specifying an adjustment to the likelihood of a finding as
  * fixedLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Set the likelihood of a finding to a fixed value.
  * relativeLikelihood `integer`: Increase or decrease the likelihood by the specified number of

### GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse
* GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse `object`: Response message for ListDeidentifyTemplates.
  * deidentifyTemplates `array`: List of deidentify templates, up to page_size in
    * items [GooglePrivacyDlpV2beta2DeidentifyTemplate](#googleprivacydlpv2beta2deidentifytemplate)
  * nextPageToken `string`: If the next page is available then the next page token to be used

### GooglePrivacyDlpV2beta2ListDlpJobsResponse
* GooglePrivacyDlpV2beta2ListDlpJobsResponse `object`: The response message for listing DLP jobs.
  * jobs `array`: A list of DlpJobs that matches the specified filter in the request.
    * items [GooglePrivacyDlpV2beta2DlpJob](#googleprivacydlpv2beta2dlpjob)
  * nextPageToken `string`: The standard List next-page token.

### GooglePrivacyDlpV2beta2ListInfoTypesResponse
* GooglePrivacyDlpV2beta2ListInfoTypesResponse `object`: Response to the ListInfoTypes request.
  * infoTypes `array`: Set of sensitive infoTypes.
    * items [GooglePrivacyDlpV2beta2InfoTypeDescription](#googleprivacydlpv2beta2infotypedescription)

### GooglePrivacyDlpV2beta2ListInspectTemplatesResponse
* GooglePrivacyDlpV2beta2ListInspectTemplatesResponse `object`: Response message for ListInspectTemplates.
  * inspectTemplates `array`: List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
    * items [GooglePrivacyDlpV2beta2InspectTemplate](#googleprivacydlpv2beta2inspecttemplate)
  * nextPageToken `string`: If the next page is available then the next page token to be used

### GooglePrivacyDlpV2beta2ListJobTriggersResponse
* GooglePrivacyDlpV2beta2ListJobTriggersResponse `object`: Response message for ListJobTriggers.
  * jobTriggers `array`: List of triggeredJobs, up to page_size in ListJobTriggersRequest.
    * items [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)
  * nextPageToken `string`: If the next page is available then the next page token to be used

### GooglePrivacyDlpV2beta2Location
* GooglePrivacyDlpV2beta2Location `object`: Specifies the location of the finding.
  * byteRange [GooglePrivacyDlpV2beta2Range](#googleprivacydlpv2beta2range)
  * codepointRange [GooglePrivacyDlpV2beta2Range](#googleprivacydlpv2beta2range)
  * fieldId [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * imageBoxes `array`: The area within the image that contained the finding.
    * items [GooglePrivacyDlpV2beta2ImageLocation](#googleprivacydlpv2beta2imagelocation)
  * recordKey [GooglePrivacyDlpV2beta2RecordKey](#googleprivacydlpv2beta2recordkey)
  * tableLocation [GooglePrivacyDlpV2beta2TableLocation](#googleprivacydlpv2beta2tablelocation)

### GooglePrivacyDlpV2beta2NumericalStatsConfig
* GooglePrivacyDlpV2beta2NumericalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2NumericalStatsResult
* GooglePrivacyDlpV2beta2NumericalStatsResult `object`: Result of the numerical stats computation.
  * maxValue [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * minValue [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)
  * quantileValues `array`: List of 99 values that partition the set of field values into 100 equal
    * items [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2OutputStorageConfig
* GooglePrivacyDlpV2beta2OutputStorageConfig `object`: Cloud repository for storing output.
  * outputSchema `string` (values: OUTPUT_SCHEMA_UNSPECIFIED, BASIC_COLUMNS, GCS_COLUMNS, DATASTORE_COLUMNS, BIG_QUERY_COLUMNS, ALL_COLUMNS): Schema used for writing the findings. Columns are derived from the
  * table [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2PartitionId
* GooglePrivacyDlpV2beta2PartitionId `object`: Datastore partition ID.
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### GooglePrivacyDlpV2beta2PathElement
* GooglePrivacyDlpV2beta2PathElement `object`: A (kind, ID/name) pair used to construct a key path.
  * id `string`: The auto-allocated ID of the entity.
  * kind `string`: The kind of the entity.
  * name `string`: The name of the entity.

### GooglePrivacyDlpV2beta2PrimitiveTransformation
* GooglePrivacyDlpV2beta2PrimitiveTransformation `object`: A rule for transforming a value.
  * bucketingConfig [GooglePrivacyDlpV2beta2BucketingConfig](#googleprivacydlpv2beta2bucketingconfig)
  * characterMaskConfig [GooglePrivacyDlpV2beta2CharacterMaskConfig](#googleprivacydlpv2beta2charactermaskconfig)
  * cryptoHashConfig [GooglePrivacyDlpV2beta2CryptoHashConfig](#googleprivacydlpv2beta2cryptohashconfig)
  * cryptoReplaceFfxFpeConfig [GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig](#googleprivacydlpv2beta2cryptoreplaceffxfpeconfig)
  * dateShiftConfig [GooglePrivacyDlpV2beta2DateShiftConfig](#googleprivacydlpv2beta2dateshiftconfig)
  * fixedSizeBucketingConfig [GooglePrivacyDlpV2beta2FixedSizeBucketingConfig](#googleprivacydlpv2beta2fixedsizebucketingconfig)
  * redactConfig [GooglePrivacyDlpV2beta2RedactConfig](#googleprivacydlpv2beta2redactconfig)
  * replaceConfig [GooglePrivacyDlpV2beta2ReplaceValueConfig](#googleprivacydlpv2beta2replacevalueconfig)
  * replaceWithInfoTypeConfig [GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig](#googleprivacydlpv2beta2replacewithinfotypeconfig)
  * timePartConfig [GooglePrivacyDlpV2beta2TimePartConfig](#googleprivacydlpv2beta2timepartconfig)

### GooglePrivacyDlpV2beta2PrivacyMetric
* GooglePrivacyDlpV2beta2PrivacyMetric `object`: Privacy metric to compute for reidentification risk analysis.
  * categoricalStatsConfig [GooglePrivacyDlpV2beta2CategoricalStatsConfig](#googleprivacydlpv2beta2categoricalstatsconfig)
  * kAnonymityConfig [GooglePrivacyDlpV2beta2KAnonymityConfig](#googleprivacydlpv2beta2kanonymityconfig)
  * kMapEstimationConfig [GooglePrivacyDlpV2beta2KMapEstimationConfig](#googleprivacydlpv2beta2kmapestimationconfig)
  * lDiversityConfig [GooglePrivacyDlpV2beta2LDiversityConfig](#googleprivacydlpv2beta2ldiversityconfig)
  * numericalStatsConfig [GooglePrivacyDlpV2beta2NumericalStatsConfig](#googleprivacydlpv2beta2numericalstatsconfig)

### GooglePrivacyDlpV2beta2Proximity
* GooglePrivacyDlpV2beta2Proximity `object`: Message for specifying a window around a finding to apply a detection
  * windowAfter `integer`: Number of characters after the finding to consider.
  * windowBefore `integer`: Number of characters before the finding to consider.

### GooglePrivacyDlpV2beta2PublishToPubSub
* GooglePrivacyDlpV2beta2PublishToPubSub `object`: Publish the results of a DlpJob to a pub sub channel.
  * topic `string`: Cloud Pub/Sub topic to send notifications to. The topic must have given

### GooglePrivacyDlpV2beta2QuasiIdField
* GooglePrivacyDlpV2beta2QuasiIdField `object`: A quasi-identifier column has a custom_tag, used to know which column
  * customTag `string`
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)

### GooglePrivacyDlpV2beta2QuoteInfo
* GooglePrivacyDlpV2beta2QuoteInfo `object`: Message for infoType-dependent details parsed from quote.
  * dateTime [GooglePrivacyDlpV2beta2DateTime](#googleprivacydlpv2beta2datetime)

### GooglePrivacyDlpV2beta2Range
* GooglePrivacyDlpV2beta2Range `object`: Generic half-open interval [start, end)
  * end `string`: Index of the last character of the range (exclusive).
  * start `string`: Index of the first character of the range (inclusive).

### GooglePrivacyDlpV2beta2RecordCondition
* GooglePrivacyDlpV2beta2RecordCondition `object`: A condition for determining whether a transformation should be applied to
  * expressions [GooglePrivacyDlpV2beta2Expressions](#googleprivacydlpv2beta2expressions)

### GooglePrivacyDlpV2beta2RecordKey
* GooglePrivacyDlpV2beta2RecordKey `object`: Message for a unique key indicating a record that contains a finding.
  * bigQueryKey [GooglePrivacyDlpV2beta2BigQueryKey](#googleprivacydlpv2beta2bigquerykey)
  * cloudStorageKey [GooglePrivacyDlpV2beta2CloudStorageKey](#googleprivacydlpv2beta2cloudstoragekey)
  * datastoreKey [GooglePrivacyDlpV2beta2DatastoreKey](#googleprivacydlpv2beta2datastorekey)

### GooglePrivacyDlpV2beta2RecordSuppression
* GooglePrivacyDlpV2beta2RecordSuppression `object`: Configuration to suppress records whose suppression conditions evaluate to
  * condition [GooglePrivacyDlpV2beta2RecordCondition](#googleprivacydlpv2beta2recordcondition)

### GooglePrivacyDlpV2beta2RecordTransformations
* GooglePrivacyDlpV2beta2RecordTransformations `object`: A type of transformation that is applied over structured data such as a
  * fieldTransformations `array`: Transform the record by applying various field transformations.
    * items [GooglePrivacyDlpV2beta2FieldTransformation](#googleprivacydlpv2beta2fieldtransformation)
  * recordSuppressions `array`: Configuration defining which records get suppressed entirely. Records that
    * items [GooglePrivacyDlpV2beta2RecordSuppression](#googleprivacydlpv2beta2recordsuppression)

### GooglePrivacyDlpV2beta2RedactConfig
* GooglePrivacyDlpV2beta2RedactConfig `object`: Redact a given value. For example, if used with an `InfoTypeTransformation`

### GooglePrivacyDlpV2beta2RedactImageRequest
* GooglePrivacyDlpV2beta2RedactImageRequest `object`: Request to search for potentially sensitive info in a list of items
  * imageData `string`: The bytes of the image to redact.
  * imageRedactionConfigs `array`: The configuration for specifying what content to redact from images.
    * items [GooglePrivacyDlpV2beta2ImageRedactionConfig](#googleprivacydlpv2beta2imageredactionconfig)
  * imageType `string`: Type of the content, as defined in Content-Type HTTP header.
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)

### GooglePrivacyDlpV2beta2RedactImageResponse
* GooglePrivacyDlpV2beta2RedactImageResponse `object`: Results of redacting an image.
  * extractedText `string`: If an image was being inspected and the InspectConfig's include_quote was
  * redactedImage `string`: The redacted image. The type will be the same as the original image.

### GooglePrivacyDlpV2beta2Regex
* GooglePrivacyDlpV2beta2Regex `object`: Message defining a custom regular expression.
  * pattern `string`: Pattern defining the regular expression.

### GooglePrivacyDlpV2beta2ReidentifyContentRequest
* GooglePrivacyDlpV2beta2ReidentifyContentRequest `object`: Request to re-identify an item.
  * inspectConfig [GooglePrivacyDlpV2beta2InspectConfig](#googleprivacydlpv2beta2inspectconfig)
  * inspectTemplateName `string`: Optional template to use. Any configuration directly specified in
  * item [GooglePrivacyDlpV2beta2ContentItem](#googleprivacydlpv2beta2contentitem)
  * reidentifyConfig [GooglePrivacyDlpV2beta2DeidentifyConfig](#googleprivacydlpv2beta2deidentifyconfig)
  * reidentifyTemplateName `string`: Optional template to use. References an instance of `DeidentifyTemplate`.

### GooglePrivacyDlpV2beta2ReidentifyContentResponse
* GooglePrivacyDlpV2beta2ReidentifyContentResponse `object`: Results of re-identifying a item.
  * item [GooglePrivacyDlpV2beta2ContentItem](#googleprivacydlpv2beta2contentitem)
  * overview [GooglePrivacyDlpV2beta2TransformationOverview](#googleprivacydlpv2beta2transformationoverview)

### GooglePrivacyDlpV2beta2ReplaceValueConfig
* GooglePrivacyDlpV2beta2ReplaceValueConfig `object`: Replace each input value with a given `Value`.
  * newValue [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig
* GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig `object`: Replace each matching finding with the name of the info_type.

### GooglePrivacyDlpV2beta2RequestedOptions
* GooglePrivacyDlpV2beta2RequestedOptions `object`
  * jobConfig [GooglePrivacyDlpV2beta2InspectJobConfig](#googleprivacydlpv2beta2inspectjobconfig)
  * snapshotInspectTemplate [GooglePrivacyDlpV2beta2InspectTemplate](#googleprivacydlpv2beta2inspecttemplate)

### GooglePrivacyDlpV2beta2Result
* GooglePrivacyDlpV2beta2Result `object`
  * infoTypeStats `array`: Statistics of how many instances of each info type were found during
    * items [GooglePrivacyDlpV2beta2InfoTypeStatistics](#googleprivacydlpv2beta2infotypestatistics)
  * processedBytes `string`: Total size in bytes that were processed.
  * totalEstimatedBytes `string`: Estimate of the number of bytes to process.

### GooglePrivacyDlpV2beta2RiskAnalysisJobConfig
* GooglePrivacyDlpV2beta2RiskAnalysisJobConfig `object`: Configuration for a risk analysis job.
  * actions `array`: Actions to execute at the completion of the job. Are executed in the order
    * items [GooglePrivacyDlpV2beta2Action](#googleprivacydlpv2beta2action)
  * privacyMetric [GooglePrivacyDlpV2beta2PrivacyMetric](#googleprivacydlpv2beta2privacymetric)
  * sourceTable [GooglePrivacyDlpV2beta2BigQueryTable](#googleprivacydlpv2beta2bigquerytable)

### GooglePrivacyDlpV2beta2Row
* GooglePrivacyDlpV2beta2Row `object`
  * values `array`
    * items [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2SaveFindings
* GooglePrivacyDlpV2beta2SaveFindings `object`: If set, the detailed findings will be persisted to the specified
  * outputConfig [GooglePrivacyDlpV2beta2OutputStorageConfig](#googleprivacydlpv2beta2outputstorageconfig)

### GooglePrivacyDlpV2beta2Schedule
* GooglePrivacyDlpV2beta2Schedule `object`: Schedule for triggeredJobs.
  * reccurrencePeriodDuration `string`: With this option a job is started a regular periodic basis. For

### GooglePrivacyDlpV2beta2StorageConfig
* GooglePrivacyDlpV2beta2StorageConfig `object`: Shared message indicating Cloud storage type.
  * bigQueryOptions [GooglePrivacyDlpV2beta2BigQueryOptions](#googleprivacydlpv2beta2bigqueryoptions)
  * cloudStorageOptions [GooglePrivacyDlpV2beta2CloudStorageOptions](#googleprivacydlpv2beta2cloudstorageoptions)
  * datastoreOptions [GooglePrivacyDlpV2beta2DatastoreOptions](#googleprivacydlpv2beta2datastoreoptions)
  * timespanConfig [GooglePrivacyDlpV2beta2TimespanConfig](#googleprivacydlpv2beta2timespanconfig)

### GooglePrivacyDlpV2beta2SummaryResult
* GooglePrivacyDlpV2beta2SummaryResult `object`: A collection that informs the user the number of times a particular
  * code `string` (values: TRANSFORMATION_RESULT_CODE_UNSPECIFIED, SUCCESS, ERROR)
  * count `string`
  * details `string`: A place for warnings or errors to show up if a transformation didn't

### GooglePrivacyDlpV2beta2SurrogateType
* GooglePrivacyDlpV2beta2SurrogateType `object`: Message for detecting output from deidentification transformations

### GooglePrivacyDlpV2beta2Table
* GooglePrivacyDlpV2beta2Table `object`: Structured content to inspect. Up to 50,000 `Value`s per request allowed.
  * headers `array`
    * items [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * rows `array`
    * items [GooglePrivacyDlpV2beta2Row](#googleprivacydlpv2beta2row)

### GooglePrivacyDlpV2beta2TableLocation
* GooglePrivacyDlpV2beta2TableLocation `object`: Location of a finding within a table.
  * rowIndex `string`: The zero-based index of the row where the finding is located.

### GooglePrivacyDlpV2beta2TaggedField
* GooglePrivacyDlpV2beta2TaggedField `object`: A column with a semantic tag attached.
  * customTag `string`: A column can be tagged with a custom tag. In this case, the user must
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * inferred [GoogleProtobufEmpty](#googleprotobufempty)
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)

### GooglePrivacyDlpV2beta2TimePartConfig
* GooglePrivacyDlpV2beta2TimePartConfig `object`: For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
  * partToExtract `string` (values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY)

### GooglePrivacyDlpV2beta2TimeZone
* GooglePrivacyDlpV2beta2TimeZone `object`
  * offsetMinutes `integer`: Set only if the offset can be determined. Positive for time ahead of UTC.

### GooglePrivacyDlpV2beta2TimespanConfig
* GooglePrivacyDlpV2beta2TimespanConfig `object`: Configuration of the timespan of the items to include in scanning.
  * enableAutoPopulationOfTimespanConfig `boolean`: When the job is started by a JobTrigger we will automatically figure out
  * endTime `string`: Exclude files newer than this value.
  * startTime `string`: Exclude files older than this value.

### GooglePrivacyDlpV2beta2TransformationOverview
* GooglePrivacyDlpV2beta2TransformationOverview `object`: Overview of the modifications that occurred.
  * transformationSummaries `array`: Transformations applied to the dataset.
    * items [GooglePrivacyDlpV2beta2TransformationSummary](#googleprivacydlpv2beta2transformationsummary)
  * transformedBytes `string`: Total size in bytes that were transformed in some way.

### GooglePrivacyDlpV2beta2TransformationSummary
* GooglePrivacyDlpV2beta2TransformationSummary `object`: Summary of a single tranformation.
  * field [GooglePrivacyDlpV2beta2FieldId](#googleprivacydlpv2beta2fieldid)
  * fieldTransformations `array`: The field transformation that was applied.
    * items [GooglePrivacyDlpV2beta2FieldTransformation](#googleprivacydlpv2beta2fieldtransformation)
  * infoType [GooglePrivacyDlpV2beta2InfoType](#googleprivacydlpv2beta2infotype)
  * recordSuppress [GooglePrivacyDlpV2beta2RecordSuppression](#googleprivacydlpv2beta2recordsuppression)
  * results `array`
    * items [GooglePrivacyDlpV2beta2SummaryResult](#googleprivacydlpv2beta2summaryresult)
  * transformation [GooglePrivacyDlpV2beta2PrimitiveTransformation](#googleprivacydlpv2beta2primitivetransformation)
  * transformedBytes `string`: Total size in bytes that were transformed in some way.

### GooglePrivacyDlpV2beta2TransientCryptoKey
* GooglePrivacyDlpV2beta2TransientCryptoKey `object`: Use this to have a random data crypto key generated.
  * name `string`: Name of the key. [required]

### GooglePrivacyDlpV2beta2Trigger
* GooglePrivacyDlpV2beta2Trigger `object`: What event needs to occur for a new job to be started.
  * schedule [GooglePrivacyDlpV2beta2Schedule](#googleprivacydlpv2beta2schedule)

### GooglePrivacyDlpV2beta2UnwrappedCryptoKey
* GooglePrivacyDlpV2beta2UnwrappedCryptoKey `object`: Using raw keys is prone to security risks due to accidentally
  * key `string`: The AES 128/192/256 bit key. [required]

### GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest
* GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest `object`: Request message for UpdateDeidentifyTemplate.
  * deidentifyTemplate [GooglePrivacyDlpV2beta2DeidentifyTemplate](#googleprivacydlpv2beta2deidentifytemplate)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest
* GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest `object`: Request message for UpdateInspectTemplate.
  * inspectTemplate [GooglePrivacyDlpV2beta2InspectTemplate](#googleprivacydlpv2beta2inspecttemplate)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2beta2UpdateJobTriggerRequest
* GooglePrivacyDlpV2beta2UpdateJobTriggerRequest `object`: Request message for UpdateJobTrigger.
  * jobTrigger [GooglePrivacyDlpV2beta2JobTrigger](#googleprivacydlpv2beta2jobtrigger)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2beta2Value
* GooglePrivacyDlpV2beta2Value `object`: Set of primitive values supported by the system.
  * booleanValue `boolean`
  * dateValue [GoogleTypeDate](#googletypedate)
  * dayOfWeekValue `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)
  * floatValue `number`
  * integerValue `string`
  * stringValue `string`
  * timeValue [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timestampValue `string`

### GooglePrivacyDlpV2beta2ValueFrequency
* GooglePrivacyDlpV2beta2ValueFrequency `object`: A value of a field, including its frequency.
  * count `string`: How many times the value is contained in the field.
  * value [GooglePrivacyDlpV2beta2Value](#googleprivacydlpv2beta2value)

### GooglePrivacyDlpV2beta2WordList
* GooglePrivacyDlpV2beta2WordList `object`: Message defining a list of words or phrases to search for in the data.
  * words `array`: Words or phrases defining the dictionary. The dictionary must contain
    * items `string`

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### GoogleTypeDate
* GoogleTypeDate `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12, or 0 if specifying a date without a
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### GoogleTypeTimeOfDay
* GoogleTypeTimeOfDay `object`: Represents a time of day. The date and time zone are either not significant
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may


