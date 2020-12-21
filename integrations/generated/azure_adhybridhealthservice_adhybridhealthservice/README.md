# @datafire/azure_adhybridhealthservice_adhybridhealthservice

Client library for ADHybridHealthService

## Installation and Usage
```bash
npm install --save @datafire/azure_adhybridhealthservice_adhybridhealthservice
```
```js
let azure_adhybridhealthservice_adhybridhealthservice = require('@datafire/azure_adhybridhealthservice_adhybridhealthservice').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

REST APIs for Azure Active Directory Connect Health

## Actions

### addsServices_list
Gets the details of Active Directory Domain Service, for a tenant, that are onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_list({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The service property filter to apply.
  * serviceType `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
  * skipCount `integer`: The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Services](#services)

### addsServices_add
Onboards a service for a given tenant in Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_add({
  "api-version": "",
  "service": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * service **required** [ServiceProperties](#serviceproperties)

#### Output
* output [ServiceProperties](#serviceproperties)

### addsServices_listPremiumServices
Gets the details of Active Directory Domain Services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listPremiumServices({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The service property filter to apply.
  * serviceType `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
  * skipCount `integer`: The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Services](#services)

### addsServices_delete
Deletes an Active Directory Domain Service which is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_delete({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service which needs to be deleted.
  * confirm `boolean`: Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### addsServices_get
Gets the details of an Active Directory Domain Service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_get({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceProperties](#serviceproperties)

### addsServices_update
Updates an Active Directory Domain Service properties of an onboarded service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_update({
  "serviceName": "",
  "service": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service which needs to be deleted.
  * service **required** [ServiceProperties](#serviceproperties)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceProperties](#serviceproperties)

### adDomainServiceMembers_list
Gets the details of the servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.adDomainServiceMembers_list({
  "serviceName": "",
  "isGroupbySite": true,
  "nextPartitionKey": "",
  "nextRowKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * isGroupbySite **required** `boolean`: Indicates if the result should be grouped by site or not.
  * query `string`: The custom query.
  * nextPartitionKey **required** `string` (values:  ): The next partition key to query for.
  * nextRowKey **required** `string` (values:  ): The next row key to query for.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [AddsServiceMembers](#addsservicemembers)

### addsServiceMembers_list
Gets the details of the Active Directory Domain servers, for a given Active Directory Domain Service, that are onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServiceMembers_list({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [AddsServiceMembers](#addsservicemembers)

### alerts_listAddsAlerts
Gets the alerts for a given Active Directory Domain Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.alerts_listAddsAlerts({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The alert property filter to apply.
  * state `string`: The alert state to query for.
  * from `string`: The start date to query for.
  * to `string`: The end date till when to query for.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Alerts](#alerts)

### configuration_listAddsConfigurations
Gets the service configurations.


```js
azure_adhybridhealthservice_adhybridhealthservice.configuration_listAddsConfigurations({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * grouping `string`: The grouping for configurations.

#### Output
* output [AddsConfiguration](#addsconfiguration)

### dimensions_listAddsDimensions
Gets the dimensions for a given dimension type in a server.


```js
azure_adhybridhealthservice_adhybridhealthservice.dimensions_listAddsDimensions({
  "serviceName": "",
  "dimension": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * dimension **required** `string`: The dimension type.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Dimensions](#dimensions)

### addsServicesUserPreference_delete
Deletes the user preferences for a given feature.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesUserPreference_delete({
  "serviceName": "",
  "featureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * featureName **required** `string`: The name of the feature.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### addsServicesUserPreference_get
Gets the user preferences for a given feature.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesUserPreference_get({
  "serviceName": "",
  "featureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * featureName **required** `string`: The name of the feature.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [UserPreference](#userpreference)

### addsServicesUserPreference_add
Adds the user preferences for a given feature.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesUserPreference_add({
  "serviceName": "",
  "featureName": "",
  "setting": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * featureName **required** `string`: The name of the feature.
  * setting **required** [UserPreference](#userpreference)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### addsServices_getForestSummary
Gets the forest summary for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_getForestSummary({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ForestSummary](#forestsummary)

### addsServices_listMetricMetadata
Gets the service related metrics information.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listMetricMetadata({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The metric metadata property filter to apply.
  * serviceName **required** `string`: The name of the service.
  * perfCounter `boolean`: Indicates if only performance counter metrics are requested.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricMetadataList](#metricmetadatalist)

### addsServices_getMetricMetadata
Gets the service related metric information.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_getMetricMetadata({
  "serviceName": "",
  "metricName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricMetadata](#metricmetadata)

### addsServices_getMetricMetadataForGroup
Gets the service related metrics for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_getMetricMetadataForGroup({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * groupKey `string`: The group key
  * fromDate `string`: The start date.
  * toDate `string`: The end date.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricSets](#metricsets)

### addsService_getMetrics
Gets the server related metrics for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsService_getMetrics({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * groupKey `string`: The group key
  * fromDate `string`: The start date.
  * toDate `string`: The end date.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricSets](#metricsets)

### addsServices_listMetricsAverage
Gets the average of the metric values for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listMetricsAverage({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Metrics](#metrics)

### addsServices_listMetricsSum
Gets the sum of the metric values for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listMetricsSum({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Metrics](#metrics)

### addsServices_listReplicationDetails
Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listReplicationDetails({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * withDetails `boolean`: Indicates if InboundReplicationNeighbor details are required or not.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ReplicationDetailsList](#replicationdetailslist)

### addsServicesReplicationStatus_get
Gets Replication status for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesReplicationStatus_get({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ReplicationStatus](#replicationstatus)

### addsServices_listReplicationSummary
Gets complete domain controller list along with replication details for a given Active Directory Domain Service, that is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listReplicationSummary({
  "serviceName": "",
  "isGroupbySite": true,
  "query": "",
  "nextPartitionKey": "",
  "nextRowKey": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * isGroupbySite **required** `boolean`: Indicates if the result should be grouped by site or not.
  * query **required** `string`: The custom query.
  * nextPartitionKey **required** `string` (values:  ): The next partition key to query for.
  * nextRowKey **required** `string` (values:  ): The next row key to query for.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ReplicationSummaryList](#replicationsummarylist)

### addsServicesServiceMembers_list
Gets the details of the servers, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesServiceMembers_list({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * dimensionType `string`: The server specific dimension.
  * dimensionSignature `string`: The value of the dimension.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMembers](#servicemembers)

### addsServicesServiceMembers_add
Onboards  a server, for a given Active Directory Domain Controller service, to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServicesServiceMembers_add({
  "serviceName": "",
  "serviceMember": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service under which the server is to be onboarded.
  * serviceMember **required** [ServiceMember](#servicemember)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMember](#servicemember)

### addsServiceMembers_delete
Deletes a Active Directory Domain Controller server that has been onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServiceMembers_delete({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * confirm `boolean`: Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### addsServiceMembers_get
Gets the details of a server, for a given Active Directory Domain Controller service, that are onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServiceMembers_get({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMember](#servicemember)

### addsServices_listServerAlerts
Gets the details of an alert for a given Active Directory Domain Controller service and server combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServices_listServerAlerts({
  "serviceMemberId": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceMemberId **required** `string`: The server Id for which the alert details needs to be queried.
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The alert property filter to apply.
  * state `string`: The alert state to query for.
  * from `string`: The start date to query for.
  * to `string`: The end date till when to query for.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Alerts](#alerts)

### addsServiceMembers_listCredentials
Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.addsServiceMembers_listCredentials({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The property filter to apply.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Credentials](#credentials)

### configuration_get
Gets the details of a tenant onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.configuration_get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Tenant](#tenant)

### configuration_update
Updates tenant properties for tenants onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.configuration_update({
  "tenant": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * tenant **required** [Tenant](#tenant)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Tenant](#tenant)

### configuration_add
Onboards a tenant in Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.configuration_add({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Tenant](#tenant)

### operations_list
Lists the available Azure Data Factory API operations.


```js
azure_adhybridhealthservice_adhybridhealthservice.operations_list({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [OperationListResponse](#operationlistresponse)

### reports_getDevOps
Checks if the user is enabled for Dev Ops access.


```js
azure_adhybridhealthservice_adhybridhealthservice.reports_getDevOps({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Result](#result)

### serviceMembers_listConnectors
Gets the connector details for a service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listConnectors({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Connectors](#connectors)

### services_list
Gets the details of services, for a tenant, that are onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_list({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The service property filter to apply.
  * serviceType `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
  * skipCount `integer`: The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Services](#services)

### services_add
Onboards a service for a given tenant in Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_add({
  "api-version": "",
  "service": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * service **required** [ServiceProperties](#serviceproperties)

#### Output
* output [ServiceProperties](#serviceproperties)

### services_listPremium
Gets the details of services for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listPremium({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The service property filter to apply.
  * serviceType `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.
  * skipCount `integer`: The skip count, which specifies the number of elements that can be bypassed from a sequence and then return the remaining elements.
  * takeCount `integer`: The take count , which specifies the number of elements that can be returned from a sequence.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Services](#services)

### services_delete
Deletes a service which is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_delete({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service which needs to be deleted.
  * confirm `boolean`: Indicates if the service will be permanently deleted or disabled. True indicates that the service will be permanently deleted and False indicates that the service will be marked disabled and then deleted after 30 days, if it is not re-registered.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### services_get
Gets the details of a service for a tenant having Azure AD Premium license and is onboarded to Azure Active Directory Connect Health.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_get({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceProperties](#serviceproperties)

### services_update
Updates the service properties of an onboarded service.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_update({
  "serviceName": "",
  "service": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service which needs to be deleted.
  * service **required** [ServiceProperties](#serviceproperties)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceProperties](#serviceproperties)

### services_getTenantWhitelisting
Checks if the tenant, to which a service is registered, is whitelisted to use a feature.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_getTenantWhitelisting({
  "serviceName": "",
  "featureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * featureName **required** `string`: The name of the feature.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Result](#result)

### services_listAlerts
Gets the alerts for a given service.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listAlerts({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The alert property filter to apply.
  * state `string`: The alert state to query for.
  * from `string`: The start date to query for.
  * to `string`: The end date till when to query for.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Alerts](#alerts)

### services_getFeatureAvailibility
Checks if the service has all the pre-requisites met to use a feature.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_getFeatureAvailibility({
  "serviceName": "",
  "featureName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * featureName **required** `string`: The name of the feature.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Result](#result)

### services_listExportErrors
Gets the count of latest AAD export errors.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listExportErrors({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ErrorCounts](#errorcounts)

### services_listExportErrorsV2
 Gets the categorized export errors.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listExportErrorsV2({
  "serviceName": "",
  "errorBucket": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * errorBucket **required** `string`: The error category to query for.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MergedExportErrors](#mergedexporterrors)

### services_listExportStatus
Gets the export status.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listExportStatus({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ExportStatuses](#exportstatuses)

### services_addAlertFeedback
Adds an alert feedback submitted by customer.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_addAlertFeedback({
  "serviceName": "",
  "alertFeedback": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * alertFeedback **required** [AlertFeedback](#alertfeedback)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [AlertFeedback](#alertfeedback)

### services_listAlertFeedback
Gets a list of all alert feedback for a given tenant and alert type.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listAlertFeedback({
  "serviceName": "",
  "shortName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * shortName **required** `string`: The name of the alert.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [AlertFeedbacks](#alertfeedbacks)

### services_listMetricMetadata
Gets the service related metrics information.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listMetricMetadata({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The metric metadata property filter to apply.
  * serviceName **required** `string`: The name of the service.
  * perfCounter `boolean`: Indicates if only performance counter metrics are requested.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricMetadataList](#metricmetadatalist)

### services_getMetricMetadata
Gets the service related metrics information.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_getMetricMetadata({
  "serviceName": "",
  "metricName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricMetadata](#metricmetadata)

### services_getMetricMetadataForGroup
Gets the service related metrics for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_getMetricMetadataForGroup({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * groupKey `string`: The group key
  * fromDate `string`: The start date.
  * toDate `string`: The end date.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricSets](#metricsets)

### service_getMetrics
Gets the server related metrics for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.service_getMetrics({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * groupKey `string`: The group key
  * fromDate `string`: The start date.
  * toDate `string`: The end date.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricSets](#metricsets)

### services_listMetricsAverage
Gets the average of the metric values for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listMetricsAverage({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Metrics](#metrics)

### services_listMetricsSum
Gets the sum of the metric values for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listMetricsSum({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Metrics](#metrics)

### services_updateMonitoringConfiguration
Updates the service level monitoring configuration.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_updateMonitoringConfiguration({
  "serviceName": "",
  "configurationSetting": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * configurationSetting **required** [Item](#item)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### services_listMonitoringConfigurations
Gets the service level monitoring configurations.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listMonitoringConfigurations({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Items](#items)

### services_listUserBadPasswordReport
Gets the bad password login attempt report for an user


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listUserBadPasswordReport({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * dataSource `string`: The source of data, if its test data or customer data.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ErrorReportUsersEntries](#errorreportusersentries)

### services_listAllRiskyIpDownloadReport
Gets all Risky IP report URIs for the last 7 days.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listAllRiskyIpDownloadReport({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [RiskyIPBlobUris](#riskyipbloburis)

### services_listCurrentRiskyIpDownloadReport
Initiate the generation of a new Risky IP report. Returns the URI for the new one.


```js
azure_adhybridhealthservice_adhybridhealthservice.services_listCurrentRiskyIpDownloadReport({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [RiskyIPBlobUris](#riskyipbloburis)

### serviceMembers_list
Gets the details of the servers, for a given service, that are onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_list({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The server property filter to apply.
  * dimensionType `string`: The server specific dimension.
  * dimensionSignature `string`: The value of the dimension.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMembers](#servicemembers)

### serviceMembers_add
Onboards  a server, for a given service, to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_add({
  "serviceName": "",
  "serviceMember": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service under which the server is to be onboarded.
  * serviceMember **required** [ServiceMember](#servicemember)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMember](#servicemember)

### serviceMembers_delete
Deletes a server that has been onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_delete({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * confirm `boolean`: Indicates if the server will be permanently deleted or disabled. True indicates that the server will be permanently deleted and False indicates that the server will be marked disabled and then deleted after 30 days, if it is not re-registered.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### serviceMembers_get
Gets the details of a server, for a given service, that are onboarded to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_get({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceMember](#servicemember)

### serviceMembers_listAlerts
Gets the details of an alert for a given service and server combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listAlerts({
  "serviceMemberId": "",
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceMemberId **required** `string`: The server Id for which the alert details needs to be queried.
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The alert property filter to apply.
  * state `string`: The alert state to query for.
  * from `string`: The start date to query for.
  * to `string`: The end date till when to query for.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Alerts](#alerts)

### serviceMembers_listCredentials
Gets the credentials of the server which is needed by the agent to connect to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listCredentials({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * $filter `string`: The property filter to apply.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [Credentials](#credentials)

### serviceMembers_deleteData
Deletes the data uploaded by the server to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_deleteData({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### serviceMembers_listDataFreshness
Gets the last time when the server uploaded data to Azure Active Directory Connect Health Service.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listDataFreshness({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [DataFreshnessDetails](#datafreshnessdetails)

### serviceMembers_listExportStatus
Gets the export status.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listExportStatus({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ExportStatuses](#exportstatuses)

### serviceMembers_listGlobalConfiguration
Gets the global configuration.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_listGlobalConfiguration({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [GlobalConfigurations](#globalconfigurations)

### serviceMembers_getConnectorMetadata
Gets the list of connectors and run profile names.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_getConnectorMetadata({
  "serviceName": "",
  "serviceMemberId": "",
  "metricName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The service member id.
  * metricName **required** `string`: The name of the metric.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ConnectorMetadata](#connectormetadata)

### serviceMembers_getMetrics
Gets the server related metrics for a given metric and group combination.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_getMetrics({
  "serviceName": "",
  "metricName": "",
  "groupName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * metricName **required** `string`: The metric name
  * groupName **required** `string`: The group name
  * serviceMemberId **required** `string`: The server id.
  * groupKey `string`: The group key
  * fromDate `string`: The start date.
  * toDate `string`: The end date.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [MetricSets](#metricsets)

### serviceMembers_getServiceConfiguration
Gets the service configuration.


```js
azure_adhybridhealthservice_adhybridhealthservice.serviceMembers_getServiceConfiguration({
  "serviceName": "",
  "serviceMemberId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The name of the service.
  * serviceMemberId **required** `string`: The server Id.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ServiceConfiguration](#serviceconfiguration)



## Definitions

### AdditionalInformation
* AdditionalInformation `object`: The additional information for a property.
  * hasProperties `boolean`: Indicates if properties are present or not.
  * properties `object`: The list of properties which are included in the additional information.
    * items [Item](#item)
  * titleName `string`: The title name for the property.
  * titleValue `string`: The title value for the property.

### AddsConfiguration
* AddsConfiguration `object`: The list of key value properties.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of configuration.
  * value `array`: The value returned by the operation.
    * items [Item](#item)

### AddsServiceMember
* AddsServiceMember `object`: The server details for ADDS service.
  * activeAlerts `integer`: The total number of alerts that are currently active for the server.
  * additionalInformation `string`: The additional information, if any, for the server.
  * addsRoles `array`: The list of ADDS roles.
    * items `string`
  * createdDate `string`: The date time , in UTC, when the server was onboarded to Azure Active Directory Connect Health.
  * dcTypes `array`: The list of domain controller types.
    * items `string`
  * dimensions `array`: The server specific configuration related dimensions.
    * items [Item](#item)
  * disabled `boolean`: Indicates if the server is disabled or not. 
  * disabledReason `integer`: The reason for disabling the server.
  * domainName `string`: The domain name.
  * gcReachable `boolean`: Indicates if the global catalog for this domain is reachable or not.
  * installedQfes `array`: The list of installed QFEs for the server.
    * items [Hotfix](#hotfix)
  * isAdvertising `boolean`: Indicates if the Dc is advertising or not.
  * lastDisabled `string`: The date and time , in UTC, when the server was last disabled.
  * lastReboot `string`: The date and time, in UTC, when the server was last rebooted.
  * lastServerReportedMonitoringLevelChange `string`: The date and time, in UTC, when the server's data monitoring configuration was last changed.
  * lastUpdated `string`: The date and time, in UTC, when the server properties were last updated.
  * machineId `string`: The id of the machine.
  * machineName `string`: The name of the server.
  * monitoringConfigurationsComputed `array`: The monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Item](#item)
  * monitoringConfigurationsCustomized `array`: The customized monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Item](#item)
  * osName `string`: The name of the operating system installed in the machine.
  * osVersion `string`: The version of the operating system installed in the machine.
  * pdcReachable `boolean`: Indicates if the primary domain controller is reachable or not.
  * properties `array`: Server specific properties.
    * items [Item](#item)
  * recommendedQfes `array`: The list of recommended hotfixes for the server.
    * items [Hotfix](#hotfix)
  * resolvedAlerts `integer`: The total count of alerts that are resolved for this server.
  * role `string`: The service role that is being monitored in the server.
  * serverReportedMonitoringLevel `string` (values: Partial, Full, Off): The monitoring level reported by the server.
  * serviceId `string`: The service id to whom this server belongs.
  * serviceMemberId `string`: The id of the server.
  * siteName `string`: The site name.
  * status `string`: The health status of the server.
  * sysvolState `boolean`: Indicates if the SYSVOL state is healthy or not.
  * tenantId `string`: The tenant id to whom this server belongs.

### AddsServiceMembers
* AddsServiceMembers `object`: The list of  ADDS service members.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of service members.
  * value `array`: The value returned by the operation.
    * items [AddsServiceMember](#addsservicemember)

### Agent
* Agent `object`: The agent details.
  * agentVersion `string`: The agent version.
  * createdDate `string`: The date and time, in UTC, when the agent was created.
  * credential `object`: The agent credential details.
    * items [Credential](#credential)
  * key `string`:  The connector hash key.
  * machineId `string`: The machine Id.
  * machineName `string`: The machine name.
  * tenantId `string`: The tenant Id.

### Alert
* Alert `object`:  The alert details indicating an issue with service or server.
  * activeAlertProperties `array`: The active alert properties.
    * items [Item](#item)
  * additionalInformation `array`: Additional information related to the alert.
    * items [AdditionalInformation](#additionalinformation)
  * alertId `string`: The alert Id.
  * createdDate `string`: The date and time,in UTC,when the alert was created.
  * description `string`: The alert description.
  * displayName `string`: The display name for the alert.
  * lastUpdated `string`: The date and time, in UTC, when the alert was last updated.
  * level `string` (values: Warning, Error, PreWarning): The alert level which indicates the severity of the alert.
  * monitorRoleType `string`: The monitoring role type for which the alert was raised.
  * relatedLinks `array`: The help links to get more information related to the alert.
    * items [HelpLink](#helplink)
  * remediation `string`: The alert remediation.
  * resolvedAlertProperties `array`: The resolved alert properties.
    * items [Item](#item)
  * resolvedDate `string`: The date and time, in UTC, when the alert was resolved.
  * scope `string`: The scope of the alert. Indicates if it is a service or a server related alert.
  * serviceId `string`: The service Id.
  * serviceMemberId `string`: The server Id.
  * shortName `string`: The alert short name.
  * state `string` (values: Active, ResolvedByPositiveResult, ResolvedManually, ResolvedByTimer, ResolvedByStateChange): The alert state which can be either active or resolved with multiple resolution types.
  * tenantId `string`: The tenant Id.

### AlertFeedback
* AlertFeedback `object`: The alert feedback details.
  * comment `string`: Additional comments related to the alert.
  * consentedToShare `boolean`: Indicates if the alert feedback can be shared from product team.
  * createdDate `string`: The date and time,in UTC,when the alert was created.
  * feedback `string`: The feedback for the alert which indicates if the customer likes or dislikes the alert.
  * level `string`: The alert level which indicates the severity of the alert.
  * serviceMemberId `string`: The server Id of the alert.
  * shortName `string`: The alert short name.
  * state `string`: The alert state which can be either active or resolved with multiple resolution types.

### AlertFeedbacks
* AlertFeedbacks `object`: The list of alert feedback.
  * value `array`: The value returned by the operation.
    * items [AlertFeedback](#alertfeedback)

### Alerts
* Alerts `object`: The list of alerts for a service.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of alert elements.
  * value `array`: The value returned by the operation.
    * items [Alert](#alert)

### AssociatedObject
* AssociatedObject `object`: Object that hold sync object details.
  * displayName `string`: The display name of the object.
  * distinguishedName `string`: The distinguished name of the object.
  * lastDirSyncTime `string`: The last dirSync time.
  * mail `string`: The email of the object.
  * objectGuid `string`: The object guid.
  * objectType `string`: The object type.
  * onpremisesUserPrincipalName `string`: The On-premises UPN.
  * proxyAddresses `string`: The proxy addresses.
  * sourceAnchor `string`: The source anchor.
  * sourceOfAuthority `string`: The source of authority.
  * timeOccurred `string`:  The time of the error.
  * userPrincipalName `string`:  The UPN.

### AttributeDelta
* AttributeDelta `object`: The delta attributes.
  * multiValued `boolean`: Indicates if the attribute delta is multivalued or not.
  * name `string`: The name of the attribute delta.
  * operationType `string` (values: Undefined, Add, Replace, Update, Delete): The attribute delta operation type.
  * valueType `string` (values: Undefined, Dn, Binary, String, Integer, Boolean): The value type.
  * values `array`: The delta values.
    * items [ValueDelta](#valuedelta)

### AttributeMapping
* AttributeMapping `object`: The attribute mapping details.
  * contextId `string`: The context Id.
  * destinationAttribute `string`: The destination attribute.
  * mappingSource [AttributeMppingSource](#attributemppingsource)
  * type `string` (values: Constant, Direct, DnPart, Script): The attribute mapping type.

### AttributeMppingSource
* AttributeMppingSource `object`: The attribute mapping source.
  * constantValue `string`: The constant value.
  * dnPart `integer`: The value for dn part.
  * scriptContext `string`: The script context.
  * sourceAttribute `array`: The source attribute.
    * items `string`

### ChangeNotReimported
* ChangeNotReimported `object`: The changes which are not re-imported.
  * delta [ChangeNotReimportedDelta](#changenotreimporteddelta)
  * entry [ChangeNotReimportedEntry](#changenotreimportedentry)

### ChangeNotReimportedDelta
* ChangeNotReimportedDelta `object`: The delta in a change that is not re-imported.
  * anchor `string`: The anchor.
  * attributes `array`: The attributes.
    * items [AttributeDelta](#attributedelta)
  * dnAttributes `array`: The delta attributes for distinguished names.
    * items [AttributeDelta](#attributedelta)
  * operationType `string` (values: Undefined, None, Add, Replace, Update, Delete, Obsolete, DeleteAdd): The operation type.

### ChangeNotReimportedEntry
* ChangeNotReimportedEntry `object`: The object entry in a change that is not re-imported.
  * anchor `string`: The anchor.
  * attributes `array`: The attributes.
    * items [AttributeDelta](#attributedelta)
  * dn `string`: The distinguished name.
  * dnAttributes `array`: The delta attributes for distinguished names.
    * items [AttributeDelta](#attributedelta)
  * objectClasses `array`: The list of object classes.
    * items `string`
  * parentAnchor `string`: The parent anchor.
  * primaryObjectClass `string`: The primary object class.

### Connector
* Connector `object`: The connect details.
  * attributesIncluded `array`: The attribute inclusion list of the connector.
    * items `string`
  * classesIncluded `array`: The class inclusion list of the connector.
    * items `string`
  * connectorId `string`: The connector Id.
  * description `string`: The connector description.
  * id `string`: The connector Id.
  * name `string`: The connector name.
  * partitions `array`: The partitions of the connector.
    * items [Partition](#partition)
  * passwordHashSyncConfiguration `object`: The password hash synchronization configuration of the connector.
    * items [PasswordHashSyncConfiguration](#passwordhashsyncconfiguration)
  * passwordManagementSettings `object`: The password management settings of the connector.
    * items [PasswordManagementSettings](#passwordmanagementsettings)
  * runProfiles `array`: The run profiles of the connector.
    * items [RunProfile](#runprofile)
  * schemaXml `string`: The schema xml for the connector.
  * timeCreated `string`: The date and time when this connector was created.
  * timeLastModified `string`: The date and time when this connector was last modified.
  * type `string`: The connector type.
  * version `integer`: The connector version

### ConnectorConnectionError
* ConnectorConnectionError `object`: The connector connection error.
  * connectorId `string`: The connector Id.
  * errorCode `string`: The error code.
  * id `string`: The error Id.
  * message `string`: The message for the connection error.
  * runStepResultId `string`: The run step result Id.
  * server `string`: The server where the connection error happened.
  * timeOccured `string`: The time when the connection error occurred.
  * type `string`: The type of error.

### ConnectorConnectionErrors
* ConnectorConnectionErrors `object`: The list of connector connection errors.
  * value `array`: The value returned by the operation.
    * items [ConnectorConnectionError](#connectorconnectionerror)

### ConnectorMetadata
* ConnectorMetadata `object`: Gets the list of connectors and run profile names.
  * connectors `array`: The list of connectors.
    * items [ConnectorMetadataDetails](#connectormetadatadetails)
  * runProfileNames `array`: The list of run profile names.
    * items `string`

### ConnectorMetadataDetails
* ConnectorMetadataDetails `object`: Details of the connector.
  * connectorDisplayName `string`: The Connector Display Name
  * connectorId `string`: The Connector Id.

### ConnectorObjectError
* ConnectorObjectError `object`: The connector object error.
  * anchor `string`: The name for the anchor of the object.
  * attributeName `string`: The attribute name of the object.
  * columnNumber `integer`: The column number for the object error.
  * connectorId `string`: The connector Id.
  * dn `string`: The distinguished name of the object.
  * entryNumber `integer`: The entry number for object error occurred.
  * errorCode `string`: The error code.
  * id `string`: The error Id.
  * lineNumber `integer`: The line number for the object error.
  * message `string`: The message for the object error.
  * runStepResultId `string`: The run step result Id.
  * serverErrorDetail `string`: The server side error details.
  * type `string`: The type of error.
  * values `array`: The value corresponding to attribute name.
    * items `string`

### ConnectorObjectErrors
* ConnectorObjectErrors `object`: The list of connector object errors.
  * value `array`: The value returned by the operation.
    * items [ConnectorObjectError](#connectorobjecterror)

### Connectors
* Connectors `object`: The list of connects for a service.
  * value `array`: The value returned by the operation.
    * items [Connector](#connector)

### Credential
* Credential `object`: The credential for a given server.
  * credentialData `array`: The credential data.
    * items `string`
  * identifier `string`: The credential identifier.
  * type `string`: The type of credential.

### Credentials
* Credentials `object`: The list of agent credentials.
  * value `array`: The value returned by the operation.
    * items [Credential](#credential)

### DataFreshnessDetails
* DataFreshnessDetails `object`: The data freshness details for the server.
  * value `array`: The value returned by the operation.
    * items [Item](#item)

### Dimension
* Dimension `object`: The connector object error.
  * activeAlerts `integer`: The count of alerts that are currently active for the service.
  * additionalInformation `string`: The additional information related to the service.
  * displayName `string`: The display name of the service.
  * health `string` (values: Healthy, Warning, Error, NotMonitored, Missing): The health status for the domain controller.
  * lastUpdated `string`: The date or time , in UTC, when the service properties were last updated.
  * resolvedAlerts `integer`: The total count of alerts that has been resolved for the service.
  * signature `string`: The signature of the service.
  * simpleProperties `object`: List of service specific configuration properties.
    * items [Item](#item)
  * type `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.

### Dimensions
* Dimensions `object`: The list of dimensions.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of dimensions.
  * value `array`: The value returned by the operation.
    * items [Dimension](#dimension)

### Display
* Display `object`: Displays the details related to operations supported by Azure Active Directory Connect Health.
  * description `string`:  The description for the operation.
  * operation `string`: The details of the operation.
  * provider `string`: The provider name.

### ErrorCount
* ErrorCount `object`: The error count details.
  * count `integer`: The error count.
  * errorBucket `string`: The error bucket.
  * truncated `boolean`: Indicates if the error count is truncated or not.

### ErrorCounts
* ErrorCounts `object`: The list of error counts.
  * value `array`: The value returned by the operation.
    * items [ErrorCount](#errorcount)

### ErrorDetail
* ErrorDetail `object`: The error details.
  * description `string`: The error description.
  * detail `string`: Additional details related to the error.
  * kbUrl `string`: The knowledge base article url which contains more information about the error.
  * objectWithSyncError [MergedExportError](#mergedexporterror)
  * objectsWithSyncError [ObjectWithSyncError](#objectwithsyncerror)

### ErrorReportUsersEntries
* ErrorReportUsersEntries `object`: The list of bad password log in attempt entries.
  * value `array`: The value returned by the operation.
    * items [ErrorReportUsersEntry](#errorreportusersentry)

### ErrorReportUsersEntry
* ErrorReportUsersEntry `object`: The bad password login attempt details.
  * ipAddress `string`: The Ip address corresponding to the last error event.
  * lastUpdated `string`: The date and time when the last error event was logged.
  * totalErrorAttempts `integer`: The total count of specific error events.
  * uniqueIpAddresses `string`: The list of unique IP addresses.
  * userId `string`: The user ID value.

### ExportError
* ExportError `object`: The export error details.
  * aadDisplayName `string`: The AAD side display name
  * aadDistinguishedName `string`: The AAD side distinguished name for the object.
  * aadMail `string`: The AAD side email for the object.
  * aadObjectGuid `string`: The AAD side object guid.
  * aadObjectType `string`: The AAD side object type.
  * aadSourceOfAuthority `string`: The AAD side source of authority for the object.
  * aadUserPrincipalName `string`: The AAD side user principal name.
  * adDisplayName `string`: The display name for the AD object.
  * adDistinguishedName `string`: The distinguished name for the AD object.
  * adMail `string`: The email for the AD object.
  * adObjectGuid `string`: The AD object guid.
  * adObjectType `string`: The AD object type
  * adSourceAnchor `string`: The AD source anchor.
  * adSourceOfAuthority `string`: The source of authority for the AD object.
  * adUserPrincipalName `string`: The user principal name for the AD object.
  * attributeMultiValue `boolean`: Indicates if the attribute is multi valued or not.
  * attributeName `string`: The attribute name.
  * attributeValue `string`: The attribute value.
  * cloudAnchor `string`: The name of the cloud anchor.
  * connectorId `string`: The connector Id.
  * csObjectId `string`: The cloud object Id.
  * dn `string`: The distinguished name.
  * errorCode `string`: The error code.
  * id `string`: The error Id.
  * lastDirSyncTime `string`: The date and time of last sync run.
  * maxLimit `string`: The maximum limit.
  * message `string`: The export error message.
  * minLimit `string`: The minimum limit.
  * modifiedAttributeValue `string`: The modified attribute value.
  * objectIdConflict `string`: The object Id with which there was an attribute conflict.
  * retryCount `integer`: The retry count.
  * runStepResultId `string`: The run step result Id.
  * samAccountName `string`: The SAM account name.
  * serverErrorDetail `string`: The server error detail.
  * timeFirstOccured `string`: The date and time when the export error first occurred.
  * timeOccured `string`: The date and time of occurrence.
  * type `string`: The type of error.

### ExportErrors
* ExportErrors `object`: The list of export errors.
  * value `array`: The value returned by the operation.
    * items [ExportError](#exporterror)

### ExportStatus
* ExportStatus `object`: The details of the export status.
  * endTime `string`: The date and time when the export ended.
  * runStepResultId `string`: The run step result Id.
  * serviceId `string`: The id of the service for whom the export status is being reported.
  * serviceMemberId `string`: The server Id for whom the export status is being reported.

### ExportStatuses
* ExportStatuses `object`: The list of export statuses.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of service elements.
  * value `array`: The value returned by the operation.
    * items [ExportStatus](#exportstatus)

### ExtensionErrorInfo
* ExtensionErrorInfo `object`: The extension error details.
  * callStack `string`: The call stack for the error.
  * extensionContext `string`: The extension context.
  * extensionName `string`: The extension name.

### ForestSummary
* ForestSummary `object`: The forest summary for an ADDS domain.
  * domainCount `integer`: The domain count.
  * domains `array`: The list of domain controller names.
    * items `string`
  * forestName `string`: The forest name.
  * monitoredDcCount `integer`: The number of domain controllers that are monitored by Azure Active Directory Connect Health.
  * siteCount `integer`: The site count.
  * sites `array`: The list of site names.
    * items `string`
  * totalDcCount `integer`: The total domain controllers.

### GlobalConfiguration
* GlobalConfiguration `object`: The global configuration settings.
  * featureSet `array`: The list of additional feature sets.
    * items [Item](#item)
  * numSavedPwdEvent `integer`: The number of saved password events.
  * passwordSyncEnabled `boolean`: Indicates if password sync is enabled or not.
  * schemaXml `string`: The schema for the configuration.
  * version `integer`: The version for the global configuration.

### GlobalConfigurations
* GlobalConfigurations `object`: The list of global configurations.
  * value `array`: The value returned by the operation.
    * items [GlobalConfiguration](#globalconfiguration)

### HelpLink
* HelpLink `object`: The help link which contains more information related to an alert.
  * title `string`: The title for the link.
  * url `string`: The url for the help document.

### Hotfix
* Hotfix `object`: The details of the hotfix installed in the server.
  * installedDate `string`: The date and time, in UTC, when the KB was installed in the server.
  * kbName `string`: The name of the hotfix KB.
  * link `string`: The link to the KB Article.

### Hotfixes
* Hotfixes `object`: The list of hotfixes installed in the server.
  * value `array`: The value returned by the operation.
    * items [Hotfix](#hotfix)

### ImportError
* ImportError `object`: The import error details.
  * algorithmStepType `string` (values: Undefined, Staging, ConnectorFilter, Join, Projection, ImportFlow, Provisioning, ValidateConnectorFilter, Deprovisioning, ExportFlow, MvDeletion, Recall, MvObjectTypeChange): The operation type specific  to error reporting.
  * changeNotReimported [ChangeNotReimported](#changenotreimported)
  * connectorId `string`: The connector Id.
  * csObjectId `string`: The object Id.
  * dn `string`: The distinguished name.
  * extensionErrorInfo [ExtensionErrorInfo](#extensionerrorinfo)
  * id `string`: The error Id.
  * retryCount `integer`: The retry count.
  * ruleErrorInfo [RuleErrorInfo](#ruleerrorinfo)
  * runStepResultId `string`: The run step result Id.
  * timeFirstOccurred `string`: The time when the import error first occurred.
  * timeOccurred `string`: The time when the import error occurred.
  * type `string`: The type of error.

### ImportErrors
* ImportErrors `object`: The list of import errors.
  * value `array`: The value returned by the operation.
    * items [ImportError](#importerror)

### InboundReplicationNeighbor
* InboundReplicationNeighbor `object`: The replication summary for the domain controller inbound neighbor.
  * additionalInfo `string`: The additional details.
  * consecutiveFailureCount `integer`: The number of consecutive failure counts.
  * errorDescription `string`: The error description.
  * errorTitle `string`: The error title.
  * fixDetails `string`: The details of the fix.
  * fixLink `string`: The link for the fix of the error.
  * lastAttemptedSync `string`: The last time a sync was attempted on the domain controller.
  * lastErrorCode `integer`: The last error code.
  * lastErrorMessage `string`: The error message of the last error.
  * lastSuccessfulSync `string`: The last time when a successful sync happened.
  * namingContext `string`: The naming context.
  * sourceDomainController `string`: The name of the source domain controller.
  * status `integer`: The health status for the domain controller

### InboundReplicationNeighbors
* InboundReplicationNeighbors `object`: The list of replication summary for the domain controller inbound neighbor.
  * value `array`: The details of inbound replication neighbors.
    * items [InboundReplicationNeighbor](#inboundreplicationneighbor)

### Item
* Item `object`: The key value pair for properties.
  * key `string`: The key for the property.
  * value `string`: The value for the key.

### Items
* Items `object`: The list of key value properties.
  * value `array`: The value returned by the operation.
    * items [Item](#item)

### MergedExportError
* MergedExportError `object`: The merged export error.
  * attributeName `string`: The attribute name.
  * attributeValue `string`: The attribute value.
  * createdDate `string`: The date and time, in UTC, when the error was created.
  * csObjectId `string`:  the cs object Id.
  * dn `string`: the DN of the object.
  * existingObject [AssociatedObject](#associatedobject)
  * exportErrorStatus `integer`: The export error status.
  * id `string`: The error Id.
  * incomingObject [AssociatedObject](#associatedobject)
  * incomingObjectDisplayName `string`: The incoming object display name.
  * incomingObjectType `string`: The incoming object type.
  * mergedEntityId `string`: The merged entity Id.
  * modifiedOrRemovedAttributeValue `string`: The modified or removed attribute value.
  * runStepResultId `string`: The run step result Id.
  * samAccountName `string`: The sam account name.
  * serverErrorDetail `string`: The server error details.
  * serviceId `string`: The service Id.
  * serviceMemberId `string`: The server Id.
  * timeFirstOccurred `string`: The time when the error first occurred.
  * timeOccurred `string`: The date and time when the error occurred.
  * type `string`: The type of the error.
  * userPrincipalName `string`: The user principal name

### MergedExportErrors
* MergedExportErrors `object`: The list of export errors.
  * value `array`: The value returned by the operation.
    * items [MergedExportError](#mergedexporterror)

### MetricGroup
* MetricGroup `object`:  The metric group details.
  * displayName `string`: The display name for the group.
  * invisibleForUi `boolean`: indicates if the metric group is displayed in Azure Active Directory Connect Health UI.
  * key `string`: The key for the group.

### MetricMetadata
* MetricMetadata `object`: The metric meta data
  * displayName `string`: The display name for the metric.
  * groupings `array`: The groupings for the metrics.
    * items [MetricGroup](#metricgroup)
  * isDefault `boolean`: Indicates if the metric is a default metric or not.
  * isDevOps `boolean`: Indicates if the metric is visible to DevOps or not.
  * isPerfCounter `boolean`: Indicates if the metric is a performance counter metric or not.
  * kind `string`: Indicates whether the dashboard to represent the metric is a line, bar,pie, area or donut chart.
  * maxValue `integer`: The maximum value.
  * metricName `string`: The metric name
  * metricsProcessorClassName `string`: The name of the class which retrieve and process the metric.
  * minValue `integer`: The minimum value.
  * valueKind `string`: Indicates if the metrics is a rate,value, percent or duration type.

### MetricMetadataList
* MetricMetadataList `object`: The list of metric metadata.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of service elements.
  * value `array`: The value returned by the operation.
    * items [MetricMetadata](#metricmetadata)

### MetricSet
* MetricSet `object`:  The set of metric values. Example of a MetricSet are Values of token requests for a Server1 or RelyingParty1.
  * setName `string`: The name of the set.
  * values `array`: The list of the metric values.
    * items `integer`

### MetricSets
* MetricSets `object`: The metrics data represented set.
  * sets `array`: The list of metric set.
    * items [MetricSet](#metricset)
  * timeStamps `array`: The list of timestamps for each metric in the metric set.
    * items `string`

### Metrics
* Metrics `object`: The list of metric items.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of metrics.
  * value `array`: The value returned by the operation.
    * items [Item](#item)

### ModuleConfiguration
* ModuleConfiguration `object`: The module configuration as required by the Agent service.
  * agentService `string`: The name of agent service.
  * moduleName `string`: The name of the module for which the configuration is applicable.
  * properties `object`: The key value pairs of properties required for configuration.

### ModuleConfigurations
* ModuleConfigurations `object`: The list of module configurations.
  * value `array`: The value returned by the operation.
    * items [ModuleConfiguration](#moduleconfiguration)

### ObjectWithSyncError
* ObjectWithSyncError `object`: The objects with sync errors.
  * attributeMultiValues `boolean`: Indicates if the attribute is multi-valued or not.
  * attributeName `string`: The attribute name.
  * attributeValue `string`: The attribute value.
  * displayName `string`: The display name.
  * distinguishedName `string`: The distinguished name.
  * errorType `string`: The error type.
  * mail `string`: The email.
  * maxLimit `string`: The maximum limit.
  * minLimit `string`: The minimum limit.
  * modififedValue `string`: The modified value.
  * objectGuid `string`: The object guid.
  * objectType `string`: The object type.
  * sourceAnchor `string`: The source anchor.
  * sourceOfAuthority `string`: The source of authority.
  * timeOccured `string`: The date and time of occurrence.
  * userPrincipalName `string`: The user principal name.

### Operation
* Operation `object`: The details of the operation.
  * display `object`: The display details for the operation.
    * items [Display](#display)
  * name `string`: The name of the operation.

### OperationListResponse
* OperationListResponse `object`: Lists all of the available REST API operations for Azure Active Directory Connect Health.
  * continuationToken `string`: The continuation token to get next set of operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * totalCount `integer`: The total count of operations.
  * value `array`: List of operations supported by the Microsoft.ADHybridHealthService resource provider.
    * items [Operation](#operation)

### Partition
* Partition `object`: Describes the partition in Synchronization service.
  * dn `string`: The distinguished name for the partition.
  * enabled `boolean`: Indicates if the partition object is selected or not.
  * id `string`: The partition Id.
  * isDomain `boolean`: Indicates if the partition is a domain or not.
  * name `string`: The name of the partition.
  * partitionScope [PartitionScope](#partitionscope)
  * timeCreated `string`: The date and time when the partition is created.
  * timeLastModified `string`: The time and date when the partition was last modified.
  * type `string`: The partition type.

### PartitionScope
* PartitionScope `object`: The connector partition scope.
  * containersExcluded `array`: The list of containers excluded.
    * items `string`
  * containersIncluded `array`: The list of containers included.
    * items `string`
  * isDefault `boolean`: Indicates if the partition scope is default or not.
  * objectClasses `array`: The in-scope object classes.
    * items `string`

### PasswordHashSyncConfiguration
* PasswordHashSyncConfiguration `object`: The password has synchronization configuration settings.
  * enabled `boolean`: Indicates if the password hash synchronization configuration settings is enabled.
  * target `string`: The target.

### PasswordManagementSettings
* PasswordManagementSettings `object`: The password management settings.
  * connectTo `string`: Connection point of password management.
  * connectionTimeout `integer`: Connection timeout for password extension.
  * enabled `boolean`: Indicates if the password extension is enabled.
  * extensionFilePath `string`: The file path of the password management extension.
  * maximumRetryCount `integer`: The maximum number of retries.
  * requiresSecureConnection `boolean`: Indicates if a secure connection is required for password management.
  * retryIntervalInSeconds `integer`: The time between retries.
  * supportedPasswordOperations `string` (values: Undefined, Set, Change): The supported password operations.
  * unlockAccount `boolean`: Indicates if accounts should be unlocked when resetting password.
  * user `string`: User to execute password extension.

### ReplicationDetailsList
* ReplicationDetailsList `object`: The list of replication details.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of replication detail elements.
  * value `array`: The value returned by the operation.
    * items [ReplicationSummary](#replicationsummary)

### ReplicationStatus
* ReplicationStatus `object`:  Replication summary for a domain controller.
  * errorDcCount `integer`: The total number of domain controllers with error in a given forest.
  * forestName `string`: The forest name.
  * totalDcCount `integer`: The total number of domain controllers for a given forest.

### ReplicationSummary
* ReplicationSummary `object`: The replication summary for a domain controller.
  * domain `string`: The domain name for a given domain controller.
  * inboundNeighborCollection `array`: List of individual domain controller neighbor's inbound replication status.
    * items [InboundReplicationNeighbor](#inboundreplicationneighbor)
  * lastAttemptedSync `string`: The last time when a sync was attempted for a given domain controller.
  * lastSuccessfulSync `string`: The time when the last successful sync happened for a given domain controller.
  * site `string`: The site name for a given domain controller.
  * status `integer`: The health status for a domain controller.
  * targetServer `string`: The domain controller name.

### ReplicationSummaryList
* ReplicationSummaryList `object`: The list of replication summary details.
  * value `array`: The value returned by the operation.
    * items [ReplicationSummary](#replicationsummary)

### Result
* Result `object`: The result for an operation.
  * value `boolean`: The value.

### RiskyIPBlobUri
* RiskyIPBlobUri `object`: The blob uri pointing to Risky IP Report.
  * blobCreateDateTime `string`: Time at which the new Risky IP report was requested.
  * jobCompletionTime `string`: Time at which the blob creation job for the new Risky IP report was completed.
  * resultSasUri `string`: The blob uri for the report.
  * serviceId `string`: The service id for whom the report belongs to.
  * status `string`: Status of the Risky IP report generation.
  * tenantId `string`: The tenant id for whom the report belongs to.

### RiskyIPBlobUris
* RiskyIPBlobUris `object`: The list containing blob uris.
  * value `array`: The list of blob uris.
    * items [RiskyIPBlobUri](#riskyipbloburi)

### RuleErrorInfo
* RuleErrorInfo `object`: The error details in legacy rule processing.
  * attributeMapping [AttributeMapping](#attributemapping)
  * connectorId `string`: The connector Id.
  * connectorName `string`: The connector name.
  * csObjectId `string`: The object Id.
  * dn `string`: The distinguished name.

### RunProfile
* RunProfile `object`: Describes the run profile.
  * id `string`: The run profile Id.
  * name `string`: The run profile name
  * runSteps `array`: The run steps of the run profile.
    * items [RunStep](#runstep)

### RunProfiles
* RunProfiles `object`: The list of run profiles.
  * value `array`: The value returned by the operation.
    * items [RunProfile](#runprofile)

### RunStep
* RunStep `object`: The run step for a run profile.
  * batchSize `integer`: The batch size used by the run step.
  * objectDeleteLimit `integer`: The object deletion limit.
  * objectProcessLimit `integer`: The object processing limit.
  * operationType `integer`: The run step operation types.
  * pageSize `integer`: The page size of the run step.
  * partitionId `string`: The Id of the partition that a current run step operation is executing.
  * timeout `integer`: The operation timeout.

### ServiceConfiguration
* ServiceConfiguration `object`: The service configuration
  * serviceAccount `string`: The service account.
  * serviceType `integer`: The service type of the server.
  * sqlDatabaseName `string`: The SQL database.
  * sqlDatabaseSize `integer`: The SQL database size.
  * sqlEdition `string`: The SQL edition
  * sqlInstance `string`: The SQL instance details.
  * sqlServer `string`: The SQL server information.
  * sqlVersion `string`: The SQL version.
  * version `string`: The version of the sync service.

### ServiceMember
* ServiceMember `object`: The server properties for a given service.
  * activeAlerts `integer`: The total number of alerts that are currently active for the server.
  * additionalInformation `string`: The additional information, if any, for the server.
  * createdDate `string`: The date time , in UTC, when the server was onboarded to Azure Active Directory Connect Health.
  * dimensions `object`: The server specific configuration related dimensions.
    * items [Item](#item)
  * disabled `boolean`: Indicates if the server is disabled or not. 
  * disabledReason `integer`: The reason for disabling the server.
  * installedQfes `object`: The list of installed QFEs for the server.
    * items [Hotfix](#hotfix)
  * lastDisabled `string`: The date and time , in UTC, when the server was last disabled.
  * lastReboot `string`: The date and time, in UTC, when the server was last rebooted.
  * lastServerReportedMonitoringLevelChange `string`: The date and time, in UTC, when the server's data monitoring configuration was last changed.
  * lastUpdated `string`: The date and time, in UTC, when the server properties were last updated.
  * machineId `string`: The id of the machine.
  * machineName `string`: The name of the server.
  * monitoringConfigurationsComputed `object`: The monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Item](#item)
  * monitoringConfigurationsCustomized `object`: The customized monitoring configuration of the server which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Item](#item)
  * osName `string`: The name of the operating system installed in the machine.
  * osVersion `string`: The version of the operating system installed in the machine.
  * properties `object`: Server specific properties.
    * items [Item](#item)
  * recommendedQfes `object`: The list of recommended hotfixes for the server.
    * items [Hotfix](#hotfix)
  * resolvedAlerts `integer`: The total count of alerts that are resolved for this server.
  * role `string`: The service role that is being monitored in the server.
  * serverReportedMonitoringLevel `string` (values: Partial, Full, Off): The monitoring level reported by the server.
  * serviceId `string`: The service id to whom this server belongs.
  * serviceMemberId `string`: The id of the server.
  * status `string`: The health status of the server.
  * tenantId `string`: The tenant id to whom this server belongs.

### ServiceMembers
* ServiceMembers `object`: The list of servers that are onboarded for a given service.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of service elements.
  * value `array`: The value returned by the operation.
    * items [ServiceMember](#servicemember)

### ServiceProperties
* ServiceProperties `object`: The service properties for a given service.
  * activeAlerts `integer`: The count of alerts that are currently active for the service.
  * additionalInformation `string`: The additional information related to the service.
  * createdDate `string`: The date and time, in UTC, when the service was onboarded to Azure Active Directory Connect Health.
  * customNotificationEmails `array`: The list of additional emails that are configured to receive notifications about the service.
    * items `string`
  * disabled `boolean`: Indicates if the service is disabled or not.
  * displayName `string`: The display name of the service.
  * health `string`: The health of the service.
  * id `string`: The id of the service.
  * lastDisabled `string`: The date and time, in UTC, when the service was last disabled.
  * lastUpdated `string`: The date or time , in UTC, when the service properties were last updated.
  * monitoringConfigurationsComputed `object`: The monitoring configuration of the service which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Items](#items)
  * monitoringConfigurationsCustomized `object`: The customized monitoring configuration of the service which determines what activities are monitored by Azure Active Directory Connect Health.
    * items [Items](#items)
  * notificationEmailEnabled `boolean`: Indicates if email notification is enabled or not.
  * notificationEmailEnabledForGlobalAdmins `boolean`: Indicates if email notification is enabled for global administrators of the tenant.
  * notificationEmails `array`: The list of emails to whom service notifications will be sent.
    * items `string`
  * notificationEmailsEnabledForGlobalAdmins `boolean`: Indicates if email notification is enabled for global administrators of the tenant.
  * originalDisabledState `boolean`: Gets the original disable state.
  * resolvedAlerts `integer`: The total count of alerts that has been resolved for the service.
  * serviceId `string`: The id of the service.
  * serviceName `string`: The name of the service.
  * signature `string`: The signature of the service.
  * simpleProperties `object`: List of service specific configuration properties.
    * items [Items](#items)
  * tenantId `string`: The id of the tenant to which the service is registered to.
  * type `string`: The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService.

### Services
* Services `object`: The list of services for a given onboarded tenant.
  * continuationToken `string`: The continuation token for paginated calls.
  * nextLink `string`: The link used to get the next page of operations.
  * totalCount `integer`: The total count of service elements.
  * value `array`: The value returned by the operation.
    * items [ServiceProperties](#serviceproperties)

### TabularExportError
* TabularExportError `object`: The details for export error.
  * mergedEntityId `string`: The merged entity Id.
  * serviceId `string`: The service Id.
  * serviceMemberId `string`: The server Id.
  * tabularExportErrorData `string`: The export error data.

### Tenant
* Tenant `object`: The details of the onboarded tenant.
  * aadLicense `string`: The Azure Active Directory license of the tenant.
  * aadPremium `boolean`: Indicate if the tenant has Azure Active Directory Premium license or not.
  * agentAutoUpdate `boolean`: Indicates if the tenant is configured to automatically receive updates for Azure Active Directory Connect Health client side features.
  * alertSuppressionTimeInMins `integer`: The time in minutes after which an alert will be auto-suppressed.
  * consentedToMicrosoftDevOps `boolean`: Indicates if the tenant data can be seen by Microsoft through Azure portal.
  * countryLetterCode `string`: The country letter code of the tenant.
  * createdDate `string`: The date, in UTC, when the tenant was onboarded to Azure Active Directory Connect Health.
  * devOpsTtl `string`: The date and time, in UTC, till when the tenant data can be seen by Microsoft through Azure portal.
  * disabled `boolean`: Indicates if the tenant is disabled in Azure Active Directory Connect Health.
  * disabledReason `integer`: The reason due to which the tenant was disabled in Azure Active Directory Connect Health.
  * globalAdminsEmail `array`: The list of global administrators for the tenant.
    * items `string`
  * initialDomain `string`: The initial domain of the tenant.
  * lastDisabled `string`: The date and time, in UTC, when the tenant was last disabled in Azure Active Directory Connect Health.
  * lastVerified `string`: The date and time, in UTC, when the tenant onboarding status in Azure Active Directory Connect Health was last verified.
  * onboarded `boolean`: Indicates if the tenant is already onboarded to Azure Active Directory Connect Health.
  * onboardingAllowed `boolean`: Indicates if the tenant is allowed to  onboard to Azure Active Directory Connect Health.
  * pksCertificate `object`: The certificate associated with the tenant to onboard data to Azure Active Directory Connect Health.
  * privatePreviewTenant `boolean`: Indicates if the tenant has signed up for private preview of Azure Active Directory Connect Health features.
  * tenantId `string`: The Id of the tenant.
  * tenantInQuarantine `boolean`: Indicates if data collection for this tenant is disabled or not.
  * tenantName `string`: The name of the tenant.

### TenantOnboardingDetails
* TenantOnboardingDetails `object`: The tenant onboarding details.
  * onboardingDisplayUrl `string`: The display url, to help tenant navigate or onboard to Azure Active Directory Connect Health blade, based on tenant onboarding status.
  * tenantOnboarded `boolean`: Indicates if the tenant is onboarded to Azure Active Directory Connect Health or not.

### UserPreference
* UserPreference `object`:  The user preference for a given feature.
  * metricNames `array`: The name of the metric.
    * items `string`

### ValueDelta
* ValueDelta `object`: The value of the delta.
  * operationType `string` (values: Undefined, Add, Update, Delete): The operation type.
  * value `string`: The value of the delta.


