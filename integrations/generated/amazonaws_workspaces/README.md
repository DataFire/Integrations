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
amazonaws_workspaces.CreateTags({}, context)
```


### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({}, context)
```


### DeleteTags



```js
amazonaws_workspaces.DeleteTags({}, context)
```


### DescribeTags



```js
amazonaws_workspaces.DescribeTags({}, context)
```


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


### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({}, context)
```


### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({}, context)
```


### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({}, context)
```


### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({}, context)
```


### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({}, context)
```


### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({}, context)
```


