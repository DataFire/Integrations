# @datafire/google_drive
Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.

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
## Operation: about.get
Gets information about the user, the user's Drive, and system capabilities.

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
  "$ref": "#/definitions/About"
}
```
## Operation: changes.list
Lists the changes for a user or Team Drive.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method."
    },
    "includeCorpusRemovals": {
      "type": "boolean",
      "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file."
    },
    "includeRemoved": {
      "type": "boolean",
      "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access."
    },
    "includeTeamDriveItems": {
      "type": "boolean",
      "description": "Whether Team Drive files or changes should be included in results."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of changes to return per page.",
      "maximum": 1000,
      "minimum": 1
    },
    "restrictToMyDrive": {
      "type": "boolean",
      "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive."
    },
    "spaces": {
      "type": "string",
      "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "teamDriveId": {
      "type": "string",
      "description": "The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier."
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
    "pageToken"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ChangeList"
}
```
## Operation: changes.getStartPageToken
Gets the starting pageToken for listing future changes.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "teamDriveId": {
      "type": "string",
      "description": "The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned."
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
  "$ref": "#/definitions/StartPageToken"
}
```
## Operation: changes.watch
Subscribes to changes for a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method."
    },
    "includeCorpusRemovals": {
      "type": "boolean",
      "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file."
    },
    "includeRemoved": {
      "type": "boolean",
      "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access."
    },
    "includeTeamDriveItems": {
      "type": "boolean",
      "description": "Whether Team Drive files or changes should be included in results."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of changes to return per page.",
      "maximum": 1000,
      "minimum": 1
    },
    "restrictToMyDrive": {
      "type": "boolean",
      "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive."
    },
    "spaces": {
      "type": "string",
      "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "teamDriveId": {
      "type": "string",
      "description": "The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier."
    },
    "resource": {
      "$ref": "#/definitions/Channel"
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
    "pageToken"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Channel"
}
```
## Operation: channels.stop
Stop watching resources through this channel

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "resource": {
      "$ref": "#/definitions/Channel"
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
## Operation: files.list
Lists or searches files.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "corpora": {
      "type": "string",
      "description": "Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency."
    },
    "corpus": {
      "type": "string",
      "description": "The source of files to list. Deprecated: use 'corpora' instead.",
      "enum": [
        "domain",
        "user"
      ]
    },
    "includeTeamDriveItems": {
      "type": "boolean",
      "description": "Whether Team Drive items should be included in results."
    },
    "orderBy": {
      "type": "string",
      "description": "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response."
    },
    "q": {
      "type": "string",
      "description": "A query for filtering the file results. See the \"Search for Files\" guide for supported syntax."
    },
    "spaces": {
      "type": "string",
      "description": "A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "teamDriveId": {
      "type": "string",
      "description": "ID of Team Drive to search."
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
  "$ref": "#/definitions/FileList"
}
```
## Operation: files.create
Creates a new file.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "ignoreDefaultVisibility": {
      "type": "boolean",
      "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders."
    },
    "keepRevisionForever": {
      "type": "boolean",
      "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive."
    },
    "ocrLanguage": {
      "type": "string",
      "description": "A language hint for OCR processing during image import (ISO 639-1 code)."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "useContentAsIndexableText": {
      "type": "boolean",
      "description": "Whether to use the uploaded content as indexable text."
    },
    "body": {
      "$ref": "#/definitions/File"
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
  "$ref": "#/definitions/File"
}
```
## Operation: files.generateIds
Generates a set of file IDs which can be provided in create requests.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "integer",
      "description": "The number of IDs to return.",
      "maximum": 1000,
      "minimum": 1
    },
    "space": {
      "type": "string",
      "description": "The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'."
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
  "$ref": "#/definitions/GeneratedIds"
}
```
## Operation: files.emptyTrash
Permanently deletes all of the user's trashed files.

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
{}
```
## Operation: files.delete
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
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
    "fileId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: files.get
Gets a file's metadata or content by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "acknowledgeAbuse": {
      "type": "boolean",
      "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: files.update
