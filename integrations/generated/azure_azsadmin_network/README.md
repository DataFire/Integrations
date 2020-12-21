# @datafire/azure_azsadmin_network

Client library for NetworkAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_network
```
```js
let azure_azsadmin_network = require('@datafire/azure_azsadmin_network').create({
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

Network admin operation endpoints and objects.

## Actions

### OnPremLocations_List
Returns the list of supported locations


```js
azure_azsadmin_network.OnPremLocations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [LocationsList](#locationslist)

### LocationsOperationResults_List
Returns the list of operation results for a location


```js
azure_azsadmin_network.LocationsOperationResults_List({
  "api-version": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * location **required** `string`: Location of the resource.

#### Output
* output [OperationResultList](#operationresultlist)

### LocationsOperations_List
Returns the list of support REST operations.


```js
azure_azsadmin_network.LocationsOperations_List({
  "api-version": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.
  * location **required** `string`: Location of the resource.

#### Output
* output [OperationList](#operationlist)

### Operations_List
Returns the list of support REST operations.


```js
azure_azsadmin_network.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)

### ResourceProviderState_Get
Get an overview of the state of the network resource provider.


```js
azure_azsadmin_network.ResourceProviderState_Get({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AdminOverview](#adminoverview)



## Definitions

### AdminOverview
* AdminOverview `object`: Admin overview resource object.
  * properties [AdminOverviewProperties](#adminoverviewproperties)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### AdminOverviewProperties
* AdminOverviewProperties `object`: Admin overview properties.
  * backendIpUsage [AdminOverviewResourceUsage](#adminoverviewresourceusage)
  * loadBalancerMuxHealth [AdminOverviewResourceHealth](#adminoverviewresourcehealth)
  * macAddressUsage [AdminOverviewResourceUsage](#adminoverviewresourceusage)
  * provisioningState `string`: The provisioning state.
  * publicIpAddressUsage [AdminOverviewResourceUsage](#adminoverviewresourceusage)
  * virtualGatewayHealth [AdminOverviewResourceHealth](#adminoverviewresourcehealth)
  * virtualNetworkHealth [AdminOverviewResourceHealth](#adminoverviewresourcehealth)

### AdminOverviewResourceHealth
* AdminOverviewResourceHealth `object`: Resource health information.
  * errorResourceCount `integer`: Number of resources in the error state.
  * healthUnknownCount `integer`: Number of resources in an unknown state.
  * healthyResourceCount `integer`: Number of resources in the success state.
  * totalResourceCount `integer`: Total number of resources.
  * warningResourceCount `integer`: Number of resources in the warning state.

### AdminOverviewResourceUsage
* AdminOverviewResourceUsage `object`: Resource usage information.
  * inUseResourceCount `integer`: Number of resources in use.
  * totalResourceCount `integer`: Total number of resources.

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will displayed to the user.
  * provider `string`: The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### Location
* Location `object`: Describes the supported Location
  * name `string`: The name of the location the operation is being held.

### LocationsList
* LocationsList `object`: List of Locations
  * nextLink `string`: URI to the next page of locations.
  * value `array`: Array of locations
    * items [Location](#location)

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### OperationResult
* OperationResult `object`: Describes results of a given operation
  * name `string`: The name of the operation being performed on this particular object.

### OperationResultList
* OperationResultList `object`: List of Operation Results
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operation results
    * items [OperationResult](#operationresult)

### ProvisionedResource
* ProvisionedResource `object`: Objects which have a provisioning state.
  * provisioningState `string`: The provisioning state.

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### TenantResource
* TenantResource `object`: These resources are utilized by a single tenant.
  * subscriptionId `string`: The subscription ID.
  * tenantResourceUri `string`: The tenant resource URI.


