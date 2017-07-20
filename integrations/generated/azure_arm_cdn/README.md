# @datafire/azure_arm_cdn

Client library for CdnManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_cdn
```

```js
let datafire = require('datafire');
let azure_arm_cdn = require('@datafire/azure_arm_cdn').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_cdn: account,
  }
})


azure_arm_cdn.CheckNameAvailability({}, context).then(data => {
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

#### Parameters
* checkNameAvailabilityInput (object) **required** - Input of CheckNameAvailability API.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

### EdgeNodes_List
Lists all the edge nodes of a CDN service.


```js
azure_arm_cdn.EdgeNodes_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

### ListOperations
Lists all of the available CDN REST API operations.


```js
azure_arm_cdn.ListOperations({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

### ListResourceUsage
Check the quota and actual usage of the CDN profiles under the given subscription.


```js
azure_arm_cdn.ListResourceUsage({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

### Profiles_List
Lists all of the CDN profiles within an Azure subscription.


```js
azure_arm_cdn.Profiles_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

### Profiles_ListByResourceGroup
Lists all of the CDN profiles within a resource group.


```js
azure_arm_cdn.Profiles_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* profileUpdateParameters (object) **required** - Properties required to update a profile.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* profile (object) **required** - CDN profile represents the top level resource and the entry point into the CDN API. This allows users to set up a logical grouping of endpoints in addition to creating shared configuration settings and selecting pricing tiers and providers.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* endpointUpdateProperties (object) **required** - Properties required to create a new endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* endpoint (object) **required** - CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainName (string) **required** - Name of the custom domain within an endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainName (string) **required** - Name of the custom domain within an endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainName (string) **required** - Name of the custom domain within an endpoint.
* customDomainProperties (object) **required** - The customDomain JSON object required for custom domain creation or update.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainName (string) **required** - Name of the custom domain within an endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainName (string) **required** - Name of the custom domain within an endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* contentFilePaths (object) **required** - Parameters required for content load.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* originName (string) **required** - Name of the origin which is unique within the endpoint.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* originName (string) **required** - Name of the origin which is unique within the endpoint.
* originUpdateProperties (object) **required** - Origin properties needed for origin creation or update.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* contentFilePaths (object) **required** - Parameters required for content purge.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* endpointName (string) **required** - Name of the endpoint under the profile which is unique globally.
* customDomainProperties (object) **required** - Input of the custom domain to be validated for DNS mapping.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the Resource group within the Azure subscription.
* profileName (string) **required** - Name of the CDN profile which is unique within the resource group.
* subscriptionId (string) **required** - Azure Subscription ID.
* api-version (string) **required** - Version of the API to be used with the client request. Current version is 2016-10-02.

