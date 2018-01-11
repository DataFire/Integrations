# @datafire/google_drive

Client library for Drive

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

google_drive.teamdrives.list({}).then(data => {
  console.log(data);
})
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

### about.get
Gets information about the user, the user's Drive, and system capabilities.


```js
google_drive.about.get({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [About](#about)

### changes.list
Lists the changes for a user or Team Drive.


```js
google_drive.changes.list({
  "pageToken": ""
}, context)
```

#### Input
* input `object`
  * pageToken **required** `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
  * includeCorpusRemovals `boolean`: Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
  * includeRemoved `boolean`: Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
  * includeTeamDriveItems `boolean`: Whether Team Drive files or changes should be included in results.
  * pageSize `integer`: The maximum number of changes to return per page.
  * restrictToMyDrive `boolean`: Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
  * spaces `string`: A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * teamDriveId `string`: The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ChangeList](#changelist)

### changes.getStartPageToken
Gets the starting pageToken for listing future changes.


```js
google_drive.changes.getStartPageToken({}, context)
```

#### Input
* input `object`
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * teamDriveId `string`: The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StartPageToken](#startpagetoken)

### changes.watch
Subscribes to changes for a user.


```js
google_drive.changes.watch({
  "pageToken": ""
}, context)
```

#### Input
* input `object`
  * pageToken **required** `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
  * includeCorpusRemovals `boolean`: Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
  * includeRemoved `boolean`: Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
  * includeTeamDriveItems `boolean`: Whether Team Drive files or changes should be included in results.
  * pageSize `integer`: The maximum number of changes to return per page.
  * restrictToMyDrive `boolean`: Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
  * spaces `string`: A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * teamDriveId `string`: The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### channels.stop
Stop watching resources through this channel


```js
google_drive.channels.stop({}, context)
```

#### Input
* input `object`
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### files.list
Lists or searches files.


```js
google_drive.files.list({}, context)
```

#### Input
* input `object`
  * corpora `string`: Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.
  * corpus `string` (values: domain, user): The source of files to list. Deprecated: use 'corpora' instead.
  * includeTeamDriveItems `boolean`: Whether Team Drive items should be included in results.
  * orderBy `string`: A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
  * pageSize `integer`: The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * q `string`: A query for filtering the file results. See the "Search for Files" guide for supported syntax.
  * spaces `string`: A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * teamDriveId `string`: ID of Team Drive to search.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FileList](#filelist)

### files.create
Creates a new file.


```js
google_drive.files.create({}, context)
```

#### Input
* input `object`
  * ignoreDefaultVisibility `boolean`: Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * useContentAsIndexableText `boolean`: Whether to use the uploaded content as indexable text.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [File](#file)

### files.generateIds
Generates a set of file IDs which can be provided in create requests.


```js
google_drive.files.generateIds({}, context)
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GeneratedIds](#generatedids)

### files.emptyTrash
Permanently deletes all of the user's trashed files.


```js
google_drive.files.emptyTrash({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### files.delete
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.


```js
google_drive.files.delete({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### files.get
Gets a file's metadata or content by ID.


```js
google_drive.files.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * acknowledgeAbuse `boolean`: Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [File](#file)

### files.update
Updates a file's metadata and/or content with patch semantics.


```js
google_drive.files.update({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * addParents `string`: A comma-separated list of parent IDs to add.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * removeParents `string`: A comma-separated list of parent IDs to remove.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * useContentAsIndexableText `boolean`: Whether to use the uploaded content as indexable text.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [File](#file)

### comments.list
Lists a file's comments.


```js
google_drive.comments.list({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CommentList](#commentlist)

### comments.create
Creates a new comment on a file.


```js
google_drive.comments.create({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Comment](#comment)

### comments.delete
Deletes a comment.


```js
google_drive.comments.delete({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### comments.get
Gets a comment by ID.


```js
google_drive.comments.get({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Comment](#comment)

### comments.update
Updates a comment with patch semantics.


```js
google_drive.comments.update({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Comment](#comment)

### replies.list
Lists a comment's replies.


```js
google_drive.replies.list({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ReplyList](#replylist)

### replies.create
Creates a new reply to a comment.


```js
google_drive.replies.create({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Reply](#reply)

### replies.delete
Deletes a reply.


```js
google_drive.replies.delete({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### replies.get
Gets a reply by ID.


```js
google_drive.replies.get({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Reply](#reply)

### replies.update
Updates a reply with patch semantics.


```js
google_drive.replies.update({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Reply](#reply)

### files.copy
Creates a copy of a file and applies any requested updates with patch semantics.


```js
google_drive.files.copy({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * ignoreDefaultVisibility `boolean`: Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
  * keepRevisionForever `boolean`: Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
  * ocrLanguage `string`: A language hint for OCR processing during image import (ISO 639-1 code).
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * body [File](#file)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [File](#file)

### files.export
Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.


```js
google_drive.files.export({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### permissions.list
Lists a file's or Team Drive's permissions.


```js
google_drive.permissions.list({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or Team Drive.
  * pageSize `integer`: The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PermissionList](#permissionlist)

### permissions.create
Creates a permission for a file or Team Drive.


```js
google_drive.permissions.create({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or Team Drive.
  * emailMessage `string`: A custom message to include in the notification email.
  * sendNotificationEmail `boolean`: Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * transferOwnership `boolean`: Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
  * body [Permission](#permission)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Permission](#permission)

### permissions.delete
Deletes a permission.


```js
google_drive.permissions.delete({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or Team Drive.
  * permissionId **required** `string`: The ID of the permission.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### permissions.get
Gets a permission by ID.


```js
google_drive.permissions.get({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * permissionId **required** `string`: The ID of the permission.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Permission](#permission)

### permissions.update
Updates a permission with patch semantics.


```js
google_drive.permissions.update({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file or Team Drive.
  * permissionId **required** `string`: The ID of the permission.
  * removeExpiration `boolean`: Whether to remove the expiration date.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * transferOwnership `boolean`: Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
  * body [Permission](#permission)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Permission](#permission)

### revisions.list
Lists a file's revisions.


```js
google_drive.revisions.list({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RevisionList](#revisionlist)

### revisions.delete
Permanently deletes a revision. This method is only applicable to files with binary content in Drive.


```js
google_drive.revisions.delete({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### revisions.get
Gets a revision's metadata or content by ID.


```js
google_drive.revisions.get({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Revision](#revision)

### revisions.update
Updates a revision with patch semantics.


```js
google_drive.revisions.update({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Revision](#revision)

### files.watch
Subscribes to changes to a file


```js
google_drive.files.watch({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: The ID of the file.
  * acknowledgeAbuse `boolean`: Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
  * supportsTeamDrives `boolean`: Whether the requesting application supports Team Drives.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### teamdrives.list
Lists the user's Team Drives.


```js
google_drive.teamdrives.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of Team Drives to return.
  * pageToken `string`: Page token for Team Drives.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TeamDriveList](#teamdrivelist)

### teamdrives.create
Creates a new Team Drive.


```js
google_drive.teamdrives.create({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TeamDrive](#teamdrive)

### teamdrives.delete
Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.


```js
google_drive.teamdrives.delete({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### teamdrives.get
Gets a Team Drive's metadata by ID.


```js
google_drive.teamdrives.get({
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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TeamDrive](#teamdrive)

### teamdrives.update
Updates a Team Drive's metadata


```js
google_drive.teamdrives.update({
  "teamDriveId": ""
}, context)
```

#### Input
* input `object`
  * teamDriveId **required** `string`: The ID of the Team Drive
  * body [TeamDrive](#teamdrive)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TeamDrive](#teamdrive)



## Definitions

### About
* About `object`: Information about the user, the user's Drive, and system capabilities.
  * appInstalled `boolean`: Whether the user has installed the requesting app.
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
  * teamDriveThemes `array`: A list of themes that are supported for Team Drives.
    * items `object`
      * backgroundImageLink `string`: A link to this Team Drive theme's background image.
      * colorRgb `string`: The color of this Team Drive theme as an RGB hex string.
      * id `string`: The ID of the theme.
  * user [User](#user)

### Change
* Change `object`: A change to a file or Team Drive.
  * file [File](#file)
  * fileId `string`: The ID of the file which has changed.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#change".
  * removed `boolean`: Whether the file or Team Drive has been removed from this list of changes, for example by deletion or loss of access.
  * teamDrive [TeamDrive](#teamdrive)
  * teamDriveId `string`: The ID of the Team Drive associated with this change.
  * time `string`: The time of this change (RFC 3339 date-time).
  * type `string`: The type of the change. Possible values are file and teamDrive.

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
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
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

### File
* File `object`: The metadata for a file.
  * appProperties `object`: A collection of arbitrary key-value pairs which are private to the requesting app.
  * capabilities `object`: Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
    * canAddChildren `boolean`: Whether the current user can add children to this folder. This is always false when the item is not a folder.
    * canChangeViewersCanCopyContent `boolean`: Whether the current user can change whether viewers can copy the contents of this file.
    * canComment `boolean`: Whether the current user can comment on this file.
    * canCopy `boolean`: Whether the current user can copy this file. For a Team Drive item, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.
    * canDelete `boolean`: Whether the current user can delete this file.
    * canDownload `boolean`: Whether the current user can download this file.
    * canEdit `boolean`: Whether the current user can edit this file.
    * canListChildren `boolean`: Whether the current user can list the children of this folder. This is always false when the item is not a folder.
    * canMoveItemIntoTeamDrive `boolean`: Whether the current user can move this item into a Team Drive. If the item is in a Team Drive, this field is equivalent to canMoveTeamDriveItem.
    * canMoveTeamDriveItem `boolean`: Whether the current user can move this Team Drive item by changing its parent. Note that a request to change the parent for this item may still fail depending on the new parent that is being added. Only populated for Team Drive files.
    * canReadRevisions `boolean`: Whether the current user can read the revisions resource of this file. For a Team Drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.
    * canReadTeamDrive `boolean`: Whether the current user can read the Team Drive to which this file belongs. Only populated for Team Drive files.
    * canRemoveChildren `boolean`: Whether the current user can remove children from this folder. This is always false when the item is not a folder.
    * canRename `boolean`: Whether the current user can rename this file.
    * canShare `boolean`: Whether the current user can modify the sharing settings for this file.
    * canTrash `boolean`: Whether the current user can move this file to trash.
    * canUntrash `boolean`: Whether the current user can restore this file from trash.
  * contentHints `object`: Additional information about the content of the file. These fields are never populated in responses.
    * indexableText `string`: Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.
    * thumbnail `object`: A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.
      * image `string`: The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
      * mimeType `string`: The MIME type of the thumbnail.
  * createdTime `string`: The time at which the file was created (RFC 3339 date-time).
  * description `string`: A short description of the file.
  * explicitlyTrashed `boolean`: Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
  * fileExtension `string`: The final component of fullFileExtension. This is only available for files with binary content in Drive.
  * folderColorRgb `string`: The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
  * fullFileExtension `string`: The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Drive.
  * hasAugmentedPermissions `boolean`: Whether any users are granted file access directly on this file. This field is only populated for Team Drive files.
  * hasThumbnail `boolean`: Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
  * headRevisionId `string`: The ID of the file's head revision. This is currently only available for files with binary content in Drive.
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
    * rotation `integer`: The rotation in clockwise degrees from the image's original orientation.
    * sensor `string`: The type of sensor used to create the photo.
    * subjectDistance `integer`: The distance to the subject of the photo, in meters.
    * time `string`: The date and time the photo was taken (EXIF DateTime).
    * whiteBalance `string`: The white balance mode used to create the photo.
    * width `integer`: The width of the image in pixels.
  * isAppAuthorized `boolean`: Whether the file was created or opened by the requesting app.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#file".
  * lastModifyingUser [User](#user)
  * md5Checksum `string`: The MD5 checksum for the content of the file. This is only applicable to files with binary content in Drive.
  * mimeType `string`: The MIME type of the file.
  * modifiedByMe `boolean`: Whether the file has been modified by this user.
  * modifiedByMeTime `string`: The last time the file was modified by the user (RFC 3339 date-time).
  * modifiedTime `string`: The last time the file was modified by anyone (RFC 3339 date-time).
  * name `string`: The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of Team Drives, My Drive root folder, and Application Data folder the name is constant.
  * originalFilename `string`: The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Drive.
  * ownedByMe `boolean`: Whether the user owns the file. Not populated for Team Drive files.
  * owners `array`: The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files.
    * items [User](#user)
  * parents `array`: The IDs of the parent folders which contain the file.
    * items `string`
  * permissionIds `array`: List of permission IDs for users with access to this file.
    * items `string`
  * permissions `array`: The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for Team Drive files.
    * items [Permission](#permission)
  * properties `object`: A collection of arbitrary key-value pairs which are visible to all apps.
  * quotaBytesUsed `string`: The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
  * shared `boolean`: Whether the file has been shared. Not populated for Team Drive files.
  * sharedWithMeTime `string`: The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
  * sharingUser [User](#user)
  * size `string`: The size of the file's content in bytes. This is only applicable to files with binary content in Drive.
  * spaces `array`: The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
    * items `string`
  * starred `boolean`: Whether the user has starred the file.
  * teamDriveId `string`: ID of the Team Drive the file resides in.
  * thumbnailLink `string`: A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
  * thumbnailVersion `string`: The thumbnail version for use in thumbnail cache invalidation.
  * trashed `boolean`: Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.
  * trashedTime `string`: The time that the item was trashed (RFC 3339 date-time). Only populated for Team Drive files.
  * trashingUser [User](#user)
  * version `string`: A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
  * videoMediaMetadata `object`: Additional metadata about video media. This may not be available immediately upon upload.
    * durationMillis `string`: The duration of the video in milliseconds.
    * height `integer`: The height of the video in pixels.
    * width `integer`: The width of the video in pixels.
  * viewedByMe `boolean`: Whether the file has been viewed by this user.
  * viewedByMeTime `string`: The last time the file was viewed by the user (RFC 3339 date-time).
  * viewersCanCopyContent `boolean`: Whether users with only reader or commenter permission can copy the file's content. This affects copy, download, and print operations.
  * webContentLink `string`: A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive.
  * webViewLink `string`: A link for opening the file in a relevant Google editor or viewer in a browser.
  * writersCanShare `boolean`: Whether users with only writer permission can modify the file's permissions. Not populated for Team Drive files.

### FileList
* FileList `object`: A list of files.
  * files `array`: The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
    * items [File](#file)
  * incompleteSearch `boolean`: Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple Team Drives with the "user,allTeamDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "teamDrive".
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
  * displayName `string`: A displayable name for users, groups or domains.
  * domain `string`: The domain to which this permission refers.
  * emailAddress `string`: The email address of the user or group to which this permission refers.
  * expirationTime `string`: The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:  
  * id `string`: The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#permission".
  * photoLink `string`: A link to the user's profile photo, if available.
  * role `string`: The role granted by this permission. While new values may be supported in the future, the following are currently allowed:  
  * teamDrivePermissionDetails `array`: Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.
    * items `object`
      * inherited `boolean`: Whether this permission is inherited. This field is always populated. This is an output-only field.
      * inheritedFrom `string`: The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the Team Drive.
      * role `string`: The primary role for this user. While new values may be added in the future, the following are currently possible:  
      * teamDrivePermissionType `string`: The Team Drive permission type for this user. While new values may be added in future, the following are currently possible:  
  * type `string`: The type of the grantee. Valid values are:  

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
  * id `string`: The ID of the revision.
  * keepForever `boolean`: Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#revision".
  * lastModifyingUser [User](#user)
  * md5Checksum `string`: The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.
  * mimeType `string`: The MIME type of the revision.
  * modifiedTime `string`: The last time the revision was modified (RFC 3339 date-time).
  * originalFilename `string`: The original filename used to create this revision. This is only applicable to files with binary content in Drive.
  * publishAuto `boolean`: Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs.
  * published `boolean`: Whether this revision is published. This is only applicable to Google Docs.
  * publishedOutsideDomain `boolean`: Whether this revision is published outside the domain. This is only applicable to Google Docs.
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
* TeamDrive `object`: Representation of a Team Drive.
  * backgroundImageFile `object`: An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
    * id `string`: The ID of an image file in Drive to use for the background image.
    * width `number`: The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
    * xCoordinate `number`: The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
    * yCoordinate `number`: The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
  * backgroundImageLink `string`: A short-lived link to this Team Drive's background image.
  * capabilities `object`: Capabilities the current user has on this Team Drive.
    * canAddChildren `boolean`: Whether the current user can add children to folders in this Team Drive.
    * canChangeTeamDriveBackground `boolean`: Whether the current user can change the background of this Team Drive.
    * canComment `boolean`: Whether the current user can comment on files in this Team Drive.
    * canCopy `boolean`: Whether the current user can copy files in this Team Drive.
    * canDeleteTeamDrive `boolean`: Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.
    * canDownload `boolean`: Whether the current user can download files in this Team Drive.
    * canEdit `boolean`: Whether the current user can edit files in this Team Drive
    * canListChildren `boolean`: Whether the current user can list the children of folders in this Team Drive.
    * canManageMembers `boolean`: Whether the current user can add members to this Team Drive or remove them or change their role.
    * canReadRevisions `boolean`: Whether the current user can read the revisions resource of files in this Team Drive.
    * canRemoveChildren `boolean`: Whether the current user can remove children from folders in this Team Drive.
    * canRename `boolean`: Whether the current user can rename files or folders in this Team Drive.
    * canRenameTeamDrive `boolean`: Whether the current user can rename this Team Drive.
    * canShare `boolean`: Whether the current user can share files or folders in this Team Drive.
  * colorRgb `string`: The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
  * id `string`: The ID of this Team Drive which is also the ID of the top level folder for this Team Drive.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive".
  * name `string`: The name of this Team Drive.
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


