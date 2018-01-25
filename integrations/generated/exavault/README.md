# @datafire/exavault

Client library for ExaVault

## Installation and Usage
```bash
npm install --save @datafire/exavault
```
```js
let exavault = require('@datafire/exavault').create();

exavault.authenticateUser({
  "username": "",
  "password": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * username **required** `string`: Name of of user to authenticate
  * password **required** `string`: User's password

#### Output
* output [AuthResponse](#authresponse)

### checkFilesExist
Requires access token obtained via the authenticateUser operation


```js
exavault.checkFilesExist({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `array`: Array containing paths of the files or folders to check

#### Output
* output [ExistingResourcesResponse](#existingresourcesresponse)

### copyResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.


```js
exavault.copyResources({
  "access_token": "",
  "filePaths": [],
  "destinationPath": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `array`: Remote paths of the files or folders to copy
  * destinationPath **required** `string`: Remote destination path to copy files/folders to

#### Output
* output [ModifiedResourcesResponse](#modifiedresourcesresponse)

### createFolder
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission.


```js
exavault.createFolder({
  "access_token": "",
  "folderName": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * folderName **required** `string`: Name of the folder to create
  * path **required** `string`: Where to create the folder

#### Output
* output [Response](#response)

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

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * path **required** `string`: Full path of file/folder where notification is set.
  * action **required** `string`: Type of action to filter on: 'upload', 'download', 'delete', 'all'
  * usernames **required** `string`: User type to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'
  * sendEmail **required** `boolean`: Set to true if the user should be notified by email when the notification is triggered.
  * emails `array`: Email addresses to send notification to. If not specified, sends to owner by default.

#### Output
* output [Response](#response)

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

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * type **required** `string`: The type of share to create: shared_folder, send, receive.
  * name **required** `string`: Name of the Share.
  * filePaths **required** `array`: Array of strings containing the file paths to share.
  * subject `string`: Share message subject (for email invitations).
  * message `string`: Share message contents (for email invitations).
  * emails `array`: Array of strings for email recipients (for email invitations).
  * ccEmail `string`: Specifies a CC email recipient.
  * requireEmail `boolean`: Requires a user's email to access (defaults to false if not specified).
  * accessMode `string`: Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete. Defaults to download if no option specified.
  * embed `boolean`: Allows user to embed a widget with the share. Defaults to false if not specified.
  * isPublic `boolean`: True if share has a public URL, otherwise defaults to false
  * password `string`: If not null, value of password is required to access this Share
  * expiration `string`: The date the current Share should expire, formatted YYYY-mm-dd
  * hasNotification `boolean`: True if the user should be notified about activity on this Share.
  * notificationEmails `array`: An array of recipients who should receive notification emails.
  * fileDropCreateFolders `boolean`: If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)

#### Output
* output [Response](#response)

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

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * username **required** `string`: Name of the subaccount user to create
  * destinationFolder **required** `string`: The user's home folder
  * email **required** `string`: The user's email address
  * password **required** `string`: The user's password
  * role **required** `string`: The user's role, i.e: 'user' or 'admin'
  * permissions **required** `string`: A CSV string of user permissions. The following values are supported: upload, download, delete, modify, list, changePassword, share, notification.
  * timeZone **required** `string`: The user's timezone, used for accurate time display within SWFT. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values
  * nickname `string`: The user's nickname
  * expiration `string`: The date when the user should expire, formatted YYYY-mm-dd
  * locked `boolean`: If true, the user's account is locked by default
  * welcomeEmail `boolean`: If true, send a user email upon creation

#### Output
* output [Response](#response)

### deleteNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission


```js
exavault.deleteNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: ID of the Notification to delete.

#### Output
* output [Response](#response)

### deleteResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'delete' permission


```js
exavault.deleteResources({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `array`: Array containing paths of the files or folder to delete

#### Output
* output [DeletedResourcesResponse](#deletedresourcesresponse)

### deleteShare
Requires access token obtained via the authenticateUser operation. Available to users with 'share' permission


```js
exavault.deleteShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: ID of the Share to delete.

#### Output
* output [Response](#response)

### deleteUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission


```js
exavault.deleteUser({
  "access_token": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * username **required** `string`: Name of the subaccount user to delete

#### Output
* output [Response](#response)

### getAccount
Requires access token obtained via the authenticateUser operation


```js
exavault.getAccount({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call

#### Output
* output [AccountResponse](#accountresponse)

### getCurrentUser
Requires access token obtained via the authenticateUser operation


```js
exavault.getCurrentUser({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call

#### Output
* output [UserResponse](#userresponse)

### getDownloadFileUrl
Requires access token obtained via the authenticateUser operation. URL points at the appropriate storage server for file download.


```js
exavault.getDownloadFileUrl({
  "access_token": "",
  "filePaths": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `string`: Path of file to be downloaded
  * downloadName `string`: The name of the file to be downloaded

#### Output
* output [UrlResponse](#urlresponse)

### getFileActivityLogs
Returns a list of account activity. Allows for searching the activity log.


```js
exavault.getFileActivityLogs({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * offset `integer`: Starting record in the result set. Can be used for pagination.
  * sortBy `string`: Sort method ['sort_logs_date' or 'sort_logs_ip_address' or 'sort_logs_username' or 'sort_logs_file' or 'sort_logs_file_source' or 'sort_logs_operation', or 'sort_logs_duration', or 'sort_logs_size', or 'sort_logs_protocol']
  * sortOrder `string`: Sort in either ascending or descending order: asc, desc
  * filterBy `string`: Field to search on ['filter_logs_date' or 'filter_logs_ip_address' or 'filter_logs_username' or 'filter_logs_operation' or 'filter_logs_file']
  * filter `string`: Search criteria. For date ranges, use format 'start_date::end_date'
  * itemLimit `integer`: Number of logs to return. Can be used for pagination.

#### Output
* output [LogResponse](#logresponse)

### getFolders
Requires access token obtained via the authenticateUser operation


```js
exavault.getFolders({
  "access_token": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * path **required** `string`: The remote file path

#### Output
* output [ResourcePropertiesResponse](#resourcepropertiesresponse)

### getNotification
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: ID of the Notification

#### Output
* output [NotificationResponse](#notificationresponse)

### getNotificationActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotificationActivity({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call

#### Output
* output [NotificationActivityResponse](#notificationactivityresponse)

### getNotifications
Requires access token obtained via the authenticateUser operation. Available to users with the 'notification' permission


```js
exavault.getNotifications({
  "access_token": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * type **required** `string`: Type of notification to filter on: 'file', 'folder', 'shared_folder', 'send_receipt', 'share_receipt', 'file_drop'
  * sortBy `string`: Sort by one of the following: 'sort_notifications_folder_name', 'sort_notifications_path', 'sort_notifications_date'
  * sortOrder `string`: Sort by 'asc' or 'desc' order.
  * filter `string`: Filter by the provided search terms.

#### Output
* output [NotificationsResponse](#notificationsresponse)

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

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * path **required** `string`: The remote file path
  * sortBy **required** `string`: Sort according to attribute: sort_files_name, sort_files_size, sort_files_date, sort_files_type, sort_files_timeline
  * sortOrder **required** `string`: Sort in either ascending or descending order: asc, desc
  * offset **required** `integer`: Determines which item to start on for pagination
  * limit **required** `integer`: The number of files to limit the result
  * detailed `boolean`: If true, returns sharedFolder, notifications or other objects associated with specified path
  * pattern `string`: Regex string. If not null, perform a search with specified pattern

#### Output
* output [ResourceResponse](#resourceresponse)

### getResourceProperties
Requires access token obtained via the authenticateUser operation


```js
exavault.getResourceProperties({
  "access_token": "",
  "filePaths": []
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `array`: Array containing paths of the files or folder to get

#### Output
* output [ResourcePropertiesResponse](#resourcepropertiesresponse)

### getShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: ID of the requested Share

#### Output
* output [ShareResponse](#shareresponse)

### getShareActivity
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShareActivity({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: ID of the Share

#### Output
* output [ShareActivityResponse](#shareactivityresponse)

### getShares
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.getShares({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * type `string`: The type of share to return: 'shared_folder', 'send', or 'receive'. If no argument specified, will return all Shares types.
  * sortBy `string`: Sort by one of the following: 'sort_shares_name', 'sort_shares_date', 'sort_shares_user', 'sort_shares_access_mode'.
  * sortOrder `string`: Sort by 'asc' or 'desc' order.
  * filter `string`: Filter by the provided search terms.
  * include `string`: Filter by all, active-only, or current user's only.
  * offset `integer`: Start position of results to return, for pagination.
  * limit `integer`: Maximum number of elements to return or 0 if no limit.

#### Output
* output [SharesResponse](#sharesresponse)

### getUploadFileUrl
Requires access token obtained via the authenticateUser operation. Called before an upload is started to get URL to appropriate storage server. Available to users with the 'write' permission.


```js
exavault.getUploadFileUrl({
  "access_token": "",
  "fileSize": 0,
  "destinationPath": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * fileSize **required** `integer`: Size of the file to upload, in bytes
  * destinationPath **required** `string`: Path relative to account's home directory, including file name
  * allowOverwrite `boolean`: True if the file should be overwritten, false if different file names should be generated
  * resume `boolean`: True if upload resume is supported, false if it isn't

#### Output
* output [UrlResponse](#urlresponse)

### getUser
Requires access token obtained via the authenticateUser operation


```js
exavault.getUser({
  "access_token": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * username **required** `string`: Name of the subaccount user to get

#### Output
* output [UserResponse](#userresponse)

### getUsers
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission set


```js
exavault.getUsers({
  "access_token": "",
  "sortBy": "",
  "sortOrder": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * sortBy **required** `string`: sort method ['sort_users_username' or 'sort_users_nickname' or 'sort_users_email' or 'sort_users_home_folder']
  * sortOrder **required** `string`: sort order, i.e. 'asc' or 'desc'

#### Output
* output [UsersResponse](#usersresponse)

### logoutUser
Requires access token obtained via the authenticateUser operation


```js
exavault.logoutUser({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call

#### Output
* output [Response](#response)

### moveResources
Requires access token obtained via the authenticateUser operation. Available to users with the 'upload' permission


```js
exavault.moveResources({
  "access_token": "",
  "filePaths": [],
  "destinationPath": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePaths **required** `array`: Remote paths of the files or folders to move
  * destinationPath **required** `string`: Remote destination path to move files/folders to

#### Output
* output [ModifiedResourcesResponse](#modifiedresourcesresponse)

### previewFile
Requires access token obtained via authenticateUser operation


```js
exavault.previewFile({
  "access_token": "",
  "path": "",
  "size": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * path **required** `string`: Path of the image relative to the user's home directory
  * size **required** `string`: The size of the image: small, medium, large
  * width `integer`: Overrides sizes. Sets to a specific width
  * height `integer`: Overrides sizes. Sets to a specific height
  * page `integer`: Page number for the document

#### Output
* output [PreviewFileResponse](#previewfileresponse)

### renameResource
Requires access token obtained via the authenticateUser operation. Available to users with the 'modify' permission


```js
exavault.renameResource({
  "access_token": "",
  "filePath": "",
  "newName": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * filePath **required** `string`: Remote path of the files or folder to rename
  * newName **required** `string`: The new name of the file or folder

#### Output
* output [Response](#response)

### updateNotification
Requires access token obtained via the authenticateUser operation. Available to users with 'notification' permission


```js
exavault.updateNotification({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: The notification ID
  * path `string`: Full path of file/folder where notification is set.
  * action `string`: Type of action to filter on: 'upload', 'download', 'delete', 'all'
  * usernames `string`: User type to filter on: 'notice_user_all', 'notice_user_all_recipients', 'notice_user_all_users'
  * emails `array`: Email addresses to send notification to. If not specified, sends to owner by default.
  * sendEmail `boolean`: Set to true if the user should be notified by email when the notification is triggered.

#### Output
* output [Response](#response)

### updateShare
Requires access token obtained via the authenticateUser operation. Available to users with the 'share' permission


```js
exavault.updateShare({
  "access_token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * id **required** `integer`: The ID of the Share to update.
  * name `string`: Name of the Share.
  * filePaths `array`: Array of strings containing the file paths to share.
  * subject `string`: Share message subject (for email invitations).
  * message `string`: Share message contents (for email invitations).
  * emails `array`: Array of strings for email recipients (for email invitations).
  * ccEmail `string`: Specifies a CC email recipient.
  * requireEmail `boolean`: Requires a user's email to access.
  * accessMode `string`: Type of permissions share recipients have: upload, download, download_upload, download_upload_modify, download_upload_modify_delete.
  * embed `boolean`: Allows user to embed a widget with the share.
  * isPublic `boolean`: True if share has a public URL, otherwise defaults to false
  * password `string`: If not null, value of password is required to access this Share
  * expiration `string`: The date the current Share should expire, formatted YYYY-mm-dd
  * hasNotification `boolean`: True if the user should be notified about activity on this Share.
  * notificationEmails `array`: An array of recipients who should receive notification emails.
  * fileDropCreateFolders `boolean`: If true, all receive folder submissions will be uploaded separate folders (only applicable for Receive folder types)

#### Output
* output [Response](#response)

### updateUser
Requires access token obtained via the authenticateUser operation. Available to users with 'manage users' permission


```js
exavault.updateUser({
  "access_token": "",
  "userId": 0
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * userId **required** `integer`: The user ID, must be obtained from getUser method first
  * username `string`: Name of the subaccount user to modify
  * nickname `string`: The user's nickname
  * expiration `string`: The date when use should expire in format: YYYY-MM-DD
  * email `string`: The user's email
  * destinationFolder `string`: The user's home folder
  * password `string`: The user's password
  * locked `boolean`: If true, the user's account is locked by default
  * role `string`: The user's role, i.e: 'user', 'admin', 'master'
  * permissions `string`: A CSV string of user permissions.

#### Output
* output [Response](#response)

### userAvailable
Requires access token obtained via the authenticateUser operation. Available to users with the 'manage users' permission


```js
exavault.userAvailable({
  "access_token": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access token required to make the API call
  * username **required** `string`: Username to check

#### Output
* output [AvailableUserResponse](#availableuserresponse)



## Definitions

### Account
* Account `object`
  * appliedTrial **required** `string`
  * bandwidthQuotaLimit **required** `integer`
  * bandwidthQuotaUsed **required** `integer`
  * branding **required** `boolean`
  * clientId **required** `integer`
  * complexPasswords **required** `boolean`
  * created **required** `string`
  * customDomain **required** `boolean`
  * diskQuotaLimit **required** `integer`
  * diskQuotaUsed **required** `integer`
  * externalDomains **required** `string`
  * freeTrial **required** `boolean`
  * id **required** `integer`
  * masterAccount **required** [User](#user)
  * maxUsers **required** `integer`
  * modified **required** `string`
  * planCode **required** `string`
  * quotaNoticeEnabled **required** `integer`
  * quotaNoticeThreshold **required** `integer`
  * redirect **required** `string`
  * secureOnly **required** `boolean`
  * showReferralLinks **required** `boolean`
  * status **required** `integer`
  * userCount **required** `integer`
  * username **required** `string`

### AccountResponse
* AccountResponse `object`
  * error **required** [Error](#error)
  * results **required** [Account](#account)
  * success **required** `integer`

### Auth
* Auth `object`
  * accessToken **required** `string`
  * clientIp **required** `string`
  * mode **required** `integer`
  * username **required** `string`

### AuthResponse
* AuthResponse `object`
  * error **required** [Error](#error)
  * results **required** [Auth](#auth)
  * success **required** `integer`

### AvailableUser
* AvailableUser `object`
  * available **required** `boolean`

### AvailableUserResponse
* AvailableUserResponse `object`
  * error **required** [Error](#error)
  * results **required** [AvailableUser](#availableuser)
  * success **required** `integer`

### DeletedResource
* DeletedResource `object`
  * file **required** `string`
  * size **required** `integer`
  * success **required** `integer`

### DeletedResourcesResponse
* DeletedResourcesResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [DeletedResource](#deletedresource)
  * success **required** `integer`

### Error
* Error `object`
  * code **required** `integer`
  * message **required** `string`

### ExistingResource
* ExistingResource `object`
  * exists **required** `boolean`
  * resource **required** [ResourceProperty](#resourceproperty)

### ExistingResourcesResponse
* ExistingResourcesResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [ExistingResource](#existingresource)
  * success **required** `integer`

### LogEntry
* LogEntry `object`
  * bytesTransferred **required** `integer`
  * created **required** `string`
  * duration **required** `string`
  * fileName **required** `string`
  * fileSource **required** `string`
  * id **required** `integer`
  * ipAddress **required** `string`
  * operation **required** `string`
  * protocol **required** `string`
  * sessionId **required** `string`
  * status **required** `string`
  * username **required** `string`

### LogResponse
* LogResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [LogEntry](#logentry)
  * success **required** `integer`

### Message
* Message `object`
  * body **required** `string`
  * created **required** `string`
  * id **required** `integer`
  * modified **required** `string`
  * shareId **required** `string`
  * subject **required** `string`
  * userId **required** `integer`

### ModifiedResource
* ModifiedResource `object`
  * destination **required** `string`
  * file **required** `string`
  * size **required** `integer`
  * success **required** `integer`

### ModifiedResourcesResponse
* ModifiedResourcesResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [ModifiedResource](#modifiedresource)
  * success **required** `integer`

### Notification
* Notification `object`
  * action **required** `string`
  * created **required** `string`
  * id **required** `integer`
  * modified **required** `string`
  * name **required** `string`
  * path **required** `string`
  * readableDescription **required** `string`
  * readableDescriptionWithoutPath **required** `string`
  * recipientEmails **required** `array`
    * items `string`
  * recipients **required** `array`
    * items [Recipient](#recipient)
  * sendEmail **required** `string`
  * shareId **required** `string`
  * type **required** `string`
  * userId **required** `string`
  * usernames **required** `array`
    * items `string`

### NotificationActivityResponse
* NotificationActivityResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [NotificationMessage](#notificationmessage)
  * success **required** `integer`

### NotificationMessage
* NotificationMessage `object`
  * action **required** `string`
  * created **required** `string`
  * id **required** `integer`
  * message **required** `string`
  * notificationSetting **required** [Notification](#notification)
  * path **required** `string`
  * read **required** `boolean`
  * sent **required** `boolean`
  * username **required** `string`

### NotificationResponse
* NotificationResponse `object`
  * error **required** [Error](#error)
  * results **required** [Notification](#notification)
  * success **required** `integer`

### NotificationsResponse
* NotificationsResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [Notification](#notification)
  * success **required** `integer`

### PreviewFile
* PreviewFile `object`
  * image **required** `string`
  * imageId **required** `string`
  * size **required** `integer`

### PreviewFileResponse
* PreviewFileResponse `object`
  * error **required** [Error](#error)
  * results **required** [PreviewFile](#previewfile)
  * success **required** `integer`

### Recipient
* Recipient `object`
  * created **required** `string`
  * email **required** `string`
  * hash **required** `string`
  * id **required** `integer`
  * received **required** `boolean`
  * sent **required** `boolean`
  * shareId **required** `string`
  * type **required** `string`

### Resource
* Resource `object`
  * inheritedNotifications **required** `string`
  * inheritedShares **required** `string`
  * resources **required** `array`
    * items [ResourceProperty](#resourceproperty)
  * totalFiles **required** `integer`

### ResourcePropertiesResponse
* ResourcePropertiesResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [ResourceProperty](#resourceproperty)
  * success **required** `integer`

### ResourceProperty
* ResourceProperty `object`
  * createdBy **required** `string`
  * file **required** `string`
  * fileCount **required** `integer`
  * name **required** `string`
  * notificationSettings **required** `string`
  * parent **required** `string`
  * path **required** `string`
  * previewable **required** `boolean`
  * shares **required** `array`
    * items [Share](#share)
  * size **required** `integer`
  * type `string`
  * uploadDate **required** `string`

### ResourceResponse
* ResourceResponse `object`
  * error **required** [Error](#error)
  * results **required** [Resource](#resource)
  * success **required** `integer`

### Response
* Response `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items `string`
  * success **required** `integer`

### Share
* Share `object`
  * accessDescription **required** `string`
  * accessMode **required** `string`
  * created **required** `string`
  * embed **required** `boolean`
  * expiration **required** `string`
  * expired **required** `string`
  * fileDropCreateFolders **required** `boolean`
  * hasNotification **required** `boolean`
  * hasPassword **required** `boolean`
  * hash **required** `string`
  * id **required** `integer`
  * inherited **required** `boolean`
  * isPublic **required** `boolean`
  * messages **required** `array`
    * items [Message](#message)
  * modified **required** `string`
  * name **required** `string`
  * notification **required** `string`
  * owner **required** `integer`
  * ownerHash **required** `string`
  * ownerUsername **required** `string`
  * paths **required** `array`
    * items `string`
  * recipients **required** `array`
    * items [Recipient](#recipient)
  * recipientsWithOwner **required** `array`
    * items [Recipient](#recipient)
  * requireEmail **required** `boolean`
  * resent **required** `boolean`
  * status **required** `integer`
  * trackingStatus **required** `string`
  * type **required** `string`

### ShareActivityResponse
* ShareActivityResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [ShareLogEntry](#sharelogentry)
  * success **required** `integer`

### ShareLogEntry
* ShareLogEntry `object`
  * action **required** `string`
  * actionObjectId **required** `string`
  * created **required** `string`
  * detail **required** `string`
  * id **required** `integer`
  * shareId **required** `string`
  * username **required** `string`

### ShareResponse
* ShareResponse `object`
  * error **required** [Error](#error)
  * results **required** [Share](#share)
  * success **required** `integer`

### SharesResponse
* SharesResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [Share](#share)
  * success **required** `integer`

### Url
* Url `object`
  * offset `integer`
  * url **required** `string`

### UrlResponse
* UrlResponse `object`
  * error **required** [Error](#error)
  * results **required** [Url](#url)
  * success **required** `integer`

### User
* User `object`
  * accessTimestamp **required** `string`
  * changePassword **required** `boolean`
  * created **required** `string`
  * delete **required** `boolean`
  * download **required** `boolean`
  * email **required** `string`
  * expiration **required** `string`
  * gid **required** `integer`
  * homeDir **required** `string`
  * id **required** `integer`
  * list **required** `boolean`
  * modified **required** `string`
  * modify **required** `boolean`
  * nickname **required** `string`
  * notification **required** `boolean`
  * owningAccountId **required** `integer`
  * role **required** `string`
  * share **required** `boolean`
  * status **required** `integer`
  * timeZone **required** `string`
  * upload **required** `boolean`
  * username **required** `string`

### UserResponse
* UserResponse `object`
  * error **required** [Error](#error)
  * results **required** [User](#user)
  * success **required** `integer`

### UsersResponse
* UsersResponse `object`
  * error **required** [Error](#error)
  * results **required** `array`
    * items [User](#user)
  * success **required** `integer`


