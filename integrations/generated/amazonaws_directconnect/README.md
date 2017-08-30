# @datafire/amazonaws_directconnect

Client library for AWS Direct Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_directconnect
```

```js
let datafire = require('datafire');
let amazonaws_directconnect = require('@datafire/amazonaws_directconnect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_directconnect.AllocateConnectionOnInterconnect({}).then(data => {
  console.log(data);
})
```

## Description
AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Simple Storage Service (Amazon S3)) and to Amazon Virtual Private Cloud (Amazon VPC), bypassing Internet service providers in your network path. An AWS Direct Connect location provides access to AWS in the region it is associated with, as well as access to other US regions. For example, you can provision a single connection to any AWS Direct Connect location in the US and use it to access public AWS services in all US Regions and AWS GovCloud (US).

## Actions
### AllocateConnectionOnInterconnect



```js
amazonaws_directconnect.AllocateConnectionOnInterconnect({
  "bandwidth": "",
  "connectionName": "",
  "ownerAccount": "",
  "interconnectId": "",
  "vlan": 0
}, context)
```

#### Parameters
* bandwidth (string) **required** - <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>
* connectionName (string) **required** - <p>The name of the connection.</p> <p>Example: "<i>My Connection to AWS</i>"</p> <p>Default: None</p>
* interconnectId (string) **required** - <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>
* ownerAccount (string) **required**
* vlan (integer) **required** - <p>The VLAN ID.</p> <p>Example: 101</p>

### AllocateHostedConnection



```js
amazonaws_directconnect.AllocateHostedConnection({
  "connectionId": "",
  "ownerAccount": "",
  "bandwidth": "",
  "connectionName": "",
  "vlan": 0
}, context)
```

#### Parameters
* bandwidth (string) **required** - <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* connectionName (string) **required** - <p>The name of the connection.</p> <p>Example: "<i>My Connection to AWS</i>"</p> <p>Default: None</p>
* ownerAccount (string) **required**
* vlan (integer) **required** - <p>The VLAN ID.</p> <p>Example: 101</p>

### AllocatePrivateVirtualInterface



```js
amazonaws_directconnect.AllocatePrivateVirtualInterface({
  "connectionId": "",
  "ownerAccount": "",
  "newPrivateVirtualInterfaceAllocation": {
    "virtualInterfaceName": "",
    "vlan": 0,
    "asn": 0
  }
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* newPrivateVirtualInterfaceAllocation (object) **required** - A structure containing information about a private virtual interface that will be provisioned on a connection.
* ownerAccount (string) **required**

### AllocatePublicVirtualInterface



```js
amazonaws_directconnect.AllocatePublicVirtualInterface({
  "connectionId": "",
  "ownerAccount": "",
  "newPublicVirtualInterfaceAllocation": {
    "virtualInterfaceName": "",
    "vlan": 0,
    "asn": 0
  }
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* newPublicVirtualInterfaceAllocation (object) **required** - A structure containing information about a public virtual interface that will be provisioned on a connection.
* ownerAccount (string) **required**

### AssociateConnectionWithLag



```js
amazonaws_directconnect.AssociateConnectionWithLag({
  "connectionId": "",
  "lagId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* lagId (string) **required** - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>

### AssociateHostedConnection



```js
amazonaws_directconnect.AssociateHostedConnection({
  "connectionId": "",
  "parentConnectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* parentConnectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### AssociateVirtualInterface



```js
amazonaws_directconnect.AssociateVirtualInterface({
  "virtualInterfaceId": "",
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* virtualInterfaceId (string) **required** - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### ConfirmConnection



```js
amazonaws_directconnect.ConfirmConnection({
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### ConfirmPrivateVirtualInterface



```js
amazonaws_directconnect.ConfirmPrivateVirtualInterface({
  "virtualInterfaceId": "",
  "virtualGatewayId": ""
}, context)
```

#### Parameters
* virtualGatewayId (string) **required** - <p>The ID of the virtual private gateway to a VPC. This only applies to private virtual interfaces.</p> <p>Example: vgw-123er56</p>
* virtualInterfaceId (string) **required** - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### ConfirmPublicVirtualInterface



```js
amazonaws_directconnect.ConfirmPublicVirtualInterface({
  "virtualInterfaceId": ""
}, context)
```

#### Parameters
* virtualInterfaceId (string) **required** - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### CreateBGPPeer



```js
amazonaws_directconnect.CreateBGPPeer({}, context)
```

#### Parameters
* newBGPPeer (object) - A structure containing information about a new BGP peer.
* virtualInterfaceId (string) - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### CreateConnection



```js
amazonaws_directconnect.CreateConnection({
  "location": "",
  "bandwidth": "",
  "connectionName": ""
}, context)
```

#### Parameters
* bandwidth (string) **required** - <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>
* connectionName (string) **required** - <p>The name of the connection.</p> <p>Example: "<i>My Connection to AWS</i>"</p> <p>Default: None</p>
* lagId (string) - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>
* location (string) **required** - <p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>

### CreateInterconnect



```js
amazonaws_directconnect.CreateInterconnect({
  "interconnectName": "",
  "bandwidth": "",
  "location": ""
}, context)
```

#### Parameters
* bandwidth (string) **required** - <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>
* interconnectName (string) **required** - <p>The name of the interconnect.</p> <p>Example: "<i>1G Interconnect to AWS</i>"</p>
* lagId (string) - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>
* location (string) **required** - <p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>

### CreateLag



```js
amazonaws_directconnect.CreateLag({
  "numberOfConnections": 0,
  "location": "",
  "connectionsBandwidth": "",
  "lagName": ""
}, context)
```

#### Parameters
* connectionId (string) - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* connectionsBandwidth (string) **required** - <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>
* lagName (string) **required**
* location (string) **required** - <p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>
* numberOfConnections (integer) **required**

### CreatePrivateVirtualInterface



```js
amazonaws_directconnect.CreatePrivateVirtualInterface({
  "connectionId": "",
  "newPrivateVirtualInterface": {
    "virtualInterfaceName": "",
    "vlan": 0,
    "asn": 0,
    "virtualGatewayId": ""
  }
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* newPrivateVirtualInterface (object) **required** - A structure containing information about a new private virtual interface.

### CreatePublicVirtualInterface



```js
amazonaws_directconnect.CreatePublicVirtualInterface({
  "connectionId": "",
  "newPublicVirtualInterface": {
    "virtualInterfaceName": "",
    "vlan": 0,
    "asn": 0
  }
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* newPublicVirtualInterface (object) **required** - A structure containing information about a new public virtual interface.

### DeleteBGPPeer



```js
amazonaws_directconnect.DeleteBGPPeer({}, context)
```

#### Parameters
* asn (integer) - <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>Example: 65000</p>
* customerAddress (string) - <p>IP address assigned to the customer interface.</p> <p>Example: 192.168.1.2/30 or 2001:db8::2/125</p>
* virtualInterfaceId (string) - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### DeleteConnection



```js
amazonaws_directconnect.DeleteConnection({
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### DeleteInterconnect



```js
amazonaws_directconnect.DeleteInterconnect({
  "interconnectId": ""
}, context)
```

#### Parameters
* interconnectId (string) **required** - <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>

### DeleteLag



```js
amazonaws_directconnect.DeleteLag({
  "lagId": ""
}, context)
```

#### Parameters
* lagId (string) **required** - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>

### DeleteVirtualInterface



```js
amazonaws_directconnect.DeleteVirtualInterface({
  "virtualInterfaceId": ""
}, context)
```

#### Parameters
* virtualInterfaceId (string) **required** - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### DescribeConnectionLoa



```js
amazonaws_directconnect.DescribeConnectionLoa({
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* loaContentType (string) - <p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is "application/pdf".</p> <p>Default: application/pdf</p>
* providerName (string)

### DescribeConnections



```js
amazonaws_directconnect.DescribeConnections({}, context)
```

#### Parameters
* connectionId (string) - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### DescribeConnectionsOnInterconnect



```js
amazonaws_directconnect.DescribeConnectionsOnInterconnect({
  "interconnectId": ""
}, context)
```

#### Parameters
* interconnectId (string) **required** - <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>

### DescribeHostedConnections



```js
amazonaws_directconnect.DescribeHostedConnections({
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### DescribeInterconnectLoa



```js
amazonaws_directconnect.DescribeInterconnectLoa({
  "interconnectId": ""
}, context)
```

#### Parameters
* interconnectId (string) **required** - <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>
* loaContentType (string) - <p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is "application/pdf".</p> <p>Default: application/pdf</p>
* providerName (string)

### DescribeInterconnects



```js
amazonaws_directconnect.DescribeInterconnects({}, context)
```

#### Parameters
* interconnectId (string) - <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>

### DescribeLags



```js
amazonaws_directconnect.DescribeLags({}, context)
```

#### Parameters
* lagId (string) - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>

### DescribeLoa



```js
amazonaws_directconnect.DescribeLoa({
  "connectionId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* loaContentType (string) - <p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is "application/pdf".</p> <p>Default: application/pdf</p>
* providerName (string)

### DescribeLocations



```js
amazonaws_directconnect.DescribeLocations({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeTags



```js
amazonaws_directconnect.DescribeTags({
  "resourceArns": []
}, context)
```

#### Parameters
* resourceArns (array) **required**

### DescribeVirtualGateways



```js
amazonaws_directconnect.DescribeVirtualGateways({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeVirtualInterfaces



```js
amazonaws_directconnect.DescribeVirtualInterfaces({}, context)
```

#### Parameters
* connectionId (string) - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* virtualInterfaceId (string) - <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### DisassociateConnectionFromLag



```js
amazonaws_directconnect.DisassociateConnectionFromLag({
  "connectionId": "",
  "lagId": ""
}, context)
```

#### Parameters
* connectionId (string) **required** - <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>
* lagId (string) **required** - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>

### TagResource



```js
amazonaws_directconnect.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Parameters
* resourceArn (string) **required**
* tags (array) **required**

### UntagResource



```js
amazonaws_directconnect.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Parameters
* resourceArn (string) **required**
* tagKeys (array) **required**

### UpdateLag



```js
amazonaws_directconnect.UpdateLag({
  "lagId": ""
}, context)
```

#### Parameters
* lagId (string) **required** - <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>
* lagName (string)
* minimumLinks (integer)

