# @datafire/azure_analysisservices

Client library for AzureAnalysisServices

## Installation and Usage
```bash
npm install --save @datafire/azure_analysisservices
```
```js
let azure_analysisservices = require('@datafire/azure_analysisservices').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_analysisservices.Servers_CheckNameAvailability({
  "location": "",
  "serverParameters": {},
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure Analysis Services Web API provides a RESTful set of web services that enables users to create, retrieve, update, and delete Analysis Services servers

## Actions

### Servers_CheckNameAvailability
Check the name availability in the target location.


```js
azure_analysisservices.Servers_CheckNameAvailability({
  "location": "",
  "serverParameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The region name which the operation will lookup into.
  * serverParameters **required** [CheckServerNameAvailabilityParameters](#checkservernameavailabilityparameters)
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [CheckServerNameAvailabilityResult](#checkservernameavailabilityresult)

### Servers_ListOperationResults
List the result of the specified operation.


```js
azure_analysisservices.Servers_ListOperationResults({
  "location": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The region name which the operation will lookup into.
  * operationId **required** `string`: The target operation Id.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Servers_ListOperationStatuses
List the status of operation.


```js
azure_analysisservices.Servers_ListOperationStatuses({
  "location": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The region name which the operation will lookup into.
  * operationId **required** `string`: The target operation Id.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatus](#operationstatus)

### Servers_List
Lists all the Analysis Services servers for the given subscription.


```js
azure_analysisservices.Servers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AnalysisServicesServers](#analysisservicesservers)

### Servers_ListSkusForNew
Lists eligible SKUs for Analysis Services resource provider.


```js
azure_analysisservices.Servers_ListSkusForNew({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SkuEnumerationForNewResourceResult](#skuenumerationfornewresourceresult)

### Servers_ListByResourceGroup
Gets all the Analysis Services servers for the given resource group.


```js
azure_analysisservices.Servers_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AnalysisServicesServers](#analysisservicesservers)

### Servers_Delete
Deletes the specified Analysis Services server.


```js
azure_analysisservices.Servers_Delete({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Servers_GetDetails
Gets details about the specified Analysis Services server.


```js
azure_analysisservices.Servers_GetDetails({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AnalysisServicesServer](#analysisservicesserver)

### Servers_Update
Updates the current state of the specified Analysis Services server.


```js
azure_analysisservices.Servers_Update({
  "resourceGroupName": "",
  "serverName": "",
  "serverUpdateParameters": {},
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * serverUpdateParameters **required** [AnalysisServicesServerUpdateParameters](#analysisservicesserverupdateparameters)
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AnalysisServicesServer](#analysisservicesserver)

### Servers_Create
Provisions the specified Analysis Services server based on the configuration specified in the request.


```js
azure_analysisservices.Servers_Create({
  "resourceGroupName": "",
  "serverName": "",
  "serverParameters": {
    "location": "",
    "sku": {
      "name": ""
    }
  },
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
  * serverParameters **required** [AnalysisServicesServer](#analysisservicesserver)
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AnalysisServicesServer](#analysisservicesserver)

### Servers_DissociateGateway
Dissociates a Unified Gateway associated with the server.


```js
azure_analysisservices.Servers_DissociateGateway({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Servers_ListGatewayStatus
Return the gateway status of the specified Analysis Services server instance.


```js
azure_analysisservices.Servers_ListGatewayStatus({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GatewayListStatusLive](#gatewayliststatuslive)

### Servers_Resume
Resumes operation of the specified Analysis Services server instance.


```js
azure_analysisservices.Servers_Resume({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Servers_ListSkusForExisting
Lists eligible SKUs for an Analysis Services resource.


```js
azure_analysisservices.Servers_ListSkusForExisting({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SkuEnumerationForExistingResourceResult](#skuenumerationforexistingresourceresult)

### Servers_Suspend
Supends operation of the specified Analysis Services server instance.


```js
azure_analysisservices.Servers_Suspend({
  "resourceGroupName": "",
  "serverName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
  * serverName **required** `string`: The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### AnalysisServicesServer
* AnalysisServicesServer `object`: Represents an instance of an Analysis Services resource.
  * properties [AnalysisServicesServerProperties](#analysisservicesserverproperties)
  * id `string`: An identifier that represents the Analysis Services resource.
  * location **required** `string`: Location of the Analysis Services resource.
  * name `string`: The name of the Analysis Services resource.
  * sku **required** [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional resource provisioning properties.
  * type `string`: The type of the Analysis Services resource.

### AnalysisServicesServerMutableProperties
* AnalysisServicesServerMutableProperties `object`: An object that represents a set of mutable Analysis Services resource properties.
  * asAdministrators [ServerAdministrators](#serveradministrators)
  * backupBlobContainerUri `string`: The SAS container URI to the backup container.
  * gatewayDetails [GatewayDetails](#gatewaydetails)

### AnalysisServicesServerProperties
* AnalysisServicesServerProperties `object`: Properties of Analysis Services resource.
  * provisioningState `string` (values: Deleting, Succeeded, Failed, Paused, Suspended, Provisioning, Updating, Suspending, Pausing, Resuming, Preparing, Scaling): The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
  * serverFullName `string`: The full name of the Analysis Services resource.
  * state `string` (values: Deleting, Succeeded, Failed, Paused, Suspended, Provisioning, Updating, Suspending, Pausing, Resuming, Preparing, Scaling): The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
  * asAdministrators [ServerAdministrators](#serveradministrators)
  * backupBlobContainerUri `string`: The SAS container URI to the backup container.
  * gatewayDetails [GatewayDetails](#gatewaydetails)

### AnalysisServicesServerUpdateParameters
* AnalysisServicesServerUpdateParameters `object`: Provision request specification
  * properties [AnalysisServicesServerMutableProperties](#analysisservicesservermutableproperties)
  * sku [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional provisioning properties.

### AnalysisServicesServers
* AnalysisServicesServers `object`: An array of Analysis Services resources.
  * value **required** `array`: An array of Analysis Services resources.
    * items [AnalysisServicesServer](#analysisservicesserver)

### CheckServerNameAvailabilityParameters
* CheckServerNameAvailabilityParameters `object`: Details of server name request body.
  * name `string`: Name for checking availability.
  * type `string`: The resource type of azure analysis services.

### CheckServerNameAvailabilityResult
* CheckServerNameAvailabilityResult `object`: The checking result of server name availibility.
  * message `string`: The detailed message of the request unavailability.
  * nameAvailable `boolean`: Indicator of available of the server name.
  * reason `string`: The reason of unavailability.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### GatewayDetails
* GatewayDetails `object`: The gateway details.
  * dmtsClusterUri `string`: Uri of the DMTS cluster.
  * gatewayObjectId `string`: Gateway object id from in the DMTS cluster for the gateway resource.
  * gatewayResourceId `string`: Gateway resource to be associated with the server.

### GatewayError
* GatewayError `object`: Detail of gateway errors
  * code `string`: Error code of list gateway.
  * message `string`: Error message of list gateway.

### GatewayListStatusError
* GatewayListStatusError `object`: Status of gateway is error
  * error [GatewayError](#gatewayerror)

### GatewayListStatusLive
* GatewayListStatusLive `object`: Status of gateway is live
  * status `string` (values: Live): Live message of list gateway.

### OperationStatus
* OperationStatus `object`: The status of operation.
  * endTime `string`: The end time of the operation.
  * error [ErrorResponse](#errorresponse)
  * id `string`: The operation Id.
  * name `string`: The operation name.
  * startTime `string`: The start time of the operation.
  * status `string`: The status of the operation.

### Resource
* Resource `object`: Represents an instance of an Analysis Services resource.
  * id `string`: An identifier that represents the Analysis Services resource.
  * location **required** `string`: Location of the Analysis Services resource.
  * name `string`: The name of the Analysis Services resource.
  * sku **required** [ResourceSku](#resourcesku)
  * tags `object`: Key-value pairs of additional resource provisioning properties.
  * type `string`: The type of the Analysis Services resource.

### ResourceSku
* ResourceSku `object`: Represents the SKU name and Azure pricing tier for Analysis Services resource.
  * name **required** `string`: Name of the SKU level.
  * tier `string` (values: Development, Basic, Standard): The name of the Azure pricing tier to which the SKU applies.

### ServerAdministrators
* ServerAdministrators `object`: An array of administrator user identities
  * members `array`: An array of administrator user identities.
    * items `string`: The UPN of the user. For example: johnsmith@contoso.com.

### SkuDetailsForExistingResource
* SkuDetailsForExistingResource `object`: An object that represents SKU details for existing resources
  * sku [ResourceSku](#resourcesku)

### SkuEnumerationForExistingResourceResult
* SkuEnumerationForExistingResourceResult `object`: An object that represents enumerating SKUs for existing resources
  * value `array`: The collection of available SKUs for existing resources
    * items [SkuDetailsForExistingResource](#skudetailsforexistingresource)

### SkuEnumerationForNewResourceResult
* SkuEnumerationForNewResourceResult `object`: An object that represents enumerating SKUs for new resources
  * value `array`: The collection of available SKUs for new resources
    * items [ResourceSku](#resourcesku)


