# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_workspaces
```

```js
let datafire = require('datafire');
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').create();

amazonaws_workspaces.CreateTags({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon WorkSpaces Service</fullname> <p>This reference provides detailed information about the Amazon WorkSpaces operations.</p>

## Actions
### CreateTags



```js
amazonaws_workspaces.CreateTags({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* Tags (array) **required**

### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({
  "Workspaces": []
}, context)
```

#### Parameters
* Workspaces (array) **required**

### DeleteTags



```js
amazonaws_workspaces.DeleteTags({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagKeys (array) **required**

### DescribeTags



```js
amazonaws_workspaces.DescribeTags({
  "ResourceId": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**

### DescribeWorkspaceBundles



```js
amazonaws_workspaces.DescribeWorkspaceBundles({}, context)
```

#### Parameters
* NextToken (string)
* BundleIds (array)
* NextToken (string)
* Owner (string)

### DescribeWorkspaceDirectories



```js
amazonaws_workspaces.DescribeWorkspaceDirectories({}, context)
```

#### Parameters
* NextToken (string)
* DirectoryIds (array)
* NextToken (string)

### DescribeWorkspaces



```js
amazonaws_workspaces.DescribeWorkspaces({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)
* BundleId (string)
* DirectoryId (string)
* Limit (integer)
* NextToken (string)
* UserName (string)
* WorkspaceIds (array)

### DescribeWorkspacesConnectionStatus



```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({}, context)
```

#### Parameters
* NextToken (string)
* WorkspaceIds (array)

### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({
  "WorkspaceId": "",
  "WorkspaceProperties": {}
}, context)
```

#### Parameters
* WorkspaceId (string) **required**
* WorkspaceProperties (object) **required** - Describes the properties of a WorkSpace.

### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({
  "RebootWorkspaceRequests": []
}, context)
```

#### Parameters
* RebootWorkspaceRequests (array) **required**

### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({
  "RebuildWorkspaceRequests": []
}, context)
```

#### Parameters
* RebuildWorkspaceRequests (array) **required**

### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({
  "StartWorkspaceRequests": []
}, context)
```

#### Parameters
* StartWorkspaceRequests (array) **required**

### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({
  "StopWorkspaceRequests": []
}, context)
```

#### Parameters
* StopWorkspaceRequests (array) **required**

### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({
  "TerminateWorkspaceRequests": []
}, context)
```

#### Parameters
* TerminateWorkspaceRequests (array) **required**

