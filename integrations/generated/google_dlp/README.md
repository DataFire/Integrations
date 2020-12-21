# @datafire/google_dlp

Client library for Cloud Data Loss Prevention (DLP) API

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

.then(data => {
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

### dlp.infoTypes.list
Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.


```js
google_dlp.dlp.infoTypes.list({}, context)
```

#### Input
* input `object`
  * filter `string`: filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
  * languageCode `string`: BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
  * locationId `string`: Deprecated. This field has no effect.
  * parent `string`: The parent resource name. The format of this value is as follows: locations/ LOCATION_ID
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
* output [GooglePrivacyDlpV2ListInfoTypesResponse](#googleprivacydlpv2listinfotypesresponse)

### dlp.projects.storedInfoTypes.delete
Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.


```js
google_dlp.dlp.projects.storedInfoTypes.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### dlp.projects.storedInfoTypes.get
Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.


```js
google_dlp.dlp.projects.storedInfoTypes.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
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
* output [GooglePrivacyDlpV2StoredInfoType](#googleprivacydlpv2storedinfotype)

### dlp.projects.storedInfoTypes.patch
Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.


```js
google_dlp.dlp.projects.storedInfoTypes.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
  * body [GooglePrivacyDlpV2UpdateStoredInfoTypeRequest](#googleprivacydlpv2updatestoredinfotyperequest)
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
* output [GooglePrivacyDlpV2StoredInfoType](#googleprivacydlpv2storedinfotype)

### dlp.projects.locations.jobTriggers.activate
Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.


```js
google_dlp.dlp.projects.locations.jobTriggers.activate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
  * body [GooglePrivacyDlpV2ActivateJobTriggerRequest](#googleprivacydlpv2activatejobtriggerrequest)
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
* output [GooglePrivacyDlpV2DlpJob](#googleprivacydlpv2dlpjob)

### dlp.projects.locations.dlpJobs.cancel
Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.


```js
google_dlp.dlp.projects.locations.dlpJobs.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the DlpJob resource to be cancelled.
  * body [GooglePrivacyDlpV2CancelDlpJobRequest](#googleprivacydlpv2canceldlpjobrequest)
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### dlp.projects.locations.dlpJobs.finish
Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run. Early access feature is in a pre-release state and might change or have limited support. For more information, see https://cloud.google.com/products#product-launch-stages.


```js
google_dlp.dlp.projects.locations.dlpJobs.finish({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the DlpJob resource to be cancelled.
  * body [GooglePrivacyDlpV2FinishDlpJobRequest](#googleprivacydlpv2finishdlpjobrequest)
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### dlp.projects.locations.jobTriggers.hybridInspect
Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger. Early access feature is in a pre-release state and might change or have limited support. For more information, see https://cloud.google.com/products#product-launch-stages.


```js
google_dlp.dlp.projects.locations.jobTriggers.hybridInspect({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the trigger to execute a hybrid inspect on, for example `projects/dlp-test-project/jobTriggers/53234423`.
  * body [GooglePrivacyDlpV2HybridInspectJobTriggerRequest](#googleprivacydlpv2hybridinspectjobtriggerrequest)
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
* output [GooglePrivacyDlpV2HybridInspectResponse](#googleprivacydlpv2hybridinspectresponse)

### dlp.projects.locations.content.deidentify
De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.


```js
google_dlp.dlp.projects.locations.content.deidentify({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2DeidentifyContentRequest](#googleprivacydlpv2deidentifycontentrequest)
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
* output [GooglePrivacyDlpV2DeidentifyContentResponse](#googleprivacydlpv2deidentifycontentresponse)

### dlp.projects.locations.content.inspect
Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,


```js
google_dlp.dlp.projects.locations.content.inspect({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2InspectContentRequest](#googleprivacydlpv2inspectcontentrequest)
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
* output [GooglePrivacyDlpV2InspectContentResponse](#googleprivacydlpv2inspectcontentresponse)

### dlp.projects.locations.content.reidentify
Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.


```js
google_dlp.dlp.projects.locations.content.reidentify({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2ReidentifyContentRequest](#googleprivacydlpv2reidentifycontentrequest)
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
* output [GooglePrivacyDlpV2ReidentifyContentResponse](#googleprivacydlpv2reidentifycontentresponse)

### dlp.projects.locations.deidentifyTemplates.list
Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.


```js
google_dlp.dlp.projects.locations.deidentifyTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * locationId `string`: Deprecated. This field has no effect.
  * orderBy `string`: Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
  * pageSize `integer`: Size of the page, can be limited by server. If zero server returns a page of max size 100.
  * pageToken `string`: Page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
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
* output [GooglePrivacyDlpV2ListDeidentifyTemplatesResponse](#googleprivacydlpv2listdeidentifytemplatesresponse)

### dlp.projects.locations.deidentifyTemplates.create
Creates a DeidentifyTemplate for re-using frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.


```js
google_dlp.dlp.projects.locations.deidentifyTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2CreateDeidentifyTemplateRequest](#googleprivacydlpv2createdeidentifytemplaterequest)
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
* output [GooglePrivacyDlpV2DeidentifyTemplate](#googleprivacydlpv2deidentifytemplate)

### dlp.projects.locations.dlpJobs.list
Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.


```js
google_dlp.dlp.projects.locations.dlpJobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * filter `string`: Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The resource name of the trigger that created job. - 'end_time` - Corresponds to time the job finished. - 'start_time` - Corresponds to time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to time the job finished. - 'start_time` - Corresponds to time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
  * locationId `string`: Deprecated. This field has no effect.
  * orderBy `string`: Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to time the job was created. - `end_time`: corresponds to time the job ended. - `name`: corresponds to job's name. - `state`: corresponds to `state`
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * type `string` (values: DLP_JOB_TYPE_UNSPECIFIED, INSPECT_JOB, RISK_ANALYSIS_JOB): The type of job. Defaults to `DlpJobType.INSPECT`
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
* output [GooglePrivacyDlpV2ListDlpJobsResponse](#googleprivacydlpv2listdlpjobsresponse)

### dlp.projects.locations.dlpJobs.create
Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.


```js
google_dlp.dlp.projects.locations.dlpJobs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2CreateDlpJobRequest](#googleprivacydlpv2createdlpjobrequest)
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
* output [GooglePrivacyDlpV2DlpJob](#googleprivacydlpv2dlpjob)

### dlp.projects.locations.image.redact
Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.


```js
google_dlp.dlp.projects.locations.image.redact({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2RedactImageRequest](#googleprivacydlpv2redactimagerequest)
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
* output [GooglePrivacyDlpV2RedactImageResponse](#googleprivacydlpv2redactimageresponse)

### dlp.locations.infoTypes.list
Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.


```js
google_dlp.dlp.locations.infoTypes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent resource name. The format of this value is as follows: locations/ LOCATION_ID
  * filter `string`: filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
  * languageCode `string`: BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
  * locationId `string`: Deprecated. This field has no effect.
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
* output [GooglePrivacyDlpV2ListInfoTypesResponse](#googleprivacydlpv2listinfotypesresponse)

### dlp.projects.locations.inspectTemplates.list
Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.


```js
google_dlp.dlp.projects.locations.inspectTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * locationId `string`: Deprecated. This field has no effect.
  * orderBy `string`: Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to time the template was created. - `update_time`: corresponds to time the template was last updated. - `name`: corresponds to template's name. - `display_name`: corresponds to template's display name.
  * pageSize `integer`: Size of the page, can be limited by server. If zero server returns a page of max size 100.
  * pageToken `string`: Page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
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
* output [GooglePrivacyDlpV2ListInspectTemplatesResponse](#googleprivacydlpv2listinspecttemplatesresponse)

### dlp.projects.locations.inspectTemplates.create
Creates an InspectTemplate for re-using frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.


```js
google_dlp.dlp.projects.locations.inspectTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2CreateInspectTemplateRequest](#googleprivacydlpv2createinspecttemplaterequest)
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
* output [GooglePrivacyDlpV2InspectTemplate](#googleprivacydlpv2inspecttemplate)

### dlp.projects.locations.jobTriggers.list
Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.


```js
google_dlp.dlp.projects.locations.jobTriggers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * filter `string`: Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
  * locationId `string`: Deprecated. This field has no effect.
  * orderBy `string`: Comma separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to time the JobTrigger was created. - `update_time`: corresponds to time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to JobTrigger's name. - `display_name`: corresponds to JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
  * pageSize `integer`: Size of the page, can be limited by a server.
  * pageToken `string`: Page token to continue retrieval. Comes from previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
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
* output [GooglePrivacyDlpV2ListJobTriggersResponse](#googleprivacydlpv2listjobtriggersresponse)

### dlp.projects.locations.jobTriggers.create
Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.


```js
google_dlp.dlp.projects.locations.jobTriggers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2CreateJobTriggerRequest](#googleprivacydlpv2createjobtriggerrequest)
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
* output [GooglePrivacyDlpV2JobTrigger](#googleprivacydlpv2jobtrigger)

### dlp.projects.storedInfoTypes.list
Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.


```js
google_dlp.dlp.projects.storedInfoTypes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * locationId `string`: Deprecated. This field has no effect.
  * orderBy `string`: Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
  * pageSize `integer`: Size of the page, can be limited by server. If zero server returns a page of max size 100.
  * pageToken `string`: Page token to continue retrieval. Comes from previous call to `ListStoredInfoTypes`.
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
* output [GooglePrivacyDlpV2ListStoredInfoTypesResponse](#googleprivacydlpv2liststoredinfotypesresponse)

### dlp.projects.storedInfoTypes.create
Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.


```js
google_dlp.dlp.projects.storedInfoTypes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location): + Projects scope, location specified: `projects/`PROJECT_ID`/locations/`LOCATION_ID + Projects scope, no location specified (defaults to global): `projects/`PROJECT_ID + Organizations scope, location specified: `organizations/`ORG_ID`/locations/`LOCATION_ID + Organizations scope, no location specified (defaults to global): `organizations/`ORG_ID The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
  * body [GooglePrivacyDlpV2CreateStoredInfoTypeRequest](#googleprivacydlpv2createstoredinfotyperequest)
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
* output [GooglePrivacyDlpV2StoredInfoType](#googleprivacydlpv2storedinfotype)



## Definitions

### GooglePrivacyDlpV2Action
* GooglePrivacyDlpV2Action `object`: A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
  * jobNotificationEmails [GooglePrivacyDlpV2JobNotificationEmails](#googleprivacydlpv2jobnotificationemails)
  * pubSub [GooglePrivacyDlpV2PublishToPubSub](#googleprivacydlpv2publishtopubsub)
  * publishFindingsToCloudDataCatalog [GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog](#googleprivacydlpv2publishfindingstoclouddatacatalog)
  * publishSummaryToCscc [GooglePrivacyDlpV2PublishSummaryToCscc](#googleprivacydlpv2publishsummarytocscc)
  * publishToStackdriver [GooglePrivacyDlpV2PublishToStackdriver](#googleprivacydlpv2publishtostackdriver)
  * saveFindings [GooglePrivacyDlpV2SaveFindings](#googleprivacydlpv2savefindings)

### GooglePrivacyDlpV2ActivateJobTriggerRequest
* GooglePrivacyDlpV2ActivateJobTriggerRequest `object`: Request message for ActivateJobTrigger.

### GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
* GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails `object`: Result of a risk analysis operation request.
  * categoricalStatsResult [GooglePrivacyDlpV2CategoricalStatsResult](#googleprivacydlpv2categoricalstatsresult)
  * deltaPresenceEstimationResult [GooglePrivacyDlpV2DeltaPresenceEstimationResult](#googleprivacydlpv2deltapresenceestimationresult)
  * kAnonymityResult [GooglePrivacyDlpV2KAnonymityResult](#googleprivacydlpv2kanonymityresult)
  * kMapEstimationResult [GooglePrivacyDlpV2KMapEstimationResult](#googleprivacydlpv2kmapestimationresult)
  * lDiversityResult [GooglePrivacyDlpV2LDiversityResult](#googleprivacydlpv2ldiversityresult)
  * numericalStatsResult [GooglePrivacyDlpV2NumericalStatsResult](#googleprivacydlpv2numericalstatsresult)
  * requestedOptions [GooglePrivacyDlpV2RequestedRiskAnalysisOptions](#googleprivacydlpv2requestedriskanalysisoptions)
  * requestedPrivacyMetric [GooglePrivacyDlpV2PrivacyMetric](#googleprivacydlpv2privacymetric)
  * requestedSourceTable [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2AuxiliaryTable
* GooglePrivacyDlpV2AuxiliaryTable `object`: An auxiliary table contains statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
  * quasiIds `array`: Required. Quasi-identifier columns.
    * items [GooglePrivacyDlpV2QuasiIdField](#googleprivacydlpv2quasiidfield)
  * relativeFrequency [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * table [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2BigQueryField
* GooglePrivacyDlpV2BigQueryField `object`: Message defining a field of a BigQuery table.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * table [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2BigQueryKey
* GooglePrivacyDlpV2BigQueryKey `object`: Row key for identifying a record in BigQuery table.
  * rowNumber `string`: Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`.
  * tableReference [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2BigQueryOptions
* GooglePrivacyDlpV2BigQueryOptions `object`: Options defining BigQuery table and row identifiers.
  * excludedFields `array`: References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * identifyingFields `array`: Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * rowsLimit `string`: Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
  * rowsLimitPercent `integer`: Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
  * sampleMethod `string` (values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START)
  * tableReference [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2BigQueryTable
* GooglePrivacyDlpV2BigQueryTable `object`: Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
  * datasetId `string`: Dataset ID of the table.
  * projectId `string`: The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
  * tableId `string`: Name of the table.

### GooglePrivacyDlpV2BoundingBox
* GooglePrivacyDlpV2BoundingBox `object`: Bounding box encompassing detected text within an image.
  * height `integer`: Height of the bounding box in pixels.
  * left `integer`: Left coordinate of the bounding box. (0,0) is upper left.
  * top `integer`: Top coordinate of the bounding box. (0,0) is upper left.
  * width `integer`: Width of the bounding box in pixels.

### GooglePrivacyDlpV2Bucket
* GooglePrivacyDlpV2Bucket `object`: Bucket is represented as a range, along with replacement values.
  * max [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * min [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * replacementValue [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2BucketingConfig
* GooglePrivacyDlpV2BucketingConfig `object`: Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
  * buckets `array`: Set of buckets. Ranges must be non-overlapping.
    * items [GooglePrivacyDlpV2Bucket](#googleprivacydlpv2bucket)

### GooglePrivacyDlpV2ByteContentItem
* GooglePrivacyDlpV2ByteContentItem `object`: Container for bytes to inspect or redact.
  * data `string`: Content data to inspect or redact.
  * type `string` (values: BYTES_TYPE_UNSPECIFIED, IMAGE, IMAGE_JPEG, IMAGE_BMP, IMAGE_PNG, IMAGE_SVG, TEXT_UTF8, WORD_DOCUMENT, PDF, AVRO, CSV, TSV): The type of data stored in the bytes string. Default will be TEXT_UTF8.

### GooglePrivacyDlpV2CancelDlpJobRequest
* GooglePrivacyDlpV2CancelDlpJobRequest `object`: The request message for canceling a DLP job.

### GooglePrivacyDlpV2CategoricalStatsConfig
* GooglePrivacyDlpV2CategoricalStatsConfig `object`: Compute numerical stats over an individual column, including number of distinct values and value count distribution.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2CategoricalStatsHistogramBucket
* GooglePrivacyDlpV2CategoricalStatsHistogramBucket `object`: Histogram of value frequencies in the column.
  * bucketSize `string`: Total number of values in this bucket.
  * bucketValueCount `string`: Total number of distinct values in this bucket.
  * bucketValues `array`: Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
    * items [GooglePrivacyDlpV2ValueFrequency](#googleprivacydlpv2valuefrequency)
  * valueFrequencyLowerBound `string`: Lower bound on the value frequency of the values in this bucket.
  * valueFrequencyUpperBound `string`: Upper bound on the value frequency of the values in this bucket.

### GooglePrivacyDlpV2CategoricalStatsResult
* GooglePrivacyDlpV2CategoricalStatsResult `object`: Result of the categorical stats computation.
  * valueFrequencyHistogramBuckets `array`: Histogram of value frequencies in the column.
    * items [GooglePrivacyDlpV2CategoricalStatsHistogramBucket](#googleprivacydlpv2categoricalstatshistogrambucket)

### GooglePrivacyDlpV2CharacterMaskConfig
* GooglePrivacyDlpV2CharacterMaskConfig `object`: Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
  * charactersToIgnore `array`: When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`.
    * items [GooglePrivacyDlpV2CharsToIgnore](#googleprivacydlpv2charstoignore)
  * maskingCharacter `string`: Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits.
  * numberToMask `integer`: Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
  * reverseOrder `boolean`: Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`.

### GooglePrivacyDlpV2CharsToIgnore
* GooglePrivacyDlpV2CharsToIgnore `object`: Characters to skip when doing deidentification of a value. These will be left alone and skipped.
  * charactersToSkip `string`: Characters to not transform when masking.
  * commonCharactersToIgnore `string` (values: COMMON_CHARS_TO_IGNORE_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE): Common characters to not transform when masking. Useful to avoid removing punctuation.

### GooglePrivacyDlpV2CloudStorageFileSet
* GooglePrivacyDlpV2CloudStorageFileSet `object`: Message representing a set of files in Cloud Storage.
  * url `string`: The url, in the format `gs:///`. Trailing wildcard in the path is allowed.

### GooglePrivacyDlpV2CloudStorageOptions
* GooglePrivacyDlpV2CloudStorageOptions `object`: Options defining a file or a set of files within a Google Cloud Storage bucket.
  * bytesLimitPerFile `string`: Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
  * bytesLimitPerFilePercent `integer`: Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
  * fileSet [GooglePrivacyDlpV2FileSet](#googleprivacydlpv2fileset)
  * fileTypes `array`: List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'.
    * items `string` (values: FILE_TYPE_UNSPECIFIED, BINARY_FILE, TEXT_FILE, IMAGE, WORD, PDF, AVRO, CSV, TSV)
  * filesLimitPercent `integer`: Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0.
  * sampleMethod `string` (values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START)

### GooglePrivacyDlpV2CloudStoragePath
* GooglePrivacyDlpV2CloudStoragePath `object`: Message representing a single file or path in Cloud Storage.
  * path `string`: A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt

### GooglePrivacyDlpV2CloudStorageRegexFileSet
* GooglePrivacyDlpV2CloudStorageRegexFileSet `object`: Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: "mybucket", include_regex: ["directory1/.*"], exclude_regex: ["directory1/excluded.*"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [".*"]`). Some other common use cases: * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/`
  * bucketName `string`: The name of a Cloud Storage bucket. Required.
  * excludeRegex `array`: A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
    * items `string`
  * includeRegex `array`: A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
    * items `string`

### GooglePrivacyDlpV2Color
* GooglePrivacyDlpV2Color `object`: Represents a color in the RGB color space.
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### GooglePrivacyDlpV2Condition
* GooglePrivacyDlpV2Condition `object`: The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * operator `string` (values: RELATIONAL_OPERATOR_UNSPECIFIED, EQUAL_TO, NOT_EQUAL_TO, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN_OR_EQUALS, EXISTS): Required. Operator used to compare the field or infoType to the value.
  * value [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2Conditions
* GooglePrivacyDlpV2Conditions `object`: A collection of conditions.
  * conditions `array`: A collection of conditions.
    * items [GooglePrivacyDlpV2Condition](#googleprivacydlpv2condition)

### GooglePrivacyDlpV2Container
* GooglePrivacyDlpV2Container `object`: Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
  * fullPath `string`: A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Google Cloud Storage: 'gs://Bucket/folders/filename.txt'
  * projectId `string`: Project where the finding was found. Can be different from the project that owns the finding.
  * relativePath `string`: The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - Google Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt`
  * rootPath `string`: The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Google Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket`
  * type `string`: Container type, for example BigQuery or Google Cloud Storage.
  * updateTime `string`: Findings container modification timestamp, if applicable. For Google Cloud Storage contains last file modification timestamp. For BigQuery table contains last_modified_time property. For Datastore - not populated.
  * version `string`: Findings container version, if available ("generation" for Google Cloud Storage).

### GooglePrivacyDlpV2ContentItem
* GooglePrivacyDlpV2ContentItem `object`: Container structure for the content to inspect.
  * byteItem [GooglePrivacyDlpV2ByteContentItem](#googleprivacydlpv2bytecontentitem)
  * table [GooglePrivacyDlpV2Table](#googleprivacydlpv2table)
  * value `string`: String data to inspect or redact.

### GooglePrivacyDlpV2ContentLocation
* GooglePrivacyDlpV2ContentLocation `object`: Precise location of the finding within a document, record, image, or metadata container.
  * containerName `string`: Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for an example an image contained within a document).
  * containerTimestamp `string`: Findings container modification timestamp, if applicable. For Google Cloud Storage contains last file modification timestamp. For BigQuery table contains last_modified_time property. For Datastore - not populated.
  * containerVersion `string`: Findings container version, if available ("generation" for Google Cloud Storage).
  * documentLocation [GooglePrivacyDlpV2DocumentLocation](#googleprivacydlpv2documentlocation)
  * imageLocation [GooglePrivacyDlpV2ImageLocation](#googleprivacydlpv2imagelocation)
  * metadataLocation [GooglePrivacyDlpV2MetadataLocation](#googleprivacydlpv2metadatalocation)
  * recordLocation [GooglePrivacyDlpV2RecordLocation](#googleprivacydlpv2recordlocation)

### GooglePrivacyDlpV2CreateDeidentifyTemplateRequest
* GooglePrivacyDlpV2CreateDeidentifyTemplateRequest `object`: Request message for CreateDeidentifyTemplate.
  * deidentifyTemplate [GooglePrivacyDlpV2DeidentifyTemplate](#googleprivacydlpv2deidentifytemplate)
  * locationId `string`: Deprecated. This field has no effect.
  * templateId `string`: The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.

### GooglePrivacyDlpV2CreateDlpJobRequest
* GooglePrivacyDlpV2CreateDlpJobRequest `object`: Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
  * inspectJob [GooglePrivacyDlpV2InspectJobConfig](#googleprivacydlpv2inspectjobconfig)
  * jobId `string`: The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
  * locationId `string`: Deprecated. This field has no effect.
  * riskJob [GooglePrivacyDlpV2RiskAnalysisJobConfig](#googleprivacydlpv2riskanalysisjobconfig)

### GooglePrivacyDlpV2CreateInspectTemplateRequest
* GooglePrivacyDlpV2CreateInspectTemplateRequest `object`: Request message for CreateInspectTemplate.
  * inspectTemplate [GooglePrivacyDlpV2InspectTemplate](#googleprivacydlpv2inspecttemplate)
  * locationId `string`: Deprecated. This field has no effect.
  * templateId `string`: The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.

### GooglePrivacyDlpV2CreateJobTriggerRequest
* GooglePrivacyDlpV2CreateJobTriggerRequest `object`: Request message for CreateJobTrigger.
  * jobTrigger [GooglePrivacyDlpV2JobTrigger](#googleprivacydlpv2jobtrigger)
  * locationId `string`: Deprecated. This field has no effect.
  * triggerId `string`: The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.

### GooglePrivacyDlpV2CreateStoredInfoTypeRequest
* GooglePrivacyDlpV2CreateStoredInfoTypeRequest `object`: Request message for CreateStoredInfoType.
  * config [GooglePrivacyDlpV2StoredInfoTypeConfig](#googleprivacydlpv2storedinfotypeconfig)
  * locationId `string`: Deprecated. This field has no effect.
  * storedInfoTypeId `string`: The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.

### GooglePrivacyDlpV2CryptoDeterministicConfig
* GooglePrivacyDlpV2CryptoDeterministicConfig `object`: Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
  * context [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * cryptoKey [GooglePrivacyDlpV2CryptoKey](#googleprivacydlpv2cryptokey)
  * surrogateInfoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2CryptoHashConfig
* GooglePrivacyDlpV2CryptoHashConfig `object`: Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
  * cryptoKey [GooglePrivacyDlpV2CryptoKey](#googleprivacydlpv2cryptokey)

### GooglePrivacyDlpV2CryptoKey
* GooglePrivacyDlpV2CryptoKey `object`: This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by KMS). When using KMS to wrap/unwrap DEKs, be sure to set an appropriate IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot unwrap the data crypto key.
  * kmsWrapped [GooglePrivacyDlpV2KmsWrappedCryptoKey](#googleprivacydlpv2kmswrappedcryptokey)
  * transient [GooglePrivacyDlpV2TransientCryptoKey](#googleprivacydlpv2transientcryptokey)
  * unwrapped [GooglePrivacyDlpV2UnwrappedCryptoKey](#googleprivacydlpv2unwrappedcryptokey)

### GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
* GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig `object`: Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
  * commonAlphabet `string` (values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC): Common alphabets.
  * context [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * cryptoKey [GooglePrivacyDlpV2CryptoKey](#googleprivacydlpv2cryptokey)
  * customAlphabet `string`: This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/
  * radix `integer`: The native way to select the alphabet. Must be in the range [2, 95].
  * surrogateInfoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2CustomInfoType
* GooglePrivacyDlpV2CustomInfoType `object`: Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
  * detectionRules `array`: Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.
    * items [GooglePrivacyDlpV2DetectionRule](#googleprivacydlpv2detectionrule)
  * dictionary [GooglePrivacyDlpV2Dictionary](#googleprivacydlpv2dictionary)
  * exclusionType `string` (values: EXCLUSION_TYPE_UNSPECIFIED, EXCLUSION_TYPE_EXCLUDE): If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * likelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified.
  * regex [GooglePrivacyDlpV2Regex](#googleprivacydlpv2regex)
  * storedType [GooglePrivacyDlpV2StoredType](#googleprivacydlpv2storedtype)
  * surrogateType [GooglePrivacyDlpV2SurrogateType](#googleprivacydlpv2surrogatetype)

### GooglePrivacyDlpV2DatastoreKey
* GooglePrivacyDlpV2DatastoreKey `object`: Record key for a finding in Cloud Datastore.
  * entityKey [GooglePrivacyDlpV2Key](#googleprivacydlpv2key)

### GooglePrivacyDlpV2DatastoreOptions
* GooglePrivacyDlpV2DatastoreOptions `object`: Options defining a data set within Google Cloud Datastore.
  * kind [GooglePrivacyDlpV2KindExpression](#googleprivacydlpv2kindexpression)
  * partitionId [GooglePrivacyDlpV2PartitionId](#googleprivacydlpv2partitionid)

### GooglePrivacyDlpV2DateShiftConfig
* GooglePrivacyDlpV2DateShiftConfig `object`: Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
  * context [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * cryptoKey [GooglePrivacyDlpV2CryptoKey](#googleprivacydlpv2cryptokey)
  * lowerBoundDays `integer`: Required. For example, -5 means shift date to at most 5 days back in the past.
  * upperBoundDays `integer`: Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future.

### GooglePrivacyDlpV2DateTime
* GooglePrivacyDlpV2DateTime `object`: Message for a date time object. e.g. 2018-01-01, 5th August.
  * date [GoogleTypeDate](#googletypedate)
  * dayOfWeek `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): Day of week
  * time [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timeZone [GooglePrivacyDlpV2TimeZone](#googleprivacydlpv2timezone)

### GooglePrivacyDlpV2DeidentifyConfig
* GooglePrivacyDlpV2DeidentifyConfig `object`: The configuration that controls how the data will change.
  * infoTypeTransformations [GooglePrivacyDlpV2InfoTypeTransformations](#googleprivacydlpv2infotypetransformations)
  * recordTransformations [GooglePrivacyDlpV2RecordTransformations](#googleprivacydlpv2recordtransformations)
  * transformationErrorHandling [GooglePrivacyDlpV2TransformationErrorHandling](#googleprivacydlpv2transformationerrorhandling)

### GooglePrivacyDlpV2DeidentifyContentRequest
* GooglePrivacyDlpV2DeidentifyContentRequest `object`: Request to de-identify a list of items.
  * deidentifyConfig [GooglePrivacyDlpV2DeidentifyConfig](#googleprivacydlpv2deidentifyconfig)
  * deidentifyTemplateName `string`: Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * inspectTemplateName `string`: Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)
  * locationId `string`: Deprecated. This field has no effect.

### GooglePrivacyDlpV2DeidentifyContentResponse
* GooglePrivacyDlpV2DeidentifyContentResponse `object`: Results of de-identifying a ContentItem.
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)
  * overview [GooglePrivacyDlpV2TransformationOverview](#googleprivacydlpv2transformationoverview)

### GooglePrivacyDlpV2DeidentifyTemplate
* GooglePrivacyDlpV2DeidentifyTemplate `object`: DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
  * createTime `string`: Output only. The creation timestamp of an inspectTemplate.
  * deidentifyConfig [GooglePrivacyDlpV2DeidentifyConfig](#googleprivacydlpv2deidentifyconfig)
  * description `string`: Short description (max 256 chars).
  * displayName `string`: Display name (max 256 chars).
  * name `string`: Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
  * updateTime `string`: Output only. The last update timestamp of an inspectTemplate.

### GooglePrivacyDlpV2DeltaPresenceEstimationConfig
* GooglePrivacyDlpV2DeltaPresenceEstimationConfig `object`: δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
  * auxiliaryTables `array`: Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table.
    * items [GooglePrivacyDlpV2StatisticalTable](#googleprivacydlpv2statisticaltable)
  * quasiIds `array`: Required. Fields considered to be quasi-identifiers. No two fields can have the same tag.
    * items [GooglePrivacyDlpV2QuasiId](#googleprivacydlpv2quasiid)
  * regionCode `string`: ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.

### GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
* GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket `object`: A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
  * bucketSize `string`: Number of records within these probability bounds.
  * bucketValueCount `string`: Total number of distinct quasi-identifier tuple values in this bucket.
  * bucketValues `array`: Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
    * items [GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues](#googleprivacydlpv2deltapresenceestimationquasiidvalues)
  * maxProbability `number`: Always greater than or equal to min_probability.
  * minProbability `number`: Between 0 and 1.

### GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues
* GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues `object`: A tuple of values for the quasi-identifier columns.
  * estimatedProbability `number`: The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15.
  * quasiIdsValues `array`: The quasi-identifier values.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2DeltaPresenceEstimationResult
* GooglePrivacyDlpV2DeltaPresenceEstimationResult `object`: Result of the δ-presence computation. Note that these results are an estimation, not exact values.
  * deltaPresenceEstimationHistogram `array`: The intervals [min_probability, max_probability) do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_probability: 0, max_probability: 0.1, frequency: 17} {min_probability: 0.2, max_probability: 0.3, frequency: 42} {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4.
    * items [GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket](#googleprivacydlpv2deltapresenceestimationhistogrambucket)

### GooglePrivacyDlpV2DetectionRule
* GooglePrivacyDlpV2DetectionRule `object`: Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
  * hotwordRule [GooglePrivacyDlpV2HotwordRule](#googleprivacydlpv2hotwordrule)

### GooglePrivacyDlpV2Dictionary
* GooglePrivacyDlpV2Dictionary `object`: Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase "Sam Johnson" will match all three phrases "sam johnson", "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word "jen" will match the first three letters of the text "jen123" but will return no matches for "jennifer". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
  * cloudStoragePath [GooglePrivacyDlpV2CloudStoragePath](#googleprivacydlpv2cloudstoragepath)
  * wordList [GooglePrivacyDlpV2WordList](#googleprivacydlpv2wordlist)

### GooglePrivacyDlpV2DlpJob
* GooglePrivacyDlpV2DlpJob `object`: Combines all of the information about a DLP job.
  * createTime `string`: Time when the job was created.
  * endTime `string`: Time when the job finished.
  * errors `array`: A stream of errors encountered running the job.
    * items [GooglePrivacyDlpV2Error](#googleprivacydlpv2error)
  * inspectDetails [GooglePrivacyDlpV2InspectDataSourceDetails](#googleprivacydlpv2inspectdatasourcedetails)
  * jobTriggerName `string`: If created by a job trigger, the resource name of the trigger that instantiated the job.
  * name `string`: The server-assigned name.
  * riskDetails [GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails](#googleprivacydlpv2analyzedatasourceriskdetails)
  * startTime `string`: Time when the job started.
  * state `string` (values: JOB_STATE_UNSPECIFIED, PENDING, RUNNING, DONE, CANCELED, FAILED, ACTIVE): State of a job.
  * type `string` (values: DLP_JOB_TYPE_UNSPECIFIED, INSPECT_JOB, RISK_ANALYSIS_JOB): The type of job.

### GooglePrivacyDlpV2DocumentLocation
* GooglePrivacyDlpV2DocumentLocation `object`: Location of a finding within a document.
  * fileOffset `string`: Offset of the line, from the beginning of the file, where the finding is located.

### GooglePrivacyDlpV2EntityId
* GooglePrivacyDlpV2EntityId `object`: An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2Error
* GooglePrivacyDlpV2Error `object`: Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
  * details [GoogleRpcStatus](#googlerpcstatus)
  * timestamps `array`: The times the error occurred.
    * items `string`

### GooglePrivacyDlpV2ExcludeInfoTypes
* GooglePrivacyDlpV2ExcludeInfoTypes `object`: List of exclude infoTypes.
  * infoTypes `array`: InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address.
    * items [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2ExclusionRule
* GooglePrivacyDlpV2ExclusionRule `object`: The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
  * dictionary [GooglePrivacyDlpV2Dictionary](#googleprivacydlpv2dictionary)
  * excludeInfoTypes [GooglePrivacyDlpV2ExcludeInfoTypes](#googleprivacydlpv2excludeinfotypes)
  * matchingType `string` (values: MATCHING_TYPE_UNSPECIFIED, MATCHING_TYPE_FULL_MATCH, MATCHING_TYPE_PARTIAL_MATCH, MATCHING_TYPE_INVERSE_MATCH): How the rule is applied, see MatchingType documentation for details.
  * regex [GooglePrivacyDlpV2Regex](#googleprivacydlpv2regex)

### GooglePrivacyDlpV2Expressions
* GooglePrivacyDlpV2Expressions `object`: An expression, consisting or an operator and conditions.
  * conditions [GooglePrivacyDlpV2Conditions](#googleprivacydlpv2conditions)
  * logicalOperator `string` (values: LOGICAL_OPERATOR_UNSPECIFIED, AND): The operator to apply to the result of conditions. Default and currently only supported value is `AND`.

### GooglePrivacyDlpV2FieldId
* GooglePrivacyDlpV2FieldId `object`: General identifier of a data field in a storage service.
  * name `string`: Name describing the field.

### GooglePrivacyDlpV2FieldTransformation
* GooglePrivacyDlpV2FieldTransformation `object`: The transformation to apply to the field.
  * condition [GooglePrivacyDlpV2RecordCondition](#googleprivacydlpv2recordcondition)
  * fields `array`: Required. Input field(s) to apply the transformation to.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * infoTypeTransformations [GooglePrivacyDlpV2InfoTypeTransformations](#googleprivacydlpv2infotypetransformations)
  * primitiveTransformation [GooglePrivacyDlpV2PrimitiveTransformation](#googleprivacydlpv2primitivetransformation)

### GooglePrivacyDlpV2FileSet
* GooglePrivacyDlpV2FileSet `object`: Set of files to scan.
  * regexFileSet [GooglePrivacyDlpV2CloudStorageRegexFileSet](#googleprivacydlpv2cloudstorageregexfileset)
  * url `string`: The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set.

### GooglePrivacyDlpV2Finding
* GooglePrivacyDlpV2Finding `object`: Represents a piece of potentially sensitive content.
  * createTime `string`: Timestamp when finding was detected.
  * findingId `string`: The unique finding id.
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * jobCreateTime `string`: Time the job started that produced this finding.
  * jobName `string`: The job that stored the finding.
  * labels `object`: The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`
  * likelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Confidence of how likely it is that the `info_type` is correct.
  * location [GooglePrivacyDlpV2Location](#googleprivacydlpv2location)
  * name `string`: Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings.
  * quote `string`: The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted.
  * quoteInfo [GooglePrivacyDlpV2QuoteInfo](#googleprivacydlpv2quoteinfo)
  * resourceName `string`: The job that stored the finding.
  * triggerName `string`: Job trigger name, if applicable, for this finding.

### GooglePrivacyDlpV2FindingLimits
* GooglePrivacyDlpV2FindingLimits `object`: Configuration to control the number of findings returned.
  * maxFindingsPerInfoType `array`: Configuration of findings limit given for specified infoTypes.
    * items [GooglePrivacyDlpV2InfoTypeLimit](#googleprivacydlpv2infotypelimit)
  * maxFindingsPerItem `integer`: Max number of findings that will be returned for each item scanned. When set within `InspectJobConfig`, the maximum returned is 2000 regardless if this is set higher. When set within `InspectContentRequest`, this field is ignored.
  * maxFindingsPerRequest `integer`: Max number of findings that will be returned per request/job. When set within `InspectContentRequest`, the maximum returned is 2000 regardless if this is set higher.

### GooglePrivacyDlpV2FinishDlpJobRequest
* GooglePrivacyDlpV2FinishDlpJobRequest `object`: The request message for finishing a DLP hybrid job.

### GooglePrivacyDlpV2FixedSizeBucketingConfig
* GooglePrivacyDlpV2FixedSizeBucketingConfig `object`: Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}, i.e if lower_bound = 10 and upper_bound = 20 all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
  * bucketSize `number`: Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
  * lowerBound [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * upperBound [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2HotwordRule
* GooglePrivacyDlpV2HotwordRule `object`: The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
  * hotwordRegex [GooglePrivacyDlpV2Regex](#googleprivacydlpv2regex)
  * likelihoodAdjustment [GooglePrivacyDlpV2LikelihoodAdjustment](#googleprivacydlpv2likelihoodadjustment)
  * proximity [GooglePrivacyDlpV2Proximity](#googleprivacydlpv2proximity)

### GooglePrivacyDlpV2HybridContentItem
* GooglePrivacyDlpV2HybridContentItem `object`: An individual hybrid item to inspect. Will be stored temporarily during processing.
  * findingDetails [GooglePrivacyDlpV2HybridFindingDetails](#googleprivacydlpv2hybridfindingdetails)
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)

### GooglePrivacyDlpV2HybridFindingDetails
* GooglePrivacyDlpV2HybridFindingDetails `object`: Populate to associate additional data with each finding.
  * containerDetails [GooglePrivacyDlpV2Container](#googleprivacydlpv2container)
  * fileOffset `string`: Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding.
  * labels `object`: Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with `Finding`'s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`
  * rowOffset `string`: Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position.
  * tableOptions [GooglePrivacyDlpV2TableOptions](#googleprivacydlpv2tableoptions)

### GooglePrivacyDlpV2HybridInspectDlpJobRequest
* GooglePrivacyDlpV2HybridInspectDlpJobRequest `object`: Request to search for potentially sensitive info in a custom location.
  * hybridItem [GooglePrivacyDlpV2HybridContentItem](#googleprivacydlpv2hybridcontentitem)

### GooglePrivacyDlpV2HybridInspectJobTriggerRequest
* GooglePrivacyDlpV2HybridInspectJobTriggerRequest `object`: Request to search for potentially sensitive info in a custom location.
  * hybridItem [GooglePrivacyDlpV2HybridContentItem](#googleprivacydlpv2hybridcontentitem)

### GooglePrivacyDlpV2HybridInspectResponse
* GooglePrivacyDlpV2HybridInspectResponse `object`: Quota exceeded errors will be thrown once quota has been met.

### GooglePrivacyDlpV2HybridInspectStatistics
* GooglePrivacyDlpV2HybridInspectStatistics `object`: Statistics related to processing hybrid inspect requests.
  * abortedCount `string`: The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed.
  * pendingCount `string`: The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for.
  * processedCount `string`: The number of hybrid inspection requests processed within this job.

### GooglePrivacyDlpV2HybridOptions
* GooglePrivacyDlpV2HybridOptions `object`: Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
  * description `string`: A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  * labels `object`: To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`
  * requiredFindingLabelKeys `array`: These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required.
    * items `string`
  * tableOptions [GooglePrivacyDlpV2TableOptions](#googleprivacydlpv2tableoptions)

### GooglePrivacyDlpV2ImageLocation
* GooglePrivacyDlpV2ImageLocation `object`: Location of the finding within an image.
  * boundingBoxes `array`: Bounding boxes locating the pixels within the image containing the finding.
    * items [GooglePrivacyDlpV2BoundingBox](#googleprivacydlpv2boundingbox)

### GooglePrivacyDlpV2ImageRedactionConfig
* GooglePrivacyDlpV2ImageRedactionConfig `object`: Configuration for determining how redaction of images should occur.
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * redactAllText `boolean`: If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided.
  * redactionColor [GooglePrivacyDlpV2Color](#googleprivacydlpv2color)

### GooglePrivacyDlpV2InfoType
* GooglePrivacyDlpV2InfoType `object`: Type of information detected by the API.
  * name `string`: Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.

### GooglePrivacyDlpV2InfoTypeDescription
* GooglePrivacyDlpV2InfoTypeDescription `object`: InfoType description.
  * description `string`: Description of the infotype. Translated when language is provided in the request.
  * displayName `string`: Human readable form of the infoType name.
  * name `string`: Internal name of the infoType.
  * supportedBy `array`: Which parts of the API supports this InfoType.
    * items `string` (values: ENUM_TYPE_UNSPECIFIED, INSPECT, RISK_ANALYSIS)

### GooglePrivacyDlpV2InfoTypeLimit
* GooglePrivacyDlpV2InfoTypeLimit `object`: Max findings configuration per infoType, per content item or long running DlpJob.
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * maxFindings `integer`: Max findings limit for the given infoType.

### GooglePrivacyDlpV2InfoTypeStats
* GooglePrivacyDlpV2InfoTypeStats `object`: Statistics regarding a specific InfoType.
  * count `string`: Number of findings for this infoType.
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2InfoTypeTransformation
* GooglePrivacyDlpV2InfoTypeTransformation `object`: A transformation to apply to text that is identified as a specific info_type.
  * infoTypes `array`: InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`.
    * items [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * primitiveTransformation [GooglePrivacyDlpV2PrimitiveTransformation](#googleprivacydlpv2primitivetransformation)

### GooglePrivacyDlpV2InfoTypeTransformations
* GooglePrivacyDlpV2InfoTypeTransformations `object`: A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
  * transformations `array`: Required. Transformation for each infoType. Cannot specify more than one for a given infoType.
    * items [GooglePrivacyDlpV2InfoTypeTransformation](#googleprivacydlpv2infotypetransformation)

### GooglePrivacyDlpV2InspectConfig
* GooglePrivacyDlpV2InspectConfig `object`: Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
  * contentOptions `array`: List of options defining data content to scan. If empty, text, images, and other content will be included.
    * items `string` (values: CONTENT_UNSPECIFIED, CONTENT_TEXT, CONTENT_IMAGE)
  * customInfoTypes `array`: CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
    * items [GooglePrivacyDlpV2CustomInfoType](#googleprivacydlpv2custominfotype)
  * excludeInfoTypes `boolean`: When true, excludes type information of the findings.
  * includeQuote `boolean`: When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote.
  * infoTypes `array`: Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time.
    * items [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * limits [GooglePrivacyDlpV2FindingLimits](#googleprivacydlpv2findinglimits)
  * minLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more.
  * ruleSet `array`: Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.
    * items [GooglePrivacyDlpV2InspectionRuleSet](#googleprivacydlpv2inspectionruleset)

### GooglePrivacyDlpV2InspectContentRequest
* GooglePrivacyDlpV2InspectContentRequest `object`: Request to search for potentially sensitive info in a ContentItem.
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * inspectTemplateName `string`: Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)
  * locationId `string`: Deprecated. This field has no effect.

### GooglePrivacyDlpV2InspectContentResponse
* GooglePrivacyDlpV2InspectContentResponse `object`: Results of inspecting an item.
  * result [GooglePrivacyDlpV2InspectResult](#googleprivacydlpv2inspectresult)

### GooglePrivacyDlpV2InspectDataSourceDetails
* GooglePrivacyDlpV2InspectDataSourceDetails `object`: The results of an inspect DataSource job.
  * requestedOptions [GooglePrivacyDlpV2RequestedOptions](#googleprivacydlpv2requestedoptions)
  * result [GooglePrivacyDlpV2Result](#googleprivacydlpv2result)

### GooglePrivacyDlpV2InspectJobConfig
* GooglePrivacyDlpV2InspectJobConfig `object`: Controls what and how to inspect for findings.
  * actions `array`: Actions to execute at the completion of the job.
    * items [GooglePrivacyDlpV2Action](#googleprivacydlpv2action)
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * inspectTemplateName `string`: If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
  * storageConfig [GooglePrivacyDlpV2StorageConfig](#googleprivacydlpv2storageconfig)

### GooglePrivacyDlpV2InspectResult
* GooglePrivacyDlpV2InspectResult `object`: All the findings for a single scanned item.
  * findings `array`: List of findings for an item.
    * items [GooglePrivacyDlpV2Finding](#googleprivacydlpv2finding)
  * findingsTruncated `boolean`: If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.

### GooglePrivacyDlpV2InspectTemplate
* GooglePrivacyDlpV2InspectTemplate `object`: The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
  * createTime `string`: Output only. The creation timestamp of an inspectTemplate.
  * description `string`: Short description (max 256 chars).
  * displayName `string`: Display name (max 256 chars).
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * name `string`: Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;
  * updateTime `string`: Output only. The last update timestamp of an inspectTemplate.

### GooglePrivacyDlpV2InspectionRule
* GooglePrivacyDlpV2InspectionRule `object`: A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
  * exclusionRule [GooglePrivacyDlpV2ExclusionRule](#googleprivacydlpv2exclusionrule)
  * hotwordRule [GooglePrivacyDlpV2HotwordRule](#googleprivacydlpv2hotwordrule)

### GooglePrivacyDlpV2InspectionRuleSet
* GooglePrivacyDlpV2InspectionRuleSet `object`: Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
  * infoTypes `array`: List of infoTypes this rule set is applied to.
    * items [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * rules `array`: Set of rules to be applied to infoTypes. The rules are applied in order.
    * items [GooglePrivacyDlpV2InspectionRule](#googleprivacydlpv2inspectionrule)

### GooglePrivacyDlpV2JobNotificationEmails
* GooglePrivacyDlpV2JobNotificationEmails `object`: Enable email notification to project owners and editors on jobs's completion/failure.

### GooglePrivacyDlpV2JobTrigger
* GooglePrivacyDlpV2JobTrigger `object`: Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
  * createTime `string`: Output only. The creation timestamp of a triggeredJob.
  * description `string`: User provided description (max 256 chars)
  * displayName `string`: Display name (max 100 chars)
  * errors `array`: Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.
    * items [GooglePrivacyDlpV2Error](#googleprivacydlpv2error)
  * inspectJob [GooglePrivacyDlpV2InspectJobConfig](#googleprivacydlpv2inspectjobconfig)
  * lastRunTime `string`: Output only. The timestamp of the last time this trigger executed.
  * name `string`: Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.
  * status `string` (values: STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED): Required. A status for this trigger.
  * triggers `array`: A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.
    * items [GooglePrivacyDlpV2Trigger](#googleprivacydlpv2trigger)
  * updateTime `string`: Output only. The last update timestamp of a triggeredJob.

### GooglePrivacyDlpV2KAnonymityConfig
* GooglePrivacyDlpV2KAnonymityConfig `object`: k-anonymity metric, used for analysis of reidentification risk.
  * entityId [GooglePrivacyDlpV2EntityId](#googleprivacydlpv2entityid)
  * quasiIds `array`: Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2KAnonymityEquivalenceClass
* GooglePrivacyDlpV2KAnonymityEquivalenceClass `object`: The set of columns' values that share the same ldiversity value
  * equivalenceClassSize `string`: Size of the equivalence class, for example number of rows with the above set of values.
  * quasiIdsValues `array`: Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2KAnonymityHistogramBucket
* GooglePrivacyDlpV2KAnonymityHistogramBucket `object`: Histogram of k-anonymity equivalence classes.
  * bucketSize `string`: Total number of equivalence classes in this bucket.
  * bucketValueCount `string`: Total number of distinct equivalence classes in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
    * items [GooglePrivacyDlpV2KAnonymityEquivalenceClass](#googleprivacydlpv2kanonymityequivalenceclass)
  * equivalenceClassSizeLowerBound `string`: Lower bound on the size of the equivalence classes in this bucket.
  * equivalenceClassSizeUpperBound `string`: Upper bound on the size of the equivalence classes in this bucket.

### GooglePrivacyDlpV2KAnonymityResult
* GooglePrivacyDlpV2KAnonymityResult `object`: Result of the k-anonymity computation.
  * equivalenceClassHistogramBuckets `array`: Histogram of k-anonymity equivalence classes.
    * items [GooglePrivacyDlpV2KAnonymityHistogramBucket](#googleprivacydlpv2kanonymityhistogrambucket)

### GooglePrivacyDlpV2KMapEstimationConfig
* GooglePrivacyDlpV2KMapEstimationConfig `object`: Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
  * auxiliaryTables `array`: Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
    * items [GooglePrivacyDlpV2AuxiliaryTable](#googleprivacydlpv2auxiliarytable)
  * quasiIds `array`: Required. Fields considered to be quasi-identifiers. No two columns can have the same tag.
    * items [GooglePrivacyDlpV2TaggedField](#googleprivacydlpv2taggedfield)
  * regionCode `string`: ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.

### GooglePrivacyDlpV2KMapEstimationHistogramBucket
* GooglePrivacyDlpV2KMapEstimationHistogramBucket `object`: A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
  * bucketSize `string`: Number of records within these anonymity bounds.
  * bucketValueCount `string`: Total number of distinct quasi-identifier tuple values in this bucket.
  * bucketValues `array`: Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
    * items [GooglePrivacyDlpV2KMapEstimationQuasiIdValues](#googleprivacydlpv2kmapestimationquasiidvalues)
  * maxAnonymity `string`: Always greater than or equal to min_anonymity.
  * minAnonymity `string`: Always positive.

### GooglePrivacyDlpV2KMapEstimationQuasiIdValues
* GooglePrivacyDlpV2KMapEstimationQuasiIdValues `object`: A tuple of values for the quasi-identifier columns.
  * estimatedAnonymity `string`: The estimated anonymity for these quasi-identifier values.
  * quasiIdsValues `array`: The quasi-identifier values.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2KMapEstimationResult
* GooglePrivacyDlpV2KMapEstimationResult `object`: Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
  * kMapEstimationHistogram `array`: The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_anonymity: 1, max_anonymity: 1, frequency: 17} {min_anonymity: 2, max_anonymity: 3, frequency: 42} {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.
    * items [GooglePrivacyDlpV2KMapEstimationHistogramBucket](#googleprivacydlpv2kmapestimationhistogrambucket)

### GooglePrivacyDlpV2Key
* GooglePrivacyDlpV2Key `object`: A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
  * partitionId [GooglePrivacyDlpV2PartitionId](#googleprivacydlpv2partitionid)
  * path `array`: The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. A path can never be empty, and a path can have at most 100 elements.
    * items [GooglePrivacyDlpV2PathElement](#googleprivacydlpv2pathelement)

### GooglePrivacyDlpV2KindExpression
* GooglePrivacyDlpV2KindExpression `object`: A representation of a Datastore kind.
  * name `string`: The name of the kind.

### GooglePrivacyDlpV2KmsWrappedCryptoKey
* GooglePrivacyDlpV2KmsWrappedCryptoKey `object`: Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128/192/256 bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a kms-wrapped crypto key: dlp.kms.encrypt
  * cryptoKeyName `string`: Required. The resource name of the KMS CryptoKey to use for unwrapping.
  * wrappedKey `string`: Required. The wrapped data crypto key.

### GooglePrivacyDlpV2LDiversityConfig
* GooglePrivacyDlpV2LDiversityConfig `object`: l-diversity metric, used for analysis of reidentification risk.
  * quasiIds `array`: Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * sensitiveAttribute [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2LDiversityEquivalenceClass
* GooglePrivacyDlpV2LDiversityEquivalenceClass `object`: The set of columns' values that share the same ldiversity value.
  * equivalenceClassSize `string`: Size of the k-anonymity equivalence class.
  * numDistinctSensitiveValues `string`: Number of distinct sensitive values in this equivalence class.
  * quasiIdsValues `array`: Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * topSensitiveValues `array`: Estimated frequencies of top sensitive values.
    * items [GooglePrivacyDlpV2ValueFrequency](#googleprivacydlpv2valuefrequency)

### GooglePrivacyDlpV2LDiversityHistogramBucket
* GooglePrivacyDlpV2LDiversityHistogramBucket `object`: Histogram of l-diversity equivalence class sensitive value frequencies.
  * bucketSize `string`: Total number of equivalence classes in this bucket.
  * bucketValueCount `string`: Total number of distinct equivalence classes in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
    * items [GooglePrivacyDlpV2LDiversityEquivalenceClass](#googleprivacydlpv2ldiversityequivalenceclass)
  * sensitiveValueFrequencyLowerBound `string`: Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
  * sensitiveValueFrequencyUpperBound `string`: Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.

### GooglePrivacyDlpV2LDiversityResult
* GooglePrivacyDlpV2LDiversityResult `object`: Result of the l-diversity computation.
  * sensitiveValueFrequencyHistogramBuckets `array`: Histogram of l-diversity equivalence class sensitive value frequencies.
    * items [GooglePrivacyDlpV2LDiversityHistogramBucket](#googleprivacydlpv2ldiversityhistogrambucket)

### GooglePrivacyDlpV2LargeCustomDictionaryConfig
* GooglePrivacyDlpV2LargeCustomDictionaryConfig `object`: Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Google Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
  * bigQueryField [GooglePrivacyDlpV2BigQueryField](#googleprivacydlpv2bigqueryfield)
  * cloudStorageFileSet [GooglePrivacyDlpV2CloudStorageFileSet](#googleprivacydlpv2cloudstoragefileset)
  * outputPath [GooglePrivacyDlpV2CloudStoragePath](#googleprivacydlpv2cloudstoragepath)

### GooglePrivacyDlpV2LargeCustomDictionaryStats
* GooglePrivacyDlpV2LargeCustomDictionaryStats `object`: Summary statistics of a custom dictionary.
  * approxNumPhrases `string`: Approximate number of distinct phrases in the dictionary.

### GooglePrivacyDlpV2LeaveUntransformed
* GooglePrivacyDlpV2LeaveUntransformed `object`: Skips the data without modifying it if the requested transformation would cause an error. For example, if a `DateShift` transformation were applied an an IP address, this mode would leave the IP address unchanged in the response.

### GooglePrivacyDlpV2LikelihoodAdjustment
* GooglePrivacyDlpV2LikelihoodAdjustment `object`: Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
  * fixedLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Set the likelihood of a finding to a fixed value.
  * relativeLikelihood `integer`: Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.

### GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
* GooglePrivacyDlpV2ListDeidentifyTemplatesResponse `object`: Response message for ListDeidentifyTemplates.
  * deidentifyTemplates `array`: List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.
    * items [GooglePrivacyDlpV2DeidentifyTemplate](#googleprivacydlpv2deidentifytemplate)
  * nextPageToken `string`: If the next page is available then the next page token to be used in following ListDeidentifyTemplates request.

### GooglePrivacyDlpV2ListDlpJobsResponse
* GooglePrivacyDlpV2ListDlpJobsResponse `object`: The response message for listing DLP jobs.
  * jobs `array`: A list of DlpJobs that matches the specified filter in the request.
    * items [GooglePrivacyDlpV2DlpJob](#googleprivacydlpv2dlpjob)
  * nextPageToken `string`: The standard List next-page token.

### GooglePrivacyDlpV2ListInfoTypesResponse
* GooglePrivacyDlpV2ListInfoTypesResponse `object`: Response to the ListInfoTypes request.
  * infoTypes `array`: Set of sensitive infoTypes.
    * items [GooglePrivacyDlpV2InfoTypeDescription](#googleprivacydlpv2infotypedescription)

### GooglePrivacyDlpV2ListInspectTemplatesResponse
* GooglePrivacyDlpV2ListInspectTemplatesResponse `object`: Response message for ListInspectTemplates.
  * inspectTemplates `array`: List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
    * items [GooglePrivacyDlpV2InspectTemplate](#googleprivacydlpv2inspecttemplate)
  * nextPageToken `string`: If the next page is available then the next page token to be used in following ListInspectTemplates request.

### GooglePrivacyDlpV2ListJobTriggersResponse
* GooglePrivacyDlpV2ListJobTriggersResponse `object`: Response message for ListJobTriggers.
  * jobTriggers `array`: List of triggeredJobs, up to page_size in ListJobTriggersRequest.
    * items [GooglePrivacyDlpV2JobTrigger](#googleprivacydlpv2jobtrigger)
  * nextPageToken `string`: If the next page is available then the next page token to be used in following ListJobTriggers request.

### GooglePrivacyDlpV2ListStoredInfoTypesResponse
* GooglePrivacyDlpV2ListStoredInfoTypesResponse `object`: Response message for ListStoredInfoTypes.
  * nextPageToken `string`: If the next page is available then the next page token to be used in following ListStoredInfoTypes request.
  * storedInfoTypes `array`: List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest.
    * items [GooglePrivacyDlpV2StoredInfoType](#googleprivacydlpv2storedinfotype)

### GooglePrivacyDlpV2Location
* GooglePrivacyDlpV2Location `object`: Specifies the location of the finding.
  * byteRange [GooglePrivacyDlpV2Range](#googleprivacydlpv2range)
  * codepointRange [GooglePrivacyDlpV2Range](#googleprivacydlpv2range)
  * container [GooglePrivacyDlpV2Container](#googleprivacydlpv2container)
  * contentLocations `array`: List of nested objects pointing to the precise location of the finding within the file or record.
    * items [GooglePrivacyDlpV2ContentLocation](#googleprivacydlpv2contentlocation)

### GooglePrivacyDlpV2Manual
* GooglePrivacyDlpV2Manual `object`: Job trigger option for hybrid jobs. Jobs must be manually created and finished.

### GooglePrivacyDlpV2MetadataLocation
* GooglePrivacyDlpV2MetadataLocation `object`: Metadata Location
  * storageLabel [GooglePrivacyDlpV2StorageMetadataLabel](#googleprivacydlpv2storagemetadatalabel)
  * type `string` (values: METADATATYPE_UNSPECIFIED, STORAGE_METADATA): Type of metadata containing the finding.

### GooglePrivacyDlpV2NumericalStatsConfig
* GooglePrivacyDlpV2NumericalStatsConfig `object`: Compute numerical stats over an individual column, including min, max, and quantiles.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2NumericalStatsResult
* GooglePrivacyDlpV2NumericalStatsResult `object`: Result of the numerical stats computation.
  * maxValue [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * minValue [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)
  * quantileValues `array`: List of 99 values that partition the set of field values into 100 equal sized buckets.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2OutputStorageConfig
* GooglePrivacyDlpV2OutputStorageConfig `object`: Cloud repository for storing output.
  * outputSchema `string` (values: OUTPUT_SCHEMA_UNSPECIFIED, BASIC_COLUMNS, GCS_COLUMNS, DATASTORE_COLUMNS, BIG_QUERY_COLUMNS, ALL_COLUMNS): Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage.
  * table [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2PartitionId
* GooglePrivacyDlpV2PartitionId `object`: Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### GooglePrivacyDlpV2PathElement
* GooglePrivacyDlpV2PathElement `object`: A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
  * id `string`: The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
  * kind `string`: The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`.
  * name `string`: The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`.

### GooglePrivacyDlpV2PrimitiveTransformation
* GooglePrivacyDlpV2PrimitiveTransformation `object`: A rule for transforming a value.
  * bucketingConfig [GooglePrivacyDlpV2BucketingConfig](#googleprivacydlpv2bucketingconfig)
  * characterMaskConfig [GooglePrivacyDlpV2CharacterMaskConfig](#googleprivacydlpv2charactermaskconfig)
  * cryptoDeterministicConfig [GooglePrivacyDlpV2CryptoDeterministicConfig](#googleprivacydlpv2cryptodeterministicconfig)
  * cryptoHashConfig [GooglePrivacyDlpV2CryptoHashConfig](#googleprivacydlpv2cryptohashconfig)
  * cryptoReplaceFfxFpeConfig [GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig](#googleprivacydlpv2cryptoreplaceffxfpeconfig)
  * dateShiftConfig [GooglePrivacyDlpV2DateShiftConfig](#googleprivacydlpv2dateshiftconfig)
  * fixedSizeBucketingConfig [GooglePrivacyDlpV2FixedSizeBucketingConfig](#googleprivacydlpv2fixedsizebucketingconfig)
  * redactConfig [GooglePrivacyDlpV2RedactConfig](#googleprivacydlpv2redactconfig)
  * replaceConfig [GooglePrivacyDlpV2ReplaceValueConfig](#googleprivacydlpv2replacevalueconfig)
  * replaceWithInfoTypeConfig [GooglePrivacyDlpV2ReplaceWithInfoTypeConfig](#googleprivacydlpv2replacewithinfotypeconfig)
  * timePartConfig [GooglePrivacyDlpV2TimePartConfig](#googleprivacydlpv2timepartconfig)

### GooglePrivacyDlpV2PrivacyMetric
* GooglePrivacyDlpV2PrivacyMetric `object`: Privacy metric to compute for reidentification risk analysis.
  * categoricalStatsConfig [GooglePrivacyDlpV2CategoricalStatsConfig](#googleprivacydlpv2categoricalstatsconfig)
  * deltaPresenceEstimationConfig [GooglePrivacyDlpV2DeltaPresenceEstimationConfig](#googleprivacydlpv2deltapresenceestimationconfig)
  * kAnonymityConfig [GooglePrivacyDlpV2KAnonymityConfig](#googleprivacydlpv2kanonymityconfig)
  * kMapEstimationConfig [GooglePrivacyDlpV2KMapEstimationConfig](#googleprivacydlpv2kmapestimationconfig)
  * lDiversityConfig [GooglePrivacyDlpV2LDiversityConfig](#googleprivacydlpv2ldiversityconfig)
  * numericalStatsConfig [GooglePrivacyDlpV2NumericalStatsConfig](#googleprivacydlpv2numericalstatsconfig)

### GooglePrivacyDlpV2Proximity
* GooglePrivacyDlpV2Proximity `object`: Message for specifying a window around a finding to apply a detection rule.
  * windowAfter `integer`: Number of characters after the finding to consider.
  * windowBefore `integer`: Number of characters before the finding to consider.

### GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog
* GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog `object`: Publish findings of a DlpJob to Cloud Data Catalog. Labels summarizing the results of the DlpJob will be applied to the entry for the resource scanned in Cloud Data Catalog. Any labels previously written by another DlpJob will be deleted. InfoType naming patterns are strictly enforced when using this feature. Note that the findings will be persisted in Cloud Data Catalog storage and are governed by Data Catalog service-specific policy, see https://cloud.google.com/terms/service-terms Only a single instance of this action can be specified and only allowed if all resources being scanned are BigQuery tables. Compatible with: Inspect

### GooglePrivacyDlpV2PublishSummaryToCscc
* GooglePrivacyDlpV2PublishSummaryToCscc `object`: Publish the result summary of a DlpJob to the Cloud Security Command Center (CSCC Alpha). This action is only available for projects which are parts of an organization and whitelisted for the alpha Cloud Security Command Center. The action will publish count of finding instances and their info types. The summary of findings will be persisted in CSCC and are governed by CSCC service-specific policy, see https://cloud.google.com/terms/service-terms Only a single instance of this action can be specified. Compatible with: Inspect

### GooglePrivacyDlpV2PublishToPubSub
* GooglePrivacyDlpV2PublishToPubSub `object`: Publish a message into given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk
  * topic `string`: Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.

### GooglePrivacyDlpV2PublishToStackdriver
* GooglePrivacyDlpV2PublishToStackdriver `object`: Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as 'Custom' under the Stackdriver label 'info_type'.

### GooglePrivacyDlpV2QuasiId
* GooglePrivacyDlpV2QuasiId `object`: A column with a semantic tag attached.
  * customTag `string`: A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * inferred [GoogleProtobufEmpty](#googleprotobufempty)
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2QuasiIdField
* GooglePrivacyDlpV2QuasiIdField `object`: A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
  * customTag `string`: A auxiliary field.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2QuasiIdentifierField
* GooglePrivacyDlpV2QuasiIdentifierField `object`: A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
  * customTag `string`: A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2QuoteInfo
* GooglePrivacyDlpV2QuoteInfo `object`: Message for infoType-dependent details parsed from quote.
  * dateTime [GooglePrivacyDlpV2DateTime](#googleprivacydlpv2datetime)

### GooglePrivacyDlpV2Range
* GooglePrivacyDlpV2Range `object`: Generic half-open interval [start, end)
  * end `string`: Index of the last character of the range (exclusive).
  * start `string`: Index of the first character of the range (inclusive).

### GooglePrivacyDlpV2RecordCondition
* GooglePrivacyDlpV2RecordCondition `object`: A condition for determining whether a transformation should be applied to a field.
  * expressions [GooglePrivacyDlpV2Expressions](#googleprivacydlpv2expressions)

### GooglePrivacyDlpV2RecordKey
* GooglePrivacyDlpV2RecordKey `object`: Message for a unique key indicating a record that contains a finding.
  * bigQueryKey [GooglePrivacyDlpV2BigQueryKey](#googleprivacydlpv2bigquerykey)
  * datastoreKey [GooglePrivacyDlpV2DatastoreKey](#googleprivacydlpv2datastorekey)
  * idValues `array`: Values of identifying columns in the given row. Order of values matches the order of `identifying_fields` specified in the scanning request.
    * items `string`

### GooglePrivacyDlpV2RecordLocation
* GooglePrivacyDlpV2RecordLocation `object`: Location of a finding within a row or record.
  * fieldId [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * recordKey [GooglePrivacyDlpV2RecordKey](#googleprivacydlpv2recordkey)
  * tableLocation [GooglePrivacyDlpV2TableLocation](#googleprivacydlpv2tablelocation)

### GooglePrivacyDlpV2RecordSuppression
* GooglePrivacyDlpV2RecordSuppression `object`: Configuration to suppress records whose suppression conditions evaluate to true.
  * condition [GooglePrivacyDlpV2RecordCondition](#googleprivacydlpv2recordcondition)

### GooglePrivacyDlpV2RecordTransformations
* GooglePrivacyDlpV2RecordTransformations `object`: A type of transformation that is applied over structured data such as a table.
  * fieldTransformations `array`: Transform the record by applying various field transformations.
    * items [GooglePrivacyDlpV2FieldTransformation](#googleprivacydlpv2fieldtransformation)
  * recordSuppressions `array`: Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.
    * items [GooglePrivacyDlpV2RecordSuppression](#googleprivacydlpv2recordsuppression)

### GooglePrivacyDlpV2RedactConfig
* GooglePrivacyDlpV2RedactConfig `object`: Redact a given value. For example, if used with an `InfoTypeTransformation` transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the output would be 'My phone number is '.

### GooglePrivacyDlpV2RedactImageRequest
* GooglePrivacyDlpV2RedactImageRequest `object`: Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
  * byteItem [GooglePrivacyDlpV2ByteContentItem](#googleprivacydlpv2bytecontentitem)
  * imageRedactionConfigs `array`: The configuration for specifying what content to redact from images.
    * items [GooglePrivacyDlpV2ImageRedactionConfig](#googleprivacydlpv2imageredactionconfig)
  * includeFindings `boolean`: Whether the response should include findings along with the redacted image.
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * locationId `string`: Deprecated. This field has no effect.

### GooglePrivacyDlpV2RedactImageResponse
* GooglePrivacyDlpV2RedactImageResponse `object`: Results of redacting an image.
  * extractedText `string`: If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image.
  * inspectResult [GooglePrivacyDlpV2InspectResult](#googleprivacydlpv2inspectresult)
  * redactedImage `string`: The redacted image. The type will be the same as the original image.

### GooglePrivacyDlpV2Regex
* GooglePrivacyDlpV2Regex `object`: Message defining a custom regular expression.
  * groupIndexes `array`: The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
    * items `integer`
  * pattern `string`: Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

### GooglePrivacyDlpV2ReidentifyContentRequest
* GooglePrivacyDlpV2ReidentifyContentRequest `object`: Request to re-identify an item.
  * inspectConfig [GooglePrivacyDlpV2InspectConfig](#googleprivacydlpv2inspectconfig)
  * inspectTemplateName `string`: Template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)
  * locationId `string`: Deprecated. This field has no effect.
  * reidentifyConfig [GooglePrivacyDlpV2DeidentifyConfig](#googleprivacydlpv2deidentifyconfig)
  * reidentifyTemplateName `string`: Template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. The `DeidentifyTemplate` used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.

### GooglePrivacyDlpV2ReidentifyContentResponse
* GooglePrivacyDlpV2ReidentifyContentResponse `object`: Results of re-identifying a item.
  * item [GooglePrivacyDlpV2ContentItem](#googleprivacydlpv2contentitem)
  * overview [GooglePrivacyDlpV2TransformationOverview](#googleprivacydlpv2transformationoverview)

### GooglePrivacyDlpV2ReplaceValueConfig
* GooglePrivacyDlpV2ReplaceValueConfig `object`: Replace each input value with a given `Value`.
  * newValue [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2ReplaceWithInfoTypeConfig
* GooglePrivacyDlpV2ReplaceWithInfoTypeConfig `object`: Replace each matching finding with the name of the info_type.

### GooglePrivacyDlpV2RequestedOptions
* GooglePrivacyDlpV2RequestedOptions `object`: Snapshot of the inspection configuration.
  * jobConfig [GooglePrivacyDlpV2InspectJobConfig](#googleprivacydlpv2inspectjobconfig)
  * snapshotInspectTemplate [GooglePrivacyDlpV2InspectTemplate](#googleprivacydlpv2inspecttemplate)

### GooglePrivacyDlpV2RequestedRiskAnalysisOptions
* GooglePrivacyDlpV2RequestedRiskAnalysisOptions `object`: Risk analysis options.
  * jobConfig [GooglePrivacyDlpV2RiskAnalysisJobConfig](#googleprivacydlpv2riskanalysisjobconfig)

### GooglePrivacyDlpV2Result
* GooglePrivacyDlpV2Result `object`: All result fields mentioned below are updated while the job is processing.
  * hybridStats [GooglePrivacyDlpV2HybridInspectStatistics](#googleprivacydlpv2hybridinspectstatistics)
  * infoTypeStats `array`: Statistics of how many instances of each info type were found during inspect job.
    * items [GooglePrivacyDlpV2InfoTypeStats](#googleprivacydlpv2infotypestats)
  * processedBytes `string`: Total size in bytes that were processed.
  * totalEstimatedBytes `string`: Estimate of the number of bytes to process.

### GooglePrivacyDlpV2RiskAnalysisJobConfig
* GooglePrivacyDlpV2RiskAnalysisJobConfig `object`: Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
  * actions `array`: Actions to execute at the completion of the job. Are executed in the order provided.
    * items [GooglePrivacyDlpV2Action](#googleprivacydlpv2action)
  * privacyMetric [GooglePrivacyDlpV2PrivacyMetric](#googleprivacydlpv2privacymetric)
  * sourceTable [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2Row
* GooglePrivacyDlpV2Row `object`: Values of the row.
  * values `array`: Individual cells.
    * items [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2SaveFindings
* GooglePrivacyDlpV2SaveFindings `object`: If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
  * outputConfig [GooglePrivacyDlpV2OutputStorageConfig](#googleprivacydlpv2outputstorageconfig)

### GooglePrivacyDlpV2Schedule
* GooglePrivacyDlpV2Schedule `object`: Schedule for triggeredJobs.
  * recurrencePeriodDuration `string`: With this option a job is started a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

### GooglePrivacyDlpV2StatisticalTable
* GooglePrivacyDlpV2StatisticalTable `object`: An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
  * quasiIds `array`: Required. Quasi-identifier columns.
    * items [GooglePrivacyDlpV2QuasiIdentifierField](#googleprivacydlpv2quasiidentifierfield)
  * relativeFrequency [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * table [GooglePrivacyDlpV2BigQueryTable](#googleprivacydlpv2bigquerytable)

### GooglePrivacyDlpV2StorageConfig
* GooglePrivacyDlpV2StorageConfig `object`: Shared message indicating Cloud storage type.
  * bigQueryOptions [GooglePrivacyDlpV2BigQueryOptions](#googleprivacydlpv2bigqueryoptions)
  * cloudStorageOptions [GooglePrivacyDlpV2CloudStorageOptions](#googleprivacydlpv2cloudstorageoptions)
  * datastoreOptions [GooglePrivacyDlpV2DatastoreOptions](#googleprivacydlpv2datastoreoptions)
  * hybridOptions [GooglePrivacyDlpV2HybridOptions](#googleprivacydlpv2hybridoptions)
  * timespanConfig [GooglePrivacyDlpV2TimespanConfig](#googleprivacydlpv2timespanconfig)

### GooglePrivacyDlpV2StorageMetadataLabel
* GooglePrivacyDlpV2StorageMetadataLabel `object`: Storage metadata label to indicate which metadata entry contains findings.
  * key `string`

### GooglePrivacyDlpV2StoredInfoType
* GooglePrivacyDlpV2StoredInfoType `object`: StoredInfoType resource message that contains information about the current version and any pending updates.
  * currentVersion [GooglePrivacyDlpV2StoredInfoTypeVersion](#googleprivacydlpv2storedinfotypeversion)
  * name `string`: Resource name.
  * pendingVersions `array`: Pending versions of the stored info type. Empty if no versions are pending.
    * items [GooglePrivacyDlpV2StoredInfoTypeVersion](#googleprivacydlpv2storedinfotypeversion)

### GooglePrivacyDlpV2StoredInfoTypeConfig
* GooglePrivacyDlpV2StoredInfoTypeConfig `object`: Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
  * description `string`: Description of the StoredInfoType (max 256 characters).
  * dictionary [GooglePrivacyDlpV2Dictionary](#googleprivacydlpv2dictionary)
  * displayName `string`: Display name of the StoredInfoType (max 256 characters).
  * largeCustomDictionary [GooglePrivacyDlpV2LargeCustomDictionaryConfig](#googleprivacydlpv2largecustomdictionaryconfig)
  * regex [GooglePrivacyDlpV2Regex](#googleprivacydlpv2regex)

### GooglePrivacyDlpV2StoredInfoTypeStats
* GooglePrivacyDlpV2StoredInfoTypeStats `object`: Statistics for a StoredInfoType.
  * largeCustomDictionary [GooglePrivacyDlpV2LargeCustomDictionaryStats](#googleprivacydlpv2largecustomdictionarystats)

### GooglePrivacyDlpV2StoredInfoTypeVersion
* GooglePrivacyDlpV2StoredInfoTypeVersion `object`: Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
  * config [GooglePrivacyDlpV2StoredInfoTypeConfig](#googleprivacydlpv2storedinfotypeconfig)
  * createTime `string`: Create timestamp of the version. Read-only, determined by the system when the version is created.
  * errors `array`: Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user's Google Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error.
    * items [GooglePrivacyDlpV2Error](#googleprivacydlpv2error)
  * state `string` (values: STORED_INFO_TYPE_STATE_UNSPECIFIED, PENDING, READY, FAILED, INVALID): Stored info type version state. Read-only, updated by the system during dictionary creation.
  * stats [GooglePrivacyDlpV2StoredInfoTypeStats](#googleprivacydlpv2storedinfotypestats)

### GooglePrivacyDlpV2StoredType
* GooglePrivacyDlpV2StoredType `object`: A reference to a StoredInfoType to use with scanning.
  * createTime `string`: Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.
  * name `string`: Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.

### GooglePrivacyDlpV2SummaryResult
* GooglePrivacyDlpV2SummaryResult `object`: A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
  * code `string` (values: TRANSFORMATION_RESULT_CODE_UNSPECIFIED, SUCCESS, ERROR): Outcome of the transformation.
  * count `string`: Number of transformations counted by this result.
  * details `string`: A place for warnings or errors to show up if a transformation didn't work as expected.

### GooglePrivacyDlpV2SurrogateType
* GooglePrivacyDlpV2SurrogateType `object`: Message for detecting output from deidentification transformations such as [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a "surrogate" as output. This should be used in conjunction with a field on the transformation such as `surrogate_info_type`. This CustomInfoType does not support the use of `detection_rules`.

### GooglePrivacyDlpV2Table
* GooglePrivacyDlpV2Table `object`: Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to learn more.
  * headers `array`: Headers of the table.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * rows `array`: Rows of the table.
    * items [GooglePrivacyDlpV2Row](#googleprivacydlpv2row)

### GooglePrivacyDlpV2TableLocation
* GooglePrivacyDlpV2TableLocation `object`: Location of a finding within a table.
  * rowIndex `string`: The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding.

### GooglePrivacyDlpV2TableOptions
* GooglePrivacyDlpV2TableOptions `object`: Instructions regarding the table content being inspected.
  * identifyingFields `array`: The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided.
    * items [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2TaggedField
* GooglePrivacyDlpV2TaggedField `object`: A column with a semantic tag attached.
  * customTag `string`: A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * inferred [GoogleProtobufEmpty](#googleprotobufempty)
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)

### GooglePrivacyDlpV2ThrowError
* GooglePrivacyDlpV2ThrowError `object`: Throw an error and fail the request when a transformation error occurs.

### GooglePrivacyDlpV2TimePartConfig
* GooglePrivacyDlpV2TimePartConfig `object`: For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.
  * partToExtract `string` (values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY): The part of the time to keep.

### GooglePrivacyDlpV2TimeZone
* GooglePrivacyDlpV2TimeZone `object`: Time zone of the date time object.
  * offsetMinutes `integer`: Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540.

### GooglePrivacyDlpV2TimespanConfig
* GooglePrivacyDlpV2TimespanConfig `object`: Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Google Cloud Storage and BigQuery.
  * enableAutoPopulationOfTimespanConfig `boolean`: When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger.
  * endTime `string`: Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
  * startTime `string`: Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
  * timestampField [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)

### GooglePrivacyDlpV2TransformationErrorHandling
* GooglePrivacyDlpV2TransformationErrorHandling `object`: How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.
  * leaveUntransformed [GooglePrivacyDlpV2LeaveUntransformed](#googleprivacydlpv2leaveuntransformed)
  * throwError [GooglePrivacyDlpV2ThrowError](#googleprivacydlpv2throwerror)

### GooglePrivacyDlpV2TransformationOverview
* GooglePrivacyDlpV2TransformationOverview `object`: Overview of the modifications that occurred.
  * transformationSummaries `array`: Transformations applied to the dataset.
    * items [GooglePrivacyDlpV2TransformationSummary](#googleprivacydlpv2transformationsummary)
  * transformedBytes `string`: Total size in bytes that were transformed in some way.

### GooglePrivacyDlpV2TransformationSummary
* GooglePrivacyDlpV2TransformationSummary `object`: Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
  * field [GooglePrivacyDlpV2FieldId](#googleprivacydlpv2fieldid)
  * fieldTransformations `array`: The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied.
    * items [GooglePrivacyDlpV2FieldTransformation](#googleprivacydlpv2fieldtransformation)
  * infoType [GooglePrivacyDlpV2InfoType](#googleprivacydlpv2infotype)
  * recordSuppress [GooglePrivacyDlpV2RecordSuppression](#googleprivacydlpv2recordsuppression)
  * results `array`: Collection of all transformations that took place or had an error.
    * items [GooglePrivacyDlpV2SummaryResult](#googleprivacydlpv2summaryresult)
  * transformation [GooglePrivacyDlpV2PrimitiveTransformation](#googleprivacydlpv2primitivetransformation)
  * transformedBytes `string`: Total size in bytes that were transformed in some way.

### GooglePrivacyDlpV2TransientCryptoKey
* GooglePrivacyDlpV2TransientCryptoKey `object`: Use this to have a random data crypto key generated. It will be discarded after the request finishes.
  * name `string`: Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).

### GooglePrivacyDlpV2Trigger
* GooglePrivacyDlpV2Trigger `object`: What event needs to occur for a new job to be started.
  * manual [GooglePrivacyDlpV2Manual](#googleprivacydlpv2manual)
  * schedule [GooglePrivacyDlpV2Schedule](#googleprivacydlpv2schedule)

### GooglePrivacyDlpV2UnwrappedCryptoKey
* GooglePrivacyDlpV2UnwrappedCryptoKey `object`: Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
  * key `string`: Required. A 128/192/256 bit key.

### GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest
* GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest `object`: Request message for UpdateDeidentifyTemplate.
  * deidentifyTemplate [GooglePrivacyDlpV2DeidentifyTemplate](#googleprivacydlpv2deidentifytemplate)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2UpdateInspectTemplateRequest
* GooglePrivacyDlpV2UpdateInspectTemplateRequest `object`: Request message for UpdateInspectTemplate.
  * inspectTemplate [GooglePrivacyDlpV2InspectTemplate](#googleprivacydlpv2inspecttemplate)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2UpdateJobTriggerRequest
* GooglePrivacyDlpV2UpdateJobTriggerRequest `object`: Request message for UpdateJobTrigger.
  * jobTrigger [GooglePrivacyDlpV2JobTrigger](#googleprivacydlpv2jobtrigger)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
* GooglePrivacyDlpV2UpdateStoredInfoTypeRequest `object`: Request message for UpdateStoredInfoType.
  * config [GooglePrivacyDlpV2StoredInfoTypeConfig](#googleprivacydlpv2storedinfotypeconfig)
  * updateMask `string`: Mask to control which fields get updated.

### GooglePrivacyDlpV2Value
* GooglePrivacyDlpV2Value `object`: Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
  * booleanValue `boolean`: boolean
  * dateValue [GoogleTypeDate](#googletypedate)
  * dayOfWeekValue `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): day of week
  * floatValue `number`: float
  * integerValue `string`: integer
  * stringValue `string`: string
  * timeValue [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timestampValue `string`: timestamp

### GooglePrivacyDlpV2ValueFrequency
* GooglePrivacyDlpV2ValueFrequency `object`: A value of a field, including its frequency.
  * count `string`: How many times the value is contained in the field.
  * value [GooglePrivacyDlpV2Value](#googleprivacydlpv2value)

### GooglePrivacyDlpV2WordList
* GooglePrivacyDlpV2WordList `object`: Message defining a list of words or phrases to search for in the data.
  * words `array`: Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
    * items `string`

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### GoogleTypeDate
* GoogleTypeDate `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### GoogleTypeTimeOfDay
* GoogleTypeTimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.


