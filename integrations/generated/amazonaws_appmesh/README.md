# @datafire/amazonaws_appmesh

Client library for AWS App Mesh

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appmesh
```
```js
let amazonaws_appmesh = require('@datafire/amazonaws_appmesh').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications.</p> <p>App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS, Kubernetes on AWS, and Amazon EC2.</p> <note> <p>App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS for Services and Pods</a> in the Kubernetes documentation.</p> </note>

## Actions

### ListMeshes



```js
amazonaws_appmesh.ListMeshes({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * nextToken `string`

#### Output
* output [ListMeshesOutput](#listmeshesoutput)

### CreateMesh



```js
amazonaws_appmesh.CreateMesh({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * tags `array`: Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * meshName **required** `string`: The name to use for the service mesh.
  * spec `object`: An object that represents the specification of a service mesh.
    * egressFilter
      * type **required**

#### Output
* output [CreateMeshOutput](#createmeshoutput)

### DeleteMesh



```js
amazonaws_appmesh.DeleteMesh({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`

#### Output
* output [DeleteMeshOutput](#deletemeshoutput)

### DescribeMesh



```js
amazonaws_appmesh.DescribeMesh({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`

#### Output
* output [DescribeMeshOutput](#describemeshoutput)

### UpdateMesh



```js
amazonaws_appmesh.UpdateMesh({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec `object`: An object that represents the specification of a service mesh.
    * egressFilter
      * type **required**

#### Output
* output [UpdateMeshOutput](#updatemeshoutput)

### ListGatewayRoutes



```js
amazonaws_appmesh.ListGatewayRoutes({
  "meshName": "",
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`
  * virtualGatewayName **required** `string`

#### Output
* output [ListGatewayRoutesOutput](#listgatewayroutesoutput)

### CreateGatewayRoute



```js
amazonaws_appmesh.CreateGatewayRoute({
  "meshName": "",
  "virtualGatewayName": "",
  "gatewayRouteName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`
  * tags `array`: Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * gatewayRouteName **required** `string`: The name to use for the gateway route.
  * spec **required** `object`: An object that represents a gateway route specification. Specify one gateway route type.
    * grpcRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * serviceName
    * http2Route
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
    * httpRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**

#### Output
* output [CreateGatewayRouteOutput](#creategatewayrouteoutput)

### DeleteGatewayRoute



```js
amazonaws_appmesh.DeleteGatewayRoute({
  "gatewayRouteName": "",
  "meshName": "",
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * gatewayRouteName **required** `string`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`

#### Output
* output [DeleteGatewayRouteOutput](#deletegatewayrouteoutput)

### DescribeGatewayRoute



```js
amazonaws_appmesh.DescribeGatewayRoute({
  "gatewayRouteName": "",
  "meshName": "",
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * gatewayRouteName **required** `string`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`

#### Output
* output [DescribeGatewayRouteOutput](#describegatewayrouteoutput)

### UpdateGatewayRoute



```js
amazonaws_appmesh.UpdateGatewayRoute({
  "gatewayRouteName": "",
  "meshName": "",
  "virtualGatewayName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * gatewayRouteName **required** `string`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents a gateway route specification. Specify one gateway route type.
    * grpcRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * serviceName
    * http2Route
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
    * httpRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**

#### Output
* output [UpdateGatewayRouteOutput](#updategatewayrouteoutput)

### ListVirtualGateways



```js
amazonaws_appmesh.ListVirtualGateways({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`

#### Output
* output [ListVirtualGatewaysOutput](#listvirtualgatewaysoutput)

### CreateVirtualGateway



```js
amazonaws_appmesh.CreateVirtualGateway({
  "meshName": "",
  "spec": {},
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * tags `array`: Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a service mesh resource.
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * listeners
      * items [VirtualGatewayListener](#virtualgatewaylistener)
    * logging [VirtualGatewayLogging](#virtualgatewaylogging)
  * virtualGatewayName **required** `string`: The name to use for the virtual gateway.

#### Output
* output [CreateVirtualGatewayOutput](#createvirtualgatewayoutput)

### DeleteVirtualGateway



```js
amazonaws_appmesh.DeleteVirtualGateway({
  "meshName": "",
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`

#### Output
* output [DeleteVirtualGatewayOutput](#deletevirtualgatewayoutput)

### DescribeVirtualGateway



```js
amazonaws_appmesh.DescribeVirtualGateway({
  "meshName": "",
  "virtualGatewayName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`

#### Output
* output [DescribeVirtualGatewayOutput](#describevirtualgatewayoutput)

### UpdateVirtualGateway



```js
amazonaws_appmesh.UpdateVirtualGateway({
  "meshName": "",
  "virtualGatewayName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualGatewayName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a service mesh resource.
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * listeners
      * items [VirtualGatewayListener](#virtualgatewaylistener)
    * logging [VirtualGatewayLogging](#virtualgatewaylogging)

#### Output
* output [UpdateVirtualGatewayOutput](#updatevirtualgatewayoutput)

### ListVirtualNodes



```js
amazonaws_appmesh.ListVirtualNodes({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`

#### Output
* output [ListVirtualNodesOutput](#listvirtualnodesoutput)

### CreateVirtualNode



```js
amazonaws_appmesh.CreateVirtualNode({
  "meshName": "",
  "spec": {},
  "virtualNodeName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * tags `array`: Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual node.
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * backends
      * items [Backend](#backend)
    * listeners
      * items [Listener](#listener)
    * logging
      * accessLog
        * file
          * path **required**
    * serviceDiscovery
      * awsCloudMap
        * attributes
          * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
        * namespaceName **required**
        * serviceName **required**
      * dns
        * hostname **required**
  * virtualNodeName **required** `string`: The name to use for the virtual node.

#### Output
* output [CreateVirtualNodeOutput](#createvirtualnodeoutput)

### DeleteVirtualNode



```js
amazonaws_appmesh.DeleteVirtualNode({
  "meshName": "",
  "virtualNodeName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualNodeName **required** `string`

#### Output
* output [DeleteVirtualNodeOutput](#deletevirtualnodeoutput)

### DescribeVirtualNode



```js
amazonaws_appmesh.DescribeVirtualNode({
  "meshName": "",
  "virtualNodeName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualNodeName **required** `string`

#### Output
* output [DescribeVirtualNodeOutput](#describevirtualnodeoutput)

### UpdateVirtualNode



```js
amazonaws_appmesh.UpdateVirtualNode({
  "meshName": "",
  "virtualNodeName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualNodeName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual node.
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * backends
      * items [Backend](#backend)
    * listeners
      * items [Listener](#listener)
    * logging
      * accessLog
        * file
          * path **required**
    * serviceDiscovery
      * awsCloudMap
        * attributes
          * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
        * namespaceName **required**
        * serviceName **required**
      * dns
        * hostname **required**

#### Output
* output [UpdateVirtualNodeOutput](#updatevirtualnodeoutput)

### ListRoutes



```js
amazonaws_appmesh.ListRoutes({
  "meshName": "",
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`
  * virtualRouterName **required** `string`

#### Output
* output [ListRoutesOutput](#listroutesoutput)

### CreateRoute



```js
amazonaws_appmesh.CreateRoute({
  "meshName": "",
  "virtualRouterName": "",
  "routeName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualRouterName **required** `string`
  * tags `array`: Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * routeName **required** `string`: The name to use for the route.
  * spec **required** `object`: An object that represents a route specification. Specify one route type.
    * grpcRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * metadata
          * items [GrpcRouteMetadata](#grpcroutemetadata)
        * methodName
        * serviceName
      * retryPolicy
        * grpcRetryEvents
          * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * http2Route
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * httpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * priority
    * tcpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * timeout
        * idle
          * unit
          * value

#### Output
* output [CreateRouteOutput](#createrouteoutput)

### DeleteRoute



```js
amazonaws_appmesh.DeleteRoute({
  "meshName": "",
  "routeName": "",
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * routeName **required** `string`
  * virtualRouterName **required** `string`

#### Output
* output [DeleteRouteOutput](#deleterouteoutput)

### DescribeRoute



```js
amazonaws_appmesh.DescribeRoute({
  "meshName": "",
  "routeName": "",
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * routeName **required** `string`
  * virtualRouterName **required** `string`

#### Output
* output [DescribeRouteOutput](#describerouteoutput)

### UpdateRoute



```js
amazonaws_appmesh.UpdateRoute({
  "meshName": "",
  "routeName": "",
  "virtualRouterName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * routeName **required** `string`
  * virtualRouterName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents a route specification. Specify one route type.
    * grpcRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * metadata
          * items [GrpcRouteMetadata](#grpcroutemetadata)
        * methodName
        * serviceName
      * retryPolicy
        * grpcRetryEvents
          * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * http2Route
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * httpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * priority
    * tcpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * timeout
        * idle
          * unit
          * value

#### Output
* output [UpdateRouteOutput](#updaterouteoutput)

### ListVirtualRouters



```js
amazonaws_appmesh.ListVirtualRouters({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`

#### Output
* output [ListVirtualRoutersOutput](#listvirtualroutersoutput)

### CreateVirtualRouter



```js
amazonaws_appmesh.CreateVirtualRouter({
  "meshName": "",
  "spec": {},
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * tags `array`: Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual router.
    * listeners
      * items [VirtualRouterListener](#virtualrouterlistener)
  * virtualRouterName **required** `string`: The name to use for the virtual router.

#### Output
* output [CreateVirtualRouterOutput](#createvirtualrouteroutput)

### DeleteVirtualRouter



```js
amazonaws_appmesh.DeleteVirtualRouter({
  "meshName": "",
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualRouterName **required** `string`

#### Output
* output [DeleteVirtualRouterOutput](#deletevirtualrouteroutput)

### DescribeVirtualRouter



```js
amazonaws_appmesh.DescribeVirtualRouter({
  "meshName": "",
  "virtualRouterName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualRouterName **required** `string`

#### Output
* output [DescribeVirtualRouterOutput](#describevirtualrouteroutput)

### UpdateVirtualRouter



```js
amazonaws_appmesh.UpdateVirtualRouter({
  "meshName": "",
  "virtualRouterName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualRouterName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual router.
    * listeners
      * items [VirtualRouterListener](#virtualrouterlistener)

#### Output
* output [UpdateVirtualRouterOutput](#updatevirtualrouteroutput)

### ListVirtualServices



```js
amazonaws_appmesh.ListVirtualServices({
  "meshName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * meshName **required** `string`
  * meshOwner `string`
  * nextToken `string`

#### Output
* output [ListVirtualServicesOutput](#listvirtualservicesoutput)

### CreateVirtualService



```js
amazonaws_appmesh.CreateVirtualService({
  "meshName": "",
  "spec": {},
  "virtualServiceName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * tags `array`: Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual service.
    * provider
      * virtualNode
        * virtualNodeName **required**
      * virtualRouter
        * virtualRouterName **required**
  * virtualServiceName **required** `string`: The name to use for the virtual service.

#### Output
* output [CreateVirtualServiceOutput](#createvirtualserviceoutput)

### DeleteVirtualService



```js
amazonaws_appmesh.DeleteVirtualService({
  "meshName": "",
  "virtualServiceName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualServiceName **required** `string`

#### Output
* output [DeleteVirtualServiceOutput](#deletevirtualserviceoutput)

### DescribeVirtualService



```js
amazonaws_appmesh.DescribeVirtualService({
  "meshName": "",
  "virtualServiceName": ""
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualServiceName **required** `string`

#### Output
* output [DescribeVirtualServiceOutput](#describevirtualserviceoutput)

### UpdateVirtualService



```js
amazonaws_appmesh.UpdateVirtualService({
  "meshName": "",
  "virtualServiceName": "",
  "spec": {}
}, context)
```

#### Input
* input `object`
  * meshName **required** `string`
  * meshOwner `string`
  * virtualServiceName **required** `string`
  * clientToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
  * spec **required** `object`: An object that represents the specification of a virtual service.
    * provider
      * virtualNode
        * virtualNodeName **required**
      * virtualRouter
        * virtualRouterName **required**

#### Output
* output [UpdateVirtualServiceOutput](#updatevirtualserviceoutput)

### TagResource



```js
amazonaws_appmesh.TagResource({
  "resourceArn": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `array`: The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    * items [TagRef](#tagref)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### ListTagsForResource



```js
amazonaws_appmesh.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * nextToken `string`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### UntagResource



```js
amazonaws_appmesh.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`: The keys of the tags to be removed.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)



## Definitions

### AccessLog
* AccessLog `object`: An object that represents the access logging information for a virtual node.
  * file
    * path **required**

### AccountId
* AccountId `string`

### Arn
* Arn `string`

### AwsCloudMapInstanceAttribute
* AwsCloudMapInstanceAttribute `object`: <p>An object that represents the AWS Cloud Map attribute information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
  * key **required**
  * value **required**

### AwsCloudMapInstanceAttributeKey
* AwsCloudMapInstanceAttributeKey `string`

### AwsCloudMapInstanceAttributeValue
* AwsCloudMapInstanceAttributeValue `string`

### AwsCloudMapInstanceAttributes
* AwsCloudMapInstanceAttributes `array`
  * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)

### AwsCloudMapName
* AwsCloudMapName `string`

### AwsCloudMapServiceDiscovery
* AwsCloudMapServiceDiscovery `object`: <p>An object that represents the AWS Cloud Map service discovery information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
  * attributes
    * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
  * namespaceName **required**
  * serviceName **required**

### Backend
* Backend `object`: An object that represents the backends that a virtual node is expected to send outbound traffic to.
  * virtualService
    * clientPolicy
      * tls
        * enforce
        * ports
          * items [PortNumber](#portnumber)
        * validation **required**
          * trust **required**
    * virtualServiceName **required**

### BackendDefaults
* BackendDefaults `object`: An object that represents the default properties for a backend.
  * clientPolicy
    * tls
      * enforce
      * ports
        * items [PortNumber](#portnumber)
      * validation **required**
        * trust **required**
          * acm
          * file

### Backends
* Backends `array`
  * items [Backend](#backend)

### BadRequestException


### Boolean
* Boolean `boolean`

### CertificateAuthorityArns
* CertificateAuthorityArns `array`
  * items [Arn](#arn)

### ClientPolicy
* ClientPolicy `object`: An object that represents a client policy.
  * tls
    * enforce
    * ports
      * items [PortNumber](#portnumber)
    * validation **required**
      * trust **required**
        * acm
          * certificateAuthorityArns **required**
        * file
          * certificateChain **required**

### ClientPolicyTls
* ClientPolicyTls `object`: A reference to an object that represents a Transport Layer Security (TLS) client policy.
  * enforce
  * ports
    * items [PortNumber](#portnumber)
  * validation **required**
    * trust **required**
      * acm
        * certificateAuthorityArns **required**
          * items [Arn](#arn)
      * file
        * certificateChain **required**

### ConflictException


### CreateGatewayRouteInput
* CreateGatewayRouteInput `object`
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * gatewayRouteName **required**
  * spec **required**
    * grpcRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * serviceName
    * http2Route
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
    * httpRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**

### CreateGatewayRouteOutput
* CreateGatewayRouteOutput `object`
  * gatewayRoute **required**
    * gatewayRouteName **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * grpcRoute
        * action **required**
          * target **required**
        * match **required**
          * serviceName
      * http2Route
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
      * httpRoute
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### CreateMeshInput
* CreateMeshInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * meshName **required**
  * spec
    * egressFilter
      * type **required**

### CreateMeshOutput
* CreateMeshOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * mesh **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * egressFilter
        * type **required**
    * status **required**
      * status

### CreateRouteInput
* CreateRouteInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * routeName **required**
  * spec **required**
    * grpcRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * metadata
          * items [GrpcRouteMetadata](#grpcroutemetadata)
        * methodName
        * serviceName
      * retryPolicy
        * grpcRetryEvents
          * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * http2Route
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * httpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * priority
    * tcpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * timeout
        * idle
          * unit
          * value

### CreateRouteOutput
* CreateRouteOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * route **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * routeName **required**
    * spec **required**
      * grpcRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * metadata
          * methodName
          * serviceName
        * retryPolicy
          * grpcRetryEvents
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * http2Route
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * httpRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * priority
      * tcpRoute
        * action **required**
          * weightedTargets **required**
        * timeout
          * idle
    * status **required**
      * status **required**
    * virtualRouterName **required**

### CreateVirtualGatewayInput
* CreateVirtualGatewayInput `object`
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * listeners **required**
      * items [VirtualGatewayListener](#virtualgatewaylistener)
    * logging [VirtualGatewayLogging](#virtualgatewaylogging)
  * virtualGatewayName **required**

### CreateVirtualGatewayOutput
* CreateVirtualGatewayOutput `object`
  * virtualGateway **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * listeners **required**
        * items [VirtualGatewayListener](#virtualgatewaylistener)
      * logging [VirtualGatewayLogging](#virtualgatewaylogging)
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### CreateVirtualNodeInput
* CreateVirtualNodeInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * backends
      * items [Backend](#backend)
    * listeners
      * items [Listener](#listener)
    * logging
      * accessLog
        * file
          * path **required**
    * serviceDiscovery
      * awsCloudMap
        * attributes
          * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
        * namespaceName **required**
        * serviceName **required**
      * dns
        * hostname **required**
  * virtualNodeName **required**

### CreateVirtualNodeOutput
* CreateVirtualNodeOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualNode **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * backends
        * items [Backend](#backend)
      * listeners
        * items [Listener](#listener)
      * logging
        * accessLog
          * file
      * serviceDiscovery
        * awsCloudMap
          * attributes
          * namespaceName **required**
          * serviceName **required**
        * dns
          * hostname **required**
    * status **required**
      * status **required**
    * virtualNodeName **required**

### CreateVirtualRouterInput
* CreateVirtualRouterInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * spec **required**
    * listeners
      * items [VirtualRouterListener](#virtualrouterlistener)
  * virtualRouterName **required**

### CreateVirtualRouterOutput
* CreateVirtualRouterOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualRouter **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * listeners
        * items [VirtualRouterListener](#virtualrouterlistener)
    * status **required**
      * status **required**
    * virtualRouterName **required**

### CreateVirtualServiceInput
* CreateVirtualServiceInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags
    * items [TagRef](#tagref)
  * clientToken
  * spec **required**
    * provider
      * virtualNode
        * virtualNodeName **required**
      * virtualRouter
        * virtualRouterName **required**
  * virtualServiceName **required**

### CreateVirtualServiceOutput
* CreateVirtualServiceOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualService **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * provider
        * virtualNode
          * virtualNodeName **required**
        * virtualRouter
          * virtualRouterName **required**
    * status **required**
      * status **required**
    * virtualServiceName **required**

### DeleteGatewayRouteInput
* DeleteGatewayRouteInput `object`

### DeleteGatewayRouteOutput
* DeleteGatewayRouteOutput `object`
  * gatewayRoute **required**
    * gatewayRouteName **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * grpcRoute
        * action **required**
          * target **required**
        * match **required**
          * serviceName
      * http2Route
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
      * httpRoute
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### DeleteMeshInput
* DeleteMeshInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DeleteMeshOutput
* DeleteMeshOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * mesh **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * egressFilter
        * type **required**
    * status **required**
      * status

### DeleteRouteInput
* DeleteRouteInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DeleteRouteOutput
* DeleteRouteOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * route **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * routeName **required**
    * spec **required**
      * grpcRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * metadata
          * methodName
          * serviceName
        * retryPolicy
          * grpcRetryEvents
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * http2Route
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * httpRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * priority
      * tcpRoute
        * action **required**
          * weightedTargets **required**
        * timeout
          * idle
    * status **required**
      * status **required**
    * virtualRouterName **required**

### DeleteVirtualGatewayInput
* DeleteVirtualGatewayInput `object`

### DeleteVirtualGatewayOutput
* DeleteVirtualGatewayOutput `object`
  * virtualGateway **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * listeners **required**
        * items [VirtualGatewayListener](#virtualgatewaylistener)
      * logging [VirtualGatewayLogging](#virtualgatewaylogging)
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### DeleteVirtualNodeInput
* DeleteVirtualNodeInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DeleteVirtualNodeOutput
* DeleteVirtualNodeOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualNode **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * backends
        * items [Backend](#backend)
      * listeners
        * items [Listener](#listener)
      * logging
        * accessLog
          * file
      * serviceDiscovery
        * awsCloudMap
          * attributes
          * namespaceName **required**
          * serviceName **required**
        * dns
          * hostname **required**
    * status **required**
      * status **required**
    * virtualNodeName **required**

### DeleteVirtualRouterInput
* DeleteVirtualRouterInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DeleteVirtualRouterOutput
* DeleteVirtualRouterOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualRouter **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * listeners
        * items [VirtualRouterListener](#virtualrouterlistener)
    * status **required**
      * status **required**
    * virtualRouterName **required**

### DeleteVirtualServiceInput
* DeleteVirtualServiceInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DeleteVirtualServiceOutput
* DeleteVirtualServiceOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualService **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * provider
        * virtualNode
          * virtualNodeName **required**
        * virtualRouter
          * virtualRouterName **required**
    * status **required**
      * status **required**
    * virtualServiceName **required**

### DescribeGatewayRouteInput
* DescribeGatewayRouteInput `object`

### DescribeGatewayRouteOutput
* DescribeGatewayRouteOutput `object`
  * gatewayRoute **required**
    * gatewayRouteName **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * grpcRoute
        * action **required**
          * target **required**
        * match **required**
          * serviceName
      * http2Route
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
      * httpRoute
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### DescribeMeshInput
* DescribeMeshInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DescribeMeshOutput
* DescribeMeshOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * mesh **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * egressFilter
        * type **required**
    * status **required**
      * status

### DescribeRouteInput
* DescribeRouteInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DescribeRouteOutput
* DescribeRouteOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * route **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * routeName **required**
    * spec **required**
      * grpcRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * metadata
          * methodName
          * serviceName
        * retryPolicy
          * grpcRetryEvents
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * http2Route
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * httpRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * priority
      * tcpRoute
        * action **required**
          * weightedTargets **required**
        * timeout
          * idle
    * status **required**
      * status **required**
    * virtualRouterName **required**

### DescribeVirtualGatewayInput
* DescribeVirtualGatewayInput `object`

### DescribeVirtualGatewayOutput
* DescribeVirtualGatewayOutput `object`
  * virtualGateway **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * listeners **required**
        * items [VirtualGatewayListener](#virtualgatewaylistener)
      * logging [VirtualGatewayLogging](#virtualgatewaylogging)
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### DescribeVirtualNodeInput
* DescribeVirtualNodeInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DescribeVirtualNodeOutput
* DescribeVirtualNodeOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualNode **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * backends
        * items [Backend](#backend)
      * listeners
        * items [Listener](#listener)
      * logging
        * accessLog
          * file
      * serviceDiscovery
        * awsCloudMap
          * attributes
          * namespaceName **required**
          * serviceName **required**
        * dns
          * hostname **required**
    * status **required**
      * status **required**
    * virtualNodeName **required**

### DescribeVirtualRouterInput
* DescribeVirtualRouterInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DescribeVirtualRouterOutput
* DescribeVirtualRouterOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualRouter **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * listeners
        * items [VirtualRouterListener](#virtualrouterlistener)
    * status **required**
      * status **required**
    * virtualRouterName **required**

### DescribeVirtualServiceInput
* DescribeVirtualServiceInput `object`: <zonbook></zonbook><xhtml></xhtml>

### DescribeVirtualServiceOutput
* DescribeVirtualServiceOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualService **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * provider
        * virtualNode
          * virtualNodeName **required**
        * virtualRouter
          * virtualRouterName **required**
    * status **required**
      * status **required**
    * virtualServiceName **required**

### DnsServiceDiscovery
* DnsServiceDiscovery `object`: An object that represents the DNS service discovery information for your virtual node.
  * hostname **required**

### Duration
* Duration `object`: An object that represents a duration of time.
  * unit
  * value

### DurationUnit
* DurationUnit `string` (values: s, ms)

### DurationValue
* DurationValue `integer`

### EgressFilter
* EgressFilter `object`: An object that represents the egress filter rules for a service mesh.
  * type **required**

### EgressFilterType
* EgressFilterType `string` (values: ALLOW_ALL, DROP_ALL)

### FileAccessLog
* FileAccessLog `object`: An object that represents an access log file.
  * path **required**

### FilePath
* FilePath `string`

### ForbiddenException


### GatewayRouteData
* GatewayRouteData `object`: An object that represents a gateway route returned by a describe operation.
  * gatewayRouteName **required**
  * meshName **required**
  * metadata **required** [ResourceMetadata](#resourcemetadata)
  * spec **required**
    * grpcRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * serviceName
    * http2Route
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
    * httpRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
  * status **required**
    * status **required**
  * virtualGatewayName **required**

### GatewayRouteList
* GatewayRouteList `array`
  * items [GatewayRouteRef](#gatewayrouteref)

### GatewayRouteRef
* GatewayRouteRef `object`: An object that represents a gateway route returned by a list operation.
  * arn **required**
  * createdAt **required**
  * gatewayRouteName **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**
  * virtualGatewayName **required**

### GatewayRouteSpec
* GatewayRouteSpec `object`: An object that represents a gateway route specification. Specify one gateway route type.
  * grpcRoute
    * action **required**
      * target **required**
        * virtualService **required**
          * virtualServiceName **required**
    * match **required**
      * serviceName
  * http2Route
    * action **required**
      * target **required**
        * virtualService **required**
          * virtualServiceName **required**
    * match **required**
      * prefix **required**
  * httpRoute
    * action **required**
      * target **required**
        * virtualService **required**
          * virtualServiceName **required**
    * match **required**
      * prefix **required**

### GatewayRouteStatus
* GatewayRouteStatus `object`: An object that represents the current status of a gateway route.
  * status **required**

### GatewayRouteStatusCode
* GatewayRouteStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### GatewayRouteTarget
* GatewayRouteTarget `object`: An object that represents a gateway route target.
  * virtualService **required**
    * virtualServiceName **required**

### GatewayRouteVirtualService
* GatewayRouteVirtualService `object`: An object that represents the virtual service that traffic is routed to.
  * virtualServiceName **required**

### GrpcGatewayRoute
* GrpcGatewayRoute `object`: An object that represents a gRPC gateway route.
  * action **required**
    * target **required**
      * virtualService **required**
        * virtualServiceName **required**
  * match **required**
    * serviceName

### GrpcGatewayRouteAction
* GrpcGatewayRouteAction `object`: An object that represents the action to take if a match is determined.
  * target **required**
    * virtualService **required**
      * virtualServiceName **required**

### GrpcGatewayRouteMatch
* GrpcGatewayRouteMatch `object`: An object that represents the criteria for determining a request match.
  * serviceName

### GrpcRetryPolicy
* GrpcRetryPolicy `object`: An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
  * grpcRetryEvents
    * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
  * httpRetryEvents
    * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
  * maxRetries **required**
  * perRetryTimeout **required**
    * unit
    * value
  * tcpRetryEvents
    * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)

### GrpcRetryPolicyEvent
* GrpcRetryPolicyEvent `string` (values: cancelled, deadline-exceeded, internal, resource-exhausted, unavailable)

### GrpcRetryPolicyEvents
* GrpcRetryPolicyEvents `array`
  * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)

### GrpcRoute
* GrpcRoute `object`: An object that represents a gRPC route type.
  * action **required**
    * weightedTargets **required**
      * items [WeightedTarget](#weightedtarget)
  * match **required**
    * metadata
      * items [GrpcRouteMetadata](#grpcroutemetadata)
    * methodName
    * serviceName
  * retryPolicy
    * grpcRetryEvents
      * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
    * httpRetryEvents
      * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
    * maxRetries **required**
    * perRetryTimeout **required**
      * unit
      * value
    * tcpRetryEvents
      * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
  * timeout
    * idle
      * unit
      * value
    * perRequest
      * unit
      * value

### GrpcRouteAction
* GrpcRouteAction `object`: An object that represents the action to take if a match is determined.
  * weightedTargets **required**
    * items [WeightedTarget](#weightedtarget)

### GrpcRouteMatch
* GrpcRouteMatch `object`: An object that represents the criteria for determining a request match.
  * metadata
    * items [GrpcRouteMetadata](#grpcroutemetadata)
  * methodName
  * serviceName

### GrpcRouteMetadata
* GrpcRouteMetadata `object`: An object that represents the match metadata for the route.
  * invert
  * match
    * exact
    * prefix
    * range
      * end **required**
      * start **required**
    * regex
    * suffix
  * name **required**

### GrpcRouteMetadataList
* GrpcRouteMetadataList `array`
  * items [GrpcRouteMetadata](#grpcroutemetadata)

### GrpcRouteMetadataMatchMethod
* GrpcRouteMetadataMatchMethod `object`: An object that represents the match method. Specify one of the match values.
  * exact
  * prefix
  * range
    * end **required**
    * start **required**
  * regex
  * suffix

### GrpcTimeout
* GrpcTimeout `object`: An object that represents types of timeouts. 
  * idle
    * unit
    * value
  * perRequest
    * unit
    * value

### HeaderMatch
* HeaderMatch `string`

### HeaderMatchMethod
* HeaderMatchMethod `object`: An object that represents the method and value to match with the header value sent in a request. Specify one match method.
  * exact
  * prefix
  * range
    * end **required**
    * start **required**
  * regex
  * suffix

### HeaderName
* HeaderName `string`

### HealthCheckIntervalMillis
* HealthCheckIntervalMillis `integer`

### HealthCheckPolicy
* HealthCheckPolicy `object`: An object that represents the health check policy for a virtual node's listener.
  * healthyThreshold **required**
  * intervalMillis **required**
  * path
  * port
  * protocol **required**
  * timeoutMillis **required**
  * unhealthyThreshold **required**

### HealthCheckThreshold
* HealthCheckThreshold `integer`

### HealthCheckTimeoutMillis
* HealthCheckTimeoutMillis `integer`

### Hostname
* Hostname `string`

### HttpGatewayRoute
* HttpGatewayRoute `object`: An object that represents an HTTP gateway route.
  * action **required**
    * target **required**
      * virtualService **required**
        * virtualServiceName **required**
  * match **required**
    * prefix **required**

### HttpGatewayRouteAction
* HttpGatewayRouteAction `object`: An object that represents the action to take if a match is determined.
  * target **required**
    * virtualService **required**
      * virtualServiceName **required**

### HttpGatewayRouteMatch
* HttpGatewayRouteMatch `object`: An object that represents the criteria for determining a request match.
  * prefix **required**

### HttpMethod
* HttpMethod `string` (values: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH)

### HttpRetryPolicy
* HttpRetryPolicy `object`: An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>.
  * httpRetryEvents
    * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
  * maxRetries **required**
  * perRetryTimeout **required**
    * unit
    * value
  * tcpRetryEvents
    * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)

### HttpRetryPolicyEvent
* HttpRetryPolicyEvent `string`

### HttpRetryPolicyEvents
* HttpRetryPolicyEvents `array`
  * items [HttpRetryPolicyEvent](#httpretrypolicyevent)

### HttpRoute
* HttpRoute `object`: An object that represents an HTTP or HTTP/2 route type.
  * action **required**
    * weightedTargets **required**
      * items [WeightedTarget](#weightedtarget)
  * match **required**
    * headers
      * items [HttpRouteHeader](#httprouteheader)
    * method
    * prefix **required**
    * scheme
  * retryPolicy
    * httpRetryEvents
      * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
    * maxRetries **required**
    * perRetryTimeout **required**
      * unit
      * value
    * tcpRetryEvents
      * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
  * timeout
    * idle
      * unit
      * value
    * perRequest
      * unit
      * value

### HttpRouteAction
* HttpRouteAction `object`: An object that represents the action to take if a match is determined.
  * weightedTargets **required**
    * items [WeightedTarget](#weightedtarget)

### HttpRouteHeader
* HttpRouteHeader `object`: An object that represents the HTTP header in the request.
  * invert
  * match
    * exact
    * prefix
    * range
      * end **required**
      * start **required**
    * regex
    * suffix
  * name **required**

### HttpRouteHeaders
* HttpRouteHeaders `array`
  * items [HttpRouteHeader](#httprouteheader)

### HttpRouteMatch
* HttpRouteMatch `object`: An object that represents the requirements for a route to match HTTP requests for a virtual router.
  * headers
    * items [HttpRouteHeader](#httprouteheader)
  * method
  * prefix **required**
  * scheme

### HttpScheme
* HttpScheme `string` (values: http, https)

### HttpTimeout
* HttpTimeout `object`: An object that represents types of timeouts. 
  * idle
    * unit
    * value
  * perRequest
    * unit
    * value

### InternalServerErrorException


### LimitExceededException


### ListGatewayRoutesInput
* ListGatewayRoutesInput `object`

### ListGatewayRoutesLimit
* ListGatewayRoutesLimit `integer`

### ListGatewayRoutesOutput
* ListGatewayRoutesOutput `object`
  * gatewayRoutes **required**
    * items [GatewayRouteRef](#gatewayrouteref)
  * nextToken

### ListMeshesInput
* ListMeshesInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListMeshesLimit
* ListMeshesLimit `integer`

### ListMeshesOutput
* ListMeshesOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * meshes **required**
    * items [MeshRef](#meshref)
  * nextToken

### ListRoutesInput
* ListRoutesInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListRoutesLimit
* ListRoutesLimit `integer`

### ListRoutesOutput
* ListRoutesOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * nextToken
  * routes **required**
    * items [RouteRef](#routeref)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags **required**
    * items [TagRef](#tagref)
  * nextToken

### ListVirtualGatewaysInput
* ListVirtualGatewaysInput `object`

### ListVirtualGatewaysLimit
* ListVirtualGatewaysLimit `integer`

### ListVirtualGatewaysOutput
* ListVirtualGatewaysOutput `object`
  * nextToken
  * virtualGateways **required**
    * items [VirtualGatewayRef](#virtualgatewayref)

### ListVirtualNodesInput
* ListVirtualNodesInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListVirtualNodesLimit
* ListVirtualNodesLimit `integer`

### ListVirtualNodesOutput
* ListVirtualNodesOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * nextToken
  * virtualNodes **required**
    * items [VirtualNodeRef](#virtualnoderef)

### ListVirtualRoutersInput
* ListVirtualRoutersInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListVirtualRoutersLimit
* ListVirtualRoutersLimit `integer`

### ListVirtualRoutersOutput
* ListVirtualRoutersOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * nextToken
  * virtualRouters **required**
    * items [VirtualRouterRef](#virtualrouterref)

### ListVirtualServicesInput
* ListVirtualServicesInput `object`: <zonbook></zonbook><xhtml></xhtml>

### ListVirtualServicesLimit
* ListVirtualServicesLimit `integer`

### ListVirtualServicesOutput
* ListVirtualServicesOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * nextToken
  * virtualServices **required**
    * items [VirtualServiceRef](#virtualserviceref)

### Listener
* Listener `object`: An object that represents a listener for a virtual node.
  * connectionPool
    * grpc
      * maxRequests **required**
    * http
      * maxConnections **required**
      * maxPendingRequests
    * http2
      * maxRequests **required**
    * tcp
      * maxConnections **required**
  * healthCheck
    * healthyThreshold **required**
    * intervalMillis **required**
    * path
    * port
    * protocol **required**
    * timeoutMillis **required**
    * unhealthyThreshold **required**
  * outlierDetection
    * baseEjectionDuration **required**
      * unit
      * value
    * interval **required**
      * unit
      * value
    * maxEjectionPercent **required**
    * maxServerErrors **required**
  * portMapping **required**
    * port **required**
    * protocol **required**
  * timeout
    * grpc [GrpcTimeout](#grpctimeout)
    * http
      * idle
        * unit
        * value
      * perRequest
        * unit
        * value
    * http2
      * idle
        * unit
        * value
      * perRequest
        * unit
        * value
    * tcp
      * idle
        * unit
        * value
  * tls
    * certificate **required**
      * acm
        * certificateArn **required**
      * file
        * certificateChain **required**
        * privateKey **required**
    * mode **required**

### ListenerTimeout
* ListenerTimeout `object`: An object that represents timeouts for different protocols.
  * grpc [GrpcTimeout](#grpctimeout)
  * http
    * idle
      * unit
      * value
    * perRequest
      * unit
      * value
  * http2
    * idle
      * unit
      * value
    * perRequest
      * unit
      * value
  * tcp
    * idle
      * unit
      * value

### ListenerTls
* ListenerTls `object`: An object that represents the Transport Layer Security (TLS) properties for a listener.
  * certificate **required**
    * acm
      * certificateArn **required**
    * file
      * certificateChain **required**
      * privateKey **required**
  * mode **required**

### ListenerTlsAcmCertificate
* ListenerTlsAcmCertificate `object`: An object that represents an AWS Certicate Manager (ACM) certificate.
  * certificateArn **required**

### ListenerTlsCertificate
* ListenerTlsCertificate `object`: An object that represents a listener's Transport Layer Security (TLS) certificate.
  * acm
    * certificateArn **required**
  * file
    * certificateChain **required**
    * privateKey **required**

### ListenerTlsFileCertificate
* ListenerTlsFileCertificate `object`: An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
  * certificateChain **required**
  * privateKey **required**

### ListenerTlsMode
* ListenerTlsMode `string` (values: STRICT, PERMISSIVE, DISABLED)

### Listeners
* Listeners `array`
  * items [Listener](#listener)

### Logging
* Logging `object`: An object that represents the logging information for a virtual node.
  * accessLog
    * file
      * path **required**

### Long
* Long `integer`

### MatchRange
* MatchRange `object`: An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
  * end **required**
  * start **required**

### MaxConnections
* MaxConnections `integer`

### MaxPendingRequests
* MaxPendingRequests `integer`

### MaxRequests
* MaxRequests `integer`

### MaxRetries
* MaxRetries `integer`

### MeshData
* MeshData `object`: An object that represents a service mesh returned by a describe operation.
  * meshName **required**
  * metadata **required**
    * arn **required**
    * createdAt **required**
    * lastUpdatedAt **required**
    * meshOwner **required**
    * resourceOwner **required**
    * uid **required**
    * version **required**
  * spec **required**
    * egressFilter
      * type **required**
  * status **required**
    * status

### MeshList
* MeshList `array`
  * items [MeshRef](#meshref)

### MeshRef
* MeshRef `object`: An object that represents a service mesh returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**

### MeshSpec
* MeshSpec `object`: An object that represents the specification of a service mesh.
  * egressFilter
    * type **required**

### MeshStatus
* MeshStatus `object`: An object that represents the status of a service mesh.
  * status

### MeshStatusCode
* MeshStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### MethodName
* MethodName `string`

### NotFoundException


### OutlierDetection
* OutlierDetection `object`: An object that represents the outlier detection for a virtual node's listener.
  * baseEjectionDuration **required**
    * unit
    * value
  * interval **required**
    * unit
    * value
  * maxEjectionPercent **required**
  * maxServerErrors **required**

### OutlierDetectionMaxEjectionPercent
* OutlierDetectionMaxEjectionPercent `integer`

### OutlierDetectionMaxServerErrors
* OutlierDetectionMaxServerErrors `integer`

### PercentInt
* PercentInt `integer`

### PortMapping
* PortMapping `object`: An object that represents a port mapping.
  * port **required**
  * protocol **required**

### PortNumber
* PortNumber `integer`

### PortProtocol
* PortProtocol `string` (values: http, tcp, http2, grpc)

### PortSet
* PortSet `array`
  * items [PortNumber](#portnumber)

### ResourceInUseException


### ResourceMetadata
* ResourceMetadata `object`: An object that represents metadata for a resource.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshOwner **required**
  * resourceOwner **required**
  * uid **required**
  * version **required**

### ResourceName
* ResourceName `string`

### RouteData
* RouteData `object`: An object that represents a route returned by a describe operation.
  * meshName **required**
  * metadata **required**
    * arn **required**
    * createdAt **required**
    * lastUpdatedAt **required**
    * meshOwner **required**
    * resourceOwner **required**
    * uid **required**
    * version **required**
  * routeName **required**
  * spec **required**
    * grpcRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * metadata
          * items [GrpcRouteMetadata](#grpcroutemetadata)
        * methodName
        * serviceName
      * retryPolicy
        * grpcRetryEvents
          * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * http2Route
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * httpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * priority
    * tcpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * timeout
        * idle
          * unit
          * value
  * status **required**
    * status **required**
  * virtualRouterName **required**

### RouteList
* RouteList `array`
  * items [RouteRef](#routeref)

### RoutePriority
* RoutePriority `integer`

### RouteRef
* RouteRef `object`: An object that represents a route returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * routeName **required**
  * version **required**
  * virtualRouterName **required**

### RouteSpec
* RouteSpec `object`: An object that represents a route specification. Specify one route type.
  * grpcRoute
    * action **required**
      * weightedTargets **required**
        * items [WeightedTarget](#weightedtarget)
    * match **required**
      * metadata
        * items [GrpcRouteMetadata](#grpcroutemetadata)
      * methodName
      * serviceName
    * retryPolicy
      * grpcRetryEvents
        * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
      * httpRetryEvents
        * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
      * maxRetries **required**
      * perRetryTimeout **required**
        * unit
        * value
      * tcpRetryEvents
        * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
    * timeout
      * idle
        * unit
        * value
      * perRequest
        * unit
        * value
  * http2Route
    * action **required**
      * weightedTargets **required**
        * items [WeightedTarget](#weightedtarget)
    * match **required**
      * headers
        * items [HttpRouteHeader](#httprouteheader)
      * method
      * prefix **required**
      * scheme
    * retryPolicy
      * httpRetryEvents
        * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
      * maxRetries **required**
      * perRetryTimeout **required**
        * unit
        * value
      * tcpRetryEvents
        * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
    * timeout
      * idle
        * unit
        * value
      * perRequest
        * unit
        * value
  * httpRoute
    * action **required**
      * weightedTargets **required**
        * items [WeightedTarget](#weightedtarget)
    * match **required**
      * headers
        * items [HttpRouteHeader](#httprouteheader)
      * method
      * prefix **required**
      * scheme
    * retryPolicy
      * httpRetryEvents
        * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
      * maxRetries **required**
      * perRetryTimeout **required**
        * unit
        * value
      * tcpRetryEvents
        * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
    * timeout
      * idle
        * unit
        * value
      * perRequest
        * unit
        * value
  * priority
  * tcpRoute
    * action **required**
      * weightedTargets **required**
        * items [WeightedTarget](#weightedtarget)
    * timeout
      * idle
        * unit
        * value

### RouteStatus
* RouteStatus `object`: An object that represents the current status of a route.
  * status **required**

### RouteStatusCode
* RouteStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### ServiceDiscovery
* ServiceDiscovery `object`: An object that represents the service discovery information for a virtual node.
  * awsCloudMap
    * attributes
      * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
    * namespaceName **required**
    * serviceName **required**
  * dns
    * hostname **required**

### ServiceName
* ServiceName `string`

### ServiceUnavailableException


### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [TagRef](#tagref)

### TagRef
* TagRef `object`: Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
  * key **required**
  * value **required**

### TagResourceInput
* TagResourceInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tags **required**
    * items [TagRef](#tagref)

### TagResourceOutput
* TagResourceOutput `object`: <zonbook></zonbook><xhtml></xhtml>

### TagValue
* TagValue `string`

### TagsLimit
* TagsLimit `integer`

### TcpRetryPolicyEvent
* TcpRetryPolicyEvent `string` (values: connection-error)

### TcpRetryPolicyEvents
* TcpRetryPolicyEvents `array`
  * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)

### TcpRoute
* TcpRoute `object`: An object that represents a TCP route type.
  * action **required**
    * weightedTargets **required**
      * items [WeightedTarget](#weightedtarget)
  * timeout
    * idle
      * unit
      * value

### TcpRouteAction
* TcpRouteAction `object`: An object that represents the action to take if a match is determined.
  * weightedTargets **required**
    * items [WeightedTarget](#weightedtarget)

### TcpTimeout
* TcpTimeout `object`: An object that represents types of timeouts. 
  * idle
    * unit
    * value

### Timestamp
* Timestamp `string`

### TlsValidationContext
* TlsValidationContext `object`: An object that represents a Transport Layer Security (TLS) validation context.
  * trust **required**
    * acm
      * certificateAuthorityArns **required**
        * items [Arn](#arn)
    * file
      * certificateChain **required**

### TlsValidationContextAcmTrust
* TlsValidationContextAcmTrust `object`: An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  * certificateAuthorityArns **required**
    * items [Arn](#arn)

### TlsValidationContextFileTrust
* TlsValidationContextFileTrust `object`: An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
  * certificateChain **required**

### TlsValidationContextTrust
* TlsValidationContextTrust `object`: An object that represents a Transport Layer Security (TLS) validation context trust.
  * acm
    * certificateAuthorityArns **required**
      * items [Arn](#arn)
  * file
    * certificateChain **required**

### TooManyRequestsException


### TooManyTagsException


### UntagResourceInput
* UntagResourceInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`: <zonbook></zonbook><xhtml></xhtml>

### UpdateGatewayRouteInput
* UpdateGatewayRouteInput `object`
  * clientToken
  * spec **required**
    * grpcRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * serviceName
    * http2Route
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**
    * httpRoute
      * action **required**
        * target **required**
          * virtualService **required**
      * match **required**
        * prefix **required**

### UpdateGatewayRouteOutput
* UpdateGatewayRouteOutput `object`
  * gatewayRoute **required**
    * gatewayRouteName **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * grpcRoute
        * action **required**
          * target **required**
        * match **required**
          * serviceName
      * http2Route
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
      * httpRoute
        * action **required**
          * target **required**
        * match **required**
          * prefix **required**
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### UpdateMeshInput
* UpdateMeshInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * clientToken
  * spec
    * egressFilter
      * type **required**

### UpdateMeshOutput
* UpdateMeshOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * mesh **required** [MeshData](#meshdata)

### UpdateRouteInput
* UpdateRouteInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * clientToken
  * spec **required**
    * grpcRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * metadata
          * items [GrpcRouteMetadata](#grpcroutemetadata)
        * methodName
        * serviceName
      * retryPolicy
        * grpcRetryEvents
          * items [GrpcRetryPolicyEvent](#grpcretrypolicyevent)
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * http2Route
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * httpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * match **required**
        * headers
          * items [HttpRouteHeader](#httprouteheader)
        * method
        * prefix **required**
        * scheme
      * retryPolicy
        * httpRetryEvents
          * items [HttpRetryPolicyEvent](#httpretrypolicyevent)
        * maxRetries **required**
        * perRetryTimeout **required**
          * unit
          * value
        * tcpRetryEvents
          * items [TcpRetryPolicyEvent](#tcpretrypolicyevent)
      * timeout
        * idle
          * unit
          * value
        * perRequest
          * unit
          * value
    * priority
    * tcpRoute
      * action **required**
        * weightedTargets **required**
          * items [WeightedTarget](#weightedtarget)
      * timeout
        * idle
          * unit
          * value

### UpdateRouteOutput
* UpdateRouteOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * route **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * routeName **required**
    * spec **required**
      * grpcRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * metadata
          * methodName
          * serviceName
        * retryPolicy
          * grpcRetryEvents
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * http2Route
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * httpRoute
        * action **required**
          * weightedTargets **required**
        * match **required**
          * headers
          * method
          * prefix **required**
          * scheme
        * retryPolicy
          * httpRetryEvents
          * maxRetries **required**
          * perRetryTimeout **required**
          * tcpRetryEvents
        * timeout
          * idle
          * perRequest
      * priority
      * tcpRoute
        * action **required**
          * weightedTargets **required**
        * timeout
          * idle
    * status **required**
      * status **required**
    * virtualRouterName **required**

### UpdateVirtualGatewayInput
* UpdateVirtualGatewayInput `object`
  * clientToken
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * listeners **required**
      * items [VirtualGatewayListener](#virtualgatewaylistener)
    * logging [VirtualGatewayLogging](#virtualgatewaylogging)

### UpdateVirtualGatewayOutput
* UpdateVirtualGatewayOutput `object`
  * virtualGateway **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * listeners **required**
        * items [VirtualGatewayListener](#virtualgatewaylistener)
      * logging [VirtualGatewayLogging](#virtualgatewaylogging)
    * status **required**
      * status **required**
    * virtualGatewayName **required**

### UpdateVirtualNodeInput
* UpdateVirtualNodeInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * clientToken
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * backends
      * items [Backend](#backend)
    * listeners
      * items [Listener](#listener)
    * logging
      * accessLog
        * file
          * path **required**
    * serviceDiscovery
      * awsCloudMap
        * attributes
          * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
        * namespaceName **required**
        * serviceName **required**
      * dns
        * hostname **required**

### UpdateVirtualNodeOutput
* UpdateVirtualNodeOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualNode **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * backendDefaults
        * clientPolicy
          * tls
      * backends
        * items [Backend](#backend)
      * listeners
        * items [Listener](#listener)
      * logging
        * accessLog
          * file
      * serviceDiscovery
        * awsCloudMap
          * attributes
          * namespaceName **required**
          * serviceName **required**
        * dns
          * hostname **required**
    * status **required**
      * status **required**
    * virtualNodeName **required**

### UpdateVirtualRouterInput
* UpdateVirtualRouterInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * clientToken
  * spec **required**
    * listeners
      * items [VirtualRouterListener](#virtualrouterlistener)

### UpdateVirtualRouterOutput
* UpdateVirtualRouterOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualRouter **required**
    * meshName **required**
    * metadata **required**
      * arn **required**
      * createdAt **required**
      * lastUpdatedAt **required**
      * meshOwner **required**
      * resourceOwner **required**
      * uid **required**
      * version **required**
    * spec **required**
      * listeners
        * items [VirtualRouterListener](#virtualrouterlistener)
    * status **required**
      * status **required**
    * virtualRouterName **required**

### UpdateVirtualServiceInput
* UpdateVirtualServiceInput `object`: <zonbook></zonbook><xhtml></xhtml>
  * clientToken
  * spec **required**
    * provider
      * virtualNode
        * virtualNodeName **required**
      * virtualRouter
        * virtualRouterName **required**

### UpdateVirtualServiceOutput
* UpdateVirtualServiceOutput `object`: <zonbook></zonbook><xhtml></xhtml>
  * virtualService **required**
    * meshName **required**
    * metadata **required** [ResourceMetadata](#resourcemetadata)
    * spec **required**
      * provider
        * virtualNode
          * virtualNodeName **required**
        * virtualRouter
          * virtualRouterName **required**
    * status **required**
      * status **required**
    * virtualServiceName **required**

### VirtualGatewayAccessLog
* VirtualGatewayAccessLog `object`: The access log configuration for a virtual gateway.
  * file
    * path **required**

### VirtualGatewayBackendDefaults
* VirtualGatewayBackendDefaults `object`: An object that represents the default properties for a backend.
  * clientPolicy
    * tls
      * enforce
      * ports
        * items [PortNumber](#portnumber)
      * validation **required**
        * trust **required**
          * acm
          * file

### VirtualGatewayCertificateAuthorityArns
* VirtualGatewayCertificateAuthorityArns `array`
  * items [Arn](#arn)

### VirtualGatewayClientPolicy
* VirtualGatewayClientPolicy `object`: An object that represents a client policy.
  * tls
    * enforce
    * ports
      * items [PortNumber](#portnumber)
    * validation **required**
      * trust **required**
        * acm
          * certificateAuthorityArns **required**
        * file
          * certificateChain **required**

### VirtualGatewayClientPolicyTls
* VirtualGatewayClientPolicyTls `object`: An object that represents a Transport Layer Security (TLS) client policy.
  * enforce
  * ports
    * items [PortNumber](#portnumber)
  * validation **required**
    * trust **required**
      * acm
        * certificateAuthorityArns **required**
          * items [Arn](#arn)
      * file
        * certificateChain **required**

### VirtualGatewayConnectionPool
* VirtualGatewayConnectionPool `object`: <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
  * grpc
    * maxRequests **required**
  * http
    * maxConnections **required**
    * maxPendingRequests
  * http2
    * maxRequests **required**

### VirtualGatewayData
* VirtualGatewayData `object`: An object that represents a virtual gateway returned by a describe operation.
  * meshName **required**
  * metadata **required** [ResourceMetadata](#resourcemetadata)
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * listeners **required**
      * items [VirtualGatewayListener](#virtualgatewaylistener)
    * logging [VirtualGatewayLogging](#virtualgatewaylogging)
  * status **required**
    * status **required**
  * virtualGatewayName **required**

### VirtualGatewayFileAccessLog
* VirtualGatewayFileAccessLog `object`: An object that represents an access log file.
  * path **required**

### VirtualGatewayGrpcConnectionPool
* VirtualGatewayGrpcConnectionPool `object`: An object that represents a type of connection pool.
  * maxRequests **required**

### VirtualGatewayHealthCheckIntervalMillis
* VirtualGatewayHealthCheckIntervalMillis `integer`

### VirtualGatewayHealthCheckPolicy
* VirtualGatewayHealthCheckPolicy `object`: An object that represents the health check policy for a virtual gateway's listener.
  * healthyThreshold **required**
  * intervalMillis **required**
  * path
  * port
  * protocol **required**
  * timeoutMillis **required**
  * unhealthyThreshold **required**

### VirtualGatewayHealthCheckThreshold
* VirtualGatewayHealthCheckThreshold `integer`

### VirtualGatewayHealthCheckTimeoutMillis
* VirtualGatewayHealthCheckTimeoutMillis `integer`

### VirtualGatewayHttp2ConnectionPool
* VirtualGatewayHttp2ConnectionPool `object`: An object that represents a type of connection pool.
  * maxRequests **required**

### VirtualGatewayHttpConnectionPool
* VirtualGatewayHttpConnectionPool `object`: An object that represents a type of connection pool.
  * maxConnections **required**
  * maxPendingRequests

### VirtualGatewayList
* VirtualGatewayList `array`
  * items [VirtualGatewayRef](#virtualgatewayref)

### VirtualGatewayListener
* VirtualGatewayListener `object`: An object that represents a listener for a virtual gateway.
  * connectionPool
    * grpc
      * maxRequests **required**
    * http
      * maxConnections **required**
      * maxPendingRequests
    * http2
      * maxRequests **required**
  * healthCheck
    * healthyThreshold **required**
    * intervalMillis **required**
    * path
    * port
    * protocol **required**
    * timeoutMillis **required**
    * unhealthyThreshold **required**
  * portMapping **required**
    * port **required**
    * protocol **required**
  * tls
    * certificate **required**
      * acm
        * certificateArn **required**
      * file
        * certificateChain **required**
        * privateKey **required**
    * mode **required**

### VirtualGatewayListenerTls
* VirtualGatewayListenerTls `object`: An object that represents the Transport Layer Security (TLS) properties for a listener.
  * certificate **required**
    * acm
      * certificateArn **required**
    * file
      * certificateChain **required**
      * privateKey **required**
  * mode **required**

### VirtualGatewayListenerTlsAcmCertificate
* VirtualGatewayListenerTlsAcmCertificate `object`: An object that represents an AWS Certicate Manager (ACM) certificate.
  * certificateArn **required**

### VirtualGatewayListenerTlsCertificate
* VirtualGatewayListenerTlsCertificate `object`: An object that represents a listener's Transport Layer Security (TLS) certificate.
  * acm
    * certificateArn **required**
  * file
    * certificateChain **required**
    * privateKey **required**

### VirtualGatewayListenerTlsFileCertificate
* VirtualGatewayListenerTlsFileCertificate `object`: An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
  * certificateChain **required**
  * privateKey **required**

### VirtualGatewayListenerTlsMode
* VirtualGatewayListenerTlsMode `string` (values: STRICT, PERMISSIVE, DISABLED)

### VirtualGatewayListeners
* VirtualGatewayListeners `array`
  * items [VirtualGatewayListener](#virtualgatewaylistener)

### VirtualGatewayLogging
* VirtualGatewayLogging `object`: An object that represents logging information.
  * accessLog
    * file
      * path **required**

### VirtualGatewayPortMapping
* VirtualGatewayPortMapping `object`: An object that represents a port mapping.
  * port **required**
  * protocol **required**

### VirtualGatewayPortProtocol
* VirtualGatewayPortProtocol `string` (values: http, http2, grpc)

### VirtualGatewayRef
* VirtualGatewayRef `object`: An object that represents a virtual gateway returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**
  * virtualGatewayName **required**

### VirtualGatewaySpec
* VirtualGatewaySpec `object`: An object that represents the specification of a service mesh resource.
  * backendDefaults
    * clientPolicy
      * tls
        * enforce
        * ports
          * items [PortNumber](#portnumber)
        * validation **required**
          * trust **required**
  * listeners **required**
    * items [VirtualGatewayListener](#virtualgatewaylistener)
  * logging [VirtualGatewayLogging](#virtualgatewaylogging)

### VirtualGatewayStatus
* VirtualGatewayStatus `object`: An object that represents the status of the mesh resource.
  * status **required**

### VirtualGatewayStatusCode
* VirtualGatewayStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### VirtualGatewayTlsValidationContext
* VirtualGatewayTlsValidationContext `object`: An object that represents a Transport Layer Security (TLS) validation context.
  * trust **required**
    * acm
      * certificateAuthorityArns **required**
        * items [Arn](#arn)
    * file
      * certificateChain **required**

### VirtualGatewayTlsValidationContextAcmTrust
* VirtualGatewayTlsValidationContextAcmTrust `object`: An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  * certificateAuthorityArns **required**
    * items [Arn](#arn)

### VirtualGatewayTlsValidationContextFileTrust
* VirtualGatewayTlsValidationContextFileTrust `object`: An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
  * certificateChain **required**

### VirtualGatewayTlsValidationContextTrust
* VirtualGatewayTlsValidationContextTrust `object`: An object that represents a Transport Layer Security (TLS) validation context trust.
  * acm
    * certificateAuthorityArns **required**
      * items [Arn](#arn)
  * file
    * certificateChain **required**

### VirtualNodeConnectionPool
* VirtualNodeConnectionPool `object`: <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
  * grpc
    * maxRequests **required**
  * http
    * maxConnections **required**
    * maxPendingRequests
  * http2
    * maxRequests **required**
  * tcp
    * maxConnections **required**

### VirtualNodeData
* VirtualNodeData `object`: An object that represents a virtual node returned by a describe operation.
  * meshName **required**
  * metadata **required**
    * arn **required**
    * createdAt **required**
    * lastUpdatedAt **required**
    * meshOwner **required**
    * resourceOwner **required**
    * uid **required**
    * version **required**
  * spec **required**
    * backendDefaults
      * clientPolicy
        * tls
          * enforce
          * ports
          * validation **required**
    * backends
      * items [Backend](#backend)
    * listeners
      * items [Listener](#listener)
    * logging
      * accessLog
        * file
          * path **required**
    * serviceDiscovery
      * awsCloudMap
        * attributes
          * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
        * namespaceName **required**
        * serviceName **required**
      * dns
        * hostname **required**
  * status **required**
    * status **required**
  * virtualNodeName **required**

### VirtualNodeGrpcConnectionPool
* VirtualNodeGrpcConnectionPool `object`: An object that represents a type of connection pool.
  * maxRequests **required**

### VirtualNodeHttp2ConnectionPool
* VirtualNodeHttp2ConnectionPool `object`: An object that represents a type of connection pool.
  * maxRequests **required**

### VirtualNodeHttpConnectionPool
* VirtualNodeHttpConnectionPool `object`: An object that represents a type of connection pool.
  * maxConnections **required**
  * maxPendingRequests

### VirtualNodeList
* VirtualNodeList `array`
  * items [VirtualNodeRef](#virtualnoderef)

### VirtualNodeRef
* VirtualNodeRef `object`: An object that represents a virtual node returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**
  * virtualNodeName **required**

### VirtualNodeServiceProvider
* VirtualNodeServiceProvider `object`: An object that represents a virtual node service provider.
  * virtualNodeName **required**

### VirtualNodeSpec
* VirtualNodeSpec `object`: An object that represents the specification of a virtual node.
  * backendDefaults
    * clientPolicy
      * tls
        * enforce
        * ports
          * items [PortNumber](#portnumber)
        * validation **required**
          * trust **required**
  * backends
    * items [Backend](#backend)
  * listeners
    * items [Listener](#listener)
  * logging
    * accessLog
      * file
        * path **required**
  * serviceDiscovery
    * awsCloudMap
      * attributes
        * items [AwsCloudMapInstanceAttribute](#awscloudmapinstanceattribute)
      * namespaceName **required**
      * serviceName **required**
    * dns
      * hostname **required**

### VirtualNodeStatus
* VirtualNodeStatus `object`: An object that represents the current status of the virtual node.
  * status **required**

### VirtualNodeStatusCode
* VirtualNodeStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### VirtualNodeTcpConnectionPool
* VirtualNodeTcpConnectionPool `object`: An object that represents a type of connection pool.
  * maxConnections **required**

### VirtualRouterData
* VirtualRouterData `object`: An object that represents a virtual router returned by a describe operation.
  * meshName **required**
  * metadata **required**
    * arn **required**
    * createdAt **required**
    * lastUpdatedAt **required**
    * meshOwner **required**
    * resourceOwner **required**
    * uid **required**
    * version **required**
  * spec **required**
    * listeners
      * items [VirtualRouterListener](#virtualrouterlistener)
  * status **required**
    * status **required**
  * virtualRouterName **required**

### VirtualRouterList
* VirtualRouterList `array`
  * items [VirtualRouterRef](#virtualrouterref)

### VirtualRouterListener
* VirtualRouterListener `object`: An object that represents a virtual router listener.
  * portMapping **required** [PortMapping](#portmapping)

### VirtualRouterListeners
* VirtualRouterListeners `array`
  * items [VirtualRouterListener](#virtualrouterlistener)

### VirtualRouterRef
* VirtualRouterRef `object`: An object that represents a virtual router returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**
  * virtualRouterName **required**

### VirtualRouterServiceProvider
* VirtualRouterServiceProvider `object`: An object that represents a virtual node service provider.
  * virtualRouterName **required**

### VirtualRouterSpec
* VirtualRouterSpec `object`: An object that represents the specification of a virtual router.
  * listeners
    * items [VirtualRouterListener](#virtualrouterlistener)

### VirtualRouterStatus
* VirtualRouterStatus `object`: An object that represents the status of a virtual router. 
  * status **required**

### VirtualRouterStatusCode
* VirtualRouterStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### VirtualServiceBackend
* VirtualServiceBackend `object`: An object that represents a virtual service backend for a virtual node.
  * clientPolicy
    * tls
      * enforce
      * ports
        * items [PortNumber](#portnumber)
      * validation **required**
        * trust **required**
          * acm
          * file
  * virtualServiceName **required**

### VirtualServiceData
* VirtualServiceData `object`: An object that represents a virtual service returned by a describe operation.
  * meshName **required**
  * metadata **required** [ResourceMetadata](#resourcemetadata)
  * spec **required**
    * provider
      * virtualNode
        * virtualNodeName **required**
      * virtualRouter
        * virtualRouterName **required**
  * status **required**
    * status **required**
  * virtualServiceName **required**

### VirtualServiceList
* VirtualServiceList `array`
  * items [VirtualServiceRef](#virtualserviceref)

### VirtualServiceProvider
* VirtualServiceProvider `object`: An object that represents the provider for a virtual service.
  * virtualNode
    * virtualNodeName **required**
  * virtualRouter
    * virtualRouterName **required**

### VirtualServiceRef
* VirtualServiceRef `object`: An object that represents a virtual service returned by a list operation.
  * arn **required**
  * createdAt **required**
  * lastUpdatedAt **required**
  * meshName **required**
  * meshOwner **required**
  * resourceOwner **required**
  * version **required**
  * virtualServiceName **required**

### VirtualServiceSpec
* VirtualServiceSpec `object`: An object that represents the specification of a virtual service.
  * provider
    * virtualNode
      * virtualNodeName **required**
    * virtualRouter
      * virtualRouterName **required**

### VirtualServiceStatus
* VirtualServiceStatus `object`: An object that represents the status of a virtual service.
  * status **required**

### VirtualServiceStatusCode
* VirtualServiceStatusCode `string` (values: ACTIVE, INACTIVE, DELETED)

### WeightedTarget
* WeightedTarget `object`: An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
  * virtualNode **required**
  * weight **required**

### WeightedTargets
* WeightedTargets `array`
  * items [WeightedTarget](#weightedtarget)


