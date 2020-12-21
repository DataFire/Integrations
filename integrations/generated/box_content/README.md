# @datafire/box_content

Client library for Box 2.0

## Installation and Usage
```bash
npm install --save @datafire/box_content
```
```js
let box_content = require('@datafire/box_content').create({
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

The Box Content API gives you access to secure content management and content experience features for use in your own app. It strives to be RESTful and is organized around the main resources you’re familiar with from the Box web interface.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
box_content.oauthCallback({
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
box_content.oauthRefresh(null, context)
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

### getPendingCollaborations
Used to retrieve all pending collaboration invites for this user.


```js
box_content.getPendingCollaborations({
  "status": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * status **required** `string` (values: pending): Must be 'pending'

#### Output
* output [CollaborationList](#collaborationlist)

### createCollaboration
Used to add a collaboration for a single user or a single group to a folder. Either an email address, a user ID, or a group id can be used to create the collaboration. If the collaboration is being created with a group, access to this endpoint is granted based on the group's invitability_level.


```js
box_content.createCollaboration({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Collaboration](#collaboration)

#### Output
* output [Collaboration](#collaboration)

### deleteCollaboration
Used to delete a single collaboration.


```js
box_content.deleteCollaboration({
  "COLLAB_ID": ""
}, context)
```

#### Input
* input `object`
  * COLLAB_ID **required** `string`

#### Output
*Output schema unknown*

### getCollaboration
Used to get information about a single collaboration. All collaborations for a single folder can be retrieved through GET /folders/{id}/collaborations. A complete list of the user’s pending collaborations can also be retrieved.


```js
box_content.getCollaboration({
  "COLLAB_ID": ""
}, context)
```

#### Input
* input `object`
  * COLLAB_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * status `string` (values: pending): Can only be pending

#### Output
* output [Collaboration](#collaboration)

### updateCollaboation
Used to edit an existing collaboration. Descriptions of the various roles can be found here.


```js
box_content.updateCollaboation({
  "COLLAB_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * COLLAB_ID **required** `string`
  * body **required** [Collaboration](#collaboration)

#### Output
* output [Collaboration](#collaboration)

### getCollections
Retrieves the collections for the given user. Currently, only the favorites collection is supported.


```js
box_content.getCollections(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CollectionList](#collectionlist)

### getCollectionItems
Retrieves the files and/or folders contained within this collection. Collection item lists behave a lot like getting a folder’s items.
Paginated results can be retrieved using the limit and offset parameters.
Sub-object fields can be requested via the ?fields parameter


```js
box_content.getCollectionItems({
  "COLLECTION_ID": ""
}, context)
```

#### Input
* input `object`
  * COLLECTION_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page.
  * offset `string`: The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Offset of 2 would start at the 2nd record, not the second page. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back.

#### Output
* output [ItemReferenceList](#itemreferencelist)

### createComment
Used to add a comment by the user to a specific file or comment (i.e. as a reply comment).


```js
box_content.createComment({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response.
  * body **required** [Comment](#comment)

#### Output
* output [Comment](#comment)

### deleteComment
Permanently deletes a comment.


```js
box_content.deleteComment({
  "COMMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * COMMENT_ID **required** `string`

#### Output
*Output schema unknown*

### getComment
Used to retrieve the message and metadata about a specific comment. Information about the user who created the comment is also included.


```js
box_content.getComment({
  "COMMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * COMMENT_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response.

#### Output
* output [Comment](#comment)

### updateComment
Used to update the message of the comment.


```js
box_content.updateComment({
  "COMMENT_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * COMMENT_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response.
  * body **required** [Comment](#comment)

#### Output
* output [Comment](#comment)

### deleteDevicePin
Delete individual device pin.


```js
box_content.deleteDevicePin({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
*Output schema unknown*

### getDevicePin
Gets information about an individual device pin.


```js
box_content.getDevicePin({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
* output [DevicePinner](#devicepinner)

### getEnterpriseDevicePins
Gets all the device pins within a given enterprise. Must be an enterprise admin with the manage enterprise scope to make this call.


```js
box_content.getEnterpriseDevicePins({
  "ENTERPRISE_ID": ""
}, context)
```

#### Input
* input `object`
  * ENTERPRISE_ID **required** `string`
  * marker `string`: Needs not be passed or can be empty for first invocation of the API. Use the one returned in response for each subsequent call.
  * limit `string`: Default value is 100. Max value is 10000
  * direction `string`: Default is "asc". Valid values are asc, desc. Case in-sensitive, ASC/DESC works just fine.

#### Output
* output [DevicePinnerList](#devicepinnerlist)

### getUserEvents
Use this to get events for a given user. A chunk of event objects is returned for the user based on the parameters passed in. Parameters indicating how many chunks are left as well as the next stream_position are also returned.

To retrieve Enterprise Events specify 'stream_type=admin_logs'. Retrieves up to a year' events for all users in an enterprise. Upper and lower bounds as well as filters can be applied to the results.


```js
box_content.getUserEvents({}, context)
```

#### Input
* input `object`
  * stream_position `string`: The location in the event stream at which you want to start receiving events. Can specify special case ‘now’ to get 0 events and the latest stream position for initialization.
  * stream_type `string` (values: all, changes, sync, admin_logs): Limits the type of events returned: all: returns everything, changes: returns tree changes, sync: returns tree changes only for sync folders
  * limit `integer`: Limits the number of events returned
  * event_type `string`: A comma-separated list of events to filter by
  * created_after `string`: A lower bound on the timestamp of the events returned
  * created_before `string`: An upper bound on the timestamp of the events returned

#### Output
* output [EventList](#eventlist)

### eventLongPolling
To get real-time notification of activity in a Box account, use the long poll feature of the /events API. To do so, first call the /events API with an OPTIONS call to retrieve the long poll URL to use. Next, make a GET request to the provided URL to begin listening for events. If an event occurs within an account you are monitoring, you will receive a response with the value new_change. It’s important to note that this response will not come with any other details, but should serve as a prompt to take further action such as calling the /events endpoint with your last known stream_position. After sending this response, the server will close the connection and you will need to repeat the long poll process to begin listening for events again.
If no events occur for a period of time after you make the GET request to the long poll URL, you will receive a response with the value reconnect. When you receive this response, you’ll make another OPTIONS call to the /events endpoint and repeat the long poll process.
If you receive no events in retry_timeout seconds, you should make another GET request to the real time server (i.e. URL in the response). This might be necessary in case you do not receive the reconnect message in the face of network errors.
If you receive max_retries error when making GET requests to the real time server, you should make another OPTIONS request.


```js
box_content.eventLongPolling(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RealtimeServerList](#realtimeserverlist)

### getFileVersionLegalHoldPolicies
Get list of non-deleted Holds for a single Policy.


```js
box_content.getFileVersionLegalHoldPolicies({
  "policy_id": ""
}, context)
```

#### Input
* input `object`
  * policy_id **required** `string`

#### Output
* output [FileVersionLegalHoldList](#fileversionlegalholdlist)

### getFileVersionLegalHoldPolicy
Get details of a single File Version Legal Hold.


```js
box_content.getFileVersionLegalHoldPolicy({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
* output [FileVersionLegalHold](#fileversionlegalhold)

### getFileVersionRetentions
Retrieves all file version retentions for the given enterprise.


```js
box_content.getFileVersionRetentions({}, context)
```

#### Input
* input `object`
  * file_id `string`: A file id to filter the file version retentions by.
  * file_version_id `string`: A file version id to filter the file version retentions by.
  * policy_id `string`: A policy id to filter the file version retentions by.
  * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy. This action can be permanently_delete, which will cause the content retained by the policy to be permanently deleted, or remove_retention, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy time period has passed.
  * disposition_before `string`: See content times for formatting
  * disposition_after `string`: See content times for formatting
  * limit `integer`: The maximum number of items to return in a page
  * marker `string`: Base 64 encoded string that represents where the paging should being. It should be left blank to begin paging.

#### Output
* output [FileVersionRetentionList](#fileversionretentionlist)

### getFileVersionRetention
Used to retrieve information about a file version retention


```js
box_content.getFileVersionRetention({
  "FILE_VERSION_RETENTION_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_VERSION_RETENTION_ID **required** `string`

#### Output
* output [FileVersionRetention](#fileversionretention)

### fileUploadPreflightCheck
The Pre-flight check API will verify that a file will be accepted by Box before you send all the bytes over the wire.


```js
box_content.fileUploadPreflightCheck({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [BoxFile](#boxfile)

#### Output
*Output schema unknown*

### deleteFile
Discards a file to the trash. The etag of the file can be included as an ‘If-Match’ header to prevent race conditions.


```js
box_content.deleteFile({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * If-Match `string`: The etag of the file. This is in the ‘etag’ field of the file object.

#### Output
*Output schema unknown*

### getFile
Used to retrieve the metadata about a file.


```js
box_content.getFile({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response.

#### Output
* output [BoxFile](#boxfile)

### restoreTrashedFile
Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.


```js
box_content.restoreTrashedFile({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [BoxFile](#boxfile)

#### Output
* output [BoxFile](#boxfile)

### updateFileInfo
Used to update individual or multiple fields in the file object, including renaming the file, changing its description, and creating a shared link for the file. To move a file, change the ID of its parent folder. An optional If-Match header can be included to prevent race conditions.

To lock and unlock files, you execute a PUT operation on the /files/{file id} endpoint and set or clear the lock properties on the file.

Used to create a shared link for this particular file. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}


```js
box_content.updateFileInfo({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [BoxFile](#boxfile)
  * If-Match `string`: The etag of the file can be included as an ‘If-Match’ header to prevent race conditions.

#### Output
* output [BoxFile](#boxfile)

### getFileCollaborations
Use this to get a list of all the collaborations on a file


```js
box_content.getFileCollaborations({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page
  * offset `integer`: The item at which to begin the response

#### Output
* output [CollaborationList](#collaborationlist)

### getFileComments
Retrieves the comments on a particular file, if any exist.


```js
box_content.getFileComments({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [CommentList](#commentlist)

### getFileContent
Retrieves the actual data of the file. An optional version parameter can be set to download a previous version of the file.


```js
box_content.getFileContent({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * Range `string`: The range value in bytes. Format should be bytes={start_range}-{end_range}
  * version `string`: The ID specific version of this file to download.
  * BoxApi `string`: The shared link for this item. Format should be shared_link=SHARED_LINK

#### Output
*Output schema unknown*

### copyFile
Used to create a copy of a file in another folder. The original version of the file will not be altered.


```js
box_content.copyFile({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [CopyFile](#copyfile)

#### Output
* output [BoxFile](#boxfile)

### getAllFileMetadata
Used to retrieve all metadata associated with a given file


```js
box_content.getAllFileMetadata({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`

#### Output
* output [MetadataList](#metadatalist)

### deleteFileMetadata
Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.


```js
box_content.deleteFileMetadata({
  "FILE_ID": "",
  "SCOPE": "",
  "TEMPLATE": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`

#### Output
*Output schema unknown*

### getFileMetadata
Used to retrieve the metadata template instance for a corresponding Box file.


```js
box_content.getFileMetadata({
  "FILE_ID": "",
  "SCOPE": "",
  "TEMPLATE": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`

#### Output
* output [Metadata](#metadata)

### createFileMetadata
Used to create the metadata template instance for a corresponding Box file. When creating metadata, only values that adhere to the metadata template schema will be accepted.


```js
box_content.createFileMetadata({
  "FILE_ID": "",
  "SCOPE": "",
  "TEMPLATE": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`
  * body **required** [Metadata](#metadata)

#### Output
* output [Metadata](#metadata)

### updateFileMetadata
Used to update the template instance. The request body must follow the JSON-Patch specification, which is represented as a JSON array of operation objects (see examples for more details). Updates can be either add, replace, remove , test, move, or copy. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.
The update is applied atomically. If any errors occur during the application of the update operations, the metadata instance remains unchanged.


```js
box_content.updateFileMetadata({
  "FILE_ID": "",
  "SCOPE": "",
  "TEMPLATE": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`
  * body **required** [UpdateMetadata](#updatemetadata)

#### Output
* output [Metadata](#metadata)

### getFileTasks
Retrieves all of the tasks for given file.


```js
box_content.getFileTasks({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [TaskList](#tasklist)

### getFileThumbnail
Retrieves a thumbnail, or smaller image representation, of this file. Sizes of 32x32,64x64, 128x128, and 256x256 can be returned in the .png format and sizes of 32x32, 94x94, 160x160, and 320x320 can be returned in the .jpg format. Thumbnails can be generated for the image and video file formats listed here.


```js
box_content.getFileThumbnail({
  "FILE_ID": "",
  "EXTENSION": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * EXTENSION **required** `string`: The preview format, e.g. png or jpg
  * min_height `integer`: The minimum height of the thumbnail
  * min_width `integer`: The minimum width of the thumbnail
  * max_height `integer`: The maximum height of the thumbnail
  * max_width `integer`: The maximum width of the thumbnail

#### Output
* output [BoxFile](#boxfile)

### deleteTrashedFile
Permanently deletes an item that is in the trash. The item will no longer exist in Box. This action cannot be undone.


```js
box_content.deleteTrashedFile({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`

#### Output
*Output schema unknown*

### getTrashedFile
Retrieves an item that has been moved to the trash.


```js
box_content.getTrashedFile({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`

#### Output
* output [BoxFile](#boxfile)

### getFileVersions
If there are previous versions of this file, this method can be used to retrieve information about the older versions. (Versions are only tracked for Box users with premium accounts.)


```js
box_content.getFileVersions({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [FileVersionList](#fileversionlist)

### promotoeFileVersion
If there are previous versions of this file, this method can be used to promote one of the older versions to the top of the stack. This actually mints a copy of the old version and puts it on the top of the versions stack. The file will have the exact same contents, the same SHA1/etag, and the same name as the original. Other properties such as comments do not get updated to their former values.


```js
box_content.promotoeFileVersion({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [Reference](#reference)

#### Output
* output [FileVersion](#fileversion)

### deleteFileVersion
Discards a specific file version to the trash. (Depending on the enterprise settings for this user, the item will either be actually deleted from Box or moved to the trash.)


```js
box_content.deleteFileVersion({
  "FILE_ID": "",
  "VERSION_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * VERSION_ID **required** `string`
  * If-Match `string`: The etag of the file. This is in the ‘etag’ field of the file object.

#### Output
*Output schema unknown*

### deleteFileWatermark
Used to remove the watermark for a corresponding Box file.


```js
box_content.deleteFileWatermark({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`

#### Output
* output [Watermark](#watermark)

### getFileWatermark
Used to retrieve the watermark for a corresponding Box file.


```js
box_content.getFileWatermark({
  "FILE_ID": ""
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`

#### Output
* output [Watermark](#watermark)

### updateFileWatermark
Used to apply or update the watermark for a corresponding Box file. The endpoint accepts a JSON body describing the watermark to apply.


```js
box_content.updateFileWatermark({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FILE_ID **required** `string`
  * body **required** [Watermark](#watermark)

#### Output
* output [Watermark](#watermark)

### createFolder
Used to create a new empty folder. The new folder will be created inside of the specified parent folder


```js
box_content.createFolder({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Folder](#folder)

#### Output
* output [Folder](#folder)

### getTrashedItems
Retrieves the files and/or folders that have been moved to the trash. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.


```js
box_content.getTrashedItems({}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return
  * offset `integer`: The item at which to begin the response

#### Output
* output [FileReferenceList](#filereferencelist)

### deleteFolder
Used to delete a folder. A recursive parameter must be included in order to delete folders that have items inside of them. An optional If-Match header can be included to ensure that client only deletes the folder if it knows about the latest version.


```js
box_content.deleteFolder({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * recursive `boolean`
  * If-Match `string`: This is in the ‘etag’ field of the folder object.

#### Output
*Output schema unknown*

### getFolder
Retrieves the full metadata about a folder, including information about when it was last updated as well as the files and folders contained in it. The root folder of a Box account is always represented by the id “0”.


```js
box_content.getFolder({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * FOLDER_ID **required** `string`

#### Output
* output [Folder](#folder)

### restoreTrashedFolder
Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.


```js
box_content.restoreTrashedFolder({
  "FOLDER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Folder](#folder)

#### Output
* output [Folder](#folder)

### updateFolder
Used to update information about the folder. To move a folder, update the ID of its parent. To enable an email address that can be used to upload files to this folder, update the folder_upload_email attribute. An optional If-Match header can be included to ensure that client only updates the folder if it knows about the latest version.

Used to create a shared link for this particular folder. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}

To add or remove an item from a collection, you do a PUT on that item and change the list of collections it belongs to. Philosophically, this is similar to the way “move” operations work on files and folders: you do a PUT on the item and change its parent. It’s the same idea with collections, except you’re changing which collection(s) the item belongs to instead of the folder it belongs to. Currently the only collection available is the favorites collection, and you’ll need to know it’s ID for the user that is making the API call, since every user has a different favorites collection_id.
The Add/Remove API handling will check all ids passed in before performing any add/removal operations. If any collection ids are malformed or do not exist in the user’s account, the API call will throw a 400. Only if all of the collection ids are valid will the adds and removals be carried out.


```js
box_content.updateFolder({
  "FOLDER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Folder](#folder)
  * If-Match `string`: This is in the ‘etag’ field of the folder object.

#### Output
* output [Folder](#folder)

### getFolderCollaborations
Use this to get a list of all the collaborations on a folder i.e. all of the users that have access to that folder.


```js
box_content.getFolderCollaborations({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page. The default is 100 and the max is 1000.
  * offset `integer`: The item at which to begin the response

#### Output
* output [CollaborationList](#collaborationlist)

### copyFolder
Used to create a copy of a folder in another folder. The original version of the folder will not be altered.


```js
box_content.copyFolder({
  "FOLDER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Folder](#folder)

#### Output
* output [Folder](#folder)

### getFolderItems
Retrieves the files and/or folders contained within this folder without any other metadata about the folder. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.


```js
box_content.getFolderItems({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page. The default is 100 and the max is 1000.
  * offset `string`: The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back. The default is 0.

#### Output
* output [ItemReferenceList](#itemreferencelist)

### getAllFolderMetadata
Used to retrieve all metadata associated with a given folder


```js
box_content.getAllFolderMetadata({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`

#### Output
* output [MetadataList](#metadatalist)

### deleteFolderMetadata
Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.


```js
box_content.deleteFolderMetadata({
  "FOLDER_ID": "",
  "SCOPE": "",
  "TEMPLATE": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`

#### Output
*Output schema unknown*

### getFolderMetadata
Used to retrieve the metadata template instance for a corresponding Box folder.


```js
box_content.getFolderMetadata({
  "FOLDER_ID": "",
  "SCOPE": "",
  "TEMPLATE": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`

#### Output
* output [Metadata](#metadata)

### createFolderMetadata
Used to create the metadata template instance for a corresponding Box folder. When creating metadata, only values that adhere to the metadata template schema will be accepted.


```js
box_content.createFolderMetadata({
  "FOLDER_ID": "",
  "SCOPE": "",
  "TEMPLATE": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`
  * body **required** [Metadata](#metadata)

#### Output
* output [Metadata](#metadata)

### updateFolderMetadata
Used to update the template instance. Updates can be either add, replace, remove , or test. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.


```js
box_content.updateFolderMetadata({
  "FOLDER_ID": "",
  "SCOPE": "",
  "TEMPLATE": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`
  * body **required** [UpdateMetadata](#updatemetadata)

#### Output
* output [Metadata](#metadata)

### deleteTrashedFolder
Permanently deletes an folder that is in the trash. The item will no longer exist in Box. This action cannot be undone.


```js
box_content.deleteTrashedFolder({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`

#### Output
*Output schema unknown*

### getTrashedFolder
Retrieves an folder that has been moved to the trash.


```js
box_content.getTrashedFolder({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [Folder](#folder)

### deleteFolderWatermark
Used to remove the watermark for a corresponding Box Folder.


```js
box_content.deleteFolderWatermark({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`

#### Output
* output [Watermark](#watermark)

### getFolderWatermark
Used to retrieve the watermark for a corresponding Box folder.


```js
box_content.getFolderWatermark({
  "FOLDER_ID": ""
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`

#### Output
* output [Watermark](#watermark)

### updateFolderWatermark
Used to apply or update the watermark for a corresponding Box folder. The endpoints accepts a JSON body describing the watermark to apply.


```js
box_content.updateFolderWatermark({
  "FOLDER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * FOLDER_ID **required** `string`
  * body **required** [Watermark](#watermark)

#### Output
* output [Watermark](#watermark)

### createGroupMembership
Used to add a member to a Group.


```js
box_content.createGroupMembership({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [GroupMembership](#groupmembership)

#### Output
* output [GroupMembership](#groupmembership)

### deleteGroupMembership
Deletes a specific group membership.


```js
box_content.deleteGroupMembership({
  "GROUP_MEMBERSHIP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_MEMBERSHIP_ID **required** `string`

#### Output
*Output schema unknown*

### getGroupMembership
Fetches a specific group membership entry.


```js
box_content.getGroupMembership({
  "GROUP_MEMBERSHIP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_MEMBERSHIP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [GroupMembership](#groupmembership)

### updateGroupMembership
Used to update a group membership.


```js
box_content.updateGroupMembership({
  "GROUP_MEMBERSHIP_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * GROUP_MEMBERSHIP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [GroupMembership](#groupmembership)

#### Output
* output [GroupMembership](#groupmembership)

### getEnterpriseGroups
Retrieves all of the groups for given enterprise. Must have permissions to see an enterprise's groups.


```js
box_content.getEnterpriseGroups({}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page. The default is 100 and the max is 1000.
  * offset `integer`: The item at which to begin the response.

#### Output
* output [GroupList](#grouplist)

### createGroup
Used to create a group.


```js
box_content.createGroup({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### deleteGroup
Permanently deletes a specific group.


```js
box_content.deleteGroup({
  "GROUP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_ID **required** `string`

#### Output
*Output schema unknown*

### getGroup
Used to get information about a group.


```js
box_content.getGroup({
  "GROUP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [Group](#group)

### updateGroup
Updates a specific group.


```js
box_content.updateGroup({
  "GROUP_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * GROUP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Group](#group)

#### Output
* output [Group](#group)

### getGroupCollaborations
Retrieves all of the group collaborations for a given group. Note this is only available to group admins.


```js
box_content.getGroupCollaborations({
  "GROUP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page. The default is 100 and the max is 1000.
  * offset `integer`: The item at which to begin the response.

#### Output
* output [CollaborationList](#collaborationlist)

### getGroupMemberships
Retrieves all of the members for a given group if the requesting user has access (see Group Object member_viewability_level).


```js
box_content.getGroupMemberships({
  "GROUP_ID": ""
}, context)
```

#### Input
* input `object`
  * GROUP_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: The maximum number of items to return in a page. The default is 100 and the max is 1000.
  * offset `integer`: The item at which to begin the response.

#### Output
* output [GroupMembershipList](#groupmembershiplist)

### createInvite
Invites an existing user to join an Enterprise. The existing user can not be part of another Enterprise and must already have a Box account. Once invited, the user will receive an email and prompt to accept the invitation within the Box web application. This method requires the "Manage An Enterprise" scope for the enterprise, which can be enabled within your developer console.


```js
box_content.createInvite({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [InviteUser](#inviteuser)

#### Output
* output [Invite](#invite)

### getInvite
Get status of the invite


```js
box_content.getInvite({
  "INVITE_ID": ""
}, context)
```

#### Input
* input `object`
  * INVITE_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [Invite](#invite)

### getLegalHoldPolicies
Get a list of Legal Hold Policies that belong to your Enterprise.


```js
box_content.getLegalHoldPolicies({}, context)
```

#### Input
* input `object`
  * policy_name `string`: Case insensitive prefix-match filter on Policy name.
  * limit `integer`: Limit result size to this number. Defaults to 100, maximum is 1,000.
  * marker `string`: Take from next_marker column of a prior call to get the next page

#### Output
* output [LegalHoldPolicyList](#legalholdpolicylist)

### createLegalHoldPolicy
Create a new Legal Hold Policy. Optional date filter may be passed. If Policy has a date filter, any Custodian assignments will apply only to file versions created or uploaded inside of the date range.


```js
box_content.createLegalHoldPolicy({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [LegalHoldPolicy](#legalholdpolicy)

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### deleteLegalHoldPolicy
Sends request to delete an existing Legal Hold Policy. Note that this is an asynchronous process - the Policy will not be fully deleted yet when the response comes back.


```js
box_content.deleteLegalHoldPolicy({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
*Output schema unknown*

### getLegalHoldPolicy
Get details of a single Legal Hold Policy


```js
box_content.getLegalHoldPolicy({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### updateLegalHoldPolicy
Update existing Legal Hold Policy. Only name and description can be modified.


```js
box_content.updateLegalHoldPolicy({
  "ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * ID **required** `string`
  * body **required** [LegalHoldPolicy](#legalholdpolicy)

#### Output
* output [LegalHoldPolicy](#legalholdpolicy)

### getLegalHoldPolicyAssignments
Get list of assignments for a single Policy.


```js
box_content.getLegalHoldPolicyAssignments({
  "ID": ""
}, context)
```

#### Input
* input `object`
  * ID **required** `string`

#### Output
* output [LegalHoldPolicyAssignmentList](#legalholdpolicyassignmentlist)

### createLegalHoldPolicyAssignment
Create a new Assignment, which will apply the Legal Hold Policy to the target of the Assignment.


```js
box_content.createLegalHoldPolicyAssignment({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateLegalHoldPolicyAssignment](#createlegalholdpolicyassignment)

#### Output
* output [LegalHoldPolicyAssignment](#legalholdpolicyassignment)

### deleteLegalHoldPolicyAssignment
Sends request to delete an existing Assignment. Note that this is an asynchronous process - the Assignment will not be fully deleted yet when the response comes back.


```js
box_content.deleteLegalHoldPolicyAssignment({
  "ASSIGNMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * ASSIGNMENT_ID **required** `string`

#### Output
*Output schema unknown*

### getLegalHoldPolicyAssignment
Get details of a single assignment.


```js
box_content.getLegalHoldPolicyAssignment({
  "ASSIGNMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * ASSIGNMENT_ID **required** `string`

#### Output
*Output schema unknown*

### createMetadataTemplate
Used to create a new metadata template with the specified schema.


```js
box_content.createMetadataTemplate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [MetadataTemplate](#metadatatemplate)

#### Output
* output [MetadataTemplate](#metadatatemplate)

### getEnterpriseMetadataTemplates
Used to retrieve all metadata templates within a user's enterprise. Currently only the enterprise scope is supported.


```js
box_content.getEnterpriseMetadataTemplates({
  "SCOPE": ""
}, context)
```

#### Input
* input `object`
  * SCOPE **required** `string`

#### Output
* output [MetadataTemplateList](#metadatatemplatelist)

### getMetadataTemplate
Used to retrieve the schema for a given metadata template.


```js
box_content.getMetadataTemplate({
  "SCOPE": "",
  "TEMPLATE": ""
}, context)
```

#### Input
* input `object`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`

#### Output
* output [MetadataTemplate](#metadatatemplate)

### updateMetadataTemplate
Used to update the schema of an existing template.


```js
box_content.updateMetadataTemplate({
  "SCOPE": "",
  "TEMPLATE": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * SCOPE **required** `string`
  * TEMPLATE **required** `string`
  * body **required** [UpdateMetadataTemplate](#updatemetadatatemplate)

#### Output
* output [MetadataTemplate](#metadatatemplate)

### getRetentionPolicies
Retrieves all of the retention policies for the given enterprise.


```js
box_content.getRetentionPolicies({}, context)
```

#### Input
* input `object`
  * policy_name `string`: A name to filter the retention policies by. A trailing partial match search is performed.
  * policy_type `string` (values: finite, indefinite): A policy type to filter the retention policies by.
  * created_by_user_id `string`: A user id to filter the retention policies by.

#### Output
* output [RetentionPolicyList](#retentionpolicylist)

### createRetentionPolicy
Used to create a new retention policy.


```js
box_content.createRetentionPolicy({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [RetentionPolicy](#retentionpolicy)

#### Output
* output [RetentionPolicy](#retentionpolicy)

### getRetentionPolicy
Used to retrieve information about a retention policy


```js
box_content.getRetentionPolicy({
  "POLICY_ID": ""
}, context)
```

#### Input
* input `object`
  * POLICY_ID **required** `string`

#### Output
* output [RetentionPolicy](#retentionpolicy)

### updateRetentionPolicy
Used to update a retention policy.


```js
box_content.updateRetentionPolicy({
  "POLICY_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * POLICY_ID **required** `string`
  * body **required** [RetentionPolicy](#retentionpolicy)

#### Output
* output [RetentionPolicy](#retentionpolicy)

### getRetentionPolicyAssignments
Returns a list of all retention policy assignments associated with a specified retention policy.


```js
box_content.getRetentionPolicyAssignments({
  "POLICY_ID": ""
}, context)
```

#### Input
* input `object`
  * POLICY_ID **required** `string`
  * type `string` (values: folder, enterprise): The type of the retention policy assignment to retrieve. Can either be folder or enterprise.

#### Output
* output [RetentionPolicyAssignmentList](#retentionpolicyassignmentlist)

### createRetentionPolicyAssignment
Returns a list of all retention policy assignments associated with a specified retention policy.


```js
box_content.createRetentionPolicyAssignment({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRetentionPolicyAssignment](#createretentionpolicyassignment)

#### Output
* output [RetentionPolicyAssignment](#retentionpolicyassignment)

### getRetentionPolicyAssignment
Used to retrieve information about a retention policy assignment.


```js
box_content.getRetentionPolicyAssignment({
  "RETENTION_POLICY_ASSIGNMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * RETENTION_POLICY_ASSIGNMENT_ID **required** `string`

#### Output
* output [RetentionPolicyAssignment](#retentionpolicyassignment)

### search
The search endpoint provides a powerful way of finding items that are accessible by a single user or an entire enterprise. Leverage the parameters listed below to generate targeted advanced searches.


```js
box_content.search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The string to search for; can be matched against item names, descriptions, text content of a file, and other fields of the different item types.
  * scope `string`: The scope for which you want to limit your search to. Can be user_content for a search limited to only the current user or enterprise_content for the entire enterprise. To enable the enterprise_content scope for an administrator, please contact us.
  * file_extensions `string`: Limit searches to specific file extensions like pdf,png,doc. Requires one or a set of comma delimited file extensions: file_extension_1,file_extension_2,....
  * created_at_range `string`: The date for when the item was created. Specify the date range by using RFC3339 timestamp variables separated by a comma: from_date,to_date (e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively.
  * updated_at_range `string`: The date for when the item was last updated. Specify the date range by using RFC3339 variables separated by a comma: from_date,to_date(e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively.
  * size_range `integer`: Filter by a file size range. Specify the file size range in bytes separated by a comma:lower_bound_size,upper_bound_size, where 1MB is equivalent to 1000000 bytes. Trailing lower_bound_size, and leading ,upper_bound_size commas are also accepted as parameters.
  * owner_user_ids `string`: Search by item owners. Requires one or a set of comma delimited user_ids: user_id_1,user_id_2,...
  * ancestor_folder_ids `string`: Limit searches to specific parent folders. Requires one or a set of comma delimited folder_ids: folder_id_1,folder_id_2,.... Parent folder results will also include items within subfolders.
  * content_types `string`: Limit searches to specific Box designated content types. Can be name, description, file_content, comments, or tags. Requires one or a set of comma delimited content_types: content_type_1,content_type_2,....
  * type `string` (values: file, folder, web_link): The type you want to return in your search. Can be file, folder, or web_link.
  * trash_content `string`: Allows you to search within the trash. Can be trashed_only or non_trashed_only. Searches without this parameter default to non_trashed_only.
  * mdfilters `string`: Filters for a specific metadata template for files with metadata object associations. The filters are to be placed in a single JSON object. Please refer the MDFilters object in the definitions section of the swagger.json
  * limit `integer`: Number of search results to return. The default is 30 and the max is 200.
  * offset `integer`: The search result at which to start the response. The default is 0.

#### Output
* output [ObjectList](#objectlist)

### getSharedItems
Shared items are any files or folders that are represented by a shared link. Shared items are different from other API resources in that a shared resource doesn’t necessarily have to be in the account of the user accessing it. The actual shared link itself is used along with a normal access token.
Used to retrieve the metadata about a shared item when only given a shared link. Because of varying permission for shared links, a password may be required to retrieve the shared item. Once the item has been retrieved, you can make API requests against the actual resource /files/{id} or /folders/{id} as long as the shared link and optional password are in the header.


```js
box_content.getSharedItems({
  "BoxApi": ""
}, context)
```

#### Input
* input `object`
  * BoxApi **required** `string`: The usage is 'BoxApi: shared_link=SHARED_LINK&shared_link_password=SHARED_LINK_PASSWORD'

#### Output
* output `object`

### createTaskAssignment
Used to assign a task to a single user. There can be multiple assignments on a given task.


```js
box_content.createTaskAssignment({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateTaskAssignment](#createtaskassignment)

#### Output
* output [TaskAssignment](#taskassignment)

### deleteTaskAssignment
Deletes a specific task assignment.


```js
box_content.deleteTaskAssignment({
  "TASK_ASSIGNMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * TASK_ASSIGNMENT_ID **required** `string`

#### Output
*Output schema unknown*

### getTaskAssignment
Fetches a specific task assignment.


```js
box_content.getTaskAssignment({
  "TASK_ASSIGNMENT_ID": ""
}, context)
```

#### Input
* input `object`
  * TASK_ASSIGNMENT_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [TaskAssignment](#taskassignment)

### updateTaskAssignment
Used to update a task assignment.


```js
box_content.updateTaskAssignment({
  "TASK_ASSIGNMENT_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * TASK_ASSIGNMENT_ID **required** `string`
  * body **required** [TaskAssignment](#taskassignment)

#### Output
* output [TaskAssignment](#taskassignment)

### createTask
Used to create a single task for single user on a single file.


```js
box_content.createTask({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Task](#task)

#### Output
* output [Task](#task)

### deleteTask
Permanently deletes a specific task.


```js
box_content.deleteTask({
  "TASK_ID": ""
}, context)
```

#### Input
* input `object`
  * TASK_ID **required** `string`

#### Output
*Output schema unknown*

### getTask
Fetches a specific task.


```js
box_content.getTask({
  "TASK_ID": ""
}, context)
```

#### Input
* input `object`
  * TASK_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [Task](#task)

### updateTask
Updates a specific task.


```js
box_content.updateTask({
  "TASK_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * TASK_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Task](#task)

#### Output
* output [Task](#task)

### getTaskAssignments
Retrieves all of the assignments for a given task.


```js
box_content.getTaskAssignments({
  "TASK_ID": ""
}, context)
```

#### Input
* input `object`
  * TASK_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [TaskAssignmentList](#taskassignmentlist)

### getEnterpriseUsers
Returns a list of all users for the Enterprise along with their user_id, public_name, and login.


```js
box_content.getEnterpriseUsers({}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * filter_term `string`: A string used to filter the results to only users starting with the filter_term in either the name or the login.
  * limit `integer`: The number of records to return. The default is 100 and the max is 1000.
  * offset `integer`: The record at which to start. The default is 0.
  * user_type `string` (values: all, external, managed): The type of user to search for. Valid values are all, external or managed.  If nothing is provided, the default behavior will be managed only

#### Output
* output [UserList](#userlist)

### createUser
Used to provision a new user in an enterprise. This method only works for enterprise admins.


```js
box_content.createUser({
  "body": {}
}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [User](#user)

#### Output
* output [User](#user)

### getCurrentUser
Retrieves information about the user who is currently logged in i.e. the user for whom this auth token was generated.


```js
box_content.getCurrentUser({}, context)
```

#### Input
* input `object`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [User](#user)

### deleteUser
Deletes a user in an enterprise account.


```js
box_content.deleteUser({
  "USER_ID": ""
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * notify `boolean`
  * force `boolean`

#### Output
*Output schema unknown*

### getUser
Retrieves information about a user in the enterprise. Requires enterprise administration authorization.


```js
box_content.getUser({
  "USER_ID": ""
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [User](#user)

### updateUser
Used to edit the settings and information about a user. This method only works for enterprise admins. To roll a user out of the enterprise (and convert them to a standalone free user), update the special enterprise attribute to be null.

Used to convert one of the user’s confirmed email aliases into the user’s primary login.


```js
box_content.updateUser({
  "USER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [User](#user)

#### Output
* output [User](#user)

### getEmailAliases
Retrieves all email aliases for this user. The collection of email aliases does not include the primary login for the user; use GET /users/USER_ID to retrieve the login email address.


```js
box_content.getEmailAliases({
  "USER_ID": ""
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`

#### Output
* output [EmailAliasList](#emailaliaslist)

### addEmailAlias
Adds a new email alias to the given user’s account.


```js
box_content.addEmailAlias({
  "USER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * body **required** [EmailAlias](#emailalias)

#### Output
* output [EmailAlias](#emailalias)

### deleteUserEmailAlias
Removes an email alias from a user.


```js
box_content.deleteUserEmailAlias({
  "USER_ID": "",
  "EMAIL_ALIAS_ID": ""
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * EMAIL_ALIAS_ID **required** `string`

#### Output
*Output schema unknown*

### updateUserFolder
Moves all of the owned content from within one user’s folder into a new folder in another user’s account. You can move folders across users as long as the you have administrative permissions and the ‘source’ user owns the folders. To move everything from the root folder, use “0” which always represents the root folder of a Box account.


```js
box_content.updateUserFolder({
  "USER_ID": "",
  "FOLDER_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * FOLDER_ID **required** `string`
  * notify `boolean`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [Folder](#folder)

#### Output
* output [Folder](#folder)

### getUserGroupMembership
Retrieves all of the group memberships for a given user. Note this is only available to group admins. To retrieve group memberships for the user making the API request, use the users/me/memberships endpoint.


```js
box_content.getUserGroupMembership({
  "USER_ID": ""
}, context)
```

#### Input
* input `object`
  * USER_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * limit `integer`: Default is 100. Max is 1000
  * offset `integer`: The item at which to begin the response

#### Output
* output [GroupMembershipList](#groupmembershiplist)

### createWebLink
Creates a web link object within a given folder.


```js
box_content.createWebLink({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [WebLink](#weblink)

#### Output
* output [WebLink](#weblink)

### deleteWebLink
Deletes a web link and moves it to the trash


```js
box_content.deleteWebLink({
  "WEB_LINK_ID": ""
}, context)
```

#### Input
* input `object`
  * WEB_LINK_ID **required** `string`

#### Output
*Output schema unknown*

### getWebLink
Use to get information about the web link.


```js
box_content.getWebLink({
  "WEB_LINK_ID": ""
}, context)
```

#### Input
* input `object`
  * WEB_LINK_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response

#### Output
* output [WebLink](#weblink)

### updateWebLink
Updates information for a web link.


```js
box_content.updateWebLink({
  "WEB_LINK_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * WEB_LINK_ID **required** `string`
  * fields `string`: Attribute(s) to include in the response
  * body **required** [WebLink](#weblink)

#### Output
* output [WebLink](#weblink)

### getWebhooks
Returns all defined webhooks for the requesting application and user, up to the limit. If no limit is supplied then Box uses the default limit of 100.
If more than limit webhooks are defined then Box returns the webhooks in batches. When the results are batched, Box sends limit webhooks along with a next_marker field in the response object. The value of the next_marker field is a marker string that you can use in later requests to tell Box which batch to send next.
When you send a request that includes a marker string, Box sends the next batch of webhooks, beginning after the last webhook of the previous batch. When the response contains the last of the defined webhooks, Box omits the next_marker field from its response.
You can use limit and marker together with the marker string returned in the next_marker field to paginate lists of webhooks.


```js
box_content.getWebhooks({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of webhooks to return per page
  * marker `string`: A marker string returned by Box if the result contains less than the full number of webhooks that are defined

#### Output
* output [WebhookList](#webhooklist)

### createWebhook
Create Webhook


```js
box_content.createWebhook({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)

### deleteWebhook
Permanently deletes a webhook


```js
box_content.deleteWebhook({
  "WEBHOOK_ID": ""
}, context)
```

#### Input
* input `object`
  * WEBHOOK_ID **required** `string`

#### Output
*Output schema unknown*

### getWebhook
Get a Webhook


```js
box_content.getWebhook({
  "WEBHOOK_ID": ""
}, context)
```

#### Input
* input `object`
  * WEBHOOK_ID **required** `string`

#### Output
* output [Webhook](#webhook)

### updateWebhook
Update a Webhook


```js
box_content.updateWebhook({
  "WEBHOOK_ID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * WEBHOOK_ID **required** `string`
  * body **required** [Webhook](#webhook)

#### Output
* output [Webhook](#webhook)



## Definitions

### AssignmentCounts
* AssignmentCounts `object`: Counts of assignments within this policy by apply-to type.
  * file `integer`
  * file_version `integer`
  * folder `integer`
  * user `integer`

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

### ChunkPagination
* ChunkPagination `object`
  * chunk_size `integer`
  * next_stream_position `string`

### Collaboration
* Collaboration `object`: Collaborations are used to set and apply access permissions for users and groups to files and folders, similar to access control lists.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * accessible_by [UserReference](#userreference)
  * acknowledged_at `string`: When the status of this collab was changed
  * can_view_path `boolean`: Whether view path collaboration feature is enabled or not. View path collaborations allow the invitee to see the entire ancestral path to the associated folder. The user will not gain privileges in any ancestral folder
  * created_at `string`: The time this collaboration was created
  * created_by [UserReference](#userreference)
  * expires_at `string`: The time this collaboration will expire
  * item [ItemReference](#itemreference)
  * modified_at `string`: The time this collaboration was last modified
  * role `string` (values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner, owner): The level of access this user or group has. Can be editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner, or owner
  * status `string`: The status of this collab. Can be accepted, pending, or rejected

### CollaborationList
* CollaborationList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Collaboration](#collaboration)

### Collection
* Collection Object `object`: Collections contain information about the items contained inside of them, including files and folders. The only collection available currently is a “Favorites” collection. The contents of the collection are discovered in a similar way in which the contents of a folder are discovered.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * collection_type `string` (values: favorites): The type of the collection. This is used to determine the proper visual treatment for Box-internally created collections. Initially only “favorites” collection-type will be supported.
  * name `string`: The name of this collection. The only collection currently available is named “Favorites”

### CollectionList
* CollectionList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Collection](#collection)

### Comment
* Comment Object `object`: Comments are messages generated by Box users. Each message is tied to a specific file. You can create comments independently or create them as responses to other comments.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * created_at `string`: The time this comment was created
  * created_by [UserReference](#userreference)
  * is_reply_comment `boolean`: Whether or not this comment is a reply to another comment
  * item [ItemReference](#itemreference)
  * message `string`: The comment text that the user typed
  * modified_at `string`: The time this comment was last modified
  * tagged_message `string`: The string representing the comment text with @mentions included. @mention format is @[id:username]. Field is not included by default.

### CommentList
* CommentList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Comment](#comment)

### CopyFile
* CopyFile `object`
  * name `string`
  * parent `object`
    * id `string`
  * version `string`

### CreateLegalHoldPolicyAssignment
* CreateLegalHoldPolicyAssignment `object`: Request object to create a new Legal Policy Hold Assignment
  * assign_to [Reference](#reference)
  * policy_id `string`: ID of Policy to create Assignment for.

### CreateRetentionPolicyAssignment
* CreateRetentionPolicyAssignment `object`: Request object to create a new Retention Policy Assignment
  * assign_to [Reference](#reference)
  * policy_id `string`: ID of Policy to create Assignment for.

### CreateTaskAssignment
* CreateTaskAssignment `object`
  * assign_to [UserReference](#userreference)
  * task [Task](#task)

### DevicePinner
* Device Pinner Object `object`: Device pins allow enterprises to control what devices can use native Box applications. To learn more about device pinning, please see our  documentation.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * created_at `string`: The time this pin was created
  * modified_at `string`: The time this pin was modified
  * owned_by [UserReference](#userreference)
  * product_name `string`: The type of device being pinned

### DevicePinnerList
* DevicePinnerList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [DevicePinner](#devicepinner)

### EmailAlias
* EmailAlias `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * email `string`
  * is_confirmed `boolean`

### EmailAliasList
* EmailAliasList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [EmailAlias](#emailalias)

### Enterprise
* Enterprise `object`: Mini representation of this user’s enterprise, including the ID of its enterprise.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * name `string`

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
  * request_id `string`
  * status `integer`
  * type `string` (values: error)

### Event
* Event Object `object`
  * additional_details `object`: This object provides additional information about the event if available. This can include how a user performed an event as well as additional information to correlate an event to external Keysafe logs. Not all events have an additional_details object.  This object is only available in the Enterprise Events.
  * created_by [UserReference](#userreference)
  * event_id `string`: The id of the event, used for de-duplication purposes
  * event_type `string`: One of the event types
  * session_id `string`: The session of the user that performed the action. Not all events will populate this attribute.
  * source `object`: The object that was modified. See Object definitions for appropriate object: file, folder, comment, etc. Not all events have a source object.
  * type `string` (values: event)

### EventList
* EventList `object`
  * chunk_size `integer`
  * next_stream_position `string`
  * entries `array`
    * items [Event](#event)

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

### FileReferenceList
* FileReferenceList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [FileReference](#filereference)

### FileVersion
* FileVersion `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * sha1 `string`: The sha1 hash of this file.
  * created_at `string`
  * modified_at `string`
  * modified_by [UserReference](#userreference)
  * name `string`
  * size `integer`

### FileVersionLegalHold
* File Version Legal Hold object `object`: File-Version-Legal-Hold is an entity representing all holds on a File Version. Type is legal-hold.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * deleted_at `string`: Time that this File-Version-Legal-Hold was deleted.
  * file [FileReference](#filereference)
  * file_version [FileVersionReference](#fileversionreference)
  * legal_hold_policy_assignments `array`: List of assignments contributing to this Hold.
    * items [LegalHoldPolicyAssignment](#legalholdpolicyassignment)

### FileVersionLegalHoldList
* FileVersionLegalHoldList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [FileVersionLegalHold](#fileversionlegalhold)

### FileVersionList
* FileVersionList `object`: A collection of FileVersions.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [FileVersion](#fileversion)

### FileVersionReference
* FileVersionReference `object`: The version information of the file.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * sha1 `string`: The sha1 hash of this file.

### FileVersionRetention
* File Version Retention Object `object`: A retention policy blocks permanent deletion of content for a specified amount of time. Admins can apply policies to specified folders, or an entire enterprise. A file version retention is a record for a retained file version. To use this feature, you must have the manage retention policies scope enabled for your API key via your application management console. For more information about retention policies, please visit our help documentation.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * applied_at `string`: The time that this file version retention was created.
  * disposition_at `string`: The time that the retention period expires on this file version retention.
  * file [FileReference](#filereference)
  * file_version [FileVersionReference](#fileversionreference)
  * winning_retention_policy [RetentionPolicyReference](#retentionpolicyreference)

### FileVersionRetentionList
* FileVersionRetentionList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [FileVersionRetention](#fileversionretention)

### Folder
* Folder Object `object`: Folders contain information about the items contained inside of them, including files and other folders. There is also a set of metadata such as who owns the folder and when it was modified that is also returned. When accessing other resources that make reference to folders, a ‘mini folder’ object will be used. The 'mini folder' object will return type, id, sequence_id, etag, and name.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.
  * allowed_invitee_roles `array`: Folder collaboration collaboration settings allowed by the enterprise administrator.
    * items `string`
  * allowed_shared_link_access_levels `array` (values: collaborators, open, company): Access level settings for shared links set by administrator. Can be collaborators, open, or company.
    * items `string`
  * can_non_owners_invite `boolean`: Whether non-owners can invite collaborators to this folder.
  * collections `array`
    * items [Collection](#collection)
  * content_created_at `string`: The time the folder or its contents were originally created (according to the uploader).May be null for some folders such as root or trash.
  * content_modified_at `string`: The time the folder or its contents were last modified (according to the uploader).
  * created_at `string`: The time the folder was created.
  * created_by [UserReference](#userreference)
  * description `string`: The description of the folder.
  * folder_upload_email [FolderUploadEmail](#folderuploademail)
  * has_collaborations `boolean`: Whether this folder has any collaborators.
  * is_externally_owned `boolean`: Whether this folder is owned by a user outside of the enterprise
  * item_collection [ItemCollection](#itemcollection)
  * item_status `string`: Whether this item is deleted or not.
  * modified_by [UserReference](#userreference)
  * owned_by [UserReference](#userreference)
  * parent [ItemReference](#itemreference)
  * path_collection [PathCollection](#pathcollection)
  * permissions [FolderPermissions](#folderpermissions)
  * purged_at `string`: The time the folder or its contents will be purged from the trash.
  * shared_link [SharedLink](#sharedlink)
  * size `integer`: The folder size in bytes. Be careful parsing this integer, it can easily go into EE notation: see IEEE754 format.
  * sync_state `string` (values: synced, not_synced, partially_synced): Whether this folder will be synced by the Box sync clients or not. Can be synced, not_synced, or partially_synced.
  * tags `array`: All tags applied to this folder.
    * items `string`
  * trashed_at `string`: The time the folder or its contents were put in the trash.
  * watermark_info [WatermarkInfo](#watermarkinfo)

### FolderPermissions
* FolderPermissions `object`: The permissions that the current user has on the folder
  * can_download `boolean`
  * can_invite_collaborator `boolean`
  * can_rename `boolean`
  * can_set_share_access `boolean`
  * can_share `boolean`
  * can_upload `boolean`
  * cand_delete `boolean`

### FolderUploadEmail
* FolderUploadEmail `object`: The upload email address for this folder. Null if not set.
  * access `string`
  * email `string`

### Group
* Group Object `object`: Groups contain a set of users, and can be used in place of users in some operations, such as collaborations.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * name `string`: The name of this group
  * created_at `string`: When this groups was created on Box’s servers
  * description `string`: Human readable description of this Group.  This can be up to 255 characters long. Needs to be accessed via the fields parameter.
  * external_sync_identifier `string`: An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group.  Example values of this field could be an Active Directory Object ID or a Google Group ID.  We recommend use of this field in order to avoid issues when group names are updated in either Box or external systems. Needs to be accessed via the fields parameter.
  * invitability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can invite this group to collaborate on folders (Create Collaboration).
  * member_viewability_level `string` (values: admins_only, admins_and_members, all_managed_users): Specifies who can view the members of this group (Get Memberships for Group).
  * modified_at `string`: When this group was last updated on the Box servers
  * provenance `string`: Keeps track of which external source this group is coming from (e.g. "Active Directory", "Google Groups", "Facebook Groups").  This should be a human-readable identifier up to 255 characters long.  Setting this will also prevent Box users from editing this group directly through Box.  This is desirable for one-way syncing of groups. Needs to be accessed via the fields parameter.

### GroupList
* GroupList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Group](#group)

### GroupMembership
* Membership Object `object`: Membership is used to signify that a user is part of a group. Membership can be added, requested, updated and deleted. You can also get all members of a group, or all memberships for a given user.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * created_at `string`: The time this membership was created.
  * group [GroupReference](#groupreference)
  * modified_at `string`: The time this membership was last modified.
  * role `string` (values: member, admin): The role of the user in the group.
  * user [UserReference](#userreference)

### GroupMembershipList
* GroupMembershipList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [GroupMembership](#groupmembership)

### GroupReference
* GroupReference `object`: Mini representation of the group, including id and name of group.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * name `string`: The name of this group

### Invite
* Invite `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * actionable_by [UserReference](#userreference)
  * created_at `string`
  * invited_by [UserReference](#userreference)
  * invited_to [Enterprise](#enterprise)
  * modified_at `string`
  * status `string`

### InviteUser
* InviteUser `object`
  * actionable_by [UserReference](#userreference)
  * enterprise [Reference](#reference)

### ItemCollection
* ItemCollection `object`: A collection of mini file and folder objects contained in this folder.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [FileReference](#filereference)

### ItemReference
* ItemReference `object`: It references either a file or a folder
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.

### ItemReferenceList
* ItemReferenceList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [ItemReference](#itemreference)

### LegalHoldPolicy
* Legal Hold Policy object `object`: Legal Hold Policy information describes the basic characteristics of the Policy, such as name, description, and filter dates.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * assignment_count [AssignmentCounts](#assignmentcounts)
  * created_at `string`: Time the Policy was created.
  * created_by [UserReference](#userreference)
  * deleted_at `string`: Time that the policy release request was sent.
  * description `string`: The type and id of the content that is under retention. The type can either be folder or enterprise.
  * filter_ended_at `string`: User-specified, optional date filter applies to Custodian assignments only.
  * filter_started_at `string`: User-specified, optional date filter applies to Custodian assignments only.
  * modified_at `string`: Time that the Policy itself was modified. Does not update when assignments are added or removed.
  * policy_name `string`: Name of the Policy. This is limited to 254 characters.
  * release_notes `string`: Notes around why the policy was released. Optional property with a 500 character limit.
  * status `string` (values: active, applying, releasing, released)

### LegalHoldPolicyAssignment
* Legal Hold Policy Assignment object `object`: Legal Hold Assignments are used to assign Legal Hold Policies to Custodians, Folders, Files, or File Versions. Creating a Legal Hold Assignment puts a hold on the File-Versions that belong to the Assignment's 'apply-to' entity.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * assigned_at `string`: Time the Assignment was created.
  * assigned_by [UserReference](#userreference)
  * assigned_to [ItemReference](#itemreference)
  * deleted_at `string`: Time that the Assignment release request was sent. 
  * legal_hold_policy [RetentionPolicyReference](#retentionpolicyreference)

### LegalHoldPolicyAssignmentList
* LegalHoldPolicyAssignmentList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [LegalHoldPolicyAssignment](#legalholdpolicyassignment)

### LegalHoldPolicyList
* LegalHoldPolicyList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [LegalHoldPolicy](#legalholdpolicy)

### Lock
* Lock `object`: The lock held on the file.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * created_at `string`
  * created_by [UserReference](#userreference)
  * expired_at `string`
  * is_download_prevented `boolean`

### MarkerPagination
* MarkerPagination `object`
  * limit `integer`
  * next_marker `string`
  * prev_marker `string`

### Metadata
* Metadata Object `object`: Metadata can be used for many purposes. Enterprises may want to have a better way to organize their digital assets for their marketing teams or developers may want to provide advanced content functionality such as facilitating workflows or approvals. Metadata is also visible in the Box Web Application. To learn more, please visit the help documentation.

### MetadataList
* MetadataList `object`: A collection of Metadata objects
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Metadata](#metadata)

### MetadataTemplate
* Metadata Template Object `object`: Metadata that belongs to a file or folder is grouped by templates. Templates allow the metadata service to provide a multitude of services, such as pre-defining sets of key:value pairs or schema enforcement on specific fields.
  * displayName `string`: The display name of the template. The character limit is 4096.
  * fields `array`: The ordered set of key:value pairs for the template.
    * items [TemplateFields](#templatefields)
  * hidden `boolean`: Whether this template is hidden in the UI
  * scope `string`: The scope of the object.
  * templateKey `string`: A unique identifier for the template. The identifier must be unique across the scope of the enterprise to which the metadata template is being applied to. Defaults to a string derived from the displayName if no value is provided.

### MetadataTemplateList
* MetadataTemplateList `object`: A collection Metadata templates
  * limit `integer`
  * next_marker `string`
  * prev_marker `string`
  * entries `array`
    * items [MetadataTemplate](#metadatatemplate)

### ObjectList
* ObjectList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items `object`

### Pagination
* Pagination `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`

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

### RealtimeServer
* RealtimeServer `object`
  * max_retries `integer`
  * retry_timeout `integer`
  * ttl `integer`
  * type `string`
  * url `string`

### RealtimeServerList
* RealtimeServerList `object`
  * chunk_size `integer`
  * next_stream_position `string`
  * entries `array`
    * items [RealtimeServer](#realtimeserver)

### Reference
* Reference `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)

### RetentionPolicy
* Retention Policy Object `object`: A retention policy blocks permanent deletion of content for a specified amount of time. Admins can create retention policies and then later assign them to specific folders or their entire enterprise.  To use this feature, you must have the manage retention policies scope enabled for your API key via your application management console. For more information about retention policies, please visit our help documentation. 
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * policy_name `string`: The name given to the retention policy
  * created_at `string`: The time that the retention policy was created.
  * created_by [UserReference](#userreference)
  * disposition_action `string` (values: permanently_delete, remove_retention): The disposition action of the retention policy. This actioncan be permanently_delete, which will cause the content retained by the policy to be permanently deleted, or remove_retention, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy time period has passed.
  * modified_at `string`: The time that the retention policy was last modified.
  * policy_type `string` (values: finite, indefinite): The type of the retention policy. A retention policy type can either be finite, where a specific amount of time to retain the content is known upfront, or indefinite, where the amount of time to retain the content is still unknown.
  * retention_length `integer`: The length of the retention policy. This length specifies the duration in days that the retention policy will beactive for after being assigned to content.
  * status `string` (values: active, retired): The status of a retention policy. The status of a policy will be active, unless explicitly retired by an administrator, in which case the status will be retired. Once a policyhas been retired, it cannot become active again.

### RetentionPolicyAssignment
* Retention Policy Assignment Object `object`: The retention policy assignment endpoint provides a way for admins to apply a retention policy on a per-folder basis, or place a blanket policy over the entire enterprise.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * assigned_at `string`: The time that the retention policy assignment was created.
  * assigned_by [UserReference](#userreference)
  * assigned_to [ItemReference](#itemreference)
  * retention_policy [RetentionPolicyReference](#retentionpolicyreference)

### RetentionPolicyAssignmentList
* RetentionPolicyAssignmentList `object`
  * entries `array`
    * items [RetentionPolicyAssignment](#retentionpolicyassignment)

### RetentionPolicyList
* RetentionPolicyList `object`
  * entries `array`
    * items [RetentionPolicy](#retentionpolicy)

### RetentionPolicyReference
* RetentionPolicyReference `object`: Mini representation of the retention policy
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * policy_name `string`: The name given to the retention policy

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

### Task
* Task Object `object`: Tasks enabled file-centric workflows in Box. User can create tasks on files and assign them to collaborators on Box. You can read more about tasks in Box here.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * action `string` (values: review): The action the task assignee will be prompted to do. Must be review
  * created_at `string`: When this task was created
  * created_by [UserReference](#userreference)
  * due_at `string`: The date at which this task is due
  * is_completed `boolean`: Whether or not this task has been completed
  * item [FileReference](#filereference)
  * message `string`: A message that will be included with this task
  * task_assignment_collection [TaskAssignmentList](#taskassignmentlist)

### TaskAssignment
* TaskAssignment `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * assigned_at `string`: The date at which this task assignment was assigned
  * assigned_by [UserReference](#userreference)
  * assigned_to [UserReference](#userreference)
  * completed_at `string`: The date at which this task assignment was completed
  * item [FileReference](#filereference)
  * message `string`: A message that will be included with this task assignment
  * reminded_at `string`: The date at which this task assignment was reminded
  * resolution_state `string` (values: completed, incomplete, approved, rejected): State of this assignment (complete/incomplete)

### TaskAssignmentList
* TaskAssignmentList `object`: A collection Task Assignment.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [TaskAssignment](#taskassignment)

### TaskList
* TaskList `object`: A collection Tasks.
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Task](#task)

### TemplateFields
* TemplateFields `object`
  * description `string`: A description of the field. The character limit is 4096. All characters are allowed.
  * displayName `string`: The display name of the field. The character limit is 4096. All characters are allowed.
  * hidden `boolean`
  * key `string`: A unique identifier for the field. The identifier must be unique within the template to which it belongs. The character limit is 256. All characters are allowed.
  * options `array`
    * items `object`
      * key `string`
  * type `string` (values: string, enum, float, date): The data type of the field's value.

### UpdateMetadata
* UpdateMetadata `array`
  * items `object`
    * from `string`: Required for move or copy. The path that designates the source key, in the format of a JSON-Pointer, formatted in the same way as path. Used in conjunction with path: from specifies the source, path specifies the destination.
    * op **required** `string` (values: add, replace, remove, test, move, copy): The operation type. Must be add, replace, remove , test, move, or copy.
    * path **required** `string`: The path that designates the key, in the format of a JSON-Pointer. Since all keys are located at the root of the metadata instance, the key must be prefixed with a /. Special characters ~ and / in the key must be escaped according to JSON-Pointer specification. The value at the path must exist for the operation to be successful.
    * value `string`: The value to be set or tested. Required for add, replace, and test operations. For add, if value already exists, then previous value will be overwritten by the new value. For replace, the metadata value must exist before replacing.For test, the value of the existing metadata instance must match the specified value.

### UpdateMetadataTemplate
* UpdateMetadataTemplate `array`
  * items `object`
    * data `object`: The data for the operation.  Can vary depending on the operation.
    * enumOptionKeys `array`: For operations that affect multiple enum options, the keys of the enum options to be affected.
      * items `string`
    * fieldKey `string`: For operations that affect a specific field, the key of the field to be affected.
    * fieldKeys `array`: For operations that affect multiple fields, the keys of the fields to be affected.
      * items `string`
    * op **required** `string` (values: addEnumOption, addField, editEnumOption, editField, editTemplate, removeEnumOption, removeField, reorderEnumOptions, reorderFields): The operation name.

### User
* User Object `object`: The users endpoint is used for managing a user and its content. For an individual user, this includes their own user information and content. For an enterprise admin, this includes both the individual user and any other users in the admin’s enterprise account.
  * id `string`: Unqiue string identifying this user.
  * login `string`: The email address this user uses to login.
  * name `string`: Name of this user
  * type `string` (values: user)
  * address `string`: The user’s address.
  * avatar_url `string`: URL of this user’s avatar image.
  * can_see_managed_users `boolean`: Whether this user can see other enterprise users in her contact list.
  * created_at `string`: The time this user was created.
  * enterprise [Enterprise](#enterprise)
  * hostname `string`: The root (protocol, subdomain, domain) of any links that need to be generated for this user
  * is_exempt_from_device_limits `boolean`: Whether to exempt this user from Enterprise device limits.
  * is_exempt_from_login_verification `boolean`: Whether or not this user must use two-factor authentication.
  * is_external_collab_restricted `boolean`: Whether this user is allowed to collaborate with users outside her enterprise.
  * is_sync_enabled `boolean`: Whether or not this user can use Box Sync.
  * job_title `string`: The user’s job title.
  * language `string`: The language of this user. (ISO 639-1 Language Code)
  * max_upload_size `integer`: The maximum individual file size in bytes this user can have.
  * modified_at `string`: The time this user was last modified.
  * my_tags `array`: Tags for all files and folders owned by this user.
    * items `string`
  * phone `string`: The user’s phone number.
  * role `string` (values: admin, coadmin, user): This user’s enterprise role. Can be admin, coadmin, or user.
  * space_amount `integer`: The user’s total available space amount in bytes.
  * space_used `integer`: The amount of space in use by the user.
  * status `string` (values: active, inactive, cannot_delete_edit, cannot_delete_edit_upload): Can be active, inactive, cannot_delete_edit, or cannot_delete_edit_upload.
  * timezone `string`: The timezone of this user. (tz Database timezones)
  * tracking_codes `array`: An array of key/value pairs set by the user’s admin.
    * items `object`

### UserList
* UserList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [User](#user)

### UserReference
* UserReference `object`: It references a user
  * id `string`: Unqiue string identifying this user.
  * login `string`: The email address this user uses to login.
  * name `string`: Name of this user
  * type `string` (values: user)

### Watermark
* Watermark `object`
  * watermark [WatermarkReference](#watermarkreference)

### WatermarkInfo
* WatermarkInfo `array`
  * items `object`
    * is_watermarked `boolean`

### WatermarkReference
* WatermarkReference `object`: Waternmark a semi-transparent overlay on an embedded file preview that displays a viewer's email address or user ID and the time of access over a file's content
  * created_at `string`: When this watermark was created
  * imprint `string` (values: default)
  * modified_at `string`: When this task was modified

### WebLink
* Web Link Object `object`: Web links are objects that point to URLs. These objects are also known as bookmarks within the Box web application. Web link objects are treated similarly to file objects, so they will also support shared links, copy, permanent delete, and restore with the format /web_links/{WEB_LINK_ID} in place of /files/{FILE_ID}.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.
  * created_at `string`: When this file was created on Box’s servers.
  * created_by [UserReference](#userreference)
  * description `string`: The description accompanying the web link. This is visible within the Box web application.
  * item_status `string`: Whether this item is deleted or not.
  * modified_at `string`: When this file was last updated on the Box servers.
  * modified_by [UserReference](#userreference)
  * owned_by [UserReference](#userreference)
  * parent [ItemReference](#itemreference)
  * path_collection [PathCollection](#pathcollection)
  * purged_at `string`: When this file will be permanently deleted.
  * shared_link [SharedLink](#sharedlink)
  * trashed_at `string`: When this file was last moved to the trash.
  * url `string`: The URL this web link points to.

### Webhook
* Webhook Object `object`: When you create or retrieve a webhook a JSON object representing the webhook is returned to you. This JSON object's fields contain the name and ID of the webhook, along with configuration details such as its target and its notification URL.
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * address `string`: The notification URL of the webhook. The notification URL is the URL used by Box to send a notification when the webhook is triggered.
  * created_at `string`: An RFC-3339 timestamp identifying the time that the webhook was created.
  * created_by [UserReference](#userreference)
  * target [Reference](#reference)
  * triggers `array`: An array of event names. The events that webhooks support are listed in the 'Event Triggers' (https://docs.box.com/reference#event-triggers) section.
    * items `string`

### WebhookList
* WebhookList `object`
  * limit `integer`
  * offset `integer`
  * order `array`
    * items `object`
      * by `string`
      * direction `string`
  * total_count `integer`
  * entries `array`
    * items [Webhook](#webhook)


