# @datafire/azure_digitaltwins

Client library for AzureDigitalTwinsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_digitaltwins
```
```js
let azure_digitaltwins = require('@datafire/azure_digitaltwins').create({
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

Azure Digital Twins Client for managing DigitalTwinsInstance

## Actions

### Operations_List
Lists all of the available DigitalTwins service REST API operations.


```js
azure_digitaltwins.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.

#### Output
* output [OperationListResult](#operationlistresult)

### DigitalTwins_List
Get all the DigitalTwinsInstances in a subscription.


```js
azure_digitaltwins.DigitalTwins_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.

#### Output
* output [DigitalTwinsDescriptionListResult](#digitaltwinsdescriptionlistresult)

### DigitalTwins_CheckNameAvailability
Check if a DigitalTwinsInstance name is available.


```js
azure_digitaltwins.DigitalTwins_CheckNameAvailability({
  "api-version": "",
  "subscriptionId": "",
  "location": "",
  "digitalTwinsInstanceCheckName": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * location **required** `string`: Location of DigitalTwinsInstance.
  * digitalTwinsInstanceCheckName **required** [CheckNameRequest](#checknamerequest)

#### Output
* output [CheckNameResult](#checknameresult)

### DigitalTwins_ListByResourceGroup
Get all the DigitalTwinsInstances in a resource group.


```js
azure_digitaltwins.DigitalTwins_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.

#### Output
* output [DigitalTwinsDescriptionListResult](#digitaltwinsdescriptionlistresult)

### DigitalTwins_Delete
Delete a DigitalTwinsInstance.


```js
azure_digitaltwins.DigitalTwins_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.

#### Output
*Output schema unknown*

### DigitalTwins_Get
Get DigitalTwinsInstances resource.


```js
azure_digitaltwins.DigitalTwins_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.

#### Output
* output [DigitalTwinsDescription](#digitaltwinsdescription)

### DigitalTwins_Update
Update metadata of DigitalTwinsInstance.


```js
azure_digitaltwins.DigitalTwins_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "digitalTwinsPatchDescription": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.
  * digitalTwinsPatchDescription **required** [DigitalTwinsPatchDescription](#digitaltwinspatchdescription)

#### Output
* output [DigitalTwinsDescription](#digitaltwinsdescription)

### DigitalTwins_CreateOrUpdate
Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified values in a new body to update the DigitalTwinsInstance.


```js
azure_digitaltwins.DigitalTwins_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "digitalTwinsCreate": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.
  * digitalTwinsCreate **required** [DigitalTwinsDescription](#digitaltwinsdescription)

#### Output
* output [DigitalTwinsDescription](#digitaltwinsdescription)

### DigitalTwinsEndpoint_List
Get DigitalTwinsInstance Endpoints.


```js
azure_digitaltwins.DigitalTwinsEndpoint_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.

#### Output
* output [DigitalTwinsEndpointResourceListResult](#digitaltwinsendpointresourcelistresult)

### DigitalTwinsEndpoint_Delete
Delete a DigitalTwinsInstance endpoint.


```js
azure_digitaltwins.DigitalTwinsEndpoint_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "endpointName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.
  * endpointName **required** `string`: Name of Endpoint Resource.

#### Output
*Output schema unknown*

### DigitalTwinsEndpoint_Get
Get DigitalTwinsInstances Endpoint.


```js
azure_digitaltwins.DigitalTwinsEndpoint_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "endpointName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.
  * endpointName **required** `string`: Name of Endpoint Resource.

#### Output
* output [DigitalTwinsEndpointResource](#digitaltwinsendpointresource)

### DigitalTwinsEndpoint_CreateOrUpdate
Create or update DigitalTwinsInstance endpoint.


```js
azure_digitaltwins.DigitalTwinsEndpoint_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "endpointName": "",
  "endpointDescription": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.
  * endpointName **required** `string`: Name of Endpoint Resource.
  * endpointDescription **required** [DigitalTwinsEndpointResource](#digitaltwinsendpointresource)

#### Output
* output [DigitalTwinsEndpointResource](#digitaltwinsendpointresource)

### DigitalTwinsIoTHubs_List
Get DigitalTwinsInstance IoTHubs.


```js
azure_digitaltwins.DigitalTwinsIoTHubs_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2020-03-01-preview): Version of the DigitalTwinsInstance Management API.
  * subscriptionId **required** `string`: The subscription identifier.
  * resourceGroupName **required** `string`: The name of the resource group that contains the DigitalTwinsInstance.
  * resourceName **required** `string`: The name of the DigitalTwinsInstance.

#### Output
* output [DigitalTwinsIntegrationResourceListResult](#digitaltwinsintegrationresourcelistresult)

### IoTHub_Delete
Deletes a DigitalTwinsInstance link with IoTHub.


```js
azure_digitaltwins.IoTHub_Delete({
  "scope": "",
  "integrationResourceName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
  * integrationResourceName **required** `string`: Name of IoTHub and DigitalTwinsInstance integration instance.

#### Output
*Output schema unknown*

### IoTHub_Get
Gets properties of an IoTHub Integration.


```js
azure_digitaltwins.IoTHub_Get({
  "scope": "",
  "integrationResourceName": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
  * integrationResourceName **required** `string`: Name of IoTHub and DigitalTwinsInstance integration instance.

#### Output
* output [IntegrationResource](#integrationresource)

### IoTHub_CreateOrUpdate
Creates or Updates an IoTHub Integration with DigitalTwinsInstances.


```js
azure_digitaltwins.IoTHub_CreateOrUpdate({
  "scope": "",
  "integrationResourceName": "",
  "iotHubDescription": {}
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
  * integrationResourceName **required** `string`: Name of IoTHub and DigitalTwinsInstance integration instance.
  * iotHubDescription **required** [IntegrationResource](#integrationresource)

#### Output
* output [IntegrationResource](#integrationresource)



## Definitions

### CheckNameRequest
* CheckNameRequest `object`: The result returned from a database check name availability request.
  * name **required** `string`: Resource name.
  * type **required** `string` (values: Microsoft.DigitalTwins/digitalTwinsInstances): The type of resource, for instance Microsoft.DigitalTwins/digitalTwinsInstances.

### CheckNameResult
* CheckNameResult `object`: The result returned from a check name availability request.
  * message `string`: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
  * name `string`: The name that was checked.
  * nameAvailable `boolean`: Specifies a Boolean value that indicates if the name is available.
  * reason `string` (values: Invalid, AlreadyExists): Message providing the reason why the given name is invalid.

### DigitalTwinsDescription
* DigitalTwinsDescription `object`: The description of the DigitalTwins service.
  * properties [DigitalTwinsProperties](#digitaltwinsproperties)
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * sku [DigitalTwinsSkuInfo](#digitaltwinsskuinfo)
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DigitalTwinsDescriptionListResult
* DigitalTwinsDescriptionListResult `object`: A list of DigitalTwins description objects with a next link.
  * nextLink `string`: The link used to get the next page of DigitalTwins description objects.
  * value `array`: A list of DigitalTwins description objects.
    * items [DigitalTwinsDescription](#digitaltwinsdescription)

### DigitalTwinsEndpointResource
* DigitalTwinsEndpointResource `object`: DigitalTwinsInstance endpoint resource.
  * properties [DigitalTwinsEndpointResourceProperties](#digitaltwinsendpointresourceproperties)
  * id `string`: The resource identifier.
  * name `string`: Extension resource name.
  * type `string`: The resource type.

### DigitalTwinsEndpointResourceListResult
* DigitalTwinsEndpointResourceListResult `object`: A list of DigitalTwinsInstance Endpoints with a next link.
  * nextLink `string`: The link used to get the next page of DigitalTwinsInstance Endpoints.
  * value `array`: A list of DigitalTwinsInstance Endpoints.
    * items [DigitalTwinsEndpointResource](#digitaltwinsendpointresource)

### DigitalTwinsEndpointResourceProperties
* DigitalTwinsEndpointResourceProperties `object`: Properties related to Digital Twins Endpoint
  * createdTime `string`: Time when the Endpoint was added to DigitalTwinsInstance.
  * endpointType **required** `string` (values: EventHub, EventGrid, ServiceBus): The type of Digital Twins endpoint
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.
  * tags `object`: The resource tags.

### DigitalTwinsIntegrationResourceListResult
* DigitalTwinsIntegrationResourceListResult `object`: A list of DigitalTwinsInstance IoTHubs with a next link.
  * nextLink `string`: The link used to get the next page of DigitalTwinsInstance IoTHubs.
  * value `array`: A list of DigitalTwinsInstance IoTHubs.
    * items [IntegrationResource](#integrationresource)

### DigitalTwinsPatchDescription
* DigitalTwinsPatchDescription `object`: The description of the DigitalTwins service.
  * tags `object`: Instance tags

### DigitalTwinsProperties
* DigitalTwinsProperties `object`: The properties of a DigitalTwinsInstance.
  * createdTime `string`: Time when DigitalTwinsInstance was created.
  * hostName `string`: Api endpoint to work with DigitalTwinsInstance.
  * lastUpdatedTime `string`: Time when DigitalTwinsInstance was created.
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.

### DigitalTwinsResource
* DigitalTwinsResource `object`: The common properties of a DigitalTwinsInstance.
  * id `string`: The resource identifier.
  * location **required** `string`: The resource location.
  * name `string`: The resource name.
  * sku [DigitalTwinsSkuInfo](#digitaltwinsskuinfo)
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### DigitalTwinsSkuInfo
* DigitalTwinsSkuInfo `object`: Information about the SKU of the DigitalTwinsInstance.
  * name **required** `string` (values: F1): The name of the SKU.

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### EventGrid
* EventGrid: properties related to eventgrid.
  * createdTime `string`: Time when the Endpoint was added to DigitalTwinsInstance.
  * endpointType **required** `string` (values: EventHub, EventGrid, ServiceBus): The type of Digital Twins endpoint
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.
  * tags `object`: The resource tags.
  * TopicEndpoint `string`: EventGrid Topic Endpoint
  * accessKey1 `string`: EventGrid secondary accesskey. Will be obfuscated during read
  * accessKey2 `string`: EventGrid secondary accesskey. Will be obfuscated during read

### EventHub
* EventHub: properties related to eventhub.
  * connectionString-PrimaryKey `string`: PrimaryConnectionString of the endpoint. Will be obfuscated during read
  * connectionString-SecondaryKey `string`: SecondaryConnectionString of the endpoint. Will be obfuscated during read
  * createdTime `string`: Time when the Endpoint was added to DigitalTwinsInstance.
  * endpointType **required** `string` (values: EventHub, EventGrid, ServiceBus): The type of Digital Twins endpoint
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.
  * tags `object`: The resource tags.

### ExternalResource
* ExternalResource `object`: Definition of a Resource.
  * id `string`: The resource identifier.
  * name `string`: Extension resource name.
  * type `string`: The resource type.

### IntegrationResource
* IntegrationResource `object`: IoTHub integration resource.
  * properties [IntegrationResourceProperties](#integrationresourceproperties)
  * id `string`: The resource identifier.
  * name `string`: Extension resource name.
  * type `string`: The resource type.

### IntegrationResourceProperties
* IntegrationResourceProperties `object`: Properties related to the IoTHub DigitalTwinsInstance Integration Resource.
  * createdTime `string`: Time when the IoTHub was added to DigitalTwinsInstance.
  * resourceId `string`: Fully qualified resource identifier of the DigitalTwins Azure resource.
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): DigitalTwinsInstance - IoTHub link state.

### IntegrationResourceState
* IntegrationResourceState `object`: Properties related to the IoTHub DigitalTwinsInstance Integration Resource.
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): DigitalTwinsInstance - IoTHub link state.

### IntegrationResourceUpdateInfo
* IntegrationResourceUpdateInfo `object`: IoTHub integration resource.
  * properties [IntegrationResourceUpdateProperties](#integrationresourceupdateproperties)
  * id `string`: The resource identifier.
  * name `string`: Extension resource name.
  * type `string`: The resource type.

### IntegrationResourceUpdateProperties
* IntegrationResourceUpdateProperties `object`: Updatable properties related to the IoTHub DigitalTwinsInstance Integration Resource.
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): DigitalTwinsInstance - IoTHub link state.

### Operation
* Operation `object`: DigitalTwins service REST API operation
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Operation name: {provider}/{resource}/{read | write | action | delete}

### OperationDisplay
* OperationDisplay `object`: The object that represents the operation.
  * description `string`: Friendly description for the operation,
  * operation `string`: Name of the operation
  * provider `string`: Service provider: Microsoft DigitalTwins
  * resource `string`: Resource Type: DigitalTwinsInstances

### OperationListResult
* OperationListResult `object`: A list of DigitalTwins service operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: The link used to get the next page of DigitalTwins description objects.
  * value `array`: A list of DigitalTwins operations supported by the Microsoft.DigitalTwins resource provider.
    * items [Operation](#operation)

### ServiceBus
* ServiceBus: properties related to servicebus.
  * createdTime `string`: Time when the Endpoint was added to DigitalTwinsInstance.
  * endpointType **required** `string` (values: EventHub, EventGrid, ServiceBus): The type of Digital Twins endpoint
  * provisioningState `string` (values: Provisioning, Deleting, Succeeded, Failed, Canceled): The provisioning state.
  * tags `object`: The resource tags.
  * primaryConnectionString `string`: PrimaryConnectionString of the endpoint. Will be obfuscated during read
  * secondaryConnectionString `string`: SecondaryConnectionString of the endpoint. Will be obfuscated during read


