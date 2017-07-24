# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_workspaces
```

```js
let datafire = require('datafire');
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').actions;
let context = new datafire.Context();

amazonaws_workspaces.CreateTags({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon WorkSpaces Service</fullname> <p>This reference provides detailed information about the Amazon WorkSpaces operations.</p>

## Actions
### CreateTags



```js
amazonaws_workspaces.CreateTags({}, context)
```

#### Parameters

### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({}, context)
```

#### Parameters

### DeleteTags



```js
amazonaws_workspaces.DeleteTags({}, context)
```

#### Parameters

### DescribeTags



```js
amazonaws_workspaces.DescribeTags({}, context)
```

#### Parameters

### DescribeWorkspaceBundles



```js
amazonaws_workspaces.DescribeWorkspaceBundles({}, context)
```

#### Parameters
* NextToken (string)

### DescribeWorkspaceDirectories



```js
amazonaws_workspaces.DescribeWorkspaceDirectories({}, context)
```

#### Parameters
* NextToken (string)

### DescribeWorkspaces



```js
amazonaws_workspaces.DescribeWorkspaces({}, context)
```

#### Parameters
* Limit (string)
* NextToken (string)

### DescribeWorkspacesConnectionStatus



```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({}, context)
```

#### Parameters

### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({}, context)
```

#### Parameters

### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({}, context)
```

#### Parameters

### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({}, context)
```

#### Parameters

### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({}, context)
```

#### Parameters

### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({}, context)
```

#### Parameters

### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({}, context)
```

#### Parameters

