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

.then(data => {
  console.log(data);
});
```

## Description

AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions. AWS resources in the China Regions can only be accessed through locations associated with those Regions.

## Actions

### AcceptDirectConnectGatewayAssociationProposal



```js
amazonaws_directconnect.AcceptDirectConnectGatewayAssociationProposal({
  "directConnectGatewayId": null,
  "proposalId": null,
  "associatedGatewayOwnerAccount": null
}, context)
```

#### Input
* input `object`
  * associatedGatewayOwnerAccount **required**
  * directConnectGatewayId **required**
  * overrideAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * proposalId **required**

#### Output
* output [AcceptDirectConnectGatewayAssociationProposalResult](#acceptdirectconnectgatewayassociationproposalresult)

### AllocateConnectionOnInterconnect



```js
amazonaws_directconnect.AllocateConnectionOnInterconnect({
  "bandwidth": null,
  "connectionName": null,
  "ownerAccount": null,
  "interconnectId": null,
  "vlan": null
}, context)
```

#### Input
* input `object`
  * bandwidth **required**
  * connectionName **required**
  * interconnectId **required**
  * ownerAccount **required**
  * vlan **required**

#### Output
* output [Connection](#connection)

### AllocateHostedConnection



```js
amazonaws_directconnect.AllocateHostedConnection({
  "connectionId": null,
  "ownerAccount": null,
  "bandwidth": null,
  "connectionName": null,
  "vlan": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * connectionId **required**
  * connectionName **required**
  * ownerAccount **required**
  * vlan **required**

#### Output
* output [Connection](#connection)

### AllocatePrivateVirtualInterface



```js
amazonaws_directconnect.AllocatePrivateVirtualInterface({
  "connectionId": null,
  "ownerAccount": null,
  "newPrivateVirtualInterfaceAllocation": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newPrivateVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * mtu
    * virtualInterfaceName **required**
    * vlan **required**
  * ownerAccount **required**

#### Output
* output [VirtualInterface](#virtualinterface)

### AllocatePublicVirtualInterface



```js
amazonaws_directconnect.AllocatePublicVirtualInterface({
  "connectionId": null,
  "ownerAccount": null,
  "newPublicVirtualInterfaceAllocation": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newPublicVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualInterfaceName **required**
    * vlan **required**
  * ownerAccount **required**

#### Output
* output [VirtualInterface](#virtualinterface)

### AllocateTransitVirtualInterface



```js
amazonaws_directconnect.AllocateTransitVirtualInterface({
  "connectionId": null,
  "ownerAccount": null,
  "newTransitVirtualInterfaceAllocation": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newTransitVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
    * mtu
    * virtualInterfaceName
    * vlan
  * ownerAccount **required**

#### Output
* output [AllocateTransitVirtualInterfaceResult](#allocatetransitvirtualinterfaceresult)

### AssociateConnectionWithLag



```js
amazonaws_directconnect.AssociateConnectionWithLag({
  "connectionId": null,
  "lagId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * lagId **required**

#### Output
* output [Connection](#connection)

### AssociateHostedConnection



```js
amazonaws_directconnect.AssociateHostedConnection({
  "connectionId": null,
  "parentConnectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * parentConnectionId **required**

#### Output
* output [Connection](#connection)

### AssociateVirtualInterface



```js
amazonaws_directconnect.AssociateVirtualInterface({
  "virtualInterfaceId": null,
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * virtualInterfaceId **required**

#### Output
* output [VirtualInterface](#virtualinterface)

### ConfirmConnection



```js
amazonaws_directconnect.ConfirmConnection({
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**

#### Output
* output [ConfirmConnectionResponse](#confirmconnectionresponse)

### ConfirmPrivateVirtualInterface



```js
amazonaws_directconnect.ConfirmPrivateVirtualInterface({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId
  * virtualGatewayId
  * virtualInterfaceId **required**

#### Output
* output [ConfirmPrivateVirtualInterfaceResponse](#confirmprivatevirtualinterfaceresponse)

### ConfirmPublicVirtualInterface



```js
amazonaws_directconnect.ConfirmPublicVirtualInterface({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * virtualInterfaceId **required**

#### Output
* output [ConfirmPublicVirtualInterfaceResponse](#confirmpublicvirtualinterfaceresponse)

### ConfirmTransitVirtualInterface



```js
amazonaws_directconnect.ConfirmTransitVirtualInterface({
  "virtualInterfaceId": null,
  "directConnectGatewayId": null
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId **required**
  * virtualInterfaceId **required**

#### Output
* output [ConfirmTransitVirtualInterfaceResponse](#confirmtransitvirtualinterfaceresponse)

### CreateBGPPeer



```js
amazonaws_directconnect.CreateBGPPeer({}, context)
```

#### Input
* input `object`
  * newBGPPeer
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
  * virtualInterfaceId

#### Output
* output [CreateBGPPeerResponse](#createbgppeerresponse)

### CreateConnection



```js
amazonaws_directconnect.CreateConnection({
  "location": null,
  "bandwidth": null,
  "connectionName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * connectionName **required**
  * lagId
  * location **required**
  * providerName

#### Output
* output [Connection](#connection)

### CreateDirectConnectGateway



```js
amazonaws_directconnect.CreateDirectConnectGateway({
  "directConnectGatewayName": null
}, context)
```

#### Input
* input `object`
  * amazonSideAsn
  * directConnectGatewayName **required**

#### Output
* output [CreateDirectConnectGatewayResult](#createdirectconnectgatewayresult)

### CreateDirectConnectGatewayAssociation



```js
amazonaws_directconnect.CreateDirectConnectGatewayAssociation({
  "directConnectGatewayId": null
}, context)
```

#### Input
* input `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * directConnectGatewayId **required**
  * gatewayId
  * virtualGatewayId

#### Output
* output [CreateDirectConnectGatewayAssociationResult](#createdirectconnectgatewayassociationresult)

### CreateDirectConnectGatewayAssociationProposal



```js
amazonaws_directconnect.CreateDirectConnectGatewayAssociationProposal({
  "directConnectGatewayId": null,
  "directConnectGatewayOwnerAccount": null,
  "gatewayId": null
}, context)
```

#### Input
* input `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * directConnectGatewayId **required**
  * directConnectGatewayOwnerAccount **required**
  * gatewayId **required**
  * removeAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)

#### Output
* output [CreateDirectConnectGatewayAssociationProposalResult](#createdirectconnectgatewayassociationproposalresult)

### CreateInterconnect



```js
amazonaws_directconnect.CreateInterconnect({
  "interconnectName": null,
  "bandwidth": null,
  "location": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * interconnectName **required**
  * lagId
  * location **required**
  * providerName

#### Output
* output [Interconnect](#interconnect)

### CreateLag



```js
amazonaws_directconnect.CreateLag({
  "numberOfConnections": null,
  "location": null,
  "connectionsBandwidth": null,
  "lagName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * childConnectionTags
    * items [Tag](#tag)
  * connectionId
  * connectionsBandwidth **required**
  * lagName **required**
  * location **required**
  * numberOfConnections **required**
  * providerName

#### Output
* output [Lag](#lag)

### CreatePrivateVirtualInterface



```js
amazonaws_directconnect.CreatePrivateVirtualInterface({
  "connectionId": null,
  "newPrivateVirtualInterface": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newPrivateVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * directConnectGatewayId
    * mtu
    * virtualGatewayId
    * virtualInterfaceName **required**
    * vlan **required**

#### Output
* output [VirtualInterface](#virtualinterface)

### CreatePublicVirtualInterface



```js
amazonaws_directconnect.CreatePublicVirtualInterface({
  "connectionId": null,
  "newPublicVirtualInterface": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newPublicVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualInterfaceName **required**
    * vlan **required**

#### Output
* output [VirtualInterface](#virtualinterface)

### CreateTransitVirtualInterface



```js
amazonaws_directconnect.CreateTransitVirtualInterface({
  "connectionId": null,
  "newTransitVirtualInterface": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * newTransitVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
    * directConnectGatewayId
    * mtu
    * virtualInterfaceName
    * vlan

#### Output
* output [CreateTransitVirtualInterfaceResult](#createtransitvirtualinterfaceresult)

### DeleteBGPPeer



```js
amazonaws_directconnect.DeleteBGPPeer({}, context)
```

#### Input
* input `object`
  * asn
  * bgpPeerId
  * customerAddress
  * virtualInterfaceId

#### Output
* output [DeleteBGPPeerResponse](#deletebgppeerresponse)

### DeleteConnection



```js
amazonaws_directconnect.DeleteConnection({
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**

#### Output
* output [Connection](#connection)

### DeleteDirectConnectGateway



```js
amazonaws_directconnect.DeleteDirectConnectGateway({
  "directConnectGatewayId": null
}, context)
```

#### Input
* input `object`
  * directConnectGatewayId **required**

#### Output
* output [DeleteDirectConnectGatewayResult](#deletedirectconnectgatewayresult)

### DeleteDirectConnectGatewayAssociation



```js
amazonaws_directconnect.DeleteDirectConnectGatewayAssociation({}, context)
```

#### Input
* input `object`
  * associationId
  * directConnectGatewayId
  * virtualGatewayId

#### Output
* output [DeleteDirectConnectGatewayAssociationResult](#deletedirectconnectgatewayassociationresult)

### DeleteDirectConnectGatewayAssociationProposal



```js
amazonaws_directconnect.DeleteDirectConnectGatewayAssociationProposal({
  "proposalId": null
}, context)
```

#### Input
* input `object`
  * proposalId **required**

#### Output
* output [DeleteDirectConnectGatewayAssociationProposalResult](#deletedirectconnectgatewayassociationproposalresult)

### DeleteInterconnect



```js
amazonaws_directconnect.DeleteInterconnect({
  "interconnectId": null
}, context)
```

#### Input
* input `object`
  * interconnectId **required**

#### Output
* output [DeleteInterconnectResponse](#deleteinterconnectresponse)

### DeleteLag



```js
amazonaws_directconnect.DeleteLag({
  "lagId": null
}, context)
```

#### Input
* input `object`
  * lagId **required**

#### Output
* output [Lag](#lag)

### DeleteVirtualInterface



```js
amazonaws_directconnect.DeleteVirtualInterface({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * virtualInterfaceId **required**

#### Output
* output [DeleteVirtualInterfaceResponse](#deletevirtualinterfaceresponse)

### DescribeConnectionLoa



```js
amazonaws_directconnect.DescribeConnectionLoa({
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * loaContentType
  * providerName

#### Output
* output [DescribeConnectionLoaResponse](#describeconnectionloaresponse)

### DescribeConnections



```js
amazonaws_directconnect.DescribeConnections({}, context)
```

#### Input
* input `object`
  * connectionId

#### Output
* output [Connections](#connections)

### DescribeConnectionsOnInterconnect



```js
amazonaws_directconnect.DescribeConnectionsOnInterconnect({
  "interconnectId": null
}, context)
```

#### Input
* input `object`
  * interconnectId **required**

#### Output
* output [Connections](#connections)

### DescribeDirectConnectGatewayAssociationProposals



```js
amazonaws_directconnect.DescribeDirectConnectGatewayAssociationProposals({}, context)
```

#### Input
* input `object`
  * associatedGatewayId
  * directConnectGatewayId
  * maxResults
  * nextToken
  * proposalId

#### Output
* output [DescribeDirectConnectGatewayAssociationProposalsResult](#describedirectconnectgatewayassociationproposalsresult)

### DescribeDirectConnectGatewayAssociations



```js
amazonaws_directconnect.DescribeDirectConnectGatewayAssociations({}, context)
```

#### Input
* input `object`
  * associatedGatewayId
  * associationId
  * directConnectGatewayId
  * maxResults
  * nextToken
  * virtualGatewayId

#### Output
* output [DescribeDirectConnectGatewayAssociationsResult](#describedirectconnectgatewayassociationsresult)

### DescribeDirectConnectGatewayAttachments



```js
amazonaws_directconnect.DescribeDirectConnectGatewayAttachments({}, context)
```

#### Input
* input `object`
  * directConnectGatewayId
  * maxResults
  * nextToken
  * virtualInterfaceId

#### Output
* output [DescribeDirectConnectGatewayAttachmentsResult](#describedirectconnectgatewayattachmentsresult)

### DescribeDirectConnectGateways



```js
amazonaws_directconnect.DescribeDirectConnectGateways({}, context)
```

#### Input
* input `object`
  * directConnectGatewayId
  * maxResults
  * nextToken

#### Output
* output [DescribeDirectConnectGatewaysResult](#describedirectconnectgatewaysresult)

### DescribeHostedConnections



```js
amazonaws_directconnect.DescribeHostedConnections({
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**

#### Output
* output [Connections](#connections)

### DescribeInterconnectLoa



```js
amazonaws_directconnect.DescribeInterconnectLoa({
  "interconnectId": null
}, context)
```

#### Input
* input `object`
  * interconnectId **required**
  * loaContentType
  * providerName

#### Output
* output [DescribeInterconnectLoaResponse](#describeinterconnectloaresponse)

### DescribeInterconnects



```js
amazonaws_directconnect.DescribeInterconnects({}, context)
```

#### Input
* input `object`
  * interconnectId

#### Output
* output [Interconnects](#interconnects)

### DescribeLags



```js
amazonaws_directconnect.DescribeLags({}, context)
```

#### Input
* input `object`
  * lagId

#### Output
* output [Lags](#lags)

### DescribeLoa



```js
amazonaws_directconnect.DescribeLoa({
  "connectionId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * loaContentType
  * providerName

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
  "resourceArns": null
}, context)
```

#### Input
* input `object`
  * resourceArns **required**
    * items [ResourceArn](#resourcearn)

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
  * connectionId
  * virtualInterfaceId

#### Output
* output [VirtualInterfaces](#virtualinterfaces)

### DisassociateConnectionFromLag



```js
amazonaws_directconnect.DisassociateConnectionFromLag({
  "connectionId": null,
  "lagId": null
}, context)
```

#### Input
* input `object`
  * connectionId **required**
  * lagId **required**

#### Output
* output [Connection](#connection)

### ListVirtualInterfaceTestHistory



```js
amazonaws_directconnect.ListVirtualInterfaceTestHistory({}, context)
```

#### Input
* input `object`
  * bgpPeers
    * items [BGPPeerId](#bgppeerid)
  * maxResults
  * nextToken
  * status
  * testId
  * virtualInterfaceId

#### Output
* output [ListVirtualInterfaceTestHistoryResponse](#listvirtualinterfacetesthistoryresponse)

### StartBgpFailoverTest



```js
amazonaws_directconnect.StartBgpFailoverTest({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * bgpPeers
    * items [BGPPeerId](#bgppeerid)
  * testDurationInMinutes
  * virtualInterfaceId **required**

#### Output
* output [StartBgpFailoverTestResponse](#startbgpfailovertestresponse)

### StopBgpFailoverTest



```js
amazonaws_directconnect.StopBgpFailoverTest({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * virtualInterfaceId **required**

#### Output
* output [StopBgpFailoverTestResponse](#stopbgpfailovertestresponse)

### TagResource



```js
amazonaws_directconnect.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_directconnect.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDirectConnectGatewayAssociation



```js
amazonaws_directconnect.UpdateDirectConnectGatewayAssociation({}, context)
```

#### Input
* input `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * associationId
  * removeAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)

#### Output
* output [UpdateDirectConnectGatewayAssociationResult](#updatedirectconnectgatewayassociationresult)

### UpdateLag



```js
amazonaws_directconnect.UpdateLag({
  "lagId": null
}, context)
```

#### Input
* input `object`
  * lagId **required**
  * lagName
  * minimumLinks

#### Output
* output [Lag](#lag)

### UpdateVirtualInterfaceAttributes



```js
amazonaws_directconnect.UpdateVirtualInterfaceAttributes({
  "virtualInterfaceId": null
}, context)
```

#### Input
* input `object`
  * mtu
  * virtualInterfaceId **required**

#### Output
* output [VirtualInterface](#virtualinterface)



## Definitions

### ASN
* ASN `integer`

### AcceptDirectConnectGatewayAssociationProposalRequest
* AcceptDirectConnectGatewayAssociationProposalRequest `object`
  * associatedGatewayOwnerAccount **required**
  * directConnectGatewayId **required**
  * overrideAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * proposalId **required**

### AcceptDirectConnectGatewayAssociationProposalResult
* AcceptDirectConnectGatewayAssociationProposalResult `object`
  * directConnectGatewayAssociation [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### AddressFamily
* AddressFamily `string` (values: ipv4, ipv6)

### AllocateConnectionOnInterconnectRequest
* AllocateConnectionOnInterconnectRequest `object`
  * bandwidth **required**
  * connectionName **required**
  * interconnectId **required**
  * ownerAccount **required**
  * vlan **required**

### AllocateHostedConnectionRequest
* AllocateHostedConnectionRequest `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * connectionId **required**
  * connectionName **required**
  * ownerAccount **required**
  * vlan **required**

### AllocatePrivateVirtualInterfaceRequest
* AllocatePrivateVirtualInterfaceRequest `object`
  * connectionId **required**
  * newPrivateVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * mtu
    * virtualInterfaceName **required**
    * vlan **required**
  * ownerAccount **required**

### AllocatePublicVirtualInterfaceRequest
* AllocatePublicVirtualInterfaceRequest `object`
  * connectionId **required**
  * newPublicVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualInterfaceName **required**
    * vlan **required**
  * ownerAccount **required**

### AllocateTransitVirtualInterfaceRequest
* AllocateTransitVirtualInterfaceRequest `object`
  * connectionId **required**
  * newTransitVirtualInterfaceAllocation **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
    * mtu
    * virtualInterfaceName
    * vlan
  * ownerAccount **required**

### AllocateTransitVirtualInterfaceResult
* AllocateTransitVirtualInterfaceResult `object`
  * virtualInterface [VirtualInterface](#virtualinterface)

### AmazonAddress
* AmazonAddress `string`

### AssociateConnectionWithLagRequest
* AssociateConnectionWithLagRequest `object`
  * connectionId **required**
  * lagId **required**

### AssociateHostedConnectionRequest
* AssociateHostedConnectionRequest `object`
  * connectionId **required**
  * parentConnectionId **required**

### AssociateVirtualInterfaceRequest
* AssociateVirtualInterfaceRequest `object`
  * connectionId **required**
  * virtualInterfaceId **required**

### AssociatedGateway
* AssociatedGateway `object`: Information about the associated gateway.
  * id
  * ownerAccount
  * region
  * type

### AssociatedGatewayId
* AssociatedGatewayId `string`

### AvailablePortSpeeds
* AvailablePortSpeeds `array`
  * items [PortSpeed](#portspeed)

### AwsDevice
* AwsDevice `string`

### AwsDeviceV2
* AwsDeviceV2 `string`

### BGPAuthKey
* BGPAuthKey `string`

### BGPPeer
* BGPPeer `object`: Information about a BGP peer.
  * addressFamily
  * amazonAddress
  * asn
  * authKey
  * awsDeviceV2
  * bgpPeerId
  * bgpPeerState
  * bgpStatus
  * customerAddress

### BGPPeerId
* BGPPeerId `string`

### BGPPeerIdList
* BGPPeerIdList `array`
  * items [BGPPeerId](#bgppeerid)

### BGPPeerList
* BGPPeerList `array`
  * items [BGPPeer](#bgppeer)

### BGPPeerState
* BGPPeerState `string` (values: verifying, pending, available, deleting, deleted)

### BGPStatus
* BGPStatus `string` (values: up, down, unknown)

### Bandwidth
* Bandwidth `string`

### BooleanFlag
* BooleanFlag `boolean`

### CIDR
* CIDR `string`

### ConfirmConnectionRequest
* ConfirmConnectionRequest `object`
  * connectionId **required**

### ConfirmConnectionResponse
* ConfirmConnectionResponse `object`
  * connectionState

### ConfirmPrivateVirtualInterfaceRequest
* ConfirmPrivateVirtualInterfaceRequest `object`
  * directConnectGatewayId
  * virtualGatewayId
  * virtualInterfaceId **required**

### ConfirmPrivateVirtualInterfaceResponse
* ConfirmPrivateVirtualInterfaceResponse `object`
  * virtualInterfaceState

### ConfirmPublicVirtualInterfaceRequest
* ConfirmPublicVirtualInterfaceRequest `object`
  * virtualInterfaceId **required**

### ConfirmPublicVirtualInterfaceResponse
* ConfirmPublicVirtualInterfaceResponse `object`
  * virtualInterfaceState

### ConfirmTransitVirtualInterfaceRequest
* ConfirmTransitVirtualInterfaceRequest `object`
  * directConnectGatewayId **required**
  * virtualInterfaceId **required**

### ConfirmTransitVirtualInterfaceResponse
* ConfirmTransitVirtualInterfaceResponse `object`
  * virtualInterfaceState

### Connection
* Connection `object`: Information about an AWS Direct Connect connection.
  * tags
    * items [Tag](#tag)
  * awsDevice
  * awsDeviceV2
  * bandwidth
  * connectionId
  * connectionName
  * connectionState
  * hasLogicalRedundancy
  * jumboFrameCapable
  * lagId
  * loaIssueTime
  * location
  * ownerAccount
  * partnerName
  * providerName
  * region
  * vlan

### ConnectionId
* ConnectionId `string`

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### ConnectionName
* ConnectionName `string`

### ConnectionState
* ConnectionState `string` (values: ordering, requested, pending, available, down, deleting, deleted, rejected, unknown)

### Connections
* Connections `object`
  * connections
    * items [Connection](#connection)

### Count
* Count `integer`

### CreateBGPPeerRequest
* CreateBGPPeerRequest `object`
  * newBGPPeer
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
  * virtualInterfaceId

### CreateBGPPeerResponse
* CreateBGPPeerResponse `object`
  * virtualInterface
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * amazonSideAsn
    * asn
    * authKey
    * awsDeviceV2
    * bgpPeers
      * items [BGPPeer](#bgppeer)
    * connectionId
    * customerAddress
    * customerRouterConfig
    * directConnectGatewayId
    * jumboFrameCapable
    * location
    * mtu
    * ownerAccount
    * region
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualGatewayId
    * virtualInterfaceId
    * virtualInterfaceName
    * virtualInterfaceState
    * virtualInterfaceType
    * vlan

### CreateConnectionRequest
* CreateConnectionRequest `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * connectionName **required**
  * lagId
  * location **required**
  * providerName

### CreateDirectConnectGatewayAssociationProposalRequest
* CreateDirectConnectGatewayAssociationProposalRequest `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * directConnectGatewayId **required**
  * directConnectGatewayOwnerAccount **required**
  * gatewayId **required**
  * removeAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)

### CreateDirectConnectGatewayAssociationProposalResult
* CreateDirectConnectGatewayAssociationProposalResult `object`
  * directConnectGatewayAssociationProposal
    * associatedGateway
      * id
      * ownerAccount
      * region
      * type
    * directConnectGatewayId
    * directConnectGatewayOwnerAccount
    * existingAllowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)
    * proposalId
    * proposalState
    * requestedAllowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)

### CreateDirectConnectGatewayAssociationRequest
* CreateDirectConnectGatewayAssociationRequest `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * directConnectGatewayId **required**
  * gatewayId
  * virtualGatewayId

### CreateDirectConnectGatewayAssociationResult
* CreateDirectConnectGatewayAssociationResult `object`
  * directConnectGatewayAssociation
    * allowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)
    * associatedGateway
      * id
      * ownerAccount
      * region
      * type
    * associationId
    * associationState
    * directConnectGatewayId
    * directConnectGatewayOwnerAccount
    * stateChangeError
    * virtualGatewayId
    * virtualGatewayOwnerAccount
    * virtualGatewayRegion

### CreateDirectConnectGatewayRequest
* CreateDirectConnectGatewayRequest `object`
  * amazonSideAsn
  * directConnectGatewayName **required**

### CreateDirectConnectGatewayResult
* CreateDirectConnectGatewayResult `object`
  * directConnectGateway
    * amazonSideAsn
    * directConnectGatewayId
    * directConnectGatewayName
    * directConnectGatewayState
    * ownerAccount
    * stateChangeError

### CreateInterconnectRequest
* CreateInterconnectRequest `object`
  * tags
    * items [Tag](#tag)
  * bandwidth **required**
  * interconnectName **required**
  * lagId
  * location **required**
  * providerName

### CreateLagRequest
* CreateLagRequest `object`
  * tags
    * items [Tag](#tag)
  * childConnectionTags
    * items [Tag](#tag)
  * connectionId
  * connectionsBandwidth **required**
  * lagName **required**
  * location **required**
  * numberOfConnections **required**
  * providerName

### CreatePrivateVirtualInterfaceRequest
* CreatePrivateVirtualInterfaceRequest `object`
  * connectionId **required**
  * newPrivateVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * directConnectGatewayId
    * mtu
    * virtualGatewayId
    * virtualInterfaceName **required**
    * vlan **required**

### CreatePublicVirtualInterfaceRequest
* CreatePublicVirtualInterfaceRequest `object`
  * connectionId **required**
  * newPublicVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn **required**
    * authKey
    * customerAddress
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualInterfaceName **required**
    * vlan **required**

### CreateTransitVirtualInterfaceRequest
* CreateTransitVirtualInterfaceRequest `object`
  * connectionId **required**
  * newTransitVirtualInterface **required**
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * asn
    * authKey
    * customerAddress
    * directConnectGatewayId
    * mtu
    * virtualInterfaceName
    * vlan

### CreateTransitVirtualInterfaceResult
* CreateTransitVirtualInterfaceResult `object`
  * virtualInterface [VirtualInterface](#virtualinterface)

### CustomerAddress
* CustomerAddress `string`

### DeleteBGPPeerRequest
* DeleteBGPPeerRequest `object`
  * asn
  * bgpPeerId
  * customerAddress
  * virtualInterfaceId

### DeleteBGPPeerResponse
* DeleteBGPPeerResponse `object`
  * virtualInterface
    * tags
      * items [Tag](#tag)
    * addressFamily
    * amazonAddress
    * amazonSideAsn
    * asn
    * authKey
    * awsDeviceV2
    * bgpPeers
      * items [BGPPeer](#bgppeer)
    * connectionId
    * customerAddress
    * customerRouterConfig
    * directConnectGatewayId
    * jumboFrameCapable
    * location
    * mtu
    * ownerAccount
    * region
    * routeFilterPrefixes
      * items [RouteFilterPrefix](#routefilterprefix)
    * virtualGatewayId
    * virtualInterfaceId
    * virtualInterfaceName
    * virtualInterfaceState
    * virtualInterfaceType
    * vlan

### DeleteConnectionRequest
* DeleteConnectionRequest `object`
  * connectionId **required**

### DeleteDirectConnectGatewayAssociationProposalRequest
* DeleteDirectConnectGatewayAssociationProposalRequest `object`
  * proposalId **required**

### DeleteDirectConnectGatewayAssociationProposalResult
* DeleteDirectConnectGatewayAssociationProposalResult `object`
  * directConnectGatewayAssociationProposal
    * associatedGateway
      * id
      * ownerAccount
      * region
      * type
    * directConnectGatewayId
    * directConnectGatewayOwnerAccount
    * existingAllowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)
    * proposalId
    * proposalState
    * requestedAllowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)

### DeleteDirectConnectGatewayAssociationRequest
* DeleteDirectConnectGatewayAssociationRequest `object`
  * associationId
  * directConnectGatewayId
  * virtualGatewayId

### DeleteDirectConnectGatewayAssociationResult
* DeleteDirectConnectGatewayAssociationResult `object`
  * directConnectGatewayAssociation
    * allowedPrefixesToDirectConnectGateway
      * items [RouteFilterPrefix](#routefilterprefix)
    * associatedGateway
      * id
      * ownerAccount
      * region
      * type
    * associationId
    * associationState
    * directConnectGatewayId
    * directConnectGatewayOwnerAccount
    * stateChangeError
    * virtualGatewayId
    * virtualGatewayOwnerAccount
    * virtualGatewayRegion

### DeleteDirectConnectGatewayRequest
* DeleteDirectConnectGatewayRequest `object`
  * directConnectGatewayId **required**

### DeleteDirectConnectGatewayResult
* DeleteDirectConnectGatewayResult `object`
  * directConnectGateway
    * amazonSideAsn
    * directConnectGatewayId
    * directConnectGatewayName
    * directConnectGatewayState
    * ownerAccount
    * stateChangeError

### DeleteInterconnectRequest
* DeleteInterconnectRequest `object`
  * interconnectId **required**

### DeleteInterconnectResponse
* DeleteInterconnectResponse `object`
  * interconnectState

### DeleteLagRequest
* DeleteLagRequest `object`
  * lagId **required**

### DeleteVirtualInterfaceRequest
* DeleteVirtualInterfaceRequest `object`
  * virtualInterfaceId **required**

### DeleteVirtualInterfaceResponse
* DeleteVirtualInterfaceResponse `object`
  * virtualInterfaceState

### DescribeConnectionLoaRequest
* DescribeConnectionLoaRequest `object`
  * connectionId **required**
  * loaContentType
  * providerName

### DescribeConnectionLoaResponse
* DescribeConnectionLoaResponse `object`
  * loa
    * loaContent
    * loaContentType

### DescribeConnectionsOnInterconnectRequest
* DescribeConnectionsOnInterconnectRequest `object`
  * interconnectId **required**

### DescribeConnectionsRequest
* DescribeConnectionsRequest `object`
  * connectionId

### DescribeDirectConnectGatewayAssociationProposalsRequest
* DescribeDirectConnectGatewayAssociationProposalsRequest `object`
  * associatedGatewayId
  * directConnectGatewayId
  * maxResults
  * nextToken
  * proposalId

### DescribeDirectConnectGatewayAssociationProposalsResult
* DescribeDirectConnectGatewayAssociationProposalsResult `object`
  * directConnectGatewayAssociationProposals
    * items [DirectConnectGatewayAssociationProposal](#directconnectgatewayassociationproposal)
  * nextToken

### DescribeDirectConnectGatewayAssociationsRequest
* DescribeDirectConnectGatewayAssociationsRequest `object`
  * associatedGatewayId
  * associationId
  * directConnectGatewayId
  * maxResults
  * nextToken
  * virtualGatewayId

### DescribeDirectConnectGatewayAssociationsResult
* DescribeDirectConnectGatewayAssociationsResult `object`
  * directConnectGatewayAssociations
    * items [DirectConnectGatewayAssociation](#directconnectgatewayassociation)
  * nextToken

### DescribeDirectConnectGatewayAttachmentsRequest
* DescribeDirectConnectGatewayAttachmentsRequest `object`
  * directConnectGatewayId
  * maxResults
  * nextToken
  * virtualInterfaceId

### DescribeDirectConnectGatewayAttachmentsResult
* DescribeDirectConnectGatewayAttachmentsResult `object`
  * directConnectGatewayAttachments
    * items [DirectConnectGatewayAttachment](#directconnectgatewayattachment)
  * nextToken

### DescribeDirectConnectGatewaysRequest
* DescribeDirectConnectGatewaysRequest `object`
  * directConnectGatewayId
  * maxResults
  * nextToken

### DescribeDirectConnectGatewaysResult
* DescribeDirectConnectGatewaysResult `object`
  * directConnectGateways
    * items [DirectConnectGateway](#directconnectgateway)
  * nextToken

### DescribeHostedConnectionsRequest
* DescribeHostedConnectionsRequest `object`
  * connectionId **required**

### DescribeInterconnectLoaRequest
* DescribeInterconnectLoaRequest `object`
  * interconnectId **required**
  * loaContentType
  * providerName

### DescribeInterconnectLoaResponse
* DescribeInterconnectLoaResponse `object`
  * loa
    * loaContent
    * loaContentType

### DescribeInterconnectsRequest
* DescribeInterconnectsRequest `object`
  * interconnectId

### DescribeLagsRequest
* DescribeLagsRequest `object`
  * lagId

### DescribeLoaRequest
* DescribeLoaRequest `object`
  * connectionId **required**
  * loaContentType
  * providerName

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * resourceArns **required**
    * items [ResourceArn](#resourcearn)

### DescribeTagsResponse
* DescribeTagsResponse `object`
  * resourceTags
    * items [ResourceTag](#resourcetag)

### DescribeVirtualInterfacesRequest
* DescribeVirtualInterfacesRequest `object`
  * connectionId
  * virtualInterfaceId

### DirectConnectClientException


### DirectConnectGateway
* DirectConnectGateway `object`: Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
  * amazonSideAsn
  * directConnectGatewayId
  * directConnectGatewayName
  * directConnectGatewayState
  * ownerAccount
  * stateChangeError

### DirectConnectGatewayAssociation
* DirectConnectGatewayAssociation `object`: Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
  * allowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * associatedGateway
    * id
    * ownerAccount
    * region
    * type
  * associationId
  * associationState
  * directConnectGatewayId
  * directConnectGatewayOwnerAccount
  * stateChangeError
  * virtualGatewayId
  * virtualGatewayOwnerAccount
  * virtualGatewayRegion

### DirectConnectGatewayAssociationId
* DirectConnectGatewayAssociationId `string`

### DirectConnectGatewayAssociationList
* DirectConnectGatewayAssociationList `array`
  * items [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### DirectConnectGatewayAssociationProposal
* DirectConnectGatewayAssociationProposal `object`: Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
  * associatedGateway
    * id
    * ownerAccount
    * region
    * type
  * directConnectGatewayId
  * directConnectGatewayOwnerAccount
  * existingAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * proposalId
  * proposalState
  * requestedAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)

### DirectConnectGatewayAssociationProposalId
* DirectConnectGatewayAssociationProposalId `string`

### DirectConnectGatewayAssociationProposalList
* DirectConnectGatewayAssociationProposalList `array`
  * items [DirectConnectGatewayAssociationProposal](#directconnectgatewayassociationproposal)

### DirectConnectGatewayAssociationProposalState
* DirectConnectGatewayAssociationProposalState `string` (values: requested, accepted, deleted)

### DirectConnectGatewayAssociationState
* DirectConnectGatewayAssociationState `string` (values: associating, associated, disassociating, disassociated, updating)

### DirectConnectGatewayAttachment
* DirectConnectGatewayAttachment `object`: Information about an attachment between a Direct Connect gateway and a virtual interface.
  * attachmentState
  * attachmentType
  * directConnectGatewayId
  * stateChangeError
  * virtualInterfaceId
  * virtualInterfaceOwnerAccount
  * virtualInterfaceRegion

### DirectConnectGatewayAttachmentList
* DirectConnectGatewayAttachmentList `array`
  * items [DirectConnectGatewayAttachment](#directconnectgatewayattachment)

### DirectConnectGatewayAttachmentState
* DirectConnectGatewayAttachmentState `string` (values: attaching, attached, detaching, detached)

### DirectConnectGatewayAttachmentType
* DirectConnectGatewayAttachmentType `string` (values: TransitVirtualInterface, PrivateVirtualInterface)

### DirectConnectGatewayId
* DirectConnectGatewayId `string`

### DirectConnectGatewayList
* DirectConnectGatewayList `array`
  * items [DirectConnectGateway](#directconnectgateway)

### DirectConnectGatewayName
* DirectConnectGatewayName `string`

### DirectConnectGatewayState
* DirectConnectGatewayState `string` (values: pending, available, deleting, deleted)

### DirectConnectServerException


### DisassociateConnectionFromLagRequest
* DisassociateConnectionFromLagRequest `object`
  * connectionId **required**
  * lagId **required**

### DuplicateTagKeysException


### EndTime
* EndTime `string`

### FailureTestHistoryStatus
* FailureTestHistoryStatus `string`

### GatewayIdToAssociate
* GatewayIdToAssociate `string`

### GatewayIdentifier
* GatewayIdentifier `string`

### GatewayType
* GatewayType `string` (values: virtualPrivateGateway, transitGateway)

### HasLogicalRedundancy
* HasLogicalRedundancy `string` (values: unknown, yes, no)

### Interconnect
* Interconnect `object`: Information about an interconnect.
  * tags
    * items [Tag](#tag)
  * awsDevice
  * awsDeviceV2
  * bandwidth
  * hasLogicalRedundancy
  * interconnectId
  * interconnectName
  * interconnectState
  * jumboFrameCapable
  * lagId
  * loaIssueTime
  * location
  * providerName
  * region

### InterconnectId
* InterconnectId `string`

### InterconnectList
* InterconnectList `array`
  * items [Interconnect](#interconnect)

### InterconnectName
* InterconnectName `string`

### InterconnectState
* InterconnectState `string` (values: requested, pending, available, down, deleting, deleted, unknown)

### Interconnects
* Interconnects `object`
  * interconnects
    * items [Interconnect](#interconnect)

### JumboFrameCapable
* JumboFrameCapable `boolean`

### Lag
* Lag `object`: Information about a link aggregation group (LAG).
  * tags
    * items [Tag](#tag)
  * allowsHostedConnections
  * awsDevice
  * awsDeviceV2
  * connections
    * items [Connection](#connection)
  * connectionsBandwidth
  * hasLogicalRedundancy
  * jumboFrameCapable
  * lagId
  * lagName
  * lagState
  * location
  * minimumLinks
  * numberOfConnections
  * ownerAccount
  * providerName
  * region

### LagId
* LagId `string`

### LagList
* LagList `array`
  * items [Lag](#lag)

### LagName
* LagName `string`

### LagState
* LagState `string` (values: requested, pending, available, down, deleting, deleted, unknown)

### Lags
* Lags `object`
  * lags
    * items [Lag](#lag)

### ListVirtualInterfaceTestHistoryRequest
* ListVirtualInterfaceTestHistoryRequest `object`
  * bgpPeers
    * items [BGPPeerId](#bgppeerid)
  * maxResults
  * nextToken
  * status
  * testId
  * virtualInterfaceId

### ListVirtualInterfaceTestHistoryResponse
* ListVirtualInterfaceTestHistoryResponse `object`
  * nextToken
  * virtualInterfaceTestHistory
    * items [VirtualInterfaceTestHistory](#virtualinterfacetesthistory)

### Loa
* Loa `object`: Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.
  * loaContent
  * loaContentType

### LoaContent
* LoaContent `string`

### LoaContentType
* LoaContentType `string` (values: application/pdf)

### LoaIssueTime
* LoaIssueTime `string`

### Location
* Location `object`: Information about an AWS Direct Connect location.
  * availablePortSpeeds
    * items [PortSpeed](#portspeed)
  * availableProviders
    * items [ProviderName](#providername)
  * locationCode
  * locationName
  * region

### LocationCode
* LocationCode `string`

### LocationList
* LocationList `array`
  * items [Location](#location)

### LocationName
* LocationName `string`

### Locations
* Locations `object`
  * locations
    * items [Location](#location)

### LongAsn
* LongAsn `integer`

### MTU
* MTU `integer`

### MaxResultSetSize
* MaxResultSetSize `integer`

### NewBGPPeer
* NewBGPPeer `object`: Information about a new BGP peer.
  * addressFamily
  * amazonAddress
  * asn
  * authKey
  * customerAddress

### NewPrivateVirtualInterface
* NewPrivateVirtualInterface `object`: Information about a private virtual interface.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn **required**
  * authKey
  * customerAddress
  * directConnectGatewayId
  * mtu
  * virtualGatewayId
  * virtualInterfaceName **required**
  * vlan **required**

### NewPrivateVirtualInterfaceAllocation
* NewPrivateVirtualInterfaceAllocation `object`: Information about a private virtual interface to be provisioned on a connection.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn **required**
  * authKey
  * customerAddress
  * mtu
  * virtualInterfaceName **required**
  * vlan **required**

### NewPublicVirtualInterface
* NewPublicVirtualInterface `object`: Information about a public virtual interface.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn **required**
  * authKey
  * customerAddress
  * routeFilterPrefixes
    * items [RouteFilterPrefix](#routefilterprefix)
  * virtualInterfaceName **required**
  * vlan **required**

### NewPublicVirtualInterfaceAllocation
* NewPublicVirtualInterfaceAllocation `object`: Information about a public virtual interface to be provisioned on a connection.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn **required**
  * authKey
  * customerAddress
  * routeFilterPrefixes
    * items [RouteFilterPrefix](#routefilterprefix)
  * virtualInterfaceName **required**
  * vlan **required**

### NewTransitVirtualInterface
* NewTransitVirtualInterface `object`: Information about a transit virtual interface.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn
  * authKey
  * customerAddress
  * directConnectGatewayId
  * mtu
  * virtualInterfaceName
  * vlan

### NewTransitVirtualInterfaceAllocation
* NewTransitVirtualInterfaceAllocation `object`: Information about a transit virtual interface to be provisioned on a connection.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * asn
  * authKey
  * customerAddress
  * mtu
  * virtualInterfaceName
  * vlan

### OwnerAccount
* OwnerAccount `string`

### PaginationToken
* PaginationToken `string`

### PartnerName
* PartnerName `string`

### PortSpeed
* PortSpeed `string`

### ProviderList
* ProviderList `array`
  * items [ProviderName](#providername)

### ProviderName
* ProviderName `string`

### Region
* Region `string`

### ResourceArn
* ResourceArn `string`

### ResourceArnList
* ResourceArnList `array`
  * items [ResourceArn](#resourcearn)

### ResourceTag
* ResourceTag `object`: Information about a tag associated with an AWS Direct Connect resource.
  * tags
    * items [Tag](#tag)
  * resourceArn

### ResourceTagList
* ResourceTagList `array`
  * items [ResourceTag](#resourcetag)

### RouteFilterPrefix
* RouteFilterPrefix `object`: Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
  * cidr

### RouteFilterPrefixList
* RouteFilterPrefixList `array`
  * items [RouteFilterPrefix](#routefilterprefix)

### RouterConfig
* RouterConfig `string`

### StartBgpFailoverTestRequest
* StartBgpFailoverTestRequest `object`
  * bgpPeers
    * items [BGPPeerId](#bgppeerid)
  * testDurationInMinutes
  * virtualInterfaceId **required**

### StartBgpFailoverTestResponse
* StartBgpFailoverTestResponse `object`
  * virtualInterfaceTest
    * bgpPeers
      * items [BGPPeerId](#bgppeerid)
    * endTime
    * ownerAccount
    * startTime
    * status
    * testDurationInMinutes
    * testId
    * virtualInterfaceId

### StartTime
* StartTime `string`

### StateChangeError
* StateChangeError `string`

### StopBgpFailoverTestRequest
* StopBgpFailoverTestRequest `object`
  * virtualInterfaceId **required**

### StopBgpFailoverTestResponse
* StopBgpFailoverTestResponse `object`
  * virtualInterfaceTest
    * bgpPeers
      * items [BGPPeerId](#bgppeerid)
    * endTime
    * ownerAccount
    * startTime
    * status
    * testDurationInMinutes
    * testId
    * virtualInterfaceId

### Tag
* Tag `object`: Information about a tag.
  * key **required**
  * value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TestDuration
* TestDuration `integer`

### TestId
* TestId `string`

### TooManyTagsException


### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDirectConnectGatewayAssociationRequest
* UpdateDirectConnectGatewayAssociationRequest `object`
  * addAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)
  * associationId
  * removeAllowedPrefixesToDirectConnectGateway
    * items [RouteFilterPrefix](#routefilterprefix)

### UpdateDirectConnectGatewayAssociationResult
* UpdateDirectConnectGatewayAssociationResult `object`
  * directConnectGatewayAssociation [DirectConnectGatewayAssociation](#directconnectgatewayassociation)

### UpdateLagRequest
* UpdateLagRequest `object`
  * lagId **required**
  * lagName
  * minimumLinks

### UpdateVirtualInterfaceAttributesRequest
* UpdateVirtualInterfaceAttributesRequest `object`
  * mtu
  * virtualInterfaceId **required**

### VLAN
* VLAN `integer`

### VirtualGateway
* VirtualGateway `object`: Information about a virtual private gateway for a private virtual interface.
  * virtualGatewayId
  * virtualGatewayState

### VirtualGatewayId
* VirtualGatewayId `string`

### VirtualGatewayList
* VirtualGatewayList `array`
  * items [VirtualGateway](#virtualgateway)

### VirtualGatewayRegion
* VirtualGatewayRegion `string`

### VirtualGatewayState
* VirtualGatewayState `string`

### VirtualGateways
* VirtualGateways `object`
  * virtualGateways
    * items [VirtualGateway](#virtualgateway)

### VirtualInterface
* VirtualInterface `object`: Information about a virtual interface.
  * tags
    * items [Tag](#tag)
  * addressFamily
  * amazonAddress
  * amazonSideAsn
  * asn
  * authKey
  * awsDeviceV2
  * bgpPeers
    * items [BGPPeer](#bgppeer)
  * connectionId
  * customerAddress
  * customerRouterConfig
  * directConnectGatewayId
  * jumboFrameCapable
  * location
  * mtu
  * ownerAccount
  * region
  * routeFilterPrefixes
    * items [RouteFilterPrefix](#routefilterprefix)
  * virtualGatewayId
  * virtualInterfaceId
  * virtualInterfaceName
  * virtualInterfaceState
  * virtualInterfaceType
  * vlan

### VirtualInterfaceId
* VirtualInterfaceId `string`

### VirtualInterfaceList
* VirtualInterfaceList `array`
  * items [VirtualInterface](#virtualinterface)

### VirtualInterfaceName
* VirtualInterfaceName `string`

### VirtualInterfaceRegion
* VirtualInterfaceRegion `string`

### VirtualInterfaceState
* VirtualInterfaceState `string` (values: confirming, verifying, pending, available, down, deleting, deleted, rejected, unknown)

### VirtualInterfaceTestHistory
* VirtualInterfaceTestHistory `object`: Information about the virtual interface failover test.
  * bgpPeers
    * items [BGPPeerId](#bgppeerid)
  * endTime
  * ownerAccount
  * startTime
  * status
  * testDurationInMinutes
  * testId
  * virtualInterfaceId

### VirtualInterfaceTestHistoryList
* VirtualInterfaceTestHistoryList `array`
  * items [VirtualInterfaceTestHistory](#virtualinterfacetesthistory)

### VirtualInterfaceType
* VirtualInterfaceType `string`

### VirtualInterfaces
* VirtualInterfaces `object`
  * virtualInterfaces
    * items [VirtualInterface](#virtualinterface)


