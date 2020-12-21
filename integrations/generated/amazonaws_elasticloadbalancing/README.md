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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:</p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.</p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.</p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

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
  * ListenerArn **required** `string`
  * Certificates **required** `array`

#### Output
* output [AddListenerCertificatesOutput](#addlistenercertificatesoutput)

### AddListenerCertificates



```js
amazonaws_elasticloadbalancing.AddListenerCertificates({
  "ListenerArn": null,
  "Certificates": null
}, context)
```

#### Input
* input `object`
  * Certificates **required**
    * items [Certificate](#certificate)
  * ListenerArn **required**

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
  * ResourceArns **required** `array`
  * Tags **required** `array`

#### Output
* output [AddTagsOutput](#addtagsoutput)

### AddTags



```js
amazonaws_elasticloadbalancing.AddTags({
  "ResourceArns": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreateListener



```js
amazonaws_elasticloadbalancing.CreateListener({
  "LoadBalancerArn": "",
  "DefaultActions": []
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** `string`
  * Protocol `string`
  * Port `integer`
  * SslPolicy `string`
  * Certificates `array`
  * DefaultActions **required** `array`
  * AlpnPolicy `array`
  * Tags `array`

#### Output
* output [CreateListenerOutput](#createlisteneroutput)

### CreateListener



```js
amazonaws_elasticloadbalancing.CreateListener({
  "LoadBalancerArn": null,
  "DefaultActions": null
}, context)
```

#### Input
* input `object`
  * AlpnPolicy
    * items [AlpnPolicyValue](#alpnpolicyvalue)
  * Certificates
    * items [Certificate](#certificate)
  * DefaultActions **required**
    * items [Action](#action)
  * LoadBalancerArn **required**
  * Port
  * Protocol
  * SslPolicy
  * Tags
    * items [Tag](#tag)

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
  * Name **required** `string`
  * Subnets `array`
  * SubnetMappings `array`
  * SecurityGroups `array`
  * Scheme `string`
  * Tags `array`
  * Type `string`
  * IpAddressType `string`
  * CustomerOwnedIpv4Pool `string`

#### Output
* output [CreateLoadBalancerOutput](#createloadbalanceroutput)

### CreateLoadBalancer



```js
amazonaws_elasticloadbalancing.CreateLoadBalancer({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CustomerOwnedIpv4Pool
  * IpAddressType
  * Name **required**
  * Scheme
  * SecurityGroups
    * items [SecurityGroupId](#securitygroupid)
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * Subnets
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * Type

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
  * ListenerArn **required** `string`
  * Conditions **required** `array`
  * Priority **required** `integer`
  * Actions **required** `array`
  * Tags `array`

#### Output
* output [CreateRuleOutput](#createruleoutput)

### CreateRule



```js
amazonaws_elasticloadbalancing.CreateRule({
  "ListenerArn": null,
  "Conditions": null,
  "Priority": null,
  "Actions": null
}, context)
```

#### Input
* input `object`
  * Actions **required**
    * items [Action](#action)
  * Conditions **required**
    * items [RuleCondition](#rulecondition)
  * ListenerArn **required**
  * Priority **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRuleOutput](#createruleoutput)

### CreateTargetGroup



```js
amazonaws_elasticloadbalancing.CreateTargetGroup({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * Protocol `string`
  * ProtocolVersion `string`
  * Port `integer`
  * VpcId `string`
  * HealthCheckProtocol `string`
  * HealthCheckPort `string`
  * HealthCheckEnabled `boolean`
  * HealthCheckPath `string`
  * HealthCheckIntervalSeconds `integer`
  * HealthCheckTimeoutSeconds `integer`
  * HealthyThresholdCount `integer`
  * UnhealthyThresholdCount `integer`
  * Matcher `object`
  * TargetType `string`
  * Tags `array`

#### Output
* output [CreateTargetGroupOutput](#createtargetgroupoutput)

### CreateTargetGroup



```js
amazonaws_elasticloadbalancing.CreateTargetGroup({
  "Name": null
}, context)
```

#### Input
* input `object`
  * HealthCheckEnabled
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * HealthCheckTimeoutSeconds
  * HealthyThresholdCount
  * Matcher
    * GrpcCode
    * HttpCode
  * Name **required**
  * Port
  * Protocol
  * ProtocolVersion
  * Tags
    * items [Tag](#tag)
  * TargetType
  * UnhealthyThresholdCount
  * VpcId

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
  * ListenerArn **required** `string`

#### Output
* output [DeleteListenerOutput](#deletelisteneroutput)

### DeleteListener



```js
amazonaws_elasticloadbalancing.DeleteListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**

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
  * LoadBalancerArn **required** `string`

#### Output
* output [DeleteLoadBalancerOutput](#deleteloadbalanceroutput)

### DeleteLoadBalancer



```js
amazonaws_elasticloadbalancing.DeleteLoadBalancer({
  "LoadBalancerArn": null
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required**

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
  * RuleArn **required** `string`

#### Output
* output [DeleteRuleOutput](#deleteruleoutput)

### DeleteRule



```js
amazonaws_elasticloadbalancing.DeleteRule({
  "RuleArn": null
}, context)
```

#### Input
* input `object`
  * RuleArn **required**

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
  * TargetGroupArn **required** `string`

#### Output
* output [DeleteTargetGroupOutput](#deletetargetgroupoutput)

### DeleteTargetGroup



```js
amazonaws_elasticloadbalancing.DeleteTargetGroup({
  "TargetGroupArn": null
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required**

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
  * TargetGroupArn **required** `string`
  * Targets **required** `array`

#### Output
* output [DeregisterTargetsOutput](#deregistertargetsoutput)

### DeregisterTargets



```js
amazonaws_elasticloadbalancing.DeregisterTargets({
  "TargetGroupArn": null,
  "Targets": null
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required**
  * Targets **required**
    * items [TargetDescription](#targetdescription)

#### Output
* output [DeregisterTargetsOutput](#deregistertargetsoutput)

### DescribeAccountLimits



```js
amazonaws_elasticloadbalancing.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeAccountLimitsOutput](#describeaccountlimitsoutput)

### DescribeAccountLimits



```js
amazonaws_elasticloadbalancing.DescribeAccountLimits({}, context)
```

#### Input
* input `object`
  * Marker
  * PageSize

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
  * ListenerArn **required** `string`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeListenerCertificatesOutput](#describelistenercertificatesoutput)

### DescribeListenerCertificates



```js
amazonaws_elasticloadbalancing.DescribeListenerCertificates({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * ListenerArn **required**
  * Marker
  * PageSize

#### Output
* output [DescribeListenerCertificatesOutput](#describelistenercertificatesoutput)

### DescribeListeners



```js
amazonaws_elasticloadbalancing.DescribeListeners({}, context)
```

#### Input
* input `object`
  * LoadBalancerArn `string`
  * ListenerArns `array`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeListenersOutput](#describelistenersoutput)

### DescribeListeners



```js
amazonaws_elasticloadbalancing.DescribeListeners({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * ListenerArns
    * items [ListenerArn](#listenerarn)
  * LoadBalancerArn
  * Marker
  * PageSize

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
  * LoadBalancerArn **required** `string`

#### Output
* output [DescribeLoadBalancerAttributesOutput](#describeloadbalancerattributesoutput)

### DescribeLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancerAttributes({
  "LoadBalancerArn": null
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required**

#### Output
* output [DescribeLoadBalancerAttributesOutput](#describeloadbalancerattributesoutput)

### DescribeLoadBalancers



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancers({}, context)
```

#### Input
* input `object`
  * LoadBalancerArns `array`
  * Names `array`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeLoadBalancersOutput](#describeloadbalancersoutput)

### DescribeLoadBalancers



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancers({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * LoadBalancerArns
    * items [LoadBalancerArn](#loadbalancerarn)
  * Marker
  * Names
    * items [LoadBalancerName](#loadbalancername)
  * PageSize

#### Output
* output [DescribeLoadBalancersOutput](#describeloadbalancersoutput)

### DescribeRules



```js
amazonaws_elasticloadbalancing.DescribeRules({}, context)
```

#### Input
* input `object`
  * ListenerArn `string`
  * RuleArns `array`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeRulesOutput](#describerulesoutput)

### DescribeRules



```js
amazonaws_elasticloadbalancing.DescribeRules({}, context)
```

#### Input
* input `object`
  * ListenerArn
  * Marker
  * PageSize
  * RuleArns
    * items [RuleArn](#rulearn)

#### Output
* output [DescribeRulesOutput](#describerulesoutput)

### DescribeSSLPolicies



```js
amazonaws_elasticloadbalancing.DescribeSSLPolicies({}, context)
```

#### Input
* input `object`
  * Names `array`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeSSLPoliciesOutput](#describesslpoliciesoutput)

### DescribeSSLPolicies



```js
amazonaws_elasticloadbalancing.DescribeSSLPolicies({}, context)
```

#### Input
* input `object`
  * Marker
  * Names
    * items [SslPolicyName](#sslpolicyname)
  * PageSize

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
  * ResourceArns **required** `array`

#### Output
* output [DescribeTagsOutput](#describetagsoutput)

### DescribeTags



```js
amazonaws_elasticloadbalancing.DescribeTags({
  "ResourceArns": null
}, context)
```

#### Input
* input `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)

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
  * TargetGroupArn **required** `string`

#### Output
* output [DescribeTargetGroupAttributesOutput](#describetargetgroupattributesoutput)

### DescribeTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.DescribeTargetGroupAttributes({
  "TargetGroupArn": null
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required**

#### Output
* output [DescribeTargetGroupAttributesOutput](#describetargetgroupattributesoutput)

### DescribeTargetGroups



```js
amazonaws_elasticloadbalancing.DescribeTargetGroups({}, context)
```

#### Input
* input `object`
  * LoadBalancerArn `string`
  * TargetGroupArns `array`
  * Names `array`
  * Marker `string`
  * PageSize `integer`

#### Output
* output [DescribeTargetGroupsOutput](#describetargetgroupsoutput)

### DescribeTargetGroups



```js
amazonaws_elasticloadbalancing.DescribeTargetGroups({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * LoadBalancerArn
  * Marker
  * Names
    * items [TargetGroupName](#targetgroupname)
  * PageSize
  * TargetGroupArns
    * items [TargetGroupArn](#targetgrouparn)

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
  * TargetGroupArn **required** `string`
  * Targets `array`

#### Output
* output [DescribeTargetHealthOutput](#describetargethealthoutput)

### DescribeTargetHealth



```js
amazonaws_elasticloadbalancing.DescribeTargetHealth({
  "TargetGroupArn": null
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required**
  * Targets
    * items [TargetDescription](#targetdescription)

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
  * ListenerArn **required** `string`
  * Port `integer`
  * Protocol `string`
  * SslPolicy `string`
  * Certificates `array`
  * DefaultActions `array`
  * AlpnPolicy `array`

#### Output
* output [ModifyListenerOutput](#modifylisteneroutput)

### ModifyListener



```js
amazonaws_elasticloadbalancing.ModifyListener({
  "ListenerArn": null
}, context)
```

#### Input
* input `object`
  * AlpnPolicy
    * items [AlpnPolicyValue](#alpnpolicyvalue)
  * Certificates
    * items [Certificate](#certificate)
  * DefaultActions
    * items [Action](#action)
  * ListenerArn **required**
  * Port
  * Protocol
  * SslPolicy

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
  * LoadBalancerArn **required** `string`
  * Attributes **required** `array`

#### Output
* output [ModifyLoadBalancerAttributesOutput](#modifyloadbalancerattributesoutput)

### ModifyLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.ModifyLoadBalancerAttributes({
  "LoadBalancerArn": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
    * items [LoadBalancerAttribute](#loadbalancerattribute)
  * LoadBalancerArn **required**

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
  * RuleArn **required** `string`
  * Conditions `array`
  * Actions `array`

#### Output
* output [ModifyRuleOutput](#modifyruleoutput)

### ModifyRule



```js
amazonaws_elasticloadbalancing.ModifyRule({
  "RuleArn": null
}, context)
```

#### Input
* input `object`
  * Actions
    * items [Action](#action)
  * Conditions
    * items [RuleCondition](#rulecondition)
  * RuleArn **required**

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
  * TargetGroupArn **required** `string`
  * HealthCheckProtocol `string`
  * HealthCheckPort `string`
  * HealthCheckPath `string`
  * HealthCheckEnabled `boolean`
  * HealthCheckIntervalSeconds `integer`
  * HealthCheckTimeoutSeconds `integer`
  * HealthyThresholdCount `integer`
  * UnhealthyThresholdCount `integer`
  * Matcher `object`

#### Output
* output [ModifyTargetGroupOutput](#modifytargetgroupoutput)

### ModifyTargetGroup



```js
amazonaws_elasticloadbalancing.ModifyTargetGroup({
  "TargetGroupArn": null
}, context)
```

#### Input
* input `object`
  * HealthCheckEnabled
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * HealthCheckTimeoutSeconds
  * HealthyThresholdCount
  * Matcher
    * GrpcCode
    * HttpCode
  * TargetGroupArn **required**
  * UnhealthyThresholdCount

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
  * TargetGroupArn **required** `string`
  * Attributes **required** `array`

#### Output
* output [ModifyTargetGroupAttributesOutput](#modifytargetgroupattributesoutput)

### ModifyTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.ModifyTargetGroupAttributes({
  "TargetGroupArn": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
    * items [TargetGroupAttribute](#targetgroupattribute)
  * TargetGroupArn **required**

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
  * TargetGroupArn **required** `string`
  * Targets **required** `array`

#### Output
* output [RegisterTargetsOutput](#registertargetsoutput)

### RegisterTargets



```js
amazonaws_elasticloadbalancing.RegisterTargets({
  "TargetGroupArn": null,
  "Targets": null
}, context)
```

#### Input
* input `object`
  * TargetGroupArn **required**
  * Targets **required**
    * items [TargetDescription](#targetdescription)

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
  * ListenerArn **required** `string`
  * Certificates **required** `array`

#### Output
* output [RemoveListenerCertificatesOutput](#removelistenercertificatesoutput)

### RemoveListenerCertificates



```js
amazonaws_elasticloadbalancing.RemoveListenerCertificates({
  "ListenerArn": null,
  "Certificates": null
}, context)
```

#### Input
* input `object`
  * Certificates **required**
    * items [Certificate](#certificate)
  * ListenerArn **required**

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
  * ResourceArns **required** `array`
  * TagKeys **required** `array`

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### RemoveTags



```js
amazonaws_elasticloadbalancing.RemoveTags({
  "ResourceArns": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)
  * TagKeys **required**
    * items [TagKey](#tagkey)

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
  * LoadBalancerArn **required** `string`
  * IpAddressType **required** `string`

#### Output
* output [SetIpAddressTypeOutput](#setipaddresstypeoutput)

### SetIpAddressType



```js
amazonaws_elasticloadbalancing.SetIpAddressType({
  "LoadBalancerArn": null,
  "IpAddressType": null
}, context)
```

#### Input
* input `object`
  * IpAddressType **required**
  * LoadBalancerArn **required**

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
  * RulePriorities **required** `array`

#### Output
* output [SetRulePrioritiesOutput](#setruleprioritiesoutput)

### SetRulePriorities



```js
amazonaws_elasticloadbalancing.SetRulePriorities({
  "RulePriorities": null
}, context)
```

#### Input
* input `object`
  * RulePriorities **required**
    * items [RulePriorityPair](#ruleprioritypair)

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
  * LoadBalancerArn **required** `string`
  * SecurityGroups **required** `array`

#### Output
* output [SetSecurityGroupsOutput](#setsecuritygroupsoutput)

### SetSecurityGroups



```js
amazonaws_elasticloadbalancing.SetSecurityGroups({
  "LoadBalancerArn": null,
  "SecurityGroups": null
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required**
  * SecurityGroups **required**
    * items [SecurityGroupId](#securitygroupid)

#### Output
* output [SetSecurityGroupsOutput](#setsecuritygroupsoutput)

### SetSubnets



```js
amazonaws_elasticloadbalancing.SetSubnets({
  "LoadBalancerArn": ""
}, context)
```

#### Input
* input `object`
  * LoadBalancerArn **required** `string`
  * Subnets `array`
  * SubnetMappings `array`
  * IpAddressType `string`

#### Output
* output [SetSubnetsOutput](#setsubnetsoutput)

### SetSubnets



```js
amazonaws_elasticloadbalancing.SetSubnets({
  "LoadBalancerArn": null
}, context)
```

#### Input
* input `object`
  * IpAddressType
  * LoadBalancerArn **required**
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * Subnets
    * items [SubnetId](#subnetid)

#### Output
* output [SetSubnetsOutput](#setsubnetsoutput)



## Definitions

### ALPNPolicyNotSupportedException


### Action
* Action `object`: <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>
  * AuthenticateCognitoConfig
    * AuthenticationRequestExtraParams
    * OnUnauthenticatedRequest
    * Scope
    * SessionCookieName
    * SessionTimeout
    * UserPoolArn **required**
    * UserPoolClientId **required**
    * UserPoolDomain **required**
  * AuthenticateOidcConfig
    * AuthenticationRequestExtraParams
    * AuthorizationEndpoint **required**
    * ClientId **required**
    * ClientSecret
    * Issuer **required**
    * OnUnauthenticatedRequest
    * Scope
    * SessionCookieName
    * SessionTimeout
    * TokenEndpoint **required**
    * UseExistingClientSecret
    * UserInfoEndpoint **required**
  * FixedResponseConfig
    * ContentType
    * MessageBody
    * StatusCode **required**
  * ForwardConfig
    * TargetGroupStickinessConfig
      * DurationSeconds
      * Enabled
    * TargetGroups
      * items [TargetGroupTuple](#targetgrouptuple)
  * Order
  * RedirectConfig
    * Host
    * Path
    * Port
    * Protocol
    * Query
    * StatusCode **required**
  * TargetGroupArn
  * Type **required**

### ActionOrder
* ActionOrder `integer`

### ActionTypeEnum
* ActionTypeEnum `string` (values: forward, authenticate-oidc, authenticate-cognito, redirect, fixed-response)

### Actions
* Actions `array`
  * items [Action](#action)

### AddListenerCertificatesInput
* AddListenerCertificatesInput `object`
  * Certificates **required**
    * items [Certificate](#certificate)
  * ListenerArn **required**

### AddListenerCertificatesOutput
* AddListenerCertificatesOutput `object`
  * Certificates
    * items [Certificate](#certificate)

### AddTagsInput
* AddTagsInput `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)
  * Tags **required**
    * items [Tag](#tag)

### AddTagsOutput
* AddTagsOutput `object`

### AllocationId
* AllocationId `string`

### AllocationIdNotFoundException


### AlpnPolicyName
* AlpnPolicyName `array`
  * items [AlpnPolicyValue](#alpnpolicyvalue)

### AlpnPolicyValue
* AlpnPolicyValue `string`

### AuthenticateCognitoActionAuthenticationRequestExtraParams
* AuthenticateCognitoActionAuthenticationRequestExtraParams `object`

### AuthenticateCognitoActionAuthenticationRequestParamName
* AuthenticateCognitoActionAuthenticationRequestParamName `string`

### AuthenticateCognitoActionAuthenticationRequestParamValue
* AuthenticateCognitoActionAuthenticationRequestParamValue `string`

### AuthenticateCognitoActionConditionalBehaviorEnum
* AuthenticateCognitoActionConditionalBehaviorEnum `string` (values: deny, allow, authenticate)

### AuthenticateCognitoActionConfig
* AuthenticateCognitoActionConfig `object`: Request parameters to use when integrating with Amazon Cognito to authenticate users.
  * AuthenticationRequestExtraParams
  * OnUnauthenticatedRequest
  * Scope
  * SessionCookieName
  * SessionTimeout
  * UserPoolArn **required**
  * UserPoolClientId **required**
  * UserPoolDomain **required**

### AuthenticateCognitoActionScope
* AuthenticateCognitoActionScope `string`

### AuthenticateCognitoActionSessionCookieName
* AuthenticateCognitoActionSessionCookieName `string`

### AuthenticateCognitoActionSessionTimeout
* AuthenticateCognitoActionSessionTimeout `integer`

### AuthenticateCognitoActionUserPoolArn
* AuthenticateCognitoActionUserPoolArn `string`

### AuthenticateCognitoActionUserPoolClientId
* AuthenticateCognitoActionUserPoolClientId `string`

### AuthenticateCognitoActionUserPoolDomain
* AuthenticateCognitoActionUserPoolDomain `string`

### AuthenticateOidcActionAuthenticationRequestExtraParams
* AuthenticateOidcActionAuthenticationRequestExtraParams `object`

### AuthenticateOidcActionAuthenticationRequestParamName
* AuthenticateOidcActionAuthenticationRequestParamName `string`

### AuthenticateOidcActionAuthenticationRequestParamValue
* AuthenticateOidcActionAuthenticationRequestParamValue `string`

### AuthenticateOidcActionAuthorizationEndpoint
* AuthenticateOidcActionAuthorizationEndpoint `string`

### AuthenticateOidcActionClientId
* AuthenticateOidcActionClientId `string`

### AuthenticateOidcActionClientSecret
* AuthenticateOidcActionClientSecret `string`

### AuthenticateOidcActionConditionalBehaviorEnum
* AuthenticateOidcActionConditionalBehaviorEnum `string` (values: deny, allow, authenticate)

### AuthenticateOidcActionConfig
* AuthenticateOidcActionConfig `object`: Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
  * AuthenticationRequestExtraParams
  * AuthorizationEndpoint **required**
  * ClientId **required**
  * ClientSecret
  * Issuer **required**
  * OnUnauthenticatedRequest
  * Scope
  * SessionCookieName
  * SessionTimeout
  * TokenEndpoint **required**
  * UseExistingClientSecret
  * UserInfoEndpoint **required**

### AuthenticateOidcActionIssuer
* AuthenticateOidcActionIssuer `string`

### AuthenticateOidcActionScope
* AuthenticateOidcActionScope `string`

### AuthenticateOidcActionSessionCookieName
* AuthenticateOidcActionSessionCookieName `string`

### AuthenticateOidcActionSessionTimeout
* AuthenticateOidcActionSessionTimeout `integer`

### AuthenticateOidcActionTokenEndpoint
* AuthenticateOidcActionTokenEndpoint `string`

### AuthenticateOidcActionUseExistingClientSecret
* AuthenticateOidcActionUseExistingClientSecret `boolean`

### AuthenticateOidcActionUserInfoEndpoint
* AuthenticateOidcActionUserInfoEndpoint `string`

### AvailabilityZone
* AvailabilityZone `object`: Information about an Availability Zone.
  * LoadBalancerAddresses
    * items [LoadBalancerAddress](#loadbalanceraddress)
  * OutpostId
  * SubnetId
  * ZoneName

### AvailabilityZoneNotSupportedException


### AvailabilityZones
* AvailabilityZones `array`
  * items [AvailabilityZone](#availabilityzone)

### CanonicalHostedZoneId
* CanonicalHostedZoneId `string`

### Certificate
* Certificate `object`: Information about an SSL server certificate.
  * CertificateArn
  * IsDefault

### CertificateArn
* CertificateArn `string`

### CertificateList
* CertificateList `array`
  * items [Certificate](#certificate)

### CertificateNotFoundException


### Cipher
* Cipher `object`: Information about a cipher used in a policy.
  * Name
  * Priority

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
  * AlpnPolicy
    * items [AlpnPolicyValue](#alpnpolicyvalue)
  * Certificates
    * items [Certificate](#certificate)
  * DefaultActions **required**
    * items [Action](#action)
  * LoadBalancerArn **required**
  * Port
  * Protocol
  * SslPolicy
  * Tags
    * items [Tag](#tag)

### CreateListenerOutput
* CreateListenerOutput `object`
  * Listeners
    * items [Listener](#listener)

### CreateLoadBalancerInput
* CreateLoadBalancerInput `object`
  * CustomerOwnedIpv4Pool
  * IpAddressType
  * Name **required**
  * Scheme
  * SecurityGroups
    * items [SecurityGroupId](#securitygroupid)
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * Subnets
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * Type

### CreateLoadBalancerOutput
* CreateLoadBalancerOutput `object`
  * LoadBalancers
    * items [LoadBalancer](#loadbalancer)

### CreateRuleInput
* CreateRuleInput `object`
  * Actions **required**
    * items [Action](#action)
  * Conditions **required**
    * items [RuleCondition](#rulecondition)
  * ListenerArn **required**
  * Priority **required**
  * Tags
    * items [Tag](#tag)

### CreateRuleOutput
* CreateRuleOutput `object`
  * Rules
    * items [Rule](#rule)

### CreateTargetGroupInput
* CreateTargetGroupInput `object`
  * HealthCheckEnabled
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * HealthCheckTimeoutSeconds
  * HealthyThresholdCount
  * Matcher
    * GrpcCode
    * HttpCode
  * Name **required**
  * Port
  * Protocol
  * ProtocolVersion
  * Tags
    * items [Tag](#tag)
  * TargetType
  * UnhealthyThresholdCount
  * VpcId

### CreateTargetGroupOutput
* CreateTargetGroupOutput `object`
  * TargetGroups
    * items [TargetGroup](#targetgroup)

### CreatedTime
* CreatedTime `string`

### CustomerOwnedIpv4Pool
* CustomerOwnedIpv4Pool `string`

### DNSName
* DNSName `string`

### Default
* Default `boolean`

### DeleteListenerInput
* DeleteListenerInput `object`
  * ListenerArn **required**

### DeleteListenerOutput
* DeleteListenerOutput `object`

### DeleteLoadBalancerInput
* DeleteLoadBalancerInput `object`
  * LoadBalancerArn **required**

### DeleteLoadBalancerOutput
* DeleteLoadBalancerOutput `object`

### DeleteRuleInput
* DeleteRuleInput `object`
  * RuleArn **required**

### DeleteRuleOutput
* DeleteRuleOutput `object`

### DeleteTargetGroupInput
* DeleteTargetGroupInput `object`
  * TargetGroupArn **required**

### DeleteTargetGroupOutput
* DeleteTargetGroupOutput `object`

### DeregisterTargetsInput
* DeregisterTargetsInput `object`
  * TargetGroupArn **required**
  * Targets **required**
    * items [TargetDescription](#targetdescription)

### DeregisterTargetsOutput
* DeregisterTargetsOutput `object`

### DescribeAccountLimitsInput
* DescribeAccountLimitsInput `object`
  * Marker
  * PageSize

### DescribeAccountLimitsOutput
* DescribeAccountLimitsOutput `object`
  * Limits
    * items [Limit](#limit)
  * NextMarker

### DescribeListenerCertificatesInput
* DescribeListenerCertificatesInput `object`
  * ListenerArn **required**
  * Marker
  * PageSize

### DescribeListenerCertificatesOutput
* DescribeListenerCertificatesOutput `object`
  * Certificates
    * items [Certificate](#certificate)
  * NextMarker

### DescribeListenersInput
* DescribeListenersInput `object`
  * ListenerArns
    * items [ListenerArn](#listenerarn)
  * LoadBalancerArn
  * Marker
  * PageSize

### DescribeListenersOutput
* DescribeListenersOutput `object`
  * Listeners
    * items [Listener](#listener)
  * NextMarker

### DescribeLoadBalancerAttributesInput
* DescribeLoadBalancerAttributesInput `object`
  * LoadBalancerArn **required**

### DescribeLoadBalancerAttributesOutput
* DescribeLoadBalancerAttributesOutput `object`
  * Attributes
    * items [LoadBalancerAttribute](#loadbalancerattribute)

### DescribeLoadBalancersInput
* DescribeLoadBalancersInput `object`
  * LoadBalancerArns
    * items [LoadBalancerArn](#loadbalancerarn)
  * Marker
  * Names
    * items [LoadBalancerName](#loadbalancername)
  * PageSize

### DescribeLoadBalancersOutput
* DescribeLoadBalancersOutput `object`
  * LoadBalancers
    * items [LoadBalancer](#loadbalancer)
  * NextMarker

### DescribeRulesInput
* DescribeRulesInput `object`
  * ListenerArn
  * Marker
  * PageSize
  * RuleArns
    * items [RuleArn](#rulearn)

### DescribeRulesOutput
* DescribeRulesOutput `object`
  * NextMarker
  * Rules
    * items [Rule](#rule)

### DescribeSSLPoliciesInput
* DescribeSSLPoliciesInput `object`
  * Marker
  * Names
    * items [SslPolicyName](#sslpolicyname)
  * PageSize

### DescribeSSLPoliciesOutput
* DescribeSSLPoliciesOutput `object`
  * NextMarker
  * SslPolicies
    * items [SslPolicy](#sslpolicy)

### DescribeTagsInput
* DescribeTagsInput `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)

### DescribeTagsOutput
* DescribeTagsOutput `object`
  * TagDescriptions
    * items [TagDescription](#tagdescription)

### DescribeTargetGroupAttributesInput
* DescribeTargetGroupAttributesInput `object`
  * TargetGroupArn **required**

### DescribeTargetGroupAttributesOutput
* DescribeTargetGroupAttributesOutput `object`
  * Attributes
    * items [TargetGroupAttribute](#targetgroupattribute)

### DescribeTargetGroupsInput
* DescribeTargetGroupsInput `object`
  * LoadBalancerArn
  * Marker
  * Names
    * items [TargetGroupName](#targetgroupname)
  * PageSize
  * TargetGroupArns
    * items [TargetGroupArn](#targetgrouparn)

### DescribeTargetGroupsOutput
* DescribeTargetGroupsOutput `object`
  * NextMarker
  * TargetGroups
    * items [TargetGroup](#targetgroup)

### DescribeTargetHealthInput
* DescribeTargetHealthInput `object`
  * TargetGroupArn **required**
  * Targets
    * items [TargetDescription](#targetdescription)

### DescribeTargetHealthOutput
* DescribeTargetHealthOutput `object`
  * TargetHealthDescriptions
    * items [TargetHealthDescription](#targethealthdescription)

### Description
* Description `string`

### DuplicateListenerException


### DuplicateLoadBalancerNameException


### DuplicateTagKeysException


### DuplicateTargetGroupNameException


### FixedResponseActionConfig
* FixedResponseActionConfig `object`: Information about an action that returns a custom HTTP response.
  * ContentType
  * MessageBody
  * StatusCode **required**

### FixedResponseActionContentType
* FixedResponseActionContentType `string`

### FixedResponseActionMessage
* FixedResponseActionMessage `string`

### FixedResponseActionStatusCode
* FixedResponseActionStatusCode `string`

### ForwardActionConfig
* ForwardActionConfig `object`: Information about a forward action.
  * TargetGroupStickinessConfig
    * DurationSeconds
    * Enabled
  * TargetGroups
    * items [TargetGroupTuple](#targetgrouptuple)

### GrpcCode
* GrpcCode `string`

### HealthCheckEnabled
* HealthCheckEnabled `boolean`

### HealthCheckIntervalSeconds
* HealthCheckIntervalSeconds `integer`

### HealthCheckPort
* HealthCheckPort `string`

### HealthCheckThresholdCount
* HealthCheckThresholdCount `integer`

### HealthCheckTimeoutSeconds
* HealthCheckTimeoutSeconds `integer`

### HealthUnavailableException


### HostHeaderConditionConfig
* HostHeaderConditionConfig `object`: Information about a host header condition.
  * Values
    * items [StringValue](#stringvalue)

### HttpCode
* HttpCode `string`

### HttpHeaderConditionConfig
* HttpHeaderConditionConfig `object`: <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
  * HttpHeaderName
  * Values
    * items [StringValue](#stringvalue)

### HttpHeaderConditionName
* HttpHeaderConditionName `string`

### HttpRequestMethodConditionConfig
* HttpRequestMethodConditionConfig `object`: <p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p>
  * Values
    * items [StringValue](#stringvalue)

### IPv6Address
* IPv6Address `string`

### IncompatibleProtocolsException


### InvalidConfigurationRequestException


### InvalidLoadBalancerActionException


### InvalidSchemeException


### InvalidSecurityGroupException


### InvalidSubnetException


### InvalidTargetException


### IpAddress
* IpAddress `string`

### IpAddressType
* IpAddressType `string` (values: ipv4, dualstack)

### IsDefault
* IsDefault `boolean`

### Limit
* Limit `object`: Information about an Elastic Load Balancing resource limit for your AWS account.
  * Max
  * Name

### Limits
* Limits `array`
  * items [Limit](#limit)

### ListOfString
* ListOfString `array`
  * items [StringValue](#stringvalue)

### Listener
* Listener `object`: Information about a listener.
  * AlpnPolicy
    * items [AlpnPolicyValue](#alpnpolicyvalue)
  * Certificates
    * items [Certificate](#certificate)
  * DefaultActions
    * items [Action](#action)
  * ListenerArn
  * LoadBalancerArn
  * Port
  * Protocol
  * SslPolicy

### ListenerArn
* ListenerArn `string`

### ListenerArns
* ListenerArns `array`
  * items [ListenerArn](#listenerarn)

### ListenerNotFoundException


### Listeners
* Listeners `array`
  * items [Listener](#listener)

### LoadBalancer
* LoadBalancer `object`: Information about a load balancer.
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * CanonicalHostedZoneId
  * CreatedTime
  * CustomerOwnedIpv4Pool
  * DNSName
  * IpAddressType
  * LoadBalancerArn
  * LoadBalancerName
  * Scheme
  * SecurityGroups
    * items [SecurityGroupId](#securitygroupid)
  * State
    * Code
    * Reason
  * Type
  * VpcId

### LoadBalancerAddress
* LoadBalancerAddress `object`: Information about a static IP address for a load balancer.
  * AllocationId
  * IPv6Address
  * IpAddress
  * PrivateIPv4Address

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
  * Key
  * Value

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


### LoadBalancerSchemeEnum
* LoadBalancerSchemeEnum `string` (values: internet-facing, internal)

### LoadBalancerState
* LoadBalancerState `object`: Information about the state of the load balancer.
  * Code
  * Reason

### LoadBalancerStateEnum
* LoadBalancerStateEnum `string` (values: active, provisioning, active_impaired, failed)

### LoadBalancerTypeEnum
* LoadBalancerTypeEnum `string` (values: application, network, gateway)

### LoadBalancers
* LoadBalancers `array`
  * items [LoadBalancer](#loadbalancer)

### Marker
* Marker `string`

### Matcher
* Matcher `object`: The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
  * GrpcCode
  * HttpCode

### Max
* Max `string`

### ModifyListenerInput
* ModifyListenerInput `object`
  * AlpnPolicy
    * items [AlpnPolicyValue](#alpnpolicyvalue)
  * Certificates
    * items [Certificate](#certificate)
  * DefaultActions
    * items [Action](#action)
  * ListenerArn **required**
  * Port
  * Protocol
  * SslPolicy

### ModifyListenerOutput
* ModifyListenerOutput `object`
  * Listeners
    * items [Listener](#listener)

### ModifyLoadBalancerAttributesInput
* ModifyLoadBalancerAttributesInput `object`
  * Attributes **required**
    * items [LoadBalancerAttribute](#loadbalancerattribute)
  * LoadBalancerArn **required**

### ModifyLoadBalancerAttributesOutput
* ModifyLoadBalancerAttributesOutput `object`
  * Attributes
    * items [LoadBalancerAttribute](#loadbalancerattribute)

### ModifyRuleInput
* ModifyRuleInput `object`
  * Actions
    * items [Action](#action)
  * Conditions
    * items [RuleCondition](#rulecondition)
  * RuleArn **required**

### ModifyRuleOutput
* ModifyRuleOutput `object`
  * Rules
    * items [Rule](#rule)

### ModifyTargetGroupAttributesInput
* ModifyTargetGroupAttributesInput `object`
  * Attributes **required**
    * items [TargetGroupAttribute](#targetgroupattribute)
  * TargetGroupArn **required**

### ModifyTargetGroupAttributesOutput
* ModifyTargetGroupAttributesOutput `object`
  * Attributes
    * items [TargetGroupAttribute](#targetgroupattribute)

### ModifyTargetGroupInput
* ModifyTargetGroupInput `object`
  * HealthCheckEnabled
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * HealthCheckTimeoutSeconds
  * HealthyThresholdCount
  * Matcher
    * GrpcCode
    * HttpCode
  * TargetGroupArn **required**
  * UnhealthyThresholdCount

### ModifyTargetGroupOutput
* ModifyTargetGroupOutput `object`
  * TargetGroups
    * items [TargetGroup](#targetgroup)

### Name
* Name `string`

### OperationNotPermittedException


### OutpostId
* OutpostId `string`

### PageSize
* PageSize `integer`

### Path
* Path `string`

### PathPatternConditionConfig
* PathPatternConditionConfig `object`: Information about a path pattern condition.
  * Values
    * items [StringValue](#stringvalue)

### Port
* Port `integer`

### PriorityInUseException


### PrivateIPv4Address
* PrivateIPv4Address `string`

### ProtocolEnum
* ProtocolEnum `string` (values: HTTP, HTTPS, TCP, TLS, UDP, TCP_UDP, GENEVE)

### ProtocolVersion
* ProtocolVersion `string`

### QueryStringConditionConfig
* QueryStringConditionConfig `object`: <p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p>
  * Values
    * items [QueryStringKeyValuePair](#querystringkeyvaluepair)

### QueryStringKeyValuePair
* QueryStringKeyValuePair `object`: Information about a key/value pair.
  * Key
  * Value

### QueryStringKeyValuePairList
* QueryStringKeyValuePairList `array`
  * items [QueryStringKeyValuePair](#querystringkeyvaluepair)

### RedirectActionConfig
* RedirectActionConfig `object`: <p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p>
  * Host
  * Path
  * Port
  * Protocol
  * Query
  * StatusCode **required**

### RedirectActionHost
* RedirectActionHost `string`

### RedirectActionPath
* RedirectActionPath `string`

### RedirectActionPort
* RedirectActionPort `string`

### RedirectActionProtocol
* RedirectActionProtocol `string`

### RedirectActionQuery
* RedirectActionQuery `string`

### RedirectActionStatusCodeEnum
* RedirectActionStatusCodeEnum `string` (values: HTTP_301, HTTP_302)

### RegisterTargetsInput
* RegisterTargetsInput `object`
  * TargetGroupArn **required**
  * Targets **required**
    * items [TargetDescription](#targetdescription)

### RegisterTargetsOutput
* RegisterTargetsOutput `object`

### RemoveListenerCertificatesInput
* RemoveListenerCertificatesInput `object`
  * Certificates **required**
    * items [Certificate](#certificate)
  * ListenerArn **required**

### RemoveListenerCertificatesOutput
* RemoveListenerCertificatesOutput `object`

### RemoveTagsInput
* RemoveTagsInput `object`
  * ResourceArns **required**
    * items [ResourceArn](#resourcearn)
  * TagKeys **required**
    * items [TagKey](#tagkey)

### RemoveTagsOutput
* RemoveTagsOutput `object`

### ResourceArn
* ResourceArn `string`

### ResourceArns
* ResourceArns `array`
  * items [ResourceArn](#resourcearn)

### ResourceInUseException


### Rule
* Rule `object`: Information about a rule.
  * Actions
    * items [Action](#action)
  * Conditions
    * items [RuleCondition](#rulecondition)
  * IsDefault
  * Priority
  * RuleArn

### RuleArn
* RuleArn `string`

### RuleArns
* RuleArns `array`
  * items [RuleArn](#rulearn)

### RuleCondition
* RuleCondition `object`: <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
  * Field
  * HostHeaderConfig
    * Values
      * items [StringValue](#stringvalue)
  * HttpHeaderConfig
    * HttpHeaderName
    * Values
      * items [StringValue](#stringvalue)
  * HttpRequestMethodConfig
    * Values
      * items [StringValue](#stringvalue)
  * PathPatternConfig
    * Values
      * items [StringValue](#stringvalue)
  * QueryStringConfig
    * Values
      * items [QueryStringKeyValuePair](#querystringkeyvaluepair)
  * SourceIpConfig
    * Values
      * items [StringValue](#stringvalue)
  * Values
    * items [StringValue](#stringvalue)

### RuleConditionList
* RuleConditionList `array`
  * items [RuleCondition](#rulecondition)

### RuleNotFoundException


### RulePriority
* RulePriority `integer`

### RulePriorityList
* RulePriorityList `array`
  * items [RulePriorityPair](#ruleprioritypair)

### RulePriorityPair
* RulePriorityPair `object`: Information about the priorities for the rules for a listener.
  * Priority
  * RuleArn

### Rules
* Rules `array`
  * items [Rule](#rule)

### SSLPolicyNotFoundException


### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroups
* SecurityGroups `array`
  * items [SecurityGroupId](#securitygroupid)

### SetIpAddressTypeInput
* SetIpAddressTypeInput `object`
  * IpAddressType **required**
  * LoadBalancerArn **required**

### SetIpAddressTypeOutput
* SetIpAddressTypeOutput `object`
  * IpAddressType

### SetRulePrioritiesInput
* SetRulePrioritiesInput `object`
  * RulePriorities **required**
    * items [RulePriorityPair](#ruleprioritypair)

### SetRulePrioritiesOutput
* SetRulePrioritiesOutput `object`
  * Rules
    * items [Rule](#rule)

### SetSecurityGroupsInput
* SetSecurityGroupsInput `object`
  * LoadBalancerArn **required**
  * SecurityGroups **required**
    * items [SecurityGroupId](#securitygroupid)

### SetSecurityGroupsOutput
* SetSecurityGroupsOutput `object`
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)

### SetSubnetsInput
* SetSubnetsInput `object`
  * IpAddressType
  * LoadBalancerArn **required**
  * SubnetMappings
    * items [SubnetMapping](#subnetmapping)
  * Subnets
    * items [SubnetId](#subnetid)

### SetSubnetsOutput
* SetSubnetsOutput `object`
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * IpAddressType

### SourceIpConditionConfig
* SourceIpConditionConfig `object`: <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>
  * Values
    * items [StringValue](#stringvalue)

### SslPolicies
* SslPolicies `array`
  * items [SslPolicy](#sslpolicy)

### SslPolicy
* SslPolicy `object`: Information about a policy used for SSL negotiation.
  * Ciphers
    * items [Cipher](#cipher)
  * Name
  * SslProtocols
    * items [SslProtocol](#sslprotocol)

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
  * AllocationId
  * IPv6Address
  * PrivateIPv4Address
  * SubnetId

### SubnetMappings
* SubnetMappings `array`
  * items [SubnetMapping](#subnetmapping)

### SubnetNotFoundException


### Subnets
* Subnets `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Information about a tag.
  * Key **required**
  * Value

### TagDescription
* TagDescription `object`: The tags associated with a resource.
  * ResourceArn
  * Tags
    * items [Tag](#tag)

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
  * AvailabilityZone
  * Id **required**
  * Port

### TargetDescriptions
* TargetDescriptions `array`
  * items [TargetDescription](#targetdescription)

### TargetGroup
* TargetGroup `object`: Information about a target group.
  * HealthCheckEnabled
  * HealthCheckIntervalSeconds
  * HealthCheckPath
  * HealthCheckPort
  * HealthCheckProtocol
  * HealthCheckTimeoutSeconds
  * HealthyThresholdCount
  * LoadBalancerArns
    * items [LoadBalancerArn](#loadbalancerarn)
  * Matcher
    * GrpcCode
    * HttpCode
  * Port
  * Protocol
  * ProtocolVersion
  * TargetGroupArn
  * TargetGroupName
  * TargetType
  * UnhealthyThresholdCount
  * VpcId

### TargetGroupArn
* TargetGroupArn `string`

### TargetGroupArns
* TargetGroupArns `array`
  * items [TargetGroupArn](#targetgrouparn)

### TargetGroupAssociationLimitException


### TargetGroupAttribute
* TargetGroupAttribute `object`: Information about a target group attribute.
  * Key
  * Value

### TargetGroupAttributeKey
* TargetGroupAttributeKey `string`

### TargetGroupAttributeValue
* TargetGroupAttributeValue `string`

### TargetGroupAttributes
* TargetGroupAttributes `array`
  * items [TargetGroupAttribute](#targetgroupattribute)

### TargetGroupList
* TargetGroupList `array`
  * items [TargetGroupTuple](#targetgrouptuple)

### TargetGroupName
* TargetGroupName `string`

### TargetGroupNames
* TargetGroupNames `array`
  * items [TargetGroupName](#targetgroupname)

### TargetGroupNotFoundException


### TargetGroupStickinessConfig
* TargetGroupStickinessConfig `object`: Information about the target group stickiness for a rule.
  * DurationSeconds
  * Enabled

### TargetGroupStickinessDurationSeconds
* TargetGroupStickinessDurationSeconds `integer`

### TargetGroupStickinessEnabled
* TargetGroupStickinessEnabled `boolean`

### TargetGroupTuple
* TargetGroupTuple `object`: Information about how traffic will be distributed between multiple target groups in a forward rule.
  * TargetGroupArn
  * Weight

### TargetGroupWeight
* TargetGroupWeight `integer`

### TargetGroups
* TargetGroups `array`
  * items [TargetGroup](#targetgroup)

### TargetHealth
* TargetHealth `object`: Information about the current health of a target.
  * Description
  * Reason
  * State

### TargetHealthDescription
* TargetHealthDescription `object`: Information about the health of a target.
  * HealthCheckPort
  * Target
    * AvailabilityZone
    * Id **required**
    * Port
  * TargetHealth
    * Description
    * Reason
    * State

### TargetHealthDescriptions
* TargetHealthDescriptions `array`
  * items [TargetHealthDescription](#targethealthdescription)

### TargetHealthReasonEnum
* TargetHealthReasonEnum `string` (values: Elb.RegistrationInProgress, Elb.InitialHealthChecking, Target.ResponseCodeMismatch, Target.Timeout, Target.FailedHealthChecks, Target.NotRegistered, Target.NotInUse, Target.DeregistrationInProgress, Target.InvalidState, Target.IpUnusable, Target.HealthCheckDisabled, Elb.InternalError)

### TargetHealthStateEnum
* TargetHealthStateEnum `string` (values: initial, healthy, unhealthy, unused, draining, unavailable)

### TargetId
* TargetId `string`

### TargetTypeEnum
* TargetTypeEnum `string` (values: instance, ip, lambda)

### TooManyActionsException


### TooManyCertificatesException


### TooManyListenersException


### TooManyLoadBalancersException


### TooManyRegistrationsForTargetIdException


### TooManyRulesException


### TooManyTagsException


### TooManyTargetGroupsException


### TooManyTargetsException


### TooManyUniqueTargetGroupsPerLoadBalancerException


### UnsupportedProtocolException


### VpcId
* VpcId `string`

### ZoneName
* ZoneName `string`


