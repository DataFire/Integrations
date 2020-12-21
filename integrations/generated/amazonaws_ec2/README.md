# @datafire/amazonaws_ec2

Client library for Amazon Elastic Compute Cloud

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ec2
```
```js
let amazonaws_ec2 = require('@datafire/amazonaws_ec2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster.</p> <p>To learn more, see the following resources:</p> <ul> <li> <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">AmazonEC2 product page</a>, <a href="http://aws.amazon.com/documentation/ec2">Amazon EC2 documentation</a> </p> </li> <li> <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon EBS documentation</a> </p> </li> <li> <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="http://aws.amazon.com/documentation/vpc">Amazon VPC documentation</a> </p> </li> <li> <p>AWS VPN: <a href="http://aws.amazon.com/vpn">AWS VPN product page</a>, <a href="http://aws.amazon.com/documentation/vpn">AWS VPN documentation</a> </p> </li> </ul>

## Actions

### AcceptReservedInstancesExchangeQuote



```js
amazonaws_ec2.AcceptReservedInstancesExchangeQuote({
  "ReservedInstanceId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ReservedInstanceId **required** `array`
  * TargetConfiguration `array`

#### Output
* output [AcceptReservedInstancesExchangeQuoteResult](#acceptreservedinstancesexchangequoteresult)

### AcceptReservedInstancesExchangeQuote



```js
amazonaws_ec2.AcceptReservedInstancesExchangeQuote({
  "ReservedInstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ReservedInstanceIds **required**
    * items
  * TargetConfigurations
    * items
      * InstanceCount
      * OfferingId **required**

#### Output
* output [AcceptReservedInstancesExchangeQuoteResult](#acceptreservedinstancesexchangequoteresult)

### AcceptTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.AcceptTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * TransitGatewayAttachmentId `string`
  * SubnetIds `array`
  * DryRun `boolean`

#### Output
* output [AcceptTransitGatewayMulticastDomainAssociationsResult](#accepttransitgatewaymulticastdomainassociationsresult)

### AcceptTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.AcceptTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

#### Output
* output [AcceptTransitGatewayMulticastDomainAssociationsResult](#accepttransitgatewaymulticastdomainassociationsresult)

### AcceptTransitGatewayPeeringAttachment



```js
amazonaws_ec2.AcceptTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [AcceptTransitGatewayPeeringAttachmentResult](#accepttransitgatewaypeeringattachmentresult)

### AcceptTransitGatewayPeeringAttachment



```js
amazonaws_ec2.AcceptTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [AcceptTransitGatewayPeeringAttachmentResult](#accepttransitgatewaypeeringattachmentresult)

### AcceptTransitGatewayVpcAttachment



```js
amazonaws_ec2.AcceptTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [AcceptTransitGatewayVpcAttachmentResult](#accepttransitgatewayvpcattachmentresult)

### AcceptTransitGatewayVpcAttachment



```js
amazonaws_ec2.AcceptTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [AcceptTransitGatewayVpcAttachmentResult](#accepttransitgatewayvpcattachmentresult)

### AcceptVpcEndpointConnections



```js
amazonaws_ec2.AcceptVpcEndpointConnections({
  "ServiceId": "",
  "VpcEndpointId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`
  * VpcEndpointId **required** `array`

#### Output
* output [AcceptVpcEndpointConnectionsResult](#acceptvpcendpointconnectionsresult)

### AcceptVpcEndpointConnections



```js
amazonaws_ec2.AcceptVpcEndpointConnections({
  "ServiceId": null,
  "VpcEndpointIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ServiceId **required**
  * VpcEndpointIds **required**
    * items

#### Output
* output [AcceptVpcEndpointConnectionsResult](#acceptvpcendpointconnectionsresult)

### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcPeeringConnectionId `string`

#### Output
* output [AcceptVpcPeeringConnectionResult](#acceptvpcpeeringconnectionresult)

### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcPeeringConnectionId

#### Output
* output [AcceptVpcPeeringConnectionResult](#acceptvpcpeeringconnectionresult)

### AdvertiseByoipCidr



```js
amazonaws_ec2.AdvertiseByoipCidr({
  "Cidr": ""
}, context)
```

#### Input
* input `object`
  * Cidr **required** `string`
  * DryRun `boolean`

#### Output
* output [AdvertiseByoipCidrResult](#advertisebyoipcidrresult)

### AdvertiseByoipCidr



```js
amazonaws_ec2.AdvertiseByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**
  * DryRun

#### Output
* output [AdvertiseByoipCidrResult](#advertisebyoipcidrresult)

### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```

#### Input
* input `object`
  * Domain `string`
  * Address `string`
  * PublicIpv4Pool `string`
  * NetworkBorderGroup `string`
  * CustomerOwnedIpv4Pool `string`
  * DryRun `boolean`

#### Output
* output [AllocateAddressResult](#allocateaddressresult)

### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```

#### Input
* input `object`
  * Address
  * CustomerOwnedIpv4Pool
  * Domain
  * DryRun
  * NetworkBorderGroup
  * PublicIpv4Pool

#### Output
* output [AllocateAddressResult](#allocateaddressresult)

### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({
  "AvailabilityZone": "",
  "Quantity": 0
}, context)
```

#### Input
* input `object`
  * AutoPlacement `string`
  * AvailabilityZone **required** `string`
  * ClientToken `string`
  * InstanceType `string`
  * InstanceFamily `string`
  * Quantity **required** `integer`
  * TagSpecification `array`
  * HostRecovery `string`

#### Output
* output [AllocateHostsResult](#allocatehostsresult)

### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({
  "AvailabilityZone": null,
  "Quantity": null
}, context)
```

#### Input
* input `object`
  * AutoPlacement
  * AvailabilityZone **required**
  * ClientToken
  * HostRecovery
  * InstanceFamily
  * InstanceType
  * Quantity **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [AllocateHostsResult](#allocatehostsresult)

### ApplySecurityGroupsToClientVpnTargetNetwork



```js
amazonaws_ec2.ApplySecurityGroupsToClientVpnTargetNetwork({
  "ClientVpnEndpointId": "",
  "VpcId": "",
  "SecurityGroupId": []
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * VpcId **required** `string`
  * SecurityGroupId **required** `array`
  * DryRun `boolean`

#### Output
* output [ApplySecurityGroupsToClientVpnTargetNetworkResult](#applysecuritygroupstoclientvpntargetnetworkresult)

### ApplySecurityGroupsToClientVpnTargetNetwork



```js
amazonaws_ec2.ApplySecurityGroupsToClientVpnTargetNetwork({
  "ClientVpnEndpointId": null,
  "VpcId": null,
  "SecurityGroupIds": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * DryRun
  * SecurityGroupIds **required**
    * items
  * VpcId **required**

#### Output
* output [ApplySecurityGroupsToClientVpnTargetNetworkResult](#applysecuritygroupstoclientvpntargetnetworkresult)

### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Ipv6AddressCount `integer`
  * Ipv6Addresses `array`
  * NetworkInterfaceId **required** `string`

#### Output
* output [AssignIpv6AddressesResult](#assignipv6addressesresult)

### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
  * NetworkInterfaceId **required**

#### Output
* output [AssignIpv6AddressesResult](#assignipv6addressesresult)

### AssignPrivateIpAddresses



```js
amazonaws_ec2.AssignPrivateIpAddresses({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * AllowReassignment `boolean`
  * NetworkInterfaceId **required** `string`
  * PrivateIpAddress `array`
  * SecondaryPrivateIpAddressCount `integer`

#### Output
* output [AssignPrivateIpAddressesResult](#assignprivateipaddressesresult)

### AssignPrivateIpAddresses



```js
amazonaws_ec2.AssignPrivateIpAddresses({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * AllowReassignment
  * NetworkInterfaceId **required**
  * PrivateIpAddresses
    * items
  * SecondaryPrivateIpAddressCount

#### Output
* output [AssignPrivateIpAddressesResult](#assignprivateipaddressesresult)

### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```

#### Input
* input `object`
  * AllocationId `string`
  * InstanceId `string`
  * PublicIp `string`
  * AllowReassociation `boolean`
  * DryRun `boolean`
  * NetworkInterfaceId `string`
  * PrivateIpAddress `string`

#### Output
* output [AssociateAddressResult](#associateaddressresult)

### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```

#### Input
* input `object`
  * AllocationId
  * AllowReassociation
  * DryRun
  * InstanceId
  * NetworkInterfaceId
  * PrivateIpAddress
  * PublicIp

#### Output
* output [AssociateAddressResult](#associateaddressresult)

### AssociateClientVpnTargetNetwork



```js
amazonaws_ec2.AssociateClientVpnTargetNetwork({
  "ClientVpnEndpointId": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * SubnetId **required** `string`
  * ClientToken `string`
  * DryRun `boolean`

#### Output
* output [AssociateClientVpnTargetNetworkResult](#associateclientvpntargetnetworkresult)

### AssociateClientVpnTargetNetwork



```js
amazonaws_ec2.AssociateClientVpnTargetNetwork({
  "ClientVpnEndpointId": null,
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * ClientVpnEndpointId **required**
  * DryRun
  * SubnetId **required**

#### Output
* output [AssociateClientVpnTargetNetworkResult](#associateclientvpntargetnetworkresult)

### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({
  "DhcpOptionsId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DhcpOptionsId **required** `string`
  * VpcId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({
  "DhcpOptionsId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DhcpOptionsId **required**
  * DryRun
  * VpcId **required**

#### Output
*Output schema unknown*

### AssociateEnclaveCertificateIamRole



```js
amazonaws_ec2.AssociateEnclaveCertificateIamRole({}, context)
```

#### Input
* input `object`
  * CertificateArn `string`
  * RoleArn `string`
  * DryRun `boolean`

#### Output
* output [AssociateEnclaveCertificateIamRoleResult](#associateenclavecertificateiamroleresult)

### AssociateEnclaveCertificateIamRole



```js
amazonaws_ec2.AssociateEnclaveCertificateIamRole({}, context)
```

#### Input
* input `object`
  * CertificateArn
  * DryRun
  * RoleArn

#### Output
* output [AssociateEnclaveCertificateIamRoleResult](#associateenclavecertificateiamroleresult)

### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({
  "IamInstanceProfile": {},
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * IamInstanceProfile **required** `object`
  * InstanceId **required** `string`

#### Output
* output [AssociateIamInstanceProfileResult](#associateiaminstanceprofileresult)

### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({
  "IamInstanceProfile": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * IamInstanceProfile **required**
    * Arn
    * Name
  * InstanceId **required**

#### Output
* output [AssociateIamInstanceProfileResult](#associateiaminstanceprofileresult)

### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * RouteTableId **required** `string`
  * SubnetId `string`
  * GatewayId `string`

#### Output
* output [AssociateRouteTableResult](#associateroutetableresult)

### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GatewayId
  * RouteTableId **required**
  * SubnetId

#### Output
* output [AssociateRouteTableResult](#associateroutetableresult)

### AssociateSubnetCidrBlock



```js
amazonaws_ec2.AssociateSubnetCidrBlock({
  "Ipv6CidrBlock": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * Ipv6CidrBlock **required** `string`
  * SubnetId **required** `string`

#### Output
* output [AssociateSubnetCidrBlockResult](#associatesubnetcidrblockresult)

### AssociateSubnetCidrBlock



```js
amazonaws_ec2.AssociateSubnetCidrBlock({
  "Ipv6CidrBlock": null,
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * Ipv6CidrBlock **required**
  * SubnetId **required**

#### Output
* output [AssociateSubnetCidrBlockResult](#associatesubnetcidrblockresult)

### AssociateTransitGatewayMulticastDomain



```js
amazonaws_ec2.AssociateTransitGatewayMulticastDomain({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * TransitGatewayAttachmentId `string`
  * SubnetIds `array`
  * DryRun `boolean`

#### Output
* output [AssociateTransitGatewayMulticastDomainResult](#associatetransitgatewaymulticastdomainresult)

### AssociateTransitGatewayMulticastDomain



```js
amazonaws_ec2.AssociateTransitGatewayMulticastDomain({}, context)
```

#### Input
* input `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

#### Output
* output [AssociateTransitGatewayMulticastDomainResult](#associatetransitgatewaymulticastdomainresult)

### AssociateTransitGatewayRouteTable



```js
amazonaws_ec2.AssociateTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": "",
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [AssociateTransitGatewayRouteTableResult](#associatetransitgatewayroutetableresult)

### AssociateTransitGatewayRouteTable



```js
amazonaws_ec2.AssociateTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": null,
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [AssociateTransitGatewayRouteTableResult](#associatetransitgatewayroutetableresult)

### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * AmazonProvidedIpv6CidrBlock `boolean`
  * CidrBlock `string`
  * VpcId **required** `string`
  * Ipv6CidrBlockNetworkBorderGroup `string`
  * Ipv6Pool `string`
  * Ipv6CidrBlock `string`

#### Output
* output [AssociateVpcCidrBlockResult](#associatevpccidrblockresult)

### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * AmazonProvidedIpv6CidrBlock
  * CidrBlock
  * Ipv6CidrBlock
  * Ipv6CidrBlockNetworkBorderGroup
  * Ipv6Pool
  * VpcId **required**

#### Output
* output [AssociateVpcCidrBlockResult](#associatevpccidrblockresult)

### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({
  "SecurityGroupId": [],
  "InstanceId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * SecurityGroupId **required** `array`
  * InstanceId **required** `string`
  * VpcId **required** `string`

#### Output
* output [AttachClassicLinkVpcResult](#attachclassiclinkvpcresult)

### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({
  "Groups": null,
  "InstanceId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Groups **required**
    * items
  * InstanceId **required**
  * VpcId **required**

#### Output
* output [AttachClassicLinkVpcResult](#attachclassiclinkvpcresult)

### AttachInternetGateway



```js
amazonaws_ec2.AttachInternetGateway({
  "InternetGatewayId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InternetGatewayId **required** `string`
  * VpcId **required** `string`

#### Output
*Output schema unknown*

### AttachInternetGateway



```js
amazonaws_ec2.AttachInternetGateway({
  "InternetGatewayId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InternetGatewayId **required**
  * VpcId **required**

#### Output
*Output schema unknown*

### AttachNetworkInterface



```js
amazonaws_ec2.AttachNetworkInterface({
  "DeviceIndex": 0,
  "InstanceId": "",
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * DeviceIndex **required** `integer`
  * DryRun `boolean`
  * InstanceId **required** `string`
  * NetworkInterfaceId **required** `string`
  * NetworkCardIndex `integer`

#### Output
* output [AttachNetworkInterfaceResult](#attachnetworkinterfaceresult)

### AttachNetworkInterface



```js
amazonaws_ec2.AttachNetworkInterface({
  "DeviceIndex": null,
  "InstanceId": null,
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * DeviceIndex **required**
  * DryRun
  * InstanceId **required**
  * NetworkCardIndex
  * NetworkInterfaceId **required**

#### Output
* output [AttachNetworkInterfaceResult](#attachnetworkinterfaceresult)

### AttachVolume



```js
amazonaws_ec2.AttachVolume({
  "Device": "",
  "InstanceId": "",
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * Device **required** `string`
  * InstanceId **required** `string`
  * VolumeId **required** `string`
  * DryRun `boolean`

#### Output
* output [VolumeAttachment](#volumeattachment)

### AttachVolume



```js
amazonaws_ec2.AttachVolume({
  "Device": null,
  "InstanceId": null,
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * Device **required**
  * DryRun
  * InstanceId **required**
  * VolumeId **required**

#### Output
* output [VolumeAttachment](#volumeattachment)

### AttachVpnGateway



```js
amazonaws_ec2.AttachVpnGateway({
  "VpcId": "",
  "VpnGatewayId": ""
}, context)
```

#### Input
* input `object`
  * VpcId **required** `string`
  * VpnGatewayId **required** `string`
  * DryRun `boolean`

#### Output
* output [AttachVpnGatewayResult](#attachvpngatewayresult)

### AttachVpnGateway



```js
amazonaws_ec2.AttachVpnGateway({
  "VpcId": null,
  "VpnGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcId **required**
  * VpnGatewayId **required**

#### Output
* output [AttachVpnGatewayResult](#attachvpngatewayresult)

### AuthorizeClientVpnIngress



```js
amazonaws_ec2.AuthorizeClientVpnIngress({
  "ClientVpnEndpointId": "",
  "TargetNetworkCidr": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * TargetNetworkCidr **required** `string`
  * AccessGroupId `string`
  * AuthorizeAllGroups `boolean`
  * Description `string`
  * ClientToken `string`
  * DryRun `boolean`

#### Output
* output [AuthorizeClientVpnIngressResult](#authorizeclientvpningressresult)

### AuthorizeClientVpnIngress



```js
amazonaws_ec2.AuthorizeClientVpnIngress({
  "ClientVpnEndpointId": null,
  "TargetNetworkCidr": null
}, context)
```

#### Input
* input `object`
  * AccessGroupId
  * AuthorizeAllGroups
  * ClientToken
  * ClientVpnEndpointId **required**
  * Description
  * DryRun
  * TargetNetworkCidr **required**

#### Output
* output [AuthorizeClientVpnIngressResult](#authorizeclientvpningressresult)

### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupId **required** `string`
  * IpPermissions `array`
  * CidrIp `string`
  * FromPort `integer`
  * IpProtocol `string`
  * ToPort `integer`
  * SourceSecurityGroupName `string`
  * SourceSecurityGroupOwnerId `string`

#### Output
*Output schema unknown*

### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId **required**
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

#### Output
*Output schema unknown*

### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp `string`
  * FromPort `integer`
  * GroupId `string`
  * GroupName `string`
  * IpPermissions `array`
  * IpProtocol `string`
  * SourceSecurityGroupName `string`
  * SourceSecurityGroupOwnerId `string`
  * ToPort `integer`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId
  * GroupName
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

#### Output
*Output schema unknown*

### BundleInstance



```js
amazonaws_ec2.BundleInstance({
  "InstanceId": "",
  "Storage": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * Storage **required** `object`
  * DryRun `boolean`

#### Output
* output [BundleInstanceResult](#bundleinstanceresult)

### BundleInstance



```js
amazonaws_ec2.BundleInstance({
  "InstanceId": null,
  "Storage": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**
  * Storage **required**
    * S3
      * AWSAccessKeyId
      * Bucket
      * Prefix
      * UploadPolicy
      * UploadPolicySignature

#### Output
* output [BundleInstanceResult](#bundleinstanceresult)

### CancelBundleTask



```js
amazonaws_ec2.CancelBundleTask({
  "BundleId": ""
}, context)
```

#### Input
* input `object`
  * BundleId **required** `string`
  * DryRun `boolean`

#### Output
* output [CancelBundleTaskResult](#cancelbundletaskresult)

### CancelBundleTask



```js
amazonaws_ec2.CancelBundleTask({
  "BundleId": null
}, context)
```

#### Input
* input `object`
  * BundleId **required**
  * DryRun

#### Output
* output [CancelBundleTaskResult](#cancelbundletaskresult)

### CancelCapacityReservation



```js
amazonaws_ec2.CancelCapacityReservation({
  "CapacityReservationId": ""
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required** `string`
  * DryRun `boolean`

#### Output
* output [CancelCapacityReservationResult](#cancelcapacityreservationresult)

### CancelCapacityReservation



```js
amazonaws_ec2.CancelCapacityReservation({
  "CapacityReservationId": null
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required**
  * DryRun

#### Output
* output [CancelCapacityReservationResult](#cancelcapacityreservationresult)

### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({
  "ConversionTaskId": ""
}, context)
```

#### Input
* input `object`
  * ConversionTaskId **required** `string`
  * DryRun `boolean`
  * ReasonMessage `string`

#### Output
*Output schema unknown*

### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({
  "ConversionTaskId": null
}, context)
```

#### Input
* input `object`
  * ConversionTaskId **required**
  * DryRun
  * ReasonMessage

#### Output
*Output schema unknown*

### CancelExportTask



```js
amazonaws_ec2.CancelExportTask({
  "ExportTaskId": ""
}, context)
```

#### Input
* input `object`
  * ExportTaskId **required** `string`

#### Output
*Output schema unknown*

### CancelExportTask



```js
amazonaws_ec2.CancelExportTask({
  "ExportTaskId": null
}, context)
```

#### Input
* input `object`
  * ExportTaskId **required**

#### Output
*Output schema unknown*

### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```

#### Input
* input `object`
  * CancelReason `string`
  * DryRun `boolean`
  * ImportTaskId `string`

#### Output
* output [CancelImportTaskResult](#cancelimporttaskresult)

### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```

#### Input
* input `object`
  * CancelReason
  * DryRun
  * ImportTaskId

#### Output
* output [CancelImportTaskResult](#cancelimporttaskresult)

### CancelReservedInstancesListing



```js
amazonaws_ec2.CancelReservedInstancesListing({
  "ReservedInstancesListingId": ""
}, context)
```

#### Input
* input `object`
  * ReservedInstancesListingId **required** `string`

#### Output
* output [CancelReservedInstancesListingResult](#cancelreservedinstanceslistingresult)

### CancelReservedInstancesListing



```js
amazonaws_ec2.CancelReservedInstancesListing({
  "ReservedInstancesListingId": null
}, context)
```

#### Input
* input `object`
  * ReservedInstancesListingId **required**

#### Output
* output [CancelReservedInstancesListingResult](#cancelreservedinstanceslistingresult)

### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({
  "SpotFleetRequestId": [],
  "TerminateInstances": true
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * SpotFleetRequestId **required** `array`
  * TerminateInstances **required** `boolean`

#### Output
* output [CancelSpotFleetRequestsResponse](#cancelspotfleetrequestsresponse)

### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({
  "SpotFleetRequestIds": null,
  "TerminateInstances": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * SpotFleetRequestIds **required**
    * items
  * TerminateInstances **required**

#### Output
* output [CancelSpotFleetRequestsResponse](#cancelspotfleetrequestsresponse)

### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({
  "SpotInstanceRequestId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * SpotInstanceRequestId **required** `array`

#### Output
* output [CancelSpotInstanceRequestsResult](#cancelspotinstancerequestsresult)

### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({
  "SpotInstanceRequestIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * SpotInstanceRequestIds **required**
    * items

#### Output
* output [CancelSpotInstanceRequestsResult](#cancelspotinstancerequestsresult)

### ConfirmProductInstance



```js
amazonaws_ec2.ConfirmProductInstance({
  "InstanceId": "",
  "ProductCode": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * ProductCode **required** `string`
  * DryRun `boolean`

#### Output
* output [ConfirmProductInstanceResult](#confirmproductinstanceresult)

### ConfirmProductInstance



```js
amazonaws_ec2.ConfirmProductInstance({
  "InstanceId": null,
  "ProductCode": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**
  * ProductCode **required**

#### Output
* output [ConfirmProductInstanceResult](#confirmproductinstanceresult)

### CopyFpgaImage



```js
amazonaws_ec2.CopyFpgaImage({
  "SourceFpgaImageId": "",
  "SourceRegion": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * SourceFpgaImageId **required** `string`
  * Description `string`
  * Name `string`
  * SourceRegion **required** `string`
  * ClientToken `string`

#### Output
* output [CopyFpgaImageResult](#copyfpgaimageresult)

### CopyFpgaImage



```js
amazonaws_ec2.CopyFpgaImage({
  "SourceFpgaImageId": null,
  "SourceRegion": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * Name
  * SourceFpgaImageId **required**
  * SourceRegion **required**

#### Output
* output [CopyFpgaImageResult](#copyfpgaimageresult)

### CopyImage



```js
amazonaws_ec2.CopyImage({
  "Name": "",
  "SourceImageId": "",
  "SourceRegion": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * Description `string`
  * Encrypted `boolean`
  * KmsKeyId `string`
  * Name **required** `string`
  * SourceImageId **required** `string`
  * SourceRegion **required** `string`
  * DryRun `boolean`

#### Output
* output [CopyImageResult](#copyimageresult)

### CopyImage



```js
amazonaws_ec2.CopyImage({
  "Name": null,
  "SourceImageId": null,
  "SourceRegion": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * Encrypted
  * KmsKeyId
  * Name **required**
  * SourceImageId **required**
  * SourceRegion **required**

#### Output
* output [CopyImageResult](#copyimageresult)

### CopySnapshot



```js
amazonaws_ec2.CopySnapshot({
  "SourceRegion": "",
  "SourceSnapshotId": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * DestinationRegion `string`
  * Encrypted `boolean`
  * KmsKeyId `string`
  * PresignedUrl `string`
  * SourceRegion **required** `string`
  * SourceSnapshotId **required** `string`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CopySnapshot



```js
amazonaws_ec2.CopySnapshot({
  "SourceRegion": null,
  "SourceSnapshotId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DestinationRegion
  * DryRun
  * Encrypted
  * KmsKeyId
  * PresignedUrl
  * SourceRegion **required**
  * SourceSnapshotId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CreateCapacityReservation



```js
amazonaws_ec2.CreateCapacityReservation({
  "InstanceType": "",
  "InstancePlatform": "",
  "InstanceCount": 0
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * InstanceType **required** `string`
  * InstancePlatform **required** `string`
  * AvailabilityZone `string`
  * AvailabilityZoneId `string`
  * Tenancy `string`
  * InstanceCount **required** `integer`
  * EbsOptimized `boolean`
  * EphemeralStorage `boolean`
  * EndDate `string`
  * EndDateType `string`
  * InstanceMatchCriteria `string`
  * TagSpecifications `array`
  * DryRun `boolean`

#### Output
* output [CreateCapacityReservationResult](#createcapacityreservationresult)

### CreateCapacityReservation



```js
amazonaws_ec2.CreateCapacityReservation({
  "InstanceType": null,
  "InstancePlatform": null,
  "InstanceCount": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone
  * AvailabilityZoneId
  * ClientToken
  * DryRun
  * EbsOptimized
  * EndDate
  * EndDateType
  * EphemeralStorage
  * InstanceCount **required**
  * InstanceMatchCriteria
  * InstancePlatform **required**
  * InstanceType **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Tenancy

#### Output
* output [CreateCapacityReservationResult](#createcapacityreservationresult)

### CreateCarrierGateway



```js
amazonaws_ec2.CreateCarrierGateway({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * VpcId **required** `string`
  * TagSpecification `array`
  * DryRun `boolean`
  * ClientToken `string`

#### Output
* output [CreateCarrierGatewayResult](#createcarriergatewayresult)

### CreateCarrierGateway



```js
amazonaws_ec2.CreateCarrierGateway({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateCarrierGatewayResult](#createcarriergatewayresult)

### CreateClientVpnEndpoint



```js
amazonaws_ec2.CreateClientVpnEndpoint({
  "ClientCidrBlock": "",
  "ServerCertificateArn": "",
  "Authentication": [],
  "ConnectionLogOptions": {}
}, context)
```

#### Input
* input `object`
  * ClientCidrBlock **required** `string`
  * ServerCertificateArn **required** `string`
  * Authentication **required** `array`
  * ConnectionLogOptions **required** `object`
  * DnsServers `array`
  * TransportProtocol `string`
  * VpnPort `integer`
  * Description `string`
  * SplitTunnel `boolean`
  * DryRun `boolean`
  * ClientToken `string`
  * TagSpecification `array`
  * SecurityGroupId `array`
  * VpcId `string`
  * SelfServicePortal `string`
  * ClientConnectOptions `object`

#### Output
* output [CreateClientVpnEndpointResult](#createclientvpnendpointresult)

### CreateClientVpnEndpoint



```js
amazonaws_ec2.CreateClientVpnEndpoint({
  "ClientCidrBlock": null,
  "ServerCertificateArn": null,
  "AuthenticationOptions": null,
  "ConnectionLogOptions": null
}, context)
```

#### Input
* input `object`
  * AuthenticationOptions **required**
    * items [ClientVpnAuthenticationRequest](#clientvpnauthenticationrequest)
  * ClientCidrBlock **required**
  * ClientConnectOptions
    * Enabled
    * LambdaFunctionArn
  * ClientToken
  * ConnectionLogOptions **required**
    * CloudwatchLogGroup
    * CloudwatchLogStream
    * Enabled
  * Description
  * DnsServers
    * items
  * DryRun
  * SecurityGroupIds
    * items
  * SelfServicePortal
  * ServerCertificateArn **required**
  * SplitTunnel
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransportProtocol
  * VpcId
  * VpnPort

#### Output
* output [CreateClientVpnEndpointResult](#createclientvpnendpointresult)

### CreateClientVpnRoute



```js
amazonaws_ec2.CreateClientVpnRoute({
  "ClientVpnEndpointId": "",
  "DestinationCidrBlock": "",
  "TargetVpcSubnetId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * DestinationCidrBlock **required** `string`
  * TargetVpcSubnetId **required** `string`
  * Description `string`
  * ClientToken `string`
  * DryRun `boolean`

#### Output
* output [CreateClientVpnRouteResult](#createclientvpnrouteresult)

### CreateClientVpnRoute



```js
amazonaws_ec2.CreateClientVpnRoute({
  "ClientVpnEndpointId": null,
  "DestinationCidrBlock": null,
  "TargetVpcSubnetId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * ClientVpnEndpointId **required**
  * Description
  * DestinationCidrBlock **required**
  * DryRun
  * TargetVpcSubnetId **required**

#### Output
* output [CreateClientVpnRouteResult](#createclientvpnrouteresult)

### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({
  "BgpAsn": 0,
  "Type": ""
}, context)
```

#### Input
* input `object`
  * BgpAsn **required** `integer`
  * IpAddress `string`
  * CertificateArn `string`
  * Type **required** `string`
  * TagSpecification `array`
  * DeviceName `string`
  * DryRun `boolean`

#### Output
* output [CreateCustomerGatewayResult](#createcustomergatewayresult)

### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({
  "BgpAsn": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * BgpAsn **required**
  * CertificateArn
  * DeviceName
  * DryRun
  * PublicIp
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type **required**

#### Output
* output [CreateCustomerGatewayResult](#createcustomergatewayresult)

### CreateDefaultSubnet



```js
amazonaws_ec2.CreateDefaultSubnet({
  "AvailabilityZone": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** `string`
  * DryRun `boolean`

#### Output
* output [CreateDefaultSubnetResult](#createdefaultsubnetresult)

### CreateDefaultSubnet



```js
amazonaws_ec2.CreateDefaultSubnet({
  "AvailabilityZone": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required**
  * DryRun

#### Output
* output [CreateDefaultSubnetResult](#createdefaultsubnetresult)

### CreateDefaultVpc



```js
amazonaws_ec2.CreateDefaultVpc({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [CreateDefaultVpcResult](#createdefaultvpcresult)

### CreateDefaultVpc



```js
amazonaws_ec2.CreateDefaultVpc({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [CreateDefaultVpcResult](#createdefaultvpcresult)

### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({
  "DhcpConfiguration": []
}, context)
```

#### Input
* input `object`
  * DhcpConfiguration **required** `array`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateDhcpOptionsResult](#createdhcpoptionsresult)

### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({
  "DhcpConfigurations": null
}, context)
```

#### Input
* input `object`
  * DhcpConfigurations **required**
    * items
      * Key
      * Values
        * items
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateDhcpOptionsResult](#createdhcpoptionsresult)

### CreateEgressOnlyInternetGateway



```js
amazonaws_ec2.CreateEgressOnlyInternetGateway({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * DryRun `boolean`
  * VpcId **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateEgressOnlyInternetGatewayResult](#createegressonlyinternetgatewayresult)

### CreateEgressOnlyInternetGateway



```js
amazonaws_ec2.CreateEgressOnlyInternetGateway({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateEgressOnlyInternetGatewayResult](#createegressonlyinternetgatewayresult)

### CreateFleet



```js
amazonaws_ec2.CreateFleet({
  "LaunchTemplateConfigs": [],
  "TargetCapacitySpecification": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * SpotOptions `object`
  * OnDemandOptions `object`
  * ExcessCapacityTerminationPolicy `string`
  * LaunchTemplateConfigs **required** `array`
  * TargetCapacitySpecification **required** `object`
  * TerminateInstancesWithExpiration `boolean`
  * Type `string`
  * ValidFrom `string`
  * ValidUntil `string`
  * ReplaceUnhealthyInstances `boolean`
  * TagSpecification `array`

#### Output
* output [CreateFleetResult](#createfleetresult)

### CreateFleet



```js
amazonaws_ec2.CreateFleet({
  "LaunchTemplateConfigs": null,
  "TargetCapacitySpecification": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * ExcessCapacityTerminationPolicy
  * LaunchTemplateConfigs **required**
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
  * OnDemandOptions
    * AllocationStrategy
    * CapacityReservationOptions
      * UsageStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * ReplaceUnhealthyInstances
  * SpotOptions
    * AllocationStrategy
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * MaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TargetCapacitySpecification **required**
    * DefaultTargetCapacityType
    * OnDemandTargetCapacity
    * SpotTargetCapacity
    * TotalTargetCapacity **required**
  * TerminateInstancesWithExpiration
  * Type
  * ValidFrom
  * ValidUntil

#### Output
* output [CreateFleetResult](#createfleetresult)

### CreateFlowLogs



```js
amazonaws_ec2.CreateFlowLogs({
  "ResourceId": [],
  "ResourceType": "",
  "TrafficType": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * DeliverLogsPermissionArn `string`
  * LogGroupName `string`
  * ResourceId **required** `array`
  * ResourceType **required** `string`
  * TrafficType **required** `string`
  * LogDestinationType `string`
  * LogDestination `string`
  * LogFormat `string`
  * TagSpecification `array`
  * MaxAggregationInterval `integer`

#### Output
* output [CreateFlowLogsResult](#createflowlogsresult)

### CreateFlowLogs



```js
amazonaws_ec2.CreateFlowLogs({
  "ResourceIds": null,
  "ResourceType": null,
  "TrafficType": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DeliverLogsPermissionArn
  * DryRun
  * LogDestination
  * LogDestinationType
  * LogFormat
  * LogGroupName
  * MaxAggregationInterval
  * ResourceIds **required**
    * items
  * ResourceType **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TrafficType **required**

#### Output
* output [CreateFlowLogsResult](#createflowlogsresult)

### CreateFpgaImage



```js
amazonaws_ec2.CreateFpgaImage({
  "InputStorageLocation": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InputStorageLocation **required** `object`
  * LogsStorageLocation `object`
  * Description `string`
  * Name `string`
  * ClientToken `string`
  * TagSpecification `array`

#### Output
* output [CreateFpgaImageResult](#createfpgaimageresult)

### CreateFpgaImage



```js
amazonaws_ec2.CreateFpgaImage({
  "InputStorageLocation": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * InputStorageLocation **required**
    * Bucket
    * Key
  * LogsStorageLocation
    * Bucket
    * Key
  * Name
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateFpgaImageResult](#createfpgaimageresult)

### CreateImage



```js
amazonaws_ec2.CreateImage({
  "InstanceId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * BlockDeviceMapping `array`
  * Description `string`
  * DryRun `boolean`
  * InstanceId **required** `string`
  * Name **required** `string`
  * NoReboot `boolean`
  * TagSpecification `array`

#### Output
* output [CreateImageResult](#createimageresult)

### CreateImage



```js
amazonaws_ec2.CreateImage({
  "InstanceId": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * Description
  * DryRun
  * InstanceId **required**
  * Name **required**
  * NoReboot
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateImageResult](#createimageresult)

### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({
  "ExportToS3": {},
  "InstanceId": "",
  "TargetEnvironment": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * ExportToS3 **required** `object`
  * InstanceId **required** `string`
  * TargetEnvironment **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateInstanceExportTaskResult](#createinstanceexporttaskresult)

### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({
  "ExportToS3Task": null,
  "InstanceId": null,
  "TargetEnvironment": null
}, context)
```

#### Input
* input `object`
  * Description
  * ExportToS3Task **required**
    * ContainerFormat
    * DiskImageFormat
    * S3Bucket
    * S3Prefix
  * InstanceId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TargetEnvironment **required**

#### Output
* output [CreateInstanceExportTaskResult](#createinstanceexporttaskresult)

### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```

#### Input
* input `object`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateInternetGatewayResult](#createinternetgatewayresult)

### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```

#### Input
* input `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateInternetGatewayResult](#createinternetgatewayresult)

### CreateKeyPair



```js
amazonaws_ec2.CreateKeyPair({
  "KeyName": ""
}, context)
```

#### Input
* input `object`
  * KeyName **required** `string`
  * DryRun `boolean`
  * TagSpecification `array`

#### Output
* output [KeyPair](#keypair)

### CreateKeyPair



```js
amazonaws_ec2.CreateKeyPair({
  "KeyName": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * KeyName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [KeyPair](#keypair)

### CreateLaunchTemplate



```js
amazonaws_ec2.CreateLaunchTemplate({
  "LaunchTemplateName": "",
  "LaunchTemplateData": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * LaunchTemplateName **required** `string`
  * VersionDescription `string`
  * LaunchTemplateData **required** `object`
  * TagSpecification `array`

#### Output
* output [CreateLaunchTemplateResult](#createlaunchtemplateresult)

### CreateLaunchTemplate



```js
amazonaws_ec2.CreateLaunchTemplate({
  "LaunchTemplateName": null,
  "LaunchTemplateData": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * LaunchTemplateData **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits **required**
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type **required**
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type **required**
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
  * LaunchTemplateName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VersionDescription

#### Output
* output [CreateLaunchTemplateResult](#createlaunchtemplateresult)

### CreateLaunchTemplateVersion



```js
amazonaws_ec2.CreateLaunchTemplateVersion({
  "LaunchTemplateData": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * LaunchTemplateId `string`
  * LaunchTemplateName `string`
  * SourceVersion `string`
  * VersionDescription `string`
  * LaunchTemplateData **required** `object`

#### Output
* output [CreateLaunchTemplateVersionResult](#createlaunchtemplateversionresult)

### CreateLaunchTemplateVersion



```js
amazonaws_ec2.CreateLaunchTemplateVersion({
  "LaunchTemplateData": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * LaunchTemplateData **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits **required**
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type **required**
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type **required**
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
  * LaunchTemplateId
  * LaunchTemplateName
  * SourceVersion
  * VersionDescription

#### Output
* output [CreateLaunchTemplateVersionResult](#createlaunchtemplateversionresult)

### CreateLocalGatewayRoute



```js
amazonaws_ec2.CreateLocalGatewayRoute({
  "DestinationCidrBlock": "",
  "LocalGatewayRouteTableId": "",
  "LocalGatewayVirtualInterfaceGroupId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * LocalGatewayRouteTableId **required** `string`
  * LocalGatewayVirtualInterfaceGroupId **required** `string`
  * DryRun `boolean`

#### Output
* output [CreateLocalGatewayRouteResult](#createlocalgatewayrouteresult)

### CreateLocalGatewayRoute



```js
amazonaws_ec2.CreateLocalGatewayRoute({
  "DestinationCidrBlock": null,
  "LocalGatewayRouteTableId": null,
  "LocalGatewayVirtualInterfaceGroupId": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required**
  * DryRun
  * LocalGatewayRouteTableId **required**
  * LocalGatewayVirtualInterfaceGroupId **required**

#### Output
* output [CreateLocalGatewayRouteResult](#createlocalgatewayrouteresult)

### CreateLocalGatewayRouteTableVpcAssociation



```js
amazonaws_ec2.CreateLocalGatewayRouteTableVpcAssociation({
  "LocalGatewayRouteTableId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableId **required** `string`
  * VpcId **required** `string`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateLocalGatewayRouteTableVpcAssociationResult](#createlocalgatewayroutetablevpcassociationresult)

### CreateLocalGatewayRouteTableVpcAssociation



```js
amazonaws_ec2.CreateLocalGatewayRouteTableVpcAssociation({
  "LocalGatewayRouteTableId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * LocalGatewayRouteTableId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateLocalGatewayRouteTableVpcAssociationResult](#createlocalgatewayroutetablevpcassociationresult)

### CreateManagedPrefixList



```js
amazonaws_ec2.CreateManagedPrefixList({
  "PrefixListName": "",
  "MaxEntries": 0,
  "AddressFamily": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListName **required** `string`
  * Entry `array`
  * MaxEntries **required** `integer`
  * TagSpecification `array`
  * AddressFamily **required** `string`
  * ClientToken `string`

#### Output
* output [CreateManagedPrefixListResult](#createmanagedprefixlistresult)

### CreateManagedPrefixList



```js
amazonaws_ec2.CreateManagedPrefixList({
  "PrefixListName": null,
  "MaxEntries": null,
  "AddressFamily": null
}, context)
```

#### Input
* input `object`
  * AddressFamily **required**
  * ClientToken
  * DryRun
  * Entries
    * items [AddPrefixListEntry](#addprefixlistentry)
  * MaxEntries **required**
  * PrefixListName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateManagedPrefixListResult](#createmanagedprefixlistresult)

### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({
  "AllocationId": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * AllocationId **required** `string`
  * ClientToken `string`
  * DryRun `boolean`
  * SubnetId **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateNatGatewayResult](#createnatgatewayresult)

### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({
  "AllocationId": null,
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * AllocationId **required**
  * ClientToken
  * DryRun
  * SubnetId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateNatGatewayResult](#createnatgatewayresult)

### CreateNetworkAcl



```js
amazonaws_ec2.CreateNetworkAcl({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcId **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateNetworkAclResult](#createnetworkaclresult)

### CreateNetworkAcl



```js
amazonaws_ec2.CreateNetworkAcl({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateNetworkAclResult](#createnetworkaclresult)

### CreateNetworkAclEntry



```js
amazonaws_ec2.CreateNetworkAclEntry({
  "Egress": true,
  "NetworkAclId": "",
  "Protocol": "",
  "RuleAction": "",
  "RuleNumber": 0
}, context)
```

#### Input
* input `object`
  * CidrBlock `string`
  * DryRun `boolean`
  * Egress **required** `boolean`
  * Icmp `object`
  * Ipv6CidrBlock `string`
  * NetworkAclId **required** `string`
  * PortRange `object`
  * Protocol **required** `string`
  * RuleAction **required** `string`
  * RuleNumber **required** `integer`

#### Output
*Output schema unknown*

### CreateNetworkAclEntry



```js
amazonaws_ec2.CreateNetworkAclEntry({
  "Egress": null,
  "NetworkAclId": null,
  "Protocol": null,
  "RuleAction": null,
  "RuleNumber": null
}, context)
```

#### Input
* input `object`
  * CidrBlock
  * DryRun
  * Egress **required**
  * IcmpTypeCode
    * Code
    * Type
  * Ipv6CidrBlock
  * NetworkAclId **required**
  * PortRange
    * From
    * To
  * Protocol **required**
  * RuleAction **required**
  * RuleNumber **required**

#### Output
*Output schema unknown*

### CreateNetworkInsightsPath



```js
amazonaws_ec2.CreateNetworkInsightsPath({
  "Source": "",
  "Destination": "",
  "Protocol": "",
  "ClientToken": ""
}, context)
```

#### Input
* input `object`
  * SourceIp `string`
  * DestinationIp `string`
  * Source **required** `string`
  * Destination **required** `string`
  * Protocol **required** `string`
  * DestinationPort `integer`
  * TagSpecification `array`
  * DryRun `boolean`
  * ClientToken **required** `string`

#### Output
* output [CreateNetworkInsightsPathResult](#createnetworkinsightspathresult)

### CreateNetworkInsightsPath



```js
amazonaws_ec2.CreateNetworkInsightsPath({
  "Source": null,
  "Destination": null,
  "Protocol": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * Destination **required**
  * DestinationIp
  * DestinationPort
  * DryRun
  * Protocol **required**
  * Source **required**
  * SourceIp
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateNetworkInsightsPathResult](#createnetworkinsightspathresult)

### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * DryRun `boolean`
  * SecurityGroupId `array`
  * Ipv6AddressCount `integer`
  * Ipv6Addresses `array`
  * PrivateIpAddress `string`
  * PrivateIpAddresses `array`
  * SecondaryPrivateIpAddressCount `integer`
  * InterfaceType `string`
  * SubnetId **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateNetworkInterfaceResult](#createnetworkinterfaceresult)

### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * Groups
    * items
  * InterfaceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateNetworkInterfaceResult](#createnetworkinterfaceresult)

### CreateNetworkInterfacePermission



```js
amazonaws_ec2.CreateNetworkInterfacePermission({
  "NetworkInterfaceId": "",
  "Permission": ""
}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId **required** `string`
  * AwsAccountId `string`
  * AwsService `string`
  * Permission **required** `string`
  * DryRun `boolean`

#### Output
* output [CreateNetworkInterfacePermissionResult](#createnetworkinterfacepermissionresult)

### CreateNetworkInterfacePermission



```js
amazonaws_ec2.CreateNetworkInterfacePermission({
  "NetworkInterfaceId": null,
  "Permission": null
}, context)
```

#### Input
* input `object`
  * AwsAccountId
  * AwsService
  * DryRun
  * NetworkInterfaceId **required**
  * Permission **required**

#### Output
* output [CreateNetworkInterfacePermissionResult](#createnetworkinterfacepermissionresult)

### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupName `string`
  * Strategy `string`
  * PartitionCount `integer`
  * TagSpecification `array`

#### Output
* output [CreatePlacementGroupResult](#createplacementgroupresult)

### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupName
  * PartitionCount
  * Strategy
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreatePlacementGroupResult](#createplacementgroupresult)

### CreateReservedInstancesListing



```js
amazonaws_ec2.CreateReservedInstancesListing({
  "ClientToken": "",
  "InstanceCount": 0,
  "PriceSchedules": [],
  "ReservedInstancesId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken **required** `string`
  * InstanceCount **required** `integer`
  * PriceSchedules **required** `array`
  * ReservedInstancesId **required** `string`

#### Output
* output [CreateReservedInstancesListingResult](#createreservedinstanceslistingresult)

### CreateReservedInstancesListing



```js
amazonaws_ec2.CreateReservedInstancesListing({
  "ClientToken": null,
  "InstanceCount": null,
  "PriceSchedules": null,
  "ReservedInstancesId": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * InstanceCount **required**
  * PriceSchedules **required**
    * items
      * CurrencyCode
      * Price
      * Term
  * ReservedInstancesId **required**

#### Output
* output [CreateReservedInstancesListingResult](#createreservedinstanceslistingresult)

### CreateRoute



```js
amazonaws_ec2.CreateRoute({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock `string`
  * DestinationIpv6CidrBlock `string`
  * DestinationPrefixListId `string`
  * DryRun `boolean`
  * VpcEndpointId `string`
  * EgressOnlyInternetGatewayId `string`
  * GatewayId `string`
  * InstanceId `string`
  * NatGatewayId `string`
  * TransitGatewayId `string`
  * LocalGatewayId `string`
  * CarrierGatewayId `string`
  * NetworkInterfaceId `string`
  * RouteTableId **required** `string`
  * VpcPeeringConnectionId `string`

#### Output
* output [CreateRouteResult](#createrouteresult)

### CreateRoute



```js
amazonaws_ec2.CreateRoute({
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * CarrierGatewayId
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * LocalGatewayId
  * NatGatewayId
  * NetworkInterfaceId
  * RouteTableId **required**
  * TransitGatewayId
  * VpcEndpointId
  * VpcPeeringConnectionId

#### Output
* output [CreateRouteResult](#createrouteresult)

### CreateRouteTable



```js
amazonaws_ec2.CreateRouteTable({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcId **required** `string`
  * TagSpecification `array`

#### Output
* output [CreateRouteTableResult](#createroutetableresult)

### CreateRouteTable



```js
amazonaws_ec2.CreateRouteTable({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateRouteTableResult](#createroutetableresult)

### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({
  "GroupDescription": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupDescription **required** `string`
  * GroupName **required** `string`
  * VpcId `string`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateSecurityGroupResult](#createsecuritygroupresult)

### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({
  "Description": null,
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * DryRun
  * GroupName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId

#### Output
* output [CreateSecurityGroupResult](#createsecuritygroupresult)

### CreateSnapshot



```js
amazonaws_ec2.CreateSnapshot({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * VolumeId **required** `string`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [Snapshot](#snapshot)

### CreateSnapshot



```js
amazonaws_ec2.CreateSnapshot({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VolumeId **required**

#### Output
* output [Snapshot](#snapshot)

### CreateSnapshots



```js
amazonaws_ec2.CreateSnapshots({
  "InstanceSpecification": {}
}, context)
```

#### Input
* input `object`
  * Description `string`
  * InstanceSpecification **required** `object`
  * TagSpecification `array`
  * DryRun `boolean`
  * CopyTagsFromSource `string`

#### Output
* output [CreateSnapshotsResult](#createsnapshotsresult)

### CreateSnapshots



```js
amazonaws_ec2.CreateSnapshots({
  "InstanceSpecification": null
}, context)
```

#### Input
* input `object`
  * CopyTagsFromSource
  * Description
  * DryRun
  * InstanceSpecification **required**
    * ExcludeBootVolume
    * InstanceId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateSnapshotsResult](#createsnapshotsresult)

### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** `string`
  * DryRun `boolean`
  * Prefix `string`

#### Output
* output [CreateSpotDatafeedSubscriptionResult](#createspotdatafeedsubscriptionresult)

### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({
  "Bucket": null
}, context)
```

#### Input
* input `object`
  * Bucket **required**
  * DryRun
  * Prefix

#### Output
* output [CreateSpotDatafeedSubscriptionResult](#createspotdatafeedsubscriptionresult)

### CreateSubnet



```js
amazonaws_ec2.CreateSubnet({
  "CidrBlock": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * TagSpecification `array`
  * AvailabilityZone `string`
  * AvailabilityZoneId `string`
  * CidrBlock **required** `string`
  * Ipv6CidrBlock `string`
  * OutpostArn `string`
  * VpcId **required** `string`
  * DryRun `boolean`

#### Output
* output [CreateSubnetResult](#createsubnetresult)

### CreateSubnet



```js
amazonaws_ec2.CreateSubnet({
  "CidrBlock": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone
  * AvailabilityZoneId
  * CidrBlock **required**
  * DryRun
  * Ipv6CidrBlock
  * OutpostArn
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

#### Output
* output [CreateSubnetResult](#createsubnetresult)

### CreateTags



```js
amazonaws_ec2.CreateTags({
  "ResourceId": [],
  "Tag": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ResourceId **required** `array`
  * Tag **required** `array`

#### Output
*Output schema unknown*

### CreateTags



```js
amazonaws_ec2.CreateTags({
  "Resources": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Resources **required**
    * items [TaggableResourceId](#taggableresourceid)
  * Tags **required**
    * items
      * Key
      * Value

#### Output
*Output schema unknown*

### CreateTrafficMirrorFilter



```js
amazonaws_ec2.CreateTrafficMirrorFilter({}, context)
```

#### Input
* input `object`
  * Description `string`
  * TagSpecification `array`
  * DryRun `boolean`
  * ClientToken `string`

#### Output
* output [CreateTrafficMirrorFilterResult](#createtrafficmirrorfilterresult)

### CreateTrafficMirrorFilter



```js
amazonaws_ec2.CreateTrafficMirrorFilter({}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateTrafficMirrorFilterResult](#createtrafficmirrorfilterresult)

### CreateTrafficMirrorFilterRule



```js
amazonaws_ec2.CreateTrafficMirrorFilterRule({
  "TrafficMirrorFilterId": "",
  "TrafficDirection": "",
  "RuleNumber": 0,
  "RuleAction": "",
  "DestinationCidrBlock": "",
  "SourceCidrBlock": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterId **required** `string`
  * TrafficDirection **required** `string`
  * RuleNumber **required** `integer`
  * RuleAction **required** `string`
  * DestinationPortRange `object`
  * SourcePortRange `object`
  * Protocol `integer`
  * DestinationCidrBlock **required** `string`
  * SourceCidrBlock **required** `string`
  * Description `string`
  * DryRun `boolean`
  * ClientToken `string`

#### Output
* output [CreateTrafficMirrorFilterRuleResult](#createtrafficmirrorfilterruleresult)

### CreateTrafficMirrorFilterRule



```js
amazonaws_ec2.CreateTrafficMirrorFilterRule({
  "TrafficMirrorFilterId": null,
  "TrafficDirection": null,
  "RuleNumber": null,
  "RuleAction": null,
  "DestinationCidrBlock": null,
  "SourceCidrBlock": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DestinationCidrBlock **required**
  * DestinationPortRange
    * FromPort
    * ToPort
  * DryRun
  * Protocol
  * RuleAction **required**
  * RuleNumber **required**
  * SourceCidrBlock **required**
  * SourcePortRange
    * FromPort
    * ToPort
  * TrafficDirection **required**
  * TrafficMirrorFilterId **required**

#### Output
* output [CreateTrafficMirrorFilterRuleResult](#createtrafficmirrorfilterruleresult)

### CreateTrafficMirrorSession



```js
amazonaws_ec2.CreateTrafficMirrorSession({
  "NetworkInterfaceId": "",
  "TrafficMirrorTargetId": "",
  "TrafficMirrorFilterId": "",
  "SessionNumber": 0
}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId **required** `string`
  * TrafficMirrorTargetId **required** `string`
  * TrafficMirrorFilterId **required** `string`
  * PacketLength `integer`
  * SessionNumber **required** `integer`
  * VirtualNetworkId `integer`
  * Description `string`
  * TagSpecification `array`
  * DryRun `boolean`
  * ClientToken `string`

#### Output
* output [CreateTrafficMirrorSessionResult](#createtrafficmirrorsessionresult)

### CreateTrafficMirrorSession



```js
amazonaws_ec2.CreateTrafficMirrorSession({
  "NetworkInterfaceId": null,
  "TrafficMirrorTargetId": null,
  "TrafficMirrorFilterId": null,
  "SessionNumber": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * NetworkInterfaceId **required**
  * PacketLength
  * SessionNumber **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TrafficMirrorFilterId **required**
  * TrafficMirrorTargetId **required**
  * VirtualNetworkId

#### Output
* output [CreateTrafficMirrorSessionResult](#createtrafficmirrorsessionresult)

### CreateTrafficMirrorTarget



```js
amazonaws_ec2.CreateTrafficMirrorTarget({}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId `string`
  * NetworkLoadBalancerArn `string`
  * Description `string`
  * TagSpecification `array`
  * DryRun `boolean`
  * ClientToken `string`

#### Output
* output [CreateTrafficMirrorTargetResult](#createtrafficmirrortargetresult)

### CreateTrafficMirrorTarget



```js
amazonaws_ec2.CreateTrafficMirrorTarget({}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DryRun
  * NetworkInterfaceId
  * NetworkLoadBalancerArn
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateTrafficMirrorTargetResult](#createtrafficmirrortargetresult)

### CreateTransitGateway



```js
amazonaws_ec2.CreateTransitGateway({}, context)
```

#### Input
* input `object`
  * Description `string`
  * Options `object`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayResult](#createtransitgatewayresult)

### CreateTransitGateway



```js
amazonaws_ec2.CreateTransitGateway({}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * Options
    * AmazonSideAsn
    * AutoAcceptSharedAttachments
    * DefaultRouteTableAssociation
    * DefaultRouteTablePropagation
    * DnsSupport
    * MulticastSupport
    * TransitGatewayCidrBlocks
      * items
    * VpnEcmpSupport
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateTransitGatewayResult](#createtransitgatewayresult)

### CreateTransitGatewayConnect



```js
amazonaws_ec2.CreateTransitGatewayConnect({
  "TransportTransitGatewayAttachmentId": "",
  "Options": {}
}, context)
```

#### Input
* input `object`
  * TransportTransitGatewayAttachmentId **required** `string`
  * Options **required** `object`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayConnectResult](#createtransitgatewayconnectresult)

### CreateTransitGatewayConnect



```js
amazonaws_ec2.CreateTransitGatewayConnect({
  "TransportTransitGatewayAttachmentId": null,
  "Options": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Options **required**
    * Protocol **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransportTransitGatewayAttachmentId **required**

#### Output
* output [CreateTransitGatewayConnectResult](#createtransitgatewayconnectresult)

### CreateTransitGatewayConnectPeer



```js
amazonaws_ec2.CreateTransitGatewayConnectPeer({
  "TransitGatewayAttachmentId": "",
  "PeerAddress": "",
  "InsideCidrBlocks": []
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * TransitGatewayAddress `string`
  * PeerAddress **required** `string`
  * BgpOptions `object`
  * InsideCidrBlocks **required** `array`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayConnectPeerResult](#createtransitgatewayconnectpeerresult)

### CreateTransitGatewayConnectPeer



```js
amazonaws_ec2.CreateTransitGatewayConnectPeer({
  "TransitGatewayAttachmentId": null,
  "PeerAddress": null,
  "InsideCidrBlocks": null
}, context)
```

#### Input
* input `object`
  * BgpOptions
    * PeerAsn
  * DryRun
  * InsideCidrBlocks **required**
    * items
  * PeerAddress **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayAddress
  * TransitGatewayAttachmentId **required**

#### Output
* output [CreateTransitGatewayConnectPeerResult](#createtransitgatewayconnectpeerresult)

### CreateTransitGatewayMulticastDomain



```js
amazonaws_ec2.CreateTransitGatewayMulticastDomain({
  "TransitGatewayId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * Options `object`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayMulticastDomainResult](#createtransitgatewaymulticastdomainresult)

### CreateTransitGatewayMulticastDomain



```js
amazonaws_ec2.CreateTransitGatewayMulticastDomain({
  "TransitGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Options
    * AutoAcceptSharedAssociations
    * Igmpv2Support
    * StaticSourcesSupport
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

#### Output
* output [CreateTransitGatewayMulticastDomainResult](#createtransitgatewaymulticastdomainresult)

### CreateTransitGatewayPeeringAttachment



```js
amazonaws_ec2.CreateTransitGatewayPeeringAttachment({
  "TransitGatewayId": "",
  "PeerTransitGatewayId": "",
  "PeerAccountId": "",
  "PeerRegion": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * PeerTransitGatewayId **required** `string`
  * PeerAccountId **required** `string`
  * PeerRegion **required** `string`
  * TagSpecification `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayPeeringAttachmentResult](#createtransitgatewaypeeringattachmentresult)

### CreateTransitGatewayPeeringAttachment



```js
amazonaws_ec2.CreateTransitGatewayPeeringAttachment({
  "TransitGatewayId": null,
  "PeerTransitGatewayId": null,
  "PeerAccountId": null,
  "PeerRegion": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * PeerAccountId **required**
  * PeerRegion **required**
  * PeerTransitGatewayId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

#### Output
* output [CreateTransitGatewayPeeringAttachmentResult](#createtransitgatewaypeeringattachmentresult)

### CreateTransitGatewayPrefixListReference



```js
amazonaws_ec2.CreateTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": "",
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * PrefixListId **required** `string`
  * TransitGatewayAttachmentId `string`
  * Blackhole `boolean`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayPrefixListReferenceResult](#createtransitgatewayprefixlistreferenceresult)

### CreateTransitGatewayPrefixListReference



```js
amazonaws_ec2.CreateTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": null,
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * Blackhole
  * DryRun
  * PrefixListId **required**
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

#### Output
* output [CreateTransitGatewayPrefixListReferenceResult](#createtransitgatewayprefixlistreferenceresult)

### CreateTransitGatewayRoute



```js
amazonaws_ec2.CreateTransitGatewayRoute({
  "DestinationCidrBlock": "",
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId `string`
  * Blackhole `boolean`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayRouteResult](#createtransitgatewayrouteresult)

### CreateTransitGatewayRoute



```js
amazonaws_ec2.CreateTransitGatewayRoute({
  "DestinationCidrBlock": null,
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * Blackhole
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

#### Output
* output [CreateTransitGatewayRouteResult](#createtransitgatewayrouteresult)

### CreateTransitGatewayRouteTable



```js
amazonaws_ec2.CreateTransitGatewayRouteTable({
  "TransitGatewayId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * TagSpecifications `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayRouteTableResult](#createtransitgatewayroutetableresult)

### CreateTransitGatewayRouteTable



```js
amazonaws_ec2.CreateTransitGatewayRouteTable({
  "TransitGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

#### Output
* output [CreateTransitGatewayRouteTableResult](#createtransitgatewayroutetableresult)

### CreateTransitGatewayVpcAttachment



```js
amazonaws_ec2.CreateTransitGatewayVpcAttachment({
  "TransitGatewayId": "",
  "VpcId": "",
  "SubnetIds": []
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * VpcId **required** `string`
  * SubnetIds **required** `array`
  * Options `object`
  * TagSpecifications `array`
  * DryRun `boolean`

#### Output
* output [CreateTransitGatewayVpcAttachmentResult](#createtransitgatewayvpcattachmentresult)

### CreateTransitGatewayVpcAttachment



```js
amazonaws_ec2.CreateTransitGatewayVpcAttachment({
  "TransitGatewayId": null,
  "VpcId": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Options
    * ApplianceModeSupport
    * DnsSupport
    * Ipv6Support
  * SubnetIds **required**
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**
  * VpcId **required**

#### Output
* output [CreateTransitGatewayVpcAttachmentResult](#createtransitgatewayvpcattachmentresult)

### CreateVolume



```js
amazonaws_ec2.CreateVolume({
  "AvailabilityZone": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** `string`
  * Encrypted `boolean`
  * Iops `integer`
  * KmsKeyId `string`
  * OutpostArn `string`
  * Size `integer`
  * SnapshotId `string`
  * VolumeType `string`
  * DryRun `boolean`
  * TagSpecification `array`
  * MultiAttachEnabled `boolean`
  * Throughput `integer`

#### Output
* output [Volume](#volume)

### CreateVolume



```js
amazonaws_ec2.CreateVolume({
  "AvailabilityZone": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required**
  * DryRun
  * Encrypted
  * Iops
  * KmsKeyId
  * MultiAttachEnabled
  * OutpostArn
  * Size
  * SnapshotId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Throughput
  * VolumeType

#### Output
* output [Volume](#volume)

### CreateVpc



```js
amazonaws_ec2.CreateVpc({
  "CidrBlock": ""
}, context)
```

#### Input
* input `object`
  * CidrBlock **required** `string`
  * AmazonProvidedIpv6CidrBlock `boolean`
  * Ipv6Pool `string`
  * Ipv6CidrBlock `string`
  * DryRun `boolean`
  * InstanceTenancy `string`
  * Ipv6CidrBlockNetworkBorderGroup `string`
  * TagSpecification `array`

#### Output
* output [CreateVpcResult](#createvpcresult)

### CreateVpc



```js
amazonaws_ec2.CreateVpc({
  "CidrBlock": null
}, context)
```

#### Input
* input `object`
  * AmazonProvidedIpv6CidrBlock
  * CidrBlock **required**
  * DryRun
  * InstanceTenancy
  * Ipv6CidrBlock
  * Ipv6CidrBlockNetworkBorderGroup
  * Ipv6Pool
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateVpcResult](#createvpcresult)

### CreateVpcEndpoint



```js
amazonaws_ec2.CreateVpcEndpoint({
  "VpcId": "",
  "ServiceName": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcEndpointType `string`
  * VpcId **required** `string`
  * ServiceName **required** `string`
  * PolicyDocument `string`
  * RouteTableId `array`
  * SubnetId `array`
  * SecurityGroupId `array`
  * ClientToken `string`
  * PrivateDnsEnabled `boolean`
  * TagSpecification `array`

#### Output
* output [CreateVpcEndpointResult](#createvpcendpointresult)

### CreateVpcEndpoint



```js
amazonaws_ec2.CreateVpcEndpoint({
  "VpcId": null,
  "ServiceName": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * PolicyDocument
  * PrivateDnsEnabled
  * RouteTableIds
    * items
  * SecurityGroupIds
    * items
  * ServiceName **required**
  * SubnetIds
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcEndpointType
  * VpcId **required**

#### Output
* output [CreateVpcEndpointResult](#createvpcendpointresult)

### CreateVpcEndpointConnectionNotification



```js
amazonaws_ec2.CreateVpcEndpointConnectionNotification({
  "ConnectionNotificationArn": "",
  "ConnectionEvents": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId `string`
  * VpcEndpointId `string`
  * ConnectionNotificationArn **required** `string`
  * ConnectionEvents **required** `array`
  * ClientToken `string`

#### Output
* output [CreateVpcEndpointConnectionNotificationResult](#createvpcendpointconnectionnotificationresult)

### CreateVpcEndpointConnectionNotification



```js
amazonaws_ec2.CreateVpcEndpointConnectionNotification({
  "ConnectionNotificationArn": null,
  "ConnectionEvents": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * ConnectionEvents **required**
    * items
  * ConnectionNotificationArn **required**
  * DryRun
  * ServiceId
  * VpcEndpointId

#### Output
* output [CreateVpcEndpointConnectionNotificationResult](#createvpcendpointconnectionnotificationresult)

### CreateVpcEndpointServiceConfiguration



```js
amazonaws_ec2.CreateVpcEndpointServiceConfiguration({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * AcceptanceRequired `boolean`
  * PrivateDnsName `string`
  * NetworkLoadBalancerArn `array`
  * GatewayLoadBalancerArn `array`
  * ClientToken `string`
  * TagSpecification `array`

#### Output
* output [CreateVpcEndpointServiceConfigurationResult](#createvpcendpointserviceconfigurationresult)

### CreateVpcEndpointServiceConfiguration



```js
amazonaws_ec2.CreateVpcEndpointServiceConfiguration({}, context)
```

#### Input
* input `object`
  * AcceptanceRequired
  * ClientToken
  * DryRun
  * GatewayLoadBalancerArns
    * items
  * NetworkLoadBalancerArns
    * items
  * PrivateDnsName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [CreateVpcEndpointServiceConfigurationResult](#createvpcendpointserviceconfigurationresult)

### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PeerOwnerId `string`
  * PeerVpcId `string`
  * VpcId `string`
  * PeerRegion `string`
  * TagSpecification `array`

#### Output
* output [CreateVpcPeeringConnectionResult](#createvpcpeeringconnectionresult)

### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun
  * PeerOwnerId
  * PeerRegion
  * PeerVpcId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId

#### Output
* output [CreateVpcPeeringConnectionResult](#createvpcpeeringconnectionresult)

### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({
  "CustomerGatewayId": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required** `string`
  * Type **required** `string`
  * VpnGatewayId `string`
  * TransitGatewayId `string`
  * DryRun `boolean`
  * Options `object`
  * TagSpecification `array`

#### Output
* output [CreateVpnConnectionResult](#createvpnconnectionresult)

### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({
  "CustomerGatewayId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required**
  * DryRun
  * Options
    * EnableAcceleration
    * LocalIpv4NetworkCidr
    * LocalIpv6NetworkCidr
    * RemoteIpv4NetworkCidr
    * RemoteIpv6NetworkCidr
    * StaticRoutesOnly
    * TunnelInsideIpVersion
    * TunnelOptions
      * items [VpnTunnelOptionsSpecification](#vpntunneloptionsspecification)
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId
  * Type **required**
  * VpnGatewayId

#### Output
* output [CreateVpnConnectionResult](#createvpnconnectionresult)

### CreateVpnConnectionRoute



```js
amazonaws_ec2.CreateVpnConnectionRoute({
  "DestinationCidrBlock": "",
  "VpnConnectionId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * VpnConnectionId **required** `string`

#### Output
*Output schema unknown*

### CreateVpnConnectionRoute



```js
amazonaws_ec2.CreateVpnConnectionRoute({
  "DestinationCidrBlock": null,
  "VpnConnectionId": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required**
  * VpnConnectionId **required**

#### Output
*Output schema unknown*

### CreateVpnGateway



```js
amazonaws_ec2.CreateVpnGateway({
  "Type": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone `string`
  * Type **required** `string`
  * TagSpecification `array`
  * AmazonSideAsn `integer`
  * DryRun `boolean`

#### Output
* output [CreateVpnGatewayResult](#createvpngatewayresult)

### CreateVpnGateway



```js
amazonaws_ec2.CreateVpnGateway({
  "Type": null
}, context)
```

#### Input
* input `object`
  * AmazonSideAsn
  * AvailabilityZone
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type **required**

#### Output
* output [CreateVpnGatewayResult](#createvpngatewayresult)

### DeleteCarrierGateway



```js
amazonaws_ec2.DeleteCarrierGateway({
  "CarrierGatewayId": ""
}, context)
```

#### Input
* input `object`
  * CarrierGatewayId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteCarrierGatewayResult](#deletecarriergatewayresult)

### DeleteCarrierGateway



```js
amazonaws_ec2.DeleteCarrierGateway({
  "CarrierGatewayId": null
}, context)
```

#### Input
* input `object`
  * CarrierGatewayId **required**
  * DryRun

#### Output
* output [DeleteCarrierGatewayResult](#deletecarriergatewayresult)

### DeleteClientVpnEndpoint



```js
amazonaws_ec2.DeleteClientVpnEndpoint({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteClientVpnEndpointResult](#deleteclientvpnendpointresult)

### DeleteClientVpnEndpoint



```js
amazonaws_ec2.DeleteClientVpnEndpoint({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * DryRun

#### Output
* output [DeleteClientVpnEndpointResult](#deleteclientvpnendpointresult)

### DeleteClientVpnRoute



```js
amazonaws_ec2.DeleteClientVpnRoute({
  "ClientVpnEndpointId": "",
  "DestinationCidrBlock": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * TargetVpcSubnetId `string`
  * DestinationCidrBlock **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteClientVpnRouteResult](#deleteclientvpnrouteresult)

### DeleteClientVpnRoute



```js
amazonaws_ec2.DeleteClientVpnRoute({
  "ClientVpnEndpointId": null,
  "DestinationCidrBlock": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * DestinationCidrBlock **required**
  * DryRun
  * TargetVpcSubnetId

#### Output
* output [DeleteClientVpnRouteResult](#deleteclientvpnrouteresult)

### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({
  "CustomerGatewayId": ""
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({
  "CustomerGatewayId": null
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required**
  * DryRun

#### Output
*Output schema unknown*

### DeleteDhcpOptions



```js
amazonaws_ec2.DeleteDhcpOptions({
  "DhcpOptionsId": ""
}, context)
```

#### Input
* input `object`
  * DhcpOptionsId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteDhcpOptions



```js
amazonaws_ec2.DeleteDhcpOptions({
  "DhcpOptionsId": null
}, context)
```

#### Input
* input `object`
  * DhcpOptionsId **required**
  * DryRun

#### Output
*Output schema unknown*

### DeleteEgressOnlyInternetGateway



```js
amazonaws_ec2.DeleteEgressOnlyInternetGateway({
  "EgressOnlyInternetGatewayId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * EgressOnlyInternetGatewayId **required** `string`

#### Output
* output [DeleteEgressOnlyInternetGatewayResult](#deleteegressonlyinternetgatewayresult)

### DeleteEgressOnlyInternetGateway



```js
amazonaws_ec2.DeleteEgressOnlyInternetGateway({
  "EgressOnlyInternetGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * EgressOnlyInternetGatewayId **required**

#### Output
* output [DeleteEgressOnlyInternetGatewayResult](#deleteegressonlyinternetgatewayresult)

### DeleteFleets



```js
amazonaws_ec2.DeleteFleets({
  "FleetId": [],
  "TerminateInstances": true
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FleetId **required** `array`
  * TerminateInstances **required** `boolean`

#### Output
* output [DeleteFleetsResult](#deletefleetsresult)

### DeleteFleets



```js
amazonaws_ec2.DeleteFleets({
  "FleetIds": null,
  "TerminateInstances": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * FleetIds **required**
    * items [FleetId](#fleetid)
  * TerminateInstances **required**

#### Output
* output [DeleteFleetsResult](#deletefleetsresult)

### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({
  "FlowLogId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FlowLogId **required** `array`

#### Output
* output [DeleteFlowLogsResult](#deleteflowlogsresult)

### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({
  "FlowLogIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * FlowLogIds **required**
    * items

#### Output
* output [DeleteFlowLogsResult](#deleteflowlogsresult)

### DeleteFpgaImage



```js
amazonaws_ec2.DeleteFpgaImage({
  "FpgaImageId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FpgaImageId **required** `string`

#### Output
* output [DeleteFpgaImageResult](#deletefpgaimageresult)

### DeleteFpgaImage



```js
amazonaws_ec2.DeleteFpgaImage({
  "FpgaImageId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * FpgaImageId **required**

#### Output
* output [DeleteFpgaImageResult](#deletefpgaimageresult)

### DeleteInternetGateway



```js
amazonaws_ec2.DeleteInternetGateway({
  "InternetGatewayId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InternetGatewayId **required** `string`

#### Output
*Output schema unknown*

### DeleteInternetGateway



```js
amazonaws_ec2.DeleteInternetGateway({
  "InternetGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InternetGatewayId **required**

#### Output
*Output schema unknown*

### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({}, context)
```

#### Input
* input `object`
  * KeyName `string`
  * KeyPairId `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({}, context)
```

#### Input
* input `object`
  * DryRun
  * KeyName
  * KeyPairId

#### Output
*Output schema unknown*

### DeleteLaunchTemplate



```js
amazonaws_ec2.DeleteLaunchTemplate({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * LaunchTemplateId `string`
  * LaunchTemplateName `string`

#### Output
* output [DeleteLaunchTemplateResult](#deletelaunchtemplateresult)

### DeleteLaunchTemplate



```js
amazonaws_ec2.DeleteLaunchTemplate({}, context)
```

#### Input
* input `object`
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName

#### Output
* output [DeleteLaunchTemplateResult](#deletelaunchtemplateresult)

### DeleteLaunchTemplateVersions



```js
amazonaws_ec2.DeleteLaunchTemplateVersions({
  "LaunchTemplateVersion": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * LaunchTemplateId `string`
  * LaunchTemplateName `string`
  * LaunchTemplateVersion **required** `array`

#### Output
* output [DeleteLaunchTemplateVersionsResult](#deletelaunchtemplateversionsresult)

### DeleteLaunchTemplateVersions



```js
amazonaws_ec2.DeleteLaunchTemplateVersions({
  "Versions": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName
  * Versions **required**
    * items

#### Output
* output [DeleteLaunchTemplateVersionsResult](#deletelaunchtemplateversionsresult)

### DeleteLocalGatewayRoute



```js
amazonaws_ec2.DeleteLocalGatewayRoute({
  "DestinationCidrBlock": "",
  "LocalGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * LocalGatewayRouteTableId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteLocalGatewayRouteResult](#deletelocalgatewayrouteresult)

### DeleteLocalGatewayRoute



```js
amazonaws_ec2.DeleteLocalGatewayRoute({
  "DestinationCidrBlock": null,
  "LocalGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required**
  * DryRun
  * LocalGatewayRouteTableId **required**

#### Output
* output [DeleteLocalGatewayRouteResult](#deletelocalgatewayrouteresult)

### DeleteLocalGatewayRouteTableVpcAssociation



```js
amazonaws_ec2.DeleteLocalGatewayRouteTableVpcAssociation({
  "LocalGatewayRouteTableVpcAssociationId": ""
}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableVpcAssociationId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteLocalGatewayRouteTableVpcAssociationResult](#deletelocalgatewayroutetablevpcassociationresult)

### DeleteLocalGatewayRouteTableVpcAssociation



```js
amazonaws_ec2.DeleteLocalGatewayRouteTableVpcAssociation({
  "LocalGatewayRouteTableVpcAssociationId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * LocalGatewayRouteTableVpcAssociationId **required**

#### Output
* output [DeleteLocalGatewayRouteTableVpcAssociationResult](#deletelocalgatewayroutetablevpcassociationresult)

### DeleteManagedPrefixList



```js
amazonaws_ec2.DeleteManagedPrefixList({
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListId **required** `string`

#### Output
* output [DeleteManagedPrefixListResult](#deletemanagedprefixlistresult)

### DeleteManagedPrefixList



```js
amazonaws_ec2.DeleteManagedPrefixList({
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * PrefixListId **required**

#### Output
* output [DeleteManagedPrefixListResult](#deletemanagedprefixlistresult)

### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({
  "NatGatewayId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NatGatewayId **required** `string`

#### Output
* output [DeleteNatGatewayResult](#deletenatgatewayresult)

### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({
  "NatGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NatGatewayId **required**

#### Output
* output [DeleteNatGatewayResult](#deletenatgatewayresult)

### DeleteNetworkAcl



```js
amazonaws_ec2.DeleteNetworkAcl({
  "NetworkAclId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NetworkAclId **required** `string`

#### Output
*Output schema unknown*

### DeleteNetworkAcl



```js
amazonaws_ec2.DeleteNetworkAcl({
  "NetworkAclId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NetworkAclId **required**

#### Output
*Output schema unknown*

### DeleteNetworkAclEntry



```js
amazonaws_ec2.DeleteNetworkAclEntry({
  "Egress": true,
  "NetworkAclId": "",
  "RuleNumber": 0
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Egress **required** `boolean`
  * NetworkAclId **required** `string`
  * RuleNumber **required** `integer`

#### Output
*Output schema unknown*

### DeleteNetworkAclEntry



```js
amazonaws_ec2.DeleteNetworkAclEntry({
  "Egress": null,
  "NetworkAclId": null,
  "RuleNumber": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Egress **required**
  * NetworkAclId **required**
  * RuleNumber **required**

#### Output
*Output schema unknown*

### DeleteNetworkInsightsAnalysis



```js
amazonaws_ec2.DeleteNetworkInsightsAnalysis({
  "NetworkInsightsAnalysisId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NetworkInsightsAnalysisId **required** `string`

#### Output
* output [DeleteNetworkInsightsAnalysisResult](#deletenetworkinsightsanalysisresult)

### DeleteNetworkInsightsAnalysis



```js
amazonaws_ec2.DeleteNetworkInsightsAnalysis({
  "NetworkInsightsAnalysisId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NetworkInsightsAnalysisId **required**

#### Output
* output [DeleteNetworkInsightsAnalysisResult](#deletenetworkinsightsanalysisresult)

### DeleteNetworkInsightsPath



```js
amazonaws_ec2.DeleteNetworkInsightsPath({
  "NetworkInsightsPathId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NetworkInsightsPathId **required** `string`

#### Output
* output [DeleteNetworkInsightsPathResult](#deletenetworkinsightspathresult)

### DeleteNetworkInsightsPath



```js
amazonaws_ec2.DeleteNetworkInsightsPath({
  "NetworkInsightsPathId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NetworkInsightsPathId **required**

#### Output
* output [DeleteNetworkInsightsPathResult](#deletenetworkinsightspathresult)

### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NetworkInterfaceId **required** `string`

#### Output
*Output schema unknown*

### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NetworkInterfaceId **required**

#### Output
*Output schema unknown*

### DeleteNetworkInterfacePermission



```js
amazonaws_ec2.DeleteNetworkInterfacePermission({
  "NetworkInterfacePermissionId": ""
}, context)
```

#### Input
* input `object`
  * NetworkInterfacePermissionId **required** `string`
  * Force `boolean`
  * DryRun `boolean`

#### Output
* output [DeleteNetworkInterfacePermissionResult](#deletenetworkinterfacepermissionresult)

### DeleteNetworkInterfacePermission



```js
amazonaws_ec2.DeleteNetworkInterfacePermission({
  "NetworkInterfacePermissionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Force
  * NetworkInterfacePermissionId **required**

#### Output
* output [DeleteNetworkInterfacePermissionResult](#deletenetworkinterfacepermissionresult)

### DeletePlacementGroup



```js
amazonaws_ec2.DeletePlacementGroup({
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupName **required** `string`

#### Output
*Output schema unknown*

### DeletePlacementGroup



```js
amazonaws_ec2.DeletePlacementGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupName **required**

#### Output
*Output schema unknown*

### DeleteQueuedReservedInstances



```js
amazonaws_ec2.DeleteQueuedReservedInstances({
  "ReservedInstancesId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ReservedInstancesId **required** `array`

#### Output
* output [DeleteQueuedReservedInstancesResult](#deletequeuedreservedinstancesresult)

### DeleteQueuedReservedInstances



```js
amazonaws_ec2.DeleteQueuedReservedInstances({
  "ReservedInstancesIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ReservedInstancesIds **required**
    * items

#### Output
* output [DeleteQueuedReservedInstancesResult](#deletequeuedreservedinstancesresult)

### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock `string`
  * DestinationIpv6CidrBlock `string`
  * DestinationPrefixListId `string`
  * DryRun `boolean`
  * RouteTableId **required** `string`

#### Output
*Output schema unknown*

### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * RouteTableId **required**

#### Output
*Output schema unknown*

### DeleteRouteTable



```js
amazonaws_ec2.DeleteRouteTable({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * RouteTableId **required** `string`

#### Output
*Output schema unknown*

### DeleteRouteTable



```js
amazonaws_ec2.DeleteRouteTable({
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * RouteTableId **required**

#### Output
*Output schema unknown*

### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```

#### Input
* input `object`
  * GroupId `string`
  * GroupName `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupId
  * GroupName

#### Output
*Output schema unknown*

### DeleteSnapshot



```js
amazonaws_ec2.DeleteSnapshot({
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * SnapshotId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteSnapshot



```js
amazonaws_ec2.DeleteSnapshot({
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * SnapshotId **required**

#### Output
*Output schema unknown*

### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
*Output schema unknown*

### DeleteSubnet



```js
amazonaws_ec2.DeleteSubnet({
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * SubnetId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteSubnet



```js
amazonaws_ec2.DeleteSubnet({
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * SubnetId **required**

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_ec2.DeleteTags({
  "ResourceId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ResourceId **required** `array`
  * Tag `array`

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_ec2.DeleteTags({
  "Resources": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Resources **required**
    * items [TaggableResourceId](#taggableresourceid)
  * Tags
    * items
      * Key
      * Value

#### Output
*Output schema unknown*

### DeleteTrafficMirrorFilter



```js
amazonaws_ec2.DeleteTrafficMirrorFilter({
  "TrafficMirrorFilterId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTrafficMirrorFilterResult](#deletetrafficmirrorfilterresult)

### DeleteTrafficMirrorFilter



```js
amazonaws_ec2.DeleteTrafficMirrorFilter({
  "TrafficMirrorFilterId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TrafficMirrorFilterId **required**

#### Output
* output [DeleteTrafficMirrorFilterResult](#deletetrafficmirrorfilterresult)

### DeleteTrafficMirrorFilterRule



```js
amazonaws_ec2.DeleteTrafficMirrorFilterRule({
  "TrafficMirrorFilterRuleId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterRuleId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTrafficMirrorFilterRuleResult](#deletetrafficmirrorfilterruleresult)

### DeleteTrafficMirrorFilterRule



```js
amazonaws_ec2.DeleteTrafficMirrorFilterRule({
  "TrafficMirrorFilterRuleId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TrafficMirrorFilterRuleId **required**

#### Output
* output [DeleteTrafficMirrorFilterRuleResult](#deletetrafficmirrorfilterruleresult)

### DeleteTrafficMirrorSession



```js
amazonaws_ec2.DeleteTrafficMirrorSession({
  "TrafficMirrorSessionId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorSessionId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTrafficMirrorSessionResult](#deletetrafficmirrorsessionresult)

### DeleteTrafficMirrorSession



```js
amazonaws_ec2.DeleteTrafficMirrorSession({
  "TrafficMirrorSessionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TrafficMirrorSessionId **required**

#### Output
* output [DeleteTrafficMirrorSessionResult](#deletetrafficmirrorsessionresult)

### DeleteTrafficMirrorTarget



```js
amazonaws_ec2.DeleteTrafficMirrorTarget({
  "TrafficMirrorTargetId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorTargetId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTrafficMirrorTargetResult](#deletetrafficmirrortargetresult)

### DeleteTrafficMirrorTarget



```js
amazonaws_ec2.DeleteTrafficMirrorTarget({
  "TrafficMirrorTargetId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TrafficMirrorTargetId **required**

#### Output
* output [DeleteTrafficMirrorTargetResult](#deletetrafficmirrortargetresult)

### DeleteTransitGateway



```js
amazonaws_ec2.DeleteTransitGateway({
  "TransitGatewayId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayResult](#deletetransitgatewayresult)

### DeleteTransitGateway



```js
amazonaws_ec2.DeleteTransitGateway({
  "TransitGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayId **required**

#### Output
* output [DeleteTransitGatewayResult](#deletetransitgatewayresult)

### DeleteTransitGatewayConnect



```js
amazonaws_ec2.DeleteTransitGatewayConnect({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayConnectResult](#deletetransitgatewayconnectresult)

### DeleteTransitGatewayConnect



```js
amazonaws_ec2.DeleteTransitGatewayConnect({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [DeleteTransitGatewayConnectResult](#deletetransitgatewayconnectresult)

### DeleteTransitGatewayConnectPeer



```js
amazonaws_ec2.DeleteTransitGatewayConnectPeer({
  "TransitGatewayConnectPeerId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayConnectPeerId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayConnectPeerResult](#deletetransitgatewayconnectpeerresult)

### DeleteTransitGatewayConnectPeer



```js
amazonaws_ec2.DeleteTransitGatewayConnectPeer({
  "TransitGatewayConnectPeerId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayConnectPeerId **required**

#### Output
* output [DeleteTransitGatewayConnectPeerResult](#deletetransitgatewayconnectpeerresult)

### DeleteTransitGatewayMulticastDomain



```js
amazonaws_ec2.DeleteTransitGatewayMulticastDomain({
  "TransitGatewayMulticastDomainId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayMulticastDomainResult](#deletetransitgatewaymulticastdomainresult)

### DeleteTransitGatewayMulticastDomain



```js
amazonaws_ec2.DeleteTransitGatewayMulticastDomain({
  "TransitGatewayMulticastDomainId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayMulticastDomainId **required**

#### Output
* output [DeleteTransitGatewayMulticastDomainResult](#deletetransitgatewaymulticastdomainresult)

### DeleteTransitGatewayPeeringAttachment



```js
amazonaws_ec2.DeleteTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayPeeringAttachmentResult](#deletetransitgatewaypeeringattachmentresult)

### DeleteTransitGatewayPeeringAttachment



```js
amazonaws_ec2.DeleteTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [DeleteTransitGatewayPeeringAttachmentResult](#deletetransitgatewaypeeringattachmentresult)

### DeleteTransitGatewayPrefixListReference



```js
amazonaws_ec2.DeleteTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": "",
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * PrefixListId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayPrefixListReferenceResult](#deletetransitgatewayprefixlistreferenceresult)

### DeleteTransitGatewayPrefixListReference



```js
amazonaws_ec2.DeleteTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": null,
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * PrefixListId **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [DeleteTransitGatewayPrefixListReferenceResult](#deletetransitgatewayprefixlistreferenceresult)

### DeleteTransitGatewayRoute



```js
amazonaws_ec2.DeleteTransitGatewayRoute({
  "TransitGatewayRouteTableId": "",
  "DestinationCidrBlock": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * DestinationCidrBlock **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayRouteResult](#deletetransitgatewayrouteresult)

### DeleteTransitGatewayRoute



```js
amazonaws_ec2.DeleteTransitGatewayRoute({
  "TransitGatewayRouteTableId": null,
  "DestinationCidrBlock": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayRouteTableId **required**

#### Output
* output [DeleteTransitGatewayRouteResult](#deletetransitgatewayrouteresult)

### DeleteTransitGatewayRouteTable



```js
amazonaws_ec2.DeleteTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayRouteTableResult](#deletetransitgatewayroutetableresult)

### DeleteTransitGatewayRouteTable



```js
amazonaws_ec2.DeleteTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayRouteTableId **required**

#### Output
* output [DeleteTransitGatewayRouteTableResult](#deletetransitgatewayroutetableresult)

### DeleteTransitGatewayVpcAttachment



```js
amazonaws_ec2.DeleteTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [DeleteTransitGatewayVpcAttachmentResult](#deletetransitgatewayvpcattachmentresult)

### DeleteTransitGatewayVpcAttachment



```js
amazonaws_ec2.DeleteTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [DeleteTransitGatewayVpcAttachmentResult](#deletetransitgatewayvpcattachmentresult)

### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * VolumeId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VolumeId **required**

#### Output
*Output schema unknown*

### DeleteVpc



```js
amazonaws_ec2.DeleteVpc({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * VpcId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteVpc



```js
amazonaws_ec2.DeleteVpc({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcId **required**

#### Output
*Output schema unknown*

### DeleteVpcEndpointConnectionNotifications



```js
amazonaws_ec2.DeleteVpcEndpointConnectionNotifications({
  "ConnectionNotificationId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ConnectionNotificationId **required** `array`

#### Output
* output [DeleteVpcEndpointConnectionNotificationsResult](#deletevpcendpointconnectionnotificationsresult)

### DeleteVpcEndpointConnectionNotifications



```js
amazonaws_ec2.DeleteVpcEndpointConnectionNotifications({
  "ConnectionNotificationIds": null
}, context)
```

#### Input
* input `object`
  * ConnectionNotificationIds **required**
    * items
  * DryRun

#### Output
* output [DeleteVpcEndpointConnectionNotificationsResult](#deletevpcendpointconnectionnotificationsresult)

### DeleteVpcEndpointServiceConfigurations



```js
amazonaws_ec2.DeleteVpcEndpointServiceConfigurations({
  "ServiceId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `array`

#### Output
* output [DeleteVpcEndpointServiceConfigurationsResult](#deletevpcendpointserviceconfigurationsresult)

### DeleteVpcEndpointServiceConfigurations



```js
amazonaws_ec2.DeleteVpcEndpointServiceConfigurations({
  "ServiceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ServiceIds **required**
    * items

#### Output
* output [DeleteVpcEndpointServiceConfigurationsResult](#deletevpcendpointserviceconfigurationsresult)

### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({
  "VpcEndpointId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcEndpointId **required** `array`

#### Output
* output [DeleteVpcEndpointsResult](#deletevpcendpointsresult)

### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({
  "VpcEndpointIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcEndpointIds **required**
    * items

#### Output
* output [DeleteVpcEndpointsResult](#deletevpcendpointsresult)

### DeleteVpcPeeringConnection



```js
amazonaws_ec2.DeleteVpcPeeringConnection({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcPeeringConnectionId **required** `string`

#### Output
* output [DeleteVpcPeeringConnectionResult](#deletevpcpeeringconnectionresult)

### DeleteVpcPeeringConnection



```js
amazonaws_ec2.DeleteVpcPeeringConnection({
  "VpcPeeringConnectionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcPeeringConnectionId **required**

#### Output
* output [DeleteVpcPeeringConnectionResult](#deletevpcpeeringconnectionresult)

### DeleteVpnConnection



```js
amazonaws_ec2.DeleteVpnConnection({
  "VpnConnectionId": ""
}, context)
```

#### Input
* input `object`
  * VpnConnectionId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteVpnConnection



```js
amazonaws_ec2.DeleteVpnConnection({
  "VpnConnectionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpnConnectionId **required**

#### Output
*Output schema unknown*

### DeleteVpnConnectionRoute



```js
amazonaws_ec2.DeleteVpnConnectionRoute({
  "DestinationCidrBlock": "",
  "VpnConnectionId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * VpnConnectionId **required** `string`

#### Output
*Output schema unknown*

### DeleteVpnConnectionRoute



```js
amazonaws_ec2.DeleteVpnConnectionRoute({
  "DestinationCidrBlock": null,
  "VpnConnectionId": null
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required**
  * VpnConnectionId **required**

#### Output
*Output schema unknown*

### DeleteVpnGateway



```js
amazonaws_ec2.DeleteVpnGateway({
  "VpnGatewayId": ""
}, context)
```

#### Input
* input `object`
  * VpnGatewayId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeleteVpnGateway



```js
amazonaws_ec2.DeleteVpnGateway({
  "VpnGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpnGatewayId **required**

#### Output
*Output schema unknown*

### DeprovisionByoipCidr



```js
amazonaws_ec2.DeprovisionByoipCidr({
  "Cidr": ""
}, context)
```

#### Input
* input `object`
  * Cidr **required** `string`
  * DryRun `boolean`

#### Output
* output [DeprovisionByoipCidrResult](#deprovisionbyoipcidrresult)

### DeprovisionByoipCidr



```js
amazonaws_ec2.DeprovisionByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**
  * DryRun

#### Output
* output [DeprovisionByoipCidrResult](#deprovisionbyoipcidrresult)

### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * ImageId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ImageId **required**

#### Output
*Output schema unknown*

### DeregisterInstanceEventNotificationAttributes



```js
amazonaws_ec2.DeregisterInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceTagAttribute `object`

#### Output
* output [DeregisterInstanceEventNotificationAttributesResult](#deregisterinstanceeventnotificationattributesresult)

### DeregisterInstanceEventNotificationAttributes



```js
amazonaws_ec2.DeregisterInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

#### Output
* output [DeregisterInstanceEventNotificationAttributesResult](#deregisterinstanceeventnotificationattributesresult)

### DeregisterTransitGatewayMulticastGroupMembers



```js
amazonaws_ec2.DeregisterTransitGatewayMulticastGroupMembers({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * GroupIpAddress `string`
  * NetworkInterfaceIds `array`
  * DryRun `boolean`

#### Output
* output [DeregisterTransitGatewayMulticastGroupMembersResult](#deregistertransitgatewaymulticastgroupmembersresult)

### DeregisterTransitGatewayMulticastGroupMembers



```js
amazonaws_ec2.DeregisterTransitGatewayMulticastGroupMembers({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

#### Output
* output [DeregisterTransitGatewayMulticastGroupMembersResult](#deregistertransitgatewaymulticastgroupmembersresult)

### DeregisterTransitGatewayMulticastGroupSources



```js
amazonaws_ec2.DeregisterTransitGatewayMulticastGroupSources({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * GroupIpAddress `string`
  * NetworkInterfaceIds `array`
  * DryRun `boolean`

#### Output
* output [DeregisterTransitGatewayMulticastGroupSourcesResult](#deregistertransitgatewaymulticastgroupsourcesresult)

### DeregisterTransitGatewayMulticastGroupSources



```js
amazonaws_ec2.DeregisterTransitGatewayMulticastGroupSources({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

#### Output
* output [DeregisterTransitGatewayMulticastGroupSourcesResult](#deregistertransitgatewaymulticastgroupsourcesresult)

### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`
  * AttributeName `array`
  * DryRun `boolean`

#### Output
* output [DescribeAccountAttributesResult](#describeaccountattributesresult)

### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items
  * DryRun

#### Output
* output [DescribeAccountAttributesResult](#describeaccountattributesresult)

### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * PublicIp `array`
  * AllocationId `array`
  * DryRun `boolean`

#### Output
* output [DescribeAddressesResult](#describeaddressesresult)

### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```

#### Input
* input `object`
  * AllocationIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * PublicIps
    * items

#### Output
* output [DescribeAddressesResult](#describeaddressesresult)

### DescribeAggregateIdFormat



```js
amazonaws_ec2.DescribeAggregateIdFormat({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [DescribeAggregateIdFormatResult](#describeaggregateidformatresult)

### DescribeAggregateIdFormat



```js
amazonaws_ec2.DescribeAggregateIdFormat({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [DescribeAggregateIdFormatResult](#describeaggregateidformatresult)

### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * ZoneName `array`
  * ZoneId `array`
  * AllAvailabilityZones `boolean`
  * DryRun `boolean`

#### Output
* output [DescribeAvailabilityZonesResult](#describeavailabilityzonesresult)

### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```

#### Input
* input `object`
  * AllAvailabilityZones
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ZoneIds
    * items
  * ZoneNames
    * items

#### Output
* output [DescribeAvailabilityZonesResult](#describeavailabilityzonesresult)

### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```

#### Input
* input `object`
  * BundleId `array`
  * Filter `array`
  * DryRun `boolean`

#### Output
* output [DescribeBundleTasksResult](#describebundletasksresult)

### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```

#### Input
* input `object`
  * BundleIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items

#### Output
* output [DescribeBundleTasksResult](#describebundletasksresult)

### DescribeByoipCidrs



```js
amazonaws_ec2.DescribeByoipCidrs({
  "MaxResults": 0
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults **required** `integer`
  * NextToken `string`

#### Output
* output [DescribeByoipCidrsResult](#describebyoipcidrsresult)

### DescribeByoipCidrs



```js
amazonaws_ec2.DescribeByoipCidrs({
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults **required**
  * NextToken

#### Output
* output [DescribeByoipCidrsResult](#describebyoipcidrsresult)

### DescribeCapacityReservations



```js
amazonaws_ec2.DescribeCapacityReservations({}, context)
```

#### Input
* input `object`
  * CapacityReservationId `array`
  * NextToken `string`
  * MaxResults `integer`
  * Filter `array`
  * DryRun `boolean`

#### Output
* output [DescribeCapacityReservationsResult](#describecapacityreservationsresult)

### DescribeCapacityReservations



```js
amazonaws_ec2.DescribeCapacityReservations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CapacityReservationIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeCapacityReservationsResult](#describecapacityreservationsresult)

### DescribeCarrierGateways



```js
amazonaws_ec2.DescribeCarrierGateways({}, context)
```

#### Input
* input `object`
  * CarrierGatewayId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeCarrierGatewaysResult](#describecarriergatewaysresult)

### DescribeCarrierGateways



```js
amazonaws_ec2.DescribeCarrierGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CarrierGatewayIds
    * items [CarrierGatewayId](#carriergatewayid)
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeCarrierGatewaysResult](#describecarriergatewaysresult)

### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * InstanceId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeClassicLinkInstancesResult](#describeclassiclinkinstancesresult)

### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClassicLinkInstancesResult](#describeclassiclinkinstancesresult)

### DescribeClientVpnAuthorizationRules



```js
amazonaws_ec2.DescribeClientVpnAuthorizationRules({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * DryRun `boolean`
  * NextToken `string`
  * Filter `array`
  * MaxResults `integer`

#### Output
* output [DescribeClientVpnAuthorizationRulesResult](#describeclientvpnauthorizationrulesresult)

### DescribeClientVpnAuthorizationRules



```js
amazonaws_ec2.DescribeClientVpnAuthorizationRules({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClientVpnAuthorizationRulesResult](#describeclientvpnauthorizationrulesresult)

### DescribeClientVpnConnections



```js
amazonaws_ec2.DescribeClientVpnConnections({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * Filter `array`
  * NextToken `string`
  * MaxResults `integer`
  * DryRun `boolean`

#### Output
* output [DescribeClientVpnConnectionsResult](#describeclientvpnconnectionsresult)

### DescribeClientVpnConnections



```js
amazonaws_ec2.DescribeClientVpnConnections({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClientVpnConnectionsResult](#describeclientvpnconnectionsresult)

### DescribeClientVpnEndpoints



```js
amazonaws_ec2.DescribeClientVpnEndpoints({}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId `array`
  * MaxResults `integer`
  * NextToken `string`
  * Filter `array`
  * DryRun `boolean`

#### Output
* output [DescribeClientVpnEndpointsResult](#describeclientvpnendpointsresult)

### DescribeClientVpnEndpoints



```js
amazonaws_ec2.DescribeClientVpnEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClientVpnEndpointIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClientVpnEndpointsResult](#describeclientvpnendpointsresult)

### DescribeClientVpnRoutes



```js
amazonaws_ec2.DescribeClientVpnRoutes({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeClientVpnRoutesResult](#describeclientvpnroutesresult)

### DescribeClientVpnRoutes



```js
amazonaws_ec2.DescribeClientVpnRoutes({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClientVpnRoutesResult](#describeclientvpnroutesresult)

### DescribeClientVpnTargetNetworks



```js
amazonaws_ec2.DescribeClientVpnTargetNetworks({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * AssociationIds `array`
  * MaxResults `integer`
  * NextToken `string`
  * Filter `array`
  * DryRun `boolean`

#### Output
* output [DescribeClientVpnTargetNetworksResult](#describeclientvpntargetnetworksresult)

### DescribeClientVpnTargetNetworks



```js
amazonaws_ec2.DescribeClientVpnTargetNetworks({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationIds
    * items
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeClientVpnTargetNetworksResult](#describeclientvpntargetnetworksresult)

### DescribeCoipPools



```js
amazonaws_ec2.DescribeCoipPools({}, context)
```

#### Input
* input `object`
  * PoolId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeCoipPoolsResult](#describecoippoolsresult)

### DescribeCoipPools



```js
amazonaws_ec2.DescribeCoipPools({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

#### Output
* output [DescribeCoipPoolsResult](#describecoippoolsresult)

### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```

#### Input
* input `object`
  * ConversionTaskId `array`
  * DryRun `boolean`

#### Output
* output [DescribeConversionTasksResult](#describeconversiontasksresult)

### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```

#### Input
* input `object`
  * ConversionTaskIds
    * items
  * DryRun

#### Output
* output [DescribeConversionTasksResult](#describeconversiontasksresult)

### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```

#### Input
* input `object`
  * CustomerGatewayId `array`
  * Filter `array`
  * DryRun `boolean`

#### Output
* output [DescribeCustomerGatewaysResult](#describecustomergatewaysresult)

### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```

#### Input
* input `object`
  * CustomerGatewayIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items

#### Output
* output [DescribeCustomerGatewaysResult](#describecustomergatewaysresult)

### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```

#### Input
* input `object`
  * DhcpOptionsId `array`
  * Filter `array`
  * DryRun `boolean`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeDhcpOptionsResult](#describedhcpoptionsresult)

### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DhcpOptionsIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeDhcpOptionsResult](#describedhcpoptionsresult)

### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * EgressOnlyInternetGatewayId `array`
  * MaxResults `integer`
  * NextToken `string`
  * Filter `array`

#### Output
* output [DescribeEgressOnlyInternetGatewaysResult](#describeegressonlyinternetgatewaysresult)

### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * EgressOnlyInternetGatewayIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeEgressOnlyInternetGatewaysResult](#describeegressonlyinternetgatewaysresult)

### DescribeElasticGpus



```js
amazonaws_ec2.DescribeElasticGpus({}, context)
```

#### Input
* input `object`
  * ElasticGpuId `array`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeElasticGpusResult](#describeelasticgpusresult)

### DescribeElasticGpus



```js
amazonaws_ec2.DescribeElasticGpus({}, context)
```

#### Input
* input `object`
  * DryRun
  * ElasticGpuIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeElasticGpusResult](#describeelasticgpusresult)

### DescribeExportImageTasks



```js
amazonaws_ec2.DescribeExportImageTasks({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * ExportImageTaskId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeExportImageTasksResult](#describeexportimagetasksresult)

### DescribeExportImageTasks



```js
amazonaws_ec2.DescribeExportImageTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * ExportImageTaskIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeExportImageTasksResult](#describeexportimagetasksresult)

### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * ExportTaskId `array`
  * Filter `array`

#### Output
* output [DescribeExportTasksResult](#describeexporttasksresult)

### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * ExportTaskIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items

#### Output
* output [DescribeExportTasksResult](#describeexporttasksresult)

### DescribeFastSnapshotRestores



```js
amazonaws_ec2.DescribeFastSnapshotRestores({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeFastSnapshotRestoresResult](#describefastsnapshotrestoresresult)

### DescribeFastSnapshotRestores



```js
amazonaws_ec2.DescribeFastSnapshotRestores({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeFastSnapshotRestoresResult](#describefastsnapshotrestoresresult)

### DescribeFleetHistory



```js
amazonaws_ec2.DescribeFleetHistory({
  "FleetId": "",
  "StartTime": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * EventType `string`
  * MaxResults `integer`
  * NextToken `string`
  * FleetId **required** `string`
  * StartTime **required** `string`

#### Output
* output [DescribeFleetHistoryResult](#describefleethistoryresult)

### DescribeFleetHistory



```js
amazonaws_ec2.DescribeFleetHistory({
  "FleetId": null,
  "StartTime": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * EventType
  * FleetId **required**
  * MaxResults
  * NextToken
  * StartTime **required**

#### Output
* output [DescribeFleetHistoryResult](#describefleethistoryresult)

### DescribeFleetInstances



```js
amazonaws_ec2.DescribeFleetInstances({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * FleetId **required** `string`
  * Filter `array`

#### Output
* output [DescribeFleetInstancesResult](#describefleetinstancesresult)

### DescribeFleetInstances



```js
amazonaws_ec2.DescribeFleetInstances({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FleetId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeFleetInstancesResult](#describefleetinstancesresult)

### DescribeFleets



```js
amazonaws_ec2.DescribeFleets({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * FleetId `array`
  * Filter `array`

#### Output
* output [DescribeFleetsResult](#describefleetsresult)

### DescribeFleets



```js
amazonaws_ec2.DescribeFleets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FleetIds
    * items [FleetId](#fleetid)
  * MaxResults
  * NextToken

#### Output
* output [DescribeFleetsResult](#describefleetsresult)

### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * FlowLogId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeFlowLogsResult](#describeflowlogsresult)

### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filter
    * items
      * Name
      * Values
        * items
  * FlowLogIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeFlowLogsResult](#describeflowlogsresult)

### DescribeFpgaImageAttribute



```js
amazonaws_ec2.DescribeFpgaImageAttribute({
  "FpgaImageId": "",
  "Attribute": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FpgaImageId **required** `string`
  * Attribute **required** `string`

#### Output
* output [DescribeFpgaImageAttributeResult](#describefpgaimageattributeresult)

### DescribeFpgaImageAttribute



```js
amazonaws_ec2.DescribeFpgaImageAttribute({
  "FpgaImageId": null,
  "Attribute": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * FpgaImageId **required**

#### Output
* output [DescribeFpgaImageAttributeResult](#describefpgaimageattributeresult)

### DescribeFpgaImages



```js
amazonaws_ec2.DescribeFpgaImages({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FpgaImageId `array`
  * Owner `array`
  * Filter `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeFpgaImagesResult](#describefpgaimagesresult)

### DescribeFpgaImages



```js
amazonaws_ec2.DescribeFpgaImages({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FpgaImageIds
    * items
  * MaxResults
  * NextToken
  * Owners
    * items

#### Output
* output [DescribeFpgaImagesResult](#describefpgaimagesresult)

### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * MaxDuration `integer`
  * MaxResults `integer`
  * MinDuration `integer`
  * NextToken `string`
  * OfferingId `string`

#### Output
* output [DescribeHostReservationOfferingsResult](#describehostreservationofferingsresult)

### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * items
      * Name
      * Values
        * items
  * MaxDuration
  * MaxResults
  * MinDuration
  * NextToken
  * OfferingId

#### Output
* output [DescribeHostReservationOfferingsResult](#describehostreservationofferingsresult)

### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * HostReservationIdSet `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeHostReservationsResult](#describehostreservationsresult)

### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * items
      * Name
      * Values
        * items
  * HostReservationIdSet
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeHostReservationsResult](#describehostreservationsresult)

### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * HostId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeHostsResult](#describehostsresult)

### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * items
      * Name
      * Values
        * items
  * HostIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeHostsResult](#describehostsresult)

### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```

#### Input
* input `object`
  * AssociationId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeIamInstanceProfileAssociationsResult](#describeiaminstanceprofileassociationsresult)

### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeIamInstanceProfileAssociationsResult](#describeiaminstanceprofileassociationsresult)

### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```

#### Input
* input `object`
  * Resource `string`

#### Output
* output [DescribeIdFormatResult](#describeidformatresult)

### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```

#### Input
* input `object`
  * Resource

#### Output
* output [DescribeIdFormatResult](#describeidformatresult)

### DescribeIdentityIdFormat



```js
amazonaws_ec2.DescribeIdentityIdFormat({
  "PrincipalArn": ""
}, context)
```

#### Input
* input `object`
  * PrincipalArn **required** `string`
  * Resource `string`

#### Output
* output [DescribeIdentityIdFormatResult](#describeidentityidformatresult)

### DescribeIdentityIdFormat



```js
amazonaws_ec2.DescribeIdentityIdFormat({
  "PrincipalArn": null
}, context)
```

#### Input
* input `object`
  * PrincipalArn **required**
  * Resource

#### Output
* output [DescribeIdentityIdFormatResult](#describeidentityidformatresult)

### DescribeImageAttribute



```js
amazonaws_ec2.DescribeImageAttribute({
  "Attribute": "",
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * ImageId **required** `string`
  * DryRun `boolean`

#### Output
* output [ImageAttribute](#imageattribute)

### DescribeImageAttribute



```js
amazonaws_ec2.DescribeImageAttribute({
  "Attribute": null,
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * ImageId **required**

#### Output
* output [ImageAttribute](#imageattribute)

### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```

#### Input
* input `object`
  * ExecutableBy `array`
  * Filter `array`
  * ImageId `array`
  * Owner `array`
  * DryRun `boolean`

#### Output
* output [DescribeImagesResult](#describeimagesresult)

### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```

#### Input
* input `object`
  * DryRun
  * ExecutableUsers
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * ImageIds
    * items
  * Owners
    * items

#### Output
* output [DescribeImagesResult](#describeimagesresult)

### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filters `array`
  * ImportTaskId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeImportImageTasksResult](#describeimportimagetasksresult)

### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ImportTaskIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeImportImageTasksResult](#describeimportimagetasksresult)

### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filters `array`
  * ImportTaskId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeImportSnapshotTasksResult](#describeimportsnapshottasksresult)

### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ImportTaskIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeImportSnapshotTasksResult](#describeimportsnapshottasksresult)

### DescribeInstanceAttribute



```js
amazonaws_ec2.DescribeInstanceAttribute({
  "Attribute": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * DryRun `boolean`
  * InstanceId **required** `string`

#### Output
* output [InstanceAttribute](#instanceattribute)

### DescribeInstanceAttribute



```js
amazonaws_ec2.DescribeInstanceAttribute({
  "Attribute": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * InstanceId **required**

#### Output
* output [InstanceAttribute](#instanceattribute)

### DescribeInstanceCreditSpecifications



```js
amazonaws_ec2.DescribeInstanceCreditSpecifications({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * InstanceId `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeInstanceCreditSpecificationsResult](#describeinstancecreditspecificationsresult)

### DescribeInstanceCreditSpecifications



```js
amazonaws_ec2.DescribeInstanceCreditSpecifications({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstanceCreditSpecificationsResult](#describeinstancecreditspecificationsresult)

### DescribeInstanceEventNotificationAttributes



```js
amazonaws_ec2.DescribeInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [DescribeInstanceEventNotificationAttributesResult](#describeinstanceeventnotificationattributesresult)

### DescribeInstanceEventNotificationAttributes



```js
amazonaws_ec2.DescribeInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [DescribeInstanceEventNotificationAttributesResult](#describeinstanceeventnotificationattributesresult)

### DescribeInstanceStatus



```js
amazonaws_ec2.DescribeInstanceStatus({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * InstanceId `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`
  * IncludeAllInstances `boolean`

#### Output
* output [DescribeInstanceStatusResult](#describeinstancestatusresult)

### DescribeInstanceStatus



```js
amazonaws_ec2.DescribeInstanceStatus({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * IncludeAllInstances
  * InstanceIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstanceStatusResult](#describeinstancestatusresult)

### DescribeInstanceTypeOfferings



```js
amazonaws_ec2.DescribeInstanceTypeOfferings({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * LocationType `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeInstanceTypeOfferingsResult](#describeinstancetypeofferingsresult)

### DescribeInstanceTypeOfferings



```js
amazonaws_ec2.DescribeInstanceTypeOfferings({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocationType
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstanceTypeOfferingsResult](#describeinstancetypeofferingsresult)

### DescribeInstanceTypes



```js
amazonaws_ec2.DescribeInstanceTypes({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceType `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeInstanceTypesResult](#describeinstancetypesresult)

### DescribeInstanceTypes



```js
amazonaws_ec2.DescribeInstanceTypes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceTypes
    * items [InstanceType](#instancetype)
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstanceTypesResult](#describeinstancetypesresult)

### DescribeInstances



```js
amazonaws_ec2.DescribeInstances({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * InstanceId `array`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeInstancesResult](#describeinstancesresult)

### DescribeInstances



```js
amazonaws_ec2.DescribeInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeInstancesResult](#describeinstancesresult)

### DescribeInternetGateways



```js
amazonaws_ec2.DescribeInternetGateways({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * InternetGatewayId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeInternetGatewaysResult](#describeinternetgatewaysresult)

### DescribeInternetGateways



```js
amazonaws_ec2.DescribeInternetGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InternetGatewayIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeInternetGatewaysResult](#describeinternetgatewaysresult)

### DescribeIpv6Pools



```js
amazonaws_ec2.DescribeIpv6Pools({}, context)
```

#### Input
* input `object`
  * PoolId `array`
  * NextToken `string`
  * MaxResults `integer`
  * DryRun `boolean`
  * Filter `array`

#### Output
* output [DescribeIpv6PoolsResult](#describeipv6poolsresult)

### DescribeIpv6Pools



```js
amazonaws_ec2.DescribeIpv6Pools({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

#### Output
* output [DescribeIpv6PoolsResult](#describeipv6poolsresult)

### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * KeyName `array`
  * KeyPairId `array`
  * DryRun `boolean`

#### Output
* output [DescribeKeyPairsResult](#describekeypairsresult)

### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * KeyNames
    * items
  * KeyPairIds
    * items

#### Output
* output [DescribeKeyPairsResult](#describekeypairsresult)

### DescribeLaunchTemplateVersions



```js
amazonaws_ec2.DescribeLaunchTemplateVersions({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * LaunchTemplateId `string`
  * LaunchTemplateName `string`
  * LaunchTemplateVersion `array`
  * MinVersion `string`
  * MaxVersion `string`
  * NextToken `string`
  * MaxResults `integer`
  * Filter `array`

#### Output
* output [DescribeLaunchTemplateVersionsResult](#describelaunchtemplateversionsresult)

### DescribeLaunchTemplateVersions



```js
amazonaws_ec2.DescribeLaunchTemplateVersions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LaunchTemplateId
  * LaunchTemplateName
  * MaxResults
  * MaxVersion
  * MinVersion
  * NextToken
  * Versions
    * items

#### Output
* output [DescribeLaunchTemplateVersionsResult](#describelaunchtemplateversionsresult)

### DescribeLaunchTemplates



```js
amazonaws_ec2.DescribeLaunchTemplates({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * LaunchTemplateId `array`
  * LaunchTemplateName `array`
  * Filter `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeLaunchTemplatesResult](#describelaunchtemplatesresult)

### DescribeLaunchTemplates



```js
amazonaws_ec2.DescribeLaunchTemplates({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LaunchTemplateIds
    * items
  * LaunchTemplateNames
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLaunchTemplatesResult](#describelaunchtemplatesresult)

### DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations



```js
amazonaws_ec2.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations({}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableVirtualInterfaceGroupAssociationId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult](#describelocalgatewayroutetablevirtualinterfacegroupassociationsresult)

### DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations



```js
amazonaws_ec2.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult](#describelocalgatewayroutetablevirtualinterfacegroupassociationsresult)

### DescribeLocalGatewayRouteTableVpcAssociations



```js
amazonaws_ec2.DescribeLocalGatewayRouteTableVpcAssociations({}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableVpcAssociationId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewayRouteTableVpcAssociationsResult](#describelocalgatewayroutetablevpcassociationsresult)

### DescribeLocalGatewayRouteTableVpcAssociations



```js
amazonaws_ec2.DescribeLocalGatewayRouteTableVpcAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableVpcAssociationIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewayRouteTableVpcAssociationsResult](#describelocalgatewayroutetablevpcassociationsresult)

### DescribeLocalGatewayRouteTables



```js
amazonaws_ec2.DescribeLocalGatewayRouteTables({}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewayRouteTablesResult](#describelocalgatewayroutetablesresult)

### DescribeLocalGatewayRouteTables



```js
amazonaws_ec2.DescribeLocalGatewayRouteTables({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewayRouteTablesResult](#describelocalgatewayroutetablesresult)

### DescribeLocalGatewayVirtualInterfaceGroups



```js
amazonaws_ec2.DescribeLocalGatewayVirtualInterfaceGroups({}, context)
```

#### Input
* input `object`
  * LocalGatewayVirtualInterfaceGroupId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewayVirtualInterfaceGroupsResult](#describelocalgatewayvirtualinterfacegroupsresult)

### DescribeLocalGatewayVirtualInterfaceGroups



```js
amazonaws_ec2.DescribeLocalGatewayVirtualInterfaceGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayVirtualInterfaceGroupIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewayVirtualInterfaceGroupsResult](#describelocalgatewayvirtualinterfacegroupsresult)

### DescribeLocalGatewayVirtualInterfaces



```js
amazonaws_ec2.DescribeLocalGatewayVirtualInterfaces({}, context)
```

#### Input
* input `object`
  * LocalGatewayVirtualInterfaceId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewayVirtualInterfacesResult](#describelocalgatewayvirtualinterfacesresult)

### DescribeLocalGatewayVirtualInterfaces



```js
amazonaws_ec2.DescribeLocalGatewayVirtualInterfaces({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayVirtualInterfaceIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewayVirtualInterfacesResult](#describelocalgatewayvirtualinterfacesresult)

### DescribeLocalGateways



```js
amazonaws_ec2.DescribeLocalGateways({}, context)
```

#### Input
* input `object`
  * LocalGatewayId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeLocalGatewaysResult](#describelocalgatewaysresult)

### DescribeLocalGateways



```js
amazonaws_ec2.DescribeLocalGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayIds
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeLocalGatewaysResult](#describelocalgatewaysresult)

### DescribeManagedPrefixLists



```js
amazonaws_ec2.DescribeManagedPrefixLists({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * PrefixListId `array`

#### Output
* output [DescribeManagedPrefixListsResult](#describemanagedprefixlistsresult)

### DescribeManagedPrefixLists



```js
amazonaws_ec2.DescribeManagedPrefixLists({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PrefixListIds
    * items

#### Output
* output [DescribeManagedPrefixListsResult](#describemanagedprefixlistsresult)

### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * PublicIp `array`

#### Output
* output [DescribeMovingAddressesResult](#describemovingaddressesresult)

### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PublicIps
    * items

#### Output
* output [DescribeMovingAddressesResult](#describemovingaddressesresult)

### DescribeNatGateways



```js
amazonaws_ec2.DescribeNatGateways({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NatGatewayId `array`
  * NextToken `string`

#### Output
* output [DescribeNatGatewaysResult](#describenatgatewaysresult)

### DescribeNatGateways



```js
amazonaws_ec2.DescribeNatGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filter
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NatGatewayIds
    * items
  * NextToken

#### Output
* output [DescribeNatGatewaysResult](#describenatgatewaysresult)

### DescribeNetworkAcls



```js
amazonaws_ec2.DescribeNetworkAcls({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * NetworkAclId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeNetworkAclsResult](#describenetworkaclsresult)

### DescribeNetworkAcls



```js
amazonaws_ec2.DescribeNetworkAcls({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkAclIds
    * items
  * NextToken

#### Output
* output [DescribeNetworkAclsResult](#describenetworkaclsresult)

### DescribeNetworkInsightsAnalyses



```js
amazonaws_ec2.DescribeNetworkInsightsAnalyses({}, context)
```

#### Input
* input `object`
  * NetworkInsightsAnalysisId `array`
  * NetworkInsightsPathId `string`
  * AnalysisStartTime `string`
  * AnalysisEndTime `string`
  * Filter `array`
  * MaxResults `integer`
  * DryRun `boolean`
  * NextToken `string`

#### Output
* output [DescribeNetworkInsightsAnalysesResult](#describenetworkinsightsanalysesresult)

### DescribeNetworkInsightsAnalyses



```js
amazonaws_ec2.DescribeNetworkInsightsAnalyses({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AnalysisEndTime
  * AnalysisStartTime
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInsightsAnalysisIds
    * items
  * NetworkInsightsPathId
  * NextToken

#### Output
* output [DescribeNetworkInsightsAnalysesResult](#describenetworkinsightsanalysesresult)

### DescribeNetworkInsightsPaths



```js
amazonaws_ec2.DescribeNetworkInsightsPaths({}, context)
```

#### Input
* input `object`
  * NetworkInsightsPathId `array`
  * Filter `array`
  * MaxResults `integer`
  * DryRun `boolean`
  * NextToken `string`

#### Output
* output [DescribeNetworkInsightsPathsResult](#describenetworkinsightspathsresult)

### DescribeNetworkInsightsPaths



```js
amazonaws_ec2.DescribeNetworkInsightsPaths({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInsightsPathIds
    * items
  * NextToken

#### Output
* output [DescribeNetworkInsightsPathsResult](#describenetworkinsightspathsresult)

### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Attribute `string`
  * DryRun `boolean`
  * NetworkInterfaceId **required** `string`

#### Output
* output [DescribeNetworkInterfaceAttributeResult](#describenetworkinterfaceattributeresult)

### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * DryRun
  * NetworkInterfaceId **required**

#### Output
* output [DescribeNetworkInterfaceAttributeResult](#describenetworkinterfaceattributeresult)

### DescribeNetworkInterfacePermissions



```js
amazonaws_ec2.DescribeNetworkInterfacePermissions({}, context)
```

#### Input
* input `object`
  * NetworkInterfacePermissionId `array`
  * Filter `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeNetworkInterfacePermissionsResult](#describenetworkinterfacepermissionsresult)

### DescribeNetworkInterfacePermissions



```js
amazonaws_ec2.DescribeNetworkInterfacePermissions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInterfacePermissionIds
    * items [NetworkInterfacePermissionId](#networkinterfacepermissionid)
  * NextToken

#### Output
* output [DescribeNetworkInterfacePermissionsResult](#describenetworkinterfacepermissionsresult)

### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * NetworkInterfaceId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeNetworkInterfacesResult](#describenetworkinterfacesresult)

### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInterfaceIds
    * items
  * NextToken

#### Output
* output [DescribeNetworkInterfacesResult](#describenetworkinterfacesresult)

### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * GroupName `array`
  * GroupId `array`

#### Output
* output [DescribePlacementGroupsResult](#describeplacementgroupsresult)

### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * GroupIds
    * items
  * GroupNames
    * items [PlacementGroupName](#placementgroupname)

#### Output
* output [DescribePlacementGroupsResult](#describeplacementgroupsresult)

### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * PrefixListId `array`

#### Output
* output [DescribePrefixListsResult](#describeprefixlistsresult)

### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PrefixListIds
    * items

#### Output
* output [DescribePrefixListsResult](#describeprefixlistsresult)

### DescribePrincipalIdFormat



```js
amazonaws_ec2.DescribePrincipalIdFormat({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Resource `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribePrincipalIdFormatResult](#describeprincipalidformatresult)

### DescribePrincipalIdFormat



```js
amazonaws_ec2.DescribePrincipalIdFormat({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * Resources
    * items

#### Output
* output [DescribePrincipalIdFormatResult](#describeprincipalidformatresult)

### DescribePublicIpv4Pools



```js
amazonaws_ec2.DescribePublicIpv4Pools({}, context)
```

#### Input
* input `object`
  * PoolId `array`
  * NextToken `string`
  * MaxResults `integer`
  * Filter `array`

#### Output
* output [DescribePublicIpv4PoolsResult](#describepublicipv4poolsresult)

### DescribePublicIpv4Pools



```js
amazonaws_ec2.DescribePublicIpv4Pools({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

#### Output
* output [DescribePublicIpv4PoolsResult](#describepublicipv4poolsresult)

### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * RegionName `array`
  * DryRun `boolean`
  * AllRegions `boolean`

#### Output
* output [DescribeRegionsResult](#describeregionsresult)

### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```

#### Input
* input `object`
  * AllRegions
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * RegionNames
    * items

#### Output
* output [DescribeRegionsResult](#describeregionsresult)

### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * OfferingClass `string`
  * ReservedInstancesId `array`
  * DryRun `boolean`
  * OfferingType `string`

#### Output
* output [DescribeReservedInstancesResult](#describereservedinstancesresult)

### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * OfferingClass
  * OfferingType
  * ReservedInstancesIds
    * items

#### Output
* output [DescribeReservedInstancesResult](#describereservedinstancesresult)

### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * ReservedInstancesId `string`
  * ReservedInstancesListingId `string`

#### Output
* output [DescribeReservedInstancesListingsResult](#describereservedinstanceslistingsresult)

### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```

#### Input
* input `object`
  * Filters
    * items
      * Name
      * Values
        * items
  * ReservedInstancesId
  * ReservedInstancesListingId

#### Output
* output [DescribeReservedInstancesListingsResult](#describereservedinstanceslistingsresult)

### DescribeReservedInstancesModifications



```js
amazonaws_ec2.DescribeReservedInstancesModifications({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * ReservedInstancesModificationId `array`
  * NextToken `string`

#### Output
* output [DescribeReservedInstancesModificationsResult](#describereservedinstancesmodificationsresult)

### DescribeReservedInstancesModifications



```js
amazonaws_ec2.DescribeReservedInstancesModifications({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * Filters
    * items
      * Name
      * Values
        * items
  * NextToken
  * ReservedInstancesModificationIds
    * items

#### Output
* output [DescribeReservedInstancesModificationsResult](#describereservedinstancesmodificationsresult)

### DescribeReservedInstancesOfferings



```js
amazonaws_ec2.DescribeReservedInstancesOfferings({}, context)
```

#### Input
* input `object`
  * AvailabilityZone `string`
  * Filter `array`
  * IncludeMarketplace `boolean`
  * InstanceType `string`
  * MaxDuration `integer`
  * MaxInstanceCount `integer`
  * MinDuration `integer`
  * OfferingClass `string`
  * ProductDescription `string`
  * ReservedInstancesOfferingId `array`
  * DryRun `boolean`
  * InstanceTenancy `string`
  * MaxResults `integer`
  * NextToken `string`
  * OfferingType `string`

#### Output
* output [DescribeReservedInstancesOfferingsResult](#describereservedinstancesofferingsresult)

### DescribeReservedInstancesOfferings



```js
amazonaws_ec2.DescribeReservedInstancesOfferings({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AvailabilityZone
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * IncludeMarketplace
  * InstanceTenancy
  * InstanceType
  * MaxDuration
  * MaxInstanceCount
  * MaxResults
  * MinDuration
  * NextToken
  * OfferingClass
  * OfferingType
  * ProductDescription
  * ReservedInstancesOfferingIds
    * items [ReservedInstancesOfferingId](#reservedinstancesofferingid)

#### Output
* output [DescribeReservedInstancesOfferingsResult](#describereservedinstancesofferingsresult)

### DescribeRouteTables



```js
amazonaws_ec2.DescribeRouteTables({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * RouteTableId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeRouteTablesResult](#describeroutetablesresult)

### DescribeRouteTables



```js
amazonaws_ec2.DescribeRouteTables({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * RouteTableIds
    * items

#### Output
* output [DescribeRouteTablesResult](#describeroutetablesresult)

### DescribeScheduledInstanceAvailability



```js
amazonaws_ec2.DescribeScheduledInstanceAvailability({
  "FirstSlotStartTimeRange": {},
  "Recurrence": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * FirstSlotStartTimeRange **required** `object`
  * MaxResults `integer`
  * MaxSlotDurationInHours `integer`
  * MinSlotDurationInHours `integer`
  * NextToken `string`
  * Recurrence **required** `object`

#### Output
* output [DescribeScheduledInstanceAvailabilityResult](#describescheduledinstanceavailabilityresult)

### DescribeScheduledInstanceAvailability



```js
amazonaws_ec2.DescribeScheduledInstanceAvailability({
  "FirstSlotStartTimeRange": null,
  "Recurrence": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FirstSlotStartTimeRange **required**
    * EarliestTime **required**
    * LatestTime **required**
  * MaxResults
  * MaxSlotDurationInHours
  * MinSlotDurationInHours
  * NextToken
  * Recurrence **required**
    * Frequency
    * Interval
    * OccurrenceDays
      * items
    * OccurrenceRelativeToEnd
    * OccurrenceUnit

#### Output
* output [DescribeScheduledInstanceAvailabilityResult](#describescheduledinstanceavailabilityresult)

### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * ScheduledInstanceId `array`
  * SlotStartTimeRange `object`

#### Output
* output [DescribeScheduledInstancesResult](#describescheduledinstancesresult)

### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ScheduledInstanceIds
    * items
  * SlotStartTimeRange
    * EarliestTime
    * LatestTime

#### Output
* output [DescribeScheduledInstancesResult](#describescheduledinstancesresult)

### DescribeSecurityGroupReferences



```js
amazonaws_ec2.DescribeSecurityGroupReferences({
  "GroupId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupId **required** `array`

#### Output
* output [DescribeSecurityGroupReferencesResult](#describesecuritygroupreferencesresult)

### DescribeSecurityGroupReferences



```js
amazonaws_ec2.DescribeSecurityGroupReferences({
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupId **required**
    * items

#### Output
* output [DescribeSecurityGroupReferencesResult](#describesecuritygroupreferencesresult)

### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * GroupId `array`
  * GroupName `array`
  * DryRun `boolean`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeSecurityGroupsResult](#describesecuritygroupsresult)

### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * GroupIds
    * items
  * GroupNames
    * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeSecurityGroupsResult](#describesecuritygroupsresult)

### DescribeSnapshotAttribute



```js
amazonaws_ec2.DescribeSnapshotAttribute({
  "Attribute": "",
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * SnapshotId **required** `string`
  * DryRun `boolean`

#### Output
* output [DescribeSnapshotAttributeResult](#describesnapshotattributeresult)

### DescribeSnapshotAttribute



```js
amazonaws_ec2.DescribeSnapshotAttribute({
  "Attribute": null,
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * SnapshotId **required**

#### Output
* output [DescribeSnapshotAttributeResult](#describesnapshotattributeresult)

### DescribeSnapshots



```js
amazonaws_ec2.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * Owner `array`
  * RestorableBy `array`
  * SnapshotId `array`
  * DryRun `boolean`

#### Output
* output [DescribeSnapshotsResult](#describesnapshotsresult)

### DescribeSnapshots



```js
amazonaws_ec2.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * OwnerIds
    * items
  * RestorableByUserIds
    * items [String](#string)
  * SnapshotIds
    * items

#### Output
* output [DescribeSnapshotsResult](#describesnapshotsresult)

### DescribeSpotDatafeedSubscription



```js
amazonaws_ec2.DescribeSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [DescribeSpotDatafeedSubscriptionResult](#describespotdatafeedsubscriptionresult)

### DescribeSpotDatafeedSubscription



```js
amazonaws_ec2.DescribeSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [DescribeSpotDatafeedSubscriptionResult](#describespotdatafeedsubscriptionresult)

### DescribeSpotFleetInstances



```js
amazonaws_ec2.DescribeSpotFleetInstances({
  "SpotFleetRequestId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * SpotFleetRequestId **required** `string`

#### Output
* output [DescribeSpotFleetInstancesResponse](#describespotfleetinstancesresponse)

### DescribeSpotFleetInstances



```js
amazonaws_ec2.DescribeSpotFleetInstances({
  "SpotFleetRequestId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * MaxResults
  * NextToken
  * SpotFleetRequestId **required**

#### Output
* output [DescribeSpotFleetInstancesResponse](#describespotfleetinstancesresponse)

### DescribeSpotFleetRequestHistory



```js
amazonaws_ec2.DescribeSpotFleetRequestHistory({
  "SpotFleetRequestId": "",
  "StartTime": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * EventType `string`
  * MaxResults `integer`
  * NextToken `string`
  * SpotFleetRequestId **required** `string`
  * StartTime **required** `string`

#### Output
* output [DescribeSpotFleetRequestHistoryResponse](#describespotfleetrequesthistoryresponse)

### DescribeSpotFleetRequestHistory



```js
amazonaws_ec2.DescribeSpotFleetRequestHistory({
  "SpotFleetRequestId": null,
  "StartTime": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * EventType
  * MaxResults
  * NextToken
  * SpotFleetRequestId **required**
  * StartTime **required**

#### Output
* output [DescribeSpotFleetRequestHistoryResponse](#describespotfleetrequesthistoryresponse)

### DescribeSpotFleetRequests



```js
amazonaws_ec2.DescribeSpotFleetRequests({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * SpotFleetRequestId `array`

#### Output
* output [DescribeSpotFleetRequestsResponse](#describespotfleetrequestsresponse)

### DescribeSpotFleetRequests



```js
amazonaws_ec2.DescribeSpotFleetRequests({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * SpotFleetRequestIds
    * items

#### Output
* output [DescribeSpotFleetRequestsResponse](#describespotfleetrequestsresponse)

### DescribeSpotInstanceRequests



```js
amazonaws_ec2.DescribeSpotInstanceRequests({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * SpotInstanceRequestId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeSpotInstanceRequestsResult](#describespotinstancerequestsresult)

### DescribeSpotInstanceRequests



```js
amazonaws_ec2.DescribeSpotInstanceRequests({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * SpotInstanceRequestIds
    * items

#### Output
* output [DescribeSpotInstanceRequestsResult](#describespotinstancerequestsresult)

### DescribeSpotPriceHistory



```js
amazonaws_ec2.DescribeSpotPriceHistory({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * AvailabilityZone `string`
  * DryRun `boolean`
  * EndTime `string`
  * InstanceType `array`
  * MaxResults `integer`
  * NextToken `string`
  * ProductDescription `array`
  * StartTime `string`

#### Output
* output [DescribeSpotPriceHistoryResult](#describespotpricehistoryresult)

### DescribeSpotPriceHistory



```js
amazonaws_ec2.DescribeSpotPriceHistory({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AvailabilityZone
  * DryRun
  * EndTime
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceTypes
    * items [InstanceType](#instancetype)
  * MaxResults
  * NextToken
  * ProductDescriptions
    * items [String](#string)
  * StartTime

#### Output
* output [DescribeSpotPriceHistoryResult](#describespotpricehistoryresult)

### DescribeStaleSecurityGroups



```js
amazonaws_ec2.DescribeStaleSecurityGroups({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`
  * VpcId **required** `string`

#### Output
* output [DescribeStaleSecurityGroupsResult](#describestalesecuritygroupsresult)

### DescribeStaleSecurityGroups



```js
amazonaws_ec2.DescribeStaleSecurityGroups({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * VpcId **required**

#### Output
* output [DescribeStaleSecurityGroupsResult](#describestalesecuritygroupsresult)

### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * SubnetId `array`
  * DryRun `boolean`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeSubnetsResult](#describesubnetsresult)

### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * SubnetIds
    * items

#### Output
* output [DescribeSubnetsResult](#describesubnetsresult)

### DescribeTags



```js
amazonaws_ec2.DescribeTags({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeTags



```js
amazonaws_ec2.DescribeTags({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeTrafficMirrorFilters



```js
amazonaws_ec2.DescribeTrafficMirrorFilters({}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterId `array`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeTrafficMirrorFiltersResult](#describetrafficmirrorfiltersresult)

### DescribeTrafficMirrorFilters



```js
amazonaws_ec2.DescribeTrafficMirrorFilters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorFilterIds
    * items

#### Output
* output [DescribeTrafficMirrorFiltersResult](#describetrafficmirrorfiltersresult)

### DescribeTrafficMirrorSessions



```js
amazonaws_ec2.DescribeTrafficMirrorSessions({}, context)
```

#### Input
* input `object`
  * TrafficMirrorSessionId `array`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeTrafficMirrorSessionsResult](#describetrafficmirrorsessionsresult)

### DescribeTrafficMirrorSessions



```js
amazonaws_ec2.DescribeTrafficMirrorSessions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorSessionIds
    * items

#### Output
* output [DescribeTrafficMirrorSessionsResult](#describetrafficmirrorsessionsresult)

### DescribeTrafficMirrorTargets



```js
amazonaws_ec2.DescribeTrafficMirrorTargets({}, context)
```

#### Input
* input `object`
  * TrafficMirrorTargetId `array`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeTrafficMirrorTargetsResult](#describetrafficmirrortargetsresult)

### DescribeTrafficMirrorTargets



```js
amazonaws_ec2.DescribeTrafficMirrorTargets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorTargetIds
    * items

#### Output
* output [DescribeTrafficMirrorTargetsResult](#describetrafficmirrortargetsresult)

### DescribeTransitGatewayAttachments



```js
amazonaws_ec2.DescribeTransitGatewayAttachments({}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayAttachmentsResult](#describetransitgatewayattachmentsresult)

### DescribeTransitGatewayAttachments



```js
amazonaws_ec2.DescribeTransitGatewayAttachments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

#### Output
* output [DescribeTransitGatewayAttachmentsResult](#describetransitgatewayattachmentsresult)

### DescribeTransitGatewayConnectPeers



```js
amazonaws_ec2.DescribeTransitGatewayConnectPeers({}, context)
```

#### Input
* input `object`
  * TransitGatewayConnectPeerIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayConnectPeersResult](#describetransitgatewayconnectpeersresult)

### DescribeTransitGatewayConnectPeers



```js
amazonaws_ec2.DescribeTransitGatewayConnectPeers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayConnectPeerIds
    * items

#### Output
* output [DescribeTransitGatewayConnectPeersResult](#describetransitgatewayconnectpeersresult)

### DescribeTransitGatewayConnects



```js
amazonaws_ec2.DescribeTransitGatewayConnects({}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayConnectsResult](#describetransitgatewayconnectsresult)

### DescribeTransitGatewayConnects



```js
amazonaws_ec2.DescribeTransitGatewayConnects({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

#### Output
* output [DescribeTransitGatewayConnectsResult](#describetransitgatewayconnectsresult)

### DescribeTransitGatewayMulticastDomains



```js
amazonaws_ec2.DescribeTransitGatewayMulticastDomains({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayMulticastDomainsResult](#describetransitgatewaymulticastdomainsresult)

### DescribeTransitGatewayMulticastDomains



```js
amazonaws_ec2.DescribeTransitGatewayMulticastDomains({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainIds
    * items

#### Output
* output [DescribeTransitGatewayMulticastDomainsResult](#describetransitgatewaymulticastdomainsresult)

### DescribeTransitGatewayPeeringAttachments



```js
amazonaws_ec2.DescribeTransitGatewayPeeringAttachments({}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayPeeringAttachmentsResult](#describetransitgatewaypeeringattachmentsresult)

### DescribeTransitGatewayPeeringAttachments



```js
amazonaws_ec2.DescribeTransitGatewayPeeringAttachments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

#### Output
* output [DescribeTransitGatewayPeeringAttachmentsResult](#describetransitgatewaypeeringattachmentsresult)

### DescribeTransitGatewayRouteTables



```js
amazonaws_ec2.DescribeTransitGatewayRouteTables({}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayRouteTablesResult](#describetransitgatewayroutetablesresult)

### DescribeTransitGatewayRouteTables



```js
amazonaws_ec2.DescribeTransitGatewayRouteTables({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableIds
    * items

#### Output
* output [DescribeTransitGatewayRouteTablesResult](#describetransitgatewayroutetablesresult)

### DescribeTransitGatewayVpcAttachments



```js
amazonaws_ec2.DescribeTransitGatewayVpcAttachments({}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewayVpcAttachmentsResult](#describetransitgatewayvpcattachmentsresult)

### DescribeTransitGatewayVpcAttachments



```js
amazonaws_ec2.DescribeTransitGatewayVpcAttachments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

#### Output
* output [DescribeTransitGatewayVpcAttachmentsResult](#describetransitgatewayvpcattachmentsresult)

### DescribeTransitGateways



```js
amazonaws_ec2.DescribeTransitGateways({}, context)
```

#### Input
* input `object`
  * TransitGatewayIds `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [DescribeTransitGatewaysResult](#describetransitgatewaysresult)

### DescribeTransitGateways



```js
amazonaws_ec2.DescribeTransitGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayIds
    * items

#### Output
* output [DescribeTransitGatewaysResult](#describetransitgatewaysresult)

### DescribeVolumeAttribute



```js
amazonaws_ec2.DescribeVolumeAttribute({
  "Attribute": "",
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * VolumeId **required** `string`
  * DryRun `boolean`

#### Output
* output [DescribeVolumeAttributeResult](#describevolumeattributeresult)

### DescribeVolumeAttribute



```js
amazonaws_ec2.DescribeVolumeAttribute({
  "Attribute": null,
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * VolumeId **required**

#### Output
* output [DescribeVolumeAttributeResult](#describevolumeattributeresult)

### DescribeVolumeStatus



```js
amazonaws_ec2.DescribeVolumeStatus({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * VolumeId `array`
  * DryRun `boolean`

#### Output
* output [DescribeVolumeStatusResult](#describevolumestatusresult)

### DescribeVolumeStatus



```js
amazonaws_ec2.DescribeVolumeStatus({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

#### Output
* output [DescribeVolumeStatusResult](#describevolumestatusresult)

### DescribeVolumes



```js
amazonaws_ec2.DescribeVolumes({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * VolumeId `array`
  * DryRun `boolean`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVolumesResult](#describevolumesresult)

### DescribeVolumes



```js
amazonaws_ec2.DescribeVolumes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

#### Output
* output [DescribeVolumesResult](#describevolumesresult)

### DescribeVolumesModifications



```js
amazonaws_ec2.DescribeVolumesModifications({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VolumeId `array`
  * Filter `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeVolumesModificationsResult](#describevolumesmodificationsresult)

### DescribeVolumesModifications



```js
amazonaws_ec2.DescribeVolumesModifications({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

#### Output
* output [DescribeVolumesModificationsResult](#describevolumesmodificationsresult)

### DescribeVpcAttribute



```js
amazonaws_ec2.DescribeVpcAttribute({
  "Attribute": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * VpcId **required** `string`
  * DryRun `boolean`

#### Output
* output [DescribeVpcAttributeResult](#describevpcattributeresult)

### DescribeVpcAttribute



```js
amazonaws_ec2.DescribeVpcAttribute({
  "Attribute": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * VpcId **required**

#### Output
* output [DescribeVpcAttributeResult](#describevpcattributeresult)

### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * VpcId `array`

#### Output
* output [DescribeVpcClassicLinkResult](#describevpcclassiclinkresult)

### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpcIds
    * items

#### Output
* output [DescribeVpcClassicLinkResult](#describevpcclassiclinkresult)

### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`
  * VpcIds `array`

#### Output
* output [DescribeVpcClassicLinkDnsSupportResult](#describevpcclassiclinkdnssupportresult)

### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * VpcIds
    * items

#### Output
* output [DescribeVpcClassicLinkDnsSupportResult](#describevpcclassiclinkdnssupportresult)

### DescribeVpcEndpointConnectionNotifications



```js
amazonaws_ec2.DescribeVpcEndpointConnectionNotifications({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ConnectionNotificationId `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointConnectionNotificationsResult](#describevpcendpointconnectionnotificationsresult)

### DescribeVpcEndpointConnectionNotifications



```js
amazonaws_ec2.DescribeVpcEndpointConnectionNotifications({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ConnectionNotificationId
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeVpcEndpointConnectionNotificationsResult](#describevpcendpointconnectionnotificationsresult)

### DescribeVpcEndpointConnections



```js
amazonaws_ec2.DescribeVpcEndpointConnections({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointConnectionsResult](#describevpcendpointconnectionsresult)

### DescribeVpcEndpointConnections



```js
amazonaws_ec2.DescribeVpcEndpointConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

#### Output
* output [DescribeVpcEndpointConnectionsResult](#describevpcendpointconnectionsresult)

### DescribeVpcEndpointServiceConfigurations



```js
amazonaws_ec2.DescribeVpcEndpointServiceConfigurations({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointServiceConfigurationsResult](#describevpcendpointserviceconfigurationsresult)

### DescribeVpcEndpointServiceConfigurations



```js
amazonaws_ec2.DescribeVpcEndpointServiceConfigurations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceIds
    * items

#### Output
* output [DescribeVpcEndpointServiceConfigurationsResult](#describevpcendpointserviceconfigurationsresult)

### DescribeVpcEndpointServicePermissions



```js
amazonaws_ec2.DescribeVpcEndpointServicePermissions({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointServicePermissionsResult](#describevpcendpointservicepermissionsresult)

### DescribeVpcEndpointServicePermissions



```js
amazonaws_ec2.DescribeVpcEndpointServicePermissions({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceId **required**

#### Output
* output [DescribeVpcEndpointServicePermissionsResult](#describevpcendpointservicepermissionsresult)

### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceName `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointServicesResult](#describevpcendpointservicesresult)

### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceNames
    * items

#### Output
* output [DescribeVpcEndpointServicesResult](#describevpcendpointservicesresult)

### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcEndpointId `array`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [DescribeVpcEndpointsResult](#describevpcendpointsresult)

### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcEndpointIds
    * items

#### Output
* output [DescribeVpcEndpointsResult](#describevpcendpointsresult)

### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * DryRun `boolean`
  * VpcPeeringConnectionId `array`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeVpcPeeringConnectionsResult](#describevpcpeeringconnectionsresult)

### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcPeeringConnectionIds
    * items

#### Output
* output [DescribeVpcPeeringConnectionsResult](#describevpcpeeringconnectionsresult)

### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * VpcId `array`
  * DryRun `boolean`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [DescribeVpcsResult](#describevpcsresult)

### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcIds
    * items

#### Output
* output [DescribeVpcsResult](#describevpcsresult)

### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * VpnConnectionId `array`
  * DryRun `boolean`

#### Output
* output [DescribeVpnConnectionsResult](#describevpnconnectionsresult)

### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpnConnectionIds
    * items

#### Output
* output [DescribeVpnConnectionsResult](#describevpnconnectionsresult)

### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```

#### Input
* input `object`
  * Filter `array`
  * VpnGatewayId `array`
  * DryRun `boolean`

#### Output
* output [DescribeVpnGatewaysResult](#describevpngatewaysresult)

### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpnGatewayIds
    * items

#### Output
* output [DescribeVpnGatewaysResult](#describevpngatewaysresult)

### DetachClassicLinkVpc



```js
amazonaws_ec2.DetachClassicLinkVpc({
  "InstanceId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceId **required** `string`
  * VpcId **required** `string`

#### Output
* output [DetachClassicLinkVpcResult](#detachclassiclinkvpcresult)

### DetachClassicLinkVpc



```js
amazonaws_ec2.DetachClassicLinkVpc({
  "InstanceId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**
  * VpcId **required**

#### Output
* output [DetachClassicLinkVpcResult](#detachclassiclinkvpcresult)

### DetachInternetGateway



```js
amazonaws_ec2.DetachInternetGateway({
  "InternetGatewayId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InternetGatewayId **required** `string`
  * VpcId **required** `string`

#### Output
*Output schema unknown*

### DetachInternetGateway



```js
amazonaws_ec2.DetachInternetGateway({
  "InternetGatewayId": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InternetGatewayId **required**
  * VpcId **required**

#### Output
*Output schema unknown*

### DetachNetworkInterface



```js
amazonaws_ec2.DetachNetworkInterface({
  "AttachmentId": ""
}, context)
```

#### Input
* input `object`
  * AttachmentId **required** `string`
  * DryRun `boolean`
  * Force `boolean`

#### Output
*Output schema unknown*

### DetachNetworkInterface



```js
amazonaws_ec2.DetachNetworkInterface({
  "AttachmentId": null
}, context)
```

#### Input
* input `object`
  * AttachmentId **required**
  * DryRun
  * Force

#### Output
*Output schema unknown*

### DetachVolume



```js
amazonaws_ec2.DetachVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * Device `string`
  * Force `boolean`
  * InstanceId `string`
  * VolumeId **required** `string`
  * DryRun `boolean`

#### Output
* output [VolumeAttachment](#volumeattachment)

### DetachVolume



```js
amazonaws_ec2.DetachVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * Device
  * DryRun
  * Force
  * InstanceId
  * VolumeId **required**

#### Output
* output [VolumeAttachment](#volumeattachment)

### DetachVpnGateway



```js
amazonaws_ec2.DetachVpnGateway({
  "VpcId": "",
  "VpnGatewayId": ""
}, context)
```

#### Input
* input `object`
  * VpcId **required** `string`
  * VpnGatewayId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DetachVpnGateway



```js
amazonaws_ec2.DetachVpnGateway({
  "VpcId": null,
  "VpnGatewayId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcId **required**
  * VpnGatewayId **required**

#### Output
*Output schema unknown*

### DisableEbsEncryptionByDefault



```js
amazonaws_ec2.DisableEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [DisableEbsEncryptionByDefaultResult](#disableebsencryptionbydefaultresult)

### DisableEbsEncryptionByDefault



```js
amazonaws_ec2.DisableEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [DisableEbsEncryptionByDefaultResult](#disableebsencryptionbydefaultresult)

### DisableFastSnapshotRestores



```js
amazonaws_ec2.DisableFastSnapshotRestores({
  "AvailabilityZone": [],
  "SourceSnapshotId": []
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** `array`
  * SourceSnapshotId **required** `array`
  * DryRun `boolean`

#### Output
* output [DisableFastSnapshotRestoresResult](#disablefastsnapshotrestoresresult)

### DisableFastSnapshotRestores



```js
amazonaws_ec2.DisableFastSnapshotRestores({
  "AvailabilityZones": null,
  "SourceSnapshotIds": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones **required**
    * items
  * DryRun
  * SourceSnapshotIds **required**
    * items

#### Output
* output [DisableFastSnapshotRestoresResult](#disablefastsnapshotrestoresresult)

### DisableTransitGatewayRouteTablePropagation



```js
amazonaws_ec2.DisableTransitGatewayRouteTablePropagation({
  "TransitGatewayRouteTableId": "",
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [DisableTransitGatewayRouteTablePropagationResult](#disabletransitgatewayroutetablepropagationresult)

### DisableTransitGatewayRouteTablePropagation



```js
amazonaws_ec2.DisableTransitGatewayRouteTablePropagation({
  "TransitGatewayRouteTableId": null,
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [DisableTransitGatewayRouteTablePropagationResult](#disabletransitgatewayroutetablepropagationresult)

### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * GatewayId **required** `string`
  * RouteTableId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({
  "GatewayId": null,
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GatewayId **required**
  * RouteTableId **required**

#### Output
*Output schema unknown*

### DisableVpcClassicLink



```js
amazonaws_ec2.DisableVpcClassicLink({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcId **required** `string`

#### Output
* output [DisableVpcClassicLinkResult](#disablevpcclassiclinkresult)

### DisableVpcClassicLink



```js
amazonaws_ec2.DisableVpcClassicLink({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcId **required**

#### Output
* output [DisableVpcClassicLinkResult](#disablevpcclassiclinkresult)

### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId `string`

#### Output
* output [DisableVpcClassicLinkDnsSupportResult](#disablevpcclassiclinkdnssupportresult)

### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId

#### Output
* output [DisableVpcClassicLinkDnsSupportResult](#disablevpcclassiclinkdnssupportresult)

### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```

#### Input
* input `object`
  * AssociationId `string`
  * PublicIp `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```

#### Input
* input `object`
  * AssociationId
  * DryRun
  * PublicIp

#### Output
*Output schema unknown*

### DisassociateClientVpnTargetNetwork



```js
amazonaws_ec2.DisassociateClientVpnTargetNetwork({
  "ClientVpnEndpointId": "",
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * AssociationId **required** `string`
  * DryRun `boolean`

#### Output
* output [DisassociateClientVpnTargetNetworkResult](#disassociateclientvpntargetnetworkresult)

### DisassociateClientVpnTargetNetwork



```js
amazonaws_ec2.DisassociateClientVpnTargetNetwork({
  "ClientVpnEndpointId": null,
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**
  * ClientVpnEndpointId **required**
  * DryRun

#### Output
* output [DisassociateClientVpnTargetNetworkResult](#disassociateclientvpntargetnetworkresult)

### DisassociateEnclaveCertificateIamRole



```js
amazonaws_ec2.DisassociateEnclaveCertificateIamRole({}, context)
```

#### Input
* input `object`
  * CertificateArn `string`
  * RoleArn `string`
  * DryRun `boolean`

#### Output
* output [DisassociateEnclaveCertificateIamRoleResult](#disassociateenclavecertificateiamroleresult)

### DisassociateEnclaveCertificateIamRole



```js
amazonaws_ec2.DisassociateEnclaveCertificateIamRole({}, context)
```

#### Input
* input `object`
  * CertificateArn
  * DryRun
  * RoleArn

#### Output
* output [DisassociateEnclaveCertificateIamRoleResult](#disassociateenclavecertificateiamroleresult)

### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`

#### Output
* output [DisassociateIamInstanceProfileResult](#disassociateiaminstanceprofileresult)

### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**

#### Output
* output [DisassociateIamInstanceProfileResult](#disassociateiaminstanceprofileresult)

### DisassociateRouteTable



```js
amazonaws_ec2.DisassociateRouteTable({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### DisassociateRouteTable



```js
amazonaws_ec2.DisassociateRouteTable({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**
  * DryRun

#### Output
*Output schema unknown*

### DisassociateSubnetCidrBlock



```js
amazonaws_ec2.DisassociateSubnetCidrBlock({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`

#### Output
* output [DisassociateSubnetCidrBlockResult](#disassociatesubnetcidrblockresult)

### DisassociateSubnetCidrBlock



```js
amazonaws_ec2.DisassociateSubnetCidrBlock({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**

#### Output
* output [DisassociateSubnetCidrBlockResult](#disassociatesubnetcidrblockresult)

### DisassociateTransitGatewayMulticastDomain



```js
amazonaws_ec2.DisassociateTransitGatewayMulticastDomain({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * TransitGatewayAttachmentId `string`
  * SubnetIds `array`
  * DryRun `boolean`

#### Output
* output [DisassociateTransitGatewayMulticastDomainResult](#disassociatetransitgatewaymulticastdomainresult)

### DisassociateTransitGatewayMulticastDomain



```js
amazonaws_ec2.DisassociateTransitGatewayMulticastDomain({}, context)
```

#### Input
* input `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

#### Output
* output [DisassociateTransitGatewayMulticastDomainResult](#disassociatetransitgatewaymulticastdomainresult)

### DisassociateTransitGatewayRouteTable



```js
amazonaws_ec2.DisassociateTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": "",
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [DisassociateTransitGatewayRouteTableResult](#disassociatetransitgatewayroutetableresult)

### DisassociateTransitGatewayRouteTable



```js
amazonaws_ec2.DisassociateTransitGatewayRouteTable({
  "TransitGatewayRouteTableId": null,
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [DisassociateTransitGatewayRouteTableResult](#disassociatetransitgatewayroutetableresult)

### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`

#### Output
* output [DisassociateVpcCidrBlockResult](#disassociatevpccidrblockresult)

### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**

#### Output
* output [DisassociateVpcCidrBlockResult](#disassociatevpccidrblockresult)

### EnableEbsEncryptionByDefault



```js
amazonaws_ec2.EnableEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [EnableEbsEncryptionByDefaultResult](#enableebsencryptionbydefaultresult)

### EnableEbsEncryptionByDefault



```js
amazonaws_ec2.EnableEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [EnableEbsEncryptionByDefaultResult](#enableebsencryptionbydefaultresult)

### EnableFastSnapshotRestores



```js
amazonaws_ec2.EnableFastSnapshotRestores({
  "AvailabilityZone": [],
  "SourceSnapshotId": []
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** `array`
  * SourceSnapshotId **required** `array`
  * DryRun `boolean`

#### Output
* output [EnableFastSnapshotRestoresResult](#enablefastsnapshotrestoresresult)

### EnableFastSnapshotRestores



```js
amazonaws_ec2.EnableFastSnapshotRestores({
  "AvailabilityZones": null,
  "SourceSnapshotIds": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZones **required**
    * items
  * DryRun
  * SourceSnapshotIds **required**
    * items

#### Output
* output [EnableFastSnapshotRestoresResult](#enablefastsnapshotrestoresresult)

### EnableTransitGatewayRouteTablePropagation



```js
amazonaws_ec2.EnableTransitGatewayRouteTablePropagation({
  "TransitGatewayRouteTableId": "",
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [EnableTransitGatewayRouteTablePropagationResult](#enabletransitgatewayroutetablepropagationresult)

### EnableTransitGatewayRouteTablePropagation



```js
amazonaws_ec2.EnableTransitGatewayRouteTablePropagation({
  "TransitGatewayRouteTableId": null,
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [EnableTransitGatewayRouteTablePropagationResult](#enabletransitgatewayroutetablepropagationresult)

### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * GatewayId **required** `string`
  * RouteTableId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({
  "GatewayId": null,
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GatewayId **required**
  * RouteTableId **required**

#### Output
*Output schema unknown*

### EnableVolumeIO



```js
amazonaws_ec2.EnableVolumeIO({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VolumeId **required** `string`

#### Output
*Output schema unknown*

### EnableVolumeIO



```js
amazonaws_ec2.EnableVolumeIO({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VolumeId **required**

#### Output
*Output schema unknown*

### EnableVpcClassicLink



```js
amazonaws_ec2.EnableVpcClassicLink({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcId **required** `string`

#### Output
* output [EnableVpcClassicLinkResult](#enablevpcclassiclinkresult)

### EnableVpcClassicLink



```js
amazonaws_ec2.EnableVpcClassicLink({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcId **required**

#### Output
* output [EnableVpcClassicLinkResult](#enablevpcclassiclinkresult)

### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId `string`

#### Output
* output [EnableVpcClassicLinkDnsSupportResult](#enablevpcclassiclinkdnssupportresult)

### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId

#### Output
* output [EnableVpcClassicLinkDnsSupportResult](#enablevpcclassiclinkdnssupportresult)

### ExportClientVpnClientCertificateRevocationList



```js
amazonaws_ec2.ExportClientVpnClientCertificateRevocationList({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * DryRun `boolean`

#### Output
* output [ExportClientVpnClientCertificateRevocationListResult](#exportclientvpnclientcertificaterevocationlistresult)

### ExportClientVpnClientCertificateRevocationList



```js
amazonaws_ec2.ExportClientVpnClientCertificateRevocationList({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * DryRun

#### Output
* output [ExportClientVpnClientCertificateRevocationListResult](#exportclientvpnclientcertificaterevocationlistresult)

### ExportClientVpnClientConfiguration



```js
amazonaws_ec2.ExportClientVpnClientConfiguration({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * DryRun `boolean`

#### Output
* output [ExportClientVpnClientConfigurationResult](#exportclientvpnclientconfigurationresult)

### ExportClientVpnClientConfiguration



```js
amazonaws_ec2.ExportClientVpnClientConfiguration({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * DryRun

#### Output
* output [ExportClientVpnClientConfigurationResult](#exportclientvpnclientconfigurationresult)

### ExportImage



```js
amazonaws_ec2.ExportImage({
  "DiskImageFormat": "",
  "ImageId": "",
  "S3ExportLocation": {}
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * Description `string`
  * DiskImageFormat **required** `string`
  * DryRun `boolean`
  * ImageId **required** `string`
  * S3ExportLocation **required** `object`
  * RoleName `string`
  * TagSpecification `array`

#### Output
* output [ExportImageResult](#exportimageresult)

### ExportImage



```js
amazonaws_ec2.ExportImage({
  "DiskImageFormat": null,
  "ImageId": null,
  "S3ExportLocation": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * Description
  * DiskImageFormat **required**
  * DryRun
  * ImageId **required**
  * RoleName
  * S3ExportLocation **required**
    * S3Bucket **required**
    * S3Prefix
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [ExportImageResult](#exportimageresult)

### ExportTransitGatewayRoutes



```js
amazonaws_ec2.ExportTransitGatewayRoutes({
  "TransitGatewayRouteTableId": "",
  "S3Bucket": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * Filter `array`
  * S3Bucket **required** `string`
  * DryRun `boolean`

#### Output
* output [ExportTransitGatewayRoutesResult](#exporttransitgatewayroutesresult)

### ExportTransitGatewayRoutes



```js
amazonaws_ec2.ExportTransitGatewayRoutes({
  "TransitGatewayRouteTableId": null,
  "S3Bucket": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * S3Bucket **required**
  * TransitGatewayRouteTableId **required**

#### Output
* output [ExportTransitGatewayRoutesResult](#exporttransitgatewayroutesresult)

### GetAssociatedEnclaveCertificateIamRoles



```js
amazonaws_ec2.GetAssociatedEnclaveCertificateIamRoles({}, context)
```

#### Input
* input `object`
  * CertificateArn `string`
  * DryRun `boolean`

#### Output
* output [GetAssociatedEnclaveCertificateIamRolesResult](#getassociatedenclavecertificateiamrolesresult)

### GetAssociatedEnclaveCertificateIamRoles



```js
amazonaws_ec2.GetAssociatedEnclaveCertificateIamRoles({}, context)
```

#### Input
* input `object`
  * CertificateArn
  * DryRun

#### Output
* output [GetAssociatedEnclaveCertificateIamRolesResult](#getassociatedenclavecertificateiamrolesresult)

### GetAssociatedIpv6PoolCidrs



```js
amazonaws_ec2.GetAssociatedIpv6PoolCidrs({
  "PoolId": ""
}, context)
```

#### Input
* input `object`
  * PoolId **required** `string`
  * NextToken `string`
  * MaxResults `integer`
  * DryRun `boolean`

#### Output
* output [GetAssociatedIpv6PoolCidrsResult](#getassociatedipv6poolcidrsresult)

### GetAssociatedIpv6PoolCidrs



```js
amazonaws_ec2.GetAssociatedIpv6PoolCidrs({
  "PoolId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * PoolId **required**

#### Output
* output [GetAssociatedIpv6PoolCidrsResult](#getassociatedipv6poolcidrsresult)

### GetCapacityReservationUsage



```js
amazonaws_ec2.GetCapacityReservationUsage({
  "CapacityReservationId": ""
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required** `string`
  * NextToken `string`
  * MaxResults `integer`
  * DryRun `boolean`

#### Output
* output [GetCapacityReservationUsageResult](#getcapacityreservationusageresult)

### GetCapacityReservationUsage



```js
amazonaws_ec2.GetCapacityReservationUsage({
  "CapacityReservationId": null
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required**
  * DryRun
  * MaxResults
  * NextToken

#### Output
* output [GetCapacityReservationUsageResult](#getcapacityreservationusageresult)

### GetCoipPoolUsage



```js
amazonaws_ec2.GetCoipPoolUsage({
  "PoolId": ""
}, context)
```

#### Input
* input `object`
  * PoolId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetCoipPoolUsageResult](#getcoippoolusageresult)

### GetCoipPoolUsage



```js
amazonaws_ec2.GetCoipPoolUsage({
  "PoolId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolId **required**

#### Output
* output [GetCoipPoolUsageResult](#getcoippoolusageresult)

### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * DryRun `boolean`
  * Latest `boolean`

#### Output
* output [GetConsoleOutputResult](#getconsoleoutputresult)

### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**
  * Latest

#### Output
* output [GetConsoleOutputResult](#getconsoleoutputresult)

### GetConsoleScreenshot



```js
amazonaws_ec2.GetConsoleScreenshot({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceId **required** `string`
  * WakeUp `boolean`

#### Output
* output [GetConsoleScreenshotResult](#getconsolescreenshotresult)

### GetConsoleScreenshot



```js
amazonaws_ec2.GetConsoleScreenshot({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**
  * WakeUp

#### Output
* output [GetConsoleScreenshotResult](#getconsolescreenshotresult)

### GetDefaultCreditSpecification



```js
amazonaws_ec2.GetDefaultCreditSpecification({
  "InstanceFamily": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceFamily **required** `string`

#### Output
* output [GetDefaultCreditSpecificationResult](#getdefaultcreditspecificationresult)

### GetDefaultCreditSpecification



```js
amazonaws_ec2.GetDefaultCreditSpecification({
  "InstanceFamily": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceFamily **required**

#### Output
* output [GetDefaultCreditSpecificationResult](#getdefaultcreditspecificationresult)

### GetEbsDefaultKmsKeyId



```js
amazonaws_ec2.GetEbsDefaultKmsKeyId({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [GetEbsDefaultKmsKeyIdResult](#getebsdefaultkmskeyidresult)

### GetEbsDefaultKmsKeyId



```js
amazonaws_ec2.GetEbsDefaultKmsKeyId({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [GetEbsDefaultKmsKeyIdResult](#getebsdefaultkmskeyidresult)

### GetEbsEncryptionByDefault



```js
amazonaws_ec2.GetEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [GetEbsEncryptionByDefaultResult](#getebsencryptionbydefaultresult)

### GetEbsEncryptionByDefault



```js
amazonaws_ec2.GetEbsEncryptionByDefault({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [GetEbsEncryptionByDefaultResult](#getebsencryptionbydefaultresult)

### GetGroupsForCapacityReservation



```js
amazonaws_ec2.GetGroupsForCapacityReservation({
  "CapacityReservationId": ""
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required** `string`
  * NextToken `string`
  * MaxResults `integer`
  * DryRun `boolean`

#### Output
* output [GetGroupsForCapacityReservationResult](#getgroupsforcapacityreservationresult)

### GetGroupsForCapacityReservation



```js
amazonaws_ec2.GetGroupsForCapacityReservation({
  "CapacityReservationId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CapacityReservationId **required**
  * DryRun
  * MaxResults
  * NextToken

#### Output
* output [GetGroupsForCapacityReservationResult](#getgroupsforcapacityreservationresult)

### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Input
* input `object`
  * HostIdSet **required** `array`
  * OfferingId **required** `string`

#### Output
* output [GetHostReservationPurchasePreviewResult](#gethostreservationpurchasepreviewresult)

### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({
  "HostIdSet": null,
  "OfferingId": null
}, context)
```

#### Input
* input `object`
  * HostIdSet **required**
    * items
  * OfferingId **required**

#### Output
* output [GetHostReservationPurchasePreviewResult](#gethostreservationpurchasepreviewresult)

### GetLaunchTemplateData



```js
amazonaws_ec2.GetLaunchTemplateData({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceId **required** `string`

#### Output
* output [GetLaunchTemplateDataResult](#getlaunchtemplatedataresult)

### GetLaunchTemplateData



```js
amazonaws_ec2.GetLaunchTemplateData({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**

#### Output
* output [GetLaunchTemplateDataResult](#getlaunchtemplatedataresult)

### GetManagedPrefixListAssociations



```js
amazonaws_ec2.GetManagedPrefixListAssociations({
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListId **required** `string`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [GetManagedPrefixListAssociationsResult](#getmanagedprefixlistassociationsresult)

### GetManagedPrefixListAssociations



```js
amazonaws_ec2.GetManagedPrefixListAssociations({
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * PrefixListId **required**

#### Output
* output [GetManagedPrefixListAssociationsResult](#getmanagedprefixlistassociationsresult)

### GetManagedPrefixListEntries



```js
amazonaws_ec2.GetManagedPrefixListEntries({
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListId **required** `string`
  * TargetVersion `integer`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [GetManagedPrefixListEntriesResult](#getmanagedprefixlistentriesresult)

### GetManagedPrefixListEntries



```js
amazonaws_ec2.GetManagedPrefixListEntries({
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * MaxResults
  * NextToken
  * PrefixListId **required**
  * TargetVersion

#### Output
* output [GetManagedPrefixListEntriesResult](#getmanagedprefixlistentriesresult)

### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * DryRun `boolean`

#### Output
* output [GetPasswordDataResult](#getpassworddataresult)

### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**

#### Output
* output [GetPasswordDataResult](#getpassworddataresult)

### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({
  "ReservedInstanceId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ReservedInstanceId **required** `array`
  * TargetConfiguration `array`

#### Output
* output [GetReservedInstancesExchangeQuoteResult](#getreservedinstancesexchangequoteresult)

### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({
  "ReservedInstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ReservedInstanceIds **required**
    * items
  * TargetConfigurations
    * items
      * InstanceCount
      * OfferingId **required**

#### Output
* output [GetReservedInstancesExchangeQuoteResult](#getreservedinstancesexchangequoteresult)

### GetTransitGatewayAttachmentPropagations



```js
amazonaws_ec2.GetTransitGatewayAttachmentPropagations({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetTransitGatewayAttachmentPropagationsResult](#gettransitgatewayattachmentpropagationsresult)

### GetTransitGatewayAttachmentPropagations



```js
amazonaws_ec2.GetTransitGatewayAttachmentPropagations({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentId **required**

#### Output
* output [GetTransitGatewayAttachmentPropagationsResult](#gettransitgatewayattachmentpropagationsresult)

### GetTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.GetTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetTransitGatewayMulticastDomainAssociationsResult](#gettransitgatewaymulticastdomainassociationsresult)

### GetTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.GetTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainId

#### Output
* output [GetTransitGatewayMulticastDomainAssociationsResult](#gettransitgatewaymulticastdomainassociationsresult)

### GetTransitGatewayPrefixListReferences



```js
amazonaws_ec2.GetTransitGatewayPrefixListReferences({
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetTransitGatewayPrefixListReferencesResult](#gettransitgatewayprefixlistreferencesresult)

### GetTransitGatewayPrefixListReferences



```js
amazonaws_ec2.GetTransitGatewayPrefixListReferences({
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

#### Output
* output [GetTransitGatewayPrefixListReferencesResult](#gettransitgatewayprefixlistreferencesresult)

### GetTransitGatewayRouteTableAssociations



```js
amazonaws_ec2.GetTransitGatewayRouteTableAssociations({
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetTransitGatewayRouteTableAssociationsResult](#gettransitgatewayroutetableassociationsresult)

### GetTransitGatewayRouteTableAssociations



```js
amazonaws_ec2.GetTransitGatewayRouteTableAssociations({
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

#### Output
* output [GetTransitGatewayRouteTableAssociationsResult](#gettransitgatewayroutetableassociationsresult)

### GetTransitGatewayRouteTablePropagations



```js
amazonaws_ec2.GetTransitGatewayRouteTablePropagations({
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [GetTransitGatewayRouteTablePropagationsResult](#gettransitgatewayroutetablepropagationsresult)

### GetTransitGatewayRouteTablePropagations



```js
amazonaws_ec2.GetTransitGatewayRouteTablePropagations({
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

#### Output
* output [GetTransitGatewayRouteTablePropagationsResult](#gettransitgatewayroutetablepropagationsresult)

### ImportClientVpnClientCertificateRevocationList



```js
amazonaws_ec2.ImportClientVpnClientCertificateRevocationList({
  "ClientVpnEndpointId": "",
  "CertificateRevocationList": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * CertificateRevocationList **required** `string`
  * DryRun `boolean`

#### Output
* output [ImportClientVpnClientCertificateRevocationListResult](#importclientvpnclientcertificaterevocationlistresult)

### ImportClientVpnClientCertificateRevocationList



```js
amazonaws_ec2.ImportClientVpnClientCertificateRevocationList({
  "ClientVpnEndpointId": null,
  "CertificateRevocationList": null
}, context)
```

#### Input
* input `object`
  * CertificateRevocationList **required**
  * ClientVpnEndpointId **required**
  * DryRun

#### Output
* output [ImportClientVpnClientCertificateRevocationListResult](#importclientvpnclientcertificaterevocationlistresult)

### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```

#### Input
* input `object`
  * Architecture `string`
  * ClientData `object`
  * ClientToken `string`
  * Description `string`
  * DiskContainer `array`
  * DryRun `boolean`
  * Encrypted `boolean`
  * Hypervisor `string`
  * KmsKeyId `string`
  * LicenseType `string`
  * Platform `string`
  * RoleName `string`
  * LicenseSpecifications `array`
  * TagSpecification `array`

#### Output
* output [ImportImageResult](#importimageresult)

### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```

#### Input
* input `object`
  * Architecture
  * ClientData
    * Comment
    * UploadEnd
    * UploadSize
    * UploadStart
  * ClientToken
  * Description
  * DiskContainers
    * items
      * Description
      * DeviceName
      * Format
      * SnapshotId
      * Url
      * UserBucket
        * S3Bucket
        * S3Key
  * DryRun
  * Encrypted
  * Hypervisor
  * KmsKeyId
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * LicenseType
  * Platform
  * RoleName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [ImportImageResult](#importimageresult)

### ImportInstance



```js
amazonaws_ec2.ImportInstance({
  "Platform": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * DiskImage `array`
  * DryRun `boolean`
  * LaunchSpecification `object`
  * Platform **required** `string`

#### Output
* output [ImportInstanceResult](#importinstanceresult)

### ImportInstance



```js
amazonaws_ec2.ImportInstance({
  "Platform": null
}, context)
```

#### Input
* input `object`
  * Description
  * DiskImages
    * items [DiskImage](#diskimage)
  * DryRun
  * LaunchSpecification
    * AdditionalInfo
    * Architecture
    * GroupIds
      * items
    * GroupNames
      * items
    * InstanceInitiatedShutdownBehavior
    * InstanceType
    * Monitoring
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * PrivateIpAddress
    * SubnetId
    * UserData
      * Data
  * Platform **required**

#### Output
* output [ImportInstanceResult](#importinstanceresult)

### ImportKeyPair



```js
amazonaws_ec2.ImportKeyPair({
  "KeyName": "",
  "PublicKeyMaterial": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * KeyName **required** `string`
  * PublicKeyMaterial **required** `string`
  * TagSpecification `array`

#### Output
* output [ImportKeyPairResult](#importkeypairresult)

### ImportKeyPair



```js
amazonaws_ec2.ImportKeyPair({
  "KeyName": null,
  "PublicKeyMaterial": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * KeyName **required**
  * PublicKeyMaterial **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [ImportKeyPairResult](#importkeypairresult)

### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```

#### Input
* input `object`
  * ClientData `object`
  * ClientToken `string`
  * Description `string`
  * DiskContainer `object`
  * DryRun `boolean`
  * Encrypted `boolean`
  * KmsKeyId `string`
  * RoleName `string`
  * TagSpecification `array`

#### Output
* output [ImportSnapshotResult](#importsnapshotresult)

### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```

#### Input
* input `object`
  * ClientData
    * Comment
    * UploadEnd
    * UploadSize
    * UploadStart
  * ClientToken
  * Description
  * DiskContainer
    * Description
    * Format
    * Url
    * UserBucket
      * S3Bucket
      * S3Key
  * DryRun
  * Encrypted
  * KmsKeyId
  * RoleName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [ImportSnapshotResult](#importsnapshotresult)

### ImportVolume



```js
amazonaws_ec2.ImportVolume({
  "AvailabilityZone": "",
  "Image": {},
  "Volume": {}
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** `string`
  * Description `string`
  * DryRun `boolean`
  * Image **required** `object`
  * Volume **required** `object`

#### Output
* output [ImportVolumeResult](#importvolumeresult)

### ImportVolume



```js
amazonaws_ec2.ImportVolume({
  "AvailabilityZone": null,
  "Image": null,
  "Volume": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required**
  * Description
  * DryRun
  * Image **required**
    * Bytes **required**
    * Format **required**
    * ImportManifestUrl **required**
  * Volume **required**
    * Size **required**

#### Output
* output [ImportVolumeResult](#importvolumeresult)

### ModifyAvailabilityZoneGroup



```js
amazonaws_ec2.ModifyAvailabilityZoneGroup({
  "GroupName": "",
  "OptInStatus": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** `string`
  * OptInStatus **required** `string`
  * DryRun `boolean`

#### Output
* output [ModifyAvailabilityZoneGroupResult](#modifyavailabilityzonegroupresult)

### ModifyAvailabilityZoneGroup



```js
amazonaws_ec2.ModifyAvailabilityZoneGroup({
  "GroupName": null,
  "OptInStatus": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupName **required**
  * OptInStatus **required**

#### Output
* output [ModifyAvailabilityZoneGroupResult](#modifyavailabilityzonegroupresult)

### ModifyCapacityReservation



```js
amazonaws_ec2.ModifyCapacityReservation({
  "CapacityReservationId": ""
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required** `string`
  * InstanceCount `integer`
  * EndDate `string`
  * EndDateType `string`
  * DryRun `boolean`

#### Output
* output [ModifyCapacityReservationResult](#modifycapacityreservationresult)

### ModifyCapacityReservation



```js
amazonaws_ec2.ModifyCapacityReservation({
  "CapacityReservationId": null
}, context)
```

#### Input
* input `object`
  * CapacityReservationId **required**
  * DryRun
  * EndDate
  * EndDateType
  * InstanceCount

#### Output
* output [ModifyCapacityReservationResult](#modifycapacityreservationresult)

### ModifyClientVpnEndpoint



```js
amazonaws_ec2.ModifyClientVpnEndpoint({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * ServerCertificateArn `string`
  * ConnectionLogOptions `object`
  * DnsServers `object`
  * VpnPort `integer`
  * Description `string`
  * SplitTunnel `boolean`
  * DryRun `boolean`
  * SecurityGroupId `array`
  * VpcId `string`
  * SelfServicePortal `string`
  * ClientConnectOptions `object`

#### Output
* output [ModifyClientVpnEndpointResult](#modifyclientvpnendpointresult)

### ModifyClientVpnEndpoint



```js
amazonaws_ec2.ModifyClientVpnEndpoint({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * ClientConnectOptions
    * Enabled
    * LambdaFunctionArn
  * ClientVpnEndpointId **required**
  * ConnectionLogOptions
    * CloudwatchLogGroup
    * CloudwatchLogStream
    * Enabled
  * Description
  * DnsServers
    * CustomDnsServers
      * items
    * Enabled
  * DryRun
  * SecurityGroupIds
    * items
  * SelfServicePortal
  * ServerCertificateArn
  * SplitTunnel
  * VpcId
  * VpnPort

#### Output
* output [ModifyClientVpnEndpointResult](#modifyclientvpnendpointresult)

### ModifyDefaultCreditSpecification



```js
amazonaws_ec2.ModifyDefaultCreditSpecification({
  "InstanceFamily": "",
  "CpuCredits": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceFamily **required** `string`
  * CpuCredits **required** `string`

#### Output
* output [ModifyDefaultCreditSpecificationResult](#modifydefaultcreditspecificationresult)

### ModifyDefaultCreditSpecification



```js
amazonaws_ec2.ModifyDefaultCreditSpecification({
  "InstanceFamily": null,
  "CpuCredits": null
}, context)
```

#### Input
* input `object`
  * CpuCredits **required**
  * DryRun
  * InstanceFamily **required**

#### Output
* output [ModifyDefaultCreditSpecificationResult](#modifydefaultcreditspecificationresult)

### ModifyEbsDefaultKmsKeyId



```js
amazonaws_ec2.ModifyEbsDefaultKmsKeyId({
  "KmsKeyId": ""
}, context)
```

#### Input
* input `object`
  * KmsKeyId **required** `string`
  * DryRun `boolean`

#### Output
* output [ModifyEbsDefaultKmsKeyIdResult](#modifyebsdefaultkmskeyidresult)

### ModifyEbsDefaultKmsKeyId



```js
amazonaws_ec2.ModifyEbsDefaultKmsKeyId({
  "KmsKeyId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * KmsKeyId **required**

#### Output
* output [ModifyEbsDefaultKmsKeyIdResult](#modifyebsdefaultkmskeyidresult)

### ModifyFleet



```js
amazonaws_ec2.ModifyFleet({
  "FleetId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ExcessCapacityTerminationPolicy `string`
  * LaunchTemplateConfig `array`
  * FleetId **required** `string`
  * TargetCapacitySpecification `object`

#### Output
* output [ModifyFleetResult](#modifyfleetresult)

### ModifyFleet



```js
amazonaws_ec2.ModifyFleet({
  "FleetId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ExcessCapacityTerminationPolicy
  * FleetId **required**
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
  * TargetCapacitySpecification
    * DefaultTargetCapacityType
    * OnDemandTargetCapacity
    * SpotTargetCapacity
    * TotalTargetCapacity **required**

#### Output
* output [ModifyFleetResult](#modifyfleetresult)

### ModifyFpgaImageAttribute



```js
amazonaws_ec2.ModifyFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FpgaImageId **required** `string`
  * Attribute `string`
  * OperationType `string`
  * UserId `array`
  * UserGroup `array`
  * ProductCode `array`
  * LoadPermission `object`
  * Description `string`
  * Name `string`

#### Output
* output [ModifyFpgaImageAttributeResult](#modifyfpgaimageattributeresult)

### ModifyFpgaImageAttribute



```js
amazonaws_ec2.ModifyFpgaImageAttribute({
  "FpgaImageId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * Description
  * DryRun
  * FpgaImageId **required**
  * LoadPermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * Name
  * OperationType
  * ProductCodes
    * items
  * UserGroups
    * items
  * UserIds
    * items

#### Output
* output [ModifyFpgaImageAttributeResult](#modifyfpgaimageattributeresult)

### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({
  "HostId": []
}, context)
```

#### Input
* input `object`
  * AutoPlacement `string`
  * HostId **required** `array`
  * HostRecovery `string`
  * InstanceType `string`
  * InstanceFamily `string`

#### Output
* output [ModifyHostsResult](#modifyhostsresult)

### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({
  "HostIds": null
}, context)
```

#### Input
* input `object`
  * AutoPlacement
  * HostIds **required**
    * items
  * HostRecovery
  * InstanceFamily
  * InstanceType

#### Output
* output [ModifyHostsResult](#modifyhostsresult)

### ModifyIdFormat



```js
amazonaws_ec2.ModifyIdFormat({
  "Resource": "",
  "UseLongIds": true
}, context)
```

#### Input
* input `object`
  * Resource **required** `string`
  * UseLongIds **required** `boolean`

#### Output
*Output schema unknown*

### ModifyIdFormat



```js
amazonaws_ec2.ModifyIdFormat({
  "Resource": null,
  "UseLongIds": null
}, context)
```

#### Input
* input `object`
  * Resource **required**
  * UseLongIds **required**

#### Output
*Output schema unknown*

### ModifyIdentityIdFormat



```js
amazonaws_ec2.ModifyIdentityIdFormat({
  "PrincipalArn": "",
  "Resource": "",
  "UseLongIds": true
}, context)
```

#### Input
* input `object`
  * PrincipalArn **required** `string`
  * Resource **required** `string`
  * UseLongIds **required** `boolean`

#### Output
*Output schema unknown*

### ModifyIdentityIdFormat



```js
amazonaws_ec2.ModifyIdentityIdFormat({
  "PrincipalArn": null,
  "Resource": null,
  "UseLongIds": null
}, context)
```

#### Input
* input `object`
  * PrincipalArn **required**
  * Resource **required**
  * UseLongIds **required**

#### Output
*Output schema unknown*

### ModifyImageAttribute



```js
amazonaws_ec2.ModifyImageAttribute({
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * Attribute `string`
  * Description `object`
  * ImageId **required** `string`
  * LaunchPermission `object`
  * OperationType `string`
  * ProductCode `array`
  * UserGroup `array`
  * UserId `array`
  * Value `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ModifyImageAttribute



```js
amazonaws_ec2.ModifyImageAttribute({
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * Description
    * Value
  * DryRun
  * ImageId **required**
  * LaunchPermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * OperationType
  * ProductCodes
    * items
  * UserGroups
    * items
  * UserIds
    * items
  * Value

#### Output
*Output schema unknown*

### ModifyInstanceAttribute



```js
amazonaws_ec2.ModifyInstanceAttribute({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * SourceDestCheck `object`
  * Attribute `string`
  * BlockDeviceMapping `array`
  * DisableApiTermination `object`
  * DryRun `boolean`
  * EbsOptimized `object`
  * EnaSupport `object`
  * GroupId `array`
  * InstanceId **required** `string`
  * InstanceInitiatedShutdownBehavior `object`
  * InstanceType `object`
  * Kernel `object`
  * Ramdisk `object`
  * SriovNetSupport `object`
  * UserData `object`
  * Value `string`

#### Output
*Output schema unknown*

### ModifyInstanceAttribute



```js
amazonaws_ec2.ModifyInstanceAttribute({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * VolumeId
      * NoDevice
      * VirtualName
  * DisableApiTermination
    * Value
  * DryRun
  * EbsOptimized
    * Value
  * EnaSupport
    * Value
  * Groups
    * items
  * InstanceId **required**
  * InstanceInitiatedShutdownBehavior
    * Value
  * InstanceType
    * Value
  * Kernel
    * Value
  * Ramdisk
    * Value
  * SourceDestCheck
    * Value
  * SriovNetSupport
    * Value
  * UserData
    * Value
  * Value

#### Output
*Output schema unknown*

### ModifyInstanceCapacityReservationAttributes



```js
amazonaws_ec2.ModifyInstanceCapacityReservationAttributes({
  "InstanceId": "",
  "CapacityReservationSpecification": {}
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * CapacityReservationSpecification **required** `object`
  * DryRun `boolean`

#### Output
* output [ModifyInstanceCapacityReservationAttributesResult](#modifyinstancecapacityreservationattributesresult)

### ModifyInstanceCapacityReservationAttributes



```js
amazonaws_ec2.ModifyInstanceCapacityReservationAttributes({
  "InstanceId": null,
  "CapacityReservationSpecification": null
}, context)
```

#### Input
* input `object`
  * CapacityReservationSpecification **required**
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * DryRun
  * InstanceId **required**

#### Output
* output [ModifyInstanceCapacityReservationAttributesResult](#modifyinstancecapacityreservationattributesresult)

### ModifyInstanceCreditSpecification



```js
amazonaws_ec2.ModifyInstanceCreditSpecification({
  "InstanceCreditSpecification": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * InstanceCreditSpecification **required** `array`

#### Output
* output [ModifyInstanceCreditSpecificationResult](#modifyinstancecreditspecificationresult)

### ModifyInstanceCreditSpecification



```js
amazonaws_ec2.ModifyInstanceCreditSpecification({
  "InstanceCreditSpecifications": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * InstanceCreditSpecifications **required**
    * items
      * CpuCredits
      * InstanceId

#### Output
* output [ModifyInstanceCreditSpecificationResult](#modifyinstancecreditspecificationresult)

### ModifyInstanceEventStartTime



```js
amazonaws_ec2.ModifyInstanceEventStartTime({
  "InstanceId": "",
  "InstanceEventId": "",
  "NotBefore": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceId **required** `string`
  * InstanceEventId **required** `string`
  * NotBefore **required** `string`

#### Output
* output [ModifyInstanceEventStartTimeResult](#modifyinstanceeventstarttimeresult)

### ModifyInstanceEventStartTime



```js
amazonaws_ec2.ModifyInstanceEventStartTime({
  "InstanceId": null,
  "InstanceEventId": null,
  "NotBefore": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceEventId **required**
  * InstanceId **required**
  * NotBefore **required**

#### Output
* output [ModifyInstanceEventStartTimeResult](#modifyinstanceeventstarttimeresult)

### ModifyInstanceMetadataOptions



```js
amazonaws_ec2.ModifyInstanceMetadataOptions({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * HttpTokens `string`
  * HttpPutResponseHopLimit `integer`
  * HttpEndpoint `string`
  * DryRun `boolean`

#### Output
* output [ModifyInstanceMetadataOptionsResult](#modifyinstancemetadataoptionsresult)

### ModifyInstanceMetadataOptions



```js
amazonaws_ec2.ModifyInstanceMetadataOptions({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens
  * InstanceId **required**

#### Output
* output [ModifyInstanceMetadataOptionsResult](#modifyinstancemetadataoptionsresult)

### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Affinity `string`
  * GroupName `string`
  * HostId `string`
  * InstanceId **required** `string`
  * Tenancy `string`
  * PartitionNumber `integer`
  * HostResourceGroupArn `string`

#### Output
* output [ModifyInstancePlacementResult](#modifyinstanceplacementresult)

### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * Affinity
  * GroupName
  * HostId
  * HostResourceGroupArn
  * InstanceId **required**
  * PartitionNumber
  * Tenancy

#### Output
* output [ModifyInstancePlacementResult](#modifyinstanceplacementresult)

### ModifyLaunchTemplate



```js
amazonaws_ec2.ModifyLaunchTemplate({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ClientToken `string`
  * LaunchTemplateId `string`
  * LaunchTemplateName `string`
  * SetDefaultVersion `string`

#### Output
* output [ModifyLaunchTemplateResult](#modifylaunchtemplateresult)

### ModifyLaunchTemplate



```js
amazonaws_ec2.ModifyLaunchTemplate({}, context)
```

#### Input
* input `object`
  * ClientToken
  * DefaultVersion
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName

#### Output
* output [ModifyLaunchTemplateResult](#modifylaunchtemplateresult)

### ModifyManagedPrefixList



```js
amazonaws_ec2.ModifyManagedPrefixList({
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListId **required** `string`
  * CurrentVersion `integer`
  * PrefixListName `string`
  * AddEntry `array`
  * RemoveEntry `array`

#### Output
* output [ModifyManagedPrefixListResult](#modifymanagedprefixlistresult)

### ModifyManagedPrefixList



```js
amazonaws_ec2.ModifyManagedPrefixList({
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * AddEntries
    * items [AddPrefixListEntry](#addprefixlistentry)
  * CurrentVersion
  * DryRun
  * PrefixListId **required**
  * PrefixListName
  * RemoveEntries
    * items [RemovePrefixListEntry](#removeprefixlistentry)

#### Output
* output [ModifyManagedPrefixListResult](#modifymanagedprefixlistresult)

### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Attachment `object`
  * Description `object`
  * DryRun `boolean`
  * SecurityGroupId `array`
  * NetworkInterfaceId **required** `string`
  * SourceDestCheck `object`

#### Output
*Output schema unknown*

### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * Attachment
    * AttachmentId
    * DeleteOnTermination
  * Description
    * Value
  * DryRun
  * Groups
    * items
  * NetworkInterfaceId **required**
  * SourceDestCheck
    * Value

#### Output
*Output schema unknown*

### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({
  "ReservedInstancesId": [],
  "ReservedInstancesConfigurationSetItemType": []
}, context)
```

#### Input
* input `object`
  * ReservedInstancesId **required** `array`
  * ClientToken `string`
  * ReservedInstancesConfigurationSetItemType **required** `array`

#### Output
* output [ModifyReservedInstancesResult](#modifyreservedinstancesresult)

### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({
  "ReservedInstancesIds": null,
  "TargetConfigurations": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * ReservedInstancesIds **required**
    * items
  * TargetConfigurations **required**
    * items
      * AvailabilityZone
      * InstanceCount
      * InstanceType
      * Platform
      * Scope

#### Output
* output [ModifyReservedInstancesResult](#modifyreservedinstancesresult)

### ModifySnapshotAttribute



```js
amazonaws_ec2.ModifySnapshotAttribute({
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * Attribute `string`
  * CreateVolumePermission `object`
  * UserGroup `array`
  * OperationType `string`
  * SnapshotId **required** `string`
  * UserId `array`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ModifySnapshotAttribute



```js
amazonaws_ec2.ModifySnapshotAttribute({
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * CreateVolumePermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * DryRun
  * GroupNames
    * items
  * OperationType
  * SnapshotId **required**
  * UserIds
    * items

#### Output
*Output schema unknown*

### ModifySpotFleetRequest



```js
amazonaws_ec2.ModifySpotFleetRequest({
  "SpotFleetRequestId": ""
}, context)
```

#### Input
* input `object`
  * ExcessCapacityTerminationPolicy `string`
  * LaunchTemplateConfig `array`
  * SpotFleetRequestId **required** `string`
  * TargetCapacity `integer`
  * OnDemandTargetCapacity `integer`

#### Output
* output [ModifySpotFleetRequestResponse](#modifyspotfleetrequestresponse)

### ModifySpotFleetRequest



```js
amazonaws_ec2.ModifySpotFleetRequest({
  "SpotFleetRequestId": null
}, context)
```

#### Input
* input `object`
  * ExcessCapacityTerminationPolicy
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * Priority
          * SpotPrice
          * SubnetId
          * WeightedCapacity
  * OnDemandTargetCapacity
  * SpotFleetRequestId **required**
  * TargetCapacity

#### Output
* output [ModifySpotFleetRequestResponse](#modifyspotfleetrequestresponse)

### ModifySubnetAttribute



```js
amazonaws_ec2.ModifySubnetAttribute({
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * AssignIpv6AddressOnCreation `object`
  * MapPublicIpOnLaunch `object`
  * SubnetId **required** `string`
  * MapCustomerOwnedIpOnLaunch `object`
  * CustomerOwnedIpv4Pool `string`

#### Output
*Output schema unknown*

### ModifySubnetAttribute



```js
amazonaws_ec2.ModifySubnetAttribute({
  "SubnetId": null
}, context)
```

#### Input
* input `object`
  * AssignIpv6AddressOnCreation
    * Value
  * CustomerOwnedIpv4Pool
  * MapCustomerOwnedIpOnLaunch
    * Value
  * MapPublicIpOnLaunch
    * Value
  * SubnetId **required**

#### Output
*Output schema unknown*

### ModifyTrafficMirrorFilterNetworkServices



```js
amazonaws_ec2.ModifyTrafficMirrorFilterNetworkServices({
  "TrafficMirrorFilterId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterId **required** `string`
  * AddNetworkService `array`
  * RemoveNetworkService `array`
  * DryRun `boolean`

#### Output
* output [ModifyTrafficMirrorFilterNetworkServicesResult](#modifytrafficmirrorfilternetworkservicesresult)

### ModifyTrafficMirrorFilterNetworkServices



```js
amazonaws_ec2.ModifyTrafficMirrorFilterNetworkServices({
  "TrafficMirrorFilterId": null
}, context)
```

#### Input
* input `object`
  * AddNetworkServices
    * items
  * DryRun
  * RemoveNetworkServices
    * items
  * TrafficMirrorFilterId **required**

#### Output
* output [ModifyTrafficMirrorFilterNetworkServicesResult](#modifytrafficmirrorfilternetworkservicesresult)

### ModifyTrafficMirrorFilterRule



```js
amazonaws_ec2.ModifyTrafficMirrorFilterRule({
  "TrafficMirrorFilterRuleId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorFilterRuleId **required** `string`
  * TrafficDirection `string`
  * RuleNumber `integer`
  * RuleAction `string`
  * DestinationPortRange `object`
  * SourcePortRange `object`
  * Protocol `integer`
  * DestinationCidrBlock `string`
  * SourceCidrBlock `string`
  * Description `string`
  * RemoveField `array`
  * DryRun `boolean`

#### Output
* output [ModifyTrafficMirrorFilterRuleResult](#modifytrafficmirrorfilterruleresult)

### ModifyTrafficMirrorFilterRule



```js
amazonaws_ec2.ModifyTrafficMirrorFilterRule({
  "TrafficMirrorFilterRuleId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DestinationCidrBlock
  * DestinationPortRange
    * FromPort
    * ToPort
  * DryRun
  * Protocol
  * RemoveFields
    * items [TrafficMirrorFilterRuleField](#trafficmirrorfilterrulefield)
  * RuleAction
  * RuleNumber
  * SourceCidrBlock
  * SourcePortRange
    * FromPort
    * ToPort
  * TrafficDirection
  * TrafficMirrorFilterRuleId **required**

#### Output
* output [ModifyTrafficMirrorFilterRuleResult](#modifytrafficmirrorfilterruleresult)

### ModifyTrafficMirrorSession



```js
amazonaws_ec2.ModifyTrafficMirrorSession({
  "TrafficMirrorSessionId": ""
}, context)
```

#### Input
* input `object`
  * TrafficMirrorSessionId **required** `string`
  * TrafficMirrorTargetId `string`
  * TrafficMirrorFilterId `string`
  * PacketLength `integer`
  * SessionNumber `integer`
  * VirtualNetworkId `integer`
  * Description `string`
  * RemoveField `array`
  * DryRun `boolean`

#### Output
* output [ModifyTrafficMirrorSessionResult](#modifytrafficmirrorsessionresult)

### ModifyTrafficMirrorSession



```js
amazonaws_ec2.ModifyTrafficMirrorSession({
  "TrafficMirrorSessionId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * PacketLength
  * RemoveFields
    * items [TrafficMirrorSessionField](#trafficmirrorsessionfield)
  * SessionNumber
  * TrafficMirrorFilterId
  * TrafficMirrorSessionId **required**
  * TrafficMirrorTargetId
  * VirtualNetworkId

#### Output
* output [ModifyTrafficMirrorSessionResult](#modifytrafficmirrorsessionresult)

### ModifyTransitGateway



```js
amazonaws_ec2.ModifyTransitGateway({
  "TransitGatewayId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayId **required** `string`
  * Description `string`
  * Options `object`
  * DryRun `boolean`

#### Output
* output [ModifyTransitGatewayResult](#modifytransitgatewayresult)

### ModifyTransitGateway



```js
amazonaws_ec2.ModifyTransitGateway({
  "TransitGatewayId": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * Options
    * AddTransitGatewayCidrBlocks
      * items
    * AssociationDefaultRouteTableId
    * AutoAcceptSharedAttachments
    * DefaultRouteTableAssociation
    * DefaultRouteTablePropagation
    * DnsSupport
    * PropagationDefaultRouteTableId
    * RemoveTransitGatewayCidrBlocks
      * items
    * VpnEcmpSupport
  * TransitGatewayId **required**

#### Output
* output [ModifyTransitGatewayResult](#modifytransitgatewayresult)

### ModifyTransitGatewayPrefixListReference



```js
amazonaws_ec2.ModifyTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": "",
  "PrefixListId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * PrefixListId **required** `string`
  * TransitGatewayAttachmentId `string`
  * Blackhole `boolean`
  * DryRun `boolean`

#### Output
* output [ModifyTransitGatewayPrefixListReferenceResult](#modifytransitgatewayprefixlistreferenceresult)

### ModifyTransitGatewayPrefixListReference



```js
amazonaws_ec2.ModifyTransitGatewayPrefixListReference({
  "TransitGatewayRouteTableId": null,
  "PrefixListId": null
}, context)
```

#### Input
* input `object`
  * Blackhole
  * DryRun
  * PrefixListId **required**
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

#### Output
* output [ModifyTransitGatewayPrefixListReferenceResult](#modifytransitgatewayprefixlistreferenceresult)

### ModifyTransitGatewayVpcAttachment



```js
amazonaws_ec2.ModifyTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * AddSubnetIds `array`
  * RemoveSubnetIds `array`
  * Options `object`
  * DryRun `boolean`

#### Output
* output [ModifyTransitGatewayVpcAttachmentResult](#modifytransitgatewayvpcattachmentresult)

### ModifyTransitGatewayVpcAttachment



```js
amazonaws_ec2.ModifyTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * AddSubnetIds
    * items
  * DryRun
  * Options
    * ApplianceModeSupport
    * DnsSupport
    * Ipv6Support
  * RemoveSubnetIds
    * items
  * TransitGatewayAttachmentId **required**

#### Output
* output [ModifyTransitGatewayVpcAttachmentResult](#modifytransitgatewayvpcattachmentresult)

### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VolumeId **required** `string`
  * Size `integer`
  * VolumeType `string`
  * Iops `integer`
  * Throughput `integer`
  * MultiAttachEnabled `boolean`

#### Output
* output [ModifyVolumeResult](#modifyvolumeresult)

### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Iops
  * MultiAttachEnabled
  * Size
  * Throughput
  * VolumeId **required**
  * VolumeType

#### Output
* output [ModifyVolumeResult](#modifyvolumeresult)

### ModifyVolumeAttribute



```js
amazonaws_ec2.ModifyVolumeAttribute({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * AutoEnableIO `object`
  * VolumeId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ModifyVolumeAttribute



```js
amazonaws_ec2.ModifyVolumeAttribute({
  "VolumeId": null
}, context)
```

#### Input
* input `object`
  * AutoEnableIO
    * Value
  * DryRun
  * VolumeId **required**

#### Output
*Output schema unknown*

### ModifyVpcAttribute



```js
amazonaws_ec2.ModifyVpcAttribute({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * EnableDnsHostnames `object`
  * EnableDnsSupport `object`
  * VpcId **required** `string`

#### Output
*Output schema unknown*

### ModifyVpcAttribute



```js
amazonaws_ec2.ModifyVpcAttribute({
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * EnableDnsHostnames
    * Value
  * EnableDnsSupport
    * Value
  * VpcId **required**

#### Output
*Output schema unknown*

### ModifyVpcEndpoint



```js
amazonaws_ec2.ModifyVpcEndpoint({
  "VpcEndpointId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcEndpointId **required** `string`
  * ResetPolicy `boolean`
  * PolicyDocument `string`
  * AddRouteTableId `array`
  * RemoveRouteTableId `array`
  * AddSubnetId `array`
  * RemoveSubnetId `array`
  * AddSecurityGroupId `array`
  * RemoveSecurityGroupId `array`
  * PrivateDnsEnabled `boolean`

#### Output
* output [ModifyVpcEndpointResult](#modifyvpcendpointresult)

### ModifyVpcEndpoint



```js
amazonaws_ec2.ModifyVpcEndpoint({
  "VpcEndpointId": null
}, context)
```

#### Input
* input `object`
  * AddRouteTableIds
    * items
  * AddSecurityGroupIds
    * items
  * AddSubnetIds
    * items
  * DryRun
  * PolicyDocument
  * PrivateDnsEnabled
  * RemoveRouteTableIds
    * items
  * RemoveSecurityGroupIds
    * items
  * RemoveSubnetIds
    * items
  * ResetPolicy
  * VpcEndpointId **required**

#### Output
* output [ModifyVpcEndpointResult](#modifyvpcendpointresult)

### ModifyVpcEndpointConnectionNotification



```js
amazonaws_ec2.ModifyVpcEndpointConnectionNotification({
  "ConnectionNotificationId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ConnectionNotificationId **required** `string`
  * ConnectionNotificationArn `string`
  * ConnectionEvents `array`

#### Output
* output [ModifyVpcEndpointConnectionNotificationResult](#modifyvpcendpointconnectionnotificationresult)

### ModifyVpcEndpointConnectionNotification



```js
amazonaws_ec2.ModifyVpcEndpointConnectionNotification({
  "ConnectionNotificationId": null
}, context)
```

#### Input
* input `object`
  * ConnectionEvents
    * items
  * ConnectionNotificationArn
  * ConnectionNotificationId **required**
  * DryRun

#### Output
* output [ModifyVpcEndpointConnectionNotificationResult](#modifyvpcendpointconnectionnotificationresult)

### ModifyVpcEndpointServiceConfiguration



```js
amazonaws_ec2.ModifyVpcEndpointServiceConfiguration({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`
  * PrivateDnsName `string`
  * RemovePrivateDnsName `boolean`
  * AcceptanceRequired `boolean`
  * AddNetworkLoadBalancerArn `array`
  * RemoveNetworkLoadBalancerArn `array`
  * AddGatewayLoadBalancerArn `array`
  * RemoveGatewayLoadBalancerArn `array`

#### Output
* output [ModifyVpcEndpointServiceConfigurationResult](#modifyvpcendpointserviceconfigurationresult)

### ModifyVpcEndpointServiceConfiguration



```js
amazonaws_ec2.ModifyVpcEndpointServiceConfiguration({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * AcceptanceRequired
  * AddGatewayLoadBalancerArns
    * items
  * AddNetworkLoadBalancerArns
    * items
  * DryRun
  * PrivateDnsName
  * RemoveGatewayLoadBalancerArns
    * items
  * RemoveNetworkLoadBalancerArns
    * items
  * RemovePrivateDnsName
  * ServiceId **required**

#### Output
* output [ModifyVpcEndpointServiceConfigurationResult](#modifyvpcendpointserviceconfigurationresult)

### ModifyVpcEndpointServicePermissions



```js
amazonaws_ec2.ModifyVpcEndpointServicePermissions({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`
  * AddAllowedPrincipals `array`
  * RemoveAllowedPrincipals `array`

#### Output
* output [ModifyVpcEndpointServicePermissionsResult](#modifyvpcendpointservicepermissionsresult)

### ModifyVpcEndpointServicePermissions



```js
amazonaws_ec2.ModifyVpcEndpointServicePermissions({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * AddAllowedPrincipals
    * items
  * DryRun
  * RemoveAllowedPrincipals
    * items
  * ServiceId **required**

#### Output
* output [ModifyVpcEndpointServicePermissionsResult](#modifyvpcendpointservicepermissionsresult)

### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * AccepterPeeringConnectionOptions `object`
  * DryRun `boolean`
  * RequesterPeeringConnectionOptions `object`
  * VpcPeeringConnectionId **required** `string`

#### Output
* output [ModifyVpcPeeringConnectionOptionsResult](#modifyvpcpeeringconnectionoptionsresult)

### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({
  "VpcPeeringConnectionId": null
}, context)
```

#### Input
* input `object`
  * AccepterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * DryRun
  * RequesterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * VpcPeeringConnectionId **required**

#### Output
* output [ModifyVpcPeeringConnectionOptionsResult](#modifyvpcpeeringconnectionoptionsresult)

### ModifyVpcTenancy



```js
amazonaws_ec2.ModifyVpcTenancy({
  "VpcId": "",
  "InstanceTenancy": ""
}, context)
```

#### Input
* input `object`
  * VpcId **required** `string`
  * InstanceTenancy **required** `string`
  * DryRun `boolean`

#### Output
* output [ModifyVpcTenancyResult](#modifyvpctenancyresult)

### ModifyVpcTenancy



```js
amazonaws_ec2.ModifyVpcTenancy({
  "VpcId": null,
  "InstanceTenancy": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceTenancy **required**
  * VpcId **required**

#### Output
* output [ModifyVpcTenancyResult](#modifyvpctenancyresult)

### ModifyVpnConnection



```js
amazonaws_ec2.ModifyVpnConnection({
  "VpnConnectionId": ""
}, context)
```

#### Input
* input `object`
  * VpnConnectionId **required** `string`
  * TransitGatewayId `string`
  * CustomerGatewayId `string`
  * VpnGatewayId `string`
  * DryRun `boolean`

#### Output
* output [ModifyVpnConnectionResult](#modifyvpnconnectionresult)

### ModifyVpnConnection



```js
amazonaws_ec2.ModifyVpnConnection({
  "VpnConnectionId": null
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId
  * DryRun
  * TransitGatewayId
  * VpnConnectionId **required**
  * VpnGatewayId

#### Output
* output [ModifyVpnConnectionResult](#modifyvpnconnectionresult)

### ModifyVpnConnectionOptions



```js
amazonaws_ec2.ModifyVpnConnectionOptions({
  "VpnConnectionId": ""
}, context)
```

#### Input
* input `object`
  * VpnConnectionId **required** `string`
  * LocalIpv4NetworkCidr `string`
  * RemoteIpv4NetworkCidr `string`
  * LocalIpv6NetworkCidr `string`
  * RemoteIpv6NetworkCidr `string`
  * DryRun `boolean`

#### Output
* output [ModifyVpnConnectionOptionsResult](#modifyvpnconnectionoptionsresult)

### ModifyVpnConnectionOptions



```js
amazonaws_ec2.ModifyVpnConnectionOptions({
  "VpnConnectionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * LocalIpv4NetworkCidr
  * LocalIpv6NetworkCidr
  * RemoteIpv4NetworkCidr
  * RemoteIpv6NetworkCidr
  * VpnConnectionId **required**

#### Output
* output [ModifyVpnConnectionOptionsResult](#modifyvpnconnectionoptionsresult)

### ModifyVpnTunnelCertificate



```js
amazonaws_ec2.ModifyVpnTunnelCertificate({
  "VpnConnectionId": "",
  "VpnTunnelOutsideIpAddress": ""
}, context)
```

#### Input
* input `object`
  * VpnConnectionId **required** `string`
  * VpnTunnelOutsideIpAddress **required** `string`
  * DryRun `boolean`

#### Output
* output [ModifyVpnTunnelCertificateResult](#modifyvpntunnelcertificateresult)

### ModifyVpnTunnelCertificate



```js
amazonaws_ec2.ModifyVpnTunnelCertificate({
  "VpnConnectionId": null,
  "VpnTunnelOutsideIpAddress": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpnConnectionId **required**
  * VpnTunnelOutsideIpAddress **required**

#### Output
* output [ModifyVpnTunnelCertificateResult](#modifyvpntunnelcertificateresult)

### ModifyVpnTunnelOptions



```js
amazonaws_ec2.ModifyVpnTunnelOptions({
  "VpnConnectionId": "",
  "VpnTunnelOutsideIpAddress": "",
  "TunnelOptions": {}
}, context)
```

#### Input
* input `object`
  * VpnConnectionId **required** `string`
  * VpnTunnelOutsideIpAddress **required** `string`
  * TunnelOptions **required** `object`
  * DryRun `boolean`

#### Output
* output [ModifyVpnTunnelOptionsResult](#modifyvpntunneloptionsresult)

### ModifyVpnTunnelOptions



```js
amazonaws_ec2.ModifyVpnTunnelOptions({
  "VpnConnectionId": null,
  "VpnTunnelOutsideIpAddress": null,
  "TunnelOptions": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TunnelOptions **required**
    * DPDTimeoutAction
    * DPDTimeoutSeconds
    * IKEVersions
      * items
        * Value
    * Phase1DHGroupNumbers
      * items
        * Value
    * Phase1EncryptionAlgorithms
      * items
        * Value
    * Phase1IntegrityAlgorithms
      * items
        * Value
    * Phase1LifetimeSeconds
    * Phase2DHGroupNumbers
      * items
        * Value
    * Phase2EncryptionAlgorithms
      * items
        * Value
    * Phase2IntegrityAlgorithms
      * items
        * Value
    * Phase2LifetimeSeconds
    * PreSharedKey
    * RekeyFuzzPercentage
    * RekeyMarginTimeSeconds
    * ReplayWindowSize
    * StartupAction
    * TunnelInsideCidr
    * TunnelInsideIpv6Cidr
  * VpnConnectionId **required**
  * VpnTunnelOutsideIpAddress **required**

#### Output
* output [ModifyVpnTunnelOptionsResult](#modifyvpntunneloptionsresult)

### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * DryRun `boolean`

#### Output
* output [MonitorInstancesResult](#monitorinstancesresult)

### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceIds **required**
    * items

#### Output
* output [MonitorInstancesResult](#monitorinstancesresult)

### MoveAddressToVpc



```js
amazonaws_ec2.MoveAddressToVpc({
  "PublicIp": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PublicIp **required** `string`

#### Output
* output [MoveAddressToVpcResult](#moveaddresstovpcresult)

### MoveAddressToVpc



```js
amazonaws_ec2.MoveAddressToVpc({
  "PublicIp": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * PublicIp **required**

#### Output
* output [MoveAddressToVpcResult](#moveaddresstovpcresult)

### ProvisionByoipCidr



```js
amazonaws_ec2.ProvisionByoipCidr({
  "Cidr": ""
}, context)
```

#### Input
* input `object`
  * Cidr **required** `string`
  * CidrAuthorizationContext `object`
  * PubliclyAdvertisable `boolean`
  * Description `string`
  * DryRun `boolean`
  * PoolTagSpecification `array`

#### Output
* output [ProvisionByoipCidrResult](#provisionbyoipcidrresult)

### ProvisionByoipCidr



```js
amazonaws_ec2.ProvisionByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**
  * CidrAuthorizationContext
    * Message **required**
    * Signature **required**
  * Description
  * DryRun
  * PoolTagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * PubliclyAdvertisable

#### Output
* output [ProvisionByoipCidrResult](#provisionbyoipcidrresult)

### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * CurrencyCode `string`
  * HostIdSet **required** `array`
  * LimitPrice `string`
  * OfferingId **required** `string`
  * TagSpecification `array`

#### Output
* output [PurchaseHostReservationResult](#purchasehostreservationresult)

### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({
  "HostIdSet": null,
  "OfferingId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * CurrencyCode
  * HostIdSet **required**
    * items
  * LimitPrice
  * OfferingId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [PurchaseHostReservationResult](#purchasehostreservationresult)

### PurchaseReservedInstancesOffering



```js
amazonaws_ec2.PurchaseReservedInstancesOffering({
  "InstanceCount": 0,
  "ReservedInstancesOfferingId": ""
}, context)
```

#### Input
* input `object`
  * InstanceCount **required** `integer`
  * ReservedInstancesOfferingId **required** `string`
  * DryRun `boolean`
  * LimitPrice `object`
  * PurchaseTime `string`

#### Output
* output [PurchaseReservedInstancesOfferingResult](#purchasereservedinstancesofferingresult)

### PurchaseReservedInstancesOffering



```js
amazonaws_ec2.PurchaseReservedInstancesOffering({
  "InstanceCount": null,
  "ReservedInstancesOfferingId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceCount **required**
  * LimitPrice
    * Amount
    * CurrencyCode
  * PurchaseTime
  * ReservedInstancesOfferingId **required**

#### Output
* output [PurchaseReservedInstancesOfferingResult](#purchasereservedinstancesofferingresult)

### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({
  "PurchaseRequest": []
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * DryRun `boolean`
  * PurchaseRequest **required** `array`

#### Output
* output [PurchaseScheduledInstancesResult](#purchasescheduledinstancesresult)

### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({
  "PurchaseRequests": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * PurchaseRequests **required**
    * items
      * InstanceCount **required**
      * PurchaseToken **required**

#### Output
* output [PurchaseScheduledInstancesResult](#purchasescheduledinstancesresult)

### RebootInstances



```js
amazonaws_ec2.RebootInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### RebootInstances



```js
amazonaws_ec2.RebootInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceIds **required**
    * items

#### Output
*Output schema unknown*

### RegisterImage



```js
amazonaws_ec2.RegisterImage({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * ImageLocation `string`
  * Architecture `string`
  * BlockDeviceMapping `array`
  * Description `string`
  * DryRun `boolean`
  * EnaSupport `boolean`
  * KernelId `string`
  * Name **required** `string`
  * BillingProduct `array`
  * RamdiskId `string`
  * RootDeviceName `string`
  * SriovNetSupport `string`
  * VirtualizationType `string`

#### Output
* output [RegisterImageResult](#registerimageresult)

### RegisterImage



```js
amazonaws_ec2.RegisterImage({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Architecture
  * BillingProducts
    * items
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * Description
  * DryRun
  * EnaSupport
  * ImageLocation
  * KernelId
  * Name **required**
  * RamdiskId
  * RootDeviceName
  * SriovNetSupport
  * VirtualizationType

#### Output
* output [RegisterImageResult](#registerimageresult)

### RegisterInstanceEventNotificationAttributes



```js
amazonaws_ec2.RegisterInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * InstanceTagAttribute `object`

#### Output
* output [RegisterInstanceEventNotificationAttributesResult](#registerinstanceeventnotificationattributesresult)

### RegisterInstanceEventNotificationAttributes



```js
amazonaws_ec2.RegisterInstanceEventNotificationAttributes({}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

#### Output
* output [RegisterInstanceEventNotificationAttributesResult](#registerinstanceeventnotificationattributesresult)

### RegisterTransitGatewayMulticastGroupMembers



```js
amazonaws_ec2.RegisterTransitGatewayMulticastGroupMembers({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * GroupIpAddress `string`
  * NetworkInterfaceIds `array`
  * DryRun `boolean`

#### Output
* output [RegisterTransitGatewayMulticastGroupMembersResult](#registertransitgatewaymulticastgroupmembersresult)

### RegisterTransitGatewayMulticastGroupMembers



```js
amazonaws_ec2.RegisterTransitGatewayMulticastGroupMembers({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

#### Output
* output [RegisterTransitGatewayMulticastGroupMembersResult](#registertransitgatewaymulticastgroupmembersresult)

### RegisterTransitGatewayMulticastGroupSources



```js
amazonaws_ec2.RegisterTransitGatewayMulticastGroupSources({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * GroupIpAddress `string`
  * NetworkInterfaceIds `array`
  * DryRun `boolean`

#### Output
* output [RegisterTransitGatewayMulticastGroupSourcesResult](#registertransitgatewaymulticastgroupsourcesresult)

### RegisterTransitGatewayMulticastGroupSources



```js
amazonaws_ec2.RegisterTransitGatewayMulticastGroupSources({}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

#### Output
* output [RegisterTransitGatewayMulticastGroupSourcesResult](#registertransitgatewaymulticastgroupsourcesresult)

### RejectTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.RejectTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * TransitGatewayAttachmentId `string`
  * SubnetIds `array`
  * DryRun `boolean`

#### Output
* output [RejectTransitGatewayMulticastDomainAssociationsResult](#rejecttransitgatewaymulticastdomainassociationsresult)

### RejectTransitGatewayMulticastDomainAssociations



```js
amazonaws_ec2.RejectTransitGatewayMulticastDomainAssociations({}, context)
```

#### Input
* input `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

#### Output
* output [RejectTransitGatewayMulticastDomainAssociationsResult](#rejecttransitgatewaymulticastdomainassociationsresult)

### RejectTransitGatewayPeeringAttachment



```js
amazonaws_ec2.RejectTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [RejectTransitGatewayPeeringAttachmentResult](#rejecttransitgatewaypeeringattachmentresult)

### RejectTransitGatewayPeeringAttachment



```js
amazonaws_ec2.RejectTransitGatewayPeeringAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [RejectTransitGatewayPeeringAttachmentResult](#rejecttransitgatewaypeeringattachmentresult)

### RejectTransitGatewayVpcAttachment



```js
amazonaws_ec2.RejectTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": ""
}, context)
```

#### Input
* input `object`
  * TransitGatewayAttachmentId **required** `string`
  * DryRun `boolean`

#### Output
* output [RejectTransitGatewayVpcAttachmentResult](#rejecttransitgatewayvpcattachmentresult)

### RejectTransitGatewayVpcAttachment



```js
amazonaws_ec2.RejectTransitGatewayVpcAttachment({
  "TransitGatewayAttachmentId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

#### Output
* output [RejectTransitGatewayVpcAttachmentResult](#rejecttransitgatewayvpcattachmentresult)

### RejectVpcEndpointConnections



```js
amazonaws_ec2.RejectVpcEndpointConnections({
  "ServiceId": "",
  "VpcEndpointId": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`
  * VpcEndpointId **required** `array`

#### Output
* output [RejectVpcEndpointConnectionsResult](#rejectvpcendpointconnectionsresult)

### RejectVpcEndpointConnections



```js
amazonaws_ec2.RejectVpcEndpointConnections({
  "ServiceId": null,
  "VpcEndpointIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ServiceId **required**
  * VpcEndpointIds **required**
    * items

#### Output
* output [RejectVpcEndpointConnectionsResult](#rejectvpcendpointconnectionsresult)

### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * VpcPeeringConnectionId **required** `string`

#### Output
* output [RejectVpcPeeringConnectionResult](#rejectvpcpeeringconnectionresult)

### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({
  "VpcPeeringConnectionId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * VpcPeeringConnectionId **required**

#### Output
* output [RejectVpcPeeringConnectionResult](#rejectvpcpeeringconnectionresult)

### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```

#### Input
* input `object`
  * AllocationId `string`
  * PublicIp `string`
  * NetworkBorderGroup `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```

#### Input
* input `object`
  * AllocationId
  * DryRun
  * NetworkBorderGroup
  * PublicIp

#### Output
*Output schema unknown*

### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({
  "HostId": []
}, context)
```

#### Input
* input `object`
  * HostId **required** `array`

#### Output
* output [ReleaseHostsResult](#releasehostsresult)

### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({
  "HostIds": null
}, context)
```

#### Input
* input `object`
  * HostIds **required**
    * items

#### Output
* output [ReleaseHostsResult](#releasehostsresult)

### ReplaceIamInstanceProfileAssociation



```js
amazonaws_ec2.ReplaceIamInstanceProfileAssociation({
  "IamInstanceProfile": {},
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * IamInstanceProfile **required** `object`
  * AssociationId **required** `string`

#### Output
* output [ReplaceIamInstanceProfileAssociationResult](#replaceiaminstanceprofileassociationresult)

### ReplaceIamInstanceProfileAssociation



```js
amazonaws_ec2.ReplaceIamInstanceProfileAssociation({
  "IamInstanceProfile": null,
  "AssociationId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**
  * IamInstanceProfile **required**
    * Arn
    * Name

#### Output
* output [ReplaceIamInstanceProfileAssociationResult](#replaceiaminstanceprofileassociationresult)

### ReplaceNetworkAclAssociation



```js
amazonaws_ec2.ReplaceNetworkAclAssociation({
  "AssociationId": "",
  "NetworkAclId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`
  * DryRun `boolean`
  * NetworkAclId **required** `string`

#### Output
* output [ReplaceNetworkAclAssociationResult](#replacenetworkaclassociationresult)

### ReplaceNetworkAclAssociation



```js
amazonaws_ec2.ReplaceNetworkAclAssociation({
  "AssociationId": null,
  "NetworkAclId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**
  * DryRun
  * NetworkAclId **required**

#### Output
* output [ReplaceNetworkAclAssociationResult](#replacenetworkaclassociationresult)

### ReplaceNetworkAclEntry



```js
amazonaws_ec2.ReplaceNetworkAclEntry({
  "Egress": true,
  "NetworkAclId": "",
  "Protocol": "",
  "RuleAction": "",
  "RuleNumber": 0
}, context)
```

#### Input
* input `object`
  * CidrBlock `string`
  * DryRun `boolean`
  * Egress **required** `boolean`
  * Icmp `object`
  * Ipv6CidrBlock `string`
  * NetworkAclId **required** `string`
  * PortRange `object`
  * Protocol **required** `string`
  * RuleAction **required** `string`
  * RuleNumber **required** `integer`

#### Output
*Output schema unknown*

### ReplaceNetworkAclEntry



```js
amazonaws_ec2.ReplaceNetworkAclEntry({
  "Egress": null,
  "NetworkAclId": null,
  "Protocol": null,
  "RuleAction": null,
  "RuleNumber": null
}, context)
```

#### Input
* input `object`
  * CidrBlock
  * DryRun
  * Egress **required**
  * IcmpTypeCode
    * Code
    * Type
  * Ipv6CidrBlock
  * NetworkAclId **required**
  * PortRange
    * From
    * To
  * Protocol **required**
  * RuleAction **required**
  * RuleNumber **required**

#### Output
*Output schema unknown*

### ReplaceRoute



```js
amazonaws_ec2.ReplaceRoute({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock `string`
  * DestinationIpv6CidrBlock `string`
  * DestinationPrefixListId `string`
  * DryRun `boolean`
  * VpcEndpointId `string`
  * EgressOnlyInternetGatewayId `string`
  * GatewayId `string`
  * InstanceId `string`
  * LocalTarget `boolean`
  * NatGatewayId `string`
  * TransitGatewayId `string`
  * LocalGatewayId `string`
  * CarrierGatewayId `string`
  * NetworkInterfaceId `string`
  * RouteTableId **required** `string`
  * VpcPeeringConnectionId `string`

#### Output
*Output schema unknown*

### ReplaceRoute



```js
amazonaws_ec2.ReplaceRoute({
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * CarrierGatewayId
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * LocalGatewayId
  * LocalTarget
  * NatGatewayId
  * NetworkInterfaceId
  * RouteTableId **required**
  * TransitGatewayId
  * VpcEndpointId
  * VpcPeeringConnectionId

#### Output
*Output schema unknown*

### ReplaceRouteTableAssociation



```js
amazonaws_ec2.ReplaceRouteTableAssociation({
  "AssociationId": "",
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** `string`
  * DryRun `boolean`
  * RouteTableId **required** `string`

#### Output
* output [ReplaceRouteTableAssociationResult](#replaceroutetableassociationresult)

### ReplaceRouteTableAssociation



```js
amazonaws_ec2.ReplaceRouteTableAssociation({
  "AssociationId": null,
  "RouteTableId": null
}, context)
```

#### Input
* input `object`
  * AssociationId **required**
  * DryRun
  * RouteTableId **required**

#### Output
* output [ReplaceRouteTableAssociationResult](#replaceroutetableassociationresult)

### ReplaceTransitGatewayRoute



```js
amazonaws_ec2.ReplaceTransitGatewayRoute({
  "DestinationCidrBlock": "",
  "TransitGatewayRouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock **required** `string`
  * TransitGatewayRouteTableId **required** `string`
  * TransitGatewayAttachmentId `string`
  * Blackhole `boolean`
  * DryRun `boolean`

#### Output
* output [ReplaceTransitGatewayRouteResult](#replacetransitgatewayrouteresult)

### ReplaceTransitGatewayRoute



```js
amazonaws_ec2.ReplaceTransitGatewayRoute({
  "DestinationCidrBlock": null,
  "TransitGatewayRouteTableId": null
}, context)
```

#### Input
* input `object`
  * Blackhole
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

#### Output
* output [ReplaceTransitGatewayRouteResult](#replacetransitgatewayrouteresult)

### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({
  "InstanceId": [],
  "ReasonCode": [],
  "Status": ""
}, context)
```

#### Input
* input `object`
  * Description `string`
  * DryRun `boolean`
  * EndTime `string`
  * InstanceId **required** `array`
  * ReasonCode **required** `array`
  * StartTime `string`
  * Status **required** `string`

#### Output
*Output schema unknown*

### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({
  "Instances": null,
  "ReasonCodes": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * Description
  * DryRun
  * EndTime
  * Instances **required**
    * items
  * ReasonCodes **required**
    * items
  * StartTime
  * Status **required**

#### Output
*Output schema unknown*

### RequestSpotFleet



```js
amazonaws_ec2.RequestSpotFleet({
  "SpotFleetRequestConfig": {}
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * SpotFleetRequestConfig **required** `object`

#### Output
* output [RequestSpotFleetResponse](#requestspotfleetresponse)

### RequestSpotFleet



```js
amazonaws_ec2.RequestSpotFleet({
  "SpotFleetRequestConfig": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * SpotFleetRequestConfig **required**
    * AllocationStrategy
    * ClientToken
    * ExcessCapacityTerminationPolicy
    * FulfilledCapacity
    * IamFleetRole **required**
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * LaunchSpecifications
      * items
        * AddressingType
        * BlockDeviceMappings
          * items
        * EbsOptimized
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceType
        * KernelId
        * KeyName
        * Monitoring
          * Enabled
        * NetworkInterfaces
          * items
        * Placement
          * AvailabilityZone
          * GroupName
          * Tenancy
        * RamdiskId
        * SecurityGroups
          * items
        * SpotPrice
        * SubnetId
        * TagSpecifications
          * items
        * UserData
        * WeightedCapacity
    * LaunchTemplateConfigs
      * items
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * items
    * LoadBalancersConfig
      * ClassicLoadBalancersConfig
        * ClassicLoadBalancers
          * items
      * TargetGroupsConfig
        * TargetGroups
          * items
    * OnDemandAllocationStrategy
    * OnDemandFulfilledCapacity
    * OnDemandMaxTotalPrice
    * OnDemandTargetCapacity
    * ReplaceUnhealthyInstances
    * SpotMaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * SpotMaxTotalPrice
    * SpotPrice
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * TargetCapacity **required**
    * TerminateInstancesWithExpiration
    * Type
    * ValidFrom
    * ValidUntil

#### Output
* output [RequestSpotFleetResponse](#requestspotfleetresponse)

### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({}, context)
```

#### Input
* input `object`
  * AvailabilityZoneGroup `string`
  * BlockDurationMinutes `integer`
  * ClientToken `string`
  * DryRun `boolean`
  * InstanceCount `integer`
  * LaunchGroup `string`
  * LaunchSpecification `object`
  * SpotPrice `string`
  * Type `string`
  * ValidFrom `string`
  * ValidUntil `string`
  * TagSpecification `array`
  * InstanceInterruptionBehavior `string`

#### Output
* output [RequestSpotInstancesResult](#requestspotinstancesresult)

### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({}, context)
```

#### Input
* input `object`
  * AvailabilityZoneGroup
  * BlockDurationMinutes
  * ClientToken
  * DryRun
  * InstanceCount
  * InstanceInterruptionBehavior
  * LaunchGroup
  * LaunchSpecification
    * AddressingType
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled **required**
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
      * Tenancy
    * RamdiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * SubnetId
    * UserData
  * SpotPrice
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type
  * ValidFrom
  * ValidUntil

#### Output
* output [RequestSpotInstancesResult](#requestspotinstancesresult)

### ResetEbsDefaultKmsKeyId



```js
amazonaws_ec2.ResetEbsDefaultKmsKeyId({}, context)
```

#### Input
* input `object`
  * DryRun `boolean`

#### Output
* output [ResetEbsDefaultKmsKeyIdResult](#resetebsdefaultkmskeyidresult)

### ResetEbsDefaultKmsKeyId



```js
amazonaws_ec2.ResetEbsDefaultKmsKeyId({}, context)
```

#### Input
* input `object`
  * DryRun

#### Output
* output [ResetEbsDefaultKmsKeyIdResult](#resetebsdefaultkmskeyidresult)

### ResetFpgaImageAttribute



```js
amazonaws_ec2.ResetFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * FpgaImageId **required** `string`
  * Attribute `string`

#### Output
* output [ResetFpgaImageAttributeResult](#resetfpgaimageattributeresult)

### ResetFpgaImageAttribute



```js
amazonaws_ec2.ResetFpgaImageAttribute({
  "FpgaImageId": null
}, context)
```

#### Input
* input `object`
  * Attribute
  * DryRun
  * FpgaImageId **required**

#### Output
* output [ResetFpgaImageAttributeResult](#resetfpgaimageattributeresult)

### ResetImageAttribute



```js
amazonaws_ec2.ResetImageAttribute({
  "Attribute": "",
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * ImageId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ResetImageAttribute



```js
amazonaws_ec2.ResetImageAttribute({
  "Attribute": null,
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * ImageId **required**

#### Output
*Output schema unknown*

### ResetInstanceAttribute



```js
amazonaws_ec2.ResetInstanceAttribute({
  "Attribute": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * DryRun `boolean`
  * InstanceId **required** `string`

#### Output
*Output schema unknown*

### ResetInstanceAttribute



```js
amazonaws_ec2.ResetInstanceAttribute({
  "Attribute": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * InstanceId **required**

#### Output
*Output schema unknown*

### ResetNetworkInterfaceAttribute



```js
amazonaws_ec2.ResetNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * NetworkInterfaceId **required** `string`
  * SourceDestCheck `string`

#### Output
*Output schema unknown*

### ResetNetworkInterfaceAttribute



```js
amazonaws_ec2.ResetNetworkInterfaceAttribute({
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * NetworkInterfaceId **required**
  * SourceDestCheck

#### Output
*Output schema unknown*

### ResetSnapshotAttribute



```js
amazonaws_ec2.ResetSnapshotAttribute({
  "Attribute": "",
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * Attribute **required** `string`
  * SnapshotId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### ResetSnapshotAttribute



```js
amazonaws_ec2.ResetSnapshotAttribute({
  "Attribute": null,
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * Attribute **required**
  * DryRun
  * SnapshotId **required**

#### Output
*Output schema unknown*

### RestoreAddressToClassic



```js
amazonaws_ec2.RestoreAddressToClassic({
  "PublicIp": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PublicIp **required** `string`

#### Output
* output [RestoreAddressToClassicResult](#restoreaddresstoclassicresult)

### RestoreAddressToClassic



```js
amazonaws_ec2.RestoreAddressToClassic({
  "PublicIp": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * PublicIp **required**

#### Output
* output [RestoreAddressToClassicResult](#restoreaddresstoclassicresult)

### RestoreManagedPrefixListVersion



```js
amazonaws_ec2.RestoreManagedPrefixListVersion({
  "PrefixListId": "",
  "PreviousVersion": 0,
  "CurrentVersion": 0
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * PrefixListId **required** `string`
  * PreviousVersion **required** `integer`
  * CurrentVersion **required** `integer`

#### Output
* output [RestoreManagedPrefixListVersionResult](#restoremanagedprefixlistversionresult)

### RestoreManagedPrefixListVersion



```js
amazonaws_ec2.RestoreManagedPrefixListVersion({
  "PrefixListId": null,
  "PreviousVersion": null,
  "CurrentVersion": null
}, context)
```

#### Input
* input `object`
  * CurrentVersion **required**
  * DryRun
  * PrefixListId **required**
  * PreviousVersion **required**

#### Output
* output [RestoreManagedPrefixListVersionResult](#restoremanagedprefixlistversionresult)

### RevokeClientVpnIngress



```js
amazonaws_ec2.RevokeClientVpnIngress({
  "ClientVpnEndpointId": "",
  "TargetNetworkCidr": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * TargetNetworkCidr **required** `string`
  * AccessGroupId `string`
  * RevokeAllGroups `boolean`
  * DryRun `boolean`

#### Output
* output [RevokeClientVpnIngressResult](#revokeclientvpningressresult)

### RevokeClientVpnIngress



```js
amazonaws_ec2.RevokeClientVpnIngress({
  "ClientVpnEndpointId": null,
  "TargetNetworkCidr": null
}, context)
```

#### Input
* input `object`
  * AccessGroupId
  * ClientVpnEndpointId **required**
  * DryRun
  * RevokeAllGroups
  * TargetNetworkCidr **required**

#### Output
* output [RevokeClientVpnIngressResult](#revokeclientvpningressresult)

### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupId **required** `string`
  * IpPermissions `array`
  * CidrIp `string`
  * FromPort `integer`
  * IpProtocol `string`
  * ToPort `integer`
  * SourceSecurityGroupName `string`
  * SourceSecurityGroupOwnerId `string`

#### Output
* output [RevokeSecurityGroupEgressResult](#revokesecuritygroupegressresult)

### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId **required**
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

#### Output
* output [RevokeSecurityGroupEgressResult](#revokesecuritygroupegressresult)

### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp `string`
  * FromPort `integer`
  * GroupId `string`
  * GroupName `string`
  * IpPermissions `array`
  * IpProtocol `string`
  * SourceSecurityGroupName `string`
  * SourceSecurityGroupOwnerId `string`
  * ToPort `integer`
  * DryRun `boolean`

#### Output
* output [RevokeSecurityGroupIngressResult](#revokesecuritygroupingressresult)

### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId
  * GroupName
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

#### Output
* output [RevokeSecurityGroupIngressResult](#revokesecuritygroupingressresult)

### RunInstances



```js
amazonaws_ec2.RunInstances({
  "MaxCount": 0,
  "MinCount": 0
}, context)
```

#### Input
* input `object`
  * BlockDeviceMapping `array`
  * ImageId `string`
  * InstanceType `string`
  * Ipv6AddressCount `integer`
  * Ipv6Address `array`
  * KernelId `string`
  * KeyName `string`
  * MaxCount **required** `integer`
  * MinCount **required** `integer`
  * Monitoring `object`
  * Placement `object`
  * RamdiskId `string`
  * SecurityGroupId `array`
  * SecurityGroup `array`
  * SubnetId `string`
  * UserData `string`
  * AdditionalInfo `string`
  * ClientToken `string`
  * DisableApiTermination `boolean`
  * DryRun `boolean`
  * EbsOptimized `boolean`
  * IamInstanceProfile `object`
  * InstanceInitiatedShutdownBehavior `string`
  * NetworkInterface `array`
  * PrivateIpAddress `string`
  * ElasticGpuSpecification `array`
  * ElasticInferenceAccelerator `array`
  * TagSpecification `array`
  * LaunchTemplate `object`
  * InstanceMarketOptions `object`
  * CreditSpecification `object`
  * CpuOptions `object`
  * CapacityReservationSpecification `object`
  * HibernationOptions `object`
  * LicenseSpecification `array`
  * MetadataOptions `object`
  * EnclaveOptions `object`

#### Output
* output [Reservation](#reservation)

### RunInstances



```js
amazonaws_ec2.RunInstances({
  "MaxCount": null,
  "MinCount": null
}, context)
```

#### Input
* input `object`
  * AdditionalInfo
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * CapacityReservationSpecification
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * ClientToken
  * CpuOptions
    * CoreCount
    * ThreadsPerCore
  * CreditSpecification
    * CpuCredits **required**
  * DisableApiTermination
  * DryRun
  * EbsOptimized
  * ElasticGpuSpecification
    * items
      * Type **required**
  * ElasticInferenceAccelerators
    * items
      * Count
      * Type **required**
  * EnclaveOptions
    * Enabled
  * HibernationOptions
    * Configured
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceInitiatedShutdownBehavior
  * InstanceMarketOptions
    * MarketType
    * SpotOptions
      * BlockDurationMinutes
      * InstanceInterruptionBehavior
      * MaxPrice
      * SpotInstanceType
      * ValidUntil
  * InstanceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * KernelId
  * KeyName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * MaxCount **required**
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * MinCount **required**
  * Monitoring
    * Enabled **required**
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * PrivateIpAddress
  * RamdiskId
  * SecurityGroupIds
    * items
  * SecurityGroups
    * items
  * SubnetId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * UserData

#### Output
* output [Reservation](#reservation)

### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({
  "LaunchSpecification": {},
  "ScheduledInstanceId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`
  * DryRun `boolean`
  * InstanceCount `integer`
  * LaunchSpecification **required** `object`
  * ScheduledInstanceId **required** `string`

#### Output
* output [RunScheduledInstancesResult](#runscheduledinstancesresult)

### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({
  "LaunchSpecification": null,
  "ScheduledInstanceId": null
}, context)
```

#### Input
* input `object`
  * ClientToken
  * DryRun
  * InstanceCount
  * LaunchSpecification **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * SnapshotId
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId **required**
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddressConfigs
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
    * RamdiskId
    * SecurityGroupIds
      * items
    * SubnetId
    * UserData
  * ScheduledInstanceId **required**

#### Output
* output [RunScheduledInstancesResult](#runscheduledinstancesresult)

### SearchLocalGatewayRoutes



```js
amazonaws_ec2.SearchLocalGatewayRoutes({
  "LocalGatewayRouteTableId": "",
  "Filter": []
}, context)
```

#### Input
* input `object`
  * LocalGatewayRouteTableId **required** `string`
  * Filter **required** `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [SearchLocalGatewayRoutesResult](#searchlocalgatewayroutesresult)

### SearchLocalGatewayRoutes



```js
amazonaws_ec2.SearchLocalGatewayRoutes({
  "LocalGatewayRouteTableId": null,
  "Filters": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters **required**
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableId **required**
  * MaxResults
  * NextToken

#### Output
* output [SearchLocalGatewayRoutesResult](#searchlocalgatewayroutesresult)

### SearchTransitGatewayMulticastGroups



```js
amazonaws_ec2.SearchTransitGatewayMulticastGroups({}, context)
```

#### Input
* input `object`
  * TransitGatewayMulticastDomainId `string`
  * Filter `array`
  * MaxResults `integer`
  * NextToken `string`
  * DryRun `boolean`

#### Output
* output [SearchTransitGatewayMulticastGroupsResult](#searchtransitgatewaymulticastgroupsresult)

### SearchTransitGatewayMulticastGroups



```js
amazonaws_ec2.SearchTransitGatewayMulticastGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainId

#### Output
* output [SearchTransitGatewayMulticastGroupsResult](#searchtransitgatewaymulticastgroupsresult)

### SearchTransitGatewayRoutes



```js
amazonaws_ec2.SearchTransitGatewayRoutes({
  "TransitGatewayRouteTableId": "",
  "Filter": []
}, context)
```

#### Input
* input `object`
  * TransitGatewayRouteTableId **required** `string`
  * Filter **required** `array`
  * MaxResults `integer`
  * DryRun `boolean`

#### Output
* output [SearchTransitGatewayRoutesResult](#searchtransitgatewayroutesresult)

### SearchTransitGatewayRoutes



```js
amazonaws_ec2.SearchTransitGatewayRoutes({
  "TransitGatewayRouteTableId": null,
  "Filters": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Filters **required**
    * items
      * Name
      * Values
        * items
  * MaxResults
  * TransitGatewayRouteTableId **required**

#### Output
* output [SearchTransitGatewayRoutesResult](#searchtransitgatewayroutesresult)

### SendDiagnosticInterrupt



```js
amazonaws_ec2.SendDiagnosticInterrupt({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `string`
  * DryRun `boolean`

#### Output
*Output schema unknown*

### SendDiagnosticInterrupt



```js
amazonaws_ec2.SendDiagnosticInterrupt({
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceId **required**

#### Output
*Output schema unknown*

### StartInstances



```js
amazonaws_ec2.StartInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * AdditionalInfo `string`
  * DryRun `boolean`

#### Output
* output [StartInstancesResult](#startinstancesresult)

### StartInstances



```js
amazonaws_ec2.StartInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * AdditionalInfo
  * DryRun
  * InstanceIds **required**
    * items

#### Output
* output [StartInstancesResult](#startinstancesresult)

### StartNetworkInsightsAnalysis



```js
amazonaws_ec2.StartNetworkInsightsAnalysis({
  "NetworkInsightsPathId": "",
  "ClientToken": ""
}, context)
```

#### Input
* input `object`
  * NetworkInsightsPathId **required** `string`
  * FilterInArn `array`
  * DryRun `boolean`
  * TagSpecification `array`
  * ClientToken **required** `string`

#### Output
* output [StartNetworkInsightsAnalysisResult](#startnetworkinsightsanalysisresult)

### StartNetworkInsightsAnalysis



```js
amazonaws_ec2.StartNetworkInsightsAnalysis({
  "NetworkInsightsPathId": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * DryRun
  * FilterInArns
    * items
  * NetworkInsightsPathId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

#### Output
* output [StartNetworkInsightsAnalysisResult](#startnetworkinsightsanalysisresult)

### StartVpcEndpointServicePrivateDnsVerification



```js
amazonaws_ec2.StartVpcEndpointServicePrivateDnsVerification({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * ServiceId **required** `string`

#### Output
* output [StartVpcEndpointServicePrivateDnsVerificationResult](#startvpcendpointserviceprivatednsverificationresult)

### StartVpcEndpointServicePrivateDnsVerification



```js
amazonaws_ec2.StartVpcEndpointServicePrivateDnsVerification({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * ServiceId **required**

#### Output
* output [StartVpcEndpointServicePrivateDnsVerificationResult](#startvpcendpointserviceprivatednsverificationresult)

### StopInstances



```js
amazonaws_ec2.StopInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * Hibernate `boolean`
  * DryRun `boolean`
  * Force `boolean`

#### Output
* output [StopInstancesResult](#stopinstancesresult)

### StopInstances



```js
amazonaws_ec2.StopInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * Force
  * Hibernate
  * InstanceIds **required**
    * items

#### Output
* output [StopInstancesResult](#stopinstancesresult)

### TerminateClientVpnConnections



```js
amazonaws_ec2.TerminateClientVpnConnections({
  "ClientVpnEndpointId": ""
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required** `string`
  * ConnectionId `string`
  * Username `string`
  * DryRun `boolean`

#### Output
* output [TerminateClientVpnConnectionsResult](#terminateclientvpnconnectionsresult)

### TerminateClientVpnConnections



```js
amazonaws_ec2.TerminateClientVpnConnections({
  "ClientVpnEndpointId": null
}, context)
```

#### Input
* input `object`
  * ClientVpnEndpointId **required**
  * ConnectionId
  * DryRun
  * Username

#### Output
* output [TerminateClientVpnConnectionsResult](#terminateclientvpnconnectionsresult)

### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * DryRun `boolean`

#### Output
* output [TerminateInstancesResult](#terminateinstancesresult)

### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceIds **required**
    * items

#### Output
* output [TerminateInstancesResult](#terminateinstancesresult)

### UnassignIpv6Addresses



```js
amazonaws_ec2.UnassignIpv6Addresses({
  "Ipv6Addresses": [],
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Ipv6Addresses **required** `array`
  * NetworkInterfaceId **required** `string`

#### Output
* output [UnassignIpv6AddressesResult](#unassignipv6addressesresult)

### UnassignIpv6Addresses



```js
amazonaws_ec2.UnassignIpv6Addresses({
  "Ipv6Addresses": null,
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * Ipv6Addresses **required**
    * items
  * NetworkInterfaceId **required**

#### Output
* output [UnassignIpv6AddressesResult](#unassignipv6addressesresult)

### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({
  "NetworkInterfaceId": "",
  "PrivateIpAddress": []
}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId **required** `string`
  * PrivateIpAddress **required** `array`

#### Output
*Output schema unknown*

### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({
  "NetworkInterfaceId": null,
  "PrivateIpAddresses": null
}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId **required**
  * PrivateIpAddresses **required**
    * items

#### Output
*Output schema unknown*

### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({
  "InstanceId": []
}, context)
```

#### Input
* input `object`
  * InstanceId **required** `array`
  * DryRun `boolean`

#### Output
* output [UnmonitorInstancesResult](#unmonitorinstancesresult)

### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({
  "InstanceIds": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * InstanceIds **required**
    * items

#### Output
* output [UnmonitorInstancesResult](#unmonitorinstancesresult)

### UpdateSecurityGroupRuleDescriptionsEgress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsEgress({
  "IpPermissions": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupId `string`
  * GroupName `string`
  * IpPermissions **required** `array`

#### Output
* output [UpdateSecurityGroupRuleDescriptionsEgressResult](#updatesecuritygroupruledescriptionsegressresult)

### UpdateSecurityGroupRuleDescriptionsEgress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsEgress({
  "IpPermissions": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupId
  * GroupName
  * IpPermissions **required**
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

#### Output
* output [UpdateSecurityGroupRuleDescriptionsEgressResult](#updatesecuritygroupruledescriptionsegressresult)

### UpdateSecurityGroupRuleDescriptionsIngress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsIngress({
  "IpPermissions": []
}, context)
```

#### Input
* input `object`
  * DryRun `boolean`
  * GroupId `string`
  * GroupName `string`
  * IpPermissions **required** `array`

#### Output
* output [UpdateSecurityGroupRuleDescriptionsIngressResult](#updatesecuritygroupruledescriptionsingressresult)

### UpdateSecurityGroupRuleDescriptionsIngress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsIngress({
  "IpPermissions": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * GroupId
  * GroupName
  * IpPermissions **required**
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

#### Output
* output [UpdateSecurityGroupRuleDescriptionsIngressResult](#updatesecuritygroupruledescriptionsingressresult)

### WithdrawByoipCidr



```js
amazonaws_ec2.WithdrawByoipCidr({
  "Cidr": ""
}, context)
```

#### Input
* input `object`
  * Cidr **required** `string`
  * DryRun `boolean`

#### Output
* output [WithdrawByoipCidrResult](#withdrawbyoipcidrresult)

### WithdrawByoipCidr



```js
amazonaws_ec2.WithdrawByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**
  * DryRun

#### Output
* output [WithdrawByoipCidrResult](#withdrawbyoipcidrresult)



## Definitions

### AcceptReservedInstancesExchangeQuoteRequest
* AcceptReservedInstancesExchangeQuoteRequest `object`: Contains the parameters for accepting the quote.
  * DryRun
  * ReservedInstanceIds **required**
    * items
  * TargetConfigurations
    * items
      * InstanceCount
      * OfferingId **required**

### AcceptReservedInstancesExchangeQuoteResult
* AcceptReservedInstancesExchangeQuoteResult `object`: The result of the exchange and whether it was <code>successful</code>.
  * ExchangeId

### AcceptTransitGatewayMulticastDomainAssociationsRequest
* AcceptTransitGatewayMulticastDomainAssociationsRequest `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

### AcceptTransitGatewayMulticastDomainAssociationsResult
* AcceptTransitGatewayMulticastDomainAssociationsResult `object`
  * Associations
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * Subnets
      * items
        * State
        * SubnetId
    * TransitGatewayAttachmentId
    * TransitGatewayMulticastDomainId

### AcceptTransitGatewayPeeringAttachmentRequest
* AcceptTransitGatewayPeeringAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### AcceptTransitGatewayPeeringAttachmentResult
* AcceptTransitGatewayPeeringAttachmentResult `object`
  * TransitGatewayPeeringAttachment
    * AccepterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * CreationTime
    * RequesterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * State
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId

### AcceptTransitGatewayVpcAttachmentRequest
* AcceptTransitGatewayVpcAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### AcceptTransitGatewayVpcAttachmentResult
* AcceptTransitGatewayVpcAttachmentResult `object`
  * TransitGatewayVpcAttachment
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### AcceptVpcEndpointConnectionsRequest
* AcceptVpcEndpointConnectionsRequest `object`
  * DryRun
  * ServiceId **required**
  * VpcEndpointIds **required**
    * items

### AcceptVpcEndpointConnectionsResult
* AcceptVpcEndpointConnectionsResult `object`
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### AcceptVpcPeeringConnectionRequest
* AcceptVpcPeeringConnectionRequest `object`
  * DryRun
  * VpcPeeringConnectionId

### AcceptVpcPeeringConnectionResult
* AcceptVpcPeeringConnectionResult `object`
  * VpcPeeringConnection
    * AccepterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * ExpirationTime
    * RequesterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * VpcPeeringConnectionId

### AccountAttribute
* AccountAttribute `object`: Describes an account attribute.
  * AttributeName
  * AttributeValues
    * items
      * AttributeValue

### AccountAttributeList
* AccountAttributeList `array`
  * items
    * AttributeName
    * AttributeValues
      * items
        * AttributeValue

### AccountAttributeName
* AccountAttributeName `string` (values: supported-platforms, default-vpc)

### AccountAttributeNameStringList
* AccountAttributeNameStringList `array`
  * items

### AccountAttributeValue
* AccountAttributeValue `object`: Describes a value of an account attribute.
  * AttributeValue

### AccountAttributeValueList
* AccountAttributeValueList `array`
  * items
    * AttributeValue

### ActiveInstance
* ActiveInstance `object`: Describes a running instance in a Spot Fleet.
  * InstanceHealth
  * InstanceId
  * InstanceType
  * SpotInstanceRequestId

### ActiveInstanceSet
* ActiveInstanceSet `array`
  * items
    * InstanceHealth
    * InstanceId
    * InstanceType
    * SpotInstanceRequestId

### ActivityStatus
* ActivityStatus `string` (values: error, pending_fulfillment, pending_termination, fulfilled)

### AddPrefixListEntries
* AddPrefixListEntries `array`
  * items [AddPrefixListEntry](#addprefixlistentry)

### AddPrefixListEntry
* AddPrefixListEntry `object`: An entry for a prefix list.
  * Cidr **required**
  * Description

### Address
* Address `object`: Describes an Elastic IP address, or a carrier IP address.
  * AllocationId
  * AssociationId
  * CarrierIp
  * CustomerOwnedIp
  * CustomerOwnedIpv4Pool
  * Domain
  * InstanceId
  * NetworkBorderGroup
  * NetworkInterfaceId
  * NetworkInterfaceOwnerId
  * PrivateIpAddress
  * PublicIp
  * PublicIpv4Pool
  * Tags
    * items
      * Key
      * Value

### AddressList
* AddressList `array`
  * items
    * AllocationId
    * AssociationId
    * CarrierIp
    * CustomerOwnedIp
    * CustomerOwnedIpv4Pool
    * Domain
    * InstanceId
    * NetworkBorderGroup
    * NetworkInterfaceId
    * NetworkInterfaceOwnerId
    * PrivateIpAddress
    * PublicIp
    * PublicIpv4Pool
    * Tags
      * items
        * Key
        * Value

### AdvertiseByoipCidrRequest
* AdvertiseByoipCidrRequest `object`
  * Cidr **required**
  * DryRun

### AdvertiseByoipCidrResult
* AdvertiseByoipCidrResult `object`
  * ByoipCidr
    * Cidr
    * Description
    * State
    * StatusMessage

### Affinity
* Affinity `string` (values: default, host)

### AllocateAddressRequest
* AllocateAddressRequest `object`
  * Address
  * CustomerOwnedIpv4Pool
  * Domain
  * DryRun
  * NetworkBorderGroup
  * PublicIpv4Pool

### AllocateAddressResult
* AllocateAddressResult `object`
  * AllocationId
  * CarrierIp
  * CustomerOwnedIp
  * CustomerOwnedIpv4Pool
  * Domain
  * NetworkBorderGroup
  * PublicIp
  * PublicIpv4Pool

### AllocateHostsRequest
* AllocateHostsRequest `object`
  * AutoPlacement
  * AvailabilityZone **required**
  * ClientToken
  * HostRecovery
  * InstanceFamily
  * InstanceType
  * Quantity **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### AllocateHostsResult
* AllocateHostsResult `object`: Contains the output of AllocateHosts.
  * HostIds
    * items

### AllocationId
* AllocationId `string`

### AllocationIdList
* AllocationIdList `array`
  * items

### AllocationState
* AllocationState `string` (values: available, under-assessment, permanent-failure, released, released-permanent-failure, pending)

### AllocationStrategy
* AllocationStrategy `string` (values: lowestPrice, diversified, capacityOptimized)

### AllowedPrincipal
* AllowedPrincipal `object`: Describes a principal.
  * Principal
  * PrincipalType

### AllowedPrincipalSet
* AllowedPrincipalSet `array`
  * items
    * Principal
    * PrincipalType

### AllowsMultipleInstanceTypes
* AllowsMultipleInstanceTypes `string` (values: on, off)

### AlternatePathHint
* AlternatePathHint `object`: Describes an potential intermediate component of a feasible path.
  * ComponentArn
  * ComponentId

### AlternatePathHintList
* AlternatePathHintList `array`
  * items
    * ComponentArn
    * ComponentId

### AnalysisAclRule
* AnalysisAclRule `object`: Describes a network access control (ACL) rule.
  * Cidr
  * Egress
  * PortRange
    * From
    * To
  * Protocol
  * RuleAction
  * RuleNumber

### AnalysisComponent
* AnalysisComponent `object`: Describes a path component.
  * Arn
  * Id

### AnalysisComponentList
* AnalysisComponentList `array`
  * items
    * Arn
    * Id

### AnalysisLoadBalancerListener
* AnalysisLoadBalancerListener `object`: Describes a load balancer listener.
  * InstancePort
  * LoadBalancerPort

### AnalysisLoadBalancerTarget
* AnalysisLoadBalancerTarget `object`: Describes a load balancer target.
  * Address
  * AvailabilityZone
  * Instance
    * Arn
    * Id
  * Port

### AnalysisPacketHeader
* AnalysisPacketHeader `object`: Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
  * DestinationAddresses
    * items
  * DestinationPortRanges
    * items
      * From
      * To
  * Protocol
  * SourceAddresses
    * items
  * SourcePortRanges
    * items
      * From
      * To

### AnalysisRouteTableRoute
* AnalysisRouteTableRoute `object`: Describes a route table route.
  * DestinationCidr
  * DestinationPrefixListId
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * NatGatewayId
  * NetworkInterfaceId
  * Origin
  * TransitGatewayId
  * VpcPeeringConnectionId

### AnalysisSecurityGroupRule
* AnalysisSecurityGroupRule `object`: Describes a security group rule.
  * Cidr
  * Direction
  * PortRange
    * From
    * To
  * PrefixListId
  * Protocol
  * SecurityGroupId

### AnalysisStatus
* AnalysisStatus `string` (values: running, succeeded, failed)

### ApplianceModeSupportValue
* ApplianceModeSupportValue `string` (values: enable, disable)

### ApplySecurityGroupsToClientVpnTargetNetworkRequest
* ApplySecurityGroupsToClientVpnTargetNetworkRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun
  * SecurityGroupIds **required**
    * items
  * VpcId **required**

### ApplySecurityGroupsToClientVpnTargetNetworkResult
* ApplySecurityGroupsToClientVpnTargetNetworkResult `object`
  * SecurityGroupIds
    * items

### ArchitectureType
* ArchitectureType `string` (values: i386, x86_64, arm64)

### ArchitectureTypeList
* ArchitectureTypeList `array`
  * items

### ArchitectureValues
* ArchitectureValues `string` (values: i386, x86_64, arm64)

### ArnList
* ArnList `array`
  * items

### AssignIpv6AddressesRequest
* AssignIpv6AddressesRequest `object`
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
  * NetworkInterfaceId **required**

### AssignIpv6AddressesResult
* AssignIpv6AddressesResult `object`
  * AssignedIpv6Addresses
    * items
  * NetworkInterfaceId

### AssignPrivateIpAddressesRequest
* AssignPrivateIpAddressesRequest `object`: Contains the parameters for AssignPrivateIpAddresses.
  * AllowReassignment
  * NetworkInterfaceId **required**
  * PrivateIpAddresses
    * items
  * SecondaryPrivateIpAddressCount

### AssignPrivateIpAddressesResult
* AssignPrivateIpAddressesResult `object`
  * AssignedPrivateIpAddresses
    * items
      * PrivateIpAddress
  * NetworkInterfaceId

### AssignedPrivateIpAddress
* AssignedPrivateIpAddress `object`: Describes the private IP addresses assigned to a network interface.
  * PrivateIpAddress

### AssignedPrivateIpAddressList
* AssignedPrivateIpAddressList `array`
  * items
    * PrivateIpAddress

### AssociateAddressRequest
* AssociateAddressRequest `object`
  * AllocationId
  * AllowReassociation
  * DryRun
  * InstanceId
  * NetworkInterfaceId
  * PrivateIpAddress
  * PublicIp

### AssociateAddressResult
* AssociateAddressResult `object`
  * AssociationId

### AssociateClientVpnTargetNetworkRequest
* AssociateClientVpnTargetNetworkRequest `object`
  * ClientToken
  * ClientVpnEndpointId **required**
  * DryRun
  * SubnetId **required**

### AssociateClientVpnTargetNetworkResult
* AssociateClientVpnTargetNetworkResult `object`
  * AssociationId
  * Status
    * Code
    * Message

### AssociateDhcpOptionsRequest
* AssociateDhcpOptionsRequest `object`
  * DhcpOptionsId **required**
  * DryRun
  * VpcId **required**

### AssociateEnclaveCertificateIamRoleRequest
* AssociateEnclaveCertificateIamRoleRequest `object`
  * CertificateArn
  * DryRun
  * RoleArn

### AssociateEnclaveCertificateIamRoleResult
* AssociateEnclaveCertificateIamRoleResult `object`
  * CertificateS3BucketName
  * CertificateS3ObjectKey
  * EncryptionKmsKeyId

### AssociateIamInstanceProfileRequest
* AssociateIamInstanceProfileRequest `object`
  * IamInstanceProfile **required**
    * Arn
    * Name
  * InstanceId **required**

### AssociateIamInstanceProfileResult
* AssociateIamInstanceProfileResult `object`
  * IamInstanceProfileAssociation
    * AssociationId
    * IamInstanceProfile
      * Arn
      * Id
    * InstanceId
    * State
    * Timestamp

### AssociateRouteTableRequest
* AssociateRouteTableRequest `object`
  * DryRun
  * GatewayId
  * RouteTableId **required**
  * SubnetId

### AssociateRouteTableResult
* AssociateRouteTableResult `object`
  * AssociationId
  * AssociationState
    * State
    * StatusMessage

### AssociateSubnetCidrBlockRequest
* AssociateSubnetCidrBlockRequest `object`
  * Ipv6CidrBlock **required**
  * SubnetId **required**

### AssociateSubnetCidrBlockResult
* AssociateSubnetCidrBlockResult `object`
  * Ipv6CidrBlockAssociation
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage
  * SubnetId

### AssociateTransitGatewayMulticastDomainRequest
* AssociateTransitGatewayMulticastDomainRequest `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

### AssociateTransitGatewayMulticastDomainResult
* AssociateTransitGatewayMulticastDomainResult `object`
  * Associations
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * Subnets
      * items
        * State
        * SubnetId
    * TransitGatewayAttachmentId
    * TransitGatewayMulticastDomainId

### AssociateTransitGatewayRouteTableRequest
* AssociateTransitGatewayRouteTableRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

### AssociateTransitGatewayRouteTableResult
* AssociateTransitGatewayRouteTableResult `object`
  * Association
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### AssociateVpcCidrBlockRequest
* AssociateVpcCidrBlockRequest `object`
  * AmazonProvidedIpv6CidrBlock
  * CidrBlock
  * Ipv6CidrBlock
  * Ipv6CidrBlockNetworkBorderGroup
  * Ipv6Pool
  * VpcId **required**

### AssociateVpcCidrBlockResult
* AssociateVpcCidrBlockResult `object`
  * CidrBlockAssociation
    * AssociationId
    * CidrBlock
    * CidrBlockState
      * State
      * StatusMessage
  * Ipv6CidrBlockAssociation
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage
    * Ipv6Pool
    * NetworkBorderGroup
  * VpcId

### AssociatedNetworkType
* AssociatedNetworkType `string` (values: vpc)

### AssociatedRole
* AssociatedRole `object`: Information about the associated IAM roles.
  * AssociatedRoleArn
  * CertificateS3BucketName
  * CertificateS3ObjectKey
  * EncryptionKmsKeyId

### AssociatedRolesList
* AssociatedRolesList `array`
  * items
    * AssociatedRoleArn
    * CertificateS3BucketName
    * CertificateS3ObjectKey
    * EncryptionKmsKeyId

### AssociatedTargetNetwork
* AssociatedTargetNetwork `object`: Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
  * NetworkId
  * NetworkType

### AssociatedTargetNetworkSet
* AssociatedTargetNetworkSet `array`
  * items
    * NetworkId
    * NetworkType

### AssociationIdList
* AssociationIdList `array`
  * items

### AssociationStatus
* AssociationStatus `object`: Describes the state of a target network association.
  * Code
  * Message

### AssociationStatusCode
* AssociationStatusCode `string` (values: associating, associated, association-failed, disassociating, disassociated)

### AttachClassicLinkVpcRequest
* AttachClassicLinkVpcRequest `object`
  * DryRun
  * Groups **required**
    * items
  * InstanceId **required**
  * VpcId **required**

### AttachClassicLinkVpcResult
* AttachClassicLinkVpcResult `object`
  * Return

### AttachInternetGatewayRequest
* AttachInternetGatewayRequest `object`
  * DryRun
  * InternetGatewayId **required**
  * VpcId **required**

### AttachNetworkInterfaceRequest
* AttachNetworkInterfaceRequest `object`: Contains the parameters for AttachNetworkInterface.
  * DeviceIndex **required**
  * DryRun
  * InstanceId **required**
  * NetworkCardIndex
  * NetworkInterfaceId **required**

### AttachNetworkInterfaceResult
* AttachNetworkInterfaceResult `object`: Contains the output of AttachNetworkInterface.
  * AttachmentId
  * NetworkCardIndex

### AttachVolumeRequest
* AttachVolumeRequest `object`
  * Device **required**
  * DryRun
  * InstanceId **required**
  * VolumeId **required**

### AttachVpnGatewayRequest
* AttachVpnGatewayRequest `object`: Contains the parameters for AttachVpnGateway.
  * DryRun
  * VpcId **required**
  * VpnGatewayId **required**

### AttachVpnGatewayResult
* AttachVpnGatewayResult `object`: Contains the output of AttachVpnGateway.
  * VpcAttachment
    * State
    * VpcId

### AttachmentStatus
* AttachmentStatus `string` (values: attaching, attached, detaching, detached)

### AttributeBooleanValue
* AttributeBooleanValue `object`: Describes a value for a resource attribute that is a Boolean value.
  * Value

### AttributeValue
* AttributeValue `object`: Describes a value for a resource attribute that is a String.
  * Value

### AuthorizationRule
* AuthorizationRule `object`: Information about an authorization rule.
  * AccessAll
  * ClientVpnEndpointId
  * Description
  * DestinationCidr
  * GroupId
  * Status
    * Code
    * Message

### AuthorizationRuleSet
* AuthorizationRuleSet `array`
  * items
    * AccessAll
    * ClientVpnEndpointId
    * Description
    * DestinationCidr
    * GroupId
    * Status
      * Code
      * Message

### AuthorizeClientVpnIngressRequest
* AuthorizeClientVpnIngressRequest `object`
  * AccessGroupId
  * AuthorizeAllGroups
  * ClientToken
  * ClientVpnEndpointId **required**
  * Description
  * DryRun
  * TargetNetworkCidr **required**

### AuthorizeClientVpnIngressResult
* AuthorizeClientVpnIngressResult `object`
  * Status
    * Code
    * Message

### AuthorizeSecurityGroupEgressRequest
* AuthorizeSecurityGroupEgressRequest `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId **required**
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

### AuthorizeSecurityGroupIngressRequest
* AuthorizeSecurityGroupIngressRequest `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId
  * GroupName
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

### AutoAcceptSharedAssociationsValue
* AutoAcceptSharedAssociationsValue `string` (values: enable, disable)

### AutoAcceptSharedAttachmentsValue
* AutoAcceptSharedAttachmentsValue `string` (values: enable, disable)

### AutoPlacement
* AutoPlacement `string` (values: on, off)

### AutoRecoveryFlag
* AutoRecoveryFlag `boolean`

### AvailabilityZone
* AvailabilityZone `object`: Describes Availability Zones, Local Zones, and Wavelength Zones.
  * GroupName
  * Messages
    * items
      * Message
  * NetworkBorderGroup
  * OptInStatus
  * ParentZoneId
  * ParentZoneName
  * RegionName
  * State
  * ZoneId
  * ZoneName
  * ZoneType

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items
    * GroupName
    * Messages
      * items
        * Message
    * NetworkBorderGroup
    * OptInStatus
    * ParentZoneId
    * ParentZoneName
    * RegionName
    * State
    * ZoneId
    * ZoneName
    * ZoneType

### AvailabilityZoneMessage
* AvailabilityZoneMessage `object`: Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.
  * Message

### AvailabilityZoneMessageList
* AvailabilityZoneMessageList `array`
  * items
    * Message

### AvailabilityZoneOptInStatus
* AvailabilityZoneOptInStatus `string` (values: opt-in-not-required, opted-in, not-opted-in)

### AvailabilityZoneState
* AvailabilityZoneState `string` (values: available, information, impaired, unavailable)

### AvailabilityZoneStringList
* AvailabilityZoneStringList `array`
  * items

### AvailableCapacity
* AvailableCapacity `object`: The capacity information for instances that can be launched onto the Dedicated Host. 
  * AvailableInstanceCapacity
    * items
      * AvailableCapacity
      * InstanceType
      * TotalCapacity
  * AvailableVCpus

### AvailableInstanceCapacityList
* AvailableInstanceCapacityList `array`
  * items
    * AvailableCapacity
    * InstanceType
    * TotalCapacity

### BareMetalFlag
* BareMetalFlag `boolean`

### BaselineBandwidthInMbps
* BaselineBandwidthInMbps `integer`

### BaselineIops
* BaselineIops `integer`

### BaselineThroughputInMBps
* BaselineThroughputInMBps `number`

### BatchState
* BatchState `string` (values: submitted, active, cancelled, failed, cancelled_running, cancelled_terminating, modifying)

### BgpStatus
* BgpStatus `string` (values: up, down)

### BillingProductList
* BillingProductList `array`
  * items

### Blob
* Blob `string`

### BlobAttributeValue
* BlobAttributeValue `object`
  * Value

### BlockDeviceMapping
* BlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * Encrypted
    * Iops
    * KmsKeyId
    * SnapshotId
    * Throughput
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### BlockDeviceMappingList
* BlockDeviceMappingList `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * Encrypted
      * Iops
      * KmsKeyId
      * SnapshotId
      * Throughput
      * VolumeSize
      * VolumeType
    * NoDevice
    * VirtualName

### BlockDeviceMappingRequestList
* BlockDeviceMappingRequestList `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * Encrypted
      * Iops
      * KmsKeyId
      * SnapshotId
      * Throughput
      * VolumeSize
      * VolumeType
    * NoDevice
    * VirtualName

### Boolean
* Boolean `boolean`

### BundleId
* BundleId `string`

### BundleIdStringList
* BundleIdStringList `array`
  * items

### BundleInstanceRequest
* BundleInstanceRequest `object`: Contains the parameters for BundleInstance.
  * DryRun
  * InstanceId **required**
  * Storage **required**
    * S3
      * AWSAccessKeyId
      * Bucket
      * Prefix
      * UploadPolicy
      * UploadPolicySignature

### BundleInstanceResult
* BundleInstanceResult `object`: Contains the output of BundleInstance.
  * BundleTask
    * BundleId
    * BundleTaskError
      * Code
      * Message
    * InstanceId
    * Progress
    * StartTime
    * State
    * Storage
      * S3
        * AWSAccessKeyId
        * Bucket
        * Prefix
        * UploadPolicy
        * UploadPolicySignature
    * UpdateTime

### BundleTask
* BundleTask `object`: Describes a bundle task.
  * BundleId
  * BundleTaskError
    * Code
    * Message
  * InstanceId
  * Progress
  * StartTime
  * State
  * Storage
    * S3
      * AWSAccessKeyId
      * Bucket
      * Prefix
      * UploadPolicy
      * UploadPolicySignature
  * UpdateTime

### BundleTaskError
* BundleTaskError `object`: Describes an error for <a>BundleInstance</a>.
  * Code
  * Message

### BundleTaskList
* BundleTaskList `array`
  * items
    * BundleId
    * BundleTaskError
      * Code
      * Message
    * InstanceId
    * Progress
    * StartTime
    * State
    * Storage
      * S3
        * AWSAccessKeyId
        * Bucket
        * Prefix
        * UploadPolicy
        * UploadPolicySignature
    * UpdateTime

### BundleTaskState
* BundleTaskState `string` (values: pending, waiting-for-shutdown, bundling, storing, cancelling, complete, failed)

### BurstablePerformanceFlag
* BurstablePerformanceFlag `boolean`

### ByoipCidr
* ByoipCidr `object`: Information about an address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP).
  * Cidr
  * Description
  * State
  * StatusMessage

### ByoipCidrSet
* ByoipCidrSet `array`
  * items
    * Cidr
    * Description
    * State
    * StatusMessage

### ByoipCidrState
* ByoipCidrState `string` (values: advertised, deprovisioned, failed-deprovision, failed-provision, pending-deprovision, pending-provision, provisioned, provisioned-not-publicly-advertisable)

### CancelBatchErrorCode
* CancelBatchErrorCode `string` (values: fleetRequestIdDoesNotExist, fleetRequestIdMalformed, fleetRequestNotInCancellableState, unexpectedError)

### CancelBundleTaskRequest
* CancelBundleTaskRequest `object`: Contains the parameters for CancelBundleTask.
  * BundleId **required**
  * DryRun

### CancelBundleTaskResult
* CancelBundleTaskResult `object`: Contains the output of CancelBundleTask.
  * BundleTask
    * BundleId
    * BundleTaskError
      * Code
      * Message
    * InstanceId
    * Progress
    * StartTime
    * State
    * Storage
      * S3
        * AWSAccessKeyId
        * Bucket
        * Prefix
        * UploadPolicy
        * UploadPolicySignature
    * UpdateTime

### CancelCapacityReservationRequest
* CancelCapacityReservationRequest `object`
  * CapacityReservationId **required**
  * DryRun

### CancelCapacityReservationResult
* CancelCapacityReservationResult `object`
  * Return

### CancelConversionRequest
* CancelConversionRequest `object`
  * ConversionTaskId **required**
  * DryRun
  * ReasonMessage

### CancelExportTaskRequest
* CancelExportTaskRequest `object`
  * ExportTaskId **required**

### CancelImportTaskRequest
* CancelImportTaskRequest `object`
  * CancelReason
  * DryRun
  * ImportTaskId

### CancelImportTaskResult
* CancelImportTaskResult `object`
  * ImportTaskId
  * PreviousState
  * State

### CancelReservedInstancesListingRequest
* CancelReservedInstancesListingRequest `object`: Contains the parameters for CancelReservedInstancesListing.
  * ReservedInstancesListingId **required**

### CancelReservedInstancesListingResult
* CancelReservedInstancesListingResult `object`: Contains the output of CancelReservedInstancesListing.
  * ReservedInstancesListings
    * items
      * ClientToken
      * CreateDate
      * InstanceCounts
        * items
          * InstanceCount
          * State
      * PriceSchedules
        * items
          * Active
          * CurrencyCode
          * Price
          * Term
      * ReservedInstancesId
      * ReservedInstancesListingId
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
      * UpdateDate

### CancelSpotFleetRequestsError
* CancelSpotFleetRequestsError `object`: Describes a Spot Fleet error.
  * Code
  * Message

### CancelSpotFleetRequestsErrorItem
* CancelSpotFleetRequestsErrorItem `object`: Describes a Spot Fleet request that was not successfully canceled.
  * Error
    * Code
    * Message
  * SpotFleetRequestId

### CancelSpotFleetRequestsErrorSet
* CancelSpotFleetRequestsErrorSet `array`
  * items
    * Error
      * Code
      * Message
    * SpotFleetRequestId

### CancelSpotFleetRequestsRequest
* CancelSpotFleetRequestsRequest `object`: Contains the parameters for CancelSpotFleetRequests.
  * DryRun
  * SpotFleetRequestIds **required**
    * items
  * TerminateInstances **required**

### CancelSpotFleetRequestsResponse
* CancelSpotFleetRequestsResponse `object`: Contains the output of CancelSpotFleetRequests.
  * SuccessfulFleetRequests
    * items
      * CurrentSpotFleetRequestState
      * PreviousSpotFleetRequestState
      * SpotFleetRequestId
  * UnsuccessfulFleetRequests
    * items
      * Error
        * Code
        * Message
      * SpotFleetRequestId

### CancelSpotFleetRequestsSuccessItem
* CancelSpotFleetRequestsSuccessItem `object`: Describes a Spot Fleet request that was successfully canceled.
  * CurrentSpotFleetRequestState
  * PreviousSpotFleetRequestState
  * SpotFleetRequestId

### CancelSpotFleetRequestsSuccessSet
* CancelSpotFleetRequestsSuccessSet `array`
  * items
    * CurrentSpotFleetRequestState
    * PreviousSpotFleetRequestState
    * SpotFleetRequestId

### CancelSpotInstanceRequestState
* CancelSpotInstanceRequestState `string` (values: active, open, closed, cancelled, completed)

### CancelSpotInstanceRequestsRequest
* CancelSpotInstanceRequestsRequest `object`: Contains the parameters for CancelSpotInstanceRequests.
  * DryRun
  * SpotInstanceRequestIds **required**
    * items

### CancelSpotInstanceRequestsResult
* CancelSpotInstanceRequestsResult `object`: Contains the output of CancelSpotInstanceRequests.
  * CancelledSpotInstanceRequests
    * items
      * SpotInstanceRequestId
      * State

### CancelledSpotInstanceRequest
* CancelledSpotInstanceRequest `object`: Describes a request to cancel a Spot Instance.
  * SpotInstanceRequestId
  * State

### CancelledSpotInstanceRequestList
* CancelledSpotInstanceRequestList `array`
  * items
    * SpotInstanceRequestId
    * State

### CapacityReservation
* CapacityReservation `object`: Describes a Capacity Reservation.
  * AvailabilityZone
  * AvailabilityZoneId
  * AvailableInstanceCount
  * CapacityReservationArn
  * CapacityReservationId
  * CreateDate
  * EbsOptimized
  * EndDate
  * EndDateType
  * EphemeralStorage
  * InstanceMatchCriteria
  * InstancePlatform
  * InstanceType
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * Tenancy
  * TotalInstanceCount

### CapacityReservationGroup
* CapacityReservationGroup `object`: Describes a resource group to which a Capacity Reservation has been added.
  * GroupArn
  * OwnerId

### CapacityReservationGroupSet
* CapacityReservationGroupSet `array`
  * items
    * GroupArn
    * OwnerId

### CapacityReservationId
* CapacityReservationId `string`

### CapacityReservationIdSet
* CapacityReservationIdSet `array`
  * items

### CapacityReservationInstancePlatform
* CapacityReservationInstancePlatform `string` (values: Linux/UNIX, Red Hat Enterprise Linux, SUSE Linux, Windows, Windows with SQL Server, Windows with SQL Server Enterprise, Windows with SQL Server Standard, Windows with SQL Server Web, Linux with SQL Server Standard, Linux with SQL Server Web, Linux with SQL Server Enterprise)

### CapacityReservationOptions
* CapacityReservationOptions `object`: <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.</p> <note> <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p> </note> <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For examples of using Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example configurations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
  * UsageStrategy

### CapacityReservationOptionsRequest
* CapacityReservationOptionsRequest `object`: <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.</p> <note> <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p> </note> <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For examples of using Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example configurations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
  * UsageStrategy

### CapacityReservationPreference
* CapacityReservationPreference `string` (values: open, none)

### CapacityReservationSet
* CapacityReservationSet `array`
  * items
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableInstanceCount
    * CapacityReservationArn
    * CapacityReservationId
    * CreateDate
    * EbsOptimized
    * EndDate
    * EndDateType
    * EphemeralStorage
    * InstanceMatchCriteria
    * InstancePlatform
    * InstanceType
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * Tenancy
    * TotalInstanceCount

### CapacityReservationSpecification
* CapacityReservationSpecification `object`: <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter at a time. If you specify <code>CapacityReservationPreference</code> and <code>CapacityReservationTarget</code>, the request fails.</p> <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.</p>
  * CapacityReservationPreference
  * CapacityReservationTarget
    * CapacityReservationId
    * CapacityReservationResourceGroupArn

### CapacityReservationSpecificationResponse
* CapacityReservationSpecificationResponse `object`: Describes the instance's Capacity Reservation targeting preferences. The action returns the <code>capacityReservationPreference</code> response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the <code>capacityReservationTarget</code> response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.
  * CapacityReservationPreference
  * CapacityReservationTarget
    * CapacityReservationId
    * CapacityReservationResourceGroupArn

### CapacityReservationState
* CapacityReservationState `string` (values: active, expired, cancelled, pending, failed)

### CapacityReservationTarget
* CapacityReservationTarget `object`: Describes a target Capacity Reservation or Capacity Reservation group.
  * CapacityReservationId
  * CapacityReservationResourceGroupArn

### CapacityReservationTargetResponse
* CapacityReservationTargetResponse `object`: Describes a target Capacity Reservation or Capacity Reservation group.
  * CapacityReservationId
  * CapacityReservationResourceGroupArn

### CapacityReservationTenancy
* CapacityReservationTenancy `string` (values: default, dedicated)

### CarrierGateway
* CarrierGateway `object`: Describes a carrier gateway.
  * CarrierGatewayId
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * VpcId

### CarrierGatewayId
* CarrierGatewayId `string`

### CarrierGatewayIdSet
* CarrierGatewayIdSet `array`
  * items [CarrierGatewayId](#carriergatewayid)

### CarrierGatewayMaxResults
* CarrierGatewayMaxResults `integer`

### CarrierGatewaySet
* CarrierGatewaySet `array`
  * items
    * CarrierGatewayId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CarrierGatewayState
* CarrierGatewayState `string` (values: pending, available, deleting, deleted)

### CertificateAuthentication
* CertificateAuthentication `object`: Information about the client certificate used for authentication.
  * ClientRootCertificateChain

### CertificateAuthenticationRequest
* CertificateAuthenticationRequest `object`: Information about the client certificate to be used for authentication.
  * ClientRootCertificateChainArn

### CidrAuthorizationContext
* CidrAuthorizationContext `object`: Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Prepare to Bring Your Address Range to Your AWS Account</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * Message **required**
  * Signature **required**

### CidrBlock
* CidrBlock `object`: Describes an IPv4 CIDR block.
  * CidrBlock

### CidrBlockSet
* CidrBlockSet `array`
  * items
    * CidrBlock

### ClassicLinkDnsSupport
* ClassicLinkDnsSupport `object`: Describes the ClassicLink DNS support status of a VPC.
  * ClassicLinkDnsSupported
  * VpcId

### ClassicLinkDnsSupportList
* ClassicLinkDnsSupportList `array`
  * items
    * ClassicLinkDnsSupported
    * VpcId

### ClassicLinkInstance
* ClassicLinkInstance `object`: Describes a linked EC2-Classic instance.
  * Groups
    * items
      * GroupId
      * GroupName
  * InstanceId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### ClassicLinkInstanceList
* ClassicLinkInstanceList `array`
  * items
    * Groups
      * items
        * GroupId
        * GroupName
    * InstanceId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### ClassicLoadBalancer
* ClassicLoadBalancer `object`: Describes a Classic Load Balancer.
  * Name

### ClassicLoadBalancers
* ClassicLoadBalancers `array`
  * items
    * Name

### ClassicLoadBalancersConfig
* ClassicLoadBalancersConfig `object`: Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
  * ClassicLoadBalancers
    * items
      * Name

### ClientCertificateRevocationListStatus
* ClientCertificateRevocationListStatus `object`: Describes the state of a client certificate revocation list.
  * Code
  * Message

### ClientCertificateRevocationListStatusCode
* ClientCertificateRevocationListStatusCode `string` (values: pending, active)

### ClientConnectOptions
* ClientConnectOptions `object`: The options for managing connection authorization for new client connections.
  * Enabled
  * LambdaFunctionArn

### ClientConnectResponseOptions
* ClientConnectResponseOptions `object`: The options for managing connection authorization for new client connections.
  * Enabled
  * LambdaFunctionArn
  * Status
    * Code
    * Message

### ClientData
* ClientData `object`: Describes the client-specific data.
  * Comment
  * UploadEnd
  * UploadSize
  * UploadStart

### ClientVpnAssociationId
* ClientVpnAssociationId `string`

### ClientVpnAuthentication
* ClientVpnAuthentication `object`: Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.
  * ActiveDirectory
    * DirectoryId
  * FederatedAuthentication
    * SamlProviderArn
    * SelfServiceSamlProviderArn
  * MutualAuthentication
    * ClientRootCertificateChain
  * Type

### ClientVpnAuthenticationList
* ClientVpnAuthenticationList `array`
  * items
    * ActiveDirectory
      * DirectoryId
    * FederatedAuthentication
      * SamlProviderArn
      * SelfServiceSamlProviderArn
    * MutualAuthentication
      * ClientRootCertificateChain
    * Type

### ClientVpnAuthenticationRequest
* ClientVpnAuthenticationRequest `object`: Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.
  * ActiveDirectory
    * DirectoryId
  * FederatedAuthentication
    * SAMLProviderArn
    * SelfServiceSAMLProviderArn
  * MutualAuthentication
    * ClientRootCertificateChainArn
  * Type

### ClientVpnAuthenticationRequestList
* ClientVpnAuthenticationRequestList `array`
  * items [ClientVpnAuthenticationRequest](#clientvpnauthenticationrequest)

### ClientVpnAuthenticationType
* ClientVpnAuthenticationType `string` (values: certificate-authentication, directory-service-authentication, federated-authentication)

### ClientVpnAuthorizationRuleStatus
* ClientVpnAuthorizationRuleStatus `object`: Describes the state of an authorization rule.
  * Code
  * Message

### ClientVpnAuthorizationRuleStatusCode
* ClientVpnAuthorizationRuleStatusCode `string` (values: authorizing, active, failed, revoking)

### ClientVpnConnection
* ClientVpnConnection `object`: Describes a client connection.
  * ClientIp
  * ClientVpnEndpointId
  * CommonName
  * ConnectionEndTime
  * ConnectionEstablishedTime
  * ConnectionId
  * EgressBytes
  * EgressPackets
  * IngressBytes
  * IngressPackets
  * PostureComplianceStatuses
    * items
  * Status
    * Code
    * Message
  * Timestamp
  * Username

### ClientVpnConnectionSet
* ClientVpnConnectionSet `array`
  * items
    * ClientIp
    * ClientVpnEndpointId
    * CommonName
    * ConnectionEndTime
    * ConnectionEstablishedTime
    * ConnectionId
    * EgressBytes
    * EgressPackets
    * IngressBytes
    * IngressPackets
    * PostureComplianceStatuses
      * items
    * Status
      * Code
      * Message
    * Timestamp
    * Username

### ClientVpnConnectionStatus
* ClientVpnConnectionStatus `object`: Describes the status of a client connection.
  * Code
  * Message

### ClientVpnConnectionStatusCode
* ClientVpnConnectionStatusCode `string` (values: active, failed-to-terminate, terminating, terminated)

### ClientVpnEndpoint
* ClientVpnEndpoint `object`: Describes a Client VPN endpoint.
  * AssociatedTargetNetworks
    * items
      * NetworkId
      * NetworkType
  * AuthenticationOptions
    * items
      * ActiveDirectory
        * DirectoryId
      * FederatedAuthentication
        * SamlProviderArn
        * SelfServiceSamlProviderArn
      * MutualAuthentication
        * ClientRootCertificateChain
      * Type
  * ClientCidrBlock
  * ClientConnectOptions
    * Enabled
    * LambdaFunctionArn
    * Status
      * Code
      * Message
  * ClientVpnEndpointId
  * ConnectionLogOptions
    * CloudwatchLogGroup
    * CloudwatchLogStream
    * Enabled
  * CreationTime
  * DeletionTime
  * Description
  * DnsName
  * DnsServers
    * items
  * SecurityGroupIds
    * items
  * SelfServicePortalUrl
  * ServerCertificateArn
  * SplitTunnel
  * Status
    * Code
    * Message
  * Tags
    * items
      * Key
      * Value
  * TransportProtocol
  * VpcId
  * VpnPort
  * VpnProtocol

### ClientVpnEndpointAttributeStatus
* ClientVpnEndpointAttributeStatus `object`: Describes the status of the Client VPN endpoint attribute.
  * Code
  * Message

### ClientVpnEndpointAttributeStatusCode
* ClientVpnEndpointAttributeStatusCode `string` (values: applying, applied)

### ClientVpnEndpointId
* ClientVpnEndpointId `string`

### ClientVpnEndpointIdList
* ClientVpnEndpointIdList `array`
  * items

### ClientVpnEndpointStatus
* ClientVpnEndpointStatus `object`: Describes the state of a Client VPN endpoint.
  * Code
  * Message

### ClientVpnEndpointStatusCode
* ClientVpnEndpointStatusCode `string` (values: pending-associate, available, deleting, deleted)

### ClientVpnRoute
* ClientVpnRoute `object`: Information about a Client VPN endpoint route.
  * ClientVpnEndpointId
  * Description
  * DestinationCidr
  * Origin
  * Status
    * Code
    * Message
  * TargetSubnet
  * Type

### ClientVpnRouteSet
* ClientVpnRouteSet `array`
  * items
    * ClientVpnEndpointId
    * Description
    * DestinationCidr
    * Origin
    * Status
      * Code
      * Message
    * TargetSubnet
    * Type

### ClientVpnRouteStatus
* ClientVpnRouteStatus `object`: Describes the state of a Client VPN endpoint route.
  * Code
  * Message

### ClientVpnRouteStatusCode
* ClientVpnRouteStatusCode `string` (values: creating, active, failed, deleting)

### ClientVpnSecurityGroupIdSet
* ClientVpnSecurityGroupIdSet `array`
  * items

### CoipAddressUsage
* CoipAddressUsage `object`: Describes address usage for a customer-owned address pool.
  * AllocationId
  * AwsAccountId
  * AwsService
  * CoIp

### CoipAddressUsageSet
* CoipAddressUsageSet `array`
  * items
    * AllocationId
    * AwsAccountId
    * AwsService
    * CoIp

### CoipPool
* CoipPool `object`: Describes a customer-owned address pool.
  * LocalGatewayRouteTableId
  * PoolArn
  * PoolCidrs
    * items
  * PoolId
  * Tags
    * items
      * Key
      * Value

### CoipPoolId
* CoipPoolId `string`

### CoipPoolIdSet
* CoipPoolIdSet `array`
  * items

### CoipPoolMaxResults
* CoipPoolMaxResults `integer`

### CoipPoolSet
* CoipPoolSet `array`
  * items
    * LocalGatewayRouteTableId
    * PoolArn
    * PoolCidrs
      * items
    * PoolId
    * Tags
      * items
        * Key
        * Value

### ConfirmProductInstanceRequest
* ConfirmProductInstanceRequest `object`
  * DryRun
  * InstanceId **required**
  * ProductCode **required**

### ConfirmProductInstanceResult
* ConfirmProductInstanceResult `object`
  * OwnerId
  * Return

### ConnectionLogOptions
* ConnectionLogOptions `object`: Describes the client connection logging options for the Client VPN endpoint.
  * CloudwatchLogGroup
  * CloudwatchLogStream
  * Enabled

### ConnectionLogResponseOptions
* ConnectionLogResponseOptions `object`: Information about the client connection logging options for a Client VPN endpoint.
  * CloudwatchLogGroup
  * CloudwatchLogStream
  * Enabled

### ConnectionNotification
* ConnectionNotification `object`: Describes a connection notification for a VPC endpoint or VPC endpoint service.
  * ConnectionEvents
    * items
  * ConnectionNotificationArn
  * ConnectionNotificationId
  * ConnectionNotificationState
  * ConnectionNotificationType
  * ServiceId
  * VpcEndpointId

### ConnectionNotificationId
* ConnectionNotificationId `string`

### ConnectionNotificationIdsList
* ConnectionNotificationIdsList `array`
  * items

### ConnectionNotificationSet
* ConnectionNotificationSet `array`
  * items
    * ConnectionEvents
      * items
    * ConnectionNotificationArn
    * ConnectionNotificationId
    * ConnectionNotificationState
    * ConnectionNotificationType
    * ServiceId
    * VpcEndpointId

### ConnectionNotificationState
* ConnectionNotificationState `string` (values: Enabled, Disabled)

### ConnectionNotificationType
* ConnectionNotificationType `string` (values: Topic)

### ContainerFormat
* ContainerFormat `string` (values: ova)

### ConversionIdStringList
* ConversionIdStringList `array`
  * items

### ConversionTask
* ConversionTask `object`: Describes a conversion task.
  * ConversionTaskId
  * ExpirationTime
  * ImportInstance
    * Description
    * InstanceId
    * Platform
    * Volumes
      * items
        * AvailabilityZone
        * BytesConverted
        * Description
        * Image
          * Checksum
          * Format
          * ImportManifestUrl
          * Size
        * Status
        * StatusMessage
        * Volume
          * Id
          * Size
  * ImportVolume
    * AvailabilityZone
    * BytesConverted
    * Description
    * Image
      * Checksum
      * Format
      * ImportManifestUrl
      * Size
    * Volume
      * Id
      * Size
  * State
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ConversionTaskId
* ConversionTaskId `string`

### ConversionTaskState
* ConversionTaskState `string` (values: active, cancelling, cancelled, completed)

### CopyFpgaImageRequest
* CopyFpgaImageRequest `object`
  * ClientToken
  * Description
  * DryRun
  * Name
  * SourceFpgaImageId **required**
  * SourceRegion **required**

### CopyFpgaImageResult
* CopyFpgaImageResult `object`
  * FpgaImageId

### CopyImageRequest
* CopyImageRequest `object`: Contains the parameters for CopyImage.
  * ClientToken
  * Description
  * DryRun
  * Encrypted
  * KmsKeyId
  * Name **required**
  * SourceImageId **required**
  * SourceRegion **required**

### CopyImageResult
* CopyImageResult `object`: Contains the output of CopyImage.
  * ImageId

### CopySnapshotRequest
* CopySnapshotRequest `object`
  * Description
  * DestinationRegion
  * DryRun
  * Encrypted
  * KmsKeyId
  * PresignedUrl
  * SourceRegion **required**
  * SourceSnapshotId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CopySnapshotResult
* CopySnapshotResult `object`
  * SnapshotId
  * Tags
    * items
      * Key
      * Value

### CopyTagsFromSource
* CopyTagsFromSource `string` (values: volume)

### CoreCount
* CoreCount `integer`

### CoreCountList
* CoreCountList `array`
  * items

### CpuOptions
* CpuOptions `object`: The CPU options for the instance.
  * CoreCount
  * ThreadsPerCore

### CpuOptionsRequest
* CpuOptionsRequest `object`: The CPU options for the instance. Both the core count and threads per core must be specified in the request.
  * CoreCount
  * ThreadsPerCore

### CreateCapacityReservationRequest
* CreateCapacityReservationRequest `object`
  * AvailabilityZone
  * AvailabilityZoneId
  * ClientToken
  * DryRun
  * EbsOptimized
  * EndDate
  * EndDateType
  * EphemeralStorage
  * InstanceCount **required**
  * InstanceMatchCriteria
  * InstancePlatform **required**
  * InstanceType **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Tenancy

### CreateCapacityReservationResult
* CreateCapacityReservationResult `object`
  * CapacityReservation
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableInstanceCount
    * CapacityReservationArn
    * CapacityReservationId
    * CreateDate
    * EbsOptimized
    * EndDate
    * EndDateType
    * EphemeralStorage
    * InstanceMatchCriteria
    * InstancePlatform
    * InstanceType
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * Tenancy
    * TotalInstanceCount

### CreateCarrierGatewayRequest
* CreateCarrierGatewayRequest `object`
  * ClientToken
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateCarrierGatewayResult
* CreateCarrierGatewayResult `object`
  * CarrierGateway
    * CarrierGatewayId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateClientVpnEndpointRequest
* CreateClientVpnEndpointRequest `object`
  * AuthenticationOptions **required**
    * items [ClientVpnAuthenticationRequest](#clientvpnauthenticationrequest)
  * ClientCidrBlock **required**
  * ClientConnectOptions
    * Enabled
    * LambdaFunctionArn
  * ClientToken
  * ConnectionLogOptions **required**
    * CloudwatchLogGroup
    * CloudwatchLogStream
    * Enabled
  * Description
  * DnsServers
    * items
  * DryRun
  * SecurityGroupIds
    * items
  * SelfServicePortal
  * ServerCertificateArn **required**
  * SplitTunnel
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransportProtocol
  * VpcId
  * VpnPort

### CreateClientVpnEndpointResult
* CreateClientVpnEndpointResult `object`
  * ClientVpnEndpointId
  * DnsName
  * Status
    * Code
    * Message

### CreateClientVpnRouteRequest
* CreateClientVpnRouteRequest `object`
  * ClientToken
  * ClientVpnEndpointId **required**
  * Description
  * DestinationCidrBlock **required**
  * DryRun
  * TargetVpcSubnetId **required**

### CreateClientVpnRouteResult
* CreateClientVpnRouteResult `object`
  * Status
    * Code
    * Message

### CreateCustomerGatewayRequest
* CreateCustomerGatewayRequest `object`: Contains the parameters for CreateCustomerGateway.
  * BgpAsn **required**
  * CertificateArn
  * DeviceName
  * DryRun
  * PublicIp
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type **required**

### CreateCustomerGatewayResult
* CreateCustomerGatewayResult `object`: Contains the output of CreateCustomerGateway.
  * CustomerGateway
    * BgpAsn
    * CertificateArn
    * CustomerGatewayId
    * DeviceName
    * IpAddress
    * State
    * Tags
      * items
        * Key
        * Value
    * Type

### CreateDefaultSubnetRequest
* CreateDefaultSubnetRequest `object`
  * AvailabilityZone **required**
  * DryRun

### CreateDefaultSubnetResult
* CreateDefaultSubnetResult `object`
  * Subnet
    * AssignIpv6AddressOnCreation
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableIpAddressCount
    * CidrBlock
    * CustomerOwnedIpv4Pool
    * DefaultForAz
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
    * MapCustomerOwnedIpOnLaunch
    * MapPublicIpOnLaunch
    * OutpostArn
    * OwnerId
    * State
    * SubnetArn
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateDefaultVpcRequest
* CreateDefaultVpcRequest `object`
  * DryRun

### CreateDefaultVpcResult
* CreateDefaultVpcResult `object`
  * Vpc
    * CidrBlock
    * CidrBlockAssociationSet
      * items
        * AssociationId
        * CidrBlock
        * CidrBlockState
          * State
          * StatusMessage
    * DhcpOptionsId
    * InstanceTenancy
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
        * Ipv6Pool
        * NetworkBorderGroup
    * IsDefault
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateDhcpOptionsRequest
* CreateDhcpOptionsRequest `object`
  * DhcpConfigurations **required**
    * items
      * Key
      * Values
        * items
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateDhcpOptionsResult
* CreateDhcpOptionsResult `object`
  * DhcpOptions
    * DhcpConfigurations
      * items
        * Key
        * Values
          * items
    * DhcpOptionsId
    * OwnerId
    * Tags
      * items
        * Key
        * Value

### CreateEgressOnlyInternetGatewayRequest
* CreateEgressOnlyInternetGatewayRequest `object`
  * ClientToken
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateEgressOnlyInternetGatewayResult
* CreateEgressOnlyInternetGatewayResult `object`
  * ClientToken
  * EgressOnlyInternetGateway
    * Attachments
      * items
        * State
        * VpcId
    * EgressOnlyInternetGatewayId
    * Tags
      * items
        * Key
        * Value

### CreateFleetError
* CreateFleetError `object`: Describes the instances that could not be launched by the fleet.
  * ErrorCode
  * ErrorMessage
  * LaunchTemplateAndOverrides
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * GroupName
      * Priority
      * SubnetId
      * WeightedCapacity
  * Lifecycle

### CreateFleetErrorsSet
* CreateFleetErrorsSet `array`
  * items
    * ErrorCode
    * ErrorMessage
    * LaunchTemplateAndOverrides
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * GroupName
        * Priority
        * SubnetId
        * WeightedCapacity
    * Lifecycle

### CreateFleetInstance
* CreateFleetInstance `object`: Describes the instances that were launched by the fleet.
  * InstanceIds
    * items
  * InstanceType
  * LaunchTemplateAndOverrides
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * GroupName
      * Priority
      * SubnetId
      * WeightedCapacity
  * Lifecycle
  * Platform

### CreateFleetInstancesSet
* CreateFleetInstancesSet `array`
  * items
    * InstanceIds
      * items
    * InstanceType
    * LaunchTemplateAndOverrides
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * GroupName
        * Priority
        * SubnetId
        * WeightedCapacity
    * Lifecycle
    * Platform

### CreateFleetRequest
* CreateFleetRequest `object`
  * ClientToken
  * DryRun
  * ExcessCapacityTerminationPolicy
  * LaunchTemplateConfigs **required**
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
  * OnDemandOptions
    * AllocationStrategy
    * CapacityReservationOptions
      * UsageStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * ReplaceUnhealthyInstances
  * SpotOptions
    * AllocationStrategy
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * MaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TargetCapacitySpecification **required**
    * DefaultTargetCapacityType
    * OnDemandTargetCapacity
    * SpotTargetCapacity
    * TotalTargetCapacity **required**
  * TerminateInstancesWithExpiration
  * Type
  * ValidFrom
  * ValidUntil

### CreateFleetResult
* CreateFleetResult `object`
  * Errors
    * items
      * ErrorCode
      * ErrorMessage
      * LaunchTemplateAndOverrides
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
      * Lifecycle
  * FleetId
  * Instances
    * items
      * InstanceIds
        * items
      * InstanceType
      * LaunchTemplateAndOverrides
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
      * Lifecycle
      * Platform

### CreateFlowLogsRequest
* CreateFlowLogsRequest `object`
  * ClientToken
  * DeliverLogsPermissionArn
  * DryRun
  * LogDestination
  * LogDestinationType
  * LogFormat
  * LogGroupName
  * MaxAggregationInterval
  * ResourceIds **required**
    * items
  * ResourceType **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TrafficType **required**

### CreateFlowLogsResult
* CreateFlowLogsResult `object`
  * ClientToken
  * FlowLogIds
    * items
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### CreateFpgaImageRequest
* CreateFpgaImageRequest `object`
  * ClientToken
  * Description
  * DryRun
  * InputStorageLocation **required**
    * Bucket
    * Key
  * LogsStorageLocation
    * Bucket
    * Key
  * Name
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateFpgaImageResult
* CreateFpgaImageResult `object`
  * FpgaImageGlobalId
  * FpgaImageId

### CreateImageRequest
* CreateImageRequest `object`
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * Description
  * DryRun
  * InstanceId **required**
  * Name **required**
  * NoReboot
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateImageResult
* CreateImageResult `object`
  * ImageId

### CreateInstanceExportTaskRequest
* CreateInstanceExportTaskRequest `object`
  * Description
  * ExportToS3Task **required**
    * ContainerFormat
    * DiskImageFormat
    * S3Bucket
    * S3Prefix
  * InstanceId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TargetEnvironment **required**

### CreateInstanceExportTaskResult
* CreateInstanceExportTaskResult `object`
  * ExportTask
    * Description
    * ExportTaskId
    * ExportToS3Task
      * ContainerFormat
      * DiskImageFormat
      * S3Bucket
      * S3Key
    * InstanceExportDetails
      * InstanceId
      * TargetEnvironment
    * State
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### CreateInternetGatewayRequest
* CreateInternetGatewayRequest `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateInternetGatewayResult
* CreateInternetGatewayResult `object`
  * InternetGateway
    * Attachments
      * items
        * State
        * VpcId
    * InternetGatewayId
    * OwnerId
    * Tags
      * items
        * Key
        * Value

### CreateKeyPairRequest
* CreateKeyPairRequest `object`
  * DryRun
  * KeyName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateLaunchTemplateRequest
* CreateLaunchTemplateRequest `object`
  * ClientToken
  * DryRun
  * LaunchTemplateData **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits **required**
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type **required**
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type **required**
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
  * LaunchTemplateName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VersionDescription

### CreateLaunchTemplateResult
* CreateLaunchTemplateResult `object`
  * LaunchTemplate
    * CreateTime
    * CreatedBy
    * DefaultVersionNumber
    * LatestVersionNumber
    * LaunchTemplateId
    * LaunchTemplateName
    * Tags
      * items
        * Key
        * Value
  * Warning
    * Errors
      * items
        * Code
        * Message

### CreateLaunchTemplateVersionRequest
* CreateLaunchTemplateVersionRequest `object`
  * ClientToken
  * DryRun
  * LaunchTemplateData **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits **required**
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type **required**
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type **required**
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
  * LaunchTemplateId
  * LaunchTemplateName
  * SourceVersion
  * VersionDescription

### CreateLaunchTemplateVersionResult
* CreateLaunchTemplateVersionResult `object`
  * LaunchTemplateVersion
    * CreateTime
    * CreatedBy
    * DefaultVersion
    * LaunchTemplateData
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
          * NoDevice
          * VirtualName
      * CapacityReservationSpecification
        * CapacityReservationPreference
        * CapacityReservationTarget
          * CapacityReservationId
          * CapacityReservationResourceGroupArn
      * CpuOptions
        * CoreCount
        * ThreadsPerCore
      * CreditSpecification
        * CpuCredits
      * DisableApiTermination
      * EbsOptimized
      * ElasticGpuSpecifications
        * items
          * Type
      * ElasticInferenceAccelerators
        * items
          * Count
          * Type
      * EnclaveOptions
        * Enabled
      * HibernationOptions
        * Configured
      * IamInstanceProfile
        * Arn
        * Name
      * ImageId
      * InstanceInitiatedShutdownBehavior
      * InstanceMarketOptions
        * MarketType
        * SpotOptions
          * BlockDurationMinutes
          * InstanceInterruptionBehavior
          * MaxPrice
          * SpotInstanceType
          * ValidUntil
      * InstanceType
      * KernelId
      * KeyName
      * LicenseSpecifications
        * items
          * LicenseConfigurationArn
      * MetadataOptions
        * HttpEndpoint
        * HttpPutResponseHopLimit
        * HttpTokens
        * State
      * Monitoring
        * Enabled
      * NetworkInterfaces
        * items
          * AssociateCarrierIpAddress
          * AssociatePublicIpAddress
          * DeleteOnTermination
          * Description
          * DeviceIndex
          * Groups
          * InterfaceType
          * Ipv6AddressCount
          * Ipv6Addresses
          * NetworkCardIndex
          * NetworkInterfaceId
          * PrivateIpAddress
          * PrivateIpAddresses
          * SecondaryPrivateIpAddressCount
          * SubnetId
      * Placement
        * Affinity
        * AvailabilityZone
        * GroupName
        * HostId
        * HostResourceGroupArn
        * PartitionNumber
        * SpreadDomain
        * Tenancy
      * RamDiskId
      * SecurityGroupIds
        * items
      * SecurityGroups
        * items
      * TagSpecifications
        * items
          * ResourceType
          * Tags
      * UserData
    * LaunchTemplateId
    * LaunchTemplateName
    * VersionDescription
    * VersionNumber
  * Warning
    * Errors
      * items
        * Code
        * Message

### CreateLocalGatewayRouteRequest
* CreateLocalGatewayRouteRequest `object`
  * DestinationCidrBlock **required**
  * DryRun
  * LocalGatewayRouteTableId **required**
  * LocalGatewayVirtualInterfaceGroupId **required**

### CreateLocalGatewayRouteResult
* CreateLocalGatewayRouteResult `object`
  * Route
    * DestinationCidrBlock
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayVirtualInterfaceGroupId
    * OwnerId
    * State
    * Type

### CreateLocalGatewayRouteTableVpcAssociationRequest
* CreateLocalGatewayRouteTableVpcAssociationRequest `object`
  * DryRun
  * LocalGatewayRouteTableId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateLocalGatewayRouteTableVpcAssociationResult
* CreateLocalGatewayRouteTableVpcAssociationResult `object`
  * LocalGatewayRouteTableVpcAssociation
    * LocalGatewayId
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayRouteTableVpcAssociationId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateManagedPrefixListRequest
* CreateManagedPrefixListRequest `object`
  * AddressFamily **required**
  * ClientToken
  * DryRun
  * Entries
    * items [AddPrefixListEntry](#addprefixlistentry)
  * MaxEntries **required**
  * PrefixListName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateManagedPrefixListResult
* CreateManagedPrefixListResult `object`
  * PrefixList
    * AddressFamily
    * MaxEntries
    * OwnerId
    * PrefixListArn
    * PrefixListId
    * PrefixListName
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * Version

### CreateNatGatewayRequest
* CreateNatGatewayRequest `object`
  * AllocationId **required**
  * ClientToken
  * DryRun
  * SubnetId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateNatGatewayResult
* CreateNatGatewayResult `object`
  * ClientToken
  * NatGateway
    * CreateTime
    * DeleteTime
    * FailureCode
    * FailureMessage
    * NatGatewayAddresses
      * items
        * AllocationId
        * NetworkInterfaceId
        * PrivateIp
        * PublicIp
    * NatGatewayId
    * ProvisionedBandwidth
      * ProvisionTime
      * Provisioned
      * RequestTime
      * Requested
      * Status
    * State
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateNetworkAclEntryRequest
* CreateNetworkAclEntryRequest `object`
  * CidrBlock
  * DryRun
  * Egress **required**
  * IcmpTypeCode
    * Code
    * Type
  * Ipv6CidrBlock
  * NetworkAclId **required**
  * PortRange
    * From
    * To
  * Protocol **required**
  * RuleAction **required**
  * RuleNumber **required**

### CreateNetworkAclRequest
* CreateNetworkAclRequest `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateNetworkAclResult
* CreateNetworkAclResult `object`
  * NetworkAcl
    * Associations
      * items
        * NetworkAclAssociationId
        * NetworkAclId
        * SubnetId
    * Entries
      * items
        * CidrBlock
        * Egress
        * IcmpTypeCode
          * Code
          * Type
        * Ipv6CidrBlock
        * PortRange
          * From
          * To
        * Protocol
        * RuleAction
        * RuleNumber
    * IsDefault
    * NetworkAclId
    * OwnerId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateNetworkInsightsPathRequest
* CreateNetworkInsightsPathRequest `object`
  * ClientToken **required**
  * Destination **required**
  * DestinationIp
  * DestinationPort
  * DryRun
  * Protocol **required**
  * Source **required**
  * SourceIp
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateNetworkInsightsPathResult
* CreateNetworkInsightsPathResult `object`
  * NetworkInsightsPath
    * CreatedDate
    * Destination
    * DestinationIp
    * DestinationPort
    * NetworkInsightsPathArn
    * NetworkInsightsPathId
    * Protocol
    * Source
    * SourceIp
    * Tags
      * items
        * Key
        * Value

### CreateNetworkInterfacePermissionRequest
* CreateNetworkInterfacePermissionRequest `object`: Contains the parameters for CreateNetworkInterfacePermission.
  * AwsAccountId
  * AwsService
  * DryRun
  * NetworkInterfaceId **required**
  * Permission **required**

### CreateNetworkInterfacePermissionResult
* CreateNetworkInterfacePermissionResult `object`: Contains the output of CreateNetworkInterfacePermission.
  * InterfacePermission
    * AwsAccountId
    * AwsService
    * NetworkInterfaceId
    * NetworkInterfacePermissionId
    * Permission
    * PermissionState
      * State
      * StatusMessage

### CreateNetworkInterfaceRequest
* CreateNetworkInterfaceRequest `object`: Contains the parameters for CreateNetworkInterface.
  * Description
  * DryRun
  * Groups
    * items
  * InterfaceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateNetworkInterfaceResult
* CreateNetworkInterfaceResult `object`: Contains the output of CreateNetworkInterface.
  * NetworkInterface
    * Association
      * AllocationId
      * AssociationId
      * CarrierIp
      * CustomerOwnedIp
      * IpOwnerId
      * PublicDnsName
      * PublicIp
    * Attachment
      * AttachTime
      * AttachmentId
      * DeleteOnTermination
      * DeviceIndex
      * InstanceId
      * InstanceOwnerId
      * NetworkCardIndex
      * Status
    * AvailabilityZone
    * Description
    * Groups
      * items
        * GroupId
        * GroupName
    * InterfaceType
    * Ipv6Addresses
      * items
        * Ipv6Address
    * MacAddress
    * NetworkInterfaceId
    * OutpostArn
    * OwnerId
    * PrivateDnsName
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Association
          * AllocationId
          * AssociationId
          * CarrierIp
          * CustomerOwnedIp
          * IpOwnerId
          * PublicDnsName
          * PublicIp
        * Primary
        * PrivateDnsName
        * PrivateIpAddress
    * RequesterId
    * RequesterManaged
    * SourceDestCheck
    * Status
    * SubnetId
    * TagSet
      * items
        * Key
        * Value
    * VpcId

### CreatePlacementGroupRequest
* CreatePlacementGroupRequest `object`
  * DryRun
  * GroupName
  * PartitionCount
  * Strategy
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreatePlacementGroupResult
* CreatePlacementGroupResult `object`
  * PlacementGroup
    * GroupId
    * GroupName
    * PartitionCount
    * State
    * Strategy
    * Tags
      * items
        * Key
        * Value

### CreateReservedInstancesListingRequest
* CreateReservedInstancesListingRequest `object`: Contains the parameters for CreateReservedInstancesListing.
  * ClientToken **required**
  * InstanceCount **required**
  * PriceSchedules **required**
    * items
      * CurrencyCode
      * Price
      * Term
  * ReservedInstancesId **required**

### CreateReservedInstancesListingResult
* CreateReservedInstancesListingResult `object`: Contains the output of CreateReservedInstancesListing.
  * ReservedInstancesListings
    * items
      * ClientToken
      * CreateDate
      * InstanceCounts
        * items
          * InstanceCount
          * State
      * PriceSchedules
        * items
          * Active
          * CurrencyCode
          * Price
          * Term
      * ReservedInstancesId
      * ReservedInstancesListingId
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
      * UpdateDate

### CreateRouteRequest
* CreateRouteRequest `object`
  * CarrierGatewayId
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * LocalGatewayId
  * NatGatewayId
  * NetworkInterfaceId
  * RouteTableId **required**
  * TransitGatewayId
  * VpcEndpointId
  * VpcPeeringConnectionId

### CreateRouteResult
* CreateRouteResult `object`
  * Return

### CreateRouteTableRequest
* CreateRouteTableRequest `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateRouteTableResult
* CreateRouteTableResult `object`
  * RouteTable
    * Associations
      * items
        * AssociationState
          * State
          * StatusMessage
        * GatewayId
        * Main
        * RouteTableAssociationId
        * RouteTableId
        * SubnetId
    * OwnerId
    * PropagatingVgws
      * items
        * GatewayId
    * RouteTableId
    * Routes
      * items
        * CarrierGatewayId
        * DestinationCidrBlock
        * DestinationIpv6CidrBlock
        * DestinationPrefixListId
        * EgressOnlyInternetGatewayId
        * GatewayId
        * InstanceId
        * InstanceOwnerId
        * LocalGatewayId
        * NatGatewayId
        * NetworkInterfaceId
        * Origin
        * State
        * TransitGatewayId
        * VpcPeeringConnectionId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateSecurityGroupRequest
* CreateSecurityGroupRequest `object`
  * Description **required**
  * DryRun
  * GroupName **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId

### CreateSecurityGroupResult
* CreateSecurityGroupResult `object`
  * GroupId
  * Tags
    * items
      * Key
      * Value

### CreateSnapshotRequest
* CreateSnapshotRequest `object`
  * Description
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VolumeId **required**

### CreateSnapshotsRequest
* CreateSnapshotsRequest `object`
  * CopyTagsFromSource
  * Description
  * DryRun
  * InstanceSpecification **required**
    * ExcludeBootVolume
    * InstanceId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateSnapshotsResult
* CreateSnapshotsResult `object`
  * Snapshots
    * items
      * Description
      * Encrypted
      * OwnerId
      * Progress
      * SnapshotId
      * StartTime
      * State
      * Tags
        * items
          * Key
          * Value
      * VolumeId
      * VolumeSize

### CreateSpotDatafeedSubscriptionRequest
* CreateSpotDatafeedSubscriptionRequest `object`: Contains the parameters for CreateSpotDatafeedSubscription.
  * Bucket **required**
  * DryRun
  * Prefix

### CreateSpotDatafeedSubscriptionResult
* CreateSpotDatafeedSubscriptionResult `object`: Contains the output of CreateSpotDatafeedSubscription.
  * SpotDatafeedSubscription
    * Bucket
    * Fault
      * Code
      * Message
    * OwnerId
    * Prefix
    * State

### CreateSubnetRequest
* CreateSubnetRequest `object`
  * AvailabilityZone
  * AvailabilityZoneId
  * CidrBlock **required**
  * DryRun
  * Ipv6CidrBlock
  * OutpostArn
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId **required**

### CreateSubnetResult
* CreateSubnetResult `object`
  * Subnet
    * AssignIpv6AddressOnCreation
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableIpAddressCount
    * CidrBlock
    * CustomerOwnedIpv4Pool
    * DefaultForAz
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
    * MapCustomerOwnedIpOnLaunch
    * MapPublicIpOnLaunch
    * OutpostArn
    * OwnerId
    * State
    * SubnetArn
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateTagsRequest
* CreateTagsRequest `object`
  * DryRun
  * Resources **required**
    * items [TaggableResourceId](#taggableresourceid)
  * Tags **required**
    * items
      * Key
      * Value

### CreateTrafficMirrorFilterRequest
* CreateTrafficMirrorFilterRequest `object`
  * ClientToken
  * Description
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateTrafficMirrorFilterResult
* CreateTrafficMirrorFilterResult `object`
  * ClientToken
  * TrafficMirrorFilter
    * Description
    * EgressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * IngressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * NetworkServices
      * items
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId

### CreateTrafficMirrorFilterRuleRequest
* CreateTrafficMirrorFilterRuleRequest `object`
  * ClientToken
  * Description
  * DestinationCidrBlock **required**
  * DestinationPortRange
    * FromPort
    * ToPort
  * DryRun
  * Protocol
  * RuleAction **required**
  * RuleNumber **required**
  * SourceCidrBlock **required**
  * SourcePortRange
    * FromPort
    * ToPort
  * TrafficDirection **required**
  * TrafficMirrorFilterId **required**

### CreateTrafficMirrorFilterRuleResult
* CreateTrafficMirrorFilterRuleResult `object`
  * ClientToken
  * TrafficMirrorFilterRule
    * Description
    * DestinationCidrBlock
    * DestinationPortRange
      * FromPort
      * ToPort
    * Protocol
    * RuleAction
    * RuleNumber
    * SourceCidrBlock
    * SourcePortRange
      * FromPort
      * ToPort
    * TrafficDirection
    * TrafficMirrorFilterId
    * TrafficMirrorFilterRuleId

### CreateTrafficMirrorSessionRequest
* CreateTrafficMirrorSessionRequest `object`
  * ClientToken
  * Description
  * DryRun
  * NetworkInterfaceId **required**
  * PacketLength
  * SessionNumber **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TrafficMirrorFilterId **required**
  * TrafficMirrorTargetId **required**
  * VirtualNetworkId

### CreateTrafficMirrorSessionResult
* CreateTrafficMirrorSessionResult `object`
  * ClientToken
  * TrafficMirrorSession
    * Description
    * NetworkInterfaceId
    * OwnerId
    * PacketLength
    * SessionNumber
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId
    * TrafficMirrorSessionId
    * TrafficMirrorTargetId
    * VirtualNetworkId

### CreateTrafficMirrorTargetRequest
* CreateTrafficMirrorTargetRequest `object`
  * ClientToken
  * Description
  * DryRun
  * NetworkInterfaceId
  * NetworkLoadBalancerArn
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateTrafficMirrorTargetResult
* CreateTrafficMirrorTargetResult `object`
  * ClientToken
  * TrafficMirrorTarget
    * Description
    * NetworkInterfaceId
    * NetworkLoadBalancerArn
    * OwnerId
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorTargetId
    * Type

### CreateTransitGatewayConnectPeerRequest
* CreateTransitGatewayConnectPeerRequest `object`
  * BgpOptions
    * PeerAsn
  * DryRun
  * InsideCidrBlocks **required**
    * items
  * PeerAddress **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayAddress
  * TransitGatewayAttachmentId **required**

### CreateTransitGatewayConnectPeerResult
* CreateTransitGatewayConnectPeerResult `object`
  * TransitGatewayConnectPeer
    * ConnectPeerConfiguration
      * BgpConfigurations
        * items
          * BgpStatus
          * PeerAddress
          * PeerAsn
          * TransitGatewayAddress
          * TransitGatewayAsn
      * InsideCidrBlocks
        * items
      * PeerAddress
      * Protocol
      * TransitGatewayAddress
    * CreationTime
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayConnectPeerId

### CreateTransitGatewayConnectRequest
* CreateTransitGatewayConnectRequest `object`
  * DryRun
  * Options **required**
    * Protocol **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransportTransitGatewayAttachmentId **required**

### CreateTransitGatewayConnectRequestOptions
* CreateTransitGatewayConnectRequestOptions `object`: The options for a Connect attachment.
  * Protocol **required**

### CreateTransitGatewayConnectResult
* CreateTransitGatewayConnectResult `object`
  * TransitGatewayConnect
    * CreationTime
    * Options
      * Protocol
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * TransportTransitGatewayAttachmentId

### CreateTransitGatewayMulticastDomainRequest
* CreateTransitGatewayMulticastDomainRequest `object`
  * DryRun
  * Options
    * AutoAcceptSharedAssociations
    * Igmpv2Support
    * StaticSourcesSupport
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

### CreateTransitGatewayMulticastDomainRequestOptions
* CreateTransitGatewayMulticastDomainRequestOptions `object`: The options for the transit gateway multicast domain.
  * AutoAcceptSharedAssociations
  * Igmpv2Support
  * StaticSourcesSupport

### CreateTransitGatewayMulticastDomainResult
* CreateTransitGatewayMulticastDomainResult `object`
  * TransitGatewayMulticastDomain
    * CreationTime
    * Options
      * AutoAcceptSharedAssociations
      * Igmpv2Support
      * StaticSourcesSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayMulticastDomainArn
    * TransitGatewayMulticastDomainId

### CreateTransitGatewayPeeringAttachmentRequest
* CreateTransitGatewayPeeringAttachmentRequest `object`
  * DryRun
  * PeerAccountId **required**
  * PeerRegion **required**
  * PeerTransitGatewayId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

### CreateTransitGatewayPeeringAttachmentResult
* CreateTransitGatewayPeeringAttachmentResult `object`
  * TransitGatewayPeeringAttachment
    * AccepterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * CreationTime
    * RequesterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * State
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId

### CreateTransitGatewayPrefixListReferenceRequest
* CreateTransitGatewayPrefixListReferenceRequest `object`
  * Blackhole
  * DryRun
  * PrefixListId **required**
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

### CreateTransitGatewayPrefixListReferenceResult
* CreateTransitGatewayPrefixListReferenceResult `object`
  * TransitGatewayPrefixListReference
    * Blackhole
    * PrefixListId
    * PrefixListOwnerId
    * State
    * TransitGatewayAttachment
      * ResourceId
      * ResourceType
      * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### CreateTransitGatewayRequest
* CreateTransitGatewayRequest `object`
  * Description
  * DryRun
  * Options
    * AmazonSideAsn
    * AutoAcceptSharedAttachments
    * DefaultRouteTableAssociation
    * DefaultRouteTablePropagation
    * DnsSupport
    * MulticastSupport
    * TransitGatewayCidrBlocks
      * items
    * VpnEcmpSupport
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateTransitGatewayResult
* CreateTransitGatewayResult `object`
  * TransitGateway
    * CreationTime
    * Description
    * Options
      * AmazonSideAsn
      * AssociationDefaultRouteTableId
      * AutoAcceptSharedAttachments
      * DefaultRouteTableAssociation
      * DefaultRouteTablePropagation
      * DnsSupport
      * MulticastSupport
      * PropagationDefaultRouteTableId
      * TransitGatewayCidrBlocks
        * items
      * VpnEcmpSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayArn
    * TransitGatewayId

### CreateTransitGatewayRouteRequest
* CreateTransitGatewayRouteRequest `object`
  * Blackhole
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

### CreateTransitGatewayRouteResult
* CreateTransitGatewayRouteResult `object`
  * Route
    * DestinationCidrBlock
    * PrefixListId
    * State
    * TransitGatewayAttachments
      * items
        * ResourceId
        * ResourceType
        * TransitGatewayAttachmentId
    * Type

### CreateTransitGatewayRouteTableRequest
* CreateTransitGatewayRouteTableRequest `object`
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**

### CreateTransitGatewayRouteTableResult
* CreateTransitGatewayRouteTableResult `object`
  * TransitGatewayRouteTable
    * CreationTime
    * DefaultAssociationRouteTable
    * DefaultPropagationRouteTable
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayRouteTableId

### CreateTransitGatewayVpcAttachmentRequest
* CreateTransitGatewayVpcAttachmentRequest `object`
  * DryRun
  * Options
    * ApplianceModeSupport
    * DnsSupport
    * Ipv6Support
  * SubnetIds **required**
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId **required**
  * VpcId **required**

### CreateTransitGatewayVpcAttachmentRequestOptions
* CreateTransitGatewayVpcAttachmentRequestOptions `object`: Describes the options for a VPC attachment.
  * ApplianceModeSupport
  * DnsSupport
  * Ipv6Support

### CreateTransitGatewayVpcAttachmentResult
* CreateTransitGatewayVpcAttachmentResult `object`
  * TransitGatewayVpcAttachment
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### CreateVolumePermission
* CreateVolumePermission `object`: Describes the user or group to be added or removed from the list of create volume permissions for a volume.
  * Group
  * UserId

### CreateVolumePermissionList
* CreateVolumePermissionList `array`
  * items
    * Group
    * UserId

### CreateVolumePermissionModifications
* CreateVolumePermissionModifications `object`: Describes modifications to the list of create volume permissions for a volume.
  * Add
    * items
      * Group
      * UserId
  * Remove
    * items
      * Group
      * UserId

### CreateVolumeRequest
* CreateVolumeRequest `object`
  * AvailabilityZone **required**
  * DryRun
  * Encrypted
  * Iops
  * KmsKeyId
  * MultiAttachEnabled
  * OutpostArn
  * Size
  * SnapshotId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Throughput
  * VolumeType

### CreateVpcEndpointConnectionNotificationRequest
* CreateVpcEndpointConnectionNotificationRequest `object`
  * ClientToken
  * ConnectionEvents **required**
    * items
  * ConnectionNotificationArn **required**
  * DryRun
  * ServiceId
  * VpcEndpointId

### CreateVpcEndpointConnectionNotificationResult
* CreateVpcEndpointConnectionNotificationResult `object`
  * ClientToken
  * ConnectionNotification
    * ConnectionEvents
      * items
    * ConnectionNotificationArn
    * ConnectionNotificationId
    * ConnectionNotificationState
    * ConnectionNotificationType
    * ServiceId
    * VpcEndpointId

### CreateVpcEndpointRequest
* CreateVpcEndpointRequest `object`: Contains the parameters for CreateVpcEndpoint.
  * ClientToken
  * DryRun
  * PolicyDocument
  * PrivateDnsEnabled
  * RouteTableIds
    * items
  * SecurityGroupIds
    * items
  * ServiceName **required**
  * SubnetIds
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcEndpointType
  * VpcId **required**

### CreateVpcEndpointResult
* CreateVpcEndpointResult `object`: Contains the output of CreateVpcEndpoint.
  * ClientToken
  * VpcEndpoint
    * CreationTimestamp
    * DnsEntries
      * items
        * DnsName
        * HostedZoneId
    * Groups
      * items
        * GroupId
        * GroupName
    * LastError
      * Code
      * Message
    * NetworkInterfaceIds
      * items
    * OwnerId
    * PolicyDocument
    * PrivateDnsEnabled
    * RequesterManaged
    * RouteTableIds
      * items
    * ServiceName
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * VpcEndpointId
    * VpcEndpointType
    * VpcId

### CreateVpcEndpointServiceConfigurationRequest
* CreateVpcEndpointServiceConfigurationRequest `object`
  * AcceptanceRequired
  * ClientToken
  * DryRun
  * GatewayLoadBalancerArns
    * items
  * NetworkLoadBalancerArns
    * items
  * PrivateDnsName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateVpcEndpointServiceConfigurationResult
* CreateVpcEndpointServiceConfigurationResult `object`
  * ClientToken
  * ServiceConfiguration
    * AcceptanceRequired
    * AvailabilityZones
      * items
    * BaseEndpointDnsNames
      * items
    * GatewayLoadBalancerArns
      * items
    * ManagesVpcEndpoints
    * NetworkLoadBalancerArns
      * items
    * PrivateDnsName
    * PrivateDnsNameConfiguration
      * Name
      * State
      * Type
      * Value
    * ServiceId
    * ServiceName
    * ServiceState
    * ServiceType
      * items
        * ServiceType
    * Tags
      * items
        * Key
        * Value

### CreateVpcPeeringConnectionRequest
* CreateVpcPeeringConnectionRequest `object`
  * DryRun
  * PeerOwnerId
  * PeerRegion
  * PeerVpcId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * VpcId

### CreateVpcPeeringConnectionResult
* CreateVpcPeeringConnectionResult `object`
  * VpcPeeringConnection
    * AccepterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * ExpirationTime
    * RequesterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * VpcPeeringConnectionId

### CreateVpcRequest
* CreateVpcRequest `object`
  * AmazonProvidedIpv6CidrBlock
  * CidrBlock **required**
  * DryRun
  * InstanceTenancy
  * Ipv6CidrBlock
  * Ipv6CidrBlockNetworkBorderGroup
  * Ipv6Pool
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### CreateVpcResult
* CreateVpcResult `object`
  * Vpc
    * CidrBlock
    * CidrBlockAssociationSet
      * items
        * AssociationId
        * CidrBlock
        * CidrBlockState
          * State
          * StatusMessage
    * DhcpOptionsId
    * InstanceTenancy
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
        * Ipv6Pool
        * NetworkBorderGroup
    * IsDefault
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### CreateVpnConnectionRequest
* CreateVpnConnectionRequest `object`: Contains the parameters for CreateVpnConnection.
  * CustomerGatewayId **required**
  * DryRun
  * Options
    * EnableAcceleration
    * LocalIpv4NetworkCidr
    * LocalIpv6NetworkCidr
    * RemoteIpv4NetworkCidr
    * RemoteIpv6NetworkCidr
    * StaticRoutesOnly
    * TunnelInsideIpVersion
    * TunnelOptions
      * items [VpnTunnelOptionsSpecification](#vpntunneloptionsspecification)
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TransitGatewayId
  * Type **required**
  * VpnGatewayId

### CreateVpnConnectionResult
* CreateVpnConnectionResult `object`: Contains the output of CreateVpnConnection.
  * VpnConnection
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### CreateVpnConnectionRouteRequest
* CreateVpnConnectionRouteRequest `object`: Contains the parameters for CreateVpnConnectionRoute.
  * DestinationCidrBlock **required**
  * VpnConnectionId **required**

### CreateVpnGatewayRequest
* CreateVpnGatewayRequest `object`: Contains the parameters for CreateVpnGateway.
  * AmazonSideAsn
  * AvailabilityZone
  * DryRun
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type **required**

### CreateVpnGatewayResult
* CreateVpnGatewayResult `object`: Contains the output of CreateVpnGateway.
  * VpnGateway
    * AmazonSideAsn
    * AvailabilityZone
    * State
    * Tags
      * items
        * Key
        * Value
    * Type
    * VpcAttachments
      * items
        * State
        * VpcId
    * VpnGatewayId

### CreditSpecification
* CreditSpecification `object`: Describes the credit option for CPU usage of a T2, T3, or T3a instance.
  * CpuCredits

### CreditSpecificationRequest
* CreditSpecificationRequest `object`: The credit option for CPU usage of a T2, T3, or T3a instance.
  * CpuCredits **required**

### CurrencyCodeValues
* CurrencyCodeValues `string` (values: USD)

### CurrentGenerationFlag
* CurrentGenerationFlag `boolean`

### CustomerGateway
* CustomerGateway `object`: Describes a customer gateway.
  * BgpAsn
  * CertificateArn
  * CustomerGatewayId
  * DeviceName
  * IpAddress
  * State
  * Tags
    * items
      * Key
      * Value
  * Type

### CustomerGatewayId
* CustomerGatewayId `string`

### CustomerGatewayIdStringList
* CustomerGatewayIdStringList `array`
  * items

### CustomerGatewayList
* CustomerGatewayList `array`
  * items
    * BgpAsn
    * CertificateArn
    * CustomerGatewayId
    * DeviceName
    * IpAddress
    * State
    * Tags
      * items
        * Key
        * Value
    * Type

### DITMaxResults
* DITMaxResults `integer`

### DITOMaxResults
* DITOMaxResults `integer`

### DatafeedSubscriptionState
* DatafeedSubscriptionState `string` (values: Active, Inactive)

### DateTime
* DateTime `string`

### DedicatedHostFlag
* DedicatedHostFlag `boolean`

### DedicatedHostId
* DedicatedHostId `string`

### DefaultNetworkCardIndex
* DefaultNetworkCardIndex `integer`

### DefaultRouteTableAssociationValue
* DefaultRouteTableAssociationValue `string` (values: enable, disable)

### DefaultRouteTablePropagationValue
* DefaultRouteTablePropagationValue `string` (values: enable, disable)

### DefaultTargetCapacityType
* DefaultTargetCapacityType `string` (values: spot, on-demand)

### DefaultingDhcpOptionsId
* DefaultingDhcpOptionsId `string`

### DeleteCarrierGatewayRequest
* DeleteCarrierGatewayRequest `object`
  * CarrierGatewayId **required**
  * DryRun

### DeleteCarrierGatewayResult
* DeleteCarrierGatewayResult `object`
  * CarrierGateway
    * CarrierGatewayId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### DeleteClientVpnEndpointRequest
* DeleteClientVpnEndpointRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun

### DeleteClientVpnEndpointResult
* DeleteClientVpnEndpointResult `object`
  * Status
    * Code
    * Message

### DeleteClientVpnRouteRequest
* DeleteClientVpnRouteRequest `object`
  * ClientVpnEndpointId **required**
  * DestinationCidrBlock **required**
  * DryRun
  * TargetVpcSubnetId

### DeleteClientVpnRouteResult
* DeleteClientVpnRouteResult `object`
  * Status
    * Code
    * Message

### DeleteCustomerGatewayRequest
* DeleteCustomerGatewayRequest `object`: Contains the parameters for DeleteCustomerGateway.
  * CustomerGatewayId **required**
  * DryRun

### DeleteDhcpOptionsRequest
* DeleteDhcpOptionsRequest `object`
  * DhcpOptionsId **required**
  * DryRun

### DeleteEgressOnlyInternetGatewayRequest
* DeleteEgressOnlyInternetGatewayRequest `object`
  * DryRun
  * EgressOnlyInternetGatewayId **required**

### DeleteEgressOnlyInternetGatewayResult
* DeleteEgressOnlyInternetGatewayResult `object`
  * ReturnCode

### DeleteFleetError
* DeleteFleetError `object`: Describes an EC2 Fleet error.
  * Code
  * Message

### DeleteFleetErrorCode
* DeleteFleetErrorCode `string` (values: fleetIdDoesNotExist, fleetIdMalformed, fleetNotInDeletableState, unexpectedError)

### DeleteFleetErrorItem
* DeleteFleetErrorItem `object`: Describes an EC2 Fleet that was not successfully deleted.
  * Error
    * Code
    * Message
  * FleetId

### DeleteFleetErrorSet
* DeleteFleetErrorSet `array`
  * items
    * Error
      * Code
      * Message
    * FleetId

### DeleteFleetSuccessItem
* DeleteFleetSuccessItem `object`: Describes an EC2 Fleet that was successfully deleted.
  * CurrentFleetState
  * FleetId
  * PreviousFleetState

### DeleteFleetSuccessSet
* DeleteFleetSuccessSet `array`
  * items
    * CurrentFleetState
    * FleetId
    * PreviousFleetState

### DeleteFleetsRequest
* DeleteFleetsRequest `object`
  * DryRun
  * FleetIds **required**
    * items [FleetId](#fleetid)
  * TerminateInstances **required**

### DeleteFleetsResult
* DeleteFleetsResult `object`
  * SuccessfulFleetDeletions
    * items
      * CurrentFleetState
      * FleetId
      * PreviousFleetState
  * UnsuccessfulFleetDeletions
    * items
      * Error
        * Code
        * Message
      * FleetId

### DeleteFlowLogsRequest
* DeleteFlowLogsRequest `object`
  * DryRun
  * FlowLogIds **required**
    * items

### DeleteFlowLogsResult
* DeleteFlowLogsResult `object`
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### DeleteFpgaImageRequest
* DeleteFpgaImageRequest `object`
  * DryRun
  * FpgaImageId **required**

### DeleteFpgaImageResult
* DeleteFpgaImageResult `object`
  * Return

### DeleteInternetGatewayRequest
* DeleteInternetGatewayRequest `object`
  * DryRun
  * InternetGatewayId **required**

### DeleteKeyPairRequest
* DeleteKeyPairRequest `object`
  * DryRun
  * KeyName
  * KeyPairId

### DeleteLaunchTemplateRequest
* DeleteLaunchTemplateRequest `object`
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName

### DeleteLaunchTemplateResult
* DeleteLaunchTemplateResult `object`
  * LaunchTemplate
    * CreateTime
    * CreatedBy
    * DefaultVersionNumber
    * LatestVersionNumber
    * LaunchTemplateId
    * LaunchTemplateName
    * Tags
      * items
        * Key
        * Value

### DeleteLaunchTemplateVersionsRequest
* DeleteLaunchTemplateVersionsRequest `object`
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName
  * Versions **required**
    * items

### DeleteLaunchTemplateVersionsResponseErrorItem
* DeleteLaunchTemplateVersionsResponseErrorItem `object`: Describes a launch template version that could not be deleted.
  * LaunchTemplateId
  * LaunchTemplateName
  * ResponseError
    * Code
    * Message
  * VersionNumber

### DeleteLaunchTemplateVersionsResponseErrorSet
* DeleteLaunchTemplateVersionsResponseErrorSet `array`
  * items
    * LaunchTemplateId
    * LaunchTemplateName
    * ResponseError
      * Code
      * Message
    * VersionNumber

### DeleteLaunchTemplateVersionsResponseSuccessItem
* DeleteLaunchTemplateVersionsResponseSuccessItem `object`: Describes a launch template version that was successfully deleted.
  * LaunchTemplateId
  * LaunchTemplateName
  * VersionNumber

### DeleteLaunchTemplateVersionsResponseSuccessSet
* DeleteLaunchTemplateVersionsResponseSuccessSet `array`
  * items
    * LaunchTemplateId
    * LaunchTemplateName
    * VersionNumber

### DeleteLaunchTemplateVersionsResult
* DeleteLaunchTemplateVersionsResult `object`
  * SuccessfullyDeletedLaunchTemplateVersions
    * items
      * LaunchTemplateId
      * LaunchTemplateName
      * VersionNumber
  * UnsuccessfullyDeletedLaunchTemplateVersions
    * items
      * LaunchTemplateId
      * LaunchTemplateName
      * ResponseError
        * Code
        * Message
      * VersionNumber

### DeleteLocalGatewayRouteRequest
* DeleteLocalGatewayRouteRequest `object`
  * DestinationCidrBlock **required**
  * DryRun
  * LocalGatewayRouteTableId **required**

### DeleteLocalGatewayRouteResult
* DeleteLocalGatewayRouteResult `object`
  * Route
    * DestinationCidrBlock
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayVirtualInterfaceGroupId
    * OwnerId
    * State
    * Type

### DeleteLocalGatewayRouteTableVpcAssociationRequest
* DeleteLocalGatewayRouteTableVpcAssociationRequest `object`
  * DryRun
  * LocalGatewayRouteTableVpcAssociationId **required**

### DeleteLocalGatewayRouteTableVpcAssociationResult
* DeleteLocalGatewayRouteTableVpcAssociationResult `object`
  * LocalGatewayRouteTableVpcAssociation
    * LocalGatewayId
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayRouteTableVpcAssociationId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### DeleteManagedPrefixListRequest
* DeleteManagedPrefixListRequest `object`
  * DryRun
  * PrefixListId **required**

### DeleteManagedPrefixListResult
* DeleteManagedPrefixListResult `object`
  * PrefixList
    * AddressFamily
    * MaxEntries
    * OwnerId
    * PrefixListArn
    * PrefixListId
    * PrefixListName
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * Version

### DeleteNatGatewayRequest
* DeleteNatGatewayRequest `object`
  * DryRun
  * NatGatewayId **required**

### DeleteNatGatewayResult
* DeleteNatGatewayResult `object`
  * NatGatewayId

### DeleteNetworkAclEntryRequest
* DeleteNetworkAclEntryRequest `object`
  * DryRun
  * Egress **required**
  * NetworkAclId **required**
  * RuleNumber **required**

### DeleteNetworkAclRequest
* DeleteNetworkAclRequest `object`
  * DryRun
  * NetworkAclId **required**

### DeleteNetworkInsightsAnalysisRequest
* DeleteNetworkInsightsAnalysisRequest `object`
  * DryRun
  * NetworkInsightsAnalysisId **required**

### DeleteNetworkInsightsAnalysisResult
* DeleteNetworkInsightsAnalysisResult `object`
  * NetworkInsightsAnalysisId

### DeleteNetworkInsightsPathRequest
* DeleteNetworkInsightsPathRequest `object`
  * DryRun
  * NetworkInsightsPathId **required**

### DeleteNetworkInsightsPathResult
* DeleteNetworkInsightsPathResult `object`
  * NetworkInsightsPathId

### DeleteNetworkInterfacePermissionRequest
* DeleteNetworkInterfacePermissionRequest `object`: Contains the parameters for DeleteNetworkInterfacePermission.
  * DryRun
  * Force
  * NetworkInterfacePermissionId **required**

### DeleteNetworkInterfacePermissionResult
* DeleteNetworkInterfacePermissionResult `object`: Contains the output for DeleteNetworkInterfacePermission.
  * Return

### DeleteNetworkInterfaceRequest
* DeleteNetworkInterfaceRequest `object`: Contains the parameters for DeleteNetworkInterface.
  * DryRun
  * NetworkInterfaceId **required**

### DeletePlacementGroupRequest
* DeletePlacementGroupRequest `object`
  * DryRun
  * GroupName **required**

### DeleteQueuedReservedInstancesError
* DeleteQueuedReservedInstancesError `object`: Describes the error for a Reserved Instance whose queued purchase could not be deleted.
  * Code
  * Message

### DeleteQueuedReservedInstancesErrorCode
* DeleteQueuedReservedInstancesErrorCode `string` (values: reserved-instances-id-invalid, reserved-instances-not-in-queued-state, unexpected-error)

### DeleteQueuedReservedInstancesIdList
* DeleteQueuedReservedInstancesIdList `array`
  * items

### DeleteQueuedReservedInstancesRequest
* DeleteQueuedReservedInstancesRequest `object`
  * DryRun
  * ReservedInstancesIds **required**
    * items

### DeleteQueuedReservedInstancesResult
* DeleteQueuedReservedInstancesResult `object`
  * FailedQueuedPurchaseDeletions
    * items
      * Error
        * Code
        * Message
      * ReservedInstancesId
  * SuccessfulQueuedPurchaseDeletions
    * items
      * ReservedInstancesId

### DeleteRouteRequest
* DeleteRouteRequest `object`
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * RouteTableId **required**

### DeleteRouteTableRequest
* DeleteRouteTableRequest `object`
  * DryRun
  * RouteTableId **required**

### DeleteSecurityGroupRequest
* DeleteSecurityGroupRequest `object`
  * DryRun
  * GroupId
  * GroupName

### DeleteSnapshotRequest
* DeleteSnapshotRequest `object`
  * DryRun
  * SnapshotId **required**

### DeleteSpotDatafeedSubscriptionRequest
* DeleteSpotDatafeedSubscriptionRequest `object`: Contains the parameters for DeleteSpotDatafeedSubscription.
  * DryRun

### DeleteSubnetRequest
* DeleteSubnetRequest `object`
  * DryRun
  * SubnetId **required**

### DeleteTagsRequest
* DeleteTagsRequest `object`
  * DryRun
  * Resources **required**
    * items [TaggableResourceId](#taggableresourceid)
  * Tags
    * items
      * Key
      * Value

### DeleteTrafficMirrorFilterRequest
* DeleteTrafficMirrorFilterRequest `object`
  * DryRun
  * TrafficMirrorFilterId **required**

### DeleteTrafficMirrorFilterResult
* DeleteTrafficMirrorFilterResult `object`
  * TrafficMirrorFilterId

### DeleteTrafficMirrorFilterRuleRequest
* DeleteTrafficMirrorFilterRuleRequest `object`
  * DryRun
  * TrafficMirrorFilterRuleId **required**

### DeleteTrafficMirrorFilterRuleResult
* DeleteTrafficMirrorFilterRuleResult `object`
  * TrafficMirrorFilterRuleId

### DeleteTrafficMirrorSessionRequest
* DeleteTrafficMirrorSessionRequest `object`
  * DryRun
  * TrafficMirrorSessionId **required**

### DeleteTrafficMirrorSessionResult
* DeleteTrafficMirrorSessionResult `object`
  * TrafficMirrorSessionId

### DeleteTrafficMirrorTargetRequest
* DeleteTrafficMirrorTargetRequest `object`
  * DryRun
  * TrafficMirrorTargetId **required**

### DeleteTrafficMirrorTargetResult
* DeleteTrafficMirrorTargetResult `object`
  * TrafficMirrorTargetId

### DeleteTransitGatewayConnectPeerRequest
* DeleteTransitGatewayConnectPeerRequest `object`
  * DryRun
  * TransitGatewayConnectPeerId **required**

### DeleteTransitGatewayConnectPeerResult
* DeleteTransitGatewayConnectPeerResult `object`
  * TransitGatewayConnectPeer
    * ConnectPeerConfiguration
      * BgpConfigurations
        * items
          * BgpStatus
          * PeerAddress
          * PeerAsn
          * TransitGatewayAddress
          * TransitGatewayAsn
      * InsideCidrBlocks
        * items
      * PeerAddress
      * Protocol
      * TransitGatewayAddress
    * CreationTime
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayConnectPeerId

### DeleteTransitGatewayConnectRequest
* DeleteTransitGatewayConnectRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### DeleteTransitGatewayConnectResult
* DeleteTransitGatewayConnectResult `object`
  * TransitGatewayConnect
    * CreationTime
    * Options
      * Protocol
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * TransportTransitGatewayAttachmentId

### DeleteTransitGatewayMulticastDomainRequest
* DeleteTransitGatewayMulticastDomainRequest `object`
  * DryRun
  * TransitGatewayMulticastDomainId **required**

### DeleteTransitGatewayMulticastDomainResult
* DeleteTransitGatewayMulticastDomainResult `object`
  * TransitGatewayMulticastDomain
    * CreationTime
    * Options
      * AutoAcceptSharedAssociations
      * Igmpv2Support
      * StaticSourcesSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayMulticastDomainArn
    * TransitGatewayMulticastDomainId

### DeleteTransitGatewayPeeringAttachmentRequest
* DeleteTransitGatewayPeeringAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### DeleteTransitGatewayPeeringAttachmentResult
* DeleteTransitGatewayPeeringAttachmentResult `object`
  * TransitGatewayPeeringAttachment
    * AccepterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * CreationTime
    * RequesterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * State
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId

### DeleteTransitGatewayPrefixListReferenceRequest
* DeleteTransitGatewayPrefixListReferenceRequest `object`
  * DryRun
  * PrefixListId **required**
  * TransitGatewayRouteTableId **required**

### DeleteTransitGatewayPrefixListReferenceResult
* DeleteTransitGatewayPrefixListReferenceResult `object`
  * TransitGatewayPrefixListReference
    * Blackhole
    * PrefixListId
    * PrefixListOwnerId
    * State
    * TransitGatewayAttachment
      * ResourceId
      * ResourceType
      * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### DeleteTransitGatewayRequest
* DeleteTransitGatewayRequest `object`
  * DryRun
  * TransitGatewayId **required**

### DeleteTransitGatewayResult
* DeleteTransitGatewayResult `object`
  * TransitGateway
    * CreationTime
    * Description
    * Options
      * AmazonSideAsn
      * AssociationDefaultRouteTableId
      * AutoAcceptSharedAttachments
      * DefaultRouteTableAssociation
      * DefaultRouteTablePropagation
      * DnsSupport
      * MulticastSupport
      * PropagationDefaultRouteTableId
      * TransitGatewayCidrBlocks
        * items
      * VpnEcmpSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayArn
    * TransitGatewayId

### DeleteTransitGatewayRouteRequest
* DeleteTransitGatewayRouteRequest `object`
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayRouteTableId **required**

### DeleteTransitGatewayRouteResult
* DeleteTransitGatewayRouteResult `object`
  * Route
    * DestinationCidrBlock
    * PrefixListId
    * State
    * TransitGatewayAttachments
      * items
        * ResourceId
        * ResourceType
        * TransitGatewayAttachmentId
    * Type

### DeleteTransitGatewayRouteTableRequest
* DeleteTransitGatewayRouteTableRequest `object`
  * DryRun
  * TransitGatewayRouteTableId **required**

### DeleteTransitGatewayRouteTableResult
* DeleteTransitGatewayRouteTableResult `object`
  * TransitGatewayRouteTable
    * CreationTime
    * DefaultAssociationRouteTable
    * DefaultPropagationRouteTable
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayRouteTableId

### DeleteTransitGatewayVpcAttachmentRequest
* DeleteTransitGatewayVpcAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### DeleteTransitGatewayVpcAttachmentResult
* DeleteTransitGatewayVpcAttachmentResult `object`
  * TransitGatewayVpcAttachment
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### DeleteVolumeRequest
* DeleteVolumeRequest `object`
  * DryRun
  * VolumeId **required**

### DeleteVpcEndpointConnectionNotificationsRequest
* DeleteVpcEndpointConnectionNotificationsRequest `object`
  * ConnectionNotificationIds **required**
    * items
  * DryRun

### DeleteVpcEndpointConnectionNotificationsResult
* DeleteVpcEndpointConnectionNotificationsResult `object`
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### DeleteVpcEndpointServiceConfigurationsRequest
* DeleteVpcEndpointServiceConfigurationsRequest `object`
  * DryRun
  * ServiceIds **required**
    * items

### DeleteVpcEndpointServiceConfigurationsResult
* DeleteVpcEndpointServiceConfigurationsResult `object`
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### DeleteVpcEndpointsRequest
* DeleteVpcEndpointsRequest `object`: Contains the parameters for DeleteVpcEndpoints.
  * DryRun
  * VpcEndpointIds **required**
    * items

### DeleteVpcEndpointsResult
* DeleteVpcEndpointsResult `object`: Contains the output of DeleteVpcEndpoints.
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### DeleteVpcPeeringConnectionRequest
* DeleteVpcPeeringConnectionRequest `object`
  * DryRun
  * VpcPeeringConnectionId **required**

### DeleteVpcPeeringConnectionResult
* DeleteVpcPeeringConnectionResult `object`
  * Return

### DeleteVpcRequest
* DeleteVpcRequest `object`
  * DryRun
  * VpcId **required**

### DeleteVpnConnectionRequest
* DeleteVpnConnectionRequest `object`: Contains the parameters for DeleteVpnConnection.
  * DryRun
  * VpnConnectionId **required**

### DeleteVpnConnectionRouteRequest
* DeleteVpnConnectionRouteRequest `object`: Contains the parameters for DeleteVpnConnectionRoute.
  * DestinationCidrBlock **required**
  * VpnConnectionId **required**

### DeleteVpnGatewayRequest
* DeleteVpnGatewayRequest `object`: Contains the parameters for DeleteVpnGateway.
  * DryRun
  * VpnGatewayId **required**

### DeprovisionByoipCidrRequest
* DeprovisionByoipCidrRequest `object`
  * Cidr **required**
  * DryRun

### DeprovisionByoipCidrResult
* DeprovisionByoipCidrResult `object`
  * ByoipCidr
    * Cidr
    * Description
    * State
    * StatusMessage

### DeregisterImageRequest
* DeregisterImageRequest `object`: Contains the parameters for DeregisterImage.
  * DryRun
  * ImageId **required**

### DeregisterInstanceEventNotificationAttributesRequest
* DeregisterInstanceEventNotificationAttributesRequest `object`
  * DryRun
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

### DeregisterInstanceEventNotificationAttributesResult
* DeregisterInstanceEventNotificationAttributesResult `object`
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

### DeregisterInstanceTagAttributeRequest
* DeregisterInstanceTagAttributeRequest `object`: Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
  * IncludeAllTagsOfInstance
  * InstanceTagKeys
    * items

### DeregisterTransitGatewayMulticastGroupMembersRequest
* DeregisterTransitGatewayMulticastGroupMembersRequest `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### DeregisterTransitGatewayMulticastGroupMembersResult
* DeregisterTransitGatewayMulticastGroupMembersResult `object`
  * DeregisteredMulticastGroupMembers
    * DeregisteredNetworkInterfaceIds
      * items
    * GroupIpAddress
    * TransitGatewayMulticastDomainId

### DeregisterTransitGatewayMulticastGroupSourcesRequest
* DeregisterTransitGatewayMulticastGroupSourcesRequest `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### DeregisterTransitGatewayMulticastGroupSourcesResult
* DeregisterTransitGatewayMulticastGroupSourcesResult `object`
  * DeregisteredMulticastGroupSources
    * DeregisteredNetworkInterfaceIds
      * items
    * GroupIpAddress
    * TransitGatewayMulticastDomainId

### DescribeAccountAttributesRequest
* DescribeAccountAttributesRequest `object`
  * AttributeNames
    * items
  * DryRun

### DescribeAccountAttributesResult
* DescribeAccountAttributesResult `object`
  * AccountAttributes
    * items
      * AttributeName
      * AttributeValues
        * items
          * AttributeValue

### DescribeAddressesRequest
* DescribeAddressesRequest `object`
  * AllocationIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * PublicIps
    * items

### DescribeAddressesResult
* DescribeAddressesResult `object`
  * Addresses
    * items
      * AllocationId
      * AssociationId
      * CarrierIp
      * CustomerOwnedIp
      * CustomerOwnedIpv4Pool
      * Domain
      * InstanceId
      * NetworkBorderGroup
      * NetworkInterfaceId
      * NetworkInterfaceOwnerId
      * PrivateIpAddress
      * PublicIp
      * PublicIpv4Pool
      * Tags
        * items
          * Key
          * Value

### DescribeAggregateIdFormatRequest
* DescribeAggregateIdFormatRequest `object`
  * DryRun

### DescribeAggregateIdFormatResult
* DescribeAggregateIdFormatResult `object`
  * Statuses
    * items
      * Deadline
      * Resource
      * UseLongIds
  * UseLongIdsAggregated

### DescribeAvailabilityZonesRequest
* DescribeAvailabilityZonesRequest `object`
  * AllAvailabilityZones
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ZoneIds
    * items
  * ZoneNames
    * items

### DescribeAvailabilityZonesResult
* DescribeAvailabilityZonesResult `object`
  * AvailabilityZones
    * items
      * GroupName
      * Messages
        * items
          * Message
      * NetworkBorderGroup
      * OptInStatus
      * ParentZoneId
      * ParentZoneName
      * RegionName
      * State
      * ZoneId
      * ZoneName
      * ZoneType

### DescribeBundleTasksRequest
* DescribeBundleTasksRequest `object`
  * BundleIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items

### DescribeBundleTasksResult
* DescribeBundleTasksResult `object`
  * BundleTasks
    * items
      * BundleId
      * BundleTaskError
        * Code
        * Message
      * InstanceId
      * Progress
      * StartTime
      * State
      * Storage
        * S3
          * AWSAccessKeyId
          * Bucket
          * Prefix
          * UploadPolicy
          * UploadPolicySignature
      * UpdateTime

### DescribeByoipCidrsMaxResults
* DescribeByoipCidrsMaxResults `integer`

### DescribeByoipCidrsRequest
* DescribeByoipCidrsRequest `object`
  * DryRun
  * MaxResults **required**
  * NextToken

### DescribeByoipCidrsResult
* DescribeByoipCidrsResult `object`
  * ByoipCidrs
    * items
      * Cidr
      * Description
      * State
      * StatusMessage
  * NextToken

### DescribeCapacityReservationsMaxResults
* DescribeCapacityReservationsMaxResults `integer`

### DescribeCapacityReservationsRequest
* DescribeCapacityReservationsRequest `object`
  * CapacityReservationIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeCapacityReservationsResult
* DescribeCapacityReservationsResult `object`
  * CapacityReservations
    * items
      * AvailabilityZone
      * AvailabilityZoneId
      * AvailableInstanceCount
      * CapacityReservationArn
      * CapacityReservationId
      * CreateDate
      * EbsOptimized
      * EndDate
      * EndDateType
      * EphemeralStorage
      * InstanceMatchCriteria
      * InstancePlatform
      * InstanceType
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * Tenancy
      * TotalInstanceCount
  * NextToken

### DescribeCarrierGatewaysRequest
* DescribeCarrierGatewaysRequest `object`
  * CarrierGatewayIds
    * items [CarrierGatewayId](#carriergatewayid)
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeCarrierGatewaysResult
* DescribeCarrierGatewaysResult `object`
  * CarrierGateways
    * items
      * CarrierGatewayId
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribeClassicLinkInstancesMaxResults
* DescribeClassicLinkInstancesMaxResults `integer`

### DescribeClassicLinkInstancesRequest
* DescribeClassicLinkInstancesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

### DescribeClassicLinkInstancesResult
* DescribeClassicLinkInstancesResult `object`
  * Instances
    * items
      * Groups
        * items
          * GroupId
          * GroupName
      * InstanceId
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribeClientVpnAuthorizationRulesMaxResults
* DescribeClientVpnAuthorizationRulesMaxResults `integer`

### DescribeClientVpnAuthorizationRulesRequest
* DescribeClientVpnAuthorizationRulesRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeClientVpnAuthorizationRulesResult
* DescribeClientVpnAuthorizationRulesResult `object`
  * AuthorizationRules
    * items
      * AccessAll
      * ClientVpnEndpointId
      * Description
      * DestinationCidr
      * GroupId
      * Status
        * Code
        * Message
  * NextToken

### DescribeClientVpnConnectionsMaxResults
* DescribeClientVpnConnectionsMaxResults `integer`

### DescribeClientVpnConnectionsRequest
* DescribeClientVpnConnectionsRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeClientVpnConnectionsResult
* DescribeClientVpnConnectionsResult `object`
  * Connections
    * items
      * ClientIp
      * ClientVpnEndpointId
      * CommonName
      * ConnectionEndTime
      * ConnectionEstablishedTime
      * ConnectionId
      * EgressBytes
      * EgressPackets
      * IngressBytes
      * IngressPackets
      * PostureComplianceStatuses
        * items
      * Status
        * Code
        * Message
      * Timestamp
      * Username
  * NextToken

### DescribeClientVpnEndpointMaxResults
* DescribeClientVpnEndpointMaxResults `integer`

### DescribeClientVpnEndpointsRequest
* DescribeClientVpnEndpointsRequest `object`
  * ClientVpnEndpointIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeClientVpnEndpointsResult
* DescribeClientVpnEndpointsResult `object`
  * ClientVpnEndpoints
    * items
      * AssociatedTargetNetworks
        * items
          * NetworkId
          * NetworkType
      * AuthenticationOptions
        * items
          * ActiveDirectory
          * FederatedAuthentication
          * MutualAuthentication
          * Type
      * ClientCidrBlock
      * ClientConnectOptions
        * Enabled
        * LambdaFunctionArn
        * Status
          * Code
          * Message
      * ClientVpnEndpointId
      * ConnectionLogOptions
        * CloudwatchLogGroup
        * CloudwatchLogStream
        * Enabled
      * CreationTime
      * DeletionTime
      * Description
      * DnsName
      * DnsServers
        * items
      * SecurityGroupIds
        * items
      * SelfServicePortalUrl
      * ServerCertificateArn
      * SplitTunnel
      * Status
        * Code
        * Message
      * Tags
        * items
          * Key
          * Value
      * TransportProtocol
      * VpcId
      * VpnPort
      * VpnProtocol
  * NextToken

### DescribeClientVpnRoutesMaxResults
* DescribeClientVpnRoutesMaxResults `integer`

### DescribeClientVpnRoutesRequest
* DescribeClientVpnRoutesRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeClientVpnRoutesResult
* DescribeClientVpnRoutesResult `object`
  * NextToken
  * Routes
    * items
      * ClientVpnEndpointId
      * Description
      * DestinationCidr
      * Origin
      * Status
        * Code
        * Message
      * TargetSubnet
      * Type

### DescribeClientVpnTargetNetworksMaxResults
* DescribeClientVpnTargetNetworksMaxResults `integer`

### DescribeClientVpnTargetNetworksRequest
* DescribeClientVpnTargetNetworksRequest `object`
  * AssociationIds
    * items
  * ClientVpnEndpointId **required**
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeClientVpnTargetNetworksResult
* DescribeClientVpnTargetNetworksResult `object`
  * ClientVpnTargetNetworks
    * items
      * AssociationId
      * ClientVpnEndpointId
      * SecurityGroups
        * items
      * Status
        * Code
        * Message
      * TargetNetworkId
      * VpcId
  * NextToken

### DescribeCoipPoolsRequest
* DescribeCoipPoolsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

### DescribeCoipPoolsResult
* DescribeCoipPoolsResult `object`
  * CoipPools
    * items
      * LocalGatewayRouteTableId
      * PoolArn
      * PoolCidrs
        * items
      * PoolId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeConversionTaskList
* DescribeConversionTaskList `array`
  * items
    * ConversionTaskId
    * ExpirationTime
    * ImportInstance
      * Description
      * InstanceId
      * Platform
      * Volumes
        * items
          * AvailabilityZone
          * BytesConverted
          * Description
          * Image
          * Status
          * StatusMessage
          * Volume
    * ImportVolume
      * AvailabilityZone
      * BytesConverted
      * Description
      * Image
        * Checksum
        * Format
        * ImportManifestUrl
        * Size
      * Volume
        * Id
        * Size
    * State
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### DescribeConversionTasksRequest
* DescribeConversionTasksRequest `object`
  * ConversionTaskIds
    * items
  * DryRun

### DescribeConversionTasksResult
* DescribeConversionTasksResult `object`
  * ConversionTasks
    * items
      * ConversionTaskId
      * ExpirationTime
      * ImportInstance
        * Description
        * InstanceId
        * Platform
        * Volumes
          * items
      * ImportVolume
        * AvailabilityZone
        * BytesConverted
        * Description
        * Image
          * Checksum
          * Format
          * ImportManifestUrl
          * Size
        * Volume
          * Id
          * Size
      * State
      * StatusMessage
      * Tags
        * items
          * Key
          * Value

### DescribeCustomerGatewaysRequest
* DescribeCustomerGatewaysRequest `object`: Contains the parameters for DescribeCustomerGateways.
  * CustomerGatewayIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items

### DescribeCustomerGatewaysResult
* DescribeCustomerGatewaysResult `object`: Contains the output of DescribeCustomerGateways.
  * CustomerGateways
    * items
      * BgpAsn
      * CertificateArn
      * CustomerGatewayId
      * DeviceName
      * IpAddress
      * State
      * Tags
        * items
          * Key
          * Value
      * Type

### DescribeDhcpOptionsMaxResults
* DescribeDhcpOptionsMaxResults `integer`

### DescribeDhcpOptionsRequest
* DescribeDhcpOptionsRequest `object`
  * DhcpOptionsIds
    * items
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeDhcpOptionsResult
* DescribeDhcpOptionsResult `object`
  * DhcpOptions
    * items
      * DhcpConfigurations
        * items
          * Key
          * Values
      * DhcpOptionsId
      * OwnerId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeEgressOnlyInternetGatewaysMaxResults
* DescribeEgressOnlyInternetGatewaysMaxResults `integer`

### DescribeEgressOnlyInternetGatewaysRequest
* DescribeEgressOnlyInternetGatewaysRequest `object`
  * DryRun
  * EgressOnlyInternetGatewayIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeEgressOnlyInternetGatewaysResult
* DescribeEgressOnlyInternetGatewaysResult `object`
  * EgressOnlyInternetGateways
    * items
      * Attachments
        * items
          * State
          * VpcId
      * EgressOnlyInternetGatewayId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeElasticGpusMaxResults
* DescribeElasticGpusMaxResults `integer`

### DescribeElasticGpusRequest
* DescribeElasticGpusRequest `object`
  * DryRun
  * ElasticGpuIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeElasticGpusResult
* DescribeElasticGpusResult `object`
  * ElasticGpuSet
    * items
      * AvailabilityZone
      * ElasticGpuHealth
        * Status
      * ElasticGpuId
      * ElasticGpuState
      * ElasticGpuType
      * InstanceId
      * Tags
        * items
          * Key
          * Value
  * MaxResults
  * NextToken

### DescribeExportImageTasksMaxResults
* DescribeExportImageTasksMaxResults `integer`

### DescribeExportImageTasksRequest
* DescribeExportImageTasksRequest `object`
  * DryRun
  * ExportImageTaskIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeExportImageTasksResult
* DescribeExportImageTasksResult `object`
  * ExportImageTasks
    * items
      * Description
      * ExportImageTaskId
      * ImageId
      * Progress
      * S3ExportLocation
        * S3Bucket
        * S3Prefix
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`
  * ExportTaskIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items

### DescribeExportTasksResult
* DescribeExportTasksResult `object`
  * ExportTasks
    * items
      * Description
      * ExportTaskId
      * ExportToS3Task
        * ContainerFormat
        * DiskImageFormat
        * S3Bucket
        * S3Key
      * InstanceExportDetails
        * InstanceId
        * TargetEnvironment
      * State
      * StatusMessage
      * Tags
        * items
          * Key
          * Value

### DescribeFastSnapshotRestoreSuccessItem
* DescribeFastSnapshotRestoreSuccessItem `object`: Describes fast snapshot restores for a snapshot.
  * AvailabilityZone
  * DisabledTime
  * DisablingTime
  * EnabledTime
  * EnablingTime
  * OptimizingTime
  * OwnerAlias
  * OwnerId
  * SnapshotId
  * State
  * StateTransitionReason

### DescribeFastSnapshotRestoreSuccessSet
* DescribeFastSnapshotRestoreSuccessSet `array`
  * items
    * AvailabilityZone
    * DisabledTime
    * DisablingTime
    * EnabledTime
    * EnablingTime
    * OptimizingTime
    * OwnerAlias
    * OwnerId
    * SnapshotId
    * State
    * StateTransitionReason

### DescribeFastSnapshotRestoresMaxResults
* DescribeFastSnapshotRestoresMaxResults `integer`

### DescribeFastSnapshotRestoresRequest
* DescribeFastSnapshotRestoresRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeFastSnapshotRestoresResult
* DescribeFastSnapshotRestoresResult `object`
  * FastSnapshotRestores
    * items
      * AvailabilityZone
      * DisabledTime
      * DisablingTime
      * EnabledTime
      * EnablingTime
      * OptimizingTime
      * OwnerAlias
      * OwnerId
      * SnapshotId
      * State
      * StateTransitionReason
  * NextToken

### DescribeFleetError
* DescribeFleetError `object`: Describes the instances that could not be launched by the fleet.
  * ErrorCode
  * ErrorMessage
  * LaunchTemplateAndOverrides
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * GroupName
      * Priority
      * SubnetId
      * WeightedCapacity
  * Lifecycle

### DescribeFleetHistoryRequest
* DescribeFleetHistoryRequest `object`
  * DryRun
  * EventType
  * FleetId **required**
  * MaxResults
  * NextToken
  * StartTime **required**

### DescribeFleetHistoryResult
* DescribeFleetHistoryResult `object`
  * FleetId
  * HistoryRecords
    * items
      * EventInformation
        * EventDescription
        * EventSubType
        * InstanceId
      * EventType
      * Timestamp
  * LastEvaluatedTime
  * NextToken
  * StartTime

### DescribeFleetInstancesRequest
* DescribeFleetInstancesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FleetId **required**
  * MaxResults
  * NextToken

### DescribeFleetInstancesResult
* DescribeFleetInstancesResult `object`
  * ActiveInstances
    * items
      * InstanceHealth
      * InstanceId
      * InstanceType
      * SpotInstanceRequestId
  * FleetId
  * NextToken

### DescribeFleetsErrorSet
* DescribeFleetsErrorSet `array`
  * items
    * ErrorCode
    * ErrorMessage
    * LaunchTemplateAndOverrides
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * GroupName
        * Priority
        * SubnetId
        * WeightedCapacity
    * Lifecycle

### DescribeFleetsInstances
* DescribeFleetsInstances `object`: Describes the instances that were launched by the fleet.
  * InstanceIds
    * items
  * InstanceType
  * LaunchTemplateAndOverrides
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * GroupName
      * Priority
      * SubnetId
      * WeightedCapacity
  * Lifecycle
  * Platform

### DescribeFleetsInstancesSet
* DescribeFleetsInstancesSet `array`
  * items
    * InstanceIds
      * items
    * InstanceType
    * LaunchTemplateAndOverrides
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * GroupName
        * Priority
        * SubnetId
        * WeightedCapacity
    * Lifecycle
    * Platform

### DescribeFleetsRequest
* DescribeFleetsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FleetIds
    * items [FleetId](#fleetid)
  * MaxResults
  * NextToken

### DescribeFleetsResult
* DescribeFleetsResult `object`
  * Fleets
    * items
      * ActivityStatus
      * ClientToken
      * CreateTime
      * Errors
        * items
          * ErrorCode
          * ErrorMessage
          * LaunchTemplateAndOverrides
          * Lifecycle
      * ExcessCapacityTerminationPolicy
      * FleetId
      * FleetState
      * FulfilledCapacity
      * FulfilledOnDemandCapacity
      * Instances
        * items
          * InstanceIds
          * InstanceType
          * LaunchTemplateAndOverrides
          * Lifecycle
          * Platform
      * LaunchTemplateConfigs
        * items
          * LaunchTemplateSpecification
          * Overrides
      * OnDemandOptions
        * AllocationStrategy
        * CapacityReservationOptions
          * UsageStrategy
        * MaxTotalPrice
        * MinTargetCapacity
        * SingleAvailabilityZone
        * SingleInstanceType
      * ReplaceUnhealthyInstances
      * SpotOptions
        * AllocationStrategy
        * InstanceInterruptionBehavior
        * InstancePoolsToUseCount
        * MaintenanceStrategies
          * CapacityRebalance
        * MaxTotalPrice
        * MinTargetCapacity
        * SingleAvailabilityZone
        * SingleInstanceType
      * Tags
        * items
          * Key
          * Value
      * TargetCapacitySpecification
        * DefaultTargetCapacityType
        * OnDemandTargetCapacity
        * SpotTargetCapacity
        * TotalTargetCapacity
      * TerminateInstancesWithExpiration
      * Type
      * ValidFrom
      * ValidUntil
  * NextToken

### DescribeFlowLogsRequest
* DescribeFlowLogsRequest `object`
  * DryRun
  * Filter
    * items
      * Name
      * Values
        * items
  * FlowLogIds
    * items
  * MaxResults
  * NextToken

### DescribeFlowLogsResult
* DescribeFlowLogsResult `object`
  * FlowLogs
    * items
      * CreationTime
      * DeliverLogsErrorMessage
      * DeliverLogsPermissionArn
      * DeliverLogsStatus
      * FlowLogId
      * FlowLogStatus
      * LogDestination
      * LogDestinationType
      * LogFormat
      * LogGroupName
      * MaxAggregationInterval
      * ResourceId
      * Tags
        * items
          * Key
          * Value
      * TrafficType
  * NextToken

### DescribeFpgaImageAttributeRequest
* DescribeFpgaImageAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * FpgaImageId **required**

### DescribeFpgaImageAttributeResult
* DescribeFpgaImageAttributeResult `object`
  * FpgaImageAttribute
    * Description
    * FpgaImageId
    * LoadPermissions
      * items
        * Group
        * UserId
    * Name
    * ProductCodes
      * items
        * ProductCodeId
        * ProductCodeType

### DescribeFpgaImagesMaxResults
* DescribeFpgaImagesMaxResults `integer`

### DescribeFpgaImagesRequest
* DescribeFpgaImagesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FpgaImageIds
    * items
  * MaxResults
  * NextToken
  * Owners
    * items

### DescribeFpgaImagesResult
* DescribeFpgaImagesResult `object`
  * FpgaImages
    * items
      * CreateTime
      * DataRetentionSupport
      * Description
      * FpgaImageGlobalId
      * FpgaImageId
      * Name
      * OwnerAlias
      * OwnerId
      * PciId
        * DeviceId
        * SubsystemId
        * SubsystemVendorId
        * VendorId
      * ProductCodes
        * items
          * ProductCodeId
          * ProductCodeType
      * Public
      * ShellVersion
      * State
        * Code
        * Message
      * Tags
        * items
          * Key
          * Value
      * UpdateTime
  * NextToken

### DescribeHostReservationOfferingsRequest
* DescribeHostReservationOfferingsRequest `object`
  * Filter
    * items
      * Name
      * Values
        * items
  * MaxDuration
  * MaxResults
  * MinDuration
  * NextToken
  * OfferingId

### DescribeHostReservationOfferingsResult
* DescribeHostReservationOfferingsResult `object`
  * NextToken
  * OfferingSet
    * items
      * CurrencyCode
      * Duration
      * HourlyPrice
      * InstanceFamily
      * OfferingId
      * PaymentOption
      * UpfrontPrice

### DescribeHostReservationsMaxResults
* DescribeHostReservationsMaxResults `integer`

### DescribeHostReservationsRequest
* DescribeHostReservationsRequest `object`
  * Filter
    * items
      * Name
      * Values
        * items
  * HostReservationIdSet
    * items
  * MaxResults
  * NextToken

### DescribeHostReservationsResult
* DescribeHostReservationsResult `object`
  * HostReservationSet
    * items
      * Count
      * CurrencyCode
      * Duration
      * End
      * HostIdSet
        * items
      * HostReservationId
      * HourlyPrice
      * InstanceFamily
      * OfferingId
      * PaymentOption
      * Start
      * State
      * Tags
        * items
          * Key
          * Value
      * UpfrontPrice
  * NextToken

### DescribeHostsRequest
* DescribeHostsRequest `object`
  * Filter
    * items
      * Name
      * Values
        * items
  * HostIds
    * items
  * MaxResults
  * NextToken

### DescribeHostsResult
* DescribeHostsResult `object`
  * Hosts
    * items
      * AllocationTime
      * AllowsMultipleInstanceTypes
      * AutoPlacement
      * AvailabilityZone
      * AvailabilityZoneId
      * AvailableCapacity
        * AvailableInstanceCapacity
          * items
        * AvailableVCpus
      * ClientToken
      * HostId
      * HostProperties
        * Cores
        * InstanceFamily
        * InstanceType
        * Sockets
        * TotalVCpus
      * HostRecovery
      * HostReservationId
      * Instances
        * items
          * InstanceId
          * InstanceType
          * OwnerId
      * MemberOfServiceLinkedResourceGroup
      * OwnerId
      * ReleaseTime
      * State
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeIamInstanceProfileAssociationsMaxResults
* DescribeIamInstanceProfileAssociationsMaxResults `integer`

### DescribeIamInstanceProfileAssociationsRequest
* DescribeIamInstanceProfileAssociationsRequest `object`
  * AssociationIds
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeIamInstanceProfileAssociationsResult
* DescribeIamInstanceProfileAssociationsResult `object`
  * IamInstanceProfileAssociations
    * items
      * AssociationId
      * IamInstanceProfile
        * Arn
        * Id
      * InstanceId
      * State
      * Timestamp
  * NextToken

### DescribeIdFormatRequest
* DescribeIdFormatRequest `object`
  * Resource

### DescribeIdFormatResult
* DescribeIdFormatResult `object`
  * Statuses
    * items
      * Deadline
      * Resource
      * UseLongIds

### DescribeIdentityIdFormatRequest
* DescribeIdentityIdFormatRequest `object`
  * PrincipalArn **required**
  * Resource

### DescribeIdentityIdFormatResult
* DescribeIdentityIdFormatResult `object`
  * Statuses
    * items
      * Deadline
      * Resource
      * UseLongIds

### DescribeImageAttributeRequest
* DescribeImageAttributeRequest `object`: Contains the parameters for DescribeImageAttribute.
  * Attribute **required**
  * DryRun
  * ImageId **required**

### DescribeImagesRequest
* DescribeImagesRequest `object`
  * DryRun
  * ExecutableUsers
    * items
  * Filters
    * items
      * Name
      * Values
        * items
  * ImageIds
    * items
  * Owners
    * items

### DescribeImagesResult
* DescribeImagesResult `object`
  * Images
    * items
      * Architecture
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
          * NoDevice
          * VirtualName
      * CreationDate
      * Description
      * EnaSupport
      * Hypervisor
      * ImageId
      * ImageLocation
      * ImageOwnerAlias
      * ImageType
      * KernelId
      * Name
      * OwnerId
      * Platform
      * PlatformDetails
      * ProductCodes
        * items
          * ProductCodeId
          * ProductCodeType
      * Public
      * RamdiskId
      * RootDeviceName
      * RootDeviceType
      * SriovNetSupport
      * State
      * StateReason
        * Code
        * Message
      * Tags
        * items
          * Key
          * Value
      * UsageOperation
      * VirtualizationType

### DescribeImportImageTasksRequest
* DescribeImportImageTasksRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ImportTaskIds
    * items
  * MaxResults
  * NextToken

### DescribeImportImageTasksResult
* DescribeImportImageTasksResult `object`
  * ImportImageTasks
    * items
      * Architecture
      * Description
      * Encrypted
      * Hypervisor
      * ImageId
      * ImportTaskId
      * KmsKeyId
      * LicenseSpecifications
        * items
          * LicenseConfigurationArn
      * LicenseType
      * Platform
      * Progress
      * SnapshotDetails
        * items
          * Description
          * DeviceName
          * DiskImageSize
          * Format
          * Progress
          * SnapshotId
          * Status
          * StatusMessage
          * Url
          * UserBucket
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeImportSnapshotTasksRequest
* DescribeImportSnapshotTasksRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * ImportTaskIds
    * items
  * MaxResults
  * NextToken

### DescribeImportSnapshotTasksResult
* DescribeImportSnapshotTasksResult `object`
  * ImportSnapshotTasks
    * items
      * Description
      * ImportTaskId
      * SnapshotTaskDetail
        * Description
        * DiskImageSize
        * Encrypted
        * Format
        * KmsKeyId
        * Progress
        * SnapshotId
        * Status
        * StatusMessage
        * Url
        * UserBucket
          * S3Bucket
          * S3Key
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeInstanceAttributeRequest
* DescribeInstanceAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * InstanceId **required**

### DescribeInstanceCreditSpecificationsMaxResults
* DescribeInstanceCreditSpecificationsMaxResults `integer`

### DescribeInstanceCreditSpecificationsRequest
* DescribeInstanceCreditSpecificationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

### DescribeInstanceCreditSpecificationsResult
* DescribeInstanceCreditSpecificationsResult `object`
  * InstanceCreditSpecifications
    * items
      * CpuCredits
      * InstanceId
  * NextToken

### DescribeInstanceEventNotificationAttributesRequest
* DescribeInstanceEventNotificationAttributesRequest `object`
  * DryRun

### DescribeInstanceEventNotificationAttributesResult
* DescribeInstanceEventNotificationAttributesResult `object`
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

### DescribeInstanceStatusRequest
* DescribeInstanceStatusRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * IncludeAllInstances
  * InstanceIds
    * items
  * MaxResults
  * NextToken

### DescribeInstanceStatusResult
* DescribeInstanceStatusResult `object`
  * InstanceStatuses
    * items
      * AvailabilityZone
      * Events
        * items
          * Code
          * Description
          * InstanceEventId
          * NotAfter
          * NotBefore
          * NotBeforeDeadline
      * InstanceId
      * InstanceState
        * Code
        * Name
      * InstanceStatus
        * Details
          * items
        * Status
      * OutpostArn
      * SystemStatus
        * Details
          * items
        * Status
  * NextToken

### DescribeInstanceTypeOfferingsRequest
* DescribeInstanceTypeOfferingsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocationType
  * MaxResults
  * NextToken

### DescribeInstanceTypeOfferingsResult
* DescribeInstanceTypeOfferingsResult `object`
  * InstanceTypeOfferings
    * items
      * InstanceType
      * Location
      * LocationType
  * NextToken

### DescribeInstanceTypesRequest
* DescribeInstanceTypesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceTypes
    * items [InstanceType](#instancetype)
  * MaxResults
  * NextToken

### DescribeInstanceTypesResult
* DescribeInstanceTypesResult `object`
  * InstanceTypes
    * items
      * AutoRecoverySupported
      * BareMetal
      * BurstablePerformanceSupported
      * CurrentGeneration
      * DedicatedHostsSupported
      * EbsInfo
        * EbsOptimizedInfo
          * BaselineBandwidthInMbps
          * BaselineIops
          * BaselineThroughputInMBps
          * MaximumBandwidthInMbps
          * MaximumIops
          * MaximumThroughputInMBps
        * EbsOptimizedSupport
        * EncryptionSupport
        * NvmeSupport
      * FpgaInfo
        * Fpgas
          * items
        * TotalFpgaMemoryInMiB
      * FreeTierEligible
      * GpuInfo
        * Gpus
          * items
        * TotalGpuMemoryInMiB
      * HibernationSupported
      * Hypervisor
      * InferenceAcceleratorInfo
        * Accelerators
          * items [InferenceDeviceInfo](#inferencedeviceinfo)
      * InstanceStorageInfo
        * Disks
          * items
        * NvmeSupport
        * TotalSizeInGB
      * InstanceStorageSupported
      * InstanceType
      * MemoryInfo
        * SizeInMiB
      * NetworkInfo
        * DefaultNetworkCardIndex
        * EfaSupported
        * EnaSupport
        * Ipv4AddressesPerInterface
        * Ipv6AddressesPerInterface
        * Ipv6Supported
        * MaximumNetworkCards
        * MaximumNetworkInterfaces
        * NetworkCards
          * items
        * NetworkPerformance
      * PlacementGroupInfo
        * SupportedStrategies
          * items
      * ProcessorInfo
        * SupportedArchitectures
          * items
        * SustainedClockSpeedInGhz
      * SupportedRootDeviceTypes
        * items
      * SupportedUsageClasses
        * items
      * SupportedVirtualizationTypes
        * items
      * VCpuInfo
        * DefaultCores
        * DefaultThreadsPerCore
        * DefaultVCpus
        * ValidCores
          * items
        * ValidThreadsPerCore
          * items
  * NextToken

### DescribeInstancesRequest
* DescribeInstancesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceIds
    * items
  * MaxResults
  * NextToken

### DescribeInstancesResult
* DescribeInstancesResult `object`
  * NextToken
  * Reservations
    * items
      * Groups
        * items
          * GroupId
          * GroupName
      * Instances
        * items
          * AmiLaunchIndex
          * Architecture
          * BlockDeviceMappings
          * CapacityReservationId
          * CapacityReservationSpecification
          * ClientToken
          * CpuOptions
          * EbsOptimized
          * ElasticGpuAssociations
          * ElasticInferenceAcceleratorAssociations
          * EnaSupport
          * EnclaveOptions
          * HibernationOptions
          * Hypervisor
          * IamInstanceProfile
          * ImageId
          * InstanceId
          * InstanceLifecycle
          * InstanceType
          * KernelId
          * KeyName
          * LaunchTime
          * Licenses
          * MetadataOptions
          * Monitoring
          * NetworkInterfaces
          * OutpostArn
          * Placement
          * Platform
          * PrivateDnsName
          * PrivateIpAddress
          * ProductCodes
          * PublicDnsName
          * PublicIpAddress
          * RamdiskId
          * RootDeviceName
          * RootDeviceType
          * SecurityGroups
          * SourceDestCheck
          * SpotInstanceRequestId
          * SriovNetSupport
          * State
          * StateReason
          * StateTransitionReason
          * SubnetId
          * Tags
          * VirtualizationType
          * VpcId
      * OwnerId
      * RequesterId
      * ReservationId

### DescribeInternetGatewaysMaxResults
* DescribeInternetGatewaysMaxResults `integer`

### DescribeInternetGatewaysRequest
* DescribeInternetGatewaysRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * InternetGatewayIds
    * items
  * MaxResults
  * NextToken

### DescribeInternetGatewaysResult
* DescribeInternetGatewaysResult `object`
  * InternetGateways
    * items
      * Attachments
        * items
          * State
          * VpcId
      * InternetGatewayId
      * OwnerId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeIpv6PoolsRequest
* DescribeIpv6PoolsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

### DescribeIpv6PoolsResult
* DescribeIpv6PoolsResult `object`
  * Ipv6Pools
    * items
      * Description
      * PoolCidrBlocks
        * items
          * Cidr
      * PoolId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeKeyPairsRequest
* DescribeKeyPairsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * KeyNames
    * items
  * KeyPairIds
    * items

### DescribeKeyPairsResult
* DescribeKeyPairsResult `object`
  * KeyPairs
    * items
      * KeyFingerprint
      * KeyName
      * KeyPairId
      * Tags
        * items
          * Key
          * Value

### DescribeLaunchTemplateVersionsRequest
* DescribeLaunchTemplateVersionsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LaunchTemplateId
  * LaunchTemplateName
  * MaxResults
  * MaxVersion
  * MinVersion
  * NextToken
  * Versions
    * items

### DescribeLaunchTemplateVersionsResult
* DescribeLaunchTemplateVersionsResult `object`
  * LaunchTemplateVersions
    * items
      * CreateTime
      * CreatedBy
      * DefaultVersion
      * LaunchTemplateData
        * BlockDeviceMappings
          * items
        * CapacityReservationSpecification
          * CapacityReservationPreference
          * CapacityReservationTarget
        * CpuOptions
          * CoreCount
          * ThreadsPerCore
        * CreditSpecification
          * CpuCredits
        * DisableApiTermination
        * EbsOptimized
        * ElasticGpuSpecifications
          * items
        * ElasticInferenceAccelerators
          * items
        * EnclaveOptions
          * Enabled
        * HibernationOptions
          * Configured
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceInitiatedShutdownBehavior
        * InstanceMarketOptions
          * MarketType
          * SpotOptions
        * InstanceType
        * KernelId
        * KeyName
        * LicenseSpecifications
          * items
        * MetadataOptions
          * HttpEndpoint
          * HttpPutResponseHopLimit
          * HttpTokens
          * State
        * Monitoring
          * Enabled
        * NetworkInterfaces
          * items
        * Placement
          * Affinity
          * AvailabilityZone
          * GroupName
          * HostId
          * HostResourceGroupArn
          * PartitionNumber
          * SpreadDomain
          * Tenancy
        * RamDiskId
        * SecurityGroupIds
          * items
        * SecurityGroups
          * items
        * TagSpecifications
          * items
        * UserData
      * LaunchTemplateId
      * LaunchTemplateName
      * VersionDescription
      * VersionNumber
  * NextToken

### DescribeLaunchTemplatesMaxResults
* DescribeLaunchTemplatesMaxResults `integer`

### DescribeLaunchTemplatesRequest
* DescribeLaunchTemplatesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LaunchTemplateIds
    * items
  * LaunchTemplateNames
    * items
  * MaxResults
  * NextToken

### DescribeLaunchTemplatesResult
* DescribeLaunchTemplatesResult `object`
  * LaunchTemplates
    * items
      * CreateTime
      * CreatedBy
      * DefaultVersionNumber
      * LatestVersionNumber
      * LaunchTemplateId
      * LaunchTemplateName
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
* DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
* DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult `object`
  * LocalGatewayRouteTableVirtualInterfaceGroupAssociations
    * items
      * LocalGatewayId
      * LocalGatewayRouteTableArn
      * LocalGatewayRouteTableId
      * LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
      * LocalGatewayVirtualInterfaceGroupId
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeLocalGatewayRouteTableVpcAssociationsRequest
* DescribeLocalGatewayRouteTableVpcAssociationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableVpcAssociationIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewayRouteTableVpcAssociationsResult
* DescribeLocalGatewayRouteTableVpcAssociationsResult `object`
  * LocalGatewayRouteTableVpcAssociations
    * items
      * LocalGatewayId
      * LocalGatewayRouteTableArn
      * LocalGatewayRouteTableId
      * LocalGatewayRouteTableVpcAssociationId
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribeLocalGatewayRouteTablesRequest
* DescribeLocalGatewayRouteTablesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewayRouteTablesResult
* DescribeLocalGatewayRouteTablesResult `object`
  * LocalGatewayRouteTables
    * items
      * LocalGatewayId
      * LocalGatewayRouteTableArn
      * LocalGatewayRouteTableId
      * OutpostArn
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeLocalGatewayVirtualInterfaceGroupsRequest
* DescribeLocalGatewayVirtualInterfaceGroupsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayVirtualInterfaceGroupIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewayVirtualInterfaceGroupsResult
* DescribeLocalGatewayVirtualInterfaceGroupsResult `object`
  * LocalGatewayVirtualInterfaceGroups
    * items
      * LocalGatewayId
      * LocalGatewayVirtualInterfaceGroupId
      * LocalGatewayVirtualInterfaceIds
        * items
      * OwnerId
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeLocalGatewayVirtualInterfacesRequest
* DescribeLocalGatewayVirtualInterfacesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayVirtualInterfaceIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewayVirtualInterfacesResult
* DescribeLocalGatewayVirtualInterfacesResult `object`
  * LocalGatewayVirtualInterfaces
    * items
      * LocalAddress
      * LocalBgpAsn
      * LocalGatewayId
      * LocalGatewayVirtualInterfaceId
      * OwnerId
      * PeerAddress
      * PeerBgpAsn
      * Tags
        * items
          * Key
          * Value
      * Vlan
  * NextToken

### DescribeLocalGatewaysRequest
* DescribeLocalGatewaysRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * LocalGatewayIds
    * items
  * MaxResults
  * NextToken

### DescribeLocalGatewaysResult
* DescribeLocalGatewaysResult `object`
  * LocalGateways
    * items
      * LocalGatewayId
      * OutpostArn
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeManagedPrefixListsRequest
* DescribeManagedPrefixListsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PrefixListIds
    * items

### DescribeManagedPrefixListsResult
* DescribeManagedPrefixListsResult `object`
  * NextToken
  * PrefixLists
    * items
      * AddressFamily
      * MaxEntries
      * OwnerId
      * PrefixListArn
      * PrefixListId
      * PrefixListName
      * State
      * StateMessage
      * Tags
        * items
          * Key
          * Value
      * Version

### DescribeMovingAddressesMaxResults
* DescribeMovingAddressesMaxResults `integer`

### DescribeMovingAddressesRequest
* DescribeMovingAddressesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PublicIps
    * items

### DescribeMovingAddressesResult
* DescribeMovingAddressesResult `object`
  * MovingAddressStatuses
    * items
      * MoveStatus
      * PublicIp
  * NextToken

### DescribeNatGatewaysMaxResults
* DescribeNatGatewaysMaxResults `integer`

### DescribeNatGatewaysRequest
* DescribeNatGatewaysRequest `object`
  * DryRun
  * Filter
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NatGatewayIds
    * items
  * NextToken

### DescribeNatGatewaysResult
* DescribeNatGatewaysResult `object`
  * NatGateways
    * items
      * CreateTime
      * DeleteTime
      * FailureCode
      * FailureMessage
      * NatGatewayAddresses
        * items
          * AllocationId
          * NetworkInterfaceId
          * PrivateIp
          * PublicIp
      * NatGatewayId
      * ProvisionedBandwidth
        * ProvisionTime
        * Provisioned
        * RequestTime
        * Requested
        * Status
      * State
      * SubnetId
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribeNetworkAclsMaxResults
* DescribeNetworkAclsMaxResults `integer`

### DescribeNetworkAclsRequest
* DescribeNetworkAclsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkAclIds
    * items
  * NextToken

### DescribeNetworkAclsResult
* DescribeNetworkAclsResult `object`
  * NetworkAcls
    * items
      * Associations
        * items
          * NetworkAclAssociationId
          * NetworkAclId
          * SubnetId
      * Entries
        * items
          * CidrBlock
          * Egress
          * IcmpTypeCode
          * Ipv6CidrBlock
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
      * IsDefault
      * NetworkAclId
      * OwnerId
      * Tags
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribeNetworkInsightsAnalysesRequest
* DescribeNetworkInsightsAnalysesRequest `object`
  * AnalysisEndTime
  * AnalysisStartTime
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInsightsAnalysisIds
    * items
  * NetworkInsightsPathId
  * NextToken

### DescribeNetworkInsightsAnalysesResult
* DescribeNetworkInsightsAnalysesResult `object`
  * NetworkInsightsAnalyses
    * items
      * AlternatePathHints
        * items
          * ComponentArn
          * ComponentId
      * Explanations
        * items
          * Acl
          * AclRule
          * Address
          * Addresses
          * AttachedTo
          * AvailabilityZones
          * Cidrs
          * ClassicLoadBalancerListener
          * Component
          * CustomerGateway
          * Destination
          * DestinationVpc
          * Direction
          * ElasticLoadBalancerListener
          * ExplanationCode
          * IngressRouteTable
          * InternetGateway
          * LoadBalancerArn
          * LoadBalancerListenerPort
          * LoadBalancerTarget
          * LoadBalancerTargetGroup
          * LoadBalancerTargetGroups
          * LoadBalancerTargetPort
          * MissingComponent
          * NatGateway
          * NetworkInterface
          * PacketField
          * Port
          * PortRanges
          * PrefixList
          * Protocols
          * RouteTable
          * RouteTableRoute
          * SecurityGroup
          * SecurityGroupRule
          * SecurityGroups
          * SourceVpc
          * State
          * Subnet
          * SubnetRouteTable
          * Vpc
          * VpcEndpoint
          * VpcPeeringConnection
          * VpnConnection
          * VpnGateway
      * FilterInArns
        * items
      * ForwardPathComponents
        * items
          * AclRule
          * Component
          * DestinationVpc
          * InboundHeader
          * OutboundHeader
          * RouteTableRoute
          * SecurityGroupRule
          * SequenceNumber
          * SourceVpc
          * Subnet
          * Vpc
      * NetworkInsightsAnalysisArn
      * NetworkInsightsAnalysisId
      * NetworkInsightsPathId
      * NetworkPathFound
      * ReturnPathComponents
        * items
          * AclRule
          * Component
          * DestinationVpc
          * InboundHeader
          * OutboundHeader
          * RouteTableRoute
          * SecurityGroupRule
          * SequenceNumber
          * SourceVpc
          * Subnet
          * Vpc
      * StartDate
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeNetworkInsightsPathsRequest
* DescribeNetworkInsightsPathsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInsightsPathIds
    * items
  * NextToken

### DescribeNetworkInsightsPathsResult
* DescribeNetworkInsightsPathsResult `object`
  * NetworkInsightsPaths
    * items
      * CreatedDate
      * Destination
      * DestinationIp
      * DestinationPort
      * NetworkInsightsPathArn
      * NetworkInsightsPathId
      * Protocol
      * Source
      * SourceIp
      * Tags
        * items
          * Key
          * Value
  * NextToken

### DescribeNetworkInterfaceAttributeRequest
* DescribeNetworkInterfaceAttributeRequest `object`: Contains the parameters for DescribeNetworkInterfaceAttribute.
  * Attribute
  * DryRun
  * NetworkInterfaceId **required**

### DescribeNetworkInterfaceAttributeResult
* DescribeNetworkInterfaceAttributeResult `object`: Contains the output of DescribeNetworkInterfaceAttribute.
  * Attachment
    * AttachTime
    * AttachmentId
    * DeleteOnTermination
    * DeviceIndex
    * InstanceId
    * InstanceOwnerId
    * NetworkCardIndex
    * Status
  * Description
    * Value
  * Groups
    * items
      * GroupId
      * GroupName
  * NetworkInterfaceId
  * SourceDestCheck
    * Value

### DescribeNetworkInterfacePermissionsMaxResults
* DescribeNetworkInterfacePermissionsMaxResults `integer`

### DescribeNetworkInterfacePermissionsRequest
* DescribeNetworkInterfacePermissionsRequest `object`: Contains the parameters for DescribeNetworkInterfacePermissions.
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInterfacePermissionIds
    * items [NetworkInterfacePermissionId](#networkinterfacepermissionid)
  * NextToken

### DescribeNetworkInterfacePermissionsResult
* DescribeNetworkInterfacePermissionsResult `object`: Contains the output for DescribeNetworkInterfacePermissions.
  * NetworkInterfacePermissions
    * items
      * AwsAccountId
      * AwsService
      * NetworkInterfaceId
      * NetworkInterfacePermissionId
      * Permission
      * PermissionState
        * State
        * StatusMessage
  * NextToken

### DescribeNetworkInterfacesMaxResults
* DescribeNetworkInterfacesMaxResults `integer`

### DescribeNetworkInterfacesRequest
* DescribeNetworkInterfacesRequest `object`: Contains the parameters for DescribeNetworkInterfaces.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NetworkInterfaceIds
    * items
  * NextToken

### DescribeNetworkInterfacesResult
* DescribeNetworkInterfacesResult `object`: Contains the output of DescribeNetworkInterfaces.
  * NetworkInterfaces
    * items
      * Association
        * AllocationId
        * AssociationId
        * CarrierIp
        * CustomerOwnedIp
        * IpOwnerId
        * PublicDnsName
        * PublicIp
      * Attachment
        * AttachTime
        * AttachmentId
        * DeleteOnTermination
        * DeviceIndex
        * InstanceId
        * InstanceOwnerId
        * NetworkCardIndex
        * Status
      * AvailabilityZone
      * Description
      * Groups
        * items
          * GroupId
          * GroupName
      * InterfaceType
      * Ipv6Addresses
        * items
          * Ipv6Address
      * MacAddress
      * NetworkInterfaceId
      * OutpostArn
      * OwnerId
      * PrivateDnsName
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Association
          * Primary
          * PrivateDnsName
          * PrivateIpAddress
      * RequesterId
      * RequesterManaged
      * SourceDestCheck
      * Status
      * SubnetId
      * TagSet
        * items
          * Key
          * Value
      * VpcId
  * NextToken

### DescribePlacementGroupsRequest
* DescribePlacementGroupsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * GroupIds
    * items
  * GroupNames
    * items [PlacementGroupName](#placementgroupname)

### DescribePlacementGroupsResult
* DescribePlacementGroupsResult `object`
  * PlacementGroups
    * items
      * GroupId
      * GroupName
      * PartitionCount
      * State
      * Strategy
      * Tags
        * items
          * Key
          * Value

### DescribePrefixListsRequest
* DescribePrefixListsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PrefixListIds
    * items

### DescribePrefixListsResult
* DescribePrefixListsResult `object`
  * NextToken
  * PrefixLists
    * items
      * Cidrs
        * items
      * PrefixListId
      * PrefixListName

### DescribePrincipalIdFormatMaxResults
* DescribePrincipalIdFormatMaxResults `integer`

### DescribePrincipalIdFormatRequest
* DescribePrincipalIdFormatRequest `object`
  * DryRun
  * MaxResults
  * NextToken
  * Resources
    * items

### DescribePrincipalIdFormatResult
* DescribePrincipalIdFormatResult `object`
  * NextToken
  * Principals
    * items
      * Arn
      * Statuses
        * items
          * Deadline
          * Resource
          * UseLongIds

### DescribePublicIpv4PoolsRequest
* DescribePublicIpv4PoolsRequest `object`
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolIds
    * items

### DescribePublicIpv4PoolsResult
* DescribePublicIpv4PoolsResult `object`
  * NextToken
  * PublicIpv4Pools
    * items
      * Description
      * NetworkBorderGroup
      * PoolAddressRanges
        * items
          * AddressCount
          * AvailableAddressCount
          * FirstAddress
          * LastAddress
      * PoolId
      * Tags
        * items
          * Key
          * Value
      * TotalAddressCount
      * TotalAvailableAddressCount

### DescribeRegionsRequest
* DescribeRegionsRequest `object`
  * AllRegions
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * RegionNames
    * items

### DescribeRegionsResult
* DescribeRegionsResult `object`
  * Regions
    * items
      * Endpoint
      * OptInStatus
      * RegionName

### DescribeReservedInstancesListingsRequest
* DescribeReservedInstancesListingsRequest `object`: Contains the parameters for DescribeReservedInstancesListings.
  * Filters
    * items
      * Name
      * Values
        * items
  * ReservedInstancesId
  * ReservedInstancesListingId

### DescribeReservedInstancesListingsResult
* DescribeReservedInstancesListingsResult `object`: Contains the output of DescribeReservedInstancesListings.
  * ReservedInstancesListings
    * items
      * ClientToken
      * CreateDate
      * InstanceCounts
        * items
          * InstanceCount
          * State
      * PriceSchedules
        * items
          * Active
          * CurrencyCode
          * Price
          * Term
      * ReservedInstancesId
      * ReservedInstancesListingId
      * Status
      * StatusMessage
      * Tags
        * items
          * Key
          * Value
      * UpdateDate

### DescribeReservedInstancesModificationsRequest
* DescribeReservedInstancesModificationsRequest `object`: Contains the parameters for DescribeReservedInstancesModifications.
  * Filters
    * items
      * Name
      * Values
        * items
  * NextToken
  * ReservedInstancesModificationIds
    * items

### DescribeReservedInstancesModificationsResult
* DescribeReservedInstancesModificationsResult `object`: Contains the output of DescribeReservedInstancesModifications.
  * NextToken
  * ReservedInstancesModifications
    * items
      * ClientToken
      * CreateDate
      * EffectiveDate
      * ModificationResults
        * items
          * ReservedInstancesId
          * TargetConfiguration
      * ReservedInstancesIds
        * items
          * ReservedInstancesId
      * ReservedInstancesModificationId
      * Status
      * StatusMessage
      * UpdateDate

### DescribeReservedInstancesOfferingsRequest
* DescribeReservedInstancesOfferingsRequest `object`: Contains the parameters for DescribeReservedInstancesOfferings.
  * AvailabilityZone
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * IncludeMarketplace
  * InstanceTenancy
  * InstanceType
  * MaxDuration
  * MaxInstanceCount
  * MaxResults
  * MinDuration
  * NextToken
  * OfferingClass
  * OfferingType
  * ProductDescription
  * ReservedInstancesOfferingIds
    * items [ReservedInstancesOfferingId](#reservedinstancesofferingid)

### DescribeReservedInstancesOfferingsResult
* DescribeReservedInstancesOfferingsResult `object`: Contains the output of DescribeReservedInstancesOfferings.
  * NextToken
  * ReservedInstancesOfferings
    * items
      * AvailabilityZone
      * CurrencyCode
      * Duration
      * FixedPrice
      * InstanceTenancy
      * InstanceType
      * Marketplace
      * OfferingClass
      * OfferingType
      * PricingDetails
        * items
          * Count
          * Price
      * ProductDescription
      * RecurringCharges
        * items
          * Amount
          * Frequency
      * ReservedInstancesOfferingId
      * Scope
      * UsagePrice

### DescribeReservedInstancesRequest
* DescribeReservedInstancesRequest `object`: Contains the parameters for DescribeReservedInstances.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * OfferingClass
  * OfferingType
  * ReservedInstancesIds
    * items

### DescribeReservedInstancesResult
* DescribeReservedInstancesResult `object`: Contains the output for DescribeReservedInstances.
  * ReservedInstances
    * items
      * AvailabilityZone
      * CurrencyCode
      * Duration
      * End
      * FixedPrice
      * InstanceCount
      * InstanceTenancy
      * InstanceType
      * OfferingClass
      * OfferingType
      * ProductDescription
      * RecurringCharges
        * items
          * Amount
          * Frequency
      * ReservedInstancesId
      * Scope
      * Start
      * State
      * Tags
        * items
          * Key
          * Value
      * UsagePrice

### DescribeRouteTablesMaxResults
* DescribeRouteTablesMaxResults `integer`

### DescribeRouteTablesRequest
* DescribeRouteTablesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * RouteTableIds
    * items

### DescribeRouteTablesResult
* DescribeRouteTablesResult `object`: Contains the output of DescribeRouteTables.
  * NextToken
  * RouteTables
    * items
      * Associations
        * items
          * AssociationState
          * GatewayId
          * Main
          * RouteTableAssociationId
          * RouteTableId
          * SubnetId
      * OwnerId
      * PropagatingVgws
        * items
          * GatewayId
      * RouteTableId
      * Routes
        * items
          * CarrierGatewayId
          * DestinationCidrBlock
          * DestinationIpv6CidrBlock
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * InstanceOwnerId
          * LocalGatewayId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * State
          * TransitGatewayId
          * VpcPeeringConnectionId
      * Tags
        * items
          * Key
          * Value
      * VpcId

### DescribeScheduledInstanceAvailabilityMaxResults
* DescribeScheduledInstanceAvailabilityMaxResults `integer`

### DescribeScheduledInstanceAvailabilityRequest
* DescribeScheduledInstanceAvailabilityRequest `object`: Contains the parameters for DescribeScheduledInstanceAvailability.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * FirstSlotStartTimeRange **required**
    * EarliestTime **required**
    * LatestTime **required**
  * MaxResults
  * MaxSlotDurationInHours
  * MinSlotDurationInHours
  * NextToken
  * Recurrence **required**
    * Frequency
    * Interval
    * OccurrenceDays
      * items
    * OccurrenceRelativeToEnd
    * OccurrenceUnit

### DescribeScheduledInstanceAvailabilityResult
* DescribeScheduledInstanceAvailabilityResult `object`: Contains the output of DescribeScheduledInstanceAvailability.
  * NextToken
  * ScheduledInstanceAvailabilitySet
    * items
      * AvailabilityZone
      * AvailableInstanceCount
      * FirstSlotStartTime
      * HourlyPrice
      * InstanceType
      * MaxTermDurationInDays
      * MinTermDurationInDays
      * NetworkPlatform
      * Platform
      * PurchaseToken
      * Recurrence
        * Frequency
        * Interval
        * OccurrenceDaySet
          * items
        * OccurrenceRelativeToEnd
        * OccurrenceUnit
      * SlotDurationInHours
      * TotalScheduledInstanceHours

### DescribeScheduledInstancesRequest
* DescribeScheduledInstancesRequest `object`: Contains the parameters for DescribeScheduledInstances.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ScheduledInstanceIds
    * items
  * SlotStartTimeRange
    * EarliestTime
    * LatestTime

### DescribeScheduledInstancesResult
* DescribeScheduledInstancesResult `object`: Contains the output of DescribeScheduledInstances.
  * NextToken
  * ScheduledInstanceSet
    * items
      * AvailabilityZone
      * CreateDate
      * HourlyPrice
      * InstanceCount
      * InstanceType
      * NetworkPlatform
      * NextSlotStartTime
      * Platform
      * PreviousSlotEndTime
      * Recurrence
        * Frequency
        * Interval
        * OccurrenceDaySet
          * items
        * OccurrenceRelativeToEnd
        * OccurrenceUnit
      * ScheduledInstanceId
      * SlotDurationInHours
      * TermEndDate
      * TermStartDate
      * TotalScheduledInstanceHours

### DescribeSecurityGroupReferencesRequest
* DescribeSecurityGroupReferencesRequest `object`
  * DryRun
  * GroupId **required**
    * items

### DescribeSecurityGroupReferencesResult
* DescribeSecurityGroupReferencesResult `object`
  * SecurityGroupReferenceSet
    * items
      * GroupId
      * ReferencingVpcId
      * VpcPeeringConnectionId

### DescribeSecurityGroupsMaxResults
* DescribeSecurityGroupsMaxResults `integer`

### DescribeSecurityGroupsRequest
* DescribeSecurityGroupsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * GroupIds
    * items
  * GroupNames
    * items
  * MaxResults
  * NextToken

### DescribeSecurityGroupsResult
* DescribeSecurityGroupsResult `object`
  * NextToken
  * SecurityGroups
    * items
      * Description
      * GroupId
      * GroupName
      * IpPermissions
        * items
          * FromPort
          * IpProtocol
          * IpRanges
          * Ipv6Ranges
          * PrefixListIds
          * ToPort
          * UserIdGroupPairs
      * IpPermissionsEgress
        * items
          * FromPort
          * IpProtocol
          * IpRanges
          * Ipv6Ranges
          * PrefixListIds
          * ToPort
          * UserIdGroupPairs
      * OwnerId
      * Tags
        * items
          * Key
          * Value
      * VpcId

### DescribeSnapshotAttributeRequest
* DescribeSnapshotAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * SnapshotId **required**

### DescribeSnapshotAttributeResult
* DescribeSnapshotAttributeResult `object`
  * CreateVolumePermissions
    * items
      * Group
      * UserId
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * SnapshotId

### DescribeSnapshotsRequest
* DescribeSnapshotsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * OwnerIds
    * items
  * RestorableByUserIds
    * items [String](#string)
  * SnapshotIds
    * items

### DescribeSnapshotsResult
* DescribeSnapshotsResult `object`
  * NextToken
  * Snapshots
    * items
      * DataEncryptionKeyId
      * Description
      * Encrypted
      * KmsKeyId
      * OwnerAlias
      * OwnerId
      * Progress
      * SnapshotId
      * StartTime
      * State
      * StateMessage
      * Tags
        * items
          * Key
          * Value
      * VolumeId
      * VolumeSize

### DescribeSpotDatafeedSubscriptionRequest
* DescribeSpotDatafeedSubscriptionRequest `object`: Contains the parameters for DescribeSpotDatafeedSubscription.
  * DryRun

### DescribeSpotDatafeedSubscriptionResult
* DescribeSpotDatafeedSubscriptionResult `object`: Contains the output of DescribeSpotDatafeedSubscription.
  * SpotDatafeedSubscription
    * Bucket
    * Fault
      * Code
      * Message
    * OwnerId
    * Prefix
    * State

### DescribeSpotFleetInstancesMaxResults
* DescribeSpotFleetInstancesMaxResults `integer`

### DescribeSpotFleetInstancesRequest
* DescribeSpotFleetInstancesRequest `object`: Contains the parameters for DescribeSpotFleetInstances.
  * DryRun
  * MaxResults
  * NextToken
  * SpotFleetRequestId **required**

### DescribeSpotFleetInstancesResponse
* DescribeSpotFleetInstancesResponse `object`: Contains the output of DescribeSpotFleetInstances.
  * ActiveInstances
    * items
      * InstanceHealth
      * InstanceId
      * InstanceType
      * SpotInstanceRequestId
  * NextToken
  * SpotFleetRequestId

### DescribeSpotFleetRequestHistoryMaxResults
* DescribeSpotFleetRequestHistoryMaxResults `integer`

### DescribeSpotFleetRequestHistoryRequest
* DescribeSpotFleetRequestHistoryRequest `object`: Contains the parameters for DescribeSpotFleetRequestHistory.
  * DryRun
  * EventType
  * MaxResults
  * NextToken
  * SpotFleetRequestId **required**
  * StartTime **required**

### DescribeSpotFleetRequestHistoryResponse
* DescribeSpotFleetRequestHistoryResponse `object`: Contains the output of DescribeSpotFleetRequestHistory.
  * HistoryRecords
    * items
      * EventInformation
        * EventDescription
        * EventSubType
        * InstanceId
      * EventType
      * Timestamp
  * LastEvaluatedTime
  * NextToken
  * SpotFleetRequestId
  * StartTime

### DescribeSpotFleetRequestsRequest
* DescribeSpotFleetRequestsRequest `object`: Contains the parameters for DescribeSpotFleetRequests.
  * DryRun
  * MaxResults
  * NextToken
  * SpotFleetRequestIds
    * items

### DescribeSpotFleetRequestsResponse
* DescribeSpotFleetRequestsResponse `object`: Contains the output of DescribeSpotFleetRequests.
  * NextToken
  * SpotFleetRequestConfigs
    * items
      * ActivityStatus
      * CreateTime
      * SpotFleetRequestConfig
        * AllocationStrategy
        * ClientToken
        * ExcessCapacityTerminationPolicy
        * FulfilledCapacity
        * IamFleetRole **required**
        * InstanceInterruptionBehavior
        * InstancePoolsToUseCount
        * LaunchSpecifications
          * items
        * LaunchTemplateConfigs
          * items
        * LoadBalancersConfig
          * ClassicLoadBalancersConfig
          * TargetGroupsConfig
        * OnDemandAllocationStrategy
        * OnDemandFulfilledCapacity
        * OnDemandMaxTotalPrice
        * OnDemandTargetCapacity
        * ReplaceUnhealthyInstances
        * SpotMaintenanceStrategies
          * CapacityRebalance
        * SpotMaxTotalPrice
        * SpotPrice
        * TagSpecifications
          * items
        * TargetCapacity **required**
        * TerminateInstancesWithExpiration
        * Type
        * ValidFrom
        * ValidUntil
      * SpotFleetRequestId
      * SpotFleetRequestState
      * Tags
        * items
          * Key
          * Value

### DescribeSpotInstanceRequestsRequest
* DescribeSpotInstanceRequestsRequest `object`: Contains the parameters for DescribeSpotInstanceRequests.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * SpotInstanceRequestIds
    * items

### DescribeSpotInstanceRequestsResult
* DescribeSpotInstanceRequestsResult `object`: Contains the output of DescribeSpotInstanceRequests.
  * NextToken
  * SpotInstanceRequests
    * items
      * ActualBlockHourlyPrice
      * AvailabilityZoneGroup
      * BlockDurationMinutes
      * CreateTime
      * Fault
        * Code
        * Message
      * InstanceId
      * InstanceInterruptionBehavior
      * LaunchGroup
      * LaunchSpecification
        * AddressingType
        * BlockDeviceMappings
          * items
        * EbsOptimized
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceType
        * KernelId
        * KeyName
        * Monitoring
          * Enabled **required**
        * NetworkInterfaces
          * items
        * Placement
          * AvailabilityZone
          * GroupName
          * Tenancy
        * RamdiskId
        * SecurityGroups
          * items
        * SubnetId
        * UserData
      * LaunchedAvailabilityZone
      * ProductDescription
      * SpotInstanceRequestId
      * SpotPrice
      * State
      * Status
        * Code
        * Message
        * UpdateTime
      * Tags
        * items
          * Key
          * Value
      * Type
      * ValidFrom
      * ValidUntil

### DescribeSpotPriceHistoryRequest
* DescribeSpotPriceHistoryRequest `object`: Contains the parameters for DescribeSpotPriceHistory.
  * AvailabilityZone
  * DryRun
  * EndTime
  * Filters
    * items
      * Name
      * Values
        * items
  * InstanceTypes
    * items [InstanceType](#instancetype)
  * MaxResults
  * NextToken
  * ProductDescriptions
    * items [String](#string)
  * StartTime

### DescribeSpotPriceHistoryResult
* DescribeSpotPriceHistoryResult `object`: Contains the output of DescribeSpotPriceHistory.
  * NextToken
  * SpotPriceHistory
    * items
      * AvailabilityZone
      * InstanceType
      * ProductDescription
      * SpotPrice
      * Timestamp

### DescribeStaleSecurityGroupsMaxResults
* DescribeStaleSecurityGroupsMaxResults `integer`

### DescribeStaleSecurityGroupsNextToken
* DescribeStaleSecurityGroupsNextToken `string`

### DescribeStaleSecurityGroupsRequest
* DescribeStaleSecurityGroupsRequest `object`
  * DryRun
  * MaxResults
  * NextToken
  * VpcId **required**

### DescribeStaleSecurityGroupsResult
* DescribeStaleSecurityGroupsResult `object`
  * NextToken
  * StaleSecurityGroupSet
    * items
      * Description
      * GroupId
      * GroupName
      * StaleIpPermissions
        * items
          * FromPort
          * IpProtocol
          * IpRanges
          * PrefixListIds
          * ToPort
          * UserIdGroupPairs
      * StaleIpPermissionsEgress
        * items
          * FromPort
          * IpProtocol
          * IpRanges
          * PrefixListIds
          * ToPort
          * UserIdGroupPairs
      * VpcId

### DescribeSubnetsMaxResults
* DescribeSubnetsMaxResults `integer`

### DescribeSubnetsRequest
* DescribeSubnetsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * SubnetIds
    * items

### DescribeSubnetsResult
* DescribeSubnetsResult `object`
  * NextToken
  * Subnets
    * items
      * AssignIpv6AddressOnCreation
      * AvailabilityZone
      * AvailabilityZoneId
      * AvailableIpAddressCount
      * CidrBlock
      * CustomerOwnedIpv4Pool
      * DefaultForAz
      * Ipv6CidrBlockAssociationSet
        * items
          * AssociationId
          * Ipv6CidrBlock
          * Ipv6CidrBlockState
      * MapCustomerOwnedIpOnLaunch
      * MapPublicIpOnLaunch
      * OutpostArn
      * OwnerId
      * State
      * SubnetArn
      * SubnetId
      * Tags
        * items
          * Key
          * Value
      * VpcId

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeTagsResult
* DescribeTagsResult `object`
  * NextToken
  * Tags
    * items
      * Key
      * ResourceId
      * ResourceType
      * Value

### DescribeTrafficMirrorFiltersRequest
* DescribeTrafficMirrorFiltersRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorFilterIds
    * items

### DescribeTrafficMirrorFiltersResult
* DescribeTrafficMirrorFiltersResult `object`
  * NextToken
  * TrafficMirrorFilters
    * items
      * Description
      * EgressFilterRules
        * items
          * Description
          * DestinationCidrBlock
          * DestinationPortRange
          * Protocol
          * RuleAction
          * RuleNumber
          * SourceCidrBlock
          * SourcePortRange
          * TrafficDirection
          * TrafficMirrorFilterId
          * TrafficMirrorFilterRuleId
      * IngressFilterRules
        * items
          * Description
          * DestinationCidrBlock
          * DestinationPortRange
          * Protocol
          * RuleAction
          * RuleNumber
          * SourceCidrBlock
          * SourcePortRange
          * TrafficDirection
          * TrafficMirrorFilterId
          * TrafficMirrorFilterRuleId
      * NetworkServices
        * items
      * Tags
        * items
          * Key
          * Value
      * TrafficMirrorFilterId

### DescribeTrafficMirrorSessionsRequest
* DescribeTrafficMirrorSessionsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorSessionIds
    * items

### DescribeTrafficMirrorSessionsResult
* DescribeTrafficMirrorSessionsResult `object`
  * NextToken
  * TrafficMirrorSessions
    * items
      * Description
      * NetworkInterfaceId
      * OwnerId
      * PacketLength
      * SessionNumber
      * Tags
        * items
          * Key
          * Value
      * TrafficMirrorFilterId
      * TrafficMirrorSessionId
      * TrafficMirrorTargetId
      * VirtualNetworkId

### DescribeTrafficMirrorTargetsRequest
* DescribeTrafficMirrorTargetsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TrafficMirrorTargetIds
    * items

### DescribeTrafficMirrorTargetsResult
* DescribeTrafficMirrorTargetsResult `object`
  * NextToken
  * TrafficMirrorTargets
    * items
      * Description
      * NetworkInterfaceId
      * NetworkLoadBalancerArn
      * OwnerId
      * Tags
        * items
          * Key
          * Value
      * TrafficMirrorTargetId
      * Type

### DescribeTransitGatewayAttachmentsRequest
* DescribeTransitGatewayAttachmentsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

### DescribeTransitGatewayAttachmentsResult
* DescribeTransitGatewayAttachmentsResult `object`
  * NextToken
  * TransitGatewayAttachments
    * items
      * Association
        * State
        * TransitGatewayRouteTableId
      * CreationTime
      * ResourceId
      * ResourceOwnerId
      * ResourceType
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayAttachmentId
      * TransitGatewayId
      * TransitGatewayOwnerId

### DescribeTransitGatewayConnectPeersRequest
* DescribeTransitGatewayConnectPeersRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayConnectPeerIds
    * items

### DescribeTransitGatewayConnectPeersResult
* DescribeTransitGatewayConnectPeersResult `object`
  * NextToken
  * TransitGatewayConnectPeers
    * items
      * ConnectPeerConfiguration
        * BgpConfigurations
          * items
        * InsideCidrBlocks
          * items
        * PeerAddress
        * Protocol
        * TransitGatewayAddress
      * CreationTime
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayAttachmentId
      * TransitGatewayConnectPeerId

### DescribeTransitGatewayConnectsRequest
* DescribeTransitGatewayConnectsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

### DescribeTransitGatewayConnectsResult
* DescribeTransitGatewayConnectsResult `object`
  * NextToken
  * TransitGatewayConnects
    * items
      * CreationTime
      * Options
        * Protocol
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayAttachmentId
      * TransitGatewayId
      * TransportTransitGatewayAttachmentId

### DescribeTransitGatewayMulticastDomainsRequest
* DescribeTransitGatewayMulticastDomainsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainIds
    * items

### DescribeTransitGatewayMulticastDomainsResult
* DescribeTransitGatewayMulticastDomainsResult `object`
  * NextToken
  * TransitGatewayMulticastDomains
    * items
      * CreationTime
      * Options
        * AutoAcceptSharedAssociations
        * Igmpv2Support
        * StaticSourcesSupport
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayId
      * TransitGatewayMulticastDomainArn
      * TransitGatewayMulticastDomainId

### DescribeTransitGatewayPeeringAttachmentsRequest
* DescribeTransitGatewayPeeringAttachmentsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

### DescribeTransitGatewayPeeringAttachmentsResult
* DescribeTransitGatewayPeeringAttachmentsResult `object`
  * NextToken
  * TransitGatewayPeeringAttachments
    * items
      * AccepterTgwInfo
        * OwnerId
        * Region
        * TransitGatewayId
      * CreationTime
      * RequesterTgwInfo
        * OwnerId
        * Region
        * TransitGatewayId
      * State
      * Status
        * Code
        * Message
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayAttachmentId

### DescribeTransitGatewayRouteTablesRequest
* DescribeTransitGatewayRouteTablesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableIds
    * items

### DescribeTransitGatewayRouteTablesResult
* DescribeTransitGatewayRouteTablesResult `object`
  * NextToken
  * TransitGatewayRouteTables
    * items
      * CreationTime
      * DefaultAssociationRouteTable
      * DefaultPropagationRouteTable
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayId
      * TransitGatewayRouteTableId

### DescribeTransitGatewayVpcAttachmentsRequest
* DescribeTransitGatewayVpcAttachmentsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentIds
    * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

### DescribeTransitGatewayVpcAttachmentsResult
* DescribeTransitGatewayVpcAttachmentsResult `object`
  * NextToken
  * TransitGatewayVpcAttachments
    * items
      * CreationTime
      * Options
        * ApplianceModeSupport
        * DnsSupport
        * Ipv6Support
      * State
      * SubnetIds
        * items
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayAttachmentId
      * TransitGatewayId
      * VpcId
      * VpcOwnerId

### DescribeTransitGatewaysRequest
* DescribeTransitGatewaysRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayIds
    * items

### DescribeTransitGatewaysResult
* DescribeTransitGatewaysResult `object`
  * NextToken
  * TransitGateways
    * items
      * CreationTime
      * Description
      * Options
        * AmazonSideAsn
        * AssociationDefaultRouteTableId
        * AutoAcceptSharedAttachments
        * DefaultRouteTableAssociation
        * DefaultRouteTablePropagation
        * DnsSupport
        * MulticastSupport
        * PropagationDefaultRouteTableId
        * TransitGatewayCidrBlocks
          * items
        * VpnEcmpSupport
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayArn
      * TransitGatewayId

### DescribeVolumeAttributeRequest
* DescribeVolumeAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * VolumeId **required**

### DescribeVolumeAttributeResult
* DescribeVolumeAttributeResult `object`
  * AutoEnableIO
    * Value
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * VolumeId

### DescribeVolumeStatusRequest
* DescribeVolumeStatusRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

### DescribeVolumeStatusResult
* DescribeVolumeStatusResult `object`
  * NextToken
  * VolumeStatuses
    * items
      * Actions
        * items
          * Code
          * Description
          * EventId
          * EventType
      * AttachmentStatuses
        * items
          * InstanceId
          * IoPerformance
      * AvailabilityZone
      * Events
        * items
          * Description
          * EventId
          * EventType
          * InstanceId
          * NotAfter
          * NotBefore
      * OutpostArn
      * VolumeId
      * VolumeStatus
        * Details
          * items
        * Status

### DescribeVolumesModificationsRequest
* DescribeVolumesModificationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

### DescribeVolumesModificationsResult
* DescribeVolumesModificationsResult `object`
  * NextToken
  * VolumesModifications
    * items
      * EndTime
      * ModificationState
      * OriginalIops
      * OriginalMultiAttachEnabled
      * OriginalSize
      * OriginalThroughput
      * OriginalVolumeType
      * Progress
      * StartTime
      * StatusMessage
      * TargetIops
      * TargetMultiAttachEnabled
      * TargetSize
      * TargetThroughput
      * TargetVolumeType
      * VolumeId

### DescribeVolumesRequest
* DescribeVolumesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VolumeIds
    * items

### DescribeVolumesResult
* DescribeVolumesResult `object`
  * NextToken
  * Volumes
    * items
      * Attachments
        * items
          * AttachTime
          * DeleteOnTermination
          * Device
          * InstanceId
          * State
          * VolumeId
      * AvailabilityZone
      * CreateTime
      * Encrypted
      * FastRestored
      * Iops
      * KmsKeyId
      * MultiAttachEnabled
      * OutpostArn
      * Size
      * SnapshotId
      * State
      * Tags
        * items
          * Key
          * Value
      * Throughput
      * VolumeId
      * VolumeType

### DescribeVpcAttributeRequest
* DescribeVpcAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * VpcId **required**

### DescribeVpcAttributeResult
* DescribeVpcAttributeResult `object`
  * EnableDnsHostnames
    * Value
  * EnableDnsSupport
    * Value
  * VpcId

### DescribeVpcClassicLinkDnsSupportMaxResults
* DescribeVpcClassicLinkDnsSupportMaxResults `integer`

### DescribeVpcClassicLinkDnsSupportNextToken
* DescribeVpcClassicLinkDnsSupportNextToken `string`

### DescribeVpcClassicLinkDnsSupportRequest
* DescribeVpcClassicLinkDnsSupportRequest `object`
  * MaxResults
  * NextToken
  * VpcIds
    * items

### DescribeVpcClassicLinkDnsSupportResult
* DescribeVpcClassicLinkDnsSupportResult `object`
  * NextToken
  * Vpcs
    * items
      * ClassicLinkDnsSupported
      * VpcId

### DescribeVpcClassicLinkRequest
* DescribeVpcClassicLinkRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpcIds
    * items

### DescribeVpcClassicLinkResult
* DescribeVpcClassicLinkResult `object`
  * Vpcs
    * items
      * ClassicLinkEnabled
      * Tags
        * items
          * Key
          * Value
      * VpcId

### DescribeVpcEndpointConnectionNotificationsRequest
* DescribeVpcEndpointConnectionNotificationsRequest `object`
  * ConnectionNotificationId
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeVpcEndpointConnectionNotificationsResult
* DescribeVpcEndpointConnectionNotificationsResult `object`
  * ConnectionNotificationSet
    * items
      * ConnectionEvents
        * items
      * ConnectionNotificationArn
      * ConnectionNotificationId
      * ConnectionNotificationState
      * ConnectionNotificationType
      * ServiceId
      * VpcEndpointId
  * NextToken

### DescribeVpcEndpointConnectionsRequest
* DescribeVpcEndpointConnectionsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken

### DescribeVpcEndpointConnectionsResult
* DescribeVpcEndpointConnectionsResult `object`
  * NextToken
  * VpcEndpointConnections
    * items
      * CreationTimestamp
      * DnsEntries
        * items
          * DnsName
          * HostedZoneId
      * GatewayLoadBalancerArns
        * items
      * NetworkLoadBalancerArns
        * items
      * ServiceId
      * VpcEndpointId
      * VpcEndpointOwner
      * VpcEndpointState

### DescribeVpcEndpointServiceConfigurationsRequest
* DescribeVpcEndpointServiceConfigurationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceIds
    * items

### DescribeVpcEndpointServiceConfigurationsResult
* DescribeVpcEndpointServiceConfigurationsResult `object`
  * NextToken
  * ServiceConfigurations
    * items
      * AcceptanceRequired
      * AvailabilityZones
        * items
      * BaseEndpointDnsNames
        * items
      * GatewayLoadBalancerArns
        * items
      * ManagesVpcEndpoints
      * NetworkLoadBalancerArns
        * items
      * PrivateDnsName
      * PrivateDnsNameConfiguration
        * Name
        * State
        * Type
        * Value
      * ServiceId
      * ServiceName
      * ServiceState
      * ServiceType
        * items
          * ServiceType
      * Tags
        * items
          * Key
          * Value

### DescribeVpcEndpointServicePermissionsRequest
* DescribeVpcEndpointServicePermissionsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceId **required**

### DescribeVpcEndpointServicePermissionsResult
* DescribeVpcEndpointServicePermissionsResult `object`
  * AllowedPrincipals
    * items
      * Principal
      * PrincipalType
  * NextToken

### DescribeVpcEndpointServicesRequest
* DescribeVpcEndpointServicesRequest `object`: Contains the parameters for DescribeVpcEndpointServices.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * ServiceNames
    * items

### DescribeVpcEndpointServicesResult
* DescribeVpcEndpointServicesResult `object`: Contains the output of DescribeVpcEndpointServices.
  * NextToken
  * ServiceDetails
    * items
      * AcceptanceRequired
      * AvailabilityZones
        * items
      * BaseEndpointDnsNames
        * items
      * ManagesVpcEndpoints
      * Owner
      * PrivateDnsName
      * PrivateDnsNameVerificationState
      * PrivateDnsNames
        * items
          * PrivateDnsName
      * ServiceId
      * ServiceName
      * ServiceType
        * items
          * ServiceType
      * Tags
        * items
          * Key
          * Value
      * VpcEndpointPolicySupported
  * ServiceNames
    * items

### DescribeVpcEndpointsRequest
* DescribeVpcEndpointsRequest `object`: Contains the parameters for DescribeVpcEndpoints.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcEndpointIds
    * items

### DescribeVpcEndpointsResult
* DescribeVpcEndpointsResult `object`: Contains the output of DescribeVpcEndpoints.
  * NextToken
  * VpcEndpoints
    * items
      * CreationTimestamp
      * DnsEntries
        * items
          * DnsName
          * HostedZoneId
      * Groups
        * items
          * GroupId
          * GroupName
      * LastError
        * Code
        * Message
      * NetworkInterfaceIds
        * items
      * OwnerId
      * PolicyDocument
      * PrivateDnsEnabled
      * RequesterManaged
      * RouteTableIds
        * items
      * ServiceName
      * State
      * SubnetIds
        * items
      * Tags
        * items
          * Key
          * Value
      * VpcEndpointId
      * VpcEndpointType
      * VpcId

### DescribeVpcPeeringConnectionsMaxResults
* DescribeVpcPeeringConnectionsMaxResults `integer`

### DescribeVpcPeeringConnectionsRequest
* DescribeVpcPeeringConnectionsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcPeeringConnectionIds
    * items

### DescribeVpcPeeringConnectionsResult
* DescribeVpcPeeringConnectionsResult `object`
  * NextToken
  * VpcPeeringConnections
    * items
      * AccepterVpcInfo
        * CidrBlock
        * CidrBlockSet
          * items
        * Ipv6CidrBlockSet
          * items
        * OwnerId
        * PeeringOptions
          * AllowDnsResolutionFromRemoteVpc
          * AllowEgressFromLocalClassicLinkToRemoteVpc
          * AllowEgressFromLocalVpcToRemoteClassicLink
        * Region
        * VpcId
      * ExpirationTime
      * RequesterVpcInfo
        * CidrBlock
        * CidrBlockSet
          * items
        * Ipv6CidrBlockSet
          * items
        * OwnerId
        * PeeringOptions
          * AllowDnsResolutionFromRemoteVpc
          * AllowEgressFromLocalClassicLinkToRemoteVpc
          * AllowEgressFromLocalVpcToRemoteClassicLink
        * Region
        * VpcId
      * Status
        * Code
        * Message
      * Tags
        * items
          * Key
          * Value
      * VpcPeeringConnectionId

### DescribeVpcsMaxResults
* DescribeVpcsMaxResults `integer`

### DescribeVpcsRequest
* DescribeVpcsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * VpcIds
    * items

### DescribeVpcsResult
* DescribeVpcsResult `object`
  * NextToken
  * Vpcs
    * items
      * CidrBlock
      * CidrBlockAssociationSet
        * items
          * AssociationId
          * CidrBlock
          * CidrBlockState
      * DhcpOptionsId
      * InstanceTenancy
      * Ipv6CidrBlockAssociationSet
        * items
          * AssociationId
          * Ipv6CidrBlock
          * Ipv6CidrBlockState
          * Ipv6Pool
          * NetworkBorderGroup
      * IsDefault
      * OwnerId
      * State
      * Tags
        * items
          * Key
          * Value
      * VpcId

### DescribeVpnConnectionsRequest
* DescribeVpnConnectionsRequest `object`: Contains the parameters for DescribeVpnConnections.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpnConnectionIds
    * items

### DescribeVpnConnectionsResult
* DescribeVpnConnectionsResult `object`: Contains the output of DescribeVpnConnections.
  * VpnConnections
    * items
      * Category
      * CustomerGatewayConfiguration
      * CustomerGatewayId
      * Options
        * EnableAcceleration
        * LocalIpv4NetworkCidr
        * LocalIpv6NetworkCidr
        * RemoteIpv4NetworkCidr
        * RemoteIpv6NetworkCidr
        * StaticRoutesOnly
        * TunnelInsideIpVersion
        * TunnelOptions
          * items
      * Routes
        * items
          * DestinationCidrBlock
          * Source
          * State
      * State
      * Tags
        * items
          * Key
          * Value
      * TransitGatewayId
      * Type
      * VgwTelemetry
        * items
          * AcceptedRouteCount
          * CertificateArn
          * LastStatusChange
          * OutsideIpAddress
          * Status
          * StatusMessage
      * VpnConnectionId
      * VpnGatewayId

### DescribeVpnGatewaysRequest
* DescribeVpnGatewaysRequest `object`: Contains the parameters for DescribeVpnGateways.
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * VpnGatewayIds
    * items

### DescribeVpnGatewaysResult
* DescribeVpnGatewaysResult `object`: Contains the output of DescribeVpnGateways.
  * VpnGateways
    * items
      * AmazonSideAsn
      * AvailabilityZone
      * State
      * Tags
        * items
          * Key
          * Value
      * Type
      * VpcAttachments
        * items
          * State
          * VpcId
      * VpnGatewayId

### DetachClassicLinkVpcRequest
* DetachClassicLinkVpcRequest `object`
  * DryRun
  * InstanceId **required**
  * VpcId **required**

### DetachClassicLinkVpcResult
* DetachClassicLinkVpcResult `object`
  * Return

### DetachInternetGatewayRequest
* DetachInternetGatewayRequest `object`
  * DryRun
  * InternetGatewayId **required**
  * VpcId **required**

### DetachNetworkInterfaceRequest
* DetachNetworkInterfaceRequest `object`: Contains the parameters for DetachNetworkInterface.
  * AttachmentId **required**
  * DryRun
  * Force

### DetachVolumeRequest
* DetachVolumeRequest `object`
  * Device
  * DryRun
  * Force
  * InstanceId
  * VolumeId **required**

### DetachVpnGatewayRequest
* DetachVpnGatewayRequest `object`: Contains the parameters for DetachVpnGateway.
  * DryRun
  * VpcId **required**
  * VpnGatewayId **required**

### DeviceType
* DeviceType `string` (values: ebs, instance-store)

### DhcpConfiguration
* DhcpConfiguration `object`: Describes a DHCP configuration option.
  * Key
  * Values
    * items
      * Value

### DhcpConfigurationList
* DhcpConfigurationList `array`
  * items
    * Key
    * Values
      * items
        * Value

### DhcpConfigurationValueList
* DhcpConfigurationValueList `array`
  * items
    * Value

### DhcpOptions
* DhcpOptions `object`: Describes a set of DHCP options.
  * DhcpConfigurations
    * items
      * Key
      * Values
        * items
          * Value
  * DhcpOptionsId
  * OwnerId
  * Tags
    * items
      * Key
      * Value

### DhcpOptionsId
* DhcpOptionsId `string`

### DhcpOptionsIdStringList
* DhcpOptionsIdStringList `array`
  * items

### DhcpOptionsList
* DhcpOptionsList `array`
  * items
    * DhcpConfigurations
      * items
        * Key
        * Values
          * items
    * DhcpOptionsId
    * OwnerId
    * Tags
      * items
        * Key
        * Value

### DirectoryServiceAuthentication
* DirectoryServiceAuthentication `object`: Describes an Active Directory.
  * DirectoryId

### DirectoryServiceAuthenticationRequest
* DirectoryServiceAuthenticationRequest `object`: Describes the Active Directory to be used for client authentication.
  * DirectoryId

### DisableEbsEncryptionByDefaultRequest
* DisableEbsEncryptionByDefaultRequest `object`
  * DryRun

### DisableEbsEncryptionByDefaultResult
* DisableEbsEncryptionByDefaultResult `object`
  * EbsEncryptionByDefault

### DisableFastSnapshotRestoreErrorItem
* DisableFastSnapshotRestoreErrorItem `object`: Contains information about the errors that occurred when disabling fast snapshot restores.
  * FastSnapshotRestoreStateErrors
    * items
      * AvailabilityZone
      * Error
        * Code
        * Message
  * SnapshotId

### DisableFastSnapshotRestoreErrorSet
* DisableFastSnapshotRestoreErrorSet `array`
  * items
    * FastSnapshotRestoreStateErrors
      * items
        * AvailabilityZone
        * Error
          * Code
          * Message
    * SnapshotId

### DisableFastSnapshotRestoreStateError
* DisableFastSnapshotRestoreStateError `object`: Describes an error that occurred when disabling fast snapshot restores.
  * Code
  * Message

### DisableFastSnapshotRestoreStateErrorItem
* DisableFastSnapshotRestoreStateErrorItem `object`: Contains information about an error that occurred when disabling fast snapshot restores.
  * AvailabilityZone
  * Error
    * Code
    * Message

### DisableFastSnapshotRestoreStateErrorSet
* DisableFastSnapshotRestoreStateErrorSet `array`
  * items
    * AvailabilityZone
    * Error
      * Code
      * Message

### DisableFastSnapshotRestoreSuccessItem
* DisableFastSnapshotRestoreSuccessItem `object`: Describes fast snapshot restores that were successfully disabled.
  * AvailabilityZone
  * DisabledTime
  * DisablingTime
  * EnabledTime
  * EnablingTime
  * OptimizingTime
  * OwnerAlias
  * OwnerId
  * SnapshotId
  * State
  * StateTransitionReason

### DisableFastSnapshotRestoreSuccessSet
* DisableFastSnapshotRestoreSuccessSet `array`
  * items
    * AvailabilityZone
    * DisabledTime
    * DisablingTime
    * EnabledTime
    * EnablingTime
    * OptimizingTime
    * OwnerAlias
    * OwnerId
    * SnapshotId
    * State
    * StateTransitionReason

### DisableFastSnapshotRestoresRequest
* DisableFastSnapshotRestoresRequest `object`
  * AvailabilityZones **required**
    * items
  * DryRun
  * SourceSnapshotIds **required**
    * items

### DisableFastSnapshotRestoresResult
* DisableFastSnapshotRestoresResult `object`
  * Successful
    * items
      * AvailabilityZone
      * DisabledTime
      * DisablingTime
      * EnabledTime
      * EnablingTime
      * OptimizingTime
      * OwnerAlias
      * OwnerId
      * SnapshotId
      * State
      * StateTransitionReason
  * Unsuccessful
    * items
      * FastSnapshotRestoreStateErrors
        * items
          * AvailabilityZone
          * Error
      * SnapshotId

### DisableTransitGatewayRouteTablePropagationRequest
* DisableTransitGatewayRouteTablePropagationRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

### DisableTransitGatewayRouteTablePropagationResult
* DisableTransitGatewayRouteTablePropagationResult `object`
  * Propagation
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### DisableVgwRoutePropagationRequest
* DisableVgwRoutePropagationRequest `object`: Contains the parameters for DisableVgwRoutePropagation.
  * DryRun
  * GatewayId **required**
  * RouteTableId **required**

### DisableVpcClassicLinkDnsSupportRequest
* DisableVpcClassicLinkDnsSupportRequest `object`
  * VpcId

### DisableVpcClassicLinkDnsSupportResult
* DisableVpcClassicLinkDnsSupportResult `object`
  * Return

### DisableVpcClassicLinkRequest
* DisableVpcClassicLinkRequest `object`
  * DryRun
  * VpcId **required**

### DisableVpcClassicLinkResult
* DisableVpcClassicLinkResult `object`
  * Return

### DisassociateAddressRequest
* DisassociateAddressRequest `object`
  * AssociationId
  * DryRun
  * PublicIp

### DisassociateClientVpnTargetNetworkRequest
* DisassociateClientVpnTargetNetworkRequest `object`
  * AssociationId **required**
  * ClientVpnEndpointId **required**
  * DryRun

### DisassociateClientVpnTargetNetworkResult
* DisassociateClientVpnTargetNetworkResult `object`
  * AssociationId
  * Status
    * Code
    * Message

### DisassociateEnclaveCertificateIamRoleRequest
* DisassociateEnclaveCertificateIamRoleRequest `object`
  * CertificateArn
  * DryRun
  * RoleArn

### DisassociateEnclaveCertificateIamRoleResult
* DisassociateEnclaveCertificateIamRoleResult `object`
  * Return

### DisassociateIamInstanceProfileRequest
* DisassociateIamInstanceProfileRequest `object`
  * AssociationId **required**

### DisassociateIamInstanceProfileResult
* DisassociateIamInstanceProfileResult `object`
  * IamInstanceProfileAssociation
    * AssociationId
    * IamInstanceProfile
      * Arn
      * Id
    * InstanceId
    * State
    * Timestamp

### DisassociateRouteTableRequest
* DisassociateRouteTableRequest `object`
  * AssociationId **required**
  * DryRun

### DisassociateSubnetCidrBlockRequest
* DisassociateSubnetCidrBlockRequest `object`
  * AssociationId **required**

### DisassociateSubnetCidrBlockResult
* DisassociateSubnetCidrBlockResult `object`
  * Ipv6CidrBlockAssociation
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage
  * SubnetId

### DisassociateTransitGatewayMulticastDomainRequest
* DisassociateTransitGatewayMulticastDomainRequest `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

### DisassociateTransitGatewayMulticastDomainResult
* DisassociateTransitGatewayMulticastDomainResult `object`
  * Associations
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * Subnets
      * items
        * State
        * SubnetId
    * TransitGatewayAttachmentId
    * TransitGatewayMulticastDomainId

### DisassociateTransitGatewayRouteTableRequest
* DisassociateTransitGatewayRouteTableRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

### DisassociateTransitGatewayRouteTableResult
* DisassociateTransitGatewayRouteTableResult `object`
  * Association
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### DisassociateVpcCidrBlockRequest
* DisassociateVpcCidrBlockRequest `object`
  * AssociationId **required**

### DisassociateVpcCidrBlockResult
* DisassociateVpcCidrBlockResult `object`
  * CidrBlockAssociation
    * AssociationId
    * CidrBlock
    * CidrBlockState
      * State
      * StatusMessage
  * Ipv6CidrBlockAssociation
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage
    * Ipv6Pool
    * NetworkBorderGroup
  * VpcId

### DiskCount
* DiskCount `integer`

### DiskImage
* DiskImage `object`: Describes a disk image.
  * Description
  * Image
    * Bytes **required**
    * Format **required**
    * ImportManifestUrl **required**
  * Volume
    * Size **required**

### DiskImageDescription
* DiskImageDescription `object`: Describes a disk image.
  * Checksum
  * Format
  * ImportManifestUrl
  * Size

### DiskImageDetail
* DiskImageDetail `object`: Describes a disk image.
  * Bytes **required**
  * Format **required**
  * ImportManifestUrl **required**

### DiskImageFormat
* DiskImageFormat `string` (values: VMDK, RAW, VHD)

### DiskImageList
* DiskImageList `array`
  * items [DiskImage](#diskimage)

### DiskImageVolumeDescription
* DiskImageVolumeDescription `object`: Describes a disk image volume.
  * Id
  * Size

### DiskInfo
* DiskInfo `object`: Describes the disk.
  * Count
  * SizeInGB
  * Type

### DiskInfoList
* DiskInfoList `array`
  * items
    * Count
    * SizeInGB
    * Type

### DiskSize
* DiskSize `integer`

### DiskType
* DiskType `string` (values: hdd, ssd)

### DnsEntry
* DnsEntry `object`: Describes a DNS entry.
  * DnsName
  * HostedZoneId

### DnsEntrySet
* DnsEntrySet `array`
  * items
    * DnsName
    * HostedZoneId

### DnsNameState
* DnsNameState `string` (values: pendingVerification, verified, failed)

### DnsServersOptionsModifyStructure
* DnsServersOptionsModifyStructure `object`: Information about the DNS server to be used.
  * CustomDnsServers
    * items
  * Enabled

### DnsSupportValue
* DnsSupportValue `string` (values: enable, disable)

### DomainType
* DomainType `string` (values: vpc, standard)

### Double
* Double `number`

### EbsBlockDevice
* EbsBlockDevice `object`: Describes a block device for an EBS volume.
  * DeleteOnTermination
  * Encrypted
  * Iops
  * KmsKeyId
  * SnapshotId
  * Throughput
  * VolumeSize
  * VolumeType

### EbsEncryptionSupport
* EbsEncryptionSupport `string` (values: unsupported, supported)

### EbsInfo
* EbsInfo `object`: Describes the Amazon EBS features supported by the instance type.
  * EbsOptimizedInfo
    * BaselineBandwidthInMbps
    * BaselineIops
    * BaselineThroughputInMBps
    * MaximumBandwidthInMbps
    * MaximumIops
    * MaximumThroughputInMBps
  * EbsOptimizedSupport
  * EncryptionSupport
  * NvmeSupport

### EbsInstanceBlockDevice
* EbsInstanceBlockDevice `object`: Describes a parameter used to set up an EBS volume in a block device mapping.
  * AttachTime
  * DeleteOnTermination
  * Status
  * VolumeId

### EbsInstanceBlockDeviceSpecification
* EbsInstanceBlockDeviceSpecification `object`: Describes information used to set up an EBS volume specified in a block device mapping.
  * DeleteOnTermination
  * VolumeId

### EbsNvmeSupport
* EbsNvmeSupport `string` (values: unsupported, supported, required)

### EbsOptimizedInfo
* EbsOptimizedInfo `object`: Describes the optimized EBS performance for supported instance types.
  * BaselineBandwidthInMbps
  * BaselineIops
  * BaselineThroughputInMBps
  * MaximumBandwidthInMbps
  * MaximumIops
  * MaximumThroughputInMBps

### EbsOptimizedSupport
* EbsOptimizedSupport `string` (values: unsupported, supported, default)

### EfaSupportedFlag
* EfaSupportedFlag `boolean`

### EgressOnlyInternetGateway
* EgressOnlyInternetGateway `object`: Describes an egress-only internet gateway.
  * Attachments
    * items
      * State
      * VpcId
  * EgressOnlyInternetGatewayId
  * Tags
    * items
      * Key
      * Value

### EgressOnlyInternetGatewayId
* EgressOnlyInternetGatewayId `string`

### EgressOnlyInternetGatewayIdList
* EgressOnlyInternetGatewayIdList `array`
  * items

### EgressOnlyInternetGatewayList
* EgressOnlyInternetGatewayList `array`
  * items
    * Attachments
      * items
        * State
        * VpcId
    * EgressOnlyInternetGatewayId
    * Tags
      * items
        * Key
        * Value

### ElasticGpuAssociation
* ElasticGpuAssociation `object`: Describes the association between an instance and an Elastic Graphics accelerator.
  * ElasticGpuAssociationId
  * ElasticGpuAssociationState
  * ElasticGpuAssociationTime
  * ElasticGpuId

### ElasticGpuAssociationList
* ElasticGpuAssociationList `array`
  * items
    * ElasticGpuAssociationId
    * ElasticGpuAssociationState
    * ElasticGpuAssociationTime
    * ElasticGpuId

### ElasticGpuHealth
* ElasticGpuHealth `object`: Describes the status of an Elastic Graphics accelerator.
  * Status

### ElasticGpuId
* ElasticGpuId `string`

### ElasticGpuIdSet
* ElasticGpuIdSet `array`
  * items

### ElasticGpuSet
* ElasticGpuSet `array`
  * items
    * AvailabilityZone
    * ElasticGpuHealth
      * Status
    * ElasticGpuId
    * ElasticGpuState
    * ElasticGpuType
    * InstanceId
    * Tags
      * items
        * Key
        * Value

### ElasticGpuSpecification
* ElasticGpuSpecification `object`: A specification for an Elastic Graphics accelerator.
  * Type **required**

### ElasticGpuSpecificationList
* ElasticGpuSpecificationList `array`
  * items
    * Type **required**

### ElasticGpuSpecificationResponse
* ElasticGpuSpecificationResponse `object`: Describes an elastic GPU.
  * Type

### ElasticGpuSpecificationResponseList
* ElasticGpuSpecificationResponseList `array`
  * items
    * Type

### ElasticGpuSpecifications
* ElasticGpuSpecifications `array`
  * items
    * Type **required**

### ElasticGpuState
* ElasticGpuState `string` (values: ATTACHED)

### ElasticGpuStatus
* ElasticGpuStatus `string` (values: OK, IMPAIRED)

### ElasticGpus
* ElasticGpus `object`: Describes an Elastic Graphics accelerator.
  * AvailabilityZone
  * ElasticGpuHealth
    * Status
  * ElasticGpuId
  * ElasticGpuState
  * ElasticGpuType
  * InstanceId
  * Tags
    * items
      * Key
      * Value

### ElasticInferenceAccelerator
* ElasticInferenceAccelerator `object`:  Describes an elastic inference accelerator. 
  * Count
  * Type **required**

### ElasticInferenceAcceleratorAssociation
* ElasticInferenceAcceleratorAssociation `object`:  Describes the association between an instance and an elastic inference accelerator. 
  * ElasticInferenceAcceleratorArn
  * ElasticInferenceAcceleratorAssociationId
  * ElasticInferenceAcceleratorAssociationState
  * ElasticInferenceAcceleratorAssociationTime

### ElasticInferenceAcceleratorAssociationList
* ElasticInferenceAcceleratorAssociationList `array`
  * items
    * ElasticInferenceAcceleratorArn
    * ElasticInferenceAcceleratorAssociationId
    * ElasticInferenceAcceleratorAssociationState
    * ElasticInferenceAcceleratorAssociationTime

### ElasticInferenceAcceleratorCount
* ElasticInferenceAcceleratorCount `integer`

### ElasticInferenceAccelerators
* ElasticInferenceAccelerators `array`
  * items
    * Count
    * Type **required**

### ElasticIpAssociationId
* ElasticIpAssociationId `string`

### EnaSupport
* EnaSupport `string` (values: unsupported, supported, required)

### EnableEbsEncryptionByDefaultRequest
* EnableEbsEncryptionByDefaultRequest `object`
  * DryRun

### EnableEbsEncryptionByDefaultResult
* EnableEbsEncryptionByDefaultResult `object`
  * EbsEncryptionByDefault

### EnableFastSnapshotRestoreErrorItem
* EnableFastSnapshotRestoreErrorItem `object`: Contains information about the errors that occurred when enabling fast snapshot restores.
  * FastSnapshotRestoreStateErrors
    * items
      * AvailabilityZone
      * Error
        * Code
        * Message
  * SnapshotId

### EnableFastSnapshotRestoreErrorSet
* EnableFastSnapshotRestoreErrorSet `array`
  * items
    * FastSnapshotRestoreStateErrors
      * items
        * AvailabilityZone
        * Error
          * Code
          * Message
    * SnapshotId

### EnableFastSnapshotRestoreStateError
* EnableFastSnapshotRestoreStateError `object`: Describes an error that occurred when enabling fast snapshot restores.
  * Code
  * Message

### EnableFastSnapshotRestoreStateErrorItem
* EnableFastSnapshotRestoreStateErrorItem `object`: Contains information about an error that occurred when enabling fast snapshot restores.
  * AvailabilityZone
  * Error
    * Code
    * Message

### EnableFastSnapshotRestoreStateErrorSet
* EnableFastSnapshotRestoreStateErrorSet `array`
  * items
    * AvailabilityZone
    * Error
      * Code
      * Message

### EnableFastSnapshotRestoreSuccessItem
* EnableFastSnapshotRestoreSuccessItem `object`: Describes fast snapshot restores that were successfully enabled.
  * AvailabilityZone
  * DisabledTime
  * DisablingTime
  * EnabledTime
  * EnablingTime
  * OptimizingTime
  * OwnerAlias
  * OwnerId
  * SnapshotId
  * State
  * StateTransitionReason

### EnableFastSnapshotRestoreSuccessSet
* EnableFastSnapshotRestoreSuccessSet `array`
  * items
    * AvailabilityZone
    * DisabledTime
    * DisablingTime
    * EnabledTime
    * EnablingTime
    * OptimizingTime
    * OwnerAlias
    * OwnerId
    * SnapshotId
    * State
    * StateTransitionReason

### EnableFastSnapshotRestoresRequest
* EnableFastSnapshotRestoresRequest `object`
  * AvailabilityZones **required**
    * items
  * DryRun
  * SourceSnapshotIds **required**
    * items

### EnableFastSnapshotRestoresResult
* EnableFastSnapshotRestoresResult `object`
  * Successful
    * items
      * AvailabilityZone
      * DisabledTime
      * DisablingTime
      * EnabledTime
      * EnablingTime
      * OptimizingTime
      * OwnerAlias
      * OwnerId
      * SnapshotId
      * State
      * StateTransitionReason
  * Unsuccessful
    * items
      * FastSnapshotRestoreStateErrors
        * items
          * AvailabilityZone
          * Error
      * SnapshotId

### EnableTransitGatewayRouteTablePropagationRequest
* EnableTransitGatewayRouteTablePropagationRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**
  * TransitGatewayRouteTableId **required**

### EnableTransitGatewayRouteTablePropagationResult
* EnableTransitGatewayRouteTablePropagationResult `object`
  * Propagation
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### EnableVgwRoutePropagationRequest
* EnableVgwRoutePropagationRequest `object`: Contains the parameters for EnableVgwRoutePropagation.
  * DryRun
  * GatewayId **required**
  * RouteTableId **required**

### EnableVolumeIORequest
* EnableVolumeIORequest `object`
  * DryRun
  * VolumeId **required**

### EnableVpcClassicLinkDnsSupportRequest
* EnableVpcClassicLinkDnsSupportRequest `object`
  * VpcId

### EnableVpcClassicLinkDnsSupportResult
* EnableVpcClassicLinkDnsSupportResult `object`
  * Return

### EnableVpcClassicLinkRequest
* EnableVpcClassicLinkRequest `object`
  * DryRun
  * VpcId **required**

### EnableVpcClassicLinkResult
* EnableVpcClassicLinkResult `object`
  * Return

### EnclaveOptions
* EnclaveOptions `object`: Indicates whether the instance is enabled for AWS Nitro Enclaves.
  * Enabled

### EnclaveOptionsRequest
* EnclaveOptionsRequest `object`: Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.
  * Enabled

### EndDateType
* EndDateType `string` (values: unlimited, limited)

### EndpointSet
* EndpointSet `array`
  * items
    * AssociatedTargetNetworks
      * items
        * NetworkId
        * NetworkType
    * AuthenticationOptions
      * items
        * ActiveDirectory
          * DirectoryId
        * FederatedAuthentication
          * SamlProviderArn
          * SelfServiceSamlProviderArn
        * MutualAuthentication
          * ClientRootCertificateChain
        * Type
    * ClientCidrBlock
    * ClientConnectOptions
      * Enabled
      * LambdaFunctionArn
      * Status
        * Code
        * Message
    * ClientVpnEndpointId
    * ConnectionLogOptions
      * CloudwatchLogGroup
      * CloudwatchLogStream
      * Enabled
    * CreationTime
    * DeletionTime
    * Description
    * DnsName
    * DnsServers
      * items
    * SecurityGroupIds
      * items
    * SelfServicePortalUrl
    * ServerCertificateArn
    * SplitTunnel
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransportProtocol
    * VpcId
    * VpnPort
    * VpnProtocol

### EphemeralNvmeSupport
* EphemeralNvmeSupport `string` (values: unsupported, supported, required)

### ErrorSet
* ErrorSet `array`
  * items
    * Code
    * Message

### EventCode
* EventCode `string` (values: instance-reboot, system-reboot, system-maintenance, instance-retirement, instance-stop)

### EventInformation
* EventInformation `object`: Describes an EC2 Fleet or Spot Fleet event.
  * EventDescription
  * EventSubType
  * InstanceId

### EventType
* EventType `string` (values: instanceChange, fleetRequestChange, error, information)

### ExcessCapacityTerminationPolicy
* ExcessCapacityTerminationPolicy `string` (values: noTermination, default)

### ExecutableByStringList
* ExecutableByStringList `array`
  * items

### Explanation
* Explanation `object`: Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
  * Acl
    * Arn
    * Id
  * AclRule
    * Cidr
    * Egress
    * PortRange
      * From
      * To
    * Protocol
    * RuleAction
    * RuleNumber
  * Address
  * Addresses
    * items
  * AttachedTo
    * Arn
    * Id
  * AvailabilityZones
    * items
  * Cidrs
    * items
  * ClassicLoadBalancerListener
    * InstancePort
    * LoadBalancerPort
  * Component
    * Arn
    * Id
  * CustomerGateway
    * Arn
    * Id
  * Destination
    * Arn
    * Id
  * DestinationVpc
    * Arn
    * Id
  * Direction
  * ElasticLoadBalancerListener
    * Arn
    * Id
  * ExplanationCode
  * IngressRouteTable
    * Arn
    * Id
  * InternetGateway
    * Arn
    * Id
  * LoadBalancerArn
  * LoadBalancerListenerPort
  * LoadBalancerTarget
    * Address
    * AvailabilityZone
    * Instance
      * Arn
      * Id
    * Port
  * LoadBalancerTargetGroup
    * Arn
    * Id
  * LoadBalancerTargetGroups
    * items
      * Arn
      * Id
  * LoadBalancerTargetPort
  * MissingComponent
  * NatGateway
    * Arn
    * Id
  * NetworkInterface
    * Arn
    * Id
  * PacketField
  * Port
  * PortRanges
    * items
      * From
      * To
  * PrefixList
    * Arn
    * Id
  * Protocols
    * items
  * RouteTable
    * Arn
    * Id
  * RouteTableRoute
    * DestinationCidr
    * DestinationPrefixListId
    * EgressOnlyInternetGatewayId
    * GatewayId
    * InstanceId
    * NatGatewayId
    * NetworkInterfaceId
    * Origin
    * TransitGatewayId
    * VpcPeeringConnectionId
  * SecurityGroup
    * Arn
    * Id
  * SecurityGroupRule
    * Cidr
    * Direction
    * PortRange
      * From
      * To
    * PrefixListId
    * Protocol
    * SecurityGroupId
  * SecurityGroups
    * items
      * Arn
      * Id
  * SourceVpc
    * Arn
    * Id
  * State
  * Subnet
    * Arn
    * Id
  * SubnetRouteTable
    * Arn
    * Id
  * Vpc
    * Arn
    * Id
  * VpcEndpoint
    * Arn
    * Id
  * VpcPeeringConnection
    * Arn
    * Id
  * VpnConnection
    * Arn
    * Id
  * VpnGateway
    * Arn
    * Id

### ExplanationList
* ExplanationList `array`
  * items
    * Acl
      * Arn
      * Id
    * AclRule
      * Cidr
      * Egress
      * PortRange
        * From
        * To
      * Protocol
      * RuleAction
      * RuleNumber
    * Address
    * Addresses
      * items
    * AttachedTo
      * Arn
      * Id
    * AvailabilityZones
      * items
    * Cidrs
      * items
    * ClassicLoadBalancerListener
      * InstancePort
      * LoadBalancerPort
    * Component
      * Arn
      * Id
    * CustomerGateway
      * Arn
      * Id
    * Destination
      * Arn
      * Id
    * DestinationVpc
      * Arn
      * Id
    * Direction
    * ElasticLoadBalancerListener
      * Arn
      * Id
    * ExplanationCode
    * IngressRouteTable
      * Arn
      * Id
    * InternetGateway
      * Arn
      * Id
    * LoadBalancerArn
    * LoadBalancerListenerPort
    * LoadBalancerTarget
      * Address
      * AvailabilityZone
      * Instance
        * Arn
        * Id
      * Port
    * LoadBalancerTargetGroup
      * Arn
      * Id
    * LoadBalancerTargetGroups
      * items
        * Arn
        * Id
    * LoadBalancerTargetPort
    * MissingComponent
    * NatGateway
      * Arn
      * Id
    * NetworkInterface
      * Arn
      * Id
    * PacketField
    * Port
    * PortRanges
      * items
        * From
        * To
    * PrefixList
      * Arn
      * Id
    * Protocols
      * items
    * RouteTable
      * Arn
      * Id
    * RouteTableRoute
      * DestinationCidr
      * DestinationPrefixListId
      * EgressOnlyInternetGatewayId
      * GatewayId
      * InstanceId
      * NatGatewayId
      * NetworkInterfaceId
      * Origin
      * TransitGatewayId
      * VpcPeeringConnectionId
    * SecurityGroup
      * Arn
      * Id
    * SecurityGroupRule
      * Cidr
      * Direction
      * PortRange
        * From
        * To
      * PrefixListId
      * Protocol
      * SecurityGroupId
    * SecurityGroups
      * items
        * Arn
        * Id
    * SourceVpc
      * Arn
      * Id
    * State
    * Subnet
      * Arn
      * Id
    * SubnetRouteTable
      * Arn
      * Id
    * Vpc
      * Arn
      * Id
    * VpcEndpoint
      * Arn
      * Id
    * VpcPeeringConnection
      * Arn
      * Id
    * VpnConnection
      * Arn
      * Id
    * VpnGateway
      * Arn
      * Id

### ExportClientVpnClientCertificateRevocationListRequest
* ExportClientVpnClientCertificateRevocationListRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun

### ExportClientVpnClientCertificateRevocationListResult
* ExportClientVpnClientCertificateRevocationListResult `object`
  * CertificateRevocationList
  * Status
    * Code
    * Message

### ExportClientVpnClientConfigurationRequest
* ExportClientVpnClientConfigurationRequest `object`
  * ClientVpnEndpointId **required**
  * DryRun

### ExportClientVpnClientConfigurationResult
* ExportClientVpnClientConfigurationResult `object`
  * ClientConfiguration

### ExportEnvironment
* ExportEnvironment `string` (values: citrix, vmware, microsoft)

### ExportImageRequest
* ExportImageRequest `object`
  * ClientToken
  * Description
  * DiskImageFormat **required**
  * DryRun
  * ImageId **required**
  * RoleName
  * S3ExportLocation **required**
    * S3Bucket **required**
    * S3Prefix
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### ExportImageResult
* ExportImageResult `object`
  * Description
  * DiskImageFormat
  * ExportImageTaskId
  * ImageId
  * Progress
  * RoleName
  * S3ExportLocation
    * S3Bucket
    * S3Prefix
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ExportImageTask
* ExportImageTask `object`: Describes an export image task.
  * Description
  * ExportImageTaskId
  * ImageId
  * Progress
  * S3ExportLocation
    * S3Bucket
    * S3Prefix
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ExportImageTaskId
* ExportImageTaskId `string`

### ExportImageTaskIdList
* ExportImageTaskIdList `array`
  * items

### ExportImageTaskList
* ExportImageTaskList `array`
  * items
    * Description
    * ExportImageTaskId
    * ImageId
    * Progress
    * S3ExportLocation
      * S3Bucket
      * S3Prefix
    * Status
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### ExportTask
* ExportTask `object`: Describes an instance export task.
  * Description
  * ExportTaskId
  * ExportToS3Task
    * ContainerFormat
    * DiskImageFormat
    * S3Bucket
    * S3Key
  * InstanceExportDetails
    * InstanceId
    * TargetEnvironment
  * State
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ExportTaskId
* ExportTaskId `string`

### ExportTaskIdStringList
* ExportTaskIdStringList `array`
  * items

### ExportTaskList
* ExportTaskList `array`
  * items
    * Description
    * ExportTaskId
    * ExportToS3Task
      * ContainerFormat
      * DiskImageFormat
      * S3Bucket
      * S3Key
    * InstanceExportDetails
      * InstanceId
      * TargetEnvironment
    * State
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### ExportTaskS3Location
* ExportTaskS3Location `object`: Describes the destination for an export image task.
  * S3Bucket
  * S3Prefix

### ExportTaskS3LocationRequest
* ExportTaskS3LocationRequest `object`: Describes the destination for an export image task.
  * S3Bucket **required**
  * S3Prefix

### ExportTaskState
* ExportTaskState `string` (values: active, cancelling, cancelled, completed)

### ExportToS3Task
* ExportToS3Task `object`: Describes the format and location for an instance export task.
  * ContainerFormat
  * DiskImageFormat
  * S3Bucket
  * S3Key

### ExportToS3TaskSpecification
* ExportToS3TaskSpecification `object`: Describes an instance export task.
  * ContainerFormat
  * DiskImageFormat
  * S3Bucket
  * S3Prefix

### ExportTransitGatewayRoutesRequest
* ExportTransitGatewayRoutesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * S3Bucket **required**
  * TransitGatewayRouteTableId **required**

### ExportTransitGatewayRoutesResult
* ExportTransitGatewayRoutesResult `object`
  * S3Location

### ExportVmTaskId
* ExportVmTaskId `string`

### FailedQueuedPurchaseDeletion
* FailedQueuedPurchaseDeletion `object`: Describes a Reserved Instance whose queued purchase was not deleted.
  * Error
    * Code
    * Message
  * ReservedInstancesId

### FailedQueuedPurchaseDeletionSet
* FailedQueuedPurchaseDeletionSet `array`
  * items
    * Error
      * Code
      * Message
    * ReservedInstancesId

### FastSnapshotRestoreStateCode
* FastSnapshotRestoreStateCode `string` (values: enabling, optimizing, enabled, disabling, disabled)

### FederatedAuthentication
* FederatedAuthentication `object`: Describes the IAM SAML identity providers used for federated authentication.
  * SamlProviderArn
  * SelfServiceSamlProviderArn

### FederatedAuthenticationRequest
* FederatedAuthenticationRequest `object`: The IAM SAML identity provider used for federated authentication.
  * SAMLProviderArn
  * SelfServiceSAMLProviderArn

### Filter
* Filter `object`: <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. The filters supported by a describe operation are documented with the describe operation. For example:</p> <ul> <li> <p> <a>DescribeAvailabilityZones</a> </p> </li> <li> <p> <a>DescribeImages</a> </p> </li> <li> <p> <a>DescribeInstances</a> </p> </li> <li> <p> <a>DescribeKeyPairs</a> </p> </li> <li> <p> <a>DescribeSecurityGroups</a> </p> </li> <li> <p> <a>DescribeSnapshots</a> </p> </li> <li> <p> <a>DescribeSubnets</a> </p> </li> <li> <p> <a>DescribeTags</a> </p> </li> <li> <p> <a>DescribeVolumes</a> </p> </li> <li> <p> <a>DescribeVpcs</a> </p> </li> </ul>
  * Name
  * Values
    * items

### FilterList
* FilterList `array`
  * items
    * Name
    * Values
      * items

### FleetActivityStatus
* FleetActivityStatus `string` (values: error, pending_fulfillment, pending_termination, fulfilled)

### FleetCapacityReservationUsageStrategy
* FleetCapacityReservationUsageStrategy `string` (values: use-capacity-reservations-first)

### FleetData
* FleetData `object`: Describes an EC2 Fleet.
  * ActivityStatus
  * ClientToken
  * CreateTime
  * Errors
    * items
      * ErrorCode
      * ErrorMessage
      * LaunchTemplateAndOverrides
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
      * Lifecycle
  * ExcessCapacityTerminationPolicy
  * FleetId
  * FleetState
  * FulfilledCapacity
  * FulfilledOnDemandCapacity
  * Instances
    * items
      * InstanceIds
        * items
      * InstanceType
      * LaunchTemplateAndOverrides
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
      * Lifecycle
      * Platform
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
  * OnDemandOptions
    * AllocationStrategy
    * CapacityReservationOptions
      * UsageStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * ReplaceUnhealthyInstances
  * SpotOptions
    * AllocationStrategy
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * MaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * MaxTotalPrice
    * MinTargetCapacity
    * SingleAvailabilityZone
    * SingleInstanceType
  * Tags
    * items
      * Key
      * Value
  * TargetCapacitySpecification
    * DefaultTargetCapacityType
    * OnDemandTargetCapacity
    * SpotTargetCapacity
    * TotalTargetCapacity
  * TerminateInstancesWithExpiration
  * Type
  * ValidFrom
  * ValidUntil

### FleetEventType
* FleetEventType `string` (values: instance-change, fleet-change, service-error)

### FleetExcessCapacityTerminationPolicy
* FleetExcessCapacityTerminationPolicy `string` (values: no-termination, termination)

### FleetId
* FleetId `string`

### FleetIdSet
* FleetIdSet `array`
  * items [FleetId](#fleetid)

### FleetLaunchTemplateConfig
* FleetLaunchTemplateConfig `object`: Describes a launch template and overrides.
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * Overrides
    * items
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * GroupName
      * Priority
      * SubnetId
      * WeightedCapacity

### FleetLaunchTemplateConfigList
* FleetLaunchTemplateConfigList `array`
  * items
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * items
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * GroupName
        * Priority
        * SubnetId
        * WeightedCapacity

### FleetLaunchTemplateConfigListRequest
* FleetLaunchTemplateConfigListRequest `array`
  * items
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * items
        * AvailabilityZone
        * InstanceType
        * MaxPrice
        * Placement
          * Affinity
          * AvailabilityZone
          * GroupName
          * HostId
          * HostResourceGroupArn
          * PartitionNumber
          * SpreadDomain
          * Tenancy
        * Priority
        * SubnetId
        * WeightedCapacity

### FleetLaunchTemplateConfigRequest
* FleetLaunchTemplateConfigRequest `object`: Describes a launch template and overrides.
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * Overrides
    * items
      * AvailabilityZone
      * InstanceType
      * MaxPrice
      * Placement
        * Affinity
        * AvailabilityZone
        * GroupName
        * HostId
        * HostResourceGroupArn
        * PartitionNumber
        * SpreadDomain
        * Tenancy
      * Priority
      * SubnetId
      * WeightedCapacity

### FleetLaunchTemplateOverrides
* FleetLaunchTemplateOverrides `object`: Describes overrides for a launch template.
  * AvailabilityZone
  * InstanceType
  * MaxPrice
  * Placement
    * GroupName
  * Priority
  * SubnetId
  * WeightedCapacity

### FleetLaunchTemplateOverridesList
* FleetLaunchTemplateOverridesList `array`
  * items
    * AvailabilityZone
    * InstanceType
    * MaxPrice
    * Placement
      * GroupName
    * Priority
    * SubnetId
    * WeightedCapacity

### FleetLaunchTemplateOverridesListRequest
* FleetLaunchTemplateOverridesListRequest `array`
  * items
    * AvailabilityZone
    * InstanceType
    * MaxPrice
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * Priority
    * SubnetId
    * WeightedCapacity

### FleetLaunchTemplateOverridesRequest
* FleetLaunchTemplateOverridesRequest `object`: Describes overrides for a launch template.
  * AvailabilityZone
  * InstanceType
  * MaxPrice
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * Priority
  * SubnetId
  * WeightedCapacity

### FleetLaunchTemplateSpecification
* FleetLaunchTemplateSpecification `object`: Describes the Amazon EC2 launch template and the launch template version that can be used by a Spot Fleet request to configure Amazon EC2 instances. For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a launch template</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
  * LaunchTemplateId
  * LaunchTemplateName
  * Version

### FleetLaunchTemplateSpecificationRequest
* FleetLaunchTemplateSpecificationRequest `object`: Describes the Amazon EC2 launch template and the launch template version that can be used by an EC2 Fleet to configure Amazon EC2 instances. For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a launch template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * LaunchTemplateId
  * LaunchTemplateName
  * Version

### FleetOnDemandAllocationStrategy
* FleetOnDemandAllocationStrategy `string` (values: lowest-price, prioritized)

### FleetReplacementStrategy
* FleetReplacementStrategy `string` (values: launch)

### FleetSet
* FleetSet `array`
  * items
    * ActivityStatus
    * ClientToken
    * CreateTime
    * Errors
      * items
        * ErrorCode
        * ErrorMessage
        * LaunchTemplateAndOverrides
          * LaunchTemplateSpecification
          * Overrides
        * Lifecycle
    * ExcessCapacityTerminationPolicy
    * FleetId
    * FleetState
    * FulfilledCapacity
    * FulfilledOnDemandCapacity
    * Instances
      * items
        * InstanceIds
          * items
        * InstanceType
        * LaunchTemplateAndOverrides
          * LaunchTemplateSpecification
          * Overrides
        * Lifecycle
        * Platform
    * LaunchTemplateConfigs
      * items
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * items
    * OnDemandOptions
      * AllocationStrategy
      * CapacityReservationOptions
        * UsageStrategy
      * MaxTotalPrice
      * MinTargetCapacity
      * SingleAvailabilityZone
      * SingleInstanceType
    * ReplaceUnhealthyInstances
    * SpotOptions
      * AllocationStrategy
      * InstanceInterruptionBehavior
      * InstancePoolsToUseCount
      * MaintenanceStrategies
        * CapacityRebalance
          * ReplacementStrategy
      * MaxTotalPrice
      * MinTargetCapacity
      * SingleAvailabilityZone
      * SingleInstanceType
    * Tags
      * items
        * Key
        * Value
    * TargetCapacitySpecification
      * DefaultTargetCapacityType
      * OnDemandTargetCapacity
      * SpotTargetCapacity
      * TotalTargetCapacity
    * TerminateInstancesWithExpiration
    * Type
    * ValidFrom
    * ValidUntil

### FleetSpotCapacityRebalance
* FleetSpotCapacityRebalance `object`: The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
  * ReplacementStrategy

### FleetSpotCapacityRebalanceRequest
* FleetSpotCapacityRebalanceRequest `object`: The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-capacity-rebalance">Capacity rebalancing</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * ReplacementStrategy

### FleetSpotMaintenanceStrategies
* FleetSpotMaintenanceStrategies `object`: The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
  * CapacityRebalance
    * ReplacementStrategy

### FleetSpotMaintenanceStrategiesRequest
* FleetSpotMaintenanceStrategiesRequest `object`: The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
  * CapacityRebalance
    * ReplacementStrategy

### FleetStateCode
* FleetStateCode `string` (values: submitted, active, deleted, failed, deleted_running, deleted_terminating, modifying)

### FleetType
* FleetType `string` (values: request, maintain, instant)

### Float
* Float `number`

### FlowLog
* FlowLog `object`: Describes a flow log.
  * CreationTime
  * DeliverLogsErrorMessage
  * DeliverLogsPermissionArn
  * DeliverLogsStatus
  * FlowLogId
  * FlowLogStatus
  * LogDestination
  * LogDestinationType
  * LogFormat
  * LogGroupName
  * MaxAggregationInterval
  * ResourceId
  * Tags
    * items
      * Key
      * Value
  * TrafficType

### FlowLogIdList
* FlowLogIdList `array`
  * items

### FlowLogResourceId
* FlowLogResourceId `string`

### FlowLogResourceIds
* FlowLogResourceIds `array`
  * items

### FlowLogSet
* FlowLogSet `array`
  * items
    * CreationTime
    * DeliverLogsErrorMessage
    * DeliverLogsPermissionArn
    * DeliverLogsStatus
    * FlowLogId
    * FlowLogStatus
    * LogDestination
    * LogDestinationType
    * LogFormat
    * LogGroupName
    * MaxAggregationInterval
    * ResourceId
    * Tags
      * items
        * Key
        * Value
    * TrafficType

### FlowLogsResourceType
* FlowLogsResourceType `string` (values: VPC, Subnet, NetworkInterface)

### FpgaDeviceCount
* FpgaDeviceCount `integer`

### FpgaDeviceInfo
* FpgaDeviceInfo `object`: Describes the FPGA accelerator for the instance type.
  * Count
  * Manufacturer
  * MemoryInfo
    * SizeInMiB
  * Name

### FpgaDeviceInfoList
* FpgaDeviceInfoList `array`
  * items
    * Count
    * Manufacturer
    * MemoryInfo
      * SizeInMiB
    * Name

### FpgaDeviceManufacturerName
* FpgaDeviceManufacturerName `string`

### FpgaDeviceMemoryInfo
* FpgaDeviceMemoryInfo `object`: Describes the memory for the FPGA accelerator for the instance type.
  * SizeInMiB

### FpgaDeviceMemorySize
* FpgaDeviceMemorySize `integer`

### FpgaDeviceName
* FpgaDeviceName `string`

### FpgaImage
* FpgaImage `object`: Describes an Amazon FPGA image (AFI).
  * CreateTime
  * DataRetentionSupport
  * Description
  * FpgaImageGlobalId
  * FpgaImageId
  * Name
  * OwnerAlias
  * OwnerId
  * PciId
    * DeviceId
    * SubsystemId
    * SubsystemVendorId
    * VendorId
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * Public
  * ShellVersion
  * State
    * Code
    * Message
  * Tags
    * items
      * Key
      * Value
  * UpdateTime

### FpgaImageAttribute
* FpgaImageAttribute `object`: Describes an Amazon FPGA image (AFI) attribute.
  * Description
  * FpgaImageId
  * LoadPermissions
    * items
      * Group
      * UserId
  * Name
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType

### FpgaImageAttributeName
* FpgaImageAttributeName `string` (values: description, name, loadPermission, productCodes)

### FpgaImageId
* FpgaImageId `string`

### FpgaImageIdList
* FpgaImageIdList `array`
  * items

### FpgaImageList
* FpgaImageList `array`
  * items
    * CreateTime
    * DataRetentionSupport
    * Description
    * FpgaImageGlobalId
    * FpgaImageId
    * Name
    * OwnerAlias
    * OwnerId
    * PciId
      * DeviceId
      * SubsystemId
      * SubsystemVendorId
      * VendorId
    * ProductCodes
      * items
        * ProductCodeId
        * ProductCodeType
    * Public
    * ShellVersion
    * State
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * UpdateTime

### FpgaImageState
* FpgaImageState `object`: Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
  * Code
  * Message

### FpgaImageStateCode
* FpgaImageStateCode `string` (values: pending, failed, available, unavailable)

### FpgaInfo
* FpgaInfo `object`: Describes the FPGAs for the instance type.
  * Fpgas
    * items
      * Count
      * Manufacturer
      * MemoryInfo
        * SizeInMiB
      * Name
  * TotalFpgaMemoryInMiB

### FreeTierEligibleFlag
* FreeTierEligibleFlag `boolean`

### GatewayType
* GatewayType `string` (values: ipsec.1)

### GetAssociatedEnclaveCertificateIamRolesRequest
* GetAssociatedEnclaveCertificateIamRolesRequest `object`
  * CertificateArn
  * DryRun

### GetAssociatedEnclaveCertificateIamRolesResult
* GetAssociatedEnclaveCertificateIamRolesResult `object`
  * AssociatedRoles
    * items
      * AssociatedRoleArn
      * CertificateS3BucketName
      * CertificateS3ObjectKey
      * EncryptionKmsKeyId

### GetAssociatedIpv6PoolCidrsRequest
* GetAssociatedIpv6PoolCidrsRequest `object`
  * DryRun
  * MaxResults
  * NextToken
  * PoolId **required**

### GetAssociatedIpv6PoolCidrsResult
* GetAssociatedIpv6PoolCidrsResult `object`
  * Ipv6CidrAssociations
    * items
      * AssociatedResource
      * Ipv6Cidr
  * NextToken

### GetCapacityReservationUsageRequest
* GetCapacityReservationUsageRequest `object`
  * CapacityReservationId **required**
  * DryRun
  * MaxResults
  * NextToken

### GetCapacityReservationUsageRequestMaxResults
* GetCapacityReservationUsageRequestMaxResults `integer`

### GetCapacityReservationUsageResult
* GetCapacityReservationUsageResult `object`
  * AvailableInstanceCount
  * CapacityReservationId
  * InstanceType
  * InstanceUsages
    * items
      * AccountId
      * UsedInstanceCount
  * NextToken
  * State
  * TotalInstanceCount

### GetCoipPoolUsageRequest
* GetCoipPoolUsageRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * PoolId **required**

### GetCoipPoolUsageResult
* GetCoipPoolUsageResult `object`
  * CoipAddressUsages
    * items
      * AllocationId
      * AwsAccountId
      * AwsService
      * CoIp
  * CoipPoolId
  * LocalGatewayRouteTableId

### GetConsoleOutputRequest
* GetConsoleOutputRequest `object`
  * DryRun
  * InstanceId **required**
  * Latest

### GetConsoleOutputResult
* GetConsoleOutputResult `object`
  * InstanceId
  * Output
  * Timestamp

### GetConsoleScreenshotRequest
* GetConsoleScreenshotRequest `object`
  * DryRun
  * InstanceId **required**
  * WakeUp

### GetConsoleScreenshotResult
* GetConsoleScreenshotResult `object`
  * ImageData
  * InstanceId

### GetDefaultCreditSpecificationRequest
* GetDefaultCreditSpecificationRequest `object`
  * DryRun
  * InstanceFamily **required**

### GetDefaultCreditSpecificationResult
* GetDefaultCreditSpecificationResult `object`
  * InstanceFamilyCreditSpecification
    * CpuCredits
    * InstanceFamily

### GetEbsDefaultKmsKeyIdRequest
* GetEbsDefaultKmsKeyIdRequest `object`
  * DryRun

### GetEbsDefaultKmsKeyIdResult
* GetEbsDefaultKmsKeyIdResult `object`
  * KmsKeyId

### GetEbsEncryptionByDefaultRequest
* GetEbsEncryptionByDefaultRequest `object`
  * DryRun

### GetEbsEncryptionByDefaultResult
* GetEbsEncryptionByDefaultResult `object`
  * EbsEncryptionByDefault

### GetGroupsForCapacityReservationRequest
* GetGroupsForCapacityReservationRequest `object`
  * CapacityReservationId **required**
  * DryRun
  * MaxResults
  * NextToken

### GetGroupsForCapacityReservationRequestMaxResults
* GetGroupsForCapacityReservationRequestMaxResults `integer`

### GetGroupsForCapacityReservationResult
* GetGroupsForCapacityReservationResult `object`
  * CapacityReservationGroups
    * items
      * GroupArn
      * OwnerId
  * NextToken

### GetHostReservationPurchasePreviewRequest
* GetHostReservationPurchasePreviewRequest `object`
  * HostIdSet **required**
    * items
  * OfferingId **required**

### GetHostReservationPurchasePreviewResult
* GetHostReservationPurchasePreviewResult `object`
  * CurrencyCode
  * Purchase
    * items
      * CurrencyCode
      * Duration
      * HostIdSet
        * items
      * HostReservationId
      * HourlyPrice
      * InstanceFamily
      * PaymentOption
      * UpfrontPrice
  * TotalHourlyPrice
  * TotalUpfrontPrice

### GetLaunchTemplateDataRequest
* GetLaunchTemplateDataRequest `object`
  * DryRun
  * InstanceId **required**

### GetLaunchTemplateDataResult
* GetLaunchTemplateDataResult `object`
  * LaunchTemplateData
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
      * State
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData

### GetManagedPrefixListAssociationsMaxResults
* GetManagedPrefixListAssociationsMaxResults `integer`

### GetManagedPrefixListAssociationsRequest
* GetManagedPrefixListAssociationsRequest `object`
  * DryRun
  * MaxResults
  * NextToken
  * PrefixListId **required**

### GetManagedPrefixListAssociationsResult
* GetManagedPrefixListAssociationsResult `object`
  * NextToken
  * PrefixListAssociations
    * items
      * ResourceId
      * ResourceOwner

### GetManagedPrefixListEntriesRequest
* GetManagedPrefixListEntriesRequest `object`
  * DryRun
  * MaxResults
  * NextToken
  * PrefixListId **required**
  * TargetVersion

### GetManagedPrefixListEntriesResult
* GetManagedPrefixListEntriesResult `object`
  * Entries
    * items
      * Cidr
      * Description
  * NextToken

### GetPasswordDataRequest
* GetPasswordDataRequest `object`
  * DryRun
  * InstanceId **required**

### GetPasswordDataResult
* GetPasswordDataResult `object`
  * InstanceId
  * PasswordData
  * Timestamp

### GetReservedInstancesExchangeQuoteRequest
* GetReservedInstancesExchangeQuoteRequest `object`: Contains the parameters for GetReservedInstanceExchangeQuote.
  * DryRun
  * ReservedInstanceIds **required**
    * items
  * TargetConfigurations
    * items
      * InstanceCount
      * OfferingId **required**

### GetReservedInstancesExchangeQuoteResult
* GetReservedInstancesExchangeQuoteResult `object`: Contains the output of GetReservedInstancesExchangeQuote.
  * CurrencyCode
  * IsValidExchange
  * OutputReservedInstancesWillExpireAt
  * PaymentDue
  * ReservedInstanceValueRollup
    * HourlyPrice
    * RemainingTotalValue
    * RemainingUpfrontValue
  * ReservedInstanceValueSet
    * items
      * ReservationValue
        * HourlyPrice
        * RemainingTotalValue
        * RemainingUpfrontValue
      * ReservedInstanceId
  * TargetConfigurationValueRollup
    * HourlyPrice
    * RemainingTotalValue
    * RemainingUpfrontValue
  * TargetConfigurationValueSet
    * items
      * ReservationValue
        * HourlyPrice
        * RemainingTotalValue
        * RemainingUpfrontValue
      * TargetConfiguration
        * InstanceCount
        * OfferingId
  * ValidationFailureReason

### GetTransitGatewayAttachmentPropagationsRequest
* GetTransitGatewayAttachmentPropagationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayAttachmentId **required**

### GetTransitGatewayAttachmentPropagationsResult
* GetTransitGatewayAttachmentPropagationsResult `object`
  * NextToken
  * TransitGatewayAttachmentPropagations
    * items
      * State
      * TransitGatewayRouteTableId

### GetTransitGatewayMulticastDomainAssociationsRequest
* GetTransitGatewayMulticastDomainAssociationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainId

### GetTransitGatewayMulticastDomainAssociationsResult
* GetTransitGatewayMulticastDomainAssociationsResult `object`
  * MulticastDomainAssociations
    * items
      * ResourceId
      * ResourceOwnerId
      * ResourceType
      * Subnet
        * State
        * SubnetId
      * TransitGatewayAttachmentId
  * NextToken

### GetTransitGatewayPrefixListReferencesRequest
* GetTransitGatewayPrefixListReferencesRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

### GetTransitGatewayPrefixListReferencesResult
* GetTransitGatewayPrefixListReferencesResult `object`
  * NextToken
  * TransitGatewayPrefixListReferences
    * items
      * Blackhole
      * PrefixListId
      * PrefixListOwnerId
      * State
      * TransitGatewayAttachment
        * ResourceId
        * ResourceType
        * TransitGatewayAttachmentId
      * TransitGatewayRouteTableId

### GetTransitGatewayRouteTableAssociationsRequest
* GetTransitGatewayRouteTableAssociationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

### GetTransitGatewayRouteTableAssociationsResult
* GetTransitGatewayRouteTableAssociationsResult `object`
  * Associations
    * items
      * ResourceId
      * ResourceType
      * State
      * TransitGatewayAttachmentId
  * NextToken

### GetTransitGatewayRouteTablePropagationsRequest
* GetTransitGatewayRouteTablePropagationsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayRouteTableId **required**

### GetTransitGatewayRouteTablePropagationsResult
* GetTransitGatewayRouteTablePropagationsResult `object`
  * NextToken
  * TransitGatewayRouteTablePropagations
    * items
      * ResourceId
      * ResourceType
      * State
      * TransitGatewayAttachmentId

### GpuDeviceCount
* GpuDeviceCount `integer`

### GpuDeviceInfo
* GpuDeviceInfo `object`: Describes the GPU accelerators for the instance type.
  * Count
  * Manufacturer
  * MemoryInfo
    * SizeInMiB
  * Name

### GpuDeviceInfoList
* GpuDeviceInfoList `array`
  * items
    * Count
    * Manufacturer
    * MemoryInfo
      * SizeInMiB
    * Name

### GpuDeviceManufacturerName
* GpuDeviceManufacturerName `string`

### GpuDeviceMemoryInfo
* GpuDeviceMemoryInfo `object`: Describes the memory available to the GPU accelerator.
  * SizeInMiB

### GpuDeviceMemorySize
* GpuDeviceMemorySize `integer`

### GpuDeviceName
* GpuDeviceName `string`

### GpuInfo
* GpuInfo `object`: Describes the GPU accelerators for the instance type.
  * Gpus
    * items
      * Count
      * Manufacturer
      * MemoryInfo
        * SizeInMiB
      * Name
  * TotalGpuMemoryInMiB

### GroupIdStringList
* GroupIdStringList `array`
  * items

### GroupIdentifier
* GroupIdentifier `object`: Describes a security group.
  * GroupId
  * GroupName

### GroupIdentifierList
* GroupIdentifierList `array`
  * items
    * GroupId
    * GroupName

### GroupIdentifierSet
* GroupIdentifierSet `array`
  * items
    * GroupId
    * GroupName

### GroupIds
* GroupIds `array`
  * items

### GroupNameStringList
* GroupNameStringList `array`
  * items

### HibernationFlag
* HibernationFlag `boolean`

### HibernationOptions
* HibernationOptions `object`: Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * Configured

### HibernationOptionsRequest
* HibernationOptionsRequest `object`: Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * Configured

### HistoryRecord
* HistoryRecord `object`: Describes an event in the history of the Spot Fleet request.
  * EventInformation
    * EventDescription
    * EventSubType
    * InstanceId
  * EventType
  * Timestamp

### HistoryRecordEntry
* HistoryRecordEntry `object`: Describes an event in the history of an EC2 Fleet.
  * EventInformation
    * EventDescription
    * EventSubType
    * InstanceId
  * EventType
  * Timestamp

### HistoryRecordSet
* HistoryRecordSet `array`
  * items
    * EventInformation
      * EventDescription
      * EventSubType
      * InstanceId
    * EventType
    * Timestamp

### HistoryRecords
* HistoryRecords `array`
  * items
    * EventInformation
      * EventDescription
      * EventSubType
      * InstanceId
    * EventType
    * Timestamp

### Host
* Host `object`: Describes the properties of the Dedicated Host.
  * AllocationTime
  * AllowsMultipleInstanceTypes
  * AutoPlacement
  * AvailabilityZone
  * AvailabilityZoneId
  * AvailableCapacity
    * AvailableInstanceCapacity
      * items
        * AvailableCapacity
        * InstanceType
        * TotalCapacity
    * AvailableVCpus
  * ClientToken
  * HostId
  * HostProperties
    * Cores
    * InstanceFamily
    * InstanceType
    * Sockets
    * TotalVCpus
  * HostRecovery
  * HostReservationId
  * Instances
    * items
      * InstanceId
      * InstanceType
      * OwnerId
  * MemberOfServiceLinkedResourceGroup
  * OwnerId
  * ReleaseTime
  * State
  * Tags
    * items
      * Key
      * Value

### HostInstance
* HostInstance `object`: Describes an instance running on a Dedicated Host.
  * InstanceId
  * InstanceType
  * OwnerId

### HostInstanceList
* HostInstanceList `array`
  * items
    * InstanceId
    * InstanceType
    * OwnerId

### HostList
* HostList `array`
  * items
    * AllocationTime
    * AllowsMultipleInstanceTypes
    * AutoPlacement
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableCapacity
      * AvailableInstanceCapacity
        * items
          * AvailableCapacity
          * InstanceType
          * TotalCapacity
      * AvailableVCpus
    * ClientToken
    * HostId
    * HostProperties
      * Cores
      * InstanceFamily
      * InstanceType
      * Sockets
      * TotalVCpus
    * HostRecovery
    * HostReservationId
    * Instances
      * items
        * InstanceId
        * InstanceType
        * OwnerId
    * MemberOfServiceLinkedResourceGroup
    * OwnerId
    * ReleaseTime
    * State
    * Tags
      * items
        * Key
        * Value

### HostOffering
* HostOffering `object`: Details about the Dedicated Host Reservation offering.
  * CurrencyCode
  * Duration
  * HourlyPrice
  * InstanceFamily
  * OfferingId
  * PaymentOption
  * UpfrontPrice

### HostOfferingSet
* HostOfferingSet `array`
  * items
    * CurrencyCode
    * Duration
    * HourlyPrice
    * InstanceFamily
    * OfferingId
    * PaymentOption
    * UpfrontPrice

### HostProperties
* HostProperties `object`: Describes the properties of a Dedicated Host.
  * Cores
  * InstanceFamily
  * InstanceType
  * Sockets
  * TotalVCpus

### HostRecovery
* HostRecovery `string` (values: on, off)

### HostReservation
* HostReservation `object`: Details about the Dedicated Host Reservation and associated Dedicated Hosts.
  * Count
  * CurrencyCode
  * Duration
  * End
  * HostIdSet
    * items
  * HostReservationId
  * HourlyPrice
  * InstanceFamily
  * OfferingId
  * PaymentOption
  * Start
  * State
  * Tags
    * items
      * Key
      * Value
  * UpfrontPrice

### HostReservationId
* HostReservationId `string`

### HostReservationIdSet
* HostReservationIdSet `array`
  * items

### HostReservationSet
* HostReservationSet `array`
  * items
    * Count
    * CurrencyCode
    * Duration
    * End
    * HostIdSet
      * items
    * HostReservationId
    * HourlyPrice
    * InstanceFamily
    * OfferingId
    * PaymentOption
    * Start
    * State
    * Tags
      * items
        * Key
        * Value
    * UpfrontPrice

### HostTenancy
* HostTenancy `string` (values: dedicated, host)

### HttpTokensState
* HttpTokensState `string` (values: optional, required)

### HypervisorType
* HypervisorType `string` (values: ovm, xen)

### IKEVersionsList
* IKEVersionsList `array`
  * items
    * Value

### IKEVersionsListValue
* IKEVersionsListValue `object`: The internet key exchange (IKE) version permitted for the VPN tunnel.
  * Value

### IKEVersionsRequestList
* IKEVersionsRequestList `array`
  * items
    * Value

### IKEVersionsRequestListValue
* IKEVersionsRequestListValue `object`: The IKE version that is permitted for the VPN tunnel.
  * Value

### IamInstanceProfile
* IamInstanceProfile `object`: Describes an IAM instance profile.
  * Arn
  * Id

### IamInstanceProfileAssociation
* IamInstanceProfileAssociation `object`: Describes an association between an IAM instance profile and an instance.
  * AssociationId
  * IamInstanceProfile
    * Arn
    * Id
  * InstanceId
  * State
  * Timestamp

### IamInstanceProfileAssociationId
* IamInstanceProfileAssociationId `string`

### IamInstanceProfileAssociationSet
* IamInstanceProfileAssociationSet `array`
  * items
    * AssociationId
    * IamInstanceProfile
      * Arn
      * Id
    * InstanceId
    * State
    * Timestamp

### IamInstanceProfileAssociationState
* IamInstanceProfileAssociationState `string` (values: associating, associated, disassociating, disassociated)

### IamInstanceProfileSpecification
* IamInstanceProfileSpecification `object`: Describes an IAM instance profile.
  * Arn
  * Name

### IcmpTypeCode
* IcmpTypeCode `object`: Describes the ICMP type and code.
  * Code
  * Type

### IdFormat
* IdFormat `object`: Describes the ID format for a resource.
  * Deadline
  * Resource
  * UseLongIds

### IdFormatList
* IdFormatList `array`
  * items
    * Deadline
    * Resource
    * UseLongIds

### Igmpv2SupportValue
* Igmpv2SupportValue `string` (values: enable, disable)

### Image
* Image `object`: Describes an image.
  * Architecture
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * CreationDate
  * Description
  * EnaSupport
  * Hypervisor
  * ImageId
  * ImageLocation
  * ImageOwnerAlias
  * ImageType
  * KernelId
  * Name
  * OwnerId
  * Platform
  * PlatformDetails
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * Public
  * RamdiskId
  * RootDeviceName
  * RootDeviceType
  * SriovNetSupport
  * State
  * StateReason
    * Code
    * Message
  * Tags
    * items
      * Key
      * Value
  * UsageOperation
  * VirtualizationType

### ImageAttribute
* ImageAttribute `object`: Describes an image attribute.
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * Description
    * Value
  * ImageId
  * KernelId
    * Value
  * LaunchPermissions
    * items
      * Group
      * UserId
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * RamdiskId
    * Value
  * SriovNetSupport
    * Value

### ImageAttributeName
* ImageAttributeName `string` (values: description, kernel, ramdisk, launchPermission, productCodes, blockDeviceMapping, sriovNetSupport)

### ImageDiskContainer
* ImageDiskContainer `object`: Describes the disk container object for an import image task.
  * Description
  * DeviceName
  * Format
  * SnapshotId
  * Url
  * UserBucket
    * S3Bucket
    * S3Key

### ImageDiskContainerList
* ImageDiskContainerList `array`
  * items
    * Description
    * DeviceName
    * Format
    * SnapshotId
    * Url
    * UserBucket
      * S3Bucket
      * S3Key

### ImageId
* ImageId `string`

### ImageIdStringList
* ImageIdStringList `array`
  * items

### ImageList
* ImageList `array`
  * items
    * Architecture
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CreationDate
    * Description
    * EnaSupport
    * Hypervisor
    * ImageId
    * ImageLocation
    * ImageOwnerAlias
    * ImageType
    * KernelId
    * Name
    * OwnerId
    * Platform
    * PlatformDetails
    * ProductCodes
      * items
        * ProductCodeId
        * ProductCodeType
    * Public
    * RamdiskId
    * RootDeviceName
    * RootDeviceType
    * SriovNetSupport
    * State
    * StateReason
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * UsageOperation
    * VirtualizationType

### ImageState
* ImageState `string` (values: pending, available, invalid, deregistered, transient, failed, error)

### ImageTypeValues
* ImageTypeValues `string` (values: machine, kernel, ramdisk)

### ImportClientVpnClientCertificateRevocationListRequest
* ImportClientVpnClientCertificateRevocationListRequest `object`
  * CertificateRevocationList **required**
  * ClientVpnEndpointId **required**
  * DryRun

### ImportClientVpnClientCertificateRevocationListResult
* ImportClientVpnClientCertificateRevocationListResult `object`
  * Return

### ImportImageLicenseConfigurationRequest
* ImportImageLicenseConfigurationRequest `object`: The request information of license configurations.
  * LicenseConfigurationArn

### ImportImageLicenseConfigurationResponse
* ImportImageLicenseConfigurationResponse `object`:  The response information for license configurations.
  * LicenseConfigurationArn

### ImportImageLicenseSpecificationListRequest
* ImportImageLicenseSpecificationListRequest `array`
  * items
    * LicenseConfigurationArn

### ImportImageLicenseSpecificationListResponse
* ImportImageLicenseSpecificationListResponse `array`
  * items
    * LicenseConfigurationArn

### ImportImageRequest
* ImportImageRequest `object`
  * Architecture
  * ClientData
    * Comment
    * UploadEnd
    * UploadSize
    * UploadStart
  * ClientToken
  * Description
  * DiskContainers
    * items
      * Description
      * DeviceName
      * Format
      * SnapshotId
      * Url
      * UserBucket
        * S3Bucket
        * S3Key
  * DryRun
  * Encrypted
  * Hypervisor
  * KmsKeyId
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * LicenseType
  * Platform
  * RoleName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### ImportImageResult
* ImportImageResult `object`
  * Architecture
  * Description
  * Encrypted
  * Hypervisor
  * ImageId
  * ImportTaskId
  * KmsKeyId
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * LicenseType
  * Platform
  * Progress
  * SnapshotDetails
    * items
      * Description
      * DeviceName
      * DiskImageSize
      * Format
      * Progress
      * SnapshotId
      * Status
      * StatusMessage
      * Url
      * UserBucket
        * S3Bucket
        * S3Key
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ImportImageTask
* ImportImageTask `object`: Describes an import image task.
  * Architecture
  * Description
  * Encrypted
  * Hypervisor
  * ImageId
  * ImportTaskId
  * KmsKeyId
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * LicenseType
  * Platform
  * Progress
  * SnapshotDetails
    * items
      * Description
      * DeviceName
      * DiskImageSize
      * Format
      * Progress
      * SnapshotId
      * Status
      * StatusMessage
      * Url
      * UserBucket
        * S3Bucket
        * S3Key
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### ImportImageTaskId
* ImportImageTaskId `string`

### ImportImageTaskList
* ImportImageTaskList `array`
  * items
    * Architecture
    * Description
    * Encrypted
    * Hypervisor
    * ImageId
    * ImportTaskId
    * KmsKeyId
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * LicenseType
    * Platform
    * Progress
    * SnapshotDetails
      * items
        * Description
        * DeviceName
        * DiskImageSize
        * Format
        * Progress
        * SnapshotId
        * Status
        * StatusMessage
        * Url
        * UserBucket
          * S3Bucket
          * S3Key
    * Status
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### ImportInstanceLaunchSpecification
* ImportInstanceLaunchSpecification `object`: Describes the launch specification for VM import.
  * AdditionalInfo
  * Architecture
  * GroupIds
    * items
  * GroupNames
    * items
  * InstanceInitiatedShutdownBehavior
  * InstanceType
  * Monitoring
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * PrivateIpAddress
  * SubnetId
  * UserData
    * Data

### ImportInstanceRequest
* ImportInstanceRequest `object`
  * Description
  * DiskImages
    * items [DiskImage](#diskimage)
  * DryRun
  * LaunchSpecification
    * AdditionalInfo
    * Architecture
    * GroupIds
      * items
    * GroupNames
      * items
    * InstanceInitiatedShutdownBehavior
    * InstanceType
    * Monitoring
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * PrivateIpAddress
    * SubnetId
    * UserData
      * Data
  * Platform **required**

### ImportInstanceResult
* ImportInstanceResult `object`
  * ConversionTask
    * ConversionTaskId
    * ExpirationTime
    * ImportInstance
      * Description
      * InstanceId
      * Platform
      * Volumes
        * items
          * AvailabilityZone
          * BytesConverted
          * Description
          * Image
          * Status
          * StatusMessage
          * Volume
    * ImportVolume
      * AvailabilityZone
      * BytesConverted
      * Description
      * Image
        * Checksum
        * Format
        * ImportManifestUrl
        * Size
      * Volume
        * Id
        * Size
    * State
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### ImportInstanceTaskDetails
* ImportInstanceTaskDetails `object`: Describes an import instance task.
  * Description
  * InstanceId
  * Platform
  * Volumes
    * items
      * AvailabilityZone
      * BytesConverted
      * Description
      * Image
        * Checksum
        * Format
        * ImportManifestUrl
        * Size
      * Status
      * StatusMessage
      * Volume
        * Id
        * Size

### ImportInstanceVolumeDetailItem
* ImportInstanceVolumeDetailItem `object`: Describes an import volume task.
  * AvailabilityZone
  * BytesConverted
  * Description
  * Image
    * Checksum
    * Format
    * ImportManifestUrl
    * Size
  * Status
  * StatusMessage
  * Volume
    * Id
    * Size

### ImportInstanceVolumeDetailSet
* ImportInstanceVolumeDetailSet `array`
  * items
    * AvailabilityZone
    * BytesConverted
    * Description
    * Image
      * Checksum
      * Format
      * ImportManifestUrl
      * Size
    * Status
    * StatusMessage
    * Volume
      * Id
      * Size

### ImportKeyPairRequest
* ImportKeyPairRequest `object`
  * DryRun
  * KeyName **required**
  * PublicKeyMaterial **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### ImportKeyPairResult
* ImportKeyPairResult `object`
  * KeyFingerprint
  * KeyName
  * KeyPairId
  * Tags
    * items
      * Key
      * Value

### ImportSnapshotRequest
* ImportSnapshotRequest `object`
  * ClientData
    * Comment
    * UploadEnd
    * UploadSize
    * UploadStart
  * ClientToken
  * Description
  * DiskContainer
    * Description
    * Format
    * Url
    * UserBucket
      * S3Bucket
      * S3Key
  * DryRun
  * Encrypted
  * KmsKeyId
  * RoleName
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### ImportSnapshotResult
* ImportSnapshotResult `object`
  * Description
  * ImportTaskId
  * SnapshotTaskDetail
    * Description
    * DiskImageSize
    * Encrypted
    * Format
    * KmsKeyId
    * Progress
    * SnapshotId
    * Status
    * StatusMessage
    * Url
    * UserBucket
      * S3Bucket
      * S3Key
  * Tags
    * items
      * Key
      * Value

### ImportSnapshotTask
* ImportSnapshotTask `object`: Describes an import snapshot task.
  * Description
  * ImportTaskId
  * SnapshotTaskDetail
    * Description
    * DiskImageSize
    * Encrypted
    * Format
    * KmsKeyId
    * Progress
    * SnapshotId
    * Status
    * StatusMessage
    * Url
    * UserBucket
      * S3Bucket
      * S3Key
  * Tags
    * items
      * Key
      * Value

### ImportSnapshotTaskId
* ImportSnapshotTaskId `string`

### ImportSnapshotTaskIdList
* ImportSnapshotTaskIdList `array`
  * items

### ImportSnapshotTaskList
* ImportSnapshotTaskList `array`
  * items
    * Description
    * ImportTaskId
    * SnapshotTaskDetail
      * Description
      * DiskImageSize
      * Encrypted
      * Format
      * KmsKeyId
      * Progress
      * SnapshotId
      * Status
      * StatusMessage
      * Url
      * UserBucket
        * S3Bucket
        * S3Key
    * Tags
      * items
        * Key
        * Value

### ImportTaskId
* ImportTaskId `string`

### ImportTaskIdList
* ImportTaskIdList `array`
  * items

### ImportVolumeRequest
* ImportVolumeRequest `object`
  * AvailabilityZone **required**
  * Description
  * DryRun
  * Image **required**
    * Bytes **required**
    * Format **required**
    * ImportManifestUrl **required**
  * Volume **required**
    * Size **required**

### ImportVolumeResult
* ImportVolumeResult `object`
  * ConversionTask
    * ConversionTaskId
    * ExpirationTime
    * ImportInstance
      * Description
      * InstanceId
      * Platform
      * Volumes
        * items
          * AvailabilityZone
          * BytesConverted
          * Description
          * Image
          * Status
          * StatusMessage
          * Volume
    * ImportVolume
      * AvailabilityZone
      * BytesConverted
      * Description
      * Image
        * Checksum
        * Format
        * ImportManifestUrl
        * Size
      * Volume
        * Id
        * Size
    * State
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### ImportVolumeTaskDetails
* ImportVolumeTaskDetails `object`: Describes an import volume task.
  * AvailabilityZone
  * BytesConverted
  * Description
  * Image
    * Checksum
    * Format
    * ImportManifestUrl
    * Size
  * Volume
    * Id
    * Size

### InferenceAcceleratorInfo
* InferenceAcceleratorInfo `object`: Describes the Inference accelerators for the instance type.
  * Accelerators
    * items [InferenceDeviceInfo](#inferencedeviceinfo)

### InferenceDeviceCount
* InferenceDeviceCount `integer`

### InferenceDeviceInfo
* InferenceDeviceInfo `object`: Describes the Inference accelerators for the instance type.
  * Count
  * Manufacturer
  * Name

### InferenceDeviceInfoList
* InferenceDeviceInfoList `array`
  * items [InferenceDeviceInfo](#inferencedeviceinfo)

### InferenceDeviceManufacturerName
* InferenceDeviceManufacturerName `string`

### InferenceDeviceName
* InferenceDeviceName `string`

### InsideCidrBlocksStringList
* InsideCidrBlocksStringList `array`
  * items

### Instance
* Instance `object`: Describes an instance.
  * AmiLaunchIndex
  * Architecture
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * AttachTime
        * DeleteOnTermination
        * Status
        * VolumeId
  * CapacityReservationId
  * CapacityReservationSpecification
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * ClientToken
  * CpuOptions
    * CoreCount
    * ThreadsPerCore
  * EbsOptimized
  * ElasticGpuAssociations
    * items
      * ElasticGpuAssociationId
      * ElasticGpuAssociationState
      * ElasticGpuAssociationTime
      * ElasticGpuId
  * ElasticInferenceAcceleratorAssociations
    * items
      * ElasticInferenceAcceleratorArn
      * ElasticInferenceAcceleratorAssociationId
      * ElasticInferenceAcceleratorAssociationState
      * ElasticInferenceAcceleratorAssociationTime
  * EnaSupport
  * EnclaveOptions
    * Enabled
  * HibernationOptions
    * Configured
  * Hypervisor
  * IamInstanceProfile
    * Arn
    * Id
  * ImageId
  * InstanceId
  * InstanceLifecycle
  * InstanceType
  * KernelId
  * KeyName
  * LaunchTime
  * Licenses
    * items
      * LicenseConfigurationArn
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
    * State
  * Monitoring
    * State
  * NetworkInterfaces
    * items
      * Association
        * CarrierIp
        * IpOwnerId
        * PublicDnsName
        * PublicIp
      * Attachment
        * AttachTime
        * AttachmentId
        * DeleteOnTermination
        * DeviceIndex
        * NetworkCardIndex
        * Status
      * Description
      * Groups
        * items
          * GroupId
          * GroupName
      * InterfaceType
      * Ipv6Addresses
        * items
          * Ipv6Address
      * MacAddress
      * NetworkInterfaceId
      * OwnerId
      * PrivateDnsName
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Association
          * Primary
          * PrivateDnsName
          * PrivateIpAddress
      * SourceDestCheck
      * Status
      * SubnetId
      * VpcId
  * OutpostArn
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * Platform
  * PrivateDnsName
  * PrivateIpAddress
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * PublicDnsName
  * PublicIpAddress
  * RamdiskId
  * RootDeviceName
  * RootDeviceType
  * SecurityGroups
    * items
      * GroupId
      * GroupName
  * SourceDestCheck
  * SpotInstanceRequestId
  * SriovNetSupport
  * State
    * Code
    * Name
  * StateReason
    * Code
    * Message
  * StateTransitionReason
  * SubnetId
  * Tags
    * items
      * Key
      * Value
  * VirtualizationType
  * VpcId

### InstanceAttribute
* InstanceAttribute `object`: Describes an instance attribute.
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * AttachTime
        * DeleteOnTermination
        * Status
        * VolumeId
  * DisableApiTermination
    * Value
  * EbsOptimized
    * Value
  * EnaSupport
    * Value
  * EnclaveOptions
    * Enabled
  * Groups
    * items
      * GroupId
      * GroupName
  * InstanceId
  * InstanceInitiatedShutdownBehavior
    * Value
  * InstanceType
    * Value
  * KernelId
    * Value
  * ProductCodes
    * items
      * ProductCodeId
      * ProductCodeType
  * RamdiskId
    * Value
  * RootDeviceName
    * Value
  * SourceDestCheck
    * Value
  * SriovNetSupport
    * Value
  * UserData
    * Value

### InstanceAttributeName
* InstanceAttributeName `string` (values: instanceType, kernel, ramdisk, userData, disableApiTermination, instanceInitiatedShutdownBehavior, rootDeviceName, blockDeviceMapping, productCodes, sourceDestCheck, groupSet, ebsOptimized, sriovNetSupport, enaSupport, enclaveOptions)

### InstanceBlockDeviceMapping
* InstanceBlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName
  * Ebs
    * AttachTime
    * DeleteOnTermination
    * Status
    * VolumeId

### InstanceBlockDeviceMappingList
* InstanceBlockDeviceMappingList `array`
  * items
    * DeviceName
    * Ebs
      * AttachTime
      * DeleteOnTermination
      * Status
      * VolumeId

### InstanceBlockDeviceMappingSpecification
* InstanceBlockDeviceMappingSpecification `object`: Describes a block device mapping entry.
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * VolumeId
  * NoDevice
  * VirtualName

### InstanceBlockDeviceMappingSpecificationList
* InstanceBlockDeviceMappingSpecificationList `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * VolumeId
    * NoDevice
    * VirtualName

### InstanceCapacity
* InstanceCapacity `object`: Information about the number of instances that can be launched onto the Dedicated Host.
  * AvailableCapacity
  * InstanceType
  * TotalCapacity

### InstanceCount
* InstanceCount `object`: Describes a Reserved Instance listing state.
  * InstanceCount
  * State

### InstanceCountList
* InstanceCountList `array`
  * items
    * InstanceCount
    * State

### InstanceCreditSpecification
* InstanceCreditSpecification `object`: Describes the credit option for CPU usage of a burstable performance instance. 
  * CpuCredits
  * InstanceId

### InstanceCreditSpecificationList
* InstanceCreditSpecificationList `array`
  * items
    * CpuCredits
    * InstanceId

### InstanceCreditSpecificationListRequest
* InstanceCreditSpecificationListRequest `array`
  * items
    * CpuCredits
    * InstanceId

### InstanceCreditSpecificationRequest
* InstanceCreditSpecificationRequest `object`: Describes the credit option for CPU usage of a burstable performance instance.
  * CpuCredits
  * InstanceId

### InstanceEventId
* InstanceEventId `string`

### InstanceExportDetails
* InstanceExportDetails `object`: Describes an instance to export.
  * InstanceId
  * TargetEnvironment

### InstanceFamilyCreditSpecification
* InstanceFamilyCreditSpecification `object`: Describes the default credit option for CPU usage of a burstable performance instance family.
  * CpuCredits
  * InstanceFamily

### InstanceHealthStatus
* InstanceHealthStatus `string` (values: healthy, unhealthy)

### InstanceId
* InstanceId `string`

### InstanceIdSet
* InstanceIdSet `array`
  * items

### InstanceIdStringList
* InstanceIdStringList `array`
  * items

### InstanceIdsSet
* InstanceIdsSet `array`
  * items

### InstanceInterruptionBehavior
* InstanceInterruptionBehavior `string` (values: hibernate, stop, terminate)

### InstanceIpv6Address
* InstanceIpv6Address `object`: Describes an IPv6 address.
  * Ipv6Address

### InstanceIpv6AddressList
* InstanceIpv6AddressList `array`
  * items
    * Ipv6Address

### InstanceIpv6AddressListRequest
* InstanceIpv6AddressListRequest `array`
  * items
    * Ipv6Address

### InstanceIpv6AddressRequest
* InstanceIpv6AddressRequest `object`: Describes an IPv6 address.
  * Ipv6Address

### InstanceLifecycle
* InstanceLifecycle `string` (values: spot, on-demand)

### InstanceLifecycleType
* InstanceLifecycleType `string` (values: spot, scheduled)

### InstanceList
* InstanceList `array`
  * items
    * AmiLaunchIndex
    * Architecture
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * AttachTime
          * DeleteOnTermination
          * Status
          * VolumeId
    * CapacityReservationId
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * ClientToken
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * EbsOptimized
    * ElasticGpuAssociations
      * items
        * ElasticGpuAssociationId
        * ElasticGpuAssociationState
        * ElasticGpuAssociationTime
        * ElasticGpuId
    * ElasticInferenceAcceleratorAssociations
      * items
        * ElasticInferenceAcceleratorArn
        * ElasticInferenceAcceleratorAssociationId
        * ElasticInferenceAcceleratorAssociationState
        * ElasticInferenceAcceleratorAssociationTime
    * EnaSupport
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * Hypervisor
    * IamInstanceProfile
      * Arn
      * Id
    * ImageId
    * InstanceId
    * InstanceLifecycle
    * InstanceType
    * KernelId
    * KeyName
    * LaunchTime
    * Licenses
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
      * State
    * Monitoring
      * State
    * NetworkInterfaces
      * items
        * Association
          * CarrierIp
          * IpOwnerId
          * PublicDnsName
          * PublicIp
        * Attachment
          * AttachTime
          * AttachmentId
          * DeleteOnTermination
          * DeviceIndex
          * NetworkCardIndex
          * Status
        * Description
        * Groups
          * items
        * InterfaceType
        * Ipv6Addresses
          * items
        * MacAddress
        * NetworkInterfaceId
        * OwnerId
        * PrivateDnsName
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SourceDestCheck
        * Status
        * SubnetId
        * VpcId
    * OutpostArn
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * Platform
    * PrivateDnsName
    * PrivateIpAddress
    * ProductCodes
      * items
        * ProductCodeId
        * ProductCodeType
    * PublicDnsName
    * PublicIpAddress
    * RamdiskId
    * RootDeviceName
    * RootDeviceType
    * SecurityGroups
      * items
        * GroupId
        * GroupName
    * SourceDestCheck
    * SpotInstanceRequestId
    * SriovNetSupport
    * State
      * Code
      * Name
    * StateReason
      * Code
      * Message
    * StateTransitionReason
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VirtualizationType
    * VpcId

### InstanceMarketOptionsRequest
* InstanceMarketOptionsRequest `object`: Describes the market (purchasing) option for the instances.
  * MarketType
  * SpotOptions
    * BlockDurationMinutes
    * InstanceInterruptionBehavior
    * MaxPrice
    * SpotInstanceType
    * ValidUntil

### InstanceMatchCriteria
* InstanceMatchCriteria `string` (values: open, targeted)

### InstanceMetadataEndpointState
* InstanceMetadataEndpointState `string` (values: disabled, enabled)

### InstanceMetadataOptionsRequest
* InstanceMetadataOptionsRequest `object`: The metadata options for the instance.
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens

### InstanceMetadataOptionsResponse
* InstanceMetadataOptionsResponse `object`: The metadata options for the instance.
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens
  * State

### InstanceMetadataOptionsState
* InstanceMetadataOptionsState `string` (values: pending, applied)

### InstanceMonitoring
* InstanceMonitoring `object`: Describes the monitoring of an instance.
  * InstanceId
  * Monitoring
    * State

### InstanceMonitoringList
* InstanceMonitoringList `array`
  * items
    * InstanceId
    * Monitoring
      * State

### InstanceNetworkInterface
* InstanceNetworkInterface `object`: Describes a network interface.
  * Association
    * CarrierIp
    * IpOwnerId
    * PublicDnsName
    * PublicIp
  * Attachment
    * AttachTime
    * AttachmentId
    * DeleteOnTermination
    * DeviceIndex
    * NetworkCardIndex
    * Status
  * Description
  * Groups
    * items
      * GroupId
      * GroupName
  * InterfaceType
  * Ipv6Addresses
    * items
      * Ipv6Address
  * MacAddress
  * NetworkInterfaceId
  * OwnerId
  * PrivateDnsName
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Association
        * CarrierIp
        * IpOwnerId
        * PublicDnsName
        * PublicIp
      * Primary
      * PrivateDnsName
      * PrivateIpAddress
  * SourceDestCheck
  * Status
  * SubnetId
  * VpcId

### InstanceNetworkInterfaceAssociation
* InstanceNetworkInterfaceAssociation `object`: Describes association information for an Elastic IP address (IPv4).
  * CarrierIp
  * IpOwnerId
  * PublicDnsName
  * PublicIp

### InstanceNetworkInterfaceAttachment
* InstanceNetworkInterfaceAttachment `object`: Describes a network interface attachment.
  * AttachTime
  * AttachmentId
  * DeleteOnTermination
  * DeviceIndex
  * NetworkCardIndex
  * Status

### InstanceNetworkInterfaceList
* InstanceNetworkInterfaceList `array`
  * items
    * Association
      * CarrierIp
      * IpOwnerId
      * PublicDnsName
      * PublicIp
    * Attachment
      * AttachTime
      * AttachmentId
      * DeleteOnTermination
      * DeviceIndex
      * NetworkCardIndex
      * Status
    * Description
    * Groups
      * items
        * GroupId
        * GroupName
    * InterfaceType
    * Ipv6Addresses
      * items
        * Ipv6Address
    * MacAddress
    * NetworkInterfaceId
    * OwnerId
    * PrivateDnsName
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Association
          * CarrierIp
          * IpOwnerId
          * PublicDnsName
          * PublicIp
        * Primary
        * PrivateDnsName
        * PrivateIpAddress
    * SourceDestCheck
    * Status
    * SubnetId
    * VpcId

### InstanceNetworkInterfaceSpecification
* InstanceNetworkInterfaceSpecification `object`: Describes a network interface.
  * AssociateCarrierIpAddress
  * AssociatePublicIpAddress
  * DeleteOnTermination
  * Description
  * DeviceIndex
  * Groups
    * items
  * InterfaceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * NetworkCardIndex
  * NetworkInterfaceId
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId

### InstanceNetworkInterfaceSpecificationList
* InstanceNetworkInterfaceSpecificationList `array`
  * items
    * AssociateCarrierIpAddress
    * AssociatePublicIpAddress
    * DeleteOnTermination
    * Description
    * DeviceIndex
    * Groups
      * items
    * InterfaceType
    * Ipv6AddressCount
    * Ipv6Addresses
      * items
        * Ipv6Address
    * NetworkCardIndex
    * NetworkInterfaceId
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Primary
        * PrivateIpAddress
    * SecondaryPrivateIpAddressCount
    * SubnetId

### InstancePrivateIpAddress
* InstancePrivateIpAddress `object`: Describes a private IPv4 address.
  * Association
    * CarrierIp
    * IpOwnerId
    * PublicDnsName
    * PublicIp
  * Primary
  * PrivateDnsName
  * PrivateIpAddress

### InstancePrivateIpAddressList
* InstancePrivateIpAddressList `array`
  * items
    * Association
      * CarrierIp
      * IpOwnerId
      * PublicDnsName
      * PublicIp
    * Primary
    * PrivateDnsName
    * PrivateIpAddress

### InstanceSpecification
* InstanceSpecification `object`: The instance details to specify which volumes should be snapshotted.
  * ExcludeBootVolume
  * InstanceId

### InstanceState
* InstanceState `object`: Describes the current state of an instance.
  * Code
  * Name

### InstanceStateChange
* InstanceStateChange `object`: Describes an instance state change.
  * CurrentState
    * Code
    * Name
  * InstanceId
  * PreviousState
    * Code
    * Name

### InstanceStateChangeList
* InstanceStateChangeList `array`
  * items
    * CurrentState
      * Code
      * Name
    * InstanceId
    * PreviousState
      * Code
      * Name

### InstanceStateName
* InstanceStateName `string` (values: pending, running, shutting-down, terminated, stopping, stopped)

### InstanceStatus
* InstanceStatus `object`: Describes the status of an instance.
  * AvailabilityZone
  * Events
    * items
      * Code
      * Description
      * InstanceEventId
      * NotAfter
      * NotBefore
      * NotBeforeDeadline
  * InstanceId
  * InstanceState
    * Code
    * Name
  * InstanceStatus
    * Details
      * items
        * ImpairedSince
        * Name
        * Status
    * Status
  * OutpostArn
  * SystemStatus
    * Details
      * items
        * ImpairedSince
        * Name
        * Status
    * Status

### InstanceStatusDetails
* InstanceStatusDetails `object`: Describes the instance status.
  * ImpairedSince
  * Name
  * Status

### InstanceStatusDetailsList
* InstanceStatusDetailsList `array`
  * items
    * ImpairedSince
    * Name
    * Status

### InstanceStatusEvent
* InstanceStatusEvent `object`: Describes a scheduled event for an instance.
  * Code
  * Description
  * InstanceEventId
  * NotAfter
  * NotBefore
  * NotBeforeDeadline

### InstanceStatusEventList
* InstanceStatusEventList `array`
  * items
    * Code
    * Description
    * InstanceEventId
    * NotAfter
    * NotBefore
    * NotBeforeDeadline

### InstanceStatusList
* InstanceStatusList `array`
  * items
    * AvailabilityZone
    * Events
      * items
        * Code
        * Description
        * InstanceEventId
        * NotAfter
        * NotBefore
        * NotBeforeDeadline
    * InstanceId
    * InstanceState
      * Code
      * Name
    * InstanceStatus
      * Details
        * items
          * ImpairedSince
          * Name
          * Status
      * Status
    * OutpostArn
    * SystemStatus
      * Details
        * items
          * ImpairedSince
          * Name
          * Status
      * Status

### InstanceStatusSummary
* InstanceStatusSummary `object`: Describes the status of an instance.
  * Details
    * items
      * ImpairedSince
      * Name
      * Status
  * Status

### InstanceStorageFlag
* InstanceStorageFlag `boolean`

### InstanceStorageInfo
* InstanceStorageInfo `object`: Describes the disks that are available for the instance type.
  * Disks
    * items
      * Count
      * SizeInGB
      * Type
  * NvmeSupport
  * TotalSizeInGB

### InstanceTagKeySet
* InstanceTagKeySet `array`
  * items

### InstanceTagNotificationAttribute
* InstanceTagNotificationAttribute `object`: Describes the registered tag keys for the current Region.
  * IncludeAllTagsOfInstance
  * InstanceTagKeys
    * items

### InstanceType
* InstanceType `string` (values: t1.micro, t2.nano, t2.micro, t2.small, t2.medium, t2.large, t2.xlarge, t2.2xlarge, t3.nano, t3.micro, t3.small, t3.medium, t3.large, t3.xlarge, t3.2xlarge, t3a.nano, t3a.micro, t3a.small, t3a.medium, t3a.large, t3a.xlarge, t3a.2xlarge, t4g.nano, t4g.micro, t4g.small, t4g.medium, t4g.large, t4g.xlarge, t4g.2xlarge, m1.small, m1.medium, m1.large, m1.xlarge, m3.medium, m3.large, m3.xlarge, m3.2xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m4.16xlarge, m2.xlarge, m2.2xlarge, m2.4xlarge, cr1.8xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, r5.large, r5.xlarge, r5.2xlarge, r5.4xlarge, r5.8xlarge, r5.12xlarge, r5.16xlarge, r5.24xlarge, r5.metal, r5a.large, r5a.xlarge, r5a.2xlarge, r5a.4xlarge, r5a.8xlarge, r5a.12xlarge, r5a.16xlarge, r5a.24xlarge, r5b.large, r5b.xlarge, r5b.2xlarge, r5b.4xlarge, r5b.8xlarge, r5b.12xlarge, r5b.16xlarge, r5b.24xlarge, r5b.metal, r5d.large, r5d.xlarge, r5d.2xlarge, r5d.4xlarge, r5d.8xlarge, r5d.12xlarge, r5d.16xlarge, r5d.24xlarge, r5d.metal, r5ad.large, r5ad.xlarge, r5ad.2xlarge, r5ad.4xlarge, r5ad.8xlarge, r5ad.12xlarge, r5ad.16xlarge, r5ad.24xlarge, r6g.metal, r6g.medium, r6g.large, r6g.xlarge, r6g.2xlarge, r6g.4xlarge, r6g.8xlarge, r6g.12xlarge, r6g.16xlarge, r6gd.metal, r6gd.medium, r6gd.large, r6gd.xlarge, r6gd.2xlarge, r6gd.4xlarge, r6gd.8xlarge, r6gd.12xlarge, r6gd.16xlarge, x1.16xlarge, x1.32xlarge, x1e.xlarge, x1e.2xlarge, x1e.4xlarge, x1e.8xlarge, x1e.16xlarge, x1e.32xlarge, i2.xlarge, i2.2xlarge, i2.4xlarge, i2.8xlarge, i3.large, i3.xlarge, i3.2xlarge, i3.4xlarge, i3.8xlarge, i3.16xlarge, i3.metal, i3en.large, i3en.xlarge, i3en.2xlarge, i3en.3xlarge, i3en.6xlarge, i3en.12xlarge, i3en.24xlarge, i3en.metal, hi1.4xlarge, hs1.8xlarge, c1.medium, c1.xlarge, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.large, c5.xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, c5.12xlarge, c5.18xlarge, c5.24xlarge, c5.metal, c5a.large, c5a.xlarge, c5a.2xlarge, c5a.4xlarge, c5a.8xlarge, c5a.12xlarge, c5a.16xlarge, c5a.24xlarge, c5ad.large, c5ad.xlarge, c5ad.2xlarge, c5ad.4xlarge, c5ad.8xlarge, c5ad.12xlarge, c5ad.16xlarge, c5ad.24xlarge, c5d.large, c5d.xlarge, c5d.2xlarge, c5d.4xlarge, c5d.9xlarge, c5d.12xlarge, c5d.18xlarge, c5d.24xlarge, c5d.metal, c5n.large, c5n.xlarge, c5n.2xlarge, c5n.4xlarge, c5n.9xlarge, c5n.18xlarge, c5n.metal, c6g.metal, c6g.medium, c6g.large, c6g.xlarge, c6g.2xlarge, c6g.4xlarge, c6g.8xlarge, c6g.12xlarge, c6g.16xlarge, c6gd.metal, c6gd.medium, c6gd.large, c6gd.xlarge, c6gd.2xlarge, c6gd.4xlarge, c6gd.8xlarge, c6gd.12xlarge, c6gd.16xlarge, c6gn.medium, c6gn.large, c6gn.xlarge, c6gn.2xlarge, c6gn.4xlarge, c6gn.8xlarge, c6gn.12xlarge, c6gn.16xlarge, cc1.4xlarge, cc2.8xlarge, g2.2xlarge, g2.8xlarge, g3.4xlarge, g3.8xlarge, g3.16xlarge, g3s.xlarge, g4ad.4xlarge, g4ad.8xlarge, g4ad.16xlarge, g4dn.xlarge, g4dn.2xlarge, g4dn.4xlarge, g4dn.8xlarge, g4dn.12xlarge, g4dn.16xlarge, g4dn.metal, cg1.4xlarge, p2.xlarge, p2.8xlarge, p2.16xlarge, p3.2xlarge, p3.8xlarge, p3.16xlarge, p3dn.24xlarge, p4d.24xlarge, d2.xlarge, d2.2xlarge, d2.4xlarge, d2.8xlarge, d3.xlarge, d3.2xlarge, d3.4xlarge, d3.8xlarge, d3en.xlarge, d3en.2xlarge, d3en.4xlarge, d3en.6xlarge, d3en.8xlarge, d3en.12xlarge, f1.2xlarge, f1.4xlarge, f1.16xlarge, m5.large, m5.xlarge, m5.2xlarge, m5.4xlarge, m5.8xlarge, m5.12xlarge, m5.16xlarge, m5.24xlarge, m5.metal, m5a.large, m5a.xlarge, m5a.2xlarge, m5a.4xlarge, m5a.8xlarge, m5a.12xlarge, m5a.16xlarge, m5a.24xlarge, m5d.large, m5d.xlarge, m5d.2xlarge, m5d.4xlarge, m5d.8xlarge, m5d.12xlarge, m5d.16xlarge, m5d.24xlarge, m5d.metal, m5ad.large, m5ad.xlarge, m5ad.2xlarge, m5ad.4xlarge, m5ad.8xlarge, m5ad.12xlarge, m5ad.16xlarge, m5ad.24xlarge, m5zn.large, m5zn.xlarge, m5zn.2xlarge, m5zn.3xlarge, m5zn.6xlarge, m5zn.12xlarge, m5zn.metal, h1.2xlarge, h1.4xlarge, h1.8xlarge, h1.16xlarge, z1d.large, z1d.xlarge, z1d.2xlarge, z1d.3xlarge, z1d.6xlarge, z1d.12xlarge, z1d.metal, u-6tb1.metal, u-9tb1.metal, u-12tb1.metal, u-18tb1.metal, u-24tb1.metal, a1.medium, a1.large, a1.xlarge, a1.2xlarge, a1.4xlarge, a1.metal, m5dn.large, m5dn.xlarge, m5dn.2xlarge, m5dn.4xlarge, m5dn.8xlarge, m5dn.12xlarge, m5dn.16xlarge, m5dn.24xlarge, m5n.large, m5n.xlarge, m5n.2xlarge, m5n.4xlarge, m5n.8xlarge, m5n.12xlarge, m5n.16xlarge, m5n.24xlarge, r5dn.large, r5dn.xlarge, r5dn.2xlarge, r5dn.4xlarge, r5dn.8xlarge, r5dn.12xlarge, r5dn.16xlarge, r5dn.24xlarge, r5n.large, r5n.xlarge, r5n.2xlarge, r5n.4xlarge, r5n.8xlarge, r5n.12xlarge, r5n.16xlarge, r5n.24xlarge, inf1.xlarge, inf1.2xlarge, inf1.6xlarge, inf1.24xlarge, m6g.metal, m6g.medium, m6g.large, m6g.xlarge, m6g.2xlarge, m6g.4xlarge, m6g.8xlarge, m6g.12xlarge, m6g.16xlarge, m6gd.metal, m6gd.medium, m6gd.large, m6gd.xlarge, m6gd.2xlarge, m6gd.4xlarge, m6gd.8xlarge, m6gd.12xlarge, m6gd.16xlarge, mac1.metal)

### InstanceTypeHypervisor
* InstanceTypeHypervisor `string` (values: nitro, xen)

### InstanceTypeInfo
* InstanceTypeInfo `object`: Describes the instance type.
  * AutoRecoverySupported
  * BareMetal
  * BurstablePerformanceSupported
  * CurrentGeneration
  * DedicatedHostsSupported
  * EbsInfo
    * EbsOptimizedInfo
      * BaselineBandwidthInMbps
      * BaselineIops
      * BaselineThroughputInMBps
      * MaximumBandwidthInMbps
      * MaximumIops
      * MaximumThroughputInMBps
    * EbsOptimizedSupport
    * EncryptionSupport
    * NvmeSupport
  * FpgaInfo
    * Fpgas
      * items
        * Count
        * Manufacturer
        * MemoryInfo
          * SizeInMiB
        * Name
    * TotalFpgaMemoryInMiB
  * FreeTierEligible
  * GpuInfo
    * Gpus
      * items
        * Count
        * Manufacturer
        * MemoryInfo
          * SizeInMiB
        * Name
    * TotalGpuMemoryInMiB
  * HibernationSupported
  * Hypervisor
  * InferenceAcceleratorInfo
    * Accelerators
      * items [InferenceDeviceInfo](#inferencedeviceinfo)
  * InstanceStorageInfo
    * Disks
      * items
        * Count
        * SizeInGB
        * Type
    * NvmeSupport
    * TotalSizeInGB
  * InstanceStorageSupported
  * InstanceType
  * MemoryInfo
    * SizeInMiB
  * NetworkInfo
    * DefaultNetworkCardIndex
    * EfaSupported
    * EnaSupport
    * Ipv4AddressesPerInterface
    * Ipv6AddressesPerInterface
    * Ipv6Supported
    * MaximumNetworkCards
    * MaximumNetworkInterfaces
    * NetworkCards
      * items
        * MaximumNetworkInterfaces
        * NetworkCardIndex
        * NetworkPerformance
    * NetworkPerformance
  * PlacementGroupInfo
    * SupportedStrategies
      * items
  * ProcessorInfo
    * SupportedArchitectures
      * items
    * SustainedClockSpeedInGhz
  * SupportedRootDeviceTypes
    * items
  * SupportedUsageClasses
    * items
  * SupportedVirtualizationTypes
    * items
  * VCpuInfo
    * DefaultCores
    * DefaultThreadsPerCore
    * DefaultVCpus
    * ValidCores
      * items
    * ValidThreadsPerCore
      * items

### InstanceTypeInfoList
* InstanceTypeInfoList `array`
  * items
    * AutoRecoverySupported
    * BareMetal
    * BurstablePerformanceSupported
    * CurrentGeneration
    * DedicatedHostsSupported
    * EbsInfo
      * EbsOptimizedInfo
        * BaselineBandwidthInMbps
        * BaselineIops
        * BaselineThroughputInMBps
        * MaximumBandwidthInMbps
        * MaximumIops
        * MaximumThroughputInMBps
      * EbsOptimizedSupport
      * EncryptionSupport
      * NvmeSupport
    * FpgaInfo
      * Fpgas
        * items
          * Count
          * Manufacturer
          * MemoryInfo
          * Name
      * TotalFpgaMemoryInMiB
    * FreeTierEligible
    * GpuInfo
      * Gpus
        * items
          * Count
          * Manufacturer
          * MemoryInfo
          * Name
      * TotalGpuMemoryInMiB
    * HibernationSupported
    * Hypervisor
    * InferenceAcceleratorInfo
      * Accelerators
        * items [InferenceDeviceInfo](#inferencedeviceinfo)
    * InstanceStorageInfo
      * Disks
        * items
          * Count
          * SizeInGB
          * Type
      * NvmeSupport
      * TotalSizeInGB
    * InstanceStorageSupported
    * InstanceType
    * MemoryInfo
      * SizeInMiB
    * NetworkInfo
      * DefaultNetworkCardIndex
      * EfaSupported
      * EnaSupport
      * Ipv4AddressesPerInterface
      * Ipv6AddressesPerInterface
      * Ipv6Supported
      * MaximumNetworkCards
      * MaximumNetworkInterfaces
      * NetworkCards
        * items
          * MaximumNetworkInterfaces
          * NetworkCardIndex
          * NetworkPerformance
      * NetworkPerformance
    * PlacementGroupInfo
      * SupportedStrategies
        * items
    * ProcessorInfo
      * SupportedArchitectures
        * items
      * SustainedClockSpeedInGhz
    * SupportedRootDeviceTypes
      * items
    * SupportedUsageClasses
      * items
    * SupportedVirtualizationTypes
      * items
    * VCpuInfo
      * DefaultCores
      * DefaultThreadsPerCore
      * DefaultVCpus
      * ValidCores
        * items
      * ValidThreadsPerCore
        * items

### InstanceTypeList
* InstanceTypeList `array`
  * items [InstanceType](#instancetype)

### InstanceTypeOffering
* InstanceTypeOffering `object`: The instance types offered.
  * InstanceType
  * Location
  * LocationType

### InstanceTypeOfferingsList
* InstanceTypeOfferingsList `array`
  * items
    * InstanceType
    * Location
    * LocationType

### InstanceUsage
* InstanceUsage `object`: Information about the Capacity Reservation usage.
  * AccountId
  * UsedInstanceCount

### InstanceUsageSet
* InstanceUsageSet `array`
  * items
    * AccountId
    * UsedInstanceCount

### Integer
* Integer `integer`

### InterfacePermissionType
* InterfacePermissionType `string` (values: INSTANCE-ATTACH, EIP-ASSOCIATE)

### InternetGateway
* InternetGateway `object`: Describes an internet gateway.
  * Attachments
    * items
      * State
      * VpcId
  * InternetGatewayId
  * OwnerId
  * Tags
    * items
      * Key
      * Value

### InternetGatewayAttachment
* InternetGatewayAttachment `object`: Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
  * State
  * VpcId

### InternetGatewayAttachmentList
* InternetGatewayAttachmentList `array`
  * items
    * State
    * VpcId

### InternetGatewayId
* InternetGatewayId `string`

### InternetGatewayIdList
* InternetGatewayIdList `array`
  * items

### InternetGatewayList
* InternetGatewayList `array`
  * items
    * Attachments
      * items
        * State
        * VpcId
    * InternetGatewayId
    * OwnerId
    * Tags
      * items
        * Key
        * Value

### IpAddress
* IpAddress `string`

### IpAddressList
* IpAddressList `array`
  * items

### IpPermission
* IpPermission `object`: Describes a set of permissions for a security group rule.
  * FromPort
  * IpProtocol
  * IpRanges
    * items
      * CidrIp
      * Description
  * Ipv6Ranges
    * items
      * CidrIpv6
      * Description
  * PrefixListIds
    * items
      * Description
      * PrefixListId
  * ToPort
  * UserIdGroupPairs
    * items
      * Description
      * GroupId
      * GroupName
      * PeeringStatus
      * UserId
      * VpcId
      * VpcPeeringConnectionId

### IpPermissionList
* IpPermissionList `array`
  * items
    * FromPort
    * IpProtocol
    * IpRanges
      * items
        * CidrIp
        * Description
    * Ipv6Ranges
      * items
        * CidrIpv6
        * Description
    * PrefixListIds
      * items
        * Description
        * PrefixListId
    * ToPort
    * UserIdGroupPairs
      * items
        * Description
        * GroupId
        * GroupName
        * PeeringStatus
        * UserId
        * VpcId
        * VpcPeeringConnectionId

### IpRange
* IpRange `object`: Describes an IPv4 range.
  * CidrIp
  * Description

### IpRangeList
* IpRangeList `array`
  * items
    * CidrIp
    * Description

### IpRanges
* IpRanges `array`
  * items

### Ipv4PoolEc2Id
* Ipv4PoolEc2Id `string`

### Ipv6Address
* Ipv6Address `string`

### Ipv6AddressList
* Ipv6AddressList `array`
  * items

### Ipv6CidrAssociation
* Ipv6CidrAssociation `object`: Describes an IPv6 CIDR block association.
  * AssociatedResource
  * Ipv6Cidr

### Ipv6CidrAssociationSet
* Ipv6CidrAssociationSet `array`
  * items
    * AssociatedResource
    * Ipv6Cidr

### Ipv6CidrBlock
* Ipv6CidrBlock `object`: Describes an IPv6 CIDR block.
  * Ipv6CidrBlock

### Ipv6CidrBlockSet
* Ipv6CidrBlockSet `array`
  * items
    * Ipv6CidrBlock

### Ipv6Flag
* Ipv6Flag `boolean`

### Ipv6Pool
* Ipv6Pool `object`: Describes an IPv6 address pool.
  * Description
  * PoolCidrBlocks
    * items
      * Cidr
  * PoolId
  * Tags
    * items
      * Key
      * Value

### Ipv6PoolEc2Id
* Ipv6PoolEc2Id `string`

### Ipv6PoolIdList
* Ipv6PoolIdList `array`
  * items

### Ipv6PoolMaxResults
* Ipv6PoolMaxResults `integer`

### Ipv6PoolSet
* Ipv6PoolSet `array`
  * items
    * Description
    * PoolCidrBlocks
      * items
        * Cidr
    * PoolId
    * Tags
      * items
        * Key
        * Value

### Ipv6Range
* Ipv6Range `object`: [EC2-VPC only] Describes an IPv6 range.
  * CidrIpv6
  * Description

### Ipv6RangeList
* Ipv6RangeList `array`
  * items
    * CidrIpv6
    * Description

### Ipv6SupportValue
* Ipv6SupportValue `string` (values: enable, disable)

### KernelId
* KernelId `string`

### KeyNameStringList
* KeyNameStringList `array`
  * items

### KeyPair
* KeyPair `object`: Describes a key pair.
  * KeyFingerprint
  * KeyMaterial
  * KeyName
  * KeyPairId
  * Tags
    * items
      * Key
      * Value

### KeyPairId
* KeyPairId `string`

### KeyPairIdStringList
* KeyPairIdStringList `array`
  * items

### KeyPairInfo
* KeyPairInfo `object`: Describes a key pair.
  * KeyFingerprint
  * KeyName
  * KeyPairId
  * Tags
    * items
      * Key
      * Value

### KeyPairList
* KeyPairList `array`
  * items
    * KeyFingerprint
    * KeyName
    * KeyPairId
    * Tags
      * items
        * Key
        * Value

### KeyPairName
* KeyPairName `string`

### KmsKeyId
* KmsKeyId `string`

### LastError
* LastError `object`: The last error that occurred for a VPC endpoint.
  * Code
  * Message

### LaunchPermission
* LaunchPermission `object`: Describes a launch permission.
  * Group
  * UserId

### LaunchPermissionList
* LaunchPermissionList `array`
  * items
    * Group
    * UserId

### LaunchPermissionModifications
* LaunchPermissionModifications `object`: Describes a launch permission modification.
  * Add
    * items
      * Group
      * UserId
  * Remove
    * items
      * Group
      * UserId

### LaunchSpecification
* LaunchSpecification `object`: Describes the launch specification for an instance.
  * AddressingType
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * EbsOptimized
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceType
  * KernelId
  * KeyName
  * Monitoring
    * Enabled **required**
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * AvailabilityZone
    * GroupName
    * Tenancy
  * RamdiskId
  * SecurityGroups
    * items
      * GroupId
      * GroupName
  * SubnetId
  * UserData

### LaunchSpecsList
* LaunchSpecsList `array`
  * items
    * AddressingType
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
      * Tenancy
    * RamdiskId
    * SecurityGroups
      * items
        * GroupId
        * GroupName
    * SpotPrice
    * SubnetId
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
    * WeightedCapacity

### LaunchTemplate
* LaunchTemplate `object`: Describes a launch template.
  * CreateTime
  * CreatedBy
  * DefaultVersionNumber
  * LatestVersionNumber
  * LaunchTemplateId
  * LaunchTemplateName
  * Tags
    * items
      * Key
      * Value

### LaunchTemplateAndOverridesResponse
* LaunchTemplateAndOverridesResponse `object`: Describes a launch template and overrides.
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * Overrides
    * AvailabilityZone
    * InstanceType
    * MaxPrice
    * Placement
      * GroupName
    * Priority
    * SubnetId
    * WeightedCapacity

### LaunchTemplateBlockDeviceMapping
* LaunchTemplateBlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * Encrypted
    * Iops
    * KmsKeyId
    * SnapshotId
    * Throughput
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### LaunchTemplateBlockDeviceMappingList
* LaunchTemplateBlockDeviceMappingList `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * Encrypted
      * Iops
      * KmsKeyId
      * SnapshotId
      * Throughput
      * VolumeSize
      * VolumeType
    * NoDevice
    * VirtualName

### LaunchTemplateBlockDeviceMappingRequest
* LaunchTemplateBlockDeviceMappingRequest `object`: Describes a block device mapping.
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * Encrypted
    * Iops
    * KmsKeyId
    * SnapshotId
    * Throughput
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### LaunchTemplateBlockDeviceMappingRequestList
* LaunchTemplateBlockDeviceMappingRequestList `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * Encrypted
      * Iops
      * KmsKeyId
      * SnapshotId
      * Throughput
      * VolumeSize
      * VolumeType
    * NoDevice
    * VirtualName

### LaunchTemplateCapacityReservationSpecificationRequest
* LaunchTemplateCapacityReservationSpecificationRequest `object`: Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the <code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.
  * CapacityReservationPreference
  * CapacityReservationTarget
    * CapacityReservationId
    * CapacityReservationResourceGroupArn

### LaunchTemplateCapacityReservationSpecificationResponse
* LaunchTemplateCapacityReservationSpecificationResponse `object`: Information about the Capacity Reservation targeting option.
  * CapacityReservationPreference
  * CapacityReservationTarget
    * CapacityReservationId
    * CapacityReservationResourceGroupArn

### LaunchTemplateConfig
* LaunchTemplateConfig `object`: Describes a launch template and overrides.
  * LaunchTemplateSpecification
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * Overrides
    * items
      * AvailabilityZone
      * InstanceType
      * Priority
      * SpotPrice
      * SubnetId
      * WeightedCapacity

### LaunchTemplateConfigList
* LaunchTemplateConfigList `array`
  * items
    * LaunchTemplateSpecification
      * LaunchTemplateId
      * LaunchTemplateName
      * Version
    * Overrides
      * items
        * AvailabilityZone
        * InstanceType
        * Priority
        * SpotPrice
        * SubnetId
        * WeightedCapacity

### LaunchTemplateCpuOptions
* LaunchTemplateCpuOptions `object`: The CPU options for the instance.
  * CoreCount
  * ThreadsPerCore

### LaunchTemplateCpuOptionsRequest
* LaunchTemplateCpuOptionsRequest `object`: The CPU options for the instance. Both the core count and threads per core must be specified in the request.
  * CoreCount
  * ThreadsPerCore

### LaunchTemplateEbsBlockDevice
* LaunchTemplateEbsBlockDevice `object`: Describes a block device for an EBS volume.
  * DeleteOnTermination
  * Encrypted
  * Iops
  * KmsKeyId
  * SnapshotId
  * Throughput
  * VolumeSize
  * VolumeType

### LaunchTemplateEbsBlockDeviceRequest
* LaunchTemplateEbsBlockDeviceRequest `object`: The parameters for a block device for an EBS volume.
  * DeleteOnTermination
  * Encrypted
  * Iops
  * KmsKeyId
  * SnapshotId
  * Throughput
  * VolumeSize
  * VolumeType

### LaunchTemplateElasticInferenceAccelerator
* LaunchTemplateElasticInferenceAccelerator `object`:  Describes an elastic inference accelerator. 
  * Count
  * Type **required**

### LaunchTemplateElasticInferenceAcceleratorCount
* LaunchTemplateElasticInferenceAcceleratorCount `integer`

### LaunchTemplateElasticInferenceAcceleratorList
* LaunchTemplateElasticInferenceAcceleratorList `array`
  * items
    * Count
    * Type **required**

### LaunchTemplateElasticInferenceAcceleratorResponse
* LaunchTemplateElasticInferenceAcceleratorResponse `object`:  Describes an elastic inference accelerator. 
  * Count
  * Type

### LaunchTemplateElasticInferenceAcceleratorResponseList
* LaunchTemplateElasticInferenceAcceleratorResponseList `array`
  * items
    * Count
    * Type

### LaunchTemplateEnclaveOptions
* LaunchTemplateEnclaveOptions `object`: Indicates whether the instance is enabled for AWS Nitro Enclaves.
  * Enabled

### LaunchTemplateEnclaveOptionsRequest
* LaunchTemplateEnclaveOptionsRequest `object`: Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.
  * Enabled

### LaunchTemplateErrorCode
* LaunchTemplateErrorCode `string` (values: launchTemplateIdDoesNotExist, launchTemplateIdMalformed, launchTemplateNameDoesNotExist, launchTemplateNameMalformed, launchTemplateVersionDoesNotExist, unexpectedError)

### LaunchTemplateHibernationOptions
* LaunchTemplateHibernationOptions `object`: Indicates whether an instance is configured for hibernation.
  * Configured

### LaunchTemplateHibernationOptionsRequest
* LaunchTemplateHibernationOptionsRequest `object`: Indicates whether the instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>.
  * Configured

### LaunchTemplateHttpTokensState
* LaunchTemplateHttpTokensState `string` (values: optional, required)

### LaunchTemplateIamInstanceProfileSpecification
* LaunchTemplateIamInstanceProfileSpecification `object`: Describes an IAM instance profile.
  * Arn
  * Name

### LaunchTemplateIamInstanceProfileSpecificationRequest
* LaunchTemplateIamInstanceProfileSpecificationRequest `object`: An IAM instance profile.
  * Arn
  * Name

### LaunchTemplateId
* LaunchTemplateId `string`

### LaunchTemplateIdStringList
* LaunchTemplateIdStringList `array`
  * items

### LaunchTemplateInstanceMarketOptions
* LaunchTemplateInstanceMarketOptions `object`: The market (purchasing) option for the instances.
  * MarketType
  * SpotOptions
    * BlockDurationMinutes
    * InstanceInterruptionBehavior
    * MaxPrice
    * SpotInstanceType
    * ValidUntil

### LaunchTemplateInstanceMarketOptionsRequest
* LaunchTemplateInstanceMarketOptionsRequest `object`: The market (purchasing) option for the instances.
  * MarketType
  * SpotOptions
    * BlockDurationMinutes
    * InstanceInterruptionBehavior
    * MaxPrice
    * SpotInstanceType
    * ValidUntil

### LaunchTemplateInstanceMetadataEndpointState
* LaunchTemplateInstanceMetadataEndpointState `string` (values: disabled, enabled)

### LaunchTemplateInstanceMetadataOptions
* LaunchTemplateInstanceMetadataOptions `object`: The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens
  * State

### LaunchTemplateInstanceMetadataOptionsRequest
* LaunchTemplateInstanceMetadataOptionsRequest `object`: The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens

### LaunchTemplateInstanceMetadataOptionsState
* LaunchTemplateInstanceMetadataOptionsState `string` (values: pending, applied)

### LaunchTemplateInstanceNetworkInterfaceSpecification
* LaunchTemplateInstanceNetworkInterfaceSpecification `object`: Describes a network interface.
  * AssociateCarrierIpAddress
  * AssociatePublicIpAddress
  * DeleteOnTermination
  * Description
  * DeviceIndex
  * Groups
    * items
  * InterfaceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * NetworkCardIndex
  * NetworkInterfaceId
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId

### LaunchTemplateInstanceNetworkInterfaceSpecificationList
* LaunchTemplateInstanceNetworkInterfaceSpecificationList `array`
  * items
    * AssociateCarrierIpAddress
    * AssociatePublicIpAddress
    * DeleteOnTermination
    * Description
    * DeviceIndex
    * Groups
      * items
    * InterfaceType
    * Ipv6AddressCount
    * Ipv6Addresses
      * items
        * Ipv6Address
    * NetworkCardIndex
    * NetworkInterfaceId
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Primary
        * PrivateIpAddress
    * SecondaryPrivateIpAddressCount
    * SubnetId

### LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
* LaunchTemplateInstanceNetworkInterfaceSpecificationRequest `object`: The parameters for a network interface.
  * AssociateCarrierIpAddress
  * AssociatePublicIpAddress
  * DeleteOnTermination
  * Description
  * DeviceIndex
  * Groups
    * items
  * InterfaceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * NetworkCardIndex
  * NetworkInterfaceId
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId

### LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList
* LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList `array`
  * items
    * AssociateCarrierIpAddress
    * AssociatePublicIpAddress
    * DeleteOnTermination
    * Description
    * DeviceIndex
    * Groups
      * items
    * InterfaceType
    * Ipv6AddressCount
    * Ipv6Addresses
      * items
        * Ipv6Address
    * NetworkCardIndex
    * NetworkInterfaceId
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Primary
        * PrivateIpAddress
    * SecondaryPrivateIpAddressCount
    * SubnetId

### LaunchTemplateLicenseConfiguration
* LaunchTemplateLicenseConfiguration `object`: Describes a license configuration.
  * LicenseConfigurationArn

### LaunchTemplateLicenseConfigurationRequest
* LaunchTemplateLicenseConfigurationRequest `object`: Describes a license configuration.
  * LicenseConfigurationArn

### LaunchTemplateLicenseList
* LaunchTemplateLicenseList `array`
  * items
    * LicenseConfigurationArn

### LaunchTemplateLicenseSpecificationListRequest
* LaunchTemplateLicenseSpecificationListRequest `array`
  * items
    * LicenseConfigurationArn

### LaunchTemplateName
* LaunchTemplateName `string`

### LaunchTemplateNameStringList
* LaunchTemplateNameStringList `array`
  * items

### LaunchTemplateOverrides
* LaunchTemplateOverrides `object`: Describes overrides for a launch template.
  * AvailabilityZone
  * InstanceType
  * Priority
  * SpotPrice
  * SubnetId
  * WeightedCapacity

### LaunchTemplateOverridesList
* LaunchTemplateOverridesList `array`
  * items
    * AvailabilityZone
    * InstanceType
    * Priority
    * SpotPrice
    * SubnetId
    * WeightedCapacity

### LaunchTemplatePlacement
* LaunchTemplatePlacement `object`: Describes the placement of an instance.
  * Affinity
  * AvailabilityZone
  * GroupName
  * HostId
  * HostResourceGroupArn
  * PartitionNumber
  * SpreadDomain
  * Tenancy

### LaunchTemplatePlacementRequest
* LaunchTemplatePlacementRequest `object`: Describes the placement of an instance.
  * Affinity
  * AvailabilityZone
  * GroupName
  * HostId
  * HostResourceGroupArn
  * PartitionNumber
  * SpreadDomain
  * Tenancy

### LaunchTemplateSet
* LaunchTemplateSet `array`
  * items
    * CreateTime
    * CreatedBy
    * DefaultVersionNumber
    * LatestVersionNumber
    * LaunchTemplateId
    * LaunchTemplateName
    * Tags
      * items
        * Key
        * Value

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: The launch template to use. You must specify either the launch template ID or launch template name in the request, but not both.
  * LaunchTemplateId
  * LaunchTemplateName
  * Version

### LaunchTemplateSpotMarketOptions
* LaunchTemplateSpotMarketOptions `object`: The options for Spot Instances.
  * BlockDurationMinutes
  * InstanceInterruptionBehavior
  * MaxPrice
  * SpotInstanceType
  * ValidUntil

### LaunchTemplateSpotMarketOptionsRequest
* LaunchTemplateSpotMarketOptionsRequest `object`: The options for Spot Instances.
  * BlockDurationMinutes
  * InstanceInterruptionBehavior
  * MaxPrice
  * SpotInstanceType
  * ValidUntil

### LaunchTemplateTagSpecification
* LaunchTemplateTagSpecification `object`: The tag specification for the launch template.
  * ResourceType
  * Tags
    * items
      * Key
      * Value

### LaunchTemplateTagSpecificationList
* LaunchTemplateTagSpecificationList `array`
  * items
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### LaunchTemplateTagSpecificationRequest
* LaunchTemplateTagSpecificationRequest `object`: The tags specification for the launch template.
  * ResourceType
  * Tags
    * items
      * Key
      * Value

### LaunchTemplateTagSpecificationRequestList
* LaunchTemplateTagSpecificationRequestList `array`
  * items
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### LaunchTemplateVersion
* LaunchTemplateVersion `object`: Describes a launch template version.
  * CreateTime
  * CreatedBy
  * DefaultVersion
  * LaunchTemplateData
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * CapacityReservationSpecification
      * CapacityReservationPreference
      * CapacityReservationTarget
        * CapacityReservationId
        * CapacityReservationResourceGroupArn
    * CpuOptions
      * CoreCount
      * ThreadsPerCore
    * CreditSpecification
      * CpuCredits
    * DisableApiTermination
    * EbsOptimized
    * ElasticGpuSpecifications
      * items
        * Type
    * ElasticInferenceAccelerators
      * items
        * Count
        * Type
    * EnclaveOptions
      * Enabled
    * HibernationOptions
      * Configured
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceInitiatedShutdownBehavior
    * InstanceMarketOptions
      * MarketType
      * SpotOptions
        * BlockDurationMinutes
        * InstanceInterruptionBehavior
        * MaxPrice
        * SpotInstanceType
        * ValidUntil
    * InstanceType
    * KernelId
    * KeyName
    * LicenseSpecifications
      * items
        * LicenseConfigurationArn
    * MetadataOptions
      * HttpEndpoint
      * HttpPutResponseHopLimit
      * HttpTokens
      * State
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * Affinity
      * AvailabilityZone
      * GroupName
      * HostId
      * HostResourceGroupArn
      * PartitionNumber
      * SpreadDomain
      * Tenancy
    * RamDiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * UserData
  * LaunchTemplateId
  * LaunchTemplateName
  * VersionDescription
  * VersionNumber

### LaunchTemplateVersionSet
* LaunchTemplateVersionSet `array`
  * items
    * CreateTime
    * CreatedBy
    * DefaultVersion
    * LaunchTemplateData
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
          * NoDevice
          * VirtualName
      * CapacityReservationSpecification
        * CapacityReservationPreference
        * CapacityReservationTarget
          * CapacityReservationId
          * CapacityReservationResourceGroupArn
      * CpuOptions
        * CoreCount
        * ThreadsPerCore
      * CreditSpecification
        * CpuCredits
      * DisableApiTermination
      * EbsOptimized
      * ElasticGpuSpecifications
        * items
          * Type
      * ElasticInferenceAccelerators
        * items
          * Count
          * Type
      * EnclaveOptions
        * Enabled
      * HibernationOptions
        * Configured
      * IamInstanceProfile
        * Arn
        * Name
      * ImageId
      * InstanceInitiatedShutdownBehavior
      * InstanceMarketOptions
        * MarketType
        * SpotOptions
          * BlockDurationMinutes
          * InstanceInterruptionBehavior
          * MaxPrice
          * SpotInstanceType
          * ValidUntil
      * InstanceType
      * KernelId
      * KeyName
      * LicenseSpecifications
        * items
          * LicenseConfigurationArn
      * MetadataOptions
        * HttpEndpoint
        * HttpPutResponseHopLimit
        * HttpTokens
        * State
      * Monitoring
        * Enabled
      * NetworkInterfaces
        * items
          * AssociateCarrierIpAddress
          * AssociatePublicIpAddress
          * DeleteOnTermination
          * Description
          * DeviceIndex
          * Groups
          * InterfaceType
          * Ipv6AddressCount
          * Ipv6Addresses
          * NetworkCardIndex
          * NetworkInterfaceId
          * PrivateIpAddress
          * PrivateIpAddresses
          * SecondaryPrivateIpAddressCount
          * SubnetId
      * Placement
        * Affinity
        * AvailabilityZone
        * GroupName
        * HostId
        * HostResourceGroupArn
        * PartitionNumber
        * SpreadDomain
        * Tenancy
      * RamDiskId
      * SecurityGroupIds
        * items
      * SecurityGroups
        * items
      * TagSpecifications
        * items
          * ResourceType
          * Tags
      * UserData
    * LaunchTemplateId
    * LaunchTemplateName
    * VersionDescription
    * VersionNumber

### LaunchTemplatesMonitoring
* LaunchTemplatesMonitoring `object`: Describes the monitoring for the instance.
  * Enabled

### LaunchTemplatesMonitoringRequest
* LaunchTemplatesMonitoringRequest `object`: Describes the monitoring for the instance.
  * Enabled

### LicenseConfiguration
* LicenseConfiguration `object`: Describes a license configuration.
  * LicenseConfigurationArn

### LicenseConfigurationRequest
* LicenseConfigurationRequest `object`: Describes a license configuration.
  * LicenseConfigurationArn

### LicenseList
* LicenseList `array`
  * items
    * LicenseConfigurationArn

### LicenseSpecificationListRequest
* LicenseSpecificationListRequest `array`
  * items
    * LicenseConfigurationArn

### ListingState
* ListingState `string` (values: available, sold, cancelled, pending)

### ListingStatus
* ListingStatus `string` (values: active, pending, cancelled, closed)

### LoadBalancersConfig
* LoadBalancersConfig `object`: Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
  * ClassicLoadBalancersConfig
    * ClassicLoadBalancers
      * items
        * Name
  * TargetGroupsConfig
    * TargetGroups
      * items
        * Arn

### LoadPermission
* LoadPermission `object`: Describes a load permission.
  * Group
  * UserId

### LoadPermissionList
* LoadPermissionList `array`
  * items
    * Group
    * UserId

### LoadPermissionListRequest
* LoadPermissionListRequest `array`
  * items
    * Group
    * UserId

### LoadPermissionModifications
* LoadPermissionModifications `object`: Describes modifications to the load permissions of an Amazon FPGA image (AFI).
  * Add
    * items
      * Group
      * UserId
  * Remove
    * items
      * Group
      * UserId

### LoadPermissionRequest
* LoadPermissionRequest `object`: Describes a load permission.
  * Group
  * UserId

### LocalGateway
* LocalGateway `object`: Describes a local gateway.
  * LocalGatewayId
  * OutpostArn
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value

### LocalGatewayId
* LocalGatewayId `string`

### LocalGatewayIdSet
* LocalGatewayIdSet `array`
  * items

### LocalGatewayMaxResults
* LocalGatewayMaxResults `integer`

### LocalGatewayRoute
* LocalGatewayRoute `object`: Describes a route for a local gateway route table.
  * DestinationCidrBlock
  * LocalGatewayRouteTableArn
  * LocalGatewayRouteTableId
  * LocalGatewayVirtualInterfaceGroupId
  * OwnerId
  * State
  * Type

### LocalGatewayRouteList
* LocalGatewayRouteList `array`
  * items
    * DestinationCidrBlock
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayVirtualInterfaceGroupId
    * OwnerId
    * State
    * Type

### LocalGatewayRouteState
* LocalGatewayRouteState `string` (values: pending, active, blackhole, deleting, deleted)

### LocalGatewayRouteTable
* LocalGatewayRouteTable `object`: Describes a local gateway route table.
  * LocalGatewayId
  * LocalGatewayRouteTableArn
  * LocalGatewayRouteTableId
  * OutpostArn
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value

### LocalGatewayRouteTableIdSet
* LocalGatewayRouteTableIdSet `array`
  * items

### LocalGatewayRouteTableSet
* LocalGatewayRouteTableSet `array`
  * items
    * LocalGatewayId
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * OutpostArn
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value

### LocalGatewayRouteTableVirtualInterfaceGroupAssociation
* LocalGatewayRouteTableVirtualInterfaceGroupAssociation `object`: Describes an association between a local gateway route table and a virtual interface group.
  * LocalGatewayId
  * LocalGatewayRouteTableArn
  * LocalGatewayRouteTableId
  * LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
  * LocalGatewayVirtualInterfaceGroupId
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value

### LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
* LocalGatewayRouteTableVirtualInterfaceGroupAssociationId `string`

### LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet
* LocalGatewayRouteTableVirtualInterfaceGroupAssociationIdSet `array`
  * items

### LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet
* LocalGatewayRouteTableVirtualInterfaceGroupAssociationSet `array`
  * items
    * LocalGatewayId
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
    * LocalGatewayVirtualInterfaceGroupId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value

### LocalGatewayRouteTableVpcAssociation
* LocalGatewayRouteTableVpcAssociation `object`: Describes an association between a local gateway route table and a VPC.
  * LocalGatewayId
  * LocalGatewayRouteTableArn
  * LocalGatewayRouteTableId
  * LocalGatewayRouteTableVpcAssociationId
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * VpcId

### LocalGatewayRouteTableVpcAssociationId
* LocalGatewayRouteTableVpcAssociationId `string`

### LocalGatewayRouteTableVpcAssociationIdSet
* LocalGatewayRouteTableVpcAssociationIdSet `array`
  * items

### LocalGatewayRouteTableVpcAssociationSet
* LocalGatewayRouteTableVpcAssociationSet `array`
  * items
    * LocalGatewayId
    * LocalGatewayRouteTableArn
    * LocalGatewayRouteTableId
    * LocalGatewayRouteTableVpcAssociationId
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### LocalGatewayRouteType
* LocalGatewayRouteType `string` (values: static, propagated)

### LocalGatewayRoutetableId
* LocalGatewayRoutetableId `string`

### LocalGatewaySet
* LocalGatewaySet `array`
  * items
    * LocalGatewayId
    * OutpostArn
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value

### LocalGatewayVirtualInterface
* LocalGatewayVirtualInterface `object`: Describes a local gateway virtual interface.
  * LocalAddress
  * LocalBgpAsn
  * LocalGatewayId
  * LocalGatewayVirtualInterfaceId
  * OwnerId
  * PeerAddress
  * PeerBgpAsn
  * Tags
    * items
      * Key
      * Value
  * Vlan

### LocalGatewayVirtualInterfaceGroup
* LocalGatewayVirtualInterfaceGroup `object`: Describes a local gateway virtual interface group.
  * LocalGatewayId
  * LocalGatewayVirtualInterfaceGroupId
  * LocalGatewayVirtualInterfaceIds
    * items
  * OwnerId
  * Tags
    * items
      * Key
      * Value

### LocalGatewayVirtualInterfaceGroupId
* LocalGatewayVirtualInterfaceGroupId `string`

### LocalGatewayVirtualInterfaceGroupIdSet
* LocalGatewayVirtualInterfaceGroupIdSet `array`
  * items

### LocalGatewayVirtualInterfaceGroupSet
* LocalGatewayVirtualInterfaceGroupSet `array`
  * items
    * LocalGatewayId
    * LocalGatewayVirtualInterfaceGroupId
    * LocalGatewayVirtualInterfaceIds
      * items
    * OwnerId
    * Tags
      * items
        * Key
        * Value

### LocalGatewayVirtualInterfaceId
* LocalGatewayVirtualInterfaceId `string`

### LocalGatewayVirtualInterfaceIdSet
* LocalGatewayVirtualInterfaceIdSet `array`
  * items

### LocalGatewayVirtualInterfaceSet
* LocalGatewayVirtualInterfaceSet `array`
  * items
    * LocalAddress
    * LocalBgpAsn
    * LocalGatewayId
    * LocalGatewayVirtualInterfaceId
    * OwnerId
    * PeerAddress
    * PeerBgpAsn
    * Tags
      * items
        * Key
        * Value
    * Vlan

### Location
* Location `string`

### LocationType
* LocationType `string` (values: region, availability-zone, availability-zone-id)

### LogDestinationType
* LogDestinationType `string` (values: cloud-watch-logs, s3)

### Long
* Long `integer`

### ManagedPrefixList
* ManagedPrefixList `object`: Describes a managed prefix list.
  * AddressFamily
  * MaxEntries
  * OwnerId
  * PrefixListArn
  * PrefixListId
  * PrefixListName
  * State
  * StateMessage
  * Tags
    * items
      * Key
      * Value
  * Version

### ManagedPrefixListSet
* ManagedPrefixListSet `array`
  * items
    * AddressFamily
    * MaxEntries
    * OwnerId
    * PrefixListArn
    * PrefixListId
    * PrefixListName
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * Version

### MarketType
* MarketType `string` (values: spot)

### MaxIpv4AddrPerInterface
* MaxIpv4AddrPerInterface `integer`

### MaxIpv6AddrPerInterface
* MaxIpv6AddrPerInterface `integer`

### MaxNetworkInterfaces
* MaxNetworkInterfaces `integer`

### MaxResults
* MaxResults `integer`

### MaximumBandwidthInMbps
* MaximumBandwidthInMbps `integer`

### MaximumIops
* MaximumIops `integer`

### MaximumNetworkCards
* MaximumNetworkCards `integer`

### MaximumThroughputInMBps
* MaximumThroughputInMBps `number`

### MembershipType
* MembershipType `string` (values: static, igmp)

### MemoryInfo
* MemoryInfo `object`: Describes the memory for the instance type.
  * SizeInMiB

### MemorySize
* MemorySize `integer`

### MillisecondDateTime
* MillisecondDateTime `string`

### ModifyAvailabilityZoneGroupRequest
* ModifyAvailabilityZoneGroupRequest `object`
  * DryRun
  * GroupName **required**
  * OptInStatus **required**

### ModifyAvailabilityZoneGroupResult
* ModifyAvailabilityZoneGroupResult `object`
  * Return

### ModifyAvailabilityZoneOptInStatus
* ModifyAvailabilityZoneOptInStatus `string` (values: opted-in, not-opted-in)

### ModifyCapacityReservationRequest
* ModifyCapacityReservationRequest `object`
  * CapacityReservationId **required**
  * DryRun
  * EndDate
  * EndDateType
  * InstanceCount

### ModifyCapacityReservationResult
* ModifyCapacityReservationResult `object`
  * Return

### ModifyClientVpnEndpointRequest
* ModifyClientVpnEndpointRequest `object`
  * ClientConnectOptions
    * Enabled
    * LambdaFunctionArn
  * ClientVpnEndpointId **required**
  * ConnectionLogOptions
    * CloudwatchLogGroup
    * CloudwatchLogStream
    * Enabled
  * Description
  * DnsServers
    * CustomDnsServers
      * items
    * Enabled
  * DryRun
  * SecurityGroupIds
    * items
  * SelfServicePortal
  * ServerCertificateArn
  * SplitTunnel
  * VpcId
  * VpnPort

### ModifyClientVpnEndpointResult
* ModifyClientVpnEndpointResult `object`
  * Return

### ModifyDefaultCreditSpecificationRequest
* ModifyDefaultCreditSpecificationRequest `object`
  * CpuCredits **required**
  * DryRun
  * InstanceFamily **required**

### ModifyDefaultCreditSpecificationResult
* ModifyDefaultCreditSpecificationResult `object`
  * InstanceFamilyCreditSpecification
    * CpuCredits
    * InstanceFamily

### ModifyEbsDefaultKmsKeyIdRequest
* ModifyEbsDefaultKmsKeyIdRequest `object`
  * DryRun
  * KmsKeyId **required**

### ModifyEbsDefaultKmsKeyIdResult
* ModifyEbsDefaultKmsKeyIdResult `object`
  * KmsKeyId

### ModifyFleetRequest
* ModifyFleetRequest `object`
  * DryRun
  * ExcessCapacityTerminationPolicy
  * FleetId **required**
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * MaxPrice
          * Placement
          * Priority
          * SubnetId
          * WeightedCapacity
  * TargetCapacitySpecification
    * DefaultTargetCapacityType
    * OnDemandTargetCapacity
    * SpotTargetCapacity
    * TotalTargetCapacity **required**

### ModifyFleetResult
* ModifyFleetResult `object`
  * Return

### ModifyFpgaImageAttributeRequest
* ModifyFpgaImageAttributeRequest `object`
  * Attribute
  * Description
  * DryRun
  * FpgaImageId **required**
  * LoadPermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * Name
  * OperationType
  * ProductCodes
    * items
  * UserGroups
    * items
  * UserIds
    * items

### ModifyFpgaImageAttributeResult
* ModifyFpgaImageAttributeResult `object`
  * FpgaImageAttribute
    * Description
    * FpgaImageId
    * LoadPermissions
      * items
        * Group
        * UserId
    * Name
    * ProductCodes
      * items
        * ProductCodeId
        * ProductCodeType

### ModifyHostsRequest
* ModifyHostsRequest `object`
  * AutoPlacement
  * HostIds **required**
    * items
  * HostRecovery
  * InstanceFamily
  * InstanceType

### ModifyHostsResult
* ModifyHostsResult `object`
  * Successful
    * items
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### ModifyIdFormatRequest
* ModifyIdFormatRequest `object`
  * Resource **required**
  * UseLongIds **required**

### ModifyIdentityIdFormatRequest
* ModifyIdentityIdFormatRequest `object`
  * PrincipalArn **required**
  * Resource **required**
  * UseLongIds **required**

### ModifyImageAttributeRequest
* ModifyImageAttributeRequest `object`: Contains the parameters for ModifyImageAttribute.
  * Attribute
  * Description
    * Value
  * DryRun
  * ImageId **required**
  * LaunchPermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * OperationType
  * ProductCodes
    * items
  * UserGroups
    * items
  * UserIds
    * items
  * Value

### ModifyInstanceAttributeRequest
* ModifyInstanceAttributeRequest `object`
  * Attribute
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * VolumeId
      * NoDevice
      * VirtualName
  * DisableApiTermination
    * Value
  * DryRun
  * EbsOptimized
    * Value
  * EnaSupport
    * Value
  * Groups
    * items
  * InstanceId **required**
  * InstanceInitiatedShutdownBehavior
    * Value
  * InstanceType
    * Value
  * Kernel
    * Value
  * Ramdisk
    * Value
  * SourceDestCheck
    * Value
  * SriovNetSupport
    * Value
  * UserData
    * Value
  * Value

### ModifyInstanceCapacityReservationAttributesRequest
* ModifyInstanceCapacityReservationAttributesRequest `object`
  * CapacityReservationSpecification **required**
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * DryRun
  * InstanceId **required**

### ModifyInstanceCapacityReservationAttributesResult
* ModifyInstanceCapacityReservationAttributesResult `object`
  * Return

### ModifyInstanceCreditSpecificationRequest
* ModifyInstanceCreditSpecificationRequest `object`
  * ClientToken
  * DryRun
  * InstanceCreditSpecifications **required**
    * items
      * CpuCredits
      * InstanceId

### ModifyInstanceCreditSpecificationResult
* ModifyInstanceCreditSpecificationResult `object`
  * SuccessfulInstanceCreditSpecifications
    * items
      * InstanceId
  * UnsuccessfulInstanceCreditSpecifications
    * items
      * Error
        * Code
        * Message
      * InstanceId

### ModifyInstanceEventStartTimeRequest
* ModifyInstanceEventStartTimeRequest `object`
  * DryRun
  * InstanceEventId **required**
  * InstanceId **required**
  * NotBefore **required**

### ModifyInstanceEventStartTimeResult
* ModifyInstanceEventStartTimeResult `object`
  * Event
    * Code
    * Description
    * InstanceEventId
    * NotAfter
    * NotBefore
    * NotBeforeDeadline

### ModifyInstanceMetadataOptionsRequest
* ModifyInstanceMetadataOptionsRequest `object`
  * DryRun
  * HttpEndpoint
  * HttpPutResponseHopLimit
  * HttpTokens
  * InstanceId **required**

### ModifyInstanceMetadataOptionsResult
* ModifyInstanceMetadataOptionsResult `object`
  * InstanceId
  * InstanceMetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
    * State

### ModifyInstancePlacementRequest
* ModifyInstancePlacementRequest `object`
  * Affinity
  * GroupName
  * HostId
  * HostResourceGroupArn
  * InstanceId **required**
  * PartitionNumber
  * Tenancy

### ModifyInstancePlacementResult
* ModifyInstancePlacementResult `object`
  * Return

### ModifyLaunchTemplateRequest
* ModifyLaunchTemplateRequest `object`
  * ClientToken
  * DefaultVersion
  * DryRun
  * LaunchTemplateId
  * LaunchTemplateName

### ModifyLaunchTemplateResult
* ModifyLaunchTemplateResult `object`
  * LaunchTemplate
    * CreateTime
    * CreatedBy
    * DefaultVersionNumber
    * LatestVersionNumber
    * LaunchTemplateId
    * LaunchTemplateName
    * Tags
      * items
        * Key
        * Value

### ModifyManagedPrefixListRequest
* ModifyManagedPrefixListRequest `object`
  * AddEntries
    * items [AddPrefixListEntry](#addprefixlistentry)
  * CurrentVersion
  * DryRun
  * PrefixListId **required**
  * PrefixListName
  * RemoveEntries
    * items [RemovePrefixListEntry](#removeprefixlistentry)

### ModifyManagedPrefixListResult
* ModifyManagedPrefixListResult `object`
  * PrefixList
    * AddressFamily
    * MaxEntries
    * OwnerId
    * PrefixListArn
    * PrefixListId
    * PrefixListName
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * Version

### ModifyNetworkInterfaceAttributeRequest
* ModifyNetworkInterfaceAttributeRequest `object`: Contains the parameters for ModifyNetworkInterfaceAttribute.
  * Attachment
    * AttachmentId
    * DeleteOnTermination
  * Description
    * Value
  * DryRun
  * Groups
    * items
  * NetworkInterfaceId **required**
  * SourceDestCheck
    * Value

### ModifyReservedInstancesRequest
* ModifyReservedInstancesRequest `object`: Contains the parameters for ModifyReservedInstances.
  * ClientToken
  * ReservedInstancesIds **required**
    * items
  * TargetConfigurations **required**
    * items
      * AvailabilityZone
      * InstanceCount
      * InstanceType
      * Platform
      * Scope

### ModifyReservedInstancesResult
* ModifyReservedInstancesResult `object`: Contains the output of ModifyReservedInstances.
  * ReservedInstancesModificationId

### ModifySnapshotAttributeRequest
* ModifySnapshotAttributeRequest `object`
  * Attribute
  * CreateVolumePermission
    * Add
      * items
        * Group
        * UserId
    * Remove
      * items
        * Group
        * UserId
  * DryRun
  * GroupNames
    * items
  * OperationType
  * SnapshotId **required**
  * UserIds
    * items

### ModifySpotFleetRequestRequest
* ModifySpotFleetRequestRequest `object`: Contains the parameters for ModifySpotFleetRequest.
  * ExcessCapacityTerminationPolicy
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * Priority
          * SpotPrice
          * SubnetId
          * WeightedCapacity
  * OnDemandTargetCapacity
  * SpotFleetRequestId **required**
  * TargetCapacity

### ModifySpotFleetRequestResponse
* ModifySpotFleetRequestResponse `object`: Contains the output of ModifySpotFleetRequest.
  * Return

### ModifySubnetAttributeRequest
* ModifySubnetAttributeRequest `object`
  * AssignIpv6AddressOnCreation
    * Value
  * CustomerOwnedIpv4Pool
  * MapCustomerOwnedIpOnLaunch
    * Value
  * MapPublicIpOnLaunch
    * Value
  * SubnetId **required**

### ModifyTrafficMirrorFilterNetworkServicesRequest
* ModifyTrafficMirrorFilterNetworkServicesRequest `object`
  * AddNetworkServices
    * items
  * DryRun
  * RemoveNetworkServices
    * items
  * TrafficMirrorFilterId **required**

### ModifyTrafficMirrorFilterNetworkServicesResult
* ModifyTrafficMirrorFilterNetworkServicesResult `object`
  * TrafficMirrorFilter
    * Description
    * EgressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * IngressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * NetworkServices
      * items
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId

### ModifyTrafficMirrorFilterRuleRequest
* ModifyTrafficMirrorFilterRuleRequest `object`
  * Description
  * DestinationCidrBlock
  * DestinationPortRange
    * FromPort
    * ToPort
  * DryRun
  * Protocol
  * RemoveFields
    * items [TrafficMirrorFilterRuleField](#trafficmirrorfilterrulefield)
  * RuleAction
  * RuleNumber
  * SourceCidrBlock
  * SourcePortRange
    * FromPort
    * ToPort
  * TrafficDirection
  * TrafficMirrorFilterRuleId **required**

### ModifyTrafficMirrorFilterRuleResult
* ModifyTrafficMirrorFilterRuleResult `object`
  * TrafficMirrorFilterRule
    * Description
    * DestinationCidrBlock
    * DestinationPortRange
      * FromPort
      * ToPort
    * Protocol
    * RuleAction
    * RuleNumber
    * SourceCidrBlock
    * SourcePortRange
      * FromPort
      * ToPort
    * TrafficDirection
    * TrafficMirrorFilterId
    * TrafficMirrorFilterRuleId

### ModifyTrafficMirrorSessionRequest
* ModifyTrafficMirrorSessionRequest `object`
  * Description
  * DryRun
  * PacketLength
  * RemoveFields
    * items [TrafficMirrorSessionField](#trafficmirrorsessionfield)
  * SessionNumber
  * TrafficMirrorFilterId
  * TrafficMirrorSessionId **required**
  * TrafficMirrorTargetId
  * VirtualNetworkId

### ModifyTrafficMirrorSessionResult
* ModifyTrafficMirrorSessionResult `object`
  * TrafficMirrorSession
    * Description
    * NetworkInterfaceId
    * OwnerId
    * PacketLength
    * SessionNumber
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId
    * TrafficMirrorSessionId
    * TrafficMirrorTargetId
    * VirtualNetworkId

### ModifyTransitGatewayOptions
* ModifyTransitGatewayOptions `object`: The transit gateway options.
  * AddTransitGatewayCidrBlocks
    * items
  * AssociationDefaultRouteTableId
  * AutoAcceptSharedAttachments
  * DefaultRouteTableAssociation
  * DefaultRouteTablePropagation
  * DnsSupport
  * PropagationDefaultRouteTableId
  * RemoveTransitGatewayCidrBlocks
    * items
  * VpnEcmpSupport

### ModifyTransitGatewayPrefixListReferenceRequest
* ModifyTransitGatewayPrefixListReferenceRequest `object`
  * Blackhole
  * DryRun
  * PrefixListId **required**
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

### ModifyTransitGatewayPrefixListReferenceResult
* ModifyTransitGatewayPrefixListReferenceResult `object`
  * TransitGatewayPrefixListReference
    * Blackhole
    * PrefixListId
    * PrefixListOwnerId
    * State
    * TransitGatewayAttachment
      * ResourceId
      * ResourceType
      * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### ModifyTransitGatewayRequest
* ModifyTransitGatewayRequest `object`
  * Description
  * DryRun
  * Options
    * AddTransitGatewayCidrBlocks
      * items
    * AssociationDefaultRouteTableId
    * AutoAcceptSharedAttachments
    * DefaultRouteTableAssociation
    * DefaultRouteTablePropagation
    * DnsSupport
    * PropagationDefaultRouteTableId
    * RemoveTransitGatewayCidrBlocks
      * items
    * VpnEcmpSupport
  * TransitGatewayId **required**

### ModifyTransitGatewayResult
* ModifyTransitGatewayResult `object`
  * TransitGateway
    * CreationTime
    * Description
    * Options
      * AmazonSideAsn
      * AssociationDefaultRouteTableId
      * AutoAcceptSharedAttachments
      * DefaultRouteTableAssociation
      * DefaultRouteTablePropagation
      * DnsSupport
      * MulticastSupport
      * PropagationDefaultRouteTableId
      * TransitGatewayCidrBlocks
        * items
      * VpnEcmpSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayArn
    * TransitGatewayId

### ModifyTransitGatewayVpcAttachmentRequest
* ModifyTransitGatewayVpcAttachmentRequest `object`
  * AddSubnetIds
    * items
  * DryRun
  * Options
    * ApplianceModeSupport
    * DnsSupport
    * Ipv6Support
  * RemoveSubnetIds
    * items
  * TransitGatewayAttachmentId **required**

### ModifyTransitGatewayVpcAttachmentRequestOptions
* ModifyTransitGatewayVpcAttachmentRequestOptions `object`: Describes the options for a VPC attachment.
  * ApplianceModeSupport
  * DnsSupport
  * Ipv6Support

### ModifyTransitGatewayVpcAttachmentResult
* ModifyTransitGatewayVpcAttachmentResult `object`
  * TransitGatewayVpcAttachment
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### ModifyVolumeAttributeRequest
* ModifyVolumeAttributeRequest `object`
  * AutoEnableIO
    * Value
  * DryRun
  * VolumeId **required**

### ModifyVolumeRequest
* ModifyVolumeRequest `object`
  * DryRun
  * Iops
  * MultiAttachEnabled
  * Size
  * Throughput
  * VolumeId **required**
  * VolumeType

### ModifyVolumeResult
* ModifyVolumeResult `object`
  * VolumeModification
    * EndTime
    * ModificationState
    * OriginalIops
    * OriginalMultiAttachEnabled
    * OriginalSize
    * OriginalThroughput
    * OriginalVolumeType
    * Progress
    * StartTime
    * StatusMessage
    * TargetIops
    * TargetMultiAttachEnabled
    * TargetSize
    * TargetThroughput
    * TargetVolumeType
    * VolumeId

### ModifyVpcAttributeRequest
* ModifyVpcAttributeRequest `object`
  * EnableDnsHostnames
    * Value
  * EnableDnsSupport
    * Value
  * VpcId **required**

### ModifyVpcEndpointConnectionNotificationRequest
* ModifyVpcEndpointConnectionNotificationRequest `object`
  * ConnectionEvents
    * items
  * ConnectionNotificationArn
  * ConnectionNotificationId **required**
  * DryRun

### ModifyVpcEndpointConnectionNotificationResult
* ModifyVpcEndpointConnectionNotificationResult `object`
  * ReturnValue

### ModifyVpcEndpointRequest
* ModifyVpcEndpointRequest `object`: Contains the parameters for ModifyVpcEndpoint.
  * AddRouteTableIds
    * items
  * AddSecurityGroupIds
    * items
  * AddSubnetIds
    * items
  * DryRun
  * PolicyDocument
  * PrivateDnsEnabled
  * RemoveRouteTableIds
    * items
  * RemoveSecurityGroupIds
    * items
  * RemoveSubnetIds
    * items
  * ResetPolicy
  * VpcEndpointId **required**

### ModifyVpcEndpointResult
* ModifyVpcEndpointResult `object`
  * Return

### ModifyVpcEndpointServiceConfigurationRequest
* ModifyVpcEndpointServiceConfigurationRequest `object`
  * AcceptanceRequired
  * AddGatewayLoadBalancerArns
    * items
  * AddNetworkLoadBalancerArns
    * items
  * DryRun
  * PrivateDnsName
  * RemoveGatewayLoadBalancerArns
    * items
  * RemoveNetworkLoadBalancerArns
    * items
  * RemovePrivateDnsName
  * ServiceId **required**

### ModifyVpcEndpointServiceConfigurationResult
* ModifyVpcEndpointServiceConfigurationResult `object`
  * Return

### ModifyVpcEndpointServicePermissionsRequest
* ModifyVpcEndpointServicePermissionsRequest `object`
  * AddAllowedPrincipals
    * items
  * DryRun
  * RemoveAllowedPrincipals
    * items
  * ServiceId **required**

### ModifyVpcEndpointServicePermissionsResult
* ModifyVpcEndpointServicePermissionsResult `object`
  * ReturnValue

### ModifyVpcPeeringConnectionOptionsRequest
* ModifyVpcPeeringConnectionOptionsRequest `object`
  * AccepterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * DryRun
  * RequesterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * VpcPeeringConnectionId **required**

### ModifyVpcPeeringConnectionOptionsResult
* ModifyVpcPeeringConnectionOptionsResult `object`
  * AccepterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * RequesterPeeringConnectionOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink

### ModifyVpcTenancyRequest
* ModifyVpcTenancyRequest `object`
  * DryRun
  * InstanceTenancy **required**
  * VpcId **required**

### ModifyVpcTenancyResult
* ModifyVpcTenancyResult `object`
  * ReturnValue

### ModifyVpnConnectionOptionsRequest
* ModifyVpnConnectionOptionsRequest `object`
  * DryRun
  * LocalIpv4NetworkCidr
  * LocalIpv6NetworkCidr
  * RemoteIpv4NetworkCidr
  * RemoteIpv6NetworkCidr
  * VpnConnectionId **required**

### ModifyVpnConnectionOptionsResult
* ModifyVpnConnectionOptionsResult `object`
  * VpnConnection
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### ModifyVpnConnectionRequest
* ModifyVpnConnectionRequest `object`
  * CustomerGatewayId
  * DryRun
  * TransitGatewayId
  * VpnConnectionId **required**
  * VpnGatewayId

### ModifyVpnConnectionResult
* ModifyVpnConnectionResult `object`
  * VpnConnection
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### ModifyVpnTunnelCertificateRequest
* ModifyVpnTunnelCertificateRequest `object`
  * DryRun
  * VpnConnectionId **required**
  * VpnTunnelOutsideIpAddress **required**

### ModifyVpnTunnelCertificateResult
* ModifyVpnTunnelCertificateResult `object`
  * VpnConnection
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### ModifyVpnTunnelOptionsRequest
* ModifyVpnTunnelOptionsRequest `object`
  * DryRun
  * TunnelOptions **required**
    * DPDTimeoutAction
    * DPDTimeoutSeconds
    * IKEVersions
      * items
        * Value
    * Phase1DHGroupNumbers
      * items
        * Value
    * Phase1EncryptionAlgorithms
      * items
        * Value
    * Phase1IntegrityAlgorithms
      * items
        * Value
    * Phase1LifetimeSeconds
    * Phase2DHGroupNumbers
      * items
        * Value
    * Phase2EncryptionAlgorithms
      * items
        * Value
    * Phase2IntegrityAlgorithms
      * items
        * Value
    * Phase2LifetimeSeconds
    * PreSharedKey
    * RekeyFuzzPercentage
    * RekeyMarginTimeSeconds
    * ReplayWindowSize
    * StartupAction
    * TunnelInsideCidr
    * TunnelInsideIpv6Cidr
  * VpnConnectionId **required**
  * VpnTunnelOutsideIpAddress **required**

### ModifyVpnTunnelOptionsResult
* ModifyVpnTunnelOptionsResult `object`
  * VpnConnection
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### ModifyVpnTunnelOptionsSpecification
* ModifyVpnTunnelOptionsSpecification `object`: The AWS Site-to-Site VPN tunnel options to modify.
  * DPDTimeoutAction
  * DPDTimeoutSeconds
  * IKEVersions
    * items
      * Value
  * Phase1DHGroupNumbers
    * items
      * Value
  * Phase1EncryptionAlgorithms
    * items
      * Value
  * Phase1IntegrityAlgorithms
    * items
      * Value
  * Phase1LifetimeSeconds
  * Phase2DHGroupNumbers
    * items
      * Value
  * Phase2EncryptionAlgorithms
    * items
      * Value
  * Phase2IntegrityAlgorithms
    * items
      * Value
  * Phase2LifetimeSeconds
  * PreSharedKey
  * RekeyFuzzPercentage
  * RekeyMarginTimeSeconds
  * ReplayWindowSize
  * StartupAction
  * TunnelInsideCidr
  * TunnelInsideIpv6Cidr

### MonitorInstancesRequest
* MonitorInstancesRequest `object`
  * DryRun
  * InstanceIds **required**
    * items

### MonitorInstancesResult
* MonitorInstancesResult `object`
  * InstanceMonitorings
    * items
      * InstanceId
      * Monitoring
        * State

### Monitoring
* Monitoring `object`: Describes the monitoring of an instance.
  * State

### MonitoringState
* MonitoringState `string` (values: disabled, disabling, enabled, pending)

### MoveAddressToVpcRequest
* MoveAddressToVpcRequest `object`
  * DryRun
  * PublicIp **required**

### MoveAddressToVpcResult
* MoveAddressToVpcResult `object`
  * AllocationId
  * Status

### MoveStatus
* MoveStatus `string` (values: movingToVpc, restoringToClassic)

### MovingAddressStatus
* MovingAddressStatus `object`: Describes the status of a moving Elastic IP address.
  * MoveStatus
  * PublicIp

### MovingAddressStatusSet
* MovingAddressStatusSet `array`
  * items
    * MoveStatus
    * PublicIp

### MulticastSupportValue
* MulticastSupportValue `string` (values: enable, disable)

### NatGateway
* NatGateway `object`: Describes a NAT gateway.
  * CreateTime
  * DeleteTime
  * FailureCode
  * FailureMessage
  * NatGatewayAddresses
    * items
      * AllocationId
      * NetworkInterfaceId
      * PrivateIp
      * PublicIp
  * NatGatewayId
  * ProvisionedBandwidth
    * ProvisionTime
    * Provisioned
    * RequestTime
    * Requested
    * Status
  * State
  * SubnetId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### NatGatewayAddress
* NatGatewayAddress `object`: Describes the IP addresses and network interface associated with a NAT gateway.
  * AllocationId
  * NetworkInterfaceId
  * PrivateIp
  * PublicIp

### NatGatewayAddressList
* NatGatewayAddressList `array`
  * items
    * AllocationId
    * NetworkInterfaceId
    * PrivateIp
    * PublicIp

### NatGatewayId
* NatGatewayId `string`

### NatGatewayIdStringList
* NatGatewayIdStringList `array`
  * items

### NatGatewayList
* NatGatewayList `array`
  * items
    * CreateTime
    * DeleteTime
    * FailureCode
    * FailureMessage
    * NatGatewayAddresses
      * items
        * AllocationId
        * NetworkInterfaceId
        * PrivateIp
        * PublicIp
    * NatGatewayId
    * ProvisionedBandwidth
      * ProvisionTime
      * Provisioned
      * RequestTime
      * Requested
      * Status
    * State
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### NatGatewayState
* NatGatewayState `string` (values: pending, failed, available, deleting, deleted)

### NetworkAcl
* NetworkAcl `object`: Describes a network ACL.
  * Associations
    * items
      * NetworkAclAssociationId
      * NetworkAclId
      * SubnetId
  * Entries
    * items
      * CidrBlock
      * Egress
      * IcmpTypeCode
        * Code
        * Type
      * Ipv6CidrBlock
      * PortRange
        * From
        * To
      * Protocol
      * RuleAction
      * RuleNumber
  * IsDefault
  * NetworkAclId
  * OwnerId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### NetworkAclAssociation
* NetworkAclAssociation `object`: Describes an association between a network ACL and a subnet.
  * NetworkAclAssociationId
  * NetworkAclId
  * SubnetId

### NetworkAclAssociationId
* NetworkAclAssociationId `string`

### NetworkAclAssociationList
* NetworkAclAssociationList `array`
  * items
    * NetworkAclAssociationId
    * NetworkAclId
    * SubnetId

### NetworkAclEntry
* NetworkAclEntry `object`: Describes an entry in a network ACL.
  * CidrBlock
  * Egress
  * IcmpTypeCode
    * Code
    * Type
  * Ipv6CidrBlock
  * PortRange
    * From
    * To
  * Protocol
  * RuleAction
  * RuleNumber

### NetworkAclEntryList
* NetworkAclEntryList `array`
  * items
    * CidrBlock
    * Egress
    * IcmpTypeCode
      * Code
      * Type
    * Ipv6CidrBlock
    * PortRange
      * From
      * To
    * Protocol
    * RuleAction
    * RuleNumber

### NetworkAclId
* NetworkAclId `string`

### NetworkAclIdStringList
* NetworkAclIdStringList `array`
  * items

### NetworkAclList
* NetworkAclList `array`
  * items
    * Associations
      * items
        * NetworkAclAssociationId
        * NetworkAclId
        * SubnetId
    * Entries
      * items
        * CidrBlock
        * Egress
        * IcmpTypeCode
          * Code
          * Type
        * Ipv6CidrBlock
        * PortRange
          * From
          * To
        * Protocol
        * RuleAction
        * RuleNumber
    * IsDefault
    * NetworkAclId
    * OwnerId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### NetworkCardIndex
* NetworkCardIndex `integer`

### NetworkCardInfo
* NetworkCardInfo `object`: Describes the network card support of the instance type.
  * MaximumNetworkInterfaces
  * NetworkCardIndex
  * NetworkPerformance

### NetworkCardInfoList
* NetworkCardInfoList `array`
  * items
    * MaximumNetworkInterfaces
    * NetworkCardIndex
    * NetworkPerformance

### NetworkInfo
* NetworkInfo `object`: Describes the networking features of the instance type.
  * DefaultNetworkCardIndex
  * EfaSupported
  * EnaSupport
  * Ipv4AddressesPerInterface
  * Ipv6AddressesPerInterface
  * Ipv6Supported
  * MaximumNetworkCards
  * MaximumNetworkInterfaces
  * NetworkCards
    * items
      * MaximumNetworkInterfaces
      * NetworkCardIndex
      * NetworkPerformance
  * NetworkPerformance

### NetworkInsightsAnalysis
* NetworkInsightsAnalysis `object`: Describes a network insights analysis.
  * AlternatePathHints
    * items
      * ComponentArn
      * ComponentId
  * Explanations
    * items
      * Acl
        * Arn
        * Id
      * AclRule
        * Cidr
        * Egress
        * PortRange
          * From
          * To
        * Protocol
        * RuleAction
        * RuleNumber
      * Address
      * Addresses
        * items
      * AttachedTo
        * Arn
        * Id
      * AvailabilityZones
        * items
      * Cidrs
        * items
      * ClassicLoadBalancerListener
        * InstancePort
        * LoadBalancerPort
      * Component
        * Arn
        * Id
      * CustomerGateway
        * Arn
        * Id
      * Destination
        * Arn
        * Id
      * DestinationVpc
        * Arn
        * Id
      * Direction
      * ElasticLoadBalancerListener
        * Arn
        * Id
      * ExplanationCode
      * IngressRouteTable
        * Arn
        * Id
      * InternetGateway
        * Arn
        * Id
      * LoadBalancerArn
      * LoadBalancerListenerPort
      * LoadBalancerTarget
        * Address
        * AvailabilityZone
        * Instance
          * Arn
          * Id
        * Port
      * LoadBalancerTargetGroup
        * Arn
        * Id
      * LoadBalancerTargetGroups
        * items
          * Arn
          * Id
      * LoadBalancerTargetPort
      * MissingComponent
      * NatGateway
        * Arn
        * Id
      * NetworkInterface
        * Arn
        * Id
      * PacketField
      * Port
      * PortRanges
        * items
          * From
          * To
      * PrefixList
        * Arn
        * Id
      * Protocols
        * items
      * RouteTable
        * Arn
        * Id
      * RouteTableRoute
        * DestinationCidr
        * DestinationPrefixListId
        * EgressOnlyInternetGatewayId
        * GatewayId
        * InstanceId
        * NatGatewayId
        * NetworkInterfaceId
        * Origin
        * TransitGatewayId
        * VpcPeeringConnectionId
      * SecurityGroup
        * Arn
        * Id
      * SecurityGroupRule
        * Cidr
        * Direction
        * PortRange
          * From
          * To
        * PrefixListId
        * Protocol
        * SecurityGroupId
      * SecurityGroups
        * items
          * Arn
          * Id
      * SourceVpc
        * Arn
        * Id
      * State
      * Subnet
        * Arn
        * Id
      * SubnetRouteTable
        * Arn
        * Id
      * Vpc
        * Arn
        * Id
      * VpcEndpoint
        * Arn
        * Id
      * VpcPeeringConnection
        * Arn
        * Id
      * VpnConnection
        * Arn
        * Id
      * VpnGateway
        * Arn
        * Id
  * FilterInArns
    * items
  * ForwardPathComponents
    * items
      * AclRule
        * Cidr
        * Egress
        * PortRange
          * From
          * To
        * Protocol
        * RuleAction
        * RuleNumber
      * Component
        * Arn
        * Id
      * DestinationVpc
        * Arn
        * Id
      * InboundHeader
        * DestinationAddresses
          * items
        * DestinationPortRanges
          * items
        * Protocol
        * SourceAddresses
          * items
        * SourcePortRanges
          * items
      * OutboundHeader
        * DestinationAddresses
          * items
        * DestinationPortRanges
          * items
        * Protocol
        * SourceAddresses
          * items
        * SourcePortRanges
          * items
      * RouteTableRoute
        * DestinationCidr
        * DestinationPrefixListId
        * EgressOnlyInternetGatewayId
        * GatewayId
        * InstanceId
        * NatGatewayId
        * NetworkInterfaceId
        * Origin
        * TransitGatewayId
        * VpcPeeringConnectionId
      * SecurityGroupRule
        * Cidr
        * Direction
        * PortRange
          * From
          * To
        * PrefixListId
        * Protocol
        * SecurityGroupId
      * SequenceNumber
      * SourceVpc
        * Arn
        * Id
      * Subnet
        * Arn
        * Id
      * Vpc
        * Arn
        * Id
  * NetworkInsightsAnalysisArn
  * NetworkInsightsAnalysisId
  * NetworkInsightsPathId
  * NetworkPathFound
  * ReturnPathComponents
    * items
      * AclRule
        * Cidr
        * Egress
        * PortRange
          * From
          * To
        * Protocol
        * RuleAction
        * RuleNumber
      * Component
        * Arn
        * Id
      * DestinationVpc
        * Arn
        * Id
      * InboundHeader
        * DestinationAddresses
          * items
        * DestinationPortRanges
          * items
        * Protocol
        * SourceAddresses
          * items
        * SourcePortRanges
          * items
      * OutboundHeader
        * DestinationAddresses
          * items
        * DestinationPortRanges
          * items
        * Protocol
        * SourceAddresses
          * items
        * SourcePortRanges
          * items
      * RouteTableRoute
        * DestinationCidr
        * DestinationPrefixListId
        * EgressOnlyInternetGatewayId
        * GatewayId
        * InstanceId
        * NatGatewayId
        * NetworkInterfaceId
        * Origin
        * TransitGatewayId
        * VpcPeeringConnectionId
      * SecurityGroupRule
        * Cidr
        * Direction
        * PortRange
          * From
          * To
        * PrefixListId
        * Protocol
        * SecurityGroupId
      * SequenceNumber
      * SourceVpc
        * Arn
        * Id
      * Subnet
        * Arn
        * Id
      * Vpc
        * Arn
        * Id
  * StartDate
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value

### NetworkInsightsAnalysisId
* NetworkInsightsAnalysisId `string`

### NetworkInsightsAnalysisIdList
* NetworkInsightsAnalysisIdList `array`
  * items

### NetworkInsightsAnalysisList
* NetworkInsightsAnalysisList `array`
  * items
    * AlternatePathHints
      * items
        * ComponentArn
        * ComponentId
    * Explanations
      * items
        * Acl
          * Arn
          * Id
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Address
        * Addresses
          * items
        * AttachedTo
          * Arn
          * Id
        * AvailabilityZones
          * items
        * Cidrs
          * items
        * ClassicLoadBalancerListener
          * InstancePort
          * LoadBalancerPort
        * Component
          * Arn
          * Id
        * CustomerGateway
          * Arn
          * Id
        * Destination
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * Direction
        * ElasticLoadBalancerListener
          * Arn
          * Id
        * ExplanationCode
        * IngressRouteTable
          * Arn
          * Id
        * InternetGateway
          * Arn
          * Id
        * LoadBalancerArn
        * LoadBalancerListenerPort
        * LoadBalancerTarget
          * Address
          * AvailabilityZone
          * Instance
          * Port
        * LoadBalancerTargetGroup
          * Arn
          * Id
        * LoadBalancerTargetGroups
          * items
        * LoadBalancerTargetPort
        * MissingComponent
        * NatGateway
          * Arn
          * Id
        * NetworkInterface
          * Arn
          * Id
        * PacketField
        * Port
        * PortRanges
          * items
        * PrefixList
          * Arn
          * Id
        * Protocols
          * items
        * RouteTable
          * Arn
          * Id
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroup
          * Arn
          * Id
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SecurityGroups
          * items
        * SourceVpc
          * Arn
          * Id
        * State
        * Subnet
          * Arn
          * Id
        * SubnetRouteTable
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
        * VpcEndpoint
          * Arn
          * Id
        * VpcPeeringConnection
          * Arn
          * Id
        * VpnConnection
          * Arn
          * Id
        * VpnGateway
          * Arn
          * Id
    * FilterInArns
      * items
    * ForwardPathComponents
      * items
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Component
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * InboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * OutboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SequenceNumber
        * SourceVpc
          * Arn
          * Id
        * Subnet
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
    * NetworkInsightsAnalysisArn
    * NetworkInsightsAnalysisId
    * NetworkInsightsPathId
    * NetworkPathFound
    * ReturnPathComponents
      * items
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Component
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * InboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * OutboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SequenceNumber
        * SourceVpc
          * Arn
          * Id
        * Subnet
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
    * StartDate
    * Status
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### NetworkInsightsMaxResults
* NetworkInsightsMaxResults `integer`

### NetworkInsightsPath
* NetworkInsightsPath `object`: Describes a path.
  * CreatedDate
  * Destination
  * DestinationIp
  * DestinationPort
  * NetworkInsightsPathArn
  * NetworkInsightsPathId
  * Protocol
  * Source
  * SourceIp
  * Tags
    * items
      * Key
      * Value

### NetworkInsightsPathId
* NetworkInsightsPathId `string`

### NetworkInsightsPathIdList
* NetworkInsightsPathIdList `array`
  * items

### NetworkInsightsPathList
* NetworkInsightsPathList `array`
  * items
    * CreatedDate
    * Destination
    * DestinationIp
    * DestinationPort
    * NetworkInsightsPathArn
    * NetworkInsightsPathId
    * Protocol
    * Source
    * SourceIp
    * Tags
      * items
        * Key
        * Value

### NetworkInterface
* NetworkInterface `object`: Describes a network interface.
  * Association
    * AllocationId
    * AssociationId
    * CarrierIp
    * CustomerOwnedIp
    * IpOwnerId
    * PublicDnsName
    * PublicIp
  * Attachment
    * AttachTime
    * AttachmentId
    * DeleteOnTermination
    * DeviceIndex
    * InstanceId
    * InstanceOwnerId
    * NetworkCardIndex
    * Status
  * AvailabilityZone
  * Description
  * Groups
    * items
      * GroupId
      * GroupName
  * InterfaceType
  * Ipv6Addresses
    * items
      * Ipv6Address
  * MacAddress
  * NetworkInterfaceId
  * OutpostArn
  * OwnerId
  * PrivateDnsName
  * PrivateIpAddress
  * PrivateIpAddresses
    * items
      * Association
        * AllocationId
        * AssociationId
        * CarrierIp
        * CustomerOwnedIp
        * IpOwnerId
        * PublicDnsName
        * PublicIp
      * Primary
      * PrivateDnsName
      * PrivateIpAddress
  * RequesterId
  * RequesterManaged
  * SourceDestCheck
  * Status
  * SubnetId
  * TagSet
    * items
      * Key
      * Value
  * VpcId

### NetworkInterfaceAssociation
* NetworkInterfaceAssociation `object`: Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
  * AllocationId
  * AssociationId
  * CarrierIp
  * CustomerOwnedIp
  * IpOwnerId
  * PublicDnsName
  * PublicIp

### NetworkInterfaceAttachment
* NetworkInterfaceAttachment `object`: Describes a network interface attachment.
  * AttachTime
  * AttachmentId
  * DeleteOnTermination
  * DeviceIndex
  * InstanceId
  * InstanceOwnerId
  * NetworkCardIndex
  * Status

### NetworkInterfaceAttachmentChanges
* NetworkInterfaceAttachmentChanges `object`: Describes an attachment change.
  * AttachmentId
  * DeleteOnTermination

### NetworkInterfaceAttachmentId
* NetworkInterfaceAttachmentId `string`

### NetworkInterfaceAttribute
* NetworkInterfaceAttribute `string` (values: description, groupSet, sourceDestCheck, attachment)

### NetworkInterfaceCreationType
* NetworkInterfaceCreationType `string` (values: efa)

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NetworkInterfaceIdList
* NetworkInterfaceIdList `array`
  * items

### NetworkInterfaceIpv6Address
* NetworkInterfaceIpv6Address `object`: Describes an IPv6 address associated with a network interface.
  * Ipv6Address

### NetworkInterfaceIpv6AddressesList
* NetworkInterfaceIpv6AddressesList `array`
  * items
    * Ipv6Address

### NetworkInterfaceList
* NetworkInterfaceList `array`
  * items
    * Association
      * AllocationId
      * AssociationId
      * CarrierIp
      * CustomerOwnedIp
      * IpOwnerId
      * PublicDnsName
      * PublicIp
    * Attachment
      * AttachTime
      * AttachmentId
      * DeleteOnTermination
      * DeviceIndex
      * InstanceId
      * InstanceOwnerId
      * NetworkCardIndex
      * Status
    * AvailabilityZone
    * Description
    * Groups
      * items
        * GroupId
        * GroupName
    * InterfaceType
    * Ipv6Addresses
      * items
        * Ipv6Address
    * MacAddress
    * NetworkInterfaceId
    * OutpostArn
    * OwnerId
    * PrivateDnsName
    * PrivateIpAddress
    * PrivateIpAddresses
      * items
        * Association
          * AllocationId
          * AssociationId
          * CarrierIp
          * CustomerOwnedIp
          * IpOwnerId
          * PublicDnsName
          * PublicIp
        * Primary
        * PrivateDnsName
        * PrivateIpAddress
    * RequesterId
    * RequesterManaged
    * SourceDestCheck
    * Status
    * SubnetId
    * TagSet
      * items
        * Key
        * Value
    * VpcId

### NetworkInterfacePermission
* NetworkInterfacePermission `object`: Describes a permission for a network interface.
  * AwsAccountId
  * AwsService
  * NetworkInterfaceId
  * NetworkInterfacePermissionId
  * Permission
  * PermissionState
    * State
    * StatusMessage

### NetworkInterfacePermissionId
* NetworkInterfacePermissionId `string`

### NetworkInterfacePermissionIdList
* NetworkInterfacePermissionIdList `array`
  * items [NetworkInterfacePermissionId](#networkinterfacepermissionid)

### NetworkInterfacePermissionList
* NetworkInterfacePermissionList `array`
  * items
    * AwsAccountId
    * AwsService
    * NetworkInterfaceId
    * NetworkInterfacePermissionId
    * Permission
    * PermissionState
      * State
      * StatusMessage

### NetworkInterfacePermissionState
* NetworkInterfacePermissionState `object`: Describes the state of a network interface permission.
  * State
  * StatusMessage

### NetworkInterfacePermissionStateCode
* NetworkInterfacePermissionStateCode `string` (values: pending, granted, revoking, revoked)

### NetworkInterfacePrivateIpAddress
* NetworkInterfacePrivateIpAddress `object`: Describes the private IPv4 address of a network interface.
  * Association
    * AllocationId
    * AssociationId
    * CarrierIp
    * CustomerOwnedIp
    * IpOwnerId
    * PublicDnsName
    * PublicIp
  * Primary
  * PrivateDnsName
  * PrivateIpAddress

### NetworkInterfacePrivateIpAddressList
* NetworkInterfacePrivateIpAddressList `array`
  * items
    * Association
      * AllocationId
      * AssociationId
      * CarrierIp
      * CustomerOwnedIp
      * IpOwnerId
      * PublicDnsName
      * PublicIp
    * Primary
    * PrivateDnsName
    * PrivateIpAddress

### NetworkInterfaceStatus
* NetworkInterfaceStatus `string` (values: available, associated, attaching, in-use, detaching)

### NetworkInterfaceType
* NetworkInterfaceType `string` (values: interface, natGateway, efa)

### NetworkPerformance
* NetworkPerformance `string`

### NewDhcpConfiguration
* NewDhcpConfiguration `object`
  * Key
  * Values
    * items

### NewDhcpConfigurationList
* NewDhcpConfigurationList `array`
  * items
    * Key
    * Values
      * items

### NextToken
* NextToken `string`

### OccurrenceDayRequestSet
* OccurrenceDayRequestSet `array`
  * items

### OccurrenceDaySet
* OccurrenceDaySet `array`
  * items

### OfferingClassType
* OfferingClassType `string` (values: standard, convertible)

### OfferingId
* OfferingId `string`

### OfferingTypeValues
* OfferingTypeValues `string` (values: Heavy Utilization, Medium Utilization, Light Utilization, No Upfront, Partial Upfront, All Upfront)

### OnDemandAllocationStrategy
* OnDemandAllocationStrategy `string` (values: lowestPrice, prioritized)

### OnDemandOptions
* OnDemandOptions `object`: Describes the configuration of On-Demand Instances in an EC2 Fleet.
  * AllocationStrategy
  * CapacityReservationOptions
    * UsageStrategy
  * MaxTotalPrice
  * MinTargetCapacity
  * SingleAvailabilityZone
  * SingleInstanceType

### OnDemandOptionsRequest
* OnDemandOptionsRequest `object`: Describes the configuration of On-Demand Instances in an EC2 Fleet.
  * AllocationStrategy
  * CapacityReservationOptions
    * UsageStrategy
  * MaxTotalPrice
  * MinTargetCapacity
  * SingleAvailabilityZone
  * SingleInstanceType

### OperationType
* OperationType `string` (values: add, remove)

### OwnerStringList
* OwnerStringList `array`
  * items

### PathComponent
* PathComponent `object`: Describes a path component.
  * AclRule
    * Cidr
    * Egress
    * PortRange
      * From
      * To
    * Protocol
    * RuleAction
    * RuleNumber
  * Component
    * Arn
    * Id
  * DestinationVpc
    * Arn
    * Id
  * InboundHeader
    * DestinationAddresses
      * items
    * DestinationPortRanges
      * items
        * From
        * To
    * Protocol
    * SourceAddresses
      * items
    * SourcePortRanges
      * items
        * From
        * To
  * OutboundHeader
    * DestinationAddresses
      * items
    * DestinationPortRanges
      * items
        * From
        * To
    * Protocol
    * SourceAddresses
      * items
    * SourcePortRanges
      * items
        * From
        * To
  * RouteTableRoute
    * DestinationCidr
    * DestinationPrefixListId
    * EgressOnlyInternetGatewayId
    * GatewayId
    * InstanceId
    * NatGatewayId
    * NetworkInterfaceId
    * Origin
    * TransitGatewayId
    * VpcPeeringConnectionId
  * SecurityGroupRule
    * Cidr
    * Direction
    * PortRange
      * From
      * To
    * PrefixListId
    * Protocol
    * SecurityGroupId
  * SequenceNumber
  * SourceVpc
    * Arn
    * Id
  * Subnet
    * Arn
    * Id
  * Vpc
    * Arn
    * Id

### PathComponentList
* PathComponentList `array`
  * items
    * AclRule
      * Cidr
      * Egress
      * PortRange
        * From
        * To
      * Protocol
      * RuleAction
      * RuleNumber
    * Component
      * Arn
      * Id
    * DestinationVpc
      * Arn
      * Id
    * InboundHeader
      * DestinationAddresses
        * items
      * DestinationPortRanges
        * items
          * From
          * To
      * Protocol
      * SourceAddresses
        * items
      * SourcePortRanges
        * items
          * From
          * To
    * OutboundHeader
      * DestinationAddresses
        * items
      * DestinationPortRanges
        * items
          * From
          * To
      * Protocol
      * SourceAddresses
        * items
      * SourcePortRanges
        * items
          * From
          * To
    * RouteTableRoute
      * DestinationCidr
      * DestinationPrefixListId
      * EgressOnlyInternetGatewayId
      * GatewayId
      * InstanceId
      * NatGatewayId
      * NetworkInterfaceId
      * Origin
      * TransitGatewayId
      * VpcPeeringConnectionId
    * SecurityGroupRule
      * Cidr
      * Direction
      * PortRange
        * From
        * To
      * PrefixListId
      * Protocol
      * SecurityGroupId
    * SequenceNumber
    * SourceVpc
      * Arn
      * Id
    * Subnet
      * Arn
      * Id
    * Vpc
      * Arn
      * Id

### PaymentOption
* PaymentOption `string` (values: AllUpfront, PartialUpfront, NoUpfront)

### PciId
* PciId `object`: Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
  * DeviceId
  * SubsystemId
  * SubsystemVendorId
  * VendorId

### PeeringAttachmentStatus
* PeeringAttachmentStatus `object`: The status of the transit gateway peering attachment.
  * Code
  * Message

### PeeringConnectionOptions
* PeeringConnectionOptions `object`: Describes the VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc
  * AllowEgressFromLocalClassicLinkToRemoteVpc
  * AllowEgressFromLocalVpcToRemoteClassicLink

### PeeringConnectionOptionsRequest
* PeeringConnectionOptionsRequest `object`: The VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc
  * AllowEgressFromLocalClassicLinkToRemoteVpc
  * AllowEgressFromLocalVpcToRemoteClassicLink

### PeeringTgwInfo
* PeeringTgwInfo `object`: Information about the transit gateway in the peering attachment.
  * OwnerId
  * Region
  * TransitGatewayId

### PermissionGroup
* PermissionGroup `string` (values: all)

### Phase1DHGroupNumbersList
* Phase1DHGroupNumbersList `array`
  * items
    * Value

### Phase1DHGroupNumbersListValue
* Phase1DHGroupNumbersListValue `object`: The Diffie-Hellmann group number for phase 1 IKE negotiations.
  * Value

### Phase1DHGroupNumbersRequestList
* Phase1DHGroupNumbersRequestList `array`
  * items
    * Value

### Phase1DHGroupNumbersRequestListValue
* Phase1DHGroupNumbersRequestListValue `object`: Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
  * Value

### Phase1EncryptionAlgorithmsList
* Phase1EncryptionAlgorithmsList `array`
  * items
    * Value

### Phase1EncryptionAlgorithmsListValue
* Phase1EncryptionAlgorithmsListValue `object`: The encryption algorithm for phase 1 IKE negotiations.
  * Value

### Phase1EncryptionAlgorithmsRequestList
* Phase1EncryptionAlgorithmsRequestList `array`
  * items
    * Value

### Phase1EncryptionAlgorithmsRequestListValue
* Phase1EncryptionAlgorithmsRequestListValue `object`: Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
  * Value

### Phase1IntegrityAlgorithmsList
* Phase1IntegrityAlgorithmsList `array`
  * items
    * Value

### Phase1IntegrityAlgorithmsListValue
* Phase1IntegrityAlgorithmsListValue `object`: The integrity algorithm for phase 1 IKE negotiations.
  * Value

### Phase1IntegrityAlgorithmsRequestList
* Phase1IntegrityAlgorithmsRequestList `array`
  * items
    * Value

### Phase1IntegrityAlgorithmsRequestListValue
* Phase1IntegrityAlgorithmsRequestListValue `object`: Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
  * Value

### Phase2DHGroupNumbersList
* Phase2DHGroupNumbersList `array`
  * items
    * Value

### Phase2DHGroupNumbersListValue
* Phase2DHGroupNumbersListValue `object`: The Diffie-Hellmann group number for phase 2 IKE negotiations.
  * Value

### Phase2DHGroupNumbersRequestList
* Phase2DHGroupNumbersRequestList `array`
  * items
    * Value

### Phase2DHGroupNumbersRequestListValue
* Phase2DHGroupNumbersRequestListValue `object`: Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
  * Value

### Phase2EncryptionAlgorithmsList
* Phase2EncryptionAlgorithmsList `array`
  * items
    * Value

### Phase2EncryptionAlgorithmsListValue
* Phase2EncryptionAlgorithmsListValue `object`: The encryption algorithm for phase 2 IKE negotiations.
  * Value

### Phase2EncryptionAlgorithmsRequestList
* Phase2EncryptionAlgorithmsRequestList `array`
  * items
    * Value

### Phase2EncryptionAlgorithmsRequestListValue
* Phase2EncryptionAlgorithmsRequestListValue `object`: Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
  * Value

### Phase2IntegrityAlgorithmsList
* Phase2IntegrityAlgorithmsList `array`
  * items
    * Value

### Phase2IntegrityAlgorithmsListValue
* Phase2IntegrityAlgorithmsListValue `object`: The integrity algorithm for phase 2 IKE negotiations.
  * Value

### Phase2IntegrityAlgorithmsRequestList
* Phase2IntegrityAlgorithmsRequestList `array`
  * items
    * Value

### Phase2IntegrityAlgorithmsRequestListValue
* Phase2IntegrityAlgorithmsRequestListValue `object`: Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
  * Value

### Placement
* Placement `object`: Describes the placement of an instance.
  * Affinity
  * AvailabilityZone
  * GroupName
  * HostId
  * HostResourceGroupArn
  * PartitionNumber
  * SpreadDomain
  * Tenancy

### PlacementGroup
* PlacementGroup `object`: Describes a placement group.
  * GroupId
  * GroupName
  * PartitionCount
  * State
  * Strategy
  * Tags
    * items
      * Key
      * Value

### PlacementGroupId
* PlacementGroupId `string`

### PlacementGroupIdStringList
* PlacementGroupIdStringList `array`
  * items

### PlacementGroupInfo
* PlacementGroupInfo `object`: Describes the placement group support of the instance type.
  * SupportedStrategies
    * items

### PlacementGroupList
* PlacementGroupList `array`
  * items
    * GroupId
    * GroupName
    * PartitionCount
    * State
    * Strategy
    * Tags
      * items
        * Key
        * Value

### PlacementGroupName
* PlacementGroupName `string`

### PlacementGroupState
* PlacementGroupState `string` (values: pending, available, deleting, deleted)

### PlacementGroupStrategy
* PlacementGroupStrategy `string` (values: cluster, partition, spread)

### PlacementGroupStrategyList
* PlacementGroupStrategyList `array`
  * items

### PlacementGroupStringList
* PlacementGroupStringList `array`
  * items [PlacementGroupName](#placementgroupname)

### PlacementResponse
* PlacementResponse `object`: Describes the placement of an instance.
  * GroupName

### PlacementStrategy
* PlacementStrategy `string` (values: cluster, spread, partition)

### PlatformValues
* PlatformValues `string` (values: Windows)

### PoolCidrBlock
* PoolCidrBlock `object`: Describes a CIDR block for an address pool.
  * Cidr

### PoolCidrBlocksSet
* PoolCidrBlocksSet `array`
  * items
    * Cidr

### PoolMaxResults
* PoolMaxResults `integer`

### Port
* Port `integer`

### PortRange
* PortRange `object`: Describes a range of ports.
  * From
  * To

### PortRangeList
* PortRangeList `array`
  * items
    * From
    * To

### PrefixList
* PrefixList `object`: Describes prefixes for AWS services.
  * Cidrs
    * items
  * PrefixListId
  * PrefixListName

### PrefixListAssociation
* PrefixListAssociation `object`: Describes the resource with which a prefix list is associated.
  * ResourceId
  * ResourceOwner

### PrefixListAssociationSet
* PrefixListAssociationSet `array`
  * items
    * ResourceId
    * ResourceOwner

### PrefixListEntry
* PrefixListEntry `object`: Describes a prefix list entry.
  * Cidr
  * Description

### PrefixListEntrySet
* PrefixListEntrySet `array`
  * items
    * Cidr
    * Description

### PrefixListId
* PrefixListId `object`: Describes a prefix list ID.
  * Description
  * PrefixListId

### PrefixListIdList
* PrefixListIdList `array`
  * items
    * Description
    * PrefixListId

### PrefixListIdSet
* PrefixListIdSet `array`
  * items

### PrefixListMaxResults
* PrefixListMaxResults `integer`

### PrefixListResourceId
* PrefixListResourceId `string`

### PrefixListResourceIdStringList
* PrefixListResourceIdStringList `array`
  * items

### PrefixListSet
* PrefixListSet `array`
  * items
    * Cidrs
      * items
    * PrefixListId
    * PrefixListName

### PrefixListState
* PrefixListState `string` (values: create-in-progress, create-complete, create-failed, modify-in-progress, modify-complete, modify-failed, restore-in-progress, restore-complete, restore-failed, delete-in-progress, delete-complete, delete-failed)

### PriceSchedule
* PriceSchedule `object`: Describes the price for a Reserved Instance.
  * Active
  * CurrencyCode
  * Price
  * Term

### PriceScheduleList
* PriceScheduleList `array`
  * items
    * Active
    * CurrencyCode
    * Price
    * Term

### PriceScheduleSpecification
* PriceScheduleSpecification `object`: Describes the price for a Reserved Instance.
  * CurrencyCode
  * Price
  * Term

### PriceScheduleSpecificationList
* PriceScheduleSpecificationList `array`
  * items
    * CurrencyCode
    * Price
    * Term

### PricingDetail
* PricingDetail `object`: Describes a Reserved Instance offering.
  * Count
  * Price

### PricingDetailsList
* PricingDetailsList `array`
  * items
    * Count
    * Price

### PrincipalIdFormat
* PrincipalIdFormat `object`: PrincipalIdFormat description
  * Arn
  * Statuses
    * items
      * Deadline
      * Resource
      * UseLongIds

### PrincipalIdFormatList
* PrincipalIdFormatList `array`
  * items
    * Arn
    * Statuses
      * items
        * Deadline
        * Resource
        * UseLongIds

### PrincipalType
* PrincipalType `string` (values: All, Service, OrganizationUnit, Account, User, Role)

### PrivateDnsDetails
* PrivateDnsDetails `object`: Information about the Private DNS name for interface endpoints.
  * PrivateDnsName

### PrivateDnsDetailsSet
* PrivateDnsDetailsSet `array`
  * items
    * PrivateDnsName

### PrivateDnsNameConfiguration
* PrivateDnsNameConfiguration `object`: Information about the private DNS name for the service endpoint. For more information about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service Private DNS Name Verification</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
  * Name
  * State
  * Type
  * Value

### PrivateIpAddressConfigSet
* PrivateIpAddressConfigSet `array`
  * items
    * Primary
    * PrivateIpAddress

### PrivateIpAddressSpecification
* PrivateIpAddressSpecification `object`: Describes a secondary private IPv4 address for a network interface.
  * Primary
  * PrivateIpAddress

### PrivateIpAddressSpecificationList
* PrivateIpAddressSpecificationList `array`
  * items
    * Primary
    * PrivateIpAddress

### PrivateIpAddressStringList
* PrivateIpAddressStringList `array`
  * items

### ProcessorInfo
* ProcessorInfo `object`: Describes the processor used by the instance type.
  * SupportedArchitectures
    * items
  * SustainedClockSpeedInGhz

### ProcessorSustainedClockSpeed
* ProcessorSustainedClockSpeed `number`

### ProductCode
* ProductCode `object`: Describes a product code.
  * ProductCodeId
  * ProductCodeType

### ProductCodeList
* ProductCodeList `array`
  * items
    * ProductCodeId
    * ProductCodeType

### ProductCodeStringList
* ProductCodeStringList `array`
  * items

### ProductCodeValues
* ProductCodeValues `string` (values: devpay, marketplace)

### ProductDescriptionList
* ProductDescriptionList `array`
  * items [String](#string)

### PropagatingVgw
* PropagatingVgw `object`: Describes a virtual private gateway propagating route.
  * GatewayId

### PropagatingVgwList
* PropagatingVgwList `array`
  * items
    * GatewayId

### Protocol
* Protocol `string` (values: tcp, udp)

### ProtocolValue
* ProtocolValue `string` (values: gre)

### ProvisionByoipCidrRequest
* ProvisionByoipCidrRequest `object`
  * Cidr **required**
  * CidrAuthorizationContext
    * Message **required**
    * Signature **required**
  * Description
  * DryRun
  * PoolTagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * PubliclyAdvertisable

### ProvisionByoipCidrResult
* ProvisionByoipCidrResult `object`
  * ByoipCidr
    * Cidr
    * Description
    * State
    * StatusMessage

### ProvisionedBandwidth
* ProvisionedBandwidth `object`: Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
  * ProvisionTime
  * Provisioned
  * RequestTime
  * Requested
  * Status

### PublicIpAddress
* PublicIpAddress `string`

### PublicIpStringList
* PublicIpStringList `array`
  * items

### PublicIpv4Pool
* PublicIpv4Pool `object`: Describes an IPv4 address pool.
  * Description
  * NetworkBorderGroup
  * PoolAddressRanges
    * items
      * AddressCount
      * AvailableAddressCount
      * FirstAddress
      * LastAddress
  * PoolId
  * Tags
    * items
      * Key
      * Value
  * TotalAddressCount
  * TotalAvailableAddressCount

### PublicIpv4PoolIdStringList
* PublicIpv4PoolIdStringList `array`
  * items

### PublicIpv4PoolRange
* PublicIpv4PoolRange `object`: Describes an address range of an IPv4 address pool.
  * AddressCount
  * AvailableAddressCount
  * FirstAddress
  * LastAddress

### PublicIpv4PoolRangeSet
* PublicIpv4PoolRangeSet `array`
  * items
    * AddressCount
    * AvailableAddressCount
    * FirstAddress
    * LastAddress

### PublicIpv4PoolSet
* PublicIpv4PoolSet `array`
  * items
    * Description
    * NetworkBorderGroup
    * PoolAddressRanges
      * items
        * AddressCount
        * AvailableAddressCount
        * FirstAddress
        * LastAddress
    * PoolId
    * Tags
      * items
        * Key
        * Value
    * TotalAddressCount
    * TotalAvailableAddressCount

### Purchase
* Purchase `object`: Describes the result of the purchase.
  * CurrencyCode
  * Duration
  * HostIdSet
    * items
  * HostReservationId
  * HourlyPrice
  * InstanceFamily
  * PaymentOption
  * UpfrontPrice

### PurchaseHostReservationRequest
* PurchaseHostReservationRequest `object`
  * ClientToken
  * CurrencyCode
  * HostIdSet **required**
    * items
  * LimitPrice
  * OfferingId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### PurchaseHostReservationResult
* PurchaseHostReservationResult `object`
  * ClientToken
  * CurrencyCode
  * Purchase
    * items
      * CurrencyCode
      * Duration
      * HostIdSet
        * items
      * HostReservationId
      * HourlyPrice
      * InstanceFamily
      * PaymentOption
      * UpfrontPrice
  * TotalHourlyPrice
  * TotalUpfrontPrice

### PurchaseRequest
* PurchaseRequest `object`: Describes a request to purchase Scheduled Instances.
  * InstanceCount **required**
  * PurchaseToken **required**

### PurchaseRequestSet
* PurchaseRequestSet `array`
  * items
    * InstanceCount **required**
    * PurchaseToken **required**

### PurchaseReservedInstancesOfferingRequest
* PurchaseReservedInstancesOfferingRequest `object`: Contains the parameters for PurchaseReservedInstancesOffering.
  * DryRun
  * InstanceCount **required**
  * LimitPrice
    * Amount
    * CurrencyCode
  * PurchaseTime
  * ReservedInstancesOfferingId **required**

### PurchaseReservedInstancesOfferingResult
* PurchaseReservedInstancesOfferingResult `object`: Contains the output of PurchaseReservedInstancesOffering.
  * ReservedInstancesId

### PurchaseScheduledInstancesRequest
* PurchaseScheduledInstancesRequest `object`: Contains the parameters for PurchaseScheduledInstances.
  * ClientToken
  * DryRun
  * PurchaseRequests **required**
    * items
      * InstanceCount **required**
      * PurchaseToken **required**

### PurchaseScheduledInstancesResult
* PurchaseScheduledInstancesResult `object`: Contains the output of PurchaseScheduledInstances.
  * ScheduledInstanceSet
    * items
      * AvailabilityZone
      * CreateDate
      * HourlyPrice
      * InstanceCount
      * InstanceType
      * NetworkPlatform
      * NextSlotStartTime
      * Platform
      * PreviousSlotEndTime
      * Recurrence
        * Frequency
        * Interval
        * OccurrenceDaySet
          * items
        * OccurrenceRelativeToEnd
        * OccurrenceUnit
      * ScheduledInstanceId
      * SlotDurationInHours
      * TermEndDate
      * TermStartDate
      * TotalScheduledInstanceHours

### PurchaseSet
* PurchaseSet `array`
  * items
    * CurrencyCode
    * Duration
    * HostIdSet
      * items
    * HostReservationId
    * HourlyPrice
    * InstanceFamily
    * PaymentOption
    * UpfrontPrice

### PurchasedScheduledInstanceSet
* PurchasedScheduledInstanceSet `array`
  * items
    * AvailabilityZone
    * CreateDate
    * HourlyPrice
    * InstanceCount
    * InstanceType
    * NetworkPlatform
    * NextSlotStartTime
    * Platform
    * PreviousSlotEndTime
    * Recurrence
      * Frequency
      * Interval
      * OccurrenceDaySet
        * items
      * OccurrenceRelativeToEnd
      * OccurrenceUnit
    * ScheduledInstanceId
    * SlotDurationInHours
    * TermEndDate
    * TermStartDate
    * TotalScheduledInstanceHours

### RIProductDescription
* RIProductDescription `string` (values: Linux/UNIX, Linux/UNIX (Amazon VPC), Windows, Windows (Amazon VPC))

### RamdiskId
* RamdiskId `string`

### ReasonCodesList
* ReasonCodesList `array`
  * items

### RebootInstancesRequest
* RebootInstancesRequest `object`
  * DryRun
  * InstanceIds **required**
    * items

### RecurringCharge
* RecurringCharge `object`: Describes a recurring charge.
  * Amount
  * Frequency

### RecurringChargeFrequency
* RecurringChargeFrequency `string` (values: Hourly)

### RecurringChargesList
* RecurringChargesList `array`
  * items
    * Amount
    * Frequency

### Region
* Region `object`: Describes a Region.
  * Endpoint
  * OptInStatus
  * RegionName

### RegionList
* RegionList `array`
  * items
    * Endpoint
    * OptInStatus
    * RegionName

### RegionNameStringList
* RegionNameStringList `array`
  * items

### RegisterImageRequest
* RegisterImageRequest `object`: Contains the parameters for RegisterImage.
  * Architecture
  * BillingProducts
    * items
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * Description
  * DryRun
  * EnaSupport
  * ImageLocation
  * KernelId
  * Name **required**
  * RamdiskId
  * RootDeviceName
  * SriovNetSupport
  * VirtualizationType

### RegisterImageResult
* RegisterImageResult `object`: Contains the output of RegisterImage.
  * ImageId

### RegisterInstanceEventNotificationAttributesRequest
* RegisterInstanceEventNotificationAttributesRequest `object`
  * DryRun
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

### RegisterInstanceEventNotificationAttributesResult
* RegisterInstanceEventNotificationAttributesResult `object`
  * InstanceTagAttribute
    * IncludeAllTagsOfInstance
    * InstanceTagKeys
      * items

### RegisterInstanceTagAttributeRequest
* RegisterInstanceTagAttributeRequest `object`: Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
  * IncludeAllTagsOfInstance
  * InstanceTagKeys
    * items

### RegisterTransitGatewayMulticastGroupMembersRequest
* RegisterTransitGatewayMulticastGroupMembersRequest `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### RegisterTransitGatewayMulticastGroupMembersResult
* RegisterTransitGatewayMulticastGroupMembersResult `object`
  * RegisteredMulticastGroupMembers
    * GroupIpAddress
    * RegisteredNetworkInterfaceIds
      * items
    * TransitGatewayMulticastDomainId

### RegisterTransitGatewayMulticastGroupSourcesRequest
* RegisterTransitGatewayMulticastGroupSourcesRequest `object`
  * DryRun
  * GroupIpAddress
  * NetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### RegisterTransitGatewayMulticastGroupSourcesResult
* RegisterTransitGatewayMulticastGroupSourcesResult `object`
  * RegisteredMulticastGroupSources
    * GroupIpAddress
    * RegisteredNetworkInterfaceIds
      * items
    * TransitGatewayMulticastDomainId

### RejectTransitGatewayMulticastDomainAssociationsRequest
* RejectTransitGatewayMulticastDomainAssociationsRequest `object`
  * DryRun
  * SubnetIds
    * items
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

### RejectTransitGatewayMulticastDomainAssociationsResult
* RejectTransitGatewayMulticastDomainAssociationsResult `object`
  * Associations
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * Subnets
      * items
        * State
        * SubnetId
    * TransitGatewayAttachmentId
    * TransitGatewayMulticastDomainId

### RejectTransitGatewayPeeringAttachmentRequest
* RejectTransitGatewayPeeringAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### RejectTransitGatewayPeeringAttachmentResult
* RejectTransitGatewayPeeringAttachmentResult `object`
  * TransitGatewayPeeringAttachment
    * AccepterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * CreationTime
    * RequesterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * State
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId

### RejectTransitGatewayVpcAttachmentRequest
* RejectTransitGatewayVpcAttachmentRequest `object`
  * DryRun
  * TransitGatewayAttachmentId **required**

### RejectTransitGatewayVpcAttachmentResult
* RejectTransitGatewayVpcAttachmentResult `object`
  * TransitGatewayVpcAttachment
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### RejectVpcEndpointConnectionsRequest
* RejectVpcEndpointConnectionsRequest `object`
  * DryRun
  * ServiceId **required**
  * VpcEndpointIds **required**
    * items

### RejectVpcEndpointConnectionsResult
* RejectVpcEndpointConnectionsResult `object`
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### RejectVpcPeeringConnectionRequest
* RejectVpcPeeringConnectionRequest `object`
  * DryRun
  * VpcPeeringConnectionId **required**

### RejectVpcPeeringConnectionResult
* RejectVpcPeeringConnectionResult `object`
  * Return

### ReleaseAddressRequest
* ReleaseAddressRequest `object`
  * AllocationId
  * DryRun
  * NetworkBorderGroup
  * PublicIp

### ReleaseHostsRequest
* ReleaseHostsRequest `object`
  * HostIds **required**
    * items

### ReleaseHostsResult
* ReleaseHostsResult `object`
  * Successful
    * items
  * Unsuccessful
    * items
      * Error
        * Code
        * Message
      * ResourceId

### RemovePrefixListEntries
* RemovePrefixListEntries `array`
  * items [RemovePrefixListEntry](#removeprefixlistentry)

### RemovePrefixListEntry
* RemovePrefixListEntry `object`: An entry for a prefix list.
  * Cidr **required**

### ReplaceIamInstanceProfileAssociationRequest
* ReplaceIamInstanceProfileAssociationRequest `object`
  * AssociationId **required**
  * IamInstanceProfile **required**
    * Arn
    * Name

### ReplaceIamInstanceProfileAssociationResult
* ReplaceIamInstanceProfileAssociationResult `object`
  * IamInstanceProfileAssociation
    * AssociationId
    * IamInstanceProfile
      * Arn
      * Id
    * InstanceId
    * State
    * Timestamp

### ReplaceNetworkAclAssociationRequest
* ReplaceNetworkAclAssociationRequest `object`
  * AssociationId **required**
  * DryRun
  * NetworkAclId **required**

### ReplaceNetworkAclAssociationResult
* ReplaceNetworkAclAssociationResult `object`
  * NewAssociationId

### ReplaceNetworkAclEntryRequest
* ReplaceNetworkAclEntryRequest `object`
  * CidrBlock
  * DryRun
  * Egress **required**
  * IcmpTypeCode
    * Code
    * Type
  * Ipv6CidrBlock
  * NetworkAclId **required**
  * PortRange
    * From
    * To
  * Protocol **required**
  * RuleAction **required**
  * RuleNumber **required**

### ReplaceRouteRequest
* ReplaceRouteRequest `object`
  * CarrierGatewayId
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * DryRun
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * LocalGatewayId
  * LocalTarget
  * NatGatewayId
  * NetworkInterfaceId
  * RouteTableId **required**
  * TransitGatewayId
  * VpcEndpointId
  * VpcPeeringConnectionId

### ReplaceRouteTableAssociationRequest
* ReplaceRouteTableAssociationRequest `object`
  * AssociationId **required**
  * DryRun
  * RouteTableId **required**

### ReplaceRouteTableAssociationResult
* ReplaceRouteTableAssociationResult `object`
  * AssociationState
    * State
    * StatusMessage
  * NewAssociationId

### ReplaceTransitGatewayRouteRequest
* ReplaceTransitGatewayRouteRequest `object`
  * Blackhole
  * DestinationCidrBlock **required**
  * DryRun
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId **required**

### ReplaceTransitGatewayRouteResult
* ReplaceTransitGatewayRouteResult `object`
  * Route
    * DestinationCidrBlock
    * PrefixListId
    * State
    * TransitGatewayAttachments
      * items
        * ResourceId
        * ResourceType
        * TransitGatewayAttachmentId
    * Type

### ReplacementStrategy
* ReplacementStrategy `string` (values: launch)

### ReportInstanceReasonCodes
* ReportInstanceReasonCodes `string` (values: instance-stuck-in-state, unresponsive, not-accepting-credentials, password-not-available, performance-network, performance-instance-store, performance-ebs-volume, performance-other, other)

### ReportInstanceStatusRequest
* ReportInstanceStatusRequest `object`
  * Description
  * DryRun
  * EndTime
  * Instances **required**
    * items
  * ReasonCodes **required**
    * items
  * StartTime
  * Status **required**

### ReportStatusType
* ReportStatusType `string` (values: ok, impaired)

### RequestHostIdList
* RequestHostIdList `array`
  * items

### RequestHostIdSet
* RequestHostIdSet `array`
  * items

### RequestInstanceTypeList
* RequestInstanceTypeList `array`
  * items [InstanceType](#instancetype)

### RequestLaunchTemplateData
* RequestLaunchTemplateData `object`: The information to include in the launch template.
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * CapacityReservationSpecification
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * CpuOptions
    * CoreCount
    * ThreadsPerCore
  * CreditSpecification
    * CpuCredits **required**
  * DisableApiTermination
  * EbsOptimized
  * ElasticGpuSpecifications
    * items
      * Type **required**
  * ElasticInferenceAccelerators
    * items
      * Count
      * Type **required**
  * EnclaveOptions
    * Enabled
  * HibernationOptions
    * Configured
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceInitiatedShutdownBehavior
  * InstanceMarketOptions
    * MarketType
    * SpotOptions
      * BlockDurationMinutes
      * InstanceInterruptionBehavior
      * MaxPrice
      * SpotInstanceType
      * ValidUntil
  * InstanceType
  * KernelId
  * KeyName
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * Monitoring
    * Enabled
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * RamDiskId
  * SecurityGroupIds
    * items
  * SecurityGroups
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * UserData

### RequestSpotFleetRequest
* RequestSpotFleetRequest `object`: Contains the parameters for RequestSpotFleet.
  * DryRun
  * SpotFleetRequestConfig **required**
    * AllocationStrategy
    * ClientToken
    * ExcessCapacityTerminationPolicy
    * FulfilledCapacity
    * IamFleetRole **required**
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * LaunchSpecifications
      * items
        * AddressingType
        * BlockDeviceMappings
          * items
        * EbsOptimized
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceType
        * KernelId
        * KeyName
        * Monitoring
          * Enabled
        * NetworkInterfaces
          * items
        * Placement
          * AvailabilityZone
          * GroupName
          * Tenancy
        * RamdiskId
        * SecurityGroups
          * items
        * SpotPrice
        * SubnetId
        * TagSpecifications
          * items
        * UserData
        * WeightedCapacity
    * LaunchTemplateConfigs
      * items
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * items
    * LoadBalancersConfig
      * ClassicLoadBalancersConfig
        * ClassicLoadBalancers
          * items
      * TargetGroupsConfig
        * TargetGroups
          * items
    * OnDemandAllocationStrategy
    * OnDemandFulfilledCapacity
    * OnDemandMaxTotalPrice
    * OnDemandTargetCapacity
    * ReplaceUnhealthyInstances
    * SpotMaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * SpotMaxTotalPrice
    * SpotPrice
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * TargetCapacity **required**
    * TerminateInstancesWithExpiration
    * Type
    * ValidFrom
    * ValidUntil

### RequestSpotFleetResponse
* RequestSpotFleetResponse `object`: Contains the output of RequestSpotFleet.
  * SpotFleetRequestId

### RequestSpotInstancesRequest
* RequestSpotInstancesRequest `object`: Contains the parameters for RequestSpotInstances.
  * AvailabilityZoneGroup
  * BlockDurationMinutes
  * ClientToken
  * DryRun
  * InstanceCount
  * InstanceInterruptionBehavior
  * LaunchGroup
  * LaunchSpecification
    * AddressingType
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled **required**
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
      * Tenancy
    * RamdiskId
    * SecurityGroupIds
      * items
    * SecurityGroups
      * items
    * SubnetId
    * UserData
  * SpotPrice
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * Type
  * ValidFrom
  * ValidUntil

### RequestSpotInstancesResult
* RequestSpotInstancesResult `object`: Contains the output of RequestSpotInstances.
  * SpotInstanceRequests
    * items
      * ActualBlockHourlyPrice
      * AvailabilityZoneGroup
      * BlockDurationMinutes
      * CreateTime
      * Fault
        * Code
        * Message
      * InstanceId
      * InstanceInterruptionBehavior
      * LaunchGroup
      * LaunchSpecification
        * AddressingType
        * BlockDeviceMappings
          * items
        * EbsOptimized
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceType
        * KernelId
        * KeyName
        * Monitoring
          * Enabled **required**
        * NetworkInterfaces
          * items
        * Placement
          * AvailabilityZone
          * GroupName
          * Tenancy
        * RamdiskId
        * SecurityGroups
          * items
        * SubnetId
        * UserData
      * LaunchedAvailabilityZone
      * ProductDescription
      * SpotInstanceRequestId
      * SpotPrice
      * State
      * Status
        * Code
        * Message
        * UpdateTime
      * Tags
        * items
          * Key
          * Value
      * Type
      * ValidFrom
      * ValidUntil

### RequestSpotLaunchSpecification
* RequestSpotLaunchSpecification `object`: Describes the launch specification for an instance.
  * AddressingType
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * EbsOptimized
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceType
  * KernelId
  * KeyName
  * Monitoring
    * Enabled **required**
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * AvailabilityZone
    * GroupName
    * Tenancy
  * RamdiskId
  * SecurityGroupIds
    * items
  * SecurityGroups
    * items
  * SubnetId
  * UserData

### RequestSpotLaunchSpecificationSecurityGroupIdList
* RequestSpotLaunchSpecificationSecurityGroupIdList `array`
  * items

### RequestSpotLaunchSpecificationSecurityGroupList
* RequestSpotLaunchSpecificationSecurityGroupList `array`
  * items

### Reservation
* Reservation `object`: Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
  * Groups
    * items
      * GroupId
      * GroupName
  * Instances
    * items
      * AmiLaunchIndex
      * Architecture
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
      * CapacityReservationId
      * CapacityReservationSpecification
        * CapacityReservationPreference
        * CapacityReservationTarget
          * CapacityReservationId
          * CapacityReservationResourceGroupArn
      * ClientToken
      * CpuOptions
        * CoreCount
        * ThreadsPerCore
      * EbsOptimized
      * ElasticGpuAssociations
        * items
          * ElasticGpuAssociationId
          * ElasticGpuAssociationState
          * ElasticGpuAssociationTime
          * ElasticGpuId
      * ElasticInferenceAcceleratorAssociations
        * items
          * ElasticInferenceAcceleratorArn
          * ElasticInferenceAcceleratorAssociationId
          * ElasticInferenceAcceleratorAssociationState
          * ElasticInferenceAcceleratorAssociationTime
      * EnaSupport
      * EnclaveOptions
        * Enabled
      * HibernationOptions
        * Configured
      * Hypervisor
      * IamInstanceProfile
        * Arn
        * Id
      * ImageId
      * InstanceId
      * InstanceLifecycle
      * InstanceType
      * KernelId
      * KeyName
      * LaunchTime
      * Licenses
        * items
          * LicenseConfigurationArn
      * MetadataOptions
        * HttpEndpoint
        * HttpPutResponseHopLimit
        * HttpTokens
        * State
      * Monitoring
        * State
      * NetworkInterfaces
        * items
          * Association
          * Attachment
          * Description
          * Groups
          * InterfaceType
          * Ipv6Addresses
          * MacAddress
          * NetworkInterfaceId
          * OwnerId
          * PrivateDnsName
          * PrivateIpAddress
          * PrivateIpAddresses
          * SourceDestCheck
          * Status
          * SubnetId
          * VpcId
      * OutpostArn
      * Placement
        * Affinity
        * AvailabilityZone
        * GroupName
        * HostId
        * HostResourceGroupArn
        * PartitionNumber
        * SpreadDomain
        * Tenancy
      * Platform
      * PrivateDnsName
      * PrivateIpAddress
      * ProductCodes
        * items
          * ProductCodeId
          * ProductCodeType
      * PublicDnsName
      * PublicIpAddress
      * RamdiskId
      * RootDeviceName
      * RootDeviceType
      * SecurityGroups
        * items
          * GroupId
          * GroupName
      * SourceDestCheck
      * SpotInstanceRequestId
      * SriovNetSupport
      * State
        * Code
        * Name
      * StateReason
        * Code
        * Message
      * StateTransitionReason
      * SubnetId
      * Tags
        * items
          * Key
          * Value
      * VirtualizationType
      * VpcId
  * OwnerId
  * RequesterId
  * ReservationId

### ReservationId
* ReservationId `string`

### ReservationList
* ReservationList `array`
  * items
    * Groups
      * items
        * GroupId
        * GroupName
    * Instances
      * items
        * AmiLaunchIndex
        * Architecture
        * BlockDeviceMappings
          * items
        * CapacityReservationId
        * CapacityReservationSpecification
          * CapacityReservationPreference
          * CapacityReservationTarget
        * ClientToken
        * CpuOptions
          * CoreCount
          * ThreadsPerCore
        * EbsOptimized
        * ElasticGpuAssociations
          * items
        * ElasticInferenceAcceleratorAssociations
          * items
        * EnaSupport
        * EnclaveOptions
          * Enabled
        * HibernationOptions
          * Configured
        * Hypervisor
        * IamInstanceProfile
          * Arn
          * Id
        * ImageId
        * InstanceId
        * InstanceLifecycle
        * InstanceType
        * KernelId
        * KeyName
        * LaunchTime
        * Licenses
          * items
        * MetadataOptions
          * HttpEndpoint
          * HttpPutResponseHopLimit
          * HttpTokens
          * State
        * Monitoring
          * State
        * NetworkInterfaces
          * items
        * OutpostArn
        * Placement
          * Affinity
          * AvailabilityZone
          * GroupName
          * HostId
          * HostResourceGroupArn
          * PartitionNumber
          * SpreadDomain
          * Tenancy
        * Platform
        * PrivateDnsName
        * PrivateIpAddress
        * ProductCodes
          * items
        * PublicDnsName
        * PublicIpAddress
        * RamdiskId
        * RootDeviceName
        * RootDeviceType
        * SecurityGroups
          * items
        * SourceDestCheck
        * SpotInstanceRequestId
        * SriovNetSupport
        * State
          * Code
          * Name
        * StateReason
          * Code
          * Message
        * StateTransitionReason
        * SubnetId
        * Tags
          * items
        * VirtualizationType
        * VpcId
    * OwnerId
    * RequesterId
    * ReservationId

### ReservationState
* ReservationState `string` (values: payment-pending, payment-failed, active, retired)

### ReservationValue
* ReservationValue `object`: The cost associated with the Reserved Instance.
  * HourlyPrice
  * RemainingTotalValue
  * RemainingUpfrontValue

### ReservedInstanceIdSet
* ReservedInstanceIdSet `array`
  * items

### ReservedInstanceLimitPrice
* ReservedInstanceLimitPrice `object`: Describes the limit price of a Reserved Instance offering.
  * Amount
  * CurrencyCode

### ReservedInstanceReservationValue
* ReservedInstanceReservationValue `object`: The total value of the Convertible Reserved Instance.
  * ReservationValue
    * HourlyPrice
    * RemainingTotalValue
    * RemainingUpfrontValue
  * ReservedInstanceId

### ReservedInstanceReservationValueSet
* ReservedInstanceReservationValueSet `array`
  * items
    * ReservationValue
      * HourlyPrice
      * RemainingTotalValue
      * RemainingUpfrontValue
    * ReservedInstanceId

### ReservedInstanceState
* ReservedInstanceState `string` (values: payment-pending, active, payment-failed, retired, queued, queued-deleted)

### ReservedInstances
* ReservedInstances `object`: Describes a Reserved Instance.
  * AvailabilityZone
  * CurrencyCode
  * Duration
  * End
  * FixedPrice
  * InstanceCount
  * InstanceTenancy
  * InstanceType
  * OfferingClass
  * OfferingType
  * ProductDescription
  * RecurringCharges
    * items
      * Amount
      * Frequency
  * ReservedInstancesId
  * Scope
  * Start
  * State
  * Tags
    * items
      * Key
      * Value
  * UsagePrice

### ReservedInstancesConfiguration
* ReservedInstancesConfiguration `object`: Describes the configuration settings for the modified Reserved Instances.
  * AvailabilityZone
  * InstanceCount
  * InstanceType
  * Platform
  * Scope

### ReservedInstancesConfigurationList
* ReservedInstancesConfigurationList `array`
  * items
    * AvailabilityZone
    * InstanceCount
    * InstanceType
    * Platform
    * Scope

### ReservedInstancesId
* ReservedInstancesId `object`: Describes the ID of a Reserved Instance.
  * ReservedInstancesId

### ReservedInstancesIdStringList
* ReservedInstancesIdStringList `array`
  * items

### ReservedInstancesList
* ReservedInstancesList `array`
  * items
    * AvailabilityZone
    * CurrencyCode
    * Duration
    * End
    * FixedPrice
    * InstanceCount
    * InstanceTenancy
    * InstanceType
    * OfferingClass
    * OfferingType
    * ProductDescription
    * RecurringCharges
      * items
        * Amount
        * Frequency
    * ReservedInstancesId
    * Scope
    * Start
    * State
    * Tags
      * items
        * Key
        * Value
    * UsagePrice

### ReservedInstancesListing
* ReservedInstancesListing `object`: Describes a Reserved Instance listing.
  * ClientToken
  * CreateDate
  * InstanceCounts
    * items
      * InstanceCount
      * State
  * PriceSchedules
    * items
      * Active
      * CurrencyCode
      * Price
      * Term
  * ReservedInstancesId
  * ReservedInstancesListingId
  * Status
  * StatusMessage
  * Tags
    * items
      * Key
      * Value
  * UpdateDate

### ReservedInstancesListingId
* ReservedInstancesListingId `string`

### ReservedInstancesListingList
* ReservedInstancesListingList `array`
  * items
    * ClientToken
    * CreateDate
    * InstanceCounts
      * items
        * InstanceCount
        * State
    * PriceSchedules
      * items
        * Active
        * CurrencyCode
        * Price
        * Term
    * ReservedInstancesId
    * ReservedInstancesListingId
    * Status
    * StatusMessage
    * Tags
      * items
        * Key
        * Value
    * UpdateDate

### ReservedInstancesModification
* ReservedInstancesModification `object`: Describes a Reserved Instance modification.
  * ClientToken
  * CreateDate
  * EffectiveDate
  * ModificationResults
    * items
      * ReservedInstancesId
      * TargetConfiguration
        * AvailabilityZone
        * InstanceCount
        * InstanceType
        * Platform
        * Scope
  * ReservedInstancesIds
    * items
      * ReservedInstancesId
  * ReservedInstancesModificationId
  * Status
  * StatusMessage
  * UpdateDate

### ReservedInstancesModificationId
* ReservedInstancesModificationId `string`

### ReservedInstancesModificationIdStringList
* ReservedInstancesModificationIdStringList `array`
  * items

### ReservedInstancesModificationList
* ReservedInstancesModificationList `array`
  * items
    * ClientToken
    * CreateDate
    * EffectiveDate
    * ModificationResults
      * items
        * ReservedInstancesId
        * TargetConfiguration
          * AvailabilityZone
          * InstanceCount
          * InstanceType
          * Platform
          * Scope
    * ReservedInstancesIds
      * items
        * ReservedInstancesId
    * ReservedInstancesModificationId
    * Status
    * StatusMessage
    * UpdateDate

### ReservedInstancesModificationResult
* ReservedInstancesModificationResult `object`: Describes the modification request/s.
  * ReservedInstancesId
  * TargetConfiguration
    * AvailabilityZone
    * InstanceCount
    * InstanceType
    * Platform
    * Scope

### ReservedInstancesModificationResultList
* ReservedInstancesModificationResultList `array`
  * items
    * ReservedInstancesId
    * TargetConfiguration
      * AvailabilityZone
      * InstanceCount
      * InstanceType
      * Platform
      * Scope

### ReservedInstancesOffering
* ReservedInstancesOffering `object`: Describes a Reserved Instance offering.
  * AvailabilityZone
  * CurrencyCode
  * Duration
  * FixedPrice
  * InstanceTenancy
  * InstanceType
  * Marketplace
  * OfferingClass
  * OfferingType
  * PricingDetails
    * items
      * Count
      * Price
  * ProductDescription
  * RecurringCharges
    * items
      * Amount
      * Frequency
  * ReservedInstancesOfferingId
  * Scope
  * UsagePrice

### ReservedInstancesOfferingId
* ReservedInstancesOfferingId `string`

### ReservedInstancesOfferingIdStringList
* ReservedInstancesOfferingIdStringList `array`
  * items [ReservedInstancesOfferingId](#reservedinstancesofferingid)

### ReservedInstancesOfferingList
* ReservedInstancesOfferingList `array`
  * items
    * AvailabilityZone
    * CurrencyCode
    * Duration
    * FixedPrice
    * InstanceTenancy
    * InstanceType
    * Marketplace
    * OfferingClass
    * OfferingType
    * PricingDetails
      * items
        * Count
        * Price
    * ProductDescription
    * RecurringCharges
      * items
        * Amount
        * Frequency
    * ReservedInstancesOfferingId
    * Scope
    * UsagePrice

### ReservedIntancesIds
* ReservedIntancesIds `array`
  * items
    * ReservedInstancesId

### ResetEbsDefaultKmsKeyIdRequest
* ResetEbsDefaultKmsKeyIdRequest `object`
  * DryRun

### ResetEbsDefaultKmsKeyIdResult
* ResetEbsDefaultKmsKeyIdResult `object`
  * KmsKeyId

### ResetFpgaImageAttributeName
* ResetFpgaImageAttributeName `string` (values: loadPermission)

### ResetFpgaImageAttributeRequest
* ResetFpgaImageAttributeRequest `object`
  * Attribute
  * DryRun
  * FpgaImageId **required**

### ResetFpgaImageAttributeResult
* ResetFpgaImageAttributeResult `object`
  * Return

### ResetImageAttributeName
* ResetImageAttributeName `string` (values: launchPermission)

### ResetImageAttributeRequest
* ResetImageAttributeRequest `object`: Contains the parameters for ResetImageAttribute.
  * Attribute **required**
  * DryRun
  * ImageId **required**

### ResetInstanceAttributeRequest
* ResetInstanceAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * InstanceId **required**

### ResetNetworkInterfaceAttributeRequest
* ResetNetworkInterfaceAttributeRequest `object`: Contains the parameters for ResetNetworkInterfaceAttribute.
  * DryRun
  * NetworkInterfaceId **required**
  * SourceDestCheck

### ResetSnapshotAttributeRequest
* ResetSnapshotAttributeRequest `object`
  * Attribute **required**
  * DryRun
  * SnapshotId **required**

### ResourceArn
* ResourceArn `string`

### ResourceIdList
* ResourceIdList `array`
  * items [TaggableResourceId](#taggableresourceid)

### ResourceList
* ResourceList `array`
  * items

### ResourceType
* ResourceType `string` (values: client-vpn-endpoint, customer-gateway, dedicated-host, dhcp-options, egress-only-internet-gateway, elastic-ip, elastic-gpu, export-image-task, export-instance-task, fleet, fpga-image, host-reservation, image, import-image-task, import-snapshot-task, instance, internet-gateway, key-pair, launch-template, local-gateway-route-table-vpc-association, natgateway, network-acl, network-interface, network-insights-analysis, network-insights-path, placement-group, reserved-instances, route-table, security-group, snapshot, spot-fleet-request, spot-instances-request, subnet, traffic-mirror-filter, traffic-mirror-session, traffic-mirror-target, transit-gateway, transit-gateway-attachment, transit-gateway-connect-peer, transit-gateway-multicast-domain, transit-gateway-route-table, volume, vpc, vpc-peering-connection, vpn-connection, vpn-gateway, vpc-flow-log)

### ResponseError
* ResponseError `object`: Describes the error that's returned when you cannot delete a launch template version.
  * Code
  * Message

### ResponseHostIdList
* ResponseHostIdList `array`
  * items

### ResponseHostIdSet
* ResponseHostIdSet `array`
  * items

### ResponseLaunchTemplateData
* ResponseLaunchTemplateData `object`: The information for a launch template. 
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * CapacityReservationSpecification
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * CpuOptions
    * CoreCount
    * ThreadsPerCore
  * CreditSpecification
    * CpuCredits
  * DisableApiTermination
  * EbsOptimized
  * ElasticGpuSpecifications
    * items
      * Type
  * ElasticInferenceAccelerators
    * items
      * Count
      * Type
  * EnclaveOptions
    * Enabled
  * HibernationOptions
    * Configured
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceInitiatedShutdownBehavior
  * InstanceMarketOptions
    * MarketType
    * SpotOptions
      * BlockDurationMinutes
      * InstanceInterruptionBehavior
      * MaxPrice
      * SpotInstanceType
      * ValidUntil
  * InstanceType
  * KernelId
  * KeyName
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
    * State
  * Monitoring
    * Enabled
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * RamDiskId
  * SecurityGroupIds
    * items
  * SecurityGroups
    * items
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * UserData

### RestorableByStringList
* RestorableByStringList `array`
  * items [String](#string)

### RestoreAddressToClassicRequest
* RestoreAddressToClassicRequest `object`
  * DryRun
  * PublicIp **required**

### RestoreAddressToClassicResult
* RestoreAddressToClassicResult `object`
  * PublicIp
  * Status

### RestoreManagedPrefixListVersionRequest
* RestoreManagedPrefixListVersionRequest `object`
  * CurrentVersion **required**
  * DryRun
  * PrefixListId **required**
  * PreviousVersion **required**

### RestoreManagedPrefixListVersionResult
* RestoreManagedPrefixListVersionResult `object`
  * PrefixList
    * AddressFamily
    * MaxEntries
    * OwnerId
    * PrefixListArn
    * PrefixListId
    * PrefixListName
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * Version

### RevokeClientVpnIngressRequest
* RevokeClientVpnIngressRequest `object`
  * AccessGroupId
  * ClientVpnEndpointId **required**
  * DryRun
  * RevokeAllGroups
  * TargetNetworkCidr **required**

### RevokeClientVpnIngressResult
* RevokeClientVpnIngressResult `object`
  * Status
    * Code
    * Message

### RevokeSecurityGroupEgressRequest
* RevokeSecurityGroupEgressRequest `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId **required**
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

### RevokeSecurityGroupEgressResult
* RevokeSecurityGroupEgressResult `object`
  * Return
  * UnknownIpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

### RevokeSecurityGroupIngressRequest
* RevokeSecurityGroupIngressRequest `object`
  * CidrIp
  * DryRun
  * FromPort
  * GroupId
  * GroupName
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpProtocol
  * SourceSecurityGroupName
  * SourceSecurityGroupOwnerId
  * ToPort

### RevokeSecurityGroupIngressResult
* RevokeSecurityGroupIngressResult `object`
  * Return
  * UnknownIpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

### RootDeviceType
* RootDeviceType `string` (values: ebs, instance-store)

### RootDeviceTypeList
* RootDeviceTypeList `array`
  * items

### Route
* Route `object`: Describes a route in a route table.
  * CarrierGatewayId
  * DestinationCidrBlock
  * DestinationIpv6CidrBlock
  * DestinationPrefixListId
  * EgressOnlyInternetGatewayId
  * GatewayId
  * InstanceId
  * InstanceOwnerId
  * LocalGatewayId
  * NatGatewayId
  * NetworkInterfaceId
  * Origin
  * State
  * TransitGatewayId
  * VpcPeeringConnectionId

### RouteGatewayId
* RouteGatewayId `string`

### RouteList
* RouteList `array`
  * items
    * CarrierGatewayId
    * DestinationCidrBlock
    * DestinationIpv6CidrBlock
    * DestinationPrefixListId
    * EgressOnlyInternetGatewayId
    * GatewayId
    * InstanceId
    * InstanceOwnerId
    * LocalGatewayId
    * NatGatewayId
    * NetworkInterfaceId
    * Origin
    * State
    * TransitGatewayId
    * VpcPeeringConnectionId

### RouteOrigin
* RouteOrigin `string` (values: CreateRouteTable, CreateRoute, EnableVgwRoutePropagation)

### RouteState
* RouteState `string` (values: active, blackhole)

### RouteTable
* RouteTable `object`: Describes a route table.
  * Associations
    * items
      * AssociationState
        * State
        * StatusMessage
      * GatewayId
      * Main
      * RouteTableAssociationId
      * RouteTableId
      * SubnetId
  * OwnerId
  * PropagatingVgws
    * items
      * GatewayId
  * RouteTableId
  * Routes
    * items
      * CarrierGatewayId
      * DestinationCidrBlock
      * DestinationIpv6CidrBlock
      * DestinationPrefixListId
      * EgressOnlyInternetGatewayId
      * GatewayId
      * InstanceId
      * InstanceOwnerId
      * LocalGatewayId
      * NatGatewayId
      * NetworkInterfaceId
      * Origin
      * State
      * TransitGatewayId
      * VpcPeeringConnectionId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### RouteTableAssociation
* RouteTableAssociation `object`: Describes an association between a route table and a subnet or gateway.
  * AssociationState
    * State
    * StatusMessage
  * GatewayId
  * Main
  * RouteTableAssociationId
  * RouteTableId
  * SubnetId

### RouteTableAssociationId
* RouteTableAssociationId `string`

### RouteTableAssociationList
* RouteTableAssociationList `array`
  * items
    * AssociationState
      * State
      * StatusMessage
    * GatewayId
    * Main
    * RouteTableAssociationId
    * RouteTableId
    * SubnetId

### RouteTableAssociationState
* RouteTableAssociationState `object`: Describes the state of an association between a route table and a subnet or gateway.
  * State
  * StatusMessage

### RouteTableAssociationStateCode
* RouteTableAssociationStateCode `string` (values: associating, associated, disassociating, disassociated, failed)

### RouteTableId
* RouteTableId `string`

### RouteTableIdStringList
* RouteTableIdStringList `array`
  * items

### RouteTableList
* RouteTableList `array`
  * items
    * Associations
      * items
        * AssociationState
          * State
          * StatusMessage
        * GatewayId
        * Main
        * RouteTableAssociationId
        * RouteTableId
        * SubnetId
    * OwnerId
    * PropagatingVgws
      * items
        * GatewayId
    * RouteTableId
    * Routes
      * items
        * CarrierGatewayId
        * DestinationCidrBlock
        * DestinationIpv6CidrBlock
        * DestinationPrefixListId
        * EgressOnlyInternetGatewayId
        * GatewayId
        * InstanceId
        * InstanceOwnerId
        * LocalGatewayId
        * NatGatewayId
        * NetworkInterfaceId
        * Origin
        * State
        * TransitGatewayId
        * VpcPeeringConnectionId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### RuleAction
* RuleAction `string` (values: allow, deny)

### RunInstancesMonitoringEnabled
* RunInstancesMonitoringEnabled `object`: Describes the monitoring of an instance.
  * Enabled **required**

### RunInstancesRequest
* RunInstancesRequest `object`
  * AdditionalInfo
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * CapacityReservationSpecification
    * CapacityReservationPreference
    * CapacityReservationTarget
      * CapacityReservationId
      * CapacityReservationResourceGroupArn
  * ClientToken
  * CpuOptions
    * CoreCount
    * ThreadsPerCore
  * CreditSpecification
    * CpuCredits **required**
  * DisableApiTermination
  * DryRun
  * EbsOptimized
  * ElasticGpuSpecification
    * items
      * Type **required**
  * ElasticInferenceAccelerators
    * items
      * Count
      * Type **required**
  * EnclaveOptions
    * Enabled
  * HibernationOptions
    * Configured
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceInitiatedShutdownBehavior
  * InstanceMarketOptions
    * MarketType
    * SpotOptions
      * BlockDurationMinutes
      * InstanceInterruptionBehavior
      * MaxPrice
      * SpotInstanceType
      * ValidUntil
  * InstanceType
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * KernelId
  * KeyName
  * LaunchTemplate
    * LaunchTemplateId
    * LaunchTemplateName
    * Version
  * LicenseSpecifications
    * items
      * LicenseConfigurationArn
  * MaxCount **required**
  * MetadataOptions
    * HttpEndpoint
    * HttpPutResponseHopLimit
    * HttpTokens
  * MinCount **required**
  * Monitoring
    * Enabled **required**
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * Affinity
    * AvailabilityZone
    * GroupName
    * HostId
    * HostResourceGroupArn
    * PartitionNumber
    * SpreadDomain
    * Tenancy
  * PrivateIpAddress
  * RamdiskId
  * SecurityGroupIds
    * items
  * SecurityGroups
    * items
  * SubnetId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * UserData

### RunScheduledInstancesRequest
* RunScheduledInstancesRequest `object`: Contains the parameters for RunScheduledInstances.
  * ClientToken
  * DryRun
  * InstanceCount
  * LaunchSpecification **required**
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * SnapshotId
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId **required**
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled
    * NetworkInterfaces
      * items
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddressConfigs
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
    * RamdiskId
    * SecurityGroupIds
      * items
    * SubnetId
    * UserData
  * ScheduledInstanceId **required**

### RunScheduledInstancesResult
* RunScheduledInstancesResult `object`: Contains the output of RunScheduledInstances.
  * InstanceIdSet
    * items

### S3Storage
* S3Storage `object`: Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.
  * AWSAccessKeyId
  * Bucket
  * Prefix
  * UploadPolicy
  * UploadPolicySignature

### ScheduledInstance
* ScheduledInstance `object`: Describes a Scheduled Instance.
  * AvailabilityZone
  * CreateDate
  * HourlyPrice
  * InstanceCount
  * InstanceType
  * NetworkPlatform
  * NextSlotStartTime
  * Platform
  * PreviousSlotEndTime
  * Recurrence
    * Frequency
    * Interval
    * OccurrenceDaySet
      * items
    * OccurrenceRelativeToEnd
    * OccurrenceUnit
  * ScheduledInstanceId
  * SlotDurationInHours
  * TermEndDate
  * TermStartDate
  * TotalScheduledInstanceHours

### ScheduledInstanceAvailability
* ScheduledInstanceAvailability `object`: Describes a schedule that is available for your Scheduled Instances.
  * AvailabilityZone
  * AvailableInstanceCount
  * FirstSlotStartTime
  * HourlyPrice
  * InstanceType
  * MaxTermDurationInDays
  * MinTermDurationInDays
  * NetworkPlatform
  * Platform
  * PurchaseToken
  * Recurrence
    * Frequency
    * Interval
    * OccurrenceDaySet
      * items
    * OccurrenceRelativeToEnd
    * OccurrenceUnit
  * SlotDurationInHours
  * TotalScheduledInstanceHours

### ScheduledInstanceAvailabilitySet
* ScheduledInstanceAvailabilitySet `array`
  * items
    * AvailabilityZone
    * AvailableInstanceCount
    * FirstSlotStartTime
    * HourlyPrice
    * InstanceType
    * MaxTermDurationInDays
    * MinTermDurationInDays
    * NetworkPlatform
    * Platform
    * PurchaseToken
    * Recurrence
      * Frequency
      * Interval
      * OccurrenceDaySet
        * items
      * OccurrenceRelativeToEnd
      * OccurrenceUnit
    * SlotDurationInHours
    * TotalScheduledInstanceHours

### ScheduledInstanceId
* ScheduledInstanceId `string`

### ScheduledInstanceIdRequestSet
* ScheduledInstanceIdRequestSet `array`
  * items

### ScheduledInstanceRecurrence
* ScheduledInstanceRecurrence `object`: Describes the recurring schedule for a Scheduled Instance.
  * Frequency
  * Interval
  * OccurrenceDaySet
    * items
  * OccurrenceRelativeToEnd
  * OccurrenceUnit

### ScheduledInstanceRecurrenceRequest
* ScheduledInstanceRecurrenceRequest `object`: Describes the recurring schedule for a Scheduled Instance.
  * Frequency
  * Interval
  * OccurrenceDays
    * items
  * OccurrenceRelativeToEnd
  * OccurrenceUnit

### ScheduledInstanceSet
* ScheduledInstanceSet `array`
  * items
    * AvailabilityZone
    * CreateDate
    * HourlyPrice
    * InstanceCount
    * InstanceType
    * NetworkPlatform
    * NextSlotStartTime
    * Platform
    * PreviousSlotEndTime
    * Recurrence
      * Frequency
      * Interval
      * OccurrenceDaySet
        * items
      * OccurrenceRelativeToEnd
      * OccurrenceUnit
    * ScheduledInstanceId
    * SlotDurationInHours
    * TermEndDate
    * TermStartDate
    * TotalScheduledInstanceHours

### ScheduledInstancesBlockDeviceMapping
* ScheduledInstancesBlockDeviceMapping `object`: Describes a block device mapping for a Scheduled Instance.
  * DeviceName
  * Ebs
    * DeleteOnTermination
    * Encrypted
    * Iops
    * SnapshotId
    * VolumeSize
    * VolumeType
  * NoDevice
  * VirtualName

### ScheduledInstancesBlockDeviceMappingSet
* ScheduledInstancesBlockDeviceMappingSet `array`
  * items
    * DeviceName
    * Ebs
      * DeleteOnTermination
      * Encrypted
      * Iops
      * SnapshotId
      * VolumeSize
      * VolumeType
    * NoDevice
    * VirtualName

### ScheduledInstancesEbs
* ScheduledInstancesEbs `object`: Describes an EBS volume for a Scheduled Instance.
  * DeleteOnTermination
  * Encrypted
  * Iops
  * SnapshotId
  * VolumeSize
  * VolumeType

### ScheduledInstancesIamInstanceProfile
* ScheduledInstancesIamInstanceProfile `object`: Describes an IAM instance profile for a Scheduled Instance.
  * Arn
  * Name

### ScheduledInstancesIpv6Address
* ScheduledInstancesIpv6Address `object`: Describes an IPv6 address.
  * Ipv6Address

### ScheduledInstancesIpv6AddressList
* ScheduledInstancesIpv6AddressList `array`
  * items
    * Ipv6Address

### ScheduledInstancesLaunchSpecification
* ScheduledInstancesLaunchSpecification `object`: <p>Describes the launch specification for a Scheduled Instance.</p> <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * SnapshotId
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * EbsOptimized
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId **required**
  * InstanceType
  * KernelId
  * KeyName
  * Monitoring
    * Enabled
  * NetworkInterfaces
    * items
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddressConfigs
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * AvailabilityZone
    * GroupName
  * RamdiskId
  * SecurityGroupIds
    * items
  * SubnetId
  * UserData

### ScheduledInstancesMonitoring
* ScheduledInstancesMonitoring `object`: Describes whether monitoring is enabled for a Scheduled Instance.
  * Enabled

### ScheduledInstancesNetworkInterface
* ScheduledInstancesNetworkInterface `object`: Describes a network interface for a Scheduled Instance.
  * AssociatePublicIpAddress
  * DeleteOnTermination
  * Description
  * DeviceIndex
  * Groups
    * items
  * Ipv6AddressCount
  * Ipv6Addresses
    * items
      * Ipv6Address
  * NetworkInterfaceId
  * PrivateIpAddress
  * PrivateIpAddressConfigs
    * items
      * Primary
      * PrivateIpAddress
  * SecondaryPrivateIpAddressCount
  * SubnetId

### ScheduledInstancesNetworkInterfaceSet
* ScheduledInstancesNetworkInterfaceSet `array`
  * items
    * AssociatePublicIpAddress
    * DeleteOnTermination
    * Description
    * DeviceIndex
    * Groups
      * items
    * Ipv6AddressCount
    * Ipv6Addresses
      * items
        * Ipv6Address
    * NetworkInterfaceId
    * PrivateIpAddress
    * PrivateIpAddressConfigs
      * items
        * Primary
        * PrivateIpAddress
    * SecondaryPrivateIpAddressCount
    * SubnetId

### ScheduledInstancesPlacement
* ScheduledInstancesPlacement `object`: Describes the placement for a Scheduled Instance.
  * AvailabilityZone
  * GroupName

### ScheduledInstancesPrivateIpAddressConfig
* ScheduledInstancesPrivateIpAddressConfig `object`: Describes a private IPv4 address for a Scheduled Instance.
  * Primary
  * PrivateIpAddress

### ScheduledInstancesSecurityGroupIdSet
* ScheduledInstancesSecurityGroupIdSet `array`
  * items

### SearchLocalGatewayRoutesRequest
* SearchLocalGatewayRoutesRequest `object`
  * DryRun
  * Filters **required**
    * items
      * Name
      * Values
        * items
  * LocalGatewayRouteTableId **required**
  * MaxResults
  * NextToken

### SearchLocalGatewayRoutesResult
* SearchLocalGatewayRoutesResult `object`
  * NextToken
  * Routes
    * items
      * DestinationCidrBlock
      * LocalGatewayRouteTableArn
      * LocalGatewayRouteTableId
      * LocalGatewayVirtualInterfaceGroupId
      * OwnerId
      * State
      * Type

### SearchTransitGatewayMulticastGroupsRequest
* SearchTransitGatewayMulticastGroupsRequest `object`
  * DryRun
  * Filters
    * items
      * Name
      * Values
        * items
  * MaxResults
  * NextToken
  * TransitGatewayMulticastDomainId

### SearchTransitGatewayMulticastGroupsResult
* SearchTransitGatewayMulticastGroupsResult `object`
  * MulticastGroups
    * items
      * GroupIpAddress
      * GroupMember
      * GroupSource
      * MemberType
      * NetworkInterfaceId
      * ResourceId
      * ResourceOwnerId
      * ResourceType
      * SourceType
      * SubnetId
      * TransitGatewayAttachmentId
  * NextToken

### SearchTransitGatewayRoutesRequest
* SearchTransitGatewayRoutesRequest `object`
  * DryRun
  * Filters **required**
    * items
      * Name
      * Values
        * items
  * MaxResults
  * TransitGatewayRouteTableId **required**

### SearchTransitGatewayRoutesResult
* SearchTransitGatewayRoutesResult `object`
  * AdditionalRoutesAvailable
  * Routes
    * items
      * DestinationCidrBlock
      * PrefixListId
      * State
      * TransitGatewayAttachments
        * items
          * ResourceId
          * ResourceType
          * TransitGatewayAttachmentId
      * Type

### SecurityGroup
* SecurityGroup `object`: Describes a security group
  * Description
  * GroupId
  * GroupName
  * IpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * IpPermissionsEgress
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * OwnerId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIdStringList
* SecurityGroupIdStringList `array`
  * items

### SecurityGroupIdentifier
* SecurityGroupIdentifier `object`: Describes a security group.
  * GroupId
  * GroupName

### SecurityGroupList
* SecurityGroupList `array`
  * items
    * Description
    * GroupId
    * GroupName
    * IpPermissions
      * items
        * FromPort
        * IpProtocol
        * IpRanges
          * items
        * Ipv6Ranges
          * items
        * PrefixListIds
          * items
        * ToPort
        * UserIdGroupPairs
          * items
    * IpPermissionsEgress
      * items
        * FromPort
        * IpProtocol
        * IpRanges
          * items
        * Ipv6Ranges
          * items
        * PrefixListIds
          * items
        * ToPort
        * UserIdGroupPairs
          * items
    * OwnerId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### SecurityGroupName
* SecurityGroupName `string`

### SecurityGroupReference
* SecurityGroupReference `object`: Describes a VPC with a security group that references your security group.
  * GroupId
  * ReferencingVpcId
  * VpcPeeringConnectionId

### SecurityGroupReferences
* SecurityGroupReferences `array`
  * items
    * GroupId
    * ReferencingVpcId
    * VpcPeeringConnectionId

### SecurityGroupStringList
* SecurityGroupStringList `array`
  * items

### SelfServicePortal
* SelfServicePortal `string` (values: enabled, disabled)

### SendDiagnosticInterruptRequest
* SendDiagnosticInterruptRequest `object`
  * DryRun
  * InstanceId **required**

### SensitiveUserData
* SensitiveUserData `string`

### ServiceConfiguration
* ServiceConfiguration `object`: Describes a service configuration for a VPC endpoint service.
  * AcceptanceRequired
  * AvailabilityZones
    * items
  * BaseEndpointDnsNames
    * items
  * GatewayLoadBalancerArns
    * items
  * ManagesVpcEndpoints
  * NetworkLoadBalancerArns
    * items
  * PrivateDnsName
  * PrivateDnsNameConfiguration
    * Name
    * State
    * Type
    * Value
  * ServiceId
  * ServiceName
  * ServiceState
  * ServiceType
    * items
      * ServiceType
  * Tags
    * items
      * Key
      * Value

### ServiceConfigurationSet
* ServiceConfigurationSet `array`
  * items
    * AcceptanceRequired
    * AvailabilityZones
      * items
    * BaseEndpointDnsNames
      * items
    * GatewayLoadBalancerArns
      * items
    * ManagesVpcEndpoints
    * NetworkLoadBalancerArns
      * items
    * PrivateDnsName
    * PrivateDnsNameConfiguration
      * Name
      * State
      * Type
      * Value
    * ServiceId
    * ServiceName
    * ServiceState
    * ServiceType
      * items
        * ServiceType
    * Tags
      * items
        * Key
        * Value

### ServiceDetail
* ServiceDetail `object`: Describes a VPC endpoint service.
  * AcceptanceRequired
  * AvailabilityZones
    * items
  * BaseEndpointDnsNames
    * items
  * ManagesVpcEndpoints
  * Owner
  * PrivateDnsName
  * PrivateDnsNameVerificationState
  * PrivateDnsNames
    * items
      * PrivateDnsName
  * ServiceId
  * ServiceName
  * ServiceType
    * items
      * ServiceType
  * Tags
    * items
      * Key
      * Value
  * VpcEndpointPolicySupported

### ServiceDetailSet
* ServiceDetailSet `array`
  * items
    * AcceptanceRequired
    * AvailabilityZones
      * items
    * BaseEndpointDnsNames
      * items
    * ManagesVpcEndpoints
    * Owner
    * PrivateDnsName
    * PrivateDnsNameVerificationState
    * PrivateDnsNames
      * items
        * PrivateDnsName
    * ServiceId
    * ServiceName
    * ServiceType
      * items
        * ServiceType
    * Tags
      * items
        * Key
        * Value
    * VpcEndpointPolicySupported

### ServiceState
* ServiceState `string` (values: Pending, Available, Deleting, Deleted, Failed)

### ServiceType
* ServiceType `string` (values: Interface, Gateway, GatewayLoadBalancer)

### ServiceTypeDetail
* ServiceTypeDetail `object`: Describes the type of service for a VPC endpoint.
  * ServiceType

### ServiceTypeDetailSet
* ServiceTypeDetailSet `array`
  * items
    * ServiceType

### ShutdownBehavior
* ShutdownBehavior `string` (values: stop, terminate)

### SlotDateTimeRangeRequest
* SlotDateTimeRangeRequest `object`: Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
  * EarliestTime **required**
  * LatestTime **required**

### SlotStartTimeRangeRequest
* SlotStartTimeRangeRequest `object`: Describes the time period for a Scheduled Instance to start its first schedule.
  * EarliestTime
  * LatestTime

### Snapshot
* Snapshot `object`: Describes a snapshot.
  * DataEncryptionKeyId
  * Description
  * Encrypted
  * KmsKeyId
  * OwnerAlias
  * OwnerId
  * Progress
  * SnapshotId
  * StartTime
  * State
  * StateMessage
  * Tags
    * items
      * Key
      * Value
  * VolumeId
  * VolumeSize

### SnapshotAttributeName
* SnapshotAttributeName `string` (values: productCodes, createVolumePermission)

### SnapshotDetail
* SnapshotDetail `object`: Describes the snapshot created from the imported disk.
  * Description
  * DeviceName
  * DiskImageSize
  * Format
  * Progress
  * SnapshotId
  * Status
  * StatusMessage
  * Url
  * UserBucket
    * S3Bucket
    * S3Key

### SnapshotDetailList
* SnapshotDetailList `array`
  * items
    * Description
    * DeviceName
    * DiskImageSize
    * Format
    * Progress
    * SnapshotId
    * Status
    * StatusMessage
    * Url
    * UserBucket
      * S3Bucket
      * S3Key

### SnapshotDiskContainer
* SnapshotDiskContainer `object`: The disk container object for the import snapshot request.
  * Description
  * Format
  * Url
  * UserBucket
    * S3Bucket
    * S3Key

### SnapshotId
* SnapshotId `string`

### SnapshotIdStringList
* SnapshotIdStringList `array`
  * items

### SnapshotInfo
* SnapshotInfo `object`: Information about a snapshot.
  * Description
  * Encrypted
  * OwnerId
  * Progress
  * SnapshotId
  * StartTime
  * State
  * Tags
    * items
      * Key
      * Value
  * VolumeId
  * VolumeSize

### SnapshotList
* SnapshotList `array`
  * items
    * DataEncryptionKeyId
    * Description
    * Encrypted
    * KmsKeyId
    * OwnerAlias
    * OwnerId
    * Progress
    * SnapshotId
    * StartTime
    * State
    * StateMessage
    * Tags
      * items
        * Key
        * Value
    * VolumeId
    * VolumeSize

### SnapshotSet
* SnapshotSet `array`
  * items
    * Description
    * Encrypted
    * OwnerId
    * Progress
    * SnapshotId
    * StartTime
    * State
    * Tags
      * items
        * Key
        * Value
    * VolumeId
    * VolumeSize

### SnapshotState
* SnapshotState `string` (values: pending, completed, error)

### SnapshotTaskDetail
* SnapshotTaskDetail `object`: Details about the import snapshot task.
  * Description
  * DiskImageSize
  * Encrypted
  * Format
  * KmsKeyId
  * Progress
  * SnapshotId
  * Status
  * StatusMessage
  * Url
  * UserBucket
    * S3Bucket
    * S3Key

### SpotAllocationStrategy
* SpotAllocationStrategy `string` (values: lowest-price, diversified, capacity-optimized)

### SpotCapacityRebalance
* SpotCapacityRebalance `object`: The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#spot-fleet-capacity-rebalance">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
  * ReplacementStrategy

### SpotDatafeedSubscription
* SpotDatafeedSubscription `object`: Describes the data feed for a Spot Instance.
  * Bucket
  * Fault
    * Code
    * Message
  * OwnerId
  * Prefix
  * State

### SpotFleetLaunchSpecification
* SpotFleetLaunchSpecification `object`: Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.
  * AddressingType
  * BlockDeviceMappings
    * items
      * DeviceName
      * Ebs
        * DeleteOnTermination
        * Encrypted
        * Iops
        * KmsKeyId
        * SnapshotId
        * Throughput
        * VolumeSize
        * VolumeType
      * NoDevice
      * VirtualName
  * EbsOptimized
  * IamInstanceProfile
    * Arn
    * Name
  * ImageId
  * InstanceType
  * KernelId
  * KeyName
  * Monitoring
    * Enabled
  * NetworkInterfaces
    * items
      * AssociateCarrierIpAddress
      * AssociatePublicIpAddress
      * DeleteOnTermination
      * Description
      * DeviceIndex
      * Groups
        * items
      * InterfaceType
      * Ipv6AddressCount
      * Ipv6Addresses
        * items
          * Ipv6Address
      * NetworkCardIndex
      * NetworkInterfaceId
      * PrivateIpAddress
      * PrivateIpAddresses
        * items
          * Primary
          * PrivateIpAddress
      * SecondaryPrivateIpAddressCount
      * SubnetId
  * Placement
    * AvailabilityZone
    * GroupName
    * Tenancy
  * RamdiskId
  * SecurityGroups
    * items
      * GroupId
      * GroupName
  * SpotPrice
  * SubnetId
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * UserData
  * WeightedCapacity

### SpotFleetMonitoring
* SpotFleetMonitoring `object`: Describes whether monitoring is enabled.
  * Enabled

### SpotFleetRequestConfig
* SpotFleetRequestConfig `object`: Describes a Spot Fleet request.
  * ActivityStatus
  * CreateTime
  * SpotFleetRequestConfig
    * AllocationStrategy
    * ClientToken
    * ExcessCapacityTerminationPolicy
    * FulfilledCapacity
    * IamFleetRole **required**
    * InstanceInterruptionBehavior
    * InstancePoolsToUseCount
    * LaunchSpecifications
      * items
        * AddressingType
        * BlockDeviceMappings
          * items
        * EbsOptimized
        * IamInstanceProfile
          * Arn
          * Name
        * ImageId
        * InstanceType
        * KernelId
        * KeyName
        * Monitoring
          * Enabled
        * NetworkInterfaces
          * items
        * Placement
          * AvailabilityZone
          * GroupName
          * Tenancy
        * RamdiskId
        * SecurityGroups
          * items
        * SpotPrice
        * SubnetId
        * TagSpecifications
          * items
        * UserData
        * WeightedCapacity
    * LaunchTemplateConfigs
      * items
        * LaunchTemplateSpecification
          * LaunchTemplateId
          * LaunchTemplateName
          * Version
        * Overrides
          * items
    * LoadBalancersConfig
      * ClassicLoadBalancersConfig
        * ClassicLoadBalancers
          * items
      * TargetGroupsConfig
        * TargetGroups
          * items
    * OnDemandAllocationStrategy
    * OnDemandFulfilledCapacity
    * OnDemandMaxTotalPrice
    * OnDemandTargetCapacity
    * ReplaceUnhealthyInstances
    * SpotMaintenanceStrategies
      * CapacityRebalance
        * ReplacementStrategy
    * SpotMaxTotalPrice
    * SpotPrice
    * TagSpecifications
      * items
        * ResourceType
        * Tags
          * items
    * TargetCapacity **required**
    * TerminateInstancesWithExpiration
    * Type
    * ValidFrom
    * ValidUntil
  * SpotFleetRequestId
  * SpotFleetRequestState
  * Tags
    * items
      * Key
      * Value

### SpotFleetRequestConfigData
* SpotFleetRequestConfigData `object`: Describes the configuration of a Spot Fleet request.
  * AllocationStrategy
  * ClientToken
  * ExcessCapacityTerminationPolicy
  * FulfilledCapacity
  * IamFleetRole **required**
  * InstanceInterruptionBehavior
  * InstancePoolsToUseCount
  * LaunchSpecifications
    * items
      * AddressingType
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
          * NoDevice
          * VirtualName
      * EbsOptimized
      * IamInstanceProfile
        * Arn
        * Name
      * ImageId
      * InstanceType
      * KernelId
      * KeyName
      * Monitoring
        * Enabled
      * NetworkInterfaces
        * items
          * AssociateCarrierIpAddress
          * AssociatePublicIpAddress
          * DeleteOnTermination
          * Description
          * DeviceIndex
          * Groups
          * InterfaceType
          * Ipv6AddressCount
          * Ipv6Addresses
          * NetworkCardIndex
          * NetworkInterfaceId
          * PrivateIpAddress
          * PrivateIpAddresses
          * SecondaryPrivateIpAddressCount
          * SubnetId
      * Placement
        * AvailabilityZone
        * GroupName
        * Tenancy
      * RamdiskId
      * SecurityGroups
        * items
          * GroupId
          * GroupName
      * SpotPrice
      * SubnetId
      * TagSpecifications
        * items
          * ResourceType
          * Tags
      * UserData
      * WeightedCapacity
  * LaunchTemplateConfigs
    * items
      * LaunchTemplateSpecification
        * LaunchTemplateId
        * LaunchTemplateName
        * Version
      * Overrides
        * items
          * AvailabilityZone
          * InstanceType
          * Priority
          * SpotPrice
          * SubnetId
          * WeightedCapacity
  * LoadBalancersConfig
    * ClassicLoadBalancersConfig
      * ClassicLoadBalancers
        * items
          * Name
    * TargetGroupsConfig
      * TargetGroups
        * items
          * Arn
  * OnDemandAllocationStrategy
  * OnDemandFulfilledCapacity
  * OnDemandMaxTotalPrice
  * OnDemandTargetCapacity
  * ReplaceUnhealthyInstances
  * SpotMaintenanceStrategies
    * CapacityRebalance
      * ReplacementStrategy
  * SpotMaxTotalPrice
  * SpotPrice
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value
  * TargetCapacity **required**
  * TerminateInstancesWithExpiration
  * Type
  * ValidFrom
  * ValidUntil

### SpotFleetRequestConfigSet
* SpotFleetRequestConfigSet `array`
  * items
    * ActivityStatus
    * CreateTime
    * SpotFleetRequestConfig
      * AllocationStrategy
      * ClientToken
      * ExcessCapacityTerminationPolicy
      * FulfilledCapacity
      * IamFleetRole **required**
      * InstanceInterruptionBehavior
      * InstancePoolsToUseCount
      * LaunchSpecifications
        * items
          * AddressingType
          * BlockDeviceMappings
          * EbsOptimized
          * IamInstanceProfile
          * ImageId
          * InstanceType
          * KernelId
          * KeyName
          * Monitoring
          * NetworkInterfaces
          * Placement
          * RamdiskId
          * SecurityGroups
          * SpotPrice
          * SubnetId
          * TagSpecifications
          * UserData
          * WeightedCapacity
      * LaunchTemplateConfigs
        * items
          * LaunchTemplateSpecification
          * Overrides
      * LoadBalancersConfig
        * ClassicLoadBalancersConfig
          * ClassicLoadBalancers
        * TargetGroupsConfig
          * TargetGroups
      * OnDemandAllocationStrategy
      * OnDemandFulfilledCapacity
      * OnDemandMaxTotalPrice
      * OnDemandTargetCapacity
      * ReplaceUnhealthyInstances
      * SpotMaintenanceStrategies
        * CapacityRebalance
          * ReplacementStrategy
      * SpotMaxTotalPrice
      * SpotPrice
      * TagSpecifications
        * items
          * ResourceType
          * Tags
      * TargetCapacity **required**
      * TerminateInstancesWithExpiration
      * Type
      * ValidFrom
      * ValidUntil
    * SpotFleetRequestId
    * SpotFleetRequestState
    * Tags
      * items
        * Key
        * Value

### SpotFleetRequestId
* SpotFleetRequestId `string`

### SpotFleetRequestIdList
* SpotFleetRequestIdList `array`
  * items

### SpotFleetTagSpecification
* SpotFleetTagSpecification `object`: The tags for a Spot Fleet resource.
  * ResourceType
  * Tags
    * items
      * Key
      * Value

### SpotFleetTagSpecificationList
* SpotFleetTagSpecificationList `array`
  * items
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### SpotInstanceInterruptionBehavior
* SpotInstanceInterruptionBehavior `string` (values: hibernate, stop, terminate)

### SpotInstanceRequest
* SpotInstanceRequest `object`: Describes a Spot Instance request.
  * ActualBlockHourlyPrice
  * AvailabilityZoneGroup
  * BlockDurationMinutes
  * CreateTime
  * Fault
    * Code
    * Message
  * InstanceId
  * InstanceInterruptionBehavior
  * LaunchGroup
  * LaunchSpecification
    * AddressingType
    * BlockDeviceMappings
      * items
        * DeviceName
        * Ebs
          * DeleteOnTermination
          * Encrypted
          * Iops
          * KmsKeyId
          * SnapshotId
          * Throughput
          * VolumeSize
          * VolumeType
        * NoDevice
        * VirtualName
    * EbsOptimized
    * IamInstanceProfile
      * Arn
      * Name
    * ImageId
    * InstanceType
    * KernelId
    * KeyName
    * Monitoring
      * Enabled **required**
    * NetworkInterfaces
      * items
        * AssociateCarrierIpAddress
        * AssociatePublicIpAddress
        * DeleteOnTermination
        * Description
        * DeviceIndex
        * Groups
          * items
        * InterfaceType
        * Ipv6AddressCount
        * Ipv6Addresses
          * items
        * NetworkCardIndex
        * NetworkInterfaceId
        * PrivateIpAddress
        * PrivateIpAddresses
          * items
        * SecondaryPrivateIpAddressCount
        * SubnetId
    * Placement
      * AvailabilityZone
      * GroupName
      * Tenancy
    * RamdiskId
    * SecurityGroups
      * items
        * GroupId
        * GroupName
    * SubnetId
    * UserData
  * LaunchedAvailabilityZone
  * ProductDescription
  * SpotInstanceRequestId
  * SpotPrice
  * State
  * Status
    * Code
    * Message
    * UpdateTime
  * Tags
    * items
      * Key
      * Value
  * Type
  * ValidFrom
  * ValidUntil

### SpotInstanceRequestId
* SpotInstanceRequestId `string`

### SpotInstanceRequestIdList
* SpotInstanceRequestIdList `array`
  * items

### SpotInstanceRequestList
* SpotInstanceRequestList `array`
  * items
    * ActualBlockHourlyPrice
    * AvailabilityZoneGroup
    * BlockDurationMinutes
    * CreateTime
    * Fault
      * Code
      * Message
    * InstanceId
    * InstanceInterruptionBehavior
    * LaunchGroup
    * LaunchSpecification
      * AddressingType
      * BlockDeviceMappings
        * items
          * DeviceName
          * Ebs
          * NoDevice
          * VirtualName
      * EbsOptimized
      * IamInstanceProfile
        * Arn
        * Name
      * ImageId
      * InstanceType
      * KernelId
      * KeyName
      * Monitoring
        * Enabled **required**
      * NetworkInterfaces
        * items
          * AssociateCarrierIpAddress
          * AssociatePublicIpAddress
          * DeleteOnTermination
          * Description
          * DeviceIndex
          * Groups
          * InterfaceType
          * Ipv6AddressCount
          * Ipv6Addresses
          * NetworkCardIndex
          * NetworkInterfaceId
          * PrivateIpAddress
          * PrivateIpAddresses
          * SecondaryPrivateIpAddressCount
          * SubnetId
      * Placement
        * AvailabilityZone
        * GroupName
        * Tenancy
      * RamdiskId
      * SecurityGroups
        * items
          * GroupId
          * GroupName
      * SubnetId
      * UserData
    * LaunchedAvailabilityZone
    * ProductDescription
    * SpotInstanceRequestId
    * SpotPrice
    * State
    * Status
      * Code
      * Message
      * UpdateTime
    * Tags
      * items
        * Key
        * Value
    * Type
    * ValidFrom
    * ValidUntil

### SpotInstanceState
* SpotInstanceState `string` (values: open, active, closed, cancelled, failed)

### SpotInstanceStateFault
* SpotInstanceStateFault `object`: Describes a Spot Instance state change.
  * Code
  * Message

### SpotInstanceStatus
* SpotInstanceStatus `object`: Describes the status of a Spot Instance request.
  * Code
  * Message
  * UpdateTime

### SpotInstanceType
* SpotInstanceType `string` (values: one-time, persistent)

### SpotMaintenanceStrategies
* SpotMaintenanceStrategies `object`: The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
  * CapacityRebalance
    * ReplacementStrategy

### SpotMarketOptions
* SpotMarketOptions `object`: The options for Spot Instances.
  * BlockDurationMinutes
  * InstanceInterruptionBehavior
  * MaxPrice
  * SpotInstanceType
  * ValidUntil

### SpotOptions
* SpotOptions `object`: Describes the configuration of Spot Instances in an EC2 Fleet.
  * AllocationStrategy
  * InstanceInterruptionBehavior
  * InstancePoolsToUseCount
  * MaintenanceStrategies
    * CapacityRebalance
      * ReplacementStrategy
  * MaxTotalPrice
  * MinTargetCapacity
  * SingleAvailabilityZone
  * SingleInstanceType

### SpotOptionsRequest
* SpotOptionsRequest `object`: Describes the configuration of Spot Instances in an EC2 Fleet request.
  * AllocationStrategy
  * InstanceInterruptionBehavior
  * InstancePoolsToUseCount
  * MaintenanceStrategies
    * CapacityRebalance
      * ReplacementStrategy
  * MaxTotalPrice
  * MinTargetCapacity
  * SingleAvailabilityZone
  * SingleInstanceType

### SpotPlacement
* SpotPlacement `object`: Describes Spot Instance placement.
  * AvailabilityZone
  * GroupName
  * Tenancy

### SpotPrice
* SpotPrice `object`: Describes the maximum price per hour that you are willing to pay for a Spot Instance.
  * AvailabilityZone
  * InstanceType
  * ProductDescription
  * SpotPrice
  * Timestamp

### SpotPriceHistoryList
* SpotPriceHistoryList `array`
  * items
    * AvailabilityZone
    * InstanceType
    * ProductDescription
    * SpotPrice
    * Timestamp

### StaleIpPermission
* StaleIpPermission `object`: Describes a stale rule in a security group.
  * FromPort
  * IpProtocol
  * IpRanges
    * items
  * PrefixListIds
    * items
  * ToPort
  * UserIdGroupPairs
    * items
      * Description
      * GroupId
      * GroupName
      * PeeringStatus
      * UserId
      * VpcId
      * VpcPeeringConnectionId

### StaleIpPermissionSet
* StaleIpPermissionSet `array`
  * items
    * FromPort
    * IpProtocol
    * IpRanges
      * items
    * PrefixListIds
      * items
    * ToPort
    * UserIdGroupPairs
      * items
        * Description
        * GroupId
        * GroupName
        * PeeringStatus
        * UserId
        * VpcId
        * VpcPeeringConnectionId

### StaleSecurityGroup
* StaleSecurityGroup `object`: Describes a stale security group (a security group that contains stale rules).
  * Description
  * GroupId
  * GroupName
  * StaleIpPermissions
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
      * PrefixListIds
        * items
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * StaleIpPermissionsEgress
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
      * PrefixListIds
        * items
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId
  * VpcId

### StaleSecurityGroupSet
* StaleSecurityGroupSet `array`
  * items
    * Description
    * GroupId
    * GroupName
    * StaleIpPermissions
      * items
        * FromPort
        * IpProtocol
        * IpRanges
          * items
        * PrefixListIds
          * items
        * ToPort
        * UserIdGroupPairs
          * items
    * StaleIpPermissionsEgress
      * items
        * FromPort
        * IpProtocol
        * IpRanges
          * items
        * PrefixListIds
          * items
        * ToPort
        * UserIdGroupPairs
          * items
    * VpcId

### StartInstancesRequest
* StartInstancesRequest `object`
  * AdditionalInfo
  * DryRun
  * InstanceIds **required**
    * items

### StartInstancesResult
* StartInstancesResult `object`
  * StartingInstances
    * items
      * CurrentState
        * Code
        * Name
      * InstanceId
      * PreviousState
        * Code
        * Name

### StartNetworkInsightsAnalysisRequest
* StartNetworkInsightsAnalysisRequest `object`
  * ClientToken **required**
  * DryRun
  * FilterInArns
    * items
  * NetworkInsightsPathId **required**
  * TagSpecifications
    * items
      * ResourceType
      * Tags
        * items
          * Key
          * Value

### StartNetworkInsightsAnalysisResult
* StartNetworkInsightsAnalysisResult `object`
  * NetworkInsightsAnalysis
    * AlternatePathHints
      * items
        * ComponentArn
        * ComponentId
    * Explanations
      * items
        * Acl
          * Arn
          * Id
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Address
        * Addresses
          * items
        * AttachedTo
          * Arn
          * Id
        * AvailabilityZones
          * items
        * Cidrs
          * items
        * ClassicLoadBalancerListener
          * InstancePort
          * LoadBalancerPort
        * Component
          * Arn
          * Id
        * CustomerGateway
          * Arn
          * Id
        * Destination
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * Direction
        * ElasticLoadBalancerListener
          * Arn
          * Id
        * ExplanationCode
        * IngressRouteTable
          * Arn
          * Id
        * InternetGateway
          * Arn
          * Id
        * LoadBalancerArn
        * LoadBalancerListenerPort
        * LoadBalancerTarget
          * Address
          * AvailabilityZone
          * Instance
          * Port
        * LoadBalancerTargetGroup
          * Arn
          * Id
        * LoadBalancerTargetGroups
          * items
        * LoadBalancerTargetPort
        * MissingComponent
        * NatGateway
          * Arn
          * Id
        * NetworkInterface
          * Arn
          * Id
        * PacketField
        * Port
        * PortRanges
          * items
        * PrefixList
          * Arn
          * Id
        * Protocols
          * items
        * RouteTable
          * Arn
          * Id
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroup
          * Arn
          * Id
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SecurityGroups
          * items
        * SourceVpc
          * Arn
          * Id
        * State
        * Subnet
          * Arn
          * Id
        * SubnetRouteTable
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
        * VpcEndpoint
          * Arn
          * Id
        * VpcPeeringConnection
          * Arn
          * Id
        * VpnConnection
          * Arn
          * Id
        * VpnGateway
          * Arn
          * Id
    * FilterInArns
      * items
    * ForwardPathComponents
      * items
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Component
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * InboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * OutboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SequenceNumber
        * SourceVpc
          * Arn
          * Id
        * Subnet
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
    * NetworkInsightsAnalysisArn
    * NetworkInsightsAnalysisId
    * NetworkInsightsPathId
    * NetworkPathFound
    * ReturnPathComponents
      * items
        * AclRule
          * Cidr
          * Egress
          * PortRange
          * Protocol
          * RuleAction
          * RuleNumber
        * Component
          * Arn
          * Id
        * DestinationVpc
          * Arn
          * Id
        * InboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * OutboundHeader
          * DestinationAddresses
          * DestinationPortRanges
          * Protocol
          * SourceAddresses
          * SourcePortRanges
        * RouteTableRoute
          * DestinationCidr
          * DestinationPrefixListId
          * EgressOnlyInternetGatewayId
          * GatewayId
          * InstanceId
          * NatGatewayId
          * NetworkInterfaceId
          * Origin
          * TransitGatewayId
          * VpcPeeringConnectionId
        * SecurityGroupRule
          * Cidr
          * Direction
          * PortRange
          * PrefixListId
          * Protocol
          * SecurityGroupId
        * SequenceNumber
        * SourceVpc
          * Arn
          * Id
        * Subnet
          * Arn
          * Id
        * Vpc
          * Arn
          * Id
    * StartDate
    * Status
    * StatusMessage
    * Tags
      * items
        * Key
        * Value

### StartVpcEndpointServicePrivateDnsVerificationRequest
* StartVpcEndpointServicePrivateDnsVerificationRequest `object`
  * DryRun
  * ServiceId **required**

### StartVpcEndpointServicePrivateDnsVerificationResult
* StartVpcEndpointServicePrivateDnsVerificationResult `object`
  * ReturnValue

### State
* State `string` (values: PendingAcceptance, Pending, Available, Deleting, Deleted, Rejected, Failed, Expired)

### StateReason
* StateReason `object`: Describes a state change.
  * Code
  * Message

### StaticSourcesSupportValue
* StaticSourcesSupportValue `string` (values: enable, disable)

### Status
* Status `string` (values: MoveInProgress, InVpc, InClassic)

### StatusName
* StatusName `string` (values: reachability)

### StatusType
* StatusType `string` (values: passed, failed, insufficient-data, initializing)

### StopInstancesRequest
* StopInstancesRequest `object`
  * DryRun
  * Force
  * Hibernate
  * InstanceIds **required**
    * items

### StopInstancesResult
* StopInstancesResult `object`
  * StoppingInstances
    * items
      * CurrentState
        * Code
        * Name
      * InstanceId
      * PreviousState
        * Code
        * Name

### Storage
* Storage `object`: Describes the storage location for an instance store-backed AMI.
  * S3
    * AWSAccessKeyId
    * Bucket
    * Prefix
    * UploadPolicy
    * UploadPolicySignature

### StorageLocation
* StorageLocation `object`: Describes a storage location in Amazon S3.
  * Bucket
  * Key

### String
* String `string`

### StringList
* StringList `array`
  * items

### Subnet
* Subnet `object`: Describes a subnet.
  * AssignIpv6AddressOnCreation
  * AvailabilityZone
  * AvailabilityZoneId
  * AvailableIpAddressCount
  * CidrBlock
  * CustomerOwnedIpv4Pool
  * DefaultForAz
  * Ipv6CidrBlockAssociationSet
    * items
      * AssociationId
      * Ipv6CidrBlock
      * Ipv6CidrBlockState
        * State
        * StatusMessage
  * MapCustomerOwnedIpOnLaunch
  * MapPublicIpOnLaunch
  * OutpostArn
  * OwnerId
  * State
  * SubnetArn
  * SubnetId
  * Tags
    * items
      * Key
      * Value
  * VpcId

### SubnetAssociation
* SubnetAssociation `object`: Describes the subnet association with the transit gateway multicast domain.
  * State
  * SubnetId

### SubnetAssociationList
* SubnetAssociationList `array`
  * items
    * State
    * SubnetId

### SubnetCidrAssociationId
* SubnetCidrAssociationId `string`

### SubnetCidrBlockState
* SubnetCidrBlockState `object`: Describes the state of a CIDR block.
  * State
  * StatusMessage

### SubnetCidrBlockStateCode
* SubnetCidrBlockStateCode `string` (values: associating, associated, disassociating, disassociated, failing, failed)

### SubnetId
* SubnetId `string`

### SubnetIdStringList
* SubnetIdStringList `array`
  * items

### SubnetIpv6CidrBlockAssociation
* SubnetIpv6CidrBlockAssociation `object`: Describes an IPv6 CIDR block associated with a subnet.
  * AssociationId
  * Ipv6CidrBlock
  * Ipv6CidrBlockState
    * State
    * StatusMessage

### SubnetIpv6CidrBlockAssociationSet
* SubnetIpv6CidrBlockAssociationSet `array`
  * items
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage

### SubnetList
* SubnetList `array`
  * items
    * AssignIpv6AddressOnCreation
    * AvailabilityZone
    * AvailabilityZoneId
    * AvailableIpAddressCount
    * CidrBlock
    * CustomerOwnedIpv4Pool
    * DefaultForAz
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
    * MapCustomerOwnedIpOnLaunch
    * MapPublicIpOnLaunch
    * OutpostArn
    * OwnerId
    * State
    * SubnetArn
    * SubnetId
    * Tags
      * items
        * Key
        * Value
    * VpcId

### SubnetState
* SubnetState `string` (values: pending, available)

### SuccessfulInstanceCreditSpecificationItem
* SuccessfulInstanceCreditSpecificationItem `object`: Describes the burstable performance instance whose credit option for CPU usage was successfully modified.
  * InstanceId

### SuccessfulInstanceCreditSpecificationSet
* SuccessfulInstanceCreditSpecificationSet `array`
  * items
    * InstanceId

### SuccessfulQueuedPurchaseDeletion
* SuccessfulQueuedPurchaseDeletion `object`: Describes a Reserved Instance whose queued purchase was successfully deleted.
  * ReservedInstancesId

### SuccessfulQueuedPurchaseDeletionSet
* SuccessfulQueuedPurchaseDeletionSet `array`
  * items
    * ReservedInstancesId

### SummaryStatus
* SummaryStatus `string` (values: ok, impaired, insufficient-data, not-applicable, initializing)

### Tag
* Tag `object`: Describes a tag.
  * Key
  * Value

### TagDescription
* TagDescription `object`: Describes a tag.
  * Key
  * ResourceId
  * ResourceType
  * Value

### TagDescriptionList
* TagDescriptionList `array`
  * items
    * Key
    * ResourceId
    * ResourceType
    * Value

### TagList
* TagList `array`
  * items
    * Key
    * Value

### TagSpecification
* TagSpecification `object`: The tags to apply to a resource when the resource is being created.
  * ResourceType
  * Tags
    * items
      * Key
      * Value

### TagSpecificationList
* TagSpecificationList `array`
  * items
    * ResourceType
    * Tags
      * items
        * Key
        * Value

### TaggableResourceId
* TaggableResourceId `string`

### TargetCapacitySpecification
* TargetCapacitySpecification `object`: <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p> <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a> </p>
  * DefaultTargetCapacityType
  * OnDemandTargetCapacity
  * SpotTargetCapacity
  * TotalTargetCapacity

### TargetCapacitySpecificationRequest
* TargetCapacitySpecificationRequest `object`: <p>The number of units to request. You can choose to set the target capacity as the number of instances. Or you can set the target capacity to a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p> <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
  * DefaultTargetCapacityType
  * OnDemandTargetCapacity
  * SpotTargetCapacity
  * TotalTargetCapacity **required**

### TargetConfiguration
* TargetConfiguration `object`: Information about the Convertible Reserved Instance offering.
  * InstanceCount
  * OfferingId

### TargetConfigurationRequest
* TargetConfigurationRequest `object`: Details about the target configuration.
  * InstanceCount
  * OfferingId **required**

### TargetConfigurationRequestSet
* TargetConfigurationRequestSet `array`
  * items
    * InstanceCount
    * OfferingId **required**

### TargetGroup
* TargetGroup `object`: Describes a load balancer target group.
  * Arn

### TargetGroups
* TargetGroups `array`
  * items
    * Arn

### TargetGroupsConfig
* TargetGroupsConfig `object`: Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
  * TargetGroups
    * items
      * Arn

### TargetNetwork
* TargetNetwork `object`: Describes a target network associated with a Client VPN endpoint.
  * AssociationId
  * ClientVpnEndpointId
  * SecurityGroups
    * items
  * Status
    * Code
    * Message
  * TargetNetworkId
  * VpcId

### TargetNetworkSet
* TargetNetworkSet `array`
  * items
    * AssociationId
    * ClientVpnEndpointId
    * SecurityGroups
      * items
    * Status
      * Code
      * Message
    * TargetNetworkId
    * VpcId

### TargetReservationValue
* TargetReservationValue `object`: The total value of the new Convertible Reserved Instances.
  * ReservationValue
    * HourlyPrice
    * RemainingTotalValue
    * RemainingUpfrontValue
  * TargetConfiguration
    * InstanceCount
    * OfferingId

### TargetReservationValueSet
* TargetReservationValueSet `array`
  * items
    * ReservationValue
      * HourlyPrice
      * RemainingTotalValue
      * RemainingUpfrontValue
    * TargetConfiguration
      * InstanceCount
      * OfferingId

### TelemetryStatus
* TelemetryStatus `string` (values: UP, DOWN)

### Tenancy
* Tenancy `string` (values: default, dedicated, host)

### TerminateClientVpnConnectionsRequest
* TerminateClientVpnConnectionsRequest `object`
  * ClientVpnEndpointId **required**
  * ConnectionId
  * DryRun
  * Username

### TerminateClientVpnConnectionsResult
* TerminateClientVpnConnectionsResult `object`
  * ClientVpnEndpointId
  * ConnectionStatuses
    * items
      * ConnectionId
      * CurrentStatus
        * Code
        * Message
      * PreviousStatus
        * Code
        * Message
  * Username

### TerminateConnectionStatus
* TerminateConnectionStatus `object`: Information about a terminated Client VPN endpoint client connection.
  * ConnectionId
  * CurrentStatus
    * Code
    * Message
  * PreviousStatus
    * Code
    * Message

### TerminateConnectionStatusSet
* TerminateConnectionStatusSet `array`
  * items
    * ConnectionId
    * CurrentStatus
      * Code
      * Message
    * PreviousStatus
      * Code
      * Message

### TerminateInstancesRequest
* TerminateInstancesRequest `object`
  * DryRun
  * InstanceIds **required**
    * items

### TerminateInstancesResult
* TerminateInstancesResult `object`
  * TerminatingInstances
    * items
      * CurrentState
        * Code
        * Name
      * InstanceId
      * PreviousState
        * Code
        * Name

### ThreadsPerCore
* ThreadsPerCore `integer`

### ThreadsPerCoreList
* ThreadsPerCoreList `array`
  * items

### TrafficDirection
* TrafficDirection `string` (values: ingress, egress)

### TrafficMirrorFilter
* TrafficMirrorFilter `object`: Describes the Traffic Mirror filter.
  * Description
  * EgressFilterRules
    * items
      * Description
      * DestinationCidrBlock
      * DestinationPortRange
        * FromPort
        * ToPort
      * Protocol
      * RuleAction
      * RuleNumber
      * SourceCidrBlock
      * SourcePortRange
        * FromPort
        * ToPort
      * TrafficDirection
      * TrafficMirrorFilterId
      * TrafficMirrorFilterRuleId
  * IngressFilterRules
    * items
      * Description
      * DestinationCidrBlock
      * DestinationPortRange
        * FromPort
        * ToPort
      * Protocol
      * RuleAction
      * RuleNumber
      * SourceCidrBlock
      * SourcePortRange
        * FromPort
        * ToPort
      * TrafficDirection
      * TrafficMirrorFilterId
      * TrafficMirrorFilterRuleId
  * NetworkServices
    * items
  * Tags
    * items
      * Key
      * Value
  * TrafficMirrorFilterId

### TrafficMirrorFilterId
* TrafficMirrorFilterId `string`

### TrafficMirrorFilterIdList
* TrafficMirrorFilterIdList `array`
  * items

### TrafficMirrorFilterRule
* TrafficMirrorFilterRule `object`: Describes the Traffic Mirror rule.
  * Description
  * DestinationCidrBlock
  * DestinationPortRange
    * FromPort
    * ToPort
  * Protocol
  * RuleAction
  * RuleNumber
  * SourceCidrBlock
  * SourcePortRange
    * FromPort
    * ToPort
  * TrafficDirection
  * TrafficMirrorFilterId
  * TrafficMirrorFilterRuleId

### TrafficMirrorFilterRuleField
* TrafficMirrorFilterRuleField `string` (values: destination-port-range, source-port-range, protocol, description)

### TrafficMirrorFilterRuleFieldList
* TrafficMirrorFilterRuleFieldList `array`
  * items [TrafficMirrorFilterRuleField](#trafficmirrorfilterrulefield)

### TrafficMirrorFilterRuleId
* TrafficMirrorFilterRuleId `string`

### TrafficMirrorFilterRuleList
* TrafficMirrorFilterRuleList `array`
  * items
    * Description
    * DestinationCidrBlock
    * DestinationPortRange
      * FromPort
      * ToPort
    * Protocol
    * RuleAction
    * RuleNumber
    * SourceCidrBlock
    * SourcePortRange
      * FromPort
      * ToPort
    * TrafficDirection
    * TrafficMirrorFilterId
    * TrafficMirrorFilterRuleId

### TrafficMirrorFilterSet
* TrafficMirrorFilterSet `array`
  * items
    * Description
    * EgressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * IngressFilterRules
      * items
        * Description
        * DestinationCidrBlock
        * DestinationPortRange
          * FromPort
          * ToPort
        * Protocol
        * RuleAction
        * RuleNumber
        * SourceCidrBlock
        * SourcePortRange
          * FromPort
          * ToPort
        * TrafficDirection
        * TrafficMirrorFilterId
        * TrafficMirrorFilterRuleId
    * NetworkServices
      * items
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId

### TrafficMirrorNetworkService
* TrafficMirrorNetworkService `string` (values: amazon-dns)

### TrafficMirrorNetworkServiceList
* TrafficMirrorNetworkServiceList `array`
  * items

### TrafficMirrorPortRange
* TrafficMirrorPortRange `object`: Describes the Traffic Mirror port range.
  * FromPort
  * ToPort

### TrafficMirrorPortRangeRequest
* TrafficMirrorPortRangeRequest `object`: Information about the Traffic Mirror filter rule port range.
  * FromPort
  * ToPort

### TrafficMirrorRuleAction
* TrafficMirrorRuleAction `string` (values: accept, reject)

### TrafficMirrorSession
* TrafficMirrorSession `object`: Describes a Traffic Mirror session.
  * Description
  * NetworkInterfaceId
  * OwnerId
  * PacketLength
  * SessionNumber
  * Tags
    * items
      * Key
      * Value
  * TrafficMirrorFilterId
  * TrafficMirrorSessionId
  * TrafficMirrorTargetId
  * VirtualNetworkId

### TrafficMirrorSessionField
* TrafficMirrorSessionField `string` (values: packet-length, description, virtual-network-id)

### TrafficMirrorSessionFieldList
* TrafficMirrorSessionFieldList `array`
  * items [TrafficMirrorSessionField](#trafficmirrorsessionfield)

### TrafficMirrorSessionId
* TrafficMirrorSessionId `string`

### TrafficMirrorSessionIdList
* TrafficMirrorSessionIdList `array`
  * items

### TrafficMirrorSessionSet
* TrafficMirrorSessionSet `array`
  * items
    * Description
    * NetworkInterfaceId
    * OwnerId
    * PacketLength
    * SessionNumber
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorFilterId
    * TrafficMirrorSessionId
    * TrafficMirrorTargetId
    * VirtualNetworkId

### TrafficMirrorTarget
* TrafficMirrorTarget `object`: Describes a Traffic Mirror target.
  * Description
  * NetworkInterfaceId
  * NetworkLoadBalancerArn
  * OwnerId
  * Tags
    * items
      * Key
      * Value
  * TrafficMirrorTargetId
  * Type

### TrafficMirrorTargetId
* TrafficMirrorTargetId `string`

### TrafficMirrorTargetIdList
* TrafficMirrorTargetIdList `array`
  * items

### TrafficMirrorTargetSet
* TrafficMirrorTargetSet `array`
  * items
    * Description
    * NetworkInterfaceId
    * NetworkLoadBalancerArn
    * OwnerId
    * Tags
      * items
        * Key
        * Value
    * TrafficMirrorTargetId
    * Type

### TrafficMirrorTargetType
* TrafficMirrorTargetType `string` (values: network-interface, network-load-balancer)

### TrafficMirroringMaxResults
* TrafficMirroringMaxResults `integer`

### TrafficType
* TrafficType `string` (values: ACCEPT, REJECT, ALL)

### TransitAssociationGatewayId
* TransitAssociationGatewayId `string`

### TransitGateway
* TransitGateway `object`: Describes a transit gateway.
  * CreationTime
  * Description
  * Options
    * AmazonSideAsn
    * AssociationDefaultRouteTableId
    * AutoAcceptSharedAttachments
    * DefaultRouteTableAssociation
    * DefaultRouteTablePropagation
    * DnsSupport
    * MulticastSupport
    * PropagationDefaultRouteTableId
    * TransitGatewayCidrBlocks
      * items
    * VpnEcmpSupport
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayArn
  * TransitGatewayId

### TransitGatewayAssociation
* TransitGatewayAssociation `object`: Describes an association between a resource attachment and a transit gateway route table.
  * ResourceId
  * ResourceType
  * State
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId

### TransitGatewayAssociationState
* TransitGatewayAssociationState `string` (values: associating, associated, disassociating, disassociated)

### TransitGatewayAttachment
* TransitGatewayAttachment `object`: Describes an attachment between a resource and a transit gateway.
  * Association
    * State
    * TransitGatewayRouteTableId
  * CreationTime
  * ResourceId
  * ResourceOwnerId
  * ResourceType
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayAttachmentId
  * TransitGatewayId
  * TransitGatewayOwnerId

### TransitGatewayAttachmentAssociation
* TransitGatewayAttachmentAssociation `object`: Describes an association.
  * State
  * TransitGatewayRouteTableId

### TransitGatewayAttachmentBgpConfiguration
* TransitGatewayAttachmentBgpConfiguration `object`: The BGP configuration information.
  * BgpStatus
  * PeerAddress
  * PeerAsn
  * TransitGatewayAddress
  * TransitGatewayAsn

### TransitGatewayAttachmentBgpConfigurationList
* TransitGatewayAttachmentBgpConfigurationList `array`
  * items
    * BgpStatus
    * PeerAddress
    * PeerAsn
    * TransitGatewayAddress
    * TransitGatewayAsn

### TransitGatewayAttachmentId
* TransitGatewayAttachmentId `string`

### TransitGatewayAttachmentIdStringList
* TransitGatewayAttachmentIdStringList `array`
  * items [TransitGatewayAttachmentId](#transitgatewayattachmentid)

### TransitGatewayAttachmentList
* TransitGatewayAttachmentList `array`
  * items
    * Association
      * State
      * TransitGatewayRouteTableId
    * CreationTime
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * TransitGatewayOwnerId

### TransitGatewayAttachmentPropagation
* TransitGatewayAttachmentPropagation `object`: Describes a propagation route table.
  * State
  * TransitGatewayRouteTableId

### TransitGatewayAttachmentPropagationList
* TransitGatewayAttachmentPropagationList `array`
  * items
    * State
    * TransitGatewayRouteTableId

### TransitGatewayAttachmentResourceType
* TransitGatewayAttachmentResourceType `string` (values: vpc, vpn, direct-connect-gateway, connect, peering, tgw-peering)

### TransitGatewayAttachmentState
* TransitGatewayAttachmentState `string` (values: initiating, initiatingRequest, pendingAcceptance, rollingBack, pending, available, modifying, deleting, deleted, failed, rejected, rejecting, failing)

### TransitGatewayCidrBlockStringList
* TransitGatewayCidrBlockStringList `array`
  * items

### TransitGatewayConnect
* TransitGatewayConnect `object`: Describes a transit gateway Connect attachment.
  * CreationTime
  * Options
    * Protocol
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayAttachmentId
  * TransitGatewayId
  * TransportTransitGatewayAttachmentId

### TransitGatewayConnectList
* TransitGatewayConnectList `array`
  * items
    * CreationTime
    * Options
      * Protocol
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * TransportTransitGatewayAttachmentId

### TransitGatewayConnectOptions
* TransitGatewayConnectOptions `object`: Describes the Connect attachment options.
  * Protocol

### TransitGatewayConnectPeer
* TransitGatewayConnectPeer `object`: Describes a transit gateway Connect peer.
  * ConnectPeerConfiguration
    * BgpConfigurations
      * items
        * BgpStatus
        * PeerAddress
        * PeerAsn
        * TransitGatewayAddress
        * TransitGatewayAsn
    * InsideCidrBlocks
      * items
    * PeerAddress
    * Protocol
    * TransitGatewayAddress
  * CreationTime
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayAttachmentId
  * TransitGatewayConnectPeerId

### TransitGatewayConnectPeerConfiguration
* TransitGatewayConnectPeerConfiguration `object`: Describes the Connect peer details.
  * BgpConfigurations
    * items
      * BgpStatus
      * PeerAddress
      * PeerAsn
      * TransitGatewayAddress
      * TransitGatewayAsn
  * InsideCidrBlocks
    * items
  * PeerAddress
  * Protocol
  * TransitGatewayAddress

### TransitGatewayConnectPeerId
* TransitGatewayConnectPeerId `string`

### TransitGatewayConnectPeerIdStringList
* TransitGatewayConnectPeerIdStringList `array`
  * items

### TransitGatewayConnectPeerList
* TransitGatewayConnectPeerList `array`
  * items
    * ConnectPeerConfiguration
      * BgpConfigurations
        * items
          * BgpStatus
          * PeerAddress
          * PeerAsn
          * TransitGatewayAddress
          * TransitGatewayAsn
      * InsideCidrBlocks
        * items
      * PeerAddress
      * Protocol
      * TransitGatewayAddress
    * CreationTime
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayConnectPeerId

### TransitGatewayConnectPeerState
* TransitGatewayConnectPeerState `string` (values: pending, available, deleting, deleted)

### TransitGatewayConnectRequestBgpOptions
* TransitGatewayConnectRequestBgpOptions `object`: The BGP options for the Connect attachment.
  * PeerAsn

### TransitGatewayId
* TransitGatewayId `string`

### TransitGatewayIdStringList
* TransitGatewayIdStringList `array`
  * items

### TransitGatewayList
* TransitGatewayList `array`
  * items
    * CreationTime
    * Description
    * Options
      * AmazonSideAsn
      * AssociationDefaultRouteTableId
      * AutoAcceptSharedAttachments
      * DefaultRouteTableAssociation
      * DefaultRouteTablePropagation
      * DnsSupport
      * MulticastSupport
      * PropagationDefaultRouteTableId
      * TransitGatewayCidrBlocks
        * items
      * VpnEcmpSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayArn
    * TransitGatewayId

### TransitGatewayMaxResults
* TransitGatewayMaxResults `integer`

### TransitGatewayMulitcastDomainAssociationState
* TransitGatewayMulitcastDomainAssociationState `string` (values: pendingAcceptance, associating, associated, disassociating, disassociated, rejected, failed)

### TransitGatewayMulticastDeregisteredGroupMembers
* TransitGatewayMulticastDeregisteredGroupMembers `object`: Describes the deregistered transit gateway multicast group members.
  * DeregisteredNetworkInterfaceIds
    * items
  * GroupIpAddress
  * TransitGatewayMulticastDomainId

### TransitGatewayMulticastDeregisteredGroupSources
* TransitGatewayMulticastDeregisteredGroupSources `object`: Describes the deregistered transit gateway multicast group sources.
  * DeregisteredNetworkInterfaceIds
    * items
  * GroupIpAddress
  * TransitGatewayMulticastDomainId

### TransitGatewayMulticastDomain
* TransitGatewayMulticastDomain `object`: Describes the transit gateway multicast domain.
  * CreationTime
  * Options
    * AutoAcceptSharedAssociations
    * Igmpv2Support
    * StaticSourcesSupport
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayId
  * TransitGatewayMulticastDomainArn
  * TransitGatewayMulticastDomainId

### TransitGatewayMulticastDomainAssociation
* TransitGatewayMulticastDomainAssociation `object`: Describes the resources associated with the transit gateway multicast domain.
  * ResourceId
  * ResourceOwnerId
  * ResourceType
  * Subnet
    * State
    * SubnetId
  * TransitGatewayAttachmentId

### TransitGatewayMulticastDomainAssociationList
* TransitGatewayMulticastDomainAssociationList `array`
  * items
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * Subnet
      * State
      * SubnetId
    * TransitGatewayAttachmentId

### TransitGatewayMulticastDomainAssociations
* TransitGatewayMulticastDomainAssociations `object`: Describes the multicast domain associations.
  * ResourceId
  * ResourceOwnerId
  * ResourceType
  * Subnets
    * items
      * State
      * SubnetId
  * TransitGatewayAttachmentId
  * TransitGatewayMulticastDomainId

### TransitGatewayMulticastDomainId
* TransitGatewayMulticastDomainId `string`

### TransitGatewayMulticastDomainIdStringList
* TransitGatewayMulticastDomainIdStringList `array`
  * items

### TransitGatewayMulticastDomainList
* TransitGatewayMulticastDomainList `array`
  * items
    * CreationTime
    * Options
      * AutoAcceptSharedAssociations
      * Igmpv2Support
      * StaticSourcesSupport
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayMulticastDomainArn
    * TransitGatewayMulticastDomainId

### TransitGatewayMulticastDomainOptions
* TransitGatewayMulticastDomainOptions `object`: Describes the options for a transit gateway multicast domain.
  * AutoAcceptSharedAssociations
  * Igmpv2Support
  * StaticSourcesSupport

### TransitGatewayMulticastDomainState
* TransitGatewayMulticastDomainState `string` (values: pending, available, deleting, deleted)

### TransitGatewayMulticastGroup
* TransitGatewayMulticastGroup `object`: Describes the transit gateway multicast group resources.
  * GroupIpAddress
  * GroupMember
  * GroupSource
  * MemberType
  * NetworkInterfaceId
  * ResourceId
  * ResourceOwnerId
  * ResourceType
  * SourceType
  * SubnetId
  * TransitGatewayAttachmentId

### TransitGatewayMulticastGroupList
* TransitGatewayMulticastGroupList `array`
  * items
    * GroupIpAddress
    * GroupMember
    * GroupSource
    * MemberType
    * NetworkInterfaceId
    * ResourceId
    * ResourceOwnerId
    * ResourceType
    * SourceType
    * SubnetId
    * TransitGatewayAttachmentId

### TransitGatewayMulticastRegisteredGroupMembers
* TransitGatewayMulticastRegisteredGroupMembers `object`: Describes the registered transit gateway multicast group members.
  * GroupIpAddress
  * RegisteredNetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### TransitGatewayMulticastRegisteredGroupSources
* TransitGatewayMulticastRegisteredGroupSources `object`: Describes the members registered with the transit gateway multicast group.
  * GroupIpAddress
  * RegisteredNetworkInterfaceIds
    * items
  * TransitGatewayMulticastDomainId

### TransitGatewayNetworkInterfaceIdList
* TransitGatewayNetworkInterfaceIdList `array`
  * items

### TransitGatewayOptions
* TransitGatewayOptions `object`: Describes the options for a transit gateway.
  * AmazonSideAsn
  * AssociationDefaultRouteTableId
  * AutoAcceptSharedAttachments
  * DefaultRouteTableAssociation
  * DefaultRouteTablePropagation
  * DnsSupport
  * MulticastSupport
  * PropagationDefaultRouteTableId
  * TransitGatewayCidrBlocks
    * items
  * VpnEcmpSupport

### TransitGatewayPeeringAttachment
* TransitGatewayPeeringAttachment `object`: Describes the transit gateway peering attachment.
  * AccepterTgwInfo
    * OwnerId
    * Region
    * TransitGatewayId
  * CreationTime
  * RequesterTgwInfo
    * OwnerId
    * Region
    * TransitGatewayId
  * State
  * Status
    * Code
    * Message
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayAttachmentId

### TransitGatewayPeeringAttachmentList
* TransitGatewayPeeringAttachmentList `array`
  * items
    * AccepterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * CreationTime
    * RequesterTgwInfo
      * OwnerId
      * Region
      * TransitGatewayId
    * State
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId

### TransitGatewayPrefixListAttachment
* TransitGatewayPrefixListAttachment `object`: Describes a transit gateway prefix list attachment.
  * ResourceId
  * ResourceType
  * TransitGatewayAttachmentId

### TransitGatewayPrefixListReference
* TransitGatewayPrefixListReference `object`: Describes a prefix list reference.
  * Blackhole
  * PrefixListId
  * PrefixListOwnerId
  * State
  * TransitGatewayAttachment
    * ResourceId
    * ResourceType
    * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId

### TransitGatewayPrefixListReferenceSet
* TransitGatewayPrefixListReferenceSet `array`
  * items
    * Blackhole
    * PrefixListId
    * PrefixListOwnerId
    * State
    * TransitGatewayAttachment
      * ResourceId
      * ResourceType
      * TransitGatewayAttachmentId
    * TransitGatewayRouteTableId

### TransitGatewayPrefixListReferenceState
* TransitGatewayPrefixListReferenceState `string` (values: pending, available, modifying, deleting)

### TransitGatewayPropagation
* TransitGatewayPropagation `object`: Describes route propagation.
  * ResourceId
  * ResourceType
  * State
  * TransitGatewayAttachmentId
  * TransitGatewayRouteTableId

### TransitGatewayPropagationState
* TransitGatewayPropagationState `string` (values: enabling, enabled, disabling, disabled)

### TransitGatewayRequestOptions
* TransitGatewayRequestOptions `object`: Describes the options for a transit gateway.
  * AmazonSideAsn
  * AutoAcceptSharedAttachments
  * DefaultRouteTableAssociation
  * DefaultRouteTablePropagation
  * DnsSupport
  * MulticastSupport
  * TransitGatewayCidrBlocks
    * items
  * VpnEcmpSupport

### TransitGatewayRoute
* TransitGatewayRoute `object`: Describes a route for a transit gateway route table.
  * DestinationCidrBlock
  * PrefixListId
  * State
  * TransitGatewayAttachments
    * items
      * ResourceId
      * ResourceType
      * TransitGatewayAttachmentId
  * Type

### TransitGatewayRouteAttachment
* TransitGatewayRouteAttachment `object`: Describes a route attachment.
  * ResourceId
  * ResourceType
  * TransitGatewayAttachmentId

### TransitGatewayRouteAttachmentList
* TransitGatewayRouteAttachmentList `array`
  * items
    * ResourceId
    * ResourceType
    * TransitGatewayAttachmentId

### TransitGatewayRouteList
* TransitGatewayRouteList `array`
  * items
    * DestinationCidrBlock
    * PrefixListId
    * State
    * TransitGatewayAttachments
      * items
        * ResourceId
        * ResourceType
        * TransitGatewayAttachmentId
    * Type

### TransitGatewayRouteState
* TransitGatewayRouteState `string` (values: pending, active, blackhole, deleting, deleted)

### TransitGatewayRouteTable
* TransitGatewayRouteTable `object`: Describes a transit gateway route table.
  * CreationTime
  * DefaultAssociationRouteTable
  * DefaultPropagationRouteTable
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayId
  * TransitGatewayRouteTableId

### TransitGatewayRouteTableAssociation
* TransitGatewayRouteTableAssociation `object`: Describes an association between a route table and a resource attachment.
  * ResourceId
  * ResourceType
  * State
  * TransitGatewayAttachmentId

### TransitGatewayRouteTableAssociationList
* TransitGatewayRouteTableAssociationList `array`
  * items
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId

### TransitGatewayRouteTableId
* TransitGatewayRouteTableId `string`

### TransitGatewayRouteTableIdStringList
* TransitGatewayRouteTableIdStringList `array`
  * items

### TransitGatewayRouteTableList
* TransitGatewayRouteTableList `array`
  * items
    * CreationTime
    * DefaultAssociationRouteTable
    * DefaultPropagationRouteTable
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * TransitGatewayRouteTableId

### TransitGatewayRouteTablePropagation
* TransitGatewayRouteTablePropagation `object`: Describes a route table propagation.
  * ResourceId
  * ResourceType
  * State
  * TransitGatewayAttachmentId

### TransitGatewayRouteTablePropagationList
* TransitGatewayRouteTablePropagationList `array`
  * items
    * ResourceId
    * ResourceType
    * State
    * TransitGatewayAttachmentId

### TransitGatewayRouteTableState
* TransitGatewayRouteTableState `string` (values: pending, available, deleting, deleted)

### TransitGatewayRouteType
* TransitGatewayRouteType `string` (values: static, propagated)

### TransitGatewayState
* TransitGatewayState `string` (values: pending, available, modifying, deleting, deleted)

### TransitGatewaySubnetIdList
* TransitGatewaySubnetIdList `array`
  * items

### TransitGatewayVpcAttachment
* TransitGatewayVpcAttachment `object`: Describes a VPC attachment.
  * CreationTime
  * Options
    * ApplianceModeSupport
    * DnsSupport
    * Ipv6Support
  * State
  * SubnetIds
    * items
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayAttachmentId
  * TransitGatewayId
  * VpcId
  * VpcOwnerId

### TransitGatewayVpcAttachmentList
* TransitGatewayVpcAttachmentList `array`
  * items
    * CreationTime
    * Options
      * ApplianceModeSupport
      * DnsSupport
      * Ipv6Support
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayAttachmentId
    * TransitGatewayId
    * VpcId
    * VpcOwnerId

### TransitGatewayVpcAttachmentOptions
* TransitGatewayVpcAttachmentOptions `object`: Describes the VPC attachment options.
  * ApplianceModeSupport
  * DnsSupport
  * Ipv6Support

### TransportProtocol
* TransportProtocol `string` (values: tcp, udp)

### TunnelInsideIpVersion
* TunnelInsideIpVersion `string` (values: ipv4, ipv6)

### TunnelOption
* TunnelOption `object`: The VPN tunnel options.
  * DpdTimeoutAction
  * DpdTimeoutSeconds
  * IkeVersions
    * items
      * Value
  * OutsideIpAddress
  * Phase1DHGroupNumbers
    * items
      * Value
  * Phase1EncryptionAlgorithms
    * items
      * Value
  * Phase1IntegrityAlgorithms
    * items
      * Value
  * Phase1LifetimeSeconds
  * Phase2DHGroupNumbers
    * items
      * Value
  * Phase2EncryptionAlgorithms
    * items
      * Value
  * Phase2IntegrityAlgorithms
    * items
      * Value
  * Phase2LifetimeSeconds
  * PreSharedKey
  * RekeyFuzzPercentage
  * RekeyMarginTimeSeconds
  * ReplayWindowSize
  * StartupAction
  * TunnelInsideCidr
  * TunnelInsideIpv6Cidr

### TunnelOptionsList
* TunnelOptionsList `array`
  * items
    * DpdTimeoutAction
    * DpdTimeoutSeconds
    * IkeVersions
      * items
        * Value
    * OutsideIpAddress
    * Phase1DHGroupNumbers
      * items
        * Value
    * Phase1EncryptionAlgorithms
      * items
        * Value
    * Phase1IntegrityAlgorithms
      * items
        * Value
    * Phase1LifetimeSeconds
    * Phase2DHGroupNumbers
      * items
        * Value
    * Phase2EncryptionAlgorithms
      * items
        * Value
    * Phase2IntegrityAlgorithms
      * items
        * Value
    * Phase2LifetimeSeconds
    * PreSharedKey
    * RekeyFuzzPercentage
    * RekeyMarginTimeSeconds
    * ReplayWindowSize
    * StartupAction
    * TunnelInsideCidr
    * TunnelInsideIpv6Cidr

### UnassignIpv6AddressesRequest
* UnassignIpv6AddressesRequest `object`
  * Ipv6Addresses **required**
    * items
  * NetworkInterfaceId **required**

### UnassignIpv6AddressesResult
* UnassignIpv6AddressesResult `object`
  * NetworkInterfaceId
  * UnassignedIpv6Addresses
    * items

### UnassignPrivateIpAddressesRequest
* UnassignPrivateIpAddressesRequest `object`: Contains the parameters for UnassignPrivateIpAddresses.
  * NetworkInterfaceId **required**
  * PrivateIpAddresses **required**
    * items

### UnlimitedSupportedInstanceFamily
* UnlimitedSupportedInstanceFamily `string` (values: t2, t3, t3a, t4g)

### UnmonitorInstancesRequest
* UnmonitorInstancesRequest `object`
  * DryRun
  * InstanceIds **required**
    * items

### UnmonitorInstancesResult
* UnmonitorInstancesResult `object`
  * InstanceMonitorings
    * items
      * InstanceId
      * Monitoring
        * State

### UnsuccessfulInstanceCreditSpecificationErrorCode
* UnsuccessfulInstanceCreditSpecificationErrorCode `string` (values: InvalidInstanceID.Malformed, InvalidInstanceID.NotFound, IncorrectInstanceState, InstanceCreditSpecification.NotSupported)

### UnsuccessfulInstanceCreditSpecificationItem
* UnsuccessfulInstanceCreditSpecificationItem `object`: Describes the burstable performance instance whose credit option for CPU usage was not modified.
  * Error
    * Code
    * Message
  * InstanceId

### UnsuccessfulInstanceCreditSpecificationItemError
* UnsuccessfulInstanceCreditSpecificationItemError `object`: Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
  * Code
  * Message

### UnsuccessfulInstanceCreditSpecificationSet
* UnsuccessfulInstanceCreditSpecificationSet `array`
  * items
    * Error
      * Code
      * Message
    * InstanceId

### UnsuccessfulItem
* UnsuccessfulItem `object`: Information about items that were not successfully processed in a batch call.
  * Error
    * Code
    * Message
  * ResourceId

### UnsuccessfulItemError
* UnsuccessfulItemError `object`: Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.
  * Code
  * Message

### UnsuccessfulItemList
* UnsuccessfulItemList `array`
  * items
    * Error
      * Code
      * Message
    * ResourceId

### UnsuccessfulItemSet
* UnsuccessfulItemSet `array`
  * items
    * Error
      * Code
      * Message
    * ResourceId

### UpdateSecurityGroupRuleDescriptionsEgressRequest
* UpdateSecurityGroupRuleDescriptionsEgressRequest `object`
  * DryRun
  * GroupId
  * GroupName
  * IpPermissions **required**
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

### UpdateSecurityGroupRuleDescriptionsEgressResult
* UpdateSecurityGroupRuleDescriptionsEgressResult `object`
  * Return

### UpdateSecurityGroupRuleDescriptionsIngressRequest
* UpdateSecurityGroupRuleDescriptionsIngressRequest `object`
  * DryRun
  * GroupId
  * GroupName
  * IpPermissions **required**
    * items
      * FromPort
      * IpProtocol
      * IpRanges
        * items
          * CidrIp
          * Description
      * Ipv6Ranges
        * items
          * CidrIpv6
          * Description
      * PrefixListIds
        * items
          * Description
          * PrefixListId
      * ToPort
      * UserIdGroupPairs
        * items
          * Description
          * GroupId
          * GroupName
          * PeeringStatus
          * UserId
          * VpcId
          * VpcPeeringConnectionId

### UpdateSecurityGroupRuleDescriptionsIngressResult
* UpdateSecurityGroupRuleDescriptionsIngressResult `object`
  * Return

### UsageClassType
* UsageClassType `string` (values: spot, on-demand)

### UsageClassTypeList
* UsageClassTypeList `array`
  * items

### UserBucket
* UserBucket `object`: Describes the Amazon S3 bucket for the disk image.
  * S3Bucket
  * S3Key

### UserBucketDetails
* UserBucketDetails `object`: Describes the Amazon S3 bucket for the disk image.
  * S3Bucket
  * S3Key

### UserData
* UserData `object`: Describes the user data for an instance.
  * Data

### UserGroupStringList
* UserGroupStringList `array`
  * items

### UserIdGroupPair
* UserIdGroupPair `object`: Describes a security group and AWS account ID pair.
  * Description
  * GroupId
  * GroupName
  * PeeringStatus
  * UserId
  * VpcId
  * VpcPeeringConnectionId

### UserIdGroupPairList
* UserIdGroupPairList `array`
  * items
    * Description
    * GroupId
    * GroupName
    * PeeringStatus
    * UserId
    * VpcId
    * VpcPeeringConnectionId

### UserIdGroupPairSet
* UserIdGroupPairSet `array`
  * items
    * Description
    * GroupId
    * GroupName
    * PeeringStatus
    * UserId
    * VpcId
    * VpcPeeringConnectionId

### UserIdStringList
* UserIdStringList `array`
  * items

### VCpuCount
* VCpuCount `integer`

### VCpuInfo
* VCpuInfo `object`: Describes the vCPU configurations for the instance type.
  * DefaultCores
  * DefaultThreadsPerCore
  * DefaultVCpus
  * ValidCores
    * items
  * ValidThreadsPerCore
    * items

### ValidationError
* ValidationError `object`: The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.
  * Code
  * Message

### ValidationWarning
* ValidationWarning `object`: The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
  * Errors
    * items
      * Code
      * Message

### ValueStringList
* ValueStringList `array`
  * items

### VersionDescription
* VersionDescription `string`

### VersionStringList
* VersionStringList `array`
  * items

### VgwTelemetry
* VgwTelemetry `object`: Describes telemetry for a VPN tunnel.
  * AcceptedRouteCount
  * CertificateArn
  * LastStatusChange
  * OutsideIpAddress
  * Status
  * StatusMessage

### VgwTelemetryList
* VgwTelemetryList `array`
  * items
    * AcceptedRouteCount
    * CertificateArn
    * LastStatusChange
    * OutsideIpAddress
    * Status
    * StatusMessage

### VirtualizationType
* VirtualizationType `string` (values: hvm, paravirtual)

### VirtualizationTypeList
* VirtualizationTypeList `array`
  * items

### Volume
* Volume `object`: Describes a volume.
  * Attachments
    * items
      * AttachTime
      * DeleteOnTermination
      * Device
      * InstanceId
      * State
      * VolumeId
  * AvailabilityZone
  * CreateTime
  * Encrypted
  * FastRestored
  * Iops
  * KmsKeyId
  * MultiAttachEnabled
  * OutpostArn
  * Size
  * SnapshotId
  * State
  * Tags
    * items
      * Key
      * Value
  * Throughput
  * VolumeId
  * VolumeType

### VolumeAttachment
* VolumeAttachment `object`: Describes volume attachment details.
  * AttachTime
  * DeleteOnTermination
  * Device
  * InstanceId
  * State
  * VolumeId

### VolumeAttachmentList
* VolumeAttachmentList `array`
  * items
    * AttachTime
    * DeleteOnTermination
    * Device
    * InstanceId
    * State
    * VolumeId

### VolumeAttachmentState
* VolumeAttachmentState `string` (values: attaching, attached, detaching, detached, busy)

### VolumeAttributeName
* VolumeAttributeName `string` (values: autoEnableIO, productCodes)

### VolumeDetail
* VolumeDetail `object`: Describes an EBS volume.
  * Size **required**

### VolumeId
* VolumeId `string`

### VolumeIdStringList
* VolumeIdStringList `array`
  * items

### VolumeList
* VolumeList `array`
  * items
    * Attachments
      * items
        * AttachTime
        * DeleteOnTermination
        * Device
        * InstanceId
        * State
        * VolumeId
    * AvailabilityZone
    * CreateTime
    * Encrypted
    * FastRestored
    * Iops
    * KmsKeyId
    * MultiAttachEnabled
    * OutpostArn
    * Size
    * SnapshotId
    * State
    * Tags
      * items
        * Key
        * Value
    * Throughput
    * VolumeId
    * VolumeType

### VolumeModification
* VolumeModification `object`: <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
  * EndTime
  * ModificationState
  * OriginalIops
  * OriginalMultiAttachEnabled
  * OriginalSize
  * OriginalThroughput
  * OriginalVolumeType
  * Progress
  * StartTime
  * StatusMessage
  * TargetIops
  * TargetMultiAttachEnabled
  * TargetSize
  * TargetThroughput
  * TargetVolumeType
  * VolumeId

### VolumeModificationList
* VolumeModificationList `array`
  * items
    * EndTime
    * ModificationState
    * OriginalIops
    * OriginalMultiAttachEnabled
    * OriginalSize
    * OriginalThroughput
    * OriginalVolumeType
    * Progress
    * StartTime
    * StatusMessage
    * TargetIops
    * TargetMultiAttachEnabled
    * TargetSize
    * TargetThroughput
    * TargetVolumeType
    * VolumeId

### VolumeModificationState
* VolumeModificationState `string` (values: modifying, optimizing, completed, failed)

### VolumeState
* VolumeState `string` (values: creating, available, in-use, deleting, deleted, error)

### VolumeStatusAction
* VolumeStatusAction `object`: Describes a volume status operation code.
  * Code
  * Description
  * EventId
  * EventType

### VolumeStatusActionsList
* VolumeStatusActionsList `array`
  * items
    * Code
    * Description
    * EventId
    * EventType

### VolumeStatusAttachmentStatus
* VolumeStatusAttachmentStatus `object`: Information about the instances to which the volume is attached.
  * InstanceId
  * IoPerformance

### VolumeStatusAttachmentStatusList
* VolumeStatusAttachmentStatusList `array`
  * items
    * InstanceId
    * IoPerformance

### VolumeStatusDetails
* VolumeStatusDetails `object`: Describes a volume status.
  * Name
  * Status

### VolumeStatusDetailsList
* VolumeStatusDetailsList `array`
  * items
    * Name
    * Status

### VolumeStatusEvent
* VolumeStatusEvent `object`: Describes a volume status event.
  * Description
  * EventId
  * EventType
  * InstanceId
  * NotAfter
  * NotBefore

### VolumeStatusEventsList
* VolumeStatusEventsList `array`
  * items
    * Description
    * EventId
    * EventType
    * InstanceId
    * NotAfter
    * NotBefore

### VolumeStatusInfo
* VolumeStatusInfo `object`: Describes the status of a volume.
  * Details
    * items
      * Name
      * Status
  * Status

### VolumeStatusInfoStatus
* VolumeStatusInfoStatus `string` (values: ok, impaired, insufficient-data)

### VolumeStatusItem
* VolumeStatusItem `object`: Describes the volume status.
  * Actions
    * items
      * Code
      * Description
      * EventId
      * EventType
  * AttachmentStatuses
    * items
      * InstanceId
      * IoPerformance
  * AvailabilityZone
  * Events
    * items
      * Description
      * EventId
      * EventType
      * InstanceId
      * NotAfter
      * NotBefore
  * OutpostArn
  * VolumeId
  * VolumeStatus
    * Details
      * items
        * Name
        * Status
    * Status

### VolumeStatusList
* VolumeStatusList `array`
  * items
    * Actions
      * items
        * Code
        * Description
        * EventId
        * EventType
    * AttachmentStatuses
      * items
        * InstanceId
        * IoPerformance
    * AvailabilityZone
    * Events
      * items
        * Description
        * EventId
        * EventType
        * InstanceId
        * NotAfter
        * NotBefore
    * OutpostArn
    * VolumeId
    * VolumeStatus
      * Details
        * items
          * Name
          * Status
      * Status

### VolumeStatusName
* VolumeStatusName `string` (values: io-enabled, io-performance)

### VolumeType
* VolumeType `string` (values: standard, io1, io2, gp2, sc1, st1, gp3)

### Vpc
* Vpc `object`: Describes a VPC.
  * CidrBlock
  * CidrBlockAssociationSet
    * items
      * AssociationId
      * CidrBlock
      * CidrBlockState
        * State
        * StatusMessage
  * DhcpOptionsId
  * InstanceTenancy
  * Ipv6CidrBlockAssociationSet
    * items
      * AssociationId
      * Ipv6CidrBlock
      * Ipv6CidrBlockState
        * State
        * StatusMessage
      * Ipv6Pool
      * NetworkBorderGroup
  * IsDefault
  * OwnerId
  * State
  * Tags
    * items
      * Key
      * Value
  * VpcId

### VpcAttachment
* VpcAttachment `object`: Describes an attachment between a virtual private gateway and a VPC.
  * State
  * VpcId

### VpcAttachmentList
* VpcAttachmentList `array`
  * items
    * State
    * VpcId

### VpcAttributeName
* VpcAttributeName `string` (values: enableDnsSupport, enableDnsHostnames)

### VpcCidrAssociationId
* VpcCidrAssociationId `string`

### VpcCidrBlockAssociation
* VpcCidrBlockAssociation `object`: Describes an IPv4 CIDR block associated with a VPC.
  * AssociationId
  * CidrBlock
  * CidrBlockState
    * State
    * StatusMessage

### VpcCidrBlockAssociationSet
* VpcCidrBlockAssociationSet `array`
  * items
    * AssociationId
    * CidrBlock
    * CidrBlockState
      * State
      * StatusMessage

### VpcCidrBlockState
* VpcCidrBlockState `object`: Describes the state of a CIDR block.
  * State
  * StatusMessage

### VpcCidrBlockStateCode
* VpcCidrBlockStateCode `string` (values: associating, associated, disassociating, disassociated, failing, failed)

### VpcClassicLink
* VpcClassicLink `object`: Describes whether a VPC is enabled for ClassicLink.
  * ClassicLinkEnabled
  * Tags
    * items
      * Key
      * Value
  * VpcId

### VpcClassicLinkIdList
* VpcClassicLinkIdList `array`
  * items

### VpcClassicLinkList
* VpcClassicLinkList `array`
  * items
    * ClassicLinkEnabled
    * Tags
      * items
        * Key
        * Value
    * VpcId

### VpcEndpoint
* VpcEndpoint `object`: Describes a VPC endpoint.
  * CreationTimestamp
  * DnsEntries
    * items
      * DnsName
      * HostedZoneId
  * Groups
    * items
      * GroupId
      * GroupName
  * LastError
    * Code
    * Message
  * NetworkInterfaceIds
    * items
  * OwnerId
  * PolicyDocument
  * PrivateDnsEnabled
  * RequesterManaged
  * RouteTableIds
    * items
  * ServiceName
  * State
  * SubnetIds
    * items
  * Tags
    * items
      * Key
      * Value
  * VpcEndpointId
  * VpcEndpointType
  * VpcId

### VpcEndpointConnection
* VpcEndpointConnection `object`: Describes a VPC endpoint connection to a service.
  * CreationTimestamp
  * DnsEntries
    * items
      * DnsName
      * HostedZoneId
  * GatewayLoadBalancerArns
    * items
  * NetworkLoadBalancerArns
    * items
  * ServiceId
  * VpcEndpointId
  * VpcEndpointOwner
  * VpcEndpointState

### VpcEndpointConnectionSet
* VpcEndpointConnectionSet `array`
  * items
    * CreationTimestamp
    * DnsEntries
      * items
        * DnsName
        * HostedZoneId
    * GatewayLoadBalancerArns
      * items
    * NetworkLoadBalancerArns
      * items
    * ServiceId
    * VpcEndpointId
    * VpcEndpointOwner
    * VpcEndpointState

### VpcEndpointId
* VpcEndpointId `string`

### VpcEndpointIdList
* VpcEndpointIdList `array`
  * items

### VpcEndpointRouteTableIdList
* VpcEndpointRouteTableIdList `array`
  * items

### VpcEndpointSecurityGroupIdList
* VpcEndpointSecurityGroupIdList `array`
  * items

### VpcEndpointServiceId
* VpcEndpointServiceId `string`

### VpcEndpointServiceIdList
* VpcEndpointServiceIdList `array`
  * items

### VpcEndpointSet
* VpcEndpointSet `array`
  * items
    * CreationTimestamp
    * DnsEntries
      * items
        * DnsName
        * HostedZoneId
    * Groups
      * items
        * GroupId
        * GroupName
    * LastError
      * Code
      * Message
    * NetworkInterfaceIds
      * items
    * OwnerId
    * PolicyDocument
    * PrivateDnsEnabled
    * RequesterManaged
    * RouteTableIds
      * items
    * ServiceName
    * State
    * SubnetIds
      * items
    * Tags
      * items
        * Key
        * Value
    * VpcEndpointId
    * VpcEndpointType
    * VpcId

### VpcEndpointSubnetIdList
* VpcEndpointSubnetIdList `array`
  * items

### VpcEndpointType
* VpcEndpointType `string` (values: Interface, Gateway, GatewayLoadBalancer)

### VpcFlowLogId
* VpcFlowLogId `string`

### VpcId
* VpcId `string`

### VpcIdStringList
* VpcIdStringList `array`
  * items

### VpcIpv6CidrBlockAssociation
* VpcIpv6CidrBlockAssociation `object`: Describes an IPv6 CIDR block associated with a VPC.
  * AssociationId
  * Ipv6CidrBlock
  * Ipv6CidrBlockState
    * State
    * StatusMessage
  * Ipv6Pool
  * NetworkBorderGroup

### VpcIpv6CidrBlockAssociationSet
* VpcIpv6CidrBlockAssociationSet `array`
  * items
    * AssociationId
    * Ipv6CidrBlock
    * Ipv6CidrBlockState
      * State
      * StatusMessage
    * Ipv6Pool
    * NetworkBorderGroup

### VpcList
* VpcList `array`
  * items
    * CidrBlock
    * CidrBlockAssociationSet
      * items
        * AssociationId
        * CidrBlock
        * CidrBlockState
          * State
          * StatusMessage
    * DhcpOptionsId
    * InstanceTenancy
    * Ipv6CidrBlockAssociationSet
      * items
        * AssociationId
        * Ipv6CidrBlock
        * Ipv6CidrBlockState
          * State
          * StatusMessage
        * Ipv6Pool
        * NetworkBorderGroup
    * IsDefault
    * OwnerId
    * State
    * Tags
      * items
        * Key
        * Value
    * VpcId

### VpcPeeringConnection
* VpcPeeringConnection `object`: Describes a VPC peering connection.
  * AccepterVpcInfo
    * CidrBlock
    * CidrBlockSet
      * items
        * CidrBlock
    * Ipv6CidrBlockSet
      * items
        * Ipv6CidrBlock
    * OwnerId
    * PeeringOptions
      * AllowDnsResolutionFromRemoteVpc
      * AllowEgressFromLocalClassicLinkToRemoteVpc
      * AllowEgressFromLocalVpcToRemoteClassicLink
    * Region
    * VpcId
  * ExpirationTime
  * RequesterVpcInfo
    * CidrBlock
    * CidrBlockSet
      * items
        * CidrBlock
    * Ipv6CidrBlockSet
      * items
        * Ipv6CidrBlock
    * OwnerId
    * PeeringOptions
      * AllowDnsResolutionFromRemoteVpc
      * AllowEgressFromLocalClassicLinkToRemoteVpc
      * AllowEgressFromLocalVpcToRemoteClassicLink
    * Region
    * VpcId
  * Status
    * Code
    * Message
  * Tags
    * items
      * Key
      * Value
  * VpcPeeringConnectionId

### VpcPeeringConnectionId
* VpcPeeringConnectionId `string`

### VpcPeeringConnectionIdList
* VpcPeeringConnectionIdList `array`
  * items

### VpcPeeringConnectionList
* VpcPeeringConnectionList `array`
  * items
    * AccepterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * ExpirationTime
    * RequesterVpcInfo
      * CidrBlock
      * CidrBlockSet
        * items
          * CidrBlock
      * Ipv6CidrBlockSet
        * items
          * Ipv6CidrBlock
      * OwnerId
      * PeeringOptions
        * AllowDnsResolutionFromRemoteVpc
        * AllowEgressFromLocalClassicLinkToRemoteVpc
        * AllowEgressFromLocalVpcToRemoteClassicLink
      * Region
      * VpcId
    * Status
      * Code
      * Message
    * Tags
      * items
        * Key
        * Value
    * VpcPeeringConnectionId

### VpcPeeringConnectionOptionsDescription
* VpcPeeringConnectionOptionsDescription `object`: Describes the VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc
  * AllowEgressFromLocalClassicLinkToRemoteVpc
  * AllowEgressFromLocalVpcToRemoteClassicLink

### VpcPeeringConnectionStateReason
* VpcPeeringConnectionStateReason `object`: Describes the status of a VPC peering connection.
  * Code
  * Message

### VpcPeeringConnectionStateReasonCode
* VpcPeeringConnectionStateReasonCode `string` (values: initiating-request, pending-acceptance, active, deleted, rejected, failed, expired, provisioning, deleting)

### VpcPeeringConnectionVpcInfo
* VpcPeeringConnectionVpcInfo `object`: Describes a VPC in a VPC peering connection.
  * CidrBlock
  * CidrBlockSet
    * items
      * CidrBlock
  * Ipv6CidrBlockSet
    * items
      * Ipv6CidrBlock
  * OwnerId
  * PeeringOptions
    * AllowDnsResolutionFromRemoteVpc
    * AllowEgressFromLocalClassicLinkToRemoteVpc
    * AllowEgressFromLocalVpcToRemoteClassicLink
  * Region
  * VpcId

### VpcState
* VpcState `string` (values: pending, available)

### VpcTenancy
* VpcTenancy `string` (values: default)

### VpnConnection
* VpnConnection `object`: Describes a VPN connection.
  * Category
  * CustomerGatewayConfiguration
  * CustomerGatewayId
  * Options
    * EnableAcceleration
    * LocalIpv4NetworkCidr
    * LocalIpv6NetworkCidr
    * RemoteIpv4NetworkCidr
    * RemoteIpv6NetworkCidr
    * StaticRoutesOnly
    * TunnelInsideIpVersion
    * TunnelOptions
      * items
        * DpdTimeoutAction
        * DpdTimeoutSeconds
        * IkeVersions
          * items
        * OutsideIpAddress
        * Phase1DHGroupNumbers
          * items
        * Phase1EncryptionAlgorithms
          * items
        * Phase1IntegrityAlgorithms
          * items
        * Phase1LifetimeSeconds
        * Phase2DHGroupNumbers
          * items
        * Phase2EncryptionAlgorithms
          * items
        * Phase2IntegrityAlgorithms
          * items
        * Phase2LifetimeSeconds
        * PreSharedKey
        * RekeyFuzzPercentage
        * RekeyMarginTimeSeconds
        * ReplayWindowSize
        * StartupAction
        * TunnelInsideCidr
        * TunnelInsideIpv6Cidr
  * Routes
    * items
      * DestinationCidrBlock
      * Source
      * State
  * State
  * Tags
    * items
      * Key
      * Value
  * TransitGatewayId
  * Type
  * VgwTelemetry
    * items
      * AcceptedRouteCount
      * CertificateArn
      * LastStatusChange
      * OutsideIpAddress
      * Status
      * StatusMessage
  * VpnConnectionId
  * VpnGatewayId

### VpnConnectionId
* VpnConnectionId `string`

### VpnConnectionIdStringList
* VpnConnectionIdStringList `array`
  * items

### VpnConnectionList
* VpnConnectionList `array`
  * items
    * Category
    * CustomerGatewayConfiguration
    * CustomerGatewayId
    * Options
      * EnableAcceleration
      * LocalIpv4NetworkCidr
      * LocalIpv6NetworkCidr
      * RemoteIpv4NetworkCidr
      * RemoteIpv6NetworkCidr
      * StaticRoutesOnly
      * TunnelInsideIpVersion
      * TunnelOptions
        * items
          * DpdTimeoutAction
          * DpdTimeoutSeconds
          * IkeVersions
          * OutsideIpAddress
          * Phase1DHGroupNumbers
          * Phase1EncryptionAlgorithms
          * Phase1IntegrityAlgorithms
          * Phase1LifetimeSeconds
          * Phase2DHGroupNumbers
          * Phase2EncryptionAlgorithms
          * Phase2IntegrityAlgorithms
          * Phase2LifetimeSeconds
          * PreSharedKey
          * RekeyFuzzPercentage
          * RekeyMarginTimeSeconds
          * ReplayWindowSize
          * StartupAction
          * TunnelInsideCidr
          * TunnelInsideIpv6Cidr
    * Routes
      * items
        * DestinationCidrBlock
        * Source
        * State
    * State
    * Tags
      * items
        * Key
        * Value
    * TransitGatewayId
    * Type
    * VgwTelemetry
      * items
        * AcceptedRouteCount
        * CertificateArn
        * LastStatusChange
        * OutsideIpAddress
        * Status
        * StatusMessage
    * VpnConnectionId
    * VpnGatewayId

### VpnConnectionOptions
* VpnConnectionOptions `object`: Describes VPN connection options.
  * EnableAcceleration
  * LocalIpv4NetworkCidr
  * LocalIpv6NetworkCidr
  * RemoteIpv4NetworkCidr
  * RemoteIpv6NetworkCidr
  * StaticRoutesOnly
  * TunnelInsideIpVersion
  * TunnelOptions
    * items
      * DpdTimeoutAction
      * DpdTimeoutSeconds
      * IkeVersions
        * items
          * Value
      * OutsideIpAddress
      * Phase1DHGroupNumbers
        * items
          * Value
      * Phase1EncryptionAlgorithms
        * items
          * Value
      * Phase1IntegrityAlgorithms
        * items
          * Value
      * Phase1LifetimeSeconds
      * Phase2DHGroupNumbers
        * items
          * Value
      * Phase2EncryptionAlgorithms
        * items
          * Value
      * Phase2IntegrityAlgorithms
        * items
          * Value
      * Phase2LifetimeSeconds
      * PreSharedKey
      * RekeyFuzzPercentage
      * RekeyMarginTimeSeconds
      * ReplayWindowSize
      * StartupAction
      * TunnelInsideCidr
      * TunnelInsideIpv6Cidr

### VpnConnectionOptionsSpecification
* VpnConnectionOptionsSpecification `object`: Describes VPN connection options.
  * EnableAcceleration
  * LocalIpv4NetworkCidr
  * LocalIpv6NetworkCidr
  * RemoteIpv4NetworkCidr
  * RemoteIpv6NetworkCidr
  * StaticRoutesOnly
  * TunnelInsideIpVersion
  * TunnelOptions
    * items [VpnTunnelOptionsSpecification](#vpntunneloptionsspecification)

### VpnEcmpSupportValue
* VpnEcmpSupportValue `string` (values: enable, disable)

### VpnGateway
* VpnGateway `object`: Describes a virtual private gateway.
  * AmazonSideAsn
  * AvailabilityZone
  * State
  * Tags
    * items
      * Key
      * Value
  * Type
  * VpcAttachments
    * items
      * State
      * VpcId
  * VpnGatewayId

### VpnGatewayId
* VpnGatewayId `string`

### VpnGatewayIdStringList
* VpnGatewayIdStringList `array`
  * items

### VpnGatewayList
* VpnGatewayList `array`
  * items
    * AmazonSideAsn
    * AvailabilityZone
    * State
    * Tags
      * items
        * Key
        * Value
    * Type
    * VpcAttachments
      * items
        * State
        * VpcId
    * VpnGatewayId

### VpnProtocol
* VpnProtocol `string` (values: openvpn)

### VpnState
* VpnState `string` (values: pending, available, deleting, deleted)

### VpnStaticRoute
* VpnStaticRoute `object`: Describes a static route for a VPN connection.
  * DestinationCidrBlock
  * Source
  * State

### VpnStaticRouteList
* VpnStaticRouteList `array`
  * items
    * DestinationCidrBlock
    * Source
    * State

### VpnStaticRouteSource
* VpnStaticRouteSource `string` (values: Static)

### VpnTunnelOptionsSpecification
* VpnTunnelOptionsSpecification `object`: The tunnel options for a single VPN tunnel.
  * DPDTimeoutAction
  * DPDTimeoutSeconds
  * IKEVersions
    * items
      * Value
  * Phase1DHGroupNumbers
    * items
      * Value
  * Phase1EncryptionAlgorithms
    * items
      * Value
  * Phase1IntegrityAlgorithms
    * items
      * Value
  * Phase1LifetimeSeconds
  * Phase2DHGroupNumbers
    * items
      * Value
  * Phase2EncryptionAlgorithms
    * items
      * Value
  * Phase2IntegrityAlgorithms
    * items
      * Value
  * Phase2LifetimeSeconds
  * PreSharedKey
  * RekeyFuzzPercentage
  * RekeyMarginTimeSeconds
  * ReplayWindowSize
  * StartupAction
  * TunnelInsideCidr
  * TunnelInsideIpv6Cidr

### VpnTunnelOptionsSpecificationsList
* VpnTunnelOptionsSpecificationsList `array`
  * items [VpnTunnelOptionsSpecification](#vpntunneloptionsspecification)

### WithdrawByoipCidrRequest
* WithdrawByoipCidrRequest `object`
  * Cidr **required**
  * DryRun

### WithdrawByoipCidrResult
* WithdrawByoipCidrResult `object`
  * ByoipCidr
    * Cidr
    * Description
    * State
    * StatusMessage

### ZoneIdStringList
* ZoneIdStringList `array`
  * items

### ZoneNameStringList
* ZoneNameStringList `array`
  * items

### scope
* scope `string` (values: Availability Zone, Region)

### totalFpgaMemory
* totalFpgaMemory `integer`

### totalGpuMemory
* totalGpuMemory `integer`


