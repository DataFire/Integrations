# @datafire/google_drive

Client library for Drive

## Installation and Usage
```bash
npm install --save datafire @datafire/google_drive
```

```js
let datafire = require('datafire');
let google_drive = require('@datafire/google_drive').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_drive: account,
  }
})

google_drive.teamdrives.list({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_drive.oauthRefresh(null, context)
```


### about.get
Gets information about the user, the user's Drive, and system capabilities.


```js
google_drive.about.get({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.list
Lists the changes for a user or Team Drive.


```js
google_drive.changes.list({
  "pageToken": ""
}, context)
```

#### Parameters
* pageToken (string) **required** - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
* includeCorpusRemovals (boolean) - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
* includeRemoved (boolean) - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
* includeTeamDriveItems (boolean) - Whether Team Drive files or changes should be included in results.
* pageSize (integer) - The maximum number of changes to return per page.
* restrictToMyDrive (boolean) - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
* spaces (string) - A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* teamDriveId (string) - The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.getStartPageToken
Gets the starting pageToken for listing future changes.


```js
google_drive.changes.getStartPageToken({}, context)
```

#### Parameters
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* teamDriveId (string) - The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changes.watch
Subscribes to changes for a user.


```js
google_drive.changes.watch({
  "pageToken": ""
}, context)
```

#### Parameters
* pageToken (string) **required** - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
* includeCorpusRemovals (boolean) - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
* includeRemoved (boolean) - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
* includeTeamDriveItems (boolean) - Whether Team Drive files or changes should be included in results.
* pageSize (integer) - The maximum number of changes to return per page.
* restrictToMyDrive (boolean) - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
* spaces (string) - A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* teamDriveId (string) - The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channels.stop
Stop watching resources through this channel


```js
google_drive.channels.stop({}, context)
```

#### Parameters
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.list
Lists or searches files.


```js
google_drive.files.list({}, context)
```

#### Parameters
* corpora (string) - Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.
* corpus (string) - The source of files to list. Deprecated: use 'corpora' instead.
* includeTeamDriveItems (boolean) - Whether Team Drive items should be included in results.
* orderBy (string) - A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
* pageSize (integer) - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
* pageToken (string) - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* q (string) - A query for filtering the file results. See the "Search for Files" guide for supported syntax.
* spaces (string) - A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* teamDriveId (string) - ID of Team Drive to search.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.create
Creates a new file.


```js
google_drive.files.create({}, context)
```

#### Parameters
* ignoreDefaultVisibility (boolean) - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
* keepRevisionForever (boolean) - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* ocrLanguage (string) - A language hint for OCR processing during image import (ISO 639-1 code).
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* useContentAsIndexableText (boolean) - Whether to use the uploaded content as indexable text.
* body (object) - The metadata for a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.generateIds
Generates a set of file IDs which can be provided in create requests.


```js
google_drive.files.generateIds({}, context)
```

#### Parameters
* count (integer) - The number of IDs to return.
* space (string) - The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.emptyTrash
Permanently deletes all of the user's trashed files.


```js
google_drive.files.emptyTrash({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.delete
Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.


```js
google_drive.files.delete({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.get
Gets a file's metadata or content by ID.


```js
google_drive.files.get({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* acknowledgeAbuse (boolean) - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.update
Updates a file's metadata and/or content with patch semantics.


```js
google_drive.files.update({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* addParents (string) - A comma-separated list of parent IDs to add.
* keepRevisionForever (boolean) - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* ocrLanguage (string) - A language hint for OCR processing during image import (ISO 639-1 code).
* removeParents (string) - A comma-separated list of parent IDs to remove.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* useContentAsIndexableText (boolean) - Whether to use the uploaded content as indexable text.
* body (object) - The metadata for a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.list
Lists a file's comments.


```js
google_drive.comments.list({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* includeDeleted (boolean) - Whether to include deleted comments. Deleted comments will not include their original content.
* pageSize (integer) - The maximum number of comments to return per page.
* pageToken (string) - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* startModifiedTime (string) - The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.create
Creates a new comment on a file.


```js
google_drive.comments.create({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* body (object) - A comment on a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.delete
Deletes a comment.


```js
google_drive.comments.delete({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.get
Gets a comment by ID.


```js
google_drive.comments.get({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* includeDeleted (boolean) - Whether to return deleted comments. Deleted comments will not include their original content.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.update
Updates a comment with patch semantics.


```js
google_drive.comments.update({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* body (object) - A comment on a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### replies.list
Lists a comment's replies.


```js
google_drive.replies.list({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* includeDeleted (boolean) - Whether to include deleted replies. Deleted replies will not include their original content.
* pageSize (integer) - The maximum number of replies to return per page.
* pageToken (string) - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### replies.create
Creates a new reply to a comment.


```js
google_drive.replies.create({
  "fileId": "",
  "commentId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* body (object) - A reply to a comment on a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### replies.delete
Deletes a reply.


```js
google_drive.replies.delete({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* replyId (string) **required** - The ID of the reply.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### replies.get
Gets a reply by ID.


```js
google_drive.replies.get({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* replyId (string) **required** - The ID of the reply.
* includeDeleted (boolean) - Whether to return deleted replies. Deleted replies will not include their original content.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### replies.update
Updates a reply with patch semantics.


```js
google_drive.replies.update({
  "fileId": "",
  "commentId": "",
  "replyId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* commentId (string) **required** - The ID of the comment.
* replyId (string) **required** - The ID of the reply.
* body (object) - A reply to a comment on a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.copy
Creates a copy of a file and applies any requested updates with patch semantics.


```js
google_drive.files.copy({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* ignoreDefaultVisibility (boolean) - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
* keepRevisionForever (boolean) - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
* ocrLanguage (string) - A language hint for OCR processing during image import (ISO 639-1 code).
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* body (object) - The metadata for a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.export
Exports a Google Doc to the requested MIME type and returns the exported content.


```js
google_drive.files.export({
  "fileId": "",
  "mimeType": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* mimeType (string) **required** - The MIME type of the format requested for this export.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.list
Lists a file's or Team Drive's permissions.


```js
google_drive.permissions.list({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file or Team Drive.
* pageSize (integer) - The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
* pageToken (string) - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.create
Creates a permission for a file or Team Drive.


```js
google_drive.permissions.create({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file or Team Drive.
* emailMessage (string) - A custom message to include in the notification email.
* sendNotificationEmail (boolean) - Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* transferOwnership (boolean) - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
* body (object) - A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.delete
Deletes a permission.


```js
google_drive.permissions.delete({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file or Team Drive.
* permissionId (string) **required** - The ID of the permission.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.get
Gets a permission by ID.


```js
google_drive.permissions.get({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* permissionId (string) **required** - The ID of the permission.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### permissions.update
Updates a permission with patch semantics.


```js
google_drive.permissions.update({
  "fileId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file or Team Drive.
* permissionId (string) **required** - The ID of the permission.
* removeExpiration (boolean) - Whether to remove the expiration date.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* transferOwnership (boolean) - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
* body (object) - A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### revisions.list
Lists a file's revisions.


```js
google_drive.revisions.list({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* pageSize (integer) - The maximum number of revisions to return per page.
* pageToken (string) - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### revisions.delete
Permanently deletes a revision. This method is only applicable to files with binary content in Drive.


```js
google_drive.revisions.delete({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* revisionId (string) **required** - The ID of the revision.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### revisions.get
Gets a revision's metadata or content by ID.


```js
google_drive.revisions.get({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* revisionId (string) **required** - The ID of the revision.
* acknowledgeAbuse (boolean) - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### revisions.update
Updates a revision with patch semantics.


```js
google_drive.revisions.update({
  "fileId": "",
  "revisionId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* revisionId (string) **required** - The ID of the revision.
* body (object) - The metadata for a revision to a file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.watch
Subscribes to changes to a file


```js
google_drive.files.watch({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - The ID of the file.
* acknowledgeAbuse (boolean) - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
* supportsTeamDrives (boolean) - Whether the requesting application supports Team Drives.
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### teamdrives.list
Lists the user's Team Drives.


```js
google_drive.teamdrives.list({}, context)
```

#### Parameters
* pageSize (integer) - Maximum number of Team Drives to return.
* pageToken (string) - Page token for Team Drives.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### teamdrives.create
Creates a new Team Drive.


```js
google_drive.teamdrives.create({
  "requestId": ""
}, context)
```

#### Parameters
* requestId (string) **required** - An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
* body (object) - Representation of a Team Drive.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### teamdrives.delete
Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.


```js
google_drive.teamdrives.delete({
  "teamDriveId": ""
}, context)
```

#### Parameters
* teamDriveId (string) **required** - The ID of the Team Drive
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### teamdrives.get
Gets a Team Drive's metadata by ID.


```js
google_drive.teamdrives.get({
  "teamDriveId": ""
}, context)
```

#### Parameters
* teamDriveId (string) **required** - The ID of the Team Drive
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### teamdrives.update
Updates a Team Drive's metadata


```js
google_drive.teamdrives.update({
  "teamDriveId": ""
}, context)
```

#### Parameters
* teamDriveId (string) **required** - The ID of the Team Drive
* body (object) - Representation of a Team Drive.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

