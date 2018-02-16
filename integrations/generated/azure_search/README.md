# @datafire/azure_search

Client library for SearchManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_search
```
```js
let azure_search = require('@datafire/azure_search').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_search.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Client that can be used to manage Azure Search services and API keys.

## Actions

### Operations_List
Lists all of the available REST API operations of the Microsoft.Search provider.


```js
azure_search.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.

#### Output
* output [OperationListResult](#operationlistresult)

### Services_CheckNameAvailability
Checks whether or not the given Search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net).


```js
azure_search.Services_CheckNameAvailability({
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * checkNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### Services_ListByResourceGroup
Gets a list of all Search services in the given resource group.


```js
azure_search.Services_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [SearchServiceListResult](#searchservicelistresult)

### Services_Delete
Deletes a Search service in the given resource group, along with its associated resources.


```js
azure_search.Services_Delete({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
*Output schema unknown*

### Services_Get
Gets the Search service with the given name in the given resource group.


```js
azure_search.Services_Get({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [SearchService](#searchservice)

### Services_Update
Updates an existing Search service in the given resource group.


```js
azure_search.Services_Update({
  "resourceGroupName": "",
  "searchServiceName": "",
  "service": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service to update.
  * service **required** [SearchService](#searchservice)
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [SearchService](#searchservice)

### Services_CreateOrUpdate
Creates or updates a Search service in the given resource group. If the Search service already exists, all properties will be updated with the given values.


```js
azure_search.Services_CreateOrUpdate({
  "resourceGroupName": "",
  "searchServiceName": "",
  "service": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created.
  * service **required** [SearchService](#searchservice)
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [SearchService](#searchservice)

### QueryKeys_Create
Generates a new query key for the specified Search service. You can create up to 50 query keys per service.


```js
azure_search.QueryKeys_Create({
  "resourceGroupName": "",
  "searchServiceName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * name **required** `string`: The name of the new query API key.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [QueryKey](#querykey)

### QueryKeys_Delete
Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.


```js
azure_search.QueryKeys_Delete({
  "resourceGroupName": "",
  "searchServiceName": "",
  "key": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * key **required** `string`: The query key to be deleted. Query keys are identified by value, not by name.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
*Output schema unknown*

### AdminKeys_Get
Gets the primary and secondary admin API keys for the specified Azure Search service.


```js
azure_search.AdminKeys_Get({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [AdminKeyResult](#adminkeyresult)

### QueryKeys_ListBySearchService
Returns the list of query API keys for the given Azure Search service.


```js
azure_search.QueryKeys_ListBySearchService({
  "resourceGroupName": "",
  "searchServiceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [ListQueryKeysResult](#listquerykeysresult)

### AdminKeys_Regenerate
Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.


```js
azure_search.AdminKeys_Regenerate({
  "resourceGroupName": "",
  "searchServiceName": "",
  "keyKind": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
  * searchServiceName **required** `string`: The name of the Azure Search service associated with the specified resource group.
  * keyKind **required** `string` (values: primary, secondary): Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.
  * x-ms-client-request-id `string`: A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
  * api-version **required** `string`: The API version to use for each request. The current version is 2015-08-19.
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [AdminKeyResult](#adminkeyresult)



## Definitions

### AdminKeyResult
* AdminKeyResult `object`: Response containing the primary and secondary admin API keys for a given Azure Search service.
  * primaryKey `string`: The primary admin API key of the Search service.
  * secondaryKey `string`: The secondary admin API key of the Search service.

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: Input of check name availability API.
  * name **required** `string`: The Search service name to validate. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length.
  * type **required** `string` (values: searchServices): The type of the resource whose name is to be validated. This value must always be 'searchServices'.

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: Output of check name availability API.
  * message `string`: A message that explains why the name is invalid and provides resource naming requirements. Available only if 'Invalid' is returned in the 'reason' property.
  * nameAvailable `boolean`: A value indicating whether the name is available.
  * reason `string` (values: Invalid, AlreadyExists): The reason why the name is not available. 'Invalid' indicates the name provided does not match the naming requirements (incorrect length, unsupported characters, etc.). 'AlreadyExists' indicates that the name is already in use and is therefore unavailable.

### CloudError
* CloudError `object`: Contains information about an API error.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Describes a particular API error with an error code and a message.
  * code `string`: An error code that describes the error condition more precisely than an HTTP status code. Can be used to programatically handle specific error cases.
  * details `array`: Contains nested errors that are related to this error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message that describes the error in detail and provides debugging information.
  * target `string`: The target of the particular error (for example, the name of the property in error).

### ListQueryKeysResult
* ListQueryKeysResult `object`: Response containing the query API keys for a given Azure Search service.
  * value `array`: The query keys for the Azure Search service.
    * items [QueryKey](#querykey)

### Operation
* Operation `object`: Describes a REST API operation.
  * display `object`: The object that describes the operation.
    * description `string`: The friendly name of the operation.
    * operation `string`: The operation type: read, write, delete, listKeys/action, etc.
    * provider `string`: The friendly name of the resource provider.
    * resource `string`: The resource type on which the operation is performed.
  * name `string`: The name of the operation. This name is of the form {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: The result of the request to list REST API operations. It contains a list of operations and a URL  to get the next set of results.
  * nextLink `string`: The URL to get the next set of operation list results, if any.
  * value `array`: The list of operations supported by the resource provider.
    * items [Operation](#operation)

### QueryKey
* QueryKey `object`: Describes an API key for a given Azure Search service that has permissions for query operations only.
  * key `string`: The value of the query API key.
  * name `string`: The name of the query API key; may be empty.

### Resource
* Resource `object`: Base type for all Azure resources.
  * id `string`: The ID of the resource. This can be used with the Azure Resource Manager to link resources together.
  * location `string`: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource.
  * name `string`: The name of the resource.
  * tags `object`: Tags to help categorize the resource in the Azure portal.
  * type `string`: The resource type.

### SearchService
* SearchService `object`: Describes an Azure Search service and its current state.
  * properties [SearchServiceProperties](#searchserviceproperties)
  * sku [Sku](#sku)
  * id `string`: The ID of the resource. This can be used with the Azure Resource Manager to link resources together.
  * location `string`: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource.
  * name `string`: The name of the resource.
  * tags `object`: Tags to help categorize the resource in the Azure portal.
  * type `string`: The resource type.

### SearchServiceListResult
* SearchServiceListResult `object`: Response containing a list of Azure Search services.
  * value `array`: The list of Search services.
    * items [SearchService](#searchservice)

### SearchServiceProperties
* SearchServiceProperties `object`: Properties of the Search service.
  * hostingMode `string` (values: default, highDensity): Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
  * partitionCount `integer`: The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
  * provisioningState `string` (values: succeeded, provisioning, failed): The state of the last provisioning operation performed on the Search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create Search service. This is because the free service uses capacity that is already set up.
  * replicaCount `integer`: The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
  * status `string` (values: running, provisioning, deleting, degraded, disabled, error): The status of the Search service. Possible values include: 'running': The Search service is running and no provisioning operations are underway. 'provisioning': The Search service is being provisioned or scaled up or down. 'deleting': The Search service is being deleted. 'degraded': The Search service is degraded. This can occur when the underlying search units are not healthy. The Search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The Search service is disabled. In this state, the service will reject all API requests. 'error': The Search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
  * statusDetails `string`: The details of the Search service status.

### Sku
* Sku `object`: Defines the SKU of an Azure Search Service, which determines price tier and capacity limits.
  * name `string` (values: free, basic, standard, standard2, standard3): The SKU of the Search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': Offers maximum capacity per search unit with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity').


