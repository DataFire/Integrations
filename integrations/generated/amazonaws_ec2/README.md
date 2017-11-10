# @datafire/amazonaws_ec2

Client library for Amazon Elastic Compute Cloud

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ec2
```

```js
let datafire = require('datafire');
let amazonaws_ec2 = require('@datafire/amazonaws_ec2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_ec2.AcceptReservedInstancesExchangeQuote({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides resizable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.</p>

## Actions
### AcceptReservedInstancesExchangeQuote



```js
amazonaws_ec2.AcceptReservedInstancesExchangeQuote({
  "ReservedInstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* ReservedInstanceIds (array) **required**
* TargetConfigurations (array)

### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```

#### Parameters
* DryRun (boolean)
* VpcPeeringConnectionId (string)

### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```

#### Parameters
* Address (string)
* Domain (string)
* DryRun (boolean)

### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({
  "AvailabilityZone": "",
  "InstanceType": "",
  "Quantity": 0
}, context)
```

#### Parameters
* AutoPlacement (string)
* AvailabilityZone (string) **required**
* ClientToken (string)
* InstanceType (string) **required**
* Quantity (integer) **required**

### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* Ipv6AddressCount (integer)
* Ipv6Addresses (array)
* NetworkInterfaceId (string) **required**

### AssignPrivateIpAddresses



```js
amazonaws_ec2.AssignPrivateIpAddresses({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* AllowReassignment (boolean)
* NetworkInterfaceId (string) **required**
* PrivateIpAddresses (array)
* SecondaryPrivateIpAddressCount (integer)

### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```

#### Parameters
* AllocationId (string)
* AllowReassociation (boolean)
* DryRun (boolean)
* InstanceId (string)
* NetworkInterfaceId (string)
* PrivateIpAddress (string)
* PublicIp (string)

### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({
  "DhcpOptionsId": "",
  "VpcId": ""
}, context)
```

#### Parameters
* DhcpOptionsId (string) **required**
* DryRun (boolean)
* VpcId (string) **required**

### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({
  "IamInstanceProfile": {},
  "InstanceId": ""
}, context)
```

#### Parameters
* IamInstanceProfile (object) **required** - Describes an IAM instance profile.
* InstanceId (string) **required**

### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({
  "RouteTableId": "",
  "SubnetId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* RouteTableId (string) **required**
* SubnetId (string) **required**

### AssociateSubnetCidrBlock



```js
amazonaws_ec2.AssociateSubnetCidrBlock({
  "Ipv6CidrBlock": "",
  "SubnetId": ""
}, context)
```

#### Parameters
* Ipv6CidrBlock (string) **required**
* SubnetId (string) **required**

### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({
  "VpcId": ""
}, context)
```

#### Parameters
* AmazonProvidedIpv6CidrBlock (boolean)
* CidrBlock (string)
* VpcId (string) **required**

### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({
  "Groups": [],
  "InstanceId": "",
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* Groups (array) **required**
* InstanceId (string) **required**
* VpcId (string) **required**

### AttachInternetGateway



```js
amazonaws_ec2.AttachInternetGateway({
  "InternetGatewayId": "",
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InternetGatewayId (string) **required**
* VpcId (string) **required**

### AttachNetworkInterface



```js
amazonaws_ec2.AttachNetworkInterface({
  "DeviceIndex": 0,
  "InstanceId": "",
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* DeviceIndex (integer) **required**
* DryRun (boolean)
* InstanceId (string) **required**
* NetworkInterfaceId (string) **required**

### AttachVolume



```js
amazonaws_ec2.AttachVolume({
  "Device": "",
  "InstanceId": "",
  "VolumeId": ""
}, context)
```

#### Parameters
* Device (string) **required**
* DryRun (boolean)
* InstanceId (string) **required**
* VolumeId (string) **required**

### AttachVpnGateway



```js
amazonaws_ec2.AttachVpnGateway({
  "VpcId": "",
  "VpnGatewayId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**
* VpnGatewayId (string) **required**

### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Parameters
* CidrIp (string)
* DryRun (boolean)
* FromPort (integer)
* GroupId (string) **required**
* IpPermissions (array)
* IpProtocol (string)
* SourceSecurityGroupName (string)
* SourceSecurityGroupOwnerId (string)
* ToPort (integer)

### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```

#### Parameters
* CidrIp (string)
* DryRun (boolean)
* FromPort (integer)
* GroupId (string)
* GroupName (string)
* IpPermissions (array)
* IpProtocol (string)
* SourceSecurityGroupName (string)
* SourceSecurityGroupOwnerId (string)
* ToPort (integer)

### BundleInstance



```js
amazonaws_ec2.BundleInstance({
  "InstanceId": "",
  "Storage": {}
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**
* Storage (object) **required** - Describes the storage location for an instance store-backed AMI.

### CancelBundleTask



```js
amazonaws_ec2.CancelBundleTask({
  "BundleId": ""
}, context)
```

#### Parameters
* BundleId (string) **required**
* DryRun (boolean)

### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({
  "ConversionTaskId": ""
}, context)
```

#### Parameters
* ConversionTaskId (string) **required**
* DryRun (boolean)
* ReasonMessage (string)

### CancelExportTask



```js
amazonaws_ec2.CancelExportTask({
  "ExportTaskId": ""
}, context)
```

#### Parameters
* ExportTaskId (string) **required**

### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```

#### Parameters
* CancelReason (string)
* DryRun (boolean)
* ImportTaskId (string)

### CancelReservedInstancesListing



```js
amazonaws_ec2.CancelReservedInstancesListing({
  "ReservedInstancesListingId": ""
}, context)
```

#### Parameters
* ReservedInstancesListingId (string) **required**

### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({
  "SpotFleetRequestIds": [],
  "TerminateInstances": true
}, context)
```

#### Parameters
* DryRun (boolean)
* SpotFleetRequestIds (array) **required**
* TerminateInstances (boolean) **required**

### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({
  "SpotInstanceRequestIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* SpotInstanceRequestIds (array) **required**

### ConfirmProductInstance



```js
amazonaws_ec2.ConfirmProductInstance({
  "InstanceId": "",
  "ProductCode": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**
* ProductCode (string) **required**

### CopyFpgaImage



```js
amazonaws_ec2.CopyFpgaImage({
  "SourceFpgaImageId": "",
  "SourceRegion": ""
}, context)
```

#### Parameters
* ClientToken (string)
* Description (string)
* DryRun (boolean)
* Name (string)
* SourceFpgaImageId (string) **required**
* SourceRegion (string) **required**

### CopyImage



```js
amazonaws_ec2.CopyImage({
  "Name": "",
  "SourceImageId": "",
  "SourceRegion": ""
}, context)
```

#### Parameters
* ClientToken (string)
* Description (string)
* DryRun (boolean)
* Encrypted (boolean)
* KmsKeyId (string)
* Name (string) **required**
* SourceImageId (string) **required**
* SourceRegion (string) **required**

### CopySnapshot



```js
amazonaws_ec2.CopySnapshot({
  "SourceRegion": "",
  "SourceSnapshotId": ""
}, context)
```

#### Parameters
* Description (string)
* DestinationRegion (string)
* DryRun (boolean)
* Encrypted (boolean)
* KmsKeyId (string)
* PresignedUrl (string)
* SourceRegion (string) **required**
* SourceSnapshotId (string) **required**

### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({
  "BgpAsn": 0,
  "PublicIp": "",
  "Type": ""
}, context)
```

#### Parameters
* BgpAsn (integer) **required**
* DryRun (boolean)
* PublicIp (string) **required**
* Type (string) **required**

### CreateDefaultVpc



```js
amazonaws_ec2.CreateDefaultVpc({}, context)
```

#### Parameters
* DryRun (boolean)

### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({
  "DhcpConfigurations": []
}, context)
```

#### Parameters
* DhcpConfigurations (array) **required**
* DryRun (boolean)

### CreateEgressOnlyInternetGateway



```js
amazonaws_ec2.CreateEgressOnlyInternetGateway({
  "VpcId": ""
}, context)
```

#### Parameters
* ClientToken (string)
* DryRun (boolean)
* VpcId (string) **required**

### CreateFlowLogs



```js
amazonaws_ec2.CreateFlowLogs({
  "DeliverLogsPermissionArn": "",
  "LogGroupName": "",
  "ResourceIds": [],
  "ResourceType": "",
  "TrafficType": ""
}, context)
```

#### Parameters
* ClientToken (string)
* DeliverLogsPermissionArn (string) **required**
* LogGroupName (string) **required**
* ResourceIds (array) **required**
* ResourceType (string) **required**
* TrafficType (string) **required**

### CreateFpgaImage



```js
amazonaws_ec2.CreateFpgaImage({
  "InputStorageLocation": {}
}, context)
```

#### Parameters
* ClientToken (string)
* Description (string)
* DryRun (boolean)
* InputStorageLocation (object) **required** - Describes a storage location in Amazon S3.
* LogsStorageLocation (object) - Describes a storage location in Amazon S3.
* Name (string)

### CreateImage



```js
amazonaws_ec2.CreateImage({
  "InstanceId": "",
  "Name": ""
}, context)
```

#### Parameters
* BlockDeviceMappings (array)
* Description (string)
* DryRun (boolean)
* InstanceId (string) **required**
* Name (string) **required**
* NoReboot (boolean)

### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({
  "InstanceId": ""
}, context)
```

#### Parameters
* Description (string)
* ExportToS3Task (object) - Describes an instance export task.
* InstanceId (string) **required**
* TargetEnvironment (string)

### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```

