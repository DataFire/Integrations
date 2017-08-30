# @datafire/amazonaws_elasticfilesystem

Client library for Amazon Elastic File System

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticfilesystem
```

```js
let datafire = require('datafire');
let amazonaws_elasticfilesystem = require('@datafire/amazonaws_elasticfilesystem').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_elasticfilesystem.CreateTags({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the <a href="http://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>

## Actions
### CreateTags



```js
amazonaws_elasticfilesystem.CreateTags({
  "FileSystemId": "",
  "Tags": []
}, context)
```

#### Parameters
* FileSystemId (string) **required**
* Tags (array) **required**

### DeleteTags



```js
amazonaws_elasticfilesystem.DeleteTags({
  "FileSystemId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* FileSystemId (string) **required**
* TagKeys (array) **required**

### DescribeFileSystems



```js
amazonaws_elasticfilesystem.DescribeFileSystems({}, context)
```

#### Parameters
*This action has no parameters*

### DeleteFileSystem



```js
amazonaws_elasticfilesystem.DeleteFileSystem({
  "FileSystemId": ""
}, context)
```

#### Parameters
* FileSystemId (string) **required**

### DescribeMountTargets



```js
amazonaws_elasticfilesystem.DescribeMountTargets({}, context)
```

#### Parameters
*This action has no parameters*

### DeleteMountTarget



```js
amazonaws_elasticfilesystem.DeleteMountTarget({
  "MountTargetId": ""
}, context)
```

#### Parameters
* MountTargetId (string) **required**

### ModifyMountTargetSecurityGroups



```js
amazonaws_elasticfilesystem.ModifyMountTargetSecurityGroups({
  "MountTargetId": ""
}, context)
```

#### Parameters
* MountTargetId (string) **required**
* SecurityGroups (array)

### DescribeTags



```js
amazonaws_elasticfilesystem.DescribeTags({
  "FileSystemId": ""
}, context)
```

#### Parameters
* FileSystemId (string) **required**

