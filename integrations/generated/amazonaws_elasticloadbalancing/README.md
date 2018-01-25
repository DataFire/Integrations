# @datafire/amazonaws_elasticloadbalancing

Client library for Elastic Load Balancing

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_elasticloadbalancing
```
```js
let amazonaws_elasticloadbalancing = require('@datafire/amazonaws_elasticloadbalancing').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_elasticloadbalancing.AddListenerCertificates({
  "ListenerArn": "",
  "Certificates": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.</p> <p>An Application Load Balancer makes routing and load balancing decisions at the application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing decisions at the transport layer (TCP). Both Application Load Balancers and Network Load Balancers can route requests to one or more ports on each EC2 instance or container instance in your virtual private cloud (VPC).</p> <p>A Classic Load Balancer makes routing and load balancing decisions either at the transport layer (TCP/SSL) or the application layer (HTTP/HTTPS), and supports either EC2-Classic or a VPC. For more information, see the <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2015-12-01 API, which supports Application Load Balancers and Network Load Balancers. The 2012-06-01 API supports Classic Load Balancers.</p> <p>To get started, complete the following tasks:</p> <ol> <li> <p>Create a load balancer using <a>CreateLoadBalancer</a>.</p> </li> <li> <p>Create a target group using <a>CreateTargetGroup</a>.</p> </li> <li> <p>Register targets for the target group using <a>RegisterTargets</a>.</p> </li> <li> <p>Create one or more listeners for your load balancer using <a>CreateListener</a>.</p> </li> </ol> <p>To delete a load balancer and its related resources, complete the following tasks:</p> <ol> <li> <p>Delete the load balancer using <a>DeleteLoadBalancer</a>.</p> </li> <li> <p>Delete the target group using <a>DeleteTargetGroup</a>.</p> </li> </ol> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

## Actions

### AddListenerCertificates



```js
amazonaws_elasticloadbalancing.AddListenerCertificates({
  "ListenerArn": "",
  "Certificates": []
}, context)
```

#### Input
* input `object`
  * Certificates **required** [CertificateList](#certificatelist)
  * ListenerArn **required** [ListenerArn](#listenerarn)

#### Output
* output [AddListenerCertificatesOutput](#addlistenercertificatesoutput)

### AddTags



```js
amazonaws_elasticloadbalancing.AddTags({
  "ResourceArns": [],
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreateListener



```js
amazonaws_elasticloadbalancing.CreateListener({
  "LoadBalancerArn": "",
  "Protocol": "",
  "Port": 0,
  "DefaultActions": []
}, context)
```

#### Input
* input `object`
  * Certificates [CertificateList](#certificatelist)
  * DefaultActions **required** [Actions](#actions)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * Port **required** [Port](#port)
  * Protocol **required** [ProtocolEnum](#protocolenum)
  * SslPolicy [SslPolicyName](#sslpolicyname)

#### Output
* output [CreateListenerOutput](#createlisteneroutput)

### CreateLoadBalancer



```js
amazonaws_elasticloadbalancing.CreateLoadBalancer({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * IpAddressType [IpAddressType](#ipaddresstype)
  * Name **required** [LoadBalancerName](#loadbalancername)
  * Scheme [LoadBalancerSchemeEnum](#loadbalancerschemeenum)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SubnetMappings [SubnetMappings](#subnetmappings)
  * Subnets [Subnets](#subnets)
  * Tags [TagList](#taglist)
  * Type [LoadBalancerTypeEnum](#loadbalancertypeenum)

#### Output
* output [CreateLoadBalancerOutput](#createloadbalanceroutput)

### CreateRule



```js
amazonaws_elasticloadbalancing.CreateRule({
  "ListenerArn": "",
  "Conditions": [],
  "Priority": 0,
  "Actions": []
}, context)
```

#### Input
* input `object`
  * Actions **required** [Actions](#actions)
  * Conditions **required** [RuleConditionList](#ruleconditionlist)
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Priority **required** [RulePriority](#rulepriority)

#### Output
* output [CreateRuleOutput](#createruleoutput)

### CreateTargetGroup



```js
amazonaws_elasticloadbalancing.CreateTargetGroup({
  "Name": "",
  "Protocol": "",
  "Port": 0,
  "VpcId": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckIntervalSeconds [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
  * HealthCheckPath [Path](#path)
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * HealthCheckProtocol [ProtocolEnum](#protocolenum)
  * HealthCheckTimeoutSeconds [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
  * HealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * Matcher [Matcher](#matcher)
  * Name **required** [TargetGroupName](#targetgroupname)
  * Port **required** [Port](#port)
  * Protocol **required** [ProtocolEnum](#protocolenum)
  * TargetType [TargetTypeEnum](#targettypeenum)
  * UnhealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * VpcId **required** [VpcId](#vpcid)

#### Output
* output [CreateTargetGroupOutput](#createtargetgroupoutput)

### DeleteListener



```js
amazonaws_elasticloadbalancing.DeleteListener({
  "ListenerArn": ""
}, context)
```

#### Input
* input `object`
  * ListenerArn **required** [ListenerArn](#listenerarn)

#### Output
* output [DeleteListenerOutput](#deletelisteneroutput)

### DeleteLoadBalancer



```js
amazonaws_elasticloadbalancing.DeleteLoadBalancer({
  "LoadBalancerArn": ""
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

#### Output
* output [DeleteLoadBalancerOutput](#deleteloadbalanceroutput)

### DeleteRule



```js
amazonaws_elasticloadbalancing.DeleteRule({
  "RuleArn": ""
}, context)
```

#### Input
* input `object`
  * RuleArn **required** [RuleArn](#rulearn)

#### Output
* output [DeleteRuleOutput](#deleteruleoutput)

### DeleteTargetGroup



```js
amazonaws_elasticloadbalancing.DeleteTargetGroup({
  "TargetGroupArn": ""
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

#### Output
* output [DeleteTargetGroupOutput](#deletetargetgroupoutput)

### DeregisterTargets



```js
amazonaws_elasticloadbalancing.DeregisterTargets({
  "TargetGroupArn": "",
  "Targets": []
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets **required** [TargetDescriptions](#targetdescriptions)

#### Output
* output [DeregisterTargetsOutput](#deregistertargetsoutput)

### DescribeAccountLimits



```js
amazonaws_elasticloadbalancing.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

#### Output
* output [DescribeAccountLimitsOutput](#describeaccountlimitsoutput)

### DescribeListenerCertificates



```js
amazonaws_elasticloadbalancing.DescribeListenerCertificates({
  "ListenerArn": ""
}, context)
```

#### Input
* input `object`
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

#### Output
* output [DescribeListenerCertificatesOutput](#describelistenercertificatesoutput)

### DescribeListeners



```js
amazonaws_elasticloadbalancing.DescribeListeners({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ListenerArns [ListenerArns](#listenerarns)
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

#### Output
* output [DescribeListenersOutput](#describelistenersoutput)

### DescribeLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancerAttributes({
  "LoadBalancerArn": ""
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

#### Output
* output [DescribeLoadBalancerAttributesOutput](#describeloadbalancerattributesoutput)

### DescribeLoadBalancers



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancers({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * LoadBalancerArns [LoadBalancerArns](#loadbalancerarns)
  * Marker [Marker](#marker)
  * Names [LoadBalancerNames](#loadbalancernames)
  * PageSize [PageSize](#pagesize)

#### Output
* output [DescribeLoadBalancersOutput](#describeloadbalancersoutput)

### DescribeRules



```js
amazonaws_elasticloadbalancing.DescribeRules({}, context)
```

#### Input
* input `object`
  * ListenerArn [ListenerArn](#listenerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)
  * RuleArns [RuleArns](#rulearns)

#### Output
* output [DescribeRulesOutput](#describerulesoutput)

### DescribeSSLPolicies



```js
amazonaws_elasticloadbalancing.DescribeSSLPolicies({}, context)
```

#### Input
* input `object`
  * Marker [Marker](#marker)
  * Names [SslPolicyNames](#sslpolicynames)
  * PageSize [PageSize](#pagesize)

#### Output
* output [DescribeSSLPoliciesOutput](#describesslpoliciesoutput)

### DescribeTags



```js
amazonaws_elasticloadbalancing.DescribeTags({
  "ResourceArns": []
}, context)
```

#### Input
* input `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)

#### Output
* output [DescribeTagsOutput](#describetagsoutput)

### DescribeTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.DescribeTargetGroupAttributes({
  "TargetGroupArn": ""
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

#### Output
* output [DescribeTargetGroupAttributesOutput](#describetargetgroupattributesoutput)

### DescribeTargetGroups



```js
amazonaws_elasticloadbalancing.DescribeTargetGroups({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * Marker [Marker](#marker)
  * Names [TargetGroupNames](#targetgroupnames)
  * PageSize [PageSize](#pagesize)
  * TargetGroupArns [TargetGroupArns](#targetgrouparns)

#### Output
* output [DescribeTargetGroupsOutput](#describetargetgroupsoutput)

### DescribeTargetHealth



```js
amazonaws_elasticloadbalancing.DescribeTargetHealth({
  "TargetGroupArn": ""
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets [TargetDescriptions](#targetdescriptions)

#### Output
* output [DescribeTargetHealthOutput](#describetargethealthoutput)

### ModifyListener



```js
amazonaws_elasticloadbalancing.ModifyListener({
  "ListenerArn": ""
}, context)
```

#### Input
* input `object`
  * Certificates [CertificateList](#certificatelist)
  * DefaultActions [Actions](#actions)
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Port [Port](#port)
  * Protocol [ProtocolEnum](#protocolenum)
  * SslPolicy [SslPolicyName](#sslpolicyname)

#### Output
* output [ModifyListenerOutput](#modifylisteneroutput)

### ModifyLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.ModifyLoadBalancerAttributes({
  "LoadBalancerArn": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [LoadBalancerAttributes](#loadbalancerattributes)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

#### Output
* output [ModifyLoadBalancerAttributesOutput](#modifyloadbalancerattributesoutput)

### ModifyRule



```js
amazonaws_elasticloadbalancing.ModifyRule({
  "RuleArn": ""
}, context)
```

#### Input
* input `object`
  * Actions [Actions](#actions)
  * Conditions [RuleConditionList](#ruleconditionlist)
  * RuleArn **required** [RuleArn](#rulearn)

#### Output
* output [ModifyRuleOutput](#modifyruleoutput)

### ModifyTargetGroup



```js
amazonaws_elasticloadbalancing.ModifyTargetGroup({
  "TargetGroupArn": ""
}, context)
```

#### Input
* input `object`
  * HealthCheckIntervalSeconds [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
  * HealthCheckPath [Path](#path)
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * HealthCheckProtocol [ProtocolEnum](#protocolenum)
  * HealthCheckTimeoutSeconds [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
  * HealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * Matcher [Matcher](#matcher)
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * UnhealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)

#### Output
* output [ModifyTargetGroupOutput](#modifytargetgroupoutput)

### ModifyTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.ModifyTargetGroupAttributes({
  "TargetGroupArn": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [TargetGroupAttributes](#targetgroupattributes)
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

#### Output
* output [ModifyTargetGroupAttributesOutput](#modifytargetgroupattributesoutput)

### RegisterTargets



```js
amazonaws_elasticloadbalancing.RegisterTargets({
  "TargetGroupArn": "",
  "Targets": []
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets **required** [TargetDescriptions](#targetdescriptions)

#### Output
* output [RegisterTargetsOutput](#registertargetsoutput)

### RemoveListenerCertificates



```js
amazonaws_elasticloadbalancing.RemoveListenerCertificates({
  "ListenerArn": "",
  "Certificates": []
}, context)
```

#### Input
* input `object`
  * Certificates **required** [CertificateList](#certificatelist)
  * ListenerArn **required** [ListenerArn](#listenerarn)

#### Output
* output [RemoveListenerCertificatesOutput](#removelistenercertificatesoutput)

### RemoveTags



```js
amazonaws_elasticloadbalancing.RemoveTags({
  "ResourceArns": [],
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)
  * TagKeys **required** [TagKeys](#tagkeys)

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### SetIpAddressType



```js
amazonaws_elasticloadbalancing.SetIpAddressType({
  "LoadBalancerArn": "",
  "IpAddressType": ""
}, context)
```

#### Input
* input `object`
  * IpAddressType **required** [IpAddressType](#ipaddresstype)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

#### Output
* output [SetIpAddressTypeOutput](#setipaddresstypeoutput)

### SetRulePriorities



```js
amazonaws_elasticloadbalancing.SetRulePriorities({
  "RulePriorities": []
}, context)
```

#### Input
* input `object`
  * RulePriorities **required** [RulePriorityList](#ruleprioritylist)

#### Output
* output [SetRulePrioritiesOutput](#setruleprioritiesoutput)

### SetSecurityGroups



```js
amazonaws_elasticloadbalancing.SetSecurityGroups({
  "LoadBalancerArn": "",
  "SecurityGroups": []
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * SecurityGroups **required** [SecurityGroups](#securitygroups)

#### Output
* output [SetSecurityGroupsOutput](#setsecuritygroupsoutput)

### SetSubnets



```js
amazonaws_elasticloadbalancing.SetSubnets({
  "LoadBalancerArn": "",
  "Subnets": []
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * SubnetMappings [SubnetMappings](#subnetmappings)
  * Subnets **required** [Subnets](#subnets)

#### Output
* output [SetSubnetsOutput](#setsubnetsoutput)



## Definitions

### Action
* Action `object`: Information about an action.
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Type **required** [ActionTypeEnum](#actiontypeenum)

### ActionTypeEnum
* ActionTypeEnum `string` (values: forward)

### Actions
* Actions `array`
  * items [Action](#action)

### AddListenerCertificatesInput
* AddListenerCertificatesInput `object`
  * Certificates **required** [CertificateList](#certificatelist)
  * ListenerArn **required** [ListenerArn](#listenerarn)

### AddListenerCertificatesOutput
* AddListenerCertificatesOutput `object`
  * Certificates [CertificateList](#certificatelist)

### AddTagsInput
* AddTagsInput `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)
  * Tags **required** [TagList](#taglist)

### AddTagsOutput
* AddTagsOutput `object`

### AllocationId
* AllocationId `string`

### AllocationIdNotFoundException
* AllocationIdNotFoundException `object`: The specified allocation ID does not exist.

### AvailabilityZone
* AvailabilityZone `object`: Information about an Availability Zone.
  * LoadBalancerAddresses [LoadBalancerAddresses](#loadbalanceraddresses)
  * SubnetId [SubnetId](#subnetid)
  * ZoneName [ZoneName](#zonename)

### AvailabilityZoneNotSupportedException
* AvailabilityZoneNotSupportedException `object`: The specified Availability Zone is not supported.

### AvailabilityZones
* AvailabilityZones `array`
  * items [AvailabilityZone](#availabilityzone)

### CanonicalHostedZoneId
* CanonicalHostedZoneId `string`

### Certificate
* Certificate `object`: Information about an SSL server certificate.
  * CertificateArn [CertificateArn](#certificatearn)
  * IsDefault [Default](#default)

### CertificateArn
* CertificateArn `string`

### CertificateList
* CertificateList `array`
  * items [Certificate](#certificate)

### CertificateNotFoundException
* CertificateNotFoundException `object`: The specified certificate does not exist.

### Cipher
* Cipher `object`: Information about a cipher used in a policy.
  * Name [CipherName](#ciphername)
  * Priority [CipherPriority](#cipherpriority)

### CipherName
* CipherName `string`

### CipherPriority
* CipherPriority `integer`

### Ciphers
* Ciphers `array`
  * items [Cipher](#cipher)

### ConditionFieldName
* ConditionFieldName `string`

### CreateListenerInput
* CreateListenerInput `object`
  * Certificates [CertificateList](#certificatelist)
  * DefaultActions **required** [Actions](#actions)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * Port **required** [Port](#port)
  * Protocol **required** [ProtocolEnum](#protocolenum)
  * SslPolicy [SslPolicyName](#sslpolicyname)

### CreateListenerOutput
* CreateListenerOutput `object`
  * Listeners [Listeners](#listeners)

### CreateLoadBalancerInput
* CreateLoadBalancerInput `object`
  * IpAddressType [IpAddressType](#ipaddresstype)
  * Name **required** [LoadBalancerName](#loadbalancername)
  * Scheme [LoadBalancerSchemeEnum](#loadbalancerschemeenum)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * SubnetMappings [SubnetMappings](#subnetmappings)
  * Subnets [Subnets](#subnets)
  * Tags [TagList](#taglist)
  * Type [LoadBalancerTypeEnum](#loadbalancertypeenum)

### CreateLoadBalancerOutput
* CreateLoadBalancerOutput `object`
  * LoadBalancers [LoadBalancers](#loadbalancers)

### CreateRuleInput
* CreateRuleInput `object`
  * Actions **required** [Actions](#actions)
  * Conditions **required** [RuleConditionList](#ruleconditionlist)
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Priority **required** [RulePriority](#rulepriority)

### CreateRuleOutput
* CreateRuleOutput `object`
  * Rules [Rules](#rules)

### CreateTargetGroupInput
* CreateTargetGroupInput `object`
  * HealthCheckIntervalSeconds [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
  * HealthCheckPath [Path](#path)
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * HealthCheckProtocol [ProtocolEnum](#protocolenum)
  * HealthCheckTimeoutSeconds [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
  * HealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * Matcher [Matcher](#matcher)
  * Name **required** [TargetGroupName](#targetgroupname)
  * Port **required** [Port](#port)
  * Protocol **required** [ProtocolEnum](#protocolenum)
  * TargetType [TargetTypeEnum](#targettypeenum)
  * UnhealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * VpcId **required** [VpcId](#vpcid)

### CreateTargetGroupOutput
* CreateTargetGroupOutput `object`
  * TargetGroups [TargetGroups](#targetgroups)

### CreatedTime
* CreatedTime `string`

### DNSName
* DNSName `string`

### Default
* Default `boolean`

### DeleteListenerInput
* DeleteListenerInput `object`
  * ListenerArn **required** [ListenerArn](#listenerarn)

### DeleteListenerOutput
* DeleteListenerOutput `object`

### DeleteLoadBalancerInput
* DeleteLoadBalancerInput `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

### DeleteLoadBalancerOutput
* DeleteLoadBalancerOutput `object`

### DeleteRuleInput
* DeleteRuleInput `object`
  * RuleArn **required** [RuleArn](#rulearn)

### DeleteRuleOutput
* DeleteRuleOutput `object`

### DeleteTargetGroupInput
* DeleteTargetGroupInput `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

### DeleteTargetGroupOutput
* DeleteTargetGroupOutput `object`

### DeregisterTargetsInput
* DeregisterTargetsInput `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets **required** [TargetDescriptions](#targetdescriptions)

### DeregisterTargetsOutput
* DeregisterTargetsOutput `object`

### DescribeAccountLimitsInput
* DescribeAccountLimitsInput `object`
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

### DescribeAccountLimitsOutput
* DescribeAccountLimitsOutput `object`
  * Limits [Limits](#limits)
  * NextMarker [Marker](#marker)

### DescribeListenerCertificatesInput
* DescribeListenerCertificatesInput `object`
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

### DescribeListenerCertificatesOutput
* DescribeListenerCertificatesOutput `object`
  * Certificates [CertificateList](#certificatelist)
  * NextMarker [Marker](#marker)

### DescribeListenersInput
* DescribeListenersInput `object`
  * ListenerArns [ListenerArns](#listenerarns)
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)

### DescribeListenersOutput
* DescribeListenersOutput `object`
  * Listeners [Listeners](#listeners)
  * NextMarker [Marker](#marker)

### DescribeLoadBalancerAttributesInput
* DescribeLoadBalancerAttributesInput `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

### DescribeLoadBalancerAttributesOutput
* DescribeLoadBalancerAttributesOutput `object`
  * Attributes [LoadBalancerAttributes](#loadbalancerattributes)

### DescribeLoadBalancersInput
* DescribeLoadBalancersInput `object`
  * LoadBalancerArns [LoadBalancerArns](#loadbalancerarns)
  * Marker [Marker](#marker)
  * Names [LoadBalancerNames](#loadbalancernames)
  * PageSize [PageSize](#pagesize)

### DescribeLoadBalancersOutput
* DescribeLoadBalancersOutput `object`
  * LoadBalancers [LoadBalancers](#loadbalancers)
  * NextMarker [Marker](#marker)

### DescribeRulesInput
* DescribeRulesInput `object`
  * ListenerArn [ListenerArn](#listenerarn)
  * Marker [Marker](#marker)
  * PageSize [PageSize](#pagesize)
  * RuleArns [RuleArns](#rulearns)

### DescribeRulesOutput
* DescribeRulesOutput `object`
  * NextMarker [Marker](#marker)
  * Rules [Rules](#rules)

### DescribeSSLPoliciesInput
* DescribeSSLPoliciesInput `object`
  * Marker [Marker](#marker)
  * Names [SslPolicyNames](#sslpolicynames)
  * PageSize [PageSize](#pagesize)

### DescribeSSLPoliciesOutput
* DescribeSSLPoliciesOutput `object`
  * NextMarker [Marker](#marker)
  * SslPolicies [SslPolicies](#sslpolicies)

### DescribeTagsInput
* DescribeTagsInput `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)

### DescribeTagsOutput
* DescribeTagsOutput `object`
  * TagDescriptions [TagDescriptions](#tagdescriptions)

### DescribeTargetGroupAttributesInput
* DescribeTargetGroupAttributesInput `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

### DescribeTargetGroupAttributesOutput
* DescribeTargetGroupAttributesOutput `object`
  * Attributes [TargetGroupAttributes](#targetgroupattributes)

### DescribeTargetGroupsInput
* DescribeTargetGroupsInput `object`
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * Marker [Marker](#marker)
  * Names [TargetGroupNames](#targetgroupnames)
  * PageSize [PageSize](#pagesize)
  * TargetGroupArns [TargetGroupArns](#targetgrouparns)

### DescribeTargetGroupsOutput
* DescribeTargetGroupsOutput `object`
  * NextMarker [Marker](#marker)
  * TargetGroups [TargetGroups](#targetgroups)

### DescribeTargetHealthInput
* DescribeTargetHealthInput `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets [TargetDescriptions](#targetdescriptions)

### DescribeTargetHealthOutput
* DescribeTargetHealthOutput `object`
  * TargetHealthDescriptions [TargetHealthDescriptions](#targethealthdescriptions)

### Description
* Description `string`

### DuplicateListenerException
* DuplicateListenerException `object`: A listener with the specified port already exists.

### DuplicateLoadBalancerNameException
* DuplicateLoadBalancerNameException `object`: A load balancer with the specified name already exists.

### DuplicateTagKeysException
* DuplicateTagKeysException `object`: A tag key was specified more than once.

### DuplicateTargetGroupNameException
* DuplicateTargetGroupNameException `object`: A target group with the specified name already exists.

### HealthCheckIntervalSeconds
* HealthCheckIntervalSeconds `integer`

### HealthCheckPort
* HealthCheckPort `string`

### HealthCheckThresholdCount
* HealthCheckThresholdCount `integer`

### HealthCheckTimeoutSeconds
* HealthCheckTimeoutSeconds `integer`

### HealthUnavailableException
* HealthUnavailableException `object`: The health of the specified targets could not be retrieved due to an internal error.

### HttpCode
* HttpCode `string`

### IncompatibleProtocolsException
* IncompatibleProtocolsException `object`: The specified configuration is not valid with this protocol.

### InvalidConfigurationRequestException
* InvalidConfigurationRequestException `object`: The requested configuration is not valid.

### InvalidSchemeException
* InvalidSchemeException `object`: The requested scheme is not valid.

### InvalidSecurityGroupException
* InvalidSecurityGroupException `object`: The specified security group does not exist.

### InvalidSubnetException
* InvalidSubnetException `object`: The specified subnet is out of available addresses.

### InvalidTargetException
* InvalidTargetException `object`: The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.

### IpAddress
* IpAddress `string`

### IpAddressType
* IpAddressType `string` (values: ipv4, dualstack)

### IsDefault
* IsDefault `boolean`

### Limit
* Limit `object`: Information about an Elastic Load Balancing resource limit for your AWS account.
  * Max [Max](#max)
  * Name [Name](#name)

### Limits
* Limits `array`
  * items [Limit](#limit)

### ListOfString
* ListOfString `array`
  * items [StringValue](#stringvalue)

### Listener
* Listener `object`: Information about a listener.
  * Certificates [CertificateList](#certificatelist)
  * DefaultActions [Actions](#actions)
  * ListenerArn [ListenerArn](#listenerarn)
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * Port [Port](#port)
  * Protocol [ProtocolEnum](#protocolenum)
  * SslPolicy [SslPolicyName](#sslpolicyname)

### ListenerArn
* ListenerArn `string`

### ListenerArns
* ListenerArns `array`
  * items [ListenerArn](#listenerarn)

### ListenerNotFoundException
* ListenerNotFoundException `object`: The specified listener does not exist.

### Listeners
* Listeners `array`
  * items [Listener](#listener)

### LoadBalancer
* LoadBalancer `object`: Information about a load balancer.
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * CanonicalHostedZoneId [CanonicalHostedZoneId](#canonicalhostedzoneid)
  * CreatedTime [CreatedTime](#createdtime)
  * DNSName [DNSName](#dnsname)
  * IpAddressType [IpAddressType](#ipaddresstype)
  * LoadBalancerArn [LoadBalancerArn](#loadbalancerarn)
  * LoadBalancerName [LoadBalancerName](#loadbalancername)
  * Scheme [LoadBalancerSchemeEnum](#loadbalancerschemeenum)
  * SecurityGroups [SecurityGroups](#securitygroups)
  * State [LoadBalancerState](#loadbalancerstate)
  * Type [LoadBalancerTypeEnum](#loadbalancertypeenum)
  * VpcId [VpcId](#vpcid)

### LoadBalancerAddress
* LoadBalancerAddress `object`: Information about a static IP address for a load balancer.
  * AllocationId [AllocationId](#allocationid)
  * IpAddress [IpAddress](#ipaddress)

### LoadBalancerAddresses
* LoadBalancerAddresses `array`
  * items [LoadBalancerAddress](#loadbalanceraddress)

### LoadBalancerArn
* LoadBalancerArn `string`

### LoadBalancerArns
* LoadBalancerArns `array`
  * items [LoadBalancerArn](#loadbalancerarn)

### LoadBalancerAttribute
* LoadBalancerAttribute `object`: Information about a load balancer attribute.
  * Key [LoadBalancerAttributeKey](#loadbalancerattributekey)
  * Value [LoadBalancerAttributeValue](#loadbalancerattributevalue)

### LoadBalancerAttributeKey
* LoadBalancerAttributeKey `string`

### LoadBalancerAttributeValue
* LoadBalancerAttributeValue `string`

### LoadBalancerAttributes
* LoadBalancerAttributes `array`
  * items [LoadBalancerAttribute](#loadbalancerattribute)

### LoadBalancerName
* LoadBalancerName `string`

### LoadBalancerNames
* LoadBalancerNames `array`
  * items [LoadBalancerName](#loadbalancername)

### LoadBalancerNotFoundException
* LoadBalancerNotFoundException `object`: The specified load balancer does not exist.

### LoadBalancerSchemeEnum
* LoadBalancerSchemeEnum `string` (values: internet-facing, internal)

### LoadBalancerState
* LoadBalancerState `object`: Information about the state of the load balancer.
  * Code [LoadBalancerStateEnum](#loadbalancerstateenum)
  * Reason [StateReason](#statereason)

### LoadBalancerStateEnum
* LoadBalancerStateEnum `string` (values: active, provisioning, active_impaired, failed)

### LoadBalancerTypeEnum
* LoadBalancerTypeEnum `string` (values: application, network)

### LoadBalancers
* LoadBalancers `array`
  * items [LoadBalancer](#loadbalancer)

### Marker
* Marker `string`

### Matcher
* Matcher `object`: Information to use when checking for a successful response from a target.
  * HttpCode **required** [HttpCode](#httpcode)

### Max
* Max `string`

### ModifyListenerInput
* ModifyListenerInput `object`
  * Certificates [CertificateList](#certificatelist)
  * DefaultActions [Actions](#actions)
  * ListenerArn **required** [ListenerArn](#listenerarn)
  * Port [Port](#port)
  * Protocol [ProtocolEnum](#protocolenum)
  * SslPolicy [SslPolicyName](#sslpolicyname)

### ModifyListenerOutput
* ModifyListenerOutput `object`
  * Listeners [Listeners](#listeners)

### ModifyLoadBalancerAttributesInput
* ModifyLoadBalancerAttributesInput `object`
  * Attributes **required** [LoadBalancerAttributes](#loadbalancerattributes)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

### ModifyLoadBalancerAttributesOutput
* ModifyLoadBalancerAttributesOutput `object`
  * Attributes [LoadBalancerAttributes](#loadbalancerattributes)

### ModifyRuleInput
* ModifyRuleInput `object`
  * Actions [Actions](#actions)
  * Conditions [RuleConditionList](#ruleconditionlist)
  * RuleArn **required** [RuleArn](#rulearn)

### ModifyRuleOutput
* ModifyRuleOutput `object`
  * Rules [Rules](#rules)

### ModifyTargetGroupAttributesInput
* ModifyTargetGroupAttributesInput `object`
  * Attributes **required** [TargetGroupAttributes](#targetgroupattributes)
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)

### ModifyTargetGroupAttributesOutput
* ModifyTargetGroupAttributesOutput `object`
  * Attributes [TargetGroupAttributes](#targetgroupattributes)

### ModifyTargetGroupInput
* ModifyTargetGroupInput `object`
  * HealthCheckIntervalSeconds [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
  * HealthCheckPath [Path](#path)
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * HealthCheckProtocol [ProtocolEnum](#protocolenum)
  * HealthCheckTimeoutSeconds [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
  * HealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * Matcher [Matcher](#matcher)
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * UnhealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)

### ModifyTargetGroupOutput
* ModifyTargetGroupOutput `object`
  * TargetGroups [TargetGroups](#targetgroups)

### Name
* Name `string`

### OperationNotPermittedException
* OperationNotPermittedException `object`: This operation is not allowed.

### PageSize
* PageSize `integer`

### Path
* Path `string`

### Port
* Port `integer`

### PriorityInUseException
* PriorityInUseException `object`: The specified priority is in use.

### ProtocolEnum
* ProtocolEnum `string` (values: HTTP, HTTPS, TCP)

### RegisterTargetsInput
* RegisterTargetsInput `object`
  * TargetGroupArn **required** [TargetGroupArn](#targetgrouparn)
  * Targets **required** [TargetDescriptions](#targetdescriptions)

### RegisterTargetsOutput
* RegisterTargetsOutput `object`

### RemoveListenerCertificatesInput
* RemoveListenerCertificatesInput `object`
  * Certificates **required** [CertificateList](#certificatelist)
  * ListenerArn **required** [ListenerArn](#listenerarn)

### RemoveListenerCertificatesOutput
* RemoveListenerCertificatesOutput `object`

### RemoveTagsInput
* RemoveTagsInput `object`
  * ResourceArns **required** [ResourceArns](#resourcearns)
  * TagKeys **required** [TagKeys](#tagkeys)

### RemoveTagsOutput
* RemoveTagsOutput `object`

### ResourceArn
* ResourceArn `string`

### ResourceArns
* ResourceArns `array`
  * items [ResourceArn](#resourcearn)

### ResourceInUseException
* ResourceInUseException `object`: A specified resource is in use.

### Rule
* Rule `object`: Information about a rule.
  * Actions [Actions](#actions)
  * Conditions [RuleConditionList](#ruleconditionlist)
  * IsDefault [IsDefault](#isdefault)
  * Priority [String](#string)
  * RuleArn [RuleArn](#rulearn)

### RuleArn
* RuleArn `string`

### RuleArns
* RuleArns `array`
  * items [RuleArn](#rulearn)

### RuleCondition
* RuleCondition `object`: Information about a condition for a rule.
  * Field [ConditionFieldName](#conditionfieldname)
  * Values [ListOfString](#listofstring)

### RuleConditionList
* RuleConditionList `array`
  * items [RuleCondition](#rulecondition)

### RuleNotFoundException
* RuleNotFoundException `object`: The specified rule does not exist.

### RulePriority
* RulePriority `integer`

### RulePriorityList
* RulePriorityList `array`
  * items [RulePriorityPair](#ruleprioritypair)

### RulePriorityPair
* RulePriorityPair `object`: Information about the priorities for the rules for a listener.
  * Priority [RulePriority](#rulepriority)
  * RuleArn [RuleArn](#rulearn)

### Rules
* Rules `array`
  * items [Rule](#rule)

### SSLPolicyNotFoundException
* SSLPolicyNotFoundException `object`: The specified SSL policy does not exist.

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroupId](#securitygroupid)

### SetIpAddressTypeInput
* SetIpAddressTypeInput `object`
  * IpAddressType **required** [IpAddressType](#ipaddresstype)
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)

### SetIpAddressTypeOutput
* SetIpAddressTypeOutput `object`
  * IpAddressType [IpAddressType](#ipaddresstype)

### SetRulePrioritiesInput
* SetRulePrioritiesInput `object`
  * RulePriorities **required** [RulePriorityList](#ruleprioritylist)

### SetRulePrioritiesOutput
* SetRulePrioritiesOutput `object`
  * Rules [Rules](#rules)

### SetSecurityGroupsInput
* SetSecurityGroupsInput `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * SecurityGroups **required** [SecurityGroups](#securitygroups)

### SetSecurityGroupsOutput
* SetSecurityGroupsOutput `object`
  * SecurityGroupIds [SecurityGroups](#securitygroups)

### SetSubnetsInput
* SetSubnetsInput `object`
  * LoadBalancerArn **required** [LoadBalancerArn](#loadbalancerarn)
  * SubnetMappings [SubnetMappings](#subnetmappings)
  * Subnets **required** [Subnets](#subnets)

### SetSubnetsOutput
* SetSubnetsOutput `object`
  * AvailabilityZones [AvailabilityZones](#availabilityzones)

### SslPolicies
* SslPolicies `array`
  * items [SslPolicy](#sslpolicy)

### SslPolicy
* SslPolicy `object`: Information about a policy used for SSL negotiation.
  * Ciphers [Ciphers](#ciphers)
  * Name [SslPolicyName](#sslpolicyname)
  * SslProtocols [SslProtocols](#sslprotocols)

### SslPolicyName
* SslPolicyName `string`

### SslPolicyNames
* SslPolicyNames `array`
  * items [SslPolicyName](#sslpolicyname)

### SslProtocol
* SslProtocol `string`

### SslProtocols
* SslProtocols `array`
  * items [SslProtocol](#sslprotocol)

### StateReason
* StateReason `string`

### String
* String `string`

### StringValue
* StringValue `string`

### SubnetId
* SubnetId `string`

### SubnetMapping
* SubnetMapping `object`: Information about a subnet mapping.
  * AllocationId [AllocationId](#allocationid)
  * SubnetId [SubnetId](#subnetid)

### SubnetMappings
* SubnetMappings `array`
  * items [SubnetMapping](#subnetmapping)

### SubnetNotFoundException
* SubnetNotFoundException `object`: The specified subnet does not exist.

### Subnets
* Subnets `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Information about a tag.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagDescription
* TagDescription `object`: The tags associated with a resource.
  * ResourceArn [ResourceArn](#resourcearn)
  * Tags [TagList](#taglist)

### TagDescriptions
* TagDescriptions `array`
  * items [TagDescription](#tagdescription)

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TargetDescription
* TargetDescription `object`: Information about a target.
  * AvailabilityZone [ZoneName](#zonename)
  * Id **required** [TargetId](#targetid)
  * Port [Port](#port)

### TargetDescriptions
* TargetDescriptions `array`
  * items [TargetDescription](#targetdescription)

### TargetGroup
* TargetGroup `object`: Information about a target group.
  * HealthCheckIntervalSeconds [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
  * HealthCheckPath [Path](#path)
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * HealthCheckProtocol [ProtocolEnum](#protocolenum)
  * HealthCheckTimeoutSeconds [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
  * HealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * LoadBalancerArns [LoadBalancerArns](#loadbalancerarns)
  * Matcher [Matcher](#matcher)
  * Port [Port](#port)
  * Protocol [ProtocolEnum](#protocolenum)
  * TargetGroupArn [TargetGroupArn](#targetgrouparn)
  * TargetGroupName [TargetGroupName](#targetgroupname)
  * TargetType [TargetTypeEnum](#targettypeenum)
  * UnhealthyThresholdCount [HealthCheckThresholdCount](#healthcheckthresholdcount)
  * VpcId [VpcId](#vpcid)

### TargetGroupArn
* TargetGroupArn `string`

### TargetGroupArns
* TargetGroupArns `array`
  * items [TargetGroupArn](#targetgrouparn)

### TargetGroupAssociationLimitException
* TargetGroupAssociationLimitException `object`: You've reached the limit on the number of load balancers per target group.

### TargetGroupAttribute
* TargetGroupAttribute `object`: Information about a target group attribute.
  * Key [TargetGroupAttributeKey](#targetgroupattributekey)
  * Value [TargetGroupAttributeValue](#targetgroupattributevalue)

### TargetGroupAttributeKey
* TargetGroupAttributeKey `string`

### TargetGroupAttributeValue
* TargetGroupAttributeValue `string`

### TargetGroupAttributes
* TargetGroupAttributes `array`
  * items [TargetGroupAttribute](#targetgroupattribute)

### TargetGroupName
* TargetGroupName `string`

### TargetGroupNames
* TargetGroupNames `array`
  * items [TargetGroupName](#targetgroupname)

### TargetGroupNotFoundException
* TargetGroupNotFoundException `object`: The specified target group does not exist.

### TargetGroups
* TargetGroups `array`
  * items [TargetGroup](#targetgroup)

### TargetHealth
* TargetHealth `object`: Information about the current health of a target.
  * Description [Description](#description)
  * Reason [TargetHealthReasonEnum](#targethealthreasonenum)
  * State [TargetHealthStateEnum](#targethealthstateenum)

### TargetHealthDescription
* TargetHealthDescription `object`: Information about the health of a target.
  * HealthCheckPort [HealthCheckPort](#healthcheckport)
  * Target [TargetDescription](#targetdescription)
  * TargetHealth [TargetHealth](#targethealth)

### TargetHealthDescriptions
* TargetHealthDescriptions `array`
  * items [TargetHealthDescription](#targethealthdescription)

### TargetHealthReasonEnum
* TargetHealthReasonEnum `string` (values: Elb.RegistrationInProgress, Elb.InitialHealthChecking, Target.ResponseCodeMismatch, Target.Timeout, Target.FailedHealthChecks, Target.NotRegistered, Target.NotInUse, Target.DeregistrationInProgress, Target.InvalidState, Target.IpUnusable, Elb.InternalError)

### TargetHealthStateEnum
* TargetHealthStateEnum `string` (values: initial, healthy, unhealthy, unused, draining, unavailable)

### TargetId
* TargetId `string`

### TargetTypeEnum
* TargetTypeEnum `string` (values: instance, ip)

### TooManyCertificatesException
* TooManyCertificatesException `object`: You've reached the limit on the number of certificates per load balancer.

### TooManyListenersException
* TooManyListenersException `object`: You've reached the limit on the number of listeners per load balancer.

### TooManyLoadBalancersException
* TooManyLoadBalancersException `object`: You've reached the limit on the number of load balancers for your AWS account.

### TooManyRegistrationsForTargetIdException
* TooManyRegistrationsForTargetIdException `object`: You've reached the limit on the number of times a target can be registered with a load balancer.

### TooManyRulesException
* TooManyRulesException `object`: You've reached the limit on the number of rules per load balancer.

### TooManyTagsException
* TooManyTagsException `object`: You've reached the limit on the number of tags per load balancer.

### TooManyTargetGroupsException
* TooManyTargetGroupsException `object`: You've reached the limit on the number of target groups for your AWS account.

### TooManyTargetsException
* TooManyTargetsException `object`: You've reached the limit on the number of targets.

### UnsupportedProtocolException
* UnsupportedProtocolException `object`: The specified protocol is not supported.

### VpcId
* VpcId `string`

### ZoneName
* ZoneName `string`


