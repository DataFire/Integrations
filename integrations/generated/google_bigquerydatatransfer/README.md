# @datafire/google_bigquerydatatransfer

Client library for BigQuery Data Transfer API

## Installation and Usage
```bash
npm install --save @datafire/google_bigquerydatatransfer
```
```js
let google_bigquerydatatransfer = require('@datafire/google_bigquerydatatransfer').create({
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

Schedule queries or transfer external data from SaaS applications to Google BigQuery on a regular basis.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_bigquerydatatransfer.oauthCallback({
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
google_bigquerydatatransfer.oauthRefresh(null, context)
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

### bigquerydatatransfer.projects.transferConfigs.runs.delete
Deletes the specified transfer run.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.runs.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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

### bigquerydatatransfer.projects.transferConfigs.runs.get
Returns information about the particular transfer run.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.runs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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
* output [TransferRun](#transferrun)

### bigquerydatatransfer.projects.transferConfigs.patch
Updates a data transfer configuration. All fields must be set, even if they are not updated.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
  * authorizationCode `string`: Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=&scope=&redirect_uri= * client_id should be OAuth client_id of BigQuery DTS API for the given data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then authorization code is posted to the opener of authorization flow window. Otherwise it will be sent to the redirect uri. A special value of urn:ietf:wg:oauth:2.0:oob means that authorization code should be returned in the title bar of the browser, with the page text prompting the user to copy the code and paste it in the application.
  * serviceAccountName `string`: Optional service account name. If this field is set and "service_account_name" is set in update_mask, transfer config will be updated to use this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
  * updateMask `string`: Required. Required list of fields to be updated in this request.
  * versionInfo `string`: Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
  * body [TransferConfig](#transferconfig)
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
* output [TransferConfig](#transferconfig)

### bigquerydatatransfer.projects.locations.list
Lists information about the supported locations for this service.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListLocationsResponse](#listlocationsresponse)

### bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.locations.dataSources.checkValidCreds({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
  * body [CheckValidCredsRequest](#checkvalidcredsrequest)
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
* output [CheckValidCredsResponse](#checkvalidcredsresponse)

### bigquerydatatransfer.projects.locations.dataSources.list
Lists supported data sources and returns their settings, which can be used for UI rendering.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.locations.dataSources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
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
* output [ListDataSourcesResponse](#listdatasourcesresponse)

### bigquerydatatransfer.projects.transferConfigs.runs.list
Returns information about running and completed jobs.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.runs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
  * runAttempt `string` (values: RUN_ATTEMPT_UNSPECIFIED, LATEST): Indicates how run attempts are to be pulled.
  * states `array`: When specified, only transfer runs with requested states are returned.
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
* output [ListTransferRunsResponse](#listtransferrunsresponse)

### bigquerydatatransfer.projects.transferConfigs.list
Returns information about all data transfers in the project.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The BigQuery project id for which data sources should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
  * dataSourceIds `array`: When specified, only configurations of requested data sources are returned.
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
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
* output [ListTransferConfigsResponse](#listtransferconfigsresponse)

### bigquerydatatransfer.projects.transferConfigs.create
Creates a new data transfer configuration.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
  * authorizationCode `string`: Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=&scope=&redirect_uri= * client_id should be OAuth client_id of BigQuery DTS API for the given data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then authorization code is posted to the opener of authorization flow window. Otherwise it will be sent to the redirect uri. A special value of urn:ietf:wg:oauth:2.0:oob means that authorization code should be returned in the title bar of the browser, with the page text prompting the user to copy the code and paste it in the application.
  * serviceAccountName `string`: Optional service account name. If this field is set, transfer config will be created with this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
  * versionInfo `string`: Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
  * body [TransferConfig](#transferconfig)
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
* output [TransferConfig](#transferconfig)

### bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
Returns user facing log messages for the data transfer run.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
  * messageTypes `array`: Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
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
* output [ListTransferLogsResponse](#listtransferlogsresponse)

### bigquerydatatransfer.projects.transferConfigs.scheduleRuns
Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.scheduleRuns({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
  * body [ScheduleTransferRunsRequest](#scheduletransferrunsrequest)
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
* output [ScheduleTransferRunsResponse](#scheduletransferrunsresponse)

### bigquerydatatransfer.projects.transferConfigs.startManualRuns
Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.


```js
google_bigquerydatatransfer.bigquerydatatransfer.projects.transferConfigs.startManualRuns({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
  * body [StartManualTransferRunsRequest](#startmanualtransferrunsrequest)
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
* output [StartManualTransferRunsResponse](#startmanualtransferrunsresponse)



## Definitions

### CheckValidCredsRequest
* CheckValidCredsRequest `object`: A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context. If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.

### CheckValidCredsResponse
* CheckValidCredsResponse `object`: A response indicating whether the credentials exist and are valid.
  * hasValidCreds `boolean`: If set to `true`, the credentials exist and are valid.

### DataSource
* DataSource `object`: Represents data source metadata. Metadata is sufficient to render UI and request proper OAuth tokens.
  * parameters `array`: Data source parameters.
    * items [DataSourceParameter](#datasourceparameter)
  * authorizationType `string` (values: AUTHORIZATION_TYPE_UNSPECIFIED, AUTHORIZATION_CODE, GOOGLE_PLUS_AUTHORIZATION_CODE, FIRST_PARTY_OAUTH): Indicates the type of authorization.
  * clientId `string`: Data source client id which should be used to receive refresh token.
  * dataRefreshType `string` (values: DATA_REFRESH_TYPE_UNSPECIFIED, SLIDING_WINDOW, CUSTOM_SLIDING_WINDOW): Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.
  * dataSourceId `string`: Data source id.
  * defaultDataRefreshWindowDays `integer`: Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
  * defaultSchedule `string`: Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.
  * description `string`: User friendly data source description string.
  * displayName `string`: User friendly data source name.
  * helpUrl `string`: Url for the help document for this data source.
  * manualRunsDisabled `boolean`: Disables backfilling and manual run scheduling for the data source.
  * minimumScheduleInterval `string`: The minimum interval for scheduler to schedule runs.
  * name `string`: Output only. Data source resource name.
  * scopes `array`: Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery
    * items `string`
  * supportsCustomSchedule `boolean`: Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.
  * supportsMultipleTransfers `boolean`: Deprecated. This field has no effect.
  * transferType `string` (values: TRANSFER_TYPE_UNSPECIFIED, BATCH, STREAMING): Deprecated. This field has no effect.
  * updateDeadlineSeconds `integer`: The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.

### DataSourceParameter
* DataSourceParameter `object`: Represents a data source parameter with validation rules, so that parameters can be rendered in the UI. These parameters are given to us by supported data sources, and include all needed information for rendering and validation. Thus, whoever uses this api can decide to generate either generic ui, or custom data source specific forms.
  * allowedValues `array`: All possible values for the parameter.
    * items `string`
  * deprecated `boolean`: If true, it should not be used in new transfers, and it should not be visible to users.
  * description `string`: Parameter description.
  * displayName `string`: Parameter display name in the user interface.
  * fields `array`: Deprecated. This field has no effect.
    * items [DataSourceParameter](#datasourceparameter)
  * immutable `boolean`: Cannot be changed after initial creation.
  * maxValue `number`: For integer and double values specifies maxminum allowed value.
  * minValue `number`: For integer and double values specifies minimum allowed value.
  * paramId `string`: Parameter identifier.
  * recurse `boolean`: Deprecated. This field has no effect.
  * repeated `boolean`: Deprecated. This field has no effect.
  * required `boolean`: Is parameter required.
  * type `string` (values: TYPE_UNSPECIFIED, STRING, INTEGER, DOUBLE, BOOLEAN, RECORD, PLUS_PAGE): Parameter type.
  * validationDescription `string`: Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.
  * validationHelpUrl `string`: URL to a help document to further explain the naming requirements.
  * validationRegex `string`: Regular expression which can be used for parameter validation.

### EmailPreferences
* EmailPreferences `object`: Represents preferences for sending email notifications for transfer run events.
  * enableFailureEmail `boolean`: If true, email notifications will be sent on transfer run failures.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ListDataSourcesResponse
* ListDataSourcesResponse `object`: Returns list of supported data sources and their metadata.
  * dataSources `array`: List of supported data sources and their transfer settings.
    * items [DataSource](#datasource)
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListTransferConfigsResponse
* ListTransferConfigsResponse `object`: The returned list of pipelines in the project.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.
  * transferConfigs `array`: Output only. The stored pipeline transfer configurations.
    * items [TransferConfig](#transferconfig)

### ListTransferLogsResponse
* ListTransferLogsResponse `object`: The returned list transfer run messages.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.
  * transferMessages `array`: Output only. The stored pipeline transfer messages.
    * items [TransferMessage](#transfermessage)

### ListTransferRunsResponse
* ListTransferRunsResponse `object`: The returned list of pipelines in the project.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results.
  * transferRuns `array`: Output only. The stored pipeline transfer runs.
    * items [TransferRun](#transferrun)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### ScheduleOptions
* ScheduleOptions `object`: Options customizing the data transfer schedule.
  * disableAutoScheduling `boolean`: If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.
  * endTime `string`: Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
  * startTime `string`: Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.

### ScheduleTransferRunsRequest
* ScheduleTransferRunsRequest `object`: A request to schedule transfer runs for a time range.
  * endTime `string`: Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`.
  * startTime `string`: Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`.

### ScheduleTransferRunsResponse
* ScheduleTransferRunsResponse `object`: A response to schedule transfer runs for a time range.
  * runs `array`: The transfer runs that were scheduled.
    * items [TransferRun](#transferrun)

### StartManualTransferRunsRequest
* StartManualTransferRunsRequest `object`: A request to start manual transfer runs.
  * requestedRunTime `string`: Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.
  * requestedTimeRange [TimeRange](#timerange)

### StartManualTransferRunsResponse
* StartManualTransferRunsResponse `object`: A response to start manual transfer runs.
  * runs `array`: The transfer runs that were created.
    * items [TransferRun](#transferrun)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TimeRange
* TimeRange `object`: A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
  * endTime `string`: End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).
  * startTime `string`: Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).

### TransferConfig
* TransferConfig `object`: Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
  * dataRefreshWindowDays `integer`: The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
  * dataSourceId `string`: Data source id. Cannot be changed once data transfer is created.
  * datasetRegion `string`: Output only. Region in which BigQuery dataset is located.
  * destinationDatasetId `string`: The BigQuery target dataset id.
  * disabled `boolean`: Is this config disabled. When set to true, no runs are scheduled for a given transfer.
  * displayName `string`: User specified display name for the data transfer.
  * emailPreferences [EmailPreferences](#emailpreferences)
  * name `string`: The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
  * nextRunTime `string`: Output only. Next time when data transfer will run.
  * notificationPubsubTopic `string`: Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.
  * params `object`: Data transfer specific parameters.
  * schedule `string`: Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: the granularity should be at least 8 hours, or less frequent.
  * scheduleOptions [ScheduleOptions](#scheduleoptions)
  * state `string` (values: TRANSFER_STATE_UNSPECIFIED, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED): Output only. State of the most recently updated transfer run.
  * updateTime `string`: Output only. Data transfer modification time. Ignored by server on input.
  * userId `string`: Deprecated. Unique ID of the user on whose behalf transfer is done.

### TransferMessage
* TransferMessage `object`: Represents a user facing message for a particular data transfer run.
  * messageText `string`: Message text.
  * messageTime `string`: Time when message was logged.
  * severity `string` (values: MESSAGE_SEVERITY_UNSPECIFIED, INFO, WARNING, ERROR): Message severity.

### TransferRun
* TransferRun `object`: Represents a data transfer run.
  * dataSourceId `string`: Output only. Data source id.
  * destinationDatasetId `string`: Output only. The BigQuery target dataset id.
  * emailPreferences [EmailPreferences](#emailpreferences)
  * endTime `string`: Output only. Time when transfer run ended. Parameter ignored by server for input requests.
  * errorStatus [Status](#status)
  * name `string`: The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.
  * notificationPubsubTopic `string`: Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes
  * params `object`: Output only. Data transfer specific parameters.
  * runTime `string`: For batch transfer runs, specifies the date and time of the data should be ingested.
  * schedule `string`: Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.
  * scheduleTime `string`: Minimum time after which a transfer run can be started.
  * startTime `string`: Output only. Time when transfer run was started. Parameter ignored by server for input requests.
  * state `string` (values: TRANSFER_STATE_UNSPECIFIED, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED): Data transfer run state. Ignored for input requests.
  * updateTime `string`: Output only. Last time the data transfer run state was updated.
  * userId `string`: Deprecated. Unique ID of the user on whose behalf transfer is done.