Updates a file's metadata and/or content with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "addParents": {
      "type": "string",
      "description": "A comma-separated list of parent IDs to add."
    },
    "keepRevisionForever": {
      "type": "boolean",
      "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive."
    },
    "ocrLanguage": {
      "type": "string",
      "description": "A language hint for OCR processing during image import (ISO 639-1 code)."
    },
    "removeParents": {
      "type": "string",
      "description": "A comma-separated list of parent IDs to remove."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "useContentAsIndexableText": {
      "type": "boolean",
      "description": "Whether to use the uploaded content as indexable text."
    },
    "body": {
      "$ref": "#/definitions/File"
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: comments.list
Lists a file's comments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Whether to include deleted comments. Deleted comments will not include their original content."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of comments to return per page.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response."
    },
    "startModifiedTime": {
      "type": "string",
      "description": "The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time)."
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: comments.create
Creates a new comment on a file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "body": {
      "$ref": "#/definitions/Comment"
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.delete
Deletes a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
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
    "fileId",
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comments.get
Gets a comment by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Whether to return deleted comments. Deleted comments will not include their original content."
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
    "fileId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: comments.update
Updates a comment with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "body": {
      "$ref": "#/definitions/Comment"
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
    "fileId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: replies.list
Lists a comment's replies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Whether to include deleted replies. Deleted replies will not include their original content."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of replies to return per page.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response."
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
    "fileId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReplyList"
}
```
## Operation: replies.create
Creates a new reply to a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "body": {
      "$ref": "#/definitions/Reply"
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
    "fileId",
    "commentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Reply"
}
```
## Operation: replies.delete
Deletes a reply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "replyId": {
      "type": "string",
      "description": "The ID of the reply."
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
    "fileId",
    "commentId",
    "replyId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: replies.get
Gets a reply by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "replyId": {
      "type": "string",
      "description": "The ID of the reply."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Whether to return deleted replies. Deleted replies will not include their original content."
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
    "fileId",
    "commentId",
    "replyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Reply"
}
```
## Operation: replies.update
Updates a reply with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "commentId": {
      "type": "string",
      "description": "The ID of the comment."
    },
    "replyId": {
      "type": "string",
      "description": "The ID of the reply."
    },
    "body": {
      "$ref": "#/definitions/Reply"
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
    "fileId",
    "commentId",
    "replyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Reply"
}
```
## Operation: files.copy
Creates a copy of a file and applies any requested updates with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "ignoreDefaultVisibility": {
      "type": "boolean",
      "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders."
    },
    "keepRevisionForever": {
      "type": "boolean",
      "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive."
    },
    "ocrLanguage": {
      "type": "string",
      "description": "A language hint for OCR processing during image import (ISO 639-1 code)."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "body": {
      "$ref": "#/definitions/File"
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: files.export
Exports a Google Doc to the requested MIME type and returns the exported content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "mimeType": {
      "type": "string",
      "description": "The MIME type of the format requested for this export."
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
    "fileId",
    "mimeType"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: permissions.list
Lists a file's or Team Drive's permissions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file or Team Drive."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PermissionList"
}
```
## Operation: permissions.create
Creates a permission for a file or Team Drive.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file or Team Drive."
    },
    "emailMessage": {
      "type": "string",
      "description": "A custom message to include in the notification email."
    },
    "sendNotificationEmail": {
      "type": "boolean",
      "description": "Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "transferOwnership": {
      "type": "boolean",
      "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect."
    },
    "body": {
      "$ref": "#/definitions/Permission"
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Permission"
}
```
## Operation: permissions.delete
Deletes a permission.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file or Team Drive."
    },
    "permissionId": {
      "type": "string",
      "description": "The ID of the permission."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
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
    "fileId",
    "permissionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: permissions.get
Gets a permission by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "permissionId": {
      "type": "string",
      "description": "The ID of the permission."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
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
    "fileId",
    "permissionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Permission"
}
```
## Operation: permissions.update
Updates a permission with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file or Team Drive."
    },
    "permissionId": {
      "type": "string",
      "description": "The ID of the permission."
    },
    "removeExpiration": {
      "type": "boolean",
      "description": "Whether to remove the expiration date."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "transferOwnership": {
      "type": "boolean",
      "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect."
    },
    "body": {
      "$ref": "#/definitions/Permission"
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
    "fileId",
    "permissionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Permission"
}
```
## Operation: revisions.list
Lists a file's revisions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of revisions to return per page.",
      "maximum": 1000,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response."
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RevisionList"
}
```
## Operation: revisions.delete
Permanently deletes a revision. This method is only applicable to files with binary content in Drive.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "revisionId": {
      "type": "string",
      "description": "The ID of the revision."
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
    "fileId",
    "revisionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: revisions.get
Gets a revision's metadata or content by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "revisionId": {
      "type": "string",
      "description": "The ID of the revision."
    },
    "acknowledgeAbuse": {
      "type": "boolean",
      "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media."
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
    "fileId",
    "revisionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Revision"
}
```
## Operation: revisions.update
Updates a revision with patch semantics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "revisionId": {
      "type": "string",
      "description": "The ID of the revision."
    },
    "body": {
      "$ref": "#/definitions/Revision"
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
    "fileId",
    "revisionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Revision"
}
```
## Operation: files.watch
Subscribes to changes to a file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "The ID of the file."
    },
    "acknowledgeAbuse": {
      "type": "boolean",
      "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media."
    },
    "supportsTeamDrives": {
      "type": "boolean",
      "description": "Whether the requesting application supports Team Drives."
    },
    "resource": {
      "$ref": "#/definitions/Channel"
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
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Channel"
}
```
## Operation: teamdrives.list
Lists the user's Team Drives.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of Team Drives to return.",
      "maximum": 100,
      "minimum": 1
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for Team Drives."
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
  "$ref": "#/definitions/TeamDriveList"
}
```
## Operation: teamdrives.create
Creates a new Team Drive.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "requestId": {
      "type": "string",
      "description": "An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned."
    },
    "body": {
      "$ref": "#/definitions/TeamDrive"
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
    "requestId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TeamDrive"
}
```
## Operation: teamdrives.delete
Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamDriveId": {
      "type": "string",
      "description": "The ID of the Team Drive"
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
    "teamDriveId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teamdrives.get
Gets a Team Drive's metadata by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamDriveId": {
      "type": "string",
      "description": "The ID of the Team Drive"
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
    "teamDriveId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TeamDrive"
}
```
## Operation: teamdrives.update
Updates a Team Drive's metadata

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamDriveId": {
      "type": "string",
      "description": "The ID of the Team Drive"
    },
    "body": {
      "$ref": "#/definitions/TeamDrive"
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
    "teamDriveId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TeamDrive"
}
```
