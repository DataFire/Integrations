# @datafire/amazonaws_elasticloadbalancing

Client library for Elastic Load Balancing

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticloadbalancing
```

```js
let datafire = require('datafire');
let amazonaws_elasticloadbalancing = require('@datafire/amazonaws_elasticloadbalancing').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_elasticloadbalancing.AddListenerCertificates({}).then(data => {
  console.log(data);
})
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

#### Parameters
* Certificates (array) **required**
* ListenerArn (string) **required**

### AddTags



```js
amazonaws_elasticloadbalancing.AddTags({
  "ResourceArns": [],
  "Tags": []
}, context)
```

#### Parameters
* ResourceArns (array) **required**
* Tags (array) **required**

### CreateListener



```js
amazonaws_elasticloadbalancing.CreateListener({
  "LoadBalancerArn": "",
  "Protocol": "",
  "Port": 0,
  "DefaultActions": []
}, context)
```

#### Parameters
* Certificates (array)
* DefaultActions (array) **required**
* LoadBalancerArn (string) **required**
* Port (integer) **required**
* Protocol (string) **required**
* SslPolicy (string)

### CreateLoadBalancer



```js
amazonaws_elasticloadbalancing.CreateLoadBalancer({
  "Name": ""
}, context)
```

#### Parameters
* IpAddressType (string)
* Name (string) **required**
* Scheme (string)
* SecurityGroups (array)
* SubnetMappings (array)
* Subnets (array)
* Tags (array)
* Type (string)

### CreateRule



```js
amazonaws_elasticloadbalancing.CreateRule({
  "ListenerArn": "",
  "Conditions": [],
  "Priority": 0,
  "Actions": []
}, context)
```

#### Parameters
* Actions (array) **required**
* Conditions (array) **required**
* ListenerArn (string) **required**
* Priority (integer) **required**

### CreateTargetGroup



```js
amazonaws_elasticloadbalancing.CreateTargetGroup({
  "Name": "",
  "Protocol": "",
  "Port": 0,
  "VpcId": ""
}, context)
```

#### Parameters
* HealthCheckIntervalSeconds (integer)
* HealthCheckPath (string)
* HealthCheckPort (string)
* HealthCheckProtocol (string)
* HealthCheckTimeoutSeconds (integer)
* HealthyThresholdCount (integer)
* Matcher (object) - Information to use when checking for a successful response from a target.
* Name (string) **required**
* Port (integer) **required**
* Protocol (string) **required**
* TargetType (string)
* UnhealthyThresholdCount (integer)
* VpcId (string) **required**

### DeleteListener



```js
amazonaws_elasticloadbalancing.DeleteListener({
  "ListenerArn": ""
}, context)
```

#### Parameters
* ListenerArn (string) **required**

### DeleteLoadBalancer



```js
amazonaws_elasticloadbalancing.DeleteLoadBalancer({
  "LoadBalancerArn": ""
}, context)
```

#### Parameters
* LoadBalancerArn (string) **required**

### DeleteRule



```js
amazonaws_elasticloadbalancing.DeleteRule({
  "RuleArn": ""
}, context)
```

#### Parameters
* RuleArn (string) **required**

### DeleteTargetGroup



```js
amazonaws_elasticloadbalancing.DeleteTargetGroup({
  "TargetGroupArn": ""
}, context)
```

#### Parameters
* TargetGroupArn (string) **required**

### DeregisterTargets



```js
amazonaws_elasticloadbalancing.DeregisterTargets({
  "TargetGroupArn": "",
  "Targets": []
}, context)
```

#### Parameters
* TargetGroupArn (string) **required**
* Targets (array) **required**

### DescribeAccountLimits



```js
amazonaws_elasticloadbalancing.DescribeAccountLimits({}, context)
```

#### Parameters
* Marker (string)
* PageSize (integer)

### DescribeListenerCertificates



```js
amazonaws_elasticloadbalancing.DescribeListenerCertificates({
  "ListenerArn": ""
}, context)
```

#### Parameters
* ListenerArn (string) **required**
* Marker (string)
* PageSize (integer)

### DescribeListeners



```js
amazonaws_elasticloadbalancing.DescribeListeners({}, context)
```

#### Parameters
* Marker (string)
* ListenerArns (array)
* LoadBalancerArn (string)
* Marker (string)
* PageSize (integer)

### DescribeLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancerAttributes({
  "LoadBalancerArn": ""
}, context)
```

#### Parameters
* LoadBalancerArn (string) **required**

### DescribeLoadBalancers



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancers({}, context)
```

