# @datafire/azure_arm_cdn

Client library for CdnManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_cdn
```
```js
let azure_arm_cdn = require('@datafire/azure_arm_cdn').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_cdn.CheckNameAvailability({}).then(data => {
  console.log(data);
})
```

## Description

Use these APIs to manage Azure CDN resources through the Azure Resource Manager. You must make sure that requests made to these resources are secure.

## Actions

### CheckNameAvailability
Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.


```js
azure_arm_cdn.CheckNameAvailability({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### EdgeNodes_List
Lists all the edge nodes of a CDN service.


```js
azure_arm_cdn.EdgeNodes_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [EdgenodeResult](#edgenoderesult)

### ListOperations
Lists all of the available CDN REST API operations.


```js
azure_arm_cdn.ListOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [OperationListResult](#operationlistresult)

### ListResourceUsage
Check the quota and actual usage of the CDN profiles under the given subscription.


```js
azure_arm_cdn.ListResourceUsage({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### Profiles_List
Lists all of the CDN profiles within an Azure subscription.


```js
azure_arm_cdn.Profiles_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_ListByResourceGroup
Lists all of the CDN profiles within a resource group.


```js
azure_arm_cdn.Profiles_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_Delete
Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.


```js
azure_arm_cdn.Profiles_Delete({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### Profiles_Get
Gets a CDN profile with the specified profile name under the specified subscription and resource group.


```js
azure_arm_cdn.Profiles_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Profile](#profile)

### Profiles_Update
Updates an existing CDN profile with the specified profile name under the specified subscription and resource group.


```js
azure_arm_cdn.Profiles_Update({
  "resourceGroupName": "",
  "profileName": "",
  "profileUpdateParameters": {
    "tags": {}
  },
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Profile](#profile)

### Profiles_Create
Creates a new CDN profile with a profile name under the specified subscription and resource group.


```js
azure_arm_cdn.Profiles_Create({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Profile](#profile)

### Profiles_ListResourceUsage
Checks the quota and actual usage of endpoints under the given CDN profile.


```js
azure_arm_cdn.Profiles_ListResourceUsage({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### Endpoints_ListByProfile
Lists existing CDN endpoints.


```js
azure_arm_cdn.Endpoints_ListByProfile({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [EndpointListResult](#endpointlistresult)

### Endpoints_Delete
Deletes an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_arm_cdn.Endpoints_Delete({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### Endpoints_Get
Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_arm_cdn.Endpoints_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Update
Updates an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags and Origin HostHeader can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update custom domains, use the Update Custom Domain operation.


```js
azure_arm_cdn.Endpoints_Update({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Create
Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.


```js
azure_arm_cdn.Endpoints_Create({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_ListResourceUsage
Checks the quota and usage of geo filters and custom domains under the given endpoint.


```js
azure_arm_cdn.Endpoints_ListResourceUsage({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ResourceUsageListResult](#resourceusagelistresult)

### CustomDomains_ListByEndpoint
Lists all of the existing custom domains within an endpoint.


```js
azure_arm_cdn.CustomDomains_ListByEndpoint({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [CustomDomainListResult](#customdomainlistresult)

### CustomDomains_Delete
Deletes an existing custom domain within an endpoint.


```js
azure_arm_cdn.CustomDomains_Delete({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### CustomDomains_Get
Gets an exisitng custom domain within an endpoint.


```js
azure_arm_cdn.CustomDomains_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [CustomDomain](#customdomain)

### CustomDomains_Create
Creates a new custom domain within an endpoint.


```js
azure_arm_cdn.CustomDomains_Create({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [CustomDomain](#customdomain)

### CustomDomains_DisableCustomHttps
Disable https delivery of the custom domain.


```js
azure_arm_cdn.CustomDomains_DisableCustomHttps({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### CustomDomains_EnableCustomHttps
Enable https delivery of the custom domain.


```js
azure_arm_cdn.CustomDomains_EnableCustomHttps({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### Endpoints_LoadContent
Pre-loads a content to CDN. Available for Verizon Profiles.


```js
azure_arm_cdn.Endpoints_LoadContent({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### Origins_ListByEndpoint
Lists all of the existing origins within an endpoint.


```js
azure_arm_cdn.Origins_ListByEndpoint({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [OriginListResult](#originlistresult)

### Origins_Get
Gets an existing origin within an endpoint.


```js
azure_arm_cdn.Origins_Get({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Origin](#origin)

### Origins_Update
Updates an existing origin within an endpoint.


```js
azure_arm_cdn.Origins_Update({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Origin](#origin)

### Endpoints_PurgeContent
Removes a content from CDN.


```js
azure_arm_cdn.Endpoints_PurgeContent({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
*Output schema unknown*

### Endpoints_Start
Starts an existing CDN endpoint that is on a stopped state.


```js
azure_arm_cdn.Endpoints_Start({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Stop
Stops an existing running CDN endpoint.


```js
azure_arm_cdn.Endpoints_Stop({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_ValidateCustomDomain
Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.


```js
azure_arm_cdn.Endpoints_ValidateCustomDomain({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [ValidateCustomDomainOutput](#validatecustomdomainoutput)

### Profiles_GenerateSsoUri
Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemnetal portal is used to configure advanced feature capabilities that are not yet available in the Azure portal, such as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and alerts in a premium profile. The SSO URI changes approximately every 10 minutes.


```js
azure_arm_cdn.Profiles_GenerateSsoUri({
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
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2016-10-02.

#### Output
* output [SsoUri](#ssouri)



## Definitions

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: Input of CheckNameAvailability API.
  * name **required** `string`: The resource name to validate.
  * type **required** [ResourceType](#resourcetype)

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: Output of check name availability API.
  * message `string`: The detailed error message describing why the name is not available.
  * nameAvailable `boolean`: Indicates whether the name is available.
  * reason `string`: The reason why the name is not available.

### CustomDomain
* CustomDomain `object`: Customer provided domain for branding purposes, e.g. www.consoto.com.
  * properties [CustomDomainProperties](#customdomainproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

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
  * customHttpsProvisioningState `string` (values: Enabling, Enabled, Disabling, Disabled, Failed): Provisioning state of Custom Https of the custom domain.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.
  * provisioningState `string`: Provisioning status of the custom domain.
  * resourceState `string` (values: Creating, Active, Deleting): Resource status of the custom domain.
  * validationData `string`: Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.

### CustomDomainPropertiesParameters
* CustomDomainPropertiesParameters `object`: The JSON object that contains the properties of the custom domain to create.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.

### DeepCreatedOrigin
* DeepCreatedOrigin `object`: Origin to be added when creating a CDN endpoint.
  * name **required** `string`: Origin name
  * properties [DeepCreatedOriginProperties](#deepcreatedoriginproperties)

### DeepCreatedOriginProperties
* DeepCreatedOriginProperties `object`: Properties of origin Properties of the origin created on the CDN endpoint.
  * hostName **required** `string`: The address of the origin. It can be a domain names, IPv4 address, or IPv6 address.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535
  * httpsPort `integer`: The value of the HTTPS port. Must be between 1 and 65535

### EdgeNode
* EdgeNode `object`: Edge node of CDN service.
  * properties [EdgeNodeProperties](#edgenodeproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
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
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### EndpointListResult
* EndpointListResult `object`: Result of the request to list endpoints. It contains a list of endpoint objects and a URL link to get the the next set of results.
  * nextLink `string`: URL to get the next set of endpoint objects if there are any.
  * value `array`: List of CDN endpoints within a profile
    * items [Endpoint](#endpoint)

### EndpointProperties
* EndpointProperties `object`: The JSON object that contains the properties required to create an endpoint.
  * hostName `string`: The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. consoto.azureedge.net
  * origins **required** `array`: The source of the content being delivered via CDN.
    * items [DeepCreatedOrigin](#deepcreatedorigin)
  * provisioningState `string`: Provisioning status of the endpoint.
  * resourceState `string` (values: Creating, Deleting, Running, Starting, Stopped, Stopping): Resource status of the endpoint.
  * contentTypesToCompress `array`: List of content types on which compression applies. The value should be a valid MIME type.
    * items `string`
  * geoFilters `array`: List of rules defining user geo access within a CDN endpoint. Each geo filter defines an acess rule to a specified path or content, e.g. block APAC for path /pictures/
    * items [GeoFilter](#geofilter)
  * isCompressionEnabled `boolean`: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
  * isHttpAllowed `boolean`: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * isHttpsAllowed `boolean`: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * optimizationType `string`: Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
  * originHostHeader `string`: The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
  * originPath `string`: The path used when CDN sends request to origin.
  * queryStringCachingBehavior [QueryStringCachingBehavior](#querystringcachingbehavior)

### EndpointPropertiesUpdateParameters
* EndpointPropertiesUpdateParameters `object`: Result of the request to list endpoints. It contains a list of endpoints and a URL link to get the next set of results.
  * contentTypesToCompress `array`: List of content types on which compression applies. The value should be a valid MIME type.
    * items `string`
  * geoFilters `array`: List of rules defining user geo access within a CDN endpoint. Each geo filter defines an acess rule to a specified path or content, e.g. block APAC for path /pictures/
    * items [GeoFilter](#geofilter)
  * isCompressionEnabled `boolean`: Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
  * isHttpAllowed `boolean`: Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * isHttpsAllowed `boolean`: Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
  * optimizationType `string`: Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
  * originHostHeader `string`: The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
  * originPath `string`: The path used when CDN sends request to origin.
  * queryStringCachingBehavior [QueryStringCachingBehavior](#querystringcachingbehavior)

### EndpointUpdateParameters
* EndpointUpdateParameters `object`: Properties required to create a new endpoint.
  * properties [EndpointPropertiesUpdateParameters](#endpointpropertiesupdateparameters)
  * tags `object`: Endpoint tags.

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates CDN service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### GeoFilter
* GeoFilter `object`: Rules defining user geo access within a CDN endpoint.
  * action **required** `string` (values: Block, Allow): Action of the geo filter, i.e. allow or block access.
  * countryCodes **required** `array`: Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
    * items `string`
  * relativePath **required** `string`: Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)

### IpAddressGroup
* IpAddressGroup `object`: CDN Ip address group
  * deliveryRegion `string`: The delivery region of the ip address group
  * ipv4Addresses `array`: The list of ip v4 addresses.
    * items [cidrIpAddress](#cidripaddress)
  * ipv6Addresses `array`: The list of ip v6 addresses.
    * items [cidrIpAddress](#cidripaddress)

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

### OperationListResult
* OperationListResult `object`: Result of the request to list CDN operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of CDN operations supported by the CDN resource provider.
    * items [Operation](#operation)

### Origin
* Origin `object`: CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
  * properties [OriginProperties](#originproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### OriginListResult
* OriginListResult `object`: Result of the request to list origins. It contains a list of origin objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of origin objects if there are any.
  * value `array`: List of CDN origins within an endpoint
    * items [Origin](#origin)

### OriginProperties
* OriginProperties `object`: The JSON object that contains the properties of the origin to create.
  * hostName **required** `string`: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535.
  * httpsPort `integer`: The value of the https port. Must be between 1 and 65535.
  * provisioningState `string`: Provisioning status of the origin.
  * resourceState `string` (values: Creating, Active, Deleting): Resource status of the origin.

### OriginPropertiesParameters
* OriginPropertiesParameters `object`: The JSON object that contains the properties of the origin to create.
  * hostName `string`: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
  * httpPort `integer`: The value of the HTTP port. Must be between 1 and 65535.
  * httpsPort `integer`: The value of the HTTPS port. Must be between 1 and 65535.

### OriginUpdateParameters
* OriginUpdateParameters `object`: Origin properties needed for origin creation or update.
  * properties [OriginPropertiesParameters](#originpropertiesparameters)

### Profile
* Profile `object`: CDN profile represents the top level resource and the entry point into the CDN API. This allows users to set up a logical grouping of endpoints in addition to creating shared configuration settings and selecting pricing tiers and providers.
  * properties [ProfileProperties](#profileproperties)
  * sku **required** [Sku](#sku)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ProfileListResult
* ProfileListResult `object`: Result of the request to list profiles. It contains a list of profile objects and a URL link to get the the next set of results.
  * nextLink `string`: URL to get the next set of profile objects if there are any.
  * value `array`: List of CDN profiles within a resource group.
    * items [Profile](#profile)

### ProfileProperties
* ProfileProperties `object`: The JSON object that contains the properties required to create a profile.
  * provisioningState `string`: Provisioning status of the profile.
  * resourceState `string` (values: Creating, Active, Deleting, Disabled): Resource status of the profile.

### ProfileUpdateParameters
* ProfileUpdateParameters `object`: Properties required to update a profile.
  * tags **required** `object`: Profile tags

### PurgeParameters
* PurgeParameters `object`: Parameters required for content purge.
  * contentPaths **required** `array`: The path to the content to be purged. Can describe a file path or a wild card directory.
    * items `string`

### QueryStringCachingBehavior
* QueryStringCachingBehavior `string` (values: IgnoreQueryString, BypassCaching, UseQueryString, NotSet): Defines the query string caching behavior.

### Resource
* Resource `object`: The Resource definition.
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ResourceType
* ResourceType `string` (values: Microsoft.Cdn/Profiles/Endpoints): Type of CDN resource used in CheckNameAvailability.

### ResourceUsage
* ResourceUsage `object`: Output of check resource usage API.
  * currentValue `integer`: Actual value of the resource type.
  * limit `integer`: Quota of the resource type.
  * resourceType `string`: Resource type of the usages.
  * unit `string`: Unit of the usage. e.g. Count.

### ResourceUsageListResult
* ResourceUsageListResult `object`: Output of check resource usage API.
  * nextLink `string`: URL to get the next set of custom domain objects if there are any.
  * value `array`: List of resource usages.
    * items [ResourceUsage](#resourceusage)

### Sku
* Sku `object`: The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
  * name `string` (values: Standard_Verizon, Premium_Verizon, Custom_Verizon, Standard_Akamai, Standard_ChinaCdn): Name of the pricing tier.

### SsoUri
* SsoUri `object`: SSO URI required to login to the supplemental portal.
  * ssoUriValue `string`: The URI used to login to the supplemental portal.

### ValidateCustomDomainInput
* ValidateCustomDomainInput `object`: Input of the custom domain to be validated for DNS mapping.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.

### ValidateCustomDomainOutput
* ValidateCustomDomainOutput `object`: Output of custom domain validation.
  * customDomainValidated `boolean`: Indicates whether the custom domain is validated or not.
  * message `string`: Error message describing why the custom domain is not valid.
  * reason `string`: The reason why the custom domain is not valid.

### cidrIpAddress
* cidrIpAddress `object`: CIDR Ip address
  * baseIpAddress `string`: Ip adress itself.
  * prefixLength `integer`: The length of the prefix of the ip address.