#### Parameters
* DryRun (boolean)

### CreateKeyPair



```js
amazonaws_ec2.CreateKeyPair({
  "KeyName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* KeyName (string) **required**

### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({
  "AllocationId": "",
  "SubnetId": ""
}, context)
```

#### Parameters
* AllocationId (string) **required**
* ClientToken (string)
* SubnetId (string) **required**

### CreateNetworkAcl



```js
amazonaws_ec2.CreateNetworkAcl({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**

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

#### Parameters
* CidrBlock (string)
* DryRun (boolean)
* Egress (boolean) **required**
* IcmpTypeCode (object) - Describes the ICMP type and code.
* Ipv6CidrBlock (string)
* NetworkAclId (string) **required**
* PortRange (object) - Describes a range of ports.
* Protocol (string) **required**
* RuleAction (string) **required**
* RuleNumber (integer) **required**

### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({
  "SubnetId": ""
}, context)
```

#### Parameters
* Description (string)
* DryRun (boolean)
* Groups (array)
* Ipv6AddressCount (integer)
* Ipv6Addresses (array)
* PrivateIpAddress (string)
* PrivateIpAddresses (array)
* SecondaryPrivateIpAddressCount (integer)
* SubnetId (string) **required**

### CreateNetworkInterfacePermission



```js
amazonaws_ec2.CreateNetworkInterfacePermission({
  "NetworkInterfaceId": "",
  "Permission": ""
}, context)
```

#### Parameters
* AwsAccountId (string)
* AwsService (string)
* DryRun (boolean)
* NetworkInterfaceId (string) **required**
* Permission (string) **required**

### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({
  "GroupName": "",
  "Strategy": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* GroupName (string) **required**
* Strategy (string) **required**

### CreateReservedInstancesListing



```js
amazonaws_ec2.CreateReservedInstancesListing({
  "ClientToken": "",
  "InstanceCount": 0,
  "PriceSchedules": [],
  "ReservedInstancesId": ""
}, context)
```

#### Parameters
* ClientToken (string) **required**
* InstanceCount (integer) **required**
* PriceSchedules (array) **required**
* ReservedInstancesId (string) **required**

### CreateRoute



```js
amazonaws_ec2.CreateRoute({
  "RouteTableId": ""
}, context)
```

#### Parameters
* DestinationCidrBlock (string)
* DestinationIpv6CidrBlock (string)
* DryRun (boolean)
* EgressOnlyInternetGatewayId (string)
* GatewayId (string)
* InstanceId (string)
* NatGatewayId (string)
* NetworkInterfaceId (string)
* RouteTableId (string) **required**
* VpcPeeringConnectionId (string)

### CreateRouteTable



