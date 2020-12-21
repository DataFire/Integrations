# @datafire/files

Client library for Files.com

## Installation and Usage
```bash
npm install --save @datafire/files
```
```js
let files = require('@datafire/files').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### DeleteCurrent
Delete current API key.  (Requires current API connection to be using an API key.)


```js
files.DeleteCurrent(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### FindCurrent
Show information about current API key.  (Requires current API connection to be using an API key.)


```js
files.FindCurrent(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiKeyEntity](#apikeyentity)

### UpdateCurrent
Update current API key.  (Requires current API connection to be using an API key.)


```js
files.UpdateCurrent({}, context)
```

#### Input
* input `object`
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to `desktop_app` to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### getApiKeys
List Api Keys


```js
files.getApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ApiKeyEntity](#apikeyentity)

### postApiKeys
Create Api Key


```js
files.postApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to 'desktop_app' to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### deleteApiKeysId
Delete Api Key


```js
files.deleteApiKeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Api Key ID.

#### Output
*Output schema unknown*

### getApiKeysId
Show Api Key


```js
files.getApiKeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Api Key ID.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### patchApiKeysId
Update Api Key


```js
files.patchApiKeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Api Key ID.
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to 'desktop_app' to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### getAs2Keys
List As2 Keys


```js
files.getAs2Keys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [As2KeyEntity](#as2keyentity)

### postAs2Keys
Create As2 Key


```js
files.postAs2Keys({
  "as2_partnership_name": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * as2_partnership_name **required** `string`: AS2 Partnership Name
  * public_key **required** `string`: Actual contents of Public key.

#### Output
* output [As2KeyEntity](#as2keyentity)

### deleteAs2KeysId
Delete As2 Key


```js
files.deleteAs2KeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: As2 Key ID.

#### Output
*Output schema unknown*

### getAs2KeysId
Show As2 Key


```js
files.getAs2KeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: As2 Key ID.

#### Output
* output [As2KeyEntity](#as2keyentity)

### patchAs2KeysId
Update As2 Key


```js
files.patchAs2KeysId({
  "id": 0,
  "as2_partnership_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: As2 Key ID.
  * as2_partnership_name **required** `string`: AS2 Partnership Name

#### Output
* output [As2KeyEntity](#as2keyentity)

### getAutomations
List Automations


```js
files.getAutomations({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * automation `string`: Type of automation to filter by.

#### Output
* output `array`
  * items [AutomationEntity](#automationentity)

### postAutomations
Create Automation


```js
files.postAutomations({
  "automation": ""
}, context)
```

#### Input
* input `object`
  * automation **required** `string`: Type of automation.  One of: `create_folder`, `request_file`, `request_move`
  * source `string`: Source Path
  * destination `string`: Destination Path
  * destination_replace_from `string`: If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  * destination_replace_to `string`: If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  * interval `string`: How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  * path `string`: Path on which this Automation runs.  Supports globs.
  * user_ids `string`: A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  * group_ids `string`: A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.

#### Output
* output [AutomationEntity](#automationentity)

### deleteAutomationsId
Delete Automation


```js
files.deleteAutomationsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Automation ID.

#### Output
*Output schema unknown*

### getAutomationsId
Show Automation


```js
files.getAutomationsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Automation ID.

#### Output
* output [AutomationEntity](#automationentity)

### patchAutomationsId
Update Automation


```js
files.patchAutomationsId({
  "id": 0,
  "automation": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Automation ID.
  * automation **required** `string`: Type of automation.  One of: `create_folder`, `request_file`, `request_move`
  * source `string`: Source Path
  * destination `string`: Destination Path
  * destination_replace_from `string`: If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  * destination_replace_to `string`: If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  * interval `string`: How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  * path `string`: Path on which this Automation runs.  Supports globs.
  * user_ids `string`: A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  * group_ids `string`: A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.

#### Output
* output [AutomationEntity](#automationentity)

### getBehaviors
List Behaviors


```js
files.getBehaviors({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * behavior `string`: If set, only shows folder behaviors matching this behavior type.

#### Output
* output `array`
  * items [BehaviorEntity](#behaviorentity)

### postBehaviors
Create Behavior


```js
files.postBehaviors({
  "path": "",
  "behavior": ""
}, context)
```

#### Input
* input `object`
  * value `string`: The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior.
  * attachment_file `string`, `object`: Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * path **required** `string`: Folder behaviors path.
  * behavior **required** `string`: Behavior type.

#### Output
* output [BehaviorEntity](#behaviorentity)

### behaviors.folders._path.get
List Behaviors by path


```js
files.behaviors.folders._path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path **required** `string`: Path to operate on.
  * recursive `string`: Show behaviors above this path?
  * behavior `string`: If set only shows folder behaviors matching this behavior type.

#### Output
* output `array`
  * items [BehaviorEntity](#behaviorentity)

### postBehaviorsWebhookTest
Test webhook.


```js
files.postBehaviorsWebhookTest({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL for testing the webhook.
  * method `string`: HTTP method(GET or POST).
  * encoding `string`: HTTP encoding method.  Can be JSON, XML, or RAW (form data).

#### Output
* output [StatusEntity](#statusentity)

### deleteBehaviorsId
Delete Behavior


```js
files.deleteBehaviorsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Behavior ID.

#### Output
*Output schema unknown*

### getBehaviorsId
Show Behavior


```js
files.getBehaviorsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Behavior ID.

#### Output
* output [BehaviorEntity](#behaviorentity)

### patchBehaviorsId
Update Behavior


```js
files.patchBehaviorsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Behavior ID.
  * value `string`: The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior.
  * attachment_file `string`, `object`: Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [BehaviorEntity](#behaviorentity)

### getBundles
List Bundles


```js
files.getBundles({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [BundleEntity](#bundleentity)

### postBundles
Create Bundle


```js
files.postBundles({
  "paths": []
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * paths **required** `array`: A list of paths to include in this bundle.
  * password `string`: Password for this bundle.
  * expires_at `string`: Bundle expiration date/time
  * description `string`: Public description
  * note `string`: Bundle internal note
  * code `string`: Bundle code.  This code forms the end part of the Public URL.

#### Output
* output [BundleEntity](#bundleentity)

### deleteBundlesId
Delete Bundle


```js
files.deleteBundlesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Bundle ID.

#### Output
*Output schema unknown*

### getBundlesId
Show Bundle


```js
files.getBundlesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Bundle ID.

#### Output
* output [BundleEntity](#bundleentity)

### patchBundlesId
Update Bundle


```js
files.patchBundlesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Bundle ID.
  * password `string`: Password for this bundle.
  * expires_at `string`: Bundle expiration date/time
  * description `string`: Public description
  * note `string`: Bundle internal note
  * code `string`: Bundle code.  This code forms the end part of the Public URL.

#### Output
* output [BundleEntity](#bundleentity)

### postBundlesIdShare
Send email(s) with a link to bundle


```js
files.postBundlesIdShare({
  "id": 0,
  "to": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Bundle ID.
  * to **required** `array`: A list of email addresses to share this bundle with.
  * note `string`: Note to include in email.

#### Output
*Output schema unknown*

### getDnsRecords
Show site DNS configuration.


```js
files.getDnsRecords({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [DnsRecordEntity](#dnsrecordentity)

### BeginUpload
Begin file upload


```js
files.BeginUpload({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * mkdir_parents `boolean`: Create parent directories if they do not exist?
  * part `integer`: Part if uploading a part.
  * parts `integer`: How many parts to fetch?
  * ref `string`
  * restart `integer`: File byte offset to restart from.
  * with_rename `boolean`: Allow file rename instead of overwrite?

#### Output
* output [FilePartUploadEntity](#filepartuploadentity)

### Copy
Copy file/folder


```js
files.Copy({
  "path": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * destination **required** `string`: Copy destination path.

#### Output
*Output schema unknown*

### Move
Move file/folder


```js
files.Move({
  "path": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * destination **required** `string`: Move destination path.

#### Output
*Output schema unknown*

### postFileCommentReactions
Create File Comment Reaction


```js
files.postFileCommentReactions({
  "file_comment_id": 0,
  "emoji": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * file_comment_id **required** `integer`: ID of file comment to attach reaction to.
  * emoji **required** `string`: Emoji to react with.

#### Output
* output [FileCommentReactionEntity](#filecommentreactionentity)

### deleteFileCommentReactionsId
Delete File Comment Reaction


```js
files.deleteFileCommentReactionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: File Comment Reaction ID.

#### Output
*Output schema unknown*

### postFileComments
Create File Comment


```js
files.postFileComments({
  "body": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`: Comment body.
  * path **required** `string`: File path.

#### Output
* output [FileCommentEntity](#filecommententity)

### file_comments.files._path.get
List File Comments by path


```js
files.file_comments.files._path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path **required** `string`: Path to operate on.

#### Output
* output `array`
  * items [FileCommentEntity](#filecommententity)

### deleteFileCommentsId
Delete File Comment


```js
files.deleteFileCommentsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: File Comment ID.

#### Output
*Output schema unknown*

### patchFileCommentsId
Update File Comment


```js
files.patchFileCommentsId({
  "id": 0,
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: File Comment ID.
  * body **required** `string`: Comment body.

#### Output
* output [FileCommentEntity](#filecommententity)

### files._path.delete
Delete file/folder


```js
files.files._path.delete({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * recursive `boolean`: If true, will recursively delete folers.  Otherwise, will error on non-empty folders.  For legacy reasons, this parameter may also be provided as the HTTP header `Depth: Infinity`

#### Output
*Output schema unknown*

### Download
Download file


```js
files.Download({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * action `string`: Can be blank, `redirect` or `stat`.  If set to `stat`, we will return file information but without a download URL, and without logging a download.  If set to `redirect` we will serve a 302 redirect directly to the file.  This is used for integrations with Zapier, and is not recommended for most integrations.
  * id `integer`: If provided, lookup the file by id instead of path.
  * with_previews `boolean`: Include file preview information?
  * with_priority_color `boolean`: Include file priority color information?

#### Output
* output [FileEntity](#fileentity)

### files._path.patch
Update file/folder metadata


```js
files.files._path.patch({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * provided_mtime `string`: Modified time of file.
  * priority_color `string`: Priority/Bookmark color of file.

#### Output
* output [FileEntity](#fileentity)

### files._path.post
Upload file


```js
files.files._path.post({
  "path": "",
  "etags[etag]": [],
  "etags[part]": []
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.
  * action `string`: The action to perform.  Can be `append`, `attachment`, `end`, `upload`, `put`, or may not exist
  * etags[etag] **required** `array`: etag identifier.
  * etags[part] **required** `array`: Part number.
  * length `integer`: Length of file.
  * mkdir_parents `boolean`: Create parent directories if they do not exist?
  * part `integer`: Part if uploading a part.
  * parts `integer`: How many parts to fetch?
  * provided_mtime `string`: User provided modification time.
  * ref `string`
  * restart `integer`: File byte offset to restart from.
  * size `integer`: Size of file.
  * structure `string`: If copying folder, copy just the structure?
  * with_rename `boolean`: Allow file rename instead of overwrite?

#### Output
* output [FileEntity](#fileentity)

### folders._path.get
List Folders by path


```js
files.folders._path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Action to take.  Can be `count`, `count_nrs` (non recursive), `size`, `permissions`, or blank.
  * path **required** `string`: Path to operate on.
  * cursor `string`: Send cursor to resume an existing list from the point at which you left off.  Get a cursor from an existing list via the X-Files-Cursor header.
  * filter `string`: If specified, will to filter folders/files list by this string.  Wildcards of `*` and `?` are acceptable here.
  * preview_size `string`: Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.
  * search `string`: If `search_all` is `true`, provide the search string here.  Otherwise, this parameter acts like an alias of `filter`.
  * search_all `boolean`: Search entire site?
  * with_priority_color `boolean`: Include file priority color information?

#### Output
* output `array`
  * items [FileEntity](#fileentity)

### folders._path.post
Create folder


```js
files.folders._path.post({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path to operate on.

#### Output
* output [FileEntity](#fileentity)

### getGroupUsers
List Group Users


```js
files.getGroupUsers({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  If provided, will return groups of which this user is a member.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * group_id `integer`: Group ID.  If provided, will return members of this group.

#### Output
* output `array`
  * items [GroupUserEntity](#groupuserentity)

### deleteGroupUsersId
Delete Group User


```js
files.deleteGroupUsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Group User ID.

#### Output
*Output schema unknown*

### patchGroupUsersId
Update Group User


```js
files.patchGroupUsersId({
  "id": 0,
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Group User ID.
  * group_id **required** `integer`: Group ID to add user to.
  * user_id **required** `integer`: User ID to add to group.
  * admin `boolean`: Is the user a group administrator?

#### Output
* output [GroupUserEntity](#groupuserentity)

### getGroups
List Groups


```js
files.getGroups({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * ids `string`: Comma-separated list of group ids to include in results.

#### Output
* output `array`
  * items [GroupEntity](#groupentity)

### postGroups
Create Group


```js
files.postGroups({}, context)
```

#### Input
* input `object`
  * name `string`: Group name.
  * notes `string`: Group notes.
  * user_ids `string`: A list of user ids. If sent as a string, should be comma-delimited.
  * admin_ids `string`: A list of group admin user ids. If sent as a string, should be comma-delimited.

#### Output
* output [GroupEntity](#groupentity)

### deleteGroupsGroupIdMembershipsUserId
Delete Group User


```js
files.deleteGroupsGroupIdMembershipsUserId({
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`
  * user_id **required** `integer`

#### Output
*Output schema unknown*

### patchGroupsGroupIdMembershipsUserId
Update Group User


```js
files.patchGroupsGroupIdMembershipsUserId({
  "group_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID to add user to.
  * user_id **required** `integer`: User ID to add to group.
  * admin `boolean`: Is the user a group administrator?

#### Output
* output [GroupUserEntity](#groupuserentity)

### getGroupsGroupIdPermissions
List Permissions


```js
files.getGroupsGroupIdPermissions({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path `string`: Permission path.  If provided, will scope permissions to this path.
  * group_id **required** `string`: Group ID.  If provided, will scope permissions to this group.
  * user_id `string`: User ID.  If provided, will scope permissions to this user.
  * include_groups `boolean`: If searching by user or group, also include user's permissions that are inherited from its groups?

#### Output
* output `array`
  * items [PermissionEntity](#permissionentity)

### getGroupsGroupIdUsers
List Group Users


```js
files.getGroupsGroupIdUsers({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  If provided, will return groups of which this user is a member.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * group_id **required** `integer`: Group ID.  If provided, will return members of this group.

#### Output
* output `array`
  * items [GroupUserEntity](#groupuserentity)

### postGroupsGroupIdUsers
Create User


```js
files.postGroupsGroupIdUsers({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * avatar_file `string`, `object`: An image file for your user avatar.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * avatar_delete `boolean`: If true, the avatar will be deleted.
  * change_password `string`: Used for changing a password on an existing user.
  * change_password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
  * email `string`: User's email.
  * grant_permission `string`: Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `preview`, or `history`.
  * group_id **required** `integer`: Group ID to associate this user with.
  * group_ids `string`: A list of group ids to associate this user with.  Comma delimited.
  * password `string`: User password.
  * password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `password`.
  * announcements_read `boolean`: Signifies that the user has read all the announcements in the UI.
  * allowed_ips `string`: A list of allowed IPs if applicable.  Newline delimited
  * attachments_permission `boolean`: Can the user create Bundles (aka Share Links)?  This field will be aliased or renamed in the future to `bundles_permission`.
  * authenticate_until `string`: Scheduled Date/Time at which user will be deactivated
  * authentication_method `string` (values: password, ldap, sso, none): How is this user authenticated?
  * billing_permission `boolean`: Allow this user to perform operations on the account, payments, and invoices?
  * bypass_inactive_disable `boolean`: Exempt this user from being disabled based on inactivity?
  * bypass_site_allowed_ips `boolean`: Allow this user to skip site-wide IP blacklists?
  * dav_permission `boolean`: Can the user connect with WebDAV?
  * disabled `boolean`: Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
  * ftp_permission `boolean`: Can the user access with FTP/FTPS?
  * language `string`: Preferred language
  * notification_daily_send_time `integer`: Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  * name `string`: User's full name
  * notes `string`: Any internal notes on the user
  * password_validity_days `integer`: Number of days to allow user to use the same password
  * receive_admin_alerts `boolean`: Should the user receive admin alerts such a certificate expiration notifications and overages?
  * require_password_change `boolean`: Is a password change required upon next user login?
  * restapi_permission `boolean`: Can this user access the REST API?
  * self_managed `boolean`: Does this user manage it's own credentials or is it a shared/bot user?
  * sftp_permission `boolean`: Can the user access with SFTP?
  * site_admin `boolean`: Is the user an administrator for this site?
  * skip_welcome_screen `boolean`: Skip Welcome page in the UI?
  * ssl_required `string` (values: use_system_setting, always_require, never_require): SSL required setting
  * sso_strategy_id `integer`: SSO (Single Sign On) strategy ID for the user, if applicable.
  * subscribe_to_newsletter `boolean`: Is the user subscribed to the newsletter?
  * time_zone `string`: User time zone
  * user_root `string`: Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
  * username `string`: User's username

#### Output
* output [UserEntity](#userentity)

### deleteGroupsId
Delete Group


```js
files.deleteGroupsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Group ID.

#### Output
*Output schema unknown*

### getGroupsId
Show Group


```js
files.getGroupsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Group ID.

#### Output
* output [GroupEntity](#groupentity)

### patchGroupsId
Update Group


```js
files.patchGroupsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Group ID.
  * name `string`: Group name.
  * notes `string`: Group notes.
  * user_ids `string`: A list of user ids. If sent as a string, should be comma-delimited.
  * admin_ids `string`: A list of group admin user ids. If sent as a string, should be comma-delimited.

#### Output
* output [GroupEntity](#groupentity)

### List
List site full action history.


```js
files.List({}, context)
```

#### Input
* input `object`
  * start_at `string`: Leave blank or set to a date/time to filter earlier entries.
  * end_at `string`: Leave blank or set to a date/time to filter later entries.
  * display `string`: Display format. Leave blank or set to `full` or `parent`.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ActionEntity](#actionentity)

### ListForFile
List history for specific file.


```js
files.ListForFile({
  "path": ""
}, context)
```

#### Input
* input `object`
  * start_at `string`: Leave blank or set to a date/time to filter earlier entries.
  * end_at `string`: Leave blank or set to a date/time to filter later entries.
  * display `string`: Display format. Leave blank or set to `full` or `parent`.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path **required** `string`: Path to operate on.

#### Output
* output `array`
  * items [ActionEntity](#actionentity)

### ListForFolder
List history for specific folder.


```js
files.ListForFolder({
  "path": ""
}, context)
```

#### Input
* input `object`
  * start_at `string`: Leave blank or set to a date/time to filter earlier entries.
  * end_at `string`: Leave blank or set to a date/time to filter later entries.
  * display `string`: Display format. Leave blank or set to `full` or `parent`.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path **required** `string`: Path to operate on.

#### Output
* output `array`
  * items [ActionEntity](#actionentity)

### ListLogins
List site login history.


```js
files.ListLogins({}, context)
```

#### Input
* input `object`
  * start_at `string`: Leave blank or set to a date/time to filter earlier entries.
  * end_at `string`: Leave blank or set to a date/time to filter later entries.
  * display `string`: Display format. Leave blank or set to `full` or `parent`.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ActionEntity](#actionentity)

### ListForUser
List history for specific user.


```js
files.ListForUser({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * start_at `string`: Leave blank or set to a date/time to filter earlier entries.
  * end_at `string`: Leave blank or set to a date/time to filter later entries.
  * display `string`: Display format. Leave blank or set to `full` or `parent`.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * user_id **required** `integer`: User ID.

#### Output
* output `array`
  * items [ActionEntity](#actionentity)

### getHistoryExports
List History Exports


```js
files.getHistoryExports({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [HistoryExportEntity](#historyexportentity)

### postHistoryExports
Create History Export


```js
files.postHistoryExports({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * start_at `string`: Start date/time of export range.
  * end_at `string`: End date/time of export range.
  * query_action `string`: Filter results by this this action type. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`
  * query_interface `string`: Filter results by this this interface type. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`
  * query_user_id `integer`: Return results that are actions performed by the user indiciated by this User ID
  * query_file_id `integer`: Return results that are file actions related to the file indicated by this File ID
  * query_parent_id `integer`: Return results that are file actions inside the parent folder specified by this folder ID
  * query_path `string`: Return results that are file actions related to this path.
  * query_folder `string`: Return results that are file actions related to files or folders inside this folder path.
  * query_src `string`: Return results that are file moves originating from this path.
  * query_destination `string`: Return results that are file moves with this path as destination.
  * query_ip `string`: Filter results by this IP address.
  * query_username `string`: Filter results by this username.
  * query_failure_type `string`: If searching for Histories about login failures, this parameter restricts results to failures of this specific type.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`
  * query_target_id `integer`: If searching for Histories about specific objects (such as Users, or API Keys), this paremeter restricts results to objects that match this ID.
  * query_target_name `string`: If searching for Histories about Users, Groups or other objects with names, this parameter restricts results to objects with this name/username.
  * query_target_permission `string`: If searching for Histories about Permisisons, this parameter restricts results to permissions of this level.
  * query_target_user_id `integer`: If searching for Histories about API keys, this parameter restricts results to API keys created by/for this user ID.
  * query_target_username `string`: If searching for Histories about API keys, this parameter restricts results to API keys created by/for this username.
  * query_target_platform `string`: If searching for Histories about API keys, this parameter restricts results to API keys associated with this platform.
  * query_target_permission_set `string`: If searching for Histories about API keys, this parameter restricts results to API keys with this permission set.

#### Output
* output [HistoryExportEntity](#historyexportentity)

### deleteHistoryExportsId
Delete History Export


```js
files.deleteHistoryExportsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: History Export ID.

#### Output
*Output schema unknown*

### getHistoryExportsId
Show History Export


```js
files.getHistoryExportsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: History Export ID.

#### Output
* output [HistoryExportEntity](#historyexportentity)

### getInvoices
List Invoices


```js
files.getInvoices({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [AccountLineItemEntity](#accountlineitementity)

### getInvoicesId
Show Invoice


```js
files.getInvoicesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Invoice ID.

#### Output
* output [AccountLineItemEntity](#accountlineitementity)

### getIpAddresses
List Ip Addresses


```js
files.getIpAddresses({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [IpAddressEntity](#ipaddressentity)

### locks._path.delete
Delete Lock


```js
files.locks._path.delete({
  "path": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path
  * token **required** `string`: Lock token

#### Output
*Output schema unknown*

### locks._path.get
List Locks by path


```js
files.locks._path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path **required** `string`: Path to operate on.
  * include_children `boolean`: Include locks from children objects?

#### Output
* output `array`
  * items [LockEntity](#lockentity)

### locks._path.post
Create Lock


```js
files.locks._path.post({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Path
  * timeout `integer`: Lock timeout length

#### Output
* output [LockEntity](#lockentity)

### getMessageCommentReactions
List Message Comment Reactions


```js
files.getMessageCommentReactions({
  "message_comment_id": 0
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * message_comment_id **required** `integer`: Message comment to return reactions for.

#### Output
* output `array`
  * items [MessageCommentReactionEntity](#messagecommentreactionentity)

### postMessageCommentReactions
Create Message Comment Reaction


```js
files.postMessageCommentReactions({
  "emoji": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * emoji **required** `string`: Emoji to react with.

#### Output
* output [MessageCommentReactionEntity](#messagecommentreactionentity)

### deleteMessageCommentReactionsId
Delete Message Comment Reaction


```js
files.deleteMessageCommentReactionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Comment Reaction ID.

#### Output
*Output schema unknown*

### getMessageCommentReactionsId
Show Message Comment Reaction


```js
files.getMessageCommentReactionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Comment Reaction ID.

#### Output
* output [MessageCommentReactionEntity](#messagecommentreactionentity)

### getMessageComments
List Message Comments


```js
files.getMessageComments({
  "message_id": 0
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * message_id **required** `integer`: Message comment to return comments for.

#### Output
* output `array`
  * items [MessageCommentEntity](#messagecommententity)

### postMessageComments
Create Message Comment


```js
files.postMessageComments({
  "body": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * body **required** `string`: Comment body.

#### Output
* output [MessageCommentEntity](#messagecommententity)

### deleteMessageCommentsId
Delete Message Comment


```js
files.deleteMessageCommentsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Comment ID.

#### Output
*Output schema unknown*

### getMessageCommentsId
Show Message Comment


```js
files.getMessageCommentsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Comment ID.

#### Output
* output [MessageCommentEntity](#messagecommententity)

### patchMessageCommentsId
Update Message Comment


```js
files.patchMessageCommentsId({
  "id": 0,
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Comment ID.
  * body **required** `string`: Comment body.

#### Output
* output [MessageCommentEntity](#messagecommententity)

### getMessageReactions
List Message Reactions


```js
files.getMessageReactions({
  "message_id": 0
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * message_id **required** `integer`: Message to return reactions for.

#### Output
* output `array`
  * items [MessageReactionEntity](#messagereactionentity)

### postMessageReactions
Create Message Reaction


```js
files.postMessageReactions({
  "emoji": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * emoji **required** `string`: Emoji to react with.

#### Output
* output [MessageReactionEntity](#messagereactionentity)

### deleteMessageReactionsId
Delete Message Reaction


```js
files.deleteMessageReactionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Reaction ID.

#### Output
*Output schema unknown*

### getMessageReactionsId
Show Message Reaction


```js
files.getMessageReactionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message Reaction ID.

#### Output
* output [MessageReactionEntity](#messagereactionentity)

### getMessages
List Messages


```js
files.getMessages({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * project_id **required** `integer`: Project to return messages for.

#### Output
* output `array`
  * items [MessageEntity](#messageentity)

### postMessages
Create Message


```js
files.postMessages({
  "project_id": 0,
  "subject": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * project_id **required** `integer`: Project to attach the message to.
  * subject **required** `string`: Message subject.
  * body **required** `string`: Message body.

#### Output
* output [MessageEntity](#messageentity)

### deleteMessagesId
Delete Message


```js
files.deleteMessagesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message ID.

#### Output
*Output schema unknown*

### getMessagesId
Show Message


```js
files.getMessagesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message ID.

#### Output
* output [MessageEntity](#messageentity)

### patchMessagesId
Update Message


```js
files.patchMessagesId({
  "id": 0,
  "project_id": 0,
  "subject": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Message ID.
  * project_id **required** `integer`: Project to attach the message to.
  * subject **required** `string`: Message subject.
  * body **required** `string`: Message body.

#### Output
* output [MessageEntity](#messageentity)

### getNotifications
List Notifications


```js
files.getNotifications({}, context)
```

#### Input
* input `object`
  * user_id `integer`: Show notifications for this User ID.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * group_id `integer`: Show notifications for this Group ID.

#### Output
* output `array`
  * items [NotificationEntity](#notificationentity)

### postNotifications
Create Notification


```js
files.postNotifications({}, context)
```

#### Input
* input `object`
  * user_id `integer`: The id of the user to notify. Provide `user_id`, `username` or `group_id`.
  * notify_on_copy `boolean`: If `true`, copying or moving resources into this path will trigger a notification, in addition to just uploads.
  * notify_user_actions `boolean`: If `true` actions initiated by the user will still result in a notification
  * send_interval `string`: The time interval that notifications are aggregated by.  Can be `five_minutes`, `fifteen_minutes`, `hourly`, or `daily`.
  * group_id `integer`: The ID of the group to notify.  Provide `user_id`, `username` or `group_id`.
  * path `string`: Path
  * username `string`: The username of the user to notify.  Provide `user_id`, `username` or `group_id`.

#### Output
* output [NotificationEntity](#notificationentity)

### deleteNotificationsId
Delete Notification


```js
files.deleteNotificationsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Notification ID.

#### Output
*Output schema unknown*

### getNotificationsId
Show Notification


```js
files.getNotificationsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Notification ID.

#### Output
* output [NotificationEntity](#notificationentity)

### patchNotificationsId
Update Notification


```js
files.patchNotificationsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Notification ID.
  * notify_on_copy `boolean`: If `true`, copying or moving resources into this path will trigger a notification, in addition to just uploads.
  * notify_user_actions `boolean`: If `true` actions initiated by the user will still result in a notification
  * send_interval `string`: The time interval that notifications are aggregated by.  Can be `five_minutes`, `fifteen_minutes`, `hourly`, or `daily`.

#### Output
* output [NotificationEntity](#notificationentity)

### getPayments
List Payments


```js
files.getPayments({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [AccountLineItemEntity](#accountlineitementity)

### getPaymentsId
Show Payment


```js
files.getPaymentsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Payment ID.

#### Output
* output [AccountLineItemEntity](#accountlineitementity)

### getPermissions
List Permissions


```js
files.getPermissions({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path `string`: Permission path.  If provided, will scope permissions to this path.
  * group_id `string`: Group ID.  If provided, will scope permissions to this group.
  * user_id `string`: User ID.  If provided, will scope permissions to this user.
  * include_groups `boolean`: If searching by user or group, also include user's permissions that are inherited from its groups?

#### Output
* output `array`
  * items [PermissionEntity](#permissionentity)

### postPermissions
Create Permission


```js
files.postPermissions({}, context)
```

#### Input
* input `object`
  * group_id `integer`: Group ID
  * path `string`: Folder path
  * permission `string`:  Permission type.  Can be `admin`, `full`, `readonly`, `writeonly`, `previewonly`, or `history`
  * recursive `boolean`: Apply to subfolders recursively?
  * user_id `integer`: User ID.  Provide `username` or `user_id`
  * username `string`: User username.  Provide `username` or `user_id`

#### Output
* output [PermissionEntity](#permissionentity)

### deletePermissionsId
Delete Permission


```js
files.deletePermissionsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Permission ID.

#### Output
*Output schema unknown*

### getProjects
List Projects


```js
files.getProjects({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ProjectEntity](#projectentity)

### postProjects
Create Project


```js
files.postProjects({
  "global_access": ""
}, context)
```

#### Input
* input `object`
  * global_access **required** `string`: Global permissions.  Can be: `none`, `anyone_with_read`, `anyone_with_full`.

#### Output
* output [ProjectEntity](#projectentity)

### deleteProjectsId
Delete Project


```js
files.deleteProjectsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID.

#### Output
*Output schema unknown*

### getProjectsId
Show Project


```js
files.getProjectsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID.

#### Output
* output [ProjectEntity](#projectentity)

### patchProjectsId
Update Project


```js
files.patchProjectsId({
  "id": 0,
  "global_access": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID.
  * global_access **required** `string`: Global permissions.  Can be: `none`, `anyone_with_read`, `anyone_with_full`.

#### Output
* output [ProjectEntity](#projectentity)

### getPublicKeys
List Public Keys


```js
files.getPublicKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [PublicKeyEntity](#publickeyentity)

### postPublicKeys
Create Public Key


```js
files.postPublicKeys({
  "title": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * title **required** `string`: Internal reference for key.
  * public_key **required** `string`: Actual contents of SSH key.

#### Output
* output [PublicKeyEntity](#publickeyentity)

### deletePublicKeysId
Delete Public Key


```js
files.deletePublicKeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Public Key ID.

#### Output
*Output schema unknown*

### getPublicKeysId
Show Public Key


```js
files.getPublicKeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Public Key ID.

#### Output
* output [PublicKeyEntity](#publickeyentity)

### patchPublicKeysId
Update Public Key


```js
files.patchPublicKeysId({
  "id": 0,
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Public Key ID.
  * title **required** `string`: Internal reference for key.

#### Output
* output [PublicKeyEntity](#publickeyentity)

### getRemoteServers
List Remote Servers


```js
files.getRemoteServers({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [RemoteServerEntity](#remoteserverentity)

### postRemoteServers
Create Remote Server


```js
files.postRemoteServers({}, context)
```

#### Input
* input `object`
  * aws_access_key `string`: AWS Access Key.
  * aws_secret_key `string`: AWS secret key.
  * password `string`: Password if needed.
  * private_key `string`: Private key if needed.
  * google_cloud_storage_credentials_json `string`: A JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey
  * wasabi_access_key `string`: Wasabi access key.
  * wasabi_secret_key `string`: Wasabi secret key.
  * backblaze_b2_key_id `string`: Backblaze B2 Cloud Storage keyID.
  * backblaze_b2_application_key `string`: Backblaze B2 Cloud Storage applicationKey.
  * hostname `string`: Hostname or IP address
  * name `string`: Internal name for your reference
  * max_connections `integer`: Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).
  * port `integer`: Port for remote server.  Not needed for S3.
  * s3_bucket `string`: S3 bucket name
  * s3_region `string`: S3 region
  * server_certificate `string` (values: require_match, allow_any): Remote server certificate
  * server_host_key `string`: Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
  * server_type `string` (values: ftp, sftp, s3, google_cloud_storage, webdav, wasabi, backblaze_b2): Remote server type.
  * ssl `string` (values: if_available, require, require_implicit, never): Should we require SSL?
  * username `string`: Remote server username.  Not needed for S3 buckets.
  * google_cloud_storage_bucket `string`: Google Cloud Storage bucket name
  * google_cloud_storage_project_id `string`: Google Cloud Project ID
  * backblaze_b2_bucket `string`: Backblaze B2 Cloud Storage Bucket name
  * backblaze_b2_s3_endpoint `string`: Backblaze B2 Cloud Storage S3 Endpoint
  * wasabi_bucket `string`: Wasabi region
  * wasabi_region `string`: Wasabi Bucket name

#### Output
* output [RemoteServerEntity](#remoteserverentity)

### deleteRemoteServersId
Delete Remote Server


```js
files.deleteRemoteServersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Remote Server ID.

#### Output
*Output schema unknown*

### getRemoteServersId
Show Remote Server


```js
files.getRemoteServersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Remote Server ID.

#### Output
* output [RemoteServerEntity](#remoteserverentity)

### patchRemoteServersId
Update Remote Server


```js
files.patchRemoteServersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Remote Server ID.
  * aws_access_key `string`: AWS Access Key.
  * aws_secret_key `string`: AWS secret key.
  * password `string`: Password if needed.
  * private_key `string`: Private key if needed.
  * google_cloud_storage_credentials_json `string`: A JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey
  * wasabi_access_key `string`: Wasabi access key.
  * wasabi_secret_key `string`: Wasabi secret key.
  * backblaze_b2_key_id `string`: Backblaze B2 Cloud Storage keyID.
  * backblaze_b2_application_key `string`: Backblaze B2 Cloud Storage applicationKey.
  * hostname `string`: Hostname or IP address
  * name `string`: Internal name for your reference
  * max_connections `integer`: Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).
  * port `integer`: Port for remote server.  Not needed for S3.
  * s3_bucket `string`: S3 bucket name
  * s3_region `string`: S3 region
  * server_certificate `string` (values: require_match, allow_any): Remote server certificate
  * server_host_key `string`: Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
  * server_type `string` (values: ftp, sftp, s3, google_cloud_storage, webdav, wasabi, backblaze_b2): Remote server type.
  * ssl `string` (values: if_available, require, require_implicit, never): Should we require SSL?
  * username `string`: Remote server username.  Not needed for S3 buckets.
  * google_cloud_storage_bucket `string`: Google Cloud Storage bucket name
  * google_cloud_storage_project_id `string`: Google Cloud Project ID
  * backblaze_b2_bucket `string`: Backblaze B2 Cloud Storage Bucket name
  * backblaze_b2_s3_endpoint `string`: Backblaze B2 Cloud Storage S3 Endpoint
  * wasabi_bucket `string`: Wasabi region
  * wasabi_region `string`: Wasabi Bucket name

#### Output
* output [RemoteServerEntity](#remoteserverentity)

### getRequests
List Requests


```js
files.getRequests({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * mine `boolean`: Only show requests of the current user?  (Defaults to true if current user is not a site admin.)
  * path `string`: Path to show requests for.  If omitted, shows all paths. Send `/` to represent the root directory.

#### Output
* output `array`
  * items [RequestEntity](#requestentity)

### postRequests
Create Request


```js
files.postRequests({
  "path": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Folder path on which to request the file.
  * destination **required** `string`: Destination filename (without extension) to request.
  * user_ids `string`: A list of user IDs to request the file from. If sent as a string, it should be comma-delimited.
  * group_ids `string`: A list of group IDs to request the file from. If sent as a string, it should be comma-delimited.

#### Output
* output [RequestEntity](#requestentity)

### requests.folders._path.get
List Requests


```js
files.requests.folders._path.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * mine `boolean`: Only show requests of the current user?  (Defaults to true if current user is not a site admin.)
  * path `string`: Path to show requests for.  If omitted, shows all paths. Send `/` to represent the root directory.

#### Output
* output `array`
  * items [RequestEntity](#requestentity)

### deleteRequestsId
Delete Request


```js
files.deleteRequestsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Request ID.

#### Output
*Output schema unknown*

### deleteSessions
Delete user session (log out)


```js
files.deleteSessions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postSessions
Create user session (log in)


```js
files.postSessions({}, context)
```

#### Input
* input `object`
  * username `string`: Username to sign in as
  * password `string`: Password for sign in
  * otp `string`: If this user has a 2FA device, provide its OTP or code here.
  * partial_session_id `string`: Identifier for a partially-completed login

#### Output
* output [SessionEntity](#sessionentity)

### getSite
Show site settings


```js
files.getSite(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SiteEntity](#siteentity)

### patchSite
Update site settings.


```js
files.patchSite({}, context)
```

#### Input
* input `object`
  * name `string`: Site name
  * subdomain `string`: Site subdomain
  * domain `string`: Custom domain
  * email `string`: Main email for this site
  * allow_bundle_names `boolean`: Are manual Bundle names allowed?
  * bundle_expiration `integer`: Site-wide Bundle expiration in days
  * overage_notify `boolean`: Notify site email of overages?
  * welcome_email_enabled `boolean`: Will the welcome email be sent to new users?
  * ask_about_overwrites `boolean`: If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.
  * show_request_access_link `boolean`: Show request access link for users without access?  Currently unused.
  * welcome_email_cc `string`: Include this email in welcome emails if enabled
  * welcome_custom_text `string`: Custom text send in user welcome email
  * language `string`: Site default language
  * windows_mode_ftp `boolean`: Does FTP user Windows emulation mode?
  * default_time_zone `string`: Site default time zone
  * desktop_app `boolean`: Is the desktop app enabled?
  * desktop_app_session_ip_pinning `boolean`: Is desktop app session IP pinning enabled?
  * desktop_app_session_lifetime `integer`: Desktop app session lifetime (in hours)
  * folder_permissions_groups_only `boolean`: If true, permissions for this site must be bound to a group (not a user). Otherwise, permissions must be bound to a user.
  * welcome_screen `string`: Does the welcome screen appear?
  * session_expiry `number`: Session expiry in hours
  * ssl_required `boolean`: Is SSL required?  Disabling this is insecure.
  * tls_disabled `boolean`: Is TLS disabled(site setting)?
  * user_lockout `boolean`: Will users be locked out after incorrect login attempts?
  * user_lockout_tries `integer`: Number of login tries within `user_lockout_within` hours before users are locked out
  * user_lockout_within `integer`: Number of hours for user lockout window
  * user_lockout_lock_period `integer`: How many hours to lock user out for failed password?
  * include_password_in_welcome_email `boolean`: Include password in emails to new users?
  * allowed_ips `string`: List of allowed IP addresses
  * days_to_retain_backups `integer`: Number of days to keep deleted files
  * max_prior_passwords `integer`: Number of prior passwords to disallow
  * password_validity_days `integer`: Number of days password is valid
  * password_min_length `integer`: Shortest password length for users
  * password_require_letter `boolean`: Require a letter in passwords?
  * password_require_mixed `boolean`: Require lower and upper case letters in passwords?
  * password_require_special `boolean`: Require special characters in password?
  * password_require_number `boolean`: Require a number in passwords?
  * password_require_unbreached `boolean`: Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)
  * sftp_user_root_enabled `boolean`: Use user FTP roots also for SFTP?
  * disable_password_reset `boolean`: Is password reset disabled?
  * immutable_files `boolean`: Are files protected from modification?
  * session_pinned_by_ip `boolean`: Are sessions locked to the same IP? (i.e. do users need to log in again if they change IPs?)
  * bundle_password_required `boolean`: Do Bundles require password protection?
  * password_requirements_apply_to_bundles `boolean`: Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?
  * opt_out_global `boolean`: Use servers in the USA only?
  * use_provided_modified_at `boolean`: Allow uploaders to set `provided_modified_at` for uploaded files?
  * custom_namespace `boolean`: Is this site using a custom namespace for users?
  * disable_users_from_inactivity_period_days `integer`: If greater than zero, users will unable to login if they do not show activity within this number of days.
  * allowed_2fa_method_sms `boolean`: Is SMS two factor authentication allowed?
  * allowed_2fa_method_u2f `boolean`: Is U2F two factor authentication allowed?
  * allowed_2fa_method_totp `boolean`: Is TOTP two factor authentication allowed?
  * allowed_2fa_method_yubi `boolean`: Is yubikey two factor authentication allowed?
  * require_2fa `boolean`: Require two-factor authentication for all users?
  * require_2fa_user_type `string`: What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?
  * color2_top `string`: Top bar background color
  * color2_left `string`: Page link and button color
  * color2_link `string`: Top bar link color
  * color2_text `string`: Page link and button color
  * color2_top_text `string`: Top bar text color
  * site_header `string`: Custom site header text
  * site_footer `string`: Custom site footer text
  * login_help_text `string`: Login help text
  * smtp_address `string`: SMTP server hostname or IP
  * smtp_authentication `string`: SMTP server authentication type
  * smtp_from `string`: From address to use when mailing through custom SMTP
  * smtp_username `string`: SMTP server username
  * smtp_port `integer`: SMTP server port
  * ldap_enabled `boolean`: Main LDAP setting: is LDAP enabled?
  * ldap_type `string`: LDAP type
  * ldap_host `string`: LDAP host
  * ldap_host_2 `string`: LDAP backup host
  * ldap_host_3 `string`: LDAP backup host
  * ldap_port `integer`: LDAP port
  * ldap_secure `boolean`: Use secure LDAP?
  * ldap_username `string`: Username for signing in to LDAP server.
  * ldap_username_field `string`: LDAP username field
  * ldap_domain `string`: Domain name that will be appended to usernames
  * ldap_user_action `string`: Should we sync users from LDAP server?
  * ldap_group_action `string`: Should we sync groups from LDAP server?
  * ldap_user_include_groups `string`: Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.
  * ldap_group_exclusion `string`: Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.
  * ldap_group_inclusion `string`: Comma or newline separated list of group names (with optional wildcards) to include when syncing.
  * ldap_base_dn `string`: Base DN for looking up users in LDAP server
  * icon16_file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * icon16_delete `boolean`: If true, will delete the file stored in icon16
  * icon32_file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * icon32_delete `boolean`: If true, will delete the file stored in icon32
  * icon48_file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * icon48_delete `boolean`: If true, will delete the file stored in icon48
  * icon128_file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * icon128_delete `boolean`: If true, will delete the file stored in icon128
  * logo_file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * logo_delete `boolean`: If true, will delete the file stored in logo
  * disable_2fa_with_delay `boolean`: If set to true, we will begin the process of disabling 2FA on this site.
  * ldap_password_change `string`: New LDAP password.
  * ldap_password_change_confirmation `string`: Confirm new LDAP password.
  * smtp_password `string`: Password for SMTP server.

#### Output
* output [SiteEntity](#siteentity)

### getSiteApiKeys
List Api Keys


```js
files.getSiteApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ApiKeyEntity](#apikeyentity)

### postSiteApiKeys
Create Api Key


```js
files.postSiteApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to 'desktop_app' to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### getSiteDnsRecords
Show site DNS configuration.


```js
files.getSiteDnsRecords({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [DnsRecordEntity](#dnsrecordentity)

### getSiteIpAddresses
List Ip Addresses


```js
files.getSiteIpAddresses({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [IpAddressEntity](#ipaddressentity)

### postSiteTestWebhook
Test webhook.


```js
files.postSiteTestWebhook({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL for testing the webhook.
  * method `string`: HTTP method(GET or POST).
  * encoding `string`: HTTP encoding method.  Can be JSON, XML, or RAW (form data).

#### Output
* output [StatusEntity](#statusentity)

### getSiteUsage
Get the most recent usage snapshot (usage data for billing purposes) for a Site.


```js
files.getSiteUsage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UsageSnapshotEntity](#usagesnapshotentity)

### getSsoStrategies
List Sso Strategies


```js
files.getSsoStrategies({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [SsoStrategyEntity](#ssostrategyentity)

### getSsoStrategiesId
Show Sso Strategy


```js
files.getSsoStrategiesId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Sso Strategy ID.

#### Output
* output [SsoStrategyEntity](#ssostrategyentity)

### styles._path.delete
Delete Style


```js
files.styles._path.delete({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Style path.

#### Output
*Output schema unknown*

### styles._path.get
Show Style


```js
files.styles._path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Style path.

#### Output
* output [StyleEntity](#styleentity)

### styles._path.patch
Update Style


```js
files.styles._path.patch({
  "path": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: Style path.
  * file **required** `string`, `object`: Logo for custom branding.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [StyleEntity](#styleentity)

### getUsageDailySnapshots
List Usage Daily Snapshots


```js
files.getUsageDailySnapshots({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [UsageDailySnapshotEntity](#usagedailysnapshotentity)

### getUsageSnapshots
List Usage Snapshots


```js
files.getUsageSnapshots({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [UsageSnapshotEntity](#usagesnapshotentity)

### patchUser
Update User


```js
files.patchUser({}, context)
```

#### Input
* input `object`
  * avatar_file `string`, `object`: An image file for your user avatar.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * avatar_delete `boolean`: If true, the avatar will be deleted.
  * change_password `string`: Used for changing a password on an existing user.
  * change_password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
  * email `string`: User's email.
  * grant_permission `string`: Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `preview`, or `history`.
  * group_id `integer`: Group ID to associate this user with.
  * group_ids `string`: A list of group ids to associate this user with.  Comma delimited.
  * password `string`: User password.
  * password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `password`.
  * announcements_read `boolean`: Signifies that the user has read all the announcements in the UI.
  * allowed_ips `string`: A list of allowed IPs if applicable.  Newline delimited
  * attachments_permission `boolean`: Can the user create Bundles (aka Share Links)?  This field will be aliased or renamed in the future to `bundles_permission`.
  * authenticate_until `string`: Scheduled Date/Time at which user will be deactivated
  * authentication_method `string` (values: password, ldap, sso, none): How is this user authenticated?
  * billing_permission `boolean`: Allow this user to perform operations on the account, payments, and invoices?
  * bypass_inactive_disable `boolean`: Exempt this user from being disabled based on inactivity?
  * bypass_site_allowed_ips `boolean`: Allow this user to skip site-wide IP blacklists?
  * dav_permission `boolean`: Can the user connect with WebDAV?
  * disabled `boolean`: Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
  * ftp_permission `boolean`: Can the user access with FTP/FTPS?
  * language `string`: Preferred language
  * notification_daily_send_time `integer`: Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  * name `string`: User's full name
  * notes `string`: Any internal notes on the user
  * password_validity_days `integer`: Number of days to allow user to use the same password
  * receive_admin_alerts `boolean`: Should the user receive admin alerts such a certificate expiration notifications and overages?
  * require_password_change `boolean`: Is a password change required upon next user login?
  * restapi_permission `boolean`: Can this user access the REST API?
  * self_managed `boolean`: Does this user manage it's own credentials or is it a shared/bot user?
  * sftp_permission `boolean`: Can the user access with SFTP?
  * site_admin `boolean`: Is the user an administrator for this site?
  * skip_welcome_screen `boolean`: Skip Welcome page in the UI?
  * ssl_required `string` (values: use_system_setting, always_require, never_require): SSL required setting
  * sso_strategy_id `integer`: SSO (Single Sign On) strategy ID for the user, if applicable.
  * subscribe_to_newsletter `boolean`: Is the user subscribed to the newsletter?
  * time_zone `string`: User time zone
  * user_root `string`: Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
  * username `string`: User's username

#### Output
* output [UserEntity](#userentity)

### getUserApiKeys
List Api Keys


```js
files.getUserApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ApiKeyEntity](#apikeyentity)

### postUserApiKeys
Create Api Key


```js
files.postUserApiKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to 'desktop_app' to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### getUserAs2Keys
List As2 Keys


```js
files.getUserAs2Keys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [As2KeyEntity](#as2keyentity)

### postUserAs2Keys
Create As2 Key


```js
files.postUserAs2Keys({
  "as2_partnership_name": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * as2_partnership_name **required** `string`: AS2 Partnership Name
  * public_key **required** `string`: Actual contents of Public key.

#### Output
* output [As2KeyEntity](#as2keyentity)

### getUserGroups
List Group Users


```js
files.getUserGroups({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  If provided, will return groups of which this user is a member.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * group_id `integer`: Group ID.  If provided, will return members of this group.

#### Output
* output `array`
  * items [GroupUserEntity](#groupuserentity)

### getUserPublicKeys
List Public Keys


```js
files.getUserPublicKeys({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [PublicKeyEntity](#publickeyentity)

### postUserPublicKeys
Create Public Key


```js
files.postUserPublicKeys({
  "title": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * title **required** `string`: Internal reference for key.
  * public_key **required** `string`: Actual contents of SSH key.

#### Output
* output [PublicKeyEntity](#publickeyentity)

### getUserCipherUses
List User Cipher Uses


```js
files.getUserCipherUses({}, context)
```

#### Input
* input `object`
  * user_id `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [UserCipherUseEntity](#usercipheruseentity)

### getUsers
List Users


```js
files.getUsers({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * q[username] `string`: List users matching username.
  * q[email] `string`: List users matching email.
  * q[notes] `string`: List users matching notes field.
  * q[admin] `string`: If `true`, list only admin users.
  * q[allowed_ips] `string`: If set, list only users with overridden allowed IP setting.
  * q[password_validity_days] `string`: If set, list only users with overridden password validity days setting.
  * q[ssl_required] `string`: If set, list only users with overridden SSL required setting.
  * search `string`: Searches for partial matches of name, username, or email.

#### Output
* output `array`
  * items [UserEntity](#userentity)

### postUsers
Create User


```js
files.postUsers({}, context)
```

#### Input
* input `object`
  * avatar_file `string`, `object`: An image file for your user avatar.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * avatar_delete `boolean`: If true, the avatar will be deleted.
  * change_password `string`: Used for changing a password on an existing user.
  * change_password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
  * email `string`: User's email.
  * grant_permission `string`: Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `preview`, or `history`.
  * group_id `integer`: Group ID to associate this user with.
  * group_ids `string`: A list of group ids to associate this user with.  Comma delimited.
  * password `string`: User password.
  * password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `password`.
  * announcements_read `boolean`: Signifies that the user has read all the announcements in the UI.
  * allowed_ips `string`: A list of allowed IPs if applicable.  Newline delimited
  * attachments_permission `boolean`: Can the user create Bundles (aka Share Links)?  This field will be aliased or renamed in the future to `bundles_permission`.
  * authenticate_until `string`: Scheduled Date/Time at which user will be deactivated
  * authentication_method `string` (values: password, ldap, sso, none): How is this user authenticated?
  * billing_permission `boolean`: Allow this user to perform operations on the account, payments, and invoices?
  * bypass_inactive_disable `boolean`: Exempt this user from being disabled based on inactivity?
  * bypass_site_allowed_ips `boolean`: Allow this user to skip site-wide IP blacklists?
  * dav_permission `boolean`: Can the user connect with WebDAV?
  * disabled `boolean`: Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
  * ftp_permission `boolean`: Can the user access with FTP/FTPS?
  * language `string`: Preferred language
  * notification_daily_send_time `integer`: Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  * name `string`: User's full name
  * notes `string`: Any internal notes on the user
  * password_validity_days `integer`: Number of days to allow user to use the same password
  * receive_admin_alerts `boolean`: Should the user receive admin alerts such a certificate expiration notifications and overages?
  * require_password_change `boolean`: Is a password change required upon next user login?
  * restapi_permission `boolean`: Can this user access the REST API?
  * self_managed `boolean`: Does this user manage it's own credentials or is it a shared/bot user?
  * sftp_permission `boolean`: Can the user access with SFTP?
  * site_admin `boolean`: Is the user an administrator for this site?
  * skip_welcome_screen `boolean`: Skip Welcome page in the UI?
  * ssl_required `string` (values: use_system_setting, always_require, never_require): SSL required setting
  * sso_strategy_id `integer`: SSO (Single Sign On) strategy ID for the user, if applicable.
  * subscribe_to_newsletter `boolean`: Is the user subscribed to the newsletter?
  * time_zone `string`: User time zone
  * user_root `string`: Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
  * username `string`: User's username

#### Output
* output [UserEntity](#userentity)

### deleteUsersId
Delete User


```js
files.deleteUsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.

#### Output
*Output schema unknown*

### getUsersId
Show User


```js
files.getUsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.

#### Output
* output [UserEntity](#userentity)

### patchUsersId
Update User


```js
files.patchUsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.
  * avatar_file `string`, `object`: An image file for your user avatar.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * avatar_delete `boolean`: If true, the avatar will be deleted.
  * change_password `string`: Used for changing a password on an existing user.
  * change_password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
  * email `string`: User's email.
  * grant_permission `string`: Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `preview`, or `history`.
  * group_id `integer`: Group ID to associate this user with.
  * group_ids `string`: A list of group ids to associate this user with.  Comma delimited.
  * password `string`: User password.
  * password_confirmation `string`: Optional, but if provided, we will ensure that it matches the value sent in `password`.
  * announcements_read `boolean`: Signifies that the user has read all the announcements in the UI.
  * allowed_ips `string`: A list of allowed IPs if applicable.  Newline delimited
  * attachments_permission `boolean`: Can the user create Bundles (aka Share Links)?  This field will be aliased or renamed in the future to `bundles_permission`.
  * authenticate_until `string`: Scheduled Date/Time at which user will be deactivated
  * authentication_method `string` (values: password, ldap, sso, none): How is this user authenticated?
  * billing_permission `boolean`: Allow this user to perform operations on the account, payments, and invoices?
  * bypass_inactive_disable `boolean`: Exempt this user from being disabled based on inactivity?
  * bypass_site_allowed_ips `boolean`: Allow this user to skip site-wide IP blacklists?
  * dav_permission `boolean`: Can the user connect with WebDAV?
  * disabled `boolean`: Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
  * ftp_permission `boolean`: Can the user access with FTP/FTPS?
  * language `string`: Preferred language
  * notification_daily_send_time `integer`: Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  * name `string`: User's full name
  * notes `string`: Any internal notes on the user
  * password_validity_days `integer`: Number of days to allow user to use the same password
  * receive_admin_alerts `boolean`: Should the user receive admin alerts such a certificate expiration notifications and overages?
  * require_password_change `boolean`: Is a password change required upon next user login?
  * restapi_permission `boolean`: Can this user access the REST API?
  * self_managed `boolean`: Does this user manage it's own credentials or is it a shared/bot user?
  * sftp_permission `boolean`: Can the user access with SFTP?
  * site_admin `boolean`: Is the user an administrator for this site?
  * skip_welcome_screen `boolean`: Skip Welcome page in the UI?
  * ssl_required `string` (values: use_system_setting, always_require, never_require): SSL required setting
  * sso_strategy_id `integer`: SSO (Single Sign On) strategy ID for the user, if applicable.
  * subscribe_to_newsletter `boolean`: Is the user subscribed to the newsletter?
  * time_zone `string`: User time zone
  * user_root `string`: Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
  * username `string`: User's username

#### Output
* output [UserEntity](#userentity)

### postUsersId2faReset
Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.


```js
files.postUsersId2faReset({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.

#### Output
*Output schema unknown*

### postUsersIdResendWelcomeEmail
Resend user welcome email


```js
files.postUsersIdResendWelcomeEmail({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.

#### Output
*Output schema unknown*

### postUsersIdUnlock
Unlock user who has been locked out due to failed logins.


```js
files.postUsersIdUnlock({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.

#### Output
*Output schema unknown*

### getUsersUserIdApiKeys
List Api Keys


```js
files.getUsersUserIdApiKeys({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [ApiKeyEntity](#apikeyentity)

### postUsersUserIdApiKeys
Create Api Key


```js
files.postUsersUserIdApiKeys({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * name `string`: Internal name for key.  For your reference only.
  * permission_set `string`: Leave blank, or set to 'desktop_app' to restrict the key to only desktop app functions.
  * expires_at `string`: Have the key expire at this date/time.

#### Output
* output [ApiKeyEntity](#apikeyentity)

### getUsersUserIdAs2Keys
List As2 Keys


```js
files.getUsersUserIdAs2Keys({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [As2KeyEntity](#as2keyentity)

### postUsersUserIdAs2Keys
Create As2 Key


```js
files.postUsersUserIdAs2Keys({
  "user_id": 0,
  "as2_partnership_name": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * as2_partnership_name **required** `string`: AS2 Partnership Name
  * public_key **required** `string`: Actual contents of Public key.

#### Output
* output [As2KeyEntity](#as2keyentity)

### getUsersUserIdCipherUses
List User Cipher Uses


```js
files.getUsersUserIdCipherUses({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [UserCipherUseEntity](#usercipheruseentity)

### getUsersUserIdGroups
List Group Users


```js
files.getUsersUserIdGroups({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  If provided, will return groups of which this user is a member.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * group_id `integer`: Group ID.  If provided, will return members of this group.

#### Output
* output `array`
  * items [GroupUserEntity](#groupuserentity)

### getUsersUserIdPermissions
List Permissions


```js
files.getUsersUserIdPermissions({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  * path `string`: Permission path.  If provided, will scope permissions to this path.
  * group_id `string`: Group ID.  If provided, will scope permissions to this group.
  * user_id **required** `string`: User ID.  If provided, will scope permissions to this user.
  * include_groups `boolean`: If searching by user or group, also include user's permissions that are inherited from its groups?

#### Output
* output `array`
  * items [PermissionEntity](#permissionentity)

### getUsersUserIdPublicKeys
List Public Keys


```js
files.getUsersUserIdPublicKeys({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * page `integer`: Current page number.
  * per_page `integer`: Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  * action `string`: Deprecated: If set to `count` returns a count of matching records rather than the records themselves.

#### Output
* output `array`
  * items [PublicKeyEntity](#publickeyentity)

### postUsersUserIdPublicKeys
Create Public Key


```js
files.postUsersUserIdPublicKeys({
  "user_id": 0,
  "title": "",
  "public_key": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID.  Provide a value of `0` to operate the current session's user.
  * title **required** `string`: Internal reference for key.
  * public_key **required** `string`: Actual contents of SSH key.

#### Output
* output [PublicKeyEntity](#publickeyentity)



## Definitions

### AccountLineItemEntity
* AccountLineItemEntity `object`: List Payments
  * amount `number`: Line item amount
  * balance `number`: Line item balance
  * created_at `string`: Line item created at
  * currency `string`: Line item currency
  * download_uri `string`: Line item download uri
  * id `integer`: Line item Id
  * invoice_line_items `array`: Associated invoice line items
    * items [InvoiceLineItemEntity](#invoicelineitementity)
  * method `string`: Line item payment method
  * payment_line_items `array`: Associated payment line items
    * items [PaymentLineItemEntity](#paymentlineitementity)
  * payment_reversed_at `string`: Date/time payment was reversed if applicable
  * payment_type `string`: Type of payment if applicable
  * site_name `string`: Site name this line item is for
  * type `string`: Type of line item, either payment or invoice
  * updated_at `string`: Line item updated at

### ActionEntity
* ActionEntity `object`: List site full action history.
  * action `string` (values: create, read, update, destroy, move, login, failedlogin, copy, user_create, user_update, user_destroy, group_create, group_update, group_destroy, permission_create, permission_destroy, api_key_create, api_key_update, api_key_destroy): Type of action
  * destination `string`: The destination path for this action, if applicable
  * display `string`: Friendly displayed output
  * failure_type `string` (values: expired_trial, account_overdue, locked_out, ip_mismatch, password_mismatch, site_mismatch, username_not_found, none, no_ftp_permission, no_web_permission, no_directory, errno_enoent, no_sftp_permission, no_dav_permission, no_restapi_permission, key_mismatch, region_mismatch, expired_access, desktop_ip_mismatch, desktop_api_key_not_used_quickly_enough, disabled): Failure type.  If action was a user login or session failure, why did it fail?
  * id `integer`: Action ID
  * interface `string` (values: web, ftp, robot, jsapi, webdesktopapi, sftp, dav, desktop, restapi, scim): Interface on which this action occurred.
  * ip `string`: IP Address that performed this action
  * path `string`: Path
  * source `string`: The source path for this action, if applicable
  * targets `array`: Targets
    * items `string`
  * user_id `integer`: User ID
  * username `string`: Username
  * when `string`: Action occurrence date/time

### ApiKeyEntity
* ApiKeyEntity `object`: List Api Keys
  * created_at `string`: Time which API Key was created
  * descriptive_label `string`: Unique label that describes this API key.  Useful for external systems where you may have API keys from multiple accounts and want a human-readable label for each key.
  * expires_at `string`: API Key expiration date
  * id `integer`: API Key ID
  * key `string`: API Key actual key string
  * last_use_at `string`: API Key last used - note this value is only updated once per 3 hour period, so the 'actual' time of last use may be up to 3 hours later than this timestamp.
  * name `string`: Internal name for the API Key.  For your use.
  * permission_set `string` (values: none, full, desktop_app, sync_app): Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations.)  We hope to offer additional permission sets in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
  * platform `string`: If this API key represents a Desktop app, what platform was it created on?
  * user_id `integer`: User ID for the owner of this API Key.  May be blank for Site-wide API Keys.

### As2KeyEntity
* As2KeyEntity `object`: List As2 Keys
  * as2_partnership_name `string`: AS2 Partnership Name
  * created_at `string`: AS2 Key created at date/time
  * fingerprint `string`: Public key fingerprint
  * id `integer`: AS2 Key ID

### AutoEntity
* AutoEntity `object`
  * dynamic `object`: Additional data

### AutomationEntity
* AutomationEntity `object`: List Automations
  * automation `string` (values: create_folder, request_file, request_move): Automation type
  * destination `string`: Destination Path
  * destination_replace_from `string`: If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  * destination_replace_to `string`: If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  * group_ids `array`: IDs of Groups for the Automation (i.e. who to Request File from)
    * items `integer`
  * id `integer`: Automation ID
  * interval `string`: How often to run this automation?  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  * next_process_on `string`: Date this automation will next run.
  * path `string`: Path on which this Automation runs.  Supports globs.
  * realtime `boolean`: Does this automation run in real time?  This is a read-only property based on automation type.
  * source `string`: Source Path
  * user_id `integer`: User ID of the Automation's creator.
  * user_ids `array`: IDs of Users for the Automation (i.e. who to Request File from)
    * items `integer`

### BehaviorEntity
* BehaviorEntity `object`: List Behaviors
  * attachment_url `string`: URL for attached file
  * behavior `string`: Behavior type.
  * id `integer`: Folder behavior ID
  * path `string`: Folder path
  * value `object`: Settings for this behavior.  See the section above for an example value to provide here.  Formatting is different for each Behavior type.  May be sent as nested JSON or a single JSON-encoded string.  If using XML encoding for the API call, this data must be sent as a JSON-encoded string.

### BundleEntity
* BundleEntity `object`: List Bundles
  * code `string`: Bundle code.  This code forms the end part of the Public URL.
  * created_at `string`: Bundle created at date/time
  * description `string`: Public description
  * expires_at `string`: Bundle expiration date/time
  * id `integer`: Bundle ID
  * note `string`: Bundle internal note
  * password_protected `boolean`: Is this bundle password protected?
  * paths `array`: A list of paths in this bundle
    * items `string`
  * url `string`: Public URL of Share Link
  * user_id `integer`: Bundle creator user ID
  * username `string`: Bundle creator username

### DnsRecordEntity
* DnsRecordEntity `object`: Show site DNS configuration.
  * domain `string`: DNS record domain name
  * id `string`: Unique label for DNS record; used by Zapier and other integrations.
  * rrtype `string`: DNS record type
  * value `string`: DNS record value

### ErrorsEntity
* ErrorsEntity `object`
  * fields `array`: A list of fields where errors occur
    * items `string`
  * messages `array`: A list of error messages
    * items `string`

### FileCommentEntity
* FileCommentEntity `object`: List File Comments by path
  * body `string`: Comment body.
  * id `integer`: File Comment ID
  * reactions `array`: Reactions to this comment.
    * items [FileCommentReactionEntity](#filecommentreactionentity)

### FileCommentReactionEntity
* FileCommentReactionEntity `object`: Create File Comment Reaction
  * emoji `string`: Emoji used in the reaction.
  * id `integer`: Reaction ID

### FileEntity
* FileEntity `object`: List Folders by path
  * crc32 `string`: File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
  * display_name `string`: File/Folder display name
  * download_uri `string`: Link to download file. Provided only in response to a download request.
  * id `integer`: File/Folder ID
  * md5 `string`: File MD5 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
  * mime_type `string`: MIME Type.  This is determined by the filename extension and is not stored separately internally.
  * mtime `string`: File last modified date/time, according to the server.  This is the timestamp of the last Files.com operation of the file, regardless of what modified timestamp was sent.
  * path `string`: File/Folder path
  * permissions `string`: A short string representing the current user's permissions.  Can be `r`,`w`,`p`, or any combination
  * preview [PreviewEntity](#previewentity)
  * preview_id `integer`: File preview ID
  * priority_color `string`: Bookmark/priority color of file/folder
  * provided_mtime `string`: File last modified date/time, according to the client who set it.  Files.com allows desktop, FTP, SFTP, and WebDAV clients to set modified at times.  This allows Desktop<->Cloud syncing to preserve modified at times.
  * region `string`: Region location
  * size `integer`: File/Folder size
  * subfolders_locked? `boolean`: Are subfolders locked and unable to be modified?
  * type `string`: Type: `directory` or `file`.

### FilePartUploadEntity
* FilePartUploadEntity `object`: Begin file upload
  * action `string`: Type of upload
  * ask_about_overwrites `boolean`: If false, rename conflicting files instead of asking for overwrite confirmation
  * available_parts `string`: Currently unused
  * expires `string`: Currently unused
  * headers `object`: Additional upload headers
  * http_method `string`: Upload method, usually POST
  * next_partsize `string`: Currently unused
  * parameters `string`: Additional upload parameters
  * part_number `string`: Currently unused
  * partsize `string`: Currently unused
  * path `string`: Upload path
  * ref `string`: Reference name for this upload part
  * send `object`: Content-Type and File to send
  * upload_uri `string`: URI to upload this part to

### GroupEntity
* GroupEntity `object`: List Groups
  * admin_ids `array`: List of user IDs who are group administrators (separated by commas)
    * items `string`
  * id `integer`: Group ID
  * name `string`: Group name
  * notes `string`: Notes about this group
  * user_ids `array`: List of user IDs who belong to this group (separated by commas)
    * items `integer`
  * usernames `array`: List of usernames who belong to this group (separated by commas)
    * items `string`

### GroupUserEntity
* GroupUserEntity `object`: List Group Users
  * admin `boolean`: Is this user an administrator of this group?
  * id `integer`: Group ID
  * name `string`: Group name
  * usernames `array`: A list of usernames for users in this group
    * items `string`

### HistoryExportEntity
* HistoryExportEntity `object`: List History Exports
  * end_at `string`: End date/time of export range.
  * id `integer`: History Export ID
  * query_action `string`: Filter results by this this action type. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`
  * query_destination `string`: Return results that are file moves with this path as destination.
  * query_failure_type `string`: If searching for Histories about login failures, this parameter restricts results to failures of this specific type.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`
  * query_file_id `integer`: Return results that are file actions related to the file indicated by this File ID
  * query_folder `string`: Return results that are file actions related to files or folders inside this folder path.
  * query_interface `string`: Filter results by this this interface type. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`
  * query_ip `string`: Filter results by this IP address.
  * query_parent_id `integer`: Return results that are file actions inside the parent folder specified by this folder ID
  * query_path `string`: Return results that are file actions related to this path.
  * query_src `string`: Return results that are file moves originating from this path.
  * query_target_id `integer`: If searching for Histories about specific objects (such as Users, or API Keys), this paremeter restricts results to objects that match this ID.
  * query_target_name `string`: If searching for Histories about Users, Groups or other objects with names, this parameter restricts results to objects with this name/username.
  * query_target_permission `string`: If searching for Histories about Permisisons, this parameter restricts results to permissions of this level.
  * query_target_permission_set `string`: If searching for Histories about API keys, this parameter restricts results to API keys with this permission set.
  * query_target_platform `string`: If searching for Histories about API keys, this parameter restricts results to API keys associated with this platform.
  * query_target_user_id `integer`: If searching for Histories about API keys, this parameter restricts results to API keys created by/for this user ID.
  * query_target_username `string`: If searching for Histories about API keys, this parameter restricts results to API keys created by/for this username.
  * query_user_id `integer`: Return results that are actions performed by the user indiciated by this User ID
  * query_username `string`: Filter results by this username.
  * start_at `string`: Start date/time of export range.
  * status `string`: Status of export.  Will be: `building` or `ready`

### ImageEntity
* ImageEntity `object`
  * name `string`: Image name
  * uri `string`: Image URI

### InvoiceLineItemEntity
* InvoiceLineItemEntity `object`
  * amount `number`: Invoice line item amount
  * created_at `string`: Invoice line item created at date/time
  * description `string`: Invoice line item description
  * plan `string`: Plan name
  * service_end_at `string`: Invoice line item service end date/time
  * service_start_at `string`: Invoice line item service start date/time
  * site `string`: Site name
  * type `string` (values: invoice, adjustment, overage): Invoice line item type
  * updated_at `string`: Invoice line item updated date/time

### IpAddressEntity
* IpAddressEntity `object`: List Ip Addresses
  * associated_with `string`: The object that this public IP address list is associated with.
  * group_id `integer`: Group ID
  * id `string`: Unique label for list; used by Zapier and other integrations.
  * ip_addresses `array`: A list of IP addresses.
    * items `string`

### LockEntity
* LockEntity `object`: List Locks by path
  * depth `string`: Lock depth (0 or infinity)
  * owner `string`: Owner of lock.  This can be any arbitrary string.
  * path `string`: Path
  * scope `string`: Lock scope(shared or exclusive)
  * timeout `integer`: Lock timeout
  * token `string`: Lock token.  Use to release lock.
  * type `string`: Lock type
  * user_id `integer`: Lock creator user ID
  * username `string`: Lock creator username

### MessageCommentEntity
* MessageCommentEntity `object`: List Message Comments
  * body `string`: Comment body.
  * id `integer`: Message Comment ID
  * reactions `array`: Reactions to this comment.
    * items [MessageCommentReactionEntity](#messagecommentreactionentity)

### MessageCommentReactionEntity
* MessageCommentReactionEntity `object`: List Message Comment Reactions
  * emoji `string`: Emoji used in the reaction.
  * id `integer`: Reaction ID

### MessageEntity
* MessageEntity `object`: List Messages
  * body `string`: Message body.
  * comments `array`: Comments.
    * items [MessageCommentEntity](#messagecommententity)
  * id `integer`: Message ID
  * subject `string`: Message subject.

### MessageReactionEntity
* MessageReactionEntity `object`: List Message Reactions
  * emoji `string`: Emoji used in the reaction.
  * id `integer`: Reaction ID

### NotificationEntity
* NotificationEntity `object`: List Notifications
  * group_id `integer`: Notification group id
  * group_name `string`: Group name if applicable
  * id `integer`: Notification ID
  * notify_on_copy `boolean`: Triggers notification when moving or copying files to this path
  * notify_user_actions `boolean`: Trigger notification on notification user actions?
  * path `string`: Folder path to notify on
  * send_interval `string` (values: five_minutes, fifteen_minutes, hourly, daily): The time interval that notifications are aggregated to
  * suppressed_email `boolean`: If true, it means that the recipient at this user's email address has manually unsubscribed from all emails, or had their email "hard bounce", which means that we are unable to send mail to this user's current email address. Notifications will resume if the user changes their email address.
  * unsubscribed `boolean`: Is the user unsubscribed from this notification?
  * unsubscribed_reason `string` (values: none, unsubscribe_link_clicked, mail_bounced, mail_marked_as_spam): The reason that the user unsubscribed
  * user_id `integer`: Notification user ID
  * username `string`: Notification username

### PaymentLineItemEntity
* PaymentLineItemEntity `object`
  * amount `number`: Payment line item amount
  * created_at `string`: Payment line item created at date/time
  * invoice_id `integer`: Invoice ID
  * payment_id `integer`: Payment ID
  * updated_at `string`: Payment line item updated at date/time

### PermissionEntity
* PermissionEntity `object`: List Permissions
  * group_id `integer`: Group ID
  * group_name `string`: Group name if applicable
  * id `integer`: Permission ID
  * path `string`: Folder path
  * permission `string` (values: full, readonly, writeonly, previewonly, history, admin): Permission type
  * recursive `boolean`: Does this permission apply to subfolders?
  * user_id `integer`: User ID
  * username `string`: User's username

### PreviewEntity
* PreviewEntity `object`
  * download_uri `string`: Link to download preview
  * id `integer`: Preview ID
  * size `integer`: Preview size
  * status `string`: Preview status.  Can be invalid, not_generated, generating, complete, or file_too_large
  * type `string`: Preview status.  Can be invalid, not_generated, generating, complete, or file_too_large

### ProjectEntity
* ProjectEntity `object`: List Projects
  * global_access `string` (values: none, anyone_with_read, anyone_with_full): Global access settings
  * id `integer`: Project ID

### PublicKeyEntity
* PublicKeyEntity `object`: List Public Keys
  * created_at `string`: Public key created at date/time
  * fingerprint `string`: Public key fingerprint
  * id `integer`: Public key ID
  * title `string`: Public key title

### RemoteServerEntity
* RemoteServerEntity `object`: Create Remote Server
  * authentication_method `string`: Type of authentication method
  * backblaze_b2_bucket `string`: Backblaze B2 Cloud Storage Bucket name
  * backblaze_b2_s3_endpoint `string`: Backblaze B2 Cloud Storage S3 Endpoint
  * google_cloud_storage_bucket `string`: Google Cloud Storage bucket name
  * google_cloud_storage_project_id `string`: Google Cloud Project ID
  * hostname `string`: Hostname or IP address
  * id `integer`: Remote server ID
  * max_connections `integer`: Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).
  * name `string`: Internal name for your reference
  * port `integer`: Port for remote server.  Not needed for S3.
  * s3_bucket `string`: S3 bucket name
  * s3_region `string`: S3 region
  * server_certificate `string` (values: require_match, allow_any): Remote server certificate
  * server_host_key `string`: Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
  * server_type `string` (values: ftp, sftp, s3, google_cloud_storage, webdav, wasabi, backblaze_b2): Remote server type.
  * ssl `string` (values: if_available, require, require_implicit, never): Should we require SSL?
  * username `string`: Remote server username.  Not needed for S3 buckets.
  * wasabi_bucket `string`: Wasabi region
  * wasabi_region `string`: Wasabi Bucket name

### RequestEntity
* RequestEntity `object`: List Requests
  * automation_id `string`: ID of automation that created request
  * destination `string`: Destination filename
  * id `integer`: Request ID
  * path `string`: Folder path
  * source `string`: Source filename, if applicable
  * user_display_name `string`: User making the request (if applicable)

### SessionEntity
* SessionEntity `object`: Create user session (log in)
  * allowed_2fa_method_sms `boolean`: Sent only if 2FA setup is needed. Is SMS two factor authentication allowed?
  * allowed_2fa_method_totp `boolean`: Sent only if 2FA setup is needed. Is TOTP two factor authentication allowed?
  * allowed_2fa_method_u2f `boolean`: Sent only if 2FA setup is needed. Is U2F two factor authentication allowed?
  * allowed_2fa_method_yubi `boolean`: Sent only if 2FA setup is needed. Is Yubikey two factor authentication allowed?
  * id `integer`: Session ID
  * language `string`: Session language
  * login_token `string`: Login token. If set, this token will allow your user to log in via browser at the domain in `login_token_domain`.
  * login_token_domain `string`: Domain to use with `login_token`.
  * max_dir_listing_size `integer`: Maximum number of files to retrieve per folder for a directory listing.  This is based on the user's plan.
  * multiple_regions `boolean`: Can access multiple regions?
  * read_only `boolean`: Is this session read only?
  * root_path `string`: Initial root path to start the user's session in.
  * site_id `integer`: Site ID
  * ssl_required `boolean`: Is SSL required for this user?  (If so, ensure all your communications with this user use SSL.)
  * tls_disabled `boolean`: Is strong TLS disabled for this user? (If this is set to true, the site administrator has signaled that it is ok to use less secure TLS versions for this user.)
  * two_factor_setup_needed `boolean`: If true, this user needs to add a Two Factor Authentication method before performing any further actions.
  * use_provided_modified_at `boolean`: Allow the user to provide file/folder modified at dates?  If false, the server will always use the current date/time.
  * windows_mode_ftp `boolean`: Does this user want to use Windows line-ending emulation?  (CR vs CRLF)

### SiteEntity
* SiteEntity `object`: Show site settings
  * admin_user_id `integer`: User ID for the main site administrator
  * allow_bundle_names `boolean`: Are manual Bundle names allowed?
  * allowed_2fa_method_sms `boolean`: Is SMS two factor authentication allowed?
  * allowed_2fa_method_totp `boolean`: Is TOTP two factor authentication allowed?
  * allowed_2fa_method_u2f `boolean`: Is U2F two factor authentication allowed?
  * allowed_2fa_method_yubi `boolean`: Is yubikey two factor authentication allowed?
  * allowed_ips `string`: List of allowed IP addresses
  * ask_about_overwrites `boolean`: If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.
  * bundle_expiration `integer`: Site-wide Bundle expiration in days
  * bundle_password_required `boolean`: Do Bundles require password protection?
  * color2_left `string`: Page link and button color
  * color2_link `string`: Top bar link color
  * color2_text `string`: Page link and button color
  * color2_top `string`: Top bar background color
  * color2_top_text `string`: Top bar text color
  * created_at `string`: Time this site was created
  * currency `string`: Preferred currency
  * custom_namespace `boolean`: Is this site using a custom namespace for users?
  * days_to_retain_backups `integer`: Number of days to keep deleted files
  * default_time_zone `string`: Site default time zone
  * desktop_app `boolean`: Is the desktop app enabled?
  * desktop_app_session_ip_pinning `boolean`: Is desktop app session IP pinning enabled?
  * desktop_app_session_lifetime `integer`: Desktop app session lifetime (in hours)
  * disable_notifications `boolean`: Are notifications disabled?
  * disable_password_reset `boolean`: Is password reset disabled?
  * disable_users_from_inactivity_period_days `integer`: If greater than zero, users will unable to login if they do not show activity within this number of days.
  * domain `string`: Custom domain
  * email `string`: Main email for this site
  * folder_permissions_groups_only `boolean`: If true, permissions for this site must be bound to a group (not a user). Otherwise, permissions must be bound to a user.
  * hipaa `boolean`: Is there a signed HIPAA BAA between Files.com and this site?
  * icon128 [ImageEntity](#imageentity)
  * icon16 [ImageEntity](#imageentity)
  * icon32 [ImageEntity](#imageentity)
  * icon48 [ImageEntity](#imageentity)
  * immutable_files_set_at `string`: Can files be modified?
  * include_password_in_welcome_email `boolean`: Include password in emails to new users?
  * language `string`: Site default language
  * ldap_base_dn `string`: Base DN for looking up users in LDAP server
  * ldap_domain `string`: Domain name that will be appended to usernames
  * ldap_enabled `boolean`: Main LDAP setting: is LDAP enabled?
  * ldap_group_action `string`: Should we sync groups from LDAP server?
  * ldap_group_exclusion `string`: Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.
  * ldap_group_inclusion `string`: Comma or newline separated list of group names (with optional wildcards) to include when syncing.
  * ldap_host `string`: LDAP host
  * ldap_host_2 `string`: LDAP backup host
  * ldap_host_3 `string`: LDAP backup host
  * ldap_port `integer`: LDAP port
  * ldap_secure `boolean`: Use secure LDAP?
  * ldap_type `string`: LDAP type
  * ldap_user_action `string`: Should we sync users from LDAP server?
  * ldap_user_include_groups `string`: Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.
  * ldap_username `string`: Username for signing in to LDAP server.
  * ldap_username_field `string`: LDAP username field
  * login_help_text `string`: Login help text
  * logo [ImageEntity](#imageentity)
  * max_prior_passwords `integer`: Number of prior passwords to disallow
  * name `string`: Site name
  * next_billing_amount `number`: Next billing amount
  * next_billing_date `string`: Next billing date
  * opt_out_global `boolean`: Use servers in the USA only?
  * overage_notified_at `string`: Last time the site was notified about an overage
  * overage_notify `boolean`: Notify site email of overages?
  * overdue `boolean`: Is this site's billing overdue?
  * password_min_length `integer`: Shortest password length for users
  * password_require_letter `boolean`: Require a letter in passwords?
  * password_require_mixed `boolean`: Require lower and upper case letters in passwords?
  * password_require_number `boolean`: Require a number in passwords?
  * password_require_special `boolean`: Require special characters in password?
  * password_require_unbreached `boolean`: Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)
  * password_requirements_apply_to_bundles `boolean`: Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?
  * password_validity_days `integer`: Number of days password is valid
  * phone `string`: Site phone number
  * require_2fa `boolean`: Require two-factor authentication for all users?
  * require_2fa_stop_time `string`: If set, requirement for two-factor authentication has been scheduled to end on this date-time.
  * require_2fa_user_type `string` (values: all, folder_and_site_admins, site_admins): What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?
  * session [SessionEntity](#sessionentity)
  * session_expiry `number`: Session expiry in hours
  * session_pinned_by_ip `boolean`: Are sessions locked to the same IP? (i.e. do users need to log in again if they change IPs?)
  * sftp_user_root_enabled `boolean`: Use user FTP roots also for SFTP?
  * show_request_access_link `boolean`: Show request access link for users without access?  Currently unused.
  * site_footer `string`: Custom site footer text
  * site_header `string`: Custom site header text
  * smtp_address `string`: SMTP server hostname or IP
  * smtp_authentication `string`: SMTP server authentication type
  * smtp_from `string`: From address to use when mailing through custom SMTP
  * smtp_port `integer`: SMTP server port
  * smtp_username `string`: SMTP server username
  * ssl_required `boolean`: Is SSL required?  Disabling this is insecure.
  * subdomain `string`: Site subdomain
  * switch_to_plan_date `string`: If switching plans, when does the new plan take effect?
  * tls_disabled `boolean`: Is TLS disabled(site setting)?
  * trial_days_left `integer`: Number of days left in trial
  * trial_until `string`: When does this Site trial expire?
  * updated_at `string`: Last time this Site was updated
  * use_provided_modified_at `boolean`: Allow uploaders to set `provided_modified_at` for uploaded files?
  * user [UserEntity](#userentity)
  * user_lockout `boolean`: Will users be locked out after incorrect login attempts?
  * user_lockout_lock_period `integer`: How many hours to lock user out for failed password?
  * user_lockout_tries `integer`: Number of login tries within `user_lockout_within` hours before users are locked out
  * user_lockout_within `integer`: Number of hours for user lockout window
  * welcome_custom_text `string`: Custom text send in user welcome email
  * welcome_email_cc `string`: Include this email in welcome emails if enabled
  * welcome_email_enabled `boolean`: Will the welcome email be sent to new users?
  * welcome_screen `string` (values: enabled, hidden, disabled): Does the welcome screen appear?
  * windows_mode_ftp `boolean`: Does FTP user Windows emulation mode?

### SsoStrategyEntity
* SsoStrategyEntity `object`: List Sso Strategies
  * deprovision_groups `boolean`: Auto-deprovision group membership based on group memberships on the SSO side?
  * deprovision_users `boolean`: Auto-deprovision users?
  * enabled `boolean`: Is strategy enabled?
  * id `integer`: ID
  * label `string`: Custom label for the SSO provider on the login page.
  * ldap_base_dn `string`: Base DN for looking up users in LDAP server
  * ldap_domain `string`: Domain name that will be appended to LDAP usernames
  * ldap_host `string`: LDAP host
  * ldap_host_2 `string`: LDAP backup host
  * ldap_host_3 `string`: LDAP backup host
  * ldap_port `integer`: LDAP port
  * ldap_secure `boolean`: Use secure LDAP?
  * ldap_user_include_groups `string`: Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.
  * ldap_username `string`: Username for signing in to LDAP server.
  * ldap_username_field `string` (values: sAMAccountName, userPrincipalName): LDAP username field
  * logo_url `string`: URL holding a custom logo for the SSO provider on the login page.
  * protocol `string` (values: oauth2, openid2, saml, active_directory, open_ldap): SSO Protocol
  * provider `string` (values: google, auth0, okta, atlassian, azure, box, dropbox, slack, ubuntu, onelogin, saml, idaptive, ldap): Provider name
  * provision_attachments_permission `boolean`: Auto-provisioned users get Sharing permission?
  * provision_dav_permission `boolean`: Auto-provisioned users get WebDAV permission?
  * provision_ftp_permission `boolean`: Auto-provisioned users get FTP permission?
  * provision_group_default `string`: Comma-separated list of group names for groups to automatically add all auto-provisioned users to.
  * provision_group_exclusion `string`: Comma-separated list of group names for groups (with optional wildcards) that will be excluded from auto-provisioning.
  * provision_group_inclusion `string`: Comma-separated list of group names for groups (with optional wildcards) that will be auto-provisioned.
  * provision_group_required `string`: Comma or newline separated list of group names (with optional wildcards) to require membership for user provisioning.
  * provision_groups `boolean`: Auto-provision group membership based on group memberships on the SSO side?
  * provision_sftp_permission `boolean`: Auto-provisioned users get SFTP permission?
  * provision_time_zone `string`: Default time zone for auto provisioned users.
  * provision_users `boolean`: Auto-provision users?
  * saml_provider_cert_fingerprint `string`: Identity provider sha256 cert fingerprint if saml_provider_metadata_url is not available.
  * saml_provider_issuer_url `string`: Identity provider issuer url
  * saml_provider_metadata_url `string`: Metadata URL for the SAML identity provider
  * saml_provider_slo_target_url `string`: Identity provider SLO endpoint
  * saml_provider_sso_target_url `string`: Identity provider SSO endpoint if saml_provider_metadata_url is not available.
  * scim_authentication_method `string` (values: none, basic, token): SCIM authentication type.
  * scim_username `string`: SCIM username.
  * subdomain `string`: Subdomain

### StatusEntity
* StatusEntity `object`: Test webhook.
  * code `integer`: Status http code
  * data [AutoEntity](#autoentity)
  * errors `array`: A list of api errors
    * items [ErrorsEntity](#errorsentity)
  * message `string`: Error message
  * status `string`: Status message

### StyleEntity
* StyleEntity `object`: Show Style
  * id `integer`: Style ID
  * logo [ImageEntity](#imageentity)
  * path `string`: Folder path
  * thumbnail [ImageEntity](#imageentity)

### UsageDailySnapshotEntity
* UsageDailySnapshotEntity `object`: List Usage Daily Snapshots
  * current_storage `integer`: The quantity of storage held for this site
  * date `string`: The date of this usage record
  * id `integer`: ID of the usage record
  * usage_by_top_level_dir `array`: Usage broken down by each top-level folder

### UsageSnapshotEntity
* UsageSnapshotEntity `object`: List Usage Snapshots
  * created_at `string`: Site usage report created at date/time
  * current_storage `number`: Current site usage as of report
  * deleted_files_counted_in_minimum `number`: Usage for files that are deleted but uploaded within last 30 days
  * deleted_files_storage `number`: Usage for files that are deleted but retained as backups
  * end_at `string`: Site usage report end date/time
  * high_water_storage `number`: Site usage report highest usage in time period
  * id `integer`: Site usage ID
  * root_storage `number`: Usage for root folder
  * start_at `string`: Site usage report start date/time
  * total_downloads `integer`: Number of downloads in report time period
  * total_uploads `integer`: Number of uploads in time period
  * updated_at `string`: The last time this site usage report was updated
  * usage_by_top_level_dir `object`: A map of root folders to their total usage

### UserCipherUseEntity
* UserCipherUseEntity `object`: List User Cipher Uses
  * created_at `string`: The earliest recorded use of this combination of interface and protocol and cipher (for this user)
  * id `integer`: UserCipherUse ID
  * interface `string` (values: web, ftp, sftp, dav, desktop, restapi, robot, jsapi): The interface accessed
  * protocol_cipher `string`: The protocol and cipher employed
  * updated_at `string`: The most recent use of this combination of interface and protocol and cipher (for this user)
  * user_id `integer`: ID of the user who performed this access

### UserEntity
* UserEntity `object`: Create User
  * admin_group_ids `array`: List of group IDs of which this user is an administrator
    * items `integer`
  * allowed_ips `string`: A list of allowed IPs if applicable.  Newline delimited
  * api_keys_count `integer`: Number of api keys associated with this user
  * attachments_permission `boolean`: Can the user create Bundles (aka Share Links)?  This field will be aliased or renamed in the future to `bundles_permission`.
  * authenticate_until `string`: Scheduled Date/Time at which user will be deactivated
  * authentication_method `string` (values: password, ldap, sso, none): How is this user authenticated?
  * avatar_url `string`: URL holding the user's avatar
  * billing_permission `boolean`: Allow this user to perform operations on the account, payments, and invoices?
  * bypass_inactive_disable `boolean`: Exempt this user from being disabled based on inactivity?
  * bypass_site_allowed_ips `boolean`: Allow this user to skip site-wide IP blacklists?
  * created_at `string`: When this user was created
  * dav_permission `boolean`: Can the user connect with WebDAV?
  * disabled `boolean`: Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
  * email `string`: User email address
  * externally_managed `boolean`: Is this user managed by an external source (such as LDAP)?
  * ftp_permission `boolean`: Can the user access with FTP/FTPS?
  * group_ids `array`: Comma-separated list of group IDs of which this user is a member
    * items `string`
  * id `integer`: User ID
  * language `string`: Preferred language
  * last_login_at `string`: User's last login time
  * last_protocol_cipher `string`: The last protocol and cipher used
  * lockout_expires `string`: Time in the future that the user will no longer be locked out if applicable
  * name `string`: User's full name
  * notes `string`: Any internal notes on the user
  * notification_daily_send_time `integer`: Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  * password_set_at `string`: Last time the user's password was set
  * password_validity_days `integer`: Number of days to allow user to use the same password
  * public_keys_count `integer`: Number of public keys associated with this user
  * receive_admin_alerts `boolean`: Should the user receive admin alerts such a certificate expiration notifications and overages?
  * require_2fa `boolean`: Is 2fa required to sign in?
  * require_password_change `boolean`: Is a password change required upon next user login?
  * restapi_permission `boolean`: Can this user access the REST API?
  * self_managed `boolean`: Does this user manage it's own credentials or is it a shared/bot user?
  * sftp_permission `boolean`: Can the user access with SFTP?
  * site_admin `boolean`: Is the user an administrator for this site?
  * skip_welcome_screen `boolean`: Skip Welcome page in the UI?
  * ssl_required `string` (values: use_system_setting, always_require, never_require): SSL required setting
  * sso_strategy_id `integer`: SSO (Single Sign On) strategy ID for the user, if applicable.
  * subscribe_to_newsletter `boolean`: Is the user subscribed to the newsletter?
  * time_zone `string`: User time zone
  * type_of_2fa `string`: Type(s) of 2FA methods in use.  Will be either `sms`, `totp`, `u2f`, `yubi`, or multiple values sorted alphabetically and joined by an underscore.
  * user_root `string`: Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
  * username `string`: User's username


