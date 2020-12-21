# @datafire/amazonaws_globalaccelerator

Client library for AWS Global Accelerator

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_globalaccelerator
```
```js
let amazonaws_globalaccelerator = require('@datafire/amazonaws_globalaccelerator').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Global Accelerator</fullname> <p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>.</p> <p>AWS Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits. </p> <ul> <li> <p>By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the AWS global network. </p> </li> <li> <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p> </li> </ul> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important> <p>By default, Global Accelerator provides you with two static IP addresses that you associate with your accelerator. With a standard accelerator, instead of using the IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring to Global Accelerator. The static IP addresses are anycast from the AWS edge network. For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple AWS Regions, which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one AWS Region or multiple Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.</p> <important> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </important> <p>For standard accelerators, Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints.</p> <p>For a list of the AWS Regions where Global Accelerator and other services are currently supported, see the <a href="https://docs.aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">AWS Region Table</a>.</p> <p>AWS Global Accelerator includes the following components:</p> <dl> <dt>Static IP addresses</dt> <dd> <p>Global Accelerator provides you with a set of two static IP addresses that are anycast from the AWS edge network. If you bring your own IP address range to AWS (BYOIP) to use with a standard accelerator, you can instead assign IP addresses from your own pool to use with your accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html"> Bring your own IP addresses (BYOIP) in AWS Global Accelerator</a>.</p> <p>The IP addresses serve as single fixed entry points for your clients. If you already have Elastic Load Balancing load balancers, Amazon EC2 instances, or Elastic IP address resources set up for your applications, you can easily add those to a standard accelerator in Global Accelerator. This allows Global Accelerator to use static IP addresses to access the resources.</p> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </dd> <dt>Accelerator</dt> <dd> <p>An accelerator directs traffic to endpoints over the AWS global network to improve the performance of your internet applications. Each accelerator includes one or more listeners.</p> <p>There are two types of accelerators:</p> <ul> <li> <p>A <i>standard</i> accelerator directs traffic to the optimal AWS endpoint based on several factors, including the user’s location, the health of the endpoint, and the endpoint weights that you configure. This improves the availability and performance of your applications. Endpoints can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.</p> </li> <li> <p>A <i>custom routing</i> accelerator directs traffic to one of possibly thousands of Amazon EC2 instances running in a single or multiple virtual private clouds (VPCs). With custom routing, listener ports are mapped to statically associate port ranges with VPC subnets, which allows Global Accelerator to determine an EC2 instance IP address at the time of connection. By default, all port mapping destinations in a VPC subnet can't receive traffic. You can choose to configure all destinations in the subnet to receive traffic, or to specify individual port mappings that can receive traffic.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-accelerator-types.html">Types of accelerators</a>.</p> </dd> <dt>DNS name</dt> <dd> <p>Global Accelerator assigns each accelerator a default Domain Name System (DNS) name, similar to <code>a1234567890abcdef.awsglobalaccelerator.com</code>, that points to the static IP addresses that Global Accelerator assigns to you or that you choose from your own IP address range. Depending on the use case, you can use your accelerator's static IP addresses or DNS name to route traffic to your accelerator, or set up DNS records to route traffic using your own custom domain name.</p> </dd> <dt>Network zone</dt> <dd> <p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure. When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a network zone becomes unavailable due to IP address blocking by certain client networks, or network disruptions, then client applications can retry on the healthy static IP address from the other isolated network zone.</p> </dd> <dt>Listener</dt> <dd> <p>A listener processes inbound connections from clients to Global Accelerator, based on the port (or port range) and protocol (or protocols) that you configure. A listener can be configured for TCP, UDP, or both TCP and UDP protocols. Each listener has one or more endpoint groups associated with it, and traffic is forwarded to endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions that you want to distribute traffic to. With a standard accelerator, traffic is distributed to optimal endpoints within the endpoint groups associated with a listener.</p> </dd> <dt>Endpoint group</dt> <dd> <p>Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or more endpoints in the Region. With a standard accelerator, you can increase or reduce the percentage of traffic that would be otherwise directed to an endpoint group by adjusting a setting called a <i>traffic dial</i>. The traffic dial lets you easily do performance testing or blue/green deployment testing, for example, for new releases across different AWS Regions. </p> </dd> <dt>Endpoint</dt> <dd> <p>An endpoint is a resource that Global Accelerator directs traffic to.</p> <p>Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses. An Application Load Balancer endpoint can be internet-facing or internal. Traffic for standard accelerators is routed to endpoints based on the health of the endpoint along with configuration options that you choose, such as endpoint weights. For each endpoint, you can configure weights, which are numbers that you can use to specify the proportion of traffic to route to each one. This can be useful, for example, to do performance testing within a Region.</p> <p>Endpoints for custom routing accelerators are virtual private cloud (VPC) subnets with one or many EC2 instances.</p> </dd> </dl>

## Actions

### AddCustomRoutingEndpoints



```js
amazonaws_globalaccelerator.AddCustomRoutingEndpoints({
  "EndpointConfigurations": null,
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigurations **required**
    * items [CustomRoutingEndpointConfiguration](#customroutingendpointconfiguration)
  * EndpointGroupArn **required**

#### Output
* output [AddCustomRoutingEndpointsResponse](#addcustomroutingendpointsresponse)

### AdvertiseByoipCidr



```js
amazonaws_globalaccelerator.AdvertiseByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**

