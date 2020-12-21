# @datafire/amazonaws_route53resolver

Client library for Amazon Route 53 Resolver

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_route53resolver
```
```js
let amazonaws_route53resolver = require('@datafire/amazonaws_route53resolver').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or ELB load balancers. Resolver performs recursive lookups against public name servers for all other domain names.</p> <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p> <p> <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b> </p> <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for AWS resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Conditionally forward queries from a VPC to resolvers on your network</b> </p> <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Like Amazon VPC, Resolver is regional. In each region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>

## Actions

### AssociateResolverEndpointIpAddress



```js
amazonaws_route53resolver.AssociateResolverEndpointIpAddress({
  "ResolverEndpointId": null,
  "IpAddress": null
}, context)
```

#### Input
* input `object`
  * IpAddress **required**
    * Ip
    * IpId
    * SubnetId
  * ResolverEndpointId **required**

#### Output
* output [AssociateResolverEndpointIpAddressResponse](#associateresolverendpointipaddressresponse)

### AssociateResolverQueryLogConfig



```js
amazonaws_route53resolver.AssociateResolverQueryLogConfig({
  "ResolverQueryLogConfigId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResolverQueryLogConfigId **required**
  * ResourceId **required**

#### Output
* output [AssociateResolverQueryLogConfigResponse](#associateresolverquerylogconfigresponse)

### AssociateResolverRule



```js
amazonaws_route53resolver.AssociateResolverRule({
  "ResolverRuleId": null,
  "VPCId": null
}, context)
```

#### Input
* input `object`
  * Name
  * ResolverRuleId **required**
  * VPCId **required**

#### Output
* output [AssociateResolverRuleResponse](#associateresolverruleresponse)

### CreateResolverEndpoint



```js
amazonaws_route53resolver.CreateResolverEndpoint({
  "CreatorRequestId": null,
  "SecurityGroupIds": null,
  "Direction": null,
  "IpAddresses": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId **required**
  * Direction **required**
  * IpAddresses **required**
    * items [IpAddressRequest](#ipaddressrequest)
  * Name
  * SecurityGroupIds **required**
    * items [ResourceId](#resourceid)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateResolverEndpointResponse](#createresolverendpointresponse)

### CreateResolverQueryLogConfig



```js
amazonaws_route53resolver.CreateResolverQueryLogConfig({
  "Name": null,
  "DestinationArn": null,
  "CreatorRequestId": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId **required**
  * DestinationArn **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateResolverQueryLogConfigResponse](#createresolverquerylogconfigresponse)

### CreateResolverRule



```js
amazonaws_route53resolver.CreateResolverRule({
  "CreatorRequestId": null,
  "RuleType": null,
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId **required**
  * DomainName **required**
  * Name
  * ResolverEndpointId
  * RuleType **required**
  * Tags
    * items [Tag](#tag)
  * TargetIps
    * items [TargetAddress](#targetaddress)

#### Output
* output [CreateResolverRuleResponse](#createresolverruleresponse)

### DeleteResolverEndpoint



```js
amazonaws_route53resolver.DeleteResolverEndpoint({
  "ResolverEndpointId": null
}, context)
```

#### Input
* input `object`
  * ResolverEndpointId **required**

#### Output
* output [DeleteResolverEndpointResponse](#deleteresolverendpointresponse)

### DeleteResolverQueryLogConfig



```js
amazonaws_route53resolver.DeleteResolverQueryLogConfig({
  "ResolverQueryLogConfigId": null
}, context)
```

#### Input
* input `object`
  * ResolverQueryLogConfigId **required**

#### Output
* output [DeleteResolverQueryLogConfigResponse](#deleteresolverquerylogconfigresponse)

### DeleteResolverRule



```js
amazonaws_route53resolver.DeleteResolverRule({
  "ResolverRuleId": null
}, context)
```

#### Input
* input `object`
  * ResolverRuleId **required**

#### Output
* output [DeleteResolverRuleResponse](#deleteresolverruleresponse)

### DisassociateResolverEndpointIpAddress



```js
amazonaws_route53resolver.DisassociateResolverEndpointIpAddress({
  "ResolverEndpointId": null,
  "IpAddress": null
}, context)
```

#### Input
* input `object`
  * IpAddress **required**
    * Ip
    * IpId
    * SubnetId
  * ResolverEndpointId **required**

#### Output
* output [DisassociateResolverEndpointIpAddressResponse](#disassociateresolverendpointipaddressresponse)

### DisassociateResolverQueryLogConfig



```js
amazonaws_route53resolver.DisassociateResolverQueryLogConfig({
  "ResolverQueryLogConfigId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResolverQueryLogConfigId **required**
  * ResourceId **required**

#### Output
* output [DisassociateResolverQueryLogConfigResponse](#disassociateresolverquerylogconfigresponse)

### DisassociateResolverRule



```js
amazonaws_route53resolver.DisassociateResolverRule({
  "VPCId": null,
  "ResolverRuleId": null
}, context)
```

#### Input
* input `object`
  * ResolverRuleId **required**
  * VPCId **required**

#### Output
* output [DisassociateResolverRuleResponse](#disassociateresolverruleresponse)

### GetResolverDnssecConfig



```js
amazonaws_route53resolver.GetResolverDnssecConfig({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**

#### Output
* output [GetResolverDnssecConfigResponse](#getresolverdnssecconfigresponse)

### GetResolverEndpoint



```js
amazonaws_route53resolver.GetResolverEndpoint({
  "ResolverEndpointId": null
}, context)
```

#### Input
* input `object`
  * ResolverEndpointId **required**

#### Output
* output [GetResolverEndpointResponse](#getresolverendpointresponse)

### GetResolverQueryLogConfig



```js
amazonaws_route53resolver.GetResolverQueryLogConfig({
  "ResolverQueryLogConfigId": null
}, context)
```

#### Input
* input `object`
  * ResolverQueryLogConfigId **required**

#### Output
* output [GetResolverQueryLogConfigResponse](#getresolverquerylogconfigresponse)

### GetResolverQueryLogConfigAssociation



```js
amazonaws_route53resolver.GetResolverQueryLogConfigAssociation({
  "ResolverQueryLogConfigAssociationId": null
}, context)
```

#### Input
* input `object`
  * ResolverQueryLogConfigAssociationId **required**

#### Output
* output [GetResolverQueryLogConfigAssociationResponse](#getresolverquerylogconfigassociationresponse)

### GetResolverQueryLogConfigPolicy



```js
amazonaws_route53resolver.GetResolverQueryLogConfigPolicy({
  "Arn": null
}, context)
```

#### Input
* input `object`
  * Arn **required**

#### Output
* output [GetResolverQueryLogConfigPolicyResponse](#getresolverquerylogconfigpolicyresponse)

### GetResolverRule



```js
amazonaws_route53resolver.GetResolverRule({
  "ResolverRuleId": null
}, context)
```

#### Input
* input `object`
  * ResolverRuleId **required**

#### Output
* output [GetResolverRuleResponse](#getresolverruleresponse)

### GetResolverRuleAssociation



```js
amazonaws_route53resolver.GetResolverRuleAssociation({
  "ResolverRuleAssociationId": null
}, context)
```

#### Input
* input `object`
  * ResolverRuleAssociationId **required**

#### Output
* output [GetResolverRuleAssociationResponse](#getresolverruleassociationresponse)

### GetResolverRulePolicy



```js
amazonaws_route53resolver.GetResolverRulePolicy({
  "Arn": null
}, context)
```

#### Input
* input `object`
  * Arn **required**

#### Output
* output [GetResolverRulePolicyResponse](#getresolverrulepolicyresponse)

### ListResolverDnssecConfigs



```js
amazonaws_route53resolver.ListResolverDnssecConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListResolverDnssecConfigsResponse](#listresolverdnssecconfigsresponse)

### ListResolverEndpointIpAddresses



```js
amazonaws_route53resolver.ListResolverEndpointIpAddresses({
  "ResolverEndpointId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResolverEndpointId **required**

#### Output
* output [ListResolverEndpointIpAddressesResponse](#listresolverendpointipaddressesresponse)

### ListResolverEndpoints



```js
amazonaws_route53resolver.ListResolverEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListResolverEndpointsResponse](#listresolverendpointsresponse)

### ListResolverQueryLogConfigAssociations



```js
amazonaws_route53resolver.ListResolverQueryLogConfigAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListResolverQueryLogConfigAssociationsResponse](#listresolverquerylogconfigassociationsresponse)

### ListResolverQueryLogConfigs



```js
amazonaws_route53resolver.ListResolverQueryLogConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListResolverQueryLogConfigsResponse](#listresolverquerylogconfigsresponse)

### ListResolverRuleAssociations



```js
amazonaws_route53resolver.ListResolverRuleAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListResolverRuleAssociationsResponse](#listresolverruleassociationsresponse)

### ListResolverRules



```js
amazonaws_route53resolver.ListResolverRules({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

#### Output
* output [ListResolverRulesResponse](#listresolverrulesresponse)

### ListTagsForResource



```js
amazonaws_route53resolver.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutResolverQueryLogConfigPolicy



```js
amazonaws_route53resolver.PutResolverQueryLogConfigPolicy({
  "Arn": null,
  "ResolverQueryLogConfigPolicy": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * ResolverQueryLogConfigPolicy **required**

#### Output
* output [PutResolverQueryLogConfigPolicyResponse](#putresolverquerylogconfigpolicyresponse)

### PutResolverRulePolicy



```js
amazonaws_route53resolver.PutResolverRulePolicy({
  "Arn": null,
  "ResolverRulePolicy": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * ResolverRulePolicy **required**

#### Output
* output [PutResolverRulePolicyResponse](#putresolverrulepolicyresponse)

### TagResource



```js
amazonaws_route53resolver.TagResource({
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
amazonaws_route53resolver.UntagResource({
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

### UpdateResolverDnssecConfig



```js
amazonaws_route53resolver.UpdateResolverDnssecConfig({
  "ResourceId": null,
  "Validation": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * Validation **required**

#### Output
* output [UpdateResolverDnssecConfigResponse](#updateresolverdnssecconfigresponse)

### UpdateResolverEndpoint



```js
amazonaws_route53resolver.UpdateResolverEndpoint({
  "ResolverEndpointId": null
}, context)
```

#### Input
* input `object`
  * Name
  * ResolverEndpointId **required**

#### Output
* output [UpdateResolverEndpointResponse](#updateresolverendpointresponse)

### UpdateResolverRule



```js
amazonaws_route53resolver.UpdateResolverRule({
  "ResolverRuleId": null,
  "Config": null
}, context)
```

#### Input
* input `object`
  * Config **required**
    * Name
    * ResolverEndpointId
    * TargetIps
      * items [TargetAddress](#targetaddress)
  * ResolverRuleId **required**

#### Output
* output [UpdateResolverRuleResponse](#updateresolverruleresponse)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`

### Arn
* Arn `string`

### AssociateResolverEndpointIpAddressRequest
* AssociateResolverEndpointIpAddressRequest `object`
  * IpAddress **required**
    * Ip
    * IpId
    * SubnetId
  * ResolverEndpointId **required**

### AssociateResolverEndpointIpAddressResponse
* AssociateResolverEndpointIpAddressResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### AssociateResolverQueryLogConfigRequest
* AssociateResolverQueryLogConfigRequest `object`
  * ResolverQueryLogConfigId **required**
  * ResourceId **required**

### AssociateResolverQueryLogConfigResponse
* AssociateResolverQueryLogConfigResponse `object`
  * ResolverQueryLogConfigAssociation
    * CreationTime
    * Error
    * ErrorMessage
    * Id
    * ResolverQueryLogConfigId
    * ResourceId
    * Status

### AssociateResolverRuleRequest
* AssociateResolverRuleRequest `object`
  * Name
  * ResolverRuleId **required**
  * VPCId **required**

### AssociateResolverRuleResponse
* AssociateResolverRuleResponse `object`
  * ResolverRuleAssociation
    * Id
    * Name
    * ResolverRuleId
    * Status
    * StatusMessage
    * VPCId

### Boolean
* Boolean `boolean`

### Count
* Count `integer`

### CreateResolverEndpointRequest
* CreateResolverEndpointRequest `object`
  * CreatorRequestId **required**
  * Direction **required**
  * IpAddresses **required**
    * items [IpAddressRequest](#ipaddressrequest)
  * Name
  * SecurityGroupIds **required**
    * items [ResourceId](#resourceid)
  * Tags
    * items [Tag](#tag)

### CreateResolverEndpointResponse
* CreateResolverEndpointResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### CreateResolverQueryLogConfigRequest
* CreateResolverQueryLogConfigRequest `object`
  * CreatorRequestId **required**
  * DestinationArn **required**
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateResolverQueryLogConfigResponse
* CreateResolverQueryLogConfigResponse `object`
  * ResolverQueryLogConfig
    * Arn
    * AssociationCount
    * CreationTime
    * CreatorRequestId
    * DestinationArn
    * Id
    * Name
    * OwnerId
    * ShareStatus
    * Status

### CreateResolverRuleRequest
* CreateResolverRuleRequest `object`
  * CreatorRequestId **required**
  * DomainName **required**
  * Name
  * ResolverEndpointId
  * RuleType **required**
  * Tags
    * items [Tag](#tag)
  * TargetIps
    * items [TargetAddress](#targetaddress)

### CreateResolverRuleResponse
* CreateResolverRuleResponse `object`
  * ResolverRule
    * Arn
    * CreationTime
    * CreatorRequestId
    * DomainName
    * Id
    * ModificationTime
    * Name
    * OwnerId
    * ResolverEndpointId
    * RuleType
    * ShareStatus
    * Status
    * StatusMessage
    * TargetIps
      * items [TargetAddress](#targetaddress)

### CreatorRequestId
* CreatorRequestId `string`

### DeleteResolverEndpointRequest
* DeleteResolverEndpointRequest `object`
  * ResolverEndpointId **required**

### DeleteResolverEndpointResponse
* DeleteResolverEndpointResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### DeleteResolverQueryLogConfigRequest
* DeleteResolverQueryLogConfigRequest `object`
  * ResolverQueryLogConfigId **required**

### DeleteResolverQueryLogConfigResponse
* DeleteResolverQueryLogConfigResponse `object`
  * ResolverQueryLogConfig
    * Arn
    * AssociationCount
    * CreationTime
    * CreatorRequestId
    * DestinationArn
    * Id
    * Name
    * OwnerId
    * ShareStatus
    * Status

### DeleteResolverRuleRequest
* DeleteResolverRuleRequest `object`
  * ResolverRuleId **required**

### DeleteResolverRuleResponse
* DeleteResolverRuleResponse `object`
  * ResolverRule
    * Arn
    * CreationTime
    * CreatorRequestId
    * DomainName
    * Id
    * ModificationTime
    * Name
    * OwnerId
    * ResolverEndpointId
    * RuleType
    * ShareStatus
    * Status
    * StatusMessage
    * TargetIps
      * items [TargetAddress](#targetaddress)

### DestinationArn
* DestinationArn `string`

### DisassociateResolverEndpointIpAddressRequest
* DisassociateResolverEndpointIpAddressRequest `object`
  * IpAddress **required**
    * Ip
    * IpId
    * SubnetId
  * ResolverEndpointId **required**

### DisassociateResolverEndpointIpAddressResponse
* DisassociateResolverEndpointIpAddressResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### DisassociateResolverQueryLogConfigRequest
* DisassociateResolverQueryLogConfigRequest `object`
  * ResolverQueryLogConfigId **required**
  * ResourceId **required**

### DisassociateResolverQueryLogConfigResponse
* DisassociateResolverQueryLogConfigResponse `object`
  * ResolverQueryLogConfigAssociation
    * CreationTime
    * Error
    * ErrorMessage
    * Id
    * ResolverQueryLogConfigId
    * ResourceId
    * Status

### DisassociateResolverRuleRequest
* DisassociateResolverRuleRequest `object`
  * ResolverRuleId **required**
  * VPCId **required**

### DisassociateResolverRuleResponse
* DisassociateResolverRuleResponse `object`
  * ResolverRuleAssociation
    * Id
    * Name
    * ResolverRuleId
    * Status
    * StatusMessage
    * VPCId

### DomainName
* DomainName `string`

### Filter
* Filter `object`: <p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>
  * Name
  * Values
    * items [FilterValue](#filtervalue)

### FilterName
* FilterName `string`

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### Filters
* Filters `array`
  * items [Filter](#filter)

### GetResolverDnssecConfigRequest
* GetResolverDnssecConfigRequest `object`
  * ResourceId **required**

### GetResolverDnssecConfigResponse
* GetResolverDnssecConfigResponse `object`
  * ResolverDNSSECConfig
    * Id
    * OwnerId
    * ResourceId
    * ValidationStatus

### GetResolverEndpointRequest
* GetResolverEndpointRequest `object`
  * ResolverEndpointId **required**

### GetResolverEndpointResponse
* GetResolverEndpointResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### GetResolverQueryLogConfigAssociationRequest
* GetResolverQueryLogConfigAssociationRequest `object`
  * ResolverQueryLogConfigAssociationId **required**

### GetResolverQueryLogConfigAssociationResponse
* GetResolverQueryLogConfigAssociationResponse `object`
  * ResolverQueryLogConfigAssociation
    * CreationTime
    * Error
    * ErrorMessage
    * Id
    * ResolverQueryLogConfigId
    * ResourceId
    * Status

### GetResolverQueryLogConfigPolicyRequest
* GetResolverQueryLogConfigPolicyRequest `object`
  * Arn **required**

### GetResolverQueryLogConfigPolicyResponse
* GetResolverQueryLogConfigPolicyResponse `object`
  * ResolverQueryLogConfigPolicy

### GetResolverQueryLogConfigRequest
* GetResolverQueryLogConfigRequest `object`
  * ResolverQueryLogConfigId **required**

### GetResolverQueryLogConfigResponse
* GetResolverQueryLogConfigResponse `object`
  * ResolverQueryLogConfig
    * Arn
    * AssociationCount
    * CreationTime
    * CreatorRequestId
    * DestinationArn
    * Id
    * Name
    * OwnerId
    * ShareStatus
    * Status

### GetResolverRuleAssociationRequest
* GetResolverRuleAssociationRequest `object`
  * ResolverRuleAssociationId **required**

### GetResolverRuleAssociationResponse
* GetResolverRuleAssociationResponse `object`
  * ResolverRuleAssociation
    * Id
    * Name
    * ResolverRuleId
    * Status
    * StatusMessage
    * VPCId

### GetResolverRulePolicyRequest
* GetResolverRulePolicyRequest `object`
  * Arn **required**

### GetResolverRulePolicyResponse
* GetResolverRulePolicyResponse `object`
  * ResolverRulePolicy

### GetResolverRuleRequest
* GetResolverRuleRequest `object`
  * ResolverRuleId **required**

### GetResolverRuleResponse
* GetResolverRuleResponse `object`
  * ResolverRule
    * Arn
    * CreationTime
    * CreatorRequestId
    * DomainName
    * Id
    * ModificationTime
    * Name
    * OwnerId
    * ResolverEndpointId
    * RuleType
    * ShareStatus
    * Status
    * StatusMessage
    * TargetIps
      * items [TargetAddress](#targetaddress)

### InternalServiceErrorException


### InvalidNextTokenException


### InvalidParameterException


### InvalidPolicyDocument


### InvalidRequestException


### InvalidTagException


### Ip
* Ip `string`

### IpAddressCount
* IpAddressCount `integer`

### IpAddressRequest
* IpAddressRequest `object`: In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.
  * Ip
  * SubnetId **required**

### IpAddressResponse
* IpAddressResponse `object`: In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
  * CreationTime
  * Ip
  * IpId
  * ModificationTime
  * Status
  * StatusMessage
  * SubnetId

### IpAddressStatus
* IpAddressStatus `string` (values: CREATING, FAILED_CREATION, ATTACHING, ATTACHED, REMAP_DETACHING, REMAP_ATTACHING, DETACHING, FAILED_RESOURCE_GONE, DELETING, DELETE_FAILED_FAS_EXPIRED)

### IpAddressUpdate
* IpAddressUpdate `object`: In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
  * Ip
  * IpId
  * SubnetId

### IpAddressesRequest
* IpAddressesRequest `array`
  * items [IpAddressRequest](#ipaddressrequest)

### IpAddressesResponse
* IpAddressesResponse `array`
  * items [IpAddressResponse](#ipaddressresponse)

### LimitExceededException


### ListResolverDnssecConfigsRequest
* ListResolverDnssecConfigsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListResolverDnssecConfigsResponse
* ListResolverDnssecConfigsResponse `object`
  * NextToken
  * ResolverDnssecConfigs
    * items [ResolverDnssecConfig](#resolverdnssecconfig)

### ListResolverEndpointIpAddressesRequest
* ListResolverEndpointIpAddressesRequest `object`
  * MaxResults
  * NextToken
  * ResolverEndpointId **required**

### ListResolverEndpointIpAddressesResponse
* ListResolverEndpointIpAddressesResponse `object`
  * IpAddresses
    * items [IpAddressResponse](#ipaddressresponse)
  * MaxResults
  * NextToken

### ListResolverEndpointsRequest
* ListResolverEndpointsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListResolverEndpointsResponse
* ListResolverEndpointsResponse `object`
  * MaxResults
  * NextToken
  * ResolverEndpoints
    * items [ResolverEndpoint](#resolverendpoint)

### ListResolverQueryLogConfigAssociationsRequest
* ListResolverQueryLogConfigAssociationsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

### ListResolverQueryLogConfigAssociationsResponse
* ListResolverQueryLogConfigAssociationsResponse `object`
  * NextToken
  * ResolverQueryLogConfigAssociations
    * items [ResolverQueryLogConfigAssociation](#resolverquerylogconfigassociation)
  * TotalCount
  * TotalFilteredCount

### ListResolverQueryLogConfigsRequest
* ListResolverQueryLogConfigsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

### ListResolverQueryLogConfigsResponse
* ListResolverQueryLogConfigsResponse `object`
  * NextToken
  * ResolverQueryLogConfigs
    * items [ResolverQueryLogConfig](#resolverquerylogconfig)
  * TotalCount
  * TotalFilteredCount

### ListResolverRuleAssociationsRequest
* ListResolverRuleAssociationsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListResolverRuleAssociationsResponse
* ListResolverRuleAssociationsResponse `object`
  * MaxResults
  * NextToken
  * ResolverRuleAssociations
    * items [ResolverRuleAssociation](#resolverruleassociation)

### ListResolverRulesRequest
* ListResolverRulesRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### ListResolverRulesResponse
* ListResolverRulesResponse `object`
  * MaxResults
  * NextToken
  * ResolverRules
    * items [ResolverRule](#resolverrule)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### NextToken
* NextToken `string`

### Port
* Port `integer`

### PutResolverQueryLogConfigPolicyRequest
* PutResolverQueryLogConfigPolicyRequest `object`
  * Arn **required**
  * ResolverQueryLogConfigPolicy **required**

### PutResolverQueryLogConfigPolicyResponse
* PutResolverQueryLogConfigPolicyResponse `object`: The response to a <code>PutResolverQueryLogConfigPolicy</code> request.
  * ReturnValue

### PutResolverRulePolicyRequest
* PutResolverRulePolicyRequest `object`
  * Arn **required**
  * ResolverRulePolicy **required**

### PutResolverRulePolicyResponse
* PutResolverRulePolicyResponse `object`: The response to a <code>PutResolverRulePolicy</code> request.
  * ReturnValue

### ResolverDNSSECValidationStatus
* ResolverDNSSECValidationStatus `string` (values: ENABLING, ENABLED, DISABLING, DISABLED)

### ResolverDnssecConfig
* ResolverDnssecConfig `object`: A complex type that contains information about a configuration for DNSSEC validation.
  * Id
  * OwnerId
  * ResourceId
  * ValidationStatus

### ResolverDnssecConfigList
* ResolverDnssecConfigList `array`
  * items [ResolverDnssecConfig](#resolverdnssecconfig)

### ResolverEndpoint
* ResolverEndpoint `object`: In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
  * Arn
  * CreationTime
  * CreatorRequestId
  * Direction
  * HostVPCId
  * Id
  * IpAddressCount
  * ModificationTime
  * Name
  * SecurityGroupIds
    * items [ResourceId](#resourceid)
  * Status
  * StatusMessage

### ResolverEndpointDirection
* ResolverEndpointDirection `string` (values: INBOUND, OUTBOUND)

### ResolverEndpointStatus
* ResolverEndpointStatus `string` (values: CREATING, OPERATIONAL, UPDATING, AUTO_RECOVERING, ACTION_NEEDED, DELETING)

### ResolverEndpoints
* ResolverEndpoints `array`
  * items [ResolverEndpoint](#resolverendpoint)

### ResolverQueryLogConfig
* ResolverQueryLogConfig `object`: In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.
  * Arn
  * AssociationCount
  * CreationTime
  * CreatorRequestId
  * DestinationArn
  * Id
  * Name
  * OwnerId
  * ShareStatus
  * Status

### ResolverQueryLogConfigAssociation
* ResolverQueryLogConfigAssociation `object`: In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
  * CreationTime
  * Error
  * ErrorMessage
  * Id
  * ResolverQueryLogConfigId
  * ResourceId
  * Status

### ResolverQueryLogConfigAssociationError
* ResolverQueryLogConfigAssociationError `string` (values: NONE, DESTINATION_NOT_FOUND, ACCESS_DENIED, INTERNAL_SERVICE_ERROR)

### ResolverQueryLogConfigAssociationErrorMessage
* ResolverQueryLogConfigAssociationErrorMessage `string`

### ResolverQueryLogConfigAssociationList
* ResolverQueryLogConfigAssociationList `array`
  * items [ResolverQueryLogConfigAssociation](#resolverquerylogconfigassociation)

### ResolverQueryLogConfigAssociationStatus
* ResolverQueryLogConfigAssociationStatus `string` (values: CREATING, ACTIVE, ACTION_NEEDED, DELETING, FAILED)

### ResolverQueryLogConfigList
* ResolverQueryLogConfigList `array`
  * items [ResolverQueryLogConfig](#resolverquerylogconfig)

### ResolverQueryLogConfigName
* ResolverQueryLogConfigName `string`

### ResolverQueryLogConfigPolicy
* ResolverQueryLogConfigPolicy `string`

### ResolverQueryLogConfigStatus
* ResolverQueryLogConfigStatus `string` (values: CREATING, CREATED, DELETING, FAILED)

### ResolverRule
* ResolverRule `object`: For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
  * Arn
  * CreationTime
  * CreatorRequestId
  * DomainName
  * Id
  * ModificationTime
  * Name
  * OwnerId
  * ResolverEndpointId
  * RuleType
  * ShareStatus
  * Status
  * StatusMessage
  * TargetIps
    * items [TargetAddress](#targetaddress)

### ResolverRuleAssociation
* ResolverRuleAssociation `object`: In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network. 
  * Id
  * Name
  * ResolverRuleId
  * Status
  * StatusMessage
  * VPCId

### ResolverRuleAssociationStatus
* ResolverRuleAssociationStatus `string` (values: CREATING, COMPLETE, DELETING, FAILED, OVERRIDDEN)

### ResolverRuleAssociations
* ResolverRuleAssociations `array`
  * items [ResolverRuleAssociation](#resolverruleassociation)

### ResolverRuleConfig
* ResolverRuleConfig `object`: In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
  * Name
  * ResolverEndpointId
  * TargetIps
    * items [TargetAddress](#targetaddress)

### ResolverRulePolicy
* ResolverRulePolicy `string`

### ResolverRuleStatus
* ResolverRuleStatus `string` (values: COMPLETE, DELETING, UPDATING, FAILED)

### ResolverRules
* ResolverRules `array`
  * items [ResolverRule](#resolverrule)

### ResourceExistsException


### ResourceId
* ResourceId `string`

### ResourceInUseException


### ResourceNotFoundException


### ResourceUnavailableException


### Rfc3339TimeString
* Rfc3339TimeString `string`

### RuleTypeOption
* RuleTypeOption `string` (values: FORWARD, SYSTEM, RECURSIVE)

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [ResourceId](#resourceid)

### ShareStatus
* ShareStatus `string` (values: NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)

### SortByKey
* SortByKey `string`

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### StatusMessage
* StatusMessage `string`

### SubnetId
* SubnetId `string`

### Tag
* Tag `object`: One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.
  * Key **required**
  * Value **required**

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
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetAddress
* TargetAddress `object`: In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
  * Ip **required**
  * Port

### TargetList
* TargetList `array`
  * items [TargetAddress](#targetaddress)

### ThrottlingException


### UnknownResourceException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateResolverDnssecConfigRequest
* UpdateResolverDnssecConfigRequest `object`
  * ResourceId **required**
  * Validation **required**

### UpdateResolverDnssecConfigResponse
* UpdateResolverDnssecConfigResponse `object`
  * ResolverDNSSECConfig
    * Id
    * OwnerId
    * ResourceId
    * ValidationStatus

### UpdateResolverEndpointRequest
* UpdateResolverEndpointRequest `object`
  * Name
  * ResolverEndpointId **required**

### UpdateResolverEndpointResponse
* UpdateResolverEndpointResponse `object`
  * ResolverEndpoint
    * Arn
    * CreationTime
    * CreatorRequestId
    * Direction
    * HostVPCId
    * Id
    * IpAddressCount
    * ModificationTime
    * Name
    * SecurityGroupIds
      * items [ResourceId](#resourceid)
    * Status
    * StatusMessage

### UpdateResolverRuleRequest
* UpdateResolverRuleRequest `object`
  * Config **required**
    * Name
    * ResolverEndpointId
    * TargetIps
      * items [TargetAddress](#targetaddress)
  * ResolverRuleId **required**

### UpdateResolverRuleResponse
* UpdateResolverRuleResponse `object`
  * ResolverRule
    * Arn
    * CreationTime
    * CreatorRequestId
    * DomainName
    * Id
    * ModificationTime
    * Name
    * OwnerId
    * ResolverEndpointId
    * RuleType
    * ShareStatus
    * Status
    * StatusMessage
    * TargetIps
      * items [TargetAddress](#targetaddress)

### Validation
* Validation `string` (values: ENABLE, DISABLE)