```js
amazonaws_ec2.CreateRouteTable({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**

### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({
  "Description": "",
  "GroupName": ""
}, context)
```

#### Parameters
* Description (string) **required**
* DryRun (boolean)
* GroupName (string) **required**
* VpcId (string)

### CreateSnapshot



```js
amazonaws_ec2.CreateSnapshot({
  "VolumeId": ""
}, context)
```

#### Parameters
* Description (string)
* DryRun (boolean)
* VolumeId (string) **required**

### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({
  "Bucket": ""
}, context)
```

#### Parameters
* Bucket (string) **required**
* DryRun (boolean)
* Prefix (string)

### CreateSubnet



```js
amazonaws_ec2.CreateSubnet({
  "CidrBlock": "",
  "VpcId": ""
}, context)
```

#### Parameters
* AvailabilityZone (string)
* CidrBlock (string) **required**
* DryRun (boolean)
* Ipv6CidrBlock (string)
* VpcId (string) **required**

### CreateTags



```js
amazonaws_ec2.CreateTags({
  "Resources": [],
  "Tags": []
}, context)
```

#### Parameters
* DryRun (boolean)
* Resources (array) **required**
* Tags (array) **required**

### CreateVolume



```js
amazonaws_ec2.CreateVolume({
  "AvailabilityZone": ""
}, context)
```

#### Parameters
* AvailabilityZone (string) **required**
* DryRun (boolean)
* Encrypted (boolean)
* Iops (integer)
* KmsKeyId (string)
* Size (integer)
* SnapshotId (string)
* TagSpecifications (array)
* VolumeType (string)

### CreateVpc



```js
amazonaws_ec2.CreateVpc({
  "CidrBlock": ""
}, context)
```

#### Parameters
* AmazonProvidedIpv6CidrBlock (boolean)
* CidrBlock (string) **required**
* DryRun (boolean)
* InstanceTenancy (string)

### CreateVpcEndpoint



```js
amazonaws_ec2.CreateVpcEndpoint({
  "VpcId": "",
  "ServiceName": ""
}, context)
```

#### Parameters
* ClientToken (string)
* DryRun (boolean)
* PolicyDocument (string)
* PrivateDnsEnabled (boolean)
* RouteTableIds (array)
* SecurityGroupIds (array)
* ServiceName (string) **required**
* SubnetIds (array)
* VpcEndpointType (string)
* VpcId (string) **required**

### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```

#### Parameters
* DryRun (boolean)
* PeerOwnerId (string)
* PeerVpcId (string)
* VpcId (string)

### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({
  "CustomerGatewayId": "",
  "Type": "",
  "VpnGatewayId": ""
}, context)
```

#### Parameters
* CustomerGatewayId (string) **required**
* DryRun (boolean)
* Options (object) - Describes VPN connection options.
* Type (string) **required**
* VpnGatewayId (string) **required**

### CreateVpnConnectionRoute



```js
amazonaws_ec2.CreateVpnConnectionRoute({
  "DestinationCidrBlock": "",
  "VpnConnectionId": ""
}, context)
```

#### Parameters
* DestinationCidrBlock (string) **required**
* VpnConnectionId (string) **required**

### CreateVpnGateway



```js
amazonaws_ec2.CreateVpnGateway({
  "Type": ""
}, context)
```

#### Parameters
* AmazonSideAsn (integer)
* AvailabilityZone (string)
* DryRun (boolean)
* Type (string) **required**

### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({
  "CustomerGatewayId": ""
}, context)
```

#### Parameters
* CustomerGatewayId (string) **required**
* DryRun (boolean)

### DeleteDhcpOptions



```js
amazonaws_ec2.DeleteDhcpOptions({
  "DhcpOptionsId": ""
}, context)
```

#### Parameters
* DhcpOptionsId (string) **required**
* DryRun (boolean)

### DeleteEgressOnlyInternetGateway



```js
amazonaws_ec2.DeleteEgressOnlyInternetGateway({
  "EgressOnlyInternetGatewayId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* EgressOnlyInternetGatewayId (string) **required**

### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({
  "FlowLogIds": []
}, context)
```

#### Parameters
* FlowLogIds (array) **required**

### DeleteFpgaImage



