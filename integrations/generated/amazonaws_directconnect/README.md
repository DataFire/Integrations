# @datafire/amazonaws_directconnect

Client library for AWS Direct Connect

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_directconnect
```
```js
let amazonaws_directconnect = require('@datafire/amazonaws_directconnect').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
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

#### Input
* input `object`
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionName **required** [ConnectionName](#connectionname)
  * interconnectId **required** [InterconnectId](#interconnectid)
  * ownerAccount **required** [OwnerAccount](#owneraccount)
  * vlan **required** [VLAN](#vlan)

#### Output
* output [Connection](#connection)

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

#### Input
* input `object`
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionId **required** [ConnectionId](#connectionid)
  * connectionName **required** [ConnectionName](#connectionname)
  * ownerAccount **required** [OwnerAccount](#owneraccount)
  * vlan **required** [VLAN](#vlan)

#### Output
* output [Connection](#connection)

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

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * newPrivateVirtualInterfaceAllocation **required** [NewPrivateVirtualInterfaceAllocation](#newprivatevirtualinterfaceallocation)
  * ownerAccount **required** [OwnerAccount](#owneraccount)

#### Output
* output [VirtualInterface](#virtualinterface)

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

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * newPublicVirtualInterfaceAllocation **required** [NewPublicVirtualInterfaceAllocation](#newpublicvirtualinterfaceallocation)
  * ownerAccount **required** [OwnerAccount](#owneraccount)

#### Output
* output [VirtualInterface](#virtualinterface)

### AssociateConnectionWithLag



```js
amazonaws_directconnect.AssociateConnectionWithLag({
  "connectionId": "",
  "lagId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * lagId **required** [LagId](#lagid)

#### Output
* output [Connection](#connection)

### AssociateHostedConnection



```js
amazonaws_directconnect.AssociateHostedConnection({
  "connectionId": "",
  "parentConnectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * parentConnectionId **required** [ConnectionId](#connectionid)

#### Output
* output [Connection](#connection)

### AssociateVirtualInterface



```js
amazonaws_directconnect.AssociateVirtualInterface({
  "virtualInterfaceId": "",
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [VirtualInterface](#virtualinterface)

### ConfirmConnection



```js
amazonaws_directconnect.ConfirmConnection({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)

#### Output
* output [ConfirmConnectionResponse](#confirmconnectionresponse)

### ConfirmPrivateVirtualInterface



```js
amazonaws_directconnect.ConfirmPrivateVirtualInterface({
  "virtualInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [ConfirmPrivateVirtualInterfaceResponse](#confirmprivatevirtualinterfaceresponse)

### ConfirmPublicVirtualInterface



```js
amazonaws_directconnect.ConfirmPublicVirtualInterface({
  "virtualInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [ConfirmPublicVirtualInterfaceResponse](#confirmpublicvirtualinterfaceresponse)

### CreateBGPPeer



```js
amazonaws_directconnect.CreateBGPPeer({}, context)
```

#### Input
* input `object`
  * newBGPPeer [NewBGPPeer](#newbgppeer)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [CreateBGPPeerResponse](#createbgppeerresponse)

### CreateConnection



```js
amazonaws_directconnect.CreateConnection({
  "location": "",
  "bandwidth": "",
  "connectionName": ""
}, context)
```

#### Input
* input `object`
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionName **required** [ConnectionName](#connectionname)
  * lagId [LagId](#lagid)
  * location **required** [LocationCode](#locationcode)

#### Output
* output [Connection](#connection)

### CreateDirectConnectGateway



```js
amazonaws_directconnect.CreateDirectConnectGateway({
  "directConnectGatewayName": ""
}, context)
```

#### Input
* input `object`
  * amazonSideAsn [LongAsn](#longasn)
  * directConnectGatewayName **required** [DirectConnectGatewayName](#directconnectgatewayname)

#### Output
* output [CreateDirectConnectGatewayResult](#createdirectconnectgatewayresult)

### CreateDirectConnectGatewayAssociation



```js
amazonaws_directconnect.CreateDirectConnectGatewayAssociation({
  "directConnectGatewayId": "",
  "virtualGatewayId": ""
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId **required** [VirtualGatewayId](#virtualgatewayid)

#### Output
* output [CreateDirectConnectGatewayAssociationResult](#createdirectconnectgatewayassociationresult)

### CreateInterconnect



```js
amazonaws_directconnect.CreateInterconnect({
  "interconnectName": "",
  "bandwidth": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * bandwidth **required** [Bandwidth](#bandwidth)
  * interconnectName **required** [InterconnectName](#interconnectname)
  * lagId [LagId](#lagid)
  * location **required** [LocationCode](#locationcode)

#### Output
* output [Interconnect](#interconnect)

### CreateLag



```js
amazonaws_directconnect.CreateLag({
  "numberOfConnections": 0,
  "location": "",
  "connectionsBandwidth": "",
  "lagName": ""
}, context)
```

#### Input
* input `object`
  * connectionId [ConnectionId](#connectionid)
  * connectionsBandwidth **required** [Bandwidth](#bandwidth)
  * lagName **required** [LagName](#lagname)
  * location **required** [LocationCode](#locationcode)
  * numberOfConnections **required** [Count](#count)

#### Output
* output [Lag](#lag)

### CreatePrivateVirtualInterface



```js
amazonaws_directconnect.CreatePrivateVirtualInterface({
  "connectionId": "",
  "newPrivateVirtualInterface": {
    "virtualInterfaceName": "",
    "vlan": 0,
    "asn": 0
  }
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * newPrivateVirtualInterface **required** [NewPrivateVirtualInterface](#newprivatevirtualinterface)

#### Output
* output [VirtualInterface](#virtualinterface)

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

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * newPublicVirtualInterface **required** [NewPublicVirtualInterface](#newpublicvirtualinterface)

#### Output
* output [VirtualInterface](#virtualinterface)

### DeleteBGPPeer



```js
amazonaws_directconnect.DeleteBGPPeer({}, context)
```

#### Input
* input `object`
  * asn [ASN](#asn)
  * customerAddress [CustomerAddress](#customeraddress)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [DeleteBGPPeerResponse](#deletebgppeerresponse)

### DeleteConnection



```js
amazonaws_directconnect.DeleteConnection({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)

#### Output
* output [Connection](#connection)

### DeleteDirectConnectGateway



```js
amazonaws_directconnect.DeleteDirectConnectGateway({
  "directConnectGatewayId": ""
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)

#### Output
* output [DeleteDirectConnectGatewayResult](#deletedirectconnectgatewayresult)

### DeleteDirectConnectGatewayAssociation



```js
amazonaws_directconnect.DeleteDirectConnectGatewayAssociation({
  "directConnectGatewayId": "",
  "virtualGatewayId": ""
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId **required** [VirtualGatewayId](#virtualgatewayid)

#### Output
* output [DeleteDirectConnectGatewayAssociationResult](#deletedirectconnectgatewayassociationresult)

### DeleteInterconnect



```js
amazonaws_directconnect.DeleteInterconnect({
  "interconnectId": ""
}, context)
```

#### Input
* input `object`
  * interconnectId **required** [InterconnectId](#interconnectid)

#### Output
* output [DeleteInterconnectResponse](#deleteinterconnectresponse)

### DeleteLag



```js
amazonaws_directconnect.DeleteLag({
  "lagId": ""
}, context)
```

#### Input
* input `object`
  * lagId **required** [LagId](#lagid)

#### Output
* output [Lag](#lag)

### DeleteVirtualInterface



```js
amazonaws_directconnect.DeleteVirtualInterface({
  "virtualInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [DeleteVirtualInterfaceResponse](#deletevirtualinterfaceresponse)

### DescribeConnectionLoa



```js
amazonaws_directconnect.DescribeConnectionLoa({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

#### Output
* output [DescribeConnectionLoaResponse](#describeconnectionloaresponse)

### DescribeConnections



```js
amazonaws_directconnect.DescribeConnections({}, context)
```

#### Input
* input `object`
  * connectionId [ConnectionId](#connectionid)

#### Output
* output [Connections](#connections)

### DescribeConnectionsOnInterconnect



```js
amazonaws_directconnect.DescribeConnectionsOnInterconnect({
  "interconnectId": ""
}, context)
```

#### Input
* input `object`
  * interconnectId **required** [InterconnectId](#interconnectid)

#### Output
* output [Connections](#connections)

### DescribeDirectConnectGatewayAssociations



```js
amazonaws_directconnect.DescribeDirectConnectGatewayAssociations({}, context)
```

#### Input
* input `object`
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)

#### Output
* output [DescribeDirectConnectGatewayAssociationsResult](#describedirectconnectgatewayassociationsresult)

### DescribeDirectConnectGatewayAttachments



```js
amazonaws_directconnect.DescribeDirectConnectGatewayAttachments({}, context)
```

#### Input
* input `object`
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [DescribeDirectConnectGatewayAttachmentsResult](#describedirectconnectgatewayattachmentsresult)

### DescribeDirectConnectGateways



```js
amazonaws_directconnect.DescribeDirectConnectGateways({}, context)
```

#### Input
* input `object`
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [DescribeDirectConnectGatewaysResult](#describedirectconnectgatewaysresult)

### DescribeHostedConnections



```js
amazonaws_directconnect.DescribeHostedConnections({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)

#### Output
* output [Connections](#connections)

### DescribeInterconnectLoa



```js
amazonaws_directconnect.DescribeInterconnectLoa({
  "interconnectId": ""
}, context)
```

#### Input
* input `object`
  * interconnectId **required** [InterconnectId](#interconnectid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

#### Output
* output [DescribeInterconnectLoaResponse](#describeinterconnectloaresponse)

### DescribeInterconnects



```js
amazonaws_directconnect.DescribeInterconnects({}, context)
```

#### Input
* input `object`
  * interconnectId [InterconnectId](#interconnectid)

#### Output
* output [Interconnects](#interconnects)

### DescribeLags



```js
amazonaws_directconnect.DescribeLags({}, context)
```

#### Input
* input `object`
  * lagId [LagId](#lagid)

#### Output
* output [Lags](#lags)

### DescribeLoa



```js
amazonaws_directconnect.DescribeLoa({
  "connectionId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

#### Output
* output [Loa](#loa)

### DescribeLocations



```js
amazonaws_directconnect.DescribeLocations({}, context)
```

#### Input
* input `object`

#### Output
* output [Locations](#locations)

### DescribeTags



```js
amazonaws_directconnect.DescribeTags({
  "resourceArns": []
}, context)
```

#### Input
* input `object`
  * resourceArns **required** [ResourceArnList](#resourcearnlist)

#### Output
* output [DescribeTagsResponse](#describetagsresponse)

### DescribeVirtualGateways



```js
amazonaws_directconnect.DescribeVirtualGateways({}, context)
```

#### Input
* input `object`

#### Output
* output [VirtualGateways](#virtualgateways)

### DescribeVirtualInterfaces



```js
amazonaws_directconnect.DescribeVirtualInterfaces({}, context)
```

#### Input
* input `object`
  * connectionId [ConnectionId](#connectionid)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

#### Output
* output [VirtualInterfaces](#virtualinterfaces)

### DisassociateConnectionFromLag



```js
amazonaws_directconnect.DisassociateConnectionFromLag({
  "connectionId": "",
  "lagId": ""
}, context)
```

#### Input
* input `object`
  * connectionId **required** [ConnectionId](#connectionid)
  * lagId **required** [LagId](#lagid)

#### Output
* output [Connection](#connection)

### TagResource



```js
amazonaws_directconnect.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** [ResourceArn](#resourcearn)
  * tags **required** [TagList](#taglist)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_directconnect.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** [ResourceArn](#resourcearn)
  * tagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateLag



```js
amazonaws_directconnect.UpdateLag({
  "lagId": ""
}, context)
```

#### Input
* input `object`
  * lagId **required** [LagId](#lagid)
  * lagName [LagName](#lagname)
  * minimumLinks [Count](#count)

#### Output
* output [Lag](#lag)



## Definitions

### ASN
* ASN `integer`: <p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>Example: 65000</p>

### AddressFamily
* AddressFamily `string` (values: ipv4, ipv6): <p>Indicates the address family for the BGP peer.</p> <ul> <li> <p> <b>ipv4</b>: IPv4 address family</p> </li> <li> <p> <b>ipv6</b>: IPv6 address family</p> </li> </ul>

### AllocateConnectionOnInterconnectRequest
* AllocateConnectionOnInterconnectRequest `object`: Container for the parameters to the AllocateConnectionOnInterconnect operation.
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionName **required** [ConnectionName](#connectionname)
  * interconnectId **required** [InterconnectId](#interconnectid)
  * ownerAccount **required** [OwnerAccount](#owneraccount)
  * vlan **required** [VLAN](#vlan)

### AllocateHostedConnectionRequest
* AllocateHostedConnectionRequest `object`: Container for the parameters to theHostedConnection operation.
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionId **required** [ConnectionId](#connectionid)
  * connectionName **required** [ConnectionName](#connectionname)
  * ownerAccount **required** [OwnerAccount](#owneraccount)
  * vlan **required** [VLAN](#vlan)

### AllocatePrivateVirtualInterfaceRequest
* AllocatePrivateVirtualInterfaceRequest `object`: Container for the parameters to the AllocatePrivateVirtualInterface operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * newPrivateVirtualInterfaceAllocation **required** [NewPrivateVirtualInterfaceAllocation](#newprivatevirtualinterfaceallocation)
  * ownerAccount **required** [OwnerAccount](#owneraccount)

### AllocatePublicVirtualInterfaceRequest
* AllocatePublicVirtualInterfaceRequest `object`: Container for the parameters to the AllocatePublicVirtualInterface operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * newPublicVirtualInterfaceAllocation **required** [NewPublicVirtualInterfaceAllocation](#newpublicvirtualinterfaceallocation)
  * ownerAccount **required** [OwnerAccount](#owneraccount)

### AmazonAddress
* AmazonAddress `string`: <p>IP address assigned to the Amazon interface.</p> <p>Example: 192.168.1.1/30 or 2001:db8::1/125</p>

### AssociateConnectionWithLagRequest
* AssociateConnectionWithLagRequest `object`: Container for the parameters to the AssociateConnectionWithLag operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * lagId **required** [LagId](#lagid)

### AssociateHostedConnectionRequest
* AssociateHostedConnectionRequest `object`: Container for the parameters to the AssociateHostedConnection operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * parentConnectionId **required** [ConnectionId](#connectionid)

### AssociateVirtualInterfaceRequest
* AssociateVirtualInterfaceRequest `object`: Container for the parameters to the AssociateVirtualInterface operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

### AwsDevice
* AwsDevice `string`: <p>An abstract ID for the physical Direct Connect endpoint.</p> <p>Example: EQC50-abcdef123456</p>

### BGPAuthKey
* BGPAuthKey `string`: <p>The authentication key for BGP configuration.</p> <p>Example: asdf34example</p>

### BGPPeer
* BGPPeer `object`: A structure containing information about a BGP peer.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * bgpPeerState [BGPPeerState](#bgppeerstate)
  * bgpStatus [BGPStatus](#bgpstatus)
  * customerAddress [CustomerAddress](#customeraddress)

### BGPPeerList
* BGPPeerList `array`: A list of the BGP peers configured on this virtual interface.
  * items [BGPPeer](#bgppeer)

### BGPPeerState
* BGPPeerState `string` (values: verifying, pending, available, deleting, deleted): <p>The state of the BGP peer.</p> <ul> <li> <p> <b>Verifying</b>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state only applies to BGP peers on a public virtual interface. </p> </li> <li> <p> <b>Pending</b>: The BGP peer has been created, and is in this state until it is ready to be established.</p> </li> <li> <p> <b>Available</b>: The BGP peer can be established.</p> </li> <li> <p> <b>Deleting</b>: The BGP peer is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The BGP peer has been deleted and cannot be established.</p> </li> </ul>

### BGPStatus
* BGPStatus `string` (values: up, down): <p>The Up/Down state of the BGP peer.</p> <ul> <li> <p> <b>Up</b>: The BGP peer is established.</p> </li> <li> <p> <b>Down</b>: The BGP peer is down.</p> </li> </ul>

### Bandwidth
* Bandwidth `string`: <p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>

### BooleanFlag
* BooleanFlag `boolean`

### CIDR
* CIDR `string`

### ConfirmConnectionRequest
* ConfirmConnectionRequest `object`: Container for the parameters to the ConfirmConnection operation.
  * connectionId **required** [ConnectionId](#connectionid)

### ConfirmConnectionResponse
* ConfirmConnectionResponse `object`: The response received when ConfirmConnection is called.
  * connectionState [ConnectionState](#connectionstate)

### ConfirmPrivateVirtualInterfaceRequest
* ConfirmPrivateVirtualInterfaceRequest `object`: Container for the parameters to the ConfirmPrivateVirtualInterface operation.
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

### ConfirmPrivateVirtualInterfaceResponse
* ConfirmPrivateVirtualInterfaceResponse `object`: The response received when ConfirmPrivateVirtualInterface is called.
  * virtualInterfaceState [VirtualInterfaceState](#virtualinterfacestate)

### ConfirmPublicVirtualInterfaceRequest
* ConfirmPublicVirtualInterfaceRequest `object`: Container for the parameters to the ConfirmPublicVirtualInterface operation.
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

### ConfirmPublicVirtualInterfaceResponse
* ConfirmPublicVirtualInterfaceResponse `object`: The response received when ConfirmPublicVirtualInterface is called.
  * virtualInterfaceState [VirtualInterfaceState](#virtualinterfacestate)

### Connection
* Connection `object`: A connection represents the physical network connection between the AWS Direct Connect location and the customer.
  * awsDevice [AwsDevice](#awsdevice)
  * bandwidth [Bandwidth](#bandwidth)
  * connectionId [ConnectionId](#connectionid)
  * connectionName [ConnectionName](#connectionname)
  * connectionState [ConnectionState](#connectionstate)
  * lagId [LagId](#lagid)
  * loaIssueTime [LoaIssueTime](#loaissuetime)
  * location [LocationCode](#locationcode)
  * ownerAccount [OwnerAccount](#owneraccount)
  * partnerName [PartnerName](#partnername)
  * region [Region](#region)
  * vlan [VLAN](#vlan)

### ConnectionId
* ConnectionId `string`: <p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>

### ConnectionList
* ConnectionList `array`: A list of connections.
  * items [Connection](#connection)

### ConnectionName
* ConnectionName `string`: <p>The name of the connection.</p> <p>Example: "<i>My Connection to AWS</i>"</p> <p>Default: None</p>

### ConnectionState
* ConnectionState `string` (values: ordering, requested, pending, available, down, deleting, deleted, rejected): <p>State of the connection.</p> <ul> <li> <p> <b>Ordering</b>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p> </li> <li> <p> <b>Requested</b>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The connection has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the connection is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The connection is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The connection has been deleted.</p> </li> <li> <p> <b>Rejected</b>: A hosted connection in the 'Ordering' state will enter the 'Rejected' state if it is deleted by the end customer.</p> </li> </ul>

### Connections
* Connections `object`: A structure containing a list of connections.
  * connections [ConnectionList](#connectionlist)

### Count
* Count `integer`

### CreateBGPPeerRequest
* CreateBGPPeerRequest `object`: Container for the parameters to the CreateBGPPeer operation.
  * newBGPPeer [NewBGPPeer](#newbgppeer)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

### CreateBGPPeerResponse
* CreateBGPPeerResponse `object`: The response received when CreateBGPPeer is called.
  * virtualInterface [VirtualInterface](#virtualinterface)

### CreateConnectionRequest
* CreateConnectionRequest `object`: Container for the parameters to the CreateConnection operation.
  * bandwidth **required** [Bandwidth](#bandwidth)
  * connectionName **required** [ConnectionName](#connectionname)
  * lagId [LagId](#lagid)
  * location **required** [LocationCode](#locationcode)

### CreateDirectConnectGatewayAssociationRequest
* CreateDirectConnectGatewayAssociationRequest `object`: Container for the parameters to the CreateDirectConnectGatewayAssociation operation.
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId **required** [VirtualGatewayId](#virtualgatewayid)

### CreateDirectConnectGatewayAssociationResult
* CreateDirectConnectGatewayAssociationResult `object`: Container for the response from the CreateDirectConnectGatewayAssociation API call
  * directConnectGatewayAssociation [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### CreateDirectConnectGatewayRequest
* CreateDirectConnectGatewayRequest `object`: Container for the parameters to the CreateDirectConnectGateway operation.
  * amazonSideAsn [LongAsn](#longasn)
  * directConnectGatewayName **required** [DirectConnectGatewayName](#directconnectgatewayname)

### CreateDirectConnectGatewayResult
* CreateDirectConnectGatewayResult `object`: Container for the response from the CreateDirectConnectGateway API call
  * directConnectGateway [DirectConnectGateway](#directconnectgateway)

### CreateInterconnectRequest
* CreateInterconnectRequest `object`: Container for the parameters to the CreateInterconnect operation.
  * bandwidth **required** [Bandwidth](#bandwidth)
  * interconnectName **required** [InterconnectName](#interconnectname)
  * lagId [LagId](#lagid)
  * location **required** [LocationCode](#locationcode)

### CreateLagRequest
* CreateLagRequest `object`: Container for the parameters to the CreateLag operation.
  * connectionId [ConnectionId](#connectionid)
  * connectionsBandwidth **required** [Bandwidth](#bandwidth)
  * lagName **required** [LagName](#lagname)
  * location **required** [LocationCode](#locationcode)
  * numberOfConnections **required** [Count](#count)

### CreatePrivateVirtualInterfaceRequest
* CreatePrivateVirtualInterfaceRequest `object`: Container for the parameters to the CreatePrivateVirtualInterface operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * newPrivateVirtualInterface **required** [NewPrivateVirtualInterface](#newprivatevirtualinterface)

### CreatePublicVirtualInterfaceRequest
* CreatePublicVirtualInterfaceRequest `object`: Container for the parameters to the CreatePublicVirtualInterface operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * newPublicVirtualInterface **required** [NewPublicVirtualInterface](#newpublicvirtualinterface)

### CustomerAddress
* CustomerAddress `string`: <p>IP address assigned to the customer interface.</p> <p>Example: 192.168.1.2/30 or 2001:db8::2/125</p>

### DeleteBGPPeerRequest
* DeleteBGPPeerRequest `object`: Container for the parameters to the DeleteBGPPeer operation.
  * asn [ASN](#asn)
  * customerAddress [CustomerAddress](#customeraddress)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

### DeleteBGPPeerResponse
* DeleteBGPPeerResponse `object`: The response received when DeleteBGPPeer is called.
  * virtualInterface [VirtualInterface](#virtualinterface)

### DeleteConnectionRequest
* DeleteConnectionRequest `object`: Container for the parameters to the DeleteConnection operation.
  * connectionId **required** [ConnectionId](#connectionid)

### DeleteDirectConnectGatewayAssociationRequest
* DeleteDirectConnectGatewayAssociationRequest `object`: Container for the parameters to the DeleteDirectConnectGatewayAssociation operation.
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId **required** [VirtualGatewayId](#virtualgatewayid)

### DeleteDirectConnectGatewayAssociationResult
* DeleteDirectConnectGatewayAssociationResult `object`: Container for the response from the DeleteDirectConnectGatewayAssociation API call
  * directConnectGatewayAssociation [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### DeleteDirectConnectGatewayRequest
* DeleteDirectConnectGatewayRequest `object`: Container for the parameters to the DeleteDirectConnectGateway operation.
  * directConnectGatewayId **required** [DirectConnectGatewayId](#directconnectgatewayid)

### DeleteDirectConnectGatewayResult
* DeleteDirectConnectGatewayResult `object`: Container for the response from the DeleteDirectConnectGateway API call
  * directConnectGateway [DirectConnectGateway](#directconnectgateway)

### DeleteInterconnectRequest
* DeleteInterconnectRequest `object`: Container for the parameters to the DeleteInterconnect operation.
  * interconnectId **required** [InterconnectId](#interconnectid)

### DeleteInterconnectResponse
* DeleteInterconnectResponse `object`: The response received when DeleteInterconnect is called.
  * interconnectState [InterconnectState](#interconnectstate)

### DeleteLagRequest
* DeleteLagRequest `object`: Container for the parameters to the DeleteLag operation.
  * lagId **required** [LagId](#lagid)

### DeleteVirtualInterfaceRequest
* DeleteVirtualInterfaceRequest `object`: Container for the parameters to the DeleteVirtualInterface operation.
  * virtualInterfaceId **required** [VirtualInterfaceId](#virtualinterfaceid)

### DeleteVirtualInterfaceResponse
* DeleteVirtualInterfaceResponse `object`: The response received when DeleteVirtualInterface is called.
  * virtualInterfaceState [VirtualInterfaceState](#virtualinterfacestate)

### DescribeConnectionLoaRequest
* DescribeConnectionLoaRequest `object`: Container for the parameters to the DescribeConnectionLoa operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

### DescribeConnectionLoaResponse
* DescribeConnectionLoaResponse `object`: The response received when DescribeConnectionLoa is called.
  * loa [Loa](#loa)

### DescribeConnectionsOnInterconnectRequest
* DescribeConnectionsOnInterconnectRequest `object`: Container for the parameters to the DescribeConnectionsOnInterconnect operation.
  * interconnectId **required** [InterconnectId](#interconnectid)

### DescribeConnectionsRequest
* DescribeConnectionsRequest `object`: Container for the parameters to the DescribeConnections operation.
  * connectionId [ConnectionId](#connectionid)

### DescribeDirectConnectGatewayAssociationsRequest
* DescribeDirectConnectGatewayAssociationsRequest `object`: Container for the parameters to the DescribeDirectConnectGatewayAssociations operation.
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)

### DescribeDirectConnectGatewayAssociationsResult
* DescribeDirectConnectGatewayAssociationsResult `object`: Container for the response from the DescribeDirectConnectGatewayAssociations API call
  * directConnectGatewayAssociations [DirectConnectGatewayAssociationList](#directconnectgatewayassociationlist)
  * nextToken [PaginationToken](#paginationtoken)

### DescribeDirectConnectGatewayAttachmentsRequest
* DescribeDirectConnectGatewayAttachmentsRequest `object`: Container for the parameters to the DescribeDirectConnectGatewayAttachments operation.
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

### DescribeDirectConnectGatewayAttachmentsResult
* DescribeDirectConnectGatewayAttachmentsResult `object`: Container for the response from the DescribeDirectConnectGatewayAttachments API call
  * directConnectGatewayAttachments [DirectConnectGatewayAttachmentList](#directconnectgatewayattachmentlist)
  * nextToken [PaginationToken](#paginationtoken)

### DescribeDirectConnectGatewaysRequest
* DescribeDirectConnectGatewaysRequest `object`: Container for the parameters to the DescribeDirectConnectGateways operation.
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * maxResults [MaxResultSetSize](#maxresultsetsize)
  * nextToken [PaginationToken](#paginationtoken)

### DescribeDirectConnectGatewaysResult
* DescribeDirectConnectGatewaysResult `object`: Container for the response from the DescribeDirectConnectGateways API call
  * directConnectGateways [DirectConnectGatewayList](#directconnectgatewaylist)
  * nextToken [PaginationToken](#paginationtoken)

### DescribeHostedConnectionsRequest
* DescribeHostedConnectionsRequest `object`: Container for the parameters to the DescribeHostedConnections operation.
  * connectionId **required** [ConnectionId](#connectionid)

### DescribeInterconnectLoaRequest
* DescribeInterconnectLoaRequest `object`: Container for the parameters to the DescribeInterconnectLoa operation.
  * interconnectId **required** [InterconnectId](#interconnectid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

### DescribeInterconnectLoaResponse
* DescribeInterconnectLoaResponse `object`: The response received when DescribeInterconnectLoa is called.
  * loa [Loa](#loa)

### DescribeInterconnectsRequest
* DescribeInterconnectsRequest `object`: Container for the parameters to the DescribeInterconnects operation.
  * interconnectId [InterconnectId](#interconnectid)

### DescribeLagsRequest
* DescribeLagsRequest `object`: Container for the parameters to the DescribeLags operation.
  * lagId [LagId](#lagid)

### DescribeLoaRequest
* DescribeLoaRequest `object`: Container for the parameters to the DescribeLoa operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * loaContentType [LoaContentType](#loacontenttype)
  * providerName [ProviderName](#providername)

### DescribeTagsRequest
* DescribeTagsRequest `object`: Container for the parameters to the DescribeTags operation.
  * resourceArns **required** [ResourceArnList](#resourcearnlist)

### DescribeTagsResponse
* DescribeTagsResponse `object`: The response received when DescribeTags is called.
  * resourceTags [ResourceTagList](#resourcetaglist)

### DescribeVirtualInterfacesRequest
* DescribeVirtualInterfacesRequest `object`: Container for the parameters to the DescribeVirtualInterfaces operation.
  * connectionId [ConnectionId](#connectionid)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)

### DirectConnectClientException
* DirectConnectClientException `object`: The API was called with invalid parameters. The error message will contain additional details about the cause.
  * message [ErrorMessage](#errormessage)

### DirectConnectGateway
* DirectConnectGateway `object`: A direct connect gateway is an intermediate object that enables you to connect virtual interfaces and virtual private gateways.
  * amazonSideAsn [LongAsn](#longasn)
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * directConnectGatewayName [DirectConnectGatewayName](#directconnectgatewayname)
  * directConnectGatewayState [DirectConnectGatewayState](#directconnectgatewaystate)
  * ownerAccount [OwnerAccount](#owneraccount)
  * stateChangeError [StateChangeError](#statechangeerror)

### DirectConnectGatewayAssociation
* DirectConnectGatewayAssociation `object`: The association between a direct connect gateway and virtual private gateway.
  * associationState [DirectConnectGatewayAssociationState](#directconnectgatewayassociationstate)
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * stateChangeError [StateChangeError](#statechangeerror)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualGatewayOwnerAccount [OwnerAccount](#owneraccount)
  * virtualGatewayRegion [VirtualGatewayRegion](#virtualgatewayregion)

### DirectConnectGatewayAssociationList
* DirectConnectGatewayAssociationList `array`: A list of direct connect gateway associations.
  * items [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### DirectConnectGatewayAssociationState
* DirectConnectGatewayAssociationState `string` (values: associating, associated, disassociating, disassociated): <p>State of the direct connect gateway association.</p> <ul> <li> <p> <b>Associating</b>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <b>Associated</b>: The direct connect gateway and virtual private gateway are successfully associated and ready to pass traffic.</p> </li> <li> <p> <b>Disassociating</b>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <b>Disassociated</b>: The virtual private gateway is successfully disassociated from the direct connect gateway. Traffic flow between the direct connect gateway and virtual private gateway stops.</p> </li> </ul>

### DirectConnectGatewayAttachment
* DirectConnectGatewayAttachment `object`: The association between a direct connect gateway and virtual interface.
  * attachmentState [DirectConnectGatewayAttachmentState](#directconnectgatewayattachmentstate)
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * stateChangeError [StateChangeError](#statechangeerror)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)
  * virtualInterfaceOwnerAccount [OwnerAccount](#owneraccount)
  * virtualInterfaceRegion [VirtualInterfaceRegion](#virtualinterfaceregion)

### DirectConnectGatewayAttachmentList
* DirectConnectGatewayAttachmentList `array`: A list of direct connect gateway attachments.
  * items [DirectConnectGatewayAttachment](#directconnectgatewayattachment)

### DirectConnectGatewayAttachmentState
* DirectConnectGatewayAttachmentState `string` (values: attaching, attached, detaching, detached): <p>State of the direct connect gateway attachment.</p> <ul> <li> <p> <b>Attaching</b>: The initial state after a virtual interface is created using the direct connect gateway.</p> </li> <li> <p> <b>Attached</b>: The direct connect gateway and virtual interface are successfully attached and ready to pass traffic.</p> </li> <li> <p> <b>Detaching</b>: The initial state after calling <a>DeleteVirtualInterface</a> on a virtual interface that is attached to a direct connect gateway.</p> </li> <li> <p> <b>Detached</b>: The virtual interface is successfully detached from the direct connect gateway. Traffic flow between the direct connect gateway and virtual interface stops.</p> </li> </ul>

### DirectConnectGatewayId
* DirectConnectGatewayId `string`: <p>The ID of the direct connect gateway.</p> <p>Example: "abcd1234-dcba-5678-be23-cdef9876ab45"</p>

### DirectConnectGatewayList
* DirectConnectGatewayList `array`: A list of direct connect gateways.
  * items [DirectConnectGateway](#directconnectgateway)

### DirectConnectGatewayName
* DirectConnectGatewayName `string`: <p>The name of the direct connect gateway.</p> <p>Example: "My direct connect gateway"</p> <p>Default: None</p>

### DirectConnectGatewayState
* DirectConnectGatewayState `string` (values: pending, available, deleting, deleted): <p>State of the direct connect gateway.</p> <ul> <li> <p> <b>Pending</b>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p> </li> <li> <p> <b>Available</b>: The direct connect gateway is ready for use.</p> </li> <li> <p> <b>Deleting</b>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p> </li> <li> <p> <b>Deleted</b>: The direct connect gateway is deleted and cannot pass traffic.</p> </li> </ul>

### DirectConnectServerException
* DirectConnectServerException `object`: A server-side error occurred during the API call. The error message will contain additional details about the cause.
  * message [ErrorMessage](#errormessage)

### DisassociateConnectionFromLagRequest
* DisassociateConnectionFromLagRequest `object`: Container for the parameters to the DisassociateConnectionFromLag operation.
  * connectionId **required** [ConnectionId](#connectionid)
  * lagId **required** [LagId](#lagid)

### DuplicateTagKeysException
* DuplicateTagKeysException `object`: A tag key was specified more than once.

### ErrorMessage
* ErrorMessage `string`

### Interconnect
* Interconnect `object`: <p>An interconnect is a connection that can host other connections.</p> <p>Like a standard AWS Direct Connect connection, an interconnect represents the physical connection between an AWS Direct Connect partner's network and a specific Direct Connect location. An AWS Direct Connect partner who owns an interconnect can provision hosted connections on the interconnect for their end customers, thereby providing the end customers with connectivity to AWS services.</p> <p>The resources of the interconnect, including bandwidth and VLAN numbers, are shared by all of the hosted connections on the interconnect, and the owner of the interconnect determines how these resources are assigned.</p>
  * awsDevice [AwsDevice](#awsdevice)
  * bandwidth [Bandwidth](#bandwidth)
  * interconnectId [InterconnectId](#interconnectid)
  * interconnectName [InterconnectName](#interconnectname)
  * interconnectState [InterconnectState](#interconnectstate)
  * lagId [LagId](#lagid)
  * loaIssueTime [LoaIssueTime](#loaissuetime)
  * location [LocationCode](#locationcode)
  * region [Region](#region)

### InterconnectId
* InterconnectId `string`: <p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>

### InterconnectList
* InterconnectList `array`: A list of interconnects.
  * items [Interconnect](#interconnect)

### InterconnectName
* InterconnectName `string`: <p>The name of the interconnect.</p> <p>Example: "<i>1G Interconnect to AWS</i>"</p>

### InterconnectState
* InterconnectState `string` (values: requested, pending, available, down, deleting, deleted): <p>State of the interconnect.</p> <ul> <li> <p> <b>Requested</b>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The interconnect has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The interconnect is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The interconnect has been deleted.</p> </li> </ul>

### Interconnects
* Interconnects `object`: A structure containing a list of interconnects.
  * interconnects [InterconnectList](#interconnectlist)

### Lag
* Lag `object`: Describes a link aggregation group (LAG). A LAG is a connection that uses the Link Aggregation Control Protocol (LACP) to logically aggregate a bundle of physical connections. Like an interconnect, it can host other connections. All connections in a LAG must terminate on the same physical AWS Direct Connect endpoint, and must be the same bandwidth.
  * allowsHostedConnections [BooleanFlag](#booleanflag)
  * awsDevice [AwsDevice](#awsdevice)
  * connections [ConnectionList](#connectionlist)
  * connectionsBandwidth [Bandwidth](#bandwidth)
  * lagId [LagId](#lagid)
  * lagName [LagName](#lagname)
  * lagState [LagState](#lagstate)
  * location [LocationCode](#locationcode)
  * minimumLinks [Count](#count)
  * numberOfConnections [Count](#count)
  * ownerAccount [OwnerAccount](#owneraccount)
  * region [Region](#region)

### LagId
* LagId `string`: <p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>

### LagList
* LagList `array`: A list of LAGs.
  * items [Lag](#lag)

### LagName
* LagName `string`

### LagState
* LagState `string` (values: requested, pending, available, down, deleting, deleted): <p>The state of the LAG.</p> <ul> <li> <p> <b>Requested</b>: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.</p> </li> <li> <p> <b>Pending</b>: The LAG has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is established, and the LAG is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The LAG is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The LAG has been deleted.</p> </li> </ul>

### Lags
* Lags `object`: A structure containing a list of LAGs.
  * lags [LagList](#laglist)

### Loa
* Loa `object`: A structure containing the Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
  * loaContent [LoaContent](#loacontent)
  * loaContentType [LoaContentType](#loacontenttype)

### LoaContent
* LoaContent `string`: The binary contents of the LOA-CFA document.

### LoaContentType
* LoaContentType `string` (values: application/pdf): <p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is "application/pdf".</p> <p>Default: application/pdf</p>

### LoaIssueTime
* LoaIssueTime `string`

### Location
* Location `object`: An AWS Direct Connect location where connections and interconnects can be requested.
  * locationCode [LocationCode](#locationcode)

### LocationCode
* LocationCode `string`: <p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>

### LocationList
* LocationList `array`
  * items [Location](#location)

### LocationName
* LocationName `string`

### Locations
* Locations `object`: A location is a network facility where AWS Direct Connect routers are available to be connected. Generally, these are colocation hubs where many network providers have equipment, and where cross connects can be delivered. Locations include a name and facility code, and must be provided when creating a connection.
  * locations [LocationList](#locationlist)

### LongAsn
* LongAsn `integer`

### MaxResultSetSize
* MaxResultSetSize `integer`: Maximum number of objects to return per page.

### NewBGPPeer
* NewBGPPeer `object`: A structure containing information about a new BGP peer.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * customerAddress [CustomerAddress](#customeraddress)

### NewPrivateVirtualInterface
* NewPrivateVirtualInterface `object`: A structure containing information about a new private virtual interface.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn **required** [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * customerAddress [CustomerAddress](#customeraddress)
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualInterfaceName **required** [VirtualInterfaceName](#virtualinterfacename)
  * vlan **required** [VLAN](#vlan)

### NewPrivateVirtualInterfaceAllocation
* NewPrivateVirtualInterfaceAllocation `object`: A structure containing information about a private virtual interface that will be provisioned on a connection.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn **required** [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * customerAddress [CustomerAddress](#customeraddress)
  * virtualInterfaceName **required** [VirtualInterfaceName](#virtualinterfacename)
  * vlan **required** [VLAN](#vlan)

### NewPublicVirtualInterface
* NewPublicVirtualInterface `object`: A structure containing information about a new public virtual interface.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn **required** [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * customerAddress [CustomerAddress](#customeraddress)
  * routeFilterPrefixes [RouteFilterPrefixList](#routefilterprefixlist)
  * virtualInterfaceName **required** [VirtualInterfaceName](#virtualinterfacename)
  * vlan **required** [VLAN](#vlan)

### NewPublicVirtualInterfaceAllocation
* NewPublicVirtualInterfaceAllocation `object`: A structure containing information about a public virtual interface that will be provisioned on a connection.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * asn **required** [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * customerAddress [CustomerAddress](#customeraddress)
  * routeFilterPrefixes [RouteFilterPrefixList](#routefilterprefixlist)
  * virtualInterfaceName **required** [VirtualInterfaceName](#virtualinterfacename)
  * vlan **required** [VLAN](#vlan)

### OwnerAccount
* OwnerAccount `string`

### PaginationToken
* PaginationToken `string`: Token to retrieve the next page of the result.

### PartnerName
* PartnerName `string`

### ProviderName
* ProviderName `string`

### Region
* Region `string`: <p>The AWS region where the connection is located.</p> <p>Example: us-east-1</p> <p>Default: None</p>

### ResourceArn
* ResourceArn `string`

### ResourceArnList
* ResourceArnList `array`
  * items [ResourceArn](#resourcearn)

### ResourceTag
* ResourceTag `object`: The tags associated with a Direct Connect resource.
  * resourceArn [ResourceArn](#resourcearn)
  * tags [TagList](#taglist)

### ResourceTagList
* ResourceTagList `array`
  * items [ResourceTag](#resourcetag)

### RouteFilterPrefix
* RouteFilterPrefix `object`: A route filter prefix that the customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
  * cidr [CIDR](#cidr)

### RouteFilterPrefixList
* RouteFilterPrefixList `array`: A list of routes to be advertised to the AWS network in this region (public virtual interface).
  * items [RouteFilterPrefix](#routefilterprefix)

### RouterConfig
* RouterConfig `string`

### StateChangeError
* StateChangeError `string`: Error message when the state of an object fails to advance.

### Tag
* Tag `object`: Information about a tag.
  * key **required** [TagKey](#tagkey)
  * value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`: Container for the parameters to the TagResource operation.
  * resourceArn **required** [ResourceArn](#resourcearn)
  * tags **required** [TagList](#taglist)

### TagResourceResponse
* TagResourceResponse `object`: The response received when TagResource is called.

### TagValue
* TagValue `string`

### TooManyTagsException
* TooManyTagsException `object`: You have reached the limit on the number of tags that can be assigned to a Direct Connect resource.

### UntagResourceRequest
* UntagResourceRequest `object`: Container for the parameters to the UntagResource operation.
  * resourceArn **required** [ResourceArn](#resourcearn)
  * tagKeys **required** [TagKeyList](#tagkeylist)

### UntagResourceResponse
* UntagResourceResponse `object`: The response received when UntagResource is called.

### UpdateLagRequest
* UpdateLagRequest `object`: Container for the parameters to the UpdateLag operation.
  * lagId **required** [LagId](#lagid)
  * lagName [LagName](#lagname)
  * minimumLinks [Count](#count)

### VLAN
* VLAN `integer`: <p>The VLAN ID.</p> <p>Example: 101</p>

### VirtualGateway
* VirtualGateway `object`: <p>You can create one or more AWS Direct Connect private virtual interfaces linking to your virtual private gateway.</p> <p>Virtual private gateways can be managed using the Amazon Virtual Private Cloud (Amazon VPC) console or the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html">Amazon EC2 CreateVpnGateway action</a>.</p>
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualGatewayState [VirtualGatewayState](#virtualgatewaystate)

### VirtualGatewayId
* VirtualGatewayId `string`: <p>The ID of the virtual private gateway to a VPC. This only applies to private virtual interfaces.</p> <p>Example: vgw-123er56</p>

### VirtualGatewayList
* VirtualGatewayList `array`: A list of virtual private gateways.
  * items [VirtualGateway](#virtualgateway)

### VirtualGatewayRegion
* VirtualGatewayRegion `string`: <p>The region in which the virtual private gateway is located.</p> <p>Example: us-east-1</p>

### VirtualGatewayState
* VirtualGatewayState `string`: <p>State of the virtual private gateway.</p> <ul> <li> <p> <b>Pending</b>: This is the initial state after calling <i>CreateVpnGateway</i>.</p> </li> <li> <p> <b>Available</b>: Ready for use by a private virtual interface.</p> </li> <li> <p> <b>Deleting</b>: This is the initial state after calling <i>DeleteVpnGateway</i>.</p> </li> <li> <p> <b>Deleted</b>: In this state, a private virtual interface is unable to send traffic over this gateway.</p> </li> </ul>

### VirtualGateways
* VirtualGateways `object`: A structure containing a list of virtual private gateways.
  * virtualGateways [VirtualGatewayList](#virtualgatewaylist)

### VirtualInterface
* VirtualInterface `object`: A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.
  * addressFamily [AddressFamily](#addressfamily)
  * amazonAddress [AmazonAddress](#amazonaddress)
  * amazonSideAsn [LongAsn](#longasn)
  * asn [ASN](#asn)
  * authKey [BGPAuthKey](#bgpauthkey)
  * bgpPeers [BGPPeerList](#bgppeerlist)
  * connectionId [ConnectionId](#connectionid)
  * customerAddress [CustomerAddress](#customeraddress)
  * customerRouterConfig [RouterConfig](#routerconfig)
  * directConnectGatewayId [DirectConnectGatewayId](#directconnectgatewayid)
  * location [LocationCode](#locationcode)
  * ownerAccount [OwnerAccount](#owneraccount)
  * routeFilterPrefixes [RouteFilterPrefixList](#routefilterprefixlist)
  * virtualGatewayId [VirtualGatewayId](#virtualgatewayid)
  * virtualInterfaceId [VirtualInterfaceId](#virtualinterfaceid)
  * virtualInterfaceName [VirtualInterfaceName](#virtualinterfacename)
  * virtualInterfaceState [VirtualInterfaceState](#virtualinterfacestate)
  * virtualInterfaceType [VirtualInterfaceType](#virtualinterfacetype)
  * vlan [VLAN](#vlan)

### VirtualInterfaceId
* VirtualInterfaceId `string`: <p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>

### VirtualInterfaceList
* VirtualInterfaceList `array`: A list of virtual interfaces.
  * items [VirtualInterface](#virtualinterface)

### VirtualInterfaceName
* VirtualInterfaceName `string`: <p>The name of the virtual interface assigned by the customer.</p> <p>Example: "My VPC"</p>

### VirtualInterfaceRegion
* VirtualInterfaceRegion `string`: <p>The region in which the virtual interface is located.</p> <p>Example: us-east-1</p>

### VirtualInterfaceState
* VirtualInterfaceState `string` (values: confirming, verifying, pending, available, down, deleting, deleted, rejected): <p>State of the virtual interface.</p> <ul> <li> <p> <b>Confirming</b>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <b>Verifying</b>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <b>Pending</b>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <b>Available</b>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <b>Down</b>: A virtual interface that is BGP down.</p> </li> <li> <p> <b>Deleting</b>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <b>Deleted</b>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <b>Rejected</b>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the 'Confirming' state is deleted by the virtual interface owner, the virtual interface will enter the 'Rejected' state.</p> </li> </ul>

### VirtualInterfaceType
* VirtualInterfaceType `string`: <p>The type of virtual interface.</p> <p>Example: private (Amazon VPC) or public (Amazon S3, Amazon DynamoDB, and so on.)</p>

### VirtualInterfaces
* VirtualInterfaces `object`: A structure containing a list of virtual interfaces.
  * virtualInterfaces [VirtualInterfaceList](#virtualinterfacelist)


