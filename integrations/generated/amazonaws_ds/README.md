# @datafire/amazonaws_ds

Client library for AWS Directory Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ds
```

```js
let datafire = require('datafire');
let amazonaws_ds = require('@datafire/amazonaws_ds').actions;
let context = new datafire.Context();

amazonaws_ds.AddIpRoutes({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Directory Service</fullname> <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions
### AddIpRoutes



```js
amazonaws_ds.AddIpRoutes({}, context)
```

#### Parameters

### AddTagsToResource



```js
amazonaws_ds.AddTagsToResource({}, context)
```

#### Parameters

### CancelSchemaExtension



```js
amazonaws_ds.CancelSchemaExtension({}, context)
```

#### Parameters

### ConnectDirectory



```js
amazonaws_ds.ConnectDirectory({}, context)
```

#### Parameters

### CreateAlias



```js
amazonaws_ds.CreateAlias({}, context)
```

#### Parameters

### CreateComputer



```js
amazonaws_ds.CreateComputer({}, context)
```

#### Parameters

### CreateConditionalForwarder



```js
amazonaws_ds.CreateConditionalForwarder({}, context)
```

#### Parameters

### CreateDirectory



```js
amazonaws_ds.CreateDirectory({}, context)
```

#### Parameters

### CreateMicrosoftAD



```js
amazonaws_ds.CreateMicrosoftAD({}, context)
```

#### Parameters

### CreateSnapshot



```js
amazonaws_ds.CreateSnapshot({}, context)
```

#### Parameters

### CreateTrust



```js
amazonaws_ds.CreateTrust({}, context)
```

#### Parameters

### DeleteConditionalForwarder



```js
amazonaws_ds.DeleteConditionalForwarder({}, context)
```

#### Parameters

### DeleteDirectory



```js
amazonaws_ds.DeleteDirectory({}, context)
```

#### Parameters

### DeleteSnapshot



```js
amazonaws_ds.DeleteSnapshot({}, context)
```

#### Parameters

### DeleteTrust



```js
amazonaws_ds.DeleteTrust({}, context)
```

#### Parameters

### DeregisterEventTopic



```js
amazonaws_ds.DeregisterEventTopic({}, context)
```

#### Parameters

### DescribeConditionalForwarders



```js
amazonaws_ds.DescribeConditionalForwarders({}, context)
```

#### Parameters

### DescribeDirectories



```js
amazonaws_ds.DescribeDirectories({}, context)
```

#### Parameters

### DescribeEventTopics



```js
amazonaws_ds.DescribeEventTopics({}, context)
```

#### Parameters

### DescribeSnapshots



```js
amazonaws_ds.DescribeSnapshots({}, context)
```

#### Parameters

### DescribeTrusts



```js
amazonaws_ds.DescribeTrusts({}, context)
```

#### Parameters

### DisableRadius



```js
amazonaws_ds.DisableRadius({}, context)
```

#### Parameters

### DisableSso



```js
amazonaws_ds.DisableSso({}, context)
```

#### Parameters

### EnableRadius



```js
amazonaws_ds.EnableRadius({}, context)
```

#### Parameters

### EnableSso



```js
amazonaws_ds.EnableSso({}, context)
```

#### Parameters

### GetDirectoryLimits



```js
amazonaws_ds.GetDirectoryLimits({}, context)
```

#### Parameters

### GetSnapshotLimits



```js
amazonaws_ds.GetSnapshotLimits({}, context)
```

#### Parameters

### ListIpRoutes



```js
amazonaws_ds.ListIpRoutes({}, context)
```

#### Parameters

### ListSchemaExtensions



```js
amazonaws_ds.ListSchemaExtensions({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_ds.ListTagsForResource({}, context)
```

#### Parameters

### RegisterEventTopic



```js
amazonaws_ds.RegisterEventTopic({}, context)
```

#### Parameters

### RemoveIpRoutes



```js
amazonaws_ds.RemoveIpRoutes({}, context)
```

#### Parameters

### RemoveTagsFromResource



```js
amazonaws_ds.RemoveTagsFromResource({}, context)
```

#### Parameters

### RestoreFromSnapshot



```js
amazonaws_ds.RestoreFromSnapshot({}, context)
```

#### Parameters

### StartSchemaExtension



```js
amazonaws_ds.StartSchemaExtension({}, context)
```

#### Parameters

### UpdateConditionalForwarder



```js
amazonaws_ds.UpdateConditionalForwarder({}, context)
```

#### Parameters

### UpdateRadius



```js
amazonaws_ds.UpdateRadius({}, context)
```

#### Parameters

### VerifyTrust



```js
amazonaws_ds.VerifyTrust({}, context)
```

#### Parameters

