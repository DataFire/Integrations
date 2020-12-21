# @datafire/google_logging

Client library for Cloud Logging API

## Installation and Usage
```bash
npm install --save @datafire/google_logging
```
```js
let google_logging = require('@datafire/google_logging').create({
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

Writes log entries and manages your Cloud Logging configuration. The table entries below are presented in alphabetical order, not in order of common use. For explanations of the concepts found in the table entries, read the documentation at https://cloud.google.com/logging/docs.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_logging.oauthCallback({
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
google_logging.oauthRefresh(null, context)
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

### logging.entries.list
Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).


```js
google_logging.logging.entries.list({}, context)
```

#### Input
* input `object`
  * body [ListLogEntriesRequest](#listlogentriesrequest)
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
* output [ListLogEntriesResponse](#listlogentriesresponse)

### logging.entries.tail
Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.


```js
google_logging.logging.entries.tail({}, context)
```

#### Input
* input `object`
  * body [TailLogEntriesRequest](#taillogentriesrequest)
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
* output [TailLogEntriesResponse](#taillogentriesresponse)

### logging.entries.write
Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)


```js
google_logging.logging.entries.write({}, context)
```

#### Input
* input `object`
  * body [WriteLogEntriesRequest](#writelogentriesrequest)
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
* output [WriteLogEntriesResponse](#writelogentriesresponse)

### logging.monitoredResourceDescriptors.list
Lists the descriptors for monitored resource types used by Logging.


```js
google_logging.logging.monitoredResourceDescriptors.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListMonitoredResourceDescriptorsResponse](#listmonitoredresourcedescriptorsresponse)

### logging.projects.logs.delete
Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.


```js
google_logging.logging.projects.logs.delete({
  "logName": ""
}, context)
```

#### Input
* input `object`
  * logName **required** `string`: Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
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

### logging.projects.metrics.delete
Deletes a logs-based metric.


```js
google_logging.logging.projects.metrics.delete({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`: Required. The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" 
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

### logging.projects.metrics.get
Gets a logs-based metric.


```js
google_logging.logging.projects.metrics.get({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`: Required. The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" 
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
* output [LogMetric](#logmetric)

### logging.projects.metrics.update
Creates or updates a logs-based metric.


```js
google_logging.logging.projects.metrics.update({
  "metricName": ""
}, context)
```

#### Input
* input `object`
  * metricName **required** `string`: Required. The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
  * body [LogMetric](#logmetric)
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
* output [LogMetric](#logmetric)

### logging.projects.locations.buckets.views.delete
Deletes a view from a bucket.


```js
google_logging.logging.projects.locations.buckets.views.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" Example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id/views/my-view-id".
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

### logging.projects.locations.buckets.views.get
Gets a view.


```js
google_logging.logging.projects.locations.buckets.views.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" Example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id/views/my-view-id".
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
* output [LogView](#logview)

### logging.projects.locations.buckets.views.patch
Updates a view. This method replaces the following fields in the existing view with values from the new view: filter.


```js
google_logging.logging.projects.locations.buckets.views.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" Example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id/views/my-view-id".
  * updateMask `string`: Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
  * body [LogView](#logview)
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
* output [LogView](#logview)

### logging.getCmekSettings
Gets the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.


```js
google_logging.logging.getCmekSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" Example: "organizations/12345/cmekSettings".Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.
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
* output [CmekSettings](#cmeksettings)

### logging.updateCmekSettings
Updates the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.


```js
google_logging.logging.updateCmekSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name for the CMEK settings to update. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" Example: "organizations/12345/cmekSettings".Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.
  * updateMask `string`: Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.Example: "updateMask=kmsKeyName"
  * body [CmekSettings](#cmeksettings)
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
* output [CmekSettings](#cmeksettings)

### logging.projects.locations.list
Lists information about the supported locations for this service.


```js
google_logging.logging.projects.locations.list({
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

### logging.projects.locations.buckets.undelete
Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days.


```js
google_logging.logging.projects.locations.buckets.undelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" Example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id".
  * body [UndeleteBucketRequest](#undeletebucketrequest)
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

### logging.projects.locations.buckets.list
Lists buckets.


```js
google_logging.logging.projects.locations.buckets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListBucketsResponse](#listbucketsresponse)

### logging.projects.locations.buckets.create
Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed.


```js
google_logging.logging.projects.locations.buckets.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource in which to create the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" Example: "projects/my-logging-project/locations/global"
  * bucketId `string`: Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.
  * body [LogBucket](#logbucket)
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
* output [LogBucket](#logbucket)

### logging.projects.exclusions.list
Lists all the exclusions in a parent resource.


```js
google_logging.logging.projects.exclusions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" 
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListExclusionsResponse](#listexclusionsresponse)

### logging.projects.exclusions.create
Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.


```js
google_logging.logging.projects.exclusions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
  * body [LogExclusion](#logexclusion)
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
* output [LogExclusion](#logexclusion)

### logging.projects.logs.list
Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.


```js
google_logging.logging.projects.logs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" 
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
  * resourceNames `array`: Optional. The resource name that owns the logs: projects/PROJECT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID organization/ORGANIZATION_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID billingAccounts/BILLING_ACCOUNT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID folders/FOLDER_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_IDTo support legacy queries, it could also be: "projects/PROJECT_ID" "organizations/ORGANIZATION_ID" "billingAccounts/BILLING_ACCOUNT_ID" "folders/FOLDER_ID"
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
* output [ListLogsResponse](#listlogsresponse)

### logging.projects.metrics.list
Lists logs-based metrics.


```js
google_logging.logging.projects.metrics.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project containing the metrics: "projects/[PROJECT_ID]" 
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListLogMetricsResponse](#listlogmetricsresponse)

### logging.projects.metrics.create
Creates a logs-based metric.


```js
google_logging.logging.projects.metrics.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
  * body [LogMetric](#logmetric)
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
* output [LogMetric](#logmetric)

### logging.sinks.list
Lists sinks.


```js
google_logging.logging.sinks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" 
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListSinksResponse](#listsinksresponse)

### logging.sinks.create
Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.


```js
google_logging.logging.sinks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
  * uniqueWriterIdentity `boolean`: Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
  * body [LogSink](#logsink)
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
* output [LogSink](#logsink)

### logging.projects.locations.buckets.views.list
Lists views on a bucket.


```js
google_logging.logging.projects.locations.buckets.views.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" 
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
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
* output [ListViewsResponse](#listviewsresponse)

### logging.projects.locations.buckets.views.create
Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views.


```js
google_logging.logging.projects.locations.buckets.views.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The bucket in which to create the view "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" Example: "projects/my-logging-project/locations/my-location/buckets/my-bucket"
  * viewId `string`: Required. The id to use for this view.
  * body [LogView](#logview)
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
* output [LogView](#logview)

### logging.sinks.delete
Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.


```js
google_logging.logging.sinks.delete({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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

### logging.sinks.get
Gets a sink.


```js
google_logging.logging.sinks.get({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
* output [LogSink](#logsink)

### logging.projects.sinks.patch
Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.


```js
google_logging.logging.projects.sinks.patch({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
  * uniqueWriterIdentity `boolean`: Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
  * updateMask `string`: Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes: destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
  * body [LogSink](#logsink)
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
* output [LogSink](#logsink)

### logging.sinks.update
Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.


```js
google_logging.logging.sinks.update({
  "sinkName": ""
}, context)
```

#### Input
* input `object`
  * sinkName **required** `string`: Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
  * uniqueWriterIdentity `boolean`: Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
  * updateMask `string`: Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes: destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
  * body [LogSink](#logsink)
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
* output [LogSink](#logsink)



## Definitions

### BigQueryOptions
* BigQueryOptions `object`: Options that change functionality of a sink exporting data to BigQuery.
  * usePartitionedTables `boolean`: Optional. Whether to use BigQuery's partition tables (https://cloud.google.com/bigquery/docs/partitioned-tables). By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) has to be used instead. In both cases, tables are sharded based on UTC timezone.
  * usesTimestampColumnPartitioning `boolean`: Output only. True if new timestamp column based partitioning is in use, false if legacy ingestion-time partitioning is in use. All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false.

### BucketOptions
* BucketOptions `object`: BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
  * explicitBuckets [Explicit](#explicit)
  * exponentialBuckets [Exponential](#exponential)
  * linearBuckets [Linear](#linear)

### CmekSettings
* CmekSettings `object`: Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
  * kmsKeyName `string`: The resource name for the configured Cloud KMS key.KMS key name format: "projects/PROJECT_ID/locations/LOCATION/keyRings/KEYRING/cryptoKeys/KEY"For example: "projects/my-project-id/locations/my-region/keyRings/key-ring-name/cryptoKeys/key-name"To enable CMEK for the Logs Router, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Logs Router, set this field to an empty string.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
  * name `string`: Output only. The resource name of the CMEK settings.
  * serviceAccountId `string`: Output only. The service account that will be used by the Logs Router to access your Cloud KMS key.Before enabling CMEK for Logs Router, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that the Logs Router will use to access your Cloud KMS key. Use GetCmekSettings to obtain the service account ID.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.

### Explicit
* Explicit `object`: Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.
  * bounds `array`: The values must be monotonically increasing.
    * items `number`

### Exponential
* Exponential `object`: Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
  * growthFactor `number`: Must be greater than 1.
  * numFiniteBuckets `integer`: Must be greater than 0.
  * scale `number`: Must be greater than 0.

### HttpRequest
* HttpRequest `object`: A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
  * cacheFillBytes `string`: The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
  * cacheHit `boolean`: Whether or not an entity was served from cache (with or without validation).
  * cacheLookup `boolean`: Whether or not a cache lookup was attempted.
  * cacheValidatedWithOriginServer `boolean`: Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.
  * latency `string`: The request processing latency on the server, from the time the request was received until the response was sent.
  * protocol `string`: Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
  * referer `string`: The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
  * remoteIp `string`: The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".
  * requestMethod `string`: The request method. Examples: "GET", "HEAD", "PUT", "POST".
  * requestSize `string`: The size of the HTTP request message in bytes, including the request headers and the request body.
  * requestUrl `string`: The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red".
  * responseSize `string`: The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
  * serverIp `string`: The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".
  * status `integer`: The response code indicating the status of response. Examples: 200, 404.
  * userAgent `string`: The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".

### LabelDescriptor
* LabelDescriptor `object`: A description of a label.
  * description `string`: A human-readable description for the label.
  * key `string`: The label key.
  * valueType `string` (values: STRING, BOOL, INT64): The type of data that can be assigned to the label.

### Linear
* Linear `object`: Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i). Lower bound (1 <= i < N): offset + (width * (i - 1)).
  * numFiniteBuckets `integer`: Must be greater than 0.
  * offset `number`: Lower bound of the first bucket.
  * width `number`: Must be greater than 0.

### ListBucketsResponse
* ListBucketsResponse `object`: The response from ListBuckets.
  * buckets `array`: A list of buckets.
    * items [LogBucket](#logbucket)
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.

### ListExclusionsResponse
* ListExclusionsResponse `object`: Result returned from ListExclusions.
  * exclusions `array`: A list of exclusions.
    * items [LogExclusion](#logexclusion)
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListLogEntriesRequest
* ListLogEntriesRequest `object`: The parameters to ListLogEntries.
  * filter `string`: Optional. A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters.
  * orderBy `string`: Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.
  * pageSize `integer`: Optional. The maximum number of results to return from this request. Default is 50. If the value is negative or exceeds 1000, the request is rejected. The presence of next_page_token in the response indicates that more results might be available.
  * pageToken `string`: Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.
  * projectIds `array`: Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A".
    * items `string`
  * resourceNames `array`: Required. Names of one or more parent resources from which to retrieve log entries: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" May alternatively be one or more views projects/PROJECT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID organization/ORGANIZATION_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID billingAccounts/BILLING_ACCOUNT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID folders/FOLDER_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_IDProjects listed in the project_ids field are added to this list.
    * items `string`

### ListLogEntriesResponse
* ListLogEntriesResponse `object`: Result returned from ListLogEntries.
  * entries `array`: A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information.
    * items [LogEntry](#logentry)
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.

### ListLogMetricsResponse
* ListLogMetricsResponse `object`: Result returned from ListLogMetrics.
  * metrics `array`: A list of logs-based metrics.
    * items [LogMetric](#logmetric)
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.

### ListLogsResponse
* ListLogsResponse `object`: Result returned from ListLogs.
  * logNames `array`: A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".
    * items `string`
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.

### ListMonitoredResourceDescriptorsResponse
* ListMonitoredResourceDescriptorsResponse `object`: Result returned from ListMonitoredResourceDescriptors.
  * nextPageToken `string`: If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
  * resourceDescriptors `array`: A list of resource descriptors.
    * items [MonitoredResourceDescriptor](#monitoredresourcedescriptor)

### ListSinksResponse
* ListSinksResponse `object`: Result returned from ListSinks.
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
  * sinks `array`: A list of sinks.
    * items [LogSink](#logsink)

### ListViewsResponse
* ListViewsResponse `object`: The response from ListViews.
  * nextPageToken `string`: If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
  * views `array`: A list of views.
    * items [LogView](#logview)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} 
  * locationId `string`: The canonical id for this location. For example: "us-east1".
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"

### LogBucket
* LogBucket `object`: Describes a repository of logs.
  * createTime `string`: Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.
  * description `string`: Describes this bucket.
  * lifecycleState `string` (values: LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DELETE_REQUESTED): Output only. The bucket lifecycle state.
  * locked `boolean`: Whether the bucket has been locked. The retention period on a locked bucket may not be changed. Locked buckets may only be deleted if they are empty.
  * name `string`: Output only. The resource name of the bucket. For example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id The supported locations are: "global"For the location of global it is unspecified where logs are actually stored. Once a bucket has been created, the location can not be changed.
  * retentionDays `integer`: Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  * updateTime `string`: Output only. The last update timestamp of the bucket.

### LogEntry
* LogEntry `object`: An individual entry in a log.
  * httpRequest [HttpRequest](#httprequest)
  * insertId `string`: Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values.
  * jsonPayload `object`: The log entry payload, represented as a structure that is expressed as a JSON object.
  * labels `object`: Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
  * logName `string`: Required. The resource name of the log to which this log entry belongs: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". [LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is ingested as usual but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
  * metadata [MonitoredResourceMetadata](#monitoredresourcemetadata)
  * operation [LogEntryOperation](#logentryoperation)
  * protoPayload `object`: The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:"type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog"
  * receiveTimestamp `string`: Output only. The time the log entry was received by Logging.
  * resource [MonitoredResource](#monitoredresource)
  * severity `string` (values: DEFAULT, DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY): Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.
  * sourceLocation [LogEntrySourceLocation](#logentrysourcelocation)
  * spanId `string`: Optional. The span ID within the trace associated with the log entry.For Trace spans, this is the same format that the Trace API v2 uses: a 16-character hexadecimal encoding of an 8-byte array, such as 000000000000004a.
  * textPayload `string`: The log entry payload, represented as a Unicode string (UTF-8).
  * timestamp `string`: Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don't exceed the logs retention period (https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries aren't ingested by Logging.
  * trace `string`: Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824
  * traceSampled `boolean`: Optional. The sampling decision of the trace associated with the log entry.True means that the trace resource name in the trace field was sampled for storage in a trace backend. False means that the trace was not sampled for storage when this log entry was written, or the sampling decision was unknown at the time. A non-sampled trace value is still useful as a request correlation identifier. The default is False.

### LogEntryOperation
* LogEntryOperation `object`: Additional information about a potentially long-running operation with which a log entry is associated.
  * first `boolean`: Optional. Set this to True if this is the first log entry in the operation.
  * id `string`: Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
  * last `boolean`: Optional. Set this to True if this is the last log entry in the operation.
  * producer `string`: Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication".

### LogEntrySourceLocation
* LogEntrySourceLocation `object`: Additional information about the source code location that produced the log entry.
  * file `string`: Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
  * function `string`: Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
  * line `string`: Optional. Line within the source file. 1-based; 0 indicates no line number available.

### LogExclusion
* LogExclusion `object`: Specifies a set of log entries that are not to be stored in Logging. If your GCP resource receives a large volume of logs, you can use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Note that organization-level and folder-level exclusions don't apply to child resources, and that you can't exclude audit log entries.
  * createTime `string`: Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions.
  * description `string`: Optional. A description of this exclusion.
  * disabled `boolean`: Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field.
  * filter `string`: Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries) that matches the log entries to be excluded. By using the sample function (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries. For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:"resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)"
  * name `string`: Required. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
  * updateTime `string`: Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions.

### LogLine
* LogLine `object`: Application log line emitted while processing a request.
  * logMessage `string`: App-provided log message.
  * severity `string` (values: DEFAULT, DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY): Severity of this log entry.
  * sourceLocation [SourceLocation](#sourcelocation)
  * time `string`: Approximate time when this log entry was made.

### LogMetric
* LogMetric `object`: Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
  * bucketOptions [BucketOptions](#bucketoptions)
  * createTime `string`: Output only. The creation timestamp of the metric.This field may not be present for older metrics.
  * description `string`: Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.
  * filter `string`: Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters.
  * labelExtractors `object`: Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If the either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.
  * metricDescriptor [MetricDescriptor](#metricdescriptor)
  * name `string`: Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter, then the metric identifier must be URL-encoded. Example: "projects/my-project/metrics/nginx%2Frequests".
  * updateTime `string`: Output only. The last update timestamp of the metric.This field may not be present for older metrics.
  * valueExtractor `string`: Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The argument are: 1. field: The name of the log entry field from which the value is to be extracted. 2. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")
  * version `string` (values: V2, V1): Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.

### LogSink
* LogSink `object`: Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a Cloud Pub/Sub topic. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
  * bigqueryOptions [BigQueryOptions](#bigqueryoptions)
  * createTime `string`: Output only. The creation timestamp of the sink.This field may not be present for older sinks.
  * description `string`: Optional. A description of this sink. The maximum length of the description is 8000 characters.
  * destination `string`: Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
  * disabled `boolean`: Optional. If set to True, then this sink is disabled and it does not export any log entries.
  * exclusions `array`: Optional. Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both filter and one of exclusion_filters it will not be exported.
    * items [LogExclusion](#logexclusion)
  * filter `string`: Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter. For example: logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR 
  * includeChildren `boolean`: Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression. For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent. To only export entries from certain child projects, filter on the project part of the log name: logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance 
  * name `string`: Required. The client-assigned sink identifier, unique within the project. Example: "my-syslog-errors-to-pubsub". Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods. First character has to be alphanumeric.
  * outputVersionFormat `string` (values: VERSION_FORMAT_UNSPECIFIED, V2, V1): Deprecated. This field is unused.
  * updateTime `string`: Output only. The last update timestamp of the sink.This field may not be present for older sinks.
  * writerIdentity `string`: Output only. An IAM identity—a service account or group—under which Logging writes the exported log entries to the sink's destination. This field is set by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.

### LogView
* LogView `object`: Describes a view over logs in a bucket.
  * createTime `string`: Output only. The creation timestamp of the view.
  * description `string`: Describes this view.
  * filter `string`: Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: originating project/folder/organization/billing account. resource type log id Example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")
  * name `string`: The resource name of the view. For example "projects/my-project-id/locations/my-location/buckets/my-bucket-id/views/my-view
  * updateTime `string`: Output only. The last update timestamp of the view.

### MetricDescriptor
* MetricDescriptor `object`: Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
  * description `string`: A detailed description of the metric, which can be used in documentation.
  * displayName `string`: A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * labels `array`: The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
    * items [LabelDescriptor](#labeldescriptor)
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Optional. The launch stage of the metric definition.
  * metadata [MetricDescriptorMetadata](#metricdescriptormetadata)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
  * monitoredResourceTypes `array`: Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
    * items `string`
  * name `string`: The resource name of the metric descriptor.
  * type `string`: The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" 
  * unit `string`: The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems may scale the values to be more easily displayed (so a value of 0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as 3.5MBy). However, if the unit is KBy, then the value of the metric is always in thousands of bytes, no matter how it may be displayed..If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent").
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.

### MetricDescriptorMetadata
* MetricDescriptorMetadata `object`: Additional annotations that can be used to guide the usage of a metric.
  * ingestDelay `string`: The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Deprecated. Must use the MetricDescriptor.launch_stage instead.
  * samplePeriod `string`: The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.

### MonitoredResource
* MonitoredResource `object`: An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone": { "type": "gce_instance", "labels": { "instance_id": "12345678901234", "zone": "us-central1-a" }} 
  * labels `object`: Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
  * type `string`: Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance.

### MonitoredResourceDescriptor
* MonitoredResourceDescriptor `object`: An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
  * description `string`: Optional. A detailed description of the monitored resource type that might be used in documentation.
  * displayName `string`: Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".
  * labels `array`: Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".
    * items [LabelDescriptor](#labeldescriptor)
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Optional. The launch stage of the monitored resource definition.
  * name `string`: Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}".
  * type `string`: Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL.

### MonitoredResourceMetadata
* MonitoredResourceMetadata `object`: Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
  * systemLabels `object`: Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } 
  * userLabels `object`: Output only. A map of user-defined metadata labels.

### RequestLog
* RequestLog `object`: Complete log information about a single HTTP request to an App Engine application.
  * host `string`: Internet host and port number of the resource being requested.
  * appEngineRelease `string`: App Engine release version.
  * appId `string`: Application that handled this request.
  * cost `number`: An indication of the relative cost of serving this request.
  * endTime `string`: Time when the request finished.
  * finished `boolean`: Whether this request is finished or active.
  * first `boolean`: Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them.
  * httpVersion `string`: HTTP version of request. Example: "HTTP/1.1".
  * instanceId `string`: An identifier for the instance that handled the request.
  * instanceIndex `integer`: If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
  * ip `string`: Origin IP address.
  * latency `string`: Latency of the request.
  * line `array`: A list of log lines emitted by the application while serving this request.
    * items [LogLine](#logline)
  * megaCycles `string`: Number of CPU megacycles used to process request.
  * method `string`: Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE".
  * moduleId `string`: Module of the application that handled this request.
  * nickname `string`: The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21.
  * pendingTime `string`: Time this request spent in the pending request queue.
  * referrer `string`: Referrer URL of request.
  * requestId `string`: Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
  * resource `string`: Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included.
  * responseSize `string`: Size in bytes sent back to client by request.
  * sourceReference `array`: Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
    * items [SourceReference](#sourcereference)
  * startTime `string`: Time when the request started.
  * status `integer`: HTTP response status code. Example: 200, 404.
  * taskName `string`: Task name of the request, in the case of an offline request.
  * taskQueueName `string`: Queue name of the request, in the case of an offline request.
  * traceId `string`: Stackdriver Trace identifier for this request.
  * traceSampled `boolean`: If true, the value in the 'trace_id' field was sampled for storage in a trace backend.
  * urlMapEntry `string`: File or class that handled the request.
  * userAgent `string`: User agent that made the request.
  * versionId `string`: Version of the application that handled this request.
  * wasLoadingRequest `boolean`: Whether this was a loading request for the instance.

### SourceLocation
* SourceLocation `object`: Specifies a location in a source code file.
  * file `string`: Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
  * functionName `string`: Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
  * line `string`: Line within the source file.

### SourceReference
* SourceReference `object`: A reference to a particular snapshot of the source tree used to build and deploy an application.
  * repository `string`: Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
  * revisionId `string`: The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"

### SuppressionInfo
* SuppressionInfo `object`: Information about entries that were omitted from the session.
  * reason `string` (values: REASON_UNSPECIFIED, RATE_LIMIT, NOT_CONSUMED): The reason that entries were omitted from the session.
  * suppressedCount `integer`: A lower bound on the count of entries omitted due to reason.

### TailLogEntriesRequest
* TailLogEntriesRequest `object`: The parameters to TailLogEntries.
  * bufferWindow `string`: Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds.
  * filter `string`: Optional. A filter that chooses which log entries to return. See Advanced Logs Filters (https://cloud.google.com/logging/docs/view/advanced_filters). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters.
  * resourceNames `array`: Required. Name of a parent resource from which to retrieve log entries: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" May alternatively be one or more views: "projects/PROJECT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID" "organization/ORGANIZATION_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID" "billingAccounts/BILLING_ACCOUNT_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID" "folders/FOLDER_ID/locations/LOCATION_ID/buckets/BUCKET_ID/views/VIEW_ID"
    * items `string`

### TailLogEntriesResponse
* TailLogEntriesResponse `object`: Result returned from TailLogEntries.
  * entries `array`: A list of log entries. Each response in the stream will order entries with increasing values of LogEntry.timestamp. Ordering is not guaranteed between separate responses.
    * items [LogEntry](#logentry)
  * suppressionInfo `array`: If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response.
    * items [SuppressionInfo](#suppressioninfo)

### UndeleteBucketRequest
* UndeleteBucketRequest `object`: The parameters to UndeleteBucket.

### WriteLogEntriesRequest
* WriteLogEntriesRequest `object`: The parameters to WriteLogEntries.
  * dryRun `boolean`: Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data.
  * entries `array`: Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period (https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).To improve throughput and to avoid exceeding the quota limit (https://cloud.google.com/logging/quota-policy) for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry.
    * items [LogEntry](#logentry)
  * labels `object`: Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry.
  * logName `string`: Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example: "projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity" The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry.
  * partialSuccess `boolean`: Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the entries' zero-based index in the entries.write method.
  * resource [MonitoredResource](#monitoredresource)

### WriteLogEntriesResponse
* WriteLogEntriesResponse `object`: Result returned from WriteLogEntries.


