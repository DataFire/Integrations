# @datafire/amazonaws_servicediscovery

Client library for AWS Cloud Map

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_servicediscovery
```
```js
let amazonaws_servicediscovery = require('@datafire/amazonaws_servicediscovery').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map. For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. 

## Actions

### CreateHttpNamespace



```js
amazonaws_servicediscovery.CreateHttpNamespace({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateHttpNamespaceResponse](#createhttpnamespaceresponse)

### CreatePrivateDnsNamespace



```js
amazonaws_servicediscovery.CreatePrivateDnsNamespace({
  "Name": null,
  "Vpc": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)
  * Vpc **required**

#### Output
* output [CreatePrivateDnsNamespaceResponse](#createprivatednsnamespaceresponse)

### CreatePublicDnsNamespace



```js
amazonaws_servicediscovery.CreatePublicDnsNamespace({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePublicDnsNamespaceResponse](#createpublicdnsnamespaceresponse)

### CreateService



```js
amazonaws_servicediscovery.CreateService({
  "Name": null
}, context)
```

#### Input
* input `object`
  * CreatorRequestId
  * Description
  * DnsConfig
    * DnsRecords **required**
      * items [DnsRecord](#dnsrecord)
    * NamespaceId
    * RoutingPolicy
  * HealthCheckConfig
    * FailureThreshold
    * ResourcePath
    * Type **required**
  * HealthCheckCustomConfig
    * FailureThreshold
  * Name **required**
  * NamespaceId
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateServiceResponse](#createserviceresponse)

### DeleteNamespace



```js
amazonaws_servicediscovery.DeleteNamespace({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DeleteNamespaceResponse](#deletenamespaceresponse)

### DeleteService



```js
amazonaws_servicediscovery.DeleteService({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [DeleteServiceResponse](#deleteserviceresponse)

### DeregisterInstance



```js
amazonaws_servicediscovery.DeregisterInstance({
  "ServiceId": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * ServiceId **required**

#### Output
* output [DeregisterInstanceResponse](#deregisterinstanceresponse)

### DiscoverInstances



```js
amazonaws_servicediscovery.DiscoverInstances({
  "NamespaceName": null,
  "ServiceName": null
}, context)
```

#### Input
* input `object`
  * HealthStatus
  * MaxResults
  * NamespaceName **required**
  * OptionalParameters
  * QueryParameters
  * ServiceName **required**

#### Output
* output [DiscoverInstancesResponse](#discoverinstancesresponse)

### GetInstance



```js
amazonaws_servicediscovery.GetInstance({
  "ServiceId": null,
  "InstanceId": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * ServiceId **required**

#### Output
* output [GetInstanceResponse](#getinstanceresponse)

### GetInstancesHealthStatus



```js
amazonaws_servicediscovery.GetInstancesHealthStatus({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Instances
    * items [ResourceId](#resourceid)
  * MaxResults
  * NextToken
  * ServiceId **required**

#### Output
* output [GetInstancesHealthStatusResponse](#getinstanceshealthstatusresponse)

### GetNamespace



```js
amazonaws_servicediscovery.GetNamespace({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [GetNamespaceResponse](#getnamespaceresponse)

### GetOperation



```js
amazonaws_servicediscovery.GetOperation({
  "OperationId": null
}, context)
```

#### Input
* input `object`
  * OperationId **required**

#### Output
* output [GetOperationResponse](#getoperationresponse)

### GetService



```js
amazonaws_servicediscovery.GetService({
  "Id": null
}, context)
```

#### Input
* input `object`
  * Id **required**

#### Output
* output [GetServiceResponse](#getserviceresponse)

### ListInstances



```js
amazonaws_servicediscovery.ListInstances({
  "ServiceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServiceId **required**

#### Output
* output [ListInstancesResponse](#listinstancesresponse)

### ListNamespaces



```js
amazonaws_servicediscovery.ListNamespaces({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [NamespaceFilter](#namespacefilter)
  * MaxResults
  * NextToken

#### Output
* output [ListNamespacesResponse](#listnamespacesresponse)

### ListOperations



```js
amazonaws_servicediscovery.ListOperations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [OperationFilter](#operationfilter)
  * MaxResults
  * NextToken

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### ListServices



```js
amazonaws_servicediscovery.ListServices({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [ServiceFilter](#servicefilter)
  * MaxResults
  * NextToken

#### Output
* output [ListServicesResponse](#listservicesresponse)

### ListTagsForResource



```js
amazonaws_servicediscovery.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### RegisterInstance



```js
amazonaws_servicediscovery.RegisterInstance({
  "ServiceId": null,
  "InstanceId": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
  * CreatorRequestId
  * InstanceId **required**
  * ServiceId **required**

#### Output
* output [RegisterInstanceResponse](#registerinstanceresponse)

### TagResource



```js
amazonaws_servicediscovery.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_servicediscovery.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateInstanceCustomHealthStatus



```js
amazonaws_servicediscovery.UpdateInstanceCustomHealthStatus({
  "ServiceId": null,
  "InstanceId": null,
  "Status": null
}, context)
```

#### Input
* input `object`
  * InstanceId **required**
  * ServiceId **required**
  * Status **required**

#### Output
*Output schema unknown*

### UpdateService



```js
amazonaws_servicediscovery.UpdateService({
  "Id": null,
  "Service": null
}, context)
```

#### Input
* input `object`
  * Id **required**
  * Service **required**
    * Description
    * DnsConfig
      * DnsRecords **required**
        * items [DnsRecord](#dnsrecord)
    * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)

#### Output
* output [UpdateServiceResponse](#updateserviceresponse)



## Definitions

### AmazonResourceName
* AmazonResourceName `string`

### Arn
* Arn `string`

### AttrKey
* AttrKey `string`

### AttrValue
* AttrValue `string`

### Attributes
* Attributes `object`

### Code
* Code `string`

### CreateHttpNamespaceRequest
* CreateHttpNamespaceRequest `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreateHttpNamespaceResponse
* CreateHttpNamespaceResponse `object`
  * OperationId

### CreatePrivateDnsNamespaceRequest
* CreatePrivateDnsNamespaceRequest `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)
  * Vpc **required**

### CreatePrivateDnsNamespaceResponse
* CreatePrivateDnsNamespaceResponse `object`
  * OperationId

### CreatePublicDnsNamespaceRequest
* CreatePublicDnsNamespaceRequest `object`
  * CreatorRequestId
  * Description
  * Name **required**
  * Tags
    * items [Tag](#tag)

### CreatePublicDnsNamespaceResponse
* CreatePublicDnsNamespaceResponse `object`
  * OperationId

### CreateServiceRequest
* CreateServiceRequest `object`
  * CreatorRequestId
  * Description
  * DnsConfig
    * DnsRecords **required**
      * items [DnsRecord](#dnsrecord)
    * NamespaceId
    * RoutingPolicy
  * HealthCheckConfig
    * FailureThreshold
    * ResourcePath
    * Type **required**
  * HealthCheckCustomConfig
    * FailureThreshold
  * Name **required**
  * NamespaceId
  * Tags
    * items [Tag](#tag)

### CreateServiceResponse
* CreateServiceResponse `object`
  * Service
    * Arn
    * CreateDate
    * CreatorRequestId
    * Description
    * DnsConfig
      * DnsRecords **required**
        * items [DnsRecord](#dnsrecord)
      * NamespaceId
      * RoutingPolicy
    * HealthCheckConfig
      * FailureThreshold
      * ResourcePath
      * Type **required**
    * HealthCheckCustomConfig
      * FailureThreshold
    * Id
    * InstanceCount
    * Name
    * NamespaceId

### CustomHealthNotFound


### CustomHealthStatus
* CustomHealthStatus `string` (values: HEALTHY, UNHEALTHY)

### DeleteNamespaceRequest
* DeleteNamespaceRequest `object`
  * Id **required**

### DeleteNamespaceResponse
* DeleteNamespaceResponse `object`
  * OperationId

### DeleteServiceRequest
* DeleteServiceRequest `object`
  * Id **required**

### DeleteServiceResponse
* DeleteServiceResponse `object`

### DeregisterInstanceRequest
* DeregisterInstanceRequest `object`
  * InstanceId **required**
  * ServiceId **required**

### DeregisterInstanceResponse
* DeregisterInstanceResponse `object`
  * OperationId

### DiscoverInstancesRequest
* DiscoverInstancesRequest `object`
  * HealthStatus
  * MaxResults
  * NamespaceName **required**
  * OptionalParameters
  * QueryParameters
  * ServiceName **required**

### DiscoverInstancesResponse
* DiscoverInstancesResponse `object`
  * Instances
    * items [HttpInstanceSummary](#httpinstancesummary)

### DiscoverMaxResults
* DiscoverMaxResults `integer`

### DnsConfig
* DnsConfig `object`: A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.
  * DnsRecords **required**
    * items [DnsRecord](#dnsrecord)
  * NamespaceId
  * RoutingPolicy

### DnsConfigChange
* DnsConfigChange `object`: A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance.
  * DnsRecords **required**
    * items [DnsRecord](#dnsrecord)

### DnsProperties
* DnsProperties `object`: A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.
  * HostedZoneId

### DnsRecord
* DnsRecord `object`: A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.
  * TTL **required**
  * Type **required**

### DnsRecordList
* DnsRecordList `array`
  * items [DnsRecord](#dnsrecord)

### DuplicateRequest


### FailureThreshold
* FailureThreshold `integer`

### FilterCondition
* FilterCondition `string` (values: EQ, IN, BETWEEN)

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### GetInstanceRequest
* GetInstanceRequest `object`
  * InstanceId **required**
  * ServiceId **required**

### GetInstanceResponse
* GetInstanceResponse `object`
  * Instance
    * Attributes
    * CreatorRequestId
    * Id **required**

### GetInstancesHealthStatusRequest
* GetInstancesHealthStatusRequest `object`
  * Instances
    * items [ResourceId](#resourceid)
  * MaxResults
  * NextToken
  * ServiceId **required**

### GetInstancesHealthStatusResponse
* GetInstancesHealthStatusResponse `object`
  * NextToken
  * Status

### GetNamespaceRequest
* GetNamespaceRequest `object`
  * Id **required**

### GetNamespaceResponse
* GetNamespaceResponse `object`
  * Namespace
    * Arn
    * CreateDate
    * CreatorRequestId
    * Description
    * Id
    * Name
    * Properties
      * DnsProperties
        * HostedZoneId
      * HttpProperties
        * HttpName
    * ServiceCount
    * Type

### GetOperationRequest
* GetOperationRequest `object`
  * OperationId **required**

### GetOperationResponse
* GetOperationResponse `object`
  * Operation
    * CreateDate
    * ErrorCode
    * ErrorMessage
    * Id
    * Status
    * Targets
    * Type
    * UpdateDate

### GetServiceRequest
* GetServiceRequest `object`
  * Id **required**

### GetServiceResponse
* GetServiceResponse `object`
  * Service
    * Arn
    * CreateDate
    * CreatorRequestId
    * Description
    * DnsConfig
      * DnsRecords **required**
        * items [DnsRecord](#dnsrecord)
      * NamespaceId
      * RoutingPolicy
    * HealthCheckConfig
      * FailureThreshold
      * ResourcePath
      * Type **required**
    * HealthCheckCustomConfig
      * FailureThreshold
    * Id
    * InstanceCount
    * Name
    * NamespaceId

### HealthCheckConfig
* HealthCheckConfig `object`: <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b> <code>A</code> and <code>AAAA</code> records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code> records to be unhealthy. </p> <p> <b> <code>CNAME</code> records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
  * FailureThreshold
  * ResourcePath
  * Type **required**

### HealthCheckCustomConfig
* HealthCheckCustomConfig `object`: <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol>
  * FailureThreshold

### HealthCheckType
* HealthCheckType `string` (values: HTTP, HTTPS, TCP)

### HealthStatus
* HealthStatus `string` (values: HEALTHY, UNHEALTHY, UNKNOWN)

### HealthStatusFilter
* HealthStatusFilter `string` (values: HEALTHY, UNHEALTHY, ALL)

### HttpInstanceSummary
* HttpInstanceSummary `object`: In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
  * Attributes
  * HealthStatus
  * InstanceId
  * NamespaceName
  * ServiceName

### HttpInstanceSummaryList
* HttpInstanceSummaryList `array`
  * items [HttpInstanceSummary](#httpinstancesummary)

### HttpProperties
* HttpProperties `object`: A complex type that contains the name of an HTTP namespace.
  * HttpName

### Instance
* Instance `object`: A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request.
  * Attributes
  * CreatorRequestId
  * Id **required**

### InstanceHealthStatusMap
* InstanceHealthStatusMap `object`

### InstanceIdList
* InstanceIdList `array`
  * items [ResourceId](#resourceid)

### InstanceNotFound


### InstanceSummary
* InstanceSummary `object`: A complex type that contains information about the instances that you registered by using a specified service.
  * Attributes
  * Id

### InstanceSummaryList
* InstanceSummaryList `array`
  * items [InstanceSummary](#instancesummary)

### InvalidInput


### ListInstancesRequest
* ListInstancesRequest `object`
  * MaxResults
  * NextToken
  * ServiceId **required**

### ListInstancesResponse
* ListInstancesResponse `object`
  * Instances
    * items [InstanceSummary](#instancesummary)
  * NextToken

### ListNamespacesRequest
* ListNamespacesRequest `object`
  * Filters
    * items [NamespaceFilter](#namespacefilter)
  * MaxResults
  * NextToken

### ListNamespacesResponse
* ListNamespacesResponse `object`
  * Namespaces
    * items [NamespaceSummary](#namespacesummary)
  * NextToken

### ListOperationsRequest
* ListOperationsRequest `object`
  * Filters
    * items [OperationFilter](#operationfilter)
  * MaxResults
  * NextToken

### ListOperationsResponse
* ListOperationsResponse `object`
  * NextToken
  * Operations
    * items [OperationSummary](#operationsummary)

### ListServicesRequest
* ListServicesRequest `object`
  * Filters
    * items [ServiceFilter](#servicefilter)
  * MaxResults
  * NextToken

### ListServicesResponse
* ListServicesResponse `object`
  * NextToken
  * Services
    * items [ServiceSummary](#servicesummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### Namespace
* Namespace `object`: A complex type that contains information about a specified namespace.
  * Arn
  * CreateDate
  * CreatorRequestId
  * Description
  * Id
  * Name
  * Properties
    * DnsProperties
      * HostedZoneId
    * HttpProperties
      * HttpName
  * ServiceCount
  * Type

### NamespaceAlreadyExists


### NamespaceFilter
* NamespaceFilter `object`: A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
  * Condition
  * Name **required**
  * Values **required**
    * items [FilterValue](#filtervalue)

### NamespaceFilterName
* NamespaceFilterName `string` (values: TYPE)

### NamespaceFilters
* NamespaceFilters `array`
  * items [NamespaceFilter](#namespacefilter)

### NamespaceName
* NamespaceName `string`

### NamespaceNotFound


### NamespaceProperties
* NamespaceProperties `object`: A complex type that contains information that is specific to the namespace type.
  * DnsProperties
    * HostedZoneId
  * HttpProperties
    * HttpName

### NamespaceSummariesList
* NamespaceSummariesList `array`
  * items [NamespaceSummary](#namespacesummary)

### NamespaceSummary
* NamespaceSummary `object`: A complex type that contains information about a namespace.
  * Arn
  * CreateDate
  * Description
  * Id
  * Name
  * Properties [NamespaceProperties](#namespaceproperties)
  * ServiceCount
  * Type

### NamespaceType
* NamespaceType `string` (values: DNS_PUBLIC, DNS_PRIVATE, HTTP)

### NextToken
* NextToken `string`

### Operation
* Operation `object`: A complex type that contains information about a specified operation.
  * CreateDate
  * ErrorCode
  * ErrorMessage
  * Id
  * Status
  * Targets
  * Type
  * UpdateDate

### OperationFilter
* OperationFilter `object`: A complex type that lets you select the operations that you want to list.
  * Condition
  * Name **required**
  * Values **required**
    * items [FilterValue](#filtervalue)

### OperationFilterName
* OperationFilterName `string` (values: NAMESPACE_ID, SERVICE_ID, STATUS, TYPE, UPDATE_DATE)

### OperationFilters
* OperationFilters `array`
  * items [OperationFilter](#operationfilter)

### OperationId
* OperationId `string`

### OperationNotFound


### OperationStatus
* OperationStatus `string` (values: SUBMITTED, PENDING, SUCCESS, FAIL)

### OperationSummary
* OperationSummary `object`: A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.
  * Id
  * Status

### OperationSummaryList
* OperationSummaryList `array`
  * items [OperationSummary](#operationsummary)

### OperationTargetType
* OperationTargetType `string` (values: NAMESPACE, SERVICE, INSTANCE)

### OperationTargetsMap
* OperationTargetsMap `object`

### OperationType
* OperationType `string` (values: CREATE_NAMESPACE, DELETE_NAMESPACE, UPDATE_SERVICE, REGISTER_INSTANCE, DEREGISTER_INSTANCE)

### RecordTTL
* RecordTTL `integer`

### RecordType
* RecordType `string` (values: SRV, A, AAAA, CNAME)

### RegisterInstanceRequest
* RegisterInstanceRequest `object`
  * Attributes **required**
  * CreatorRequestId
  * InstanceId **required**
  * ServiceId **required**

### RegisterInstanceResponse
* RegisterInstanceResponse `object`
  * OperationId

### RequestLimitExceeded


### ResourceCount
* ResourceCount `integer`

### ResourceDescription
* ResourceDescription `string`

### ResourceId
* ResourceId `string`

### ResourceInUse


### ResourceLimitExceeded


### ResourceNotFoundException


### ResourcePath
* ResourcePath `string`

### RoutingPolicy
* RoutingPolicy `string` (values: MULTIVALUE, WEIGHTED)

### Service
* Service `object`: A complex type that contains information about the specified service.
  * Arn
  * CreateDate
  * CreatorRequestId
  * Description
  * DnsConfig
    * DnsRecords **required**
      * items [DnsRecord](#dnsrecord)
    * NamespaceId
    * RoutingPolicy
  * HealthCheckConfig
    * FailureThreshold
    * ResourcePath
    * Type **required**
  * HealthCheckCustomConfig
    * FailureThreshold
  * Id
  * InstanceCount
  * Name
  * NamespaceId

### ServiceAlreadyExists


### ServiceChange
* ServiceChange `object`: A complex type that contains changes to an existing service.
  * Description
  * DnsConfig
    * DnsRecords **required**
      * items [DnsRecord](#dnsrecord)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)

### ServiceFilter
* ServiceFilter `object`: A complex type that lets you specify the namespaces that you want to list services for.
  * Condition
  * Name **required**
  * Values **required**
    * items [FilterValue](#filtervalue)

### ServiceFilterName
* ServiceFilterName `string` (values: NAMESPACE_ID)

### ServiceFilters
* ServiceFilters `array`
  * items [ServiceFilter](#servicefilter)

### ServiceName
* ServiceName `string`

### ServiceNotFound


### ServiceSummariesList
* ServiceSummariesList `array`
  * items [ServiceSummary](#servicesummary)

### ServiceSummary
* ServiceSummary `object`: A complex type that contains information about a specified service.
  * Arn
  * CreateDate
  * Description
  * DnsConfig [DnsConfig](#dnsconfig)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)
  * HealthCheckCustomConfig [HealthCheckCustomConfig](#healthcheckcustomconfig)
  * Id
  * InstanceCount
  * Name

### Tag
* Tag `object`: A custom key-value pair associated with a resource.
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
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### TooManyTagsException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateInstanceCustomHealthStatusRequest
* UpdateInstanceCustomHealthStatusRequest `object`
  * InstanceId **required**
  * ServiceId **required**
  * Status **required**

### UpdateServiceRequest
* UpdateServiceRequest `object`
  * Id **required**
  * Service **required**
    * Description
    * DnsConfig
      * DnsRecords **required**
        * items [DnsRecord](#dnsrecord)
    * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)

### UpdateServiceResponse
* UpdateServiceResponse `object`
  * OperationId