#### Output
* output [AdvertiseByoipCidrResponse](#advertisebyoipcidrresponse)

### AllowCustomRoutingTraffic



```js
amazonaws_globalaccelerator.AllowCustomRoutingTraffic({
  "EndpointGroupArn": null,
  "EndpointId": null
}, context)
```

#### Input
* input `object`
  * AllowAllTrafficToEndpoint
  * DestinationAddresses
    * items [IpAddress](#ipaddress)
  * DestinationPorts
    * items [PortNumber](#portnumber)
  * EndpointGroupArn **required**
  * EndpointId **required**

#### Output
*Output schema unknown*

### CreateAccelerator



```js
amazonaws_globalaccelerator.CreateAccelerator({
  "Name": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * IdempotencyToken **required**
  * IpAddressType
  * IpAddresses
    * items [IpAddress](#ipaddress)
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateAcceleratorResponse](#createacceleratorresponse)

### CreateCustomRoutingAccelerator



```js
amazonaws_globalaccelerator.CreateCustomRoutingAccelerator({
  "Name": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * Enabled
  * IdempotencyToken **required**
  * IpAddressType
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateCustomRoutingAcceleratorResponse](#createcustomroutingacceleratorresponse)

### CreateCustomRoutingEndpointGroup



```js
amazonaws_globalaccelerator.CreateCustomRoutingEndpointGroup({
  "ListenerArn": null,
  "EndpointGroupRegion": null,
  "DestinationConfigurations": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * DestinationConfigurations **required**
    * items [CustomRoutingDestinationConfiguration](#customroutingdestinationconfiguration)
  * EndpointGroupRegion **required**
  * IdempotencyToken **required**
  * ListenerArn **required**

#### Output
* output [CreateCustomRoutingEndpointGroupResponse](#createcustomroutingendpointgroupresponse)

### CreateCustomRoutingListener



```js
amazonaws_globalaccelerator.CreateCustomRoutingListener({
  "AcceleratorArn": null,
  "PortRanges": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * IdempotencyToken **required**
  * PortRanges **required**
    * items [PortRange](#portrange)

#### Output
* output [CreateCustomRoutingListenerResponse](#createcustomroutinglistenerresponse)

### CreateEndpointGroup



```js
amazonaws_globalaccelerator.CreateEndpointGroup({
  "ListenerArn": null,
  "EndpointGroupRegion": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigurations
    * items [EndpointConfiguration](#endpointconfiguration)
  * EndpointGroupRegion **required**
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * IdempotencyToken **required**
  * ListenerArn **required**
  * PortOverrides
    * items [PortOverride](#portoverride)
  * ThresholdCount
  * TrafficDialPercentage

#### Output
* output [CreateEndpointGroupResponse](#createendpointgroupresponse)

### CreateListener



```js
amazonaws_globalaccelerator.CreateListener({
  "AcceleratorArn": null,
  "PortRanges": null,
  "Protocol": null,
  "IdempotencyToken": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * ClientAffinity
  * IdempotencyToken **required**
  * PortRanges **required**
    * items [PortRange](#portrange)
  * Protocol **required**

#### Output
* output [CreateListenerResponse](#createlistenerresponse)

### DeleteAccelerator



```js
amazonaws_globalaccelerator.DeleteAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
*Output schema unknown*

### DeleteCustomRoutingAccelerator



```js
amazonaws_globalaccelerator.DeleteCustomRoutingAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
*Output schema unknown*

### DeleteCustomRoutingEndpointGroup



```js
amazonaws_globalaccelerator.DeleteCustomRoutingEndpointGroup({
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointGroupArn **required**

#### Output
*Output schema unknown*

### DeleteCustomRoutingListener



```js
amazonaws_globalaccelerator.DeleteCustomRoutingListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**

#### Output
*Output schema unknown*

### DeleteEndpointGroup



```js
amazonaws_globalaccelerator.DeleteEndpointGroup({
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointGroupArn **required**

#### Output
*Output schema unknown*

### DeleteListener



```js
amazonaws_globalaccelerator.DeleteListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**

#### Output
*Output schema unknown*

### DenyCustomRoutingTraffic



```js
amazonaws_globalaccelerator.DenyCustomRoutingTraffic({
  "EndpointGroupArn": null,
  "EndpointId": null
}, context)
```

#### Input
* input `object`
  * DenyAllTrafficToEndpoint
  * DestinationAddresses
    * items [IpAddress](#ipaddress)
  * DestinationPorts
    * items [PortNumber](#portnumber)
  * EndpointGroupArn **required**
  * EndpointId **required**

#### Output
*Output schema unknown*

### DeprovisionByoipCidr



```js
amazonaws_globalaccelerator.DeprovisionByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**

#### Output
* output [DeprovisionByoipCidrResponse](#deprovisionbyoipcidrresponse)

### DescribeAccelerator



```js
amazonaws_globalaccelerator.DescribeAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
* output [DescribeAcceleratorResponse](#describeacceleratorresponse)

### DescribeAcceleratorAttributes



```js
amazonaws_globalaccelerator.DescribeAcceleratorAttributes({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
* output [DescribeAcceleratorAttributesResponse](#describeacceleratorattributesresponse)

### DescribeCustomRoutingAccelerator



```js
amazonaws_globalaccelerator.DescribeCustomRoutingAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
* output [DescribeCustomRoutingAcceleratorResponse](#describecustomroutingacceleratorresponse)

### DescribeCustomRoutingAcceleratorAttributes



```js
amazonaws_globalaccelerator.DescribeCustomRoutingAcceleratorAttributes({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**

#### Output
* output [DescribeCustomRoutingAcceleratorAttributesResponse](#describecustomroutingacceleratorattributesresponse)

### DescribeCustomRoutingEndpointGroup



```js
amazonaws_globalaccelerator.DescribeCustomRoutingEndpointGroup({
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointGroupArn **required**

#### Output
* output [DescribeCustomRoutingEndpointGroupResponse](#describecustomroutingendpointgroupresponse)

### DescribeCustomRoutingListener



```js
amazonaws_globalaccelerator.DescribeCustomRoutingListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**

#### Output
* output [DescribeCustomRoutingListenerResponse](#describecustomroutinglistenerresponse)

### DescribeEndpointGroup



```js
amazonaws_globalaccelerator.DescribeEndpointGroup({
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointGroupArn **required**

#### Output
* output [DescribeEndpointGroupResponse](#describeendpointgroupresponse)

### DescribeListener



```js
amazonaws_globalaccelerator.DescribeListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**

#### Output
* output [DescribeListenerResponse](#describelistenerresponse)

### ListAccelerators



```js
amazonaws_globalaccelerator.ListAccelerators({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListAcceleratorsResponse](#listacceleratorsresponse)

### ListByoipCidrs



```js
amazonaws_globalaccelerator.ListByoipCidrs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListByoipCidrsResponse](#listbyoipcidrsresponse)

### ListCustomRoutingAccelerators



```js
amazonaws_globalaccelerator.ListCustomRoutingAccelerators({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListCustomRoutingAcceleratorsResponse](#listcustomroutingacceleratorsresponse)

### ListCustomRoutingEndpointGroups



```js
amazonaws_globalaccelerator.ListCustomRoutingEndpointGroups({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ListenerArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListCustomRoutingEndpointGroupsResponse](#listcustomroutingendpointgroupsresponse)

### ListCustomRoutingListeners



```js
amazonaws_globalaccelerator.ListCustomRoutingListeners({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AcceleratorArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListCustomRoutingListenersResponse](#listcustomroutinglistenersresponse)

### ListCustomRoutingPortMappings



```js
amazonaws_globalaccelerator.ListCustomRoutingPortMappings({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AcceleratorArn **required**
  * EndpointGroupArn
  * MaxResults
  * NextToken

#### Output
* output [ListCustomRoutingPortMappingsResponse](#listcustomroutingportmappingsresponse)

### ListCustomRoutingPortMappingsByDestination



```js
amazonaws_globalaccelerator.ListCustomRoutingPortMappingsByDestination({
  "EndpointId": null,
  "DestinationAddress": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DestinationAddress **required**
  * EndpointId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListCustomRoutingPortMappingsByDestinationResponse](#listcustomroutingportmappingsbydestinationresponse)

### ListEndpointGroups



```js
amazonaws_globalaccelerator.ListEndpointGroups({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ListenerArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListEndpointGroupsResponse](#listendpointgroupsresponse)

### ListListeners



```js
amazonaws_globalaccelerator.ListListeners({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AcceleratorArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListListenersResponse](#listlistenersresponse)

### ListTagsForResource



```js
amazonaws_globalaccelerator.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ProvisionByoipCidr



```js
amazonaws_globalaccelerator.ProvisionByoipCidr({
  "Cidr": null,
  "CidrAuthorizationContext": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**
  * CidrAuthorizationContext **required**
    * Message **required**
    * Signature **required**

#### Output
* output [ProvisionByoipCidrResponse](#provisionbyoipcidrresponse)

### RemoveCustomRoutingEndpoints



```js
amazonaws_globalaccelerator.RemoveCustomRoutingEndpoints({
  "EndpointIds": null,
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointGroupArn **required**
  * EndpointIds **required**
    * items [GenericString](#genericstring)

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_globalaccelerator.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_globalaccelerator.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAccelerator



```js
amazonaws_globalaccelerator.UpdateAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * Enabled
  * IpAddressType
  * Name

#### Output
* output [UpdateAcceleratorResponse](#updateacceleratorresponse)

### UpdateAcceleratorAttributes



```js
amazonaws_globalaccelerator.UpdateAcceleratorAttributes({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

#### Output
* output [UpdateAcceleratorAttributesResponse](#updateacceleratorattributesresponse)

### UpdateCustomRoutingAccelerator



```js
amazonaws_globalaccelerator.UpdateCustomRoutingAccelerator({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * Enabled
  * IpAddressType
  * Name

#### Output
* output [UpdateCustomRoutingAcceleratorResponse](#updatecustomroutingacceleratorresponse)

### UpdateCustomRoutingAcceleratorAttributes



```js
amazonaws_globalaccelerator.UpdateCustomRoutingAcceleratorAttributes({
  "AcceleratorArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorArn **required**
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

#### Output
* output [UpdateCustomRoutingAcceleratorAttributesResponse](#updatecustomroutingacceleratorattributesresponse)

### UpdateCustomRoutingListener



```js
amazonaws_globalaccelerator.UpdateCustomRoutingListener({
  "ListenerArn": null,
  "PortRanges": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**
  * PortRanges **required**
    * items [PortRange](#portrange)

#### Output
* output [UpdateCustomRoutingListenerResponse](#updatecustomroutinglistenerresponse)

### UpdateEndpointGroup



```js
amazonaws_globalaccelerator.UpdateEndpointGroup({
  "EndpointGroupArn": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigurations
    * items [EndpointConfiguration](#endpointconfiguration)
  * EndpointGroupArn **required**
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * PortOverrides
    * items [PortOverride](#portoverride)
  * ThresholdCount
  * TrafficDialPercentage

#### Output
* output [UpdateEndpointGroupResponse](#updateendpointgroupresponse)

### UpdateListener



```js
amazonaws_globalaccelerator.UpdateListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ClientAffinity
  * ListenerArn **required**
  * PortRanges
    * items [PortRange](#portrange)
  * Protocol

#### Output
* output [UpdateListenerResponse](#updatelistenerresponse)

### WithdrawByoipCidr



```js
amazonaws_globalaccelerator.WithdrawByoipCidr({
  "Cidr": null
}, context)
```

#### Input
* input `object`
  * Cidr **required**

#### Output
* output [WithdrawByoipCidrResponse](#withdrawbyoipcidrresponse)



## Definitions

### Accelerator
* Accelerator `object`: An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
  * AcceleratorArn
  * CreatedTime
  * DnsName
  * Enabled
  * IpAddressType
  * IpSets
    * items [IpSet](#ipset)
  * LastModifiedTime
  * Name
  * Status

### AcceleratorAttributes
* AcceleratorAttributes `object`: Attributes of an accelerator.
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

### AcceleratorNotDisabledException


### AcceleratorNotFoundException


### AcceleratorStatus
* AcceleratorStatus `string` (values: DEPLOYED, IN_PROGRESS)

### Accelerators
* Accelerators `array`
  * items [Accelerator](#accelerator)

### AccessDeniedException


### AddCustomRoutingEndpointsRequest
* AddCustomRoutingEndpointsRequest `object`
  * EndpointConfigurations **required**
    * items [CustomRoutingEndpointConfiguration](#customroutingendpointconfiguration)
  * EndpointGroupArn **required**

### AddCustomRoutingEndpointsResponse
* AddCustomRoutingEndpointsResponse `object`
  * EndpointDescriptions
    * items [CustomRoutingEndpointDescription](#customroutingendpointdescription)
  * EndpointGroupArn

### AdvertiseByoipCidrRequest
* AdvertiseByoipCidrRequest `object`
  * Cidr **required**

### AdvertiseByoipCidrResponse
* AdvertiseByoipCidrResponse `object`
  * ByoipCidr
    * Cidr
    * Events
      * items [ByoipCidrEvent](#byoipcidrevent)
    * State

### AllowCustomRoutingTrafficRequest
* AllowCustomRoutingTrafficRequest `object`
  * AllowAllTrafficToEndpoint
  * DestinationAddresses
    * items [IpAddress](#ipaddress)
  * DestinationPorts
    * items [PortNumber](#portnumber)
  * EndpointGroupArn **required**
  * EndpointId **required**

### AssociatedEndpointGroupFoundException


### AssociatedListenerFoundException


### ByoipCidr
* ByoipCidr `object`: <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul>
  * Cidr
  * Events
    * items [ByoipCidrEvent](#byoipcidrevent)
  * State

### ByoipCidrEvent
* ByoipCidrEvent `object`: A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP).
  * Message
  * Timestamp

### ByoipCidrEvents
* ByoipCidrEvents `array`
  * items [ByoipCidrEvent](#byoipcidrevent)

### ByoipCidrNotFoundException


### ByoipCidrState
* ByoipCidrState `string` (values: PENDING_PROVISIONING, READY, PENDING_ADVERTISING, ADVERTISING, PENDING_WITHDRAWING, PENDING_DEPROVISIONING, DEPROVISIONED, FAILED_PROVISION, FAILED_ADVERTISING, FAILED_WITHDRAW, FAILED_DEPROVISION)

### ByoipCidrs
* ByoipCidrs `array`
  * items [ByoipCidr](#byoipcidr)

### CidrAuthorizationContext
* CidrAuthorizationContext `object`: <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
  * Message **required**
  * Signature **required**

### ClientAffinity
* ClientAffinity `string` (values: NONE, SOURCE_IP)

### ConflictException


### CreateAcceleratorRequest
* CreateAcceleratorRequest `object`
  * Enabled
  * IdempotencyToken **required**
  * IpAddressType
  * IpAddresses
    * items [IpAddress](#ipaddress)
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateAcceleratorResponse
* CreateAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### CreateCustomRoutingAcceleratorRequest
* CreateCustomRoutingAcceleratorRequest `object`
  * Enabled
  * IdempotencyToken **required**
  * IpAddressType
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateCustomRoutingAcceleratorResponse
* CreateCustomRoutingAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### CreateCustomRoutingEndpointGroupRequest
* CreateCustomRoutingEndpointGroupRequest `object`
  * DestinationConfigurations **required**
    * items [CustomRoutingDestinationConfiguration](#customroutingdestinationconfiguration)
  * EndpointGroupRegion **required**
  * IdempotencyToken **required**
  * ListenerArn **required**

### CreateCustomRoutingEndpointGroupResponse
* CreateCustomRoutingEndpointGroupResponse `object`
  * EndpointGroup
    * DestinationDescriptions
      * items [CustomRoutingDestinationDescription](#customroutingdestinationdescription)
    * EndpointDescriptions
      * items [CustomRoutingEndpointDescription](#customroutingendpointdescription)
    * EndpointGroupArn
    * EndpointGroupRegion

### CreateCustomRoutingListenerRequest
* CreateCustomRoutingListenerRequest `object`
  * AcceleratorArn **required**
  * IdempotencyToken **required**
  * PortRanges **required**
    * items [PortRange](#portrange)

### CreateCustomRoutingListenerResponse
* CreateCustomRoutingListenerResponse `object`
  * Listener
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)

### CreateEndpointGroupRequest
* CreateEndpointGroupRequest `object`
  * EndpointConfigurations
    * items [EndpointConfiguration](#endpointconfiguration)
  * EndpointGroupRegion **required**
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * IdempotencyToken **required**
  * ListenerArn **required**
  * PortOverrides
    * items [PortOverride](#portoverride)
  * ThresholdCount
  * TrafficDialPercentage

### CreateEndpointGroupResponse
* CreateEndpointGroupResponse `object`
  * EndpointGroup
    * EndpointDescriptions
      * items [EndpointDescription](#endpointdescription)
    * EndpointGroupArn
    * EndpointGroupRegion
    * HealthCheckIntervalSeconds
    * HealthCheckPath
    * HealthCheckPort
    * HealthCheckProtocol
    * PortOverrides
      * items [PortOverride](#portoverride)
    * ThresholdCount
    * TrafficDialPercentage

### CreateListenerRequest
* CreateListenerRequest `object`
  * AcceleratorArn **required**
  * ClientAffinity
  * IdempotencyToken **required**
  * PortRanges **required**
    * items [PortRange](#portrange)
  * Protocol **required**

### CreateListenerResponse
* CreateListenerResponse `object`
  * Listener
    * ClientAffinity
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)
    * Protocol

### CustomRoutingAccelerator
* CustomRoutingAccelerator `object`: Attributes of a custom routing accelerator.
  * AcceleratorArn
  * CreatedTime
  * DnsName
  * Enabled
  * IpAddressType
  * IpSets
    * items [IpSet](#ipset)
  * LastModifiedTime
  * Name
  * Status

### CustomRoutingAcceleratorAttributes
* CustomRoutingAcceleratorAttributes `object`: Attributes of a custom routing accelerator.
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

### CustomRoutingAcceleratorStatus
* CustomRoutingAcceleratorStatus `string` (values: DEPLOYED, IN_PROGRESS)

### CustomRoutingAccelerators
* CustomRoutingAccelerators `array`
  * items [CustomRoutingAccelerator](#customroutingaccelerator)

### CustomRoutingDestinationConfiguration
* CustomRoutingDestinationConfiguration `object`: For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
  * FromPort **required**
  * Protocols **required**
    * items [CustomRoutingProtocol](#customroutingprotocol)
  * ToPort **required**

### CustomRoutingDestinationConfigurations
* CustomRoutingDestinationConfigurations `array`
  * items [CustomRoutingDestinationConfiguration](#customroutingdestinationconfiguration)

### CustomRoutingDestinationDescription
* CustomRoutingDestinationDescription `object`: For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
  * FromPort
  * Protocols
    * items [Protocol](#protocol)
  * ToPort

### CustomRoutingDestinationDescriptions
* CustomRoutingDestinationDescriptions `array`
  * items [CustomRoutingDestinationDescription](#customroutingdestinationdescription)

### CustomRoutingDestinationTrafficState
* CustomRoutingDestinationTrafficState `string` (values: ALLOW, DENY)

### CustomRoutingEndpointConfiguration
* CustomRoutingEndpointConfiguration `object`: The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
  * EndpointId

### CustomRoutingEndpointConfigurations
* CustomRoutingEndpointConfigurations `array`
  * items [CustomRoutingEndpointConfiguration](#customroutingendpointconfiguration)

### CustomRoutingEndpointDescription
* CustomRoutingEndpointDescription `object`: A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.
  * EndpointId

### CustomRoutingEndpointDescriptions
* CustomRoutingEndpointDescriptions `array`
  * items [CustomRoutingEndpointDescription](#customroutingendpointdescription)

### CustomRoutingEndpointGroup
* CustomRoutingEndpointGroup `object`: A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener. 
  * DestinationDescriptions
    * items [CustomRoutingDestinationDescription](#customroutingdestinationdescription)
  * EndpointDescriptions
    * items [CustomRoutingEndpointDescription](#customroutingendpointdescription)
  * EndpointGroupArn
  * EndpointGroupRegion

### CustomRoutingEndpointGroups
* CustomRoutingEndpointGroups `array`
  * items [CustomRoutingEndpointGroup](#customroutingendpointgroup)

### CustomRoutingListener
* CustomRoutingListener `object`: A complex type for a listener for a custom routing accelerator.
  * ListenerArn
  * PortRanges
    * items [PortRange](#portrange)

### CustomRoutingListeners
* CustomRoutingListeners `array`
  * items [CustomRoutingListener](#customroutinglistener)

### CustomRoutingProtocol
* CustomRoutingProtocol `string` (values: TCP, UDP)

### CustomRoutingProtocols
* CustomRoutingProtocols `array`
  * items [CustomRoutingProtocol](#customroutingprotocol)

### DeleteAcceleratorRequest
* DeleteAcceleratorRequest `object`
  * AcceleratorArn **required**

### DeleteCustomRoutingAcceleratorRequest
* DeleteCustomRoutingAcceleratorRequest `object`
  * AcceleratorArn **required**

### DeleteCustomRoutingEndpointGroupRequest
* DeleteCustomRoutingEndpointGroupRequest `object`
  * EndpointGroupArn **required**

### DeleteCustomRoutingListenerRequest
* DeleteCustomRoutingListenerRequest `object`
  * ListenerArn **required**

### DeleteEndpointGroupRequest
* DeleteEndpointGroupRequest `object`
  * EndpointGroupArn **required**

### DeleteListenerRequest
* DeleteListenerRequest `object`
  * ListenerArn **required**

### DenyCustomRoutingTrafficRequest
* DenyCustomRoutingTrafficRequest `object`
  * DenyAllTrafficToEndpoint
  * DestinationAddresses
    * items [IpAddress](#ipaddress)
  * DestinationPorts
    * items [PortNumber](#portnumber)
  * EndpointGroupArn **required**
  * EndpointId **required**

### DeprovisionByoipCidrRequest
* DeprovisionByoipCidrRequest `object`
  * Cidr **required**

### DeprovisionByoipCidrResponse
* DeprovisionByoipCidrResponse `object`
  * ByoipCidr
    * Cidr
    * Events
      * items [ByoipCidrEvent](#byoipcidrevent)
    * State

### DescribeAcceleratorAttributesRequest
* DescribeAcceleratorAttributesRequest `object`
  * AcceleratorArn **required**

### DescribeAcceleratorAttributesResponse
* DescribeAcceleratorAttributesResponse `object`
  * AcceleratorAttributes
    * FlowLogsEnabled
    * FlowLogsS3Bucket
    * FlowLogsS3Prefix

### DescribeAcceleratorRequest
* DescribeAcceleratorRequest `object`
  * AcceleratorArn **required**

### DescribeAcceleratorResponse
* DescribeAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### DescribeCustomRoutingAcceleratorAttributesRequest
* DescribeCustomRoutingAcceleratorAttributesRequest `object`
  * AcceleratorArn **required**

### DescribeCustomRoutingAcceleratorAttributesResponse
* DescribeCustomRoutingAcceleratorAttributesResponse `object`
  * AcceleratorAttributes
    * FlowLogsEnabled
    * FlowLogsS3Bucket
    * FlowLogsS3Prefix

### DescribeCustomRoutingAcceleratorRequest
* DescribeCustomRoutingAcceleratorRequest `object`
  * AcceleratorArn **required**

### DescribeCustomRoutingAcceleratorResponse
* DescribeCustomRoutingAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### DescribeCustomRoutingEndpointGroupRequest
* DescribeCustomRoutingEndpointGroupRequest `object`
  * EndpointGroupArn **required**

### DescribeCustomRoutingEndpointGroupResponse
* DescribeCustomRoutingEndpointGroupResponse `object`
  * EndpointGroup
    * DestinationDescriptions
      * items [CustomRoutingDestinationDescription](#customroutingdestinationdescription)
    * EndpointDescriptions
      * items [CustomRoutingEndpointDescription](#customroutingendpointdescription)
    * EndpointGroupArn
    * EndpointGroupRegion

### DescribeCustomRoutingListenerRequest
* DescribeCustomRoutingListenerRequest `object`
  * ListenerArn **required**

### DescribeCustomRoutingListenerResponse
* DescribeCustomRoutingListenerResponse `object`
  * Listener
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)

### DescribeEndpointGroupRequest
* DescribeEndpointGroupRequest `object`
  * EndpointGroupArn **required**

### DescribeEndpointGroupResponse
* DescribeEndpointGroupResponse `object`
  * EndpointGroup
    * EndpointDescriptions
      * items [EndpointDescription](#endpointdescription)
    * EndpointGroupArn
    * EndpointGroupRegion
    * HealthCheckIntervalSeconds
    * HealthCheckPath
    * HealthCheckPort
    * HealthCheckProtocol
    * PortOverrides
      * items [PortOverride](#portoverride)
    * ThresholdCount
    * TrafficDialPercentage

### DescribeListenerRequest
* DescribeListenerRequest `object`
  * ListenerArn **required**

### DescribeListenerResponse
* DescribeListenerResponse `object`
  * Listener
    * ClientAffinity
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)
    * Protocol

### DestinationAddresses
* DestinationAddresses `array`
  * items [IpAddress](#ipaddress)

### DestinationPortMapping
* DestinationPortMapping `object`: The port mappings for a specified endpoint IP address (destination).
  * AcceleratorArn
  * AcceleratorSocketAddresses
    * items [SocketAddress](#socketaddress)
  * DestinationSocketAddress
    * IpAddress
    * Port
  * DestinationTrafficState
  * EndpointGroupArn
  * EndpointGroupRegion
  * EndpointId
  * IpAddressType

### DestinationPortMappings
* DestinationPortMappings `array`
  * items [DestinationPortMapping](#destinationportmapping)

### DestinationPorts
* DestinationPorts `array`
  * items [PortNumber](#portnumber)

### EndpointAlreadyExistsException


### EndpointConfiguration
* EndpointConfiguration `object`: A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
  * ClientIPPreservationEnabled
  * EndpointId
  * Weight

### EndpointConfigurations
* EndpointConfigurations `array`
  * items [EndpointConfiguration](#endpointconfiguration)

### EndpointDescription
* EndpointDescription `object`: A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
  * ClientIPPreservationEnabled
  * EndpointId
  * HealthReason
  * HealthState
  * Weight

### EndpointDescriptions
* EndpointDescriptions `array`
  * items [EndpointDescription](#endpointdescription)

### EndpointGroup
* EndpointGroup `object`: A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
  * EndpointDescriptions
    * items [EndpointDescription](#endpointdescription)
  * EndpointGroupArn
  * EndpointGroupRegion
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * PortOverrides
    * items [PortOverride](#portoverride)
  * ThresholdCount
  * TrafficDialPercentage

### EndpointGroupAlreadyExistsException


### EndpointGroupNotFoundException


### EndpointGroups
* EndpointGroups `array`
  * items [EndpointGroup](#endpointgroup)

### EndpointIds
* EndpointIds `array`
  * items [GenericString](#genericstring)

### EndpointNotFoundException


### EndpointWeight
* EndpointWeight `integer`

### GenericBoolean
* GenericBoolean `boolean`

### GenericString
* GenericString `string`

### HealthCheckIntervalSeconds
* HealthCheckIntervalSeconds `integer`

### HealthCheckPath
* HealthCheckPath `string`

### HealthCheckPort
* HealthCheckPort `integer`

### HealthCheckProtocol
* HealthCheckProtocol `string` (values: TCP, HTTP, HTTPS)

### HealthState
* HealthState `string` (values: INITIAL, HEALTHY, UNHEALTHY)

### IdempotencyToken
* IdempotencyToken `string`

### IncorrectCidrStateException


### InternalServiceErrorException


### InvalidArgumentException


### InvalidNextTokenException


### InvalidPortRangeException


### IpAddress
* IpAddress `string`

### IpAddressType
* IpAddressType `string` (values: IPV4)

### IpAddresses
* IpAddresses `array`
  * items [IpAddress](#ipaddress)

### IpSet
* IpSet `object`: A complex type for the set of IP addresses for an accelerator.
  * IpAddresses
    * items [IpAddress](#ipaddress)
  * IpFamily

### IpSets
* IpSets `array`
  * items [IpSet](#ipset)

### LimitExceededException


### ListAcceleratorsRequest
* ListAcceleratorsRequest `object`
  * MaxResults
  * NextToken

### ListAcceleratorsResponse
* ListAcceleratorsResponse `object`
  * Accelerators
    * items [Accelerator](#accelerator)
  * NextToken

### ListByoipCidrsRequest
* ListByoipCidrsRequest `object`
  * MaxResults
  * NextToken

### ListByoipCidrsResponse
* ListByoipCidrsResponse `object`
  * ByoipCidrs
    * items [ByoipCidr](#byoipcidr)
  * NextToken

### ListCustomRoutingAcceleratorsRequest
* ListCustomRoutingAcceleratorsRequest `object`
  * MaxResults
  * NextToken

### ListCustomRoutingAcceleratorsResponse
* ListCustomRoutingAcceleratorsResponse `object`
  * Accelerators
    * items [CustomRoutingAccelerator](#customroutingaccelerator)
  * NextToken

### ListCustomRoutingEndpointGroupsRequest
* ListCustomRoutingEndpointGroupsRequest `object`
  * ListenerArn **required**
  * MaxResults
  * NextToken

### ListCustomRoutingEndpointGroupsResponse
* ListCustomRoutingEndpointGroupsResponse `object`
  * EndpointGroups
    * items [CustomRoutingEndpointGroup](#customroutingendpointgroup)
  * NextToken

### ListCustomRoutingListenersRequest
* ListCustomRoutingListenersRequest `object`
  * AcceleratorArn **required**
  * MaxResults
  * NextToken

### ListCustomRoutingListenersResponse
* ListCustomRoutingListenersResponse `object`
  * Listeners
    * items [CustomRoutingListener](#customroutinglistener)
  * NextToken

### ListCustomRoutingPortMappingsByDestinationRequest
* ListCustomRoutingPortMappingsByDestinationRequest `object`
  * DestinationAddress **required**
  * EndpointId **required**
  * MaxResults
  * NextToken

### ListCustomRoutingPortMappingsByDestinationResponse
* ListCustomRoutingPortMappingsByDestinationResponse `object`
  * DestinationPortMappings
    * items [DestinationPortMapping](#destinationportmapping)
  * NextToken

### ListCustomRoutingPortMappingsRequest
* ListCustomRoutingPortMappingsRequest `object`
  * AcceleratorArn **required**
  * EndpointGroupArn
  * MaxResults
  * NextToken

### ListCustomRoutingPortMappingsResponse
* ListCustomRoutingPortMappingsResponse `object`
  * NextToken
  * PortMappings
    * items [PortMapping](#portmapping)

### ListEndpointGroupsRequest
* ListEndpointGroupsRequest `object`
  * ListenerArn **required**
  * MaxResults
  * NextToken

### ListEndpointGroupsResponse
* ListEndpointGroupsResponse `object`
  * EndpointGroups
    * items [EndpointGroup](#endpointgroup)
  * NextToken

### ListListenersRequest
* ListListenersRequest `object`
  * AcceleratorArn **required**
  * MaxResults
  * NextToken

### ListListenersResponse
* ListListenersResponse `object`
  * Listeners
    * items [Listener](#listener)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### Listener
* Listener `object`: A complex type for a listener.
  * ClientAffinity
  * ListenerArn
  * PortRanges
    * items [PortRange](#portrange)
  * Protocol

### ListenerNotFoundException


### Listeners
* Listeners `array`
  * items [Listener](#listener)

### MaxResults
* MaxResults `integer`

### PortMapping
* PortMapping `object`: Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets. 
  * AcceleratorPort
  * DestinationSocketAddress
    * IpAddress
    * Port
  * DestinationTrafficState
  * EndpointGroupArn
  * EndpointId
  * Protocols
    * items [CustomRoutingProtocol](#customroutingprotocol)

### PortMappings
* PortMappings `array`
  * items [PortMapping](#portmapping)

### PortMappingsMaxResults
* PortMappingsMaxResults `integer`

### PortNumber
* PortNumber `integer`

### PortOverride
* PortOverride `object`: <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
  * EndpointPort
  * ListenerPort

### PortOverrides
* PortOverrides `array`
  * items [PortOverride](#portoverride)

### PortRange
* PortRange `object`: A complex type for a range of ports for a listener.
  * FromPort
  * ToPort

### PortRanges
* PortRanges `array`
  * items [PortRange](#portrange)

### Protocol
* Protocol `string` (values: TCP, UDP)

### Protocols
* Protocols `array`
  * items [Protocol](#protocol)

### ProvisionByoipCidrRequest
* ProvisionByoipCidrRequest `object`
  * Cidr **required**
  * CidrAuthorizationContext **required**
    * Message **required**
    * Signature **required**

### ProvisionByoipCidrResponse
* ProvisionByoipCidrResponse `object`
  * ByoipCidr
    * Cidr
    * Events
      * items [ByoipCidrEvent](#byoipcidrevent)
    * State

### RemoveCustomRoutingEndpointsRequest
* RemoveCustomRoutingEndpointsRequest `object`
  * EndpointGroupArn **required**
  * EndpointIds **required**
    * items [GenericString](#genericstring)

### ResourceArn
* ResourceArn `string`

### SocketAddress
* SocketAddress `object`: An IP address/port combination.
  * IpAddress
  * Port

### SocketAddresses
* SocketAddresses `array`
  * items [SocketAddress](#socketaddress)

### Tag
* Tag `object`: A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### ThresholdCount
* ThresholdCount `integer`

### Timestamp
* Timestamp `string`

### TrafficDialPercentage
* TrafficDialPercentage `number`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAcceleratorAttributesRequest
* UpdateAcceleratorAttributesRequest `object`
  * AcceleratorArn **required**
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

### UpdateAcceleratorAttributesResponse
* UpdateAcceleratorAttributesResponse `object`
  * AcceleratorAttributes
    * FlowLogsEnabled
    * FlowLogsS3Bucket
    * FlowLogsS3Prefix

### UpdateAcceleratorRequest
* UpdateAcceleratorRequest `object`
  * AcceleratorArn **required**
  * Enabled
  * IpAddressType
  * Name

### UpdateAcceleratorResponse
* UpdateAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### UpdateCustomRoutingAcceleratorAttributesRequest
* UpdateCustomRoutingAcceleratorAttributesRequest `object`
  * AcceleratorArn **required**
  * FlowLogsEnabled
  * FlowLogsS3Bucket
  * FlowLogsS3Prefix

### UpdateCustomRoutingAcceleratorAttributesResponse
* UpdateCustomRoutingAcceleratorAttributesResponse `object`
  * AcceleratorAttributes
    * FlowLogsEnabled
    * FlowLogsS3Bucket
    * FlowLogsS3Prefix

### UpdateCustomRoutingAcceleratorRequest
* UpdateCustomRoutingAcceleratorRequest `object`
  * AcceleratorArn **required**
  * Enabled
  * IpAddressType
  * Name

### UpdateCustomRoutingAcceleratorResponse
* UpdateCustomRoutingAcceleratorResponse `object`
  * Accelerator
    * AcceleratorArn
    * CreatedTime
    * DnsName
    * Enabled
    * IpAddressType
    * IpSets
      * items [IpSet](#ipset)
    * LastModifiedTime
    * Name
    * Status

### UpdateCustomRoutingListenerRequest
* UpdateCustomRoutingListenerRequest `object`
  * ListenerArn **required**
  * PortRanges **required**
    * items [PortRange](#portrange)

### UpdateCustomRoutingListenerResponse
* UpdateCustomRoutingListenerResponse `object`
  * Listener
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)

### UpdateEndpointGroupRequest
* UpdateEndpointGroupRequest `object`
  * EndpointConfigurations
    * items [EndpointConfiguration](#endpointconfiguration)
  * EndpointGroupArn **required**
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * PortOverrides
    * items [PortOverride](#portoverride)
  * ThresholdCount
  * TrafficDialPercentage

### UpdateEndpointGroupResponse
* UpdateEndpointGroupResponse `object`
  * EndpointGroup
    * EndpointDescriptions
      * items [EndpointDescription](#endpointdescription)
    * EndpointGroupArn
    * EndpointGroupRegion
    * HealthCheckIntervalSeconds
    * HealthCheckPath
    * HealthCheckPort
    * HealthCheckProtocol
    * PortOverrides
      * items [PortOverride](#portoverride)
    * ThresholdCount
    * TrafficDialPercentage

### UpdateListenerRequest
* UpdateListenerRequest `object`
  * ClientAffinity
  * ListenerArn **required**
  * PortRanges
    * items [PortRange](#portrange)
  * Protocol

### UpdateListenerResponse
* UpdateListenerResponse `object`
  * Listener
    * ClientAffinity
    * ListenerArn
    * PortRanges
      * items [PortRange](#portrange)
    * Protocol

### WithdrawByoipCidrRequest
* WithdrawByoipCidrRequest `object`
  * Cidr **required**

### WithdrawByoipCidrResponse
* WithdrawByoipCidrResponse `object`
  * ByoipCidr
    * Cidr
    * Events
      * items [ByoipCidrEvent](#byoipcidrevent)
    * State


