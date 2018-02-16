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

amazonaws_workdocs.DescribeActivities({}).then(data => {
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
  * ContentCreatedTimestamp [TimestampType](#timestamptype)
  * ContentModifiedTimestamp [TimestampType](#timestamptype)
  * ContentType [DocumentContentType](#documentcontenttype)
  * DocumentSizeInBytes [SizeType](#sizetype)
  * Id [ResourceIdType](#resourceidtype)
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId **required** [ResourceIdType](#resourceidtype)

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
  * DocumentId **required** `string`

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
  * DocumentId **required** `string`
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)

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
  * DocumentId **required** `string`

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
  * Limit `string`
  * Marker `string`
  * DocumentId **required** `string`

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
  * DocumentId **required** `string`
  * VersionId **required** `string`

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
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * VersionStatus [DocumentVersionStatus](#documentversionstatus)

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
  * DocumentId **required** `string`
  * VersionId **required** `string`
  * NotifyCollaborators [BooleanType](#booleantype)
  * ParentId [CommentIdType](#commentidtype)
  * Text **required** [CommentTextType](#commenttexttype)
  * ThreadId [CommentIdType](#commentidtype)
  * Visibility [CommentVisibilityType](#commentvisibilitytype)

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
  * DocumentId **required** `string`
  * VersionId **required** `string`

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
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId **required** [ResourceIdType](#resourceidtype)

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
  * FolderId **required** `string`

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
  * FolderId **required** `string`
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)

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
  * Limit `string`
  * Marker `string`
  * FolderId **required** `string`

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
  * FolderId **required** `string`

#### Output
* output [GetFolderPathResponse](#getfolderpathresponse)

### DescribeGroups



```js
amazonaws_workdocs.DescribeGroups({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeGroupsResponse](#describegroupsresponse)

### GetCurrentUser



```js
amazonaws_workdocs.GetCurrentUser({}, context)
```

#### Input
* input `object`

#### Output
* output [GetCurrentUserResponse](#getcurrentuserresponse)

### DescribeRootFolders



```js
amazonaws_workdocs.DescribeRootFolders({}, context)
```

#### Input
* input `object`

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
  * Endpoint **required** [SubscriptionEndPointType](#subscriptionendpointtype)
  * Protocol **required** [SubscriptionProtocolType](#subscriptionprotocoltype)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)

#### Output
* output [CreateNotificationSubscriptionResponse](#createnotificationsubscriptionresponse)

### DeleteNotificationSubscription



```js
amazonaws_workdocs.DeleteNotificationSubscription({
  "OrganizationId": "",
  "SubscriptionId": ""
}, context)
```

#### Input
* input `object`
  * OrganizationId **required** `string`
  * SubscriptionId **required** `string`

#### Output
*Output schema unknown*

### DeleteCustomMetadata



```js
amazonaws_workdocs.DeleteCustomMetadata({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`

#### Output
* output [DeleteCustomMetadataResponse](#deletecustommetadataresponse)

### CreateCustomMetadata



```js
amazonaws_workdocs.CreateCustomMetadata({
  "ResourceId": "",
  "CustomMetadata": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** `string`
  * CustomMetadata **required** [CustomMetadataMap](#custommetadatamap)

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
  * Labels **required** [SharedLabels](#sharedlabels)

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
  * ResourceId **required** `string`

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
  * ResourceId **required** `string`
  * NotificationOptions [NotificationOptions](#notificationoptions)
  * Principals **required** [SharePrincipalList](#shareprincipallist)

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
  * ResourceId **required** `string`
  * PrincipalId **required** `string`

#### Output
*Output schema unknown*

### DescribeUsers



```js
amazonaws_workdocs.DescribeUsers({}, context)
```

#### Input
* input `object`
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
  * EmailAddress [EmailAddressType](#emailaddresstype)
  * GivenName **required** [UserAttributeValueType](#userattributevaluetype)
  * OrganizationId [IdType](#idtype)
  * Password **required** [PasswordType](#passwordtype)
  * StorageRule [StorageRuleType](#storageruletype)
  * Surname **required** [UserAttributeValueType](#userattributevaluetype)
  * TimeZoneId [TimeZoneIdType](#timezoneidtype)
  * Username **required** [UsernameType](#usernametype)

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
  * UserId **required** `string`
  * GivenName [UserAttributeValueType](#userattributevaluetype)
  * GrantPoweruserPrivileges [BooleanEnumType](#booleanenumtype)
  * Locale [LocaleType](#localetype)
  * StorageRule [StorageRuleType](#storageruletype)
  * Surname [UserAttributeValueType](#userattributevaluetype)
  * TimeZoneId [TimeZoneIdType](#timezoneidtype)
  * Type [UserType](#usertype)

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

#### Output
* output [ActivateUserResponse](#activateuserresponse)



## Definitions

### AbortDocumentVersionUploadRequest
* AbortDocumentVersionUploadRequest `object`

### ActivateUserRequest
* ActivateUserRequest `object`

### ActivateUserResponse
* ActivateUserResponse `object`
  * User [User](#user)

### Activity
* Activity `object`: Describes the activity information.
  * CommentMetadata [CommentMetadata](#commentmetadata)
  * Initiator [UserMetadata](#usermetadata)
  * OrganizationId [IdType](#idtype)
  * OriginalParent [ResourceMetadata](#resourcemetadata)
  * Participants [Participants](#participants)
  * ResourceMetadata [ResourceMetadata](#resourcemetadata)
  * TimeStamp [TimestampType](#timestamptype)
  * Type [ActivityType](#activitytype)

### ActivityType
* ActivityType `string` (values: DOCUMENT_CHECKED_IN, DOCUMENT_CHECKED_OUT, DOCUMENT_RENAMED, DOCUMENT_VERSION_UPLOADED, DOCUMENT_VERSION_DELETED, DOCUMENT_RECYCLED, DOCUMENT_RESTORED, DOCUMENT_REVERTED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, DOCUMENT_SHARE_PERMISSION_CHANGED, DOCUMENT_SHAREABLE_LINK_CREATED, DOCUMENT_SHAREABLE_LINK_REMOVED, DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED, DOCUMENT_MOVED, DOCUMENT_COMMENT_ADDED, DOCUMENT_COMMENT_DELETED, DOCUMENT_ANNOTATION_ADDED, DOCUMENT_ANNOTATION_DELETED, FOLDER_CREATED, FOLDER_DELETED, FOLDER_RENAMED, FOLDER_RECYCLED, FOLDER_RESTORED, FOLDER_SHARED, FOLDER_UNSHARED, FOLDER_SHARE_PERMISSION_CHANGED, FOLDER_SHAREABLE_LINK_CREATED, FOLDER_SHAREABLE_LINK_REMOVED, FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED, FOLDER_MOVED)

### AddResourcePermissionsRequest
* AddResourcePermissionsRequest `object`
  * NotificationOptions [NotificationOptions](#notificationoptions)
  * Principals **required** [SharePrincipalList](#shareprincipallist)

### AddResourcePermissionsResponse
* AddResourcePermissionsResponse `object`
  * ShareResults [ShareResultsList](#shareresultslist)

### AuthenticationHeaderType
* AuthenticationHeaderType `string`

### BooleanEnumType
* BooleanEnumType `string` (values: TRUE, FALSE)

### BooleanType
* BooleanType `boolean`

### Comment
* Comment `object`: Describes a comment.
  * CommentId **required** [CommentIdType](#commentidtype)
  * Contributor [User](#user)
  * CreatedTimestamp [TimestampType](#timestamptype)
  * ParentId [CommentIdType](#commentidtype)
  * RecipientId [IdType](#idtype)
  * Status [CommentStatusType](#commentstatustype)
  * Text [CommentTextType](#commenttexttype)
  * ThreadId [CommentIdType](#commentidtype)
  * Visibility [CommentVisibilityType](#commentvisibilitytype)

### CommentIdType
* CommentIdType `string`

### CommentList
* CommentList `array`
  * items [Comment](#comment)

### CommentMetadata
* CommentMetadata `object`: Describes the metadata of a comment.
  * CommentId [CommentIdType](#commentidtype)
  * CommentStatus [CommentStatusType](#commentstatustype)
  * Contributor [User](#user)
  * CreatedTimestamp [TimestampType](#timestamptype)
  * RecipientId [IdType](#idtype)

### CommentStatusType
* CommentStatusType `string` (values: DRAFT, PUBLISHED, DELETED)

### CommentTextType
* CommentTextType `string`

### CommentVisibilityType
* CommentVisibilityType `string` (values: PUBLIC, PRIVATE)

### ConcurrentModificationException
* ConcurrentModificationException `object`: The resource hierarchy is changing.
  * Message [ErrorMessageType](#errormessagetype)

### CreateCommentRequest
* CreateCommentRequest `object`
  * NotifyCollaborators [BooleanType](#booleantype)
  * ParentId [CommentIdType](#commentidtype)
  * Text **required** [CommentTextType](#commenttexttype)
  * ThreadId [CommentIdType](#commentidtype)
  * Visibility [CommentVisibilityType](#commentvisibilitytype)

### CreateCommentResponse
* CreateCommentResponse `object`
  * Comment [Comment](#comment)

### CreateCustomMetadataRequest
* CreateCustomMetadataRequest `object`
  * CustomMetadata **required** [CustomMetadataMap](#custommetadatamap)

### CreateCustomMetadataResponse
* CreateCustomMetadataResponse `object`

### CreateFolderRequest
* CreateFolderRequest `object`
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId **required** [ResourceIdType](#resourceidtype)

### CreateFolderResponse
* CreateFolderResponse `object`
  * Metadata [FolderMetadata](#foldermetadata)

### CreateLabelsRequest
* CreateLabelsRequest `object`
  * Labels **required** [SharedLabels](#sharedlabels)

### CreateLabelsResponse
* CreateLabelsResponse `object`

### CreateNotificationSubscriptionRequest
* CreateNotificationSubscriptionRequest `object`
  * Endpoint **required** [SubscriptionEndPointType](#subscriptionendpointtype)
  * Protocol **required** [SubscriptionProtocolType](#subscriptionprotocoltype)
  * SubscriptionType **required** [SubscriptionType](#subscriptiontype)

### CreateNotificationSubscriptionResponse
* CreateNotificationSubscriptionResponse `object`
  * Subscription [Subscription](#subscription)

### CreateUserRequest
* CreateUserRequest `object`
  * EmailAddress [EmailAddressType](#emailaddresstype)
  * GivenName **required** [UserAttributeValueType](#userattributevaluetype)
  * OrganizationId [IdType](#idtype)
  * Password **required** [PasswordType](#passwordtype)
  * StorageRule [StorageRuleType](#storageruletype)
  * Surname **required** [UserAttributeValueType](#userattributevaluetype)
  * TimeZoneId [TimeZoneIdType](#timezoneidtype)
  * Username **required** [UsernameType](#usernametype)

### CreateUserResponse
* CreateUserResponse `object`
  * User [User](#user)

### CustomMetadataKeyList
* CustomMetadataKeyList `array`
  * items [CustomMetadataKeyType](#custommetadatakeytype)

### CustomMetadataKeyType
* CustomMetadataKeyType `string`

### CustomMetadataLimitExceededException
* CustomMetadataLimitExceededException `object`: The limit has been reached on the number of custom properties for the specified resource.
  * Message [ErrorMessageType](#errormessagetype)

### CustomMetadataMap
* CustomMetadataMap `array`
  * items `object`
    * key [CustomMetadataKeyType](#custommetadatakeytype)
    * value [CustomMetadataValueType](#custommetadatavaluetype)

### CustomMetadataValueType
* CustomMetadataValueType `string`

### DeactivateUserRequest
* DeactivateUserRequest `object`

### DeactivatingLastSystemUserException
* DeactivatingLastSystemUserException `object`: The last user in the organization is being deactivated.

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
  * Marker [MarkerType](#markertype)
  * UserActivities [UserActivities](#useractivities)

### DescribeCommentsRequest
* DescribeCommentsRequest `object`

### DescribeCommentsResponse
* DescribeCommentsResponse `object`
  * Comments [CommentList](#commentlist)
  * Marker [MarkerType](#markertype)

### DescribeDocumentVersionsRequest
* DescribeDocumentVersionsRequest `object`

### DescribeDocumentVersionsResponse
* DescribeDocumentVersionsResponse `object`
  * DocumentVersions [DocumentVersionMetadataList](#documentversionmetadatalist)
  * Marker [PageMarkerType](#pagemarkertype)

### DescribeFolderContentsRequest
* DescribeFolderContentsRequest `object`

### DescribeFolderContentsResponse
* DescribeFolderContentsResponse `object`
  * Documents [DocumentMetadataList](#documentmetadatalist)
  * Folders [FolderMetadataList](#foldermetadatalist)
  * Marker [PageMarkerType](#pagemarkertype)

### DescribeGroupsRequest
* DescribeGroupsRequest `object`

### DescribeGroupsResponse
* DescribeGroupsResponse `object`
  * Groups [GroupMetadataList](#groupmetadatalist)
  * Marker [MarkerType](#markertype)

### DescribeNotificationSubscriptionsRequest
* DescribeNotificationSubscriptionsRequest `object`

### DescribeNotificationSubscriptionsResponse
* DescribeNotificationSubscriptionsResponse `object`
  * Marker [PageMarkerType](#pagemarkertype)
  * Subscriptions [SubscriptionList](#subscriptionlist)

### DescribeResourcePermissionsRequest
* DescribeResourcePermissionsRequest `object`

### DescribeResourcePermissionsResponse
* DescribeResourcePermissionsResponse `object`
  * Marker [PageMarkerType](#pagemarkertype)
  * Principals [PrincipalList](#principallist)

### DescribeRootFoldersRequest
* DescribeRootFoldersRequest `object`

### DescribeRootFoldersResponse
* DescribeRootFoldersResponse `object`
  * Folders [FolderMetadataList](#foldermetadatalist)
  * Marker [PageMarkerType](#pagemarkertype)

### DescribeUsersRequest
* DescribeUsersRequest `object`

### DescribeUsersResponse
* DescribeUsersResponse `object`
  * Marker [PageMarkerType](#pagemarkertype)
  * TotalNumberOfUsers [SizeType](#sizetype)
  * Users [OrganizationUserList](#organizationuserlist)

### DocumentContentType
* DocumentContentType `string`

### DocumentLockedForCommentsException
* DocumentLockedForCommentsException `object`: This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.
  * Message [ErrorMessageType](#errormessagetype)

### DocumentMetadata
* DocumentMetadata `object`: Describes the document.
  * CreatedTimestamp [TimestampType](#timestamptype)
  * CreatorId [IdType](#idtype)
  * Id [ResourceIdType](#resourceidtype)
  * Labels [SharedLabels](#sharedlabels)
  * LatestVersionMetadata [DocumentVersionMetadata](#documentversionmetadata)
  * ModifiedTimestamp [TimestampType](#timestamptype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)

### DocumentMetadataList
* DocumentMetadataList `array`
  * items [DocumentMetadata](#documentmetadata)

### DocumentSourceType
* DocumentSourceType `string` (values: ORIGINAL, WITH_COMMENTS)

### DocumentSourceUrlMap
* DocumentSourceUrlMap `array`
  * items `object`
    * key [DocumentSourceType](#documentsourcetype)
    * value [UrlType](#urltype)

### DocumentStatusType
* DocumentStatusType `string` (values: INITIALIZED, ACTIVE)

### DocumentThumbnailType
* DocumentThumbnailType `string` (values: SMALL, SMALL_HQ, LARGE)

### DocumentThumbnailUrlMap
* DocumentThumbnailUrlMap `array`
  * items `object`
    * key [DocumentThumbnailType](#documentthumbnailtype)
    * value [UrlType](#urltype)

### DocumentVersionIdType
* DocumentVersionIdType `string`

### DocumentVersionMetadata
* DocumentVersionMetadata `object`: Describes a version of a document.
  * ContentCreatedTimestamp [TimestampType](#timestamptype)
  * ContentModifiedTimestamp [TimestampType](#timestamptype)
  * ContentType [DocumentContentType](#documentcontenttype)
  * CreatedTimestamp [TimestampType](#timestamptype)
  * CreatorId [IdType](#idtype)
  * Id [DocumentVersionIdType](#documentversionidtype)
  * ModifiedTimestamp [TimestampType](#timestamptype)
  * Name [ResourceNameType](#resourcenametype)
  * Signature [HashType](#hashtype)
  * Size [SizeType](#sizetype)
  * Source [DocumentSourceUrlMap](#documentsourceurlmap)
  * Status [DocumentStatusType](#documentstatustype)
  * Thumbnail [DocumentThumbnailUrlMap](#documentthumbnailurlmap)

### DocumentVersionMetadataList
* DocumentVersionMetadataList `array`
  * items [DocumentVersionMetadata](#documentversionmetadata)

### DocumentVersionStatus
* DocumentVersionStatus `string` (values: ACTIVE)

### DraftUploadOutOfSyncException
* DraftUploadOutOfSyncException `object`: This exception is thrown when a valid checkout ID is not presented on document version upload calls for a document that has been checked out from Web client.
  * Message [ErrorMessageType](#errormessagetype)

### EmailAddressType
* EmailAddressType `string`

### EntityAlreadyExistsException
* EntityAlreadyExistsException `object`: The resource already exists.
  * Message [ErrorMessageType](#errormessagetype)

### EntityIdList
* EntityIdList `array`
  * items [IdType](#idtype)

### EntityNotExistsException
* EntityNotExistsException `object`: The resource does not exist.
  * EntityIds [EntityIdList](#entityidlist)
  * Message [ErrorMessageType](#errormessagetype)

### ErrorMessageType
* ErrorMessageType `string`

### FailedDependencyException
* FailedDependencyException `object`: The AWS Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
  * Message [ErrorMessageType](#errormessagetype)

### FieldNamesType
* FieldNamesType `string`

### FolderContentType
* FolderContentType `string` (values: ALL, DOCUMENT, FOLDER)

### FolderMetadata
* FolderMetadata `object`: Describes a folder.
  * CreatedTimestamp [TimestampType](#timestamptype)
  * CreatorId [IdType](#idtype)
  * Id [ResourceIdType](#resourceidtype)
  * Labels [SharedLabels](#sharedlabels)
  * LatestVersionSize [SizeType](#sizetype)
  * ModifiedTimestamp [TimestampType](#timestamptype)
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)
  * Signature [HashType](#hashtype)
  * Size [SizeType](#sizetype)

### FolderMetadataList
* FolderMetadataList `array`
  * items [FolderMetadata](#foldermetadata)

### GetCurrentUserRequest
* GetCurrentUserRequest `object`

### GetCurrentUserResponse
* GetCurrentUserResponse `object`
  * User [User](#user)

### GetDocumentPathRequest
* GetDocumentPathRequest `object`

### GetDocumentPathResponse
* GetDocumentPathResponse `object`
  * Path [ResourcePath](#resourcepath)

### GetDocumentRequest
* GetDocumentRequest `object`

### GetDocumentResponse
* GetDocumentResponse `object`
  * CustomMetadata [CustomMetadataMap](#custommetadatamap)
  * Metadata [DocumentMetadata](#documentmetadata)

### GetDocumentVersionRequest
* GetDocumentVersionRequest `object`

### GetDocumentVersionResponse
* GetDocumentVersionResponse `object`
  * CustomMetadata [CustomMetadataMap](#custommetadatamap)
  * Metadata [DocumentVersionMetadata](#documentversionmetadata)

### GetFolderPathRequest
* GetFolderPathRequest `object`

### GetFolderPathResponse
* GetFolderPathResponse `object`
  * Path [ResourcePath](#resourcepath)

### GetFolderRequest
* GetFolderRequest `object`

### GetFolderResponse
* GetFolderResponse `object`
  * CustomMetadata [CustomMetadataMap](#custommetadatamap)
  * Metadata [FolderMetadata](#foldermetadata)

### GroupMetadata
* GroupMetadata `object`: Describes the metadata of a user group.
  * Id [IdType](#idtype)
  * Name [GroupNameType](#groupnametype)

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
* IllegalUserStateException `object`: The user is undergoing transfer of ownership.
  * Message [ErrorMessageType](#errormessagetype)

### InitiateDocumentVersionUploadRequest
* InitiateDocumentVersionUploadRequest `object`
  * ContentCreatedTimestamp [TimestampType](#timestamptype)
  * ContentModifiedTimestamp [TimestampType](#timestamptype)
  * ContentType [DocumentContentType](#documentcontenttype)
  * DocumentSizeInBytes [SizeType](#sizetype)
  * Id [ResourceIdType](#resourceidtype)
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId **required** [ResourceIdType](#resourceidtype)

### InitiateDocumentVersionUploadResponse
* InitiateDocumentVersionUploadResponse `object`
  * Metadata [DocumentMetadata](#documentmetadata)
  * UploadMetadata [UploadMetadata](#uploadmetadata)

### InvalidArgumentException
* InvalidArgumentException `object`: The pagination marker or limit fields are not valid.
  * Message [ErrorMessageType](#errormessagetype)

### InvalidOperationException
* InvalidOperationException `object`: The operation is invalid.
  * Message [ErrorMessageType](#errormessagetype)

### InvalidPasswordException
* InvalidPasswordException `object`: The password is invalid.
  * Message [ErrorMessageType](#errormessagetype)

### LimitExceededException
* LimitExceededException `object`: The maximum of 100,000 folders under the parent folder has been exceeded.
  * Message [ErrorMessageType](#errormessagetype)

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
  * EmailMessage [MessageType](#messagetype)
  * SendEmail [BooleanType](#booleantype)

### OrderType
* OrderType `string` (values: ASCENDING, DESCENDING)

### OrganizationUserList
* OrganizationUserList `array`
  * items [User](#user)

### PageMarkerType
* PageMarkerType `string`

### Participants
* Participants `object`: Describes the users or user groups.
  * Groups [GroupMetadataList](#groupmetadatalist)
  * Users [UserMetadataList](#usermetadatalist)

### PasswordType
* PasswordType `string`

### PermissionInfo
* PermissionInfo `object`: Describes the permissions.
  * Role [RoleType](#roletype)
  * Type [RolePermissionType](#rolepermissiontype)

### PermissionInfoList
* PermissionInfoList `array`
  * items [PermissionInfo](#permissioninfo)

### PositiveIntegerType
* PositiveIntegerType `integer`

### PositiveSizeType
* PositiveSizeType `integer`

### Principal
* Principal `object`: Describes a resource.
  * Id [IdType](#idtype)
  * Roles [PermissionInfoList](#permissioninfolist)
  * Type [PrincipalType](#principaltype)

### PrincipalList
* PrincipalList `array`
  * items [Principal](#principal)

### PrincipalType
* PrincipalType `string` (values: USER, GROUP, INVITE, ANONYMOUS, ORGANIZATION)

### ProhibitedStateException
* ProhibitedStateException `object`: The specified document version is not in the INITIALIZED state.
  * Message [ErrorMessageType](#errormessagetype)

### RemoveAllResourcePermissionsRequest
* RemoveAllResourcePermissionsRequest `object`

### RemoveResourcePermissionRequest
* RemoveResourcePermissionRequest `object`

### ResourceAlreadyCheckedOutException
* ResourceAlreadyCheckedOutException `object`: The resource is already checked out.
  * Message [ErrorMessageType](#errormessagetype)

### ResourceIdType
* ResourceIdType `string`

### ResourceMetadata
* ResourceMetadata `object`: Describes the metadata of a resource.
  * Id [ResourceIdType](#resourceidtype)
  * Name [ResourceNameType](#resourcenametype)
  * OriginalName [ResourceNameType](#resourcenametype)
  * Owner [UserMetadata](#usermetadata)
  * ParentId [ResourceIdType](#resourceidtype)
  * Type [ResourceType](#resourcetype)
  * VersionId [DocumentVersionIdType](#documentversionidtype)

### ResourceNameType
* ResourceNameType `string`

### ResourcePath
* ResourcePath `object`: Describes the path information of a resource.
  * Components [ResourcePathComponentList](#resourcepathcomponentlist)

### ResourcePathComponent
* ResourcePathComponent `object`: Describes the resource path.
  * Id [IdType](#idtype)
  * Name [ResourceNameType](#resourcenametype)

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
* ServiceUnavailableException `object`: One or more of the dependencies is unavailable.
  * Message [ErrorMessageType](#errormessagetype)

### SharePrincipal
* SharePrincipal `object`: Describes the recipient type and ID, if available.
  * Id **required** [IdType](#idtype)
  * Role **required** [RoleType](#roletype)
  * Type **required** [PrincipalType](#principaltype)

### SharePrincipalList
* SharePrincipalList `array`
  * items [SharePrincipal](#shareprincipal)

### ShareResult
* ShareResult `object`: Describes the share results of a resource.
  * PrincipalId [IdType](#idtype)
  * Role [RoleType](#roletype)
  * ShareId [ResourceIdType](#resourceidtype)
  * Status [ShareStatusType](#sharestatustype)
  * StatusMessage [MessageType](#messagetype)

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
* SignedHeaderMap `array`
  * items `object`
    * key [HeaderNameType](#headernametype)
    * value [HeaderValueType](#headervaluetype)

### SizeType
* SizeType `integer`

### StorageLimitExceededException
* StorageLimitExceededException `object`: The storage limit has been exceeded.
  * Message [ErrorMessageType](#errormessagetype)

### StorageLimitWillExceedException
* StorageLimitWillExceedException `object`: The storage limit will be exceeded.
  * Message [ErrorMessageType](#errormessagetype)

### StorageRuleType
* StorageRuleType `object`: Describes the storage for a user.
  * StorageAllocatedInBytes [PositiveSizeType](#positivesizetype)
  * StorageType [StorageType](#storagetype)

### StorageType
* StorageType `string` (values: UNLIMITED, QUOTA)

### Subscription
* Subscription `object`: Describes a subscription.
  * EndPoint [SubscriptionEndPointType](#subscriptionendpointtype)
  * Protocol [SubscriptionProtocolType](#subscriptionprotocoltype)
  * SubscriptionId [IdType](#idtype)

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
* TooManyLabelsException `object`: The limit has been reached on the number of labels for the specified resource.
  * Message [ErrorMessageType](#errormessagetype)

### TooManySubscriptionsException
* TooManySubscriptionsException `object`: You've reached the limit on the number of subscriptions for the WorkDocs instance.
  * Message [ErrorMessageType](#errormessagetype)

### UnauthorizedOperationException
* UnauthorizedOperationException `object`: The operation is not permitted.

### UnauthorizedResourceAccessException
* UnauthorizedResourceAccessException `object`: The caller does not have access to perform the action on the resource.
  * Message [ErrorMessageType](#errormessagetype)

### UpdateDocumentRequest
* UpdateDocumentRequest `object`
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)

### UpdateDocumentVersionRequest
* UpdateDocumentVersionRequest `object`
  * VersionStatus [DocumentVersionStatus](#documentversionstatus)

### UpdateFolderRequest
* UpdateFolderRequest `object`
  * Name [ResourceNameType](#resourcenametype)
  * ParentFolderId [ResourceIdType](#resourceidtype)
  * ResourceState [ResourceStateType](#resourcestatetype)

### UpdateUserRequest
* UpdateUserRequest `object`
  * GivenName [UserAttributeValueType](#userattributevaluetype)
  * GrantPoweruserPrivileges [BooleanEnumType](#booleanenumtype)
  * Locale [LocaleType](#localetype)
  * StorageRule [StorageRuleType](#storageruletype)
  * Surname [UserAttributeValueType](#userattributevaluetype)
  * TimeZoneId [TimeZoneIdType](#timezoneidtype)
  * Type [UserType](#usertype)

### UpdateUserResponse
* UpdateUserResponse `object`
  * User [User](#user)

### UploadMetadata
* UploadMetadata `object`: Describes the upload.
  * SignedHeaders [SignedHeaderMap](#signedheadermap)
  * UploadUrl [UrlType](#urltype)

### UrlType
* UrlType `string`

### User
* User `object`: Describes a user.
  * CreatedTimestamp [TimestampType](#timestamptype)
  * EmailAddress [EmailAddressType](#emailaddresstype)
  * GivenName [UserAttributeValueType](#userattributevaluetype)
  * Id [IdType](#idtype)
  * Locale [LocaleType](#localetype)
  * ModifiedTimestamp [TimestampType](#timestamptype)
  * OrganizationId [IdType](#idtype)
  * RecycleBinFolderId [ResourceIdType](#resourceidtype)
  * RootFolderId [ResourceIdType](#resourceidtype)
  * Status [UserStatusType](#userstatustype)
  * Storage [UserStorageMetadata](#userstoragemetadata)
  * Surname [UserAttributeValueType](#userattributevaluetype)
  * TimeZoneId [TimeZoneIdType](#timezoneidtype)
  * Type [UserType](#usertype)
  * Username [UsernameType](#usernametype)

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
  * EmailAddress [EmailAddressType](#emailaddresstype)
  * GivenName [UserAttributeValueType](#userattributevaluetype)
  * Id [IdType](#idtype)
  * Surname [UserAttributeValueType](#userattributevaluetype)
  * Username [UsernameType](#usernametype)

### UserMetadataList
* UserMetadataList `array`
  * items [UserMetadata](#usermetadata)

### UserSortType
* UserSortType `string` (values: USER_NAME, FULL_NAME, STORAGE_LIMIT, USER_STATUS, STORAGE_USED)

### UserStatusType
* UserStatusType `string` (values: ACTIVE, INACTIVE, PENDING)

### UserStorageMetadata
* UserStorageMetadata `object`: Describes the storage for a user.
  * StorageRule [StorageRuleType](#storageruletype)
  * StorageUtilizedInBytes [SizeType](#sizetype)

### UserType
* UserType `string` (values: USER, ADMIN, POWERUSER, MINIMALUSER, WORKSPACESUSER)

### UsernameType
* UsernameType `string`


