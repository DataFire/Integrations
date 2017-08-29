# @datafire/amazonaws_ds

Client library for AWS Directory Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ds
```

```js
let datafire = require('datafire');
let amazonaws_ds = require('@datafire/amazonaws_ds').create();

amazonaws_ds.AddIpRoutes({}).then(data => {
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


### AddTagsToResource



```js
amazonaws_ds.AddTagsToResource({}, context)
```


### CancelSchemaExtension



```js
amazonaws_ds.CancelSchemaExtension({}, context)
```


### ConnectDirectory



```js
amazonaws_ds.ConnectDirectory({}, context)
```


### CreateAlias



```js
amazonaws_ds.CreateAlias({}, context)
```


### CreateComputer



```js
amazonaws_ds.CreateComputer({}, context)
```


### CreateConditionalForwarder



```js
amazonaws_ds.CreateConditionalForwarder({}, context)
```


### CreateDirectory



```js
amazonaws_ds.CreateDirectory({}, context)
```


### CreateMicrosoftAD



```js
amazonaws_ds.CreateMicrosoftAD({}, context)
```


### CreateSnapshot



```js
amazonaws_ds.CreateSnapshot({}, context)
```


### CreateTrust



```js
amazonaws_ds.CreateTrust({}, context)
```


### DeleteConditionalForwarder



```js
amazonaws_ds.DeleteConditionalForwarder({}, context)
```


### DeleteDirectory



```js
amazonaws_ds.DeleteDirectory({}, context)
```


### DeleteSnapshot



```js
amazonaws_ds.DeleteSnapshot({}, context)
```


### DeleteTrust



```js
amazonaws_ds.DeleteTrust({}, context)
```


### DeregisterEventTopic



```js
amazonaws_ds.DeregisterEventTopic({}, context)
```


### DescribeConditionalForwarders



```js
amazonaws_ds.DescribeConditionalForwarders({}, context)
```


### DescribeDirectories



```js
amazonaws_ds.DescribeDirectories({}, context)
```


### DescribeEventTopics



```js
amazonaws_ds.DescribeEventTopics({}, context)
```


### DescribeSnapshots



```js
amazonaws_ds.DescribeSnapshots({}, context)
```


### DescribeTrusts



```js
amazonaws_ds.DescribeTrusts({}, context)
```


### DisableRadius



```js
amazonaws_ds.DisableRadius({}, context)
```


### DisableSso



```js
amazonaws_ds.DisableSso({}, context)
```


### EnableRadius



```js
amazonaws_ds.EnableRadius({}, context)
```


### EnableSso



```js
amazonaws_ds.EnableSso({}, context)
```


### GetDirectoryLimits



```js
amazonaws_ds.GetDirectoryLimits({}, context)
```


### GetSnapshotLimits



```js
amazonaws_ds.GetSnapshotLimits({}, context)
```


### ListIpRoutes



```js
amazonaws_ds.ListIpRoutes({}, context)
```


### ListSchemaExtensions



```js
amazonaws_ds.ListSchemaExtensions({}, context)
```


### ListTagsForResource



```js
amazonaws_ds.ListTagsForResource({}, context)
```


### RegisterEventTopic



```js
amazonaws_ds.RegisterEventTopic({}, context)
```


### RemoveIpRoutes



```js
amazonaws_ds.RemoveIpRoutes({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_ds.RemoveTagsFromResource({}, context)
```


### RestoreFromSnapshot



```js
amazonaws_ds.RestoreFromSnapshot({}, context)
```


### StartSchemaExtension



```js
amazonaws_ds.StartSchemaExtension({}, context)
```


### UpdateConditionalForwarder



```js
amazonaws_ds.UpdateConditionalForwarder({}, context)
```


### UpdateRadius



```js
amazonaws_ds.UpdateRadius({}, context)
```


### VerifyTrust



```js
amazonaws_ds.VerifyTrust({}, context)
```


