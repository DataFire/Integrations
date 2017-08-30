# @datafire/amazonaws_ds

Client library for AWS Directory Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ds
```

```js
let datafire = require('datafire');
let amazonaws_ds = require('@datafire/amazonaws_ds').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_ds.AddIpRoutes({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Directory Service</fullname> <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions
### AddIpRoutes



```js
amazonaws_ds.AddIpRoutes({
  "DirectoryId": "",
  "IpRoutes": []
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* IpRoutes (array) **required**
* UpdateSecurityGroupForDirectoryControllers (boolean)

### AddTagsToResource



```js
amazonaws_ds.AddTagsToResource({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* Tags (array) **required**

### CancelSchemaExtension



```js
amazonaws_ds.CancelSchemaExtension({
  "DirectoryId": "",
  "SchemaExtensionId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* SchemaExtensionId (string) **required**

### ConnectDirectory



```js
amazonaws_ds.ConnectDirectory({
  "Name": "",
  "Password": "",
  "Size": "",
  "ConnectSettings": {
    "VpcId": "",
    "SubnetIds": [],
    "CustomerDnsIps": [],
    "CustomerUserName": ""
  }
}, context)
```

#### Parameters
* ConnectSettings (object) **required** - Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
* Description (string)
* Name (string) **required**
* Password (string) **required**
* ShortName (string)
* Size (string) **required**

### CreateAlias



```js
amazonaws_ds.CreateAlias({
  "DirectoryId": "",
  "Alias": ""
}, context)
```

#### Parameters
* Alias (string) **required**
* DirectoryId (string) **required**

### CreateComputer



```js
amazonaws_ds.CreateComputer({
  "DirectoryId": "",
  "ComputerName": "",
  "Password": ""
}, context)
```

#### Parameters
* ComputerAttributes (array)
* ComputerName (string) **required**
* DirectoryId (string) **required**
* OrganizationalUnitDistinguishedName (string)
* Password (string) **required**

### CreateConditionalForwarder



```js
amazonaws_ds.CreateConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "DnsIpAddrs": []
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* DnsIpAddrs (array) **required**
* RemoteDomainName (string) **required**

### CreateDirectory



```js
amazonaws_ds.CreateDirectory({
  "Name": "",
  "Password": "",
  "Size": ""
}, context)
```

#### Parameters
* Description (string)
* Name (string) **required**
* Password (string) **required**
* ShortName (string)
* Size (string) **required**
* VpcSettings (object) - Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.

### CreateMicrosoftAD



```js
amazonaws_ds.CreateMicrosoftAD({
  "Name": "",
  "Password": "",
  "VpcSettings": {
    "VpcId": "",
    "SubnetIds": []
  }
}, context)
```

#### Parameters
* Description (string)
* Name (string) **required**
* Password (string) **required**
* ShortName (string)
* VpcSettings (object) **required** - Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.

### CreateSnapshot



```js
amazonaws_ds.CreateSnapshot({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* Name (string)

### CreateTrust



```js
amazonaws_ds.CreateTrust({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "TrustPassword": "",
  "TrustDirection": ""
}, context)
```

#### Parameters
* ConditionalForwarderIpAddrs (array)
* DirectoryId (string) **required**
* RemoteDomainName (string) **required**
* TrustDirection (string) **required**
* TrustPassword (string) **required**
* TrustType (string)

### DeleteConditionalForwarder



```js
amazonaws_ds.DeleteConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* RemoteDomainName (string) **required**

### DeleteDirectory



```js
amazonaws_ds.DeleteDirectory({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**

### DeleteSnapshot



```js
amazonaws_ds.DeleteSnapshot({
  "SnapshotId": ""
}, context)
```

#### Parameters
* SnapshotId (string) **required**

### DeleteTrust



```js
amazonaws_ds.DeleteTrust({
  "TrustId": ""
}, context)
```

#### Parameters
* DeleteAssociatedConditionalForwarder (boolean)
* TrustId (string) **required**

### DeregisterEventTopic



```js
amazonaws_ds.DeregisterEventTopic({
  "DirectoryId": "",
  "TopicName": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* TopicName (string) **required**

### DescribeConditionalForwarders



```js
amazonaws_ds.DescribeConditionalForwarders({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* RemoteDomainNames (array)

### DescribeDirectories



```js
amazonaws_ds.DescribeDirectories({}, context)
```

#### Parameters
* DirectoryIds (array) - A list of directory identifiers.
* Limit (integer)
* NextToken (string)

### DescribeEventTopics



```js
amazonaws_ds.DescribeEventTopics({}, context)
```

#### Parameters
* DirectoryId (string)
* TopicNames (array)

### DescribeSnapshots



```js
amazonaws_ds.DescribeSnapshots({}, context)
```

#### Parameters
* DirectoryId (string)
* Limit (integer)
* NextToken (string)
* SnapshotIds (array) - A list of directory snapshot identifiers.

### DescribeTrusts



```js
amazonaws_ds.DescribeTrusts({}, context)
```

#### Parameters
* DirectoryId (string)
* Limit (integer)
* NextToken (string)
* TrustIds (array)

### DisableRadius



```js
amazonaws_ds.DisableRadius({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**

### DisableSso



```js
amazonaws_ds.DisableSso({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* Password (string)
* UserName (string)

### EnableRadius



```js
amazonaws_ds.EnableRadius({
  "DirectoryId": "",
  "RadiusSettings": {}
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* RadiusSettings (object) **required** - Contains information about a Remote Authentication Dial In User Service (RADIUS) server.

### EnableSso



```js
amazonaws_ds.EnableSso({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* Password (string)
* UserName (string)

### GetDirectoryLimits



```js
amazonaws_ds.GetDirectoryLimits({}, context)
```

#### Parameters
*This action has no parameters*

### GetSnapshotLimits



```js
amazonaws_ds.GetSnapshotLimits({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**

### ListIpRoutes



```js
amazonaws_ds.ListIpRoutes({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* Limit (integer)
* NextToken (string)

### ListSchemaExtensions



```js
amazonaws_ds.ListSchemaExtensions({
  "DirectoryId": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* Limit (integer)
* NextToken (string)

### ListTagsForResource



```js
amazonaws_ds.ListTagsForResource({
  "ResourceId": ""
}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* ResourceId (string) **required**

### RegisterEventTopic



```js
amazonaws_ds.RegisterEventTopic({
  "DirectoryId": "",
  "TopicName": ""
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* TopicName (string) **required**

### RemoveIpRoutes



```js
amazonaws_ds.RemoveIpRoutes({
  "DirectoryId": "",
  "CidrIps": []
}, context)
```

#### Parameters
* CidrIps (array) **required**
* DirectoryId (string) **required**

### RemoveTagsFromResource



```js
amazonaws_ds.RemoveTagsFromResource({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceId (string) **required**
* TagKeys (array) **required**

### RestoreFromSnapshot



```js
amazonaws_ds.RestoreFromSnapshot({
  "SnapshotId": ""
}, context)
```

#### Parameters
* SnapshotId (string) **required**

### StartSchemaExtension



```js
amazonaws_ds.StartSchemaExtension({
  "DirectoryId": "",
  "CreateSnapshotBeforeSchemaExtension": true,
  "LdifContent": "",
  "Description": ""
}, context)
```

#### Parameters
* CreateSnapshotBeforeSchemaExtension (boolean) **required**
* Description (string) **required**
* DirectoryId (string) **required**
* LdifContent (string) **required**

### UpdateConditionalForwarder



```js
amazonaws_ds.UpdateConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "DnsIpAddrs": []
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* DnsIpAddrs (array) **required**
* RemoteDomainName (string) **required**

### UpdateRadius



```js
amazonaws_ds.UpdateRadius({
  "DirectoryId": "",
  "RadiusSettings": {}
}, context)
```

#### Parameters
* DirectoryId (string) **required**
* RadiusSettings (object) **required** - Contains information about a Remote Authentication Dial In User Service (RADIUS) server.

### VerifyTrust



```js
amazonaws_ds.VerifyTrust({
  "TrustId": ""
}, context)
```

#### Parameters
* TrustId (string) **required**

