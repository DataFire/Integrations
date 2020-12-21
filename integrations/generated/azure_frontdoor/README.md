# @datafire/azure_frontdoor

Client library for FrontDoorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_frontdoor
```
```js
let azure_frontdoor = require('@datafire/azure_frontdoor').create({
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

Use these APIs to manage Azure Front Door resources through the Azure Resource Manager. You must make sure that requests made to these resources are secure.

## Actions

### CheckFrontDoorNameAvailability
Check the availability of a Front Door resource name.


```js
azure_frontdoor.CheckFrontDoorNameAvailability({
  "checkFrontDoorNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkFrontDoorNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * api-version **required** `string`: Client API version.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### CheckFrontDoorNameAvailabilityWithSubscription
Check the availability of a Front Door subdomain.


```js
azure_frontdoor.CheckFrontDoorNameAvailabilityWithSubscription({
  "checkFrontDoorNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkFrontDoorNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### FrontDoors_List
Lists all of the Front Doors within an Azure subscription.


```js
azure_frontdoor.FrontDoors_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontDoorListResult](#frontdoorlistresult)

### FrontDoors_ListByResourceGroup
Lists all of the Front Doors within a resource group under a subscription.


```js
azure_frontdoor.FrontDoors_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontDoorListResult](#frontdoorlistresult)

### FrontDoors_Delete
Deletes an existing Front Door with the specified parameters.


```js
azure_frontdoor.FrontDoors_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### FrontDoors_Get
Gets a Front Door with the specified Front Door name under the specified subscription and resource group.


```js
azure_frontdoor.FrontDoors_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontDoor](#frontdoor)

### FrontDoors_CreateOrUpdate
Creates a new Front Door with a Front Door name under the specified subscription and resource group.


```js
azure_frontdoor.FrontDoors_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "frontDoorParameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * frontDoorParameters **required** [FrontDoor](#frontdoor)
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontDoor](#frontdoor)

### FrontendEndpoints_ListByFrontDoor
Lists all of the frontend endpoints within a Front Door.


```js
azure_frontdoor.FrontendEndpoints_ListByFrontDoor({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontendEndpointsListResult](#frontendendpointslistresult)

### FrontendEndpoints_Get
Gets a Frontend endpoint with the specified name within the specified Front Door.


```js
azure_frontdoor.FrontendEndpoints_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "frontendEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * frontendEndpointName **required** `string`: Name of the Frontend endpoint which is unique within the Front Door.
  * api-version **required** `string`: Client API version.

#### Output
* output [FrontendEndpoint](#frontendendpoint)

### FrontendEndpoints_DisableHttps
Disables a frontendEndpoint for HTTPS traffic


```js
azure_frontdoor.FrontendEndpoints_DisableHttps({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "frontendEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * frontendEndpointName **required** `string`: Name of the Frontend endpoint which is unique within the Front Door.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### FrontendEndpoints_EnableHttps
Enables a frontendEndpoint for HTTPS traffic


```js
azure_frontdoor.FrontendEndpoints_EnableHttps({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "frontendEndpointName": "",
  "customHttpsConfiguration": {
    "minimumTlsVersion": "",
    "certificateSource": "",
    "protocolType": ""
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * frontendEndpointName **required** `string`: Name of the Frontend endpoint which is unique within the Front Door.
  * customHttpsConfiguration **required** [CustomHttpsConfiguration](#customhttpsconfiguration)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Endpoints_PurgeContent
Removes a content from Front Door.


```js
azure_frontdoor.Endpoints_PurgeContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "contentFilePaths": {
    "contentPaths": []
  },
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * contentFilePaths **required** [PurgeParameters](#purgeparameters)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### FrontDoors_ValidateCustomDomain
Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.


```js
azure_frontdoor.FrontDoors_ValidateCustomDomain({
  "subscriptionId": "",
  "resourceGroupName": "",
  "frontDoorName": "",
  "api-version": "",
  "customDomainProperties": {
    "hostName": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * frontDoorName **required** `string`: Name of the Front Door which is globally unique.
  * api-version **required** `string`: Client API version.
  * customDomainProperties **required** [ValidateCustomDomainInput](#validatecustomdomaininput)

#### Output
* output [ValidateCustomDomainOutput](#validatecustomdomainoutput)



## Definitions

### Backend
* Backend `object`: Backend address of a frontDoor load balancer.
  * address `string`: Location of the backend (IP address or FQDN)
  * backendHostHeader `string`: The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
  * enabledState `string` (values: Enabled, Disabled): Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
  * httpPort `integer`: The HTTP TCP port number. Must be between 1 and 65535.
  * httpsPort `integer`: The HTTPS TCP port number. Must be between 1 and 65535.
  * priority `integer`: Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
  * weight `integer`: Weight of this endpoint for load balancing purposes.

### BackendPool
* BackendPool `object`: A backend pool is a collection of backends that can be routed to.
  * name `string`: Resource name.
  * properties [BackendPoolProperties](#backendpoolproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### BackendPoolListResult
* BackendPoolListResult `object`: Result of the request to list Backend Pools. It contains a list of Backend Pools objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of BackendPool objects if there are any.
  * value `array`: List of Backend Pools within a Front Door.
    * items [BackendPool](#backendpool)

### BackendPoolProperties
* BackendPoolProperties `object`: The JSON object that contains the properties required to create a routing rule.
  * resourceState [ResourceState](#resourcestate)
  * backends `array`: The set of backends for this pool
    * items [Backend](#backend)
  * healthProbeSettings `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * loadBalancingSettings `object`: Reference to another subresource.
    * id `string`: Resource ID.

### BackendPoolUpdateParameters
* BackendPoolUpdateParameters `object`: A collection of backends that can be routed to.
  * backends `array`: The set of backends for this pool
    * items [Backend](#backend)
  * healthProbeSettings `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * loadBalancingSettings `object`: Reference to another subresource.
    * id `string`: Resource ID.

### BackendPoolsSettings
* BackendPoolsSettings `object`: Settings that apply to all backend pools.
  * enforceCertificateNameCheck `string` (values: Enabled, Disabled): Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
  * sendRecvTimeoutSeconds `integer`: Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.

### CacheConfiguration
* CacheConfiguration `object`: Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.
  * dynamicCompression `string` (values: Enabled, Disabled): Whether to use dynamic compression for cached content
  * queryParameterStripDirective `string` (values: StripNone, StripAll): Treatment of URL query terms when forming the cache key.

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: Input of CheckNameAvailability API.
  * name **required** `string`: The resource name to validate.
  * type **required** [ResourceType](#resourcetype)

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: Output of check name availability API.
  * message `string`: The detailed error message describing why the name is not available.
  * nameAvailability `string` (values: Available, Unavailable): Indicates whether the name is available.
  * reason `string`: The reason why the name is not available.

### CustomHttpsConfiguration
* CustomHttpsConfiguration `object`: Https settings for a domain
  * certificateSource **required** `string` (values: AzureKeyVault, FrontDoor): Defines the source of the SSL certificate
  * frontDoorCertificateSourceParameters [FrontDoorCertificateSourceParameters](#frontdoorcertificatesourceparameters)
  * keyVaultCertificateSourceParameters [KeyVaultCertificateSourceParameters](#keyvaultcertificatesourceparameters)
  * minimumTlsVersion **required** `string` (values: 1.0, 1.2): The minimum TLS version required from the clients to establish an SSL handshake with Front Door.
  * protocolType **required** `string` (values: ServerNameIndication): Defines the TLS extension protocol that is used for secure delivery

### ErrorResponse
* ErrorResponse `object`: Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### ForwardingConfiguration
* ForwardingConfiguration `object`: Describes Forwarding Route.
  * backendPool `object`: Reference to another subresource.
    * id `string`: Resource ID.
  * cacheConfiguration [CacheConfiguration](#cacheconfiguration)
  * customForwardingPath `string`: A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
  * forwardingProtocol `string` (values: HttpOnly, HttpsOnly, MatchRequest): Protocol this rule will use when forwarding traffic to backends.
  * @odata.type **required** `string`

### FrontDoor
* FrontDoor `object`: Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.
  * properties [FrontDoorProperties](#frontdoorproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### FrontDoorCertificateSourceParameters
* FrontDoorCertificateSourceParameters `object`: Parameters required for enabling SSL with Front Door-managed certificates
  * certificateType `string` (values: Dedicated): Defines the type of the certificate used for secure connections to a frontendEndpoint

### FrontDoorListResult
* FrontDoorListResult `object`: Result of the request to list Front Doors. It contains a list of Front Door objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of Front Door objects if there are any.
  * value `array`: List of Front Doors within a resource group.
    * items [FrontDoor](#frontdoor)

### FrontDoorProperties
* FrontDoorProperties `object`: The JSON object that contains the properties required to create an endpoint.
  * cname `string`: The host that each frontendEndpoint must CNAME to.
  * provisioningState `string`: Provisioning state of the Front Door.
  * resourceState [ResourceState](#resourcestate)
  * backendPools `array`: Backend pools available to routing rules.
    * items [BackendPool](#backendpool)
  * backendPoolsSettings [BackendPoolsSettings](#backendpoolssettings)
  * enabledState `string` (values: Enabled, Disabled): Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
  * friendlyName `string`: A friendly name for the frontDoor
  * frontendEndpoints `array`: Frontend endpoints available to routing rules.
    * items [FrontendEndpoint](#frontendendpoint)
  * healthProbeSettings `array`: Health probe settings associated with this Front Door instance.
    * items [HealthProbeSettingsModel](#healthprobesettingsmodel)
  * loadBalancingSettings `array`: Load balancing settings associated with this Front Door instance.
    * items [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)
  * routingRules `array`: Routing rules associated with this Front Door.
    * items [RoutingRule](#routingrule)

### FrontDoorUpdateParameters
* FrontDoorUpdateParameters `object`: The properties needed to update a Front Door
  * backendPools `array`: Backend pools available to routing rules.
    * items [BackendPool](#backendpool)
  * backendPoolsSettings [BackendPoolsSettings](#backendpoolssettings)
  * enabledState `string` (values: Enabled, Disabled): Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
  * friendlyName `string`: A friendly name for the frontDoor
  * frontendEndpoints `array`: Frontend endpoints available to routing rules.
    * items [FrontendEndpoint](#frontendendpoint)
  * healthProbeSettings `array`: Health probe settings associated with this Front Door instance.
    * items [HealthProbeSettingsModel](#healthprobesettingsmodel)
  * loadBalancingSettings `array`: Load balancing settings associated with this Front Door instance.
    * items [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)
  * routingRules `array`: Routing rules associated with this Front Door.
    * items [RoutingRule](#routingrule)

### FrontendEndpoint
* FrontendEndpoint `object`: A frontend endpoint used for routing.
  * name `string`: Resource name.
  * properties [FrontendEndpointProperties](#frontendendpointproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### FrontendEndpointProperties
* FrontendEndpointProperties `object`: The JSON object that contains the properties required to create a frontend endpoint.
  * customHttpsConfiguration [CustomHttpsConfiguration](#customhttpsconfiguration)
  * customHttpsProvisioningState `string` (values: Enabling, Enabled, Disabling, Disabled, Failed): Provisioning status of Custom Https of the frontendEndpoint.
  * customHttpsProvisioningSubstate `string` (values: SubmittingDomainControlValidationRequest, PendingDomainControlValidationREquestApproval, DomainControlValidationRequestApproved, DomainControlValidationRequestRejected, DomainControlValidationRequestTimedOut, IssuingCertificate, DeployingCertificate, CertificateDeployed, DeletingCertificate, CertificateDeleted): Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
  * resourceState [ResourceState](#resourcestate)
  * hostName `string`: The host name of the frontendEndpoint. Must be a domain name.
  * sessionAffinityEnabledState `string` (values: Enabled, Disabled): Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
  * sessionAffinityTtlSeconds `integer`: UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
  * webApplicationFirewallPolicyLink `object`: Defines the Web Application Firewall policy for each host (if applicable)
    * id `string`: Resource ID.

### FrontendEndpointUpdateParameters
* FrontendEndpointUpdateParameters `object`: Frontend endpoint used in routing rule
  * hostName `string`: The host name of the frontendEndpoint. Must be a domain name.
  * sessionAffinityEnabledState `string` (values: Enabled, Disabled): Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
  * sessionAffinityTtlSeconds `integer`: UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
  * webApplicationFirewallPolicyLink `object`: Defines the Web Application Firewall policy for each host (if applicable)
    * id `string`: Resource ID.

### FrontendEndpointsListResult
* FrontendEndpointsListResult `object`: Result of the request to list frontend endpoints. It contains a list of Frontend endpoint objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of frontend endpoints if there are any.
  * value `array`: List of Frontend endpoints within a Front Door.
    * items [FrontendEndpoint](#frontendendpoint)

### HealthProbeSettingsListResult
* HealthProbeSettingsListResult `object`: Result of the request to list HealthProbeSettings. It contains a list of HealthProbeSettings objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of HealthProbeSettings objects if there are any.
  * value `array`: List of HealthProbeSettings within a Front Door.
    * items [HealthProbeSettingsModel](#healthprobesettingsmodel)

### HealthProbeSettingsModel
* HealthProbeSettingsModel `object`: Load balancing settings for a backend pool
  * name `string`: Resource name.
  * properties [HealthProbeSettingsProperties](#healthprobesettingsproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### HealthProbeSettingsProperties
* HealthProbeSettingsProperties `object`: The JSON object that contains the properties required to create a health probe settings.
  * resourceState [ResourceState](#resourcestate)
  * enabledState `string` (values: Enabled, Disabled): Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
  * healthProbeMethod `string` (values: GET, HEAD): Configures which HTTP method to use to probe the backends defined under backendPools.
  * intervalInSeconds `integer`: The number of seconds between health probes.
  * path `string`: The path to use for the health probe. Default is /
  * protocol `string` (values: Http, Https): Protocol scheme to use for this probe

### HealthProbeSettingsUpdateParameters
* HealthProbeSettingsUpdateParameters `object`: L7 health probe settings for a backend pool
  * enabledState `string` (values: Enabled, Disabled): Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
  * healthProbeMethod `string` (values: GET, HEAD): Configures which HTTP method to use to probe the backends defined under backendPools.
  * intervalInSeconds `integer`: The number of seconds between health probes.
  * path `string`: The path to use for the health probe. Default is /
  * protocol `string` (values: Http, Https): Protocol scheme to use for this probe

### KeyVaultCertificateSourceParameters
* KeyVaultCertificateSourceParameters `object`: Parameters required for bring-your-own-certification via Key Vault
  * secretName `string`: The name of the Key Vault secret representing the full certificate PFX
  * secretVersion `string`: The version of the Key Vault secret representing the full certificate PFX
  * vault `object`: The Key Vault containing the SSL certificate
    * id `string`: Resource ID.

### LoadBalancingSettingsListResult
* LoadBalancingSettingsListResult `object`: Result of the request to list load balancing settings. It contains a list of load balancing settings objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of LoadBalancingSettings objects if there are any.
  * value `array`: List of Backend Pools within a Front Door.
    * items [LoadBalancingSettingsModel](#loadbalancingsettingsmodel)

### LoadBalancingSettingsModel
* LoadBalancingSettingsModel `object`: Load balancing settings for a backend pool
  * name `string`: Resource name.
  * properties [LoadBalancingSettingsProperties](#loadbalancingsettingsproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### LoadBalancingSettingsProperties
* LoadBalancingSettingsProperties `object`: The JSON object that contains the properties required to create load balancing settings
  * resourceState [ResourceState](#resourcestate)
  * additionalLatencyMilliseconds `integer`: The additional latency in milliseconds for probes to fall into the lowest latency bucket
  * sampleSize `integer`: The number of samples to consider for load balancing decisions
  * successfulSamplesRequired `integer`: The number of samples within the sample period that must succeed

### LoadBalancingSettingsUpdateParameters
* LoadBalancingSettingsUpdateParameters `object`: Round-Robin load balancing settings for a backend pool
  * additionalLatencyMilliseconds `integer`: The additional latency in milliseconds for probes to fall into the lowest latency bucket
  * sampleSize `integer`: The number of samples to consider for load balancing decisions
  * successfulSamplesRequired `integer`: The number of samples within the sample period that must succeed

### PurgeParameters
* PurgeParameters `object`: Parameters required for content purge.
  * contentPaths **required** `array`: The path to the content to be purged. Can describe a file path or a wild card directory.
    * items `string`

### RedirectConfiguration
* RedirectConfiguration `object`: Describes Redirect Route.
  * customFragment `string`: Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
  * customHost `string`: Host to redirect. Leave empty to use the incoming host as the destination host.
  * customPath `string`: The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
  * customQueryString `string`: The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in <key>=<value> format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
  * redirectProtocol `string` (values: HttpOnly, HttpsOnly, MatchRequest): The protocol of the destination to where the traffic is redirected
  * redirectType `string` (values: Moved, Found, TemporaryRedirect, PermanentRedirect): The redirect type the rule will use when redirecting traffic.
  * @odata.type **required** `string`

### ResourceState
* Resource status of the Front Door or Front Door SubResource. `string` (values: Creating, Enabling, Enabled, Disabling, Disabled, Deleting)

### ResourceType
* ResourceType `string` (values: Microsoft.Network/frontDoors, Microsoft.Network/frontDoors/frontendEndpoints): Type of Front Door resource used in CheckNameAvailability.

### RouteConfiguration
* RouteConfiguration `object`: Base class for all types of Route.
  * @odata.type **required** `string`

### RoutingRule
* RoutingRule `object`: A routing rule represents a specification for traffic to treat and where to send it, along with health probe information.
  * name `string`: Resource name.
  * properties [RoutingRuleProperties](#routingruleproperties)
  * type `string`: Resource type.
  * id `string`: Resource ID.

### RoutingRuleListResult
* RoutingRuleListResult `object`: Result of the request to list Routing Rules. It contains a list of Routing Rule objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of RoutingRule objects if there are any.
  * value `array`: List of Routing Rules within a Front Door.
    * items [RoutingRule](#routingrule)

### RoutingRuleProperties
* RoutingRuleProperties `object`: The JSON object that contains the properties required to create a routing rule.
  * resourceState [ResourceState](#resourcestate)
  * acceptedProtocols `array`: Protocol schemes to match for this rule
    * items `string` (values: Http, Https): Accepted protocol schemes.
  * enabledState `string` (values: Enabled, Disabled): Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
  * frontendEndpoints `array`: Frontend endpoints associated with this rule
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * patternsToMatch `array`: The route patterns of the rule.
    * items `string`: A route pattern of the rule. Must not have any * except possibly after the final / at the end of the path.
  * routeConfiguration [RouteConfiguration](#routeconfiguration)

### RoutingRuleUpdateParameters
* RoutingRuleUpdateParameters `object`: Routing rules to apply to an endpoint
  * acceptedProtocols `array`: Protocol schemes to match for this rule
    * items `string` (values: Http, Https): Accepted protocol schemes.
  * enabledState `string` (values: Enabled, Disabled): Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
  * frontendEndpoints `array`: Frontend endpoints associated with this rule
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * patternsToMatch `array`: The route patterns of the rule.
    * items `string`: A route pattern of the rule. Must not have any * except possibly after the final / at the end of the path.
  * routeConfiguration [RouteConfiguration](#routeconfiguration)

### ValidateCustomDomainInput
* ValidateCustomDomainInput `object`: Input of the custom domain to be validated for DNS mapping.
  * hostName **required** `string`: The host name of the custom domain. Must be a domain name.

### ValidateCustomDomainOutput
* ValidateCustomDomainOutput `object`: Output of custom domain validation.
  * customDomainValidated `boolean`: Indicates whether the custom domain is valid or not.
  * message `string`: Error message describing why the custom domain is not valid.
  * reason `string`: The reason why the custom domain is not valid.


