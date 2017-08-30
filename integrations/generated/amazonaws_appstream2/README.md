# @datafire/amazonaws_appstream2

Client library for Amazon AppStream

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_appstream2
```

```js
let datafire = require('datafire');
let amazonaws_appstream2 = require('@datafire/amazonaws_appstream2').create();

amazonaws_appstream2.AssociateFleet({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon AppStream 2.0</fullname> <p>API documentation for Amazon AppStream 2.0.</p>

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
* ComputeCapacity (object) **required** - The capacity configuration for the fleet.
* Description (string)
* DisconnectTimeoutInSeconds (integer)
* DisplayName (string)
* EnableDefaultInternetAccess (boolean)
* ImageName (string) **required**
* InstanceType (string) **required**
* MaxUserDurationInSeconds (integer)
* Name (string) **required**
* VpcConfig (object) - VPC configuration information.

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

### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({
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

### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```

#### Parameters
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

### StopFleet



```js
amazonaws_appstream2.StopFleet({
  "Name": ""
}, context)
```

#### Parameters
* Name (string) **required**

### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({
  "Name": ""
}, context)
```

#### Parameters
* ComputeCapacity (object) - The capacity configuration for the fleet.
* DeleteVpcConfig (boolean)
* Description (string)
* DisconnectTimeoutInSeconds (integer)
* DisplayName (string)
* EnableDefaultInternetAccess (boolean)
* ImageName (string)
* InstanceType (string)
* MaxUserDurationInSeconds (integer)
* Name (string) **required**
* VpcConfig (object) - VPC configuration information.

### UpdateStack



```js
amazonaws_appstream2.UpdateStack({
  "Name": ""
}, context)
```

#### Parameters
* Description (string)
* DisplayName (string)
* Name (string) **required**

