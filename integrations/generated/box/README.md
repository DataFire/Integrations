# @datafire/box

Client library for Box Platform API

## Installation and Usage
```bash
npm install --save @datafire/box
```
```js
let box = require('@datafire/box').create({
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

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
box.oauthCallback({
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
box.oauthRefresh(null, context)
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

### get_authorize
Authorize a user by sending them through the [Box](https://box.com)
website and request their permission to act on their behalf.

This is the first step when authenticating a user using
OAuth 2.0. To request a user's authorization to use the Box APIs
on their behalf you will need to send a user to the URL with this
format.


```js
box.get_authorize({
  "response_type": "",
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * response_type **required** `string` (values: code): The type of response we'd like to receive.
  * client_id **required** `string`: The Client ID of the application that is requesting to authenticate
  * redirect_uri `string`: The URL to which Box redirects the browser after the user has granted
  * state `string`: A custom string of your choice. Box will pass the same string to
  * scope `string`: A comma-separated list of application scopes you'd like to

#### Output
* output `string`

### get_collaboration_whitelist_entries
Returns the list domains that have been deemed safe to create collaborations
for within the current enterprise.


```js
box.get_collaboration_whitelist_entries({}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [CollaborationAllowlistEntries](#collaborationallowlistentries)

### post_collaboration_whitelist_entries
Creates a new entry in the list of allowed domains to allow
collaboration for.


```js
box.post_collaboration_whitelist_entries({}, context)
```

#### Input
* input `object`
  * body `object`
    * direction **required** `string` (values: inbound, outbound, both): The direction in which to allow collaborations.
    * domain **required** `string`: The domain to add to the list of allowed domains.

#### Output
* output [CollaborationAllowlistEntry](#collaborationallowlistentry)

### delete_collaboration_whitelist_entries_id
Removes a domain from the list of domains that have been deemed safe to create
collaborations for within the current enterprise.


```js
box.delete_collaboration_whitelist_entries_id({
  "collaboration_whitelist_entry_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_whitelist_entry_id **required** `string`: The ID of the entry in the list.

#### Output
*Output schema unknown*

### get_collaboration_whitelist_entries_id
Returns a domain that has been deemed safe to create collaborations
for within the current enterprise.


```js
box.get_collaboration_whitelist_entries_id({
  "collaboration_whitelist_entry_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_whitelist_entry_id **required** `string`: The ID of the entry in the list.

#### Output
* output [CollaborationAllowlistEntry](#collaborationallowlistentry)

### get_collaboration_whitelist_exempt_targets
Returns a list of users who have been exempt from the collaboration
domain restrictions.


```js
box.get_collaboration_whitelist_exempt_targets({}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [CollaborationAllowlistExemptTargets](#collaborationallowlistexempttargets)

### post_collaboration_whitelist_exempt_targets
Exempts a user from the restrictions set out by the allowed list of domains
for collaborations.


```js
box.post_collaboration_whitelist_exempt_targets({}, context)
```

#### Input
* input `object`
  * body `object`
    * user **required** `object`: The user to exempt.
      * id **required** `string`: The ID of the user to exempt.

#### Output
* output [CollaborationAllowlistExemptTarget](#collaborationallowlistexempttarget)

### delete_collaboration_whitelist_exempt_targets_id
Removes a user's exemption from the restrictions set out by the allowed list
of domains for collaborations.


```js
box.delete_collaboration_whitelist_exempt_targets_id({
  "collaboration_whitelist_exempt_target_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_whitelist_exempt_target_id **required** `string`: The ID of the exemption to the list.

#### Output
*Output schema unknown*

### get_collaboration_whitelist_exempt_targets_id
Returns a users who has been exempt from the collaboration
domain restrictions.


```js
box.get_collaboration_whitelist_exempt_targets_id({
  "collaboration_whitelist_exempt_target_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_whitelist_exempt_target_id **required** `string`: The ID of the exemption to the list.

#### Output
* output [CollaborationAllowlistExemptTarget](#collaborationallowlistexempttarget)

### get_collaborations
Retrieves all pending collaboration invites for this user.


```js
box.get_collaborations({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string` (values: pending): The status of the collaborations to retrieve
  * fields `array`: A comma-separated list of attributes to include in the
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [Collaborations](#collaborations)

### post_collaborations
Adds a collaboration for a single user or a single group to a file
or folder.

Collaborations can be created using email address, user IDs, or a
group IDs.

If a collaboration is being created with a group, access to
this endpoint is dependent on the group's ability to be invited.


```js
box.post_collaborations({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * notify `boolean`: Determines if users should receive email notification
  * body `object`
    * accessible_by **required** `object`: The user or group to give access to the item.
      * id `string`: The ID of the user or group.
      * login `string`: The email address of the user to grant access to the item.
      * type **required** `string` (values: user, group): The type of collaborator to invite.
    * can_view_path `boolean`: Determines if the invited users can see the entire parent path to
    * expires_at `string`: Set the expiration date for the collaboration. At this date, the
    * item **required** `object`: The item to attach the comment to.
      * id **required** `string`: The ID of the item that will be granted access to
      * type **required** `string` (values: file, folder): The type of the item that this collaboration will be
    * role **required** `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner): The level of access granted.

#### Output
* output [Collaboration](#collaboration)

### delete_collaborations_id
Deletes a single collaboration.


```js
box.delete_collaborations_id({
  "collaboration_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_id **required** `string`: The ID of the collaboration

#### Output
*Output schema unknown*

### get_collaborations_id
Retrieves a single collaboration.


```js
box.get_collaborations_id({
  "collaboration_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_id **required** `string`: The ID of the collaboration
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Collaboration](#collaboration)

### put_collaborations_id
Updates a collaboration.

Can be used to change the owner of an item, or to
accept collaboration invites.


```js
box.put_collaborations_id({
  "collaboration_id": ""
}, context)
```

#### Input
* input `object`
  * collaboration_id **required** `string`: The ID of the collaboration
  * body `object`
    * can_view_path `boolean`: Determines if the invited users can see the entire parent path to
    * expires_at `string`: Update the expiration date for the collaboration. At this date,
    * role **required** `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner, owner): The level of access granted.
    * status `string` (values: pending, accepted, rejected): <!--alex ignore reject-->

#### Output
* output [Collaboration](#collaboration)

### get_collections
Retrieves all collections for a given user.

Currently, only the `favorites` collection
is supported.


```js
box.get_collections({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [Collections](#collections)

### get_collections_id_items
Retrieves the files and/or folders contained within
this collection.


```js
box.get_collections_id_items({
  "collection_id": ""
}, context)
```

#### Input
* input `object`
  * collection_id **required** `string`: The ID of the collection.
  * fields `array`: A comma-separated list of attributes to include in the
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [Items](#items)

### post_comments
Adds a comment by the user to a specific file, or
as a reply to an other comment.


```js
box.post_comments({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * item `object`: The item to attach the comment to.
      * id **required** `string`: The ID of the item
      * type **required** `string` (values: file, comment): The type of the item that this comment will be placed on.
    * message **required** `string`: The text of the comment.
    * tagged_message `string`: The text of the comment, including `@[user_id:name]`

#### Output
* output [Comment](#comment)

### delete_comments_id
Permanently deletes a comment.


```js
box.delete_comments_id({
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The ID of the comment.

#### Output
*Output schema unknown*

### get_comments_id
Retrieves the message and metadata for a specific comment, as well
as information on the user who created the comment.


```js
box.get_comments_id({
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The ID of the comment.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Comment](#comment)

### put_comments_id
Update the message of a comment.


```js
box.put_comments_id({
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * comment_id **required** `string`: The ID of the comment.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * message `string`: The text of the comment to update

#### Output
* output [Comment](#comment)

### delete_device_pinners_id
Deletes an individual device pin.


```js
box.delete_device_pinners_id({
  "device_pinner_id": ""
}, context)
```

#### Input
* input `object`
  * device_pinner_id **required** `string`: The ID of the device pin

#### Output
*Output schema unknown*

### get_device_pinners_id
Retrieves information about an individual device pin.


```js
box.get_device_pinners_id({
  "device_pinner_id": ""
}, context)
```

#### Input
* input `object`
  * device_pinner_id **required** `string`: The ID of the device pin

#### Output
* output [DevicePinner](#devicepinner)

### get_enterprises_id_device_pinners
Retrieves all the device pins within an enterprise.

The user must have admin privileges, and the application
needs the "manage enterprise" scope to make this call.


```js
box.get_enterprises_id_device_pinners({
  "enterprise_id": ""
}, context)
```

#### Input
* input `object`
  * enterprise_id **required** `string`: The ID of the enterprise
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.
  * direction `string` (values: ASC, DESC): The direction to sort results in. This can be either in alphabetical ascending

#### Output
* output [DevicePinners](#devicepinners)

### get_events
Returns up to a year of past events for a given user
or for the entire enterprise.

By default this returns events for the authenticated user. To retrieve
events for the entire enterprise, set the `stream_type` to `admin_logs`.
The user making the API call will need to have admin privileges, and
the application will need to have the permission to access the event feed
to get the enterprise event feed.


```js
box.get_events({}, context)
```

#### Input
* input `object`
  * stream_type `string` (values: all, changes, sync, admin_logs): Defines the type of events that are returned
  * stream_position `string`: The location in the event stream to start receiving events from.
  * limit `integer`: Limits the number of events returned
  * event_type `array`: A comma-separated list of events to filter by. This can only be used when
  * created_after `string`: The lower bound date and time to return events for. This can only be used
  * created_before `string`: The upper bound date and time to return events for. This can only be used

#### Output
* output [Events](#events)

### options_events
Returns a list of real-time servers that can be used for long-polling updates
to the [event stream](#get-events).

Long polling is the concept where a HTTP request is kept open until the
server sends a response, then repeating the process over and over to receive
updated responses.

Long polling the event stream can only be used for user events, not for
enterprise events.

To use long polling, first use this endpoint to retrieve a list of long poll
URLs. Next, make a long poll request to any of the provided URLs.

When an event occurs in monitored account a response with the value
`new_change` will be sent. The response contains no other details as
it only serves as a prompt to take further action such as sending a
request to the [events endpoint](#get-events) with the last known
`stream_position`.

After the server sends this response it closes the connection. You must now
repeat the long poll process to begin listening for events again.

If no events occur for a while and the connection times out you will
receive a response with the value `reconnect`. When you receive this response
you’ll make another call to this endpoint to restart the process.

If you receive no events in `retry_timeout` seconds then you will need to
make another request to the real-time server (one of the URLs in the response
for this endpoint). This might be necessary due to network errors.

Finally, if you receive a `max_retries` error when making a request to the
real-time server, you should start over by making a call to this endpoint
first.


```js
box.options_events(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RealtimeServers](#realtimeservers)

### delete_file_requests_id
Deletes a file request permanently.


```js
box.delete_file_requests_id({
  "file_request_id": ""
}, context)
```

#### Input
* input `object`
  * file_request_id **required** `string`: The unique identifier that represent a file request.

#### Output
*Output schema unknown*

### get_file_requests_id
Retrieves the information about a file request.


```js
box.get_file_requests_id({
  "file_request_id": ""
}, context)
```

#### Input
* input `object`
  * file_request_id **required** `string`: The unique identifier that represent a file request.

#### Output
* output [FileRequest](#filerequest)

### put_file_requests_id
Updates a file request. This can be used to activate or
deactivate a file request.


```js
box.put_file_requests_id({
  "file_request_id": ""
}, context)
```

#### Input
* input `object`
  * file_request_id **required** `string`: The unique identifier that represent a file request.
  * if-match `string`: Ensures this item hasn't recently changed before
  * body [FileRequestUpdateRequest](#filerequestupdaterequest)

#### Output
* output [FileRequest](#filerequest)

### post_file_requests_id_copy
Copies an existing file request that is already present on one folder,
and applies it to another folder.


```js
box.post_file_requests_id_copy({
  "file_request_id": ""
}, context)
```

#### Input
* input `object`
  * file_request_id **required** `string`: The unique identifier that represent a file request.
  * body [FileRequestCopyRequest](#filerequestcopyrequest)

#### Output
* output [FileRequest](#filerequest)

### get_file_version_legal_holds
Get a list of file versions on legal hold for a legal hold
assignment.

Due to ongoing re-architecture efforts this API might not return all file
versions for this policy ID.

Instead, this API will only return file versions held in the legacy
architecture. Two new endpoints will available to request any file versions
held in the new architecture.

For file versions held in the new architecture, the `GET
/legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used to
return all past file versions available for this policy assignment, and the
`GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to
return any current (latest) versions of a file under legal hold.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.

Once the re-architecture is completed this API will be deprecated.


```js
box.get_file_version_legal_holds({
  "policy_id": ""
}, context)
```

#### Input
* input `object`
  * policy_id **required** `string`: The ID of the legal hold policy to get the file version legal
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [FileVersionLegalHolds](#fileversionlegalholds)

### get_file_version_legal_holds_id
Retrieves information about the legal hold policies
assigned to a file version.


```js
box.get_file_version_legal_holds_id({
  "file_version_legal_hold_id": ""
}, context)
```

#### Input
* input `object`
  * file_version_legal_hold_id **required** `string`: The ID of the file version legal hold

#### Output
* output [FileVersionLegalHold](#fileversionlegalhold)

### get_file_version_retentions
Retrieves all file version retentions for the given enterprise.


```js
box.get_file_version_retentions({}, context)
```

#### Input
* input `object`
  * file_id `string`: Filters results by files with this ID.
  * file_version_id `string`: Filters results by file versions with this ID.
  * policy_id `string`: Filters results by the retention policy with this ID.
  * disposition_action `string` (values: permanently_delete, remove_retention): Filters results by the retention policy with this disposition
  * disposition_before `string`: Filters results by files that will have their disposition
  * disposition_after `string`: Filters results by files that will have their disposition
  * limit `integer`: The maximum number of items to return per page.
  * marker `string`: Defines the position marker at which to begin returning results. This is

#### Output
* output [FileVersionRetentions](#fileversionretentions)

### get_file_version_retentions_id
Returns information about a file version retention.


```js
box.get_file_version_retentions_id({
  "file_version_retention_id": ""
}, context)
```

#### Input
* input `object`
  * file_version_retention_id **required** `string`: The ID of the file version retention

#### Output
* output [FileVersionRetention](#fileversionretention)

### options_files_content
Performs a check to verify that a file will be accepted by Box
before you upload the entire file.


```js
box.options_files_content({}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`: The name for the file
    * parent
      * id `string`: The ID of parent item
    * size `integer`: The size of the file in bytes

#### Output
* output [UploadUrl](#uploadurl)

### post_files_content
Uploads a small file to Box. For file sizes over 50MB we recommend
using the Chunk Upload APIs.

# Request body order

The `attributes` part of the body must come **before** the
`file` part. Requests that do not follow this format when
uploading the file will receive a HTTP `400` error with a
`metadata_after_file_contents` error code.


```js
box.post_files_content({
  "attributes": {},
  "file": ""
}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * content-md5 `string`: An optional header containing the SHA1 hash of the file to
  * attributes **required** `object`: The additional attributes of the file being uploaded. Mainly the
  * file **required** `string`: The content of the file to upload to Box.

#### Output
* output [Files](#files)

### post_files_upload_sessions
Creates an upload session for a new file.


```js
box.post_files_upload_sessions({}, context)
```

#### Input
* input `object`
  * body `object`
    * file_name **required** `string`: The name of new file
    * file_size **required** `integer`: The total number of bytes of the file to be uploaded
    * folder_id **required** `string`: The ID of the folder to upload the new file to.

#### Output
* output [UploadSession](#uploadsession)

### delete_files_upload_sessions_id
Abort an upload session and discard all data uploaded.

This cannot be reversed.


```js
box.delete_files_upload_sessions_id({
  "upload_session_id": ""
}, context)
```

#### Input
* input `object`
  * upload_session_id **required** `string`: The ID of the upload session.

#### Output
*Output schema unknown*

### get_files_upload_sessions_id
Return information about an upload session.


```js
box.get_files_upload_sessions_id({
  "upload_session_id": ""
}, context)
```

#### Input
* input `object`
  * upload_session_id **required** `string`: The ID of the upload session.

#### Output
* output [UploadSession](#uploadsession)

### put_files_upload_sessions_id
Updates a chunk of an upload session for a file.


```js
box.put_files_upload_sessions_id({
  "upload_session_id": "",
  "digest": "",
  "content-range": ""
}, context)
```

#### Input
* input `object`
  * upload_session_id **required** `string`: The ID of the upload session.
  * digest **required** `string`: The [RFC3230][1] message digest of the chunk uploaded.
  * content-range **required** `string`: The byte range of the chunk.
  * body `string`: The binary content of the file

#### Output
* output [UploadedPart](#uploadedpart)

### post_files_upload_sessions_id_commit
Close an upload session and create a file from the
uploaded chunks.


```js
box.post_files_upload_sessions_id_commit({
  "upload_session_id": "",
  "digest": ""
}, context)
```

#### Input
* input `object`
  * upload_session_id **required** `string`: The ID of the upload session.
  * digest **required** `string`: The [RFC3230][1] message digest of the whole file.
  * if-match `string`: Ensures this item hasn't recently changed before
  * if-none-match `string`: Ensures an item is only returned if it has changed.
  * body `object`
    * parts **required** `array`: The list details for the uploaded parts
      * items [UploadPart](#uploadpart)

#### Output
* output [Files](#files)

### get_files_upload_sessions_id_parts
Return a list of the chunks uploaded to the upload
session so far.


```js
box.get_files_upload_sessions_id_parts({
  "upload_session_id": ""
}, context)
```

#### Input
* input `object`
  * upload_session_id **required** `string`: The ID of the upload session.
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [UploadParts](#uploadparts)

### delete_files_id
Deletes a file, either permanently or by moving it to
the trash.

The the enterprise settings determine whether the item will
be permanently deleted from Box or moved to the trash.


```js
box.delete_files_id({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * if-match `string`: Ensures this item hasn't recently changed before

#### Output
*Output schema unknown*

### get_files_id
Retrieves the details about a file.


```js
box.get_files_id({
  "file_id": "",
  "x-rep-hints": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * if-none-match `string`: Ensures an item is only returned if it has changed.
  * boxapi `string`: The URL, and optional password, for the shared link of this item.
  * x-rep-hints **required** `string`: A header required to request specific `representations`

#### Output
* output [File](#file)

### post_files_id
Restores a file that has been moved to the trash.

An optional new parent ID can be provided to restore the file to in case the
original folder has been deleted.


```js
box.post_files_id({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * name `string`: An optional new name for the file.
    * parent
      * id `string`: The ID of parent item

#### Output
* output [File](#file)

### put_files_id
Updates a file. This can be used to rename or move a file,
create a shared link, or lock a file.


```js
box.put_files_id({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * if-match `string`: Ensures this item hasn't recently changed before
  * body `object`
    * tags `array`: The tags for this item. These tags are shown in
      * items `string`
    * description `string`: The description for a file. This can be seen in the right-hand sidebar panel
    * lock `object`: Defines a lock on an item. This prevents the item from being
      * access `string` (values: lock): The type of this object.
      * expires_at `string`: Defines the time at which the lock expires.
      * is_download_prevented `boolean`: Defines if the file can be downloaded while it is locked.
    * name `string`: An optional different name for the file. This can be used to
    * parent
      * id `string`: The ID of parent item
    * permissions `object`: Defines who can download a file.
      * can_download `string` (values: open, company): Defines who is allowed to download this file. The possible
    * shared_link
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of files.
      * unshared_at `string`: The timestamp at which this shared link will
      * vanity_name `string`: Defines a custom vanity name to use in the shared link URL,

#### Output
* output [File](#file)

### files.file_id_add_shared_link.put
Adds a shared link to a file.


```js
box.files.file_id_add_shared_link.put({
  "file_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: The settings for the shared link to create on the file.
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of files.
      * unshared_at `string`: The timestamp at which this shared link will
      * vanity_name `string`: Defines a custom vanity name to use in the shared link URL,

#### Output
* output [File](#file)

### files.file_id_get_shared_link.get
Gets the information for a shared link on a file.


```js
box.files.file_id_get_shared_link.get({
  "file_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields **required** `string`: Explicitly request the `shared_link` fields

#### Output
* output [File](#file)

### files.file_id_remove_shared_link.put
Removes a shared link from a file.


```js
box.files.file_id_remove_shared_link.put({
  "file_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: By setting this value to `null`, the shared link

#### Output
* output [File](#file)

### files.file_id_update_shared_link.put
Updates a shared link on a file.


```js
box.files.file_id_update_shared_link.put({
  "file_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: The settings for the shared link to update.
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of files.
      * unshared_at `string`: The timestamp at which this shared link will
      * vanity_name `string`: Defines a custom vanity name to use in the shared link URL,

#### Output
* output [File](#file)

### get_files_id_collaborations
Retrieves a list of pending and active collaborations for a
file. This returns all the users that have access to the file
or have been invited to the file.


```js
box.get_files_id_collaborations({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * marker `string`: Defines the position marker at which to begin returning results. This is

#### Output
* output [Collaborations](#collaborations)

### get_files_id_comments
Retrieves a list of comments for a file.


```js
box.get_files_id_comments({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [Comments](#comments)

### get_files_id_content
Returns the contents of a file in binary format.


```js
box.get_files_id_content({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * range `string`: The byte range of the content to download.
  * boxapi `string`: The URL, and optional password, for the shared link of this item.
  * version `string`: The file version to download
  * access_token `string`: An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.

#### Output
*Output schema unknown*

### post_files_id_content
Update a file's content. For file sizes over 50MB we recommend
using the Chunk Upload APIs.

# Request body order

The `attributes` part of the body must come **before** the
`file` part. Requests that do not follow this format when
uploading the file will receive a HTTP `400` error with a
`metadata_after_file_contents` error code.


```js
box.post_files_id_content({
  "file_id": "",
  "attributes": {},
  "file": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * if-match `string`: Ensures this item hasn't recently changed before
  * fields `array`: A comma-separated list of attributes to include in the
  * content-md5 `string`: An optional header containing the SHA1 hash of the file to
  * attributes **required** `object`: The additional attributes of the file being uploaded. Mainly the
  * file **required** `string`: The content of the file to upload to Box.

#### Output
* output [Files](#files)

### post_files_id_copy
Creates a copy of a file.


```js
box.post_files_id_copy({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * name `string`: An optional new name for the copied file.
    * parent **required** `object`: The destination folder to copy the file to.
      * id **required** `string`: The ID of folder to copy the file to.
    * version `string`: An optional ID of the specific file version to copy.

#### Output
* output [File](#file)

### get_files_id_metadata
Retrieves all metadata for a given file.


```js
box.get_files_id_metadata({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
* output [Metadatas](#metadatas)

### files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.delete
Removes any classifications from a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.delete({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
*Output schema unknown*

### files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.get
Retrieves the classification metadata instance that
has been applied to a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.get({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
* output [Classification](#classification)

### files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.post
Adds a classification to a file by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.post({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `object`
    * Box__Security__Classification__Key `string`: The name of the classification to apply to this file.

#### Output
* output [Classification](#classification)

### files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.put
Updates a classification on a file.

The classification can only be updated if a classification has already been
applied to the file before. When editing classifications, only values are
defined for the enterprise will be accepted.


```js
box.files.file_id.metadata.enterprise.securityClassification_6VMVochwUWo.put({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `array`: A list containing the one change to make, to
    * items `object`: The operation to perform on the classification
      * op `string` (values: replace): `replace`
      * path `string` (values: /Box__Security__Classification__Key): `/Box__Security__Classification__Key`
      * value `string`: The name of the classification to apply to this file.

#### Output
* output [Classification](#classification)

### delete_files_id_metadata_global_boxSkillsCards
Removes any Box Skills cards metadata from a file.


```js
box.delete_files_id_metadata_global_boxSkillsCards({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
*Output schema unknown*

### get_files_id_metadata_global_boxSkillsCards
List the Box Skills metadata cards that are attached to a file.


```js
box.get_files_id_metadata_global_boxSkillsCards({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
* output [SkillCardsMetadata](#skillcardsmetadata)

### post_files_id_metadata_global_boxSkillsCards
Applies one or more Box Skills metadata cards to a file.


```js
box.post_files_id_metadata_global_boxSkillsCards({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `object`
    * cards **required** `array`: A list of Box Skill cards to apply to this file.

#### Output
* output [SkillCardsMetadata](#skillcardsmetadata)

### put_files_id_metadata_global_boxSkillsCards
Updates one or more Box Skills metadata cards to a file.


```js
box.put_files_id_metadata_global_boxSkillsCards({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `array`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902)
    * items `object`: An operation that replaces an existing card.
      * op `string` (values: replace): `replace`
      * path `string`: The JSON Path that represents the card to replace. In most cases
      * value

#### Output
* output [SkillCardsMetadata](#skillcardsmetadata)

### delete_files_id_metadata_id_id
Deletes a piece of file metadata.


```js
box.delete_files_id_metadata_id_id({
  "file_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
*Output schema unknown*

### get_files_id_metadata_id_id
Retrieves the instance of a metadata template that has been applied to a
file.


```js
box.get_files_id_metadata_id_id({
  "file_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
* output [Metadata](#metadata)

### post_files_id_metadata_id_id
Applies an instance of a metadata template to a file.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.


```js
box.post_files_id_metadata_id_id({
  "file_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template
  * body `object`

#### Output
* output [Metadata](#metadata)

### put_files_id_metadata_id_id
Updates a piece of metadata on a file.

The metadata instance can only be updated if the template has already been
applied to the file before. When editing metadata, only values that match
the metadata template schema will be accepted.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata instance will not be changed.


```js
box.put_files_id_metadata_id_id({
  "file_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template
  * body `array`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902)
    * items `object`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902) operation for a
      * from `string`: The location in the metadata JSON object to move or copy a value
      * op `string` (values: add, replace, remove, test, move, copy): The type of change to perform on the template. Some
      * path `string`: The location in the metadata JSON object
      * value `string`: The value to be set or tested.

#### Output
* output [Metadata](#metadata)

### get_files_id_tasks
Retrieves a list of all the tasks for a file. This
endpoint does not support pagination.


```js
box.get_files_id_tasks({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
* output [Tasks](#tasks)

### get_files_id_thumbnail_id
Retrieves a thumbnail, or smaller image representation, of a file.

Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
the `.png` format and sizes of `32x32`, `94x94`, `160x160`, and `320x320`
can be returned in the `.jpg` format.

Thumbnails can be generated for the image and video file formats listed
[found on our community site][1].

[1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327


```js
box.get_files_id_thumbnail_id({
  "file_id": "",
  "extension": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * extension **required** `string` (values: png, jpg): The file format for the thumbnail
  * min_height `integer`: The minimum height of the thumbnail
  * min_width `integer`: The minimum width of the thumbnail
  * max_height `integer`: The maximum height of the thumbnail
  * max_width `integer`: The maximum width of the thumbnail

#### Output
* output `string`: The thumbnail

### delete_files_id_trash
Permanently deletes a file that is in the trash.
This action cannot be undone.


```js
box.delete_files_id_trash({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
*Output schema unknown*

### get_files_id_trash
Retrieves a file that has been moved to the trash.

Please note that only if the file itself has been moved to the
trash can it be retrieved with this API call. If instead one of
its parent folders was moved to the trash, only that folder
can be inspected using the
[`GET /folders/:id/trash`](e://get_folders_id_trash) API.

To list all items that have been moved to the trash, please
use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
API.


```js
box.get_files_id_trash({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [File](#file)

### post_files_id_upload_sessions
Creates an upload session for an existing file.


```js
box.post_files_id_upload_sessions({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `object`
    * file_name `string`: The optional new name of new file
    * file_size **required** `integer`: The total number of bytes of the file to be uploaded

#### Output
* output [UploadSession](#uploadsession)

### get_files_id_versions
Retrieve a list of the past versions for a file.

Versions are only tracked by Box users with premium accounts. To fetch the ID
of the current version of a file, use the `GET /file/:id` API.


```js
box.get_files_id_versions({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [FileVersions](#fileversions)

### post_files_id_versions_current
Revert to a previous version of a file.

If previous versions exist, this method can be used to
promote one of the older versions to the top of the version history.

This actually creates a new copy of the old version and puts it at the
top of the versions history. The file will have the exact same contents
as the older version, with the the same hash digest, `etag`, and
name as the original.

Other properties such as comments do not get updated to their
former values.


```js
box.post_files_id_versions_current({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`: The file version to revert to
    * id `string`: The file version ID
    * type `string` (values: file_version): The type to revert to

#### Output
* output [FileVersion](#fileversion)

### delete_files_id_versions_id
Move a file version to the trash.

Versions are only tracked for Box users with premium accounts.


```js
box.delete_files_id_versions_id({
  "file_id": "",
  "file_version_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * file_version_id **required** `string`: The ID of the file version
  * if-match `string`: Ensures this item hasn't recently changed before

#### Output
*Output schema unknown*

### get_files_id_versions_id
Retrieve a specific version of a file.

Versions are only tracked for Box users with premium accounts.


```js
box.get_files_id_versions_id({
  "file_id": "",
  "file_version_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * fields `array`: A comma-separated list of attributes to include in the
  * file_version_id **required** `string`: The ID of the file version

#### Output
* output [FileVersion](#fileversion)

### delete_files_id_watermark
Removes the watermark from a file.


```js
box.delete_files_id_watermark({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
*Output schema unknown*

### get_files_id_watermark
Retrieve the watermark for a file.


```js
box.get_files_id_watermark({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.

#### Output
* output [Watermark](#watermark)

### put_files_id_watermark
Applies or update a watermark on a file.


```js
box.put_files_id_watermark({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: The unique identifier that represent a file.
  * body `object`
    * watermark **required** `object`: The watermark to imprint on the file
      * imprint **required** `string` (values: default): The type of watermark to apply.

#### Output
* output [Watermark](#watermark)

### get_folder_locks
Retrieves folder lock details for a given folder.


```js
box.get_folder_locks({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
* output [FolderLocks](#folderlocks)

### post_folder_locks
Creates a folder lock on a folder, preventing it from being moved and/or
deleted.


```js
box.post_folder_locks({}, context)
```

#### Input
* input `object`
  * body `object`
    * folder **required** `object`: The folder to apply the lock to.
      * id **required** `string`: The ID of the folder.
      * type **required** `string`: The content type the lock is being applied to. Only `folder`
    * locked_operations `object`: The operations to lock for the folder. If `locked_operations` is
      * delete **required** `boolean`: Whether deleting the folder should be locked.
      * move **required** `boolean`: Whether moving the folder should be locked.

#### Output
* output [FolderLock](#folderlock)

### delete_folder_locks_id
Deletes a folder lock on a given folder.


```js
box.delete_folder_locks_id({
  "folder_lock_id": ""
}, context)
```

#### Input
* input `object`
  * folder_lock_id **required** `string`: The ID of the folder lock.

#### Output
*Output schema unknown*

### post_folders
Creates a new empty folder within the specified parent folder.


```js
box.post_folders({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * folder_upload_email
      * access `string` (values: open, collaborators): When this parameter has been set, users can email files
    * name **required** `string`: The name for the new folder.
    * parent **required** `object`: The parent folder to create the new folder within.
      * id **required** `string`: The ID of parent folder
    * sync_state `string` (values: synced, not_synced, partially_synced): Specifies whether a folder should be synced to a

#### Output
* output [Folder](#folder)

### get_folders_trash_items
Retrieves the files and folders that have been moved
to the trash.

Any attribute in the full files or folders objects can be passed
in with the `fields` parameter to retrieve those specific
attributes that are not returned by default.

This endpoint defaults to use offset-based pagination, yet also supports
marker-based pagination using the `marker` parameter.


```js
box.get_folders_trash_items({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.
  * usemarker `boolean`: Specifies whether to use marker-based pagination instead of
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * direction `string` (values: ASC, DESC): The direction to sort results in. This can be either in alphabetical ascending
  * sort `string` (values: id, name, date, size): Defines the **second** attribute by which items

#### Output
* output [Items](#items)

### delete_folders_id
Deletes a folder, either permanently or by moving it to
the trash.


```js
box.delete_folders_id({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * if-match `string`: Ensures this item hasn't recently changed before
  * recursive `boolean`: Delete a folder that is not empty by recursively deleting the

#### Output
*Output schema unknown*

### get_folders_id
Retrieves details for a folder, including the first 100 entries
in the folder.

To fetch more items within the folder, please use the
[Get items in a folder](#get-folders-id-items) endpoint.


```js
box.get_folders_id({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the
  * if-none-match `string`: Ensures an item is only returned if it has changed.
  * boxapi `string`: The URL, and optional password, for the shared link of this item.

#### Output
* output [Folder](#folder)

### post_folders_id
Restores a folder that has been moved to the trash.

An optional new parent ID can be provided to restore the folder to in case the
original folder has been deleted.

# Folder locking

During this operation, part of the file tree will be locked, mainly
the source folder and all of its descendants, as well as the destination
folder.

For the duration of the operation, no other move, copy, delete, or restore
operation can performed on any of the locked folders.


```js
box.post_folders_id({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * name `string`: An optional new name for the folder.
    * parent
      * id `string`: The ID of parent item

#### Output
* output [Folder](#folder)

### put_folders_id
Updates a folder. This can be also be used to move the folder,
create shared links, update collaborations, and more.


```js
box.put_folders_id({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the
  * if-match `string`: Ensures this item hasn't recently changed before
  * body `object`
    * tags `array`: The tags for this item. These tags are shown in
      * items `string`
    * can_non_owners_invite `boolean`: Specifies if users who are not the owner
    * can_non_owners_view_collaborators `boolean`: Restricts collaborators who are not the owner of
    * collections `array`: An array of collections to make this folder
      * items `object`: The bare basic reference for an object
        * id `string`: The unique identifier for this object
        * type `string`: The type for this object
    * description `string`: The optional description of this folder
    * folder_upload_email
      * access `string` (values: open, collaborators): When this parameter has been set, users can email files
    * is_collaboration_restricted_to_enterprise `boolean`: Specifies if new invites to this folder are restricted to users
    * name `string`: The optional new name for this folder.
    * parent `object`: The parent folder for this folder. Use this to move
      * id `string`: The ID of the new parent folder
    * shared_link
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of files.
      * unshared_at `string`: The timestamp at which this shared link will
      * vanity_name `string`: Defines a custom vanity name to use in the shared link URL,
    * sync_state `string` (values: synced, not_synced, partially_synced): Specifies whether a folder should be synced to a

#### Output
* output [Folder](#folder)

### folders.folder_id_add_shared_link.put
Adds a shared link to a folder.


```js
box.folders.folder_id_add_shared_link.put({
  "folder_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: The settings for the shared link to create on the folder.
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of folders.
      * unshared_at `string`: The timestamp at which this shared link will

#### Output
* output [Folder](#folder)

### folders.folder_id_get_shared_link.get
Gets the information for a shared link on a folder.


```js
box.folders.folder_id_get_shared_link.get({
  "folder_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields **required** `string`: Explicitly request the `shared_link` fields

#### Output
* output [Folder](#folder)

### folders.folder_id_remove_shared_link.put
Removes a shared link from a folder.


```js
box.folders.folder_id_remove_shared_link.put({
  "folder_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: By setting this value to `null`, the shared link

#### Output
* output [Folder](#folder)

### folders.folder_id_update_shared_link.put
Updates a shared link on a folder.


```js
box.folders.folder_id_update_shared_link.put({
  "folder_id": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields **required** `string`: Explicitly request the `shared_link` fields
  * body `object`
    * shared_link `object`: The settings for the shared link to update.
      * access `string` (values: open, company, collaborators): The level of access for the shared link. This can be
      * password `string`: The password required to access the shared link. Set the
      * permissions `object`
        * can_download `boolean`: If the shared link allows for downloading of folders.
      * unshared_at `string`: The timestamp at which this shared link will

#### Output
* output [Folder](#folder)

### get_folders_id_collaborations
Retrieves a list of pending and active collaborations for a
folder. This returns all the users that have access to the folder
or have been invited to the folder.


```js
box.get_folders_id_collaborations({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Collaborations](#collaborations)

### post_folders_id_copy
Creates a copy of a folder within a destination folder.

The original folder will not be changed.


```js
box.post_folders_id_copy({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier of the folder to copy.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * name `string`: An optional new name for the copied folder.
    * parent **required** `object`: The destination folder to copy the folder to.
      * id **required** `string`: The ID of parent folder

#### Output
* output [Folder](#folder)

### get_folders_id_items
Retrieves a page of items in a folder. These items can be files,
folders, and web links.

To request more information about the folder itself, like its size,
please use the [Get a folder](#get-folders-id) endpoint instead.


```js
box.get_folders_id_items({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the
  * usemarker `boolean`: Specifies whether to use marker-based pagination instead of
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.
  * boxapi `string`: The URL, and optional password, for the shared link of this item.
  * sort `string` (values: id, name, date, size): Defines the **second** attribute by which items
  * direction `string` (values: ASC, DESC): The direction to sort results in. This can be either in alphabetical ascending

#### Output
* output [Items](#items)

### get_folders_id_metadata
Retrieves all metadata for a given folder. This can not be used on the root
folder with ID `0`.


```js
box.get_folders_id_metadata({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
* output [Metadatas](#metadatas)

### folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.delete
Removes any classifications from a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.delete({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
*Output schema unknown*

### folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.get
Retrieves the classification metadata instance that
has been applied to a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.get({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
* output [Classification](#classification)

### folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.post
Adds a classification to a folder by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.


```js
box.folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.post({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * body `object`
    * Box__Security__Classification__Key `string`: The name of the classification to apply to this folder.

#### Output
* output [Classification](#classification)

### folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.put
Updates a classification on a folder.

The classification can only be updated if a classification has already been
applied to the folder before. When editing classifications, only values are
defined for the enterprise will be accepted.


```js
box.folders.folder_id.metadata.enterprise.securityClassification_6VMVochwUWo.put({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * body `array`: A list containing the one change to make, to
    * items `object`: The operation to perform on the classification
      * op `string` (values: replace): `replace`
      * path `string` (values: /Box__Security__Classification__Key): `/Box__Security__Classification__Key`
      * value `string`: The name of the classification to apply to this folder.

#### Output
* output [Classification](#classification)

### delete_folders_id_metadata_id_id
Deletes a piece of folder metadata.


```js
box.delete_folders_id_metadata_id_id({
  "folder_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
*Output schema unknown*

### get_folders_id_metadata_id_id
Retrieves the instance of a metadata template that has been applied to a
folder. This can not be used on the root folder with ID `0`.


```js
box.get_folders_id_metadata_id_id({
  "folder_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
* output [Metadata](#metadata)

### post_folders_id_metadata_id_id
Applies an instance of a metadata template to a folder.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

To display the metadata template in the Box web app the enterprise needs to be
configured to enable **Cascading Folder Level Metadata** for the user in the
admin console.


```js
box.post_folders_id_metadata_id_id({
  "folder_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template
  * body `object`

#### Output
* output [Metadata](#metadata)

### put_folders_id_metadata_id_id
Updates a piece of metadata on a folder.

The metadata instance can only be updated if the template has already been
applied to the folder before. When editing metadata, only values that match
the metadata template schema will be accepted.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata instance will not be changed.


```js
box.put_folders_id_metadata_id_id({
  "folder_id": "",
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template
  * body `array`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902)
    * items `object`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902) operation for a
      * from `string`: The location in the metadata JSON object to move or copy a value
      * op `string` (values: add, replace, remove, test, move, copy): The type of change to perform on the template. Some
      * path `string`: The location in the metadata JSON object
      * value `string`: The value to be set or tested.

#### Output
* output [Metadata](#metadata)

### delete_folders_id_trash
Permanently deletes a folder that is in the trash.
This action cannot be undone.


```js
box.delete_folders_id_trash({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
*Output schema unknown*

### get_folders_id_trash
Retrieves a folder that has been moved to the trash.

Please note that only if the folder itself has been moved to the
trash can it be retrieved with this API call. If instead one of
its parent folders was moved to the trash, only that folder
can be inspected using the
[`GET /folders/:id/trash`](e://get_folders_id_trash) API.

To list all items that have been moved to the trash, please
use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
API.


```js
box.get_folders_id_trash({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Folder](#folder)

### delete_folders_id_watermark
Removes the watermark from a folder.


```js
box.delete_folders_id_watermark({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
*Output schema unknown*

### get_folders_id_watermark
Retrieve the watermark for a folder.


```js
box.get_folders_id_watermark({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.

#### Output
* output [Watermark](#watermark)

### put_folders_id_watermark
Applies or update a watermark on a folder.


```js
box.put_folders_id_watermark({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: The unique identifier that represent a folder.
  * body `object`
    * watermark **required** `object`: The watermark to imprint on the folder
      * imprint **required** `string` (values: default): The type of watermark to apply.

#### Output
* output [Watermark](#watermark)

### post_group_memberships
Creates a group membership. Only users with
admin-level permissions will be able to use this API.


```js
box.post_group_memberships({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * configurable_permissions `object`: Custom configuration for the permissions an admin
    * group **required** `object`: The group to add the user to.
      * id **required** `string`: The ID of the group to add the user to
    * role `string` (values: member, admin): The role of the user in the group.
    * user **required** `object`: The user to add to the group.
      * id **required** `string`: The ID of the user to add to the group

#### Output
* output [GroupMembership](#groupmembership)

### delete_group_memberships_id
Deletes a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.


```js
box.delete_group_memberships_id({
  "group_membership_id": ""
}, context)
```

#### Input
* input `object`
  * group_membership_id **required** `string`: The ID of the group membership.

#### Output
*Output schema unknown*

### get_group_memberships_id
Retrieves a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.


```js
box.get_group_memberships_id({
  "group_membership_id": ""
}, context)
```

#### Input
* input `object`
  * group_membership_id **required** `string`: The ID of the group membership.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [GroupMembership](#groupmembership)

### put_group_memberships_id
Updates a user's group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.


```js
box.put_group_memberships_id({
  "group_membership_id": ""
}, context)
```

#### Input
* input `object`
  * group_membership_id **required** `string`: The ID of the group membership.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * configurable_permissions `object`: Custom configuration for the permissions an admin
    * role `string` (values: member, admin): The role of the user in the group.

#### Output
* output [GroupMembership](#groupmembership)

### get_groups
Retrieves all of the groups for a given enterprise. The user
must have admin permissions to inspect enterprise's groups.


```js
box.get_groups({}, context)
```

#### Input
* input `object`
  * filter_term `string`: Limits the results to only groups whose `name` starts
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [Groups](#groups)

### post_groups
Creates a new group of users in an enterprise. Only users with admin
permissions can create new groups.


```js
box.post_groups({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * description `string`: A human readable description of the group.
    * external_sync_identifier `string`: An arbitrary identifier that can be used by
    * invitability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can invite the group to collaborate
    * member_viewability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can see the members of the group.
    * name **required** `string`: The name of the new group to be created. This name must be unique
    * provenance `string`: Keeps track of which external source this group is

#### Output
* output [Group](#group)

### delete_groups_id
Permanently deletes a group. Only users with
admin-level permissions will be able to use this API.


```js
box.delete_groups_id({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group.

#### Output
*Output schema unknown*

### get_groups_id
Retrieves information about a group. Only members of this
group or users with admin-level permissions will be able to
use this API.


```js
box.get_groups_id({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Group](#group)

### put_groups_id
Updates a specific group. Only admins of this
group or users with admin-level permissions will be able to
use this API.


```js
box.put_groups_id({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * description `string`: A human readable description of the group.
    * external_sync_identifier `string`: An arbitrary identifier that can be used by
    * invitability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can invite the group to collaborate
    * member_viewability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can see the members of the group.
    * name `string`: The name of the new group to be created. Must be unique within the
    * provenance `string`: Keeps track of which external source this group is

#### Output
* output [Group](#group)

### get_groups_id_collaborations
Retrieves all the collaborations for a group. The user
must have admin permissions to inspect enterprise's groups.

Each collaboration object has details on which files or
folders the group has access to and with what role.


```js
box.get_groups_id_collaborations({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group.
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [Collaborations](#collaborations)

### get_groups_id_memberships
Retrieves all the members for a group. Only members of this
group or users with admin-level permissions will be able to
use this API.


```js
box.get_groups_id_memberships({
  "group_id": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `string`: The ID of the group.
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [GroupMemberships](#groupmemberships)

### post_invites
Invites an existing external user to join an enterprise.

The existing user can not be part of another enterprise and
must already have a Box account. Once invited, the user will receive an
email and are prompted to accept the invitation within the
Box web application.

This method requires the "Manage An Enterprise" scope enabled for
the application, which can be enabled within the developer console.


```js
box.post_invites({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * actionable_by **required** `object`: The user to invite
      * login `string`: The login of the invited user
    * enterprise **required** `object`: The enterprise to invite the user to
      * id **required** `string`: The ID of the enterprise

#### Output
* output [Invite](#invite)

### get_invites_id
Returns the status of a user invite.


```js
box.get_invites_id({
  "invite_id": ""
}, context)
```

#### Input
* input `object`
  * invite_id **required** `string`: The ID of an invite.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Invite](#invite)

### get_legal_hold_policies
Retrieves a list of legal hold policies that belong to
an enterprise.


```js
box.get_legal_hold_policies({}, context)
```

#### Input
* input `object`
  * policy_name `string`: Limits results to policies for which the names start with
  * fields `array`: A comma-separated list of attributes to include in the
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [LegalHoldPolicies](#legalholdpolicies)

### post_legal_hold_policies
Create a new legal hold policy.


```js
box.post_legal_hold_policies({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description for the policy.
    * filter_ended_at `string`: The filter end date.
    * filter_started_at `string`: The filter start date.
    * is_ongoing `boolean`: Whether new assignments under this policy should
    * policy_name **required** `string`: The name of the policy.

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### delete_legal_hold_policies_id
Delete an existing legal hold policy.

This is an asynchronous process. The policy will not be
fully deleted yet when the response returns.


```js
box.delete_legal_hold_policies_id({
  "legal_hold_policy_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_id **required** `string`: The ID of the legal hold policy

#### Output
*Output schema unknown*

### get_legal_hold_policies_id
Retrieve a legal hold policy.


```js
box.get_legal_hold_policies_id({
  "legal_hold_policy_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_id **required** `string`: The ID of the legal hold policy

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### put_legal_hold_policies_id
Update legal hold policy.


```js
box.put_legal_hold_policies_id({
  "legal_hold_policy_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_id **required** `string`: The ID of the legal hold policy
  * body `object`
    * description `string`: A description for the policy.
    * policy_name `string`: The name of the policy.
    * release_notes `string`: Notes around why the policy was released.

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### get_legal_hold_policy_assignments
Retrieves a list of items a legal hold policy has been assigned to.


```js
box.get_legal_hold_policy_assignments({
  "policy_id": ""
}, context)
```

#### Input
* input `object`
  * policy_id **required** `string`: The ID of the legal hold policy
  * assign_to_type `string` (values: file, file_version, folder, user): Filters the results by the type of item the
  * assign_to_id `string`: Filters the results by the ID of item the
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [LegalHoldPolicyAssignments](#legalholdpolicyassignments)

### post_legal_hold_policy_assignments
Assign a legal hold to a file, file version, folder, or user.


```js
box.post_legal_hold_policy_assignments({}, context)
```

#### Input
* input `object`
  * body `object`
    * assign_to **required** `object`: The item to assign the policy to
      * id **required** `string`: The ID of item to assign the policy to
      * type **required** `string` (values: file, file_version, folder, user): The type of item to assign the policy to
    * policy_id **required** `string`: The ID of the policy to assign.

#### Output
* output [LegalHoldPolicyAssignment](#legalholdpolicyassignment)

### delete_legal_hold_policy_assignments_id
Remove a legal hold from an item.

This is an asynchronous process. The policy will not be
fully removed yet when the response returns.


```js
box.delete_legal_hold_policy_assignments_id({
  "legal_hold_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_assignment_id **required** `string`: The ID of the legal hold policy assignment

#### Output
*Output schema unknown*

### get_legal_hold_policy_assignments_id
Retrieve a legal hold policy assignment.


```js
box.get_legal_hold_policy_assignments_id({
  "legal_hold_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_assignment_id **required** `string`: The ID of the legal hold policy assignment

#### Output
* output [LegalHoldPolicyAssignment](#legalholdpolicyassignment)

### get_legal_hold_policy_assignments_id_file_versions_on_hold
Get a list of previous file versions for a legal hold
assignment.

In some cases you may only need the latest file versions instead. In these
cases, use the `GET  /legal_hold_policy_assignments/:id/files_on_hold` API
instead to return any current (latest) versions of a file for this legal hold
policy assignment.

Due to ongoing re-architecture efforts this API might not return all files
held for this policy ID. Instead, this API will only return past file versions
held in the newly developed architecture. The `GET /file_version_legal_holds`
API can be used to fetch current and past versions of files held within the
legacy architecture.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.


```js
box.get_legal_hold_policy_assignments_id_file_versions_on_hold({
  "legal_hold_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_assignment_id **required** `string`: The ID of the legal hold policy assignment
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [FileVersionLegalHolds](#fileversionlegalholds)

### get_legal_hold_policy_assignments_id_files_on_hold
Get a list of current file versions for a legal hold
assignment.

In some cases you may want to get previous file versions instead. In these
cases, use the `GET  /legal_hold_policy_assignments/:id/file_versions_on_hold`
API instead to return any previous versions of a file for this legal hold
policy assignment.

Due to ongoing re-architecture efforts this API might not return all file
versions held for this policy ID. Instead, this API will only return the
latest file version held in the newly developed architecture. The `GET
/file_version_legal_holds` API can be used to fetch current and past versions
of files held within the legacy architecture.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.


```js
box.get_legal_hold_policy_assignments_id_files_on_hold({
  "legal_hold_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * legal_hold_policy_assignment_id **required** `string`: The ID of the legal hold policy assignment
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [FileVersionLegalHolds](#fileversionlegalholds)

### get_metadata_cascade_policies
Retrieves a list of all the metadata cascade policies
that are applied to a given folder. This can not be used on the root
folder with ID `0`.


```js
box.get_metadata_cascade_policies({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`: Specifies which folder to return policies for. This can not be used on the
  * owner_enterprise_id `string`: The ID of the enterprise ID for which to find metadata
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [MetadataCascadePolicies](#metadatacascadepolicies)

### post_metadata_cascade_policies
Creates a new metadata cascade policy that applies a given
metadata template to a given folder and automatically
cascades it down to any files within that folder.

In order for the policy to be applied a metadata instance must first
be applied to the folder the policy is to be applied to.


```js
box.post_metadata_cascade_policies({}, context)
```

#### Input
* input `object`
  * body `object`
    * folder_id **required** `string`: The ID of the folder to apply the policy to. This folder will
    * scope **required** `string` (values: global, enterprise): The scope of the targeted metadata template. This template will
    * templateKey **required** `string`: The key of the targeted metadata template. This template will

#### Output
* output [MetadataCascadePolicy](#metadatacascadepolicy)

### delete_metadata_cascade_policies_id
Deletes a metadata cascade policy.


```js
box.delete_metadata_cascade_policies_id({
  "metadata_cascade_policy_id": ""
}, context)
```

#### Input
* input `object`
  * metadata_cascade_policy_id **required** `string`: The ID of the metadata cascade policy.

#### Output
*Output schema unknown*

### get_metadata_cascade_policies_id
Retrieve a specific metadata cascade policy assigned to a folder.


```js
box.get_metadata_cascade_policies_id({
  "metadata_cascade_policy_id": ""
}, context)
```

#### Input
* input `object`
  * metadata_cascade_policy_id **required** `string`: The ID of the metadata cascade policy.

#### Output
* output [MetadataCascadePolicy](#metadatacascadepolicy)

### post_metadata_cascade_policies_id_apply
Force the metadata on a folder with a metadata cascade policy to be applied to
all of its children. This can be used after creating a new cascade policy to
enforce the metadata to be cascaded down to all existing files within that
folder.


```js
box.post_metadata_cascade_policies_id_apply({
  "metadata_cascade_policy_id": ""
}, context)
```

#### Input
* input `object`
  * metadata_cascade_policy_id **required** `string`: The ID of the cascade policy to force-apply.
  * body `object`
    * conflict_resolution **required** `string` (values: none, overwrite): Describes the desired behavior when dealing with the conflict

#### Output
*Output schema unknown*

### post_metadata_queries_execute_read
Create a search using SQL-like syntax to return items that match specific
metadata.

By default, this endpoint returns only the most basic info about the items for
which the query matches. To get additional fields for each item, including any
of the metadata, use the `fields` attribute in the query.


```js
box.post_metadata_queries_execute_read({}, context)
```

#### Input
* input `object`
  * body [MetadataQuery](#metadataquery)

#### Output
* output [MetadataQueryResults](#metadataqueryresults)

### get_metadata_templates
Finds a metadata template by searching for the ID of an instance of the
template.


```js
box.get_metadata_templates({
  "metadata_instance_id": ""
}, context)
```

#### Input
* input `object`
  * metadata_instance_id **required** `string`: The ID of an instance of the metadata template to find.

#### Output
* output [MetadataTemplates](#metadatatemplates)

### get_metadata_templates_enterprise
Used to retrieve all metadata templates created to be used specifically within
the user's enterprise


```js
box.get_metadata_templates_enterprise({}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [MetadataTemplates](#metadatatemplates)

### metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema.delete
Delete all classifications by deleting the classification
metadata template.


```js
box.metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema.get
Retrieves the classification metadata template and lists all the
classifications available to this enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.


```js
box.metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ClassificationTemplate](#classificationtemplate)

### metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_add.put
Adds one or more new classifications to the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.


```js
box.metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_add.put({}, context)
```

#### Input
* input `object`
  * body `array`: An array that contains one or more classifications to add to
    * items `object`: A single classification to add to the enterprise.
      * data **required** `object`: The details of the classification to add.
        * classification `object`: Additional details for the classification.
          * classificationDefinition `string`: A longer description of the classification.
          * colorID `number`: An internal Box identifier used to assign a color to
        * key **required** `string`: The label of the classification as shown in the web and
      * fieldKey **required** `string`: `Box__Security__Classification__Key`
      * op **required** `string`: `addEnumOption`

#### Output
* output [ClassificationTemplate](#classificationtemplate)

### metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_delete.put
Removes a classification from the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.


```js
box.metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_delete.put({}, context)
```

#### Input
* input `object`
  * body `array`: An array that contains one or more classifications to remove.
    * items `object`: A single classification to remove.
      * enumOptionKey **required** `string`: The label of the classification to remove.
      * fieldKey **required** `string`: `Box__Security__Classification__Key`
      * op **required** `string`: `removeEnumOption`

#### Output
* output [ClassificationTemplate](#classificationtemplate)

### metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_update.put
Updates the labels and descriptions of one or more classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.


```js
box.metadata_templates.enterprise.securityClassification_6VMVochwUWo.schema_update.put({}, context)
```

#### Input
* input `object`
  * body `array`: An array that contains one or more classifications to update.
    * items `object`: A single classification to update.
      * data **required** `object`: The details of the updated classification.
        * classification `object`: Additional details for the classification.
          * classificationDefinition `string`: A longer description of the classification.
          * colorID `number`: An internal Box identifier used to assign a color to
        * key **required** `string`: A new label for the classification, as it will be
      * enumOptionKey **required** `string`: The original label of the classification to change.
      * fieldKey **required** `string`: `Box__Security__Classification__Key`
      * op **required** `string`: `editEnumOption`

#### Output
* output [ClassificationTemplate](#classificationtemplate)

### get_metadata_templates_global
Used to retrieve all generic, global metadata templates available to all
enterprises using Box.


```js
box.get_metadata_templates_global({}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [MetadataTemplates](#metadatatemplates)

### post_metadata_templates_schema
Creates a new metadata template that can be applied to
files and folders.


```js
box.post_metadata_templates_schema({}, context)
```

#### Input
* input `object`
  * body `object`
    * copyInstanceOnItemCopy `boolean`: Whether or not to copy any metadata attached to a file or folder
    * displayName **required** `string`: The display name of the template.
    * fields `array`: An ordered list of template fields which are part of the template.
      * items `object`: A field within a metadata template. Fields can be a basic text, date, or
        * description `string`: A description of the field. This is not shown to the user.
        * displayName **required** `string`: The display name of the field as it is shown to the user in the web and
        * hidden `boolean`: Whether this field is hidden in the UI for the user and can only be set
        * key **required** `string`: A unique identifier for the field. The identifier must
        * options `array`: A list of options for this field. This is used in combination with the
          * items `object`: An option for a Metadata Template Field.
        * type **required** `string` (values: string, float, date, enum, multiSelect): The type of field. The basic fields are a `string` field for text, a
    * hidden `boolean`: Defines if this template is visible in the Box web app UI, or if
    * scope **required** `string`: The scope of the metadata template to create. Applications can
    * templateKey `string`: A unique identifier for the template. This identifier needs to be

#### Output
* output [MetadataTemplate](#metadatatemplate)

### metadata_templates.schema_classifications.post
When an enterprise does not yet have any classifications, this API call
initializes the classification template with an initial set of
classifications.

If an enterprise already has a classification, the template will already
exist and instead an API call should be made to add additional
classifications.


```js
box.metadata_templates.schema_classifications.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * copyInstanceOnItemCopy `boolean`: `false`
    * displayName **required** `string` (values: Classification): `Classification`
    * fields `array`: The classification template holds one field, which holds
      * items `object`: The `enum` field which holds all the valid classification
        * displayName `string` (values: Classification): `Classification`
        * hidden `boolean`: `false`
        * key `string` (values: Box__Security__Classification__Key): `Box__Security__Classification__Key`
        * options `array`: The actual list of classifications that are present on
          * items `object`: An individual classification.
        * type `string` (values: enum): `enum`
    * hidden `boolean`: `false`
    * scope **required** `string` (values: enterprise): The scope in which to create the classifications. This should
    * templateKey `string` (values: securityClassification-6VMVochwUWo): `securityClassification-6VMVochwUWo`

#### Output
* output [ClassificationTemplate](#classificationtemplate)

### delete_metadata_templates_id_id_schema
Delete a metadata template and its instances.
This deletion is permanent and can not be reversed.


```js
box.delete_metadata_templates_id_id_schema({
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
*Output schema unknown*

### get_metadata_templates_id_id_schema
Retrieves a metadata template by its `scope` and `templateKey` values.

To find the `scope` and `templateKey` for a template, list all templates for
an enterprise or globally, or list all templates applied to a file or folder.


```js
box.get_metadata_templates_id_id_schema({
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template

#### Output
* output [MetadataTemplate](#metadatatemplate)

### put_metadata_templates_id_id_schema
Updates a metadata template.

The metadata template can only be updated if the template
already exists.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata template will not be changed.


```js
box.put_metadata_templates_id_id_schema({
  "scope": "",
  "template_key": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string` (values: global, enterprise): The scope of the metadata template
  * template_key **required** `string`: The name of the metadata template
  * body `array`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902)
    * items `object`: A [JSON-Patch](https://tools.ietf.org/html/rfc6902) operation for a
      * data `object`: The data for the operation. This will vary depending on the
      * enumOptionKey `string`: For operations that affect a single `enum` option this defines
      * enumOptionKeys `array`: For operations that affect multiple `enum` options this defines
        * items `string`
      * fieldKey `string`: For operations that affect a single field this defines the key of
      * fieldKeys `array`: For operations that affect multiple fields this defines the keys
        * items `string`
      * multiSelectOptionKey `string`: For operations that affect a single multi select option this
      * multiSelectOptionKeys `array`: For operations that affect multiple multi select options this
        * items `string`
      * op **required** `string` (values: editTemplate, addField, reorderFields, addEnumOption, reorderEnumOptions, reorderMultiSelectOptions, addMultiSelectOption, editField, removeField, editEnumOption, removeEnumOption, editMultiSelectOption, removeMultiSelectOption): The type of change to perform on the template. Some

#### Output
* output [MetadataTemplate](#metadatatemplate)

### get_metadata_templates_id
Retrieves a metadata template by its ID.


```js
box.get_metadata_templates_id({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`: The ID of the template

#### Output
* output [MetadataTemplate](#metadatatemplate)

### post_oauth2_revoke
Revoke an active Access Token, effectively logging a user out
that has been previously authenticated.


```js
box.post_oauth2_revoke({}, context)
```

#### Input
* input `object`
  * client_id `string`: The Client ID of the application requesting to revoke the
  * client_secret `string`: The client secret of the application requesting to revoke
  * token `string`: The access token to revoke.

#### Output
*Output schema unknown*

### post_oauth2_token
Request an Access Token using either a client-side obtained OAuth 2.0
authorization code or a server-side JWT assertion.

An Access Token is a string that enables Box to verify that a
request belongs to an authorized session. In the normal order of
operations you will begin by requesting authentication from the
[authorize](#get-authorize) endpoint and Box will send you an
authorization code.

You will then send this code to this endpoint to exchange it for
an Access Token. The returned Access Token can then be used to to make
Box API calls.


```js
box.post_oauth2_token({
  "grant_type": ""
}, context)
```

#### Input
* input `object`
  * actor_token `string`: The token used to create an annotator token.
  * actor_token_type `string` (values: urn:ietf:params:oauth:token-type:id_token): The type of `actor_token` passed in.
  * assertion `string`: A JWT assertion for which to request a new access token.
  * box_subject_id `string`: Used in combination with `client_credentials` as the `grant_type`.
  * box_subject_type `string` (values: enterprise, user): Used in combination with `client_credentials` as the `grant_type`.
  * client_id `string`: The Client ID of the application requesting an access token.
  * client_secret `string`: The client secret of the application requesting an access token.
  * code `string`: The client-side authorization code passed to your application by
  * grant_type **required** `string` (values: authorization_code, refresh_token, client_credentials, urn:ietf:params:oauth:grant-type:jwt-bearer, urn:ietf:params:oauth:grant-type:token-exchange): The type of request being made, either using a client-side obtained
  * refresh_token `string`: A refresh token used to get a new access token with.
  * resource `string`: Full URL for the file that the token should be generated for.
  * scope `string`: The space-delimited list of scopes that you want apply to the
  * subject_token `string`: The token to exchange for a downscoped token. This can be a regular
  * subject_token_type `string` (values: urn:ietf:params:oauth:token-type:access_token): The type of `subject_token` passed in.

#### Output
* output [AccessToken](#accesstoken)

### oauth2.token_refresh.post
Refresh an Access Token using its client ID, secret, and refresh token.


```js
box.oauth2.token_refresh.post({
  "client_id": "",
  "client_secret": "",
  "grant_type": "",
  "refresh_token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: The client ID of the application requesting to refresh the token.
  * client_secret **required** `string`: The client secret of the application requesting to refresh the token.
  * grant_type **required** `string` (values: refresh_token): The type of request being made, in this case a refresh request.
  * refresh_token **required** `string`: The refresh token to refresh.

#### Output
* output [AccessToken](#accesstoken)

### get_recent_items
Returns information about the recent items accessed
by a user, either in the last 90 days or up to the last
1000 items accessed.


```js
box.get_recent_items({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * limit `integer`: The maximum number of items to return per page.
  * marker `string`: Defines the position marker at which to begin returning results. This is

#### Output
* output [RecentItems](#recentitems)

### get_retention_policies
Retrieves all of the retention policies for an enterprise.


```js
box.get_retention_policies({}, context)
```

#### Input
* input `object`
  * policy_name `string`: Filters results by a case sensitive prefix of the name of
  * policy_type `string` (values: finite, indefinite): Filters results by the type of retention policy.
  * created_by_user_id `string`: Filters results by the ID of the user who created policy.

#### Output
* output [RetentionPolicies](#retentionpolicies)

### post_retention_policies
Creates a retention policy.


```js
box.post_retention_policies({}, context)
```

#### Input
* input `object`
  * body `object`
    * are_owners_notified `boolean`: Whether owner and co-owners of a file are notified
    * can_owner_extend_retention `boolean`: Whether the owner of a file will be allowed to
    * custom_notification_recipients `array`
      * items `object`: A user that is notified of an event.
        * id `string`: The id of the user to notify
        * login `string`: The email address the user uses to notify
        * name `string`: The name of the user to notify
        * type `string` (values: user): The type of item to notify
    * disposition_action **required** `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
    * policy_name **required** `string`: The name for the retention policy
    * policy_type **required** `string` (values: finite, indefinite): The type of the retention policy. A retention
    * retention_length `string`: The length of the retention policy. This length

#### Output
* output [RetentionPolicy](#retentionpolicy)

### get_retention_policies_id
Retrieves a retention policy.


```js
box.get_retention_policies_id({
  "retention_policy_id": ""
}, context)
```

#### Input
* input `object`
  * retention_policy_id **required** `string`: The ID of the retention policy.

#### Output
* output [RetentionPolicy](#retentionpolicy)

### put_retention_policies_id
Updates a retention policy.


```js
box.put_retention_policies_id({
  "retention_policy_id": ""
}, context)
```

#### Input
* input `object`
  * retention_policy_id **required** `string`: The ID of the retention policy.
  * body `object`
    * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
    * policy_name `string`: The name for the retention policy
    * status `string` (values: retired): Used to retire a retention policy.

#### Output
* output [RetentionPolicy](#retentionpolicy)

### get_retention_policies_id_assignments
Returns a list of all retention policy assignments associated with a specified
retention policy.


```js
box.get_retention_policies_id_assignments({
  "retention_policy_id": ""
}, context)
```

#### Input
* input `object`
  * retention_policy_id **required** `string`: The ID of the retention policy.
  * type `string` (values: folder, enterprise): The type of the retention policy assignment to retrieve.
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [RetentionPolicyAssignments](#retentionpolicyassignments)

### post_retention_policy_assignments
Assigns a retention policy to an item.


```js
box.post_retention_policy_assignments({}, context)
```

#### Input
* input `object`
  * body `object`
    * assign_to **required** `object`: The item to assign the policy to
      * id **required** `string`: The ID of item to assign the policy to.
      * type **required** `string` (values: enterprise, folder, metadata_template): The type of item to assign the policy to.
    * policy_id **required** `string`: The ID of the retention policy to assign

#### Output
* output [RetentionPolicyAssignment](#retentionpolicyassignment)

### get_retention_policy_assignments_id
Retrieves a retention policy assignment


```js
box.get_retention_policy_assignments_id({
  "retention_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * retention_policy_assignment_id **required** `string`: The ID of the retention policy assignment.

#### Output
* output [RetentionPolicyAssignment](#retentionpolicyassignment)

### get_search
Searches for files, folders, web links, and shared files across the
users content or across the entire enterprise.


```js
box.get_search({}, context)
```

#### Input
* input `object`
  * query `string`: The string to search for. This query is matched against item names,
  * scope `string` (values: user_content, enterprise_content): Limits the search results to either the files that the user has
  * file_extensions `array`: Limits the search results to any files that match any of the provided
  * created_at_range `array`: Limits the search results to any items created within
  * updated_at_range `array`: Limits the search results to any items updated within
  * size_range `array`: Limits the search results to any items with a size within
  * owner_user_ids `array`: Limits the search results to any items that are owned
  * ancestor_folder_ids `array`: Limits the search results to items within the given
  * content_types `array`: Limits the search results to any items that match the search query
  * type `string` (values: file, folder, web_link): Limits the search results to any items of this type. This
  * trash_content `string` (values: non_trashed_only, trashed_only): Determines if the search should look in the trash for items.
  * mdfilters `array`: Limits the search results to any items for which the metadata matches
  * sort `string` (values: modified_at, relevance): Defines the order in which search results are returned. This API
  * direction `string` (values: DESC, ASC): Defines the direction in which search results are ordered. This API
  * limit `integer`: Defines the maximum number of items to return as part of a page of
  * include_recent_shared_links `boolean`: Defines whether the search results should include any items
  * fields `array`: A comma-separated list of attributes to include in the
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
*Output schema unknown*

### get_shared_items
Return the file represented by a shared link.

A shared file can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared file when only given a shared link.


```js
box.get_shared_items({
  "boxapi": ""
}, context)
```

#### Input
* input `object`
  * if-none-match `string`: Ensures an item is only returned if it has changed.
  * fields `array`: A comma-separated list of attributes to include in the
  * boxapi **required** `string`: A header containing the shared link and optional password for the

#### Output
* output [File](#file)

### shared_items_folders.get
Return the folder represented by a shared link.

A shared folder can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared folder when only given a shared link.


```js
box.shared_items_folders.get({
  "boxapi": ""
}, context)
```

#### Input
* input `object`
  * if-none-match `string`: Ensures an item is only returned if it has changed.
  * fields `array`: A comma-separated list of attributes to include in the
  * boxapi **required** `string`: A header containing the shared link and optional password for the

#### Output
* output [Folder](#folder)

### put_skill_invocations_id
An alternative method that can be used to overwrite and update all Box Skill
metadata cards on a file.


```js
box.put_skill_invocations_id({
  "skill_id": ""
}, context)
```

#### Input
* input `object`
  * skill_id **required** `string`: The ID of the skill to apply this metadata for.
  * body `object`
    * file **required** `object`: The file to assign the cards to.
      * id `string`: The ID of the file
      * type `string` (values: file): `file`
    * file_version `object`: The optional file version to assign the cards to.
      * id `string`: The ID of the file version
      * type `string` (values: file_version): `file_version`
    * metadata **required** `object`: The metadata to set for this skill. This is a list of
      * cards `array`: A list of Box Skill cards to apply to this file.
    * status **required** `string` (values: invoked, processing, success, transient_failure, permanent_failure): Defines the status of this invocation. Set this to `success` when setting Skill cards.
    * usage `object`: A descriptor that defines what items are affected by this call.
      * unit `string`: `file`
      * value `number`: `1`

#### Output
*Output schema unknown*

### get_storage_policies
Fetches all the storage policies in the enterprise.


```js
box.get_storage_policies({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [StoragePolicies](#storagepolicies)

### get_storage_policies_id
Fetches a specific storage policy.


```js
box.get_storage_policies_id({
  "storage_policy_id": ""
}, context)
```

#### Input
* input `object`
  * storage_policy_id **required** `string`: The ID of the storage policy.

#### Output
* output [StoragePolicy](#storagepolicy)

### get_storage_policy_assignments
Fetches all the storage policy assignment for an enterprise or user.


```js
box.get_storage_policy_assignments({
  "resolved_for_type": "",
  "resolved_for_id": ""
}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * resolved_for_type **required** `string` (values: user, enterprise): The target type to return assignments for
  * resolved_for_id **required** `string`: The ID of the user or enterprise to return assignments for

#### Output
* output [StoragePolicyAssignments](#storagepolicyassignments)

### post_storage_policy_assignments
Creates a storage policy assignment for an enterprise or user.


```js
box.post_storage_policy_assignments({}, context)
```

#### Input
* input `object`
  * body `object`
    * assigned_to **required** `object`: The user or enterprise to assign the storage
      * id **required** `string`: The ID of the user or enterprise
      * type **required** `string` (values: user, enterprise): The type to assign the policy to.
    * storage_policy **required** `object`: The storage policy to assign to the user or
      * id **required** `string`: The ID of the storage policy to assign.
      * type **required** `string` (values: storage_policy): The type to assign.

#### Output
* output [StoragePolicyAssignment](#storagepolicyassignment)

### delete_storage_policy_assignments_id
Delete a storage policy assignment.

Deleting a storage policy assignment on a user
will have the user inherit the enterprise's default
storage policy.

There is a rate limit for calling this endpoint of only
twice per user in a 24 hour time frame.


```js
box.delete_storage_policy_assignments_id({
  "storage_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * storage_policy_assignment_id **required** `string`: The ID of the storage policy assignment.

#### Output
*Output schema unknown*

### get_storage_policy_assignments_id
Fetches a specific storage policy assignment.


```js
box.get_storage_policy_assignments_id({
  "storage_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * storage_policy_assignment_id **required** `string`: The ID of the storage policy assignment.

#### Output
* output [StoragePolicyAssignment](#storagepolicyassignment)

### put_storage_policy_assignments_id
Updates a specific storage policy assignment.


```js
box.put_storage_policy_assignments_id({
  "storage_policy_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * storage_policy_assignment_id **required** `string`: The ID of the storage policy assignment.
  * body `object`
    * storage_policy **required** `object`: The storage policy to assign to the user or
      * id **required** `string`: The ID of the storage policy to assign.
      * type **required** `string` (values: storage_policy): The type to assign.

#### Output
* output [StoragePolicyAssignment](#storagepolicyassignment)

### post_task_assignments
Assigns a task to a user.

A task can be assigned to more than one user by creating multiple
assignments.


```js
box.post_task_assignments({}, context)
```

#### Input
* input `object`
  * body `object`
    * assign_to **required** `object`: The user to assign the task to.
      * id `string`: The ID of the user to assign to the
      * login `string`: The email address of the user to assign to the task.
    * task **required** `object`: The task to assign to a user.
      * id **required** `string`: The ID of the task
      * type **required** `string` (values: task): The type of the item to assign.

#### Output
* output [TaskAssignment](#taskassignment)

### delete_task_assignments_id
Deletes a specific task assignment.


```js
box.delete_task_assignments_id({
  "task_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * task_assignment_id **required** `string`: The ID of the task assignment.

#### Output
*Output schema unknown*

### get_task_assignments_id
Retrieves information about a task assignment.


```js
box.get_task_assignments_id({
  "task_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * task_assignment_id **required** `string`: The ID of the task assignment.

#### Output
* output [TaskAssignment](#taskassignment)

### put_task_assignments_id
Updates a task assignment. This endpoint can be
used to update the state of a task assigned to a user.


```js
box.put_task_assignments_id({
  "task_assignment_id": ""
}, context)
```

#### Input
* input `object`
  * task_assignment_id **required** `string`: The ID of the task assignment.
  * body `object`
    * message `string`: An optional message by the assignee that can be added to the task.
    * resolution_state `string` (values: completed, incomplete, approved, rejected): The state of the task assigned to the user.

#### Output
* output [TaskAssignment](#taskassignment)

### post_tasks
Creates a single task on a file. This task is not assigned to any user and
will need to be assigned separately.


```js
box.post_tasks({}, context)
```

#### Input
* input `object`
  * body `object`
    * action `string` (values: review, complete): The action the task assignee will be prompted to do. Must be
    * completion_rule `string` (values: all_assignees, any_assignee): Defines which assignees need to complete this task before the task
    * due_at `string`: Defines when the task is due. Defaults to `null` if not
    * item **required** `object`: The file to attach the task to.
      * id **required** `string`: The ID of the file
      * type **required** `string` (values: file): `file`
    * message `string`: An optional message to include with the task.

#### Output
* output [Task](#task)

### delete_tasks_id
Removes a task from a file.


```js
box.delete_tasks_id({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task.

#### Output
*Output schema unknown*

### get_tasks_id
Retrieves information about a specific task.


```js
box.get_tasks_id({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task.

#### Output
* output [Task](#task)

### put_tasks_id
Updates a task. This can be used to update a task's configuration, or to
update its completion state.


```js
box.put_tasks_id({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task.
  * body `object`
    * action `string` (values: review, complete): The action the task assignee will be prompted to do. Must be
    * completion_rule `string` (values: all_assignees, any_assignee): Defines which assignees need to complete this task before the task
    * due_at `string`: When the task is due at.
    * message `string`: The message included with the task.

#### Output
* output [Task](#task)

### get_tasks_id_assignments
Lists all of the assignments for a given task.


```js
box.get_tasks_id_assignments({
  "task_id": ""
}, context)
```

#### Input
* input `object`
  * task_id **required** `string`: The ID of the task.

#### Output
* output [TaskAssignments](#taskassignments)

### get_terms_of_service_user_statuses
Retrieves an overview of users and their status for a
terms of service, including Whether they have accepted
the terms and when.


```js
box.get_terms_of_service_user_statuses({
  "tos_id": ""
}, context)
```

#### Input
* input `object`
  * tos_id **required** `string`: The ID of the terms of service.
  * user_id `string`: Limits results to the given user ID.

#### Output
* output [TermsOfServiceUserStatuses](#termsofserviceuserstatuses)

### post_terms_of_service_user_statuses
Sets the status for a terms of service for a user.


```js
box.post_terms_of_service_user_statuses({}, context)
```

#### Input
* input `object`
  * body `object`
    * is_accepted **required** `boolean`: Whether the user has accepted the terms.
    * tos **required** `object`: The terms of service to set the status for.
      * id **required** `string`: The ID of terms of service
      * type **required** `string` (values: terms_of_service): The type of object.
    * user **required** `object`: The user to set the status for.
      * id **required** `string`: The ID of user
      * type **required** `string` (values: user): The type of object.

#### Output
* output [TermsOfServiceUserStatus](#termsofserviceuserstatus)

### put_terms_of_service_user_statuses_id
Updates the status for a terms of service for a user.


```js
box.put_terms_of_service_user_statuses_id({
  "terms_of_service_user_status_id": ""
}, context)
```

#### Input
* input `object`
  * terms_of_service_user_status_id **required** `string`: The ID of the terms of service status.
  * body `object`
    * is_accepted **required** `boolean`: Whether the user has accepted the terms.

#### Output
* output [TermsOfServiceUserStatus](#termsofserviceuserstatus)

### get_terms_of_services
Returns the current terms of service text and settings
for the enterprise.


```js
box.get_terms_of_services({}, context)
```

#### Input
* input `object`
  * tos_type `string` (values: external, managed): Limits the results to the terms of service of the given type.

#### Output
* output [TermsOfServices](#termsofservices)

### post_terms_of_services
Creates a terms of service for a given enterprise
and type of user.


```js
box.post_terms_of_services({}, context)
```

#### Input
* input `object`
  * body `object`
    * status **required** `string` (values: enabled, disabled): Whether this terms of service is active.
    * text **required** `string`: The terms of service text to display to users.
    * tos_type `string` (values: external, managed): The type of user to set the terms of

#### Output
* output [Task](#task)

### get_terms_of_services_id
Fetches a specific terms of service.


```js
box.get_terms_of_services_id({
  "terms_of_service_id": ""
}, context)
```

#### Input
* input `object`
  * terms_of_service_id **required** `string`: The ID of the terms of service.

#### Output
* output [TermsOfService](#termsofservice)

### put_terms_of_services_id
Updates a specific terms of service.


```js
box.put_terms_of_services_id({
  "terms_of_service_id": ""
}, context)
```

#### Input
* input `object`
  * terms_of_service_id **required** `string`: The ID of the terms of service.
  * body `object`
    * status **required** `string` (values: enabled, disabled): Whether this terms of service is active.
    * text **required** `string`: The terms of service text to display to users.

#### Output
* output [TermsOfService](#termsofservice)

### get_users
Returns a list of all users for the Enterprise along with their `user_id`,
`public_name`, and `login`.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.


```js
box.get_users({}, context)
```

#### Input
* input `object`
  * filter_term `string`: Limits the results to only users who's `name` or
  * user_type `string` (values: all, managed, external): Limits the results to the kind of user specified.
  * external_app_user_id `string`: Limits the results to app users with the given
  * fields `array`: A comma-separated list of attributes to include in the
  * offset `integer`: The offset of the item at which to begin the response.
  * limit `integer`: The maximum number of items to return per page.
  * usemarker `boolean`: Specifies whether to use marker-based pagination instead of
  * marker `string`: Defines the position marker at which to begin returning results. This is

#### Output
* output [Users](#users)

### post_users
Creates a new managed user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.


```js
box.post_users({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * address `string`: The user’s address
    * can_see_managed_users `boolean`: Whether the user can see other enterprise users in their
    * external_app_user_id `string`: An external identifier for an app user, which can be used to look
    * is_exempt_from_device_limits `boolean`: Whether to exempt the user from enterprise device limits
    * is_exempt_from_login_verification `boolean`: Whether the user must use two-factor authentication
    * is_external_collab_restricted `boolean`: Whether the user is allowed to collaborate with users outside
    * is_platform_access_only `boolean`: Specifies that the user is an app user.
    * is_sync_enabled `boolean`: Whether the user can use Box Sync
    * job_title `string`: The user’s job title
    * language `string`: The language of the user, formatted in modified version of the
    * login `string`: The email address the user uses to log in
    * name **required** `string`: The name of the user
    * phone `string`: The user’s phone number
    * role `string` (values: coadmin, user): The user’s enterprise role
    * space_amount `integer`: The user’s total available space in bytes. Set this to `-1` to
    * status `string` (values: active, inactive, cannot_delete_edit, cannot_delete_edit_upload): The user's account status
    * timezone `string`: The user's timezone
    * tracking_codes `array`: Tracking codes allow an admin to generate reports from the
      * items `string`

#### Output
* output [User](#user)

### get_users_me
Retrieves information about the user who is currently authenticated.

In the case of a client-side authenticated OAuth 2.0 application
this will be the user who authorized the app.

In the case of a JWT, server-side authenticated application
this will be the service account that belongs to the application
by default.

Use the `As-User` header to change who this API call is made on behalf of.


```js
box.get_users_me({}, context)
```

#### Input
* input `object`
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [User](#user)

### delete_users_id
Deletes a user. By default this will fail if the user
still owns any content. Move their owned content first
before proceeding, or use the `force` field to delete
the user and their files.


```js
box.delete_users_id({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * notify `boolean`: Whether the user will receive email notification of
  * force `boolean`: Whether the user should be deleted even if this user

#### Output
*Output schema unknown*

### get_users_id
Retrieves information about a user in the enterprise.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.

This endpoint also returns a limited set of information
for external users who are collaborated on content
owned by the enterprise for authenticated users with the
right scopes. In this case, disallowed fields will return
null instead.


```js
box.get_users_id({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [User](#user)

### put_users_id
Updates a managed user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.


```js
box.put_users_id({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * address `string`: The user’s address
    * can_see_managed_users `boolean`: Whether the user can see other enterprise users in their
    * enterprise `string`: Set this to `null` to roll the user out of the enterprise
    * is_exempt_from_device_limits `boolean`: Whether to exempt the user from enterprise device limits
    * is_exempt_from_login_verification `boolean`: Whether the user must use two-factor authentication
    * is_external_collab_restricted `boolean`: Whether the user is allowed to collaborate with users outside
    * is_password_reset_required `boolean`: Whether the user is required to reset their password
    * is_sync_enabled `boolean`: Whether the user can use Box Sync
    * job_title `string`: The user’s job title
    * language `string`: The language of the user, formatted in modified version of the
    * login `string`: The email address the user uses to log in
    * name `string`: The name of the user
    * notification_email `object`: An alternate notification email address to which email
      * email `string`: The email address to send the notifications to.
    * notify `boolean`: Whether the user should receive an email when they
    * phone `string`: The user’s phone number
    * role `string` (values: coadmin, user): The user’s enterprise role
    * space_amount `integer`: The user’s total available space in bytes. Set this to `-1` to
    * status `string` (values: active, inactive, cannot_delete_edit, cannot_delete_edit_upload): The user's account status
    * timezone `string`: The user's timezone
    * tracking_codes `array`: Tracking codes allow an admin to generate reports from the
      * items `string`

#### Output
* output [User](#user)

### get_users_id_avatar
Retrieves an image of a the user's avatar.


```js
box.get_users_id_avatar({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.

#### Output
* output `string`: The avatar

### get_users_id_email_aliases
Retrieves all email aliases for a user. The collection
does not include the primary login for the user.


```js
box.get_users_id_email_aliases({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.

#### Output
* output [EmailAliases](#emailaliases)

### post_users_id_email_aliases
Adds a new email alias to a user account..


```js
box.post_users_id_email_aliases({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * body `object`
    * email **required** `string`: The email address to add to the account as an alias.

#### Output
* output [EmailAlias](#emailalias)

### delete_users_id_email_aliases_id
Removes an email alias from a user.


```js
box.delete_users_id_email_aliases_id({
  "user_id": "",
  "email_alias_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * email_alias_id **required** `string`: The ID of the email alias.

#### Output
*Output schema unknown*

### put_users_id_folders_0
Move all of the items (files, folders and workflows) owned by a user into
another user's account

Only the root folder (`0`) can be transferred.

Folders can only be moved across users by users with administrative
permissions.

This call will be performed synchronously which might lead to a slow response
when the source user has a large number of items in all of its folders.

If the destination path has a metadata cascade policy attached to any of
the parent folders, a metadata cascade operation will be kicked off
asynchronously.

There is currently no way to check for when this operation is finished.

The destination folder's name will be in the format `{User}'s Files and
Folders`, where `{User}` is the display name of the user.

To make this API call your application will need to have the "Read and write
all files and folders stored in Box" scope enabled.

Please make sure the destination user has access to `Relay` or `Relay Lite`,
and has access to the files and folders involved in the workflows being
transferred.

Admins will receive an email when the operation is completed.


```js
box.put_users_id_folders_0({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * fields `array`: A comma-separated list of attributes to include in the
  * notify `boolean`: Determines if users should receive email notification
  * body `object`
    * owned_by **required** `object`: The user who the folder will be transferred to
      * id **required** `string`: The ID of the user who the folder will be

#### Output
* output [Folder](#folder)

### get_users_id_memberships
Retrieves all the groups for a user. Only members of this
group or users with admin-level permissions will be able to
use this API.


```js
box.get_users_id_memberships({
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `string`: The ID of the user.
  * limit `integer`: The maximum number of items to return per page.
  * offset `integer`: The offset of the item at which to begin the response.

#### Output
* output [GroupMemberships](#groupmemberships)

### post_web_links
Creates a web link object within a folder.


```js
box.post_web_links({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: Description of the web link.
    * name `string`: Name of the web link. Defaults to the URL if not set.
    * parent **required** `object`: The parent folder to create the web link within.
      * id **required** `string`: The ID of parent folder
    * url **required** `string`: The URL that this web link links to. Must start with

#### Output
* output [WebLink](#weblink)

### delete_web_links_id
Deletes a web link.


```js
box.delete_web_links_id({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.

#### Output
*Output schema unknown*

### get_web_links_id
Retrieve information about a web link.


```js
box.get_web_links_id({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.
  * boxapi `string`: The URL, and optional password, for the shared link of this item.

#### Output
* output [WebLink](#weblink)

### post_web_links_id
Restores a web link that has been moved to the trash.

An optional new parent ID can be provided to restore the  web link to in case
the original folder has been deleted.


```js
box.post_web_links_id({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.
  * fields `array`: A comma-separated list of attributes to include in the
  * body `object`
    * name `string`: An optional new name for the web link.
    * parent
      * id `string`: The ID of parent item

#### Output
* output [WebLink](#weblink)

### put_web_links_id
Updates a web link object.


```js
box.put_web_links_id({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.
  * body `object`
    * description `string`: A new description of the web link.
    * name `string`: A new name for the web link. Defaults to the URL if not set.
    * parent
      * id `string`: The ID of parent item
    * url `string`: The new URL that the web link links to. Must start with

#### Output
* output [WebLink](#weblink)

### delete_web_links_id_trash
Permanently deletes a web link that is in the trash.
This action cannot be undone.


```js
box.delete_web_links_id_trash({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.

#### Output
*Output schema unknown*

### get_web_links_id_trash
Retrieves a web link that has been moved to the trash.


```js
box.get_web_links_id_trash({
  "web_link_id": ""
}, context)
```

#### Input
* input `object`
  * web_link_id **required** `string`: The ID of the web link.
  * fields `array`: A comma-separated list of attributes to include in the

#### Output
* output [Folder](#folder)

### get_webhooks
Returns all defined webhooks for the requesting application.

This API only returns webhooks that are applied to files or folders that are
owned by the authenticated user. This means that an admin can not see webhooks
created by a service account unless the admin has access to those folders, and
vice versa.


```js
box.get_webhooks({}, context)
```

#### Input
* input `object`
  * marker `string`: Defines the position marker at which to begin returning results. This is
  * limit `integer`: The maximum number of items to return per page.

#### Output
* output [Webhooks](#webhooks)

### post_webhooks
Creates a webhook.


```js
box.post_webhooks({}, context)
```

#### Input
* input `object`
  * body `object`
    * address **required** `string`: The URL that is notified by this webhook
    * target **required** `object`: The item that will trigger the webhook
      * id `string`: The ID of the item to trigger a webhook
      * type `string` (values: file, folder): The type of item to trigger a webhook
    * triggers **required** `array`: An array of event names that this webhook is
      * items `string` (values: FILE.UPLOADED, FILE.PREVIEWED, FILE.DOWNLOADED, FILE.TRASHED, FILE.DELETED, FILE.RESTORED, FILE.COPIED, FILE.MOVED, FILE.LOCKED, FILE.UNLOCKED, FILE.RENAMED, COMMENT.CREATED, COMMENT.UPDATED, COMMENT.DELETED, TASK_ASSIGNMENT.CREATED, TASK_ASSIGNMENT.UPDATED, METADATA_INSTANCE.CREATED, METADATA_INSTANCE.UPDATED, METADATA_INSTANCE.DELETED, FOLDER.CREATED, FOLDER.RENAMED, FOLDER.DOWNLOADED, FOLDER.RESTORED, FOLDER.DELETED, FOLDER.COPIED, FOLDER.MOVED, FOLDER.TRASHED, WEBHOOK.DELETED, COLLABORATION.CREATED, COLLABORATION.ACCEPTED, COLLABORATION.REJECTED, COLLABORATION.REMOVED, COLLABORATION.UPDATED, SHARED_LINK.DELETED, SHARED_LINK.CREATED, SHARED_LINK.UPDATED): The event name that triggered this webhook

#### Output
* output [Webhook](#webhook)

### delete_webhooks_id
Deletes a webhook.


```js
box.delete_webhooks_id({
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `string`: The ID of the webhook.

#### Output
*Output schema unknown*

### get_webhooks_id
Retrieves a specific webhook


```js
box.get_webhooks_id({
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `string`: The ID of the webhook.

#### Output
* output [Webhook](#webhook)

### put_webhooks_id
Updates a webhook.


```js
box.put_webhooks_id({
  "webhook_id": ""
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `string`: The ID of the webhook.
  * body `object`
    * address `string`: The URL that is notified by this webhook
    * target `object`: The item that will trigger the webhook
      * id `string`: The ID of the item to trigger a webhook
      * type `string` (values: file, folder): The type of item to trigger a webhook
    * triggers `array`: An array of event names that this webhook is
      * items `string` (values: FILE.UPLOADED, FILE.PREVIEWED, FILE.DOWNLOADED, FILE.TRASHED, FILE.DELETED, FILE.RESTORED, FILE.COPIED, FILE.MOVED, FILE.LOCKED, FILE.UNLOCKED, FILE.RENAMED, COMMENT.CREATED, COMMENT.UPDATED, COMMENT.DELETED, TASK_ASSIGNMENT.CREATED, TASK_ASSIGNMENT.UPDATED, METADATA_INSTANCE.CREATED, METADATA_INSTANCE.UPDATED, METADATA_INSTANCE.DELETED, FOLDER.CREATED, FOLDER.RENAMED, FOLDER.DOWNLOADED, FOLDER.RESTORED, FOLDER.DELETED, FOLDER.COPIED, FOLDER.MOVED, FOLDER.TRASHED, WEBHOOK.DELETED, COLLABORATION.CREATED, COLLABORATION.ACCEPTED, COLLABORATION.REJECTED, COLLABORATION.REMOVED, COLLABORATION.UPDATED, SHARED_LINK.DELETED, SHARED_LINK.CREATED, SHARED_LINK.UPDATED): The event name that triggered this webhook

#### Output
* output [Webhook](#webhook)

### post_zip_downloads
Creates a request to download multiple files and folders as a single `zip`
archive file. This API does not return the archive but instead performs all
the checks to ensure that the user has access to all the items, and then
returns a `download_url` and a `status_url` that can be used to download the
archive.

The limit for an archive is either 32GB or 10,000 files, whichever
limitation is met first.


```js
box.post_zip_downloads({}, context)
```

#### Input
* input `object`
  * body [ZipDownloadRequest](#zipdownloadrequest)

#### Output
* output [ZipDownload](#zipdownload)

### get_zip_downloads_id_content
Returns the contents of a `zip` archive in binary format. This URL does not
require any form of authentication and could be used in a user's browser to
download the archive to a user's device.

By default, this URL is only valid for a few seconds from the creation of
the request for this archive. Once a download has started it can not be
stopped and resumed, instead a new request for a zip archive would need to
be created.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `download_url` field in the response to
this endpoint.


```js
box.get_zip_downloads_id_content({
  "zip_download_id": ""
}, context)
```

#### Input
* input `object`
  * zip_download_id **required** `string`: The unique identifier that represent this `zip` archive.

#### Output
* output `string`: The binary content of the archive, which will include the items

### get_zip_downloads_id_status
Returns the download status of a `zip` archive, allowing an application to
inspect the progress of the download as well as the number of items that
might have been skipped.

This endpoint can only be accessed once the download has started.
Subsequently this endpoint is valid for 12 hours from the start of the
download.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `status_url` field in the response to
this endpoint.


```js
box.get_zip_downloads_id_status({
  "zip_download_id": ""
}, context)
```

#### Input
* input `object`
  * zip_download_id **required** `string`: The unique identifier that represent this `zip` archive.

#### Output
* output [ZipDownloadStatus](#zipdownloadstatus)



## Definitions

### AccessToken
* Access token `object`: A token that can be used to make authenticated API calls.
  * access_token `string`: The requested access token.
  * expires_in `integer`: The time in seconds in seconds by which this token will expire.
  * issued_token_type `string` (values: urn:ietf:params:oauth:token-type:access_token): The type of downscoped access token returned. This is only
  * refresh_token `string`: The refresh token for this access token, which can be used
  * restricted_to `array`: The permissions that this access token permits,
    * items [FileScope](#filescope)
  * token_type `string` (values: bearer): The type of access token returned.

### Classification
* Classification `object`: An instance of the classification metadata template, containing
  * $canEdit `boolean`: Whether an end user can change the classification.
  * $parent `string`: The identifier of the item that this metadata instance
  * $scope `string`: The scope of the enterprise that this classification has been
  * $template `string` (values: securityClassification-6VMVochwUWo): `securityClassification-6VMVochwUWo`
  * $type `string`: The unique ID of this classification instance. This will be include
  * $typeVersion `number`: The version of the metadata template. This version starts at 0 and
  * $version `integer`: The version of the metadata instance. This version starts at 0 and
  * Box__Security__Classification__Key `string`: The name of the classification applied to the item.

### ClassificationTemplate
* Classification Template `object`: A metadata template that holds the security classifications
  * copyInstanceOnItemCopy `boolean`: Classifications are always copied along when the file or folder is
  * displayName `string` (values: Classification): The name of this template as shown in web and mobile interfaces.
  * fields `array`: A list of fields for this classification template. This includes
    * items `object`: The metadata template field that represents the available
      * displayName `string` (values: Classification): `Classification`
      * hidden `boolean`: Classifications are always visible to web and mobile users.
      * id `string`: The unique ID of the field.
      * key `string` (values: Box__Security__Classification__Key): `Box__Security__Classification__Key`
      * options `array`: A list of classifications available in this enterprise.
        * items `object`: A single classification available in this enterprise.
          * id `string`: The unique ID of this classification.
          * key `string`: The display name and key for this classification.
          * staticConfig `object`: Additional information about the classification.
      * type `string` (values: enum): `enum`
  * hidden `boolean`: This template is always available in web and mobile interfaces.
  * id `string`: The ID of the classification template.
  * scope `string`: The scope of the classification template. This is in the format
  * templateKey `string` (values: securityClassification-6VMVochwUWo): `securityClassification-6VMVochwUWo`
  * type `string` (values: metadata_template): `metadata_template`

### ClientError
* Client error `object`: A generic error
  * code `string` (values: created, accepted, no_content, redirect, not_modified, bad_request, unauthorized, forbidden, not_found, method_not_allowed, conflict, precondition_failed, too_many_requests, internal_server_error, unavailable, item_name_invalid): A Box-specific error code
  * help_url `string`: A URL that links to more information about why this error occurred.
  * message `string`: A short message describing the error.
  * request_id `string`: A unique identifier for this response, which can be used
  * status `integer`: The HTTP status of the response.
  * type `string` (values: error): `error`

### Collaboration
* Collaboration `object`: Collaborations define access permissions for users and groups to files and
  * acceptance_requirements_status `object`
    * strong_password_requirement `object`
      * enterprise_has_strong_password_required_for_external_users `boolean`: Whether or not the enterprise that owns the content requires
      * user_has_strong_password `boolean`: Whether or not the user has a strong password set for their
    * terms_of_service_requirement `object`
      * is_accepted `boolean`: Whether or not the terms of service have been accepted.  The
      * terms_of_service
        * id `string`: The unique identifier for this terms of service.
        * type `string` (values: terms_of_service): `terms_of_service`
    * two_factor_authentication_requirement `object`
      * enterprise_has_two_factor_auth_enabled `boolean`: Whether or not the enterprise that owns the content requires
      * user_has_two_factor_authentication_enabled `boolean`: Whether or not the user has two-factor authentication
  * accessible_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * acknowledged_at `string`: When the `status` of the collaboration object changed to
  * created_at `string`: When the collaboration object was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * expires_at `string`: When the collaboration will expire, or `null` if no expiration
  * id `string`: The unique identifier for this collaboration.
  * invite_email `string`: The email address used to invite an unregistered collaborator, if
  * item
  * modified_at `string`: When the collaboration object was last modified
  * role `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner, owner): The level of access granted.
  * status `string` (values: accepted, pending, rejected): The status of the collaboration invitation.
  * type `string` (values: collaboration): `collaboration`

### CollaborationAllowlistEntries
* Allowed collaboration domains `object`: A list of allowed domains for collaboration.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [CollaborationAllowlistEntry](#collaborationallowlistentry)

### CollaborationAllowlistEntry
* Allowed collaboration domain `object`: An entry that describes an approved domain for which users can collaborate
  * created_at `string`: The time the entry was created at
  * direction `string` (values: inbound, outbound, both): The direction of the collaborations to allow.
  * domain `string`: The whitelisted domain
  * enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * id `string`: The unique identifier for this entry
  * type `string` (values: collaboration_whitelist_entry): `collaboration_whitelist_entry`

### CollaborationAllowlistExemptTarget
* Allowed collaboration domains user exemption `object`: The user that is exempt from any of the restrictions
  * created_at `string`: The time the entry was created
  * enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * id `string`: The unique identifier for this exemption
  * modified_at `string`: The time the entry was modified
  * type `string` (values: collaboration_whitelist): `collaboration_whitelist`
  * user
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`

### CollaborationAllowlistExemptTargets
* Allowed collaboration domains user exemptions `object`: A list of users that is exempt from any of the restrictions
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [CollaborationAllowlistExemptTarget](#collaborationallowlistexempttarget)

### Collaborations
* Collaborations `object`: A list of collaborations
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [Collaboration](#collaboration)

### Collection
* Collection `object`: A collection of items, including files and folders.
  * collection_type `string` (values: favorites): The type of the collection. This is used to
  * id `string`: The unique identifier for this collection.
  * name `string` (values: Favorites): The name of the collection.
  * type `string` (values: collection): `collection`

### Collections
* Collections `object`: A list of collections
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [Collection](#collection)

### Comment
* Comment `object`: Standard representation of a comment.
  * id `string`: The unique identifier for this comment.
  * type `string` (values: comment): `comment`
  * created_at `string`: The time this comment was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * is_reply_comment `boolean`: Whether or not this comment is a reply to another
  * item
    * id `string`: The unique identifier for this object
    * type `string`: The type for this object
  * message `string`: The text of the comment, as provided by the user
  * modified_at `string`: The time this comment was last modified

### Comment--Base
* Comment (Base) `object`: Base representation of a comment.
  * id `string`: The unique identifier for this comment.
  * type `string` (values: comment): `comment`

### Comment--Full
* Comment (Full) `object`: Comments are messages created on files. Comments
  * id `string`: The unique identifier for this comment.
  * type `string` (values: comment): `comment`
  * created_at `string`: The time this comment was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * is_reply_comment `boolean`: Whether or not this comment is a reply to another
  * item
    * id `string`: The unique identifier for this object
    * type `string`: The type for this object
  * message `string`: The text of the comment, as provided by the user
  * modified_at `string`: The time this comment was last modified
  * tagged_message `string`: The string representing the comment text with

### Comments
* Comments `object`: A list of comments
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [Comment](#comment)

### ConflictError
* Conflict error `object`: The error that occurs when a file can not be created due
  * code `string` (values: created, accepted, no_content, redirect, not_modified, bad_request, unauthorized, forbidden, not_found, method_not_allowed, conflict, precondition_failed, too_many_requests, internal_server_error, unavailable, item_name_invalid): A Box-specific error code
  * help_url `string`: A URL that links to more information about why this error occurred.
  * message `string`: A short message describing the error.
  * request_id `string`: A unique identifier for this response, which can be used
  * status `integer`: The HTTP status of the response.
  * type `string` (values: error): `error`
  * context_info `object`
    * conflicts `array`: A list of the file conflicts that caused this error.
      * items [FileConflict](#fileconflict)

### DevicePinner
* Device pinner `object`: Device pins allow enterprises to control what devices can
  * created_at `string`: The time the device pin was created
  * id `string`: The unique identifier for this device pin.
  * modified_at `string`: The time the device pin was modified
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * product_name `string`: The type of device being pinned
  * type `string` (values: device_pinner): `device_pinner`

### DevicePinners
* Device pinners `object`: A list of device pins
  * entries `array`
    * items [DevicePinner](#devicepinner)
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string` (values: id): The field that is ordered by
      * direction `string` (values: asc, desc): The direction to order by, either ascending or descending

### EmailAlias
* Email alias `object`: An email alias for a user.
  * email `string`: The email address
  * id `string`: The unique identifier for this object
  * is_confirmed `boolean`: Whether the email address has been confirmed
  * type `string` (values: email_alias): `email_alias`

### EmailAliases
* Email aliases `object`: A list of email aliases
  * entries `array`
    * items [EmailAlias](#emailalias)
  * total_count `integer`: The number of email aliases.

### Event
* Event `object`: The description of an event that happened within Box
  * additional_details `object`: This object provides additional information about the event if available.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * event_id `string`: The ID of the event object. You can use this to detect duplicate events
  * event_type
  * session_id `string`: The session of the user that performed the action. Not all events will
  * source
  * type `string`: `event`

### EventSource
* Event source `object`: The source file or folder that triggered an event in
  * item_id `string`: The unique identifier that represents the
  * item_name `string`: The name of the item.
  * item_type `string` (values: file, folder): The type of the item that the event
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id

### Events
* Events `object`: A list of event objects
  * chunk_size `integer`: The number of events returned in this response.
  * entries `array`
    * items [Event](#event)
  * next_stream_position `string`: The stream position of the start of the next page (chunk)

### File
* File `object`: A standard representation of a file, as returned from any
  * etag `string`: The HTTP `etag` of this file. This can be used within some API
  * id `string`: The unique identifier that represent a file.
  * type `string` (values: file): `file`
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * name `string`: The name of the file
  * sequence_id
  * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * content_created_at `string`: The date and time at which this file was originally
  * content_modified_at `string`: The date and time at which this file was last updated,
  * created_at `string`: The date and time when the file was created on Box.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description `string`: The optional description of this file
  * item_status `string` (values: active, trashed, deleted): Defines if this item has been deleted or not.
  * modified_at `string`: The date and time when the file was last updated on Box.
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * path_collection
    * entries `array`: The parent folders for this item
      * items [Folder--Mini](#folder--mini)
    * total_count `integer`: The number of folders in this list.
  * purged_at `string`: The time at which this file is expected to be purged
  * shared_link
    * access `string` (values: open, company, collaborators): The access level for this shared link.
    * download_count `integer`: The number of times this item has been downloaded.
    * download_url `string`: A URL that can be used to download the file. This URL can be used in
    * effective_access `string` (values: open, company, collaborators): The effective access level for the shared link. This can be a more
    * effective_permission `string` (values: can_download, can_preview): The effective permissions for this shared link.
    * is_password_enabled `boolean`: Defines if the shared link requires a password to access the item.
    * permissions `object`: Defines if this link allows a user to preview and download an item.
      * can_download `boolean`: Defines if the shared link allows for the item to be downloaded. For
      * can_preview `boolean`: Defines if the shared link allows for the item to be previewed.
    * preview_count `integer`: The number of times this item has been previewed.
    * unshared_at `string`: The date and time when this link will be unshared. This field can only be
    * url `string`: The URL that can be used to access the item on Box.
    * vanity_name `string`: The custom name of a shared link, as used in the `vanity_url` field.
    * vanity_url `string`: The "Custom URL" that can also be used to preview the item on Box.  Custom
  * size `integer`: The file size in bytes. Be careful parsing this integer as it can
  * trashed_at `string`: The time at which this file was put in the trash.

### File--Base
* File (Base) `object`: The bare basic representation of a file, the minimal
  * etag `string`: The HTTP `etag` of this file. This can be used within some API
  * id `string`: The unique identifier that represent a file.
  * type `string` (values: file): `file`

### File--Full
* File (Full) `object`: A full representation of a file, as can be returned from any
  * etag `string`: The HTTP `etag` of this file. This can be used within some API
  * id `string`: The unique identifier that represent a file.
  * type `string` (values: file): `file`
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * name `string`: The name of the file
  * sequence_id
  * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * content_created_at `string`: The date and time at which this file was originally
  * content_modified_at `string`: The date and time at which this file was last updated,
  * created_at `string`: The date and time when the file was created on Box.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description `string`: The optional description of this file
  * item_status `string` (values: active, trashed, deleted): Defines if this item has been deleted or not.
  * modified_at `string`: The date and time when the file was last updated on Box.
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * path_collection
    * entries `array`: The parent folders for this item
      * items [Folder--Mini](#folder--mini)
    * total_count `integer`: The number of folders in this list.
  * purged_at `string`: The time at which this file is expected to be purged
  * shared_link
    * access `string` (values: open, company, collaborators): The access level for this shared link.
    * download_count `integer`: The number of times this item has been downloaded.
    * download_url `string`: A URL that can be used to download the file. This URL can be used in
    * effective_access `string` (values: open, company, collaborators): The effective access level for the shared link. This can be a more
    * effective_permission `string` (values: can_download, can_preview): The effective permissions for this shared link.
    * is_password_enabled `boolean`: Defines if the shared link requires a password to access the item.
    * permissions `object`: Defines if this link allows a user to preview and download an item.
      * can_download `boolean`: Defines if the shared link allows for the item to be downloaded. For
      * can_preview `boolean`: Defines if the shared link allows for the item to be previewed.
    * preview_count `integer`: The number of times this item has been previewed.
    * unshared_at `string`: The date and time when this link will be unshared. This field can only be
    * url `string`: The URL that can be used to access the item on Box.
    * vanity_name `string`: The custom name of a shared link, as used in the `vanity_url` field.
    * vanity_url `string`: The "Custom URL" that can also be used to preview the item on Box.  Custom
  * size `integer`: The file size in bytes. Be careful parsing this integer as it can
  * trashed_at `string`: The time at which this file was put in the trash.
  * tags
    * items `string`
  * allowed_invitee_roles `array`: A list of the types of roles that user can be invited at
    * items `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner)
  * classification
    * color `string`: The color that is used to display the
    * definition `string`: An explanation of the meaning of this classification.
    * name `string`: The name of the classification
  * comment_count `integer`: The number of comments on this file
  * expires_at `string`: When the file will automatically be deleted
  * expiring_embed_link
    * access_token `string`: The requested access token.
    * expires_in `integer`: The time in seconds in seconds by which this token will expire.
    * restricted_to `array`: The permissions that this access token permits,
      * items [FileScope](#filescope)
    * token_type `string` (values: bearer): The type of access token returned.
    * url `string`: The actual expiring embed URL for this file, constructed
  * extension `string`: Indicates the (optional) file extension for this file. By default,
  * has_collaborations `boolean`: Specifies if this file has any other collaborators.
  * is_externally_owned `boolean`: Specifies if this file is owned by a user outside of the
  * is_package `boolean`: Indicates if the file is a package. Packages are commonly used
  * lock
    * created_at `string`: The time this lock was created at.
    * created_by
      * id `string`: The unique identifier for this user
      * type `string` (values: user): `user`
      * login `string`: The primary email address of this user
      * name `string`: The display name of this user
    * expired_at `string`: The time this lock is to expire at, which might be in the past.
    * id `string`: The unique identifier for this lock
    * is_download_prevented `boolean`: Whether or not the file can be downloaded while locked.
    * type `string` (values: lock): `lock`
  * metadata
  * permissions
    * can_delete `boolean`: Specifies if the current user can delete this item.
    * can_download `boolean`: Specifies if the current user can download this item.
    * can_invite_collaborator `boolean`: Specifies if the current user can invite new
    * can_rename `boolean`: Specifies if the user can rename this item.
    * can_set_share_access `boolean`: Specifies if the user can change the access level of an
    * can_share `boolean`: Specifies if the user can create a shared link for this item.
    * can_annotate `boolean`: Specifies if the user can place annotations on this file.
    * can_comment `boolean`: Specifies if the user can place comments on this file.
    * can_preview `boolean`: Specifies if the user can preview this file.
    * can_upload `boolean`: Specifies if the user can upload a new version of this file.
    * can_view_annotations_all `boolean`: Specifies if the user view all annotations placed on this file
    * can_view_annotations_self `boolean`: Specifies if the user view annotations placed by themselves
  * representations
    * entries `array`: A list of files
      * items `object`: A file representation
        * info `object`: An object containing the URL that can be used to fetch more info
          * url `string`: The API URL that can be used to get more info on this file
        * content `object`: An object containing the URL that can be used to actually fetch
          * url_template `string`: The download URL that can be used to fetch the representation.
        * properties `object`: An object containing the size and type of this presentation.
          * dimensions `string`: The width by height size of this representation in pixels.
          * paged `boolean`: Indicates if the representation is build up out of multiple
          * thumb `boolean`: Indicates if the representation can be used as a thumbnail of
        * representation `string`: Indicates the file type of the returned representation.
        * status `object`: An object containing the status of this representation.
          * state `string` (values: success, viewable, pending, none): The status of the representation.
  * uploader_display_name
  * version_number `string`: The version number of this file
  * watermark_info
    * is_watermarked `boolean`: Specifies if this item has a watermark applied.

### File--Mini
* File (Mini) `object`: A mini representation of a file, used when
  * etag `string`: The HTTP `etag` of this file. This can be used within some API
  * id `string`: The unique identifier that represent a file.
  * type `string` (values: file): `file`
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * name `string`: The name of the file
  * sequence_id
  * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents

### FileConflict
* File (Conflict) `object`: A representation of a file that is used to show
  * etag `string`: The HTTP `etag` of this file. This can be used within some API
  * id `string`: The unique identifier that represent a file.
  * type `string` (values: file): `file`
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * name `string`: The name of the file
  * sequence_id
  * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * file_version [FileVersion--Mini](#fileversion--mini)
  * sha1 `string`: The SHA1 hash of the file.

### FileRequest
* File Request `object`: A standard representation of a file request, as returned
  * created_at `string`: The date and time when the file request was created.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description `string`: The optional description of this file request. This is
  * etag `string`: The HTTP `etag` of this file. This can be used in combination with
  * expires_at `string`: The date after which a file request will no longer accept new
  * folder
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * id `string`: The unique identifier for this file request.
  * is_description_required `boolean`: Whether a file request submitter is required to provide
  * is_email_required `boolean`: Whether a file request submitter is required to provide
  * status `string` (values: active, inactive): The status of the file request. This defaults
  * title `string`: The title of file request. This is shown
  * type `string` (values: file-request): `file-request`
  * updated_at `string`: The date and time when the file request was last updated.
  * updated_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * url `string`: The generated URL for this file request. This URL can be shared

### FileRequestCopyRequest
* File Request (Copy) `object`: The request body to copy a file request.
  * description `string`: An optional new description for the file request. This can be
  * expires_at `string`: The date after which a file request will no longer accept new
  * is_description_required `boolean`: Whether a file request submitter is required to provide
  * is_email_required `boolean`: Whether a file request submitter is required to provide
  * status `string` (values: active, inactive): An optional new status of the file request.
  * title `string`: An optional new title for the file request. This can be
  * folder `object`: The folder to associate the new file request to.
    * id **required** `string`: The ID of the folder to associate the new
    * type `string` (values: folder): `folder`

### FileRequestUpdateRequest
* File Request (Update) `object`: The request body to update a file request.
  * description `string`: An optional new description for the file request. This can be
  * expires_at `string`: The date after which a file request will no longer accept new
  * is_description_required `boolean`: Whether a file request submitter is required to provide
  * is_email_required `boolean`: Whether a file request submitter is required to provide
  * status `string` (values: active, inactive): An optional new status of the file request.
  * title `string`: An optional new title for the file request. This can be

### FileScope
* File scope `object`: A relation between a file and the scopes for which the file can be accessed
  * object
    * etag `string`: The HTTP `etag` of this file. This can be used within some API
    * id `string`: The unique identifier that represent a file.
    * type `string` (values: file): `file`
    * file_version
      * id `string`: The unique identifier that represent a file version.
      * type `string` (values: file_version): `file_version`
      * sha1 `string`: The SHA1 hash of this version of the file.
    * name `string`: The name of the file
    * sequence_id
    * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * scope `string` (values: annotation_edit, annotation_view_all, annotation_view_self, base_explorer, base_picker, base_preview, base_upload, item_delete, item_download, item_preview, item_rename, item_share): The file scopes for the file access

### FileVersion
* File version `object`: A standard representation of a file version
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`
  * sha1 `string`: The SHA1 hash of this version of the file.
  * created_at `string`: When the file version object was created
  * modified_at `string`: When the file version object was last updated
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * name `string`: The name of the file version
  * purged_at `string`: When the file version object will be permanently deleted.
  * restored_at `string`: When the file version was restored from the trash.
  * restored_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * size `integer`: Size of the file version in bytes
  * trashed_at `string`: When the file version object was trashed.
  * trashed_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * uploader_display_name

### FileVersion--Base
* File version (Base) `object`: The bare basic representation of a file version, the minimal
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`

### FileVersion--Mini
* File version (Mini) `object`: A mini representation of a file version, used when
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`
  * sha1 `string`: The SHA1 hash of this version of the file.

### FileVersionLegalHold
* File version legal hold `object`: File-Version-Legal-Hold is an entity representing all
  * deleted_at `string`: Time that this File-Version-Legal-Hold was
  * file
    * etag `string`: The HTTP `etag` of this file. This can be used within some API
    * id `string`: The unique identifier that represent a file.
    * type `string` (values: file): `file`
    * file_version
      * id `string`: The unique identifier that represent a file version.
      * type `string` (values: file_version): `file_version`
      * sha1 `string`: The SHA1 hash of this version of the file.
    * name `string`: The name of the file
    * sequence_id
    * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * id `string`: The unique identifier for this file version legal hold
  * legal_hold_policy_assignments `array`: List of assignments contributing to this Hold.
    * items [LegalHoldPolicyAssignment](#legalholdpolicyassignment)
  * type `string` (values: file_version_legal_hold): `file_version_legal_hold`

### FileVersionLegalHolds
* File version legal holds `object`: A list of file version legal holds.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [FileVersionLegalHold](#fileversionlegalhold)

### FileVersionRetention
* File version retention `object`: A retention policy blocks permanent deletion of content
  * applied_at `string`: When this file version retention object was
  * disposition_at `string`: When the retention expires on this file
  * file
    * etag `string`: The HTTP `etag` of this file. This can be used within some API
    * id `string`: The unique identifier that represent a file.
    * type `string` (values: file): `file`
    * file_version
      * id `string`: The unique identifier that represent a file version.
      * type `string` (values: file_version): `file_version`
      * sha1 `string`: The SHA1 hash of this version of the file.
    * name `string`: The name of the file
    * sequence_id
    * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * file_version
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * sha1 `string`: The SHA1 hash of this version of the file.
  * id `string`: The unique identifier for this file version retention.
  * type `string` (values: file_version_retention): `file_version_retention`
  * winning_retention_policy
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
    * policy_name `string`: The name given to the retention policy
    * retention_length `string`: The length of the retention policy. This length

### FileVersionRetentions
* File version retentions `object`: A list of file version retentions.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [FileVersionRetention](#fileversionretention)

### FileVersions
* File versions `object`: A list of file versions
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [FileVersion](#fileversion)

### Files
* Files `object`: A list of files
  * entries `array`: A list of files
    * items [File](#file)
  * total_count `integer`: The number of files.

### Folder
* Folder `object`: A standard representation of a folder, as returned from any
  * etag `string`: The HTTP `etag` of this folder. This can be used within some API
  * id `string`: The unique identifier that represent a folder.
  * type `string` (values: folder): `folder`
  * name `string`: The name of the folder.
  * sequence_id
  * content_created_at `string`: The date and time at which this folder was originally
  * content_modified_at `string`: The date and time at which this folder was last updated.
  * created_at `string`: The date and time when the folder was created. This value may
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description
  * expires_at `string`: The time and which the folder will be automatically be deleted.
  * folder_upload_email `object`
    * access `string` (values: open, collaborators): When this parameter has been set, users can email files
    * email `string`: The optional upload email address for this folder.
  * item_collection
    * limit `integer`: The limit that was used for these entries. This will be the same as the
    * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
    * order `array`: The order by which items are returned.
      * items `object`: The order in which a pagination is ordered
        * by `string`: The field to order by
        * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
    * total_count `integer`: One greater than the offset of the last entry in the entire collection.
    * entries `array`: The items in this collection.
  * item_status `string` (values: active, trashed, deleted): Defines if this item has been deleted or not.
  * modified_at `string`: The date and time when the folder was last updated. This value may
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * path_collection
    * entries `array`: The parent folders for this item
      * items [Folder--Mini](#folder--mini)
    * total_count `integer`: The number of folders in this list.
  * purged_at `string`: The time at which this folder is expected to be purged
  * shared_link
    * access `string` (values: open, company, collaborators): The access level for this shared link.
    * download_count `integer`: The number of times this item has been downloaded.
    * download_url `string`: A URL that can be used to download the file. This URL can be used in
    * effective_access `string` (values: open, company, collaborators): The effective access level for the shared link. This can be a more
    * effective_permission `string` (values: can_download, can_preview): The effective permissions for this shared link.
    * is_password_enabled `boolean`: Defines if the shared link requires a password to access the item.
    * permissions `object`: Defines if this link allows a user to preview and download an item.
      * can_download `boolean`: Defines if the shared link allows for the item to be downloaded. For
      * can_preview `boolean`: Defines if the shared link allows for the item to be previewed.
    * preview_count `integer`: The number of times this item has been previewed.
    * unshared_at `string`: The date and time when this link will be unshared. This field can only be
    * url `string`: The URL that can be used to access the item on Box.
    * vanity_name `string`: The custom name of a shared link, as used in the `vanity_url` field.
    * vanity_url `string`: The "Custom URL" that can also be used to preview the item on Box.  Custom
  * size `integer`: The folder size in bytes.
  * trashed_at `string`: The time at which this folder was put in the trash.

### Folder--Base
* Folder (Base) `object`: The bare basic representation of a folder, the minimal
  * etag `string`: The HTTP `etag` of this folder. This can be used within some API
  * id `string`: The unique identifier that represent a folder.
  * type `string` (values: folder): `folder`

### Folder--Full
* Folder (Full) `object`: A full representation of a folder, as can be returned from any
  * etag `string`: The HTTP `etag` of this folder. This can be used within some API
  * id `string`: The unique identifier that represent a folder.
  * type `string` (values: folder): `folder`
  * name `string`: The name of the folder.
  * sequence_id
  * content_created_at `string`: The date and time at which this folder was originally
  * content_modified_at `string`: The date and time at which this folder was last updated.
  * created_at `string`: The date and time when the folder was created. This value may
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description
  * expires_at `string`: The time and which the folder will be automatically be deleted.
  * folder_upload_email `object`
    * access `string` (values: open, collaborators): When this parameter has been set, users can email files
    * email `string`: The optional upload email address for this folder.
  * item_collection
    * limit `integer`: The limit that was used for these entries. This will be the same as the
    * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
    * order `array`: The order by which items are returned.
      * items `object`: The order in which a pagination is ordered
        * by `string`: The field to order by
        * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
    * total_count `integer`: One greater than the offset of the last entry in the entire collection.
    * entries `array`: The items in this collection.
  * item_status `string` (values: active, trashed, deleted): Defines if this item has been deleted or not.
  * modified_at `string`: The date and time when the folder was last updated. This value may
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * path_collection
    * entries `array`: The parent folders for this item
      * items [Folder--Mini](#folder--mini)
    * total_count `integer`: The number of folders in this list.
  * purged_at `string`: The time at which this folder is expected to be purged
  * shared_link
    * access `string` (values: open, company, collaborators): The access level for this shared link.
    * download_count `integer`: The number of times this item has been downloaded.
    * download_url `string`: A URL that can be used to download the file. This URL can be used in
    * effective_access `string` (values: open, company, collaborators): The effective access level for the shared link. This can be a more
    * effective_permission `string` (values: can_download, can_preview): The effective permissions for this shared link.
    * is_password_enabled `boolean`: Defines if the shared link requires a password to access the item.
    * permissions `object`: Defines if this link allows a user to preview and download an item.
      * can_download `boolean`: Defines if the shared link allows for the item to be downloaded. For
      * can_preview `boolean`: Defines if the shared link allows for the item to be previewed.
    * preview_count `integer`: The number of times this item has been previewed.
    * unshared_at `string`: The date and time when this link will be unshared. This field can only be
    * url `string`: The URL that can be used to access the item on Box.
    * vanity_name `string`: The custom name of a shared link, as used in the `vanity_url` field.
    * vanity_url `string`: The "Custom URL" that can also be used to preview the item on Box.  Custom
  * size `integer`: The folder size in bytes.
  * trashed_at `string`: The time at which this folder was put in the trash.
  * tags
    * items `string`
  * allowed_invitee_roles `array`: A list of the types of roles that user can be invited at
    * items `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner)
  * allowed_shared_link_access_levels `array`: A list of access levels that are available
    * items `string` (values: open, company, collaborators)
  * can_non_owners_invite
  * can_non_owners_view_collaborators `boolean`: Specifies if collaborators who are not owners
  * classification
    * color `string`: The color that is used to display the
    * definition `string`: An explanation of the meaning of this classification.
    * name `string`: The name of the classification
  * has_collaborations `boolean`: Specifies if this folder has any other collaborators.
  * is_collaboration_restricted_to_enterprise
  * is_externally_owned `boolean`: Specifies if this folder is owned by a user outside of the
  * metadata
  * permissions
    * can_delete `boolean`: Specifies if the current user can delete this item.
    * can_download `boolean`: Specifies if the current user can download this item.
    * can_invite_collaborator `boolean`: Specifies if the current user can invite new
    * can_rename `boolean`: Specifies if the user can rename this item.
    * can_set_share_access `boolean`: Specifies if the user can change the access level of an
    * can_share `boolean`: Specifies if the user can create a shared link for this item.
    * can_upload `boolean`: Specifies if the user can upload into this folder.
  * sync_state
  * watermark_info
    * is_watermarked `boolean`: Specifies if this item has a watermark applied.

### Folder--Mini
* Folder (Mini) `object`: A mini representation of a file version, used when
  * etag `string`: The HTTP `etag` of this folder. This can be used within some API
  * id `string`: The unique identifier that represent a folder.
  * type `string` (values: folder): `folder`
  * name `string`: The name of the folder.
  * sequence_id

### FolderLock
* Folder Lock `object`: Folder locks define access restrictions placed by folder owners
  * created_at `string`: When the folder lock object was created.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
  * folder
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * id `string`: The unique identifier for this folder lock.
  * lock_type `string`: The lock type, always `freeze`.
  * locked_operations `object`: The operations that have been locked. Currently the `move`
    * delete `boolean`: Whether deleting the folder is restricted.
    * move `boolean`: Whether moving the folder is restricted.
  * type `string`: The object type, always `folder_lock`.

### FolderLocks
* Folder Locks `object`: A list of folder locks
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [FolderLock](#folderlock)

### Group
* Group `object`: A standard representation of a group, as returned from any
  * id `string`: The unique identifier for this object
  * type `string` (values: group): `group`
  * group_type `string` (values: managed_group, all_users_group): The type of the group.
  * name `string`: The name of the group
  * created_at `string`: When the group object was created
  * modified_at `string`: When the group object was last modified

### Group--Base
* Group (Base) `object`: A base representation of a group.
  * id `string`: The unique identifier for this object
  * type `string` (values: group): `group`

### Group--Full
* Group `object`: Groups contain a set of users, and can be used in place of
  * id `string`: The unique identifier for this object
  * type `string` (values: group): `group`
  * group_type `string` (values: managed_group, all_users_group): The type of the group.
  * name `string`: The name of the group
  * created_at `string`: When the group object was created
  * modified_at `string`: When the group object was last modified
  * description `string`: Human readable description of the group.
  * external_sync_identifier `string`: An arbitrary identifier that can be used by
  * invitability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can invite the group to collaborate
  * member_viewability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can view the members of the group
  * permissions
    * can_invite_as_collaborator `boolean`: Specifies if the user can invite the group to collaborate on any items.
  * provenance `string`: Keeps track of which external source this group is

### Group--Mini
* Group (Mini) `object`: Mini representation of a group, including id and name of
  * id `string`: The unique identifier for this object
  * type `string` (values: group): `group`
  * group_type `string` (values: managed_group, all_users_group): The type of the group.
  * name `string`: The name of the group

### GroupMembership
* Group membership `object`: Membership is used to signify that a user is part of a
  * created_at `string`: The time this membership was created.
  * group
    * id `string`: The unique identifier for this object
    * type `string` (values: group): `group`
    * group_type `string` (values: managed_group, all_users_group): The type of the group.
    * name `string`: The name of the group
  * id `string`: The unique identifier for this group membership
  * modified_at `string`: The time this membership was last modified.
  * role `string` (values: member, admin): The role of the user in the group.
  * type `string` (values: group_membership): `group_membership`
  * user
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user

### GroupMemberships
* Group memberships `object`: A list of group memberships.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [GroupMembership](#groupmembership)

### Groups
* Groups `object`: A list of groups.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [Group--Mini](#group--mini)

### Invite
* Invite `object`: An invite for a user to an enterprise.
  * actionable_by [User--Mini](#user--mini)
  * created_at `string`: When the invite was created
  * id `string`: The unique identifier for this invite
  * invited_by [User--Mini](#user--mini)
  * invited_to `object`: A representation of a Box enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * modified_at `string`: When the invite was modified.
  * status `string`: The status of the invite
  * type `string` (values: invite): `invite`

### Items
* Items `object`: A list of files, folders, and web links in
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`: The items in this collection.

### KeywordSkillCard
* Keyword Skill Card `object`: A skill card that contains a set of keywords
  * created_at `string`: The optional date and time this card was created at.
  * entries **required** `array`: An list of entries in the metadata card.
    * items `object`: An entry in the `entries` attribute of a metadata card
      * text `string`: The text of the keyword.
  * invocation **required** `object`: The invocation of this service, used to track
    * id **required** `string`: A custom identifier that represent the instance of
    * type **required** `string` (values: skill_invocation): `skill_invocation`
  * skill **required** `object`: The service that applied this metadata.
    * id **required** `string`: A custom identifier that represent the service that
    * type **required** `string` (values: service): `service`
  * skill_card_title `object`: The title of the card.
    * code `string`: An optional identifier for the title.
    * message **required** `string`: The actual title to show in the UI.
  * skill_card_type **required** `string` (values: keyword): `keyword`
  * type **required** `string` (values: skill_card): `skill_card`

### LegalHoldPolicies
* Legal hold policies `object`: A list of legal hold policies.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [LegalHoldPolicy](#legalholdpolicy)

### LegalHoldPolicy
* Legal hold policy `object`: Legal Hold Policy information describes the basic
  * id `string`: The unique identifier for this legal hold policy
  * type `string` (values: legal_hold_policy): `legal_hold_policy`
  * assignment_counts `object`: Counts of assignments within this a legal hold policy by item type
    * file `integer`: The number of files this policy is applied to
    * file_version `integer`: The number of file versions this policy is applied to
    * folder `integer`: The number of folders this policy is applied to
    * user `integer`: The number of users this policy is applied to
  * created_at `string`: When the legal hold policy object was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * deleted_at `string`: When the policy release request was sent. (Because
  * description `string`: Description of the legal hold policy. Optional
  * filter_ended_at `string`: User-specified, optional date filter applies to
  * filter_started_at `string`: User-specified, optional date filter applies to
  * modified_at `string`: When the legal hold policy object was modified.
  * policy_name `string`: Name of the legal hold policy.
  * release_notes `string`: Optional notes about why the policy was created.
  * status `string` (values: active, applying, releasing, released): * 'active' - the policy is not in a transition state

### LegalHoldPolicy--Mini
* Legal hold policy (Mini) `object`: A mini legal hold policy
  * id `string`: The unique identifier for this legal hold policy
  * type `string` (values: legal_hold_policy): `legal_hold_policy`

### LegalHoldPolicyAssignment
* Legal hold policy assignment `object`: Legal Hold Assignments are used to assign Legal Hold
  * id `string`: The unique identifier for this legal hold assignment
  * type `string` (values: legal_hold_policy_assignment): `legal_hold_policy_assignment`
  * assigned_at `string`: When the legal hold policy assignment object was
  * assigned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * assigned_to
  * deleted_at `string`: When the assignment release request was sent.
  * legal_hold_policy
    * id `string`: The unique identifier for this legal hold policy
    * type `string` (values: legal_hold_policy): `legal_hold_policy`

### LegalHoldPolicyAssignment--Base
* Legal hold policy assignment (Base) `object`: Legal Hold Assignments are used to assign Legal Hold
  * id `string`: The unique identifier for this legal hold assignment
  * type `string` (values: legal_hold_policy_assignment): `legal_hold_policy_assignment`

### LegalHoldPolicyAssignments
* Legal hold policy assignments `object`: A list of legal hold policies assignments.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [LegalHoldPolicyAssignment--Base](#legalholdpolicyassignment--base)

### Metadata
* Metadata instance `object`: An instance of a metadata template, which has been applied to a file or
  * $parent `string`: The identifier of the item that this metadata instance
  * $scope `string`: An ID for the scope in which this template
  * $template `string`: The name of the template
  * $version `integer`: The version of the metadata instance. This version starts at 0 and

### Metadata--Base
* Metadata instance (Base) `object`: The base representation of a metadata instance.
  * $parent `string`: The identifier of the item that this metadata instance
  * $scope `string`: An ID for the scope in which this template
  * $template `string`: The name of the template
  * $version `integer`: The version of the metadata instance. This version starts at 0 and

### Metadata--Full
* Metadata instance (Full) `object`: An instance of a metadata template, which has been applied to a file or
  * $parent `string`: The identifier of the item that this metadata instance
  * $scope `string`: An ID for the scope in which this template
  * $template `string`: The name of the template
  * $version `integer`: The version of the metadata instance. This version starts at 0 and
  * $canEdit `boolean`: Whether the user can edit this metadata instance.
  * $id `string`: A UUID to identify the metadata instance.
  * $type `string`: A unique identifier for the "type" of this instance. This is an
  * $typeVersion `integer`: The last-known version of the template of the object. This is an

### MetadataCascadePolicies
* Metadata cascade policies `object`: A list of metadata cascade policies.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [MetadataCascadePolicy](#metadatacascadepolicy)

### MetadataCascadePolicy
* Metadata cascade policy `object`: A metadata cascade policy automatically applies a metadata template instance
  * id `string`: The ID of the metadata cascade policy object
  * owner_enterprise `object`: The enterprise that owns this policy.
    * id `string`: The ID of the enterprise that owns the policy.
    * type `string` (values: enterprise): `enterprise`
  * parent `object`: Represent the folder the policy is applied to.
    * id `string`: The ID of the folder the policy is applied to.
    * type `string` (values: folder): `folder`
  * scope `string` (values: global, enterprise_*): The scope of the of the template that is cascaded down to the folder's
  * templateKey `string`: The key of the template that is cascaded down to the folder's
  * type `string` (values: metadata_cascade_policy): `metadata_cascade_policy`

### MetadataFieldFilterDateRange
* Metadata field filter (date range) `object`: Specifies which `date` field on the template to filter the search

### MetadataFieldFilterFloat
* Metadata field filter (float) `object`: Specifies which `float` field on the template to filter the search

### MetadataFieldFilterFloatRange
* Metadata field filter (float range) `object`: Specifies which `float` field on the template to filter the search

### MetadataFieldFilterMultiSelect
* Metadata field filter (multi-select) `object`: Specifies the values to match for a `multiSelect` metadata

### MetadataFieldFilterString
* Metadata field filter (string) `object`: Specifies which text field on the template to filter the search

### MetadataFilter
* Metadata filter `object`: A metadata template to filter the search results by.
  * filters
  * scope `string` (values: global, enterprise, enterprise_{enterprise_id}): Specifies the scope of the template to filter search results by.
  * templateKey `string`: The key of the template to filter search results by.

### MetadataQuery
* Metadata query search request `object`: Create a search using SQL-like syntax to return items that match specific
  * ancestor_folder_id **required** `string`: The ID of the folder that you are restricting the query to. A
  * fields `array`: By default, this endpoint returns only the most basic info about the items for
    * items `string`
  * from **required** `string`: Specifies the template used in the query. Must be in the form
  * limit `integer`: A value between 0 and 100 that indicates the maximum number of results
  * marker `string`: Marker to use for requesting the next page.
  * order_by `array`: A list of template fields and directions to sort the metadata query
    * items `object`: An object representing one of the metadata template fields to sort the
      * direction `string` (values: ASC, DESC, asc, desc): The direction to order by, either ascending or descending.
      * field_key `string`: The metadata template field to order by.
  * query `string`: The query to perform. A query is a logical expression that is very similar
  * query_params `object`: Set of arguments corresponding to the parameters specified in the
  * use_index `string`: The name of the search index to use for this query. A search index is

### MetadataQueryResults
* Metadata query search results `object`: A page of files and folders that matched the metadata query.
  * entries `array`: The mini representation of the files and folders that match the search
  * limit `integer`: The limit that was used for this search. This will be the same as the
  * next_marker `string`: The marker for the start of the next page of results.

### MetadataTemplate
* Metadata template `object`: A template for metadata that can be applied to files and folders
  * copyInstanceOnItemCopy `boolean`: Whether or not to include the metadata when a file or folder is copied.
  * displayName `string`: The display name of the template. This can be seen in the Box web app
  * fields `array`: An ordered list of template fields which are part of the template. Each
    * items `object`: A field within a metadata template. Fields can be a basic text, date, or
      * description `string`: A description of the field. This is not shown to the user.
      * displayName **required** `string`: The display name of the field as it is shown to the user in the web and
      * hidden `boolean`: Whether this field is hidden in the UI for the user and can only be set
      * key **required** `string`: A unique identifier for the field. The identifier must
      * options `array`: A list of options for this field. This is used in combination with the
        * items `object`: An option for a Metadata Template Field.
          * key **required** `string`: The text value of the option. This represents both the display name of the
      * type **required** `string` (values: string, float, date, enum, multiSelect): The type of field. The basic fields are a `string` field for text, a
      * id `string`: The unique ID of the metadata template field.
      * options `array`: A list of options for this field. This is used in combination
        * items `object`: An option for a Metadata Template Field.
          * key **required** `string`: The text value of the option. This represents both the display name of the
          * id `string`: The internal unique identifier of the the option.
  * hidden `boolean`: Defines if this template is visible in the Box web app UI, or if
  * id `string`: The ID of the metadata template.
  * scope `string`: The scope of the metadata template can either be `global` or
  * templateKey `string`: A unique identifier for the template. This identifier is unique across
  * type `string` (values: metadata_template): `metadata_template`

### MetadataTemplates
* Metadata templates `object`: A list of metadata templates
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [MetadataTemplate](#metadatatemplate)

### Metadatas
* Metadata instances `object`: A list of metadata instances that have been applied to a file or folder.
  * entries `array`: A list of metadata instances, as applied to this file or folder.
    * items [Metadata](#metadata)
  * limit `integer`: The limit that was used for this page of results.

### OAuth2Error
* OAuth 2.0 error `object`: An OAuth 2.0 error
  * error `string`: The type of the error returned.
  * error_description `string`: The type of the error returned.

### PostOAuth2Revoke
* Token revocation request `object`: A request to revoke an OAuth 2.0 token
  * client_id `string`: The Client ID of the application requesting to revoke the
  * client_secret `string`: The client secret of the application requesting to revoke
  * token `string`: The access token to revoke.

### PostOAuth2Token
* Token request `object`: A request for a new OAuth 2.0 token
  * actor_token `string`: The token used to create an annotator token.
  * actor_token_type `string` (values: urn:ietf:params:oauth:token-type:id_token): The type of `actor_token` passed in.
  * assertion `string`: A JWT assertion for which to request a new access token.
  * box_subject_id `string`: Used in combination with `client_credentials` as the `grant_type`.
  * box_subject_type `string` (values: enterprise, user): Used in combination with `client_credentials` as the `grant_type`.
  * client_id `string`: The Client ID of the application requesting an access token.
  * client_secret `string`: The client secret of the application requesting an access token.
  * code `string`: The client-side authorization code passed to your application by
  * grant_type **required** `string` (values: authorization_code, refresh_token, client_credentials, urn:ietf:params:oauth:grant-type:jwt-bearer, urn:ietf:params:oauth:grant-type:token-exchange): The type of request being made, either using a client-side obtained
  * refresh_token `string`: A refresh token used to get a new access token with.
  * resource `string`: Full URL for the file that the token should be generated for.
  * scope `string`: The space-delimited list of scopes that you want apply to the
  * subject_token `string`: The token to exchange for a downscoped token. This can be a regular
  * subject_token_type `string` (values: urn:ietf:params:oauth:token-type:access_token): The type of `subject_token` passed in.

### PostOAuth2Token--RefreshAccessToken
* Refresh access token `object`: A request to refresh an Access Token. Use this API to refresh an expired
  * client_id **required** `string`: The client ID of the application requesting to refresh the token.
  * client_secret **required** `string`: The client secret of the application requesting to refresh the token.
  * grant_type **required** `string` (values: refresh_token): The type of request being made, in this case a refresh request.
  * refresh_token **required** `string`: The refresh token to refresh.

### RealtimeServer
* Real-time server `object`: A real-time server that can be used for
  * max_retries `integer`: The maximum number of retries this server will
  * retry_timeout `integer`: The maximum number of seconds without a response
  * ttl `integer`: The time in minutes for which this server is available
  * type `string`: `realtime_server`
  * url `string`: The URL for the server.

### RealtimeServers
* Real-time servers `object`: A list of real-time servers that can
  * chunk_size `integer`: The number of items in this response.
  * entries `array`
    * items [RealtimeServer](#realtimeserver)

### RecentItem
* Recent item `object`: A recent item accessed by a user.
  * interacted_at `string`: The time of the most recent interaction.
  * interaction_shared_link `string`: If the item was accessed through a shared link it will appear here,
  * interaction_type `string` (values: item_preview, item_upload, item_comment, item_open, item_modify): The most recent type of access the user performed on
  * item
  * type `string`: `recent_item`

### RecentItems
* Recent items `object`: A list of recent items.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [RecentItem](#recentitem)

### RetentionPolicies
* Retention policies `object`: A list of retention policies
  * entries `array`
    * items [RetentionPolicy](#retentionpolicy)
  * total_count `integer`: The number of retention policies.

### RetentionPolicy
* Retention policy `object`: A retention policy blocks permanent deletion of content
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`
  * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
  * policy_name `string`: The name given to the retention policy
  * retention_length `string`: The length of the retention policy. This length
  * created_at `string`: When the retention policy object was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * modified_at `string`: When the retention policy object was last modified
  * policy_type `string` (values: finite, indefinite): The type of the retention policy. A retention
  * status `string` (values: active, retired): The status of the retention policy. The status of

### RetentionPolicy--Base
* Retention policy (Base) `object`: The bare basic representation of a file version, the minimal
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`

### RetentionPolicy--Mini
* Retention policy (Mini) `object`: A mini representation of a retention policy, used when
  * id `string`: The unique identifier that represent a file version.
  * type `string` (values: file_version): `file_version`
  * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
  * policy_name `string`: The name given to the retention policy
  * retention_length `string`: The length of the retention policy. This length

### RetentionPolicyAssignment
* Retention policy assignment `object`: The retention policy assignment endpoint provides a way
  * assigned_at `string`: When the retention policy assignment object was
  * assigned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * assigned_to
    * id `string`: The unique identifier for this object
    * type `string`: The type for this object
  * id `string`: The unique identifier for this retention policy assignment
  * retention_policy
    * id `string`: The unique identifier that represent a file version.
    * type `string` (values: file_version): `file_version`
    * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy.
    * policy_name `string`: The name given to the retention policy
    * retention_length `string`: The length of the retention policy. This length
  * type `string` (values: retention_policy_assignment): `retention_policy_assignment`

### RetentionPolicyAssignments
* Retention policy assignments `object`: A list of retention policy assignments
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [RetentionPolicyAssignment](#retentionpolicyassignment)

### SearchResultWithSharedLink
* Search Result (including Shared Link) `object`: A single of files, folder or web link that matched the search query,
  * item

### SearchResults
* Search Results `object`: A list of files, folders and web links that matched the search query.
  * limit `integer`: The limit that was used for this search. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * total_count `integer`: One greater than the offset of the last entry in the search results.
  * entries `array`: The search results for the query provided.

### SearchResultsWithSharedLinks
* Search Results (including Shared Links) `object`: A list of files, folders and web links that matched the search query,
  * limit `integer`: The limit that was used for this search. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * total_count `integer`: One greater than the offset of the last entry in the search results.
  * entries `array`: The search results for the query provided, including the
    * items [SearchResultWithSharedLink](#searchresultwithsharedlink)

### SkillCard
* Skill Card `object`: A generic Box Skill metadata card.
  * created_at `string`: The optional date and time this card was created at.
  * duration `integer`: An optional total duration in seconds.
  * entries `array`: An optional list of entries in the metadata card.
    * items `object`: An entry in the `entries` attribute of a metadata card
      * appears `array`: Defines a list of timestamps for an entry. This is
        * items `object`: The timestamp for an entry.
          * end `integer`: The time in seconds when an
          * start `integer`: The time in seconds when an
      * image_url `string`: The image to show on a for an entry that appears
      * text `string`: The text of the entry. This would be the actual
  * invocation **required** `object`: The invocation of this service, used to track
    * id **required** `string`: A custom identifier that represent the instance of
    * type **required** `string` (values: skill_invocation): `skill_invocation`
  * skill **required** `object`: The service that applied this metadata.
    * id **required** `string`: A custom identifier that represent the service that
    * type **required** `string` (values: service): `service`
  * skill_card_title `object`: The title of the card.
    * code `string`: An optional identifier for the title.
    * message **required** `string`: The actual title to show in the UI.
  * skill_card_type **required** `string` (values: transcript, keyword, timeline, status): The type of card to add to the file.
  * status `object`: Used with a card of type `status` to set the status of the skill. This can be used to show a message to the user while the Skill is processing the data.
    * code **required** `string` (values: invoked, processing, success, transient_failure, permanent_failure): A code for the status of this Skill invocation. By
    * message `string`: A custom message that can be provided with this status.
  * type **required** `string` (values: skill_card): `skill_card`

### SkillCardsMetadata
* Skills metadata instance `object`: The metadata assigned to a using for Box skills.
  * $canEdit `boolean`: Whether the user can edit this metadata
  * $id `string`: A UUID to identify the metadata object
  * $parent `string`: An ID for the parent folder
  * $scope `string`: An ID for the scope in which this template
  * $template `string`: The name of the template
  * $type `string`: A unique identifier for the "type" of this instance. This is an internal
  * $typeVersion `integer`: The last-known version of the template of the object. This is an internal
  * $version `integer`: The version of the metadata object. Starts at 0 and increases every time
  * cards `array`: A list of Box Skill cards that have been applied to this file.

### SkillInvocation
* Skill webhook payload `object`: The payload of a Box skill as sent to a skill's
  * created_at `string`: The time this invocation was created.
  * enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * event
    * additional_details `object`: This object provides additional information about the event if available.
    * created_by
      * id `string`: The unique identifier for this user
      * type `string` (values: user): `user`
      * login `string`: The primary email address of this user
      * name `string`: The display name of this user
    * event_id `string`: The ID of the event object. You can use this to detect duplicate events
    * event_type
    * session_id `string`: The session of the user that performed the action. Not all events will
    * source
    * type `string`: `event`
  * id `string`: Unique identifier for the invocation request.
  * skill
    * api_key `string`: The client ID of the application
    * id `string`: The unique identifier for this skill
    * name `string`: The name of the skill
    * type `string` (values: skill): `skill`
  * source
  * status `object`: The details status of this event.
    * additional_info `string`: Additional status information.
    * error_code `string`: Error code information, if error occurred.
    * message `string`: Status information
    * state `string` (values: invoked, processing, success, transient_failure, permanent_failure): The state of this event.
  * token `object`: The read-only and read-write access tokens for this item
    * read `object`: The basics of an access token
      * access_token `string`: The requested access token.
      * expires_in `integer`: The time in seconds in seconds by which this token will expire.
      * restricted_to `array`: The permissions that this access token permits,
        * items [FileScope](#filescope)
      * token_type `string` (values: bearer): The type of access token returned.
    * write `object`: The basics of an access token
      * access_token `string`: The requested access token.
      * expires_in `integer`: The time in seconds in seconds by which this token will expire.
      * restricted_to `array`: The permissions that this access token permits,
        * items [FileScope](#filescope)
      * token_type `string` (values: bearer): The type of access token returned.
  * trigger `string`: Action that triggered the invocation
  * type `string` (values: skill_invocation): `skill_invocation`

### StatusSkillCard
* Status Skill Card `object`: A Box Skill metadata card that puts a status message in the metadata sidebar.
  * created_at `string`: The optional date and time this card was created at.
  * invocation **required** `object`: The invocation of this service, used to track
    * id **required** `string`: A custom identifier that represent the instance of
    * type **required** `string` (values: skill_invocation): `skill_invocation`
  * skill **required** `object`: The service that applied this metadata.
    * id **required** `string`: A custom identifier that represent the service that
    * type **required** `string` (values: service): `service`
  * skill_card_title `object`: The title of the card.
    * code `string`: An optional identifier for the title.
    * message **required** `string`: The actual title to show in the UI.
  * skill_card_type **required** `string` (values: status): `status`
  * status **required** `object`: Sets the status of the skill. This can be used to show a message to the user while the Skill is processing the data, or if it was not able to process the file.
    * code **required** `string` (values: invoked, processing, success, transient_failure, permanent_failure): A code for the status of this Skill invocation. By
    * message `string`: A custom message that can be provided with this status.
  * type **required** `string` (values: skill_card): `skill_card`

### StoragePolicies
* Storage policies `object`: A list of storage policies.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [StoragePolicy](#storagepolicy)

### StoragePolicy
* Storage policy `object`: The Storage Policy object describes the storage zone.
  * id `string`: The unique identifier for this storage policy
  * type `string` (values: storage_policy): `storage_policy`
  * name `string`: A descriptive name of the region

### StoragePolicy--Mini
* Storage policy (Mini) `object`: A mini description of a Storage Policy object
  * id `string`: The unique identifier for this storage policy
  * type `string` (values: storage_policy): `storage_policy`

### StoragePolicyAssignment
* Storage policy assignment `object`: The assignment of a storage policy to a user or enterprise
  * assigned_to
    * id `string`: The unique identifier for this object
    * type `string`: The type for this object
  * storage_policy
    * id `string`: The unique identifier for this storage policy
    * type `string` (values: storage_policy): `storage_policy`

### StoragePolicyAssignments
* Storage policy assignments `object`: A list of storage policy assignments.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [StoragePolicyAssignment](#storagepolicyassignment)

### Task
* Task `object`: A task allows for file-centric workflows within Box. Users can
  * action `string` (values: review, complete): The type of task the task assignee will be prompted to
  * completion_rule `string` (values: all_assignees, any_assignee): Defines which assignees need to complete this task before the task
  * created_at `string`: When the task object was created
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * due_at `string`: When the task is due
  * id `string`: The unique identifier for this task
  * is_completed `boolean`: Whether the task has been completed
  * item
    * etag `string`: The HTTP `etag` of this file. This can be used within some API
    * id `string`: The unique identifier that represent a file.
    * type `string` (values: file): `file`
    * file_version
      * id `string`: The unique identifier that represent a file version.
      * type `string` (values: file_version): `file_version`
      * sha1 `string`: The SHA1 hash of this version of the file.
    * name `string`: The name of the file
    * sequence_id
    * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * message `string`: A message that will be included with the task
  * task_assignment_collection
    * entries `array`
      * items [TaskAssignment](#taskassignment)
    * total_count `integer`: The total number of items in this collection.
  * type `string` (values: task): `task`

### TaskAssignment
* Task assignment `object`: A task assignment defines which task is assigned to which user to complete.
  * assigned_at `string`: The date at which this task was assigned to the user.
  * assigned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * assigned_to
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * completed_at `string`: The date at which this task assignment was
  * id `string`: The unique identifier for this task assignment
  * item
    * etag `string`: The HTTP `etag` of this file. This can be used within some API
    * id `string`: The unique identifier that represent a file.
    * type `string` (values: file): `file`
    * file_version
      * id `string`: The unique identifier that represent a file version.
      * type `string` (values: file_version): `file_version`
      * sha1 `string`: The SHA1 hash of this version of the file.
    * name `string`: The name of the file
    * sequence_id
    * sha1 `string`: The SHA1 hash of the file. This can be used to compare the contents
  * message `string`: A message that will is included with the task
  * reminded_at `string`: The date at which the assigned user was reminded of this task
  * resolution_state `string` (values: completed, incomplete, approved, rejected): The current state of the assignment. The available states depend on
  * type `string` (values: task_assignment): `task_assignment`

### TaskAssignments
* Task assignments `object`: A list of task assignments
  * entries `array`
    * items [TaskAssignment](#taskassignment)
  * total_count `integer`: The total number of items in this collection.

### Tasks
* Tasks `object`: A list of tasks
  * entries `array`
    * items [Task](#task)
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.

### TermsOfService
* Terms of service `object`: The root-level record that is supposed to represent a
  * id `string`: The unique identifier for this terms of service.
  * type `string` (values: terms_of_service): `terms_of_service`
  * created_at `string`: When the legal item was created
  * enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * modified_at `string`: When the legal item was modified.
  * status `string` (values: enabled, disabled): Whether these terms are enabled or not
  * text `string`: The text for your terms and conditions. This text could be
  * tos_type `string` (values: managed, external): Whether to apply these terms to managed users or external users

### TermsOfService--Mini
* Terms of service (Mini) `object`: The root-level record that is supposed to represent a
  * id `string`: The unique identifier for this terms of service.
  * type `string` (values: terms_of_service): `terms_of_service`

### TermsOfServiceUserStatus
* Terms of service user status `object`: The association between a Terms of Service and a user
  * created_at `string`: When the legal item was created
  * id `string`: The unique identifier for this terms of service user status
  * is_accepted `boolean`: If the user has accepted the terms of services
  * modified_at `string`: When the legal item was modified.
  * tos
    * id `string`: The unique identifier for this terms of service.
    * type `string` (values: terms_of_service): `terms_of_service`
  * type `string` (values: terms_of_service_user_status): `terms_of_service_user_status`
  * user
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user

### TermsOfServiceUserStatuses
* Terms of service user statuses `object`: A list of terms of service user statuses
  * entries `array`
    * items [TermsOfServiceUserStatus](#termsofserviceuserstatus)
  * total_count `integer`: The total number of objects.

### TermsOfServices
* Terms of services `object`: A list of terms of services
  * entries `array`
    * items [TermsOfService](#termsofservice)
  * total_count `integer`: The total number of objects.

### TimelineSkillCard
* Timeline Skill Card `object`: A Box Skill metadata card that places a list of images on a
  * created_at `string`: The optional date and time this card was created at.
  * duration `integer`: An total duration in seconds of the timeline.
  * entries **required** `array`: A list of entries on the timeline.
    * items `object`: An single item that's placed on multiple items on the timeline.
      * appears `array`: Defines a list of timestamps for when this item should appear on the
        * items `object`: The timestamp for an entry.
          * end `integer`: The time in seconds when an
          * start `integer`: The time in seconds when an
      * image_url `string`: The image to show on a for an entry that appears
      * text `string`: The text of the entry. This would be the display
  * invocation **required** `object`: The invocation of this service, used to track
    * id **required** `string`: A custom identifier that represent the instance of
    * type **required** `string` (values: skill_invocation): `skill_invocation`
  * skill **required** `object`: The service that applied this metadata.
    * id **required** `string`: A custom identifier that represent the service that
    * type **required** `string` (values: service): `service`
  * skill_card_title `object`: The title of the card.
    * code `string`: An optional identifier for the title.
    * message **required** `string`: The actual title to show in the UI.
  * skill_card_type **required** `string` (values: timeline): `timeline`
  * type **required** `string` (values: skill_card): `skill_card`

### TranscriptSkillCard
* Transcript Skill Card `object`: A Box Skill metadata card that adds a transcript to a file.
  * created_at `string`: The optional date and time this card was created at.
  * duration `integer`: An optional total duration in seconds.
  * entries **required** `array`: An list of entries for the card. This represents the individual entries of
    * items `object`: An entry in the `entries` attribute of a metadata card
      * appears `array`: Defines when a transcribed bit of text appears. This only includes a
        * items `object`: The timestamp for an entry.
          * start `integer`: The time in seconds when an
      * text `string`: The text of the entry. This would be the transcribed text assigned
  * invocation **required** `object`: The invocation of this service, used to track
    * id **required** `string`: A custom identifier that represent the instance of
    * type **required** `string` (values: skill_invocation): `skill_invocation`
  * skill **required** `object`: The service that applied this metadata.
    * id **required** `string`: A custom identifier that represent the service that
    * type **required** `string` (values: service): `service`
  * skill_card_title `object`: The title of the card.
    * code `string`: An optional identifier for the title.
    * message **required** `string`: The actual title to show in the UI.
  * skill_card_type **required** `string` (values: transcript): `transcript`
  * type **required** `string` (values: skill_card): `skill_card`

### UploadPart
* Upload part `object`: The representation of an upload
  * offset `integer`: The offset of the chunk within the file
  * part_id `string`: The unique ID of the chunk.
  * size `integer`: The size of the chunk in bytes.
  * sha1 `string`: The SHA1 hash of the chunk.

### UploadPart--Mini
* Upload part (Mini) `object`: The basic representation of an upload
  * offset `integer`: The offset of the chunk within the file
  * part_id `string`: The unique ID of the chunk.
  * size `integer`: The size of the chunk in bytes.

### UploadParts
* Upload parts `object`: A list of uploaded chunks for an upload
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [UploadPart](#uploadpart)

### UploadSession
* Upload session `object`: An upload session for chunk uploading a file.
  * id `string`: The unique identifier for this session
  * num_parts_processed `integer`: The number of parts that have been uploaded and processed
  * part_size `integer`: The  size in bytes that must be used for all parts of of the
  * session_endpoints
    * abort `string`: The URL for used to abort the session.
    * commit `string`: The URL used to commit the file
    * list_parts `string`: The URL users to list all parts.
    * log_event `string`: The URL used to get the upload log from.
    * status `string`: The URL used to get the status of the upload.
    * upload_part `string`: The URL to upload parts to
  * session_expires_at `string`: The date and time when this session expires.
  * total_parts `integer`: The total number of parts expected in this upload session,
  * type `string` (values: upload_session): `upload_session`

### UploadUrl
* Upload URL `object`: The details for the upload session for the file.
  * upload_token `string`: An optional access token to use to upload the file
  * upload_url `string`: A URL for an upload session that can be used to upload

### UploadedPart
* Uploaded part `object`: A chunk of a file uploaded as part of
  * part [UploadPart](#uploadpart)

### User
* User `object`: A standard representation of a user, as returned from any
  * id `string`: The unique identifier for this user
  * type `string` (values: user): `user`
  * login `string`: The primary email address of this user
  * name `string`: The display name of this user
  * address `string`: The user’s address
  * avatar_url `string`: URL of the user’s avatar image
  * created_at `string`: When the user object was created
  * job_title `string`: The user’s job title
  * language `string`: The language of the user, formatted in modified version of the
  * max_upload_size `integer`: The maximum individual file size in bytes the user can have
  * modified_at `string`: When the user object was last modified
  * notification_email `object`: An alternate notification email address to which email
    * email `string`: The email address to send the notifications to.
    * is_confirmed `boolean`: Specifies if this email address has been confirmed.
  * phone `string`: The user’s phone number
  * space_amount `integer`: The user’s total available space amount in bytes
  * space_used `integer`: The amount of space in use by the user
  * status `string` (values: active, inactive, cannot_delete_edit, cannot_delete_edit_upload): The user's account status
  * timezone `string`: The user's timezone

### User--Base
* User (Base) `object`: A mini representation of a user, used when
  * id `string`: The unique identifier for this user
  * type `string` (values: user): `user`

### User--Full
* User (Full) `object`: A full representation of a user, as can be returned from any
  * id `string`: The unique identifier for this user
  * type `string` (values: user): `user`
  * login `string`: The primary email address of this user
  * name `string`: The display name of this user
  * address `string`: The user’s address
  * avatar_url `string`: URL of the user’s avatar image
  * created_at `string`: When the user object was created
  * job_title `string`: The user’s job title
  * language `string`: The language of the user, formatted in modified version of the
  * max_upload_size `integer`: The maximum individual file size in bytes the user can have
  * modified_at `string`: When the user object was last modified
  * notification_email `object`: An alternate notification email address to which email
    * email `string`: The email address to send the notifications to.
    * is_confirmed `boolean`: Specifies if this email address has been confirmed.
  * phone `string`: The user’s phone number
  * space_amount `integer`: The user’s total available space amount in bytes
  * space_used `integer`: The amount of space in use by the user
  * status `string` (values: active, inactive, cannot_delete_edit, cannot_delete_edit_upload): The user's account status
  * timezone `string`: The user's timezone
  * can_see_managed_users `boolean`: Whether the user can see other enterprise users in their contact list
  * enterprise
    * id `string`: The unique identifier for this enterprise.
    * name `string`: The name of the enterprise
    * type `string` (values: enterprise): `enterprise`
  * external_app_user_id `string`: An external identifier for an app user, which can be used to look up
  * hostname `string`: The root (protocol, subdomain, domain) of any links that need to be
  * is_exempt_from_device_limits `boolean`: Whether to exempt the user from Enterprise device limits
  * is_exempt_from_login_verification `boolean`: Whether the user must use two-factor authentication
  * is_external_collab_restricted `boolean`: Whether the user is allowed to collaborate with users outside their
  * is_platform_access_only `boolean`: Whether the user is an App User
  * is_sync_enabled `boolean`: Whether the user can use Box Sync
  * my_tags `array`: Tags for all files and folders owned by the user. Values returned
    * items `string`
  * role `string` (values: admin, coadmin, user): The user’s enterprise role
  * tracking_codes `array`: Tracking codes allow an admin to generate reports from the
    * items `object`: Custom tracking code for a user.
      * name `string`: The name of the tracking code, which must be preconfigured in
      * type `string` (values: tracking_code): `tracking_code`
      * value `string`: The value of the tracking code

### User--Mini
* User (Mini) `object`: A mini representation of a user, as can be returned when nested within other
  * id `string`: The unique identifier for this user
  * type `string` (values: user): `user`
  * login `string`: The primary email address of this user
  * name `string`: The display name of this user

### Users
* Users `object`: A list of users.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * offset `integer`: The 0-based offset of the first entry in this set. This will be the same
  * order `array`: The order by which items are returned.
    * items `object`: The order in which a pagination is ordered
      * by `string`: The field to order by
      * direction `string` (values: ASC, DESC): The direction to order by, either ascending or descending
  * total_count `integer`: One greater than the offset of the last entry in the entire collection.
  * entries `array`
    * items [User](#user)

### Watermark
* Watermark `object`: A watermark is a semi-transparent overlay on an embedded file
  * watermark `object`
    * created_at `string`: When this watermark was created
    * modified_at `string`: When this task was modified

### WebLink
* Web link `object`: Web links are objects that point to URLs. These objects
  * etag `string`: The entity tag of this web link. Used with `If-Match`
  * id `string`: The unique identifier for this web link
  * type `string` (values: web_link): `web_link`
  * name `string`: The name of the web link
  * sequence_id
  * url `string`: The URL this web link points to
  * created_at `string`: When this file was created on Box’s servers.
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * description `string`: The description accompanying the web link. This is
  * item_status `string` (values: active, trashed, deleted): Whether this item is deleted or not. Values include `active`,
  * modified_at `string`: When this file was last updated on the Box
  * modified_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * owned_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * parent
    * etag `string`: The HTTP `etag` of this folder. This can be used within some API
    * id `string`: The unique identifier that represent a folder.
    * type `string` (values: folder): `folder`
    * name `string`: The name of the folder.
    * sequence_id
  * path_collection `array`: The path of folders to this link, starting at the root
    * items [Folder--Mini](#folder--mini)
  * purged_at `string`: When this file will be permanently deleted.
  * shared_link
    * access `string` (values: open, company, collaborators): The access level for this shared link.
    * download_count `integer`: The number of times this item has been downloaded.
    * download_url `string`: A URL that can be used to download the file. This URL can be used in
    * effective_access `string` (values: open, company, collaborators): The effective access level for the shared link. This can be a more
    * effective_permission `string` (values: can_download, can_preview): The effective permissions for this shared link.
    * is_password_enabled `boolean`: Defines if the shared link requires a password to access the item.
    * permissions `object`: Defines if this link allows a user to preview and download an item.
      * can_download `boolean`: Defines if the shared link allows for the item to be downloaded. For
      * can_preview `boolean`: Defines if the shared link allows for the item to be previewed.
    * preview_count `integer`: The number of times this item has been previewed.
    * unshared_at `string`: The date and time when this link will be unshared. This field can only be
    * url `string`: The URL that can be used to access the item on Box.
    * vanity_name `string`: The custom name of a shared link, as used in the `vanity_url` field.
    * vanity_url `string`: The "Custom URL" that can also be used to preview the item on Box.  Custom
  * trashed_at `string`: When this file was last moved to the trash.

### WebLink--Base
* Web link (Base) `object`: Web links are objects that point to URLs. These objects
  * etag `string`: The entity tag of this web link. Used with `If-Match`
  * id `string`: The unique identifier for this web link
  * type `string` (values: web_link): `web_link`

### WebLink--Mini
* Web link (Mini) `object`: Web links are objects that point to URLs. These objects
  * etag `string`: The entity tag of this web link. Used with `If-Match`
  * id `string`: The unique identifier for this web link
  * type `string` (values: web_link): `web_link`
  * name `string`: The name of the web link
  * sequence_id
  * url `string`: The URL this web link points to

### Webhook
* Webhook `object`: Represents a configured webhook.
  * address `string`: The URL that is notified by this webhook
  * created_at `string`: A timestamp identifying the time that
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * id `string`: The unique identifier for this webhook.
  * target `object`: The item that will trigger the webhook
    * id `string`: The ID of the item to trigger a webhook
    * type `string` (values: file, folder): The type of item to trigger a webhook
  * triggers `array`: An array of event names that this webhook is
    * items `string` (values: FILE.UPLOADED, FILE.PREVIEWED, FILE.DOWNLOADED, FILE.TRASHED, FILE.DELETED, FILE.RESTORED, FILE.COPIED, FILE.MOVED, FILE.LOCKED, FILE.UNLOCKED, FILE.RENAMED, COMMENT.CREATED, COMMENT.UPDATED, COMMENT.DELETED, TASK_ASSIGNMENT.CREATED, TASK_ASSIGNMENT.UPDATED, METADATA_INSTANCE.CREATED, METADATA_INSTANCE.UPDATED, METADATA_INSTANCE.DELETED, FOLDER.CREATED, FOLDER.RENAMED, FOLDER.DOWNLOADED, FOLDER.RESTORED, FOLDER.DELETED, FOLDER.COPIED, FOLDER.MOVED, FOLDER.TRASHED, WEBHOOK.DELETED, COLLABORATION.CREATED, COLLABORATION.ACCEPTED, COLLABORATION.REJECTED, COLLABORATION.REMOVED, COLLABORATION.UPDATED, SHARED_LINK.DELETED, SHARED_LINK.CREATED, SHARED_LINK.UPDATED): The event name that triggered this webhook
  * type `string` (values: webhook): `webhook`

### WebhookInvocation
* Webhook (V2) payload `object`: The event that is sent to a webhook address when an event happens.
  * created_at `string`: A timestamp identifying the time that
  * created_by
    * id `string`: The unique identifier for this user
    * type `string` (values: user): `user`
    * login `string`: The primary email address of this user
    * name `string`: The display name of this user
  * id `string`: The unique identifier for this webhook invocation
  * source
  * trigger
  * type `string` (values: webhook_event): `webhook_event`
  * webhook
    * address `string`: The URL that is notified by this webhook
    * created_at `string`: A timestamp identifying the time that
    * created_by
      * id `string`: The unique identifier for this user
      * type `string` (values: user): `user`
      * login `string`: The primary email address of this user
      * name `string`: The display name of this user
    * id `string`: The unique identifier for this webhook.
    * target `object`: The item that will trigger the webhook
      * id `string`: The ID of the item to trigger a webhook
      * type `string` (values: file, folder): The type of item to trigger a webhook
    * triggers `array`: An array of event names that this webhook is
      * items `string` (values: FILE.UPLOADED, FILE.PREVIEWED, FILE.DOWNLOADED, FILE.TRASHED, FILE.DELETED, FILE.RESTORED, FILE.COPIED, FILE.MOVED, FILE.LOCKED, FILE.UNLOCKED, FILE.RENAMED, COMMENT.CREATED, COMMENT.UPDATED, COMMENT.DELETED, TASK_ASSIGNMENT.CREATED, TASK_ASSIGNMENT.UPDATED, METADATA_INSTANCE.CREATED, METADATA_INSTANCE.UPDATED, METADATA_INSTANCE.DELETED, FOLDER.CREATED, FOLDER.RENAMED, FOLDER.DOWNLOADED, FOLDER.RESTORED, FOLDER.DELETED, FOLDER.COPIED, FOLDER.MOVED, FOLDER.TRASHED, WEBHOOK.DELETED, COLLABORATION.CREATED, COLLABORATION.ACCEPTED, COLLABORATION.REJECTED, COLLABORATION.REMOVED, COLLABORATION.UPDATED, SHARED_LINK.DELETED, SHARED_LINK.CREATED, SHARED_LINK.UPDATED): The event name that triggered this webhook
    * type `string` (values: webhook): `webhook`

### Webhooks
* Webhooks `object`: A list of webhooks.
  * limit `integer`: The limit that was used for these entries. This will be the same as the
  * next_marker `integer`: The marker for the start of the next page of results.
  * prev_marker `integer`: The marker for the start of the previous page of results.
  * entries `array`
    * items [Webhook](#webhook)

### ZipDownload
* Zip download `object`: Represents a successful request to create a `zip` archive of a list of files
  * download_url `string`: The URL that can be used to download the `zip` archive. A `Get` request to
  * expires_at `string`: The time and date when this archive will expire. After this time the
  * name_conflicts `array`: A list of conflicts that occurred when trying to create the archive. This
    * items `array`: An individual conflict that occurred when trying to create the archive.
      * items `object`: A file or folder for which a conflict was encountered, This object provides the type and identifier of the original item, as well as a mapping between its original name and it's new name as it will appear in the archive.
        * download_name `string`: The new name of this item as it will appear in the
        * id `string`: The identifier of the item
        * original_name `string`: The original name of this item
        * type `string` (values: file, folder): The type of this item
  * status_url `string`: The URL that can be used to get the status of the `zip` archive being

### ZipDownloadRequest
* Create a `zip` archive `object`: A request to create a `zip` archive to download
  * download_file_name `string`: The optional name of the `zip` archive. This name will be appended by the
  * items **required** `array`: A list of items to add to the `zip` archive. These can
    * items `object`: An item to add to the `zip` archive. This can be a file or a folder.
      * id **required** `string`: The identifier of the item to add to the archive. When this item is
      * type **required** `string` (values: file, folder.): The type of the item to add to the archive.

### ZipDownloadStatus
* Zip download status `object`: The status of a `zip` archive being downloaded.
  * downloaded_file_count `integer`: The number of files that have already been downloaded.
  * skipped_file_count `integer`: The number of files that have been skipped as they could not be
  * skipped_folder_count `integer`: The number of folders that have been skipped as they could not be
  * state `string` (values: in_progress, failed, success): The state of the archive being downloaded.
  * total_file_count `integer`: The total number of files in the archive.


