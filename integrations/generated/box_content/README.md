# @datafire/box_content
The Box Content API gives you access to secure content management and content experience features for use in your own app. It strives to be RESTful and is organized around the main resources you’re familiar with from the Box web interface.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: getPendingCollaborations
Used to retrieve all pending collaboration invites for this user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "status": {
      "type": "string",
      "description": "Must be 'pending'",
      "enum": [
        "pending"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollaborationList"
}
```
## Operation: createCollaboration
Used to add a collaboration for a single user or a single group to a folder. Either an email address, a user ID, or a group id can be used to create the collaboration. If the collaboration is being created with a group, access to this endpoint is granted based on the group's invitability_level.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Collaboration"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaboration"
}
```
## Operation: deleteCollaboration
Used to delete a single collaboration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COLLAB_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "COLLAB_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollaboration
Used to get information about a single collaboration. All collaborations for a single folder can be retrieved through GET /folders/{id}/collaborations. A complete list of the user’s pending collaborations can also be retrieved.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COLLAB_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "status": {
      "type": "string",
      "description": "Can only be pending",
      "enum": [
        "pending"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "COLLAB_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaboration"
}
```
## Operation: updateCollaboation
Used to edit an existing collaboration. Descriptions of the various roles can be found here.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COLLAB_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Collaboration"
    }
  },
  "additionalProperties": false,
  "required": [
    "COLLAB_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Collaboration"
}
```
## Operation: getCollections
Retrieves the collections for the given user. Currently, only the favorites collection is supported.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollectionList"
}
```
## Operation: getCollectionItems
Retrieves the files and/or folders contained within this collection. Collection item lists behave a lot like getting a folder’s items.
Paginated results can be retrieved using the limit and offset parameters.
Sub-object fields can be requested via the ?fields parameter

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COLLECTION_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page."
    },
    "offset": {
      "type": "string",
      "description": "The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Offset of 2 would start at the 2nd record, not the second page. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back."
    }
  },
  "additionalProperties": false,
  "required": [
    "COLLECTION_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ItemReferenceList"
}
```
## Operation: createComment
Used to add a comment by the user to a specific file or comment (i.e. as a reply comment).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response."
    },
    "body": {
      "$ref": "#/definitions/Comment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: deleteComment
Permanently deletes a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COMMENT_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "COMMENT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getComment
Used to retrieve the message and metadata about a specific comment. Information about the user who created the comment is also included.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COMMENT_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "COMMENT_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: updateComment
Used to update the message of the comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "COMMENT_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response."
    },
    "body": {
      "$ref": "#/definitions/Comment"
    }
  },
  "additionalProperties": false,
  "required": [
    "COMMENT_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Comment"
}
```
## Operation: deleteDevicePin
Delete individual device pin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDevicePin
Gets information about an individual device pin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DevicePinner"
}
```
## Operation: getEnterpriseDevicePins
Gets all the device pins within a given enterprise. Must be an enterprise admin with the manage enterprise scope to make this call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ENTERPRISE_ID": {
      "type": "string"
    },
    "marker": {
      "type": "string",
      "description": "Needs not be passed or can be empty for first invocation of the API. Use the one returned in response for each subsequent call."
    },
    "limit": {
      "type": "string",
      "description": "Default value is 100. Max value is 10000"
    },
    "direction": {
      "type": "string",
      "description": "Default is \"asc\". Valid values are asc, desc. Case in-sensitive, ASC/DESC works just fine."
    }
  },
  "additionalProperties": false,
  "required": [
    "ENTERPRISE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DevicePinnerList"
}
```
## Operation: getUserEvents
Use this to get events for a given user. A chunk of event objects is returned for the user based on the parameters passed in. Parameters indicating how many chunks are left as well as the next stream_position are also returned.

To retrieve Enterprise Events specify 'stream_type=admin_logs'. Retrieves up to a year' events for all users in an enterprise. Upper and lower bounds as well as filters can be applied to the results.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "stream_position": {
      "type": "string",
      "description": "The location in the event stream at which you want to start receiving events. Can specify special case ‘now’ to get 0 events and the latest stream position for initialization."
    },
    "stream_type": {
      "type": "string",
      "description": "Limits the type of events returned: all: returns everything, changes: returns tree changes, sync: returns tree changes only for sync folders",
      "enum": [
        "all",
        "changes",
        "sync",
        "admin_logs"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Limits the number of events returned"
    },
    "event_type": {
      "type": "string",
      "description": "A comma-separated list of events to filter by"
    },
    "created_after": {
      "type": "string",
      "format": "date-time",
      "description": "A lower bound on the timestamp of the events returned"
    },
    "created_before": {
      "type": "string",
      "format": "date-time",
      "description": "An upper bound on the timestamp of the events returned"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventList"
}
```
## Operation: eventLongPolling
To get real-time notification of activity in a Box account, use the long poll feature of the /events API. To do so, first call the /events API with an OPTIONS call to retrieve the long poll URL to use. Next, make a GET request to the provided URL to begin listening for events. If an event occurs within an account you are monitoring, you will receive a response with the value new_change. It’s important to note that this response will not come with any other details, but should serve as a prompt to take further action such as calling the /events endpoint with your last known stream_position. After sending this response, the server will close the connection and you will need to repeat the long poll process to begin listening for events again.
If no events occur for a period of time after you make the GET request to the long poll URL, you will receive a response with the value reconnect. When you receive this response, you’ll make another OPTIONS call to the /events endpoint and repeat the long poll process.
If you receive no events in retry_timeout seconds, you should make another GET request to the real time server (i.e. URL in the response). This might be necessary in case you do not receive the reconnect message in the face of network errors.
If you receive max_retries error when making GET requests to the real time server, you should make another OPTIONS request.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RealtimeServerList"
}
```
## Operation: getFileVersionLegalHoldPolicies
Get list of non-deleted Holds for a single Policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "policy_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "policy_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersionLegalHoldList"
}
```
## Operation: getFileVersionLegalHoldPolicy
Get details of a single File Version Legal Hold.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersionLegalHold"
}
```
## Operation: getFileVersionRetentions
Retrieves all file version retentions for the given enterprise.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "file_id": {
      "type": "string",
      "description": "A file id to filter the file version retentions by."
    },
    "file_version_id": {
      "type": "string",
      "description": "A file version id to filter the file version retentions by."
    },
    "policy_id": {
      "type": "string",
      "description": "A policy id to filter the file version retentions by."
    },
    "disposition_action": {
      "type": "string",
      "description": "The disposition action of the retention policy. This action can be permanently_delete, which will cause the content retained by the policy to be permanently deleted, or remove_retention, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy time period has passed.",
      "enum": [
        "permanently_delete",
        "remove_retention"
      ]
    },
    "disposition_before": {
      "type": "string",
      "description": "See content times for formatting"
    },
    "disposition_after": {
      "type": "string",
      "description": "See content times for formatting"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page"
    },
    "marker": {
      "type": "string",
      "description": "Base 64 encoded string that represents where the paging should being. It should be left blank to begin paging."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersionRetentionList"
}
```
## Operation: getFileVersionRetention
Used to retrieve information about a file version retention

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_VERSION_RETENTION_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_VERSION_RETENTION_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersionRetention"
}
```
## Operation: fileUploadPreflightCheck
The Pre-flight check API will verify that a file will be accepted by Box before you send all the bytes over the wire.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/BoxFile"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteFile
Discards a file to the trash. The etag of the file can be included as an ‘If-Match’ header to prevent race conditions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the file. This is in the ‘etag’ field of the file object."
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getFile
Used to retrieve the metadata about a file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: restoreTrashedFile
Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/BoxFile"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: updateFileInfo
Used to update individual or multiple fields in the file object, including renaming the file, changing its description, and creating a shared link for the file. To move a file, change the ID of its parent folder. An optional If-Match header can be included to prevent race conditions.

To lock and unlock files, you execute a PUT operation on the /files/{file id} endpoint and set or clear the lock properties on the file.

Used to create a shared link for this particular file. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/BoxFile"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the file can be included as an ‘If-Match’ header to prevent race conditions."
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: getFileCollaborations
Use this to get a list of all the collaborations on a file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of items to return in a page"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "The item at which to begin the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollaborationList"
}
```
## Operation: getFileComments
Retrieves the comments on a particular file, if any exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommentList"
}
```
## Operation: getFileContent
Retrieves the actual data of the file. An optional version parameter can be set to download a previous version of the file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "Range": {
      "type": "string",
      "description": "The range value in bytes. Format should be bytes={start_range}-{end_range}"
    },
    "version": {
      "type": "string",
      "description": "The ID specific version of this file to download."
    },
    "BoxApi": {
      "type": "string",
      "description": "The shared link for this item. Format should be shared_link=SHARED_LINK"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: copyFile
Used to create a copy of a file in another folder. The original version of the file will not be altered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/CopyFile"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: getAllFileMetadata
Used to retrieve all metadata associated with a given file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataList"
}
```
## Operation: deleteFileMetadata
Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "SCOPE",
    "TEMPLATE"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getFileMetadata
