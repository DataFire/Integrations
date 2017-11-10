# @datafire/exavault

Client library for ExaVault

## Installation and Usage
```bash
npm install --save datafire @datafire/exavault
```

```js
let datafire = require('datafire');
let exavault = require('@datafire/exavault').create();

exavault.authenticateUser({}).then(data => {
  console.log(data);
})
```

## Description
ExaVault's API allows you to incorporate ExaVault's suite of file transfer and user management tools into your own application.

ExaVault supports both POST (recommended when requesting large data sets) and GET operations, and requires an API key in order to use.


## Actions
### authenticateUser
Returns access token in the Response object


```js
exavault.authenticateUser({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of of user to authenticate
* password (string) **required** - User's password

### checkFilesExist
Requires access token obtained via the authenticateUser operation


```js
exavault.checkFilesExist({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (array) **required** - Array containing paths of the files or folders to check

### copyResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.


```js
exavault.copyResources({
  "access_token": "",
  "filePaths": [],
  "destinationPath": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (array) **required** - Remote paths of the files or folders to copy
* destinationPath (string) **required** - Remote destination path to copy files/folders to

### createFolder
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.


```js
exavault.createFolder({
  "access_token": "",
  "folderName": "",
  "path": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* folderName (string) **required** - Name of the folder to create
* path (string) **required** - Where to create the folder

### createNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission


```js
exavault.createNotification({
  "access_token": "",
  "path": "",
  "action": "",
  "usernames": "",
  "sendEmail": true
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* path (string) **required** - Full path of file/folder where notification is set.
* action (string) **required** - Type of action to filter on: 'upload', 'download', 'delete', 'all'
* usernames (string) **required** - User type to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'
* sendEmail (boolean) **required** - Set to true if the user should be notified by email when the notification is triggered.
* emails (array) - Email addresses to send notification to. If not specified, sends to owner by default.

### createShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.createShare({
  "access_token": "",
  "type": "",
  "name": "",
  "filePaths": []
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* type (string) **required** - The type of share to create: shared_folder, send, receive.
* name (string) **required** - Name of the Share.
* filePaths (array) **required** - Array of strings containing the file paths to share.
* subject (string) - Share message subject (for email invitations).
* message (string) - Share message contents (for email invitations).
* emails (array) - Array of strings for email recipients (for email invitations).
* ccEmail (string) - Specifies a CC email recipient.
* requireEmail (boolean) - Requires a user's email to access (defaults to false if not specified).
* accessMode (string) - Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete. Defaults to download if no option specified.
* embed (boolean) - Allows user to embed a widget with the share. Defaults to false if not specified.
* isPublic (boolean) - True if share has a public URL, otherwise defaults to false
* password (string) - If not null, value of password is required to access this Share
* expiration (string) - The date the current Share should expire, formatted YYYY-mm-dd
* hasNotification (boolean) - True if the user should be notified about activity on this Share.
* notificationEmails (array) - An array of recipients who should receive notification emails.
* fileDropCreateFolders (boolean) - If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)

### createUser
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission


```js
exavault.createUser({
  "access_token": "",
  "username": "",
  "destinationFolder": "",
  "email": "",
  "password": "",
  "role": "",
  "permissions": "",
  "timeZone": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* username (string) **required** - Name of the subaccount user to create
* destinationFolder (string) **required** - The user's home folder
* email (string) **required** - The user's email address
* password (string) **required** - The user's password
* role (string) **required** - The user's role, i.e: 'user' or 'admin'
* permissions (string) **required** - A CSV string of user permissions. The following values are supported: upload, download, delete, modify, list, changePassword, share, notification.
* timeZone (string) **required** - The user's timezone, used for accurate time display within SWFT. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values
* nickname (string) - The user's nickname
* expiration (string) - The date when the user should expire, formatted YYYY-mm-dd
* locked (boolean) - If true, the user's account is locked by default
* welcomeEmail (boolean) - If true, send a user email upon creation

### deleteNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission


```js
exavault.deleteNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - ID of the Notification to delete.

### deleteResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'delete' permission


```js
exavault.deleteResources({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (array) **required** - Array containing paths of the files or folder to delete

### deleteShare
Requires access token obtained via the authenticateUser operation. Available to users with 'share' permission


```js
exavault.deleteShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - ID of the Share to delete.

### deleteUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission


```js
exavault.deleteUser({
  "access_token": "",
  "username": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* username (string) **required** - Name of the subaccount user to delete

### getAccount
Requires access token obtained via the authenticateUser operation


```js
exavault.getAccount({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call

### getCurrentUser
Requires access token obtained via the authenticateUser operation


```js
exavault.getCurrentUser({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call

### getDownloadFileUrl
Requires access token obtained via the authenticateUser operation. URL points at the appropriate storage server for file download.


```js
exavault.getDownloadFileUrl({
  "access_token": "",
  "filePaths": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (string) **required** - Path of file to be downloaded
* downloadName (string) - The name of the file to be downloaded

### getFileActivityLogs
Returns a list of account activity. Allows for searching the activity log.


```js
exavault.getFileActivityLogs({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* offset (integer) - Starting record in the result set. Can be used for pagination.
* sortBy (string) - Sort method ['sort_logs_date' or 'sort_logs_ip_address' or 'sort_logs_username' or 'sort_logs_file' or 'sort_logs_file_source' or 'sort_logs_operation', or 'sort_logs_duration', or 'sort_logs_size', or 'sort_logs_protocol']
* sortOrder (string) - Sort in either ascending or descending order: asc, desc
* filterBy (string) - Field to search on ['filter_logs_date' or 'filter_logs_ip_address' or 'filter_logs_username' or 'filter_logs_operation' or 'filter_logs_file']
* filter (string) - Search criteria. For date ranges, use format 'start_date::end_date'
* itemLimit (integer) - Number of logs to return. Can be used for pagination.

### getFolders
Requires access token obtained via the authenticateUser operation


```js
exavault.getFolders({
  "access_token": "",
  "path": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* path (string) **required** - The remote file path

### getNotification
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - ID of the Notification

### getNotificationActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotificationActivity({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call

### getNotifications
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotifications({
  "access_token": "",
  "type": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* type (string) **required** - Type of notification to filter on: 'file', 'folder', 'shared_folder', 'send_receipt', 'share_receipt', 'file_drop'
* sortBy (string) - Sort by one of the following: 'sort_notifications_folder_name', 'sort_notifications_path', 'sort_notifications_date'
* sortOrder (string) - Sort by 'asc' or 'desc' order.
* filter (string) - Filter by the provided search terms.

### getResourceList
Requires access token obtained via the authenticateUser operation. Available to users with 'list files' permission.


```js
exavault.getResourceList({
  "access_token": "",
  "path": "",
  "sortBy": "",
  "sortOrder": "",
  "offset": 0,
  "limit": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* path (string) **required** - The remote file path
* sortBy (string) **required** - Sort according to attribute: sort_files_name, sort_files_size, sort_files_date, sort_files_type, sort_files_timeline
* sortOrder (string) **required** - Sort in either ascending or descending order: asc, desc
* offset (integer) **required** - Determines which item to start on for pagination
* limit (integer) **required** - The number of files to limit the result
* detailed (boolean) - If true, returns sharedFolder, notifications or other objects associated with specified path
* pattern (string) - Regex string. If not null, perform a search with specified pattern

### getResourceProperties
Requires access token obtained via the authenticateUser operation


```js
exavault.getResourceProperties({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (array) **required** - Array containing paths of the files or folder to get

### getShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - ID of the requested Share

### getShareActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShareActivity({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - ID of the Share

### getShares
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShares({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* type (string) - The type of share to return: 'shared_folder', 'send', or 'receive'. If no argument specified, will return all Shares types.
* sortBy (string) - Sort by one of the following: 'sort_shares_name', 'sort_shares_date', 'sort_shares_user', 'sort_shares_access_mode'.
* sortOrder (string) - Sort by 'asc' or 'desc' order.
* filter (string) - Filter by the provided search terms.
* include (string) - Filter by all, active-only, or current user's only.
* offset (integer) - Start position of results to return, for pagination.
* limit (integer) - Maximum number of elements to return or 0 if no limit.

### getUploadFileUrl
Requires access token obtained via the authenticateUser operation. Called before an upload is started to get URL to appropriate storage server. Available to users with the 'write' permission.


```js
exavault.getUploadFileUrl({
  "access_token": "",
  "fileSize": 0,
  "destinationPath": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* fileSize (integer) **required** - Size of the file to upload, in bytes
* destinationPath (string) **required** - Path relative to account's home directory, including file name
* allowOverwrite (boolean) - True if the file should be overwritten, false if different file names should be generated
* resume (boolean) - True if upload resume is supported, false if it isn't

### getUser
Requires access token obtained via the authenticateUser operation


```js
exavault.getUser({
  "access_token": "",
  "username": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* username (string) **required** - Name of the subaccount user to get

### getUsers
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission set


```js
exavault.getUsers({
  "access_token": "",
  "sortBy": "",
  "sortOrder": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* sortBy (string) **required** - sort method ['sort_users_username' or 'sort_users_nickname' or 'sort_users_email' or 'sort_users_home_folder']
* sortOrder (string) **required** - sort order, i.e. 'asc' or 'desc'

### logoutUser
Requires access token obtained via the authenticateUser operation


```js
exavault.logoutUser({
  "access_token": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call

### moveResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission


```js
exavault.moveResources({
  "access_token": "",
  "filePaths": [],
  "destinationPath": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePaths (array) **required** - Remote paths of the files or folders to move
* destinationPath (string) **required** - Remote destination path to move files/folders to

### previewFile
Requires access token obtained via authenticateUser operation


```js
exavault.previewFile({
  "access_token": "",
  "path": "",
  "size": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* path (string) **required** - Path of the image relative to the user's home directory
* size (string) **required** - The size of the image: small, medium, large
* width (integer) - Overrides sizes. Sets to a specific width
* height (integer) - Overrides sizes. Sets to a specific height
* page (integer) - Page number for the document

### renameResource
Requires access token obtained via the authenticateUser operation. Available to users with the 'modify' permission


```js
exavault.renameResource({
  "access_token": "",
  "filePath": "",
  "newName": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* filePath (string) **required** - Remote path of the files or folder to rename
* newName (string) **required** - The new name of the file or folder

### updateNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission


```js
exavault.updateNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - The notification ID
* path (string) - Full path of file/folder where notification is set.
* action (string) - Type of action to filter on: 'upload', 'download', 'delete', 'all'
* usernames (string) - User type to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'
* emails (array) - Email addresses to send notification to. If not specified, sends to owner by default.
* sendEmail (boolean) - Set to true if the user should be notified by email when the notification is triggered.

### updateShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.updateShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* id (integer) **required** - The ID of the Share to update.
* name (string) - Name of the Share.
* filePaths (array) - Array of strings containing the file paths to share.
* subject (string) - Share message subject (for email invitations).
* message (string) - Share message contents (for email invitations).
* emails (array) - Array of strings for email recipients (for email invitations).
* ccEmail (string) - Specifies a CC email recipient.
* requireEmail (boolean) - Requires a user's email to access.
* accessMode (string) - Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete.
* embed (boolean) - Allows user to embed a widget with the share.
* isPublic (boolean) - True if share has a public URL, otherwise defaults to false
* password (string) - If not null, value of password is required to access this Share
* expiration (string) - The date the current Share should expire, formatted YYYY-mm-dd
* hasNotification (boolean) - True if the user should be notified about activity on this Share.
* notificationEmails (array) - An array of recipients who should receive notification emails.
* fileDropCreateFolders (boolean) - If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)

### updateUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission


```js
exavault.updateUser({
  "access_token": "",
  "userId": 0
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* userId (integer) **required** - The user ID, must be obtained from getUser method first
* username (string) - Name of the subaccount user to modify
* nickname (string) - The user's nickname
* expiration (string) - The date when use should expire in format: YYYY-MM-DD
* email (string) - The user's email
* destinationFolder (string) - The user's home folder
* password (string) - The user's password
* locked (boolean) - If true, the user's account is locked by default
* role (string) - The user's role, i.e: 'user', 'admin', 'master'
* permissions (string) - A CSV string of user permissions.

### userAvailable
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission


```js
exavault.userAvailable({
  "access_token": "",
  "username": ""
}, context)
```

#### Parameters
* access_token (string) **required** - Access token required to make the API call
* username (string) **required** - Username to check

