# @datafire/amazonaws_workdocs

Client library for Amazon WorkDocs

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_workdocs
```

```js
let datafire = require('datafire');
let amazonaws_workdocs = require('@datafire/amazonaws_workdocs').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_workdocs: account,
  }
})

amazonaws_workdocs.InitiateDocumentVersionUpload({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>The WorkDocs API is designed for the following use cases:</p> <ul> <li> <p>File Migration: File migration applications are supported for users who want to migrate their files from an on-premise or off-premise file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.</p> </li> <li> <p>Security: Support security applications are supported for users who have additional security needs, such as anti-virus or data loss prevention. The APIs, in conjunction with Amazon CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs, so the application can take the necessary actions and replace the target file. The application can also choose to email the user if the target file violates the policy.</p> </li> <li> <p>eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic and/or record the actions in an Amazon WorkDocs site, in conjunction with Amazon CloudTrails, to replicate data for eDiscovery, backup, or analytical applications.</p> </li> </ul> <p>All Amazon WorkDocs APIs are Amazon authenticated, certificate-signed APIs. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Actions
### InitiateDocumentVersionUpload
<p>Creates a new document object and version object.</p> <p>The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call <a>UpdateDocumentVersion</a>.</p> <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>


```js
amazonaws_workdocs.InitiateDocumentVersionUpload({
  "body": {
    "ParentFolderId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDocument
Updates the specified attributes of the specified document. The user must have access to both the document and its parent folder, if applicable.


```js
amazonaws_workdocs.UpdateDocument({
  "body": {},
  "DocumentId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DocumentId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDocumentPath
<p>Retrieves the path information (the hierarchy from the root folder) for the requested document.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</p>


```js
amazonaws_workdocs.GetDocumentPath({
  "body": {},
  "DocumentId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DocumentId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeDocumentVersions
<p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>


```js
amazonaws_workdocs.DescribeDocumentVersions({
  "body": {},
  "DocumentId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* DocumentId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDocumentVersion
<p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>


```js
amazonaws_workdocs.UpdateDocumentVersion({
  "body": {},
  "DocumentId": "",
  "VersionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* DocumentId (string) **required**
* VersionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateFolder
Creates a folder with the specified name and parent folder.


```js
amazonaws_workdocs.CreateFolder({
  "body": {
    "ParentFolderId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateFolder
Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.


```js
amazonaws_workdocs.UpdateFolder({
  "body": {},
  "FolderId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* FolderId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeFolderContents
<p>Describes the contents of the specified folder, including its documents and sub-folders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>


```js
amazonaws_workdocs.DescribeFolderContents({
  "body": {},
  "FolderId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* FolderId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetFolderPath
<p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>


```js
amazonaws_workdocs.GetFolderPath({
  "body": {},
  "FolderId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* FolderId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeNotificationSubscriptions
Lists the specified notification subscriptions.


```js
amazonaws_workdocs.DescribeNotificationSubscriptions({
  "body": {},
  "OrganizationId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* OrganizationId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteNotificationSubscription
Deletes the specified subscription from the specified organization.


```js
amazonaws_workdocs.DeleteNotificationSubscription({
  "body": {},
  "OrganizationId": "",
  "SubscriptionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* OrganizationId (string) **required**
* SubscriptionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RemoveAllResourcePermissions
Removes all the permissions from the specified resource.


```js
amazonaws_workdocs.RemoveAllResourcePermissions({
  "body": {},
  "ResourceId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* ResourceId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RemoveResourcePermission
Removes the permission for the specified principal from the specified resource.


```js
amazonaws_workdocs.RemoveResourcePermission({
  "body": {},
  "ResourceId": "",
  "PrincipalId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* ResourceId (string) **required**
* PrincipalId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUsers
<p>Describes the specified users. You can describe all users or filter the results (for example, by status or organization).</p> <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</p>


```js
amazonaws_workdocs.DescribeUsers({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUser
Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.


```js
amazonaws_workdocs.UpdateUser({
  "body": {},
  "UserId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* UserId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeactivateUser
Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.


```js
amazonaws_workdocs.DeactivateUser({
  "body": {},
  "UserId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* UserId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

