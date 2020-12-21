# @datafire/google_sql

Client library for Cloud SQL Admin API

## Installation and Usage
```bash
npm install --save @datafire/google_sql
```
```js
let google_sql = require('@datafire/google_sql').create({
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

API for Cloud SQL database instance management

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sql.oauthCallback({
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
google_sql.oauthRefresh(null, context)
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

### sql.flags.list
List all available database flags for Cloud SQL instances.


```js
google_sql.sql.flags.list({}, context)
```

#### Input
* input `object`
  * databaseVersion `string`: Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
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
* output [FlagsListResponse](#flagslistresponse)

### sql.instances.list
Lists instances under a given project.


```js
google_sql.sql.instances.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project for which to list Cloud SQL instances.
  * filter `string`: A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
  * maxResults `integer`: The maximum number of results to return per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
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
* output [InstancesListResponse](#instanceslistresponse)

### sql.instances.insert
Creates a new Cloud SQL instance.


```js
google_sql.sql.instances.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project to which the newly created Cloud SQL instances should belong.
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
* output [Operation](#operation)

### sql.instances.delete
Deletes a Cloud SQL instance.


```js
google_sql.sql.instances.delete({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance to be deleted.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.instances.get
Retrieves a resource containing information about a Cloud SQL instance.


```js
google_sql.sql.instances.get({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
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

### sql.instances.patch
Updates settings of a Cloud SQL instance. This method supports patch semantics.


```js
google_sql.sql.instances.patch({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.instances.update
Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.


```js
google_sql.sql.instances.update({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.instances.addServerCa
Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.


```js
google_sql.sql.instances.addServerCa({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.backupRuns.list
Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the backup initiation time.


```js
google_sql.sql.backupRuns.list({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * maxResults `integer`: Maximum number of backup runs per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
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
* output [BackupRunsListResponse](#backuprunslistresponse)

### sql.backupRuns.insert
Creates a new backup run on demand. This method is applicable only to Second Generation instances.


```js
google_sql.sql.backupRuns.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [BackupRun](#backuprun)
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
* output [Operation](#operation)

### sql.backupRuns.delete
Deletes the backup taken by a backup run.


```js
google_sql.sql.backupRuns.delete({
  "project": "",
  "instance": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * id **required** `string`: The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
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
* output [Operation](#operation)

### sql.backupRuns.get
Retrieves a resource containing information about a backup run.


```js
google_sql.sql.backupRuns.get({
  "project": "",
  "instance": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * id **required** `string`: The ID of this Backup Run.
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
* output [BackupRun](#backuprun)

### sql.instances.clone
Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.


```js
google_sql.sql.instances.clone({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the source as well as the clone Cloud SQL instance.
  * instance **required** `string`: The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
  * body [InstancesCloneRequest](#instancesclonerequest)
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
* output [Operation](#operation)

### sql.sslCerts.createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.


```js
google_sql.sql.sslCerts.createEphemeral({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the Cloud SQL project.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [SslCertsCreateEphemeralRequest](#sslcertscreateephemeralrequest)
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
* output [SslCert](#sslcert)

### sql.databases.list
Lists databases in the specified Cloud SQL instance.


```js
google_sql.sql.databases.list({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [DatabasesListResponse](#databaseslistresponse)

### sql.databases.insert
Inserts a resource containing information about a database inside a Cloud SQL instance.


```js
google_sql.sql.databases.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * body [Database](#database)
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
* output [Operation](#operation)

### sql.databases.delete
Deletes a database from a Cloud SQL instance.


```js
google_sql.sql.databases.delete({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * database **required** `string`: Name of the database to be deleted in the instance.
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
* output [Operation](#operation)

### sql.databases.get
Retrieves a resource containing information about a database inside a Cloud SQL instance.


```js
google_sql.sql.databases.get({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * database **required** `string`: Name of the database in the instance.
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
* output [Database](#database)

### sql.databases.patch
Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.


```js
google_sql.sql.databases.patch({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * database **required** `string`: Name of the database to be updated in the instance.
  * body [Database](#database)
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
* output [Operation](#operation)

### sql.databases.update
Updates a resource containing information about a database inside a Cloud SQL instance.


```js
google_sql.sql.databases.update({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * database **required** `string`: Name of the database to be updated in the instance.
  * body [Database](#database)
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
* output [Operation](#operation)

### sql.instances.demoteMaster
Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.


```js
google_sql.sql.instances.demoteMaster({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance name.
  * body [InstancesDemoteMasterRequest](#instancesdemotemasterrequest)
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
* output [Operation](#operation)

### sql.instances.export
Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.


```js
google_sql.sql.instances.export({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance to be exported.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesExportRequest](#instancesexportrequest)
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
* output [Operation](#operation)

### sql.instances.failover
Failover the instance to its failover replica instance. Using this operation might cause your instance to restart.


```js
google_sql.sql.instances.failover({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the read replica.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesFailoverRequest](#instancesfailoverrequest)
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
* output [Operation](#operation)

### sql.instances.import
Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.


```js
google_sql.sql.instances.import({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesImportRequest](#instancesimportrequest)
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
* output [Operation](#operation)

### sql.instances.listServerCas
Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.


```js
google_sql.sql.instances.listServerCas({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [InstancesListServerCasResponse](#instanceslistservercasresponse)

### sql.instances.promoteReplica
Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.


```js
google_sql.sql.instances.promoteReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the read replica.
  * instance **required** `string`: Cloud SQL read replica instance name.
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
* output [Operation](#operation)

### sql.projects.instances.rescheduleMaintenance
Reschedules the maintenance on the given instance.


```js
google_sql.sql.projects.instances.rescheduleMaintenance({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [SqlInstancesRescheduleMaintenanceRequestBody](#sqlinstancesreschedulemaintenancerequestbody)
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
* output [Operation](#operation)

### sql.instances.resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance.


```js
google_sql.sql.instances.resetSslConfig({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.instances.restart
Restarts a Cloud SQL instance.


```js
google_sql.sql.instances.restart({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance to be restarted.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [Operation](#operation)

### sql.instances.restoreBackup
Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.


```js
google_sql.sql.instances.restoreBackup({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesRestoreBackupRequest](#instancesrestorebackuprequest)
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
* output [Operation](#operation)

### sql.instances.rotateServerCa
Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.


```js
google_sql.sql.instances.rotateServerCa({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesRotateServerCaRequest](#instancesrotateservercarequest)
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
* output [Operation](#operation)

### sql.sslCerts.list
Lists all of the current SSL certificates for the instance.


```js
google_sql.sql.sslCerts.list({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
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
* output [SslCertsListResponse](#sslcertslistresponse)

### sql.sslCerts.insert
Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.


```js
google_sql.sql.sslCerts.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [SslCertsInsertRequest](#sslcertsinsertrequest)
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
* output [SslCertsInsertResponse](#sslcertsinsertresponse)

### sql.sslCerts.delete
Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.


```js
google_sql.sql.sslCerts.delete({
  "project": "",
  "instance": "",
  "sha1Fingerprint": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * sha1Fingerprint **required** `string`: Sha1 FingerPrint.
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
* output [Operation](#operation)

### sql.sslCerts.get
Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.


```js
google_sql.sql.sslCerts.get({
  "project": "",
  "instance": "",
  "sha1Fingerprint": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * sha1Fingerprint **required** `string`: Sha1 FingerPrint.
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
* output [SslCert](#sslcert)

### sql.projects.instances.startExternalSync
Start External primary instance migration.


```js
google_sql.sql.projects.instances.startExternalSync({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * syncMode `string` (values: EXTERNAL_SYNC_MODE_UNSPECIFIED, ONLINE, OFFLINE): External sync mode.
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
* output [Operation](#operation)

### sql.instances.startReplica
Starts the replication in the read replica instance.


```js
google_sql.sql.instances.startReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the read replica.
  * instance **required** `string`: Cloud SQL read replica instance name.
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
* output [Operation](#operation)

### sql.instances.stopReplica
Stops the replication in the read replica instance.


```js
google_sql.sql.instances.stopReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: ID of the project that contains the read replica.
  * instance **required** `string`: Cloud SQL read replica instance name.
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
* output [Operation](#operation)

### sql.instances.truncateLog
Truncate MySQL general and slow query log tables


```js
google_sql.sql.instances.truncateLog({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the Cloud SQL project.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * body [InstancesTruncateLogRequest](#instancestruncatelogrequest)
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
* output [Operation](#operation)

### sql.users.delete
Deletes a user from a Cloud SQL instance.


```js
google_sql.sql.users.delete({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * host `string`: Host of the user in the instance.
  * name `string`: Name of the user in the instance.
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
* output [Operation](#operation)

### sql.users.list
Lists users in the specified Cloud SQL instance.


```js
google_sql.sql.users.list({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
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
* output [UsersListResponse](#userslistresponse)

### sql.users.insert
Creates a new user in a Cloud SQL instance.


```js
google_sql.sql.users.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * body [User](#user)
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
* output [Operation](#operation)

### sql.users.update
Updates an existing user in a Cloud SQL instance.


```js
google_sql.sql.users.update({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * host `string`: Optional. Host of the user in the instance.
  * name `string`: Name of the user in the instance.
  * body [User](#user)
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
* output [Operation](#operation)

### sql.projects.instances.verifyExternalSyncSettings
Verify External primary instance external sync settings.


```js
google_sql.sql.projects.instances.verifyExternalSyncSettings({
  "project": "",
  "instance": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * syncMode `string` (values: EXTERNAL_SYNC_MODE_UNSPECIFIED, ONLINE, OFFLINE): External sync mode
  * verifyConnectionOnly `boolean`: Flag to enable verifying connection only
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
* output [SqlInstancesVerifyExternalSyncSettingsResponse](#sqlinstancesverifyexternalsyncsettingsresponse)

### sql.operations.list
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.


```js
google_sql.sql.operations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * instance `string`: Cloud SQL instance ID. This does not include the project ID.
  * maxResults `integer`: Maximum number of operations per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
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
* output [OperationsListResponse](#operationslistresponse)

### sql.operations.get
Retrieves an instance operation that has been performed on an instance.


```js
google_sql.sql.operations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project that contains the instance.
  * operation **required** `string`: Instance operation ID.
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
* output [Operation](#operation)

### sql.tiers.list
Lists all available machine types (tiers) for Cloud SQL, for example, db-n1-standard-1. For related information, see Pricing.


```js
google_sql.sql.tiers.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project for which to list tiers.
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
* output [TiersListResponse](#tierslistresponse)



## Definitions

### AclEntry
* AclEntry `object`: An entry for an Access Control list.
  * expirationTime `string`: The time when this access control entry expires in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * kind `string`: This is always *sql#aclEntry*.
  * name `string`: Optional. A label to identify this entry.
  * value `string`: The allowlisted value for the access control list.

### ApiWarning
* ApiWarning `object`: An Admin API warning message.
  * code `string` (values: SQL_API_WARNING_CODE_UNSPECIFIED, REGION_UNREACHABLE): Code to uniquely identify the warning type.
  * message `string`: The warning message.

### BackupConfiguration
* BackupConfiguration `object`: Database instance backup configuration.
  * backupRetentionSettings [BackupRetentionSettings](#backupretentionsettings)
  * binaryLogEnabled `boolean`: (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.
  * enabled `boolean`: Whether this configuration is enabled.
  * kind `string`: This is always *sql#backupConfiguration*.
  * location `string`: Location of the backup
  * pointInTimeRecoveryEnabled `boolean`: Reserved for future use.
  * replicationLogArchivingEnabled `boolean`: Reserved for future use.
  * startTime `string`: Start time for the daily backup configuration in UTC timezone in the 24 hour format - *HH:MM*.
  * transactionLogRetentionDays `integer`: The number of days of transaction logs we retain for point in time restore, from 1-7.

### BackupContext
* BackupContext `object`: Backup context.
  * backupId `string`: The identifier of the backup.
  * kind `string`: This is always *sql#backupContext*.

### BackupRetentionSettings
* BackupRetentionSettings `object`: We currently only support backup retention by specifying the number of backups we will retain.
  * retainedBackups `integer`: Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.
  * retentionUnit `string` (values: RETENTION_UNIT_UNSPECIFIED, COUNT): The unit that 'retained_backups' represents.

### BackupRun
* BackupRun `object`: A BackupRun resource.
  * backupKind `string` (values: SQL_BACKUP_KIND_UNSPECIFIED, SNAPSHOT, PHYSICAL): Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
  * description `string`: The description of this run, only applicable to on-demand backups.
  * diskEncryptionConfiguration [DiskEncryptionConfiguration](#diskencryptionconfiguration)
  * diskEncryptionStatus [DiskEncryptionStatus](#diskencryptionstatus)
  * endTime `string`: The time the backup operation completed in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * enqueuedTime `string`: The time the run was enqueued in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * error [OperationError](#operationerror)
  * id `string`: The identifier for this backup run. Unique only for a specific Cloud SQL instance.
  * instance `string`: Name of the database instance.
  * kind `string`: This is always *sql#backupRun*.
  * location `string`: Location of the backups.
  * selfLink `string`: The URI of this resource.
  * startTime `string`: The time the backup operation actually started in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * status `string` (values: SQL_BACKUP_RUN_STATUS_UNSPECIFIED, ENQUEUED, OVERDUE, RUNNING, FAILED, SUCCESSFUL, SKIPPED, DELETION_PENDING, DELETION_FAILED, DELETED): The status of this run.
  * type `string` (values: SQL_BACKUP_RUN_TYPE_UNSPECIFIED, AUTOMATED, ON_DEMAND): The type of this run; can be either "AUTOMATED" or "ON_DEMAND".
  * windowStartTime `string`: The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.

### BackupRunsListResponse
* BackupRunsListResponse `object`: Backup run list results.
  * items `array`: A list of backup runs in reverse chronological order of the enqueued time.
    * items [BackupRun](#backuprun)
  * kind `string`: This is always *sql#backupRunsList*.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### BinLogCoordinates
* BinLogCoordinates `object`: Binary log coordinates.
  * binLogFileName `string`: Name of the binary log file for a Cloud SQL instance.
  * binLogPosition `string`: Position (offset) within the binary log file.
  * kind `string`: This is always *sql#binLogCoordinates*.

### CloneContext
* CloneContext `object`: Database instance clone context.
  * binLogCoordinates [BinLogCoordinates](#binlogcoordinates)
  * destinationInstanceName `string`: Name of the Cloud SQL instance to be created as a clone.
  * kind `string`: This is always *sql#cloneContext*.
  * pitrTimestampMs `string`: Reserved for future use.
  * pointInTime `string`: Reserved for future use.

### Database
* Database `object`: Represents a SQL database on the Cloud SQL instance.
  * charset `string`: The Cloud SQL charset value.
  * collation `string`: The Cloud SQL collation value.
  * etag `string`: This field is deprecated and will be removed from a future version of the API.
  * instance `string`: The name of the Cloud SQL instance. This does not include the project ID.
  * kind `string`: This is always *sql#database*.
  * name `string`: The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
  * project `string`: The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
  * selfLink `string`: The URI of this resource.
  * sqlserverDatabaseDetails [SqlServerDatabaseDetails](#sqlserverdatabasedetails)

### DatabaseFlags
* DatabaseFlags `object`: Database flags for Cloud SQL instances.
  * name `string`: The name of the flag. These flags are passed at instance startup, so include both server options and system variables for MySQL. Flags are specified with underscores, not hyphens. For more information, see Configuring Database Flags in the Cloud SQL documentation.
  * value `string`: The value of the flag. Booleans are set to *on* for true and *off* for false. This field must be omitted if the flag doesn't take a value.

### DatabaseInstance
* DatabaseInstance `object`: A Cloud SQL instance resource. Next field: 36
  * backendType `string` (values: SQL_BACKEND_TYPE_UNSPECIFIED, FIRST_GEN, SECOND_GEN, EXTERNAL):  *SECOND_GEN*: Cloud SQL database instance. *EXTERNAL*: A database server that is not managed by Google. This property is read-only; use the *tier* property in the *settings* object to determine the database type.
  * connectionName `string`: Connection name of the Cloud SQL instance used in connection strings.
  * currentDiskSize `string`: The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see this announcement for details.
  * databaseVersion `string` (values: SQL_DATABASE_VERSION_UNSPECIFIED, MYSQL_5_1, MYSQL_5_5, MYSQL_5_6, MYSQL_5_7, POSTGRES_9_6, POSTGRES_11, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB, POSTGRES_10, POSTGRES_12, MYSQL_8_0, POSTGRES_13): The database engine type and version. The *databaseVersion* field cannot be changed after instance creation. MySQL instances: *MYSQL_8_0*, *MYSQL_5_7* (default), or *MYSQL_5_6*. PostgreSQL instances: *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11* or *POSTGRES_12* (default). SQL Server instances: *SQLSERVER_2017_STANDARD* (default), *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2017_EXPRESS*, or *SQLSERVER_2017_WEB*.
  * diskEncryptionConfiguration [DiskEncryptionConfiguration](#diskencryptionconfiguration)
  * diskEncryptionStatus [DiskEncryptionStatus](#diskencryptionstatus)
  * etag `string`: This field is deprecated and will be removed from a future version of the API. Use the *settings.settingsVersion* field instead.
  * failoverReplica `object`: The name and status of the failover replica. This property is applicable only to Second Generation instances.
    * available `boolean`: The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.
    * name `string`: The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID. This property is applicable only to Second Generation instances.
  * gceZone `string`: The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone.
  * instanceType `string` (values: SQL_INSTANCE_TYPE_UNSPECIFIED, CLOUD_SQL_INSTANCE, ON_PREMISES_INSTANCE, READ_REPLICA_INSTANCE): The instance type. This can be one of the following. *CLOUD_SQL_INSTANCE*: A Cloud SQL instance that is not replicating from a primary instance. *ON_PREMISES_INSTANCE*: An instance running on the customer's premises. *READ_REPLICA_INSTANCE*: A Cloud SQL instance configured as a read-replica.
  * ipAddresses `array`: The assigned IP addresses for the instance.
    * items [IpMapping](#ipmapping)
  * ipv6Address `string`: The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
  * kind `string`: This is always *sql#instance*.
  * masterInstanceName `string`: The name of the instance which will act as primary in the replication setup.
  * maxDiskSize `string`: The maximum disk size of the instance in bytes.
  * name `string`: Name of the Cloud SQL instance. This does not include the project ID.
  * onPremisesConfiguration [OnPremisesConfiguration](#onpremisesconfiguration)
  * project `string`: The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
  * region `string`: The geographical region. Can be *us-central* (*FIRST_GEN* instances only) *us-central1* (*SECOND_GEN* instances only) *asia-east1* or *europe-west1*. Defaults to *us-central* or *us-central1* depending on the instance type. The region cannot be changed after instance creation.
  * replicaConfiguration [ReplicaConfiguration](#replicaconfiguration)
  * replicaNames `array`: The replicas of the instance.
    * items `string`
  * rootPassword `string`: Initial root password. Use only on creation.
  * satisfiesPzs `boolean`: The status indicating if instance satisfies physical zone separation. Reserved for future use.
  * scheduledMaintenance [SqlScheduledMaintenance](#sqlscheduledmaintenance)
  * secondaryGceZone `string`: The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. Reserved for future use.
  * selfLink `string`: The URI of this resource.
  * serverCaCert [SslCert](#sslcert)
  * serviceAccountEmailAddress `string`: The service account email address assigned to the instance. This property is applicable only to Second Generation instances.
  * settings [Settings](#settings)
  * state `string` (values: SQL_INSTANCE_STATE_UNSPECIFIED, RUNNABLE, SUSPENDED, PENDING_DELETE, PENDING_CREATE, MAINTENANCE, FAILED): The current serving state of the Cloud SQL instance. This can be one of the following. *SQL_INSTANCE_STATE_UNSPECIFIED*: The state of the instance is unknown. *RUNNABLE*: The instance has been stopped by owner. It is not currently running, but it's ready to be restarted. *SUSPENDED*: The instance is not available, for example due to problems with billing. for example due to problems with billing. *PENDING_DELETE*: The instance is being deleted. *PENDING_CREATE*: The instance is being created. *MAINTENANCE*: The instance is down for maintenance. *FAILED*: The instance creation failed.
  * suspensionReason `array`: If the instance state is SUSPENDED, the reason for the suspension.
    * items `string` (values: SQL_SUSPENSION_REASON_UNSPECIFIED, BILLING_ISSUE, LEGAL_ISSUE, OPERATIONAL_ISSUE, KMS_KEY_ISSUE)

### DatabasesListResponse
* DatabasesListResponse `object`: Database list response.
  * items `array`: List of database resources in the instance.
    * items [Database](#database)
  * kind `string`: This is always *sql#databasesList*.

### DemoteMasterConfiguration
* DemoteMasterConfiguration `object`: Read-replica configuration for connecting to the on-premises primary instance.
  * kind `string`: This is always *sql#demoteMasterConfiguration*.
  * mysqlReplicaConfiguration [DemoteMasterMySqlReplicaConfiguration](#demotemastermysqlreplicaconfiguration)

### DemoteMasterContext
* DemoteMasterContext `object`: Database instance demote primary instance context.
  * kind `string`: This is always *sql#demoteMasterContext*.
  * masterInstanceName `string`: The name of the instance which will act as on-premises primary instance in the replication setup.
  * replicaConfiguration [DemoteMasterConfiguration](#demotemasterconfiguration)
  * verifyGtidConsistency `boolean`: Verify GTID consistency for demote operation. Default value: *True*. Second Generation instances only. Setting this flag to false enables you to bypass GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues.

### DemoteMasterMySqlReplicaConfiguration
* DemoteMasterMySqlReplicaConfiguration `object`: Read-replica configuration specific to MySQL databases.
  * caCertificate `string`: PEM representation of the trusted CA's x509 certificate.
  * clientCertificate `string`: PEM representation of the replica's x509 certificate.
  * clientKey `string`: PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.
  * kind `string`: This is always *sql#demoteMasterMysqlReplicaConfiguration*.
  * password `string`: The password for the replication connection.
  * username `string`: The username for the replication connection.

### DenyMaintenancePeriod
* DenyMaintenancePeriod `object`: Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
  * endDate `string`: "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  * startDate `string`: "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  * time `string`: Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00

### DiskEncryptionConfiguration
* DiskEncryptionConfiguration `object`: Disk encryption configuration for an instance.
  * kind `string`: This is always *sql#diskEncryptionConfiguration*.
  * kmsKeyName `string`: Resource name of KMS key for disk encryption

### DiskEncryptionStatus
* DiskEncryptionStatus `object`: Disk encryption status for an instance.
  * kind `string`: This is always *sql#diskEncryptionStatus*.
  * kmsKeyVersionName `string`: KMS key version used to encrypt the Cloud SQL instance resource

### ExportContext
* ExportContext `object`: Database instance export context.
  * csvExportOptions `object`: Options for exporting data as CSV. *MySQL* and *PostgreSQL* instances only.
    * selectQuery `string`: The select query used to extract the data.
  * databases `array`: Databases to be exported. *MySQL instances:* If *fileType* is *SQL* and no database is specified, all databases are exported, except for the *mysql* system database. If *fileType* is *CSV*, you can specify one database, either by using this property or by using the *csvExportOptions.selectQuery* property, which takes precedence over this property. *PostgreSQL instances:* You must specify one database to be exported. If *fileType* is *CSV*, this database must match the one specified in the *csvExportOptions.selectQuery* property.
    * items `string`
  * fileType `string` (values: SQL_FILE_TYPE_UNSPECIFIED, SQL, CSV, BAK): The file type for the specified uri. *SQL*: The file contains SQL statements. *CSV*: The file contains CSV data. *BAK*: The file contains backup data for a SQL Server instance.
  * kind `string`: This is always *sql#exportContext*.
  * offload `boolean`: Option for export offload.
  * sqlExportOptions `object`: Options for exporting data as SQL statements.
    * mysqlExportOptions `object`: Options for exporting from MySQL.
      * masterData `integer`: Option to include SQL statement required to set up replication. If set to *1*, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to *2*, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than *1*, --set-gtid-purged is set to OFF.
    * schemaOnly `boolean`: Export only schemas.
    * tables `array`: Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table.
      * items `string`
  * uri `string`: The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form *gs: //bucketName/fileName*. If the file already exists, the requests // succeeds, but the operation fails. If *fileType* is // *SQL* and the filename ends with .gz, the contents are // compressed.

### FailoverContext
* FailoverContext `object`: Database instance failover context.
  * kind `string`: This is always *sql#failoverContext*.
  * settingsVersion `string`: The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.

### Flag
* Flag `object`: A flag resource.
  * allowedIntValues `array`: Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values.
    * items `string`
  * allowedStringValues `array`: For *STRING* flags, a list of strings that the value can be set to.
    * items `string`
  * appliesTo `array`: The database version this flag applies to. Can be *MYSQL_8_0*, *MYSQL_5_6*, or *MYSQL_5_7*.
    * items `string` (values: SQL_DATABASE_VERSION_UNSPECIFIED, MYSQL_5_1, MYSQL_5_5, MYSQL_5_6, MYSQL_5_7, POSTGRES_9_6, POSTGRES_11, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB, POSTGRES_10, POSTGRES_12, MYSQL_8_0, POSTGRES_13)
  * inBeta `boolean`: Whether or not the flag is considered in beta.
  * kind `string`: This is always *sql#flag*.
  * maxValue `string`: For *INTEGER* flags, the maximum allowed value.
  * minValue `string`: For *INTEGER* flags, the minimum allowed value.
  * name `string`: This is the name of the flag. Flag names always use underscores, not hyphens, for example: *max_allowed_packet*
  * requiresRestart `boolean`: Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
  * type `string` (values: SQL_FLAG_TYPE_UNSPECIFIED, BOOLEAN, STRING, INTEGER, NONE, MYSQL_TIMEZONE_OFFSET, FLOAT, REPEATED_STRING): The type of the flag. Flags are typed to being *BOOLEAN*, *STRING*, *INTEGER* or *NONE*. *NONE* is used for flags which do not take a value, such as *skip_grant_tables*.

### FlagsListResponse
* FlagsListResponse `object`: Flags list response.
  * items `array`: List of flags.
    * items [Flag](#flag)
  * kind `string`: This is always *sql#flagsList*.

### ImportContext
* ImportContext `object`: Database instance import context.
  * bakImportOptions `object`: Import parameters specific to SQL Server .BAK files
    * encryptionOptions `object`
      * certPath `string`: Path to the Certificate (.cer) in Cloud Storage, in the form *gs://bucketName/fileName*. The instance must have write permissions to the bucket and read access to the file.
      * pvkPassword `string`: Password that encrypts the private key
      * pvkPath `string`: Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form *gs://bucketName/fileName*. The instance must have write permissions to the bucket and read access to the file.
  * csvImportOptions `object`: Options for importing data as CSV.
    * columns `array`: The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.
      * items `string`
    * table `string`: The table to which CSV data is imported.
  * database `string`: The target database for the import. If *fileType* is *SQL*, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If *fileType* is *CSV*, one database must be specified.
  * fileType `string` (values: SQL_FILE_TYPE_UNSPECIFIED, SQL, CSV, BAK): The file type for the specified uri. *SQL*: The file contains SQL statements. *CSV*: The file contains CSV data.
  * importUser `string`: The PostgreSQL user for this import operation. PostgreSQL instances only.
  * kind `string`: This is always *sql#importContext*.
  * uri `string`: Path to the import file in Cloud Storage, in the form *gs: //bucketName/fileName*. Compressed gzip files (.gz) are supported // when *fileType* is *SQL*. The instance must have // write permissions to the bucket and read access to the file.

### InsightsConfig
* InsightsConfig `object`: Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
  * queryInsightsEnabled `boolean`: Whether Query Insights feature is enabled.
  * queryStringLength `integer`: Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value.
  * recordApplicationTags `boolean`: Whether Query Insights will record application tags from query when enabled.
  * recordClientAddress `boolean`: Whether Query Insights will record client address when enabled.

### InstancesCloneRequest
* InstancesCloneRequest `object`: Database instance clone request.
  * cloneContext [CloneContext](#clonecontext)

### InstancesDemoteMasterRequest
* InstancesDemoteMasterRequest `object`: Database demote primary instance request.
  * demoteMasterContext [DemoteMasterContext](#demotemastercontext)

### InstancesExportRequest
* InstancesExportRequest `object`: Database instance export request.
  * exportContext [ExportContext](#exportcontext)

### InstancesFailoverRequest
* InstancesFailoverRequest `object`: Instance failover request.
  * failoverContext [FailoverContext](#failovercontext)

### InstancesImportRequest
* InstancesImportRequest `object`: Database instance import request.
  * importContext [ImportContext](#importcontext)

### InstancesListResponse
* InstancesListResponse `object`: Database instances list response.
  * items `array`: List of database instance resources.
    * items [DatabaseInstance](#databaseinstance)
  * kind `string`: This is always *sql#instancesList*.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * warnings `array`: List of warnings that occurred while handling the request.
    * items [ApiWarning](#apiwarning)

### InstancesListServerCasResponse
* InstancesListServerCasResponse `object`: Instances ListServerCas response.
  * activeVersion `string`
  * certs `array`: List of server CA certificates for the instance.
    * items [SslCert](#sslcert)
  * kind `string`: This is always *sql#instancesListServerCas*.

### InstancesRestoreBackupRequest
* InstancesRestoreBackupRequest `object`: Database instance restore backup request.
  * restoreBackupContext [RestoreBackupContext](#restorebackupcontext)

### InstancesRotateServerCaRequest
* InstancesRotateServerCaRequest `object`: Rotate Server CA request.
  * rotateServerCaContext [RotateServerCaContext](#rotateservercacontext)

### InstancesTruncateLogRequest
* InstancesTruncateLogRequest `object`: Instance truncate log request.
  * truncateLogContext [TruncateLogContext](#truncatelogcontext)

### IpConfiguration
* IpConfiguration `object`: IP Management configuration.
  * authorizedNetworks `array`: The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: *192.168.100.0/24*).
    * items [AclEntry](#aclentry)
  * ipv4Enabled `boolean`: Whether the instance is assigned a public IP address or not.
  * privateNetwork `string`: The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, */projects/myProject/global/networks/default*. This setting can be updated, but it cannot be removed after it is set.
  * requireSsl `boolean`: Whether SSL connections over IP are enforced or not.

### IpMapping
* IpMapping `object`: Database instance IP Mapping.
  * ipAddress `string`: The IP address assigned.
  * timeToRetire `string`: The due time for this IP to be retired in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*. This field is only available when the IP is scheduled to be retired.
  * type `string` (values: SQL_IP_ADDRESS_TYPE_UNSPECIFIED, PRIMARY, OUTGOING, PRIVATE, MIGRATED_1ST_GEN): The type of this IP address. A *PRIMARY* address is a public address that can accept incoming connections. A *PRIVATE* address is a private address that can accept incoming connections. An *OUTGOING* address is the source address of connections originating from the instance, if supported.

### LocationPreference
* LocationPreference `object`: Preferred location. This specifies where a Cloud SQL instance is located, either in a specific Compute Engine zone, or co-located with an App Engine application. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
  * followGaeApplication `string`: The App Engine application to follow, it must be in the same region as the Cloud SQL instance.
  * kind `string`: This is always *sql#locationPreference*.
  * secondaryZone `string`: The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). Reserved for future use.
  * zone `string`: The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.).

### MaintenanceWindow
* MaintenanceWindow `object`: Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
  * day `integer`: day of week (1-7), starting on Monday.
  * hour `integer`: hour of day - 0 to 23.
  * kind `string`: This is always *sql#maintenanceWindow*.
  * updateTrack `string` (values: SQL_UPDATE_TRACK_UNSPECIFIED, canary, stable): Maintenance timing setting: *canary* (Earlier) or *stable* (Later). Learn more.

### MySqlReplicaConfiguration
* MySqlReplicaConfiguration `object`: Read-replica configuration specific to MySQL databases.
  * caCertificate `string`: PEM representation of the trusted CA's x509 certificate.
  * clientCertificate `string`: PEM representation of the replica's x509 certificate.
  * clientKey `string`: PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
  * connectRetryInterval `integer`: Seconds to wait between connect retries. MySQL's default is 60 seconds.
  * dumpFilePath `string`: Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.
  * kind `string`: This is always *sql#mysqlReplicaConfiguration*.
  * masterHeartbeatPeriod `string`: Interval in milliseconds between replication heartbeats.
  * password `string`: The password for the replication connection.
  * sslCipher `string`: A list of permissible ciphers to use for SSL encryption.
  * username `string`: The username for the replication connection.
  * verifyServerCertificate `boolean`: Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.

### OnPremisesConfiguration
* OnPremisesConfiguration `object`: On-premises instance configuration.
  * caCertificate `string`: PEM representation of the trusted CA's x509 certificate.
  * clientCertificate `string`: PEM representation of the replica's x509 certificate.
  * clientKey `string`: PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
  * dumpFilePath `string`: The dump file to create the Cloud SQL replica.
  * hostPort `string`: The host and port of the on-premises instance in host:port format
  * kind `string`: This is always *sql#onPremisesConfiguration*.
  * password `string`: The password for connecting to on-premises instance.
  * username `string`: The username for connecting to on-premises instance.

### Operation
* Operation `object`: An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource. Next field: 18
  * backupContext [BackupContext](#backupcontext)
  * endTime `string`: The time this operation finished in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * error [OperationErrors](#operationerrors)
  * exportContext [ExportContext](#exportcontext)
  * importContext [ImportContext](#importcontext)
  * insertTime `string`: The time this operation was enqueued in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * kind `string`: This is always *sql#operation*.
  * name `string`: An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
  * operationType `string` (values: SQL_OPERATION_TYPE_UNSPECIFIED, IMPORT, EXPORT, CREATE, UPDATE, DELETE, RESTART, BACKUP, SNAPSHOT, BACKUP_VOLUME, DELETE_VOLUME, RESTORE_VOLUME, INJECT_USER, CLONE, STOP_REPLICA, START_REPLICA, PROMOTE_REPLICA, CREATE_REPLICA, CREATE_USER, DELETE_USER, UPDATE_USER, CREATE_DATABASE, DELETE_DATABASE, UPDATE_DATABASE, FAILOVER, DELETE_BACKUP, RECREATE_REPLICA, TRUNCATE_LOG, DEMOTE_MASTER, MAINTENANCE, ENABLE_PRIVATE_IP, DEFER_MAINTENANCE, CREATE_CLONE, RESCHEDULE_MAINTENANCE, START_EXTERNAL_SYNC): The type of the operation. Valid values are: *CREATE* *DELETE* *UPDATE* *RESTART* *IMPORT* *EXPORT* *BACKUP_VOLUME* *RESTORE_VOLUME* *CREATE_USER* *DELETE_USER* *CREATE_DATABASE* *DELETE_DATABASE*
  * selfLink `string`: The URI of this resource.
  * startTime `string`: The time this operation actually started in UTC timezone in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * status `string` (values: SQL_OPERATION_STATUS_UNSPECIFIED, PENDING, RUNNING, DONE): The status of an operation. Valid values are: *PENDING* *RUNNING* *DONE* *SQL_OPERATION_STATUS_UNSPECIFIED*
  * targetId `string`: Name of the database instance related to this operation.
  * targetLink `string`
  * targetProject `string`: The project ID of the target instance related to this operation.
  * user `string`: The email address of the user who initiated this operation.

### OperationError
* OperationError `object`: Database instance operation error.
  * code `string`: Identifies the specific error that occurred.
  * kind `string`: This is always *sql#operationError*.
  * message `string`: Additional information about the error encountered.

### OperationErrors
* OperationErrors `object`: Database instance operation errors list wrapper.
  * errors `array`: The list of errors encountered while processing this operation.
    * items [OperationError](#operationerror)
  * kind `string`: This is always *sql#operationErrors*.

### OperationsListResponse
* OperationsListResponse `object`: Database instance list operations response.
  * items `array`: List of operation resources.
    * items [Operation](#operation)
  * kind `string`: This is always *sql#operationsList*.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### ReplicaConfiguration
* ReplicaConfiguration `object`: Read-replica configuration for connecting to the primary instance.
  * failoverTarget `boolean`: Specifies if the replica is the failover target. If the field is set to *true* the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.
  * kind `string`: This is always *sql#replicaConfiguration*.
  * mysqlReplicaConfiguration [MySqlReplicaConfiguration](#mysqlreplicaconfiguration)

### Reschedule
* Reschedule `object`
  * rescheduleType `string` (values: RESCHEDULE_TYPE_UNSPECIFIED, IMMEDIATE, NEXT_AVAILABLE_WINDOW, SPECIFIC_TIME): Required. The type of the reschedule.
  * scheduleTime `string`: Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.

### RestoreBackupContext
* RestoreBackupContext `object`: Database instance restore from backup context. Backup context contains source instance id and project id.
  * backupRunId `string`: The ID of the backup run to restore from.
  * instanceId `string`: The ID of the instance that the backup was taken from.
  * kind `string`: This is always *sql#restoreBackupContext*.
  * project `string`: The full project ID of the source instance.

### RotateServerCaContext
* RotateServerCaContext `object`: Instance rotate server CA context.
  * kind `string`: This is always *sql#rotateServerCaContext*.
  * nextVersion `string`: The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version.

### Settings
* Settings `object`: Database instance settings.
  * activationPolicy `string` (values: SQL_ACTIVATION_POLICY_UNSPECIFIED, ALWAYS, NEVER, ON_DEMAND): The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: *ALWAYS*: The instance is on, and remains so even in the absence of connection requests. *NEVER*: The instance is off; it is not activated, even if a connection request arrives.
  * activeDirectoryConfig [SqlActiveDirectoryConfig](#sqlactivedirectoryconfig)
  * authorizedGaeApplications `array`: The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only.
    * items `string`
  * availabilityType `string` (values: SQL_AVAILABILITY_TYPE_UNSPECIFIED, ZONAL, REGIONAL): Availability type. Potential values: *ZONAL*: The instance serves data from only one zone. Outages in that zone affect data accessibility. *REGIONAL*: The instance can serve data from more than one zone in a region (it is highly available). For more information, see Overview of the High Availability Configuration.
  * backupConfiguration [BackupConfiguration](#backupconfiguration)
  * collation `string`: The name of server Instance collation.
  * crashSafeReplicationEnabled `boolean`: Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.
  * dataDiskSizeGb `string`: The size of data disk, in GB. The data disk size minimum is 10GB.
  * dataDiskType `string` (values: SQL_DATA_DISK_TYPE_UNSPECIFIED, PD_SSD, PD_HDD, OBSOLETE_LOCAL_SSD): The type of data disk: PD_SSD (default) or PD_HDD. Not used for First Generation instances.
  * databaseFlags `array`: The database flags passed to the instance at startup.
    * items [DatabaseFlags](#databaseflags)
  * databaseReplicationEnabled `boolean`: Configuration specific to read replica instances. Indicates whether replication is enabled or not.
  * denyMaintenancePeriods `array`: Deny maintenance periods
    * items [DenyMaintenancePeriod](#denymaintenanceperiod)
  * insightsConfig [InsightsConfig](#insightsconfig)
  * ipConfiguration [IpConfiguration](#ipconfiguration)
  * kind `string`: This is always *sql#settings*.
  * locationPreference [LocationPreference](#locationpreference)
  * maintenanceWindow [MaintenanceWindow](#maintenancewindow)
  * pricingPlan `string` (values: SQL_PRICING_PLAN_UNSPECIFIED, PACKAGE, PER_USE): The pricing plan for this instance. This can be either *PER_USE* or *PACKAGE*. Only *PER_USE* is supported for Second Generation instances.
  * replicationType `string` (values: SQL_REPLICATION_TYPE_UNSPECIFIED, SYNCHRONOUS, ASYNCHRONOUS): The type of replication this instance uses. This can be either *ASYNCHRONOUS* or *SYNCHRONOUS*. (Deprecated_ This property was only applicable to First Generation instances.
  * settingsVersion `string`: The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
  * storageAutoResize `boolean`: Configuration to increase storage size automatically. The default value is true.
  * storageAutoResizeLimit `string`: The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  * tier `string`: The tier (or machine type) for this instance, for example *db-n1-standard-1* (MySQL instances) or *db-custom-1-3840* (PostgreSQL instances).
  * userLabels `object`: User-provided labels, represented as a dictionary where each label is a single key value pair.

### SqlActiveDirectoryConfig
* SqlActiveDirectoryConfig `object`: Active Directory configuration, relevant only for Cloud SQL for SQL Server.
  * domain `string`: The name of the domain (e.g., mydomain.com).
  * kind `string`: This is always sql#activeDirectoryConfig.

### SqlExternalSyncSettingError
* SqlExternalSyncSettingError `object`: External primary instance migration setting error.
  * detail `string`: Additional information about the error encountered.
  * kind `string`: This is always *sql#migrationSettingError*.
  * type `string` (values: SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED, CONNECTION_FAILURE, BINLOG_NOT_ENABLED, INCOMPATIBLE_DATABASE_VERSION, REPLICA_ALREADY_SETUP, INSUFFICIENT_PRIVILEGE, UNSUPPORTED_MIGRATION_TYPE, NO_PGLOGICAL_INSTALLED, PGLOGICAL_NODE_ALREADY_EXISTS, INVALID_WAL_LEVEL, INVALID_SHARED_PRELOAD_LIBRARY, INSUFFICIENT_MAX_REPLICATION_SLOTS, INSUFFICIENT_MAX_WAL_SENDERS, INSUFFICIENT_MAX_WORKER_PROCESSES, UNSUPPORTED_EXTENSIONS, INVALID_RDS_LOGICAL_REPLICATION, INVALID_LOGGING_SETUP, INVALID_DB_PARAM, UNSUPPORTED_GTID_MODE, SQLSERVER_AGENT_NOT_RUNNING, UNSUPPORTED_TABLE_DEFINITION, UNSUPPORTED_DEFINER): Identifies the specific error that occurred.

### SqlInstancesRescheduleMaintenanceRequestBody
* SqlInstancesRescheduleMaintenanceRequestBody `object`: Reschedule options for maintenance windows.
  * reschedule [Reschedule](#reschedule)

### SqlInstancesVerifyExternalSyncSettingsResponse
* SqlInstancesVerifyExternalSyncSettingsResponse `object`: Instance verify external sync settings response.
  * errors `array`: List of migration violations.
    * items [SqlExternalSyncSettingError](#sqlexternalsyncsettingerror)
  * kind `string`: This is always *sql#migrationSettingErrorList*.

### SqlScheduledMaintenance
* SqlScheduledMaintenance `object`: Any scheduled maintenancce for this instance.
  * canDefer `boolean`
  * canReschedule `boolean`: If the scheduled maintenance can be rescheduled.
  * startTime `string`: The start time of any upcoming scheduled maintenance for this instance.

### SqlServerDatabaseDetails
* SqlServerDatabaseDetails `object`: Represents a Sql Server database on the Cloud SQL instance.
  * compatibilityLevel `integer`: The version of SQL Server with which the database is to be made compatible
  * recoveryModel `string`: The recovery model of a SQL Server database

### SqlServerUserDetails
* SqlServerUserDetails `object`: Represents a Sql Server user on the Cloud SQL instance.
  * disabled `boolean`: If the user has been disabled
  * serverRoles `array`: The server roles for this user
    * items `string`

### SslCert
* SslCert `object`: SslCerts Resource
  * cert `string`: PEM representation.
  * certSerialNumber `string`: Serial number, as extracted from the certificate.
  * commonName `string`: User supplied name. Constrained to [a-zA-Z.-_ ]+.
  * createTime `string`: The time when the certificate was created in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*
  * expirationTime `string`: The time when the certificate expires in RFC 3339 format, for example *2012-11-15T16:19:00.094Z*.
  * instance `string`: Name of the database instance.
  * kind `string`: This is always *sql#sslCert*.
  * selfLink `string`: The URI of this resource.
  * sha1Fingerprint `string`: Sha1 Fingerprint.

### SslCertDetail
* SslCertDetail `object`: SslCertDetail.
  * certInfo [SslCert](#sslcert)
  * certPrivateKey `string`: The private key for the client cert, in pem format. Keep private in order to protect your security.

### SslCertsCreateEphemeralRequest
* SslCertsCreateEphemeralRequest `object`: SslCerts create ephemeral certificate request.
  * public_key `string`: PEM encoded public key to include in the signed certificate.

### SslCertsInsertRequest
* SslCertsInsertRequest `object`: SslCerts insert request.
  * commonName `string`: User supplied name. Must be a distinct name from the other certificates for this instance.

### SslCertsInsertResponse
* SslCertsInsertResponse `object`: SslCert insert response.
  * clientCert [SslCertDetail](#sslcertdetail)
  * kind `string`: This is always *sql#sslCertsInsert*.
  * operation [Operation](#operation)
  * serverCaCert [SslCert](#sslcert)

### SslCertsListResponse
* SslCertsListResponse `object`: SslCerts list response.
  * items `array`: List of client certificates for the instance.
    * items [SslCert](#sslcert)
  * kind `string`: This is always *sql#sslCertsList*.

### Tier
* Tier `object`: A Google Cloud SQL service tier resource.
  * DiskQuota `string`: The maximum disk size of this tier in bytes.
  * RAM `string`: The maximum RAM usage of this tier in bytes.
  * kind `string`: This is always *sql#tier*.
  * region `array`: The applicable regions for this tier.
    * items `string`
  * tier `string`: An identifier for the machine type, for example, db-n1-standard-1. For related information, see Pricing.

### TiersListResponse
* TiersListResponse `object`: Tiers list response.
  * items `array`: List of tiers.
    * items [Tier](#tier)
  * kind `string`: This is always *sql#tiersList*.

### TruncateLogContext
* TruncateLogContext `object`: Database Instance truncate log context.
  * kind `string`: This is always *sql#truncateLogContext*.
  * logType `string`: The type of log to truncate. Valid values are *MYSQL_GENERAL_TABLE* and *MYSQL_SLOW_TABLE*.

### User
* User `object`: A Cloud SQL user resource.
  * host `string`: The host name from which the user can connect. For *insert* operations, host defaults to an empty string. For *update* operations, host is specified as part of the request URL. The host name cannot be updated after insertion.
  * etag `string`: This field is deprecated and will be removed from a future version of the API.
  * instance `string`: The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* since it is already specified on the URL.
  * kind `string`: This is always *sql#user*.
  * name `string`: The name of the user in the Cloud SQL instance. Can be omitted for *update* since it is already specified in the URL.
  * password `string`: The password for the user.
  * project `string`: The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* since it is already specified on the URL.
  * sqlserverUserDetails [SqlServerUserDetails](#sqlserveruserdetails)
  * type `string` (values: BUILT_IN, CLOUD_IAM_USER, CLOUD_IAM_SERVICE_ACCOUNT): The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.

### UsersListResponse
* UsersListResponse `object`: User list response.
  * items `array`: List of user resources in the instance.
    * items [User](#user)
  * kind `string`: This is always *sql#usersList*.
  * nextPageToken `string`: An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.


