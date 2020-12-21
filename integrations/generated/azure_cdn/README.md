# @datafire/azure_cdn

Client library for CdnManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_cdn
```
```js
let azure_cdn = require('@datafire/azure_cdn').create({
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

Use these APIs to manage Azure CDN resources through the Azure Resource Manager. You must make sure that requests made to these resources are secure.

## Actions

### CheckNameAvailability
Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.


```js
azure_cdn.CheckNameAvailability({
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### EdgeNodes_List
Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.


```js
azure_cdn.EdgeNodes_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [EdgenodeResult](#edgenoderesult)

### Operations_List
Lists all of the available CDN REST API operations.


```js
azure_cdn.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [OperationsListResult](#operationslistresult)

### CheckNameAvailabilityWithSubscription
Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.


```js
azure_cdn.CheckNameAvailabilityWithSubscription({
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### ResourceUsage_List
Check the quota and actual usage of the CDN profiles under the given subscription.


```js
azure_cdn.ResourceUsage_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### Profiles_List
Lists all of the CDN profiles within an Azure subscription.


```js
azure_cdn.Profiles_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ProfileListResult](#profilelistresult)

### ValidateProbe
Check if the probe path is a valid path and the file can be accessed. Probe path is the path to a file hosted on the origin server to help accelerate the delivery of dynamic content via the CDN endpoint. This path is relative to the origin path specified in the endpoint configuration.


```js
azure_cdn.ValidateProbe({
  "validateProbeInput": {
    "probeURL": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * validateProbeInput **required** [ValidateProbeInput](#validateprobeinput)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ValidateProbeOutput](#validateprobeoutput)

### Profiles_ListByResourceGroup
Lists all of the CDN profiles within a resource group.


```js
azure_cdn.Profiles_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_Delete
Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.


```js
azure_cdn.Profiles_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Profiles_Get
Gets a CDN profile with the specified profile name under the specified subscription and resource group.


```js
azure_cdn.Profiles_Get({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Profile](#profile)

### Profiles_Update
Updates an existing CDN profile with the specified profile name under the specified subscription and resource group.


```js
azure_cdn.Profiles_Update({
  "resourceGroupName": "",
  "profileName": "",
  "profileUpdateParameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * profileUpdateParameters **required** [ProfileUpdateParameters](#profileupdateparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Profile](#profile)

### Profiles_Create
Creates a new CDN profile with a profile name under the specified subscription and resource group.


```js
azure_cdn.Profiles_Create({
  "resourceGroupName": "",
  "profileName": "",
  "profile": {
    "sku": {}
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * profile **required** [Profile](#profile)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Profile](#profile)

### Profiles_ListResourceUsage
Checks the quota and actual usage of endpoints under the given CDN profile.


```js
azure_cdn.Profiles_ListResourceUsage({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### Endpoints_ListByProfile
Lists existing CDN endpoints.


```js
azure_cdn.Endpoints_ListByProfile({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [EndpointListResult](#endpointlistresult)

### Endpoints_Delete
Deletes an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_cdn.Endpoints_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Endpoints_Get
Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_cdn.Endpoints_Get({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Update
Updates an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags and Origin HostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.


```js
azure_cdn.Endpoints_Update({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "endpointUpdateProperties": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * endpointUpdateProperties **required** [EndpointUpdateParameters](#endpointupdateparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Create
Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_cdn.Endpoints_Create({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "endpoint": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * endpoint **required** [Endpoint](#endpoint)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_ListResourceUsage
Checks the quota and usage of geo filters and custom domains under the given endpoint.


```js
azure_cdn.Endpoints_ListResourceUsage({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### CustomDomains_ListByEndpoint
Lists all of the existing custom domains within an endpoint.


```js
azure_cdn.CustomDomains_ListByEndpoint({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CustomDomainListResult](#customdomainlistresult)

### CustomDomains_Delete
Deletes an existing custom domain within an endpoint.


```js
azure_cdn.CustomDomains_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainName **required** `string`: Name of the custom domain within an endpoint.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### CustomDomains_Get
Gets an existing custom domain within an endpoint.


```js
azure_cdn.CustomDomains_Get({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainName **required** `string`: Name of the custom domain within an endpoint.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CustomDomain](#customdomain)

### CustomDomains_Create
Creates a new custom domain within an endpoint.


```js
azure_cdn.CustomDomains_Create({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainName": "",
  "customDomainProperties": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainName **required** `string`: Name of the custom domain within an endpoint.
  * customDomainProperties **required** [CustomDomainParameters](#customdomainparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CustomDomain](#customdomain)

### CustomDomains_DisableCustomHttps
Disable https delivery of the custom domain.


```js
azure_cdn.CustomDomains_DisableCustomHttps({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainName **required** `string`: Name of the custom domain within an endpoint.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### CustomDomains_EnableCustomHttps
Enable https delivery of the custom domain.


```js
azure_cdn.CustomDomains_EnableCustomHttps({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainName **required** `string`: Name of the custom domain within an endpoint.
  * customDomainHttpsParameters [CustomDomainHttpsParameters](#customdomainhttpsparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Endpoints_LoadContent
Pre-loads a content to CDN. Available for Verizon Profiles.


```js
azure_cdn.Endpoints_LoadContent({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "contentFilePaths": {
    "contentPaths": []
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * contentFilePaths **required** [LoadParameters](#loadparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Origins_ListByEndpoint
Lists all of the existing origins within an endpoint.


```js
azure_cdn.Origins_ListByEndpoint({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [OriginListResult](#originlistresult)

### Origins_Get
Gets an existing origin within an endpoint.


```js
azure_cdn.Origins_Get({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "originName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * originName **required** `string`: Name of the origin which is unique within the endpoint.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Origin](#origin)

### Origins_Update
Updates an existing origin within an endpoint.


```js
azure_cdn.Origins_Update({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "originName": "",
  "originUpdateProperties": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * originName **required** `string`: Name of the origin which is unique within the endpoint.
  * originUpdateProperties **required** [OriginUpdateParameters](#originupdateparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Origin](#origin)

### Endpoints_PurgeContent
Removes a content from CDN.


```js
azure_cdn.Endpoints_PurgeContent({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "contentFilePaths": {
    "contentPaths": []
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * contentFilePaths **required** [PurgeParameters](#purgeparameters)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Endpoints_Start
Starts an existing CDN endpoint that is on a stopped state.


```js
azure_cdn.Endpoints_Start({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Stop
Stops an existing running CDN endpoint.


```js
azure_cdn.Endpoints_Stop({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_ValidateCustomDomain
Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.


```js
azure_cdn.Endpoints_ValidateCustomDomain({
  "resourceGroupName": "",
  "profileName": "",
  "endpointName": "",
  "customDomainProperties": {
    "hostName": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * endpointName **required** `string`: Name of the endpoint under the profile which is unique globally.
  * customDomainProperties **required** [ValidateCustomDomainInput](#validatecustomdomaininput)
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ValidateCustomDomainOutput](#validatecustomdomainoutput)

### Profiles_GenerateSsoUri
Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemental portal is used to configure advanced feature capabilities that are not yet available in the Azure portal, such as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and alerts in a premium profile. The SSO URI changes approximately every 10 minutes.


```js
azure_cdn.Profiles_GenerateSsoUri({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [SsoUri](#ssouri)

### Profiles_ListSupportedOptimizationTypes
Gets the supported optimization types for the current profile. A user can create an endpoint with an optimization type from the listed values.


```js
azure_cdn.Profiles_ListSupportedOptimizationTypes({
  "resourceGroupName": "",
  "profileName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: Name of the CDN profile which is unique within the resource group.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [SupportedOptimizationTypesListResult](#supportedoptimizationtypeslistresult)



## Definitions

### CacheExpirationActionParameters
* CacheExpirationActionParameters `object`: Defines the parameters for the cache expiration action.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters)
  * cacheBehavior **required** `string` (values: BypassCache, Override, SetIfMissing): Caching behavior for the requests
  * cacheDuration `string`: The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
  * cacheType **required** `string` (values: All): The level at which the content needs to be cached.

### CacheKeyQueryStringActionParameters
* CacheKeyQueryStringActionParameters `object`: Defines the parameters for the cache-key query string action.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleCacheKeyQueryStringBehaviorActionParameters)
  * queryParameters `string`: query parameters to include or exclude (comma separated).
  * queryStringBehavior **required** `string` (values: Include, IncludeAll, Exclude, ExcludeAll): Caching behavior for the requests

### CdnCertificateSourceParameters
* CdnCertificateSourceParameters `object`: Defines the parameters for using CDN managed certificate for securing custom domain.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.CdnCertificateSourceParameters)
  * certificateType **required** `string` (values: Shared, Dedicated): Type of certificate used

### CdnManagedHttpsParameters
* CdnManagedHttpsParameters `object`: Defines the certificate source parameters using CDN managed certificate for enabling SSL.
  * certificateSourceParameters **required** [CdnCertificateSourceParameters](#cdncertificatesourceparameters)
  * certificateSource **required** `string` (values: AzureKeyVault, Cdn): Defines the source of the SSL certificate.
  * minimumTlsVersion `string` (values: None, TLS10, TLS12): TLS protocol version that will be used for Https
  * protocolType **required** `string` (values: ServerNameIndication, IPBased): Defines the TLS extension protocol that is used for secure delivery.

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: Input of CheckNameAvailability API.
  * name **required** `string`: The resource name to validate.
  * type **required** [ResourceType](#resourcetype)

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: Output of check name availability API.
  * message `string`: The detailed error message describing why the name is not available.
  * nameAvailable `boolean`: Indicates whether the name is available.
  * reason `string`: The reason why the name is not available.

### CookiesMatchConditionParameters
* CookiesMatchConditionParameters `object`: Defines the parameters for Cookies match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleCookiesConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * selector **required** `string`: Name of Cookies to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### CustomDomain
* CustomDomain `object`: Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
  * properties [CustomDomainProperties](#customdomainproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### CustomDomainHttpsParameters
* CustomDomainHttpsParameters `object`: The JSON object that contains the properties to secure a custom domain.
  * certificateSource **required** `string` (values: AzureKeyVault, Cdn): Defines the source of the SSL certificate.
  * minimumTlsVersion `string` (values: None, TLS10, TLS12): TLS protocol version that will be used for Https
  * protocolType **required** `string` (values: ServerNameIndication, IPBased): Defines the TLS extension protocol that is used for secure delivery.

### CustomDomainListResult
* CustomDomainListResult `object`: Result of the request to list custom domains. It contains a list of custom domain objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of custom domain objects if there are any.
  * value `array`: List of CDN CustomDomains within an endpoint.
    * items [CustomDomain](#customdomain)

### CustomDomainParameters
* CustomDomainParameters `object`: The customDomain JSON object required for custom domain creation or update.
  * properties [CustomDomainPropertiesParameters](#customdomainpropertiesparameters)

### CustomDomainProperties
* CustomDomainProperties `object`: The JSON object that contains the properties of the custom domain to create.
  * customHttpsParameters [CustomDomainHttpsParameters](#customdomainhttpsparameters)
  * customHttpsProvisioningState `string` (values: Enabling, Enabled, Disabling, Disabled, Failed): Provisioning status of Custom Https of the custom domain.
  * customHttpsProvisioningSubstate `string` (values: SubmittingDomainControlValidationRequest, PendingDomainControlValidationREquestApproval, DomainControlValidationRequestApproved, DomainControlValidationRequestRejected, DomainControlValidationRequestTimedOut, IssuingCertificate, DeployingCertificate, CertificateDeployed, DeletingCertificate, CertificateDeleted): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.
  * provisioningState `string`: Provisioning status of the custom domain.
  * resourceState `string` (values: Creating, Active, Deleting): Resource status of the custom domain.
  * validationData `string`: Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

### CustomDomainPropertiesParameters
* CustomDomainPropertiesParameters `object`: The JSON object that contains the properties of the custom domain to create.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.

### DeepCreatedOrigin
* DeepCreatedOrigin `object`: The main origin of CDN content which is added when creating a CDN endpoint.
  * name **required** `string`: Origin name
  * properties [DeepCreatedOriginProperties](#deepcreatedoriginproperties)

### DeepCreatedOriginProperties
* DeepCreatedOriginProperties `object`: Properties of the origin created on the CDN endpoint.
  * hostName **required** `string`: The address of the origin. It can be a domain name, IPv4 address, or IPv6 address.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535
  * httpsPort `integer`: The value of the HTTPS port. Must be between 1 and 65535

### DeliveryRule
* DeliveryRule `object`: A rule that specifies a set of actions and conditions
  * actions **required** `array`: A list of actions that are executed when all the conditions of a rule are satisfied.
    * items [DeliveryRuleAction](#deliveryruleaction)
  * conditions `array`: A list of conditions that must be matched for the actions to be executed
    * items [DeliveryRuleCondition](#deliveryrulecondition)
  * name `string`: Name of the rule
  * order **required** `integer`: The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.

### DeliveryRuleAction
* DeliveryRuleAction `object`: An action for the delivery rule.
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### DeliveryRuleCacheExpirationAction
* DeliveryRuleCacheExpirationAction `object`: Defines the cache expiration action for the delivery rule.
  * parameters **required** [CacheExpirationActionParameters](#cacheexpirationactionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### DeliveryRuleCacheKeyQueryStringAction
* DeliveryRuleCacheKeyQueryStringAction `object`: Defines the cache-key query string action for the delivery rule.
  * parameters **required** [CacheKeyQueryStringActionParameters](#cachekeyquerystringactionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### DeliveryRuleCondition
* DeliveryRuleCondition `object`: A condition for the delivery rule.
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleCookiesCondition
* DeliveryRuleCookiesCondition `object`: Defines the Cookies condition for the delivery rule.
  * parameters **required** [CookiesMatchConditionParameters](#cookiesmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleHttpVersionCondition
* DeliveryRuleHttpVersionCondition `object`: Defines the HttpVersion condition for the delivery rule.
  * parameters **required** [HttpVersionMatchConditionParameters](#httpversionmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleIsDeviceCondition
* DeliveryRuleIsDeviceCondition `object`: Defines the IsDevice condition for the delivery rule.
  * parameters **required** [IsDeviceMatchConditionParameters](#isdevicematchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRulePostArgsCondition
* DeliveryRulePostArgsCondition `object`: Defines the PostArgs condition for the delivery rule.
  * parameters **required** [PostArgsMatchConditionParameters](#postargsmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleQueryStringCondition
* DeliveryRuleQueryStringCondition `object`: Defines the QueryString condition for the delivery rule.
  * parameters **required** [QueryStringMatchConditionParameters](#querystringmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRemoteAddressCondition
* DeliveryRuleRemoteAddressCondition `object`: Defines the RemoteAddress condition for the delivery rule.
  * parameters **required** [RemoteAddressMatchConditionParameters](#remoteaddressmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRequestBodyCondition
* DeliveryRuleRequestBodyCondition `object`: Defines the RequestBody condition for the delivery rule.
  * parameters **required** [RequestBodyMatchConditionParameters](#requestbodymatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRequestHeaderAction
* DeliveryRuleRequestHeaderAction `object`: Defines the request header action for the delivery rule.
  * parameters **required** [HeaderActionParameters](#headeractionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### DeliveryRuleRequestHeaderCondition
* DeliveryRuleRequestHeaderCondition `object`: Defines the RequestHeader condition for the delivery rule.
  * parameters **required** [RequestHeaderMatchConditionParameters](#requestheadermatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRequestMethodCondition
* DeliveryRuleRequestMethodCondition `object`: Defines the RequestMethod condition for the delivery rule.
  * parameters **required** [RequestMethodMatchConditionParameters](#requestmethodmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRequestSchemeCondition
* DeliveryRuleRequestSchemeCondition `object`: Defines the RequestScheme condition for the delivery rule.
  * parameters **required** [RequestSchemeMatchConditionParameters](#requestschemematchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleRequestUriCondition
* DeliveryRuleRequestUriCondition `object`: Defines the RequestUri condition for the delivery rule.
  * parameters **required** [RequestUriMatchConditionParameters](#requesturimatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleResponseHeaderAction
* DeliveryRuleResponseHeaderAction `object`: Defines the response header action for the delivery rule.
  * parameters **required** [HeaderActionParameters](#headeractionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### DeliveryRuleUrlFileExtensionCondition
* DeliveryRuleUrlFileExtensionCondition `object`: Defines the UrlFileExtension condition for the delivery rule.
  * parameters **required** [UrlFileExtensionMatchConditionParameters](#urlfileextensionmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleUrlFileNameCondition
* DeliveryRuleUrlFileNameCondition `object`: Defines the UrlFileName condition for the delivery rule.
  * parameters **required** [UrlFileNameMatchConditionParameters](#urlfilenamematchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### DeliveryRuleUrlPathCondition
* DeliveryRuleUrlPathCondition `object`: Defines the UrlPath condition for the delivery rule.
  * parameters **required** [UrlPathMatchConditionParameters](#urlpathmatchconditionparameters)
  * name **required** `string` (values: RemoteAddress, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, RequestScheme, UrlPath, UrlFileExtension, UrlFileName, HttpVersion, Cookies, IsDevice): The name of the condition for the delivery rule.

### EdgeNode
* EdgeNode `object`: Edgenode is a global Point of Presence (POP) location used to deliver CDN content to end users.
  * properties [EdgeNodeProperties](#edgenodeproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### EdgeNodeProperties
* EdgeNodeProperties `object`: The JSON object that contains the properties required to create an edgenode.
  * ipAddressGroups **required** `array`: List of ip address groups.
    * items [IpAddressGroup](#ipaddressgroup)

### EdgenodeResult
* EdgenodeResult `object`: Result of the request to list CDN edgenodes. It contains a list of ip address group and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of edgenode list results if there are any.
  * value `array`: Edge node of CDN service.
    * items [EdgeNode](#edgenode)

### Endpoint
* Endpoint `object`: CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
  * properties [EndpointProperties](#endpointproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### EndpointListResult
* EndpointListResult `object`: Result of the request to list endpoints. It contains a list of endpoint objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of endpoint objects if there is any.
  * value `array`: List of CDN endpoints within a profile
    * items [Endpoint](#endpoint)

### EndpointProperties
* EndpointProperties `object`: The JSON object that contains the properties required to create an endpoint.
  * hostName `string`: The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
  * origins **required** `array`: The source of the content being delivered via CDN.
    * items [DeepCreatedOrigin](#deepcreatedorigin)
  * provisioningState `string`: Provisioning status of the endpoint.
  * resourceState `string` (values: Creating, Deleting, Running, Starting, Stopped, Stopping): Resource status of the endpoint.
  * contentTypesToCompress `array`: List of content types on which compression applies. The value should be a valid MIME type.
    * items `string`
  * deliveryPolicy `object`: A policy that specifies the delivery rules to be used for an endpoint.
    * description `string`: User-friendly description of the policy.
    * rules **required** `array`: A list of the delivery rules.
      * items [DeliveryRule](#deliveryrule)
  * geoFilters `array`: List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
    * items [GeoFilter](#geofilter)
  * isCompressionEnabled `boolean`: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
  * isHttpAllowed `boolean`: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * isHttpsAllowed `boolean`: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * optimizationType [OptimizationType](#optimizationtype)
  * originHostHeader `string`: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
  * originPath `string`: A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
  * probePath `string`: Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path.
  * queryStringCachingBehavior [QueryStringCachingBehavior](#querystringcachingbehavior)
  * webApplicationFirewallPolicyLink `object`: Defines the Web Application Firewall policy for the endpoint (if applicable)
    * id `string`: Resource ID.

### EndpointPropertiesUpdateParameters
* EndpointPropertiesUpdateParameters `object`: The JSON object containing endpoint update parameters.
  * contentTypesToCompress `array`: List of content types on which compression applies. The value should be a valid MIME type.
    * items `string`
  * deliveryPolicy `object`: A policy that specifies the delivery rules to be used for an endpoint.
    * description `string`: User-friendly description of the policy.
    * rules **required** `array`: A list of the delivery rules.
      * items [DeliveryRule](#deliveryrule)
  * geoFilters `array`: List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
    * items [GeoFilter](#geofilter)
  * isCompressionEnabled `boolean`: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
  * isHttpAllowed `boolean`: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * isHttpsAllowed `boolean`: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * optimizationType [OptimizationType](#optimizationtype)
  * originHostHeader `string`: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
  * originPath `string`: A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
  * probePath `string`: Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path.
  * queryStringCachingBehavior [QueryStringCachingBehavior](#querystringcachingbehavior)
  * webApplicationFirewallPolicyLink `object`: Defines the Web Application Firewall policy for the endpoint (if applicable)
    * id `string`: Resource ID.

### EndpointUpdateParameters
* EndpointUpdateParameters `object`: Properties required to create or update an endpoint.
  * properties [EndpointPropertiesUpdateParameters](#endpointpropertiesupdateparameters)
  * tags `object`: Endpoint tags.

### ErrorResponse
* ErrorResponse `object`: Error response indicates CDN service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### GeoFilter
* GeoFilter `object`: Rules defining user's geo access within a CDN endpoint.
  * action **required** `string` (values: Block, Allow): Action of the geo filter, i.e. allow or block access.
  * countryCodes **required** `array`: Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
    * items `string`
  * relativePath **required** `string`: Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)

### HeaderActionParameters
* HeaderActionParameters `object`: Defines the parameters for the request header action.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleHeaderActionParameters)
  * headerAction **required** `string` (values: Append, Overwrite, Delete): Action to perform
  * headerName **required** `string`: Name of the header to modify
  * value `string`: Value for the specified action

### HttpVersionMatchConditionParameters
* HttpVersionMatchConditionParameters `object`: Defines the parameters for HttpVersion match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleHttpVersionConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Equal): Describes operator to be matched

### IpAddressGroup
* IpAddressGroup `object`: CDN Ip address group
  * deliveryRegion `string`: The delivery region of the ip address group
  * ipv4Addresses `array`: The list of ip v4 addresses.
    * items [cidrIpAddress](#cidripaddress)
  * ipv6Addresses `array`: The list of ip v6 addresses.
    * items [cidrIpAddress](#cidripaddress)

### IsDeviceMatchConditionParameters
* IsDeviceMatchConditionParameters `object`: Defines the parameters for IsDevice match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleIsDeviceConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string` (values: Mobile, Desktop)
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Equal): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### KeyVaultCertificateSourceParameters
* KeyVaultCertificateSourceParameters `object`: Describes the parameters for using a user's KeyVault certificate for securing custom domain.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.KeyVaultCertificateSourceParameters)
  * deleteRule **required** `string` (values: NoAction): Describes the action that shall be taken when the certificate is removed from Key Vault.
  * resourceGroupName **required** `string`: Resource group of the user's Key Vault containing the SSL certificate
  * secretName **required** `string`: The name of Key Vault Secret (representing the full certificate PFX) in Key Vault.
  * secretVersion **required** `string`: The version(GUID) of Key Vault Secret in Key Vault.
  * subscriptionId **required** `string`: Subscription Id of the user's Key Vault containing the SSL certificate
  * updateRule **required** `string` (values: NoAction): Describes the action that shall be taken when the certificate is updated in Key Vault.
  * vaultName **required** `string`: The name of the user's Key Vault containing the SSL certificate

### LoadParameters
* LoadParameters `object`: Parameters required for content load.
  * contentPaths **required** `array`: The path to the content to be loaded. Path should be a relative file URL of the origin.
    * items `string`

### Operation
* Operation `object`: CDN REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Cdn
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationsListResult
* OperationsListResult `object`: Result of the request to list CDN operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of CDN operations supported by the CDN resource provider.
    * items [Operation](#operation)

### OptimizationType
* OptimizationType `string` (values: GeneralWebDelivery, GeneralMediaStreaming, VideoOnDemandMediaStreaming, LargeFileDownload, DynamicSiteAcceleration): Specifies what scenario the customer wants this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.

### Origin
* Origin `object`: CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
  * properties [OriginProperties](#originproperties)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### OriginListResult
* OriginListResult `object`: Result of the request to list origins. It contains a list of origin objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of origin objects if there are any.
  * value `array`: List of CDN origins within an endpoint
    * items [Origin](#origin)

### OriginProperties
* OriginProperties `object`: The JSON object that contains the properties of the origin.
  * hostName **required** `string`: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535.
  * httpsPort `integer`: The value of the https port. Must be between 1 and 65535.
  * provisioningState `string`: Provisioning status of the origin.
  * resourceState `string` (values: Creating, Active, Deleting): Resource status of the origin.

### OriginPropertiesParameters
* OriginPropertiesParameters `object`: The JSON object that contains the properties of the origin.
  * hostName `string`: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535.
  * httpsPort `integer`: The value of the HTTPS port. Must be between 1 and 65535.

### OriginUpdateParameters
* OriginUpdateParameters `object`: Origin properties needed for origin creation or update.
  * properties [OriginPropertiesParameters](#originpropertiesparameters)

### PostArgsMatchConditionParameters
* PostArgsMatchConditionParameters `object`: Defines the parameters for PostArgs match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRulePostArgsConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * selector **required** `string`: Name of PostArg to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### Profile
* Profile `object`: CDN profile is a logical grouping of endpoints that share the same settings, such as CDN provider and pricing tier.
  * properties [ProfileProperties](#profileproperties)
  * sku **required** [Sku](#sku)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ProfileListResult
* ProfileListResult `object`: Result of the request to list profiles. It contains a list of profile objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of profile objects if there are any.
  * value `array`: List of CDN profiles within a resource group.
    * items [Profile](#profile)

### ProfileProperties
* ProfileProperties `object`: The JSON object that contains the properties required to create a profile.
  * provisioningState `string`: Provisioning status of the profile.
  * resourceState `string` (values: Creating, Active, Deleting, Disabled): Resource status of the profile.

### ProfileUpdateParameters
* ProfileUpdateParameters `object`: Properties required to update a profile.
  * tags `object`: Profile tags

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PurgeParameters
* PurgeParameters `object`: Parameters required for content purge.
  * contentPaths **required** `array`: The path to the content to be purged. Can describe a file path or a wild card directory.
    * items `string`

### QueryStringCachingBehavior
* QueryStringCachingBehavior `string` (values: IgnoreQueryString, BypassCaching, UseQueryString, NotSet): Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.

### QueryStringMatchConditionParameters
* QueryStringMatchConditionParameters `object`: Defines the parameters for QueryString match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleQueryStringConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### RemoteAddressMatchConditionParameters
* RemoteAddressMatchConditionParameters `object`: Defines the parameters for RemoteAddress match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRemoteAddressConditionParameters)
  * matchValues **required** `array`: Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, IPMatch, GeoMatch): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### RequestBodyMatchConditionParameters
* RequestBodyMatchConditionParameters `object`: Defines the parameters for RequestBody match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRequestBodyConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### RequestHeaderMatchConditionParameters
* RequestHeaderMatchConditionParameters `object`: Defines the parameters for RequestHeader match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRequestHeaderConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * selector **required** `string`: Name of Header to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### RequestMethodMatchConditionParameters
* RequestMethodMatchConditionParameters `object`: Defines the parameters for RequestMethod match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRequestMethodConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string` (values: GET, HEAD, POST, PUT, DELETE, OPTIONS, TRACE)
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Equal): Describes operator to be matched

### RequestSchemeMatchConditionParameters
* RequestSchemeMatchConditionParameters `object`: Defines the parameters for RequestScheme match conditions 
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRequestSchemeConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string` (values: HTTP, HTTPS)
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Equal): Describes operator to be matched

### RequestUriMatchConditionParameters
* RequestUriMatchConditionParameters `object`: Defines the parameters for RequestUri match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleRequestUriConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ResourceType
* ResourceType `string` (values: Microsoft.Cdn/Profiles/Endpoints): Type of CDN resource used in CheckNameAvailability.

### ResourceUsage
* ResourceUsage `object`: Output of check resource usage API.
  * currentValue `integer`: Actual value of usage on the specified resource type.
  * limit `integer`: Quota of the specified resource type.
  * resourceType `string`: Resource type for which the usage is provided.
  * unit `string`: Unit of the usage. e.g. Count.

### ResourceUsageListResult
* ResourceUsageListResult `object`: Output of check resource usage API.
  * nextLink `string`: URL to get the next set of custom domain objects if there are any.
  * value `array`: List of resource usages.
    * items [ResourceUsage](#resourceusage)

### Sku
* Sku `object`: The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
  * name `string` (values: Standard_Verizon, Premium_Verizon, Custom_Verizon, Standard_Akamai, Standard_ChinaCdn, Standard_Microsoft, Premium_ChinaCdn): Name of the pricing tier.

### SsoUri
* SsoUri `object`: The URI required to login to the supplemental portal from the Azure portal.
  * ssoUriValue `string`: The URI used to login to the supplemental portal.

### SupportedOptimizationTypesListResult
* SupportedOptimizationTypesListResult `object`: The result of the GetSupportedOptimizationTypes API
  * supportedOptimizationTypes `array`: Supported optimization types for a profile.
    * items [OptimizationType](#optimizationtype)

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### UrlFileExtensionMatchConditionParameters
* UrlFileExtensionMatchConditionParameters `object`: Defines the parameters for UrlFileExtension match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionMatchConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### UrlFileNameMatchConditionParameters
* UrlFileNameMatchConditionParameters `object`: Defines the parameters for UrlFilename match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFilenameConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### UrlPathMatchConditionParameters
* UrlPathMatchConditionParameters `object`: Defines the parameters for UrlPath match conditions
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleUrlPathMatchConditionParameters)
  * matchValues **required** `array`: The match value for the condition of the delivery rule
    * items `string`
  * negateCondition `boolean`: Describes if this is negate condition or not
  * operator **required** `string` (values: Any, Equal, Contains, BeginsWith, EndsWith, LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual, Wildcard): Describes operator to be matched
  * transforms `array`: List of transforms
    * items [transform](#transform)

### UrlRedirectAction
* UrlRedirectAction `object`: Defines the url redirect action for the delivery rule.
  * parameters **required** [UrlRedirectActionParameters](#urlredirectactionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### UrlRedirectActionParameters
* UrlRedirectActionParameters `object`: Defines the parameters for the url redirect action.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRedirectActionParameters)
  * customFragment `string`: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
  * customHostname `string`: Host to redirect. Leave empty to use the incoming host as the destination host.
  * customPath `string`: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
  * customQueryString `string`: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. ? and & will be added automatically so do not include them.
  * destinationProtocol `string` (values: MatchRequest, Http, Https): Protocol to use for the redirect. The default value is MatchRequest
  * redirectType **required** `string` (values: Moved, Found, TemporaryRedirect, PermanentRedirect): The redirect type the rule will use when redirecting traffic.

### UrlRewriteAction
* UrlRewriteAction `object`: Defines the url rewrite action for the delivery rule.
  * parameters **required** [UrlRewriteActionParameters](#urlrewriteactionparameters)
  * name **required** `string` (values: CacheExpiration, CacheKeyQueryString, ModifyRequestHeader, ModifyResponseHeader, UrlRedirect, UrlRewrite): The name of the action for the delivery rule.

### UrlRewriteActionParameters
* UrlRewriteActionParameters `object`: Defines the parameters for the url rewrite action.
  * @odata.type **required** `string` (values: #Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRewriteActionParameters)
  * destination **required** `string`: Define the destination path for be used in the rewrite. This will overwrite the source pattern 
  * preserveUnmatchedPath `boolean`: If True, the remaining path after the source pattern will be appended to the new destination path.  
  * sourcePattern **required** `string`: define a request URI pattern that identifies the type of requests that may be rewritten. Currently, source pattern uses a prefix-based match. To match all URL paths, use "/" as the source pattern value. To match only the root directory and re-write this path, use the origin path field

### UserManagedHttpsParameters
* UserManagedHttpsParameters `object`: Defines the certificate source parameters using user's keyvault certificate for enabling SSL.
  * certificateSourceParameters **required** [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters)
  * certificateSource **required** `string` (values: AzureKeyVault, Cdn): Defines the source of the SSL certificate.
  * minimumTlsVersion `string` (values: None, TLS10, TLS12): TLS protocol version that will be used for Https
  * protocolType **required** `string` (values: ServerNameIndication, IPBased): Defines the TLS extension protocol that is used for secure delivery.

### ValidateCustomDomainInput
* ValidateCustomDomainInput `object`: Input of the custom domain to be validated for DNS mapping.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.

### ValidateCustomDomainOutput
* ValidateCustomDomainOutput `object`: Output of custom domain validation.
  * customDomainValidated `boolean`: Indicates whether the custom domain is valid or not.
  * message `string`: Error message describing why the custom domain is not valid.
  * reason `string`: The reason why the custom domain is not valid.

### ValidateProbeInput
* ValidateProbeInput `object`: Input of the validate probe API.
  * probeURL **required** `string`: The probe URL to validate.

### ValidateProbeOutput
* ValidateProbeOutput `object`: Output of the validate probe API.
  * errorCode `string`: Specifies the error code when the probe url is not accepted.
  * isValid `boolean`: Indicates whether the probe URL is accepted or not.
  * message `string`: The detailed error message describing why the probe URL is not accepted.

### cidrIpAddress
* cidrIpAddress `object`: CIDR Ip address
  * baseIpAddress `string`: Ip address itself.
  * prefixLength `integer`: The length of the prefix of the ip address.

### transform
* transform `string` (values: Lowercase, Uppercase): Describes what transforms are applied before matching


