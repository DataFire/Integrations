# @datafire/amazonaws_ec2

Client library for Amazon Elastic Compute Cloud

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ec2
```

```js
let datafire = require('datafire');
let amazonaws_ec2 = require('@datafire/amazonaws_ec2').actions;
let context = new datafire.Context();

amazonaws_ec2.AcceptReservedInstancesExchangeQuote({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides resizable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.</p>

## Actions
### AcceptReservedInstancesExchangeQuote



```js
amazonaws_ec2.AcceptReservedInstancesExchangeQuote({}, context)
```

#### Parameters

### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```

#### Parameters

### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```

#### Parameters

### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({}, context)
```

#### Parameters

### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({}, context)
```

#### Parameters

### AssignPrivateIpAddresses



```js
amazonaws_ec2.AssignPrivateIpAddresses({}, context)
```

#### Parameters

### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```

#### Parameters

### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({}, context)
```

#### Parameters

### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({}, context)
```

#### Parameters

### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({}, context)
```

#### Parameters

### AssociateSubnetCidrBlock



```js
amazonaws_ec2.AssociateSubnetCidrBlock({}, context)
```

#### Parameters

### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({}, context)
```

#### Parameters

### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({}, context)
```

#### Parameters

### AttachInternetGateway



```js
amazonaws_ec2.AttachInternetGateway({}, context)
```

#### Parameters

### AttachNetworkInterface



```js
amazonaws_ec2.AttachNetworkInterface({}, context)
```

#### Parameters

### AttachVolume



```js
amazonaws_ec2.AttachVolume({}, context)
```

#### Parameters

### AttachVpnGateway



```js
amazonaws_ec2.AttachVpnGateway({}, context)
```

#### Parameters

### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({}, context)
```

#### Parameters

### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```

#### Parameters

### BundleInstance



```js
amazonaws_ec2.BundleInstance({}, context)
```

#### Parameters

### CancelBundleTask



```js
amazonaws_ec2.CancelBundleTask({}, context)
```

#### Parameters

### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({}, context)
```

#### Parameters

### CancelExportTask



```js
amazonaws_ec2.CancelExportTask({}, context)
```

#### Parameters

### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```

#### Parameters

### CancelReservedInstancesListing



```js
amazonaws_ec2.CancelReservedInstancesListing({}, context)
```

#### Parameters

### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({}, context)
```

#### Parameters

### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({}, context)
```

#### Parameters

### ConfirmProductInstance



```js
amazonaws_ec2.ConfirmProductInstance({}, context)
```

#### Parameters

### CopyImage



```js
amazonaws_ec2.CopyImage({}, context)
```

#### Parameters

### CopySnapshot



```js
amazonaws_ec2.CopySnapshot({}, context)
```

#### Parameters

### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({}, context)
```

#### Parameters

### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({}, context)
```

#### Parameters

### CreateEgressOnlyInternetGateway



```js
amazonaws_ec2.CreateEgressOnlyInternetGateway({}, context)
```

#### Parameters

### CreateFlowLogs



```js
amazonaws_ec2.CreateFlowLogs({}, context)
```

#### Parameters

### CreateFpgaImage



```js
amazonaws_ec2.CreateFpgaImage({}, context)
```

#### Parameters

### CreateImage



```js
amazonaws_ec2.CreateImage({}, context)
```

#### Parameters

### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({}, context)
```

#### Parameters

### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```

#### Parameters

### CreateKeyPair



```js
amazonaws_ec2.CreateKeyPair({}, context)
```

#### Parameters

### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({}, context)
```

#### Parameters

### CreateNetworkAcl



```js
amazonaws_ec2.CreateNetworkAcl({}, context)
```

#### Parameters

### CreateNetworkAclEntry



```js
amazonaws_ec2.CreateNetworkAclEntry({}, context)
```

#### Parameters

### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({}, context)
```

#### Parameters

### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({}, context)
```

#### Parameters

### CreateReservedInstancesListing



```js
amazonaws_ec2.CreateReservedInstancesListing({}, context)
```

#### Parameters

### CreateRoute



```js
amazonaws_ec2.CreateRoute({}, context)
```

#### Parameters

### CreateRouteTable



```js
amazonaws_ec2.CreateRouteTable({}, context)
```

#### Parameters

### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({}, context)
```

#### Parameters

### CreateSnapshot



```js
amazonaws_ec2.CreateSnapshot({}, context)
```

#### Parameters

### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({}, context)
```

#### Parameters

### CreateSubnet



```js
amazonaws_ec2.CreateSubnet({}, context)
```

#### Parameters

### CreateTags



```js
amazonaws_ec2.CreateTags({}, context)
```

#### Parameters

### CreateVolume



```js
amazonaws_ec2.CreateVolume({}, context)
```

#### Parameters

### CreateVpc



```js
amazonaws_ec2.CreateVpc({}, context)
```

#### Parameters

### CreateVpcEndpoint



```js
amazonaws_ec2.CreateVpcEndpoint({}, context)
```

#### Parameters

### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```

#### Parameters

### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({}, context)
```

#### Parameters

### CreateVpnConnectionRoute



```js
amazonaws_ec2.CreateVpnConnectionRoute({}, context)
```

#### Parameters

### CreateVpnGateway



```js
amazonaws_ec2.CreateVpnGateway({}, context)
```

#### Parameters

### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({}, context)
```

#### Parameters

### DeleteDhcpOptions



```js
amazonaws_ec2.DeleteDhcpOptions({}, context)
```

#### Parameters

### DeleteEgressOnlyInternetGateway



```js
amazonaws_ec2.DeleteEgressOnlyInternetGateway({}, context)
```

#### Parameters

### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({}, context)
```

#### Parameters

### DeleteInternetGateway



```js
amazonaws_ec2.DeleteInternetGateway({}, context)
```

#### Parameters

### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({}, context)
```

#### Parameters

### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({}, context)
```

#### Parameters

### DeleteNetworkAcl



```js
amazonaws_ec2.DeleteNetworkAcl({}, context)
```

#### Parameters

### DeleteNetworkAclEntry



```js
amazonaws_ec2.DeleteNetworkAclEntry({}, context)
```

#### Parameters

### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({}, context)
```

#### Parameters

### DeletePlacementGroup



```js
amazonaws_ec2.DeletePlacementGroup({}, context)
```

#### Parameters

### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({}, context)
```

#### Parameters

### DeleteRouteTable



```js
amazonaws_ec2.DeleteRouteTable({}, context)
```

#### Parameters

### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```

#### Parameters

### DeleteSnapshot



```js
amazonaws_ec2.DeleteSnapshot({}, context)
```

#### Parameters

### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```

#### Parameters

### DeleteSubnet



```js
amazonaws_ec2.DeleteSubnet({}, context)
```

#### Parameters

### DeleteTags



```js
amazonaws_ec2.DeleteTags({}, context)
```

#### Parameters

### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({}, context)
```

#### Parameters

### DeleteVpc



```js
amazonaws_ec2.DeleteVpc({}, context)
```

#### Parameters

### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({}, context)
```

#### Parameters

### DeleteVpcPeeringConnection



```js
amazonaws_ec2.DeleteVpcPeeringConnection({}, context)
```

#### Parameters

### DeleteVpnConnection



```js
amazonaws_ec2.DeleteVpnConnection({}, context)
```

#### Parameters

### DeleteVpnConnectionRoute



```js
amazonaws_ec2.DeleteVpnConnectionRoute({}, context)
```

#### Parameters

### DeleteVpnGateway



```js
amazonaws_ec2.DeleteVpnGateway({}, context)
```

#### Parameters

### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({}, context)
```

#### Parameters

### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```

#### Parameters

### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```

#### Parameters

### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```

#### Parameters

### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```

#### Parameters

### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```

#### Parameters

### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```

#### Parameters

### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```

#### Parameters

### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```

#### Parameters

### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```

#### Parameters

### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```

#### Parameters

### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```

#### Parameters

### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```

#### Parameters

### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```

#### Parameters

### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```

#### Parameters

### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```

#### Parameters

### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```

#### Parameters

### DescribeIdentityIdFormat



```js
amazonaws_ec2.DescribeIdentityIdFormat({}, context)
```

#### Parameters

### DescribeImageAttribute



```js
amazonaws_ec2.DescribeImageAttribute({}, context)
```

#### Parameters

### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```

#### Parameters

### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```

#### Parameters

### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```

#### Parameters

### DescribeInstanceAttribute



```js
amazonaws_ec2.DescribeInstanceAttribute({}, context)
```

#### Parameters

### DescribeInstanceStatus



```js
amazonaws_ec2.DescribeInstanceStatus({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeInstances



```js
amazonaws_ec2.DescribeInstances({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeInternetGateways



```js
amazonaws_ec2.DescribeInternetGateways({}, context)
```

#### Parameters

### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```

#### Parameters

### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```

#### Parameters

### DescribeNatGateways



```js
amazonaws_ec2.DescribeNatGateways({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeNetworkAcls



```js
amazonaws_ec2.DescribeNetworkAcls({}, context)
```

#### Parameters

### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({}, context)
```

#### Parameters

### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```

#### Parameters

### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```

#### Parameters

### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```

#### Parameters

### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```

#### Parameters

### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```

#### Parameters

### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```

#### Parameters

### DescribeReservedInstancesModifications



```js
amazonaws_ec2.DescribeReservedInstancesModifications({}, context)
```

#### Parameters
* NextToken (string)

### DescribeReservedInstancesOfferings



```js
amazonaws_ec2.DescribeReservedInstancesOfferings({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeRouteTables



```js
amazonaws_ec2.DescribeRouteTables({}, context)
```

#### Parameters

### DescribeScheduledInstanceAvailability



```js
amazonaws_ec2.DescribeScheduledInstanceAvailability({}, context)
```

#### Parameters

### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```

#### Parameters

### DescribeSecurityGroupReferences



```js
amazonaws_ec2.DescribeSecurityGroupReferences({}, context)
```

#### Parameters

### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```

#### Parameters

### DescribeSnapshotAttribute



```js
amazonaws_ec2.DescribeSnapshotAttribute({}, context)
```

#### Parameters

### DescribeSnapshots



```js
amazonaws_ec2.DescribeSnapshots({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeSpotDatafeedSubscription



```js
amazonaws_ec2.DescribeSpotDatafeedSubscription({}, context)
```

#### Parameters

### DescribeSpotFleetInstances



```js
amazonaws_ec2.DescribeSpotFleetInstances({}, context)
```

#### Parameters

### DescribeSpotFleetRequestHistory



```js
amazonaws_ec2.DescribeSpotFleetRequestHistory({}, context)
```

#### Parameters

### DescribeSpotFleetRequests



```js
amazonaws_ec2.DescribeSpotFleetRequests({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeSpotInstanceRequests



```js
amazonaws_ec2.DescribeSpotInstanceRequests({}, context)
```

#### Parameters

### DescribeSpotPriceHistory



```js
amazonaws_ec2.DescribeSpotPriceHistory({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeStaleSecurityGroups



```js
amazonaws_ec2.DescribeStaleSecurityGroups({}, context)
```

#### Parameters

### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```

#### Parameters

### DescribeTags



```js
amazonaws_ec2.DescribeTags({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeVolumeAttribute



```js
amazonaws_ec2.DescribeVolumeAttribute({}, context)
```

#### Parameters

### DescribeVolumeStatus



```js
amazonaws_ec2.DescribeVolumeStatus({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeVolumes



```js
amazonaws_ec2.DescribeVolumes({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### DescribeVolumesModifications



```js
amazonaws_ec2.DescribeVolumesModifications({}, context)
```

#### Parameters

### DescribeVpcAttribute



```js
amazonaws_ec2.DescribeVpcAttribute({}, context)
```

#### Parameters

### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```

#### Parameters

### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```

#### Parameters

### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```

#### Parameters

### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```

#### Parameters

### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```

#### Parameters

### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```

#### Parameters

### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```

#### Parameters

### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```

#### Parameters

### DetachClassicLinkVpc



```js
amazonaws_ec2.DetachClassicLinkVpc({}, context)
```

#### Parameters

### DetachInternetGateway



```js
amazonaws_ec2.DetachInternetGateway({}, context)
```

#### Parameters

### DetachNetworkInterface



```js
amazonaws_ec2.DetachNetworkInterface({}, context)
```

#### Parameters

### DetachVolume



```js
amazonaws_ec2.DetachVolume({}, context)
```

#### Parameters

### DetachVpnGateway



```js
amazonaws_ec2.DetachVpnGateway({}, context)
```

#### Parameters

### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({}, context)
```

#### Parameters

### DisableVpcClassicLink



```js
amazonaws_ec2.DisableVpcClassicLink({}, context)
```

#### Parameters

### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```

#### Parameters

### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```

#### Parameters

### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({}, context)
```

#### Parameters

### DisassociateRouteTable



```js
amazonaws_ec2.DisassociateRouteTable({}, context)
```

#### Parameters

### DisassociateSubnetCidrBlock



```js
amazonaws_ec2.DisassociateSubnetCidrBlock({}, context)
```

#### Parameters

### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({}, context)
```

#### Parameters

### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({}, context)
```

#### Parameters

### EnableVolumeIO



```js
amazonaws_ec2.EnableVolumeIO({}, context)
```

#### Parameters

### EnableVpcClassicLink



```js
amazonaws_ec2.EnableVpcClassicLink({}, context)
```

#### Parameters

### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```

#### Parameters

### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({}, context)
```

#### Parameters

### GetConsoleScreenshot



```js
amazonaws_ec2.GetConsoleScreenshot({}, context)
```

#### Parameters

### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({}, context)
```

#### Parameters

### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({}, context)
```

#### Parameters

### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({}, context)
```

#### Parameters

### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```

#### Parameters

### ImportInstance



```js
amazonaws_ec2.ImportInstance({}, context)
```

#### Parameters

### ImportKeyPair



```js
amazonaws_ec2.ImportKeyPair({}, context)
```

#### Parameters

### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```

#### Parameters

### ImportVolume



```js
amazonaws_ec2.ImportVolume({}, context)
```

#### Parameters

### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({}, context)
```

#### Parameters

### ModifyIdFormat



```js
amazonaws_ec2.ModifyIdFormat({}, context)
```

#### Parameters

### ModifyIdentityIdFormat



```js
amazonaws_ec2.ModifyIdentityIdFormat({}, context)
```

#### Parameters

### ModifyImageAttribute



```js
amazonaws_ec2.ModifyImageAttribute({}, context)
```

#### Parameters

### ModifyInstanceAttribute



```js
amazonaws_ec2.ModifyInstanceAttribute({}, context)
```

#### Parameters

### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({}, context)
```

#### Parameters

### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({}, context)
```

#### Parameters

### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({}, context)
```

#### Parameters

### ModifySnapshotAttribute



```js
amazonaws_ec2.ModifySnapshotAttribute({}, context)
```

#### Parameters

### ModifySpotFleetRequest



```js
amazonaws_ec2.ModifySpotFleetRequest({}, context)
```

#### Parameters

### ModifySubnetAttribute



```js
amazonaws_ec2.ModifySubnetAttribute({}, context)
```

#### Parameters

### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({}, context)
```

#### Parameters

### ModifyVolumeAttribute



```js
amazonaws_ec2.ModifyVolumeAttribute({}, context)
```

#### Parameters

### ModifyVpcAttribute



```js
amazonaws_ec2.ModifyVpcAttribute({}, context)
```

#### Parameters

### ModifyVpcEndpoint



```js
amazonaws_ec2.ModifyVpcEndpoint({}, context)
```

#### Parameters

### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({}, context)
```

#### Parameters

### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({}, context)
```

#### Parameters

### MoveAddressToVpc



```js
amazonaws_ec2.MoveAddressToVpc({}, context)
```

#### Parameters

### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({}, context)
```

#### Parameters

### PurchaseReservedInstancesOffering



```js
amazonaws_ec2.PurchaseReservedInstancesOffering({}, context)
```

#### Parameters

### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({}, context)
```

#### Parameters

### RebootInstances



```js
amazonaws_ec2.RebootInstances({}, context)
```

#### Parameters

### RegisterImage



```js
amazonaws_ec2.RegisterImage({}, context)
```

#### Parameters

### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({}, context)
```

#### Parameters

### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```

#### Parameters

### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({}, context)
```

#### Parameters

### ReplaceIamInstanceProfileAssociation



```js
amazonaws_ec2.ReplaceIamInstanceProfileAssociation({}, context)
```

#### Parameters

### ReplaceNetworkAclAssociation



```js
amazonaws_ec2.ReplaceNetworkAclAssociation({}, context)
```

#### Parameters

### ReplaceNetworkAclEntry



```js
amazonaws_ec2.ReplaceNetworkAclEntry({}, context)
```

#### Parameters

### ReplaceRoute



```js
amazonaws_ec2.ReplaceRoute({}, context)
```

#### Parameters

### ReplaceRouteTableAssociation



```js
amazonaws_ec2.ReplaceRouteTableAssociation({}, context)
```

#### Parameters

### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({}, context)
```

#### Parameters

### RequestSpotFleet



```js
amazonaws_ec2.RequestSpotFleet({}, context)
```

#### Parameters

### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({}, context)
```

#### Parameters

### ResetImageAttribute



```js
amazonaws_ec2.ResetImageAttribute({}, context)
```

#### Parameters

### ResetInstanceAttribute



```js
amazonaws_ec2.ResetInstanceAttribute({}, context)
```

#### Parameters

### ResetNetworkInterfaceAttribute



```js
amazonaws_ec2.ResetNetworkInterfaceAttribute({}, context)
```

#### Parameters

### ResetSnapshotAttribute



```js
amazonaws_ec2.ResetSnapshotAttribute({}, context)
```

#### Parameters

### RestoreAddressToClassic



```js
amazonaws_ec2.RestoreAddressToClassic({}, context)
```

#### Parameters

### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({}, context)
```

#### Parameters

### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```

#### Parameters

### RunInstances



```js
amazonaws_ec2.RunInstances({}, context)
```

#### Parameters

### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({}, context)
```

#### Parameters

### StartInstances



```js
amazonaws_ec2.StartInstances({}, context)
```

#### Parameters

### StopInstances



```js
amazonaws_ec2.StopInstances({}, context)
```

#### Parameters

### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({}, context)
```

#### Parameters

### UnassignIpv6Addresses



```js
amazonaws_ec2.UnassignIpv6Addresses({}, context)
```

#### Parameters

### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({}, context)
```

#### Parameters

### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({}, context)
```

#### Parameters