Used to retrieve the metadata template instance for a corresponding Box file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "SCOPE",
    "TEMPLATE"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: createFileMetadata
Used to create the metadata template instance for a corresponding Box file. When creating metadata, only values that adhere to the metadata template schema will be accepted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Metadata"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "SCOPE",
    "TEMPLATE",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: updateFileMetadata
Used to update the template instance. The request body must follow the JSON-Patch specification, which is represented as a JSON array of operation objects (see examples for more details). Updates can be either add, replace, remove , test, move, or copy. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.
The update is applied atomically. If any errors occur during the application of the update operations, the metadata instance remains unchanged.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/UpdateMetadata"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "SCOPE",
    "TEMPLATE",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: getFileTasks
Retrieves all of the tasks for given file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskList"
}
```
## Operation: getFileThumbnail
Retrieves a thumbnail, or smaller image representation, of this file. Sizes of 32x32,64x64, 128x128, and 256x256 can be returned in the .png format and sizes of 32x32, 94x94, 160x160, and 320x320 can be returned in the .jpg format. Thumbnails can be generated for the image and video file formats listed here.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "EXTENSION": {
      "type": "string",
      "description": "The preview format, e.g. png or jpg"
    },
    "min_height": {
      "type": "integer",
      "format": "int64",
      "description": "The minimum height of the thumbnail"
    },
    "min_width": {
      "type": "integer",
      "format": "int64",
      "description": "The minimum width of the thumbnail"
    },
    "max_height": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum height of the thumbnail"
    },
    "max_width": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum width of the thumbnail"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "EXTENSION"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: deleteTrashedFile
Permanently deletes an item that is in the trash. The item will no longer exist in Box. This action cannot be undone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTrashedFile
Retrieves an item that has been moved to the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BoxFile"
}
```
## Operation: getFileVersions
If there are previous versions of this file, this method can be used to retrieve information about the older versions. (Versions are only tracked for Box users with premium accounts.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersionList"
}
```
## Operation: promotoeFileVersion
If there are previous versions of this file, this method can be used to promote one of the older versions to the top of the stack. This actually mints a copy of the old version and puts it on the top of the versions stack. The file will have the exact same contents, the same SHA1/etag, and the same name as the original. Other properties such as comments do not get updated to their former values.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Reference"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileVersion"
}
```
## Operation: deleteFileVersion
Discards a specific file version to the trash. (Depending on the enterprise settings for this user, the item will either be actually deleted from Box or moved to the trash.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "VERSION_ID": {
      "type": "string"
    },
    "If-Match": {
      "type": "string",
      "description": "The etag of the file. This is in the ‘etag’ field of the file object."
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "VERSION_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteFileWatermark
Used to remove the watermark for a corresponding Box file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: getFileWatermark
Used to retrieve the watermark for a corresponding Box file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: updateFileWatermark
Used to apply or update the watermark for a corresponding Box file. The endpoint accepts a JSON body describing the watermark to apply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Watermark"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: createFolder
Used to create a new empty folder. The new folder will be created inside of the specified parent folder

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: getTrashedItems
Retrieves the files and/or folders that have been moved to the trash. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return"
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileReferenceList"
}
```
## Operation: deleteFolder
Used to delete a folder. A recursive parameter must be included in order to delete folders that have items inside of them. An optional If-Match header can be included to ensure that client only deletes the folder if it knows about the latest version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "recursive": {
      "type": "boolean"
    },
    "If-Match": {
      "type": "string",
      "description": "This is in the ‘etag’ field of the folder object."
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getFolder
Retrieves the full metadata about a folder, including information about when it was last updated as well as the files and folders contained in it. The root folder of a Box account is always represented by the id “0”.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "FOLDER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: restoreTrashedFolder
Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: updateFolder
Used to update information about the folder. To move a folder, update the ID of its parent. To enable an email address that can be used to upload files to this folder, update the folder_upload_email attribute. An optional If-Match header can be included to ensure that client only updates the folder if it knows about the latest version.

Used to create a shared link for this particular folder. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}

To add or remove an item from a collection, you do a PUT on that item and change the list of collections it belongs to. Philosophically, this is similar to the way “move” operations work on files and folders: you do a PUT on the item and change its parent. It’s the same idea with collections, except you’re changing which collection(s) the item belongs to instead of the folder it belongs to. Currently the only collection available is the favorites collection, and you’ll need to know it’s ID for the user that is making the API call, since every user has a different favorites collection_id.
The Add/Remove API handling will check all ids passed in before performing any add/removal operations. If any collection ids are malformed or do not exist in the user’s account, the API call will throw a 400. Only if all of the collection ids are valid will the adds and removals be carried out.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Folder"
    },
    "If-Match": {
      "type": "string",
      "description": "This is in the ‘etag’ field of the folder object."
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: getFolderCollaborations
Use this to get a list of all the collaborations on a folder i.e. all of the users that have access to that folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollaborationList"
}
```
## Operation: copyFolder
Used to create a copy of a folder in another folder. The original version of the folder will not be altered.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: getFolderItems
Retrieves the files and/or folders contained within this folder without any other metadata about the folder. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "string",
      "description": "The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back. The default is 0."
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ItemReferenceList"
}
```
## Operation: getAllFolderMetadata
Used to retrieve all metadata associated with a given folder

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataList"
}
```
## Operation: deleteFolderMetadata
Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "SCOPE",
    "TEMPLATE"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getFolderMetadata
