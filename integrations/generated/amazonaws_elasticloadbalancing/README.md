# @datafire/amazonaws_elasticloadbalancing

Client library for Elastic Load Balancing

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elasticloadbalancing
```

```js
let datafire = require('datafire');
let amazonaws_elasticloadbalancing = require('@datafire/amazonaws_elasticloadbalancing').create();

amazonaws_elasticloadbalancing.AddTags({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports two types of load balancers: Classic Load Balancers and Application Load Balancers. A Classic Load Balancer makes routing and load balancing decisions either at the transport layer (TCP/SSL) or the application layer (HTTP/HTTPS), and supports either EC2-Classic or a VPC. An Application Load Balancer makes routing and load balancing decisions at the application layer (HTTP/HTTPS), supports path-based routing, and can route requests to one or more ports on each EC2 instance or container instance in your virtual private cloud (VPC). For more information, see the <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2015-12-01 API, which supports Application Load Balancers. The 2012-06-01 API supports Classic Load Balancers.</p> <p>To get started, complete the following tasks:</p> <ol> <li> <p>Create an Application Load Balancer using <a>CreateLoadBalancer</a>.</p> </li> <li> <p>Create a target group using <a>CreateTargetGroup</a>.</p> </li> <li> <p>Register targets for the target group using <a>RegisterTargets</a>.</p> </li> <li> <p>Create one or more listeners for your load balancer using <a>CreateListener</a>.</p> </li> <li> <p>(Optional) Create one or more rules for content routing based on URL using <a>CreateRule</a>.</p> </li> </ol> <p>To delete an Application Load Balancer and its related resources, complete the following tasks:</p> <ol> <li> <p>Delete the load balancer using <a>DeleteLoadBalancer</a>.</p> </li> <li> <p>Delete the target group using <a>DeleteTargetGroup</a>.</p> </li> </ol> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

## Actions
### AddTags



```js
amazonaws_elasticloadbalancing.AddTags({}, context)
```


### CreateListener



```js
amazonaws_elasticloadbalancing.CreateListener({}, context)
```


### CreateLoadBalancer



```js
amazonaws_elasticloadbalancing.CreateLoadBalancer({}, context)
```


### CreateRule



```js
amazonaws_elasticloadbalancing.CreateRule({}, context)
```


### CreateTargetGroup



```js
amazonaws_elasticloadbalancing.CreateTargetGroup({}, context)
```


### DeleteListener



```js
amazonaws_elasticloadbalancing.DeleteListener({}, context)
```


### DeleteLoadBalancer



```js
amazonaws_elasticloadbalancing.DeleteLoadBalancer({}, context)
```


### DeleteRule



```js
amazonaws_elasticloadbalancing.DeleteRule({}, context)
```


### DeleteTargetGroup



```js
amazonaws_elasticloadbalancing.DeleteTargetGroup({}, context)
```


### DeregisterTargets



```js
amazonaws_elasticloadbalancing.DeregisterTargets({}, context)
```


### DescribeAccountLimits



```js
amazonaws_elasticloadbalancing.DescribeAccountLimits({}, context)
```


### DescribeListeners



```js
amazonaws_elasticloadbalancing.DescribeListeners({}, context)
```

#### Parameters
* Marker (string)

### DescribeLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancerAttributes({}, context)
```


### DescribeLoadBalancers



```js
amazonaws_elasticloadbalancing.DescribeLoadBalancers({}, context)
```

#### Parameters
* Marker (string)

### DescribeRules



```js
amazonaws_elasticloadbalancing.DescribeRules({}, context)
```


### DescribeSSLPolicies



```js
amazonaws_elasticloadbalancing.DescribeSSLPolicies({}, context)
```


### DescribeTags



```js
amazonaws_elasticloadbalancing.DescribeTags({}, context)
```


### DescribeTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.DescribeTargetGroupAttributes({}, context)
```


### DescribeTargetGroups



```js
amazonaws_elasticloadbalancing.DescribeTargetGroups({}, context)
```

#### Parameters
* Marker (string)

### DescribeTargetHealth



```js
amazonaws_elasticloadbalancing.DescribeTargetHealth({}, context)
```


### ModifyListener



```js
amazonaws_elasticloadbalancing.ModifyListener({}, context)
```


### ModifyLoadBalancerAttributes



```js
amazonaws_elasticloadbalancing.ModifyLoadBalancerAttributes({}, context)
```


### ModifyRule



```js
amazonaws_elasticloadbalancing.ModifyRule({}, context)
```


### ModifyTargetGroup



```js
amazonaws_elasticloadbalancing.ModifyTargetGroup({}, context)
```


### ModifyTargetGroupAttributes



```js
amazonaws_elasticloadbalancing.ModifyTargetGroupAttributes({}, context)
```


### RegisterTargets



```js
amazonaws_elasticloadbalancing.RegisterTargets({}, context)
```


### RemoveTags



```js
amazonaws_elasticloadbalancing.RemoveTags({}, context)
```


### SetIpAddressType



```js
amazonaws_elasticloadbalancing.SetIpAddressType({}, context)
```


### SetRulePriorities



```js
amazonaws_elasticloadbalancing.SetRulePriorities({}, context)
```


### SetSecurityGroups



```js
amazonaws_elasticloadbalancing.SetSecurityGroups({}, context)
```


### SetSubnets



```js
amazonaws_elasticloadbalancing.SetSubnets({}, context)
```


