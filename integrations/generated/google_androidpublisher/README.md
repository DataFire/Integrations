# @datafire/google_androidpublisher
Lets Android application developers access their Google Play accounts.

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
## Operation: inappproducts.batch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/InappproductsBatchRequest"
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
  "$ref": "#/definitions/InappproductsBatchResponse"
}
```
## Operation: edits.insert
Creates a new edit for an app, populated with the app's current state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "body": {
      "$ref": "#/definitions/AppEdit"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppEdit"
}
```
## Operation: edits.delete
Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.get
Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppEdit"
}
```
## Operation: edits.apks.list


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApksListResponse"
}
```
## Operation: edits.apks.upload


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Apk"
}
```
## Operation: edits.apks.addexternallyhosted
Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "body": {
      "$ref": "#/definitions/ApksAddExternallyHostedRequest"
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApksAddExternallyHostedResponse"
}
```
## Operation: edits.deobfuscationfiles.upload
Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The version code of the APK whose deobfuscation file is being uploaded."
    },
    "deobfuscationFileType": {
      "type": "string",
      "enum": [
        "proguard"
      ]
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
    "packageName",
    "editId",
    "apkVersionCode",
    "deobfuscationFileType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeobfuscationFilesUploadResponse"
}
```
## Operation: edits.expansionfiles.get
Fetches the Expansion File configuration for the APK specified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The version code of the APK whose Expansion File configuration is being read or modified."
    },
    "expansionFileType": {
      "type": "string",
      "enum": [
        "main",
        "patch"
      ]
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
    "packageName",
    "editId",
    "apkVersionCode",
    "expansionFileType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpansionFile"
}
```
## Operation: edits.expansionfiles.patch
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The version code of the APK whose Expansion File configuration is being read or modified."
    },
    "expansionFileType": {
      "type": "string",
      "enum": [
        "main",
        "patch"
      ]
    },
    "body": {
      "$ref": "#/definitions/ExpansionFile"
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
    "packageName",
    "editId",
    "apkVersionCode",
    "expansionFileType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpansionFile"
}
```
## Operation: edits.expansionfiles.upload
Uploads and attaches a new Expansion File to the APK specified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The version code of the APK whose Expansion File configuration is being read or modified."
    },
    "expansionFileType": {
      "type": "string",
      "enum": [
        "main",
        "patch"
      ]
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
    "packageName",
    "editId",
    "apkVersionCode",
    "expansionFileType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpansionFilesUploadResponse"
}
```
## Operation: edits.expansionfiles.update
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The version code of the APK whose Expansion File configuration is being read or modified."
    },
    "expansionFileType": {
      "type": "string",
      "enum": [
        "main",
        "patch"
      ]
    },
    "body": {
      "$ref": "#/definitions/ExpansionFile"
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
    "packageName",
    "editId",
    "apkVersionCode",
    "expansionFileType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExpansionFile"
}
```
## Operation: edits.apklistings.deleteall
Deletes all the APK-specific localized listings for a specified APK.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
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
    "packageName",
    "editId",
    "apkVersionCode"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.apklistings.list
Lists all the APK-specific localized listings for a specified APK.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
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
    "packageName",
    "editId",
    "apkVersionCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApkListingsListResponse"
}
```
## Operation: edits.apklistings.delete
Deletes the APK-specific localized listing for a specified APK and language code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
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
    "packageName",
    "editId",
    "apkVersionCode",
    "language"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.apklistings.get
