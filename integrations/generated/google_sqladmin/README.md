# @datafire/google_sqladmin

Client library for Cloud SQL Administration

## Installation and Usage
```bash
npm install --save @datafire/google_sqladmin
```
```js
let google_sqladmin = require('@datafire/google_sqladmin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_sqladmin.flags.list({}).then(data => {
  console.log(data);
});
```

## Description

Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sqladmin.oauthCallback({
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
google_sqladmin.oauthRefresh(null, context)
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

### flags.list
List all available database flags for Google Cloud SQL instances.


```js
google_sqladmin.flags.list({}, context)
```

#### Input
* input `object`
  * databaseVersion `string`: Database version for flag retrieval. Flags are specific to the database version.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FlagsListResponse](#flagslistresponse)

### instances.list
Lists instances under a given project in the alphabetical order of the instance name.


```js
google_sqladmin.instances.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: An expression for filtering the results of the request, such as by name or label.
  * maxResults `integer`: The maximum number of results to return per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * project **required** `string`: Project ID of the project for which to list Cloud SQL instances.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstancesListResponse](#instanceslistresponse)

### instances.insert
Creates a new Cloud SQL instance.


```js
google_sqladmin.instances.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DatabaseInstance](#databaseinstance)
  * project **required** `string`: Project ID of the project to which the newly created Cloud SQL instances should belong.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.delete
Deletes a Cloud SQL instance.


```js
google_sqladmin.instances.delete({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance to be deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.get
Retrieves a resource containing information about a Cloud SQL instance.


```js
google_sqladmin.instances.get({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatabaseInstance](#databaseinstance)

### instances.patch
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.


```js
google_sqladmin.instances.patch({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DatabaseInstance](#databaseinstance)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.update
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.


```js
google_sqladmin.instances.update({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [DatabaseInstance](#databaseinstance)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backupRuns.list
Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.


```js
google_sqladmin.backupRuns.list({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * maxResults `integer`: Maximum number of backup runs per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackupRunsListResponse](#backuprunslistresponse)

### backupRuns.insert
Creates a new backup run on demand. This method is applicable only to Second Generation instances.


```js
google_sqladmin.backupRuns.insert({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [BackupRun](#backuprun)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backupRuns.delete
Deletes the backup taken by a backup run.


```js
google_sqladmin.backupRuns.delete({
  "id": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### backupRuns.get
Retrieves a resource containing information about a backup run.


```js
google_sqladmin.backupRuns.get({
  "id": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of this Backup Run.
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BackupRun](#backuprun)

### instances.clone
Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.


```js
google_sqladmin.instances.clone({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesCloneRequest](#instancesclonerequest)
  * instance **required** `string`: The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
  * project **required** `string`: Project ID of the source as well as the clone Cloud SQL instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### sslCerts.createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.


```js
google_sqladmin.sslCerts.createEphemeral({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [SslCertsCreateEphemeralRequest](#sslcertscreateephemeralrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the Cloud SQL project.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCert](#sslcert)

### databases.list
Lists databases in the specified Cloud SQL instance.


```js
google_sqladmin.databases.list({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project for which to list Cloud SQL instances.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatabasesListResponse](#databaseslistresponse)

### databases.insert
Inserts a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.insert({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Database](#database)
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### databases.delete
Deletes a database from a Cloud SQL instance.


```js
google_sqladmin.databases.delete({
  "database": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Name of the database to be deleted in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### databases.get
Retrieves a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.get({
  "database": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Name of the database in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Database](#database)

### databases.patch
Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.


```js
google_sqladmin.databases.patch({
  "database": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Database](#database)
  * database **required** `string`: Name of the database to be updated in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### databases.update
Updates a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.update({
  "database": "",
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [Database](#database)
  * database **required** `string`: Name of the database to be updated in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.demoteMaster
Reserved for future use.


```js
google_sqladmin.instances.demoteMaster({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesDemoteMasterRequest](#instancesdemotemasterrequest)
  * instance **required** `string`: Cloud SQL instance name.
  * project **required** `string`: ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.export
Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.


```js
google_sqladmin.instances.export({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesExportRequest](#instancesexportrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance to be exported.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.failover
Failover the instance to its failover replica instance.


```js
google_sqladmin.instances.failover({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesFailoverRequest](#instancesfailoverrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: ID of the project that contains the read replica.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.import
Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.


```js
google_sqladmin.instances.import({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesImportRequest](#instancesimportrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.promoteReplica
Promotes the read replica instance to be a stand-alone Cloud SQL instance.


```js
google_sqladmin.instances.promoteReplica({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL read replica instance name.
  * project **required** `string`: ID of the project that contains the read replica.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.


```js
google_sqladmin.instances.resetSslConfig({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.restart
Restarts a Cloud SQL instance.


```js
google_sqladmin.instances.restart({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance to be restarted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.restoreBackup
Restores a backup of a Cloud SQL instance.


```js
google_sqladmin.instances.restoreBackup({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesRestoreBackupRequest](#instancesrestorebackuprequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### sslCerts.list
Lists all of the current SSL certificates for the instance.


```js
google_sqladmin.sslCerts.list({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project for which to list Cloud SQL instances.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCertsListResponse](#sslcertslistresponse)

### sslCerts.insert
Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.


```js
google_sqladmin.sslCerts.insert({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [SslCertsInsertRequest](#sslcertsinsertrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project to which the newly created Cloud SQL instances should belong.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCertsInsertResponse](#sslcertsinsertresponse)

### sslCerts.delete
Deletes the SSL certificate. The change will not take effect until the instance is restarted.


```js
google_sqladmin.sslCerts.delete({
  "instance": "",
  "project": "",
  "sha1Fingerprint": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance to be deleted.
  * sha1Fingerprint **required** `string`: Sha1 FingerPrint.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### sslCerts.get
Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.


```js
google_sqladmin.sslCerts.get({
  "instance": "",
  "project": "",
  "sha1Fingerprint": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * sha1Fingerprint **required** `string`: Sha1 FingerPrint.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SslCert](#sslcert)

### instances.startReplica
Starts the replication in the read replica instance.


```js
google_sqladmin.instances.startReplica({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL read replica instance name.
  * project **required** `string`: ID of the project that contains the read replica.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.stopReplica
Stops the replication in the read replica instance.


```js
google_sqladmin.instances.stopReplica({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL read replica instance name.
  * project **required** `string`: ID of the project that contains the read replica.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instances.truncateLog
Truncate MySQL general and slow query log tables


```js
google_sqladmin.instances.truncateLog({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [InstancesTruncateLogRequest](#instancestruncatelogrequest)
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the Cloud SQL project.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.delete
Deletes a user from a Cloud SQL instance.


```js
google_sqladmin.users.delete({
  "host": "",
  "instance": "",
  "name": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * host **required** `string`: Host of the user in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * name **required** `string`: Name of the user in the instance.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.list
Lists users in the specified Cloud SQL instance.


```js
google_sqladmin.users.list({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UsersListResponse](#userslistresponse)

### users.insert
Creates a new user in a Cloud SQL instance.


```js
google_sqladmin.users.insert({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [User](#user)
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### users.update
Updates an existing user in a Cloud SQL instance.


```js
google_sqladmin.users.update({
  "host": "",
  "instance": "",
  "name": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body [User](#user)
  * host **required** `string`: Host of the user in the instance.
  * instance **required** `string`: Database instance ID. This does not include the project ID.
  * name **required** `string`: Name of the user in the instance.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### operations.list
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.


```js
google_sqladmin.operations.list({
  "instance": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: Cloud SQL instance ID. This does not include the project ID.
  * maxResults `integer`: Maximum number of operations per response.
  * pageToken `string`: A previously-returned page token representing part of the larger set of results to view.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationsListResponse](#operationslistresponse)

### operations.get
Retrieves an instance operation that has been performed on an instance.


```js
google_sqladmin.operations.get({
  "operation": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Instance operation ID.
  * project **required** `string`: Project ID of the project that contains the instance.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### tiers.list
Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.


```js
google_sqladmin.tiers.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID of the project for which to list tiers.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TiersListResponse](#tierslistresponse)



## Definitions

### AclEntry
* AclEntry `object`: An entry for an Access Control list.
  * expirationTime `string`: The time when this access control entry expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * kind `string`: This is always sql#aclEntry.
  * name `string`: An optional label to identify this entry.
  * value `string`: The whitelisted value for the access control list.

### BackupConfiguration
* BackupConfiguration `object`: Database instance backup configuration.
  * binaryLogEnabled `boolean`: Whether binary log is enabled. If backup configuration is disabled, binary log must be disabled as well.
  * enabled `boolean`: Whether this configuration is enabled.
  * kind `string`: This is always sql#backupConfiguration.
  * replicationLogArchivingEnabled `boolean`: Whether replication log archiving is enabled. Replication log archiving is required for the point-in-time recovery (PITR) feature. PostgreSQL instances only.
  * startTime `string`: Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM.

### BackupRun
* BackupRun `object`: A database instance backup run resource.
  * description `string`: The description of this run, only applicable to on-demand backups.
  * endTime `string`: The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * enqueuedTime `string`: The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * error [OperationError](#operationerror)
  * id `string`: A unique identifier for this backup run. Note that this is unique only within the scope of a particular Cloud SQL instance.
  * instance `string`: Name of the database instance.
  * kind `string`: This is always sql#backupRun.
  * selfLink `string`: The URI of this resource.
  * startTime `string`: The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * status `string`: The status of this run.
  * type `string`: The type of this run; can be either "AUTOMATED" or "ON_DEMAND".
  * windowStartTime `string`: The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.

### BackupRunsListResponse
* BackupRunsListResponse `object`: Backup run list results.
  * items `array`: A list of backup runs in reverse chronological order of the enqueued time.
    * items [BackupRun](#backuprun)
  * kind `string`: This is always sql#backupRunsList.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### BinLogCoordinates
* BinLogCoordinates `object`: Binary log coordinates.
  * binLogFileName `string`: Name of the binary log file for a Cloud SQL instance.
  * binLogPosition `string`: Position (offset) within the binary log file.
  * kind `string`: This is always sql#binLogCoordinates.

### CloneContext
* CloneContext `object`: Database instance clone context.
  * binLogCoordinates [BinLogCoordinates](#binlogcoordinates)
  * destinationInstanceName `string`: Name of the Cloud SQL instance to be created as a clone.
  * kind `string`: This is always sql#cloneContext.
  * pitrTimestampMs `string`: The epoch timestamp, in milliseconds, of the time to which a point-in-time recovery (PITR) is performed. PostgreSQL instances only. For MySQL instances, use the binLogCoordinates property.

### Database
* Database `object`: A database resource inside a Cloud SQL instance.
  * charset `string`: The MySQL charset value.
  * collation `string`: The MySQL collation value.
  * etag `string`: HTTP 1.1 Entity tag for the resource.
  * instance `string`: The name of the Cloud SQL instance. This does not include the project ID.
  * kind `string`: This is always sql#database.
  * name `string`: The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
  * project `string`: The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
  * selfLink `string`: The URI of this resource.

### DatabaseFlags
* DatabaseFlags `object`: MySQL flags for Cloud SQL instances.
  * name `string`: The name of the flag. These flags are passed at instance startup, so include both MySQL server options and MySQL system variables. Flags should be specified with underscores, not hyphens. For more information, see Configuring MySQL Flags in the Google Cloud SQL documentation, as well as the official MySQL documentation for server options and system variables.
  * value `string`: The value of the flag. Booleans should be set to on for true and off for false. This field must be omitted if the flag doesn't take a value.

### DatabaseInstance
* DatabaseInstance `object`: A Cloud SQL instance resource.
  * backendType `string`: FIRST_GEN: Basic Cloud SQL instance that runs in a Google-managed container.
  * connectionName `string`: Connection name of the Cloud SQL instance used in connection strings.
  * currentDiskSize `string`: The current disk usage of the instance in bytes. This property has been deprecated. Users should use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ for details.
  * databaseVersion `string`: The database engine type and version. The databaseVersion field can not be changed after instance creation. MySQL Second Generation instances: MYSQL_5_7 (default) or MYSQL_5_6. PostgreSQL instances: POSTGRES_9_6 MySQL First Generation instances: MYSQL_5_6 (default) or MYSQL_5_5
  * etag `string`: HTTP 1.1 Entity tag for the resource.
  * failoverReplica `object`: The name and status of the failover replica. This property is applicable only to Second Generation instances.
    * available `boolean`: The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The master can only failover to the falover replica when the status is true.
    * name `string`: The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID. This property is applicable only to Second Generation instances.
  * gceZone `string`: The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone.
  * instanceType `string`: The instance type. This can be one of the following.
  * ipAddresses `array`: The assigned IP addresses for the instance.
    * items [IpMapping](#ipmapping)
  * ipv6Address `string`: The IPv6 address assigned to the instance. This property is applicable only to First Generation instances.
  * kind `string`: This is always sql#instance.
  * masterInstanceName `string`: The name of the instance which will act as master in the replication setup.
  * maxDiskSize `string`: The maximum disk size of the instance in bytes.
  * name `string`: Name of the Cloud SQL instance. This does not include the project ID.
  * onPremisesConfiguration [OnPremisesConfiguration](#onpremisesconfiguration)
  * project `string`: The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
  * region `string`: The geographical region. Can be us-central (FIRST_GEN instances only), us-central1 (SECOND_GEN instances only), asia-east1 or europe-west1. Defaults to us-central or us-central1 depending on the instance type (First Generation or Second Generation). The region can not be changed after instance creation.
  * replicaConfiguration [ReplicaConfiguration](#replicaconfiguration)
  * replicaNames `array`: The replicas of the instance.
    * items `string`
  * selfLink `string`: The URI of this resource.
  * serverCaCert [SslCert](#sslcert)
  * serviceAccountEmailAddress `string`: The service account email address assigned to the instance. This property is applicable only to Second Generation instances.
  * settings [Settings](#settings)
  * state `string`: The current serving state of the Cloud SQL instance. This can be one of the following.
  * suspensionReason `array`: If the instance state is SUSPENDED, the reason for the suspension.
    * items `string`

### DatabasesListResponse
* DatabasesListResponse `object`: Database list response.
  * items `array`: List of database resources in the instance.
    * items [Database](#database)
  * kind `string`: This is always sql#databasesList.

### DemoteMasterConfiguration
* DemoteMasterConfiguration `object`: Read-replica configuration for connecting to the on-premises master.
  * kind `string`: This is always sql#demoteMasterConfiguration.
  * mysqlReplicaConfiguration [DemoteMasterMySqlReplicaConfiguration](#demotemastermysqlreplicaconfiguration)

### DemoteMasterContext
* DemoteMasterContext `object`: Database instance demote master context.
  * kind `string`: This is always sql#demoteMasterContext.
  * masterInstanceName `string`: The name of the instance which will act as on-premises master in the replication setup.
  * replicaConfiguration [DemoteMasterConfiguration](#demotemasterconfiguration)

### DemoteMasterMySqlReplicaConfiguration
* DemoteMasterMySqlReplicaConfiguration `object`: Read-replica configuration specific to MySQL databases.
  * caCertificate `string`: PEM representation of the trusted CA's x509 certificate.
  * clientCertificate `string`: PEM representation of the slave's x509 certificate.
  * clientKey `string`: PEM representation of the slave's private key. The corresponsing public key is encoded in the client's certificate. The format of the slave's private key can be either PKCS #1 or PKCS #8.
  * kind `string`: This is always sql#demoteMasterMysqlReplicaConfiguration.
  * password `string`: The password for the replication connection.
  * username `string`: The username for the replication connection.

### ExportContext
* ExportContext `object`: Database instance export context.
  * csvExportOptions `object`: Options for exporting data as CSV.
    * selectQuery `string`: The select query used to extract the data.
  * databases `array`: Databases (for example, guestbook) from which the export is made. If fileType is SQL and no database is specified, all databases are exported. If fileType is CSV, you can optionally specify at most one database to export. If csvExportOptions.selectQuery also specifies the database, this field will be ignored.
    * items `string`
  * fileType `string`: The file type for the specified uri.
  * kind `string`: This is always sql#exportContext.
  * sqlExportOptions `object`: Options for exporting data as SQL statements.
    * schemaOnly `boolean`: Export only schemas.
    * tables `array`: Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database.
      * items `string`
  * uri `string`: The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the requests succeeds, but the operation fails. If fileType is SQL and the filename ends with .gz, the contents are compressed.

### FailoverContext
* FailoverContext `object`: Database instance failover context.
  * kind `string`: This is always sql#failoverContext.
  * settingsVersion `string`: The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.

### Flag
* Flag `object`: A Google Cloud SQL service flag resource.
  * allowedStringValues `array`: For STRING flags, a list of strings that the value can be set to.
    * items `string`
  * appliesTo `array`: The database version this flag applies to. Can be MYSQL_5_5, MYSQL_5_6, or MYSQL_5_7. MYSQL_5_7 is applicable only to Second Generation instances.
    * items `string`
  * kind `string`: This is always sql#flag.
  * maxValue `string`: For INTEGER flags, the maximum allowed value.
  * minValue `string`: For INTEGER flags, the minimum allowed value.
  * name `string`: This is the name of the flag. Flag names always use underscores, not hyphens, e.g. max_allowed_packet
  * requiresRestart `boolean`: Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
  * type `string`: The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER or NONE. NONE is used for flags which do not take a value, such as skip_grant_tables.

### FlagsListResponse
* FlagsListResponse `object`: Flags list response.
  * items `array`: List of flags.
    * items [Flag](#flag)
  * kind `string`: This is always sql#flagsList.

### ImportContext
* ImportContext `object`: Database instance import context.
  * csvImportOptions `object`: Options for importing data as CSV.
    * columns `array`: The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.
      * items `string`
    * table `string`: The table to which CSV data is imported.
  * database `string`: The database (for example, guestbook) to which the import is made. If fileType is SQL and no database is specified, it is assumed that the database is specified in the file to be imported. If fileType is CSV, it must be specified.
  * fileType `string`: The file type for the specified uri.
  * importUser `string`: The PostgreSQL user for this import operation. Defaults to cloudsqlsuperuser. Used only for PostgreSQL instances.
  * kind `string`: This is always sql#importContext.
  * uri `string`: A path to the file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are supported when fileType is SQL.

### InstancesCloneRequest
* InstancesCloneRequest `object`: Database instance clone request.
  * cloneContext [CloneContext](#clonecontext)

### InstancesDemoteMasterRequest
* InstancesDemoteMasterRequest `object`: Database demote master request.
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
  * kind `string`: This is always sql#instancesList.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### InstancesRestoreBackupRequest
* InstancesRestoreBackupRequest `object`: Database instance restore backup request.
  * restoreBackupContext [RestoreBackupContext](#restorebackupcontext)

### InstancesTruncateLogRequest
* InstancesTruncateLogRequest `object`: Instance truncate log request.
  * truncateLogContext [TruncateLogContext](#truncatelogcontext)

### IpConfiguration
* IpConfiguration `object`: IP Management configuration.
  * authorizedNetworks `array`: The list of external networks that are allowed to connect to the instance using the IP. In CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).
    * items [AclEntry](#aclentry)
  * ipv4Enabled `boolean`: Whether the instance should be assigned an IP address or not.
  * requireSsl `boolean`: Whether SSL connections over IP should be enforced or not.

### IpMapping
* IpMapping `object`: Database instance IP Mapping.
  * ipAddress `string`: The IP address assigned.
  * timeToRetire `string`: The due time for this IP to be retired in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. This field is only available when the IP is scheduled to be retired.
  * type `string`: The type of this IP address. A PRIMARY address is an address that can accept incoming connections. An OUTGOING address is the source address of connections originating from the instance, if supported.

### LocationPreference
* LocationPreference `object`: Preferred location. This specifies where a Cloud SQL instance should preferably be located, either in a specific Compute Engine zone, or co-located with an App Engine application. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
  * followGaeApplication `string`: The AppEngine application to follow, it must be in the same region as the Cloud SQL instance.
  * kind `string`: This is always sql#locationPreference.
  * zone `string`: The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b, etc.).

### MaintenanceWindow
* MaintenanceWindow `object`: Maintenance window. This specifies when a v2 Cloud SQL instance should preferably be restarted for system maintenance puruposes.
  * day `integer`: day of week (1-7), starting on Monday.
  * hour `integer`: hour of day - 0 to 23.
  * kind `string`: This is always sql#maintenanceWindow.
  * updateTrack `string`: Maintenance timing setting: canary (Earlier) or stable (Later).

### MySqlReplicaConfiguration
* MySqlReplicaConfiguration `object`: Read-replica configuration specific to MySQL databases.
  * caCertificate `string`: PEM representation of the trusted CA's x509 certificate.
  * clientCertificate `string`: PEM representation of the slave's x509 certificate.
  * clientKey `string`: PEM representation of the slave's private key. The corresponsing public key is encoded in the client's certificate.
  * connectRetryInterval `integer`: Seconds to wait between connect retries. MySQL's default is 60 seconds.
  * dumpFilePath `string`: Path to a SQL dump file in Google Cloud Storage from which the slave instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps should have the binlog co-ordinates from which replication should begin. This can be accomplished by setting --master-data to 1 when using mysqldump.
  * kind `string`: This is always sql#mysqlReplicaConfiguration.
  * masterHeartbeatPeriod `string`: Interval in milliseconds between replication heartbeats.
  * password `string`: The password for the replication connection.
  * sslCipher `string`: A list of permissible ciphers to use for SSL encryption.
  * username `string`: The username for the replication connection.
  * verifyServerCertificate `boolean`: Whether or not to check the master's Common Name value in the certificate that it sends during the SSL handshake.

### OnPremisesConfiguration
* OnPremisesConfiguration `object`: On-premises instance configuration.
  * hostPort `string`: The host and port of the on-premises instance in host:port format
  * kind `string`: This is always sql#onPremisesConfiguration.

### Operation
* Operation `object`: An Operations resource contains information about database instance operations such as create, delete, and restart. Operations resources are created in response to operations that were initiated; you never create them directly.
  * endTime `string`: The time this operation finished in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * error [OperationErrors](#operationerrors)
  * exportContext [ExportContext](#exportcontext)
  * importContext [ImportContext](#importcontext)
  * insertTime `string`: The time this operation was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * kind `string`: This is always sql#operation.
  * name `string`: An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
  * operationType `string`: The type of the operation. Valid values are CREATE, DELETE, UPDATE, RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME, CREATE_USER, DELETE_USER, CREATE_DATABASE, DELETE_DATABASE .
  * selfLink `string`: The URI of this resource.
  * startTime `string`: The time this operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * status `string`: The status of an operation. Valid values are PENDING, RUNNING, DONE, UNKNOWN.
  * targetId `string`: Name of the database instance related to this operation.
  * targetLink `string`
  * targetProject `string`: The project ID of the target instance related to this operation.
  * user `string`: The email address of the user who initiated this operation.

### OperationError
* OperationError `object`: Database instance operation error.
  * code `string`: Identifies the specific error that occurred.
  * kind `string`: This is always sql#operationError.
  * message `string`: Additional information about the error encountered.

### OperationErrors
* OperationErrors `object`: Database instance operation errors list wrapper.
  * errors `array`: The list of errors encountered while processing this operation.
    * items [OperationError](#operationerror)
  * kind `string`: This is always sql#operationErrors.

### OperationsListResponse
* OperationsListResponse `object`: Database instance list operations response.
  * items `array`: List of operation resources.
    * items [Operation](#operation)
  * kind `string`: This is always sql#operationsList.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.

### ReplicaConfiguration
* ReplicaConfiguration `object`: Read-replica configuration for connecting to the master.
  * failoverTarget `boolean`: Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. In case the master instance fails, the replica instance will be promoted as the new master instance.
  * kind `string`: This is always sql#replicaConfiguration.
  * mysqlReplicaConfiguration [MySqlReplicaConfiguration](#mysqlreplicaconfiguration)

### RestoreBackupContext
* RestoreBackupContext `object`: Database instance restore from backup context.
  * backupRunId `string`: The ID of the backup run to restore from.
  * instanceId `string`: The ID of the instance that the backup was taken from.
  * kind `string`: This is always sql#restoreBackupContext.

### Settings
* Settings `object`: Database instance settings.
  * activationPolicy `string`: The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values:
  * authorizedGaeApplications `array`: The App Engine app IDs that can access this instance. This property is only applicable to First Generation instances.
    * items `string`
  * availabilityType `string`: Availability type (PostgreSQL instances only). Potential values:
  * backupConfiguration [BackupConfiguration](#backupconfiguration)
  * crashSafeReplicationEnabled `boolean`: Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property is only applicable to First Generation instances.
  * dataDiskSizeGb `string`: The size of data disk, in GB. The data disk size minimum is 10GB. Applies only to Second Generation instances.
  * dataDiskType `string`: The type of data disk. Only supported for Second Generation instances. The default type is PD_SSD. Applies only to Second Generation instances.
  * databaseFlags `array`: The database flags passed to the instance at startup.
    * items [DatabaseFlags](#databaseflags)
  * databaseReplicationEnabled `boolean`: Configuration specific to read replica instances. Indicates whether replication is enabled or not.
  * ipConfiguration [IpConfiguration](#ipconfiguration)
  * kind `string`: This is always sql#settings.
  * locationPreference [LocationPreference](#locationpreference)
  * maintenanceWindow [MaintenanceWindow](#maintenancewindow)
  * pricingPlan `string`: The pricing plan for this instance. This can be either PER_USE or PACKAGE. Only PER_USE is supported for Second Generation instances.
  * replicationType `string`: The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS. This property is only applicable to First Generation instances.
  * settingsVersion `string`: The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
  * storageAutoResize `boolean`: Configuration to increase storage size automatically. The default value is true. Applies only to Second Generation instances.
  * storageAutoResizeLimit `string`: The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. Applies only to Second Generation instances.
  * tier `string`: The tier of service for this instance, for example D1, D2. For more information, see pricing.
  * userLabels `object`: User-provided labels, represented as a dictionary where each label is a single key value pair.

### SslCert
* SslCert `object`: SslCerts Resource
  * cert `string`: PEM representation.
  * certSerialNumber `string`: Serial number, as extracted from the certificate.
  * commonName `string`: User supplied name. Constrained to [a-zA-Z.-_ ]+.
  * createTime `string`: The time when the certificate was created in RFC 3339 format, for example 2012-11-15T16:19:00.094Z
  * expirationTime `string`: The time when the certificate expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
  * instance `string`: Name of the database instance.
  * kind `string`: This is always sql#sslCert.
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
  * commonName `string`: User supplied name. Must be a distinct name from the other certificates for this instance. New certificates will not be usable until the instance is restarted.

### SslCertsInsertResponse
* SslCertsInsertResponse `object`: SslCert insert response.
  * clientCert [SslCertDetail](#sslcertdetail)
  * kind `string`: This is always sql#sslCertsInsert.
  * operation [Operation](#operation)
  * serverCaCert [SslCert](#sslcert)

### SslCertsListResponse
* SslCertsListResponse `object`: SslCerts list response.
  * items `array`: List of client certificates for the instance.
    * items [SslCert](#sslcert)
  * kind `string`: This is always sql#sslCertsList.

### Tier
* Tier `object`: A Google Cloud SQL service tier resource.
  * DiskQuota `string`: The maximum disk size of this tier in bytes.
  * RAM `string`: The maximum RAM usage of this tier in bytes.
  * kind `string`: This is always sql#tier.
  * region `array`: The applicable regions for this tier.
    * items `string`
  * tier `string`: An identifier for the service tier, for example D1, D2 etc. For related information, see Pricing.

### TiersListResponse
* TiersListResponse `object`: Tiers list response.
  * items `array`: List of tiers.
    * items [Tier](#tier)
  * kind `string`: This is always sql#tiersList.

### TruncateLogContext
* TruncateLogContext `object`: Database Instance truncate log context.
  * kind `string`: This is always sql#truncateLogContext.
  * logType `string`: The type of log to truncate. Valid values are MYSQL_GENERAL_TABLE and MYSQL_SLOW_TABLE.

### User
* User `object`: A Cloud SQL user resource.
  * etag `string`: HTTP 1.1 Entity tag for the resource.
  * host `string`: The host name from which the user can connect. For insert operations, host defaults to an empty string. For update operations, host is specified as part of the request URL. The host name cannot be updated after insertion.
  * instance `string`: The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for update since it is already specified on the URL.
  * kind `string`: This is always sql#user.
  * name `string`: The name of the user in the Cloud SQL instance. Can be omitted for update since it is already specified on the URL.
  * password `string`: The password for the user.
  * project `string`: The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for update since it is already specified on the URL.

### UsersListResponse
* UsersListResponse `object`: User list response.
  * items `array`: List of user resources in the instance.
    * items [User](#user)
  * kind `string`: This is always sql#usersList.
  * nextPageToken `string`: An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.


