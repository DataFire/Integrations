# @datafire/google_books
Searches for books and manages your Google Books library.

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
## Operation: cloudloading.addBook


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "drive_document_id": {
      "type": "string",
      "description": "A drive document id. The upload_client_token must not be set."
    },
    "mime_type": {
      "type": "string",
      "description": "The document MIME type. It can be set only if the drive_document_id is set."
    },
    "name": {
      "type": "string",
      "description": "The document name. It can be set only if the drive_document_id is set."
    },
    "upload_client_token": {
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BooksCloudloadingResource"
}
```
## Operation: cloudloading.deleteBook
Remove the book and its contents

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The id of the book to be removed."
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
    "volumeId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: cloudloading.updateBook


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/BooksCloudloadingResource"
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
  "$ref": "#/definitions/BooksCloudloadingResource"
}
```
## Operation: dictionary.listOfflineMetadata
Returns a list of offline dictionary metadata available

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cpksver": {
      "type": "string",
      "description": "The device/version ID from which to request the data."
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
    "cpksver"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: myconfig.getUserSettings
Gets the current settings for the user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
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
  "$ref": "#/definitions/Usersettings"
}
```
## Operation: myconfig.releaseDownloadAccess
Release downloaded content access restriction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeIds": {
      "type": "array",
      "description": "The volume(s) to release restrictions for."
    },
    "cpksver": {
      "type": "string",
      "description": "The device/version ID from which to release the restriction."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeIds",
    "cpksver"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DownloadAccesses"
}
```
## Operation: myconfig.requestAccess
Request concurrent and download access restrictions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "volumeId": {
      "type": "string",
      "description": "The volume to request concurrent/download restrictions for."
    },
    "nonce": {
      "type": "string",
      "description": "The client nonce value."
    },
    "cpksver": {
      "type": "string",
      "description": "The device/version ID from which to request the restrictions."
    },
    "licenseTypes": {
      "type": "string",
      "description": "The type of access license to request. If not specified, the default is BOTH.",
      "enum": [
        "BOTH",
        "CONCURRENT",
        "DOWNLOAD"
      ]
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US."
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
    "source",
    "volumeId",
    "nonce",
    "cpksver"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RequestAccess"
}
```
## Operation: myconfig.syncVolumeLicenses
Request downloaded content access for specified volumes on the My eBooks shelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "nonce": {
      "type": "string",
      "description": "The client nonce value."
    },
    "cpksver": {
      "type": "string",
      "description": "The device/version ID from which to release the restriction."
    },
    "features": {
      "type": "array",
      "description": "List of features supported by the client, i.e., 'RENTALS'"
    },
    "includeNonComicsSeries": {
      "type": "boolean",
      "description": "Set to true to include non-comics series. Defaults to false."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US."
    },
    "showPreorders": {
      "type": "boolean",
      "description": "Set to true to show pre-ordered books. Defaults to false."
    },
    "volumeIds": {
      "type": "array",
      "description": "The volume(s) to request download restrictions for."
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
    "source",
    "nonce",
    "cpksver"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumes"
}
```
## Operation: myconfig.updateUserSettings
Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Usersettings"
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
  "$ref": "#/definitions/Usersettings"
}
```
## Operation: mylibrary.annotations.list
Retrieves a list of annotations, possibly filtered.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contentVersion": {
      "type": "string",
      "description": "The content version for the requested volume."
    },
    "layerId": {
      "type": "string",
      "description": "The layer ID to limit annotation by."
    },
    "layerIds": {
      "type": "array",
      "description": "The layer ID(s) to limit annotation by."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "maximum": 40,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
    },
    "showDeleted": {
      "type": "boolean",
      "description": "Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "updatedMax": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive)."
    },
    "updatedMin": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive)."
    },
    "volumeId": {
      "type": "string",
      "description": "The volume to restrict annotations to."
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
  "$ref": "#/definitions/Annotations"
}
```
## Operation: mylibrary.annotations.insert
Inserts a new annotation.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "annotationId": {
      "type": "string",
      "description": "The ID for the annotation to insert."
    },
    "body": {
      "$ref": "#/definitions/Annotation"
    },
    "country": {
      "type": "string",
      "description": "ISO-3166-1 code to override the IP-based location."
    },
    "showOnlySummaryInResponse": {
      "type": "boolean",
      "description": "Requests that only the summary of the specified layer be provided in the response."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
  "$ref": "#/definitions/Annotation"
}
```
## Operation: mylibrary.annotations.summary
Gets the summary of specified layers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layerIds": {
      "type": "array",
      "description": "Array of layer IDs to get the summary for."
    },
    "volumeId": {
      "type": "string",
      "description": "Volume id to get the summary for."
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
    "layerIds",
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AnnotationsSummary"
}
```
## Operation: mylibrary.annotations.delete
Deletes an annotation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "annotationId": {
      "type": "string",
      "description": "The ID for the annotation to delete."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "annotationId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mylibrary.annotations.update
Updates an existing annotation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "annotationId": {
      "type": "string",
      "description": "The ID for the annotation to update."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "body": {
      "$ref": "#/definitions/Annotation"
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
    "annotationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Annotation"
}
```
## Operation: mylibrary.bookshelves.list
Retrieves a list of bookshelves belonging to the authenticated user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
  "$ref": "#/definitions/Bookshelves"
}
```
## Operation: mylibrary.bookshelves.get
Retrieves metadata for a specific bookshelf belonging to the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf to retrieve."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "shelf"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bookshelf"
}
```
## Operation: mylibrary.bookshelves.addVolume
Adds a volume to a bookshelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf to which to add a volume."
    },
    "volumeId": {
      "type": "string",
      "description": "ID of volume to add."
    },
    "reason": {
      "type": "string",
      "description": "The reason for which the book is added to the library.",
      "enum": [
        "IOS_PREX",
        "IOS_SEARCH",
        "ONBOARDING"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "shelf",
    "volumeId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mylibrary.bookshelves.clearVolumes
Clears all volumes from a bookshelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf from which to remove a volume."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "shelf"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mylibrary.bookshelves.moveVolume
Moves a volume within a bookshelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf with the volume."
    },
    "volumeId": {
      "type": "string",
      "description": "ID of volume to move."
    },
    "volumePosition": {
      "type": "integer",
      "description": "Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)"
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "shelf",
    "volumeId",
    "volumePosition"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mylibrary.bookshelves.removeVolume
Removes a volume from a bookshelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf from which to remove a volume."
    },
    "volumeId": {
      "type": "string",
      "description": "ID of volume to remove."
    },
    "reason": {
      "type": "string",
      "description": "The reason for which the book is removed from the library.",
      "enum": [
        "ONBOARDING"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "shelf",
    "volumeId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mylibrary.bookshelves.volumes.list
Gets volume information for volumes on a bookshelf.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shelf": {
      "type": "string",
      "description": "The bookshelf ID or name retrieve volumes for."
    },
    "country": {
      "type": "string",
      "description": "ISO-3166-1 code to override the IP-based location."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "minimum": 0
    },
    "projection": {
      "type": "string",
      "description": "Restrict information returned to a set of selected fields.",
      "enum": [
        "full",
        "lite"
      ]
    },
    "q": {
      "type": "string",
      "description": "Full-text search query string in this bookshelf."
    },
    "showPreorders": {
      "type": "boolean",
      "description": "Set to true to show pre-ordered books. Defaults to false."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first element to return (starts at 0)",
      "minimum": 0
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
    "shelf"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumes"
}
```
## Operation: mylibrary.readingpositions.get
Retrieves my reading position information for a volume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "ID of volume for which to retrieve a reading position."
    },
    "contentVersion": {
      "type": "string",
      "description": "Volume content version for which this reading position is requested."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReadingPosition"
}
```
## Operation: mylibrary.readingpositions.setPosition
Sets my reading position information for a volume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "ID of volume for which to update the reading position."
    },
    "timestamp": {
      "type": "string",
      "description": "RFC 3339 UTC format timestamp associated with this reading position."
    },
    "position": {
      "type": "string",
      "description": "Position string for the new volume reading position."
    },
    "action": {
      "type": "string",
      "description": "Action that caused this reading position to be set.",
      "enum": [
        "bookmark",
        "chapter",
        "next-page",
        "prev-page",
        "scroll",
        "search"
      ]
    },
    "contentVersion": {
      "type": "string",
      "description": "Volume content version for which this reading position applies."
    },
    "deviceCookie": {
      "type": "string",
      "description": "Random persistent device cookie optional on set position."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId",
    "timestamp",
    "position"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notification.get
Returns notification details for a given notification id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notification_id": {
      "type": "string",
      "description": "String to identify the notification."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "notification_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Notification"
}
```
## Operation: onboarding.listCategories
List categories for onboarding experience.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset."
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
  "$ref": "#/definitions/Category"
}
```
## Operation: onboarding.listCategoryVolumes
List available volumes under categories for onboarding experience.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "categoryId": {
      "type": "array",
      "description": "List of category ids requested."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset."
    },
    "maxAllowedMaturityRating": {
      "type": "string",
      "description": "The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.",
      "enum": [
        "mature",
        "not-mature"
      ]
    },
    "pageSize": {
      "type": "integer",
      "description": "Number of maximum results per page to be included in the response."
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
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
  "$ref": "#/definitions/Volume2"
}
```
## Operation: personalizedstream.get
Returns a stream of personalized book clusters

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations."
    },
    "maxAllowedMaturityRating": {
      "type": "string",
      "description": "The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.",
      "enum": [
        "mature",
        "not-mature"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
  "$ref": "#/definitions/Discoveryclusters"
}
```
## Operation: promooffer.accept


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "androidId": {
      "type": "string",
      "description": "device android_id"
    },
    "device": {
      "type": "string",
      "description": "device device"
    },
    "manufacturer": {
      "type": "string",
      "description": "device manufacturer"
    },
    "model": {
      "type": "string",
      "description": "device model"
    },
    "offerId": {
      "type": "string"
    },
    "product": {
      "type": "string",
      "description": "device product"
    },
    "serial": {
      "type": "string",
      "description": "device serial"
    },
    "volumeId": {
      "type": "string",
      "description": "Volume id to exercise the offer"
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
{}
```
## Operation: promooffer.dismiss


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "androidId": {
      "type": "string",
      "description": "device android_id"
    },
    "device": {
      "type": "string",
      "description": "device device"
    },
    "manufacturer": {
      "type": "string",
      "description": "device manufacturer"
    },
    "model": {
      "type": "string",
      "description": "device model"
    },
    "offerId": {
      "type": "string",
      "description": "Offer to dimiss"
    },
    "product": {
      "type": "string",
      "description": "device product"
    },
    "serial": {
      "type": "string",
      "description": "device serial"
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
{}
```
## Operation: promooffer.get
Returns a list of promo offers available to the user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "androidId": {
      "type": "string",
      "description": "device android_id"
    },
    "device": {
      "type": "string",
      "description": "device device"
    },
    "manufacturer": {
      "type": "string",
      "description": "device manufacturer"
    },
    "model": {
      "type": "string",
      "description": "device model"
    },
    "product": {
      "type": "string",
      "description": "device product"
    },
    "serial": {
      "type": "string",
      "description": "device serial"
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
  "$ref": "#/definitions/Offers"
}
```
## Operation: series.get
Returns Series metadata for the given series ids.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "series_id": {
      "type": "array",
      "description": "String that identifies the series"
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
    "series_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Series"
}
```
## Operation: series.membership.get
Returns Series membership data given the series id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "series_id": {
      "type": "string",
      "description": "String that identifies the series"
    },
    "page_size": {
      "type": "integer",
      "description": "Number of maximum results per page to be included in the response."
    },
    "page_token": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
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
    "series_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Seriesmembership"
}
```
## Operation: bookshelves.list
Retrieves a list of public bookshelves for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of user for whom to retrieve bookshelves."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bookshelves"
}
```
## Operation: bookshelves.get
Retrieves metadata for a specific bookshelf for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of user for whom to retrieve bookshelves."
    },
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf to retrieve."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "userId",
    "shelf"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bookshelf"
}
```
## Operation: bookshelves.volumes.list
Retrieves volumes in a specific bookshelf for the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "ID of user for whom to retrieve bookshelf volumes."
    },
    "shelf": {
      "type": "string",
      "description": "ID of bookshelf to retrieve volumes."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "minimum": 0
    },
    "showPreorders": {
      "type": "boolean",
      "description": "Set to true to show pre-ordered books. Defaults to false."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first element to return (starts at 0)",
      "minimum": 0
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
    "userId",
    "shelf"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumes"
}
```
## Operation: volumes.list
Performs a book search.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Full-text search query string."
    },
    "download": {
      "type": "string",
      "description": "Restrict to volumes by download availability.",
      "enum": [
        "epub"
      ]
    },
    "filter": {
      "type": "string",
      "description": "Filter search results.",
      "enum": [
        "ebooks",
        "free-ebooks",
        "full",
        "paid-ebooks",
        "partial"
      ]
    },
    "langRestrict": {
      "type": "string",
      "description": "Restrict results to books with this language code."
    },
    "libraryRestrict": {
      "type": "string",
      "description": "Restrict search to this user's library.",
      "enum": [
        "my-library",
        "no-restrict"
      ]
    },
    "maxAllowedMaturityRating": {
      "type": "string",
      "description": "The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.",
      "enum": [
        "mature",
        "not-mature"
      ]
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 40,
      "minimum": 0
    },
    "orderBy": {
      "type": "string",
      "description": "Sort search results.",
      "enum": [
        "newest",
        "relevance"
      ]
    },
    "partner": {
      "type": "string",
      "description": "Restrict and brand results for partner ID."
    },
    "printType": {
      "type": "string",
      "description": "Restrict to books or magazines.",
      "enum": [
        "all",
        "books",
        "magazines"
      ]
    },
    "projection": {
      "type": "string",
      "description": "Restrict information returned to a set of selected fields.",
      "enum": [
        "full",
        "lite"
      ]
    },
    "showPreorders": {
      "type": "boolean",
      "description": "Set to true to show books available for preorder. Defaults to false."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first result to return (starts at 0)",
      "minimum": 0
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
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumes"
}
```
## Operation: volumes.mybooks.list
Return a list of books in My Library.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "acquireMethod": {
      "type": "array",
      "description": "How the book was acquired"
    },
    "country": {
      "type": "string",
      "description": "ISO-3166-1 code to override the IP-based location."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 100,
      "minimum": 0
    },
    "processingState": {
      "type": "array",
      "description": "The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first result to return (starts at 0)",
      "minimum": 0
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
  "$ref": "#/definitions/Volumes"
}
```
## Operation: volumes.recommended.list
Return a list of recommended books for the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations."
    },
    "maxAllowedMaturityRating": {
      "type": "string",
      "description": "The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.",
      "enum": [
        "mature",
        "not-mature"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
  "$ref": "#/definitions/Volumes"
}
```
## Operation: volumes.recommended.rate
Rate a recommended book for the current user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rating": {
      "type": "string",
      "description": "Rating to be given to the volume.",
      "enum": [
        "HAVE_IT",
        "NOT_INTERESTED"
      ]
    },
    "volumeId": {
      "type": "string",
      "description": "ID of the source volume."
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "rating",
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BooksVolumesRecommendedRateResponse"
}
```
## Operation: volumes.useruploaded.list
Return a list of books uploaded by the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return.",
      "maximum": 40,
      "minimum": 0
    },
    "processingState": {
      "type": "array",
      "description": "The processing state of the user uploaded volumes to be returned."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startIndex": {
      "type": "integer",
      "description": "Index of the first result to return (starts at 0)",
      "minimum": 0
    },
    "volumeId": {
      "type": "array",
      "description": "The ids of the volumes to be returned. If not specified all that match the processingState are returned."
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
  "$ref": "#/definitions/Volumes"
}
```
## Operation: volumes.get
Gets volume information for a single volume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "ID of volume to retrieve."
    },
    "country": {
      "type": "string",
      "description": "ISO-3166-1 code to override the IP-based location."
    },
    "includeNonComicsSeries": {
      "type": "boolean",
      "description": "Set to true to include non-comics series. Defaults to false."
    },
    "partner": {
      "type": "string",
      "description": "Brand results for partner ID."
    },
    "projection": {
      "type": "string",
      "description": "Restrict information returned to a set of selected fields.",
      "enum": [
        "full",
        "lite"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "user_library_consistent_read": {
      "type": "boolean"
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
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volume"
}
```
## Operation: volumes.associated.list
Return a list of associated books.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "ID of the source volume."
    },
    "association": {
      "type": "string",
      "description": "Association type.",
      "enum": [
        "end-of-sample",
        "end-of-volume",
        "related-for-play"
      ]
    },
    "locale": {
      "type": "string",
      "description": "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations."
    },
    "maxAllowedMaturityRating": {
      "type": "string",
      "description": "The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.",
      "enum": [
        "mature",
        "not-mature"
      ]
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumes"
}
```
## Operation: layers.volumeAnnotations.list
Gets the volume annotations for a volume and layer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve annotations for."
    },
    "layerId": {
      "type": "string",
      "description": "The ID for the layer to get the annotations."
    },
    "contentVersion": {
      "type": "string",
      "description": "The content version for the requested volume."
    },
    "endOffset": {
      "type": "string",
      "description": "The end offset to end retrieving data from."
    },
    "endPosition": {
      "type": "string",
      "description": "The end position to end retrieving data from."
    },
    "locale": {
      "type": "string",
      "description": "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "maximum": 200,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
    },
    "showDeleted": {
      "type": "boolean",
      "description": "Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "startOffset": {
      "type": "string",
      "description": "The start offset to start retrieving data from."
    },
    "startPosition": {
      "type": "string",
      "description": "The start position to start retrieving data from."
    },
    "updatedMax": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive)."
    },
    "updatedMin": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive)."
    },
    "volumeAnnotationsVersion": {
      "type": "string",
      "description": "The version of the volume annotations that you are requesting."
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
    "volumeId",
    "layerId",
    "contentVersion"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumeannotations"
}
```
## Operation: layers.volumeAnnotations.get
Gets the volume annotation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve annotations for."
    },
    "layerId": {
      "type": "string",
      "description": "The ID for the layer to get the annotations."
    },
    "annotationId": {
      "type": "string",
      "description": "The ID of the volume annotation to retrieve."
    },
    "locale": {
      "type": "string",
      "description": "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId",
    "layerId",
    "annotationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Volumeannotation"
}
```
## Operation: layers.annotationData.list
Gets the annotation data for a volume and layer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve annotation data for."
    },
    "layerId": {
      "type": "string",
      "description": "The ID for the layer to get the annotation data."
    },
    "contentVersion": {
      "type": "string",
      "description": "The content version for the requested volume."
    },
    "annotationDataId": {
      "type": "array",
      "description": "The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set."
    },
    "h": {
      "type": "integer",
      "description": "The requested pixel height for any images. If height is provided width must also be provided."
    },
    "locale": {
      "type": "string",
      "description": "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "maximum": 200,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
    },
    "scale": {
      "type": "integer",
      "description": "The requested scale for the image.",
      "minimum": 0
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "updatedMax": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive)."
    },
    "updatedMin": {
      "type": "string",
      "description": "RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive)."
    },
    "w": {
      "type": "integer",
      "description": "The requested pixel width for any images. If width is provided height must also be provided."
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
    "volumeId",
    "layerId",
    "contentVersion"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Annotationsdata"
}
```
## Operation: layers.annotationData.get
Gets the annotation data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve annotations for."
    },
    "layerId": {
      "type": "string",
      "description": "The ID for the layer to get the annotations."
    },
    "annotationDataId": {
      "type": "string",
      "description": "The ID of the annotation data to retrieve."
    },
    "contentVersion": {
      "type": "string",
      "description": "The content version for the volume you are trying to retrieve."
    },
    "allowWebDefinitions": {
      "type": "boolean",
      "description": "For the dictionary layer. Whether or not to allow web definitions."
    },
    "h": {
      "type": "integer",
      "description": "The requested pixel height for any images. If height is provided width must also be provided."
    },
    "locale": {
      "type": "string",
      "description": "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'."
    },
    "scale": {
      "type": "integer",
      "description": "The requested scale for the image.",
      "minimum": 0
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
    },
    "w": {
      "type": "integer",
      "description": "The requested pixel width for any images. If width is provided height must also be provided."
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
    "volumeId",
    "layerId",
    "annotationDataId",
    "contentVersion"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Annotationdata"
}
```
## Operation: layers.list
List the layer summaries for a volume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve layers for."
    },
    "contentVersion": {
      "type": "string",
      "description": "The content version for the requested volume."
    },
    "maxResults": {
      "type": "integer",
      "description": "Maximum number of results to return",
      "maximum": 200,
      "minimum": 0
    },
    "pageToken": {
      "type": "string",
      "description": "The value of the nextToken from the previous page."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Layersummaries"
}
```
## Operation: layers.get
Gets the layer summary for a volume.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "volumeId": {
      "type": "string",
      "description": "The volume to retrieve layers for."
    },
    "summaryId": {
      "type": "string",
      "description": "The ID for the layer to get the summary for."
    },
    "contentVersion": {
      "type": "string",
      "description": "The content version for the requested volume."
    },
    "source": {
      "type": "string",
      "description": "String to identify the originator of this request."
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
    "volumeId",
    "summaryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Layersummary"
}
```