#### Parameters
* Marker (string)
* LoadBalancerArns (array)
* Marker (string)
* Names (array)
* PageSize (integer)

### DescribeRules



```js
amazonaws_elasticloadbalancing.DescribeRules({}, context)
```

#### Parameters
* ListenerArn (string)
* Marker (string)
* PageSize (integer)
* RuleArns (array)

### DescribeSSLPolicies



```js
amazonaws_elasticloadbalancing.DescribeSSLPolicies({}, context)
```

#### Parameters
* Marker (string)
* Names (array)
* PageSize (integer)

### DescribeTags



```js
amazonaws_elasticloadbalancing.DescribeTags({
  "ResourceArns": []
}, context)
```

#### Parameters
* ResourceArns (array) **required**

### DescribeTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.DescribeTargetGroupAttributes({
  "TargetGroupArn": ""
}, context)
```

#### Parameters
* TargetGroupArn (string) **required**

### DescribeTargetGroups



```js
amazonaws_elasticloadbalancing.DescribeTargetGroups({}, context)
```

#### Parameters
* Marker (string)
* LoadBalancerArn (string)
* Marker (string)
* Names (array)
* PageSize (integer)
* TargetGroupArns (array)

### DescribeTargetHealth



```js
amazonaws_elasticloadbalancing.DescribeTargetHealth({
  "TargetGroupArn": ""
}, context)
```

#### Parameters
* TargetGroupArn (string) **required**
* Targets (array)

### ModifyListener



```js
amazonaws_elasticloadbalancing.ModifyListener({
  "ListenerArn": ""
}, context)
```

#### Parameters
* Certificates (array)
* DefaultActions (array)
* ListenerArn (string) **required**
* Port (integer)
* Protocol (string)
* SslPolicy (string)

### ModifyLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.ModifyLoadBalancerAttributes({
  "LoadBalancerArn": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* LoadBalancerArn (string) **required**

### ModifyRule



```js
amazonaws_elasticloadbalancing.ModifyRule({
  "RuleArn": ""
}, context)
```

#### Parameters
* Actions (array)
* Conditions (array)
* RuleArn (string) **required**

### ModifyTargetGroup



```js
amazonaws_elasticloadbalancing.ModifyTargetGroup({
  "TargetGroupArn": ""
}, context)
```

#### Parameters
* HealthCheckIntervalSeconds (integer)
* HealthCheckPath (string)
* HealthCheckPort (string)
* HealthCheckProtocol (string)
* HealthCheckTimeoutSeconds (integer)
* HealthyThresholdCount (integer)
* Matcher (object) - Information to use when checking for a successful response from a target.
* TargetGroupArn (string) **required**
* UnhealthyThresholdCount (integer)

### ModifyTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.ModifyTargetGroupAttributes({
  "TargetGroupArn": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* TargetGroupArn (string) **required**

### RegisterTargets



```js
amazonaws_elasticloadbalancing.RegisterTargets({
  "TargetGroupArn": "",
  "Targets": []
}, context)
```

#### Parameters
* TargetGroupArn (string) **required**
* Targets (array) **required**

### RemoveListenerCertificates



```js
amazonaws_elasticloadbalancing.RemoveListenerCertificates({
  "ListenerArn": "",
  "Certificates": []
}, context)
```

#### Parameters
* Certificates (array) **required**
* ListenerArn (string) **required**

### RemoveTags



```js
amazonaws_elasticloadbalancing.RemoveTags({
  "ResourceArns": [],
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceArns (array) **required**
* TagKeys (array) **required**

### SetIpAddressType



```js
amazonaws_elasticloadbalancing.SetIpAddressType({
  "LoadBalancerArn": "",
  "IpAddressType": ""
}, context)
```

#### Parameters
* IpAddressType (string) **required**
* LoadBalancerArn (string) **required**

### SetRulePriorities



```js
amazonaws_elasticloadbalancing.SetRulePriorities({
  "RulePriorities": []
}, context)
```

#### Parameters
* RulePriorities (array) **required**

### SetSecurityGroups



```js
amazonaws_elasticloadbalancing.SetSecurityGroups({
  "LoadBalancerArn": "",
  "SecurityGroups": []
}, context)
```

#### Parameters
* LoadBalancerArn (string) **required**
* SecurityGroups (array) **required**

### SetSubnets



```js
amazonaws_elasticloadbalancing.SetSubnets({
  "LoadBalancerArn": "",
  "Subnets": []
}, context)
```

#### Parameters
* LoadBalancerArn (string) **required**
* SubnetMappings (array)
* Subnets (array) **required**

