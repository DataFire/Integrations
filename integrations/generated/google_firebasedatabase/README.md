# @datafire/google_firebasedatabase

Client library for Firebase Realtime Database Management API

## Installation and Usage
```bash
npm install --save @datafire/google_firebasedatabase
```
```js
let google_firebasedatabase = require('@datafire/google_firebasedatabase').create({
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

The Firebase Realtime Database Management API enables programmatic provisioning and management of Realtime Database instances.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebasedatabase.oauthCallback({
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
google_firebasedatabase.oauthRefresh(null, context)
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

### firebasedatabase.projects.locations.instances.delete
Marks a DatabaseInstance to be deleted. The DatabaseInstance will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
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
* output [DatabaseInstance](#databaseinstance)

### firebasedatabase.projects.locations.instances.get
Gets the DatabaseInstance identified by the specified resource name.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. `database-id` is a globally unique identifier across all parent collections. For convenience, this method allows you to supply `-` as a wildcard character in place of specific collections under `projects` and `locations`. The resulting wildcarding form of the method is: `projects/-/locations/-/instances/{database-id}`.
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
* output [DatabaseInstance](#databaseinstance)

### firebasedatabase.projects.locations.instances.disable
Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.disable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
  * body [DisableDatabaseInstanceRequest](#disabledatabaseinstancerequest)
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
* output [DatabaseInstance](#databaseinstance)

### firebasedatabase.projects.locations.instances.reenable
Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.reenable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
  * body [ReenableDatabaseInstanceRequest](#reenabledatabaseinstancerequest)
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
* output [DatabaseInstance](#databaseinstance)

### firebasedatabase.projects.locations.instances.list
Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent project for which to list database instances, in the form: `projects/{project-number}/locations/{location-id}` To list across all locations, use a parent in the form: `projects/{project-number}/locations/-`
  * pageSize `integer`: The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
  * pageToken `string`: Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing.
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
* output [ListDatabaseInstancesResponse](#listdatabaseinstancesresponse)

### firebasedatabase.projects.locations.instances.create
Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.


```js
google_firebasedatabase.firebasedatabase.projects.locations.instances.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent project for which to create a database instance, in the form: `projects/{project-number}/locations/{location-id}`.
  * databaseId `string`: The globally unique identifier of the database instance.
  * validateOnly `boolean`: When set to true, the request will be validated but not submitted.
  * body [DatabaseInstance](#databaseinstance)
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
* output [DatabaseInstance](#databaseinstance)



## Definitions

### DatabaseInstance
* DatabaseInstance `object`: Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
  * databaseUrl `string`: Immutable. The globally unique hostname of the database.
  * name `string`: The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. Currently the only supported location is 'us-central1'.
  * project `string`: The resource name of the project this instance belongs to. For example: `projects/{project-number}`.
  * state `string` (values: LIFECYCLE_STATE_UNSPECIFIED, ACTIVE, DISABLED, DELETED): The database's lifecycle state. Read-only.
  * type `string` (values: DATABASE_INSTANCE_TYPE_UNSPECIFIED, DEFAULT_DATABASE, USER_DATABASE): The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.

### DisableDatabaseInstanceRequest
* DisableDatabaseInstanceRequest `object`: The request sent to the DisableDatabaseInstance method.

### ListDatabaseInstancesResponse
* ListDatabaseInstancesResponse `object`: The response from the ListDatabaseInstances method.
  * instances `array`: List of each DatabaseInstance that is in the parent Firebase project.
    * items [DatabaseInstance](#databaseinstance)
  * nextPageToken `string`: If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListDatabaseInstances` to find the next group of database instances. Page tokens are short-lived and should not be persisted.

### ReenableDatabaseInstanceRequest
* ReenableDatabaseInstanceRequest `object`: The request sent to the ReenableDatabaseInstance method.


