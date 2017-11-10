# @datafire/amazonaws_appstream2

Client library for Amazon AppStream

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_appstream2
```

```js
let datafire = require('datafire');
let amazonaws_appstream2 = require('@datafire/amazonaws_appstream2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_appstream2.AssociateFleet({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon AppStream 2.0</fullname> <p>You can use Amazon AppStream 2.0 to stream desktop applications to any device running a web browser, without rewriting them.</p>

## Actions
### AssociateFleet



```js
amazonaws_appstream2.AssociateFleet({
  "FleetName": "",
  "StackName": ""
}, context)
```

#### Parameters
* FleetName (string) **required**
* StackName (string) **required**

### CreateDirectoryConfig



```js
amazonaws_appstream2.CreateDirectoryConfig({
  "DirectoryName": "",
  "OrganizationalUnitDistinguishedNames": [],
  "ServiceAccountCredentials": {
    "AccountName": "",
    "AccountPassword": ""
  }
}, context)
```

#### Parameters
* DirectoryName (string) **required**
* OrganizationalUnitDistinguishedNames (array) **required**
* ServiceAccountCredentials (object) **required** - Describes the credentials for the service account used by the streaming instance to connect to the directory.

### CreateFleet



```js
amazonaws_appstream2.CreateFleet({
  "Name": "",
  "ImageName": "",
  "InstanceType": "",
  "ComputeCapacity": {
    "DesiredInstances": 0
  }
}, context)
```

#### Parameters
* ComputeCapacity (object) **required** - Describes the capacity for a fleet.
* Description (string)
* DisconnectTimeoutInSeconds (integer)
* DisplayName (string)
* DomainJoinInfo (object) - Contains the information needed for streaming instances to join a domain.
* EnableDefaultInternetAccess (boolean)
* FleetType (string)
* ImageName (string) **required**
* InstanceType (string) **required**
* MaxUserDurationInSeconds (integer)
* Name (string) **required**
* VpcConfig (object) - Describes VPC configuration information.

### CreateImageBuilder



```js
amazonaws_appstream2.CreateImageBuilder({
  "Name": "",
  "ImageName": "",
  "InstanceType": ""
}, context)
```

#### Parameters
* Description (string)
* DisplayName (string)
* DomainJoinInfo (object) - Contains the information needed for streaming instances to join a domain.
* EnableDefaultInternetAccess (boolean)
* ImageName (string) **required**
* InstanceType (string) **required**
* Name (string) **required**
* VpcConfig (object) - Describes VPC configuration information.

### CreateImageBuilderStreamingURL



```js
amazonaws_appstream2.CreateImageBuilderStreamingURL({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**
* Validity (integer)

### CreateStack



```js
amazonaws_appstream2.CreateStack({
  "Name": ""
}, context)
```

#### Parameters
* Description (string)
* DisplayName (string)
* Name (string) **required**
* StorageConnectors (array) - The storage connectors.

### CreateStreamingURL



```js
amazonaws_appstream2.CreateStreamingURL({
  "StackName": "",
  "FleetName": "",
  "UserId": ""
}, context)
```

#### Parameters
* ApplicationId (string)
* FleetName (string) **required**
* SessionContext (string)
* StackName (string) **required**
* UserId (string) **required**
* Validity (integer)

### DeleteDirectoryConfig



```js
amazonaws_appstream2.DeleteDirectoryConfig({
  "DirectoryName": ""
}, context)
```

#### Parameters
* DirectoryName (string) **required**

### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteImage



```js
amazonaws_appstream2.DeleteImage({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteImageBuilder



```js
amazonaws_appstream2.DeleteImageBuilder({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DeleteStack



```js
amazonaws_appstream2.DeleteStack({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### DescribeDirectoryConfigs



```js
amazonaws_appstream2.DescribeDirectoryConfigs({}, context)
```

#### Parameters
* DirectoryNames (array)
* MaxResults (integer)
* NextToken (string)

### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```

#### Parameters
* Names (array)
* NextToken (string)

### DescribeImageBuilders



```js
amazonaws_appstream2.DescribeImageBuilders({}, context)
```

#### Parameters
* MaxResults (integer)
* Names (array)
* NextToken (string)

### DescribeImages



```js
amazonaws_appstream2.DescribeImages({}, context)
```

#### Parameters
* Names (array)

### DescribeSessions



```js
amazonaws_appstream2.DescribeSessions({
  "StackName": "",
  "FleetName": ""
}, context)
```

#### Parameters
* AuthenticationType (string)
* FleetName (string) **required**
* Limit (integer)
* NextToken (string)
* StackName (string) **required**
* UserId (string)

### DescribeStacks



```js
amazonaws_appstream2.DescribeStacks({}, context)
```

#### Parameters
* Names (array)
* NextToken (string)

### DisassociateFleet



```js
amazonaws_appstream2.DisassociateFleet({
  "FleetName": "",
  "StackName": ""
}, context)
```

#### Parameters
* FleetName (string) **required**
* StackName (string) **required**

### ExpireSession



```js
amazonaws_appstream2.ExpireSession({
  "SessionId": ""
}, context)
```

#### Parameters
* SessionId (string) **required**

### ListAssociatedFleets



```js
amazonaws_appstream2.ListAssociatedFleets({
  "StackName": ""
}, context)
```

#### Parameters
* NextToken (string)
* StackName (string) **required**

### ListAssociatedStacks



```js
amazonaws_appstream2.ListAssociatedStacks({
  "FleetName": ""
}, context)
```

#### Parameters
* FleetName (string) **required**
* NextToken (string)

### StartFleet



```js
amazonaws_appstream2.StartFleet({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StartImageBuilder



```js
amazonaws_appstream2.StartImageBuilder({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StopFleet



```js
amazonaws_appstream2.StopFleet({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### StopImageBuilder



```js
amazonaws_appstream2.StopImageBuilder({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### UpdateDirectoryConfig



```js
amazonaws_appstream2.UpdateDirectoryConfig({
  "DirectoryName": ""
}, context)
```

#### Parameters
* DirectoryName (string) **required**
* OrganizationalUnitDistinguishedNames (array)
* ServiceAccountCredentials (object) - Describes the credentials for the service account used by the streaming instance to connect to the directory.

### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({
  "Name": ""
}, context)
```

#### Parameters
* AttributesToDelete (array) - The fleet attributes.
* ComputeCapacity (object) - Describes the capacity for a fleet.
* DeleteVpcConfig (boolean)
* Description (string)
* DisconnectTimeoutInSeconds (integer)
* DisplayName (string)
* DomainJoinInfo (object) - Contains the information needed for streaming instances to join a domain.
* EnableDefaultInternetAccess (boolean)
* ImageName (string)
* InstanceType (string)
* MaxUserDurationInSeconds (integer)
* Name (string) **required**
* VpcConfig (object) - Describes VPC configuration information.

### UpdateStack



```js
amazonaws_appstream2.UpdateStack({
  "Name": ""
}, context)
```

#### Parameters
* DeleteStorageConnectors (boolean)
* Description (string)
* DisplayName (string)
* Name (string) **required**
* StorageConnectors (array) - The storage connectors.

