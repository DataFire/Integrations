# @datafire/google_driveactivity

Client library for Drive Activity API

## Installation and Usage
```bash
npm install --save @datafire/google_driveactivity
```
```js
let google_driveactivity = require('@datafire/google_driveactivity').create({
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

Provides a historical view of activity in Google Drive.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_driveactivity.oauthCallback({
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
google_driveactivity.oauthRefresh(null, context)
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

### driveactivity.activity.query
Query past activity in Google Drive.


```js
google_driveactivity.driveactivity.activity.query({}, context)
```

#### Input
* input `object`
  * body [QueryDriveActivityRequest](#querydriveactivityrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [QueryDriveActivityResponse](#querydriveactivityresponse)



## Definitions

### Action
* Action `object`: Information about the action.
  * actor [Actor](#actor)
  * detail [ActionDetail](#actiondetail)
  * target [Target](#target)
  * timeRange [TimeRange](#timerange)
  * timestamp `string`: The action occurred at this specific time.

### ActionDetail
* ActionDetail `object`: Data describing the type and additional information of an action.
  * comment [Comment](#comment)
  * create [Create](#create)
  * delete [Delete](#delete)
  * dlpChange [DataLeakPreventionChange](#dataleakpreventionchange)
  * edit [Edit](#edit)
  * move [Move](#move)
  * permissionChange [PermissionChange](#permissionchange)
  * reference [ApplicationReference](#applicationreference)
  * rename [Rename](#rename)
  * restore [Restore](#restore)
  * settingsChange [SettingsChange](#settingschange)

### Actor
* Actor `object`: The actor of a Drive activity.
  * administrator [Administrator](#administrator)
  * anonymous [AnonymousUser](#anonymoususer)
  * impersonation [Impersonation](#impersonation)
  * system [SystemEvent](#systemevent)
  * user [User](#user)

### Administrator
* Administrator `object`: Empty message representing an administrator.

### AnonymousUser
* AnonymousUser `object`: Empty message representing an anonymous user or indicating the authenticated user should be anonymized.

### Anyone
* Anyone `object`: Represents any user (including a logged out user).

### ApplicationReference
* ApplicationReference `object`: Activity in applications other than Drive.
  * type `string` (values: UNSPECIFIED_REFERENCE_TYPE, LINK, DISCUSS): The reference type corresponding to this event.

### Assignment
* Assignment `object`: A comment with an assignment.
  * assignedUser [User](#user)
  * subtype `string` (values: SUBTYPE_UNSPECIFIED, ADDED, DELETED, REPLY_ADDED, REPLY_DELETED, RESOLVED, REOPENED, REASSIGNED): The sub-type of this event.

### Comment
* Comment `object`: A change about comments on an object.
  * assignment [Assignment](#assignment)
  * mentionedUsers `array`: Users who are mentioned in this comment.
    * items [User](#user)
  * post [Post](#post)
  * suggestion [Suggestion](#suggestion)

### ConsolidationStrategy
* ConsolidationStrategy `object`: How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
  * legacy [Legacy](#legacy)
  * none [NoConsolidation](#noconsolidation)

### Copy
* Copy `object`: An object was created by copying an existing object.
  * originalObject [TargetReference](#targetreference)

### Create
* Create `object`: An object was created.
  * copy [Copy](#copy)
  * new [New](#new)
  * upload [Upload](#upload)

### DataLeakPreventionChange
* DataLeakPreventionChange `object`: A change in the object's data leak prevention status.
  * type `string` (values: TYPE_UNSPECIFIED, FLAGGED, CLEARED): The type of Data Leak Prevention (DLP) change.

### Delete
* Delete `object`: An object was deleted.
  * type `string` (values: TYPE_UNSPECIFIED, TRASH, PERMANENT_DELETE): The type of delete action taken.

### DeletedUser
* DeletedUser `object`: A user whose account has since been deleted.

### Domain
* Domain `object`: Information about a domain.
  * legacyId `string`: An opaque string used to identify this domain.
  * name `string`: The name of the domain, e.g. "google.com".

### Drive
* Drive `object`: Information about a shared drive.
  * name `string`: The resource name of the shared drive. The format is "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection ID for this resource name.
  * root [DriveItem](#driveitem)
  * title `string`: The title of the shared drive.

### DriveActivity
* DriveActivity `object`: A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
  * actions `array`: Details on all actions in this activity.
    * items [Action](#action)
  * actors `array`: All actor(s) responsible for the activity.
    * items [Actor](#actor)
  * primaryActionDetail [ActionDetail](#actiondetail)
  * targets `array`: All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.
    * items [Target](#target)
  * timeRange [TimeRange](#timerange)
  * timestamp `string`: The activity occurred at this specific time.

### DriveFile
* DriveFile `object`: A Drive item which is a file.

### DriveFolder
* DriveFolder `object`: A Drive item which is a folder.
  * type `string` (values: TYPE_UNSPECIFIED, MY_DRIVE_ROOT, SHARED_DRIVE_ROOT, STANDARD_FOLDER): The type of Drive folder.

### DriveItem
* DriveItem `object`: A Drive item, such as a file or folder.
  * driveFile [DriveFile](#drivefile)
  * driveFolder [DriveFolder](#drivefolder)
  * file [File](#file)
  * folder [Folder](#folder)
  * mimeType `string`: The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types.
  * name `string`: The target Drive item. The format is "items/ITEM_ID".
  * owner [Owner](#owner)
  * title `string`: The title of the Drive item.

### DriveItemReference
* DriveItemReference `object`: A lightweight reference to a Drive item, such as a file or folder.
  * driveFile [DriveFile](#drivefile)
  * driveFolder [DriveFolder](#drivefolder)
  * file [File](#file)
  * folder [Folder](#folder)
  * name `string`: The target Drive item. The format is "items/ITEM_ID".
  * title `string`: The title of the Drive item.

### DriveReference
* DriveReference `object`: A lightweight reference to a shared drive.
  * name `string`: The resource name of the shared drive. The format is "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection ID for this resource name.
  * title `string`: The title of the shared drive.

### Edit
* Edit `object`: An empty message indicating an object was edited.

### File
* File `object`: This item is deprecated; please see `DriveFile` instead.

### FileComment
* FileComment `object`: A comment on a file.
  * legacyCommentId `string`: The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/drive/v3/reference/comments/get
  * legacyDiscussionId `string`: The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get
  * linkToDiscussion `string`: The link to the discussion thread containing this comment, for example, "https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID".
  * parent [DriveItem](#driveitem)

### Folder
* Folder `object`: This item is deprecated; please see `DriveFolder` instead.
  * type `string` (values: TYPE_UNSPECIFIED, MY_DRIVE_ROOT, TEAM_DRIVE_ROOT, STANDARD_FOLDER): This field is deprecated; please see `DriveFolder.type` instead.

### Group
* Group `object`: Information about a group.
  * email `string`: The email address of the group.
  * title `string`: The title of the group.

### Impersonation
* Impersonation `object`: Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
  * impersonatedUser [User](#user)

### KnownUser
* KnownUser `object`: A known user.
  * isCurrentUser `boolean`: True if this is the user making the request.
  * personName `string`: The identifier for this user that can be used with the People API to get more information. The format is "people/ACCOUNT_ID". See https://developers.google.com/people/.

### Legacy
* Legacy `object`: A strategy which consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.

### Move
* Move `object`: An object was moved.
  * addedParents `array`: The added parent object(s).
    * items [TargetReference](#targetreference)
  * removedParents `array`: The removed parent object(s).
    * items [TargetReference](#targetreference)

### New
* New `object`: An object was created from scratch.

### NoConsolidation
* NoConsolidation `object`: A strategy which does no consolidation of individual activities.

### Owner
* Owner `object`: Information about the owner of a Drive item.
  * domain [Domain](#domain)
  * drive [DriveReference](#drivereference)
  * teamDrive [TeamDriveReference](#teamdrivereference)
  * user [User](#user)

### Permission
* Permission `object`: The permission setting of an object.
  * allowDiscovery `boolean`: If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.
  * anyone [Anyone](#anyone)
  * domain [Domain](#domain)
  * group [Group](#group)
  * role `string` (values: ROLE_UNSPECIFIED, OWNER, ORGANIZER, FILE_ORGANIZER, EDITOR, COMMENTER, VIEWER, PUBLISHED_VIEWER): Indicates the Google Drive permissions role. The role determines a user's ability to read, write, and comment on items.
  * user [User](#user)

### PermissionChange
* PermissionChange `object`: A change of the permission setting on an item.
  * addedPermissions `array`: The set of permissions added by this change.
    * items [Permission](#permission)
  * removedPermissions `array`: The set of permissions removed by this change.
    * items [Permission](#permission)

### Post
* Post `object`: A regular posted comment.
  * subtype `string` (values: SUBTYPE_UNSPECIFIED, ADDED, DELETED, REPLY_ADDED, REPLY_DELETED, RESOLVED, REOPENED): The sub-type of this event.

### QueryDriveActivityRequest
* QueryDriveActivityRequest `object`: The request message for querying Drive activity.
  * ancestorName `string`: Return activities for this Drive folder and all children and descendants. The format is "items/ITEM_ID".
  * consolidationStrategy [ConsolidationStrategy](#consolidationstrategy)
  * filter `string`: The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - time: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - time > 1452409200000 AND time <= 1492812924310 - time >= "2016-01-10T01:02:03-05:00" - detail.action_detail_case: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses. Examples: - detail.action_detail_case: RENAME - detail.action_detail_case:(CREATE EDIT) - -detail.action_detail_case:MOVE
  * itemName `string`: Return activities for this Drive item. The format is "items/ITEM_ID".
  * pageSize `integer`: The miminum number of activities desired in the response; the server will attempt to return at least this quanitity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.
  * pageToken `string`: The token identifying which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results will be returned.

### QueryDriveActivityResponse
* QueryDriveActivityResponse `object`: Response message for querying Drive activity.
  * activities `array`: List of activity requested.
    * items [DriveActivity](#driveactivity)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### Rename
* Rename `object`: An object was renamed.
  * newTitle `string`: The new title of the drive object.
  * oldTitle `string`: The previous title of the drive object.

### Restore
* Restore `object`: A deleted object was restored.
  * type `string` (values: TYPE_UNSPECIFIED, UNTRASH): The type of restore action taken.

### RestrictionChange
* RestrictionChange `object`: Information about restriction policy changes to a feature.
  * feature `string` (values: FEATURE_UNSPECIFIED, SHARING_OUTSIDE_DOMAIN, DIRECT_SHARING, ITEM_DUPLICATION, DRIVE_FILE_STREAM): The feature which had a change in restriction policy.
  * newRestriction `string` (values: RESTRICTION_UNSPECIFIED, UNRESTRICTED, FULLY_RESTRICTED): The restriction in place after the change.

### SettingsChange
* SettingsChange `object`: Information about settings changes.
  * restrictionChanges `array`: The set of changes made to restrictions.
    * items [RestrictionChange](#restrictionchange)

### Suggestion
* Suggestion `object`: A suggestion.
  * subtype `string` (values: SUBTYPE_UNSPECIFIED, ADDED, DELETED, REPLY_ADDED, REPLY_DELETED, ACCEPTED, REJECTED, ACCEPT_DELETED, REJECT_DELETED): The sub-type of this event.

### SystemEvent
* SystemEvent `object`: Event triggered by system operations instead of end users.
  * type `string` (values: TYPE_UNSPECIFIED, USER_DELETION, TRASH_AUTO_PURGE): The type of the system event that may triggered activity.

### Target
* Target `object`: Information about the target of activity.
  * drive [Drive](#drive)
  * driveItem [DriveItem](#driveitem)
  * fileComment [FileComment](#filecomment)
  * teamDrive [TeamDrive](#teamdrive)

### TargetReference
* TargetReference `object`: A lightweight reference to the target of activity.
  * drive [DriveReference](#drivereference)
  * driveItem [DriveItemReference](#driveitemreference)
  * teamDrive [TeamDriveReference](#teamdrivereference)

### TeamDrive
* TeamDrive `object`: This item is deprecated; please see `Drive` instead.
  * name `string`: This field is deprecated; please see `Drive.name` instead.
  * root [DriveItem](#driveitem)
  * title `string`: This field is deprecated; please see `Drive.title` instead.

### TeamDriveReference
* TeamDriveReference `object`: This item is deprecated; please see `DriveReference` instead.
  * name `string`: This field is deprecated; please see `DriveReference.name` instead.
  * title `string`: This field is deprecated; please see `DriveReference.title` instead.

### TimeRange
* TimeRange `object`: Information about time ranges.
  * endTime `string`: The end of the time range.
  * startTime `string`: The start of the time range.

### UnknownUser
* UnknownUser `object`: A user about whom nothing is currently known.

### Upload
* Upload `object`: An object was uploaded into Drive.

### User
* User `object`: Information about an end user.
  * deletedUser [DeletedUser](#deleteduser)
  * knownUser [KnownUser](#knownuser)
  * unknownUser [UnknownUser](#unknownuser)