Fetches the APK-specific localized listing for a specified APK and language code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
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
    "packageName",
    "editId",
    "apkVersionCode",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApkListing"
}
```
## Operation: edits.apklistings.patch
Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
    },
    "body": {
      "$ref": "#/definitions/ApkListing"
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
    "packageName",
    "editId",
    "apkVersionCode",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApkListing"
}
```
## Operation: edits.apklistings.update
Updates or creates the APK-specific localized listing for a specified APK and language code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "apkVersionCode": {
      "type": "integer",
      "description": "The APK version code whose APK-specific listings should be read or modified."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
    },
    "body": {
      "$ref": "#/definitions/ApkListing"
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
    "packageName",
    "editId",
    "apkVersionCode",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApkListing"
}
```
## Operation: edits.details.get
Fetches app details for this edit. This includes the default language and developer support contact information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppDetails"
}
```
## Operation: edits.details.patch
Updates app details for this edit. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "body": {
      "$ref": "#/definitions/AppDetails"
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppDetails"
}
```
## Operation: edits.details.update
Updates app details for this edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "body": {
      "$ref": "#/definitions/AppDetails"
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppDetails"
}
```
## Operation: edits.listings.deleteall
Deletes all localized listings from an edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.listings.list
Returns all of the localized store listings attached to this edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListingsListResponse"
}
```
## Operation: edits.listings.delete
Deletes the specified localized store listing from an edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
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
    "packageName",
    "editId",
    "language"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.listings.get
Fetches information about a localized store listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
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
    "packageName",
    "editId",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Listing"
}
```
## Operation: edits.listings.patch
Creates or updates a localized store listing. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
    },
    "body": {
      "$ref": "#/definitions/Listing"
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
    "packageName",
    "editId",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Listing"
}
```
## Operation: edits.listings.update
Creates or updates a localized store listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass \"de-AT\"."
    },
    "body": {
      "$ref": "#/definitions/Listing"
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
    "packageName",
    "editId",
    "language"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Listing"
}
```
## Operation: edits.images.deleteall
Deletes all images for the specified language and image type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\"."
    },
    "imageType": {
      "type": "string",
      "enum": [
        "featureGraphic",
        "icon",
        "phoneScreenshots",
        "promoGraphic",
        "sevenInchScreenshots",
        "tenInchScreenshots",
        "tvBanner",
        "tvScreenshots",
        "wearScreenshots"
      ]
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
    "packageName",
    "editId",
    "language",
    "imageType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ImagesDeleteAllResponse"
}
```
## Operation: edits.images.list
Lists all images for the specified language and image type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\"."
    },
    "imageType": {
      "type": "string",
      "enum": [
        "featureGraphic",
        "icon",
        "phoneScreenshots",
        "promoGraphic",
        "sevenInchScreenshots",
        "tenInchScreenshots",
        "tvBanner",
        "tvScreenshots",
        "wearScreenshots"
      ]
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
    "packageName",
    "editId",
    "language",
    "imageType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ImagesListResponse"
}
```
## Operation: edits.images.upload
Uploads a new image and adds it to the list of images for the specified language and image type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\"."
    },
    "imageType": {
      "type": "string",
      "enum": [
        "featureGraphic",
        "icon",
        "phoneScreenshots",
        "promoGraphic",
        "sevenInchScreenshots",
        "tenInchScreenshots",
        "tvBanner",
        "tvScreenshots",
        "wearScreenshots"
      ]
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
    "packageName",
    "editId",
    "language",
    "imageType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ImagesUploadResponse"
}
```
## Operation: edits.images.delete
Deletes the image (specified by id) from the edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "language": {
      "type": "string",
      "description": "The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass \"de-AT\"."
    },
    "imageType": {
      "type": "string",
      "enum": [
        "featureGraphic",
        "icon",
        "phoneScreenshots",
        "promoGraphic",
        "sevenInchScreenshots",
        "tenInchScreenshots",
        "tvBanner",
        "tvScreenshots",
        "wearScreenshots"
      ]
    },
    "imageId": {
      "type": "string",
      "description": "Unique identifier an image within the set of images attached to this edit."
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
    "packageName",
    "editId",
    "language",
    "imageType",
    "imageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: edits.testers.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Testers"
}
```
## Operation: edits.testers.patch


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
    },
    "body": {
      "$ref": "#/definitions/Testers"
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Testers"
}
```
## Operation: edits.testers.update


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
    },
    "body": {
      "$ref": "#/definitions/Testers"
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Testers"
}
```
## Operation: edits.tracks.list
Lists all the track configurations for this edit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TracksListResponse"
}
```
## Operation: edits.tracks.get
Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "description": "The track type to read or modify.",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Track"
}
```
## Operation: edits.tracks.patch
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "description": "The track type to read or modify.",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
    },
    "body": {
      "$ref": "#/definitions/Track"
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Track"
}
```
## Operation: edits.tracks.update
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
    },
    "track": {
      "type": "string",
      "description": "The track type to read or modify.",
      "enum": [
        "alpha",
        "beta",
        "production",
        "rollout"
      ]
    },
    "body": {
      "$ref": "#/definitions/Track"
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
    "packageName",
    "editId",
    "track"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Track"
}
```
## Operation: edits.commit
Commits/applies the changes made in this edit back to the app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppEdit"
}
```
## Operation: edits.validate
Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app that is being updated; for example, \"com.spiffygame\"."
    },
    "editId": {
      "type": "string",
      "description": "Unique identifier for this edit."
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
    "packageName",
    "editId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppEdit"
}
```
## Operation: entitlements.list
Lists the user's current inapp item or subscription entitlements

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application the inapp product was sold in (for example, 'com.some.thing')."
    },
    "maxResults": {
      "type": "integer"
    },
    "productId": {
      "type": "string",
      "description": "The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set."
    },
    "startIndex": {
      "type": "integer"
    },
    "token": {
      "type": "string"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EntitlementsListResponse"
}
```
## Operation: inappproducts.list
List all the in-app products for an Android app, both subscriptions and managed in-app products..

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app with in-app products; for example, \"com.spiffygame\"."
    },
    "maxResults": {
      "type": "integer"
    },
    "startIndex": {
      "type": "integer"
    },
    "token": {
      "type": "string"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InappproductsListResponse"
}
```
## Operation: inappproducts.insert
Creates a new in-app product for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app; for example, \"com.spiffygame\"."
    },
    "autoConvertMissingPrices": {
      "type": "boolean",
      "description": "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false."
    },
    "body": {
      "$ref": "#/definitions/InAppProduct"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InAppProduct"
}
```
## Operation: inappproducts.delete
Delete an in-app product for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\"."
    },
    "sku": {
      "type": "string",
      "description": "Unique identifier for the in-app product."
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
    "packageName",
    "sku"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: inappproducts.get
Returns information about the in-app product specified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string"
    },
    "sku": {
      "type": "string",
      "description": "Unique identifier for the in-app product."
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
    "packageName",
    "sku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InAppProduct"
}
```
## Operation: inappproducts.patch
Updates the details of an in-app product. This method supports patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\"."
    },
    "sku": {
      "type": "string",
      "description": "Unique identifier for the in-app product."
    },
    "autoConvertMissingPrices": {
      "type": "boolean",
      "description": "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false."
    },
    "body": {
      "$ref": "#/definitions/InAppProduct"
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
    "packageName",
    "sku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InAppProduct"
}
```
## Operation: inappproducts.update
Updates the details of an in-app product.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\"."
    },
    "sku": {
      "type": "string",
      "description": "Unique identifier for the in-app product."
    },
    "autoConvertMissingPrices": {
      "type": "boolean",
      "description": "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false."
    },
    "body": {
      "$ref": "#/definitions/InAppProduct"
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
    "packageName",
    "sku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InAppProduct"
}
```
## Operation: purchases.products.get
Checks the purchase and consumption status of an inapp item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application the inapp product was sold in (for example, 'com.some.thing')."
    },
    "productId": {
      "type": "string",
      "description": "The inapp product SKU (for example, 'com.some.thing.inapp1')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the inapp product was purchased."
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
    "packageName",
    "productId",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductPurchase"
}
```
## Operation: purchases.subscriptions.get
Checks whether a user's subscription purchase is valid and returns its expiry time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which this subscription was purchased (for example, 'com.some.thing')."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The purchased subscription ID (for example, 'monthly001')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the subscription was purchased."
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
    "packageName",
    "subscriptionId",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionPurchase"
}
```
## Operation: purchases.subscriptions.cancel
Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which this subscription was purchased (for example, 'com.some.thing')."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The purchased subscription ID (for example, 'monthly001')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the subscription was purchased."
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
    "packageName",
    "subscriptionId",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: purchases.subscriptions.defer