```js
amazonaws_ec2.DeleteFpgaImage({
  "FpgaImageId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* FpgaImageId (string) **required**

### DeleteInternetGateway



```js
amazonaws_ec2.DeleteInternetGateway({
  "InternetGatewayId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InternetGatewayId (string) **required**

### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({
  "KeyName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* KeyName (string) **required**

### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({
  "NatGatewayId": ""
}, context)
```

#### Parameters
* NatGatewayId (string) **required**

### DeleteNetworkAcl



```js
amazonaws_ec2.DeleteNetworkAcl({
  "NetworkAclId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* NetworkAclId (string) **required**

### DeleteNetworkAclEntry



```js
amazonaws_ec2.DeleteNetworkAclEntry({
  "Egress": true,
  "NetworkAclId": "",
  "RuleNumber": 0
}, context)
```

#### Parameters
* DryRun (boolean)
* Egress (boolean) **required**
* NetworkAclId (string) **required**
* RuleNumber (integer) **required**

### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* NetworkInterfaceId (string) **required**

### DeleteNetworkInterfacePermission



```js
amazonaws_ec2.DeleteNetworkInterfacePermission({
  "NetworkInterfacePermissionId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* Force (boolean)
* NetworkInterfacePermissionId (string) **required**

### DeletePlacementGroup



```js
amazonaws_ec2.DeletePlacementGroup({
  "GroupName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* GroupName (string) **required**

### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({
  "RouteTableId": ""
}, context)
```

#### Parameters
* DestinationCidrBlock (string)
* DestinationIpv6CidrBlock (string)
* DryRun (boolean)
* RouteTableId (string) **required**

### DeleteRouteTable



```js
amazonaws_ec2.DeleteRouteTable({
  "RouteTableId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* RouteTableId (string) **required**

### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```

#### Parameters
* DryRun (boolean)
* GroupId (string)
* GroupName (string)

### DeleteSnapshot



```js
amazonaws_ec2.DeleteSnapshot({
  "SnapshotId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* SnapshotId (string) **required**

### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```

#### Parameters
* DryRun (boolean)

### DeleteSubnet



```js
amazonaws_ec2.DeleteSubnet({
  "SubnetId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* SubnetId (string) **required**

### DeleteTags



```js
amazonaws_ec2.DeleteTags({
  "Resources": []
}, context)
```

#### Parameters
* DryRun (boolean)
* Resources (array) **required**
* Tags (array)

### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VolumeId (string) **required**

### DeleteVpc



```js
amazonaws_ec2.DeleteVpc({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**

### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({
  "VpcEndpointIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcEndpointIds (array) **required**

### DeleteVpcPeeringConnection



```js
amazonaws_ec2.DeleteVpcPeeringConnection({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcPeeringConnectionId (string) **required**

### DeleteVpnConnection



```js
amazonaws_ec2.DeleteVpnConnection({
  "VpnConnectionId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpnConnectionId (string) **required**

### DeleteVpnConnectionRoute



```js
amazonaws_ec2.DeleteVpnConnectionRoute({
  "DestinationCidrBlock": "",
  "VpnConnectionId": ""
}, context)
```

#### Parameters
* DestinationCidrBlock (string) **required**
* VpnConnectionId (string) **required**

### DeleteVpnGateway



```js
amazonaws_ec2.DeleteVpnGateway({
  "VpnGatewayId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpnGatewayId (string) **required**

### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({
  "ImageId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* ImageId (string) **required**

### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```

#### Parameters
* AttributeNames (array)
* DryRun (boolean)

### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```

#### Parameters
* AllocationIds (array)
* DryRun (boolean)
* Filters (array)
* PublicIps (array)

### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* ZoneNames (array)

### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```

#### Parameters
* BundleIds (array)
* DryRun (boolean)
* Filters (array)

### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* InstanceIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```

#### Parameters
* ConversionTaskIds (array)
* DryRun (boolean)

### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```

#### Parameters
* CustomerGatewayIds (array)
* DryRun (boolean)
* Filters (array)

### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```

#### Parameters
* DhcpOptionsIds (array)
* DryRun (boolean)
* Filters (array)

### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```

#### Parameters
* DryRun (boolean)
* EgressOnlyInternetGatewayIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeElasticGpus



```js
amazonaws_ec2.DescribeElasticGpus({}, context)
```

#### Parameters
* DryRun (boolean)
* ElasticGpuIds (array)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```

#### Parameters
* ExportTaskIds (array)

### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```

#### Parameters
* Filter (array)
* FlowLogIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeFpgaImageAttribute



```js
amazonaws_ec2.DescribeFpgaImageAttribute({
  "FpgaImageId": "",
  "Attribute": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* FpgaImageId (string) **required**

### DescribeFpgaImages



```js
amazonaws_ec2.DescribeFpgaImages({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* FpgaImageIds (array)
* MaxResults (integer)
* NextToken (string)
* Owners (array)

### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```

#### Parameters
* Filter (array)
* MaxDuration (integer)
* MaxResults (integer)
* MinDuration (integer)
* NextToken (string)
* OfferingId (string)

### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```

#### Parameters
* Filter (array)
* HostReservationIdSet (array)
* MaxResults (integer)
* NextToken (string)

### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```

#### Parameters
* Filter (array)
* HostIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```

#### Parameters
* AssociationIds (array)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```

#### Parameters
* Resource (string)

### DescribeIdentityIdFormat



```js
amazonaws_ec2.DescribeIdentityIdFormat({
  "PrincipalArn": ""
}, context)
```

#### Parameters
* PrincipalArn (string) **required**
* Resource (string)

### DescribeImageAttribute



```js
amazonaws_ec2.DescribeImageAttribute({
  "Attribute": "",
  "ImageId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* ImageId (string) **required**

### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```

#### Parameters
* DryRun (boolean)
* ExecutableUsers (array)
* Filters (array)
* ImageIds (array)
* Owners (array)

### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* ImportTaskIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* ImportTaskIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeInstanceAttribute



```js
amazonaws_ec2.DescribeInstanceAttribute({
  "Attribute": "",
  "InstanceId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* InstanceId (string) **required**

### DescribeInstanceStatus



```js
amazonaws_ec2.DescribeInstanceStatus({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* IncludeAllInstances (boolean)
* InstanceIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeInstances



```js
amazonaws_ec2.DescribeInstances({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* InstanceIds (array)
* MaxResults (integer)
* NextToken (string)

### DescribeInternetGateways



```js
amazonaws_ec2.DescribeInternetGateways({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* InternetGatewayIds (array)

### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* KeyNames (array)

### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* PublicIps (array)

### DescribeNatGateways



```js
amazonaws_ec2.DescribeNatGateways({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filter (array)
* MaxResults (integer)
* NatGatewayIds (array)
* NextToken (string)

### DescribeNetworkAcls



```js
amazonaws_ec2.DescribeNetworkAcls({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* NetworkAclIds (array)

### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* Attribute (string)
* DryRun (boolean)
* NetworkInterfaceId (string) **required**

### DescribeNetworkInterfacePermissions



```js
amazonaws_ec2.DescribeNetworkInterfacePermissions({}, context)
```

#### Parameters
* Filters (array)
* MaxResults (integer)
* NetworkInterfacePermissionIds (array)
* NextToken (string)

### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* NetworkInterfaceIds (array)

### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* GroupNames (array)

### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* PrefixListIds (array)

### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* RegionNames (array)

### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* OfferingClass (string)
* OfferingType (string)
* ReservedInstancesIds (array)

### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```

#### Parameters
* Filters (array)
* ReservedInstancesId (string)
* ReservedInstancesListingId (string)

### DescribeReservedInstancesModifications



```js
amazonaws_ec2.DescribeReservedInstancesModifications({}, context)
```

#### Parameters
* NextToken (string)
* Filters (array)
* NextToken (string)
* ReservedInstancesModificationIds (array)

### DescribeReservedInstancesOfferings



```js
amazonaws_ec2.DescribeReservedInstancesOfferings({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AvailabilityZone (string)
* DryRun (boolean)
* Filters (array)
* IncludeMarketplace (boolean)
* InstanceTenancy (string)
* InstanceType (string)
* MaxDuration (integer)
* MaxInstanceCount (integer)
* MaxResults (integer)
* MinDuration (integer)
* NextToken (string)
* OfferingClass (string)
* OfferingType (string)
* ProductDescription (string)
* ReservedInstancesOfferingIds (array)

### DescribeRouteTables



```js
amazonaws_ec2.DescribeRouteTables({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* RouteTableIds (array)

### DescribeScheduledInstanceAvailability



```js
amazonaws_ec2.DescribeScheduledInstanceAvailability({
  "FirstSlotStartTimeRange": {
    "EarliestTime": "",
    "LatestTime": ""
  },
  "Recurrence": {}
}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* FirstSlotStartTimeRange (object) **required** - Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
* MaxResults (integer)
* MaxSlotDurationInHours (integer)
* MinSlotDurationInHours (integer)
* NextToken (string)
* Recurrence (object) **required** - Describes the recurring schedule for a Scheduled Instance.

### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* ScheduledInstanceIds (array)
* SlotStartTimeRange (object) - Describes the time period for a Scheduled Instance to start its first schedule.

### DescribeSecurityGroupReferences



```js
amazonaws_ec2.DescribeSecurityGroupReferences({
  "GroupId": []
}, context)
```

#### Parameters
* DryRun (boolean)
* GroupId (array) **required**

### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* GroupIds (array)
* GroupNames (array)
* MaxResults (integer)
* NextToken (string)

### DescribeSnapshotAttribute



```js
amazonaws_ec2.DescribeSnapshotAttribute({
  "Attribute": "",
  "SnapshotId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* SnapshotId (string) **required**

### DescribeSnapshots



```js
amazonaws_ec2.DescribeSnapshots({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* OwnerIds (array)
* RestorableByUserIds (array)
* SnapshotIds (array)

### DescribeSpotDatafeedSubscription



```js
amazonaws_ec2.DescribeSpotDatafeedSubscription({}, context)
```

#### Parameters
* DryRun (boolean)

### DescribeSpotFleetInstances



```js
amazonaws_ec2.DescribeSpotFleetInstances({
  "SpotFleetRequestId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* MaxResults (integer)
* NextToken (string)
* SpotFleetRequestId (string) **required**

### DescribeSpotFleetRequestHistory



```js
amazonaws_ec2.DescribeSpotFleetRequestHistory({
  "SpotFleetRequestId": "",
  "StartTime": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* EventType (string)
* MaxResults (integer)
* NextToken (string)
* SpotFleetRequestId (string) **required**
* StartTime (string) **required**

### DescribeSpotFleetRequests



```js
amazonaws_ec2.DescribeSpotFleetRequests({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* MaxResults (integer)
* NextToken (string)
* SpotFleetRequestIds (array)

### DescribeSpotInstanceRequests



```js
amazonaws_ec2.DescribeSpotInstanceRequests({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* SpotInstanceRequestIds (array)

### DescribeSpotPriceHistory



```js
amazonaws_ec2.DescribeSpotPriceHistory({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AvailabilityZone (string)
* DryRun (boolean)
* EndTime (string)
* Filters (array)
* InstanceTypes (array)
* MaxResults (integer)
* NextToken (string)
* ProductDescriptions (array)
* StartTime (string)

### DescribeStaleSecurityGroups



```js
amazonaws_ec2.DescribeStaleSecurityGroups({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* MaxResults (integer)
* NextToken (string)
* VpcId (string) **required**

### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* SubnetIds (array)

### DescribeTags



```js
amazonaws_ec2.DescribeTags({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)

### DescribeVolumeAttribute



```js
amazonaws_ec2.DescribeVolumeAttribute({
  "VolumeId": ""
}, context)
```

#### Parameters
* Attribute (string)
* DryRun (boolean)
* VolumeId (string) **required**

### DescribeVolumeStatus



```js
amazonaws_ec2.DescribeVolumeStatus({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* VolumeIds (array)

### DescribeVolumes



```js
amazonaws_ec2.DescribeVolumes({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* VolumeIds (array)

### DescribeVolumesModifications



```js
amazonaws_ec2.DescribeVolumesModifications({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* VolumeIds (array)

### DescribeVpcAttribute



```js
amazonaws_ec2.DescribeVpcAttribute({
  "Attribute": "",
  "VpcId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* VpcId (string) **required**

### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* VpcIds (array)

### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* VpcIds (array)

### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* ServiceNames (array)

### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* MaxResults (integer)
* NextToken (string)
* VpcEndpointIds (array)

### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* VpcPeeringConnectionIds (array)

### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* VpcIds (array)

### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* VpnConnectionIds (array)

### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```

#### Parameters
* DryRun (boolean)
* Filters (array)
* VpnGatewayIds (array)

### DetachClassicLinkVpc



```js
amazonaws_ec2.DetachClassicLinkVpc({
  "InstanceId": "",
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**
* VpcId (string) **required**

### DetachInternetGateway



```js
amazonaws_ec2.DetachInternetGateway({
  "InternetGatewayId": "",
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InternetGatewayId (string) **required**
* VpcId (string) **required**

### DetachNetworkInterface



```js
amazonaws_ec2.DetachNetworkInterface({
  "AttachmentId": ""
}, context)
```

#### Parameters
* AttachmentId (string) **required**
* DryRun (boolean)
* Force (boolean)

### DetachVolume



```js
amazonaws_ec2.DetachVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* Device (string)
* DryRun (boolean)
* Force (boolean)
* InstanceId (string)
* VolumeId (string) **required**

### DetachVpnGateway



```js
amazonaws_ec2.DetachVpnGateway({
  "VpcId": "",
  "VpnGatewayId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**
* VpnGatewayId (string) **required**

### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Parameters
* GatewayId (string) **required**
* RouteTableId (string) **required**

### DisableVpcClassicLink



```js
amazonaws_ec2.DisableVpcClassicLink({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**

### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```

#### Parameters
* VpcId (string)

### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```

#### Parameters
* AssociationId (string)
* DryRun (boolean)
* PublicIp (string)

### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**

### DisassociateRouteTable



```js
amazonaws_ec2.DisassociateRouteTable({
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**
* DryRun (boolean)

### DisassociateSubnetCidrBlock



```js
amazonaws_ec2.DisassociateSubnetCidrBlock({
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**

### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**

### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Parameters
* GatewayId (string) **required**
* RouteTableId (string) **required**

### EnableVolumeIO



```js
amazonaws_ec2.EnableVolumeIO({
  "VolumeId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VolumeId (string) **required**

### EnableVpcClassicLink



```js
amazonaws_ec2.EnableVpcClassicLink({
  "VpcId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcId (string) **required**

### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```

#### Parameters
* VpcId (string)

### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({
  "InstanceId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**

### GetConsoleScreenshot



```js
amazonaws_ec2.GetConsoleScreenshot({
  "InstanceId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**
* WakeUp (boolean)

### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Parameters
* HostIdSet (array) **required**
* OfferingId (string) **required**

### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({
  "InstanceId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceId (string) **required**

### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({
  "ReservedInstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* ReservedInstanceIds (array) **required**
* TargetConfigurations (array)

### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```

#### Parameters
* Architecture (string)
* ClientData (object) - Describes the client-specific data.
* ClientToken (string)
* Description (string)
* DiskContainers (array)
* DryRun (boolean)
* Hypervisor (string)
* LicenseType (string)
* Platform (string)
* RoleName (string)

### ImportInstance



```js
amazonaws_ec2.ImportInstance({
  "Platform": ""
}, context)
```

#### Parameters
* Description (string)
* DiskImages (array)
* DryRun (boolean)
* LaunchSpecification (object) - Describes the launch specification for VM import.
* Platform (string) **required**

### ImportKeyPair



```js
amazonaws_ec2.ImportKeyPair({
  "KeyName": "",
  "PublicKeyMaterial": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* KeyName (string) **required**
* PublicKeyMaterial (string) **required**

### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```

#### Parameters
* ClientData (object) - Describes the client-specific data.
* ClientToken (string)
* Description (string)
* DiskContainer (object) - The disk container object for the import snapshot request.
* DryRun (boolean)
* RoleName (string)

### ImportVolume



```js
amazonaws_ec2.ImportVolume({
  "AvailabilityZone": "",
  "Image": {
    "Bytes": 0,
    "Format": "",
    "ImportManifestUrl": ""
  },
  "Volume": {
    "Size": 0
  }
}, context)
```

#### Parameters
* AvailabilityZone (string) **required**
* Description (string)
* DryRun (boolean)
* Image (object) **required** - Describes a disk image.
* Volume (object) **required** - Describes an EBS volume.

### ModifyFpgaImageAttribute



```js
amazonaws_ec2.ModifyFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Parameters
* Attribute (string)
* Description (string)
* DryRun (boolean)
* FpgaImageId (string) **required**
* LoadPermission (object) - Describes modifications to the load permissions of an Amazon FPGA image (AFI).
* Name (string)
* OperationType (string)
* ProductCodes (array)
* UserGroups (array)
* UserIds (array)

### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({
  "AutoPlacement": "",
  "HostIds": []
}, context)
```

#### Parameters
* AutoPlacement (string) **required**
* HostIds (array) **required**

### ModifyIdFormat



```js
amazonaws_ec2.ModifyIdFormat({
  "Resource": "",
  "UseLongIds": true
}, context)
```

#### Parameters
* Resource (string) **required**
* UseLongIds (boolean) **required**

### ModifyIdentityIdFormat



```js
amazonaws_ec2.ModifyIdentityIdFormat({
  "PrincipalArn": "",
  "Resource": "",
  "UseLongIds": true
}, context)
```

#### Parameters
* PrincipalArn (string) **required**
* Resource (string) **required**
* UseLongIds (boolean) **required**

### ModifyImageAttribute



```js
amazonaws_ec2.ModifyImageAttribute({
  "ImageId": ""
}, context)
```

#### Parameters
* Attribute (string)
* Description (object) - Describes a value for a resource attribute that is a String.
* DryRun (boolean)
* ImageId (string) **required**
* LaunchPermission (object) - Describes a launch permission modification.
* OperationType (string)
* ProductCodes (array)
* UserGroups (array)
* UserIds (array)
* Value (string)

### ModifyInstanceAttribute



```js
amazonaws_ec2.ModifyInstanceAttribute({
  "InstanceId": ""
}, context)
```

#### Parameters
* Attribute (string)
* BlockDeviceMappings (array)
* DisableApiTermination (object) - Describes a value for a resource attribute that is a Boolean value.
* DryRun (boolean)
* EbsOptimized (object) - Describes a value for a resource attribute that is a Boolean value.
* EnaSupport (object) - Describes a value for a resource attribute that is a Boolean value.
* Groups (array)
* InstanceId (string) **required**
* InstanceInitiatedShutdownBehavior (object) - Describes a value for a resource attribute that is a String.
* InstanceType (object) - Describes a value for a resource attribute that is a String.
* Kernel (object) - Describes a value for a resource attribute that is a String.
* Ramdisk (object) - Describes a value for a resource attribute that is a String.
* SourceDestCheck (object) - Describes a value for a resource attribute that is a Boolean value.
* SriovNetSupport (object) - Describes a value for a resource attribute that is a String.
* UserData (object)
* Value (string)

### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({
  "InstanceId": ""
}, context)
```

#### Parameters
* Affinity (string)
* HostId (string)
* InstanceId (string) **required**
* Tenancy (string)

### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* Attachment (object) - Describes an attachment change.
* Description (object) - Describes a value for a resource attribute that is a String.
* DryRun (boolean)
* Groups (array)
* NetworkInterfaceId (string) **required**
* SourceDestCheck (object) - Describes a value for a resource attribute that is a Boolean value.

### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({
  "ReservedInstancesIds": [],
  "TargetConfigurations": []
}, context)
```

#### Parameters
* ClientToken (string)
* ReservedInstancesIds (array) **required**
* TargetConfigurations (array) **required**

### ModifySnapshotAttribute



```js
amazonaws_ec2.ModifySnapshotAttribute({
  "SnapshotId": ""
}, context)
```

#### Parameters
* Attribute (string)
* CreateVolumePermission (object) - Describes modifications to the permissions for a volume.
* DryRun (boolean)
* GroupNames (array)
* OperationType (string)
* SnapshotId (string) **required**
* UserIds (array)

### ModifySpotFleetRequest



```js
amazonaws_ec2.ModifySpotFleetRequest({
  "SpotFleetRequestId": ""
}, context)
```

#### Parameters
* ExcessCapacityTerminationPolicy (string)
* SpotFleetRequestId (string) **required**
* TargetCapacity (integer)

### ModifySubnetAttribute



```js
amazonaws_ec2.ModifySubnetAttribute({
  "SubnetId": ""
}, context)
```

#### Parameters
* AssignIpv6AddressOnCreation (object) - Describes a value for a resource attribute that is a Boolean value.
* MapPublicIpOnLaunch (object) - Describes a value for a resource attribute that is a Boolean value.
* SubnetId (string) **required**

### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({
  "VolumeId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* Iops (integer)
* Size (integer)
* VolumeId (string) **required**
* VolumeType (string)

### ModifyVolumeAttribute



```js
amazonaws_ec2.ModifyVolumeAttribute({
  "VolumeId": ""
}, context)
```

#### Parameters
* AutoEnableIO (object) - Describes a value for a resource attribute that is a Boolean value.
* DryRun (boolean)
* VolumeId (string) **required**

### ModifyVpcAttribute



```js
amazonaws_ec2.ModifyVpcAttribute({
  "VpcId": ""
}, context)
```

#### Parameters
* EnableDnsHostnames (object) - Describes a value for a resource attribute that is a Boolean value.
* EnableDnsSupport (object) - Describes a value for a resource attribute that is a Boolean value.
* VpcId (string) **required**

### ModifyVpcEndpoint



```js
amazonaws_ec2.ModifyVpcEndpoint({
  "VpcEndpointId": ""
}, context)
```

#### Parameters
* AddRouteTableIds (array)
* AddSecurityGroupIds (array)
* AddSubnetIds (array)
* DryRun (boolean)
* PolicyDocument (string)
* PrivateDnsEnabled (boolean)
* RemoveRouteTableIds (array)
* RemoveSecurityGroupIds (array)
* RemoveSubnetIds (array)
* ResetPolicy (boolean)
* VpcEndpointId (string) **required**

### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Parameters
* AccepterPeeringConnectionOptions (object) - The VPC peering connection options.
* DryRun (boolean)
* RequesterPeeringConnectionOptions (object) - The VPC peering connection options.
* VpcPeeringConnectionId (string) **required**

### ModifyVpcTenancy



```js
amazonaws_ec2.ModifyVpcTenancy({
  "VpcId": "",
  "InstanceTenancy": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceTenancy (string) **required**
* VpcId (string) **required**

### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceIds (array) **required**

### MoveAddressToVpc



```js
amazonaws_ec2.MoveAddressToVpc({
  "PublicIp": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* PublicIp (string) **required**

### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Parameters
* ClientToken (string)
* CurrencyCode (string)
* HostIdSet (array) **required**
* LimitPrice (string)
* OfferingId (string) **required**

### PurchaseReservedInstancesOffering



```js
amazonaws_ec2.PurchaseReservedInstancesOffering({
  "InstanceCount": 0,
  "ReservedInstancesOfferingId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceCount (integer) **required**
* LimitPrice (object) - Describes the limit price of a Reserved Instance offering.
* ReservedInstancesOfferingId (string) **required**

### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({
  "PurchaseRequests": []
}, context)
```

#### Parameters
* ClientToken (string)
* DryRun (boolean)
* PurchaseRequests (array) **required**

### RebootInstances



```js
amazonaws_ec2.RebootInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceIds (array) **required**

### RegisterImage



```js
amazonaws_ec2.RegisterImage({
  "Name": ""
}, context)
```

#### Parameters
* Architecture (string)
* BillingProducts (array)
* BlockDeviceMappings (array)
* Description (string)
* DryRun (boolean)
* EnaSupport (boolean)
* ImageLocation (string)
* KernelId (string)
* Name (string) **required**
* RamdiskId (string)
* RootDeviceName (string)
* SriovNetSupport (string)
* VirtualizationType (string)

### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* VpcPeeringConnectionId (string) **required**

### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```

#### Parameters
* AllocationId (string)
* DryRun (boolean)
* PublicIp (string)

### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({
  "HostIds": []
}, context)
```

#### Parameters
* HostIds (array) **required**

### ReplaceIamInstanceProfileAssociation



```js
amazonaws_ec2.ReplaceIamInstanceProfileAssociation({
  "IamInstanceProfile": {},
  "AssociationId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**
* IamInstanceProfile (object) **required** - Describes an IAM instance profile.

### ReplaceNetworkAclAssociation



```js
amazonaws_ec2.ReplaceNetworkAclAssociation({
  "AssociationId": "",
  "NetworkAclId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**
* DryRun (boolean)
* NetworkAclId (string) **required**

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

#### Parameters
* CidrBlock (string)
* DryRun (boolean)
* Egress (boolean) **required**
* IcmpTypeCode (object) - Describes the ICMP type and code.
* Ipv6CidrBlock (string)
* NetworkAclId (string) **required**
* PortRange (object) - Describes a range of ports.
* Protocol (string) **required**
* RuleAction (string) **required**
* RuleNumber (integer) **required**

### ReplaceRoute



```js
amazonaws_ec2.ReplaceRoute({
  "RouteTableId": ""
}, context)
```

#### Parameters
* DestinationCidrBlock (string)
* DestinationIpv6CidrBlock (string)
* DryRun (boolean)
* EgressOnlyInternetGatewayId (string)
* GatewayId (string)
* InstanceId (string)
* NatGatewayId (string)
* NetworkInterfaceId (string)
* RouteTableId (string) **required**
* VpcPeeringConnectionId (string)

### ReplaceRouteTableAssociation



```js
amazonaws_ec2.ReplaceRouteTableAssociation({
  "AssociationId": "",
  "RouteTableId": ""
}, context)
```

#### Parameters
* AssociationId (string) **required**
* DryRun (boolean)
* RouteTableId (string) **required**

### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({
  "Instances": [],
  "ReasonCodes": [],
  "Status": ""
}, context)
```

#### Parameters
* Description (string)
* DryRun (boolean)
* EndTime (string)
* Instances (array) **required**
* ReasonCodes (array) **required**
* StartTime (string)
* Status (string) **required**

### RequestSpotFleet



```js
amazonaws_ec2.RequestSpotFleet({
  "SpotFleetRequestConfig": {
    "IamFleetRole": "",
    "LaunchSpecifications": [],
    "SpotPrice": "",
    "TargetCapacity": 0
  }
}, context)
```

#### Parameters
* DryRun (boolean)
* SpotFleetRequestConfig (object) **required** - Describes the configuration of a Spot fleet request.

### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({
  "SpotPrice": ""
}, context)
```

#### Parameters
* AvailabilityZoneGroup (string)
* BlockDurationMinutes (integer)
* ClientToken (string)
* DryRun (boolean)
* InstanceCount (integer)
* InstanceInterruptionBehavior (string)
* LaunchGroup (string)
* LaunchSpecification (object) - Describes the launch specification for an instance.
* SpotPrice (string) **required**
* Type (string)
* ValidFrom (string)
* ValidUntil (string)

### ResetFpgaImageAttribute



```js
amazonaws_ec2.ResetFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Parameters
* Attribute (string)
* DryRun (boolean)
* FpgaImageId (string) **required**

### ResetImageAttribute



```js
amazonaws_ec2.ResetImageAttribute({
  "Attribute": "",
  "ImageId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* ImageId (string) **required**

### ResetInstanceAttribute



```js
amazonaws_ec2.ResetInstanceAttribute({
  "Attribute": "",
  "InstanceId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* InstanceId (string) **required**

### ResetNetworkInterfaceAttribute



```js
amazonaws_ec2.ResetNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* NetworkInterfaceId (string) **required**
* SourceDestCheck (string)

### ResetSnapshotAttribute



```js
amazonaws_ec2.ResetSnapshotAttribute({
  "Attribute": "",
  "SnapshotId": ""
}, context)
```

#### Parameters
* Attribute (string) **required**
* DryRun (boolean)
* SnapshotId (string) **required**

### RestoreAddressToClassic



```js
amazonaws_ec2.RestoreAddressToClassic({
  "PublicIp": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* PublicIp (string) **required**

### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Parameters
* CidrIp (string)
* DryRun (boolean)
* FromPort (integer)
* GroupId (string) **required**
* IpPermissions (array)
* IpProtocol (string)
* SourceSecurityGroupName (string)
* SourceSecurityGroupOwnerId (string)
* ToPort (integer)

### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```

#### Parameters
* CidrIp (string)
* DryRun (boolean)
* FromPort (integer)
* GroupId (string)
* GroupName (string)
* IpPermissions (array)
* IpProtocol (string)
* SourceSecurityGroupName (string)
* SourceSecurityGroupOwnerId (string)
* ToPort (integer)

### RunInstances



```js
amazonaws_ec2.RunInstances({
  "ImageId": "",
  "MaxCount": 0,
  "MinCount": 0
}, context)
```

#### Parameters
* AdditionalInfo (string)
* BlockDeviceMappings (array)
* ClientToken (string)
* DisableApiTermination (boolean)
* DryRun (boolean)
* EbsOptimized (boolean)
* ElasticGpuSpecification (array)
* IamInstanceProfile (object) - Describes an IAM instance profile.
* ImageId (string) **required**
* InstanceInitiatedShutdownBehavior (string)
* InstanceType (string)
* Ipv6AddressCount (integer)
* Ipv6Addresses (array)
* KernelId (string)
* KeyName (string)
* MaxCount (integer) **required**
* MinCount (integer) **required**
* Monitoring (object) - Describes the monitoring of an instance.
* NetworkInterfaces (array)
* Placement (object) - Describes the placement of an instance.
* PrivateIpAddress (string)
* RamdiskId (string)
* SecurityGroupIds (array)
* SecurityGroups (array)
* SubnetId (string)
* TagSpecifications (array)
* UserData (string)

### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({
  "LaunchSpecification": {
    "ImageId": ""
  },
  "ScheduledInstanceId": ""
}, context)
```

#### Parameters
* ClientToken (string)
* DryRun (boolean)
* InstanceCount (integer)
* LaunchSpecification (object) **required** - <p>Describes the launch specification for a Scheduled Instance.</p> <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
* ScheduledInstanceId (string) **required**

### StartInstances



```js
amazonaws_ec2.StartInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* AdditionalInfo (string)
* DryRun (boolean)
* InstanceIds (array) **required**

### StopInstances



```js
amazonaws_ec2.StopInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* Force (boolean)
* InstanceIds (array) **required**

### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceIds (array) **required**

### UnassignIpv6Addresses



```js
amazonaws_ec2.UnassignIpv6Addresses({
  "Ipv6Addresses": [],
  "NetworkInterfaceId": ""
}, context)
```

#### Parameters
* Ipv6Addresses (array) **required**
* NetworkInterfaceId (string) **required**

### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({
  "NetworkInterfaceId": "",
  "PrivateIpAddresses": []
}, context)
```

#### Parameters
* NetworkInterfaceId (string) **required**
* PrivateIpAddresses (array) **required**

### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({
  "InstanceIds": []
}, context)
```

#### Parameters
* DryRun (boolean)
* InstanceIds (array) **required**

### UpdateSecurityGroupRuleDescriptionsEgress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsEgress({
  "IpPermissions": []
}, context)
```

#### Parameters
* DryRun (boolean)
* GroupId (string)
* GroupName (string)
* IpPermissions (array) **required**

### UpdateSecurityGroupRuleDescriptionsIngress



```js
amazonaws_ec2.UpdateSecurityGroupRuleDescriptionsIngress({
  "IpPermissions": []
}, context)
```

#### Parameters
* DryRun (boolean)
* GroupId (string)
* GroupName (string)
* IpPermissions (array) **required**

