# @datafire/google_sqladmin
Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: flags.list
List all available database flags for Google Cloud SQL instances.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "databaseVersion": {
      "type": "string",
      "description": "Database version for flag retrieval. Flags are specific to the database version."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FlagsListResponse"
}
```
## Operation: instances.list
Lists instances under a given project in the alphabetical order of the instance name.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project for which to list Cloud SQL instances."
    },
    "filter": {
      "type": "string",
      "description": "A filter expression for filtering listed instances."
    },
    "maxResults": {
      "type": "integer",
      "description": "The maximum number of results to return per response."
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InstancesListResponse"
}
```
## Operation: instances.insert
Creates a new Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project to which the newly created Cloud SQL instances should belong."
    },
    "body": {
      "$ref": "#/definitions/DatabaseInstance"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.delete
Deletes a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance to be deleted."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.get
Retrieves a resource containing information about a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseInstance"
}
```
## Operation: instances.patch
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/DatabaseInstance"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.update
Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/DatabaseInstance"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: backupRuns.list
Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of backup runs per response."
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRunsListResponse"
}
```
## Operation: backupRuns.insert
Creates a new backup run on demand. This method is applicable only to Second Generation instances.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/BackupRun"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: backupRuns.delete
Deletes the backup taken by a backup run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "id": {
      "type": "string",
      "description": "The ID of the Backup Run to delete. To find a Backup Run ID, use the list method."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: backupRuns.get
Retrieves a resource containing information about a backup run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "id": {
      "type": "string",
      "description": "The ID of this Backup Run."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BackupRun"
}
```
## Operation: instances.clone
Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the source as well as the clone Cloud SQL instance."
    },
    "instance": {
      "type": "string",
      "description": "The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesCloneRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: sslCerts.createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the Cloud SQL project."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/SslCertsCreateEphemeralRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SslCert"
}
```
## Operation: databases.list
Lists databases in the specified Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project for which to list Cloud SQL instances."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabasesListResponse"
}
```
## Operation: databases.insert
Inserts a resource containing information about a database inside a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/Database"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: databases.delete
Deletes a database from a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "database": {
      "type": "string",
      "description": "Name of the database to be deleted in the instance."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "database"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: databases.get
Retrieves a resource containing information about a database inside a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "database": {
      "type": "string",
      "description": "Name of the database in the instance."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "database"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Database"
}
```
## Operation: databases.patch
Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "database": {
      "type": "string",
      "description": "Name of the database to be updated in the instance."
    },
    "body": {
      "$ref": "#/definitions/Database"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "database"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: databases.update
Updates a resource containing information about a database inside a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "database": {
      "type": "string",
      "description": "Name of the database to be updated in the instance."
    },
    "body": {
      "$ref": "#/definitions/Database"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "database"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.export
Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance to be exported."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesExportRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.failover
Failover the instance to its failover replica instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "ID of the project that contains the read replica."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesFailoverRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.import
Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesImportRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.promoteReplica
Promotes the read replica instance to be a stand-alone Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "ID of the project that contains the read replica."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL read replica instance name."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.restart
Restarts a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance to be restarted."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.restoreBackup
Restores a backup of a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesRestoreBackupRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: sslCerts.list
Lists all of the current SSL certificates for the instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project for which to list Cloud SQL instances."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SslCertsListResponse"
}
```
## Operation: sslCerts.insert
Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project to which the newly created Cloud SQL instances should belong."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/SslCertsInsertRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SslCertsInsertResponse"
}
```
## Operation: sslCerts.delete
Deletes the SSL certificate. The change will not take effect until the instance is restarted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance to be deleted."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "sha1Fingerprint": {
      "type": "string",
      "description": "Sha1 FingerPrint."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "sha1Fingerprint"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: sslCerts.get
Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "sha1Fingerprint": {
      "type": "string",
      "description": "Sha1 FingerPrint."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "sha1Fingerprint"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SslCert"
}
```
## Operation: instances.startReplica
Starts the replication in the read replica instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "ID of the project that contains the read replica."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL read replica instance name."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.stopReplica
Stops the replication in the read replica instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "ID of the project that contains the read replica."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL read replica instance name."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: instances.truncateLog
Truncate MySQL general and slow query log tables

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the Cloud SQL project."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/InstancesTruncateLogRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: users.delete
Deletes a user from a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "host": {
      "type": "string",
      "description": "Host of the user in the instance."
    },
    "name": {
      "type": "string",
      "description": "Name of the user in the instance."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "host",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: users.list
Lists users in the specified Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersListResponse"
}
```
## Operation: users.insert
Creates a new user in a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "body": {
      "$ref": "#/definitions/User"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: users.update
Updates an existing user in a Cloud SQL instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Database instance ID. This does not include the project ID."
    },
    "host": {
      "type": "string",
      "description": "Host of the user in the instance."
    },
    "name": {
      "type": "string",
      "description": "Name of the user in the instance."
    },
    "body": {
      "$ref": "#/definitions/User"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance",
    "host",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: operations.list
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "instance": {
      "type": "string",
      "description": "Cloud SQL instance ID. This does not include the project ID."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of operations per response."
    },
    "pageToken": {
      "type": "string",
      "description": "A previously-returned page token representing part of the larger set of results to view."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "instance"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationsListResponse"
}
```
## Operation: operations.get
Retrieves an instance operation that has been performed on an instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project that contains the instance."
    },
    "operation": {
      "type": "string",
      "description": "Instance operation ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project",
    "operation"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Operation"
}
```
## Operation: tiers.list
Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project ID of the project for which to list tiers."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TiersListResponse"
}
```
