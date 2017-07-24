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


### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```


### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```


### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({}, context)
```


### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({}, context)
```


### AssignPrivateIpAddresses



```js
amazonaws_ec2.AssignPrivateIpAddresses({}, context)
```


### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```


### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({}, context)
```


### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({}, context)
```


### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({}, context)
```


### AssociateSubnetCidrBlock



```js
amazonaws_ec2.AssociateSubnetCidrBlock({}, context)
```


### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({}, context)
```


### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({}, context)
```


### AttachInternetGateway



```js
amazonaws_ec2.AttachInternetGateway({}, context)
```


### AttachNetworkInterface



```js
amazonaws_ec2.AttachNetworkInterface({}, context)
```


### AttachVolume



```js
amazonaws_ec2.AttachVolume({}, context)
```


### AttachVpnGateway



```js
amazonaws_ec2.AttachVpnGateway({}, context)
```


### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({}, context)
```


### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```


### BundleInstance



```js
amazonaws_ec2.BundleInstance({}, context)
```


### CancelBundleTask



```js
amazonaws_ec2.CancelBundleTask({}, context)
```


### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({}, context)
```


### CancelExportTask



```js
amazonaws_ec2.CancelExportTask({}, context)
```


### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```


### CancelReservedInstancesListing



```js
amazonaws_ec2.CancelReservedInstancesListing({}, context)
```


### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({}, context)
```


### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({}, context)
```


### ConfirmProductInstance



```js
amazonaws_ec2.ConfirmProductInstance({}, context)
```


### CopyImage



```js
amazonaws_ec2.CopyImage({}, context)
```


### CopySnapshot



```js
amazonaws_ec2.CopySnapshot({}, context)
```


### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({}, context)
```


### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({}, context)
```


### CreateEgressOnlyInternetGateway



```js
amazonaws_ec2.CreateEgressOnlyInternetGateway({}, context)
```


### CreateFlowLogs



```js
amazonaws_ec2.CreateFlowLogs({}, context)
```


### CreateFpgaImage



```js
amazonaws_ec2.CreateFpgaImage({}, context)
```


### CreateImage



```js
amazonaws_ec2.CreateImage({}, context)
```


### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({}, context)
```


### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```


### CreateKeyPair



```js
amazonaws_ec2.CreateKeyPair({}, context)
```


### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({}, context)
```


### CreateNetworkAcl



```js
amazonaws_ec2.CreateNetworkAcl({}, context)
```


### CreateNetworkAclEntry



```js
amazonaws_ec2.CreateNetworkAclEntry({}, context)
```


### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({}, context)
```


### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({}, context)
```


### CreateReservedInstancesListing



```js
amazonaws_ec2.CreateReservedInstancesListing({}, context)
```


### CreateRoute



```js
amazonaws_ec2.CreateRoute({}, context)
```


### CreateRouteTable



```js
amazonaws_ec2.CreateRouteTable({}, context)
```


### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({}, context)
```


### CreateSnapshot



```js
amazonaws_ec2.CreateSnapshot({}, context)
```


### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({}, context)
```


### CreateSubnet



```js
amazonaws_ec2.CreateSubnet({}, context)
```


### CreateTags



```js
amazonaws_ec2.CreateTags({}, context)
```


### CreateVolume



```js
amazonaws_ec2.CreateVolume({}, context)
```


### CreateVpc



```js
amazonaws_ec2.CreateVpc({}, context)
```


### CreateVpcEndpoint



```js
amazonaws_ec2.CreateVpcEndpoint({}, context)
```


### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```


### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({}, context)
```


### CreateVpnConnectionRoute



```js
amazonaws_ec2.CreateVpnConnectionRoute({}, context)
```


### CreateVpnGateway



```js
amazonaws_ec2.CreateVpnGateway({}, context)
```


### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({}, context)
```


### DeleteDhcpOptions



```js
amazonaws_ec2.DeleteDhcpOptions({}, context)
```


### DeleteEgressOnlyInternetGateway



```js
amazonaws_ec2.DeleteEgressOnlyInternetGateway({}, context)
```


### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({}, context)
```


### DeleteInternetGateway



```js
amazonaws_ec2.DeleteInternetGateway({}, context)
```


### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({}, context)
```


### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({}, context)
```


### DeleteNetworkAcl



```js
amazonaws_ec2.DeleteNetworkAcl({}, context)
```


### DeleteNetworkAclEntry



```js
amazonaws_ec2.DeleteNetworkAclEntry({}, context)
```


### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({}, context)
```


### DeletePlacementGroup



```js
amazonaws_ec2.DeletePlacementGroup({}, context)
```


### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({}, context)
```


### DeleteRouteTable



```js
amazonaws_ec2.DeleteRouteTable({}, context)
```


### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```


### DeleteSnapshot



```js
amazonaws_ec2.DeleteSnapshot({}, context)
```


### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```


### DeleteSubnet



```js
amazonaws_ec2.DeleteSubnet({}, context)
```


### DeleteTags



```js
amazonaws_ec2.DeleteTags({}, context)
```


### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({}, context)
```


### DeleteVpc



```js
amazonaws_ec2.DeleteVpc({}, context)
```


### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({}, context)
```


### DeleteVpcPeeringConnection



```js
amazonaws_ec2.DeleteVpcPeeringConnection({}, context)
```


### DeleteVpnConnection



```js
amazonaws_ec2.DeleteVpnConnection({}, context)
```


### DeleteVpnConnectionRoute



```js
amazonaws_ec2.DeleteVpnConnectionRoute({}, context)
```


### DeleteVpnGateway



```js
amazonaws_ec2.DeleteVpnGateway({}, context)
```


### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({}, context)
```


### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```


### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```


### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```


### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```


### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```


### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```


### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```


### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```


### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```


### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```


### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```


### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```


### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```


### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```


### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```


### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```


### DescribeIdentityIdFormat



```js
amazonaws_ec2.DescribeIdentityIdFormat({}, context)
```


### DescribeImageAttribute



```js
amazonaws_ec2.DescribeImageAttribute({}, context)
```


### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```


### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```


### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```


### DescribeInstanceAttribute



```js
amazonaws_ec2.DescribeInstanceAttribute({}, context)
```


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


### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```


### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```


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


### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({}, context)
```


### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```


### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```


### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```


### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```


### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```


### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```


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


### DescribeScheduledInstanceAvailability



```js
amazonaws_ec2.DescribeScheduledInstanceAvailability({}, context)
```


### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```


### DescribeSecurityGroupReferences



```js
amazonaws_ec2.DescribeSecurityGroupReferences({}, context)
```


### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```


### DescribeSnapshotAttribute



```js
amazonaws_ec2.DescribeSnapshotAttribute({}, context)
```


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


### DescribeSpotFleetInstances



```js
amazonaws_ec2.DescribeSpotFleetInstances({}, context)
```


### DescribeSpotFleetRequestHistory



```js
amazonaws_ec2.DescribeSpotFleetRequestHistory({}, context)
```


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


### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```


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


### DescribeVpcAttribute



```js
amazonaws_ec2.DescribeVpcAttribute({}, context)
```


### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```


### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```


### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```


### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```


### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```


### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```


### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```


### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```


### DetachClassicLinkVpc



```js
amazonaws_ec2.DetachClassicLinkVpc({}, context)
```


### DetachInternetGateway



```js
amazonaws_ec2.DetachInternetGateway({}, context)
```


### DetachNetworkInterface



```js
amazonaws_ec2.DetachNetworkInterface({}, context)
```


### DetachVolume



```js
amazonaws_ec2.DetachVolume({}, context)
```


### DetachVpnGateway



```js
amazonaws_ec2.DetachVpnGateway({}, context)
```


### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({}, context)
```


### DisableVpcClassicLink



```js
amazonaws_ec2.DisableVpcClassicLink({}, context)
```


### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```


### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```


### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({}, context)
```


### DisassociateRouteTable



```js
amazonaws_ec2.DisassociateRouteTable({}, context)
```


### DisassociateSubnetCidrBlock



```js
amazonaws_ec2.DisassociateSubnetCidrBlock({}, context)
```


### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({}, context)
```


### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({}, context)
```


### EnableVolumeIO



```js
amazonaws_ec2.EnableVolumeIO({}, context)
```


### EnableVpcClassicLink



```js
amazonaws_ec2.EnableVpcClassicLink({}, context)
```


### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```


### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({}, context)
```


### GetConsoleScreenshot



```js
amazonaws_ec2.GetConsoleScreenshot({}, context)
```


### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({}, context)
```


### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({}, context)
```


### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({}, context)
```


### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```


### ImportInstance



```js
amazonaws_ec2.ImportInstance({}, context)
```


### ImportKeyPair



```js
amazonaws_ec2.ImportKeyPair({}, context)
```


### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```


### ImportVolume



```js
amazonaws_ec2.ImportVolume({}, context)
```


### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({}, context)
```


### ModifyIdFormat



```js
amazonaws_ec2.ModifyIdFormat({}, context)
```


### ModifyIdentityIdFormat



```js
amazonaws_ec2.ModifyIdentityIdFormat({}, context)
```


### ModifyImageAttribute



```js
amazonaws_ec2.ModifyImageAttribute({}, context)
```


### ModifyInstanceAttribute



```js
amazonaws_ec2.ModifyInstanceAttribute({}, context)
```


### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({}, context)
```


### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({}, context)
```


### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({}, context)
```


### ModifySnapshotAttribute



```js
amazonaws_ec2.ModifySnapshotAttribute({}, context)
```


### ModifySpotFleetRequest



```js
amazonaws_ec2.ModifySpotFleetRequest({}, context)
```


### ModifySubnetAttribute



```js
amazonaws_ec2.ModifySubnetAttribute({}, context)
```


### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({}, context)
```


### ModifyVolumeAttribute



```js
amazonaws_ec2.ModifyVolumeAttribute({}, context)
```


### ModifyVpcAttribute



```js
amazonaws_ec2.ModifyVpcAttribute({}, context)
```


### ModifyVpcEndpoint



```js
amazonaws_ec2.ModifyVpcEndpoint({}, context)
```


### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({}, context)
```


### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({}, context)
```


### MoveAddressToVpc



```js
amazonaws_ec2.MoveAddressToVpc({}, context)
```


### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({}, context)
```


### PurchaseReservedInstancesOffering



```js
amazonaws_ec2.PurchaseReservedInstancesOffering({}, context)
```


### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({}, context)
```


### RebootInstances



```js
amazonaws_ec2.RebootInstances({}, context)
```


### RegisterImage



```js
amazonaws_ec2.RegisterImage({}, context)
```


### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({}, context)
```


### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```


### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({}, context)
```


### ReplaceIamInstanceProfileAssociation



```js
amazonaws_ec2.ReplaceIamInstanceProfileAssociation({}, context)
```


### ReplaceNetworkAclAssociation



```js
amazonaws_ec2.ReplaceNetworkAclAssociation({}, context)
```


### ReplaceNetworkAclEntry



```js
amazonaws_ec2.ReplaceNetworkAclEntry({}, context)
```


### ReplaceRoute



```js
amazonaws_ec2.ReplaceRoute({}, context)
```


### ReplaceRouteTableAssociation



```js
amazonaws_ec2.ReplaceRouteTableAssociation({}, context)
```


### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({}, context)
```


### RequestSpotFleet



```js
amazonaws_ec2.RequestSpotFleet({}, context)
```


### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({}, context)
```


### ResetImageAttribute



```js
amazonaws_ec2.ResetImageAttribute({}, context)
```


### ResetInstanceAttribute



```js
amazonaws_ec2.ResetInstanceAttribute({}, context)
```


### ResetNetworkInterfaceAttribute



```js
amazonaws_ec2.ResetNetworkInterfaceAttribute({}, context)
```


### ResetSnapshotAttribute



```js
amazonaws_ec2.ResetSnapshotAttribute({}, context)
```


### RestoreAddressToClassic



```js
amazonaws_ec2.RestoreAddressToClassic({}, context)
```


### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({}, context)
```


### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```


### RunInstances



```js
amazonaws_ec2.RunInstances({}, context)
```


### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({}, context)
```


### StartInstances



```js
amazonaws_ec2.StartInstances({}, context)
```


### StopInstances



```js
amazonaws_ec2.StopInstances({}, context)
```


### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({}, context)
```


### UnassignIpv6Addresses



```js
amazonaws_ec2.UnassignIpv6Addresses({}, context)
```


### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({}, context)
```


### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({}, context)
```


