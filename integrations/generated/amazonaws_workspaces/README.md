# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_workspaces
```

```js
let datafire = require('datafire');
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_workspaces: account,
  }
})

amazonaws_workspaces.CreateTags({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon WorkSpaces Service</fullname> <p>This reference provides detailed information about the Amazon WorkSpaces operations.</p>

## Actions
### CreateTags
Creates tags for a WorkSpace.


```js
amazonaws_workspaces.CreateTags({
  "body": {
    "ResourceId": "",
    "Tags": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request of the <a>CreateTags</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateWorkspaces
<p>Creates one or more WorkSpaces.</p> <note> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> </note>


```js
amazonaws_workspaces.CreateWorkspaces({
  "body": {
    "Workspaces": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>CreateWorkspaces</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteTags
Deletes tags from a WorkSpace.


```js
amazonaws_workspaces.DeleteTags({
  "body": {
    "ResourceId": "",
    "TagKeys": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request of the <a>DeleteTags</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeTags
Describes tags for a WorkSpace.


```js
amazonaws_workspaces.DescribeTags({
  "body": {
    "ResourceId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request of the <a>DescribeTags</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeWorkspaceBundles
<p>Obtains information about the WorkSpace bundles that are available to your account in the specified region.</p> <p>You can filter the results with either the <code>BundleIds</code> parameter, or the <code>Owner</code> parameter, but not both.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>NextToken</code> response member contains a token that you pass in the next call to this operation to retrieve the next set of items.</p>


```js
amazonaws_workspaces.DescribeWorkspaceBundles({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>DescribeWorkspaceBundles</a> operation.
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeWorkspaceDirectories
<p>Retrieves information about the AWS Directory Service directories in the region that are registered with Amazon WorkSpaces and are available to your account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>NextToken</code> response member contains a token that you pass in the next call to this operation to retrieve the next set of items.</p>


```js
amazonaws_workspaces.DescribeWorkspaceDirectories({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>DescribeWorkspaceDirectories</a> operation.
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeWorkspaces
<p>Obtains information about the specified WorkSpaces.</p> <p>Only one of the filter parameters, such as <code>BundleId</code>, <code>DirectoryId</code>, or <code>WorkspaceIds</code>, can be specified at a time.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>NextToken</code> response member contains a token that you pass in the next call to this operation to retrieve the next set of items.</p>


```js
amazonaws_workspaces.DescribeWorkspaces({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>DescribeWorkspaces</a> operation.
* Limit (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeWorkspacesConnectionStatus
Describes the connection status of a specified WorkSpace.


```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({
  "body": {},
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

### ModifyWorkspaceProperties
Modifies the WorkSpace properties, including the running mode and AutoStop time.


```js
amazonaws_workspaces.ModifyWorkspaceProperties({
  "body": {
    "WorkspaceId": "",
    "WorkspaceProperties": {}
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

### RebootWorkspaces
<p>Reboots the specified WorkSpaces.</p> <p>To be able to reboot a WorkSpace, the WorkSpace must have a <b>State</b> of <code>AVAILABLE</code>, <code>IMPAIRED</code>, or <code>INOPERABLE</code>.</p> <note> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p> </note>


```js
amazonaws_workspaces.RebootWorkspaces({
  "body": {
    "RebootWorkspaceRequests": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>RebootWorkspaces</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RebuildWorkspaces
<p>Rebuilds the specified WorkSpaces.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. Rebuilding a WorkSpace causes the following to occur:</p> <ul> <li> <p>The system is restored to the image of the bundle that the WorkSpace is created from. Any applications that have been installed, or system settings that have been made since the WorkSpace was created will be lost.</p> </li> <li> <p>The data drive (D drive) is re-created from the last automatic snapshot taken of the data drive. The current contents of the data drive are overwritten. Automatic snapshots of the data drive are taken every 12 hours, so the snapshot can be as much as 12 hours old.</p> </li> </ul> <p>To be able to rebuild a WorkSpace, the WorkSpace must have a <b>State</b> of <code>AVAILABLE</code> or <code>ERROR</code>.</p> <note> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p> </note>


```js
amazonaws_workspaces.RebuildWorkspaces({
  "body": {
    "RebuildWorkspaceRequests": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>RebuildWorkspaces</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartWorkspaces
Starts the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of STOPPED.


```js
amazonaws_workspaces.StartWorkspaces({
  "body": {
    "StartWorkspaceRequests": []
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

### StopWorkspaces
 Stops the specified WorkSpaces. The WorkSpaces must have a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.


```js
amazonaws_workspaces.StopWorkspaces({
  "body": {
    "StopWorkspaceRequests": []
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

### TerminateWorkspaces
<p>Terminates the specified WorkSpaces.</p> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is not maintained and will be destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace.</p> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <note> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated.</p> </note>


```js
amazonaws_workspaces.TerminateWorkspaces({
  "body": {
    "TerminateWorkspaceRequests": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Contains the inputs for the <a>TerminateWorkspaces</a> operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

