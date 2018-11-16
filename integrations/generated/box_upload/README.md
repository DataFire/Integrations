# @datafire/box_upload

Client library for Box 2.0 Uploads

## Installation and Usage
```bash
npm install --save @datafire/box_upload
```
```js
let box_upload = require('@datafire/box_upload').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

box_upload.uploadFile({
  "file": "",
  "attributes": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Box Uploads API allows users to add a new file or add a new file version in the same way as uploading file.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
box_upload.oauthCallback({
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
box_upload.oauthRefresh(null, context)
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

### uploadFile
Use the Uploads API to allow users to add a new file.


```js
box_upload.uploadFile({
  "file": "",
  "attributes": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: File to upload
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * attributes **required** `string`: File attributes

#### Output
* output [FileList](#filelist)

### createUploadSession
Use the Uploads API to create a new session to upload a new file.


```js
box_upload.createUploadSession({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [FileUploadSessionRequest](#fileuploadsessionrequest)

#### Output
* output [UploadSession](#uploadsession)

### abortUploadSession
Abort the upload session and discard all data uploaded. This cannot be reversed.


```js
box_upload.abortUploadSession({
  "SESSION_ID": ""
}, context)
```

#### Input
* input `object`
  * SESSION_ID **required** `string`

#### Output
*Output schema unknown*

### getUploadSession
Return the information about this session.


```js
box_upload.getUploadSession({
  "SESSION_ID": ""
}, context)
```

#### Input
* input `object`
  * SESSION_ID **required** `string`

#### Output
* output [UploadSession](#uploadsession)

### uploadPart
Upload a part of the file to this session.


```js
box_upload.uploadPart({
  "SESSION_ID": "",
  "Digest": "",
  "Content-Range": "",
  "bytes": ""
}, context)
```

#### Input
* input `object`
  * SESSION_ID **required** `string`
  * Digest **required** `string`: The message digest of the partbody, formatted as specified by RFC 3230. The usage is sha=BASE64_ENCODED_DIGEST. Currently only SHA-1 is supported.As per RFC 3230, the output from SHA-1 algorithm must be Base64 encoded.
  * Content-Range **required** `string`: Byte range of part within overall file. E.g: bytes 8388608-16777215/445856194. It must not overlap with the range of a part already uploaded to this session.
  * bytes **required** `string`

#### Output
* output [UploadPartResponse](#uploadpartresponse)

### commitUploadSession
Create a Box file comprised of the uploaded parts.


```js
box_upload.commitUploadSession({
  "SESSION_ID": "",
  "Digest": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * SESSION_ID **required** `string`
  * Digest **required** `string`: The message digest of the file, formatted as specified by RFC 3230. The usage is sha=BASE64_ENCODED_DIGEST. Currently only SHA-1 is supported.As per RFC 3230, the output from SHA-1 algorithm must be Base64 encoded.
  * If-Match `string`: This is in the ‘etag’ field of the file object. See https://developer.box.com/v2.0/reference#if-match
  * If-Non-Match `string`: This is in the ‘etag’ field of the file object. See https://developer.box.com/v2.0/reference#if-match
  * body **required** [CommitRequest](#commitrequest)

#### Output
* output [FileList](#filelist)

### listParts
Return the list of parts uploaded so far for this session.


```js
box_upload.listParts({
  "SESSION_ID": ""
}, context)
```

#### Input
* input `object`
  * SESSION_ID **required** `string`
  * offset `integer`: Zero-based index of first part to return. Defaults to zero, if not specified.
  * limit `integer`: How many parts to return. Defaults to 1000 if not specified, which is also the maximum value allowed.

#### Output
* output [PartList](#partlist)

### uploadFileVersion
This method is used to upload a new version of an existing file in a user’s account. 


```js
box_upload.uploadFileVersion({
  "FILE_ID": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * If-Match `string`: This is in the ‘etag’ field of the file object
  * attributes `string`: File attributes
  * file **required** `string`, `object`: File to upload
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [FileList](#filelist)

### createUploadSessionNewVersion
Use the Uploads API to create a new session to upload a new version of existing file.


```js
box_upload.createUploadSessionNewVersion({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [VersionUploadSessionRequest](#versionuploadsessionrequest)

#### Output
* output [UploadSession](#uploadsession)



## Definitions

### BoxFile
* File Object `object`: File information describe file objects in Box, with attributes like who created the file, when it was last modified, and other information. The actual content of the file itself is accessible through the /files/{id}/content endpoint.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.
  * sha1 `string`: The sha1 hash of this file.
  * collections `array`
    * items [Collection](#collection)
  * comment_count `integer`: The number of comments on a file.
  * content_created_at `string`: When the content of this file was created (more info).
  * content_modified_at `string`: When the content of this file was last modified (more info).
  * created_at `string`: When this file was created on Box’s servers.
  * created_by [UserReference](#userreference)
  * description `string`: The description of this file.
  * expiring_embed_link `string`: An expiring URL for an embedded preview session in an iframe. This URL will expire after 60 seconds and the session will expire after 60 minutes.
  * extension `string`: Indicates the suffix, when available, on the file. By default, set to an empty string. The suffix usually indicates the encoding (file format) of the file contents or usage.
  * file_version [FileVersionReference](#fileversionreference)
  * is_package `boolean`: Whether the file is a package. Used for Mac Packages used by iWorks.
  * item_status `string`: Whether this item is deleted or not.
  * lock [Lock](#lock)
  * modified_at `string`: When this file was last updated on the Box servers.
  * modified_by [UserReference](#userreference)
  * owned_by [UserReference](#userreference)
  * parent [ItemReference](#itemreference)
  * path_collection [PathCollection](#pathcollection)
  * permissions [FilePermissions](#filepermissions)
  * purged_at `string`: When this file will be permanently deleted.
  * shared_link [SharedLink](#sharedlink)
  * size `integer`: Size of this file in bytes.
  * tags `array`: All tags applied to this file.
    * items `string`
  * trashed_at `string`: When this file was last moved to the trash.
  * version_number `string`: The version number of the file.
  * watermark_info [WatermarkInfo](#watermarkinfo)

### Collection
* Collection Object `object`: Collections contain information about the items contained inside of them, including files and folders. The only collection available currently is a “Favorites” collection. The contents of the collection are discovered in a similar way in which the contents of a folder are discovered.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * collection_type `string` (values: favorites): The type of the collection. This is used to determine the proper visual treatment for Box-internally created collections. Initially only “favorites” collection-type will be supported.
  * name `string`: The name of this collection. The only collection currently available is named “Favorites”

### CommitRequest
* CommitRequest `object`
  * attributes `object`: Optional. An array of attributes to set on the created file. See https://box-content.readme.io/reference#file-object
  * parts `array`: An arrayof Part objects. MUST be ordered by offset.
    * items [Part](#part)

### Error
* Error `object`
  * code `string`
  * context_info `object`
    * errors `array`
      * items `object`
        * message `string`
        * name `string`
        * reason `string`
  * help-url `string`
  * message `string`
  * request-id `string`
  * status `integer`
  * type `string` (values: error)

### FileList
* FileList `object`: A collection Tasks.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [BoxFile](#boxfile)

### FilePermissions
* FilePermissions `object`: The permissions that the current user has on the file
  * can_download `boolean`
  * can_invite_collaborator `boolean`
  * can_preview `boolean`
  * can_rename `boolean`
  * can_set_share_access `boolean`
  * can_share `boolean`
  * can_upload `boolean`
  * cand_delete `boolean`

### FileReference
* FileReference `object`: It references either a file or a folder
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.
  * sha1 `string`: The sha1 hash of this file.

### FileUploadSessionRequest
* FileUploadSessionRequest `object`
  * file_name `string`: Name of new file
  * file_size `integer`: The total number of bytes in the file to be uploaded
  * folder_id `string`: The ID of the folder that will contain the new file

### FileVersionReference
* FileVersionReference `object`: The version information of the file.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * sha1 `string`: The sha1 hash of this file.

### ItemReference
* ItemReference `object`: It references either a file or a folder
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.

### Lock
* Lock `object`: The lock held on the file.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * created_at `string`
  * created_by [UserReference](#userreference)
  * expired_at `string`
  * is_download_prevented `boolean`

### Pagination
* Pagination `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`

### Part
* Part `object`
  * offset `integer`
  * part_id `string`
  * sha1 `string`
  * size `integer`

### PartList
* PartList `object`
  * entries `array`: An array of parts
    * items [Part](#part)
  * limit `integer`: The limit that was used for these entries. This will be the same as the limit query parameter unless that value exceeded the maximum value allowed.
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same as the offset query parameter.
  * total_count `integer`: This will always be equal to the number of expected parts in the session (i.e. ceiling(file size / part size)).

### PathCollection
* PathCollection `object`: The path of folders, starting at the root.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [ItemReference](#itemreference)

### Reference
* Reference `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)

### SharedLink
* SharedLink `object`
  * access `string`
  * download_count `integer`
  * download_url `string`
  * effective_access `string`
  * is_password_enabled `boolean`
  * password `string`
  * permissions [SharedLinkPermissions](#sharedlinkpermissions)
  * preview_count `integer`
  * unshared_at `string`
  * url `string`
  * vanity_url `string`

### SharedLinkPermissions
* SharedLinkPermissions `object`
  * can_download `boolean`
  * can_preview `boolean`

### UploadPartResponse
* UploadPartResponse `object`
  * part [Part](#part)

### UploadSession
* UploadSession `object`: Upload Session.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * num_parts_processed `integer`: Tracks Box’s progress in processing all the parts that have been uploaded. Always equal to 0 when creating new upload session. In other cases, this will be the number of parts that have been processed by server. When all parts have been uploaded, but Commit API returned 202, you can check this value == total_parts to check if file was uploaded.
  * part_size `integer`: The part size in bytes that must be used for all parts of this session. Only the last part is allowed to be of a smaller size.
  * session_endpoints [UploadSessionEndpoints](#uploadsessionendpoints)
  * session_expires_at `string`: UTC Time in RFC 3339 date timeformat: 2016-04-17T09:12:36-00:00.
  * total_parts `integer`: The total number of parts expected in this session, as determined by the file size and part size.

### UploadSessionEndpoints
* UploadSessionEndpoints `object`: URLs for all other possible calls to this session.
  * abort `string`: The URL for abort API.
  * commit `string`: The URL for commit API.
  * list_parts `string`: The URL for list parts API.
  * log_event `string`: The URL for log event API.
  * status `string`: The URL for status API.
  * upload_part `string`: The URL for upload part API.

### UserReference
* UserReference `object`: It references a user
  * id `string`: Unqiue string identifying this user.
  * login `string`: The email address this user uses to login.
  * name `string`: Name of this user
  * type `string` (values: user)

### VersionUploadSessionRequest
* VersionUploadSessionRequest `object`
  * file_name `string`: Name of new file
  * file_size `integer`: The total number of bytes in the file to be uploaded

### WatermarkInfo
* WatermarkInfo `array`
  * items `object`
    * is_watermarked `boolean`


