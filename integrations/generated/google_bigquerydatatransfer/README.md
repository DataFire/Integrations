# @datafire/google_bigquerydatatransfer

Client library for BigQuery Data Transfer Service

## Installation and Usage
```bash
npm install --save datafire @datafire/google_bigquerydatatransfer
```

```js
let datafire = require('datafire');
let google_bigquerydatatransfer = require('@datafire/google_bigquerydatatransfer').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_bigquerydatatransfer: account,
  }
})


google_bigquerydatatransfer.projects.transferConfigs.runs.delete({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_bigquerydatatransfer.oauthRefresh(null, context)
```


### projects.transferConfigs.runs.delete
Deletes the specified transfer run.


```js
google_bigquerydatatransfer.projects.transferConfigs.runs.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The field will contain name of the resource requested, for example:
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

### projects.transferConfigs.runs.get
Returns information about the particular transfer run.


```js
google_bigquerydatatransfer.projects.transferConfigs.runs.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The field will contain name of the resource requested, for example:
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

### projects.transferConfigs.patch
Updates a data transfer configuration.
All fields must be set, even if they are not updated.


```js
google_bigquerydatatransfer.projects.transferConfigs.patch({
  "name": ""
}, context)
```

#### Parameters
* authorizationCode (string) - Optional OAuth2 authorization code to use with this transfer configuration.
* body (object) - Represents a data transfer configuration. A transfer configuration
* name (string) **required** - The resource name of the transfer run.
* updateMask (string) - Required list of fields to be updated in this request.
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

### projects.dataSources.checkValidCreds
Returns true if valid credentials exist for the given data source and
requesting user.


```js
google_bigquerydatatransfer.projects.dataSources.checkValidCreds({
  "name": ""
}, context)
```

#### Parameters
* body (object) - A request to determine whether the user has valid credentials. This method
* name (string) **required** - The data source in the form:
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

### projects.locations.isEnabled
Returns true if data transfer is enabled for a project.


```js
google_bigquerydatatransfer.projects.locations.isEnabled({
  "name": ""
}, context)
```

#### Parameters
* body (object) - A request to determine whether data transfer is enabled for the project.
* name (string) **required** - The name of the project resource in the form:
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

### projects.locations.setEnabled
Enables or disables data transfer for a project. This
method requires the additional scope of
'https://www.googleapis.com/auth/cloudplatformprojects'
to manage the cloud project permissions.


```js
google_bigquerydatatransfer.projects.locations.setEnabled({
  "name": ""
}, context)
```

#### Parameters
* body (object) - A request to set whether data transfer is enabled or disabled for a project.
* name (string) **required** - The name of the project resource in the form:
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

### projects.dataSources.list
Lists supported data sources and returns their settings,
which can be used for UI rendering.


```js
google_bigquerydatatransfer.projects.dataSources.list({
  "parent": ""
}, context)
```

#### Parameters
* pageSize (integer) - Page size. The default page size is the maximum value of 1000 results.
* pageToken (string) - Pagination token, which can be used to request a specific page
* parent (string) **required** - The BigQuery project id for which data sources should be returned.
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

### projects.transferConfigs.runs.list
Returns information about running and completed jobs.


```js
google_bigquerydatatransfer.projects.transferConfigs.runs.list({
  "parent": ""
}, context)
```

#### Parameters
* pageSize (integer) - Page size. The default page size is the maximum value of 1000 results.
* pageToken (string) - Pagination token, which can be used to request a specific page
* parent (string) **required** - Name of transfer configuration for which transfer runs should be retrieved.
* runAttempt (string) - Indicates how run attempts are to be pulled.
* statuses (array) - When specified, only transfer runs with requested statuses are returned.
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

### projects.transferConfigs.list
Returns information about all data transfers in the project.


```js
google_bigquerydatatransfer.projects.transferConfigs.list({
  "parent": ""
}, context)
```

#### Parameters
* dataSourceIds (array) - When specified, only configurations of requested data sources are returned.
* pageSize (integer) - Page size. The default page size is the maximum value of 1000 results.
* pageToken (string) - Pagination token, which can be used to request a specific page
* parent (string) **required** - The BigQuery project id for which data sources
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

### projects.transferConfigs.create
Creates a new data transfer configuration.


```js
google_bigquerydatatransfer.projects.transferConfigs.create({
  "parent": ""
}, context)
```

#### Parameters
* authorizationCode (string) - Optional OAuth2 authorization code to use with this transfer configuration.
* body (object) - Represents a data transfer configuration. A transfer configuration
* parent (string) **required** - The BigQuery project id where the transfer configuration should be created.
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

### projects.transferConfigs.runs.transferLogs.list
Returns user facing log messages for the data transfer run.


```js
google_bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list({
  "parent": ""
}, context)
```

#### Parameters
* messageTypes (array) - Message types to return. If not populated - INFO, WARNING and ERROR
* pageSize (integer) - Page size. The default page size is the maximum value of 1000 results.
* pageToken (string) - Pagination token, which can be used to request a specific page
* parent (string) **required** - Transfer run name in the form:
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

### projects.transferConfigs.scheduleRuns
Creates transfer runs for a time range [range_start_time, range_end_time].
For each date - or whatever granularity the data source supports - in the
range, one transfer run is created.
Note that runs are created per UTC time in the time range.


```js
google_bigquerydatatransfer.projects.transferConfigs.scheduleRuns({
  "parent": ""
}, context)
```

#### Parameters
* body (object) - A request to schedule transfer runs for a time range.
* parent (string) **required** - Transfer configuration name in the form:
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

