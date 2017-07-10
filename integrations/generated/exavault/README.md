# @datafire/exavault
ExaVault's API allows you to incorporate ExaVault's suite of file transfer and user management tools into your own application.

ExaVault supports both POST (recommended when requesting large data sets) and GET operations, and requires an API key in order to use.


## Operation: authenticateUser
Returns access token in the Response object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Name of of user to authenticate"
    },
    "password": {
      "type": "string",
      "description": "User's password"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthResponse"
}
```
## Operation: checkFilesExist
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "array",
      "description": "Array containing paths of the files or folders to check"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ExistingResourcesResponse"
}
```
## Operation: copyResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "array",
      "description": "Remote paths of the files or folders to copy"
    },
    "destinationPath": {
      "type": "string",
      "description": "Remote destination path to copy files/folders to"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths",
    "destinationPath"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModifiedResourcesResponse"
}
```
## Operation: createFolder
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "folderName": {
      "type": "string",
      "description": "Name of the folder to create"
    },
    "path": {
      "type": "string",
      "description": "Where to create the folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "folderName",
    "path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: createNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "type": {
      "type": "string",
      "description": "Type of notification: 'file' or 'folder' "
    },
    "path": {
      "type": "string",
      "description": "Full path of file/folder where notification is set."
    },
    "action": {
      "type": "string",
      "description": "Type of action to filter on: 'upload', 'download', 'delete', 'all'"
    },
    "usernames": {
      "type": "array",
      "description": "Array of usernames or with one flag to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'"
    },
    "sendEmail": {
      "type": "boolean",
      "description": "Set to true if the user should be notified by email when the notification is triggered."
    },
    "emails": {
      "type": "array",
      "description": "Email addresses to send notification to. If not specified, sends to owner by default."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "type",
    "path",
    "action",
    "usernames",
    "sendEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: createShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "type": {
      "type": "string",
      "description": "The type of share to create: shared_folder, send, receive."
    },
    "name": {
      "type": "string",
      "description": "Name of the Share."
    },
    "filePaths": {
      "type": "array",
      "description": "Array of strings containing the file paths to share."
    },
    "accessMode": {
      "type": "string",
      "description": "Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete."
    },
    "subject": {
      "type": "string",
      "description": "Share message subject (for email invitations)."
    },
    "message": {
      "type": "string",
      "description": "Share message contents (for email invitations)."
    },
    "emails": {
      "type": "array",
      "description": "Array of strings for email recipients (for email invitations)."
    },
    "ccEmail": {
      "type": "string",
      "description": "Specifies a CC email recipient."
    },
    "requireEmail": {
      "type": "boolean",
      "description": "Requires a user's email to access (defaults to false if not specified)."
    },
    "embed": {
      "type": "boolean",
      "description": "Allows user to embed a widget with the share. Defaults to false if not specified."
    },
    "isPublic": {
      "type": "boolean",
      "description": "True if share has a public URL, otherwise defaults to false"
    },
    "password": {
      "type": "string",
      "description": "If not null, value of password is required to access this Share"
    },
    "expiration": {
      "type": "string",
      "description": "The date the current Share should expire, formatted YYYY-mm-dd hh:mm:ss"
    },
    "hasNotification": {
      "type": "boolean",
      "description": "True if the user should be notified about activity on this Share."
    },
    "notificationEmails": {
      "type": "array",
      "description": "An array of recipients who should receive notification emails."
    },
    "fileDropCreateFolders": {
      "type": "boolean",
      "description": "If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "type",
    "name",
    "filePaths",
    "accessMode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: createUser
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "username": {
      "type": "string",
      "description": "Name of the subaccount user to create"
    },
    "destinationFolder": {
      "type": "string",
      "description": "The user's home folder"
    },
    "email": {
      "type": "string",
      "description": "The user's email address"
    },
    "password": {
      "type": "string",
      "description": "The user's password"
    },
    "role": {
      "type": "string",
      "description": "The user's role, i.e: 'user' or 'admin'"
    },
    "permissions": {
      "type": "string",
      "description": "A CSV string of user permissions. The following values are supported: upload, download, delete, modify, list, changePassword, share, notification."
    },
    "timeZone": {
      "type": "string",
      "description": "The user's timezone, used for accurate time display within SWFT. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values"
    },
    "nickname": {
      "type": "string",
      "description": "The user's nickname"
    },
    "expiration": {
      "type": "string",
      "description": "The date when the user should expire, formatted YYYY-mm-dd hh:mm:ss"
    },
    "locked": {
      "type": "boolean",
      "description": "If true, the user's account is locked by default"
    },
    "welcomeEmail": {
      "type": "boolean",
      "description": "If true, send a user email upon creation"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "username",
    "destinationFolder",
    "email",
    "password",
    "role",
    "permissions",
    "timeZone"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: deleteNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "ID of the Notification to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: deleteResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'delete' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "array",
      "description": "Array containing paths of the files or folder to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeletedResourcesResponse"
}
```
## Operation: deleteShare
Requires access token obtained via the authenticateUser operation. Available to users with 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "ID of the Share to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: deleteUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "username": {
      "type": "string",
      "description": "Name of the subaccount user to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: getAccount
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountResponse"
}
```
## Operation: getCurrentUser
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserResponse"
}
```
## Operation: getDownloadFileUrl
Requires access token obtained via the authenticateUser operation. URL points at the appropriate storage server for file download.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "string",
      "description": "Path of file to be downloaded"
    },
    "downloadName": {
      "type": "string",
      "description": "The name of the file to be downloaded"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlResponse"
}
```
## Operation: getFileActivityLogs
Returns a list of account activity. Allows for searching the activity log.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Starting record in the result set. Can be used for pagination."
    },
    "sortBy": {
      "type": "string",
      "description": "Sort method ['sort_logs_date' or 'sort_logs_ip_address' or 'sort_logs_username' or 'sort_logs_file' or 'sort_logs_file_source' or 'sort_logs_operation', or 'sort_logs_duration', or 'sort_logs_size', or 'sort_logs_protocol']"
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort in either ascending or descending order: asc, desc"
    },
    "filterBy": {
      "type": "string",
      "description": "Field to search on ['filter_logs_date' or 'filter_logs_ip_address' or 'filter_logs_username' or 'filter_logs_operation' or 'filter_logs_file']"
    },
    "filter": {
      "type": "string",
      "description": "Search criteria. For date ranges, use format 'start_date::end_date'"
    },
    "itemLimit": {
      "type": "integer",
      "format": "int32",
      "description": "Number of logs to return. Can be used for pagination."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogResponse"
}
```
## Operation: getFolders
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "path": {
      "type": "string",
      "description": "The remote file path"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourcePropertiesResponse"
}
```
## Operation: getNotification
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "ID of the Notification"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationResponse"
}
```
## Operation: getNotificationActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationActivityResponse"
}
```
## Operation: getNotifications
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "type": {
      "type": "string",
      "description": "Type of notification to filter on: 'file', 'folder', 'shared_folder', 'send_receipt', 'share_receipt', 'file_drop'"
    },
    "sortBy": {
      "type": "string",
      "description": "Sort by one of the following: 'sort_notifications_folder_name', 'sort_notifications_path', 'sort_notifications_date'"
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort by 'asc' or 'desc' order."
    },
    "filter": {
      "type": "string",
      "description": "Filter by the provided search terms."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationsResponse"
}
```
## Operation: getResourceList
Requires access token obtained via the authenticateUser operation. Available to users with 'list files' permission.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "path": {
      "type": "string",
      "description": "The remote file path"
    },
    "sortBy": {
      "type": "string",
      "description": "Sort according to attribute: sort_files_name, sort_files_size, sort_files_date, sort_files_type, sort_files_timeline"
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort in either ascending or descending order: asc, desc"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Determines which item to start on for pagination"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "The number of files to limit the result"
    },
    "detailed": {
      "type": "boolean",
      "description": "If true, returns sharedFolder, notifications or other objects associated with specified path"
    },
    "pattern": {
      "type": "string",
      "description": "Regex string. If not null, perform a search with specified pattern"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "path",
    "sortBy",
    "sortOrder",
    "offset",
    "limit"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourceResponse"
}
```
## Operation: getResourceProperties
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "array",
      "description": "Array containing paths of the files or folder to get"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResourcePropertiesResponse"
}
```
## Operation: getShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "ID of the requested Share"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShareResponse"
}
```
## Operation: getShareActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "ID of the Share"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShareActivityResponse"
}
```
## Operation: getShares
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "type": {
      "type": "string",
      "description": "The type of share to return: 'shared_folder', 'send', or 'receive'. If no argument specified, will return all Shares types."
    },
    "sortBy": {
      "type": "string",
      "description": "Sort by one of the following: 'sort_shares_name', 'sort_shares_date', 'sort_shares_user', 'sort_shares_access_mode'."
    },
    "sortOrder": {
      "type": "string",
      "description": "Sort by 'asc' or 'desc' order."
    },
    "filter": {
      "type": "string",
      "description": "Filter by the provided search terms."
    },
    "include": {
      "type": "string",
      "description": "Filter by all, active-only, or current user's only."
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start position of results to return, for pagination."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of elements to return or 0 if no limit."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SharesResponse"
}
```
## Operation: getUploadFileUrl
Requires access token obtained via the authenticateUser operation. Called before an upload is started to get URL to appropriate storage server. Available to users with the 'write' permission.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "fileSize": {
      "type": "integer",
      "format": "int64",
      "description": "Size of the file to upload, in bytes"
    },
    "destinationPath": {
      "type": "string",
      "description": "Path relative to account's home directory, including file name"
    },
    "allowOverwrite": {
      "type": "boolean",
      "description": "True if the file should be overwritten, false if different file names should be generated"
    },
    "resume": {
      "type": "boolean",
      "description": "True if upload resume is supported, false if it isn't"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "fileSize",
    "destinationPath"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlResponse"
}
```
## Operation: getUser
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "username": {
      "type": "string",
      "description": "Name of the subaccount user to get"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserResponse"
}
```
## Operation: getUsers
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission set

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "sortBy": {
      "type": "string",
      "description": "sort method ['sort_users_username' or 'sort_users_nickname' or 'sort_users_email' or 'sort_users_home_folder']"
    },
    "sortOrder": {
      "type": "string",
      "description": "sort order, i.e. 'asc' or 'desc'"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "sortBy",
    "sortOrder"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UsersResponse"
}
```
## Operation: logoutUser
Requires access token obtained via the authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: moveResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePaths": {
      "type": "array",
      "description": "Remote paths of the files or folders to move"
    },
    "destinationPath": {
      "type": "string",
      "description": "Remote destination path to move files/folders to"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePaths",
    "destinationPath"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModifiedResourcesResponse"
}
```
## Operation: previewFile
Requires access token obtained via authenticateUser operation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "path": {
      "type": "string",
      "description": "Path of the image relative to the user's home directory"
    },
    "size": {
      "type": "string",
      "description": "The size of the image: small, medium, large"
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "Overrides sizes. Sets to a specific width"
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "Overrides sizes. Sets to a specific height"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page number for the document"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "path",
    "size"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PreviewFileResponse"
}
```
## Operation: renameResource
Requires access token obtained via the authenticateUser operation. Available to users with the 'modify' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "filePath": {
      "type": "string",
      "description": "Remote path of the files or folder to rename"
    },
    "newName": {
      "type": "string",
      "description": "The new name of the file or folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "filePath",
    "newName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: updateNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The notification ID"
    },
    "path": {
      "type": "string",
      "description": "Full path of file/folder where notification is set."
    },
    "action": {
      "type": "string",
      "description": "Type of action to filter on: 'upload', 'download', 'delete', 'all'"
    },
    "usernames": {
      "type": "array",
      "description": "Array of usernames or with one flag to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'"
    },
    "emails": {
      "type": "array",
      "description": "Email addresses to send notification to. If not specified, sends to owner by default."
    },
    "sendEmail": {
      "type": "boolean",
      "description": "Set to true if the user should be notified by email when the notification is triggered."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: updateShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the Share to update."
    },
    "name": {
      "type": "string",
      "description": "Name of the Share."
    },
    "filePaths": {
      "type": "array",
      "description": "Array of strings containing the file paths to share."
    },
    "accessMode": {
      "type": "string",
      "description": "Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete."
    },
    "subject": {
      "type": "string",
      "description": "Share message subject (for email invitations)."
    },
    "message": {
      "type": "string",
      "description": "Share message contents (for email invitations)."
    },
    "emails": {
      "type": "array",
      "description": "Array of strings for email recipients (for email invitations)."
    },
    "ccEmail": {
      "type": "string",
      "description": "Specifies a CC email recipient."
    },
    "requireEmail": {
      "type": "boolean",
      "description": "Requires a user's email to access."
    },
    "embed": {
      "type": "boolean",
      "description": "Allows user to embed a widget with the share."
    },
    "isPublic": {
      "type": "boolean",
      "description": "True if share has a public URL, otherwise defaults to false"
    },
    "password": {
      "type": "string",
      "description": "If not null, value of password is required to access this Share"
    },
    "expiration": {
      "type": "string",
      "description": "The date the current Share should expire, formatted YYYY-mm-dd hh:mm:ss"
    },
    "hasNotification": {
      "type": "boolean",
      "description": "True if the user should be notified about activity on this Share."
    },
    "notificationEmails": {
      "type": "array",
      "description": "An array of recipients who should receive notification emails."
    },
    "fileDropCreateFolders": {
      "type": "boolean",
      "description": "If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: updateUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "userId": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID, must be obtained from getUser method first"
    },
    "username": {
      "type": "string",
      "description": "Name of the subaccount user to modify"
    },
    "nickname": {
      "type": "string",
      "description": "The user's nickname"
    },
    "expiration": {
      "type": "string",
      "description": "The date when use should expire in format: YYYY-mm-dd hh:mm:ss"
    },
    "email": {
      "type": "string",
      "description": "The user's email"
    },
    "destinationFolder": {
      "type": "string",
      "description": "The user's home folder"
    },
    "password": {
      "type": "string",
      "description": "The user's password"
    },
    "locked": {
      "type": "boolean",
      "description": "If true, the user's account is locked by default"
    },
    "role": {
      "type": "string",
      "description": "The user's role, i.e: 'user', 'admin', 'master'"
    },
    "permissions": {
      "type": "string",
      "description": "A CSV string of user permissions."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
## Operation: userAvailable
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_token": {
      "type": "string",
      "description": "Access token required to make the API call"
    },
    "username": {
      "type": "string",
      "description": "Username to check"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_token",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailableUserResponse"
}
```
