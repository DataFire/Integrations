# @datafire/amazonaws_workdocs

Client library for Amazon WorkDocs

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workdocs
```
```js
let amazonaws_workdocs = require('@datafire/amazonaws_workdocs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The WorkDocs API is designed for the following use cases:</p> <ul> <li> <p>File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.</p> </li> <li> <p>Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with AWS CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.</p> </li> <li> <p>eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.</p> </li> </ul> <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Actions

### DescribeActivities



```js
amazonaws_workdocs.DescribeActivities({}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * startTime `string`
  * endTime `string`
  * organizationId `string`
  * activityTypes `string`
  * resourceId `string`
  * userId `string`
  * includeIndirectActivities `boolean`
  * limit `integer`
  * marker `string`

#### Output
* output [DescribeActivitiesResponse](#describeactivitiesresponse)

### InitiateDocumentVersionUpload



```js
amazonaws_workdocs.InitiateDocumentVersionUpload({
  "ParentFolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ContentCreatedTimestamp `string`: The timestamp when the content of the document was originally created.
  * ContentModifiedTimestamp `string`: The timestamp when the content of the document was modified.
  * ContentType `string`: The content type of the document.
  * DocumentSizeInBytes `integer`: The size of the document, in bytes.
  * Id `string`: The ID of the document.
  * Name `string`: The name of the document.
  * ParentFolderId **required** `string`: The ID of the parent folder.

#### Output
*Output schema unknown*

### DeleteDocument



```js
amazonaws_workdocs.DeleteDocument({
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`

#### Output
*Output schema unknown*

### GetDocument



```js
amazonaws_workdocs.GetDocument({
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * includeCustomMetadata `boolean`

#### Output
* output [GetDocumentResponse](#getdocumentresponse)

### UpdateDocument



```js
amazonaws_workdocs.UpdateDocument({
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * Name `string`: The name of the document.
  * ParentFolderId `string`: The ID of the parent folder.
  * ResourceState `string` (values: ACTIVE, RESTORING, RECYCLING, RECYCLED): The resource state of the document. Only ACTIVE and RECYCLED are supported.

#### Output
*Output schema unknown*

### GetDocumentPath



```js
amazonaws_workdocs.GetDocumentPath({
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * limit `integer`
  * fields `string`
  * marker `string`

#### Output
* output [GetDocumentPathResponse](#getdocumentpathresponse)

### DescribeDocumentVersions



```js
amazonaws_workdocs.DescribeDocumentVersions({
  "DocumentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * marker `string`
  * limit `integer`
  * include `string`
  * fields `string`
  * Limit `string`
  * Marker `string`

#### Output
* output [DescribeDocumentVersionsResponse](#describedocumentversionsresponse)

### AbortDocumentVersionUpload



```js
amazonaws_workdocs.AbortDocumentVersionUpload({
  "DocumentId": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`

#### Output
*Output schema unknown*

### GetDocumentVersion



```js
amazonaws_workdocs.GetDocumentVersion({
  "DocumentId": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * fields `string`
  * includeCustomMetadata `boolean`

#### Output
* output [GetDocumentVersionResponse](#getdocumentversionresponse)

### UpdateDocumentVersion



```js
amazonaws_workdocs.UpdateDocumentVersion({
  "DocumentId": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * VersionStatus `string` (values: ACTIVE): The status of the version.

#### Output
*Output schema unknown*

### CreateComment



```js
amazonaws_workdocs.CreateComment({
  "DocumentId": "",
  "VersionId": "",
  "Text": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * NotifyCollaborators `boolean`: Set this parameter to TRUE to send an email out to the document collaborators after the comment is created.
  * ParentId `string`: The ID of the parent comment.
  * Text **required** `string`: The text of the comment.
  * ThreadId `string`: The ID of the root comment in the thread.
  * Visibility `string` (values: PUBLIC, PRIVATE): The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.

#### Output
*Output schema unknown*

### DeleteComment



```js
amazonaws_workdocs.DeleteComment({
  "DocumentId": "",
  "VersionId": "",
  "CommentId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * CommentId **required** `string`

#### Output
*Output schema unknown*

### DescribeComments



```js
amazonaws_workdocs.DescribeComments({
  "DocumentId": "",
  "VersionId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * limit `integer`
  * marker `string`

#### Output
* output [DescribeCommentsResponse](#describecommentsresponse)

### CreateFolder



```js
amazonaws_workdocs.CreateFolder({
  "ParentFolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * Name `string`: The name of the new folder.
  * ParentFolderId **required** `string`: The ID of the parent folder.

#### Output
*Output schema unknown*

### DeleteFolder



```js
amazonaws_workdocs.DeleteFolder({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`

#### Output
*Output schema unknown*

### GetFolder



```js
amazonaws_workdocs.GetFolder({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`
  * includeCustomMetadata `boolean`

#### Output
* output [GetFolderResponse](#getfolderresponse)

### UpdateFolder



```js
amazonaws_workdocs.UpdateFolder({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`
  * Name `string`: The name of the folder.
  * ParentFolderId `string`: The ID of the parent folder.
  * ResourceState `string` (values: ACTIVE, RESTORING, RECYCLING, RECYCLED): The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API.

#### Output
*Output schema unknown*

### DeleteFolderContents



```js
amazonaws_workdocs.DeleteFolderContents({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`

#### Output
*Output schema unknown*

### DescribeFolderContents



```js
amazonaws_workdocs.DescribeFolderContents({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`
  * sort `string`
  * order `string`
  * limit `integer`
  * marker `string`
  * type `string`
  * include `string`
  * Limit `string`
  * Marker `string`

#### Output
* output [DescribeFolderContentsResponse](#describefoldercontentsresponse)

### GetFolderPath



```js
amazonaws_workdocs.GetFolderPath({
  "FolderId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * FolderId **required** `string`
  * limit `integer`
  * fields `string`
  * marker `string`

#### Output
* output [GetFolderPathResponse](#getfolderpathresponse)

### DescribeGroups



```js
amazonaws_workdocs.DescribeGroups({
  "searchQuery": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * searchQuery **required** `string`
  * organizationId `string`
  * marker `string`
  * limit `integer`

#### Output
* output [DescribeGroupsResponse](#describegroupsresponse)

### GetCurrentUser



```js
amazonaws_workdocs.GetCurrentUser({
  "Authentication": ""
}, context)
```

#### Input
* input `object`
  * Authentication **required** `string`

#### Output
* output [GetCurrentUserResponse](#getcurrentuserresponse)

### DescribeRootFolders



```js
amazonaws_workdocs.DescribeRootFolders({
  "Authentication": ""
}, context)
```

#### Input
* input `object`
  * Authentication **required** `string`
  * limit `integer`
  * marker `string`

#### Output
* output [DescribeRootFoldersResponse](#describerootfoldersresponse)

### DescribeNotificationSubscriptions



```js
amazonaws_workdocs.DescribeNotificationSubscriptions({
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** `string`
  * marker `string`
  * limit `integer`

#### Output
* output [DescribeNotificationSubscriptionsResponse](#describenotificationsubscriptionsresponse)

### CreateNotificationSubscription



```js
amazonaws_workdocs.CreateNotificationSubscription({
  "OrganizationId": "",
  "Endpoint": "",
  "Protocol": "",
  "SubscriptionType": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** `string`
  * Endpoint **required** `string`: The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.
  * Protocol **required** `string` (values: HTTPS): The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
  * SubscriptionType **required** `string` (values: ALL): The notification type.

#### Output
* output [CreateNotificationSubscriptionResponse](#createnotificationsubscriptionresponse)

### DeleteNotificationSubscription



```js
amazonaws_workdocs.DeleteNotificationSubscription({
  "SubscriptionId": "",
  "OrganizationId": ""
}, context)
```

#### Input
* input `object`
  * SubscriptionId **required** `string`
  * OrganizationId **required** `string`

#### Output
*Output schema unknown*

### GetResources



```js
amazonaws_workdocs.GetResources({}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * userId `string`
  * collectionType `string`
  * limit `integer`
  * marker `string`

#### Output
* output [GetResourcesResponse](#getresourcesresponse)

### DeleteCustomMetadata



```js
amazonaws_workdocs.DeleteCustomMetadata({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`
  * versionId `string`
  * keys `array`
  * deleteAll `boolean`

#### Output
* output [DeleteCustomMetadataResponse](#deletecustommetadataresponse)

### CreateCustomMetadata



```js
amazonaws_workdocs.CreateCustomMetadata({
  "ResourceId": "",
  "CustomMetadata": {}
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`
  * versionid `string`
  * CustomMetadata **required** `object`: Custom metadata in the form of name-value pairs.

#### Output
* output [CreateCustomMetadataResponse](#createcustommetadataresponse)

### DeleteLabels



```js
amazonaws_workdocs.DeleteLabels({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * Authentication `string`
  * labels `array`
  * deleteAll `boolean`

#### Output
* output [DeleteLabelsResponse](#deletelabelsresponse)

### CreateLabels



```js
amazonaws_workdocs.CreateLabels({
  "ResourceId": "",
  "Labels": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * Authentication `string`
  * Labels **required** `array`: List of labels to add to the resource.
    * items [SharedLabel](#sharedlabel)

#### Output
* output [CreateLabelsResponse](#createlabelsresponse)

### RemoveAllResourcePermissions



```js
amazonaws_workdocs.RemoveAllResourcePermissions({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`

#### Output
*Output schema unknown*

### DescribeResourcePermissions



```js
amazonaws_workdocs.DescribeResourcePermissions({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`
  * principalId `string`
  * limit `integer`
  * marker `string`

#### Output
* output [DescribeResourcePermissionsResponse](#describeresourcepermissionsresponse)

### AddResourcePermissions



```js
amazonaws_workdocs.AddResourcePermissions({
  "ResourceId": "",
  "Principals": []
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`
  * NotificationOptions `object`: Set of options which defines notification preferences of given action.
    * EmailMessage
    * SendEmail
  * Principals **required** `array`: The users, groups, or organization being granted permission.
    * items [SharePrincipal](#shareprincipal)

#### Output
*Output schema unknown*

### RemoveResourcePermission



```js
amazonaws_workdocs.RemoveResourcePermission({
  "ResourceId": "",
  "PrincipalId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * ResourceId **required** `string`
  * PrincipalId **required** `string`
  * type `string`

#### Output
*Output schema unknown*

### DescribeUsers



```js
amazonaws_workdocs.DescribeUsers({}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * organizationId `string`
  * userIds `string`
  * query `string`
  * include `string`
  * order `string`
  * sort `string`
  * marker `string`
  * limit `integer`
  * fields `string`
  * Limit `string`
  * Marker `string`

#### Output
* output [DescribeUsersResponse](#describeusersresponse)

### CreateUser



```js
amazonaws_workdocs.CreateUser({
  "Username": "",
  "GivenName": "",
  "Surname": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * EmailAddress `string`: The email address of the user.
  * GivenName **required** `string`: The given name of the user.
  * OrganizationId `string`: The ID of the organization.
  * Password **required** `string`: The password of the user.
  * StorageRule `object`: Describes the storage for a user.
    * StorageAllocatedInBytes
    * StorageType
  * Surname **required** `string`: The surname of the user.
  * TimeZoneId `string`: The time zone ID of the user.
  * Username **required** `string`: The login name of the user.

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_workdocs.DeleteUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * UserId **required** `string`

#### Output
*Output schema unknown*

### UpdateUser



```js
amazonaws_workdocs.UpdateUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * Authentication `string`
  * UserId **required** `string`
  * GivenName `string`: The given name of the user.
  * GrantPoweruserPrivileges `string` (values: TRUE, FALSE): Boolean value to determine whether the user is granted Poweruser privileges.
  * Locale `string` (values: en, fr, ko, de, es, ja, ru, zh_CN, zh_TW, pt_BR, default): The locale of the user.
  * StorageRule `object`: Describes the storage for a user.
    * StorageAllocatedInBytes
    * StorageType
  * Surname `string`: The surname of the user.
  * TimeZoneId `string`: The time zone ID of the user.
  * Type `string` (values: USER, ADMIN, POWERUSER, MINIMALUSER, WORKSPACESUSER): The type of the user.

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### DeactivateUser



```js
amazonaws_workdocs.DeactivateUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * Authentication `string`

#### Output
*Output schema unknown*

### ActivateUser



```js
amazonaws_workdocs.ActivateUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * UserId **required** `string`
  * Authentication `string`

#### Output
* output [ActivateUserResponse](#activateuserresponse)



## Definitions

### AbortDocumentVersionUploadRequest
* AbortDocumentVersionUploadRequest `object`

### ActivateUserRequest
* ActivateUserRequest `object`

### ActivateUserResponse
* ActivateUserResponse `object`
  * User
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username

### Activity
* Activity `object`: Describes the activity information.
  * CommentMetadata
    * CommentId
    * CommentStatus
    * Contributor
      * CreatedTimestamp
      * EmailAddress
      * GivenName
      * Id
      * Locale
      * ModifiedTimestamp
      * OrganizationId
      * RecycleBinFolderId
      * RootFolderId
      * Status
      * Storage
        * StorageRule
          * StorageAllocatedInBytes
          * StorageType
        * StorageUtilizedInBytes
      * Surname
      * TimeZoneId
      * Type
      * Username
    * CreatedTimestamp
    * RecipientId
  * Initiator
    * EmailAddress
    * GivenName
    * Id
    * Surname
    * Username
  * IsIndirectActivity
  * OrganizationId
  * OriginalParent
    * Id
    * Name
    * OriginalName
    * Owner
      * EmailAddress
      * GivenName
      * Id
      * Surname
      * Username
    * ParentId
    * Type
    * VersionId
  * Participants
    * Groups
      * items [GroupMetadata](#groupmetadata)
    * Users
      * items [UserMetadata](#usermetadata)
  * ResourceMetadata
    * Id
    * Name
    * OriginalName
    * Owner
      * EmailAddress
      * GivenName
      * Id
      * Surname
      * Username
    * ParentId
    * Type
    * VersionId
  * TimeStamp
  * Type

### ActivityNamesFilterType
* ActivityNamesFilterType `string`

### ActivityType
* ActivityType `string` (values: DOCUMENT_CHECKED_IN, DOCUMENT_CHECKED_OUT, DOCUMENT_RENAMED, DOCUMENT_VERSION_UPLOADED, DOCUMENT_VERSION_DELETED, DOCUMENT_VERSION_VIEWED, DOCUMENT_VERSION_DOWNLOADED, DOCUMENT_RECYCLED, DOCUMENT_RESTORED, DOCUMENT_REVERTED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, DOCUMENT_SHARE_PERMISSION_CHANGED, DOCUMENT_SHAREABLE_LINK_CREATED, DOCUMENT_SHAREABLE_LINK_REMOVED, DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED, DOCUMENT_MOVED, DOCUMENT_COMMENT_ADDED, DOCUMENT_COMMENT_DELETED, DOCUMENT_ANNOTATION_ADDED, DOCUMENT_ANNOTATION_DELETED, FOLDER_CREATED, FOLDER_DELETED, FOLDER_RENAMED, FOLDER_RECYCLED, FOLDER_RESTORED, FOLDER_SHARED, FOLDER_UNSHARED, FOLDER_SHARE_PERMISSION_CHANGED, FOLDER_SHAREABLE_LINK_CREATED, FOLDER_SHAREABLE_LINK_REMOVED, FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED, FOLDER_MOVED)

### AddResourcePermissionsRequest
* AddResourcePermissionsRequest `object`
  * NotificationOptions
    * EmailMessage
    * SendEmail
  * Principals **required**
    * items [SharePrincipal](#shareprincipal)

### AddResourcePermissionsResponse
* AddResourcePermissionsResponse `object`
  * ShareResults
    * items [ShareResult](#shareresult)

### AuthenticationHeaderType
* AuthenticationHeaderType `string`

### BooleanEnumType
* BooleanEnumType `string` (values: TRUE, FALSE)

### BooleanType
* BooleanType `boolean`

### Comment
* Comment `object`: Describes a comment.
  * CommentId **required**
  * Contributor
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username
  * CreatedTimestamp
  * ParentId
  * RecipientId
  * Status
  * Text
  * ThreadId
  * Visibility

### CommentIdType
* CommentIdType `string`

### CommentList
* CommentList `array`
  * items [Comment](#comment)

### CommentMetadata
* CommentMetadata `object`: Describes the metadata of a comment.
  * CommentId
  * CommentStatus
  * Contributor
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username
  * CreatedTimestamp
  * RecipientId

### CommentStatusType
* CommentStatusType `string` (values: DRAFT, PUBLISHED, DELETED)

### CommentTextType
* CommentTextType `string`

### CommentVisibilityType
* CommentVisibilityType `string` (values: PUBLIC, PRIVATE)

### ConcurrentModificationException


### ConflictingOperationException


### CreateCommentRequest
* CreateCommentRequest `object`
  * NotifyCollaborators
  * ParentId
  * Text **required**
  * ThreadId
  * Visibility

### CreateCommentResponse
* CreateCommentResponse `object`
  * Comment
    * CommentId **required**
    * Contributor
      * CreatedTimestamp
      * EmailAddress
      * GivenName
      * Id
      * Locale
      * ModifiedTimestamp
      * OrganizationId
      * RecycleBinFolderId
      * RootFolderId
      * Status
      * Storage
        * StorageRule
          * StorageAllocatedInBytes
          * StorageType
        * StorageUtilizedInBytes
      * Surname
      * TimeZoneId
      * Type
      * Username
    * CreatedTimestamp
    * ParentId
    * RecipientId
    * Status
    * Text
    * ThreadId
    * Visibility

### CreateCustomMetadataRequest
* CreateCustomMetadataRequest `object`
  * CustomMetadata **required**

### CreateCustomMetadataResponse
* CreateCustomMetadataResponse `object`

### CreateFolderRequest
* CreateFolderRequest `object`
  * Name
  * ParentFolderId **required**

### CreateFolderResponse
* CreateFolderResponse `object`
  * Metadata
    * CreatedTimestamp
    * CreatorId
    * Id
    * Labels
      * items [SharedLabel](#sharedlabel)
    * LatestVersionSize
    * ModifiedTimestamp
    * Name
    * ParentFolderId
    * ResourceState
    * Signature
    * Size

### CreateLabelsRequest
* CreateLabelsRequest `object`
  * Labels **required**
    * items [SharedLabel](#sharedlabel)

### CreateLabelsResponse
* CreateLabelsResponse `object`

### CreateNotificationSubscriptionRequest
* CreateNotificationSubscriptionRequest `object`
  * Endpoint **required**
  * Protocol **required**
  * SubscriptionType **required**

### CreateNotificationSubscriptionResponse
* CreateNotificationSubscriptionResponse `object`
  * Subscription
    * EndPoint
    * Protocol
    * SubscriptionId

### CreateUserRequest
* CreateUserRequest `object`
  * EmailAddress
  * GivenName **required**
  * OrganizationId
  * Password **required**
  * StorageRule
    * StorageAllocatedInBytes
    * StorageType
  * Surname **required**
  * TimeZoneId
  * Username **required**

### CreateUserResponse
* CreateUserResponse `object`
  * User
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username

### CustomMetadataKeyList
* CustomMetadataKeyList `array`
  * items [CustomMetadataKeyType](#custommetadatakeytype)

### CustomMetadataKeyType
* CustomMetadataKeyType `string`

### CustomMetadataLimitExceededException


### CustomMetadataMap
* CustomMetadataMap `object`

### CustomMetadataValueType
* CustomMetadataValueType `string`

### DeactivateUserRequest
* DeactivateUserRequest `object`

### DeactivatingLastSystemUserException


### DeleteCommentRequest
* DeleteCommentRequest `object`

### DeleteCustomMetadataRequest
* DeleteCustomMetadataRequest `object`

### DeleteCustomMetadataResponse
* DeleteCustomMetadataResponse `object`

### DeleteDocumentRequest
* DeleteDocumentRequest `object`

### DeleteFolderContentsRequest
* DeleteFolderContentsRequest `object`

### DeleteFolderRequest
* DeleteFolderRequest `object`

### DeleteLabelsRequest
* DeleteLabelsRequest `object`

### DeleteLabelsResponse
* DeleteLabelsResponse `object`

### DeleteNotificationSubscriptionRequest
* DeleteNotificationSubscriptionRequest `object`

### DeleteUserRequest
* DeleteUserRequest `object`

### DescribeActivitiesRequest
* DescribeActivitiesRequest `object`

### DescribeActivitiesResponse
* DescribeActivitiesResponse `object`
  * Marker
  * UserActivities
    * items [Activity](#activity)

### DescribeCommentsRequest
* DescribeCommentsRequest `object`

### DescribeCommentsResponse
* DescribeCommentsResponse `object`
  * Comments
    * items [Comment](#comment)
  * Marker

### DescribeDocumentVersionsRequest
* DescribeDocumentVersionsRequest `object`

### DescribeDocumentVersionsResponse
* DescribeDocumentVersionsResponse `object`
  * DocumentVersions
    * items [DocumentVersionMetadata](#documentversionmetadata)
  * Marker

### DescribeFolderContentsRequest
* DescribeFolderContentsRequest `object`

### DescribeFolderContentsResponse
* DescribeFolderContentsResponse `object`
  * Documents
    * items [DocumentMetadata](#documentmetadata)
  * Folders
    * items [FolderMetadata](#foldermetadata)
  * Marker

### DescribeGroupsRequest
* DescribeGroupsRequest `object`

### DescribeGroupsResponse
* DescribeGroupsResponse `object`
  * Groups
    * items [GroupMetadata](#groupmetadata)
  * Marker

### DescribeNotificationSubscriptionsRequest
* DescribeNotificationSubscriptionsRequest `object`

### DescribeNotificationSubscriptionsResponse
* DescribeNotificationSubscriptionsResponse `object`
  * Marker
  * Subscriptions
    * items [Subscription](#subscription)

### DescribeResourcePermissionsRequest
* DescribeResourcePermissionsRequest `object`

### DescribeResourcePermissionsResponse
* DescribeResourcePermissionsResponse `object`
  * Marker
  * Principals
    * items [Principal](#principal)

### DescribeRootFoldersRequest
* DescribeRootFoldersRequest `object`

### DescribeRootFoldersResponse
* DescribeRootFoldersResponse `object`
  * Folders
    * items [FolderMetadata](#foldermetadata)
  * Marker

### DescribeUsersRequest
* DescribeUsersRequest `object`

### DescribeUsersResponse
* DescribeUsersResponse `object`
  * Marker
  * TotalNumberOfUsers
  * Users
    * items [User](#user)

### DocumentContentType
* DocumentContentType `string`

### DocumentLockedForCommentsException


### DocumentMetadata
* DocumentMetadata `object`: Describes the document.
  * CreatedTimestamp
  * CreatorId
  * Id
  * Labels
    * items [SharedLabel](#sharedlabel)
  * LatestVersionMetadata
    * ContentCreatedTimestamp
    * ContentModifiedTimestamp
    * ContentType
    * CreatedTimestamp
    * CreatorId
    * Id
    * ModifiedTimestamp
    * Name
    * Signature
    * Size
    * Source
    * Status
    * Thumbnail
  * ModifiedTimestamp
  * ParentFolderId
  * ResourceState

### DocumentMetadataList
* DocumentMetadataList `array`
  * items [DocumentMetadata](#documentmetadata)

### DocumentSourceType
* DocumentSourceType `string` (values: ORIGINAL, WITH_COMMENTS)

### DocumentSourceUrlMap
* DocumentSourceUrlMap `object`

### DocumentStatusType
* DocumentStatusType `string` (values: INITIALIZED, ACTIVE)

### DocumentThumbnailType
* DocumentThumbnailType `string` (values: SMALL, SMALL_HQ, LARGE)

### DocumentThumbnailUrlMap
* DocumentThumbnailUrlMap `object`

### DocumentVersionIdType
* DocumentVersionIdType `string`

### DocumentVersionMetadata
* DocumentVersionMetadata `object`: Describes a version of a document.
  * ContentCreatedTimestamp
  * ContentModifiedTimestamp
  * ContentType
  * CreatedTimestamp
  * CreatorId
  * Id
  * ModifiedTimestamp
  * Name
  * Signature
  * Size
  * Source
  * Status
  * Thumbnail

### DocumentVersionMetadataList
* DocumentVersionMetadataList `array`
  * items [DocumentVersionMetadata](#documentversionmetadata)

### DocumentVersionStatus
* DocumentVersionStatus `string` (values: ACTIVE)

### DraftUploadOutOfSyncException


### EmailAddressType
* EmailAddressType `string`

### EntityAlreadyExistsException


### EntityNotExistsException


### FailedDependencyException


### FieldNamesType
* FieldNamesType `string`

### FolderContentType
* FolderContentType `string` (values: ALL, DOCUMENT, FOLDER)

### FolderMetadata
* FolderMetadata `object`: Describes a folder.
  * CreatedTimestamp
  * CreatorId
  * Id
  * Labels
    * items [SharedLabel](#sharedlabel)
  * LatestVersionSize
  * ModifiedTimestamp
  * Name
  * ParentFolderId
  * ResourceState
  * Signature
  * Size

### FolderMetadataList
* FolderMetadataList `array`
  * items [FolderMetadata](#foldermetadata)

### GetCurrentUserRequest
* GetCurrentUserRequest `object`

### GetCurrentUserResponse
* GetCurrentUserResponse `object`
  * User
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username

### GetDocumentPathRequest
* GetDocumentPathRequest `object`

### GetDocumentPathResponse
* GetDocumentPathResponse `object`
  * Path
    * Components
      * items [ResourcePathComponent](#resourcepathcomponent)

### GetDocumentRequest
* GetDocumentRequest `object`

### GetDocumentResponse
* GetDocumentResponse `object`
  * CustomMetadata
  * Metadata
    * CreatedTimestamp
    * CreatorId
    * Id
    * Labels
      * items [SharedLabel](#sharedlabel)
    * LatestVersionMetadata
      * ContentCreatedTimestamp
      * ContentModifiedTimestamp
      * ContentType
      * CreatedTimestamp
      * CreatorId
      * Id
      * ModifiedTimestamp
      * Name
      * Signature
      * Size
      * Source
      * Status
      * Thumbnail
    * ModifiedTimestamp
    * ParentFolderId
    * ResourceState

### GetDocumentVersionRequest
* GetDocumentVersionRequest `object`

### GetDocumentVersionResponse
* GetDocumentVersionResponse `object`
  * CustomMetadata
  * Metadata
    * ContentCreatedTimestamp
    * ContentModifiedTimestamp
    * ContentType
    * CreatedTimestamp
    * CreatorId
    * Id
    * ModifiedTimestamp
    * Name
    * Signature
    * Size
    * Source
    * Status
    * Thumbnail

### GetFolderPathRequest
* GetFolderPathRequest `object`

### GetFolderPathResponse
* GetFolderPathResponse `object`
  * Path
    * Components
      * items [ResourcePathComponent](#resourcepathcomponent)

### GetFolderRequest
* GetFolderRequest `object`

### GetFolderResponse
* GetFolderResponse `object`
  * CustomMetadata
  * Metadata
    * CreatedTimestamp
    * CreatorId
    * Id
    * Labels
      * items [SharedLabel](#sharedlabel)
    * LatestVersionSize
    * ModifiedTimestamp
    * Name
    * ParentFolderId
    * ResourceState
    * Signature
    * Size

### GetResourcesRequest
* GetResourcesRequest `object`

### GetResourcesResponse
* GetResourcesResponse `object`
  * Documents
    * items [DocumentMetadata](#documentmetadata)
  * Folders
    * items [FolderMetadata](#foldermetadata)
  * Marker

### GroupMetadata
* GroupMetadata `object`: Describes the metadata of a user group.
  * Id
  * Name

### GroupMetadataList
* GroupMetadataList `array`
  * items [GroupMetadata](#groupmetadata)

### GroupNameType
* GroupNameType `string`

### HashType
* HashType `string`

### HeaderNameType
* HeaderNameType `string`

### HeaderValueType
* HeaderValueType `string`

### IdType
* IdType `string`

### IllegalUserStateException


### InitiateDocumentVersionUploadRequest
* InitiateDocumentVersionUploadRequest `object`
  * ContentCreatedTimestamp
  * ContentModifiedTimestamp
  * ContentType
  * DocumentSizeInBytes
  * Id
  * Name
  * ParentFolderId **required**

### InitiateDocumentVersionUploadResponse
* InitiateDocumentVersionUploadResponse `object`
  * Metadata
    * CreatedTimestamp
    * CreatorId
    * Id
    * Labels
      * items [SharedLabel](#sharedlabel)
    * LatestVersionMetadata
      * ContentCreatedTimestamp
      * ContentModifiedTimestamp
      * ContentType
      * CreatedTimestamp
      * CreatorId
      * Id
      * ModifiedTimestamp
      * Name
      * Signature
      * Size
      * Source
      * Status
      * Thumbnail
    * ModifiedTimestamp
    * ParentFolderId
    * ResourceState
  * UploadMetadata
    * SignedHeaders
    * UploadUrl

### InvalidArgumentException


### InvalidCommentOperationException


### InvalidOperationException


### InvalidPasswordException


### LimitExceededException


### LimitType
* LimitType `integer`

### LocaleType
* LocaleType `string` (values: en, fr, ko, de, es, ja, ru, zh_CN, zh_TW, pt_BR, default)

### MarkerType
* MarkerType `string`

### MessageType
* MessageType `string`

### NotificationOptions
* NotificationOptions `object`: Set of options which defines notification preferences of given action.
  * EmailMessage
  * SendEmail

### OrderType
* OrderType `string` (values: ASCENDING, DESCENDING)

### OrganizationUserList
* OrganizationUserList `array`
  * items [User](#user)

### PageMarkerType
* PageMarkerType `string`

### Participants
* Participants `object`: Describes the users or user groups.
  * Groups
    * items [GroupMetadata](#groupmetadata)
  * Users
    * items [UserMetadata](#usermetadata)

### PasswordType
* PasswordType `string`

### PermissionInfo
* PermissionInfo `object`: Describes the permissions.
  * Role
  * Type

### PermissionInfoList
* PermissionInfoList `array`
  * items [PermissionInfo](#permissioninfo)

### PositiveIntegerType
* PositiveIntegerType `integer`

### PositiveSizeType
* PositiveSizeType `integer`

### Principal
* Principal `object`: Describes a resource.
  * Id
  * Roles
    * items [PermissionInfo](#permissioninfo)
  * Type

### PrincipalList
* PrincipalList `array`
  * items [Principal](#principal)

### PrincipalType
* PrincipalType `string` (values: USER, GROUP, INVITE, ANONYMOUS, ORGANIZATION)

### ProhibitedStateException


### RemoveAllResourcePermissionsRequest
* RemoveAllResourcePermissionsRequest `object`

### RemoveResourcePermissionRequest
* RemoveResourcePermissionRequest `object`

### RequestedEntityTooLargeException


### ResourceAlreadyCheckedOutException


### ResourceCollectionType
* ResourceCollectionType `string` (values: SHARED_WITH_ME)

### ResourceIdType
* ResourceIdType `string`

### ResourceMetadata
* ResourceMetadata `object`: Describes the metadata of a resource.
  * Id
  * Name
  * OriginalName
  * Owner
    * EmailAddress
    * GivenName
    * Id
    * Surname
    * Username
  * ParentId
  * Type
  * VersionId

### ResourceNameType
* ResourceNameType `string`

### ResourcePath
* ResourcePath `object`: Describes the path information of a resource.
  * Components
    * items [ResourcePathComponent](#resourcepathcomponent)

### ResourcePathComponent
* ResourcePathComponent `object`: Describes the resource path.
  * Id
  * Name

### ResourcePathComponentList
* ResourcePathComponentList `array`
  * items [ResourcePathComponent](#resourcepathcomponent)

### ResourceSortType
* ResourceSortType `string` (values: DATE, NAME)

### ResourceStateType
* ResourceStateType `string` (values: ACTIVE, RESTORING, RECYCLING, RECYCLED)

### ResourceType
* ResourceType `string` (values: FOLDER, DOCUMENT)

### RolePermissionType
* RolePermissionType `string` (values: DIRECT, INHERITED)

### RoleType
* RoleType `string` (values: VIEWER, CONTRIBUTOR, OWNER, COOWNER)

### SearchQueryType
* SearchQueryType `string`

### ServiceUnavailableException


### SharePrincipal
* SharePrincipal `object`: Describes the recipient type and ID, if available.
  * Id **required**
  * Role **required**
  * Type **required**

### SharePrincipalList
* SharePrincipalList `array`
  * items [SharePrincipal](#shareprincipal)

### ShareResult
* ShareResult `object`: Describes the share results of a resource.
  * InviteePrincipalId
  * PrincipalId
  * Role
  * ShareId
  * Status
  * StatusMessage

### ShareResultsList
* ShareResultsList `array`
  * items [ShareResult](#shareresult)

### ShareStatusType
* ShareStatusType `string` (values: SUCCESS, FAILURE)

### SharedLabel
* SharedLabel `string`

### SharedLabels
* SharedLabels `array`
  * items [SharedLabel](#sharedlabel)

### SignedHeaderMap
* SignedHeaderMap `object`

### SizeType
* SizeType `integer`

### StorageLimitExceededException


### StorageLimitWillExceedException


### StorageRuleType
* StorageRuleType `object`: Describes the storage for a user.
  * StorageAllocatedInBytes
  * StorageType

### StorageType
* StorageType `string` (values: UNLIMITED, QUOTA)

### Subscription
* Subscription `object`: Describes a subscription.
  * EndPoint
  * Protocol
  * SubscriptionId

### SubscriptionEndPointType
* SubscriptionEndPointType `string`

### SubscriptionList
* SubscriptionList `array`
  * items [Subscription](#subscription)

### SubscriptionProtocolType
* SubscriptionProtocolType `string` (values: HTTPS)

### SubscriptionType
* SubscriptionType `string` (values: ALL)

### TimeZoneIdType
* TimeZoneIdType `string`

### TimestampType
* TimestampType `string`

### TooManyLabelsException


### TooManySubscriptionsException


### UnauthorizedOperationException


### UnauthorizedResourceAccessException


### UpdateDocumentRequest
* UpdateDocumentRequest `object`
  * Name
  * ParentFolderId
  * ResourceState

### UpdateDocumentVersionRequest
* UpdateDocumentVersionRequest `object`
  * VersionStatus

### UpdateFolderRequest
* UpdateFolderRequest `object`
  * Name
  * ParentFolderId
  * ResourceState

### UpdateUserRequest
* UpdateUserRequest `object`
  * GivenName
  * GrantPoweruserPrivileges
  * Locale
  * StorageRule
    * StorageAllocatedInBytes
    * StorageType
  * Surname
  * TimeZoneId
  * Type

### UpdateUserResponse
* UpdateUserResponse `object`
  * User
    * CreatedTimestamp
    * EmailAddress
    * GivenName
    * Id
    * Locale
    * ModifiedTimestamp
    * OrganizationId
    * RecycleBinFolderId
    * RootFolderId
    * Status
    * Storage
      * StorageRule
        * StorageAllocatedInBytes
        * StorageType
      * StorageUtilizedInBytes
    * Surname
    * TimeZoneId
    * Type
    * Username

### UploadMetadata
* UploadMetadata `object`: Describes the upload.
  * SignedHeaders
  * UploadUrl

### UrlType
* UrlType `string`

### User
* User `object`: Describes a user.
  * CreatedTimestamp
  * EmailAddress
  * GivenName
  * Id
  * Locale
  * ModifiedTimestamp
  * OrganizationId
  * RecycleBinFolderId
  * RootFolderId
  * Status
  * Storage
    * StorageRule
      * StorageAllocatedInBytes
      * StorageType
    * StorageUtilizedInBytes
  * Surname
  * TimeZoneId
  * Type
  * Username

### UserActivities
* UserActivities `array`
  * items [Activity](#activity)

### UserAttributeValueType
* UserAttributeValueType `string`

### UserFilterType
* UserFilterType `string` (values: ALL, ACTIVE_PENDING)

### UserIdsType
* UserIdsType `string`

### UserMetadata
* UserMetadata `object`: Describes the metadata of the user.
  * EmailAddress
  * GivenName
  * Id
  * Surname
  * Username

### UserMetadataList
* UserMetadataList `array`
  * items [UserMetadata](#usermetadata)

### UserSortType
* UserSortType `string` (values: USER_NAME, FULL_NAME, STORAGE_LIMIT, USER_STATUS, STORAGE_USED)

### UserStatusType
* UserStatusType `string` (values: ACTIVE, INACTIVE, PENDING)

### UserStorageMetadata
* UserStorageMetadata `object`: Describes the storage for a user.
  * StorageRule
    * StorageAllocatedInBytes
    * StorageType
  * StorageUtilizedInBytes

### UserType
* UserType `string` (values: USER, ADMIN, POWERUSER, MINIMALUSER, WORKSPACESUSER)

### UsernameType
* UsernameType `string`


