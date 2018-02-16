# @datafire/amazonaws_servicediscovery

Client library for Amazon Route 53 Auto Naming

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

amazonaws_servicediscovery.CreatePrivateDnsNamespace({
  "Name": "",
  "Vpc": ""
}).then(data => {
  console.log(data);
});
```

## Description

Amazon Route 53 auto naming lets you configure public or private namespaces that your microservice applications run in. When instances of the service become available, you can call the auto naming API to register the instance, and Route 53 automatically creates up to five DNS records and an optional health check. Clients that submit DNS queries for the service receive an answer that contains up to eight healthy records.

## Actions

### CreatePrivateDnsNamespace



```js
amazonaws_servicediscovery.CreatePrivateDnsNamespace({
  "Name": "",
  "Vpc": ""
}, context)
```

#### Input
* input `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * Name **required** [NamespaceName](#namespacename)
  * Vpc **required** [ResourceId](#resourceid)

#### Output
* output [CreatePrivateDnsNamespaceResponse](#createprivatednsnamespaceresponse)

### CreatePublicDnsNamespace



```js
amazonaws_servicediscovery.CreatePublicDnsNamespace({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * Name **required** [NamespaceName](#namespacename)

#### Output
* output [CreatePublicDnsNamespaceResponse](#createpublicdnsnamespaceresponse)

### CreateService



```js
amazonaws_servicediscovery.CreateService({
  "Name": "",
  "DnsConfig": {
    "NamespaceId": "",
    "DnsRecords": []
  }
}, context)
```

#### Input
* input `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * DnsConfig **required** [DnsConfig](#dnsconfig)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)
  * Name **required** [ServiceName](#servicename)

#### Output
* output [CreateServiceResponse](#createserviceresponse)

### DeleteNamespace



```js
amazonaws_servicediscovery.DeleteNamespace({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [ResourceId](#resourceid)

#### Output
* output [DeleteNamespaceResponse](#deletenamespaceresponse)

### DeleteService



```js
amazonaws_servicediscovery.DeleteService({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [ResourceId](#resourceid)

#### Output
* output [DeleteServiceResponse](#deleteserviceresponse)

### DeregisterInstance



```js
amazonaws_servicediscovery.DeregisterInstance({
  "ServiceId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

#### Output
* output [DeregisterInstanceResponse](#deregisterinstanceresponse)

### GetInstance



```js
amazonaws_servicediscovery.GetInstance({
  "ServiceId": "",
  "InstanceId": ""
}, context)
```

#### Input
* input `object`
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

#### Output
* output [GetInstanceResponse](#getinstanceresponse)

### GetInstancesHealthStatus



```js
amazonaws_servicediscovery.GetInstancesHealthStatus({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Instances [InstanceIdList](#instanceidlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServiceId **required** [ResourceId](#resourceid)

#### Output
* output [GetInstancesHealthStatusResponse](#getinstanceshealthstatusresponse)

### GetNamespace



```js
amazonaws_servicediscovery.GetNamespace({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [ResourceId](#resourceid)

#### Output
* output [GetNamespaceResponse](#getnamespaceresponse)

### GetOperation



```js
amazonaws_servicediscovery.GetOperation({
  "OperationId": ""
}, context)
```

#### Input
* input `object`
  * OperationId **required** [ResourceId](#resourceid)

#### Output
* output [GetOperationResponse](#getoperationresponse)

### GetService



```js
amazonaws_servicediscovery.GetService({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** [ResourceId](#resourceid)

#### Output
* output [GetServiceResponse](#getserviceresponse)

### ListInstances



```js
amazonaws_servicediscovery.ListInstances({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServiceId **required** [ResourceId](#resourceid)

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
  * Filters [NamespaceFilters](#namespacefilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

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
  * Filters [OperationFilters](#operationfilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

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
  * Filters [ServiceFilters](#servicefilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListServicesResponse](#listservicesresponse)

### RegisterInstance



```js
amazonaws_servicediscovery.RegisterInstance({
  "ServiceId": "",
  "InstanceId": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [Attributes](#attributes)
  * CreatorRequestId [ResourceId](#resourceid)
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

#### Output
* output [RegisterInstanceResponse](#registerinstanceresponse)

### UpdateService



```js
amazonaws_servicediscovery.UpdateService({
  "Id": "",
  "Service": {
    "DnsConfig": {
      "DnsRecords": []
    }
  }
}, context)
```

#### Input
* input `object`
  * Id **required** [ResourceId](#resourceid)
  * Service **required** [ServiceChange](#servicechange)

#### Output
* output [UpdateServiceResponse](#updateserviceresponse)



## Definitions

### Arn
* Arn `string`

### AttrKey
* AttrKey `string`

### AttrValue
* AttrValue `string`

### Attributes
* Attributes `array`
  * items `object`
    * key [AttrKey](#attrkey)
    * value [AttrValue](#attrvalue)

### Code
* Code `string`

### CreatePrivateDnsNamespaceRequest
* CreatePrivateDnsNamespaceRequest `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * Name **required** [NamespaceName](#namespacename)
  * Vpc **required** [ResourceId](#resourceid)

### CreatePrivateDnsNamespaceResponse
* CreatePrivateDnsNamespaceResponse `object`
  * OperationId [OperationId](#operationid)

### CreatePublicDnsNamespaceRequest
* CreatePublicDnsNamespaceRequest `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * Name **required** [NamespaceName](#namespacename)

### CreatePublicDnsNamespaceResponse
* CreatePublicDnsNamespaceResponse `object`
  * OperationId [OperationId](#operationid)

### CreateServiceRequest
* CreateServiceRequest `object`
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * DnsConfig **required** [DnsConfig](#dnsconfig)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)
  * Name **required** [ServiceName](#servicename)

### CreateServiceResponse
* CreateServiceResponse `object`
  * Service [Service](#service)

### DeleteNamespaceRequest
* DeleteNamespaceRequest `object`
  * Id **required** [ResourceId](#resourceid)

### DeleteNamespaceResponse
* DeleteNamespaceResponse `object`
  * OperationId [OperationId](#operationid)

### DeleteServiceRequest
* DeleteServiceRequest `object`
  * Id **required** [ResourceId](#resourceid)

### DeleteServiceResponse
* DeleteServiceResponse `object`

### DeregisterInstanceRequest
* DeregisterInstanceRequest `object`
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

### DeregisterInstanceResponse
* DeregisterInstanceResponse `object`
  * OperationId [OperationId](#operationid)

### DnsConfig
* DnsConfig `object`: A complex type that contains information about the records that you want Amazon Route 53 to create when you register an instance.
  * DnsRecords **required** [DnsRecordList](#dnsrecordlist)
  * NamespaceId **required** [ResourceId](#resourceid)
  * RoutingPolicy [RoutingPolicy](#routingpolicy)

### DnsConfigChange
* DnsConfigChange `object`: A complex type that contains information about changes to the records that Route 53 creates when you register an instance.
  * DnsRecords **required** [DnsRecordList](#dnsrecordlist)

### DnsProperties
* DnsProperties `object`: A complex type that contains the ID for the hosted zone that Route 53 creates when you create a namespace.
  * HostedZoneId [ResourceId](#resourceid)

### DnsRecord
* DnsRecord `object`: A complex type that contains information about the records that you want Route 53 to create when you register an instance.
  * TTL **required** [RecordTTL](#recordttl)
  * Type **required** [RecordType](#recordtype)

### DnsRecordList
* DnsRecordList `array`
  * items [DnsRecord](#dnsrecord)

### DuplicateRequest
* DuplicateRequest `object`: The operation is already in progress.
  * Message [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `string`

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
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

### GetInstanceResponse
* GetInstanceResponse `object`
  * Instance [Instance](#instance)

### GetInstancesHealthStatusRequest
* GetInstancesHealthStatusRequest `object`
  * Instances [InstanceIdList](#instanceidlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServiceId **required** [ResourceId](#resourceid)

### GetInstancesHealthStatusResponse
* GetInstancesHealthStatusResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Status [InstanceHealthStatusMap](#instancehealthstatusmap)

### GetNamespaceRequest
* GetNamespaceRequest `object`
  * Id **required** [ResourceId](#resourceid)

### GetNamespaceResponse
* GetNamespaceResponse `object`
  * Namespace [Namespace](#namespace)

### GetOperationRequest
* GetOperationRequest `object`
  * OperationId **required** [ResourceId](#resourceid)

### GetOperationResponse
* GetOperationResponse `object`
  * Operation [Operation](#operation)

### GetServiceRequest
* GetServiceRequest `object`
  * Id **required** [ResourceId](#resourceid)

### GetServiceResponse
* GetServiceResponse `object`
  * Service [Service](#service)

### HealthCheckConfig
* HealthCheckConfig `object`: <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, Amazon Route 53 associates the health check with all the records that you specify in <code>DnsConfig</code>.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, Route 53 creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>The health check uses 30 seconds as the request interval. This is the number of seconds between the time that each Route 53 health checker gets a response from your endpoint and the time that it sends the next health check request. A health checker in each data center around the world sends your endpoint a health check request every 30 seconds. On average, your endpoint receives a health check request about every two seconds. Health checkers in different data centers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, Route 53 creates an alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing">Route 53 Pricing</a>.</p>
  * FailureThreshold [FailureThreshold](#failurethreshold)
  * ResourcePath [ResourcePath](#resourcepath)
  * Type **required** [HealthCheckType](#healthchecktype)

### HealthCheckType
* HealthCheckType `string` (values: HTTP, HTTPS, TCP)

### HealthStatus
* HealthStatus `string` (values: HEALTHY, UNHEALTHY, UNKNOWN)

### Instance
* Instance `object`: A complex type that contains information about an instance that Amazon Route 53 creates when you submit a <code>RegisterInstance</code> request.
  * Attributes [Attributes](#attributes)
  * CreatorRequestId [ResourceId](#resourceid)
  * Id **required** [ResourceId](#resourceid)

### InstanceHealthStatusMap
* InstanceHealthStatusMap `array`
  * items `object`
    * key [ResourceId](#resourceid)
    * value [HealthStatus](#healthstatus)

### InstanceIdList
* InstanceIdList `array`
  * items [ResourceId](#resourceid)

### InstanceNotFound
* InstanceNotFound `object`: No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.
  * Message [ErrorMessage](#errormessage)

### InstanceSummary
* InstanceSummary `object`: A complex type that contains information about the instances that you registered by using a specified service.
  * Attributes [Attributes](#attributes)
  * Id [ResourceId](#resourceid)

### InstanceSummaryList
* InstanceSummaryList `array`
  * items [InstanceSummary](#instancesummary)

### InvalidInput
* InvalidInput `object`: One or more specified values aren't valid. For example, when you're creating a namespace, the value of <code>Name</code> might not be a valid DNS name.
  * Message [ErrorMessage](#errormessage)

### ListInstancesRequest
* ListInstancesRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServiceId **required** [ResourceId](#resourceid)

### ListInstancesResponse
* ListInstancesResponse `object`
  * Instances [InstanceSummaryList](#instancesummarylist)
  * NextToken [NextToken](#nexttoken)

### ListNamespacesRequest
* ListNamespacesRequest `object`
  * Filters [NamespaceFilters](#namespacefilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListNamespacesResponse
* ListNamespacesResponse `object`
  * Namespaces [NamespaceSummariesList](#namespacesummarieslist)
  * NextToken [NextToken](#nexttoken)

### ListOperationsRequest
* ListOperationsRequest `object`
  * Filters [OperationFilters](#operationfilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListOperationsResponse
* ListOperationsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Operations [OperationSummaryList](#operationsummarylist)

### ListServicesRequest
* ListServicesRequest `object`
  * Filters [ServiceFilters](#servicefilters)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListServicesResponse
* ListServicesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Services [ServiceSummariesList](#servicesummarieslist)

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### Namespace
* Namespace `object`: A complex type that contains information about a specified namespace.
  * Arn [Arn](#arn)
  * CreateDate [Timestamp](#timestamp)
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * Id [ResourceId](#resourceid)
  * Name [NamespaceName](#namespacename)
  * Properties [NamespaceProperties](#namespaceproperties)
  * ServiceCount [ResourceCount](#resourcecount)
  * Type [NamespaceType](#namespacetype)

### NamespaceAlreadyExists
* NamespaceAlreadyExists `object`: The namespace that you're trying to create already exists.
  * CreatorRequestId [ResourceId](#resourceid)
  * Message [ErrorMessage](#errormessage)
  * NamespaceId [ResourceId](#resourceid)

### NamespaceFilter
* NamespaceFilter `object`: A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
  * Condition [FilterCondition](#filtercondition)
  * Name **required** [NamespaceFilterName](#namespacefiltername)
  * Values **required** [FilterValues](#filtervalues)

### NamespaceFilterName
* NamespaceFilterName `string` (values: TYPE)

### NamespaceFilters
* NamespaceFilters `array`
  * items [NamespaceFilter](#namespacefilter)

### NamespaceName
* NamespaceName `string`

### NamespaceNotFound
* NamespaceNotFound `object`: No namespace exists with the specified ID.
  * Message [ErrorMessage](#errormessage)

### NamespaceProperties
* NamespaceProperties `object`: A complex type that contains information that is specific to the namespace type.
  * DnsProperties [DnsProperties](#dnsproperties)

### NamespaceSummariesList
* NamespaceSummariesList `array`
  * items [NamespaceSummary](#namespacesummary)

### NamespaceSummary
* NamespaceSummary `object`: A complex type that contains information about a namespace.
  * Arn [Arn](#arn)
  * Id [ResourceId](#resourceid)
  * Name [NamespaceName](#namespacename)
  * Type [NamespaceType](#namespacetype)

### NamespaceType
* NamespaceType `string` (values: DNS_PUBLIC, DNS_PRIVATE)

### NextToken
* NextToken `string`

### Operation
* Operation `object`: A complex type that contains information about a specified operation.
  * CreateDate [Timestamp](#timestamp)
  * ErrorCode [Code](#code)
  * ErrorMessage [Message](#message)
  * Id [OperationId](#operationid)
  * Status [OperationStatus](#operationstatus)
  * Targets [OperationTargetsMap](#operationtargetsmap)
  * Type [OperationType](#operationtype)
  * UpdateDate [Timestamp](#timestamp)

### OperationFilter
* OperationFilter `object`: A complex type that lets you select the operations that you want to list.
  * Condition [FilterCondition](#filtercondition)
  * Name **required** [OperationFilterName](#operationfiltername)
  * Values **required** [FilterValues](#filtervalues)

### OperationFilterName
* OperationFilterName `string` (values: NAMESPACE_ID, SERVICE_ID, STATUS, TYPE, UPDATE_DATE)

### OperationFilters
* OperationFilters `array`
  * items [OperationFilter](#operationfilter)

### OperationId
* OperationId `string`

### OperationNotFound
* OperationNotFound `object`: No operation exists with the specified ID.
  * Message [ErrorMessage](#errormessage)

### OperationStatus
* OperationStatus `string` (values: SUBMITTED, PENDING, SUCCESS, FAIL)

### OperationSummary
* OperationSummary `object`: A complex type that contains information about an operation that matches the criteria that you specified in a <a>ListOperations</a> request.
  * Id [OperationId](#operationid)
  * Status [OperationStatus](#operationstatus)

### OperationSummaryList
* OperationSummaryList `array`
  * items [OperationSummary](#operationsummary)

### OperationTargetType
* OperationTargetType `string` (values: NAMESPACE, SERVICE, INSTANCE)

### OperationTargetsMap
* OperationTargetsMap `array`
  * items `object`
    * key [OperationTargetType](#operationtargettype)
    * value [ResourceId](#resourceid)

### OperationType
* OperationType `string` (values: CREATE_NAMESPACE, DELETE_NAMESPACE, UPDATE_SERVICE, REGISTER_INSTANCE, DEREGISTER_INSTANCE)

### RecordTTL
* RecordTTL `integer`

### RecordType
* RecordType `string` (values: SRV, A, AAAA, CNAME)

### RegisterInstanceRequest
* RegisterInstanceRequest `object`
  * Attributes **required** [Attributes](#attributes)
  * CreatorRequestId [ResourceId](#resourceid)
  * InstanceId **required** [ResourceId](#resourceid)
  * ServiceId **required** [ResourceId](#resourceid)

### RegisterInstanceResponse
* RegisterInstanceResponse `object`
  * OperationId [OperationId](#operationid)

### ResourceCount
* ResourceCount `integer`

### ResourceDescription
* ResourceDescription `string`

### ResourceId
* ResourceId `string`

### ResourceInUse
* ResourceInUse `object`: The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.
  * Message [ErrorMessage](#errormessage)

### ResourceLimitExceeded
* ResourceLimitExceeded `object`: The resource can't be created because you've reached the limit on the number of resources.
  * Message [ErrorMessage](#errormessage)

### ResourcePath
* ResourcePath `string`

### RoutingPolicy
* RoutingPolicy `string` (values: MULTIVALUE, WEIGHTED)

### Service
* Service `object`: A complex type that contains information about the specified service.
  * Arn [Arn](#arn)
  * CreateDate [Timestamp](#timestamp)
  * CreatorRequestId [ResourceId](#resourceid)
  * Description [ResourceDescription](#resourcedescription)
  * DnsConfig [DnsConfig](#dnsconfig)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)
  * Id [ResourceId](#resourceid)
  * InstanceCount [ResourceCount](#resourcecount)
  * Name [ServiceName](#servicename)

### ServiceAlreadyExists
* ServiceAlreadyExists `object`: The service can't be created because a service with the same name already exists.
  * CreatorRequestId [ResourceId](#resourceid)
  * Message [ErrorMessage](#errormessage)
  * ServiceId [ResourceId](#resourceid)

### ServiceChange
* ServiceChange `object`: A complex type that contains changes to an existing service.
  * Description [ResourceDescription](#resourcedescription)
  * DnsConfig **required** [DnsConfigChange](#dnsconfigchange)
  * HealthCheckConfig [HealthCheckConfig](#healthcheckconfig)

### ServiceFilter
* ServiceFilter `object`: A complex type that lets you specify the namespaces that you want to list services for.
  * Condition [FilterCondition](#filtercondition)
  * Name **required** [ServiceFilterName](#servicefiltername)
  * Values **required** [FilterValues](#filtervalues)

### ServiceFilterName
* ServiceFilterName `string` (values: NAMESPACE_ID)

### ServiceFilters
* ServiceFilters `array`
  * items [ServiceFilter](#servicefilter)

### ServiceName
* ServiceName `string`

### ServiceNotFound
* ServiceNotFound `object`: No service exists with the specified ID.
  * Message [ErrorMessage](#errormessage)

### ServiceSummariesList
* ServiceSummariesList `array`
  * items [ServiceSummary](#servicesummary)

### ServiceSummary
* ServiceSummary `object`: A complex type that contains information about a specified service.
  * Arn [Arn](#arn)
  * Description [ResourceDescription](#resourcedescription)
  * Id [ResourceId](#resourceid)
  * InstanceCount [ResourceCount](#resourcecount)
  * Name [ServiceName](#servicename)

### Timestamp
* Timestamp `string`

### UpdateServiceRequest
* UpdateServiceRequest `object`
  * Id **required** [ResourceId](#resourceid)
  * Service **required** [ServiceChange](#servicechange)

### UpdateServiceResponse
* UpdateServiceResponse `object`
  * OperationId [OperationId](#operationid)