Used to retrieve the metadata template instance for a corresponding Box folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "SCOPE",
    "TEMPLATE"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: createFolderMetadata
Used to create the metadata template instance for a corresponding Box folder. When creating metadata, only values that adhere to the metadata template schema will be accepted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Metadata"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "SCOPE",
    "TEMPLATE",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: updateFolderMetadata
Used to update the template instance. Updates can be either add, replace, remove , or test. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/UpdateMetadata"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "SCOPE",
    "TEMPLATE",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metadata"
}
```
## Operation: deleteTrashedFolder
Permanently deletes an folder that is in the trash. The item will no longer exist in Box. This action cannot be undone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTrashedFolder
Retrieves an folder that has been moved to the trash.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: deleteFolderWatermark
Used to remove the watermark for a corresponding Box Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: getFolderWatermark
Used to retrieve the watermark for a corresponding Box folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: updateFolderWatermark
Used to apply or update the watermark for a corresponding Box folder. The endpoints accepts a JSON body describing the watermark to apply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FOLDER_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Watermark"
    }
  },
  "additionalProperties": false,
  "required": [
    "FOLDER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Watermark"
}
```
## Operation: createGroupMembership
Used to add a member to a Group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/GroupMembership"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupMembership"
}
```
## Operation: deleteGroupMembership
Deletes a specific group membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_MEMBERSHIP_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_MEMBERSHIP_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getGroupMembership
Fetches a specific group membership entry.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_MEMBERSHIP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_MEMBERSHIP_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupMembership"
}
```
## Operation: updateGroupMembership
Used to update a group membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_MEMBERSHIP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/GroupMembership"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_MEMBERSHIP_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupMembership"
}
```
## Operation: getEnterpriseGroups
Retrieves all of the groups for given enterprise. Must have permissions to see an enterprise's groups.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupList"
}
```
## Operation: createGroup
Used to create a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Group"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: deleteGroup
Permanently deletes a specific group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getGroup
Used to get information about a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: updateGroup
Updates a specific group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Group"
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: getGroupCollaborations
Retrieves all of the group collaborations for a given group. Note this is only available to group admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CollaborationList"
}
```
## Operation: getGroupMemberships
Retrieves all of the members for a given group if the requesting user has access (see Group Object member_viewability_level).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GROUP_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of items to return in a page. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response."
    }
  },
  "additionalProperties": false,
  "required": [
    "GROUP_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupMembershipList"
}
```
## Operation: createInvite
Invites an existing user to join an Enterprise. The existing user can not be part of another Enterprise and must already have a Box account. Once invited, the user will receive an email and prompt to accept the invitation within the Box web application. This method requires the "Manage An Enterprise" scope for the enterprise, which can be enabled within your developer console.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/InviteUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invite"
}
```
## Operation: getInvite
Get status of the invite

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "INVITE_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "INVITE_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invite"
}
```
## Operation: getLegalHoldPolicies
Get a list of Legal Hold Policies that belong to your Enterprise.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "policy_name": {
      "type": "string",
      "description": "Case insensitive prefix-match filter on Policy name."
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit result size to this number. Defaults to 100, maximum is 1,000."
    },
    "marker": {
      "type": "string",
      "description": "Take from next_marker column of a prior call to get the next page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicyList"
}
```
## Operation: createLegalHoldPolicy
Create a new Legal Hold Policy. Optional date filter may be passed. If Policy has a date filter, any Custodian assignments will apply only to file versions created or uploaded inside of the date range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LegalHoldPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicy"
}
```
## Operation: deleteLegalHoldPolicy
Sends request to delete an existing Legal Hold Policy. Note that this is an asynchronous process - the Policy will not be fully deleted yet when the response comes back.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLegalHoldPolicy
Get details of a single Legal Hold Policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicy"
}
```
## Operation: updateLegalHoldPolicy
Update existing Legal Hold Policy. Only name and description can be modified.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/LegalHoldPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicy"
}
```
## Operation: getLegalHoldPolicyAssignments
Get list of assignments for a single Policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicyAssignmentList"
}
```
## Operation: createLegalHoldPolicyAssignment
Create a new Assignment, which will apply the Legal Hold Policy to the target of the Assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateLegalHoldPolicyAssignment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LegalHoldPolicyAssignment"
}
```
## Operation: deleteLegalHoldPolicyAssignment
Sends request to delete an existing Assignment. Note that this is an asynchronous process - the Assignment will not be fully deleted yet when the response comes back.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ASSIGNMENT_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ASSIGNMENT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLegalHoldPolicyAssignment
Get details of a single assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ASSIGNMENT_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "ASSIGNMENT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: createMetadataTemplate
Used to create a new metadata template with the specified schema.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/MetadataTemplate"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataTemplate"
}
```
## Operation: getEnterpriseMetadataTemplates
Used to retrieve all metadata templates within a user's enterprise. Currently only the enterprise scope is supported.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SCOPE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "SCOPE"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataTemplateList"
}
```
## Operation: getMetadataTemplate
Used to retrieve the schema for a given metadata template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "SCOPE",
    "TEMPLATE"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataTemplate"
}
```
## Operation: updateMetadataTemplate
Used to update the schema of an existing template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "SCOPE": {
      "type": "string"
    },
    "TEMPLATE": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/UpdateMetadataTemplate"
    }
  },
  "additionalProperties": false,
  "required": [
    "SCOPE",
    "TEMPLATE",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MetadataTemplate"
}
```
## Operation: getRetentionPolicies
Retrieves all of the retention policies for the given enterprise.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "policy_name": {
      "type": "string",
      "description": "A name to filter the retention policies by. A trailing partial match search is performed."
    },
    "policy_type": {
      "type": "string",
      "description": "A policy type to filter the retention policies by.",
      "enum": [
        "finite",
        "indefinite"
      ]
    },
    "created_by_user_id": {
      "type": "string",
      "description": "A user id to filter the retention policies by."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicyList"
}
```
## Operation: createRetentionPolicy
Used to create a new retention policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RetentionPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicy"
}
```
## Operation: getRetentionPolicy
Used to retrieve information about a retention policy

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "POLICY_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "POLICY_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicy"
}
```
## Operation: updateRetentionPolicy
Used to update a retention policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "POLICY_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/RetentionPolicy"
    }
  },
  "additionalProperties": false,
  "required": [
    "POLICY_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicy"
}
```
## Operation: getRetentionPolicyAssignments
Returns a list of all retention policy assignments associated with a specified retention policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "POLICY_ID": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "description": "The type of the retention policy assignment to retrieve. Can either be folder or enterprise.",
      "enum": [
        "folder",
        "enterprise"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "POLICY_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicyAssignmentList"
}
```
## Operation: createRetentionPolicyAssignment
Returns a list of all retention policy assignments associated with a specified retention policy.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateRetentionPolicyAssignment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicyAssignment"
}
```
## Operation: getRetentionPolicyAssignment
Used to retrieve information about a retention policy assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "RETENTION_POLICY_ASSIGNMENT_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "RETENTION_POLICY_ASSIGNMENT_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RetentionPolicyAssignment"
}
```
## Operation: search
The search endpoint provides a powerful way of finding items that are accessible by a single user or an entire enterprise. Leverage the parameters listed below to generate targeted advanced searches.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The string to search for; can be matched against item names, descriptions, text content of a file, and other fields of the different item types."
    },
    "scope": {
      "type": "string",
      "description": "The scope for which you want to limit your search to. Can be user_content for a search limited to only the current user or enterprise_content for the entire enterprise. To enable the enterprise_content scope for an administrator, please contact us."
    },
    "file_extensions": {
      "type": "string",
      "description": "Limit searches to specific file extensions like pdf,png,doc. Requires one or a set of comma delimited file extensions: file_extension_1,file_extension_2,...."
    },
    "created_at_range": {
      "type": "string",
      "format": "date-time",
      "description": "The date for when the item was created. Specify the date range by using RFC3339 timestamp variables separated by a comma: from_date,to_date (e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively."
    },
    "updated_at_range": {
      "type": "string",
      "format": "date-time",
      "description": "The date for when the item was last updated. Specify the date range by using RFC3339 variables separated by a comma: from_date,to_date(e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively."
    },
    "size_range": {
      "type": "integer",
      "format": "int64",
      "description": "Filter by a file size range. Specify the file size range in bytes separated by a comma:lower_bound_size,upper_bound_size, where 1MB is equivalent to 1000000 bytes. Trailing lower_bound_size, and leading ,upper_bound_size commas are also accepted as parameters."
    },
    "owner_user_ids": {
      "type": "string",
      "description": "Search by item owners. Requires one or a set of comma delimited user_ids: user_id_1,user_id_2,..."
    },
    "ancestor_folder_ids": {
      "type": "string",
      "description": "Limit searches to specific parent folders. Requires one or a set of comma delimited folder_ids: folder_id_1,folder_id_2,.... Parent folder results will also include items within subfolders."
    },
    "content_types": {
      "type": "string",
      "description": "Limit searches to specific Box designated content types. Can be name, description, file_content, comments, or tags. Requires one or a set of comma delimited content_types: content_type_1,content_type_2,...."
    },
    "type": {
      "type": "string",
      "description": "The type you want to return in your search. Can be file, folder, or web_link.",
      "enum": [
        "file",
        "folder",
        "web_link"
      ]
    },
    "trash_content": {
      "type": "string",
      "description": "Allows you to search within the trash. Can be trashed_only or non_trashed_only. Searches without this parameter default to non_trashed_only."
    },
    "mdfilters": {
      "type": "string",
      "description": "Filters for a specific metadata template for files with metadata object associations. The filters are to be placed in a single JSON object. Please refer the MDFilters object in the definitions section of the swagger.json"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Number of search results to return. The default is 30 and the max is 200."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The search result at which to start the response. The default is 0."
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ObjectList"
}
```
## Operation: getSharedItems
Shared items are any files or folders that are represented by a shared link. Shared items are different from other API resources in that a shared resource doesn’t necessarily have to be in the account of the user accessing it. The actual shared link itself is used along with a normal access token.
Used to retrieve the metadata about a shared item when only given a shared link. Because of varying permission for shared links, a password may be required to retrieve the shared item. Once the item has been retrieved, you can make API requests against the actual resource /files/{id} or /folders/{id} as long as the shared link and optional password are in the header.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "BoxApi": {
      "type": "string",
      "description": "The usage is 'BoxApi: shared_link=SHARED_LINK&shared_link_password=SHARED_LINK_PASSWORD'"
    }
  },
  "additionalProperties": false,
  "required": [
    "BoxApi"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: createTaskAssignment
Used to assign a task to a single user. There can be multiple assignments on a given task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateTaskAssignment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskAssignment"
}
```
## Operation: deleteTaskAssignment
Deletes a specific task assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ASSIGNMENT_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ASSIGNMENT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTaskAssignment
Fetches a specific task assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ASSIGNMENT_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ASSIGNMENT_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskAssignment"
}
```
## Operation: updateTaskAssignment
Used to update a task assignment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ASSIGNMENT_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/TaskAssignment"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ASSIGNMENT_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskAssignment"
}
```
## Operation: createTask
Used to create a single task for single user on a single file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Task"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: deleteTask
Permanently deletes a specific task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTask
Fetches a specific task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: updateTask
Updates a specific task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Task"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: getTaskAssignments
Retrieves all of the assignments for a given task.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "TASK_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskAssignmentList"
}
```
## Operation: getEnterpriseUsers
Returns a list of all users for the Enterprise along with their user_id, public_name, and login.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "filter_term": {
      "type": "string",
      "description": "A string used to filter the results to only users starting with the filter_term in either the name or the login."
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The number of records to return. The default is 100 and the max is 1000."
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The record at which to start. The default is 0."
    },
    "user_type": {
      "type": "string",
      "description": "The type of user to search for. Valid values are all, external or managed.  If nothing is provided, the default behavior will be managed only",
      "enum": [
        "all",
        "external",
        "managed"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserList"
}
```
## Operation: createUser
Used to provision a new user in an enterprise. This method only works for enterprise admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/User"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: getCurrentUser
Retrieves information about the user who is currently logged in i.e. the user for whom this auth token was generated.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: deleteUser
Deletes a user in an enterprise account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "notify": {
      "type": "boolean"
    },
    "force": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUser
Retrieves information about a user in the enterprise. Requires enterprise administration authorization.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: updateUser
Used to edit the settings and information about a user. This method only works for enterprise admins. To roll a user out of the enterprise (and convert them to a standalone free user), update the special enterprise attribute to be null.

Used to convert one of the user’s confirmed email aliases into the user’s primary login.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/User"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: getEmailAliases
Retrieves all email aliases for this user. The collection of email aliases does not include the primary login for the user; use GET /users/USER_ID to retrieve the login email address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmailAliasList"
}
```
## Operation: addEmailAlias
Adds a new email alias to the given user’s account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/EmailAlias"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmailAlias"
}
```
## Operation: deleteUserEmailAlias
Removes an email alias from a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "EMAIL_ALIAS_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID",
    "EMAIL_ALIAS_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateUserFolder
Moves all of the owned content from within one user’s folder into a new folder in another user’s account. You can move folders across users as long as the you have administrative permissions and the ‘source’ user owns the folders. To move everything from the root folder, use “0” which always represents the root folder of a Box account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "FOLDER_ID": {
      "type": "string"
    },
    "notify": {
      "type": "boolean"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/Folder"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID",
    "FOLDER_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Folder"
}
```
## Operation: getUserGroupMembership
Retrieves all of the group memberships for a given user. Note this is only available to group admins. To retrieve group memberships for the user making the API request, use the users/me/memberships endpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "USER_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "Default is 100. Max is 1000"
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "The item at which to begin the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "USER_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupMembershipList"
}
```
## Operation: createWebLink
Creates a web link object within a given folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/WebLink"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebLink"
}
```
## Operation: deleteWebLink
Deletes a web link and moves it to the trash

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEB_LINK_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEB_LINK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebLink
Use to get information about the web link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEB_LINK_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEB_LINK_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebLink"
}
```
## Operation: updateWebLink
Updates information for a web link.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEB_LINK_ID": {
      "type": "string"
    },
    "fields": {
      "type": "string",
      "description": "Attribute(s) to include in the response"
    },
    "body": {
      "$ref": "#/definitions/WebLink"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEB_LINK_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebLink"
}
```
## Operation: getWebhooks
Returns all defined webhooks for the requesting application and user, up to the limit. If no limit is supplied then Box uses the default limit of 100.
If more than limit webhooks are defined then Box returns the webhooks in batches. When the results are batched, Box sends limit webhooks along with a next_marker field in the response object. The value of the next_marker field is a marker string that you can use in later requests to tell Box which batch to send next.
When you send a request that includes a marker string, Box sends the next batch of webhooks, beginning after the last webhook of the previous batch. When the response contains the last of the defined webhooks, Box omits the next_marker field from its response.
You can use limit and marker together with the marker string returned in the next_marker field to paginate lists of webhooks.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "The maximum number of webhooks to return per page"
    },
    "marker": {
      "type": "string",
      "description": "A marker string returned by Box if the result contains less than the full number of webhooks that are defined"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebhookList"
}
```
## Operation: createWebhook
Create Webhook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Webhook"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webhook"
}
```
## Operation: deleteWebhook
Permanently deletes a webhook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEBHOOK_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEBHOOK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebhook
Get a Webhook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEBHOOK_ID": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEBHOOK_ID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webhook"
}
```
## Operation: updateWebhook
Update a Webhook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "WEBHOOK_ID": {
      "type": "string"
    },
    "body": {
      "$ref": "#/definitions/Webhook"
    }
  },
  "additionalProperties": false,
  "required": [
    "WEBHOOK_ID",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Webhook"
}
```
