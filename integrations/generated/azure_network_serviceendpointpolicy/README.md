# @datafire/azure_network_serviceendpointpolicy

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_serviceendpointpolicy
```
```js
let azure_network_serviceendpointpolicy = require('@datafire/azure_network_serviceendpointpolicy').create({
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

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ServiceEndpointPolicies_List
Gets all the service endpoint policies in a subscription.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicyListResult](#serviceendpointpolicylistresult)

### ServiceEndpointPolicies_ListByResourceGroup
Gets all service endpoint Policies in a resource group.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicyListResult](#serviceendpointpolicylistresult)

### ServiceEndpointPolicies_Delete
Deletes the specified service endpoint policy.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_Delete({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ServiceEndpointPolicies_Get
Gets the specified service Endpoint Policies in a specified resource group.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_Get({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [ServiceEndpointPolicy](#serviceendpointpolicy)

### ServiceEndpointPolicies_Update
Updates service Endpoint Policies.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_Update({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicy](#serviceendpointpolicy)

### ServiceEndpointPolicies_CreateOrUpdate
Creates or updates a service Endpoint Policies.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy.
  * parameters **required** [ServiceEndpointPolicy](#serviceendpointpolicy)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicy](#serviceendpointpolicy)

### ServiceEndpointPolicyDefinitions_ListByResourceGroup
Gets all service endpoint policy definitions in a service end point policy.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicyDefinitions_ListByResourceGroup({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicyDefinitionListResult](#serviceendpointpolicydefinitionlistresult)

### ServiceEndpointPolicyDefinitions_Delete
Deletes the specified ServiceEndpoint policy definitions.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicyDefinitions_Delete({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "serviceEndpointPolicyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the Service Endpoint Policy.
  * serviceEndpointPolicyDefinitionName **required** `string`: The name of the service endpoint policy definition.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ServiceEndpointPolicyDefinitions_Get
Get the specified service endpoint policy definitions from service endpoint policy.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicyDefinitions_Get({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "serviceEndpointPolicyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy name.
  * serviceEndpointPolicyDefinitionName **required** `string`: The name of the service endpoint policy definition name.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)

### ServiceEndpointPolicyDefinitions_CreateOrUpdate
Creates or updates a service endpoint policy definition in the specified service endpoint policy.


```js
azure_network_serviceendpointpolicy.ServiceEndpointPolicyDefinitions_CreateOrUpdate({
  "resourceGroupName": "",
  "serviceEndpointPolicyName": "",
  "serviceEndpointPolicyDefinitionName": "",
  "ServiceEndpointPolicyDefinitions": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * serviceEndpointPolicyName **required** `string`: The name of the service endpoint policy.
  * serviceEndpointPolicyDefinitionName **required** `string`: The name of the service endpoint policy definition name.
  * ServiceEndpointPolicyDefinitions **required** [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)



## Definitions

### ServiceEndpointPolicy
* ServiceEndpointPolicy `object`: Service End point policy resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ServiceEndpointPolicyPropertiesFormat](#serviceendpointpolicypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ServiceEndpointPolicyDefinition
* ServiceEndpointPolicyDefinition `object`: Service Endpoint policy definitions.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties `object`: Service Endpoint policy definition resource.
    * description `string`: A description for this rule. Restricted to 140 chars.
    * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
    * service `string`: Service endpoint name.
    * serviceResources `array`: A list of service resources.
      * items `string`
  * id `string`: Resource ID.

### ServiceEndpointPolicyDefinitionListResult
* ServiceEndpointPolicyDefinitionListResult `object`: Response for ListServiceEndpointPolicyDefinition API service call. Retrieves all service endpoint policy definition that belongs to a service endpoint policy.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: The service endpoint policy definition in a service endpoint policy.
    * items [ServiceEndpointPolicyDefinition](#serviceendpointpolicydefinition)

### ServiceEndpointPolicyDefinitionPropertiesFormat
* ServiceEndpointPolicyDefinitionPropertiesFormat `object`: Service Endpoint policy definition resource.
  * description `string`: A description for this rule. Restricted to 140 chars.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * service `string`: Service endpoint name.
  * serviceResources `array`: A list of service resources.
    * items `string`

### ServiceEndpointPolicyListResult
* ServiceEndpointPolicyListResult `object`: Response for ListServiceEndpointPolicies API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of ServiceEndpointPolicy resources.
    * items [ServiceEndpointPolicy](#serviceendpointpolicy)

### ServiceEndpointPolicyPropertiesFormat
* ServiceEndpointPolicyPropertiesFormat `object`: Service Endpoint Policy resource.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * resourceGuid `string`: The resource GUID property of the service endpoint policy resource.
  * serviceEndpointPolicyDefinitions `array`: A collection of service endpoint policy definitions of the service endpoint policy.
    * items `object`: Service Endpoint policy definitions.
      * etag `string`: A unique read-only string that changes whenever the resource is updated.
      * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
      * properties `object`: Service Endpoint policy definition resource.
        * description `string`: A description for this rule. Restricted to 140 chars.
        * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
        * service `string`: Service endpoint name.
        * serviceResources `array`: A list of service resources.
          * items `string`
      * id `string`: Resource ID.
  * subnets `array`: A collection of references to subnets.
    * items [./virtualNetwork.jsonSubnet](#./virtualnetwork.jsonsubnet)


