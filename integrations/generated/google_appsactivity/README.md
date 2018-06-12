# @datafire/google_appsactivity

Client library for G Suite Activity

## Installation and Usage
```bash
npm install --save @datafire/google_appsactivity
```
```js
let google_appsactivity = require('@datafire/google_appsactivity').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_appsactivity.activities.list({}).then(data => {
  console.log(data);
});
```

## Description

Provides a historical view of activity.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_appsactivity.oauthCallback({
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
google_appsactivity.oauthRefresh(null, context)
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

### activities.list
Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.


```js
google_appsactivity.activities.list({}, context)
```

#### Input
* input `object`
  * drive.ancestorId `string`: Identifies the Drive folder containing the items for which to return activities.
  * drive.fileId `string`: Identifies the Drive item to return activities for.
  * groupingStrategy `string` (values: driveUi, none): Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
  * pageSize `integer`: The maximum number of events to return on a page. The response includes a continuation token if there are more events.
  * pageToken `string`: A token to retrieve a specific page of results.
  * source `string`: The Google service from which to return activities. Possible values of source are: 
  * userId `string`: Indicates the user to return activity for. Use the special value me to indicate the currently authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListActivitiesResponse](#listactivitiesresponse)



## Definitions

### Activity
* Activity `object`: An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
  * combinedEvent [Event](#event)
  * singleEvents `array`: A list of all the Events that make up the Activity.
    * items [Event](#event)

### Event
* Event `object`: Represents the changes associated with an action taken by a user.
  * additionalEventTypes `array`: Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.
    * items `string` (values: comment, create, edit, emptyTrash, move, permissionChange, rename, trash, unknown, untrash, upload)
  * eventTimeMillis `string`: The time at which the event occurred formatted as Unix time in milliseconds.
  * fromUserDeletion `boolean`: Whether this event is caused by a user being deleted.
  * move [Move](#move)
  * permissionChanges `array`: Extra information for permissionChange type events, such as the user or group the new permission applies to.
    * items [PermissionChange](#permissionchange)
  * primaryEventType `string` (values: comment, create, edit, emptyTrash, move, permissionChange, rename, trash, unknown, untrash, upload): The main type of event that occurred.
  * rename [Rename](#rename)
  * target [Target](#target)
  * user [User](#user)

### ListActivitiesResponse
* ListActivitiesResponse `object`: The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
  * activities `array`: List of activities.
    * items [Activity](#activity)
  * nextPageToken `string`: Token for the next page of results.

### Move
* Move `object`: Contains information about changes in an object's parents as a result of a move type event.
  * addedParents `array`: The added parent(s).
    * items [Parent](#parent)
  * removedParents `array`: The removed parent(s).
    * items [Parent](#parent)

### Parent
* Parent `object`: Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
  * id `string`: The parent's ID.
  * isRoot `boolean`: Whether this is the root folder.
  * title `string`: The parent's title.

### Permission
* Permission `object`: Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
  * name `string`: The name of the user or group the permission applies to.
  * permissionId `string`: The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource.
  * role `string` (values: commenter, owner, publishedReader, reader, writer): Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.
  * type `string` (values: anyone, domain, group, user): Indicates how widely permissions are granted.
  * user [User](#user)
  * withLink `boolean`: Whether the permission requires a link to the file.

### PermissionChange
* PermissionChange `object`: Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
  * addedPermissions `array`: Lists all Permission objects added.
    * items [Permission](#permission)
  * removedPermissions `array`: Lists all Permission objects removed.
    * items [Permission](#permission)

### Photo
* Photo `object`: Photo information for a user.
  * url `string`: The URL of the photo.

### Rename
* Rename `object`: Contains information about a renametype event.
  * newTitle `string`: The new title.
  * oldTitle `string`: The old title.

### Target
* Target `object`: Information about the object modified by the event.
  * id `string`: The ID of the target. For example, in Google Drive, this is the file or folder ID.
  * mimeType `string`: The MIME type of the target.
  * name `string`: The name of the target. For example, in Google Drive, this is the title of the file.

### User
* User `object`: A representation of a user.
  * isDeleted `boolean`: A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted.
  * isMe `boolean`: Whether the user is the authenticated user.
  * name `string`: The displayable name of the user.
  * permissionId `string`: The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource.
  * photo [Photo](#photo)


