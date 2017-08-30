# @datafire/google_sqladmin

Client library for Cloud SQL Administration

## Installation and Usage
```bash
npm install --save datafire @datafire/google_sqladmin
```

```js
let datafire = require('datafire');
let google_sqladmin = require('@datafire/google_sqladmin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_sqladmin.flags.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_sqladmin.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### flags.list
List all available database flags for Google Cloud SQL instances.


```js
google_sqladmin.flags.list({}, context)
```

#### Parameters
* databaseVersion (string) - Database version for flag retrieval. Flags are specific to the database version.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.list
Lists instances under a given project in the alphabetical order of the instance name.


```js
google_sqladmin.instances.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project for which to list Cloud SQL instances.
* filter (string) - A filter expression for filtering listed instances.
* maxResults (integer) - The maximum number of results to return per response.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.insert
Creates a new Cloud SQL instance.


```js
google_sqladmin.instances.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project to which the newly created Cloud SQL instances should belong.
* body (object) - A Cloud SQL instance resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.delete
Deletes a Cloud SQL instance.


```js
google_sqladmin.instances.delete({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance to be deleted.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.get
Retrieves a resource containing information about a Cloud SQL instance.


```js
google_sqladmin.instances.get({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.patch
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.


```js
google_sqladmin.instances.patch({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - A Cloud SQL instance resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.update
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.


```js
google_sqladmin.instances.update({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - A Cloud SQL instance resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backupRuns.list
Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.


```js
google_sqladmin.backupRuns.list({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* maxResults (integer) - Maximum number of backup runs per response.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backupRuns.insert
Creates a new backup run on demand. This method is applicable only to Second Generation instances.


```js
google_sqladmin.backupRuns.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - A database instance backup run resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backupRuns.delete
Deletes the backup taken by a backup run.


```js
google_sqladmin.backupRuns.delete({
  "project": "",
  "instance": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* id (string) **required** - The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### backupRuns.get
Retrieves a resource containing information about a backup run.


```js
google_sqladmin.backupRuns.get({
  "project": "",
  "instance": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* id (string) **required** - The ID of this Backup Run.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.clone
Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.


```js
google_sqladmin.instances.clone({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the source as well as the clone Cloud SQL instance.
* instance (string) **required** - The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
* body (object) - Database instance clone request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCerts.createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.


```js
google_sqladmin.sslCerts.createEphemeral({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the Cloud SQL project.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - SslCerts create ephemeral certificate request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.list
Lists databases in the specified Cloud SQL instance.


```js
google_sqladmin.databases.list({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project for which to list Cloud SQL instances.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.insert
Inserts a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* body (object) - A database resource inside a Cloud SQL instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.delete
Deletes a database from a Cloud SQL instance.


```js
google_sqladmin.databases.delete({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* database (string) **required** - Name of the database to be deleted in the instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.get
Retrieves a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.get({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* database (string) **required** - Name of the database in the instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.patch
Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.


```js
google_sqladmin.databases.patch({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* database (string) **required** - Name of the database to be updated in the instance.
* body (object) - A database resource inside a Cloud SQL instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### databases.update
Updates a resource containing information about a database inside a Cloud SQL instance.


```js
google_sqladmin.databases.update({
  "project": "",
  "instance": "",
  "database": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* database (string) **required** - Name of the database to be updated in the instance.
* body (object) - A database resource inside a Cloud SQL instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.export
Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.


```js
google_sqladmin.instances.export({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance to be exported.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - Database instance export request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.failover
Failover the instance to its failover replica instance.


```js
google_sqladmin.instances.failover({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - ID of the project that contains the read replica.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - Instance failover request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.import
Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.


```js
google_sqladmin.instances.import({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - Database instance import request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.promoteReplica
Promotes the read replica instance to be a stand-alone Cloud SQL instance.


```js
google_sqladmin.instances.promoteReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - ID of the project that contains the read replica.
* instance (string) **required** - Cloud SQL read replica instance name.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.


```js
google_sqladmin.instances.resetSslConfig({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.restart
Restarts a Cloud SQL instance.


```js
google_sqladmin.instances.restart({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance to be restarted.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.restoreBackup
Restores a backup of a Cloud SQL instance.


```js
google_sqladmin.instances.restoreBackup({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - Database instance restore backup request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCerts.list
Lists all of the current SSL certificates for the instance.


```js
google_sqladmin.sslCerts.list({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project for which to list Cloud SQL instances.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCerts.insert
Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.


```js
google_sqladmin.sslCerts.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project to which the newly created Cloud SQL instances should belong.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - SslCerts insert request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCerts.delete
Deletes the SSL certificate. The change will not take effect until the instance is restarted.


```js
google_sqladmin.sslCerts.delete({
  "project": "",
  "instance": "",
  "sha1Fingerprint": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance to be deleted.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* sha1Fingerprint (string) **required** - Sha1 FingerPrint.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sslCerts.get
Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.


```js
google_sqladmin.sslCerts.get({
  "project": "",
  "instance": "",
  "sha1Fingerprint": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* sha1Fingerprint (string) **required** - Sha1 FingerPrint.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.startReplica
Starts the replication in the read replica instance.


```js
google_sqladmin.instances.startReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - ID of the project that contains the read replica.
* instance (string) **required** - Cloud SQL read replica instance name.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.stopReplica
Stops the replication in the read replica instance.


```js
google_sqladmin.instances.stopReplica({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - ID of the project that contains the read replica.
* instance (string) **required** - Cloud SQL read replica instance name.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instances.truncateLog
Truncate MySQL general and slow query log tables


```js
google_sqladmin.instances.truncateLog({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the Cloud SQL project.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* body (object) - Instance truncate log request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.delete
Deletes a user from a Cloud SQL instance.


```js
google_sqladmin.users.delete({
  "project": "",
  "instance": "",
  "host": "",
  "name": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* host (string) **required** - Host of the user in the instance.
* name (string) **required** - Name of the user in the instance.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.list
Lists users in the specified Cloud SQL instance.


```js
google_sqladmin.users.list({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.insert
Creates a new user in a Cloud SQL instance.


```js
google_sqladmin.users.insert({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* body (object) - A Cloud SQL user resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### users.update
Updates an existing user in a Cloud SQL instance.


```js
google_sqladmin.users.update({
  "project": "",
  "instance": "",
  "host": "",
  "name": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Database instance ID. This does not include the project ID.
* host (string) **required** - Host of the user in the instance.
* name (string) **required** - Name of the user in the instance.
* body (object) - A Cloud SQL user resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operations.list
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.


```js
google_sqladmin.operations.list({
  "project": "",
  "instance": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* instance (string) **required** - Cloud SQL instance ID. This does not include the project ID.
* maxResults (integer) - Maximum number of operations per response.
* pageToken (string) - A previously-returned page token representing part of the larger set of results to view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operations.get
Retrieves an instance operation that has been performed on an instance.


```js
google_sqladmin.operations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project that contains the instance.
* operation (string) **required** - Instance operation ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tiers.list
Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.


```js
google_sqladmin.tiers.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - Project ID of the project for which to list tiers.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

