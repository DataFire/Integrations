# @datafire/amazonaws_workdocs

Client library for Amazon WorkDocs

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_workdocs
```

```js
let datafire = require('datafire');
let amazonaws_workdocs = require('@datafire/amazonaws_workdocs').create();

amazonaws_workdocs.InitiateDocumentVersionUpload({}).then(data => {
  console.log(data);
})
```

## Description
<p>The WorkDocs API is designed for the following use cases:</p> <ul> <li> <p>File Migration: File migration applications are supported for users who want to migrate their files from an on-premise or off-premise file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.</p> </li> <li> <p>Security: Support security applications are supported for users who have additional security needs, such as anti-virus or data loss prevention. The APIs, in conjunction with Amazon CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs, so the application can take the necessary actions and replace the target file. The application can also choose to email the user if the target file violates the policy.</p> </li> <li> <p>eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic and/or record the actions in an Amazon WorkDocs site, in conjunction with Amazon CloudTrails, to replicate data for eDiscovery, backup, or analytical applications.</p> </li> </ul> <p>All Amazon WorkDocs APIs are Amazon authenticated, certificate-signed APIs. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Actions
### InitiateDocumentVersionUpload



```js
amazonaws_workdocs.InitiateDocumentVersionUpload({
  "ParentFolderId": ""
}, context)
```

#### Parameters
* ContentCreatedTimestamp (string)
* ContentModifiedTimestamp (string)
* ContentType (string)
* DocumentSizeInBytes (integer)
* Id (string)
* Name (string)
* ParentFolderId (string) **required**

### UpdateDocument



```js
amazonaws_workdocs.UpdateDocument({
  "DocumentId": ""
}, context)
```

#### Parameters
* DocumentId (string) **required**
* Name (string)
* ParentFolderId (string)
* ResourceState (string)

### GetDocumentPath



```js
amazonaws_workdocs.GetDocumentPath({
  "DocumentId": ""
}, context)
```

#### Parameters
* DocumentId (string) **required**

### DescribeDocumentVersions



```js
amazonaws_workdocs.DescribeDocumentVersions({
  "DocumentId": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* DocumentId (string) **required**

### UpdateDocumentVersion



```js
amazonaws_workdocs.UpdateDocumentVersion({
  "DocumentId": "",
  "VersionId": ""
}, context)
```

#### Parameters
* DocumentId (string) **required**
* VersionId (string) **required**
* VersionStatus (string)

### CreateFolder



```js
amazonaws_workdocs.CreateFolder({
  "ParentFolderId": ""
}, context)
```

#### Parameters
* Name (string)
* ParentFolderId (string) **required**

### UpdateFolder



```js
amazonaws_workdocs.UpdateFolder({
  "FolderId": ""
}, context)
```

#### Parameters
* FolderId (string) **required**
* Name (string)
* ParentFolderId (string)
* ResourceState (string)

### DescribeFolderContents



```js
amazonaws_workdocs.DescribeFolderContents({
  "FolderId": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* FolderId (string) **required**

### GetFolderPath



```js
amazonaws_workdocs.GetFolderPath({
  "FolderId": ""
}, context)
```

#### Parameters
* FolderId (string) **required**

### DescribeNotificationSubscriptions



```js
amazonaws_workdocs.DescribeNotificationSubscriptions({
  "OrganizationId": ""
}, context)
```

#### Parameters
* OrganizationId (string) **required**

### DeleteNotificationSubscription



```js
amazonaws_workdocs.DeleteNotificationSubscription({
  "OrganizationId": "",
  "SubscriptionId": ""
}, context)
```

#### Parameters
* OrganizationId (string) **required**
* SubscriptionId (string) **required**

### RemoveAllResourcePermissions



```js
amazonaws_workdocs.RemoveAllResourcePermissions({
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**

### RemoveResourcePermission



```js
amazonaws_workdocs.RemoveResourcePermission({
  "ResourceId": "",
  "PrincipalId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* PrincipalId (string) **required**

### DescribeUsers



```js
amazonaws_workdocs.DescribeUsers({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### UpdateUser



```js
amazonaws_workdocs.UpdateUser({
  "UserId": ""
}, context)
```

#### Parameters
* UserId (string) **required**
* GivenName (string)
* Locale (string)
* StorageRule (object) - Describes the storage for a user.
* Surname (string)
* TimeZoneId (string)
* Type (string)

### DeactivateUser



```js
amazonaws_workdocs.DeactivateUser({
  "UserId": ""
}, context)
```

#### Parameters
* UserId (string) **required**

