# @datafire/google_drive

Client library for Drive API

## Installation and Usage
```bash
npm install --save @datafire/google_drive
```
```js
let google_drive = require('@datafire/google_drive').create({
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

Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_drive.oauthCallback({
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
google_drive.oauthRefresh(null, context)
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

### drive.about.get
Gets information about the user, the user's Drive, and system capabilities.


```js
google_drive.drive.about.get({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [About](#about)

### drive.changes.list
Lists the changes for a user or shared drive.


```js
google_drive.drive.changes.list({
  "pageToken": ""
}, context)
```

#### Input
* input `object`
  * pageToken **required** `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
  * driveId `string`: The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
  * includeCorpusRemovals `boolean`: Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
  * includeItemsFromAllDrives `boolean`: Whether both My Drive and shared drive items should be included in results.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * includeRemoved `boolean`: Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
  * includeTeamDriveItems `boolean`: Deprecated use includeItemsFromAllDrives instead.
  * pageSize `integer`: The maximum number of changes to return per page.
  * restrictToMyDrive `boolean`: Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
  * spaces `string`: A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * teamDriveId `string`: Deprecated use driveId instead.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ChangeList](#changelist)

### drive.changes.getStartPageToken
Gets the starting pageToken for listing future changes.


```js
google_drive.drive.changes.getStartPageToken({}, context)
```

#### Input
* input `object`
  * driveId `string`: The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive is returned.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * teamDriveId `string`: Deprecated use driveId instead.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [StartPageToken](#startpagetoken)

### drive.changes.watch
Subscribes to changes for a user.


```js
google_drive.drive.changes.watch({
  "pageToken": ""
}, context)
```

#### Input
* input `object`
  * pageToken **required** `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
  * driveId `string`: The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
  * includeCorpusRemovals `boolean`: Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
  * includeItemsFromAllDrives `boolean`: Whether both My Drive and shared drive items should be included in results.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * includeRemoved `boolean`: Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
  * includeTeamDriveItems `boolean`: Deprecated use includeItemsFromAllDrives instead.
  * pageSize `integer`: The maximum number of changes to return per page.
  * restrictToMyDrive `boolean`: Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
  * spaces `string`: A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * teamDriveId `string`: Deprecated use driveId instead.
  * body [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Channel](#channel)

### drive.channels.stop
Stop watching resources through this channel


```js
google_drive.drive.channels.stop({}, context)
```

#### Input
* input `object`
  * body [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.drives.list
Lists the user's shared drives.


```js
google_drive.drive.drives.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of shared drives to return.
  * pageToken `string`: Page token for shared drives.
  * q `string`: Query string for searching shared drives.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DriveList](#drivelist)

### drive.drives.create
Creates a new shared drive.


```js
google_drive.drive.drives.create({
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * requestId **required** `string`: An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
  * body [Drive](#drive)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Drive](#drive)

### drive.drives.delete
Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.


```js
google_drive.drive.drives.delete({
  "driveId": ""
}, context)
```

#### Input
* input `object`
  * driveId **required** `string`: The ID of the shared drive.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.drives.get
Gets a shared drive's metadata by ID.


```js
google_drive.drive.drives.get({
  "driveId": ""
}, context)
```

#### Input
* input `object`
  * driveId **required** `string`: The ID of the shared drive.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Drive](#drive)

### drive.drives.update
Updates the metadate for a shared drive.


```js
google_drive.drive.drives.update({
  "driveId": ""
}, context)
```

#### Input
* input `object`
  * driveId **required** `string`: The ID of the shared drive.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
  * body [Drive](#drive)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Drive](#drive)

### drive.drives.hide
Hides a shared drive from the default view.


```js
google_drive.drive.drives.hide({
  "driveId": ""
}, context)
```

#### Input
* input `object`
  * driveId **required** `string`: The ID of the shared drive.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Drive](#drive)

### drive.drives.unhide
Restores a shared drive to the default view.


```js
google_drive.drive.drives.unhide({
  "driveId": ""
}, context)
```

#### Input
* input `object`
  * driveId **required** `string`: The ID of the shared drive.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Drive](#drive)

### drive.files.list
Lists or searches files.


```js
google_drive.drive.files.list({}, context)
```

#### Input
* input `object`
  * corpora `string`: Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'), 'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency.
  * corpus `string` (values: domain, user): The source of files to list. Deprecated: use 'corpora' instead.
  * driveId `string`: ID of the shared drive to search.
  * includeItemsFromAllDrives `boolean`: Whether both My Drive and shared drive items should be included in results.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * includeTeamDriveItems `boolean`: Deprecated use includeItemsFromAllDrives instead.
  * orderBy `string`: A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
  * pageSize `integer`: The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * q `string`: A query for filtering the file results. See the "Search for Files" guide for supported syntax.
  * spaces `string`: A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * teamDriveId `string`: Deprecated use driveId instead.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [FileList](#filelist)

### drive.files.create
Creates a new file.


```js
google_drive.drive.files.create({}, context)
```

#### Input
* input `object`
  * enforceSingleParent `boolean`: Deprecated. Creating files in multiple folders is no longer supported.
  * ignoreDefaultVisibility `boolean`: Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * useContentAsIndexableText `boolean`: Whether to use the uploaded content as indexable text.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [File](#file)

### drive.files.generateIds
Generates a set of file IDs which can be provided in create or copy requests.


```js
google_drive.drive.files.generateIds({}, context)
```

#### Input
* input `object`
  * count `integer`: The number of IDs to return.
  * space `string`: The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GeneratedIds](#generatedids)

### drive.files.emptyTrash
Permanently deletes all of the user's trashed files.


```js
google_drive.drive.files.emptyTrash({}, context)
```

#### Input
* input `object`
  * enforceSingleParent `boolean`: Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.files.delete
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.


```js
google_drive.drive.files.delete({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * enforceSingleParent `boolean`: Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.files.get
Gets a file's metadata or content by ID.


```js
google_drive.drive.files.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * acknowledgeAbuse `boolean`: Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [File](#file)

### drive.files.update
Updates a file's metadata and/or content. This method supports patch semantics.


```js
google_drive.drive.files.update({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * addParents `string`: A comma-separated list of parent IDs to add.
  * enforceSingleParent `boolean`: Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * removeParents `string`: A comma-separated list of parent IDs to remove.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * useContentAsIndexableText `boolean`: Whether to use the uploaded content as indexable text.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [File](#file)

### drive.comments.list
Lists a file's comments.


```js
google_drive.drive.comments.list({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * includeDeleted `boolean`: Whether to include deleted comments. Deleted comments will not include their original content.
  * pageSize `integer`: The maximum number of comments to return per page.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * startModifiedTime `string`: The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CommentList](#commentlist)

### drive.comments.create
Creates a new comment on a file.


```js
google_drive.drive.comments.create({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * body [Comment](#comment)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### drive.comments.delete
Deletes a comment.


```js
google_drive.drive.comments.delete({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.comments.get
Gets a comment by ID.


```js
google_drive.drive.comments.get({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * includeDeleted `boolean`: Whether to return deleted comments. Deleted comments will not include their original content.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### drive.comments.update
Updates a comment with patch semantics.


```js
google_drive.drive.comments.update({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * body [Comment](#comment)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Comment](#comment)

### drive.replies.list
Lists a comment's replies.


```js
google_drive.drive.replies.list({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * includeDeleted `boolean`: Whether to include deleted replies. Deleted replies will not include their original content.
  * pageSize `integer`: The maximum number of replies to return per page.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ReplyList](#replylist)

### drive.replies.create
Creates a new reply to a comment.


```js
google_drive.drive.replies.create({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * body [Reply](#reply)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Reply](#reply)

### drive.replies.delete
Deletes a reply.


```js
google_drive.drive.replies.delete({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * replyId **required** `string`: The ID of the reply.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.replies.get
Gets a reply by ID.


```js
google_drive.drive.replies.get({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * replyId **required** `string`: The ID of the reply.
  * includeDeleted `boolean`: Whether to return deleted replies. Deleted replies will not include their original content.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Reply](#reply)

### drive.replies.update
Updates a reply with patch semantics.


```js
google_drive.drive.replies.update({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * commentId **required** `string`: The ID of the comment.
  * replyId **required** `string`: The ID of the reply.
  * body [Reply](#reply)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Reply](#reply)

### drive.files.copy
Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.


```js
google_drive.drive.files.copy({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * enforceSingleParent `boolean`: Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.
  * ignoreDefaultVisibility `boolean`: Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [File](#file)

### drive.files.export
Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.


```js
google_drive.drive.files.export({
  "fileId": "",
  "mimeType": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * mimeType **required** `string`: The MIME type of the format requested for this export.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.permissions.list
Lists a file's or shared drive's permissions.


```js
google_drive.drive.permissions.list({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or shared drive.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * pageSize `integer`: The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PermissionList](#permissionlist)

### drive.permissions.create
Creates a permission for a file or shared drive.


```js
google_drive.drive.permissions.create({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or shared drive.
  * emailMessage `string`: A plain text custom message to include in the notification email.
  * enforceSingleParent `boolean`: Deprecated. See moveToNewOwnersRoot for details.
  * moveToNewOwnersRoot `boolean`: This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed.
  * sendNotificationEmail `boolean`: Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * transferOwnership `boolean`: Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
  * body [Permission](#permission)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Permission](#permission)

### drive.permissions.delete
Deletes a permission.


```js
google_drive.drive.permissions.delete({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or shared drive.
  * permissionId **required** `string`: The ID of the permission.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.permissions.get
Gets a permission by ID.


```js
google_drive.drive.permissions.get({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * permissionId **required** `string`: The ID of the permission.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Permission](#permission)

### drive.permissions.update
Updates a permission with patch semantics.


```js
google_drive.drive.permissions.update({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or shared drive.
  * permissionId **required** `string`: The ID of the permission.
  * removeExpiration `boolean`: Whether to remove the expiration date.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * transferOwnership `boolean`: Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
  * body [Permission](#permission)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Permission](#permission)

### drive.revisions.list
Lists a file's revisions.


```js
google_drive.drive.revisions.list({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * pageSize `integer`: The maximum number of revisions to return per page.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RevisionList](#revisionlist)

### drive.revisions.delete
Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.


```js
google_drive.drive.revisions.delete({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * revisionId **required** `string`: The ID of the revision.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.revisions.get
Gets a revision's metadata or content by ID.


```js
google_drive.drive.revisions.get({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * revisionId **required** `string`: The ID of the revision.
  * acknowledgeAbuse `boolean`: Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Revision](#revision)

### drive.revisions.update
Updates a revision with patch semantics.


```js
google_drive.drive.revisions.update({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * revisionId **required** `string`: The ID of the revision.
  * body [Revision](#revision)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Revision](#revision)

### drive.files.watch
Subscribes to changes to a file


```js
google_drive.drive.files.watch({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * acknowledgeAbuse `boolean`: Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
  * includePermissionsForView `string`: Specifies which additional view's permissions to include in the response. Only 'published' is supported.
  * supportsAllDrives `boolean`: Whether the requesting application supports both My Drives and shared drives.
  * supportsTeamDrives `boolean`: Deprecated use supportsAllDrives instead.
  * body [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Channel](#channel)

### drive.teamdrives.list
Deprecated use drives.list instead.


```js
google_drive.drive.teamdrives.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of Team Drives to return.
  * pageToken `string`: Page token for Team Drives.
  * q `string`: Query string for searching Team Drives.
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TeamDriveList](#teamdrivelist)

### drive.teamdrives.create
Deprecated use drives.create instead.


```js
google_drive.drive.teamdrives.create({
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * requestId **required** `string`: An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
  * body [TeamDrive](#teamdrive)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TeamDrive](#teamdrive)

### drive.teamdrives.delete
Deprecated use drives.delete instead.


```js
google_drive.drive.teamdrives.delete({
  "teamDriveId": ""
}, context)
```

#### Input
* input `object`
  * teamDriveId **required** `string`: The ID of the Team Drive
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### drive.teamdrives.get
Deprecated use drives.get instead.


```js
google_drive.drive.teamdrives.get({
  "teamDriveId": ""
}, context)
```

#### Input
* input `object`
  * teamDriveId **required** `string`: The ID of the Team Drive
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TeamDrive](#teamdrive)

### drive.teamdrives.update
Deprecated use drives.update instead


```js
google_drive.drive.teamdrives.update({
  "teamDriveId": ""
}, context)
```

#### Input
* input `object`
  * teamDriveId **required** `string`: The ID of the Team Drive
  * useDomainAdminAccess `boolean`: Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
  * body [TeamDrive](#teamdrive)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TeamDrive](#teamdrive)



## Definitions

### About
* About `object`: Information about the user, the user's Drive, and system capabilities.
  * appInstalled `boolean`: Whether the user has installed the requesting app.
  * canCreateDrives `boolean`: Whether the user can create shared drives.
  * canCreateTeamDrives `boolean`: Deprecated - use canCreateDrives instead.
  * driveThemes `array`: A list of themes that are supported for shared drives.
    * items `object`
      * backgroundImageLink `string`: A link to this theme's background image.
      * colorRgb `string`: The color of this theme as an RGB hex string.
      * id `string`: The ID of the theme.
  * exportFormats `object`: A map of source MIME type to possible targets for all supported exports.
  * folderColorPalette `array`: The currently supported folder colors as RGB hex strings.
    * items `string`
  * importFormats `object`: A map of source MIME type to possible targets for all supported imports.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#about".
  * maxImportSizes `object`: A map of maximum import sizes by MIME type, in bytes.
  * maxUploadSize `string`: The maximum upload size in bytes.
  * storageQuota `object`: The user's storage quota limits and usage. All fields are measured in bytes.
    * limit `string`: The usage limit, if applicable. This will not be present if the user has unlimited storage.
    * usage `string`: The total usage across all services.
    * usageInDrive `string`: The usage by all files in Google Drive.
    * usageInDriveTrash `string`: The usage by trashed files in Google Drive.
  * teamDriveThemes `array`: Deprecated - use driveThemes instead.
    * items `object`
      * backgroundImageLink `string`: Deprecated - use driveThemes/backgroundImageLink instead.
      * colorRgb `string`: Deprecated - use driveThemes/colorRgb instead.
      * id `string`: Deprecated - use driveThemes/id instead.
  * user [User](#user)

### Change
* Change `object`: A change to a file or shared drive.
  * changeType `string`: The type of the change. Possible values are file and drive.
  * drive [Drive](#drive)
  * driveId `string`: The ID of the shared drive associated with this change.
  * file [File](#file)
  * fileId `string`: The ID of the file which has changed.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#change".
  * removed `boolean`: Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
  * teamDrive [TeamDrive](#teamdrive)
  * teamDriveId `string`: Deprecated - use driveId instead.
  * time `string`: The time of this change (RFC 3339 date-time).
  * type `string`: Deprecated - use changeType instead.

### ChangeList
* ChangeList `object`: A list of changes for a user.
  * changes `array`: The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Change](#change)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#changeList".
  * newStartPageToken `string`: The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
  * nextPageToken `string`: The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.

### Channel
* Channel `object`: An notification channel used to watch for resource changes.
  * address `string`: The address where notifications are delivered for this channel.
  * expiration `string`: Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
  * id `string`: A UUID or similar unique string that identifies this channel.
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
  * params `object`: Additional parameters controlling delivery channel behavior. Optional.
  * payload `boolean`: A Boolean value to indicate whether payload is wanted. Optional.
  * resourceId `string`: An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
  * resourceUri `string`: A version-specific identifier for the watched resource.
  * token `string`: An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
  * type `string`: The type of delivery mechanism used for this channel.

### Comment
* Comment `object`: A comment on a file.
  * anchor `string`: A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
  * author [User](#user)
  * content `string`: The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.
  * createdTime `string`: The time at which the comment was created (RFC 3339 date-time).
  * deleted `boolean`: Whether the comment has been deleted. A deleted comment has no content.
  * htmlContent `string`: The content of the comment with HTML formatting.
  * id `string`: The ID of the comment.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#comment".
  * modifiedTime `string`: The last time the comment or any of its replies was modified (RFC 3339 date-time).
  * quotedFileContent `object`: The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
    * mimeType `string`: The MIME type of the quoted content.
    * value `string`: The quoted content itself. This is interpreted as plain text if set through the API.
  * replies `array`: The full list of replies to the comment in chronological order.
    * items [Reply](#reply)
  * resolved `boolean`: Whether the comment has been resolved by one of its replies.

### CommentList
* CommentList `object`: A list of comments on a file.
  * comments `array`: The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Comment](#comment)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
  * nextPageToken `string`: The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.

### ContentRestriction
* ContentRestriction `object`: A restriction for accessing the content of the file.
  * readOnly `boolean`: Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.
  * reason `string`: Reason for why the content of the file is restricted. This is only mutable on requests that also set readOnly=true.
  * restrictingUser [User](#user)
  * restrictionTime `string`: The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
  * type `string`: The type of the content restriction. Currently the only possible value is globalContentRestriction.

### Drive
* Drive `object`: Representation of a shared drive.
  * backgroundImageFile `object`: An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
    * id `string`: The ID of an image file in Google Drive to use for the background image.
    * width `number`: The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
    * xCoordinate `number`: The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
    * yCoordinate `number`: The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
  * backgroundImageLink `string`: A short-lived link to this shared drive's background image.
  * capabilities `object`: Capabilities the current user has on this shared drive.
    * canAddChildren `boolean`: Whether the current user can add children to folders in this shared drive.
    * canChangeCopyRequiresWriterPermissionRestriction `boolean`: Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive.
    * canChangeDomainUsersOnlyRestriction `boolean`: Whether the current user can change the domainUsersOnly restriction of this shared drive.
    * canChangeDriveBackground `boolean`: Whether the current user can change the background of this shared drive.
    * canChangeDriveMembersOnlyRestriction `boolean`: Whether the current user can change the driveMembersOnly restriction of this shared drive.
    * canComment `boolean`: Whether the current user can comment on files in this shared drive.
    * canCopy `boolean`: Whether the current user can copy files in this shared drive.
    * canDeleteChildren `boolean`: Whether the current user can delete children from folders in this shared drive.
    * canDeleteDrive `boolean`: Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.
    * canDownload `boolean`: Whether the current user can download files in this shared drive.
    * canEdit `boolean`: Whether the current user can edit files in this shared drive
    * canListChildren `boolean`: Whether the current user can list the children of folders in this shared drive.
    * canManageMembers `boolean`: Whether the current user can add members to this shared drive or remove them or change their role.
    * canReadRevisions `boolean`: Whether the current user can read the revisions resource of files in this shared drive.
    * canRename `boolean`: Whether the current user can rename files or folders in this shared drive.
    * canRenameDrive `boolean`: Whether the current user can rename this shared drive.
    * canShare `boolean`: Whether the current user can share files or folders in this shared drive.
    * canTrashChildren `boolean`: Whether the current user can trash children from folders in this shared drive.
  * colorRgb `string`: The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.
  * createdTime `string`: The time at which the shared drive was created (RFC 3339 date-time).
  * hidden `boolean`: Whether the shared drive is hidden from default view.
  * id `string`: The ID of this shared drive which is also the ID of the top level folder of this shared drive.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#drive".
  * name `string`: The name of this shared drive.
  * restrictions `object`: A set of restrictions that apply to this shared drive or items inside this shared drive.
    * adminManagedRestrictions `boolean`: Whether administrative privileges on this shared drive are required to modify restrictions.
    * copyRequiresWriterPermission `boolean`: Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.
    * domainUsersOnly `boolean`: Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.
    * driveMembersOnly `boolean`: Whether access to items inside this shared drive is restricted to its members.
  * themeId `string`: The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.

### DriveList
* DriveList `object`: A list of shared drives.
  * drives `array`: The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Drive](#drive)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#driveList".
  * nextPageToken `string`: The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.

### File
* File `object`: The metadata for a file.
  * appProperties `object`: A collection of arbitrary key-value pairs which are private to the requesting app.
  * capabilities `object`: Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
    * canAddChildren `boolean`: Whether the current user can add children to this folder. This is always false when the item is not a folder.
    * canAddFolderFromAnotherDrive `boolean`: Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.
    * canAddMyDriveParent `boolean`: Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.
    * canChangeCopyRequiresWriterPermission `boolean`: Whether the current user can change the copyRequiresWriterPermission restriction of this file.
    * canChangeViewersCanCopyContent `boolean`: Deprecated
    * canComment `boolean`: Whether the current user can comment on this file.
    * canCopy `boolean`: Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.
    * canDelete `boolean`: Whether the current user can delete this file.
    * canDeleteChildren `boolean`: Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.
    * canDownload `boolean`: Whether the current user can download this file.
    * canEdit `boolean`: Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent.
    * canListChildren `boolean`: Whether the current user can list the children of this folder. This is always false when the item is not a folder.
    * canModifyContent `boolean`: Whether the current user can modify the content of this file.
    * canModifyContentRestriction `boolean`: Whether the current user can modify restrictions on content of this file.
    * canMoveChildrenOutOfDrive `boolean`: Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.
    * canMoveChildrenOutOfTeamDrive `boolean`: Deprecated - use canMoveChildrenOutOfDrive instead.
    * canMoveChildrenWithinDrive `boolean`: Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.
    * canMoveChildrenWithinTeamDrive `boolean`: Deprecated - use canMoveChildrenWithinDrive instead.
    * canMoveItemIntoTeamDrive `boolean`: Deprecated - use canMoveItemOutOfDrive instead.
    * canMoveItemOutOfDrive `boolean`: Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.
    * canMoveItemOutOfTeamDrive `boolean`: Deprecated - use canMoveItemOutOfDrive instead.
    * canMoveItemWithinDrive `boolean`: Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.
    * canMoveItemWithinTeamDrive `boolean`: Deprecated - use canMoveItemWithinDrive instead.
    * canMoveTeamDriveItem `boolean`: Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead.
    * canReadDrive `boolean`: Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.
    * canReadRevisions `boolean`: Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.
    * canReadTeamDrive `boolean`: Deprecated - use canReadDrive instead.
    * canRemoveChildren `boolean`: Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead.
    * canRemoveMyDriveParent `boolean`: Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.
    * canRename `boolean`: Whether the current user can rename this file.
    * canShare `boolean`: Whether the current user can modify the sharing settings for this file.
    * canTrash `boolean`: Whether the current user can move this file to trash.
    * canTrashChildren `boolean`: Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.
    * canUntrash `boolean`: Whether the current user can restore this file from trash.
  * contentHints `object`: Additional information about the content of the file. These fields are never populated in responses.
    * indexableText `string`: Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.
    * thumbnail `object`: A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
      * image `string`: The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
      * mimeType `string`: The MIME type of the thumbnail.
  * contentRestrictions `array`: Restrictions for accessing the content of the file. Only populated if such a restriction exists.
    * items [ContentRestriction](#contentrestriction)
  * copyRequiresWriterPermission `boolean`: Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
  * createdTime `string`: The time at which the file was created (RFC 3339 date-time).
  * description `string`: A short description of the file.
  * driveId `string`: ID of the shared drive the file resides in. Only populated for items in shared drives.
  * explicitlyTrashed `boolean`: Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
  * exportLinks `object`: Links for exporting Docs Editors files to specific formats.
  * fileExtension `string`: The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
  * folderColorRgb `string`: The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
  * fullFileExtension `string`: The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
  * hasAugmentedPermissions `boolean`: Whether there are permissions directly on this file. This field is only populated for items in shared drives.
  * hasThumbnail `boolean`: Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
  * headRevisionId `string`: The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
  * iconLink `string`: A static, unauthenticated link to the file's icon.
  * id `string`: The ID of the file.
  * imageMediaMetadata `object`: Additional metadata about image media, if available.
    * aperture `number`: The aperture used to create the photo (f-number).
    * cameraMake `string`: The make of the camera used to create the photo.
    * cameraModel `string`: The model of the camera used to create the photo.
    * colorSpace `string`: The color space of the photo.
    * exposureBias `number`: The exposure bias of the photo (APEX value).
    * exposureMode `string`: The exposure mode used to create the photo.
    * exposureTime `number`: The length of the exposure, in seconds.
    * flashUsed `boolean`: Whether a flash was used to create the photo.
    * focalLength `number`: The focal length used to create the photo, in millimeters.
    * height `integer`: The height of the image in pixels.
    * isoSpeed `integer`: The ISO speed used to create the photo.
    * lens `string`: The lens used to create the photo.
    * location `object`: Geographic location information stored in the image.
      * altitude `number`: The altitude stored in the image.
      * latitude `number`: The latitude stored in the image.
      * longitude `number`: The longitude stored in the image.
    * maxApertureValue `number`: The smallest f-number of the lens at the focal length used to create the photo (APEX value).
    * meteringMode `string`: The metering mode used to create the photo.
    * rotation `integer`: The number of clockwise 90 degree rotations applied from the image's original orientation.
    * sensor `string`: The type of sensor used to create the photo.
    * subjectDistance `integer`: The distance to the subject of the photo, in meters.
    * time `string`: The date and time the photo was taken (EXIF DateTime).
    * whiteBalance `string`: The white balance mode used to create the photo.
    * width `integer`: The width of the image in pixels.
  * isAppAuthorized `boolean`: Whether the file was created or opened by the requesting app.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#file".
  * lastModifyingUser [User](#user)
  * md5Checksum `string`: The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
  * mimeType `string`: The MIME type of the file.
  * modifiedByMe `boolean`: Whether the file has been modified by this user.
  * modifiedByMeTime `string`: The last time the file was modified by the user (RFC 3339 date-time).
  * modifiedTime `string`: The last time the file was modified by anyone (RFC 3339 date-time).
  * name `string`: The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
  * originalFilename `string`: The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
  * ownedByMe `boolean`: Whether the user owns the file. Not populated for items in shared drives.
  * owners `array`: The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.
    * items [User](#user)
  * parents `array`: The IDs of the parent folders which contain the file.
    * items `string`
  * permissionIds `array`: List of permission IDs for users with access to this file.
    * items `string`
  * permissions `array`: The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
    * items [Permission](#permission)
  * properties `object`: A collection of arbitrary key-value pairs which are visible to all apps.
  * quotaBytesUsed `string`: The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
  * shared `boolean`: Whether the file has been shared. Not populated for items in shared drives.
  * sharedWithMeTime `string`: The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
  * sharingUser [User](#user)
  * shortcutDetails `object`: Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
    * targetId `string`: The ID of the file that this shortcut points to.
    * targetMimeType `string`: The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.
  * size `string`: The size of the file's content in bytes. This is applicable to binary files in Google Drive and Google Docs files.
  * spaces `array`: The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
    * items `string`
  * starred `boolean`: Whether the user has starred the file.
  * teamDriveId `string`: Deprecated - use driveId instead.
  * thumbnailLink `string`: A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.
  * thumbnailVersion `string`: The thumbnail version for use in thumbnail cache invalidation.
  * trashed `boolean`: Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
  * trashedTime `string`: The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
  * trashingUser [User](#user)
  * version `string`: A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
  * videoMediaMetadata `object`: Additional metadata about video media. This may not be available immediately upon upload.
    * durationMillis `string`: The duration of the video in milliseconds.
    * height `integer`: The height of the video in pixels.
    * width `integer`: The width of the video in pixels.
  * viewedByMe `boolean`: Whether the file has been viewed by this user.
  * viewedByMeTime `string`: The last time the file was viewed by the user (RFC 3339 date-time).
  * viewersCanCopyContent `boolean`: Deprecated - use copyRequiresWriterPermission instead.
  * webContentLink `string`: A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
  * webViewLink `string`: A link for opening the file in a relevant Google editor or viewer in a browser.
  * writersCanShare `boolean`: Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.

### FileList
* FileList `object`: A list of files.
  * files `array`: The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [File](#file)
  * incompleteSearch `boolean`: Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive".
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
  * nextPageToken `string`: The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.

### GeneratedIds
* GeneratedIds `object`: A list of generated file IDs which can be provided in create requests.
  * ids `array`: The IDs generated for the requesting user in the specified space.
    * items `string`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds".
  * space `string`: The type of file that can be created with these IDs.

### Permission
* Permission `object`: A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
  * allowFileDiscovery `boolean`: Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
  * deleted `boolean`: Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
  * displayName `string`: The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:  
  * domain `string`: The domain to which this permission refers.
  * emailAddress `string`: The email address of the user or group to which this permission refers.
  * expirationTime `string`: The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:  
  * id `string`: The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#permission".
  * permissionDetails `array`: Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
    * items `object`
      * inherited `boolean`: Whether this permission is inherited. This field is always populated. This is an output-only field.
      * inheritedFrom `string`: The ID of the item from which this permission is inherited. This is an output-only field.
      * permissionType `string`: The permission type for this user. While new values may be added in future, the following are currently possible:  
      * role `string`: The primary role for this user. While new values may be added in the future, the following are currently possible:  
  * photoLink `string`: A link to the user's profile photo, if available.
  * role `string`: The role granted by this permission. While new values may be supported in the future, the following are currently allowed:  
  * teamDrivePermissionDetails `array`: Deprecated - use permissionDetails instead.
    * items `object`
      * inherited `boolean`: Deprecated - use permissionDetails/inherited instead.
      * inheritedFrom `string`: Deprecated - use permissionDetails/inheritedFrom instead.
      * role `string`: Deprecated - use permissionDetails/role instead.
      * teamDrivePermissionType `string`: Deprecated - use permissionDetails/permissionType instead.
  * type `string`: The type of the grantee. Valid values are:  
  * view `string`: Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.

### PermissionList
* PermissionList `object`: A list of permissions for a file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
  * nextPageToken `string`: The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
  * permissions `array`: The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Permission](#permission)

### Reply
* Reply `object`: A reply to a comment on a file.
  * action `string`: The action the reply performed to the parent comment. Valid values are:  
  * author [User](#user)
  * content `string`: The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified.
  * createdTime `string`: The time at which the reply was created (RFC 3339 date-time).
  * deleted `boolean`: Whether the reply has been deleted. A deleted reply has no content.
  * htmlContent `string`: The content of the reply with HTML formatting.
  * id `string`: The ID of the reply.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#reply".
  * modifiedTime `string`: The last time the reply was modified (RFC 3339 date-time).

### ReplyList
* ReplyList `object`: A list of replies to a comment on a file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
  * nextPageToken `string`: The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
  * replies `array`: The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Reply](#reply)

### Revision
* Revision `object`: The metadata for a revision to a file.
  * exportLinks `object`: Links for exporting Docs Editors files to specific formats.
  * id `string`: The ID of the revision.
  * keepForever `boolean`: Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#revision".
  * lastModifyingUser [User](#user)
  * md5Checksum `string`: The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.
  * mimeType `string`: The MIME type of the revision.
  * modifiedTime `string`: The last time the revision was modified (RFC 3339 date-time).
  * originalFilename `string`: The original filename used to create this revision. This is only applicable to files with binary content in Drive.
  * publishAuto `boolean`: Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.
  * published `boolean`: Whether this revision is published. This is only applicable to Docs Editors files.
  * publishedLink `string`: A link to the published revision. This is only populated for Google Sites files.
  * publishedOutsideDomain `boolean`: Whether this revision is published outside the domain. This is only applicable to Docs Editors files.
  * size `string`: The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.

### RevisionList
* RevisionList `object`: A list of revisions of a file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
  * nextPageToken `string`: The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
  * revisions `array`: The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [Revision](#revision)

### StartPageToken
* StartPageToken `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
  * startPageToken `string`: The starting page token for listing changes.

### TeamDrive
* TeamDrive `object`: Deprecated: use the drive collection instead.
  * backgroundImageFile `object`: An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
    * id `string`: The ID of an image file in Drive to use for the background image.
    * width `number`: The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
    * xCoordinate `number`: The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
    * yCoordinate `number`: The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
  * backgroundImageLink `string`: A short-lived link to this Team Drive's background image.
  * capabilities `object`: Capabilities the current user has on this Team Drive.
    * canAddChildren `boolean`: Whether the current user can add children to folders in this Team Drive.
    * canChangeCopyRequiresWriterPermissionRestriction `boolean`: Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive.
    * canChangeDomainUsersOnlyRestriction `boolean`: Whether the current user can change the domainUsersOnly restriction of this Team Drive.
    * canChangeTeamDriveBackground `boolean`: Whether the current user can change the background of this Team Drive.
    * canChangeTeamMembersOnlyRestriction `boolean`: Whether the current user can change the teamMembersOnly restriction of this Team Drive.
    * canComment `boolean`: Whether the current user can comment on files in this Team Drive.
    * canCopy `boolean`: Whether the current user can copy files in this Team Drive.
    * canDeleteChildren `boolean`: Whether the current user can delete children from folders in this Team Drive.
    * canDeleteTeamDrive `boolean`: Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.
    * canDownload `boolean`: Whether the current user can download files in this Team Drive.
    * canEdit `boolean`: Whether the current user can edit files in this Team Drive
    * canListChildren `boolean`: Whether the current user can list the children of folders in this Team Drive.
    * canManageMembers `boolean`: Whether the current user can add members to this Team Drive or remove them or change their role.
    * canReadRevisions `boolean`: Whether the current user can read the revisions resource of files in this Team Drive.
    * canRemoveChildren `boolean`: Deprecated - use canDeleteChildren or canTrashChildren instead.
    * canRename `boolean`: Whether the current user can rename files or folders in this Team Drive.
    * canRenameTeamDrive `boolean`: Whether the current user can rename this Team Drive.
    * canShare `boolean`: Whether the current user can share files or folders in this Team Drive.
    * canTrashChildren `boolean`: Whether the current user can trash children from folders in this Team Drive.
  * colorRgb `string`: The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
  * createdTime `string`: The time at which the Team Drive was created (RFC 3339 date-time).
  * id `string`: The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive".
  * name `string`: The name of this Team Drive.
  * restrictions `object`: A set of restrictions that apply to this Team Drive or items inside this Team Drive.
    * adminManagedRestrictions `boolean`: Whether administrative privileges on this Team Drive are required to modify restrictions.
    * copyRequiresWriterPermission `boolean`: Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive.
    * domainUsersOnly `boolean`: Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.
    * teamMembersOnly `boolean`: Whether access to items inside this Team Drive is restricted to members of this Team Drive.
  * themeId `string`: The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.

### TeamDriveList
* TeamDriveList `object`: A list of Team Drives.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList".
  * nextPageToken `string`: The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
  * teamDrives `array`: The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [TeamDrive](#teamdrive)

### User
* User `object`: Information about a Drive user.
  * displayName `string`: A plain text displayable name for this user.
  * emailAddress `string`: The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#user".
  * me `boolean`: Whether this user is the requesting user.
  * permissionId `string`: The user's ID as visible in Permission resources.
  * photoLink `string`: A link to the user's profile photo, if available.


