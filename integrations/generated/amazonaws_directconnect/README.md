# @datafire/amazonaws_directconnect

Client library for AWS Direct Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_directconnect
```

```js
let datafire = require('datafire');
let amazonaws_directconnect = require('@datafire/amazonaws_directconnect').create();

amazonaws_directconnect.AllocateConnectionOnInterconnect({}).then(data => {
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


### AllocateHostedConnection



```js
amazonaws_directconnect.AllocateHostedConnection({}, context)
```


### AllocatePrivateVirtualInterface



```js
amazonaws_directconnect.AllocatePrivateVirtualInterface({}, context)
```


### AllocatePublicVirtualInterface



```js
amazonaws_directconnect.AllocatePublicVirtualInterface({}, context)
```


### AssociateConnectionWithLag



```js
amazonaws_directconnect.AssociateConnectionWithLag({}, context)
```


### AssociateHostedConnection



```js
amazonaws_directconnect.AssociateHostedConnection({}, context)
```


### AssociateVirtualInterface



```js
amazonaws_directconnect.AssociateVirtualInterface({}, context)
```


### ConfirmConnection



```js
amazonaws_directconnect.ConfirmConnection({}, context)
```


### ConfirmPrivateVirtualInterface



```js
amazonaws_directconnect.ConfirmPrivateVirtualInterface({}, context)
```


### ConfirmPublicVirtualInterface



```js
amazonaws_directconnect.ConfirmPublicVirtualInterface({}, context)
```


### CreateBGPPeer



```js
amazonaws_directconnect.CreateBGPPeer({}, context)
```


### CreateConnection



```js
amazonaws_directconnect.CreateConnection({}, context)
```


### CreateInterconnect



```js
amazonaws_directconnect.CreateInterconnect({}, context)
```


### CreateLag



```js
amazonaws_directconnect.CreateLag({}, context)
```


### CreatePrivateVirtualInterface



```js
amazonaws_directconnect.CreatePrivateVirtualInterface({}, context)
```


### CreatePublicVirtualInterface



```js
amazonaws_directconnect.CreatePublicVirtualInterface({}, context)
```


### DeleteBGPPeer



```js
amazonaws_directconnect.DeleteBGPPeer({}, context)
```


### DeleteConnection



```js
amazonaws_directconnect.DeleteConnection({}, context)
```


### DeleteInterconnect



```js
amazonaws_directconnect.DeleteInterconnect({}, context)
```


### DeleteLag



```js
amazonaws_directconnect.DeleteLag({}, context)
```


### DeleteVirtualInterface



```js
amazonaws_directconnect.DeleteVirtualInterface({}, context)
```


### DescribeConnectionLoa



```js
amazonaws_directconnect.DescribeConnectionLoa({}, context)
```


### DescribeConnections



```js
amazonaws_directconnect.DescribeConnections({}, context)
```


### DescribeConnectionsOnInterconnect



```js
amazonaws_directconnect.DescribeConnectionsOnInterconnect({}, context)
```


### DescribeHostedConnections



```js
amazonaws_directconnect.DescribeHostedConnections({}, context)
```


### DescribeInterconnectLoa



```js
amazonaws_directconnect.DescribeInterconnectLoa({}, context)
```


### DescribeInterconnects



```js
amazonaws_directconnect.DescribeInterconnects({}, context)
```


### DescribeLags



```js
amazonaws_directconnect.DescribeLags({}, context)
```


### DescribeLoa



```js
amazonaws_directconnect.DescribeLoa({}, context)
```


### DescribeLocations



```js
amazonaws_directconnect.DescribeLocations({}, context)
```


### DescribeTags



```js
amazonaws_directconnect.DescribeTags({}, context)
```


### DescribeVirtualGateways



```js
amazonaws_directconnect.DescribeVirtualGateways({}, context)
```


### DescribeVirtualInterfaces



```js
amazonaws_directconnect.DescribeVirtualInterfaces({}, context)
```


### DisassociateConnectionFromLag



```js
amazonaws_directconnect.DisassociateConnectionFromLag({}, context)
```


### TagResource



```js
amazonaws_directconnect.TagResource({}, context)
```


### UntagResource



```js
amazonaws_directconnect.UntagResource({}, context)
```


### UpdateLag



```js
amazonaws_directconnect.UpdateLag({}, context)
```


