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

amazonaws_ec2.AcceptReservedInstancesExchangeQuote({
  "ReservedInstanceIds": []
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * ReservedInstanceIds **required** [ReservedInstanceIdSet](#reservedinstanceidset)
  * TargetConfigurations [TargetConfigurationRequestSet](#targetconfigurationrequestset)

#### Output
* output [AcceptReservedInstancesExchangeQuoteResult](#acceptreservedinstancesexchangequoteresult)

### AcceptVpcPeeringConnection



```js
amazonaws_ec2.AcceptVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId [String](#string)

#### Output
* output [AcceptVpcPeeringConnectionResult](#acceptvpcpeeringconnectionresult)

### AllocateAddress



```js
amazonaws_ec2.AllocateAddress({}, context)
```

#### Input
* input `object`
  * Address [String](#string)
  * Domain [DomainType](#domaintype)
  * DryRun [Boolean](#boolean)

#### Output
* output [AllocateAddressResult](#allocateaddressresult)

### AllocateHosts



```js
amazonaws_ec2.AllocateHosts({
  "AvailabilityZone": "",
  "InstanceType": "",
  "Quantity": 0
}, context)
```

#### Input
* input `object`
  * AutoPlacement [AutoPlacement](#autoplacement)
  * AvailabilityZone **required** [String](#string)
  * ClientToken [String](#string)
  * InstanceType **required** [String](#string)
  * Quantity **required** [Integer](#integer)

#### Output
* output [AllocateHostsResult](#allocatehostsresult)

### AssignIpv6Addresses



```js
amazonaws_ec2.AssignIpv6Addresses({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [Ipv6AddressList](#ipv6addresslist)
  * NetworkInterfaceId **required** [String](#string)

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
  * AllowReassignment [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * PrivateIpAddresses [PrivateIpAddressStringList](#privateipaddressstringlist)
  * SecondaryPrivateIpAddressCount [Integer](#integer)

#### Output
*Output schema unknown*

### AssociateAddress



```js
amazonaws_ec2.AssociateAddress({}, context)
```

#### Input
* input `object`
  * AllocationId [String](#string)
  * AllowReassociation [Boolean](#boolean)
  * DryRun [Boolean](#boolean)
  * InstanceId [String](#string)
  * NetworkInterfaceId [String](#string)
  * PrivateIpAddress [String](#string)
  * PublicIp [String](#string)

#### Output
* output [AssociateAddressResult](#associateaddressresult)

### AssociateDhcpOptions



```js
amazonaws_ec2.AssociateDhcpOptions({
  "DhcpOptionsId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DhcpOptionsId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
*Output schema unknown*

### AssociateIamInstanceProfile



```js
amazonaws_ec2.AssociateIamInstanceProfile({
  "IamInstanceProfile": {},
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * IamInstanceProfile **required** [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * InstanceId **required** [String](#string)

#### Output
* output [AssociateIamInstanceProfileResult](#associateiaminstanceprofileresult)

### AssociateRouteTable



```js
amazonaws_ec2.AssociateRouteTable({
  "RouteTableId": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)
  * SubnetId **required** [String](#string)

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
  * Ipv6CidrBlock **required** [String](#string)
  * SubnetId **required** [String](#string)

#### Output
* output [AssociateSubnetCidrBlockResult](#associatesubnetcidrblockresult)

### AssociateVpcCidrBlock



```js
amazonaws_ec2.AssociateVpcCidrBlock({
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * AmazonProvidedIpv6CidrBlock [Boolean](#boolean)
  * CidrBlock [String](#string)
  * VpcId **required** [String](#string)

#### Output
* output [AssociateVpcCidrBlockResult](#associatevpccidrblockresult)

### AttachClassicLinkVpc



```js
amazonaws_ec2.AttachClassicLinkVpc({
  "Groups": [],
  "InstanceId": "",
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Groups **required** [GroupIdStringList](#groupidstringlist)
  * InstanceId **required** [String](#string)
  * VpcId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)
  * VpcId **required** [String](#string)

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
  * DeviceIndex **required** [Integer](#integer)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * NetworkInterfaceId **required** [String](#string)

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
  * Device **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * VolumeId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

#### Output
* output [AttachVpnGatewayResult](#attachvpngatewayresult)

### AuthorizeSecurityGroupEgress



```js
amazonaws_ec2.AuthorizeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId **required** [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

#### Output
*Output schema unknown*

### AuthorizeSecurityGroupIngress



```js
amazonaws_ec2.AuthorizeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

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
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * Storage **required** [Storage](#storage)

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
  * BundleId **required** [String](#string)
  * DryRun [Boolean](#boolean)

#### Output
* output [CancelBundleTaskResult](#cancelbundletaskresult)

### CancelConversionTask



```js
amazonaws_ec2.CancelConversionTask({
  "ConversionTaskId": ""
}, context)
```

#### Input
* input `object`
  * ConversionTaskId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * ReasonMessage [String](#string)

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
  * ExportTaskId **required** [String](#string)

#### Output
*Output schema unknown*

### CancelImportTask



```js
amazonaws_ec2.CancelImportTask({}, context)
```

#### Input
* input `object`
  * CancelReason [String](#string)
  * DryRun [Boolean](#boolean)
  * ImportTaskId [String](#string)

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
  * ReservedInstancesListingId **required** [String](#string)

#### Output
* output [CancelReservedInstancesListingResult](#cancelreservedinstanceslistingresult)

### CancelSpotFleetRequests



```js
amazonaws_ec2.CancelSpotFleetRequests({
  "SpotFleetRequestIds": [],
  "TerminateInstances": true
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * SpotFleetRequestIds **required** [ValueStringList](#valuestringlist)
  * TerminateInstances **required** [Boolean](#boolean)

#### Output
* output [CancelSpotFleetRequestsResponse](#cancelspotfleetrequestsresponse)

### CancelSpotInstanceRequests



```js
amazonaws_ec2.CancelSpotInstanceRequests({
  "SpotInstanceRequestIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * SpotInstanceRequestIds **required** [SpotInstanceRequestIdList](#spotinstancerequestidlist)

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
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * ProductCode **required** [String](#string)

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
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Name [String](#string)
  * SourceFpgaImageId **required** [String](#string)
  * SourceRegion **required** [String](#string)

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
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * SourceImageId **required** [String](#string)
  * SourceRegion **required** [String](#string)

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
  * Description [String](#string)
  * DestinationRegion [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * PresignedUrl [String](#string)
  * SourceRegion **required** [String](#string)
  * SourceSnapshotId **required** [String](#string)

#### Output
* output [CopySnapshotResult](#copysnapshotresult)

### CreateCustomerGateway



```js
amazonaws_ec2.CreateCustomerGateway({
  "BgpAsn": 0,
  "PublicIp": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * BgpAsn **required** [Integer](#integer)
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)
  * Type **required** [GatewayType](#gatewaytype)

#### Output
* output [CreateCustomerGatewayResult](#createcustomergatewayresult)

### CreateDefaultVpc



```js
amazonaws_ec2.CreateDefaultVpc({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)

#### Output
* output [CreateDefaultVpcResult](#createdefaultvpcresult)

### CreateDhcpOptions



```js
amazonaws_ec2.CreateDhcpOptions({
  "DhcpConfigurations": []
}, context)
```

#### Input
* input `object`
  * DhcpConfigurations **required** [NewDhcpConfigurationList](#newdhcpconfigurationlist)
  * DryRun [Boolean](#boolean)

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
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
* output [CreateEgressOnlyInternetGatewayResult](#createegressonlyinternetgatewayresult)

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

#### Input
* input `object`
  * ClientToken [String](#string)
  * DeliverLogsPermissionArn **required** [String](#string)
  * LogGroupName **required** [String](#string)
  * ResourceIds **required** [ValueStringList](#valuestringlist)
  * ResourceType **required** [FlowLogsResourceType](#flowlogsresourcetype)
  * TrafficType **required** [TrafficType](#traffictype)

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
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * InputStorageLocation **required** [StorageLocation](#storagelocation)
  * LogsStorageLocation [StorageLocation](#storagelocation)
  * Name [String](#string)

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
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * Name **required** [String](#string)
  * NoReboot [Boolean](#boolean)

#### Output
* output [CreateImageResult](#createimageresult)

### CreateInstanceExportTask



```js
amazonaws_ec2.CreateInstanceExportTask({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * ExportToS3Task [ExportToS3TaskSpecification](#exporttos3taskspecification)
  * InstanceId **required** [String](#string)
  * TargetEnvironment [ExportEnvironment](#exportenvironment)

#### Output
* output [CreateInstanceExportTaskResult](#createinstanceexporttaskresult)

### CreateInternetGateway



```js
amazonaws_ec2.CreateInternetGateway({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)

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
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)

#### Output
* output [KeyPair](#keypair)

### CreateNatGateway



```js
amazonaws_ec2.CreateNatGateway({
  "AllocationId": "",
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * AllocationId **required** [String](#string)
  * ClientToken [String](#string)
  * SubnetId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

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
  * CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * IcmpTypeCode [IcmpTypeCode](#icmptypecode)
  * Ipv6CidrBlock [String](#string)
  * NetworkAclId **required** [String](#string)
  * PortRange [PortRange](#portrange)
  * Protocol **required** [String](#string)
  * RuleAction **required** [RuleAction](#ruleaction)
  * RuleNumber **required** [Integer](#integer)

#### Output
*Output schema unknown*

### CreateNetworkInterface



```js
amazonaws_ec2.CreateNetworkInterface({
  "SubnetId": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Groups [SecurityGroupIdStringList](#securitygroupidstringlist)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddresses [PrivateIpAddressSpecificationList](#privateipaddressspecificationlist)
  * SecondaryPrivateIpAddressCount [Integer](#integer)
  * SubnetId **required** [String](#string)

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
  * AwsAccountId [String](#string)
  * AwsService [String](#string)
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * Permission **required** [InterfacePermissionType](#interfacepermissiontype)

#### Output
* output [CreateNetworkInterfacePermissionResult](#createnetworkinterfacepermissionresult)

### CreatePlacementGroup



```js
amazonaws_ec2.CreatePlacementGroup({
  "GroupName": "",
  "Strategy": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)
  * Strategy **required** [PlacementStrategy](#placementstrategy)

#### Output
*Output schema unknown*

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
  * ClientToken **required** [String](#string)
  * InstanceCount **required** [Integer](#integer)
  * PriceSchedules **required** [PriceScheduleSpecificationList](#priceschedulespecificationlist)
  * ReservedInstancesId **required** [String](#string)

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
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId [String](#string)
  * GatewayId [String](#string)
  * InstanceId [String](#string)
  * NatGatewayId [String](#string)
  * NetworkInterfaceId [String](#string)
  * RouteTableId **required** [String](#string)
  * VpcPeeringConnectionId [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
* output [CreateRouteTableResult](#createroutetableresult)

### CreateSecurityGroup



```js
amazonaws_ec2.CreateSecurityGroup({
  "Description": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * Description **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)
  * VpcId [String](#string)

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
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

#### Output
* output [Snapshot](#snapshot)

### CreateSpotDatafeedSubscription



```js
amazonaws_ec2.CreateSpotDatafeedSubscription({
  "Bucket": ""
}, context)
```

#### Input
* input `object`
  * Bucket **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Prefix [String](#string)

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
  * AvailabilityZone [String](#string)
  * CidrBlock **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Ipv6CidrBlock [String](#string)
  * VpcId **required** [String](#string)

#### Output
* output [CreateSubnetResult](#createsubnetresult)

### CreateTags



```js
amazonaws_ec2.CreateTags({
  "Resources": [],
  "Tags": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Resources **required** [ResourceIdList](#resourceidlist)
  * Tags **required** [TagList](#taglist)

#### Output
*Output schema unknown*

### CreateVolume



```js
amazonaws_ec2.CreateVolume({
  "AvailabilityZone": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * KmsKeyId [String](#string)
  * Size [Integer](#integer)
  * SnapshotId [String](#string)
  * TagSpecifications [TagSpecificationList](#tagspecificationlist)
  * VolumeType [VolumeType](#volumetype)

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
  * AmazonProvidedIpv6CidrBlock [Boolean](#boolean)
  * CidrBlock **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceTenancy [Tenancy](#tenancy)

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
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * PolicyDocument [String](#string)
  * PrivateDnsEnabled [Boolean](#boolean)
  * RouteTableIds [ValueStringList](#valuestringlist)
  * SecurityGroupIds [ValueStringList](#valuestringlist)
  * ServiceName **required** [String](#string)
  * SubnetIds [ValueStringList](#valuestringlist)
  * VpcEndpointType [VpcEndpointType](#vpcendpointtype)
  * VpcId **required** [String](#string)

#### Output
* output [CreateVpcEndpointResult](#createvpcendpointresult)

### CreateVpcPeeringConnection



```js
amazonaws_ec2.CreateVpcPeeringConnection({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * PeerOwnerId [String](#string)
  * PeerVpcId [String](#string)
  * VpcId [String](#string)

#### Output
* output [CreateVpcPeeringConnectionResult](#createvpcpeeringconnectionresult)

### CreateVpnConnection



```js
amazonaws_ec2.CreateVpnConnection({
  "CustomerGatewayId": "",
  "Type": "",
  "VpnGatewayId": ""
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Options [VpnConnectionOptionsSpecification](#vpnconnectionoptionsspecification)
  * Type **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

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
  * DestinationCidrBlock **required** [String](#string)
  * VpnConnectionId **required** [String](#string)

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
  * AmazonSideAsn [Long](#long)
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * Type **required** [GatewayType](#gatewaytype)

#### Output
* output [CreateVpnGatewayResult](#createvpngatewayresult)

### DeleteCustomerGateway



```js
amazonaws_ec2.DeleteCustomerGateway({
  "CustomerGatewayId": ""
}, context)
```

#### Input
* input `object`
  * CustomerGatewayId **required** [String](#string)
  * DryRun [Boolean](#boolean)

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
  * DhcpOptionsId **required** [String](#string)
  * DryRun [Boolean](#boolean)

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
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId **required** [EgressOnlyInternetGatewayId](#egressonlyinternetgatewayid)

#### Output
* output [DeleteEgressOnlyInternetGatewayResult](#deleteegressonlyinternetgatewayresult)

### DeleteFlowLogs



```js
amazonaws_ec2.DeleteFlowLogs({
  "FlowLogIds": []
}, context)
```

#### Input
* input `object`
  * FlowLogIds **required** [ValueStringList](#valuestringlist)

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
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteKeyPair



```js
amazonaws_ec2.DeleteKeyPair({
  "KeyName": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteNatGateway



```js
amazonaws_ec2.DeleteNatGateway({
  "NatGatewayId": ""
}, context)
```

#### Input
* input `object`
  * NatGatewayId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)
  * RuleNumber **required** [Integer](#integer)

#### Output
*Output schema unknown*

### DeleteNetworkInterface



```js
amazonaws_ec2.DeleteNetworkInterface({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * NetworkInterfacePermissionId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteRoute



```js
amazonaws_ec2.DeleteRoute({
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteSecurityGroup



```js
amazonaws_ec2.DeleteSecurityGroup({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)

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
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteSpotDatafeedSubscription



```js
amazonaws_ec2.DeleteSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)

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
  * DryRun [Boolean](#boolean)
  * SubnetId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_ec2.DeleteTags({
  "Resources": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Resources **required** [ResourceIdList](#resourceidlist)
  * Tags [TagList](#taglist)

#### Output
*Output schema unknown*

### DeleteVolume



```js
amazonaws_ec2.DeleteVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteVpcEndpoints



```js
amazonaws_ec2.DeleteVpcEndpoints({
  "VpcEndpointIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * VpcEndpointIds **required** [ValueStringList](#valuestringlist)

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
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpnConnectionId **required** [String](#string)

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
  * DestinationCidrBlock **required** [String](#string)
  * VpnConnectionId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpnGatewayId **required** [String](#string)

#### Output
*Output schema unknown*

### DeregisterImage



```js
amazonaws_ec2.DeregisterImage({
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

#### Output
*Output schema unknown*

### DescribeAccountAttributes



```js
amazonaws_ec2.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`
  * AttributeNames [AccountAttributeNameStringList](#accountattributenamestringlist)
  * DryRun [Boolean](#boolean)

#### Output
* output [DescribeAccountAttributesResult](#describeaccountattributesresult)

### DescribeAddresses



```js
amazonaws_ec2.DescribeAddresses({}, context)
```

#### Input
* input `object`
  * AllocationIds [AllocationIdList](#allocationidlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * PublicIps [PublicIpStringList](#publicipstringlist)

#### Output
* output [DescribeAddressesResult](#describeaddressesresult)

### DescribeAvailabilityZones



```js
amazonaws_ec2.DescribeAvailabilityZones({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ZoneNames [ZoneNameStringList](#zonenamestringlist)

#### Output
* output [DescribeAvailabilityZonesResult](#describeavailabilityzonesresult)

### DescribeBundleTasks



```js
amazonaws_ec2.DescribeBundleTasks({}, context)
```

#### Input
* input `object`
  * BundleIds [BundleIdStringList](#bundleidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

#### Output
* output [DescribeBundleTasksResult](#describebundletasksresult)

### DescribeClassicLinkInstances



```js
amazonaws_ec2.DescribeClassicLinkInstances({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeClassicLinkInstancesResult](#describeclassiclinkinstancesresult)

### DescribeConversionTasks



```js
amazonaws_ec2.DescribeConversionTasks({}, context)
```

#### Input
* input `object`
  * ConversionTaskIds [ConversionIdStringList](#conversionidstringlist)
  * DryRun [Boolean](#boolean)

#### Output
* output [DescribeConversionTasksResult](#describeconversiontasksresult)

### DescribeCustomerGateways



```js
amazonaws_ec2.DescribeCustomerGateways({}, context)
```

#### Input
* input `object`
  * CustomerGatewayIds [CustomerGatewayIdStringList](#customergatewayidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

#### Output
* output [DescribeCustomerGatewaysResult](#describecustomergatewaysresult)

### DescribeDhcpOptions



```js
amazonaws_ec2.DescribeDhcpOptions({}, context)
```

#### Input
* input `object`
  * DhcpOptionsIds [DhcpOptionsIdStringList](#dhcpoptionsidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

#### Output
* output [DescribeDhcpOptionsResult](#describedhcpoptionsresult)

### DescribeEgressOnlyInternetGateways



```js
amazonaws_ec2.DescribeEgressOnlyInternetGateways({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayIds [EgressOnlyInternetGatewayIdList](#egressonlyinternetgatewayidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeEgressOnlyInternetGatewaysResult](#describeegressonlyinternetgatewaysresult)

### DescribeElasticGpus



```js
amazonaws_ec2.DescribeElasticGpus({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * ElasticGpuIds [ElasticGpuIdSet](#elasticgpuidset)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeElasticGpusResult](#describeelasticgpusresult)

### DescribeExportTasks



```js
amazonaws_ec2.DescribeExportTasks({}, context)
```

#### Input
* input `object`
  * ExportTaskIds [ExportTaskIdStringList](#exporttaskidstringlist)

#### Output
* output [DescribeExportTasksResult](#describeexporttasksresult)

### DescribeFlowLogs



```js
amazonaws_ec2.DescribeFlowLogs({}, context)
```

#### Input
* input `object`
  * Filter [FilterList](#filterlist)
  * FlowLogIds [ValueStringList](#valuestringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

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
  * Attribute **required** [FpgaImageAttributeName](#fpgaimageattributename)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

#### Output
* output [DescribeFpgaImageAttributeResult](#describefpgaimageattributeresult)

### DescribeFpgaImages



```js
amazonaws_ec2.DescribeFpgaImages({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * FpgaImageIds [FpgaImageIdList](#fpgaimageidlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Owners [OwnerStringList](#ownerstringlist)

#### Output
* output [DescribeFpgaImagesResult](#describefpgaimagesresult)

### DescribeHostReservationOfferings



```js
amazonaws_ec2.DescribeHostReservationOfferings({}, context)
```

#### Input
* input `object`
  * Filter [FilterList](#filterlist)
  * MaxDuration [Integer](#integer)
  * MaxResults [Integer](#integer)
  * MinDuration [Integer](#integer)
  * NextToken [String](#string)
  * OfferingId [String](#string)

#### Output
* output [DescribeHostReservationOfferingsResult](#describehostreservationofferingsresult)

### DescribeHostReservations



```js
amazonaws_ec2.DescribeHostReservations({}, context)
```

#### Input
* input `object`
  * Filter [FilterList](#filterlist)
  * HostReservationIdSet [HostReservationIdSet](#hostreservationidset)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeHostReservationsResult](#describehostreservationsresult)

### DescribeHosts



```js
amazonaws_ec2.DescribeHosts({}, context)
```

#### Input
* input `object`
  * Filter [FilterList](#filterlist)
  * HostIds [RequestHostIdList](#requesthostidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeHostsResult](#describehostsresult)

### DescribeIamInstanceProfileAssociations



```js
amazonaws_ec2.DescribeIamInstanceProfileAssociations({}, context)
```

#### Input
* input `object`
  * AssociationIds [AssociationIdList](#associationidlist)
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeIamInstanceProfileAssociationsResult](#describeiaminstanceprofileassociationsresult)

### DescribeIdFormat



```js
amazonaws_ec2.DescribeIdFormat({}, context)
```

#### Input
* input `object`
  * Resource [String](#string)

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
  * PrincipalArn **required** [String](#string)
  * Resource [String](#string)

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
  * Attribute **required** [ImageAttributeName](#imageattributename)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

#### Output
* output [ImageAttribute](#imageattribute)

### DescribeImages



```js
amazonaws_ec2.DescribeImages({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * ExecutableUsers [ExecutableByStringList](#executablebystringlist)
  * Filters [FilterList](#filterlist)
  * ImageIds [ImageIdStringList](#imageidstringlist)
  * Owners [OwnerStringList](#ownerstringlist)

#### Output
* output [DescribeImagesResult](#describeimagesresult)

### DescribeImportImageTasks



```js
amazonaws_ec2.DescribeImportImageTasks({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ImportTaskIds [ImportTaskIdList](#importtaskidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeImportImageTasksResult](#describeimportimagetasksresult)

### DescribeImportSnapshotTasks



```js
amazonaws_ec2.DescribeImportSnapshotTasks({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ImportTaskIds [ImportTaskIdList](#importtaskidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

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
  * Attribute **required** [InstanceAttributeName](#instanceattributename)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

#### Output
* output [InstanceAttribute](#instanceattribute)

### DescribeInstanceStatus



```js
amazonaws_ec2.DescribeInstanceStatus({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * IncludeAllInstances [Boolean](#boolean)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeInstanceStatusResult](#describeinstancestatusresult)

### DescribeInstances



```js
amazonaws_ec2.DescribeInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeInstancesResult](#describeinstancesresult)

### DescribeInternetGateways



```js
amazonaws_ec2.DescribeInternetGateways({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InternetGatewayIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeInternetGatewaysResult](#describeinternetgatewaysresult)

### DescribeKeyPairs



```js
amazonaws_ec2.DescribeKeyPairs({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * KeyNames [KeyNameStringList](#keynamestringlist)

#### Output
* output [DescribeKeyPairsResult](#describekeypairsresult)

### DescribeMovingAddresses



```js
amazonaws_ec2.DescribeMovingAddresses({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * PublicIps [ValueStringList](#valuestringlist)

#### Output
* output [DescribeMovingAddressesResult](#describemovingaddressesresult)

### DescribeNatGateways



```js
amazonaws_ec2.DescribeNatGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NatGatewayIds [ValueStringList](#valuestringlist)
  * NextToken [String](#string)

#### Output
* output [DescribeNatGatewaysResult](#describenatgatewaysresult)

### DescribeNetworkAcls



```js
amazonaws_ec2.DescribeNetworkAcls({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * NetworkAclIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeNetworkAclsResult](#describenetworkaclsresult)

### DescribeNetworkInterfaceAttribute



```js
amazonaws_ec2.DescribeNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Attribute [NetworkInterfaceAttribute](#networkinterfaceattribute)
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)

#### Output
* output [DescribeNetworkInterfaceAttributeResult](#describenetworkinterfaceattributeresult)

### DescribeNetworkInterfacePermissions



```js
amazonaws_ec2.DescribeNetworkInterfacePermissions({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NetworkInterfacePermissionIds [NetworkInterfacePermissionIdList](#networkinterfacepermissionidlist)
  * NextToken [String](#string)

#### Output
* output [DescribeNetworkInterfacePermissionsResult](#describenetworkinterfacepermissionsresult)

### DescribeNetworkInterfaces



```js
amazonaws_ec2.DescribeNetworkInterfaces({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * NetworkInterfaceIds [NetworkInterfaceIdList](#networkinterfaceidlist)

#### Output
* output [DescribeNetworkInterfacesResult](#describenetworkinterfacesresult)

### DescribePlacementGroups



```js
amazonaws_ec2.DescribePlacementGroups({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * GroupNames [PlacementGroupStringList](#placementgroupstringlist)

#### Output
* output [DescribePlacementGroupsResult](#describeplacementgroupsresult)

### DescribePrefixLists



```js
amazonaws_ec2.DescribePrefixLists({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * PrefixListIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribePrefixListsResult](#describeprefixlistsresult)

### DescribeRegions



```js
amazonaws_ec2.DescribeRegions({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * RegionNames [RegionNameStringList](#regionnamestringlist)

#### Output
* output [DescribeRegionsResult](#describeregionsresult)

### DescribeReservedInstances



```js
amazonaws_ec2.DescribeReservedInstances({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * ReservedInstancesIds [ReservedInstancesIdStringList](#reservedinstancesidstringlist)

#### Output
* output [DescribeReservedInstancesResult](#describereservedinstancesresult)

### DescribeReservedInstancesListings



```js
amazonaws_ec2.DescribeReservedInstancesListings({}, context)
```

#### Input
* input `object`
  * Filters [FilterList](#filterlist)
  * ReservedInstancesId [String](#string)
  * ReservedInstancesListingId [String](#string)

#### Output
* output [DescribeReservedInstancesListingsResult](#describereservedinstanceslistingsresult)

### DescribeReservedInstancesModifications



```js
amazonaws_ec2.DescribeReservedInstancesModifications({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * NextToken [String](#string)
  * ReservedInstancesModificationIds [ReservedInstancesModificationIdStringList](#reservedinstancesmodificationidstringlist)

#### Output
* output [DescribeReservedInstancesModificationsResult](#describereservedinstancesmodificationsresult)

### DescribeReservedInstancesOfferings



```js
amazonaws_ec2.DescribeReservedInstancesOfferings({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * IncludeMarketplace [Boolean](#boolean)
  * InstanceTenancy [Tenancy](#tenancy)
  * InstanceType [InstanceType](#instancetype)
  * MaxDuration [Long](#long)
  * MaxInstanceCount [Integer](#integer)
  * MaxResults [Integer](#integer)
  * MinDuration [Long](#long)
  * NextToken [String](#string)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * ReservedInstancesOfferingIds [ReservedInstancesOfferingIdStringList](#reservedinstancesofferingidstringlist)

#### Output
* output [DescribeReservedInstancesOfferingsResult](#describereservedinstancesofferingsresult)

### DescribeRouteTables



```js
amazonaws_ec2.DescribeRouteTables({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * RouteTableIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeRouteTablesResult](#describeroutetablesresult)

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

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * FirstSlotStartTimeRange **required** [SlotDateTimeRangeRequest](#slotdatetimerangerequest)
  * MaxResults [Integer](#integer)
  * MaxSlotDurationInHours [Integer](#integer)
  * MinSlotDurationInHours [Integer](#integer)
  * NextToken [String](#string)
  * Recurrence **required** [ScheduledInstanceRecurrenceRequest](#scheduledinstancerecurrencerequest)

#### Output
* output [DescribeScheduledInstanceAvailabilityResult](#describescheduledinstanceavailabilityresult)

### DescribeScheduledInstances



```js
amazonaws_ec2.DescribeScheduledInstances({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ScheduledInstanceIds [ScheduledInstanceIdRequestSet](#scheduledinstanceidrequestset)
  * SlotStartTimeRange [SlotStartTimeRangeRequest](#slotstarttimerangerequest)

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
  * DryRun [Boolean](#boolean)
  * GroupId **required** [GroupIds](#groupids)

#### Output
* output [DescribeSecurityGroupReferencesResult](#describesecuritygroupreferencesresult)

### DescribeSecurityGroups



```js
amazonaws_ec2.DescribeSecurityGroups({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * GroupIds [GroupIdStringList](#groupidstringlist)
  * GroupNames [GroupNameStringList](#groupnamestringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

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
  * Attribute **required** [SnapshotAttributeName](#snapshotattributename)
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

#### Output
* output [DescribeSnapshotAttributeResult](#describesnapshotattributeresult)

### DescribeSnapshots



```js
amazonaws_ec2.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * OwnerIds [OwnerStringList](#ownerstringlist)
  * RestorableByUserIds [RestorableByStringList](#restorablebystringlist)
  * SnapshotIds [SnapshotIdStringList](#snapshotidstringlist)

#### Output
* output [DescribeSnapshotsResult](#describesnapshotsresult)

### DescribeSpotDatafeedSubscription



```js
amazonaws_ec2.DescribeSpotDatafeedSubscription({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)

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
  * DryRun [Boolean](#boolean)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * EventType [EventType](#eventtype)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)
  * StartTime **required** [DateTime](#datetime)

#### Output
* output [DescribeSpotFleetRequestHistoryResponse](#describespotfleetrequesthistoryresponse)

### DescribeSpotFleetRequests



```js
amazonaws_ec2.DescribeSpotFleetRequests({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeSpotFleetRequestsResponse](#describespotfleetrequestsresponse)

### DescribeSpotInstanceRequests



```js
amazonaws_ec2.DescribeSpotInstanceRequests({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * SpotInstanceRequestIds [SpotInstanceRequestIdList](#spotinstancerequestidlist)

#### Output
* output [DescribeSpotInstanceRequestsResult](#describespotinstancerequestsresult)

### DescribeSpotPriceHistory



```js
amazonaws_ec2.DescribeSpotPriceHistory({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * EndTime [DateTime](#datetime)
  * Filters [FilterList](#filterlist)
  * InstanceTypes [InstanceTypeList](#instancetypelist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ProductDescriptions [ProductDescriptionList](#productdescriptionlist)
  * StartTime [DateTime](#datetime)

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
  * DryRun [Boolean](#boolean)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * VpcId **required** [String](#string)

#### Output
* output [DescribeStaleSecurityGroupsResult](#describestalesecuritygroupsresult)

### DescribeSubnets



```js
amazonaws_ec2.DescribeSubnets({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * SubnetIds [SubnetIdStringList](#subnetidstringlist)

#### Output
* output [DescribeSubnetsResult](#describesubnetsresult)

### DescribeTags



```js
amazonaws_ec2.DescribeTags({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeVolumeAttribute



```js
amazonaws_ec2.DescribeVolumeAttribute({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * Attribute [VolumeAttributeName](#volumeattributename)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

#### Output
* output [DescribeVolumeAttributeResult](#describevolumeattributeresult)

### DescribeVolumeStatus



```js
amazonaws_ec2.DescribeVolumeStatus({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

#### Output
* output [DescribeVolumeStatusResult](#describevolumestatusresult)

### DescribeVolumes



```js
amazonaws_ec2.DescribeVolumes({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

#### Output
* output [DescribeVolumesResult](#describevolumesresult)

### DescribeVolumesModifications



```js
amazonaws_ec2.DescribeVolumesModifications({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

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
  * Attribute **required** [VpcAttributeName](#vpcattributename)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
* output [DescribeVpcAttributeResult](#describevpcattributeresult)

### DescribeVpcClassicLink



```js
amazonaws_ec2.DescribeVpcClassicLink({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcIds [VpcClassicLinkIdList](#vpcclassiclinkidlist)

#### Output
* output [DescribeVpcClassicLinkResult](#describevpcclassiclinkresult)

### DescribeVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DescribeVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * VpcIds [VpcClassicLinkIdList](#vpcclassiclinkidlist)

#### Output
* output [DescribeVpcClassicLinkDnsSupportResult](#describevpcclassiclinkdnssupportresult)

### DescribeVpcEndpointServices



```js
amazonaws_ec2.DescribeVpcEndpointServices({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ServiceNames [ValueStringList](#valuestringlist)

#### Output
* output [DescribeVpcEndpointServicesResult](#describevpcendpointservicesresult)

### DescribeVpcEndpoints



```js
amazonaws_ec2.DescribeVpcEndpoints({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VpcEndpointIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeVpcEndpointsResult](#describevpcendpointsresult)

### DescribeVpcPeeringConnections



```js
amazonaws_ec2.DescribeVpcPeeringConnections({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcPeeringConnectionIds [ValueStringList](#valuestringlist)

#### Output
* output [DescribeVpcPeeringConnectionsResult](#describevpcpeeringconnectionsresult)

### DescribeVpcs



```js
amazonaws_ec2.DescribeVpcs({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcIds [VpcIdStringList](#vpcidstringlist)

#### Output
* output [DescribeVpcsResult](#describevpcsresult)

### DescribeVpnConnections



```js
amazonaws_ec2.DescribeVpnConnections({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpnConnectionIds [VpnConnectionIdStringList](#vpnconnectionidstringlist)

#### Output
* output [DescribeVpnConnectionsResult](#describevpnconnectionsresult)

### DescribeVpnGateways



```js
amazonaws_ec2.DescribeVpnGateways({}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpnGatewayIds [VpnGatewayIdStringList](#vpngatewayidstringlist)

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
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * VpcId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)
  * VpcId **required** [String](#string)

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
  * AttachmentId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)

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
  * Device [String](#string)
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * InstanceId [String](#string)
  * VolumeId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

#### Output
*Output schema unknown*

### DisableVgwRoutePropagation



```js
amazonaws_ec2.DisableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * GatewayId **required** [String](#string)
  * RouteTableId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
* output [DisableVpcClassicLinkResult](#disablevpcclassiclinkresult)

### DisableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.DisableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId [String](#string)

#### Output
* output [DisableVpcClassicLinkDnsSupportResult](#disablevpcclassiclinkdnssupportresult)

### DisassociateAddress



```js
amazonaws_ec2.DisassociateAddress({}, context)
```

#### Input
* input `object`
  * AssociationId [String](#string)
  * DryRun [Boolean](#boolean)
  * PublicIp [String](#string)

#### Output
*Output schema unknown*

### DisassociateIamInstanceProfile



```js
amazonaws_ec2.DisassociateIamInstanceProfile({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** [String](#string)

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
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)

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
  * AssociationId **required** [String](#string)

#### Output
* output [DisassociateSubnetCidrBlockResult](#disassociatesubnetcidrblockresult)

### DisassociateVpcCidrBlock



```js
amazonaws_ec2.DisassociateVpcCidrBlock({
  "AssociationId": ""
}, context)
```

#### Input
* input `object`
  * AssociationId **required** [String](#string)

#### Output
* output [DisassociateVpcCidrBlockResult](#disassociatevpccidrblockresult)

### EnableVgwRoutePropagation



```js
amazonaws_ec2.EnableVgwRoutePropagation({
  "GatewayId": "",
  "RouteTableId": ""
}, context)
```

#### Input
* input `object`
  * GatewayId **required** [String](#string)
  * RouteTableId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

#### Output
* output [EnableVpcClassicLinkResult](#enablevpcclassiclinkresult)

### EnableVpcClassicLinkDnsSupport



```js
amazonaws_ec2.EnableVpcClassicLinkDnsSupport({}, context)
```

#### Input
* input `object`
  * VpcId [String](#string)

#### Output
* output [EnableVpcClassicLinkDnsSupportResult](#enablevpcclassiclinkdnssupportresult)

### GetConsoleOutput



```js
amazonaws_ec2.GetConsoleOutput({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * WakeUp [Boolean](#boolean)

#### Output
* output [GetConsoleScreenshotResult](#getconsolescreenshotresult)

### GetHostReservationPurchasePreview



```js
amazonaws_ec2.GetHostReservationPurchasePreview({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Input
* input `object`
  * HostIdSet **required** [RequestHostIdSet](#requesthostidset)
  * OfferingId **required** [String](#string)

#### Output
* output [GetHostReservationPurchasePreviewResult](#gethostreservationpurchasepreviewresult)

### GetPasswordData



```js
amazonaws_ec2.GetPasswordData({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

#### Output
* output [GetPasswordDataResult](#getpassworddataresult)

### GetReservedInstancesExchangeQuote



```js
amazonaws_ec2.GetReservedInstancesExchangeQuote({
  "ReservedInstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * ReservedInstanceIds **required** [ReservedInstanceIdSet](#reservedinstanceidset)
  * TargetConfigurations [TargetConfigurationRequestSet](#targetconfigurationrequestset)

#### Output
* output [GetReservedInstancesExchangeQuoteResult](#getreservedinstancesexchangequoteresult)

### ImportImage



```js
amazonaws_ec2.ImportImage({}, context)
```

#### Input
* input `object`
  * Architecture [String](#string)
  * ClientData [ClientData](#clientdata)
  * ClientToken [String](#string)
  * Description [String](#string)
  * DiskContainers [ImageDiskContainerList](#imagediskcontainerlist)
  * DryRun [Boolean](#boolean)
  * Hypervisor [String](#string)
  * LicenseType [String](#string)
  * Platform [String](#string)
  * RoleName [String](#string)

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
  * Description [String](#string)
  * DiskImages [DiskImageList](#diskimagelist)
  * DryRun [Boolean](#boolean)
  * LaunchSpecification [ImportInstanceLaunchSpecification](#importinstancelaunchspecification)
  * Platform **required** [PlatformValues](#platformvalues)

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
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)
  * PublicKeyMaterial **required** [Blob](#blob)

#### Output
* output [ImportKeyPairResult](#importkeypairresult)

### ImportSnapshot



```js
amazonaws_ec2.ImportSnapshot({}, context)
```

#### Input
* input `object`
  * ClientData [ClientData](#clientdata)
  * ClientToken [String](#string)
  * Description [String](#string)
  * DiskContainer [SnapshotDiskContainer](#snapshotdiskcontainer)
  * DryRun [Boolean](#boolean)
  * RoleName [String](#string)

#### Output
* output [ImportSnapshotResult](#importsnapshotresult)

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

#### Input
* input `object`
  * AvailabilityZone **required** [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Image **required** [DiskImageDetail](#diskimagedetail)
  * Volume **required** [VolumeDetail](#volumedetail)

#### Output
* output [ImportVolumeResult](#importvolumeresult)

### ModifyFpgaImageAttribute



```js
amazonaws_ec2.ModifyFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Input
* input `object`
  * Attribute [FpgaImageAttributeName](#fpgaimageattributename)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)
  * LoadPermission [LoadPermissionModifications](#loadpermissionmodifications)
  * Name [String](#string)
  * OperationType [OperationType](#operationtype)
  * ProductCodes [ProductCodeStringList](#productcodestringlist)
  * UserGroups [UserGroupStringList](#usergroupstringlist)
  * UserIds [UserIdStringList](#useridstringlist)

#### Output
* output [ModifyFpgaImageAttributeResult](#modifyfpgaimageattributeresult)

### ModifyHosts



```js
amazonaws_ec2.ModifyHosts({
  "AutoPlacement": "",
  "HostIds": []
}, context)
```

#### Input
* input `object`
  * AutoPlacement **required** [AutoPlacement](#autoplacement)
  * HostIds **required** [RequestHostIdList](#requesthostidlist)

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
  * Resource **required** [String](#string)
  * UseLongIds **required** [Boolean](#boolean)

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
  * PrincipalArn **required** [String](#string)
  * Resource **required** [String](#string)
  * UseLongIds **required** [Boolean](#boolean)

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
  * Attribute [String](#string)
  * Description [AttributeValue](#attributevalue)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)
  * LaunchPermission [LaunchPermissionModifications](#launchpermissionmodifications)
  * OperationType [OperationType](#operationtype)
  * ProductCodes [ProductCodeStringList](#productcodestringlist)
  * UserGroups [UserGroupStringList](#usergroupstringlist)
  * UserIds [UserIdStringList](#useridstringlist)
  * Value [String](#string)

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
  * Attribute [InstanceAttributeName](#instanceattributename)
  * BlockDeviceMappings [InstanceBlockDeviceMappingSpecificationList](#instanceblockdevicemappingspecificationlist)
  * DisableApiTermination [AttributeBooleanValue](#attributebooleanvalue)
  * DryRun [Boolean](#boolean)
  * EbsOptimized [AttributeBooleanValue](#attributebooleanvalue)
  * EnaSupport [AttributeBooleanValue](#attributebooleanvalue)
  * Groups [GroupIdStringList](#groupidstringlist)
  * InstanceId **required** [String](#string)
  * InstanceInitiatedShutdownBehavior [AttributeValue](#attributevalue)
  * InstanceType [AttributeValue](#attributevalue)
  * Kernel [AttributeValue](#attributevalue)
  * Ramdisk [AttributeValue](#attributevalue)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)
  * SriovNetSupport [AttributeValue](#attributevalue)
  * UserData [BlobAttributeValue](#blobattributevalue)
  * Value [String](#string)

#### Output
*Output schema unknown*

### ModifyInstancePlacement



```js
amazonaws_ec2.ModifyInstancePlacement({
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * Affinity [Affinity](#affinity)
  * HostId [String](#string)
  * InstanceId **required** [String](#string)
  * Tenancy [HostTenancy](#hosttenancy)

#### Output
* output [ModifyInstancePlacementResult](#modifyinstanceplacementresult)

### ModifyNetworkInterfaceAttribute



```js
amazonaws_ec2.ModifyNetworkInterfaceAttribute({
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * Attachment [NetworkInterfaceAttachmentChanges](#networkinterfaceattachmentchanges)
  * Description [AttributeValue](#attributevalue)
  * DryRun [Boolean](#boolean)
  * Groups [SecurityGroupIdStringList](#securitygroupidstringlist)
  * NetworkInterfaceId **required** [String](#string)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)

#### Output
*Output schema unknown*

### ModifyReservedInstances



```js
amazonaws_ec2.ModifyReservedInstances({
  "ReservedInstancesIds": [],
  "TargetConfigurations": []
}, context)
```

#### Input
* input `object`
  * ClientToken [String](#string)
  * ReservedInstancesIds **required** [ReservedInstancesIdStringList](#reservedinstancesidstringlist)
  * TargetConfigurations **required** [ReservedInstancesConfigurationList](#reservedinstancesconfigurationlist)

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
  * Attribute [SnapshotAttributeName](#snapshotattributename)
  * CreateVolumePermission [CreateVolumePermissionModifications](#createvolumepermissionmodifications)
  * DryRun [Boolean](#boolean)
  * GroupNames [GroupNameStringList](#groupnamestringlist)
  * OperationType [OperationType](#operationtype)
  * SnapshotId **required** [String](#string)
  * UserIds [UserIdStringList](#useridstringlist)

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
  * ExcessCapacityTerminationPolicy [ExcessCapacityTerminationPolicy](#excesscapacityterminationpolicy)
  * SpotFleetRequestId **required** [String](#string)
  * TargetCapacity [Integer](#integer)

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
  * AssignIpv6AddressOnCreation [AttributeBooleanValue](#attributebooleanvalue)
  * MapPublicIpOnLaunch [AttributeBooleanValue](#attributebooleanvalue)
  * SubnetId **required** [String](#string)

#### Output
*Output schema unknown*

### ModifyVolume



```js
amazonaws_ec2.ModifyVolume({
  "VolumeId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Iops [Integer](#integer)
  * Size [Integer](#integer)
  * VolumeId **required** [String](#string)
  * VolumeType [VolumeType](#volumetype)

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
  * AutoEnableIO [AttributeBooleanValue](#attributebooleanvalue)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

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
  * EnableDnsHostnames [AttributeBooleanValue](#attributebooleanvalue)
  * EnableDnsSupport [AttributeBooleanValue](#attributebooleanvalue)
  * VpcId **required** [String](#string)

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
  * AddRouteTableIds [ValueStringList](#valuestringlist)
  * AddSecurityGroupIds [ValueStringList](#valuestringlist)
  * AddSubnetIds [ValueStringList](#valuestringlist)
  * DryRun [Boolean](#boolean)
  * PolicyDocument [String](#string)
  * PrivateDnsEnabled [Boolean](#boolean)
  * RemoveRouteTableIds [ValueStringList](#valuestringlist)
  * RemoveSecurityGroupIds [ValueStringList](#valuestringlist)
  * RemoveSubnetIds [ValueStringList](#valuestringlist)
  * ResetPolicy [Boolean](#boolean)
  * VpcEndpointId **required** [String](#string)

#### Output
* output [ModifyVpcEndpointResult](#modifyvpcendpointresult)

### ModifyVpcPeeringConnectionOptions



```js
amazonaws_ec2.ModifyVpcPeeringConnectionOptions({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * AccepterPeeringConnectionOptions [PeeringConnectionOptionsRequest](#peeringconnectionoptionsrequest)
  * DryRun [Boolean](#boolean)
  * RequesterPeeringConnectionOptions [PeeringConnectionOptionsRequest](#peeringconnectionoptionsrequest)
  * VpcPeeringConnectionId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InstanceTenancy **required** [VpcTenancy](#vpctenancy)
  * VpcId **required** [String](#string)

#### Output
* output [ModifyVpcTenancyResult](#modifyvpctenancyresult)

### MonitorInstances



```js
amazonaws_ec2.MonitorInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

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
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)

#### Output
* output [MoveAddressToVpcResult](#moveaddresstovpcresult)

### PurchaseHostReservation



```js
amazonaws_ec2.PurchaseHostReservation({
  "HostIdSet": [],
  "OfferingId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken [String](#string)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * HostIdSet **required** [RequestHostIdSet](#requesthostidset)
  * LimitPrice [String](#string)
  * OfferingId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * InstanceCount **required** [Integer](#integer)
  * LimitPrice [ReservedInstanceLimitPrice](#reservedinstancelimitprice)
  * ReservedInstancesOfferingId **required** [String](#string)

#### Output
* output [PurchaseReservedInstancesOfferingResult](#purchasereservedinstancesofferingresult)

### PurchaseScheduledInstances



```js
amazonaws_ec2.PurchaseScheduledInstances({
  "PurchaseRequests": []
}, context)
```

#### Input
* input `object`
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * PurchaseRequests **required** [PurchaseRequestSet](#purchaserequestset)

#### Output
* output [PurchaseScheduledInstancesResult](#purchasescheduledinstancesresult)

### RebootInstances



```js
amazonaws_ec2.RebootInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

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
  * Architecture [ArchitectureValues](#architecturevalues)
  * BillingProducts [BillingProductList](#billingproductlist)
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * EnaSupport [Boolean](#boolean)
  * ImageLocation [String](#string)
  * KernelId [String](#string)
  * Name **required** [String](#string)
  * RamdiskId [String](#string)
  * RootDeviceName [String](#string)
  * SriovNetSupport [String](#string)
  * VirtualizationType [String](#string)

#### Output
* output [RegisterImageResult](#registerimageresult)

### RejectVpcPeeringConnection



```js
amazonaws_ec2.RejectVpcPeeringConnection({
  "VpcPeeringConnectionId": ""
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId **required** [String](#string)

#### Output
* output [RejectVpcPeeringConnectionResult](#rejectvpcpeeringconnectionresult)

### ReleaseAddress



```js
amazonaws_ec2.ReleaseAddress({}, context)
```

#### Input
* input `object`
  * AllocationId [String](#string)
  * DryRun [Boolean](#boolean)
  * PublicIp [String](#string)

#### Output
*Output schema unknown*

### ReleaseHosts



```js
amazonaws_ec2.ReleaseHosts({
  "HostIds": []
}, context)
```

#### Input
* input `object`
  * HostIds **required** [RequestHostIdList](#requesthostidlist)

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
  * AssociationId **required** [String](#string)
  * IamInstanceProfile **required** [IamInstanceProfileSpecification](#iaminstanceprofilespecification)

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
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)

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
  * CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * IcmpTypeCode [IcmpTypeCode](#icmptypecode)
  * Ipv6CidrBlock [String](#string)
  * NetworkAclId **required** [String](#string)
  * PortRange [PortRange](#portrange)
  * Protocol **required** [String](#string)
  * RuleAction **required** [RuleAction](#ruleaction)
  * RuleNumber **required** [Integer](#integer)

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
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId [String](#string)
  * GatewayId [String](#string)
  * InstanceId [String](#string)
  * NatGatewayId [String](#string)
  * NetworkInterfaceId [String](#string)
  * RouteTableId **required** [String](#string)
  * VpcPeeringConnectionId [String](#string)

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
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

#### Output
* output [ReplaceRouteTableAssociationResult](#replaceroutetableassociationresult)

### ReportInstanceStatus



```js
amazonaws_ec2.ReportInstanceStatus({
  "Instances": [],
  "ReasonCodes": [],
  "Status": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * EndTime [DateTime](#datetime)
  * Instances **required** [InstanceIdStringList](#instanceidstringlist)
  * ReasonCodes **required** [ReasonCodesList](#reasoncodeslist)
  * StartTime [DateTime](#datetime)
  * Status **required** [ReportStatusType](#reportstatustype)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * SpotFleetRequestConfig **required** [SpotFleetRequestConfigData](#spotfleetrequestconfigdata)

#### Output
* output [RequestSpotFleetResponse](#requestspotfleetresponse)

### RequestSpotInstances



```js
amazonaws_ec2.RequestSpotInstances({
  "SpotPrice": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZoneGroup [String](#string)
  * BlockDurationMinutes [Integer](#integer)
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceCount [Integer](#integer)
  * InstanceInterruptionBehavior [InstanceInterruptionBehavior](#instanceinterruptionbehavior)
  * LaunchGroup [String](#string)
  * LaunchSpecification [RequestSpotLaunchSpecification](#requestspotlaunchspecification)
  * SpotPrice **required** [String](#string)
  * Type [SpotInstanceType](#spotinstancetype)
  * ValidFrom [DateTime](#datetime)
  * ValidUntil [DateTime](#datetime)

#### Output
* output [RequestSpotInstancesResult](#requestspotinstancesresult)

### ResetFpgaImageAttribute



```js
amazonaws_ec2.ResetFpgaImageAttribute({
  "FpgaImageId": ""
}, context)
```

#### Input
* input `object`
  * Attribute [ResetFpgaImageAttributeName](#resetfpgaimageattributename)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

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
  * Attribute **required** [ResetImageAttributeName](#resetimageattributename)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

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
  * Attribute **required** [InstanceAttributeName](#instanceattributename)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * SourceDestCheck [String](#string)

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
  * Attribute **required** [SnapshotAttributeName](#snapshotattributename)
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

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
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)

#### Output
* output [RestoreAddressToClassicResult](#restoreaddresstoclassicresult)

### RevokeSecurityGroupEgress



```js
amazonaws_ec2.RevokeSecurityGroupEgress({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId **required** [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

#### Output
*Output schema unknown*

### RevokeSecurityGroupIngress



```js
amazonaws_ec2.RevokeSecurityGroupIngress({}, context)
```

#### Input
* input `object`
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

#### Output
*Output schema unknown*

### RunInstances



```js
amazonaws_ec2.RunInstances({
  "ImageId": "",
  "MaxCount": 0,
  "MinCount": 0
}, context)
```

#### Input
* input `object`
  * AdditionalInfo [String](#string)
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * ClientToken [String](#string)
  * DisableApiTermination [Boolean](#boolean)
  * DryRun [Boolean](#boolean)
  * EbsOptimized [Boolean](#boolean)
  * ElasticGpuSpecification [ElasticGpuSpecifications](#elasticgpuspecifications)
  * IamInstanceProfile [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * ImageId **required** [String](#string)
  * InstanceInitiatedShutdownBehavior [ShutdownBehavior](#shutdownbehavior)
  * InstanceType [InstanceType](#instancetype)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * MaxCount **required** [Integer](#integer)
  * MinCount **required** [Integer](#integer)
  * Monitoring [RunInstancesMonitoringEnabled](#runinstancesmonitoringenabled)
  * NetworkInterfaces [InstanceNetworkInterfaceSpecificationList](#instancenetworkinterfacespecificationlist)
  * Placement [Placement](#placement)
  * PrivateIpAddress [String](#string)
  * RamdiskId [String](#string)
  * SecurityGroupIds [SecurityGroupIdStringList](#securitygroupidstringlist)
  * SecurityGroups [SecurityGroupStringList](#securitygroupstringlist)
  * SubnetId [String](#string)
  * TagSpecifications [TagSpecificationList](#tagspecificationlist)
  * UserData [String](#string)

#### Output
* output [Reservation](#reservation)

### RunScheduledInstances



```js
amazonaws_ec2.RunScheduledInstances({
  "LaunchSpecification": {
    "ImageId": ""
  },
  "ScheduledInstanceId": ""
}, context)
```

#### Input
* input `object`
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceCount [Integer](#integer)
  * LaunchSpecification **required** [ScheduledInstancesLaunchSpecification](#scheduledinstanceslaunchspecification)
  * ScheduledInstanceId **required** [String](#string)

#### Output
* output [RunScheduledInstancesResult](#runscheduledinstancesresult)

### StartInstances



```js
amazonaws_ec2.StartInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * AdditionalInfo [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

#### Output
* output [StartInstancesResult](#startinstancesresult)

### StopInstances



```js
amazonaws_ec2.StopInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

#### Output
* output [StopInstancesResult](#stopinstancesresult)

### TerminateInstances



```js
amazonaws_ec2.TerminateInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

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
  * Ipv6Addresses **required** [Ipv6AddressList](#ipv6addresslist)
  * NetworkInterfaceId **required** [String](#string)

#### Output
* output [UnassignIpv6AddressesResult](#unassignipv6addressesresult)

### UnassignPrivateIpAddresses



```js
amazonaws_ec2.UnassignPrivateIpAddresses({
  "NetworkInterfaceId": "",
  "PrivateIpAddresses": []
}, context)
```

#### Input
* input `object`
  * NetworkInterfaceId **required** [String](#string)
  * PrivateIpAddresses **required** [PrivateIpAddressStringList](#privateipaddressstringlist)

#### Output
*Output schema unknown*

### UnmonitorInstances



```js
amazonaws_ec2.UnmonitorInstances({
  "InstanceIds": []
}, context)
```

#### Input
* input `object`
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

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
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions **required** [IpPermissionList](#ippermissionlist)

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
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions **required** [IpPermissionList](#ippermissionlist)

#### Output
* output [UpdateSecurityGroupRuleDescriptionsIngressResult](#updatesecuritygroupruledescriptionsingressresult)



## Definitions

### AcceptReservedInstancesExchangeQuoteRequest
* AcceptReservedInstancesExchangeQuoteRequest `object`: Contains the parameters for accepting the quote.
  * DryRun [Boolean](#boolean)
  * ReservedInstanceIds **required** [ReservedInstanceIdSet](#reservedinstanceidset)
  * TargetConfigurations [TargetConfigurationRequestSet](#targetconfigurationrequestset)

### AcceptReservedInstancesExchangeQuoteResult
* AcceptReservedInstancesExchangeQuoteResult `object`: The result of the exchange and whether it was <code>successful</code>.
  * ExchangeId [String](#string)

### AcceptVpcPeeringConnectionRequest
* AcceptVpcPeeringConnectionRequest `object`: Contains the parameters for AcceptVpcPeeringConnection.
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId [String](#string)

### AcceptVpcPeeringConnectionResult
* AcceptVpcPeeringConnectionResult `object`: Contains the output of AcceptVpcPeeringConnection.
  * VpcPeeringConnection [VpcPeeringConnection](#vpcpeeringconnection)

### AccountAttribute
* AccountAttribute `object`: Describes an account attribute.
  * AttributeName [String](#string)
  * AttributeValues [AccountAttributeValueList](#accountattributevaluelist)

### AccountAttributeList
* AccountAttributeList `array`
  * items [AccountAttribute](#accountattribute)

### AccountAttributeName
* AccountAttributeName `string` (values: supported-platforms, default-vpc)

### AccountAttributeNameStringList
* AccountAttributeNameStringList `array`
  * items [AccountAttributeName](#accountattributename)

### AccountAttributeValue
* AccountAttributeValue `object`: Describes a value of an account attribute.
  * AttributeValue [String](#string)

### AccountAttributeValueList
* AccountAttributeValueList `array`
  * items [AccountAttributeValue](#accountattributevalue)

### ActiveInstance
* ActiveInstance `object`: Describes a running instance in a Spot fleet.
  * InstanceHealth [InstanceHealthStatus](#instancehealthstatus)
  * InstanceId [String](#string)
  * InstanceType [String](#string)
  * SpotInstanceRequestId [String](#string)

### ActiveInstanceSet
* ActiveInstanceSet `array`
  * items [ActiveInstance](#activeinstance)

### ActivityStatus
* ActivityStatus `string` (values: error, pending_fulfillment, pending_termination, fulfilled)

### Address
* Address `object`: Describes an Elastic IP address.
  * AllocationId [String](#string)
  * AssociationId [String](#string)
  * Domain [DomainType](#domaintype)
  * InstanceId [String](#string)
  * NetworkInterfaceId [String](#string)
  * NetworkInterfaceOwnerId [String](#string)
  * PrivateIpAddress [String](#string)
  * PublicIp [String](#string)

### AddressList
* AddressList `array`
  * items [Address](#address)

### Affinity
* Affinity `string` (values: default, host)

### AllocateAddressRequest
* AllocateAddressRequest `object`: Contains the parameters for AllocateAddress.
  * Address [String](#string)
  * Domain [DomainType](#domaintype)
  * DryRun [Boolean](#boolean)

### AllocateAddressResult
* AllocateAddressResult `object`: Contains the output of AllocateAddress.
  * AllocationId [String](#string)
  * Domain [DomainType](#domaintype)
  * PublicIp [String](#string)

### AllocateHostsRequest
* AllocateHostsRequest `object`: Contains the parameters for AllocateHosts.
  * AutoPlacement [AutoPlacement](#autoplacement)
  * AvailabilityZone **required** [String](#string)
  * ClientToken [String](#string)
  * InstanceType **required** [String](#string)
  * Quantity **required** [Integer](#integer)

### AllocateHostsResult
* AllocateHostsResult `object`: Contains the output of AllocateHosts.
  * HostIds [ResponseHostIdList](#responsehostidlist)

### AllocationIdList
* AllocationIdList `array`
  * items [String](#string)

### AllocationState
* AllocationState `string` (values: available, under-assessment, permanent-failure, released, released-permanent-failure)

### AllocationStrategy
* AllocationStrategy `string` (values: lowestPrice, diversified)

### ArchitectureValues
* ArchitectureValues `string` (values: i386, x86_64)

### AssignIpv6AddressesRequest
* AssignIpv6AddressesRequest `object`
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [Ipv6AddressList](#ipv6addresslist)
  * NetworkInterfaceId **required** [String](#string)

### AssignIpv6AddressesResult
* AssignIpv6AddressesResult `object`
  * AssignedIpv6Addresses [Ipv6AddressList](#ipv6addresslist)
  * NetworkInterfaceId [String](#string)

### AssignPrivateIpAddressesRequest
* AssignPrivateIpAddressesRequest `object`: Contains the parameters for AssignPrivateIpAddresses.
  * AllowReassignment [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * PrivateIpAddresses [PrivateIpAddressStringList](#privateipaddressstringlist)
  * SecondaryPrivateIpAddressCount [Integer](#integer)

### AssociateAddressRequest
* AssociateAddressRequest `object`: Contains the parameters for AssociateAddress.
  * AllocationId [String](#string)
  * AllowReassociation [Boolean](#boolean)
  * DryRun [Boolean](#boolean)
  * InstanceId [String](#string)
  * NetworkInterfaceId [String](#string)
  * PrivateIpAddress [String](#string)
  * PublicIp [String](#string)

### AssociateAddressResult
* AssociateAddressResult `object`: Contains the output of AssociateAddress.
  * AssociationId [String](#string)

### AssociateDhcpOptionsRequest
* AssociateDhcpOptionsRequest `object`: Contains the parameters for AssociateDhcpOptions.
  * DhcpOptionsId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### AssociateIamInstanceProfileRequest
* AssociateIamInstanceProfileRequest `object`
  * IamInstanceProfile **required** [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * InstanceId **required** [String](#string)

### AssociateIamInstanceProfileResult
* AssociateIamInstanceProfileResult `object`
  * IamInstanceProfileAssociation [IamInstanceProfileAssociation](#iaminstanceprofileassociation)

### AssociateRouteTableRequest
* AssociateRouteTableRequest `object`: Contains the parameters for AssociateRouteTable.
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)
  * SubnetId **required** [String](#string)

### AssociateRouteTableResult
* AssociateRouteTableResult `object`: Contains the output of AssociateRouteTable.
  * AssociationId [String](#string)

### AssociateSubnetCidrBlockRequest
* AssociateSubnetCidrBlockRequest `object`
  * Ipv6CidrBlock **required** [String](#string)
  * SubnetId **required** [String](#string)

### AssociateSubnetCidrBlockResult
* AssociateSubnetCidrBlockResult `object`
  * Ipv6CidrBlockAssociation [SubnetIpv6CidrBlockAssociation](#subnetipv6cidrblockassociation)
  * SubnetId [String](#string)

### AssociateVpcCidrBlockRequest
* AssociateVpcCidrBlockRequest `object`
  * AmazonProvidedIpv6CidrBlock [Boolean](#boolean)
  * CidrBlock [String](#string)
  * VpcId **required** [String](#string)

### AssociateVpcCidrBlockResult
* AssociateVpcCidrBlockResult `object`
  * CidrBlockAssociation [VpcCidrBlockAssociation](#vpccidrblockassociation)
  * Ipv6CidrBlockAssociation [VpcIpv6CidrBlockAssociation](#vpcipv6cidrblockassociation)
  * VpcId [String](#string)

### AssociationIdList
* AssociationIdList `array`
  * items [String](#string)

### AttachClassicLinkVpcRequest
* AttachClassicLinkVpcRequest `object`: Contains the parameters for AttachClassicLinkVpc.
  * DryRun [Boolean](#boolean)
  * Groups **required** [GroupIdStringList](#groupidstringlist)
  * InstanceId **required** [String](#string)
  * VpcId **required** [String](#string)

### AttachClassicLinkVpcResult
* AttachClassicLinkVpcResult `object`: Contains the output of AttachClassicLinkVpc.
  * Return [Boolean](#boolean)

### AttachInternetGatewayRequest
* AttachInternetGatewayRequest `object`: Contains the parameters for AttachInternetGateway.
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)
  * VpcId **required** [String](#string)

### AttachNetworkInterfaceRequest
* AttachNetworkInterfaceRequest `object`: Contains the parameters for AttachNetworkInterface.
  * DeviceIndex **required** [Integer](#integer)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * NetworkInterfaceId **required** [String](#string)

### AttachNetworkInterfaceResult
* AttachNetworkInterfaceResult `object`: Contains the output of AttachNetworkInterface.
  * AttachmentId [String](#string)

### AttachVolumeRequest
* AttachVolumeRequest `object`: Contains the parameters for AttachVolume.
  * Device **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * VolumeId **required** [String](#string)

### AttachVpnGatewayRequest
* AttachVpnGatewayRequest `object`: Contains the parameters for AttachVpnGateway.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

### AttachVpnGatewayResult
* AttachVpnGatewayResult `object`: Contains the output of AttachVpnGateway.
  * VpcAttachment [VpcAttachment](#vpcattachment)

### AttachmentStatus
* AttachmentStatus `string` (values: attaching, attached, detaching, detached)

### AttributeBooleanValue
* AttributeBooleanValue `object`: Describes a value for a resource attribute that is a Boolean value.
  * Value [Boolean](#boolean)

### AttributeValue
* AttributeValue `object`: Describes a value for a resource attribute that is a String.
  * Value [String](#string)

### AuthorizeSecurityGroupEgressRequest
* AuthorizeSecurityGroupEgressRequest `object`: Contains the parameters for AuthorizeSecurityGroupEgress.
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId **required** [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

### AuthorizeSecurityGroupIngressRequest
* AuthorizeSecurityGroupIngressRequest `object`: Contains the parameters for AuthorizeSecurityGroupIngress.
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

### AutoPlacement
* AutoPlacement `string` (values: on, off)

### AvailabilityZone
* AvailabilityZone `object`: Describes an Availability Zone.
  * Messages [AvailabilityZoneMessageList](#availabilityzonemessagelist)
  * RegionName [String](#string)
  * State [AvailabilityZoneState](#availabilityzonestate)
  * ZoneName [String](#string)

### AvailabilityZoneList
* AvailabilityZoneList `array`
  * items [AvailabilityZone](#availabilityzone)

### AvailabilityZoneMessage
* AvailabilityZoneMessage `object`: Describes a message about an Availability Zone.
  * Message [String](#string)

### AvailabilityZoneMessageList
* AvailabilityZoneMessageList `array`
  * items [AvailabilityZoneMessage](#availabilityzonemessage)

### AvailabilityZoneState
* AvailabilityZoneState `string` (values: available, information, impaired, unavailable)

### AvailableCapacity
* AvailableCapacity `object`: The capacity information for instances launched onto the Dedicated Host.
  * AvailableInstanceCapacity [AvailableInstanceCapacityList](#availableinstancecapacitylist)
  * AvailableVCpus [Integer](#integer)

### AvailableInstanceCapacityList
* AvailableInstanceCapacityList `array`
  * items [InstanceCapacity](#instancecapacity)

### BatchState
* BatchState `string` (values: submitted, active, cancelled, failed, cancelled_running, cancelled_terminating, modifying)

### BillingProductList
* BillingProductList `array`
  * items [String](#string)

### Blob
* Blob `string`

### BlobAttributeValue
* BlobAttributeValue `object`
  * Value [Blob](#blob)

### BlockDeviceMapping
* BlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName [String](#string)
  * Ebs [EbsBlockDevice](#ebsblockdevice)
  * NoDevice [String](#string)
  * VirtualName [String](#string)

### BlockDeviceMappingList
* BlockDeviceMappingList `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### BlockDeviceMappingRequestList
* BlockDeviceMappingRequestList `array`
  * items [BlockDeviceMapping](#blockdevicemapping)

### Boolean
* Boolean `boolean`

### BundleIdStringList
* BundleIdStringList `array`
  * items [String](#string)

### BundleInstanceRequest
* BundleInstanceRequest `object`: Contains the parameters for BundleInstance.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * Storage **required** [Storage](#storage)

### BundleInstanceResult
* BundleInstanceResult `object`: Contains the output of BundleInstance.
  * BundleTask [BundleTask](#bundletask)

### BundleTask
* BundleTask `object`: Describes a bundle task.
  * BundleId [String](#string)
  * BundleTaskError [BundleTaskError](#bundletaskerror)
  * InstanceId [String](#string)
  * Progress [String](#string)
  * StartTime [DateTime](#datetime)
  * State [BundleTaskState](#bundletaskstate)
  * Storage [Storage](#storage)
  * UpdateTime [DateTime](#datetime)

### BundleTaskError
* BundleTaskError `object`: Describes an error for <a>BundleInstance</a>.
  * Code [String](#string)
  * Message [String](#string)

### BundleTaskList
* BundleTaskList `array`
  * items [BundleTask](#bundletask)

### BundleTaskState
* BundleTaskState `string` (values: pending, waiting-for-shutdown, bundling, storing, cancelling, complete, failed)

### CancelBatchErrorCode
* CancelBatchErrorCode `string` (values: fleetRequestIdDoesNotExist, fleetRequestIdMalformed, fleetRequestNotInCancellableState, unexpectedError)

### CancelBundleTaskRequest
* CancelBundleTaskRequest `object`: Contains the parameters for CancelBundleTask.
  * BundleId **required** [String](#string)
  * DryRun [Boolean](#boolean)

### CancelBundleTaskResult
* CancelBundleTaskResult `object`: Contains the output of CancelBundleTask.
  * BundleTask [BundleTask](#bundletask)

### CancelConversionRequest
* CancelConversionRequest `object`: Contains the parameters for CancelConversionTask.
  * ConversionTaskId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * ReasonMessage [String](#string)

### CancelExportTaskRequest
* CancelExportTaskRequest `object`: Contains the parameters for CancelExportTask.
  * ExportTaskId **required** [String](#string)

### CancelImportTaskRequest
* CancelImportTaskRequest `object`: Contains the parameters for CancelImportTask.
  * CancelReason [String](#string)
  * DryRun [Boolean](#boolean)
  * ImportTaskId [String](#string)

### CancelImportTaskResult
* CancelImportTaskResult `object`: Contains the output for CancelImportTask.
  * ImportTaskId [String](#string)
  * PreviousState [String](#string)
  * State [String](#string)

### CancelReservedInstancesListingRequest
* CancelReservedInstancesListingRequest `object`: Contains the parameters for CancelReservedInstancesListing.
  * ReservedInstancesListingId **required** [String](#string)

### CancelReservedInstancesListingResult
* CancelReservedInstancesListingResult `object`: Contains the output of CancelReservedInstancesListing.
  * ReservedInstancesListings [ReservedInstancesListingList](#reservedinstanceslistinglist)

### CancelSpotFleetRequestsError
* CancelSpotFleetRequestsError `object`: Describes a Spot fleet error.
  * Code **required** [CancelBatchErrorCode](#cancelbatcherrorcode)
  * Message **required** [String](#string)

### CancelSpotFleetRequestsErrorItem
* CancelSpotFleetRequestsErrorItem `object`: Describes a Spot fleet request that was not successfully canceled.
  * Error **required** [CancelSpotFleetRequestsError](#cancelspotfleetrequestserror)
  * SpotFleetRequestId **required** [String](#string)

### CancelSpotFleetRequestsErrorSet
* CancelSpotFleetRequestsErrorSet `array`
  * items [CancelSpotFleetRequestsErrorItem](#cancelspotfleetrequestserroritem)

### CancelSpotFleetRequestsRequest
* CancelSpotFleetRequestsRequest `object`: Contains the parameters for CancelSpotFleetRequests.
  * DryRun [Boolean](#boolean)
  * SpotFleetRequestIds **required** [ValueStringList](#valuestringlist)
  * TerminateInstances **required** [Boolean](#boolean)

### CancelSpotFleetRequestsResponse
* CancelSpotFleetRequestsResponse `object`: Contains the output of CancelSpotFleetRequests.
  * SuccessfulFleetRequests [CancelSpotFleetRequestsSuccessSet](#cancelspotfleetrequestssuccessset)
  * UnsuccessfulFleetRequests [CancelSpotFleetRequestsErrorSet](#cancelspotfleetrequestserrorset)

### CancelSpotFleetRequestsSuccessItem
* CancelSpotFleetRequestsSuccessItem `object`: Describes a Spot fleet request that was successfully canceled.
  * CurrentSpotFleetRequestState **required** [BatchState](#batchstate)
  * PreviousSpotFleetRequestState **required** [BatchState](#batchstate)
  * SpotFleetRequestId **required** [String](#string)

### CancelSpotFleetRequestsSuccessSet
* CancelSpotFleetRequestsSuccessSet `array`
  * items [CancelSpotFleetRequestsSuccessItem](#cancelspotfleetrequestssuccessitem)

### CancelSpotInstanceRequestState
* CancelSpotInstanceRequestState `string` (values: active, open, closed, cancelled, completed)

### CancelSpotInstanceRequestsRequest
* CancelSpotInstanceRequestsRequest `object`: Contains the parameters for CancelSpotInstanceRequests.
  * DryRun [Boolean](#boolean)
  * SpotInstanceRequestIds **required** [SpotInstanceRequestIdList](#spotinstancerequestidlist)

### CancelSpotInstanceRequestsResult
* CancelSpotInstanceRequestsResult `object`: Contains the output of CancelSpotInstanceRequests.
  * CancelledSpotInstanceRequests [CancelledSpotInstanceRequestList](#cancelledspotinstancerequestlist)

### CancelledSpotInstanceRequest
* CancelledSpotInstanceRequest `object`: Describes a request to cancel a Spot instance.
  * SpotInstanceRequestId [String](#string)
  * State [CancelSpotInstanceRequestState](#cancelspotinstancerequeststate)

### CancelledSpotInstanceRequestList
* CancelledSpotInstanceRequestList `array`
  * items [CancelledSpotInstanceRequest](#cancelledspotinstancerequest)

### CidrBlock
* CidrBlock `object`: Describes an IPv4 CIDR block.
  * CidrBlock [String](#string)

### CidrBlockSet
* CidrBlockSet `array`
  * items [CidrBlock](#cidrblock)

### ClassicLinkDnsSupport
* ClassicLinkDnsSupport `object`: Describes the ClassicLink DNS support status of a VPC.
  * ClassicLinkDnsSupported [Boolean](#boolean)
  * VpcId [String](#string)

### ClassicLinkDnsSupportList
* ClassicLinkDnsSupportList `array`
  * items [ClassicLinkDnsSupport](#classiclinkdnssupport)

### ClassicLinkInstance
* ClassicLinkInstance `object`: Describes a linked EC2-Classic instance.
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * InstanceId [String](#string)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### ClassicLinkInstanceList
* ClassicLinkInstanceList `array`
  * items [ClassicLinkInstance](#classiclinkinstance)

### ClientData
* ClientData `object`: Describes the client-specific data.
  * Comment [String](#string)
  * UploadEnd [DateTime](#datetime)
  * UploadSize [Double](#double)
  * UploadStart [DateTime](#datetime)

### ConfirmProductInstanceRequest
* ConfirmProductInstanceRequest `object`: Contains the parameters for ConfirmProductInstance.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * ProductCode **required** [String](#string)

### ConfirmProductInstanceResult
* ConfirmProductInstanceResult `object`: Contains the output of ConfirmProductInstance.
  * OwnerId [String](#string)
  * Return [Boolean](#boolean)

### ContainerFormat
* ContainerFormat `string` (values: ova)

### ConversionIdStringList
* ConversionIdStringList `array`
  * items [String](#string)

### ConversionTask
* ConversionTask `object`: Describes a conversion task.
  * ConversionTaskId **required** [String](#string)
  * ExpirationTime [String](#string)
  * ImportInstance [ImportInstanceTaskDetails](#importinstancetaskdetails)
  * ImportVolume [ImportVolumeTaskDetails](#importvolumetaskdetails)
  * State **required** [ConversionTaskState](#conversiontaskstate)
  * StatusMessage [String](#string)
  * Tags [TagList](#taglist)

### ConversionTaskState
* ConversionTaskState `string` (values: active, cancelling, cancelled, completed)

### CopyFpgaImageRequest
* CopyFpgaImageRequest `object`
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Name [String](#string)
  * SourceFpgaImageId **required** [String](#string)
  * SourceRegion **required** [String](#string)

### CopyFpgaImageResult
* CopyFpgaImageResult `object`
  * FpgaImageId [String](#string)

### CopyImageRequest
* CopyImageRequest `object`: Contains the parameters for CopyImage.
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * Name **required** [String](#string)
  * SourceImageId **required** [String](#string)
  * SourceRegion **required** [String](#string)

### CopyImageResult
* CopyImageResult `object`: Contains the output of CopyImage.
  * ImageId [String](#string)

### CopySnapshotRequest
* CopySnapshotRequest `object`: Contains the parameters for CopySnapshot.
  * Description [String](#string)
  * DestinationRegion [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * PresignedUrl [String](#string)
  * SourceRegion **required** [String](#string)
  * SourceSnapshotId **required** [String](#string)

### CopySnapshotResult
* CopySnapshotResult `object`: Contains the output of CopySnapshot.
  * SnapshotId [String](#string)

### CreateCustomerGatewayRequest
* CreateCustomerGatewayRequest `object`: Contains the parameters for CreateCustomerGateway.
  * BgpAsn **required** [Integer](#integer)
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)
  * Type **required** [GatewayType](#gatewaytype)

### CreateCustomerGatewayResult
* CreateCustomerGatewayResult `object`: Contains the output of CreateCustomerGateway.
  * CustomerGateway [CustomerGateway](#customergateway)

### CreateDefaultVpcRequest
* CreateDefaultVpcRequest `object`: Contains the parameters for CreateDefaultVpc.
  * DryRun [Boolean](#boolean)

### CreateDefaultVpcResult
* CreateDefaultVpcResult `object`: Contains the output of CreateDefaultVpc.
  * Vpc [Vpc](#vpc)

### CreateDhcpOptionsRequest
* CreateDhcpOptionsRequest `object`: Contains the parameters for CreateDhcpOptions.
  * DhcpConfigurations **required** [NewDhcpConfigurationList](#newdhcpconfigurationlist)
  * DryRun [Boolean](#boolean)

### CreateDhcpOptionsResult
* CreateDhcpOptionsResult `object`: Contains the output of CreateDhcpOptions.
  * DhcpOptions [DhcpOptions](#dhcpoptions)

### CreateEgressOnlyInternetGatewayRequest
* CreateEgressOnlyInternetGatewayRequest `object`
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### CreateEgressOnlyInternetGatewayResult
* CreateEgressOnlyInternetGatewayResult `object`
  * ClientToken [String](#string)
  * EgressOnlyInternetGateway [EgressOnlyInternetGateway](#egressonlyinternetgateway)

### CreateFlowLogsRequest
* CreateFlowLogsRequest `object`: Contains the parameters for CreateFlowLogs.
  * ClientToken [String](#string)
  * DeliverLogsPermissionArn **required** [String](#string)
  * LogGroupName **required** [String](#string)
  * ResourceIds **required** [ValueStringList](#valuestringlist)
  * ResourceType **required** [FlowLogsResourceType](#flowlogsresourcetype)
  * TrafficType **required** [TrafficType](#traffictype)

### CreateFlowLogsResult
* CreateFlowLogsResult `object`: Contains the output of CreateFlowLogs.
  * ClientToken [String](#string)
  * FlowLogIds [ValueStringList](#valuestringlist)
  * Unsuccessful [UnsuccessfulItemSet](#unsuccessfulitemset)

### CreateFpgaImageRequest
* CreateFpgaImageRequest `object`
  * ClientToken [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * InputStorageLocation **required** [StorageLocation](#storagelocation)
  * LogsStorageLocation [StorageLocation](#storagelocation)
  * Name [String](#string)

### CreateFpgaImageResult
* CreateFpgaImageResult `object`
  * FpgaImageGlobalId [String](#string)
  * FpgaImageId [String](#string)

### CreateImageRequest
* CreateImageRequest `object`: Contains the parameters for CreateImage.
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * Name **required** [String](#string)
  * NoReboot [Boolean](#boolean)

### CreateImageResult
* CreateImageResult `object`: Contains the output of CreateImage.
  * ImageId [String](#string)

### CreateInstanceExportTaskRequest
* CreateInstanceExportTaskRequest `object`: Contains the parameters for CreateInstanceExportTask.
  * Description [String](#string)
  * ExportToS3Task [ExportToS3TaskSpecification](#exporttos3taskspecification)
  * InstanceId **required** [String](#string)
  * TargetEnvironment [ExportEnvironment](#exportenvironment)

### CreateInstanceExportTaskResult
* CreateInstanceExportTaskResult `object`: Contains the output for CreateInstanceExportTask.
  * ExportTask [ExportTask](#exporttask)

### CreateInternetGatewayRequest
* CreateInternetGatewayRequest `object`: Contains the parameters for CreateInternetGateway.
  * DryRun [Boolean](#boolean)

### CreateInternetGatewayResult
* CreateInternetGatewayResult `object`: Contains the output of CreateInternetGateway.
  * InternetGateway [InternetGateway](#internetgateway)

### CreateKeyPairRequest
* CreateKeyPairRequest `object`: Contains the parameters for CreateKeyPair.
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)

### CreateNatGatewayRequest
* CreateNatGatewayRequest `object`: Contains the parameters for CreateNatGateway.
  * AllocationId **required** [String](#string)
  * ClientToken [String](#string)
  * SubnetId **required** [String](#string)

### CreateNatGatewayResult
* CreateNatGatewayResult `object`: Contains the output of CreateNatGateway.
  * ClientToken [String](#string)
  * NatGateway [NatGateway](#natgateway)

### CreateNetworkAclEntryRequest
* CreateNetworkAclEntryRequest `object`: Contains the parameters for CreateNetworkAclEntry.
  * CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * IcmpTypeCode [IcmpTypeCode](#icmptypecode)
  * Ipv6CidrBlock [String](#string)
  * NetworkAclId **required** [String](#string)
  * PortRange [PortRange](#portrange)
  * Protocol **required** [String](#string)
  * RuleAction **required** [RuleAction](#ruleaction)
  * RuleNumber **required** [Integer](#integer)

### CreateNetworkAclRequest
* CreateNetworkAclRequest `object`: Contains the parameters for CreateNetworkAcl.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### CreateNetworkAclResult
* CreateNetworkAclResult `object`: Contains the output of CreateNetworkAcl.
  * NetworkAcl [NetworkAcl](#networkacl)

### CreateNetworkInterfacePermissionRequest
* CreateNetworkInterfacePermissionRequest `object`: Contains the parameters for CreateNetworkInterfacePermission.
  * AwsAccountId [String](#string)
  * AwsService [String](#string)
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * Permission **required** [InterfacePermissionType](#interfacepermissiontype)

### CreateNetworkInterfacePermissionResult
* CreateNetworkInterfacePermissionResult `object`: Contains the output of CreateNetworkInterfacePermission.
  * InterfacePermission [NetworkInterfacePermission](#networkinterfacepermission)

### CreateNetworkInterfaceRequest
* CreateNetworkInterfaceRequest `object`: Contains the parameters for CreateNetworkInterface.
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Groups [SecurityGroupIdStringList](#securitygroupidstringlist)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddresses [PrivateIpAddressSpecificationList](#privateipaddressspecificationlist)
  * SecondaryPrivateIpAddressCount [Integer](#integer)
  * SubnetId **required** [String](#string)

### CreateNetworkInterfaceResult
* CreateNetworkInterfaceResult `object`: Contains the output of CreateNetworkInterface.
  * NetworkInterface [NetworkInterface](#networkinterface)

### CreatePlacementGroupRequest
* CreatePlacementGroupRequest `object`: Contains the parameters for CreatePlacementGroup.
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)
  * Strategy **required** [PlacementStrategy](#placementstrategy)

### CreateReservedInstancesListingRequest
* CreateReservedInstancesListingRequest `object`: Contains the parameters for CreateReservedInstancesListing.
  * ClientToken **required** [String](#string)
  * InstanceCount **required** [Integer](#integer)
  * PriceSchedules **required** [PriceScheduleSpecificationList](#priceschedulespecificationlist)
  * ReservedInstancesId **required** [String](#string)

### CreateReservedInstancesListingResult
* CreateReservedInstancesListingResult `object`: Contains the output of CreateReservedInstancesListing.
  * ReservedInstancesListings [ReservedInstancesListingList](#reservedinstanceslistinglist)

### CreateRouteRequest
* CreateRouteRequest `object`: Contains the parameters for CreateRoute.
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId [String](#string)
  * GatewayId [String](#string)
  * InstanceId [String](#string)
  * NatGatewayId [String](#string)
  * NetworkInterfaceId [String](#string)
  * RouteTableId **required** [String](#string)
  * VpcPeeringConnectionId [String](#string)

### CreateRouteResult
* CreateRouteResult `object`: Contains the output of CreateRoute.
  * Return [Boolean](#boolean)

### CreateRouteTableRequest
* CreateRouteTableRequest `object`: Contains the parameters for CreateRouteTable.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### CreateRouteTableResult
* CreateRouteTableResult `object`: Contains the output of CreateRouteTable.
  * RouteTable [RouteTable](#routetable)

### CreateSecurityGroupRequest
* CreateSecurityGroupRequest `object`: Contains the parameters for CreateSecurityGroup.
  * Description **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)
  * VpcId [String](#string)

### CreateSecurityGroupResult
* CreateSecurityGroupResult `object`: Contains the output of CreateSecurityGroup.
  * GroupId [String](#string)

### CreateSnapshotRequest
* CreateSnapshotRequest `object`: Contains the parameters for CreateSnapshot.
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

### CreateSpotDatafeedSubscriptionRequest
* CreateSpotDatafeedSubscriptionRequest `object`: Contains the parameters for CreateSpotDatafeedSubscription.
  * Bucket **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Prefix [String](#string)

### CreateSpotDatafeedSubscriptionResult
* CreateSpotDatafeedSubscriptionResult `object`: Contains the output of CreateSpotDatafeedSubscription.
  * SpotDatafeedSubscription [SpotDatafeedSubscription](#spotdatafeedsubscription)

### CreateSubnetRequest
* CreateSubnetRequest `object`: Contains the parameters for CreateSubnet.
  * AvailabilityZone [String](#string)
  * CidrBlock **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Ipv6CidrBlock [String](#string)
  * VpcId **required** [String](#string)

### CreateSubnetResult
* CreateSubnetResult `object`: Contains the output of CreateSubnet.
  * Subnet [Subnet](#subnet)

### CreateTagsRequest
* CreateTagsRequest `object`: Contains the parameters for CreateTags.
  * DryRun [Boolean](#boolean)
  * Resources **required** [ResourceIdList](#resourceidlist)
  * Tags **required** [TagList](#taglist)

### CreateVolumePermission
* CreateVolumePermission `object`: Describes the user or group to be added or removed from the permissions for a volume.
  * Group [PermissionGroup](#permissiongroup)
  * UserId [String](#string)

### CreateVolumePermissionList
* CreateVolumePermissionList `array`
  * items [CreateVolumePermission](#createvolumepermission)

### CreateVolumePermissionModifications
* CreateVolumePermissionModifications `object`: Describes modifications to the permissions for a volume.
  * Add [CreateVolumePermissionList](#createvolumepermissionlist)
  * Remove [CreateVolumePermissionList](#createvolumepermissionlist)

### CreateVolumeRequest
* CreateVolumeRequest `object`: Contains the parameters for CreateVolume.
  * AvailabilityZone **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * KmsKeyId [String](#string)
  * Size [Integer](#integer)
  * SnapshotId [String](#string)
  * TagSpecifications [TagSpecificationList](#tagspecificationlist)
  * VolumeType [VolumeType](#volumetype)

### CreateVpcEndpointRequest
* CreateVpcEndpointRequest `object`: Contains the parameters for CreateVpcEndpoint.
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * PolicyDocument [String](#string)
  * PrivateDnsEnabled [Boolean](#boolean)
  * RouteTableIds [ValueStringList](#valuestringlist)
  * SecurityGroupIds [ValueStringList](#valuestringlist)
  * ServiceName **required** [String](#string)
  * SubnetIds [ValueStringList](#valuestringlist)
  * VpcEndpointType [VpcEndpointType](#vpcendpointtype)
  * VpcId **required** [String](#string)

### CreateVpcEndpointResult
* CreateVpcEndpointResult `object`: Contains the output of CreateVpcEndpoint.
  * ClientToken [String](#string)
  * VpcEndpoint [VpcEndpoint](#vpcendpoint)

### CreateVpcPeeringConnectionRequest
* CreateVpcPeeringConnectionRequest `object`: Contains the parameters for CreateVpcPeeringConnection.
  * DryRun [Boolean](#boolean)
  * PeerOwnerId [String](#string)
  * PeerVpcId [String](#string)
  * VpcId [String](#string)

### CreateVpcPeeringConnectionResult
* CreateVpcPeeringConnectionResult `object`: Contains the output of CreateVpcPeeringConnection.
  * VpcPeeringConnection [VpcPeeringConnection](#vpcpeeringconnection)

### CreateVpcRequest
* CreateVpcRequest `object`: Contains the parameters for CreateVpc.
  * AmazonProvidedIpv6CidrBlock [Boolean](#boolean)
  * CidrBlock **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceTenancy [Tenancy](#tenancy)

### CreateVpcResult
* CreateVpcResult `object`: Contains the output of CreateVpc.
  * Vpc [Vpc](#vpc)

### CreateVpnConnectionRequest
* CreateVpnConnectionRequest `object`: Contains the parameters for CreateVpnConnection.
  * CustomerGatewayId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Options [VpnConnectionOptionsSpecification](#vpnconnectionoptionsspecification)
  * Type **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

### CreateVpnConnectionResult
* CreateVpnConnectionResult `object`: Contains the output of CreateVpnConnection.
  * VpnConnection [VpnConnection](#vpnconnection)

### CreateVpnConnectionRouteRequest
* CreateVpnConnectionRouteRequest `object`: Contains the parameters for CreateVpnConnectionRoute.
  * DestinationCidrBlock **required** [String](#string)
  * VpnConnectionId **required** [String](#string)

### CreateVpnGatewayRequest
* CreateVpnGatewayRequest `object`: Contains the parameters for CreateVpnGateway.
  * AmazonSideAsn [Long](#long)
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * Type **required** [GatewayType](#gatewaytype)

### CreateVpnGatewayResult
* CreateVpnGatewayResult `object`: Contains the output of CreateVpnGateway.
  * VpnGateway [VpnGateway](#vpngateway)

### CurrencyCodeValues
* CurrencyCodeValues `string` (values: USD)

### CustomerGateway
* CustomerGateway `object`: Describes a customer gateway.
  * BgpAsn [String](#string)
  * CustomerGatewayId [String](#string)
  * IpAddress [String](#string)
  * State [String](#string)
  * Tags [TagList](#taglist)
  * Type [String](#string)

### CustomerGatewayIdStringList
* CustomerGatewayIdStringList `array`
  * items [String](#string)

### CustomerGatewayList
* CustomerGatewayList `array`
  * items [CustomerGateway](#customergateway)

### DatafeedSubscriptionState
* DatafeedSubscriptionState `string` (values: Active, Inactive)

### DateTime
* DateTime `string`

### DeleteCustomerGatewayRequest
* DeleteCustomerGatewayRequest `object`: Contains the parameters for DeleteCustomerGateway.
  * CustomerGatewayId **required** [String](#string)
  * DryRun [Boolean](#boolean)

### DeleteDhcpOptionsRequest
* DeleteDhcpOptionsRequest `object`: Contains the parameters for DeleteDhcpOptions.
  * DhcpOptionsId **required** [String](#string)
  * DryRun [Boolean](#boolean)

### DeleteEgressOnlyInternetGatewayRequest
* DeleteEgressOnlyInternetGatewayRequest `object`
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId **required** [EgressOnlyInternetGatewayId](#egressonlyinternetgatewayid)

### DeleteEgressOnlyInternetGatewayResult
* DeleteEgressOnlyInternetGatewayResult `object`
  * ReturnCode [Boolean](#boolean)

### DeleteFlowLogsRequest
* DeleteFlowLogsRequest `object`: Contains the parameters for DeleteFlowLogs.
  * FlowLogIds **required** [ValueStringList](#valuestringlist)

### DeleteFlowLogsResult
* DeleteFlowLogsResult `object`: Contains the output of DeleteFlowLogs.
  * Unsuccessful [UnsuccessfulItemSet](#unsuccessfulitemset)

### DeleteFpgaImageRequest
* DeleteFpgaImageRequest `object`
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

### DeleteFpgaImageResult
* DeleteFpgaImageResult `object`
  * Return [Boolean](#boolean)

### DeleteInternetGatewayRequest
* DeleteInternetGatewayRequest `object`: Contains the parameters for DeleteInternetGateway.
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)

### DeleteKeyPairRequest
* DeleteKeyPairRequest `object`: Contains the parameters for DeleteKeyPair.
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)

### DeleteNatGatewayRequest
* DeleteNatGatewayRequest `object`: Contains the parameters for DeleteNatGateway.
  * NatGatewayId **required** [String](#string)

### DeleteNatGatewayResult
* DeleteNatGatewayResult `object`: Contains the output of DeleteNatGateway.
  * NatGatewayId [String](#string)

### DeleteNetworkAclEntryRequest
* DeleteNetworkAclEntryRequest `object`: Contains the parameters for DeleteNetworkAclEntry.
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)
  * RuleNumber **required** [Integer](#integer)

### DeleteNetworkAclRequest
* DeleteNetworkAclRequest `object`: Contains the parameters for DeleteNetworkAcl.
  * DryRun [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)

### DeleteNetworkInterfacePermissionRequest
* DeleteNetworkInterfacePermissionRequest `object`: Contains the parameters for DeleteNetworkInterfacePermission.
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * NetworkInterfacePermissionId **required** [String](#string)

### DeleteNetworkInterfacePermissionResult
* DeleteNetworkInterfacePermissionResult `object`: Contains the output for DeleteNetworkInterfacePermission.
  * Return [Boolean](#boolean)

### DeleteNetworkInterfaceRequest
* DeleteNetworkInterfaceRequest `object`: Contains the parameters for DeleteNetworkInterface.
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)

### DeletePlacementGroupRequest
* DeletePlacementGroupRequest `object`: Contains the parameters for DeletePlacementGroup.
  * DryRun [Boolean](#boolean)
  * GroupName **required** [String](#string)

### DeleteRouteRequest
* DeleteRouteRequest `object`: Contains the parameters for DeleteRoute.
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

### DeleteRouteTableRequest
* DeleteRouteTableRequest `object`: Contains the parameters for DeleteRouteTable.
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

### DeleteSecurityGroupRequest
* DeleteSecurityGroupRequest `object`: Contains the parameters for DeleteSecurityGroup.
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)

### DeleteSnapshotRequest
* DeleteSnapshotRequest `object`: Contains the parameters for DeleteSnapshot.
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

### DeleteSpotDatafeedSubscriptionRequest
* DeleteSpotDatafeedSubscriptionRequest `object`: Contains the parameters for DeleteSpotDatafeedSubscription.
  * DryRun [Boolean](#boolean)

### DeleteSubnetRequest
* DeleteSubnetRequest `object`: Contains the parameters for DeleteSubnet.
  * DryRun [Boolean](#boolean)
  * SubnetId **required** [String](#string)

### DeleteTagsRequest
* DeleteTagsRequest `object`: Contains the parameters for DeleteTags.
  * DryRun [Boolean](#boolean)
  * Resources **required** [ResourceIdList](#resourceidlist)
  * Tags [TagList](#taglist)

### DeleteVolumeRequest
* DeleteVolumeRequest `object`: Contains the parameters for DeleteVolume.
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

### DeleteVpcEndpointsRequest
* DeleteVpcEndpointsRequest `object`: Contains the parameters for DeleteVpcEndpoints.
  * DryRun [Boolean](#boolean)
  * VpcEndpointIds **required** [ValueStringList](#valuestringlist)

### DeleteVpcEndpointsResult
* DeleteVpcEndpointsResult `object`: Contains the output of DeleteVpcEndpoints.
  * Unsuccessful [UnsuccessfulItemSet](#unsuccessfulitemset)

### DeleteVpcPeeringConnectionRequest
* DeleteVpcPeeringConnectionRequest `object`: Contains the parameters for DeleteVpcPeeringConnection.
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId **required** [String](#string)

### DeleteVpcPeeringConnectionResult
* DeleteVpcPeeringConnectionResult `object`: Contains the output of DeleteVpcPeeringConnection.
  * Return [Boolean](#boolean)

### DeleteVpcRequest
* DeleteVpcRequest `object`: Contains the parameters for DeleteVpc.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### DeleteVpnConnectionRequest
* DeleteVpnConnectionRequest `object`: Contains the parameters for DeleteVpnConnection.
  * DryRun [Boolean](#boolean)
  * VpnConnectionId **required** [String](#string)

### DeleteVpnConnectionRouteRequest
* DeleteVpnConnectionRouteRequest `object`: Contains the parameters for DeleteVpnConnectionRoute.
  * DestinationCidrBlock **required** [String](#string)
  * VpnConnectionId **required** [String](#string)

### DeleteVpnGatewayRequest
* DeleteVpnGatewayRequest `object`: Contains the parameters for DeleteVpnGateway.
  * DryRun [Boolean](#boolean)
  * VpnGatewayId **required** [String](#string)

### DeregisterImageRequest
* DeregisterImageRequest `object`: Contains the parameters for DeregisterImage.
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

### DescribeAccountAttributesRequest
* DescribeAccountAttributesRequest `object`: Contains the parameters for DescribeAccountAttributes.
  * AttributeNames [AccountAttributeNameStringList](#accountattributenamestringlist)
  * DryRun [Boolean](#boolean)

### DescribeAccountAttributesResult
* DescribeAccountAttributesResult `object`: Contains the output of DescribeAccountAttributes.
  * AccountAttributes [AccountAttributeList](#accountattributelist)

### DescribeAddressesRequest
* DescribeAddressesRequest `object`: Contains the parameters for DescribeAddresses.
  * AllocationIds [AllocationIdList](#allocationidlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * PublicIps [PublicIpStringList](#publicipstringlist)

### DescribeAddressesResult
* DescribeAddressesResult `object`: Contains the output of DescribeAddresses.
  * Addresses [AddressList](#addresslist)

### DescribeAvailabilityZonesRequest
* DescribeAvailabilityZonesRequest `object`: Contains the parameters for DescribeAvailabilityZones.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ZoneNames [ZoneNameStringList](#zonenamestringlist)

### DescribeAvailabilityZonesResult
* DescribeAvailabilityZonesResult `object`: Contains the output of DescribeAvailabiltyZones.
  * AvailabilityZones [AvailabilityZoneList](#availabilityzonelist)

### DescribeBundleTasksRequest
* DescribeBundleTasksRequest `object`: Contains the parameters for DescribeBundleTasks.
  * BundleIds [BundleIdStringList](#bundleidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

### DescribeBundleTasksResult
* DescribeBundleTasksResult `object`: Contains the output of DescribeBundleTasks.
  * BundleTasks [BundleTaskList](#bundletasklist)

### DescribeClassicLinkInstancesRequest
* DescribeClassicLinkInstancesRequest `object`: Contains the parameters for DescribeClassicLinkInstances.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeClassicLinkInstancesResult
* DescribeClassicLinkInstancesResult `object`: Contains the output of DescribeClassicLinkInstances.
  * Instances [ClassicLinkInstanceList](#classiclinkinstancelist)
  * NextToken [String](#string)

### DescribeConversionTaskList
* DescribeConversionTaskList `array`
  * items [ConversionTask](#conversiontask)

### DescribeConversionTasksRequest
* DescribeConversionTasksRequest `object`: Contains the parameters for DescribeConversionTasks.
  * ConversionTaskIds [ConversionIdStringList](#conversionidstringlist)
  * DryRun [Boolean](#boolean)

### DescribeConversionTasksResult
* DescribeConversionTasksResult `object`: Contains the output for DescribeConversionTasks.
  * ConversionTasks [DescribeConversionTaskList](#describeconversiontasklist)

### DescribeCustomerGatewaysRequest
* DescribeCustomerGatewaysRequest `object`: Contains the parameters for DescribeCustomerGateways.
  * CustomerGatewayIds [CustomerGatewayIdStringList](#customergatewayidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

### DescribeCustomerGatewaysResult
* DescribeCustomerGatewaysResult `object`: Contains the output of DescribeCustomerGateways.
  * CustomerGateways [CustomerGatewayList](#customergatewaylist)

### DescribeDhcpOptionsRequest
* DescribeDhcpOptionsRequest `object`: Contains the parameters for DescribeDhcpOptions.
  * DhcpOptionsIds [DhcpOptionsIdStringList](#dhcpoptionsidstringlist)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)

### DescribeDhcpOptionsResult
* DescribeDhcpOptionsResult `object`: Contains the output of DescribeDhcpOptions.
  * DhcpOptions [DhcpOptionsList](#dhcpoptionslist)

### DescribeEgressOnlyInternetGatewaysRequest
* DescribeEgressOnlyInternetGatewaysRequest `object`
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayIds [EgressOnlyInternetGatewayIdList](#egressonlyinternetgatewayidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeEgressOnlyInternetGatewaysResult
* DescribeEgressOnlyInternetGatewaysResult `object`
  * EgressOnlyInternetGateways [EgressOnlyInternetGatewayList](#egressonlyinternetgatewaylist)
  * NextToken [String](#string)

### DescribeElasticGpusRequest
* DescribeElasticGpusRequest `object`
  * DryRun [Boolean](#boolean)
  * ElasticGpuIds [ElasticGpuIdSet](#elasticgpuidset)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeElasticGpusResult
* DescribeElasticGpusResult `object`
  * ElasticGpuSet [ElasticGpuSet](#elasticgpuset)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeExportTasksRequest
* DescribeExportTasksRequest `object`: Contains the parameters for DescribeExportTasks.
  * ExportTaskIds [ExportTaskIdStringList](#exporttaskidstringlist)

### DescribeExportTasksResult
* DescribeExportTasksResult `object`: Contains the output for DescribeExportTasks.
  * ExportTasks [ExportTaskList](#exporttasklist)

### DescribeFlowLogsRequest
* DescribeFlowLogsRequest `object`: Contains the parameters for DescribeFlowLogs.
  * Filter [FilterList](#filterlist)
  * FlowLogIds [ValueStringList](#valuestringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeFlowLogsResult
* DescribeFlowLogsResult `object`: Contains the output of DescribeFlowLogs.
  * FlowLogs [FlowLogSet](#flowlogset)
  * NextToken [String](#string)

### DescribeFpgaImageAttributeRequest
* DescribeFpgaImageAttributeRequest `object`
  * Attribute **required** [FpgaImageAttributeName](#fpgaimageattributename)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

### DescribeFpgaImageAttributeResult
* DescribeFpgaImageAttributeResult `object`
  * FpgaImageAttribute [FpgaImageAttribute](#fpgaimageattribute)

### DescribeFpgaImagesRequest
* DescribeFpgaImagesRequest `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * FpgaImageIds [FpgaImageIdList](#fpgaimageidlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * Owners [OwnerStringList](#ownerstringlist)

### DescribeFpgaImagesResult
* DescribeFpgaImagesResult `object`
  * FpgaImages [FpgaImageList](#fpgaimagelist)
  * NextToken [NextToken](#nexttoken)

### DescribeHostReservationOfferingsRequest
* DescribeHostReservationOfferingsRequest `object`
  * Filter [FilterList](#filterlist)
  * MaxDuration [Integer](#integer)
  * MaxResults [Integer](#integer)
  * MinDuration [Integer](#integer)
  * NextToken [String](#string)
  * OfferingId [String](#string)

### DescribeHostReservationOfferingsResult
* DescribeHostReservationOfferingsResult `object`
  * NextToken [String](#string)
  * OfferingSet [HostOfferingSet](#hostofferingset)

### DescribeHostReservationsRequest
* DescribeHostReservationsRequest `object`
  * Filter [FilterList](#filterlist)
  * HostReservationIdSet [HostReservationIdSet](#hostreservationidset)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeHostReservationsResult
* DescribeHostReservationsResult `object`
  * HostReservationSet [HostReservationSet](#hostreservationset)
  * NextToken [String](#string)

### DescribeHostsRequest
* DescribeHostsRequest `object`: Contains the parameters for DescribeHosts.
  * Filter [FilterList](#filterlist)
  * HostIds [RequestHostIdList](#requesthostidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeHostsResult
* DescribeHostsResult `object`: Contains the output of DescribeHosts.
  * Hosts [HostList](#hostlist)
  * NextToken [String](#string)

### DescribeIamInstanceProfileAssociationsRequest
* DescribeIamInstanceProfileAssociationsRequest `object`
  * AssociationIds [AssociationIdList](#associationidlist)
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### DescribeIamInstanceProfileAssociationsResult
* DescribeIamInstanceProfileAssociationsResult `object`
  * IamInstanceProfileAssociations [IamInstanceProfileAssociationSet](#iaminstanceprofileassociationset)
  * NextToken [NextToken](#nexttoken)

### DescribeIdFormatRequest
* DescribeIdFormatRequest `object`: Contains the parameters for DescribeIdFormat.
  * Resource [String](#string)

### DescribeIdFormatResult
* DescribeIdFormatResult `object`: Contains the output of DescribeIdFormat.
  * Statuses [IdFormatList](#idformatlist)

### DescribeIdentityIdFormatRequest
* DescribeIdentityIdFormatRequest `object`: Contains the parameters for DescribeIdentityIdFormat.
  * PrincipalArn **required** [String](#string)
  * Resource [String](#string)

### DescribeIdentityIdFormatResult
* DescribeIdentityIdFormatResult `object`: Contains the output of DescribeIdentityIdFormat.
  * Statuses [IdFormatList](#idformatlist)

### DescribeImageAttributeRequest
* DescribeImageAttributeRequest `object`: Contains the parameters for DescribeImageAttribute.
  * Attribute **required** [ImageAttributeName](#imageattributename)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

### DescribeImagesRequest
* DescribeImagesRequest `object`: Contains the parameters for DescribeImages.
  * DryRun [Boolean](#boolean)
  * ExecutableUsers [ExecutableByStringList](#executablebystringlist)
  * Filters [FilterList](#filterlist)
  * ImageIds [ImageIdStringList](#imageidstringlist)
  * Owners [OwnerStringList](#ownerstringlist)

### DescribeImagesResult
* DescribeImagesResult `object`: Contains the output of DescribeImages.
  * Images [ImageList](#imagelist)

### DescribeImportImageTasksRequest
* DescribeImportImageTasksRequest `object`: Contains the parameters for DescribeImportImageTasks.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ImportTaskIds [ImportTaskIdList](#importtaskidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeImportImageTasksResult
* DescribeImportImageTasksResult `object`: Contains the output for DescribeImportImageTasks.
  * ImportImageTasks [ImportImageTaskList](#importimagetasklist)
  * NextToken [String](#string)

### DescribeImportSnapshotTasksRequest
* DescribeImportSnapshotTasksRequest `object`: Contains the parameters for DescribeImportSnapshotTasks.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * ImportTaskIds [ImportTaskIdList](#importtaskidlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeImportSnapshotTasksResult
* DescribeImportSnapshotTasksResult `object`: Contains the output for DescribeImportSnapshotTasks.
  * ImportSnapshotTasks [ImportSnapshotTaskList](#importsnapshottasklist)
  * NextToken [String](#string)

### DescribeInstanceAttributeRequest
* DescribeInstanceAttributeRequest `object`: Contains the parameters for DescribeInstanceAttribute.
  * Attribute **required** [InstanceAttributeName](#instanceattributename)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### DescribeInstanceStatusRequest
* DescribeInstanceStatusRequest `object`: Contains the parameters for DescribeInstanceStatus.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * IncludeAllInstances [Boolean](#boolean)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeInstanceStatusResult
* DescribeInstanceStatusResult `object`: Contains the output of DescribeInstanceStatus.
  * InstanceStatuses [InstanceStatusList](#instancestatuslist)
  * NextToken [String](#string)

### DescribeInstancesRequest
* DescribeInstancesRequest `object`: Contains the parameters for DescribeInstances.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InstanceIds [InstanceIdStringList](#instanceidstringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeInstancesResult
* DescribeInstancesResult `object`: Contains the output of DescribeInstances.
  * NextToken [String](#string)
  * Reservations [ReservationList](#reservationlist)

### DescribeInternetGatewaysRequest
* DescribeInternetGatewaysRequest `object`: Contains the parameters for DescribeInternetGateways.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * InternetGatewayIds [ValueStringList](#valuestringlist)

### DescribeInternetGatewaysResult
* DescribeInternetGatewaysResult `object`: Contains the output of DescribeInternetGateways.
  * InternetGateways [InternetGatewayList](#internetgatewaylist)

### DescribeKeyPairsRequest
* DescribeKeyPairsRequest `object`: Contains the parameters for DescribeKeyPairs.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * KeyNames [KeyNameStringList](#keynamestringlist)

### DescribeKeyPairsResult
* DescribeKeyPairsResult `object`: Contains the output of DescribeKeyPairs.
  * KeyPairs [KeyPairList](#keypairlist)

### DescribeMovingAddressesRequest
* DescribeMovingAddressesRequest `object`: Contains the parameters for DescribeMovingAddresses.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * PublicIps [ValueStringList](#valuestringlist)

### DescribeMovingAddressesResult
* DescribeMovingAddressesResult `object`: Contains the output of DescribeMovingAddresses.
  * MovingAddressStatuses [MovingAddressStatusSet](#movingaddressstatusset)
  * NextToken [String](#string)

### DescribeNatGatewaysRequest
* DescribeNatGatewaysRequest `object`: Contains the parameters for DescribeNatGateways.
  * Filter [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NatGatewayIds [ValueStringList](#valuestringlist)
  * NextToken [String](#string)

### DescribeNatGatewaysResult
* DescribeNatGatewaysResult `object`: Contains the output of DescribeNatGateways.
  * NatGateways [NatGatewayList](#natgatewaylist)
  * NextToken [String](#string)

### DescribeNetworkAclsRequest
* DescribeNetworkAclsRequest `object`: Contains the parameters for DescribeNetworkAcls.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * NetworkAclIds [ValueStringList](#valuestringlist)

### DescribeNetworkAclsResult
* DescribeNetworkAclsResult `object`: Contains the output of DescribeNetworkAcls.
  * NetworkAcls [NetworkAclList](#networkacllist)

### DescribeNetworkInterfaceAttributeRequest
* DescribeNetworkInterfaceAttributeRequest `object`: Contains the parameters for DescribeNetworkInterfaceAttribute.
  * Attribute [NetworkInterfaceAttribute](#networkinterfaceattribute)
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)

### DescribeNetworkInterfaceAttributeResult
* DescribeNetworkInterfaceAttributeResult `object`: Contains the output of DescribeNetworkInterfaceAttribute.
  * Attachment [NetworkInterfaceAttachment](#networkinterfaceattachment)
  * Description [AttributeValue](#attributevalue)
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * NetworkInterfaceId [String](#string)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)

### DescribeNetworkInterfacePermissionsRequest
* DescribeNetworkInterfacePermissionsRequest `object`: Contains the parameters for DescribeNetworkInterfacePermissions.
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NetworkInterfacePermissionIds [NetworkInterfacePermissionIdList](#networkinterfacepermissionidlist)
  * NextToken [String](#string)

### DescribeNetworkInterfacePermissionsResult
* DescribeNetworkInterfacePermissionsResult `object`: Contains the output for DescribeNetworkInterfacePermissions.
  * NetworkInterfacePermissions [NetworkInterfacePermissionList](#networkinterfacepermissionlist)
  * NextToken [String](#string)

### DescribeNetworkInterfacesRequest
* DescribeNetworkInterfacesRequest `object`: Contains the parameters for DescribeNetworkInterfaces.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * NetworkInterfaceIds [NetworkInterfaceIdList](#networkinterfaceidlist)

### DescribeNetworkInterfacesResult
* DescribeNetworkInterfacesResult `object`: Contains the output of DescribeNetworkInterfaces.
  * NetworkInterfaces [NetworkInterfaceList](#networkinterfacelist)

### DescribePlacementGroupsRequest
* DescribePlacementGroupsRequest `object`: Contains the parameters for DescribePlacementGroups.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * GroupNames [PlacementGroupStringList](#placementgroupstringlist)

### DescribePlacementGroupsResult
* DescribePlacementGroupsResult `object`: Contains the output of DescribePlacementGroups.
  * PlacementGroups [PlacementGroupList](#placementgrouplist)

### DescribePrefixListsRequest
* DescribePrefixListsRequest `object`: Contains the parameters for DescribePrefixLists.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * PrefixListIds [ValueStringList](#valuestringlist)

### DescribePrefixListsResult
* DescribePrefixListsResult `object`: Contains the output of DescribePrefixLists.
  * NextToken [String](#string)
  * PrefixLists [PrefixListSet](#prefixlistset)

### DescribeRegionsRequest
* DescribeRegionsRequest `object`: Contains the parameters for DescribeRegions.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * RegionNames [RegionNameStringList](#regionnamestringlist)

### DescribeRegionsResult
* DescribeRegionsResult `object`: Contains the output of DescribeRegions.
  * Regions [RegionList](#regionlist)

### DescribeReservedInstancesListingsRequest
* DescribeReservedInstancesListingsRequest `object`: Contains the parameters for DescribeReservedInstancesListings.
  * Filters [FilterList](#filterlist)
  * ReservedInstancesId [String](#string)
  * ReservedInstancesListingId [String](#string)

### DescribeReservedInstancesListingsResult
* DescribeReservedInstancesListingsResult `object`: Contains the output of DescribeReservedInstancesListings.
  * ReservedInstancesListings [ReservedInstancesListingList](#reservedinstanceslistinglist)

### DescribeReservedInstancesModificationsRequest
* DescribeReservedInstancesModificationsRequest `object`: Contains the parameters for DescribeReservedInstancesModifications.
  * Filters [FilterList](#filterlist)
  * NextToken [String](#string)
  * ReservedInstancesModificationIds [ReservedInstancesModificationIdStringList](#reservedinstancesmodificationidstringlist)

### DescribeReservedInstancesModificationsResult
* DescribeReservedInstancesModificationsResult `object`: Contains the output of DescribeReservedInstancesModifications.
  * NextToken [String](#string)
  * ReservedInstancesModifications [ReservedInstancesModificationList](#reservedinstancesmodificationlist)

### DescribeReservedInstancesOfferingsRequest
* DescribeReservedInstancesOfferingsRequest `object`: Contains the parameters for DescribeReservedInstancesOfferings.
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * IncludeMarketplace [Boolean](#boolean)
  * InstanceTenancy [Tenancy](#tenancy)
  * InstanceType [InstanceType](#instancetype)
  * MaxDuration [Long](#long)
  * MaxInstanceCount [Integer](#integer)
  * MaxResults [Integer](#integer)
  * MinDuration [Long](#long)
  * NextToken [String](#string)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * ReservedInstancesOfferingIds [ReservedInstancesOfferingIdStringList](#reservedinstancesofferingidstringlist)

### DescribeReservedInstancesOfferingsResult
* DescribeReservedInstancesOfferingsResult `object`: Contains the output of DescribeReservedInstancesOfferings.
  * NextToken [String](#string)
  * ReservedInstancesOfferings [ReservedInstancesOfferingList](#reservedinstancesofferinglist)

### DescribeReservedInstancesRequest
* DescribeReservedInstancesRequest `object`: Contains the parameters for DescribeReservedInstances.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * ReservedInstancesIds [ReservedInstancesIdStringList](#reservedinstancesidstringlist)

### DescribeReservedInstancesResult
* DescribeReservedInstancesResult `object`: Contains the output for DescribeReservedInstances.
  * ReservedInstances [ReservedInstancesList](#reservedinstanceslist)

### DescribeRouteTablesRequest
* DescribeRouteTablesRequest `object`: Contains the parameters for DescribeRouteTables.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * RouteTableIds [ValueStringList](#valuestringlist)

### DescribeRouteTablesResult
* DescribeRouteTablesResult `object`: Contains the output of DescribeRouteTables.
  * RouteTables [RouteTableList](#routetablelist)

### DescribeScheduledInstanceAvailabilityRequest
* DescribeScheduledInstanceAvailabilityRequest `object`: Contains the parameters for DescribeScheduledInstanceAvailability.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * FirstSlotStartTimeRange **required** [SlotDateTimeRangeRequest](#slotdatetimerangerequest)
  * MaxResults [Integer](#integer)
  * MaxSlotDurationInHours [Integer](#integer)
  * MinSlotDurationInHours [Integer](#integer)
  * NextToken [String](#string)
  * Recurrence **required** [ScheduledInstanceRecurrenceRequest](#scheduledinstancerecurrencerequest)

### DescribeScheduledInstanceAvailabilityResult
* DescribeScheduledInstanceAvailabilityResult `object`: Contains the output of DescribeScheduledInstanceAvailability.
  * NextToken [String](#string)
  * ScheduledInstanceAvailabilitySet [ScheduledInstanceAvailabilitySet](#scheduledinstanceavailabilityset)

### DescribeScheduledInstancesRequest
* DescribeScheduledInstancesRequest `object`: Contains the parameters for DescribeScheduledInstances.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ScheduledInstanceIds [ScheduledInstanceIdRequestSet](#scheduledinstanceidrequestset)
  * SlotStartTimeRange [SlotStartTimeRangeRequest](#slotstarttimerangerequest)

### DescribeScheduledInstancesResult
* DescribeScheduledInstancesResult `object`: Contains the output of DescribeScheduledInstances.
  * NextToken [String](#string)
  * ScheduledInstanceSet [ScheduledInstanceSet](#scheduledinstanceset)

### DescribeSecurityGroupReferencesRequest
* DescribeSecurityGroupReferencesRequest `object`
  * DryRun [Boolean](#boolean)
  * GroupId **required** [GroupIds](#groupids)

### DescribeSecurityGroupReferencesResult
* DescribeSecurityGroupReferencesResult `object`
  * SecurityGroupReferenceSet [SecurityGroupReferences](#securitygroupreferences)

### DescribeSecurityGroupsRequest
* DescribeSecurityGroupsRequest `object`: Contains the parameters for DescribeSecurityGroups.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * GroupIds [GroupIdStringList](#groupidstringlist)
  * GroupNames [GroupNameStringList](#groupnamestringlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeSecurityGroupsResult
* DescribeSecurityGroupsResult `object`: Contains the output of DescribeSecurityGroups.
  * NextToken [String](#string)
  * SecurityGroups [SecurityGroupList](#securitygrouplist)

### DescribeSnapshotAttributeRequest
* DescribeSnapshotAttributeRequest `object`: Contains the parameters for DescribeSnapshotAttribute.
  * Attribute **required** [SnapshotAttributeName](#snapshotattributename)
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

### DescribeSnapshotAttributeResult
* DescribeSnapshotAttributeResult `object`: Contains the output of DescribeSnapshotAttribute.
  * CreateVolumePermissions [CreateVolumePermissionList](#createvolumepermissionlist)
  * ProductCodes [ProductCodeList](#productcodelist)
  * SnapshotId [String](#string)

### DescribeSnapshotsRequest
* DescribeSnapshotsRequest `object`: Contains the parameters for DescribeSnapshots.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * OwnerIds [OwnerStringList](#ownerstringlist)
  * RestorableByUserIds [RestorableByStringList](#restorablebystringlist)
  * SnapshotIds [SnapshotIdStringList](#snapshotidstringlist)

### DescribeSnapshotsResult
* DescribeSnapshotsResult `object`: Contains the output of DescribeSnapshots.
  * NextToken [String](#string)
  * Snapshots [SnapshotList](#snapshotlist)

### DescribeSpotDatafeedSubscriptionRequest
* DescribeSpotDatafeedSubscriptionRequest `object`: Contains the parameters for DescribeSpotDatafeedSubscription.
  * DryRun [Boolean](#boolean)

### DescribeSpotDatafeedSubscriptionResult
* DescribeSpotDatafeedSubscriptionResult `object`: Contains the output of DescribeSpotDatafeedSubscription.
  * SpotDatafeedSubscription [SpotDatafeedSubscription](#spotdatafeedsubscription)

### DescribeSpotFleetInstancesRequest
* DescribeSpotFleetInstancesRequest `object`: Contains the parameters for DescribeSpotFleetInstances.
  * DryRun [Boolean](#boolean)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)

### DescribeSpotFleetInstancesResponse
* DescribeSpotFleetInstancesResponse `object`: Contains the output of DescribeSpotFleetInstances.
  * ActiveInstances **required** [ActiveInstanceSet](#activeinstanceset)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)

### DescribeSpotFleetRequestHistoryRequest
* DescribeSpotFleetRequestHistoryRequest `object`: Contains the parameters for DescribeSpotFleetRequestHistory.
  * DryRun [Boolean](#boolean)
  * EventType [EventType](#eventtype)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)
  * StartTime **required** [DateTime](#datetime)

### DescribeSpotFleetRequestHistoryResponse
* DescribeSpotFleetRequestHistoryResponse `object`: Contains the output of DescribeSpotFleetRequestHistory.
  * HistoryRecords **required** [HistoryRecords](#historyrecords)
  * LastEvaluatedTime **required** [DateTime](#datetime)
  * NextToken [String](#string)
  * SpotFleetRequestId **required** [String](#string)
  * StartTime **required** [DateTime](#datetime)

### DescribeSpotFleetRequestsRequest
* DescribeSpotFleetRequestsRequest `object`: Contains the parameters for DescribeSpotFleetRequests.
  * DryRun [Boolean](#boolean)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * SpotFleetRequestIds [ValueStringList](#valuestringlist)

### DescribeSpotFleetRequestsResponse
* DescribeSpotFleetRequestsResponse `object`: Contains the output of DescribeSpotFleetRequests.
  * NextToken [String](#string)
  * SpotFleetRequestConfigs **required** [SpotFleetRequestConfigSet](#spotfleetrequestconfigset)

### DescribeSpotInstanceRequestsRequest
* DescribeSpotInstanceRequestsRequest `object`: Contains the parameters for DescribeSpotInstanceRequests.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * SpotInstanceRequestIds [SpotInstanceRequestIdList](#spotinstancerequestidlist)

### DescribeSpotInstanceRequestsResult
* DescribeSpotInstanceRequestsResult `object`: Contains the output of DescribeSpotInstanceRequests.
  * SpotInstanceRequests [SpotInstanceRequestList](#spotinstancerequestlist)

### DescribeSpotPriceHistoryRequest
* DescribeSpotPriceHistoryRequest `object`: Contains the parameters for DescribeSpotPriceHistory.
  * AvailabilityZone [String](#string)
  * DryRun [Boolean](#boolean)
  * EndTime [DateTime](#datetime)
  * Filters [FilterList](#filterlist)
  * InstanceTypes [InstanceTypeList](#instancetypelist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ProductDescriptions [ProductDescriptionList](#productdescriptionlist)
  * StartTime [DateTime](#datetime)

### DescribeSpotPriceHistoryResult
* DescribeSpotPriceHistoryResult `object`: Contains the output of DescribeSpotPriceHistory.
  * NextToken [String](#string)
  * SpotPriceHistory [SpotPriceHistoryList](#spotpricehistorylist)

### DescribeStaleSecurityGroupsRequest
* DescribeStaleSecurityGroupsRequest `object`
  * DryRun [Boolean](#boolean)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * VpcId **required** [String](#string)

### DescribeStaleSecurityGroupsResult
* DescribeStaleSecurityGroupsResult `object`
  * NextToken [String](#string)
  * StaleSecurityGroupSet [StaleSecurityGroupSet](#stalesecuritygroupset)

### DescribeSubnetsRequest
* DescribeSubnetsRequest `object`: Contains the parameters for DescribeSubnets.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * SubnetIds [SubnetIdStringList](#subnetidstringlist)

### DescribeSubnetsResult
* DescribeSubnetsResult `object`: Contains the output of DescribeSubnets.
  * Subnets [SubnetList](#subnetlist)

### DescribeTagsRequest
* DescribeTagsRequest `object`: Contains the parameters for DescribeTags.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeTagsResult
* DescribeTagsResult `object`: Contains the output of DescribeTags.
  * NextToken [String](#string)
  * Tags [TagDescriptionList](#tagdescriptionlist)

### DescribeVolumeAttributeRequest
* DescribeVolumeAttributeRequest `object`: Contains the parameters for DescribeVolumeAttribute.
  * Attribute [VolumeAttributeName](#volumeattributename)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

### DescribeVolumeAttributeResult
* DescribeVolumeAttributeResult `object`: Contains the output of DescribeVolumeAttribute.
  * AutoEnableIO [AttributeBooleanValue](#attributebooleanvalue)
  * ProductCodes [ProductCodeList](#productcodelist)
  * VolumeId [String](#string)

### DescribeVolumeStatusRequest
* DescribeVolumeStatusRequest `object`: Contains the parameters for DescribeVolumeStatus.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

### DescribeVolumeStatusResult
* DescribeVolumeStatusResult `object`: Contains the output of DescribeVolumeStatus.
  * NextToken [String](#string)
  * VolumeStatuses [VolumeStatusList](#volumestatuslist)

### DescribeVolumesModificationsRequest
* DescribeVolumesModificationsRequest `object`
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

### DescribeVolumesModificationsResult
* DescribeVolumesModificationsResult `object`
  * NextToken [String](#string)
  * VolumesModifications [VolumeModificationList](#volumemodificationlist)

### DescribeVolumesRequest
* DescribeVolumesRequest `object`: Contains the parameters for DescribeVolumes.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VolumeIds [VolumeIdStringList](#volumeidstringlist)

### DescribeVolumesResult
* DescribeVolumesResult `object`: Contains the output of DescribeVolumes.
  * NextToken [String](#string)
  * Volumes [VolumeList](#volumelist)

### DescribeVpcAttributeRequest
* DescribeVpcAttributeRequest `object`: Contains the parameters for DescribeVpcAttribute.
  * Attribute **required** [VpcAttributeName](#vpcattributename)
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### DescribeVpcAttributeResult
* DescribeVpcAttributeResult `object`: Contains the output of DescribeVpcAttribute.
  * EnableDnsHostnames [AttributeBooleanValue](#attributebooleanvalue)
  * EnableDnsSupport [AttributeBooleanValue](#attributebooleanvalue)
  * VpcId [String](#string)

### DescribeVpcClassicLinkDnsSupportRequest
* DescribeVpcClassicLinkDnsSupportRequest `object`: Contains the parameters for DescribeVpcClassicLinkDnsSupport.
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * VpcIds [VpcClassicLinkIdList](#vpcclassiclinkidlist)

### DescribeVpcClassicLinkDnsSupportResult
* DescribeVpcClassicLinkDnsSupportResult `object`: Contains the output of DescribeVpcClassicLinkDnsSupport.
  * NextToken [NextToken](#nexttoken)
  * Vpcs [ClassicLinkDnsSupportList](#classiclinkdnssupportlist)

### DescribeVpcClassicLinkRequest
* DescribeVpcClassicLinkRequest `object`: Contains the parameters for DescribeVpcClassicLink.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcIds [VpcClassicLinkIdList](#vpcclassiclinkidlist)

### DescribeVpcClassicLinkResult
* DescribeVpcClassicLinkResult `object`: Contains the output of DescribeVpcClassicLink.
  * Vpcs [VpcClassicLinkList](#vpcclassiclinklist)

### DescribeVpcEndpointServicesRequest
* DescribeVpcEndpointServicesRequest `object`: Contains the parameters for DescribeVpcEndpointServices.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * ServiceNames [ValueStringList](#valuestringlist)

### DescribeVpcEndpointServicesResult
* DescribeVpcEndpointServicesResult `object`: Contains the output of DescribeVpcEndpointServices.
  * NextToken [String](#string)
  * ServiceDetails [ServiceDetailSet](#servicedetailset)
  * ServiceNames [ValueStringList](#valuestringlist)

### DescribeVpcEndpointsRequest
* DescribeVpcEndpointsRequest `object`: Contains the parameters for DescribeVpcEndpoints.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)
  * VpcEndpointIds [ValueStringList](#valuestringlist)

### DescribeVpcEndpointsResult
* DescribeVpcEndpointsResult `object`: Contains the output of DescribeVpcEndpoints.
  * NextToken [String](#string)
  * VpcEndpoints [VpcEndpointSet](#vpcendpointset)

### DescribeVpcPeeringConnectionsRequest
* DescribeVpcPeeringConnectionsRequest `object`: Contains the parameters for DescribeVpcPeeringConnections.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcPeeringConnectionIds [ValueStringList](#valuestringlist)

### DescribeVpcPeeringConnectionsResult
* DescribeVpcPeeringConnectionsResult `object`: Contains the output of DescribeVpcPeeringConnections.
  * VpcPeeringConnections [VpcPeeringConnectionList](#vpcpeeringconnectionlist)

### DescribeVpcsRequest
* DescribeVpcsRequest `object`: Contains the parameters for DescribeVpcs.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpcIds [VpcIdStringList](#vpcidstringlist)

### DescribeVpcsResult
* DescribeVpcsResult `object`: Contains the output of DescribeVpcs.
  * Vpcs [VpcList](#vpclist)

### DescribeVpnConnectionsRequest
* DescribeVpnConnectionsRequest `object`: Contains the parameters for DescribeVpnConnections.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpnConnectionIds [VpnConnectionIdStringList](#vpnconnectionidstringlist)

### DescribeVpnConnectionsResult
* DescribeVpnConnectionsResult `object`: Contains the output of DescribeVpnConnections.
  * VpnConnections [VpnConnectionList](#vpnconnectionlist)

### DescribeVpnGatewaysRequest
* DescribeVpnGatewaysRequest `object`: Contains the parameters for DescribeVpnGateways.
  * DryRun [Boolean](#boolean)
  * Filters [FilterList](#filterlist)
  * VpnGatewayIds [VpnGatewayIdStringList](#vpngatewayidstringlist)

### DescribeVpnGatewaysResult
* DescribeVpnGatewaysResult `object`: Contains the output of DescribeVpnGateways.
  * VpnGateways [VpnGatewayList](#vpngatewaylist)

### DetachClassicLinkVpcRequest
* DetachClassicLinkVpcRequest `object`: Contains the parameters for DetachClassicLinkVpc.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * VpcId **required** [String](#string)

### DetachClassicLinkVpcResult
* DetachClassicLinkVpcResult `object`: Contains the output of DetachClassicLinkVpc.
  * Return [Boolean](#boolean)

### DetachInternetGatewayRequest
* DetachInternetGatewayRequest `object`: Contains the parameters for DetachInternetGateway.
  * DryRun [Boolean](#boolean)
  * InternetGatewayId **required** [String](#string)
  * VpcId **required** [String](#string)

### DetachNetworkInterfaceRequest
* DetachNetworkInterfaceRequest `object`: Contains the parameters for DetachNetworkInterface.
  * AttachmentId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)

### DetachVolumeRequest
* DetachVolumeRequest `object`: Contains the parameters for DetachVolume.
  * Device [String](#string)
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * InstanceId [String](#string)
  * VolumeId **required** [String](#string)

### DetachVpnGatewayRequest
* DetachVpnGatewayRequest `object`: Contains the parameters for DetachVpnGateway.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)
  * VpnGatewayId **required** [String](#string)

### DeviceType
* DeviceType `string` (values: ebs, instance-store)

### DhcpConfiguration
* DhcpConfiguration `object`: Describes a DHCP configuration option.
  * Key [String](#string)
  * Values [DhcpConfigurationValueList](#dhcpconfigurationvaluelist)

### DhcpConfigurationList
* DhcpConfigurationList `array`
  * items [DhcpConfiguration](#dhcpconfiguration)

### DhcpConfigurationValueList
* DhcpConfigurationValueList `array`
  * items [AttributeValue](#attributevalue)

### DhcpOptions
* DhcpOptions `object`: Describes a set of DHCP options.
  * DhcpConfigurations [DhcpConfigurationList](#dhcpconfigurationlist)
  * DhcpOptionsId [String](#string)
  * Tags [TagList](#taglist)

### DhcpOptionsIdStringList
* DhcpOptionsIdStringList `array`
  * items [String](#string)

### DhcpOptionsList
* DhcpOptionsList `array`
  * items [DhcpOptions](#dhcpoptions)

### DisableVgwRoutePropagationRequest
* DisableVgwRoutePropagationRequest `object`: Contains the parameters for DisableVgwRoutePropagation.
  * GatewayId **required** [String](#string)
  * RouteTableId **required** [String](#string)

### DisableVpcClassicLinkDnsSupportRequest
* DisableVpcClassicLinkDnsSupportRequest `object`: Contains the parameters for DisableVpcClassicLinkDnsSupport.
  * VpcId [String](#string)

### DisableVpcClassicLinkDnsSupportResult
* DisableVpcClassicLinkDnsSupportResult `object`: Contains the output of DisableVpcClassicLinkDnsSupport.
  * Return [Boolean](#boolean)

### DisableVpcClassicLinkRequest
* DisableVpcClassicLinkRequest `object`: Contains the parameters for DisableVpcClassicLink.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### DisableVpcClassicLinkResult
* DisableVpcClassicLinkResult `object`: Contains the output of DisableVpcClassicLink.
  * Return [Boolean](#boolean)

### DisassociateAddressRequest
* DisassociateAddressRequest `object`: Contains the parameters for DisassociateAddress.
  * AssociationId [String](#string)
  * DryRun [Boolean](#boolean)
  * PublicIp [String](#string)

### DisassociateIamInstanceProfileRequest
* DisassociateIamInstanceProfileRequest `object`
  * AssociationId **required** [String](#string)

### DisassociateIamInstanceProfileResult
* DisassociateIamInstanceProfileResult `object`
  * IamInstanceProfileAssociation [IamInstanceProfileAssociation](#iaminstanceprofileassociation)

### DisassociateRouteTableRequest
* DisassociateRouteTableRequest `object`: Contains the parameters for DisassociateRouteTable.
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)

### DisassociateSubnetCidrBlockRequest
* DisassociateSubnetCidrBlockRequest `object`
  * AssociationId **required** [String](#string)

### DisassociateSubnetCidrBlockResult
* DisassociateSubnetCidrBlockResult `object`
  * Ipv6CidrBlockAssociation [SubnetIpv6CidrBlockAssociation](#subnetipv6cidrblockassociation)
  * SubnetId [String](#string)

### DisassociateVpcCidrBlockRequest
* DisassociateVpcCidrBlockRequest `object`
  * AssociationId **required** [String](#string)

### DisassociateVpcCidrBlockResult
* DisassociateVpcCidrBlockResult `object`
  * CidrBlockAssociation [VpcCidrBlockAssociation](#vpccidrblockassociation)
  * Ipv6CidrBlockAssociation [VpcIpv6CidrBlockAssociation](#vpcipv6cidrblockassociation)
  * VpcId [String](#string)

### DiskImage
* DiskImage `object`: Describes a disk image.
  * Description [String](#string)
  * Image [DiskImageDetail](#diskimagedetail)
  * Volume [VolumeDetail](#volumedetail)

### DiskImageDescription
* DiskImageDescription `object`: Describes a disk image.
  * Checksum [String](#string)
  * Format **required** [DiskImageFormat](#diskimageformat)
  * ImportManifestUrl **required** [String](#string)
  * Size **required** [Long](#long)

### DiskImageDetail
* DiskImageDetail `object`: Describes a disk image.
  * Bytes **required** [Long](#long)
  * Format **required** [DiskImageFormat](#diskimageformat)
  * ImportManifestUrl **required** [String](#string)

### DiskImageFormat
* DiskImageFormat `string` (values: VMDK, RAW, VHD)

### DiskImageList
* DiskImageList `array`
  * items [DiskImage](#diskimage)

### DiskImageVolumeDescription
* DiskImageVolumeDescription `object`: Describes a disk image volume.
  * Id **required** [String](#string)
  * Size [Long](#long)

### DnsEntry
* DnsEntry `object`: Describes a DNS entry.
  * DnsName [String](#string)
  * HostedZoneId [String](#string)

### DnsEntrySet
* DnsEntrySet `array`
  * items [DnsEntry](#dnsentry)

### DomainType
* DomainType `string` (values: vpc, standard)

### Double
* Double `number`

### EbsBlockDevice
* EbsBlockDevice `object`: Describes a block device for an EBS volume.
  * DeleteOnTermination [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * SnapshotId [String](#string)
  * VolumeSize [Integer](#integer)
  * VolumeType [VolumeType](#volumetype)

### EbsInstanceBlockDevice
* EbsInstanceBlockDevice `object`: Describes a parameter used to set up an EBS volume in a block device mapping.
  * AttachTime [DateTime](#datetime)
  * DeleteOnTermination [Boolean](#boolean)
  * Status [AttachmentStatus](#attachmentstatus)
  * VolumeId [String](#string)

### EbsInstanceBlockDeviceSpecification
* EbsInstanceBlockDeviceSpecification `object`: Describes information used to set up an EBS volume specified in a block device mapping.
  * DeleteOnTermination [Boolean](#boolean)
  * VolumeId [String](#string)

### EgressOnlyInternetGateway
* EgressOnlyInternetGateway `object`: Describes an egress-only Internet gateway.
  * Attachments [InternetGatewayAttachmentList](#internetgatewayattachmentlist)
  * EgressOnlyInternetGatewayId [EgressOnlyInternetGatewayId](#egressonlyinternetgatewayid)

### EgressOnlyInternetGatewayId
* EgressOnlyInternetGatewayId `string`

### EgressOnlyInternetGatewayIdList
* EgressOnlyInternetGatewayIdList `array`
  * items [EgressOnlyInternetGatewayId](#egressonlyinternetgatewayid)

### EgressOnlyInternetGatewayList
* EgressOnlyInternetGatewayList `array`
  * items [EgressOnlyInternetGateway](#egressonlyinternetgateway)

### ElasticGpuAssociation
* ElasticGpuAssociation `object`: Describes the association between an instance and an Elastic GPU.
  * ElasticGpuAssociationId [String](#string)
  * ElasticGpuAssociationState [String](#string)
  * ElasticGpuAssociationTime [String](#string)
  * ElasticGpuId [String](#string)

### ElasticGpuAssociationList
* ElasticGpuAssociationList `array`
  * items [ElasticGpuAssociation](#elasticgpuassociation)

### ElasticGpuHealth
* ElasticGpuHealth `object`: Describes the status of an Elastic GPU.
  * Status [ElasticGpuStatus](#elasticgpustatus)

### ElasticGpuIdSet
* ElasticGpuIdSet `array`
  * items [String](#string)

### ElasticGpuSet
* ElasticGpuSet `array`
  * items [ElasticGpus](#elasticgpus)

### ElasticGpuSpecification
* ElasticGpuSpecification `object`: A specification for an Elastic GPU.
  * Type **required** [String](#string)

### ElasticGpuSpecifications
* ElasticGpuSpecifications `array`
  * items [ElasticGpuSpecification](#elasticgpuspecification)

### ElasticGpuState
* ElasticGpuState `string` (values: ATTACHED)

### ElasticGpuStatus
* ElasticGpuStatus `string` (values: OK, IMPAIRED)

### ElasticGpus
* ElasticGpus `object`: Describes an Elastic GPU.
  * AvailabilityZone [String](#string)
  * ElasticGpuHealth [ElasticGpuHealth](#elasticgpuhealth)
  * ElasticGpuId [String](#string)
  * ElasticGpuState [ElasticGpuState](#elasticgpustate)
  * ElasticGpuType [String](#string)
  * InstanceId [String](#string)

### EnableVgwRoutePropagationRequest
* EnableVgwRoutePropagationRequest `object`: Contains the parameters for EnableVgwRoutePropagation.
  * GatewayId **required** [String](#string)
  * RouteTableId **required** [String](#string)

### EnableVolumeIORequest
* EnableVolumeIORequest `object`: Contains the parameters for EnableVolumeIO.
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

### EnableVpcClassicLinkDnsSupportRequest
* EnableVpcClassicLinkDnsSupportRequest `object`: Contains the parameters for EnableVpcClassicLinkDnsSupport.
  * VpcId [String](#string)

### EnableVpcClassicLinkDnsSupportResult
* EnableVpcClassicLinkDnsSupportResult `object`: Contains the output of EnableVpcClassicLinkDnsSupport.
  * Return [Boolean](#boolean)

### EnableVpcClassicLinkRequest
* EnableVpcClassicLinkRequest `object`: Contains the parameters for EnableVpcClassicLink.
  * DryRun [Boolean](#boolean)
  * VpcId **required** [String](#string)

### EnableVpcClassicLinkResult
* EnableVpcClassicLinkResult `object`: Contains the output of EnableVpcClassicLink.
  * Return [Boolean](#boolean)

### EventCode
* EventCode `string` (values: instance-reboot, system-reboot, system-maintenance, instance-retirement, instance-stop)

### EventInformation
* EventInformation `object`: Describes a Spot fleet event.
  * EventDescription [String](#string)
  * EventSubType [String](#string)
  * InstanceId [String](#string)

### EventType
* EventType `string` (values: instanceChange, fleetRequestChange, error)

### ExcessCapacityTerminationPolicy
* ExcessCapacityTerminationPolicy `string` (values: noTermination, default)

### ExecutableByStringList
* ExecutableByStringList `array`
  * items [String](#string)

### ExportEnvironment
* ExportEnvironment `string` (values: citrix, vmware, microsoft)

### ExportTask
* ExportTask `object`: Describes an instance export task.
  * Description [String](#string)
  * ExportTaskId [String](#string)
  * ExportToS3Task [ExportToS3Task](#exporttos3task)
  * InstanceExportDetails [InstanceExportDetails](#instanceexportdetails)
  * State [ExportTaskState](#exporttaskstate)
  * StatusMessage [String](#string)

### ExportTaskIdStringList
* ExportTaskIdStringList `array`
  * items [String](#string)

### ExportTaskList
* ExportTaskList `array`
  * items [ExportTask](#exporttask)

### ExportTaskState
* ExportTaskState `string` (values: active, cancelling, cancelled, completed)

### ExportToS3Task
* ExportToS3Task `object`: Describes the format and location for an instance export task.
  * ContainerFormat [ContainerFormat](#containerformat)
  * DiskImageFormat [DiskImageFormat](#diskimageformat)
  * S3Bucket [String](#string)
  * S3Key [String](#string)

### ExportToS3TaskSpecification
* ExportToS3TaskSpecification `object`: Describes an instance export task.
  * ContainerFormat [ContainerFormat](#containerformat)
  * DiskImageFormat [DiskImageFormat](#diskimageformat)
  * S3Bucket [String](#string)
  * S3Prefix [String](#string)

### Filter
* Filter `object`: A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria, such as tags, attributes, or IDs.
  * Name [String](#string)
  * Values [ValueStringList](#valuestringlist)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FleetType
* FleetType `string` (values: request, maintain)

### Float
* Float `number`

### FlowLog
* FlowLog `object`: Describes a flow log.
  * CreationTime [DateTime](#datetime)
  * DeliverLogsErrorMessage [String](#string)
  * DeliverLogsPermissionArn [String](#string)
  * DeliverLogsStatus [String](#string)
  * FlowLogId [String](#string)
  * FlowLogStatus [String](#string)
  * LogGroupName [String](#string)
  * ResourceId [String](#string)
  * TrafficType [TrafficType](#traffictype)

### FlowLogSet
* FlowLogSet `array`
  * items [FlowLog](#flowlog)

### FlowLogsResourceType
* FlowLogsResourceType `string` (values: VPC, Subnet, NetworkInterface)

### FpgaImage
* FpgaImage `object`: Describes an Amazon FPGA image (AFI).
  * CreateTime [DateTime](#datetime)
  * Description [String](#string)
  * FpgaImageGlobalId [String](#string)
  * FpgaImageId [String](#string)
  * Name [String](#string)
  * OwnerAlias [String](#string)
  * OwnerId [String](#string)
  * PciId [PciId](#pciid)
  * ProductCodes [ProductCodeList](#productcodelist)
  * Public [Boolean](#boolean)
  * ShellVersion [String](#string)
  * State [FpgaImageState](#fpgaimagestate)
  * Tags [TagList](#taglist)
  * UpdateTime [DateTime](#datetime)

### FpgaImageAttribute
* FpgaImageAttribute `object`: Describes an Amazon FPGA image (AFI) attribute.
  * Description [String](#string)
  * FpgaImageId [String](#string)
  * LoadPermissions [LoadPermissionList](#loadpermissionlist)
  * Name [String](#string)
  * ProductCodes [ProductCodeList](#productcodelist)

### FpgaImageAttributeName
* FpgaImageAttributeName `string` (values: description, name, loadPermission, productCodes)

### FpgaImageIdList
* FpgaImageIdList `array`
  * items [String](#string)

### FpgaImageList
* FpgaImageList `array`
  * items [FpgaImage](#fpgaimage)

### FpgaImageState
* FpgaImageState `object`: Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
  * Code [FpgaImageStateCode](#fpgaimagestatecode)
  * Message [String](#string)

### FpgaImageStateCode
* FpgaImageStateCode `string` (values: pending, failed, available, unavailable)

### GatewayType
* GatewayType `string` (values: ipsec.1)

### GetConsoleOutputRequest
* GetConsoleOutputRequest `object`: Contains the parameters for GetConsoleOutput.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### GetConsoleOutputResult
* GetConsoleOutputResult `object`: Contains the output of GetConsoleOutput.
  * InstanceId [String](#string)
  * Output [String](#string)
  * Timestamp [DateTime](#datetime)

### GetConsoleScreenshotRequest
* GetConsoleScreenshotRequest `object`: Contains the parameters for the request.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)
  * WakeUp [Boolean](#boolean)

### GetConsoleScreenshotResult
* GetConsoleScreenshotResult `object`: Contains the output of the request.
  * ImageData [String](#string)
  * InstanceId [String](#string)

### GetHostReservationPurchasePreviewRequest
* GetHostReservationPurchasePreviewRequest `object`
  * HostIdSet **required** [RequestHostIdSet](#requesthostidset)
  * OfferingId **required** [String](#string)

### GetHostReservationPurchasePreviewResult
* GetHostReservationPurchasePreviewResult `object`
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Purchase [PurchaseSet](#purchaseset)
  * TotalHourlyPrice [String](#string)
  * TotalUpfrontPrice [String](#string)

### GetPasswordDataRequest
* GetPasswordDataRequest `object`: Contains the parameters for GetPasswordData.
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### GetPasswordDataResult
* GetPasswordDataResult `object`: Contains the output of GetPasswordData.
  * InstanceId [String](#string)
  * PasswordData [String](#string)
  * Timestamp [DateTime](#datetime)

### GetReservedInstancesExchangeQuoteRequest
* GetReservedInstancesExchangeQuoteRequest `object`: Contains the parameters for GetReservedInstanceExchangeQuote.
  * DryRun [Boolean](#boolean)
  * ReservedInstanceIds **required** [ReservedInstanceIdSet](#reservedinstanceidset)
  * TargetConfigurations [TargetConfigurationRequestSet](#targetconfigurationrequestset)

### GetReservedInstancesExchangeQuoteResult
* GetReservedInstancesExchangeQuoteResult `object`: Contains the output of GetReservedInstancesExchangeQuote.
  * CurrencyCode [String](#string)
  * IsValidExchange [Boolean](#boolean)
  * OutputReservedInstancesWillExpireAt [DateTime](#datetime)
  * PaymentDue [String](#string)
  * ReservedInstanceValueRollup [ReservationValue](#reservationvalue)
  * ReservedInstanceValueSet [ReservedInstanceReservationValueSet](#reservedinstancereservationvalueset)
  * TargetConfigurationValueRollup [ReservationValue](#reservationvalue)
  * TargetConfigurationValueSet [TargetReservationValueSet](#targetreservationvalueset)
  * ValidationFailureReason [String](#string)

### GroupIdStringList
* GroupIdStringList `array`
  * items [String](#string)

### GroupIdentifier
* GroupIdentifier `object`: Describes a security group.
  * GroupId [String](#string)
  * GroupName [String](#string)

### GroupIdentifierList
* GroupIdentifierList `array`
  * items [GroupIdentifier](#groupidentifier)

### GroupIdentifierSet
* GroupIdentifierSet `array`
  * items [SecurityGroupIdentifier](#securitygroupidentifier)

### GroupIds
* GroupIds `array`
  * items [String](#string)

### GroupNameStringList
* GroupNameStringList `array`
  * items [String](#string)

### HistoryRecord
* HistoryRecord `object`: Describes an event in the history of the Spot fleet request.
  * EventInformation **required** [EventInformation](#eventinformation)
  * EventType **required** [EventType](#eventtype)
  * Timestamp **required** [DateTime](#datetime)

### HistoryRecords
* HistoryRecords `array`
  * items [HistoryRecord](#historyrecord)

### Host
* Host `object`: Describes the properties of the Dedicated Host.
  * AutoPlacement [AutoPlacement](#autoplacement)
  * AvailabilityZone [String](#string)
  * AvailableCapacity [AvailableCapacity](#availablecapacity)
  * ClientToken [String](#string)
  * HostId [String](#string)
  * HostProperties [HostProperties](#hostproperties)
  * HostReservationId [String](#string)
  * Instances [HostInstanceList](#hostinstancelist)
  * State [AllocationState](#allocationstate)

### HostInstance
* HostInstance `object`: Describes an instance running on a Dedicated Host.
  * InstanceId [String](#string)
  * InstanceType [String](#string)

### HostInstanceList
* HostInstanceList `array`
  * items [HostInstance](#hostinstance)

### HostList
* HostList `array`
  * items [Host](#host)

### HostOffering
* HostOffering `object`: Details about the Dedicated Host Reservation offering.
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Duration [Integer](#integer)
  * HourlyPrice [String](#string)
  * InstanceFamily [String](#string)
  * OfferingId [String](#string)
  * PaymentOption [PaymentOption](#paymentoption)
  * UpfrontPrice [String](#string)

### HostOfferingSet
* HostOfferingSet `array`
  * items [HostOffering](#hostoffering)

### HostProperties
* HostProperties `object`: Describes properties of a Dedicated Host.
  * Cores [Integer](#integer)
  * InstanceType [String](#string)
  * Sockets [Integer](#integer)
  * TotalVCpus [Integer](#integer)

### HostReservation
* HostReservation `object`: Details about the Dedicated Host Reservation and associated Dedicated Hosts.
  * Count [Integer](#integer)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Duration [Integer](#integer)
  * End [DateTime](#datetime)
  * HostIdSet [ResponseHostIdSet](#responsehostidset)
  * HostReservationId [String](#string)
  * HourlyPrice [String](#string)
  * InstanceFamily [String](#string)
  * OfferingId [String](#string)
  * PaymentOption [PaymentOption](#paymentoption)
  * Start [DateTime](#datetime)
  * State [ReservationState](#reservationstate)
  * UpfrontPrice [String](#string)

### HostReservationIdSet
* HostReservationIdSet `array`
  * items [String](#string)

### HostReservationSet
* HostReservationSet `array`
  * items [HostReservation](#hostreservation)

### HostTenancy
* HostTenancy `string` (values: dedicated, host)

### HypervisorType
* HypervisorType `string` (values: ovm, xen)

### IamInstanceProfile
* IamInstanceProfile `object`: Describes an IAM instance profile.
  * Arn [String](#string)
  * Id [String](#string)

### IamInstanceProfileAssociation
* IamInstanceProfileAssociation `object`: Describes an association between an IAM instance profile and an instance.
  * AssociationId [String](#string)
  * IamInstanceProfile [IamInstanceProfile](#iaminstanceprofile)
  * InstanceId [String](#string)
  * State [IamInstanceProfileAssociationState](#iaminstanceprofileassociationstate)
  * Timestamp [DateTime](#datetime)

### IamInstanceProfileAssociationSet
* IamInstanceProfileAssociationSet `array`
  * items [IamInstanceProfileAssociation](#iaminstanceprofileassociation)

### IamInstanceProfileAssociationState
* IamInstanceProfileAssociationState `string` (values: associating, associated, disassociating, disassociated)

### IamInstanceProfileSpecification
* IamInstanceProfileSpecification `object`: Describes an IAM instance profile.
  * Arn [String](#string)
  * Name [String](#string)

### IcmpTypeCode
* IcmpTypeCode `object`: Describes the ICMP type and code.
  * Code [Integer](#integer)
  * Type [Integer](#integer)

### IdFormat
* IdFormat `object`: Describes the ID format for a resource.
  * Deadline [DateTime](#datetime)
  * Resource [String](#string)
  * UseLongIds [Boolean](#boolean)

### IdFormatList
* IdFormatList `array`
  * items [IdFormat](#idformat)

### Image
* Image `object`: Describes an image.
  * Architecture [ArchitectureValues](#architecturevalues)
  * BlockDeviceMappings [BlockDeviceMappingList](#blockdevicemappinglist)
  * CreationDate [String](#string)
  * Description [String](#string)
  * EnaSupport [Boolean](#boolean)
  * Hypervisor [HypervisorType](#hypervisortype)
  * ImageId [String](#string)
  * ImageLocation [String](#string)
  * ImageOwnerAlias [String](#string)
  * ImageType [ImageTypeValues](#imagetypevalues)
  * KernelId [String](#string)
  * Name [String](#string)
  * OwnerId [String](#string)
  * Platform [PlatformValues](#platformvalues)
  * ProductCodes [ProductCodeList](#productcodelist)
  * Public [Boolean](#boolean)
  * RamdiskId [String](#string)
  * RootDeviceName [String](#string)
  * RootDeviceType [DeviceType](#devicetype)
  * SriovNetSupport [String](#string)
  * State [ImageState](#imagestate)
  * StateReason [StateReason](#statereason)
  * Tags [TagList](#taglist)
  * VirtualizationType [VirtualizationType](#virtualizationtype)

### ImageAttribute
* ImageAttribute `object`: Describes an image attribute.
  * BlockDeviceMappings [BlockDeviceMappingList](#blockdevicemappinglist)
  * Description [AttributeValue](#attributevalue)
  * ImageId [String](#string)
  * KernelId [AttributeValue](#attributevalue)
  * LaunchPermissions [LaunchPermissionList](#launchpermissionlist)
  * ProductCodes [ProductCodeList](#productcodelist)
  * RamdiskId [AttributeValue](#attributevalue)
  * SriovNetSupport [AttributeValue](#attributevalue)

### ImageAttributeName
* ImageAttributeName `string` (values: description, kernel, ramdisk, launchPermission, productCodes, blockDeviceMapping, sriovNetSupport)

### ImageDiskContainer
* ImageDiskContainer `object`: Describes the disk container object for an import image task.
  * Description [String](#string)
  * DeviceName [String](#string)
  * Format [String](#string)
  * SnapshotId [String](#string)
  * Url [String](#string)
  * UserBucket [UserBucket](#userbucket)

### ImageDiskContainerList
* ImageDiskContainerList `array`
  * items [ImageDiskContainer](#imagediskcontainer)

### ImageIdStringList
* ImageIdStringList `array`
  * items [String](#string)

### ImageList
* ImageList `array`
  * items [Image](#image)

### ImageState
* ImageState `string` (values: pending, available, invalid, deregistered, transient, failed, error)

### ImageTypeValues
* ImageTypeValues `string` (values: machine, kernel, ramdisk)

### ImportImageRequest
* ImportImageRequest `object`: Contains the parameters for ImportImage.
  * Architecture [String](#string)
  * ClientData [ClientData](#clientdata)
  * ClientToken [String](#string)
  * Description [String](#string)
  * DiskContainers [ImageDiskContainerList](#imagediskcontainerlist)
  * DryRun [Boolean](#boolean)
  * Hypervisor [String](#string)
  * LicenseType [String](#string)
  * Platform [String](#string)
  * RoleName [String](#string)

### ImportImageResult
* ImportImageResult `object`: Contains the output for ImportImage.
  * Architecture [String](#string)
  * Description [String](#string)
  * Hypervisor [String](#string)
  * ImageId [String](#string)
  * ImportTaskId [String](#string)
  * LicenseType [String](#string)
  * Platform [String](#string)
  * Progress [String](#string)
  * SnapshotDetails [SnapshotDetailList](#snapshotdetaillist)
  * Status [String](#string)
  * StatusMessage [String](#string)

### ImportImageTask
* ImportImageTask `object`: Describes an import image task.
  * Architecture [String](#string)
  * Description [String](#string)
  * Hypervisor [String](#string)
  * ImageId [String](#string)
  * ImportTaskId [String](#string)
  * LicenseType [String](#string)
  * Platform [String](#string)
  * Progress [String](#string)
  * SnapshotDetails [SnapshotDetailList](#snapshotdetaillist)
  * Status [String](#string)
  * StatusMessage [String](#string)

### ImportImageTaskList
* ImportImageTaskList `array`
  * items [ImportImageTask](#importimagetask)

### ImportInstanceLaunchSpecification
* ImportInstanceLaunchSpecification `object`: Describes the launch specification for VM import.
  * AdditionalInfo [String](#string)
  * Architecture [ArchitectureValues](#architecturevalues)
  * GroupIds [SecurityGroupIdStringList](#securitygroupidstringlist)
  * GroupNames [SecurityGroupStringList](#securitygroupstringlist)
  * InstanceInitiatedShutdownBehavior [ShutdownBehavior](#shutdownbehavior)
  * InstanceType [InstanceType](#instancetype)
  * Monitoring [Boolean](#boolean)
  * Placement [Placement](#placement)
  * PrivateIpAddress [String](#string)
  * SubnetId [String](#string)
  * UserData [UserData](#userdata)

### ImportInstanceRequest
* ImportInstanceRequest `object`: Contains the parameters for ImportInstance.
  * Description [String](#string)
  * DiskImages [DiskImageList](#diskimagelist)
  * DryRun [Boolean](#boolean)
  * LaunchSpecification [ImportInstanceLaunchSpecification](#importinstancelaunchspecification)
  * Platform **required** [PlatformValues](#platformvalues)

### ImportInstanceResult
* ImportInstanceResult `object`: Contains the output for ImportInstance.
  * ConversionTask [ConversionTask](#conversiontask)

### ImportInstanceTaskDetails
* ImportInstanceTaskDetails `object`: Describes an import instance task.
  * Description [String](#string)
  * InstanceId [String](#string)
  * Platform [PlatformValues](#platformvalues)
  * Volumes **required** [ImportInstanceVolumeDetailSet](#importinstancevolumedetailset)

### ImportInstanceVolumeDetailItem
* ImportInstanceVolumeDetailItem `object`: Describes an import volume task.
  * AvailabilityZone **required** [String](#string)
  * BytesConverted **required** [Long](#long)
  * Description [String](#string)
  * Image **required** [DiskImageDescription](#diskimagedescription)
  * Status **required** [String](#string)
  * StatusMessage [String](#string)
  * Volume **required** [DiskImageVolumeDescription](#diskimagevolumedescription)

### ImportInstanceVolumeDetailSet
* ImportInstanceVolumeDetailSet `array`
  * items [ImportInstanceVolumeDetailItem](#importinstancevolumedetailitem)

### ImportKeyPairRequest
* ImportKeyPairRequest `object`: Contains the parameters for ImportKeyPair.
  * DryRun [Boolean](#boolean)
  * KeyName **required** [String](#string)
  * PublicKeyMaterial **required** [Blob](#blob)

### ImportKeyPairResult
* ImportKeyPairResult `object`: Contains the output of ImportKeyPair.
  * KeyFingerprint [String](#string)
  * KeyName [String](#string)

### ImportSnapshotRequest
* ImportSnapshotRequest `object`: Contains the parameters for ImportSnapshot.
  * ClientData [ClientData](#clientdata)
  * ClientToken [String](#string)
  * Description [String](#string)
  * DiskContainer [SnapshotDiskContainer](#snapshotdiskcontainer)
  * DryRun [Boolean](#boolean)
  * RoleName [String](#string)

### ImportSnapshotResult
* ImportSnapshotResult `object`: Contains the output for ImportSnapshot.
  * Description [String](#string)
  * ImportTaskId [String](#string)
  * SnapshotTaskDetail [SnapshotTaskDetail](#snapshottaskdetail)

### ImportSnapshotTask
* ImportSnapshotTask `object`: Describes an import snapshot task.
  * Description [String](#string)
  * ImportTaskId [String](#string)
  * SnapshotTaskDetail [SnapshotTaskDetail](#snapshottaskdetail)

### ImportSnapshotTaskList
* ImportSnapshotTaskList `array`
  * items [ImportSnapshotTask](#importsnapshottask)

### ImportTaskIdList
* ImportTaskIdList `array`
  * items [String](#string)

### ImportVolumeRequest
* ImportVolumeRequest `object`: Contains the parameters for ImportVolume.
  * AvailabilityZone **required** [String](#string)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * Image **required** [DiskImageDetail](#diskimagedetail)
  * Volume **required** [VolumeDetail](#volumedetail)

### ImportVolumeResult
* ImportVolumeResult `object`: Contains the output for ImportVolume.
  * ConversionTask [ConversionTask](#conversiontask)

### ImportVolumeTaskDetails
* ImportVolumeTaskDetails `object`: Describes an import volume task.
  * AvailabilityZone **required** [String](#string)
  * BytesConverted **required** [Long](#long)
  * Description [String](#string)
  * Image **required** [DiskImageDescription](#diskimagedescription)
  * Volume **required** [DiskImageVolumeDescription](#diskimagevolumedescription)

### Instance
* Instance `object`: Describes an instance.
  * AmiLaunchIndex [Integer](#integer)
  * Architecture [ArchitectureValues](#architecturevalues)
  * BlockDeviceMappings [InstanceBlockDeviceMappingList](#instanceblockdevicemappinglist)
  * ClientToken [String](#string)
  * EbsOptimized [Boolean](#boolean)
  * ElasticGpuAssociations [ElasticGpuAssociationList](#elasticgpuassociationlist)
  * EnaSupport [Boolean](#boolean)
  * Hypervisor [HypervisorType](#hypervisortype)
  * IamInstanceProfile [IamInstanceProfile](#iaminstanceprofile)
  * ImageId [String](#string)
  * InstanceId [String](#string)
  * InstanceLifecycle [InstanceLifecycleType](#instancelifecycletype)
  * InstanceType [InstanceType](#instancetype)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * LaunchTime [DateTime](#datetime)
  * Monitoring [Monitoring](#monitoring)
  * NetworkInterfaces [InstanceNetworkInterfaceList](#instancenetworkinterfacelist)
  * Placement [Placement](#placement)
  * Platform [PlatformValues](#platformvalues)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)
  * ProductCodes [ProductCodeList](#productcodelist)
  * PublicDnsName [String](#string)
  * PublicIpAddress [String](#string)
  * RamdiskId [String](#string)
  * RootDeviceName [String](#string)
  * RootDeviceType [DeviceType](#devicetype)
  * SecurityGroups [GroupIdentifierList](#groupidentifierlist)
  * SourceDestCheck [Boolean](#boolean)
  * SpotInstanceRequestId [String](#string)
  * SriovNetSupport [String](#string)
  * State [InstanceState](#instancestate)
  * StateReason [StateReason](#statereason)
  * StateTransitionReason [String](#string)
  * SubnetId [String](#string)
  * Tags [TagList](#taglist)
  * VirtualizationType [VirtualizationType](#virtualizationtype)
  * VpcId [String](#string)

### InstanceAttribute
* InstanceAttribute `object`: Describes an instance attribute.
  * BlockDeviceMappings [InstanceBlockDeviceMappingList](#instanceblockdevicemappinglist)
  * DisableApiTermination [AttributeBooleanValue](#attributebooleanvalue)
  * EbsOptimized [AttributeBooleanValue](#attributebooleanvalue)
  * EnaSupport [AttributeBooleanValue](#attributebooleanvalue)
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * InstanceId [String](#string)
  * InstanceInitiatedShutdownBehavior [AttributeValue](#attributevalue)
  * InstanceType [AttributeValue](#attributevalue)
  * KernelId [AttributeValue](#attributevalue)
  * ProductCodes [ProductCodeList](#productcodelist)
  * RamdiskId [AttributeValue](#attributevalue)
  * RootDeviceName [AttributeValue](#attributevalue)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)
  * SriovNetSupport [AttributeValue](#attributevalue)
  * UserData [AttributeValue](#attributevalue)

### InstanceAttributeName
* InstanceAttributeName `string` (values: instanceType, kernel, ramdisk, userData, disableApiTermination, instanceInitiatedShutdownBehavior, rootDeviceName, blockDeviceMapping, productCodes, sourceDestCheck, groupSet, ebsOptimized, sriovNetSupport, enaSupport)

### InstanceBlockDeviceMapping
* InstanceBlockDeviceMapping `object`: Describes a block device mapping.
  * DeviceName [String](#string)
  * Ebs [EbsInstanceBlockDevice](#ebsinstanceblockdevice)

### InstanceBlockDeviceMappingList
* InstanceBlockDeviceMappingList `array`
  * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)

### InstanceBlockDeviceMappingSpecification
* InstanceBlockDeviceMappingSpecification `object`: Describes a block device mapping entry.
  * DeviceName [String](#string)
  * Ebs [EbsInstanceBlockDeviceSpecification](#ebsinstanceblockdevicespecification)
  * NoDevice [String](#string)
  * VirtualName [String](#string)

### InstanceBlockDeviceMappingSpecificationList
* InstanceBlockDeviceMappingSpecificationList `array`
  * items [InstanceBlockDeviceMappingSpecification](#instanceblockdevicemappingspecification)

### InstanceCapacity
* InstanceCapacity `object`: Information about the instance type that the Dedicated Host supports.
  * AvailableCapacity [Integer](#integer)
  * InstanceType [String](#string)
  * TotalCapacity [Integer](#integer)

### InstanceCount
* InstanceCount `object`: Describes a Reserved Instance listing state.
  * InstanceCount [Integer](#integer)
  * State [ListingState](#listingstate)

### InstanceCountList
* InstanceCountList `array`
  * items [InstanceCount](#instancecount)

### InstanceExportDetails
* InstanceExportDetails `object`: Describes an instance to export.
  * InstanceId [String](#string)
  * TargetEnvironment [ExportEnvironment](#exportenvironment)

### InstanceHealthStatus
* InstanceHealthStatus `string` (values: healthy, unhealthy)

### InstanceIdSet
* InstanceIdSet `array`
  * items [String](#string)

### InstanceIdStringList
* InstanceIdStringList `array`
  * items [String](#string)

### InstanceInterruptionBehavior
* InstanceInterruptionBehavior `string` (values: stop, terminate)

### InstanceIpv6Address
* InstanceIpv6Address `object`: Describes an IPv6 address.
  * Ipv6Address [String](#string)

### InstanceIpv6AddressList
* InstanceIpv6AddressList `array`
  * items [InstanceIpv6Address](#instanceipv6address)

### InstanceLifecycleType
* InstanceLifecycleType `string` (values: spot, scheduled)

### InstanceList
* InstanceList `array`
  * items [Instance](#instance)

### InstanceMonitoring
* InstanceMonitoring `object`: Describes the monitoring of an instance.
  * InstanceId [String](#string)
  * Monitoring [Monitoring](#monitoring)

### InstanceMonitoringList
* InstanceMonitoringList `array`
  * items [InstanceMonitoring](#instancemonitoring)

### InstanceNetworkInterface
* InstanceNetworkInterface `object`: Describes a network interface.
  * Association [InstanceNetworkInterfaceAssociation](#instancenetworkinterfaceassociation)
  * Attachment [InstanceNetworkInterfaceAttachment](#instancenetworkinterfaceattachment)
  * Description [String](#string)
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * MacAddress [String](#string)
  * NetworkInterfaceId [String](#string)
  * OwnerId [String](#string)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddresses [InstancePrivateIpAddressList](#instanceprivateipaddresslist)
  * SourceDestCheck [Boolean](#boolean)
  * Status [NetworkInterfaceStatus](#networkinterfacestatus)
  * SubnetId [String](#string)
  * VpcId [String](#string)

### InstanceNetworkInterfaceAssociation
* InstanceNetworkInterfaceAssociation `object`: Describes association information for an Elastic IP address (IPv4).
  * IpOwnerId [String](#string)
  * PublicDnsName [String](#string)
  * PublicIp [String](#string)

### InstanceNetworkInterfaceAttachment
* InstanceNetworkInterfaceAttachment `object`: Describes a network interface attachment.
  * AttachTime [DateTime](#datetime)
  * AttachmentId [String](#string)
  * DeleteOnTermination [Boolean](#boolean)
  * DeviceIndex [Integer](#integer)
  * Status [AttachmentStatus](#attachmentstatus)

### InstanceNetworkInterfaceList
* InstanceNetworkInterfaceList `array`
  * items [InstanceNetworkInterface](#instancenetworkinterface)

### InstanceNetworkInterfaceSpecification
* InstanceNetworkInterfaceSpecification `object`: Describes a network interface.
  * AssociatePublicIpAddress [Boolean](#boolean)
  * DeleteOnTermination [Boolean](#boolean)
  * Description [String](#string)
  * DeviceIndex [Integer](#integer)
  * Groups [SecurityGroupIdStringList](#securitygroupidstringlist)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * NetworkInterfaceId [String](#string)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddresses [PrivateIpAddressSpecificationList](#privateipaddressspecificationlist)
  * SecondaryPrivateIpAddressCount [Integer](#integer)
  * SubnetId [String](#string)

### InstanceNetworkInterfaceSpecificationList
* InstanceNetworkInterfaceSpecificationList `array`
  * items [InstanceNetworkInterfaceSpecification](#instancenetworkinterfacespecification)

### InstancePrivateIpAddress
* InstancePrivateIpAddress `object`: Describes a private IPv4 address.
  * Association [InstanceNetworkInterfaceAssociation](#instancenetworkinterfaceassociation)
  * Primary [Boolean](#boolean)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)

### InstancePrivateIpAddressList
* InstancePrivateIpAddressList `array`
  * items [InstancePrivateIpAddress](#instanceprivateipaddress)

### InstanceState
* InstanceState `object`: Describes the current state of an instance.
  * Code [Integer](#integer)
  * Name [InstanceStateName](#instancestatename)

### InstanceStateChange
* InstanceStateChange `object`: Describes an instance state change.
  * CurrentState [InstanceState](#instancestate)
  * InstanceId [String](#string)
  * PreviousState [InstanceState](#instancestate)

### InstanceStateChangeList
* InstanceStateChangeList `array`
  * items [InstanceStateChange](#instancestatechange)

### InstanceStateName
* InstanceStateName `string` (values: pending, running, shutting-down, terminated, stopping, stopped)

### InstanceStatus
* InstanceStatus `object`: Describes the status of an instance.
  * AvailabilityZone [String](#string)
  * Events [InstanceStatusEventList](#instancestatuseventlist)
  * InstanceId [String](#string)
  * InstanceState [InstanceState](#instancestate)
  * InstanceStatus [InstanceStatusSummary](#instancestatussummary)
  * SystemStatus [InstanceStatusSummary](#instancestatussummary)

### InstanceStatusDetails
* InstanceStatusDetails `object`: Describes the instance status.
  * ImpairedSince [DateTime](#datetime)
  * Name [StatusName](#statusname)
  * Status [StatusType](#statustype)

### InstanceStatusDetailsList
* InstanceStatusDetailsList `array`
  * items [InstanceStatusDetails](#instancestatusdetails)

### InstanceStatusEvent
* InstanceStatusEvent `object`: Describes a scheduled event for an instance.
  * Code [EventCode](#eventcode)
  * Description [String](#string)
  * NotAfter [DateTime](#datetime)
  * NotBefore [DateTime](#datetime)

### InstanceStatusEventList
* InstanceStatusEventList `array`
  * items [InstanceStatusEvent](#instancestatusevent)

### InstanceStatusList
* InstanceStatusList `array`
  * items [InstanceStatus](#instancestatus)

### InstanceStatusSummary
* InstanceStatusSummary `object`: Describes the status of an instance.
  * Details [InstanceStatusDetailsList](#instancestatusdetailslist)
  * Status [SummaryStatus](#summarystatus)

### InstanceType
* InstanceType `string` (values: t1.micro, t2.nano, t2.micro, t2.small, t2.medium, t2.large, t2.xlarge, t2.2xlarge, m1.small, m1.medium, m1.large, m1.xlarge, m3.medium, m3.large, m3.xlarge, m3.2xlarge, m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m4.16xlarge, m2.xlarge, m2.2xlarge, m2.4xlarge, cr1.8xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, x1.16xlarge, x1.32xlarge, x1e.32xlarge, i2.xlarge, i2.2xlarge, i2.4xlarge, i2.8xlarge, i3.large, i3.xlarge, i3.2xlarge, i3.4xlarge, i3.8xlarge, i3.16xlarge, hi1.4xlarge, hs1.8xlarge, c1.medium, c1.xlarge, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c5.large, c5.xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, c5.18xlarge, cc1.4xlarge, cc2.8xlarge, g2.2xlarge, g2.8xlarge, g3.4xlarge, g3.8xlarge, g3.16xlarge, cg1.4xlarge, p2.xlarge, p2.8xlarge, p2.16xlarge, p3.2xlarge, p3.8xlarge, p3.16xlarge, d2.xlarge, d2.2xlarge, d2.4xlarge, d2.8xlarge, f1.2xlarge, f1.16xlarge)

### InstanceTypeList
* InstanceTypeList `array`
  * items [InstanceType](#instancetype)

### Integer
* Integer `integer`

### InterfacePermissionType
* InterfacePermissionType `string` (values: INSTANCE-ATTACH, EIP-ASSOCIATE)

### InternetGateway
* InternetGateway `object`: Describes an Internet gateway.
  * Attachments [InternetGatewayAttachmentList](#internetgatewayattachmentlist)
  * InternetGatewayId [String](#string)
  * Tags [TagList](#taglist)

### InternetGatewayAttachment
* InternetGatewayAttachment `object`: Describes the attachment of a VPC to an Internet gateway or an egress-only Internet gateway.
  * State [AttachmentStatus](#attachmentstatus)
  * VpcId [String](#string)

### InternetGatewayAttachmentList
* InternetGatewayAttachmentList `array`
  * items [InternetGatewayAttachment](#internetgatewayattachment)

### InternetGatewayList
* InternetGatewayList `array`
  * items [InternetGateway](#internetgateway)

### IpPermission
* IpPermission `object`: Describes a set of permissions for a security group rule.
  * FromPort [Integer](#integer)
  * IpProtocol [String](#string)
  * IpRanges [IpRangeList](#iprangelist)
  * Ipv6Ranges [Ipv6RangeList](#ipv6rangelist)
  * PrefixListIds [PrefixListIdList](#prefixlistidlist)
  * ToPort [Integer](#integer)
  * UserIdGroupPairs [UserIdGroupPairList](#useridgrouppairlist)

### IpPermissionList
* IpPermissionList `array`
  * items [IpPermission](#ippermission)

### IpRange
* IpRange `object`: Describes an IPv4 range.
  * CidrIp [String](#string)
  * Description [String](#string)

### IpRangeList
* IpRangeList `array`
  * items [IpRange](#iprange)

### IpRanges
* IpRanges `array`
  * items [String](#string)

### Ipv6Address
* Ipv6Address `string`

### Ipv6AddressList
* Ipv6AddressList `array`
  * items [String](#string)

### Ipv6CidrBlock
* Ipv6CidrBlock `object`: Describes an IPv6 CIDR block.
  * Ipv6CidrBlock [String](#string)

### Ipv6CidrBlockSet
* Ipv6CidrBlockSet `array`
  * items [Ipv6CidrBlock](#ipv6cidrblock)

### Ipv6Range
* Ipv6Range `object`: [EC2-VPC only] Describes an IPv6 range.
  * CidrIpv6 [String](#string)
  * Description [String](#string)

### Ipv6RangeList
* Ipv6RangeList `array`
  * items [Ipv6Range](#ipv6range)

### KeyNameStringList
* KeyNameStringList `array`
  * items [String](#string)

### KeyPair
* KeyPair `object`: Describes a key pair.
  * KeyFingerprint [String](#string)
  * KeyMaterial [String](#string)
  * KeyName [String](#string)

### KeyPairInfo
* KeyPairInfo `object`: Describes a key pair.
  * KeyFingerprint [String](#string)
  * KeyName [String](#string)

### KeyPairList
* KeyPairList `array`
  * items [KeyPairInfo](#keypairinfo)

### LaunchPermission
* LaunchPermission `object`: Describes a launch permission.
  * Group [PermissionGroup](#permissiongroup)
  * UserId [String](#string)

### LaunchPermissionList
* LaunchPermissionList `array`
  * items [LaunchPermission](#launchpermission)

### LaunchPermissionModifications
* LaunchPermissionModifications `object`: Describes a launch permission modification.
  * Add [LaunchPermissionList](#launchpermissionlist)
  * Remove [LaunchPermissionList](#launchpermissionlist)

### LaunchSpecification
* LaunchSpecification `object`: Describes the launch specification for an instance.
  * AddressingType [String](#string)
  * BlockDeviceMappings [BlockDeviceMappingList](#blockdevicemappinglist)
  * EbsOptimized [Boolean](#boolean)
  * IamInstanceProfile [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * ImageId [String](#string)
  * InstanceType [InstanceType](#instancetype)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * Monitoring [RunInstancesMonitoringEnabled](#runinstancesmonitoringenabled)
  * NetworkInterfaces [InstanceNetworkInterfaceSpecificationList](#instancenetworkinterfacespecificationlist)
  * Placement [SpotPlacement](#spotplacement)
  * RamdiskId [String](#string)
  * SecurityGroups [GroupIdentifierList](#groupidentifierlist)
  * SubnetId [String](#string)
  * UserData [String](#string)

### LaunchSpecsList
* LaunchSpecsList `array`
  * items [SpotFleetLaunchSpecification](#spotfleetlaunchspecification)

### ListingState
* ListingState `string` (values: available, sold, cancelled, pending)

### ListingStatus
* ListingStatus `string` (values: active, pending, cancelled, closed)

### LoadPermission
* LoadPermission `object`: Describes a load permission.
  * Group [PermissionGroup](#permissiongroup)
  * UserId [String](#string)

### LoadPermissionList
* LoadPermissionList `array`
  * items [LoadPermission](#loadpermission)

### LoadPermissionListRequest
* LoadPermissionListRequest `array`
  * items [LoadPermissionRequest](#loadpermissionrequest)

### LoadPermissionModifications
* LoadPermissionModifications `object`: Describes modifications to the load permissions of an Amazon FPGA image (AFI).
  * Add [LoadPermissionListRequest](#loadpermissionlistrequest)
  * Remove [LoadPermissionListRequest](#loadpermissionlistrequest)

### LoadPermissionRequest
* LoadPermissionRequest `object`: Describes a load permission.
  * Group [PermissionGroup](#permissiongroup)
  * UserId [String](#string)

### Long
* Long `integer`

### MaxResults
* MaxResults `integer`

### ModifyFpgaImageAttributeRequest
* ModifyFpgaImageAttributeRequest `object`
  * Attribute [FpgaImageAttributeName](#fpgaimageattributename)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)
  * LoadPermission [LoadPermissionModifications](#loadpermissionmodifications)
  * Name [String](#string)
  * OperationType [OperationType](#operationtype)
  * ProductCodes [ProductCodeStringList](#productcodestringlist)
  * UserGroups [UserGroupStringList](#usergroupstringlist)
  * UserIds [UserIdStringList](#useridstringlist)

### ModifyFpgaImageAttributeResult
* ModifyFpgaImageAttributeResult `object`
  * FpgaImageAttribute [FpgaImageAttribute](#fpgaimageattribute)

### ModifyHostsRequest
* ModifyHostsRequest `object`: Contains the parameters for ModifyHosts.
  * AutoPlacement **required** [AutoPlacement](#autoplacement)
  * HostIds **required** [RequestHostIdList](#requesthostidlist)

### ModifyHostsResult
* ModifyHostsResult `object`: Contains the output of ModifyHosts.
  * Successful [ResponseHostIdList](#responsehostidlist)
  * Unsuccessful [UnsuccessfulItemList](#unsuccessfulitemlist)

### ModifyIdFormatRequest
* ModifyIdFormatRequest `object`: Contains the parameters of ModifyIdFormat.
  * Resource **required** [String](#string)
  * UseLongIds **required** [Boolean](#boolean)

### ModifyIdentityIdFormatRequest
* ModifyIdentityIdFormatRequest `object`: Contains the parameters of ModifyIdentityIdFormat.
  * PrincipalArn **required** [String](#string)
  * Resource **required** [String](#string)
  * UseLongIds **required** [Boolean](#boolean)

### ModifyImageAttributeRequest
* ModifyImageAttributeRequest `object`: Contains the parameters for ModifyImageAttribute.
  * Attribute [String](#string)
  * Description [AttributeValue](#attributevalue)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)
  * LaunchPermission [LaunchPermissionModifications](#launchpermissionmodifications)
  * OperationType [OperationType](#operationtype)
  * ProductCodes [ProductCodeStringList](#productcodestringlist)
  * UserGroups [UserGroupStringList](#usergroupstringlist)
  * UserIds [UserIdStringList](#useridstringlist)
  * Value [String](#string)

### ModifyInstanceAttributeRequest
* ModifyInstanceAttributeRequest `object`: Contains the parameters for ModifyInstanceAttribute.
  * Attribute [InstanceAttributeName](#instanceattributename)
  * BlockDeviceMappings [InstanceBlockDeviceMappingSpecificationList](#instanceblockdevicemappingspecificationlist)
  * DisableApiTermination [AttributeBooleanValue](#attributebooleanvalue)
  * DryRun [Boolean](#boolean)
  * EbsOptimized [AttributeBooleanValue](#attributebooleanvalue)
  * EnaSupport [AttributeBooleanValue](#attributebooleanvalue)
  * Groups [GroupIdStringList](#groupidstringlist)
  * InstanceId **required** [String](#string)
  * InstanceInitiatedShutdownBehavior [AttributeValue](#attributevalue)
  * InstanceType [AttributeValue](#attributevalue)
  * Kernel [AttributeValue](#attributevalue)
  * Ramdisk [AttributeValue](#attributevalue)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)
  * SriovNetSupport [AttributeValue](#attributevalue)
  * UserData [BlobAttributeValue](#blobattributevalue)
  * Value [String](#string)

### ModifyInstancePlacementRequest
* ModifyInstancePlacementRequest `object`: Contains the parameters for ModifyInstancePlacement.
  * Affinity [Affinity](#affinity)
  * HostId [String](#string)
  * InstanceId **required** [String](#string)
  * Tenancy [HostTenancy](#hosttenancy)

### ModifyInstancePlacementResult
* ModifyInstancePlacementResult `object`: Contains the output of ModifyInstancePlacement.
  * Return [Boolean](#boolean)

### ModifyNetworkInterfaceAttributeRequest
* ModifyNetworkInterfaceAttributeRequest `object`: Contains the parameters for ModifyNetworkInterfaceAttribute.
  * Attachment [NetworkInterfaceAttachmentChanges](#networkinterfaceattachmentchanges)
  * Description [AttributeValue](#attributevalue)
  * DryRun [Boolean](#boolean)
  * Groups [SecurityGroupIdStringList](#securitygroupidstringlist)
  * NetworkInterfaceId **required** [String](#string)
  * SourceDestCheck [AttributeBooleanValue](#attributebooleanvalue)

### ModifyReservedInstancesRequest
* ModifyReservedInstancesRequest `object`: Contains the parameters for ModifyReservedInstances.
  * ClientToken [String](#string)
  * ReservedInstancesIds **required** [ReservedInstancesIdStringList](#reservedinstancesidstringlist)
  * TargetConfigurations **required** [ReservedInstancesConfigurationList](#reservedinstancesconfigurationlist)

### ModifyReservedInstancesResult
* ModifyReservedInstancesResult `object`: Contains the output of ModifyReservedInstances.
  * ReservedInstancesModificationId [String](#string)

### ModifySnapshotAttributeRequest
* ModifySnapshotAttributeRequest `object`: Contains the parameters for ModifySnapshotAttribute.
  * Attribute [SnapshotAttributeName](#snapshotattributename)
  * CreateVolumePermission [CreateVolumePermissionModifications](#createvolumepermissionmodifications)
  * DryRun [Boolean](#boolean)
  * GroupNames [GroupNameStringList](#groupnamestringlist)
  * OperationType [OperationType](#operationtype)
  * SnapshotId **required** [String](#string)
  * UserIds [UserIdStringList](#useridstringlist)

### ModifySpotFleetRequestRequest
* ModifySpotFleetRequestRequest `object`: Contains the parameters for ModifySpotFleetRequest.
  * ExcessCapacityTerminationPolicy [ExcessCapacityTerminationPolicy](#excesscapacityterminationpolicy)
  * SpotFleetRequestId **required** [String](#string)
  * TargetCapacity [Integer](#integer)

### ModifySpotFleetRequestResponse
* ModifySpotFleetRequestResponse `object`: Contains the output of ModifySpotFleetRequest.
  * Return [Boolean](#boolean)

### ModifySubnetAttributeRequest
* ModifySubnetAttributeRequest `object`: Contains the parameters for ModifySubnetAttribute.
  * AssignIpv6AddressOnCreation [AttributeBooleanValue](#attributebooleanvalue)
  * MapPublicIpOnLaunch [AttributeBooleanValue](#attributebooleanvalue)
  * SubnetId **required** [String](#string)

### ModifyVolumeAttributeRequest
* ModifyVolumeAttributeRequest `object`: Contains the parameters for ModifyVolumeAttribute.
  * AutoEnableIO [AttributeBooleanValue](#attributebooleanvalue)
  * DryRun [Boolean](#boolean)
  * VolumeId **required** [String](#string)

### ModifyVolumeRequest
* ModifyVolumeRequest `object`
  * DryRun [Boolean](#boolean)
  * Iops [Integer](#integer)
  * Size [Integer](#integer)
  * VolumeId **required** [String](#string)
  * VolumeType [VolumeType](#volumetype)

### ModifyVolumeResult
* ModifyVolumeResult `object`
  * VolumeModification [VolumeModification](#volumemodification)

### ModifyVpcAttributeRequest
* ModifyVpcAttributeRequest `object`: Contains the parameters for ModifyVpcAttribute.
  * EnableDnsHostnames [AttributeBooleanValue](#attributebooleanvalue)
  * EnableDnsSupport [AttributeBooleanValue](#attributebooleanvalue)
  * VpcId **required** [String](#string)

### ModifyVpcEndpointRequest
* ModifyVpcEndpointRequest `object`: Contains the parameters for ModifyVpcEndpoint.
  * AddRouteTableIds [ValueStringList](#valuestringlist)
  * AddSecurityGroupIds [ValueStringList](#valuestringlist)
  * AddSubnetIds [ValueStringList](#valuestringlist)
  * DryRun [Boolean](#boolean)
  * PolicyDocument [String](#string)
  * PrivateDnsEnabled [Boolean](#boolean)
  * RemoveRouteTableIds [ValueStringList](#valuestringlist)
  * RemoveSecurityGroupIds [ValueStringList](#valuestringlist)
  * RemoveSubnetIds [ValueStringList](#valuestringlist)
  * ResetPolicy [Boolean](#boolean)
  * VpcEndpointId **required** [String](#string)

### ModifyVpcEndpointResult
* ModifyVpcEndpointResult `object`
  * Return [Boolean](#boolean)

### ModifyVpcPeeringConnectionOptionsRequest
* ModifyVpcPeeringConnectionOptionsRequest `object`
  * AccepterPeeringConnectionOptions [PeeringConnectionOptionsRequest](#peeringconnectionoptionsrequest)
  * DryRun [Boolean](#boolean)
  * RequesterPeeringConnectionOptions [PeeringConnectionOptionsRequest](#peeringconnectionoptionsrequest)
  * VpcPeeringConnectionId **required** [String](#string)

### ModifyVpcPeeringConnectionOptionsResult
* ModifyVpcPeeringConnectionOptionsResult `object`
  * AccepterPeeringConnectionOptions [PeeringConnectionOptions](#peeringconnectionoptions)
  * RequesterPeeringConnectionOptions [PeeringConnectionOptions](#peeringconnectionoptions)

### ModifyVpcTenancyRequest
* ModifyVpcTenancyRequest `object`: Contains the parameters for ModifyVpcTenancy.
  * DryRun [Boolean](#boolean)
  * InstanceTenancy **required** [VpcTenancy](#vpctenancy)
  * VpcId **required** [String](#string)

### ModifyVpcTenancyResult
* ModifyVpcTenancyResult `object`: Contains the output of ModifyVpcTenancy.
  * ReturnValue [Boolean](#boolean)

### MonitorInstancesRequest
* MonitorInstancesRequest `object`: Contains the parameters for MonitorInstances.
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### MonitorInstancesResult
* MonitorInstancesResult `object`: Contains the output of MonitorInstances.
  * InstanceMonitorings [InstanceMonitoringList](#instancemonitoringlist)

### Monitoring
* Monitoring `object`: Describes the monitoring of an instance.
  * State [MonitoringState](#monitoringstate)

### MonitoringState
* MonitoringState `string` (values: disabled, disabling, enabled, pending)

### MoveAddressToVpcRequest
* MoveAddressToVpcRequest `object`: Contains the parameters for MoveAddressToVpc.
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)

### MoveAddressToVpcResult
* MoveAddressToVpcResult `object`: Contains the output of MoveAddressToVpc.
  * AllocationId [String](#string)
  * Status [Status](#status)

### MoveStatus
* MoveStatus `string` (values: movingToVpc, restoringToClassic)

### MovingAddressStatus
* MovingAddressStatus `object`: Describes the status of a moving Elastic IP address.
  * MoveStatus [MoveStatus](#movestatus)
  * PublicIp [String](#string)

### MovingAddressStatusSet
* MovingAddressStatusSet `array`
  * items [MovingAddressStatus](#movingaddressstatus)

### NatGateway
* NatGateway `object`: Describes a NAT gateway.
  * CreateTime [DateTime](#datetime)
  * DeleteTime [DateTime](#datetime)
  * FailureCode [String](#string)
  * FailureMessage [String](#string)
  * NatGatewayAddresses [NatGatewayAddressList](#natgatewayaddresslist)
  * NatGatewayId [String](#string)
  * ProvisionedBandwidth [ProvisionedBandwidth](#provisionedbandwidth)
  * State [NatGatewayState](#natgatewaystate)
  * SubnetId [String](#string)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### NatGatewayAddress
* NatGatewayAddress `object`: Describes the IP addresses and network interface associated with a NAT gateway.
  * AllocationId [String](#string)
  * NetworkInterfaceId [String](#string)
  * PrivateIp [String](#string)
  * PublicIp [String](#string)

### NatGatewayAddressList
* NatGatewayAddressList `array`
  * items [NatGatewayAddress](#natgatewayaddress)

### NatGatewayList
* NatGatewayList `array`
  * items [NatGateway](#natgateway)

### NatGatewayState
* NatGatewayState `string` (values: pending, failed, available, deleting, deleted)

### NetworkAcl
* NetworkAcl `object`: Describes a network ACL.
  * Associations [NetworkAclAssociationList](#networkaclassociationlist)
  * Entries [NetworkAclEntryList](#networkaclentrylist)
  * IsDefault [Boolean](#boolean)
  * NetworkAclId [String](#string)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### NetworkAclAssociation
* NetworkAclAssociation `object`: Describes an association between a network ACL and a subnet.
  * NetworkAclAssociationId [String](#string)
  * NetworkAclId [String](#string)
  * SubnetId [String](#string)

### NetworkAclAssociationList
* NetworkAclAssociationList `array`
  * items [NetworkAclAssociation](#networkaclassociation)

### NetworkAclEntry
* NetworkAclEntry `object`: Describes an entry in a network ACL.
  * CidrBlock [String](#string)
  * Egress [Boolean](#boolean)
  * IcmpTypeCode [IcmpTypeCode](#icmptypecode)
  * Ipv6CidrBlock [String](#string)
  * PortRange [PortRange](#portrange)
  * Protocol [String](#string)
  * RuleAction [RuleAction](#ruleaction)
  * RuleNumber [Integer](#integer)

### NetworkAclEntryList
* NetworkAclEntryList `array`
  * items [NetworkAclEntry](#networkaclentry)

### NetworkAclList
* NetworkAclList `array`
  * items [NetworkAcl](#networkacl)

### NetworkInterface
* NetworkInterface `object`: Describes a network interface.
  * Association [NetworkInterfaceAssociation](#networkinterfaceassociation)
  * Attachment [NetworkInterfaceAttachment](#networkinterfaceattachment)
  * AvailabilityZone [String](#string)
  * Description [String](#string)
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * InterfaceType [NetworkInterfaceType](#networkinterfacetype)
  * Ipv6Addresses [NetworkInterfaceIpv6AddressesList](#networkinterfaceipv6addresseslist)
  * MacAddress [String](#string)
  * NetworkInterfaceId [String](#string)
  * OwnerId [String](#string)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddresses [NetworkInterfacePrivateIpAddressList](#networkinterfaceprivateipaddresslist)
  * RequesterId [String](#string)
  * RequesterManaged [Boolean](#boolean)
  * SourceDestCheck [Boolean](#boolean)
  * Status [NetworkInterfaceStatus](#networkinterfacestatus)
  * SubnetId [String](#string)
  * TagSet [TagList](#taglist)
  * VpcId [String](#string)

### NetworkInterfaceAssociation
* NetworkInterfaceAssociation `object`: Describes association information for an Elastic IP address (IPv4 only).
  * AllocationId [String](#string)
  * AssociationId [String](#string)
  * IpOwnerId [String](#string)
  * PublicDnsName [String](#string)
  * PublicIp [String](#string)

### NetworkInterfaceAttachment
* NetworkInterfaceAttachment `object`: Describes a network interface attachment.
  * AttachTime [DateTime](#datetime)
  * AttachmentId [String](#string)
  * DeleteOnTermination [Boolean](#boolean)
  * DeviceIndex [Integer](#integer)
  * InstanceId [String](#string)
  * InstanceOwnerId [String](#string)
  * Status [AttachmentStatus](#attachmentstatus)

### NetworkInterfaceAttachmentChanges
* NetworkInterfaceAttachmentChanges `object`: Describes an attachment change.
  * AttachmentId [String](#string)
  * DeleteOnTermination [Boolean](#boolean)

### NetworkInterfaceAttribute
* NetworkInterfaceAttribute `string` (values: description, groupSet, sourceDestCheck, attachment)

### NetworkInterfaceIdList
* NetworkInterfaceIdList `array`
  * items [String](#string)

### NetworkInterfaceIpv6Address
* NetworkInterfaceIpv6Address `object`: Describes an IPv6 address associated with a network interface.
  * Ipv6Address [String](#string)

### NetworkInterfaceIpv6AddressesList
* NetworkInterfaceIpv6AddressesList `array`
  * items [NetworkInterfaceIpv6Address](#networkinterfaceipv6address)

### NetworkInterfaceList
* NetworkInterfaceList `array`
  * items [NetworkInterface](#networkinterface)

### NetworkInterfacePermission
* NetworkInterfacePermission `object`: Describes a permission for a network interface.
  * AwsAccountId [String](#string)
  * AwsService [String](#string)
  * NetworkInterfaceId [String](#string)
  * NetworkInterfacePermissionId [String](#string)
  * Permission [InterfacePermissionType](#interfacepermissiontype)
  * PermissionState [NetworkInterfacePermissionState](#networkinterfacepermissionstate)

### NetworkInterfacePermissionIdList
* NetworkInterfacePermissionIdList `array`
  * items [String](#string)

### NetworkInterfacePermissionList
* NetworkInterfacePermissionList `array`
  * items [NetworkInterfacePermission](#networkinterfacepermission)

### NetworkInterfacePermissionState
* NetworkInterfacePermissionState `object`: Describes the state of a network interface permission.
  * State [NetworkInterfacePermissionStateCode](#networkinterfacepermissionstatecode)
  * StatusMessage [String](#string)

### NetworkInterfacePermissionStateCode
* NetworkInterfacePermissionStateCode `string` (values: pending, granted, revoking, revoked)

### NetworkInterfacePrivateIpAddress
* NetworkInterfacePrivateIpAddress `object`: Describes the private IPv4 address of a network interface.
  * Association [NetworkInterfaceAssociation](#networkinterfaceassociation)
  * Primary [Boolean](#boolean)
  * PrivateDnsName [String](#string)
  * PrivateIpAddress [String](#string)

### NetworkInterfacePrivateIpAddressList
* NetworkInterfacePrivateIpAddressList `array`
  * items [NetworkInterfacePrivateIpAddress](#networkinterfaceprivateipaddress)

### NetworkInterfaceStatus
* NetworkInterfaceStatus `string` (values: available, attaching, in-use, detaching)

### NetworkInterfaceType
* NetworkInterfaceType `string` (values: interface, natGateway)

### NewDhcpConfiguration
* NewDhcpConfiguration `object`
  * Key [String](#string)
  * Values [ValueStringList](#valuestringlist)

### NewDhcpConfigurationList
* NewDhcpConfigurationList `array`
  * items [NewDhcpConfiguration](#newdhcpconfiguration)

### NextToken
* NextToken `string`

### OccurrenceDayRequestSet
* OccurrenceDayRequestSet `array`
  * items [Integer](#integer)

### OccurrenceDaySet
* OccurrenceDaySet `array`
  * items [Integer](#integer)

### OfferingClassType
* OfferingClassType `string` (values: standard, convertible)

### OfferingTypeValues
* OfferingTypeValues `string` (values: Heavy Utilization, Medium Utilization, Light Utilization, No Upfront, Partial Upfront, All Upfront)

### OperationType
* OperationType `string` (values: add, remove)

### OwnerStringList
* OwnerStringList `array`
  * items [String](#string)

### PaymentOption
* PaymentOption `string` (values: AllUpfront, PartialUpfront, NoUpfront)

### PciId
* PciId `object`: Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
  * DeviceId [String](#string)
  * SubsystemId [String](#string)
  * SubsystemVendorId [String](#string)
  * VendorId [String](#string)

### PeeringConnectionOptions
* PeeringConnectionOptions `object`: Describes the VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalClassicLinkToRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalVpcToRemoteClassicLink [Boolean](#boolean)

### PeeringConnectionOptionsRequest
* PeeringConnectionOptionsRequest `object`: The VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalClassicLinkToRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalVpcToRemoteClassicLink [Boolean](#boolean)

### PermissionGroup
* PermissionGroup `string` (values: all)

### Placement
* Placement `object`: Describes the placement of an instance.
  * Affinity [String](#string)
  * AvailabilityZone [String](#string)
  * GroupName [String](#string)
  * HostId [String](#string)
  * SpreadDomain [String](#string)
  * Tenancy [Tenancy](#tenancy)

### PlacementGroup
* PlacementGroup `object`: Describes a placement group.
  * GroupName [String](#string)
  * State [PlacementGroupState](#placementgroupstate)
  * Strategy [PlacementStrategy](#placementstrategy)

### PlacementGroupList
* PlacementGroupList `array`
  * items [PlacementGroup](#placementgroup)

### PlacementGroupState
* PlacementGroupState `string` (values: pending, available, deleting, deleted)

### PlacementGroupStringList
* PlacementGroupStringList `array`
  * items [String](#string)

### PlacementStrategy
* PlacementStrategy `string` (values: cluster)

### PlatformValues
* PlatformValues `string` (values: Windows)

### PortRange
* PortRange `object`: Describes a range of ports.
  * From [Integer](#integer)
  * To [Integer](#integer)

### PrefixList
* PrefixList `object`: Describes prefixes for AWS services.
  * Cidrs [ValueStringList](#valuestringlist)
  * PrefixListId [String](#string)
  * PrefixListName [String](#string)

### PrefixListId
* PrefixListId `object`: The ID of the prefix.
  * Description [String](#string)
  * PrefixListId [String](#string)

### PrefixListIdList
* PrefixListIdList `array`
  * items [PrefixListId](#prefixlistid)

### PrefixListIdSet
* PrefixListIdSet `array`
  * items [String](#string)

### PrefixListSet
* PrefixListSet `array`
  * items [PrefixList](#prefixlist)

### PriceSchedule
* PriceSchedule `object`: Describes the price for a Reserved Instance.
  * Active [Boolean](#boolean)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Price [Double](#double)
  * Term [Long](#long)

### PriceScheduleList
* PriceScheduleList `array`
  * items [PriceSchedule](#priceschedule)

### PriceScheduleSpecification
* PriceScheduleSpecification `object`: Describes the price for a Reserved Instance.
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Price [Double](#double)
  * Term [Long](#long)

### PriceScheduleSpecificationList
* PriceScheduleSpecificationList `array`
  * items [PriceScheduleSpecification](#priceschedulespecification)

### PricingDetail
* PricingDetail `object`: Describes a Reserved Instance offering.
  * Count [Integer](#integer)
  * Price [Double](#double)

### PricingDetailsList
* PricingDetailsList `array`
  * items [PricingDetail](#pricingdetail)

### PrivateIpAddressConfigSet
* PrivateIpAddressConfigSet `array`
  * items [ScheduledInstancesPrivateIpAddressConfig](#scheduledinstancesprivateipaddressconfig)

### PrivateIpAddressSpecification
* PrivateIpAddressSpecification `object`: Describes a secondary private IPv4 address for a network interface.
  * Primary [Boolean](#boolean)
  * PrivateIpAddress **required** [String](#string)

### PrivateIpAddressSpecificationList
* PrivateIpAddressSpecificationList `array`
  * items [PrivateIpAddressSpecification](#privateipaddressspecification)

### PrivateIpAddressStringList
* PrivateIpAddressStringList `array`
  * items [String](#string)

### ProductCode
* ProductCode `object`: Describes a product code.
  * ProductCodeId [String](#string)
  * ProductCodeType [ProductCodeValues](#productcodevalues)

### ProductCodeList
* ProductCodeList `array`
  * items [ProductCode](#productcode)

### ProductCodeStringList
* ProductCodeStringList `array`
  * items [String](#string)

### ProductCodeValues
* ProductCodeValues `string` (values: devpay, marketplace)

### ProductDescriptionList
* ProductDescriptionList `array`
  * items [String](#string)

### PropagatingVgw
* PropagatingVgw `object`: Describes a virtual private gateway propagating route.
  * GatewayId [String](#string)

### PropagatingVgwList
* PropagatingVgwList `array`
  * items [PropagatingVgw](#propagatingvgw)

### ProvisionedBandwidth
* ProvisionedBandwidth `object`: Reserved. If you need to sustain traffic greater than the <a href="http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
  * ProvisionTime [DateTime](#datetime)
  * Provisioned [String](#string)
  * RequestTime [DateTime](#datetime)
  * Requested [String](#string)
  * Status [String](#string)

### PublicIpStringList
* PublicIpStringList `array`
  * items [String](#string)

### Purchase
* Purchase `object`: Describes the result of the purchase.
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Duration [Integer](#integer)
  * HostIdSet [ResponseHostIdSet](#responsehostidset)
  * HostReservationId [String](#string)
  * HourlyPrice [String](#string)
  * InstanceFamily [String](#string)
  * PaymentOption [PaymentOption](#paymentoption)
  * UpfrontPrice [String](#string)

### PurchaseHostReservationRequest
* PurchaseHostReservationRequest `object`
  * ClientToken [String](#string)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * HostIdSet **required** [RequestHostIdSet](#requesthostidset)
  * LimitPrice [String](#string)
  * OfferingId **required** [String](#string)

### PurchaseHostReservationResult
* PurchaseHostReservationResult `object`
  * ClientToken [String](#string)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Purchase [PurchaseSet](#purchaseset)
  * TotalHourlyPrice [String](#string)
  * TotalUpfrontPrice [String](#string)

### PurchaseRequest
* PurchaseRequest `object`: Describes a request to purchase Scheduled Instances.
  * InstanceCount **required** [Integer](#integer)
  * PurchaseToken **required** [String](#string)

### PurchaseRequestSet
* PurchaseRequestSet `array`
  * items [PurchaseRequest](#purchaserequest)

### PurchaseReservedInstancesOfferingRequest
* PurchaseReservedInstancesOfferingRequest `object`: Contains the parameters for PurchaseReservedInstancesOffering.
  * DryRun [Boolean](#boolean)
  * InstanceCount **required** [Integer](#integer)
  * LimitPrice [ReservedInstanceLimitPrice](#reservedinstancelimitprice)
  * ReservedInstancesOfferingId **required** [String](#string)

### PurchaseReservedInstancesOfferingResult
* PurchaseReservedInstancesOfferingResult `object`: Contains the output of PurchaseReservedInstancesOffering.
  * ReservedInstancesId [String](#string)

### PurchaseScheduledInstancesRequest
* PurchaseScheduledInstancesRequest `object`: Contains the parameters for PurchaseScheduledInstances.
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * PurchaseRequests **required** [PurchaseRequestSet](#purchaserequestset)

### PurchaseScheduledInstancesResult
* PurchaseScheduledInstancesResult `object`: Contains the output of PurchaseScheduledInstances.
  * ScheduledInstanceSet [PurchasedScheduledInstanceSet](#purchasedscheduledinstanceset)

### PurchaseSet
* PurchaseSet `array`
  * items [Purchase](#purchase)

### PurchasedScheduledInstanceSet
* PurchasedScheduledInstanceSet `array`
  * items [ScheduledInstance](#scheduledinstance)

### RIProductDescription
* RIProductDescription `string` (values: Linux/UNIX, Linux/UNIX (Amazon VPC), Windows, Windows (Amazon VPC))

### ReasonCodesList
* ReasonCodesList `array`
  * items [ReportInstanceReasonCodes](#reportinstancereasoncodes)

### RebootInstancesRequest
* RebootInstancesRequest `object`: Contains the parameters for RebootInstances.
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### RecurringCharge
* RecurringCharge `object`: Describes a recurring charge.
  * Amount [Double](#double)
  * Frequency [RecurringChargeFrequency](#recurringchargefrequency)

### RecurringChargeFrequency
* RecurringChargeFrequency `string` (values: Hourly)

### RecurringChargesList
* RecurringChargesList `array`
  * items [RecurringCharge](#recurringcharge)

### Region
* Region `object`: Describes a region.
  * Endpoint [String](#string)
  * RegionName [String](#string)

### RegionList
* RegionList `array`
  * items [Region](#region)

### RegionNameStringList
* RegionNameStringList `array`
  * items [String](#string)

### RegisterImageRequest
* RegisterImageRequest `object`: Contains the parameters for RegisterImage.
  * Architecture [ArchitectureValues](#architecturevalues)
  * BillingProducts [BillingProductList](#billingproductlist)
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * EnaSupport [Boolean](#boolean)
  * ImageLocation [String](#string)
  * KernelId [String](#string)
  * Name **required** [String](#string)
  * RamdiskId [String](#string)
  * RootDeviceName [String](#string)
  * SriovNetSupport [String](#string)
  * VirtualizationType [String](#string)

### RegisterImageResult
* RegisterImageResult `object`: Contains the output of RegisterImage.
  * ImageId [String](#string)

### RejectVpcPeeringConnectionRequest
* RejectVpcPeeringConnectionRequest `object`: Contains the parameters for RejectVpcPeeringConnection.
  * DryRun [Boolean](#boolean)
  * VpcPeeringConnectionId **required** [String](#string)

### RejectVpcPeeringConnectionResult
* RejectVpcPeeringConnectionResult `object`: Contains the output of RejectVpcPeeringConnection.
  * Return [Boolean](#boolean)

### ReleaseAddressRequest
* ReleaseAddressRequest `object`: Contains the parameters for ReleaseAddress.
  * AllocationId [String](#string)
  * DryRun [Boolean](#boolean)
  * PublicIp [String](#string)

### ReleaseHostsRequest
* ReleaseHostsRequest `object`: Contains the parameters for ReleaseHosts.
  * HostIds **required** [RequestHostIdList](#requesthostidlist)

### ReleaseHostsResult
* ReleaseHostsResult `object`: Contains the output of ReleaseHosts.
  * Successful [ResponseHostIdList](#responsehostidlist)
  * Unsuccessful [UnsuccessfulItemList](#unsuccessfulitemlist)

### ReplaceIamInstanceProfileAssociationRequest
* ReplaceIamInstanceProfileAssociationRequest `object`
  * AssociationId **required** [String](#string)
  * IamInstanceProfile **required** [IamInstanceProfileSpecification](#iaminstanceprofilespecification)

### ReplaceIamInstanceProfileAssociationResult
* ReplaceIamInstanceProfileAssociationResult `object`
  * IamInstanceProfileAssociation [IamInstanceProfileAssociation](#iaminstanceprofileassociation)

### ReplaceNetworkAclAssociationRequest
* ReplaceNetworkAclAssociationRequest `object`: Contains the parameters for ReplaceNetworkAclAssociation.
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * NetworkAclId **required** [String](#string)

### ReplaceNetworkAclAssociationResult
* ReplaceNetworkAclAssociationResult `object`: Contains the output of ReplaceNetworkAclAssociation.
  * NewAssociationId [String](#string)

### ReplaceNetworkAclEntryRequest
* ReplaceNetworkAclEntryRequest `object`: Contains the parameters for ReplaceNetworkAclEntry.
  * CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * Egress **required** [Boolean](#boolean)
  * IcmpTypeCode [IcmpTypeCode](#icmptypecode)
  * Ipv6CidrBlock [String](#string)
  * NetworkAclId **required** [String](#string)
  * PortRange [PortRange](#portrange)
  * Protocol **required** [String](#string)
  * RuleAction **required** [RuleAction](#ruleaction)
  * RuleNumber **required** [Integer](#integer)

### ReplaceRouteRequest
* ReplaceRouteRequest `object`: Contains the parameters for ReplaceRoute.
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DryRun [Boolean](#boolean)
  * EgressOnlyInternetGatewayId [String](#string)
  * GatewayId [String](#string)
  * InstanceId [String](#string)
  * NatGatewayId [String](#string)
  * NetworkInterfaceId [String](#string)
  * RouteTableId **required** [String](#string)
  * VpcPeeringConnectionId [String](#string)

### ReplaceRouteTableAssociationRequest
* ReplaceRouteTableAssociationRequest `object`: Contains the parameters for ReplaceRouteTableAssociation.
  * AssociationId **required** [String](#string)
  * DryRun [Boolean](#boolean)
  * RouteTableId **required** [String](#string)

### ReplaceRouteTableAssociationResult
* ReplaceRouteTableAssociationResult `object`: Contains the output of ReplaceRouteTableAssociation.
  * NewAssociationId [String](#string)

### ReportInstanceReasonCodes
* ReportInstanceReasonCodes `string` (values: instance-stuck-in-state, unresponsive, not-accepting-credentials, password-not-available, performance-network, performance-instance-store, performance-ebs-volume, performance-other, other)

### ReportInstanceStatusRequest
* ReportInstanceStatusRequest `object`: Contains the parameters for ReportInstanceStatus.
  * Description [String](#string)
  * DryRun [Boolean](#boolean)
  * EndTime [DateTime](#datetime)
  * Instances **required** [InstanceIdStringList](#instanceidstringlist)
  * ReasonCodes **required** [ReasonCodesList](#reasoncodeslist)
  * StartTime [DateTime](#datetime)
  * Status **required** [ReportStatusType](#reportstatustype)

### ReportStatusType
* ReportStatusType `string` (values: ok, impaired)

### RequestHostIdList
* RequestHostIdList `array`
  * items [String](#string)

### RequestHostIdSet
* RequestHostIdSet `array`
  * items [String](#string)

### RequestSpotFleetRequest
* RequestSpotFleetRequest `object`: Contains the parameters for RequestSpotFleet.
  * DryRun [Boolean](#boolean)
  * SpotFleetRequestConfig **required** [SpotFleetRequestConfigData](#spotfleetrequestconfigdata)

### RequestSpotFleetResponse
* RequestSpotFleetResponse `object`: Contains the output of RequestSpotFleet.
  * SpotFleetRequestId **required** [String](#string)

### RequestSpotInstancesRequest
* RequestSpotInstancesRequest `object`: Contains the parameters for RequestSpotInstances.
  * AvailabilityZoneGroup [String](#string)
  * BlockDurationMinutes [Integer](#integer)
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceCount [Integer](#integer)
  * InstanceInterruptionBehavior [InstanceInterruptionBehavior](#instanceinterruptionbehavior)
  * LaunchGroup [String](#string)
  * LaunchSpecification [RequestSpotLaunchSpecification](#requestspotlaunchspecification)
  * SpotPrice **required** [String](#string)
  * Type [SpotInstanceType](#spotinstancetype)
  * ValidFrom [DateTime](#datetime)
  * ValidUntil [DateTime](#datetime)

### RequestSpotInstancesResult
* RequestSpotInstancesResult `object`: Contains the output of RequestSpotInstances.
  * SpotInstanceRequests [SpotInstanceRequestList](#spotinstancerequestlist)

### RequestSpotLaunchSpecification
* RequestSpotLaunchSpecification `object`: Describes the launch specification for an instance.
  * AddressingType [String](#string)
  * BlockDeviceMappings [BlockDeviceMappingList](#blockdevicemappinglist)
  * EbsOptimized [Boolean](#boolean)
  * IamInstanceProfile [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * ImageId [String](#string)
  * InstanceType [InstanceType](#instancetype)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * Monitoring [RunInstancesMonitoringEnabled](#runinstancesmonitoringenabled)
  * NetworkInterfaces [InstanceNetworkInterfaceSpecificationList](#instancenetworkinterfacespecificationlist)
  * Placement [SpotPlacement](#spotplacement)
  * RamdiskId [String](#string)
  * SecurityGroupIds [ValueStringList](#valuestringlist)
  * SecurityGroups [ValueStringList](#valuestringlist)
  * SubnetId [String](#string)
  * UserData [String](#string)

### Reservation
* Reservation `object`: Describes a reservation.
  * Groups [GroupIdentifierList](#groupidentifierlist)
  * Instances [InstanceList](#instancelist)
  * OwnerId [String](#string)
  * RequesterId [String](#string)
  * ReservationId [String](#string)

### ReservationList
* ReservationList `array`
  * items [Reservation](#reservation)

### ReservationState
* ReservationState `string` (values: payment-pending, payment-failed, active, retired)

### ReservationValue
* ReservationValue `object`: The cost associated with the Reserved Instance.
  * HourlyPrice [String](#string)
  * RemainingTotalValue [String](#string)
  * RemainingUpfrontValue [String](#string)

### ReservedInstanceIdSet
* ReservedInstanceIdSet `array`
  * items [String](#string)

### ReservedInstanceLimitPrice
* ReservedInstanceLimitPrice `object`: Describes the limit price of a Reserved Instance offering.
  * Amount [Double](#double)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)

### ReservedInstanceReservationValue
* ReservedInstanceReservationValue `object`: The total value of the Convertible Reserved Instance.
  * ReservationValue [ReservationValue](#reservationvalue)
  * ReservedInstanceId [String](#string)

### ReservedInstanceReservationValueSet
* ReservedInstanceReservationValueSet `array`
  * items [ReservedInstanceReservationValue](#reservedinstancereservationvalue)

### ReservedInstanceState
* ReservedInstanceState `string` (values: payment-pending, active, payment-failed, retired)

### ReservedInstances
* ReservedInstances `object`: Describes a Reserved Instance.
  * AvailabilityZone [String](#string)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Duration [Long](#long)
  * End [DateTime](#datetime)
  * FixedPrice [Float](#float)
  * InstanceCount [Integer](#integer)
  * InstanceTenancy [Tenancy](#tenancy)
  * InstanceType [InstanceType](#instancetype)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * RecurringCharges [RecurringChargesList](#recurringchargeslist)
  * ReservedInstancesId [String](#string)
  * Scope [scope](#scope)
  * Start [DateTime](#datetime)
  * State [ReservedInstanceState](#reservedinstancestate)
  * Tags [TagList](#taglist)
  * UsagePrice [Float](#float)

### ReservedInstancesConfiguration
* ReservedInstancesConfiguration `object`: Describes the configuration settings for the modified Reserved Instances.
  * AvailabilityZone [String](#string)
  * InstanceCount [Integer](#integer)
  * InstanceType [InstanceType](#instancetype)
  * Platform [String](#string)
  * Scope [scope](#scope)

### ReservedInstancesConfigurationList
* ReservedInstancesConfigurationList `array`
  * items [ReservedInstancesConfiguration](#reservedinstancesconfiguration)

### ReservedInstancesId
* ReservedInstancesId `object`: Describes the ID of a Reserved Instance.
  * ReservedInstancesId [String](#string)

### ReservedInstancesIdStringList
* ReservedInstancesIdStringList `array`
  * items [String](#string)

### ReservedInstancesList
* ReservedInstancesList `array`
  * items [ReservedInstances](#reservedinstances)

### ReservedInstancesListing
* ReservedInstancesListing `object`: Describes a Reserved Instance listing.
  * ClientToken [String](#string)
  * CreateDate [DateTime](#datetime)
  * InstanceCounts [InstanceCountList](#instancecountlist)
  * PriceSchedules [PriceScheduleList](#priceschedulelist)
  * ReservedInstancesId [String](#string)
  * ReservedInstancesListingId [String](#string)
  * Status [ListingStatus](#listingstatus)
  * StatusMessage [String](#string)
  * Tags [TagList](#taglist)
  * UpdateDate [DateTime](#datetime)

### ReservedInstancesListingList
* ReservedInstancesListingList `array`
  * items [ReservedInstancesListing](#reservedinstanceslisting)

### ReservedInstancesModification
* ReservedInstancesModification `object`: Describes a Reserved Instance modification.
  * ClientToken [String](#string)
  * CreateDate [DateTime](#datetime)
  * EffectiveDate [DateTime](#datetime)
  * ModificationResults [ReservedInstancesModificationResultList](#reservedinstancesmodificationresultlist)
  * ReservedInstancesIds [ReservedIntancesIds](#reservedintancesids)
  * ReservedInstancesModificationId [String](#string)
  * Status [String](#string)
  * StatusMessage [String](#string)
  * UpdateDate [DateTime](#datetime)

### ReservedInstancesModificationIdStringList
* ReservedInstancesModificationIdStringList `array`
  * items [String](#string)

### ReservedInstancesModificationList
* ReservedInstancesModificationList `array`
  * items [ReservedInstancesModification](#reservedinstancesmodification)

### ReservedInstancesModificationResult
* ReservedInstancesModificationResult `object`: Describes the modification request/s.
  * ReservedInstancesId [String](#string)
  * TargetConfiguration [ReservedInstancesConfiguration](#reservedinstancesconfiguration)

### ReservedInstancesModificationResultList
* ReservedInstancesModificationResultList `array`
  * items [ReservedInstancesModificationResult](#reservedinstancesmodificationresult)

### ReservedInstancesOffering
* ReservedInstancesOffering `object`: Describes a Reserved Instance offering.
  * AvailabilityZone [String](#string)
  * CurrencyCode [CurrencyCodeValues](#currencycodevalues)
  * Duration [Long](#long)
  * FixedPrice [Float](#float)
  * InstanceTenancy [Tenancy](#tenancy)
  * InstanceType [InstanceType](#instancetype)
  * Marketplace [Boolean](#boolean)
  * OfferingClass [OfferingClassType](#offeringclasstype)
  * OfferingType [OfferingTypeValues](#offeringtypevalues)
  * PricingDetails [PricingDetailsList](#pricingdetailslist)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * RecurringCharges [RecurringChargesList](#recurringchargeslist)
  * ReservedInstancesOfferingId [String](#string)
  * Scope [scope](#scope)
  * UsagePrice [Float](#float)

### ReservedInstancesOfferingIdStringList
* ReservedInstancesOfferingIdStringList `array`
  * items [String](#string)

### ReservedInstancesOfferingList
* ReservedInstancesOfferingList `array`
  * items [ReservedInstancesOffering](#reservedinstancesoffering)

### ReservedIntancesIds
* ReservedIntancesIds `array`
  * items [ReservedInstancesId](#reservedinstancesid)

### ResetFpgaImageAttributeName
* ResetFpgaImageAttributeName `string` (values: loadPermission)

### ResetFpgaImageAttributeRequest
* ResetFpgaImageAttributeRequest `object`
  * Attribute [ResetFpgaImageAttributeName](#resetfpgaimageattributename)
  * DryRun [Boolean](#boolean)
  * FpgaImageId **required** [String](#string)

### ResetFpgaImageAttributeResult
* ResetFpgaImageAttributeResult `object`
  * Return [Boolean](#boolean)

### ResetImageAttributeName
* ResetImageAttributeName `string` (values: launchPermission)

### ResetImageAttributeRequest
* ResetImageAttributeRequest `object`: Contains the parameters for ResetImageAttribute.
  * Attribute **required** [ResetImageAttributeName](#resetimageattributename)
  * DryRun [Boolean](#boolean)
  * ImageId **required** [String](#string)

### ResetInstanceAttributeRequest
* ResetInstanceAttributeRequest `object`: Contains the parameters for ResetInstanceAttribute.
  * Attribute **required** [InstanceAttributeName](#instanceattributename)
  * DryRun [Boolean](#boolean)
  * InstanceId **required** [String](#string)

### ResetNetworkInterfaceAttributeRequest
* ResetNetworkInterfaceAttributeRequest `object`: Contains the parameters for ResetNetworkInterfaceAttribute.
  * DryRun [Boolean](#boolean)
  * NetworkInterfaceId **required** [String](#string)
  * SourceDestCheck [String](#string)

### ResetSnapshotAttributeRequest
* ResetSnapshotAttributeRequest `object`: Contains the parameters for ResetSnapshotAttribute.
  * Attribute **required** [SnapshotAttributeName](#snapshotattributename)
  * DryRun [Boolean](#boolean)
  * SnapshotId **required** [String](#string)

### ResourceIdList
* ResourceIdList `array`
  * items [String](#string)

### ResourceType
* ResourceType `string` (values: customer-gateway, dhcp-options, image, instance, internet-gateway, network-acl, network-interface, reserved-instances, route-table, snapshot, spot-instances-request, subnet, security-group, volume, vpc, vpn-connection, vpn-gateway)

### ResponseHostIdList
* ResponseHostIdList `array`
  * items [String](#string)

### ResponseHostIdSet
* ResponseHostIdSet `array`
  * items [String](#string)

### RestorableByStringList
* RestorableByStringList `array`
  * items [String](#string)

### RestoreAddressToClassicRequest
* RestoreAddressToClassicRequest `object`: Contains the parameters for RestoreAddressToClassic.
  * DryRun [Boolean](#boolean)
  * PublicIp **required** [String](#string)

### RestoreAddressToClassicResult
* RestoreAddressToClassicResult `object`: Contains the output of RestoreAddressToClassic.
  * PublicIp [String](#string)
  * Status [Status](#status)

### RevokeSecurityGroupEgressRequest
* RevokeSecurityGroupEgressRequest `object`: Contains the parameters for RevokeSecurityGroupEgress.
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId **required** [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

### RevokeSecurityGroupIngressRequest
* RevokeSecurityGroupIngressRequest `object`: Contains the parameters for RevokeSecurityGroupIngress.
  * CidrIp [String](#string)
  * DryRun [Boolean](#boolean)
  * FromPort [Integer](#integer)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpProtocol [String](#string)
  * SourceSecurityGroupName [String](#string)
  * SourceSecurityGroupOwnerId [String](#string)
  * ToPort [Integer](#integer)

### Route
* Route `object`: Describes a route in a route table.
  * DestinationCidrBlock [String](#string)
  * DestinationIpv6CidrBlock [String](#string)
  * DestinationPrefixListId [String](#string)
  * EgressOnlyInternetGatewayId [String](#string)
  * GatewayId [String](#string)
  * InstanceId [String](#string)
  * InstanceOwnerId [String](#string)
  * NatGatewayId [String](#string)
  * NetworkInterfaceId [String](#string)
  * Origin [RouteOrigin](#routeorigin)
  * State [RouteState](#routestate)
  * VpcPeeringConnectionId [String](#string)

### RouteList
* RouteList `array`
  * items [Route](#route)

### RouteOrigin
* RouteOrigin `string` (values: CreateRouteTable, CreateRoute, EnableVgwRoutePropagation)

### RouteState
* RouteState `string` (values: active, blackhole)

### RouteTable
* RouteTable `object`: Describes a route table.
  * Associations [RouteTableAssociationList](#routetableassociationlist)
  * PropagatingVgws [PropagatingVgwList](#propagatingvgwlist)
  * RouteTableId [String](#string)
  * Routes [RouteList](#routelist)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### RouteTableAssociation
* RouteTableAssociation `object`: Describes an association between a route table and a subnet.
  * Main [Boolean](#boolean)
  * RouteTableAssociationId [String](#string)
  * RouteTableId [String](#string)
  * SubnetId [String](#string)

### RouteTableAssociationList
* RouteTableAssociationList `array`
  * items [RouteTableAssociation](#routetableassociation)

### RouteTableList
* RouteTableList `array`
  * items [RouteTable](#routetable)

### RuleAction
* RuleAction `string` (values: allow, deny)

### RunInstancesMonitoringEnabled
* RunInstancesMonitoringEnabled `object`: Describes the monitoring of an instance.
  * Enabled **required** [Boolean](#boolean)

### RunInstancesRequest
* RunInstancesRequest `object`: Contains the parameters for RunInstances.
  * AdditionalInfo [String](#string)
  * BlockDeviceMappings [BlockDeviceMappingRequestList](#blockdevicemappingrequestlist)
  * ClientToken [String](#string)
  * DisableApiTermination [Boolean](#boolean)
  * DryRun [Boolean](#boolean)
  * EbsOptimized [Boolean](#boolean)
  * ElasticGpuSpecification [ElasticGpuSpecifications](#elasticgpuspecifications)
  * IamInstanceProfile [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * ImageId **required** [String](#string)
  * InstanceInitiatedShutdownBehavior [ShutdownBehavior](#shutdownbehavior)
  * InstanceType [InstanceType](#instancetype)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [InstanceIpv6AddressList](#instanceipv6addresslist)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * MaxCount **required** [Integer](#integer)
  * MinCount **required** [Integer](#integer)
  * Monitoring [RunInstancesMonitoringEnabled](#runinstancesmonitoringenabled)
  * NetworkInterfaces [InstanceNetworkInterfaceSpecificationList](#instancenetworkinterfacespecificationlist)
  * Placement [Placement](#placement)
  * PrivateIpAddress [String](#string)
  * RamdiskId [String](#string)
  * SecurityGroupIds [SecurityGroupIdStringList](#securitygroupidstringlist)
  * SecurityGroups [SecurityGroupStringList](#securitygroupstringlist)
  * SubnetId [String](#string)
  * TagSpecifications [TagSpecificationList](#tagspecificationlist)
  * UserData [String](#string)

### RunScheduledInstancesRequest
* RunScheduledInstancesRequest `object`: Contains the parameters for RunScheduledInstances.
  * ClientToken [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceCount [Integer](#integer)
  * LaunchSpecification **required** [ScheduledInstancesLaunchSpecification](#scheduledinstanceslaunchspecification)
  * ScheduledInstanceId **required** [String](#string)

### RunScheduledInstancesResult
* RunScheduledInstancesResult `object`: Contains the output of RunScheduledInstances.
  * InstanceIdSet [InstanceIdSet](#instanceidset)

### S3Storage
* S3Storage `object`: Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.
  * AWSAccessKeyId [String](#string)
  * Bucket [String](#string)
  * Prefix [String](#string)
  * UploadPolicy [Blob](#blob)
  * UploadPolicySignature [String](#string)

### ScheduledInstance
* ScheduledInstance `object`: Describes a Scheduled Instance.
  * AvailabilityZone [String](#string)
  * CreateDate [DateTime](#datetime)
  * HourlyPrice [String](#string)
  * InstanceCount [Integer](#integer)
  * InstanceType [String](#string)
  * NetworkPlatform [String](#string)
  * NextSlotStartTime [DateTime](#datetime)
  * Platform [String](#string)
  * PreviousSlotEndTime [DateTime](#datetime)
  * Recurrence [ScheduledInstanceRecurrence](#scheduledinstancerecurrence)
  * ScheduledInstanceId [String](#string)
  * SlotDurationInHours [Integer](#integer)
  * TermEndDate [DateTime](#datetime)
  * TermStartDate [DateTime](#datetime)
  * TotalScheduledInstanceHours [Integer](#integer)

### ScheduledInstanceAvailability
* ScheduledInstanceAvailability `object`: Describes a schedule that is available for your Scheduled Instances.
  * AvailabilityZone [String](#string)
  * AvailableInstanceCount [Integer](#integer)
  * FirstSlotStartTime [DateTime](#datetime)
  * HourlyPrice [String](#string)
  * InstanceType [String](#string)
  * MaxTermDurationInDays [Integer](#integer)
  * MinTermDurationInDays [Integer](#integer)
  * NetworkPlatform [String](#string)
  * Platform [String](#string)
  * PurchaseToken [String](#string)
  * Recurrence [ScheduledInstanceRecurrence](#scheduledinstancerecurrence)
  * SlotDurationInHours [Integer](#integer)
  * TotalScheduledInstanceHours [Integer](#integer)

### ScheduledInstanceAvailabilitySet
* ScheduledInstanceAvailabilitySet `array`
  * items [ScheduledInstanceAvailability](#scheduledinstanceavailability)

### ScheduledInstanceIdRequestSet
* ScheduledInstanceIdRequestSet `array`
  * items [String](#string)

### ScheduledInstanceRecurrence
* ScheduledInstanceRecurrence `object`: Describes the recurring schedule for a Scheduled Instance.
  * Frequency [String](#string)
  * Interval [Integer](#integer)
  * OccurrenceDaySet [OccurrenceDaySet](#occurrencedayset)
  * OccurrenceRelativeToEnd [Boolean](#boolean)
  * OccurrenceUnit [String](#string)

### ScheduledInstanceRecurrenceRequest
* ScheduledInstanceRecurrenceRequest `object`: Describes the recurring schedule for a Scheduled Instance.
  * Frequency [String](#string)
  * Interval [Integer](#integer)
  * OccurrenceDays [OccurrenceDayRequestSet](#occurrencedayrequestset)
  * OccurrenceRelativeToEnd [Boolean](#boolean)
  * OccurrenceUnit [String](#string)

### ScheduledInstanceSet
* ScheduledInstanceSet `array`
  * items [ScheduledInstance](#scheduledinstance)

### ScheduledInstancesBlockDeviceMapping
* ScheduledInstancesBlockDeviceMapping `object`: Describes a block device mapping for a Scheduled Instance.
  * DeviceName [String](#string)
  * Ebs [ScheduledInstancesEbs](#scheduledinstancesebs)
  * NoDevice [String](#string)
  * VirtualName [String](#string)

### ScheduledInstancesBlockDeviceMappingSet
* ScheduledInstancesBlockDeviceMappingSet `array`
  * items [ScheduledInstancesBlockDeviceMapping](#scheduledinstancesblockdevicemapping)

### ScheduledInstancesEbs
* ScheduledInstancesEbs `object`: Describes an EBS volume for a Scheduled Instance.
  * DeleteOnTermination [Boolean](#boolean)
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * SnapshotId [String](#string)
  * VolumeSize [Integer](#integer)
  * VolumeType [String](#string)

### ScheduledInstancesIamInstanceProfile
* ScheduledInstancesIamInstanceProfile `object`: Describes an IAM instance profile for a Scheduled Instance.
  * Arn [String](#string)
  * Name [String](#string)

### ScheduledInstancesIpv6Address
* ScheduledInstancesIpv6Address `object`: Describes an IPv6 address.
  * Ipv6Address [Ipv6Address](#ipv6address)

### ScheduledInstancesIpv6AddressList
* ScheduledInstancesIpv6AddressList `array`
  * items [ScheduledInstancesIpv6Address](#scheduledinstancesipv6address)

### ScheduledInstancesLaunchSpecification
* ScheduledInstancesLaunchSpecification `object`: <p>Describes the launch specification for a Scheduled Instance.</p> <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
  * BlockDeviceMappings [ScheduledInstancesBlockDeviceMappingSet](#scheduledinstancesblockdevicemappingset)
  * EbsOptimized [Boolean](#boolean)
  * IamInstanceProfile [ScheduledInstancesIamInstanceProfile](#scheduledinstancesiaminstanceprofile)
  * ImageId **required** [String](#string)
  * InstanceType [String](#string)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * Monitoring [ScheduledInstancesMonitoring](#scheduledinstancesmonitoring)
  * NetworkInterfaces [ScheduledInstancesNetworkInterfaceSet](#scheduledinstancesnetworkinterfaceset)
  * Placement [ScheduledInstancesPlacement](#scheduledinstancesplacement)
  * RamdiskId [String](#string)
  * SecurityGroupIds [ScheduledInstancesSecurityGroupIdSet](#scheduledinstancessecuritygroupidset)
  * SubnetId [String](#string)
  * UserData [String](#string)

### ScheduledInstancesMonitoring
* ScheduledInstancesMonitoring `object`: Describes whether monitoring is enabled for a Scheduled Instance.
  * Enabled [Boolean](#boolean)

### ScheduledInstancesNetworkInterface
* ScheduledInstancesNetworkInterface `object`: Describes a network interface for a Scheduled Instance.
  * AssociatePublicIpAddress [Boolean](#boolean)
  * DeleteOnTermination [Boolean](#boolean)
  * Description [String](#string)
  * DeviceIndex [Integer](#integer)
  * Groups [ScheduledInstancesSecurityGroupIdSet](#scheduledinstancessecuritygroupidset)
  * Ipv6AddressCount [Integer](#integer)
  * Ipv6Addresses [ScheduledInstancesIpv6AddressList](#scheduledinstancesipv6addresslist)
  * NetworkInterfaceId [String](#string)
  * PrivateIpAddress [String](#string)
  * PrivateIpAddressConfigs [PrivateIpAddressConfigSet](#privateipaddressconfigset)
  * SecondaryPrivateIpAddressCount [Integer](#integer)
  * SubnetId [String](#string)

### ScheduledInstancesNetworkInterfaceSet
* ScheduledInstancesNetworkInterfaceSet `array`
  * items [ScheduledInstancesNetworkInterface](#scheduledinstancesnetworkinterface)

### ScheduledInstancesPlacement
* ScheduledInstancesPlacement `object`: Describes the placement for a Scheduled Instance.
  * AvailabilityZone [String](#string)
  * GroupName [String](#string)

### ScheduledInstancesPrivateIpAddressConfig
* ScheduledInstancesPrivateIpAddressConfig `object`: Describes a private IPv4 address for a Scheduled Instance.
  * Primary [Boolean](#boolean)
  * PrivateIpAddress [String](#string)

### ScheduledInstancesSecurityGroupIdSet
* ScheduledInstancesSecurityGroupIdSet `array`
  * items [String](#string)

### SecurityGroup
* SecurityGroup `object`: Describes a security group
  * Description [String](#string)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions [IpPermissionList](#ippermissionlist)
  * IpPermissionsEgress [IpPermissionList](#ippermissionlist)
  * OwnerId [String](#string)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### SecurityGroupIdStringList
* SecurityGroupIdStringList `array`
  * items [String](#string)

### SecurityGroupIdentifier
* SecurityGroupIdentifier `object`: Describes a security group.
  * GroupId [String](#string)
  * GroupName [String](#string)

### SecurityGroupList
* SecurityGroupList `array`
  * items [SecurityGroup](#securitygroup)

### SecurityGroupReference
* SecurityGroupReference `object`: Describes a VPC with a security group that references your security group.
  * GroupId **required** [String](#string)
  * ReferencingVpcId **required** [String](#string)
  * VpcPeeringConnectionId [String](#string)

### SecurityGroupReferences
* SecurityGroupReferences `array`
  * items [SecurityGroupReference](#securitygroupreference)

### SecurityGroupStringList
* SecurityGroupStringList `array`
  * items [String](#string)

### ServiceDetail
* ServiceDetail `object`: Describes a service.
  * AcceptanceRequired [Boolean](#boolean)
  * AvailabilityZones [ValueStringList](#valuestringlist)
  * BaseEndpointDnsNames [ValueStringList](#valuestringlist)
  * Owner [String](#string)
  * PrivateDnsName [String](#string)
  * ServiceName [String](#string)
  * ServiceType [ServiceTypeDetailSet](#servicetypedetailset)
  * VpcEndpointPolicySupported [Boolean](#boolean)

### ServiceDetailSet
* ServiceDetailSet `array`
  * items [ServiceDetail](#servicedetail)

### ServiceType
* ServiceType `string` (values: Interface, Gateway)

### ServiceTypeDetail
* ServiceTypeDetail `object`: Describes the type of service for a VPC endpoint.
  * ServiceType [ServiceType](#servicetype)

### ServiceTypeDetailSet
* ServiceTypeDetailSet `array`
  * items [ServiceTypeDetail](#servicetypedetail)

### ShutdownBehavior
* ShutdownBehavior `string` (values: stop, terminate)

### SlotDateTimeRangeRequest
* SlotDateTimeRangeRequest `object`: Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
  * EarliestTime **required** [DateTime](#datetime)
  * LatestTime **required** [DateTime](#datetime)

### SlotStartTimeRangeRequest
* SlotStartTimeRangeRequest `object`: Describes the time period for a Scheduled Instance to start its first schedule.
  * EarliestTime [DateTime](#datetime)
  * LatestTime [DateTime](#datetime)

### Snapshot
* Snapshot `object`: Describes a snapshot.
  * DataEncryptionKeyId [String](#string)
  * Description [String](#string)
  * Encrypted [Boolean](#boolean)
  * KmsKeyId [String](#string)
  * OwnerAlias [String](#string)
  * OwnerId [String](#string)
  * Progress [String](#string)
  * SnapshotId [String](#string)
  * StartTime [DateTime](#datetime)
  * State [SnapshotState](#snapshotstate)
  * StateMessage [String](#string)
  * Tags [TagList](#taglist)
  * VolumeId [String](#string)
  * VolumeSize [Integer](#integer)

### SnapshotAttributeName
* SnapshotAttributeName `string` (values: productCodes, createVolumePermission)

### SnapshotDetail
* SnapshotDetail `object`: Describes the snapshot created from the imported disk.
  * Description [String](#string)
  * DeviceName [String](#string)
  * DiskImageSize [Double](#double)
  * Format [String](#string)
  * Progress [String](#string)
  * SnapshotId [String](#string)
  * Status [String](#string)
  * StatusMessage [String](#string)
  * Url [String](#string)
  * UserBucket [UserBucketDetails](#userbucketdetails)

### SnapshotDetailList
* SnapshotDetailList `array`
  * items [SnapshotDetail](#snapshotdetail)

### SnapshotDiskContainer
* SnapshotDiskContainer `object`: The disk container object for the import snapshot request.
  * Description [String](#string)
  * Format [String](#string)
  * Url [String](#string)
  * UserBucket [UserBucket](#userbucket)

### SnapshotIdStringList
* SnapshotIdStringList `array`
  * items [String](#string)

### SnapshotList
* SnapshotList `array`
  * items [Snapshot](#snapshot)

### SnapshotState
* SnapshotState `string` (values: pending, completed, error)

### SnapshotTaskDetail
* SnapshotTaskDetail `object`: Details about the import snapshot task.
  * Description [String](#string)
  * DiskImageSize [Double](#double)
  * Format [String](#string)
  * Progress [String](#string)
  * SnapshotId [String](#string)
  * Status [String](#string)
  * StatusMessage [String](#string)
  * Url [String](#string)
  * UserBucket [UserBucketDetails](#userbucketdetails)

### SpotDatafeedSubscription
* SpotDatafeedSubscription `object`: Describes the data feed for a Spot instance.
  * Bucket [String](#string)
  * Fault [SpotInstanceStateFault](#spotinstancestatefault)
  * OwnerId [String](#string)
  * Prefix [String](#string)
  * State [DatafeedSubscriptionState](#datafeedsubscriptionstate)

### SpotFleetLaunchSpecification
* SpotFleetLaunchSpecification `object`: Describes the launch specification for one or more Spot instances.
  * AddressingType [String](#string)
  * BlockDeviceMappings [BlockDeviceMappingList](#blockdevicemappinglist)
  * EbsOptimized [Boolean](#boolean)
  * IamInstanceProfile [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
  * ImageId [String](#string)
  * InstanceType [InstanceType](#instancetype)
  * KernelId [String](#string)
  * KeyName [String](#string)
  * Monitoring [SpotFleetMonitoring](#spotfleetmonitoring)
  * NetworkInterfaces [InstanceNetworkInterfaceSpecificationList](#instancenetworkinterfacespecificationlist)
  * Placement [SpotPlacement](#spotplacement)
  * RamdiskId [String](#string)
  * SecurityGroups [GroupIdentifierList](#groupidentifierlist)
  * SpotPrice [String](#string)
  * SubnetId [String](#string)
  * TagSpecifications [SpotFleetTagSpecificationList](#spotfleettagspecificationlist)
  * UserData [String](#string)
  * WeightedCapacity [Double](#double)

### SpotFleetMonitoring
* SpotFleetMonitoring `object`: Describes whether monitoring is enabled.
  * Enabled [Boolean](#boolean)

### SpotFleetRequestConfig
* SpotFleetRequestConfig `object`: Describes a Spot fleet request.
  * ActivityStatus [ActivityStatus](#activitystatus)
  * CreateTime **required** [DateTime](#datetime)
  * SpotFleetRequestConfig **required** [SpotFleetRequestConfigData](#spotfleetrequestconfigdata)
  * SpotFleetRequestId **required** [String](#string)
  * SpotFleetRequestState **required** [BatchState](#batchstate)

### SpotFleetRequestConfigData
* SpotFleetRequestConfigData `object`: Describes the configuration of a Spot fleet request.
  * AllocationStrategy [AllocationStrategy](#allocationstrategy)
  * ClientToken [String](#string)
  * ExcessCapacityTerminationPolicy [ExcessCapacityTerminationPolicy](#excesscapacityterminationpolicy)
  * FulfilledCapacity [Double](#double)
  * IamFleetRole **required** [String](#string)
  * InstanceInterruptionBehavior [InstanceInterruptionBehavior](#instanceinterruptionbehavior)
  * LaunchSpecifications **required** [LaunchSpecsList](#launchspecslist)
  * ReplaceUnhealthyInstances [Boolean](#boolean)
  * SpotPrice **required** [String](#string)
  * TargetCapacity **required** [Integer](#integer)
  * TerminateInstancesWithExpiration [Boolean](#boolean)
  * Type [FleetType](#fleettype)
  * ValidFrom [DateTime](#datetime)
  * ValidUntil [DateTime](#datetime)

### SpotFleetRequestConfigSet
* SpotFleetRequestConfigSet `array`
  * items [SpotFleetRequestConfig](#spotfleetrequestconfig)

### SpotFleetTagSpecification
* SpotFleetTagSpecification `object`: The tags for a Spot fleet resource.
  * ResourceType [ResourceType](#resourcetype)
  * Tags [TagList](#taglist)

### SpotFleetTagSpecificationList
* SpotFleetTagSpecificationList `array`
  * items [SpotFleetTagSpecification](#spotfleettagspecification)

### SpotInstanceRequest
* SpotInstanceRequest `object`: Describes a Spot instance request.
  * ActualBlockHourlyPrice [String](#string)
  * AvailabilityZoneGroup [String](#string)
  * BlockDurationMinutes [Integer](#integer)
  * CreateTime [DateTime](#datetime)
  * Fault [SpotInstanceStateFault](#spotinstancestatefault)
  * InstanceId [String](#string)
  * InstanceInterruptionBehavior [InstanceInterruptionBehavior](#instanceinterruptionbehavior)
  * LaunchGroup [String](#string)
  * LaunchSpecification [LaunchSpecification](#launchspecification)
  * LaunchedAvailabilityZone [String](#string)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * SpotInstanceRequestId [String](#string)
  * SpotPrice [String](#string)
  * State [SpotInstanceState](#spotinstancestate)
  * Status [SpotInstanceStatus](#spotinstancestatus)
  * Tags [TagList](#taglist)
  * Type [SpotInstanceType](#spotinstancetype)
  * ValidFrom [DateTime](#datetime)
  * ValidUntil [DateTime](#datetime)

### SpotInstanceRequestIdList
* SpotInstanceRequestIdList `array`
  * items [String](#string)

### SpotInstanceRequestList
* SpotInstanceRequestList `array`
  * items [SpotInstanceRequest](#spotinstancerequest)

### SpotInstanceState
* SpotInstanceState `string` (values: open, active, closed, cancelled, failed)

### SpotInstanceStateFault
* SpotInstanceStateFault `object`: Describes a Spot instance state change.
  * Code [String](#string)
  * Message [String](#string)

### SpotInstanceStatus
* SpotInstanceStatus `object`: Describes the status of a Spot instance request.
  * Code [String](#string)
  * Message [String](#string)
  * UpdateTime [DateTime](#datetime)

### SpotInstanceType
* SpotInstanceType `string` (values: one-time, persistent)

### SpotPlacement
* SpotPlacement `object`: Describes Spot instance placement.
  * AvailabilityZone [String](#string)
  * GroupName [String](#string)
  * Tenancy [Tenancy](#tenancy)

### SpotPrice
* SpotPrice `object`: Describes the maximum hourly price (bid) for any Spot instance launched to fulfill the request.
  * AvailabilityZone [String](#string)
  * InstanceType [InstanceType](#instancetype)
  * ProductDescription [RIProductDescription](#riproductdescription)
  * SpotPrice [String](#string)
  * Timestamp [DateTime](#datetime)

### SpotPriceHistoryList
* SpotPriceHistoryList `array`
  * items [SpotPrice](#spotprice)

### StaleIpPermission
* StaleIpPermission `object`: Describes a stale rule in a security group.
  * FromPort [Integer](#integer)
  * IpProtocol [String](#string)
  * IpRanges [IpRanges](#ipranges)
  * PrefixListIds [PrefixListIdSet](#prefixlistidset)
  * ToPort [Integer](#integer)
  * UserIdGroupPairs [UserIdGroupPairSet](#useridgrouppairset)

### StaleIpPermissionSet
* StaleIpPermissionSet `array`
  * items [StaleIpPermission](#staleippermission)

### StaleSecurityGroup
* StaleSecurityGroup `object`: Describes a stale security group (a security group that contains stale rules).
  * Description [String](#string)
  * GroupId **required** [String](#string)
  * GroupName [String](#string)
  * StaleIpPermissions [StaleIpPermissionSet](#staleippermissionset)
  * StaleIpPermissionsEgress [StaleIpPermissionSet](#staleippermissionset)
  * VpcId [String](#string)

### StaleSecurityGroupSet
* StaleSecurityGroupSet `array`
  * items [StaleSecurityGroup](#stalesecuritygroup)

### StartInstancesRequest
* StartInstancesRequest `object`: Contains the parameters for StartInstances.
  * AdditionalInfo [String](#string)
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### StartInstancesResult
* StartInstancesResult `object`: Contains the output of StartInstances.
  * StartingInstances [InstanceStateChangeList](#instancestatechangelist)

### State
* State `string` (values: PendingAcceptance, Pending, Available, Deleting, Deleted, Rejected, Failed, Expired)

### StateReason
* StateReason `object`: Describes a state change.
  * Code [String](#string)
  * Message [String](#string)

### Status
* Status `string` (values: MoveInProgress, InVpc, InClassic)

### StatusName
* StatusName `string` (values: reachability)

### StatusType
* StatusType `string` (values: passed, failed, insufficient-data, initializing)

### StopInstancesRequest
* StopInstancesRequest `object`: Contains the parameters for StopInstances.
  * DryRun [Boolean](#boolean)
  * Force [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### StopInstancesResult
* StopInstancesResult `object`: Contains the output of StopInstances.
  * StoppingInstances [InstanceStateChangeList](#instancestatechangelist)

### Storage
* Storage `object`: Describes the storage location for an instance store-backed AMI.
  * S3 [S3Storage](#s3storage)

### StorageLocation
* StorageLocation `object`: Describes a storage location in Amazon S3.
  * Bucket [String](#string)
  * Key [String](#string)

### String
* String `string`

### Subnet
* Subnet `object`: Describes a subnet.
  * AssignIpv6AddressOnCreation [Boolean](#boolean)
  * AvailabilityZone [String](#string)
  * AvailableIpAddressCount [Integer](#integer)
  * CidrBlock [String](#string)
  * DefaultForAz [Boolean](#boolean)
  * Ipv6CidrBlockAssociationSet [SubnetIpv6CidrBlockAssociationSet](#subnetipv6cidrblockassociationset)
  * MapPublicIpOnLaunch [Boolean](#boolean)
  * State [SubnetState](#subnetstate)
  * SubnetId [String](#string)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### SubnetCidrBlockState
* SubnetCidrBlockState `object`: Describes the state of a CIDR block.
  * State [SubnetCidrBlockStateCode](#subnetcidrblockstatecode)
  * StatusMessage [String](#string)

### SubnetCidrBlockStateCode
* SubnetCidrBlockStateCode `string` (values: associating, associated, disassociating, disassociated, failing, failed)

### SubnetIdStringList
* SubnetIdStringList `array`
  * items [String](#string)

### SubnetIpv6CidrBlockAssociation
* SubnetIpv6CidrBlockAssociation `object`: Describes an IPv6 CIDR block associated with a subnet.
  * AssociationId [String](#string)
  * Ipv6CidrBlock [String](#string)
  * Ipv6CidrBlockState [SubnetCidrBlockState](#subnetcidrblockstate)

### SubnetIpv6CidrBlockAssociationSet
* SubnetIpv6CidrBlockAssociationSet `array`
  * items [SubnetIpv6CidrBlockAssociation](#subnetipv6cidrblockassociation)

### SubnetList
* SubnetList `array`
  * items [Subnet](#subnet)

### SubnetState
* SubnetState `string` (values: pending, available)

### SummaryStatus
* SummaryStatus `string` (values: ok, impaired, insufficient-data, not-applicable, initializing)

### Tag
* Tag `object`: Describes a tag.
  * Key [String](#string)
  * Value [String](#string)

### TagDescription
* TagDescription `object`: Describes a tag.
  * Key [String](#string)
  * ResourceId [String](#string)
  * ResourceType [ResourceType](#resourcetype)
  * Value [String](#string)

### TagDescriptionList
* TagDescriptionList `array`
  * items [TagDescription](#tagdescription)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagSpecification
* TagSpecification `object`: The tags to apply to a resource when the resource is being created.
  * ResourceType [ResourceType](#resourcetype)
  * Tags [TagList](#taglist)

### TagSpecificationList
* TagSpecificationList `array`
  * items [TagSpecification](#tagspecification)

### TargetConfiguration
* TargetConfiguration `object`: Information about the Convertible Reserved Instance offering.
  * InstanceCount [Integer](#integer)
  * OfferingId [String](#string)

### TargetConfigurationRequest
* TargetConfigurationRequest `object`: Details about the target configuration.
  * InstanceCount [Integer](#integer)
  * OfferingId **required** [String](#string)

### TargetConfigurationRequestSet
* TargetConfigurationRequestSet `array`
  * items [TargetConfigurationRequest](#targetconfigurationrequest)

### TargetReservationValue
* TargetReservationValue `object`: The total value of the new Convertible Reserved Instances.
  * ReservationValue [ReservationValue](#reservationvalue)
  * TargetConfiguration [TargetConfiguration](#targetconfiguration)

### TargetReservationValueSet
* TargetReservationValueSet `array`
  * items [TargetReservationValue](#targetreservationvalue)

### TelemetryStatus
* TelemetryStatus `string` (values: UP, DOWN)

### Tenancy
* Tenancy `string` (values: default, dedicated, host)

### TerminateInstancesRequest
* TerminateInstancesRequest `object`: Contains the parameters for TerminateInstances.
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### TerminateInstancesResult
* TerminateInstancesResult `object`: Contains the output of TerminateInstances.
  * TerminatingInstances [InstanceStateChangeList](#instancestatechangelist)

### TrafficType
* TrafficType `string` (values: ACCEPT, REJECT, ALL)

### TunnelOptionsList
* TunnelOptionsList `array`
  * items [VpnTunnelOptionsSpecification](#vpntunneloptionsspecification)

### UnassignIpv6AddressesRequest
* UnassignIpv6AddressesRequest `object`
  * Ipv6Addresses **required** [Ipv6AddressList](#ipv6addresslist)
  * NetworkInterfaceId **required** [String](#string)

### UnassignIpv6AddressesResult
* UnassignIpv6AddressesResult `object`
  * NetworkInterfaceId [String](#string)
  * UnassignedIpv6Addresses [Ipv6AddressList](#ipv6addresslist)

### UnassignPrivateIpAddressesRequest
* UnassignPrivateIpAddressesRequest `object`: Contains the parameters for UnassignPrivateIpAddresses.
  * NetworkInterfaceId **required** [String](#string)
  * PrivateIpAddresses **required** [PrivateIpAddressStringList](#privateipaddressstringlist)

### UnmonitorInstancesRequest
* UnmonitorInstancesRequest `object`: Contains the parameters for UnmonitorInstances.
  * DryRun [Boolean](#boolean)
  * InstanceIds **required** [InstanceIdStringList](#instanceidstringlist)

### UnmonitorInstancesResult
* UnmonitorInstancesResult `object`: Contains the output of UnmonitorInstances.
  * InstanceMonitorings [InstanceMonitoringList](#instancemonitoringlist)

### UnsuccessfulItem
* UnsuccessfulItem `object`: Information about items that were not successfully processed in a batch call.
  * Error **required** [UnsuccessfulItemError](#unsuccessfulitemerror)
  * ResourceId [String](#string)

### UnsuccessfulItemError
* UnsuccessfulItemError `object`: Information about the error that occurred. For more information about errors, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.
  * Code **required** [String](#string)
  * Message **required** [String](#string)

### UnsuccessfulItemList
* UnsuccessfulItemList `array`
  * items [UnsuccessfulItem](#unsuccessfulitem)

### UnsuccessfulItemSet
* UnsuccessfulItemSet `array`
  * items [UnsuccessfulItem](#unsuccessfulitem)

### UpdateSecurityGroupRuleDescriptionsEgressRequest
* UpdateSecurityGroupRuleDescriptionsEgressRequest `object`: Contains the parameters for UpdateSecurityGroupRuleDescriptionsEgress.
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions **required** [IpPermissionList](#ippermissionlist)

### UpdateSecurityGroupRuleDescriptionsEgressResult
* UpdateSecurityGroupRuleDescriptionsEgressResult `object`: Contains the output of UpdateSecurityGroupRuleDescriptionsEgress.
  * Return [Boolean](#boolean)

### UpdateSecurityGroupRuleDescriptionsIngressRequest
* UpdateSecurityGroupRuleDescriptionsIngressRequest `object`: Contains the parameters for UpdateSecurityGroupRuleDescriptionsIngress.
  * DryRun [Boolean](#boolean)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * IpPermissions **required** [IpPermissionList](#ippermissionlist)

### UpdateSecurityGroupRuleDescriptionsIngressResult
* UpdateSecurityGroupRuleDescriptionsIngressResult `object`: Contains the output of UpdateSecurityGroupRuleDescriptionsIngress.
  * Return [Boolean](#boolean)

### UserBucket
* UserBucket `object`: Describes the S3 bucket for the disk image.
  * S3Bucket [String](#string)
  * S3Key [String](#string)

### UserBucketDetails
* UserBucketDetails `object`: Describes the S3 bucket for the disk image.
  * S3Bucket [String](#string)
  * S3Key [String](#string)

### UserData
* UserData `object`: Describes the user data for an instance.
  * Data [String](#string)

### UserGroupStringList
* UserGroupStringList `array`
  * items [String](#string)

### UserIdGroupPair
* UserIdGroupPair `object`: Describes a security group and AWS account ID pair.
  * Description [String](#string)
  * GroupId [String](#string)
  * GroupName [String](#string)
  * PeeringStatus [String](#string)
  * UserId [String](#string)
  * VpcId [String](#string)
  * VpcPeeringConnectionId [String](#string)

### UserIdGroupPairList
* UserIdGroupPairList `array`
  * items [UserIdGroupPair](#useridgrouppair)

### UserIdGroupPairSet
* UserIdGroupPairSet `array`
  * items [UserIdGroupPair](#useridgrouppair)

### UserIdStringList
* UserIdStringList `array`
  * items [String](#string)

### ValueStringList
* ValueStringList `array`
  * items [String](#string)

### VgwTelemetry
* VgwTelemetry `object`: Describes telemetry for a VPN tunnel.
  * AcceptedRouteCount [Integer](#integer)
  * LastStatusChange [DateTime](#datetime)
  * OutsideIpAddress [String](#string)
  * Status [TelemetryStatus](#telemetrystatus)
  * StatusMessage [String](#string)

### VgwTelemetryList
* VgwTelemetryList `array`
  * items [VgwTelemetry](#vgwtelemetry)

### VirtualizationType
* VirtualizationType `string` (values: hvm, paravirtual)

### Volume
* Volume `object`: Describes a volume.
  * Attachments [VolumeAttachmentList](#volumeattachmentlist)
  * AvailabilityZone [String](#string)
  * CreateTime [DateTime](#datetime)
  * Encrypted [Boolean](#boolean)
  * Iops [Integer](#integer)
  * KmsKeyId [String](#string)
  * Size [Integer](#integer)
  * SnapshotId [String](#string)
  * State [VolumeState](#volumestate)
  * Tags [TagList](#taglist)
  * VolumeId [String](#string)
  * VolumeType [VolumeType](#volumetype)

### VolumeAttachment
* VolumeAttachment `object`: Describes volume attachment details.
  * AttachTime [DateTime](#datetime)
  * DeleteOnTermination [Boolean](#boolean)
  * Device [String](#string)
  * InstanceId [String](#string)
  * State [VolumeAttachmentState](#volumeattachmentstate)
  * VolumeId [String](#string)

### VolumeAttachmentList
* VolumeAttachmentList `array`
  * items [VolumeAttachment](#volumeattachment)

### VolumeAttachmentState
* VolumeAttachmentState `string` (values: attaching, attached, detaching, detached)

### VolumeAttributeName
* VolumeAttributeName `string` (values: autoEnableIO, productCodes)

### VolumeDetail
* VolumeDetail `object`: Describes an EBS volume.
  * Size **required** [Long](#long)

### VolumeIdStringList
* VolumeIdStringList `array`
  * items [String](#string)

### VolumeList
* VolumeList `array`
  * items [Volume](#volume)

### VolumeModification
* VolumeModification `object`: <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
  * EndTime [DateTime](#datetime)
  * ModificationState [VolumeModificationState](#volumemodificationstate)
  * OriginalIops [Integer](#integer)
  * OriginalSize [Integer](#integer)
  * OriginalVolumeType [VolumeType](#volumetype)
  * Progress [Long](#long)
  * StartTime [DateTime](#datetime)
  * StatusMessage [String](#string)
  * TargetIops [Integer](#integer)
  * TargetSize [Integer](#integer)
  * TargetVolumeType [VolumeType](#volumetype)
  * VolumeId [String](#string)

### VolumeModificationList
* VolumeModificationList `array`
  * items [VolumeModification](#volumemodification)

### VolumeModificationState
* VolumeModificationState `string` (values: modifying, optimizing, completed, failed)

### VolumeState
* VolumeState `string` (values: creating, available, in-use, deleting, deleted, error)

### VolumeStatusAction
* VolumeStatusAction `object`: Describes a volume status operation code.
  * Code [String](#string)
  * Description [String](#string)
  * EventId [String](#string)
  * EventType [String](#string)

### VolumeStatusActionsList
* VolumeStatusActionsList `array`
  * items [VolumeStatusAction](#volumestatusaction)

### VolumeStatusDetails
* VolumeStatusDetails `object`: Describes a volume status.
  * Name [VolumeStatusName](#volumestatusname)
  * Status [String](#string)

### VolumeStatusDetailsList
* VolumeStatusDetailsList `array`
  * items [VolumeStatusDetails](#volumestatusdetails)

### VolumeStatusEvent
* VolumeStatusEvent `object`: Describes a volume status event.
  * Description [String](#string)
  * EventId [String](#string)
  * EventType [String](#string)
  * NotAfter [DateTime](#datetime)
  * NotBefore [DateTime](#datetime)

### VolumeStatusEventsList
* VolumeStatusEventsList `array`
  * items [VolumeStatusEvent](#volumestatusevent)

### VolumeStatusInfo
* VolumeStatusInfo `object`: Describes the status of a volume.
  * Details [VolumeStatusDetailsList](#volumestatusdetailslist)
  * Status [VolumeStatusInfoStatus](#volumestatusinfostatus)

### VolumeStatusInfoStatus
* VolumeStatusInfoStatus `string` (values: ok, impaired, insufficient-data)

### VolumeStatusItem
* VolumeStatusItem `object`: Describes the volume status.
  * Actions [VolumeStatusActionsList](#volumestatusactionslist)
  * AvailabilityZone [String](#string)
  * Events [VolumeStatusEventsList](#volumestatuseventslist)
  * VolumeId [String](#string)
  * VolumeStatus [VolumeStatusInfo](#volumestatusinfo)

### VolumeStatusList
* VolumeStatusList `array`
  * items [VolumeStatusItem](#volumestatusitem)

### VolumeStatusName
* VolumeStatusName `string` (values: io-enabled, io-performance)

### VolumeType
* VolumeType `string` (values: standard, io1, gp2, sc1, st1)

### Vpc
* Vpc `object`: Describes a VPC.
  * CidrBlock [String](#string)
  * CidrBlockAssociationSet [VpcCidrBlockAssociationSet](#vpccidrblockassociationset)
  * DhcpOptionsId [String](#string)
  * InstanceTenancy [Tenancy](#tenancy)
  * Ipv6CidrBlockAssociationSet [VpcIpv6CidrBlockAssociationSet](#vpcipv6cidrblockassociationset)
  * IsDefault [Boolean](#boolean)
  * State [VpcState](#vpcstate)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### VpcAttachment
* VpcAttachment `object`: Describes an attachment between a virtual private gateway and a VPC.
  * State [AttachmentStatus](#attachmentstatus)
  * VpcId [String](#string)

### VpcAttachmentList
* VpcAttachmentList `array`
  * items [VpcAttachment](#vpcattachment)

### VpcAttributeName
* VpcAttributeName `string` (values: enableDnsSupport, enableDnsHostnames)

### VpcCidrBlockAssociation
* VpcCidrBlockAssociation `object`: Describes an IPv4 CIDR block associated with a VPC.
  * AssociationId [String](#string)
  * CidrBlock [String](#string)
  * CidrBlockState [VpcCidrBlockState](#vpccidrblockstate)

### VpcCidrBlockAssociationSet
* VpcCidrBlockAssociationSet `array`
  * items [VpcCidrBlockAssociation](#vpccidrblockassociation)

### VpcCidrBlockState
* VpcCidrBlockState `object`: Describes the state of a CIDR block.
  * State [VpcCidrBlockStateCode](#vpccidrblockstatecode)
  * StatusMessage [String](#string)

### VpcCidrBlockStateCode
* VpcCidrBlockStateCode `string` (values: associating, associated, disassociating, disassociated, failing, failed)

### VpcClassicLink
* VpcClassicLink `object`: Describes whether a VPC is enabled for ClassicLink.
  * ClassicLinkEnabled [Boolean](#boolean)
  * Tags [TagList](#taglist)
  * VpcId [String](#string)

### VpcClassicLinkIdList
* VpcClassicLinkIdList `array`
  * items [String](#string)

### VpcClassicLinkList
* VpcClassicLinkList `array`
  * items [VpcClassicLink](#vpcclassiclink)

### VpcEndpoint
* VpcEndpoint `object`: Describes a VPC endpoint.
  * CreationTimestamp [DateTime](#datetime)
  * DnsEntries [DnsEntrySet](#dnsentryset)
  * Groups [GroupIdentifierSet](#groupidentifierset)
  * NetworkInterfaceIds [ValueStringList](#valuestringlist)
  * PolicyDocument [String](#string)
  * PrivateDnsEnabled [Boolean](#boolean)
  * RouteTableIds [ValueStringList](#valuestringlist)
  * ServiceName [String](#string)
  * State [State](#state)
  * SubnetIds [ValueStringList](#valuestringlist)
  * VpcEndpointId [String](#string)
  * VpcEndpointType [VpcEndpointType](#vpcendpointtype)
  * VpcId [String](#string)

### VpcEndpointSet
* VpcEndpointSet `array`
  * items [VpcEndpoint](#vpcendpoint)

### VpcEndpointType
* VpcEndpointType `string` (values: Interface, Gateway)

### VpcIdStringList
* VpcIdStringList `array`
  * items [String](#string)

### VpcIpv6CidrBlockAssociation
* VpcIpv6CidrBlockAssociation `object`: Describes an IPv6 CIDR block associated with a VPC.
  * AssociationId [String](#string)
  * Ipv6CidrBlock [String](#string)
  * Ipv6CidrBlockState [VpcCidrBlockState](#vpccidrblockstate)

### VpcIpv6CidrBlockAssociationSet
* VpcIpv6CidrBlockAssociationSet `array`
  * items [VpcIpv6CidrBlockAssociation](#vpcipv6cidrblockassociation)

### VpcList
* VpcList `array`
  * items [Vpc](#vpc)

### VpcPeeringConnection
* VpcPeeringConnection `object`: Describes a VPC peering connection.
  * AccepterVpcInfo [VpcPeeringConnectionVpcInfo](#vpcpeeringconnectionvpcinfo)
  * ExpirationTime [DateTime](#datetime)
  * RequesterVpcInfo [VpcPeeringConnectionVpcInfo](#vpcpeeringconnectionvpcinfo)
  * Status [VpcPeeringConnectionStateReason](#vpcpeeringconnectionstatereason)
  * Tags [TagList](#taglist)
  * VpcPeeringConnectionId [String](#string)

### VpcPeeringConnectionList
* VpcPeeringConnectionList `array`
  * items [VpcPeeringConnection](#vpcpeeringconnection)

### VpcPeeringConnectionOptionsDescription
* VpcPeeringConnectionOptionsDescription `object`: Describes the VPC peering connection options.
  * AllowDnsResolutionFromRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalClassicLinkToRemoteVpc [Boolean](#boolean)
  * AllowEgressFromLocalVpcToRemoteClassicLink [Boolean](#boolean)

### VpcPeeringConnectionStateReason
* VpcPeeringConnectionStateReason `object`: Describes the status of a VPC peering connection.
  * Code [VpcPeeringConnectionStateReasonCode](#vpcpeeringconnectionstatereasoncode)
  * Message [String](#string)

### VpcPeeringConnectionStateReasonCode
* VpcPeeringConnectionStateReasonCode `string` (values: initiating-request, pending-acceptance, active, deleted, rejected, failed, expired, provisioning, deleting)

### VpcPeeringConnectionVpcInfo
* VpcPeeringConnectionVpcInfo `object`: Describes a VPC in a VPC peering connection.
  * CidrBlock [String](#string)
  * CidrBlockSet [CidrBlockSet](#cidrblockset)
  * Ipv6CidrBlockSet [Ipv6CidrBlockSet](#ipv6cidrblockset)
  * OwnerId [String](#string)
  * PeeringOptions [VpcPeeringConnectionOptionsDescription](#vpcpeeringconnectionoptionsdescription)
  * VpcId [String](#string)

### VpcState
* VpcState `string` (values: pending, available)

### VpcTenancy
* VpcTenancy `string` (values: default)

### VpnConnection
* VpnConnection `object`: Describes a VPN connection.
  * Category [String](#string)
  * CustomerGatewayConfiguration [String](#string)
  * CustomerGatewayId [String](#string)
  * Options [VpnConnectionOptions](#vpnconnectionoptions)
  * Routes [VpnStaticRouteList](#vpnstaticroutelist)
  * State [VpnState](#vpnstate)
  * Tags [TagList](#taglist)
  * Type [GatewayType](#gatewaytype)
  * VgwTelemetry [VgwTelemetryList](#vgwtelemetrylist)
  * VpnConnectionId [String](#string)
  * VpnGatewayId [String](#string)

### VpnConnectionIdStringList
* VpnConnectionIdStringList `array`
  * items [String](#string)

### VpnConnectionList
* VpnConnectionList `array`
  * items [VpnConnection](#vpnconnection)

### VpnConnectionOptions
* VpnConnectionOptions `object`: Describes VPN connection options.
  * StaticRoutesOnly [Boolean](#boolean)

### VpnConnectionOptionsSpecification
* VpnConnectionOptionsSpecification `object`: Describes VPN connection options.
  * StaticRoutesOnly [Boolean](#boolean)
  * TunnelOptions [TunnelOptionsList](#tunneloptionslist)

### VpnGateway
* VpnGateway `object`: Describes a virtual private gateway.
  * AmazonSideAsn [Long](#long)
  * AvailabilityZone [String](#string)
  * State [VpnState](#vpnstate)
  * Tags [TagList](#taglist)
  * Type [GatewayType](#gatewaytype)
  * VpcAttachments [VpcAttachmentList](#vpcattachmentlist)
  * VpnGatewayId [String](#string)

### VpnGatewayIdStringList
* VpnGatewayIdStringList `array`
  * items [String](#string)

### VpnGatewayList
* VpnGatewayList `array`
  * items [VpnGateway](#vpngateway)

### VpnState
* VpnState `string` (values: pending, available, deleting, deleted)

### VpnStaticRoute
* VpnStaticRoute `object`: Describes a static route for a VPN connection.
  * DestinationCidrBlock [String](#string)
  * Source [VpnStaticRouteSource](#vpnstaticroutesource)
  * State [VpnState](#vpnstate)

### VpnStaticRouteList
* VpnStaticRouteList `array`
  * items [VpnStaticRoute](#vpnstaticroute)

### VpnStaticRouteSource
* VpnStaticRouteSource `string` (values: Static)

### VpnTunnelOptionsSpecification
* VpnTunnelOptionsSpecification `object`: The tunnel options for a VPN connection.
  * PreSharedKey [String](#string)
  * TunnelInsideCidr [String](#string)

### ZoneNameStringList
* ZoneNameStringList `array`
  * items [String](#string)

### scope
* scope `string` (values: Availability Zone, Region)


