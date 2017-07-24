# @datafire/amazonaws_directconnect

Client library for AWS Direct Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_directconnect
```

```js
let datafire = require('datafire');
let amazonaws_directconnect = require('@datafire/amazonaws_directconnect').actions;
let context = new datafire.Context();

amazonaws_directconnect.AllocateConnectionOnInterconnect({}, context).then(data => {
  console.log(data);
})
```

## Description
AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Simple Storage Service (Amazon S3)) and to Amazon Virtual Private Cloud (Amazon VPC), bypassing Internet service providers in your network path. An AWS Direct Connect location provides access to AWS in the region it is associated with, as well as access to other US regions. For example, you can provision a single connection to any AWS Direct Connect location in the US and use it to access public AWS services in all US Regions and AWS GovCloud (US).

## Actions
### AllocateConnectionOnInterconnect



```js
amazonaws_directconnect.AllocateConnectionOnInterconnect({}, context)
```

#### Parameters

### AllocateHostedConnection



```js
amazonaws_directconnect.AllocateHostedConnection({}, context)
```

#### Parameters

### AllocatePrivateVirtualInterface



```js
amazonaws_directconnect.AllocatePrivateVirtualInterface({}, context)
```

#### Parameters

### AllocatePublicVirtualInterface



```js
amazonaws_directconnect.AllocatePublicVirtualInterface({}, context)
```

#### Parameters

### AssociateConnectionWithLag



```js
amazonaws_directconnect.AssociateConnectionWithLag({}, context)
```

#### Parameters

### AssociateHostedConnection



```js
amazonaws_directconnect.AssociateHostedConnection({}, context)
```

#### Parameters

### AssociateVirtualInterface



```js
amazonaws_directconnect.AssociateVirtualInterface({}, context)
```

#### Parameters

### ConfirmConnection



```js
amazonaws_directconnect.ConfirmConnection({}, context)
```

#### Parameters

### ConfirmPrivateVirtualInterface



```js
amazonaws_directconnect.ConfirmPrivateVirtualInterface({}, context)
```

#### Parameters

### ConfirmPublicVirtualInterface



```js
amazonaws_directconnect.ConfirmPublicVirtualInterface({}, context)
```

#### Parameters

### CreateBGPPeer



```js
amazonaws_directconnect.CreateBGPPeer({}, context)
```

#### Parameters

### CreateConnection



```js
amazonaws_directconnect.CreateConnection({}, context)
```

#### Parameters

### CreateInterconnect



```js
amazonaws_directconnect.CreateInterconnect({}, context)
```

#### Parameters

### CreateLag



```js
amazonaws_directconnect.CreateLag({}, context)
```

#### Parameters

### CreatePrivateVirtualInterface



```js
amazonaws_directconnect.CreatePrivateVirtualInterface({}, context)
```

#### Parameters

### CreatePublicVirtualInterface



```js
amazonaws_directconnect.CreatePublicVirtualInterface({}, context)
```

#### Parameters

### DeleteBGPPeer



```js
amazonaws_directconnect.DeleteBGPPeer({}, context)
```

#### Parameters

### DeleteConnection



```js
amazonaws_directconnect.DeleteConnection({}, context)
```

#### Parameters

### DeleteInterconnect



```js
amazonaws_directconnect.DeleteInterconnect({}, context)
```

#### Parameters

### DeleteLag



```js
amazonaws_directconnect.DeleteLag({}, context)
```

#### Parameters

### DeleteVirtualInterface



```js
amazonaws_directconnect.DeleteVirtualInterface({}, context)
```

#### Parameters

### DescribeConnectionLoa



```js
amazonaws_directconnect.DescribeConnectionLoa({}, context)
```

#### Parameters

### DescribeConnections



```js
amazonaws_directconnect.DescribeConnections({}, context)
```

#### Parameters

### DescribeConnectionsOnInterconnect



```js
amazonaws_directconnect.DescribeConnectionsOnInterconnect({}, context)
```

#### Parameters

### DescribeHostedConnections



```js
amazonaws_directconnect.DescribeHostedConnections({}, context)
```

#### Parameters

### DescribeInterconnectLoa



```js
amazonaws_directconnect.DescribeInterconnectLoa({}, context)
```

#### Parameters

### DescribeInterconnects



```js
amazonaws_directconnect.DescribeInterconnects({}, context)
```

#### Parameters

### DescribeLags



```js
amazonaws_directconnect.DescribeLags({}, context)
```

#### Parameters

### DescribeLoa



```js
amazonaws_directconnect.DescribeLoa({}, context)
```

#### Parameters

### DescribeLocations



```js
amazonaws_directconnect.DescribeLocations({}, context)
```

#### Parameters

### DescribeTags



```js
amazonaws_directconnect.DescribeTags({}, context)
```

#### Parameters

### DescribeVirtualGateways



```js
amazonaws_directconnect.DescribeVirtualGateways({}, context)
```

#### Parameters

### DescribeVirtualInterfaces



```js
amazonaws_directconnect.DescribeVirtualInterfaces({}, context)
```

#### Parameters

### DisassociateConnectionFromLag



```js
amazonaws_directconnect.DisassociateConnectionFromLag({}, context)
```

#### Parameters

### TagResource



```js
amazonaws_directconnect.TagResource({}, context)
```

#### Parameters

### UntagResource



```js
amazonaws_directconnect.UntagResource({}, context)
```

#### Parameters

### UpdateLag



```js
amazonaws_directconnect.UpdateLag({}, context)
```

#### Parameters

