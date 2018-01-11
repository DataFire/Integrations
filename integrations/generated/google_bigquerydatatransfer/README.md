# @datafire/google_bigquerydatatransfer

Client library for BigQuery Data Transfer

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

google_bigquerydatatransfer.projects.locations.transferConfigs.runs.delete({}).then(data => {
  console.log(data);
})
```

## Description

Transfers data from partner SaaS applications to Google BigQuery on a scheduled, managed basis.

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

### projects.locations.transferConfigs.runs.delete
Deletes the specified transfer run.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.runs.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The field will contain name of the resource requested, for example:
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

### projects.locations.dataSources.get
Retrieves a supported data source and returns its settings,
which can be used for UI rendering.


```js
google_bigquerydatatransfer.projects.locations.dataSources.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The field will contain name of the resource requested, for example:
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
* output [DataSource](#datasource)

### projects.locations.transferConfigs.patch
Updates a data transfer configuration.
All fields must be set, even if they are not updated.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * authorizationCode `string`: Optional OAuth2 authorization code to use with this transfer configuration.
  * body [TransferConfig](#transferconfig)
  * name **required** `string`: The resource name of the transfer config.
  * updateMask `string`: Required list of fields to be updated in this request.
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
* output [TransferConfig](#transferconfig)

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_bigquerydatatransfer.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListLocationsResponse](#listlocationsresponse)

### projects.locations.dataSources.checkValidCreds
Returns true if valid credentials exist for the given data source and
requesting user.
Some data sources doesn't support service account, so we need to talk to
them on behalf of the end user. This API just checks whether we have OAuth
token for the particular user, which is a pre-requisite before user can
create a transfer config.


```js
google_bigquerydatatransfer.projects.locations.dataSources.checkValidCreds({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CheckValidCredsRequest](#checkvalidcredsrequest)
  * name **required** `string`: The data source in the form:
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
* output [CheckValidCredsResponse](#checkvalidcredsresponse)

### projects.locations.dataSources.list
Lists supported data sources and returns their settings,
which can be used for UI rendering.


```js
google_bigquerydatatransfer.projects.locations.dataSources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page
  * parent **required** `string`: The BigQuery project id for which data sources should be returned.
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
* output [ListDataSourcesResponse](#listdatasourcesresponse)

### projects.locations.transferConfigs.runs.list
Returns information about running and completed jobs.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.runs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page
  * parent **required** `string`: Name of transfer configuration for which transfer runs should be retrieved.
  * runAttempt `string` (values: RUN_ATTEMPT_UNSPECIFIED, LATEST): Indicates how run attempts are to be pulled.
  * states `array`: When specified, only transfer runs with requested states are returned.
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
* output [ListTransferRunsResponse](#listtransferrunsresponse)

### projects.locations.transferConfigs.list
Returns information about all data transfers in the project.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * dataSourceIds `array`: When specified, only configurations of requested data sources are returned.
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page
  * parent **required** `string`: The BigQuery project id for which data sources
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
* output [ListTransferConfigsResponse](#listtransferconfigsresponse)

### projects.locations.transferConfigs.create
Creates a new data transfer configuration.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * authorizationCode `string`: Optional OAuth2 authorization code to use with this transfer configuration.
  * body [TransferConfig](#transferconfig)
  * parent **required** `string`: The BigQuery project id where the transfer configuration should be created.
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
* output [TransferConfig](#transferconfig)

### projects.locations.transferConfigs.runs.transferLogs.list
Returns user facing log messages for the data transfer run.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * messageTypes `array`: Message types to return. If not populated - INFO, WARNING and ERROR
  * pageSize `integer`: Page size. The default page size is the maximum value of 1000 results.
  * pageToken `string`: Pagination token, which can be used to request a specific page
  * parent **required** `string`: Transfer run name in the form:
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
* output [ListTransferLogsResponse](#listtransferlogsresponse)

### projects.locations.transferConfigs.scheduleRuns
Creates transfer runs for a time range [range_start_time, range_end_time].
For each date - or whatever granularity the data source supports - in the
range, one transfer run is created.
Note that runs are created per UTC time in the time range.


```js
google_bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [ScheduleTransferRunsRequest](#scheduletransferrunsrequest)
  * parent **required** `string`: Transfer configuration name in the form:
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
* output [ScheduleTransferRunsResponse](#scheduletransferrunsresponse)



## Definitions

### CheckValidCredsRequest
* CheckValidCredsRequest `object`: A request to determine whether the user has valid credentials. This method

### CheckValidCredsResponse
* CheckValidCredsResponse `object`: A response indicating whether the credentials exist and are valid.
  * hasValidCreds `boolean`: If set to `true`, the credentials exist and are valid.

### DataSource
* DataSource `object`: Represents data source metadata. Metadata is sufficient to
  * authorizationType `string` (values: AUTHORIZATION_TYPE_UNSPECIFIED, AUTHORIZATION_CODE, GOOGLE_PLUS_AUTHORIZATION_CODE): Indicates the type of authorization.
  * clientId `string`: Data source client id which should be used to receive refresh token.
  * dataRefreshType `string` (values: DATA_REFRESH_TYPE_UNSPECIFIED, SLIDING_WINDOW, CUSTOM_SLIDING_WINDOW): Specifies whether the data source supports automatic data refresh for the
  * dataSourceId `string`: Data source id.
  * defaultDataRefreshWindowDays `integer`: Default data refresh window on days.
  * defaultSchedule `string`: Default data transfer schedule.
  * description `string`: User friendly data source description string.
  * displayName `string`: User friendly data source name.
  * helpUrl `string`: Url for the help document for this data source.
  * manualRunsDisabled `boolean`: Disables backfilling and manual run scheduling
  * minimumScheduleInterval `string`: The minimum interval between two consecutive scheduled runs.
  * name `string`: Data source resource name.
  * parameters `array`: Data source parameters.
    * items [DataSourceParameter](#datasourceparameter)
  * scopes `array`: Api auth scopes for which refresh token needs to be obtained. Only valid
    * items `string`
  * supportsCustomSchedule `boolean`: Specifies whether the data source supports a user defined schedule, or
  * supportsMultipleTransfers `boolean`: Indicates whether the data source supports multiple transfers
  * transferType `string` (values: TRANSFER_TYPE_UNSPECIFIED, BATCH, STREAMING): Transfer type. Currently supports only batch transfers,
  * updateDeadlineSeconds `integer`: The number of seconds to wait for an update from the data source

### DataSourceParameter
* DataSourceParameter `object`: Represents a data source parameter with validation rules, so that
  * allowedValues `array`: All possible values for the parameter.
    * items `string`
  * description `string`: Parameter description.
  * displayName `string`: Parameter display name in the user interface.
  * fields `array`: When parameter is a record, describes child fields.
    * items [DataSourceParameter](#datasourceparameter)
  * immutable `boolean`: Cannot be changed after initial creation.
  * maxValue `number`: For integer and double values specifies maxminum allowed value.
  * minValue `number`: For integer and double values specifies minimum allowed value.
  * paramId `string`: Parameter identifier.
  * recurse `boolean`: If set to true, schema should be taken from the parent with the same
  * repeated `boolean`: Can parameter have multiple values.
  * required `boolean`: Is parameter required.
  * type `string` (values: TYPE_UNSPECIFIED, STRING, INTEGER, DOUBLE, BOOLEAN, RECORD, PLUS_PAGE): Parameter type.
  * validationDescription `string`: Description of the requirements for this field, in case the user input does
  * validationHelpUrl `string`: URL to a help document to further explain the naming requirements.
  * validationRegex `string`: Regular expression which can be used for parameter validation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListDataSourcesResponse
* ListDataSourcesResponse `object`: Returns list of supported data sources and their metadata.
  * dataSources `array`: List of supported data sources and their transfer settings.
    * items [DataSource](#datasource)
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results,

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListTransferConfigsResponse
* ListTransferConfigsResponse `object`: The returned list of pipelines in the project.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results,
  * transferConfigs `array`: Output only. The stored pipeline transfer configurations.
    * items [TransferConfig](#transferconfig)

### ListTransferLogsResponse
* ListTransferLogsResponse `object`: The returned list transfer run messages.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results,
  * transferMessages `array`: Output only. The stored pipeline transfer messages.
    * items [TransferMessage](#transfermessage)

### ListTransferRunsResponse
* ListTransferRunsResponse `object`: The returned list of pipelines in the project.
  * nextPageToken `string`: Output only. The next-pagination token. For multiple-page list results,
  * transferRuns `array`: Output only. The stored pipeline transfer runs.
    * items [TransferRun](#transferrun)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given
  * name `string`: Resource name for the location, which may vary between implementations.

### ScheduleTransferRunsRequest
* ScheduleTransferRunsRequest `object`: A request to schedule transfer runs for a time range.
  * endTime `string`: End time of the range of transfer runs. For example,
  * startTime `string`: Start time of the range of transfer runs. For example,

### ScheduleTransferRunsResponse
* ScheduleTransferRunsResponse `object`: A response to schedule transfer runs for a time range.
  * runs `array`: The transfer runs that were scheduled.
    * items [TransferRun](#transferrun)

### TransferConfig
* TransferConfig `object`: Represents a data transfer configuration. A transfer configuration
  * dataRefreshWindowDays `integer`: The number of days to look back to automatically refresh the data.
  * dataSourceId `string`: Data source id. Cannot be changed once data transfer is created.
  * datasetRegion `string`: Output only. Region in which BigQuery dataset is located.
  * destinationDatasetId `string`: The BigQuery target dataset id.
  * disabled `boolean`: Is this config disabled. When set to true, no runs are scheduled
  * displayName `string`: User specified display name for the data transfer.
  * name `string`: The resource name of the transfer config.
  * nextRunTime `string`: Output only. Next time when data transfer will run.
  * params `object`: Data transfer specific parameters.
  * schedule `string`: Data transfer schedule.
  * state `string` (values: TRANSFER_STATE_UNSPECIFIED, INACTIVE, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED): Output only. State of the most recently updated transfer run.
  * updateTime `string`: Output only. Data transfer modification time. Ignored by server on input.
  * userId `string`: Output only. Unique ID of the user on whose behalf transfer is done.

### TransferMessage
* TransferMessage `object`: Represents a user facing message for a particular data transfer run.
  * messageText `string`: Message text.
  * messageTime `string`: Time when message was logged.
  * severity `string` (values: MESSAGE_SEVERITY_UNSPECIFIED, INFO, WARNING, ERROR): Message severity.

### TransferRun
* TransferRun `object`: Represents a data transfer run.
  * dataSourceId `string`: Output only. Data source id.
  * destinationDatasetId `string`: The BigQuery target dataset id.
  * endTime `string`: Output only. Time when transfer run ended.
  * name `string`: The resource name of the transfer run.
  * params `object`: Data transfer specific parameters.
  * runTime `string`: For batch transfer runs, specifies the date and time that
  * schedule `string`: Output only. Describes the schedule of this transfer run if it was
  * scheduleTime `string`: Minimum time after which a transfer run can be started.
  * startTime `string`: Output only. Time when transfer run was started.
  * state `string` (values: TRANSFER_STATE_UNSPECIFIED, INACTIVE, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED): Data transfer run state. Ignored for input requests.
  * updateTime `string`: Output only. Last time the data transfer run state was updated.
  * userId `string`: Output only. Unique ID of the user on whose behalf transfer is done.