Defers a user's subscription purchase until a specified future expiration time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which this subscription was purchased (for example, 'com.some.thing')."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The purchased subscription ID (for example, 'monthly001')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the subscription was purchased."
    },
    "body": {
      "$ref": "#/definitions/SubscriptionPurchasesDeferRequest"
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
    "packageName",
    "subscriptionId",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionPurchasesDeferResponse"
}
```
## Operation: purchases.subscriptions.refund
Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which this subscription was purchased (for example, 'com.some.thing')."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The purchased subscription ID (for example, 'monthly001')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the subscription was purchased."
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
    "packageName",
    "subscriptionId",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: purchases.subscriptions.revoke
Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which this subscription was purchased (for example, 'com.some.thing')."
    },
    "subscriptionId": {
      "type": "string",
      "description": "The purchased subscription ID (for example, 'monthly001')."
    },
    "token": {
      "type": "string",
      "description": "The token provided to the user's device when the subscription was purchased."
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
    "packageName",
    "subscriptionId",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: purchases.voidedpurchases.list
Lists the purchases that were cancelled, refunded or charged-back.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing')."
    },
    "endTime": {
      "type": "string",
      "description": "The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time."
    },
    "maxResults": {
      "type": "integer"
    },
    "startIndex": {
      "type": "integer"
    },
    "startTime": {
      "type": "string",
      "description": "The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days."
    },
    "token": {
      "type": "string"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VoidedPurchasesListResponse"
}
```
## Operation: reviews.list
Returns a list of reviews. Only reviews from last week will be returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app for which we want reviews; for example, \"com.spiffygame\"."
    },
    "maxResults": {
      "type": "integer"
    },
    "startIndex": {
      "type": "integer"
    },
    "token": {
      "type": "string"
    },
    "translationLanguage": {
      "type": "string"
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
    "packageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReviewsListResponse"
}
```
## Operation: reviews.get
Returns a single review.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app for which we want reviews; for example, \"com.spiffygame\"."
    },
    "reviewId": {
      "type": "string"
    },
    "translationLanguage": {
      "type": "string"
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
    "packageName",
    "reviewId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Review"
}
```
## Operation: reviews.reply
Reply to a single review, or update an existing reply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "packageName": {
      "type": "string",
      "description": "Unique identifier for the Android app for which we want reviews; for example, \"com.spiffygame\"."
    },
    "reviewId": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/ReviewsReplyRequest"
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
    "packageName",
    "reviewId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReviewsReplyResponse"
}
```
